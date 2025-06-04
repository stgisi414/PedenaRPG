
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
    "transactionType": "purchase/gift/loot/trade/reward",
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
        if (!transactionData.hasTransaction) return;

        const results = [];
        
        // Process gold change
        if (transactionData.goldChange !== 0) {
            window.updateGold(transactionData.goldChange, 
                transactionData.transactionType === 'purchase' ? 'item purchase' : 
                transactionData.transactionType === 'reward' ? 'quest reward' : 'transaction');
        }

        // Process items
        if (transactionData.items && transactionData.items.length > 0) {
            for (const itemData of transactionData.items) {
                const generatedItem = this.generateStructuredItem(itemData, player);
                if (generatedItem) {
                    window.ItemManager.addItemToInventory(player, generatedItem);
                    results.push(generatedItem);
                    
                    window.displayMessage(`Added to inventory: ${generatedItem.name}`, 'success');
                    if (generatedItem.description) {
                        window.displayMessage(generatedItem.description, 'info');
                    }
                }
            }
        }

        // Save game after transaction
        window.saveGame();
        
        return results;
    }

    static generateStructuredItem(itemData, player) {
        try {
            // Use ItemGenerator with enhanced context
            const context = {
                category: window.itemCategories[itemData.category] || window.itemCategories.MAGICAL,
                rarity: itemData.rarity || 'COMMON',
                locationContext: player.currentLocation,
                playerLevel: player.level,
                playerClass: player.class,
                narrativeContext: itemData.description
            };

            const baseItem = window.ItemGenerator.generateItem(context);
            
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
                baseItem.type = window.itemCategories.ARMOR; // Ensure it's treated as equipment
            }

            // Add equipment-specific properties based on slot
            if (baseItem.isEquippable) {
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
                    item.armor = Math.max(1, Math.floor(window.itemRarity[item.rarity]?.multiplier || 1));
                }
                break;
            case 'mainHand':
                if (!item.damage) {
                    const damageMap = {
                        'COMMON': '1d6', 'UNCOMMON': '1d8', 'RARE': '1d10', 
                        'EPIC': '2d6', 'LEGENDARY': '2d8', 'ARTIFACT': '2d10'
                    };
                    item.damage = damageMap[item.rarity] || '1d6';
                }
                break;
            case 'amulet':
            case 'ring1':
            case 'ring2':
                // Jewelry typically has magical effects
                if (!item.effects || item.effects.length === 0) {
                    item.effects = ['magical_enhancement'];
                }
                break;
        }
    }
}

export default TransactionMiddleware;
