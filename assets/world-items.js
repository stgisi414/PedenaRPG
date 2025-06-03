
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
    
    // Constructed Language System
    static languageTemplates = {
        elven: {
            name: "Elvish",
            phoneticPattern: ["th", "el", "ar", "an", "sil", "mel", "gal", "tar", "wen", "dal", "ith", "lor", "nim", "gil", "dor"],
            suffixes: ["wen", "iel", "ath", "oth", "eth", "rim", "los", "las"],
            prefixes: ["sil", "gal", "mel", "el", "ar", "th"],
            grammar: "VSO", // Verb-Subject-Object
            script: "flowing",
            sample: "Sil galad wen melethril, ithil naergon las."
        },
        succubus: {
            name: "Infernal Succubus",
            phoneticPattern: ["zar", "bel", "ash", "mor", "nex", "vex", "drak", "keth", "vor", "rath", "xen", "mal", "kor", "tash"],
            suffixes: ["ath", "oth", "ex", "ash", "ek", "ak", "or", "ur"],
            prefixes: ["zar", "bel", "mor", "drak", "vex", "mal"],
            grammar: "SOV", // Subject-Object-Verb
            script: "angular",
            sample: "Zar'thek beloth nexari, morathi drakul vexen."
        },
        draconic: {
            name: "Ancient Draconic",
            phoneticPattern: ["bahar", "krex", "thar", "vorth", "yol", "fus", "ro", "dah", "shul", "grah", "mul", "qah", "wuld"],
            suffixes: ["ul", "ah", "ex", "oth", "ar", "or"],
            prefixes: ["yol", "fus", "thar", "vorth", "krex"],
            grammar: "Free", // Flexible word order
            script: "runic",
            sample: "Yol toor shul! Fus ro dah krexul."
        },
        demonic: {
            name: "Lower Demonic",
            phoneticPattern: ["gorth", "mek", "zul", "thak", "bor", "nath", "krul", "vash", "lok", "grim", "sek", "urth"],
            suffixes: ["ek", "ak", "ul", "oth", "ur", "ok"],
            prefixes: ["gorth", "mek", "zul", "krul", "nath"],
            grammar: "SOV",
            script: "jagged",
            sample: "Gorthek zulnath thakul, bor'mekul vashoth lokgrim."
        },
        celestial: {
            name: "High Celestial",
            phoneticPattern: ["lum", "cel", "aur", "ser", "lyr", "thal", "mir", "nev", "sil", "bel", "aeth", "vel"],
            suffixes: ["iel", "ael", "oth", "eth", "ir", "al"],
            prefixes: ["lum", "cel", "aur", "ser", "thal"],
            grammar: "VSO",
            script: "luminous",
            sample: "Lumiel aethyr celoth, seraphim thalmir nevael."
        },
        orcish: {
            name: "Tribal Orcish",
            phoneticPattern: ["grok", "uruk", "shar", "dug", "goth", "morg", "bash", "krump", "wagh", "zog", "nob"],
            suffixes: ["uk", "agh", "og", "ub", "ok"],
            prefixes: ["grok", "uruk", "morg", "bash"],
            grammar: "SVO", // Subject-Verb-Object
            script: "crude",
            sample: "Grokuk bashagh morgoth, uruk wagh zogub!"
        }
    };

    static generateConstructedLanguage(languageType, textLength = 'medium') {
        const template = this.languageTemplates[languageType.toLowerCase()] || this.languageTemplates.elven;
        
        const lengthMap = {
            short: { sentences: 1, wordsPerSentence: [3, 5] },
            medium: { sentences: 2, wordsPerSentence: [4, 7] },
            long: { sentences: 3, wordsPerSentence: [5, 9] },
            scroll: { sentences: 4, wordsPerSentence: [6, 12] }
        };
        
        const config = lengthMap[textLength] || lengthMap.medium;
        const sentences = [];
        
        for (let i = 0; i < config.sentences; i++) {
            const wordCount = Math.floor(Math.random() * (config.wordsPerSentence[1] - config.wordsPerSentence[0] + 1)) + config.wordsPerSentence[0];
            const sentence = this.generateSentence(template, wordCount);
            sentences.push(sentence);
        }
        
        return {
            text: sentences.join(' '),
            language: template.name,
            script: template.script,
            translation: this.generateTranslation(sentences.length, languageType)
        };
    }

    static generateSentence(template, wordCount) {
        const words = [];
        
        // Generate base words using phonetic patterns
        for (let i = 0; i < wordCount; i++) {
            let word = '';
            
            // Sometimes add prefix (20% chance)
            if (Math.random() < 0.2 && template.prefixes.length > 0) {
                word += template.prefixes[Math.floor(Math.random() * template.prefixes.length)];
            }
            
            // Add main phonetic element
            word += template.phoneticPattern[Math.floor(Math.random() * template.phoneticPattern.length)];
            
            // Sometimes add suffix (30% chance)
            if (Math.random() < 0.3 && template.suffixes.length > 0) {
                word += template.suffixes[Math.floor(Math.random() * template.suffixes.length)];
            }
            
            words.push(word);
        }
        
        // Apply basic grammar rules
        return this.applyGrammarRules(words, template.grammar);
    }

    static applyGrammarRules(words, grammar) {
        if (words.length < 3) return words.join(' ') + '.';
        
        switch (grammar) {
            case 'VSO': // Verb-Subject-Object
                return words.join(' ') + '.';
            case 'SOV': // Subject-Object-Verb  
                return words.join(' ') + '.';
            case 'SVO': // Subject-Verb-Object
                return words.join(' ') + '!';
            default: // Free word order
                return words.join(' ') + '.';
        }
    }

    static generateTranslation(sentenceCount, languageType) {
        const translationTemplates = {
            elven: [
                "The stars shine upon you, beloved one, the moon guides your path.",
                "In ancient times, the great trees whispered secrets of magic.",
                "May the light of Valinor guide your journey through shadow."
            ],
            succubus: [
                "Your desires call to me, mortal, let us make a pact.",
                "The flames of passion burn eternal in the depths below.",
                "Sweet whispers promise power beyond your wildest dreams."
            ],
            draconic: [
                "Fire and fury! The ancient power awakens within.",
                "By claw and flame, the old ways shall return to this realm.",
                "The Thu'um echoes through mountain peaks, calling dragons home."
            ],
            demonic: [
                "The darkness speaks your name, flesh-bound soul.",
                "Blood and shadow bind the infernal contract of damnation.",
                "In the abyss below, legions march at the master's command."
            ],
            celestial: [
                "Divine light illuminates the path of the righteous.",
                "Heaven's chorus sings of hope and eternal redemption.",
                "The blessed ones gather where mortal prayers ascend."
            ],
            orcish: [
                "Fight good! Smash enemies, take their shiny things!",
                "Big chief says charge! WAAAGH! Victory or glorious death!",
                "Strong warrior earns respect, weak one gets eaten!"
            ]
        };
        
        const templates = translationTemplates[languageType.toLowerCase()] || translationTemplates.elven;
        const selectedTemplates = templates.slice(0, sentenceCount);
        
        return selectedTemplates.join(' ');
    }

    // Enhanced book generation with constructed languages
    static generateLanguageBook(rarity, languageType) {
        const language = this.generateConstructedLanguage(languageType, 'scroll');
        const template = this.languageTemplates[languageType.toLowerCase()] || this.languageTemplates.elven;
        
        const bookTitles = {
            elven: "Silmarillion Eregion",
            succubus: "Zar'thek Belothrim",
            draconic: "Yol'Toor'Shul", 
            demonic: "Gorthek Ulokrim",
            celestial: "Lumiel Serathim",
            orcish: "Grokagh Waaghbook"
        };
        
        const title = bookTitles[languageType.toLowerCase()] || `${template.name} Script`;
        
        return {
            name: `${title} (${template.name} Language)`,
            type: itemCategories.BOOK,
            rarity: rarity,
            effects: this.generateBookEffects(rarity),
            description: `A ${template.script} text written in ${template.name}. The writing seems to shimmer with otherworldly power.`,
            languageContent: {
                originalText: language.text,
                translation: language.translation,
                language: language.language,
                script: language.script
            },
            readAction: 'language_study',
            value: Math.floor((itemRarity[rarity]?.multiplier || 1) * 25)
        };
    }

    // Enhanced scroll generation with constructed languages
    static generateLanguageScroll(rarity, languageType, spellType = 'generic') {
        const language = this.generateConstructedLanguage(languageType, 'short');
        const template = this.languageTemplates[languageType.toLowerCase()] || this.languageTemplates.elven;
        
        const scrollNames = {
            elven: "Scroll of Elven Incantation",
            succubus: "Scroll of Seductive Whispers", 
            draconic: "Scroll of Dragon Words",
            demonic: "Scroll of Infernal Binding",
            celestial: "Scroll of Divine Grace",
            orcish: "Scroll of Battle Cry"
        };
        
        const scrollName = scrollNames[languageType.toLowerCase()] || `Scroll of ${template.name}`;
        
        return {
            name: scrollName,
            type: itemCategories.SCROLL,
            rarity: rarity,
            singleUse: true,
            effects: this.generateScrollEffects(rarity),
            description: `An ancient scroll inscribed with ${template.script} ${template.name} text. Magical energy pulses through the words.`,
            languageContent: {
                originalText: language.text,
                translation: language.translation,
                language: language.language,
                script: language.script,
                spellType: spellType
            },
            readAction: 'spell_casting',
            value: Math.floor((itemRarity[rarity]?.multiplier || 1) * 15)
        };
    }

    // Generate AI prompt for contextual item creation
    static generateItemPrompt(context) {
        return {
            itemContext: context,
            availableCategories: Object.values(itemCategories),
            availableRarities: Object.keys(itemRarity),
            statusEffects: Object.keys(statusEffects),
            availableLanguages: Object.keys(this.languageTemplates),
            dynamicElements: {
                prefixes: dynamicItemPrefixes,
                suffixes: dynamicItemSuffixes
            },
            generationInstructions: `Create a contextually appropriate item based on the current game situation. Consider the player's class, current location, recent actions, and quest progress. The item should feel meaningful and integrated into the world narrative. For language-based items, include constructed language text.`
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
