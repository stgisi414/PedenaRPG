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
            { name: 'Rusted Blade', damage: '1d4', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Training Sword', damage: '1d4+1', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Iron Shortsword', damage: '1d6', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Weathered Longsword', damage: '1d8-1', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Steel Sword', damage: '1d6+1', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Legionnaire\'s Gladius', damage: '1d8', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Broadsword', damage: '1d8', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Squire\'s Foil', damage: '1d6', rarity: 'COMMON', effects: ['precise_strike_1'], slot: 'mainHand' },
            { name: 'Silver Blade', damage: '1d8', rarity: 'UNCOMMON', effects: ['blessed', 'undead_bane'], slot: 'mainHand' },
            { name: 'Elven Longsword', damage: '1d8+1', rarity: 'UNCOMMON', effects: ['swift_strike'], slot: 'mainHand' },
            { name: 'Dwarven Warblade', damage: '1d10', rarity: 'UNCOMMON', effects: ['armor_piercing_1'], slot: 'mainHand' },
            { name: 'Knight\'s Arming Sword', damage: '1d8+2', rarity: 'UNCOMMON', effects: ['fortified_grip'], slot: 'mainHand' },
            { name: 'Cutlass of the Seas', damage: '1d6+1', rarity: 'UNCOMMON', effects: ['bleeding_1'], slot: 'mainHand' },
            { name: 'Orcish Scimitar', damage: '1d6+2', rarity: 'UNCOMMON', effects: ['brutal_swing'], slot: 'mainHand' },
            { name: 'Rapier of Dueling', damage: '1d8', rarity: 'UNCOMMON', effects: ['riposte_1'], slot: 'mainHand' },
            { name: 'Acid-Etched Falchion', damage: '1d8+1d4_acid', rarity: 'RARE', effects: ['corrosive_finish'], slot: 'mainHand' },
            { name: 'Flame Tongue', damage: '1d8+1d4_fire', rarity: 'RARE', effects: ['fire_damage_aura'], slot: 'mainHand' },
            { name: 'Frost Brand', damage: '1d8+1d4_cold', rarity: 'RARE', effects: ['chill_touch'], slot: 'mainHand' },
            { name: 'Blade of the Righteous', damage: '1d10+2', rarity: 'RARE', effects: ['blessed', 'divine_smite'], slot: 'mainHand' },
            { name: 'Shadowsteel Katana', damage: '2d4+2', rarity: 'RARE', effects: ['stealth_strike', 'poisoned_blade_1'], slot: 'mainHand' },
            { name: 'Vorpal Sword (Dull)', damage: '1d12', rarity: 'RARE', effects: ['keen_edge'], slot: 'mainHand' },
            { name: 'Kopesh of the Sands', damage: '1d8+1', rarity: 'RARE', effects: ['sand_vortex_on_crit'], slot: 'mainHand' },
            { name: 'Kingslayer Blade', damage: '1d10+1', rarity: 'RARE', effects: ['bonus_damage_vs_humanoids'], slot: 'mainHand' },
            { name: 'Demon Slayer', damage: '2d6+2_vs_demons', rarity: 'EPIC', effects: ['demon_bane', 'blessed'], slot: 'mainHand' },
            { name: 'Sunblade', damage: '2d8_radiant', rarity: 'EPIC', effects: ['radiant_burst', 'undead_destroyer'], slot: 'mainHand' },
            { name: 'Dragonfang Blade', damage: '1d12+1d6_fire', rarity: 'EPIC', effects: ['dragon_might', 'fear_aura_1'], slot: 'mainHand' },
            { name: 'Phase Blade', damage: '2d6_ethereal', rarity: 'EPIC', effects: ['phase_strike', 'ignore_shields'], slot: 'mainHand' },
            { name: 'Stormcaller\'s Greatsword', damage: '2d6+1d6_lightning', rarity: 'EPIC', effects: ['call_lightning_on_crit'], slot: 'mainHand' },
            { name: 'Soul Reaver (Weakened)', damage: '2d6+2_shadow', rarity: 'LEGENDARY', effects: ['soul_steal_1', 'cursed'], slot: 'mainHand' },
            { name: 'Excalibur Fragment', damage: '2d10+3', rarity: 'LEGENDARY', effects: ['holy_aura', 'leadership_boost'], slot: 'mainHand' },
            { name: 'Blade of the Inevitable', damage: '2d8_psychic', rarity: 'LEGENDARY', effects: ['mind_flay', 'cannot_be_disarmed'], slot: 'mainHand' },
            { name: 'Sword of a Thousand Truths', damage: '1d100', rarity: 'ARTIFACT', effects: ['reality_glitch', 'sunder_everything', 'single_use'], slot: 'mainHand' },
            { name: 'Galactic Razor', damage: '3d8_void', rarity: 'ARTIFACT', effects: ['void_singularity', 'cosmic_horror_aura', 'ignores_reality'], slot: 'mainHand' }
        ],
        staves: [
            { name: 'Gnarled Branch', damage: '1d4', rarity: 'COMMON', effects: ['minor_focus'], slot: 'mainHand' },
            { name: 'Apprentice Staff', damage: '1d4', rarity: 'COMMON', effects: ['spell_focus_1'], slot: 'mainHand' },
            { name: 'Hardwood Staff', damage: '1d6', rarity: 'COMMON', effects: ['mana_regen_tiny'], slot: 'mainHand' },
            { name: 'Iron-shod Quarterstaff', damage: '1d8', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Crystal Staff', damage: '1d6', rarity: 'UNCOMMON', effects: ['mana_boost_small', 'enchanted'], slot: 'mainHand' },
            { name: "Shaman's Rainstick", damage: '1d4', rarity: 'UNCOMMON', effects: ['empower_water_1', 'minor_healing_hymn'], slot: 'mainHand' },
            { name: 'Runed Quarterstaff', damage: '1d8', rarity: 'UNCOMMON', effects: ['empower_elemental_1'], slot: 'mainHand' },
            { name: 'Staff of Healing', damage: '1d4', rarity: 'UNCOMMON', effects: ['mend_wounds_1', 'blessed'], slot: 'mainHand' },
            { name: 'Staff of the Adder', damage: '1d6+1d4_poison', rarity: 'UNCOMMON', effects: ['poison_spray_1'], slot: 'mainHand' },
            { name: 'Staff of Power', damage: '1d8+1', rarity: 'RARE', effects: ['spell_power_1', 'enchanted', 'mana_shield'], slot: 'mainHand' },
            { name: 'Archmage\'s Cane', damage: '1d6+2', rarity: 'RARE', effects: ['arcane_potency', 'intelligence_1'], slot: 'mainHand' },
            { name: 'Staff of the Woodlands', damage: '1d6', rarity: 'RARE', effects: ['nature_attunement', 'summon_animal_1'], slot: 'mainHand' },
            { name: 'Staff of Charming', damage: '1d4', rarity: 'RARE', effects: ['charm_person_1'], slot: 'mainHand' },
            { name: 'Pyromancer\'s Staff', damage: '1d8+1d6_fire', rarity: 'RARE', effects: ['fire_mastery_1', 'fireball_1'], slot: 'mainHand' },
            { name: 'Void-Touched Rod', damage: '1d8+1d4_shadow', rarity: 'EPIC', effects: ['shadow_bolt', 'mana_drain_1'], slot: 'mainHand' },
            { name: 'Staff of Elemental Command', damage: '1d10', rarity: 'EPIC', effects: ['elemental_mastery', 'spell_penetration_1'], slot: 'mainHand' },
            { name: 'Staff of the Frost Lord', damage: '1d10+1d8_cold', rarity: 'EPIC', effects: ['cone_of_cold_1', 'freeze_solid_on_crit'], slot: 'mainHand' },
            { name: 'Staff of Abjuration', damage: '1d6', rarity: 'EPIC', effects: ['dispel_magic_1', 'spell_resistance_aura_medium'], slot: 'mainHand' },
            { name: 'Lichbone Staff', damage: '2d6_necrotic', rarity: 'LEGENDARY', effects: ['animate_dead_1', 'cursed', 'fear_aura_2'], slot: 'mainHand' },
            { name: 'Staff of the World-Tree', damage: '2d8_nature', rarity: 'LEGENDARY', effects: ['summon_treant', 'entangling_roots_aura', 'major_healing_burst'], slot: 'mainHand' },
            { name: 'Scepter of the Timeless', damage: '1d12_time', rarity: 'ARTIFACT', effects: ['time_stop_short', 'accelerate_person', 'age_target_1d20_years'], slot: 'mainHand' }
        ],
        axes: [
            { name: 'Woodcutter\'s Axe', damage: '1d6', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Iron Handaxe', damage: '1d6+1', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Stone Tomahawk', damage: '1d6', rarity: 'COMMON', effects: ['throwable'], slot: 'mainHand' },
            { name: 'Viking Axe', damage: '1d8', rarity: 'UNCOMMON', effects: ['shield_breaker'], slot: 'mainHand' },
            { name: 'Steel Battleaxe', damage: '1d8+1', rarity: 'UNCOMMON', effects: ['cleave_1'], slot: 'mainHand' },
            { name: 'Dwarven Beard Axe', damage: '1d10', rarity: 'UNCOMMON', effects: ['mighty_blow'], slot: 'mainHand' },
            { name: 'Goblin-Cleaver', damage: '1d8+1', rarity: 'UNCOMMON', effects: ['bonus_damage_vs_goblins'], slot: 'mainHand' },
            { name: 'Executioner\'s Axe', damage: '1d12', rarity: 'RARE', effects: ['execution_strike'], slot: 'mainHand' },
            { name: 'Axe of the Berserker', damage: '1d10+2', rarity: 'RARE', effects: ['berserk_on_crit'], slot: 'mainHand' },
            { name: 'Runic Greataxe', damage: '1d12+1', rarity: 'RARE', effects: ['elemental_burst_random'], slot: 'mainHand' },
            { name: 'Axe of Hurling', damage: '1d8+1', rarity: 'RARE', effects: ['throwable', 'returning_1'], slot: 'mainHand' },
            { name: 'Infernal Greataxe', damage: '2d6+1d4_fire', rarity: 'EPIC', effects: ['fire_cleave', 'cursed'], slot: 'mainHand' },
            { name: 'Frost Giant\'s Cleaver', damage: '2d8+1d4_cold', rarity: 'EPIC', effects: ['frost_aura', 'slow_on_hit'], slot: 'mainHand' },
            { name: 'Screaming Axe of the Depths', damage: '2d6+1d6_psychic', rarity: 'EPIC', effects: ['whispers_of_madness', 'fear_on_hit'], slot: 'mainHand' },
            { name: 'World-Splitter Axe', damage: '3d6', rarity: 'LEGENDARY', effects: ['earthquake_stomp', 'unbreakable'], slot: 'mainHand' },
            { name: 'Gorehowl, Axe of the Warchief', damage: '2d10+2', rarity: 'LEGENDARY', effects: ['furious_assault', 'intimidation_aura_large', 'warchief_challenge'], slot: 'mainHand' },
            { name: 'Axe of the Apocalypse', damage: '4d6_chaos', rarity: 'ARTIFACT', effects: ['sunder_realms', 'summon_meteor_shower', 'finality'], slot: 'mainHand' }
        ],
        daggers: [
            { name: 'Shiv', damage: '1d3', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Iron Dagger', damage: '1d4', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Bone Dirk', damage: '1d4-1', rarity: 'COMMON', effects: ['fragile'], slot: 'mainHand' },
            { name: 'Tanto', damage: '1d4', rarity: 'COMMON', effects: ['armor_piercing_tiny'], slot: 'mainHand' },
            { name: 'Steel Dirk', damage: '1d4+1', rarity: 'UNCOMMON', effects: ['quick_stab'], slot: 'mainHand' },
            { name: 'Assassin\'s Stiletto', damage: '1d6', rarity: 'UNCOMMON', effects: ['backstab_bonus_1'], slot: 'mainHand' },
            { name: 'Ceremonial Athame', damage: '1d4', rarity: 'UNCOMMON', effects: ['empower_rituals_1'], slot: 'mainHand' },
            { name: 'Gutting Knife', damage: '1d4+1', rarity: 'UNCOMMON', effects: ['bleeding_1'], slot: 'mainHand' },
            { name: 'Poisoned Kris', damage: '1d4+1d2_poison', rarity: 'RARE', effects: ['apply_poison_1'], slot: 'mainHand' },
            { name: 'Sacrificial Dagger', damage: '1d4+1', rarity: 'RARE', effects: ['blood_magic_affinity', 'cursed'], slot: 'mainHand' },
            { name: 'Mage-Killer\'s Poniard', damage: '1d4', rarity: 'RARE', effects: ['mana_burn_on_hit', 'silence_on_crit'], slot: 'mainHand' },
            { name: 'Dagger of Venom', damage: '1d4+1d6_poison', rarity: 'RARE', effects: ['potent_poison'], slot: 'mainHand' },
            { name: 'Shadowfang', damage: '1d6+1d4_shadow', rarity: 'EPIC', effects: ['shadow_step_ability', 'critical_bleed'], slot: 'mainHand' },
            { name: 'Heartseeker', damage: '1d8+2', rarity: 'EPIC', effects: ['ignore_armor_on_crit', 'true_strike_1'], slot: 'mainHand' },
            { name: 'Timeshifting Blade', damage: '1d6', rarity: 'EPIC', effects: ['haste_on_crit', 'delayed_damage_strike'], slot: 'mainHand' },
            { name: 'Dagger of the Empty Void', damage: '2d4', rarity: 'LEGENDARY', effects: ['banishment_chance', 'ethereal_strike'], slot: 'mainHand' },
            { name: 'Blade of Betrayal', damage: '1d10+5', rarity: 'LEGENDARY', effects: ['true_backstab', 'ignores_armor_from_behind', 'instant_kill_unaware'], slot: 'mainHand' },
            { name: 'Shard of Oblivion', damage: '3d4_void', rarity: 'ARTIFACT', effects: ['unmake_target', 'void_curse', 'attracts_the_void'], slot: 'mainHand' }
        ],
        bows: [
            { name: 'Shortbow', damage: '1d6', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Hunting Bow', damage: '1d6+1', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Crude Longbow', damage: '1d8-1', rarity: 'COMMON', effects: ['heavy_draw'], slot: 'mainHand' },
            { name: 'Elven Longbow', damage: '1d8', rarity: 'UNCOMMON', effects: ['increased_range'], slot: 'mainHand' },
            { name: 'Composite Bow', damage: '1d8+1', rarity: 'UNCOMMON', effects: ['piercing_shot_1'], slot: 'mainHand' },
            { name: 'Nomad\'s Horsebow', damage: '1d6', rarity: 'UNCOMMON', effects: ['no_penalty_mounted'], slot: 'mainHand' },
            { name: 'Bow of the Swift Arrow', damage: '1d6+1', rarity: 'RARE', effects: ['rapid_fire_1', 'dexterity_1'], slot: 'mainHand' },
            { name: 'Eagle Eye Longbow', damage: '1d10', rarity: 'RARE', effects: ['sniper_shot', 'perception_1'], slot: 'mainHand' },
            { name: 'Web-spinner Bow', damage: '1d8', rarity: 'RARE', effects: ['ensnaring_arrow'], slot: 'mainHand' },
            { name: 'Hornbow of the Centaur', damage: '1d10+1', rarity: 'RARE', effects: ['mighty_draw_bonus'], slot: 'mainHand' },
            { name: 'Storm Bow', damage: '1d8+1d6_lightning', rarity: 'EPIC', effects: ['chain_lightning_arrow', 'swift'], slot: 'mainHand' },
            { name: 'Phoenix Bow', damage: '1d10+1d6_fire', rarity: 'EPIC', effects: ['explosive_arrow', 'rebirth_arrow_1'], slot: 'mainHand' },
            { name: 'Soulstring Bow', damage: '1d8+1d8_necrotic', rarity: 'EPIC', effects: ['ghost_arrow', 'fear_on_kill'], slot: 'mainHand' },
            { name: 'Whisperwind, Bow of Shadows', damage: '2d6', rarity: 'LEGENDARY', effects: ['silent_shot', 'invisibility_on_kill', 'shadow_damage'], slot: 'mainHand' },
            { name: 'Bow of the Star-Hunter', damage: '2d8_radiant', rarity: 'LEGENDARY', effects: ['starfall_arrow', 'true_sight_while_drawn', 'never_miss_celestials'], slot: 'mainHand' },
            { name: 'Heartwood Bow of the First Elves', damage: '3d6_nature', rarity: 'ARTIFACT', effects: ['arrow_of_life', 'arrow_of_slaying', 'forest_meld'], slot: 'mainHand' }
        ],
        maces: [
            { name: 'Wooden Club', damage: '1d6', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Iron Mace', damage: '1d8', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Heavy Spiked Club', damage: '1d8', rarity: 'COMMON', effects: ['clumsy'], slot: 'mainHand' },
            { name: 'Steel Morningstar', damage: '1d8+1', rarity: 'UNCOMMON', effects: ['armor_denting'], slot: 'mainHand' },
            { name: 'Cleric\'s Holy Mace', damage: '1d6+1', rarity: 'UNCOMMON', effects: ['blessed', 'turn_undead_1'], slot: 'mainHand' },
            { name: 'Blacksmith\'s Maul (Small)', damage: '1d10', rarity: 'UNCOMMON', effects: ['heavy_impact'], slot: 'mainHand' },
            { name: 'Flanged Mace', damage: '1d10', rarity: 'RARE', effects: ['stunning_blow_1'], slot: 'mainHand' },
            { name: 'Mace of Disruption', damage: '1d8+2_vs_undead', rarity: 'RARE', effects: ['disrupt_undead', 'radiant_damage'], slot: 'mainHand' },
            { name: 'Mace of the Inquisitor', damage: '1d8+1', rarity: 'RARE', effects: ['smite_heretic_1', 'intimidation_1'], slot: 'mainHand' },
            { name: 'Earthshaker Maul', damage: '2d6', rarity: 'EPIC', effects: ['earth_tremor', 'strength_1'], slot: 'mainHand' },
            { name: 'Skullcrusher', damage: '1d12+2', rarity: 'EPIC', effects: ['brutal_critical', 'fear_on_crit'], slot: 'mainHand' },
            { name: 'Void-touched Star', damage: '1d10+1d8_shadow', rarity: 'EPIC', effects: ['shadow_nova_on_crit', 'cursed'], slot: 'mainHand' },
            { name: 'Mace of the Heavens', damage: '2d8_radiant', rarity: 'LEGENDARY', effects: ['divine_judgment', 'aoe_heal_on_smite'], slot: 'mainHand' },
            { name: 'The Unstoppable Force', damage: '2d12', rarity: 'LEGENDARY', effects: ['ignore_armor', 'knockback_large', 'shatter_weapon_on_crit'], slot: 'mainHand' },
            { name: 'World-Breaker\'s Maul', damage: '3d8_force', rarity: 'ARTIFACT', effects: ['sunder_structure', 'ripple_of_destruction', 'permanent_slow_aura'], slot: 'mainHand' }
        ],
        hammers: [
            { name: 'Smith\'s Hammer', damage: '1d6', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Light Hammer', damage: '1d4', rarity: 'COMMON', effects: ['throwable'], slot: 'mainHand' },
            { name: 'Spiked Hammer', damage: '1d6', rarity: 'COMMON', effects: ['piercing_blow'], slot: 'mainHand' },
            { name: 'Warhammer', damage: '1d10', rarity: 'UNCOMMON', effects: ['sunder_armor_1'], slot: 'mainHand' },
            { name: 'Dwarven Throwing Hammer', damage: '1d6+1', rarity: 'UNCOMMON', effects: ['returning_1', 'mighty_throw'], slot: 'mainHand' },
            { name: 'Claw Hammer', damage: '1d4', rarity: 'UNCOMMON', effects: ['disarm_bonus'], slot: 'mainHand' },
            { name: 'Meteor Hammer', damage: '1d12', rarity: 'RARE', effects: ['impact_tremor', 'knockback_1'], slot: 'mainHand' },
            { name: 'Hammer of Righteous Fury', damage: '1d10+1d4_radiant', rarity: 'RARE', effects: ['blessed_weapon', 'smite_evil_1'], slot: 'mainHand' },
            { name: 'Stoneforger\'s Hammer', damage: '1d10', rarity: 'RARE', effects: ['bonus_damage_vs_constructs', 'earthbind_on_crit'], slot: 'mainHand' },
            { name: 'Thunderstrike Hammer', damage: '2d6+1d6_lightning', rarity: 'EPIC', effects: ['call_lightning_1', 'shockwave_on_slam'], slot: 'mainHand' },
            { name: 'Forgefire Maul', damage: '2d8+1d6_fire', rarity: 'EPIC', effects: ['molten_core', 'heat_aura'], slot: 'mainHand' },
            { name: 'Doomhammer', damage: '2d8_elemental', rarity: 'EPIC', effects: ['elemental_fury', 'spirit_link'], slot: 'mainHand' },
            { name: 'Mjolnir\'s Echo', damage: '3d6_lightning', rarity: 'LEGENDARY', effects: ['chain_lightning_storm', 'flight_brief', 'worthy_only'], slot: 'mainHand' },
            { name: 'Hammer of the Creator', damage: '2d12_force', rarity: 'LEGENDARY', effects: ['unmake_construct', 'master_craftsman_aura', 'build_structure_instantly'], slot: 'mainHand' },
            { name: 'Ragnarok\'s Anvil', damage: '4d8_fire', rarity: 'ARTIFACT', effects: ['world_ender_strike', 'summons_fire_elementals', 'melts_artifacts'], slot: 'mainHand' }
        ],
        spears: [
            { name: 'Pointed Stick', damage: '1d4', rarity: 'COMMON', effects: [], slot: 'mainHand' },
            { name: 'Hunting Spear', damage: '1d6', rarity: 'COMMON', effects: ['reach'], slot: 'mainHand' },
            { name: 'Fisherman\'s Trident', damage: '1d6', rarity: 'COMMON', effects: ['bonus_vs_aquatic'], slot: 'mainHand' },
            { name: 'Iron Spear', damage: '1d8', rarity: 'UNCOMMON', effects: ['reach', 'brace'], slot: 'mainHand' },
            { name: 'Harpoon', damage: '1d6+1', rarity: 'UNCOMMON', effects: ['barbed', 'drag_target'], slot: 'mainHand' },
            { name: 'Shortspear', damage: '1d6', rarity: 'UNCOMMON', effects: ['throwable', 'quick_thrust'], slot: 'mainHand' },
            { name: 'Pike of the Legion', damage: '1d10', rarity: 'RARE', effects: ['reach', 'phalanx_formation_bonus'], slot: 'mainHand' },
            { name: 'Spear of Impaling', damage: '1d8+2', rarity: 'RARE', effects: ['impale', 'bleeding_2'], slot: 'mainHand' },
            { name: 'Lightning Javelin', damage: '1d6+1d6_lightning', rarity: 'RARE', effects: ['throwable', 'shocking_burst'], slot: 'mainHand' },
            { name: 'Windcarver Javelin', damage: '1d6+1', rarity: 'EPIC', effects: ['aero_slice', 'returning_2', 'swift'], slot: 'mainHand' },
            { name: 'Dragonbone Lance', damage: '1d12+2', rarity: 'EPIC', effects: ['mounted_charge_bonus', 'dragon_slaying_edge'], slot: 'mainHand' },
            { name: 'Spear of the Sun', damage: '1d8+1d8_radiant', rarity: 'EPIC', effects: ['solar_flare', 'blinding_strike'], slot: 'mainHand' },
            { name: 'Gungnir\'s Whisper', damage: '2d8', rarity: 'LEGENDARY', effects: ['never_miss', 'true_strike_aura', 'divine_reach'], slot: 'mainHand' },
            { name: 'Blood-Drinker\'s Pike', damage: '2d6', rarity: 'LEGENDARY', effects: ['vampiric_strike', 'life_steal_aura_small', 'reach'], slot: 'mainHand' },
            { name: 'Spear of Destiny', damage: '3d6_holy', rarity: 'ARTIFACT', effects: ['fated_strike', 'rewrite_history_minor', 'unavoidable_wound'], slot: 'mainHand' }
        ],
        crossbows: [
            { name: 'Light Crossbow', damage: '1d8', rarity: 'COMMON', effects: ['reload_1'], slot: 'mainHand' },
            { name: 'Hand Crossbow', damage: '1d6', rarity: 'COMMON', effects: ['reload_1', 'can_be_dual_wielded'], slot: 'mainHand' },
            { name: 'Heavy Crossbow', damage: '1d10', rarity: 'COMMON', effects: ['reload_2', 'armor_piercing_1'], slot: 'mainHand' },
            { name: 'Marksman\'s Crossbow', damage: '1d8+1', rarity: 'UNCOMMON', effects: ['reload_1', 'increased_crit_chance_1'], slot: 'mainHand' },
            { name: 'Repeating Crossbow', damage: '1d8', rarity: 'UNCOMMON', effects: ['no_reload_5_shots'], slot: 'mainHand' },
            { name: 'Poisoner\'s Hand Crossbow', damage: '1d6', rarity: 'RARE', effects: ['apply_poison_on_bolt', 'quick_shot'], slot: 'mainHand' },
            { name: 'Siege-Breaker Arbalest', damage: '1d12', rarity: 'RARE', effects: ['reload_3', 'shield_splinter', 'bonus_damage_vs_structures'], slot: 'mainHand' },
            { name: 'Gnomish Auto-Crossbow', damage: '2d4', rarity: 'EPIC', effects: ['fully_automatic', 'unreliable', 'wild_magic_on_jam'], slot: 'mainHand' },
            { name: 'Shadow-piercer', damage: '1d10+1d6_shadow', rarity: 'EPIC', effects: ['reload_1', 'ignores_invisibility', 'shadow_bolt'], slot: 'mainHand' },
            { name: 'Heartseeker Sniper', damage: '2d8+2', rarity: 'LEGENDARY', effects: ['reload_2', 'guaranteed_crit_vs_unaware', 'long_range_expert'], slot: 'mainHand' }
        ],
        polearms: [
            { name: 'Simple Halberd', damage: '1d10', rarity: 'COMMON', effects: ['reach', 'brace'], slot: 'twoHand' },
            { name: 'Glaive', damage: '1d10', rarity: 'COMMON', effects: ['reach', 'sweeping_strike'], slot: 'twoHand' },
            { name: 'Billhook', damage: '1d8', rarity: 'UNCOMMON', effects: ['reach', 'dismount_rider'], slot: 'twoHand' },
            { name: 'Lucerne Hammer', damage: '2d4', rarity: 'UNCOMMON', effects: ['reach', 'bludgeoning_and_piercing'], slot: 'twoHand' },
            { name: 'Reaper\'s Scythe', damage: '2d4+1', rarity: 'RARE', effects: ['cleave_2', 'fear_on_crit'], slot: 'twoHand' },
            { name: 'Dragon-tail Naginata', damage: '1d12', rarity: 'RARE', effects: ['reach', 'dragon_fire_sweep'], slot: 'twoHand' },
            { name: 'Whirlwind Voulge', damage: '2d6', rarity: 'EPIC', effects: ['cyclone_attack', 'pulls_enemies_in'], slot: 'twoHand' },
            { name: 'Celestial Halberd', damage: '2d8_radiant', rarity: 'EPIC', effects: ['reach', 'divine_reach', 'smite_undead_aura'], slot: 'twoHand' },
            { name: 'Graviton Glaive', damage: '2d10_force', rarity: 'LEGENDARY', effects: ['gravity_well', 'manipulate_weight', 'reach'], slot: 'twoHand' }
        ],
        fistWeapons: [
            { name: 'Knuckle Dusters', damage: '1d4', rarity: 'COMMON', effects: ['unarmed_synergy'], slot: 'mainHand' },
            { name: 'Bladed Gauntlet', damage: '1d6', rarity: 'COMMON', effects: ['bleed_on_crit'], slot: 'mainHand' },
            { name: 'Spiked Cestus', damage: '1d6', rarity: 'UNCOMMON', effects: ['armor_denting_punch'], slot: 'mainHand' },
            { name: 'Tiger Claws', damage: '1d8', rarity: 'UNCOMMON', effects: ['flurry_of_blows_1'], slot: 'mainHand' },
            { name: 'Power Fist (Steam-powered)', damage: '1d10', rarity: 'RARE', effects: ['knockback_punch', 'slow_swing'], slot: 'mainHand' },
            { name: 'Dragon-Knuckle Gauntlets', damage: '1d6+1d4_fire', rarity: 'RARE', effects: ['burning_fist', 'fire_resistance_small'], slot: 'mainHand' },
            { name: 'Void-Touched Claws', damage: '1d8+1d4_shadow', rarity: 'EPIC', effects: ['shadow_slash', 'life_drain_punch'], slot: 'mainHand' },
            { name: 'Fists of the Storm', damage: '1d8+1d6_lightning', rarity: 'EPIC', effects: ['thunderous_blow', 'chain_lightning_on_combo'], slot: 'mainHand' },
            { name: 'Hands of the Divine', damage: '2d6_radiant', rarity: 'LEGENDARY', effects: ['healing_punch', 'judgement_fist', 'resurrect_on_ko_punch'], slot: 'mainHand' }
        ]
    },
    armor: {
        helmets: [
            { name: 'Leather Cap', armor: 1, rarity: 'COMMON', effects: [], slot: 'head' },
            { name: 'Iron Helm', armor: 2, rarity: 'COMMON', effects: [], slot: 'head' },
            { name: 'Bronze Circlet', armor: 0, rarity: 'COMMON', effects: ['mana_boost_tiny'], slot: 'head' },
            { name: 'Horned Barbarian Helm', armor: 2, rarity: 'UNCOMMON', effects: ['intimidation_tiny'], slot: 'head' },
            { name: 'Steel Fullhelm', armor: 3, rarity: 'UNCOMMON', effects: ['head_protection_1'], slot: 'head' },
            { name: 'Acolyte\'s Hood', armor: 1, rarity: 'UNCOMMON', effects: ['spell_focus_1'], slot: 'head' },
            { name: 'Guardian\'s Bascinet', armor: 4, rarity: 'RARE', effects: ['fortified', 'fear_resistance_1'], slot: 'head' },
            { name: 'Helm of Keen Sight', armor: 2, rarity: 'RARE', effects: ['perception_1', 'trap_detection_bonus'], slot: 'head' },
            { name: 'Minotaur Skull Helm', armor: 3, rarity: 'RARE', effects: ['strength_1', 'gore_attack'], slot: 'head' },
            { name: 'Dragonscale Coif', armor: 5, rarity: 'EPIC', effects: ['fire_resistance_small', 'intimidation_1'], slot: 'head' },
            { name: 'Mind-Shield Circlet', armor: 2, rarity: 'EPIC', effects: ['psychic_resistance_medium', 'thought_shield'], slot: 'head' },
            { name: 'Helm of the Undying', armor: 4, rarity: 'EPIC', effects: ['necromancy_resistance', 'endure_death_once'], slot: 'head' },
            { name: 'Crown of Wisdom', armor: 2, rarity: 'LEGENDARY', effects: ['intelligence_2', 'mana_regen_1', 'true_sight'], slot: 'head' },
            { name: 'Helm of Command', armor: 6, rarity: 'LEGENDARY', effects: ['leadership_aura', 'rally_allies', 'unbreakable_will'], slot: 'head' },
            { name: 'Crown of the Mad King', armor: 3, rarity: 'ARTIFACT', effects: ['dominate_lesser_beings', 'whispers_of_madness', 'cursed_with_paranoia'], slot: 'head' }
        ],
        chestplates: [
            { name: 'Padded Tunic', armor: 2, rarity: 'COMMON', effects: [], slot: 'chest' },
            { name: 'Chainmail Vest', armor: 4, rarity: 'COMMON', effects: [], slot: 'chest' },
            { name: 'Studded Leather Armor', armor: 3, rarity: 'COMMON', effects: [], slot: 'chest' },
            { name: 'Apprentice Robes', armor: 1, rarity: 'COMMON', effects: ['mana_regen_tiny'], slot: 'chest' },
            { name: 'Steel Breastplate', armor: 6, rarity: 'UNCOMMON', effects: ['vitality_1'], slot: 'chest' },
            { name: 'Elven Chain Shirt', armor: 5, rarity: 'UNCOMMON', effects: ['no_stealth_disadvantage'], slot: 'chest' },
            { name: 'Shaman\'s Raiment', armor: 3, rarity: 'UNCOMMON', effects: ['nature_affinity', 'spirit_ward'], slot: 'chest' },
            { name: 'Knight\'s Plate Armor', armor: 8, rarity: 'RARE', effects: ['damageReduction_flat_1', 'constitution_1'], slot: 'chest' },
            { name: 'Robe of the Archmagi (Faded)', armor: 4, rarity: 'RARE', effects: ['spell_power_1', 'magic_resistance_small'], slot: 'chest' },
            { name: 'Husk of the Thorny Guardian', armor: 7, rarity: 'RARE', effects: ['damage_thorns_small', 'poison_resistance_small'], slot: 'chest' },
            { name: 'Shadowweave Vestments', armor: 5, rarity: 'EPIC', effects: ['stealth_1', 'evasion_1', 'shadow_resistance_small'], slot: 'chest' },
            { name: 'Dragonscale Platemail', armor: 9, rarity: 'EPIC', effects: ['fire_resistance_medium', 'fear_aura_1'], slot: 'chest' },
            { name: 'Robe of the Void', armor: 6, rarity: 'EPIC', effects: ['shadow_bolt_empower', 'mana_drain_aura'], slot: 'chest' },
            { name: 'Celestial Plate', armor: 10, rarity: 'LEGENDARY', effects: ['blessed', 'healing_aura_small', 'holy_resistance_medium'], slot: 'chest' },
            { name: 'Armor of the Unmovable Object', armor: 12, rarity: 'LEGENDARY', effects: ['immovable', 'damage_reduction_large', 'cannot_be_teleported'], slot: 'chest' },
            { name: 'Carapace of the Old Gods', armor: 11, rarity: 'ARTIFACT', effects: ['psychic_barrier', 'corrupting_presence', 'summon_tentacle_swarm'], slot: 'chest' }
        ],
        gauntlets: [
            { name: 'Cloth Wraps', armor: 0, rarity: 'COMMON', effects: [], slot: 'hands' },
            { name: 'Leather Gloves', armor: 1, rarity: 'COMMON', effects: [], slot: 'hands' },
            { name: 'Iron Gauntlets', armor: 2, rarity: 'UNCOMMON', effects: ['strength_tiny'], slot: 'hands' },
            { name: 'Archer\'s Gloves', armor: 1, rarity: 'UNCOMMON', effects: ['bow_draw_speed_increase'], slot: 'hands' },
            { name: 'Gauntlets of Dexterity', armor: 2, rarity: 'RARE', effects: ['dexterity_1'], slot: 'hands' },
            { name: 'Gauntlets of Ogre Power', armor: 2, rarity: 'RARE', effects: ['strength_1'], slot: 'hands' },
            { name: 'Gauntlets of the Forge', armor: 3, rarity: 'RARE', effects: ['fire_resistance_small', 'crafting_smithing_bonus'], slot: 'hands' },
            { name: 'Executioner\'s Mitts', armor: 3, rarity: 'EPIC', effects: ['critical_damage_boost', 'bleed_on_crit'], slot: 'hands' },
            { name: 'Gloves of Spell-Stealing', armor: 2, rarity: 'EPIC', effects: ['absorb_spell_charge_on_hit', 'mana_leech'], slot: 'hands' },
            { name: 'Fists of the Titan', armor: 4, rarity: 'LEGENDARY', effects: ['strength_3', 'unarmed_damage_large', 'earthquake_punch'], slot: 'hands' },
            { name: 'Hands of the Creator', armor: 3, rarity: 'LEGENDARY', effects: ['crafting_mastery', 'transmute_item_minor'], slot: 'hands' },
            { name: 'Gauntlets of Infinite Reach', armor: 2, rarity: 'ARTIFACT', effects: ['melee_attacks_are_ranged', 'telekinetic_grab', 'phasing_punches'], slot: 'hands' }
        ],
        sleeves: [ // Also mapping to 'hands' slot
            { name: 'Cloth Sleeves', armor: 0, rarity: 'COMMON', effects: [], slot: 'hands' },
            { name: 'Leather Armguards', armor: 1, rarity: 'COMMON', effects: [], slot: 'hands' },
            { name: 'Iron Vambraces', armor: 2, rarity: 'UNCOMMON', effects: ['dexterity_tiny'], slot: 'hands' },
            { name: 'Bracers of Archery', armor: 1, rarity: 'UNCOMMON', effects: ['bow_damage_bonus_1'], slot: 'hands' },
            { name: 'Sleeves of the Shadow Dancer', armor: 2, rarity: 'RARE', effects: ['stealth_1', 'evasion_1'], slot: 'hands' },
            { name: 'Bracers of Defense +2', armor: 2, rarity: 'RARE', effects: ['armor_bonus_2_if_no_armor'], slot: 'hands' },
            { name: 'Vambraces of the Warden', armor: 3, rarity: 'RARE', effects: ['shield_bash_bonus', 'constitution_1'], slot: 'hands' },
            { name: 'Bracers of the Storm', armor: 3, rarity: 'EPIC', effects: ['lightning_resistance_medium', 'shockwave_punch'], slot: 'hands' },
            { name: 'Wyrm-hide Armguards', armor: 4, rarity: 'EPIC', effects: ['elemental_resistance_all_small', 'dragon_kin_respect'], slot: 'hands' },
            { name: 'Bands of Absolute Power', armor: 3, rarity: 'LEGENDARY', effects: ['spell_power_3', 'arcane_overload_ability', 'mana_shield_strong'], slot: 'hands' },
            { name: 'Timelord\'s Cuffs', armor: 2, rarity: 'ARTIFACT', effects: ['local_time_acceleration', 'rewind_minor_mistake_once', 'paradox_ward'], slot: 'hands' }
        ],
        leggings: [
            { name: 'Cloth Leggings', armor: 1, rarity: 'COMMON', effects: [], slot: 'legs' },
            { name: 'Leather Pants', armor: 2, rarity: 'COMMON', effects: [], slot: 'legs' },
            { name: 'Chainmail Chausses', armor: 3, rarity: 'UNCOMMON', effects: ['movement_speed_penalty_tiny'], slot: 'legs' },
            { name: 'Steel Greaves', armor: 4, rarity: 'UNCOMMON', effects: ['movement_speed_penalty_tiny', 'protection_1'], slot: 'legs' },
            { name: 'Rogue\'s Padded Leggings', armor: 2, rarity: 'UNCOMMON', effects: ['stealth_tiny', 'agility_tiny'], slot: 'legs' },
            { name: 'Leggings of the Swift', armor: 2, rarity: 'RARE', effects: ['swift', 'stamina_regen_small'], slot: 'legs' },
            { name: 'Plated Greaves', armor: 5, rarity: 'RARE', effects: ['movement_speed_penalty_small', 'constitution_1'], slot: 'legs' },
            { name: 'Legguards of the Mountain King', armor: 6, rarity: 'RARE', effects: ['unmovable_stance', 'stone_resistance'], slot: 'legs' },
            { name: 'Shadow Stalker\'s Leggings', armor: 3, rarity: 'EPIC', effects: ['silent_movement', 'stealth_1'], slot: 'legs' },
            { name: 'Flame-Wreathed Legplates', armor: 6, rarity: 'EPIC', effects: ['fire_trail', 'fire_resistance_medium'], slot: 'legs' },
            { name: 'Leggings of the Celestial Host', armor: 7, rarity: 'LEGENDARY', effects: ['angelic_grace', 'flight_brief', 'holy_ground'], slot: 'legs' },
            { name: 'Greaves of the Void Walker', armor: 4, rarity: 'LEGENDARY', effects: ['teleport_short_range_at_will', 'shadow_meld', 'void_step'], slot: 'legs' }
        ],
        boots: [
            { name: 'Worn Sandals', armor: 0, rarity: 'COMMON', effects: [], slot: 'feet' },
            { name: 'Leather Boots', armor: 1, rarity: 'COMMON', effects: [], slot: 'feet' },
            { name: 'Iron-toed Boots', armor: 2, rarity: 'COMMON', effects: ['kick_damage_bonus'], slot: 'feet' },
            { name: 'Boots of Elvenkind', armor: 1, rarity: 'UNCOMMON', effects: ['silent_steps'], slot: 'feet' },
            { name: 'Steel Greaves', armor: 2, rarity: 'UNCOMMON', effects: ['movement_speed_penalty_tiny', 'protection_1'], slot: 'feet' },
            { name: 'Boots of the Mountaineer', armor: 1, rarity: 'UNCOMMON', effects: ['ignore_difficult_terrain_rock'], slot: 'feet' },
            { name: 'Boots of Striding', armor: 1, rarity: 'RARE', effects: ['swift', 'stamina_regen_small'], slot: 'feet' },
            { name: 'Winged Sandals', armor: 1, rarity: 'RARE', effects: ['feather_fall_passive', 'jump_height_increase'], slot: 'feet' },
            { name: 'Boots of Speed', armor: 2, rarity: 'RARE', effects: ['haste_burst_ability'], slot: 'feet' },
            { name: 'Shadow Stalker\'s Boots', armor: 2, rarity: 'EPIC', effects: ['silent_movement', 'stealth_1'], slot: 'feet' },
            { name: 'Frost-walker Treads', armor: 3, rarity: 'EPIC', effects: ['walk_on_water_frozen', 'cold_resistance_medium'], slot: 'feet' },
            { name: 'Boots of the Seven Leagues', armor: 3, rarity: 'LEGENDARY', effects: ['teleport_short_range', 'movement_speed_large'], slot: 'feet' },
            { name: 'Stompers of the Colossus', armor: 5, rarity: 'LEGENDARY', effects: ['earthquake_stomp', 'unbreakable', 'grow_size_briefly'], slot: 'feet' },
            { name: 'Footpads of the Wanderer', armor: 2, rarity: 'ARTIFACT', effects: ['plane_walk', 'never_get_lost', 'ignore_all_terrain'], slot: 'feet' }
        ],
        shields: [
            { name: 'Wooden Buckler', armor: 1, block_chance: 0.1, rarity: 'COMMON', effects: [], slot: 'offHand' },
            { name: 'Iron Round Shield', armor: 2, block_chance: 0.15, rarity: 'COMMON', effects: [], slot: 'offHand' },
            { name: 'Spiked Shield', armor: 2, block_chance: 0.1, rarity: 'UNCOMMON', effects: ['shield_spike_damage'], slot: 'offHand' },
            { name: 'Steel Kite Shield', armor: 3, block_chance: 0.2, rarity: 'UNCOMMON', effects: ['shield_bash_1'], slot: 'offHand' },
            { name: 'Elven Leaf-Guard Shield', armor: 2, block_chance: 0.2, rarity: 'UNCOMMON', effects: ['arrow_deflection_small'], slot: 'offHand' },
            { name: 'Tower Shield of the Guardian', armor: 5, block_chance: 0.25, rarity: 'RARE', effects: ['immovable', 'fortified'], slot: 'offHand' },
            { name: 'Spell-Reflecting Shield', armor: 3, block_chance: 0.15, rarity: 'RARE', effects: ['reflect_spell_chance_small'], slot: 'offHand' },
            { name: 'Lionheart Shield', armor: 4, block_chance: 0.2, rarity: 'RARE', effects: ['fear_resistance_aura_small', 'leadership_tiny'], slot: 'offHand' },
            { name: 'Dragonscale Shield', armor: 4, block_chance: 0.2, rarity: 'EPIC', effects: ['fire_resistance_medium', 'spell_deflection_small'], slot: 'offHand' },
            { name: 'Mind-Wall Bulwark', armor: 4, block_chance: 0.2, rarity: 'EPIC', effects: ['psychic_resistance_large', 'reflect_psychic_damage'], slot: 'offHand' },
            { name: 'Aegis of the Divine', armor: 6, block_chance: 0.3, rarity: 'LEGENDARY', effects: ['holy_barrier', 'reflect_projectiles_chance', 'blessed'], slot: 'offHand' },
            { name: 'Shield of the Labyrinth', armor: 5, block_chance: 0.25, rarity: 'LEGENDARY', effects: ['confuse_attacker_on_block', 'teleport_attacker_short_range_on_parry'], slot: 'offHand' },
            { name: 'The Unbreakable Wall', armor: 8, block_chance: 0.4, rarity: 'ARTIFACT', effects: ['immunity_to_critical_hits', 'negate_all_knockback', 'taunt_aura_massive'], slot: 'offHand' }
        ],
        cloaks: [
            { name: 'Traveler\'s Cloak', armor: 0, rarity: 'COMMON', effects: ['weather_resistance_minor'], slot: 'back' },
            { name: 'Padded Cloak', armor: 1, rarity: 'COMMON', effects: [], slot: 'back' },
            { name: 'Cloak of Elvenkind', armor: 0, rarity: 'UNCOMMON', effects: ['stealth_in_forests_1'], slot: 'back' },
            { name: 'Cloak of Protection +1', armor: 1, rarity: 'UNCOMMON', effects: ['saving_throw_bonus_1'], slot: 'back' },
            { name: 'Mantle of the Spire', armor: 0, rarity: 'RARE', effects: ['mana_regen_small', 'intelligence_tiny'], slot: 'back' },
            { name: 'Cloak of the Bat', armor: 1, rarity: 'RARE', effects: ['glide', 'echolocation_brief'], slot: 'back' },
            { name: 'Cloak of Displacement', armor: 1, rarity: 'EPIC', effects: ['displace_self_image', 'avoid_first_hit'], slot: 'back' },
            { name: 'Mantle of the Dragon Queen', armor: 2, rarity: 'EPIC', effects: ['elemental_resistance_all_small', 'draconic_presence'], slot: 'back' },
            { name: 'Cloak of Invisibility', armor: 0, rarity: 'LEGENDARY', effects: ['true_invisibility_at_will', 'muffled_sound'], slot: 'back' },
            { name: 'Shroud of Eternal Night', armor: 1, rarity: 'ARTIFACT', effects: ['become_shadow', 'control_darkness', 'vampiric_aura'], slot: 'back' }
        ]
    },
    magical: {
        scrolls: [
            { name: 'Scroll of Minor Healing', rarity: 'COMMON', effect: 'heal_light', spell: { type: 'healing', amount: 10 } },
            { name: 'Scroll of Light', rarity: 'COMMON', effect: 'cast_light', spell: { type: 'utility', effect: 'light_aura', duration: 300 } },
            { name: 'Scroll of Mage Armor', rarity: 'COMMON', effect: 'cast_mage_armor', spell: { type: 'buff', stat: 'armor', amount: 3, duration: 600 } },
            { name: 'Scroll of Burning Hands', rarity: 'COMMON', effect: 'cast_burning_hands', spell: { type: 'damage', damageType: 'fire', amount: '2d6' } },
            { name: 'Scroll of Grease', rarity: 'COMMON', effect: 'cast_grease', spell: { type: 'control', effect: 'create_slick_surface', duration: 60 } },
            { name: 'Scroll of Feather Fall', rarity: 'COMMON', effect: 'cast_feather_fall', spell: { type: 'buff', status: 'feather_fall', duration: 60 } },
            { name: 'Scroll of Fireball', rarity: 'UNCOMMON', effect: 'fireball', spell: { type: 'aoe_damage', damageType: 'fire', amount: '6d6', radius: 15 } },
            { name: 'Scroll of Invisibility', rarity: 'UNCOMMON', effect: 'cast_invisibility', spell: { type: 'buff', effect: 'invisibility', duration: 60 } },
            { name: 'Scroll of Detect Magic', rarity: 'UNCOMMON', effect: 'detect_magic', spell: { type: 'utility', effect: 'detect_magic_aura', duration: 1200 } },
            { name: 'Scroll of Mending', rarity: 'UNCOMMON', effect: 'repair_item', spell: { type: 'utility', action: 'repair_low_durability_item' }},
            { name: 'Scroll of Spider Climb', rarity: 'UNCOMMON', effect: 'cast_spider_climb', spell: { type: 'buff', status: 'can_climb_walls', duration: 300 } },
            { name: 'Scroll of Knock', rarity: 'UNCOMMON', effect: 'open_lock', spell: { type: 'utility', action: 'open_mundane_lock' } },
            { name: 'Scroll of Teleportation', rarity: 'RARE', effect: 'teleport_short', spell: { type: 'utility', action: 'teleport_to_known_location', range: 'short' } },
            { name: 'Scroll of Haste', rarity: 'RARE', effect: 'cast_haste', spell: { type: 'buff', status: 'hasted', duration: 30 } },
            { name: 'Scroll of Summon Swarm', rarity: 'RARE', effect: 'summon_swarm', spell: { type: 'summon', creature: 'insect_swarm', duration: 60 }},
            { name: 'Scroll of Remove Curse', rarity: 'RARE', effect: 'remove_curse', spell: { type: 'utility', action: 'dispel_curse_moderate' }},
            { name: 'Scroll of Lightning Bolt', rarity: 'RARE', effect: 'cast_lightning_bolt', spell: { type: 'damage', damageType: 'lightning', amount: '8d6', shape: 'line' } },
            { name: 'Scroll of Animate Dead (Minor)', rarity: 'RARE', effect: 'animate_dead', spell: { type: 'summon', creature: 'zombie', count: '1d4' } },
            { name: 'Scroll of Chain Lightning', rarity: 'EPIC', effect: 'chain_lightning', spell: { type: 'aoe_damage', damageType: 'lightning', amount: '10d8', targets: 4 } },
            { name: 'Scroll of Planar Shift', rarity: 'EPIC', effect: 'plane_shift', spell: { type: 'utility', action: 'travel_to_another_plane' } },
            { name: 'Scroll of Disintegrate', rarity: 'EPIC', effect: 'disintegrate', spell: { type: 'damage', damageType: 'force', amount: '10d6+40', effect: 'turn_to_dust' } },
            { name: 'Scroll of Time Stop', rarity: 'LEGENDARY', effect: 'time_stop', spell: { type: 'utility', effect: 'time_stop_field', duration: 10 } },
            { name: 'Scroll of True Resurrection', rarity: 'LEGENDARY', effect: 'true_resurrection', spell: { type: 'healing', action: 'resurrect_target_full' } },
            { name: 'Scroll of Imprisonment', rarity: 'LEGENDARY', effect: 'imprisonment', spell: { type: 'control', effect: 'trap_creature_in_magical_prison_permanently' } },
            { name: 'Scroll of Wish (Limited)', rarity: 'ARTIFACT', effect: 'limited_wish', spell: { type: 'utility', action: 'fulfill_minor_wish' } },
            { name: 'Scroll of Gate', rarity: 'ARTIFACT', effect: 'open_gate', spell: { type: 'utility', action: 'open_portal_to_plane', requires_focus: true }}
        ],
        potions: [
            { name: 'Minor Health Potion', rarity: 'COMMON', effect: { type: 'heal', amount: 25 } },
            { name: 'Lesser Mana Potion', rarity: 'COMMON', effect: { type: 'mana', amount: 20 } },
            { name: 'Potion of Water Breathing', rarity: 'COMMON', effect: { type: 'buff', status: 'water_breathing', duration: 600 } },
            { name: 'Antidote (Weak)', rarity: 'COMMON', effect: { type: 'cure', status: 'poisoned', strength: 'weak' } },
            { name: 'Slippery Draught', rarity: 'COMMON', effect: { type: 'buff', status: 'freedom_of_movement_minor', duration: 60 } },
            { name: 'Flask of Oil', rarity: 'COMMON', effect: { type: 'utility', action: 'create_flammable_puddle' } },
            { name: 'Strength Elixir', rarity: 'UNCOMMON', effect: { type: 'buff', stat: 'strength', amount: 2, duration: 300 } },
            { name: 'Potion of Heroism', rarity: 'UNCOMMON', effect: { type: 'buff', status: 'blessed', amount: 1, duration: 180 } },
            { name: 'Draught of Swiftness', rarity: 'UNCOMMON', effect: { type: 'buff', status: 'swift', duration: 120 } },
            { name: 'Oil of Sharpness', rarity: 'UNCOMMON', effect: { type: 'weapon_buff', property: 'damage_bonus', amount: 2, duration: 300 }},
            { name: 'Potion of Climbing', rarity: 'UNCOMMON', effect: { type: 'buff', status: 'spider_climb', duration: 300 } },
            { name: 'Potion of Animal Friendship', rarity: 'UNCOMMON', effect: { type: 'charm', target_type: 'beast', duration: 1800 } },
            { name: 'Potion of Invisibility', rarity: 'RARE', effect: { type: 'status', effect: 'ethereal', duration: 60 } },
            { name: 'Elixir of Fortitude', rarity: 'RARE', effect: { type: 'buff', status: 'fortified', duration: 600 } },
            { name: 'Potion of Giant Strength', rarity: 'RARE', effect: { type: 'buff', stat: 'strength', amount: 4, duration: 60 } },
            { name: 'Philter of Love', rarity: 'RARE', effect: { type: 'charm', target_type: 'humanoid', duration: 3600 }},
            { name: 'Potion of Fire Resistance', rarity: 'RARE', effect: { type: 'buff', resistance: 'fire_medium', duration: 600 } },
            { name: 'Draught of the Oracle', rarity: 'RARE', effect: { type: 'utility', status: 'future_sight_brief', side_effect: 'dizziness' } },
            { name: 'Potion of Superior Healing', rarity: 'EPIC', effect: { type: 'heal', amount: 250 } },
            { name: 'Elixir of Arcane Power', rarity: 'EPIC', effect: { type: 'buff', status: 'arcane_potency', duration: 300 } },
            { name: 'Potion of Dragon\'s Breath (Fire)', rarity: 'EPIC', effect: { type: 'damage_aura', damageType: 'fire', amount: '1d6', duration: 30 }},
            { name: 'Potion of Flying', rarity: 'EPIC', effect: { type: 'buff', status: 'flight', duration: 180 } },
            { name: 'Elixir of Immense Intellect', rarity: 'EPIC', effect: { type: 'buff', stat: 'intelligence', amount: 6, duration: 600 } },
            { name: 'Draught of Immortality (False)', rarity: 'LEGENDARY', effect: { type: 'buff', status: 'regenerating_strong', duration: 3600, side_effect: 'cursed_after_wear_off' }},
            { name: 'Potion of Reality Warping', rarity: 'LEGENDARY', effect: { type: 'utility', action: 'alter_local_reality_minor', side_effect: 'unpredictable_consequences' } },
            { name: 'Tears of the Phoenix', rarity: 'LEGENDARY', effect: { type: 'heal', action: 'true_resurrection_single_drop', uses: 3 } },
            { name: 'Blood of the Gods', rarity: 'ARTIFACT', effect: { type: 'buff', status: 'demigod_form', duration: 60, side_effect: 'divine_attention' } }
        ],
        wands: [
            { name: 'Sparking Wand', charges: 10, spell: 'magic_missile_weak', rarity: 'COMMON', effects: ['spell_focus_tiny'] },
            { name: 'Wand of Light', charges: 20, spell: 'continual_light', rarity: 'COMMON', effects: [] },
            { name: 'Wand of Detect Traps', charges: 15, spell: 'find_traps_minor', rarity: 'COMMON', effects: [] },
            { name: 'Wand of Healing Touch', charges: 7, spell: 'cure_light_wounds', rarity: 'UNCOMMON', effects: ['blessed_touch'] },
            { name: 'Wand of Firebolts', charges: 15, spell: 'firebolt_moderate', rarity: 'UNCOMMON', effects: ['fire_attunement'] },
            { name: 'Wand of Web', charges: 5, spell: 'web_area', rarity: 'UNCOMMON', effects: [] },
            { name: 'Wand of Paralyzation', charges: 5, spell: 'hold_person_weak', rarity: 'RARE', effects: ['nerve_shock'] },
            { name: 'Wand of Illusions', charges: 10, spell: 'minor_illusion_strong', rarity: 'RARE', effects: ['deceptive_magic'] },
            { name: 'Wand of the War Mage +1', charges: 0, spell: 'passive_spell_attack_bonus_1', rarity: 'RARE', effects: [] },
            { name: 'Wand of Enemy Detection', charges: 8, spell: 'detect_enemies_nearby', rarity: 'RARE', effects: [] },
            { name: 'Wand of Lightning Bolts', charges: 8, spell: 'lightning_bolt_strong', rarity: 'EPIC', effects: ['electrical_surge'] },
            { name: 'Wand of Polymorph (Unstable)', charges: 3, spell: 'polymorph_random', rarity: 'EPIC', effects: ['wild_magic'] },
            { name: 'Wand of Wonder', charges: '1d4+1', spell: 'random_magical_effect', rarity: 'EPIC', effects: ['chaotic_energy'] },
            { name: 'Wand of Necrotic Power', charges: 6, spell: 'ray_of_enfeeblement_strong', rarity: 'LEGENDARY', effects: ['cursed_touch', 'life_drain_small'] },
            { name: 'Wand of the Phoenix', charges: 3, spell: 'firestorm_and_rebirth', rarity: 'LEGENDARY', effects: ['rebirth_on_charge_expend', 'fire_immunity_while_held'] },
            { name: 'Scepter of the Planes', charges: 3, spell: 'plane_shift_target', rarity: 'ARTIFACT', effects: ['planar_attunement', 'gate_control'], slot: 'mainHand' }
        ],
        orbs: [ // Holding in offHand
            { name: 'Orb of Minor Warding', rarity: 'COMMON', effects: ['defense_aura_tiny'], passive_effect: { stat: 'armor', amount: 1 }, slot: 'offHand' },
            { name: 'Smoked Glass Orb', rarity: 'COMMON', effects: ['light_dimming'], active_ability: 'create_darkness_patch', slot: 'offHand' },
            { name: 'Scrying Orb (Cloudy)', rarity: 'UNCOMMON', effects: ['scry_weak'], active_ability: 'scry_location_nearby_limited', slot: 'offHand' },
            { name: 'Orb of Elemental Attunement (Fire)', rarity: 'UNCOMMON', effects: ['fire_resistance_tiny'], passive_effect: { empower: 'fire_spells_tiny' }, slot: 'offHand' },
            { name: 'Orb of Storms (Lesser)', rarity: 'RARE', effects: ['call_lightning_minor', 'weather_sense'], active_ability: 'summon_small_storm_cloud', slot: 'offHand' },
            { name: 'Kinetic Orb of Force', rarity: 'RARE', effects: ['force_push_ability'], passive_effect: { on_being_hit: 'knockback_attacker_chance' }, slot: 'offHand' },
            { name: 'Blood Orb of the Vampire', rarity: 'EPIC', effects: ['life_steal_aura_small', 'empower_dark_magic'], passive_effect: { on_damage_dealt: 'heal_self_percentage' }, slot: 'offHand' },
            { name: 'Orb of Entropy', rarity: 'EPIC', effects: ['decay_aura_weak'], active_ability: 'age_object_minor', slot: 'offHand' },
            { name: 'Orb of Dragon Souls', rarity: 'LEGENDARY', effects: ['dragon_knowledge_passive', 'command_lesser_drakes'], active_ability: 'absorb_dragon_energy', slot: 'offHand' },
            { name: 'The Eye of the Beholder', rarity: 'LEGENDARY', effects: ['antimagic_cone_ability', 'multiple_ray_attacks'], active_ability: 'random_eye_ray', slot: 'offHand' },
            { name: 'Orb of Creation', rarity: 'ARTIFACT', effects: ['shape_matter_slowly', 'genesis_pulse'], passive_effect: { grants: 'true_understanding_of_matter' }, slot: 'offHand' }
        ],
        talismans: [ // Worn in amulet slot
            { name: 'Talisman of Luck (Cracked)', rarity: 'COMMON', effects: ['reroll_one_bad_dice_once'], slot: 'amulet' },
            { name: 'Talisman of the Boar', rarity: 'COMMON', effects: ['constitution_tiny'], slot: 'amulet' },
            { name: 'Talisman of Protection', rarity: 'UNCOMMON', effects: ['elemental_resistance_fire_tiny'], slot: 'amulet' },
            { name: 'Talisman of the Crag Cat', rarity: 'UNCOMMON', effects: ['dexterity_tiny', 'jump_bonus'], slot: 'amulet' },
            { name: 'Talisman of the Beast', rarity: 'RARE', effects: ['speak_with_animals', 'animal_friendship_aura'], slot: 'amulet' },
            { name: 'Talisman of the Flame', rarity: 'RARE', effects: ['fire_resistance_small', 'produce_flame_at_will'], slot: 'amulet' },
            { name: 'Talisman of Forbidden Knowledge', rarity: 'EPIC', effects: ['unlock_ancient_lore_1', 'minor_madness_chance'], slot: 'amulet' },
            { name: 'Talisman of Pure Good', rarity: 'EPIC', effects: ['turn_fiend', 'holy_smite_ability', 'only_usable_by_good'], slot: 'amulet' },
            { name: 'Talisman of Eternal Night', rarity: 'LEGENDARY', effects: ['control_shadows_moderate', 'vampiric_touch_empowered'], slot: 'amulet' },
            { name: 'Talisman of Ultimate Evil', rarity: 'LEGENDARY', effects: ['create_undead', 'unholy_aura', 'corrupts_wearer', 'only_usable_by_evil'], slot: 'amulet' },
            { name: 'Talisman of the Shifting Sands', rarity: 'ARTIFACT', effects: ['control_time_minor', 'temporal_stasis_field', 'risk_of_time_paradox'], slot: 'amulet' }
        ]
    },
    questItems: {
        books: [
            { name: 'Tome of Ancient Wisdom', rarity: 'RARE', effects: ['knowledge_boost', 'lore_reveal_1'] },
            { name: 'Spellbook of Shadows', rarity: 'EPIC', effects: ['dark_magic_access', 'intelligence_1', 'cursed_knowledge'] },
            { name: 'Chronicle of Heroes', rarity: 'LEGENDARY', effects: ['inspiration_aura', 'leadership_1', 'historical_insight'] },
            { name: 'Herbalist\'s Guide (Local Flora)', rarity: 'COMMON', effects: ['identify_plants_1'] },
            { name: 'Engineer\'s Doodles', rarity: 'COMMON', effects: ['crafting_insight_basic_traps'] },
            { name: 'A Child\'s Nursery Rhymes', rarity: 'COMMON', effects: ['contains_hidden_prophecy'], description: 'A book of simple rhymes, one seems to have a hidden meaning.' },
            { name: 'The Mad Alchemist\'s Journal', rarity: 'UNCOMMON', effects: ['potion_recipe_unstable_1', 'minor_poison_recipe'] },
            { name: 'Codex of Lost Religions', rarity: 'UNCOMMON', effects: ['theology_skill_up', 'reveal_forgotten_shrine_location'] },
            { name: 'Beastmaster\'s Field Guide', rarity: 'UNCOMMON', effects: ['track_beasts_bonus', 'understand_animal_behavior'], description: 'Details the habits and habitats of local fauna.' },
            { name: 'The Art of War (Abridged)', rarity: 'RARE', effects: ['strategy_bonus_1', 'command_skill_up'] },
            { name: 'Tome of Clear Thought', rarity: 'RARE', effects: ['permanent_intelligence_increase_1', 'single_use'], description: 'Reading this book permanently sharpens the mind.' },
            { name: 'Necronomicon Ex-Mortis (Fragment)', rarity: 'EPIC', effects: ['summon_undead_weak', 'sanity_drain', 'forbidden_ritual_1'] },
            { name: 'Lexicon of Paradoxes', rarity: 'EPIC', effects: ['wild_magic_mastery', 'chance_to_break_reality'], description: 'A book that explains logic puzzles that defy logic.' },
            { name: 'Book of Celestial Hymns', rarity: 'LEGENDARY', effects: ['divine_spell_empower_1', 'holy_protection_aura', 'serenity'] },
            { name: 'Tome of the Stilled Tongue', rarity: 'LEGENDARY', effects: ['learn_forbidden_spells', 'cast_spells_silently', 'attracts_attention_of_Vecna'], description: 'A tome bound in humanoid skin detailing secrets of the Whispered One.' },
            { name: 'Atlas of Unknown Worlds', rarity: 'ARTIFACT', effects: ['map_reveal_all', 'teleport_to_discovered_points', 'cosmic_understanding_1'] },
            { name: 'The Poem of Creation', rarity: 'ARTIFACT', effects: ['true_understanding', 'shape_reality_minor', 'all_stats_major_boost_temporary'] }
        ],
        artifacts: [
            { name: 'Crystal of Power', rarity: 'EPIC', effects: ['mana_regeneration_large', 'spell_power_boost_medium'] },
            { name: 'Shard of the Worldstone', rarity: 'EPIC', effects: ['elemental_attunement_all', 'reality_stabilization_field'] },
            { name: 'Amulet of Kings', rarity: 'EPIC', effects: ['charisma_boost_large', 'command_allegiance', 'divine_right_aura'] },
            { name: 'Heart of the Dragon', rarity: 'LEGENDARY', effects: ['fire_immunity', 'strength_boost_large', 'dragon_form_brief'] },
            { name: 'Horn of Valhalla (Cracked)', rarity: 'LEGENDARY', effects: ['summon_spirit_warriors_few', 'inspire_allies_strong'] },
            { name: 'The Philosopher\'s Stone (Imperfect)', rarity: 'LEGENDARY', effects: ['transmute_materials_limited', 'extend_life_minor', 'gold_generation_slow'] },
            { name: 'Orb of Golden Death', rarity: 'LEGENDARY', effects: ['slay_living_ability', 'summon_dragon_undead', 'cursed_with_greed'] },
            { name: 'Soul Fragment (Corrupted)', rarity: 'ARTIFACT', effects: ['soul_power_unstable', 'drain_life_aura', 'whispers_of_the_damned'] },
            { name: 'Eye of Vecna (Replica)', rarity: 'ARTIFACT', effects: ['true_sight_enhanced', 'forbidden_knowledge_stream', 'major_curse_attraction'] },
            { name: 'The One Ring (Lost)', rarity: 'ARTIFACT', effects: ['invisibility_at_will', 'corrupting_influence_strong', 'power_amplification_dark'] },
            { name: 'Heart of the Ocean', rarity: 'ARTIFACT', effects: ['control_weather_at_sea', 'command_sea_creatures', 'water_breathing_aura'] },
            { name: 'Seed of the World Tree', rarity: 'ARTIFACT', effects: ['grow_magical_forest', 'commune_with_all_nature', 'life_giving_pulse'] }
        ],
        keys: [
            { name: 'Rusted Iron Key', rarity: 'COMMON', effects: ['unlocks_old_chest'] },
            { name: 'Jailer\'s Key Ring', rarity: 'COMMON', effects: ['unlocks_local_jail_cells'] },
            { name: 'Ornate Silver Key', rarity: 'UNCOMMON', effects: ['unlocks_manor_door'] },
            { name: 'Bone Key', rarity: 'UNCOMMON', effects: ['unlocks_crypt_door'], description: 'A key carved from a humanoid femur.' },
            { name: 'Gem-Encrusted Gold Key', rarity: 'RARE', effects: ['unlocks_treasure_vault'] },
            { name: 'Skeleton Key (Fragile)', rarity: 'RARE', effects: ['unlocks_any_simple_lock_once'] },
            { name: 'Key of Whispers', rarity: 'RARE', effects: ['unlocks_a_secret_door_when_spoken_to'] },
            { name: 'Shadow Key', rarity: 'EPIC', effects: ['unlocks_hidden_path_in_shadowfell'] },
            { name: 'Key to the City (Ceremonial)', rarity: 'EPIC', effects: ['grants_access_high_council', 'diplomacy_bonus_1'] },
            { name: 'Key of a Thousand Doors', rarity: 'LEGENDARY', effects: ['unlocks_any_mundane_door', 'chance_to_open_random_portal'] },
            { name: 'Key to the Heart', rarity: 'LEGENDARY', effects: ['unlocks_someone\'s_deepest_secrets_or_desires'] },
            { name: 'Key to Oblivion', rarity: 'ARTIFACT', effects: ['opens_gate_to_void', 'destroy_on_use'] }
        ],
        maps: [
            { name: 'Torn Map Fragment', rarity: 'COMMON', effects: ['reveals_small_area_1'] },
            { name: 'Map to the Local Tavern', rarity: 'COMMON', effects: ['reveals_a_good_time'] },
            { name: 'Local Area Map', rarity: 'UNCOMMON', effects: ['reveals_region_map'] },
            { name: 'Treasure Map (Dubious)', rarity: 'UNCOMMON', effects: ['marks_possible_treasure_spot'], description: 'An "X" marks the spot. The map seems drawn by a child.' },
            { name: 'Star Chart (Ancient)', rarity: 'RARE', effects: ['navigation_aid_celestial', 'astrology_insight_1'] },
            { name: 'Battle Strategy Map', rarity: 'RARE', effects: ['reveals_enemy_positions_for_one_battle'] },
            { name: 'Marauder\'s Map (Blank)', rarity: 'EPIC', effects: ['reveals_nearby_living_beings_when_activated'] },
            { name: 'Map of the Underdark (Incomplete)', rarity: 'EPIC', effects: ['navigation_aid_subterranean', 'danger_sense_underground'] },
            { name: 'Skin Map of the Damned', rarity: 'EPIC', effects: ['reveals_path_to_a_hellish_demiplane', 'cursed'] },
            { name: 'World Map (Pre-Cataclysm)', rarity: 'LEGENDARY', effects: ['historical_geography_knowledge', 'reveals_lost_locations'] },
            { name: 'Planar Map of the Nine Hells', rarity: 'ARTIFACT', effects: ['navigate_hells_imprecisely', 'attracts_devils'] },
            { name: 'Living Map of the Multiverse', rarity: 'ARTIFACT', effects: ['shows_real_time_planar_movement', 'can_predict_cosmic_events'] }
        ],
        relics: [
            { name: 'Goblin Totem (Crude)', rarity: 'COMMON', effects: ['minor_luck_or_curse_unpredictable'] },
            { name: 'A Shard of Stained Glass', rarity: 'COMMON', effects: ['from_a_destroyed_temple'], description: 'Humming with faint divine energy.' },
            { name: 'Elven Star Brooch', rarity: 'UNCOMMON', effects: ['light_aura_faint', 'forest_affinity'] },
            { name: 'Petrified Dragon Egg', rarity: 'UNCOMMON', effects: ['very_heavy', 'emits_faint_warmth'] },
            { name: 'Saint\'s Fingerbone', rarity: 'RARE', effects: ['minor_blessing_aura', 'ward_against_undead_small'] },
            { name: 'Dwarven Rune Stone', rarity: 'RARE', effects: ['earth_resistance_small', 'crafting_inspiration_smithing'] },
            { name: 'Cursed Idol of the Monkey God', rarity: 'RARE', effects: ['summons_mischievous_monkeys', 'causes_bad_luck'] },
            { name: 'Sliver of a Fallen Star', rarity: 'EPIC', effects: ['cosmic_energy_pulse_ability', 'hope_aura'] },
            { name: 'Phylactery of a Minor Lich', rarity: 'EPIC', effects: ['necromantic_knowledge_1', 'attracts_undead_and_hunters'] },
            { name: 'Tear of a Goddess', rarity: 'LEGENDARY', effects: ['major_healing_ability_single_use', 'purification_field'] },
            { name: 'Feather from an Angel\'s Wing', rarity: 'LEGENDARY', effects: ['allows_brief_flight_once', 'protection_from_evil_aura'] },
            { name: 'Crown of the Lich King (Damaged)', rarity: 'ARTIFACT', effects: ['command_lesser_undead_powerful', 'major_curse_of_binding', 'unholy_aura']},
            { name: 'Blood of a Saint', rarity: 'ARTIFACT', effects: ['consecrates_ground', 'destroys_major_fiend', 'single_use'] }
        ]
    },
    tools: {
        gathering: [
            { name: 'Flint Knife', rarity: 'COMMON', tool_type: 'skinning', efficiency: 0.8 },
            { name: 'Mining Pick (Worn)', rarity: 'COMMON', tool_type: 'mining', efficiency: 0.9 },
            { name: 'Wood Axe (Basic)', rarity: 'COMMON', tool_type: 'woodcutting', efficiency: 1.0 },
            { name: 'Fishing Rod (Simple)', rarity: 'COMMON', tool_type: 'fishing', efficiency: 1.0 },
            { name: 'Herb Pouch', rarity: 'COMMON', tool_type: 'herbalism_storage', capacity: 10 },
            { name: 'Trowel', rarity: 'COMMON', tool_type: 'foraging', efficiency: 1.0 },
            { name: 'Steel Skinning Knife', rarity: 'UNCOMMON', tool_type: 'skinning', efficiency: 1.2, effects: ['cleaner_cuts'] },
            { name: 'Reinforced Mining Pick', rarity: 'UNCOMMON', tool_type: 'mining', efficiency: 1.3, effects: ['find_gems_chance_small'] },
            { name: 'Sharp Forester\'s Axe', rarity: 'UNCOMMON', tool_type: 'woodcutting', efficiency: 1.4, effects: ['rare_wood_chance_small'] },
            { name: 'Net (Small)', rarity: 'UNCOMMON', tool_type: 'fishing_trapping', efficiency: 1.1 },
            { name: 'Masterwork Fishing Rod', rarity: 'RARE', tool_type: 'fishing', efficiency: 1.5, effects: ['attract_bigger_fish'] },
            { name: 'Gloves of the Herbalist', rarity: 'RARE', tool_type: 'herbalism', efficiency: 1.2, effects: ['identify_herbs_quickly', 'protection_from_thorns'] },
            { name: 'Geologist\'s Hammer', rarity: 'RARE', tool_type: 'mining', efficiency: 1.5, effects: ['identifies_ore_type'] },
            { name: 'Mithril-Edged Hatchet', rarity: 'EPIC', tool_type: 'woodcutting', efficiency: 2.0, effects: ['gathers_enchanted_wood'] },
            { name: 'Soul-Trap Harvester', rarity: 'EPIC', tool_type: 'essence_gathering', efficiency: 1.8, effects: ['harvests_essences_from_living'] },
            { name: 'Blacksmith\'s Expert Hammer', rarity: 'RARE', tool_type: 'crafting_smithing', quality: 1.5 },
            { name: 'Alchemist\'s Advanced Kit', rarity: 'RARE', tool_type: 'crafting_alchemy', quality: 1.5 },
            { name: 'Rod of the Deep Angler', rarity: 'LEGENDARY', tool_type: 'fishing', efficiency: 2.5, effects: ['can_fish_in_unusual_liquids'] },
            { name: 'World-Tree Harvester', rarity: 'ARTIFACT', tool_type: 'all_gathering', efficiency: 3.0, effects: ['gathers_mythical_resources', 'never_dulls'] }
        ],
        utility: [
            { name: 'Tinderbox', rarity: 'COMMON', uses: 20 },
            { name: 'Rope (15m)', rarity: 'COMMON', strength: 150 },
            { name: 'Lockpicks (Simple)', rarity: 'COMMON', quality: 0.7, uses: 5 },
            { name: 'Shovel', rarity: 'COMMON', tool_type: 'digging' },
            { name: 'Waterskin', rarity: 'COMMON', capacity: '1_liter' },
            { name: 'Crowbar', rarity: 'COMMON', effects: ['force_open_bonus'] },
            { name: 'Spyglass (Basic)', rarity: 'UNCOMMON', magnification: 2 },
            { name: 'Thieves\' Tools (Fine)', rarity: 'UNCOMMON', quality: 1.0, uses: 10, effects: ['quieter_picking'] },
            { name: 'Grappling Hook', rarity: 'UNCOMMON', range: 10, strength: 200 },
            { name: 'Healer\'s Kit', rarity: 'UNCOMMON', uses: 5, effects: ['stabilize_critically_wounded'] },
            { name: 'Caltrops Bag', rarity: 'UNCOMMON', uses: 3, effects: ['create_difficult_terrain'] },
            { name: 'Disguise Kit', rarity: 'UNCOMMON', quality: 1.0 },
            { name: 'Master Lockpicks', rarity: 'RARE', quality: 1.5, uses: 15, effects: ['bypass_simple_traps'] },
            { name: 'Universal Solvent (Single Use)', rarity: 'RARE', effects: ['dissolves_adhesives_or_weak_metals'] },
            { name: 'Bag of Holding (Small)', rarity: 'RARE', capacity: 'pocket_dimension_small' },
            { name: 'Ever-burning Torch', rarity: 'RARE', effects: ['permanent_magical_light'] },
            { name: 'Infiltrator\'s Tools', rarity: 'EPIC', quality: 2.0, uses: 25, effects: ['bypass_magical_traps', 'silent'] },
            { name: 'Portable Hole', rarity: 'EPIC', effects: ['create_pocket_dimension_entrance'] },
            { name: 'Decanter of Endless Water', rarity: 'EPIC', effects: ['produces_infinite_water'] },
            { name: 'The Architect\'s Chisel', rarity: 'LEGENDARY', tool_type: 'stonemasonry', effects: ['shape_stone_with_ease', 'find_structural_weakness'] }
        ]
    },
    jewelry: {
        rings: [
            { name: 'Iron Ring', rarity: 'COMMON', effects: [], slot: 'ring1' },
            { name: 'Silver Ring with Small Gem', rarity: 'COMMON', effects: ['minor_charisma_boost'], slot: 'ring1' },
            { name: 'Signet Ring of a Minor House', rarity: 'COMMON', effects: ['social_standing_minor'], slot: 'ring1' },
            { name: 'Ring of Protection +1', rarity: 'UNCOMMON', effects: ['armor_class_1'], slot: 'ring1' },
            { name: 'Ring of Sustenance', rarity: 'UNCOMMON', effects: ['reduces_need_for_food_water'], slot: 'ring1' },
            { name: 'Ring of Warmth', rarity: 'UNCOMMON', effects: ['cold_resistance_small'], slot: 'ring1' },
            { name: 'Ring of Animal Friendship', rarity: 'UNCOMMON', effects: ['charm_animal_1_per_day'], slot: 'ring1' },
            { name: 'Ring of Feather Falling', rarity: 'RARE', effects: ['feather_fall_passive'], slot: 'ring1' },
            { name: 'Ring of Spell Storing (Minor)', rarity: 'RARE', effects: ['store_one_level_1_spell'], slot: 'ring1' },
            { name: 'Ring of Regeneration (Faint)', rarity: 'RARE', effects: ['hpRegen_very_slow'], slot: 'ring1' },
            { name: 'Ring of Mind Shielding', rarity: 'RARE', effects: ['immune_to_detect_thoughts'], slot: 'ring1' },
            { name: 'Ring of the Ram', rarity: 'RARE', effects: ['force_push_ability_charges'], slot: 'ring1' },
            { name: 'Band of the Archmagi', rarity: 'EPIC', effects: ['intelligence_2', 'spell_power_2'], slot: 'ring1' },
            { name: 'Ring of Elemental Command (Fire)', rarity: 'EPIC', effects: ['fire_immunity_brief', 'control_fire_elemental'], slot: 'ring1' },
            { name: 'Vampiric Ring', rarity: 'EPIC', effects: ['lifesteal_on_melee_hit_small'], slot: 'ring1' },
            { name: 'Ring of True Seeing', rarity: 'EPIC', effects: ['grant_true_sight_briefly'], slot: 'ring1' },
            { name: 'Ring of Three Wishes (Cursed)', rarity: 'LEGENDARY', effects: ['grants_3_wishes_twisted', 'major_curse_after_last_wish'], slot: 'ring1' },
            { name: 'The One Ring (Weak Echo)', rarity: 'LEGENDARY', effects: ['invisibility_at_will', 'corrupting_influence_moderate'], slot: 'ring1' },
            { name: 'Ring of Djinni Summoning', rarity: 'LEGENDARY', effects: ['summon_djinni_once_a_week'], slot: 'ring1' },
            { name: 'The Creator\'s Signet', rarity: 'ARTIFACT', effects: ['shape_reality_minor_at_cost', 'unlimited_mending', 'cosmic_awareness'], slot: 'ring1' }
        ],
        amulets: [
            { name: 'Wooden Holy Symbol', rarity: 'COMMON', effects: ['faith_focus_minor'], slot: 'amulet' },
            { name: 'String of Goblin Teeth', rarity: 'COMMON', effects: ['intimidation_vs_goblins_tiny'], slot: 'amulet' },
            { name: 'Amulet of Health (Lesser)', rarity: 'UNCOMMON', effects: ['max_hp_boost_small'], slot: 'amulet' },
            { name: 'Necklace of Fire Resistance (Minor)', rarity: 'UNCOMMON', effects: ['fire_resistance_small'], slot: 'amulet' },
            { name: 'Medallion of Thought Projection', rarity: 'UNCOMMON', effects: ['send_telepathic_message_one_way'], slot: 'amulet' },
            { name: 'Amulet of Natural Armor +1', rarity: 'RARE', effects: ['natural_armor_1'], slot: 'amulet' },
            { name: 'Periapt of Proof Against Poison', rarity: 'RARE', effects: ['poison_immunity_weak_poisons'], slot: 'amulet' },
            { name: 'Brooch of Shielding', rarity: 'RARE', effects: ['absorbs_force_damage_pool'], slot: 'amulet' },
            { name: 'Necklace of Prayer Beads (3 beads)', rarity: 'RARE', effects: ['cast_divine_spell_from_bead'], slot: 'amulet' },
            { name: 'Amulet of the Planes (Malfunctioning)', rarity: 'EPIC', effects: ['plane_shift_random_unreliable'], slot: 'amulet' },
            { name: 'Necklace of Elemental Command (Air)', rarity: 'EPIC', effects: ['control_winds_moderate', 'fly_briefly'], slot: 'amulet' },
            { name: 'Amulet of Mighty Fists +2', rarity: 'EPIC', effects: ['unarmed_attack_and_damage_bonus_2'], slot: 'amulet' },
            { name: 'Heart of Ahriman (Pendant)', rarity: 'LEGENDARY', effects: ['dark_power_boost', 'corruption_aura', 'summon_shadows_1'], slot: 'amulet' },
            { name: 'Talisman of the Sphere', rarity: 'LEGENDARY', effects: ['control_sphere_of_annihilation', 'risky'], slot: 'amulet' },
            { name: 'Amulet of the Void', rarity: 'ARTIFACT', effects: ['immunity_to_void_damage', 'void_teleport', 'slowly_erases_identity'], slot: 'amulet' }
        ]
    },
    crafting: {
        ores: [
            { name: 'Copper Ore', rarity: 'COMMON', description: 'A common, reddish-brown ore.' },
            { name: 'Tin Ore', rarity: 'COMMON', description: 'A soft, silvery-white ore, often used for bronze.' },
            { name: 'Iron Ore', rarity: 'COMMON', description: 'A sturdy and reliable metal ore.' },
            { name: 'Silver Ore', rarity: 'UNCOMMON', description: 'A lustrous ore valued for its purity and effect on undead.' },
            { name: 'Gold Ore', rarity: 'UNCOMMON', description: 'A soft, valuable ore, prized for its beauty.' },
            { name: 'Coal Chunk', rarity: 'UNCOMMON', description: 'A high-energy fuel source for forges.' },
            { name: 'Mithril Ore', rarity: 'RARE', description: 'A lightweight and exceptionally strong ore.' },
            { name: 'Truesilver Ore', rarity: 'RARE', description: 'An ore that shines with an inner light, useful for holy items.' },
            { name: 'Dark Iron Ore', rarity: 'RARE', description: 'Found deep underground, holds heat exceptionally well.' },
            { name: 'Adamantine Ore', rarity: 'EPIC', description: 'One of the hardest known metal ores.' },
            { name: 'Eternium Ore', rarity: 'EPIC', description: 'A strange metal that seems to phase in and out of reality.' },
            { name: 'Orichalcum Ore', rarity: 'LEGENDARY', description: 'A mythical ore pulsating with magical energy.' },
            { name: 'Star Metal Ore', rarity: 'LEGENDARY', description: 'Ore from a fallen meteor, humming with cosmic power.' },
            { name: 'Voidstone Ore', rarity: 'ARTIFACT', description: 'Ore infused with the emptiness of the void, strangely light.'},
            { name: 'Heart-Iron Ore', rarity: 'ARTIFACT', description: 'Ore mined from the heart of a dying star, impossibly dense.'}
        ],
        herbs: [
            { name: 'Common Clover', rarity: 'COMMON', description: 'A simple clover, sometimes lucky.' },
            { name: 'Kingsfoil Leaf', rarity: 'COMMON', description: 'A common herb with minor healing properties.' },
            { name: 'Peacebloom', rarity: 'COMMON', description: 'A calming flower used in tranquil potions.' },
            { name: 'Nightshade Petals', rarity: 'UNCOMMON', description: 'Petals from a poisonous plant.' },
            { name: 'Dragonstongue Root', rarity: 'UNCOMMON', description: 'A fiery root used in potent potions.' },
            { name: 'Grave Moss', rarity: 'UNCOMMON', description: 'Moss that grows on tombstones, used in necromancy.' },
            { name: 'Moonpetal Flower', rarity: 'RARE', description: 'A rare flower that blooms only under moonlight.' },
            { name: 'Sungrass', rarity: 'RARE', description: 'Grass that glows faintly, used in potions of vitality.' },
            { name: 'Dreamfoil', rarity: 'RARE', description: 'An herb that can induce prophetic dreams or potent hallucinations.' },
            { name: 'Sunfruit Seed', rarity: 'EPIC', description: 'Seeds from a fruit that captures sunlight.' },
            { name: 'Black Lotus', rarity: 'EPIC', description: 'A legendary herb that can cause instant death or incredible power.' },
            { name: 'Star Tear Blossom', rarity: 'LEGENDARY', description: 'A flower said to be a tear from a celestial being.' },
            { name: 'Frost-Lotus', rarity: 'LEGENDARY', description: 'A flower that blooms in the heart of a glacier, radiating cold.' },
            { name: 'Blood Lotus Pollen', rarity: 'ARTIFACT', description: 'Pollen from a lotus fed on life essence.'},
            { name: 'Seed of Yggdrasil', rarity: 'ARTIFACT', description: 'A single seed from the world tree itself.'}
        ],
        monster_parts: [
            { name: 'Goblin Ear', rarity: 'COMMON', description: 'A severed ear from a goblin.' },
            { name: 'Wolf Pelt', rarity: 'COMMON', description: 'The fur of a common wolf.' },
            { name: 'Giant Rat Tail', rarity: 'COMMON', description: 'The tail of an unusually large rat.' },
            { name: 'Spider Venom Gland', rarity: 'UNCOMMON', description: 'A gland containing potent spider venom.' },
            { name: 'Griffon Feather', rarity: 'UNCOMMON', description: 'A large feather from a griffon.' },
            { name: 'Harpy Vocal Cords', rarity: 'UNCOMMON', description: 'The source of a harpy\'s enchanting song.' },
            { name: 'Minotaur Horn', rarity: 'RARE', description: 'A sturdy horn from a minotaur.' },
            { name: 'Basilisk Eye', rarity: 'RARE', description: 'An eye from a basilisk, still capable of petrification.' },
            { name: 'Displacer Beast Tentacle', rarity: 'RARE', description: 'A tentacle that bends light around it.' },
            { name: 'Dragon Scale (Young)', rarity: 'EPIC', description: 'A scale from a young dragon, still resilient.' },
            { name: 'Hydra Blood', rarity: 'EPIC', description: 'Highly corrosive and regenerative blood.' },
            { name: 'Beholder Eyestalk', rarity: 'LEGENDARY', description: 'A severed eyestalk from a beholder, still twitching.' },
            { name: 'Angel Feather', rarity: 'LEGENDARY', description: 'A feather from a celestial being, warm to the touch.' },
            { name: 'Heart of a Tarrasque (Fragment)', rarity: 'ARTIFACT', description: 'A pulsating fragment from an unkillable beast.'},
            { name: 'Mind of a Mind Flayer', rarity: 'ARTIFACT', description: 'A brain that contains the collective knowledge of a Mind Flayer colony.'}
        ],
        essences: [
            { name: 'Faint Magical Essence', rarity: 'COMMON', description: 'A weak residue of magical energy.' },
            { name: 'Lingering Spirit Essence', rarity: 'COMMON', description: 'The faint echo of a departed spirit.'},
            { name: 'Elemental Water Droplet', rarity: 'UNCOMMON', description: 'Pure water essence from an elemental.'},
            { name: 'Frozen Core Shard', rarity: 'UNCOMMON', description: 'A shard from the heart of an ice elemental.'},
            { name: 'Ichor of Shadow', rarity: 'UNCOMMON', description: 'The liquid essence of a shadow creature.' },
            { name: 'Shadow Essence Clot', rarity: 'RARE', description: 'A congealed piece of raw shadow energy.'},
            { name: 'Concentrated Life Dew', rarity: 'RARE', description: 'Pure life energy condensed into a dewdrop.'},
            { name: 'Roiling Magma Core', rarity: 'RARE', description: 'The heart of a fire elemental.' },
            { name: 'Infernal Brimstone', rarity: 'EPIC', description: 'Sulfurous stone from the depths of a hellscape.'},
            { name: 'Celestial Radiance Crystal', rarity: 'EPIC', description: 'A crystal imbued with light from the higher planes.'},
            { name: 'Essence of a Nightmare', rarity: 'EPIC', description: 'The crystallized fear from a powerful nightmare.' },
            { name: 'Timeless Sand Grain', rarity: 'LEGENDARY', description: 'A grain of sand unstuck from the flow of time.'},
            { name: 'Heart of a Storm', rarity: 'LEGENDARY', description: 'The captured fury of a lightning storm.' },
            { name: 'Quintessence of Creation', rarity: 'ARTIFACT', description: 'The pure, raw stuff of the cosmos.'},
            { name: 'Echo of a Lost God', rarity: 'ARTIFACT', description: 'The fading divine spark of a forgotten deity.' }
        ]
    },
    currency: {
        coins: [
            { name: 'Copper Piece', rarity: 'COMMON', value: 1, description: 'A single copper coin.' },
            { name: 'Silver Piece', rarity: 'COMMON', value: 10, description: 'A silver coin, worth 10 coppers.' },
            { name: 'Gold Piece', rarity: 'UNCOMMON', value: 100, description: 'A gold coin, worth 10 silvers.' },
            { name: 'Platinum Piece', rarity: 'RARE', value: 1000, description: 'A platinum coin, for large transactions.' },
            { name: 'Ancient Empire Coin', rarity: 'RARE', value: 250, description: 'A coin from a long-fallen empire, sought by collectors.'},
            { name: 'Dwarven Trade Bar (Iron)', rarity: 'COMMON', value: 50, description: 'An iron bar stamped with dwarven runes, used for trade.'},
            { name: 'Elven Moonstone Chip', rarity: 'UNCOMMON', value: 150, description: 'A polished chip of moonstone, used as currency by elves.'},
            { name: 'Soul Coin', rarity: 'RARE', value: 0, description: 'A coin from the Nine Hells that contains a trapped soul. Used as currency by devils.' },
            { name: 'Dragon Scale Coin', rarity: 'EPIC', value: 2000, description: 'A coin minted from an ancient dragon\'s scale.' },
            { name: 'Astral Diamond', rarity: 'LEGENDARY', value: 10000, description: 'A gem that holds a sliver of the Astral Plane.' }
        ],
        gems: [
            { name: 'Flawed Amethyst', rarity: 'COMMON', value: 20, description: 'A small, imperfect amethyst.' },
            { name: 'Quartz Crystal', rarity: 'COMMON', value: 15, description: 'A clear crystal, often used as a minor arcane focus.' },
            { name: 'Polished Garnet', rarity: 'UNCOMMON', value: 50, description: 'A shiny red garnet.' },
            { name: 'Jade Statuette', rarity: 'UNCOMMON', value: 75, description: 'A small statuette carved from jade.' },
            { name: 'Flawless Ruby', rarity: 'RARE', value: 250, description: 'A perfect, deep red ruby.' },
            { name: 'Black Pearl', rarity: 'RARE', value: 300, description: 'A rare, dark pearl from the deepest oceans.' },
            { name: 'Soul Gem (Empty)', rarity: 'RARE', value: 100, description: 'A crystal capable of holding a spiritual essence.'},
            { name: 'Star Sapphire', rarity: 'EPIC', value: 1000, description: 'A sapphire showing a star-like phenomenon.' },
            { name: 'Fire Opal', rarity: 'EPIC', value: 1200, description: 'An opal that seems to have a fire burning within it.' },
            { name: 'King\'s Diamond', rarity: 'LEGENDARY', value: 5000, description: 'A massive, perfectly cut diamond of legendary value.' },
            { name: 'Tear of a God', rarity: 'ARTIFACT', value: -1, description: 'A solidified tear from a deity. Its value is beyond measure.' }
        ]
    },
    glyphs: {
        weapon_enchants: [
            { name: 'Glyph of Minor Flame', rarity: 'COMMON', effect: 'enchant_weapon_fire_damage_tiny_duration', duration: 300 },
            { name: 'Glyph of Chilling', rarity: 'COMMON', effect: 'enchant_weapon_cold_damage_tiny_duration', duration: 300 },
            { name: 'Glyph of Keen Edge', rarity: 'UNCOMMON', effect: 'enchant_weapon_crit_chance_small_duration', duration: 600 },
            { name: 'Glyph of the Leech', rarity: 'UNCOMMON', effect: 'enchant_weapon_lifesteal_tiny_duration', duration: 300 },
            { name: 'Glyph of Vampiric Touch', rarity: 'RARE', effect: 'enchant_weapon_lifesteal_small_duration', duration: 180 },
            { name: 'Glyph of Sundering', rarity: 'RARE', effect: 'enchant_weapon_armor_piercing_medium_duration', duration: 600 },
            { name: 'Glyph of Holy Retribution', rarity: 'EPIC', effect: 'enchant_weapon_radiant_damage_medium_duration_vs_evil', duration: 300},
            { name: 'Glyph of Banishing', rarity: 'EPIC', effect: 'enchant_weapon_chance_to_banish_outsider_duration', duration: 60 },
            { name: 'Glyph of Soulfire', rarity: 'LEGENDARY', effect: 'enchant_weapon_holyfire_damage_large_permanent', permanent: true }
        ],
        armor_enchants: [
            { name: 'Glyph of Iron Skin', rarity: 'COMMON', effect: 'enchant_armor_defense_tiny_duration', duration: 300 },
            { name: 'Glyph of Resistance (Fire)', rarity: 'COMMON', effect: 'enchant_armor_fire_resistance_tiny_duration', duration: 600 },
            { name: 'Glyph of Shadowmeld', rarity: 'UNCOMMON', effect: 'enchant_armor_stealth_small_duration', duration: 120 },
            { name: 'Glyph of Vitality', rarity: 'UNCOMMON', effect: 'enchant_armor_max_hp_small_duration', duration: 600 },
            { name: 'Glyph of Deflection', rarity: 'RARE', effect: 'enchant_armor_spell_resistance_small_duration', duration: 180 },
            { name: 'Glyph of the Guardian', rarity: 'RARE', effect: 'enchant_armor_damage_reduction_flat_1_duration', duration: 300 },
            { name: 'Glyph of Unyielding Fortitude', rarity: 'EPIC', effect: 'enchant_armor_damage_reduction_medium_duration', duration: 60 },
            { name: 'Glyph of Etherealness', rarity: 'EPIC', effect: 'enchant_armor_become_ethereal_briefly_ability', uses: 1 },
            { name: 'Glyph of the Archon', rarity: 'LEGENDARY', effect: 'enchant_armor_elemental_immunity_all_permanent', permanent: true }
        ],
        runes: [ // Can be socketed into items
            { name: 'Rune of Power', rarity: 'UNCOMMON', socket_type: 'weapon', effect: 'damage_bonus_1' },
            { name: 'Rune of Resilience', rarity: 'UNCOMMON', socket_type: 'armor', effect: 'armor_bonus_1' },
            { name: 'Rune of Slaying (Goblin)', rarity: 'UNCOMMON', socket_type: 'weapon', effect: 'bonus_damage_vs_goblins_2' },
            { name: 'Rune of Haste', rarity: 'RARE', socket_type: 'any', effect: 'initiative_bonus_2' },
            { name: 'Rune of the Firelord', rarity: 'RARE', socket_type: 'weapon', effect: 'add_fire_damage_1d6' },
            { name: 'Rune of the Stoneskin', rarity: 'RARE', socket_type: 'armor', effect: 'damage_reduction_physical_1' },
            { name: 'Rune of Spell-Shattering', rarity: 'EPIC', socket_type: 'weapon', effect: 'on_hit_dispel_magic_chance' },
            { name: 'Rune of Freedom', rarity: 'EPIC', socket_type: 'any', effect: 'immune_to_movement_impairing' },
            { name: 'Rune of the Archlich', rarity: 'LEGENDARY', socket_type: 'any', effect: 'grants_undead_trait', curse: 'attracts_holy_magic' }
        ]
    },
    ingredients: {
        food: [
            { name: 'Wild Berries', rarity: 'COMMON', effects: ['hunger_sate_small'] },
            { name: 'Hard Tack', rarity: 'COMMON', effects: ['hunger_sate_small', 'tastes_like_sadness'] },
            { name: 'Cave Mushroom (Edible)', rarity: 'COMMON', effects: ['hunger_sate_small', 'minor_night_vision_brief'] },
            { name: 'Spiced Wolf Meat', rarity: 'UNCOMMON', effects: ['hunger_sate_medium', 'stamina_regen_buff_short'] },
            { name: 'Dwarven Stout', rarity: 'UNCOMMON', effects: ['hunger_sate_tiny', 'temporary_constitution_1', 'temporary_dexterity_-1'] },
            { name: 'Elven Lembas Bread', rarity: 'RARE', effects: ['hunger_sate_large_one_bite', 'morale_boost'] },
            { name: 'Sunfruit', rarity: 'RARE', effects: ['hunger_sate_medium', 'minor_heal', 'temporary_radiance_aura'] },
            { name: 'Dragon Chili Pepper', rarity: 'EPIC', effects: ['hunger_sate_large', 'fire_breath_one_shot', 'internal_burning_sensation']},
            { name: 'Roasted Phoenix Heart', rarity: 'LEGENDARY', effects: ['hunger_sate_full', 'regenerate_limbs', 'temporary_rebirth_on_death'] },
            { name: 'Ambrosia of the Gods', rarity: 'ARTIFACT', effects: ['hunger_sate_forever', 'permanent_stat_boost_random', 'divine_favor'] }
        ],
        reagents: [
            { name: 'Bat Wing', rarity: 'COMMON', alchemical_properties: ['darkness', 'flight_minor'] },
            { name: 'Grave Dust', rarity: 'COMMON', alchemical_properties: ['undeath', 'necrosis_minor'] },
            { name: 'Sulfur Powder', rarity: 'COMMON', alchemical_properties: ['fire', 'combustion'] },
            { name: 'Quicksilver Globule', rarity: 'UNCOMMON', alchemical_properties: ['transmutation', 'speed_minor'] },
            { name: 'Mandrake Root', rarity: 'UNCOMMON', alchemical_properties: ['paralysis', 'life_simulation'] },
            { name: 'Ectoplasm', rarity: 'UNCOMMON', alchemical_properties: ['ethereal', 'spirit_binding'] },
            { name: 'Troll Blood (Regenerative)', rarity: 'RARE', alchemical_properties: ['regeneration_strong', 'mutation_unstable']},
            { name: 'Unicorn Horn Powder', rarity: 'RARE', alchemical_properties: ['purification', 'healing_major'] },
            { name: 'Mind Flayer Brain Fluid', rarity: 'EPIC', alchemical_properties: ['psionics', 'intellect_drain', 'madness'] },
            { name: 'Powdered Dragonbone', rarity: 'EPIC', alchemical_properties: ['strength_major', 'elemental_infusion'] },
        { name: 'Phoenix Ash', rarity: 'LEGENDARY', alchemical_properties: ['rebirth', 'fire_major', 'purification'] },
            { name: 'Tear of a Dying Star', rarity: 'LEGENDARY', alchemical_properties: ['radiance', 'cosmic_power', 'creation_minor'] },
            { name: 'Sand of Time', rarity: 'ARTIFACT', alchemical_properties: ['time_manipulation', 'aging', 'paradox'] }
        ]
    },
    trinkets: {
        charms: [
            { name: 'Lucky Rabbit\'s Foot', rarity: 'COMMON', effects: ['luck_very_minor_passive'] },
            { name: 'Polished Worry Stone', rarity: 'COMMON', effects: ['stress_reduction_tiny_passive'] },
            { name: 'A single, perfect feather', rarity: 'COMMON', effects: ['feeling_of_lightness'] },
            { name: 'Four-Leaf Clover (Pressed)', rarity: 'UNCOMMON', effects: ['luck_small_once_per_day'] },
            { name: 'Memento of a Lost Love', rarity: 'UNCOMMON', effects: ['morale_boost_when_viewed', 'sadness_debuff_if_damaged'] },
            { name: 'Witch-Eye Charm', rarity: 'UNCOMMON', effects: ['ward_against_hexes_minor'] },
            { name: 'Shark Tooth Necklace', rarity: 'RARE', effects: ['intimidation_bonus_vs_aquatic', 'swim_speed_tiny'] },
            { name: 'Hand of Glory (pickled)', rarity: 'RARE', effects: ['holds_light_spell', 'unlocks_doors_for_thieves'], curse: 'attracts_undead' },
            { name: 'A Faerie in a Jar', rarity: 'EPIC', effects: ['provides_light', 'can_cast_minor_illusion_once_a_day', 'constant_giggling'] },
            { name: 'Miniature Anvil of the Forge God', rarity: 'LEGENDARY', effects: ['guarantees_success_on_one_crafting_check'] },
            { name: 'The Coin of Fate', rarity: 'ARTIFACT', effects: ['flip_to_determine_outcome_of_major_event', '50/50_chance_of_boon_or_calamity'] }
        ],
        oddities: [
            { name: 'Bent Spoon', rarity: 'COMMON', description: 'It\'s just a bent spoon. Or is it?' },
            { name: 'Pet Rock with Googly Eyes', rarity: 'COMMON', description: 'A steadfast companion. His name is Reginald.' },
            { name: 'A Button from a King\'s Coat', rarity: 'COMMON', description: 'Or so the merchant claimed.' },
            { name: 'Never-ending Gobstopper (Faintly Sweet)', rarity: 'UNCOMMON', description: 'It really does seem to last forever.' },
            { name: 'Smoking Pipe that Blows Square Bubbles', rarity: 'UNCOMMON', description: 'A marvel of Gnomish engineering.' },
            { name: 'Bottled Faerie (Grumpy)', rarity: 'RARE', effects: ['provides_faint_light', 'occasional_insults'] },
            { name: 'Unbreakable Teacup', rarity: 'RARE', description: 'You have tried everything. It will not break.' },
            { name: 'Orb of Pondering (Slightly Cracked)', rarity: 'EPIC', description: 'Contemplating it may reveal... something? It\'s probably nothing.' },
            { name: 'A Perfectly Normal Human Skull', rarity: 'EPIC', description: 'It occasionally whispers shopping lists. You think its name is Bob.' },
            { name: 'A Rubik\'s Cube with 4 Dimensions', rarity: 'LEGENDARY', description: 'Solving it is rumored to grant enlightenment or an aneurysm.' },
            { name: 'The Last Dodo Egg', rarity: 'ARTIFACT', description: 'An egg from a creature long extinct. It is still warm.' }
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
        const selected = this.selectFromTemplates(jewelries, rarity, 'armor'); // Changed to 'armor'
        
        // If we got a template item, ensure it has the correct type
        if (selected) {
            selected.type = 'armor';
            return selected;
        }
        
        return this.generateCustomJewelry(rarity, jewelryType);
    }

    static generateCustomJewelry(rarity, jewelryType = 'rings') {
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const jewelryBaseName = jewelryType.slice(0,-1); // ring from rings
        
        // Determine the correct slot based on jewelry type
        let slot;
        if (jewelryType === 'rings') {
            slot = Math.random() < 0.5 ? 'ring1' : 'ring2';
        } else if (jewelryType === 'amulets') {
            slot = 'amulet';
        } else {
            slot = jewelryType.slice(0,-1); // fallback to singular form
        }
        
        return {
            name: `${prefix} ${jewelryBaseName.charAt(0).toUpperCase() + jewelryBaseName.slice(1)} ${dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)]}`,
            type: 'armor', // Changed from itemCategories.JEWELRY to 'armor'
            subType: jewelryType,
            slot: slot, // Added slot property
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