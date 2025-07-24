// Transaction Detection Middleware - Uses Gemini AI to detect and process transactions
export class TransactionMiddleware {

    static async detectTransaction(aiResponse, command, player, gameContext) {
        console.log(`--- TransactionMiddleware.detectTransaction CALLED ---`); // <<< ADD THIS LINE
        console.log(`Command received: "${command}"`); // <<< ADD THIS LINE
        
        // --- NEW AND IMPROVED DIRECT COMMAND DETECTION ---
        const giveRegex = /^(?:give|pay)\s+(.+?)\s+(\d+)\s+gold/i; // Handles "give [recipient] [amount] gold"
        const donateRegex = /^donate\s+(\d+)\s+gold(?:\s+to\s+(.+))?/i; // Handles "donate [amount] gold to [recipient]"

        const giveMatch = command.match(giveRegex);
        const donateMatch = command.match(donateRegex);

        let match, amount, recipientName;

        if (giveMatch) {
            match = giveMatch;
            recipientName = match[1] || "someone";
            amount = parseInt(match[2], 10);
        } else if (donateMatch) {
            match = donateMatch;
            recipientName = match[2] || "a worthy cause";
            amount = parseInt(match[1], 10);
        }

        if (match) {
            console.log(`TransactionMiddleware: Direct command detected: ${command}`);

            if (player.gold >= amount) {
                // Manually construct the transaction data, bypassing AI analysis.
                return {
                    hasTransaction: true,
                    confidence: 1.0,
                    transactionType: "gift", // Giving/donating is a type of gift
                    items: [],
                    goldChange: -amount, // Negative, as player loses gold
                    vendor: recipientName
                };
            } else {
                // Player doesn't have enough gold.
                if (typeof window.displayMessage === 'function') {
                    window.displayMessage(`You check your pouch, but you don't have ${amount} gold to give.`, "error");
                }
                return { hasTransaction: false };
            }
        }

        // This is the original code, which will now only run if the direct command regex doesn't match.
        const transactionKeywords = [
            'you buy', 'you purchase', 'you sell', 'you trade', 'you pay',
            'costs', 'price', 'gold pieces', 'for sale', 'merchant offers',
            'shopkeeper', 'vendor', 'buy for', 'sell for', 'trade for',
            'you lost.*gold', 'you gained.*gold', 'you receive.*gold',
            'added to inventory', 'removed from inventory'
        ];

        const hasTransactionKeywords = transactionKeywords.some(keyword =>
            aiResponse.toLowerCase().includes(keyword.toLowerCase()) ||
            new RegExp(keyword, 'i').test(aiResponse)
        );

        // Don't even attempt transaction detection if no keywords are present
        if (!hasTransactionKeywords) {
            console.log("TransactionMiddleware: No transaction keywords detected, skipping analysis");
            return { hasTransaction: false };
        }

        const transactionPrompt = `
STRICT TRANSACTION ANALYSIS - Only detect ACTUAL completed transactions, not descriptions or mentions.

Analyze this game narrative response for COMPLETED transactions or item exchanges:

"${aiResponse}"

Player context: ${player.name} (Level ${player.level} ${player.class})
Current gold: ${player.gold}
Location: ${player.currentLocation}

CRITICAL RULES:
1. ONLY detect transactions that have ACTUALLY HAPPENED in this response.
2. Look for explicit indicators like "you buy", "you sell", "you pay", "costs X gold".
3. **DO NOT detect quest rewards.** Text like "you receive 150 gold for the quest" is a quest reward, NOT a transaction, and should be ignored.
4. DO NOT detect transactions for:
   - Item descriptions or mentions
   - Offers that weren't accepted
   - Items being shown or examined
   - Past transactions being referenced
   - Hypothetical scenarios

4. REQUIRE explicit confirmation that a transaction occurred (like "you lost X gold" or "you gained X gold")

Respond with ONLY valid JSON in this exact format:
{
    "hasTransaction": true/false,
    "confidence": 0.0-1.0,
    "transactionType": "purchase/sale/gift/loot/trade/reward",
    "items": [
        {
            "name": "item name",
            "cost": 0,
            "category": "WEAPON/ARMOR/MAGICAL/CONSUMABLE/JEWELRY/etc",
            "rarity": "COMMON/UNCOMMON/RARE/EPIC/LEGENDARY",
            "isEquippable": true/false,
            "isUsable": true/false,
            "slot": "head/chest/hands/feet/mainHand/offHand/amulet/ring1/ring2/null",
            "description": "item description from narrative"
        }
    ],
    "goldChange": 0,
    "vendor": "vendor name or null"
}

IMPORTANT NOTES:
- For PURCHASES: goldChange should be negative (player loses gold), items are added to inventory
- For SALES: goldChange should be positive (player gains gold), items are removed from inventory
- Only set confidence to 0.8+ if you're absolutely certain a transaction occurred
- If confidence is below 0.7, set hasTransaction to false

If no actual transaction is detected, return {"hasTransaction": false, "confidence": 0.0}
`;

        try {
            const response = await window.callGeminiAPI(transactionPrompt, 0.3, 600, false);
            if (!response) return null;

            const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

            if (jsonMatch) {
                const transactionData = JSON.parse(jsonMatch[0]);

                // Apply confidence threshold - only process high-confidence transactions
                if (transactionData.confidence && transactionData.confidence < 0.7) {
                    console.log(`TransactionMiddleware: Low confidence transaction (${transactionData.confidence}), ignoring`);
                    return { hasTransaction: false };
                }

                // Additional validation - ensure transaction has meaningful data
                if (transactionData.hasTransaction &&
                    (!transactionData.items || transactionData.items.length === 0) &&
                    transactionData.goldChange === 0) {
                    console.log("TransactionMiddleware: Transaction flagged but no items or gold change detected, ignoring");
                    return { hasTransaction: false };
                }

                return transactionData;
            }
        } catch (error) {
            console.error('Transaction detection error:', error);
        }

        return null;
    }

    static async processTransaction(transactionData, player) {
        console.log("TransactionMiddleware: processTransaction called with data:", JSON.stringify(transactionData, null, 2)); // ADD THIS LOG
        if (!transactionData.hasTransaction) return;

        const results = [];
        let goldActuallyChanged = false;
        let itemsChanged = false;

        // Process gold change
        if (transactionData.goldChange !== 0) {
            const goldAmount = Number(transactionData.goldChange);
            if (!isNaN(goldAmount) && typeof window.updateGold === 'function') {
                window.updateGold(goldAmount, transactionData.transactionType || 'transaction');
                // window.updateGold should call updatePlayerStatsDisplay() and saveGame()
                goldActuallyChanged = true;
            } else {
                console.error("Invalid goldChange amount or updateGold function missing:", transactionData.goldChange);
                if (typeof window.updateGold !== 'function') window.displayMessage("Error: updateGold function not found.", "error");
            }
        }

        // Process items
        if (transactionData.items && transactionData.items.length > 0) {
            if (transactionData.transactionType === 'sale') {
                for (const itemData of transactionData.items) {
                    if (typeof this.removeItemFromInventory === 'function') {
                        const removed = this.removeItemFromInventory(player, itemData.name);
                        if (removed) {
                            results.push(removed);
                            if (typeof window.displayMessage === 'function') window.displayMessage(`Sold: ${removed.name}`, 'success');
                            itemsChanged = true;
                        } else {
                            if (typeof window.displayMessage === 'function') window.displayMessage(`Could not find ${itemData.name} to sell`, 'error');
                        }
                    }
                }
            } else { // Purchases, rewards, loot
                for (const itemData of transactionData.items) {
                    console.log('[TransactionMiddleware] Processing item data for addition:', JSON.stringify(itemData, null, 2));
                    
                    if (typeof this.generateStructuredItem === 'function' && typeof window.ItemManager !== 'undefined' && typeof window.ItemManager.addItemToInventory === 'function') {
                        const generatedItem = await this.generateStructuredItem(itemData, player);
                        
                        console.log('[TransactionMiddleware] Generated item result:', generatedItem ? {
                            name: generatedItem.name,
                            id: generatedItem.id,
                            type: generatedItem.type,
                            value: generatedItem.value
                        } : 'null');
                        
                        // ENHANCED VALIDATION: Check multiple conditions for valid item
                        const isValidItem = generatedItem && 
                                          generatedItem.name && 
                                          generatedItem.name !== 'undefined' && 
                                          generatedItem.name !== undefined &&
                                          typeof generatedItem.name === 'string' &&
                                          generatedItem.name.trim() !== '' &&
                                          generatedItem.name.toLowerCase() !== 'undefined';
                        
                        if (isValidItem) {
                            console.log('[TransactionMiddleware] Adding valid item to inventory:', generatedItem.name);
                            window.ItemManager.addItemToInventory(player, generatedItem);
                            results.push(generatedItem);
                            if (typeof window.displayMessage === 'function') {
                                window.displayMessage(`Added to inventory: ${generatedItem.name}`, 'success');
                                if (generatedItem.description) {
                                    window.displayMessage(generatedItem.description, 'info');
                                }
                            }
                            itemsChanged = true;
                        } else {
                            console.error('[TransactionMiddleware] Generated item failed validation:', {
                                item: generatedItem,
                                hasItem: !!generatedItem,
                                hasName: !!generatedItem?.name,
                                nameValue: generatedItem?.name,
                                nameType: typeof generatedItem?.name,
                                nameIsUndefined: generatedItem?.name === 'undefined',
                                nameIsUndefinedLower: generatedItem?.name?.toLowerCase?.() === 'undefined'
                            });
                            
                            // Display error message to user
                            if (typeof window.displayMessage === 'function') {
                                window.displayMessage(`Transaction completed but item could not be properly generated. Please check your inventory.`, 'error');
                            }
                        }
                    } else {
                        console.error('[TransactionMiddleware] Required functions missing:', {
                            hasGenerateStructuredItem: typeof this.generateStructuredItem === 'function',
                            hasItemManager: typeof window.ItemManager !== 'undefined',
                            hasAddItemToInventory: typeof window.ItemManager?.addItemToInventory === 'function'
                        });
                    }
                }
            }
        }

        // Explicitly refresh UI if changes occurred
        if (itemsChanged) { // itemsChanged should be true if an item was added/removed
            const inventoryInterface = document.getElementById('inventory-interface');
            if (inventoryInterface && !inventoryInterface.classList.contains('hidden') && typeof window.displayInventory === 'function') {
                console.log("TransactionMiddleware: Explicitly refreshing inventory display.");
                window.displayInventory();
            }

            // Also refresh shop display if it's open (for sell transactions)
            const shopInterface = document.getElementById('shop-interface');
            if (shopInterface && !shopInterface.classList.contains('hidden') && typeof window.showShop === 'function') {
                console.log("TransactionMiddleware: Refreshing shop display.");
                window.showShop();
            }
        }

        // updateGold already calls updatePlayerStatsDisplay.
        // If gold didn't change but items did, updatePlayerStatsDisplay might not have been called.
        // However, player stats display usually only shows gold, HP, level which updateGold handles.
        // If you have other stats (like inventory count shown in main UI) that need update,
        // you might need a more general UI update function here.

        // Only save once at the end if changes occurred, to avoid duplicate saves
        // Note: updateGold already calls saveGame, so we only save here if gold didn't change
        // but items did change
        if (itemsChanged && !goldActuallyChanged) {
            if (typeof window.saveGame === 'function') {
                window.saveGame();
            } else {
                console.error("saveGame function not found on window.");
            }
        }

        return results;
    }

    static async generateStructuredItem(itemData, player) {
        try {
            console.log('[TransactionMiddleware] === STARTING ITEM GENERATION ===');
            console.log('[TransactionMiddleware] Raw itemData received:', JSON.stringify(itemData, null, 2));
            console.log('[TransactionMiddleware] Player context:', { name: player.name, level: player.level, class: player.class, location: player.currentLocation });

            // Validate input data
            if (!itemData || typeof itemData !== 'object') {
                console.warn('[TransactionMiddleware] Invalid itemData provided, creating fallback');
                return this.createFallbackItem('Unknown Item', player);
            }

            // Extract name early and validate it - be more strict about validation
            let itemName = itemData.name;
            if (!itemName || itemName === 'undefined' || itemName === undefined || typeof itemName !== 'string' || itemName.trim() === '' || itemName.toLowerCase() === 'undefined') {
                console.warn('[TransactionMiddleware] Invalid or missing item name in itemData:', itemName);
                console.warn('[TransactionMiddleware] Using fallback name instead');
                itemName = 'Mysterious Item';
            } else {
                // Clean the item name
                itemName = itemName.trim();
                if (itemName === 'undefined' || itemName.toLowerCase() === 'undefined') {
                    console.warn('[TransactionMiddleware] Item name was "undefined", using fallback');
                    itemName = 'Mysterious Item';
                }
            }

            console.log('[TransactionMiddleware] Validated item name:', itemName);

            // Check if ItemGenerator is available
            if (typeof window === 'undefined' || !window.ItemGenerator) {
                console.error('[TransactionMiddleware] ItemGenerator not available, using fallback');
                return this.createFallbackItem(itemName, player);
            }

            // Check if itemCategories is available
            if (!window.itemCategories) {
                console.error('[TransactionMiddleware] itemCategories not available, using fallback');
                return this.createFallbackItem(itemName, player);
            }

            // Create enhanced context for ItemGenerator
            // Map category names to correct itemCategories values
            const categoryMapping = {
                'CONSUMABLE': window.itemCategories?.CONSUMABLE || window.itemCategories?.consumable || 'consumable',
                'WEAPON': window.itemCategories?.WEAPON || window.itemCategories?.weapon || 'weapon', 
                'ARMOR': window.itemCategories?.ARMOR || window.itemCategories?.armor || 'armor',
                'MAGICAL': window.itemCategories?.MAGICAL || window.itemCategories?.magical || 'magical',
                'JEWELRY': window.itemCategories?.JEWELRY || window.itemCategories?.jewelry || 'jewelry'
            };
            
            // Use the actual itemCategories values if available
            let mappedCategory;
            if (window.itemCategories) {
                // Try uppercase first, then lowercase
                mappedCategory = window.itemCategories[itemData.category] || 
                               window.itemCategories[itemData.category?.toLowerCase()] ||
                               categoryMapping[itemData.category] ||
                               window.itemCategories.CONSUMABLE ||
                               window.itemCategories.consumable ||
                               'consumable';
            } else {
                mappedCategory = 'consumable';
            }
            
            const context = {
                category: mappedCategory,
                rarity: itemData.rarity || 'COMMON',
                locationContext: player.currentLocation,
                playerLevel: player.level,
                playerClass: player.class,
                narrativeContext: itemData.description
            };

            console.log('[TransactionMiddleware] ItemGenerator context:', JSON.stringify(context, null, 2));

            // Generate item using ItemGenerator
            const baseItem = await window.ItemGenerator.generateItem(context);
            
            console.log('[TransactionMiddleware] ItemGenerator returned:', baseItem ? {
                name: baseItem.name,
                id: baseItem.id,
                type: baseItem.type,
                rarity: baseItem.rarity,
                value: baseItem.value
            } : 'null/undefined');
            
            // If ItemGenerator failed, create fallback immediately
            if (!baseItem) {
                console.error('[TransactionMiddleware] ItemGenerator returned null/undefined, using fallback');
                return this.createFallbackItem(itemName, player);
            }

            // CRITICAL: Force the correct name from itemData and validate it again
            if (itemName && itemName !== 'undefined' && itemName.trim() !== '') {
                baseItem.name = itemName;
                console.log('[TransactionMiddleware] Set item name to:', baseItem.name);
            } else {
                console.error('[TransactionMiddleware] Item name validation failed after generation, using fallback item');
                return this.createFallbackItem('Mysterious Item', player);
            }

            // Override description if provided
            if (itemData.description && itemData.description !== 'undefined' && itemData.description.trim() !== '') {
                baseItem.description = itemData.description;
                console.log('[TransactionMiddleware] Set custom description');
            }

            // Ensure item has required properties
            if (!baseItem.id) {
                baseItem.id = `generated_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
                console.log('[TransactionMiddleware] Added missing ID:', baseItem.id);
            }

            if (!baseItem.value || baseItem.value <= 0) {
                baseItem.value = Math.max(1, Math.floor(Math.random() * (player.level * 5)) + 10);
                console.log('[TransactionMiddleware] Set item value:', baseItem.value);
            }

            // Set equipment properties
            baseItem.isEquippable = itemData.isEquippable || false;
            baseItem.isUsable = itemData.isUsable || false;

            if (baseItem.isEquippable && itemData.slot && itemData.slot !== 'null') {
                baseItem.slot = itemData.slot;
                baseItem.type = window.itemCategories.ARMOR || 'armor';
                console.log('[TransactionMiddleware] Set as equippable in slot:', itemData.slot);
            }
            
            if (baseItem.isEquippable && typeof this.addEquipmentProperties === 'function') {
                this.addEquipmentProperties(baseItem, itemData);
            }

            // FINAL CRITICAL VALIDATION - absolutely ensure the name is valid
            if (!baseItem.name || baseItem.name === 'undefined' || baseItem.name === undefined || typeof baseItem.name !== 'string' || baseItem.name.trim() === '' || baseItem.name.toLowerCase() === 'undefined') {
                console.error('[TransactionMiddleware] CRITICAL: Final item has invalid name after all processing:', baseItem.name);
                console.error('[TransactionMiddleware] Forcing fallback item creation');
                return this.createFallbackItem('Mysterious Transaction Item', player);
            }

            console.log('[TransactionMiddleware] === ITEM GENERATION SUCCESS ===');
            console.log('[TransactionMiddleware] Final item:', {
                name: baseItem.name,
                id: baseItem.id,
                type: baseItem.type,
                value: baseItem.value,
                description: baseItem.description ? baseItem.description.substring(0, 50) + '...' : 'No description'
            });
            
            return baseItem;
        } catch (error) {
            console.error('[TransactionMiddleware] === ITEM GENERATION ERROR ===');
            console.error('[TransactionMiddleware] Error:', error.message);
            console.error('[TransactionMiddleware] Stack:', error.stack);
            console.log('[TransactionMiddleware] Creating fallback item');
            return this.createFallbackItem('Transaction Error Item', player);
        }
    }

    static createFallbackItem(itemName, player) {
        // Ensure we have a valid item name, handle all edge cases
        let safeName = itemName;
        if (!safeName || safeName === 'undefined' || safeName === undefined || typeof safeName !== 'string' || safeName.trim() === '' || safeName.toLowerCase() === 'undefined') {
            safeName = 'Unknown Item';
        }
        
        const cleanName = safeName.replace(/^(the|a|an)\s+/i, '').trim();
        let capitalizedName = cleanName;
        
        // Only capitalize if we have a valid string
        if (cleanName && cleanName.length > 0) {
            capitalizedName = cleanName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        } else {
            capitalizedName = 'Unknown Item';
        }
        
        return {
            id: `fallback_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            name: capitalizedName,
            type: 'trinket',
            rarity: 'COMMON',
            description: `A ${cleanName.toLowerCase() || 'mysterious item'} that you've encountered. While it appears ordinary, it might have some value or significance in your adventures.`,
            value: Math.max(1, Math.floor(Math.random() * (player.level * 5)) + 10),
            effects: [],
            isIdentified: true,
            source: 'transaction_fallback',
            slot: null
        };
    }

    static addEquipmentProperties(item, itemData) {
        // Add appropriate stats based on equipment slot
        switch (itemData.slot) {
            case 'head':
            case 'chest':
            case 'hands':
            case 'feet':
                if (!item.armor) {
                    item.armor = Math.max(1, Math.floor(((typeof window !== 'undefined' && window.itemRarity && window.itemRarity[item.rarity])?.multiplier || 1)));
                }
                break;
            case 'mainHand':
                if (!item.damage) {
                    const damageMap = {
                        'COMMON': '1d6', 'UNCOMMON': '1d8', 'RARE': '1d10',
                        'EPIC': '2d6', 'LEGENDARY': '2d8', 'ARTIFACT': '2d10', 'MYTHIC': '3d6'
                    };
                    item.damage = damageMap[item.rarity] || '1d6';
                }
                break;
            case 'amulet':
            case 'ring1':
            case 'ring2':
                if (!item.effects || item.effects.length === 0) {
                    item.effects = ['magical_enhancement'];
                }
                break;
        }
    }

    static removeItemFromInventory(player, itemName) {
        if (!player.inventory || player.inventory.length === 0) return null;
        const itemIndex = player.inventory.findIndex(item =>
            item.name.toLowerCase().includes(itemName.toLowerCase()) ||
            itemName.toLowerCase().includes(item.name.toLowerCase())
        );
        if (itemIndex === -1) return null;
        const removedItem = player.inventory.splice(itemIndex, 1)[0];

        console.log(`TransactionMiddleware: Removed item ${removedItem.name} from inventory`);

        // Force save inventory immediately after removal
        if (typeof window.ItemManager !== 'undefined' && typeof window.ItemManager.saveInventoryToStorage === 'function') {
            window.ItemManager.saveInventoryToStorage(player);
            console.log(`TransactionMiddleware: Inventory saved after removing ${removedItem.name}`);
        }

        // Also save the full game state
        if (typeof window.saveGame === 'function') {
            window.saveGame();
            console.log(`TransactionMiddleware: Full game saved after removing ${removedItem.name}`);
        }

        return removedItem;
    }
}

window.TransactionMiddleware = TransactionMiddleware