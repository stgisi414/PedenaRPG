
// World Items System - Comprehensive item database with dynamic generation
export const itemCategories = {
    WEAPON: 'weapon',
    ARMOR: 'armor',
    CONSUMABLE: 'consumable',
    MAGICAL: 'magical',
    TOOL: 'tool',
    JEWELRY: 'jewelry',
    SCROLL: 'scroll',
    BOOK: 'book',
    ARTIFACT: 'artifact',
    CURRENCY: 'currency',
    CRAFTING: 'crafting',
    QUEST: 'quest'
};

export const itemRarity = {
    COMMON: { name: 'Common', multiplier: 1, color: '#FFFFFF' },
    UNCOMMON: { name: 'Uncommon', multiplier: 1.5, color: '#1EFF00' },
    RARE: { name: 'Rare', multiplier: 2.5, color: '#0070DD' },
    EPIC: { name: 'Epic', multiplier: 4, color: '#A335EE' },
    LEGENDARY: { name: 'Legendary', multiplier: 6, color: '#FF8000' },
    ARTIFACT: { name: 'Artifact', multiplier: 10, color: '#E6CC80' }
};

export const statusEffects = {
    // Positive Effects
    blessed: {
        name: 'Blessed',
        type: 'positive',
        duration: 300, // 5 minutes
        description: 'Divine protection increases all stats by 2',
        effects: { allStats: 2, damageReduction: 0.1 }
    },
    enchanted: {
        name: 'Enchanted',
        type: 'positive',
        duration: 600,
        description: 'Magical enhancement boosts spellcasting ability',
        effects: { intelligence: 3, spellPower: 1.2 }
    },
    fortified: {
        name: 'Fortified',
        type: 'positive',
        duration: 300,
        description: 'Increased constitution and health regeneration',
        effects: { constitution: 2, hpRegen: 2 }
    },
    swift: {
        name: 'Swift',
        type: 'positive',
        duration: 180,
        description: 'Enhanced agility and movement speed',
        effects: { dexterity: 3, movementSpeed: 1.5 }
    },
    
    // Negative Effects
    cursed: {
        name: 'Cursed',
        type: 'negative',
        duration: 900,
        description: 'Dark magic reduces all stats by 1',
        effects: { allStats: -1, criticalChance: -0.1 }
    },
    poisoned: {
        name: 'Poisoned',
        type: 'negative',
        duration: 120,
        description: 'Toxic substance slowly drains health',
        effects: { hpDrain: 1, constitution: -1 }
    },
    weakened: {
        name: 'Weakened',
        type: 'negative',
        duration: 240,
        description: 'Physical weakness reduces strength and damage',
        effects: { strength: -2, damageMultiplier: 0.8 }
    },
    
    // Special Effects
    ethereal: {
        name: 'Ethereal',
        type: 'special',
        duration: 60,
        description: 'Become partially incorporeal, reducing physical damage',
        effects: { physicalResistance: 0.5, magicalVulnerability: 1.2 }
    }
};

export const itemTemplates = {
    // Weapons
    weapons: {
        swords: [
            { name: 'Rusted Blade', damage: '1d4', rarity: 'COMMON', effects: [] },
            { name: 'Steel Sword', damage: '1d6', rarity: 'COMMON', effects: [] },
            { name: 'Silver Blade', damage: '1d8', rarity: 'UNCOMMON', effects: ['blessed'] },
            { name: 'Flame Tongue', damage: '1d8+2', rarity: 'RARE', effects: ['fire_damage'] },
            { name: 'Demon Slayer', damage: '2d6', rarity: 'EPIC', effects: ['demon_bane', 'blessed'] }
        ],
        staves: [
            { name: 'Apprentice Staff', damage: '1d4', rarity: 'COMMON', effects: ['spell_focus'] },
            { name: 'Crystal Staff', damage: '1d6', rarity: 'UNCOMMON', effects: ['mana_boost'] },
            { name: 'Staff of Power', damage: '1d8+1', rarity: 'RARE', effects: ['spell_power', 'enchanted'] }
        ]
    },
    
    // Magical Items
    magical: {
        scrolls: [
            { name: 'Scroll of Minor Healing', rarity: 'COMMON', effect: 'heal_light' },
            { name: 'Scroll of Fireball', rarity: 'UNCOMMON', effect: 'fireball' },
            { name: 'Scroll of Teleportation', rarity: 'RARE', effect: 'teleport' },
            { name: 'Scroll of Time Stop', rarity: 'LEGENDARY', effect: 'time_stop' }
        ],
        potions: [
            { name: 'Health Potion', rarity: 'COMMON', effect: { type: 'heal', amount: 25 } },
            { name: 'Mana Potion', rarity: 'COMMON', effect: { type: 'mana', amount: 20 } },
            { name: 'Strength Elixir', rarity: 'UNCOMMON', effect: { type: 'buff', stat: 'strength', amount: 2, duration: 300 } },
            { name: 'Potion of Invisibility', rarity: 'RARE', effect: { type: 'status', effect: 'ethereal', duration: 60 } }
        ]
    },
    
    // Special Quest Items
    questItems: {
        books: [
            { name: 'Tome of Ancient Wisdom', rarity: 'RARE', effects: ['knowledge_boost'] },
            { name: 'Spellbook of Shadows', rarity: 'EPIC', effects: ['dark_magic_access'] },
            { name: 'Chronicle of Heroes', rarity: 'LEGENDARY', effects: ['inspiration'] }
        ],
        artifacts: [
            { name: 'Crystal of Power', rarity: 'EPIC', effects: ['mana_regeneration'] },
            { name: 'Heart of the Dragon', rarity: 'LEGENDARY', effects: ['fire_immunity', 'strength_boost'] },
            { name: 'Soul Fragment', rarity: 'ARTIFACT', effects: ['soul_power'] }
        ]
    }
};

export const dynamicItemPrefixes = [
    'Ancient', 'Cursed', 'Blessed', 'Enchanted', 'Mystical', 'Sacred', 'Forbidden',
    'Lost', 'Forgotten', 'Divine', 'Infernal', 'Celestial', 'Abyssal', 'Ethereal',
    'Corrupted', 'Purified', 'Shimmering', 'Glowing', 'Whispering', 'Screaming'
];

export const dynamicItemSuffixes = [
    'of Power', 'of Wisdom', 'of Strength', 'of Agility', 'of Protection',
    'of the Ancients', 'of the Void', 'of Light', 'of Darkness', 'of Fire',
    'of Ice', 'of Lightning', 'of Earth', 'of Wind', 'of Spirit',
    'of the Dragon', 'of the Phoenix', 'of the Demon', 'of the Angel'
];

export class ItemGenerator {
    
    static generateItem(context = {}) {
        const {
            category = this.getRandomCategory(),
            rarity = this.getRandomRarity(),
            questContext = null,
            locationContext = null,
            enemyContext = null
        } = context;
        
        const baseItem = this.getBaseItem(category, rarity);
        const dynamicItem = this.enhanceItem(baseItem, context);
        
        return {
            id: this.generateItemId(),
            ...dynamicItem,
            generatedAt: Date.now(),
            context: context
        };
    }
    
    static generateItemId() {
        return `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    static getRandomCategory() {
        const categories = Object.values(itemCategories);
        return categories[Math.floor(Math.random() * categories.length)];
    }
    
    static getRandomRarity() {
        const rarities = Object.keys(itemRarity);
        const weights = [50, 30, 15, 4, 1]; // Common to Legendary weights
        const random = Math.random() * 100;
        let cumulative = 0;
        
        for (let i = 0; i < weights.length; i++) {
            cumulative += weights[i];
            if (random <= cumulative) {
                return rarities[i];
            }
        }
        return 'COMMON';
    }
    
    static getBaseItem(category, rarity) {
        switch (category) {
            case itemCategories.WEAPON:
                return this.generateWeapon(rarity);
            case itemCategories.MAGICAL:
                return this.generateMagicalItem(rarity);
            case itemCategories.SCROLL:
                return this.generateScroll(rarity);
            case itemCategories.BOOK:
                return this.generateBook(rarity);
            case itemCategories.CONSUMABLE:
                return this.generateConsumable(rarity);
            default:
                return this.generateGenericItem(category, rarity);
        }
    }
    
    static generateWeapon(rarity) {
        const weaponTypes = Object.keys(itemTemplates.weapons);
        const weaponType = weaponTypes[Math.floor(Math.random() * weaponTypes.length)];
        const weapons = itemTemplates.weapons[weaponType];
        const rarityWeapons = weapons.filter(w => w.rarity === rarity);
        
        if (rarityWeapons.length > 0) {
            return { ...rarityWeapons[Math.floor(Math.random() * rarityWeapons.length)], type: itemCategories.WEAPON };
        }
        
        return this.generateCustomWeapon(rarity);
    }
    
    static generateCustomWeapon(rarity) {
        const damages = {
            'COMMON': ['1d4', '1d6'],
            'UNCOMMON': ['1d6', '1d8'],
            'RARE': ['1d8', '1d10'],
            'EPIC': ['1d10', '1d12'],
            'LEGENDARY': ['2d6', '2d8']
        };
        
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];
        const damage = damages[rarity] ? damages[rarity][Math.floor(Math.random() * damages[rarity].length)] : '1d6';
        
        return {
            name: `${prefix} Blade ${suffix}`,
            type: itemCategories.WEAPON,
            rarity: rarity,
            damage: damage,
            effects: this.generateEffects(rarity)
        };
    }
    
    static generateMagicalItem(rarity) {
        const types = Object.keys(itemTemplates.magical);
        const type = types[Math.floor(Math.random() * types.length)];
        const items = itemTemplates.magical[type];
        const rarityItems = items.filter(i => i.rarity === rarity);
        
        if (rarityItems.length > 0) {
            return { ...rarityItems[Math.floor(Math.random() * rarityItems.length)], type: itemCategories.MAGICAL };
        }
        
        return this.generateCustomMagicalItem(rarity);
    }
    
    static generateCustomMagicalItem(rarity) {
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];
        
        return {
            name: `${prefix} Orb ${suffix}`,
            type: itemCategories.MAGICAL,
            rarity: rarity,
            effects: this.generateMagicalEffects(rarity),
            description: `A mystical orb radiating ${prefix.toLowerCase()} energy`
        };
    }
    
    static generateScroll(rarity) {
        const scrolls = itemTemplates.magical.scrolls;
        const rarityScrolls = scrolls.filter(s => s.rarity === rarity);
        
        if (rarityScrolls.length > 0) {
            return { ...rarityScrolls[Math.floor(Math.random() * rarityScrolls.length)], type: itemCategories.SCROLL };
        }
        
        return {
            name: `Scroll of ${dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)].replace('of ', '')}`,
            type: itemCategories.SCROLL,
            rarity: rarity,
            singleUse: true,
            effects: this.generateScrollEffects(rarity)
        };
    }
    
    static generateBook(rarity) {
        const books = itemTemplates.questItems.books;
        const rarityBooks = books.filter(b => b.rarity === rarity);
        
        if (rarityBooks.length > 0) {
            return { ...rarityBooks[Math.floor(Math.random() * rarityBooks.length)], type: itemCategories.BOOK };
        }
        
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];
        
        return {
            name: `${prefix} Tome ${suffix}`,
            type: itemCategories.BOOK,
            rarity: rarity,
            effects: this.generateBookEffects(rarity),
            description: `A leather-bound book containing ${prefix.toLowerCase()} knowledge`
        };
    }
    
    static generateConsumable(rarity) {
        const potions = itemTemplates.magical.potions;
        const rarityPotions = potions.filter(p => p.rarity === rarity);
        
        if (rarityPotions.length > 0) {
            return { ...rarityPotions[Math.floor(Math.random() * rarityPotions.length)], type: itemCategories.CONSUMABLE };
        }
        
        return {
            name: `Elixir ${dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)]}`,
            type: itemCategories.CONSUMABLE,
            rarity: rarity,
            singleUse: true,
            effects: this.generateConsumableEffects(rarity)
        };
    }
    
    static generateGenericItem(category, rarity) {
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];
        
        return {
            name: `${prefix} ${category} ${suffix}`,
            type: category,
            rarity: rarity,
            effects: this.generateEffects(rarity)
        };
    }
    
    static generateEffects(rarity) {
        const effectCount = {
            'COMMON': 0,
            'UNCOMMON': 1,
            'RARE': 2,
            'EPIC': 3,
            'LEGENDARY': 4,
            'ARTIFACT': 5
        };
        
        const count = effectCount[rarity] || 0;
        const effects = [];
        const availableEffects = Object.keys(statusEffects);
        
        for (let i = 0; i < count; i++) {
            const effect = availableEffects[Math.floor(Math.random() * availableEffects.length)];
            if (!effects.includes(effect)) {
                effects.push(effect);
            }
        }
        
        return effects;
    }
    
    static generateMagicalEffects(rarity) {
        const magicalEffects = ['enchanted', 'blessed', 'ethereal'];
        return this.selectRandomEffects(magicalEffects, rarity);
    }
    
    static generateScrollEffects(rarity) {
        const scrollEffects = ['spell_power', 'mana_boost', 'enchanted'];
        return this.selectRandomEffects(scrollEffects, rarity);
    }
    
    static generateBookEffects(rarity) {
        const bookEffects = ['knowledge_boost', 'wisdom_increase', 'enchanted'];
        return this.selectRandomEffects(bookEffects, rarity);
    }
    
    static generateConsumableEffects(rarity) {
        const consumableEffects = ['blessed', 'fortified', 'swift'];
        return this.selectRandomEffects(consumableEffects, rarity);
    }
    
    static selectRandomEffects(effectList, rarity) {
        const effectCount = {
            'COMMON': 1,
            'UNCOMMON': 1,
            'RARE': 2,
            'EPIC': 2,
            'LEGENDARY': 3,
            'ARTIFACT': 3
        };
        
        const count = Math.min(effectCount[rarity] || 1, effectList.length);
        const shuffled = [...effectList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    static enhanceItem(baseItem, context) {
        let enhanced = { ...baseItem };
        
        // Add value based on rarity
        const rarityData = itemRarity[enhanced.rarity];
        if (rarityData) {
            enhanced.value = Math.floor((enhanced.value || 10) * rarityData.multiplier);
            enhanced.color = rarityData.color;
        }
        
        // Add context-specific enhancements
        if (context.questContext) {
            enhanced = this.addQuestEnhancements(enhanced, context.questContext);
        }
        
        if (context.locationContext) {
            enhanced = this.addLocationEnhancements(enhanced, context.locationContext);
        }
        
        if (context.enemyContext) {
            enhanced = this.addEnemyEnhancements(enhanced, context.enemyContext);
        }
        
        // Add description if missing
        if (!enhanced.description) {
            enhanced.description = this.generateDescription(enhanced);
        }
        
        return enhanced;
    }
    
    static addQuestEnhancements(item, questContext) {
        // Add quest-specific properties
        item.questItem = true;
        item.questId = questContext.id;
        
        // Enhance based on quest importance
        if (questContext.importance === 'major') {
            item.rarity = this.upgradeRarity(item.rarity);
            item.effects = [...(item.effects || []), 'blessed'];
        }
        
        return item;
    }
    
    static addLocationEnhancements(item, locationContext) {
        // Add location-specific flavor
        if (locationContext.includes('temple')) {
            item.effects = [...(item.effects || []), 'blessed'];
        } else if (locationContext.includes('dark') || locationContext.includes('shadow')) {
            item.effects = [...(item.effects || []), 'cursed'];
        }
        
        return item;
    }
    
    static addEnemyEnhancements(item, enemyContext) {
        // Add enemy-specific drops
        if (enemyContext.includes('demon') || enemyContext.includes('devil')) {
            item.effects = [...(item.effects || []), 'cursed'];
            item.name = `Demonic ${item.name}`;
        } else if (enemyContext.includes('angel') || enemyContext.includes('celestial')) {
            item.effects = [...(item.effects || []), 'blessed'];
            item.name = `Divine ${item.name}`;
        }
        
        return item;
    }
    
    static upgradeRarity(currentRarity) {
        const rarities = Object.keys(itemRarity);
        const currentIndex = rarities.indexOf(currentRarity);
        const nextIndex = Math.min(currentIndex + 1, rarities.length - 1);
        return rarities[nextIndex];
    }
    
    static generateDescription(item) {
        const rarityDesc = {
            'COMMON': 'A simple but functional item.',
            'UNCOMMON': 'A well-crafted item with noticeable quality.',
            'RARE': 'An exceptional item with magical properties.',
            'EPIC': 'A legendary item of great power.',
            'LEGENDARY': 'An artifact of immense magical significance.',
            'ARTIFACT': 'A relic of unimaginable power from ancient times.'
        };
        
        return rarityDesc[item.rarity] || 'A mysterious item of unknown origin.';
    }
    
    // Generate AI prompt for contextual item creation
    static generateItemPrompt(context) {
        return {
            itemContext: context,
            availableCategories: Object.values(itemCategories),
            availableRarities: Object.keys(itemRarity),
            statusEffects: Object.keys(statusEffects),
            dynamicElements: {
                prefixes: dynamicItemPrefixes,
                suffixes: dynamicItemSuffixes
            },
            generationInstructions: `Create a contextually appropriate item based on the current game situation. Consider the player's class, current location, recent actions, and quest progress. The item should feel meaningful and integrated into the world narrative.`
        };
    }
}

// Integration with existing game systems
export class ItemManager {
    
    static addItemToInventory(player, item) {
        if (!player.inventory) {
            player.inventory = [];
        }
        
        player.inventory.push(item);
        this.saveInventoryToStorage(player);
        return true;
    }
    
    static useItem(player, itemId) {
        const itemIndex = player.inventory.findIndex(item => item.id === itemId);
        if (itemIndex === -1) return { success: false, message: 'Item not found.' };
        
        const item = player.inventory[itemIndex];
        const result = this.applyItemEffects(player, item);
        
        // Remove single-use items
        if (item.singleUse) {
            player.inventory.splice(itemIndex, 1);
            this.saveInventoryToStorage(player);
        }
        
        return result;
    }
    
    static applyItemEffects(player, item) {
        if (!item.effects) return { success: true, message: `Used ${item.name}.` };
        
        let messages = [];
        
        item.effects.forEach(effectName => {
            const effect = statusEffects[effectName];
            if (effect) {
                this.applyStatusEffect(player, effect);
                messages.push(`Applied ${effect.name}: ${effect.description}`);
            }
        });
        
        return {
            success: true,
            message: `Used ${item.name}. ${messages.join(' ')}`
        };
    }
    
    static applyStatusEffect(player, effect) {
        if (!player.statusEffects) {
            player.statusEffects = [];
        }
        
        // Remove existing effect of same type
        player.statusEffects = player.statusEffects.filter(e => e.name !== effect.name);
        
        // Add new effect with timestamp
        player.statusEffects.push({
            ...effect,
            appliedAt: Date.now(),
            expiresAt: Date.now() + (effect.duration * 1000)
        });
        
        // Apply immediate stat changes
        this.applyStatChanges(player, effect.effects);
    }
    
    static applyStatChanges(player, effects) {
        Object.entries(effects).forEach(([stat, value]) => {
            if (stat === 'allStats') {
                Object.keys(player.stats).forEach(statName => {
                    player.stats[statName] = Math.max(0, player.stats[statName] + value);
                });
            } else if (player.stats.hasOwnProperty(stat)) {
                player.stats[stat] = Math.max(0, player.stats[stat] + value);
            }
        });
    }
    
    static updateStatusEffects(player) {
        if (!player.statusEffects) return;
        
        const now = Date.now();
        const expiredEffects = [];
        
        player.statusEffects = player.statusEffects.filter(effect => {
            if (effect.expiresAt <= now) {
                expiredEffects.push(effect);
                return false;
            }
            return true;
        });
        
        // Reverse expired effect changes
        expiredEffects.forEach(effect => {
            this.reverseStatChanges(player, effect.effects);
        });
    }
    
    static reverseStatChanges(player, effects) {
        Object.entries(effects).forEach(([stat, value]) => {
            if (stat === 'allStats') {
                Object.keys(player.stats).forEach(statName => {
                    player.stats[statName] = Math.max(0, player.stats[statName] - value);
                });
            } else if (player.stats.hasOwnProperty(stat)) {
                player.stats[stat] = Math.max(0, player.stats[stat] - value);
            }
        });
    }
    
    static saveInventoryToStorage(player) {
        localStorage.setItem(`inventory_${player.name}`, JSON.stringify(player.inventory));
        localStorage.setItem(`statusEffects_${player.name}`, JSON.stringify(player.statusEffects || []));
    }
    
    static loadInventoryFromStorage(player) {
        const savedInventory = localStorage.getItem(`inventory_${player.name}`);
        const savedEffects = localStorage.getItem(`statusEffects_${player.name}`);
        
        if (savedInventory) {
            player.inventory = JSON.parse(savedInventory);
        }
        
        if (savedEffects) {
            player.statusEffects = JSON.parse(savedEffects);
            this.updateStatusEffects(player); // Clean up expired effects
        }
    }
}

export default {
    itemCategories,
    itemRarity,
    statusEffects,
    itemTemplates,
    ItemGenerator,
    ItemManager
};
