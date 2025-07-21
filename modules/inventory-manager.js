
// Inventory Management Module
export class InventoryManager {
    constructor() {
        this.equipmentSlots = [
            'mainHand', 'offHand', 'head', 'chest', 'hands', 
            'legs', 'feet', 'back', 'amulet', 'ring1', 'ring2'
        ];
    }

    addItem(player, item) {
        if (!player.inventory) player.inventory = [];
        
        // Add slot property if missing
        if (!item.slot && item.type) {
            item.slot = this.getSlotFromType(item.type);
        }
        
        player.inventory.push(item);
        return true;
    }

    removeItem(player, itemIndex) {
        if (player.inventory && player.inventory[itemIndex]) {
            return player.inventory.splice(itemIndex, 1)[0];
        }
        return null;
    }

    equipItem(player, itemIndex) {
        const item = player.inventory[itemIndex];
        if (!item || !item.slot) return false;

        const slot = item.slot;
        
        // Unequip current item in slot
        if (player.equipment[slot]) {
            this.addItem(player, player.equipment[slot]);
        }

        // Equip new item
        player.equipment[slot] = item;
        this.removeItem(player, itemIndex);
        
        return true;
    }

    unequipItem(player, slot) {
        const item = player.equipment[slot];
        if (!item) return false;

        // Add to inventory
        this.addItem(player, item);
        player.equipment[slot] = null;
        
        return true;
    }

    getSlotFromType(type) {
        const typeSlotMap = {
            'sword': 'mainHand',
            'weapon': 'mainHand',
            'shield': 'offHand',
            'helmet': 'head',
            'armor': 'chest',
            'gloves': 'hands',
            'boots': 'feet',
            'cloak': 'back',
            'amulet': 'amulet',
            'ring': 'ring1'
        };
        return typeSlotMap[type.toLowerCase()] || null;
    }

    calculateTotalStats(player) {
        const baseStats = {
            strength: player.strength || 10,
            dexterity: player.dexterity || 10,
            intelligence: player.intelligence || 10,
            constitution: player.constitution || 10,
            wisdom: player.wisdom || 10,
            charisma: player.charisma || 10
        };

        const bonusStats = { ...baseStats };

        // Add equipment bonuses
        Object.values(player.equipment).forEach(item => {
            if (item && item.stats) {
                Object.entries(item.stats).forEach(([stat, bonus]) => {
                    if (bonusStats[stat] !== undefined) {
                        bonusStats[stat] += bonus;
                    }
                });
            }
        });

        return { baseStats, bonusStats };
    }

    getEquippedItemsDisplay(player) {
        const equippedItems = [];
        
        this.equipmentSlots.forEach(slot => {
            const item = player.equipment[slot];
            if (item) {
                equippedItems.push({
                    slot,
                    item,
                    slotName: this.getSlotDisplayName(slot)
                });
            }
        });

        return equippedItems;
    }

    getSlotDisplayName(slot) {
        const displayNames = {
            mainHand: 'Main Hand',
            offHand: 'Off Hand',
            head: 'Head',
            chest: 'Chest',
            hands: 'Hands',
            legs: 'Legs',
            feet: 'Feet',
            back: 'Back',
            amulet: 'Amulet',
            ring1: 'Ring 1',
            ring2: 'Ring 2'
        };
        return displayNames[slot] || slot;
    }

    displayInventory(player) {
        if (!player.inventory || player.inventory.length === 0) {
            return '<p class="text-center text-gray-600 py-8">Your inventory is empty.</p>';
        }

        let html = '<div class="grid grid-cols-1 gap-4">';
        
        player.inventory.forEach((item, index) => {
            const rarity = item.rarity || 'COMMON';
            const rarityClass = this.getRarityClass(rarity);
            
            html += `
                <div class="inventory-item p-4 border rounded-lg ${rarityClass}">
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="font-bold">${item.name}</h4>
                        <span class="text-sm px-2 py-1 rounded ${rarityClass}">${rarity}</span>
                    </div>
                    <p class="text-sm text-gray-700 mb-2">${item.description || 'No description available.'}</p>
                    
                    ${item.damage ? `<p class="text-xs text-red-600">Damage: ${item.damage}</p>` : ''}
                    ${item.armor ? `<p class="text-xs text-blue-600">Armor: ${item.armor}</p>` : ''}
                    ${item.value ? `<p class="text-xs text-yellow-600">Value: ${item.value} gold</p>` : ''}
                    
                    <div class="flex gap-2 mt-3">
                        ${item.slot ? `<button class="btn-parchment text-xs" data-action="equip" data-index="${index}">Equip</button>` : ''}
                        <button class="btn-parchment text-xs" data-action="sell" data-index="${index}">Sell</button>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }

    getRarityClass(rarity) {
        const classes = {
            'COMMON': 'bg-gray-100 border-gray-300',
            'UNCOMMON': 'bg-green-100 border-green-300',
            'RARE': 'bg-blue-100 border-blue-300',
            'EPIC': 'bg-purple-100 border-purple-300',
            'LEGENDARY': 'bg-yellow-100 border-yellow-300',
            'ARTIFACT': 'bg-red-100 border-red-300'
        };
        return classes[rarity] || classes['COMMON'];
    }
}

// Create global instance
export const inventoryManager = new InventoryManager();
