
// Character Management System - Handles leveling, abilities, and progression
import { classProgression, spellDefinitions, abilityDefinitions, featDefinitions } from './class-progression.js';

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
        
        return player;
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
        
        // Add spells
        levelData.spells.forEach(spellName => {
            if (!player.classProgression.availableSpells.includes(spellName)) {
                player.classProgression.availableSpells.push(spellName);
            }
            // For mages, automatically learn all available spells
            if (player.classProgression.class === 'mage' && !player.classProgression.knownSpells.includes(spellName)) {
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
        // Only mages and rangers get spell slots
        if (charClass === 'mage') {
            return {
                1: Math.max(1, level),
                2: Math.max(0, level - 2),
                3: Math.max(0, level - 4),
                4: Math.max(0, level - 6),
                5: Math.max(0, level - 8)
            };
        } else if (charClass === 'ranger' && level >= 2) {
            return {
                1: Math.max(0, Math.floor((level - 1) / 2)),
                2: Math.max(0, Math.floor((level - 3) / 2)),
                3: Math.max(0, Math.floor((level - 7) / 2))
            };
        }
        return {};
    }
    
    static applyFeatEffects(player, featName) {
        const feat = featDefinitions[featName];
        if (!feat) return;
        
        // Apply feat effects to player stats/abilities
        if (feat.effect.attack_bonus) {
            player.stats.attackBonus = (player.stats.attackBonus || 0) + feat.effect.attack_bonus;
        }
        if (feat.effect.ac_bonus) {
            player.stats.acBonus = (player.stats.acBonus || 0) + feat.effect.ac_bonus;
        }
        if (feat.effect.damage_bonus) {
            player.stats.damageBonus = (player.stats.damageBonus || 0) + feat.effect.damage_bonus;
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
        
        // Apply new level progression
        this.applyLevelProgression(player, newLevel);
        
        return true;
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
            stats: player.stats
        };
        
        localStorage.setItem(`progression_${player.name}`, JSON.stringify(progressionData));
        console.log('Character progression saved');
    }
    
    static loadProgression(player) {
        const savedData = localStorage.getItem(`progression_${player.name}`);
        if (savedData) {
            const progressionData = JSON.parse(savedData);
            player.classProgression = progressionData.classProgression;
            player.level = progressionData.level;
            player.maxHp = progressionData.maxHp;
            player.stats = { ...player.stats, ...progressionData.stats };
            console.log('Character progression loaded');
            return true;
        }
        return false;
    }
}

export default CharacterManager;
