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
    QUEST: 'quest',
    GLYPH: 'glyph', // New Category
    INGREDIENT: 'ingredient', // New Category (can overlap with crafting)
    TRINKET: 'trinket' // New Category
};

export const itemRarity = {
    COMMON: { name: 'Common', multiplier: 1, color: '#FFFFFF' },
    UNCOMMON: { name: 'Uncommon', multiplier: 1.5, color: '#1EFF00' },
    RARE: { name: 'Rare', multiplier: 2.5, color: '#0070DD' },
    EPIC: { name: 'Epic', multiplier: 4, color: '#A335EE' },
    LEGENDARY: { name: 'Legendary', multiplier: 6, color: '#FF8000' },
    ARTIFACT: { name: 'Artifact', multiplier: 10, color: '#E6CC80' },
    MYTHIC: { name: 'Mythic', multiplier: 15, color: '#D4AF37' } // New Rarity
};

export const statusEffects = {
    // Positive Effects
    blessed: {
        name: 'Blessed',
        type: 'positive',
        duration: 300, // 5 minutes
        description: 'Divine protection increases all stats by 2 and damage reduction by 10%.',
        effects: { allStats: 2, damageReduction: 0.1 }
    },
    enchanted: {
        name: 'Enchanted',
        type: 'positive',
        duration: 600,
        description: 'Magical enhancement boosts intelligence by 3 and spell power by 20%.',
        effects: { intelligence: 3, spellPower: 1.2 }
    },
    fortified: {
        name: 'Fortified',
        type: 'positive',
        duration: 300,
        description: 'Increased constitution by 2 and health regeneration by 2 HP/sec.',
        effects: { constitution: 2, hpRegen: 2 }
    },
    swift: {
        name: 'Swift',
        type: 'positive',
        duration: 180,
        description: 'Enhanced dexterity by 3 and movement speed by 50%.',
        effects: { dexterity: 3, movementSpeed: 1.5 }
    },
    hasted: {
        name: 'Hasted',
        type: 'positive',
        duration: 120,
        description: 'Greatly increased attack speed and reduced cooldowns by 15%.',
        effects: { attackSpeed: 1.3, cooldownReduction: 0.15 }
    },
    regenerating: {
        name: 'Regenerating',
        type: 'positive',
        duration: 60,
        description: 'Rapidly regenerates 5 HP per second.',
        effects: { hpRegen: 5 }
    },
    focused: {
        name: 'Focused',
        type: 'positive',
        duration: 300,
        description: 'Increased critical hit chance by 15% and critical damage by 25%.',
        effects: { criticalChance: 0.15, criticalDamage: 1.25 }
    },
    stoneskin: {
        name: 'Stoneskin',
        type: 'positive',
        duration: 180,
        description: 'Grants 25% physical damage resistance.',
        effects: { physicalResistance: 0.25 }
    },
    mana_shield: {
        name: 'Mana Shield',
        type: 'positive',
        duration: 120,
        description: 'Absorbs incoming damage using mana instead of health (up to 50 damage).',
        effects: { manaAsHp: 50 } // Custom effect to be handled by game logic
    },
    true_sight: {
        name: 'True Sight',
        type: 'positive',
        duration: 60,
        description: 'Allows seeing invisible entities and illusions.',
        effects: { detectInvisible: true } // Custom effect
    },
    invigorated: {
        name: 'Invigorated',
        type: 'positive',
        duration: 300,
        description: 'Increases stamina regeneration by 50% and maximum stamina by 20.',
        effects: { staminaRegen: 1.5, maxStamina: 20 }
    },
    arcane_potency: {
        name: 'Arcane Potency',
        type: 'positive',
        duration: 180,
        description: 'Your spells deal 15% more damage and cost 10% less mana.',
        effects: { spellDamageBonus: 0.15, manaCostReduction: 0.1 }
    },

    // Negative Effects
    cursed: {
        name: 'Cursed',
        type: 'negative',
        duration: 900,
        description: 'Dark magic reduces all stats by 1 and critical hit chance by 10%.',
        effects: { allStats: -1, criticalChance: -0.1 }
    },
    poisoned: {
        name: 'Poisoned',
        type: 'negative',
        duration: 120,
        description: 'Toxic substance drains 1 HP per second and reduces constitution by 1.',
        effects: { hpDrain: 1, constitution: -1 }
    },
    weakened: {
        name: 'Weakened',
        type: 'negative',
        duration: 240,
        description: 'Physical weakness reduces strength by 2 and damage dealt by 20%.',
        effects: { strength: -2, damageMultiplier: 0.8 }
    },
    slowed: {
        name: 'Slowed',
        type: 'negative',
        duration: 120,
        description: 'Movement speed and attack speed reduced by 30%.',
        effects: { movementSpeed: 0.7, attackSpeed: 0.7 }
    },
    bleeding: {
        name: 'Bleeding',
        type: 'negative',
        duration: 60,
        description: 'Suffering blood loss, taking 2 damage per second.',
        effects: { hpDrain: 2 }
    },
    silenced: {
        name: 'Silenced',
        type: 'negative',
        duration: 30,
        description: 'Unable to cast spells.',
        effects: { canCastSpells: false } // Custom effect
    },
    blinded: {
        name: 'Blinded',
        type: 'negative',
        duration: 45,
        description: 'Greatly reduced accuracy and perception.',
        effects: { accuracy: -0.5, perception: -5 }
    },
    vulnerable: {
        name: 'Vulnerable',
        type: 'negative',
        duration: 180,
        description: 'Takes 25% more damage from all sources.',
        effects: { damageTakenMultiplier: 1.25 }
    },
    corrupted_blood: {
        name: 'Corrupted Blood',
        type: 'negative',
        duration: 120,
        description: 'Reduces healing received by 50% and deals 1 shadow damage per second.',
        effects: { healingReduction: 0.5, shadowDamageTick: 1 }
    },
    drained: {
        name: 'Drained',
        type: 'negative',
        duration: 300,
        description: 'Reduces maximum mana and stamina by 25%.',
        effects: { maxManaMultiplier: 0.75, maxStaminaMultiplier: 0.75 }
    },
    fear: {
        name: 'Fear',
        type: 'negative',
        duration: 10,
        description: 'Overcome with terror, may lose control.',
        effects: { controlLossChance: 0.3 } // Custom effect
    },
    frostbite: {
        name: 'Frostbite',
        type: 'negative',
        duration: 90,
        description: 'Reduced dexterity by 2, and periodically takes cold damage.',
        effects: { dexterity: -2, coldDamageTick: 1 }
    },

    // Special Effects
    ethereal: {
        name: 'Ethereal',
        type: 'special',
        duration: 60,
        description: 'Become partially incorporeal, reducing physical damage taken by 50% but increasing magical damage taken by 20%.',
        effects: { physicalResistance: 0.5, magicalVulnerability: 1.2 }
    },
    berserk: {
        name: 'Berserk',
        type: 'special',
        duration: 30,
        description: 'Increased damage output by 30% and attack speed by 20%, but reduced armor by 50%.',
        effects: { damageMultiplier: 1.3, attackSpeed: 1.2, armorMultiplier: 0.5 }
    },
    phasing: {
        name: 'Phasing',
        type: 'special',
        duration: 15,
        description: 'Able to move through enemies and small obstacles.',
        effects: { canPhase: true } // Custom effect
    },
    soul_bound: {
        name: 'Soul Bound',
        type: 'special',
        duration: -1, // Permanent until condition met
        description: 'This item is bound to your soul. It cannot be dropped or traded.',
        effects: { isBound: true }
    },
    unstable_magic: {
        name: 'Unstable Magic',
        type: 'special',
        duration: 120,
        description: 'Spells have a chance to backfire or have amplified, unpredictable effects.',
        effects: { spellInstability: 0.25 } // Custom effect
    },
    shadow_form: {
        name: 'Shadow Form',
        type: 'special',
        duration: 60,
        description: 'Meld into shadows, becoming harder to detect and dealing bonus shadow damage, but vulnerable to light.',
        effects: { stealthBonus: 0.5, bonusShadowDamage: 5, lightVulnerability: 1.5 }
    },
    blood_frenzy: {
        name: 'Blood Frenzy',
        type: 'special',
        duration: 45,
        description: 'Each hit dealt heals for a small amount, damage output slightly increased, but constantly lose a small amount of health.',
        effects: { lifeSteal: 0.05, damageMultiplier: 1.1, hpDrain: 1 }
    },
    petrified: {
        name: 'Petrified',
        type: 'special', // Or negative
        duration: 60,
        description: 'Turned to stone. Cannot act, but highly resistant to damage.',
        effects: { incapacitated: true, damageReduction: 0.9 }
    }
};

export const itemTemplates = {
    weapons: {
        swords: [
            { name: 'Rusted Blade', damage: '1d4', rarity: 'COMMON', effects: [] },
            { name: 'Training Sword', damage: '1d4+1', rarity: 'COMMON', effects: [] },
            { name: 'Iron Shortsword', damage: '1d6', rarity: 'COMMON', effects: [] },
            { name: 'Steel Sword', damage: '1d6+1', rarity: 'COMMON', effects: [] },
            { name: 'Legionnaire\'s Gladius', damage: '1d8', rarity: 'COMMON', effects: [] },
            { name: 'Silver Blade', damage: '1d8', rarity: 'UNCOMMON', effects: ['blessed', 'undead_bane'] },
            { name: 'Elven Longsword', damage: '1d8+1', rarity: 'UNCOMMON', effects: ['swift_strike'] },
            { name: 'Dwarven Warblade', damage: '1d10', rarity: 'UNCOMMON', effects: ['armor_piercing_1'] },
            { name: 'Knight\'s Arming Sword', damage: '1d8+2', rarity: 'UNCOMMON', effects: ['fortified_grip'] },
            { name: 'Cutlass of the Seas', damage: '1d6+1', rarity: 'UNCOMMON', effects: ['bleeding_1'] },
            { name: 'Flame Tongue', damage: '1d8+1d4_fire', rarity: 'RARE', effects: ['fire_damage_aura'] },
            { name: 'Frost Brand', damage: '1d8+1d4_cold', rarity: 'RARE', effects: ['chill_touch'] },
            { name: 'Blade of the Righteous', damage: '1d10+2', rarity: 'RARE', effects: ['blessed', 'divine_smite'] },
            { name: 'Shadowsteel Katana', damage: '2d4+2', rarity: 'RARE', effects: ['stealth_strike', 'poisoned_blade_1'] },
            { name: 'Vorpal Sword (Dull)', damage: '1d12', rarity: 'RARE', effects: ['keen_edge'] },
            { name: 'Demon Slayer', damage: '2d6+2_vs_demons', rarity: 'EPIC', effects: ['demon_bane', 'blessed'] },
            { name: 'Sunblade', damage: '2d8_radiant', rarity: 'EPIC', effects: ['radiant_burst', 'undead_destroyer'] },
            { name: 'Dragonfang Blade', damage: '1d12+1d6_fire', rarity: 'EPIC', effects: ['dragon_might', 'fear_aura_1'] },
            { name: 'Soul Reaver (Weakened)', damage: '2d6+2_shadow', rarity: 'LEGENDARY', effects: ['soul_steal_1', 'cursed'] },
            { name: 'Excalibur Fragment', damage: '2d10+3', rarity: 'LEGENDARY', effects: ['holy_aura', 'leadership_boost'] }
        ],
        staves: [
            { name: 'Gnarled Branch', damage: '1d4', rarity: 'COMMON', effects: ['minor_focus'] },
            { name: 'Apprentice Staff', damage: '1d4', rarity: 'COMMON', effects: ['spell_focus_1'] },
            { name: 'Hardwood Staff', damage: '1d6', rarity: 'COMMON', effects: ['mana_regen_tiny'] },
            { name: 'Crystal Staff', damage: '1d6', rarity: 'UNCOMMON', effects: ['mana_boost_small', 'enchanted'] },
            { name: 'Runed Quarterstaff', damage: '1d8', rarity: 'UNCOMMON', effects: ['empower_elemental_1'] },
            { name: 'Staff of Healing', damage: '1d4', rarity: 'UNCOMMON', effects: ['mend_wounds_1', 'blessed'] },
            { name: 'Staff of Power', damage: '1d8+1', rarity: 'RARE', effects: ['spell_power_1', 'enchanted', 'mana_shield'] },
            { name: 'Archmage\'s Cane', damage: '1d6+2', rarity: 'RARE', effects: ['arcane_potency', 'intelligence_1'] },
            { name: 'Staff of the Woodlands', damage: '1d6', rarity: 'RARE', effects: ['nature_attunement', 'summon_animal_1'] },
            { name: 'Void-Touched Rod', damage: '1d8+1d4_shadow', rarity: 'EPIC', effects: ['shadow_bolt', 'mana_drain_1'] },
            { name: 'Staff of Elemental Command', damage: '1d10', rarity: 'EPIC', effects: ['elemental_mastery', 'spell_penetration_1'] },
            { name: 'Lichbone Staff', damage: '2d6_necrotic', rarity: 'LEGENDARY', effects: ['animate_dead_1', 'cursed', 'fear_aura_2'] }
        ],
        axes: [
            { name: 'Woodcutter\'s Axe', damage: '1d6', rarity: 'COMMON', effects: [] },
            { name: 'Iron Handaxe', damage: '1d6+1', rarity: 'COMMON', effects: [] },
            { name: 'Steel Battleaxe', damage: '1d8+1', rarity: 'UNCOMMON', effects: ['cleave_1'] },
            { name: 'Dwarven Beard Axe', damage: '1d10', rarity: 'UNCOMMON', effects: ['mighty_blow'] },
            { name: 'Executioner\'s Axe', damage: '1d12', rarity: 'RARE', effects: ['execution_strike'] },
            { name: 'Axe of the Berserker', damage: '1d10+2', rarity: 'RARE', effects: ['berserk_on_crit'] },
            { name: 'Infernal Greataxe', damage: '2d6+1d4_fire', rarity: 'EPIC', effects: ['fire_cleave', 'cursed'] },
            { name: 'Frost Giant\'s Cleaver', damage: '2d8+1d4_cold', rarity: 'EPIC', effects: ['frost_aura', 'slow_on_hit'] },
            { name: 'World-Splitter Axe', damage: '3d6', rarity: 'LEGENDARY', effects: ['earthquake_stomp', 'unbreakable'] }
        ],
        daggers: [
            { name: 'Shiv', damage: '1d3', rarity: 'COMMON', effects: [] },
            { name: 'Iron Dagger', damage: '1d4', rarity: 'COMMON', effects: [] },
            { name: 'Steel Dirk', damage: '1d4+1', rarity: 'UNCOMMON', effects: ['quick_stab'] },
            { name: 'Assassin\'s Stiletto', damage: '1d6', rarity: 'UNCOMMON', effects: ['backstab_bonus_1'] },
            { name: 'Poisoned Kris', damage: '1d4+1d2_poison', rarity: 'RARE', effects: ['apply_poison_1'] },
            { name: 'Sacrificial Dagger', damage: '1d4+1', rarity: 'RARE', effects: ['blood_magic_affinity', 'cursed'] },
            { name: 'Shadowfang', damage: '1d6+1d4_shadow', rarity: 'EPIC', effects: ['shadow_step_ability', 'critical_bleed'] },
            { name: 'Heartseeker', damage: '1d8+2', rarity: 'EPIC', effects: ['ignore_armor_on_crit', 'true_strike_1'] },
            { name: 'Dagger of the Empty Void', damage: '2d4', rarity: 'LEGENDARY', effects: ['banishment_chance', 'ethereal_strike'] }
        ],
        bows: [
            { name: 'Shortbow', damage: '1d6', rarity: 'COMMON', effects: [] },
            { name: 'Hunting Bow', damage: '1d6+1', rarity: 'COMMON', effects: [] },
            { name: 'Elven Longbow', damage: '1d8', rarity: 'UNCOMMON', effects: ['increased_range'] },
            { name: 'Composite Bow', damage: '1d8+1', rarity: 'UNCOMMON', effects: ['piercing_shot_1'] },
            { name: 'Bow of the Swift Arrow', damage: '1d6+1', rarity: 'RARE', effects: ['rapid_fire_1', 'dexterity_1'] },
            { name: 'Eagle Eye Longbow', damage: '1d10', rarity: 'RARE', effects: ['sniper_shot', 'perception_1'] },
            { name: 'Storm Bow', damage: '1d8+1d6_lightning', rarity: 'EPIC', effects: ['chain_lightning_arrow', 'swift'] },
            { name: 'Phoenix Bow', damage: '1d10+1d6_fire', rarity: 'EPIC', effects: ['explosive_arrow', 'rebirth_arrow_1'] },
            { name: 'Whisperwind, Bow of Shadows', damage: '2d6', rarity: 'LEGENDARY', effects: ['silent_shot', 'invisibility_on_kill', 'shadow_damage'] }
        ],
        maces: [
            { name: 'Wooden Club', damage: '1d6', rarity: 'COMMON', effects: [] },
            { name: 'Iron Mace', damage: '1d8', rarity: 'COMMON', effects: [] },
            { name: 'Steel Morningstar', damage: '1d8+1', rarity: 'UNCOMMON', effects: ['armor_denting'] },
            { name: 'Cleric\'s Holy Mace', damage: '1d6+1', rarity: 'UNCOMMON', effects: ['blessed', 'turn_undead_1'] },
            { name: 'Flanged Mace', damage: '1d10', rarity: 'RARE', effects: ['stunning_blow_1'] },
            { name: 'Mace of Disruption', damage: '1d8+2_vs_undead', rarity: 'RARE', effects: ['disrupt_undead', 'radiant_damage'] },
            { name: 'Earthshaker Maul', damage: '2d6', rarity: 'EPIC', effects: ['earth_tremor', 'strength_1'] },
            { name: 'Skullcrusher', damage: '1d12+2', rarity: 'EPIC', effects: ['brutal_critical', 'fear_on_crit'] },
            { name: 'Mace of the Heavens', damage: '2d8_radiant', rarity: 'LEGENDARY', effects: ['divine_judgment', 'aoe_heal_on_smite'] }
        ],
        hammers: [
            { name: 'Smith\'s Hammer', damage: '1d6', rarity: 'COMMON', effects: [] }, // Can be tool too
            { name: 'Light Hammer', damage: '1d4', rarity: 'COMMON', effects: ['throwable'] },
            { name: 'Warhammer', damage: '1d10', rarity: 'UNCOMMON', effects: ['sunder_armor_1'] },
            { name: 'Dwarven Throwing Hammer', damage: '1d6+1', rarity: 'UNCOMMON', effects: ['returning_1', 'mighty_throw'] },
            { name: 'Meteor Hammer', damage: '1d12', rarity: 'RARE', effects: ['impact_tremor', 'knockback_1'] },
            { name: 'Hammer of Righteous Fury', damage: '1d10+1d4_radiant', rarity: 'RARE', effects: ['blessed_weapon', 'smite_evil_1']},
            { name: 'Thunderstrike Hammer', damage: '2d6+1d6_lightning', rarity: 'EPIC', effects: ['call_lightning_1', 'shockwave_on_slam']},
            { name: 'Forgefire Maul', damage: '2d8+1d6_fire', rarity: 'EPIC', effects: ['molten_core', 'heat_aura']},
            { name: 'Mjolnir\'s Echo', damage: '3d6_lightning', rarity: 'LEGENDARY', effects: ['chain_lightning_storm', 'flight_brief', 'worthy_only']}
        ],
        spears: [
            { name: 'Pointed Stick', damage: '1d4', rarity: 'COMMON', effects: [] },
            { name: 'Hunting Spear', damage: '1d6', rarity: 'COMMON', effects: ['reach'] },
            { name: 'Iron Spear', damage: '1d8', rarity: 'UNCOMMON', effects: ['reach', 'brace'] },
            { name: 'Harpoon', damage: '1d6+1', rarity: 'UNCOMMON', effects: ['barbed', 'drag_target']},
            { name: 'Pike of the Legion', damage: '1d10', rarity: 'RARE', effects: ['reach', 'phalanx_formation_bonus']},
            { name: 'Spear of Impaling', damage: '1d8+2', rarity: 'RARE', effects: ['impale', 'bleeding_2']},
            { name: 'Windcarver Javelin', damage: '1d6+1', rarity: 'EPIC', effects: ['aero_slice', 'returning_2', 'swift']},
            { name: 'Dragonbone Lance', damage: '1d12+2', rarity: 'EPIC', effects: ['mounted_charge_bonus', 'dragon_slaying_edge']},
            { name: 'Gungnir\'s Whisper', damage: '2d8', rarity: 'LEGENDARY', effects: ['never_miss', 'true_strike_aura', 'divine_reach']}
        ]
    },
    armor: {
        helmets: [
            { name: 'Leather Cap', armor: 1, rarity: 'COMMON', effects: [] },
            { name: 'Iron Helm', armor: 2, rarity: 'COMMON', effects: [] },
            { name: 'Steel Fullhelm', armor: 3, rarity: 'UNCOMMON', effects: ['head_protection_1'] },
            { name: 'Guardian\'s Bascinet', armor: 4, rarity: 'RARE', effects: ['fortified', 'fear_resistance_1'] },
            { name: 'Dragonscale Coif', armor: 5, rarity: 'EPIC', effects: ['fire_resistance_small', 'intimidation_1'] },
            { name: 'Crown of Wisdom', armor: 2, rarity: 'LEGENDARY', effects: ['intelligence_2', 'mana_regen_1', 'true_sight'] }
        ],
        chestplates: [
            { name: 'Padded Tunic', armor: 2, rarity: 'COMMON', effects: [] },
            { name: 'Chainmail Vest', armor: 4, rarity: 'COMMON', effects: [] },
            { name: 'Steel Breastplate', armor: 6, rarity: 'UNCOMMON', effects: ['vitality_1'] },
            { name: 'Knight\'s Plate Armor', armor: 8, rarity: 'RARE', effects: ['damageReduction_flat_1', 'constitution_1'] },
            { name: 'Shadowweave Vestments', armor: 5, rarity: 'EPIC', effects: ['stealth_1', 'evasion_1', 'shadow_resistance_small'] },
            { name: 'Celestial Plate', armor: 10, rarity: 'LEGENDARY', effects: ['blessed', 'healing_aura_small', 'holy_resistance_medium'] }
        ],
        gauntlets: [
            { name: 'Cloth Wraps', armor: 0, rarity: 'COMMON', effects: [] },
            { name: 'Leather Gloves', armor: 1, rarity: 'COMMON', effects: [] },
            { name: 'Iron Gauntlets', armor: 2, rarity: 'UNCOMMON', effects: ['strength_tiny'] },
            { name: 'Gauntlets of Ogre Power', armor: 2, rarity: 'RARE', effects: ['strength_1'] },
            { name: 'Executioner\'s Mitts', armor: 3, rarity: 'EPIC', effects: ['critical_damage_boost', 'bleed_on_crit']},
            { name: 'Fists of the Titan', armor: 4, rarity: 'LEGENDARY', effects: ['strength_3', 'unarmed_damage_large', 'earthquake_punch']}
        ],
        sleeves: [
            { name: 'Cloth Sleeves', armor: 0, rarity: 'COMMON', effects: [] },
            { name: 'Leather Armguards', armor: 1, rarity: 'COMMON', effects: [] },
            { name: 'Iron Vambraces', armor: 2, rarity: 'UNCOMMON', effects: ['dexterity_tiny'] },
            { name: 'Sleeves of the Shadow Dancer', armor: 2, rarity: 'RARE', effects: ['stealth_1', 'evasion_1'] },
            { name: 'Bracers of the Storm', armor: 3, rarity: 'EPIC', effects: ['lightning_resistance_medium', 'shockwave_punch'] }  
        ],
        leggings: [
            { name: 'Cloth Leggings', armor: 1, rarity: 'COMMON', effects: [] },
            { name: 'Leather Pants', armor: 2, rarity: 'COMMON', effects: [] },
            { name: 'Steel Greaves', armor: 3, rarity: 'UNCOMMON', effects: ['movement_speed_penalty_tiny', 'protection_1'] },
            { name: 'Leggings of the Swift', armor: 2, rarity: 'RARE', effects: ['swift', 'stamina_regen_small'] },
            { name: 'Shadow Stalker\'s Leggings', armor: 3, rarity: 'EPIC', effects: ['silent_movement', 'stealth_1'] }
        ],
        boots: [
            { name: 'Worn Sandals', armor: 0, rarity: 'COMMON', effects: [] },
            { name: 'Leather Boots', armor: 1, rarity: 'COMMON', effects: [] },
            { name: 'Steel Greaves', armor: 2, rarity: 'UNCOMMON', effects: ['movement_speed_penalty_tiny', 'protection_1'] },
            { name: 'Boots of Striding', armor: 1, rarity: 'RARE', effects: ['swift', 'stamina_regen_small'] },
            { name: 'Shadow Stalker\'s Boots', armor: 2, rarity: 'EPIC', effects: ['silent_movement', 'stealth_1'] },
            { name: 'Boots of the Seven Leagues', armor: 3, rarity: 'LEGENDARY', effects: ['teleport_short_range', 'movement_speed_large'] }
        ],
        shields: [
            { name: 'Wooden Buckler', armor: 1, block_chance: 0.1, rarity: 'COMMON', effects: [] },
            { name: 'Iron Round Shield', armor: 2, block_chance: 0.15, rarity: 'COMMON', effects: [] },
            { name: 'Steel Kite Shield', armor: 3, block_chance: 0.2, rarity: 'UNCOMMON', effects: ['shield_bash_1'] },
            { name: 'Tower Shield of the Guardian', armor: 5, block_chance: 0.25, rarity: 'RARE', effects: ['immovable', 'fortified'] },
            { name: 'Dragonscale Shield', armor: 4, block_chance: 0.2, rarity: 'EPIC', effects: ['fire_resistance_medium', 'spell_deflection_small'] },
            { name: 'Aegis of the Divine', armor: 6, block_chance: 0.3, rarity: 'LEGENDARY', effects: ['holy_barrier', 'reflect_projectiles_chance', 'blessed'] }
        ]
    },
    magical: {
        scrolls: [
            { name: 'Scroll of Minor Healing', rarity: 'COMMON', effect: 'heal_light', spell: { type: 'healing', amount: 10 } },
            { name: 'Scroll of Light', rarity: 'COMMON', effect: 'cast_light', spell: { type: 'utility', effect: 'light_aura', duration: 300 } },
            { name: 'Scroll of Mage Armor', rarity: 'COMMON', effect: 'cast_mage_armor', spell: { type: 'buff', stat: 'armor', amount: 3, duration: 600 } },
            { name: 'Scroll of Burning Hands', rarity: 'COMMON', effect: 'cast_burning_hands', spell: { type: 'damage', damageType: 'fire', amount: '2d6' } },
            { name: 'Scroll of Fireball', rarity: 'UNCOMMON', effect: 'fireball', spell: { type: 'aoe_damage', damageType: 'fire', amount: '6d6', radius: 15 } },
            { name: 'Scroll of Invisibility', rarity: 'UNCOMMON', effect: 'cast_invisibility', spell: { type: 'buff', effect: 'invisibility', duration: 60 } },
            { name: 'Scroll of Detect Magic', rarity: 'UNCOMMON', effect: 'detect_magic', spell: { type: 'utility', effect: 'detect_magic_aura', duration: 1200 } },
            { name: 'Scroll of Mending', rarity: 'UNCOMMON', effect: 'repair_item', spell: { type: 'utility', action: 'repair_low_durability_item' }},
            { name: 'Scroll of Teleportation', rarity: 'RARE', effect: 'teleport_short', spell: { type: 'utility', action: 'teleport_to_known_location', range: 'short' } },
            { name: 'Scroll of Haste', rarity: 'RARE', effect: 'cast_haste', spell: { type: 'buff', status: 'hasted', duration: 30 } },
            { name: 'Scroll of Summon Swarm', rarity: 'RARE', effect: 'summon_swarm', spell: { type: 'summon', creature: 'insect_swarm', duration: 60 }},
            { name: 'Scroll of Remove Curse', rarity: 'RARE', effect: 'remove_curse', spell: { type: 'utility', action: 'dispel_curse_moderate' }},
            { name: 'Scroll of Time Stop', rarity: 'LEGENDARY', effect: 'time_stop', spell: { type: 'utility', effect: 'time_stop_field', duration: 10 } },
            { name: 'Scroll of True Resurrection', rarity: 'LEGENDARY', effect: 'true_resurrection', spell: { type: 'healing', action: 'resurrect_target_full' } },
            { name: 'Scroll of Wish (Limited)', rarity: 'ARTIFACT', effect: 'limited_wish', spell: { type: 'utility', action: 'fulfill_minor_wish' } },
            { name: 'Scroll of Gate', rarity: 'ARTIFACT', effect: 'open_gate', spell: { type: 'utility', action: 'open_portal_to_plane', requires_focus: true }}
        ],
        potions: [
            { name: 'Minor Health Potion', rarity: 'COMMON', effect: { type: 'heal', amount: 25 } },
            { name: 'Lesser Mana Potion', rarity: 'COMMON', effect: { type: 'mana', amount: 20 } },
            { name: 'Potion of Water Breathing', rarity: 'COMMON', effect: { type: 'buff', status: 'water_breathing', duration: 600 } },
            { name: 'Antidote (Weak)', rarity: 'COMMON', effect: { type: 'cure', status: 'poisoned', strength: 'weak' } },
            { name: 'Strength Elixir', rarity: 'UNCOMMON', effect: { type: 'buff', stat: 'strength', amount: 2, duration: 300 } },
            { name: 'Potion of Heroism', rarity: 'UNCOMMON', effect: { type: 'buff', status: 'blessed', amount: 1, duration: 180 } },
            { name: 'Draught of Swiftness', rarity: 'UNCOMMON', effect: { type: 'buff', status: 'swift', duration: 120 } },
            { name: 'Oil of Sharpness', rarity: 'UNCOMMON', effect: { type: 'weapon_buff', property: 'damage_bonus', amount: 2, duration: 300 }},
            { name: 'Potion of Invisibility', rarity: 'RARE', effect: { type: 'status', effect: 'ethereal', duration: 60 } }, // Original used ethereal for invisibility
            { name: 'Elixir of Fortitude', rarity: 'RARE', effect: { type: 'buff', status: 'fortified', duration: 600 } },
            { name: 'Potion of Giant Strength', rarity: 'RARE', effect: { type: 'buff', stat: 'strength', amount: 4, duration: 60 } },
            { name: 'Philter of Love', rarity: 'RARE', effect: { type: 'charm', target_type: 'humanoid', duration: 3600 }},
            { name: 'Potion of Superior Healing', rarity: 'EPIC', effect: { type: 'heal', amount: 250 } },
            { name: 'Elixir of Arcane Power', rarity: 'EPIC', effect: { type: 'buff', status: 'arcane_potency', duration: 300 } },
            { name: 'Potion of Dragon\'s Breath (Fire)', rarity: 'EPIC', effect: { type: 'damage_aura', damageType: 'fire', amount: '1d6', duration: 30 }},
            { name: 'Draught of Immortality (False)', rarity: 'LEGENDARY', effect: { type: 'buff', status: 'regenerating_strong', duration: 3600, side_effect: 'cursed_after_wear_off' }}
        ],
        wands: [
            { name: 'Sparking Wand', charges: 10, spell: 'magic_missile_weak', rarity: 'COMMON', effects: ['spell_focus_tiny'] },
            { name: 'Wand of Light', charges: 20, spell: 'continual_light', rarity: 'COMMON', effects: [] },
            { name: 'Wand of Healing Touch', charges: 7, spell: 'cure_light_wounds', rarity: 'UNCOMMON', effects: ['blessed_touch'] },
            { name: 'Wand of Firebolts', charges: 15, spell: 'firebolt_moderate', rarity: 'UNCOMMON', effects: ['fire_attunement'] },
            { name: 'Wand of Paralyzation', charges: 5, spell: 'hold_person_weak', rarity: 'RARE', effects: ['nerve_shock'] },
            { name: 'Wand of Illusions', charges: 10, spell: 'minor_illusion_strong', rarity: 'RARE', effects: ['deceptive_magic'] },
            { name: 'Wand of Lightning Bolts', charges: 8, spell: 'lightning_bolt_strong', rarity: 'EPIC', effects: ['electrical_surge'] },
            { name: 'Wand of Polymorph (Unstable)', charges: 3, spell: 'polymorph_random', rarity: 'EPIC', effects: ['wild_magic'] },
            { name: 'Wand of Necrotic Power', charges: 6, spell: 'ray_of_enfeeblement_strong', rarity: 'LEGENDARY', effects: ['cursed_touch', 'life_drain_small'] },
        ],
        orbs: [ // Adding explicit templates for orbs
            { name: 'Orb of Minor Warding', rarity: 'COMMON', effects: ['defense_aura_tiny'], passive_effect: { stat: 'armor', amount: 1 } },
            { name: 'Scrying Orb (Cloudy)', rarity: 'UNCOMMON', effects: ['scry_weak'], active_ability: 'scry_location_nearby_limited' },
            { name: 'Orb of Storms (Lesser)', rarity: 'RARE', effects: ['call_lightning_minor', 'weather_sense'], active_ability: 'summon_small_storm_cloud' },
            { name: 'Blood Orb of the Vampire', rarity: 'EPIC', effects: ['life_steal_aura_small', 'empower_dark_magic'], passive_effect: { on_damage_dealt: 'heal_self_percentage' } },
            { name: 'Orb of Dragon Souls', rarity: 'LEGENDARY', effects: ['dragon_knowledge_passive', 'command_lesser_drakes'], active_ability: 'absorb_dragon_energy' }
        ],
        talismans: [
            { name: 'Talisman of Luck (Cracked)', rarity: 'COMMON', effects: ['reroll_one_bad_dice_once'] },
            { name: 'Talisman of Protection', rarity: 'UNCOMMON', effects: ['elemental_resistance_fire_tiny'] },
            { name: 'Talisman of the Beast', rarity: 'RARE', effects: ['speak_with_animals', 'animal_friendship_aura'] },
            { name: 'Talisman of Forbidden Knowledge', rarity: 'EPIC', effects: ['unlock_ancient_lore_1', 'minor_madness_chance'] },
            { name: 'Talisman of Eternal Night', rarity: 'LEGENDARY', effects: ['control_shadows_moderate', 'vampiric_touch_empowered'] }
        ],
    },
    questItems: { // Renamed from questItems to align with singular key naming
        books: [ // Original list had this as 'books' under 'questItems'
            { name: 'Tome of Ancient Wisdom', rarity: 'RARE', effects: ['knowledge_boost', 'lore_reveal_1'] },
            { name: 'Spellbook of Shadows', rarity: 'EPIC', effects: ['dark_magic_access', 'intelligence_1', 'cursed_knowledge'] },
            { name: 'Chronicle of Heroes', rarity: 'LEGENDARY', effects: ['inspiration_aura', 'leadership_1', 'historical_insight'] },
            { name: 'Herbalist\'s Guide (Local Flora)', rarity: 'COMMON', effects: ['identify_plants_1'] },
            { name: 'Engineer\'s Doodles', rarity: 'COMMON', effects: ['crafting_insight_basic_traps'] },
            { name: 'The Mad Alchemist\'s Journal', rarity: 'UNCOMMON', effects: ['potion_recipe_unstable_1', 'minor_poison_recipe'] },
            { name: 'Codex of Lost Religions', rarity: 'UNCOMMON', effects: ['theology_skill_up', 'reveal_forgotten_shrine_location'] },
            { name: 'The Art of War (Abridged)', rarity: 'RARE', effects: ['strategy_bonus_1', 'command_skill_up'] },
            { name: 'Necronomicon Ex-Mortis (Fragment)', rarity: 'EPIC', effects: ['summon_undead_weak', 'sanity_drain', 'forbidden_ritual_1'] },
            { name: 'Book of Celestial Hymns', rarity: 'LEGENDARY', effects: ['divine_spell_empower_1', 'holy_protection_aura', 'serenity'] },
            { name: 'Atlas of Unknown Worlds', rarity: 'ARTIFACT', effects: ['map_reveal_all', 'teleport_to_discovered_points', 'cosmic_understanding_1'] },
            { name: 'The Poem of Creation', rarity: 'ARTIFACT', effects: ['true_understanding', 'shape_reality_minor', 'all_stats_major_boost_temporary'] }
        ],
        artifacts: [ // Original list had this as 'artifacts' under 'questItems'
            { name: 'Crystal of Power', rarity: 'EPIC', effects: ['mana_regeneration_large', 'spell_power_boost_medium'] },
            { name: 'Heart of the Dragon', rarity: 'LEGENDARY', effects: ['fire_immunity', 'strength_boost_large', 'dragon_form_brief'] },
            { name: 'Soul Fragment (Corrupted)', rarity: 'ARTIFACT', effects: ['soul_power_unstable', 'drain_life_aura', 'whispers_of_the_damned'] },
            { name: 'Shard of the Worldstone', rarity: 'EPIC', effects: ['elemental_attunement_all', 'reality_stabilization_field'] },
            { name: 'Amulet of Kings', rarity: 'EPIC', effects: ['charisma_boost_large', 'command_allegiance', 'divine_right_aura'] },
            { name: 'Horn of Valhalla (Cracked)', rarity: 'LEGENDARY', effects: ['summon_spirit_warriors_few', 'inspire_allies_strong'] },
            { name: 'The Philosopher\'s Stone (Imperfect)', rarity: 'LEGENDARY', effects: ['transmute_materials_limited', 'extend_life_minor', 'gold_generation_slow'] },
            { name: 'Eye of Vecna (Replica)', rarity: 'ARTIFACT', effects: ['true_sight_enhanced', 'forbidden_knowledge_stream', 'major_curse_attraction'] },
            { name: 'The One Ring (Lost)', rarity: 'ARTIFACT', effects: ['invisibility_at_will', 'corrupting_influence_strong', 'power_amplification_dark'] }
        ],
        keys: [
            { name: 'Rusted Iron Key', rarity: 'COMMON', effects: ['unlocks_old_chest'] },
            { name: 'Ornate Silver Key', rarity: 'UNCOMMON', effects: ['unlocks_manor_door'] },
            { name: 'Gem-Encrusted Gold Key', rarity: 'RARE', effects: ['unlocks_treasure_vault'] },
            { name: 'Skeleton Key (Fragile)', rarity: 'RARE', effects: ['unlocks_any_simple_lock_once'] },
            { name: 'Shadow Key', rarity: 'EPIC', effects: ['unlocks_hidden_path_in_shadowfell'] },
            { name: 'Key to the City (Ceremonial)', rarity: 'EPIC', effects: ['grants_access_high_council', 'diplomacy_bonus_1'] },
            { name: 'Key of a Thousand Doors', rarity: 'LEGENDARY', effects: ['unlocks_any_mundane_door', 'chance_to_open_random_portal'] },
            { name: 'Key to Oblivion', rarity: 'ARTIFACT', effects: ['opens_gate_to_void', 'destroy_on_use'] }
        ],
        maps: [
            { name: 'Torn Map Fragment', rarity: 'COMMON', effects: ['reveals_small_area_1'] },
            { name: 'Local Area Map', rarity: 'UNCOMMON', effects: ['reveals_region_map'] },
            { name: 'Treasure Map (Dubious)', rarity: 'UNCOMMON', effects: ['marks_possible_treasure_spot'] },
            { name: 'Star Chart (Ancient)', rarity: 'RARE', effects: ['navigation_aid_celestial', 'astrology_insight_1'] },
            { name: 'Marauder\'s Map (Blank)', rarity: 'EPIC', effects: ['reveals_nearby_living_beings_when_activated'] },
            { name: 'Map of the Underdark (Incomplete)', rarity: 'EPIC', effects: ['navigation_aid_subterranean', 'danger_sense_underground'] },
            { name: 'World Map (Pre-Cataclysm)', rarity: 'LEGENDARY', effects: ['historical_geography_knowledge', 'reveals_lost_locations'] },
            { name: 'Planar Map of the Nine Hells', rarity: 'ARTIFACT', effects: ['navigate_hells_imprecisely', 'attracts_devils'] }
        ],
        relics: [
            { name: 'Saint\'s Fingerbone', rarity: 'RARE', effects: ['minor_blessing_aura', 'ward_against_undead_small'] },
            { name: 'Goblin Totem (Crude)', rarity: 'COMMON', effects: ['minor_luck_or_curse_unpredictable'] },
            { name: 'Elven Star Brooch', rarity: 'UNCOMMON', effects: ['light_aura_faint', 'forest_affinity'] },
            { name: 'Dwarven Rune Stone', rarity: 'RARE', effects: ['earth_resistance_small', 'crafting_inspiration_smithing'] },
            { name: 'Sliver of a Fallen Star', rarity: 'EPIC', effects: ['cosmic_energy_pulse_ability', 'hope_aura'] },
            { name: 'Tear of a Goddess', rarity: 'LEGENDARY', effects: ['major_healing_ability_single_use', 'purification_field'] },
            { name: 'Phylactery of a Minor Lich', rarity: 'EPIC', effects: ['necromantic_knowledge_1', 'attracts_undead_and_hunters'] },
            { name: 'Crown of the Lich King (Damaged)', rarity: 'ARTIFACT', effects: ['command_lesser_undead_powerful', 'major_curse_of_binding', 'unholy_aura']}
        ]
    },
    tools: {
        gathering: [
            { name: 'Flint Knife', rarity: 'COMMON', tool_type: 'skinning', efficiency: 0.8 },
            { name: 'Mining Pick (Worn)', rarity: 'COMMON', tool_type: 'mining', efficiency: 0.9 },
            { name: 'Wood Axe (Basic)', rarity: 'COMMON', tool_type: 'woodcutting', efficiency: 1.0 },
            { name: 'Fishing Rod (Simple)', rarity: 'COMMON', tool_type: 'fishing', efficiency: 1.0 },
            { name: 'Herb Pouch', rarity: 'COMMON', tool_type: 'herbalism_storage', capacity: 10 },
            { name: 'Steel Skinning Knife', rarity: 'UNCOMMON', tool_type: 'skinning', efficiency: 1.2, effects: ['cleaner_cuts'] },
            { name: 'Reinforced Mining Pick', rarity: 'UNCOMMON', tool_type: 'mining', efficiency: 1.3, effects: ['find_gems_chance_small'] },
            { name: 'Sharp Forester\'s Axe', rarity: 'UNCOMMON', tool_type: 'woodcutting', efficiency: 1.4, effects: ['rare_wood_chance_small'] },
            { name: 'Masterwork Fishing Rod', rarity: 'RARE', tool_type: 'fishing', efficiency: 1.5, effects: ['attract_bigger_fish'] },
            { name: 'Gloves of the Herbalist', rarity: 'RARE', tool_type: 'herbalism', efficiency: 1.2, effects: ['identify_herbs_quickly', 'protection_from_thorns'] }
        ],
        utility: [
            { name: 'Tinderbox', rarity: 'COMMON', uses: 20 },
            { name: 'Rope (15m)', rarity: 'COMMON', strength: 150 },
            { name: 'Lockpicks (Simple)', rarity: 'COMMON', quality: 0.7, uses: 5 },
            { name: 'Shovel', rarity: 'COMMON', tool_type: 'digging' },
            { name: 'Spyglass (Basic)', rarity: 'UNCOMMON', magnification: 2 },
            { name: 'Thieves\' Tools (Fine)', rarity: 'UNCOMMON', quality: 1.0, uses: 10, effects: ['quieter_picking'] },
            { name: 'Grappling Hook', rarity: 'UNCOMMON', range: 10, strength: 200 },
            { name: 'Healer\'s Kit', rarity: 'UNCOMMON', uses: 5, effects: ['stabilize_critically_wounded'] },
            { name: 'Master Lockpicks', rarity: 'RARE', quality: 1.5, uses: 15, effects: ['bypass_simple_traps'] },
            { name: 'Universal Solvent (Single Use)', rarity: 'RARE', effects: ['dissolves_adhesives_or_weak_metals'] }
        ]
    },
    jewelry: {
        rings: [
            { name: 'Iron Ring', rarity: 'COMMON', effects: [] },
            { name: 'Silver Ring with Small Gem', rarity: 'COMMON', effects: ['minor_charisma_boost'] },
            { name: 'Ring of Protection +1', rarity: 'UNCOMMON', effects: ['armor_class_1'] },
            { name: 'Ring of Sustenance', rarity: 'UNCOMMON', effects: ['reduces_need_for_food_water'] },
            { name: 'Ring of Warmth', rarity: 'UNCOMMON', effects: ['cold_resistance_small'] },
            { name: 'Ring of Feather Falling', rarity: 'RARE', effects: ['feather_fall_passive'] },
            { name: 'Ring of Spell Storing (Minor)', rarity: 'RARE', effects: ['store_one_level_1_spell'] },
            { name: 'Ring of Regeneration (Faint)', rarity: 'RARE', effects: ['hpRegen_very_slow'] },
            { name: 'Band of the Archmagi', rarity: 'EPIC', effects: ['intelligence_2', 'spell_power_2'] },
            { name: 'Ring of Three Wishes (Cursed)', rarity: 'LEGENDARY', effects: ['grants_3_wishes_twisted', 'major_curse_after_last_wish'] }
        ],
        amulets: [
            { name: 'Wooden Holy Symbol', rarity: 'COMMON', effects: ['faith_focus_minor'] },
            { name: 'Amulet of Health (Lesser)', rarity: 'UNCOMMON', effects: ['max_hp_boost_small'] },
            { name: 'Necklace of Fire Resistance (Minor)', rarity: 'UNCOMMON', effects: ['fire_resistance_small'] },
            { name: 'Amulet of Natural Armor +1', rarity: 'RARE', effects: ['natural_armor_1'] },
            { name: 'Periapt of Proof Against Poison', rarity: 'RARE', effects: ['poison_immunity_weak_poisons'] },
            { name: 'Amulet of the Planes (Malfunctioning)', rarity: 'EPIC', effects: ['plane_shift_random_unreliable'] },
            { name: 'Necklace of Elemental Command (Air)', rarity: 'EPIC', effects: ['control_winds_moderate', 'fly_briefly'] },
            { name: 'Heart of Ahriman (Pendant)', rarity: 'LEGENDARY', effects: ['dark_power_boost', 'corruption_aura', 'summon_shadows_1'] }
        ]
    },
    crafting: { // Generic crafting materials
        ores: [
            { name: 'Copper Ore', rarity: 'COMMON', description: 'A common, reddish-brown ore.' },
            { name: 'Iron Ore', rarity: 'COMMON', description: 'A sturdy and reliable metal ore.' },
            { name: 'Silver Ore', rarity: 'UNCOMMON', description: 'A lustrous ore valued for its purity.' },
            { name: 'Gold Ore', rarity: 'UNCOMMON', description: 'A soft, valuable ore, prized for its beauty.' },
            { name: 'Mithril Ore', rarity: 'RARE', description: 'A lightweight and exceptionally strong ore.' },
            { name: 'Adamantine Ore', rarity: 'EPIC', description: 'One of the hardest known metal ores.' },
            { name: 'Orichalcum Ore', rarity: 'LEGENDARY', description: 'A mythical ore pulsating with magical energy.' },
            { name: 'Voidstone Ore', rarity: 'ARTIFACT', description: 'Ore infused with the emptiness of the void, strangely light.'}
        ],
        herbs: [
            { name: 'Common Clover', rarity: 'COMMON', description: 'A simple clover, sometimes lucky.' },
            { name: 'Kingsfoil Leaf', rarity: 'COMMON', description: 'A common herb with minor healing properties.' },
            { name: 'Nightshade Petals', rarity: 'UNCOMMON', description: 'Petals from a poisonous plant.' },
            { name: 'Dragonstongue Root', rarity: 'UNCOMMON', description: 'A fiery root used in potent potions.' },
            { name: 'Moonpetal Flower', rarity: 'RARE', description: 'A rare flower that blooms only under moonlight.' },
            { name: 'Sunfruit Seed', rarity: 'EPIC', description: 'Seeds from a fruit that captures sunlight.' },
            { name: 'Star Tear Blossom', rarity: 'LEGENDARY', description: 'A flower said to be a tear from a celestial being.' },
            { name: 'Blood Lotus Pollen', rarity: 'ARTIFACT', description: 'Pollen from a lotus fed on life essence.'}
        ],
        monster_parts: [
            { name: 'Goblin Ear', rarity: 'COMMON', description: 'A severed ear from a goblin.' },
            { name: 'Wolf Pelt', rarity: 'COMMON', description: 'The fur of a common wolf.' },
            { name: 'Spider Venom Gland', rarity: 'UNCOMMON', description: 'A gland containing potent spider venom.' },
            { name: 'Griffon Feather', rarity: 'UNCOMMON', description: 'A large feather from a griffon.' },
            { name: 'Minotaur Horn', rarity: 'RARE', description: 'A sturdy horn from a minotaur.' },
            { name: 'Dragon Scale (Young)', rarity: 'EPIC', description: 'A scale from a young dragon, still resilient.' },
            { name: 'Beholder Eyestalk', rarity: 'LEGENDARY', description: 'A severed eyestalk from a beholder, still twitching.' },
            { name: 'Heart of a Tarrasque (Fragment)', rarity: 'ARTIFACT', description: 'A pulsating fragment from an unkillable beast.'}
        ],
        essences: [
            { name: 'Faint Magical Essence', rarity: 'COMMON', description: 'A weak residue of magical energy.' },
            { name: 'Lingering Spirit Essence', rarity: 'COMMON', description: 'The faint echo of a departed spirit.'},
            { name: 'Elemental Water Droplet', rarity: 'UNCOMMON', description: 'Pure water essence from an elemental.'},
            { name: 'Frozen Core Shard', rarity: 'UNCOMMON', description: 'A shard from the heart of an ice elemental.'},
            { name: 'Shadow Essence Clot', rarity: 'RARE', description: 'A congealed piece of raw shadow energy.'},
            { name: 'Concentrated Life Dew', rarity: 'RARE', description: 'Pure life energy condensed into a dewdrop.'},
            { name: 'Infernal Brimstone', rarity: 'EPIC', description: 'Sulfurous stone from the depths of a hellscape.'},
            { name: 'Celestial Radiance Crystal', rarity: 'EPIC', description: 'A crystal imbued with light from the higher planes.'},
            { name: 'Timeless Sand Grain', rarity: 'LEGENDARY', description: 'A grain of sand unstuck from the flow of time.'},
            { name: 'Quintessence of Creation', rarity: 'ARTIFACT', description: 'The pure, raw stuff of the cosmos.'}
        ]
    },
    currency: { // Adding some basic currency items
        coins: [
            { name: 'Copper Piece', rarity: 'COMMON', value: 1, description: 'A single copper coin.' },
            { name: 'Silver Piece', rarity: 'COMMON', value: 10, description: 'A silver coin, worth 10 coppers.' },
            { name: 'Gold Piece', rarity: 'UNCOMMON', value: 100, description: 'A gold coin, worth 10 silvers.' },
            { name: 'Platinum Piece', rarity: 'RARE', value: 1000, description: 'A platinum coin, for large transactions.' },
            { name: 'Ancient Empire Coin', rarity: 'RARE', value: 250, description: 'A coin from a long-fallen empire, sought by collectors.'},
            { name: 'Dwarven Trade Bar (Iron)', rarity: 'COMMON', value: 50, description: 'An iron bar stamped with dwarven runes, used for trade.'},
            { name: 'Elven Moonstone Chip', rarity: 'UNCOMMON', value: 150, description: 'A polished chip of moonstone, used as currency by elves.'}
        ],
        gems: [ // Can also be crafting components
            { name: 'Flawed Amethyst', rarity: 'COMMON', value: 20, description: 'A small, imperfect amethyst.' },
            { name: 'Polished Garnet', rarity: 'UNCOMMON', value: 50, description: 'A shiny red garnet.' },
            { name: 'Flawless Ruby', rarity: 'RARE', value: 250, description: 'A perfect, deep red ruby.' },
            { name: 'Star Sapphire', rarity: 'EPIC', value: 1000, description: 'A sapphire showing a star-like phenomenon.' },
            { name: 'King\'s Diamond', rarity: 'LEGENDARY', value: 5000, description: 'A massive, perfectly cut diamond of legendary value.' },
            { name: 'Soul Gem (Empty)', rarity: 'RARE', value: 100, description: 'A crystal capable of holding a spiritual essence.'}
        ]
    },
    // Adding new top-level categories as example
    glyphs: { // Single-use enchantments or skill boosts
        weapon_enchants: [
            { name: 'Glyph of Minor Flame', rarity: 'COMMON', effect: 'enchant_weapon_fire_damage_tiny_duration', duration: 300 },
            { name: 'Glyph of Keen Edge', rarity: 'UNCOMMON', effect: 'enchant_weapon_crit_chance_small_duration', duration: 600 },
            { name: 'Glyph of Vampiric Touch', rarity: 'RARE', effect: 'enchant_weapon_lifesteal_small_duration', duration: 180 },
            { name: 'Glyph of Holy Retribution', rarity: 'EPIC', effect: 'enchant_weapon_radiant_damage_medium_duration_vs_evil', duration: 300}
        ],
        armor_enchants: [
            { name: 'Glyph of Iron Skin', rarity: 'COMMON', effect: 'enchant_armor_defense_tiny_duration', duration: 300 },
            { name: 'Glyph of Shadowmeld', rarity: 'UNCOMMON', effect: 'enchant_armor_stealth_small_duration', duration: 120 },
            { name: 'Glyph of Deflection', rarity: 'RARE', effect: 'enchant_armor_spell_resistance_small_duration', duration: 180 },
            { name: 'Glyph of Unyielding Fortitude', rarity: 'EPIC', effect: 'enchant_armor_damage_reduction_medium_duration', duration: 60 }
        ]
    },
    ingredients: { // More specific than generic crafting, could be for alchemy/cooking
        food: [
            { name: 'Wild Berries', rarity: 'COMMON', effects: ['hunger_sate_small'] },
            { name: 'Cave Mushroom (Edible)', rarity: 'COMMON', effects: ['hunger_sate_small', 'minor_night_vision_brief'] },
            { name: 'Spiced Wolf Meat', rarity: 'UNCOMMON', effects: ['hunger_sate_medium', 'stamina_regen_buff_short'] },
            { name: 'Sunfruit', rarity: 'RARE', effects: ['hunger_sate_medium', 'minor_heal', 'temporary_radiance_aura'] },
            { name: 'Dragon Chili Pepper', rarity: 'EPIC', effects: ['hunger_sate_large', 'fire_breath_one_shot', 'internal_burning_sensation']}
        ],
        reagents: [
            { name: 'Bat Wing', rarity: 'COMMON', alchemical_properties: ['darkness', 'flight_minor'] },
            { name: 'Grave Dust', rarity: 'COMMON', alchemical_properties: ['undeath', 'necrosis_minor'] },
            { name: 'Quicksilver Globule', rarity: 'UNCOMMON', alchemical_properties: ['transmutation', 'speed_minor'] },
            { name: 'Phoenix Ash', rarity: 'LEGENDARY', alchemical_properties: ['rebirth', 'fire_major', 'purification'] },
            { name: 'Troll Blood (Regenerative)', rarity: 'RARE', alchemical_properties: ['regeneration_strong', 'mutation_unstable']}
        ]
    },
    trinkets: { // Miscellaneous items, often with minor or quirky effects
        charms: [
            { name: 'Lucky Rabbit\'s Foot', rarity: 'COMMON', effects: ['luck_very_minor_passive'] },
            { name: 'Polished Worry Stone', rarity: 'COMMON', effects: ['stress_reduction_tiny_passive'] },
            { name: 'Four-Leaf Clover (Pressed)', rarity: 'UNCOMMON', effects: ['luck_small_once_per_day'] },
            { name: 'Memento of a Lost Love', rarity: 'UNCOMMON', effects: ['morale_boost_when_viewed', 'sadness_debuff_if_damaged'] },
            { name: 'Shark Tooth Necklace', rarity: 'RARE', effects: ['intimidation_bonus_vs_aquatic', 'swim_speed_tiny'] }
        ],
        oddities: [
            { name: 'Bent Spoon', rarity: 'COMMON', description: 'It\'s just a bent spoon. Or is it?' },
            { name: 'Pet Rock with Googly Eyes', rarity: 'COMMON', description: 'A steadfast companion.' },
            { name: 'Never-ending Gobstopper (Faintly Sweet)', rarity: 'UNCOMMON', description: 'It really does seem to last forever.' },
            { name: 'Bottled Faerie (Grumpy)', rarity: 'RARE', effects: ['provides_faint_light', 'occasional_insults'] },
            { name: 'Orb of Pondering (Slightly Cracked)', rarity: 'EPIC', description: 'Contemplating it may reveal... something?' }
        ]
    }
};

export const dynamicItemPrefixes = [
    'Ancient', 'Cursed', 'Blessed', 'Enchanted', 'Mystical', 'Sacred', 'Forbidden',
    'Lost', 'Forgotten', 'Divine', 'Infernal', 'Celestial', 'Abyssal', 'Ethereal',
    'Corrupted', 'Purified', 'Shimmering', 'Glowing', 'Whispering', 'Screaming',
    'Rusted', 'Polished', 'Ornate', 'Simple', 'Crude', 'Masterwork', 'Exceptional',
    'Dreadful', 'Hopeful', 'Shadow', 'Radiant', 'Frozen', 'Burning', 'Storm',
    'Viper', 'Bear', 'Eagle', 'Lion', 'Dragon', 'Spider', 'Wolf',
    'Glimmering', 'Jagged', 'Smooth', 'Heavy', 'Light', 'Balanced', 'Keen',
    'Barbed', 'Runed', 'Engraved', 'Jeweled', 'Obsidian', 'Adamant', 'Mithril',
    'Demonic', 'Angelic', 'Fey-Touched', 'Ghostly', 'Spectral', 'Vampiric', 'Dire',
    'Savage', 'Noble', 'Royal', 'Pauper\'s', 'Knightly', 'Wizard\'s', 'Thief\'s',
    'Warrior\'s', 'Priest\'s', 'Assassin\'s', 'Sage\'s', 'King\'s', 'Queen\'s',
    'Emperor\'s', 'Tyrant\'s', 'Hero\'s', 'Villain\'s', 'Doom\'s', 'Fate\'s',
    'Star-Forged', 'Moon-Kissed', 'Sun-Blessed', 'Void-Touched', 'Hell-Forged', 'Sky-Piercing'
];

export const dynamicItemSuffixes = [
    'of Power', 'of Wisdom', 'of Strength', 'of Agility', 'of Protection',
    'of the Ancients', 'of the Void', 'of Light', 'of Darkness', 'of Fire',
    'of Ice', 'of Lightning', 'of Earth', 'of Wind', 'of Spirit',
    'of the Dragon', 'of the Phoenix', 'of the Demon', 'of the Angel', 'of the Grave',
    'of Slaughter', 'of Healing', 'of Fortitude', 'of Swiftness', 'of Shadows',
    'of Radiance', 'of a Thousand Screams', 'of Eternal Sleep', 'of Endless Night', 'of Dawning Hope',
    'of Binding', 'of Freedom', 'of Truth', 'of Lies', 'of Illusions',
    'of Kings', 'of Queens', 'of the Emperor', 'of the Tyrant', 'of the Hero',
    'of the Fallen', 'of the Unseen', 'of the Depths', 'of the Stars', 'of the Moon',
    'of the Sun', 'of the Forest', 'of the Mountain', 'of the River', 'of the Desert',
    'of Doom', 'of Fate', 'of Destiny', 'of Ruin', 'of Salvation',
    'the Undying', 'the Swift', 'the Strong', 'the Wise', 'the Protector',
    'the Conqueror', 'the Seeker', 'the Wanderer', 'the Guardian', 'the Betrayer',
    'the Redeemer', 'the Defiler', 'the Pure', 'the Corrupt', 'the Ancient One',
    'the Eternal', 'the Fleeting', 'the Unbreakable', 'the Fragile', 'the Forgotten King',
    'from Beyond', 'of the Covenant', 'of the Pact', 'of the Prophecy', 'of Lost Ages'
];

export class ItemGenerator {

    static languageTemplates = {
        elven: {
            name: "Elvish (Sindarin Influence)",
            phoneticPattern: ["th", "el", "ar", "an", "sil", "mel", "gal", "tar", "wen", "dal", "ith", "lor", "nim", "gil", "dor", "fin", "las", "aeg", "er"],
            suffixes: ["wen", "iel", "ath", "oth", "eth", "rim", "los", "las", "dir", "ion", "uil"],
            prefixes: ["sil", "gal", "mel", "el", "ar", "th", "fin", "aeg"],
            grammar: "VSO", // Verb-Subject-Object
            script: "flowing Tengwar-like",
            sample: "Silivren galadh wen melethril, ithil naur an edhel." // Silver tree fair lover, moon fire for elf.
        },
        succubus: {
            name: "Infernal Succubus (Siren Song)",
            phoneticPattern: ["zar", "bel", "ash", "mor", "nex", "vex", "drak", "keth", "vor", "rath", "xen", "mal", "kor", "tash", "lil", "syr", "qil"],
            suffixes: ["ath", "oth", "ex", "ash", "ek", "ak", "or", "ur", "is", "ia", "yx"],
            prefixes: ["zar", "bel", "mor", "drak", "vex", "mal", "lil", "syr"],
            grammar: "SOV", // Subject-Object-Verb
            script: "angular, seductive curves",
            sample: "Zar'thek beloth nexari, morath lil'qil vexen." // Your soul desire calls, my sweet temptation awaits.
        },
        draconic: {
            name: "Ancient Draconic (Primeval Roar)",
            phoneticPattern: ["bahar", "krex", "thar", "vorth", "yol", "fus", "ro", "dah", "shul", "grah", "mul", "qah", "wuld", "zii", "kriin", "dov"],
            suffixes: ["ul", "ah", "ex", "oth", "ar", "or", "iin", "aal", "fahdon"],
            prefixes: ["yol", "fus", "thar", "vorth", "krex", "dov", "zii"],
            grammar: "Free (Emphasis on Power Words)",
            script: "runic, claw-like strokes",
            sample: "Yol toor shul! Fus ro dah krexul voth ahkrin." // Fire inferno sun! Force balance is tyranny with courage.
        },
        demonic: {
            name: "Lower Demonic (Abyssal Chant)",
            phoneticPattern: ["gorth", "mek", "zul", "thak", "bor", "nath", "krul", "vash", "lok", "grim", "sek", "urth", "xul", "glab", "gor"],
            suffixes: ["ek", "ak", "ul", "oth", "ur", "ok", "uul", "goth", "ez"],
            prefixes: ["gorth", "mek", "zul", "krul", "nath", "xul", "gor"],
            grammar: "SOV (Harsh Imperatives)",
            script: "jagged, blood-like script",
            sample: "Gorthek zulnath thakul, bor'mekul xul'vash lokgrim." // Your torment soul demands, my pact in shadow binds.
        },
        celestial: {
            name: "High Celestial (Angelic Chorus)",
            phoneticPattern: ["lum", "cel", "aur", "ser", "lyr", "thal", "mir", "nev", "sil", "bel", "aeth", "vel", "sol", "cor", "adon"],
            suffixes: ["iel", "ael", "oth", "eth", "ir", "al", "ia", "us", "onai"],
            prefixes: ["lum", "cel", "aur", "ser", "thal", "sol", "adon"],
            grammar: "VSO (Poetic and Reverent)",
            script: "luminous, graceful glyphs",
            sample: "Lumiel aethyr celoth, seraphim thalmir adonai." // Light divine shines, angels grace lord.
        },
        orcish: {
            name: "Tribal Orcish (War Cry)",
            phoneticPattern: ["grok", "uruk", "shar", "dug", "goth", "morg", "bash", "krump", "wagh", "zog", "nob", "snaga", "thrak", "zug"],
            suffixes: ["uk", "agh", "og", "ub", "ok", "ka", "zug", "durb"],
            prefixes: ["grok", "uruk", "morg", "bash", "thrak", "zug"],
            grammar: "SVO (Simple, Direct)",
            script: "crude, blocky symbols",
            sample: "Grokuk bashagh morgoth, uruk wagh zogub thrakka!" // Me smash enemy, orc charge now kill!
        },
        dwarven: {
            name: "Dwarven (Khuzdul Runes)",
            phoneticPattern: ["khaz", "bar", "uk", "gon", "dûr", "nar", "zig", "il", "bal", "grum", "thul", "borin"],
            suffixes: ["in", "ûl", "âl", "uk", "ûn", "azul"],
            prefixes: ["khazad", "baruk", "narag", "grund"],
            grammar: "SOV (Emphasis on Nouns)",
            script: "angular runes (Cirth-like)",
            sample: "Khazâd ai-mênu! Baruk Khazâd! Khazâd aimênu!" // The Dwarves are upon you! Axes of the Dwarves! Dwarves are upon you!
        },
        gnomish: {
            name: "Gnomish (Tinkerer's Jabber)",
            phoneticPattern: ["fizz", "whizz", "bang", "clink", "zorp", "wimble", "spro", "cket", "giz", "mo"],
            suffixes: ["wick", "bolt", "gear", "sprocket", "er", "ly"],
            prefixes: ["giz", "spro", "whatcha", "thinga"],
            grammar: "SVO (Often exclamatory and technical)",
            script: "small, precise, with diagrams",
            sample: "Fizzbang sprocket clink whizzer, gizmo watchamacallit bolt!" // Explosive device component clicks rapidly, invention whatsit screw!
        },
        sylvan: {
            name: "Sylvan (Feywild Whisper)",
            phoneticPattern: ["fae", "lor", "nym", "bri", "ar", "wyn", "shae", "thistle", "dew", "moss"],
            suffixes: ["wyn", "leaf", "bloom", "song", "dance"],
            prefixes: ["fae", "bri", "shae", "lor"],
            grammar: "VOS (Poetic, elusive)",
            script: "vine-like, flowing",
            sample: "Lor'fae nym'briar wyn'shae, thistlebloom mossdance dew." // Whisper fey nymphwood fair shadow, thistle flower moss play dew.
        },
        abyssal_deep_speech: {
            name: "Deep Speech (Abyssal Echoes)",
            phoneticPattern: ["xtha", "gg", "uul", "oorn", "rlyeh", "fhtagn", "cth", "yl", "shogg", "iia"],
            suffixes: ["oth", "uun", "ekh", "ggn"],
            prefixes: ["xtha", "rlyeh", "shogg"],
            grammar: "Non-linear (Thought-based)",
            script: "non-Euclidean, maddening sigils",
            sample: "Xthagn uul'fhtagn rlyeh. Iia shoggoth yl'cthul." // (Untranslatable horror and cosmic dread)
        },
        primordial_elemental: {
            name: "Primordial (Elemental Roar - Ignan)",
            phoneticPattern: ["ign", "pyr", "flam", "ash", "sol", "calor", "kres", "torr", "phlog"],
            suffixes: ["us", "ar", "ex", "ion", "ent"],
            prefixes: ["ignis", "pyro", "calor"],
            grammar: "SVO (Declarative, forceful)",
            script: "fiery, shifting runes",
            sample: "Ignis pyr'flamus! Calor kresent phlogiston!" // Fire burning flame! Heat growing fire-stuff!
        },
        construct_binary: {
            name: "Construct Binary (Modron Logic)",
            phoneticPattern: ["01", "10", "00", "11", "clk", "seq", "mod", "calc", "exe"],
            suffixes: ["_ack", "_seq", "_end", "_err"],
            prefixes: ["init_", "proc_", "calc_"],
            grammar: "Instructional (Procedural)",
            script: "perfectly formed 0s and 1s",
            sample: "init_seq 01101001. proc_calc_mod 1100. exe_clk_10." // Initialize sequence X. Process calculation Y. Execute clock Z.
        },
        serpent_tongue: {
            name: "Serpent Tongue (Yuan-ti Hiss)",
            phoneticPattern: ["sss", "hth", "vess", "naga", "skal", "zolt", "mefa", "yiss", "tah"],
            suffixes: ["iss", "eth", "azz", "ska"],
            prefixes: ["hiss", "seth", "naga"],
            grammar: "SVO (Sibilant, hypnotic)",
            script: "sinuous, scale-like patterns",
            sample: "Hisss setha naga'skal, yiss tah mefa'azz." // Great serpent scale-lord, I speak poison-death.
        },
        goblinoid_pidgin: {
            name: "Goblinoid Pidgin (Rough Speak)",
            phoneticPattern: ["sniv", "grot", "klang", "bork", "gaz", "urt", "nik", "stik", "grab"],
            suffixes: ["it", "dat", "fing", "erz"],
            prefixes: ["bigga", "more", "no"],
            grammar: "Simplified SVO (Often broken)",
            script: "scrawled, messy",
            sample: "Bigga stik grab dat! No touch, me fing!" // Big stick take that! Don't touch, my thing!
        },
        avian_sky_song: {
            name: "Avian Sky-Song (Aarakocra Chirps)",
            phoneticPattern: ["chir", "kree", "pip", "trill", "aark", "skraw", "flutter", "wind"],
            suffixes: ["ee-ee", "rawk", "song", "wing"],
            prefixes: ["sky", "cloud", "high"],
            grammar: "Melodic Phrases (Contextual)",
            script: "light, feathery strokes",
            sample: "Kree-aark trill! Sky-pip flutter-wingsong high!" // Warning call trill! High bird flies singing in the wind!
        },
        insectoid_chitter: {
            name: "Insectoid Chitter (Thri-Kreen Clicks)",
            phoneticPattern: ["klik", "chit", "thrr", "xix", "krill", "tzk", "ptek"],
            suffixes: ["'klik", "'tzk", "'xix"],
            prefixes: ["thrr-", "krill-"],
            grammar: "Short Bursts (Action-Oriented)",
            script: "mandible-like scratches, geometric",
            sample: "Thrr-klik ptek! Krill-xix tzk'tzk." // Hunt-click attack! Swarm-enemy click-click (danger).
        },
        fungal_spore_murmur: {
            name: "Fungal Spore-Murmur (Myconid Meld)",
            phoneticPattern: ["myco", "spore", "rhiz", "oid", "mush", "bloom", "cap", "hyphae"],
            suffixes: ["-meld", "-song", "-root", "-cluster"],
            prefixes: ["spore-", "myco-", "deep-"],
            grammar: "Collective Nouns (Shared Consciousness)",
            script: "mycelial network patterns",
            sample: "Myco-spore rhiz-bloom. Deep-cap hyphae-meld-song." // We spores root-flower. Dark-cap network-share-feeling.
        },
        voidspeak: {
            name: "Voidspeak (Whispers from Beyond)",
            phoneticPattern: ["ool", "ghuun", "nyar", "lath", "otek", "zael", "thoth", "kth", "uun"],
            suffixes: ["-oth", "-ep", "-uun", "-tek"],
            prefixes: ["Nyar-", "Kth-", "Zael-"],
            grammar: "SOV (Reality-warping statements)",
            script: "shifting, impossible geometry",
            sample: "Nyar-lathotek ghuun kth-zaeloth uun-thoth." // The Outer Dark knows your fear, the coming doom whispers its name.
        }
    };

    static generateItem(context = {}) {
        const {
            category = this.getRandomCategory(),
            rarity = this.getRandomRarityKey(), // Changed to get key for itemRarity
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
        // Filter out categories that might not be suitable for random generation without more context
        const spawnableCategories = categories.filter(cat =>
            cat !== itemCategories.CURRENCY &&
            cat !== itemCategories.QUEST // Quest items are usually specific
        );
        return spawnableCategories[Math.floor(Math.random() * spawnableCategories.length)];
    }

    static getRandomRarityKey() { // Renamed for clarity
        const rarities = Object.keys(itemRarity);
        // Adjusted weights for new Mythic rarity
        const weights = { COMMON: 50, UNCOMMON: 25, RARE: 15, EPIC: 6, LEGENDARY: 3, ARTIFACT: 0.9, MYTHIC: 0.1 };
        const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
        const random = Math.random() * totalWeight;
        let cumulative = 0;

        for (const rarityKey of rarities) {
            cumulative += weights[rarityKey] || 0;
            if (random <= cumulative) {
                return rarityKey;
            }
        }
        return 'COMMON'; // Fallback
    }

    static getBaseItem(category, rarity) { // Rarity is now a key string
        let itemsOfType;
        switch (category) {
            case itemCategories.WEAPON:
                return this.generateWeapon(rarity);
            case itemCategories.ARMOR:
                return this.generateArmor(rarity);
            case itemCategories.MAGICAL: // This can include potions, wands etc.
                return this.generateMagicalItem(rarity); // Broader magical item generation
            case itemCategories.SCROLL:
                itemsOfType = itemTemplates.magical.scrolls;
                return this.selectFromTemplates(itemsOfType, rarity, category) || this.generateCustomScroll(rarity);
            case itemCategories.BOOK:
                 // Books can be from questItems or language books
                if (Math.random() < 0.3) { // 30% chance for a language book
                    const languages = Object.keys(this.languageTemplates);
                    const langType = languages[Math.floor(Math.random() * languages.length)];
                    return this.generateLanguageBook(rarity, langType);
                }
                itemsOfType = itemTemplates.questItems.books; // Assuming 'questItems.books' holds general books too
                return this.selectFromTemplates(itemsOfType, rarity, category) || this.generateCustomBook(rarity);
            case itemCategories.CONSUMABLE: // Potions are here
                itemsOfType = itemTemplates.magical.potions;
                return this.selectFromTemplates(itemsOfType, rarity, category) || this.generateCustomConsumable(rarity);
            case itemCategories.TOOL:
                return this.generateTool(rarity);
            case itemCategories.JEWELRY:
                return this.generateJewelry(rarity);
            case itemCategories.CRAFTING:
                return this.generateCraftingMaterial(rarity);
            case itemCategories.GLYPH:
                return this.generateGlyph(rarity);
            case itemCategories.INGREDIENT:
                return this.generateIngredient(rarity);
            case itemCategories.TRINKET:
                return this.generateTrinket(rarity);
            case itemCategories.ARTIFACT: // Specific artifact generation might be more complex
                 itemsOfType = itemTemplates.questItems.artifacts;
                 return this.selectFromTemplates(itemsOfType, rarity, category) || this.generateCustomArtifact(rarity);

            default:
                return this.generateGenericItem(category, rarity);
        }
    }

    static selectFromTemplates(templateArray, rarity, itemType) {
        if (!templateArray) return null;
        const rarityItems = templateArray.filter(i => i.rarity === rarity);
        if (rarityItems.length > 0) {
            return { ...rarityItems[Math.floor(Math.random() * rarityItems.length)], type: itemType };
        }
        // If no items of specific rarity, try one step lower if not common
        if (rarity !== 'COMMON') {
            const rarities = Object.keys(itemRarity);
            const currentRarityIndex = rarities.indexOf(rarity);
            if (currentRarityIndex > 0) {
                const lowerRarity = rarities[currentRarityIndex -1];
                const lowerRarityItems = templateArray.filter(i => i.rarity === lowerRarity);
                 if (lowerRarityItems.length > 0) {
                    return { ...lowerRarityItems[Math.floor(Math.random() * lowerRarityItems.length)], type: itemType };
                }
            }
        }
        // Fallback: pick any item from the category if specific rarity fails
        if (templateArray.length > 0) {
           return { ...templateArray[Math.floor(Math.random() * templateArray.length)], type: itemType, rarity: rarity }; // Force rarity
        }
        return null;
    }


    static generateWeapon(rarity) {
        const weaponCategories = Object.keys(itemTemplates.weapons);
        const weaponType = weaponCategories[Math.floor(Math.random() * weaponCategories.length)];
        const weapons = itemTemplates.weapons[weaponType];
        const selected = this.selectFromTemplates(weapons, rarity, itemCategories.WEAPON);
        return selected || this.generateCustomWeapon(rarity, weaponType);
    }

    static generateCustomWeapon(rarity, weaponType = 'swords') { // weaponType can be 'swords', 'axes' etc.
        const damages = {
            'COMMON': ['1d4', '1d6'], 'UNCOMMON': ['1d6+1', '1d8'], 'RARE': ['1d8+1', '1d10'],
            'EPIC': ['1d10+2', '1d12', '2d6'], 'LEGENDARY': ['2d8+2', '2d10'], 'ARTIFACT': ['2d12+3', '3d8'], 'MYTHIC': ['3d10+5', '4d8']
        };
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];
        const damage = damages[rarity] ? damages[rarity][Math.floor(Math.random() * damages[rarity].length)] : '1d6';
        const weaponBaseName = weaponType.slice(0, -1); // sword from swords

        return {
            name: `${prefix} ${weaponBaseName.charAt(0).toUpperCase() + weaponBaseName.slice(1)} ${suffix}`,
            type: itemCategories.WEAPON,
            subType: weaponType,
            rarity: rarity,
            damage: damage,
            effects: this.generateEffects(rarity, itemCategories.WEAPON)
        };
    }

    static generateArmor(rarity) {
        const armorCategories = Object.keys(itemTemplates.armor);
        const armorType = armorCategories[Math.floor(Math.random() * armorCategories.length)]; // e.g. 'helmets'
        const armors = itemTemplates.armor[armorType];
        const selected = this.selectFromTemplates(armors, rarity, itemCategories.ARMOR);
        return selected || this.generateCustomArmor(rarity, armorType);
    }

    static generateCustomArmor(rarity, armorType = 'chestplates') {
        const armorValues = { // Base AC
            'COMMON': [1,3], 'UNCOMMON': [2,4], 'RARE': [3,6],
            'EPIC': [5,8], 'LEGENDARY': [7,10], 'ARTIFACT': [9,12], 'MYTHIC': [11,15]
        };
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];
        const baseArmor = armorValues[rarity] ? (armorValues[rarity][0] + Math.floor(Math.random() * (armorValues[rarity][1] - armorValues[rarity][0] + 1))) : 1;
        const armorBaseName = armorType.slice(0, -1); // helmet from helmets

        return {
            name: `${prefix} ${armorBaseName.charAt(0).toUpperCase() + armorBaseName.slice(1)} ${suffix}`,
            type: itemCategories.ARMOR,
            subType: armorType,
            rarity: rarity,
            armor: baseArmor,
            effects: this.generateEffects(rarity, itemCategories.ARMOR)
        };
    }

    static generateMagicalItem(rarity) { // Broad category for wands, orbs, talismans
        const magicalTypes = ['wands', 'orbs', 'talismans']; // from itemTemplates.magical
        const typeKey = magicalTypes[Math.floor(Math.random() * magicalTypes.length)];
        const items = itemTemplates.magical[typeKey];
        const selected = this.selectFromTemplates(items, rarity, itemCategories.MAGICAL);

        if (selected) return { ...selected, subType: typeKey };
        return this.generateCustomMagicalDevice(rarity, typeKey);
    }

    static generateCustomMagicalDevice(rarity, deviceType = 'orbs') {
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];
        const deviceBaseName = deviceType.slice(0,-1);

        return {
            name: `${prefix} ${deviceBaseName.charAt(0).toUpperCase() + deviceBaseName.slice(1)} ${suffix}`,
            type: itemCategories.MAGICAL,
            subType: deviceType,
            rarity: rarity,
            effects: this.generateMagicalEffects(rarity), // Specific magical effects
            description: `A mystical ${deviceBaseName} radiating ${prefix.toLowerCase()} energy.`
        };
    }

    static generateCustomScroll(rarity) { // Fallback if no template matches
        const spellNameParts = ['Arcane Bolt', 'Mystic Shield', 'Shadow Veil', 'Healing Light', 'Elemental Fury', 'Summon Creature', 'Telekinetic Push', 'Chrono Stutter'];
        const spellName = spellNameParts[Math.floor(Math.random() * spellNameParts.length)];
        return {
            name: `Scroll of ${dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)].replace('of ', '')} (${spellName})`,
            type: itemCategories.SCROLL,
            rarity: rarity,
            singleUse: true,
            effects: this.generateScrollEffects(rarity), // Effects when read/cast
            spell: { type: 'utility', effect: `${spellName.toLowerCase().replace(/ /g, '_')}`, description: `Casts ${spellName}.`},
            description: `A hastily scribbled scroll detailing the incantation for ${spellName}.`
        };
    }

    static generateCustomBook(rarity) { // Fallback
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const subject = ['Forgotten Lore', 'Planar Theory', 'Battle Tactics', 'Ancient Runes', 'Forbidden Rituals'];
        const bookSubject = subject[Math.floor(Math.random() * subject.length)];
        return {
            name: `${prefix} Tome of ${bookSubject}`,
            type: itemCategories.BOOK,
            rarity: rarity,
            effects: this.generateBookEffects(rarity),
            description: `A leather-bound book containing ${prefix.toLowerCase()} knowledge about ${bookSubject.toLowerCase()}.`
        };
    }

    static generateCustomConsumable(rarity) { // Fallback for potions/elixirs
        const potionTypes = ['Healing', 'Mana', 'Strength', 'Agility', 'Invisibility', 'Resistance', 'Fortitude'];
        const potionType = potionTypes[Math.floor(Math.random() * potionTypes.length)];
        const baseEffect = {
            'Healing': { type: 'heal', amount: (itemRarity[rarity]?.multiplier || 1) * 20 },
            'Mana': { type: 'mana', amount: (itemRarity[rarity]?.multiplier || 1) * 15 },
            'Strength': { type: 'buff', stat: 'strength', amount: Math.ceil((itemRarity[rarity]?.multiplier || 1) / 2), duration: 180},
            // Add more base effects
        }[potionType] || { type: 'buff', stat: 'luck', amount: 1, duration: 60 };

        return {
            name: `${potionType} Elixir ${dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)]}`,
            type: itemCategories.CONSUMABLE,
            rarity: rarity,
            singleUse: true,
            effect: baseEffect, // Simpler effect for custom
            effects: this.generateConsumableEffects(rarity), // Can add status effect strings
            description: `A bubbling concoction with a ${potionType.toLowerCase()} aroma.`
        };
    }

    static generateTool(rarity) {
        const toolCategories = Object.keys(itemTemplates.tools);
        const toolType = toolCategories[Math.floor(Math.random() * toolCategories.length)];
        const tools = itemTemplates.tools[toolType];
        const selected = this.selectFromTemplates(tools, rarity, itemCategories.TOOL);
        return selected || this.generateCustomTool(rarity, toolType);
    }

    static generateCustomTool(rarity, toolType = 'gathering') {
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const toolName = toolType === 'gathering' ? 'Harvester' : 'Kit';
        return {
            name: `${prefix} ${toolName} ${dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)]}`,
            type: itemCategories.TOOL,
            subType: toolType,
            rarity: rarity,
            efficiency: 1 + (itemRarity[rarity]?.multiplier || 1) * 0.1,
            effects: this.generateEffects(rarity, itemCategories.TOOL),
            description: `A ${rarity.toLowerCase()} ${toolName.toLowerCase()} for various tasks.`
        };
    }

    static generateJewelry(rarity) {
        const jewelryCategories = Object.keys(itemTemplates.jewelry);
        const jewelryType = jewelryCategories[Math.floor(Math.random() * jewelryCategories.length)];
        const jewelries = itemTemplates.jewelry[jewelryType];
        const selected = this.selectFromTemplates(jewelries, rarity, itemCategories.JEWELRY);
        return selected || this.generateCustomJewelry(rarity, jewelryType);
    }

    static generateCustomJewelry(rarity, jewelryType = 'rings') {
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const jewelryBaseName = jewelryType.slice(0,-1); // ring from rings
        return {
            name: `${prefix} ${jewelryBaseName.charAt(0).toUpperCase() + jewelryBaseName.slice(1)} ${dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)]}`,
            type: itemCategories.JEWELRY,
            subType: jewelryType,
            rarity: rarity,
            effects: this.generateMagicalEffects(rarity), // Jewelry often has magical effects
            description: `An ornate piece of ${jewelryBaseName.toLowerCase()} that feels ${prefix.toLowerCase()} to the touch.`
        };
    }
    static generateCraftingMaterial(rarity) {
        const materialCategories = Object.keys(itemTemplates.crafting);
        const materialType = materialCategories[Math.floor(Math.random() * materialCategories.length)];
        const materials = itemTemplates.crafting[materialType];
        const selected = this.selectFromTemplates(materials, rarity, itemCategories.CRAFTING);
        // For custom, we'll just make a generic one
        if (selected) return { ...selected, subType: materialType };

        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const matBaseName = ['Shard', 'Dust', 'Fragment', 'Chunk', 'Essence', 'Core'][Math.floor(Math.random()*6)];
        return {
            name: `${prefix} ${matBaseName} of ${dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)].replace('of ', '')}`,
            type: itemCategories.CRAFTING,
            subType: materialType, // e.g. 'ores', 'herbs'
            rarity: rarity,
            description: `A ${rarity.toLowerCase()} crafting material with potential.`
        };
    }
    static generateGlyph(rarity) {
        const glyphCategories = Object.keys(itemTemplates.glyphs);
        const glyphType = glyphCategories[Math.floor(Math.random() * glyphCategories.length)];
        const glyphs = itemTemplates.glyphs[glyphType];
        const selected = this.selectFromTemplates(glyphs, rarity, itemCategories.GLYPH);
        if (selected) return { ...selected, subType: glyphType };

        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
         const effectNames = ['Empowerment', 'Warding', 'Velocity', 'Precision', 'Might'];
        const effectName = effectNames[Math.floor(Math.random() * effectNames.length)];
        return {
            name: `Glyph of ${prefix} ${effectName}`,
            type: itemCategories.GLYPH,
            subType: glyphType,
            rarity: rarity,
            singleUse: true,
            effect: `enchant_generic_${effectName.toLowerCase()}_${rarity.toLowerCase()}`,
            duration: (itemRarity[rarity]?.multiplier || 1) * 120,
            description: `A single-use glyph that hums with ${prefix.toLowerCase()} energy.`
        };
    }

    static generateIngredient(rarity) {
        const ingredientCategories = Object.keys(itemTemplates.ingredients);
        const ingredientType = ingredientCategories[Math.floor(Math.random() * ingredientCategories.length)];
        const ingredients = itemTemplates.ingredients[ingredientType];
        const selected = this.selectFromTemplates(ingredients, rarity, itemCategories.INGREDIENT);
         if (selected) return { ...selected, subType: ingredientType };

        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const baseName = ingredientType === 'food' ? ['Berry', 'Root', 'Meatloaf', 'Fillet'][Math.floor(Math.random()*4)]
                                                : ['Petal', 'Dust', 'Oil', 'Extract'][Math.floor(Math.random()*4)];
        return {
            name: `${prefix} ${baseName}`,
            type: itemCategories.INGREDIENT,
            subType: ingredientType,
            rarity: rarity,
            effects: ingredientType === 'food' ? ['hunger_sate_moderate'] : [],
            alchemical_properties: ingredientType === 'reagents' ? [prefix.toLowerCase(), baseName.toLowerCase()] : [],
            description: `A ${rarity.toLowerCase()} ingredient, ${prefix.toLowerCase()} and smelling of ${baseName.toLowerCase()}.`
        };
    }

    static generateTrinket(rarity) {
        const trinketCategories = Object.keys(itemTemplates.trinkets);
        const trinketType = trinketCategories[Math.floor(Math.random() * trinketCategories.length)];
        const trinkets = itemTemplates.trinkets[trinketType];
        const selected = this.selectFromTemplates(trinkets, rarity, itemCategories.TRINKET);
        if (selected) return { ...selected, subType: trinketType };

        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const baseName = trinketType === 'charms' ? ['Charm', 'Figurine', 'Medallion'][Math.floor(Math.random()*3)]
                                                : ['Oddity', 'Relic', 'Curio'][Math.floor(Math.random()*3)];
        return {
            name: `${prefix} ${baseName} ${dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)]}`,
            type: itemCategories.TRINKET,
            subType: trinketType,
            rarity: rarity,
            effects: this.generateEffects(rarity, itemCategories.TRINKET),
            description: `A curious ${baseName.toLowerCase()} that feels ${prefix.toLowerCase()}. Its purpose is enigmatic.`
        };
    }

    static generateCustomArtifact(rarity) { // Artifacts should usually be unique, this is a fallback
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];
        const artifactNames = ['Orb', 'Crown', 'Scepter', 'Tome', 'Blade', 'Heart', 'Eye', 'Shard'];
        const baseName = artifactNames[Math.floor(Math.random() * artifactNames.length)];

        return {
            name: `${prefix} ${baseName} ${suffix}`,
            type: itemCategories.ARTIFACT,
            rarity: rarity, // Should be ARTIFACT or MYTHIC
            effects: this.generateEffects(rarity, itemCategories.ARTIFACT, 3 + Math.floor(Math.random()*3)), // More effects for artifacts
            description: `A legendary artifact of immense power, the ${baseName} ${suffix} is said to hold ${prefix.toLowerCase()} energies.`
        };
    }


    static generateGenericItem(category, rarity) {
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];

        return {
            name: `${prefix} ${category} ${suffix}`,
            type: category,
            rarity: rarity,
            effects: this.generateEffects(rarity, category),
            description: `A generic ${category} of ${rarity.toLowerCase()} quality.`
        };
    }

    static generateEffects(rarity, itemCategory, forcedCount = null) {
        const effectCountMap = {
            'COMMON': [0,1], 'UNCOMMON': [1,1], 'RARE': [1,2], 'EPIC': [2,3],
            'LEGENDARY': [3,4], 'ARTIFACT': [4,5], 'MYTHIC': [5,6]
        };

        let minEffects = effectCountMap[rarity] ? effectCountMap[rarity][0] : 0;
        let maxEffects = effectCountMap[rarity] ? effectCountMap[rarity][1] : 1;

        if (itemCategory === itemCategories.ARTIFACT || itemCategory === itemCategories.TRINKET) { // Artifacts & Trinkets can have more
            minEffects +=1; maxEffects +=1;
        }
        if (itemCategory === itemCategories.CONSUMABLE || itemCategory === itemCategories.GLYPH){ // Consumables/Glyphs usually have specific primary effect + maybe one status
             maxEffects = Math.min(maxEffects, 1); // Limit to 1 random status effect on top of its main function
        }


        const count = forcedCount !== null ? forcedCount : (minEffects + Math.floor(Math.random() * (maxEffects - minEffects + 1)));
        const effects = [];
        // More diverse pool of potential effects (not all are in statusEffects, some are passive flags)
        const availableEffects = [
            ...Object.keys(statusEffects),
            'fire_damage_aura', 'chill_touch', 'armor_piercing_1', 'bleeding_1', 'stealth_strike',
            'divine_smite', 'undead_bane', 'demon_bane', 'spell_focus_1', 'mana_regen_tiny', 'empower_elemental_1',
            'nature_attunement', 'spell_penetration_1', 'fear_aura_1', 'cleave_1', 'execution_strike',
            'backstab_bonus_1', 'increased_range', 'rapid_fire_1', 'stunning_blow_1', 'sunder_armor_1',
            'returning_1', 'impale', 'block_chance_boost', 'spell_deflection_small', 'vitality_1',
            'luck_minor', 'charisma_boost', 'cold_resistance_small', 'poison_immunity_weak',
            'hunger_sate_small', 'identify_plants_1', 'crafting_insight_basic', 'unlocks_old_chest',
            'light_aura_faint', 'ward_against_undead_small', 'minor_luck_or_curse_unpredictable'
            // Add more specific passive or active ability flags here
        ];

        if (count === 0) return [];

        // Try to pick effects relevant to the item category
        let categorySpecificEffects = [];
        if (itemCategory === itemCategories.WEAPON) {
            categorySpecificEffects = ['critical_chance_small', 'damage_boost_tiny', 'attack_speed_tiny', 'life_steal_very_small', 'elemental_damage_bonus_random'];
        } else if (itemCategory === itemCategories.ARMOR) {
            categorySpecificEffects = ['damage_reduction_tiny', 'max_hp_boost_tiny', 'elemental_resistance_random_tiny', 'status_resistance_random_tiny'];
        } else if (itemCategory === itemCategories.JEWELRY) {
            categorySpecificEffects = ['all_stats_tiny', 'mana_regen_very_small', 'skill_boost_random_tiny', 'luck_passive_small'];
        }

        const effectPool = [...new Set([...availableEffects, ...categorySpecificEffects])];


        for (let i = 0; i < count; i++) {
            const effect = effectPool[Math.floor(Math.random() * effectPool.length)];
            if (!effects.includes(effect)) {
                effects.push(effect);
            } else {
                // try one more time for a unique effect if pool is large enough
                if (effectPool.length > effects.length) i--;
            }
        }
        return effects;
    }

    // Specific effect generators for item types
    static generateMagicalEffects(rarity) {
        const baseEffects = ['enchanted', 'blessed', 'ethereal', 'spell_power_boost', 'mana_boost', 'arcane_aura', 'warding_glyph', 'elemental_attunement'];
        return this.selectRandomEffects(baseEffects, rarity, 1, 3);
    }

    static generateScrollEffects(rarity) { // Effects granted by reading the scroll (buffs, etc)
        const baseEffects = ['spell_power_temporary', 'mana_boost_temporary', 'enchanted_briefly', 'true_sight_briefly', 'focused_briefly'];
        return this.selectRandomEffects(baseEffects, rarity, 1, 1); // Scrolls usually have one main spell, these are side-effects of casting
    }

    static generateBookEffects(rarity) { // Passive effects from studying the book
        const baseEffects = ['knowledge_boost', 'wisdom_increase', 'lore_mastery_minor', 'skill_point_random', 'language_understanding_random'];
        return this.selectRandomEffects(baseEffects, rarity, 1, 2);
    }

    static generateConsumableEffects(rarity) { // Status effects applied by the consumable
        const baseEffects = ['blessed_briefly', 'fortified_briefly', 'swift_briefly', 'regenerating_briefly', 'focused_briefly', 'hasted_briefly'];
        return this.selectRandomEffects(baseEffects, rarity, 0, 1); // Potions have main effect, this is secondary status
    }

    static selectRandomEffects(effectList, rarity, minDefault = 1, maxDefault = 1) {
        const effectCountMap = {
            'COMMON': [minDefault,maxDefault], 'UNCOMMON': [minDefault,maxDefault], 'RARE': [Math.min(2,maxDefault+1),maxDefault+1], 'EPIC': [Math.min(2,maxDefault+1),maxDefault+2],
            'LEGENDARY': [Math.min(3,maxDefault+2),maxDefault+2], 'ARTIFACT': [Math.min(3,maxDefault+2),maxDefault+3], 'MYTHIC': [Math.min(4,maxDefault+3),maxDefault+3]
        };

        const countRange = effectCountMap[rarity] || [minDefault,maxDefault];
        const count = Math.min(
            Math.floor(Math.random() * (countRange[1] - countRange[0] + 1)) + countRange[0],
            effectList.length
        );

        const shuffled = [...effectList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }


    static enhanceItem(baseItem, context) {
        let enhanced = { ...baseItem };

        const rarityData = itemRarity[enhanced.rarity];
        if (rarityData) {
            enhanced.value = Math.floor((enhanced.value || enhanced.armor || 10) * rarityData.multiplier * (Math.random() * 0.4 + 0.8)); // Base value + rarity multiplier + random factor
            enhanced.color = rarityData.color;
        } else { // Fallback for unknown rarity
             enhanced.value = Math.floor((enhanced.value || enhanced.armor || 10) * (Math.random() * 0.4 + 0.8));
             enhanced.color = '#CCCCCC'; // Default grey
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

        // Ensure effects array exists
        if (!enhanced.effects) {
            enhanced.effects = [];
        }
        // Add unique effects from context enhancements
        enhanced.effects = [...new Set(enhanced.effects)];


        if (!enhanced.description) {
            enhanced.description = this.generateDescription(enhanced);
        } else { // Append rarity if description exists
            if (!enhanced.description.includes(rarityData?.name || enhanced.rarity)){
                 enhanced.description += ` (${rarityData?.name || enhanced.rarity})`;
            }
        }

        // For weapons, ensure damage is sensible for rarity if custom generated
        if(enhanced.type === itemCategories.WEAPON && !itemTemplates.weapons[enhanced.subType]?.find(w => w.name === enhanced.name)){
            const damages = {
                'COMMON': '1d6', 'UNCOMMON': '1d8', 'RARE': '1d10', 'EPIC': '2d6',
                'LEGENDARY': '2d8', 'ARTIFACT': '2d10', 'MYTHIC': '3d6'
            };
            if (!enhanced.damage || enhanced.damage.startsWith('1d4') && rarityData.multiplier > 1.5) { // if it's a custom low damage weapon but high rarity
                 enhanced.damage = damages[enhanced.rarity] || enhanced.damage || '1d4';
            }
        }


        return enhanced;
    }

    static addQuestEnhancements(item, questContext) {
        item.questItem = true;
        item.questId = questContext.id;
        item.description = (item.description ? item.description + " " : "") + `Related to quest: ${questContext.name || questContext.id}.`;

        if (questContext.importance === 'major' && item.rarity !== 'ARTIFACT' && item.rarity !== 'MYTHIC') {
            item.rarity = this.upgradeRarity(item.rarity);
            item.effects = [...(item.effects || []), 'blessed', 'quest_bound'];
            item.name = `[Quest] ${item.name}`;
        } else if (questContext.importance === 'minor') {
            item.effects = [...(item.effects || []), 'quest_hint'];
        }
        return item;
    }

    static addLocationEnhancements(item, locationContext) { // locationContext could be string array ['forest', 'ancient_ruins']
        let locationString = Array.isArray(locationContext) ? locationContext.join(' ') : locationContext;
        locationString = locationString.toLowerCase();

        if (locationString.includes('temple') || locationString.includes('shrine') || locationString.includes('holy')) {
            item.effects = [...(item.effects || []), 'blessed_aura_faint'];
            if (Math.random() < 0.2) item.name = `Hallowed ${item.name}`;
        } else if (locationString.includes('crypt') || locationString.includes('tomb') || locationString.includes('graveyard')) {
            item.effects = [...(item.effects || []), 'grave_chill_aura'];
            if (Math.random() < 0.2) item.name = `Grave-Touched ${item.name}`;
        } else if (locationString.includes('volcano') || locationString.includes('infernal') || locationString.includes('fiery')) {
            item.effects = [...(item.effects || []), 'smoldering_touch'];
            if (Math.random() < 0.2 && item.type === itemCategories.WEAPON) item.damage += '+1d4_fire';
            if (Math.random() < 0.2) item.name = `Magmaforged ${item.name}`;
        } else if (locationString.includes('shadow') || locationString.includes('dark cave') || locationString.includes('underdark')) {
            item.effects = [...(item.effects || []), 'shadowmeld_passive_minor'];
            if (Math.random() < 0.2) item.name = `Umbral ${item.name}`;
        }
        return item;
    }

    static addEnemyEnhancements(item, enemyContext) { // enemyContext could be string like 'demon lord' or ['goblin', 'shaman']
        let enemyString = Array.isArray(enemyContext) ? enemyContext.join(' ') : enemyContext;
        enemyString = enemyString.toLowerCase();

        if (enemyString.includes('demon') || enemyString.includes('devil')) {
            item.effects = [...(item.effects || []), 'cursed_by_fiend', 'chaos_taint'];
            if (Math.random() < 0.3) item.name = `Demonskinned ${item.name}`;
            if (item.type === itemCategories.WEAPON && Math.random() < 0.1) item.effects.push('demon_bane');
        } else if (enemyString.includes('angel') || enemyString.includes('celestial')) {
            item.effects = [...(item.effects || []), 'blessed_by_celestial', 'order_attuned'];
            if (Math.random() < 0.3) item.name = `Seraphic ${item.name}`;
            if (item.type === itemCategories.WEAPON && Math.random() < 0.1) item.effects.push('celestial_smite');
        } else if (enemyString.includes('dragon')) {
            const dragonTypes = ['red', 'blue', 'green', 'black', 'white', 'gold', 'silver', 'bronze', 'copper'];
            const draconicType = dragonTypes.find(dt => enemyString.includes(dt)) || 'generic';
            item.effects = [...(item.effects || []), `dragon_essence_${draconicType}`, 'elemental_resistance_dragonscale'];
            if (Math.random() < 0.3) item.name = `Dragon-Hoard ${item.name}`;
            if (item.type === itemCategories.WEAPON && Math.random() < 0.2) item.effects.push('dragon_slayer_edge');
        } else if (enemyString.includes('undead') || enemyString.includes('lich') || enemyString.includes('vampire')) {
            item.effects = [...(item.effects || []), 'necrotic_aura_faint', 'life_drain_minor_chance'];
            if (Math.random() < 0.3) item.name = `Deathmarked ${item.name}`;
             if (item.type === itemCategories.WEAPON && Math.random() < 0.1) item.effects.push('undead_bane');
        }
        return item;
    }

    static upgradeRarity(currentRarityKey) {
        const rarities = Object.keys(itemRarity);
        const currentIndex = rarities.indexOf(currentRarityKey);
        if (currentIndex === -1 || currentIndex === rarities.length - 1) {
            return currentRarityKey; // Already max or not found
        }
        return rarities[currentIndex + 1];
    }

    static generateDescription(item) {
        const rarityDesc = {
            'COMMON': 'A common, serviceable item.',
            'UNCOMMON': 'A well-crafted item of decent quality.',
            'RARE': 'An exceptional item, often imbued with minor magic.',
            'EPIC': 'A powerful item of legendary renown.',
            'LEGENDARY': 'An artifact of immense power and historical significance.',
            'ARTIFACT': 'A relic of unimaginable power, possibly unique, from ancient times.',
            'MYTHIC': 'A truly mythic item, an object of godlike power that can shape destinies.'
        };

        let desc = rarityDesc[item.rarity] || 'A mysterious item of unknown origin.';
        if (item.type) desc += ` It is a ${item.type.toLowerCase()}.`;
        if (item.subType) desc += ` Specifically, a ${item.subType.toLowerCase()}.`;
        if (item.effects && item.effects.length > 0) {
            const effectSample = item.effects.slice(0,2).join(', ').replace(/_/g, ' ');
            desc += ` It seems to possess properties like: ${effectSample}.`;
        }
        return desc;
    }

    // Constructed Language System
    // languageTemplates expanded above

    static generateConstructedLanguage(languageType, textLength = 'medium') {
        const template = this.languageTemplates[languageType.toLowerCase()] || this.languageTemplates.elven; // Fallback to elven

        const lengthMap = {
            short: { sentences: 1, wordsPerSentence: [3, 6] },
            medium: { sentences: [1,2], wordsPerSentence: [5, 8] }, // Sentences can be 1 or 2
            long: { sentences: [2,3], wordsPerSentence: [6, 10] },
            scroll: { sentences: [3,5], wordsPerSentence: [7, 12] },
            tome: { sentences: [5,8], wordsPerSentence: [8, 15] }
        };

        const config = lengthMap[textLength] || lengthMap.medium;
        const numSentences = Array.isArray(config.sentences) ? (config.sentences[0] + Math.floor(Math.random() * (config.sentences[1] - config.sentences[0] + 1))) : config.sentences;

        const sentences = [];

        for (let i = 0; i < numSentences; i++) {
            const wordCount = Math.floor(Math.random() * (config.wordsPerSentence[1] - config.wordsPerSentence[0] + 1)) + config.wordsPerSentence[0];
            const sentence = this.generateSentence(template, wordCount);
            sentences.push(sentence);
        }

        return {
            text: sentences.join(' ').trim(),
            language: template.name,
            script: template.script,
            translation: this.generateTranslation(sentences.length, languageType.toLowerCase(), template.sample)
        };
    }

    static generateSentence(template, wordCount) {
        const words = [];

        for (let i = 0; i < wordCount; i++) {
            let word = '';
            const usePrefix = Math.random() < 0.25 && template.prefixes.length > 0;
            const useSuffix = Math.random() < 0.40 && template.suffixes.length > 0;
            const numPhoneticParts = 1 + (Math.random() < 0.3 ? 1 : 0); // 1 or 2 phonetic parts

            if (usePrefix) {
                word += template.prefixes[Math.floor(Math.random() * template.prefixes.length)];
                if (Math.random() < 0.1) word += "'"; // Apostrophe for some languages
            }

            for(let j=0; j<numPhoneticParts; j++){
                word += template.phoneticPattern[Math.floor(Math.random() * template.phoneticPattern.length)];
            }


            if (useSuffix) {
                 if (Math.random() < 0.1 && (word.endsWith('a') || word.endsWith('e') || word.endsWith('i') || word.endsWith('o') || word.endsWith('u'))) word += "'"; // Apostrophe before some suffixes
                word += template.suffixes[Math.floor(Math.random() * template.suffixes.length)];
            }
            // Ensure word is not empty if prefix/suffix failed or pattern was empty
            if(word.length === 0) word = template.phoneticPattern[Math.floor(Math.random() * template.phoneticPattern.length)];

            words.push(word);
        }

        return this.applyGrammarRules(words, template.grammar, template.name);
    }

    static applyGrammarRules(words, grammar, langName) {
        if (words.length === 0) return "";
        let sentenceEnd = '.';
        if (langName.toLowerCase().includes('orcish') || langName.toLowerCase().includes('goblinoid')) sentenceEnd = Math.random() < 0.5 ? '!' : '.';
        if (langName.toLowerCase().includes('gnomish')) sentenceEnd = Math.random() < 0.7 ? '!' : (Math.random() < 0.5 ? '?' : '.');


        // Capitalize first word - simple rule
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

        // Simple comma insertion for longer sentences
        if (words.length > 5 && Math.random() < 0.5) {
            const commaPos = Math.floor(words.length / 2);
            words.splice(commaPos, 0, words[commaPos-1].endsWith(',') ? '' : ','); // Avoid double commas
        }


        // Basic grammar rules (very simplified)
        // Actual VSO/SOV would require tagging parts of speech, which is beyond this scope.
        // So, it's mostly word order + punctuation.
        switch (grammar) {
            case 'VSO': // Verb-Subject-Object
            case 'SOV': // Subject-Object-Verb
            case 'SVO': // Subject-Verb-Object
            case 'VOS': // Verb-Object-Subject
            case 'Instructional (Procedural)':
            case 'Non-linear (Thought-based)': // Unpredictable punctuation
                if (grammar === 'Non-linear (Thought-based)' && Math.random() < 0.3) sentenceEnd = ['...', '?!', '~'][Math.floor(Math.random()*3)];
                return words.join(' ').replace(' ,', ',') + sentenceEnd;
            case 'Free':
            default:
                return words.join(' ').replace(' ,', ',') + sentenceEnd;
        }
    }

    static generateTranslation(sentenceCount, languageTypeKey, sampleSentence) {
         const genericTranslations = [
            "The ancient prophecy speaks of this moment.",
            "Darkness gathers on the horizon, a storm is coming.",
            "Only the chosen one can wield such power.",
            "Seek the lost temple, hidden deep within the mountains.",
            "Betrayal cuts deeper than any blade.",
            "The spirits of old watch over this sacred place.",
            "What was broken can be reforged, but at a cost.",
            "Fate is a fickle mistress, her threads ever-shifting.",
            "Courage is not the absence of fear, but the will to overcome it.",
            "Even the smallest light can pierce the deepest shadow."
        ];

        const translationTemplates = { // Keyed by languageTypeKey (lowercase)
            elven: [
                "The stars shine upon your path, wanderer of the old forests.",
                "May the light of the Valar guide your steps through shadow and sorrow.",
                "Ancient trees whisper secrets to those who listen with a pure heart."
            ],
            succubus: [
                "Your deepest desires are but whispers to my ears, mortal.",
                "Let us forge a pact in shadow and flame, for pleasures untold.",
                "The allure of true power is a sweet venom, is it not?"
            ],
            draconic: [
                "By fang and flame, the world shall tremble before our might!",
                "The ancient pacts are broken, let the skies rain fire and retribution!",
                "Only through strength can true dominion be achieved. Weakness is a plague."
            ],
            demonic: [
                "Your soul is a flickering candle in the endless abyss of our hunger.",
                "All mortal flesh shall burn in the glorious fires of the lower planes.",
                "Obedience brings reward, defiance brings eternal torment. Choose wisely."
            ],
            celestial: [
                "By the grace of the Empyrean Lords, may justice prevail and light cleanse the darkness.",
                "Hope is the beacon that guides lost souls back to the path of righteousness.",
                "Even in despair, the divine spark within you can ignite a new dawn."
            ],
            orcish: [
                "Blood and thunder! We march to war, for glory and spoils!",
                "Smash the weak! Take their shiny bits! WAAAGH!",
                "Strong leader make strong tribe. Weakling get eaten by Grolak."
            ],
            dwarven: [
                "By my beard and brew! A good day for mining and fighting!",
                "For hearth and hall, for gold and kin! Stand firm, ye sons of stone!",
                "An oath sworn in dwarven halls is stronger than mountain rock."
            ],
            gnomish: [
                "Fascinating contraption! Does it involve cogs, springs, or perhaps a bit of alchemical fizz-pop?",
                "A precise calculation is needed here, lest the whole thing go kablooey!",
                "Curiosity is the mother of invention, and sometimes, minor explosions!"
            ],
            sylvan: [
                "The forest breathes with ancient magic, can you feel its heartbeat in the rustling leaves?",
                "Mortals oft forget the old ways, the balance between shadow and light in the wild.",
                "Dance with the fae under the moonlight, but beware their tricksy bargains."
            ],
            abyssal_deep_speech: [
                "(The very fabric of your mind strains to comprehend the alien thoughts, conveying only madness and cosmic indifference.)",
                "(A sense of insignificance washes over you as an impossibly ancient and vast consciousness brushes against yours.)",
                "(Concepts that defy mortal language echo: endless cycles of devouring and despair.)"
            ],
            primordial_elemental: [ // Example Ignan
                "The heart of the volcano beats with untamed fury, a power to respect or be consumed by.",
                "Elements rage and coalesce, the world is ever in flux, ever reforming.",
                "Feel the raw energy of creation, the untamed spirit of the very essence of existence."
            ],
            construct_binary: [
                "Query: State your purpose. All unauthorized entities will be neutralized.",
                "Logical assessment complete. Probability of success: 73.48%. Proceeding with operation.",
                "System error. Recalibrating directives. Please stand by... or don't."
            ],
            serpent_tongue: [
                "Sssuch ambition... it tastesss ssweet, like fear.",
                "The old onesss ssstir. Their venom will poison thisss world anew.",
                "Join usss, embrace the cold blood, and rule the ssshifting sssandsss."
            ],
            goblinoid_pidgin: [
                "Shiny fing! Me want! You give, or me bash head!",
                "Boss say attack! We go, make big boom! Lotsa loot!",
                "Hungry! Need meat! Pointy-ears look tasty..."
            ],
             avian_sky_song: [
                "The winds carry tales from distant lands, listen closely, feather-friend.",
                "Soar above the mundane, let the currents guide your wings to destiny.",
                "A storm gathers on the horizon, a challenge for the brave of heart and strong of wing."
            ],
            insectoid_chitter: [
                "(A series of sharp clicks and whirs conveying a sense of immediate threat and territorial aggression.)",
                "(Rapid antennae twitches and mandible clicks indicate a complex social exchange regarding resources.)",
                "(A low thrumming buzz suggests a collective awareness, a hive mind focused on survival and expansion.)"
            ],
            fungal_spore_murmur: [
                "(A wave of shared understanding flows through the colony: growth, sustenance, the deep dark.)",
                "(The collective consciousness communicates a sense of slow, ancient wisdom, and the cycle of decay and rebirth.)",
                "(A feeling of interconnectedness, all individuals part of a greater, silent whole.)"
            ],
            voidspeak: [
                "That which sleeps beneath the blackest seas stirs in its aeons-long slumber.",
                "The stars align in configurations that speak of unraveling realities and the triumph of entropy.",
                "Your fragile sanity is but a thin veil before the gaping maw of infinity."
            ]
            // Add more for other languages
        };

        const templates = translationTemplates[languageTypeKey] || [sampleSentence, ...genericTranslations]; // Fallback to generic
        const selectedTranslations = [];
        let availableTemplates = [...templates];

        for(let i = 0; i < sentenceCount; i++){
            if(availableTemplates.length === 0) availableTemplates = [...templates]; // Replenish if not enough unique
            const randIndex = Math.floor(Math.random() * availableTemplates.length);
            selectedTranslations.push(availableTemplates.splice(randIndex, 1)[0]);
        }
        return selectedTranslations.join(' ').trim();
    }


    static generateLanguageBook(rarity, languageType) {
        const languageOutput = this.generateConstructedLanguage(languageType, ['RARE', 'EPIC'].includes(rarity) ? 'scroll' : 'tome'); // Longer text for rarer books
        const template = this.languageTemplates[languageType.toLowerCase()] || this.languageTemplates.elven;

        const bookTitles = { // Keyed by languageType (lowercase)
            elven: ["Silmarillion Eregion", "Lay of Lúthien (Fragment)", "Annals of Imladris"],
            succubus: ["Zar'thek Belothrim (Pact of Shadows)", "Whispers of the Flesh", "The Crimson Grimoire"],
            draconic: ["Yol'Toor'Shul (The Fire Inferno Sun)", "Dovahkiin Zok Brit (Dragonborn Most Beautiful)", "Scrolls of the First Wyrms"],
            demonic: ["Gorthek Ulokrim (The Soul Bindings)", "Codex of the Abyss", "Liber Flagitiorum"],
            celestial: ["Lumiel Serathim (Light of the Angels)", "Hymns of the Empyrean", "The Book of Celestial Spheres"],
            orcish: ["Grokagh Waaghbook (The Great Raid Chronicle)", "Tales of Chief Throk", "Blood Axes and Broken Skulls"],
            dwarven: ["The Saga of Durin's Folk", "Khazad-Dûm Ledger", "Runes of the Deep Fathers"],
            gnomish: ["Whatchamacallits & Gizmos Vol. XI", "Contraptions Most Curious", "The Cogfathermobile Blueprints"],
            sylvan: ["Whispers of the Verdant Heart", "Chronicles of the Seelie Court", "Songs of the Moonlit Glade"],
            abyssal_deep_speech: ["(The title is an untranslatable sigil that induces headaches)", "Fragments of Non-Euclidean Thought", "Echoes from the Void Between Stars"],
            primordial_elemental: ["Tablet of Primal Fire (Ignan)", "Whispers of the Stone Heart (Terran)", "Currents of the Endless Sea (Aquan)"],
            construct_binary: ["Modron Operating Manual 7.3.1", "The Axiomatic Principles of Mechanus", "Logic Gates and Prime Sequences"],
            serpent_tongue: ["Scales of Wisdom (Coiled Thoughts)", "The Great Serpent's Prophecies", "Secrets of the Slitherin Cults"],
            goblinoid_pidgin: ["How to Stab Gud", "Shiny Fings and Where to Find Dem", "Big Boss's Big Book of Hurty"],
            avian_sky_song: ["Aerie Cartography Vol. III", "Legends of the Wind Lords", "Feathered Philosophies"],
            insectoid_chitter: ["(A series of carved notches indicating seasonal food sources)", "The Great Swarm: A History", "Mandible Markings and Their Meanings"],
            fungal_spore_murmur: ["(A living fungal tome, its pages are interconnected mycelia)", "The Song of the Silent Network", "Cycles of Bloom and Decay"],
            voidspeak: ["(The book's cover writhes with impossible angles)", "Codex of the Outer Gods", "The Litany of Entropy"]
        };

        const titlesForLang = bookTitles[languageType.toLowerCase()] || [`Ancient ${template.name} Script`, `Lost Tales in ${template.name}`];
        const title = titlesForLang[Math.floor(Math.random() * titlesForLang.length)];

        return {
            name: `${title}`,
            type: itemCategories.BOOK,
            rarity: rarity,
            effects: this.generateBookEffects(rarity),
            description: `A ${template.script} text written in ${template.name}. The writing seems to ${Math.random() < 0.5 ? 'shimmer with otherworldly power' : 'hold ancient secrets'}. Contains: "${languageOutput.translation.substring(0,50)}..."`,
            languageContent: {
                originalText: languageOutput.text,
                translation: languageOutput.translation,
                language: languageOutput.language,
                script: languageOutput.script
            },
            readAction: 'language_study', // Could also be 'learn_spell_from_book', 'gain_lore'
            value: Math.floor((itemRarity[rarity]?.multiplier || 1) * 25 * (1 + Math.random()*0.5))
        };
    }

    static generateLanguageScroll(rarity, languageType, spellType = 'generic') {
        const languageOutput = this.generateConstructedLanguage(languageType, 'short');
        const template = this.languageTemplates[languageType.toLowerCase()] || this.languageTemplates.elven;

        const scrollNames = { // Keyed by languageType (lowercase)
            elven: ["Scroll of Elven Incantation", "Aeluin's Ward Scroll", "Lembas Recipe (coded)"],
            succubus: ["Scroll of Seductive Whispers", "Pact of Infernal Charm", "Binding of Desire"],
            draconic: ["Scroll of Dragon Words", "Thu'um of Minor Power", "Wyrmfire Invocation"],
            demonic: ["Scroll of Infernal Binding", "Summon Imp (Lesser)", "Curse of Weakness"],
            celestial: ["Scroll of Divine Grace", "Blessing of the Just", "Minor Miracle Invocation"],
            orcish: ["Scroll of Battle Cry (Smelly)", "WAAAGH! Chant", "Strength of Grok"],
            dwarven: ["Rune of Fortification", "Oathgold Warding Scroll", "Miner's Blessing"],
            gnomish: ["Blueprint: Self-Dusting Boot", "Formula: Everlasting Bubblegum", "Scroll of Minor Marvels"],
            sylvan: ["Charm of the Forest Sprite", "Entangling Roots Incantation", "Faerie Fire Scroll"],
            abyssal_deep_speech: ["(A tattered scroll inscribed with symbols that hurt to look at)", "Invocation of the Unseen Watcher", "Maddening Riddle of R'lyeh"],
            primordial_elemental: ["Chant of Stone's Embrace (Terran)", "Spark of the Eternal Flame (Ignan)", "Whisper of the Zephyr (Auran)"],
            construct_binary: ["Code Snippet: Repair Subroutine", "Activation Key: Sentry Bot 7", "Diagnostic Script v1.2"],
            serpent_tongue: ["Hymn to the Scaled God", "Venomous Dart Incantation", "Shed Skin Ritual"],
            goblinoid_pidgin: ["Map to Shiny Stash (Probably Fake)", "How to Make Bad Smell Gooder", "Sneaky Goblin Trick Scroll"],
            avian_sky_song: ["Feather Fall Charm", "Sky-Reader's Invocation", "Call of the Flock"],
            insectoid_chitter: ["(Chitinous plate with etched commands for lesser insects)", "Swarm Coordination Pattern", "Pheromone Trail Marker"],
            fungal_spore_murmur: ["(A dried mushroom cap with glowing spore patterns)", "Song of Silent Growth", "Meld of the Mycelial Mind"],
            voidspeak: ["(The scroll seems to absorb light, its text barely visible yet deeply unsettling)", "Litany of Unmaking", "Glimpse of the Outer Dark"]
        };

        const namesForLang = scrollNames[languageType.toLowerCase()] || [`Scroll of ${template.name}`, `Ancient ${template.name} Charm`];
        const scrollName = namesForLang[Math.floor(Math.random() * namesForLang.length)];

        return {
            name: scrollName,
            type: itemCategories.SCROLL,
            rarity: rarity,
            singleUse: true,
            effects: this.generateScrollEffects(rarity), // Buffs/debuffs from reading
            spell: { // The actual spell effect of the scroll
                 type: spellType === 'generic' ? (['damage', 'buff', 'utility', 'debuff'][Math.floor(Math.random()*4)]) : spellType,
                 effect: `${scrollName.toLowerCase().replace(/ /g, '_').replace(/[^\w]/gi, '')}_cast`,
                 description: `Casts a spell from the ${scrollName}. ${languageOutput.translation.substring(0,40)}...`
            },
            description: `An ancient scroll inscribed with ${template.script} ${template.name} text. Magical energy pulses through the words.`,
            languageContent: {
                originalText: languageOutput.text,
                translation: languageOutput.translation,
                language: languageOutput.language,
                script: languageOutput.script,
                spellType: spellType
            },
            readAction: 'spell_casting',
            value: Math.floor((itemRarity[rarity]?.multiplier || 1) * 15 * (1 + Math.random()*0.3))
        };
    }

    static generateItemPrompt(context) { // This is for potential AI integration as per original
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
            generationInstructions: `Create a contextually appropriate item based on the current game situation (player class: ${context?.player?.class || 'unknown'}, location: ${context?.locationContext || 'unknown'}, recent actions: ${context?.recentActions || 'none'}, quest: ${context?.questContext?.name || 'none'}). The item should feel meaningful and integrated into the world narrative. For language-based items (books, scrolls), include constructed language text using one of the available languages. Ensure the item's rarity and power are balanced for the context.`
        };
    }
}

// Integration with existing game systems (largely unchanged, but may need stat/effect handling updates)
export class ItemManager {

    static addItemToInventory(player, item) {
        if (!player.inventory) {
            player.inventory = [];
        }
        if (!item.id) {
            item.id = ItemGenerator.generateItemId(); // Use generator's ID func
        }
        player.inventory.push(item);
        console.log('ItemManager: Added item to inventory:', item.name, item.id);
        console.log('ItemManager: Current inventory length:', player.inventory.length);
        this.saveInventoryToStorage(player);
        return true;
    }

    static useItem(player, itemId) {
        const itemIndex = player.inventory.findIndex(item => item.id === itemId);
        if (itemIndex === -1) return { success: false, message: 'Item not found.' };

        const item = player.inventory[itemIndex];
        let result = { success: false, message: `Cannot use ${item.name}.`};

        // Handle different item types and actions
        if (item.type === itemCategories.CONSUMABLE || (item.effect && typeof item.effect === 'object')) { // Potions etc.
             result = this.applyConsumableEffect(player, item.effect);
             messages.push(result.message);
        } else if (item.readAction === 'spell_casting' && item.type === itemCategories.SCROLL) { // Scrolls
            // Game logic for casting spell from item.spell object needed here
            result = { success: true, message: `Cast ${item.spell?.effect || 'a spell'} from ${item.name}.`};
            // Apply any immediate effects listed in item.effects
            if (item.effects && item.effects.length > 0) {
                let effectMessages = this.applyItemEffectsToPlayer(player, item.effects);
                result.message += " " + effectMessages.join(" ");
            }
        } else if (item.readAction === 'language_study' && item.type === itemCategories.BOOK) {
             // Game logic for studying language or gaining lore
             result = { success: true, message: `You study ${item.name}. ${item.languageContent?.translation || "It's hard to decipher."}`};
              if (item.effects && item.effects.length > 0) {
                let effectMessages = this.applyItemEffectsToPlayer(player, item.effects, true); // passive for books
                result.message += " You feel " + effectMessages.join(" and ") + ".";
            }
        } else if (item.effects && item.effects.length > 0) { // General items with status effects
             let effectMessages = this.applyItemEffectsToPlayer(player, item.effects);
             result = { success: true, message: `Used ${item.name}. ${effectMessages.join(' ')}`};
        } else {
             result = { success: true, message: `Used ${item.name}. Nothing specific seems to happen.` };
        }


        if (item.singleUse && result.success) {
            player.inventory.splice(itemIndex, 1);
            this.saveInventoryToStorage(player);
        }
        return result;
    }

    static applyConsumableEffect(player, consumableEffect) {
        if (!consumableEffect) return { success: false, message: "No effect to apply." };
        let message = "";
        switch (consumableEffect.type) {
            case 'heal':
                player.stats.hp = Math.min(player.stats.maxHp, player.stats.hp + consumableEffect.amount);
                message = `Healed for ${consumableEffect.amount} HP.`;
                break;
            case 'mana':
                player.stats.mp = Math.min(player.stats.maxMp, player.stats.mp + consumableEffect.amount);
                message = `Restored ${consumableEffect.amount} MP.`;
                break;
            case 'buff':
                if (consumableEffect.stat && player.stats.hasOwnProperty(consumableEffect.stat)) {
                    // This is a direct stat buff, needs temporary effect system or permanent change
                    // For now, let's assume it might apply a status effect from the name
                    this.applyStatusEffect(player, {
                        name: consumableEffect.status || `${consumableEffect.stat}_boost`,
                        type: 'positive',
                        duration: consumableEffect.duration || 300,
                        description: `Increased ${consumableEffect.stat} by ${consumableEffect.amount}.`,
                        effects: { [consumableEffect.stat]: consumableEffect.amount }
                    });
                     message = `Increased ${consumableEffect.stat} by ${consumableEffect.amount} for ${consumableEffect.duration/60} minutes.`;
                } else if (consumableEffect.status) { // Apply a named status effect
                     const statusDef = statusEffects[consumableEffect.status];
                     if(statusDef){
                        this.applyStatusEffect(player, {...statusDef, duration: consumableEffect.duration || statusDef.duration });
                        message = `Applied ${statusDef.name}.`;
                     } else {
                         message = `Gained an unknown buff: ${consumableEffect.status}.`;
                     }
                }
                break;
            case 'cure':
                // Simplified cure, remove first instance of status
                player.statusEffects = player.statusEffects.filter(se => se.name.toLowerCase() !== consumableEffect.status.toLowerCase());
                message = `Cured of ${consumableEffect.status}.`;
                break;
            // Add more consumable effect types
            default:
                return { success: false, message: "Unknown consumable effect type." };
        }
        return { success: true, message: message };
    }


    static applyItemEffectsToPlayer(player, itemEffectNames, isPassive = false) { // itemEffectNames is an array of strings
        if (!itemEffectNames || itemEffectNames.length === 0) return [];

        let messages = [];
        itemEffectNames.forEach(effectName => {
            const effectDefinition = statusEffects[effectName];
            if (effectDefinition) {
                this.applyStatusEffect(player, {
                    ...effectDefinition,
                    duration: isPassive ? -1 : (effectDefinition.duration || 300) // Passive effects from books might be permanent or until removed
                });
                messages.push(`Applied ${effectDefinition.name}: ${effectDefinition.description}`);
            } else {
                // Handle non-statusEffects strings (passive bonuses, flags)
                // This part would require more game logic to interpret things like 'demon_bane'
                // For now, just acknowledge it.
                if (!player.passiveBonuses) player.passiveBonuses = [];
                if (!player.passiveBonuses.includes(effectName)) player.passiveBonuses.push(effectName);
                messages.push(`Gained effect: ${effectName.replace(/_/g, ' ')}.`);
            }
        });
        return messages;
    }

    static applyStatusEffect(player, effectData) { // effectData is the full object from statusEffects
        if (!player.statusEffects) {
            player.statusEffects = [];
        }

        // Remove existing effect of same name to prevent stacking if not intended, or refresh duration
        player.statusEffects = player.statusEffects.filter(e => e.name !== effectData.name);

        const newEffectInstance = {
            ...effectData,
            appliedAt: Date.now(),
            expiresAt: effectData.duration === -1 ? Infinity : Date.now() + (effectData.duration * 1000) // -1 duration for permanent
        };
        player.statusEffects.push(newEffectInstance);

        // Apply immediate stat changes (if any)
        if (effectData.effects) {
            this.applyStatChanges(player, effectData.effects);
        }
         console.log(`Applied status effect: ${effectData.name} to ${player.name}. Expires at: ${new Date(newEffectInstance.expiresAt).toLocaleTimeString()}`);
    }

    static applyStatChanges(player, statEffectObject) { // e.g. { strength: 2, intelligence: -1 }
        if(!player.stats) {
            console.error("Player has no stats object!");
            player.stats = { hp:10,maxHp:10,mp:10,maxMp:10, strength:5, dexterity:5, constitution:5, intelligence:5, wisdom:5, charisma:5 }; // temp fallback
        }
        Object.entries(statEffectObject).forEach(([stat, value]) => {
            if (stat === 'allStats') {
                Object.keys(player.stats).forEach(statName => {
                    if (typeof player.stats[statName] === 'number' && !['hp', 'mp', 'maxHp', 'maxMp'].includes(statName) ) { // Don't apply allStats to HP/MP directly
                        player.stats[statName] = Math.max(0, (player.stats[statName] || 0) + value);
                    }
                });
            } else if (player.stats.hasOwnProperty(stat)) {
                 if (typeof player.stats[stat] === 'number') {
                    player.stats[stat] = Math.max(0, (player.stats[stat] || 0) + value);
                 } else { // For things like damageMultiplier, attackSpeed (multiplicative)
                     player.stats[stat] = (player.stats[stat] || 1) * value;
                 }
            } else if (stat === 'hpRegen' || stat === 'mpRegen') { // Special handling for regen
                player.stats[stat] = (player.stats[stat] || 0) + value;
            } else if (stat.endsWith('Multiplier') || stat.endsWith('Reduction') || stat.endsWith('Bonus') || stat.endsWith('Resistance') || stat.endsWith('Vulnerability')) {
                // Store these custom effect values directly on stats or a sub-object.
                // e.g. player.stats.damageMultiplier = (player.stats.damageMultiplier || 1) * value;
                // This part needs careful design based on how these are used in combat calcs.
                 player.stats[stat] = (player.stats[stat] || (stat.includes('Multiplier') ? 1:0) ) * (stat.includes('Multiplier')? value : 1) + (stat.includes('Multiplier')? 0 : value);
            }
            // Handle maxHP/maxMP changes and then clamp current HP/MP
            if(stat === 'maxHp') player.stats.hp = Math.min(player.stats.hp, player.stats.maxHp);
            if(stat === 'maxMp') player.stats.mp = Math.min(player.stats.mp, player.stats.maxMp);
        });
         console.log(`Stat changes applied to ${player.name}. Current STR: ${player.stats.strength}`);
    }

    static updateStatusEffects(player) {
        if (!player.statusEffects || player.statusEffects.length === 0) return;

        const now = Date.now();
        const expiredEffects = [];

        player.statusEffects = player.statusEffects.filter(effect => {
            if (effect.expiresAt <= now && effect.expiresAt !== Infinity) {
                expiredEffects.push(effect);
                return false;
            }
            return true;
        });

        expiredEffects.forEach(effect => {
            if (effect.effects) { // Only reverse if it had direct stat changes defined
                this.reverseStatChanges(player, effect.effects);
            }
            console.log(`Status effect ${effect.name} expired for ${player.name}.`);
            // Potentially trigger "onExpire" logic here
        });

        // Handle ongoing effects like hpDrain, hpRegen
        player.statusEffects.forEach(effect => {
            if (effect.effects) {
                if (effect.effects.hpDrain) {
                    player.stats.hp = Math.max(0, player.stats.hp - effect.effects.hpDrain); // Assuming per second, game loop calls this
                }
                if (effect.effects.hpRegen) {
                     player.stats.hp = Math.min(player.stats.maxHp, player.stats.hp + effect.effects.hpRegen);
                }
                 // Add mpDrain, mpRegen, etc.
            }
        });


        if (expiredEffects.length > 0) {
            this.saveInventoryToStorage(player); // Save if effects changed
        }
    }

    static reverseStatChanges(player, statEffectObject) {
        if(!player.stats) return;
        Object.entries(statEffectObject).forEach(([stat, value]) => {
            if (stat === 'allStats') {
                Object.keys(player.stats).forEach(statName => {
                     if (typeof player.stats[statName] === 'number' && !['hp', 'mp', 'maxHp', 'maxMp'].includes(statName) ) {
                        player.stats[statName] = Math.max(0, (player.stats[statName] || 0) - value);
                    }
                });
            } else if (player.stats.hasOwnProperty(stat)) {
                if (typeof player.stats[stat] === 'number') {
                    player.stats[stat] = Math.max(0, (player.stats[stat] || 0) - value);
                 } else { // For multiplicative effects, reverse is division
                     player.stats[stat] = (player.stats[stat] || 1) / value;
                 }
            } else if (stat === 'hpRegen' || stat === 'mpRegen') {
                 player.stats[stat] = Math.max(0, (player.stats[stat] || 0) - value);
            } else if (stat.endsWith('Multiplier') || stat.endsWith('Reduction') || stat.endsWith('Bonus') || stat.endsWith('Resistance') || stat.endsWith('Vulnerability')) {
                // Reversing these requires knowing the original value or applying inverse logic
                // Simple reversal for additive bonuses:
                 player.stats[stat] = (player.stats[stat] || (stat.includes('Multiplier') ? 1:0) ) / (stat.includes('Multiplier')? value : 1) - (stat.includes('Multiplier')? 0 : value);
            }
        });
         console.log(`Stat changes reversed for ${player.name}. Current STR: ${player.stats.strength}`);
    }

    static saveInventoryToStorage(player) {
        if (typeof localStorage !== 'undefined') {
            try {
                localStorage.setItem(`inventory_${player.name}`, JSON.stringify(player.inventory || []));
                localStorage.setItem(`statusEffects_${player.name}`, JSON.stringify(player.statusEffects || []));
                localStorage.setItem(`passiveBonuses_${player.name}`, JSON.stringify(player.passiveBonuses || []));
                localStorage.setItem(`playerStats_${player.name}`, JSON.stringify(player.stats || {}));

            } catch (e) {
                console.error("Failed to save to localStorage:", e);
            }
        }
    }

    static loadInventoryFromStorage(player) {
         if (typeof localStorage !== 'undefined') {
            try {
                const savedInventory = localStorage.getItem(`inventory_${player.name}`);
                const savedEffects = localStorage.getItem(`statusEffects_${player.name}`);
                const savedPassives = localStorage.getItem(`passiveBonuses_${player.name}`);
                const savedStats = localStorage.getItem(`playerStats_${player.name}`);


                if (savedInventory) player.inventory = JSON.parse(savedInventory); else player.inventory = [];
                if (savedEffects) player.statusEffects = JSON.parse(savedEffects); else player.statusEffects = [];
                if (savedPassives) player.passiveBonuses = JSON.parse(savedPassives); else player.passiveBonuses = [];
                if (savedStats) player.stats = JSON.parse(savedStats);
                // else if (!player.stats) player.stats = { hp:10,maxHp:10,mp:10,maxMp:10, strength:5, dexterity:5, constitution:5, intelligence:5, wisdom:5, charisma:5 };


                this.updateStatusEffects(player); // Clean up expired effects immediately on load
            } catch (e) {
                console.error("Failed to load from localStorage:", e);
                 player.inventory = [];
                 player.statusEffects = [];
                 player.passiveBonuses = [];
            }
        }
    }

    static applyItemEffects(player, item) {
        if (!item.effects || item.effects.length === 0) return [];
        return this.applyItemEffectsToPlayer(player, item.effects);
    }
}

export default {
    itemCategories,
    itemRarity,
    statusEffects,
    itemTemplates,
    dynamicItemPrefixes,
    dynamicItemSuffixes,
    ItemGenerator,
    ItemManager
};

// Example Player Object Structure (for reference by ItemManager)
/*
const player = {
    name: "Hero",
    inventory: [],
    statusEffects: [], // { name, type, duration, description, effects, appliedAt, expiresAt }
    passiveBonuses: [], // string array of passive effect keys like 'demon_bane'
    stats: {
        hp: 100,
        maxHp: 100,
        mp: 50,
        maxMp: 50,
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        armor: 5, // from equipment
        hpRegen: 0,
        // ... other stats the game uses
        // Custom multipliers/bonuses applied by effects might also live here
        // e.g. damageMultiplier: 1, physicalResistance: 0
    },
    // ... other player data like class, level, equippedItems
};
*/