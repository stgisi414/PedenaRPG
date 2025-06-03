
// Class Progression System - Complete leveling data for all classes
export const classProgression = {
    warrior: {
        name: "Warrior",
        hitDie: "d10",
        primaryStats: ["strength", "constitution"],
        savingThrows: ["strength", "constitution"],
        skillChoices: ["Athletics", "Intimidation", "Survival", "Animal Handling", "Insight", "Perception"],
        numSkillChoices: 2,
        
        levels: {
            1: {
                hp: 10,
                features: ["Fighting Style", "Second Wind"],
                abilities: ["Power Strike", "Shield Bash"],
                feats: ["Weapon Mastery"],
                spells: [],
                cantrips: []
            },
            2: {
                hp: 6,
                features: ["Action Surge"],
                abilities: ["Cleave Attack"],
                feats: ["Armor Expertise"],
                spells: [],
                cantrips: []
            },
            3: {
                hp: 6,
                features: ["Martial Archetype"],
                abilities: ["Battle Fury", "Defensive Stance"],
                feats: ["Combat Reflexes"],
                spells: [],
                cantrips: []
            },
            4: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Weapon Throw"],
                feats: ["Improved Critical"],
                spells: [],
                cantrips: []
            },
            5: {
                hp: 6,
                features: ["Extra Attack"],
                abilities: ["Whirlwind Strike", "Intimidating Shout"],
                feats: ["Master Warrior"],
                spells: [],
                cantrips: []
            }
        }
    },
    
    mage: {
        name: "Mage",
        hitDie: "d6",
        primaryStats: ["intelligence", "wisdom"],
        savingThrows: ["intelligence", "wisdom"],
        skillChoices: ["Arcana", "History", "Investigation", "Medicine", "Religion", "Insight"],
        numSkillChoices: 2,
        
        levels: {
            1: {
                hp: 6,
                features: ["Spellcasting", "Arcane Recovery"],
                abilities: ["Spell Focus", "Mana Shield"],
                feats: ["Spell Power"],
                spells: ["Magic Missile", "Shield", "Burning Hands"],
                cantrips: ["Spark", "Mage Hand", "Prestidigitation"]
            },
            2: {
                hp: 4,
                features: ["Arcane Tradition"],
                abilities: ["Spell Surge"],
                feats: ["Metamagic Adept"],
                spells: ["Scorching Ray", "Misty Step", "Web"],
                cantrips: ["Minor Illusion"]
            },
            3: {
                hp: 4,
                features: ["Cantrip Formulas"],
                abilities: ["Elemental Mastery", "Spell Steal"],
                feats: ["Arcane Scholar"],
                spells: ["Fireball", "Lightning Bolt", "Counterspell"],
                cantrips: ["Frost Bolt"]
            },
            4: {
                hp: 4,
                features: ["Ability Score Improvement"],
                abilities: ["Spell Penetration"],
                feats: ["Spell Critical"],
                spells: ["Dimension Door", "Greater Invisibility"],
                cantrips: ["Acid Splash"]
            },
            5: {
                hp: 4,
                features: ["Third Level Spells"],
                abilities: ["Arcane Mastery", "Time Stop"],
                feats: ["Grand Magus"],
                spells: ["Cone of Cold", "Teleport", "Polymorph"],
                cantrips: ["Eldritch Blast"]
            }
        }
    },
    
    rogue: {
        name: "Rogue",
        hitDie: "d8",
        primaryStats: ["dexterity", "intelligence"],
        savingThrows: ["dexterity", "intelligence"],
        skillChoices: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
        numSkillChoices: 4,
        
        levels: {
            1: {
                hp: 8,
                features: ["Expertise", "Sneak Attack", "Thieves' Cant"],
                abilities: ["Backstab", "Lockpicking", "Pickpocket"],
                feats: ["Light Fingers"],
                spells: [],
                cantrips: []
            },
            2: {
                hp: 5,
                features: ["Cunning Action"],
                abilities: ["Dodge Roll", "Smoke Bomb"],
                feats: ["Evasion"],
                spells: [],
                cantrips: []
            },
            3: {
                hp: 5,
                features: ["Roguish Archetype"],
                abilities: ["Shadow Step", "Poison Blade"],
                feats: ["Assassinate"],
                spells: [],
                cantrips: []
            },
            4: {
                hp: 5,
                features: ["Ability Score Improvement"],
                abilities: ["Caltrops"],
                feats: ["Improved Sneak Attack"],
                spells: [],
                cantrips: []
            },
            5: {
                hp: 5,
                features: ["Uncanny Dodge"],
                abilities: ["Vanish", "Throwing Knives"],
                feats: ["Master Thief"],
                spells: [],
                cantrips: []
            }
        }
    },
    
    ranger: {
        name: "Ranger",
        hitDie: "d10",
        primaryStats: ["dexterity", "wisdom"],
        savingThrows: ["strength", "dexterity"],
        skillChoices: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
        numSkillChoices: 3,
        
        levels: {
            1: {
                hp: 10,
                features: ["Favored Enemy", "Natural Explorer"],
                abilities: ["Track", "Hunter's Mark", "Animal Companion"],
                feats: ["Precise Shot"],
                spells: [],
                cantrips: []
            },
            2: {
                hp: 6,
                features: ["Fighting Style", "Spellcasting"],
                abilities: ["Multi-Shot"],
                feats: ["Archery Master"],
                spells: ["Cure Light Wounds", "Speak with Animals"],
                cantrips: ["Druidcraft"]
            },
            3: {
                hp: 6,
                features: ["Ranger Archetype", "Primeval Awareness"],
                abilities: ["Camouflage", "Beast Speech"],
                feats: ["Nature's Ally"],
                spells: ["Barkskin", "Spike Growth"],
                cantrips: ["Thorn Whip"]
            },
            4: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Volley"],
                feats: ["Improved Critical"],
                spells: ["Lightning Arrow", "Wind Wall"],
                cantrips: ["Guidance"]
            },
            5: {
                hp: 6,
                features: ["Extra Attack"],
                abilities: ["Storm of Arrows", "Call Lightning"],
                feats: ["Master Ranger"],
                spells: ["Conjure Animals", "Plant Growth"],
                cantrips: ["Resistance"]
            }
        }
    }
};

// Spell definitions with detailed information
export const spellDefinitions = {
    // Cantrips
    "Spark": {
        level: 0,
        school: "Evocation",
        castingTime: "1 action",
        range: "60 feet",
        damage: "1d4",
        description: "A spark of magical energy strikes a target within range."
    },
    "Mage Hand": {
        level: 0,
        school: "Conjuration",
        castingTime: "1 action",
        range: "30 feet",
        damage: null,
        description: "A spectral hand appears and can manipulate objects."
    },
    "Prestidigitation": {
        level: 0,
        school: "Transmutation",
        castingTime: "1 action",
        range: "10 feet",
        damage: null,
        description: "Simple magical effects like lighting candles or cleaning objects."
    },
    "Minor Illusion": {
        level: 0,
        school: "Illusion",
        castingTime: "1 action",
        range: "30 feet",
        damage: null,
        description: "Create a sound or image for 1 minute."
    },
    "Frost Bolt": {
        level: 0,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        damage: "1d8",
        description: "A bolt of freezing energy that can slow enemies."
    },
    "Acid Splash": {
        level: 0,
        school: "Conjuration",
        castingTime: "1 action",
        range: "60 feet",
        damage: "1d6",
        description: "Hurl a bubble of acid at creatures."
    },
    "Eldritch Blast": {
        level: 0,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        damage: "1d10",
        description: "A beam of crackling energy streaks toward a creature."
    },
    "Druidcraft": {
        level: 0,
        school: "Transmutation",
        castingTime: "1 action",
        range: "30 feet",
        damage: null,
        description: "Whispering to spirits of nature, you create minor effects."
    },
    "Thorn Whip": {
        level: 0,
        school: "Transmutation",
        castingTime: "1 action",
        range: "30 feet",
        damage: "1d6",
        description: "Create a whip of thorns that pulls enemies closer."
    },
    "Guidance": {
        level: 0,
        school: "Divination",
        castingTime: "1 action",
        range: "Touch",
        damage: null,
        description: "Touch a creature to give them a d4 bonus to their next ability check."
    },
    "Resistance": {
        level: 0,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        damage: null,
        description: "Touch a creature to give them resistance to one damage type."
    },
    
    // Level 1 Spells
    "Magic Missile": {
        level: 1,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        damage: "1d4+1",
        description: "Three darts of magical force automatically hit their targets."
    },
    "Shield": {
        level: 1,
        school: "Abjuration",
        castingTime: "1 reaction",
        range: "Self",
        damage: null,
        description: "An invisible barrier protects you, adding +5 to AC."
    },
    "Burning Hands": {
        level: 1,
        school: "Evocation",
        castingTime: "1 action",
        range: "15-foot cone",
        damage: "3d6",
        description: "A thin sheet of flames shoots forth from your outstretched fingertips."
    },
    "Cure Light Wounds": {
        level: 1,
        school: "Evocation",
        castingTime: "1 action",
        range: "Touch",
        damage: null,
        description: "Restore 1d8+modifier hit points to a creature you touch."
    },
    "Speak with Animals": {
        level: 1,
        school: "Divination",
        castingTime: "1 action",
        range: "Self",
        damage: null,
        description: "You can communicate with beasts for 10 minutes."
    },
    
    // Level 2 Spells
    "Scorching Ray": {
        level: 2,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        damage: "2d6",
        description: "Three rays of fire strike targets within range."
    },
    "Misty Step": {
        level: 2,
        school: "Conjuration",
        castingTime: "1 bonus action",
        range: "30 feet",
        damage: null,
        description: "Teleport up to 30 feet to an unoccupied space you can see."
    },
    "Web": {
        level: 2,
        school: "Conjuration",
        castingTime: "1 action",
        range: "60 feet",
        damage: null,
        description: "Thick, sticky webbing fills a 20-foot cube."
    },
    "Barkskin": {
        level: 2,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        damage: null,
        description: "Touch a creature to give them natural armor (AC 16)."
    },
    "Spike Growth": {
        level: 2,
        school: "Transmutation",
        castingTime: "1 action",
        range: "150 feet",
        damage: "2d4",
        description: "Ground sprouts hard spikes that slow and damage enemies."
    },
    
    // Level 3 Spells
    "Fireball": {
        level: 3,
        school: "Evocation",
        castingTime: "1 action",
        range: "150 feet",
        damage: "8d6",
        description: "A bright flash and thunderous boom as fire explodes in a 20-foot radius."
    },
    "Lightning Bolt": {
        level: 3,
        school: "Evocation",
        castingTime: "1 action",
        range: "100-foot line",
        damage: "8d6",
        description: "A stroke of lightning forms a line 100 feet long and 5 feet wide."
    },
    "Counterspell": {
        level: 3,
        school: "Abjuration",
        castingTime: "1 reaction",
        range: "60 feet",
        damage: null,
        description: "Interrupt a creature's spellcasting attempt."
    },
    "Lightning Arrow": {
        level: 3,
        school: "Transmutation",
        castingTime: "1 bonus action",
        range: "Self",
        damage: "4d8",
        description: "Next ranged weapon attack deals lightning damage in a line."
    },
    "Wind Wall": {
        level: 3,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        damage: null,
        description: "Create a wall of strong wind that deflects projectiles."
    },
    
    // Level 4 Spells
    "Dimension Door": {
        level: 4,
        school: "Conjuration",
        castingTime: "1 action",
        range: "500 feet",
        damage: null,
        description: "Teleport yourself and one willing creature up to 500 feet."
    },
    "Greater Invisibility": {
        level: 4,
        school: "Illusion",
        castingTime: "1 action",
        range: "Touch",
        damage: null,
        description: "Become invisible for 1 minute, even while attacking."
    },
    
    // Level 5 Spells
    "Cone of Cold": {
        level: 5,
        school: "Evocation",
        castingTime: "1 action",
        range: "60-foot cone",
        damage: "8d8",
        description: "Blast of cold air erupts from your hands in a 60-foot cone."
    },
    "Teleport": {
        level: 5,
        school: "Conjuration",
        castingTime: "1 action",
        range: "10 feet",
        damage: null,
        description: "Instantly transport yourself and allies to a familiar location."
    },
    "Polymorph": {
        level: 5,
        school: "Transmutation",
        castingTime: "1 action",
        range: "60 feet",
        damage: null,
        description: "Transform a creature into a beast of your choice."
    },
    "Conjure Animals": {
        level: 5,
        school: "Conjuration",
        castingTime: "1 action",
        range: "60 feet",
        damage: null,
        description: "Summon fey spirits in animal form to fight alongside you."
    },
    "Plant Growth": {
        level: 5,
        school: "Transmutation",
        castingTime: "1 action",
        range: "150 feet",
        damage: null,
        description: "Plants in the area become thick and overgrown."
    }
};

// Ability definitions
export const abilityDefinitions = {
    // Warrior Abilities
    "Power Strike": {
        class: "warrior",
        type: "attack",
        cooldown: 3,
        description: "Deal extra damage on your next melee attack.",
        effect: { damage: "1d6", type: "bonus" }
    },
    "Shield Bash": {
        class: "warrior",
        type: "attack",
        cooldown: 2,
        description: "Bash with your shield to stun an enemy briefly.",
        effect: { damage: "1d4", status: "stunned" }
    },
    "Cleave Attack": {
        class: "warrior",
        type: "attack",
        cooldown: 4,
        description: "Attack multiple adjacent enemies with one swing.",
        effect: { targets: "adjacent", damage: "normal" }
    },
    "Battle Fury": {
        class: "warrior",
        type: "buff",
        cooldown: 8,
        description: "Enter a fury state, increasing attack speed and damage.",
        effect: { duration: 5, damage_bonus: 2, attack_speed: 1.5 }
    },
    "Defensive Stance": {
        class: "warrior",
        type: "stance",
        cooldown: 0,
        description: "Reduce damage taken but also reduce movement speed.",
        effect: { damage_reduction: 0.5, movement_penalty: 0.5 }
    },
    "Weapon Throw": {
        class: "warrior",
        type: "ranged",
        cooldown: 5,
        description: "Throw your weapon at a distant enemy.",
        effect: { range: 30, damage: "weapon+1d4" }
    },
    "Whirlwind Strike": {
        class: "warrior",
        type: "attack",
        cooldown: 6,
        description: "Attack all enemies around you in a spinning motion.",
        effect: { aoe: "surrounding", damage: "weapon" }
    },
    "Intimidating Shout": {
        class: "warrior",
        type: "debuff",
        cooldown: 7,
        description: "Frighten nearby enemies, reducing their attack power.",
        effect: { range: 15, status: "frightened", duration: 3 }
    },
    
    // Mage Abilities
    "Spell Focus": {
        class: "mage",
        type: "passive",
        cooldown: 0,
        description: "Increases the accuracy and power of all spells.",
        effect: { spell_accuracy: 1.2, spell_power: 1.1 }
    },
    "Mana Shield": {
        class: "mage",
        type: "defensive",
        cooldown: 10,
        description: "Absorb damage using mana instead of health.",
        effect: { duration: 30, conversion: "mana_for_hp" }
    },
    "Spell Surge": {
        class: "mage",
        type: "buff",
        cooldown: 8,
        description: "Next spell costs no mana and has increased effect.",
        effect: { free_cast: true, power_bonus: 1.5 }
    },
    "Elemental Mastery": {
        class: "mage",
        type: "passive",
        cooldown: 0,
        description: "Gain resistance to elemental damage and bonus elemental spell damage.",
        effect: { elemental_resistance: 0.25, elemental_damage: 1.3 }
    },
    "Spell Steal": {
        class: "mage",
        type: "utility",
        cooldown: 12,
        description: "Steal a beneficial magical effect from an enemy.",
        effect: { range: 60, type: "steal_buff" }
    },
    "Spell Penetration": {
        class: "mage",
        type: "passive",
        cooldown: 0,
        description: "Spells ignore a portion of enemy magical resistance.",
        effect: { penetration: 0.3 }
    },
    "Arcane Mastery": {
        class: "mage",
        type: "ultimate",
        cooldown: 20,
        description: "All spells have no cooldown for a short time.",
        effect: { duration: 10, no_cooldowns: true }
    },
    "Time Stop": {
        class: "mage",
        type: "ultimate",
        cooldown: 25,
        description: "Briefly stop time, allowing free actions.",
        effect: { duration: 3, time_stop: true }
    },
    
    // Rogue Abilities
    "Backstab": {
        class: "rogue",
        type: "attack",
        cooldown: 0,
        description: "Deal extra damage when attacking from behind or while hidden.",
        effect: { multiplier: 2, condition: "behind_or_hidden" }
    },
    "Lockpicking": {
        class: "rogue",
        type: "utility",
        cooldown: 0,
        description: "Open locked doors, chests, and containers.",
        effect: { type: "unlock", skill_bonus: 5 }
    },
    "Pickpocket": {
        class: "rogue",
        type: "utility",
        cooldown: 2,
        description: "Steal items or gold from enemies without them noticing.",
        effect: { range: 5, stealth_check: true }
    },
    "Dodge Roll": {
        class: "rogue",
        type: "movement",
        cooldown: 3,
        description: "Quickly roll to avoid attacks and reposition.",
        effect: { distance: 10, avoid_attacks: true }
    },
    "Smoke Bomb": {
        class: "rogue",
        type: "utility",
        cooldown: 8,
        description: "Create a cloud of smoke to hide and confuse enemies.",
        effect: { radius: 15, duration: 6, concealment: true }
    },
    "Shadow Step": {
        class: "rogue",
        type: "movement",
        cooldown: 6,
        description: "Teleport through shadows to any dark area within range.",
        effect: { range: 30, condition: "shadows" }
    },
    "Poison Blade": {
        class: "rogue",
        type: "buff",
        cooldown: 10,
        description: "Coat your weapons with poison for several attacks.",
        effect: { duration: 5, poison_damage: "1d4", attacks: 3 }
    },
    "Caltrops": {
        class: "rogue",
        type: "trap",
        cooldown: 7,
        description: "Scatter sharp spikes that damage and slow enemies.",
        effect: { area: "10x10", damage: "1d4", slow: true }
    },
    "Vanish": {
        class: "rogue",
        type: "stealth",
        cooldown: 12,
        description: "Become completely invisible for a short time.",
        effect: { duration: 8, invisibility: true }
    },
    "Throwing Knives": {
        class: "rogue",
        type: "ranged",
        cooldown: 4,
        description: "Throw multiple knives at different targets.",
        effect: { projectiles: 3, range: 25, damage: "1d4" }
    },
    
    // Ranger Abilities
    "Track": {
        class: "ranger",
        type: "utility",
        cooldown: 0,
        description: "Follow the tracks of creatures and identify their type.",
        effect: { reveal_tracks: true, creature_info: true }
    },
    "Hunter's Mark": {
        class: "ranger",
        type: "buff",
        cooldown: 0,
        description: "Mark a target to deal extra damage and track them.",
        effect: { damage_bonus: "1d6", tracking: true, duration: 60 }
    },
    "Animal Companion": {
        class: "ranger",
        type: "summon",
        cooldown: 0,
        description: "Summon a loyal animal companion to fight alongside you.",
        effect: { type: "wolf", hp: 15, damage: "1d6" }
    },
    "Multi-Shot": {
        class: "ranger",
        type: "attack",
        cooldown: 5,
        description: "Fire multiple arrows at different targets.",
        effect: { arrows: 3, range: 80, damage: "normal" }
    },
    "Camouflage": {
        class: "ranger",
        type: "stealth",
        cooldown: 8,
        description: "Blend with natural surroundings to become nearly invisible.",
        effect: { duration: 15, stealth_bonus: 10 }
    },
    "Beast Speech": {
        class: "ranger",
        type: "utility",
        cooldown: 0,
        description: "Communicate with and potentially befriend wild animals.",
        effect: { animal_communication: true, befriend_chance: 0.3 }
    },
    "Volley": {
        class: "ranger",
        type: "attack",
        cooldown: 8,
        description: "Rain arrows down on a large area.",
        effect: { area: "20x20", arrows: 8, damage: "1d6" }
    },
    "Storm of Arrows": {
        class: "ranger",
        type: "ultimate",
        cooldown: 15,
        description: "Fire a devastating barrage of magical arrows.",
        effect: { arrows: 10, range: 100, damage: "1d8", magical: true }
    },
    "Call Lightning": {
        class: "ranger",
        type: "spell",
        cooldown: 12,
        description: "Call down lightning bolts from the sky.",
        effect: { bolts: 3, damage: "2d8", range: 60 }
    }
};

// Feat definitions
export const featDefinitions = {
    // Warrior Feats
    "Weapon Mastery": {
        class: "warrior",
        level: 1,
        description: "Gain proficiency with all weapon types and +1 to attack rolls.",
        effect: { attack_bonus: 1, weapon_proficiency: "all" }
    },
    "Armor Expertise": {
        class: "warrior",
        level: 2,
        description: "Reduce movement penalty from armor and gain +1 AC.",
        effect: { ac_bonus: 1, armor_penalty_reduction: 0.5 }
    },
    "Combat Reflexes": {
        class: "warrior",
        level: 3,
        description: "Gain extra reactions and opportunity attacks.",
        effect: { extra_reactions: 1, opportunity_attacks: true }
    },
    "Improved Critical": {
        class: "warrior",
        level: 4,
        description: "Critical hits occur on 19-20 instead of just 20.",
        effect: { critical_range: [19, 20] }
    },
    "Master Warrior": {
        class: "warrior",
        level: 5,
        description: "All combat abilities recharge faster and deal more damage.",
        effect: { ability_cooldown_reduction: 0.25, damage_bonus: 2 }
    },
    
    // Mage Feats
    "Spell Power": {
        class: "mage",
        level: 1,
        description: "All spells deal +1 damage per die rolled.",
        effect: { spell_damage_bonus: 1 }
    },
    "Metamagic Adept": {
        class: "mage",
        level: 2,
        description: "Can modify spells with metamagic (extend, empower, etc.).",
        effect: { metamagic_options: ["extend", "empower", "quicken"] }
    },
    "Arcane Scholar": {
        class: "mage",
        level: 3,
        description: "Learn additional spells and gain bonus spell slots.",
        effect: { bonus_spells: 2, bonus_spell_slots: 1 }
    },
    "Spell Critical": {
        class: "mage",
        level: 4,
        description: "Spells can critically hit for double damage.",
        effect: { spell_critical_chance: 0.05 }
    },
    "Grand Magus": {
        class: "mage",
        level: 5,
        description: "Master of all schools of magic with reduced spell costs.",
        effect: { mana_cost_reduction: 0.3, school_mastery: "all" }
    },
    
    // Rogue Feats
    "Light Fingers": {
        class: "rogue",
        level: 1,
        description: "Improved sleight of hand and pickpocketing success rate.",
        effect: { pickpocket_bonus: 3, sleight_of_hand_bonus: 3 }
    },
    "Evasion": {
        class: "rogue",
        level: 2,
        description: "Take no damage from area effects on successful Dex saves.",
        effect: { evasion: true }
    },
    "Assassinate": {
        class: "rogue",
        level: 3,
        description: "First attack against unaware enemies is an automatic critical.",
        effect: { assassinate: true }
    },
    "Improved Sneak Attack": {
        class: "rogue",
        level: 4,
        description: "Sneak attack damage increases significantly.",
        effect: { sneak_attack_bonus: "2d6" }
    },
    "Master Thief": {
        class: "rogue",
        level: 5,
        description: "Can use thieves' tools expertly and move silently at full speed.",
        effect: { tools_expertise: true, silent_movement: true }
    },
    
    // Ranger Feats
    "Precise Shot": {
        class: "ranger",
        level: 1,
        description: "Ranged attacks ignore cover and have improved accuracy.",
        effect: { ignore_cover: true, ranged_accuracy: 2 }
    },
    "Archery Master": {
        class: "ranger",
        level: 2,
        description: "Additional ranged attack per turn and increased damage.",
        effect: { extra_ranged_attack: true, ranged_damage_bonus: 2 }
    },
    "Nature's Ally": {
        class: "ranger",
        level: 3,
        description: "Animal companions are stronger and you can have multiple.",
        effect: { companion_hp_bonus: 10, max_companions: 2 }
    },
    "Master Ranger": {
        class: "ranger",
        level: 5,
        description: "Master of wilderness survival with enhanced tracking and stealth.",
        effect: { tracking_mastery: true, wilderness_stealth: 5 }
    }
};
