// Transaction Detection Middleware - Uses Gemini AI to detect and process transactions
export class TransactionMiddleware {

    static async detectTransaction(aiResponse, player, gameContext) {
        // --- NEW CODE START ---
        // Direct command detection to bypass narrative analysis for simple cases.
        const giveGoldRegex = /^(?:give|pay)\s+(.+?)\s+(\d+)\s+gold/i; // Matches "give [recipient] [amount] gold"
        const giveMatch = command.match(giveGoldRegex);

        if (giveMatch) {
            const recipientName = giveMatch[1];
            const amount = parseInt(giveMatch[2], 10);

            console.log(`TransactionMiddleware: Direct command detected to give ${amount} gold to ${recipientName}.`);

            // Check if player has enough gold
            if (player.gold >= amount) {
                // Manually construct the transaction data.
                return {
                    hasTransaction: true,
                    confidence: 1.0, // We are 100% confident.
                    transactionType: "gift",
                    items: [],
                    goldChange: -amount, // Negative because the player is giving it away.
                    vendor: recipientName
                };
            } else {
                // Player doesn't have enough gold, return a failure message.
                // You can customize this response.
                if (typeof window.displayMessage === 'function') {
                    window.displayMessage(`You check your pouch, but you don't have ${amount} gold to give.`, "error");
                }
                return { hasTransaction: false };
            }
        }
        // --- NEW CODE END ---


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
                    if (typeof this.generateStructuredItem === 'function' && typeof window.ItemManager !== 'undefined' && typeof window.ItemManager.addItemToInventory === 'function') {
                        const generatedItem = this.generateStructuredItem(itemData, player);
                        if (generatedItem) {
                            window.ItemManager.addItemToInventory(player, generatedItem); // This should also save inventory to localStorage via ItemManager's own method
                            results.push(generatedItem);
                            if (typeof window.displayMessage === 'function') {
                                window.displayMessage(`Added to inventory: ${generatedItem.name}`, 'success');
                                if (generatedItem.description) {
                                    window.displayMessage(generatedItem.description, 'info');
                                }
                            }
                            itemsChanged = true;
                        }
                    } else {
                        console.error("generateStructuredItem or ItemManager.addItemToInventory missing.");
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

    static generateStructuredItem(itemData, player) {
        try {
            // Use ItemGenerator with enhanced context
            const context = {
                category: (typeof window !== 'undefined' && window.itemCategories && window.itemCategories[itemData.category]) || (typeof window !== 'undefined' && window.itemCategories && window.itemCategories.MAGICAL),
                rarity: itemData.rarity || 'COMMON',
                locationContext: player.currentLocation,
                playerLevel: player.level,
                playerClass: player.class,
                narrativeContext: itemData.description
            };

            const baseItem = (typeof window !== 'undefined' && window.ItemGenerator) ? window.ItemGenerator.generateItem(context) : null;
            if (!baseItem) {
                console.error("ItemGenerator.generateItem failed or ItemGenerator not found.");
                return null;
            }
            // Override with narrative-specific data
            if (itemData.name) {
                baseItem.name = itemData.name;
            }

            if (itemData.description) {
                baseItem.description = itemData.description;
            }

            // Set equipment properties
            baseItem.isEquippable = itemData.isEquippable || false;
            baseItem.isUsable = itemData.isUsable || false;

            if (baseItem.isEquippable && itemData.slot && itemData.slot !== 'null') {
                baseItem.slot = itemData.slot;
                baseItem.type = (typeof window !== 'undefined' && window.itemCategories) ? window.itemCategories.ARMOR : 'armor'; // Ensure it's treated as equipment
            }
            if (baseItem.isEquippable && typeof this.addEquipmentProperties === 'function') {
                this.addEquipmentProperties(baseItem, itemData);
            }
            return baseItem;
        } catch (error) {
            console.error('Error generating structured item:', error);
            return null;
        }
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