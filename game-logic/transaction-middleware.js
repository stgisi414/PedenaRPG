// Transaction Detection Middleware - Uses Gemini AI to detect and process transactions
export class TransactionMiddleware {

    static async detectTransaction(aiResponse, player, gameContext) {
        const transactionPrompt = `
Analyze this game narrative response for any transactions or item exchanges:

"${aiResponse}"

Player context: ${player.name} (Level ${player.level} ${player.class})
Current gold: ${player.gold}
Location: ${player.currentLocation}

Respond with ONLY valid JSON in this exact format:
{
    "hasTransaction": true/false,
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
- For sales, the item names should match what the player actually has in inventory

If no transaction is detected, return {"hasTransaction": false}
`;

        try {
            const response = await window.callGeminiAPI(transactionPrompt, 0.3, 600, false);
            if (!response) return null;

            const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

            if (jsonMatch) {
                const transactionData = JSON.parse(jsonMatch[0]);
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
                if(typeof window.updateGold !== 'function') window.displayMessage("Error: updateGold function not found.", "error");
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
        if (itemsChanged) {
            // If the inventory screen is currently visible, refresh it
            const inventoryInterface = document.getElementById('inventory-interface');
            if (inventoryInterface && !inventoryInterface.classList.contains('hidden') && typeof window.displayInventory === 'function') {
                window.displayInventory();
            }
        }

        // updateGold already calls updatePlayerStatsDisplay.
        // If gold didn't change but items did, updatePlayerStatsDisplay might not have been called.
        // However, player stats display usually only shows gold, HP, level which updateGold handles.
        // If you have other stats (like inventory count shown in main UI) that need update,
        // you might need a more general UI update function here.

        // Ensure game is saved if any significant change happened
        // Note: updateGold and ItemManager.addItemToInventory (if it calls saveInventoryToStorage)
        // might already call saveGame or save parts of the state.
        // A final saveGame here ensures atomicity of the transaction's effects.
        if (goldActuallyChanged || itemsChanged) {
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
        if (typeof window.ItemManager !== 'undefined' && typeof window.ItemManager.saveInventoryToStorage === 'function') {
            window.ItemManager.saveInventoryToStorage(player);
        }
        return removedItem;
    }
}

export default TransactionMiddleware;