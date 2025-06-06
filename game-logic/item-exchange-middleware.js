
// Item Exchange Middleware - Handles giving items to NPCs and item trades
export class ItemExchangeMiddleware {

    static async detectItemExchange(aiResponse, command, player, gameContext) {
        // Check if the command or response contains item exchange indicators
        const exchangeKeywords = [
            'give', 'hand', 'offer', 'present', 'show', 'trade', 'exchange',
            'pass', 'deliver', 'share', 'provide', 'donate', 'gift'
        ];

        // Exclude commands that are requests for items back
        const requestBackKeywords = [
            'give me back', 'give it back', 'return', 'can i have', 'give me my',
            'i want back', 'refund', 'undo', 'reverse', 'take back'
        ];

        const isRequestBack = requestBackKeywords.some(keyword => 
            command.toLowerCase().includes(keyword)
        );

        // If this is a request to get something back, don't treat as giving away
        if (isRequestBack) {
            console.log("ItemExchangeMiddleware: Detected request for item back, not an exchange");
            return { hasExchange: false };
        }

        const hasExchangeKeywords = exchangeKeywords.some(keyword => 
            command.toLowerCase().includes(keyword) || 
            aiResponse.toLowerCase().includes(keyword)
        );

        if (!hasExchangeKeywords) {
            console.log("ItemExchangeMiddleware: No exchange keywords detected");
            return { hasExchange: false };
        }

        const exchangePrompt = `
ITEM EXCHANGE ANALYSIS - Detect if the player is giving an item to an NPC.

Player command: "${command}"
AI Response: "${aiResponse}"

Player context: ${player.name} (Level ${player.level} ${player.class})
Current inventory items: ${player.inventory ? player.inventory.map(item => item.name).join(', ') : 'empty'}

CRITICAL RULES:
1. ONLY detect if the player is actually GIVING an item to someone
2. Look for explicit indicators like "give X to Y", "hand over the", "offer", "present"
3. Extract the specific item name and recipient NPC name
4. DO NOT detect if just showing, examining, or mentioning items

Respond with ONLY valid JSON in this exact format:
{
    "hasExchange": true/false,
    "confidence": 0.0-1.0,
    "itemName": "exact item name from inventory",
    "recipientName": "NPC name receiving the item",
    "exchangeType": "give/trade/offer",
    "description": "what happened in the exchange"
}

If no actual item exchange is detected, return {"hasExchange": false, "confidence": 0.0}
`;

        try {
            const response = await window.callGeminiAPI(exchangePrompt, 0.3, 400, false);
            if (!response) return null;

            const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

            if (jsonMatch) {
                const exchangeData = JSON.parse(jsonMatch[0]);
                
                // Apply confidence threshold
                if (exchangeData.confidence && exchangeData.confidence < 0.7) {
                    console.log(`ItemExchangeMiddleware: Low confidence exchange (${exchangeData.confidence}), ignoring`);
                    return { hasExchange: false };
                }
                
                return exchangeData;
            }
        } catch (error) {
            console.error('Item exchange detection error:', error);
        }

        return null;
    }

    static async processItemExchange(exchangeData, player) {
        console.log("ItemExchangeMiddleware: Processing exchange:", JSON.stringify(exchangeData, null, 2));
        
        if (!exchangeData.hasExchange) return;

        const { itemName, recipientName, exchangeType, description } = exchangeData;
        
        // Find the item in player's inventory
        const itemIndex = this.findItemInInventory(player, itemName);
        
        if (itemIndex === -1) {
            if (typeof window.displayMessage === 'function') {
                window.displayMessage(`You don't have "${itemName}" in your inventory.`, 'error');
            }
            return { success: false, message: 'Item not found' };
        }

        const item = player.inventory[itemIndex];
        
        // Remove item from inventory
        const removedItem = player.inventory.splice(itemIndex, 1)[0];
        
        // Update displays and save
        if (typeof window.displayMessage === 'function') {
            window.displayMessage(`You gave ${removedItem.name} to ${recipientName}.`, 'success');
            if (description) {
                window.displayMessage(description, 'info');
            }
        }

        // Refresh inventory display if open
        const inventoryInterface = document.getElementById('inventory-interface');
        if (inventoryInterface && !inventoryInterface.classList.contains('hidden') && typeof window.displayInventory === 'function') {
            console.log("ItemExchangeMiddleware: Refreshing inventory display after exchange.");
            window.displayInventory();
        }

        // Save inventory changes
        if (typeof window.ItemManager !== 'undefined' && typeof window.ItemManager.saveInventoryToStorage === 'function') {
            window.ItemManager.saveInventoryToStorage(player);
        }

        // Save game state
        if (typeof window.saveGame === 'function') {
            window.saveGame();
        }

        // Check for quest completion related to item delivery
        if (typeof window.checkQuestCompletion === 'function') {
            window.checkQuestCompletion(`gave ${removedItem.name} to ${recipientName}`);
        }

        return { 
            success: true, 
            itemGiven: removedItem, 
            recipient: recipientName,
            message: `Successfully gave ${removedItem.name} to ${recipientName}` 
        };
    }

    static findItemInInventory(player, itemName) {
        if (!player.inventory || player.inventory.length === 0) return -1;
        
        // Try exact match first
        let itemIndex = player.inventory.findIndex(item => 
            item.name.toLowerCase() === itemName.toLowerCase()
        );
        
        // If no exact match, try partial match
        if (itemIndex === -1) {
            itemIndex = player.inventory.findIndex(item => 
                item.name.toLowerCase().includes(itemName.toLowerCase()) ||
                itemName.toLowerCase().includes(item.name.toLowerCase())
            );
        }
        
        return itemIndex;
    }
}

export default ItemExchangeMiddleware;
