
// Character Management System - Handles leveling, abilities, and progression
import { classProgression, spellDefinitions, abilityDefinitions, featDefinitions } from './class-progression.js';

import { ItemGenerator, ItemManager, itemCategories } from '../assets/world-items.js';

export class CharacterManager {
    
    static initializeCharacter(player, charClass) {
        const progression = classProgression[charClass];
        if (!progression) {
            console.error(`Unknown class: ${charClass}`);
            return;
        }
        
        // Initialize character progression data
        player.classProgression = {
            class: charClass,
            level: 1,
            availableSpells: [],
            knownSpells: [],
            availableCantrips: [],
            knownCantrips: [],
            classAbilities: [],
            classFeats: [],
            unlockedFeatures: [],
            spellSlots: this.calculateSpellSlots(charClass, 1),
            abilityUses: {}
        };
        
        // Apply level 1 progression
        this.applyLevelProgression(player, 1);
        
        // Set class-specific starting equipment and bonuses
        this.applyClassBonuses(player, progression);

        this.assignInitialEquipment(player); // ADD THIS LINE
        
        return player;
    }

    static async assignInitialEquipment(player) {
        
        console.log(`Assigning initial equipment for <span class="math-inline">\{player\.name\} \(</span>{player.class}).`);
        console.log(`[DEBUG_ASSIGN_EQUIP] Player Class: ${player.class}`); // NEW LOG
        const { ItemGenerator, ItemManager, itemCategories } = window;

        if (!ItemGenerator || !ItemManager || !itemCategories) {
            console.error("ItemManager or ItemGenerator not available for initial equipment assignment.");
            return;
        }

        // Helper to generate and equip an item
        const addAndEquip = async (category, rarity, subType = null) => { // Made async because generateItem is async
            const item = await ItemGenerator.generateItem({ category, rarity, subType }); // AWAIT the async call
            if (item) {
                console.log("[DEBUG] assignInitialEquipment - item before addItemToInventory:", JSON.stringify(item, null, 2));
                const itemToPass = JSON.parse(JSON.stringify(item)); // Deep copy before passing

                ItemManager.addItemToInventory(player, itemToPass);
                ItemManager.equipItem(player, player.inventory.length - 1);
                console.log(`Equipped: ${itemToPass.name} (${itemToPass.slot || 'N/A'})`);
            } else {
                console.warn(`Failed to generate item for ${player.class}: Category=${category}, Rarity=${rarity}, SubType=${subType}`);
            }
        };

        switch (player.class.toLowerCase()) {
            case 'warrior':
            case 'gladiator':
            case 'barbarian':
            case 'brawler':
                console.log(`[DEBUG_ASSIGN_EQUIP] Processing ${player.class} equipment assignments.`);
                await addAndEquip(itemCategories.WEAPON, 'COMMON', 'swords');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'shields');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'chestplates');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'helmets');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'leggings');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'boots');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'gauntlets');
                break;
            case 'paladin':
            case 'knight':
                console.log(`[DEBUG_ASSIGN_EQUIP] Processing ${player.class} equipment assignments.`);
                await addAndEquip(itemCategories.WEAPON, 'COMMON', 'swords');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'shields');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'chestplates');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'helmets');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'leggings');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'boots');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'gauntlets');
                break;
            case 'mage':
            case 'sorcerer':
            case 'warlock':
            case 'necromancer':
            case 'illusionist':
            case 'psychic':
                console.log(`[DEBUG_ASSIGN_EQUIP] Processing ${player.class} equipment assignments.`);
                await addAndEquip(itemCategories.WEAPON, 'COMMON', 'staves');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'cloaks');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'chestplates');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'leggings');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'boots');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'sleeves');
                break;
            case 'rogue':
            case 'assassin':
            case 'thief':
            case 'smuggler':
                console.log(`[DEBUG_ASSIGN_EQUIP] Processing ${player.class} equipment assignments.`);
                await addAndEquip(itemCategories.WEAPON, 'COMMON', 'daggers');
                await addAndEquip(itemCategories.WEAPON, 'COMMON', 'daggers'); // Secondary Dagger
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'chestplates');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'leggings');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'boots');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'sleeves');
                break;
            case 'ranger':
            case 'hunter':
            case 'outlander':
                console.log(`[DEBUG_ASSIGN_EQUIP] Processing ${player.class} equipment assignments.`);
                await addAndEquip(itemCategories.WEAPON, 'COMMON', 'bows');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'chestplates');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'leggings');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'boots');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'sleeves');
                break;
            case 'cleric':
            case 'druid':
            case 'shaman':
            case 'acolyte':
            case 'pilgrim':
                console.log(`[DEBUG_ASSIGN_EQUIP] Processing ${player.class} equipment assignments.`);
                await addAndEquip(itemCategories.WEAPON, 'COMMON', 'maces');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'shields');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'chestplates');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'leggings');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'boots');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'sleeves');
                break;
            case 'bard':
            case 'entertainer':
                console.log(`[DEBUG_ASSIGN_EQUIP] Processing ${player.class} equipment assignments.`);
                await addAndEquip(itemCategories.WEAPON, 'COMMON', 'daggers');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'cloaks');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'chestplates');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'leggings');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'boots');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'sleeves');
                break;
            case 'monk':
            case 'ninja':
                console.log(`[DEBUG_ASSIGN_EQUIP] Processing ${player.class} equipment assignments.`);
                await addAndEquip(itemCategories.WEAPON, 'COMMON', 'fistWeapons');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'cloaks');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'chestplates');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'leggings');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'boots');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'sleeves');
                break;
            case 'alchemist':
            case 'engineer':
            case 'scholar':
            case 'investigator':
            case 'doctor':
            case 'gambler':
                console.log(`[DEBUG_ASSIGN_EQUIP] Processing ${player.class} equipment assignments.`);
                await addAndEquip(itemCategories.WEAPON, 'COMMON', 'daggers');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'cloaks');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'chestplates');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'leggings');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'boots');
                await addAndEquip(itemCategories.TOOL, 'COMMON', 'utility');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'sleeves');
                break;
            default:
                console.log(`No specific initial equipment defined for ${player.class}. Assigning basic defaults.`);
                await addAndEquip(itemCategories.WEAPON, 'COMMON', 'swords');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'chestplates');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'boots');
                await addAndEquip(itemCategories.ARMOR, 'COMMON', 'sleeves');
                break;
        }
        console.log(`Finished assigning initial equipment for ${player.name}.`);
                                                              
    }
    
    static applyLevelProgression(player, level) {
        const progression = classProgression[player.classProgression.class];
        const levelData = progression.levels[level];
        
        if (!levelData) {
            console.error(`No progression data for level ${level}`);
            return;
        }
        
        // Add HP
        player.maxHp += levelData.hp;
        player.hp = player.maxHp; // Full heal on level up
        
        // Add features
        levelData.features.forEach(feature => {
            if (!player.classProgression.unlockedFeatures.includes(feature)) {
                player.classProgression.unlockedFeatures.push(feature);
            }
        });
        
        // Add abilities
        levelData.abilities.forEach(abilityName => {
            if (!player.classProgression.classAbilities.includes(abilityName)) {
                player.classProgression.classAbilities.push(abilityName);
                // Initialize ability usage tracking
                const ability = abilityDefinitions[abilityName];
                if (ability && ability.cooldown > 0) {
                    player.classProgression.abilityUses[abilityName] = {
                        lastUsed: 0,
                        cooldown: ability.cooldown
                    };
                }
            }
        });
        
        // Add feats
        levelData.feats.forEach(featName => {
            if (!player.classProgression.classFeats.includes(featName)) {
                player.classProgression.classFeats.push(featName);
                this.applyFeatEffects(player, featName);
            }
        });
        
        levelData.spells.forEach(spellName => {
            if (!player.classProgression.availableSpells.includes(spellName)) {
                player.classProgression.availableSpells.push(spellName);
            }
            // For all spellcasting classes, automatically learn spells they gain
            // (Assuming no "prepare spells" mechanic is in place that would require separate "available" vs "known" lists
            // or explicit player action to "learn" from "available" for non-mages)
            if (!player.classProgression.knownSpells.includes(spellName)) {
                player.classProgression.knownSpells.push(spellName);
            }
        });
        
        // Add cantrips
        levelData.cantrips.forEach(cantripName => {
            if (!player.classProgression.availableCantrips.includes(cantripName)) {
                player.classProgression.availableCantrips.push(cantripName);
                // Cantrips are automatically known
                if (!player.classProgression.knownCantrips.includes(cantripName)) {
                    player.classProgression.knownCantrips.push(cantripName);
                }
            }
        });
        
        // Update spell slots
        player.classProgression.spellSlots = this.calculateSpellSlots(player.classProgression.class, level);
        
        console.log(`Applied level ${level} progression for ${player.classProgression.class}`);
    }
    
    static applyClassBonuses(player, progression) {
        // Apply hit die bonus
        const hitDieBonus = this.getHitDieBonus(progression.hitDie);
        player.maxHp += hitDieBonus;
        player.hp = player.maxHp;
        
        // Ensure stats object exists and has base values
        if (!player.stats) {
            player.stats = {
                strength: 10,
                dexterity: 10,
                intelligence: 10,
                constitution: 10,
                wisdom: 10,
                charisma: 10
            };
        }
        
        // Apply primary stat bonuses
        progression.primaryStats.forEach(stat => {
            if (player.stats[stat] < 10) {
                player.stats[stat] = 10; // Ensure minimum base value
            }
            player.stats[stat] += 2; // Bonus for primary stats
        });
    }
    
    static getHitDieBonus(hitDie) {
        const dieMap = {
            'd6': 6,
            'd8': 8,
            'd10': 10,
            'd12': 12
        };
        return dieMap[hitDie] || 8;
    }
    
    static calculateSpellSlots(charClass, level) {
        const slots = {
            1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
        };

        const fullCasters = ['mage', 'sorcerer', 'warlock', 'cleric', 'druid', 'bard', 'psychic', 'shaman', 'summoner', 'necromancer', 'illusionist'];
        const halfCasters = ['paladin', 'ranger'];

        if (fullCasters.includes(charClass)) {
            // Simplified full caster progression (e.g., based on D&D 5e Wizard/Cleric)
            if (level >= 1) slots[1] = Math.min(4, level + 1); // Up to 4 1st-level slots
            if (level >= 3) slots[2] = Math.min(3, Math.floor(level / 2)); // Up to 3 2nd-level slots
            if (level >= 5) slots[3] = Math.min(3, Math.floor((level - 2) / 2)); // Up to 3 3rd-level slots
            if (level >= 7) slots[4] = Math.min(1, Math.floor((level - 4) / 2)); // Up to 1 4th-level slot at level 7
            if (level >= 9) slots[5] = 1; // 1 5th-level slot at level 9
            if (level >= 11) slots[6] = 1; // 1 6th-level slot at level 11
            if (level >= 13) slots[7] = 1; // 1 7th-level slot at level 13
            if (level >= 15) slots[8] = 1; // 1 8th-level slot at level 15
            if (level >= 17) slots[9] = 1; // 1 9th-level slot at level 17

        } else if (halfCasters.includes(charClass)) {
            // Simplified half caster progression (e.g., based on D&D 5e Paladin/Ranger)
            if (level >= 2) slots[1] = Math.min(4, Math.floor(level / 2)); // 1st-level slots from level 2
            if (level >= 5) slots[2] = Math.min(3, Math.floor((level - 2) / 2)); // 2nd-level slots from level 5
            if (level >= 9) slots[3] = Math.min(3, Math.floor((level - 4) / 2)); // 3rd-level slots from level 9
            if (level >= 13) slots[4] = Math.min(1, Math.floor((level - 6) / 2)); // 4th-level slots from level 13
            if (level >= 17) slots[5] = 1; // 5th-level spells at 17th level for half-casters

        }
        return slots;
    }
    
    static applyFeatEffects(player, featName) {
        const feat = featDefinitions[featName];
        if (!feat) return;
        
        // Apply feat effects to player stats/abilities (if they exist)
        if (feat.effect) {
            if (feat.effect.attack_bonus) {
                player.stats.attackBonus = (player.stats.attackBonus || 0) + feat.effect.attack_bonus;
            }
            if (feat.effect.ac_bonus) {
                player.stats.acBonus = (player.stats.acBonus || 0) + feat.effect.ac_bonus;
            }
            if (feat.effect.damage_bonus) {
                player.stats.damageBonus = (player.stats.damageBonus || 0) + feat.effect.damage_bonus;
            }
        }
        
        console.log(`Applied feat: ${featName}`);
    }
    
    static levelUp(player) {
        const currentLevel = player.level;
        const newLevel = currentLevel + 1;
        
        // Check if progression data exists for new level
        const progression = classProgression[player.classProgression.class];
        if (!progression.levels[newLevel]) {
            console.log(`No more progression data available beyond level ${currentLevel}`);
            return false;
        }
        
        // Update player level
        player.level = newLevel;
        player.classProgression.level = newLevel;
        
        // Apply stat increases on level-up
        this.applyStatIncreases(player, newLevel);
        
        // Apply new level progression
        this.applyLevelProgression(player, newLevel);
        
        return true;
    }
    
    static applyStatIncreases(player, level) {
        // Every level, increase all stats by 1
        const statNames = ['strength', 'dexterity', 'intelligence', 'constitution', 'wisdom', 'charisma'];
        
        statNames.forEach(statName => {
            player.stats[statName] += 1;
        });
        
        // Every 4 levels (4, 8, 12, 16), give an additional +2 to primary stats
        if (level % 4 === 0) {
            const progression = classProgression[player.classProgression.class];
            progression.primaryStats.forEach(stat => {
                player.stats[stat] += 2;
            });
            console.log(`Level ${level}: Applied bonus to primary stats (${progression.primaryStats.join(', ')})`);
        }
        
        console.log(`Level ${level}: Applied stat increases`);
    }
    
    static getCharacterProgression(player) {
        if (!player.classProgression) {
            console.error('Character progression not initialized');
            return null;
        }
        
        const progression = classProgression[player.classProgression.class];
        const currentLevel = player.level;
        
        return {
            class: player.classProgression.class,
            level: currentLevel,
            hitDie: progression.hitDie,
            primaryStats: progression.primaryStats,
            features: player.classProgression.unlockedFeatures,
            abilities: player.classProgression.classAbilities.map(name => ({
                name,
                definition: abilityDefinitions[name]
            })),
            feats: player.classProgression.classFeats.map(name => ({
                name,
                definition: featDefinitions[name]
            })),
            spells: {
                known: player.classProgression.knownSpells.map(name => ({
                    name,
                    definition: spellDefinitions[name]
                })),
                available: player.classProgression.availableSpells.map(name => ({
                    name,
                    definition: spellDefinitions[name]
                }))
            },
            cantrips: player.classProgression.knownCantrips.map(name => ({
                name,
                definition: spellDefinitions[name]
            })),
            spellSlots: player.classProgression.spellSlots
        };
    }
    
    static canUseAbility(player, abilityName) {
        const ability = abilityDefinitions[abilityName];
        if (!ability) return false;
        
        // Check if player has this ability
        if (!player.classProgression.classAbilities.includes(abilityName)) {
            return false;
        }
        
        // Check cooldown
        if (ability.cooldown > 0) {
            const abilityUse = player.classProgression.abilityUses[abilityName];
            if (abilityUse) {
                const timeSinceLastUse = Date.now() - abilityUse.lastUsed;
                if (timeSinceLastUse < abilityUse.cooldown * 1000) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    static useAbility(player, abilityName) {
        if (!this.canUseAbility(player, abilityName)) {
            return { success: false, message: "Cannot use this ability right now." };
        }
        
        const ability = abilityDefinitions[abilityName];
        
        // Mark ability as used
        if (ability.cooldown > 0) {
            if (!player.classProgression.abilityUses[abilityName]) {
                player.classProgression.abilityUses[abilityName] = { cooldown: ability.cooldown };
            }
            player.classProgression.abilityUses[abilityName].lastUsed = Date.now();
        }
        
        return { 
            success: true, 
            message: `Used ${abilityName}: ${ability.description}`,
            effect: ability.effect
        };
    }
    
    static learnSpell(player, spellName) {
        if (!player.classProgression.availableSpells.includes(spellName)) {
            return { success: false, message: "Spell not available to learn." };
        }
        
        if (player.classProgression.knownSpells.includes(spellName)) {
            return { success: false, message: "Spell already known." };
        }
        
        player.classProgression.knownSpells.push(spellName);
        return { success: true, message: `Learned spell: ${spellName}` };
    }
    
    static saveProgression(player) {
        // Save progression data to localStorage
        const progressionData = {
            classProgression: player.classProgression,
            level: player.level,
            maxHp: player.maxHp,
            stats: player.stats,
            exp: player.exp, // ADDED: Save current experience
            expToNextLevel: player.expToNextLevel // ADDED: Save XP needed for next level
        };
        
        localStorage.setItem(`progression_${player.name}`, JSON.stringify(progressionData));
        console.log('Character progression saved');
    }
    
    // Modify CharacterManager.loadProgression to load XP fields:
    static loadProgression(player) {
        const savedData = localStorage.getItem(`progression_${player.name}`);
        if (savedData) {
            const progressionData = JSON.parse(savedData);
            player.classProgression = progressionData.classProgression;
            player.level = progressionData.level;
            player.maxHp = progressionData.maxHp;
            player.stats = { ...player.stats, ...progressionData.stats };
            //player.exp = progressionData.exp || 0; // ADDED: Load current experience, with fallback for older saves
            //player.expToNextLevel = progressionData.expToNextLevel || 100; // ADDED: Load XP to next level, with fallback
            console.log('Character progression loaded');
            return true;
        }
        return false;
    }
}

window.CharacterManager = CharacterManager