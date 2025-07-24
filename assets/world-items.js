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
    "weapons": {
        "swords": [
            { "name": "Rusted Blade", "damage": "1d4", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Cracked Shortsword", "damage": "1d4-1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Bent Iron Sword", "damage": "1d6-1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Training Sword", "damage": "1d4+1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Wooden Practice Sword", "damage": "1d3", "rarity": "COMMON", "effects": ["blunt"], "slot": "mainHand" },
            { "name": "Squire's Longsword", "damage": "1d8-2", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Iron Shortsword", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Militia Arming Sword", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Common Scimitar", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Weathered Longsword", "damage": "1d8-1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Heirloom Blade", "damage": "1d8-1", "rarity": "COMMON", "effects": ["sentimental_value"], "slot": "mainHand" },
            { "name": "Guard's Falchion", "damage": "1d8", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Steel Sword", "damage": "1d6+1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Mercenary's Broadsword", "damage": "1d8", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Polished Rapier", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Legionnaire's Gladius", "damage": "1d8", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Centurion's Spatha", "damage": "1d8", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Auxiliary's Kopis", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Broadsword", "damage": "1d8", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Claymore", "damage": "1d10", "rarity": "COMMON", "effects": ["two_handed"], "slot": "mainHand" },
            { "name": "Zweihander", "damage": "2d6-1", "rarity": "COMMON", "effects": ["two_handed", "heavy"], "slot": "mainHand" },
            { "name": "Squire's Foil", "damage": "1d6", "rarity": "COMMON", "effects": ["precise_strike_1"], "slot": "mainHand" },
            { "name": "Fencing Saber", "damage": "1d6", "rarity": "COMMON", "effects": ["swift_strike_1"], "slot": "mainHand" },
            { "name": "Estoc", "damage": "1d6+1", "rarity": "COMMON", "effects": ["armor_piercing_tiny"], "slot": "mainHand" },
            { "name": "Silver Blade", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["blessed", "undead_bane"], "slot": "mainHand" },
            { "name": "Moon-Touched Scythe", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["lunar_power", "bonus_damage_vs_lycanthropes"], "slot": "mainHand" },
            { "name": "Consecrated Claymore", "damage": "1d10+1", "rarity": "UNCOMMON", "effects": ["blessed", "divine_glow"], "slot": "mainHand" },
            { "name": "Elven Longsword", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": ["swift_strike"], "slot": "mainHand" },
            { "name": "Sylvanwood Blade", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["nature_attunement", "lightweight"], "slot": "mainHand" },
            { "name": "Whisperwind Rapier", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["silent_strikes"], "slot": "mainHand" },
            { "name": "Dwarven Warblade", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["armor_piercing_1"], "slot": "mainHand" },
            { "name": "Runic Bastard Sword", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["rune_of_strength"], "slot": "mainHand" },
            { "name": "Mithril Shortsword", "damage": "1d6+2", "rarity": "UNCOMMON", "effects": ["lightweight", "enchanted"], "slot": "mainHand" },
            { "name": "Knight's Arming Sword", "damage": "1d8+2", "rarity": "UNCOMMON", "effects": ["fortified_grip"], "slot": "mainHand" },
            { "name": "Cavalier's Lancehead Sword", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["mounted_bonus"], "slot": "mainHand" },
            { "name": "Crusader's Longsword", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": ["holy_damage_tiny"], "slot": "mainHand" },
            { "name": "Cutlass of the Seas", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["bleeding_1"], "slot": "mainHand" },
            { "name": "Pirate's Saber", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["parry_bonus"], "slot": "mainHand" },
            { "name": "Kraken's Tooth", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["bonus_damage_vs_aquatic"], "slot": "mainHand" },
            { "name": "Orcish Scimitar", "damage": "1d6+2", "rarity": "UNCOMMON", "effects": ["brutal_swing"], "slot": "mainHand" },
            { "name": "Troll-Gut Ripper", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["rending"], "slot": "mainHand" },
            { "name": "Hobgoblin War Sword", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": ["disciplined_strike"], "slot": "mainHand" },
            { "name": "Rapier of Dueling", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["riposte_1"], "slot": "mainHand" },
            { "name": "Blade of the Matador", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["dodge_bonus"], "slot": "mainHand" },
            { "name": "Duelist's Pride", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["critical_focus_1"], "slot": "mainHand" },
            { "name": "Acid-Etched Falchion", "damage": "1d8+1d4_acid", "rarity": "RARE", "effects": ["corrosive_finish"], "slot": "mainHand" },
            { "name": "Caustic Claymore", "damage": "1d10+1d4_acid", "rarity": "RARE", "effects": ["melt_armor"], "slot": "mainHand" },
            { "name": "Viper's Kiss", "damage": "1d6+1d6_poison", "rarity": "RARE", "effects": ["paralyzing_toxin"], "slot": "mainHand" },
            { "name": "Flame Tongue", "damage": "1d8+1d4_fire", "rarity": "RARE", "effects": ["fire_damage_aura"], "slot": "mainHand" },
            { "name": "Magma Blade", "damage": "1d8+1d6_fire", "rarity": "RARE", "effects": ["molten_edge"], "slot": "mainHand" },
            { "name": "Sun-forged Scimitar", "damage": "1d6+1d6_radiant", "rarity": "RARE", "effects": ["blinding_flash"], "slot": "mainHand" },
            { "name": "Frost Brand", "damage": "1d8+1d4_cold", "rarity": "RARE", "effects": ["chill_touch"], "slot": "mainHand" },
            { "name": "Winter's Bite", "damage": "1d8+1d6_cold", "rarity": "RARE", "effects": ["freezing_mist"], "slot": "mainHand" },
            { "name": "Glacial Greatsword", "damage": "1d10+1d6_cold", "rarity": "RARE", "effects": ["flash_freeze_crit"], "slot": "mainHand" },
            { "name": "Blade of the Righteous", "damage": "1d10+2", "rarity": "RARE", "effects": ["blessed", "divine_smite"], "slot": "mainHand" },
            { "name": "Sword of Judgment", "damage": "2d6+2", "rarity": "RARE", "effects": ["holy_condemnation", "smite_evil_1"], "slot": "mainHand" },
            { "name": "Paladin's Holy Avenger", "damage": "1d10+1d6_holy", "rarity": "RARE", "effects": ["magic_resistance_aura_small", "dispel_magic_on_hit"], "slot": "mainHand" },
            { "name": "Shadowsteel Katana", "damage": "2d4+2", "rarity": "RARE", "effects": ["stealth_strike", "poisoned_blade_1"], "slot": "mainHand" },
            { "name": "Night's Edge", "damage": "1d8+1d4_shadow", "rarity": "RARE", "effects": ["darkness_on_crit", "stealth_bonus"], "slot": "mainHand" },
            { "name": "Ghost-faced Blade", "damage": "1d8_ethereal", "rarity": "RARE", "effects": ["phase_on_dodge"], "slot": "mainHand" },
            { "name": "Vorpal Sword (Dull)", "damage": "1d12", "rarity": "RARE", "effects": ["keen_edge"], "slot": "mainHand" },
            { "name": "Head-Taker's Zweihander", "damage": "2d6+1", "rarity": "RARE", "effects": ["decapitate_chance_low"], "slot": "mainHand" },
            { "name": "Guillotine Blade", "damage": "1d12", "rarity": "RARE", "effects": ["critical_severity_increase"], "slot": "mainHand" },
            { "name": "Kopesh of the Sands", "damage": "1d8+1", "rarity": "RARE", "effects": ["sand_vortex_on_crit"], "slot": "mainHand" },
            { "name": "Mirage Blade", "damage": "1d8", "rarity": "RARE", "effects": ["create_decoy_on_hit"], "slot": "mainHand" },
            { "name": "Desert Fury", "damage": "1d8+1d4_fire", "rarity": "RARE", "effects": ["blinding_sand_burst"], "slot": "mainHand" },
            { "name": "Kingslayer Blade", "damage": "1d10+1", "rarity": "RARE", "effects": ["bonus_damage_vs_humanoids"], "slot": "mainHand" },
            { "name": "Regicide", "damage": "1d10+2", "rarity": "RARE", "effects": ["bonus_damage_vs_elites", "fear_aura_tiny"], "slot": "mainHand" },
            { "name": "Tyrant's End", "damage": "2d6", "rarity": "RARE", "effects": ["bonus_damage_vs_single_target"], "slot": "mainHand" },
            { "name": "Demon Slayer", "damage": "2d6+2_vs_demons", "rarity": "EPIC", "effects": ["demon_bane", "blessed"], "slot": "mainHand" },
            { "name": "Blade of Fiend-Banishment", "damage": "2d8+1d8_holy_vs_fiends", "rarity": "EPIC", "effects": ["banish_fiend_on_crit", "holy_aura"], "slot": "mainHand" },
            { "name": "Hellfire Executioner", "damage": "2d6+1d6_fire", "rarity": "EPIC", "effects": ["demon_sear", "soul_burn"], "slot": "mainHand" },
            { "name": "Sunblade", "damage": "2d8_radiant", "rarity": "EPIC", "effects": ["radiant_burst", "undead_destroyer"], "slot": "mainHand" },
            { "name": "Dawnbreaker", "damage": "2d8+2_radiant", "rarity": "EPIC", "effects": ["turn_undead_aura", "blinding_light_on_power_attack"], "slot": "mainHand" },
            { "name": "Blade of the Phoenix", "damage": "1d12+1d6_fire", "rarity": "EPIC", "effects": ["fiery_rebirth_on_wielder_death", "fire_immunity"], "slot": "mainHand" },
            { "name": "Dragonfang Blade", "damage": "1d12+1d6_fire", "rarity": "EPIC", "effects": ["dragon_might", "fear_aura_1"], "slot": "mainHand" },
            { "name": "Wyrmstooth Greatsword", "damage": "2d6+1d8_elemental", "rarity": "EPIC", "effects": ["dragon_breath_on_crit", "elemental_resistance_medium"], "slot": "mainHand" },
            { "name": "Drake-Scale Scimitar", "damage": "1d8+1d8_fire", "rarity": "EPIC", "effects": ["ignite", "draconic_speed"], "slot": "mainHand" },
            { "name": "Phase Blade", "damage": "2d6_ethereal", "rarity": "EPIC", "effects": ["phase_strike", "ignore_shields"], "slot": "mainHand" },
            { "name": "Blade of the Ghostly Veil", "damage": "2d8_ethereal", "rarity": "EPIC", "effects": ["incorporeal_form_briefly", "ignores_armor"], "slot": "mainHand" },
            { "name": "Riftmaker", "damage": "2d6+1d6_force", "rarity": "EPIC", "effects": ["planar_strike", "teleport_on_crit"], "slot": "mainHand" },
            { "name": "Stormcaller's Greatsword", "damage": "2d6+1d6_lightning", "rarity": "EPIC", "effects": ["call_lightning_on_crit"], "slot": "mainHand" },
            { "name": "Thunderfury, Blessed Blade of the Windseeker", "damage": "1d8+1d8_lightning", "rarity": "EPIC", "effects": ["chain_lightning", "cyclone_on_crit"], "slot": "mainHand" },
            { "name": "Sky-Cleaver", "damage": "2d6+2", "rarity": "EPIC", "effects": ["wind_blast", "ride_the_lightning"], "slot": "mainHand" },
            { "name": "Soul Reaver (Weakened)", "damage": "2d6+2_shadow", "rarity": "LEGENDARY", "effects": ["soul_steal_1", "cursed"], "slot": "mainHand" },
            { "name": "Life-Drinker's Falchion", "damage": "2d8+2_necrotic", "rarity": "LEGENDARY", "effects": ["vampiric_aura", "life_steal_large"], "slot": "mainHand" },
            { "name": "Heart-Taker Blade", "damage": "3d6+3_shadow", "rarity": "LEGENDARY", "effects": ["soul_trap", "fear_aura_2"], "slot": "mainHand" },
            { "name": "Excalibur Fragment", "damage": "2d10+3", "rarity": "LEGENDARY", "effects": ["holy_aura", "leadership_boost"], "slot": "mainHand" },
            { "name": "Blade of the High King", "damage": "3d8+3_holy", "rarity": "LEGENDARY", "effects": ["smite_the_unjust", "unbreakable_will_aura", "worthy_only"], "slot": "mainHand" },
            { "name": "Sword of the Covenant", "damage": "2d12", "rarity": "LEGENDARY", "effects": ["oath_keeper", "inspire_allies", "divine_protection"], "slot": "mainHand" },
            { "name": "Blade of the Inevitable", "damage": "2d8_psychic", "rarity": "LEGENDARY", "effects": ["mind_flay", "cannot_be_disarmed"], "slot": "mainHand" },
            { "name": "Psionic Edge", "damage": "3d6_psychic", "rarity": "LEGENDARY", "effects": ["intellect_devourer", "psychic_domination_chance"], "slot": "mainHand" },
            { "name": "Reality Cutter", "damage": "2d10_force", "rarity": "LEGENDARY", "effects": ["ignore_reality_defenses", "warp_space"], "slot": "mainHand" },
            { "name": "Sword of a Thousand Truths", "damage": "1d100", "rarity": "ARTIFACT", "effects": ["reality_glitch", "sunder_everything", "single_use"], "slot": "mainHand" },
            { "name": "Blade of the End Times", "damage": "4d12_chaos", "rarity": "ARTIFACT", "effects": ["invoke_apocalypse", "unmake", "destroys_wielder_after_use"], "slot": "mainHand" },
            { "name": "The Final Word", "damage": "10d10_sonic", "rarity": "ARTIFACT", "effects": ["silence_all_magic", "shatter_mountains", "consumes_wielder_voice"], "slot": "mainHand" },
            { "name": "Galactic Razor", "damage": "3d8_void", "rarity": "ARTIFACT", "effects": ["void_singularity", "cosmic_horror_aura", "ignores_reality"], "slot": "mainHand" },
            { "name": "Star-Ender's Fang", "damage": "4d10_void", "rarity": "ARTIFACT", "effects": ["devour_light", "create_black_hole", "madness_inducing"], "slot": "mainHand" },
            { "name": "Keyblade of the Nexus", "damage": "3d12_arcane", "rarity": "ARTIFACT", "effects": ["unlock_any_door_or_plane", "seal_the_darkness", "bonds_of_friendship"], "slot": "mainHand" }
        ],
        "staves": [
            { "name": "Gnarled Branch", "damage": "1d4", "rarity": "COMMON", "effects": ["minor_focus"], "slot": "mainHand" },
            { "name": "Twisted Stick", "damage": "1d4-1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Heavy Oak Branch", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Apprentice Staff", "damage": "1d4", "rarity": "COMMON", "effects": ["spell_focus_1"], "slot": "mainHand" },
            { "name": "Novice's Walking Stick", "damage": "1d4", "rarity": "COMMON", "effects": ["cantrip_boost"], "slot": "mainHand" },
            { "name": "Hedge-Wizard's Cane", "damage": "1d6-1", "rarity": "COMMON", "effects": ["mana_boost_tiny"], "slot": "mainHand" },
            { "name": "Hardwood Staff", "damage": "1d6", "rarity": "COMMON", "effects": ["mana_regen_tiny"], "slot": "mainHand" },
            { "name": "Ashwood Staff", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Yew Wand", "damage": "1d2", "rarity": "COMMON", "effects": ["spell_focus_1"], "slot": "mainHand" },
            { "name": "Iron-shod Quarterstaff", "damage": "1d8", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Reinforced Staff", "damage": "1d6+1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Pilgrim's Staff", "damage": "1d6", "rarity": "COMMON", "effects": ["endurance_tiny"], "slot": "mainHand" },
            { "name": "Crystal Staff", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["mana_boost_small", "enchanted"], "slot": "mainHand" },
            { "name": "Quartz-Tipped Scepter", "damage": "1d4", "rarity": "UNCOMMON", "effects": ["focus_magic", "amplify_light_magic"], "slot": "mainHand" },
            { "name": "Amethyst Rod", "damage": "1d4", "rarity": "UNCOMMON", "effects": ["empower_psychic_1", "mana_boost_small"], "slot": "mainHand" },
            { "name": "Shaman's Rainstick", "damage": "1d4", "rarity": "UNCOMMON", "effects": ["empower_water_1", "minor_healing_hymn"], "slot": "mainHand" },
            { "name": "Witch Doctor's Fetish", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["minor_curse", "spirit_communion"], "slot": "mainHand" },
            { "name": "Totemic Staff", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["empower_spirit_animal_1"], "slot": "mainHand" },
            { "name": "Runed Quarterstaff", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["empower_elemental_1"], "slot": "mainHand" },
            { "name": "Staff of the Fire-Caller", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["empower_fire_1"], "slot": "mainHand" },
            { "name": "Staff of the Stone-Shaper", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["empower_earth_1"], "slot": "mainHand" },
            { "name": "Staff of Healing", "damage": "1d4", "rarity": "UNCOMMON", "effects": ["mend_wounds_1", "blessed"], "slot": "mainHand" },
            { "name": "Healer's Mercy", "damage": "1d4-1", "rarity": "UNCOMMON", "effects": ["soothe_pain", "remove_poison_1"], "slot": "mainHand" },
            { "name": "Priest's Crosier", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["turn_undead_1", "bless_water"], "slot": "mainHand" },
            { "name": "Staff of the Adder", "damage": "1d6+1d4_poison", "rarity": "UNCOMMON", "effects": ["poison_spray_1"], "slot": "mainHand" },
            { "name": "Viperwood Staff", "damage": "1d6+1d2_poison", "rarity": "UNCOMMON", "effects": ["inject_venom"], "slot": "mainHand" },
            { "name": "Swamp-Caller's Staff", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["poison_resistance_small", "minor_acid_splash"], "slot": "mainHand" },
            { "name": "Staff of Power", "damage": "1d8+1", "rarity": "RARE", "effects": ["spell_power_1", "enchanted", "mana_shield"], "slot": "mainHand" },
            { "name": "Rod of Lordly Might (Lesser)", "damage": "1d10", "rarity": "RARE", "effects": ["spell_power_1", "strength_1", "magic_missile_1"], "slot": "mainHand" },
            { "name": "Staff of Spell-Binding", "damage": "1d6", "rarity": "RARE", "effects": ["spell_siphon", "mana_boost_medium"], "slot": "mainHand" },
            { "name": "Archmage's Cane", "damage": "1d6+2", "rarity": "RARE", "effects": ["arcane_potency", "intelligence_1"], "slot": "mainHand" },
            { "name": "Scepter of the Scholar", "damage": "1d4+1", "rarity": "RARE", "effects": ["wisdom_1", "lore_mastery"], "slot": "mainHand" },
            { "name": "Wizard's Focusing Rod", "damage": "1d6", "rarity": "RARE", "effects": ["spell_penetration_tiny", "spell_critical_chance_1"], "slot": "mainHand" },
            { "name": "Staff of the Woodlands", "damage": "1d6", "rarity": "RARE", "effects": ["nature_attunement", "summon_animal_1"], "slot": "mainHand" },
            { "name": "Druid's Living Staff", "damage": "1d8_nature", "rarity": "RARE", "effects": ["entangle", "speak_with_plants"], "slot": "mainHand" },
            { "name": "Elderwood Staff", "damage": "1d6+1", "rarity": "RARE", "effects": ["photosynthesis_mana_regen", "barkskin_1"], "slot": "mainHand" },
            { "name": "Staff of Charming", "damage": "1d4", "rarity": "RARE", "effects": ["charm_person_1"], "slot": "mainHand" },
            { "name": "Enchanter's Scepter", "damage": "1d4", "rarity": "RARE", "effects": ["suggestion_1", "charisma_1"], "slot": "mainHand" },
            { "name": "Rod of Beguiling", "damage": "1d6", "rarity": "RARE", "effects": ["dominate_animal_1"], "slot": "mainHand" },
            { "name": "Pyromancer's Staff", "damage": "1d8+1d6_fire", "rarity": "RARE", "effects": ["fire_mastery_1", "fireball_1"], "slot": "mainHand" },
            { "name": "Cryomancer's Staff", "damage": "1d8+1d6_cold", "rarity": "RARE", "effects": ["cold_mastery_1", "ice_storm_1"], "slot": "mainHand" },
            { "name": "Electromancer's Staff", "damage": "1d8+1d6_lightning", "rarity": "RARE", "effects": ["lightning_mastery_1", "lightning_bolt_1"], "slot": "mainHand" },
            { "name": "Void-Touched Rod", "damage": "1d8+1d4_shadow", "rarity": "EPIC", "effects": ["shadow_bolt", "mana_drain_1"], "slot": "mainHand" },
            { "name": "Staff of the Dark Covenant", "damage": "1d10+1d6_shadow", "rarity": "EPIC", "effects": ["summon_imp", "cursed_ground"], "slot": "mainHand" },
            { "name": "Scepter of the Nether", "damage": "2d6_shadow", "rarity": "EPIC", "effects": ["void_tendrils", "silence_aura_small"], "slot": "mainHand" },
            { "name": "Staff of Elemental Command", "damage": "1d10", "rarity": "EPIC", "effects": ["elemental_mastery", "spell_penetration_1"], "slot": "mainHand" },
            { "name": "Scepter of the Planes", "damage": "1d8", "rarity": "EPIC", "effects": ["summon_elemental_lesser", "planar_attunement"], "slot": "mainHand" },
            { "name": "Rod of Elemental Absorption", "damage": "1d6", "rarity": "EPIC", "effects": ["absorb_elemental_damage", "elemental_nova"], "slot": "mainHand" },
            { "name": "Staff of the Frost Lord", "damage": "1d10+1d8_cold", "rarity": "EPIC", "effects": ["cone_of_cold_1", "freeze_solid_on_crit"], "slot": "mainHand" },
            { "name": "Glacial King's Scepter", "damage": "2d6+1d6_cold", "rarity": "EPIC", "effects": ["absolute_zero_aura", "summon_ice_golem"], "slot": "mainHand" },
            { "name": "Rimeheart Staff", "damage": "1d10+1d10_cold", "rarity": "EPIC", "effects": ["blizzard", "immunity_to_cold"], "slot": "mainHand" },
            { "name": "Staff of Abjuration", "damage": "1d6", "rarity": "EPIC", "effects": ["dispel_magic_1", "spell_resistance_aura_medium"], "slot": "mainHand" },
            { "name": "Mage-Warden's Bastion", "damage": "1d8", "rarity": "EPIC", "effects": ["counterspell", "greater_mana_shield"], "slot": "mainHand" },
            { "name": "Aegis Staff", "damage": "1d6+2", "rarity": "EPIC", "effects": ["invulnerability_short", "spell_deflection"], "slot": "mainHand" },
            { "name": "Lichbone Staff", "damage": "2d6_necrotic", "rarity": "LEGENDARY", "effects": ["animate_dead_1", "cursed", "fear_aura_2"], "slot": "mainHand" },
            { "name": "Staff of the Necromancer King", "damage": "2d8_necrotic", "rarity": "LEGENDARY", "effects": ["create_undead", "control_undead_aura", "phylactery_link"], "slot": "mainHand" },
            { "name": "Soul-Eater's Scepter", "damage": "3d6_necrotic", "rarity": "LEGENDARY", "effects": ["devour_soul", "speak_with_dead", "lichdom_path"], "slot": "mainHand" },
            { "name": "Staff of the World-Tree", "damage": "2d8_nature", "rarity": "LEGENDARY", "effects": ["summon_treant", "entangling_roots_aura", "major_healing_burst"], "slot": "mainHand" },
            { "name": "Arch-Druid's Greatstaff", "damage": "3d6_nature", "rarity": "LEGENDARY", "effects": ["shapechange_elemental", "commune_with_nature_god", "forest_walk"], "slot": "mainHand" },
            { "name": "Gaea's Verdant Pillar", "damage": "2d10", "rarity": "LEGENDARY", "effects": ["earthquake", "awaken_forest", "life_aura"], "slot": "mainHand" },
            { "name": "Scepter of the Timeless", "damage": "1d12_time", "rarity": "ARTIFACT", "effects": ["time_stop_short", "accelerate_person", "age_target_1d20_years"], "slot": "mainHand" },
            { "name": "Rod of Ages", "damage": "2d10_time", "rarity": "ARTIFACT", "effects": ["temporal_rewind", "glimpse_future", "paradox_immunity"], "slot": "mainHand" },
            { "name": "Hourglass Staff of the First Clockmaker", "damage": "3d8_time", "rarity": "ARTIFACT", "effects": ["create_time_loop", "erase_from_timeline_chance", "chronal_stasis"], "slot": "mainHand" }
        ],
        "axes": [
            { "name": "Woodcutter's Axe", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Hatchet", "damage": "1d4", "rarity": "COMMON", "effects": ["throwable"], "slot": "mainHand" },
            { "name": "Crude Greataxe", "damage": "1d10-1", "rarity": "COMMON", "effects": ["two_handed"], "slot": "mainHand" },
            { "name": "Iron Handaxe", "damage": "1d6+1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Forester's Axe", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Rusted Battleaxe", "damage": "1d8-1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Stone Tomahawk", "damage": "1d6", "rarity": "COMMON", "effects": ["throwable"], "slot": "mainHand" },
            { "name": "Flint Axe", "damage": "1d6", "rarity": "COMMON", "effects": ["fragile"], "slot": "mainHand" },
            { "name": "Tribal Axe", "damage": "1d8", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Viking Axe", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["shield_breaker"], "slot": "mainHand" },
            { "name": "Raider's Bearded Axe", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["intimidation_tiny"], "slot": "mainHand" },
            { "name": "Skeggox", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["hooking"], "slot": "mainHand" },
            { "name": "Steel Battleaxe", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": ["cleave_1"], "slot": "mainHand" },
            { "name": "Soldier's Axe", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": [], "slot": "mainHand" },
            { "name": "Heavy Handaxe", "damage": "1d6+2", "rarity": "UNCOMMON", "effects": [], "slot": "mainHand" },
            { "name": "Dwarven Beard Axe", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["mighty_blow"], "slot": "mainHand" },
            { "name": "Khazad-steel Axe", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["unbreakable"], "slot": "mainHand" },
            { "name": "Miner's War-pick Axe", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["armor_piercing_1"], "slot": "mainHand" },
            { "name": "Goblin-Cleaver", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": ["bonus_damage_vs_goblins"], "slot": "mainHand" },
            { "name": "Orc-Hewer", "damage": "1d10+1", "rarity": "UNCOMMON", "effects": ["bonus_damage_vs_orcs"], "slot": "mainHand" },
            { "name": "Kobold-Splitter", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["bonus_damage_vs_kobolds"], "slot": "mainHand" },
            { "name": "Executioner's Axe", "damage": "1d12", "rarity": "RARE", "effects": ["execution_strike"], "slot": "mainHand" },
            { "name": "Headsman's Greataxe", "damage": "1d12+1", "rarity": "RARE", "effects": ["critical_severity_increase"], "slot": "mainHand" },
            { "name": "Hangman's Chopper", "damage": "2d6", "rarity": "RARE", "effects": ["fear_on_crit"], "slot": "mainHand" },
            { "name": "Axe of the Berserker", "damage": "1d10+2", "rarity": "RARE", "effects": ["berserk_on_crit"], "slot": "mainHand" },
            { "name": "Frenzied Greataxe", "damage": "1d12+1", "rarity": "RARE", "effects": ["frenzy", "reckless_attack"], "slot": "mainHand" },
            { "name": "Rage-Fueled Battleaxe", "damage": "1d10+1d4_rage", "rarity": "RARE", "effects": ["strength_boost_on_hit"], "slot": "mainHand" },
            { "name": "Runic Greataxe", "damage": "1d12+1", "rarity": "RARE", "effects": ["elemental_burst_random"], "slot": "mainHand" },
            { "name": "Axe of Elemental Fury", "damage": "1d12+1d4_elemental", "rarity": "RARE", "effects": ["imbue_with_element"], "slot": "mainHand" },
            { "name": "Storm-forged Axe", "damage": "1d10+1d6_lightning", "rarity": "RARE", "effects": ["shocking_burst"], "slot": "mainHand" },
            { "name": "Axe of Hurling", "damage": "1d8+1", "rarity": "RARE", "effects": ["throwable", "returning_1"], "slot": "mainHand" },
            { "name": "Boomerang Axe", "damage": "1d6+1", "rarity": "RARE", "effects": ["throwable", "returning_1", "ricochet"], "slot": "mainHand" },
            { "name": "Gnomish Rocket Axe", "damage": "1d10+1d6_fire", "rarity": "RARE", "effects": ["throwable", "explosive_landing", "unreliable"], "slot": "mainHand" },
            { "name": "Infernal Greataxe", "damage": "2d6+1d4_fire", "rarity": "EPIC", "effects": ["fire_cleave", "cursed"], "slot": "mainHand" },
            { "name": "Hell-forged Decapitator", "damage": "1d12+1d8_fire", "rarity": "EPIC", "effects": ["soul_sear", "demon_summon_on_kill"], "slot": "mainHand" },
            { "name": "Axe of the Pit Lord", "damage": "2d8+1d6_fire", "rarity": "EPIC", "effects": ["rain_of_fire", "fear_aura_2"], "slot": "mainHand" },
            { "name": "Frost Giant's Cleaver", "damage": "2d8+1d4_cold", "rarity": "EPIC", "effects": ["frost_aura", "slow_on_hit"], "slot": "mainHand" },
            { "name": "Greataxe of the Jötunn", "damage": "2d10+1d6_cold", "rarity": "EPIC", "effects": ["glacial_slam", "immunity_to_cold"], "slot": "mainHand" },
            { "name": "Winter's Maw", "damage": "2d8+2", "rarity": "EPIC", "effects": ["blizzard_on_crit", "freeze_solid"], "slot": "mainHand" },
            { "name": "Screaming Axe of the Depths", "damage": "2d6+1d6_psychic", "rarity": "EPIC", "effects": ["whispers_of_madness", "fear_on_hit"], "slot": "mainHand" },
            { "name": "Void-Caller's Axe", "damage": "2d8+1d4_void", "rarity": "EPIC", "effects": ["tentacle_lash_on_crit", "drive_to_insanity"], "slot": "mainHand" },
            { "name": "Mind-Reaver's Chopper", "damage": "2d6+2", "rarity": "EPIC", "effects": ["intellect_drain", "psychic_scream"], "slot": "mainHand" },
            { "name": "World-Splitter Axe", "damage": "3d6", "rarity": "LEGENDARY", "effects": ["earthquake_stomp", "unbreakable"], "slot": "mainHand" },
            { "name": "Titan's Earth-Breaker", "damage": "2d12+3", "rarity": "LEGENDARY", "effects": ["shatter_ground", "grow_size_briefly", "strength_3"], "slot": "mainHand" },
            { "name": "Seismic Greataxe", "damage": "4d6_force", "rarity": "LEGENDARY", "effects": ["fissure", "unmovable", "sunder_armor"], "slot": "mainHand" },
            { "name": "Gorehowl, Axe of the Warchief", "damage": "2d10+2", "rarity": "LEGENDARY", "effects": ["furious_assault", "intimidation_aura_large", "warchief_challenge"], "slot": "mainHand" },
            { "name": "Blood-Soaked Cleaver of the Horde", "damage": "3d8+2", "rarity": "LEGENDARY", "effects": ["blood_frenzy", "leader_of_the_pack", "unending_rage"], "slot": "mainHand" },
            { "name": "Axe of Cenarius (Corrupted)", "damage": "2d10+1d10_fel", "rarity": "LEGENDARY", "effects": ["fel_corruption", "demonic_strength", "taint_the_land"], "slot": "mainHand" },
            { "name": "Axe of the Apocalypse", "damage": "4d6_chaos", "rarity": "ARTIFACT", "effects": ["sunder_realms", "summon_meteor_shower", "finality"], "slot": "mainHand" },
            { "name": "World-Ender", "damage": "3d12_destruction", "rarity": "ARTIFACT", "effects": ["obliterate", "create_dead_magic_zone", "unavoidable"], "slot": "mainHand" },
            { "name": "Ragnarok, the Sundering", "damage": "5d8_fire_chaos", "rarity": "ARTIFACT", "effects": ["bring_about_the_end_times", "destroy_artifacts", "one_use"], "slot": "mainHand" }
        ],
        "daggers": [
            { "name": "Shiv", "damage": "1d3", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Paring Knife", "damage": "1d2", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Rusty Nail", "damage": "1d2", "rarity": "COMMON", "effects": ["tetanus_chance"], "slot": "mainHand" },
            { "name": "Iron Dagger", "damage": "1d4", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Basic Dirk", "damage": "1d4", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Utility Knife", "damage": "1d4", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Bone Dirk", "damage": "1d4-1", "rarity": "COMMON", "effects": ["fragile"], "slot": "mainHand" },
            { "name": "Flint Knife", "damage": "1d4-1", "rarity": "COMMON", "effects": ["fragile"], "slot": "mainHand" },
            { "name": "Sharpened Femur", "damage": "1d4", "rarity": "COMMON", "effects": ["gruesome"], "slot": "mainHand" },
            { "name": "Tanto", "damage": "1d4", "rarity": "COMMON", "effects": ["armor_piercing_tiny"], "slot": "mainHand" },
            { "name": "Katar", "damage": "1d4", "rarity": "COMMON", "effects": ["punching_dagger"], "slot": "mainHand" },
            { "name": "Rondel Dagger", "damage": "1d4+1", "rarity": "COMMON", "effects": ["armor_piercing_tiny"], "slot": "mainHand" },
            { "name": "Steel Dirk", "damage": "1d4+1", "rarity": "UNCOMMON", "effects": ["quick_stab"], "slot": "mainHand" },
            { "name": "Balanced Throwing Knife", "damage": "1d4", "rarity": "UNCOMMON", "effects": ["throwable", "accurate"], "slot": "mainHand" },
            { "name": "Main Gauche", "damage": "1d4", "rarity": "UNCOMMON", "effects": ["parry_bonus", "off_hand"], "slot": "mainHand" },
            { "name": "Assassin's Stiletto", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["backstab_bonus_1"], "slot": "mainHand" },
            { "name": "Thief's Shiv", "damage": "1d4+1", "rarity": "UNCOMMON", "effects": ["stealth_strike"], "slot": "mainHand" },
            { "name": "Shadow-Thorn", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["bonus_damage_from_shadows"], "slot": "mainHand" },
            { "name": "Ceremonial Athame", "damage": "1d4", "rarity": "UNCOMMON", "effects": ["empower_rituals_1"], "slot": "mainHand" },
            { "name": "Warlock's Sacrificial Knife", "damage": "1d4+1", "rarity": "UNCOMMON", "effects": ["blood_magic_affinity"], "slot": "mainHand" },
            { "name": "Rune-Carved Dirk", "damage": "1d4", "rarity": "UNCOMMON", "effects": ["imbue_with_cantrip"], "slot": "mainHand" },
            { "name": "Gutting Knife", "damage": "1d4+1", "rarity": "UNCOMMON", "effects": ["bleeding_1"], "slot": "mainHand" },
            { "name": "Serrated Dagger", "damage": "1d4", "rarity": "UNCOMMON", "effects": ["rending", "bleeding_1"], "slot": "mainHand" },
            { "name": "Fleshing Blade", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["bonus_damage_vs_unarmored"], "slot": "mainHand" },
            { "name": "Poisoned Kris", "damage": "1d4+1d2_poison", "rarity": "RARE", "effects": ["apply_poison_1"], "slot": "mainHand" },
            { "name": "Serpent's Fang", "damage": "1d4+1d4_poison", "rarity": "RARE", "effects": ["neurotoxin"], "slot": "mainHand" },
            { "name": "Wyvern's Sting", "damage": "1d4+1d6_poison", "rarity": "RARE", "effects": ["virulent_poison"], "slot": "mainHand" },
            { "name": "Sacrificial Dagger", "damage": "1d4+1", "rarity": "RARE", "effects": ["blood_magic_affinity", "cursed"], "slot": "mainHand" },
            { "name": "Bloodletter", "damage": "1d6", "rarity": "RARE", "effects": ["life_steal_tiny", "blood_curse"], "slot": "mainHand" },
            { "name": "Cultist's Athame", "damage": "1d4+1d4_shadow", "rarity": "RARE", "effects": ["contact_other_plane"], "slot": "mainHand" },
            { "name": "Mage-Killer's Poniard", "damage": "1d4", "rarity": "RARE", "effects": ["mana_burn_on_hit", "silence_on_crit"], "slot": "mainHand" },
            { "name": "Spell-Thief's Dirk", "damage": "1d4", "rarity": "RARE", "effects": ["absorb_spell_charge"], "slot": "mainHand" },
            { "name": "Null-Magic Dagger", "damage": "1d6", "rarity": "RARE", "effects": ["dispel_magic_on_hit"], "slot": "mainHand" },
            { "name": "Dagger of Venom", "damage": "1d4+1d6_poison", "rarity": "RARE", "effects": ["potent_poison"], "slot": "mainHand" },
            { "name": "Blackfang", "damage": "1d6+1d4_poison", "rarity": "RARE", "effects": ["necrotic_poison"], "slot": "mainHand" },
            { "name": "Widowmaker", "damage": "1d4+2", "rarity": "RARE", "effects": ["lethal_toxin_on_crit"], "slot": "mainHand" },
            { "name": "Shadowfang", "damage": "1d6+1d4_shadow", "rarity": "EPIC", "effects": ["shadow_step_ability", "critical_bleed"], "slot": "mainHand" },
            { "name": "Dagger of the Night's Veil", "damage": "1d8+1d6_shadow", "rarity": "EPIC", "effects": ["true_invisibility_on_kill", "shadow_meld"], "slot": "mainHand" },
            { "name": "Gloom-wrought Shard", "damage": "2d4+1d4_shadow", "rarity": "EPIC", "effects": ["blindness_on_crit", "umbra_strike"], "slot": "mainHand" },
            { "name": "Heartseeker", "damage": "1d8+2", "rarity": "EPIC", "effects": ["ignore_armor_on_crit", "true_strike_1"], "slot": "mainHand" },
            { "name": "The King's Deflator", "damage": "1d10+2", "rarity": "EPIC", "effects": ["find_the_weakness", "guaranteed_crit_vs_unaware"], "slot": "mainHand" },
            { "name": "Aortic Puncturer", "damage": "2d4+2", "rarity": "EPIC", "effects": ["lethal_strike", "anatomical_precision"], "slot": "mainHand" },
            { "name": "Timeshifting Blade", "damage": "1d6", "rarity": "EPIC", "effects": ["haste_on_crit", "delayed_damage_strike"], "slot": "mainHand" },
            { "name": "Chronal Shiv", "damage": "1d8_time", "rarity": "EPIC", "effects": ["accelerate_on_kill", "rewind_wound"], "slot": "mainHand" },
            { "name": "Blade of Temporal Stasis", "damage": "1d6+1", "rarity": "EPIC", "effects": ["stop_time_on_crit", "paradoxical_strike"], "slot": "mainHand" },
            { "name": "Dagger of the Empty Void", "damage": "2d4", "rarity": "LEGENDARY", "effects": ["banishment_chance", "ethereal_strike"], "slot": "mainHand" },
            { "name": "Rift-Knife", "damage": "2d6_void", "rarity": "LEGENDARY", "effects": ["teleport_target_on_crit", "planar_cut"], "slot": "mainHand" },
            { "name": "Nothingness Shard", "damage": "3d4_void", "rarity": "LEGENDARY", "effects": ["void_burn", "unmaking_touch"], "slot": "mainHand" },
            { "name": "Blade of Betrayal", "damage": "1d10+5", "rarity": "LEGENDARY", "effects": ["true_backstab", "ignores_armor_from_behind", "instant_kill_unaware"], "slot": "mainHand" },
            { "name": "Judas's Kiss", "damage": "2d6+5", "rarity": "LEGENDARY", "effects": ["turn_ally_against_ally", "perfect_deception", "ignores_loyalty"], "slot": "mainHand" },
            { "name": "Caesar's Bane", "damage": "1d12+3", "rarity": "LEGENDARY", "effects": ["multiple_strikes_in_one", "political_assassination", "history_shaper"], "slot": "mainHand" },
            { "name": "Shard of Oblivion", "damage": "3d4_void", "rarity": "ARTIFACT", "effects": ["unmake_target", "void_curse", "attracts_the_void"], "slot": "mainHand" },
            { "name": "The God-Ender", "damage": "4d6_anti_divine", "rarity": "ARTIFACT", "effects": ["deicide", "sever_divine_connection", "eats_souls_of_gods"], "slot": "mainHand" },
            { "name": "Singularity's Edge", "damage": "5d4_void", "rarity": "ARTIFACT", "effects": ["collapse_reality_on_crit", "unravel_existence", "consumes_wielder_slowly"], "slot": "mainHand" }
        ],
        "bows": [
            { "name": "Shortbow", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Sapling Bow", "damage": "1d4", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Self Bow", "damage": "1d6-1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Hunting Bow", "damage": "1d6+1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Trapper's Bow", "damage": "1d6", "rarity": "COMMON", "effects": ["bonus_damage_vs_beasts"], "slot": "mainHand" },
            { "name": "Militia Bow", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Crude Longbow", "damage": "1d8-1", "rarity": "COMMON", "effects": ["heavy_draw"], "slot": "mainHand" },
            { "name": "Warbow", "damage": "1d8", "rarity": "COMMON", "effects": ["heavy_draw"], "slot": "mainHand" },
            { "name": "Yew Longbow", "damage": "1d8", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Elven Longbow", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["increased_range"], "slot": "mainHand" },
            { "name": "Silverwood Bow", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["silent_shot_tiny"], "slot": "mainHand" },
            { "name": "Scout's Recurve Bow", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["quick_draw"], "slot": "mainHand" },
            { "name": "Composite Bow", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": ["piercing_shot_1"], "slot": "mainHand" },
            { "name": "Reinforced Longbow", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": ["strength_bonus"], "slot": "mainHand" },
            { "name": "Steel-limbed Bow", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["armor_piercing_1"], "slot": "mainHand" },
            { "name": "Nomad's Horsebow", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["no_penalty_mounted"], "slot": "mainHand" },
            { "name": "Steppe Recurve Bow", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["no_penalty_mounted"], "slot": "mainHand" },
            { "name": "Outrider's Bow", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["skirmisher_bonus"], "slot": "mainHand" },
            { "name": "Bow of the Swift Arrow", "damage": "1d6+1", "rarity": "RARE", "effects": ["rapid_fire_1", "dexterity_1"], "slot": "mainHand" },
            { "name": "Wind-Rider's Bow", "damage": "1d8", "rarity": "RARE", "effects": ["swift", "hail_of_arrows"], "slot": "mainHand" },
            { "name": "Quickstring Recurve", "damage": "1d6+2", "rarity": "RARE", "effects": ["rapid_shot_2"], "slot": "mainHand" },
            { "name": "Eagle Eye Longbow", "damage": "1d10", "rarity": "RARE", "effects": ["sniper_shot", "perception_1"], "slot": "mainHand" },
            { "name": "Hawkeye Bow", "damage": "1d10", "rarity": "RARE", "effects": ["deadeye_aura", "increased_crit_chance_1"], "slot": "mainHand" },
            { "name": "Kestrel's Sight", "damage": "1d8+1", "rarity": "RARE", "effects": ["true_strike_1", "long_range_expert"], "slot": "mainHand" },
            { "name": "Web-spinner Bow", "damage": "1d8", "rarity": "RARE", "effects": ["ensnaring_arrow"], "slot": "mainHand" },
            { "name": "Spider-silk Bow", "damage": "1d8", "rarity": "RARE", "effects": ["poisoned_arrow", "web_arrow"], "slot": "mainHand" },
            { "name": "Tanglethorn Bow", "damage": "1d6", "rarity": "RARE", "effects": ["entangling_arrow", "barbed_arrow"], "slot": "mainHand" },
            { "name": "Hornbow of the Centaur", "damage": "1d10+1", "rarity": "RARE", "effects": ["mighty_draw_bonus"], "slot": "mainHand" },
            { "name": "Beast-Lord's Greatbow", "damage": "1d12", "rarity": "RARE", "effects": ["bonus_damage_vs_large_creatures"], "slot": "mainHand" },
            { "name": "Giant-Slayer's Bow", "damage": "1d10+2", "rarity": "RARE", "effects": ["knockdown_shot_vs_large"], "slot": "mainHand" },
            { "name": "Storm Bow", "damage": "1d8+1d6_lightning", "rarity": "EPIC", "effects": ["chain_lightning_arrow", "swift"], "slot": "mainHand" },
            { "name": "Sky-Striker Bow", "damage": "1d10+1d6_lightning", "rarity": "EPIC", "effects": ["lightning_arrow", "thunder_shot"], "slot": "mainHand" },
            { "name": "Tempest Longbow", "damage": "2d6+1d4_lightning", "rarity": "EPIC", "effects": ["call_the_storm", "gale_force_arrow"], "slot": "mainHand" },
            { "name": "Phoenix Bow", "damage": "1d10+1d6_fire", "rarity": "EPIC", "effects": ["explosive_arrow", "rebirth_arrow_1"], "slot": "mainHand" },
            { "name": "Sun-fury Bow of the Phoenix", "damage": "1d8+1d8_fire", "rarity": "EPIC", "effects": ["immolation_arrow", "blinding_shot"], "slot": "mainHand" },
            { "name": "Ashenwood Recurve", "damage": "2d6+1d4_fire", "rarity": "EPIC", "effects": ["firestorm_arrow", "cinder_trail"], "slot": "mainHand" },
            { "name": "Soulstring Bow", "damage": "1d8+1d8_necrotic", "rarity": "EPIC", "effects": ["ghost_arrow", "fear_on_kill"], "slot": "mainHand" },
            { "name": "Wraithwood Longbow", "damage": "1d10+1d6_necrotic", "rarity": "EPIC", "effects": ["wailing_arrow", "life_drain_arrow"], "slot": "mainHand" },
            { "name": "Banshee's Wail", "damage": "2d6_necrotic", "rarity": "EPIC", "effects": ["soul_sever_arrow", "curse_of_sorrow"], "slot": "mainHand" },
            { "name": "Whisperwind, Bow of Shadows", "damage": "2d6", "rarity": "LEGENDARY", "effects": ["silent_shot", "invisibility_on_kill", "shadow_damage"], "slot": "mainHand" },
            { "name": "Nightfall, the Umbral Bow", "damage": "2d8_shadow", "rarity": "LEGENDARY", "effects": ["shadow_arrow", "become_shadow", "blind_the_light"], "slot": "mainHand" },
            { "name": "Gloom-Strand Bow", "damage": "3d6_shadow", "rarity": "LEGENDARY", "effects": ["arrow_of_utterdark", "teleport_to_shadows", "fear_aura_large"], "slot": "mainHand" },
            { "name": "Bow of the Star-Hunter", "damage": "2d8_radiant", "rarity": "LEGENDARY", "effects": ["starfall_arrow", "true_sight_while_drawn", "never_miss_celestials"], "slot": "mainHand" },
            { "name": "Sagittarius, the Celestial Bow", "damage": "3d6_radiant", "rarity": "LEGENDARY", "effects": ["constellation_shot", "pierce_the_heavens", "flight"], "slot": "mainHand" },
            { "name": "Comet-Caller Longbow", "damage": "2d10+1d8_radiant", "rarity": "LEGENDARY", "effects": ["meteor_arrow", "lightspeed_draw", "cosmic_guidance"], "slot": "mainHand" },
            { "name": "Heartwood Bow of the First Elves", "damage": "3d6_nature", "rarity": "ARTIFACT", "effects": ["arrow_of_life", "arrow_of_slaying", "forest_meld"], "slot": "mainHand" },
            { "name": "Tel'drassil's Recurve", "damage": "4d6_nature", "rarity": "ARTIFACT", "effects": ["world_tree_arrow", "command_nature", "one_with_the_forest"], "slot": "mainHand" },
            { "name": "Bow of the Infinite Quiver", "damage": "3d8_arcane", "rarity": "ARTIFACT", "effects": ["conjure_any_arrow", "multishot_infinite", "never_needs_drawing"], "slot": "mainHand" }
        ],
        "maces": [
            { "name": "Wooden Club", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Tree Branch", "damage": "1d4", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Large Rock", "damage": "1d4", "rarity": "COMMON", "effects": ["clumsy"], "slot": "mainHand" },
            { "name": "Iron Mace", "damage": "1d8", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Footman's Mace", "damage": "1d6+1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Simple Cudgel", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Heavy Spiked Club", "damage": "1d8", "rarity": "COMMON", "effects": ["clumsy"], "slot": "mainHand" },
            { "name": "Nail-Studded Bat", "damage": "1d6+1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Ogre's Tooth Club", "damage": "1d10-1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Steel Morningstar", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": ["armor_denting"], "slot": "mainHand" },
            { "name": "Spiked Mace", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["armor_piercing_tiny"], "slot": "mainHand" },
            { "name": "Brutal Cudgel", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["dazing_blow"], "slot": "mainHand" },
            { "name": "Cleric's Holy Mace", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["blessed", "turn_undead_1"], "slot": "mainHand" },
            { "name": "Acolyte's Cudgel", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["blessed", "minor_divine_flare"], "slot": "mainHand" },
            { "name": "Mace of Sanctity", "damage": "1d6+1d2_holy", "rarity": "UNCOMMON", "effects": ["consecrate_ground_tiny"], "slot": "mainHand" },
            { "name": "Blacksmith's Maul (Small)", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["heavy_impact"], "slot": "mainHand" },
            { "name": "Heavy Iron Maul", "damage": "1d10+1", "rarity": "UNCOMMON", "effects": ["sunder_armor_1"], "slot": "mainHand" },
            { "name": "Stone Breaker", "damage": "1d12", "rarity": "UNCOMMON", "effects": ["bonus_damage_vs_constructs"], "slot": "mainHand" },
            { "name": "Flanged Mace", "damage": "1d10", "rarity": "RARE", "effects": ["stunning_blow_1"], "slot": "mainHand" },
            { "name": "Concussion Mace", "damage": "1d8+1", "rarity": "RARE", "effects": ["disorient_on_hit"], "slot": "mainHand" },
            { "name": "Bone-Breaker", "damage": "1d10+1", "rarity": "RARE", "effects": ["crippling_blow"], "slot": "mainHand" },
            { "name": "Mace of Disruption", "damage": "1d8+2_vs_undead", "rarity": "RARE", "effects": ["disrupt_undead", "radiant_damage"], "slot": "mainHand" },
            { "name": "Sun-Blessed Morningstar", "damage": "1d8+1d4_radiant", "rarity": "RARE", "effects": ["destroy_undead_on_crit"], "slot": "mainHand" },
            { "name": "Grave-Warden's Mace", "damage": "1d10", "rarity": "RARE", "effects": ["undead_bane", "spirit_shackle"], "slot": "mainHand" },
            { "name": "Mace of the Inquisitor", "damage": "1d8+1", "rarity": "RARE", "effects": ["smite_heretic_1", "intimidation_1"], "slot": "mainHand" },
            { "name": "Mace of Truth", "damage": "1d8", "rarity": "RARE", "effects": ["compel_truth_on_crit", "holy_fire"], "slot": "mainHand" },
            { "name": "Witch-Hunter's Cudgel", "damage": "1d10", "rarity": "RARE", "effects": ["silence_on_hit", "magic_resistance_small"], "slot": "mainHand" },
            { "name": "Earthshaker Maul", "damage": "2d6", "rarity": "EPIC", "effects": ["earth_tremor", "strength_1"], "slot": "mainHand" },
            { "name": "Mountain-Fall Maul", "damage": "1d12+1d4_force", "rarity": "EPIC", "effects": ["shockwave_slam", "knockdown_large"], "slot": "mainHand" },
            { "name": "Stone-Giant's Club", "damage": "2d8", "rarity": "EPIC", "effects": ["hurl_boulder", "mighty_strength"], "slot": "mainHand" },
            { "name": "Skullcrusher", "damage": "1d12+2", "rarity": "EPIC", "effects": ["brutal_critical", "fear_on_crit"], "slot": "mainHand" },
            { "name": "The Head-Taker", "damage": "2d8+2", "rarity": "EPIC", "effects": ["concussive_wave", "intimidation_aura_medium"], "slot": "mainHand" },
            { "name": "Nightmare Mace", "damage": "1d10+1d8_psychic", "rarity": "EPIC", "effects": ["terror_strike", "horrifying_visage"], "slot": "mainHand" },
            { "name": "Void-touched Star", "damage": "1d10+1d8_shadow", "rarity": "EPIC", "effects": ["shadow_nova_on_crit", "cursed"], "slot": "mainHand" },
            { "name": "Entropy Mace", "damage": "2d6+1d6_void", "rarity": "EPIC", "effects": ["decaying_touch", "mana_corruption"], "slot": "mainHand" },
            { "name": "Dark Star Morningstar", "damage": "1d12_shadow", "rarity": "EPIC", "effects": ["blackout_on_crit", "gravity_well_pull"], "slot": "mainHand" },
            { "name": "Mace of the Heavens", "damage": "2d8_radiant", "rarity": "LEGENDARY", "effects": ["divine_judgment", "aoe_heal_on_smite"], "slot": "mainHand" },
            { "name": "Light of Dawn", "damage": "2d10_radiant", "rarity": "LEGENDARY", "effects": ["sunburst", "healing_light_aura", "blind_the_wicked"], "slot": "mainHand" },
            { "name": "Scepter of Divine Retribution", "damage": "3d6+3_holy", "rarity": "LEGENDARY", "effects": ["call_angelic_host", "resurrection_on_ally_death", "holy_ground_aura"], "slot": "mainHand" },
            { "name": "The Unstoppable Force", "damage": "2d12", "rarity": "LEGENDARY", "effects": ["ignore_armor", "knockback_large", "shatter_weapon_on_crit"], "slot": "mainHand" },
            { "name": "The Immovable Object's Counterpart", "damage": "3d8_force", "rarity": "LEGENDARY", "effects": ["unavoidable_strike", "break_the_unbreakable", "unstoppable_charge"], "slot": "mainHand" },
            { "name": "Juggernaut's Maul", "damage": "4d6", "rarity": "LEGENDARY", "effects": ["ignore_crowd_control", "damage_ramps_up", "momentum_charge"], "slot": "mainHand" },
            { "name": "World-Breaker's Maul", "damage": "3d8_force", "rarity": "ARTIFACT", "effects": ["sunder_structure", "ripple_of_destruction", "permanent_slow_aura"], "slot": "mainHand" },
            { "name": "Planet-Cracker Scepter", "damage": "4d10_force", "rarity": "ARTIFACT", "effects": ["destabilize_terrain", "create_earthquake", "gravity_inversion"], "slot": "mainHand" },
            { "name": "The Big Bang Mace", "damage": "10d6_primordial", "rarity": "ARTIFACT", "effects": ["creation_and_destruction", "reshape_reality", "single_use_universe_ender"], "slot": "mainHand" }
        ],
        "hammers": [
            { "name": "Smith's Hammer", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Tack Hammer", "damage": "1d2", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Mallet", "damage": "1d4", "rarity": "COMMON", "effects": ["blunt"], "slot": "mainHand" },
            { "name": "Light Hammer", "damage": "1d4", "rarity": "COMMON", "effects": ["throwable"], "slot": "mainHand" },
            { "name": "Rock Hammer", "damage": "1d4+1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Gavel", "damage": "1d3", "rarity": "COMMON", "effects": ["non_lethal_option"], "slot": "mainHand" },
            { "name": "Spiked Hammer", "damage": "1d6", "rarity": "COMMON", "effects": ["piercing_blow"], "slot": "mainHand" },
            { "name": "War Pick", "damage": "1d8", "rarity": "COMMON", "effects": ["armor_piercing_tiny"], "slot": "mainHand" },
            { "name": "Mattock", "damage": "1d6", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Warhammer", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["sunder_armor_1"], "slot": "mainHand" },
            { "name": "Footman's Hammer", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": [], "slot": "mainHand" },
            { "name": "Great Maul", "damage": "2d6-1", "rarity": "UNCOMMON", "effects": ["two_handed", "heavy"], "slot": "mainHand" },
            { "name": "Dwarven Throwing Hammer", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["returning_1", "mighty_throw"], "slot": "mainHand" },
            { "name": "Iron-bound Throwing Hammer", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["throwable", "returning_1"], "slot": "mainHand" },
            { "name": "Rune-etched Thrower", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["throwable", "returning_1", "shocking_burst_tiny"], "slot": "mainHand" },
            { "name": "Claw Hammer", "damage": "1d4", "rarity": "UNCOMMON", "effects": ["disarm_bonus"], "slot": "mainHand" },
            { "name": "Prying Hammer", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["utility_pry"], "slot": "mainHand" },
            { "name": "Engineer's Hammer", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["repair_construct_1"], "slot": "mainHand" },
            { "name": "Meteor Hammer", "damage": "1d12", "rarity": "RARE", "effects": ["impact_tremor", "knockback_1"], "slot": "mainHand" },
            { "name": "Falling Star Maul", "damage": "2d6+1d4_fire", "rarity": "RARE", "effects": ["fiery_impact", "crater_on_slam"], "slot": "mainHand" },
            { "name": "Cometstrike Hammer", "damage": "1d10+2", "rarity": "RARE", "effects": ["stunning_blow_1", "knockdown_1"], "slot": "mainHand" },
            { "name": "Hammer of Righteous Fury", "damage": "1d10+1d4_radiant", "rarity": "RARE", "effects": ["blessed_weapon", "smite_evil_1"], "slot": "mainHand" },
            { "name": "Paladin's Warhammer", "damage": "1d10+1d6_holy", "rarity": "RARE", "effects": ["divine_flare", "turn_undead_2"], "slot": "mainHand" },
            { "name": "Hammer of Judgment", "damage": "2d6_radiant", "rarity": "RARE", "effects": ["condemn_the_wicked", "holy_aura_tiny"], "slot": "mainHand" },
            { "name": "Stoneforger's Hammer", "damage": "1d10", "rarity": "RARE", "effects": ["bonus_damage_vs_constructs", "earthbind_on_crit"], "slot": "mainHand" },
            { "name": "Obsidian Maul", "damage": "1d12", "rarity": "RARE", "effects": ["bonus_damage_vs_elementals", "shatter"], "slot": "mainHand" },
            { "name": "Golem-Breaker", "damage": "2d6+2", "rarity": "RARE", "effects": ["disrupt_construct", "armor_sunder_large"], "slot": "mainHand" },
            { "name": "Thunderstrike Hammer", "damage": "2d6+1d6_lightning", "rarity": "EPIC", "effects": ["call_lightning_1", "shockwave_on_slam"], "slot": "mainHand" },
            { "name": "Storm-Caller's Maul", "damage": "1d12+1d8_lightning", "rarity": "EPIC", "effects": ["static_charge_aura", "ball_lightning_on_crit"], "slot": "mainHand" },
            { "name": "Hammer of the Tempest", "damage": "2d8+1d6_lightning", "rarity": "EPIC", "effects": ["cyclone_blast", "lightning_shield"], "slot": "mainHand" },
            { "name": "Forgefire Maul", "damage": "2d8+1d6_fire", "rarity": "EPIC", "effects": ["molten_core", "heat_aura"], "slot": "mainHand" },
            { "name": "Sun-Core Hammer", "damage": "2d6+1d8_fire", "rarity": "EPIC", "effects": ["superheated", "incinerate_on_crit"], "slot": "mainHand" },
            { "name": "Volcanic Warhammer", "damage": "1d12+1d6_fire", "rarity": "EPIC", "effects": ["magma_burst", "fire_immunity"], "slot": "mainHand" },
            { "name": "Doomhammer", "damage": "2d8_elemental", "rarity": "EPIC", "effects": ["elemental_fury", "spirit_link"], "slot": "mainHand" },
            { "name": "Hammer of the Elements", "damage": "2d6+2_elemental", "rarity": "EPIC", "effects": ["invoke_elemental_fury", "earth_wind_fire_and_water"], "slot": "mainHand" },
            { "name": "Shaman-Lord's Maul", "damage": "2d10", "rarity": "EPIC", "effects": ["ancestral_might", "chain_heal_on_hit"], "slot": "mainHand" },
            { "name": "Mjolnir's Echo", "damage": "3d6_lightning", "rarity": "LEGENDARY", "effects": ["chain_lightning_storm", "flight_brief", "worthy_only"], "slot": "mainHand" },
            { "name": "The Storm's Fury", "damage": "2d12+1d8_lightning", "rarity": "LEGENDARY", "effects": ["become_the_storm", "thundergods_wrath", "unworthy_shock"], "slot": "mainHand" },
            { "name": "Stormbreaker", "damage": "3d8_lightning", "rarity": "LEGENDARY", "effects": ["bifrost_summon", "decapitate_gods", "worthy_only"], "slot": "mainHand" },
            { "name": "Hammer of the Creator", "damage": "2d12_force", "rarity": "LEGENDARY", "effects": ["unmake_construct", "master_craftsman_aura", "build_structure_instantly"], "slot": "mainHand" },
            { "name": "World-Forger's Maul", "damage": "4d6_force", "rarity": "LEGENDARY", "effects": ["shape_the_earth", "masterwork_creation", "unbreakable_defense"], "slot": "mainHand" },
            { "name": "The Architect's Will", "damage": "3d10_force", "rarity": "LEGENDARY", "effects": ["instant_fortress", "command_constructs", "perfect_design"], "slot": "mainHand" },
            { "name": "Ragnarok's Anvil", "damage": "4d8_fire", "rarity": "ARTIFACT", "effects": ["world_ender_strike", "summons_fire_elementals", "melts_artifacts"], "slot": "mainHand" },
            { "name": "The Shattering Star", "damage": "5d10_destruction", "rarity": "ARTIFACT", "effects": ["supernova_blast", "gravity_crush", "consumes_wielder_in_black_hole"], "slot": "mainHand" },
            { "name": "Hammer of a Billion Suns", "damage": "6d8_fire_radiant", "rarity": "ARTIFACT", "effects": ["ignite_stars", "cosmic_forge", "ultimate_creation_and_destruction"], "slot": "mainHand" }
        ],
        "spears": [
            { "name": "Pointed Stick", "damage": "1d4", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Sharpened Pole", "damage": "1d6-1", "rarity": "COMMON", "effects": ["reach"], "slot": "mainHand" },
            { "name": "Makeshift Javelin", "damage": "1d4", "rarity": "COMMON", "effects": ["throwable"], "slot": "mainHand" },
            { "name": "Hunting Spear", "damage": "1d6", "rarity": "COMMON", "effects": ["reach"], "slot": "mainHand" },
            { "name": "Boar Spear", "damage": "1d6+1", "rarity": "COMMON", "effects": ["brace"], "slot": "mainHand" },
            { "name": "Shortspear", "damage": "1d6", "rarity": "COMMON", "effects": ["throwable"], "slot": "mainHand" },
            { "name": "Fisherman's Trident", "damage": "1d6", "rarity": "COMMON", "effects": ["bonus_vs_aquatic"], "slot": "mainHand" },
            { "name": "Frog Gig", "damage": "1d4", "rarity": "COMMON", "effects": ["bonus_vs_small_creatures"], "slot": "mainHand" },
            { "name": "Eel Catcher's Pike", "damage": "1d8", "rarity": "COMMON", "effects": ["reach"], "slot": "mainHand" },
            { "name": "Iron Spear", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["reach", "brace"], "slot": "mainHand" },
            { "name": "Infantry Spear", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["reach", "set_vs_charge"], "slot": "mainHand" },
            { "name": "Steel-tipped Javelin", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["throwable", "armor_piercing_tiny"], "slot": "mainHand" },
            { "name": "Harpoon", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["barbed", "drag_target"], "slot": "mainHand" },
            { "name": "Whaler's Lance", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": ["barbed", "drag_target", "heavy"], "slot": "mainHand" },
            { "name": "Shark-tooth Spear", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["bleeding_1"], "slot": "mainHand" },
            { "name": "Shortspear", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["throwable", "quick_thrust"], "slot": "mainHand" },
            { "name": "Gladiator's Trident", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["disarm_bonus"], "slot": "mainHand" },
            { "name": "Retarius' Net-spear", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["net_attack_combo"], "slot": "mainHand" },
            { "name": "Pike of the Legion", "damage": "1d10", "rarity": "RARE", "effects": ["reach", "phalanx_formation_bonus"], "slot": "mainHand" },
            { "name": "Hoplite's Dory", "damage": "1d10", "rarity": "RARE", "effects": ["reach", "shield_wall_synergy"], "slot": "mainHand" },
            { "name": "Sarissa", "damage": "1d12", "rarity": "RARE", "effects": ["extreme_reach", "unwieldy"], "slot": "mainHand" },
            { "name": "Spear of Impaling", "damage": "1d8+2", "rarity": "RARE", "effects": ["impale", "bleeding_2"], "slot": "mainHand" },
            { "name": "Vlad's Pike", "damage": "1d10+1", "rarity": "RARE", "effects": ["impale", "fear_on_crit"], "slot": "mainHand" },
            { "name": "Barbed Lance", "damage": "1d12", "rarity": "RARE", "effects": ["grievous_wound", "mounted_charge_bonus"], "slot": "mainHand" },
            { "name": "Lightning Javelin", "damage": "1d6+1d6_lightning", "rarity": "RARE", "effects": ["throwable", "shocking_burst"], "slot": "mainHand" },
            { "name": "Thunderbolt Spear", "damage": "1d8+1d4_lightning", "rarity": "RARE", "effects": ["throwable", "returning_1", "sonic_boom"], "slot": "mainHand" },
            { "name": "Javelin of the Storm", "damage": "1d6+1", "rarity": "RARE", "effects": ["throwable", "call_lightning_1"], "slot": "mainHand" },
            { "name": "Windcarver Javelin", "damage": "1d6+1", "rarity": "EPIC", "effects": ["aero_slice", "returning_2", "swift"], "slot": "mainHand" },
            { "name": "Hurricane's Pike", "damage": "1d8+1d6_wind", "rarity": "EPIC", "effects": ["gale_force_thrust", "cyclone_on_crit"], "slot": "mainHand" },
            { "name": "Sky-Piercer", "damage": "1d10", "rarity": "EPIC", "effects": ["throwable", "returning_2", "sonic_thrust"], "slot": "mainHand" },
            { "name": "Dragonbone Lance", "damage": "1d12+2", "rarity": "EPIC", "effects": ["mounted_charge_bonus", "dragon_slaying_edge"], "slot": "mainHand" },
            { "name": "Wyrm-Hunter's Pike", "damage": "1d10+1d8_vs_dragons", "rarity": "EPIC", "effects": ["pierce_dragonscale", "dragon_fear_immunity"], "slot": "mainHand" },
            { "name": "Lance of the Dragon Rider", "damage": "1d12+1d6_fire", "rarity": "EPIC", "effects": ["dragon_fire_charge", "mounted_mastery"], "slot": "mainHand" },
            { "name": "Spear of the Sun", "damage": "1d8+1d8_radiant", "rarity": "EPIC", "effects": ["solar_flare", "blinding_strike"], "slot": "mainHand" },
            { "name": "Trident of the Solar Warden", "damage": "1d10+1d6_radiant", "rarity": "EPIC", "effects": ["sunbeam", "holy_fire_on_hit"], "slot": "mainHand" },
            { "name": "Daybreak Lance", "damage": "1d12_radiant", "rarity": "EPIC", "effects": ["dispel_darkness_aura", "undead_destroyer"], "slot": "mainHand" },
            { "name": "Gungnir's Whisper", "damage": "2d8", "rarity": "LEGENDARY", "effects": ["never_miss", "true_strike_aura", "divine_reach"], "slot": "mainHand" },
            { "name": "Odin's All-Piercing Spear", "damage": "3d6_force", "rarity": "LEGENDARY", "effects": ["always_hits_target", "rune_of_knowledge", "oath_bound"], "slot": "mainHand" },
            { "name": "The World-Serpent's Tooth", "damage": "2d10", "rarity": "LEGENDARY", "effects": ["poison_of_jormungandr", "unbreakable", "world_ending_venom"], "slot": "mainHand" },
            { "name": "Blood-Drinker's Pike", "damage": "2d6", "rarity": "LEGENDARY", "effects": ["vampiric_strike", "life_steal_aura_small", "reach"], "slot": "mainHand" },
            { "name": "Crimson Lance of the Vampire Lord", "damage": "2d8_necrotic", "rarity": "LEGENDARY", "effects": ["drain_life_fully", "create_vampire_spawn_on_kill", "blood_curse"], "slot": "mainHand" },
            { "name": "Heart-Piercer", "damage": "2d6+3", "rarity": "LEGENDARY", "effects": ["vampiric_mist_form", "dominate_on_impale", "eternal_thirst"], "slot": "mainHand" },
            { "name": "Spear of Destiny", "damage": "3d6_holy", "rarity": "ARTIFACT", "effects": ["fated_strike", "rewrite_history_minor", "unavoidable_wound"], "slot": "mainHand" },
            { "name": "Longinus, the Holy Lance", "damage": "4d6_holy", "rarity": "ARTIFACT", "effects": ["pierce_the_divine", "wound_that_never_heals", "control_fate"], "slot": "mainHand" },
            { "name": "Pillar of Creation", "damage": "3d10_primordial", "rarity": "ARTIFACT", "effects": ["shape_destiny", "create_life", "bind_the_gods"], "slot": "mainHand" }
        ],
        "crossbows": [
            { "name": "Light Crossbow", "damage": "1d8", "rarity": "COMMON", "effects": ["reload_1"], "slot": "mainHand" },
            { "name": "Hunter's Light Crossbow", "damage": "1d8", "rarity": "COMMON", "effects": ["reload_1"], "slot": "mainHand" },
            { "name": "Guard's Crossbow", "damage": "1d8", "rarity": "COMMON", "effects": ["reload_1"], "slot": "mainHand" },
            { "name": "Hand Crossbow", "damage": "1d6", "rarity": "COMMON", "effects": ["reload_1", "can_be_dual_wielded"], "slot": "mainHand" },
            { "name": "Thug's Hand Crossbow", "damage": "1d6", "rarity": "COMMON", "effects": ["reload_1"], "slot": "mainHand" },
            { "name": "Duelist's Hand Crossbow", "damage": "1d6-1", "rarity": "COMMON", "effects": ["reload_1"], "slot": "mainHand" },
            { "name": "Heavy Crossbow", "damage": "1d10", "rarity": "COMMON", "effects": ["reload_2", "armor_piercing_1"], "slot": "mainHand" },
            { "name": "Watchman's Heavy Crossbow", "damage": "1d10", "rarity": "COMMON", "effects": ["reload_2"], "slot": "mainHand" },
            { "name": "Siege Crossbow", "damage": "1d10-1", "rarity": "COMMON", "effects": ["reload_2", "heavy"], "slot": "mainHand" },
            { "name": "Marksman's Crossbow", "damage": "1d8+1", "rarity": "UNCOMMON", "effects": ["reload_1", "increased_crit_chance_1"], "slot": "mainHand" },
            { "name": "Sniper's Light Crossbow", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["reload_1", "headshot_bonus"], "slot": "mainHand" },
            { "name": "Sharpshooter's Crossbow", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["reload_2", "increased_range"], "slot": "mainHand" },
            { "name": "Repeating Crossbow", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["no_reload_5_shots"], "slot": "mainHand" },
            { "name": "Chu-ko-nu", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["no_reload_8_shots", "reduced_damage"], "slot": "mainHand" },
            { "name": "Magazine-fed Crossbow", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["no_reload_4_shots", "jam_chance"], "slot": "mainHand" },
            { "name": "Poisoner's Hand Crossbow", "damage": "1d6", "rarity": "RARE", "effects": ["apply_poison_on_bolt", "quick_shot"], "slot": "mainHand" },
            { "name": "Assassin's Wrist-bow", "damage": "1d4", "rarity": "RARE", "effects": ["concealable", "silent_shot", "apply_poison_on_bolt"], "slot": "mainHand" },
            { "name": "Venom-laced Repeater", "damage": "1d6+1d4_poison", "rarity": "RARE", "effects": ["no_reload_3_shots", "lingering_poison"], "slot": "mainHand" },
            { "name": "Siege-Breaker Arbalest", "damage": "1d12", "rarity": "RARE", "effects": ["reload_3", "shield_splinter", "bonus_damage_vs_structures"], "slot": "mainHand" },
            { "name": "Ballista-bow", "damage": "2d6", "rarity": "RARE", "effects": ["reload_3", "requires_setup", "bonus_damage_vs_large_targets"], "slot": "mainHand" },
            { "name": "Wall-Piercer", "damage": "1d12+1", "rarity": "RARE", "effects": ["reload_2", "armor_sunder_large"], "slot": "mainHand" },
            { "name": "Gnomish Auto-Crossbow", "damage": "2d4", "rarity": "EPIC", "effects": ["fully_automatic", "unreliable", "wild_magic_on_jam"], "slot": "mainHand" },
            { "name": "Goblin Gatling-Bow", "damage": "10d1", "rarity": "EPIC", "effects": ["high_rate_of_fire", "highly_inaccurate", "explodes_on_crit_fail"], "slot": "mainHand" },
            { "name": "Techno-Mage's Arc-Caster", "damage": "1d8+1d6_lightning", "rarity": "EPIC", "effects": ["no_reload_energy_cell", "chain_lightning_bolt"], "slot": "mainHand" },
            { "name": "Shadow-piercer", "damage": "1d10+1d6_shadow", "rarity": "EPIC", "effects": ["reload_1", "ignores_invisibility", "shadow_bolt"], "slot": "mainHand" },
            { "name": "Void-Tipped Arbalest", "damage": "1d12+1d4_shadow", "rarity": "EPIC", "effects": ["reload_2", "banish_on_crit", "soul_sever_bolt"], "slot": "mainHand" },
            { "name": "Nether-Bolt Launcher", "damage": "2d6_shadow", "rarity": "EPIC", "effects": ["no_reload_3_shots", "life_drain_bolt"], "slot": "mainHand" },
            { "name": "Heartseeker Sniper", "damage": "2d8+2", "rarity": "LEGENDARY", "effects": ["reload_2", "guaranteed_crit_vs_unaware", "long_range_expert"], "slot": "mainHand" },
            { "name": "The Final Breath", "damage": "3d6+3", "rarity": "LEGENDARY", "effects": ["reload_2", "assassinate", "ignores_all_defenses_from_stealth"], "slot": "mainHand" },
            { "name": "Fate's Arrow", "damage": "2d10_force", "rarity": "LEGENDARY", "effects": ["reload_1", "bolt_never_misses", "one_shot_one_kill"], "slot": "mainHand" }
        ],
        "polearms": [
            { "name": "Simple Halberd", "damage": "1d10", "rarity": "COMMON", "effects": ["reach", "brace", , "two_handed"], "slot": "mainHand" },
            { "name": "Rusty Voulge", "damage": "1d10-1", "rarity": "COMMON", "effects": ["reach", "two_handed"], "slot": "mainHand" },
            { "name": "Pitchfork", "damage": "1d8", "rarity": "COMMON", "effects": ["reach", "two_handed"], "slot": "mainHand" },
            { "name": "Glaive", "damage": "1d10", "rarity": "COMMON", "effects": ["reach", "sweeping_strike", "two_handed"], "slot": "mainHand" },
            { "name": "Bardiche", "damage": "1d12-1", "rarity": "COMMON", "effects": ["reach", "cleave", "two_handed"], "slot": "mainHand" },
            { "name": "Fauchard", "damage": "1d8", "rarity": "COMMON", "effects": ["reach", "trip", "two_handed"], "slot": "mainHand" },
            { "name": "Billhook", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["reach", "dismount_rider", "two_handed"], "slot": "mainHand" },
            { "name": "Hooked Glaive", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["reach", "disarm", "two_handed"], "slot": "mainHand" },
            { "name": "Man-Catcher", "damage": "1d4", "rarity": "UNCOMMON", "effects": ["reach", "capture", "two_handed"], "slot": "mainHand" },
            { "name": "Lucerne Hammer", "damage": "2d4", "rarity": "UNCOMMON", "effects": ["reach", "bludgeoning_and_piercing", "two_handed"], "slot": "mainHand" },
            { "name": "Bec de Corbin", "damage": "1d10", "rarity": "UNCOMMON", "effects": ["reach", "armor_piercing_1", "two_handed"], "slot": "mainHand" },
            { "name": "Poleaxe", "damage": "1d10+1", "rarity": "UNCOMMON", "effects": ["reach", "versatile", "two_handed"], "slot": "mainHand" },
            { "name": "Reaper's Scythe", "damage": "2d4+1", "rarity": "RARE", "effects": ["cleave_2", "fear_on_crit", "two_handed"], "slot": "mainHand" },
            { "name": "Death's Scythe", "damage": "2d4+1d4_necrotic", "rarity": "RARE", "effects": ["soul_harvest_tiny", "fear_aura_tiny", "two_handed"], "slot": "mainHand" },
            { "name": "War Scythe", "damage": "2d6", "rarity": "RARE", "effects": ["sweeping_cleave", "bleeding_2", "two_handed"], "slot": "mainHand" },
            { "name": "Dragon-tail Naginata", "damage": "1d12", "rarity": "RARE", "effects": ["reach", "dragon_fire_sweep", "two_handed"], "slot": "mainHand" },
            { "name": "Phoenix-Feather Glaive", "damage": "1d10+1d4_fire", "rarity": "RARE", "effects": ["reach", "fiery_arc", "two_handed"], "slot": "mainHand" },
            { "name": "Serpent's Kiss Halberd", "damage": "1d10+1d4_poison", "rarity": "RARE", "effects": ["reach", "poisonous_strike", "two_handed"], "slot": "mainHand" },
            { "name": "Whirlwind Voulge", "damage": "2d6", "rarity": "EPIC", "effects": ["cyclone_attack", "pulls_enemies_in", "two_handed"], "slot": "mainHand" },
            { "name": "Tempest's Reach", "damage": "2d8+1d4_wind", "rarity": "EPIC", "effects": ["gale_force_cleave", "vacuum_pull", "two_handed"], "slot": "mainHand" },
            { "name": "Scythe of the Vortex", "damage": "2d6+2", "rarity": "EPIC", "effects": ["whirlwind_of_steel", "aoe_damage_aura", "two_handed"], "slot": "mainHand" },
            { "name": "Celestial Halberd", "damage": "2d8_radiant", "rarity": "EPIC", "effects": ["reach", "divine_reach", "smite_undead_aura", "two_handed"], "slot": "mainHand" },
            { "name": "Glaive of the Archon", "damage": "2d10_holy", "rarity": "EPIC", "effects": ["reach", "angelic_smite", "blinding_light_sweep", "two_handed"], "slot": "mainHand" },
            { "name": "Pike of the Heavens", "damage": "2d8+2", "rarity": "EPIC", "effects": ["reach", "pierce_the_veil", "holy_ground", "two_handed"], "slot": "mainHand" },
            { "name": "Graviton Glaive", "damage": "2d10_force", "rarity": "LEGENDARY", "effects": ["gravity_well", "manipulate_weight", "reach", "two_handed"], "slot": "mainHand" },
            { "name": "Black Hole Halberd", "damage": "3d8_force", "rarity": "LEGENDARY", "effects": ["singularity_collapse", "time_dilation_field", "reach", "two_handed"], "slot": "mainHand" },
            { "name": "Polearm of the Star's Core", "damage": "4d6_force", "rarity": "LEGENDARY", "effects": ["crushing_gravity", "event_horizon", "reach", "two_handed"], "slot": "mainHand" }
        ],
        "fistWeapons": [
            { "name": "Knuckle Dusters", "damage": "1d4", "rarity": "COMMON", "effects": ["unarmed_synergy"], "slot": "mainHand" },
            { "name": "Brass Knuckles", "damage": "1d4", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Baghnakh", "damage": "1d3", "rarity": "COMMON", "effects": ["bleeding_tiny"], "slot": "mainHand" },
            { "name": "Bladed Gauntlet", "damage": "1d6", "rarity": "COMMON", "effects": ["bleed_on_crit"], "slot": "mainHand" },
            { "name": "Katar Punching Dagger", "damage": "1d4", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Forearm Blades", "damage": "1d6-1", "rarity": "COMMON", "effects": [], "slot": "mainHand" },
            { "name": "Spiked Cestus", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["armor_denting_punch"], "slot": "mainHand" },
            { "name": "Weighted Gauntlets", "damage": "1d4+1", "rarity": "UNCOMMON", "effects": ["dazing_punch"], "slot": "mainHand" },
            { "name": "Iron Claws", "damage": "1d6", "rarity": "UNCOMMON", "effects": ["rending_strikes"], "slot": "mainHand" },
            { "name": "Tiger Claws", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["flurry_of_blows_1"], "slot": "mainHand" },
            { "name": "Mantis Claws", "damage": "1d6+1", "rarity": "UNCOMMON", "effects": ["precise_strikes"], "slot": "mainHand" },
            { "name": "Bear-Claw Gauntlet", "damage": "1d8", "rarity": "UNCOMMON", "effects": ["crushing_blow"], "slot": "mainHand" },
            { "name": "Power Fist (Steam-powered)", "damage": "1d10", "rarity": "RARE", "effects": ["knockback_punch", "slow_swing"], "slot": "mainHand" },
            { "name": "Hydraulic Gauntlet", "damage": "1d10+1", "rarity": "RARE", "effects": ["piston_punch", "stun_on_crit"], "slot": "mainHand" },
            { "name": "Clockwork Cestus", "damage": "2d4", "rarity": "RARE", "effects": ["rapid_jabs", "unreliable"], "slot": "mainHand" },
            { "name": "Dragon-Knuckle Gauntlets", "damage": "1d6+1d4_fire", "rarity": "RARE", "effects": ["burning_fist", "fire_resistance_small"], "slot": "mainHand" },
            { "name": "Salamander's Embrace", "damage": "1d8+1d4_fire", "rarity": "RARE", "effects": ["ignite_on_punch"], "slot": "mainHand" },
            { "name": "Wyrm-Knuckle Cestus", "damage": "1d6+1d4_elemental", "rarity": "RARE", "effects": ["elemental_punch_random"], "slot": "mainHand" },
            { "name": "Void-Touched Claws", "damage": "1d8+1d4_shadow", "rarity": "EPIC", "effects": ["shadow_slash", "life_drain_punch"], "slot": "mainHand" },
            { "name": "Nether-Claw Gauntlets", "damage": "1d10+1d6_shadow", "rarity": "EPIC", "effects": ["void_strike", "teleport_punch"], "slot": "mainHand" },
            { "name": "Grasps of the Abyss", "damage": "2d6_shadow", "rarity": "EPIC", "effects": ["soul_rend", "fear_on_combo"], "slot": "mainHand" },
            { "name": "Fists of the Storm", "damage": "1d8+1d6_lightning", "rarity": "EPIC", "effects": ["thunderous_blow", "chain_lightning_on_combo"], "slot": "mainHand" },
            { "name": "Gauntlets of the Thunder God", "damage": "1d10+1d8_lightning", "rarity": "EPIC", "effects": ["lightning_barrage", "static_field_aura"], "slot": "mainHand" },
            { "name": "Tempest's Fury Fists", "damage": "2d6+1d4_lightning", "rarity": "EPIC", "effects": ["ball_lightning_punch", "ride_the_lightning_charge"], "slot": "mainHand" },
            { "name": "Hands of the Divine", "damage": "2d6_radiant", "rarity": "LEGENDARY", "effects": ["healing_punch", "judgement_fist", "resurrect_on_ko_punch"], "slot": "mainHand" },
            { "name": "Fists of the Heavens", "damage": "2d8_holy", "rarity": "LEGENDARY", "effects": ["divine_combo", "smite_the_wicked_punch", "lay_on_hands_punch"], "slot": "mainHand" },
            { "name": "God-Hand Gauntlets", "damage": "3d6_holy", "rarity": "LEGENDARY", "effects": ["one_punch_deity", "reality_shattering_punch", "bestow_blessing_punch"], "slot": "mainHand" }
        ]
    },
    "armor": {
        "helmets": [
            { "name": "Leather Cap", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "head" },
            { "name": "Cloth Hood", "armor": 0, "rarity": "COMMON", "effects": [], "slot": "head" },
            { "name": "Skullcap", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "head" },
            { "name": "Iron Helm", "armor": 2, "rarity": "COMMON", "effects": [], "slot": "head" },
            { "name": "Spangenhelm", "armor": 2, "rarity": "COMMON", "effects": [], "slot": "head" },
            { "name": "Kettle Hat", "armor": 2, "rarity": "COMMON", "effects": [], "slot": "head" },
            { "name": "Bronze Circlet", "armor": 0, "rarity": "COMMON", "effects": ["mana_boost_tiny"], "slot": "head" },
            { "name": "Copper Headband", "armor": 0, "rarity": "COMMON", "effects": ["focus_tiny"], "slot": "head" },
            { "name": "Simple Tiara", "armor": 0, "rarity": "COMMON", "effects": ["willpower_tiny"], "slot": "head" },
            { "name": "Horned Barbarian Helm", "armor": 2, "rarity": "UNCOMMON", "effects": ["intimidation_tiny"], "slot": "head" },
            { "name": "Viking Helm", "armor": 2, "rarity": "UNCOMMON", "effects": ["battle_cry_tiny"], "slot": "head" },
            { "name": "Raider's Coif", "armor": 3, "rarity": "UNCOMMON", "effects": ["strength_tiny"], "slot": "head" },
            { "name": "Steel Fullhelm", "armor": 3, "rarity": "UNCOMMON", "effects": ["head_protection_1"], "slot": "head" },
            { "name": "Great Helm", "armor": 4, "rarity": "UNCOMMON", "effects": ["perception_penalty_tiny"], "slot": "head" },
            { "name": "Armet", "armor": 3, "rarity": "UNCOMMON", "effects": [], "slot": "head" },
            { "name": "Acolyte's Hood", "armor": 1, "rarity": "UNCOMMON", "effects": ["spell_focus_1"], "slot": "head" },
            { "name": "Mage's Cowl", "armor": 1, "rarity": "UNCOMMON", "effects": ["mana_regen_tiny"], "slot": "head" },
            { "name": "Circlet of Intellect", "armor": 0, "rarity": "UNCOMMON", "effects": ["intelligence_tiny"], "slot": "head" },
            { "name": "Guardian's Bascinet", "armor": 4, "rarity": "RARE", "effects": ["fortified", "fear_resistance_1"], "slot": "head" },
            { "name": "Knight-Captain's Helm", "armor": 5, "rarity": "RARE", "effects": ["unyielding", "constitution_1"], "slot": "head" },
            { "name": "Helm of the Stalwart Defender", "armor": 4, "rarity": "RARE", "effects": ["damage_reduction_flat_1"], "slot": "head" },
            { "name": "Helm of Keen Sight", "armor": 2, "rarity": "RARE", "effects": ["perception_1", "trap_detection_bonus"], "slot": "head" },
            { "name": "Ranger's Hood", "armor": 2, "rarity": "RARE", "effects": ["tracking_bonus", "dexterity_1"], "slot": "head" },
            { "name": "Circlet of True Seeing", "armor": 1, "rarity": "RARE", "effects": ["see_invisibility", "wisdom_1"], "slot": "head" },
            { "name": "Minotaur Skull Helm", "armor": 3, "rarity": "RARE", "effects": ["strength_1", "gore_attack"], "slot": "head" },
            { "name": "Griffon-Feather Helm", "armor": 3, "rarity": "RARE", "effects": ["feather_fall", "bonus_vs_flying"], "slot": "head" },
            { "name": "Wyvern-Bone Mask", "armor": 3, "rarity": "RARE", "effects": ["poison_resistance_small", "intimidation_1"], "slot": "head" },
            { "name": "Dragonscale Coif", "armor": 5, "rarity": "EPIC", "effects": ["fire_resistance_small", "intimidation_1"], "slot": "head" },
            { "name": "Helm of the Black Dragon", "armor": 6, "rarity": "EPIC", "effects": ["acid_resistance_medium", "fear_aura_1"], "slot": "head" },
            { "name": "Frost Wyrm's Skull", "armor": 5, "rarity": "EPIC", "effects": ["cold_resistance_medium", "biting_frost_aura"], "slot": "head" },
            { "name": "Mind-Shield Circlet", "armor": 2, "rarity": "EPIC", "effects": ["psychic_resistance_medium", "thought_shield"], "slot": "head" },
            { "name": "Psion's Headband", "armor": 3, "rarity": "EPIC", "effects": ["mental_fortitude", "empower_psychic_2"], "slot": "head" },
            { "name": "Helm of Telepathy", "armor": 2, "rarity": "EPIC", "effects": ["read_thoughts", "mental_communication"], "slot": "head" },
            { "name": "Helm of the Undying", "armor": 4, "rarity": "EPIC", "effects": ["necromancy_resistance", "endure_death_once"], "slot": "head" },
            { "name": "Lich's Phylactery-Helm", "armor": 4, "rarity": "EPIC", "effects": ["control_undead_minor", "necrotic_aura", "cursed"], "slot": "head" },
            { "name": "Crown of the Deathless", "armor": 5, "rarity": "EPIC", "effects": ["resist_life_drain", "reanimate_on_death_chance"], "slot": "head" },
            { "name": "Crown of Wisdom", "armor": 2, "rarity": "LEGENDARY", "effects": ["intelligence_2", "mana_regen_1", "true_sight"], "slot": "head" },
            { "name": "Diadem of the Arch-Sage", "armor": 3, "rarity": "LEGENDARY", "effects": ["intelligence_3", "spell_power_3", "arcane_mastery"], "slot": "mainHand" },
            { "name": "Eye of the Oracle", "armor": 2, "rarity": "LEGENDARY", "effects": ["precognition", "wisdom_3", "cannot_be_surprised"], "slot": "mainHand" },
            { "name": "Helm of Command", "armor": 6, "rarity": "LEGENDARY", "effects": ["leadership_aura", "rally_allies", "unbreakable_will"], "slot": "head" },
            { "name": "High King's War-Helm", "armor": 7, "rarity": "LEGENDARY", "effects": ["inspire_courage_large", "mass_rally", "immune_to_fear"], "slot": "head" },
            { "name": "Crown of the Imperator", "armor": 5, "rarity": "LEGENDARY", "effects": ["command_aura", "strategic_genius", "unquestioned_authority"], "slot": "head" },
            { "name": "Crown of the Mad King", "armor": 3, "rarity": "ARTIFACT", "effects": ["dominate_lesser_beings", "whispers_of_madness", "cursed_with_paranoia"], "slot": "head" },
            { "name": "Halo of the Fallen God", "armor": 4, "rarity": "ARTIFACT", "effects": ["divine_power_waning", "command_the_faithless", "attracts_usurpers"], "slot": "head" },
            { "name": "Third Eye of the Void", "armor": 2, "rarity": "ARTIFACT", "effects": ["gaze_into_the_abyss", "understand_the_unknowable", "inevitable_insanity"], "slot": "head" }
        ],
        "chestplates": [
            { "name": "Padded Tunic", "armor": 2, "rarity": "COMMON", "effects": [], "slot": "chest" },
            { "name": "Quilted Armor", "armor": 2, "rarity": "COMMON", "effects": [], "slot": "chest" },
            { "name": "Gambeson", "armor": 3, "rarity": "COMMON", "effects": [], "slot": "chest" },
            { "name": "Chainmail Vest", "armor": 4, "rarity": "COMMON", "effects": [], "slot": "chest" },
            { "name": "Hauberk", "armor": 5, "rarity": "COMMON", "effects": ["movement_speed_penalty_tiny"], "slot": "chest" },
            { "name": "Ringmail", "armor": 4, "rarity": "COMMON", "effects": [], "slot": "chest" },
            { "name": "Studded Leather Armor", "armor": 3, "rarity": "COMMON", "effects": [], "slot": "chest" },
            { "name": "Brigandine", "armor": 4, "rarity": "COMMON", "effects": [], "slot": "chest" },
            { "name": "Hardened Leather Tunic", "armor": 3, "rarity": "COMMON", "effects": [], "slot": "chest" },
            { "name": "Apprentice Robes", "armor": 1, "rarity": "COMMON", "effects": ["mana_regen_tiny"], "slot": "chest" },
            { "name": "Simple Robes", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "chest" },
            { "name": "Monk's Gi", "armor": 1, "rarity": "COMMON", "effects": ["unarmored_movement_bonus"], "slot": "chest" },
            { "name": "Steel Breastplate", "armor": 6, "rarity": "UNCOMMON", "effects": ["vitality_1"], "slot": "chest" },
            { "name": "Iron Plate Armor", "armor": 7, "rarity": "UNCOMMON", "effects": ["movement_speed_penalty_small"], "slot": "chest" },
            { "name": "Cuirass of the Soldier", "armor": 6, "rarity": "UNCOMMON", "effects": [], "slot": "chest" },
            { "name": "Elven Chain Shirt", "armor": 5, "rarity": "UNCOMMON", "effects": ["no_stealth_disadvantage"], "slot": "chest" },
            { "name": "Mithril Chainmail", "armor": 5, "rarity": "UNCOMMON", "effects": ["lightweight", "spellcasting_unhindered"], "slot": "chest" },
            { "name": "Darkleaf Armor", "armor": 4, "rarity": "UNCOMMON", "effects": ["stealth_in_forests_1"], "slot": "chest" },
            { "name": "Shaman's Raiment", "armor": 3, "rarity": "UNCOMMON", "effects": ["nature_affinity", "spirit_ward"], "slot": "chest" },
            { "name": "Beast-hide Armor", "armor": 4, "rarity": "UNCOMMON", "effects": ["animal_friendship_tiny"], "slot": "chest" },
            { "name": "Spirit-Caller's Vestments", "armor": 3, "rarity": "UNCOMMON", "effects": ["empower_summons_tiny"], "slot": "chest" },
            { "name": "Knight's Plate Armor", "armor": 8, "rarity": "RARE", "effects": ["damageReduction_flat_1", "constitution_1"], "slot": "chest" },
            { "name": "Full Plate of the Champion", "armor": 9, "rarity": "RARE", "effects": ["heavy_armor_mastery", "intimidation_1"], "slot": "chest" },
            { "name": "Adamantine Breastplate", "armor": 8, "rarity": "RARE", "effects": ["critical_hit_immunity"], "slot": "chest" },
            { "name": "Robe of the Archmagi (Faded)", "armor": 4, "rarity": "RARE", "effects": ["spell_power_1", "magic_resistance_small"], "slot": "chest" },
            { "name": "Warlock's Robes of Shadow", "armor": 5, "rarity": "RARE", "effects": ["shadow_bolt_empower", "shadow_resistance_small"], "slot": "chest" },
            { "name": "Elementalist's Raiment", "armor": 4, "rarity": "RARE", "effects": ["elemental_resistance_all_tiny", "spell_power_1"], "slot": "chest" },
            { "name": "Husk of the Thorny Guardian", "armor": 7, "rarity": "RARE", "effects": ["damage_thorns_small", "poison_resistance_small"], "slot": "chest" },
            { "name": "Spikemail of the Barbed Devil", "armor": 7, "rarity": "RARE", "effects": ["damage_thorns_medium", "fire_resistance_small"], "slot": "chest" },
            { "name": "Armor of the Entangling Vines", "armor": 6, "rarity": "RARE", "effects": ["entangle_on_hit", "nature_affinity"], "slot": "chest" },
            { "name": "Shadowweave Vestments", "armor": 5, "rarity": "EPIC", "effects": ["stealth_1", "evasion_1", "shadow_resistance_small"], "slot": "chest" },
            { "name": "Assassin's Night-Tunic", "armor": 6, "rarity": "EPIC", "effects": ["improved_stealth", "critical_damage_boost"], "slot": "chest" },
            { "name": "Garb of the Ghostly Flicker", "armor": 5, "rarity": "EPIC", "effects": ["blur_effect", "dodge_chance_increase"], "slot": "chest" },
            { "name": "Dragonscale Platemail", "armor": 9, "rarity": "EPIC", "effects": ["fire_resistance_medium", "fear_aura_1"], "slot": "chest" },
            { "name": "Green Dragonscale Mail", "armor": 9, "rarity": "EPIC", "effects": ["poison_resistance_medium", "poison_breath_weapon_small"], "slot": "chest" },
            { "name": "White Dragonscale Mail", "armor": 9, "rarity": "EPIC", "effects": ["cold_resistance_medium", "frost_breath_weapon_small"], "slot": "chest" },
            { "name": "Robe of the Void", "armor": 6, "rarity": "EPIC", "effects": ["shadow_bolt_empower", "mana_drain_aura"], "slot": "chest" },
            { "name": "Vestments of the Nethermancer", "armor": 7, "rarity": "EPIC", "effects": ["shadow_resistance_large", "void_step"], "slot": "chest" },
            { "name": "Robe of the Starless Night", "armor": 6, "rarity": "EPIC", "effects": ["summon_shadows", "blindness_aura"], "slot": "chest" },
            { "name": "Celestial Plate", "armor": 10, "rarity": "LEGENDARY", "effects": ["blessed", "healing_aura_small", "holy_resistance_medium"], "slot": "chest" },
            { "name": "Armor of the Archangel", "armor": 11, "rarity": "LEGENDARY", "effects": ["angelic_wings_flight", "divine_protection_aura", "resurrection_self_once"], "slot": "chest" },
            { "name": "Plate of the Divine Bulwark", "armor": 12, "rarity": "LEGENDARY", "effects": ["invulnerability_short", "smite_the_unholy_aura", "holy_ground"], "slot": "chest" },
            { "name": "Armor of the Unmovable Object", "armor": 12, "rarity": "LEGENDARY", "effects": ["immovable", "damage_reduction_large", "cannot_be_teleported"], "slot": "chest" },
            { "name": "Titan's Earth-Plate", "armor": 13, "rarity": "LEGENDARY", "effects": ["cannot_be_moved", "damage_reflection_medium", "earthquake_stomp"], "slot": "chest" },
            { "name": "Bastion of the World-Forge", "armor": 14, "rarity": "LEGENDARY", "effects": ["unbreakable", "damage_immunity_flat_small", "fortify_allies"], "slot": "chest" },
            { "name": "Carapace of the Old Gods", "armor": 11, "rarity": "ARTIFACT", "effects": ["psychic_barrier", "corrupting_presence", "summon_tentacle_swarm"], "slot": "chest" },
            { "name": "Robe of the Outer Madness", "armor": 10, "rarity": "ARTIFACT", "effects": ["constant_whispers_of_madness", "reality_warp_aura", "unsettling_presence"], "slot": "chest" },
            { "name": "Skin of the Star-Eater", "armor": 12, "rarity": "ARTIFACT", "effects": ["void_immunity", "devour_magic", "unravel_reality"], "slot": "chest" }
        ],
        "gauntlets": [
            { "name": "Cloth Wraps", "armor": 0, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Linen Handwraps", "armor": 0, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Tattered Gloves", "armor": 0, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Leather Gloves", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Workman's Gloves", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Riding Gloves", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Iron Gauntlets", "armor": 2, "rarity": "UNCOMMON", "effects": ["strength_tiny"], "slot": "hands" },
            { "name": "Steel Gauntlets", "armor": 2, "rarity": "UNCOMMON", "effects": [], "slot": "hands" },
            { "name": "Chainmail Mittens", "armor": 2, "rarity": "UNCOMMON", "effects": [], "slot": "hands" },
            { "name": "Archer's Gloves", "armor": 1, "rarity": "UNCOMMON", "effects": ["bow_draw_speed_increase"], "slot": "hands" },
            { "name": "Deadeye's Gloves", "armor": 1, "rarity": "UNCOMMON", "effects": ["aim_steadiness"], "slot": "hands" },
            { "name": "Fletcher's Gloves", "armor": 1, "rarity": "UNCOMMON", "effects": ["crafting_fletching_bonus"], "slot": "hands" },
            { "name": "Gauntlets of Dexterity", "armor": 2, "rarity": "RARE", "effects": ["dexterity_1"], "slot": "hands" },
            { "name": "Gloves of the Master Thief", "armor": 2, "rarity": "RARE", "effects": ["sleight_of_hand_1", "lockpicking_1"], "slot": "hands" },
            { "name": "Acrobat's Hand-straps", "armor": 1, "rarity": "RARE", "effects": ["agility_1", "reduced_fall_damage"], "slot": "hands" },
            { "name": "Gauntlets of Ogre Power", "armor": 2, "rarity": "RARE", "effects": ["strength_1"], "slot": "hands" },
            { "name": "Gauntlets of the Pugilist", "armor": 2, "rarity": "RARE", "effects": ["unarmed_damage_small", "strength_1"], "slot": "hands" },
            { "name": "Brawler's Gloves", "armor": 3, "rarity": "RARE", "effects": ["unarmed_synergy", "knockback_on_crit"], "slot": "hands" },
            { "name": "Gauntlets of the Forge", "armor": 3, "rarity": "RARE", "effects": ["fire_resistance_small", "crafting_smithing_bonus"], "slot": "hands" },
            { "name": "Blacksmith's Heavy Gloves", "armor": 3, "rarity": "RARE", "effects": ["heat_immunity_small", "improve_weapon_bonus"], "slot": "hands" },
            { "name": "Runesmith's Mitts", "armor": 2, "rarity": "RARE", "effects": ["enchanting_bonus", "mana_infusion"], "slot": "hands" },
            { "name": "Executioner's Mitts", "armor": 3, "rarity": "EPIC", "effects": ["critical_damage_boost", "bleed_on_crit"], "slot": "hands" },
            { "name": "Gauntlets of Mortal Wound", "armor": 3, "rarity": "EPIC", "effects": ["grievous_wounds", "critical_severity_increase"], "slot": "hands" },
            { "name": "Blood-soaked Handwraps", "armor": 2, "rarity": "EPIC", "effects": ["life_steal_on_crit", "frenzy_on_kill"], "slot": "hands" },
            { "name": "Gloves of Spell-Stealing", "armor": 2, "rarity": "EPIC", "effects": ["absorb_spell_charge_on_hit", "mana_leech"], "slot": "hands" },
            { "name": "Mage-Hunter's Gauntlets", "armor": 3, "rarity": "EPIC", "effects": ["counterspell_on_parry", "magic_resistance_medium"], "slot": "hands" },
            { "name": "Arcane-Eater's Grasps", "armor": 2, "rarity": "EPIC", "effects": ["devour_magic_on_hit", "silence_on_crit"], "slot": "hands" },
            { "name": "Fists of the Titan", "armor": 4, "rarity": "LEGENDARY", "effects": ["strength_3", "unarmed_damage_large", "earthquake_punch"], "slot": "hands" },
            { "name": "Gauntlets of the Colossus", "armor": 5, "rarity": "LEGENDARY", "effects": ["strength_4", "seismic_slam", "grow_size_briefly"], "slot": "hands" },
            { "name": "World-Lifter's Grips", "armor": 4, "rarity": "LEGENDARY", "effects": ["unimaginable_strength", "throw_anything", "ignore_weight_restrictions"], "slot": "hands" },
            { "name": "Hands of the Creator", "armor": 3, "rarity": "LEGENDARY", "effects": ["crafting_mastery", "transmute_item_minor"], "slot": "hands" },
            { "name": "Artificer's Master-Gloves", "armor": 3, "rarity": "LEGENDARY", "effects": ["instant_invention", "deconstruct_item", "perfect_craftsmanship"], "slot": "hands" },
            { "name": "God-Forger's Gauntlets", "armor": 4, "rarity": "LEGENDARY", "effects": ["create_minor_artifacts", "imbue_legendary_power", "reshape_matter"], "slot": "hands" },
            { "name": "Gauntlets of Infinite Reach", "armor": 2, "rarity": "ARTIFACT", "effects": ["melee_attacks_are_ranged", "telekinetic_grab", "phasing_punches"], "slot": "hands" },
            { "name": "Grasps of the Void Weaver", "armor": 3, "rarity": "ARTIFACT", "effects": ["manipulate_space", "pull_from_other_dimensions", "touch_is_a_portal"], "slot": "hands" },
            { "name": "Fingers of the Puppet Master", "armor": 2, "rarity": "ARTIFACT", "effects": ["control_any_being_by_touch", "sever_threads_of_fate", "rewrite_actions"], "slot": "hands" }
        ],
        "sleeves": [
            { "name": "Cloth Sleeves", "armor": 0, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Tunic Sleeves", "armor": 0, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Arming Doublet Sleeves", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Leather Armguards", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Leather Bracers", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Hardened Leather Vambraces", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "hands" },
            { "name": "Iron Vambraces", "armor": 2, "rarity": "UNCOMMON", "effects": ["dexterity_tiny"], "slot": "hands" },
            { "name": "Steel Arm Cops", "armor": 2, "rarity": "UNCOMMON", "effects": [], "slot": "hands" },
            { "name": "Mercenary's Vambraces", "armor": 2, "rarity": "UNCOMMON", "effects": ["parry_bonus_tiny"], "slot": "hands" },
            { "name": "Bracers of Archery", "armor": 1, "rarity": "UNCOMMON", "effects": ["bow_damage_bonus_1"], "slot": "hands" },
            { "name": "Marksman's Armguards", "armor": 1, "rarity": "UNCOMMON", "effects": ["steady_aim"], "slot": "hands" },
            { "name": "Hunter's Bracers", "armor": 1, "rarity": "UNCOMMON", "effects": ["bow_range_increase_tiny"], "slot": "hands" },
            { "name": "Sleeves of the Shadow Dancer", "armor": 2, "rarity": "RARE", "effects": ["stealth_1", "evasion_1"], "slot": "hands" },
            { "name": "Rogue's Silent Wraps", "armor": 1, "rarity": "RARE", "effects": ["silent_movement", "dexterity_1"], "slot": "hands" },
            { "name": "Armguards of the Unseen", "armor": 2, "rarity": "RARE", "effects": ["invisibility_in_shadows", "quick_strike"], "slot": "hands" },
            { "name": "Bracers of Defense +2", "armor": 2, "rarity": "RARE", "effects": ["armor_bonus_2_if_no_armor"], "slot": "hands" },
            { "name": "Monk's Training Wraps", "armor": 1, "rarity": "RARE", "effects": ["armor_bonus_1_if_no_armor", "unarmed_damage_small"], "slot": "hands" },
            { "name": "Mage Armor Bracers", "armor": 0, "rarity": "RARE", "effects": ["cast_mage_armor_at_will"], "slot": "hands" },
            { "name": "Vambraces of the Warden", "armor": 3, "rarity": "RARE", "effects": ["shield_bash_bonus", "constitution_1"], "slot": "hands" },
            { "name": "Guardian's Rerebrace", "armor": 3, "rarity": "RARE", "effects": ["block_bonus", "taunt_bonus"], "slot": "hands" },
            { "name": "Bulwark Armguards", "armor": 4, "rarity": "RARE", "effects": ["fortified", "damage_reduction_flat_1"], "slot": "hands" },
            { "name": "Bracers of the Storm", "armor": 3, "rarity": "EPIC", "effects": ["lightning_resistance_medium", "shockwave_punch"], "slot": "hands" },
            { "name": "Armguards of the Tempest", "armor": 3, "rarity": "EPIC", "effects": ["lightning_nova_on_block", "lightning_immunity"], "slot": "hands" },
            { "name": "Vambraces of the Thunderlord", "armor": 4, "rarity": "EPIC", "effects": ["call_thunder_on_parry", "shocking_touch"], "slot": "hands" },
            { "name": "Wyrm-hide Armguards", "armor": 4, "rarity": "EPIC", "effects": ["elemental_resistance_all_small", "dragon_kin_respect"], "slot": "hands" },
            { "name": "Dragonscale Vambraces", "armor": 5, "rarity": "EPIC", "effects": ["elemental_resistance_all_medium", "draconic_might"], "slot": "hands" },
            { "name": "Armguards of the Prismatic Dragon", "armor": 4, "rarity": "EPIC", "effects": ["prismatic_spray_on_block", "elemental_absorption"], "slot": "hands" },
            { "name": "Bands of Absolute Power", "armor": 3, "rarity": "LEGENDARY", "effects": ["spell_power_3", "arcane_overload_ability", "mana_shield_strong"], "slot": "hands" },
            { "name": "Archmage's Spell-sleeves", "armor": 3, "rarity": "LEGENDARY", "effects": ["spell_mastery_all_schools", "infinite_mana_briefly", "negate_magic_resistance"], "slot": "hands" },
            { "name": "Bracers of the World-Mage", "armor": 4, "rarity": "LEGENDARY", "effects": ["cast_any_spell", "arcane_singularity", "mana_font_aura"], "slot": "hands" },
            { "name": "Timelord's Cuffs", "armor": 2, "rarity": "ARTIFACT", "effects": ["local_time_acceleration", "rewind_minor_mistake_once", "paradox_ward"], "slot": "hands" },
            { "name": "Bracers of Causality", "armor": 3, "rarity": "ARTIFACT", "effects": ["manipulate_cause_and_effect", "foresee_immediate_future", "immune_to_temporal_effects"], "slot": "hands" },
            { "name": "Vambraces of the Aeon", "armor": 2, "rarity": "ARTIFACT", "effects": ["step_outside_time", "age_or_de_age_target", "chronal_anchor"], "slot": "hands" }
        ],
        "leggings": [
            { "name": "Cloth Leggings", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "legs" },
            { "name": "Breeches", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "legs" },
            { "name": "Simple Trousers", "armor": 0, "rarity": "COMMON", "effects": [], "slot": "legs" },
            { "name": "Leather Pants", "armor": 2, "rarity": "COMMON", "effects": [], "slot": "legs" },
            { "name": "Hide Leggings", "armor": 2, "rarity": "COMMON", "effects": [], "slot": "legs" },
            { "name": "Studded Leather Chaps", "armor": 3, "rarity": "COMMON", "effects": [], "slot": "legs" },
            { "name": "Chainmail Chausses", "armor": 3, "rarity": "UNCOMMON", "effects": ["movement_speed_penalty_tiny"], "slot": "legs" },
            { "name": "Ringmail Leggings", "armor": 3, "rarity": "UNCOMMON", "effects": [], "slot": "legs" },
            { "name": "Scale Mail Legguards", "armor": 4, "rarity": "UNCOMMON", "effects": ["movement_speed_penalty_tiny"], "slot": "legs" },
            { "name": "Steel Greaves", "armor": 4, "rarity": "UNCOMMON", "effects": ["movement_speed_penalty_tiny", "protection_1"], "slot": "legs" },
            { "name": "Iron Legplates", "armor": 4, "rarity": "UNCOMMON", "effects": ["movement_speed_penalty_small"], "slot": "legs" },
            { "name": "Soldier's Greaves", "armor": 5, "rarity": "UNCOMMON", "effects": ["movement_speed_penalty_small"], "slot": "legs" },
            { "name": "Rogue's Padded Leggings", "armor": 2, "rarity": "UNCOMMON", "effects": ["stealth_tiny", "agility_tiny"], "slot": "legs" },
            { "name": "Dark Leather Trousers", "armor": 2, "rarity": "UNCOMMON", "effects": ["stealth_in_darkness_tiny"], "slot": "legs" },
            { "name": "Acrobat's Leggings", "armor": 2, "rarity": "UNCOMMON", "effects": ["evasion_tiny"], "slot": "legs" },
            { "name": "Leggings of the Swift", "armor": 2, "rarity": "RARE", "effects": ["swift", "stamina_regen_small"], "slot": "legs" },
            { "name": "Wind-Dancer's Leggings", "armor": 2, "rarity": "RARE", "effects": ["movement_speed_1", "dodge_chance_small"], "slot": "legs" },
            { "name": "Pathfinder's Trousers", "armor": 3, "rarity": "RARE", "effects": ["ignore_difficult_terrain", "endurance_1"], "slot": "legs" },
            { "name": "Plated Greaves", "armor": 5, "rarity": "RARE", "effects": ["movement_speed_penalty_small", "constitution_1"], "slot": "legs" },
            { "name": "Knight's Legplates", "armor": 6, "rarity": "RARE", "effects": ["movement_speed_penalty_small", "fortified"], "slot": "legs" },
            { "name": "Adamantine Greaves", "armor": 5, "rarity": "RARE", "effects": ["critical_hit_immunity_legs"], "slot": "legs" },
            { "name": "Legguards of the Mountain King", "armor": 6, "rarity": "RARE", "effects": ["unmovable_stance", "stone_resistance"], "slot": "legs" },
            { "name": "Dwarven Rock-Plates", "armor": 7, "rarity": "RARE", "effects": ["stability", "earth_affinity"], "slot": "legs" },
            { "name": "Goliath Greaves", "armor": 6, "rarity": "RARE", "effects": ["strength_1", "cold_resistance_small"], "slot": "legs" },
            { "name": "Shadow Stalker's Leggings", "armor": 3, "rarity": "EPIC", "effects": ["silent_movement", "stealth_1"], "slot": "legs" },
            { "name": "Night-Prowler's Pants", "armor": 4, "rarity": "EPIC", "effects": ["become_unseen_in_shadows", "bonus_damage_from_stealth"], "slot": "legs" },
            { "name": "Ghost-weave Leggings", "armor": 3, "rarity": "EPIC", "effects": ["phase_through_walls_briefly", "muffled_sound"], "slot": "legs" },
            { "name": "Flame-Wreathed Legplates", "armor": 6, "rarity": "EPIC", "effects": ["fire_trail", "fire_resistance_medium"], "slot": "legs" },
            { "name": "Hellfire Greaves", "armor": 7, "rarity": "EPIC", "effects": ["burning_aura", "fire_immunity"], "slot": "legs" },
            { "name": "Phoenix-ash Leggings", "armor": 6, "rarity": "EPIC", "effects": ["fiery_rebirth_chance", "fire_step"], "slot": "legs" },
            { "name": "Leggings of the Celestial Host", "armor": 7, "rarity": "LEGENDARY", "effects": ["angelic_grace", "flight_brief", "holy_ground"], "slot": "legs" },
            { "name": "Greaves of the Valkyrie", "armor": 8, "rarity": "LEGENDARY", "effects": ["flight_at_will", "choose_the_slain", "divine_charge"], "slot": "legs" },
            { "name": "Legplates of the Divine Champion", "armor": 9, "rarity": "LEGENDARY", "effects": ["unwavering_faith", "smite_aura", "holy_resistance_large"], "slot": "legs" },
            { "name": "Greaves of the Void Walker", "armor": 4, "rarity": "LEGENDARY", "effects": ["teleport_short_range_at_will", "shadow_meld", "void_step"], "slot": "legs" },
            { "name": "Pantaloons of the Planar Jumper", "armor": 5, "rarity": "LEGENDARY", "effects": ["plane_shift_at_will", "ethereal_form", "astral_projection"], "slot": "legs" },
            { "name": "Leggings of the Spacetime Rift", "armor": 4, "rarity": "LEGENDARY", "effects": ["create_portal", "blink", "immune_to_teleport_effects"], "slot": "legs" }
        ],
        "boots": [
            { "name": "Worn Sandals", "armor": 0, "rarity": "COMMON", "effects": [], "slot": "feet" },
            { "name": "Barefoot Wraps", "armor": 0, "rarity": "COMMON", "effects": [], "slot": "feet" },
            { "name": "Simple Shoes", "armor": 0, "rarity": "COMMON", "effects": [], "slot": "feet" },
            { "name": "Leather Boots", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "feet" },
            { "name": "Hide Boots", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "feet" },
            { "name": "Sturdy Boots", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "feet" },
            { "name": "Iron-toed Boots", "armor": 2, "rarity": "COMMON", "effects": ["kick_damage_bonus"], "slot": "feet" },
            { "name": "Hobnailed Boots", "armor": 2, "rarity": "COMMON", "effects": [], "slot": "feet" },
            { "name": "Worker's Boots", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "feet" },
            { "name": "Boots of Elvenkind", "armor": 1, "rarity": "UNCOMMON", "effects": ["silent_steps"], "slot": "feet" },
            { "name": "Soft-soled Boots", "armor": 1, "rarity": "UNCOMMON", "effects": ["stealth_tiny"], "slot": "feet" },
            { "name": "Ranger's Moccasins", "armor": 1, "rarity": "UNCOMMON", "effects": ["move_silently_in_nature"], "slot": "feet" },
            { "name": "Steel Greaves", "armor": 2, "rarity": "UNCOMMON", "effects": ["movement_speed_penalty_tiny", "protection_1"], "slot": "feet" },
            { "name": "Iron Sabatons", "armor": 3, "rarity": "UNCOMMON", "effects": ["movement_speed_penalty_small"], "slot": "feet" },
            { "name": "Soldier's Boots", "armor": 2, "rarity": "UNCOMMON", "effects": [], "slot": "feet" },
            { "name": "Boots of the Mountaineer", "armor": 1, "rarity": "UNCOMMON", "effects": ["ignore_difficult_terrain_rock"], "slot": "feet" },
            { "name": "Swamp-wader's Boots", "armor": 1, "rarity": "UNCOMMON", "effects": ["ignore_difficult_terrain_water"], "slot": "feet" },
            { "name": "Desert-walker's Sandals", "armor": 1, "rarity": "UNCOMMON", "effects": ["ignore_difficult_terrain_sand"], "slot": "feet" },
            { "name": "Boots of Striding", "armor": 1, "rarity": "RARE", "effects": ["swift", "stamina_regen_small"], "slot": "feet" },
            { "name": "Marathoner's Sandals", "armor": 1, "rarity": "RARE", "effects": ["endurance_1", "movement_speed_1"], "slot": "feet" },
            { "name": "Boots of the Untiring", "armor": 2, "rarity": "RARE", "effects": ["stamina_regen_medium", "constitution_1"], "slot": "feet" },
            { "name": "Winged Sandals", "armor": 1, "rarity": "RARE", "effects": ["feather_fall_passive", "jump_height_increase"], "slot": "feet" },
            { "name": "Boots of Leaping", "armor": 2, "rarity": "RARE", "effects": ["jump_farther", "acrobatics_1"], "slot": "feet" },
            { "name": "Gryphon-Claw Boots", "armor": 2, "rarity": "RARE", "effects": ["negate_fall_damage_once", "charge_attack_from_above"], "slot": "feet" },
            { "name": "Boots of Speed", "armor": 2, "rarity": "RARE", "effects": ["haste_burst_ability"], "slot": "feet" },
            { "name": "Quick-step Boots", "armor": 1, "rarity": "RARE", "effects": ["burst_of_speed_short"], "slot": "feet" },
            { "name": "Fleet-footed Sabatons", "armor": 3, "rarity": "RARE", "effects": ["charge_bonus", "momentum_gain"], "slot": "feet" },
            { "name": "Shadow Stalker's Boots", "armor": 2, "rarity": "EPIC", "effects": ["silent_movement", "stealth_1"], "slot": "feet" },
            { "name": "Footpads of the Assassin", "armor": 2, "rarity": "EPIC", "effects": ["silent_sprint", "move_through_shadows"], "slot": "feet" },
            { "name": "Ghost-thread Slippers", "armor": 1, "rarity": "EPIC", "effects": ["become_incorporeal_briefly", "leave_no_trace"], "slot": "feet" },
            { "name": "Frost-walker Treads", "armor": 3, "rarity": "EPIC", "effects": ["walk_on_water_frozen", "cold_resistance_medium"], "slot": "feet" },
            { "name": "Flame-walker's Sabatons", "armor": 3, "rarity": "EPIC", "effects": ["walk_on_lava", "fire_resistance_medium"], "slot": "feet" },
            { "name": "Storm-Treader's Boots", "armor": 3, "rarity": "EPIC", "effects": ["walk_on_air_briefly", "lightning_resistance_medium"], "slot": "feet" },
            { "name": "Boots of the Seven Leagues", "armor": 3, "rarity": "LEGENDARY", "effects": ["teleport_short_range", "movement_speed_large"], "slot": "feet" },
            { "name": "Blink-step Sabatons", "armor": 4, "rarity": "LEGENDARY", "effects": ["teleport_at_will", "dodge_by_teleporting"], "slot": "feet" },
            { "name": "Planar Striders", "armor": 3, "rarity": "LEGENDARY", "effects": ["cross_planar_boundaries", "astral_step", "ethereal_jaunt"], "slot": "feet" },
            { "name": "Stompers of the Colossus", "armor": 5, "rarity": "LEGENDARY", "effects": ["earthquake_stomp", "unbreakable", "grow_size_briefly"], "slot": "feet" },
            { "name": "Titan-forged Greaves", "armor": 6, "rarity": "LEGENDARY", "effects": ["seismic_stomp", "unmovable", "ignore_difficult_terrain_all"], "slot": "feet" },
            { "name": "Boots of the Juggernaut", "armor": 7, "rarity": "LEGENDARY", "effects": ["unstoppable_charge", "immune_to_knockback", "shatter_obstacles"], "slot": "feet" },
            { "name": "Footpads of the Wanderer", "armor": 2, "rarity": "ARTIFACT", "effects": ["plane_walk", "never_get_lost", "ignore_all_terrain"], "slot": "feet" },
            { "name": "Sandals of the Time-Strider", "armor": 2, "rarity": "ARTIFACT", "effects": ["step_forward_or_backward_in_time", "chronal_dodge", "immune_to_paradox"], "slot": "feet" },
            { "name": "Boots of the World-Trekker", "armor": 3, "rarity": "ARTIFACT", "effects": ["instantaneous_travel_anywhere", "create_permanent_pathways", "always_on_solid_ground"], "slot": "feet" }
        ],
        "shields": [
            { "name": "Wooden Buckler", "armor": 1, "block_chance": 0.1, "rarity": "COMMON", "effects": [], "slot": "offHand" },
            { "name": "Hide Targe", "armor": 1, "block_chance": 0.1, "rarity": "COMMON", "effects": [], "slot": "offHand" },
            { "name": "Makeshift Shield", "armor": 1, "block_chance": 0.05, "rarity": "COMMON", "effects": ["fragile"], "slot": "offHand" },
            { "name": "Iron Round Shield", "armor": 2, "block_chance": 0.15, "rarity": "COMMON", "effects": [], "slot": "offHand" },
            { "name": "Heater Shield", "armor": 2, "block_chance": 0.15, "rarity": "COMMON", "effects": [], "slot": "offHand" },
            { "name": "Scutum", "armor": 3, "block_chance": 0.1, "rarity": "COMMON", "effects": ["heavy"], "slot": "offHand" },
            { "name": "Spiked Shield", "armor": 2, "block_chance": 0.1, "rarity": "UNCOMMON", "effects": ["shield_spike_damage"], "slot": "offHand" },
            { "name": "Blade-catcher Shield", "armor": 2, "block_chance": 0.15, "rarity": "UNCOMMON", "effects": ["disarm_chance_on_block"], "slot": "offHand" },
            { "name": "Bashing Buckler", "armor": 1, "block_chance": 0.1, "rarity": "UNCOMMON", "effects": ["shield_bash_bonus_tiny"], "slot": "offHand" },
            { "name": "Steel Kite Shield", "armor": 3, "block_chance": 0.2, "rarity": "UNCOMMON", "effects": ["shield_bash_1"], "slot": "offHand" },
            { "name": "Knight's Shield", "armor": 3, "block_chance": 0.2, "rarity": "UNCOMMON", "effects": ["protection_1"], "slot": "offHand" },
            { "name": "Dwarven Bulwark", "armor": 4, "block_chance": 0.2, "rarity": "UNCOMMON", "effects": ["unbreakable"], "slot": "offHand" },
            { "name": "Elven Leaf-Guard Shield", "armor": 2, "block_chance": 0.2, "rarity": "UNCOMMON", "effects": ["arrow_deflection_small"], "slot": "offHand" },
            { "name": "Sylvanwood Targe", "armor": 2, "block_chance": 0.15, "rarity": "UNCOMMON", "effects": ["nature_resistance_small"], "slot": "offHand" },
            { "name": "Livingwood Shield", "armor": 3, "block_chance": 0.15, "rarity": "UNCOMMON", "effects": ["regenerate_health_tiny"], "slot": "offHand" },
            { "name": "Tower Shield of the Guardian", "armor": 5, "block_chance": 0.25, "rarity": "RARE", "effects": ["immovable", "fortified"], "slot": "offHand" },
            { "name": "Wall Shield", "armor": 6, "block_chance": 0.2, "rarity": "RARE", "effects": ["provides_cover", "heavy"], "slot": "offHand" },
            { "name": "Adamantine Shield", "armor": 4, "block_chance": 0.25, "rarity": "RARE", "effects": ["critical_hit_immunity"], "slot": "offHand" },
            { "name": "Spell-Reflecting Shield", "armor": 3, "block_chance": 0.15, "rarity": "RARE", "effects": ["reflect_spell_chance_small"], "slot": "offHand" },
            { "name": "Mirrored Shield", "armor": 3, "block_chance": 0.15, "rarity": "RARE", "effects": ["reflect_gaze_attacks"], "slot": "offHand" },
            { "name": "Runic Ward-Shield", "armor": 4, "block_chance": 0.2, "rarity": "RARE", "effects": ["magic_resistance_small", "dispel_magic_on_block"], "slot": "offHand" },
            { "name": "Lionheart Shield", "armor": 4, "block_chance": 0.2, "rarity": "RARE", "effects": ["fear_resistance_aura_small", "leadership_tiny"], "slot": "offHand" },
            { "name": "Shield of the Commander", "armor": 4, "block_chance": 0.2, "rarity": "RARE", "effects": ["rallying_cry", "constitution_1"], "slot": "offHand" },
            { "name": "Aegis of Valor", "armor": 5, "block_chance": 0.2, "rarity": "RARE", "effects": ["courage_aura", "unyielding_defense"], "slot": "offHand" },
            { "name": "Dragonscale Shield", "armor": 4, "block_chance": 0.2, "rarity": "EPIC", "effects": ["fire_resistance_medium", "spell_deflection_small"], "slot": "offHand" },
            { "name": "Red Dragon's Aegis", "armor": 5, "block_chance": 0.25, "rarity": "EPIC", "effects": ["fire_immunity", "fire_nova_on_block"], "slot": "offHand" },
            { "name": "Prismatic Dragon-Shield", "armor": 4, "block_chance": 0.2, "rarity": "EPIC", "effects": ["elemental_resistance_all_medium", "elemental_blast_on_parry"], "slot": "offHand" },
            { "name": "Mind-Wall Bulwark", "armor": 4, "block_chance": 0.2, "rarity": "EPIC", "effects": ["psychic_resistance_large", "reflect_psychic_damage"], "slot": "offHand" },
            { "name": "Shield of Mental Fortitude", "armor": 4, "block_chance": 0.25, "rarity": "EPIC", "effects": ["immune_to_charm_and_fear", "psionic_blast_on_block"], "slot": "offHand" },
            { "name": "Aegis of the Intellect Fortress", "armor": 5, "block_chance": 0.2, "rarity": "EPIC", "effects": ["thought_shield_aura", "mind_blank"], "slot": "offHand" },
            { "name": "Aegis of the Divine", "armor": 6, "block_chance": 0.3, "rarity": "LEGENDARY", "effects": ["holy_barrier", "reflect_projectiles_chance", "blessed"], "slot": "offHand" },
            { "name": "Shield of the Archon", "armor": 7, "block_chance": 0.35, "rarity": "LEGENDARY", "effects": ["divine_intervention", "heal_allies_on_block", "immune_to_unholy_damage"], "slot": "offHand" },
            { "name": "Bulwark of the Heavens", "armor": 8, "block_chance": 0.3, "rarity": "LEGENDARY", "effects": ["angelic_protection_aura", "banish_fiend_on_parry", "wings_of_light"], "slot": "offHand" },
            { "name": "Shield of the Labyrinth", "armor": 5, "block_chance": 0.25, "rarity": "LEGENDARY", "effects": ["confuse_attacker_on_block", "teleport_attacker_short_range_on_parry"], "slot": "offHand" },
            { "name": "The Paradox Shield", "armor": 5, "block_chance": 0.3, "rarity": "LEGENDARY", "effects": ["attacker_hits_themself", "warp_reality_on_block", "unpredictable_defense"], "slot": "offHand" },
            { "name": "Minotaur's Maze-Wall", "armor": 6, "block_chance": 0.25, "rarity": "LEGENDARY", "effects": ["create_maze_on_block", "never_get_lost", "gore_charge_bash"], "slot": "offHand" },
            { "name": "The Unbreakable Wall", "armor": 8, "block_chance": 0.4, "rarity": "ARTIFACT", "effects": ["immunity_to_critical_hits", "negate_all_knockback", "taunt_aura_massive"], "slot": "offHand" },
            { "name": "Aegis of the World-Forge", "armor": 10, "block_chance": 0.5, "rarity": "ARTIFACT", "effects": ["absolute_damage_immunity_briefly", "reflect_all_damage_and_spells", "unmovable_and_unbreakable"], "slot": "offHand" },
            { "name": "The Ouroboros Shield", "armor": 7, "block_chance": 0.3, "rarity": "ARTIFACT", "effects": ["damage_taken_heals_you_later", "endless_cycle_of_protection", "negate_final_blow"], "slot": "offHand" }
        ],
        "cloaks": [
            { "name": "Traveler's Cloak", "armor": 0, "rarity": "COMMON", "effects": ["weather_resistance_minor"], "slot": "back" },
            { "name": "Woolen Cloak", "armor": 0, "rarity": "COMMON", "effects": ["cold_resistance_tiny"], "slot": "back" },
            { "name": "Linen Shawl", "armor": 0, "rarity": "COMMON", "effects": [], "slot": "back" },
            { "name": "Padded Cloak", "armor": 1, "rarity": "COMMON", "effects": [], "slot": "back" },
            { "name": "Thick Fur Cloak", "armor": 1, "rarity": "COMMON", "effects": ["cold_resistance_tiny"], "slot": "back" },
            { "name": "Canvas Poncho", "armor": 0, "rarity": "COMMON", "effects": ["rain_resistance"], "slot": "back" },
            { "name": "Cloak of Elvenkind", "armor": 0, "rarity": "UNCOMMON", "effects": ["stealth_in_forests_1"], "slot": "back" },
            { "name": "Ranger's Cloak", "armor": 1, "rarity": "UNCOMMON", "effects": ["blend_with_nature"], "slot": "back" },
            { "name": "Shadow-leaf Cloak", "armor": 0, "rarity": "UNCOMMON", "effects": ["stealth_in_shadows_tiny"], "slot": "back" },
            { "name": "Cloak of Protection +1", "armor": 1, "rarity": "UNCOMMON", "effects": ["saving_throw_bonus_1"], "slot": "back" },
            { "name": "Guardian's Mantle", "armor": 1, "rarity": "UNCOMMON", "effects": ["armor_bonus_1"], "slot": "back" },
            { "name": "Warding Cape", "armor": 0, "rarity": "UNCOMMON", "effects": ["magic_resistance_tiny"], "slot": "back" },
            { "name": "Mantle of the Spire", "armor": 0, "rarity": "RARE", "effects": ["mana_regen_small", "intelligence_tiny"], "slot": "back" },
            { "name": "Wizard's Star-cloak", "armor": 1, "rarity": "RARE", "effects": ["spell_power_1", "mana_boost_small"], "slot": "back" },
            { "name": "Cloak of Elemental Resistance", "armor": 0, "rarity": "RARE", "effects": ["choose_one_elemental_resistance_small"], "slot": "back" },
            { "name": "Cloak of the Bat", "armor": 1, "rarity": "RARE", "effects": ["glide", "echolocation_brief"], "slot": "back" },
            { "name": "Cloak of the Manta Ray", "armor": 1, "rarity": "RARE", "effects": ["water_breathing", "swim_speed_increase"], "slot": "back" },
            { "name": "Cloak of the Spider", "armor": 1, "rarity": "RARE", "effects": ["spider_climb", "poison_resistance_small"], "slot": "back" },
            { "name": "Cloak of Displacement", "armor": 1, "rarity": "EPIC", "effects": ["displace_self_image", "avoid_first_hit"], "slot": "back" },
            { "name": "Phase Cloak", "armor": 1, "rarity": "EPIC", "effects": ["incorporeal_form_on_hit_chance", "evasion_2"], "slot": "back" },
            { "name": "Mirage Mantle", "armor": 2, "rarity": "EPIC", "effects": ["create_mirror_images_briefly", "dodge_chance_increase"], "slot": "back" },
            { "name": "Mantle of the Dragon Queen", "armor": 2, "rarity": "EPIC", "effects": ["elemental_resistance_all_small", "draconic_presence"], "slot": "back" },
            { "name": "Aspect of the Wyrm Cloak", "armor": 3, "rarity": "EPIC", "effects": ["elemental_resistance_all_medium", "dragon_breath_weapon_small"], "slot": "back" },
            { "name": "Scale-cloak of the Prismatic Drake", "armor": 2, "rarity": "EPIC", "effects": ["elemental_absorption_small", "prismatic_aura"], "slot": "back" },
            { "name": "Cloak of Invisibility", "armor": 0, "rarity": "LEGENDARY", "effects": ["true_invisibility_at_will", "muffled_sound"], "slot": "back" },
            { "name": "Mantle of the Unseen", "armor": 1, "rarity": "LEGENDARY", "effects": ["perfect_invisibility", "cannot_be_detected_by_magic", "silent_step"], "slot": "back" },
            { "name": "Shroud of the Ghost", "armor": 1, "rarity": "LEGENDARY", "effects": ["become_ethereal_at_will", "incorporeal_form", "unseen_passage"], "slot": "back" },
            { "name": "Shroud of Eternal Night", "armor": 1, "rarity": "ARTIFACT", "effects": ["become_shadow", "control_darkness", "vampiric_aura"], "slot": "back" },
            { "name": "Mantle of the Void", "armor": 2, "rarity": "ARTIFACT", "effects": ["step_into_the_void", "darkness_that_devours_light", "cosmic_horror_presence"], "slot": "back" },
            { "name": "Tapestry of Fate", "armor": 0, "rarity": "ARTIFACT", "effects": ["weave_the_threads_of_destiny", "rewrite_minor_event", "see_all_possibilities"], "slot": "back" }
        ]
    },
    "magical": {
        "scrolls": [
            { "name": "Scroll of Minor Healing", "rarity": "COMMON", "effect": "heal_light", "spell": { "type": "healing", "amount": 10 } },
            { "name": "Scroll of Resistance", "rarity": "COMMON", "effect": "cast_resistance", "spell": { "type": "buff", "stat": "saving_throws", "amount": 1, "duration": 60 } },
            { "name": "Scroll of Guidance", "rarity": "COMMON", "effect": "cast_guidance", "spell": { "type": "buff", "stat": "skill_checks", "amount": "1d4", "duration": 60 } },
            { "name": "Scroll of Light", "rarity": "COMMON", "effect": "cast_light", "spell": { "type": "utility", "effect": "light_aura", "duration": 300 } },
            { "name": "Scroll of Dancing Lights", "rarity": "COMMON", "effect": "cast_dancing_lights", "spell": { "type": "utility", "effect": "create_light_orbs", "duration": 60 } },
            { "name": "Scroll of Prestidigitation", "rarity": "COMMON", "effect": "cast_prestidigitation", "spell": { "type": "utility", "effect": "minor_magical_tricks" } },
            { "name": "Scroll of Mage Armor", "rarity": "COMMON", "effect": "cast_mage_armor", "spell": { "type": "buff", "stat": "armor", "amount": 3, "duration": 600 } },
            { "name": "Scroll of Shield", "rarity": "COMMON", "effect": "cast_shield", "spell": { "type": "buff", "stat": "armor", "amount": 5, "duration": 6, "reaction": true } },
            { "name": "Scroll of Absorb Elements", "rarity": "COMMON", "effect": "cast_absorb_elements", "spell": { "type": "buff", "resistance": "elemental_one_hit", "duration": 6 } },
            { "name": "Scroll of Burning Hands", "rarity": "COMMON", "effect": "cast_burning_hands", "spell": { "type": "damage", "damageType": "fire", "amount": "2d6" } },
            { "name": "Scroll of Magic Missile", "rarity": "COMMON", "effect": "cast_magic_missile", "spell": { "type": "damage", "damageType": "force", "amount": "1d4+1", "targets": 3 } },
            { "name": "Scroll of Frostbite", "rarity": "COMMON", "effect": "cast_frostbite", "spell": { "type": "damage", "damageType": "cold", "amount": "1d6", "effect": "disadvantage_on_next_attack" } },
            { "name": "Scroll of Grease", "rarity": "COMMON", "effect": "cast_grease", "spell": { "type": "control", "effect": "create_slick_surface", "duration": 60 } },
            { "name": "Scroll of Fog Cloud", "rarity": "COMMON", "effect": "cast_fog_cloud", "spell": { "type": "control", "effect": "create_obscuring_fog", "radius": 20, "duration": 3600 } },
            { "name": "Scroll of Entangle", "rarity": "COMMON", "effect": "cast_entangle", "spell": { "type": "control", "effect": "create_grasping_weeds", "duration": 60 } },
            { "name": "Scroll of Feather Fall", "rarity": "COMMON", "effect": "cast_feather_fall", "spell": { "type": "buff", "status": "feather_fall", "duration": 60 } },
            { "name": "Scroll of Jump", "rarity": "COMMON", "effect": "cast_jump", "spell": { "type": "buff", "effect": "triple_jump_distance", "duration": 60 } },
            { "name": "Scroll of Longstrider", "rarity": "COMMON", "effect": "cast_longstrider", "spell": { "type": "buff", "stat": "movement_speed", "amount": 10, "duration": 3600 } },
            { "name": "Scroll of Fireball", "rarity": "UNCOMMON", "effect": "fireball", "spell": { "type": "aoe_damage", "damageType": "fire", "amount": "6d6", "radius": 15 } },
            { "name": "Scroll of Shatter", "rarity": "UNCOMMON", "effect": "shatter", "spell": { "type": "aoe_damage", "damageType": "thunder", "amount": "3d8", "radius": 10 } },
            { "name": "Scroll of Spiritual Weapon", "rarity": "UNCOMMON", "effect": "spiritual_weapon", "spell": { "type": "summon", "creature": "force_weapon", "duration": 60 } },
            { "name": "Scroll of Invisibility", "rarity": "UNCOMMON", "effect": "cast_invisibility", "spell": { "type": "buff", "effect": "invisibility", "duration": 60 } },
            { "name": "Scroll of Mirror Image", "rarity": "UNCOMMON", "effect": "cast_mirror_image", "spell": { "type": "buff", "effect": "create_duplicates", "count": 3, "duration": 60 } },
            { "name": "Scroll of Blur", "rarity": "UNCOMMON", "effect": "cast_blur", "spell": { "type": "buff", "effect": "attacks_have_disadvantage", "duration": 60 } },
            { "name": "Scroll of Detect Magic", "rarity": "UNCOMMON", "effect": "detect_magic", "spell": { "type": "utility", "effect": "detect_magic_aura", "duration": 1200 } },
            { "name": "Scroll of Identify", "rarity": "UNCOMMON", "effect": "identify_item", "spell": { "type": "utility", "action": "identify_magic_item_properties" } },
            { "name": "Scroll of See Invisibility", "rarity": "UNCOMMON", "effect": "see_invisibility", "spell": { "type": "buff", "status": "can_see_invisible", "duration": 3600 } },
            { "name": "Scroll of Mending", "rarity": "UNCOMMON", "effect": "repair_item", "spell": { "type": "utility", "action": "repair_low_durability_item" } },
            { "name": "Scroll of Rope Trick", "rarity": "UNCOMMON", "effect": "rope_trick", "spell": { "type": "utility", "action": "create_extradimensional_space", "duration": 3600 } },
            { "name": "Scroll of Purify Food and Drink", "rarity": "UNCOMMON", "effect": "purify_food_drink", "spell": { "type": "utility", "action": "remove_poisons_diseases_from_consumables" } },
            { "name": "Scroll of Spider Climb", "rarity": "UNCOMMON", "effect": "cast_spider_climb", "spell": { "type": "buff", "status": "can_climb_walls", "duration": 300 } },
            { "name": "Scroll of Levitate", "rarity": "UNCOMMON", "effect": "cast_levitate", "spell": { "type": "buff", "status": "can_float_vertically", "duration": 600 } },
            { "name": "Scroll of Water Walking", "rarity": "UNCOMMON", "effect": "cast_water_walk", "spell": { "type": "buff", "status": "can_walk_on_liquids", "duration": 3600 } },
            { "name": "Scroll of Knock", "rarity": "UNCOMMON", "effect": "open_lock", "spell": { "type": "utility", "action": "open_mundane_lock" } },
            { "name": "Scroll of Arcane Lock", "rarity": "UNCOMMON", "effect": "lock_object", "spell": { "type": "utility", "action": "magically_lock_object" } },
            { "name": "Scroll of Silence", "rarity": "UNCOMMON", "effect": "cast_silence", "spell": { "type": "control", "effect": "create_zone_of_silence", "duration": 600 } },
            { "name": "Scroll of Teleportation", "rarity": "RARE", "effect": "teleport_short", "spell": { "type": "utility", "action": "teleport_to_known_location", "range": "short" } },
            { "name": "Scroll of Dimension Door", "rarity": "RARE", "effect": "dimension_door", "spell": { "type": "utility", "action": "teleport_self_and_one_other", "range": 500 } },
            { "name": "Scroll of Banishment", "rarity": "RARE", "effect": "banishment", "spell": { "type": "control", "effect": "send_creature_to_another_plane", "duration": 60 } },
            { "name": "Scroll of Haste", "rarity": "RARE", "effect": "cast_haste", "spell": { "type": "buff", "status": "hasted", "duration": 30 } },
            { "name": "Scroll of Slow", "rarity": "RARE", "effect": "cast_slow", "spell": { "type": "control", "status": "slowed", "duration": 60 } },
            { "name": "Scroll of Greater Invisibility", "rarity": "RARE", "effect": "cast_greater_invisibility", "spell": { "type": "buff", "effect": "invisibility_persists_on_action", "duration": 60 } },
            { "name": "Scroll of Summon Swarm", "rarity": "RARE", "effect": "summon_swarm", "spell": { "type": "summon", "creature": "insect_swarm", "duration": 60 } },
            { "name": "Scroll of Summon Lesser Demons", "rarity": "RARE", "effect": "summon_lesser_demons", "spell": { "type": "summon", "creature": "dretch", "count": "2d6", "uncontrollable": true } },
            { "name": "Scroll of Conjure Animals", "rarity": "RARE", "effect": "conjure_animals", "spell": { "type": "summon", "creature": "wolves", "count": "1d4+1", "duration": 3600 } },
            { "name": "Scroll of Remove Curse", "rarity": "RARE", "effect": "remove_curse", "spell": { "type": "utility", "action": "dispel_curse_moderate" } },
            { "name": "Scroll of Bestow Curse", "rarity": "RARE", "effect": "bestow_curse", "spell": { "type": "debuff", "effect": "apply_moderate_curse" } },
            { "name": "Scroll of Tongues", "rarity": "RARE", "effect": "cast_tongues", "spell": { "type": "buff", "status": "understand_all_languages", "duration": 3600 } },
            { "name": "Scroll of Lightning Bolt", "rarity": "RARE", "effect": "cast_lightning_bolt", "spell": { "type": "damage", "damageType": "lightning", "amount": "8d6", "shape": "line" } },
            { "name": "Scroll of Ice Storm", "rarity": "RARE", "effect": "cast_ice_storm", "spell": { "type": "aoe_damage", "damageType": "cold", "amount": "4d6", "radius": 20 } },
            { "name": "Scroll of Wall of Fire", "rarity": "RARE", "effect": "cast_wall_of_fire", "spell": { "type": "control", "effect": "create_wall_of_fire", "duration": 60 } },
            { "name": "Scroll of Animate Dead (Minor)", "rarity": "RARE", "effect": "animate_dead", "spell": { "type": "summon", "creature": "zombie", "count": "1d4" } },
            { "name": "Scroll of Speak with Dead", "rarity": "RARE", "effect": "speak_with_dead", "spell": { "type": "utility", "action": "ask_questions_of_corpse" } },
            { "name": "Scroll of Feign Death", "rarity": "RARE", "effect": "feign_death", "spell": { "type": "utility", "status": "appear_dead", "duration": 3600 } },
            { "name": "Scroll of Chain Lightning", "rarity": "EPIC", "effect": "chain_lightning", "spell": { "type": "aoe_damage", "damageType": "lightning", "amount": "10d8", "targets": 4 } },
            { "name": "Scroll of Circle of Death", "rarity": "EPIC", "effect": "circle_of_death", "spell": { "type": "aoe_damage", "damageType": "necrotic", "amount": "8d6", "radius": 60 } },
            { "name": "Scroll of Summon Fiend", "rarity": "EPIC", "effect": "summon_fiend", "spell": { "type": "summon", "creature": "barbed_devil", "duration": 3600 } },
            { "name": "Scroll of Planar Shift", "rarity": "EPIC", "effect": "plane_shift", "spell": { "type": "utility", "action": "travel_to_another_plane" } },
            { "name": "Scroll of Teleport Circle", "rarity": "EPIC", "effect": "teleport_circle", "spell": { "type": "utility", "action": "create_permanent_teleport_circle", "requires_year_of_casting": true } },
            { "name": "Scroll of Etherealness", "rarity": "EPIC", "effect": "etherealness", "spell": { "type": "buff", "status": "become_ethereal", "duration": 28800 } },
            { "name": "Scroll of Disintegrate", "rarity": "EPIC", "effect": "disintegrate", "spell": { "type": "damage", "damageType": "force", "amount": "10d6+40", "effect": "turn_to_dust" } },
            { "name": "Scroll of Finger of Death", "rarity": "EPIC", "effect": "finger_of_death", "spell": { "type": "damage", "damageType": "necrotic", "amount": "7d8+30", "effect": "raise_as_zombie_on_kill" } },
            { "name": "Scroll of Prismatic Spray", "rarity": "EPIC", "effect": "prismatic_spray", "spell": { "type": "aoe_damage", "damageType": "random_elemental", "effect": "random_effects" } },
            { "name": "Scroll of Time Stop", "rarity": "LEGENDARY", "effect": "time_stop", "spell": { "type": "utility", "effect": "time_stop_field", "duration": 10 } },
            { "name": "Scroll of Foresight", "rarity": "LEGENDARY", "effect": "foresight", "spell": { "type": "buff", "status": "cannot_be_surprised_adv_on_everything", "duration": 28800 } },
            { "name": "Scroll of Shapechange", "rarity": "LEGENDARY", "effect": "shapechange", "spell": { "type": "buff", "status": "polymorph_into_any_creature", "duration": 3600 } },
            { "name": "Scroll of True Resurrection", "rarity": "LEGENDARY", "effect": "true_resurrection", "spell": { "type": "healing", "action": "resurrect_target_full" } },
            { "name": "Scroll of Mass Heal", "rarity": "LEGENDARY", "effect": "mass_heal", "spell": { "type": "healing", "amount": 700, "targets": "multiple" } },
            { "name": "Scroll of Power Word Heal", "rarity": "LEGENDARY", "effect": "power_word_heal", "spell": { "type": "healing", "action": "heal_target_fully_and_cure_all_conditions" } },
            { "name": "Scroll of Imprisonment", "rarity": "LEGENDARY", "effect": "imprisonment", "spell": { "type": "control", "effect": "trap_creature_in_magical_prison_permanently" } },
            { "name": "Scroll of Meteor Swarm", "rarity": "LEGENDARY", "effect": "meteor_swarm", "spell": { "type": "aoe_damage", "damageType": "fire_bludgeoning", "amount": "40d6", "radius": 40, "count": 4 } },
            { "name": "Scroll of Power Word Kill", "rarity": "LEGENDARY", "effect": "power_word_kill", "spell": { "type": "damage", "effect": "instantly_kill_creature_below_100hp" } },
            { "name": "Scroll of Wish (Limited)", "rarity": "ARTIFACT", "effect": "limited_wish", "spell": { "type": "utility", "action": "fulfill_minor_wish" } },
            { "name": "Scroll of Karsus's Folly", "rarity": "ARTIFACT", "effect": "become_a_god", "spell": { "type": "utility", "action": "steal_divinity_of_a_god", "consequence": "guaranteed_catastrophic_failure" } },
            { "name": "Scroll of Genesis", "rarity": "ARTIFACT", "effect": "create_demiplane", "spell": { "type": "utility", "action": "create_a_small_plane_of_existence" } },
            { "name": "Scroll of Gate", "rarity": "ARTIFACT", "effect": "open_gate", "spell": { "type": "utility", "action": "open_portal_to_plane", "requires_focus": true } },
            { "name": "Scroll of True Wish", "rarity": "ARTIFACT", "effect": "true_wish", "spell": { "type": "utility", "action": "alter_reality_significantly", "consequence": "high_personal_cost" } },
            { "name": "Scroll of the Unmaking", "rarity": "ARTIFACT", "effect": "unmake", "spell": { "type": "damage", "effect": "erase_target_from_existence", "save_is_impossible": true } }
        ],
        "potions": [
            { "name": "Minor Health Potion", "rarity": "COMMON", "effect": { "type": "heal", "amount": 25 } },
            { "name": "Major Health Potion", "rarity": "UNCOMMON", "effect": { "type": "heal", "amount": 60 } },
            { "name": "Salve of Soothing", "rarity": "COMMON", "effect": { "type": "heal", "amount": 10, "over_time": 10 } },
            { "name": "Tonic of Vigor", "rarity": "COMMON", "effect": { "type": "buff", "status": "remove_exhaustion_level_1", "duration": 3600 } },
            { "name": "Lesser Mana Potion", "rarity": "COMMON", "effect": { "type": "mana", "amount": 20 } },
            { "name": "Arcane Infusion (Weak)", "rarity": "COMMON", "effect": { "type": "mana", "amount": 10, "over_time": 10 } },
            { "name": "Draught of Focus", "rarity": "COMMON", "effect": { "type": "buff", "status": "advantage_on_concentration_1_roll", "duration": 600 } },
            { "name": "Potion of Water Breathing", "rarity": "COMMON", "effect": { "type": "buff", "status": "water_breathing", "duration": 600 } },
            { "name": "Potion of Gills", "rarity": "COMMON", "effect": { "type": "buff", "status": "water_breathing", "duration": 300 } },
            { "name": "Bubble Breath Concoction", "rarity": "COMMON", "effect": { "type": "utility", "action": "exhale_a_large_air_bubble" } },
            { "name": "Antidote (Weak)", "rarity": "COMMON", "effect": { "type": "cure", "status": "poisoned", "strength": "weak" } },
            { "name": "Stomach Soother", "rarity": "COMMON", "effect": { "type": "cure", "status": "nauseated", "strength": "weak" } },
            { "name": "Clear-Mind Elixir", "rarity": "COMMON", "effect": { "type": "cure", "status": "confused", "duration": 60 } },
            { "name": "Slippery Draught", "rarity": "COMMON", "effect": { "type": "buff", "status": "freedom_of_movement_minor", "duration": 60 } },
            { "name": "Oil of Squeaking", "rarity": "COMMON", "effect": { "type": "debuff", "target": "object", "effect": "makes_hinges_etc_noisy" } },
            { "name": "Goo Bomb", "rarity": "COMMON", "effect": { "type": "utility", "action": "create_sticky_mess_area" } },
            { "name": "Flask of Oil", "rarity": "COMMON", "effect": { "type": "utility", "action": "create_flammable_puddle" } },
            { "name": "Alchemist's Fire", "rarity": "COMMON", "effect": { "type": "damage", "damageType": "fire", "amount": "1d4", "duration": 12 } },
            { "name": "Vial of Acid", "rarity": "COMMON", "effect": { "type": "damage", "damageType": "acid", "amount": "2d6", "one_time": true } },
            { "name": "Strength Elixir", "rarity": "UNCOMMON", "effect": { "type": "buff", "stat": "strength", "amount": 2, "duration": 300 } },
            { "name": "Potion of Ogre Strength (Lesser)", "rarity": "UNCOMMON", "effect": { "type": "buff", "stat": "strength", "amount": 2, "duration": 3600 } },
            { "name": "Elixir of the Bull", "rarity": "UNCOMMON", "effect": { "type": "buff", "stat": "constitution", "amount": 2, "duration": 300 } },
            { "name": "Potion of Heroism", "rarity": "UNCOMMON", "effect": { "type": "buff", "status": "blessed", "amount": 1, "duration": 180 } },
            { "name": "Draught of Courage", "rarity": "UNCOMMON", "effect": { "type": "cure", "status": "frightened", "duration": 3600 } },
            { "name": "Liquid Valor", "rarity": "UNCOMMON", "effect": { "type": "buff", "hp_type": "temporary", "amount": "2d10", "duration": 3600 } },
            { "name": "Draught of Swiftness", "rarity": "UNCOMMON", "effect": { "type": "buff", "status": "swift", "duration": 120 } },
            { "name": "Elixir of the Cat", "rarity": "UNCOMMON", "effect": { "type": "buff", "stat": "dexterity", "amount": 2, "duration": 300 } },
            { "name": "Potion of Agility", "rarity": "UNCOMMON", "effect": { "type": "buff", "status": "advantage_on_acrobatics_checks", "duration": 60 } },
            { "name": "Oil of Sharpness", "rarity": "UNCOMMON", "effect": { "type": "weapon_buff", "property": "damage_bonus", "amount": 2, "duration": 300 } },
            { "name": "Poisoner's Oil", "rarity": "UNCOMMON", "effect": { "type": "weapon_buff", "property": "add_poison_damage", "amount": "1d4", "duration": 60 } },
            { "name": "Whetstone of Keen Edge", "rarity": "UNCOMMON", "effect": { "type": "weapon_buff", "property": "increased_crit_range", "amount": 1, "duration": 300 } },
            { "name": "Potion of Climbing", "rarity": "UNCOMMON", "effect": { "type": "buff", "status": "spider_climb", "duration": 300 } },
            { "name": "Gecko's Grip Potion", "rarity": "UNCOMMON", "effect": { "type": "buff", "status": "can_climb_walls", "duration": 180 } },
            { "name": "Draught of the Mountain Goat", "rarity": "UNCOMMON", "effect": { "type": "buff", "status": "sure_footed", "duration": 3600 } },
            { "name": "Potion of Animal Friendship", "rarity": "UNCOMMON", "effect": { "type": "charm", "target_type": "beast", "duration": 1800 } },
            { "name": "Potion of Speak with Animals", "rarity": "UNCOMMON", "effect": { "type": "buff", "status": "can_speak_with_animals", "duration": 600 } },
            { "name": "Beast Tongue Elixir", "rarity": "UNCOMMON", "effect": { "type": "utility", "action": "understand_animal_noises", "duration": 3600 } },
            { "name": "Potion of Invisibility", "rarity": "RARE", "effect": { "type": "status", "effect": "ethereal", "duration": 60 } },
            { "name": "Draught of the Chameleon", "rarity": "RARE", "effect": { "type": "buff", "status": "advantage_on_stealth", "duration": 3600 } },
            { "name": "Vanishing Dye", "rarity": "RARE", "effect": { "type": "utility", "action": "makes_object_invisible", "duration": 3600 } },
            { "name": "Elixir of Fortitude", "rarity": "RARE", "effect": { "type": "buff", "status": "fortified", "duration": 600 } },
            { "name": "Potion of Resistance (Fire)", "rarity": "RARE", "effect": { "type": "buff", "resistance": "fire_medium", "duration": 3600 } },
            { "name": "Ironskin Brew", "rarity": "RARE", "effect": { "type": "buff", "stat": "armor", "amount": 2, "duration": 300 } },
            { "name": "Potion of Giant Strength", "rarity": "RARE", "effect": { "type": "buff", "stat": "strength", "amount": 4, "duration": 60 } },
            { "name": "Potion of Hill Giant Strength", "rarity": "RARE", "effect": { "type": "buff", "set_stat": "strength", "amount": 21, "duration": 3600 } },
            { "name": "Elixir of Troll's Blood", "rarity": "RARE", "effect": { "type": "heal", "status": "regenerating_weak", "duration": 60 } },
            { "name": "Philter of Love", "rarity": "RARE", "effect": { "type": "charm", "target_type": "humanoid", "duration": 3600 } },
            { "name": "Potion of Persuasion", "rarity": "RARE", "effect": { "type": "buff", "stat": "charisma", "amount": 4, "duration": 3600 } },
            { "name": "Draught of Truth", "rarity": "RARE", "effect": { "type": "utility", "action": "compel_drinker_to_tell_truth", "duration": 60 } },
            { "name": "Potion of Fire Resistance", "rarity": "RARE", "effect": { "type": "buff", "resistance": "fire_medium", "duration": 600 } },
            { "name": "Asbestos Cream", "rarity": "RARE", "effect": { "type": "buff", "resistance": "fire_large_one_hit" } },
            { "name": "Frigid Concoction", "rarity": "RARE", "effect": { "type": "buff", "resistance": "cold_medium", "duration": 600 } },
            { "name": "Draught of the Oracle", "rarity": "RARE", "effect": { "type": "utility", "status": "future_sight_brief", "side_effect": "dizziness" } },
            { "name": "Potion of Scrying", "rarity": "RARE", "effect": { "type": "utility", "action": "scry_on_target", "duration": 60 } },
            { "name": "Elixir of Far-Hearing", "rarity": "RARE", "effect": { "type": "buff", "status": "clairaudience", "duration": 300 } },
            { "name": "Potion of Superior Healing", "rarity": "EPIC", "effect": { "type": "heal", "amount": 250 } },
            { "name": "Mageblood Potion", "rarity": "EPIC", "effect": { "type": "mana", "status": "mana_regen_strong", "duration": 60 } },
            { "name": "Panacea of the Healer", "rarity": "EPIC", "effect": { "type": "cure", "status": "all_diseases_and_poisons" } },
            { "name": "Elixir of Arcane Power", "rarity": "EPIC", "effect": { "type": "buff", "status": "arcane_potency", "duration": 300 } },
            { "name": "Potion of Spell Power", "rarity": "EPIC", "effect": { "type": "buff", "stat": "spell_damage", "amount": "20%", "duration": 60 } },
            { "name": "Vial of Pure Magic", "rarity": "EPIC", "effect": { "type": "mana", "action": "restore_one_expended_spell_slot" } },
            { "name": "Potion of Dragon's Breath (Fire)", "rarity": "EPIC", "effect": { "type": "damage_aura", "damageType": "fire", "amount": "1d6", "duration": 30 } },
            { "name": "Draught of the Frost Wyrm", "rarity": "EPIC", "effect": { "type": "utility", "action": "exhale_cone_of_cold", "damage": "8d8" } },
            { "name": "Shocking Cocktail", "rarity": "EPIC", "effect": { "type": "damage_aura", "damageType": "lightning", "amount": "1d4", "duration": 30 } },
            { "name": "Potion of Flying", "rarity": "EPIC", "effect": { "type": "buff", "status": "flight", "duration": 180 } },
            { "name": "Potion of Gaseous Form", "rarity": "EPIC", "effect": { "type": "buff", "status": "gaseous_form", "duration": 3600 } },
            { "name": "Potion of Speed", "rarity": "EPIC", "effect": { "type": "buff", "status": "hasted_long", "duration": 60 } },
            { "name": "Elixir of Immense Intellect", "rarity": "EPIC", "effect": { "type": "buff", "stat": "intelligence", "amount": 6, "duration": 600 } },
            { "name": "Potion of Storm Giant Strength", "rarity": "EPIC", "effect": { "type": "buff", "set_stat": "strength", "amount": 29, "duration": 3600 } },
            { "name": "Elixir of Longevity", "rarity": "EPIC", "effect": { "type": "utility", "action": "reduce_age_1d6_years" } },
            { "name": "Draught of Immortality (False)", "rarity": "LEGENDARY", "effect": { "type": "buff", "status": "regenerating_strong", "duration": 3600, "side_effect": "cursed_after_wear_off" } },
            { "name": "Elixir of Life (Imperfect)", "rarity": "LEGENDARY", "effect": { "type": "heal", "action": "resurrect_recently_dead", "side_effect": "memory_loss" } },
            { "name": "Potion of Invulnerability", "rarity": "LEGENDARY", "effect": { "type": "buff", "resistance": "all_damage_medium", "duration": 60 } },
            { "name": "Potion of Reality Warping", "rarity": "LEGENDARY", "effect": { "type": "utility", "action": "alter_local_reality_minor", "side_effect": "unpredictable_consequences" } },
            { "name": "Draught of Fate", "rarity": "LEGENDARY", "effect": { "type": "utility", "action": "reroll_any_one_event", "side_effect": "attracts_attention_of_fate" } },
            { "name": "Elixir of Possibilities", "rarity": "LEGENDARY", "effect": { "type": "buff", "status": "advantage_on_all_rolls", "duration": 60, "side_effect": "exhaustion_after" } },
            { "name": "Tears of the Phoenix", "rarity": "LEGENDARY", "effect": { "type": "heal", "action": "true_resurrection_single_drop", "uses": 3 } },
            { "name": "Heartwood Sap", "rarity": "LEGENDARY", "effect": { "type": "heal", "action": "regenerate_lost_limbs", "uses": 1 } },
            { "name": "Sunwell Water", "rarity": "LEGENDARY", "effect": { "type": "mana", "action": "fully_restore_mana_and_grant_arcane_potency", "uses": 1 } },
            { "name": "Blood of the Gods", "rarity": "ARTIFACT", "effect": { "type": "buff", "status": "demigod_form", "duration": 60, "side_effect": "divine_attention" } },
            { "name": "Nectar of Olympus", "rarity": "ARTIFACT", "effect": { "type": "buff", "action": "permanently_increase_one_stat", "side_effect": "incur_wrath_of_a_god" } },
            { "name": "Waters of the World-Spring", "rarity": "ARTIFACT", "effect": { "type": "utility", "action": "gain_all_knowledge_briefly", "side_effect": "madness_or_enlightenment" } }
        ],
        "wands": [
            { "name": "Sparking Wand", "charges": 10, "spell": "magic_missile_weak", "rarity": "COMMON", "effects": ["spell_focus_tiny"] },
            { "name": "Tinder-twig", "charges": 20, "spell": "produce_flame", "rarity": "COMMON", "effects": [] },
            { "name": "Glimmering Stick", "charges": 15, "spell": "faerie_fire", "rarity": "COMMON", "effects": [] },
            { "name": "Wand of Light", "charges": 20, "spell": "continual_light", "rarity": "COMMON", "effects": [] },
            { "name": "Ever-burning Torch", "charges": "infinite", "spell": "light_permanent", "rarity": "COMMON", "effects": [] },
            { "name": "Wand of Mending", "charges": 10, "spell": "mend_object_minor", "rarity": "COMMON", "effects": [] },
            { "name": "Wand of Detect Traps", "charges": 15, "spell": "find_traps_minor", "rarity": "COMMON", "effects": [] },
            { "name": "Wand of Detect Poison", "charges": 15, "spell": "detect_poison_and_disease", "rarity": "COMMON", "effects": [] },
            { "name": "Wand of Purifying Water", "charges": 10, "spell": "purify_water", "rarity": "COMMON", "effects": [] },
            { "name": "Wand of Healing Touch", "charges": 7, "spell": "cure_light_wounds", "rarity": "UNCOMMON", "effects": ["blessed_touch"] },
            { "name": "Wand of Lesser Restoration", "charges": 5, "spell": "cure_disease_or_poison", "rarity": "UNCOMMON", "effects": [] },
            { "name": "Wand of Shielding", "charges": 10, "spell": "cast_shield", "rarity": "UNCOMMON", "effects": ["defensive_ward"] },
            { "name": "Wand of Firebolts", "charges": 15, "spell": "firebolt_moderate", "rarity": "UNCOMMON", "effects": ["fire_attunement"] },
            { "name": "Wand of Frost Rays", "charges": 15, "spell": "ray_of_frost_moderate", "rarity": "UNCOMMON", "effects": ["cold_attunement"] },
            { "name": "Wand of Shocking Grasp", "charges": 10, "spell": "shocking_grasp_moderate", "rarity": "UNCOMMON", "effects": ["electrical_attunement"] },
            { "name": "Wand of Web", "charges": 5, "spell": "web_area", "rarity": "UNCOMMON", "effects": [] },
            { "name": "Wand of Entanglement", "charges": 7, "spell": "entangle_area", "rarity": "UNCOMMON", "effects": [] },
            { "name": "Wand of Grease", "charges": 10, "spell": "grease_surface", "rarity": "UNCOMMON", "effects": [] },
            { "name": "Wand of Paralyzation", "charges": 5, "spell": "hold_person_weak", "rarity": "RARE", "effects": ["nerve_shock"] },
            { "name": "Wand of Sleep", "charges": 7, "spell": "sleep_area", "rarity": "RARE", "effects": ["soporific_magic"] },
            { "name": "Wand of Command", "charges": 5, "spell": "command_word", "rarity": "RARE", "effects": ["authoritative_presence"] },
            { "name": "Wand of Illusions", "charges": 10, "spell": "minor_illusion_strong", "rarity": "RARE", "effects": ["deceptive_magic"] },
            { "name": "Wand of Fear", "charges": 5, "spell": "fear_cone", "rarity": "RARE", "effects": ["intimidation_aura"] },
            { "name": "Wand of Phantasmal Force", "charges": 7, "spell": "phantasmal_force_target", "rarity": "RARE", "effects": ["mind_trickery"] },
            { "name": "Wand of the War Mage +1", "charges": 0, "spell": "passive_spell_attack_bonus_1", "rarity": "RARE", "effects": [] },
            { "name": "Wand of the Pact Keeper +1", "charges": 0, "spell": "passive_warlock_spell_dc_bonus_1", "rarity": "RARE", "effects": [] },
            { "name": "Rod of the Acolyte +1", "charges": 0, "spell": "passive_cleric_spell_attack_bonus_1", "rarity": "RARE", "effects": [] },
            { "name": "Wand of Enemy Detection", "charges": 8, "spell": "detect_enemies_nearby", "rarity": "RARE", "effects": [] },
            { "name": "Wand of Secret Door Detection", "charges": 10, "spell": "detect_secret_doors", "rarity": "RARE", "effects": [] },
            { "name": "Wand of Scrying", "charges": 3, "spell": "scry_on_target", "rarity": "RARE", "effects": [] },
            { "name": "Wand of Lightning Bolts", "charges": 8, "spell": "lightning_bolt_strong", "rarity": "EPIC", "effects": ["electrical_surge"] },
            { "name": "Wand of Fireballs", "charges": 8, "spell": "fireball_strong", "rarity": "EPIC", "effects": ["explosive_burst"] },
            { "name": "Wand of Ice Storms", "charges": 5, "spell": "ice_storm_area", "rarity": "EPIC", "effects": ["freezing_aura"] },
            { "name": "Wand of Polymorph (Unstable)", "charges": 3, "spell": "polymorph_random", "rarity": "EPIC", "effects": ["wild_magic"] },
            { "name": "Wand of Banishment", "charges": 4, "spell": "banish_creature", "rarity": "EPIC", "effects": ["planar_disruption"] },
            { "name": "Wand of Summoning", "charges": 3, "spell": "summon_elemental", "rarity": "EPIC", "effects": ["planar_binding_weak"] },
            { "name": "Wand of Wonder", "charges": "1d4+1", "spell": "random_magical_effect", "rarity": "EPIC", "effects": ["chaotic_energy"] },
            { "name": "Rod of Lordly Might (Lesser)", "charges": "1d6+1", "spell": "multiple_effects_by_button", "rarity": "EPIC", "effects": ["versatile_power"] },
            { "name": "Wand of the War Mage +2", "charges": 0, "spell": "passive_spell_attack_bonus_2", "rarity": "EPIC", "effects": [] },
            { "name": "Wand of Necrotic Power", "charges": 6, "spell": "ray_of_enfeeblement_strong", "rarity": "LEGENDARY", "effects": ["cursed_touch", "life_drain_small"] },
            { "name": "Wand of Disintegration", "charges": 3, "spell": "disintegrate_beam", "rarity": "LEGENDARY", "effects": ["molecular_disruption"] },
            { "name": "Wand of Power Word Stun", "charges": 4, "spell": "power_word_stun", "rarity": "LEGENDARY", "effects": ["authoritative_magic"] },
            { "name": "Wand of the Phoenix", "charges": 3, "spell": "firestorm_and_rebirth", "rarity": "LEGENDARY", "effects": ["rebirth_on_charge_expend", "fire_immunity_while_held"] },
            { "name": "Wand of the Archmage", "charges": 20, "spell": "multiple_high_level_spells", "rarity": "LEGENDARY", "effects": ["arcane_mastery", "spell_absorption"] },
            { "name": "Wand of Orcus (Replica)", "charges": 7, "spell": "animate_dead_strong", "rarity": "LEGENDARY", "effects": ["command_undead", "corrupting_touch"] },
            { "name": "Scepter of the Planes", "charges": 3, "spell": "plane_shift_target", "rarity": "ARTIFACT", "effects": ["planar_attunement", "gate_control"], "slot": "mainHand" },
            { "name": "Wand of Creation", "charges": 5, "spell": "create_object_from_nothing", "rarity": "ARTIFACT", "effects": ["matter_manipulation", "true_creation"] },
            { "name": "The Elder Wand", "charges": "unknown", "spell": "unbeatable_spellcasting", "rarity": "ARTIFACT", "effects": ["master_of_death", "will_of_its_own"] }
        ],
        "orbs": [
            { "name": "Orb of Minor Warding", "rarity": "COMMON", "effects": ["defense_aura_tiny"], "passive_effect": { "stat": "armor", "amount": 1 }, "slot": "offHand" },
            { "name": "Farseer's Eyeball", "rarity": "COMMON", "effects": ["perception_tiny"], "active_ability": "look_around_a_corner", "slot": "offHand" },
            { "name": "Glowing Pebble", "rarity": "COMMON", "effects": ["emits_light"], "active_ability": "pulse_light", "slot": "offHand" },
            { "name": "Smoked Glass Orb", "rarity": "COMMON", "effects": ["light_dimming"], "active_ability": "create_darkness_patch", "slot": "offHand" },
            { "name": "Orb of Annoyance", "rarity": "COMMON", "effects": ["distraction"], "active_ability": "create_annoying_buzzing_sound", "slot": "offHand" },
            { "name": "Lodestone", "rarity": "COMMON", "effects": ["magnetic_pull_tiny"], "passive_effect": { "attracts": "small_metal_objects" }, "slot": "offHand" },
            { "name": "Scrying Orb (Cloudy)", "rarity": "UNCOMMON", "effects": ["scry_weak"], "active_ability": "scry_location_nearby_limited", "slot": "offHand" },
            { "name": "Pool of Divination (Small)", "rarity": "UNCOMMON", "effects": ["glimpse_future_vague"], "active_ability": "ask_one_question_vague_answer", "slot": "offHand" },
            { "name": "Orb of Prophecy (Cracked)", "rarity": "UNCOMMON", "effects": ["whispers_prophecies"], "passive_effect": { "gives": "confusing_omens" }, "slot": "offHand" },
            { "name": "Orb of Elemental Attunement (Fire)", "rarity": "UNCOMMON", "effects": ["fire_resistance_tiny"], "passive_effect": { "empower": "fire_spells_tiny" }, "slot": "offHand" },
            { "name": "Orb of Elemental Attunement (Water)", "rarity": "UNCOMMON", "effects": ["water_breathing_short"], "passive_effect": { "empower": "water_spells_tiny" }, "slot": "offHand" },
            { "name": "Orb of Elemental Attunement (Earth)", "rarity": "UNCOMMON", "effects": ["ignore_difficult_terrain_rock"], "passive_effect": { "empower": "earth_spells_tiny" }, "slot": "offHand" },
            { "name": "Orb of Storms (Lesser)", "rarity": "RARE", "effects": ["call_lightning_minor", "weather_sense"], "active_ability": "summon_small_storm_cloud", "slot": "offHand" },
            { "name": "Ever-sparking Sphere", "rarity": "RARE", "effects": ["lightning_resistance_small"], "passive_effect": { "empower": "lightning_spells_small" }, "slot": "offHand" },
            { "name": "Zephyr in a Bottle", "rarity": "RARE", "effects": ["wind_wall_ability"], "active_ability": "create_gust_of_wind", "slot": "offHand" },
            { "name": "Kinetic Orb of Force", "rarity": "RARE", "effects": ["force_push_ability"], "passive_effect": { "on_being_hit": "knockback_attacker_chance" }, "slot": "offHand" },
            { "name": "Telekinetic Sphere", "rarity": "RARE", "effects": ["mage_hand_strong"], "active_ability": "lift_object_up_to_100lbs", "slot": "offHand" },
            { "name": "Repulsion Orb", "rarity": "RARE", "effects": ["force_field_personal_brief"], "active_ability": "create_aoe_push", "slot": "offHand" },
            { "name": "Blood Orb of the Vampire", "rarity": "EPIC", "effects": ["life_steal_aura_small", "empower_dark_magic"], "passive_effect": { "on_damage_dealt": "heal_self_percentage" }, "slot": "offHand" },
            { "name": "Soul-Drinker's Globe", "rarity": "EPIC", "effects": ["necrotic_resistance_medium"], "active_ability": "cast_vampiric_touch", "slot": "offHand" },
            { "name": "Phylactery's Echo", "rarity": "EPIC", "effects": ["control_undead_weak", "necromancy_spell_power_medium"], "passive_effect": { "grants": "knowledge_of_the_undead" }, "slot": "offHand" },
            { "name": "Orb of Entropy", "rarity": "EPIC", "effects": ["decay_aura_weak"], "active_ability": "age_object_minor", "slot": "offHand" },
            { "name": "Dust of Ages", "rarity": "EPIC", "effects": ["disintegrate_object_slowly"], "active_ability": "cast_ray_of_enfeeblement", "slot": "offHand" },
            { "name": "Void-touched Sphere", "rarity": "EPIC", "effects": ["shadow_resistance_medium"], "active_ability": "create_area_of_magical_darkness", "slot": "offHand" },
            { "name": "Orb of Dragon Souls", "rarity": "LEGENDARY", "effects": ["dragon_knowledge_passive", "command_lesser_drakes"], "active_ability": "absorb_dragon_energy", "slot": "offHand" },
            { "name": "Heart of a Chromatic Dragon", "rarity": "LEGENDARY", "effects": ["elemental_immunity_one_type", "dragon_breath_weapon"], "passive_effect": { "grants": "draconic_might_and_terror" }, "slot": "offHand" },
            { "name": "Aetherium Core", "rarity": "LEGENDARY", "effects": ["magic_resistance_aura_large", "absorb_spells"], "passive_effect": { "recharge_from_absorbed_spells": true }, "slot": "offHand" },
            { "name": "The Eye of the Beholder", "rarity": "LEGENDARY", "effects": ["antimagic_cone_ability", "multiple_ray_attacks"], "active_ability": "random_eye_ray", "slot": "offHand" },
            { "name": "Gorgon's Eye", "rarity": "LEGENDARY", "effects": ["petrifying_gaze_ability"], "passive_effect": { "grants": "immunity_to_petrification" }, "slot": "offHand" },
            { "name": "Fomorian's Evil Eye", "rarity": "LEGENDARY", "effects": ["curse_of_misfortune_gaze", "distort_reality_gaze"], "active_ability": "project_curse", "slot": "offHand" },
            { "name": "Orb of Creation", "rarity": "ARTIFACT", "effects": ["shape_matter_slowly", "genesis_pulse"], "passive_effect": { "grants": "true_understanding_of_matter" }, "slot": "offHand" },
            { "name": "The Architect's Sphere", "rarity": "ARTIFACT", "effects": ["build_anything_from_thought"], "active_ability": "manifest_blueprint_into_reality", "slot": "offHand" },
            { "name": "Seed of the First Tree", "rarity": "ARTIFACT", "effects": ["life_aura_immense", "grow_flora_instantly"], "passive_effect": { "can_revive_dead_land": true }, "slot": "offHand" }
        ],
        "talismans": [
            { "name": "Talisman of Luck (Cracked)", "rarity": "COMMON", "effects": ["reroll_one_bad_dice_once"], "slot": "amulet" },
            { "name": "Four-Leaf Clover", "rarity": "COMMON", "effects": ["luck_tiny"], "slot": "amulet" },
            { "name": "A Rabbit's Foot", "rarity": "COMMON", "effects": ["luck_tiny_creepy"], "slot": "amulet" },
            { "name": "Talisman of the Boar", "rarity": "COMMON", "effects": ["constitution_tiny"], "slot": "amulet" },
            { "name": "Bear's Tooth Necklace", "rarity": "COMMON", "effects": ["strength_tiny"], "slot": "amulet" },
            { "name": "Feather of the Owl", "rarity": "COMMON", "effects": ["wisdom_tiny"], "slot": "amulet" },
            { "name": "Talisman of Protection", "rarity": "UNCOMMON", "effects": ["elemental_resistance_fire_tiny"], "slot": "amulet" },
            { "name": "Warding Charm against Undead", "rarity": "UNCOMMON", "effects": ["disadvantage_on_undead_attacks_against_wearer"], "slot": "amulet" },
            { "name": "Amulet of Health", "rarity": "UNCOMMON", "effects": ["health_boost_small"], "slot": "amulet" },
            { "name": "Talisman of the Crag Cat", "rarity": "UNCOMMON", "effects": ["dexterity_tiny", "jump_bonus"], "slot": "amulet" },
            { "name": "Necklace of the Monkey", "rarity": "UNCOMMON", "effects": ["acrobatics_bonus", "climbing_bonus"], "slot": "amulet" },
            { "name": "Talisman of the Fish", "rarity": "UNCOMMON", "effects": ["swim_speed_increase", "hold_breath_longer"], "slot": "amulet" },
            { "name": "Talisman of the Beast", "rarity": "RARE", "effects": ["speak_with_animals", "animal_friendship_aura"], "slot": "amulet" },
            { "name": "Talisman of the Pack Leader", "rarity": "RARE", "effects": ["charm_animal_once_per_day", "advantage_on_animal_handling"], "slot": "amulet" },
            { "name": "Totem of the Primal Spirit", "rarity": "RARE", "effects": ["channel_beast_aspect_briefly"], "slot": "amulet" },
            { "name": "Talisman of the Flame", "rarity": "RARE", "effects": ["fire_resistance_small", "produce_flame_at_will"], "slot": "amulet" },
            { "name": "Talisman of the Glacier", "rarity": "RARE", "effects": ["cold_resistance_small", "chill_touch_at_will"], "slot": "amulet" },
            { "name": "Talisman of the Tempest", "rarity": "RARE", "effects": ["lightning_resistance_small", "shocking_grasp_at_will"], "slot": "amulet" },
            { "name": "Talisman of Forbidden Knowledge", "rarity": "EPIC", "effects": ["unlock_ancient_lore_1", "minor_madness_chance"], "slot": "amulet" },
            { "name": "Amulet of the Elder Things", "rarity": "EPIC", "effects": ["whispers_from_beyond", "psychic_resistance_medium", "sanity_drain"], "slot": "amulet" },
            { "name": "Pendant of the Void", "rarity": "EPIC", "effects": ["contact_other_plane_once_per_week", "shadow_magic_empower"], "slot": "amulet" },
            { "name": "Talisman of Pure Good", "rarity": "EPIC", "effects": ["turn_fiend", "holy_smite_ability", "only_usable_by_good"], "slot": "amulet" },
            { "name": "Amulet of the Deva", "rarity": "EPIC", "effects": ["healing_light_ability", "protection_from_evil_aura", "only_usable_by_good"], "slot": "amulet" },
            { "name": "Symbol of the Sun God", "rarity": "EPIC", "effects": ["sunbeam_ability", "destroy_undead_aura", "only_usable_by_good"], "slot": "amulet" },
            { "name": "Talisman of Eternal Night", "rarity": "LEGENDARY", "effects": ["control_shadows_moderate", "vampiric_touch_empowered"], "slot": "amulet" },
            { "name": "Amulet of the Vampire Lord", "rarity": "LEGENDARY", "effects": ["dominate_person_once_per_day", "regenerate_in_darkness", "sunlight_weakness"], "slot": "amulet" },
            { "name": "Heart of Darkness", "rarity": "LEGENDARY", "effects": ["create_magical_darkness_at_will", "fear_aura", "life_drain_aura"], "slot": "amulet" },
            { "name": "Talisman of Ultimate Evil", "rarity": "LEGENDARY", "effects": ["create_undead", "unholy_aura", "corrupts_wearer", "only_usable_by_evil"], "slot": "amulet" },
            { "name": "Pendant of the Pit Fiend", "rarity": "LEGENDARY", "effects": ["summon_lesser_devil", "fireball_at_will", "corrupting_influence", "only_usable_by_evil"], "slot": "amulet" },
            { "name": "Unholy Symbol of the Death God", "rarity": "LEGENDARY", "effects": ["finger_of_death_once_per_week", "command_undead_aura", "desecrate_ground", "only_usable_by_evil"], "slot": "amulet" },
            { "name": "Talisman of the Shifting Sands", "rarity": "ARTIFACT", "effects": ["control_time_minor", "temporal_stasis_field", "risk_of_time_paradox"], "slot": "amulet" },
            { "name": "The Hourglass of Ages", "rarity": "ARTIFACT", "effects": ["stop_time_once_per_year", "rewind_one_minute_once_per_day", "ages_wearer_with_use"], "slot": "amulet" },
            { "name": "Amulet of the Planeswalker", "rarity": "ARTIFACT", "effects": ["plane_shift_at_will", "planar_ally_summon", "cannot_be_imprisoned_on_one_plane"], "slot": "amulet" }
        ]
    },
    "questItems": {
        "books": [
            { "name": "Tome of Ancient Wisdom", "rarity": "RARE", "effects": ["knowledge_boost", "lore_reveal_1"] },
            { "name": "Theories on Magic", "rarity": "RARE", "effects": ["arcana_skill_up", "reveals_nature_of_the_weave"] },
            { "name": "Forbidden History of the Empire", "rarity": "RARE", "effects": ["history_skill_up", "reveals_a_dark_secret_of_the_ruling_dynasty"] },
            { "name": "Spellbook of Shadows", "rarity": "EPIC", "effects": ["dark_magic_access", "intelligence_1", "cursed_knowledge"] },
            { "name": "Warlock's Grimoire", "rarity": "EPIC", "effects": ["learn_new_patron_spell", "contacts_a_powerful_entity"] },
            { "name": "The Book of Vile Darkness (Copy)", "rarity": "EPIC", "effects": ["evil_ritual_knowledge", "major_sanity_drain", "corrupts_reader"] },
            { "name": "Chronicle of Heroes", "rarity": "LEGENDARY", "effects": ["inspiration_aura", "leadership_1", "historical_insight"] },
            { "name": "The Deeds of the First King", "rarity": "LEGENDARY", "effects": ["reveals_location_of_kings_tomb", "inspires_hope_in_a_kingdom"] },
            { "name": "Epic of the World-Shapers", "rarity": "LEGENDARY", "effects": ["unlocks_understanding_of_ancient_beings", "grants_resistance_to_reality_warping"] },
            { "name": "Herbalist's Guide (Local Flora)", "rarity": "COMMON", "effects": ["identify_plants_1"] },
            { "name": "Farmer's Almanac", "rarity": "COMMON", "effects": ["predict_weather_short_term"] },
            { "name": "A Scrawled Note", "rarity": "COMMON", "effects": ["provides_a_clue_to_a_minor_quest"], "description": "Reads: 'The key is under the mat.'" },
            { "name": "Engineer's Doodles", "rarity": "COMMON", "effects": ["crafting_insight_basic_traps"] },
            { "name": "Architect's Blueprints", "rarity": "COMMON", "effects": ["reveals_a_hidden_passage_in_a_building"] },
            { "name": "A Love Letter", "rarity": "COMMON", "effects": ["quest_item_for_delivery_or_blackmail"] },
            { "name": "A Child's Nursery Rhymes", "rarity": "COMMON", "effects": ["contains_hidden_prophecy"], "description": "A book of simple rhymes, one seems to have a hidden meaning." },
            { "name": "The Goose's Golden Egg", "rarity": "COMMON", "effects": ["a_collection_of_fables_with_moral_lessons"] },
            { "name": "Songs of the Hearth", "rarity": "COMMON", "effects": ["teaches_a_traditional_song_for_a_quest"] },
            { "name": "The Mad Alchemist's Journal", "rarity": "UNCOMMON", "effects": ["potion_recipe_unstable_1", "minor_poison_recipe"] },
            { "name": "A Guide to Basic Poisons", "rarity": "UNCOMMON", "effects": ["crafting_insight_poisoner_kit"] },
            { "name": "Cryptic Research Notes", "rarity": "UNCOMMON", "effects": ["hints_at_a_creature's_weakness"] },
            { "name": "Codex of Lost Religions", "rarity": "UNCOMMON", "effects": ["theology_skill_up", "reveal_forgotten_shrine_location"] },
            { "name": "Hagiography of a Minor Saint", "rarity": "UNCOMMON", "effects": ["reveals_the_location_of_a_holy_relic"] },
            { "name": "The Trials of a Heretic", "rarity": "UNCOMMON", "effects": ["provides_insight_into_an_enemy_cult"] },
            { "name": "Beastmaster's Field Guide", "rarity": "UNCOMMON", "effects": ["track_beasts_bonus", "understand_animal_behavior"], "description": "Details the habits and habitats of local fauna." },
            { "name": "Monster Anatomy for Dummies", "rarity": "UNCOMMON", "effects": ["advantage_on_identifying_monster_weaknesses"] },
            { "name": "Breeding Habits of the Owlbear", "rarity": "UNCOMMON", "effects": ["helps_to_avoid_or_find_owlbear_nests"] },
            { "name": "The Art of War (Abridged)", "rarity": "RARE", "effects": ["strategy_bonus_1", "command_skill_up"] },
            { "name": "Memoirs of a Famous General", "rarity": "RARE", "effects": ["reveals_location_of_a_hidden_cache_of_weapons"] },
            { "name": "Treatise on Siege Warfare", "rarity": "RARE", "effects": ["bonus_to_attacking_or_defending_fortifications"] },
            { "name": "Tome of Clear Thought", "rarity": "RARE", "effects": ["permanent_intelligence_increase_1", "single_use"], "description": "Reading this book permanently sharpens the mind." },
            { "name": "Manual of Quickness of Action", "rarity": "RARE", "effects": ["permanent_dexterity_increase_1", "single_use"] },
            { "name": "Tome of Leadership and Influence", "rarity": "RARE", "effects": ["permanent_charisma_increase_1", "single_use"] },
            { "name": "Necronomicon Ex-Mortis (Fragment)", "rarity": "EPIC", "effects": ["summon_undead_weak", "sanity_drain", "forbidden_ritual_1"] },
            { "name": "De Vermis Mysteriis", "rarity": "EPIC", "effects": ["summon_wormlike_horrors", "reveals_secrets_of_the_dead"] },
            { "name": "Cultes des Goules", "rarity": "EPIC", "effects": ["knowledge_of_ghoul_cults", "ability_to_parley_with_ghouls"] },
            { "name": "Lexicon of Paradoxes", "rarity": "EPIC", "effects": ["wild_magic_mastery", "chance_to_break_reality"], "description": "A book that explains logic puzzles that defy logic." },
            { "name": "The Unfolding Book", "rarity": "EPIC", "effects": ["pages_rearrange_to_form_new_spells_or_maps"] },
            { "name": "Tome of Infinite Spells (Unreliable)", "rarity": "EPIC", "effects": ["contains_every_spell_but_is_hard_to_read"] },
            { "name": "Book of Celestial Hymns", "rarity": "LEGENDARY", "effects": ["divine_spell_empower_1", "holy_protection_aura", "serenity"] },
            { "name": "The Book of Exalted Deeds (Copy)", "rarity": "LEGENDARY", "effects": ["knowledge_of_holy_rituals", "grants_divine_boon"] },
            { "name": "Path of the Just", "rarity": "LEGENDARY", "effects": ["guides_a_paladin_on_their_ultimate_quest"] },
            { "name": "Tome of the Stilled Tongue", "rarity": "LEGENDARY", "effects": ["learn_forbidden_spells", "cast_spells_silently", "attracts_attention_of_Vecna"], "description": "A tome bound in humanoid skin detailing secrets of the Whispered One." },
            { "name": "The Diary of a Mad God", "rarity": "LEGENDARY", "effects": ["provides_insight_into_a_god's_demise", "dangerous_to_read"] },
            { "name": "The Cipher of the Damned", "rarity": "LEGENDARY", "effects": ["a_key_to_understanding_infernal_language", "summons_devils_when_read_aloud"] },
            { "name": "Atlas of Unknown Worlds", "rarity": "ARTIFACT", "effects": ["map_reveal_all", "teleport_to_discovered_points", "cosmic_understanding_1"] },
            { "name": "The Navigator's Log of the First Star-Sailor", "rarity": "ARTIFACT", "effects": ["can_chart_a_course_through_the_astral_sea"] },
            { "name": "A Map That Is Also The Territory", "rarity": "ARTIFACT", "effects": ["altering_the_map_alters_the_world"] },
            { "name": "The Poem of Creation", "rarity": "ARTIFACT", "effects": ["true_understanding", "shape_reality_minor", "all_stats_major_boost_temporary"] },
            { "name": "The Final Verse", "rarity": "ARTIFACT", "effects": ["a_word_that_can_unmake_one_thing"] },
            { "name": "The True Name Codex", "rarity": "ARTIFACT", "effects": ["contains_the_true_name_of_every_being"] }
        ],
        "artifacts": [
            { "name": "Crystal of Power", "rarity": "EPIC", "effects": ["mana_regeneration_large", "spell_power_boost_medium"] },
            { "name": "Inferno Stone", "rarity": "EPIC", "effects": ["fire_spell_power_large", "fire_immunity_aura_small"] },
            { "name": "Tidal Pearl", "rarity": "EPIC", "effects": ["control_water_moderate", "water_breathing_aura"] },
            { "name": "Shard of the Worldstone", "rarity": "EPIC", "effects": ["elemental_attunement_all", "reality_stabilization_field"] },
            { "name": "Heart of the Mountain", "rarity": "EPIC", "effects": ["earth_mastery", "summon_earth_elemental_once_per_day"] },
            { "name": "Breath of the Tempest", "rarity": "EPIC", "effects": ["control_weather_minor", "lightning_strike_ability"] },
            { "name": "Amulet of Kings", "rarity": "EPIC", "effects": ["charisma_boost_large", "command_allegiance", "divine_right_aura"] },
            { "name": "Scepter of the High Elves", "rarity": "EPIC", "effects": ["arcane_mastery_boost", "elven_diplomacy_bonus"] },
            { "name": "War Banner of the Orcish Hordes", "rarity": "EPIC", "effects": ["battle_fury_aura", "inspire_rage_in_allies"] },
            { "name": "Heart of the Dragon", "rarity": "LEGENDARY", "effects": ["fire_immunity", "strength_boost_large", "dragon_form_brief"] },
            { "name": "Mind of the Dragon", "rarity": "LEGENDARY", "effects": ["vast_lore_access", "telepathic_communication", "true_sight"] },
            { "name": "Soul of the Dragon", "rarity": "LEGENDARY", "effects": ["fear_aura_large", "draconic_magic_access", "longevity"] },
            { "name": "Horn of Valhalla (Cracked)", "rarity": "LEGENDARY", "effects": ["summon_spirit_warriors_few", "inspire_allies_strong"] },
            { "name": "Lyre of the Gods", "rarity": "LEGENDARY", "effects": ["can_soothe_any_beast", "can_inspire_divine_acts", "can_rebuild_ruins_with_song"] },
            { "name": "The Shield of the First Hero", "rarity": "LEGENDARY", "effects": ["impenetrable_defense", "reflects_any_curse", "inspires_unbreakable_loyalty"] },
            { "name": "The Philosopher's Stone (Imperfect)", "rarity": "LEGENDARY", "effects": ["transmute_materials_limited", "extend_life_minor", "gold_generation_slow"] },
            { "name": "The Alkahest", "rarity": "LEGENDARY", "effects": ["universal_solvent_dissolves_anything", "single_use", "highly_volatile"] },
            { "name": "Elixir of Life (True)", "rarity": "LEGENDARY", "effects": ["grants_immortality", "potion_not_an_artifact", "guarded_by_a_powerful_being"] },
            { "name": "Orb of Golden Death", "rarity": "LEGENDARY", "effects": ["slay_living_ability", "summon_dragon_undead", "cursed_with_greed"] },
            { "name": "The Death-Mask of a Fallen King", "rarity": "LEGENDARY", "effects": ["speak_with_the_legions_of_the_dead", "command_ghosts"] },
            { "name": "Scythe of the Harvester", "rarity": "LEGENDARY", "effects": ["reap_souls_of_the_dying", "prevents_resurrection", "grows_stronger_with_each_soul"] },
            { "name": "Soul Fragment (Corrupted)", "rarity": "ARTIFACT", "effects": ["soul_power_unstable", "drain_life_aura", "whispers_of_the_damned"] },
            { "name": "The Demon's Heart", "rarity": "ARTIFACT", "effects": ["grants_demonic_power", "corrupts_body_and_soul", "attracts_demons"] },
            { "name": "An Angel's Grace", "rarity": "ARTIFACT", "effects": ["grants_divine_power", "requires_absolute_purity", "hunted_by_fiends"] },
            { "name": "Eye of Vecna (Replica)", "rarity": "ARTIFACT", "effects": ["true_sight_enhanced", "forbidden_knowledge_stream", "major_curse_attraction"] },
            { "name": "Hand of Vecna (Replica)", "rarity": "ARTIFACT", "effects": ["immense_magical_power", "withering_touch", "requires_mutilation_to_use"] },
            { "name": "Head of Vecna (Joke)", "rarity": "ARTIFACT", "effects": ["kills_user_and_creates_a_new_Head_of_Vecna"] },
            { "name": "The One Ring (Lost)", "rarity": "ARTIFACT", "effects": ["invisibility_at_will", "corrupting_influence_strong", "power_amplification_dark"] },
            { "name": "The Three Silmarils (Lost)", "rarity": "ARTIFACT", "effects": ["contains_the_light_of_creation", "burns_the_unworthy", "coveted_by_all"] },
            { "name": "The Sword of Power", "rarity": "ARTIFACT", "effects": ["grants_unimaginable_strength", "transforms_wielder_into_champion", "has_a_talking_cat_companion"] },
            { "name": "Heart of the Ocean", "rarity": "ARTIFACT", "effects": ["control_weather_at_sea", "command_sea_creatures", "water_breathing_aura"] },
            { "name": "Trident of Poseidon", "rarity": "ARTIFACT", "effects": ["absolute_control_of_the_seas", "summon_krakens", "create_earthquakes"] },
            { "name": "The World Serpent's Scale", "rarity": "ARTIFACT", "effects": ["invulnerability_to_all_but_one_weapon", "can_grow_to_immense_size"] },
            { "name": "Seed of the World Tree", "rarity": "ARTIFACT", "effects": ["grow_magical_forest", "commune_with_all_nature", "life_giving_pulse"] },
            { "name": "The First Leaf", "rarity": "ARTIFACT", "effects": ["can_heal_any_disease_or_plague", "reverses_desertification"] },
            { "name": "Root of the Cosmos", "rarity": "ARTIFACT", "effects": ["connects_all_planes_of_existence", "draws_power_from_everything"] }
        ],
        "keys": [
            { "name": "Rusted Iron Key", "rarity": "COMMON", "effects": ["unlocks_old_chest"] },
            { "name": "Bent Copper Key", "rarity": "COMMON", "effects": ["unlocks_a_locked_diary"] },
            { "name": "Small Brass Key", "rarity": "COMMON", "effects": ["unlocks_a_music_box"] },
            { "name": "Jailer's Key Ring", "rarity": "COMMON", "effects": ["unlocks_local_jail_cells"] },
            { "name": "Guard's Key", "rarity": "COMMON", "effects": ["unlocks_the_barracks_footlocker"] },
            { "name": "Sewer Grate Key", "rarity": "COMMON", "effects": ["opens_a_city_sewer_entrance"] },
            { "name": "Ornate Silver Key", "rarity": "UNCOMMON", "effects": ["unlocks_manor_door"] },
            { "name": "Guildmaster's Key", "rarity": "UNCOMMON", "effects": ["unlocks_the_thieves'_guild_safe"] },
            { "name": "Key to the City Gates", "rarity": "UNCOMMON", "effects": ["allows_after-hours_access_to_the_city"] },
            { "name": "Bone Key", "rarity": "UNCOMMON", "effects": ["unlocks_crypt_door"], "description": "A key carved from a humanoid femur." },
            { "name": "Ghoul-bone Key", "rarity": "UNCOMMON", "effects": ["unlocks_a_sarcophagus_in_the_graveyard"] },
            { "name": "Ivory Key", "rarity": "UNCOMMON", "effects": ["unlocks_an_ebony_chest"] },
            { "name": "Gem-Encrusted Gold Key", "rarity": "RARE", "effects": ["unlocks_treasure_vault"] },
            { "name": "Dwarven Vault Key", "rarity": "RARE", "effects": ["unlocks_a_clan's_ancestral_vault"] },
            { "name": "Dragon's Hoard Key", "rarity": "RARE", "effects": ["unlocks_a_specific_chest_in_a_dragon's_hoard"] },
            { "name": "Skeleton Key (Fragile)", "rarity": "RARE", "effects": ["unlocks_any_simple_lock_once"] },
            { "name": "Masterwork Lockpick Set", "rarity": "RARE", "effects": ["provides_major_bonus_to_lockpicking", "can_break"] },
            { "name": "A Key That Is Not A Key", "rarity": "RARE", "effects": ["unlocks_a_conceptual_door_like_a_mental_block"] },
            { "name": "Key of Whispers", "rarity": "RARE", "effects": ["unlocks_a_secret_door_when_spoken_to"] },
            { "name": "Key of Songs", "rarity": "RARE", "effects": ["unlocks_a_door_when_the_right_melody_is_played"] },
            { "name": "Runic Key", "rarity": "RARE", "effects": ["disarms_a_magical_ward_on_a_chest"] },
            { "name": "Shadow Key", "rarity": "EPIC", "effects": ["unlocks_hidden_path_in_shadowfell"] },
            { "name": "Sun Key", "rarity": "EPIC", "effects": ["unlocks_a_door_only_at_high_noon"] },
            { "name": "Moon Key", "rarity": "EPIC", "effects": ["unlocks_a_door_only_under_the_full_moon"] },
            { "name": "Key to the City (Ceremonial)", "rarity": "EPIC", "effects": ["grants_access_high_council", "diplomacy_bonus_1"] },
            { "name": "Archmage's Tower Key", "rarity": "EPIC", "effects": ["bypasses_all_magical_wards_on_a_tower"] },
            { "name": "Key to the Underdark Gate", "rarity": "EPIC", "effects": ["opens_a_major_passageway_to_the_Underdark"] },
            { "name": "Key of a Thousand Doors", "rarity": "LEGENDARY", "effects": ["unlocks_any_mundane_door", "chance_to_open_random_portal"] },
            { "name": "The Skeleton Key", "rarity": "LEGENDARY", "effects": ["unlocks_any_non-magical_lock_flawlessly"] },
            { "name": "The Master Key", "rarity": "LEGENDARY", "effects": ["can_be_shaped_to_fit_any_lock_once"] },
            { "name": "Key to the Heart", "rarity": "LEGENDARY", "effects": ["unlocks_someone's_deepest_secrets_or_desires"] },
            { "name": "Key to the Mind", "rarity": "LEGENDARY", "effects": ["unlocks_repressed_memories"] },
            { "name": "The Soul Key", "rarity": "LEGENDARY", "effects": ["can_lock_or_unlock_a_soul_from_a_phylactery"] },
            { "name": "Key to Oblivion", "rarity": "ARTIFACT", "effects": ["opens_gate_to_void", "destroy_on_use"] },
            { "name": "The First Key", "rarity": "ARTIFACT", "effects": ["the_concept_of_a_key_made_manifest_can_lock_or_unlock_anything"] },
            { "name": "Key to the Nexus of All Realities", "rarity": "ARTIFACT", "effects": ["opens_a_doorway_to_any_plane_or_time"] }
        ],
        "maps": [
            { "name": "Torn Map Fragment", "rarity": "COMMON", "effects": ["reveals_small_area_1"] },
            { "name": "Bloodstained Map Corner", "rarity": "COMMON", "effects": ["part_of_a_larger_map_to_a_dangerous_place"] },
            { "name": "Child's Drawing of a Cave", "rarity": "COMMON", "effects": ["simple_map_to_a_local_cave"] },
            { "name": "Map to the Local Tavern", "rarity": "COMMON", "effects": ["reveals_a_good_time"] },
            { "name": "Smuggler's Route Map", "rarity": "COMMON", "effects": ["shows_a_secret_path_into_town"] },
            { "name": "Gossip-monger's City Map", "rarity": "COMMON", "effects": ["marks_the_homes_of_important_people"] },
            { "name": "Local Area Map", "rarity": "UNCOMMON", "effects": ["reveals_region_map"] },
            { "name": "Weathered Nautical Chart", "rarity": "UNCOMMON", "effects": ["map_of_local_coastline_and_islands"] },
            { "name": "Mining Claim Map", "rarity": "UNCOMMON", "effects": ["shows_the_location_of_an_abandoned_mine"] },
            { "name": "Treasure Map (Dubious)", "rarity": "UNCOMMON", "effects": ["marks_possible_treasure_spot"], "description": "An \"X\" marks the spot. The map seems drawn by a child." },
            { "name": "Pirate's Treasure Map", "rarity": "UNCOMMON", "effects": ["leads_to_buried_treasure_guarded_by_skeletons"] },
            { "name": "Map with a riddle instead of a line", "rarity": "UNCOMMON", "effects": ["the_location_is_the_answer_to_the_riddle"] },
            { "name": "Star Chart (Ancient)", "rarity": "RARE", "effects": ["navigation_aid_celestial", "astrology_insight_1"] },
            { "name": "Elven Star-Path Map", "rarity": "RARE", "effects": ["reveals_hidden_paths_only_visible_by_starlight"] },
            { "name": "Astrologer's Prophetic Chart", "rarity": "RARE", "effects": ["predicts_a_celestial_event_tied_to_a_quest"] },
            { "name": "Battle Strategy Map", "rarity": "RARE", "effects": ["reveals_enemy_positions_for_one_battle"] },
            { "name": "Map of Fortress Defenses", "rarity": "RARE", "effects": ["shows_weak_points_in_a_castle's_defenses"] },
            { "name": "Infiltration Plan", "rarity": "RARE", "effects": ["details_guard_patrols_and_entry_points"] },
            { "name": "Marauder's Map (Blank)", "rarity": "EPIC", "effects": ["reveals_nearby_living_beings_when_activated"] },
            { "name": "Psychic Map of Thoughts", "rarity": "EPIC", "effects": ["shows_the_emotional_state_of_people_in_a_city"] },
            { "name": "The God-Watcher's Map", "rarity": "EPIC", "effects": ["tracks_the_movements_of_a_specific_deity's_followers"] },
            { "name": "Map of the Underdark (Incomplete)", "rarity": "EPIC", "effects": ["navigation_aid_subterranean", "danger_sense_underground"] },
            { "name": "Drow City Map", "rarity": "EPIC", "effects": ["map_of_a_treacherous_underdark_city"] },
            { "name": "Illithid Brain-Map", "rarity": "EPIC", "effects": ["a_map_of_psionic_ley_lines_painful_to_read"] },
            { "name": "Skin Map of the Damned", "rarity": "EPIC", "effects": ["reveals_path_to_a_hellish_demiplane", "cursed"] },
            { "name": "Map Sewn from Angel Feathers", "rarity": "EPIC", "effects": ["reveals_a_path_to_a_celestial_demiplane"] },
            { "name": "Map Tattooed on a Living Person", "rarity": "EPIC", "effects": ["the_person_must_be_kept_alive_to_read_the_map"] },
            { "name": "World Map (Pre-Cataclysm)", "rarity": "LEGENDARY", "effects": ["historical_geography_knowledge", "reveals_lost_locations"] },
            { "name": "Map of Atlantis", "rarity": "LEGENDARY", "effects": ["shows_the_location_of_a_sunken_city"] },
            { "name": "Map to the Garden of Eden", "rarity": "LEGENDARY", "effects": ["reveals_the_path_to_a_mythical_paradise"] },
            { "name": "Planar Map of the Nine Hells", "rarity": "ARTIFACT", "effects": ["navigate_hells_imprecisely", "attracts_devils"] },
            { "name": "The Celestial Orrery", "rarity": "ARTIFACT", "effects": ["a_map_of_the_entire_crystal_sphere_in_motion"] },
            { "name": "A Map That Fills Itself In", "rarity": "ARTIFACT", "effects": ["the_bearer_is_destined_to_explore_the_entire_world"] },
            { "name": "Living Map of the Multiverse", "rarity": "ARTIFACT", "effects": ["shows_real_time_planar_movement", "can_predict_cosmic_events"] },
            { "name": "Map of What Could Be", "rarity": "ARTIFACT", "effects": ["shows_the_outcome_of_different_choices"] },
            { "name": "Map of What Was", "rarity": "ARTIFACT", "effects": ["allows_one_to_view_any_point_in_history"] }
        ],
        "relics": [
            { "name": "Goblin Totem (Crude)", "rarity": "COMMON", "effects": ["minor_luck_or_curse_unpredictable"] },
            { "name": "A Bent Spoon", "rarity": "COMMON", "effects": ["telekinetically_bent_by_an_unseen_force"] },
            { "name": "An Unusually Smooth River Stone", "rarity": "COMMON", "effects": ["calming_to_hold"] },
            { "name": "A Shard of Stained Glass", "rarity": "COMMON", "effects": ["from_a_destroyed_temple"], "description": "Humming with faint divine energy." },
            { "name": "A Melted Candle from a Dark Ritual", "rarity": "COMMON", "effects": ["smells_of_sulfur_and_fear"] },
            { "name": "A Rusty Nail from a Hangman's Noose", "rarity": "COMMON", "effects": ["feels_cold_and_heavy_with_sorrow"] },
            { "name": "Elven Star Brooch", "rarity": "UNCOMMON", "effects": ["light_aura_faint", "forest_affinity"] },
            { "name": "A Silver Bell That Doesn't Ring", "rarity": "UNCOMMON", "effects": ["can_be_heard_by_spirits"] },
            { "name": "Dried Rose from a Queen's Garden", "rarity": "UNCOMMON", "effects": ["symbol_of_a_lost_love_or_promise"] },
            { "name": "Petrified Dragon Egg", "rarity": "UNCOMMON", "effects": ["very_heavy", "emits_faint_warmth"] },
            { "name": "Griffon Feather", "rarity": "UNCOMMON", "effects": ["symbol_of_nobility_and_the_sky"] },
            { "name": "A Scale from the World Serpent", "rarity": "UNCOMMON", "effects": ["impossibly_hard_and_indestructible"] },
            { "name": "Saint's Fingerbone", "rarity": "RARE", "effects": ["minor_blessing_aura", "ward_against_undead_small"] },
            { "name": "Tears of a Martyr", "rarity": "RARE", "effects": ["can_purify_a_small_amount_of_water"] },
            { "name": "Shroud of a Holy Man", "rarity": "RARE", "effects": ["resistance_to_disease"] },
            { "name": "Dwarven Rune Stone", "rarity": "RARE", "effects": ["earth_resistance_small", "crafting_inspiration_smithing"] },
            { "name": "Unmelting Snowflake", "rarity": "RARE", "effects": ["cold_aura_tiny", "found_in_a_frost_giant's_hoard"] },
            { "name": "Adamantine Shaving", "rarity": "RARE", "effects": ["a_piece_of_the_strongest_metal"] },
            { "name": "Cursed Idol of the Monkey God", "rarity": "RARE", "effects": ["summons_mischievous_monkeys", "causes_bad_luck"] },
            { "name": "Shrunken Head of an Enemy Shaman", "rarity": "RARE", "effects": ["whispers_secrets_and_lies"] },
            { "name": "The Bleeding Coin", "rarity": "RARE", "effects": ["a_coin_that_weeps_blood_when_betrayal_is_near"] },
            { "name": "Sliver of a Fallen Star", "rarity": "EPIC", "effects": ["cosmic_energy_pulse_ability", "hope_aura"] },
            { "name": "Heart of a Golem", "rarity": "EPIC", "effects": ["can_animate_a_construct_briefly"] },
            { "name": "The First Lie Ever Told (Solidified)", "rarity": "EPIC", "effects": ["can_convince_anyone_of_one_untruth"] },
            { "name": "Phylactery of a Minor Lich", "rarity": "EPIC", "effects": ["necromantic_knowledge_1", "attracts_undead_and_hunters"] },
            { "name": "The Lich's Cursed Heart", "rarity": "EPIC", "effects": ["holds_the_lich's_soul_must_be_destroyed"] },
            { "name": "A Page from the Book of the Damned", "rarity": "EPIC", "effects": ["reveals_a_devil's_true_name", "burns_to_the_touch"] },
            { "name": "Tear of a Goddess", "rarity": "LEGENDARY", "effects": ["major_healing_ability_single_use", "purification_field"] },
            { "name": "The Last Breath of a Dying God", "rarity": "LEGENDARY", "effects": ["can_fuel_a_world-changing_spell", "single_use"] },
            { "name": "A Word of Creation", "rarity": "LEGENDARY", "effects": ["speaking_it_can_create_something_from_nothing"] },
            { "name": "Feather from an Angel's Wing", "rarity": "LEGENDARY", "effects": ["allows_brief_flight_once", "protection_from_evil_aura"] },
            { "name": "A Scale from a Divine Dragon", "rarity": "LEGENDARY", "effects": ["grants_resistance_to_all_magic_for_a_short_time"] },
            { "name": "The Devil's Own Contract", "rarity": "LEGENDARY", "effects": ["a_soul-binding_contract_with_an_archdevil"] },
            { "name": "Crown of the Lich King (Damaged)", "rarity": "ARTIFACT", "effects": ["command_lesser_undead_powerful", "major_curse_of_binding", "unholy_aura"] },
            { "name": "The First Shadow", "rarity": "ARTIFACT", "effects": ["the_origin_of_all_darkness_can_snuff_out_suns"] },
            { "name": "A Perfect Idea", "rarity": "ARTIFACT", "effects": ["an_idea_so_perfect_it_can_reshape_a_civilization_or_destroy_it"] },
            { "name": "Blood of a Saint", "rarity": "ARTIFACT", "effects": ["consecrates_ground", "destroys_major_fiend", "single_use"] },
            { "name": "The Unbreakable Vow", "rarity": "ARTIFACT", "effects": ["a_magical_oath_that_cannot_be_broken_death_is_the_penalty"] },
            { "name": "Hope, contained in a small box", "rarity": "ARTIFACT", "effects": ["when_all_is_lost_it_remains", "can_turn_the_tide_of_any_battle"] }
        ]
    },
    "tools": {
        "gathering": [
            { "name": "Flint Knife", "rarity": "COMMON", "tool_type": "skinning", "efficiency": 0.8 },
            { "name": "Sharp Rock", "rarity": "COMMON", "tool_type": "skinning", "efficiency": 0.7 },
            { "name": "Hunting Knife (Dull)", "rarity": "COMMON", "tool_type": "skinning", "efficiency": 0.9 },
            { "name": "Mining Pick (Worn)", "rarity": "COMMON", "tool_type": "mining", "efficiency": 0.9 },
            { "name": "Sturdy Hammer", "rarity": "COMMON", "tool_type": "mining", "efficiency": 0.8 },
            { "name": "Spade", "rarity": "COMMON", "tool_type": "mining", "efficiency": 0.7 },
            { "name": "Wood Axe (Basic)", "rarity": "COMMON", "tool_type": "woodcutting", "efficiency": 1.0 },
            { "name": "Hatchet", "rarity": "COMMON", "tool_type": "woodcutting", "efficiency": 0.9 },
            { "name": "Hand Saw", "rarity": "COMMON", "tool_type": "woodcutting", "efficiency": 0.8 },
            { "name": "Fishing Rod (Simple)", "rarity": "COMMON", "tool_type": "fishing", "efficiency": 1.0 },
            { "name": "Fishing Spear", "rarity": "COMMON", "tool_type": "fishing", "efficiency": 0.8 },
            { "name": "Handmade Net", "rarity": "COMMON", "tool_type": "fishing", "efficiency": 0.9 },
            { "name": "Herb Pouch", "rarity": "COMMON", "tool_type": "herbalism_storage", "capacity": 10 },
            { "name": "Foraging Basket", "rarity": "COMMON", "tool_type": "herbalism_storage", "capacity": 15 },
            { "name": "Mortar and Pestle (Stone)", "rarity": "COMMON", "tool_type": "herbalism_crafting", "quality": 0.8 },
            { "name": "Trowel", "rarity": "COMMON", "tool_type": "foraging", "efficiency": 1.0 },
            { "name": "Gardening Gloves", "rarity": "COMMON", "tool_type": "foraging", "efficiency": 1.0, "effects": ["protection_from_thorns_minor"] },
            { "name": "Shears", "rarity": "COMMON", "tool_type": "foraging", "efficiency": 1.1 },
            { "name": "Steel Skinning Knife", "rarity": "UNCOMMON", "tool_type": "skinning", "efficiency": 1.2, "effects": ["cleaner_cuts"] },
            { "name": "Butcher's Cleaver", "rarity": "UNCOMMON", "tool_type": "skinning", "efficiency": 1.1, "effects": ["chance_for_extra_meat"] },
            { "name": "Tanner's Tools", "rarity": "UNCOMMON", "tool_type": "skinning", "efficiency": 1.0, "effects": ["improves_hide_quality"] },
            { "name": "Reinforced Mining Pick", "rarity": "UNCOMMON", "tool_type": "mining", "efficiency": 1.3, "effects": ["find_gems_chance_small"] },
            { "name": "Dwarven Pickaxe", "rarity": "UNCOMMON", "tool_type": "mining", "efficiency": 1.4, "effects": ["unbreakable_on_normal_ore"] },
            { "name": "Prospector's Pan", "rarity": "UNCOMMON", "tool_type": "mining", "efficiency": 1.2, "effects": ["find_gold_nuggets_in_water"] },
            { "name": "Sharp Forester's Axe", "rarity": "UNCOMMON", "tool_type": "woodcutting", "efficiency": 1.4, "effects": ["rare_wood_chance_small"] },
            { "name": "Two-Man Saw", "rarity": "UNCOMMON", "tool_type": "woodcutting", "efficiency": 1.5, "effects": ["fells_large_trees_faster"] },
            { "name": "Elven Wood-Carving Knife", "rarity": "UNCOMMON", "tool_type": "woodcutting", "efficiency": 1.2, "effects": ["gathers_livewood_shavings"] },
            { "name": "Net (Small)", "rarity": "UNCOMMON", "tool_type": "fishing_trapping", "efficiency": 1.1 },
            { "name": "Steel Animal Trap", "rarity": "UNCOMMON", "tool_type": "trapping", "efficiency": 1.3, "effects": ["can_catch_medium_animals"] },
            { "name": "Fishing Lure Kit", "rarity": "UNCOMMON", "tool_type": "fishing", "efficiency": 1.0, "effects": ["attract_specific_fish_types"] },
            { "name": "Masterwork Fishing Rod", "rarity": "RARE", "tool_type": "fishing", "efficiency": 1.5, "effects": ["attract_bigger_fish"] },
            { "name": "Harpoon Gun", "rarity": "RARE", "tool_type": "fishing", "efficiency": 1.8, "effects": ["catch_large_sea_creatures"] },
            { "name": "Enchanted Lure", "rarity": "RARE", "tool_type": "fishing", "efficiency": 1.2, "effects": ["attracts_magical_fish"] },
            { "name": "Gloves of the Herbalist", "rarity": "RARE", "tool_type": "herbalism", "efficiency": 1.2, "effects": ["identify_herbs_quickly", "protection_from_thorns"] },
            { "name": "Silver Sickle", "rarity": "RARE", "tool_type": "herbalism", "efficiency": 1.4, "effects": ["gathers_magical_herbs_safely"] },
            { "name": "Druid's Seed Pouch", "rarity": "RARE", "tool_type": "herbalism_storage", "capacity": 50, "effects": ["preserves_seeds_indefinitely"] },
            { "name": "Geologist's Hammer", "rarity": "RARE", "tool_type": "mining", "efficiency": 1.5, "effects": ["identifies_ore_type"] },
            { "name": "Smelter's Tongs", "rarity": "RARE", "tool_type": "crafting_smithing", "quality": 1.3, "effects": ["higher_yield_from_ore"] },
            { "name": "Seismic Detector", "rarity": "RARE", "tool_type": "mining", "efficiency": 1.8, "effects": ["detects_nearby_ore_veins"] },
            { "name": "Mithril-Edged Hatchet", "rarity": "EPIC", "tool_type": "woodcutting", "efficiency": 2.0, "effects": ["gathers_enchanted_wood"] },
            { "name": "Photosynthetic Axe", "rarity": "EPIC", "tool_type": "woodcutting", "efficiency": 1.8, "effects": ["gathers_essence_of_life_from_trees"] },
            { "name": "Beaver of the Insta-Dam", "rarity": "EPIC", "tool_type": "woodcutting", "efficiency": 5.0, "effects": ["a_magical_beaver_that_chews_down_any_tree_instantly"] },
            { "name": "Soul-Trap Harvester", "rarity": "EPIC", "tool_type": "essence_gathering", "efficiency": 1.8, "effects": ["harvests_essences_from_living"] },
            { "name": "Aetheric Siphon", "rarity": "EPIC", "tool_type": "essence_gathering", "efficiency": 2.0, "effects": ["gathers_raw_magic_from_the_air"] },
            { "name": "Dream Catcher", "rarity": "EPIC", "tool_type": "essence_gathering", "efficiency": 1.5, "effects": ["harvests_essence_of_dreams_from_sleeping_creatures"] },
            { "name": "Blacksmith's Expert Hammer", "rarity": "RARE", "tool_type": "crafting_smithing", "quality": 1.5 },
            { "name": "Dwarven Forge Bellows", "rarity": "RARE", "tool_type": "crafting_smithing", "quality": 1.2, "effects": ["reaches_higher_temperatures"] },
            { "name": "Runic Anvil", "rarity": "RARE", "tool_type": "crafting_smithing", "quality": 1.4, "effects": ["can_imbue_items_with_minor_runes"] },
            { "name": "Alchemist's Advanced Kit", "rarity": "RARE", "tool_type": "crafting_alchemy", "quality": 1.5 },
            { "name": "Crystal Alembic", "rarity": "RARE", "tool_type": "crafting_alchemy", "quality": 1.6, "effects": ["purifies_potions_for_stronger_effects"] },
            { "name": "Alchemist's Recipe Book", "rarity": "RARE", "tool_type": "crafting_alchemy", "quality": 1.0, "effects": ["contains_many_rare_recipes"] },
            { "name": "Rod of the Deep Angler", "rarity": "LEGENDARY", "tool_type": "fishing", "efficiency": 2.5, "effects": ["can_fish_in_unusual_liquids"] },
            { "name": "Krak-N-Back Reel", "rarity": "LEGENDARY", "tool_type": "fishing", "efficiency": 3.0, "effects": ["can_reel_in_a_kraken"] },
            { "name": "Harpoon of the Leviathan", "rarity": "LEGENDARY", "tool_type": "fishing", "efficiency": 2.8, "effects": ["never_loses_its_prey"] },
            { "name": "World-Tree Harvester", "rarity": "ARTIFACT", "tool_type": "all_gathering", "efficiency": 3.0, "effects": ["gathers_mythical_resources", "never_dulls"] },
            { "name": "Gaia's Scythe", "rarity": "ARTIFACT", "tool_type": "herbalism", "efficiency": 4.0, "effects": ["can_harvest_the_life_essence_of_the_land_itself"] },
            { "name": "The Earth-Worm", "rarity": "ARTIFACT", "tool_type": "mining", "efficiency": 5.0, "effects": ["a_creature_that_tunnels_and_outputs_refined_ores"] }
        ],
        "utility": [
            { "name": "Tinderbox", "rarity": "COMMON", "uses": 20 },
            { "name": "Flint and Steel", "rarity": "COMMON", "uses": "infinite" },
            { "name": "Torch", "rarity": "COMMON", "duration": 3600 },
            { "name": "Rope (15m)", "rarity": "COMMON", "strength": 150 },
            { "name": "Twine (30m)", "rarity": "COMMON", "strength": 20 },
            { "name": "Chain (5m)", "rarity": "COMMON", "strength": 300 },
            { "name": "Lockpicks (Simple)", "rarity": "COMMON", "quality": 0.7, "uses": 5 },
            { "name": "Bent Wire", "rarity": "COMMON", "quality": 0.5, "uses": 2 },
            { "name": "Skeleton Key (Crude)", "rarity": "COMMON", "quality": 1.0, "uses": 1 },
            { "name": "Shovel", "rarity": "COMMON", "tool_type": "digging" },
            { "name": "Spade", "rarity": "COMMON", "tool_type": "digging" },
            { "name": "Trowel", "rarity": "COMMON", "tool_type": "digging" },
            { "name": "Waterskin", "rarity": "COMMON", "capacity": "1_liter" },
            { "name": "Canteen", "rarity": "COMMON", "capacity": "1.5_liters" },
            { "name": "Clay Jug", "rarity": "COMMON", "capacity": "2_liters" },
            { "name": "Crowbar", "rarity": "COMMON", "effects": ["force_open_bonus"] },
            { "name": "Hammer", "rarity": "COMMON", "tool_type": "building" },
            { "name": "Wedge and Sledge", "rarity": "COMMON", "effects": ["split_stone_or_wood"] },
            { "name": "Spyglass (Basic)", "rarity": "UNCOMMON", "magnification": 2 },
            { "name": "Magnifying Glass", "rarity": "UNCOMMON", "effects": ["examine_details", "start_fires"] },
            { "name": "Periscope", "rarity": "UNCOMMON", "effects": ["look_over_obstacles"] },
            { "name": "Thieves' Tools (Fine)", "rarity": "UNCOMMON", "quality": 1.0, "uses": 10, "effects": ["quieter_picking"] },
            { "name": "Poisoner's Kit", "rarity": "UNCOMMON", "quality": 1.0, "effects": ["apply_poisons_safely"] },
            { "name": "Forger's Kit", "rarity": "UNCOMMON", "quality": 1.0, "effects": ["create_false_documents"] },
            { "name": "Grappling Hook", "rarity": "UNCOMMON", "range": 10, "strength": 200 },
            { "name": "Climbing Pitons (Set of 5)", "rarity": "UNCOMMON", "strength": 250 },
            { "name": "Silk Rope (15m)", "rarity": "UNCOMMON", "strength": 180, "lightweight": true },
            { "name": "Healer's Kit", "rarity": "UNCOMMON", "uses": 5, "effects": ["stabilize_critically_wounded"] },
            { "name": "Bandages (Set of 3)", "rarity": "UNCOMMON", "uses": 3, "effects": ["stop_bleeding"] },
            { "name": "Antitoxin Kit", "rarity": "UNCOMMON", "uses": 2, "effects": ["advantage_on_saves_vs_poison"] },
            { "name": "Caltrops Bag", "rarity": "UNCOMMON", "uses": 3, "effects": ["create_difficult_terrain"] },
            { "name": "Ball Bearings (Bag)", "rarity": "UNCOMMON", "uses": 3, "effects": ["create_slippery_surface"] },
            { "name": "Hunting Trap", "rarity": "UNCOMMON", "effects": ["ensnare_medium_creature"] },
            { "name": "Disguise Kit", "rarity": "UNCOMMON", "quality": 1.0 },
            { "name": "Theatrical Makeup Kit", "rarity": "UNCOMMON", "quality": 1.2 },
            { "name": "Voice-Altering Reed", "rarity": "UNCOMMON", "effects": ["change_voice_timbre"] },
            { "name": "Master Lockpicks", "rarity": "RARE", "quality": 1.5, "uses": 15, "effects": ["bypass_simple_traps"] },
            { "name": "Stethoscope", "rarity": "RARE", "quality": 1.8, "effects": ["hear_through_doors", "crack_safes"] },
            { "name": "Glass Cutter", "rarity": "RARE", "uses": 10, "effects": ["silently_remove_pane_of_glass"] },
            { "name": "Universal Solvent (Single Use)", "rarity": "RARE", "effects": ["dissolves_adhesives_or_weak_metals"] },
            { "name": "Sovereign Glue (Single Use)", "rarity": "RARE", "effects": ["permanently_bonds_two_objects"] },
            { "name": "Alkahest (Single Use)", "rarity": "RARE", "effects": ["dissolves_all_non-magical_matter"] },
            { "name": "Bag of Holding (Small)", "rarity": "RARE", "capacity": "pocket_dimension_small" },
            { "name": "Handy Haversack", "rarity": "RARE", "capacity": "pocket_dimension_organized" },
            { "name": "Portable Ram", "rarity": "RARE", "effects": ["breach_doors_easily"] },
            { "name": "Ever-burning Torch", "rarity": "RARE", "effects": ["permanent_magical_light"] },
            { "name": "Continual Flame Lantern", "rarity": "RARE", "effects": ["permanent_magical_light_can_be_covered"] },
            { "name": "Driftglobe", "rarity": "RARE", "effects": ["follows_user_emits_light"] },
            { "name": "Infiltrator's Tools", "rarity": "EPIC", "quality": 2.0, "uses": 25, "effects": ["bypass_magical_traps", "silent"] },
            { "name": "Amulet of Proof against Detection and Location", "rarity": "EPIC", "effects": ["immune_to_scrying_and_divination"] },
            { "name": "Gloves of Thievery", "rarity": "EPIC", "quality": 2.5, "effects": ["dexterity_boost_for_thievery"] },
            { "name": "Portable Hole", "rarity": "EPIC", "effects": ["create_pocket_dimension_entrance"] },
            { "name": "Bag of Holding (Large)", "rarity": "EPIC", "capacity": "pocket_dimension_large" },
            { "name": "Folding Boat", "rarity": "EPIC", "effects": ["a_small_box_that_unfolds_into_a_boat"] },
            { "name": "Decanter of Endless Water", "rarity": "EPIC", "effects": ["produces_infinite_water"] },
            { "name": "Eversmoking Bottle", "rarity": "EPIC", "effects": ["produces_infinite_fog"] },
            { "name": "Alchemy Jug", "rarity": "EPIC", "effects": ["produces_various_liquids_daily"] },
            { "name": "The Architect's Chisel", "rarity": "LEGENDARY", "tool_type": "stonemasonry", "effects": ["shape_stone_with_ease", "find_structural_weakness"] },
            { "name": "The Weaver's Loom", "rarity": "LEGENDARY", "tool_type": "weaving", "effects": ["weave_magical_cloth", "mend_any_fabric_instantly"] },
            { "name": "The Cartographer's Pen", "rarity": "LEGENDARY", "tool_type": "mapmaking", "effects": ["accurately_maps_any_area_explored", "map_is_always_true"] }
        ]
    },
    "jewelry": {
        "rings": [
            { "name": "Iron Ring", "rarity": "COMMON", "effects": [], "slot": "ring1" },
            { "name": "Copper Band", "rarity": "COMMON", "effects": [], "slot": "ring1" },
            { "name": "Wooden Ring", "rarity": "COMMON", "effects": [], "slot": "ring1" },
            { "name": "Silver Ring with Small Gem", "rarity": "COMMON", "effects": ["minor_charisma_boost"], "slot": "ring1" },
            { "name": "Gold-plated Ring", "rarity": "COMMON", "effects": ["looks_valuable"], "slot": "ring1" },
            { "name": "Mood Ring", "rarity": "COMMON", "effects": ["changes_color_based_on_emotion"], "slot": "ring1" },
            { "name": "Signet Ring of a Minor House", "rarity": "COMMON", "effects": ["social_standing_minor"], "slot": "ring1" },
            { "name": "Merchant Guild Ring", "rarity": "COMMON", "effects": ["minor_discounts_with_guild_merchants"], "slot": "ring1" },
            { "name": "Ring of the Common Scribe", "rarity": "COMMON", "effects": ["never_runs_out_of_ink"], "slot": "ring1" },
            { "name": "Ring of Protection +1", "rarity": "UNCOMMON", "effects": ["armor_class_1"], "slot": "ring1" },
            { "name": "Ring of Resistance (Fire)", "rarity": "UNCOMMON", "effects": ["fire_resistance_small"], "slot": "ring1" },
            { "name": "Ring of Deflection", "rarity": "UNCOMMON", "effects": ["deflect_arrows_chance_small"], "slot": "ring1" },
            { "name": "Ring of Sustenance", "rarity": "UNCOMMON", "effects": ["reduces_need_for_food_water"], "slot": "ring1" },
            { "name": "Ring of the Bountiful Harvest", "rarity": "UNCOMMON", "effects": ["creates_one_goodberry_per_day"], "slot": "ring1" },
            { "name": "Ring of Clear Water", "rarity": "UNCOMMON", "effects": ["purifies_one_drink_per_day"], "slot": "ring1" },
            { "name": "Ring of Warmth", "rarity": "UNCOMMON", "effects": ["cold_resistance_small"], "slot": "ring1" },
            { "name": "Ring of the Water Strider", "rarity": "UNCOMMON", "effects": ["water_walking_1_minute_per_day"], "slot": "ring1" },
            { "name": "Ring of Darkvision", "rarity": "UNCOMMON", "effects": ["grants_darkvision_30ft"], "slot": "ring1" },
            { "name": "Ring of Animal Friendship", "rarity": "UNCOMMON", "effects": ["charm_animal_1_per_day"], "slot": "ring1" },
            { "name": "Ring of the Pack Alpha", "rarity": "UNCOMMON", "effects": ["speak_with_wolves"], "slot": "ring1" },
            { "name": "Ring of Jumping", "rarity": "UNCOMMON", "effects": ["jump_spell_at_will"], "slot": "ring1" },
            { "name": "Ring of Feather Falling", "rarity": "RARE", "effects": ["feather_fall_passive"], "slot": "ring1" },
            { "name": "Ring of Free Action", "rarity": "RARE", "effects": ["immune_to_paralysis_and_restraint"], "slot": "ring1" },
            { "name": "Ring of the Dolphin", "rarity": "RARE", "effects": ["grants_a_swim_speed"], "slot": "ring1" },
            { "name": "Ring of Spell Storing (Minor)", "rarity": "RARE", "effects": ["store_one_level_1_spell"], "slot": "ring1" },
            { "name": "Ring of the Evoker", "rarity": "RARE", "effects": ["empower_evocation_spells_small"], "slot": "ring1" },
            { "name": "Ring of Counter-spelling", "rarity": "RARE", "effects": ["cast_counterspell_1_per_day"], "slot": "ring1" },
            { "name": "Ring of Regeneration (Faint)", "rarity": "RARE", "effects": ["hpRegen_very_slow"], "slot": "ring1" },
            { "name": "Ring of the Troll", "rarity": "RARE", "effects": ["hpRegen_slow", "weakness_to_fire_and_acid"], "slot": "ring1" },
            { "name": "Bloodstone Ring", "rarity": "RARE", "effects": ["hp_boost_medium"], "slot": "ring1" },
            { "name": "Ring of Mind Shielding", "rarity": "RARE", "effects": ["immune_to_detect_thoughts"], "slot": "ring1" },
            { "name": "Ring of Eloquence", "rarity": "RARE", "effects": ["advantage_on_persuasion_checks"], "slot": "ring1" },
            { "name": "Ring of Truth Telling", "rarity": "RARE", "effects": ["wearer_cannot_tell_a_lie"], "slot": "ring1" },
            { "name": "Ring of the Ram", "rarity": "RARE", "effects": ["force_push_ability_charges"], "slot": "ring1" },
            { "name": "Ring of Shooting Stars", "rarity": "RARE", "effects": ["call_down_minor_meteors"], "slot": "ring1" },
            { "name": "Ring of Blinking", "rarity": "RARE", "effects": ["blink_spell_at_will"], "slot": "ring1" },
            { "name": "Band of the Archmagi", "rarity": "EPIC", "effects": ["intelligence_2", "spell_power_2"], "slot": "ring1" },
            { "name": "Ring of Wizardry (I-IV)", "rarity": "EPIC", "effects": ["doubles_spell_slots_of_a_certain_level"], "slot": "ring1" },
            { "name": "Ring of Spell Turning", "rarity": "EPIC", "effects": ["chance_to_reflect_targeted_spells"], "slot": "ring1" },
            { "name": "Ring of Elemental Command (Fire)", "rarity": "EPIC", "effects": ["fire_immunity_brief", "control_fire_elemental"], "slot": "ring1" },
            { "name": "Ring of Elemental Command (Water)", "rarity": "EPIC", "effects": ["water_breathing_at_will", "control_water_elemental"], "slot": "ring1" },
            { "name": "Ring of Elemental Command (Earth)", "rarity": "EPIC", "effects": ["meld_into_stone_brief", "control_earth_elemental"], "slot": "ring1" },
            { "name": "Vampiric Ring", "rarity": "EPIC", "effects": ["lifesteal_on_melee_hit_small"], "slot": "ring1" },
            { "name": "Ring of Ghostly Form", "rarity": "EPIC", "effects": ["become_incorporeal_briefly"], "slot": "ring1" },
            { "name": "Ring of Shadow Walking", "rarity": "EPIC", "effects": ["teleport_between_shadows"], "slot": "ring1" },
            { "name": "Ring of True Seeing", "rarity": "EPIC", "effects": ["grant_true_sight_briefly"], "slot": "ring1" },
            { "name": "Ring of X-ray Vision", "rarity": "EPIC", "effects": ["see_through_walls_briefly", "causes_exhaustion"], "slot": "ring1" },
            { "name": "Ring of Precognition", "rarity": "EPIC", "effects": ["dodge_one_attack_per_day"], "slot": "ring1" },
            { "name": "Ring of Three Wishes (Cursed)", "rarity": "LEGENDARY", "effects": ["grants_3_wishes_twisted", "major_curse_after_last_wish"], "slot": "ring1" },
            { "name": "Solomon's Ring", "rarity": "LEGENDARY", "effects": ["command_and_speak_with_any_animal_or_spirit"], "slot": "ring1" },
            { "name": "Ring of the Overlord", "rarity": "LEGENDARY", "effects": ["dominate_monster_1_per_week", "powerful_leadership_aura"], "slot": "ring1" },
            { "name": "The One Ring (Weak Echo)", "rarity": "LEGENDARY", "effects": ["invisibility_at_will", "corrupting_influence_moderate"], "slot": "ring1" },
            { "name": "Ring of Winter's Heart", "rarity": "LEGENDARY", "effects": ["total_cold_immunity", "cone_of_cold_at_will", "slows_wearer_down"], "slot": "ring1" },
            { "name": "Ring of the Phoenix", "rarity": "LEGENDARY", "effects": ["fiery_rebirth_1_per_month", "fire_immunity"], "slot": "ring1" },
            { "name": "Ring of Djinni Summoning", "rarity": "LEGENDARY", "effects": ["summon_djinni_once_a_week"], "slot": "ring1" },
            { "name": "Ring of Planar Travel", "rarity": "LEGENDARY", "effects": ["plane_shift_1_per_day"], "slot": "ring1" },
            { "name": "Ring of Spell Storing (Major)", "rarity": "LEGENDARY", "effects": ["store_up_to_5_levels_of_spells"], "slot": "ring1" },
            { "name": "The Creator's Signet", "rarity": "ARTIFACT", "effects": ["shape_reality_minor_at_cost", "unlimited_mending", "cosmic_awareness"], "slot": "ring1" },
            { "name": "Ring of Gaea", "rarity": "ARTIFACT", "effects": ["absolute_control_over_plants_and_animals", "can_revitalize_a_dead_forest"], "slot": "ring1" },
            { "name": "The Ring of Power", "rarity": "ARTIFACT", "effects": ["absolute_control_over_all_other_magic_rings", "total_corruption_of_the_soul"], "slot": "ring1" }
        ],
        "amulets": [
            { "name": "Wooden Holy Symbol", "rarity": "COMMON", "effects": ["faith_focus_minor"], "slot": "amulet" },
            { "name": "Simple Locket", "rarity": "COMMON", "effects": ["holds_a_tiny_picture"], "slot": "amulet" },
            { "name": "Necklace of Seashells", "rarity": "COMMON", "effects": [], "slot": "amulet" },
            { "name": "String of Goblin Teeth", "rarity": "COMMON", "effects": ["intimidation_vs_goblins_tiny"], "slot": "amulet" },
            { "name": "Claw Necklace", "rarity": "COMMON", "effects": ["intimidation_vs_animals_tiny"], "slot": "amulet" },
            { "name": "Pendant with a strange sigil", "rarity": "COMMON", "effects": ["unidentified_symbol"], "slot": "amulet" },
            { "name": "Amulet of Health (Lesser)", "rarity": "UNCOMMON", "effects": ["max_hp_boost_small"], "slot": "amulet" },
            { "name": "Periapt of Wound Closure", "rarity": "UNCOMMON", "effects": ["automatically_stabilize_when_downed"], "slot": "amulet" },
            { "name": "Amulet of the Drunkard", "rarity": "UNCOMMON", "effects": ["immune_to_hangovers", "advantage_vs_poison_from_alcohol"], "slot": "amulet" },
            { "name": "Necklace of Fire Resistance (Minor)", "rarity": "UNCOMMON", "effects": ["fire_resistance_small"], "slot": "amulet" },
            { "name": "Pendant of the Adamant Tortoise", "rarity": "UNCOMMON", "effects": ["armor_class_1_when_not_moving"], "slot": "amulet" },
            { "name": "Holy Symbol of a God", "rarity": "UNCOMMON", "effects": ["divine_focus_for_clerics_paladins"], "slot": "amulet" },
            { "name": "Medallion of Thought Projection", "rarity": "UNCOMMON", "effects": ["send_telepathic_message_one_way"], "slot": "amulet" },
            { "name": "Amulet of the Silver Tongue", "rarity": "UNCOMMON", "effects": ["advantage_on_deception_checks"], "slot": "amulet" },
            { "name": "Pendant of the Public Speaker", "rarity": "UNCOMMON", "effects": ["magically_amplifies_voice"], "slot": "amulet" },
            { "name": "Amulet of Natural Armor +1", "rarity": "RARE", "effects": ["natural_armor_1"], "slot": "amulet" },
            { "name": "Amulet of the Bark-skinned", "rarity": "RARE", "effects": ["natural_armor_2", "vulnerability_to_fire"], "slot": "amulet" },
            { "name": "Scarab of Protection", "rarity": "RARE", "effects": ["advantage_on_saves_vs_spells_once"], "slot": "amulet" },
            { "name": "Periapt of Proof Against Poison", "rarity": "RARE", "effects": ["poison_immunity_weak_poisons"], "slot": "amulet" },
            { "name": "Periapt of Health", "rarity": "RARE", "effects": ["immunity_to_all_diseases"], "slot": "amulet" },
            { "name": "Necklace of Adaptation", "rarity": "RARE", "effects": ["breathe_normally_in_any_environment"], "slot": "amulet" },
            { "name": "Brooch of Shielding", "rarity": "RARE", "effects": ["absorbs_force_damage_pool"], "slot": "amulet" },
            { "name": "Amulet of the Devout", "rarity": "RARE", "effects": ["bonus_to_divine_spell_dc", "extra_channel_divinity"], "slot": "amulet" },
            { "name": "Pendant of the War Mage", "rarity": "RARE", "effects": ["bonus_to_spell_attack_rolls"], "slot": "amulet" },
            { "name": "Necklace of Prayer Beads (3 beads)", "rarity": "RARE", "effects": ["cast_divine_spell_from_bead"], "slot": "amulet" },
            { "name": "Choker of the Beast Tamer", "rarity": "RARE", "effects": ["cast_dominate_beast_1_per_day"], "slot": "amulet" },
            { "name": "Focal Stone of the Wilds", "rarity": "RARE", "effects": ["bonus_to_druidic_spell_dc"], "slot": "amulet" },
            { "name": "Amulet of the Planes (Malfunctioning)", "rarity": "EPIC", "effects": ["plane_shift_random_unreliable"], "slot": "amulet" },
            { "name": "Pendant of the Time-Thief", "rarity": "EPIC", "effects": ["cast_haste_or_slow_1_per_day"], "slot": "amulet" },
            { "name": "Chronarch's Medallion", "rarity": "EPIC", "effects": ["immune_to_magical_aging"], "slot": "amulet" },
            { "name": "Necklace of Elemental Command (Air)", "rarity": "EPIC", "effects": ["control_winds_moderate", "fly_briefly"], "slot": "amulet" },
            { "name": "Necklace of Elemental Command (Earth)", "rarity": "EPIC", "effects": ["mold_earth_at_will", "move_through_stone_briefly"], "slot": "amulet" },
            { "name": "Gem of Seeing", "rarity": "EPIC", "effects": ["grants_true_sight_at_will"], "slot": "amulet" },
            { "name": "Amulet of Mighty Fists +2", "rarity": "EPIC", "effects": ["unarmed_attack_and_damage_bonus_2"], "slot": "amulet" },
            { "name": "Monk's Fighting Beads", "rarity": "EPIC", "effects": ["bonus_to_ki_save_dc", "gain_one_extra_ki_point"], "slot": "amulet" },
            { "name": "Amulet of the Undying", "rarity": "EPIC", "effects": ["prevents_magical_and_non-magical_death_once_per_week"], "slot": "amulet" },
            { "name": "Heart of Ahriman (Pendant)", "rarity": "LEGENDARY", "effects": ["dark_power_boost", "corruption_aura", "summon_shadows_1"], "slot": "amulet" },
            { "name": "Amulet of Lordly Command", "rarity": "LEGENDARY", "effects": ["permanent_charisma_boost_large", "advantage_on_all_social_rolls"], "slot": "amulet" },
            { "name": "The Hand of Glory", "rarity": "LEGENDARY", "effects": ["holds_a_light_only_the_bearer_can_see", "induces_sleep_in_a_household"], "slot": "amulet" },
            { "name": "Talisman of the Sphere", "rarity": "LEGENDARY", "effects": ["control_sphere_of_annihilation", "risky"], "slot": "amulet" },
            { "name": "Talisman of Pure Good", "rarity": "LEGENDARY", "effects": ["major_bonus_vs_evil", "can_smite_evil_at_range", "explodes_if_wearer_commits_evil_act"], "slot": "amulet" },
            { "name": "Talisman of Ultimate Evil", "rarity": "LEGENDARY", "effects": ["major_bonus_vs_good", "can_siphon_life_at_range", "explodes_if_wearer_commits_good_act"], "slot": "amulet" },
            { "name": "Amulet of the Void", "rarity": "ARTIFACT", "effects": ["immunity_to_void_damage", "void_teleport", "slowly_erases_identity"], "slot": "amulet" },
            { "name": "Eye of Agamotto", "rarity": "ARTIFACT", "effects": ["reveals_truth", "manipulates_time_locally", "protects_against_evil_magic"], "slot": "amulet" },
            { "name": "The Heart of Lorkhan", "rarity": "ARTIFACT", "effects": ["grants_divine_power", "the_source_of_the_world's_instability", "cannot_be_destroyed"] }
        ]
    },
    "crafting": {
        "ores": [
            { "name": "Copper Ore", "rarity": "COMMON", "description": "A common, reddish-brown ore." },
            { "name": "Limestone", "rarity": "COMMON", "description": "A soft sedimentary rock, used for construction and flux." },
            { "name": "Slate", "rarity": "COMMON", "description": "A fine-grained rock that splits into smooth sheets." },
            { "name": "Tin Ore", "rarity": "COMMON", "description": "A soft, silvery-white ore, often used for bronze." },
            { "name": "Lead Ore", "rarity": "COMMON", "description": "A dense, soft, and heavy metal ore." },
            { "name": "Zinc Ore", "rarity": "COMMON", "description": "A bluish-white ore, often used for brass." },
            { "name": "Iron Ore", "rarity": "COMMON", "description": "A sturdy and reliable metal ore." },
            { "name": "Nickel Ore", "rarity": "COMMON", "description": "A silvery-white ore known for its resistance to corrosion." },
            { "name": "Rough Stone", "rarity": "COMMON", "description": "Basic stone for simple construction." },
            { "name": "Silver Ore", "rarity": "UNCOMMON", "description": "A lustrous ore valued for its purity and effect on undead." },
            { "name": "Electrum Ore", "rarity": "UNCOMMON", "description": "A natural alloy of gold and silver." },
            { "name": "Alchemical Silver Ore", "rarity": "UNCOMMON", "description": "Silver ore with reactive properties for alchemy." },
            { "name": "Gold Ore", "rarity": "UNCOMMON", "description": "A soft, valuable ore, prized for its beauty." },
            { "name": "Rose Gold Ore", "rarity": "UNCOMMON", "description": "Gold ore naturally alloyed with copper, giving it a pinkish hue." },
            { "name": "Platinum Ore", "rarity": "UNCOMMON", "description": "A rare and highly valuable silvery-white metal ore." },
            { "name": "Coal Chunk", "rarity": "UNCOMMON", "description": "A high-energy fuel source for forges." },
            { "name": "Obsidian Shard", "rarity": "UNCOMMON", "description": "Volcanic glass that can be knapped into sharp edges." },
            { "name": "Quartz Crystal", "rarity": "UNCOMMON", "description": "A clear crystal with minor magical resonance." },
            { "name": "Mithril Ore", "rarity": "RARE", "description": "A lightweight and exceptionally strong ore." },
            { "name": "Quicksilver (Cinnabar)", "rarity": "RARE", "description": "A toxic, liquid metal ore at room temperature." },
            { "name": "Cobalt Ore", "rarity": "RARE", "description": "An ore that produces a deep blue metal, used in enchanting." },
            { "name": "Truesilver Ore", "rarity": "RARE", "description": "An ore that shines with an inner light, useful for holy items." },
            { "name": "Consecrated Iron Ore", "rarity": "RARE", "description": "Iron ore blessed by a powerful cleric, anathema to fiends." },
            { "name": "Cold Iron Ore", "rarity": "RARE", "description": "Pure iron ore, effective against fey creatures." },
            { "name": "Dark Iron Ore", "rarity": "RARE", "description": "Found deep underground, holds heat exceptionally well." },
            { "name": "Bloodstone Ore", "rarity": "RARE", "description": "An ore with veins of red, seems to pulse with life." },
            { "name": "Dwarven Blackrock Ore", "rarity": "RARE", "description": "Extremely dense and heat-resistant rock." },
            { "name": "Adamantine Ore", "rarity": "EPIC", "description": "One of the hardest known metal ores." },
            { "name": "Infernal Iron Ore", "rarity": "EPIC", "description": "Iron ore mined from the Nine Hells, hot to the touch." },
            { "name": "Sky-Iron Ore", "rarity": "EPIC", "description": "Meteoric iron that is lighter and stronger than normal." },
            { "name": "Eternium Ore", "rarity": "EPIC", "description": "A strange metal that seems to phase in and out of reality." },
            { "name": "Phase-Iron Ore", "rarity": "EPIC", "description": "An ore that can temporarily become ethereal." },
            { "name": "Unobtanium Ore", "rarity": "EPIC", "description": "An ore that is famously hard to get." },
            { "name": "Orichalcum Ore", "rarity": "LEGENDARY", "description": "A mythical ore pulsating with magical energy." },
            { "name": "Atlantean Bronze Ore", "rarity": "LEGENDARY", "description": "An ancient ore from a sunken city, resistant to corrosion and magic." },
            { "name": "Gorgon-Hide Iron Ore", "rarity": "LEGENDARY", "description": "Iron infused with the petrifying magic of a Gorgon." },
            { "name": "Star Metal Ore", "rarity": "LEGENDARY", "description": "Ore from a fallen meteor, humming with cosmic power." },
            { "name": "Living Metal Ore", "rarity": "LEGENDARY", "description": "A semi-sentient ore that can slowly reshape itself." },
            { "name": "Crystallized Moonlight Ore", "rarity": "LEGENDARY", "description": "Solidified moonlight, glows softly and is cold to the touch." },
            { "name": "Voidstone Ore", "rarity": "ARTIFACT", "description": "Ore infused with the emptiness of the void, strangely light." },
            { "name": "Chaos Ore", "rarity": "ARTIFACT", "description": "An unstable ore that constantly shifts its properties." },
            { "name": "The First Metal (Prima Materia)", "rarity": "ARTIFACT", "description": "The proto-ore from which all other metals are derived." },
            { "name": "Heart-Iron Ore", "rarity": "ARTIFACT", "description": "Ore mined from the heart of a dying star, impossibly dense." },
            { "name": "Celestial Gold Ore", "rarity": "ARTIFACT", "description": "Gold from the higher planes, it shines with the light of goodness." },
            { "name": "Tears of a God (Crystallized)", "rarity": "ARTIFACT", "description": "The solidified sorrow of a deity, contains immense power." }
        ],
        "herbs": [
            { "name": "Common Clover", "rarity": "COMMON", "description": "A simple clover, sometimes lucky." },
            { "name": "Dandelion", "rarity": "COMMON", "description": "A common weed, its roots can be used in simple tinctures." },
            { "name": "Nettle", "rarity": "COMMON", "description": "A stinging plant that can be made into tea or fiber." },
            { "name": "Kingsfoil Leaf", "rarity": "COMMON", "description": "A common herb with minor healing properties." },
            { "name": "Aloe Vera", "rarity": "COMMON", "description": "Soothes burns and minor skin irritations." },
            { "name": "Comfrey", "rarity": "COMMON", "description": "Often called 'knitbone' for its use in healing fractures." },
            { "name": "Peacebloom", "rarity": "COMMON", "description": "A calming flower used in tranquil potions." },
            { "name": "Lavender", "rarity": "COMMON", "description": "A fragrant flower used to promote sleep." },
            { "name": "Chamomile", "rarity": "COMMON", "description": "A small, daisy-like flower used in calming draughts." },
            { "name": "Nightshade Petals", "rarity": "UNCOMMON", "description": "Petals from a poisonous plant." },
            { "name": "Mandrake Root", "rarity": "UNCOMMON", "description": "A root resembling a small person; its scream can be fatal." },
            { "name": "Wolfsbane", "rarity": "UNCOMMON", "description": "A toxic plant, particularly effective against lycanthropes." },
            { "name": "Dragonstongue Root", "rarity": "UNCOMMON", "description": "A fiery root used in potent potions." },
            { "name": "Fire-Flower", "rarity": "UNCOMMON", "description": "A flower that is warm to the touch, used in potions of warmth." },
            { "name": "Blood-Root", "rarity": "UNCOMMON", "description": "A root that 'bleeds' red sap, used in healing potions." },
            { "name": "Grave Moss", "rarity": "UNCOMMON", "description": "Moss that grows on tombstones, used in necromancy." },
            { "name": "Wraith-Cap Mushroom", "rarity": "UNCOMMON", "description": "A pale mushroom that makes one feel cold and detached." },
            { "name": "Ghost Orchid", "rarity": "UNCOMMON", "description": "A translucent flower used in potions of invisibility." },
            { "name": "Moonpetal Flower", "rarity": "RARE", "description": "A rare flower that blooms only under moonlight." },
            { "name": "Stardust Lichen", "rarity": "RARE", "description": "A lichen that glitters like the night sky, used in divination." },
            { "name": "Silver-leaf", "rarity": "RARE", "description": "A plant with metallic leaves, used in protective potions." },
            { "name": "Sungrass", "rarity": "RARE", "description": "Grass that glows faintly, used in potions of vitality." },
            { "name": "Glimmer-weed", "rarity": "RARE", "description": "A weed that stores and releases light, used in potions of light." },
            { "name": "Golden Lotus", "rarity": "RARE", "description": "A rare golden flower used in potions of great fortune." },
            { "name": "Dreamfoil", "rarity": "RARE", "description": "An herb that can induce prophetic dreams or potent hallucinations." },
            { "name": "Whisper-vine", "rarity": "RARE", "description": "A vine that seems to whisper secrets when the wind blows." },
            { "name": "Void-bloom", "rarity": "RARE", "description": "A dark flower that absorbs light, used in shadow potions." },
            { "name": "Sunfruit Seed", "rarity": "EPIC", "description": "Seeds from a fruit that captures sunlight." },
            { "name": "Phoenix Bloom", "rarity": "EPIC", "description": "A flower that regrows from its own ashes, used in rebirth potions." },
            { "name": "Dragon's Blood Sap", "rarity": "EPIC", "description": "A thick, red sap from a rare tree, used for extreme fortitude potions." },
            { "name": "Black Lotus", "rarity": "EPIC", "description": "A legendary herb that can cause instant death or incredible power." },
            { "name": "Shadow-Silk Weed", "rarity": "EPIC", "description": "A plant made of solid shadow, used for invisibility potions." },
            { "name": "Chaos-bloom", "rarity": "EPIC", "description": "A flower that constantly changes color and shape, used in wild magic potions." },
            { "name": "Star Tear Blossom", "rarity": "LEGENDARY", "description": "A flower said to be a tear from a celestial being." },
            { "name": "Aether-Rose", "rarity": "LEGENDARY", "description": "A rose that grows on the Ethereal Plane, used for phasing potions." },
            { "name": "Celestial Vine", "rarity": "LEGENDARY", "description": "A vine that grows down from the heavens, used for holy potions." },
            { "name": "Frost-Lotus", "rarity": "LEGENDARY", "description": "A flower that blooms in the heart of a glacier, radiating cold." },
            { "name": "Heart-bloom", "rarity": "LEGENDARY", "description": "A plant that only grows where true love has been declared." },
            { "name": "Chronomist's Ivy", "rarity": "LEGENDARY", "description": "An ivy that grows both forwards and backwards in time." },
            { "name": "Blood Lotus Pollen", "rarity": "ARTIFACT", "description": "Pollen from a lotus fed on life essence." },
            { "name": "Dream-Root of the First Slumber", "rarity": "ARTIFACT", "description": "The root from which all dreams originate." },
            { "name": "Petal of a White Rose from a Black Garden", "rarity": "ARTIFACT", "description": "A perfect paradox, it can be used to create or destroy." },
            { "name": "Seed of Yggdrasil", "rarity": "ARTIFACT", "description": "A single seed from the world tree itself." },
            { "name": "The First Herb", "rarity": "ARTIFACT", "description": "The ancestor of all plant life, contains all properties." },
            { "name": "Tear of Gaea", "rarity": "ARTIFACT", "description": "A flower that can bring life to a barren continent." }
        ],
        "monster_parts": [
            { "name": "Goblin Ear", "rarity": "COMMON", "description": "A severed ear from a goblin." },
            { "name": "Kobold Scale", "rarity": "COMMON", "description": "A single scale from a kobold." },
            { "name": "Slime Globule", "rarity": "COMMON", "description": "A sticky, acidic piece of a slime." },
            { "name": "Wolf Pelt", "rarity": "COMMON", "description": "The fur of a common wolf." },
            { "name": "Bat Wing", "rarity": "COMMON", "description": "The leathery wing of a common bat." },
            { "name": "Snake Skin", "rarity": "COMMON", "description": "The shed skin of a common snake." },
            { "name": "Giant Rat Tail", "rarity": "COMMON", "description": "The tail of an unusually large rat." },
            { "name": "Giant Insect Mandible", "rarity": "COMMON", "description": "A sharp pincer from a large insect." },
            { "name": "Boar Tusk", "rarity": "COMMON", "description": "A sharp tusk from a wild boar." },
            { "name": "Spider Venom Gland", "rarity": "UNCOMMON", "description": "A gland containing potent spider venom." },
            { "name": "Centaur Hair", "rarity": "UNCOMMON", "description": "Coarse hair from a centaur's tail, good for bowstrings." },
            { "name": "Ogre's Tooth", "rarity": "UNCOMMON", "description": "A large, unpleasant tooth from an ogre." },
            { "name": "Griffon Feather", "rarity": "UNCOMMON", "description": "A large feather from a griffon." },
            { "name": "Cockatrice Feather", "rarity": "UNCOMMON", "description": "A feather that is slowly turning to stone." },
            { "name": "Owlbear Feather", "rarity": "UNCOMMON", "description": "A thick, warm feather from an owlbear's pelt." },
            { "name": "Harpy Vocal Cords", "rarity": "UNCOMMON", "description": "The source of a harpy's enchanting song." },
            { "name": "Manticore Spine", "rarity": "UNCOMMON", "description": "A sharp, throwable spine from a manticore's tail." },
            { "name": "Satyr's Horn", "rarity": "UNCOMMON", "description": "A horn from a fey creature, smells of wine and revelry." },
            { "name": "Minotaur Horn", "rarity": "RARE", "description": "A sturdy horn from a minotaur." },
            { "name": "Wyvern Stinger", "rarity": "RARE", "description": "A venomous stinger from a wyvern's tail." },
            { "name": "Gorgon Hide", "rarity": "RARE", "description": "Iron-like hide from a metallic gorgon." },
            { "name": "Basilisk Eye", "rarity": "RARE", "description": "An eye from a basilisk, still capable of petrification." },
            { "name": "Medusa's Snake-Hair", "rarity": "RARE", "description": "A single, still-writhing snake from a medusa's head." },
            { "name": "Umber Hulk Mandible", "rarity": "RARE", "description": "A massive, powerful mandible capable of chewing through stone." },
            { "name": "Displacer Beast Tentacle", "rarity": "RARE", "description": "A tentacle that bends light around it." },
            { "name": "Phase Spider Mandible", "rarity": "RARE", "description": "A mandible that occasionally shifts to the Ethereal Plane." },
            { "name": "Yeti Fur", "rarity": "RARE", "description": "Thick, white fur that provides incredible insulation." },
            { "name": "Dragon Scale (Young)", "rarity": "EPIC", "description": "A scale from a young dragon, still resilient." },
            { "name": "Dragon's Tooth", "rarity": "EPIC", "description": "A tooth from an adult dragon, sharp as a sword." },
            { "name": "Mind Flayer Tentacle", "rarity": "EPIC", "description": "A tentacle from an illithid, still slimy." },
            { "name": "Hydra Blood", "rarity": "EPIC", "description": "Highly corrosive and regenerative blood." },
            { "name": "Phoenix Feather", "rarity": "EPIC", "description": "A feather that glows with inner fire, warm to the touch." },
            { "name": "Demon Ichor", "rarity": "EPIC", "description": "The foul, black blood of a powerful demon." },
            { "name": "Beholder Eyestalk", "rarity": "LEGENDARY", "description": "A severed eyestalk from a beholder, still twitching." },
            { "name": "Lich's Phylactery (Broken)", "rarity": "LEGENDARY", "description": "A shattered container that once held the soul of a lich." },
            { "name": "Ancient Dragon Heartstring", "rarity": "LEGENDARY", "description": "The heartstring of an ancient dragon, thrumming with power." },
            { "name": "Angel Feather", "rarity": "LEGENDARY", "description": "A feather from a celestial being, warm to the touch." },
            { "name": "Devil's Horn", "rarity": "LEGENDARY", "description": "A horn from an archdevil, containing the power of infernal law." },
            { "name": "Titan's Knucklebone", "rarity": "LEGENDARY", "description": "A bone from a titan, impossibly large and heavy." },
            { "name": "Heart of a Tarrasque (Fragment)", "rarity": "ARTIFACT", "description": "A pulsating fragment from an unkillable beast." },
            { "name": "Blood of a God", "rarity": "ARTIFACT", "description": "The ichor of a deity, glows with unimaginable power." },
            { "name": "The First Scream (Crystallized)", "rarity": "ARTIFACT", "description": "The solidified sound of the first pain ever felt." },
            { "name": "Mind of a Mind Flayer", "rarity": "ARTIFACT", "description": "A brain that contains the collective knowledge of a Mind Flayer colony." },
            { "name": "The Unblinking Eye of an Elder God", "rarity": "ARTIFACT", "description": "Looking into it reveals all truths and all madness." },
            { "name": "The Song of Creation (Solidified)", "rarity": "ARTIFACT", "description": "The pattern of the universe, made manifest." }
        ],
        "essences": [
            { "name": "Faint Magical Essence", "rarity": "COMMON", "description": "A weak residue of magical energy." },
            { "name": "Coagulated Mana", "rarity": "COMMON", "description": "A slightly solidified mote of magical power." },
            { "name": "Spark of Power", "rarity": "COMMON", "description": "The smallest possible unit of raw energy." },
            { "name": "Lingering Spirit Essence", "rarity": "COMMON", "description": "The faint echo of a departed spirit." },
            { "name": "Ectoplasmic Residue", "rarity": "COMMON", "description": "Slimy leavings from a ghostly encounter." },
            { "name": "Emotional Residue (Joy)", "rarity": "COMMON", "description": "The faint, warm feeling left after a celebration." },
            { "name": "Elemental Water Droplet", "rarity": "UNCOMMON", "description": "Pure water essence from an elemental." },
            { "name": "Living Flame", "rarity": "UNCOMMON", "description": "Fire essence from an elemental that moves on its own." },
            { "name": "Breath of Wind", "rarity": "UNCOMMON", "description": "Air essence from an elemental, feels like a constant breeze." },
            { "name": "Frozen Core Shard", "rarity": "UNCOMMON", "description": "A shard from the heart of an ice elemental." },
            { "name": "Scintilla of Life", "rarity": "UNCOMMON", "description": "A tiny spark of positive life energy." },
            { "name": "Mote of Death", "rarity": "UNCOMMON", "description": "A tiny speck of negative necrotic energy." },
            { "name": "Ichor of Shadow", "rarity": "UNCOMMON", "description": "The liquid essence of a shadow creature." },
            { "name": "Glimmer of Light", "rarity": "UNCOMMON", "description": "A small, contained piece of pure light." },
            { "name": "Crystallized Fear", "rarity": "UNCOMMON", "description": "The physical manifestation of terror." },
            { "name": "Shadow Essence Clot", "rarity": "RARE", "description": "A congealed piece of raw shadow energy." },
            { "name": "Sun-warmed Stone", "rarity": "RARE", "description": "The essence of a sunny day, captured in a stone." },
            { "name": "Essence of Rage", "rarity": "RARE", "description": "The raw power of a berserker's fury." },
            { "name": "Concentrated Life Dew", "rarity": "RARE", "description": "Pure life energy condensed into a dewdrop." },
            { "name": "Verdant Growth Particle", "rarity": "RARE", "description": "The essence of rapid, uncontrolled natural growth." },
            { "name": "Tear of a Dryad", "rarity": "RARE", "description": "The sorrow of a nature spirit." },
            { "name": "Roiling Magma Core", "rarity": "RARE", "description": "The heart of a fire elemental." },
            { "name": "Captured Lightning", "rarity": "RARE", "description": "A bottle containing a miniature lightning storm." },
            { "name": "Heart of the Mountain", "rarity": "RARE", "description": "The essence of an entire mountain's stability and strength." },
            { "name": "Infernal Brimstone", "rarity": "EPIC", "description": "Sulfurous stone from the depths of a hellscape." },
            { "name": "Soul of a Devil", "rarity": "EPIC", "description": "A soul coin containing the essence of a lesser devil." },
            { "name": "Essence of Betrayal", "rarity": "EPIC", "description": "The cold, sharp feeling of being betrayed, given form." },
            { "name": "Celestial Radiance Crystal", "rarity": "EPIC", "description": "A crystal imbued with light from the higher planes." },
            { "name": "Drop of Holy Water from the Heavens", "rarity": "EPIC", "description": "Water that has been blessed by a deity." },
            { "name": "Essence of Pure Law", "rarity": "EPIC", "description": "A perfectly structured crystal that resists all change." },
            { "name": "Essence of a Nightmare", "rarity": "EPIC", "description": "The crystallized fear from a powerful nightmare." },
            { "name": "Crystallized Dream", "rarity": "EPIC", "description": "The captured hope from a lucid dream." },
            { "name": "Spark of Madness", "rarity": "EPIC", "description": "The chaotic energy of a madman's mind." },
            { "name": "Timeless Sand Grain", "rarity": "LEGENDARY", "description": "A grain of sand unstuck from the flow of time." },
            { "name": "Echo of a Prophecy", "rarity": "LEGENDARY", "description": "A whispering vortex of what is to come." },
            { "name": "A Moment of Perfect Silence", "rarity": "LEGENDARY", "description": "The complete absence of sound, captured in a crystal." },
            { "name": "Heart of a Storm", "rarity": "LEGENDARY", "description": "The captured fury of a lightning storm." },
            { "name": "The Last Ember of a Dead Star", "rarity": "LEGENDARY", "description": "A dying light that still contains immense power." },
            { "name": "A Single Note of the Universe's Song", "rarity": "LEGENDARY", "description": "A perfect, harmonious tone that aligns all it touches." },
            { "name": "Quintessence of Creation", "rarity": "ARTIFACT", "description": "The pure, raw stuff of the cosmos." },
            { "name": "Essence of Annihilation", "rarity": "ARTIFACT", "description": "The desire for nonexistence, given form. Incredibly dangerous." },
            { "name": "The Spark of Genius", "rarity": "ARTIFACT", "description": "The original idea that led to the invention of magic." },
            { "name": "Echo of a Lost God", "rarity": "ARTIFACT", "description": "The fading divine spark of a forgotten deity." },
            { "name": "A Drop of True Immortality", "rarity": "ARTIFACT", "description": "The essence of unending, unchanging existence." },
            { "name": "The Concept of Hope", "rarity": "ARTIFACT", "description": "The belief in a better future, given tangible form." }
        ]
    },
    "currency": {
        "coins": [
            { "name": "Copper Piece", "rarity": "COMMON", "value": 1, "description": "A single copper coin." },
            { "name": "Bent Copper Piece", "rarity": "COMMON", "value": 0, "description": "A worthless, bent copper coin." },
            { "name": "Iron Piece", "rarity": "COMMON", "value": 2, "description": "A heavy iron coin, common in the north." },
            { "name": "Silver Piece", "rarity": "COMMON", "value": 10, "description": "A silver coin, worth 10 coppers." },
            { "name": "Tarnished Silver Piece", "rarity": "COMMON", "value": 8, "description": "An old, dirty silver coin." },
            { "name": "Electrum Piece", "rarity": "UNCOMMON", "value": 50, "description": "A mixed-metal coin of silver and gold." },
            { "name": "Gold Piece", "rarity": "UNCOMMON", "value": 100, "description": "A gold coin, worth 10 silvers." },
            { "name": "Rose Gold Piece", "rarity": "UNCOMMON", "value": 120, "description": "A gold coin with a copperish hue, popular with nobles." },
            { "name": "Gold Crown", "rarity": "UNCOMMON", "value": 100, "description": "The standard gold piece of the realm." },
            { "name": "Platinum Piece", "rarity": "RARE", "value": 1000, "description": "A platinum coin, for large transactions." },
            { "name": "Polished Platinum Piece", "rarity": "RARE", "value": 1100, "description": "A platinum coin, polished to a mirror shine." },
            { "name": "Platinum Crown", "rarity": "RARE", "value": 1000, "description": "The standard platinum piece of the realm." },
            { "name": "Ancient Empire Coin", "rarity": "RARE", "value": 250, "description": "A coin from a long-fallen empire, sought by collectors." },
            { "name": "Sunken Kingdom Doubloon", "rarity": "RARE", "value": 300, "description": "A gold coin covered in coral, from a city lost to the sea." },
            { "name": "Medal of the First Legion", "rarity": "RARE", "value": 200, "description": "A bronze medal awarded for valor, sometimes used as currency." },
            { "name": "Dwarven Trade Bar (Iron)", "rarity": "COMMON", "value": 50, "description": "An iron bar stamped with dwarven runes, used for trade." },
            { "name": "Dwarven Trade Bar (Silver)", "rarity": "UNCOMMON", "value": 500, "description": "A silver bar used for larger dwarven transactions." },
            { "name": "Dwarven Mithril Ingot", "rarity": "RARE", "value": 5000, "description": "A small, lightweight bar of pure mithril." },
            { "name": "Elven Moonstone Chip", "rarity": "UNCOMMON", "value": 150, "description": "A polished chip of moonstone, used as currency by elves." },
            { "name": "Elven Sunstone Chip", "rarity": "UNCOMMON", "value": 150, "description": "A polished chip of sunstone that glimmers warmly." },
            { "name": "Sylvan Leaf Token", "rarity": "UNCOMMON", "value": 125, "description": "A preserved, golden leaf used by forest dwellers." },
            { "name": "Soul Coin", "rarity": "RARE", "value": 0, "description": "A coin from the Nine Hells that contains a trapped soul. Used as currency by devils." },
            { "name": "Hag's Eye Token", "rarity": "RARE", "value": 0, "description": "A mummified newt's eye. Used as currency for favors with hags." },
            { "name": "Celestial Shekel", "rarity": "RARE", "value": 1000, "description": "A coin of pure goodness, painful for fiends to touch." },
            { "name": "Dragon Scale Coin", "rarity": "EPIC", "value": 2000, "description": "A coin minted from an ancient dragon's scale." },
            { "name": "Prismatic Dragon Scale Coin", "rarity": "EPIC", "value": 2500, "description": "A coin that shifts through all the colors of the rainbow." },
            { "name": "Beholder's Iris", "rarity": "EPIC", "value": 3000, "description": "A petrified eye from a beholder, used in the Underdark for high-value trade." },
            { "name": "Astral Diamond", "rarity": "LEGENDARY", "value": 10000, "description": "A gem that holds a sliver of the Astral Plane." },
            { "name": "Void Pearl", "rarity": "LEGENDARY", "value": 15000, "description": "A pearl that seems to absorb all light, from the space between worlds." },
            { "name": "Coin of the Creator", "rarity": "ARTIFACT", "value": "immeasurable", "description": "One of the first coins ever made. It can be used to buy anything, even an idea or a memory." }
        ],
        "gems": [
            { "name": "Flawed Amethyst", "rarity": "COMMON", "value": 20, "description": "A small, imperfect amethyst." },
            { "name": "Cracked Turquoise", "rarity": "COMMON", "value": 10, "description": "A piece of turquoise with a hairline fracture." },
            { "name": "Moss Agate", "rarity": "COMMON", "value": 12, "description": "A stone with green, mossy inclusions." },
            { "name": "Quartz Crystal", "rarity": "COMMON", "value": 15, "description": "A clear crystal, often used as a minor arcane focus." },
            { "name": "Rose Quartz", "rarity": "COMMON", "value": 18, "description": "A pinkish quartz, associated with love and friendship." },
            { "name": "Smoky Quartz", "rarity": "COMMON", "value": 16, "description": "A grey, translucent variety of quartz." },
            { "name": "Polished Garnet", "rarity": "UNCOMMON", "value": 50, "description": "A shiny red garnet." },
            { "name": "Bloodstone", "rarity": "UNCOMMON", "value": 60, "description": "A dark green stone with red flecks." },
            { "name": "Carnelian", "rarity": "UNCOMMON", "value": 45, "description": "An orange-red stone that is warm to the touch." },
            { "name": "Jade Statuette", "rarity": "UNCOMMON", "value": 75, "description": "A small statuette carved from jade." },
            { "name": "Obsidian Figurine", "rarity": "UNCOMMON", "value": 65, "description": "A figurine of a small animal carved from volcanic glass." },
            { "name": "Lapis Lazuli Pendant", "rarity": "UNCOMMON", "value": 80, "description": "A deep blue stone with golden inclusions, hung on a cord." },
            { "name": "Flawless Ruby", "rarity": "RARE", "value": 250, "description": "A perfect, deep red ruby." },
            { "name": "Emerald", "rarity": "RARE", "value": 225, "description": "A brilliant green gemstone." },
            { "name": "Sapphire", "rarity": "RARE", "value": 240, "description": "A deep blue gemstone." },
            { "name": "Black Pearl", "rarity": "RARE", "value": 300, "description": "A rare, dark pearl from the deepest oceans." },
            { "name": "Golden Pearl", "rarity": "RARE", "value": 280, "description": "A luminous pearl with a golden sheen." },
            { "name": "Peridot", "rarity": "RARE", "value": 180, "description": "A vibrant lime-green gemstone." },
            { "name": "Soul Gem (Empty)", "rarity": "RARE", "value": 100, "description": "A crystal capable of holding a spiritual essence." },
            { "name": "Soul Gem (Filled)", "rarity": "RARE", "value": 400, "description": "This throbbing crystal contains the soul of a creature." },
            { "name": "Mana Crystal", "rarity": "RARE", "value": 500, "description": "A gem that stores raw magical energy. Can be crushed to restore mana." },
            { "name": "Star Sapphire", "rarity": "EPIC", "value": 1000, "description": "A sapphire showing a star-like phenomenon." },
            { "name": "Star Ruby", "rarity": "EPIC", "value": 1100, "description": "A ruby showing a six-rayed star that seems to float on the surface." },
            { "name": "Alexandrite", "rarity": "EPIC", "value": 900, "description": "A gemstone that changes color depending on the light source." },
            { "name": "Fire Opal", "rarity": "EPIC", "value": 1200, "description": "An opal that seems to have a fire burning within it." },
            { "name": "Ice Diamond", "rarity": "EPIC", "value": 1500, "description": "A diamond found in a glacier, it is eternally cold." },
            { "name": "Lightning Stone", "rarity": "EPIC", "value": 1300, "description": "A stone that crackles with contained electrical energy." },
            { "name": "King's Diamond", "rarity": "LEGENDARY", "value": 5000, "description": "A massive, perfectly cut diamond of legendary value." },
            { "name": "Queen's Emerald", "rarity": "LEGENDARY", "value": 5500, "description": "An emerald so large and perfect it was a queen's favorite." },
            { "name": "Archmage's Sapphire", "rarity": "LEGENDARY", "value": 6000, "description": "A sapphire rumored to contain the knowledge of an ancient archmage." },
            { "name": "Tear of a God", "rarity": "ARTIFACT", "value": -1, "description": "A solidified tear from a deity. Its value is beyond measure." },
            { "name": "The Heart of the Mountain", "rarity": "ARTIFACT", "value": -1, "description": "A single, flawless diamond the size of a human heart. It hums with the power of the earth." },
            { "name": "A Shard of Pure Creation", "rarity": "ARTIFACT", "value": -1, "description": "A gem that is all colors and no color at once. Looking at it hurts the eyes." }
        ]
    },
    "glyphs": {
        "weapon_enchants": [
            { "name": "Glyph of Minor Flame", "rarity": "COMMON", "effect": "enchant_weapon_fire_damage_tiny_duration", "duration": 300 },
            { "name": "Glyph of Static Charge", "rarity": "COMMON", "effect": "enchant_weapon_lightning_damage_tiny_duration", "duration": 300 },
            { "name": "Glyph of Sharpness", "rarity": "COMMON", "effect": "enchant_weapon_damage_bonus_1_duration", "duration": 180 },
            { "name": "Glyph of Chilling", "rarity": "COMMON", "effect": "enchant_weapon_cold_damage_tiny_duration", "duration": 300 },
            { "name": "Glyph of the Mosquito", "rarity": "COMMON", "effect": "enchant_weapon_lifesteal_minuscule_duration", "duration": 300 },
            { "name": "Glyph of Acidity", "rarity": "COMMON", "effect": "enchant_weapon_acid_damage_tiny_duration", "duration": 180 },
            { "name": "Glyph of Keen Edge", "rarity": "UNCOMMON", "effect": "enchant_weapon_crit_chance_small_duration", "duration": 600 },
            { "name": "Glyph of Weight", "rarity": "UNCOMMON", "effect": "enchant_weapon_knockback_chance_small_duration", "duration": 300 },
            { "name": "Glyph of Accuracy", "rarity": "UNCOMMON", "effect": "enchant_weapon_attack_bonus_1_duration", "duration": 600 },
            { "name": "Glyph of the Leech", "rarity": "UNCOMMON", "effect": "enchant_weapon_lifesteal_tiny_duration", "duration": 300 },
            { "name": "Glyph of the Serpent", "rarity": "UNCOMMON", "effect": "enchant_weapon_poison_damage_small_duration", "duration": 300 },
            { "name": "Glyph of Light", "rarity": "UNCOMMON", "effect": "enchant_weapon_sheds_light_duration", "duration": 3600 },
            { "name": "Glyph of Vampiric Touch", "rarity": "RARE", "effect": "enchant_weapon_lifesteal_small_duration", "duration": 180 },
            { "name": "Glyph of Stunning", "rarity": "RARE", "effect": "enchant_weapon_chance_to_stun_duration", "duration": 60 },
            { "name": "Glyph of the Fire Snake", "rarity": "RARE", "effect": "enchant_weapon_fire_damage_medium_duration", "duration": 300 },
            { "name": "Glyph of Sundering", "rarity": "RARE", "effect": "enchant_weapon_armor_piercing_medium_duration", "duration": 600 },
            { "name": "Glyph of Giant Slaying", "rarity": "RARE", "effect": "enchant_weapon_bonus_damage_vs_large_creatures_duration", "duration": 600 },
            { "name": "Glyph of Undead Bane", "rarity": "RARE", "effect": "enchant_weapon_bonus_damage_vs_undead_duration", "duration": 600 },
            { "name": "Glyph of Holy Retribution", "rarity": "EPIC", "effect": "enchant_weapon_radiant_damage_medium_duration_vs_evil", "duration": 300 },
            { "name": "Glyph of Hellfire", "rarity": "EPIC", "effect": "enchant_weapon_unholy_damage_medium_duration_vs_good", "duration": 300 },
            { "name": "Glyph of Vorpal Edge", "rarity": "EPIC", "effect": "enchant_weapon_crit_severity_large_duration", "duration": 180 },
            { "name": "Glyph of Banishing", "rarity": "EPIC", "effect": "enchant_weapon_chance_to_banish_outsider_duration", "duration": 60 },
            { "name": "Glyph of Dancing Blades", "rarity": "EPIC", "effect": "enchant_weapon_can_attack_on_its_own_duration", "duration": 60 },
            { "name": "Glyph of the Storm", "rarity": "EPIC", "effect": "enchant_weapon_chain_lightning_on_hit_chance_duration", "duration": 120 },
            { "name": "Glyph of Soulfire", "rarity": "LEGENDARY", "effect": "enchant_weapon_holyfire_damage_large_permanent", "permanent": true },
            { "name": "Glyph of Entropy", "rarity": "LEGENDARY", "effect": "enchant_weapon_disintegrate_on_crit_chance_permanent", "permanent": true },
            { "name": "Glyph of the Unmaker", "rarity": "ARTIFACT", "effect": "enchant_weapon_erases_target_from_existence_on_kill_single_use", "uses": 1 }
        ],
        "armor_enchants": [
            { "name": "Glyph of Iron Skin", "rarity": "COMMON", "effect": "enchant_armor_defense_tiny_duration", "duration": 300 },
            { "name": "Glyph of Mending", "rarity": "COMMON", "effect": "enchant_armor_slowly_repairs_self_duration", "duration": 3600 },
            { "name": "Glyph of Warmth", "rarity": "COMMON", "effect": "enchant_armor_cold_resistance_tiny_duration", "duration": 600 },
            { "name": "Glyph of Resistance (Fire)", "rarity": "COMMON", "effect": "enchant_armor_fire_resistance_tiny_duration", "duration": 600 },
            { "name": "Glyph of Resistance (Cold)", "rarity": "COMMON", "effect": "enchant_armor_cold_resistance_tiny_duration", "duration": 600 },
            { "name": "Glyph of Resistance (Acid)", "rarity": "COMMON", "effect": "enchant_armor_acid_resistance_tiny_duration", "duration": 600 },
            { "name": "Glyph of Shadowmeld", "rarity": "UNCOMMON", "effect": "enchant_armor_stealth_small_duration", "duration": 120 },
            { "name": "Glyph of the Chameleon", "rarity": "UNCOMMON", "effect": "enchant_armor_blend_with_surroundings_duration", "duration": 300 },
            { "name": "Glyph of Silence", "rarity": "UNCOMMON", "effect": "enchant_armor_muffle_sounds_duration", "duration": 600 },
            { "name": "Glyph of Vitality", "rarity": "UNCOMMON", "effect": "enchant_armor_max_hp_small_duration", "duration": 600 },
            { "name": "Glyph of False Life", "rarity": "UNCOMMON", "effect": "enchant_armor_temporary_hp_small_duration", "duration": 300 },
            { "name": "Glyph of the Bull", "rarity": "UNCOMMON", "effect": "enchant_armor_strength_bonus_1_duration", "duration": 600 },
            { "name": "Glyph of Deflection", "rarity": "RARE", "effect": "enchant_armor_spell_resistance_small_duration", "duration": 180 },
            { "name": "Glyph of Absorption", "rarity": "RARE", "effect": "enchant_armor_absorb_elemental_damage_small_pool_duration", "duration": 300 },
            { "name": "Glyph of Arrow-Catching", "rarity": "RARE", "effect": "enchant_armor_chance_to_negate_projectile_damage_duration", "duration": 180 },
            { "name": "Glyph of the Guardian", "rarity": "RARE", "effect": "enchant_armor_damage_reduction_flat_1_duration", "duration": 300 },
            { "name": "Glyph of Freedom", "rarity": "RARE", "effect": "enchant_armor_freedom_of_movement_duration", "duration": 120 },
            { "name": "Glyph of Spikes", "rarity": "RARE", "effect": "enchant_armor_thorns_damage_small_duration", "duration": 600 },
            { "name": "Glyph of Unyielding Fortitude", "rarity": "EPIC", "effect": "enchant_armor_damage_reduction_medium_duration", "duration": 60 },
            { "name": "Glyph of the Juggernaut", "rarity": "EPIC", "effect": "enchant_armor_cannot_be_knocked_prone_duration", "duration": 180 },
            { "name": "Glyph of Invulnerability", "rarity": "EPIC", "effect": "enchant_armor_damage_immunity_all_brief_ability", "uses": 1 },
            { "name": "Glyph of Etherealness", "rarity": "EPIC", "effect": "enchant_armor_become_ethereal_briefly_ability", "uses": 1 },
            { "name": "Glyph of the Blazing Soul", "rarity": "EPIC", "effect": "enchant_armor_fire_damage_aura_medium_duration", "duration": 60 },
            { "name": "Glyph of Displacement", "rarity": "EPIC", "effect": "enchant_armor_impose_disadvantage_on_attacks_against_wearer_duration", "duration": 60 },
            { "name": "Glyph of the Archon", "rarity": "LEGENDARY", "effect": "enchant_armor_elemental_immunity_all_permanent", "permanent": true },
            { "name": "Glyph of Soul-Shielding", "rarity": "LEGENDARY", "effect": "enchant_armor_immune_to_soul_draining_effects_permanent", "permanent": true },
            { "name": "Glyph of the Titan", "rarity": "ARTIFACT", "effect": "enchant_armor_become_colossal_size_single_use", "uses": 1 }
        ],
        "runes": [
            { "name": "Rune of Power", "rarity": "UNCOMMON", "socket_type": "weapon", "effect": "damage_bonus_1" },
            { "name": "Rune of Precision", "rarity": "UNCOMMON", "socket_type": "weapon", "effect": "attack_bonus_1" },
            { "name": "Rune of Striking", "rarity": "UNCOMMON", "socket_type": "weapon", "effect": "crit_chance_small" },
            { "name": "Rune of Resilience", "rarity": "UNCOMMON", "socket_type": "armor", "effect": "armor_bonus_1" },
            { "name": "Rune of Vigor", "rarity": "UNCOMMON", "socket_type": "armor", "effect": "max_hp_bonus_5" },
            { "name": "Rune of Warding", "rarity": "UNCOMMON", "socket_type": "armor", "effect": "magic_resistance_small" },
            { "name": "Rune of Slaying (Goblin)", "rarity": "UNCOMMON", "socket_type": "weapon", "effect": "bonus_damage_vs_goblins_2" },
            { "name": "Rune of Slaying (Orc)", "rarity": "UNCOMMON", "socket_type": "weapon", "effect": "bonus_damage_vs_orcs_2" },
            { "name": "Rune of Slaying (Beast)", "rarity": "UNCOMMON", "socket_type": "weapon", "effect": "bonus_damage_vs_beasts_2" },
            { "name": "Rune of Haste", "rarity": "RARE", "socket_type": "any", "effect": "initiative_bonus_2" },
            { "name": "Rune of Flight", "rarity": "RARE", "socket_type": "any", "effect": "grants_flight_briefly_1_per_day" },
            { "name": "Rune of Regeneration", "rarity": "RARE", "socket_type": "any", "effect": "hp_regen_1_per_minute" },
            { "name": "Rune of the Firelord", "rarity": "RARE", "socket_type": "weapon", "effect": "add_fire_damage_1d6" },
            { "name": "Rune of the Frostwind", "rarity": "RARE", "socket_type": "weapon", "effect": "add_cold_damage_1d6" },
            { "name": "Rune of the Vampire", "rarity": "RARE", "socket_type": "weapon", "effect": "lifesteal_tiny" },
            { "name": "Rune of the Stoneskin", "rarity": "RARE", "socket_type": "armor", "effect": "damage_reduction_physical_1" },
            { "name": "Rune of Spell-Guarding", "rarity": "RARE", "socket_type": "armor", "effect": "damage_reduction_magical_1" },
            { "name": "Rune of Elemental Aegis", "rarity": "RARE", "socket_type": "armor", "effect": "elemental_resistance_all_small" },
            { "name": "Rune of Spell-Shattering", "rarity": "EPIC", "socket_type": "weapon", "effect": "on_hit_dispel_magic_chance" },
            { "name": "Rune of Soul-Stealing", "rarity": "EPIC", "socket_type": "weapon", "effect": "on_kill_trap_soul_chance" },
            { "name": "Rune of Dragon's Breath", "rarity": "EPIC", "socket_type": "weapon", "effect": "grants_cone_of_fire_ability" },
            { "name": "Rune of Freedom", "rarity": "EPIC", "socket_type": "any", "effect": "immune_to_movement_impairing" },
            { "name": "Rune of True Sight", "rarity": "EPIC", "socket_type": "any", "effect": "grants_true_sight_1_minute_per_day" },
            { "name": "Rune of the Colossus", "rarity": "EPIC", "socket_type": "armor", "effect": "immune_to_forced_movement" },
            { "name": "Rune of the Archlich", "rarity": "LEGENDARY", "socket_type": "any", "effect": "grants_undead_trait", "curse": "attracts_holy_magic" },
            { "name": "Rune of Perfection", "rarity": "LEGENDARY", "socket_type": "any", "effect": "increase_primary_stat_by_2" },
            { "name": "Rune of the God-King", "rarity": "ARTIFACT", "socket_type": "any", "effect": "grants_divine_aura_and_ability_to_command_mortals" }
        ]
    },
    "ingredients": {
        "food": [
            { "name": "Wild Berries", "rarity": "COMMON", "effects": ["hunger_sate_small"] },
            { "name": "Foraged Nuts", "rarity": "COMMON", "effects": ["hunger_sate_small"] },
            { "name": "Grub", "rarity": "COMMON", "effects": ["hunger_sate_small", "minor_disgust"] },
            { "name": "Hard Tack", "rarity": "COMMON", "effects": ["hunger_sate_small", "tastes_like_sadness"] },
            { "name": "Dried Meat", "rarity": "COMMON", "effects": ["hunger_sate_medium"] },
            { "name": "Stale Bread", "rarity": "COMMON", "effects": ["hunger_sate_small", "unfulfilling"] },
            { "name": "Cave Mushroom (Edible)", "rarity": "COMMON", "effects": ["hunger_sate_small", "minor_night_vision_brief"] },
            { "name": "Luminescent Mushroom", "rarity": "COMMON", "effects": ["hunger_sate_small", "makes_you_glow_faintly"] },
            { "name": "River Fish", "rarity": "COMMON", "effects": ["hunger_sate_medium"] },
            { "name": "Spiced Wolf Meat", "rarity": "UNCOMMON", "effects": ["hunger_sate_medium", "stamina_regen_buff_short"] },
            { "name": "Bear Steak", "rarity": "UNCOMMON", "effects": ["hunger_sate_large", "temporary_strength_1"] },
            { "name": "Traveler's Stew", "rarity": "UNCOMMON", "effects": ["hunger_sate_medium", "warmth_buff"] },
            { "name": "Dwarven Stout", "rarity": "UNCOMMON", "effects": ["hunger_sate_tiny", "temporary_constitution_1", "temporary_dexterity_-1"] },
            { "name": "Gnomish Fire-Ale", "rarity": "UNCOMMON", "effects": ["hunger_sate_tiny", "fire_resistance_tiny", "hiccups"] },
            { "name": "Orcish Grog", "rarity": "UNCOMMON", "effects": ["hunger_sate_medium", "induces_rage_and_poor_decisions"] },
            { "name": "Elven Lembas Bread", "rarity": "RARE", "effects": ["hunger_sate_large_one_bite", "morale_boost"] },
            { "name": "Halfling Spiced Cake", "rarity": "RARE", "effects": ["hunger_sate_medium", "happiness_buff"] },
            { "name": "Wizard's Conjured Muffin", "rarity": "RARE", "effects": ["hunger_sate_medium", "tastes_vaguely_of_ozone", "restores_minor_mana"] },
            { "name": "Sunfruit", "rarity": "RARE", "effects": ["hunger_sate_medium", "minor_heal", "temporary_radiance_aura"] },
            { "name": "Moonpetal Salad", "rarity": "RARE", "effects": ["hunger_sate_small", "grants_darkvision_long", "calmness_buff"] },
            { "name": "Cockatrice Egg Omelette", "rarity": "RARE", "effects": ["hunger_sate_large", "temporary_petrification_resistance"] },
            { "name": "Dragon Chili Pepper", "rarity": "EPIC", "effects": ["hunger_sate_large", "fire_breath_one_shot", "internal_burning_sensation"] },
            { "name": "Hydra Heart Soup", "rarity": "EPIC", "effects": ["hunger_sate_full", "grants_regeneration_slow", "tastes_of_swamp_and_fury"] },
            { "name": "Cloud-Giant's Pear", "rarity": "EPIC", "effects": ["hunger_sate_massive", "grants_levitation_briefly"] },
            { "name": "Roasted Phoenix Heart", "rarity": "LEGENDARY", "effects": ["hunger_sate_full", "regenerate_limbs", "temporary_rebirth_on_death"] },
            { "name": "Unicorn Steak", "rarity": "LEGENDARY", "effects": ["hunger_sate_full", "cures_all_diseases", "major_curse_from_nature_gods"] },
            { "name": "Golden Apple of the Hesperides", "rarity": "LEGENDARY", "effects": ["hunger_sate_full", "grants_immortality_briefly", "attracts_dragons"] },
            { "name": "Ambrosia of the Gods", "rarity": "ARTIFACT", "effects": ["hunger_sate_forever", "permanent_stat_boost_random", "divine_favor"] },
            { "name": "The First Bread Ever Baked", "rarity": "ARTIFACT", "effects": ["hunger_sate_forever", "understanding_of_all_cultures"] },
            { "name": "A Sip from the Fountain of Youth", "rarity": "ARTIFACT", "effects": ["resets_age_to_prime", "memory_loss"] }
        ],
        "reagents": [
            { "name": "Bat Wing", "rarity": "COMMON", "alchemical_properties": ["darkness", "flight_minor"] },
            { "name": "Spider Leg", "rarity": "COMMON", "alchemical_properties": ["poison", "climbing"] },
            { "name": "Fish Scale", "rarity": "COMMON", "alchemical_properties": ["water", "breathing"] },
            { "name": "Grave Dust", "rarity": "COMMON", "alchemical_properties": ["undeath", "necrosis_minor"] },
            { "name": "Bone Powder", "rarity": "COMMON", "alchemical_properties": ["undeath", "fortitude_minor"] },
            { "name": "Rotten Egg", "rarity": "COMMON", "alchemical_properties": ["stench", "decay"] },
            { "name": "Sulfur Powder", "rarity": "COMMON", "alchemical_properties": ["fire", "combustion"] },
            { "name": "Saltpeter", "rarity": "COMMON", "alchemical_properties": ["combustion", "preservation"] },
            { "name": "Charcoal", "rarity": "COMMON", "alchemical_properties": ["fire", "filtration"] },
            { "name": "Quicksilver Globule", "rarity": "UNCOMMON", "alchemical_properties": ["transmutation", "speed_minor"] },
            { "name": "Lead Shaving", "rarity": "UNCOMMON", "alchemical_properties": ["transmutation", "weight"] },
            { "name": "Iron Filings", "rarity": "UNCOMMON", "alchemical_properties": ["magnetism", "strength_minor"] },
            { "name": "Mandrake Root", "rarity": "UNCOMMON", "alchemical_properties": ["paralysis", "life_simulation"] },
            { "name": "Nightshade Berries", "rarity": "UNCOMMON", "alchemical_properties": ["poison_strong", "sleep"] },
            { "name": "Toadstool Spores", "rarity": "UNCOMMON", "alchemical_properties": ["hallucination", "confusion"] },
            { "name": "Ectoplasm", "rarity": "UNCOMMON", "alchemical_properties": ["ethereal", "spirit_binding"] },
            { "name": "Ghostly Chains", "rarity": "UNCOMMON", "alchemical_properties": ["binding", "incorporeal"] },
            { "name": "Will-o'-Wisp Essence", "rarity": "UNCOMMON", "alchemical_properties": ["light", "electricity", "luring"] },
            { "name": "Troll Blood (Regenerative)", "rarity": "RARE", "alchemical_properties": ["regeneration_strong", "mutation_unstable"] },
            { "name": "Basilisk Blood (Petrifying)", "rarity": "RARE", "alchemical_properties": ["petrification", "earth"] },
            { "name": "Cockatrice Stomach Acid", "rarity": "RARE", "alchemical_properties": ["acid_strong", "transmutation_flesh_to_stone"] },
            { "name": "Unicorn Horn Powder", "rarity": "RARE", "alchemical_properties": ["purification", "healing_major"] },
            { "name": "Pegasus Feather", "rarity": "RARE", "alchemical_properties": ["flight_major", "speed_major"] },
            { "name": "Griffin's Claw", "rarity": "RARE", "alchemical_properties": ["nobility", "air_mastery"] },
            { "name": "Mind Flayer Brain Fluid", "rarity": "EPIC", "alchemical_properties": ["psionics", "intellect_drain", "madness"] },
            { "name": "Beholder's Central Eye Lens", "rarity": "EPIC", "alchemical_properties": ["magic_negation", "arcane_focus"] },
            { "name": "Aboleth Mucus", "rarity": "EPIC", "alchemical_properties": ["domination", "disease", "water_breathing_curse"] },
            { "name": "Powdered Dragonbone", "rarity": "EPIC", "alchemical_properties": ["strength_major", "elemental_infusion"] },
            { "name": "Dragon's Blood", "rarity": "EPIC", "alchemical_properties": ["power_major", "elemental_mastery"] },
            { "name": "Hydra's Tooth", "rarity": "EPIC", "alchemical_properties": ["regeneration_major", "multiplication"] },
            { "name": "Phoenix Ash", "rarity": "LEGENDARY", "alchemical_properties": ["rebirth", "fire_major", "purification"] },
            { "name": "Roc's Feather", "rarity": "LEGENDARY", "alchemical_properties": ["weather_control", "flight_titanic"] },
            { "name": "Kraken's Ink", "rarity": "LEGENDARY", "alchemical_properties": ["darkness_absolute", "pressure_resistance"] },
            { "name": "Tear of a Dying Star", "rarity": "LEGENDARY", "alchemical_properties": ["radiance", "cosmic_power", "creation_minor"] },
            { "name": "Shard of Pure Chaos", "rarity": "LEGENDARY", "alchemical_properties": ["mutation_major", "wild_magic", "unpredictability"] },
            { "name": "Essence of a Dead God", "rarity": "LEGENDARY", "alchemical_properties": ["divinity_waning", "power_immense_but_unstable"] },
            { "name": "Sand of Time", "rarity": "ARTIFACT", "alchemical_properties": ["time_manipulation", "aging", "paradox"] },
            { "name": "The Philosopher's Stone", "rarity": "ARTIFACT", "alchemical_properties": ["transmutation_perfect", "immortality", "panacea"] },
            { "name": "A Drop of the Primordial Sea", "rarity": "ARTIFACT", "alchemical_properties": ["creation_of_life", "evolution", "all_elements"] }
        ]
    },
    "trinkets": {
        "charms": [
            { "name": "Lucky Rabbit's Foot", "rarity": "COMMON", "effects": ["luck_very_minor_passive"] },
            { "name": "Piece of Lodestone", "rarity": "COMMON", "effects": ["always_points_north"] },
            { "name": "A bird's feather that never gets dirty", "rarity": "COMMON", "effects": ["cleanliness"] },
            { "name": "Polished Worry Stone", "rarity": "COMMON", "effects": ["stress_reduction_tiny_passive"] },
            { "name": "A small, smooth river stone", "rarity": "COMMON", "effects": ["calming_to_hold"] },
            { "name": "A child's wooden toy soldier", "rarity": "COMMON", "effects": ["reminds_you_of_home"] },
            { "name": "A single, perfect feather", "rarity": "COMMON", "effects": ["feeling_of_lightness"] },
            { "name": "A silken ribbon from a festival", "rarity": "COMMON", "effects": ["a_happy_memory"] },
            { "name": "A seashell that whispers the sound of a forgotten ocean", "rarity": "COMMON", "effects": ["tranquility"] },
            { "name": "Four-Leaf Clover (Pressed)", "rarity": "UNCOMMON", "effects": ["luck_small_once_per_day"] },
            { "name": "Dowsing Rod", "rarity": "UNCOMMON", "effects": ["twitches_when_near_water"] },
            { "name": "Silver Bell", "rarity": "UNCOMMON", "effects": ["rings_in_the_presence_of_undead"] },
            { "name": "Memento of a Lost Love", "rarity": "UNCOMMON", "effects": ["morale_boost_when_viewed", "sadness_debuff_if_damaged"] },
            { "name": "A lock of hair from a loved one", "rarity": "UNCOMMON", "effects": ["resistance_to_fear"] },
            { "name": "The first coin you ever earned", "rarity": "UNCOMMON", "effects": ["reminds_you_of_your_goals"] },
            { "name": "Witch-Eye Charm", "rarity": "UNCOMMON", "effects": ["ward_against_hexes_minor"] },
            { "name": "Anti-Poison Medallion", "rarity": "UNCOMMON", "effects": ["changes_color_in_presence_of_poison"] },
            { "name": "A small, intricately carved wooden bird", "rarity": "UNCOMMON", "effects": ["sings_faintly_at_dawn"] },
            { "name": "Shark Tooth Necklace", "rarity": "RARE", "effects": ["intimidation_bonus_vs_aquatic", "swim_speed_tiny"] },
            { "name": "Bear Claw Talisman", "rarity": "RARE", "effects": ["strength_bonus_tiny_passive"] },
            { "name": "Eagle Feather Charm", "rarity": "RARE", "effects": ["perception_bonus_tiny_passive"] },
            { "name": "Hand of Glory (pickled)", "rarity": "RARE", "effects": ["holds_light_spell", "unlocks_doors_for_thieves"], "curse": "attracts_undead" },
            { "name": "Ever-warm Stone", "rarity": "RARE", "effects": ["provides_warmth_in_cold_weather"] },
            { "name": "A vial of water from a holy spring", "rarity": "RARE", "effects": ["can_cure_minor_diseases_once"] },
            { "name": "A Faerie in a Jar", "rarity": "EPIC", "effects": ["provides_light", "can_cast_minor_illusion_once_a_day", "constant_giggling"] },
            { "name": "A compass that points to what you desire most", "rarity": "EPIC", "effects": ["quest_guidance_strong", "can_be_misleading"] },
            { "name": "A single scale from the World Serpent", "rarity": "EPIC", "effects": ["indestructible", "provides_minor_damage_resistance"] },
            { "name": "Miniature Anvil of the Forge God", "rarity": "LEGENDARY", "effects": ["guarantees_success_on_one_crafting_check"] },
            { "name": "A single, unmelting snowflake", "rarity": "LEGENDARY", "effects": ["can_freeze_a_small_body_of_water_once"] },
            { "name": "A whisper from a dead god, bottled", "rarity": "LEGENDARY", "effects": ["provides_forbidden_knowledge_once", "risk_of_madness"] },
            { "name": "The Coin of Fate", "rarity": "ARTIFACT", "effects": ["flip_to_determine_outcome_of_major_event", "50/50_chance_of_boon_or_calamity"] },
            { "name": "A perfect, tiny sphere of absolute darkness", "rarity": "ARTIFACT", "effects": ["absorbs_all_light_and_hope_around_it"] },
            { "name": "A clock that counts down to the end of the world", "rarity": "ARTIFACT", "effects": ["you_know_exactly_how_much_time_is_left"] }
        ],
        "oddities": [
            { "name": "Bent Spoon", "rarity": "COMMON", "description": "It's just a bent spoon. Or is it?" },
            { "name": "A sock with a hole in it", "rarity": "COMMON", "description": "You can't bring yourself to throw it away." },
            { "name": "A piece of string of indeterminate length", "rarity": "COMMON", "description": "No matter how much you unroll, there seems to be more." },
            { "name": "Pet Rock with Googly Eyes", "rarity": "COMMON", "description": "A steadfast companion. His name is Reginald." },
            { "name": "A ball of lint", "rarity": "COMMON", "description": "You found it in your pocket." },
            { "name": "A single, left-footed boot for a pixie", "rarity": "COMMON", "description": "You wonder where the other one is." },
            { "name": "A Button from a King's Coat", "rarity": "COMMON", "description": "Or so the merchant claimed." },
            { "name": "A receipt for 'one soul'", "rarity": "COMMON", "description": "The merchant seemed trustworthy." },
            { "name": "A wanted poster for someone who looks exactly like you", "rarity": "COMMON", "description": "The reward is insultingly small." },
            { "name": "Never-ending Gobstopper (Faintly Sweet)", "rarity": "UNCOMMON", "description": "It really does seem to last forever." },
            { "name": "A small bag of marbles that all look like eyeballs", "rarity": "UNCOMMON", "description": "They occasionally blink." },
            { "name": "A teacup that is always full of lukewarm tea", "rarity": "UNCOMMON", "description": "It's not very good tea." },
            { "name": "Smoking Pipe that Blows Square Bubbles", "rarity": "UNCOMMON", "description": "A marvel of Gnomish engineering." },
            { "name": "A tiny, ornate music box that plays a song you've never heard", "rarity": "UNCOMMON", "description": "The song is both beautiful and unsettling." },
            { "name": "A map of a city that doesn't exist", "rarity": "UNCOMMON", "description": "The streets and landmarks are meticulously detailed." },
            { "name": "Bottled Faerie (Grumpy)", "rarity": "RARE", "effects": ["provides_faint_light", "occasional_insults"] },
            { "name": "A petrified egg that is warm to the touch", "rarity": "RARE", "description": "You can hear something moving inside." },
            { "name": "A portrait of a long-dead noble that winks at you", "rarity": "RARE", "description": "No one else seems to notice." },
            { "name": "Unbreakable Teacup", "rarity": "RARE", "description": "You have tried everything. It will not break." },
            { "name": "A snow globe that contains a tiny, raging blizzard", "rarity": "RARE", "description": "If you shake it, you hear tiny screams." },
            { "name": "A book that, when opened, is just a perfect mirror", "rarity": "RARE", "description": "It reflects what you truly are." },
            { "name": "Orb of Pondering (Slightly Cracked)", "rarity": "EPIC", "description": "Contemplating it may reveal... something? It's probably nothing." },
            { "name": "A key that fits every lock, but unlocks none of them", "rarity": "EPIC", "description": "It is profoundly frustrating." },
            { "name": "A bottle containing the scent of a forgotten memory", "rarity": "EPIC", "description": "Opening it brings both joy and immense sorrow." },
            { "name": "A Perfectly Normal Human Skull", "rarity": "EPIC", "description": "It occasionally whispers shopping lists. You think its name is Bob." },
            { "name": "A deck of cards where every card is the Ace of Spades", "rarity": "EPIC", "description": "Playing with it feels like you're tempting fate." },
            { "name": "A chameleon that has decided to be plaid", "rarity": "EPIC", "description": "It refuses to change to any other pattern." },
            { "name": "A Rubik's Cube with 4 Dimensions", "rarity": "LEGENDARY", "description": "Solving it is rumored to grant enlightenment or an aneurysm." },
            { "name": "A black cat that is a doorway to a small pocket dimension", "rarity": "LEGENDARY", "description": "The dimension is filled with yarn and napping spots." },
            { "name": "A seed that grows into a tree bearing fruit of your favorite memories", "rarity": "LEGENDARY", "description": "Eating the fruit lets you relive the memory perfectly." },
            { "name": "The Last Dodo Egg", "rarity": "ARTIFACT", "description": "An egg from a creature long extinct. It is still warm." },
            { "name": "A Complaint Box for the Gods", "rarity": "ARTIFACT", "description": "It's completely full. No one ever empties it." },
            { "name": "The Procrastinator's Amulet", "rarity": "ARTIFACT", "description": "You'll figure out what it does later." }
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

    static getRandomItemKey(category, context) {
        if (!category) return null;

        const categoryMap = {
            'weapon': 'weapons',
            'armor': 'armor',
            'magical': 'magical',
            'consumable': 'magical',      // Potions are in itemTemplates.magical
            'scroll': 'magical',          // Scrolls are in itemTemplates.magical
            'book': 'questItems',         // Books are in itemTemplates.questItems
            'artifact': 'questItems',     // Artifacts are in itemTemplates.questItems
            'tool': 'tools',
            'jewelry': 'jewelry',
            'crafting': 'crafting',
            'glyph': 'glyphs',
            'ingredient': 'ingredients',
            'trinket': 'trinkets',
            'quest': 'questItems'
        };
        const categoryKey = categoryMap[category.toLowerCase()];
        const subTypeKey = context.subType ? context.subType.toLowerCase() : null;

        if (!categoryKey) {
            console.error(`[ITEM_GEN_ERROR] No mapping for category "${category}".`);
            return null;
        }

        const categoryTemplates = itemTemplates[categoryKey];
        if (!categoryTemplates) {
            console.error(`[ITEM_GEN_ERROR] Category key "${categoryKey}" not found in itemTemplates.`);
            return null;
        }

        // --- NEW, SIMPLER, SAFER LOGIC ---

        // 1. Get ALL possible items from the correct top-level category first.
        let masterKeyPool = [];
        for (const subType in categoryTemplates) {
            if (typeof categoryTemplates[subType] === 'object' && categoryTemplates[subType] !== null) {
                masterKeyPool.push(...Object.keys(categoryTemplates[subType]));
            }
        }

        if (masterKeyPool.length === 0) {
            console.error(`[ITEM_GEN_ERROR] No items found anywhere in category "${categoryKey}".`);
            return null;
        }

        // 2. If a specific subtype was requested, try to use it.
        let finalKeyPool = [];
        if (subTypeKey && categoryTemplates[subTypeKey]) {
            finalKeyPool = Object.keys(categoryTemplates[subTypeKey]);
        }

        // 3. If the specific subtype pool is empty, use the master pool for that category.
        if (finalKeyPool.length === 0) {
            console.warn(`[ITEM_GEN_WARN] SubType "${subTypeKey}" not found or empty. Using master pool for "${categoryKey}".`);
            finalKeyPool = masterKeyPool;
        }

        // Return a random item from the final, correct pool.
        return finalKeyPool[Math.floor(Math.random() * finalKeyPool.length)];
    }

    static getRandomItemTemplate(category, subType) {
        // 1. Map the input category to the correct key in itemTemplates.
        const categoryMap = { 'weapon': 'weapons', 'armor': 'armor' };
        const categoryKey = categoryMap[category.toLowerCase()];

        if (!categoryKey || !itemTemplates[categoryKey]) {
            console.error(`[ItemGenerator] Invalid category provided: ${category}`);
            return null;
        }

        const categoryTemplates = itemTemplates[categoryKey];
        let potentialItems = [];

        // 2. Try to get items from the specific subtype first (e.g., 'staves' within 'weapons').
        if (subType && categoryTemplates[subType.toLowerCase()]) {
            potentialItems = categoryTemplates[subType.toLowerCase()];
        }

        // 3. If no items were found in the specific subtype, create a master list of ALL items in the parent category.
        if (potentialItems.length === 0) {
            console.warn(`[ItemGenerator] SubType "${subType}" not found or empty for category "${categoryKey}". Expanding search.`);
            let allItemsInCategory = [];
            // Iterate over all subtypes in the category (e.g., 'swords', 'staves', etc.)
            for (const sub of Object.values(categoryTemplates)) {
                if (Array.isArray(sub)) {
                    // Add all items from this subtype array to the master list.
                    allItemsInCategory.push(...sub);
                }
            }
            potentialItems = allItemsInCategory;
        }

        // 4. If we still have no items, log an error and return null.
        if (potentialItems.length === 0) {
            console.error(`[ItemGenerator] No items found for category "${categoryKey}" even after fallback.`);
            return null;
        }

        // 5. Select and return a random item object from the final pool.
        const randomTemplate = potentialItems[Math.floor(Math.random() * potentialItems.length)];
        return JSON.parse(JSON.stringify(randomTemplate)); // Return a deep copy
    }
    
    static generateItem(context = {}) {
        const {
            category = this.getRandomCategory(),
            rarity = this.getRandomRarityKey(),
            subType = null
        } = context;

        console.log(`[DEBUG_ITEM_GEN] Starting generateItem for: Category=${category}, Rarity=${rarity}, SubType=${subType}`);

        // This function now correctly gets a random item template object.
        const baseItem = this.getRandomItemTemplate(category, subType);

        if (!baseItem) {
            console.error("Could not find a base item for generation. Category:", category, "SubType:", subType);
            // Create a fallback item instead of returning null
            return this.createFallbackItem(context.narrativeContext || 'Unknown Item', context.playerLevel || 1);
        }

        // Force the rarity from the context onto the chosen template.
        baseItem.rarity = rarity; 

        // The rest of the enhancement process remains the same.
        let enhancedItem = this.enhanceItem(baseItem, context); 

        return {
            id: `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            ...enhancedItem,
            generatedAt: Date.now()
        };
    }

    static createFallbackItem(itemName, playerLevel = 1) {
        const cleanName = (itemName || 'Unknown Item').replace(/^(the|a|an)\s+/i, '').trim();
        const capitalizedName = cleanName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        
        return {
            id: `fallback_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            name: capitalizedName,
            type: 'trinket',
            rarity: 'COMMON',
            description: `A ${cleanName.toLowerCase()} that you've encountered. While it appears ordinary, it might have some value or significance in your adventures.`,
            value: Math.max(1, Math.floor(Math.random() * (playerLevel * 5)) + 10),
            effects: [],
            isIdentified: true,
            source: 'item_generator_fallback',
            slot: null
        };
    }


    static generateItemId() {
        return `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    // NEW FUNCTION: This function sends the template to Gemini for creative enhancement
    static async enhanceItemWithAI(baseItem, context) {
        // Construct a detailed prompt for the AI
        const prompt = `
            You are a master RPG item designer. Based on the following template and context, create a more interesting and unique version of this item.

            ITEM TEMPLATE (Do not change core function like damage/armor values unless instructed):
            ${JSON.stringify(baseItem, null, 2)}

            CONTEXT:
            - Player Level: ${context.playerLevel || 'N/A'}
            - Player Class: ${context.playerClass || 'N/A'}
            - Location: ${context.locationContext || 'A mysterious place'}
            - Quest: ${context.questContext?.title || 'No specific quest'}
            - Enemy: ${context.enemyContext || 'No specific enemy'}

            TASKS:
            1.  **Name:** Generate a creative and evocative name. Use a prefix and/or suffix from the provided lists if it fits.
            2.  **Description:** Write a new, flavorful description (2-3 sentences) that hints at the item's history or nature based on the context.
            3.  **Effects (Optional):** You can suggest one additional thematic minor effect string that fits the new name and description.

            PREFIX IDEAS: ${dynamicItemPrefixes.join(', ')}
            SUFFIX IDEAS: ${dynamicItemSuffixes.join(', ')}

            Respond with ONLY valid JSON in this exact format:
            {
                "name": "Generated Creative Name",
                "description": "Your new 2-3 sentence flavorful description.",
                "added_effect": "A single new thematic effect string (or null)"
            }
        `;

        try {
            // This assumes callGeminiAPI is globally available or imported
            const response = await callGeminiAPI(prompt, 0.85, 400, false);
            const jsonMatch = response.match(/\{[\s\S]*\}/);

            if (jsonMatch) {
                const aiData = JSON.parse(jsonMatch[0]);

                // Merge AI creativity with base item stability
                const finalItem = { ...baseItem };
                finalItem.name = aiData.name || baseItem.name;
                finalItem.description = aiData.description || baseItem.description;

                if (aiData.added_effect) {
                    // Add the new effect, ensuring no duplicates
                    finalItem.effects = [...new Set([...(baseItem.effects || []), aiData.added_effect])];
                }

                return finalItem;
            }
        } catch (error) {
            console.error("AI item enhancement failed. Returning base item.", error);
        }

        // Fallback to the original base item if AI fails
        return baseItem;
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

    static getBaseItem(itemKey, rarity, subType) { // <-- FIX: Changed signature to not expect a 'context' object
        if (!itemKey) return null; // <-- FIX: Exit if itemKey is null

        let template;
        // Search through all categories and subtypes to find the itemKey
        for (const cat of Object.values(itemTemplates)) {
            if (cat[itemKey]) {
                template = cat[itemKey];
                break;
            }
            for (const subCat of Object.values(cat)) {
                if (subCat[itemKey]) {
                    template = subCat[itemKey];
                    break;
                }
            }
            if (template) break;
        }

        if (!template) {
            console.error(`[ITEM_GEN_ERROR] Template for itemKey "${itemKey}" not found.`);
            return null;
        }
        return { ...template, rarity: rarity || 'COMMON' };
    }

    static selectFromTemplates(templateArray, rarity, itemType, subTypeHint = null) {
        if (!templateArray) return null;

        let filteredItems = templateArray;
        // REMOVED: The line `filteredItems = templateArray.filter(i => i.subType === subTypeHint);`
        // It's incorrect as individual templates don't have 'subType' property.
        // The 'templateArray' itself already implies the subType.

        const rarityItems = filteredItems.filter(i => i.rarity === rarity);
        if (rarityItems.length > 0) {
            return { ...rarityItems[Math.floor(Math.random() * rarityItems.length)], type: itemType, subType: subTypeHint || itemType }; // Ensure subType is set
        }

        // If no items of specific rarity, try one step lower rarity with the already filtered list
        if (rarity !== 'COMMON') {
            const rarities = Object.keys(itemRarity);
            const currentRarityIndex = rarities.indexOf(rarity);
            if (currentRarityIndex > 0) {
                const lowerRarity = rarities[currentRarityIndex - 1];
                const lowerRarityItems = filteredItems.filter(i => i.rarity === lowerRarity);
                if (lowerRarityItems.length > 0) {
                    return { ...lowerRarityItems[Math.floor(Math.random() * lowerRarityItems.length)], type: itemType, subType: subTypeHint || itemType };
                }
            }
        }

        // If still no specific rarity match, try any item from the initially filtered list (by subTypeHint if applicable)
        if (filteredItems.length > 0) {
            return { ...filteredItems[Math.floor(Math.random() * filteredItems.length)], type: itemType, rarity: rarity, subType: subTypeHint || itemType }; // Force rarity and set subType
        }

        // Fallback: pick any item from the original templateArray if all filters fail
        if (templateArray.length > 0) {
           return { ...templateArray[Math.floor(Math.random() * templateArray.length)], type: itemType, rarity: rarity, subType: subTypeHint || itemType };
        }
        return null;
    }

    static generateWeapon(rarity, subTypeHint = null) {
        const weaponCategories = Object.keys(itemTemplates.weapons);
        let weaponType = subTypeHint; // Try to use the hint

        if (!weaponType || !weaponCategories.includes(weaponType)) { // If hint is invalid or not provided, pick randomly
            weaponType = weaponCategories[Math.floor(Math.random() * weaponCategories.length)];
        }

        const weapons = itemTemplates.weapons[weaponType];
        // Pass weaponType as subTypeHint to selectFromTemplates to ensure it populates 'subType' property on the returned item
        const selected = this.selectFromTemplates(weapons, rarity, itemCategories.WEAPON, weaponType); 
        return selected || this.generateCustomWeapon(rarity, weaponType);
    }

    static generateArmor(rarity, subTypeHint = null) {
        const armorCategories = Object.keys(itemTemplates.armor);
        let armorType = subTypeHint; // Try to use the hint

        if (!armorType || !armorCategories.includes(armorType)) { // If hint is invalid or not provided, pick randomly
            armorType = armorCategories[Math.floor(Math.random() * armorCategories.length)];
        }

        const armors = itemTemplates.armor[armorType];
        // Pass armorType as subTypeHint to selectFromTemplates to ensure it populates 'subType' property on the returned item
        const selected = this.selectFromTemplates(armors, rarity, itemCategories.ARMOR, armorType); 
        return selected || this.generateCustomArmor(rarity, armorType);
    }

    static generateMagicalItem(rarity, subTypeHint = null) { // Broad category for wands, orbs, talismans
        const magicalTypes = ['wands', 'orbs', 'talismans']; // from itemTemplates.magical
        let typeKey = subTypeHint; // Try to use the hint

        if (!typeKey || !magicalTypes.includes(typeKey)) { // If hint is invalid or not provided, pick randomly
            typeKey = magicalTypes[Math.floor(Math.random() * magicalTypes.length)];
        }

        const items = itemTemplates.magical[typeKey];
        // Pass typeKey as subTypeHint to selectFromTemplates to ensure it populates 'subType' property on the returned item
        const selected = this.selectFromTemplates(items, rarity, itemCategories.MAGICAL, typeKey); 

        if (selected) return { ...selected, subType: typeKey };
        return this.generateCustomMagicalDevice(rarity, typeKey);
    }

    static generateTool(rarity) {
        const toolCategories = Object.keys(itemTemplates.tools);
        const toolType = toolCategories[Math.floor(Math.random() * toolCategories.length)];
        const tools = itemTemplates.tools[toolType];
        const selected = this.selectFromTemplates(tools, rarity, itemCategories.TOOL);
        return selected || this.generateCustomTool(rarity, toolType);
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

    static generateCustomWeapon(rarity, weaponType = 'swords') {
        const damages = {
            'COMMON': ['1d4', '1d6'], 'UNCOMMON': ['1d6+1', '1d8'], 'RARE': ['1d8+1', '1d10'],
            'EPIC': ['1d10+2', '1d12', '2d6'], 'LEGENDARY': ['2d8+2', '2d10'], 'ARTIFACT': ['2d12+3', '3d8'], 'MYTHIC': ['3d10+5', '4d8']
        };
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];
        // Determine weaponBaseName based on weaponType
        let weaponBaseName = weaponType.replace(/s$/, ''); // Remove 's' from end (e.g., 'swords' -> 'sword')
        if (weaponType === 'fistWeapons') weaponBaseName = 'Fist Weapon'; // Special case for clarity

        const damage = damages[rarity] ? damages[rarity][Math.floor(Math.random() * damages[rarity].length)] : '1d6';

        // Determine slot based on weaponType
        let slot = 'mainHand';
        if (['daggers', 'fistWeapons'].includes(weaponType) && Math.random() < 0.5) { // Daggers/fist weapons can be off-hand
            slot = 'offHand';
        }

        return {
            name: `${prefix} ${weaponBaseName.charAt(0).toUpperCase() + weaponBaseName.slice(1)} ${suffix}`,
            type: itemCategories.WEAPON,
            subType: weaponType,
            rarity: rarity,
            damage: damage,
            slot: slot, // ADDED: Crucial for equipping
            effects: this.generateEffects(rarity, itemCategories.WEAPON),
            description: `A ${rarity.toLowerCase()} ${weaponBaseName.toLowerCase()} with a ${prefix.toLowerCase()} aura.` // ADDED default description
        };
    }

    static generateCustomArmor(rarity, armorType = 'chestplates') {
        const armorValues = { // Base AC
            'COMMON': [1,3], 'UNCOMMON': [2,4], 'RARE': [3,6],
            'EPIC': [5,8], 'LEGENDARY': [7,10], 'ARTIFACT': [9,12], 'MYTHIC': [11,15]
        };
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];
        // Determine armorBaseName based on armorType
        let armorBaseName = armorType.replace(/s$/, ''); // Remove 's' from end (e.g., 'helmets' -> 'helmet')
        if (armorType === 'chestplates') armorBaseName = 'Chestplate'; // Special case

        const baseArmor = armorValues[rarity] ? (armorValues[rarity][0] + Math.floor(Math.random() * (armorValues[rarity][1] - armorValues[rarity][0] + 1))) : 1;

        return {
            name: `${prefix} ${armorBaseName.charAt(0).toUpperCase() + armorBaseName.slice(1)} ${suffix}`,
            type: itemCategories.ARMOR,
            subType: armorType,
            rarity: rarity,
            armor: baseArmor,
            slot: armorType.replace(/s$/, ''), // ADDED: Uses the singular form of armorType as the slot (e.g., 'head', 'chest')
            effects: this.generateEffects(rarity, itemCategories.ARMOR),
            description: `A ${rarity.toLowerCase()} ${armorBaseName.toLowerCase()} that feels ${prefix.toLowerCase()} and protective.` // ADDED default description
        };
    }

    static generateCustomMagicalDevice(rarity, deviceType = 'orbs') {
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const suffix = dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)];
        const deviceBaseName = deviceType.replace(/s$/, ''); // e.g. 'wand', 'orb'

        // Determine slot for magical devices
        let slot = 'mainHand'; // Default for most wands/staves
        if (deviceType === 'orbs' || deviceType === 'shields') { // Orbs can be off-hand, shields are off-hand
            slot = 'offHand';
        } else if (deviceType === 'talismans') { // Talismans are amulets
            slot = 'amulet';
        }

        return {
            name: `${prefix} ${deviceBaseName.charAt(0).toUpperCase() + deviceBaseName.slice(1)} ${suffix}`,
            type: itemCategories.MAGICAL,
            subType: deviceType,
            rarity: rarity,
            slot: slot, // ADDED: Crucial for equipping
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
            slot: null, // Scrolls are not equipped, set to null or omit if not applicable
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
            slot: null, // Books are not equipped
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
            slot: null, // Consumables are not equipped
            effect: baseEffect, // Simpler effect for custom
            effects: this.generateConsumableEffects(rarity), // Can add status effect strings
            description: `A bubbling concoction with a ${potionType.toLowerCase()} aroma.`
        };
    }

    static generateCustomTool(rarity, toolType = 'gathering') {
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const toolName = toolType === 'gathering' ? 'Harvester' : 'Kit';
        return {
            name: `${prefix} ${toolName} ${dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)]}`,
            type: itemCategories.TOOL,
            subType: toolType,
            rarity: rarity,
            slot: null, // Tools are not equipped (unless they are also weapons/armor)
            efficiency: 1 + (itemRarity[rarity]?.multiplier || 1) * 0.1,
            effects: this.generateEffects(rarity, itemCategories.TOOL),
            description: `A ${rarity.toLowerCase()} ${toolName.toLowerCase()} for various tasks.`
        };
    }

    static generateCustomJewelry(rarity, jewelryType = 'rings') {
        const prefix = dynamicItemPrefixes[Math.floor(Math.random() * dynamicItemPrefixes.length)];
        const jewelryBaseName = jewelryType.replace(/s$/, ''); // ring from rings

        // Determine the correct slot based on jewelry type
        let slot;
        if (jewelryType === 'rings') {
            slot = Math.random() < 0.5 ? 'ring1' : 'ring2';
        } else if (jewelryType === 'amulets') {
            slot = 'amulet';
        } else {
            slot = jewelryType.replace(/s$/, ''); // fallback to singular form
        }

        return {
            name: `${prefix} ${jewelryBaseName.charAt(0).toUpperCase() + jewelryBaseName.slice(1)} ${dynamicItemSuffixes[Math.floor(Math.random() * dynamicItemSuffixes.length)]}`,
            type: itemCategories.JEWELRY, // Changed from itemCategories.JEWELRY to 'armor' in previous fix attempt, but jewelry should be its own type with a slot.
            subType: jewelryType,
            slot: slot, // ADDED: Crucial for equipping
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

        // Check for undefined or null items
        if (!item) {
            console.error("Attempted to add an undefined or null item to inventory. Creating a placeholder.");
            // Create a placeholder for the unidentified item
            const unidentifiedItem = {
                id: `unidentified_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
                name: "Unidentified Item",
                description: "A mysterious item shrouded in magic. Its true nature is hidden. Perhaps it can be appraised?",
                unidentified: true, // Special flag to identify this item later
                value: 5, // A nominal value
                rarity: 'COMMON'
            };
            if (!player.inventory) {
                player.inventory = [];
            }
            player.inventory.push(unidentifiedItem);
            displayMessage("You found something, but its form is unclear...", "info");
            this.saveInventoryToStorage(player);
            return; // Exit the function to prevent further processing
        }
        
        if (!player.inventory) {
            player.inventory = [];
        }
        if (!item.id) {
            item.id = ItemGenerator.generateItemId();
        }

        // ADDED: Deep copy the item before pushing to inventory
        // This creates a new, independent object that won't be affected by external references
        const itemToAdd = JSON.parse(JSON.stringify(item)); 

        player.inventory.push(itemToAdd); // Push the deep copy
        console.log('ItemManager: Added item to inventory:', itemToAdd.name, itemToAdd.id); // Use itemToAdd for logging
        console.log('ItemManager: Current inventory length:', player.inventory.length);
        this.saveInventoryToStorage(player);
        return true;
    }

    static equipItem(player, itemIndex) { // MODIFIED: Added 'static' and 'player' parameter
        // --- Start of Debugging Logs ---
        console.log("--- ItemManager.equipItem called ---"); // Log is now in the static method
        console.log("Item index:", itemIndex);
        if (!player.inventory || !player.inventory[itemIndex]) {
            displayMessage("Item not found in inventory at index: " + itemIndex, 'error');
            console.error("Item not found in inventory at index:", itemIndex, "Current inventory:", JSON.stringify(player.inventory));
            return;
        }
        const item = player.inventory[itemIndex];
        console.log("Item to equip:", JSON.stringify(item, null, 2));
        console.log("Current player.equipment state:", JSON.stringify(player.equipment, null, 2));
        // --- End of Debugging Logs ---

        if (!item.slot) {
            displayMessage("This item cannot be equipped (no slot defined).", 'error');
            return;
        }

        // Initialize equipment object and slots if they don't exist
        if (!player.equipment) {
            player.equipment = {};
        }
        const defaultSlots = { head: null, chest: null, hands: null, legs: null, feet: null, mainHand: null, offHand: null, amulet: null, ring1: null, ring2: null, back: null };
        for (const slotKey in defaultSlots) {
            if (player.equipment[slotKey] === undefined) {
                player.equipment[slotKey] = null;
            }
        }

        let targetSlot = item.slot; // Default targetSlot is the item's defined slot

        // Special handling for rings to find an available slot or replace ring1
        if (item.type === 'jewelry' && (item.slot === 'ring' || item.slot === 'ring1' || item.slot === 'ring2')) { // More specific check for rings
            console.log("Processing as a ring. Item slot:", item.slot);
            console.log("ring1 currently:", player.equipment.ring1 ? player.equipment.ring1.name : "Empty");
            console.log("ring2 currently:", player.equipment.ring2 ? player.equipment.ring2.name : "Empty");

            if (player.equipment.ring1 === null) {
                targetSlot = 'ring1';
                console.log("Targeting empty ring1 slot.");
            } else if (player.equipment.ring2 === null) {
                targetSlot = 'ring2';
                console.log("Targeting empty ring2 slot.");
            } else {
                // Both slots are full, default to replacing ring1
                targetSlot = 'ring1';
                displayMessage("Both ring slots are full. Replacing the ring in the first slot.", "info");
                console.log("Both ring slots full. Targeting ring1 for replacement.");
            }
        } else {
            console.log(`Item is not a ring or has a specific non-ring slot. Target slot: ${targetSlot}`);
        }

        // Check if the targetSlot is valid in player.equipment
        if (!player.equipment.hasOwnProperty(targetSlot)) {
            displayMessage(`Cannot equip: Invalid target slot '${targetSlot}' on player equipment object.`, 'error');
            console.error(`Invalid target slot: ${targetSlot}. Player equipment keys: ${Object.keys(player.equipment)}`);
            return;
        }

        // Unequip existing item in the targetSlot if there is one
        if (player.equipment[targetSlot] !== null) {
            const oldItem = player.equipment[targetSlot];
            if (!player.inventory) player.inventory = []; // Ensure inventory array exists
            player.inventory.push(oldItem);
            displayMessage(`Unequipped ${oldItem.name} from ${targetSlot}.`, 'info');
            console.log(`Unequipped ${oldItem.name} from ${targetSlot}.`);
        }

        // Check if the targetSlot is valid in player.equipment
        if (!player.equipment.hasOwnProperty(targetSlot)) {
            displayMessage(`Cannot equip: Invalid target slot '${targetSlot}' on player equipment object.`, 'error');
            console.error(`Invalid target slot: ${targetSlot}. Player equipment keys: ${Object.keys(player.equipment)}`);
            return;
        }

        // Unequip existing item in the targetSlot if there is one
        if (player.equipment[targetSlot] !== null) {
            const oldItem = player.equipment[targetSlot];
            if (!player.inventory) player.inventory = [];
            player.inventory.push(oldItem);
            displayMessage(`Unequipped ${oldItem.name} from ${targetSlot}.`, 'info');
            console.log(`Unequipped ${oldItem.name} from ${targetSlot}.`);
        }

        // NEW LOGIC: Handle two-handed weapons
        if (targetSlot === 'mainHand' && item.effects && item.effects.includes('two_handed')) {
            if (player.equipment.offHand !== null) {
                const offHandItem = player.equipment.offHand;
                if (!player.inventory) player.inventory = [];
                player.inventory.push(offHandItem);
                displayMessage(`Unequipped ${offHandItem.name} from offHand (two-handed weapon).`, 'info');
                console.log(`Unequipped ${offHandItem.name} from offHand.`);
            }
            player.equipment.offHand = null; // Clear offHand slot
            console.log(`Two-handed weapon equipped to mainHand, offHand cleared.`);
        }

        // Equip the new item
        player.equipment[targetSlot] = item;
        player.inventory.splice(itemIndex, 1); // Remove equipped item from inventory

        displayMessage(`Equipped ${item.name} in ${targetSlot}!`, 'success');
        console.log(`Equipped ${item.name} in ${targetSlot}.`);

        // Apply item effects
        if (item.effects && item.effects.length > 0) { // Check effects array has content
            if (typeof ItemManager !== 'undefined' && typeof ItemManager.applyItemEffects === 'function') {
                ItemManager.applyItemEffects(player, item);
            } else if (typeof window.ItemManager !== 'undefined' && typeof window.ItemManager.applyItemEffects === 'function') {
                window.ItemManager.applyItemEffects(player, item); // Fallback to window if needed
            }
        }

        // Ensure updatePlayerStatsDisplay is called correctly
        if (typeof updatePlayerStatsDisplay === 'function') { // Check global scope if not imported
            updatePlayerStatsDisplay();
        } else if (typeof window.updatePlayerStatsDisplay === 'function') {
            window.updatePlayerStatsDisplay();
        }

        // Ensure displayInventory is called correctly
        if (typeof displayInventory === 'function') { // Check global scope if not imported
             displayInventory();
        } else if (typeof window.displayInventory === 'function') {
             window.displayInventory();
        }
    }

    // Change unequipItem to a static method that accepts player and slot as arguments
    static unequipItem(player, slot) { // MODIFIED: Added 'static' and 'player' parameter
        if (!player.equipment[slot]) {
            displayMessage("No item equipped in that slot.", 'error');
            return;
        }

        const item = player.equipment[slot];

        // Ensure inventory array exists
        if (!player.inventory) {
            player.inventory = [];
        }

        // Move item back to inventory
        player.inventory.push(item);
        player.equipment[slot] = null;

        displayMessage(`Unequipped ${item.name}.`, 'success');

        // Ensure updatePlayerStatsDisplay is called correctly
        if (typeof updatePlayerStatsDisplay === 'function') { // Check global scope if not imported
            updatePlayerStatsDisplay();
        } else if (typeof window.updatePlayerStatsDisplay === 'function') {
            window.updatePlayerStatsDisplay();
        }

        // Ensure displayInventory is called correctly
        if (typeof displayInventory === 'function') { // Check global scope if not imported
             displayInventory();
        } else if (typeof window.displayInventory === 'function') {
             window.displayInventory();
        }
    }

    // Change useItem to a static method that accepts player and itemIndex as arguments
    static useItem(player, itemIndex) { // MODIFIED: Added 'static' and 'player' parameter
        if (!player.inventory || !player.inventory[itemIndex]) {
            displayMessage("Item not found.", 'error');
            return;
        }

        const item = player.inventory[itemIndex];

        // Check if item is consumable
        if (item.type !== 'consumable' && !item.effect) {
            displayMessage("This item cannot be used.", 'error');
            return;
        }

        // Apply item effects
        let effectApplied = false;

        if (item.effect) {
            if (item.effect.type === 'heal') {
                const healAmount = item.effect.amount || 30;
                const oldHp = player.hp;
                player.hp = Math.min(player.maxHp, player.hp + healAmount);
                const actualHeal = player.hp - oldHp;
                displayMessage(`You used ${item.name} and recovered ${actualHeal} HP.`, 'success');
                effectApplied = true;
            } else if (item.effect.type === 'mana') {
                // Assuming player.mp exists for mana
                player.mp = Math.min(player.maxMp, player.mp + (item.effect.amount || 0)); // Assuming player.mp and player.maxMp exist
                displayMessage(`You used ${item.name} and feel your magical energy restored.`, 'success');
                effectApplied = true;
            } else if (window.ItemManager && typeof ItemManager.applyItemEffects === 'function') {
                const result = ItemManager.applyItemEffects(player, item);
                if (result.success) {
                    displayMessage(result.message, 'success');
                    effectApplied = true;
                }
            }
        }

        if (effectApplied) {
            // Remove item from inventory after use
            player.inventory.splice(itemIndex, 1);

            // Ensure updatePlayerStatsDisplay is called correctly
            if (typeof updatePlayerStatsDisplay === 'function') {
                updatePlayerStatsDisplay();
            } else if (typeof window.updatePlayerStatsDisplay === 'function') {
                window.updatePlayerStatsDisplay();
            }

            // Ensure displayInventory is called correctly
            if (typeof displayInventory === 'function') {
                displayInventory();
            } else if (typeof window.displayInventory === 'function') {
                window.displayInventory();
            }
        } else {
            displayMessage("The item has no effect.", 'info');
        }
    }

    // Change sellItem to a static method that accepts player and itemIndex as arguments
    static sellItem(player, itemIndex) { // MODIFIED: Added 'static' and 'player' parameter
        if (!player.inventory || !player.inventory[itemIndex]) {
            displayMessage("Item not found.", 'error');
            return;
        }

        const item = player.inventory[itemIndex];
        const sellValue = Math.floor((item.value || 10) * 0.6); // Sell for 60% of value

        if (confirm(`Sell ${item.name} for ${sellValue} gold?`)) {
            player.inventory.splice(itemIndex, 1);

            // Ensure updateGold is called correctly
            if (typeof updateGold === 'function') {
                updateGold(sellValue, 'item sale');
            } else if (typeof window.updateGold === 'function') {
                window.updateGold(sellValue, 'item sale');
            }
            displayMessage(`Sold ${item.name} for ${sellValue} gold.`, 'success');

            // Ensure displayInventory is called correctly
            if (typeof displayInventory === 'function') {
                displayInventory();
            } else if (typeof window.displayInventory === 'function') {
                window.displayInventory();
            }
        }
    }

    // Change dropItem to a static method that accepts player and itemIndex as arguments
    static dropItem(player, itemIndex) { // MODIFIED: Added 'static' and 'player' parameter
        if (!player.inventory || !player.inventory[itemIndex]) {
            displayMessage("Item not found.", 'error');
            return;
        }

        const item = player.inventory[itemIndex];

        if (confirm(`Drop ${item.name}? This item will be lost forever.`)) {
            player.inventory.splice(itemIndex, 1);
            displayMessage(`Dropped ${item.name}.`, 'info');

            // Ensure displayInventory is called correctly
            if (typeof displayInventory === 'function') {
                displayInventory();
            } else if (typeof window.displayInventory === 'function') {
                window.displayInventory();
            }
        }
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
                // Do NOT save player.stats here, as main saveGame handles it.

            } catch (e) {
                console.error("Failed to save inventory-related data to localStorage:", e);
            }
        }
    }

    static loadInventoryFromStorage(player) {
         if (typeof localStorage !== 'undefined') {
            try {
                const savedInventory = localStorage.getItem(`inventory_${player.name}`);
                const savedEffects = localStorage.getItem(`statusEffects_${player.name}`);
                const savedPassives = localStorage.getItem(`passiveBonuses_${player.name}`);
                // const savedStats = localStorage.getItem(`playerStats_${player.name}`); // This line is now removed.


                if (savedInventory) player.inventory = JSON.parse(savedInventory); else player.inventory = [];
                if (savedEffects) player.statusEffects = JSON.parse(savedEffects); else player.statusEffects = [];
                if (savedPassives) player.passiveBonuses = JSON.parse(savedPassives); else player.passiveBonuses = [];
                // Do NOT load player.stats here. Player.stats should be loaded by the main saveGame/loadGame logic.
                // if (savedStats) player.stats = JSON.parse(savedStats);

                // Fix undefined items in inventory
                this.fixUndefinedItems(player);
                this.updateStatusEffects(player); // Clean up expired effects immediately on load
            } catch (e) {
                console.error("Failed to load inventory-related data from localStorage:", e);
                 player.inventory = [];
                 player.statusEffects = [];
                 player.passiveBonuses = [];
                 // Do not reset player.stats here.
            }
        }
    }

    static fixUndefinedItems(player) {
        if (!player.inventory) return;
        
        for (let i = 0; i < player.inventory.length; i++) {
            const item = player.inventory[i];
            if (!item || typeof item !== 'object' || item === null) {
                // Replace undefined/null items with unidentified placeholder
                player.inventory[i] = this.createUnidentifiedItem();
                console.log(`Fixed undefined item at index ${i}, replaced with Unidentified Item`);
            } else if (!item.name || !item.id) {
                // Fix items missing critical properties
                if (!item.name) item.name = "Unidentified Item";
                if (!item.id) item.id = ItemGenerator.generateItemId();
                if (!item.type) item.type = itemCategories.TRINKET;
                if (!item.description) item.description = "A mysterious item that needs to be identified.";
                if (!item.value) item.value = 10;
                if (!item.rarity) item.rarity = 'COMMON';
                item.needsIdentification = true;
                console.log(`Fixed corrupted item at index ${i}, marked for identification`);
            }
        }
        
        // Save the fixed inventory
        this.saveInventoryToStorage(player);
    }

    static createUnidentifiedItem() {
        return {
            id: ItemGenerator.generateItemId(),
            name: "Unidentified Item",
            type: itemCategories.TRINKET,
            rarity: 'COMMON',
            description: "A mysterious item that needs to be identified. Its true nature is hidden.",
            value: 10,
            needsIdentification: true,
            effects: []
        };
    }

    static async identifyItem(player, itemIndex) {
        if (!player.inventory || !player.inventory[itemIndex]) {
            return { success: false, message: "Item not found." };
        }

        const item = player.inventory[itemIndex];
        if (!item.needsIdentification && !item.unidentified) {
            return { success: false, message: "This item doesn't need identification." };
        }

        try {
            // Generate context for item identification
            const context = this.generateIdentificationContext(player);
            
            // Use AI to generate a new item based on story context
            const newItem = await this.regenerateItemFromContext(context, player.level);
            
            if (newItem && newItem.name && newItem.id) {
                // Replace the unidentified item with the newly generated one
                player.inventory[itemIndex] = newItem;
                this.saveInventoryToStorage(player);
                
                return { 
                    success: true, 
                    message: `The mysterious item reveals itself to be: ${newItem.name}!`,
                    newItem: newItem
                };
            } else {
                // Create a basic identified item as fallback
                const fallbackItem = this.createBasicIdentifiedItem(item.name || 'Mysterious Item', player.level);
                player.inventory[itemIndex] = fallbackItem;
                this.saveInventoryToStorage(player);
                
                return { 
                    success: true, 
                    message: `You identify the item as: ${fallbackItem.name}. It appears to be a simple but useful item.`,
                    newItem: fallbackItem
                };
            }
        } catch (error) {
            console.error("Error during item identification:", error);
            // Create a basic fallback item
            const fallbackItem = this.createBasicIdentifiedItem(item.name || 'Mysterious Item', player.level);
            player.inventory[itemIndex] = fallbackItem;
            this.saveInventoryToStorage(player);
            
            return { 
                success: true, 
                message: `Despite some difficulties, you identify this as: ${fallbackItem.name}.`,
                newItem: fallbackItem
            };
        }
    }

    static createBasicIdentifiedItem(itemName, playerLevel) {
        const cleanName = itemName.replace(/unidentified|mysterious/gi, '').trim() || 'Simple Item';
        const capitalizedName = cleanName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        
        return {
            id: ItemGenerator ? ItemGenerator.generateItemId() : `basic_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            name: capitalizedName,
            type: 'trinket',
            rarity: 'COMMON',
            description: `A ${cleanName.toLowerCase()} that you've successfully identified. While not magical, it has some practical value.`,
            value: Math.max(5, Math.floor(Math.random() * (playerLevel * 3)) + 10),
            effects: [],
            isIdentified: true,
            source: 'basic_identification'
        };
    }

    static generateIdentificationContext(player) {
        let context = `Player: ${player.name}, Level ${player.level} ${player.class}\n`;
        context += `Current Location: ${player.currentLocation}\n`;
        
        // Add recent conversation history if available
        if (typeof window !== 'undefined' && window.conversationHistory && window.conversationHistory.messages) {
            const recentMessages = window.conversationHistory.messages.slice(-3);
            context += "Recent events:\n";
            recentMessages.forEach(msg => {
                const role = msg.role === 'user' ? 'Player' : 'DM';
                context += `- ${role}: ${msg.content.slice(0, 100)}...\n`;
            });
        }

        // Add active quests
        if (player.quests && player.quests.length > 0) {
            const activeQuest = player.quests.find(q => !q.completed);
            if (activeQuest) {
                context += `Active Quest: ${activeQuest.title}\n`;
            }
        }

        return context;
    }

    static async regenerateItemFromContext(context, playerLevel) {
        if (typeof window === 'undefined' || typeof window.callGeminiAPI !== 'function') {
            console.error("Gemini API not available for item identification");
            return null;
        }

        const prompt = `Based on the following game context, generate a single appropriate item that a player might have found or acquired.

Context:
${context}

Create an item that fits the story context and player level. Respond with ONLY valid JSON in this format:
{
    "name": "Item Name",
    "type": "weapon/armor/consumable/magical/tool/jewelry/scroll/book",
    "rarity": "COMMON/UNCOMMON/RARE/EPIC/LEGENDARY",
    "description": "Item description explaining what it is and its significance",
    "value": 50,
    "effects": [],
    "slot": "mainHand/head/chest/etc (if applicable)"
}

Make the item interesting and relevant to the current story context. For weapons, include "damage" field. For armor, include "armor" field.`;

        try {
            const response = await window.callGeminiAPI(prompt, 0.7, 500, false);
            if (!response) return null;

            const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

            if (jsonMatch) {
                const itemData = JSON.parse(jsonMatch[0]);
                
                // Validate and add missing properties
                if (!itemData.id) itemData.id = ItemGenerator.generateItemId();
                if (!itemData.value) itemData.value = 10;
                if (!itemData.effects) itemData.effects = [];
                if (!itemData.rarity) itemData.rarity = 'COMMON';
                
                // Scale value based on player level and rarity
                const rarityMultiplier = itemRarity[itemData.rarity]?.multiplier || 1;
                itemData.value = Math.floor((itemData.value + playerLevel * 5) * rarityMultiplier);
                
                console.log("Generated identified item:", itemData);
                return itemData;
            }
        } catch (error) {
            console.error("Error parsing generated item:", error);
        }

        return null;
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