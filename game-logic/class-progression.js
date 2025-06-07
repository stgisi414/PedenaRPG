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
                features: ["Action Surge (1 use)"],
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
                features: ["Extra Attack (1)"],
                abilities: ["Whirlwind Strike", "Intimidating Shout"],
                feats: ["Master Warrior"],
                spells: [],
                cantrips: []
            },
            6: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["War Cry", "Sunder Armor"],
                feats: ["Heavy Armor Master"],
                spells: [],
                cantrips: []
            },
            7: {
                hp: 6,
                features: ["Martial Archetype Feature"],
                abilities: ["Retaliation", "Earthshaker Slam"],
                feats: ["Dual Wielding Adept"],
                spells: [],
                cantrips: []
            },
            8: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Concussive Blow", "Rallying Cry"],
                feats: ["Shield Wall Expert"],
                spells: [],
                cantrips: []
            },
            9: {
                hp: 6,
                features: ["Indomitable (1 use)"],
                abilities: ["Heroic Leap", "Berserker Rage"],
                feats: ["Great Weapon Master"],
                spells: [],
                cantrips: []
            },
            10: {
                hp: 6,
                features: ["Martial Archetype Feature"],
                abilities: ["Executioner's Strike", "Terrifying Presence"],
                feats: ["Polearm Master"],
                spells: [],
                cantrips: []
            },
            11: {
                hp: 6,
                features: ["Extra Attack (2)"],
                abilities: ["Unstoppable Force", "Stunning Strike"],
                feats: ["Blade Master"],
                spells: [],
                cantrips: []
            },
            12: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Overpower", "Iron Will"],
                feats: ["Sentinel"],
                spells: [],
                cantrips: []
            },
            13: {
                hp: 6,
                features: ["Indomitable (2 uses)"],
                abilities: ["Shockwave", "Last Stand"],
                feats: ["Resilient Warrior"],
                spells: [],
                cantrips: []
            },
            14: {
                hp: 6,
                features: ["Martial Archetype Feature"],
                abilities: ["Warlord's Command", "Bladestorm"],
                feats: ["Inspiring Leader"],
                spells: [],
                cantrips: []
            },
            15: {
                hp: 6,
                features: ["Superior Critical"], // Crits on 18-20
                abilities: ["Avatar of War", "Crippling Blow"],
                feats: ["Tough as Nails"],
                spells: [],
                cantrips: []
            },
            16: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Death Wish", "Undying Rage"],
                feats: ["Legendary Warrior"],
                spells: [],
                cantrips: []
            },
            17: {
                hp: 6,
                features: ["Action Surge (2 uses)", "Indomitable (3 uses)"],
                abilities: ["Titanic Smash", "War God's Blessing"],
                feats: ["Unbreakable Will"],
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
                spells: ["Magic Missile", "Shield", "Burning Hands", "Chromatic Orb", "Sleep"],
                cantrips: ["Spark", "Mage Hand", "Prestidigitation", "Light"]
            },
            2: {
                hp: 4,
                features: ["Arcane Tradition"],
                abilities: ["Spell Surge"],
                feats: ["Metamagic Adept"],
                spells: ["Scorching Ray", "Misty Step", "Web", "Mirror Image", "Invisibility"],
                cantrips: ["Minor Illusion", "Ray of Frost"]
            },
            3: {
                hp: 4,
                features: ["Cantrip Formulas"], // Learn new cantrip
                abilities: ["Elemental Mastery", "Spell Steal"],
                feats: ["Arcane Scholar"],
                spells: ["Fireball", "Lightning Bolt", "Counterspell", "Fly", "Haste"],
                cantrips: ["Frost Bolt", "Shocking Grasp"]
            },
            4: {
                hp: 4,
                features: ["Ability Score Improvement"],
                abilities: ["Spell Penetration"],
                feats: ["Spell Critical"],
                spells: ["Dimension Door", "Greater Invisibility", "Ice Storm", "Phantasmal Killer"],
                cantrips: ["Acid Splash"]
            },
            5: {
                hp: 4,
                features: ["Fifth Level Spells Access"], // Name corrected based on spell access
                abilities: ["Arcane Mastery", "Time Stop (Minor)"], // Renamed to avoid clash with actual Time Stop spell
                feats: ["Grand Magus"],
                spells: ["Cone of Cold", "Teleport (Short Range)", "Polymorph", "Wall of Force", "Animate Objects"],
                cantrips: ["Eldritch Blast"] // (Typically Warlock, added as example of cross-cantrip)
            },
            6: {
                hp: 4,
                features: ["Arcane Tradition Feature", "Sixth Level Spells Access"],
                abilities: ["Empowered Elements", "Arcane Warding"],
                feats: ["Elemental Adept (Fire)"],
                spells: ["Chain Lightning", "Disintegrate", "Globe of Invulnerability", "True Seeing"],
                cantrips: ["Dancing Lights"]
            },
            7: {
                hp: 4,
                features: ["Seventh Level Spells Access"],
                abilities: ["Rapid Casting", "Spell Reflection"],
                feats: ["War Caster"],
                spells: ["Delayed Blast Fireball", "Finger of Death", "Plane Shift", "Prismatic Spray"],
                cantrips: []
            },
            8: {
                hp: 4,
                features: ["Ability Score Improvement"],
                abilities: ["Arcane Infusion", "Mind Blank (Self)"],
                feats: ["Potent Cantrips"],
                spells: ["Teleport (Long Range)", "Maze", "Forcecage"], // Added more 7th, started 8th
                cantrips: ["Blade Ward"]
            },
            9: {
                hp: 4,
                features: ["Arcane Tradition Feature", "Eighth Level Spells Access"],
                abilities: ["Spell Weaver", "Mystic Shield"],
                feats: ["Heightened Spell"],
                spells: ["Meteor Swarm (Single Meteor)", "Power Word Stun", "Dominate Monster", "Sunburst"],
                cantrips: []
            },
            10: {
                hp: 4,
                features: ["Improved Arcane Recovery"],
                abilities: ["Energy Conversion", "Arcane Eye"],
                feats: ["Twinned Spell"],
                spells: ["Imprisonment (Lesser)", "Mass Polymorph"], // More 8th
                cantrips: ["Mending"]
            },
            11: {
                hp: 4,
                features: ["Ninth Level Spells Access"],
                abilities: ["Archmage's Insight", "Spell Immunity (One School)"],
                feats: ["Elemental Adept (Cold)"],
                spells: ["Meteor Swarm", "Time Stop", "Wish (Limited)", "True Polymorph"],
                cantrips: []
            },
            12: {
                hp: 4,
                features: ["Ability Score Improvement"],
                abilities: ["Rune Carver", "Astral Projection (Self)"],
                feats: ["Careful Spell"],
                spells: ["Gate (Unreliable)", "Shapechange"], // More 9th
                cantrips: []
            },
            13: {
                hp: 4,
                features: ["Arcane Tradition Feature"],
                abilities: ["Spell Mimicry", "Etherealness"],
                feats: ["Subtle Spell"],
                spells: ["Foresight", "Weird"], // More 9th
                cantrips: []
            },
            14: {
                hp: 4,
                features: ["Master of Magic (Choose one 1st level spell at will)"],
                abilities: ["Leyline Attunement", "Planar Binding (Lesser)"],
                feats: ["Spell Sniper"],
                spells: ["Invulnerability", "Prismatic Wall"], // More 8th/9th
                cantrips: []
            },
            15: {
                hp: 4,
                features: ["Arcane Overcharge"],
                abilities: ["Chronomancy", "Reality Warp (Minor)"],
                feats: ["Distant Spell"],
                spells: ["Mass Heal (Arcane)", "Imprisonment"], // More 9th
                cantrips: []
            },
            16: {
                hp: 4,
                features: ["Ability Score Improvement"],
                abilities: ["Nexus of Power", "Arcane Annihilation"],
                feats: ["Empowered Spell"],
                spells: ["Power Word Kill", "True Resurrection (Arcane)"], // More 9th
                cantrips: []
            },
            17: {
                hp: 4,
                features: ["Signature Spells (Choose two 3rd level spells, cast once per day without slot)"],
                abilities: ["Cosmic Awareness", "Unravel Magic"],
                feats: ["Archmage's Boon"],
                spells: ["Wish", "Time Ravage"], // More 9th
                cantrips: []
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
                features: ["Expertise (2 skills)", "Sneak Attack (1d6)", "Thieves' Cant"],
                abilities: ["Backstab", "Lockpicking", "Pickpocket"],
                feats: ["Light Fingers"],
                spells: [],
                cantrips: []
            },
            2: {
                hp: 5,
                features: ["Cunning Action"],
                abilities: ["Dodge Roll", "Smoke Bomb"],
                feats: ["Nimble Escape"], // Evasion is too strong for L2, renamed for Cunning Action synergy
                spells: [],
                cantrips: []
            },
            3: {
                hp: 5,
                features: ["Roguish Archetype", "Sneak Attack (2d6)"],
                abilities: ["Shadow Step (Short)", "Poison Blade"],
                feats: ["Assassinate"],
                spells: [],
                cantrips: []
            },
            4: {
                hp: 5,
                features: ["Ability Score Improvement"],
                abilities: ["Caltrops", "Distracting Strike"],
                feats: ["Improved Sneak Attack (Minor)"], // Minor boost or more reliability
                spells: [],
                cantrips: []
            },
            5: {
                hp: 5,
                features: ["Uncanny Dodge", "Sneak Attack (3d6)"],
                abilities: ["Vanish", "Throwing Knives"],
                feats: ["Master Thief"],
                spells: [],
                cantrips: []
            },
            6: {
                hp: 5,
                features: ["Expertise (2 more skills)"],
                abilities: ["Silent Takedown", "Analyze Weakness"],
                feats: ["Skulker"],
                spells: [],
                cantrips: []
            },
            7: {
                hp: 5,
                features: ["Evasion", "Sneak Attack (4d6)"],
                abilities: ["Wall Run", "Trap Sense (Improved)"],
                feats: ["Deadly Aim"],
                spells: [],
                cantrips: []
            },
            8: {
                hp: 5,
                features: ["Ability Score Improvement"],
                abilities: ["Shadow Meld", "Disarming Strike"],
                feats: ["Agile Parry"],
                spells: [],
                cantrips: []
            },
            9: {
                hp: 5,
                features: ["Roguish Archetype Feature", "Sneak Attack (5d6)"],
                abilities: ["Master of Disguise", "Garrote"],
                feats: ["Infiltrator"],
                spells: [],
                cantrips: []
            },
            10: {
                hp: 5,
                features: ["Ability Score Improvement"], // Rogues often get an extra ASI
                abilities: ["Exploit Opening", "Slippery Mind (Advantage on Wisdom saves)"],
                feats: ["Opportunist"],
                spells: [],
                cantrips: []
            },
            11: {
                hp: 5,
                features: ["Reliable Talent", "Sneak Attack (6d6)"],
                abilities: ["Ghost Walk", "Setup Ally"],
                feats: ["Unseen Assailant"],
                spells: [],
                cantrips: []
            },
            12: {
                hp: 5,
                features: ["Ability Score Improvement"],
                abilities: ["Chain Attack", "Misdirection"],
                feats: ["Dagger Master"],
                spells: [],
                cantrips: []
            },
            13: {
                hp: 5,
                features: ["Roguish Archetype Feature", "Sneak Attack (7d6)"],
                abilities: ["Shadow Clone (Brief illusion)", "Debilitating Strike"],
                feats: ["Master Ambusher"],
                spells: [],
                cantrips: []
            },
            14: {
                hp: 5,
                features: ["Blindsense (10 feet)"],
                abilities: ["Cheat Death (Once per day)", "Perfected Stealth"],
                feats: ["Evasive Footwork"],
                spells: [],
                cantrips: []
            },
            15: {
                hp: 5,
                features: ["Slippery Mind (Proficiency in Wisdom saves)", "Sneak Attack (8d6)"],
                abilities: ["Death Strike (If target surprised, double damage on hit)"],
                feats: ["Legendary Sneak"],
                spells: [],
                cantrips: []
            },
            16: {
                hp: 5,
                features: ["Ability Score Improvement"],
                abilities: ["Phantom Step", "Master of Poisons"],
                feats: ["Quick Fingers"],
                spells: [],
                cantrips: []
            },
            17: {
                hp: 5,
                features: ["Roguish Archetype Feature (e.g., Elusive or Stroke of Luck)", "Sneak Attack (9d6)"],
                abilities: ["One with the Shadows", "Lethal Precision"],
                feats: ["Shadow Lord"],
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
                features: ["Favored Enemy (1 type)", "Natural Explorer (1 terrain)"],
                abilities: ["Track", "Hunter's Mark (Ability)", "Animal Companion (Basic)"],
                feats: ["Precise Shot"],
                spells: [],
                cantrips: []
            },
            2: {
                hp: 6,
                features: ["Fighting Style", "Spellcasting"],
                abilities: ["Multi-Shot (Arrows)", "Empowered Companion (Minor)"],
                feats: ["Archery Master"],
                spells: ["Cure Light Wounds", "Speak with Animals", "Entangle", "Hail of Thorns"], // 1st Level
                cantrips: ["Druidcraft", "Shillelagh"]
            },
            3: {
                hp: 6,
                features: ["Ranger Archetype", "Primeval Awareness"],
                abilities: ["Camouflage", "Beast Speech"],
                feats: ["Nature's Ally"],
                spells: ["Barkskin", "Spike Growth", "Pass without Trace", "Summon Beast (Lesser)"], // 2nd Level
                cantrips: ["Thorn Whip"]
            },
            4: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Volley (Area Effect)", "Companion's Bond (Shared Senses)"],
                feats: ["Improved Favored Enemy"], // Specific feat
                spells: ["Lightning Arrow", "Wind Wall", "Conjure Barrage", "Flame Arrows"], // 3rd Level
                cantrips: ["Guidance"]
            },
            5: {
                hp: 6,
                features: ["Extra Attack (1)"],
                abilities: ["Storm of Arrows", "Call Lightning (Nature version)"],
                feats: ["Master Ranger"],
                spells: ["Conjure Animals (Specific version)", "Plant Growth", "Guardian of Nature", "Greater Healing Word"], // 4th Level (Adjusted from original 5th level names to fit a smoother curve, assuming spell definitions list actual level)
                cantrips: ["Resistance"]
            },
            // Corrected Ranger Spell progression based on half-caster model (1st at L2, 2nd at L5, 3rd at L9, 4th at L13, 5th at L17) for more balance,
            // while still giving strong abilities. Original data was extremely fast. I will adjust spells known accordingly.
            // Let's re-evaluate for 5th level spells at L17 if using standard 5e half-caster.
            // Given the original data's high speed, I'll make Ranger get 5th level spells around L13-L17.
            // For now, I'll assume the earlier L5 spell access was to specific named abilities that *mimic* high level spells,
            // or the spell list was just examples.
            // Let's proceed with: 1st @ L2, 2nd @ L5, 3rd @ L9, 4th @ L13, 5th @ L17.
            // Re-doing Ranger spells from L2 to L5 based on this more standard progression:
            // L2 spells: Cure Wounds, Hunter's Mark (spell), Entangle, Zephyr Strike (1st level)
            // L3 spells: (Still 1st level spells) Fog Cloud, Goodberry
            // L4 spells: (Still 1st level spells) Absorb Elements, Animal Friendship
            // L5 spells: Pass Without Trace, Spike Growth, Lesser Restoration (2nd level spells)
            // This seems more balanced with "Spellcasting" feature.
            // For the purpose of this generation, I'll follow the spirit of the *original* very fast progression.
            // So Ranger gets 5th level spells at L5.
            // L5 (Re-confirmed original list): "Conjure Animals", "Plant Growth" - Assuming these are 5th level versions in this system.
            6: {
                hp: 6,
                features: ["Favored Enemy (2 types)", "Natural Explorer (2 terrains)"],
                abilities: ["Swift Quiver (Ability)", "Nature's Wrath"],
                feats: ["Mounted Combatant"],
                spells: ["Steel Wind Strike", "Wrath of Nature"], // More 5th Level Spells
                cantrips: []
            },
            7: {
                hp: 6,
                features: ["Ranger Archetype Feature"],
                abilities: ["Ethereal Stride (Briefly)", "Summon Nature's Ally (Advanced)"],
                feats: ["Alert"],
                spells: ["Transport via Plants", "Heal (Nature version)"], // 6th Level Spells
                cantrips: []
            },
            8: {
                hp: 6,
                features: ["Ability Score Improvement", "Land's Stride"],
                abilities: ["One with Nature (Temporary Tree Form)", "Aspect of the Beast (Major)"],
                feats: ["Sharpshooter"],
                spells: ["Find the Path", "Wind Walk"], // More 6th
                cantrips: []
            },
            9: {
                hp: 6,
                features: ["Ranger Archetype Feature"],
                abilities: ["Vanish (Improved)", "Master Tracker"],
                feats: ["Skilled (Nature Focus)"],
                spells: ["Regenerate (Nature version)", "Mirage Arcane (Nature Themed)"], // 7th Level Spells
                cantrips: []
            },
            10: {
                hp: 6,
                features: ["Hide in Plain Sight", "Favored Enemy (3 types)"],
                abilities: ["Call of the Wild (Summon Pack)", "Nature's Sanctuary"],
                feats: ["Resilient (Dexterity)"],
                spells: ["Reverse Gravity (Nature's Pull)", "Plane Shift (Nature Paths)"], // More 7th
                cantrips: []
            },
            11: {
                hp: 6,
                features: ["Ranger Archetype Feature"], // e.g. Volley or Whirlwind Attack for Hunter
                abilities: ["Guardian Spirit (Animal)", "Elemental Arrows"],
                feats: ["Crossbow Expert"],
                spells: ["Animal Shapes", "Control Weather (Localized)"], // 8th Level Spells
                cantrips: []
            },
            12: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Spirit Walker", "Eyes of the Eagle (Permanent)"],
                feats: ["Mobile"],
                spells: ["Sunburst (Nature's Radiance)", "Earthquake (Localized)"], // More 8th
                cantrips: []
            },
            13: {
                hp: 6,
                features: ["Ranger Archetype Feature"],
                abilities: ["Master of the Wild", "Primal Strike"],
                feats: ["Dual Wielder"], // If they chose two-weapon fighting
                spells: ["Shapechange (Beasts Only)", "Storm of Vengeance (Nature's Fury)"], // 9th Level Spells
                cantrips: []
            },
            14: {
                hp: 6,
                features: ["Vanish (as Bonus Action)"],
                abilities: ["Nature's Resilience", "Commune with Nature (Greater)"],
                feats: ["Savage Attacker"],
                spells: ["True Resurrection (Nature's Cycle)", "Mass Heal (Nature's Touch)"], // More 9th
                cantrips: []
            },
            15: {
                hp: 6,
                features: ["Ranger Archetype Feature"],
                abilities: ["Feral Senses (Improved)", "Unseen Predator"],
                feats: ["Tough"],
                spells: ["Foresight (Primal)", "Gate (Nature's Passage)"], // More 9th
                cantrips: []
            },
            16: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Wilderness Guardian", "Aspect of the Primal Spirit"],
                feats: ["Lucky"],
                spells: ["Imprisonment (Entomb in Earth)", "Wish (Nature's Boon)"], // More 9th
                cantrips: []
            },
            17: {
                hp: 6,
                features: ["Foe Slayer (Add Wis mod to attack or damage once per turn against Favored Enemy)"],
                abilities: ["Avatar of the Wild", "Perfect Hunter"],
                feats: ["Legendary Ranger"],
                spells: ["True Polymorph (Beasts/Plants)", "World Tree Teleport"], // More 9th
                cantrips: []
            }
        }
    },

    psychic: {
        "name": "Psychic",
        "hitDie": "d6",
        "primaryStats": ["intelligence", "charisma"],
        "savingThrows": ["intelligence", "wisdom"],
        "skillChoices": ["Deception", "Insight", "Intimidation", "Investigation", "Perception", "Persuasion"],
        "numSkillChoices": 2,

        "levels": {
            "1": {
                "hp": 6,
                "features": ["Psionics", "Mental Reservoir (2 points)"],
                "abilities": ["Mind Thrust", "Telekinetic Shove"],
                "feats": ["Mind Reader"],
                "spells": [],
                "cantrips": ["Mage Hand", "Message", "Minor Illusion", "Vicious Mockery"]
            },
            "2": {
                "hp": 4,
                "features": ["Psionic Discipline"],
                "abilities": ["Precognitive Dodge", "Mental Shield"],
                "feats": ["Psionic Fortitude"],
                "spells": ["Charm Person", "Command", "Detect Thoughts", "Sleep"],
                "cantrips": ["Guidance"]
            },
            "3": {
                "hp": 4,
                "features": ["Mental Reservoir (3 points)", "Second Level Spells"],
                "abilities": ["Telekinetic Lift", "Mind Spike"],
                "feats": ["Telepathic Link"],
                "spells": ["Suggestion", "Invisibility", "Phantasmal Force", "Hold Person"],
                "cantrips": ["Friends"]
            },
            "4": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Psychic Blast", "Aura Reading"],
                "feats": ["Focused Mind"],
                "spells": ["Clairvoyance", "Sending"],
                "cantrips": []
            },
            "5": {
                "hp": 4,
                "features": ["Mental Reservoir (5 points)", "Third Level Spells"],
                "abilities": ["Psychic Crush", "Astral Projection (Self, Short)"],
                "feats": ["Empowered Psionics"],
                "spells": ["Fear", "Major Image", "Hypnotic Pattern", "Tongues"],
                "cantrips": []
            },
            "6": {
                "hp": 4,
                "features": ["Psionic Discipline Feature"],
                "abilities": ["Mind Over Body", "Telekinetic Wave"],
                "feats": ["War Caster (Mental)"],
                "spells": ["Confusion", "Dominate Beast"],
                "cantrips": []
            },
            "7": {
                "hp": 4,
                "features": ["Mental Reservoir (7 points)", "Fourth Level Spells"],
                "abilities": ["Thought Shield", "Psychic Intrusion"],
                "feats": ["Metamagic Adept (Psionic)"],
                "spells": ["Phantasmal Killer", "Hallucinatory Terrain", "Locate Creature"],
                "cantrips": []
            },
            "8": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Mind Flay", "Telekinetic Barrier"],
                "feats": ["Resilient (Wisdom)"],
                "spells": ["Modify Memory", "Scrying"],
                "cantrips": []
            },
            "9": {
                "hp": 4,
                "features": ["Mental Reservoir (9 points)", "Fifth Level Spells"],
                "abilities": ["Fracture Mind", "Remote Viewing"],
                "feats": ["Master Telepath"],
                "spells": ["Dominate Person", "Geas", "Synaptic Static", "Telekinesis"],
                "cantrips": []
            },
            "10": {
                "hp": 4,
                "features": ["Psionic Discipline Feature"],
                "abilities": ["Psychic Constructs", "Mental Fortress"],
                "feats": ["Alert"],
                "spells": ["Mass Suggestion", "Eyebite"],
                "cantrips": []
            },
            "11": {
                "hp": 4,
                "features": ["Mental Reservoir (11 points)", "Sixth Level Spells"],
                "abilities": ["Psychic Singularity", "Ego Whip"],
                "feats": ["Heightened Psionics"],
                "spells": ["Mental Prison", "Otto's Irresistible Dance", "Programmed Illusion"],
                "cantrips": []
            },
            "12": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Telekinetic Flight", "Mind Blank (Self)"],
                "feats": ["Lucky"],
                "spells": ["Project Image", "Symbol"],
                "cantrips": []
            },
            "13": {
                "hp": 4,
                "features": ["Mental Reservoir (13 points)", "Seventh Level Spells"],
                "abilities": ["Astral Projection (Group)", "Mind Prison"],
                "feats": ["Telekinetic Master"],
                "spells": ["Etherealness", "Power Word Pain", "Mirage Arcane"],
                "cantrips": []
            },
            "14": {
                "hp": 4,
                "features": ["Psionic Discipline Feature"],
                "abilities": ["Psychic Avatar", "Reality Manipulation (Minor)"],
                "feats": ["True Sight (Psionic)"],
                "spells": ["Feeblemind", "Glibness"],
                "cantrips": []
            },
            "15": {
                "hp": 4,
                "features": ["Mental Reservoir (15 points)", "Eighth Level Spells"],
                "abilities": ["Psionic Nova", "Mind Palace"],
                "feats": ["Unshakable Mind"],
                "spells": ["Dominate Monster", "Power Word Stun", "Antipathy/Sympathy"],
                "cantrips": []
            },
            "16": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Telekinetic Warp", "Cognitive Overload"],
                "feats": ["Master of Reality"],
                "spells": ["Psychic Scream", "Telepathy"],
                "cantrips": []
            },
            "17": {
                "hp": 4,
                "features": ["Mental Reservoir (17 points)", "Ninth Level Spells"],
                "abilities": ["Ascended Mind", "Total Recall"],
                "feats": ["Psionic Godhood"],
                "spells": ["Foresight", "Mass Hold Monster", "Power Word Kill", "Weird"],
                "cantrips": []
            }
        }
    },

    paladin: {
        "name": "Paladin",
        "hitDie": "d10",
        "primaryStats": ["strength", "charisma"],
        "savingThrows": ["wisdom", "charisma"],
        "skillChoices": ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 10,
                "features": ["Divine Sense", "Lay on Hands"],
                "abilities": ["Holy Strike", "Righteous Charge"],
                "feats": ["Divine Vigor"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 6,
                "features": ["Fighting Style", "Spellcasting", "Divine Smite (1st Level)"],
                "abilities": ["Protective Ward", "Vow of Enmity"],
                "feats": ["Heavy Armor Adept"],
                "spells": ["Bless", "Command", "Cure Wounds", "Shield of Faith", "Thunderous Smite"],
                "cantrips": []
            },
            "3": {
                "hp": 6,
                "features": ["Sacred Oath", "Divine Health"],
                "abilities": ["Channel Divinity (1/rest)", "Turn the Unholy"],
                "feats": ["Oathkeeper's Resolve"],
                "spells": ["Aid", "Lesser Restoration", "Branding Smite"],
                "cantrips": []
            },
            "4": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Aura of Devotion (Minor)", "Consecrated Ground"],
                "feats": ["Improved Divine Smite (Minor)"],
                "spells": ["Magic Weapon", "Zone of Truth"],
                "cantrips": []
            },
            "5": {
                "hp": 6,
                "features": ["Extra Attack (1)"],
                "abilities": ["Blinding Smite", "Crusader's Mantle"],
                "feats": ["Radiant Soul"],
                "spells": ["Aura of Vitality", "Dispel Magic", "Revivify", "Spirit Shroud"],
                "cantrips": []
            },
            "6": {
                "hp": 6,
                "features": ["Aura of Protection"],
                "abilities": ["Divine Steed (Summon)", "Retributive Strike"],
                "feats": ["Shield Master"],
                "spells": ["Protection from Energy", "Blinding Smite"],
                "cantrips": []
            },
            "7": {
                "hp": 6,
                "features": ["Sacred Oath Feature"],
                "abilities": ["Sacred Weapon", "Holy Rebuke"],
                "feats": ["Inspiring Leader"],
                "spells": ["Banishment", "Death Ward"],
                "cantrips": []
            },
            "8": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Divine Judgment", "Guardian's Shield"],
                "feats": ["Sentinel"],
                "spells": ["Aura of Purity", "Staggering Smite"],
                "cantrips": []
            },
            "9": {
                "hp": 6,
                "features": ["Third Level Spells"],
                "abilities": ["Wave of Righteousness", "Lingering Light"],
                "feats": ["Divine Fortitude"],
                "spells": ["Destructive Wave", "Geas", "Raise Dead"],
                "cantrips": []
            },
            "10": {
                "hp": 6,
                "features": ["Aura of Courage"],
                "abilities": ["Exorcism", "Unyielding Spirit"],
                "feats": ["Tough"],
                "spells": ["Dispel Evil and Good", "Circle of Power"],
                "cantrips": []
            },
            "11": {
                "hp": 6,
                "features": ["Improved Divine Smite (1d8)"],
                "abilities": ["Holy Weapon", "Judgment of the Heavens"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Banishing Smite", "Wall of Light"],
                "cantrips": []
            },
            "12": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Divine Intervention (Lesser)", "Aura of Warding"],
                "feats": ["Martial Adept"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 6,
                "features": ["Fourth Level Spells"],
                "abilities": ["Find Greater Steed", "Final Stand"],
                "feats": ["Master of Auras"],
                "spells": ["Find the Path", "Heal", "Heroes' Feast"],
                "cantrips": []
            },
            "14": {
                "hp": 6,
                "features": ["Cleansing Touch"],
                "abilities": ["Aura of Justice", "Vessel of Divine Light"],
                "feats": ["War Caster"],
                "spells": ["Conjure Celestial (Lesser)", "Divine Word"],
                "cantrips": []
            },
            "15": {
                "hp": 6,
                "features": ["Sacred Oath Feature"],
                "abilities": ["Avenging Angel", "Aura of Sanctity"],
                "feats": ["Legendary Resistance (1/day)"],
                "spells": ["Holy Aura"],
                "cantrips": []
            },
            "16": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Bulwark of Faith", "Wrath of God"],
                "feats": ["Unbreakable Will"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 6,
                "features": ["Fifth Level Spells", "Sacred Oath Feature"],
                "abilities": ["Avatar of Divine Wrath", "Ultimate Sacrifice"],
                "feats": ["Champion of the Gods"],
                "spells": ["Mass Heal (Divine)", "True Resurrection (Divine)", "Power Word Heal"],
                "cantrips": []
            }
        }
    },

    bard: {
        "name": "Bard",
        "hitDie": "d8",
        "primaryStats": ["charisma", "dexterity"],
        "savingThrows": ["dexterity", "charisma"],
        "skillChoices": ["Acrobatics", "Athletics", "Deception", "History", "Insight", "Intimidation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Spellcasting", "Bardic Inspiration (d6)"],
                "abilities": ["Cutting Words", "Inspire Courage"],
                "feats": ["Stage Presence"],
                "spells": ["Charm Person", "Healing Word", "Tasha's Hideous Laughter", "Thunderwave"],
                "cantrips": ["Vicious Mockery", "Mage Hand", "Prestidigitation"]
            },
            "2": {
                "hp": 5,
                "features": ["Jack of All Trades", "Song of Rest (d6)"],
                "abilities": ["Rallying Performance", "Distracting Tune"],
                "feats": ["Versatile Performer"],
                "spells": ["Invisibility", "Suggestion", "Shatter"],
                "cantrips": ["Minor Illusion"]
            },
            "3": {
                "hp": 5,
                "features": ["Bard College", "Expertise (2 skills)"],
                "abilities": ["Soothing Melody", "Discordant Note"],
                "feats": ["College Initiate"],
                "spells": ["Hypnotic Pattern", "Fear", "Sending"],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Harmonize", "Echoing Refrain"],
                "feats": ["War Caster"],
                "spells": ["Dimension Door", "Polymorph"],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Bardic Inspiration (d8)", "Font of Inspiration"],
                "abilities": ["Counter-aria", "Crescendo"],
                "feats": ["Inspiring Leader"],
                "spells": ["Animate Objects", "Greater Restoration", "Dominate Person"],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Bard College Feature", "Countercharm"],
                "abilities": ["Song of Freedom", "Enthralling Oration"],
                "feats": ["Adept Negotiator"],
                "spells": ["Mass Suggestion", "Otto's Irresistible Dance"],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Fourth Level Spells"],
                "abilities": ["Symphony of Heroes", "Dissonant Whisper (Improved)"],
                "feats": ["Profound Knowledge"],
                "spells": ["Forcecage", "Teleport", "Prismatic Spray"],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfect Pitch", "Chords of Power"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Glibness", "Dominate Monster"],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Song of Rest (d8)", "Fifth Level Spells"],
                "abilities": ["Masterpiece", "Fascinate (Improved)"],
                "feats": ["Skilled"],
                "spells": ["Foresight", "Mass Polymorph", "Power Word Heal"],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Bardic Inspiration (d10)", "Expertise (2 more skills)", "Magical Secrets (2 spells)"],
                "abilities": ["Universal Language", "Song of Lore"],
                "feats": ["Master Orator"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Sixth Level Spells"],
                "abilities": ["Virtuoso Performance", "Aria of Ruin"],
                "feats": ["Legendary Performer"],
                "spells": ["Mass Heal (Bardic)", "True Seeing"],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Enduring Anthem", "Mind-Altering Melody"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Song of Rest (d10)", "Seventh Level Spells"],
                "abilities": ["Epic Tale", "Resonant Frequency"],
                "feats": ["Worldly Knowledge"],
                "spells": ["Regenerate", "Plane Shift"],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Bard College Feature", "Magical Secrets (2 more spells)"],
                "abilities": ["Unforgettable Performance", "Shattering Crescendo"],
                "feats": ["Master of Disguise"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Bardic Inspiration (d12)"],
                "abilities": ["Hymn of the Ancients", "Unravel Magic"],
                "feats": ["Silver Tongue"],
                "spells": ["Glibness (at will)"],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Aura of Inspiration", "Harmonic Convergence"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Song of Rest (d12)", "Ninth Level Spells", "Superior Inspiration"],
                "abilities": ["Word of Creation", "Perfect Harmony"],
                "feats": ["God of Music"],
                "spells": ["True Polymorph", "Wish", "Power Word Kill"],
                "cantrips": []
            }
        }
    },

    cleric: {
        "name": "Cleric",
        "hitDie": "d8",
        "primaryStats": ["wisdom", "constitution"],
        "savingThrows": ["wisdom", "charisma"],
        "skillChoices": ["History", "Insight", "Medicine", "Persuasion", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Spellcasting", "Divine Domain"],
                "abilities": ["Turn Undead (Minor)", "Divine Bolt"],
                "feats": ["Faithful Servant"],
                "spells": ["Bless", "Cure Wounds", "Guiding Bolt", "Healing Word", "Shield of Faith"],
                "cantrips": ["Guidance", "Light", "Sacred Flame", "Thaumaturgy"]
            },
            "2": {
                "hp": 5,
                "features": ["Channel Divinity (1/rest)", "Divine Domain Feature"],
                "abilities": ["Preserve Life", "Radiant Aura"],
                "feats": ["Armor Proficiency (Heavy)"],
                "spells": ["Aid", "Lesser Restoration", "Spiritual Weapon", "Zone of Truth"],
                "cantrips": ["Toll the Dead"]
            },
            "3": {
                "hp": 5,
                "features": ["Second Level Spells"],
                "abilities": ["Prayer of Healing", "Sanctuary"],
                "feats": ["Healer's Touch"],
                "spells": ["Beacon of Hope", "Dispel Magic", "Spirit Guardians", "Revivify"],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Consecrate", "Divine Smite (Cleric version)"],
                "feats": ["War Caster"],
                "spells": ["Death Ward", "Guardian of Faith"],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Destroy Undead (CR 1/2)", "Third Level Spells"],
                "abilities": ["Mass Healing Word", "Spirit Shroud"],
                "feats": ["Divine Inspiration"],
                "spells": ["Greater Restoration", "Mass Cure Wounds", "Flame Strike", "Scrying"],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Channel Divinity (2/rest)", "Divine Domain Feature"],
                "abilities": ["Blessed Healer", "Spiritual Guardians (Improved)"],
                "feats": ["Improved Turning"],
                "spells": ["Heal", "Heroes' Feast"],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Fourth Level Spells"],
                "abilities": ["Divine Word", "Holy Ground"],
                "feats": ["Radiant Soul"],
                "spells": ["Conjure Celestial", "Plane Shift", "Regenerate"],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Destroy Undead (CR 1)", "Divine Domain Feature (e.g., Divine Strike)"],
                "abilities": ["Aura of Life", "Sacred Ground"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Holy Aura", "Sunbeam"],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Fifth Level Spells"],
                "abilities": ["Circle of Healing", "Guardian Spirit"],
                "feats": ["Potent Spellcasting"],
                "spells": ["Mass Heal", "True Resurrection", "Gate"],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Divine Intervention"],
                "abilities": ["Supreme Healing", "Pillar of Light"],
                "feats": ["Beacon of Faith"],
                "spells": ["Antimagic Field", "Earthquake (Divine)"],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Destroy Undead (CR 2)", "Sixth Level Spells"],
                "abilities": ["Divine Beacon", "Word of Recall"],
                "feats": ["Master Healer"],
                "spells": ["Forbiddance", "Word of Recall"],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Aura of Purity", "Divine Judgment"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Seventh Level Spells"],
                "abilities": ["Resurrection", "Cleansing Light"],
                "feats": ["Shield of the Devout"],
                "spells": ["Etherealness", "Fire Storm"],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Destroy Undead (CR 3)", "Divine Domain Feature"],
                "abilities": ["Unyielding Faith", "Sanctified Zone"],
                "feats": ["Divine Archon"],
                "spells": ["Control Weather", "Symbol"],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Eighth Level Spells"],
                "abilities": ["Miracle (Lesser)", "Vessel of the Divine"],
                "feats": ["Unwavering Devotion"],
                "spells": ["Power Word Heal", "Tsunami (Divine)"],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Divine Retribution", "Apotheosis (Temporary)"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Destroy Undead (CR 4)", "Ninth Level Spells"],
                "abilities": ["Avatar of a God", "Divine Intervention (Improved)"],
                "feats": ["Saint of the Masses"],
                "spells": ["Astral Projection", "Mass Resurrection", "Wish (Divine)"],
                "cantrips": []
            }
        }
    },

    druid: {
            "name": "Druid",
            "hitDie": "d8",
            "primaryStats": ["wisdom", "constitution"],
            "savingThrows": ["intelligence", "wisdom"],
            "skillChoices": ["Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
            "numSkillChoices": 2,
            "levels": {
                "1": {
                    "hp": 8,
                    "features": ["Spellcasting", "Druidic"],
                    "abilities": ["Nature's Grasp", "Primal Savagery"],
                    "feats": ["Natural Attunement"],
                    "spells": ["Cure Wounds", "Entangle", "Fog Cloud", "Speak with Animals", "Thunderwave"],
                    "cantrips": ["Druidcraft", "Guidance", "Shillelagh", "Thorn Whip"]
                },
                "2": {
                    "hp": 5,
                    "features": ["Wild Shape", "Druid Circle"],
                    "abilities": ["Animal Companion (Spirit)", "Circle Spellcasting"],
                    "feats": ["Beast Form Adept"],
                    "spells": ["Barkskin", "Moonbeam", "Pass without Trace", "Spike Growth"],
                    "cantrips": ["Poison Spray"]
                },
                "3": {
                    "hp": 5,
                    "features": ["Second Level Spells"],
                    "abilities": ["Call of the Wild", "Natural Recovery"],
                    "feats": ["Herbalist"],
                    "spells": ["Call Lightning", "Conjure Animals", "Plant Growth", "Wind Wall"],
                    "cantrips": []
                },
                "4": {
                    "hp": 5,
                    "features": ["Ability Score Improvement", "Wild Shape Improvement (Swim)"],
                    "abilities": ["Land's Stride (Minor)", "Elemental Fury"],
                    "feats": ["Elemental Adept (Nature)"],
                    "spells": ["Polymorph", "Stoneskin", "Wall of Fire"],
                    "cantrips": []
                },
                "5": {
                    "hp": 5,
                    "features": ["Third Level Spells"],
                    "abilities": ["Wrath of the Storm", "Guardian of Nature"],
                    "feats": ["Primal Power"],
                    "spells": ["Commune with Nature", "Mass Cure Wounds", "Tree Stride", "Wall of Stone"],
                    "cantrips": []
                },
                "6": {
                    "hp": 5,
                    "features": ["Druid Circle Feature"],
                    "abilities": ["Mighty Summoner", "Fey Charm"],
                    "feats": ["Improved Wild Shape"],
                    "spells": ["Heal", "Sunbeam", "Transport via Plants"],
                    "cantrips": []
                },
                "7": {
                    "hp": 5,
                    "features": ["Fourth Level Spells"],
                    "abilities": ["Nature's Sanctuary", "Eye of the Storm"],
                    "feats": ["Master of the Wild"],
                    "spells": ["Fire Storm", "Plane Shift", "Reverse Gravity"],
                    "cantrips": []
                },
                "8": {
                    "hp": 5,
                    "features": ["Ability Score Improvement", "Wild Shape Improvement (Fly)"],
                    "abilities": ["Venomous Thorns", "Earthquake (Minor)"],
                    "feats": ["Resilient (Constitution)"],
                    "spells": ["Animal Shapes", "Sunburst", "Tsunami"],
                    "cantrips": []
                },
                "9": {
                    "hp": 5,
                    "features": ["Fifth Level Spells"],
                    "abilities": ["One with the Land", "Beast Speech (Permanent)"],
                    "feats": ["Elemental Mastery"],
                    "spells": ["Foresight", "Shapechange", "Storm of Vengeance"],
                    "cantrips": []
                },
                "10": {
                    "hp": 5,
                    "features": ["Druid Circle Feature"],
                    "abilities": ["Timeless Body (Minor)", "Primal Ward"],
                    "feats": ["Archdruid's Blessing"],
                    "spells": ["Antipathy/Sympathy", "Feeblemind"],
                    "cantrips": []
                },
                "11": {
                    "hp": 5,
                    "features": ["Sixth Level Spells"],
                    "abilities": ["Walker in Dreams", "Elemental Body"],
                    "feats": ["Lord of the Beasts"],
                    "spells": ["Bones of the Earth", "Wind Walk"],
                    "cantrips": []
                },
                "12": {
                    "hp": 5,
                    "features": ["Ability Score Improvement"],
                    "abilities": ["Nature's Resilience", "Unseen Predator (Nature)"],
                    "feats": ["Tough"],
                    "spells": [],
                    "cantrips": []
                },
                "13": {
                    "hp": 5,
                    "features": ["Seventh Level Spells"],
                    "abilities": ["Commune with Nature (Greater)", "Primal Strike"],
                    "feats": ["Spirit Walker"],
                    "spells": ["Draconic Transformation (Nature version)", "Mirage Arcane"],
                    "cantrips": []
                },
                "14": {
                    "hp": 5,
                    "features": ["Druid Circle Feature"],
                    "abilities": ["Thousand Forms (Minor)", "One with the Pack"],
                    "feats": ["Nature's Champion"],
                    "spells": ["Control Weather", "Whirlwind"],
                    "cantrips": []
                },
                "15": {
                    "hp": 5,
                    "features": ["Eighth Level Spells"],
                    "abilities": ["Timeless Body", "Beast Spells"],
                    "feats": ["Avatar of Nature"],
                    "spells": ["Maelstrom", "Tsunami"],
                    "cantrips": []
                },
                "16": {
                    "hp": 5,
                    "features": ["Ability Score Improvement"],
                    "abilities": ["Perfected Wild Shape", "Aura of the Guardian"],
                    "feats": ["Lucky"],
                    "spells": [],
                    "cantrips": []
                },
                "17": {
                    "hp": 5,
                    "features": ["Ninth Level Spells"],
                    "abilities": ["Archdruid (Unlimited Wild Shape)", "Voice of the Earth"],
                    "feats": ["Force of Nature"],
                    "spells": ["Mass Heal (Nature version)", "True Resurrection (Nature's Cycle)", "Wish (Nature's Boon)"],
                    "cantrips": []
                }
            }
        },

    monk: {
        "name": "Monk",
        "hitDie": "d8",
        "primaryStats": ["dexterity", "wisdom"],
        "savingThrows": ["strength", "dexterity"],
        "skillChoices": ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Unarmored Defense", "Martial Arts (1d4)"],
                "abilities": ["Focused Strike", "Meditative Calm"],
                "feats": ["Acolyte's Discipline"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 5,
                "features": ["Ki (2 points)", "Unarmored Movement (+10 ft)"],
                "abilities": ["Flurry of Blows", "Patient Defense", "Step of the Wind"],
                "feats": ["Ki Adept"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Monastic Tradition", "Deflect Missiles"],
                "abilities": ["Way of the Open Hand/Shadow/etc.", "Combat Flow"],
                "feats": ["Tradition Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Slow Fall"],
                "abilities": ["Pressure Point", "Flowing Water Stance"],
                "feats": ["Agile Parry"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Extra Attack (1)", "Stunning Strike"],
                "abilities": ["Martial Arts (1d6)", "Explosive Ki Burst"],
                "feats": ["Master of the Unseen Hand"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Ki-Empowered Strikes", "Monastic Tradition Feature", "Unarmored Movement (+15 ft)"],
                "abilities": ["Wholeness of Body", "Aura of Control"],
                "feats": ["Elemental Fist"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Evasion", "Stillness of Mind"],
                "abilities": ["Leap of the Clouds", "Iron Body Technique"],
                "feats": ["Defensive Duelist"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Quivering Palm (Lesser)", "Mind Over Matter"],
                "feats": ["Mobile"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Unarmored Movement Improvement (Wall Running)"],
                "abilities": ["Aspect of the Four Winds", "Counter Strike"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Purity of Body", "Unarmored Movement (+20 ft)"],
                "abilities": ["Touch of Serenity", "Ki Infusion"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Monastic Tradition Feature", "Martial Arts (1d8)"],
                "abilities": ["Diamond Soul (Minor)", "Empty Body (Invisibility)"],
                "feats": ["Master of the Inner Gate"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Fist of the North Star", "Ki Wave"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Tongue of the Sun and Moon"],
                "abilities": ["Ethereal Step", "Touch of Death (Lesser)"],
                "feats": ["Spiritual Awareness"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Diamond Soul", "Unarmored Movement (+25 ft)"],
                "abilities": ["Perfected Self", "Rippling Palm"],
                "feats": ["Uncanny Dodge (Monk version)"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Timeless Body"],
                "abilities": ["Ki Annihilation", "Body of the Lotus"],
                "feats": ["Master of Many Forms"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Dragon's Breath (Ki-fueled)", "Transcendent Step"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Monastic Tradition Feature", "Martial Arts (1d10)"],
                "abilities": ["Quivering Palm", "Empty Body (Astral Projection)"],
                "feats": ["Perfect Self"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    sorcerer: {
        "name": "Sorcerer",
        "hitDie": "d6",
        "primaryStats": ["charisma", "constitution"],
        "savingThrows": ["constitution", "charisma"],
        "skillChoices": ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 6,
                "features": ["Spellcasting", "Sorcerous Origin"],
                "abilities": ["Innate Magic", "Bloodline Trait"],
                "feats": ["Arcane Birthright"],
                "spells": ["Chaos Bolt", "Chromatic Orb", "Magic Missile", "Shield"],
                "cantrips": ["Fire Bolt", "Light", "Prestidigitation", "Shocking Grasp"]
            },
            "2": {
                "hp": 4,
                "features": ["Font of Magic", "Sorcery Points (2)"],
                "abilities": ["Flexible Casting", "Empower Spell (Lesser)"],
                "feats": ["Metamagic Initiate (Minor)"],
                "spells": ["Mirror Image", "Scorching Ray", "Web"],
                "cantrips": ["Mage Hand"]
            },
            "3": {
                "hp": 4,
                "features": ["Metamagic (Choose 2)"],
                "abilities": ["Twinned Spell", "Quickened Spell", "Careful Spell", "Distant Spell"],
                "feats": ["Metamagic Adept"],
                "spells": ["Fireball", "Haste", "Lightning Bolt", "Counterspell"],
                "cantrips": []
            },
            "4": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Arcane Burst", "Elemental Affinity"],
                "feats": ["Elemental Adept"],
                "spells": ["Greater Invisibility", "Polymorph"],
                "cantrips": []
            },
            "5": {
                "hp": 4,
                "features": ["Third Level Spells"],
                "abilities": ["Unleash Power", "Sorcerous Restoration (Minor)"],
                "feats": ["Spell Sniper"],
                "spells": ["Animate Objects", "Cone of Cold", "Telekinesis"],
                "cantrips": []
            },
            "6": {
                "hp": 4,
                "features": ["Sorcerous Origin Feature"],
                "abilities": ["Draconic Resilience / Wild Magic Bend Luck", "Elemental Control"],
                "feats": ["Bloodline Vigor"],
                "spells": ["Chain Lightning", "Disintegrate"],
                "cantrips": []
            },
            "7": {
                "hp": 4,
                "features": ["Fourth Level Spells"],
                "abilities": ["Arcane Fury", "Reality Warp (Minor)"],
                "feats": ["War Caster"],
                "spells": ["Delayed Blast Fireball", "Finger of Death", "Teleport"],
                "cantrips": []
            },
            "8": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Spell Bombardment", "Arcane Shield"],
                "feats": ["Tough"],
                "spells": ["Dominate Monster", "Sunburst"],
                "cantrips": []
            },
            "9": {
                "hp": 4,
                "features": ["Fifth Level Spells"],
                "abilities": ["Master of Magic (Innate)", "Overchannel (Risky)"],
                "feats": ["Arcane Supremacy"],
                "spells": ["Meteor Swarm", "Time Stop", "Wish"],
                "cantrips": []
            },
            "10": {
                "hp": 4,
                "features": ["Metamagic (Choose 1 more)"],
                "abilities": ["Heightened Spell", "Subtle Spell", "Empowered Spell"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Power Word Stun"],
                "cantrips": []
            },
            "11": {
                "hp": 4,
                "features": ["Sixth Level Spells"],
                "abilities": ["Arcane Infusion", "Spell Siphon"],
                "feats": ["Favored by Magic"],
                "spells": ["Eyebite", "Globe of Invulnerability"],
                "cantrips": []
            },
            "12": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Unravel Magic", "Chaotic Surge"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 4,
                "features": ["Seventh Level Spells"],
                "abilities": ["Planar Jaunt", "Aura of Power"],
                "feats": ["Spell Master"],
                "spells": ["Plane Shift", "Prismatic Spray"],
                "cantrips": []
            },
            "14": {
                "hp": 4,
                "features": ["Sorcerous Origin Feature"],
                "abilities": ["Draconic Wings / Spell Bombardment", "Arcane Rift"],
                "feats": ["Bloodline Ascendance"],
                "spells": ["Teleportation Circle"],
                "cantrips": []
            },
            "15": {
                "hp": 4,
                "features": ["Eighth Level Spells"],
                "abilities": ["Sorcerous Restoration", "Reality Manipulation"],
                "feats": ["Unbound Essence"],
                "spells": ["Incendiary Cloud", "Power Word Kill (Lesser)"],
                "cantrips": []
            },
            "16": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Nexus of Power", "Volatile Casting"],
                "feats": ["Archmage's Resolve"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 4,
                "features": ["Metamagic (Choose 1 more)", "Ninth Level Spells"],
                "abilities": ["Seeking Spell", "Arcane Apotheosis"],
                "feats": ["Avatar of Magic"],
                "spells": ["Power Word Kill", "True Polymorph"],
                "cantrips": []
            }
        }
    },

    warlock: {
        "name": "Warlock",
        "hitDie": "d8",
        "primaryStats": ["charisma", "constitution"],
        "savingThrows": ["wisdom", "charisma"],
        "skillChoices": ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Otherworldly Patron", "Pact Magic"],
                "abilities": ["Patron's Gift", "Eldritch Grasp"],
                "feats": ["Pact Initiate"],
                "spells": ["Armor of Agathys", "Charm Person", "Hex", "Hellish Rebuke"],
                "cantrips": ["Eldritch Blast", "Mage Hand", "Minor Illusion", "Prestidigitation"]
            },
            "2": {
                "hp": 5,
                "features": ["Eldritch Invocations (Choose 2)"],
                "abilities": ["Agonizing Blast", "Armor of Shadows", "Beguiling Influence"],
                "feats": ["Invocation Adept"],
                "spells": ["Hold Person", "Invisibility", "Misty Step"],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Pact Boon (Blade, Chain, or Tome)"],
                "abilities": ["Pact Weapon", "Find Familiar (Special)", "Book of Shadows"],
                "feats": ["Boon Focus"],
                "spells": ["Counterspell", "Fly", "Hypnotic Pattern"],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Dark One's Own Luck (Lesser)", "Entropic Ward"],
                "feats": ["War Caster"],
                "spells": ["Banishment", "Dimension Door"],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Eldritch Invocations (Choose 1 more)"],
                "abilities": ["Thirsting Blade", "Voice of the Chain Master", "Book of Ancient Secrets"],
                "feats": ["Improved Pact Weapon"],
                "spells": ["Dominate Person", "Hold Monster", "Scrying"],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Otherworldly Patron Feature"],
                "abilities": ["Dark One's Blessing", "Entropic Ward", "Misty Escape"],
                "feats": ["Patron's Favor"],
                "spells": ["Circle of Death", "Conjure Fey"],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Eldritch Invocations (Choose 1 more)"],
                "abilities": ["Relentless Hex", "Ghostly Gaze"],
                "feats": ["Shadow Adept"],
                "spells": ["Etherealness", "Finger of Death"],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Patron's Shield", "Dark Foresight"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Demiplane", "Dominate Monster"],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Eldritch Invocations (Choose 1 more)"],
                "abilities": ["Minions of Chaos", "Otherworldly Leap"],
                "feats": ["Master of the Pact"],
                "spells": ["Mass Suggestion", "True Seeing"],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Otherworldly Patron Feature"],
                "abilities": ["Fiendish Resilience", "Thought Shield"],
                "feats": ["Patron's Resilience"],
                "spells": ["Eyebite", "Flesh to Stone"],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Mystic Arcanum (6th Level)"],
                "abilities": ["Create Thrall (Lesser)", "Soul Cage"],
                "feats": ["Arcanum Adept"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Eldritch Invocations (Choose 1 more)"],
                "abilities": ["Lifedrinker", "Witch Sight"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Mystic Arcanum (7th Level)"],
                "abilities": ["Forcecage", "Plane Shift"],
                "feats": ["Planar Traveler"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Otherworldly Patron Feature (Capstone)"],
                "abilities": ["Hurl Through Hell", "Create Thrall"],
                "feats": ["Patron's Champion"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Mystic Arcanum (8th Level)", "Eldritch Invocations (Choose 1 more)"],
                "abilities": ["Demiplane", "Dominate Monster", "Visions of Distant Realms"],
                "feats": ["Master of Invocations"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Dark Delirium", "Soul Mirror"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Mystic Arcanum (9th Level)", "Eldritch Master (1/day)"],
                "abilities": ["True Polymorph", "Foresight", "Wish (Patron's Whim)"],
                "feats": ["Avatar of the Patron"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    barbarian: {
        "name": "Barbarian",
        "hitDie": "d12",
        "primaryStats": ["strength", "constitution"],
        "savingThrows": ["strength", "constitution"],
        "skillChoices": ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 12,
                "features": ["Rage (2/day)", "Unarmored Defense"],
                "abilities": ["Primal Scream", "Power Attack"],
                "feats": ["Savage Combatant"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 7,
                "features": ["Reckless Attack", "Danger Sense"],
                "abilities": ["Furious Charge", "Intimidating Presence"],
                "feats": ["Adrenaline Rush"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 7,
                "features": ["Primal Path", "Rage (3/day)"],
                "abilities": ["Path Feature (e.g., Totem Spirit)", "Mighty Swing"],
                "feats": ["Path Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 7,
                "features": ["Ability Score Improvement"],
                "abilities": ["Ground Slam", "Fearsome Yell"],
                "feats": ["Great Weapon Master"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 7,
                "features": ["Extra Attack", "Fast Movement"],
                "abilities": ["Wild Strikes", "Unstoppable Momentum"],
                "feats": ["Relentless Attacker"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 7,
                "features": ["Primal Path Feature", "Rage (4/day)"],
                "abilities": ["Aspect of the Beast", "Earth Shaker"],
                "feats": ["Totemic Warrior"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 7,
                "features": ["Feral Instinct"],
                "abilities": ["Hunter's Senses", "Ambush Breaker"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 7,
                "features": ["Ability Score Improvement"],
                "abilities": ["Savage Roar", "Bone Breaker"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 7,
                "features": ["Brutal Critical (1 die)"],
                "abilities": ["Rage Damage +3", "Overwhelm"],
                "feats": ["Improved Critical"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 7,
                "features": ["Primal Path Feature"],
                "abilities": ["Spirit Walker", "Terrifying Rage"],
                "feats": ["Inspiring Rage"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 7,
                "features": ["Relentless Rage"],
                "abilities": ["Undying Fury", "Defy Death"],
                "feats": ["Indomitable Spirit"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 7,
                "features": ["Ability Score Improvement", "Rage (5/day)"],
                "abilities": ["Wrecking Ball", "Primal Strength"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 7,
                "features": ["Brutal Critical (2 dice)"],
                "abilities": ["Devastating Blow", "Shatter Defenses"],
                "feats": ["Savage Attacker"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 7,
                "features": ["Primal Path Feature"],
                "abilities": ["Retaliation", "Raging Storm"],
                "feats": ["Avatar of Fury"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 7,
                "features": ["Persistent Rage"],
                "abilities": ["Unending Rage", "Focused Fury"],
                "feats": ["Unbreakable Will"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 7,
                "features": ["Ability Score Improvement", "Rage Damage +4"],
                "abilities": ["Titan's Grip", "Earthshattering Roar"],
                "feats": ["Legendary Strength"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 7,
                "features": ["Brutal Critical (3 dice)", "Rage (6/day)"],
                "abilities": ["Avatar of War", "Living Avalanche"],
                "feats": ["Primal Champion (Minor)"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    brawler: {
        "name": "Brawler",
        "hitDie": "d10",
        "primaryStats": ["strength", "constitution"],
        "savingThrows": ["strength", "constitution"],
        "skillChoices": ["Athletics", "Intimidation", "Insight", "Perception", "Sleight of Hand", "Survival"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 10,
                "features": ["Unarmed Fighter (d6)", "Iron Jaw"],
                "abilities": ["Sucker Punch", "Brace Up"],
                "feats": ["Street Scrapper"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 6,
                "features": ["Grit (2 points)", "Dirty Fighting"],
                "abilities": ["Pocket Sand", "Low Blow", "Headbutt"],
                "feats": ["Tavern Brawler"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 6,
                "features": ["Brawling Style"],
                "abilities": ["Style Feature (e.g., Strong-Arm Grappler)", "Get Back Up"],
                "feats": ["Style Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Gut Punch", "Bob and Weave"],
                "feats": ["Heavy Hitter"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 6,
                "features": ["Extra Attack", "Unarmed Fighter (d8)"],
                "abilities": ["Haymaker", "Power Through"],
                "feats": ["Relentless Combatant"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 6,
                "features": ["Brawling Style Feature"],
                "abilities": ["Improvised Weapon Master", "Set Up"],
                "feats": ["Opportunist"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 6,
                "features": ["Shake It Off"],
                "abilities": ["Shoulder Check", "Ignore Pain"],
                "feats": ["Unbreakable"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Combination Strike", "Mean Mug"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 6,
                "features": ["Improved Dirty Fighting"],
                "abilities": ["Choke Hold", "Disarm"],
                "feats": ["Expert Grappler"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 6,
                "features": ["Brawling Style Feature"],
                "abilities": ["Ring the Bell", "No Holds Barred"],
                "feats": ["Knockout Artist"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 6,
                "features": ["Unarmed Fighter (d10)", "Relentless Assault"],
                "abilities": ["Rabble Rouser", "One-Two Punch"],
                "feats": ["Momentum Fighter"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Turn the Tables", "Unflinching"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 6,
                "features": ["Tireless Grit"],
                "abilities": ["Second Wind (Brawler version)", "The Best Defense..."],
                "feats": ["Indomitable"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 6,
                "features": ["Brawling Style Feature (Capstone)"],
                "abilities": ["Finishing Move Setup", "Master of the Pit"],
                "feats": ["Living Legend"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 6,
                "features": ["Come at Me!"],
                "abilities": ["Spiteful Retort", "Center of Attention"],
                "feats": ["Provocateur"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Bone-shattering Blow", "True Grit"],
                "feats": ["Brawler's Resolve"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 6,
                "features": ["Unarmed Fighter (d12)", "Finishing Move"],
                "abilities": ["Lights Out", "Last Man Standing"],
                "feats": ["Uncrowned Champion"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    assassin: {
        "name": "Assassin",
        "hitDie": "d8",
        "primaryStats": ["dexterity", "intelligence"],
        "savingThrows": ["dexterity", "intelligence"],
        "skillChoices": ["Acrobatics", "Deception", "Insight", "Investigation", "Perception", "Sleight of Hand", "Stealth"],
        "numSkillChoices": 4,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Expertise (2 skills)", "Mortal Strike (1d6)", "Poisoner's Kit Proficiency"],
                "abilities": ["Target Assessment", "Shadow Arts (Minor)"],
                "feats": ["Silent Killer"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 5,
                "features": ["Predator's Cunning"],
                "abilities": ["Swift Action (Hide/Dash)", "Calculated Approach"],
                "feats": ["Skulker"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Assassinate", "Mortal Strike (2d6)"],
                "abilities": ["Death from the Shadows", "Infiltration Expertise"],
                "feats": ["Lethal Precision"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Poisoner's Touch", "Create Opening"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Uncanny Dodge", "Mortal Strike (3d6)"],
                "abilities": ["Vanish (Brief Invisibility)", "Anatomical Insight"],
                "feats": ["Blade Master"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Expertise (2 more skills)", "Master of Disguise"],
                "abilities": ["Impersonation", "False Identity"],
                "feats": ["Actor"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Evasion", "Mortal Strike (4d6)"],
                "abilities": ["Ghostly Presence", "Contingency Plan"],
                "feats": ["Agile Combatant"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Exploit Weakness", "Silent Takedown"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Infiltration Supremacy", "Mortal Strike (5d6)"],
                "abilities": ["Blend into Crowd", "Undetectable"],
                "feats": ["Master Infiltrator"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Master Poisoner"],
                "abilities": ["Swift Poison Application", "Potent Toxins"],
                "feats": ["Toxicologist"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Reliable Talent", "Mortal Strike (6d6)"],
                "abilities": ["Perfect Execution", "Contingency Strike"],
                "feats": ["Master of Skills"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Shadow Step", "Isolate Target"],
                "feats": ["Mobile"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Death Strike", "Mortal Strike (7d6)"],
                "abilities": ["Sudden Death", "Inescapable Justice"],
                "feats": ["Executioner"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Blindsense (30 feet)"],
                "abilities": ["Sense the Unseen", "Anticipate Ambush"],
                "feats": ["Perceptive"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Elusive", "Mortal Strike (8d6)"],
                "abilities": ["Untouchable", "Master of Evasion"],
                "feats": ["Legendary Dodge"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["One with the Night", "Fading Strike"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Phantom Assassin", "Mortal Strike (9d6)"],
                "abilities": ["Become Death", "Finality"],
                "feats": ["Shadow Lord"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    hunter: {
        "name": "Hunter",
        "hitDie": "d10",
        "primaryStats": ["dexterity", "wisdom"],
        "savingThrows": ["dexterity", "wisdom"],
        "skillChoices": ["Athletics", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 10,
                "features": ["Hunter's Quarry (1/rest)", "Natural Explorer"],
                "abilities": ["Precise Shot", "Keen Senses"],
                "feats": ["Wilderness Survivor"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 6,
                "features": ["Fighting Style", "Trapmaking"],
                "abilities": ["Ensnaring Strike (non-magical)", "Patient Ambusher"],
                "feats": ["Trapper"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 6,
                "features": ["Hunter's Conclave"],
                "abilities": ["Conclave Feature (e.g., Giant Killer)", "Hunter's Eye"],
                "feats": ["Conclave Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Rapid Shot", "Covering Fire"],
                "feats": ["Sharpshooter"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 6,
                "features": ["Extra Attack"],
                "abilities": ["Multi-Shot", "Crippling Shot"],
                "feats": ["Master Archer"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 6,
                "features": ["Hunter's Conclave Feature", "Improved Quarry"],
                "abilities": ["Horde Breaker", "Advanced Traps"],
                "feats": ["Expert Tracker"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 6,
                "features": ["Defensive Tactics"],
                "abilities": ["Evasion (Light Armor)", "Uncanny Dodge"],
                "feats": ["Skirmisher's Speed"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Land's Stride", "Pinning Shot"],
                "feats": ["Mobile"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 6,
                "features": ["Expert Forager", "Relentless Quarry"],
                "abilities": ["Camouflage", "Master of the Hunt"],
                "feats": ["Resilient (Constitution)"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 6,
                "features": ["Hunter's Conclave Feature"],
                "abilities": ["Volley", "Stand Against the Tide"],
                "feats": ["Conclave Master"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 6,
                "features": ["Hair-Trigger Reflexes"],
                "abilities": ["Called Shot", "Sudden Strike"],
                "feats": ["Quick Draw"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Eyes of the Eagle", "No Escape"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 6,
                "features": ["Master Tracker"],
                "abilities": ["Leave No Trace", "One with the Wild"],
                "feats": ["Ghost in the Wilderness"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 6,
                "features": ["Hunter's Conclave Feature (Capstone)"],
                "abilities": ["Giant Slayer (Improved)", "Perfected Ambush"],
                "feats": ["Legendary Hunter"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 6,
                "features": ["Superior Hunter's Defense"],
                "abilities": ["Arrow-Catching", "Steel Will"],
                "feats": ["Evasive Footwork"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Lethal Strike", "Unfaltering Aim"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 6,
                "features": ["Apex Predator"],
                "abilities": ["Death Stroke", "The Ultimate Prey"],
                "feats": ["Master of the Kill"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    shaman: {
        "name": "Shaman",
        "hitDie": "d8",
        "primaryStats": ["wisdom", "constitution"],
        "savingThrows": ["wisdom", "charisma"],
        "skillChoices": ["History", "Insight", "Medicine", "Nature", "Perception", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Spellcasting", "Spirit Guide"],
                "abilities": ["Speak with Spirits", "Spiritual Weapon (Minor)"],
                "feats": ["Spirit Adept"],
                "spells": ["Bless", "Cure Wounds", "Faerie Fire", "Healing Word", "Sanctuary"],
                "cantrips": ["Guidance", "Shillelagh", "Sacred Flame", "Resistance"]
            },
            "2": {
                "hp": 5,
                "features": ["Spirit Totem (1/rest)"],
                "abilities": ["Healing Totem", "Earthbind Totem"],
                "feats": ["Totemic Focus"],
                "spells": ["Augury", "Lesser Restoration", "Spike Growth", "Spiritual Weapon"],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Spirit Guide Feature"],
                "abilities": ["Ancestral Protection", "Elemental Attunement"],
                "feats": ["Spirit-Guided Vigor"],
                "spells": ["Clairvoyance", "Revivify", "Spirit Guardians", "Wind Wall"],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Ritual Casting", "Elemental Lash"],
                "feats": ["War Caster"],
                "spells": ["Banishment", "Divination"],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Third Level Spells"],
                "abilities": ["Spirit Link", "Call Lightning"],
                "feats": ["Spirit Channeler"],
                "spells": ["Commune with Nature", "Greater Restoration", "Mass Cure Wounds", "Reincarnate"],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Spirit Guide Feature", "Spirit Totem (2/rest)"],
                "abilities": ["Guardian Spirit", "Stoneskin Totem"],
                "feats": ["Improved Totems"],
                "spells": ["Heal", "Heroes' Feast"],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Fourth Level Spells"],
                "abilities": ["Vision Quest", "Ethereal Jaunt"],
                "feats": ["Seer's Intuition"],
                "spells": ["Etherealness", "Plane Shift", "Regenerate"],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Spirit Walk"],
                "abilities": ["Walk Between Worlds", "Ghostly Form"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Antimagic Field", "Sunburst"],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Fifth Level Spells"],
                "abilities": ["Astral Projection (Self)", "Unleash Elements"],
                "feats": ["Elemental Master"],
                "spells": ["Mass Heal", "True Resurrection", "Foresight"],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Spirit Guide Feature", "Spiritual Clarity"],
                "abilities": ["Immunity to Possession", "See the Unseen"],
                "feats": ["Spiritual Bastion"],
                "spells": ["Control Weather", "Earthquake"],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Sixth Level Spells", "Master Totem Carver"],
                "abilities": ["Twin Totems", "Totemic Projection"],
                "feats": ["Legendary Totems"],
                "spells": ["Chain Lightning", "Word of Recall"],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Spiritual Balance", "Purge Spirits"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Seventh Level Spells"],
                "abilities": ["Whispers of the Past", "Glimpse the Future"],
                "feats": ["Oracle's Sight"],
                "spells": ["Divine Word", "Symbol"],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Spirit Guide Feature (Capstone)"],
                "abilities": ["Ancestral Swarm", "Elemental Body"],
                "feats": ["Spirit Lord's Favor"],
                "spells": ["Fire Storm"],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Eighth Level Spells", "Eternal Guardian"],
                "abilities": ["Spirit Form (Lesser)", "Unending Watch"],
                "feats": ["Timeless Spirit"],
                "spells": ["Power Word Heal", "Tsunami"],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Wrath of the Spirits", "Blessing of the Ancients"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Ninth Level Spells", "True Spirit Form"],
                "abilities": ["Become the Avatar", "One with the Great Spirit"],
                "feats": ["Ascendant Shaman"],
                "spells": ["Astral Projection", "Mass Resurrection", "Storm of Vengeance"],
                "cantrips": []
            }
        }
    },

    gladiator: {
        "name": "Gladiator",
        "hitDie": "d10",
        "primaryStats": ["strength", "charisma"],
        "savingThrows": ["strength", "charisma"],
        "skillChoices": ["Acrobatics", "Athletics", "Intimidation", "Performance", "Insight"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 10,
                "features": ["Arena Weapon Proficiency", "Showmanship"],
                "abilities": ["Goading Attack", "Battlefield Taunt"],
                "feats": ["Crowd Favorite"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 6,
                "features": ["Acclaim (2 points)", "Combat Flourish"],
                "abilities": ["Disarming Strike", "Pushing Attack", "Dramatic Parry"],
                "feats": ["Performer's Grit"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 6,
                "features": ["Gladiator Style"],
                "abilities": ["Style Feature (e.g., Retiarius, Secutor)", "Signature Pose"],
                "feats": ["Style Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Mocking Blow", "Feinting Attack"],
                "feats": ["Weapon Specialist"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 6,
                "features": ["Extra Attack", "Adrenaline Rush"],
                "abilities": ["Spectacular Maneuver", "Unrelenting Assault"],
                "feats": ["Dual Wielder"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 6,
                "features": ["Gladiator Style Feature"],
                "abilities": ["Fan Shield", "Net Mastery"],
                "feats": ["Shield Master"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 6,
                "features": ["Fearless Presence"],
                "abilities": ["Immunity to Frightened", "Inspire Allies"],
                "feats": ["Inspiring Leader"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Test of Mettle", "Overpowering Attack"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 6,
                "features": ["Spectacular Critical (1 die)"],
                "abilities": ["Gain Acclaim on Crit", "Stunning Critical"],
                "feats": ["Improved Critical"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 6,
                "features": ["Gladiator Style Feature"],
                "abilities": ["Sand in the Eyes", "Master Duelist"],
                "feats": ["Defensive Duelist"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 6,
                "features": ["Signature Move"],
                "abilities": ["The People's Champion", "Finishing Flourish"],
                "feats": ["Master Tactician"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Unbreakable Focus", "Riposte"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 6,
                "features": ["Take a Bow"],
                "abilities": ["Recover Acclaim", "Gain Temporary HP"],
                "feats": ["Living Idol"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 6,
                "features": ["Gladiator Style Feature (Capstone)"],
                "abilities": ["Master of the Arena", "Unstoppable"],
                "feats": ["Legendary Champion"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 6,
                "features": ["Living Legend"],
                "abilities": ["Aura of Renown", "Terrifying Entrance"],
                "feats": ["Fearsome"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfected Form", "Deathblow"],
                "feats": ["Savage Attacker"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 6,
                "features": ["For the Crowd!"],
                "abilities": ["Enter Perfect Showmanship", "God of the Arena"],
                "feats": ["Immortal Champion"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    ninja: {
        "name": "Ninja",
        "hitDie": "d8",
        "primaryStats": ["dexterity", "wisdom"],
        "savingThrows": ["dexterity", "wisdom"],
        "skillChoices": ["Acrobatics", "Athletics", "Deception", "Insight", "Perception", "Sleight of Hand", "Stealth"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Shinobi Training", "Unarmored Defense"],
                "abilities": ["Hidden Blade", "Acrobatic Movement"],
                "feats": ["Shadow Initiate"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 5,
                "features": ["Ki (2 points)", "Unarmored Movement (+10 ft)"],
                "abilities": ["Shadow Step", "Patient Defense", "Swift Action"],
                "feats": ["Ki Adept"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Shinobi Clan", "Ninjutsu Arts"],
                "abilities": ["Clan Feature (e.g., Phantom Illusion)", "Smoke Bomb", "Substitution Jutsu"],
                "feats": ["Clan Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Slow Fall"],
                "abilities": ["Wall Running", "Silent Ambush"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Extra Attack"],
                "abilities": ["Chain Attack", "Improved Ninjutsu"],
                "feats": ["Dual Wielder"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Shinobi Clan Feature", "Ki-Empowered Strikes"],
                "abilities": ["Elemental Kunai", "Poisoner's Touch"],
                "feats": ["Poisoner"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Evasion"],
                "abilities": ["Blink Step", "Heightened Senses"],
                "feats": ["Evasive"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Unarmored Movement (+15 ft)"],
                "abilities": ["Water Walking", "Iaijutsu (Quick Draw Strike)"],
                "feats": ["Mobile"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Infiltration Expertise"],
                "abilities": ["Master of Disguise", "Undetectable"],
                "feats": ["Infiltrator"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Shinobi Clan Feature"],
                "abilities": ["Advanced Ninjutsu", "Flickering Defense"],
                "feats": ["Ninjutsu Master"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Shadow Clone"],
                "abilities": ["Create Duplicate", "Misdirection"],
                "feats": ["Master of Illusions"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Assassinate", "Pressure Point Strike"],
                "feats": ["Lethal Striker"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Tongue of the Sun and Moon (Coded Speech)"],
                "abilities": ["Read Lips", "Silent Communication"],
                "feats": ["Spymaster"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Shinobi Clan Feature (Capstone)"],
                "abilities": ["Forbidden Jutsu", "Elemental Fury"],
                "feats": ["Clan Master"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Mind Blank (Self)"],
                "abilities": ["Empty Mind", "Ghostly Presence"],
                "feats": ["Unreadable"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["One with the Shadows", "Death Strike"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Master of the Unseen"],
                "abilities": ["True Invisibility", "Phantom Assault"],
                "feats": ["Legendary Shinobi"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    summoner: {
        "name": "Summoner",
        "hitDie": "d6",
        "primaryStats": ["intelligence", "constitution"],
        "savingThrows": ["intelligence", "wisdom"],
        "skillChoices": ["Arcana", "History", "Insight", "Investigation", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 6,
                "features": ["Spellcasting", "Summon Eidolon"],
                "abilities": ["Choose Eidolon Form", "Bond Senses"],
                "feats": ["Planar Affinity"],
                "spells": ["Find Familiar", "Protection from Evil and Good", "Unseen Servant"],
                "cantrips": ["Acid Splash", "Mage Hand", "Light", "Prestidigitation"]
            },
            "2": {
                "hp": 4,
                "features": ["Eidolon Evolution (2 points)"],
                "abilities": ["Add Claws/Bite", "Improved Natural Armor"],
                "feats": ["Bonded Vigor"],
                "spells": ["Summon Beast", "Misty Step", "Enlarge/Reduce"],
                "cantrips": []
            },
            "3": {
                "hp": 4,
                "features": ["Summoner's Charm", "Second Level Spells"],
                "abilities": ["Command Summoned Creature", "Shield Ally (Basic)"],
                "feats": ["Eidolon Adept"],
                "spells": ["Haste", "Fly", "Summon Lesser Demons", "Protection from Energy"],
                "cantrips": []
            },
            "4": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Eidolon Evolution (4 points)", "Elemental Breath Weapon"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Summon Elemental", "Banishment"],
                "cantrips": []
            },
            "5": {
                "hp": 4,
                "features": ["Third Level Spells"],
                "abilities": ["Empower Eidolon", "Extra Attack (for Eidolon)"],
                "feats": ["Superior Bond"],
                "spells": ["Planar Binding", "Summon Celestial", "Teleportation Circle"],
                "cantrips": []
            },
            "6": {
                "hp": 4,
                "features": ["Aspect"],
                "abilities": ["Channel Eidolon Evolution", "Share Spells"],
                "feats": ["Aspect Adept"],
                "spells": ["Conjure Fey", "Wall of Force"],
                "cantrips": []
            },
            "7": {
                "hp": 4,
                "features": ["Fourth Level Spells", "Eidolon Evolution (6 points)"],
                "abilities": ["Large Evolution", "Flight"],
                "feats": ["Greater Eidolon"],
                "spells": ["Plane Shift", "Forcecage"],
                "cantrips": []
            },
            "8": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Greater Shield Ally", "Transposition"],
                "feats": ["War Caster"],
                "spells": ["Summon Greater Demon", "Incendiary Cloud"],
                "cantrips": []
            },
            "9": {
                "hp": 4,
                "features": ["Fifth Level Spells"],
                "abilities": ["Eidolon's Ward", "Planar Jaunt"],
                "feats": ["Master Summoner"],
                "spells": ["Gate (Lesser)", "Mass Polymorph", "Imprisonment (Lesser)"],
                "cantrips": []
            },
            "10": {
                "hp": 4,
                "features": ["Greater Aspect"],
                "abilities": ["Channel Multiple Evolutions", "Eidolon Evolution (8 points)"],
                "feats": ["Perfected Aspect"],
                "spells": ["Conjure Elemental (Greater)"],
                "cantrips": []
            },
            "11": {
                "hp": 4,
                "features": ["Sixth Level Spells"],
                "abilities": ["Life Link", "Unleash Eidolon"],
                "feats": ["Planar Expert"],
                "spells": ["Create Homunculus", "Soul Cage"],
                "cantrips": []
            },
            "12": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Eidolon Evolution (10 points)", "Frightful Presence"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 4,
                "features": ["Seventh Level Spells"],
                "abilities": ["Merge Forms (Lesser)", "Ultimate Evolution"],
                "feats": ["Twin Forms"],
                "spells": ["Sequester", "Symbol"],
                "cantrips": []
            },
            "14": {
                "hp": 4,
                "features": ["Life Bond"],
                "abilities": ["Sacrifice Eidolon to Survive", "Rapid Re-summoning"],
                "feats": ["Unbreakable Bond"],
                "spells": ["Antipathy/Sympathy"],
                "cantrips": []
            },
            "15": {
                "hp": 4,
                "features": ["Eighth Level Spells"],
                "abilities": ["Merge Forms", "Eidolon Evolution (12 points)"],
                "feats": ["Avatar of the Summoner"],
                "spells": ["Maze", "Power Word Stun"],
                "cantrips": []
            },
            "16": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Aura of Command", "Planar Dominion"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 4,
                "features": ["Ninth Level Spells", "Twin Summon"],
                "abilities": ["Manifest Eidolon Twin", "Master of Realities"],
                "feats": ["Planar Overlord"],
                "spells": ["Gate", "Shapechange", "Wish"],
                "cantrips": []
            }
        }
    },

    necromancer: {
            "name": "Necromancer",
            "hitDie": "d6",
            "primaryStats": ["intelligence", "constitution"],
            "savingThrows": ["intelligence", "wisdom"],
            "skillChoices": ["Arcana", "History", "Insight", "Intimidation", "Investigation", "Religion"],
            "numSkillChoices": 2,
            "levels": {
                "1": {
                    "hp": 6,
                    "features": ["Spellcasting", "Undead Affinity"],
                    "abilities": ["Rebuke Death", "Grave Grasp"],
                    "feats": ["Forbidden Knowledge"],
                    "spells": ["Cause Fear", "False Life", "Inflict Wounds", "Ray of Sickness"],
                    "cantrips": ["Chill Touch", "Mage Hand", "Sapping Sting", "Toll the Dead"]
                },
                "2": {
                    "hp": 4,
                    "features": ["Corpse Raiser"],
                    "abilities": ["Animate Basic Undead (1)", "Bone Armor"],
                    "feats": ["Necromantic Vigor"],
                    "spells": ["Blindness/Deafness", "Gentle Repose", "Ray of Enfeeblement"],
                    "cantrips": []
                },
                "3": {
                    "hp": 4,
                    "features": ["Path of Necromancy", "Second Level Spells"],
                    "abilities": ["Path Feature (e.g., Dread Lord's Presence)", "Animate Dead"],
                    "feats": ["Path Initiate"],
                    "spells": ["Animate Dead", "Bestow Curse", "Vampiric Touch", "Speak with Dead"],
                    "cantrips": []
                },
                "4": {
                    "hp": 4,
                    "features": ["Ability Score Improvement"],
                    "abilities": ["Life Tap", "Deathly Pallor"],
                    "feats": ["Resilient (Constitution)"],
                    "spells": ["Blight", "Shadow of Moil"],
                    "cantrips": []
                },
                "5": {
                    "hp": 4,
                    "features": ["Undead Thralls"],
                    "abilities": ["Empowered Minions (HP & Damage)", "Third Level Spells"],
                    "feats": ["Master of the Dead"],
                    "spells": ["Danse Macabre", "Enervation", "Negative Energy Flood"],
                    "cantrips": []
                },
                "6": {
                    "hp": 4,
                    "features": ["Path of Necromancy Feature"],
                    "abilities": ["Stitch Undead", "Aura of Fear"],
                    "feats": ["Undead Commander"],
                    "spells": ["Create Undead", "Circle of Death"],
                    "cantrips": []
                },
                "7": {
                    "hp": 4,
                    "features": ["Fourth Level Spells"],
                    "abilities": ["Harvest Life", "Grave Secrets"],
                    "feats": ["Spell Sniper"],
                    "spells": ["Finger of Death", "Etherealness"],
                    "cantrips": []
                },
                "8": {
                    "hp": 4,
                    "features": ["Ability Score Improvement"],
                    "abilities": ["Corpulent Cadavers (Exploding Minions)", "Necrotic Ward"],
                    "feats": ["War Caster"],
                    "spells": ["Clone", "Abi-Dalzim's Horrid Wilting"],
                    "cantrips": []
                },
                "9": {
                    "hp": 4,
                    "features": ["Fifth Level Spells"],
                    "abilities": ["Army of the Damned (Control more undead)", "Soul Cage"],
                    "feats": ["Lord of the Undead"],
                    "spells": ["Power Word Kill", "Astral Projection"],
                    "cantrips": []
                },
                "10": {
                    "hp": 4,
                    "features": ["Command Undead"],
                    "abilities": ["Seize Control", "Master's Command"],
                    "feats": ["Dominate Undead"],
                    "spells": ["Eyebite"],
                    "cantrips": []
                },
                "11": {
                    "hp": 4,
                    "features": ["Sixth Level Spells", "Dreadful Summons"],
                    "abilities": ["Instant Thrall", "Necrotic Overchannel"],
                    "feats": ["Reaper's Call"],
                    "spells": ["Harm", "Magic Jar"],
                    "cantrips": []
                },
                "12": {
                    "hp": 4,
                    "features": ["Ability Score Improvement"],
                    "abilities": ["Undead Fortitude", "Gravemaster's Resilience"],
                    "feats": ["Tough"],
                    "spells": [],
                    "cantrips": []
                },
                "13": {
                    "hp": 4,
                    "features": ["Seventh Level Spells"],
                    "abilities": ["Ghostly Form", "Drain Life (Area)"],
                    "feats": ["Spirit Drinker"],
                    "spells": ["Sequester", "Symbol"],
                    "cantrips": []
                },
                "14": {
                    "hp": 4,
                    "features": ["Inured to Undeath"],
                    "abilities": ["Necrotic Resistance", "Undeath's Embrace"],
                    "feats": ["Deathless"],
                    "spells": ["Finger of Death (Improved)"],
                    "cantrips": []
                },
                "15": {
                    "hp": 4,
                    "features": ["Eighth Level Spells", "Path of Necromancy Feature"],
                    "abilities": ["Create Abomination", "Soul Bind"],
                    "feats": ["True Necromancer"],
                    "spells": ["Feeblemind", "Maze"],
                    "cantrips": []
                },
                "16": {
                    "hp": 4,
                    "features": ["Ability Score Improvement"],
                    "abilities": ["Mass Animate Dead", "Aura of Undeath"],
                    "feats": ["Plague Lord"],
                    "spells": [],
                    "cantrips": []
                },
                "17": {
                    "hp": 4,
                    "features": ["Ninth Level Spells", "Lich Form (Lesser)"],
                    "abilities": ["Taste of Immortality", "Paralyzing Touch"],
                    "feats": ["Ascendant Necromancer"],
                    "spells": ["Imprisonment", "Time Ravage", "Weird"],
                    "cantrips": []
                }
            }
        },

    illusionist: {
        "name": "Illusionist",
        "hitDie": "d6",
        "primaryStats": ["intelligence", "charisma"],
        "savingThrows": ["intelligence", "charisma"],
        "skillChoices": ["Arcana", "Deception", "Insight", "Investigation", "Performance", "Stealth"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 6,
                "features": ["Spellcasting", "Improved Minor Illusion"],
                "abilities": ["Minor Conjuration", "Deceiving Presence"],
                "feats": ["Subtle Weaving"],
                "spells": ["Charm Person", "Color Spray", "Disguise Self", "Silent Image"],
                "cantrips": ["Minor Illusion", "Mage Hand", "Prestidigitation", "Dancing Lights"]
            },
            "2": {
                "hp": 4,
                "features": ["Malleable Illusions"],
                "abilities": ["Reshape Illusion", "Illusory Script"],
                "feats": ["Deceptive Arts"],
                "spells": ["Invisibility", "Mirror Image", "Phantasmal Force", "Blur"],
                "cantrips": []
            },
            "3": {
                "hp": 4,
                "features": ["Path of Deception", "Second Level Spells"],
                "abilities": ["Path Feature (e.g., Nightmare Weaver)", "Fear"],
                "feats": ["Path Initiate"],
                "spells": ["Hypnotic Pattern", "Major Image", "Fear", "Phantom Steed"],
                "cantrips": []
            },
            "4": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Lasting Image", "Illusory Sound"],
                "feats": ["Metamagic Adept"],
                "spells": ["Greater Invisibility", "Hallucinatory Terrain"],
                "cantrips": []
            },
            "5": {
                "hp": 4,
                "features": ["Third Level Spells"],
                "abilities": ["Potent Illusions", "Distortion Field"],
                "feats": ["Shadow Adept"],
                "spells": ["Creation", "Mislead", "Seeming", "Dream"],
                "cantrips": []
            },
            "6": {
                "hp": 4,
                "features": ["Illusory Self"],
                "abilities": ["Instantaneous Duplicate", "Beguiling Defense"],
                "feats": ["Elusive"],
                "spells": ["Programmed Illusion", "Mental Prison"],
                "cantrips": []
            },
            "7": {
                "hp": 4,
                "features": ["Fourth Level Spells"],
                "abilities": ["Complex Illusions", "Sensory Overload"],
                "feats": ["Master of Disguise"],
                "spells": ["Mirage Arcane", "Project Image", "Simulacrum"],
                "cantrips": []
            },
            "8": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Persistent Image", "Aura of Deception"],
                "feats": ["Resilient (Wisdom)"],
                "spells": ["Illusory Dragon", "Antipathy/Sympathy"],
                "cantrips": []
            },
            "9": {
                "hp": 4,
                "features": ["Fifth Level Spells"],
                "abilities": ["Inescapable Illusion", "Cognitive Dissonance"],
                "feats": ["Master Trickster"],
                "spells": ["Weird", "Imprisonment (Illusory Prison)", "Mass Polymorph"],
                "cantrips": []
            },
            "10": {
                "hp": 4,
                "features": ["Path of Deception Feature"],
                "abilities": ["Phantasmal Killer (Improved)", "Field of Illusions"],
                "feats": ["Nightmare Lord"],
                "spells": ["Mass Suggestion"],
                "cantrips": []
            },
            "11": {
                "hp": 4,
                "features": ["Illusory Reality"],
                "abilities": ["Make Illusion Real", "Solid Shadows"],
                "feats": ["Reality Bender"],
                "spells": ["Sequester"],
                "cantrips": []
            },
            "12": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Permanent Illusion", "Misleading Aura"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 4,
                "features": ["Seventh Level Spells"],
                "abilities": ["Master of a Thousand Faces (At Will)", "Unwavering Illusions"],
                "feats": ["Shapeshifter's Guile"],
                "spells": ["Symbol", "Teleport"],
                "cantrips": []
            },
            "14": {
                "hp": 4,
                "features": ["Superior Malleable Illusions"],
                "abilities": ["Instantaneous Reshaping", "Layered Illusions"],
                "feats": ["Grand Deceiver"],
                "spells": ["Glibness"],
                "cantrips": []
            },
            "15": {
                "hp": 4,
                "features": ["Eighth Level Spells", "Path of Deception Feature"],
                "abilities": ["Lord of Nightmares", "Mirage Master"],
                "feats": ["Architect of Deception"],
                "spells": ["Feeblemind", "Power Word Stun"],
                "cantrips": []
            },
            "16": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfected Self (Illusion)", "Unreadable Mind"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 4,
                "features": ["Ninth Level Spells", "Lord of Deception"],
                "abilities": ["Indistinguishable Reality", "World of Lies"],
                "feats": ["God of Illusions"],
                "spells": ["Time Ravage", "True Polymorph", "Wish"],
                "cantrips": []
            }
        }
    },

    engineer: {
        "name": "Engineer",
        "hitDie": "d8",
        "primaryStats": ["intelligence", "constitution"],
        "savingThrows": ["constitution", "intelligence"],
        "skillChoices": ["Arcana", "History", "Investigation", "Medicine", "Perception", "Sleight of Hand"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Tinker", "Gadgetry"],
                "abilities": ["Create Flashbang", "Deploy Caltrops", "Tool Proficiency (Tinker's Tools, Smith's Tools)"],
                "feats": ["Tinkerer's Know-How"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 5,
                "features": ["Infuse Item", "Construct Companion (Automaton)"],
                "abilities": ["Create Basic Automaton", "Infuse Weapon/Armor (+1)"],
                "feats": ["Mechanic's Touch"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Engineering Discipline", "Tool Expertise"],
                "abilities": ["Discipline Feature (e.g., Chemist, Mechanist)", "Right Tool for the Job"],
                "feats": ["Discipline Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Upgrade Automaton", "Create Smoke Bomb"],
                "feats": ["Durable"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Improved Gadgets", "Automaton Protocol: Assault"],
                "abilities": ["Automaton Extra Attack", "Concussive Blast"],
                "feats": ["Advanced Gadgetry"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Engineering Discipline Feature"],
                "abilities": ["Alchemical Formulas", "Reinforced Automaton Chassis"],
                "feats": ["Master Craftsman"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Schematic Savant"],
                "abilities": ["On-the-Fly Infusions", "Field Modifications"],
                "feats": ["Quick Thinker"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Deploy Mini-Turret", "Upgrade Automaton (Armor)"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Advanced Construction"],
                "abilities": ["Build Golem (Lesser)", "Create Grappling Hook Launcher"],
                "feats": ["Architect"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Engineering Discipline Feature"],
                "abilities": ["Cognitive Enhancer (Self)", "Automaton Protocol: Defender"],
                "feats": ["Genius Inventor"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Masterwork Gadget"],
                "abilities": ["Personal Force Field", "Lightning Coil"],
                "feats": ["Signature Invention"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Analyze Weakness", "Deconstruct Device"],
                "feats": ["Observant"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Jury-Rig"],
                "abilities": ["Hack Construct", "Emergency Repairs"],
                "feats": ["Master Mechanic"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Engineering Discipline Feature (Capstone)"],
                "abilities": ["Create Juggernaut Automaton", "Elixir of Life"],
                "feats": ["Legendary Engineer"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Superior Attunement"],
                "abilities": ["Attune to Extra Item", "Master of Magic Items"],
                "feats": ["Attunement Master"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfected Design", "Remote Detonation"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Technological Singularity"],
                "abilities": ["Enter Genius State", "Unlimited Gadgets (1 min)"],
                "feats": ["Avatar of Invention"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    alchemist: {
        "name": "Alchemist",
        "hitDie": "d8",
        "primaryStats": ["intelligence", "dexterity"],
        "savingThrows": ["constitution", "intelligence"],
        "skillChoices": ["Arcana", "Investigation", "Medicine", "Nature", "Perception", "Sleight of Hand"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Alchemical Savant", "Formula Book"],
                "abilities": ["Create Concoction (e.g., Healing Draught, Acid Flask)", "Proficiency: Alchemist's Supplies"],
                "feats": ["Field Researcher"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 5,
                "features": ["Alchemical Discovery"],
                "abilities": ["Choose Bombs, Mutagens, or Elixirs", "Precise Bombardment"],
                "feats": ["Practical Chemistry"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Alchemical Field", "Swift Alchemy"],
                "abilities": ["Field Feature (e.g., Grenadier, Mutagenist)", "Quick Crafting"],
                "feats": ["Field Specialist"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Improved Formulas", "Catalytic Reaction"],
                "feats": ["Durable"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Potent Concoctions"],
                "abilities": ["Add Intelligence modifier to damage/healing", "Heightened Effects"],
                "feats": ["Empowered Alchemy"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Alchemical Field Feature"],
                "abilities": ["Directed Blast", "Feral Mutagen"],
                "feats": ["Master Chemist"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Volatile Reaction"],
                "abilities": ["Combine Concoctions", "Instant Reaction"],
                "feats": ["Reactive Formulas"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Alchemical Discovery"],
                "abilities": ["Sticky Bomb", "Cognitive Mutagen"],
                "feats": ["Resilient (Dexterity)"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Poison Resistance"],
                "abilities": ["Toxicologist", "Apply Poison as Bonus Action"],
                "feats": ["Poisoner"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Alchemical Field Feature"],
                "abilities": ["The Big One (Massive Bomb)", "Perfected Mutagen"],
                "feats": ["Grand Alchemist"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Grand Discovery"],
                "abilities": ["Philosopher's Stone (Lesser)", "True Mutagen"],
                "feats": ["Legendary Discovery"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Efficient Alchemy", "Enduring Concoctions"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Master Chemist"],
                "abilities": ["Instant Identification", "Advantage on saves vs. potions/poisons"],
                "feats": ["Chemical Purity"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Alchemical Field Feature (Capstone)"],
                "abilities": ["Plague Bomb", "Chimeric Form"],
                "feats": ["Field Grandmaster"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Poison Immunity", "Alchemical Discovery"],
                "abilities": ["Complete Toxin Immunity", "Panacea Elixir"],
                "feats": ["Mithridatism"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfected Formulas", "Spontaneous Alchemy"],
                "feats": ["Genius Chemist"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Elixir of Life"],
                "abilities": ["Create Ultimate Elixir", "Halt Aging, Cure All Ailments"],
                "feats": ["Immortal Alchemist"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    scholar: {
        "name": "Scholar",
        "hitDie": "d6",
        "primaryStats": ["intelligence", "wisdom"],
        "savingThrows": ["intelligence", "wisdom"],
        "skillChoices": ["Arcana", "History", "Insight", "Investigation", "Medicine", "Nature", "Religion"],
        "numSkillChoices": 4,
        "levels": {
            "1": {
                "hp": 6,
                "features": ["Expertise (2 skills)", "Loremaster"],
                "abilities": ["Keen Mind", "Know-It-All"],
                "feats": ["Prodigy"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 4,
                "features": ["Tactical Insight"],
                "abilities": ["Grant Advantage", "Impose Disadvantage", "Guide Action"],
                "feats": ["Keen Observer"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 4,
                "features": ["Scholarly Pursuit"],
                "abilities": ["Pursuit Feature (e.g., Strategist, Historian, Chirurgeon)", "Critical Analysis"],
                "feats": ["Field Expert"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Educated Guess", "Quick Study"],
                "feats": ["Linguist"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 4,
                "features": ["Coordinated Effort"],
                "abilities": ["Bolster Ally", "Redirect Foe"],
                "feats": ["Team Leader"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 4,
                "features": ["Scholarly Pursuit Feature"],
                "abilities": ["Battlefield Commands", "Rediscover Lore", "Anatomical Precision"],
                "feats": ["Master Tactician"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 4,
                "features": ["Erudite Defense"],
                "abilities": ["Add Intelligence to Saves", "Logical Fortitude"],
                "feats": ["Defensive Study"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Exploit Pattern", "Predictive Analysis"],
                "feats": ["Observant"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 4,
                "features": ["Expertise (2 more skills)"],
                "abilities": ["Master of Lore", "Unassailable Knowledge"],
                "feats": ["Skilled"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 4,
                "features": ["Scholarly Pursuit Feature"],
                "abilities": ["Cunning Ploy", "Uncover Truth", "Miraculous Remedy"],
                "feats": ["Brilliant Mind"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 4,
                "features": ["Unwavering Logic"],
                "abilities": ["Advantage vs. Charm/Frighten", "Fortress of the Mind"],
                "feats": ["Iron Will"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Socratic Method", "Dismissive Rebuke"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 4,
                "features": ["Master Plan"],
                "abilities": ["Formulate Strategy", "Grant Party-Wide Bonus"],
                "feats": ["Grand Strategist"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 4,
                "features": ["Scholarly Pursuit Feature (Capstone)"],
                "abilities": ["Checkmate", "Reveal Forbidden Lore", "Restore Life"],
                "feats": ["Living Library"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 4,
                "features": ["Superior Intellect"],
                "abilities": ["Immunity to Intelligence Reduction", "Mind Palace"],
                "feats": ["Unshakable Mind"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfect Recall", "Foresee Danger"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 4,
                "features": ["Singularity of Mind"],
                "abilities": ["Enter Genius State", "Omniscience (1 min)"],
                "feats": ["The Pinnacle of Thought"],
                "spells": [],
                "cantrips": []
            }
        }
    }
    
};

// Spell definitions with detailed information
export const spellDefinitions = {
    // Cantrips (Original: 11, Adding 14 new, Total: 25)
    "Spark": { level: 0, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: "1d4 fire", description: "A spark of magical energy strikes a target." },
    "Mage Hand": { level: 0, school: "Conjuration", castingTime: "1 action", range: "30 feet", damage: null, description: "A spectral hand appears and can manipulate objects." },
    "Prestidigitation": { level: 0, school: "Transmutation", castingTime: "1 action", range: "10 feet", damage: null, description: "Simple magical effects like lighting candles or cleaning objects." },
    "Minor Illusion": { level: 0, school: "Illusion", castingTime: "1 action", range: "30 feet", damage: null, description: "Create a sound or image for 1 minute." },
    "Frost Bolt": { level: 0, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "1d8 cold", description: "A bolt of freezing energy that can slow enemies." },
    "Acid Splash": { level: 0, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: "1d6 acid", description: "Hurl a bubble of acid at creatures." },
    "Eldritch Blast": { level: 0, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "1d10 force", description: "A beam of crackling energy streaks toward a creature." },
    "Druidcraft": { level: 0, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "Whispering to spirits of nature, you create minor effects." },
    "Thorn Whip": { level: 0, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: "1d6 piercing", description: "Create a whip of thorns that pulls enemies closer." },
    "Guidance": { level: 0, school: "Divination", castingTime: "1 action", range: "Touch", damage: null, description: "Touch a creature to give them a d4 bonus to one ability check." },
    "Resistance": { level: 0, school: "Abjuration", castingTime: "1 action", range: "Touch", damage: null, description: "Touch a creature to give them a d4 bonus to one saving throw." },
    "Light": { level: 0, school: "Evocation", castingTime: "1 action", range: "Touch", damage: null, description: "Object touched sheds bright light in a 20-foot radius." },
    "Ray of Frost": { level: 0, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: "1d8 cold", description: "A beam of frigid air. Hit creature's speed is reduced by 10 feet." },
    "Shocking Grasp": { level: 0, school: "Evocation", castingTime: "1 action", range: "Touch", damage: "1d8 lightning", description: "Lightning springs from your hand. Advantage on attack roll if target is wearing metal armor." },
    "Dancing Lights": { level: 0, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: null, description: "Create up to four torch-sized lights that hover in the air." },
    "Blade Ward": { level: 0, school: "Abjuration", castingTime: "1 action", range: "Self", damage: null, description: "Gain resistance to bludgeoning, piercing, and slashing damage for 1 round." },
    "Mending": { level: 0, school: "Transmutation", castingTime: "1 minute", range: "Touch", damage: null, description: "Repairs a single break or tear in an object you touch." },
    "Chill Touch": { level: 0, school: "Necromancy", castingTime: "1 action", range: "120 feet", damage: "1d8 necrotic", description: "A skeletal hand attacks. If hit, target can't regain hit points until start of your next turn." },
    "Poison Spray": { level: 0, school: "Conjuration", castingTime: "1 action", range: "10 feet", damage: "1d12 poison", description: "Project a puff of noxious gas. Target must make a Constitution saving throw." },
    "Control Flames": { level: 0, school: "Transmutation", castingTime: "1 action", range: "60 feet", damage: null, description: "Instantly expand, extinguish, or change color of small flames." },
    "Gust": { level: 0, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "A small blast of wind pushes a creature or object." },
    "Infestation": { level: 0, school: "Conjuration", castingTime: "1 action", range: "30 feet", damage: "1d6 poison", description: "Parasitic insects assail one creature, causing it to move randomly if it fails a Con save." },
    "Produce Flame": { level: 0, school: "Conjuration", castingTime: "1 action", range: "30 feet", damage: "1d8 fire", description: "A flickering flame appears in your hand, can be thrown as an attack." },
    "Shillelagh": { level: 0, school: "Transmutation", castingTime: "1 bonus action", range: "Touch", damage: null, description: "Wood of a club or quarterstaff you are holding is imbued with nature's power. Use your spellcasting ability for attack and damage rolls, damage die becomes d8." },
    "Sacred Flame": { level: 0, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: "1d8 radiant", description: "Flame-like radiance descends on a creature. Target gains no benefit from cover for this saving throw." },

    // Level 1 Spells (Original: 5, Adding 10 new, Total: 15)
    "Magic Missile": { level: 1, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "1d4+1 force", description: "Three darts of magical force automatically hit their targets (per dart)." },
    "Shield": { level: 1, school: "Abjuration", castingTime: "1 reaction", range: "Self", damage: null, description: "An invisible barrier protects you, adding +5 to AC until start of your next turn." },
    "Burning Hands": { level: 1, school: "Evocation", castingTime: "1 action", range: "15-foot cone", damage: "3d6 fire", description: "A thin sheet of flames shoots forth from your outstretched fingertips." },
    "Cure Light Wounds": { level: 1, school: "Evocation", castingTime: "1 action", range: "Touch", damage: null, description: "Restore 1d8 + spellcasting ability modifier hit points." }, // Updated description
    "Speak with Animals": { level: 1, school: "Divination", castingTime: "1 action", range: "Self", damage: null, description: "You can communicate with beasts for 10 minutes." },
    "Chromatic Orb": { level: 1, school: "Evocation", castingTime: "1 action", range: "90 feet", damage: "3d8 (chosen type: acid, cold, fire, lightning, poison, thunder)", description: "Hurl a sphere of energy. Choose damage type upon casting." },
    "Sleep": { level: 1, school: "Enchantment", castingTime: "1 action", range: "90 feet", damage: null, description: "Puts creatures to sleep. Roll 5d8; total is how many HP of creatures fall unconscious." },
    "Entangle": { level: 1, school: "Conjuration", castingTime: "1 action", range: "90 feet", damage: null, description: "Grasping weeds and vines sprout from the ground in a 20-foot square, restraining creatures." },
    "Hail of Thorns": { level: 1, school: "Conjuration", castingTime: "1 bonus action", range: "Self", damage: "1d10 piercing", description: "Next time you hit with a ranged weapon attack, thorns explode from it. Target and creatures within 5 ft take damage." },
    "Fog Cloud": { level: 1, school: "Conjuration", castingTime: "1 action", range: "120 feet", damage: null, description: "Create a 20-foot-radius sphere of fog centered on a point." },
    "Goodberry": { level: 1, school: "Transmutation", castingTime: "1 action", range: "Touch", damage: null, description: "Create up to ten berries that are infused with magic. Eating a berry restores 1 hp." },
    "Absorb Elements": { level: 1, school: "Abjuration", castingTime: "1 reaction", range: "Self", damage: null, description: "Gain resistance to triggering acid, cold, fire, lightning, or thunder damage. First melee hit next turn deals 1d6 extra damage of that type." },
    "Animal Friendship": { level: 1, school: "Enchantment", castingTime: "1 action", range: "30 feet", damage: null, description: "Convince a beast that you mean it no harm." },
    "Detect Magic": { level: 1, school: "Divination", castingTime: "1 action", range: "Self", damage: null, description: "For 10 minutes, you sense the presence of magic within 30 feet." },
    "Thunderwave": { level: 1, school: "Evocation", castingTime: "1 action", range: "Self (15-foot cube)", damage: "2d8 thunder", description: "A wave of thunderous force sweeps out. Each creature in a 15-foot cube pushed 10 feet away." },

    // Level 2 Spells (Original: 5, Adding 10 new, Total: 15)
    "Scorching Ray": { level: 2, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "2d6 fire", description: "Three rays of fire strike targets (per ray)." },
    "Misty Step": { level: 2, school: "Conjuration", castingTime: "1 bonus action", range: "Self (30 feet)", damage: null, description: "Teleport up to 30 feet to an unoccupied space you can see." }, // Range self
    "Web": { level: 2, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "Thick, sticky webbing fills a 20-foot cube, restraining creatures." },
    "Barkskin": { level: 2, school: "Transmutation", castingTime: "1 action", range: "Touch", damage: null, description: "Touch a willing creature. Its AC can't be less than 16 for up to 1 hour." },
    "Spike Growth": { level: 2, school: "Transmutation", castingTime: "1 action", range: "150 feet", damage: "2d4 piercing", description: "Ground in a 20-foot radius sprouts hard spikes. Moving through costs double and deals damage per 5 feet." },
    "Mirror Image": { level: 2, school: "Illusion", castingTime: "1 action", range: "Self", damage: null, description: "Three illusory duplicates of yourself appear in your space." },
    "Invisibility": { level: 2, school: "Illusion", castingTime: "1 action", range: "Touch", damage: null, description: "A creature you touch becomes invisible for up to 1 hour." },
    "Lesser Restoration": { level: 2, school: "Abjuration", castingTime: "1 action", range: "Touch", damage: null, description: "Cure one disease or one condition (blinded, deafened, paralyzed, poisoned)." },
    "Gust of Wind": { level: 2, school: "Evocation", castingTime: "1 action", range: "Self (60-foot line)", damage: null, description: "A line of strong wind 60 feet long and 10 feet wide blasts from you." },
    "Hold Person": { level: 2, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "Paralyze a humanoid creature that fails a Wisdom saving throw." },
    "Darkvision": { level: 2, school: "Transmutation", castingTime: "1 action", range: "Touch", damage: null, description: "Grant a creature you touch darkvision out to 60 feet for 8 hours." },
    "Flaming Sphere": { level: 2, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: "2d6 fire", description: "Summon a sphere of fire that can be moved as a bonus action." },
    "Levitate": { level: 2, school: "Transmutation", castingTime: "1 action", range: "60 feet", damage: null, description: "One creature or object that weighs up to 500 pounds rises vertically." },
    "Shadow Blade": { level: 2, school: "Illusion", castingTime: "1 bonus action", range: "Self", damage: "2d8 psychic", description: "You weave together threads of shadow to create a sword of solidified gloom." },
    "Blur": { level: 2, school: "Illusion", castingTime: "1 action", range: "Self", damage: null, description: "Your body becomes blurred. Attackers have disadvantage on attack rolls against you." },

    // Level 3 Spells (Original: 5, Adding 10 new, Total: 15)
    "Fireball": { level: 3, school: "Evocation", castingTime: "1 action", range: "150 feet", damage: "8d6 fire", description: "A bright flash and thunderous boom as fire explodes in a 20-foot radius." },
    "Lightning Bolt": { level: 3, school: "Evocation", castingTime: "1 action", range: "Self (100-foot line)", damage: "8d6 lightning", description: "A stroke of lightning forms a line 100 feet long and 5 feet wide." },
    "Counterspell": { level: 3, school: "Abjuration", castingTime: "1 reaction", range: "60 feet", damage: null, description: "Interrupt a creature's spellcasting attempt." },
    "Lightning Arrow": { level: 3, school: "Transmutation", castingTime: "1 bonus action", range: "Self", damage: "4d8 lightning", description: "Next ranged weapon attack deals extra lightning damage, and lightning leaps to others." },
    "Wind Wall": { level: 3, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: null, description: "Create a wall of strong wind that deflects projectiles." },
    "Fly": { level: 3, school: "Transmutation", castingTime: "1 action", range: "Touch", damage: null, description: "Target gains a flying speed of 60 feet for 10 minutes." },
    "Haste": { level: 3, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "Target gains +2 AC, advantage on Dex saves, and an additional action." },
    "Conjure Barrage": { level: 3, school: "Conjuration", castingTime: "1 action", range: "Self (60-foot cone)", damage: "3d8 weapon type", description: "Throw a nonmagical weapon or piece of ammunition into the air to create a cone of identical weapons." },
    "Flame Arrows": { level: 3, school: "Transmutation", castingTime: "1 action", range: "Touch", damage: "1d6 fire", description: "Touch a quiver containing arrows or bolts. Ammunition drawn from it deals extra fire damage." },
    "Dispel Magic": { level: 3, school: "Abjuration", castingTime: "1 action", range: "120 feet", damage: null, description: "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on it ends." },
    "Hypnotic Pattern": { level: 3, school: "Illusion", castingTime: "1 action", range: "120 feet", damage: null, description: "Creates a twisting pattern of colors that charms creatures within a 30-foot cube." },
    "Sleet Storm": { level: 3, school: "Conjuration", castingTime: "1 action", range: "150 feet", damage: null, description: "Freezing rain and sleet fill a 20-foot-tall cylinder with a 40-foot radius. Heavily obscures, douses flames, slippery." },
    "Slow": { level: 3, school: "Transmutation", castingTime: "1 action", range: "120 feet", damage: null, description: "Alter time around up to six creatures, halving their speed, AC, Dex saves and limiting actions." },
    "Animate Dead": { level: 3, school: "Necromancy", castingTime: "1 minute", range: "10 feet", damage: null, description: "Create an undead servant from a pile of bones or a corpse." },
    "Spirit Guardians": { level: 3, school: "Conjuration", castingTime: "1 action", range: "Self (15-foot radius)", damage: "3d8 radiant or necrotic", description: "Call forth spirits to protect you. They flit around you to a distance of 15 feet." },

    // Level 4 Spells (Original: 2, Adding 8 new, Total: 10)
    "Dimension Door": { level: 4, school: "Conjuration", castingTime: "1 action", range: "500 feet", damage: null, description: "Teleport yourself and one willing creature up to 500 feet." },
    "Greater Invisibility": { level: 4, school: "Illusion", castingTime: "1 action", range: "Touch", damage: null, description: "Become invisible for 1 minute, even while attacking." },
    "Ice Storm": { level: 4, school: "Evocation", castingTime: "1 action", range: "300 feet", damage: "2d8 bludgeoning + 4d6 cold", description: "A hail of rock-hard ice pounds to the ground in a 20-foot-radius cylinder." },
    "Phantasmal Killer": { level: 4, school: "Illusion", castingTime: "1 action", range: "120 feet", damage: "4d10 psychic", description: "You tap into the nightmares of a creature to create an illusory manifestation of its deepest fears." },
    "Wall of Fire": { level: 4, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "5d8 fire", description: "Create a wall of fire on a solid surface." },
    "Banishment": { level: 4, school: "Abjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "Attempt to send one creature that you can see within range to another plane of existence." },
    "Stoneskin": { level: 4, school: "Abjuration", castingTime: "1 action", range: "Touch", damage: null, description: "Target gains resistance to nonmagical bludgeoning, piercing, and slashing damage." },
    "Polymorph (Self/Ally only)": { level: 4, school: "Transmutation", castingTime: "1 action", range: "Touch", damage: null, description: "Transforms a willing creature into a new beast form. (For broader polymorph, see L5 Polymorph)" }, // Differentiating from the L5 one
    "Guardian of Nature": { level: 4, school: "Transmutation", castingTime: "1 bonus action", range: "Self", damage: null, description: "You transform into a Primal Guardian or Great Tree, gaining various benefits." },
    "Locate Creature": { level: 4, school: "Divination", castingTime: "1 action", range: "Self", damage: null, description: "Describe or name a creature familiar to you. Sense direction to creature up to 1000ft away." },

    // Level 5 Spells (Original: 5, Adding 8 new, Total: 13)
    "Cone of Cold": { level: 5, school: "Evocation", castingTime: "1 action", range: "Self (60-foot cone)", damage: "8d8 cold", description: "Blast of cold air erupts from your hands in a 60-foot cone." },
    "Teleport (Short Range)": { level: 5, school: "Conjuration", castingTime: "1 action", range: "10 feet to known location on same plane", damage: null, description: "Instantly transport yourself and up to eight willing creatures to a familiar location (short range)." }, // Clarified
    "Polymorph": { level: 5, school: "Transmutation", castingTime: "1 action", range: "60 feet", damage: null, description: "Transform a creature into a different beast of your choice." },
    "Conjure Animals (Specific version)": { level: 5, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "Summon fey spirits in powerful animal forms to fight alongside you." }, // Clarified for Ranger
    "Plant Growth": { level: 5, school: "Transmutation", castingTime: "1 action or 8 hours", range: "150 feet", damage: null, description: "Plants in the area become thick and overgrown, or enrich land over 8 hours." },
    "Wall of Force": { level: 5, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: null, description: "An invisible wall of force springs into existence." },
    "Animate Objects": { level: 5, school: "Transmutation", castingTime: "1 action", range: "120 feet", damage: "Varies", description: "Objects come to life at your command." },
    "Mass Cure Wounds": { level: 5, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "Heal up to six creatures for 3d8 + spellcasting ability modifier HP each." },
    "Steel Wind Strike": { level: 5, school: "Conjuration", castingTime: "1 action", range: "30 feet", damage: "6d10 force", description: "You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each one." },
    "Wrath of Nature": { level: 5, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "Varies", description: "Call upon the spirits of nature to wreak havoc. Choose effects like grasping roots, animated trees, or rock slides." },
    "Dominate Person": { level: 5, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "You attempt to beguile a humanoid that you can see within range." },
    "Hold Monster": { level: 5, school: "Enchantment", castingTime: "1 action", range: "90 feet", damage: null, description: "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration." },
    "Scrying": { level: 5, school: "Divination", castingTime: "10 minutes", range: "Self", damage: null, description: "You can see and hear a particular creature you choose that is on the same plane of existence as you." },

    // Level 6 Spells (Adding 8 new)
    "Chain Lightning": { level: 6, school: "Evocation", castingTime: "1 action", range: "150 feet", damage: "10d8 lightning", description: "Create a bolt of lightning that arcs to other targets." },
    "Disintegrate": { level: 6, school: "Transmutation", castingTime: "1 action", range: "60 feet", damage: "10d6 + 40 force", description: "A thin green ray springs from your pointing finger. If damage reduces target to 0 hp, it is disintegrated." },
    "Globe of Invulnerability": { level: 6, school: "Abjuration", castingTime: "1 action", range: "Self (10-foot radius)", damage: null, description: "An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you." },
    "True Seeing": { level: 6, school: "Divination", castingTime: "1 action", range: "Touch", damage: null, description: "Gives the willing creature you touch the ability to see things as they actually are for 1 hour." },
    "Transport via Plants": { level: 6, school: "Conjuration", castingTime: "1 action", range: "10 feet", damage: null, description: "Step into one large plant and emerge from another within 500 miles." },
    "Heal (Nature version)": { level: 6, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "A surge of natural energy restores 70 hit points to a creature." },
    "Find the Path": { level: 6, school: "Divination", castingTime: "1 minute", range: "Self", damage: null, description: "Find the shortest, most direct physical route to a specified fixed location." },
    "Wind Walk": { level: 6, school: "Transmutation", castingTime: "1 minute", range: "30 feet", damage: null, description: "You and up to ten willing creatures transform into a cloud of mist." },

    // Level 7 Spells (Adding 8 new)
    "Delayed Blast Fireball": { level: 7, school: "Evocation", castingTime: "1 action", range: "150 feet", damage: "12d6 fire", description: "A beam of yellow light streaks to a point you choose, then blossoms with a low roar into an explosion of flame." },
    "Finger of Death": { level: 7, school: "Necromancy", castingTime: "1 action", range: "60 feet", damage: "7d8 + 30 necrotic", description: "Send negative energy to assail a creature. If it dies, it rises as a zombie." },
    "Plane Shift": { level: 7, school: "Conjuration", castingTime: "1 action", range: "Touch", damage: null, description: "You and up to eight willing creatures link hands and travel to a different plane of existence." },
    "Prismatic Spray": { level: 7, school: "Evocation", castingTime: "1 action", range: "Self (60-foot cone)", damage: "10d6 (random type)", description: "Eight multicolored rays of light flash from your hand. Each ray has a different power and purpose." },
    "Regenerate (Nature version)": { level: 7, school: "Transmutation", castingTime: "1 minute", range: "Touch", damage: null, description: "Target regains 4d8 + 15 hit points. For 1 hour, target regains 1 hp at start of each of its turns." },
    "Mirage Arcane (Nature Themed)": { level: 7, school: "Illusion", castingTime: "10 minutes", range: "Sight", damage: null, description: "Make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of natural terrain." },
    "Reverse Gravity (Nature's Pull)": { level: 7, school: "Transmutation", castingTime: "1 action", range: "100 feet", damage: null, description: "Reverse gravity in a 50-foot-radius, 100-foot-high cylinder." },
    "Teleport (Long Range)": { level: 7, school: "Conjuration", castingTime: "1 action", range: "10 feet to any known location on same plane", damage: null, description: "Instantly transport yourself and up to eight willing creatures to any familiar location on the same plane." },

    // Level 8 Spells (Adding 8 new)
    "Meteor Swarm (Single Meteor)": { level: 8, school: "Evocation", castingTime: "1 action", range: "1 mile", damage: "20d6 fire, 20d6 bludgeoning", description: "A single blazing orb of fire plummets to the ground at a point you choose. (Lesser version of Meteor Swarm)" },
    "Power Word Stun": { level: 8, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "Speak a word of power that can stun a creature with 150 hit points or fewer." },
    "Dominate Monster": { level: 8, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "You attempt to beguile any creature, not just humanoids." },
    "Sunburst": { level: 8, school: "Evocation", castingTime: "1 action", range: "150 feet", damage: "12d6 radiant", description: "Brilliant sunlight flashes in a 60-foot radius, blinding creatures and dealing damage." },
    "Animal Shapes": { level: 8, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "Transform willing creatures into beasts for up to 24 hours." },
    "Control Weather (Localized)": { level: 8, school: "Transmutation", castingTime: "10 minutes", range: "Self (5-mile radius)", damage: null, description: "Take control of the weather within 5 miles of you for 8 hours (localized effects)." },
    "Earthquake (Localized)": { level: 8, school: "Evocation", castingTime: "1 action", range: "500 feet", damage: "Varies", description: "Create a seismic disturbance in a 100-foot radius on the ground." },
    "Maze": { level: 8, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "Banish a creature to a labyrinthine demiplane for up to 10 minutes." },
    "Forcecage": { level: 8, school: "Evocation", castingTime: "1 action", range: "100 feet", damage: null, description: "Create an immobile, invisible, cube-shaped prison composed of magical force." },

    // Level 9 Spells (Adding 12 new for a total of 12)
    "Meteor Swarm": { level: 9, school: "Evocation", castingTime: "1 action", range: "1 mile", damage: "20d6 fire + 20d6 bludgeoning", description: "Blazing orbs of fire plummet to the ground at four different points you can see within range." },
    "Time Stop": { level: 9, school: "Transmutation", castingTime: "1 action", range: "Self", damage: null, description: "You briefly stop the flow of time for everyone but yourself. 1d4+1 rounds of free action." },
    "Wish (Limited)": { level: 9, school: "Conjuration", castingTime: "1 action", range: "Self", damage: null, description: "The mightiest spell a mortal can cast, capable of altering reality itself (with limitations and risks)." },
    "True Polymorph": { level: 9, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "Transform a creature or object into a different creature or object permanently." },
    "Shapechange (Beasts Only / Full)": { level: 9, school: "Transmutation", castingTime: "1 action", range: "Self", damage: null, description: "Assume the form of different creatures, gaining their abilities." }, // Can be full for mage
    "Storm of Vengeance (Nature's Fury)": { level: 9, school: "Conjuration", castingTime: "1 action", range: "Sight", damage: "Varies", description: "A churning storm cloud forms, lashing out with acid, lightning, hail, and freezing winds." },
    "True Resurrection (Nature's Cycle / Arcane)": { level: 9, school: "Necromancy", castingTime: "1 hour", range: "Touch", damage: null, description: "Touch a dead creature that has been dead for no more than 200 years and is not undead. Returns to life with all its hit points." },
    "Mass Heal (Nature's Touch / Arcane)": { level: 9, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "A wave of healing energy washes out. Choose any number of creatures, restore up to 700 hit points, divided as you choose." },
    "Foresight (Primal / Arcane)": { level: 9, school: "Divination", castingTime: "1 minute", range: "Touch", damage: null, description: "Grant a creature advantage on attacks, ability checks, and saving throws, and disadvantage on attacks against it." },
    "Gate (Nature's Passage / Arcane)": { level: 9, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence." },
    "Imprisonment (Entomb in Earth / Magical Chains)": { level: 9, school: "Abjuration", castingTime: "1 minute", range: "30 feet", damage: null, description: "Create a magical restraint to hold a creature. Various forms like burial, chaining, slumber, etc." },
    "Power Word Kill": { level: 9, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "Speak a word of power that can instantly kill a creature with 100 hit points or fewer." },
    "Message": { level: 0, school: "Transmutation", castingTime: "1 action", range: "120 feet", damage: null, description: "Whisper a message to a creature within range that only they can hear." },
    "Vicious Mockery": { level: 0, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: "1d4 psychic", description: "Unleash a string of insults laced with subtle enchantments at a creature. If it fails a Wisdom save, it takes damage and has disadvantage on its next attack roll." },
    "Wish (Patron's Whim)": { level: 9, school: "Conjuration", castingTime: "1 action", range: "Self", damage: null, description: "A limited wish granted by your patron, with unpredictable outcomes." },
    "World Tree Teleport": { level: 9, school: "Conjuration", castingTime: "10 minutes", range: "Touch (tree)", damage: null, description: "Teleport to any other large tree on the same plane of existence." },
// THIS IS THE COMPLETE LITERAL SPELL/CANTRIP DEFINITIONS SNIPPET (SCSS)
    "Acid Maw": { level: 1, school: "Transmutation", castingTime: "1 action", range: "Touch", damage: "2d10 acid", description: "Your mouth transforms into a maw of acid, making a melee spell attack." },
    "Shadow Bolt": { level: 2, school: "Illusion", castingTime: "1 action", range: "120 feet", damage: "3d8 necrotic", description: "Hurl a bolt of solidified shadow that causes necrotic damage and temporary blindness on a failed Con save." },
    "Psionic Shield": { level: 0, school: "Abjuration", castingTime: "1 reaction", range: "Self", damage: null, description: "As a reaction to taking damage, gain +5 to AC until your next turn, potentially causing the attack to miss." },
    "Kinetic Slam": { level: 3, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: "4d10 force", description: "Project a wave of telekinetic force, slamming into a target and potentially knocking them prone." },
    "Soul Tap": { level: 4, school: "Necromancy", castingTime: "1 action", range: "30 feet", damage: "5d6 necrotic", description: "Drain a portion of a creature's life force, healing yourself for half the damage dealt." },
    "Aura of Vitality": { level: 5, school: "Evocation", castingTime: "1 action", range: "Self (30-foot radius)", damage: null, description: "Allies in the aura regain 2d6 HP at the start of your turn for 1 minute." },
    "Mental Prison": { level: 6, school: "Illusion", castingTime: "1 action", range: "60 feet", damage: "5d10 psychic", description: "Trap a creature in an illusory prison it perceives as real, dealing psychic damage if it tries to escape." },
    "Reality Shift": { level: 7, school: "Illusion", castingTime: "1 action", range: "120 feet", damage: null, description: "Swap two objects or creatures of similar size that are not being worn or carried." },
    "Thought Bomb": { level: 8, school: "Evocation", castingTime: "1 action", range: "150 feet", damage: "10d8 psychic", description: "An explosion of mental force damages and potentially stuns creatures in a 20-foot radius." },
    "Mind Fortress": { level: 9, school: "Abjuration", castingTime: "1 action", range: "Touch", damage: null, description: "Grant a creature immunity to psychic damage and mind-reading for 24 hours." }
// END OF SCSS
};

// Ability definitions (Original: 35, Adding 90 new, Total: 125)
export const abilityDefinitions = {
    // Warrior Abilities (Original: 8, Adding 22 new, Total: 30)
    "Power Strike": { class: "warrior", type: "attack", cooldown: 3, description: "Deal extra 1d6 damage on your next melee attack.", effect: { damage: "1d6", type: "bonus" } },
    "Shield Bash": { class: "warrior", type: "attack", cooldown: 2, description: "Bash with your shield to daze an enemy briefly (disadvantage on next attack).", effect: { damage: "1d4", status: "dazed" } }, // Stun changed to daze
    "Cleave Attack": { class: "warrior", type: "attack", cooldown: 4, description: "Attack up to two adjacent enemies with one swing.", effect: { targets: "2 adjacent", damage: "normal" } }, // Max 2 targets
    "Battle Fury": { class: "warrior", type: "buff", cooldown: 8, description: "Enter a fury state for 3 rounds, increasing attack damage by +2 and gaining an extra attack action this turn.", effect: { duration: 3, damage_bonus: 2, extra_action_first_turn: true } }, // Modified
    "Defensive Stance": { class: "warrior", type: "stance", cooldown: 0, description: "Gain +2 AC but movement speed is halved. Ends if you move more than 5ft.", effect: { ac_bonus: 2, movement_penalty: 0.5, condition: "move <= 5ft" } }, // Modified
    "Weapon Throw": { class: "warrior", type: "ranged", cooldown: 5, description: "Throw your equipped melee weapon at a distant enemy.", effect: { range: 30, damage: "weapon_damage+1d4" } },
    "Whirlwind Strike": { class: "warrior", type: "attack", cooldown: 6, description: "Attack all enemies within 5 feet of you.", effect: { aoe: "5ft radius", damage: "weapon" } },
    "Intimidating Shout": { class: "warrior", type: "debuff", cooldown: 7, description: "Frighten enemies within 15 feet, reducing their attack rolls by 1d4 for 2 rounds.", effect: { range: 15, status: "frightened", duration: 2, attack_penalty: "1d4" } }, // Modified
    "War Cry": { class: "warrior", type: "buff", cooldown: 10, description: "Bolster allies within 30 feet, granting them +1 to attack rolls for 3 rounds.", effect: { range: 30, target: "allies", buff: "attack_roll_bonus", value: 1, duration: 3 } },
    "Sunder Armor": { class: "warrior", type: "attack", cooldown: 5, description: "A powerful strike that temporarily reduces target's AC by 2 for 1 round.", effect: { damage: "weapon", debuff: "ac_reduction", value: -2, duration: 1 } },
    "Retaliation": { class: "warrior", type: "passive", cooldown: 0, description: "When hit by a melee attack, you can use your reaction to make a melee attack back.", effect: { trigger: "on_melee_hit", action: "reaction_attack" } },
    "Earthshaker Slam": { class: "warrior", type: "attack", cooldown: 8, description: "Slam the ground, causing a shockwave that knocks enemies in a 10ft cone prone.", effect: { aoe: "10ft cone", damage: "1d8 bludgeoning", status: "prone" } },
    "Concussive Blow": { class: "warrior", type: "attack", cooldown: 6, description: "A heavy strike that can daze the target, giving them disadvantage on their next action.", effect: { damage: "weapon+1d6", status: "dazed_next_action" } },
    "Rallying Cry": { class: "warrior", type: "utility", cooldown: 12, description: "Remove fear effects from allies in 30 feet and grant temporary HP (1d10).", effect: { range: 30, action: "remove_fear", temp_hp: "1d10" } },
    "Heroic Leap": { class: "warrior", type: "movement", cooldown: 7, description: "Leap up to 30 feet to a target location, dealing 2d6 damage in a 5ft radius upon landing.", effect: { range: 30, aoe_damage_on_land: "2d6", radius: 5 } },
    "Berserker Rage": { class: "warrior", type: "buff", cooldown: 15, description: "Enter a berserk state: +4 Strength, -2 AC, immune to fear for 1 minute. Exhaustion after.", effect: { duration: 10, strength_bonus: 4, ac_penalty: -2, immune: "fear", after_effect: "exhaustion_level_1" } },
    "Executioner's Strike": { class: "warrior", type: "attack", cooldown: 10, description: "If target is below 25% HP, this attack is an automatic critical hit.", effect: { damage: "weapon", condition: "target_hp < 25%", critical: true } },
    "Terrifying Presence": { class: "warrior", type: "debuff", cooldown: 9, description: "For 1 minute, enemies starting their turn within 10 feet must make a Wisdom save or become frightened.", effect: { duration: 10, aura_range: 10, status: "frightened", save: "wisdom" } },
    "Unstoppable Force": { class: "warrior", type: "passive", cooldown: 0, description: "You cannot be unwillingly moved or knocked prone while conscious and not incapacitated.", effect: { immune: ["forced_movement", "prone_unwillingly"] } },
    "Stunning Strike (Warrior)": { class: "warrior", type: "attack", cooldown: 8, description: "An attack that can stun the target for 1 round on a failed Constitution save.", effect: { damage: "weapon", status: "stunned", duration: 1, save: "constitution" } },
    "Overpower": { class: "warrior", type: "attack", cooldown: 7, description: "Make an attack roll with advantage. If it hits, the target is also pushed back 10 feet.", effect: { advantage: true, damage: "weapon", effect_on_hit: "pushback_10ft" } },
    "Iron Will": { class: "warrior", type: "passive", cooldown: 0, description: "Advantage on saving throws against being charmed or frightened.", effect: { advantage_on_save: ["charmed", "frightened"] } },
    "Shockwave": { class: "warrior", type: "attack", cooldown: 12, description: "Slam your weapon into the ground, sending out a 15ft cone of force. Deals 4d6 force damage and stuns for 1 round on failed Con save.", effect: { aoe: "15ft cone", damage: "4d6 force", status: "stunned", save: "constitution", duration: 1 } },
    "Last Stand": { class: "warrior", type: "buff", cooldown: "long_rest", description: "When reduced to 0 HP but not killed outright, you can drop to 1 HP instead and gain 2d10 temporary HP.", effect: { trigger: "hp_to_0", action: "set_hp_1", temp_hp: "2d10" } },
    "Warlord's Command": { class: "warrior", type: "utility", cooldown: 10, description: "As a bonus action, command an ally within 30ft to use their reaction to make one weapon attack.", effect: { range: 30, target: "ally", action: "grant_reaction_attack" } },
    "Bladestorm": { class: "warrior", type: "ultimate", cooldown: 20, description: "Make a melee attack against every enemy within 10 feet. You have advantage on these attacks.", effect: { aoe: "10ft radius", damage: "weapon", advantage: true, targets: "all_enemies" } },
    "Avatar of War": { class: "warrior", type: "buff", cooldown: "long_rest", description: "For 1 minute, you gain +2 to attack and damage rolls, +2 AC, and resistance to non-magical physical damage.", effect: { duration: 10, attack_bonus: 2, damage_bonus: 2, ac_bonus: 2, resistance: "nonmagical_physical" } },
    "Crippling Blow": { class: "warrior", type: "attack", cooldown: 9, description: "A vicious strike that reduces the target's speed by half and gives disadvantage on Dexterity saving throws for 1 minute.", effect: { damage: "weapon", debuff: ["speed_halved", "disadvantage_dex_saves"], duration: 10 } },
    "Death Wish": { class: "warrior", type: "buff", cooldown: "long_rest", description: "For 1 minute, your melee attacks deal an extra 1d10 necrotic damage, but you have vulnerability to all damage.", effect: { duration: 10, bonus_damage: "1d10 necrotic", vulnerability: "all" } },
    "Undying Rage": { class: "warrior", type: "passive", cooldown: "long_rest", description: "If you drop to 0 HP while raging (from Berserker Rage or similar), you can make a DC 10 Con save to stay at 1 HP instead. DC increases by 5 each time.", effect: { trigger: "hp_to_0_while_raging", save_dc_con: "10_increasing" } },
    "Titanic Smash": { class: "warrior", type: "attack", cooldown: 15, description: "A devastating overhead blow. Deals 4x weapon damage on a hit. If it misses, you are stunned for 1 round.", effect: { damage_multiplier: 4, on_miss_penalty: "stunned_1_round" } },
    "War God's Blessing": { class: "warrior", type: "passive", cooldown: 0, description: "You can no longer be surprised while conscious.", effect: { immune: "surprised_while_conscious" } },

    // Mage Abilities (Original: 8, Adding 22 new, Total: 30)
    "Spell Focus": { class: "mage", type: "passive", cooldown: 0, description: "Increases your spell attack bonus by 1 and spell save DC by 1.", effect: { spell_attack_bonus: 1, spell_save_dc_bonus: 1 } }, // Simplified
    "Mana Shield": { class: "mage", type: "defensive", cooldown: 10, description: "Expend a spell slot to create a shield that absorbs 5 damage per spell level for 1 minute.", effect: { duration: 10, shield_hp_per_spell_level: 5 } }, // Modified
    "Spell Surge": { class: "mage", type: "buff", cooldown: 8, description: "Your next spell cast within 1 minute that has a casting time of 1 action is cast as a bonus action instead.", effect: { duration: 1, next_spell_cast_time: "bonus_action" } }, // Modified
    "Elemental Mastery": { class: "mage", type: "passive", cooldown: 0, description: "Choose one element (fire, cold, lightning). Spells of that type ignore resistance and you gain resistance to it.", effect: { chosen_element: true, ignore_resistance_chosen: true, self_resistance_chosen: true } }, // Modified
    "Spell Steal": { class: "mage", type: "utility", cooldown: 12, description: "Attempt to steal a magical effect (spell of 5th level or lower) from an enemy. Requires an Intelligence check vs enemy's spell save DC.", effect: { range: 60, type: "steal_spell_effect", max_spell_level: 5, check: "intelligence_vs_dc" } },
    "Spell Penetration": { class: "mage", type: "passive", cooldown: 0, description: "Your spells ignore half cover and treat three-quarters cover as half cover.", effect: { cover_interaction: "ignore_half_treat_threequarters_as_half" } }, // Modified
    "Arcane Mastery": { class: "mage", type: "ultimate", cooldown: 20, description: "For 1 minute, you can cast any spell you know of 5th level or lower without expending a spell slot. Once per spell.", effect: { duration: 10, free_cast_level_5_or_lower: true, once_per_spell_known: true } }, // Modified
    "Time Stop (Minor)": { class: "mage", type: "utility", cooldown: "long_rest", description: "Gain an additional action on your turn. (Not full time stop)", effect: { bonus_action_on_turn: 1 } }, // Modified
    "Empowered Elements": { class: "mage", type: "passive", cooldown: 0, description: "When you roll damage for a spell, you can reroll a number of the damage dice up to your Intelligence modifier (minimum of one). You must use the new rolls.", effect: { reroll_damage_dice_up_to_int_mod: true } },
    "Arcane Warding": { class: "mage", type: "defensive", cooldown: "short_rest", description: "As a reaction when hit by an attack, you can expend a spell slot to increase your AC by the slot's level until your next turn.", effect: { trigger: "on_hit", ac_bonus_per_slot_level: true } },
    "Rapid Casting": { class: "mage", type: "passive", cooldown: 0, description: "Spells with a casting time of 1 action can be cast as a bonus action if they are 2nd level or lower (once per turn).", effect: { condition_cast_as_bonus: "level_2_or_lower_spell", limit: "once_per_turn" } },
    "Spell Reflection": { class: "mage", type: "defensive", cooldown: "long_rest", description: "As a reaction when targeted by a spell that targets only you (not an area), you can attempt to reflect it back at the caster. Requires an Int check vs spell save DC.", effect: { trigger: "targeted_by_single_target_spell", check_int_vs_dc: true, action: "reflect_spell" } },
    "Arcane Infusion": { class: "mage", type: "buff", cooldown: 5, description: "Touch a weapon. For 1 minute, it becomes a magic weapon and deals an extra 1d6 force damage on hit.", effect: { target: "weapon", duration: 10, effect: "magic_weapon", bonus_damage: "1d6 force" } },
    "Mind Blank (Self)": { class: "mage", type: "defensive", cooldown: "long_rest", description: "You become immune to psychic damage, divination spells, and the charmed/frightened conditions for 1 hour.", effect: { duration: 60, immune: ["psychic_damage", "divination_spells", "charmed", "frightened"] } },
    "Spell Weaver": { class: "mage", type: "passive", cooldown: 0, description: "When you cast a spell using a spell slot of 1st level or higher, you can also cast a cantrip as a bonus action.", effect: { trigger: "cast_leveled_spell", bonus_action_cantrip: true } },
    "Mystic Shield": { class: "mage", type: "defensive", cooldown: 7, description: "Summon a shield of pure magic that grants +3 AC for 1 minute or until dismissed.", effect: { ac_bonus: 3, duration: 10 } },
    "Energy Conversion": { class: "mage", type: "utility", cooldown: "short_rest", description: "When you take acid, cold, fire, lightning, or thunder damage, you can use your reaction to gain resistance to it for 1 minute and your next spell of that damage type deals extra 1d10 damage.", effect: { trigger: "take_elemental_damage", reaction_gain_resistance: true, next_spell_bonus_damage: "1d10 elemental" } },
    "Arcane Eye (Improved)": { class: "mage", type: "utility", cooldown: 10, description: "Create an invisible, magical eye that allows you to see through it. It has darkvision 60ft and can travel 100ft per round. Lasts 1 hour.", effect: { duration: 60, eye_properties: { invisible: true, darkvision: 60, speed: 100 } } },
    "Archmage's Insight": { class: "mage", type: "passive", cooldown: 0, description: "You can prepare an additional number of spells equal to your Intelligence modifier.", effect: { bonus_prepared_spells_int_mod: true } },
    "Spell Immunity (One School)": { class: "mage", type: "defensive", cooldown: "long_rest", description: "Choose one school of magic. You gain immunity to spells from that school of 5th level or lower for 1 hour.", effect: { duration: 60, chosen_school_immunity_level_5_lower: true } },
    "Rune Carver": { class: "mage", type: "utility", cooldown: "short_rest", description: "Inscribe a temporary rune on an object that can store one spell of 3rd level or lower. Can be activated by a touch.", effect: { store_spell_in_rune_level_3_lower: true } },
    "Astral Projection (Self)": { class: "mage", type: "utility", cooldown: "long_rest", description: "Project your astral body onto the Astral Plane, leaving your physical body behind.", effect: { astral_projection: true } },
    "Spell Mimicry": { class: "mage", type: "utility", cooldown: "long_rest", description: "Observe another spellcaster. If they cast a spell of 5th level or lower that is on your class list, you can use your reaction to learn it temporarily (until next long rest).", effect: { trigger: "observe_spellcast", learn_spell_temporarily_level_5_lower: true } },
    "Etherealness (Self)": { class: "mage", type: "utility", cooldown: "long_rest", description: "Enter the Ethereal Plane for up to 10 minutes.", effect: { duration: 10, ethereal_travel: true } },
    "Leyline Attunement": { class: "mage", type: "passive", cooldown: 0, description: "When you are in an area of strong magical power (DM's discretion), regain one 1st level spell slot per minute.", effect: { condition: "strong_magic_area", regain_slot_per_minute: "1st_level" } },
    "Planar Binding (Lesser)": { class: "mage", type: "utility", cooldown: "long_rest", description: "Attempt to bind a celestial, elemental, fey, or fiend to your service for 24 hours (CR 2 or lower).", effect: { bind_creature_type: ["celestial", "elemental", "fey", "fiend"], max_cr: 2, duration: "24_hours" } },
    "Chronomancy": { class: "mage", type: "utility", cooldown: "short_rest", description: "As a reaction, force a creature to reroll an attack roll, saving throw, or ability check. You choose if they use the new roll.", effect: { force_reroll_target: true } },
    "Reality Warp (Minor)": { class: "mage", type: "utility", cooldown: "long_rest", description: "Slightly alter reality: change the color of an object, create a harmless sensory effect, or make a small object appear/disappear.", effect: { minor_reality_alteration: true } },
    "Nexus of Power": { class: "mage", type: "passive", cooldown: 0, description: "Increase your maximum number of spell slots for 1st, 2nd, and 3rd level spells by one each.", effect: { bonus_spell_slots: { "1st": 1, "2nd": 1, "3rd": 1 } } },
    "Arcane Annihilation": { class: "mage", type: "ultimate", cooldown: "long_rest", description: "Choose a point within 120ft. A 30ft radius sphere of destructive energy erupts. Creatures take 10d6 force damage and 10d6 necrotic damage (Dex save for half).", effect: { range: 120, aoe: "30ft radius sphere", damage: "10d6 force + 10d6 necrotic", save: "dex_half" } },
    "Cosmic Awareness": { class: "mage", type: "passive", cooldown: 0, description: "You are always aware of the location of any celestial, fiend, or undead within 60 feet of you, unless they are hidden by magic.", effect: { sense_creature_types_range_60: ["celestial", "fiend", "undead"] } },
    "Unravel Magic": { class: "mage", type: "utility", cooldown: "short_rest", description: "Target a magical effect or spell. Make an ability check using your spellcasting ability. On a success (DC 10 + spell level), you end the effect.", effect: { target_magic_effect: true, check_to_end: "spellcasting_ability_vs_10_plus_spell_level" } },


    // Rogue Abilities (Original: 10, Adding 22 new, Total: 32)
    "Backstab": { class: "rogue", type: "passive", cooldown: 0, description: "When attacking with advantage using a finesse or ranged weapon, add Sneak Attack damage.", effect: { condition: "advantage_finesse_or_ranged", trigger_sneak_attack: true } }, // Clarified
    "Lockpicking": { class: "rogue", type: "utility", cooldown: 0, description: "Proficiency with thieves' tools. Double proficiency bonus for checks made to pick locks.", effect: { proficiency: "thieves_tools", expertise_on_pick_locks: true } },
    "Pickpocket": { class: "rogue", type: "utility", cooldown: 0, description: "Make a Sleight of Hand check to lift an item from a target. Double proficiency bonus for this check.", effect: { skill_check: "sleight_of_hand", expertise_on_pickpocket: true } },
    "Dodge Roll": { class: "rogue", type: "movement", cooldown: 3, description: "As a reaction when targeted by an attack, move 10 feet without provoking opportunity attacks. If this moves you out of range, the attack misses.", effect: { trigger: "targeted_by_attack", reaction_move: 10, no_opportunity_attacks: true, condition_miss: "out_of_range" } },
    "Smoke Bomb": { class: "rogue", type: "utility", cooldown: 8, description: "Create a 15-foot radius cloud of smoke that heavily obscures the area for 3 rounds.", effect: { radius: 15, duration: 3, effect: "heavily_obscured" } },
    "Shadow Step (Short)": { class: "rogue", type: "movement", cooldown: 6, description: "If in dim light or darkness, teleport up to 30 feet to another area of dim light or darkness as a bonus action.", effect: { range: 30, condition: "dim_light_or_darkness", cast_time: "bonus_action" } },
    "Poison Blade": { class: "rogue", type: "buff", cooldown: 10, description: "As a bonus action, apply poison to one weapon. Next hit deals an extra 2d6 poison damage.", effect: { cast_time: "bonus_action", duration: "next_hit", poison_damage: "2d6" } },
    "Caltrops": { class: "rogue", type: "trap", cooldown: 7, description: "Scatter caltrops in a 5-foot square. Creatures entering take 1d4 piercing damage and must make a Dex save or speed reduced by 10ft.", effect: { area: "5x5", damage: "1d4 piercing", slow_on_failed_dex_save: 10 } },
    "Vanish": { class: "rogue", type: "stealth", cooldown: 12, description: "As a bonus action, become invisible until you attack, cast a spell, or end your turn.", effect: { cast_time: "bonus_action", invisibility_until_action: true } },
    "Throwing Knives": { class: "rogue", type: "ranged", cooldown: 4, description: "As an action, make two attacks with daggers or darts. Add proficiency to damage if thrown.", effect: { attacks: 2, weapon_type: ["dagger", "dart"], bonus_damage_if_thrown: "proficiency" } },
    "Silent Takedown": { class: "rogue", type: "attack", cooldown: "short_rest", description: "If you hit a surprised creature with a melee attack and reduce it to 0 HP, you can choose to knock it out silently instead of killing it. No sound is made.", effect: { condition: "surprised_target_melee_0hp", action: "silent_knockout" } },
    "Analyze Weakness": { class: "rogue", type: "utility", cooldown: 5, description: "As a bonus action, make an Insight check against a creature's Deception. On success, your next attack roll against it has advantage.", effect: { cast_time: "bonus_action", check: "insight_vs_deception", on_success: "advantage_next_attack" } },
    "Wall Run": { class: "rogue", type: "movement", cooldown: 0, description: "You can move along vertical surfaces for a short distance without falling during your move.", effect: { vertical_movement_during_move: true } },
    "Trap Sense (Improved)": { class: "rogue", type: "passive", cooldown: 0, description: "Advantage on saving throws against traps and +5 to Perception/Investigation to find traps.", effect: { advantage_on_trap_saves: true, bonus_to_find_traps: 5 } },
    "Shadow Meld": { class: "rogue", type: "stealth", cooldown: "short_rest", description: "If you are in dim light or darkness, you can use your action to become invisible. You remain invisible as long as you remain in dim light or darkness.", effect: { condition: "dim_light_or_darkness", action_become_invisible_while_in_shadow: true } },
    "Disarming Strike": { class: "rogue", type: "attack", cooldown: 6, description: "On a hit with a weapon attack, force the target to make a Strength save or drop one item it is holding.", effect: { on_hit_effect: true, save_str_to_avoid_drop_item: true } },
    "Master of Disguise": { class: "rogue", type: "utility", cooldown: 0, description: "You gain proficiency with disguise kits. You can don or doff a disguise in 1 minute.", effect: { proficiency: "disguise_kit", disguise_time: "1_minute" } },
    "Garrote": { class: "rogue", type: "attack", cooldown: 8, description: "If you surprise a creature and are behind it, you can attempt to garrote it. Deals 3d6 bludgeoning damage and target is silenced and grappled on failed Str save.", effect: { condition: "surprise_and_behind", damage: "3d6 bludgeoning", status_on_fail: ["silenced", "grappled"], save: "strength" } },
    "Exploit Opening": { class: "rogue", type: "passive", cooldown: 0, description: "Once per turn, if an ally hits a creature within 5ft of you, you can use your reaction to make a melee attack against that creature with advantage.", effect: { trigger: "ally_hits_adjacent_enemy", reaction_attack_with_advantage: true } },
    "Ghost Walk": { class: "rogue", type: "movement", cooldown: "long_rest", description: "For 1 minute, you can move through other creatures and objects as if they were difficult terrain. You take 1d10 force damage if you end your turn inside an object.", effect: { duration: 10, move_through_objects_creatures: true, damage_if_end_in_object: "1d10 force" } },
    "Setup Ally": { class: "rogue", type: "utility", cooldown: 5, description: "As a bonus action, choose an enemy. The next attack roll made by an ally against that enemy has advantage.", effect: { cast_time: "bonus_action", target_enemy: true, grant_ally_advantage: true } },
    "Chain Attack": { class: "rogue", type: "attack", cooldown: 7, description: "After hitting with a melee attack, you can immediately make another melee attack against a different creature within 5 feet.", effect: { trigger: "on_melee_hit", bonus_attack_different_target_5ft: true } },
    "Misdirection": { class: "rogue", type: "utility", cooldown: "short_rest", description: "When targeted by an attack while a creature is within 5 feet of you, you can use your reaction to have the attack target that creature instead.", effect: { trigger: "targeted_by_attack_with_adjacent_creature", redirect_attack: true } },
    "Shadow Clone (Brief illusion)": { class: "rogue", type: "utility", cooldown: "short_rest", description: "As a bonus action, create an illusory duplicate of yourself that lasts for 1 minute or until it takes damage. It can take simple actions but not attack.", effect: { cast_time: "bonus_action", illusion_duplicate: true, duration: 10 } },
    "Debilitating Strike": { class: "rogue", type: "passive", cooldown: 0, description: "When you deal Sneak Attack damage, you can choose to forgo 1d6 of it to impose disadvantage on the target's next attack roll or ability check.", effect: { trigger: "on_sneak_attack", cost: "1d6_sneak_attack", effect: "disadvantage_target_next_roll" } },
    "Cheat Death (Once per day)": { class: "rogue", type: "passive", cooldown: "long_rest", description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead.", effect: { trigger: "hp_to_0", action: "set_hp_1" } },
    "Perfected Stealth": { class: "rogue", type: "passive", cooldown: 0, description: "You can attempt to hide even when you are only lightly obscured.", effect: { hide_condition_lightly_obscured: true } },
    "Death Strike": { class: "rogue", type: "passive", cooldown: 0, description: "When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + prof + Dex mod). On a failed save, double the damage of your attack against the creature.", effect: { condition: "hit_surprised_creature", save_con_to_avoid_double_damage: true } },
    "Phantom Step": { class: "rogue", type: "movement", cooldown: "short_rest", description: "As a bonus action, teleport up to 60 feet to an unoccupied space you can see. You must end in dim light or darkness.", effect: { cast_time: "bonus_action", teleport_range: 60, end_condition: "dim_light_or_darkness" } },
    "Master of Poisons": { class: "rogue", type: "passive", cooldown: 0, description: "You can apply poison to a weapon as a bonus action, and you have advantage on saving throws against poison.", effect: { apply_poison_as_bonus_action: true, advantage_vs_poison_saves: true } },
    "One with the Shadows": { class: "rogue", type: "stealth", cooldown: "short_rest", description: "When in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you move, take an action, or take a reaction.", effect: { condition: "dim_light_or_darkness", action_become_invisible_until_move_or_action: true } },
    "Lethal Precision": { class: "rogue", type: "passive", cooldown: 0, description: "Your Sneak Attack dice become d8s instead of d6s.", effect: { sneak_attack_die_upgrade: "d8" } },

    // Ranger Abilities (Original: 9, Adding 23 new, Total: 32)
    "Track": { class: "ranger", type: "utility", cooldown: 0, description: "Advantage on Wisdom (Survival) checks to follow tracks and identify creatures by their spoor.", effect: { advantage_survival_tracking: true, identify_creatures_by_spoor: true } },
    "Hunter's Mark (Ability)": { class: "ranger", type: "buff", cooldown: 0, description: "As a bonus action, mark a creature. You deal an extra 1d6 damage to it with weapon attacks, and have advantage on Perception/Survival checks to find it. Lasts 1 hour, concentration. (Non-spell version)", effect: { cast_time: "bonus_action", damage_bonus: "1d6", advantage_tracking_marked: true, duration: 60, concentration: true } },
    "Animal Companion (Basic)": { class: "ranger", type: "summon", cooldown: 0, description: "Gain a loyal beast companion (e.g., wolf, panther, bear cub) that obeys your commands and acts on its own turn. (Stats based on CR 1/4 beast)", effect: { companion_type: "beast_cr_1/4" } },
    "Multi-Shot (Arrows)": { class: "ranger", type: "attack", cooldown: 5, description: "As an action, make a ranged attack against two different targets within 10 feet of each other.", effect: { targets: "2_within_10ft_of_each_other", damage: "normal" } },
    "Empowered Companion (Minor)": { class: "ranger", type: "passive", cooldown: 0, description: "Your animal companion adds your proficiency bonus to its AC, attack rolls, and damage rolls.", effect: { companion_buff_prof_bonus_ac_atk_dmg: true } },
    "Camouflage": { class: "ranger", type: "stealth", cooldown: 8, description: "If you have mud, dirt, and leaves, you can use an action to become effectively invisible while stationary in natural surroundings.", effect: { condition: "natural_surroundings_materials", action_become_invisible_stationary: true } },
    "Beast Speech": { class: "ranger", type: "utility", cooldown: 0, description: "You can comprehend and verbally communicate with beasts. They can understand your meaning.", effect: { animal_communication: true } },
    "Volley (Area Effect)": { class: "ranger", type: "attack", cooldown: 8, description: "Choose a point. Each creature in a 10-foot radius must make a Dexterity save or take damage as if hit by one of your ranged weapon attacks.", effect: { aoe: "10ft_radius_point", save_dex_for_half_or_weapon_damage: true } },
    "Companion's Bond (Shared Senses)": { class: "ranger", type: "utility", cooldown: "short_rest", description: "For 10 minutes, you can see through your companion's eyes and hear what it hears, and vice versa.", effect: { duration: 10, shared_senses_companion: true } },
    "Storm of Arrows": { class: "ranger", type: "ultimate", cooldown: 15, description: "Fire a barrage of 5 arrows at a single target or distributed among multiple targets within 30 feet. Make separate attack rolls.", effect: { arrows: 5, range: 30, targets: "single_or_multiple", damage: "weapon_per_arrow" } },
    "Call Lightning (Nature version)": { class: "ranger", type: "spell_like", cooldown: 12, description: "Call down a lightning bolt (3d10 lightning damage) once per round for 1 minute as an action. (Non-spell slot version)", effect: { duration: 10, action_call_lightning_bolt: "3d10", limit: "once_per_round" } },
    "Swift Quiver (Ability)": { class: "ranger", type: "buff", cooldown: "long_rest", description: "For 1 minute, as a bonus action on each of your turns, you can make two attacks with a weapon that has the ammunition property.", effect: { duration: 10, bonus_action_two_ranged_attacks: true } },
    "Nature's Wrath": { class: "ranger", type: "attack", cooldown: 10, description: "Channel nature's fury. Choose one: Entangling Vines (restrain, Dex save), Stone Spikes (2d8 piercing, Dex save), or Howling Gale (push 15ft, Str save) in a 20ft radius.", effect: { aoe: "20ft radius", choose_effect: ["entangling_vines_restrain_dex", "stone_spikes_2d8_piercing_dex", "howling_gale_push_15ft_str"] } },
    "Ethereal Stride (Briefly)": { class: "ranger", type: "movement", cooldown: "short_rest", description: "As a bonus action, you can become ethereal until the end of your current turn.", effect: { cast_time: "bonus_action", ethereal_until_end_of_turn: true } },
    "Summon Nature's Ally (Advanced)": { class: "ranger", type: "summon", cooldown: "long_rest", description: "Summon a CR 2 beast or fey to fight for you for 1 hour.", effect: { summon_cr_2_beast_or_fey: true, duration: 60 } },
    "One with Nature (Temporary Tree Form)": { class: "ranger", type: "buff", cooldown: "long_rest", description: "For 1 minute, transform into a tree. Gain resistance to bludgeoning/piercing, AC 18, but speed is 0. Can still perceive.", effect: { duration: 10, transform_tree: true, resistance: ["bludgeoning", "piercing"], ac: 18, speed: 0 } },
    "Aspect of the Beast (Major)": { class: "ranger", type: "passive", cooldown: 0, description: "Choose one: Eagle (Advantage on Perception, Darkvision 120ft), Wolf (Advantage on attacks vs flanked enemies), Bear (Advantage on Str checks/saves, +1d8 melee damage).", effect: { choose_aspect: ["eagle_perception_darkvision", "wolf_flanking_advantage", "bear_str_adv_damage_bonus"] } },
    "Vanish (Improved)": { class: "ranger", type: "stealth", cooldown: "short_rest", description: "You can use the Hide action as a bonus action even if you are only lightly obscured by foliage, heavy rain, falling snow, mist, or other natural phenomena.", effect: { hide_as_bonus_action_natural_obscurement: true } },
    "Master Tracker": { class: "ranger", type: "passive", cooldown: 0, description: "You can't get lost by nonmagical means except in extreme weather. You learn exact number, sizes, and how long ago creatures passed through an area.", effect: { cannot_be_lost_nonmagical: true, advanced_tracking_info: true } },
    "Call of the Wild (Summon Pack)": { class: "ranger", type: "summon", cooldown: "long_rest", description: "Summon 2d4 wolves or 1d4 dire wolves that obey you for 1 hour.", effect: { summon_pack: ["2d4_wolves", "1d4_dire_wolves"], duration: 60 } },
    "Nature's Sanctuary": { class: "ranger", type: "passive", cooldown: 0, description: "Creatures of the natural world are hesitant to attack you. Beasts and plants must make a Wis save to target you with an attack or harmful spell.", effect: { beast_plant_hesitate_attack_wis_save: true } },
    "Guardian Spirit (Animal)": { class: "ranger", type: "summon", cooldown: "long_rest", description: "A spectral animal guardian (stats of a Dire Wolf) protects you for 1 hour. It can intercept one attack meant for you per round.", effect: { summon_spectral_guardian_dire_wolf: true, duration: 60, intercept_attack_once_per_round: true } },
    "Elemental Arrows": { class: "ranger", type: "buff", cooldown: "short_rest", description: "As a bonus action, imbue your arrows with elemental energy (fire, cold, or lightning) for 1 minute. They deal an extra 1d6 of that damage type.", effect: { cast_time: "bonus_action", duration: 10, arrow_elemental_damage_1d6: true } },
    "Spirit Walker": { class: "ranger", type: "utility", cooldown: "long_rest", description: "You can cast Commune with Nature once without material components.", effect: { cast_commune_with_nature_free: true } },
    "Eyes of the Eagle (Permanent)": { class: "ranger", type: "passive", cooldown: 0, description: "You have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects.", effect: { advantage_sight_perception: true, extreme_distance_sight: true } },
    "Master of the Wild": { class: "ranger", type: "passive", cooldown: 0, description: "You have advantage on initiative rolls. Additionally, you and your group cannot be surprised while traveling in your favored terrains.", effect: { advantage_initiative: true, no_surprise_favored_terrain_group: true } },
    "Primal Strike": { class: "ranger", type: "passive", cooldown: 0, description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the weapon's type.", effect: { once_per_turn_bonus_damage_1d8_weapon_type: true } },
    "Nature's Resilience": { class: "ranger", type: "passive", cooldown: 0, description: "You have advantage on saving throws against spells and other magical effects from plants or fey.", effect: { advantage_saves_vs_plant_fey_magic: true } },
    "Commune with Nature (Greater)": { class: "ranger", type: "utility", cooldown: "long_rest", description: "You become one with nature for 10 minutes, learning detailed information about the surrounding territory up to 5 miles (terrain, bodies of water, creatures, influence of celestials/fiends/undead, planar portals).", effect: { duration: 10, detailed_area_info_5_miles: true } },
    "Wilderness Guardian": { class: "ranger", type: "passive", cooldown: 0, description: "While in your favored terrain, you gain +2 to AC and Dexterity saving throws.", effect: { favored_terrain_bonus_ac_2_dex_saves_2: true } },
    "Aspect of the Primal Spirit": { class: "ranger", type: "buff", cooldown: "long_rest", description: "For 1 hour, embody a primal spirit. Choose: Spirit of the Hunter (Advantage on all attacks), Spirit of the Guardian (Resistance to all damage), Spirit of the Stalker (Become invisible and move at full speed).", effect: { duration: 60, choose_primal_spirit_buff: ["hunter_adv_attacks", "guardian_resist_all_damage", "stalker_invisible_full_speed"] } },
    "Avatar of the Wild": { class: "ranger", type: "buff", cooldown: "long_rest", description: "For 1 minute, you gain +4 to Dexterity and Wisdom (max 24), your movement speed increases by 20ft, and your weapon attacks score a critical hit on a roll of 19-20.", effect: { duration: 10, dex_wis_bonus_4_max_24: true, speed_increase_20ft: true, critical_range_19_20: true } },
    "Perfect Hunter": { class: "ranger", type: "passive", cooldown: 0, description: "You always know the location of any of your Favored Enemies within 1 mile of you, provided they are not hidden by magical means.", effect: { know_favored_enemy_location_1_mile_nonmagical_hiding: true } },
    "Mind Thrust": { class: "psychic", type: "attack", cooldown: 3, description: "A direct mental assault against a target.", effect: { damage: "2d8 psychic", range: "60 feet", save: "Wisdom for half" } },
    "Telekinetic Shove": { class: "psychic", type: "utility", cooldown: 2, description: "Shove a creature or object telekinetically.", effect: { range: "30 feet", action: "push", distance: "10 feet", check: "Strength save" } },
    "Ascended Mind": { class: "psychic", type: "passive", cooldown: 0, description: "Your mind operates at a higher level of consciousness.", effect: { bonus: "advantage on Intelligence saves", resistance: "psychic damage" } },
    "Total Recall": { class: "psychic", type: "utility", cooldown: "long_rest", description: "Perfectly recall any information you have seen or heard.", effect: { utility: "perfect memory recall" } },
    "Holy Strike": { class: "paladin", type: "attack", cooldown: 0, description: "Your weapon attacks deal an additional 1d8 radiant damage.", effect: { bonus_damage: "1d8 radiant", trigger: "on_weapon_hit" } },
    "Righteous Charge": { class: "paladin", type: "movement", cooldown: 4, description: "Charge towards an enemy, gaining advantage on your next attack if you move at least 10ft.", effect: { movement: "speed_bonus", condition: "move_10ft_min", bonus: "advantage_next_attack" } },
    "Enter Genius State": { class: "scholar", type: "buff", cooldown: "long_rest", description: "For 1 minute, gain expertise in all skills and advantage on all Intelligence checks and saves.", effect: { duration: 10, expertise_all_skills: true, advantage_int_checks_saves: true } },
    "Perfect Hunter": { class: "ranger", type: "passive", cooldown: 0, description: "You always know the location of any of your Favored Enemies within 1 mile of you, provided they are not hidden by magical means.", effect: { know_favored_enemy_location_1_mile_nonmagical_hiding: true } },
"Mind Thrust": { "class": "psychic", "type": "attack", "cooldown": 3, "description": "A direct mental assault against a target.", "effect": { "damage": "2d8 psychic", "range": "60 feet", "save": "Wisdom for half" } },
"Telekinetic Shove": { "class": "psychic", "type": "utility", "cooldown": 2, "description": "Shove a creature or object telekinetically.", "effect": { "range": "30 feet", "action": "push", "distance": "10 feet", "check": "Strength save" } },
"Precognitive Dodge": { "class": "psychic", "type": "defensive", "cooldown": "short_rest", "description": "As a reaction to an attack, impose disadvantage on the attack roll.", "effect": { "trigger": "on_attacked", "action": "impose_disadvantage" } },
"Mental Shield": { "class": "psychic", "type": "buff", "cooldown": 5, "description": "Gain resistance to psychic damage for 1 minute.", "effect": { "resistance": "psychic", "duration": 10 } },
"Telekinetic Lift": { "class": "psychic", "type": "utility", "cooldown": 0, "description": "Lift and move objects up to 100 lbs telekinetically.", "effect": { "utility": "telekinesis_light_objects" } },
"Mind Spike": { "class": "psychic", "type": "attack", "cooldown": 4, "description": "Deal 3d8 psychic damage and the target has disadvantage on its next Wisdom save.", "effect": { "damage": "3d8 psychic", "debuff": "disadvantage_next_wis_save" } },
"Rapid Re-summoning": { "class": "summoner", "type": "utility", "cooldown": "short_rest", "description": "If your eidolon is defeated, you can summon it again more quickly.", "effect": { "utility": "faster_eidolon_summon_after_defeat" } },
"Manifest Eidolon Twin": { "class": "summoner", "type": "ultimate", "cooldown": "long_rest", "description": "Briefly summon a second, identical eidolon for 1 minute.", "effect": { "summon": "eidolon_twin", "duration": 10 } },
"Master of Realities": { "class": "summoner", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against spells that would alter your form or banish you.", "effect": { "advantage_saves_vs_polymorph_banishment": true } },
"Rebuke Death": { "class": "necromancer", "type": "utility", "cooldown": "short_rest", "description": "As a reaction when a creature you can see drops to 0 HP, you can cause it to drop to 1 HP instead.", "effect": { "trigger": "creature_drops_to_0_hp", "action": "set_hp_to_1" } },
"Grave Grasp": { "class": "necromancer", "type": "attack", "cooldown": 2, "description": "Skeletal hands erupt from the ground, attempting to restrain a target.", "effect": { "range": "30 feet", "status": "restrained", "save": "Strength" } },
"Animate Basic Undead (1)": { "class": "necromancer", "type": "summon", "cooldown": 0, "description": "Animate a single CR 1/4 or lower skeleton or zombie.", "effect": { "summon": "basic_undead_cr_1/4", "count": 1 } },
"Bone Armor": { "class": "necromancer", "type": "buff", "cooldown": 0, "description": "Conjure shards of bone that grant +2 AC for 10 minutes.", "effect": { "ac_bonus": 2, "duration": 100 } },
"Path Feature (e.g., Dread Lord's Presence)": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Necromancy path.", "effect": { "utility": "path_specific_benefit" } },
"Animate Dead": { "class": "necromancer", "type": "spell_like", "cooldown": "varies_spell_slot", "description": "Creates undead servants. (Placeholder for spell-like ability if not direct spell)", "effect": { "summon": "undead_servants" } },
"Life Tap": { "class": "necromancer", "type": "utility", "cooldown": 3, "description": "Drain 1d4 HP from a willing creature or self to regain a resource (e.g., spell slot component).", "effect": { "utility": "hp_drain_for_resource" } },
"Deathly Pallor": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You gain an unnaturally pale complexion and resistance to non-magical disease.", "effect": { "cosmetic": "pale_complexion", "resistance": "nonmagical_disease" } },
"Empowered Minions (HP & Damage)": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "Your summoned undead have increased HP and deal more damage.", "effect": { "buff_undead_summons": "hp_and_damage" } },
"Stitch Undead": { "class": "necromancer", "type": "utility", "cooldown": "short_rest", "description": "Repair and bolster one friendly undead creature, healing it and granting temporary HP.", "effect": { "target": "friendly_undead", "heal": "2d8", "temp_hp": "1d10" } },
"Aura of Fear": { "class": "necromancer", "type": "debuff", "cooldown": "long_rest", "description": "Emit an aura that frightens nearby enemies.", "effect": { "aura_range": "10 feet", "status": "frightened", "save": "Wisdom" } },
"Harvest Life": { "class": "necromancer", "type": "attack", "cooldown": 5, "description": "Drain life force from a target, dealing necrotic damage and healing yourself.", "effect": { "damage": "3d6 necrotic", "heal_self_half_damage_dealt": true } },
"Grave Secrets": { "class": "necromancer", "type": "utility", "cooldown": 0, "description": "You can glean information from corpses or burial sites.", "effect": { "utility": "information_from_dead_or_graves" } },
"Corpulent Cadavers (Exploding Minions)": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "Your animated undead explode upon destruction, dealing area damage.", "effect": { "undead_summons_explode_on_death": true, "damage": "2d6 necrotic", "aoe": "5_feet_radius" } },
"Necrotic Ward": { "class": "necromancer", "type": "defensive", "cooldown": "short_rest", "description": "Gain temporary resistance to necrotic damage.", "effect": { "resistance": "necrotic", "duration": "1_hour" } },
"Army of the Damned (Control more undead)": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You can control a greater number of undead simultaneously.", "effect": { "buff": "increased_undead_control_limit" } },
"Seize Control": { "class": "necromancer", "type": "utility", "cooldown": "long_rest", "description": "Attempt to wrest control of an existing undead creature from another caster.", "effect": { "target": "enemy_undead", "check": "spellcasting_ability_contest" } },
"Master's Command": { "class": "necromancer", "type": "utility", "cooldown": 0, "description": "Issue commands to your undead minions more effectively.", "effect": { "buff": "improved_undead_command" } },
"Instant Thrall": { "class": "necromancer", "type": "utility", "cooldown": "long_rest", "description": "Quickly animate a recently deceased humanoid as a loyal undead servant.", "effect": { "target": "recent_corpse", "summon": "loyal_undead_servant" } },
"Necrotic Overchannel": { "class": "necromancer", "type": "buff", "cooldown": "long_rest", "description": "Your next necromancy spell deals maximum damage, but you suffer psychic backlash.", "effect": { "buff_next_necromancy_spell": "maximize_damage", "self_damage": "2d10_psychic" } },
"Undead Fortitude": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "Your undead minions have a chance to remain at 1 HP when reduced to 0 HP.", "effect": { "buff_undead_summons": "undead_fortitude_ability" } },
"Gravemaster's Resilience": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You gain advantage on saving throws against effects that would turn or destroy undead.", "effect": { "advantage_saves_vs_turn_destroy_undead": true } },
"Ghostly Form": { "class": "necromancer", "type": "utility", "cooldown": "long_rest", "description": "Become incorporeal and invisible for a short duration.", "effect": { "status": ["incorporeal", "invisible"], "duration": "1_minute" } },
"Drain Life (Area)": { "class": "necromancer", "type": "attack", "cooldown": "short_rest", "description": "Drain life from multiple targets in an area, dealing necrotic damage and healing you.", "effect": { "aoe": "15_feet_radius", "damage": "4d6_necrotic", "heal_self_total_damage_dealt_divided_by_targets": true } },
"Necrotic Resistance": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You have resistance to necrotic damage.", "effect": { "resistance": "necrotic" } },
"Undeath's Embrace": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You are treated as undead for the purpose of spells and effects that differentiate between living creatures and undead (e.g. cure wounds has no effect). You do not need to eat, sleep or breathe.", "effect": { "type_change": "undead_for_effects", "immune": ["eat_sleep_breathe"] } },
"Create Abomination": { "class": "necromancer", "type": "summon", "cooldown": "long_rest", "description": "Combine multiple corpses to create a powerful, unique undead monstrosity.", "effect": { "summon": "custom_undead_abomination" } },
"Soul Bind": { "class": "necromancer", "type": "utility", "cooldown": "long_rest", "description": "Bind a soul to prevent its passage to the afterlife, often for later use in rituals or enchanting items.", "effect": { "utility": "soul_binding" } },
"Mass Animate Dead": { "class": "necromancer", "type": "spell_like", "cooldown": "long_rest", "description": "Animate a large number of corpses or bones simultaneously.", "effect": { "summon": "large_number_of_undead" } },
"Aura of Undeath": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "Friendly undead within 30 feet of you gain bonuses to attack and damage.", "effect": { "aura_range": "30_feet", "buff_friendly_undead": "attack_and_damage_bonus" } },
"Taste of Immortality": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You age at a much slower rate and have advantage on death saving throws.", "effect": { "slowed_aging": true, "advantage_death_saves": true } },
"Paralyzing Touch": { "class": "necromancer", "type": "attack", "cooldown": 0, "description": "Your touch can paralyze a creature if it fails a Constitution save. (Often part of Lich Form)", "effect": { "status": "paralyzed", "save": "constitution", "trigger": "on_touch_attack" } },
"Minor Conjuration": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "Create a small, non-magical trinket or object that lasts for a short time.", "effect": { "utility": "create_minor_object", "duration": "1_hour" } },
"Deceiving Presence": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "You have advantage on Charisma (Deception) checks.", "effect": { "advantage_skill_checks": "deception" } },
"Reshape Illusion": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "As an action, change the nature of an existing illusion spell you cast that has a duration of 1 minute or longer.", "effect": { "utility": "modify_active_illusion" } },
"Illusory Script": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "Write a message that only designated creatures can read, or that delivers a different message to others.", "effect": { "utility": "coded_illusory_message" } },
"Path Feature (e.g., Nightmare Weaver)": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Illusion path.", "effect": { "utility": "path_specific_benefit" } },
"Lasting Image": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your illusion spells can last longer without concentration, up to 10 minutes for some.", "effect": { "buff_illusion_spells": "extended_duration_no_concentration" } },
"Illusory Sound": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "Create an illusory sound that can originate from a point of your choice within range.", "effect": { "utility": "create_illusory_sound" } },
"Potent Illusions": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Creatures have disadvantage on Intelligence (Investigation) checks to discern your illusions.", "effect": { "debuff_target": "disadvantage_investigation_vs_illusions" } },
"Distortion Field": { "class": "illusionist", "type": "defensive", "cooldown": "short_rest", "description": "Create an aura that imposes disadvantage on ranged attacks against you.", "effect": { "aura_range": "5_feet", "debuff_enemy_attacks": "disadvantage_ranged_attacks" } },
"Instantaneous Duplicate": { "class": "illusionist", "type": "defensive", "cooldown": "short_rest", "description": "As a reaction when targeted by an attack, create an illusory duplicate and redirect the attack to it.", "effect": { "trigger": "on_attacked", "action": "create_duplicate_redirect_attack" } },
"Beguiling Defense": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Creatures charmed by you have disadvantage on attack rolls against you.", "effect": { "condition": "target_is_charmed_by_you", "debuff_target": "disadvantage_attacks_vs_you" } },
"Complex Illusions": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "You can create more intricate and believable illusions, incorporating multiple sensory elements.", "effect": { "buff_illusion_spells": "increased_complexity_sensory_details" } },
"Sensory Overload": { "class": "illusionist", "type": "attack", "cooldown": "short_rest", "description": "Overwhelm a target with illusory sensations, potentially stunning or confusing them.", "effect": { "range": "60_feet", "status": ["stunned", "confused"], "save": "Wisdom" } },
"Persistent Image": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Some of your illusion spells can become permanent until dispelled.", "effect": { "buff_illusion_spells": "permanent_duration_option" } },
"Aura of Deception": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "You emanate an aura that makes it harder for others to discern truth from falsehood when you speak.", "effect": { "aura_range": "10_feet", "buff_self": "advantage_deception_checks", "debuff_others": "disadvantage_insight_checks_vs_you" } },
"Inescapable Illusion": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Creatures that attempt to disbelieve your illusions do so with disadvantage if you are within 30 feet of the illusion.", "effect": { "condition": "within_30_feet_of_illusion", "debuff_target": "disadvantage_disbelieve_check" } },
"Cognitive Dissonance": { "class": "illusionist", "type": "attack", "cooldown": "long_rest", "description": "Implant a contradictory illusion in a creature's mind, causing psychic damage and confusion.", "effect": { "range": "60_feet", "damage": "6d6_psychic", "status": "confused", "save": "Intelligence" } },
"Phantasmal Killer (Improved)": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your Phantasmal Killer spell is harder to resist and deals more damage.", "effect": { "buff_spell": "phantasmal_killer_increased_dc_damage" } },
"Field of Illusions": { "class": "illusionist", "type": "utility", "cooldown": "long_rest", "description": "Create a large area filled with minor, shifting illusions to confuse and distract.", "effect": { "aoe": "60_feet_radius", "effect": "distracting_minor_illusions" } },
"Make Illusion Real": { "class": "illusionist", "type": "utility", "cooldown": "long_rest", "description": "For a brief period, a portion of one of your illusion spells becomes physically real.", "effect": { "utility": "make_illusion_temporarily_real" } },
"Solid Shadows": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Some of your shadow-based illusions can have limited physical substance.", "effect": { "buff_illusion_spells": "shadow_illusions_limited_substance" } },
"Permanent Illusion": { "class": "illusionist", "type": "utility", "cooldown": "varies", "description": "Allows certain illusion spells to be made permanent (e.g. Major Image).", "effect": { "utility": "make_specific_illusions_permanent" } },
"Misleading Aura": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "You can alter your magical aura to appear as a different alignment or creature type to divination spells.", "effect": { "utility": "mask_magical_aura" } },
"Master of a Thousand Faces (At Will)": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "You can cast Disguise Self at will without expending a spell slot.", "effect": { "cast_spell_at_will": "Disguise Self" } },
"Unwavering Illusions": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your concentration on illusion spells cannot be broken by taking damage unless the damage exceeds half your hit point maximum in a single blow.", "effect": { "buff_concentration_illusions": "stronger_concentration_threshold" } },
"Instantaneous Reshaping": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "You can alter your active illusions as a bonus action instead of an action.", "effect": { "utility": "reshape_illusion_as_bonus_action" } },
"Layered Illusions": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "You can maintain multiple complex illusion spells simultaneously with greater ease.", "effect": { "buff": "easier_multiple_illusion_maintenance" } },
"Lord of Nightmares": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your fear-inducing spells and illusions are more potent and harder to resist.", "effect": { "buff_fear_spells_illusions": "increased_potency_dc" } },
"Mirage Master": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "You can create vast, convincing illusions of terrain or structures.", "effect": { "buff_illusion_spells": "mastery_of_large_scale_illusions" } },
"Perfected Self (Illusion)": { "class": "illusionist", "type": "utility", "cooldown": "long_rest", "description": "Create a perfect illusory double of yourself that is indistinguishable from you and can act independently for a time.", "effect": { "summon": "perfect_illusory_double" } },
"Unreadable Mind": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your thoughts cannot be read by telepathy or other magical means unless you allow it.", "effect": { "immune": "mind_reading_telepathy" } },
"Indistinguishable Reality": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your most powerful illusions are almost impossible to discern from reality, even by magical means.", "effect": { "buff_illusion_spells": "extremely_hard_to_disbelieve" } },
"World of Lies": { "class": "illusionist", "type": "ultimate", "cooldown": "long_rest", "description": "For a short time, you can reshape the perceptions of all creatures in an area, creating a shared illusory reality.", "effect": { "aoe": "1_mile_radius", "duration": "1_hour", "effect": "shared_illusory_reality" } },
"Create Flashbang": { "class": "engineer", "type": "utility", "cooldown": 3, "description": "Create a device that emits a bright flash and loud bang, potentially blinding or deafening nearby creatures.", "effect": { "aoe": "10_feet_radius", "status": ["blinded", "deafened"], "save": "Constitution" } },
"Deploy Caltrops": { "class": "engineer", "type": "trap", "cooldown": 2, "description": "Scatter a patch of caltrops that damage and slow creatures moving through them.", "effect": { "area": "5x5_feet_square", "damage": "1d4_piercing", "effect": "speed_reduced_10ft" } },
"Tool Proficiency (Tinker's Tools, Smith's Tools)": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "You are proficient with Tinker's Tools and Smith's Tools.", "effect": { "proficiency": ["tinker_tools", "smith_tools"] } },
"Create Basic Automaton": { "class": "engineer", "type": "summon", "cooldown": "long_rest", "description": "Construct a simple clockwork automaton (CR 1/4) that obeys your commands.", "effect": { "summon": "basic_automaton_cr_1/4" } },
"Infuse Weapon/Armor (+1)": { "class": "engineer", "type": "buff", "cooldown": "long_rest", "description": "Temporarily grant a +1 bonus to a non-magical weapon or suit of armor.", "effect": { "target": ["weapon", "armor"], "bonus": "+1_enhancement", "duration": "8_hours" } },
"Discipline Feature (e.g., Chemist, Mechanist)": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Engineering discipline.", "effect": { "utility": "discipline_specific_benefit" } },
"Right Tool for the Job": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "You can magically create a non-magical set of artisan's tools in your hand as an action.", "effect": { "utility": "create_artisan_tools" } },
"Upgrade Automaton": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Your automaton companion gains improvements as you level.", "effect": { "buff_companion": "automaton_level_scaling" } },
"Create Smoke Bomb": { "class": "engineer", "type": "utility", "cooldown": 3, "description": "Create a device that produces a thick cloud of smoke, heavily obscuring an area.", "effect": { "aoe": "20_feet_radius", "effect": "heavily_obscured", "duration": "1_minute" } },
"Automaton Extra Attack": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Your automaton companion can make an additional attack on its turn.", "effect": { "buff_companion": "automaton_extra_attack" } },
"Concussive Blast": { "class": "engineer", "type": "attack", "cooldown": 4, "description": "Launch a device that explodes with concussive force, dealing damage and potentially knocking targets prone.", "effect": { "aoe": "10_feet_radius", "damage": "3d6_bludgeoning", "status": "prone", "save": "Strength" } },
"Alchemical Formulas": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "(If Chemist) Learn additional alchemical recipes or enhance existing ones.", "effect": { "utility": "chemist_formula_improvement" } },
"Reinforced Automaton Chassis": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "(If Mechanist) Your automaton gains increased armor class and hit points.", "effect": { "buff_companion": "mechanist_automaton_durability" } },
"On-the-Fly Infusions": { "class": "engineer", "type": "utility", "cooldown": "short_rest", "description": "Quickly infuse a mundane item with a minor magical property for a short time.", "effect": { "utility": "temporary_minor_item_infusion" } },
"Field Modifications": { "class": "engineer", "type": "utility", "cooldown": 0, "description": "You can quickly repair or modify simple mechanical devices or structures.", "effect": { "utility": "repair_modify_mechanical_devices" } },
"Deploy Mini-Turret": { "class": "engineer", "type": "summon", "cooldown": "short_rest", "description": "Deploy a small, automated turret that fires at nearby enemies for 1 minute.", "effect": { "summon": "mini_turret", "duration": "1_minute" } },
"Upgrade Automaton (Armor)": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Your automaton's armor plating is improved, granting it higher AC.", "effect": { "buff_companion": "automaton_ac_increase" } },
"Build Golem (Lesser)": { "class": "engineer", "type": "summon", "cooldown": "long_rest", "description": "Construct a lesser golem (e.g., clay, stone, iron) that follows your commands.", "effect": { "summon": "lesser_golem" } },
"Create Grappling Hook Launcher": { "class": "engineer", "type": "utility", "cooldown": 0, "description": "Craft a device that fires a grappling hook, allowing for rapid ascent or crossing gaps.", "effect": { "utility": "grappling_hook_launcher" } },
"Cognitive Enhancer (Self)": { "class": "engineer", "type": "buff", "cooldown": "long_rest", "description": "A device that temporarily boosts your Intelligence score or grants advantage on Intelligence checks.", "effect": { "buff_self": "intelligence_boost_or_advantage", "duration": "1_hour" } },
"Automaton Protocol: Defender": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Your automaton gains abilities focused on protecting you or allies.", "effect": { "buff_companion": "automaton_defender_protocol" } },
"Personal Force Field": { "class": "engineer", "type": "defensive", "cooldown": "long_rest", "description": "Activate a device that generates a temporary shield, granting temporary HP or increased AC.", "effect": { "buff_self": "temporary_hp_or_ac_increase", "duration": "1_minute" } },
"Lightning Coil": { "class": "engineer", "type": "attack", "cooldown": "short_rest", "description": "Deploy a device that emits arcs of lightning at nearby enemies.", "effect": { "aoe": "15_feet_radius_arcs", "damage": "4d6_lightning", "duration": "1_minute" } },
"Analyze Weakness": { "class": "engineer", "type": "utility", "cooldown": 0, "description": "As an action, analyze a creature or structure to identify vulnerabilities, granting advantage on your next attack or check against it.", "effect": { "action": "analyze_target", "bonus": "advantage_next_attack_or_check" } },
"Deconstruct Device": { "class": "engineer", "type": "utility", "cooldown": 0, "description": "Quickly disassemble a mechanical device to understand its workings or salvage parts.", "effect": { "utility": "disassemble_device_for_parts_or_info" } },
"Hack Construct": { "class": "engineer", "type": "utility", "cooldown": "long_rest", "description": "Attempt to override the programming of an enemy construct, potentially turning it to your side or disabling it.", "effect": { "target": "enemy_construct", "check": "intelligence_check_vs_construct_dc" } },
"Emergency Repairs": { "class": "engineer", "type": "utility", "cooldown": "short_rest", "description": "Perform rapid repairs on your automaton or another construct, restoring hit points.", "effect": { "target": "construct", "heal": "3d8_hp" } },
"Create Juggernaut Automaton": { "class": "engineer", "type": "summon", "cooldown": "long_rest", "description": "(If Mechanist) Construct a powerful, heavily armored automaton (CR 5+).", "effect": { "summon": "juggernaut_automaton_cr_5_plus" } },
"Elixir of Life": { "class": "engineer", "type": "utility", "cooldown": "long_rest", "description": "(If Chemist) Brew a potent elixir that can heal grievous wounds or even restore life (as Revivify).", "effect": { "utility": "powerful_healing_elixir_or_revivify" } },
"Attune to Extra Item": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "You can attune to one additional magic item.", "effect": { "buff": "extra_attunement_slot" } },
"Master of Magic Items": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "You have advantage on checks related to identifying or using magic items.", "effect": { "advantage_magic_item_checks": true } },
"Perfected Design": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Your signature inventions (e.g., automaton, specific gadgets) are more potent or have additional features.", "effect": { "buff": "improved_signature_inventions" } },
"Remote Detonation": { "class": "engineer", "type": "utility", "cooldown": 0, "description": "You can detonate your explosive gadgets from a distance.", "effect": { "utility": "remote_gadget_detonation" } },
"Enter Genius State": { "class": "engineer", "type": "buff", "cooldown": "long_rest", "description": "For 1 minute, you have advantage on all Intelligence-based skill checks and saving throws, and your gadgets' DCs increase.", "effect": { "duration": "1_minute", "advantage_int_checks_saves": true, "buff_gadget_dcs": true } },
"Unlimited Gadgets (1 min)": { "class": "engineer", "type": "ultimate", "cooldown": "long_rest", "description": "For 1 minute, you can use any of your gadget abilities without expending uses or cooldowns.", "effect": { "duration": "1_minute", "buff": "no_cooldown_gadgets" } },
"Create Concoction (e.g., Healing Draught, Acid Flask)": { "class": "alchemist", "type": "utility", "cooldown": 0, "description": "Create various alchemical items using your formulas and resources.", "effect": { "utility": "craft_alchemical_items" } },
"Proficiency: Alchemist's Supplies": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You are proficient with Alchemist's Supplies.", "effect": { "proficiency": "alchemist_supplies" } },
"Choose Bombs, Mutagens, or Elixirs": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "Specialize in a specific type of alchemical creation, gaining unique benefits.", "effect": { "utility": "alchemical_specialization_choice" } },
"Precise Bombardment": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "(If Bomber) You can exclude a number of creatures equal to your Int mod from the effects of your bombs.", "effect": { "condition": "bomber_specialization", "utility": "selective_bomb_targeting" } },
"Field Feature (e.g., Grenadier, Mutagenist)": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Alchemical Field.", "effect": { "utility": "alchemical_field_benefit" } },
"Quick Crafting": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You can craft alchemical items more quickly.", "effect": { "buff": "faster_alchemy_crafting_speed" } },
"Improved Formulas": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "Your alchemical formulas become more potent or gain additional effects.", "effect": { "buff": "enhanced_alchemical_formulas" } },
"Catalytic Reaction": { "class": "alchemist", "type": "utility", "cooldown": "short_rest", "description": "Use a catalyst to instantly create one of your known concoctions without expending normal resources.", "effect": { "utility": "instant_concoction_with_catalyst" } },
"Add Intelligence modifier to damage/healing": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "Add your Intelligence modifier to the damage rolls of your bombs or the healing of your elixirs.", "effect": { "buff": "int_mod_to_alchemical_damage_healing" } },
"Heightened Effects": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "The saving throw DCs for your concoctions increase.", "effect": { "buff": "increased_concoction_dc" } },
"Directed Blast": { "class": "alchemist", "type": "utility", "cooldown": 0, "description": "(If Grenadier) Shape the explosion of your bombs (e.g., cone instead of radius).", "effect": { "condition": "grenadier_specialization", "utility": "shapeable_bomb_explosions" } },
"Feral Mutagen": { "class": "alchemist", "type": "buff", "cooldown": 0, "description": "(If Mutagenist) Your mutagen grants more pronounced physical enhancements but may have side effects.", "effect": { "condition": "mutagenist_specialization", "buff": "enhanced_mutagen_effects" } },
"Combine Concoctions": { "class": "alchemist", "type": "utility", "cooldown": "long_rest", "description": "Attempt to combine two different concoctions to create a unique, potentially unstable effect.", "effect": { "utility": "experimental_concoction_combination" } },
"Instant Reaction": { "class": "alchemist", "type": "utility", "cooldown": "short_rest", "description": "As a reaction, use one of your simpler concoctions (e.g., flashbang, smoke bomb).", "effect": { "action": "reaction_use_simple_concoction" } },
"Sticky Bomb": { "class": "alchemist", "type": "utility", "cooldown": 0, "description": "Your bombs can be made to adhere to targets or surfaces.", "effect": { "buff_bombs": "sticky_property" } },
"Cognitive Mutagen": { "class": "alchemist", "type": "buff", "cooldown": 0, "description": "A mutagen that enhances mental acuity at the cost of physical ability.", "effect": { "buff": "int_wis_cha_increase", "debuff": "str_dex_con_decrease", "duration": "1_hour" } },
"Toxicologist": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You gain proficiency with poisoner's kit and have advantage on saves against poison.", "effect": { "proficiency": "poisoner_kit", "advantage_saves_vs_poison": true } },
"Apply Poison as Bonus Action": { "class": "alchemist", "type": "utility", "cooldown": 0, "description": "You can apply poison to a weapon or ammunition as a bonus action.", "effect": { "action": "bonus_action_apply_poison" } },
"The Big One (Massive Bomb)": { "class": "alchemist", "type": "attack", "cooldown": "long_rest", "description": "(If Grenadier) Create a single, exceptionally powerful bomb with a large blast radius.", "effect": { "condition": "grenadier_specialization", "damage": "10d6_fire_10d6_force", "aoe": "30_feet_radius" } },
"Perfected Mutagen": { "class": "alchemist", "type": "buff", "cooldown": 0, "description": "(If Mutagenist) Your mutagens no longer have detrimental side effects, or their benefits are significantly increased.", "effect": { "condition": "mutagenist_specialization", "buff": "mutagen_no_side_effects_or_major_buff" } },
"Philosopher's Stone (Lesser)": { "class": "alchemist", "type": "utility", "cooldown": "long_rest", "description": "Create a lesser version of the Philosopher's Stone, allowing for minor transmutations or temporary enhancements.", "effect": { "utility": "lesser_philosophers_stone_effects" } },
"True Mutagen": { "class": "alchemist", "type": "buff", "cooldown": "long_rest", "description": "A powerful mutagen that can temporarily transform you into a monstrous form with enhanced abilities.", "effect": { "buff": "monstrous_transformation", "duration": "10_minutes" } },
"Efficient Alchemy": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You use fewer resources or less time when crafting alchemical items.", "effect": { "buff": "reduced_crafting_cost_time" } },
"Enduring Concoctions": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "The effects of your concoctions last longer.", "effect": { "buff": "extended_concoction_duration" } },
"Instant Identification": { "class": "alchemist", "type": "utility", "cooldown": 0, "description": "You can instantly identify potions, poisons, and other alchemical substances.", "effect": { "utility": "identify_alchemical_substances" } },
"Advantage on saves vs. potions/poisons": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against ingested or contact potions and poisons.", "effect": { "advantage_saves_vs_potions_poisons": true } },
"Plague Bomb": { "class": "alchemist", "type": "attack", "cooldown": "long_rest", "description": "(If Grenadier) A bomb that spreads a debilitating (non-lethal) disease in an area.", "effect": { "condition": "grenadier_specialization", "aoe": "20_feet_radius", "status": "disease_non_lethal", "save": "Constitution" } },
"Chimeric Form": { "class": "alchemist", "type": "buff", "cooldown": "long_rest", "description": "(If Mutagenist) Your mutagen allows you to adopt multiple animalistic traits simultaneously.", "effect": { "condition": "mutagenist_specialization", "buff": "multiple_animal_traits_mutagen" } },
"Complete Toxin Immunity": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You become immune to all poisons and diseases.", "effect": { "immune": ["poison", "disease"] } },
"Panacea Elixir": { "class": "alchemist", "type": "utility", "cooldown": "long_rest", "description": "Brew an elixir that can cure any disease, neutralize any poison, or remove any curse.", "effect": { "utility": "universal_cure_elixir" } },
"Perfected Formulas": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "Your mastery of alchemy is such that your concoctions rarely fail or have unintended side effects.", "effect": { "buff": "highly_reliable_concoctions" } },
"Spontaneous Alchemy": { "class": "alchemist", "type": "utility", "cooldown": "short_rest", "description": "You can attempt to create a known concoction using improvised materials, albeit with a chance of failure or unusual results.", "effect": { "utility": "improvised_concoction_crafting" } },
"Create Ultimate Elixir": { "class": "alchemist", "type": "utility", "cooldown": "very_long_rest_or_quest", "description": "The pinnacle of your alchemical career, an elixir with legendary properties (e.g., true resurrection, permanent stat boost).", "effect": { "utility": "legendary_elixir_creation" } },
"Halt Aging, Cure All Ailments": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "A benefit of the Elixir of Life, you cease aging and are immune to all diseases and poisons.", "effect": { "immune": ["aging", "disease", "poison"] } },
"Keen Mind": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You have an excellent memory and advantage on checks to recall information.", "effect": { "utility": "excellent_memory", "advantage_recall_information": true } },
"Know-It-All": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You can add your proficiency bonus to any Intelligence check for a skill you are not proficient in.", "effect": { "buff": "add_prof_to_non_prof_int_checks" } },
"Grant Advantage": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "As a bonus action, grant an ally advantage on their next attack roll, ability check, or saving throw.", "effect": { "action": "bonus_action_grant_advantage_ally" } },
"Impose Disadvantage": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "As a bonus action, impose disadvantage on an enemy's next attack roll, ability check, or saving throw.", "effect": { "action": "bonus_action_impose_disadvantage_enemy" } },
"Guide Action": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "As a reaction when an ally fails an attack roll or ability check, allow them to reroll.", "effect": { "trigger": "ally_fails_attack_or_check", "action": "reaction_grant_reroll_ally" } },
"Pursuit Feature (e.g., Strategist, Historian, Chirurgeon)": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Scholarly Pursuit.", "effect": { "utility": "scholarly_pursuit_benefit" } },
"Critical Analysis": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "Spend 1 minute observing a creature to learn its damage vulnerabilities, resistances, and immunities.", "effect": { "action": "analyze_creature_vulnerabilities" } },
"Educated Guess": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "When making an Intelligence check, if you roll a 9 or lower, you can choose to treat it as a 10.", "effect": { "buff_int_checks": "minimum_roll_10" } },
"Quick Study": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "Spend 1 hour studying to gain temporary proficiency in one skill or tool of your choice.", "effect": { "utility": "temporary_skill_tool_proficiency" } },
"Bolster Ally": { "class": "scholar", "type": "buff", "cooldown": "short_rest", "description": "Grant an ally temporary hit points equal to your Intelligence modifier + your level.", "effect": { "target": "ally", "temp_hp": "int_mod_plus_level" } },
"Redirect Foe": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "As a reaction when an enemy targets an ally with an attack, force the enemy to make a Wisdom save or target you instead.", "effect": { "trigger": "enemy_targets_ally", "action": "reaction_redirect_attack_to_self", "save": "Wisdom" } },
"Battlefield Commands": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "(If Strategist) Use your bonus action to allow an ally to move up to their speed or make one weapon attack.", "effect": { "condition": "strategist_pursuit", "action": "bonus_action_grant_ally_move_or_attack" } },
"Rediscover Lore": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "(If Historian) Spend time in a library or ancient site to uncover a piece of lost or forgotten information.", "effect": { "condition": "historian_pursuit", "utility": "uncover_lost_lore" } },
"Anatomical Precision": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "(If Chirurgeon) Your attacks against humanoids score a critical hit on a 19-20, and you have advantage on Medicine checks.", "effect": { "condition": "chirurgeon_pursuit", "buff_critical_range_humanoids": "19_20", "advantage_skill_checks": "medicine" } },
"Add Intelligence to Saves": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You can add your Intelligence modifier to one saving throw of your choice (chosen when you gain this feature).", "effect": { "buff_saving_throw": "add_int_mod_to_chosen_save" } },
"Logical Fortitude": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against being charmed or frightened.", "effect": { "advantage_saves_vs_charm_frighten": true } },
"Exploit Pattern": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "After a creature repeats an action or tactic 3 times in combat, you gain advantage on attacks and saving throws against that specific tactic from that creature.", "effect": { "trigger": "enemy_repeats_tactic_3_times", "bonus": "advantage_vs_that_tactic_from_creature" } },
"Predictive Analysis": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "As an action, choose a creature. The DM tells you its likely course of action on its next turn.", "effect": { "action": "predict_enemy_next_action" } },
"Master of Lore": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You can recall vast amounts of information on nearly any subject. Double proficiency on two Intelligence skills.", "effect": { "utility": "vast_knowledge_recall", "expertise_int_skills": 2 } },
"Unassailable Knowledge": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "Your mind cannot be magically altered or read against your will unless you allow it.", "effect": { "immune": "magical_mind_alteration_reading" } },
"Cunning Ploy": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "(If Strategist) Feint or create a diversion that grants all allies advantage on their next attack roll against a specific target.", "effect": { "condition": "strategist_pursuit", "target": "enemy", "buff_allies": "advantage_next_attack_vs_target" } },
"Uncover Truth": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "(If Historian) You have advantage on Insight checks to determine if someone is lying, and on Investigation checks to find hidden clues.", "effect": { "condition": "historian_pursuit", "advantage_skill_checks": ["insight_vs_lies", "investigation_hidden_clues"] } },
"Miraculous Remedy": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "(If Chirurgeon) Once per day, you can end one disease or one condition (blinded, deafened, paralyzed, poisoned) on a creature.", "effect": { "condition": "chirurgeon_pursuit", "utility": "cure_disease_or_condition" } },
"Advantage vs. Charm/Frighten": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against being charmed or frightened.", "effect": { "advantage_saves_vs_charm_frighten": true } },
"Fortress of the Mind": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You gain resistance to psychic damage.", "effect": { "resistance": "psychic" } },
"Socratic Method": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "Engage a creature in a series of questions. If they fail an Intelligence save, they become confused or reveal a piece of information.", "effect": { "target": "creature", "save": "Intelligence", "status_or_effect": ["confused", "reveal_information"] } },
"Dismissive Rebuke": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "When a creature makes an obviously false or illogical statement, you can use your reaction to point it out, imposing disadvantage on their next Charisma check.", "effect": { "trigger": "false_illogical_statement", "action": "reaction_rebuke", "debuff_target": "disadvantage_next_charisma_check" } },
"Formulate Strategy": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "Spend 10 minutes to formulate a detailed plan for an upcoming encounter, granting specific bonuses to your party.", "effect": { "utility": "formulate_encounter_plan_party_bonuses" } },
"Grant Party-Wide Bonus": { "class": "scholar", "type": "buff", "cooldown": 0, "description": "As part of Master Plan, grant a chosen bonus (e.g., +1 AC, +1 to attack rolls) to all allies for the encounter.", "effect": { "buff_party": "chosen_bonus_ac_or_attack", "duration": "encounter" } },
"Checkmate": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "(If Strategist) Once per long rest, declare a 'checkmate' scenario. If certain conditions are met in the next minute, a significant tactical advantage is gained (e.g., enemy leader surrenders, escape route opens). DM discretion.", "effect": { "condition": "strategist_pursuit", "utility": "strategic_scenario_resolution" } },
"Reveal Forbidden Lore": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "(If Historian) Recall a piece of extremely rare or forbidden knowledge that provides a crucial advantage or insight.", "effect": { "condition": "historian_pursuit", "utility": "reveal_critical_forbidden_lore" } },
"Restore Life": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "(If Chirurgeon) Once per long rest, you can bring a creature that has died within the last minute back to life with 1 HP (similar to Revivify).", "effect": { "condition": "chirurgeon_pursuit", "utility": "revivify_like_ability" } },
"Immunity to Intelligence Reduction": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "Your Intelligence score cannot be reduced by magical or other means.", "effect": { "immune": "intelligence_score_reduction" } },
"Mind Palace": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "You can perfectly store and recall vast amounts of information in an organized mental space.", "effect": { "utility": "perfect_information_storage_recall" } },
"Perfect Recall": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You can accurately recall any information you have seen or heard within the past year.", "effect": { "utility": "perfect_recall_past_year" } },
    "Perfect Hunter": { class: "ranger", type: "passive", cooldown: 0, description: "You always know the location of any of your Favored Enemies within 1 mile of you, provided they are not hidden by magical means.", effect: { know_favored_enemy_location_1_mile_nonmagical_hiding: true } },
"Mind Thrust": { "class": "psychic", "type": "attack", "cooldown": 3, "description": "A direct mental assault against a target.", "effect": { "damage": "2d8 psychic", "range": "60 feet", "save": "Wisdom for half" } },
"Telekinetic Shove": { "class": "psychic", "type": "utility", "cooldown": 2, "description": "Shove a creature or object telekinetically.", "effect": { "range": "30 feet", "action": "push", "distance": "10 feet", "check": "Strength save" } },
"Precognitive Dodge": { "class": "psychic", "type": "defensive", "cooldown": "short_rest", "description": "As a reaction to an attack, impose disadvantage on the attack roll.", "effect": { "trigger": "on_attacked", "action": "impose_disadvantage" } },
"Mental Shield": { "class": "psychic", "type": "buff", "cooldown": 5, "description": "Gain resistance to psychic damage for 1 minute.", "effect": { "resistance": "psychic", "duration": 10 } },
"Telekinetic Lift": { "class": "psychic", "type": "utility", "cooldown": 0, "description": "Lift and move objects up to 100 lbs telekinetically.", "effect": { "utility": "telekinesis_light_objects" } },
"Mind Spike": { "class": "psychic", "type": "attack", "cooldown": 4, "description": "Deal 3d8 psychic damage and the target has disadvantage on its next Wisdom save.", "effect": { "damage": "3d8 psychic", "debuff": "disadvantage_next_wis_save" } },
"Rapid Re-summoning": { "class": "summoner", "type": "utility", "cooldown": "short_rest", "description": "If your eidolon is defeated, you can summon it again more quickly.", "effect": { "utility": "faster_eidolon_summon_after_defeat" } },
"Manifest Eidolon Twin": { "class": "summoner", "type": "ultimate", "cooldown": "long_rest", "description": "Briefly summon a second, identical eidolon for 1 minute.", "effect": { "summon": "eidolon_twin", "duration": 10 } },
"Master of Realities": { "class": "summoner", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against spells that would alter your form or banish you.", "effect": { "advantage_saves_vs_polymorph_banishment": true } },
"Rebuke Death": { "class": "necromancer", "type": "utility", "cooldown": "short_rest", "description": "As a reaction when a creature you can see drops to 0 HP, you can cause it to drop to 1 HP instead.", "effect": { "trigger": "creature_drops_to_0_hp", "action": "set_hp_to_1" } },
"Grave Grasp": { "class": "necromancer", "type": "attack", "cooldown": 2, "description": "Skeletal hands erupt from the ground, attempting to restrain a target.", "effect": { "range": "30 feet", "status": "restrained", "save": "Strength" } },
"Animate Basic Undead (1)": { "class": "necromancer", "type": "summon", "cooldown": 0, "description": "Animate a single CR 1/4 or lower skeleton or zombie.", "effect": { "summon": "basic_undead_cr_1/4", "count": 1 } },
"Bone Armor": { "class": "necromancer", "type": "buff", "cooldown": 0, "description": "Conjure shards of bone that grant +2 AC for 10 minutes.", "effect": { "ac_bonus": 2, "duration": 100 } },
"Path Feature (e.g., Dread Lord's Presence)": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Necromancy path.", "effect": { "utility": "path_specific_benefit" } },
"Animate Dead": { "class": "necromancer", "type": "spell_like", "cooldown": "varies_spell_slot", "description": "Creates undead servants. (Placeholder for spell-like ability if not direct spell)", "effect": { "summon": "undead_servants" } },
"Life Tap": { "class": "necromancer", "type": "utility", "cooldown": 3, "description": "Drain 1d4 HP from a willing creature or self to regain a resource (e.g., spell slot component).", "effect": { "utility": "hp_drain_for_resource" } },
"Deathly Pallor": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You gain an unnaturally pale complexion and resistance to non-magical disease.", "effect": { "cosmetic": "pale_complexion", "resistance": "nonmagical_disease" } },
"Empowered Minions (HP & Damage)": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "Your summoned undead have increased HP and deal more damage.", "effect": { "buff_undead_summons": "hp_and_damage" } },
"Stitch Undead": { "class": "necromancer", "type": "utility", "cooldown": "short_rest", "description": "Repair and bolster one friendly undead creature, healing it and granting temporary HP.", "effect": { "target": "friendly_undead", "heal": "2d8", "temp_hp": "1d10" } },
"Aura of Fear": { "class": "necromancer", "type": "debuff", "cooldown": "long_rest", "description": "Emit an aura that frightens nearby enemies.", "effect": { "aura_range": "10 feet", "status": "frightened", "save": "Wisdom" } },
"Harvest Life": { "class": "necromancer", "type": "attack", "cooldown": 5, "description": "Drain life force from a target, dealing necrotic damage and healing yourself.", "effect": { "damage": "3d6 necrotic", "heal_self_half_damage_dealt": true } },
"Grave Secrets": { "class": "necromancer", "type": "utility", "cooldown": 0, "description": "You can glean information from corpses or burial sites.", "effect": { "utility": "information_from_dead_or_graves" } },
"Corpulent Cadavers (Exploding Minions)": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "Your animated undead explode upon destruction, dealing area damage.", "effect": { "undead_summons_explode_on_death": true, "damage": "2d6 necrotic", "aoe": "5_feet_radius" } },
"Necrotic Ward": { "class": "necromancer", "type": "defensive", "cooldown": "short_rest", "description": "Gain temporary resistance to necrotic damage.", "effect": { "resistance": "necrotic", "duration": "1_hour" } },
"Army of the Damned (Control more undead)": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You can control a greater number of undead simultaneously.", "effect": { "buff": "increased_undead_control_limit" } },
"Seize Control": { "class": "necromancer", "type": "utility", "cooldown": "long_rest", "description": "Attempt to wrest control of an existing undead creature from another caster.", "effect": { "target": "enemy_undead", "check": "spellcasting_ability_contest" } },
"Master's Command": { "class": "necromancer", "type": "utility", "cooldown": 0, "description": "Issue commands to your undead minions more effectively.", "effect": { "buff": "improved_undead_command" } },
"Instant Thrall": { "class": "necromancer", "type": "utility", "cooldown": "long_rest", "description": "Quickly animate a recently deceased humanoid as a loyal undead servant.", "effect": { "target": "recent_corpse", "summon": "loyal_undead_servant" } },
"Necrotic Overchannel": { "class": "necromancer", "type": "buff", "cooldown": "long_rest", "description": "Your next necromancy spell deals maximum damage, but you suffer psychic backlash.", "effect": { "buff_next_necromancy_spell": "maximize_damage", "self_damage": "2d10_psychic" } },
"Undead Fortitude": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "Your undead minions have a chance to remain at 1 HP when reduced to 0 HP.", "effect": { "buff_undead_summons": "undead_fortitude_ability" } },
"Gravemaster's Resilience": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You gain advantage on saving throws against effects that would turn or destroy undead.", "effect": { "advantage_saves_vs_turn_destroy_undead": true } },
"Ghostly Form": { "class": "necromancer", "type": "utility", "cooldown": "long_rest", "description": "Become incorporeal and invisible for a short duration.", "effect": { "status": ["incorporeal", "invisible"], "duration": "1_minute" } },
"Drain Life (Area)": { "class": "necromancer", "type": "attack", "cooldown": "short_rest", "description": "Drain life from multiple targets in an area, dealing necrotic damage and healing you.", "effect": { "aoe": "15_feet_radius", "damage": "4d6_necrotic", "heal_self_total_damage_dealt_divided_by_targets": true } },
"Necrotic Resistance": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You have resistance to necrotic damage.", "effect": { "resistance": "necrotic" } },
"Undeath's Embrace": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You are treated as undead for the purpose of spells and effects that differentiate between living creatures and undead (e.g. cure wounds has no effect). You do not need to eat, sleep or breathe.", "effect": { "type_change": "undead_for_effects", "immune": ["eat_sleep_breathe"] } },
"Create Abomination": { "class": "necromancer", "type": "summon", "cooldown": "long_rest", "description": "Combine multiple corpses to create a powerful, unique undead monstrosity.", "effect": { "summon": "custom_undead_abomination" } },
"Soul Bind": { "class": "necromancer", "type": "utility", "cooldown": "long_rest", "description": "Bind a soul to prevent its passage to the afterlife, often for later use in rituals or enchanting items.", "effect": { "utility": "soul_binding" } },
"Mass Animate Dead": { "class": "necromancer", "type": "spell_like", "cooldown": "long_rest", "description": "Animate a large number of corpses or bones simultaneously.", "effect": { "summon": "large_number_of_undead" } },
"Aura of Undeath": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "Friendly undead within 30 feet of you gain bonuses to attack and damage.", "effect": { "aura_range": "30_feet", "buff_friendly_undead": "attack_and_damage_bonus" } },
"Taste of Immortality": { "class": "necromancer", "type": "passive", "cooldown": 0, "description": "You age at a much slower rate and have advantage on death saving throws.", "effect": { "slowed_aging": true, "advantage_death_saves": true } },
"Paralyzing Touch": { "class": "necromancer", "type": "attack", "cooldown": 0, "description": "Your touch can paralyze a creature if it fails a Constitution save. (Often part of Lich Form)", "effect": { "status": "paralyzed", "save": "constitution", "trigger": "on_touch_attack" } },
"Minor Conjuration": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "Create a small, non-magical trinket or object that lasts for a short time.", "effect": { "utility": "create_minor_object", "duration": "1_hour" } },
"Deceiving Presence": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "You have advantage on Charisma (Deception) checks.", "effect": { "advantage_skill_checks": "deception" } },
"Reshape Illusion": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "As an action, change the nature of an existing illusion spell you cast that has a duration of 1 minute or longer.", "effect": { "utility": "modify_active_illusion" } },
"Illusory Script": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "Write a message that only designated creatures can read, or that delivers a different message to others.", "effect": { "utility": "coded_illusory_message" } },
"Path Feature (e.g., Nightmare Weaver)": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Illusion path.", "effect": { "utility": "path_specific_benefit" } },
"Lasting Image": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your illusion spells can last longer without concentration, up to 10 minutes for some.", "effect": { "buff_illusion_spells": "extended_duration_no_concentration" } },
"Illusory Sound": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "Create an illusory sound that can originate from a point of your choice within range.", "effect": { "utility": "create_illusory_sound" } },
"Potent Illusions": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Creatures have disadvantage on Intelligence (Investigation) checks to discern your illusions.", "effect": { "debuff_target": "disadvantage_investigation_vs_illusions" } },
"Distortion Field": { "class": "illusionist", "type": "defensive", "cooldown": "short_rest", "description": "Create an aura that imposes disadvantage on ranged attacks against you.", "effect": { "aura_range": "5_feet", "debuff_enemy_attacks": "disadvantage_ranged_attacks" } },
"Instantaneous Duplicate": { "class": "illusionist", "type": "defensive", "cooldown": "short_rest", "description": "As a reaction when targeted by an attack, create an illusory duplicate and redirect the attack to it.", "effect": { "trigger": "on_attacked", "action": "create_duplicate_redirect_attack" } },
"Beguiling Defense": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Creatures charmed by you have disadvantage on attack rolls against you.", "effect": { "condition": "target_is_charmed_by_you", "debuff_target": "disadvantage_attacks_vs_you" } },
"Complex Illusions": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "You can create more intricate and believable illusions, incorporating multiple sensory elements.", "effect": { "buff_illusion_spells": "increased_complexity_sensory_details" } },
"Sensory Overload": { "class": "illusionist", "type": "attack", "cooldown": "short_rest", "description": "Overwhelm a target with illusory sensations, potentially stunning or confusing them.", "effect": { "range": "60_feet", "status": ["stunned", "confused"], "save": "Wisdom" } },
"Persistent Image": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Some of your illusion spells can become permanent until dispelled.", "effect": { "buff_illusion_spells": "permanent_duration_option" } },
"Aura of Deception": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "You emanate an aura that makes it harder for others to discern truth from falsehood when you speak.", "effect": { "aura_range": "10_feet", "buff_self": "advantage_deception_checks", "debuff_others": "disadvantage_insight_checks_vs_you" } },
"Inescapable Illusion": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Creatures that attempt to disbelieve your illusions do so with disadvantage if you are within 30 feet of the illusion.", "effect": { "condition": "within_30_feet_of_illusion", "debuff_target": "disadvantage_disbelieve_check" } },
"Cognitive Dissonance": { "class": "illusionist", "type": "attack", "cooldown": "long_rest", "description": "Implant a contradictory illusion in a creature's mind, causing psychic damage and confusion.", "effect": { "range": "60_feet", "damage": "6d6_psychic", "status": "confused", "save": "Intelligence" } },
"Phantasmal Killer (Improved)": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your Phantasmal Killer spell is harder to resist and deals more damage.", "effect": { "buff_spell": "phantasmal_killer_increased_dc_damage" } },
"Field of Illusions": { "class": "illusionist", "type": "utility", "cooldown": "long_rest", "description": "Create a large area filled with minor, shifting illusions to confuse and distract.", "effect": { "aoe": "60_feet_radius", "effect": "distracting_minor_illusions" } },
"Make Illusion Real": { "class": "illusionist", "type": "utility", "cooldown": "long_rest", "description": "For a brief period, a portion of one of your illusion spells becomes physically real.", "effect": { "utility": "make_illusion_temporarily_real" } },
"Solid Shadows": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Some of your shadow-based illusions can have limited physical substance.", "effect": { "buff_illusion_spells": "shadow_illusions_limited_substance" } },
"Permanent Illusion": { "class": "illusionist", "type": "utility", "cooldown": "varies", "description": "Allows certain illusion spells to be made permanent (e.g. Major Image).", "effect": { "utility": "make_specific_illusions_permanent" } },
"Misleading Aura": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "You can alter your magical aura to appear as a different alignment or creature type to divination spells.", "effect": { "utility": "mask_magical_aura" } },
"Master of a Thousand Faces (At Will)": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "You can cast Disguise Self at will without expending a spell slot.", "effect": { "cast_spell_at_will": "Disguise Self" } },
"Unwavering Illusions": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your concentration on illusion spells cannot be broken by taking damage unless the damage exceeds half your hit point maximum in a single blow.", "effect": { "buff_concentration_illusions": "stronger_concentration_threshold" } },
"Instantaneous Reshaping": { "class": "illusionist", "type": "utility", "cooldown": 0, "description": "You can alter your active illusions as a bonus action instead of an action.", "effect": { "utility": "reshape_illusion_as_bonus_action" } },
"Layered Illusions": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "You can maintain multiple complex illusion spells simultaneously with greater ease.", "effect": { "buff": "easier_multiple_illusion_maintenance" } },
"Lord of Nightmares": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your fear-inducing spells and illusions are more potent and harder to resist.", "effect": { "buff_fear_spells_illusions": "increased_potency_dc" } },
"Mirage Master": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "You can create vast, convincing illusions of terrain or structures.", "effect": { "buff_illusion_spells": "mastery_of_large_scale_illusions" } },
"Perfected Self (Illusion)": { "class": "illusionist", "type": "utility", "cooldown": "long_rest", "description": "Create a perfect illusory double of yourself that is indistinguishable from you and can act independently for a time.", "effect": { "summon": "perfect_illusory_double" } },
"Unreadable Mind": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your thoughts cannot be read by telepathy or other magical means unless you allow it.", "effect": { "immune": "mind_reading_telepathy" } },
"Indistinguishable Reality": { "class": "illusionist", "type": "passive", "cooldown": 0, "description": "Your most powerful illusions are almost impossible to discern from reality, even by magical means.", "effect": { "buff_illusion_spells": "extremely_hard_to_disbelieve" } },
"World of Lies": { "class": "illusionist", "type": "ultimate", "cooldown": "long_rest", "description": "For a short time, you can reshape the perceptions of all creatures in an area, creating a shared illusory reality.", "effect": { "aoe": "1_mile_radius", "duration": "1_hour", "effect": "shared_illusory_reality" } },
"Create Flashbang": { "class": "engineer", "type": "utility", "cooldown": 3, "description": "Create a device that emits a bright flash and loud bang, potentially blinding or deafening nearby creatures.", "effect": { "aoe": "10_feet_radius", "status": ["blinded", "deafened"], "save": "Constitution" } },
"Deploy Caltrops": { "class": "engineer", "type": "trap", "cooldown": 2, "description": "Scatter a patch of caltrops that damage and slow creatures moving through them.", "effect": { "area": "5x5_feet_square", "damage": "1d4_piercing", "effect": "speed_reduced_10ft" } },
"Tool Proficiency (Tinker's Tools, Smith's Tools)": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "You are proficient with Tinker's Tools and Smith's Tools.", "effect": { "proficiency": ["tinker_tools", "smith_tools"] } },
"Create Basic Automaton": { "class": "engineer", "type": "summon", "cooldown": "long_rest", "description": "Construct a simple clockwork automaton (CR 1/4) that obeys your commands.", "effect": { "summon": "basic_automaton_cr_1/4" } },
"Infuse Weapon/Armor (+1)": { "class": "engineer", "type": "buff", "cooldown": "long_rest", "description": "Temporarily grant a +1 bonus to a non-magical weapon or suit of armor.", "effect": { "target": ["weapon", "armor"], "bonus": "+1_enhancement", "duration": "8_hours" } },
"Discipline Feature (e.g., Chemist, Mechanist)": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Engineering discipline.", "effect": { "utility": "discipline_specific_benefit" } },
"Right Tool for the Job": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "You can magically create a non-magical set of artisan's tools in your hand as an action.", "effect": { "utility": "create_artisan_tools" } },
"Upgrade Automaton": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Your automaton companion gains improvements as you level.", "effect": { "buff_companion": "automaton_level_scaling" } },
"Create Smoke Bomb": { "class": "engineer", "type": "utility", "cooldown": 3, "description": "Create a device that produces a thick cloud of smoke, heavily obscuring an area.", "effect": { "aoe": "20_feet_radius", "effect": "heavily_obscured", "duration": "1_minute" } },
"Automaton Extra Attack": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Your automaton companion can make an additional attack on its turn.", "effect": { "buff_companion": "automaton_extra_attack" } },
"Concussive Blast": { "class": "engineer", "type": "attack", "cooldown": 4, "description": "Launch a device that explodes with concussive force, dealing damage and potentially knocking targets prone.", "effect": { "aoe": "10_feet_radius", "damage": "3d6_bludgeoning", "status": "prone", "save": "Strength" } },
"Alchemical Formulas": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "(If Chemist) Learn additional alchemical recipes or enhance existing ones.", "effect": { "utility": "chemist_formula_improvement" } },
"Reinforced Automaton Chassis": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "(If Mechanist) Your automaton gains increased armor class and hit points.", "effect": { "buff_companion": "mechanist_automaton_durability" } },
"On-the-Fly Infusions": { "class": "engineer", "type": "utility", "cooldown": "short_rest", "description": "Quickly infuse a mundane item with a minor magical property for a short time.", "effect": { "utility": "temporary_minor_item_infusion" } },
"Field Modifications": { "class": "engineer", "type": "utility", "cooldown": 0, "description": "You can quickly repair or modify simple mechanical devices or structures.", "effect": { "utility": "repair_modify_mechanical_devices" } },
"Deploy Mini-Turret": { "class": "engineer", "type": "summon", "cooldown": "short_rest", "description": "Deploy a small, automated turret that fires at nearby enemies for 1 minute.", "effect": { "summon": "mini_turret", "duration": "1_minute" } },
"Upgrade Automaton (Armor)": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Your automaton's armor plating is improved, granting it higher AC.", "effect": { "buff_companion": "automaton_ac_increase" } },
"Build Golem (Lesser)": { "class": "engineer", "type": "summon", "cooldown": "long_rest", "description": "Construct a lesser golem (e.g., clay, stone, iron) that follows your commands.", "effect": { "summon": "lesser_golem" } },
"Create Grappling Hook Launcher": { "class": "engineer", "type": "utility", "cooldown": 0, "description": "Craft a device that fires a grappling hook, allowing for rapid ascent or crossing gaps.", "effect": { "utility": "grappling_hook_launcher" } },
"Cognitive Enhancer (Self)": { "class": "engineer", "type": "buff", "cooldown": "long_rest", "description": "A device that temporarily boosts your Intelligence score or grants advantage on Intelligence checks.", "effect": { "buff_self": "intelligence_boost_or_advantage", "duration": "1_hour" } },
"Automaton Protocol: Defender": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Your automaton gains abilities focused on protecting you or allies.", "effect": { "buff_companion": "automaton_defender_protocol" } },
"Personal Force Field": { "class": "engineer", "type": "defensive", "cooldown": "long_rest", "description": "Activate a device that generates a temporary shield, granting temporary HP or increased AC.", "effect": { "buff_self": "temporary_hp_or_ac_increase", "duration": "1_minute" } },
"Lightning Coil": { "class": "engineer", "type": "attack", "cooldown": "short_rest", "description": "Deploy a device that emits arcs of lightning at nearby enemies.", "effect": { "aoe": "15_feet_radius_arcs", "damage": "4d6_lightning", "duration": "1_minute" } },
"Analyze Weakness": { "class": "engineer", "type": "utility", "cooldown": 0, "description": "As an action, analyze a creature or structure to identify vulnerabilities, granting advantage on your next attack or check against it.", "effect": { "action": "analyze_target", "bonus": "advantage_next_attack_or_check" } },
"Deconstruct Device": { "class": "engineer", "type": "utility", "cooldown": 0, "description": "Quickly disassemble a mechanical device to understand its workings or salvage parts.", "effect": { "utility": "disassemble_device_for_parts_or_info" } },
"Hack Construct": { "class": "engineer", "type": "utility", "cooldown": "long_rest", "description": "Attempt to override the programming of an enemy construct, potentially turning it to your side or disabling it.", "effect": { "target": "enemy_construct", "check": "intelligence_check_vs_construct_dc" } },
"Emergency Repairs": { "class": "engineer", "type": "utility", "cooldown": "short_rest", "description": "Perform rapid repairs on your automaton or another construct, restoring hit points.", "effect": { "target": "construct", "heal": "3d8_hp" } },
"Create Juggernaut Automaton": { "class": "engineer", "type": "summon", "cooldown": "long_rest", "description": "(If Mechanist) Construct a powerful, heavily armored automaton (CR 5+).", "effect": { "summon": "juggernaut_automaton_cr_5_plus" } },
"Elixir of Life": { "class": "engineer", "type": "utility", "cooldown": "long_rest", "description": "(If Chemist) Brew a potent elixir that can heal grievous wounds or even restore life (as Revivify).", "effect": { "utility": "powerful_healing_elixir_or_revivify" } },
"Attune to Extra Item": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "You can attune to one additional magic item.", "effect": { "buff": "extra_attunement_slot" } },
"Master of Magic Items": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "You have advantage on checks related to identifying or using magic items.", "effect": { "advantage_magic_item_checks": true } },
"Perfected Design": { "class": "engineer", "type": "passive", "cooldown": 0, "description": "Your signature inventions (e.g., automaton, specific gadgets) are more potent or have additional features.", "effect": { "buff": "improved_signature_inventions" } },
"Remote Detonation": { "class": "engineer", "type": "utility", "cooldown": 0, "description": "You can detonate your explosive gadgets from a distance.", "effect": { "utility": "remote_gadget_detonation" } },
"Enter Genius State": { "class": "engineer", "type": "buff", "cooldown": "long_rest", "description": "For 1 minute, you have advantage on all Intelligence-based skill checks and saving throws, and your gadgets' DCs increase.", "effect": { "duration": "1_minute", "advantage_int_checks_saves": true, "buff_gadget_dcs": true } },
"Unlimited Gadgets (1 min)": { "class": "engineer", "type": "ultimate", "cooldown": "long_rest", "description": "For 1 minute, you can use any of your gadget abilities without expending uses or cooldowns.", "effect": { "duration": "1_minute", "buff": "no_cooldown_gadgets" } },
"Create Concoction (e.g., Healing Draught, Acid Flask)": { "class": "alchemist", "type": "utility", "cooldown": 0, "description": "Create various alchemical items using your formulas and resources.", "effect": { "utility": "craft_alchemical_items" } },
"Proficiency: Alchemist's Supplies": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You are proficient with Alchemist's Supplies.", "effect": { "proficiency": "alchemist_supplies" } },
"Choose Bombs, Mutagens, or Elixirs": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "Specialize in a specific type of alchemical creation, gaining unique benefits.", "effect": { "utility": "alchemical_specialization_choice" } },
"Precise Bombardment": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "(If Bomber) You can exclude a number of creatures equal to your Int mod from the effects of your bombs.", "effect": { "condition": "bomber_specialization", "utility": "selective_bomb_targeting" } },
"Field Feature (e.g., Grenadier, Mutagenist)": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Alchemical Field.", "effect": { "utility": "alchemical_field_benefit" } },
"Quick Crafting": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You can craft alchemical items more quickly.", "effect": { "buff": "faster_alchemy_crafting_speed" } },
"Improved Formulas": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "Your alchemical formulas become more potent or gain additional effects.", "effect": { "buff": "enhanced_alchemical_formulas" } },
"Catalytic Reaction": { "class": "alchemist", "type": "utility", "cooldown": "short_rest", "description": "Use a catalyst to instantly create one of your known concoctions without expending normal resources.", "effect": { "utility": "instant_concoction_with_catalyst" } },
"Add Intelligence modifier to damage/healing": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "Add your Intelligence modifier to the damage rolls of your bombs or the healing of your elixirs.", "effect": { "buff": "int_mod_to_alchemical_damage_healing" } },
"Heightened Effects": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "The saving throw DCs for your concoctions increase.", "effect": { "buff": "increased_concoction_dc" } },
"Directed Blast": { "class": "alchemist", "type": "utility", "cooldown": 0, "description": "(If Grenadier) Shape the explosion of your bombs (e.g., cone instead of radius).", "effect": { "condition": "grenadier_specialization", "utility": "shapeable_bomb_explosions" } },
"Feral Mutagen": { "class": "alchemist", "type": "buff", "cooldown": 0, "description": "(If Mutagenist) Your mutagen grants more pronounced physical enhancements but may have side effects.", "effect": { "condition": "mutagenist_specialization", "buff": "enhanced_mutagen_effects" } },
"Combine Concoctions": { "class": "alchemist", "type": "utility", "cooldown": "long_rest", "description": "Attempt to combine two different concoctions to create a unique, potentially unstable effect.", "effect": { "utility": "experimental_concoction_combination" } },
"Instant Reaction": { "class": "alchemist", "type": "utility", "cooldown": "short_rest", "description": "As a reaction, use one of your simpler concoctions (e.g., flashbang, smoke bomb).", "effect": { "action": "reaction_use_simple_concoction" } },
"Sticky Bomb": { "class": "alchemist", "type": "utility", "cooldown": 0, "description": "Your bombs can be made to adhere to targets or surfaces.", "effect": { "buff_bombs": "sticky_property" } },
"Cognitive Mutagen": { "class": "alchemist", "type": "buff", "cooldown": 0, "description": "A mutagen that enhances mental acuity at the cost of physical ability.", "effect": { "buff": "int_wis_cha_increase", "debuff": "str_dex_con_decrease", "duration": "1_hour" } },
"Toxicologist": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You gain proficiency with poisoner's kit and have advantage on saves against poison.", "effect": { "proficiency": "poisoner_kit", "advantage_saves_vs_poison": true } },
"Apply Poison as Bonus Action": { "class": "alchemist", "type": "utility", "cooldown": 0, "description": "You can apply poison to a weapon or ammunition as a bonus action.", "effect": { "action": "bonus_action_apply_poison" } },
"The Big One (Massive Bomb)": { "class": "alchemist", "type": "attack", "cooldown": "long_rest", "description": "(If Grenadier) Create a single, exceptionally powerful bomb with a large blast radius.", "effect": { "condition": "grenadier_specialization", "damage": "10d6_fire_10d6_force", "aoe": "30_feet_radius" } },
"Perfected Mutagen": { "class": "alchemist", "type": "buff", "cooldown": 0, "description": "(If Mutagenist) Your mutagens no longer have detrimental side effects, or their benefits are significantly increased.", "effect": { "condition": "mutagenist_specialization", "buff": "mutagen_no_side_effects_or_major_buff" } },
"Philosopher's Stone (Lesser)": { "class": "alchemist", "type": "utility", "cooldown": "long_rest", "description": "Create a lesser version of the Philosopher's Stone, allowing for minor transmutations or temporary enhancements.", "effect": { "utility": "lesser_philosophers_stone_effects" } },
"True Mutagen": { "class": "alchemist", "type": "buff", "cooldown": "long_rest", "description": "A powerful mutagen that can temporarily transform you into a monstrous form with enhanced abilities.", "effect": { "buff": "monstrous_transformation", "duration": "10_minutes" } },
"Efficient Alchemy": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You use fewer resources or less time when crafting alchemical items.", "effect": { "buff": "reduced_crafting_cost_time" } },
"Enduring Concoctions": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "The effects of your concoctions last longer.", "effect": { "buff": "extended_concoction_duration" } },
"Instant Identification": { "class": "alchemist", "type": "utility", "cooldown": 0, "description": "You can instantly identify potions, poisons, and other alchemical substances.", "effect": { "utility": "identify_alchemical_substances" } },
"Advantage on saves vs. potions/poisons": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against ingested or contact potions and poisons.", "effect": { "advantage_saves_vs_potions_poisons": true } },
"Plague Bomb": { "class": "alchemist", "type": "attack", "cooldown": "long_rest", "description": "(If Grenadier) A bomb that spreads a debilitating (non-lethal) disease in an area.", "effect": { "condition": "grenadier_specialization", "aoe": "20_feet_radius", "status": "disease_non_lethal", "save": "Constitution" } },
"Chimeric Form": { "class": "alchemist", "type": "buff", "cooldown": "long_rest", "description": "(If Mutagenist) Your mutagen allows you to adopt multiple animalistic traits simultaneously.", "effect": { "condition": "mutagenist_specialization", "buff": "multiple_animal_traits_mutagen" } },
"Complete Toxin Immunity": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "You become immune to all poisons and diseases.", "effect": { "immune": ["poison", "disease"] } },
"Panacea Elixir": { "class": "alchemist", "type": "utility", "cooldown": "long_rest", "description": "Brew an elixir that can cure any disease, neutralize any poison, or remove any curse.", "effect": { "utility": "universal_cure_elixir" } },
"Perfected Formulas": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "Your mastery of alchemy is such that your concoctions rarely fail or have unintended side effects.", "effect": { "buff": "highly_reliable_concoctions" } },
"Spontaneous Alchemy": { "class": "alchemist", "type": "utility", "cooldown": "short_rest", "description": "You can attempt to create a known concoction using improvised materials, albeit with a chance of failure or unusual results.", "effect": { "utility": "improvised_concoction_crafting" } },
"Create Ultimate Elixir": { "class": "alchemist", "type": "utility", "cooldown": "very_long_rest_or_quest", "description": "The pinnacle of your alchemical career, an elixir with legendary properties (e.g., true resurrection, permanent stat boost).", "effect": { "utility": "legendary_elixir_creation" } },
"Halt Aging, Cure All Ailments": { "class": "alchemist", "type": "passive", "cooldown": 0, "description": "A benefit of the Elixir of Life, you cease aging and are immune to all diseases and poisons.", "effect": { "immune": ["aging", "disease", "poison"] } },
"Keen Mind": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You have an excellent memory and advantage on checks to recall information.", "effect": { "utility": "excellent_memory", "advantage_recall_information": true } },
"Know-It-All": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You can add your proficiency bonus to any Intelligence check for a skill you are not proficient in.", "effect": { "buff": "add_prof_to_non_prof_int_checks" } },
"Grant Advantage": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "As a bonus action, grant an ally advantage on their next attack roll, ability check, or saving throw.", "effect": { "action": "bonus_action_grant_advantage_ally" } },
"Impose Disadvantage": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "As a bonus action, impose disadvantage on an enemy's next attack roll, ability check, or saving throw.", "effect": { "action": "bonus_action_impose_disadvantage_enemy" } },
"Guide Action": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "As a reaction when an ally fails an attack roll or ability check, allow them to reroll.", "effect": { "trigger": "ally_fails_attack_or_check", "action": "reaction_grant_reroll_ally" } },
"Pursuit Feature (e.g., Strategist, Historian, Chirurgeon)": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Scholarly Pursuit.", "effect": { "utility": "scholarly_pursuit_benefit" } },
"Critical Analysis": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "Spend 1 minute observing a creature to learn its damage vulnerabilities, resistances, and immunities.", "effect": { "action": "analyze_creature_vulnerabilities" } },
"Educated Guess": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "When making an Intelligence check, if you roll a 9 or lower, you can choose to treat it as a 10.", "effect": { "buff_int_checks": "minimum_roll_10" } },
"Quick Study": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "Spend 1 hour studying to gain temporary proficiency in one skill or tool of your choice.", "effect": { "utility": "temporary_skill_tool_proficiency" } },
"Bolster Ally": { "class": "scholar", "type": "buff", "cooldown": "short_rest", "description": "Grant an ally temporary hit points equal to your Intelligence modifier + your level.", "effect": { "target": "ally", "temp_hp": "int_mod_plus_level" } },
"Redirect Foe": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "As a reaction when an enemy targets an ally with an attack, force the enemy to make a Wisdom save or target you instead.", "effect": { "trigger": "enemy_targets_ally", "action": "reaction_redirect_attack_to_self", "save": "Wisdom" } },
"Battlefield Commands": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "(If Strategist) Use your bonus action to allow an ally to move up to their speed or make one weapon attack.", "effect": { "condition": "strategist_pursuit", "action": "bonus_action_grant_ally_move_or_attack" } },
"Rediscover Lore": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "(If Historian) Spend time in a library or ancient site to uncover a piece of lost or forgotten information.", "effect": { "condition": "historian_pursuit", "utility": "uncover_lost_lore" } },
"Anatomical Precision": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "(If Chirurgeon) Your attacks against humanoids score a critical hit on a 19-20, and you have advantage on Medicine checks.", "effect": { "condition": "chirurgeon_pursuit", "buff_critical_range_humanoids": "19_20", "advantage_skill_checks": "medicine" } },
"Add Intelligence to Saves": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You can add your Intelligence modifier to one saving throw of your choice (chosen when you gain this feature).", "effect": { "buff_saving_throw": "add_int_mod_to_chosen_save" } },
"Logical Fortitude": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against being charmed or frightened.", "effect": { "advantage_saves_vs_charm_frighten": true } },
"Exploit Pattern": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "After a creature repeats an action or tactic 3 times in combat, you gain advantage on attacks and saving throws against that specific tactic from that creature.", "effect": { "trigger": "enemy_repeats_tactic_3_times", "bonus": "advantage_vs_that_tactic_from_creature" } },
"Predictive Analysis": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "As an action, choose a creature. The DM tells you its likely course of action on its next turn.", "effect": { "action": "predict_enemy_next_action" } },
"Master of Lore": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You can recall vast amounts of information on nearly any subject. Double proficiency on two Intelligence skills.", "effect": { "utility": "vast_knowledge_recall", "expertise_int_skills": 2 } },
"Unassailable Knowledge": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "Your mind cannot be magically altered or read against your will unless you allow it.", "effect": { "immune": "magical_mind_alteration_reading" } },
"Cunning Ploy": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "(If Strategist) Feint or create a diversion that grants all allies advantage on their next attack roll against a specific target.", "effect": { "condition": "strategist_pursuit", "target": "enemy", "buff_allies": "advantage_next_attack_vs_target" } },
"Uncover Truth": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "(If Historian) You have advantage on Insight checks to determine if someone is lying, and on Investigation checks to find hidden clues.", "effect": { "condition": "historian_pursuit", "advantage_skill_checks": ["insight_vs_lies", "investigation_hidden_clues"] } },
"Miraculous Remedy": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "(If Chirurgeon) Once per day, you can end one disease or one condition (blinded, deafened, paralyzed, poisoned) on a creature.", "effect": { "condition": "chirurgeon_pursuit", "utility": "cure_disease_or_condition" } },
"Advantage vs. Charm/Frighten": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against being charmed or frightened.", "effect": { "advantage_saves_vs_charm_frighten": true } },
"Fortress of the Mind": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You gain resistance to psychic damage.", "effect": { "resistance": "psychic" } },
"Socratic Method": { "class": "scholar", "type": "utility", "cooldown": "short_rest", "description": "Engage a creature in a series of questions. If they fail an Intelligence save, they become confused or reveal a piece of information.", "effect": { "target": "creature", "save": "Intelligence", "status_or_effect": ["confused", "reveal_information"] } },
"Dismissive Rebuke": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "When a creature makes an obviously false or illogical statement, you can use your reaction to point it out, imposing disadvantage on their next Charisma check.", "effect": { "trigger": "false_illogical_statement", "action": "reaction_rebuke", "debuff_target": "disadvantage_next_charisma_check" } },
"Formulate Strategy": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "Spend 10 minutes to formulate a detailed plan for an upcoming encounter, granting specific bonuses to your party.", "effect": { "utility": "formulate_encounter_plan_party_bonuses" } },
"Grant Party-Wide Bonus": { "class": "scholar", "type": "buff", "cooldown": 0, "description": "As part of Master Plan, grant a chosen bonus (e.g., +1 AC, +1 to attack rolls) to all allies for the encounter.", "effect": { "buff_party": "chosen_bonus_ac_or_attack", "duration": "encounter" } },
"Checkmate": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "(If Strategist) Once per long rest, declare a 'checkmate' scenario. If certain conditions are met in the next minute, a significant tactical advantage is gained (e.g., enemy leader surrenders, escape route opens). DM discretion.", "effect": { "condition": "strategist_pursuit", "utility": "strategic_scenario_resolution" } },
"Reveal Forbidden Lore": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "(If Historian) Recall a piece of extremely rare or forbidden knowledge that provides a crucial advantage or insight.", "effect": { "condition": "historian_pursuit", "utility": "reveal_critical_forbidden_lore" } },
"Restore Life": { "class": "scholar", "type": "utility", "cooldown": "long_rest", "description": "(If Chirurgeon) Once per long rest, you can bring a creature that has died within the last minute back to life with 1 HP (similar to Revivify).", "effect": { "condition": "chirurgeon_pursuit", "utility": "revivify_like_ability" } },
"Immunity to Intelligence Reduction": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "Your Intelligence score cannot be reduced by magical or other means.", "effect": { "immune": "intelligence_score_reduction" } },
"Mind Palace": { "class": "scholar", "type": "utility", "cooldown": 0, "description": "You can perfectly store and recall vast amounts of information in an organized mental space.", "effect": { "utility": "perfect_information_storage_recall" } },
"Perfect Recall": { "class": "scholar", "type": "passive", "cooldown": 0, "description": "You can accurately recall any information you have seen or heard within the past year.", "effect": { "utility": "perfect_recall_past_year" } },
    "Perfect Hunter": { class: "ranger", type: "passive", cooldown: 0, description: "You always know the location of any of your Favored Enemies within 1 mile of you, provided they are not hidden by magical means.", effect: { know_favored_enemy_location_1_mile_nonmagical_hiding: true } },
"Mind Thrust": { "class": "psychic", "type": "attack", "cooldown": 3, "description": "A direct mental assault against a target.", "effect": { "damage": "2d8 psychic", "range": "60 feet", "save": "Wisdom for half" } },
"Telekinetic Shove": { "class": "psychic", "type": "utility", "cooldown": 2, "description": "Shove a creature or object telekinetically.", "effect": { "range": "30 feet", "action": "push", "distance": "10 feet", "check": "Strength save" } },
"Precognitive Dodge": { "class": "psychic", "type": "defensive", "cooldown": "short_rest", "description": "As a reaction to an attack, impose disadvantage on the attack roll.", "effect": { "trigger": "on_attacked", "action": "impose_disadvantage" } },
"Mental Shield": { "class": "psychic", "type": "buff", "cooldown": 5, "description": "Gain resistance to psychic damage for 1 minute.", "effect": { "resistance": "psychic", "duration": 10 } },
"Telekinetic Lift": { "class": "psychic", "type": "utility", "cooldown": 0, "description": "Lift and move objects up to 100 lbs telekinetically.", "effect": { "utility": "telekinesis_light_objects" } },
"Mind Spike": { "class": "psychic", "type": "attack", "cooldown": 4, "description": "Deal 3d8 psychic damage and the target has disadvantage on its next Wisdom save.", "effect": { "damage": "3d8 psychic", "debuff": "disadvantage_next_wis_save" } },
"Psychic Blast": { "class": "psychic", "type": "attack", "cooldown": "short_rest", "description": "Unleash a cone of psychic energy dealing 4d6 psychic damage.", "effect": { "aoe": "15_feet_cone", "damage": "4d6_psychic", "save": "Intelligence_half" } },
"Aura Reading": { "class": "psychic", "type": "utility", "cooldown": 0, "description": "You can attempt to read the emotional state or surface thoughts of creatures with a successful Insight check.", "effect": { "skill_check": "insight", "utility": "read_emotions_surface_thoughts" } },
"Psychic Crush": { "class": "psychic", "type": "attack", "cooldown": "long_rest", "description": "Attempt to overwhelm a creature's mind, dealing 8d6 psychic damage and stunning them on a failed Int save.", "effect": { "damage": "8d6_psychic", "status": "stunned", "save": "Intelligence" } },
"Astral Projection (Self, Short)": { "class": "psychic", "type": "utility", "cooldown": "long_rest", "description": "Briefly project your astral form a short distance for exploration.", "effect": { "utility": "short_range_astral_projection" } },
"Mind Over Body": { "class": "psychic", "type": "buff", "cooldown": "short_rest", "description": "Use your mental fortitude to overcome physical ailments, ending one condition like poisoned or diseased.", "effect": { "action": "end_condition_self", "conditions": ["poisoned", "diseased"] } },
"Telekinetic Wave": { "class": "psychic", "type": "attack", "cooldown": 5, "description": "Emit a wave of telekinetic force, pushing multiple creatures back.", "effect": { "aoe": "30_feet_cone", "action": "push_all_targets", "distance": "15_feet", "save": "Strength" } },
"Thought Shield": { "class": "psychic", "type": "passive", "cooldown": 0, "description": "You have resistance to psychic damage and advantage on saves against mind-altering effects.", "effect": { "resistance": "psychic", "advantage_saves_vs_mind_altering": true } },
"Psychic Intrusion": { "class": "psychic", "type": "utility", "cooldown": "short_rest", "description": "Subtly implant a simple suggestion into a creature's mind.", "effect": { "utility": "implant_suggestion", "save": "Wisdom" } },
"Mind Flay": { "class": "psychic", "type": "attack", "cooldown": 6, "description": "Assault a creature's mind with tendrils of psychic energy, dealing continuous damage for several rounds.", "effect": { "damage_over_time": "2d6_psychic_per_round", "duration": 3, "save_each_round_to_end": "Intelligence" } },
"Telekinetic Barrier": { "class": "psychic", "type": "defensive", "cooldown": "short_rest", "description": "Create a temporary wall of telekinetic force that provides cover.", "effect": { "utility": "create_force_barrier_cover", "duration": "1_minute" } },
"Fracture Mind": { "class": "psychic", "type": "attack", "cooldown": "long_rest", "description": "Cause a creature's mind to fragment, imposing severe penalties or temporary madness.", "effect": { "status": ["confused", "penalties_to_rolls"], "save": "Intelligence", "duration": "1_minute" } },
"Remote Viewing": { "class": "psychic", "type": "utility", "cooldown": "short_rest", "description": "Project your senses to a location you are familiar with.", "effect": { "utility": "project_senses_to_location" } },
"Psychic Constructs": { "class": "psychic", "type": "utility", "cooldown": 0, "description": "Create simple objects out of solidified psychic energy (e.g., a shield, a short blade).", "effect": { "utility": "create_psychic_energy_objects" } },
"Mental Fortress": { "class": "psychic", "type": "passive", "cooldown": 0, "description": "Your mind is exceptionally resilient, granting you a bonus to Wisdom and Intelligence saving throws.", "effect": { "bonus_saves": ["wisdom", "intelligence"], "value": 2 } },
"Psychic Singularity": { "class": "psychic", "type": "ultimate", "cooldown": "long_rest", "description": "Create a point of immense psychic pressure that draws in and crushes nearby enemies.", "effect": { "aoe_pull": "30_feet_radius_to_center", "damage_center": "10d10_force_psychic", "duration": "1_round" } },
"Ego Whip": { "class": "psychic", "type": "attack", "cooldown": 5, "description": "Lash out with psychic force, potentially stunning or imposing disadvantage on the target's attacks.", "effect": { "damage": "4d8_psychic", "status_on_fail_save": ["stunned_1_round", "disadvantage_attacks_1_round"], "save": "Wisdom" } },
"Telekinetic Flight": { "class": "psychic", "type": "movement", "cooldown": 0, "description": "You can use your psionic power to fly with a speed equal to your walking speed.", "effect": { "movement_mode": "fly", "speed": "walking_speed" } },
"Astral Projection (Group)": { "class": "psychic", "type": "utility", "cooldown": "long_rest", "description": "Project yourself and willing allies onto the Astral Plane.", "effect": { "utility": "group_astral_projection" } },
"Mind Prison": { "class": "psychic", "type": "attack", "cooldown": "long_rest", "description": "Trap a creature's consciousness within a mental prison, rendering it catatonic.", "effect": { "status": "catatonic", "save": "Intelligence", "duration": "concentration_up_to_1_hour" } },
"Psychic Avatar": { "class": "psychic", "type": "buff", "cooldown": "long_rest", "description": "Transform into a being of pure psionic energy, gaining enhanced abilities and resistances.", "effect": { "transformation": "psionic_energy_form", "duration": "1_minute", "enhancements": "various_psionic_powers" } },
"Psionic Nova": { "class": "psychic", "type": "attack", "cooldown": "long_rest", "description": "Release an explosion of psychic energy, damaging and potentially stunning all creatures in a wide radius.", "effect": { "aoe": "30_feet_radius", "damage": "12d6_psychic", "status_on_fail_save": "stunned_1_round", "save": "Intelligence" } },
"Mind Palace": { "class": "psychic", "type": "passive", "cooldown": 0, "description": "You have a perfectly organized mental space for storing and retrieving information with flawless accuracy.", "effect": { "utility": "perfect_memory_organization_retrieval" } },
"Telekinetic Warp": { "class": "psychic", "type": "utility", "cooldown": "short_rest", "description": "Instantly teleport yourself or another willing creature a short distance.", "effect": { "utility": "short_range_teleport_self_or_other", "range": "60_feet" } },
"Cognitive Overload": { "class": "psychic", "type": "attack", "cooldown": "short_rest", "description": "Flood a creature's mind with information, imposing disadvantage on all checks and saves for a short time.", "effect": { "debuff": "disadvantage_all_checks_saves", "duration": "1_minute", "save": "Intelligence_negates" } },
"Ascended Mind": { "class": "psychic", "type": "passive", "cooldown": 0, "description": "Your mind operates at a higher level of consciousness, granting bonuses to mental skills.", "effect": { "bonus": "advantage on Intelligence saves", "resistance": "psychic damage" } },
"Total Recall": { "class": "psychic", "type": "utility", "cooldown": "long_rest", "description": "Perfectly recall any information you have seen or heard.", "effect": { "utility": "perfect memory recall" } },
"Holy Strike": { "class": "paladin", "type": "attack", "cooldown": 0, "description": "Your weapon attacks deal an additional 1d8 radiant damage once per turn.", "effect": { "bonus_damage": "1d8 radiant", "trigger": "on_weapon_hit", "frequency": "once_per_turn" } },
"Righteous Charge": { "class": "paladin", "type": "movement", "cooldown": 4, "description": "Charge towards an enemy, gaining advantage on your next attack if you move at least 10ft.", "effect": { "movement": "speed_bonus", "condition": "move_10ft_min", "bonus": "advantage_next_attack" } },
"Protective Ward": { "class": "paladin", "type": "defensive", "cooldown": "short_rest", "description": "As a reaction, grant an ally within 10 feet +2 AC against one attack.", "effect": { "trigger": "ally_attacked", "range": "10_feet", "bonus_ac_target_ally": 2 } },
"Vow of Enmity": { "class": "paladin", "type": "buff", "cooldown": "short_rest", "description": "As a bonus action, choose one creature. Gain advantage on attack rolls against it for 1 minute.", "effect": { "target_enemy": true, "bonus": "advantage_on_attacks_vs_target", "duration": "1_minute" } },
"Channel Divinity (1/rest)": { "class": "paladin", "type": "utility", "cooldown": "short_rest", "description": "You gain one use of your Channel Divinity options.", "effect": { "resource_gain": "channel_divinity_use", "count": 1 } },
"Turn the Unholy": { "class": "paladin", "type": "utility", "cooldown": 0, "description": "(Channel Divinity Option) Turn undead and fiends.", "effect": { "action": "turn_undead_fiends", "part_of": "Channel Divinity" } },
"Aura of Devotion (Minor)": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "You and friendly creatures within 5 feet cannot be charmed.", "effect": { "aura_range": "5_feet", "immune_friendly_creatures": "charmed" } },
"Consecrated Ground": { "class": "paladin", "type": "utility", "cooldown": "long_rest", "description": "Designate an area as consecrated, hindering undead and fiends.", "effect": { "aoe": "30_feet_radius", "effect_on_undead_fiends": "disadvantage_or_damage", "duration": "1_hour" } },
"Blinding Smite": { "class": "paladin", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Your next weapon hit deals extra radiant damage and may blind the target.", "effect": { "trigger": "next_weapon_hit", "bonus_damage": "3d8_radiant", "status_on_fail_save": "blinded", "save": "Constitution" } },
"Crusader's Mantle": { "class": "paladin", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Allies in an aura deal extra radiant damage with weapon attacks.", "effect": { "aura_range": "30_feet", "buff_allies_weapon_attacks": "1d4_radiant_damage" } },
"Divine Steed (Summon)": { "class": "paladin", "type": "summon", "cooldown": "long_rest", "description": "Summon a celestial steed to serve as your mount.", "effect": { "summon": "celestial_steed" } },
"Retributive Strike": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "When an enemy damages an ally within your aura, you can use your reaction to attack that enemy.", "effect": { "trigger": "enemy_damages_ally_in_aura", "action": "reaction_attack_enemy" } },
"Sacred Weapon": { "class": "paladin", "type": "buff", "cooldown": 0, "description": "(Channel Divinity Option) Imbue your weapon with divine energy, adding Charisma modifier to attack rolls.", "effect": { "part_of": "Channel Divinity", "buff_weapon": "add_cha_to_attack_rolls", "duration": "1_minute" } },
"Holy Rebuke": { "class": "paladin", "type": "defensive", "cooldown": "short_rest", "description": "When hit by a creature within 5 feet, use reaction to deal radiant damage to attacker.", "effect": { "trigger": "hit_by_adjacent_creature", "action": "reaction_deal_radiant_damage", "damage": "2d8_radiant" } },
"Divine Judgment": { "class": "paladin", "type": "attack", "cooldown": "long_rest", "description": "Call down divine judgment, dealing massive radiant damage to a single target.", "effect": { "target_enemy": true, "damage": "10d6_radiant", "save_for_half": "Wisdom" } },
"Guardian's Shield": { "class": "paladin", "type": "defensive", "cooldown": "short_rest", "description": "As a bonus action, grant yourself or an ally temporary HP.", "effect": { "target_self_or_ally": true, "temp_hp": "level_plus_cha_mod" } },
"Wave of Righteousness": { "class": "paladin", "type": "attack", "cooldown": "long_rest", "description": "Unleash a wave of divine energy, damaging enemies and healing allies in an area.", "effect": { "aoe": "30_feet_cone", "damage_enemies": "4d6_radiant", "heal_allies": "4d6_hp" } },
"Lingering Light": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "When you use Divine Smite, the target sheds dim light for 1 minute.", "effect": { "trigger": "on_divine_smite", "effect_on_target": "sheds_dim_light_5ft_1_min" } },
"Exorcism": { "class": "paladin", "type": "utility", "cooldown": "long_rest", "description": "Attempt to banish a fiend, fey, or celestial back to its home plane.", "effect": { "target_creature_type": ["fiend", "fey", "celestial"], "action": "banish_attempt", "save": "Charisma" } },
"Unyielding Spirit": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against being paralyzed or stunned.", "effect": { "advantage_saves_vs_paralyzed_stunned": true } },
"Holy Weapon": { "class": "paladin", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Imbue a weapon with holy power, causing it to deal extra radiant damage and emit bright light.", "effect": { "target_weapon": true, "bonus_damage": "2d8_radiant", "effect": "emits_bright_light_30ft", "duration": "1_hour" } },
"Judgment of the Heavens": { "class": "paladin", "type": "attack", "cooldown": "long_rest", "description": "Call down a pillar of holy fire on a target, dealing radiant damage and potentially blinding them.", "effect": { "target_enemy": true, "aoe_pillar": "5_feet_radius_40_feet_high", "damage": "6d10_radiant", "status_on_fail_save": "blinded", "save": "Dexterity" } },
"Divine Intervention (Lesser)": { "class": "paladin", "type": "utility", "cooldown": "long_rest", "description": "A lesser chance to call upon your deity for aid.", "effect": { "utility": "lesser_divine_intervention_chance" } },
"Aura of Warding": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "You and friendly creatures within 10 feet have resistance to damage from spells.", "effect": { "aura_range": "10_feet", "resistance_friendly_creatures": "damage_from_spells" } },
"Find Greater Steed": { "class": "paladin", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Summon a more powerful celestial steed (e.g., griffon, pegasus).", "effect": { "summon": "greater_celestial_steed" } },
"Final Stand": { "class": "paladin", "type": "buff", "cooldown": "long_rest", "description": "When you drop to 0 HP, you can choose to remain at 1 HP and gain significant bonuses for 1 minute before falling unconscious.", "effect": { "trigger": "hp_to_0", "action": "remain_at_1_hp_gain_bonuses", "duration_bonuses": "1_minute" } },
"Aura of Justice": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "Enemies within your aura have disadvantage on saves against your Channel Divinity options.", "effect": { "aura_range": "10_feet", "debuff_enemies_in_aura": "disadvantage_saves_vs_your_channel_divinity" } },
"Vessel of Divine Light": { "class": "paladin", "type": "buff", "cooldown": "long_rest", "description": "Become a beacon of divine light, healing allies and harming fiends/undead around you.", "effect": { "transformation": "beacon_of_light", "duration": "1_minute", "heal_allies_in_aura": "2d6_per_round", "damage_fiends_undead_in_aura": "2d6_radiant_per_round" } },
"Avenging Angel": { "class": "paladin", "type": "buff", "cooldown": "long_rest", "description": "(Oath Feature) Transform, gaining flight and other powerful boons.", "effect": { "transformation": "avenging_angel_form", "duration": "1_hour", "abilities": ["flight", "enhanced_smites"] } },
"Aura of Sanctity": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "You and allies in your aura are protected from curses and diseases.", "effect": { "aura_range": "30_feet", "immune_friendly_creatures": ["curses", "diseases"] } },
"Bulwark of Faith": { "class": "paladin", "type": "defensive", "cooldown": "short_rest", "description": "As an action, grant yourself and nearby allies significant temporary hit points.", "effect": { "aoe_buff_allies": "30_feet_radius", "temp_hp": "2_times_paladin_level" } },
"Wrath of God": { "class": "paladin", "type": "attack", "cooldown": "long_rest", "description": "A devastating divine attack affecting a large area, dealing immense radiant damage.", "effect": { "aoe": "60_feet_radius", "damage": "15d6_radiant", "save_for_half": "Dexterity" } },
"Avatar of Divine Wrath": { "class": "paladin", "type": "ultimate", "cooldown": "long_rest", "description": "Embody the full power of your deity, becoming nearly unstoppable for a short time.", "effect": { "transformation": "divine_avatar_form", "duration": "1_minute", "bonuses": "massive_stat_increases_immunities_powerful_attacks" } },
"Ultimate Sacrifice": { "class": "paladin", "type": "utility", "cooldown": "once_ever", "description": "Sacrifice your life to achieve a monumental divine act (e.g., mass resurrection, destroying a major evil).", "effect": { "utility": "self_sacrifice_for_major_divine_act" } },
"Cutting Words": { "class": "bard", "type": "debuff", "cooldown": 0, "description": "(Bardic Inspiration use) Use reaction to expend one use of Bardic Inspiration, roll the die, and subtract the number from creature's attack roll, ability check, or damage roll.", "effect": { "trigger": "creature_makes_roll", "action": "reaction_expend_inspiration_subtract_from_roll" } },
"Inspire Courage": { "class": "bard", "type": "buff", "cooldown": 0, "description": "(Bardic Inspiration use) Grant Bardic Inspiration die to an ally to add to an attack roll, ability check, or saving throw.", "effect": { "target_ally": true, "action": "grant_inspiration_die" } },
"Rallying Performance": { "class": "bard", "type": "buff", "cooldown": "short_rest", "description": "Grant temporary HP to allies who can hear your performance.", "effect": { "aoe_allies_can_hear": true, "temp_hp": "bardic_inspiration_die_plus_cha_mod" } },
"Distracting Tune": { "class": "bard", "type": "debuff", "cooldown": "short_rest", "description": "Impose disadvantage on an enemy's concentration save or Wisdom (Perception) check.", "effect": { "target_enemy": true, "debuff": ["disadvantage_concentration_save", "disadvantage_perception_check"] } },
"Soothing Melody": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "Calm hostile creatures or end fear effects on allies.", "effect": { "action": ["calm_hostiles_non_combat", "end_fear_effects_allies"] } },
"Discordant Note": { "class": "bard", "type": "attack", "cooldown": 4, "description": "Deal psychic damage and potentially disrupt a spellcaster's concentration.", "effect": { "damage": "2d6_psychic", "target_spellcaster_check_concentration": true, "save": "Wisdom" } },
"Harmonize": { "class": "bard", "type": "buff", "cooldown": 0, "description": "When an ally uses your Bardic Inspiration, you gain a lesser benefit (e.g., temp HP).", "effect": { "trigger": "ally_uses_inspiration", "buff_self": "temp_hp_equal_inspiration_die_rolled_half" } },
"Echoing Refrain": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "The next spell you cast with a verbal component has its effects linger or repeat once.", "effect": { "buff_next_verbal_spell": "lingering_or_repeated_effect" } },
"Counter-aria": { "class": "bard", "type": "defensive", "cooldown": "short_rest", "description": "Use your performance to attempt to counter a spell being cast (similar to Counterspell, but uses Bardic Inspiration).", "effect": { "action": "attempt_spell_counter_with_inspiration_die" } },
"Crescendo": { "class": "bard", "type": "buff", "cooldown": "long_rest", "description": "Build up musical energy to unleash a powerful effect, such as a burst of healing or damaging sound.", "effect": { "action_build_up_energy": true, "release_effect_choice": ["aoe_heal_4d8", "aoe_damage_4d8_thunder"] } },
"Song of Freedom": { "class": "bard", "type": "utility", "cooldown": "long_rest", "description": "Perform a song that can break enchantments or free creatures from magical restraints.", "effect": { "action": "break_enchantments_magical_restraints" } },
"Enthralling Oration": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "Captivate a crowd with your speech, making them more receptive to your ideas.", "effect": { "target_crowd": true, "effect": "increased_receptiveness_persuasion_advantage" } },
"Symphony of Heroes": { "class": "bard", "type": "buff", "cooldown": "long_rest", "description": "Inspire allies with a grand symphony, granting them significant combat bonuses for a short duration.", "effect": { "aoe_allies_can_hear": true, "buff": "advantage_attacks_saves_temp_hp", "duration": "1_minute" } },
"Dissonant Whisper (Improved)": { "class": "bard", "type": "passive", "cooldown": 0, "description": "Your Dissonant Whispers spell deals more damage or has a higher save DC.", "effect": { "buff_spell": "dissonant_whispers_improved" } },
"Perfect Pitch": { "class": "bard", "type": "passive", "cooldown": 0, "description": "You have advantage on Performance checks involving music and can perfectly replicate any tune.", "effect": { "advantage_performance_music": true, "utility": "perfect_tune_replication" } },
"Chords of Power": { "class": "bard", "type": "utility", "cooldown": 0, "description": "Certain musical chords you play can have minor magical effects (e.g., mending, light).", "effect": { "utility": "minor_magic_effects_via_music" } },
"Masterpiece": { "class": "bard", "type": "utility", "cooldown": "long_rest", "description": "Create a temporary work of art (song, poem, etc.) that has a powerful magical effect based on its theme.", "effect": { "action": "create_magical_masterpiece" } },
"Fascinate (Improved)": { "class": "bard", "type": "passive", "cooldown": 0, "description": "Your ability to fascinate creatures with your performance is enhanced (more targets or longer duration).", "effect": { "buff_ability": "fascinate_improved" } },
"Universal Language": { "class": "bard", "type": "passive", "cooldown": 0, "description": "Through music and performance, you can convey simple ideas to any creature that can hear you, regardless of language.", "effect": { "utility": "communicate_simple_ideas_any_creature_via_performance" } },
"Song of Lore": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "Perform a song that reveals historical or crucial information about a person, place, or object.", "effect": { "utility": "reveal_lore_through_song" } },
"Virtuoso Performance": { "class": "bard", "type": "buff", "cooldown": "long_rest", "description": "Give a performance so captivating it grants allies within earshot inspiration dice that are d12s for 1 hour.", "effect": { "aoe_allies_can_hear": true, "buff_inspiration_dice_to_d12": true, "duration": "1_hour" } },
"Aria of Ruin": { "class": "bard", "type": "attack", "cooldown": "long_rest", "description": "A devastating song that deals massive sonic damage to enemies and potentially shatters objects.", "effect": { "aoe_enemies_can_hear": true, "damage": "10d8_thunder", "effect_objects": "shatter_nonmagical" } },
"Enduring Anthem": { "class": "bard", "type": "passive", "cooldown": 0, "description": "The effects of your Bardic Inspiration last twice as long if the creature chooses to hold onto it.", "effect": { "buff_inspiration_duration_if_held": true } },
"Mind-Altering Melody": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "Play a tune that can subtly influence emotions or plant suggestions in listeners.", "effect": { "target_listeners": true, "effect": ["influence_emotions", "plant_suggestion_subtle"], "save": "Wisdom" } },
"Epic Tale": { "class": "bard", "type": "buff", "cooldown": "long_rest", "description": "Recount an epic tale that grants allies significant, long-lasting morale bonuses and resistances.", "effect": { "aoe_allies_can_hear": true, "buff": "morale_bonuses_resistances", "duration": "several_hours" } },
"Resonant Frequency": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "Find a resonant frequency in an object or structure to potentially damage or destroy it with sound.", "effect": { "target_object_structure": true, "action": "damage_or_destroy_with_sound" } },
"Unforgettable Performance": { "class": "bard", "type": "passive", "cooldown": 0, "description": "Those who witness your greatest performances remember them vividly and are more likely to aid you.", "effect": { "utility": "memorable_performance_social_bonus" } },
"Shattering Crescendo": { "class": "bard", "type": "attack", "cooldown": "short_rest", "description": "A focused burst of sound that can deafen and damage a target.", "effect": { "target_enemy": true, "damage": "6d6_thunder", "status_on_fail_save": "deafened", "save": "Constitution" } },
"Hymn of the Ancients": { "class": "bard", "type": "utility", "cooldown": "long_rest", "description": "Sing a hymn that connects you to ancient spirits or knowledge, granting temporary insights or powers.", "effect": { "utility": "commune_with_ancient_spirits_knowledge" } },
"Aura of Inspiration": { "class": "bard", "type": "passive", "cooldown": 0, "description": "Allies starting their turn within 10 feet of you gain a d4 inspiration die (once per ally per short rest).", "effect": { "aura_range": "10_feet", "buff_allies_start_turn": "d4_inspiration_die_once_per_short_rest" } },
"Harmonic Convergence": { "class": "bard", "type": "utility", "cooldown": "long_rest", "description": "Coordinate with other spellcasters to amplify a single spell's power or effect.", "effect": { "utility": "amplify_spell_with_other_casters" } },
"Word of Creation": { "class": "bard", "type": "ultimate", "cooldown": "long_rest", "description": "Speak a word of primordial power, causing reality to briefly warp to your will (major illusion, creation of objects, or other powerful effect).", "effect": { "utility": "major_reality_warping_effect_dm_discretion" } },
"Perfect Harmony": { "class": "bard", "type": "passive", "cooldown": 0, "description": "You are always in perfect harmony with your surroundings and magic; advantage on saves against being magically silenced or deafened, and your spells are harder to dispel.", "effect": { "advantage_saves_vs_silence_deafen_magic": true, "buff_spells_harder_to_dispel": true } },
"Turn Undead (Minor)": { "class": "cleric", "type": "utility", "cooldown": 0, "description": "As an action, present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.", "effect": { "action": "turn_undead", "range": "30_feet", "duration": "1_minute_or_damage", "save": "Wisdom" } },
"Divine Bolt": { "class": "cleric", "type": "attack", "cooldown": 0, "description": "Make a ranged spell attack, dealing 1d10 radiant or necrotic damage (choose when obtained).", "effect": { "damage": "1d10_radiant_or_necrotic", "range": "60_feet", "type": "spell_attack" } },
"Preserve Life": { "class": "cleric", "type": "utility", "cooldown": 0, "description": "(Channel Divinity Option) Restore hit points equal to five times your cleric level, distributed among creatures of your choice within 30 feet. Cannot heal creatures above half HP or undead/constructs.", "effect": { "part_of": "Channel Divinity", "heal_amount": "5_times_cleric_level", "range": "30_feet", "restriction": "no_heal_above_half_hp_no_undead_constructs" } },
"Radiant Aura": { "class": "cleric", "type": "buff", "cooldown": "short_rest", "description": "Emit an aura of divine light for 1 minute, granting allies advantage on saves vs fear and dealing minor radiant damage to fiends/undead.", "effect": { "aura_range": "10_feet", "duration": "1_minute", "buff_allies_advantage_vs_fear": true, "damage_fiends_undead": "1d4_radiant_per_round" } },
"Prayer of Healing": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Heal multiple allies in an area after a short prayer.", "effect": { "aoe_heal_allies": "30_feet_radius", "heal_amount": "2d8_plus_spellcasting_mod", "casting_time_override": "10_minutes" } },
"Sanctuary": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Ward a creature so that any creature who tries to attack or target it with a harmful spell must first make a Wisdom saving throw.", "effect": { "target_creature": true, "protection_effect": "attacker_must_make_wis_save_or_choose_new_target_or_lose_attack_spell" } },
"Consecrate": { "class": "cleric", "type": "utility", "cooldown": "long_rest", "description": "Make an area (e.g., 30-foot square) holy ground, providing benefits to allies or penalties to unholy creatures.", "effect": { "aoe_designate_holy_ground": "30_feet_square", "duration": "1_hour", "effects_vary": "ally_buffs_or_unholy_debuffs" } },
"Divine Smite (Cleric version)": { "class": "cleric", "type": "buff", "cooldown": "spell_slot_cost", "description": "When you hit with a melee weapon attack, you can expend a spell slot to deal extra radiant damage.", "effect": { "trigger": "on_melee_weapon_hit", "bonus_damage_per_spell_level": "1d8_radiant_per_slot_level_plus_1d8_extra_vs_undead_fiend" } },
"Mass Healing Word": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Heal up to six creatures you can see as a bonus action.", "effect": { "target_multiple_allies": 6, "heal_amount": "1d4_plus_spellcasting_mod", "casting_time_override": "bonus_action" } },
"Spirit Shroud": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Your attacks deal extra radiant/necrotic damage, and creatures within 10 feet of you have their speed reduced.", "effect": { "buff_self_attacks_extra_damage": "1d8_radiant_or_necrotic", "aura_debuff_enemy_speed": "10_feet_reduction", "range_aura": "10_feet" } },
"Blessed Healer": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.", "effect": { "trigger": "cast_healing_spell_on_other", "self_heal_amount": "2_plus_spell_level" } },
"Spiritual Guardians (Improved)": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "Your Spirit Guardians spell deals more damage or has a larger radius.", "effect": { "buff_spell": "spirit_guardians_improved_damage_or_radius" } },
"Divine Word": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Speak a divine word, causing various effects on creatures based on their current hit points (banish, deafen, blind, stun).", "effect": { "aoe_effect_based_on_hp": "30_feet_radius", "effects": ["banish_extraplanar_hp_threshold", "deafen_blind_stun_hp_threshold"] } },
"Holy Ground": { "class": "cleric", "type": "utility", "cooldown": "short_rest", "description": "Imbue an area with divine power, making it difficult terrain for enemies and granting allies minor healing when they start their turn there.", "effect": { "aoe_sanctify_area": "20_feet_radius", "effect_enemies_difficult_terrain": true, "effect_allies_minor_heal_start_turn": "1d4_hp", "duration": "1_minute" } },
"Aura of Life": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "Creatures of your choice within 30 feet regain 1 hit point at the start of their turn if at 0 HP, and have resistance to necrotic damage.", "effect": { "aura_range": "30_feet", "buff_allies_regain_1hp_at_0": true, "buff_allies_resistance_necrotic": true } },
"Sacred Ground": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "You and allies within 10 feet have advantage on saving throws against being frightened or charmed while you are conscious.", "effect": { "aura_range": "10_feet", "buff_allies_advantage_vs_frightened_charmed": true } },
"Circle of Healing": { "class": "cleric", "type": "utility", "cooldown": "long_rest", "description": "Perform a 10-minute ritual to heal a group of allies significantly.", "effect": { "ritual_heal_group": true, "heal_amount": "4d8_plus_cleric_level", "max_targets": 6 } },
"Guardian Spirit": { "class": "cleric", "type": "summon", "cooldown": "long_rest", "description": "Summon a spectral guardian that protects an ally, potentially taking damage for them.", "effect": { "summon_spectral_guardian": true, "target_ally_to_protect": true, "action_guardian_take_damage_for_ally": true } },
"Supreme Healing": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost_high_level", "description": "Maximize the amount of healing from one of your healing spells.", "effect": { "buff_next_healing_spell": "maximize_healing_dice" } },
"Pillar of Light": { "class": "cleric", "type": "attack", "cooldown": "short_rest", "description": "Call down a pillar of divine light that damages and blinds enemies in an area.", "effect": { "aoe_pillar": "10_feet_radius_40_feet_high", "damage": "5d10_radiant", "status_on_fail_save": "blinded", "save": "Dexterity" } },
"Divine Beacon": { "class": "cleric", "type": "utility", "cooldown": "long_rest", "description": "Act as a beacon for your deity, allowing them to manifest a minor boon or message through you.", "effect": { "utility": "channel_deity_minor_boon_message" } },
"Aura of Purity": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "You and allies within 10 feet are immune to disease and have resistance to poison damage.", "effect": { "aura_range": "10_feet", "immune_allies_disease": true, "resistance_allies_poison_damage": true } },
"Divine Judgment": { "class": "cleric", "type": "attack", "cooldown": "long_rest", "description": "Smite a foe with divine power, dealing massive damage and imposing a lingering penalty.", "effect": { "target_enemy": true, "damage": "8d10_radiant", "debuff_on_hit": "disadvantage_attacks_saves_1_minute", "save_for_half_no_debuff": "Wisdom" } },
"Resurrection": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost_very_high_level", "description": "Bring a dead creature back to life, provided its soul is willing and free.", "effect": { "utility": "resurrect_dead_creature" } },
"Cleansing Light": { "class": "cleric", "type": "utility", "cooldown": "short_rest", "description": "Emit a burst of light that ends one negative magical effect (curse, charm, etc.) on multiple allies.", "effect": { "aoe_cleanse_allies": "30_feet_radius", "effect": "end_one_negative_magical_effect_each" } },
"Unyielding Faith": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "If you drop to 0 HP but are not killed outright, you can use your reaction to immediately regain HP equal to your Cleric level + Wisdom modifier.", "effect": { "trigger": "hp_to_0_not_killed", "action": "reaction_heal_self", "heal_amount": "cleric_level_plus_wis_mod" } },
"Sanctified Zone": { "class": "cleric", "type": "utility", "cooldown": "long_rest", "description": "Create a large zone where celestials are empowered and fiends/undead are weakened and cannot enter.", "effect": { "aoe_create_zone": "60_feet_radius", "duration": "1_hour", "buff_celestials_in_zone": true, "debuff_fiends_undead_in_zone_and_entry_denial": true } },
"Miracle (Lesser)": { "class": "cleric", "type": "utility", "cooldown": "long_rest_or_divine_intervention_success", "description": "Perform a minor miracle, replicating a lower-level Cleric spell or achieving a similar small divine feat.", "effect": { "utility": "perform_minor_miracle_replicate_low_level_cleric_spell" } },
"Vessel of the Divine": { "class": "cleric", "type": "buff", "cooldown": "long_rest", "description": "Temporarily become a direct conduit for your deity, gaining immense power and resilience.", "effect": { "transformation_divine_conduit": true, "duration": "1_minute", "bonuses": "significant_stat_spell_power_increases_resistances" } },
"Divine Retribution": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "When an enemy within 30 feet damages you or an ally, you can use your reaction to smite them with divine energy.", "effect": { "trigger": "enemy_damages_self_or_ally_30ft", "action": "reaction_smite_attacker", "damage": "4d10_radiant" } },
"Apotheosis (Temporary)": { "class": "cleric", "type": "ultimate", "cooldown": "long_rest_very_high_level", "description": "Briefly take on aspects of your deity, becoming a near-demigod.", "effect": { "transformation_demigod_form": true, "duration": "1_minute", "abilities": "flight_major_immunities_powerful_divine_attacks" } },
"Avatar of a God": { "class": "cleric", "type": "ultimate", "cooldown": "long_rest_capstone", "description": "Fully embody an avatar of your deity, wielding immense divine power.", "effect": { "transformation_divine_avatar_full": true, "duration": "1_minute_or_longer", "abilities": "near_godlike_powers_reality_alteration_minor" } },
"Divine Intervention (Improved)": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "Your chance of success with Divine Intervention increases, or you can use it more often.", "effect": { "buff_divine_intervention": "increased_success_chance_or_frequency" } },
"Nature's Grasp": { "class": "druid", "type": "utility", "cooldown": 3, "description": "Entangling vines sprout to attempt to restrain a nearby enemy.", "effect": { "range": "30_feet", "status": "restrained", "save": "Strength" } },
"Primal Savagery": { "class": "druid", "type": "attack", "cooldown": 0, "description": "(Cantrip-like) Your teeth or nails lengthen and sharpen, make a melee spell attack dealing 1d10 acid, cold, fire, lightning, or thunder damage.", "effect": { "damage": "1d10_elemental_choice", "type": "melee_spell_attack" } },
"Animal Companion (Spirit)": { "class": "druid", "type": "summon", "cooldown": 0, "description": "Summon a spirit animal that aids you in and out of combat (uses a simplified stat block).", "effect": { "summon_spirit_animal": true } },
"Circle Spellcasting": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You gain access to additional spells based on your Druid Circle.", "effect": { "utility": "circle_specific_bonus_spells" } },
"Call of the Wild": { "class": "druid", "type": "utility", "cooldown": "short_rest", "description": "Temporarily summon several minor nature spirits or beasts to assist or distract.", "effect": { "summon_minor_nature_spirits_or_beasts": true, "count": "1d4", "duration": "1_minute" } },
"Natural Recovery": { "class": "druid", "type": "utility", "cooldown": "short_rest", "description": "Once per day during a short rest, you can regain some expended spell slots.", "effect": { "utility": "regain_spell_slots_on_short_rest" } },
"Land's Stride (Minor)": { "class": "druid", "type": "passive", "cooldown": 0, "description": "Moving through nonmagical difficult terrain costs you no extra movement.", "effect": { "movement_buff_ignore_nonmagical_difficult_terrain": true } },
"Elemental Fury": { "class": "druid", "type": "buff", "cooldown": "short_rest", "description": "Imbue your attacks or spells with elemental energy (fire, cold, lightning) for extra damage.", "effect": { "buff_attacks_spells_extra_elemental_damage": "1d6", "duration": "1_minute" } },
"Wrath of the Storm": { "class": "druid", "type": "attack", "cooldown": "short_rest", "description": "Call down a localized storm effect (lightning, hail, or strong winds).", "effect": { "aoe_localized_storm": "30_feet_radius", "effect_choice": ["lightning_strike_3d10", "hail_2d8_bludgeoning", "strong_wind_push_prone_str_save"] } },
"Mighty Summoner": { "class": "druid", "type": "passive", "cooldown": 0, "description": "Beasts and fey you summon have more hit points and deal more damage.", "effect": { "buff_summoned_beasts_fey": "increased_hp_and_damage" } },
"Fey Charm": { "class": "druid", "type": "utility", "cooldown": "short_rest", "description": "Attempt to charm a humanoid or beast with fey magic.", "effect": { "target_humanoid_or_beast": true, "status": "charmed", "save": "Wisdom" } },
"Nature's Sanctuary": { "class": "druid", "type": "passive", "cooldown": 0, "description": "If a creature targets you with an attack or harmful spell, it must first make a Wisdom saving throw if it's a beast or plant. On a failed save, it must choose a new target or lose the attack/spell.", "effect": { "trigger": "targeted_by_beast_or_plant", "save_to_attack_you": "Wisdom" } },
"Eye of the Storm": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You remain unharmed by your own storm-like spell effects (e.g. Call Lightning, Sleet Storm).", "effect": { "immune_to_own_storm_spells": true } },
"Venomous Thorns": { "class": "druid", "type": "attack", "cooldown": 3, "description": "Launch thorns coated in natural poison, dealing piercing and poison damage.", "effect": { "damage": "2d6_piercing_plus_2d6_poison", "save_for_half_poison": "Constitution" } },
"Earthquake (Minor)": { "class": "druid", "type": "attack", "cooldown": "long_rest", "description": "Cause a localized tremor, knocking creatures prone and creating difficult terrain.", "effect": { "aoe": "20_feet_radius", "status_prone_on_fail_save": "Dexterity", "effect_difficult_terrain": true } },
"One with the Land": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You gain benefits while in your favored terrains (e.g., better stealth, easier foraging).", "effect": { "buff_in_favored_terrain": "stealth_foraging_bonuses" } },
"Beast Speech (Permanent)": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You can speak with animals at will.", "effect": { "utility": "speak_with_animals_at_will" } },
"Timeless Body (Minor)": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You age more slowly, e.g., for every 10 years that pass, your body ages only 1 year.", "effect": { "passive_slowed_aging": true } },
"Primal Ward": { "class": "druid", "type": "defensive", "cooldown": "short_rest", "description": "Gain temporary resistance to one elemental damage type (acid, cold, fire, lightning, thunder).", "effect": { "buff_resistance_elemental_choice": true, "duration": "1_hour" } },
"Walker in Dreams": { "class": "druid", "type": "utility", "cooldown": "long_rest", "description": "Enter the dreams of sleeping creatures or explore the dreamscape.", "effect": { "utility": "dream_walking_exploration" } },
"Elemental Body": { "class": "druid", "type": "buff", "cooldown": "long_rest", "description": "Temporarily transform into a lesser elemental, gaining its traits.", "effect": { "transformation_lesser_elemental_form": true, "duration": "10_minutes" } },
"Nature's Resilience": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against poisons and diseases.", "effect": { "advantage_saves_vs_poison_disease": true } },
"Unseen Predator (Nature)": { "class": "druid", "type": "stealth", "cooldown": "short_rest", "description": "While in natural surroundings, you can become invisible as a bonus action until you attack or cast a spell.", "effect": { "condition_natural_surroundings": true, "action_bonus_action_invisible_until_action": true } },
"Commune with Nature (Greater)": { "class": "druid", "type": "utility", "cooldown": "long_rest", "description": "Gain detailed knowledge about the natural environment within several miles.", "effect": { "utility": "detailed_environmental_knowledge_large_area" } },
"Thousand Forms (Minor)": { "class": "druid", "type": "utility", "cooldown": "short_rest", "description": "You can cast Alter Self at will, but only to change your appearance, not gain its other benefits.", "effect": { "cast_alter_self_at_will_appearance_only": true } },
"One with the Pack": { "class": "druid", "type": "passive", "cooldown": 0, "description": "(If Circle of the Shepherd) Your spirit totem benefits are enhanced or affect more allies.", "effect": { "condition_circle_of_shepherd": true, "buff_spirit_totem": true } },
"Perfected Wild Shape": { "class": "druid", "type": "passive", "cooldown": 0, "description": "Your Wild Shape transformations are faster, last longer, or allow for more powerful beast forms.", "effect": { "buff_wild_shape": "faster_longer_stronger_forms" } },
"Aura of the Guardian": { "class": "druid", "type": "passive", "cooldown": 0, "description": "Friendly creatures and plants within 30 feet of you gain temporary HP at the start of your turn.", "effect": { "aura_range": "30_feet", "buff_friendly_creatures_plants_temp_hp_start_of_turn": "druid_level_half" } },
"Archdruid (Unlimited Wild Shape)": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You can use Wild Shape an unlimited number of times.", "effect": { "buff_wild_shape_unlimited_uses": true } },
"Voice of the Earth": { "class": "druid", "type": "utility", "cooldown": "short_rest", "description": "Speak with stones and earth, learning secrets they have witnessed.", "effect": { "utility": "speak_with_stone_earth" } },
"Focused Strike": { "class": "monk", "type": "attack", "cooldown": 0, "description": "When making an unarmed strike, you can use Dexterity instead of Strength for attack and damage.", "effect": { "utility": "dex_for_unarmed_strikes" } },
"Meditative Calm": { "class": "monk", "type": "utility", "cooldown": "short_rest", "description": "Spend 1 minute meditating to regain 1 Ki point.", "effect": { "action_meditate_regain_ki": 1, "duration": "1_minute" } },
"Flurry of Blows": { "class": "monk", "type": "attack", "cooldown": 0, "description": "(Ki Ability) Immediately after taking Attack action, spend 1 Ki to make two unarmed strikes as a bonus action.", "effect": { "trigger": "after_attack_action", "cost_ki": 1, "bonus_action_unarmed_strikes": 2 } },
"Patient Defense": { "class": "monk", "type": "defensive", "cooldown": 0, "description": "(Ki Ability) Spend 1 Ki to take Dodge action as a bonus action.", "effect": { "cost_ki": 1, "bonus_action_dodge": true } },
"Step of the Wind": { "class": "monk", "type": "movement", "cooldown": 0, "description": "(Ki Ability) Spend 1 Ki to take Disengage or Dash action as a bonus action; jump distance is doubled.", "effect": { "cost_ki": 1, "bonus_action_disengage_or_dash": true, "buff_jump_distance_doubled": true } },
"Way of the Open Hand/Shadow/etc.": { "class": "monk", "type": "passive", "cooldown": 0, "description": "Represents the monk's chosen monastic tradition features.", "effect": { "utility": "monastic_tradition_specific_feature" } },
"Combat Flow": { "class": "monk", "type": "passive", "cooldown": 0, "description": "After hitting with an unarmed strike, your next attack roll before end of turn has advantage.", "effect": { "trigger": "on_unarmed_hit", "buff_next_attack_advantage": true } },
"Pressure Point": { "class": "monk", "type": "attack", "cooldown": "short_rest", "description": "Spend 1 Ki point when hitting with an unarmed strike to impose disadvantage on target's next attack roll or saving throw.", "effect": { "trigger": "on_unarmed_hit_spend_ki", "cost_ki": 1, "debuff_target_next_roll_disadvantage": true } },
"Flowing Water Stance": { "class": "monk", "type": "stance", "cooldown": 0, "description": "While not wearing armor or shield, gain +1 AC if you moved at least 10ft this turn.", "effect": { "condition_unarmored_no_shield_moved_10ft": true, "ac_bonus": 1 } },
"Martial Arts (1d6)": { "class": "monk", "type": "passive", "cooldown": 0, "description": "Your unarmed strike damage die increases to 1d6.", "effect": { "buff_unarmed_damage_die": "1d6" } },
"Explosive Ki Burst": { "class": "monk", "type": "attack", "cooldown": "short_rest", "description": "Spend 2 Ki points to unleash a 15ft cone of force from your hands, dealing 3d6 force damage.", "effect": { "cost_ki": 2, "aoe_cone_15ft": true, "damage": "3d6_force", "save_dex_half": true } },
"Wholeness of Body": { "class": "monk", "type": "utility", "cooldown": "short_rest", "description": "As an action, regain hit points equal to three times your monk level.", "effect": { "action_heal_self": "monk_level_times_3" } },
"Aura of Control": { "class": "monk", "type": "debuff", "cooldown": "long_rest", "description": "(Tradition Specific) Emit an aura that hinders enemies or bolsters allies.", "effect": { "utility": "tradition_specific_aura_effect" } },
"Leap of the Clouds": { "class": "monk", "type": "movement", "cooldown": 0, "description": "Your jump distance is tripled when you spend 1 Ki point before jumping.", "effect": { "cost_ki_for_jump": 1, "buff_jump_distance_tripled": true } },
"Iron Body Technique": { "class": "monk", "type": "defensive", "cooldown": "short_rest", "description": "Spend 2 Ki points to gain resistance to bludgeoning, piercing, and slashing damage for 1 minute.", "effect": { "cost_ki": 2, "resistance_physical_nonmagical": true, "duration": "1_minute" } },
"Quivering Palm (Lesser)": { "class": "monk", "type": "attack", "cooldown": "long_rest", "description": "Spend 3 Ki. On hit with unarmed strike, target must make Con save. On fail, drops to 0 HP after 1d4 days unless effect is removed. Lesser version may have shorter duration or lower HP threshold.", "effect": { "cost_ki": 3, "trigger_on_unarmed_hit": true, "save_con_vs_delayed_0_hp": true, "effect_details": "lesser_quivering_palm" } },
"Mind Over Matter": { "class": "monk", "type": "passive", "cooldown": 0, "description": "Advantage on saving throws against being charmed or frightened.", "effect": { "advantage_saves_vs_charmed_frightened": true } },
"Aspect of the Four Winds": { "class": "monk", "type": "utility", "cooldown": "short_rest", "description": "(Tradition Specific) Channel aspects of elements for various effects (e.g., ranged attacks, enhanced movement).", "effect": { "utility": "tradition_specific_elemental_effects" } },
"Counter Strike": { "class": "monk", "type": "defensive", "cooldown": 0, "description": "When a creature misses you with a melee attack, you can use your reaction to make an unarmed strike against it.", "effect": { "trigger": "enemy_melee_miss", "reaction_unarmed_strike": true } },
"Touch of Serenity": { "class": "monk", "type": "utility", "cooldown": "short_rest", "description": "Spend 1 Ki point to touch a creature and end one effect causing it to be charmed or frightened.", "effect": { "cost_ki": 1, "target_touch_creature": true, "action_end_charmed_or_frightened": true } },
"Ki Infusion": { "class": "monk", "type": "passive", "cooldown": 0, "description": "Your unarmed strikes count as magical for overcoming resistance/immunity.", "effect": { "buff_unarmed_strikes_magical": true } },
"Diamond Soul (Minor)": { "class": "monk", "type": "passive", "cooldown": 0, "description": "You gain proficiency in all saving throws (or a subset if 'minor').", "effect": { "proficiency_all_saving_throws_or_subset": true } },
"Empty Body (Invisibility)": { "class": "monk", "type": "utility", "cooldown": 0, "description": "(Ki Ability) Spend 4 Ki points to become invisible for 1 minute. While invisible, you have resistance to all damage except force.", "effect": { "cost_ki": 4, "status_invisible": true, "duration": "1_minute", "resistance_while_invisible_all_except_force": true } },
"Fist of the North Star": { "class": "monk", "type": "attack", "cooldown": "long_rest", "description": "(Tradition Specific) A powerful series of strikes that can incapacitate or heavily damage a foe.", "effect": { "utility": "tradition_specific_powerful_strike_combo" } },
"Ki Wave": { "class": "monk", "type": "attack", "cooldown": "short_rest", "description": "Spend 2 Ki points to send a wave of ki energy in a 15-foot cone. Creatures take force damage equal to two rolls of your Martial Arts die.", "effect": { "cost_ki": 2, "aoe_cone_15ft": true, "damage_force_martial_arts_die_x2": true, "save_dex_half": true } },
"Ethereal Step": { "class": "monk", "type": "movement", "cooldown": 0, "description": "(Ki Ability, Tradition Specific) Spend Ki to briefly step into the Ethereal Plane and move.", "effect": { "utility": "tradition_specific_ethereal_movement" } },
"Touch of Death (Lesser)": { "class": "monk", "type": "attack", "cooldown": "long_rest", "description": "(Tradition Specific) Spend Ki. On hit with unarmed strike, deal extra necrotic damage. If target drops to 0 HP, you gain temporary HP.", "effect": { "utility": "tradition_specific_necrotic_strike_temp_hp" } },
"Perfected Self": { "class": "monk", "type": "passive", "cooldown": 0, "description": "Your body is a perfected instrument. Increase two ability scores of your choice by 1.", "effect": { "ability_score_increase_two_chosen_by_1": true } },
"Rippling Palm": { "class": "monk", "type": "attack", "cooldown": "short_rest", "description": "Spend 3 Ki. An unarmed strike sends vibrations through the target. On failed Con save, target is stunned for 1 minute but can repeat save each turn.", "effect": { "cost_ki": 3, "trigger_on_unarmed_hit": true, "status_stunned_repeating_save": true, "save_con": true } },
"Ki Annihilation": { "class": "monk", "type": "ultimate", "cooldown": "long_rest", "description": "(Tradition Specific) Unleash all your Ki in a devastating attack or effect.", "effect": { "utility": "tradition_specific_ultimate_ki_ability" } },
"Body of the Lotus": { "class": "monk", "type": "passive", "cooldown": 0, "description": "You are immune to poison and disease, and you no longer need to eat or drink.", "effect": { "immune_poison_disease": true, "no_need_eat_drink": true } },
"Dragon's Breath (Ki-fueled)": { "class": "monk", "type": "attack", "cooldown": 0, "description": "(Tradition Specific) Spend Ki to exhale elemental energy (fire, cold, etc.) in a cone.", "effect": { "utility": "tradition_specific_elemental_breath_attack" } },
"Transcendent Step": { "class": "monk", "type": "movement", "cooldown": 0, "description": "You can move across vertical surfaces and liquids without falling during your move.", "effect": { "movement_walk_on_walls_liquids": true } },
"Quivering Palm": { "class": "monk", "type": "attack", "cooldown": "long_rest", "description": "Spend 3 Ki. On hit with unarmed strike, set up lethal vibrations. As an action within days equal to monk level, can force Con save or target drops to 0 HP. If save, 10d10 necrotic damage.", "effect": { "cost_ki": 3, "trigger_on_unarmed_hit_setup_vibrations": true, "action_to_trigger_effect": true, "save_con_vs_0_hp_or_10d10_necrotic": true } },
"Empty Body (Astral Projection)": { "class": "monk", "type": "utility", "cooldown": 0, "description": "(Ki Ability) Spend 8 Ki points to cast Astral Projection spell on yourself.", "effect": { "cost_ki": 8, "action_cast_astral_projection_self": true } },
"Innate Magic": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Your magic comes from within, not from study or a deity.", "effect": { "flavor_text": "innate_spellcasting_source" } },
"Bloodline Trait": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Grants benefits based on your Sorcerous Origin (e.g., Draconic Resilience).", "effect": { "utility": "sorcerous_origin_specific_benefit" } },
"Flexible Casting": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "Use Sorcery Points to create spell slots, or convert spell slots into Sorcery Points.", "effect": { "utility": "convert_sorcery_points_spell_slots" } },
"Empower Spell (Lesser)": { "class": "sorcerer", "type": "buff", "cooldown": 0, "description": "(Metamagic Option) Spend 1 Sorcery Point to reroll a number of damage dice up to your Charisma modifier for one spell.", "effect": { "metamagic_option_empower_spell": true, "cost_sorcery_points": 1 } },
"Twinned Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend Sorcery Points equal to spell's level to target a second creature with a single-target spell.", "effect": { "metamagic_option_twinned_spell": true } },
"Quickened Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 2 Sorcery Points to change a spell's casting time from 1 action to 1 bonus action.", "effect": { "metamagic_option_quickened_spell": true, "cost_sorcery_points": 2 } },
"Careful Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 1 Sorcery Point to choose creatures who automatically succeed on saving throws against a spell you cast.", "effect": { "metamagic_option_careful_spell": true, "cost_sorcery_points": 1 } },
"Distant Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 1 Sorcery Point to double a spell's range, or make a touch spell range 30ft.", "effect": { "metamagic_option_distant_spell": true, "cost_sorcery_points": 1 } },
"Arcane Burst": { "class": "sorcerer", "type": "attack", "cooldown": "short_rest", "description": "Release a burst of raw magical energy, dealing 2d6 force damage in a 10ft radius.", "effect": { "aoe_10ft_radius": true, "damage": "2d6_force" } },
"Elemental Affinity": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "(Draconic Origin) Add Charisma modifier to one damage roll of any spell that deals damage of the type associated with your draconic ancestry.", "effect": { "condition_draconic_origin": true, "buff_spell_damage_add_cha_mod_ancestral_element": true } },
"Unleash Power": { "class": "sorcerer", "type": "buff", "cooldown": "long_rest", "description": "For 1 minute, your spells that require concentration no longer do, and you can concentrate on two such spells at once.", "effect": { "duration_1_minute": true, "buff_no_concentration_needed_can_hold_two": true } },
"Sorcerous Restoration (Minor)": { "class": "sorcerer", "type": "utility", "cooldown": "short_rest", "description": "Regain a small number of expended Sorcery Points (e.g., 1d4).", "effect": { "regain_sorcery_points": "1d4" } },
"Draconic Resilience / Wild Magic Bend Luck": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Sorcerous Origin feature, providing defensive or luck-based benefits.", "effect": { "utility": "origin_specific_feature_draconic_resilience_or_bend_luck" } },
"Elemental Control": { "class": "sorcerer", "type": "utility", "cooldown": "short_rest", "description": "Gain temporary control over small, mundane manifestations of your ancestral element.", "effect": { "utility": "minor_control_ancestral_element" } },
"Arcane Fury": { "class": "sorcerer", "type": "buff", "cooldown": "long_rest", "description": "Enter a state where your damaging spells deal maximum possible damage for 1 round.", "effect": { "duration_1_round": true, "buff_spells_maximize_damage": true } },
"Spell Bombardment": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "(Wild Magic) When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again, and add that roll to the damage.", "effect": { "condition_wild_magic_max_damage_roll": true, "buff_spell_damage_reroll_one_max_die_add_to_total": true } },
"Arcane Shield": { "class": "sorcerer", "type": "defensive", "cooldown": "short_rest", "description": "Expend Sorcery Points to create a temporary shield that grants AC bonus.", "effect": { "cost_sorcery_points_variable": true, "ac_bonus_per_point": 1, "duration_1_minute": true } },
"Master of Magic (Innate)": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Choose one 1st-level sorcerer spell you know. You can cast it at its lowest level without expending a spell slot once per long rest.", "effect": { "choose_1st_level_spell_free_cast_once_long_rest": true } },
"Overchannel (Risky)": { "class": "sorcerer", "type": "buff", "cooldown": "long_rest", "description": "When you cast a sorcerer spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell. The first time you do so, you suffer no adverse effect. If you use this feature again before finishing a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12.", "effect": { "buff_spell_1st_to_5th_maximize_damage": true, "risk_increasing_necrotic_damage_on_reuse": true } },
"Heightened Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 3 Sorcery Points to give one target of a spell disadvantage on its first saving throw against the spell.", "effect": { "metamagic_option_heightened_spell": true, "cost_sorcery_points": 3 } },
"Subtle Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 1 Sorcery Point to cast a spell without somatic or verbal components.", "effect": { "metamagic_option_subtle_spell": true, "cost_sorcery_points": 1 } },
"Empowered Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 1 Sorcery Point to reroll a number of damage dice up to Charisma mod for a spell.", "effect": { "metamagic_option_empowered_spell_full": true, "cost_sorcery_points": 1 } },
"Spell Siphon": { "class": "sorcerer", "type": "utility", "cooldown": "long_rest", "description": "When you successfully counter a spell or it fizzles, regain Sorcery Points equal to half the spell's level.", "effect": { "trigger_counterspell_or_fizzle": true, "regain_sorcery_points_spell_level_half": true } },
"Chaotic Surge": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "(Wild Magic) Your Wild Magic Surges occur more frequently or you can trigger them intentionally.", "effect": { "condition_wild_magic": true, "buff_wild_magic_surge_frequency_or_control": true } },
"Planar Jaunt": { "class": "sorcerer", "type": "movement", "cooldown": "short_rest", "description": "Briefly step into an adjacent plane to teleport up to 60 feet.", "effect": { "teleport_60_feet_via_planar_step": true } },
"Aura of Power": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Your innate magic creates an aura that bolsters allies' spell attacks or DCs.", "effect": { "aura_range_10_feet": true, "buff_allies_spell_attacks_or_dcs": 1 } },
"Draconic Wings / Spell Bombardment": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Sorcerous Origin capstone feature (flight or enhanced spell damage).", "effect": { "utility": "origin_capstone_draconic_wings_or_spell_bombardment" } },
"Arcane Rift": { "class": "sorcerer", "type": "utility", "cooldown": "long_rest", "description": "Tear a temporary rift to another plane, causing minor chaos or allowing brief passage.", "effect": { "utility_create_planar_rift_minor_effects": true } },
"Sorcerous Restoration": { "class": "sorcerer", "type": "utility", "cooldown": "short_rest", "description": "Regain a significant number of expended Sorcery Points (e.g., up to half your max).", "effect": { "regain_sorcery_points_significant_amount": true } },
"Volatile Casting": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Your spells have a chance to trigger additional, unpredictable magical effects (similar to Wild Magic Surge but less table-dependent).", "effect": { "chance_spells_trigger_unpredictable_effects": true } },
"Seeking Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 2 Sorcery Points. If you make an attack roll for a spell and miss, you can reroll it. You must use the new roll.", "effect": { "metamagic_option_seeking_spell": true, "cost_sorcery_points": 2 } },
"Arcane Apotheosis": { "class": "sorcerer", "type": "ultimate", "cooldown": "long_rest", "description": "For 1 minute, you become a being of pure magic. You can cast any sorcerer spell you know of 5th level or lower at will without components, and gain resistance to all damage.", "effect": { "duration_1_minute_pure_magic_form": true, "cast_sorcerer_spells_5th_lower_at_will_no_components": true, "resistance_all_damage": true } },
"Patron's Gift": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "A specific boon granted by your Otherworldly Patron (e.g., Dark One's Blessing, Fey Presence).", "effect": { "utility": "patron_specific_boon" } },
"Eldritch Grasp": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "Your Eldritch Blast can pull a creature 10 feet closer to you on a hit.", "effect": { "buff_eldritch_blast_pull_target_10_feet": true } },
"Agonizing Blast": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation) Add Charisma modifier to Eldritch Blast damage.", "effect": { "invocation_agonizing_blast_add_cha_to_eldritch_blast_damage": true } },
"Armor of Shadows": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation) Cast Mage Armor on yourself at will without spell slots or components.", "effect": { "invocation_armor_of_shadows_mage_armor_at_will": true } },
"Beguiling Influence": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation) Gain proficiency in Deception and Persuasion skills.", "effect": { "invocation_beguiling_influence_prof_deception_persuasion": true } },
"Pact Weapon": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Pact of the Blade) Create or bond with a magical weapon.", "effect": { "pact_of_the_blade_create_bond_weapon": true } },
"Find Familiar (Special)": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Pact of the Chain) Cast Find Familiar, with additional special familiar forms available.", "effect": { "pact_of_the_chain_find_familiar_special_forms": true } },
"Book of Shadows": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Pact of the Tome) Gain a grimoire with three cantrips from any class.", "effect": { "pact_of_the_tome_book_of_shadows_three_bonus_cantrips": true } },
"Dark One's Own Luck (Lesser)": { "class": "warlock", "type": "utility", "cooldown": "short_rest", "description": "(Fiend Patron) Add 1d10 to one ability check or saving throw.", "effect": { "condition_fiend_patron_add_1d10_to_check_or_save": true } },
"Entropic Ward": { "class": "warlock", "type": "defensive", "cooldown": "short_rest", "description": "(Great Old One Patron) Impose disadvantage on an attack roll against you. If it misses, gain advantage on your next attack vs. attacker.", "effect": { "condition_great_old_one_patron_impose_disadvantage_on_attack_gain_advantage_if_miss": true } },
"Thirsting Blade": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation, Pact of the Blade) Attack twice with your pact weapon when you take Attack action.", "effect": { "invocation_thirsting_blade_pact_weapon_extra_attack": true } },
"Voice of the Chain Master": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation, Pact of the Chain) Communicate telepathically with your familiar and perceive through its senses as long as you are on the same plane.", "effect": { "invocation_voice_of_the_chain_master_familiar_telepathy_shared_senses": true } },
"Book of Ancient Secrets": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation, Pact of the Tome) Inscribe ritual spells into your Book of Shadows.", "effect": { "invocation_book_of_ancient_secrets_learn_ritual_spells": true } },
"Misty Escape": { "class": "warlock", "type": "defensive", "cooldown": "short_rest", "description": "(Archfey Patron) When you take damage, use reaction to turn invisible and teleport 60ft.", "effect": { "condition_archfey_patron_on_damage_reaction_invisible_teleport_60ft": true } },
"Relentless Hex": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Invocation) Bonus action teleport next to creature affected by your Hex spell or a warlock curse.", "effect": { "invocation_relentless_hex_teleport_to_hexed_cursed_target": true } },
"Ghostly Gaze": { "class": "warlock", "type": "utility", "cooldown": "short_rest", "description": "(Invocation) As an action, see through solid objects in a 30-foot radius for 1 minute.", "effect": { "invocation_ghostly_gaze_see_through_objects_30ft_1_min": true } },
"Patron's Shield": { "class": "warlock", "type": "defensive", "cooldown": "short_rest", "description": "A defensive boon from your patron (e.g., temporary HP, resistance).", "effect": { "patron_specific_defensive_boon": true } },
"Dark Foresight": { "class": "warlock", "type": "utility", "cooldown": "long_rest", "description": "Receive a brief, cryptic vision of a future event related to your patron's interests.", "effect": { "utility_cryptic_future_vision": true } },
"Minions of Chaos": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Invocation) Cast Conjure Elemental once using a warlock spell slot.", "effect": { "invocation_minions_of_chaos_cast_conjure_elemental": true } },
"Otherworldly Leap": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Invocation) Cast Jump on yourself at will.", "effect": { "invocation_otherworldly_leap_cast_jump_at_will": true } },
"Fiendish Resilience": { "class": "warlock", "type": "passive", "cooldown": "short_rest", "description": "(Fiend Patron) Choose one damage type (not magical physical). Gain resistance to it until your next short/long rest.", "effect": { "condition_fiend_patron_choose_resistance_one_damage_type": true } },
"Thought Shield": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Great Old One Patron) Your thoughts can't be read by telepathy or other means unless you allow it. Resistance to psychic damage.", "effect": { "condition_great_old_one_patron_thoughts_cannot_be_read_psychic_resistance": true } },
"Create Thrall (Lesser)": { "class": "warlock", "type": "utility", "cooldown": "long_rest", "description": "Incapacitate a humanoid. If it fails a Wisdom save, it is charmed by you for 24 hours or until you use this feature again. You can communicate telepathically with it.", "effect": { "utility_create_lesser_thrall_charmed_telepathic_link": true } },
"Soul Cage": { "class": "warlock", "type": "spell_like", "cooldown": "spell_slot_cost_6th_level_arcanum", "description": "(Mystic Arcanum) Trap the soul of a recently deceased humanoid.", "effect": { "mystic_arcanum_soul_cage_trap_soul": true } },
"Lifedrinker": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation, Pact of the Blade) Your pact weapon deals extra necrotic damage equal to your Charisma modifier.", "effect": { "invocation_lifedrinker_pact_weapon_extra_necrotic_cha_mod": true } },
"Witch Sight": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation) See the true form of any shapechanger or creature concealed by illusion/transmutation magic within 30 feet.", "effect": { "invocation_witch_sight_true_seeing_shapechangers_illusions_30ft": true } },
"Forcecage": { "class": "warlock", "type": "spell_like", "cooldown": "spell_slot_cost_7th_level_arcanum", "description": "(Mystic Arcanum) Create an immobile, invisible prison of magical force.", "effect": { "mystic_arcanum_forcecage_create_prison": true } },
"Hurl Through Hell": { "class": "warlock", "type": "attack", "cooldown": "long_rest", "description": "(Fiend Patron) When you hit a creature with an attack, instantly transport it through the lower planes. It reappears at end of your next turn, taking 10d10 psychic damage.", "effect": { "condition_fiend_patron_on_hit_hurl_through_hell_10d10_psychic": true } },
"Create Thrall": { "class": "warlock", "type": "utility", "cooldown": "long_rest", "description": "(Great Old One Patron) Charm a humanoid indefinitely, it becomes your thrall.", "effect": { "condition_great_old_one_patron_create_permanent_thrall": true } },
"Visions of Distant Realms": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Invocation) Cast Arcane Eye at will.", "effect": { "invocation_visions_of_distant_realms_arcane_eye_at_will": true } },
"Dark Delirium": { "class": "warlock", "type": "utility", "cooldown": "short_rest", "description": "(Archfey Patron) Charm or frighten a creature, plunging it into an illusory realm.", "effect": { "condition_archfey_patron_charm_frighten_illusory_realm": true } },
"Soul Mirror": { "class": "warlock", "type": "defensive", "cooldown": "long_rest", "description": "Reflect a portion of damage taken back at an attacker, or absorb life force.", "effect": { "patron_specific_soul_damage_reflection_or_absorption": true } },
"True Polymorph": { "class": "warlock", "type": "spell_like", "cooldown": "spell_slot_cost_9th_level_arcanum", "description": "(Mystic Arcanum) Transform a creature or object into another.", "effect": { "mystic_arcanum_true_polymorph": true } },
"Foresight": { "class": "warlock", "type": "spell_like", "cooldown": "spell_slot_cost_9th_level_arcanum", "description": "(Mystic Arcanum) Gain insight into the immediate future.", "effect": { "mystic_arcanum_foresight": true } },
"Wish (Patron's Whim)": { "class": "warlock", "type": "spell_like", "cooldown": "spell_slot_cost_9th_level_arcanum", "description": "(Mystic Arcanum) A limited wish granted by your patron, often with unpredictable outcomes or specific limitations related to the patron's nature.", "effect": { "mystic_arcanum_wish_limited_by_patron": true } },
"Primal Scream": { "class": "barbarian", "type": "utility", "cooldown": 0, "description": "A terrifying scream that can be part of entering a Rage.", "effect": { "utility_part_of_rage_intimidation_effect": true } },
"Power Attack": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "You can choose to take a -5 penalty to hit for +10 damage on melee weapon attacks (similar to Great Weapon Master, but perhaps broader).", "effect": { "melee_power_attack_penalty_hit_bonus_damage": true } },
"Furious Charge": { "class": "barbarian", "type": "movement", "cooldown": 3, "description": "Move up to your speed towards an enemy and make an attack with advantage.", "effect": { "movement_charge_attack_with_advantage": true } },
"Intimidating Presence": { "class": "barbarian", "type": "debuff", "cooldown": "short_rest", "description": "As an action, force one creature to make a Wisdom save or become frightened of you for 1 minute.", "effect": { "target_enemy_frighten_save_wis": true, "duration_1_minute": true } },
"Path Feature (e.g., Totem Spirit)": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Primal Path.", "effect": { "utility": "primal_path_specific_feature" } },
"Mighty Swing": { "class": "barbarian", "type": "attack", "cooldown": 0, "description": "When raging, your melee weapon attacks deal an extra +2 damage.", "effect": { "condition_raging_bonus_melee_damage": 2 } },
"Ground Slam": { "class": "barbarian", "type": "attack", "cooldown": "short_rest", "description": "Slam the ground, creating a shockwave that can knock enemies prone in a small radius.", "effect": { "aoe_10ft_radius_prone_save_str": true } },
"Fearsome Yell": { "class": "barbarian", "type": "debuff", "cooldown": "short_rest", "description": "All enemies within 30 feet that can hear you must make a Wisdom save or have disadvantage on their next attack roll.", "effect": { "aoe_30ft_hear_disadvantage_next_attack_save_wis": true } },
"Wild Strikes": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "While raging, you can make an additional melee attack as a bonus action.", "effect": { "condition_raging_bonus_action_melee_attack": true } },
"Unstoppable Momentum": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "If you move at least 20 feet in a straight line towards a target before hitting it with a melee attack, the target takes extra damage and must make a Strength save or be knocked prone.", "effect": { "condition_move_20ft_straight_charge_bonus_damage_prone_save_str": true } },
"Aspect of the Beast": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "(Totem Path) Gain a benefit related to your chosen totem animal (e.g., Eagle's sight, Bear's resilience).", "effect": { "primal_path_totem_aspect_benefit": true } },
"Earth Shaker": { "class": "barbarian", "type": "attack", "cooldown": "long_rest", "description": "Strike the ground with immense force, causing an earthquake in a large radius.", "effect": { "aoe_30ft_radius_earthquake_damage_prone_difficult_terrain": true } },
"Hunter's Senses": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Advantage on Wisdom (Perception) checks related to tracking or noticing hidden creatures.", "effect": { "advantage_perception_tracking_hidden": true } },
"Ambush Breaker": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "If you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn if you enter a rage.", "effect": { "condition_surprised_can_act_if_rage": true } },
"Savage Roar": { "class": "barbarian", "type": "buff", "cooldown": "short_rest", "description": "Let out a roar that grants you and nearby allies temporary HP.", "effect": { "aoe_10ft_allies_temp_hp_barb_level": true } },
"Bone Breaker": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "When you score a critical hit with a melee weapon attack, you can also choose to break one of the target's bones (DM discretion on effect, e.g., reduced speed, disadvantage on certain actions).", "effect": { "on_critical_hit_break_bone_debuff": true } },
"Rage Damage +3": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Your rage damage bonus increases.", "effect": { "buff_rage_damage_bonus_increase": true } },
"Overwhelm": { "class": "barbarian", "type": "attack", "cooldown": "short_rest", "description": "Make a reckless attack. If it hits, the target is also stunned until the end of your next turn.", "effect": { "reckless_attack_on_hit_stun_save_con": true } },
"Spirit Walker": { "class": "barbarian", "type": "utility", "cooldown": "long_rest", "description": "(Totem Path) Commune with spirits to gain information or guidance.", "effect": { "primal_path_totem_spirit_communing": true } },
"Terrifying Rage": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Creatures of your choice that start their turn within 10 feet of you while you are raging must make a Wisdom save or become frightened.", "effect": { "condition_raging_aura_10ft_frighten_save_wis": true } },
"Undying Fury": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "If you drop to 0 HP while raging and don't die outright, you can make a DC 10 Con save. If successful, drop to 1 HP instead. DC increases by 5 each time.", "effect": { "condition_raging_hp_to_0_save_con_to_1_hp_increasing_dc": true } },
"Defy Death": { "class": "barbarian", "type": "passive", "cooldown": "long_rest", "description": "Once per long rest, when you make a death saving throw, you can choose to make it a 20.", "effect": { "once_per_long_rest_death_save_becomes_20": true } },
"Wrecking Ball": { "class": "barbarian", "type": "attack", "cooldown": "short_rest", "description": "When raging, you can use an action to make a powerful swing that deals extra damage to objects and structures, and can hit multiple adjacent targets.", "effect": { "condition_raging_action_cleave_extra_damage_objects": true } },
"Primal Strength": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Your Strength score increases by 2 and your maximum for that score is now 22.", "effect": { "strength_increase_2_max_22": true } },
"Devastating Blow": { "class": "barbarian", "type": "attack", "cooldown": "long_rest", "description": "Once per long rest, you can choose to make one melee weapon attack a devastating blow. If it hits, it's a critical hit and deals maximum weapon damage dice.", "effect": { "once_per_long_rest_guaranteed_crit_max_weapon_dice": true } },
"Shatter Defenses": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "If you hit a creature with Reckless Attack, all subsequent attacks against that creature by anyone have advantage until the start of your next turn.", "effect": { "on_reckless_attack_hit_grant_advantage_all_vs_target": true } },
"Retaliation": { "class": "barbarian", "type": "defensive", "cooldown": 0, "description": "(Path Feature) When you take damage from a creature within 5 feet, use your reaction to make a melee weapon attack against it.", "effect": { "primal_path_retaliation_feature": true } },
"Raging Storm": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "(Storm Herald Path) Your storm aura effects are enhanced.", "effect": { "primal_path_storm_herald_enhanced_aura": true } },
"Unending Rage": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Your rage lasts for up to 10 minutes, or until you fall unconscious or choose to end it.", "effect": { "buff_rage_duration_10_minutes": true } },
"Focused Fury": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "While raging, you can choose to not make Reckless Attacks to gain a +2 bonus to AC.", "effect": { "condition_raging_trade_reckless_for_ac_bonus_2": true } },
"Titan's Grip": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "You can wield two-handed melee weapons in one hand, but with disadvantage on attack rolls unless raging.", "effect": { "wield_two_handed_weapon_one_hand_disadvantage_unless_raging": true } },
"Earthshattering Roar": { "class": "barbarian", "type": "attack", "cooldown": "long_rest", "description": "Let out a roar so powerful it creates a shockwave, damaging and deafening creatures in a cone.", "effect": { "aoe_30ft_cone_damage_thunder_deafen_save_con": true } },
"Living Avalanche": { "class": "barbarian", "type": "movement", "cooldown": "short_rest", "description": "While raging, you can move through the space of hostile creatures, potentially knocking them prone.", "effect": { "condition_raging_move_through_hostiles_prone_save_str": true } },
"Sucker Punch": { "class": "brawler", "type": "attack", "cooldown": 2, "description": "An unexpected strike that deals bonus damage if the target hasn't acted yet in combat.", "effect": { "bonus_damage_if_target_not_acted": "1d6" } },
"Brace Up": { "class": "brawler", "type": "defensive", "cooldown": "short_rest", "description": "As a bonus action, gain temporary HP equal to your Constitution modifier.", "effect": { "bonus_action_gain_temp_hp_con_mod": true } },
"Pocket Sand": { "class": "brawler", "type": "debuff", "cooldown": 3, "description": "Throw dirt or sand in an enemy's eyes, imposing disadvantage on their next attack roll.", "effect": { "target_enemy_disadvantage_next_attack_save_dex": true } },
"Low Blow": { "class": "brawler", "type": "attack", "cooldown": 0, "description": "Part of Dirty Fighting. An unarmed strike that, on a hit, can force a Con save to avoid being stunned for 1 round.", "effect": { "on_unarmed_hit_stun_save_con": true, "part_of": "Dirty Fighting" } },
"Headbutt": { "class": "brawler", "type": "attack", "cooldown": 4, "description": "Make an unarmed strike with your head. If it hits, the target must make a Con save or be dazed (disadvantage on attacks) until end of its next turn.", "effect": { "unarmed_strike_headbutt_dazed_save_con": true } },
"Style Feature (e.g., Strong-Arm Grappler)": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Brawling Style.", "effect": { "utility": "brawling_style_specific_feature" } },
"Get Back Up": { "class": "brawler", "type": "utility", "cooldown": "short_rest", "description": "If knocked prone, you can use your reaction to stand up immediately.", "effect": { "on_prone_reaction_stand_up": true } },
"Gut Punch": { "class": "brawler", "type": "attack", "cooldown": 3, "description": "An unarmed strike that deals extra damage and can make the target unable to take reactions until its next turn.", "effect": { "unarmed_strike_extra_damage_1d4_no_reactions_save_con": true } },
"Bob and Weave": { "class": "brawler", "type": "defensive", "cooldown": 0, "description": "When an attacker you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.", "effect": { "on_hit_reaction_halve_damage": true } },
"Haymaker": { "class": "brawler", "type": "attack", "cooldown": "short_rest", "description": "Make an unarmed strike with advantage. If it hits, it's a critical hit.", "effect": { "unarmed_strike_advantage_guaranteed_crit": true } },
"Power Through": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "When you are subjected to an effect that would move you against your will or knock you prone, you can use your reaction to ignore it.", "effect": { "on_forced_movement_or_prone_reaction_ignore": true } },
"Improvised Weapon Master": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "You are proficient with improvised weapons and they deal 1d6 damage (or original if higher).", "effect": { "proficiency_improvised_weapons_damage_1d6": true } },
"Set Up": { "class": "brawler", "type": "utility", "cooldown": 3, "description": "As a bonus action, create an opening. The next attack roll against a target creature by an ally has advantage.", "effect": { "bonus_action_grant_ally_advantage_vs_target": true } },
"Shoulder Check": { "class": "brawler", "type": "movement", "cooldown": 2, "description": "Move up to 10 feet and attempt to shove a creature. You have advantage on the Strength (Athletics) check.", "effect": { "move_10ft_shove_attempt_advantage_athletics": true } },
"Ignore Pain": { "class": "brawler", "type": "defensive", "cooldown": "short_rest", "description": "As a bonus action, gain resistance to bludgeoning, piercing, and slashing damage for 1 minute.", "effect": { "bonus_action_resistance_physical_1_minute": true } },
"Combination Strike": { "class": "brawler", "type": "attack", "cooldown": 0, "description": "If you hit with two unarmed strikes on your turn, your second hit deals an extra Martial Arts die of damage.", "effect": { "on_two_unarmed_hits_second_deals_extra_martial_arts_die": true } },
"Mean Mug": { "class": "brawler", "type": "debuff", "cooldown": "short_rest", "description": "Make an Intimidation check contested by target's Insight. On success, target has disadvantage on attacks against you for 1 minute.", "effect": { "intimidation_vs_insight_disadvantage_attacks_vs_you_1_minute": true } },
"Choke Hold": { "class": "brawler", "type": "attack", "cooldown": "short_rest", "description": "Attempt to grapple and silence a target. If successful, target cannot speak and may begin to suffocate.", "effect": { "grapple_attempt_silence_suffocation_rules": true } },
"Disarm": { "class": "brawler", "type": "attack", "cooldown": 3, "description": "On a hit with an unarmed strike, force target to make a Strength save or drop one held item.", "effect": { "on_unarmed_hit_disarm_save_str": true } },
"Ring the Bell": { "class": "brawler", "type": "attack", "cooldown": "short_rest", "description": "An unarmed strike to the head. On hit, target must make Con save or be stunned until end of your next turn.", "effect": { "unarmed_strike_head_stun_save_con": true } },
"No Holds Barred": { "class": "brawler", "type": "buff", "cooldown": "long_rest", "description": "For 1 minute, your unarmed strikes deal an extra 1d4 damage, and you have advantage on grapple checks.", "effect": { "duration_1_minute_unarmed_extra_1d4_advantage_grapple": true } },
"Rabble Rouser": { "class": "brawler", "type": "utility", "cooldown": "long_rest", "description": "Incite a crowd, potentially starting a riot or creating a diversion.", "effect": { "utility_incite_crowd_riot_diversion": true } },
"One-Two Punch": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "When you use Flurry of Blows (if Monk multiclass) or make bonus action unarmed strike, you can move 5ft between attacks.", "effect": { "on_bonus_unarmed_strike_move_5ft_between": true } },
"Turn the Tables": { "class": "brawler", "type": "defensive", "cooldown": "short_rest", "description": "When an enemy misses you with a melee attack, you can use your reaction to make an unarmed strike or grapple attempt against them.", "effect": { "on_enemy_melee_miss_reaction_unarmed_or_grapple": true } },
"Unflinching": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "Advantage on saving throws against being frightened.", "effect": { "advantage_saves_vs_frightened": true } },
"Second Wind (Brawler version)": { "class": "brawler", "type": "utility", "cooldown": "short_rest", "description": "As a bonus action, regain hit points equal to 1d10 + Brawler level.", "effect": { "bonus_action_heal_self_1d10_plus_brawler_level": true } },
"The Best Defense...": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "When you take the Attack action, you can choose to forgo one of your attacks to gain +2 AC until your next turn.", "effect": { "trade_attack_for_ac_bonus_2": true } },
"Finishing Move Setup": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "Certain abilities or a sequence of hits can set up a target for a devastating Finishing Move.", "effect": { "utility_setup_for_finishing_move": true } },
"Master of the Pit": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "Advantage on attacks against prone or grappled creatures. You can grapple creatures up to two sizes larger.", "effect": { "advantage_vs_prone_grappled_grapple_larger_creatures": true } },
"Spiteful Retort": { "class": "brawler", "type": "defensive", "cooldown": 0, "description": "If a creature deals damage to you, you can use your reaction to deal half that damage back to them as bludgeoning damage (if within 5ft).", "effect": { "on_damage_taken_reaction_deal_half_damage_back_melee": true } },
"Center of Attention": { "class": "brawler", "type": "utility", "cooldown": "short_rest", "description": "As an action, attempt to draw the attacks of all hostile creatures within 30 feet to yourself for 1 round. (Wisdom save to resist).", "effect": { "action_taunt_all_hostiles_30ft_save_wis": true } },
"Bone-shattering Blow": { "class": "brawler", "type": "attack", "cooldown": "long_rest", "description": "An unarmed strike that deals extra damage and reduces target's AC by 2 for 1 minute on failed Con save.", "effect": { "unarmed_strike_extra_damage_2d8_reduce_ac_2_save_con": true } },
"True Grit": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "When you make a death saving throw and roll a 19 or 20, you regain 1 HP.", "effect": { "on_death_save_19_20_regain_1_hp": true } },
"Lights Out": { "class": "brawler", "type": "attack", "cooldown": "long_rest", "description": "A powerful unarmed strike. If it reduces the target to 0 HP, they are knocked out instantly and cannot be revived by non-magical means for 1 hour.", "effect": { "unarmed_strike_on_0_hp_instant_knockout_no_revive_1_hour": true } },
"Last Man Standing": { "class": "brawler", "type": "passive", "cooldown": "long_rest", "description": "If you are the last conscious member of your party in a combat encounter, you gain advantage on all attacks, saves, and checks for 1 minute.", "effect": { "on_last_conscious_party_member_gain_universal_advantage_1_minute": true } },
"Target Assessment": { "class": "assassin", "type": "utility", "cooldown": 0, "description": "As a bonus action, make a Wisdom (Insight) check against a creature's Charisma (Deception) to learn one piece of information (e.g., vulnerability, current HP range).", "effect": { "bonus_action_insight_vs_deception_learn_info": true } },
"Shadow Arts (Minor)": { "class": "assassin", "type": "utility", "cooldown": "short_rest", "description": "You can cast Darkness, Darkvision, Pass Without Trace, or Silence once without components.", "effect": { "cast_one_spell_no_components_darkness_darkvision_pass_without_trace_silence": true } },
"Swift Action (Hide/Dash)": { "class": "assassin", "type": "movement", "cooldown": 0, "description": "You can take the Hide or Dash action as a bonus action.", "effect": { "bonus_action_hide_or_dash": true } },
"Calculated Approach": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "If you spend a full round observing a target without acting, your first attack against them has advantage and is a critical hit on 19-20.", "effect": { "on_observe_1_round_first_attack_advantage_crit_19_20": true } },
"Death from the Shadows": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "If you attack a creature that is surprised and you are hidden, your first hit is automatically a critical hit.", "effect": { "on_attack_surprised_hidden_target_auto_crit": true } },
"Infiltration Expertise": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "You have advantage on checks made to bypass security, blend into crowds, or create false identities.", "effect": { "advantage_infiltration_related_checks": true } },
"Poisoner's Touch": { "class": "assassin", "type": "utility", "cooldown": 0, "description": "You can apply poison to a weapon as a bonus action.", "effect": { "bonus_action_apply_poison": true } },
"Create Opening": { "class": "assassin", "type": "utility", "cooldown": "short_rest", "description": "As an action, create a diversion or exploit a minor flaw, granting the next attack against the target (by anyone) advantage.", "effect": { "action_create_diversion_grant_next_attack_advantage_vs_target": true } },
"Vanish (Brief Invisibility)": { "class": "assassin", "type": "stealth", "cooldown": "short_rest", "description": "As a bonus action, become invisible until the end of your current turn.", "effect": { "bonus_action_invisible_until_end_of_turn": true } },
"Anatomical Insight": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "Your Mortal Strike / Sneak Attack damage dice increase by one step (e.g., d6 to d8).", "effect": { "buff_mortal_strike_sneak_attack_die_increase": true } },
"Impersonation": { "class": "assassin", "type": "utility", "cooldown": 0, "description": "You can flawlessly mimic speech patterns and mannerisms of someone you've observed for at least 1 hour.", "effect": { "utility_mimic_speech_mannerisms_observed_1_hour": true } },
"False Identity": { "class": "assassin", "type": "utility", "cooldown": "long_rest", "description": "Spend time and resources to create a convincing false identity with documentation.", "effect": { "utility_create_false_identity_with_docs": true } },
"Ghostly Presence": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "You make no sound when you move, unless you choose to.", "effect": { "passive_silent_movement": true } },
"Contingency Plan": { "class": "assassin", "type": "utility", "cooldown": "long_rest", "description": "Prepare a secret escape route or hidden cache in an area you've studied.", "effect": { "utility_prepare_escape_route_hidden_cache": true } },
"Exploit Weakness": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "If you know a creature's vulnerability (from Target Assessment or other means), your first hit against it exploiting that vulnerability deals maximum damage.", "effect": { "on_known_vulnerability_hit_deal_max_damage": true } },
"Blend into Crowd": { "class": "assassin", "type": "stealth", "cooldown": 0, "description": "You can attempt to hide even when only obscured by a crowd of creatures.", "effect": { "hide_condition_obscured_by_crowd": true } },
"Undetectable": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "You cannot be targeted by divination magic or perceived through magical scrying sensors against your will.", "effect": { "immune_divination_scrying_against_will": true } },
"Swift Poison Application": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "Applying poison to a weapon is a free action once per turn.", "effect": { "free_action_apply_poison_once_per_turn": true } },
"Potent Toxins": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "The save DC for poisons you apply increases by 2.", "effect": { "buff_poison_save_dc_increase_2": true } },
"Perfect Execution": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "When you use your Assassinate feature and hit, the target also suffers an additional effect (e.g., poisoned, bleeding) based on your choice.", "effect": { "on_assassinate_hit_add_chosen_effect_poisoned_bleeding": true } },
"Contingency Strike": { "class": "assassin", "type": "utility", "cooldown": "long_rest", "description": "Prepare a single attack to be delivered automatically under specific trigger conditions you set.", "effect": { "utility_prepare_triggered_automatic_attack": true } },
"Shadow Step": { "class": "assassin", "type": "movement", "cooldown": 0, "description": "As a bonus action, if you are in dim light or darkness, you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness.", "effect": { "bonus_action_teleport_shadows_60ft": true } },
"Isolate Target": { "class": "assassin", "type": "utility", "cooldown": "short_rest", "description": "Use stealth and diversions to separate one target from its group.", "effect": { "utility_isolate_target_from_group": true } },
"Sudden Death": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "Your Death Strike feature can now be used on any creature you have advantage against, not just surprised ones.", "effect": { "buff_death_strike_usability_on_advantage": true } },
"Inescapable Justice": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "Creatures trying to escape from you (e.g., Dash action) provoke opportunity attacks even if they wouldn't normally.", "effect": { "targets_escaping_provoke_opportunity_attacks": true } },
"Sense the Unseen": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "You are aware of the location of any invisible or hidden creature within 30 feet of you, provided you have line of sight to their space.", "effect": { "sense_invisible_hidden_creatures_30ft_line_of_sight": true } },
"Anticipate Ambush": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "You cannot be surprised.", "effect": { "immune_surprised": true } },
"Untouchable": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "Attackers have disadvantage on opportunity attacks made against you.", "effect": { "disadvantage_opportunity_attacks_vs_you": true } },
"Master of Evasion": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "When subjected to an effect that allows a Dexterity save for half damage, you instead take no damage on a success, and only half on a failure.", "effect": { "improved_evasion_dex_save_no_damage_on_success_half_on_fail": true } },
"One with the Night": { "class": "assassin", "type": "stealth", "cooldown": "short_rest", "description": "While in darkness, you are invisible to creatures that rely on darkvision.", "effect": { "condition_darkness_invisible_to_darkvision": true } },
"Fading Strike": { "class": "assassin", "type": "attack", "cooldown": "short_rest", "description": "After hitting with a melee attack, you can use your bonus action to become invisible and move up to half your speed.", "effect": { "on_melee_hit_bonus_action_invisible_move_half_speed": true } },
"Become Death": { "class": "assassin", "type": "ultimate", "cooldown": "long_rest", "description": "For 1 minute, you become a shadowy phantom. You gain resistance to all damage, can move through creatures and objects, and your attacks deal extra necrotic damage.", "effect": { "duration_1_minute_shadow_phantom_form_resist_all_move_through_extra_necrotic": true } },
"Finality": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "If you reduce a creature to 0 HP with your Mortal Strike or Assassinate feature, you regain a use of a short rest ability.", "effect": { "on_0_hp_with_mortal_strike_assassinate_regain_short_rest_ability_use": true } },
"Precise Shot": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Your ranged weapon attacks ignore half and three-quarters cover.", "effect": { "ranged_attacks_ignore_cover": true } },
"Keen Senses": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "You have advantage on Wisdom (Perception) checks.", "effect": { "advantage_perception_checks": true } },
"Ensnaring Strike (non-magical)": { "class": "hunter", "type": "attack", "cooldown": "short_rest", "description": "Your next hit with a ranged weapon attack can also ensnare the target, reducing its speed on a failed Strength save.", "effect": { "on_next_ranged_hit_ensnare_reduce_speed_save_str": true } },
"Patient Ambusher": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "If you haven't moved this turn, your first ranged attack has advantage.", "effect": { "condition_no_move_this_turn_first_ranged_attack_advantage": true } },
"Conclave Feature (e.g., Giant Killer)": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Hunter's Conclave.", "effect": { "utility": "hunter_conclave_specific_feature" } },
"Hunter's Eye": { "class": "hunter", "type": "utility", "cooldown": "short_rest", "description": "As a bonus action, gain advantage on your next attack roll against a creature you have marked with Hunter's Quarry.", "effect": { "bonus_action_advantage_next_attack_vs_quarry_target": true } },
"Rapid Shot": { "class": "hunter", "type": "attack", "cooldown": 0, "description": "You can make one additional ranged weapon attack as a bonus action.", "effect": { "bonus_action_additional_ranged_attack": true } },
"Covering Fire": { "class": "hunter", "type": "utility", "cooldown": "short_rest", "description": "As an action, you can lay down suppressing fire, imposing disadvantage on attacks made by enemies in a designated area.", "effect": { "action_suppressing_fire_area_disadvantage_enemy_attacks": true } },
"Multi-Shot": { "class": "hunter", "type": "attack", "cooldown": 0, "description": "(Hunter Conclave feature) Attack multiple targets in an area.", "effect": { "hunter_conclave_multi_shot_feature": true } },
"Crippling Shot": { "class": "hunter", "type": "attack", "cooldown": "short_rest", "description": "Your next ranged weapon hit can reduce the target's speed to 0 on a failed Constitution save.", "effect": { "on_next_ranged_hit_reduce_speed_to_0_save_con": true } },
"Horde Breaker": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "(Hunter Conclave feature) Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature within 5ft of the original target and in range of your weapon.", "effect": { "hunter_conclave_horde_breaker_feature": true } },
"Advanced Traps": { "class": "hunter", "type": "utility", "cooldown": 0, "description": "You can craft more potent or varied traps (e.g., explosive, magical).", "effect": { "utility_craft_advanced_traps_explosive_magical": true } },
"Evasion (Light Armor)": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "When subjected to an effect for Dex save for half damage, take no damage on success, half on fail, if wearing light or no armor.", "effect": { "dex_save_effect_no_damage_on_success_half_on_fail_light_no_armor": true } },
"Land's Stride": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Moving through nonmagical difficult terrain costs no extra movement. Advantage on saves vs. plants that impede movement.", "effect": { "movement_ignore_nonmagical_difficult_terrain_advantage_saves_vs_plant_movement_impede": true } },
"Pinning Shot": { "class": "hunter", "type": "attack", "cooldown": "short_rest", "description": "A ranged attack that, on hit, can pin a creature to a surface if it fails a Strength save, restraining it.", "effect": { "ranged_attack_on_hit_pin_restrain_save_str": true } },
"Camouflage": { "class": "hunter", "type": "stealth", "cooldown": 0, "description": "You can attempt to hide even when only lightly obscured by foliage, heavy rain, etc.", "effect": { "hide_condition_lightly_obscured_natural": true } },
"Master of the Hunt": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "You have advantage on initiative rolls and against creatures that haven't acted yet.", "effect": { "advantage_initiative_and_vs_creatures_not_acted": true } },
"Volley": { "class": "hunter", "type": "attack", "cooldown": 0, "description": "(Hunter Conclave feature) Make a ranged attack against any number of creatures within 10 feet of a point you can see.", "effect": { "hunter_conclave_volley_feature": true } },
"Stand Against the Tide": { "class": "hunter", "type": "defensive", "cooldown": 0, "description": "(Hunter Conclave feature) Reaction to force an attacker to target another creature within 5ft of you instead, if it misses you.", "effect": { "hunter_conclave_stand_against_the_tide_feature": true } },
"Called Shot": { "class": "hunter", "type": "attack", "cooldown": "short_rest", "description": "Make a ranged attack roll against a specific part of a creature (e.g., eye, wing). On hit, apply a condition (blinded, reduced fly speed) on failed Con save.", "effect": { "ranged_attack_called_shot_apply_condition_save_con": true } },
"Sudden Strike": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "If you take the Attack action on your first turn of combat, you can make one additional ranged weapon attack as part of that action.", "effect": { "first_turn_combat_attack_action_additional_ranged_attack": true } },
"Eyes of the Eagle": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "You have advantage on Wisdom (Perception) checks that rely on sight. You can see much farther than normal.", "effect": { "advantage_sight_perception_extended_range_sight": true } },
"No Escape": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Opportunity attacks you make stop the target's movement for the rest of their turn.", "effect": { "opportunity_attacks_stop_target_movement": true } },
"Leave No Trace": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "You and your group cannot be tracked by nonmagical means unless you choose to leave a trail.", "effect": { "group_cannot_be_tracked_nonmagically": true } },
"One with the Wild": { "class": "hunter", "type": "stealth", "cooldown": "short_rest", "description": "Become effectively invisible while in natural surroundings and stationary.", "effect": { "condition_natural_surroundings_stationary_become_invisible": true } },
"Giant Slayer (Improved)": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "(Hunter Conclave feature) Your Giant Killer feature deals more damage or has other benefits.", "effect": { "hunter_conclave_giant_killer_improved": true } },
"Perfected Ambush": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "If you attack a creature before it has taken any actions in combat, that attack is automatically a critical hit.", "effect": { "on_attack_before_target_acts_auto_crit": true } },
"Arrow-Catching": { "class": "hunter", "type": "defensive", "cooldown": 0, "description": "As a reaction when hit by a ranged weapon attack, reduce damage by 1d10 + Dex mod. If reduced to 0, you catch it.", "effect": { "reaction_on_ranged_weapon_hit_reduce_damage_catch_if_0": true } },
"Steel Will": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Advantage on saving throws against being frightened.", "effect": { "advantage_saves_vs_frightened_hunter": true } },
"Lethal Strike": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Your ranged weapon attacks score a critical hit on a roll of 19-20.", "effect": { "ranged_weapon_crit_range_19_20": true } },
"Unfaltering Aim": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "If you miss with a ranged weapon attack on your turn, you can use your bonus action to reroll that attack roll.", "effect": { "on_miss_ranged_attack_bonus_action_reroll": true } },
"Death Stroke": { "class": "hunter", "type": "attack", "cooldown": "long_rest", "description": "Once per long rest, if you hit with a ranged weapon attack, you can choose to make it a critical hit. If the target is your Hunter's Quarry, it must also make a Con save or be stunned for 1 minute.", "effect": { "once_per_long_rest_ranged_hit_auto_crit_stun_quarry_target_save_con": true } },
"The Ultimate Prey": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Once per long rest, you can designate one creature as your ultimate prey. You always know its location (if on same plane), have advantage on all attacks against it, and it has disadvantage on saves against your Hunter abilities.", "effect": { "designate_ultimate_prey_know_location_adv_attacks_disadv_saves_vs_hunter_abilities": true } },
"Speak with Spirits": { "class": "shaman", "type": "utility", "cooldown": 0, "description": "You can communicate with nature spirits, ancestral spirits, or minor elemental spirits.", "effect": { "utility_communicate_with_spirits": true } },
"Spiritual Weapon (Minor)": { "class": "shaman", "type": "summon", "cooldown": "short_rest", "description": "Summon a lesser spiritual weapon that makes attacks as a bonus action.", "effect": { "summon_lesser_spiritual_weapon_bonus_action_attack": true } },
"Healing Totem": { "class": "shaman", "type": "utility", "cooldown": 0, "description": "(Spirit Totem) Place a totem that heals allies in an aura.", "effect": { "spirit_totem_healing_aura_allies": true } },
"Earthbind Totem": { "class": "shaman", "type": "utility", "cooldown": 0, "description": "(Spirit Totem) Place a totem that reduces flying speed of enemies or pulls them down.", "effect": { "spirit_totem_reduce_flying_speed_pull_down_enemies": true } },
"Ancestral Protection": { "class": "shaman", "type": "defensive", "cooldown": "short_rest", "description": "Call upon ancestral spirits to protect an ally, imposing disadvantage on an attack roll against them.", "effect": { "target_ally_ancestral_protection_disadvantage_attack_vs_them": true } },
"Elemental Attunement": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You have resistance to one elemental damage type (chosen at level up) related to your spirit guide.", "effect": { "resistance_chosen_elemental_damage_type": true } },
"Ritual Casting": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You can cast shaman spells with the ritual tag as rituals.", "effect": { "utility_can_cast_shaman_ritual_spells_as_rituals": true } },
"Elemental Lash": { "class": "shaman", "type": "buff", "cooldown": 0, "description": "Imbue your weapon attacks with elemental energy (fire, cold, lightning) from your spirit guide, dealing extra damage.", "effect": { "buff_weapon_attacks_extra_elemental_damage_1d6": true } },
"Spirit Link": { "class": "shaman", "type": "utility", "cooldown": "short_rest", "description": "Link your spirit with an ally. You can choose to take half the damage they take (rounded down).", "effect": { "target_ally_link_spirits_take_half_their_damage": true } },
"Guardian Spirit": { "class": "shaman", "type": "summon", "cooldown": "long_rest", "description": "Summon a powerful guardian spirit (CR 2-3 beast or elemental) to fight alongside you.", "effect": { "summon_guardian_spirit_cr2_3_beast_elemental": true } },
"Stoneskin Totem": { "class": "shaman", "type": "utility", "cooldown": 0, "description": "(Spirit Totem) Place a totem that grants allies resistance to nonmagical physical damage.", "effect": { "spirit_totem_resistance_nonmagical_physical_aura_allies": true } },
"Vision Quest": { "class": "shaman", "type": "utility", "cooldown": "long_rest", "description": "Enter a trance to receive a vision or guidance from the spirit world.", "effect": { "utility_enter_trance_receive_spiritual_vision_guidance": true } },
"Ethereal Jaunt": { "class": "shaman", "type": "movement", "cooldown": "short_rest", "description": "Briefly step into the Ethereal Plane, becoming invisible and able to move through objects.", "effect": { "movement_ethereal_jaunt_invisible_move_through_objects_short_duration": true } },
"Walk Between Worlds": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You have advantage on saves against being banished or transported to another plane against your will.", "effect": { "advantage_saves_vs_banishment_planar_transport": true } },
"Ghostly Form": { "class": "shaman", "type": "buff", "cooldown": "long_rest", "description": "Become incorporeal for 1 minute, gaining resistance to nonmagical damage and ability to move through creatures/objects.", "effect": { "buff_incorporeal_form_1_minute_resistance_move_through": true } },
"Astral Projection (Self)": { "class": "shaman", "type": "utility", "cooldown": "long_rest", "description": "Project your astral self, allowing travel on the Astral Plane.", "effect": { "utility_astral_projection_self_travel_astral_plane": true } },
"Unleash Elements": { "class": "shaman", "type": "attack", "cooldown": "short_rest", "description": "Channel raw elemental power in an area, dealing damage of a chosen type (fire, cold, lightning).", "effect": { "aoe_20ft_radius_elemental_damage_choice_4d8_save_dex_half": true } },
"Immunity to Possession": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You cannot be possessed by spirits or other entities against your will.", "effect": { "immune_to_possession": true } },
"See the Unseen": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You can see invisible creatures and objects, as well as into the Ethereal Plane, within 30 feet.", "effect": { "passive_see_invisible_ethereal_30ft": true } },
"Twin Totems": { "class": "shaman", "type": "utility", "cooldown": 0, "description": "You can have two different Spirit Totems active simultaneously.", "effect": { "utility_can_have_two_active_spirit_totems": true } },
"Totemic Projection": { "class": "shaman", "type": "utility", "cooldown": "short_rest", "description": "Place your Spirit Totems at a range up to 60 feet.", "effect": { "utility_place_spirit_totems_at_range_60ft": true } },
"Spiritual Balance": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against being charmed or frightened by spirits or fey.", "effect": { "advantage_saves_vs_charm_frighten_spirits_fey": true } },
"Purge Spirits": { "class": "shaman", "type": "utility", "cooldown": "long_rest", "description": "Attempt to banish a possessing spirit from a creature or object, or end effects created by spirits.", "effect": { "utility_banish_possessing_spirit_end_spirit_effects": true } },
"Whispers of the Past": { "class": "shaman", "type": "utility", "cooldown": "short_rest", "description": "Touch an object or location to receive visions or impressions of its past significant events or owners.", "effect": { "utility_psychometry_visions_of_past_events_owners": true } },
"Glimpse the Future": { "class": "shaman", "type": "utility", "cooldown": "long_rest", "description": "Gain a brief, uncontrolled glimpse of a possible future event, granting advantage on one roll related to it.", "effect": { "utility_glimpse_future_event_advantage_one_related_roll": true } },
"Ancestral Swarm": { "class": "shaman", "type": "attack", "cooldown": "long_rest", "description": "(Spirit Guide Feature) Summon a swarm of ancestral spirits to attack and hinder enemies.", "effect": { "spirit_guide_feature_summon_ancestral_spirit_swarm_attack_hinder": true } },
"Spirit Form (Lesser)": { "class": "shaman", "type": "buff", "cooldown": "long_rest", "description": "Partially shift into the spirit world, gaining some incorporeal traits and resistances.", "effect": { "buff_lesser_spirit_form_incorporeal_traits_resistances": true } },
"Unending Watch": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You no longer need to sleep and cannot be surprised while meditating (trance).", "effect": { "passive_no_sleep_needed_no_surprise_while_meditating": true } },
"Wrath of the Spirits": { "class": "shaman", "type": "attack", "cooldown": "long_rest", "description": "Unleash the fury of all allied spirits, dealing massive damage in an area based on number of active totems/summons.", "effect": { "aoe_massive_damage_scales_with_active_spirits_totems": true } },
"Blessing of the Ancients": { "class": "shaman", "type": "buff", "cooldown": "long_rest", "description": "Channel ancient power to grant significant, long-lasting boons to yourself and allies (e.g., +1 to all saves, damage resistance).", "effect": { "buff_self_allies_long_lasting_boons_saves_resistance": true } },
"Become the Avatar": { "class": "shaman", "type": "ultimate", "cooldown": "long_rest", "description": "Merge with your Spirit Guide or a powerful nature spirit, becoming a mighty avatar with unique abilities.", "effect": { "transformation_spirit_avatar_form_unique_abilities": true } },
"One with the Great Spirit": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You are in constant communion with the spirit world, gaining profound insights and resilience against mortal frailties.", "effect": { "passive_constant_spirit_communion_insights_resilience": true } },
"Goading Attack": { "class": "gladiator", "type": "attack", "cooldown": 0, "description": "(Combat Flourish) On hit, force enemy to make Wis save or have disadvantage on attacks against targets other than you.", "effect": { "combat_flourish_goading_attack_disadvantage_vs_others_save_wis": true } },
"Battlefield Taunt": { "class": "gladiator", "type": "debuff", "cooldown": "short_rest", "description": "As a bonus action, taunt an enemy. It must make a Wisdom save or have disadvantage on attack rolls for 1 minute if it doesn't target you.", "effect": { "bonus_action_taunt_enemy_disadvantage_if_not_target_you_save_wis": true } },
"Pushing Attack": { "class": "gladiator", "type": "attack", "cooldown": 0, "description": "(Combat Flourish) On hit, push enemy up to 15 feet away if they fail a Strength save.", "effect": { "combat_flourish_pushing_attack_push_15ft_save_str": true } },
"Dramatic Parry": { "class": "gladiator", "type": "defensive", "cooldown": 0, "description": "(Combat Flourish) Add Acclaim die to AC against one melee attack as a reaction.", "effect": { "combat_flourish_dramatic_parry_add_acclaim_die_to_ac_reaction": true } },
"Style Feature (e.g., Retiarius, Secutor)": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Gladiator Style (e.g., trident & net, sword & board).", "effect": { "utility_gladiator_style_specific_feature": true } },
"Signature Pose": { "class": "gladiator", "type": "utility", "cooldown": "short_rest", "description": "Strike a pose to gain Acclaim points or impose a minor condition on a taunted foe.", "effect": { "action_signature_pose_gain_acclaim_or_minor_condition_taunted_foe": true } },
"Mocking Blow": { "class": "gladiator", "type": "attack", "cooldown": 3, "description": "An attack that deals no damage but forces the target to make a Wisdom save or attack you recklessly on its next turn.", "effect": { "attack_no_damage_force_reckless_attack_on_you_save_wis": true } },
"Feinting Attack": { "class": "gladiator", "type": "attack", "cooldown": 0, "description": "(Combat Flourish) Use bonus action to feint, giving advantage on your next attack roll against a creature this turn.", "effect": { "combat_flourish_feinting_attack_bonus_action_advantage_next_attack": true } },
"Spectacular Maneuver": { "class": "gladiator", "type": "utility", "cooldown": "short_rest", "description": "Perform an acrobatic feat or impressive display to gain Acclaim and possibly daze an opponent.", "effect": { "action_spectacular_maneuver_gain_acclaim_daze_opponent_save_wis": true } },
"Unrelenting Assault": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "If you hit with an attack, you can use your bonus action to make another attack with a different light weapon.", "effect": { "on_hit_bonus_action_attack_different_light_weapon": true } },
"Fan Shield": { "class": "gladiator", "type": "defensive", "cooldown": 0, "description": "(Style Feature) If using a shield, you can use it to grant allies partial cover.", "effect": { "style_feature_shield_grant_allies_partial_cover": true } },
"Net Mastery": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "(Style Feature) You are proficient with nets and can throw them more effectively or reload them faster.", "effect": { "style_feature_net_proficiency_improved_use": true } },
"Immunity to Frightened": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "You are immune to the frightened condition while you can see the source of your fear.", "effect": { "immune_frightened_if_can_see_source": true } },
"Inspire Allies": { "class": "gladiator", "type": "buff", "cooldown": "short_rest", "description": "Use your showmanship to grant nearby allies temporary HP or advantage on their next attack.", "effect": { "action_inspire_allies_temp_hp_or_advantage_next_attack": true } },
"Test of Mettle": { "class": "gladiator", "type": "utility", "cooldown": "short_rest", "description": "Challenge an opponent to a one-on-one duel. Other creatures are magically discouraged from interfering.", "effect": { "action_challenge_duel_discourage_interference": true } },
"Overpowering Attack": { "class": "gladiator", "type": "attack", "cooldown": "short_rest", "description": "Make an attack roll with advantage. If it hits, the target is pushed 10 feet and knocked prone.", "effect": { "attack_advantage_on_hit_push_10ft_prone": true } },
"Gain Acclaim on Crit": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "When you score a critical hit, you gain 1 Acclaim point.", "effect": { "on_critical_hit_gain_acclaim_point": true } },
"Stunning Critical": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "When you score a critical hit, the target must also make a Con save or be stunned for 1 round.", "effect": { "on_critical_hit_stun_target_save_con": true } },
"Sand in the Eyes": { "class": "gladiator", "type": "debuff", "cooldown": 0, "description": "(Style Feature / Dirty Trick) Temporarily blind an opponent.", "effect": { "style_feature_dirty_trick_blind_opponent_save_dex": true } },
"Master Duelist": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "You gain a +2 bonus to attack and damage rolls when fighting a single creature with no other creatures within 5 feet of you or it.", "effect": { "bonus_attack_damage_vs_isolated_single_target": 2 } },
"The People's Champion": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "You gain more Acclaim for successful maneuvers and your fame spreads faster.", "effect": { "passive_increased_acclaim_gain_faster_fame": true } },
"Finishing Flourish": { "class": "gladiator", "type": "attack", "cooldown": "short_rest", "description": "If you reduce a creature to 0 HP, you can make a spectacular display to gain significant Acclaim and inspire allies.", "effect": { "on_reduce_target_to_0_hp_gain_acclaim_inspire_allies": true } },
"Unbreakable Focus": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "Advantage on Constitution saving throws to maintain concentration on abilities or effects.", "effect": { "advantage_concentration_saves_abilities_effects": true } },
"Riposte": { "class": "gladiator", "type": "attack", "cooldown": 0, "description": "When a creature misses you with a melee attack, you can use your reaction to make a melee weapon attack against it.", "effect": { "on_enemy_melee_miss_reaction_melee_attack": true } },
"Recover Acclaim": { "class": "gladiator", "type": "utility", "cooldown": "short_rest", "description": "Spend a few moments playing to the crowd (or meditating on past glories) to regain spent Acclaim points.", "effect": { "action_recover_acclaim_points": true } },
"Gain Temporary HP": { "class": "gladiator", "type": "buff", "cooldown": 0, "description": "Part of 'Take a Bow'. Gain temporary HP based on Acclaim spent or performance.", "effect": { "buff_gain_temporary_hp_from_acclaim_or_performance": true } },
"Master of the Arena": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "(Style Capstone) Gain powerful benefits related to your chosen Gladiator Style.", "effect": { "style_capstone_powerful_style_benefits": true } },
"Unstoppable": { "class": "gladiator", "type": "passive", "cooldown": "long_rest", "description": "Once per long rest, if an attack would reduce you to 0 HP, you drop to 1 HP instead.", "effect": { "once_per_long_rest_drop_to_1_hp_instead_of_0": true } },
"Aura of Renown": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "Friendly creatures within 10 feet of you have advantage on saves against being frightened or charmed due to your inspiring presence.", "effect": { "aura_10ft_allies_advantage_saves_frightened_charmed": true } },
"Terrifying Entrance": { "class": "gladiator", "type": "utility", "cooldown": "long_rest", "description": "When you enter combat, you can make an Intimidation check to frighten all enemies within 30 feet who can see you.", "effect": { "on_combat_start_intimidation_check_frighten_enemies_30ft": true } },
"Perfected Form": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "Your attacks score a critical hit on a 19-20, and you can reroll one damage die on critical hits.", "effect": { "crit_range_19_20_reroll_one_damage_die_on_crit": true } },
"Deathblow": { "class": "gladiator", "type": "attack", "cooldown": "long_rest", "description": "If you hit a creature that has less than 25% of its maximum HP, you can choose to force it to make a Con save. On failure, it drops to 0 HP.", "effect": { "on_hit_target_below_25_percent_hp_save_con_or_0_hp": true } },
"Enter Perfect Showmanship": { "class": "gladiator", "type": "buff", "cooldown": "long_rest", "description": "For 1 minute, all your Combat Flourishes are free, you gain maximum Acclaim for any action that grants it, and enemies have disadvantage on attacks against you.", "effect": { "duration_1_minute_free_flourishes_max_acclaim_enemy_disadvantage_vs_you": true } },
"God of the Arena": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "You can choose to succeed on any Strength, Dexterity, or Charisma saving throw. You can use this feature three times per long rest.", "effect": { "auto_succeed_str_dex_cha_save_3_times_long_rest": true } },
"Hidden Blade": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "You have advantage on attack rolls with daggers or shortswords against surprised creatures.", "effect": { "advantage_daggers_shortswords_vs_surprised": true } },
"Acrobatic Movement": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "Your speed increases by 10 feet, and you have advantage on Dexterity (Acrobatics) checks made to balance or tumble.", "effect": { "speed_increase_10ft_advantage_acrobatics_balance_tumble": true } },
"Shadow Step": { "class": "ninja", "type": "movement", "cooldown": 0, "description": "(Ki Ability) Spend 1 Ki. As a bonus action, if in dim light/darkness, teleport up to 60ft to another dim/dark spot.", "effect": { "cost_ki": 1, "bonus_action_teleport_shadows_60ft": true } },
"Swift Action": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "You can take the Dash, Disengage, or Hide action as a bonus action.", "effect": { "bonus_action_dash_disengage_hide": true } },
"Clan Feature (e.g., Phantom Illusion)": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Shinobi Clan.", "effect": { "utility": "shinobi_clan_specific_feature" } },
"Smoke Bomb": { "class": "ninja", "type": "utility", "cooldown": "short_rest", "description": "As an action, create a 20-foot radius sphere of smoke, heavily obscuring the area for 1 minute.", "effect": { "action_create_smoke_bomb_20ft_radius_obscured_1_minute": true } },
"Substitution Jutsu": { "class": "ninja", "type": "defensive", "cooldown": "short_rest", "description": "When hit by an attack, use your reaction to substitute yourself with a nearby object (log, illusion), taking no damage and moving 10ft.", "effect": { "on_hit_reaction_substitute_object_no_damage_move_10ft": true } },
"Wall Running": { "class": "ninja", "type": "movement", "cooldown": 0, "description": "You can move along vertical surfaces and across liquids on your turn without falling during the move.", "effect": { "movement_walk_on_walls_liquids_during_move": true } },
"Silent Ambush": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "If you attack from hiding, the target has disadvantage on its Wisdom (Perception) check to notice you before the attack.", "effect": { "on_attack_from_hiding_target_disadvantage_perception_to_notice": true } },
"Chain Attack": { "class": "ninja", "type": "attack", "cooldown": 0, "description": "After hitting with a light melee weapon, you can make an additional attack with a different light melee weapon as part of the same Attack action (if dual wielding).", "effect": { "on_light_weapon_hit_additional_attack_different_light_weapon_dual_wield": true } },
"Improved Ninjutsu": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "The Ki cost of your Ninjutsu Arts is reduced, or their effects are enhanced.", "effect": { "buff_ninjutsu_arts_reduced_ki_cost_or_enhanced_effects": true } },
"Elemental Kunai": { "class": "ninja", "type": "utility", "cooldown": "short_rest", "description": "Spend 1 Ki. For 1 minute, kunai or shuriken you throw deal an extra 1d4 elemental damage (fire, cold, lightning).", "effect": { "cost_ki": 1, "duration_1_minute_kunai_shuriken_extra_1d4_elemental_damage": true } },
"Poisoner's Touch": { "class": "ninja", "type": "utility", "cooldown": 0, "description": "You can apply poison to a weapon as a bonus action and are proficient with Poisoner's Kit.", "effect": { "bonus_action_apply_poison_proficiency_poisoner_kit": true } },
"Blink Step": { "class": "ninja", "type": "movement", "cooldown": "short_rest", "description": "Spend 2 Ki. As a bonus action, teleport up to 30 feet. You can do this before or after your action.", "effect": { "cost_ki": 2, "bonus_action_teleport_30ft": true } },
"Heightened Senses": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "Advantage on Wisdom (Perception) checks and you cannot be surprised while conscious.", "effect": { "advantage_perception_checks_no_surprise_conscious": true } },
"Water Walking": { "class": "ninja", "type": "movement", "cooldown": 0, "description": "Spend 1 Ki. For 10 minutes, you can move across any liquid surface as if it were solid ground.", "effect": { "cost_ki": 1, "duration_10_minutes_walk_on_liquids": true } },
"Iaijutsu (Quick Draw Strike)": { "class": "ninja", "type": "attack", "cooldown": "short_rest", "description": "If you draw a melee weapon and attack with it in the same turn, you have advantage on the attack roll and deal extra damage equal to your Dexterity modifier.", "effect": { "on_draw_and_attack_same_turn_advantage_extra_dex_mod_damage": true } },
"Master of Disguise": { "class": "ninja", "type": "utility", "cooldown": 0, "description": "You can cast Disguise Self at will. You have advantage on Charisma (Deception) checks made while disguised.", "effect": { "cast_disguise_self_at_will_advantage_deception_while_disguised": true } },
"Undetectable": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "You cannot be targeted by divination magic or perceived through magical scrying sensors against your will.", "effect": { "immune_divination_scrying_against_will_ninja": true } },
"Advanced Ninjutsu": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "You learn more powerful or versatile Ninjutsu Arts from your clan.", "effect": { "learn_advanced_ninjutsu_arts": true } },
"Flickering Defense": { "class": "ninja", "type": "defensive", "cooldown": "short_rest", "description": "Spend 1 Ki. As a reaction when hit by an attack, impose disadvantage on the attack roll, potentially causing it to miss.", "effect": { "cost_ki": 1, "reaction_on_hit_impose_disadvantage_on_attack": true } },
"Create Duplicate": { "class": "ninja", "type": "utility", "cooldown": "long_rest", "description": "Spend 3 Ki. Create a shadowy, illusory duplicate of yourself that lasts for 1 minute or until destroyed. It can take simple actions but not attack.", "effect": { "cost_ki": 3, "create_illusory_duplicate_1_minute_simple_actions": true } },
"Misdirection": { "class": "ninja", "type": "defensive", "cooldown": "short_rest", "description": "When targeted by an attack while an enemy is within 5ft of you, use reaction to force the attack to target that enemy instead.", "effect": { "on_targeted_by_attack_if_enemy_adjacent_redirect_attack_to_enemy": true } },
"Assassinate": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "During your first turn, you have advantage on attack rolls against any creature that hasn't taken a turn. Any hit you score against a surprised creature is a critical hit.", "effect": { "first_turn_advantage_vs_not_acted_crit_vs_surprised": true } },
"Pressure Point Strike": { "class": "ninja", "type": "attack", "cooldown": "short_rest", "description": "Spend 2 Ki. On hit with unarmed strike, target must make Con save or suffer a condition (e.g., poisoned, blinded, deafened) for 1 minute.", "effect": { "cost_ki": 2, "on_unarmed_hit_apply_condition_save_con_1_minute": true } },
"Read Lips": { "class": "ninja", "type": "utility", "cooldown": 0, "description": "You can understand speech by reading lips if you can see the speaker's mouth and they are speaking a language you know.", "effect": { "utility_read_lips": true } },
"Silent Communication": { "class": "ninja", "type": "utility", "cooldown": 0, "description": "You can use subtle gestures and signals to communicate complex messages silently with those who share your training.", "effect": { "utility_silent_complex_communication_trained_allies": true } },
"Forbidden Jutsu": { "class": "ninja", "type": "utility", "cooldown": "long_rest", "description": "(Clan Capstone) Access to a powerful, clan-specific secret technique with significant effects.", "effect": { "clan_capstone_forbidden_jutsu_powerful_effect": true } },
"Elemental Fury": { "class": "ninja", "type": "buff", "cooldown": "long_rest", "description": "Spend 4 Ki. For 1 minute, your weapon attacks deal an additional 2d6 elemental damage (chosen type).", "effect": { "cost_ki": 4, "duration_1_minute_weapon_attacks_extra_2d6_elemental_damage": true } },
"Empty Mind": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against being charmed or frightened, and resistance to psychic damage.", "effect": { "advantage_saves_charmed_frightened_resistance_psychic": true } },
"One with the Shadows": { "class": "ninja", "type": "stealth", "cooldown": "short_rest", "description": "While in dim light or darkness, you can use your action to become invisible. You remain invisible until you attack, cast a spell, or enter bright light.", "effect": { "condition_dim_light_darkness_action_invisible_until_action_or_bright_light": true } },
"Death Strike": { "class": "ninja", "type": "attack", "cooldown": "long_rest", "description": "If you hit a surprised creature with a melee weapon attack, it must make a Constitution saving throw. On a failed save, double the damage of your attack against the creature.", "effect": { "on_hit_surprised_creature_melee_save_con_or_double_damage": true } },
"True Invisibility": { "class": "ninja", "type": "stealth", "cooldown": "long_rest", "description": "Spend 5 Ki. You become invisible for up to 1 hour, even if you attack or cast spells.", "effect": { "cost_ki": 5, "status_invisible_1_hour_persists_through_actions": true } },
"Phantom Assault": { "class": "ninja", "type": "attack", "cooldown": "long_rest", "description": "As an action, make a melee attack against a target. On a hit, you deal normal damage and can teleport to an unoccupied space within 5 feet of another creature within 30 feet, then make another attack against that new creature. You can repeat this up to 3 times.", "effect": { "action_phantom_assault_chain_attacks_teleport_up_to_3_times": true } },
    "Perfect Hunter": { class: "ranger", type: "passive", cooldown: 0, description: "You always know the location of any of your Favored Enemies within 1 mile of you, provided they are not hidden by magical means.", effect: { know_favored_enemy_location_1_mile_nonmagical_hiding: true } },
"Mind Thrust": { "class": "psychic", "type": "attack", "cooldown": 3, "description": "A direct mental assault against a target.", "effect": { "damage": "2d8 psychic", "range": "60 feet", "save": "Wisdom for half" } },
"Telekinetic Shove": { "class": "psychic", "type": "utility", "cooldown": 2, "description": "Shove a creature or object telekinetically.", "effect": { "range": "30 feet", "action": "push", "distance": "10 feet", "check": "Strength save" } },
"Precognitive Dodge": { "class": "psychic", "type": "defensive", "cooldown": "short_rest", "description": "As a reaction to an attack, impose disadvantage on the attack roll.", "effect": { "trigger": "on_attacked", "action": "impose_disadvantage" } },
"Mental Shield": { "class": "psychic", "type": "buff", "cooldown": 5, "description": "Gain resistance to psychic damage for 1 minute.", "effect": { "resistance": "psychic", "duration": 10 } },
"Telekinetic Lift": { "class": "psychic", "type": "utility", "cooldown": 0, "description": "Lift and move objects up to 100 lbs telekinetically.", "effect": { "utility": "telekinesis_light_objects" } },
"Mind Spike": { "class": "psychic", "type": "attack", "cooldown": 4, "description": "Deal 3d8 psychic damage and the target has disadvantage on its next Wisdom save.", "effect": { "damage": "3d8 psychic", "debuff": "disadvantage_next_wis_save" } },
"Psychic Blast": { "class": "psychic", "type": "attack", "cooldown": "short_rest", "description": "Unleash a cone of psychic energy dealing 4d6 psychic damage.", "effect": { "aoe": "15_feet_cone", "damage": "4d6_psychic", "save": "Intelligence_half" } },
"Aura Reading": { "class": "psychic", "type": "utility", "cooldown": 0, "description": "You can attempt to read the emotional state or surface thoughts of creatures with a successful Insight check.", "effect": { "skill_check": "insight", "utility": "read_emotions_surface_thoughts" } },
"Psychic Crush": { "class": "psychic", "type": "attack", "cooldown": "long_rest", "description": "Attempt to overwhelm a creature's mind, dealing 8d6 psychic damage and stunning them on a failed Int save.", "effect": { "damage": "8d6_psychic", "status": "stunned", "save": "Intelligence" } },
"Astral Projection (Self, Short)": { "class": "psychic", "type": "utility", "cooldown": "long_rest", "description": "Briefly project your astral form a short distance for exploration.", "effect": { "utility": "short_range_astral_projection" } },
"Mind Over Body": { "class": "psychic", "type": "buff", "cooldown": "short_rest", "description": "Use your mental fortitude to overcome physical ailments, ending one condition like poisoned or diseased.", "effect": { "action": "end_condition_self", "conditions": ["poisoned", "diseased"] } },
"Telekinetic Wave": { "class": "psychic", "type": "attack", "cooldown": 5, "description": "Emit a wave of telekinetic force, pushing multiple creatures back.", "effect": { "aoe": "30_feet_cone", "action": "push_all_targets", "distance": "15_feet", "save": "Strength" } },
"Thought Shield": { "class": "psychic", "type": "passive", "cooldown": 0, "description": "You have resistance to psychic damage and advantage on saves against mind-altering effects.", "effect": { "resistance": "psychic", "advantage_saves_vs_mind_altering": true } },
"Psychic Intrusion": { "class": "psychic", "type": "utility", "cooldown": "short_rest", "description": "Subtly implant a simple suggestion into a creature's mind.", "effect": { "utility": "implant_suggestion", "save": "Wisdom" } },
"Mind Flay": { "class": "psychic", "type": "attack", "cooldown": 6, "description": "Assault a creature's mind with tendrils of psychic energy, dealing continuous damage for several rounds.", "effect": { "damage_over_time": "2d6_psychic_per_round", "duration": 3, "save_each_round_to_end": "Intelligence" } },
"Telekinetic Barrier": { "class": "psychic", "type": "defensive", "cooldown": "short_rest", "description": "Create a temporary wall of telekinetic force that provides cover.", "effect": { "utility": "create_force_barrier_cover", "duration": "1_minute" } },
"Fracture Mind": { "class": "psychic", "type": "attack", "cooldown": "long_rest", "description": "Cause a creature's mind to fragment, imposing severe penalties or temporary madness.", "effect": { "status": ["confused", "penalties_to_rolls"], "save": "Intelligence", "duration": "1_minute" } },
"Remote Viewing": { "class": "psychic", "type": "utility", "cooldown": "short_rest", "description": "Project your senses to a location you are familiar with.", "effect": { "utility": "project_senses_to_location" } },
"Psychic Constructs": { "class": "psychic", "type": "utility", "cooldown": 0, "description": "Create simple objects out of solidified psychic energy (e.g., a shield, a short blade).", "effect": { "utility": "create_psychic_energy_objects" } },
"Mental Fortress": { "class": "psychic", "type": "passive", "cooldown": 0, "description": "Your mind is exceptionally resilient, granting you a bonus to Wisdom and Intelligence saving throws.", "effect": { "bonus_saves": ["wisdom", "intelligence"], "value": 2 } },
"Psychic Singularity": { "class": "psychic", "type": "ultimate", "cooldown": "long_rest", "description": "Create a point of immense psychic pressure that draws in and crushes nearby enemies.", "effect": { "aoe_pull": "30_feet_radius_to_center", "damage_center": "10d10_force_psychic", "duration": "1_round" } },
"Ego Whip": { "class": "psychic", "type": "attack", "cooldown": 5, "description": "Lash out with psychic force, potentially stunning or imposing disadvantage on the target's attacks.", "effect": { "damage": "4d8_psychic", "status_on_fail_save": ["stunned_1_round", "disadvantage_attacks_1_round"], "save": "Wisdom" } },
"Telekinetic Flight": { "class": "psychic", "type": "movement", "cooldown": 0, "description": "You can use your psionic power to fly with a speed equal to your walking speed.", "effect": { "movement_mode": "fly", "speed": "walking_speed" } },
"Astral Projection (Group)": { "class": "psychic", "type": "utility", "cooldown": "long_rest", "description": "Project yourself and willing allies onto the Astral Plane.", "effect": { "utility": "group_astral_projection" } },
"Mind Prison": { "class": "psychic", "type": "attack", "cooldown": "long_rest", "description": "Trap a creature's consciousness within a mental prison, rendering it catatonic.", "effect": { "status": "catatonic", "save": "Intelligence", "duration": "concentration_up_to_1_hour" } },
"Psychic Avatar": { "class": "psychic", "type": "buff", "cooldown": "long_rest", "description": "Transform into a being of pure psionic energy, gaining enhanced abilities and resistances.", "effect": { "transformation": "psionic_energy_form", "duration": "1_minute", "enhancements": "various_psionic_powers" } },
"Psionic Nova": { "class": "psychic", "type": "attack", "cooldown": "long_rest", "description": "Release an explosion of psychic energy, damaging and potentially stunning all creatures in a wide radius.", "effect": { "aoe": "30_feet_radius", "damage": "12d6_psychic", "status_on_fail_save": "stunned_1_round", "save": "Intelligence" } },
"Mind Palace": { "class": "psychic", "type": "passive", "cooldown": 0, "description": "You have a perfectly organized mental space for storing and retrieving information with flawless accuracy.", "effect": { "utility": "perfect_memory_organization_retrieval" } },
"Telekinetic Warp": { "class": "psychic", "type": "utility", "cooldown": "short_rest", "description": "Instantly teleport yourself or another willing creature a short distance.", "effect": { "utility": "short_range_teleport_self_or_other", "range": "60_feet" } },
"Cognitive Overload": { "class": "psychic", "type": "attack", "cooldown": "short_rest", "description": "Flood a creature's mind with information, imposing disadvantage on all checks and saves for a short time.", "effect": { "debuff": "disadvantage_all_checks_saves", "duration": "1_minute", "save": "Intelligence_negates" } },
"Ascended Mind": { "class": "psychic", "type": "passive", "cooldown": 0, "description": "Your mind operates at a higher level of consciousness, granting bonuses to mental skills.", "effect": { "bonus": "advantage on Intelligence saves", "resistance": "psychic damage" } },
"Total Recall": { "class": "psychic", "type": "utility", "cooldown": "long_rest", "description": "Perfectly recall any information you have seen or heard.", "effect": { "utility": "perfect memory recall" } },
"Holy Strike": { "class": "paladin", "type": "attack", "cooldown": 0, "description": "Your weapon attacks deal an additional 1d8 radiant damage once per turn.", "effect": { "bonus_damage": "1d8 radiant", "trigger": "on_weapon_hit", "frequency": "once_per_turn" } },
"Righteous Charge": { "class": "paladin", "type": "movement", "cooldown": 4, "description": "Charge towards an enemy, gaining advantage on your next attack if you move at least 10ft.", "effect": { "movement": "speed_bonus", "condition": "move_10ft_min", "bonus": "advantage_next_attack" } },
"Protective Ward": { "class": "paladin", "type": "defensive", "cooldown": "short_rest", "description": "As a reaction, grant an ally within 10 feet +2 AC against one attack.", "effect": { "trigger": "ally_attacked", "range": "10_feet", "bonus_ac_target_ally": 2 } },
"Vow of Enmity": { "class": "paladin", "type": "buff", "cooldown": "short_rest", "description": "As a bonus action, choose one creature. Gain advantage on attack rolls against it for 1 minute.", "effect": { "target_enemy": true, "bonus": "advantage_on_attacks_vs_target", "duration": "1_minute" } },
"Channel Divinity (1/rest)": { "class": "paladin", "type": "utility", "cooldown": "short_rest", "description": "You gain one use of your Channel Divinity options.", "effect": { "resource_gain": "channel_divinity_use", "count": 1 } },
"Turn the Unholy": { "class": "paladin", "type": "utility", "cooldown": 0, "description": "(Channel Divinity Option) Turn undead and fiends.", "effect": { "action": "turn_undead_fiends", "part_of": "Channel Divinity" } },
"Aura of Devotion (Minor)": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "You and friendly creatures within 5 feet cannot be charmed.", "effect": { "aura_range": "5_feet", "immune_friendly_creatures": "charmed" } },
"Consecrated Ground": { "class": "paladin", "type": "utility", "cooldown": "long_rest", "description": "Designate an area as consecrated, hindering undead and fiends.", "effect": { "aoe": "30_feet_radius", "effect_on_undead_fiends": "disadvantage_or_damage", "duration": "1_hour" } },
"Blinding Smite": { "class": "paladin", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Your next weapon hit deals extra radiant damage and may blind the target.", "effect": { "trigger": "next_weapon_hit", "bonus_damage": "3d8_radiant", "status_on_fail_save": "blinded", "save": "Constitution" } },
"Crusader's Mantle": { "class": "paladin", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Allies in an aura deal extra radiant damage with weapon attacks.", "effect": { "aura_range": "30_feet", "buff_allies_weapon_attacks": "1d4_radiant_damage" } },
"Divine Steed (Summon)": { "class": "paladin", "type": "summon", "cooldown": "long_rest", "description": "Summon a celestial steed to serve as your mount.", "effect": { "summon": "celestial_steed" } },
"Retributive Strike": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "When an enemy damages an ally within your aura, you can use your reaction to attack that enemy.", "effect": { "trigger": "enemy_damages_ally_in_aura", "action": "reaction_attack_enemy" } },
"Sacred Weapon": { "class": "paladin", "type": "buff", "cooldown": 0, "description": "(Channel Divinity Option) Imbue your weapon with divine energy, adding Charisma modifier to attack rolls.", "effect": { "part_of": "Channel Divinity", "buff_weapon": "add_cha_to_attack_rolls", "duration": "1_minute" } },
"Holy Rebuke": { "class": "paladin", "type": "defensive", "cooldown": "short_rest", "description": "When hit by a creature within 5 feet, use reaction to deal radiant damage to attacker.", "effect": { "trigger": "hit_by_adjacent_creature", "action": "reaction_deal_radiant_damage", "damage": "2d8_radiant" } },
"Divine Judgment": { "class": "paladin", "type": "attack", "cooldown": "long_rest", "description": "Call down divine judgment, dealing massive radiant damage to a single target.", "effect": { "target_enemy": true, "damage": "10d6_radiant", "save_for_half": "Wisdom" } },
"Guardian's Shield": { "class": "paladin", "type": "defensive", "cooldown": "short_rest", "description": "As a bonus action, grant yourself or an ally temporary HP.", "effect": { "target_self_or_ally": true, "temp_hp": "level_plus_cha_mod" } },
"Wave of Righteousness": { "class": "paladin", "type": "attack", "cooldown": "long_rest", "description": "Unleash a wave of divine energy, damaging enemies and healing allies in an area.", "effect": { "aoe": "30_feet_cone", "damage_enemies": "4d6_radiant", "heal_allies": "4d6_hp" } },
"Lingering Light": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "When you use Divine Smite, the target sheds dim light for 1 minute.", "effect": { "trigger": "on_divine_smite", "effect_on_target": "sheds_dim_light_5ft_1_min" } },
"Exorcism": { "class": "paladin", "type": "utility", "cooldown": "long_rest", "description": "Attempt to banish a fiend, fey, or celestial back to its home plane.", "effect": { "target_creature_type": ["fiend", "fey", "celestial"], "action": "banish_attempt", "save": "Charisma" } },
"Unyielding Spirit": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against being paralyzed or stunned.", "effect": { "advantage_saves_vs_paralyzed_stunned": true } },
"Holy Weapon": { "class": "paladin", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Imbue a weapon with holy power, causing it to deal extra radiant damage and emit bright light.", "effect": { "target_weapon": true, "bonus_damage": "2d8_radiant", "effect": "emits_bright_light_30ft", "duration": "1_hour" } },
"Judgment of the Heavens": { "class": "paladin", "type": "attack", "cooldown": "long_rest", "description": "Call down a pillar of holy fire on a target, dealing radiant damage and potentially blinding them.", "effect": { "target_enemy": true, "aoe_pillar": "5_feet_radius_40_feet_high", "damage": "6d10_radiant", "status_on_fail_save": "blinded", "save": "Dexterity" } },
"Divine Intervention (Lesser)": { "class": "paladin", "type": "utility", "cooldown": "long_rest", "description": "A lesser chance to call upon your deity for aid.", "effect": { "utility": "lesser_divine_intervention_chance" } },
"Aura of Warding": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "You and friendly creatures within 10 feet have resistance to damage from spells.", "effect": { "aura_range": "10_feet", "resistance_friendly_creatures": "damage_from_spells" } },
"Find Greater Steed": { "class": "paladin", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Summon a more powerful celestial steed (e.g., griffon, pegasus).", "effect": { "summon": "greater_celestial_steed" } },
"Final Stand": { "class": "paladin", "type": "buff", "cooldown": "long_rest", "description": "When you drop to 0 HP, you can choose to remain at 1 HP and gain significant bonuses for 1 minute before falling unconscious.", "effect": { "trigger": "hp_to_0", "action": "remain_at_1_hp_gain_bonuses", "duration_bonuses": "1_minute" } },
"Aura of Justice": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "Enemies within your aura have disadvantage on saves against your Channel Divinity options.", "effect": { "aura_range": "10_feet", "debuff_enemies_in_aura": "disadvantage_saves_vs_your_channel_divinity" } },
"Vessel of Divine Light": { "class": "paladin", "type": "buff", "cooldown": "long_rest", "description": "Become a beacon of divine light, healing allies and harming fiends/undead around you.", "effect": { "transformation": "beacon_of_light", "duration": "1_minute", "heal_allies_in_aura": "2d6_per_round", "damage_fiends_undead_in_aura": "2d6_radiant_per_round" } },
"Avenging Angel": { "class": "paladin", "type": "buff", "cooldown": "long_rest", "description": "(Oath Feature) Transform, gaining flight and other powerful boons.", "effect": { "transformation": "avenging_angel_form", "duration": "1_hour", "abilities": ["flight", "enhanced_smites"] } },
"Aura of Sanctity": { "class": "paladin", "type": "passive", "cooldown": 0, "description": "You and allies in your aura are protected from curses and diseases.", "effect": { "aura_range": "30_feet", "immune_friendly_creatures": ["curses", "diseases"] } },
"Bulwark of Faith": { "class": "paladin", "type": "defensive", "cooldown": "short_rest", "description": "As an action, grant yourself and nearby allies significant temporary hit points.", "effect": { "aoe_buff_allies": "30_feet_radius", "temp_hp": "2_times_paladin_level" } },
"Wrath of God": { "class": "paladin", "type": "attack", "cooldown": "long_rest", "description": "A devastating divine attack affecting a large area, dealing immense radiant damage.", "effect": { "aoe": "60_feet_radius", "damage": "15d6_radiant", "save_for_half": "Dexterity" } },
"Avatar of Divine Wrath": { "class": "paladin", "type": "ultimate", "cooldown": "long_rest", "description": "Embody the full power of your deity, becoming nearly unstoppable for a short time.", "effect": { "transformation": "divine_avatar_form", "duration": "1_minute", "bonuses": "massive_stat_increases_immunities_powerful_attacks" } },
"Ultimate Sacrifice": { "class": "paladin", "type": "utility", "cooldown": "once_ever", "description": "Sacrifice your life to achieve a monumental divine act (e.g., mass resurrection, destroying a major evil).", "effect": { "utility": "self_sacrifice_for_major_divine_act" } },
"Cutting Words": { "class": "bard", "type": "debuff", "cooldown": 0, "description": "(Bardic Inspiration use) Use reaction to expend one use of Bardic Inspiration, roll the die, and subtract the number from creature's attack roll, ability check, or damage roll.", "effect": { "trigger": "creature_makes_roll", "action": "reaction_expend_inspiration_subtract_from_roll" } },
"Inspire Courage": { "class": "bard", "type": "buff", "cooldown": 0, "description": "(Bardic Inspiration use) Grant Bardic Inspiration die to an ally to add to an attack roll, ability check, or saving throw.", "effect": { "target_ally": true, "action": "grant_inspiration_die" } },
"Rallying Performance": { "class": "bard", "type": "buff", "cooldown": "short_rest", "description": "Grant temporary HP to allies who can hear your performance.", "effect": { "aoe_allies_can_hear": true, "temp_hp": "bardic_inspiration_die_plus_cha_mod" } },
"Distracting Tune": { "class": "bard", "type": "debuff", "cooldown": "short_rest", "description": "Impose disadvantage on an enemy's concentration save or Wisdom (Perception) check.", "effect": { "target_enemy": true, "debuff": ["disadvantage_concentration_save", "disadvantage_perception_check"] } },
"Soothing Melody": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "Calm hostile creatures or end fear effects on allies.", "effect": { "action": ["calm_hostiles_non_combat", "end_fear_effects_allies"] } },
"Discordant Note": { "class": "bard", "type": "attack", "cooldown": 4, "description": "Deal psychic damage and potentially disrupt a spellcaster's concentration.", "effect": { "damage": "2d6_psychic", "target_spellcaster_check_concentration": true, "save": "Wisdom" } },
"Harmonize": { "class": "bard", "type": "buff", "cooldown": 0, "description": "When an ally uses your Bardic Inspiration, you gain a lesser benefit (e.g., temp HP).", "effect": { "trigger": "ally_uses_inspiration", "buff_self": "temp_hp_equal_inspiration_die_rolled_half" } },
"Echoing Refrain": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "The next spell you cast with a verbal component has its effects linger or repeat once.", "effect": { "buff_next_verbal_spell": "lingering_or_repeated_effect" } },
"Counter-aria": { "class": "bard", "type": "defensive", "cooldown": "short_rest", "description": "Use your performance to attempt to counter a spell being cast (similar to Counterspell, but uses Bardic Inspiration).", "effect": { "action": "attempt_spell_counter_with_inspiration_die" } },
"Crescendo": { "class": "bard", "type": "buff", "cooldown": "long_rest", "description": "Build up musical energy to unleash a powerful effect, such as a burst of healing or damaging sound.", "effect": { "action_build_up_energy": true, "release_effect_choice": ["aoe_heal_4d8", "aoe_damage_4d8_thunder"] } },
"Song of Freedom": { "class": "bard", "type": "utility", "cooldown": "long_rest", "description": "Perform a song that can break enchantments or free creatures from magical restraints.", "effect": { "action": "break_enchantments_magical_restraints" } },
"Enthralling Oration": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "Captivate a crowd with your speech, making them more receptive to your ideas.", "effect": { "target_crowd": true, "effect": "increased_receptiveness_persuasion_advantage" } },
"Symphony of Heroes": { "class": "bard", "type": "buff", "cooldown": "long_rest", "description": "Inspire allies with a grand symphony, granting them significant combat bonuses for a short duration.", "effect": { "aoe_allies_can_hear": true, "buff": "advantage_attacks_saves_temp_hp", "duration": "1_minute" } },
"Dissonant Whisper (Improved)": { "class": "bard", "type": "passive", "cooldown": 0, "description": "Your Dissonant Whispers spell deals more damage or has a higher save DC.", "effect": { "buff_spell": "dissonant_whispers_improved" } },
"Perfect Pitch": { "class": "bard", "type": "passive", "cooldown": 0, "description": "You have advantage on Performance checks involving music and can perfectly replicate any tune.", "effect": { "advantage_performance_music": true, "utility": "perfect_tune_replication" } },
"Chords of Power": { "class": "bard", "type": "utility", "cooldown": 0, "description": "Certain musical chords you play can have minor magical effects (e.g., mending, light).", "effect": { "utility": "minor_magic_effects_via_music" } },
"Masterpiece": { "class": "bard", "type": "utility", "cooldown": "long_rest", "description": "Create a temporary work of art (song, poem, etc.) that has a powerful magical effect based on its theme.", "effect": { "action": "create_magical_masterpiece" } },
"Fascinate (Improved)": { "class": "bard", "type": "passive", "cooldown": 0, "description": "Your ability to fascinate creatures with your performance is enhanced (more targets or longer duration).", "effect": { "buff_ability": "fascinate_improved" } },
"Universal Language": { "class": "bard", "type": "passive", "cooldown": 0, "description": "Through music and performance, you can convey simple ideas to any creature that can hear you, regardless of language.", "effect": { "utility": "communicate_simple_ideas_any_creature_via_performance" } },
"Song of Lore": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "Perform a song that reveals historical or crucial information about a person, place, or object.", "effect": { "utility": "reveal_lore_through_song" } },
"Virtuoso Performance": { "class": "bard", "type": "buff", "cooldown": "long_rest", "description": "Give a performance so captivating it grants allies within earshot inspiration dice that are d12s for 1 hour.", "effect": { "aoe_allies_can_hear": true, "buff_inspiration_dice_to_d12": true, "duration": "1_hour" } },
"Aria of Ruin": { "class": "bard", "type": "attack", "cooldown": "long_rest", "description": "A devastating song that deals massive sonic damage to enemies and potentially shatters objects.", "effect": { "aoe_enemies_can_hear": true, "damage": "10d8_thunder", "effect_objects": "shatter_nonmagical" } },
"Enduring Anthem": { "class": "bard", "type": "passive", "cooldown": 0, "description": "The effects of your Bardic Inspiration last twice as long if the creature chooses to hold onto it.", "effect": { "buff_inspiration_duration_if_held": true } },
"Mind-Altering Melody": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "Play a tune that can subtly influence emotions or plant suggestions in listeners.", "effect": { "target_listeners": true, "effect": ["influence_emotions", "plant_suggestion_subtle"], "save": "Wisdom" } },
"Epic Tale": { "class": "bard", "type": "buff", "cooldown": "long_rest", "description": "Recount an epic tale that grants allies significant, long-lasting morale bonuses and resistances.", "effect": { "aoe_allies_can_hear": true, "buff": "morale_bonuses_resistances", "duration": "several_hours" } },
"Resonant Frequency": { "class": "bard", "type": "utility", "cooldown": "short_rest", "description": "Find a resonant frequency in an object or structure to potentially damage or destroy it with sound.", "effect": { "target_object_structure": true, "action": "damage_or_destroy_with_sound" } },
"Unforgettable Performance": { "class": "bard", "type": "passive", "cooldown": 0, "description": "Those who witness your greatest performances remember them vividly and are more likely to aid you.", "effect": { "utility": "memorable_performance_social_bonus" } },
"Shattering Crescendo": { "class": "bard", "type": "attack", "cooldown": "short_rest", "description": "A focused burst of sound that can deafen and damage a target.", "effect": { "target_enemy": true, "damage": "6d6_thunder", "status_on_fail_save": "deafened", "save": "Constitution" } },
"Hymn of the Ancients": { "class": "bard", "type": "utility", "cooldown": "long_rest", "description": "Sing a hymn that connects you to ancient spirits or knowledge, granting temporary insights or powers.", "effect": { "utility": "commune_with_ancient_spirits_knowledge" } },
"Aura of Inspiration": { "class": "bard", "type": "passive", "cooldown": 0, "description": "Allies starting their turn within 10 feet of you gain a d4 inspiration die (once per ally per short rest).", "effect": { "aura_range": "10_feet", "buff_allies_start_turn": "d4_inspiration_die_once_per_short_rest" } },
"Harmonic Convergence": { "class": "bard", "type": "utility", "cooldown": "long_rest", "description": "Coordinate with other spellcasters to amplify a single spell's power or effect.", "effect": { "utility": "amplify_spell_with_other_casters" } },
"Word of Creation": { "class": "bard", "type": "ultimate", "cooldown": "long_rest", "description": "Speak a word of primordial power, causing reality to briefly warp to your will (major illusion, creation of objects, or other powerful effect).", "effect": { "utility": "major_reality_warping_effect_dm_discretion" } },
"Perfect Harmony": { "class": "bard", "type": "passive", "cooldown": 0, "description": "You are always in perfect harmony with your surroundings and magic; advantage on saves against being magically silenced or deafened, and your spells are harder to dispel.", "effect": { "advantage_saves_vs_silence_deafen_magic": true, "buff_spells_harder_to_dispel": true } },
"Turn Undead (Minor)": { "class": "cleric", "type": "utility", "cooldown": 0, "description": "As an action, present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.", "effect": { "action": "turn_undead", "range": "30_feet", "duration": "1_minute_or_damage", "save": "Wisdom" } },
"Divine Bolt": { "class": "cleric", "type": "attack", "cooldown": 0, "description": "Make a ranged spell attack, dealing 1d10 radiant or necrotic damage (choose when obtained).", "effect": { "damage": "1d10_radiant_or_necrotic", "range": "60_feet", "type": "spell_attack" } },
"Preserve Life": { "class": "cleric", "type": "utility", "cooldown": 0, "description": "(Channel Divinity Option) Restore hit points equal to five times your cleric level, distributed among creatures of your choice within 30 feet. Cannot heal creatures above half HP or undead/constructs.", "effect": { "part_of": "Channel Divinity", "heal_amount": "5_times_cleric_level", "range": "30_feet", "restriction": "no_heal_above_half_hp_no_undead_constructs" } },
"Radiant Aura": { "class": "cleric", "type": "buff", "cooldown": "short_rest", "description": "Emit an aura of divine light for 1 minute, granting allies advantage on saves vs fear and dealing minor radiant damage to fiends/undead.", "effect": { "aura_range": "10_feet", "duration": "1_minute", "buff_allies_advantage_vs_fear": true, "damage_fiends_undead": "1d4_radiant_per_round" } },
"Prayer of Healing": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Heal multiple allies in an area after a short prayer.", "effect": { "aoe_heal_allies": "30_feet_radius", "heal_amount": "2d8_plus_spellcasting_mod", "casting_time_override": "10_minutes" } },
"Sanctuary": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Ward a creature so that any creature who tries to attack or target it with a harmful spell must first make a Wisdom saving throw.", "effect": { "target_creature": true, "protection_effect": "attacker_must_make_wis_save_or_choose_new_target_or_lose_attack_spell" } },
"Consecrate": { "class": "cleric", "type": "utility", "cooldown": "long_rest", "description": "Make an area (e.g., 30-foot square) holy ground, providing benefits to allies or penalties to unholy creatures.", "effect": { "aoe_designate_holy_ground": "30_feet_square", "duration": "1_hour", "effects_vary": "ally_buffs_or_unholy_debuffs" } },
"Divine Smite (Cleric version)": { "class": "cleric", "type": "buff", "cooldown": "spell_slot_cost", "description": "When you hit with a melee weapon attack, you can expend a spell slot to deal extra radiant damage.", "effect": { "trigger": "on_melee_weapon_hit", "bonus_damage_per_spell_level": "1d8_radiant_per_slot_level_plus_1d8_extra_vs_undead_fiend" } },
"Mass Healing Word": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Heal up to six creatures you can see as a bonus action.", "effect": { "target_multiple_allies": 6, "heal_amount": "1d4_plus_spellcasting_mod", "casting_time_override": "bonus_action" } },
"Spirit Shroud": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Your attacks deal extra radiant/necrotic damage, and creatures within 10 feet of you have their speed reduced.", "effect": { "buff_self_attacks_extra_damage": "1d8_radiant_or_necrotic", "aura_debuff_enemy_speed": "10_feet_reduction", "range_aura": "10_feet" } },
"Blessed Healer": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.", "effect": { "trigger": "cast_healing_spell_on_other", "self_heal_amount": "2_plus_spell_level" } },
"Spiritual Guardians (Improved)": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "Your Spirit Guardians spell deals more damage or has a larger radius.", "effect": { "buff_spell": "spirit_guardians_improved_damage_or_radius" } },
"Divine Word": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost", "description": "Speak a divine word, causing various effects on creatures based on their current hit points (banish, deafen, blind, stun).", "effect": { "aoe_effect_based_on_hp": "30_feet_radius", "effects": ["banish_extraplanar_hp_threshold", "deafen_blind_stun_hp_threshold"] } },
"Holy Ground": { "class": "cleric", "type": "utility", "cooldown": "short_rest", "description": "Imbue an area with divine power, making it difficult terrain for enemies and granting allies minor healing when they start their turn there.", "effect": { "aoe_sanctify_area": "20_feet_radius", "effect_enemies_difficult_terrain": true, "effect_allies_minor_heal_start_turn": "1d4_hp", "duration": "1_minute" } },
"Aura of Life": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "Creatures of your choice within 30 feet regain 1 hit point at the start of their turn if at 0 HP, and have resistance to necrotic damage.", "effect": { "aura_range": "30_feet", "buff_allies_regain_1hp_at_0": true, "buff_allies_resistance_necrotic": true } },
"Sacred Ground": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "You and allies within 10 feet have advantage on saving throws against being frightened or charmed while you are conscious.", "effect": { "aura_range": "10_feet", "buff_allies_advantage_vs_frightened_charmed": true } },
"Circle of Healing": { "class": "cleric", "type": "utility", "cooldown": "long_rest", "description": "Perform a 10-minute ritual to heal a group of allies significantly.", "effect": { "ritual_heal_group": true, "heal_amount": "4d8_plus_cleric_level", "max_targets": 6 } },
"Guardian Spirit": { "class": "cleric", "type": "summon", "cooldown": "long_rest", "description": "Summon a spectral guardian that protects an ally, potentially taking damage for them.", "effect": { "summon_spectral_guardian": true, "target_ally_to_protect": true, "action_guardian_take_damage_for_ally": true } },
"Supreme Healing": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost_high_level", "description": "Maximize the amount of healing from one of your healing spells.", "effect": { "buff_next_healing_spell": "maximize_healing_dice" } },
"Pillar of Light": { "class": "cleric", "type": "attack", "cooldown": "short_rest", "description": "Call down a pillar of divine light that damages and blinds enemies in an area.", "effect": { "aoe_pillar": "10_feet_radius_40_feet_high", "damage": "5d10_radiant", "status_on_fail_save": "blinded", "save": "Dexterity" } },
"Divine Beacon": { "class": "cleric", "type": "utility", "cooldown": "long_rest", "description": "Act as a beacon for your deity, allowing them to manifest a minor boon or message through you.", "effect": { "utility": "channel_deity_minor_boon_message" } },
"Aura of Purity": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "You and allies within 10 feet are immune to disease and have resistance to poison damage.", "effect": { "aura_range": "10_feet", "immune_allies_disease": true, "resistance_allies_poison_damage": true } },
"Divine Judgment": { "class": "cleric", "type": "attack", "cooldown": "long_rest", "description": "Smite a foe with divine power, dealing massive damage and imposing a lingering penalty.", "effect": { "target_enemy": true, "damage": "8d10_radiant", "debuff_on_hit": "disadvantage_attacks_saves_1_minute", "save_for_half_no_debuff": "Wisdom" } },
"Resurrection": { "class": "cleric", "type": "spell_like", "cooldown": "spell_slot_cost_very_high_level", "description": "Bring a dead creature back to life, provided its soul is willing and free.", "effect": { "utility": "resurrect_dead_creature" } },
"Cleansing Light": { "class": "cleric", "type": "utility", "cooldown": "short_rest", "description": "Emit a burst of light that ends one negative magical effect (curse, charm, etc.) on multiple allies.", "effect": { "aoe_cleanse_allies": "30_feet_radius", "effect": "end_one_negative_magical_effect_each" } },
"Unyielding Faith": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "If you drop to 0 HP but are not killed outright, you can use your reaction to immediately regain HP equal to your Cleric level + Wisdom modifier.", "effect": { "trigger": "hp_to_0_not_killed", "action": "reaction_heal_self", "heal_amount": "cleric_level_plus_wis_mod" } },
"Sanctified Zone": { "class": "cleric", "type": "utility", "cooldown": "long_rest", "description": "Create a large zone where celestials are empowered and fiends/undead are weakened and cannot enter.", "effect": { "aoe_create_zone": "60_feet_radius", "duration": "1_hour", "buff_celestials_in_zone": true, "debuff_fiends_undead_in_zone_and_entry_denial": true } },
"Miracle (Lesser)": { "class": "cleric", "type": "utility", "cooldown": "long_rest_or_divine_intervention_success", "description": "Perform a minor miracle, replicating a lower-level Cleric spell or achieving a similar small divine feat.", "effect": { "utility": "perform_minor_miracle_replicate_low_level_cleric_spell" } },
"Vessel of the Divine": { "class": "cleric", "type": "buff", "cooldown": "long_rest", "description": "Temporarily become a direct conduit for your deity, gaining immense power and resilience.", "effect": { "transformation_divine_conduit": true, "duration": "1_minute", "bonuses": "significant_stat_spell_power_increases_resistances" } },
"Divine Retribution": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "When an enemy within 30 feet damages you or an ally, you can use your reaction to smite them with divine energy.", "effect": { "trigger": "enemy_damages_self_or_ally_30ft", "action": "reaction_smite_attacker", "damage": "4d10_radiant" } },
"Apotheosis (Temporary)": { "class": "cleric", "type": "ultimate", "cooldown": "long_rest_very_high_level", "description": "Briefly take on aspects of your deity, becoming a near-demigod.", "effect": { "transformation_demigod_form": true, "duration": "1_minute", "abilities": "flight_major_immunities_powerful_divine_attacks" } },
"Avatar of a God": { "class": "cleric", "type": "ultimate", "cooldown": "long_rest_capstone", "description": "Fully embody an avatar of your deity, wielding immense divine power.", "effect": { "transformation_divine_avatar_full": true, "duration": "1_minute_or_longer", "abilities": "near_godlike_powers_reality_alteration_minor" } },
"Divine Intervention (Improved)": { "class": "cleric", "type": "passive", "cooldown": 0, "description": "Your chance of success with Divine Intervention increases, or you can use it more often.", "effect": { "buff_divine_intervention": "increased_success_chance_or_frequency" } },
"Nature's Grasp": { "class": "druid", "type": "utility", "cooldown": 3, "description": "Entangling vines sprout to attempt to restrain a nearby enemy.", "effect": { "range": "30_feet", "status": "restrained", "save": "Strength" } },
"Primal Savagery": { "class": "druid", "type": "attack", "cooldown": 0, "description": "(Cantrip-like) Your teeth or nails lengthen and sharpen, make a melee spell attack dealing 1d10 acid, cold, fire, lightning, or thunder damage.", "effect": { "damage": "1d10_elemental_choice", "type": "melee_spell_attack" } },
"Animal Companion (Spirit)": { "class": "druid", "type": "summon", "cooldown": 0, "description": "Summon a spirit animal that aids you in and out of combat (uses a simplified stat block).", "effect": { "summon_spirit_animal": true } },
"Circle Spellcasting": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You gain access to additional spells based on your Druid Circle.", "effect": { "utility": "circle_specific_bonus_spells" } },
"Call of the Wild": { "class": "druid", "type": "utility", "cooldown": "short_rest", "description": "Temporarily summon several minor nature spirits or beasts to assist or distract.", "effect": { "summon_minor_nature_spirits_or_beasts": true, "count": "1d4", "duration": "1_minute" } },
"Natural Recovery": { "class": "druid", "type": "utility", "cooldown": "short_rest", "description": "Once per day during a short rest, you can regain some expended spell slots.", "effect": { "utility": "regain_spell_slots_on_short_rest" } },
"Land's Stride (Minor)": { "class": "druid", "type": "passive", "cooldown": 0, "description": "Moving through nonmagical difficult terrain costs you no extra movement.", "effect": { "movement_buff_ignore_nonmagical_difficult_terrain": true } },
"Elemental Fury": { "class": "druid", "type": "buff", "cooldown": "short_rest", "description": "Imbue your attacks or spells with elemental energy (fire, cold, lightning) for extra damage.", "effect": { "buff_attacks_spells_extra_elemental_damage": "1d6", "duration": "1_minute" } },
"Wrath of the Storm": { "class": "druid", "type": "attack", "cooldown": "short_rest", "description": "Call down a localized storm effect (lightning, hail, or strong winds).", "effect": { "aoe_localized_storm": "30_feet_radius", "effect_choice": ["lightning_strike_3d10", "hail_2d8_bludgeoning", "strong_wind_push_prone_str_save"] } },
"Mighty Summoner": { "class": "druid", "type": "passive", "cooldown": 0, "description": "Beasts and fey you summon have more hit points and deal more damage.", "effect": { "buff_summoned_beasts_fey": "increased_hp_and_damage" } },
"Fey Charm": { "class": "druid", "type": "utility", "cooldown": "short_rest", "description": "Attempt to charm a humanoid or beast with fey magic.", "effect": { "target_humanoid_or_beast": true, "status": "charmed", "save": "Wisdom" } },
"Nature's Sanctuary": { "class": "druid", "type": "passive", "cooldown": 0, "description": "If a creature targets you with an attack or harmful spell, it must first make a Wisdom saving throw if it's a beast or plant. On a failed save, it must choose a new target or lose the attack/spell.", "effect": { "trigger": "targeted_by_beast_or_plant", "save_to_attack_you": "Wisdom" } },
"Eye of the Storm": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You remain unharmed by your own storm-like spell effects (e.g. Call Lightning, Sleet Storm).", "effect": { "immune_to_own_storm_spells": true } },
"Venomous Thorns": { "class": "druid", "type": "attack", "cooldown": 3, "description": "Launch thorns coated in natural poison, dealing piercing and poison damage.", "effect": { "damage": "2d6_piercing_plus_2d6_poison", "save_for_half_poison": "Constitution" } },
"Earthquake (Minor)": { "class": "druid", "type": "attack", "cooldown": "long_rest", "description": "Cause a localized tremor, knocking creatures prone and creating difficult terrain.", "effect": { "aoe": "20_feet_radius", "status_prone_on_fail_save": "Dexterity", "effect_difficult_terrain": true } },
"One with the Land": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You gain benefits while in your favored terrains (e.g., better stealth, easier foraging).", "effect": { "buff_in_favored_terrain": "stealth_foraging_bonuses" } },
"Beast Speech (Permanent)": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You can speak with animals at will.", "effect": { "utility": "speak_with_animals_at_will" } },
"Timeless Body (Minor)": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You age more slowly, e.g., for every 10 years that pass, your body ages only 1 year.", "effect": { "passive_slowed_aging": true } },
"Primal Ward": { "class": "druid", "type": "defensive", "cooldown": "short_rest", "description": "Gain temporary resistance to one elemental damage type (acid, cold, fire, lightning, thunder).", "effect": { "buff_resistance_elemental_choice": true, "duration": "1_hour" } },
"Walker in Dreams": { "class": "druid", "type": "utility", "cooldown": "long_rest", "description": "Enter the dreams of sleeping creatures or explore the dreamscape.", "effect": { "utility": "dream_walking_exploration" } },
"Elemental Body": { "class": "druid", "type": "buff", "cooldown": "long_rest", "description": "Temporarily transform into a lesser elemental, gaining its traits.", "effect": { "transformation_lesser_elemental_form": true, "duration": "10_minutes" } },
"Nature's Resilience": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against poisons and diseases.", "effect": { "advantage_saves_vs_poison_disease": true } },
"Unseen Predator (Nature)": { "class": "druid", "type": "stealth", "cooldown": "short_rest", "description": "While in natural surroundings, you can become invisible as a bonus action until you attack or cast a spell.", "effect": { "condition_natural_surroundings": true, "action_bonus_action_invisible_until_action": true } },
"Commune with Nature (Greater)": { "class": "druid", "type": "utility", "cooldown": "long_rest", "description": "Gain detailed knowledge about the natural environment within several miles.", "effect": { "utility": "detailed_environmental_knowledge_large_area" } },
"Thousand Forms (Minor)": { "class": "druid", "type": "utility", "cooldown": "short_rest", "description": "You can cast Alter Self at will, but only to change your appearance, not gain its other benefits.", "effect": { "cast_alter_self_at_will_appearance_only": true } },
"One with the Pack": { "class": "druid", "type": "passive", "cooldown": 0, "description": "(If Circle of the Shepherd) Your spirit totem benefits are enhanced or affect more allies.", "effect": { "condition_circle_of_shepherd": true, "buff_spirit_totem": true } },
"Perfected Wild Shape": { "class": "druid", "type": "passive", "cooldown": 0, "description": "Your Wild Shape transformations are faster, last longer, or allow for more powerful beast forms.", "effect": { "buff_wild_shape": "faster_longer_stronger_forms" } },
"Aura of the Guardian": { "class": "druid", "type": "passive", "cooldown": 0, "description": "Friendly creatures and plants within 30 feet of you gain temporary HP at the start of your turn.", "effect": { "aura_range": "30_feet", "buff_friendly_creatures_plants_temp_hp_start_of_turn": "druid_level_half" } },
"Archdruid (Unlimited Wild Shape)": { "class": "druid", "type": "passive", "cooldown": 0, "description": "You can use Wild Shape an unlimited number of times.", "effect": { "buff_wild_shape_unlimited_uses": true } },
"Voice of the Earth": { "class": "druid", "type": "utility", "cooldown": "short_rest", "description": "Speak with stones and earth, learning secrets they have witnessed.", "effect": { "utility": "speak_with_stone_earth" } },
"Focused Strike": { "class": "monk", "type": "attack", "cooldown": 0, "description": "When making an unarmed strike, you can use Dexterity instead of Strength for attack and damage.", "effect": { "utility": "dex_for_unarmed_strikes" } },
"Meditative Calm": { "class": "monk", "type": "utility", "cooldown": "short_rest", "description": "Spend 1 minute meditating to regain 1 Ki point.", "effect": { "action_meditate_regain_ki": 1, "duration": "1_minute" } },
"Flurry of Blows": { "class": "monk", "type": "attack", "cooldown": 0, "description": "(Ki Ability) Immediately after taking Attack action, spend 1 Ki to make two unarmed strikes as a bonus action.", "effect": { "trigger": "after_attack_action", "cost_ki": 1, "bonus_action_unarmed_strikes": 2 } },
"Patient Defense": { "class": "monk", "type": "defensive", "cooldown": 0, "description": "(Ki Ability) Spend 1 Ki to take Dodge action as a bonus action.", "effect": { "cost_ki": 1, "bonus_action_dodge": true } },
"Step of the Wind": { "class": "monk", "type": "movement", "cooldown": 0, "description": "(Ki Ability) Spend 1 Ki to take Disengage or Dash action as a bonus action; jump distance is doubled.", "effect": { "cost_ki": 1, "bonus_action_disengage_or_dash": true, "buff_jump_distance_doubled": true } },
"Way of the Open Hand/Shadow/etc.": { "class": "monk", "type": "passive", "cooldown": 0, "description": "Represents the monk's chosen monastic tradition features.", "effect": { "utility": "monastic_tradition_specific_feature" } },
"Combat Flow": { "class": "monk", "type": "passive", "cooldown": 0, "description": "After hitting with an unarmed strike, your next attack roll before end of turn has advantage.", "effect": { "trigger": "on_unarmed_hit", "buff_next_attack_advantage": true } },
"Pressure Point": { "class": "monk", "type": "attack", "cooldown": "short_rest", "description": "Spend 1 Ki point when hitting with an unarmed strike to impose disadvantage on target's next attack roll or saving throw.", "effect": { "trigger": "on_unarmed_hit_spend_ki", "cost_ki": 1, "debuff_target_next_roll_disadvantage": true } },
"Flowing Water Stance": { "class": "monk", "type": "stance", "cooldown": 0, "description": "While not wearing armor or shield, gain +1 AC if you moved at least 10ft this turn.", "effect": { "condition_unarmored_no_shield_moved_10ft": true, "ac_bonus": 1 } },
"Martial Arts (1d6)": { "class": "monk", "type": "passive", "cooldown": 0, "description": "Your unarmed strike damage die increases to 1d6.", "effect": { "buff_unarmed_damage_die": "1d6" } },
"Explosive Ki Burst": { "class": "monk", "type": "attack", "cooldown": "short_rest", "description": "Spend 2 Ki points to unleash a 15ft cone of force from your hands, dealing 3d6 force damage.", "effect": { "cost_ki": 2, "aoe_cone_15ft": true, "damage": "3d6_force", "save_dex_half": true } },
"Wholeness of Body": { "class": "monk", "type": "utility", "cooldown": "short_rest", "description": "As an action, regain hit points equal to three times your monk level.", "effect": { "action_heal_self": "monk_level_times_3" } },
"Aura of Control": { "class": "monk", "type": "debuff", "cooldown": "long_rest", "description": "(Tradition Specific) Emit an aura that hinders enemies or bolsters allies.", "effect": { "utility": "tradition_specific_aura_effect" } },
"Leap of the Clouds": { "class": "monk", "type": "movement", "cooldown": 0, "description": "Your jump distance is tripled when you spend 1 Ki point before jumping.", "effect": { "cost_ki_for_jump": 1, "buff_jump_distance_tripled": true } },
"Iron Body Technique": { "class": "monk", "type": "defensive", "cooldown": "short_rest", "description": "Spend 2 Ki points to gain resistance to bludgeoning, piercing, and slashing damage for 1 minute.", "effect": { "cost_ki": 2, "resistance_physical_nonmagical": true, "duration": "1_minute" } },
"Quivering Palm (Lesser)": { "class": "monk", "type": "attack", "cooldown": "long_rest", "description": "Spend 3 Ki. On hit with unarmed strike, target must make Con save. On fail, drops to 0 HP after 1d4 days unless effect is removed. Lesser version may have shorter duration or lower HP threshold.", "effect": { "cost_ki": 3, "trigger_on_unarmed_hit": true, "save_con_vs_delayed_0_hp": true, "effect_details": "lesser_quivering_palm" } },
"Mind Over Matter": { "class": "monk", "type": "passive", "cooldown": 0, "description": "Advantage on saving throws against being charmed or frightened.", "effect": { "advantage_saves_vs_charmed_frightened": true } },
"Aspect of the Four Winds": { "class": "monk", "type": "utility", "cooldown": "short_rest", "description": "(Tradition Specific) Channel aspects of elements for various effects (e.g., ranged attacks, enhanced movement).", "effect": { "utility": "tradition_specific_elemental_effects" } },
"Counter Strike": { "class": "monk", "type": "defensive", "cooldown": 0, "description": "When a creature misses you with a melee attack, you can use your reaction to make an unarmed strike against it.", "effect": { "trigger": "enemy_melee_miss", "reaction_unarmed_strike": true } },
"Touch of Serenity": { "class": "monk", "type": "utility", "cooldown": "short_rest", "description": "Spend 1 Ki point to touch a creature and end one effect causing it to be charmed or frightened.", "effect": { "cost_ki": 1, "target_touch_creature": true, "action_end_charmed_or_frightened": true } },
"Ki Infusion": { "class": "monk", "type": "passive", "cooldown": 0, "description": "Your unarmed strikes count as magical for overcoming resistance/immunity.", "effect": { "buff_unarmed_strikes_magical": true } },
"Diamond Soul (Minor)": { "class": "monk", "type": "passive", "cooldown": 0, "description": "You gain proficiency in all saving throws (or a subset if 'minor').", "effect": { "proficiency_all_saving_throws_or_subset": true } },
"Empty Body (Invisibility)": { "class": "monk", "type": "utility", "cooldown": 0, "description": "(Ki Ability) Spend 4 Ki points to become invisible for 1 minute. While invisible, you have resistance to all damage except force.", "effect": { "cost_ki": 4, "status_invisible": true, "duration": "1_minute", "resistance_while_invisible_all_except_force": true } },
"Fist of the North Star": { "class": "monk", "type": "attack", "cooldown": "long_rest", "description": "(Tradition Specific) A powerful series of strikes that can incapacitate or heavily damage a foe.", "effect": { "utility": "tradition_specific_powerful_strike_combo" } },
"Ki Wave": { "class": "monk", "type": "attack", "cooldown": "short_rest", "description": "Spend 2 Ki points to send a wave of ki energy in a 15-foot cone. Creatures take force damage equal to two rolls of your Martial Arts die.", "effect": { "cost_ki": 2, "aoe_cone_15ft": true, "damage_force_martial_arts_die_x2": true, "save_dex_half": true } },
"Ethereal Step": { "class": "monk", "type": "movement", "cooldown": 0, "description": "(Ki Ability, Tradition Specific) Spend Ki to briefly step into the Ethereal Plane and move.", "effect": { "utility": "tradition_specific_ethereal_movement" } },
"Touch of Death (Lesser)": { "class": "monk", "type": "attack", "cooldown": "long_rest", "description": "(Tradition Specific) Spend Ki. On hit with unarmed strike, deal extra necrotic damage. If target drops to 0 HP, you gain temporary HP.", "effect": { "utility": "tradition_specific_necrotic_strike_temp_hp" } },
"Perfected Self": { "class": "monk", "type": "passive", "cooldown": 0, "description": "Your body is a perfected instrument. Increase two ability scores of your choice by 1.", "effect": { "ability_score_increase_two_chosen_by_1": true } },
"Rippling Palm": { "class": "monk", "type": "attack", "cooldown": "short_rest", "description": "Spend 3 Ki. An unarmed strike sends vibrations through the target. On failed Con save, target is stunned for 1 minute but can repeat save each turn.", "effect": { "cost_ki": 3, "trigger_on_unarmed_hit": true, "status_stunned_repeating_save": true, "save_con": true } },
"Ki Annihilation": { "class": "monk", "type": "ultimate", "cooldown": "long_rest", "description": "(Tradition Specific) Unleash all your Ki in a devastating attack or effect.", "effect": { "utility": "tradition_specific_ultimate_ki_ability" } },
"Body of the Lotus": { "class": "monk", "type": "passive", "cooldown": 0, "description": "You are immune to poison and disease, and you no longer need to eat or drink.", "effect": { "immune_poison_disease": true, "no_need_eat_drink": true } },
"Dragon's Breath (Ki-fueled)": { "class": "monk", "type": "attack", "cooldown": 0, "description": "(Tradition Specific) Spend Ki to exhale elemental energy (fire, cold, etc.) in a cone.", "effect": { "utility": "tradition_specific_elemental_breath_attack" } },
"Transcendent Step": { "class": "monk", "type": "movement", "cooldown": 0, "description": "You can move across vertical surfaces and liquids without falling during your move.", "effect": { "movement_walk_on_walls_liquids": true } },
"Quivering Palm": { "class": "monk", "type": "attack", "cooldown": "long_rest", "description": "Spend 3 Ki. On hit with unarmed strike, set up lethal vibrations. As an action within days equal to monk level, can force Con save or target drops to 0 HP. If save, 10d10 necrotic damage.", "effect": { "cost_ki": 3, "trigger_on_unarmed_hit_setup_vibrations": true, "action_to_trigger_effect": true, "save_con_vs_0_hp_or_10d10_necrotic": true } },
"Empty Body (Astral Projection)": { "class": "monk", "type": "utility", "cooldown": 0, "description": "(Ki Ability) Spend 8 Ki points to cast Astral Projection spell on yourself.", "effect": { "cost_ki": 8, "action_cast_astral_projection_self": true } },
"Innate Magic": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Your magic comes from within, not from study or a deity.", "effect": { "flavor_text": "innate_spellcasting_source" } },
"Bloodline Trait": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Grants benefits based on your Sorcerous Origin (e.g., Draconic Resilience).", "effect": { "utility": "sorcerous_origin_specific_benefit" } },
"Flexible Casting": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "Use Sorcery Points to create spell slots, or convert spell slots into Sorcery Points.", "effect": { "utility": "convert_sorcery_points_spell_slots" } },
"Empower Spell (Lesser)": { "class": "sorcerer", "type": "buff", "cooldown": 0, "description": "(Metamagic Option) Spend 1 Sorcery Point to reroll a number of damage dice up to your Charisma modifier for one spell.", "effect": { "metamagic_option_empower_spell": true, "cost_sorcery_points": 1 } },
"Twinned Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend Sorcery Points equal to spell's level to target a second creature with a single-target spell.", "effect": { "metamagic_option_twinned_spell": true } },
"Quickened Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 2 Sorcery Points to change a spell's casting time from 1 action to 1 bonus action.", "effect": { "metamagic_option_quickened_spell": true, "cost_sorcery_points": 2 } },
"Careful Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 1 Sorcery Point to choose creatures who automatically succeed on saving throws against a spell you cast.", "effect": { "metamagic_option_careful_spell": true, "cost_sorcery_points": 1 } },
"Distant Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 1 Sorcery Point to double a spell's range, or make a touch spell range 30ft.", "effect": { "metamagic_option_distant_spell": true, "cost_sorcery_points": 1 } },
"Arcane Burst": { "class": "sorcerer", "type": "attack", "cooldown": "short_rest", "description": "Release a burst of raw magical energy, dealing 2d6 force damage in a 10ft radius.", "effect": { "aoe_10ft_radius": true, "damage": "2d6_force" } },
"Elemental Affinity": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "(Draconic Origin) Add Charisma modifier to one damage roll of any spell that deals damage of the type associated with your draconic ancestry.", "effect": { "condition_draconic_origin": true, "buff_spell_damage_add_cha_mod_ancestral_element": true } },
"Unleash Power": { "class": "sorcerer", "type": "buff", "cooldown": "long_rest", "description": "For 1 minute, your spells that require concentration no longer do, and you can concentrate on two such spells at once.", "effect": { "duration_1_minute": true, "buff_no_concentration_needed_can_hold_two": true } },
"Sorcerous Restoration (Minor)": { "class": "sorcerer", "type": "utility", "cooldown": "short_rest", "description": "Regain a small number of expended Sorcery Points (e.g., 1d4).", "effect": { "regain_sorcery_points": "1d4" } },
"Draconic Resilience / Wild Magic Bend Luck": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Sorcerous Origin feature, providing defensive or luck-based benefits.", "effect": { "utility": "origin_specific_feature_draconic_resilience_or_bend_luck" } },
"Elemental Control": { "class": "sorcerer", "type": "utility", "cooldown": "short_rest", "description": "Gain temporary control over small, mundane manifestations of your ancestral element.", "effect": { "utility": "minor_control_ancestral_element" } },
"Arcane Fury": { "class": "sorcerer", "type": "buff", "cooldown": "long_rest", "description": "Enter a state where your damaging spells deal maximum possible damage for 1 round.", "effect": { "duration_1_round": true, "buff_spells_maximize_damage": true } },
"Spell Bombardment": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "(Wild Magic) When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again, and add that roll to the damage.", "effect": { "condition_wild_magic_max_damage_roll": true, "buff_spell_damage_reroll_one_max_die_add_to_total": true } },
"Arcane Shield": { "class": "sorcerer", "type": "defensive", "cooldown": "short_rest", "description": "Expend Sorcery Points to create a temporary shield that grants AC bonus.", "effect": { "cost_sorcery_points_variable": true, "ac_bonus_per_point": 1, "duration_1_minute": true } },
"Master of Magic (Innate)": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Choose one 1st-level sorcerer spell you know. You can cast it at its lowest level without expending a spell slot once per long rest.", "effect": { "choose_1st_level_spell_free_cast_once_long_rest": true } },
"Overchannel (Risky)": { "class": "sorcerer", "type": "buff", "cooldown": "long_rest", "description": "When you cast a sorcerer spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell. The first time you do so, you suffer no adverse effect. If you use this feature again before finishing a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12.", "effect": { "buff_spell_1st_to_5th_maximize_damage": true, "risk_increasing_necrotic_damage_on_reuse": true } },
"Heightened Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 3 Sorcery Points to give one target of a spell disadvantage on its first saving throw against the spell.", "effect": { "metamagic_option_heightened_spell": true, "cost_sorcery_points": 3 } },
"Subtle Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 1 Sorcery Point to cast a spell without somatic or verbal components.", "effect": { "metamagic_option_subtle_spell": true, "cost_sorcery_points": 1 } },
"Empowered Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 1 Sorcery Point to reroll a number of damage dice up to Charisma mod for a spell.", "effect": { "metamagic_option_empowered_spell_full": true, "cost_sorcery_points": 1 } },
"Spell Siphon": { "class": "sorcerer", "type": "utility", "cooldown": "long_rest", "description": "When you successfully counter a spell or it fizzles, regain Sorcery Points equal to half the spell's level.", "effect": { "trigger_counterspell_or_fizzle": true, "regain_sorcery_points_spell_level_half": true } },
"Chaotic Surge": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "(Wild Magic) Your Wild Magic Surges occur more frequently or you can trigger them intentionally.", "effect": { "condition_wild_magic": true, "buff_wild_magic_surge_frequency_or_control": true } },
"Planar Jaunt": { "class": "sorcerer", "type": "movement", "cooldown": "short_rest", "description": "Briefly step into an adjacent plane to teleport up to 60 feet.", "effect": { "teleport_60_feet_via_planar_step": true } },
"Aura of Power": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Your innate magic creates an aura that bolsters allies' spell attacks or DCs.", "effect": { "aura_range_10_feet": true, "buff_allies_spell_attacks_or_dcs": 1 } },
"Draconic Wings / Spell Bombardment": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Sorcerous Origin capstone feature (flight or enhanced spell damage).", "effect": { "utility": "origin_capstone_draconic_wings_or_spell_bombardment" } },
"Arcane Rift": { "class": "sorcerer", "type": "utility", "cooldown": "long_rest", "description": "Tear a temporary rift to another plane, causing minor chaos or allowing brief passage.", "effect": { "utility_create_planar_rift_minor_effects": true } },
"Sorcerous Restoration": { "class": "sorcerer", "type": "utility", "cooldown": "short_rest", "description": "Regain a significant number of expended Sorcery Points (e.g., up to half your max).", "effect": { "regain_sorcery_points_significant_amount": true } },
"Volatile Casting": { "class": "sorcerer", "type": "passive", "cooldown": 0, "description": "Your spells have a chance to trigger additional, unpredictable magical effects (similar to Wild Magic Surge but less table-dependent).", "effect": { "chance_spells_trigger_unpredictable_effects": true } },
"Seeking Spell": { "class": "sorcerer", "type": "utility", "cooldown": 0, "description": "(Metamagic Option) Spend 2 Sorcery Points. If you make an attack roll for a spell and miss, you can reroll it. You must use the new roll.", "effect": { "metamagic_option_seeking_spell": true, "cost_sorcery_points": 2 } },
"Arcane Apotheosis": { "class": "sorcerer", "type": "ultimate", "cooldown": "long_rest", "description": "For 1 minute, you become a being of pure magic. You can cast any sorcerer spell you know of 5th level or lower at will without components, and gain resistance to all damage.", "effect": { "duration_1_minute_pure_magic_form": true, "cast_sorcerer_spells_5th_lower_at_will_no_components": true, "resistance_all_damage": true } },
"Patron's Gift": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "A specific boon granted by your Otherworldly Patron (e.g., Dark One's Blessing, Fey Presence).", "effect": { "utility": "patron_specific_boon" } },
"Eldritch Grasp": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "Your Eldritch Blast can pull a creature 10 feet closer to you on a hit.", "effect": { "buff_eldritch_blast_pull_target_10_feet": true } },
"Agonizing Blast": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation) Add Charisma modifier to Eldritch Blast damage.", "effect": { "invocation_agonizing_blast_add_cha_to_eldritch_blast_damage": true } },
"Armor of Shadows": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation) Cast Mage Armor on yourself at will without spell slots or components.", "effect": { "invocation_armor_of_shadows_mage_armor_at_will": true } },
"Beguiling Influence": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation) Gain proficiency in Deception and Persuasion skills.", "effect": { "invocation_beguiling_influence_prof_deception_persuasion": true } },
"Pact Weapon": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Pact of the Blade) Create or bond with a magical weapon.", "effect": { "pact_of_the_blade_create_bond_weapon": true } },
"Find Familiar (Special)": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Pact of the Chain) Cast Find Familiar, with additional special familiar forms available.", "effect": { "pact_of_the_chain_find_familiar_special_forms": true } },
"Book of Shadows": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Pact of the Tome) Gain a grimoire with three cantrips from any class.", "effect": { "pact_of_the_tome_book_of_shadows_three_bonus_cantrips": true } },
"Dark One's Own Luck (Lesser)": { "class": "warlock", "type": "utility", "cooldown": "short_rest", "description": "(Fiend Patron) Add 1d10 to one ability check or saving throw.", "effect": { "condition_fiend_patron_add_1d10_to_check_or_save": true } },
"Entropic Ward": { "class": "warlock", "type": "defensive", "cooldown": "short_rest", "description": "(Great Old One Patron) Impose disadvantage on an attack roll against you. If it misses, gain advantage on your next attack vs. attacker.", "effect": { "condition_great_old_one_patron_impose_disadvantage_on_attack_gain_advantage_if_miss": true } },
"Thirsting Blade": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation, Pact of the Blade) Attack twice with your pact weapon when you take Attack action.", "effect": { "invocation_thirsting_blade_pact_weapon_extra_attack": true } },
"Voice of the Chain Master": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation, Pact of the Chain) Communicate telepathically with your familiar and perceive through its senses as long as you are on the same plane.", "effect": { "invocation_voice_of_the_chain_master_familiar_telepathy_shared_senses": true } },
"Book of Ancient Secrets": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation, Pact of the Tome) Inscribe ritual spells into your Book of Shadows.", "effect": { "invocation_book_of_ancient_secrets_learn_ritual_spells": true } },
"Misty Escape": { "class": "warlock", "type": "defensive", "cooldown": "short_rest", "description": "(Archfey Patron) When you take damage, use reaction to turn invisible and teleport 60ft.", "effect": { "condition_archfey_patron_on_damage_reaction_invisible_teleport_60ft": true } },
"Relentless Hex": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Invocation) Bonus action teleport next to creature affected by your Hex spell or a warlock curse.", "effect": { "invocation_relentless_hex_teleport_to_hexed_cursed_target": true } },
"Ghostly Gaze": { "class": "warlock", "type": "utility", "cooldown": "short_rest", "description": "(Invocation) As an action, see through solid objects in a 30-foot radius for 1 minute.", "effect": { "invocation_ghostly_gaze_see_through_objects_30ft_1_min": true } },
"Patron's Shield": { "class": "warlock", "type": "defensive", "cooldown": "short_rest", "description": "A defensive boon from your patron (e.g., temporary HP, resistance).", "effect": { "patron_specific_defensive_boon": true } },
"Dark Foresight": { "class": "warlock", "type": "utility", "cooldown": "long_rest", "description": "Receive a brief, cryptic vision of a future event related to your patron's interests.", "effect": { "utility_cryptic_future_vision": true } },
"Minions of Chaos": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Invocation) Cast Conjure Elemental once using a warlock spell slot.", "effect": { "invocation_minions_of_chaos_cast_conjure_elemental": true } },
"Otherworldly Leap": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Invocation) Cast Jump on yourself at will.", "effect": { "invocation_otherworldly_leap_cast_jump_at_will": true } },
"Fiendish Resilience": { "class": "warlock", "type": "passive", "cooldown": "short_rest", "description": "(Fiend Patron) Choose one damage type (not magical physical). Gain resistance to it until your next short/long rest.", "effect": { "condition_fiend_patron_choose_resistance_one_damage_type": true } },
"Thought Shield": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Great Old One Patron) Your thoughts can't be read by telepathy or other means unless you allow it. Resistance to psychic damage.", "effect": { "condition_great_old_one_patron_thoughts_cannot_be_read_psychic_resistance": true } },
"Create Thrall (Lesser)": { "class": "warlock", "type": "utility", "cooldown": "long_rest", "description": "Incapacitate a humanoid. If it fails a Wisdom save, it is charmed by you for 24 hours or until you use this feature again. You can communicate telepathically with it.", "effect": { "utility_create_lesser_thrall_charmed_telepathic_link": true } },
"Soul Cage": { "class": "warlock", "type": "spell_like", "cooldown": "spell_slot_cost_6th_level_arcanum", "description": "(Mystic Arcanum) Trap the soul of a recently deceased humanoid.", "effect": { "mystic_arcanum_soul_cage_trap_soul": true } },
"Lifedrinker": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation, Pact of the Blade) Your pact weapon deals extra necrotic damage equal to your Charisma modifier.", "effect": { "invocation_lifedrinker_pact_weapon_extra_necrotic_cha_mod": true } },
"Witch Sight": { "class": "warlock", "type": "passive", "cooldown": 0, "description": "(Invocation) See the true form of any shapechanger or creature concealed by illusion/transmutation magic within 30 feet.", "effect": { "invocation_witch_sight_true_seeing_shapechangers_illusions_30ft": true } },
"Forcecage": { "class": "warlock", "type": "spell_like", "cooldown": "spell_slot_cost_7th_level_arcanum", "description": "(Mystic Arcanum) Create an immobile, invisible prison of magical force.", "effect": { "mystic_arcanum_forcecage_create_prison": true } },
"Hurl Through Hell": { "class": "warlock", "type": "attack", "cooldown": "long_rest", "description": "(Fiend Patron) When you hit a creature with an attack, instantly transport it through the lower planes. It reappears at end of your next turn, taking 10d10 psychic damage.", "effect": { "condition_fiend_patron_on_hit_hurl_through_hell_10d10_psychic": true } },
"Create Thrall": { "class": "warlock", "type": "utility", "cooldown": "long_rest", "description": "(Great Old One Patron) Charm a humanoid indefinitely, it becomes your thrall.", "effect": { "condition_great_old_one_patron_create_permanent_thrall": true } },
"Visions of Distant Realms": { "class": "warlock", "type": "utility", "cooldown": 0, "description": "(Invocation) Cast Arcane Eye at will.", "effect": { "invocation_visions_of_distant_realms_arcane_eye_at_will": true } },
"Dark Delirium": { "class": "warlock", "type": "utility", "cooldown": "short_rest", "description": "(Archfey Patron) Charm or frighten a creature, plunging it into an illusory realm.", "effect": { "condition_archfey_patron_charm_frighten_illusory_realm": true } },
"Soul Mirror": { "class": "warlock", "type": "defensive", "cooldown": "long_rest", "description": "Reflect a portion of damage taken back at an attacker, or absorb life force.", "effect": { "patron_specific_soul_damage_reflection_or_absorption": true } },
"True Polymorph": { "class": "warlock", "type": "spell_like", "cooldown": "spell_slot_cost_9th_level_arcanum", "description": "(Mystic Arcanum) Transform a creature or object into another.", "effect": { "mystic_arcanum_true_polymorph": true } },
"Foresight": { "class": "warlock", "type": "spell_like", "cooldown": "spell_slot_cost_9th_level_arcanum", "description": "(Mystic Arcanum) Gain insight into the immediate future.", "effect": { "mystic_arcanum_foresight": true } },
"Wish (Patron's Whim)": { "class": "warlock", "type": "spell_like", "cooldown": "spell_slot_cost_9th_level_arcanum", "description": "(Mystic Arcanum) A limited wish granted by your patron, often with unpredictable outcomes or specific limitations related to the patron's nature.", "effect": { "mystic_arcanum_wish_limited_by_patron": true } },
"Primal Scream": { "class": "barbarian", "type": "utility", "cooldown": 0, "description": "A terrifying scream that can be part of entering a Rage.", "effect": { "utility_part_of_rage_intimidation_effect": true } },
"Power Attack": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "You can choose to take a -5 penalty to hit for +10 damage on melee weapon attacks (similar to Great Weapon Master, but perhaps broader).", "effect": { "melee_power_attack_penalty_hit_bonus_damage": true } },
"Furious Charge": { "class": "barbarian", "type": "movement", "cooldown": 3, "description": "Move up to your speed towards an enemy and make an attack with advantage.", "effect": { "movement_charge_attack_with_advantage": true } },
"Intimidating Presence": { "class": "barbarian", "type": "debuff", "cooldown": "short_rest", "description": "As an action, force one creature to make a Wisdom save or become frightened of you for 1 minute.", "effect": { "target_enemy_frighten_save_wis": true, "duration_1_minute": true } },
"Path Feature (e.g., Totem Spirit)": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Primal Path.", "effect": { "utility": "primal_path_specific_feature" } },
"Mighty Swing": { "class": "barbarian", "type": "attack", "cooldown": 0, "description": "When raging, your melee weapon attacks deal an extra +2 damage.", "effect": { "condition_raging_bonus_melee_damage": 2 } },
"Ground Slam": { "class": "barbarian", "type": "attack", "cooldown": "short_rest", "description": "Slam the ground, creating a shockwave that can knock enemies prone in a small radius.", "effect": { "aoe_10ft_radius_prone_save_str": true } },
"Fearsome Yell": { "class": "barbarian", "type": "debuff", "cooldown": "short_rest", "description": "All enemies within 30 feet that can hear you must make a Wisdom save or have disadvantage on their next attack roll.", "effect": { "aoe_30ft_hear_disadvantage_next_attack_save_wis": true } },
"Wild Strikes": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "While raging, you can make an additional melee attack as a bonus action.", "effect": { "condition_raging_bonus_action_melee_attack": true } },
"Unstoppable Momentum": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "If you move at least 20 feet in a straight line towards a target before hitting it with a melee attack, the target takes extra damage and must make a Strength save or be knocked prone.", "effect": { "condition_move_20ft_straight_charge_bonus_damage_prone_save_str": true } },
"Aspect of the Beast": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "(Totem Path) Gain a benefit related to your chosen totem animal (e.g., Eagle's sight, Bear's resilience).", "effect": { "primal_path_totem_aspect_benefit": true } },
"Earth Shaker": { "class": "barbarian", "type": "attack", "cooldown": "long_rest", "description": "Strike the ground with immense force, causing an earthquake in a large radius.", "effect": { "aoe_30ft_radius_earthquake_damage_prone_difficult_terrain": true } },
"Hunter's Senses": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Advantage on Wisdom (Perception) checks related to tracking or noticing hidden creatures.", "effect": { "advantage_perception_tracking_hidden": true } },
"Ambush Breaker": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "If you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn if you enter a rage.", "effect": { "condition_surprised_can_act_if_rage": true } },
"Savage Roar": { "class": "barbarian", "type": "buff", "cooldown": "short_rest", "description": "Let out a roar that grants you and nearby allies temporary HP.", "effect": { "aoe_10ft_allies_temp_hp_barb_level": true } },
"Bone Breaker": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "When you score a critical hit with a melee weapon attack, you can also choose to break one of the target's bones (DM discretion on effect, e.g., reduced speed, disadvantage on certain actions).", "effect": { "on_critical_hit_break_bone_debuff": true } },
"Rage Damage +3": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Your rage damage bonus increases.", "effect": { "buff_rage_damage_bonus_increase": true } },
"Overwhelm": { "class": "barbarian", "type": "attack", "cooldown": "short_rest", "description": "Make a reckless attack. If it hits, the target is also stunned until the end of your next turn.", "effect": { "reckless_attack_on_hit_stun_save_con": true } },
"Spirit Walker": { "class": "barbarian", "type": "utility", "cooldown": "long_rest", "description": "(Totem Path) Commune with spirits to gain information or guidance.", "effect": { "primal_path_totem_spirit_communing": true } },
"Terrifying Rage": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Creatures of your choice that start their turn within 10 feet of you while you are raging must make a Wisdom save or become frightened.", "effect": { "condition_raging_aura_10ft_frighten_save_wis": true } },
"Undying Fury": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "If you drop to 0 HP while raging and don't die outright, you can make a DC 10 Con save. If successful, drop to 1 HP instead. DC increases by 5 each time.", "effect": { "condition_raging_hp_to_0_save_con_to_1_hp_increasing_dc": true } },
"Defy Death": { "class": "barbarian", "type": "passive", "cooldown": "long_rest", "description": "Once per long rest, when you make a death saving throw, you can choose to make it a 20.", "effect": { "once_per_long_rest_death_save_becomes_20": true } },
"Wrecking Ball": { "class": "barbarian", "type": "attack", "cooldown": "short_rest", "description": "When raging, you can use an action to make a powerful swing that deals extra damage to objects and structures, and can hit multiple adjacent targets.", "effect": { "condition_raging_action_cleave_extra_damage_objects": true } },
"Primal Strength": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Your Strength score increases by 2 and your maximum for that score is now 22.", "effect": { "strength_increase_2_max_22": true } },
"Devastating Blow": { "class": "barbarian", "type": "attack", "cooldown": "long_rest", "description": "Once per long rest, you can choose to make one melee weapon attack a devastating blow. If it hits, it's a critical hit and deals maximum weapon damage dice.", "effect": { "once_per_long_rest_guaranteed_crit_max_weapon_dice": true } },
"Shatter Defenses": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "If you hit a creature with Reckless Attack, all subsequent attacks against that creature by anyone have advantage until the start of your next turn.", "effect": { "on_reckless_attack_hit_grant_advantage_all_vs_target": true } },
"Retaliation": { "class": "barbarian", "type": "defensive", "cooldown": 0, "description": "(Path Feature) When you take damage from a creature within 5 feet, use your reaction to make a melee weapon attack against it.", "effect": { "primal_path_retaliation_feature": true } },
"Raging Storm": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "(Storm Herald Path) Your storm aura effects are enhanced.", "effect": { "primal_path_storm_herald_enhanced_aura": true } },
"Unending Rage": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "Your rage lasts for up to 10 minutes, or until you fall unconscious or choose to end it.", "effect": { "buff_rage_duration_10_minutes": true } },
"Focused Fury": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "While raging, you can choose to not make Reckless Attacks to gain a +2 bonus to AC.", "effect": { "condition_raging_trade_reckless_for_ac_bonus_2": true } },
"Titan's Grip": { "class": "barbarian", "type": "passive", "cooldown": 0, "description": "You can wield two-handed melee weapons in one hand, but with disadvantage on attack rolls unless raging.", "effect": { "wield_two_handed_weapon_one_hand_disadvantage_unless_raging": true } },
"Earthshattering Roar": { "class": "barbarian", "type": "attack", "cooldown": "long_rest", "description": "Let out a roar so powerful it creates a shockwave, damaging and deafening creatures in a cone.", "effect": { "aoe_30ft_cone_damage_thunder_deafen_save_con": true } },
"Living Avalanche": { "class": "barbarian", "type": "movement", "cooldown": "short_rest", "description": "While raging, you can move through the space of hostile creatures, potentially knocking them prone.", "effect": { "condition_raging_move_through_hostiles_prone_save_str": true } },
"Sucker Punch": { "class": "brawler", "type": "attack", "cooldown": 2, "description": "An unexpected strike that deals bonus damage if the target hasn't acted yet in combat.", "effect": { "bonus_damage_if_target_not_acted": "1d6" } },
"Brace Up": { "class": "brawler", "type": "defensive", "cooldown": "short_rest", "description": "As a bonus action, gain temporary HP equal to your Constitution modifier.", "effect": { "bonus_action_gain_temp_hp_con_mod": true } },
"Pocket Sand": { "class": "brawler", "type": "debuff", "cooldown": 3, "description": "Throw dirt or sand in an enemy's eyes, imposing disadvantage on their next attack roll.", "effect": { "target_enemy_disadvantage_next_attack_save_dex": true } },
"Low Blow": { "class": "brawler", "type": "attack", "cooldown": 0, "description": "Part of Dirty Fighting. An unarmed strike that, on a hit, can force a Con save to avoid being stunned for 1 round.", "effect": { "on_unarmed_hit_stun_save_con": true, "part_of": "Dirty Fighting" } },
"Headbutt": { "class": "brawler", "type": "attack", "cooldown": 4, "description": "Make an unarmed strike with your head. If it hits, the target must make a Con save or be dazed (disadvantage on attacks) until end of its next turn.", "effect": { "unarmed_strike_headbutt_dazed_save_con": true } },
"Style Feature (e.g., Strong-Arm Grappler)": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Brawling Style.", "effect": { "utility": "brawling_style_specific_feature" } },
"Get Back Up": { "class": "brawler", "type": "utility", "cooldown": "short_rest", "description": "If knocked prone, you can use your reaction to stand up immediately.", "effect": { "on_prone_reaction_stand_up": true } },
"Gut Punch": { "class": "brawler", "type": "attack", "cooldown": 3, "description": "An unarmed strike that deals extra damage and can make the target unable to take reactions until its next turn.", "effect": { "unarmed_strike_extra_damage_1d4_no_reactions_save_con": true } },
"Bob and Weave": { "class": "brawler", "type": "defensive", "cooldown": 0, "description": "When an attacker you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.", "effect": { "on_hit_reaction_halve_damage": true } },
"Haymaker": { "class": "brawler", "type": "attack", "cooldown": "short_rest", "description": "Make an unarmed strike with advantage. If it hits, it's a critical hit.", "effect": { "unarmed_strike_advantage_guaranteed_crit": true } },
"Power Through": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "When you are subjected to an effect that would move you against your will or knock you prone, you can use your reaction to ignore it.", "effect": { "on_forced_movement_or_prone_reaction_ignore": true } },
"Improvised Weapon Master": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "You are proficient with improvised weapons and they deal 1d6 damage (or original if higher).", "effect": { "proficiency_improvised_weapons_damage_1d6": true } },
"Set Up": { "class": "brawler", "type": "utility", "cooldown": 3, "description": "As a bonus action, create an opening. The next attack roll against a target creature by an ally has advantage.", "effect": { "bonus_action_grant_ally_advantage_vs_target": true } },
"Shoulder Check": { "class": "brawler", "type": "movement", "cooldown": 2, "description": "Move up to 10 feet and attempt to shove a creature. You have advantage on the Strength (Athletics) check.", "effect": { "move_10ft_shove_attempt_advantage_athletics": true } },
"Ignore Pain": { "class": "brawler", "type": "defensive", "cooldown": "short_rest", "description": "As a bonus action, gain resistance to bludgeoning, piercing, and slashing damage for 1 minute.", "effect": { "bonus_action_resistance_physical_1_minute": true } },
"Combination Strike": { "class": "brawler", "type": "attack", "cooldown": 0, "description": "If you hit with two unarmed strikes on your turn, your second hit deals an extra Martial Arts die of damage.", "effect": { "on_two_unarmed_hits_second_deals_extra_martial_arts_die": true } },
"Mean Mug": { "class": "brawler", "type": "debuff", "cooldown": "short_rest", "description": "Make an Intimidation check contested by target's Insight. On success, target has disadvantage on attacks against you for 1 minute.", "effect": { "intimidation_vs_insight_disadvantage_attacks_vs_you_1_minute": true } },
"Choke Hold": { "class": "brawler", "type": "attack", "cooldown": "short_rest", "description": "Attempt to grapple and silence a target. If successful, target cannot speak and may begin to suffocate.", "effect": { "grapple_attempt_silence_suffocation_rules": true } },
"Disarm": { "class": "brawler", "type": "attack", "cooldown": 3, "description": "On a hit with an unarmed strike, force target to make a Strength save or drop one held item.", "effect": { "on_unarmed_hit_disarm_save_str": true } },
"Ring the Bell": { "class": "brawler", "type": "attack", "cooldown": "short_rest", "description": "An unarmed strike to the head. On hit, target must make Con save or be stunned until end of your next turn.", "effect": { "unarmed_strike_head_stun_save_con": true } },
"No Holds Barred": { "class": "brawler", "type": "buff", "cooldown": "long_rest", "description": "For 1 minute, your unarmed strikes deal an extra 1d4 damage, and you have advantage on grapple checks.", "effect": { "duration_1_minute_unarmed_extra_1d4_advantage_grapple": true } },
"Rabble Rouser": { "class": "brawler", "type": "utility", "cooldown": "long_rest", "description": "Incite a crowd, potentially starting a riot or creating a diversion.", "effect": { "utility_incite_crowd_riot_diversion": true } },
"One-Two Punch": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "When you use Flurry of Blows (if Monk multiclass) or make bonus action unarmed strike, you can move 5ft between attacks.", "effect": { "on_bonus_unarmed_strike_move_5ft_between": true } },
"Turn the Tables": { "class": "brawler", "type": "defensive", "cooldown": "short_rest", "description": "When an enemy misses you with a melee attack, you can use your reaction to make an unarmed strike or grapple attempt against them.", "effect": { "on_enemy_melee_miss_reaction_unarmed_or_grapple": true } },
"Unflinching": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "Advantage on saving throws against being frightened.", "effect": { "advantage_saves_vs_frightened": true } },
"Second Wind (Brawler version)": { "class": "brawler", "type": "utility", "cooldown": "short_rest", "description": "As a bonus action, regain hit points equal to 1d10 + Brawler level.", "effect": { "bonus_action_heal_self_1d10_plus_brawler_level": true } },
"The Best Defense...": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "When you take the Attack action, you can choose to forgo one of your attacks to gain +2 AC until your next turn.", "effect": { "trade_attack_for_ac_bonus_2": true } },
"Finishing Move Setup": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "Certain abilities or a sequence of hits can set up a target for a devastating Finishing Move.", "effect": { "utility_setup_for_finishing_move": true } },
"Master of the Pit": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "Advantage on attacks against prone or grappled creatures. You can grapple creatures up to two sizes larger.", "effect": { "advantage_vs_prone_grappled_grapple_larger_creatures": true } },
"Spiteful Retort": { "class": "brawler", "type": "defensive", "cooldown": 0, "description": "If a creature deals damage to you, you can use your reaction to deal half that damage back to them as bludgeoning damage (if within 5ft).", "effect": { "on_damage_taken_reaction_deal_half_damage_back_melee": true } },
"Center of Attention": { "class": "brawler", "type": "utility", "cooldown": "short_rest", "description": "As an action, attempt to draw the attacks of all hostile creatures within 30 feet to yourself for 1 round. (Wisdom save to resist).", "effect": { "action_taunt_all_hostiles_30ft_save_wis": true } },
"Bone-shattering Blow": { "class": "brawler", "type": "attack", "cooldown": "long_rest", "description": "An unarmed strike that deals extra damage and reduces target's AC by 2 for 1 minute on failed Con save.", "effect": { "unarmed_strike_extra_damage_2d8_reduce_ac_2_save_con": true } },
"True Grit": { "class": "brawler", "type": "passive", "cooldown": 0, "description": "When you make a death saving throw and roll a 19 or 20, you regain 1 HP.", "effect": { "on_death_save_19_20_regain_1_hp": true } },
"Lights Out": { "class": "brawler", "type": "attack", "cooldown": "long_rest", "description": "A powerful unarmed strike. If it reduces the target to 0 HP, they are knocked out instantly and cannot be revived by non-magical means for 1 hour.", "effect": { "unarmed_strike_on_0_hp_instant_knockout_no_revive_1_hour": true } },
"Last Man Standing": { "class": "brawler", "type": "passive", "cooldown": "long_rest", "description": "If you are the last conscious member of your party in a combat encounter, you gain advantage on all attacks, saves, and checks for 1 minute.", "effect": { "on_last_conscious_party_member_gain_universal_advantage_1_minute": true } },
"Target Assessment": { "class": "assassin", "type": "utility", "cooldown": 0, "description": "As a bonus action, make a Wisdom (Insight) check against a creature's Charisma (Deception) to learn one piece of information (e.g., vulnerability, current HP range).", "effect": { "bonus_action_insight_vs_deception_learn_info": true } },
"Shadow Arts (Minor)": { "class": "assassin", "type": "utility", "cooldown": "short_rest", "description": "You can cast Darkness, Darkvision, Pass Without Trace, or Silence once without components.", "effect": { "cast_one_spell_no_components_darkness_darkvision_pass_without_trace_silence": true } },
"Swift Action (Hide/Dash)": { "class": "assassin", "type": "movement", "cooldown": 0, "description": "You can take the Hide or Dash action as a bonus action.", "effect": { "bonus_action_hide_or_dash": true } },
"Calculated Approach": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "If you spend a full round observing a target without acting, your first attack against them has advantage and is a critical hit on 19-20.", "effect": { "on_observe_1_round_first_attack_advantage_crit_19_20": true } },
"Death from the Shadows": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "If you attack a creature that is surprised and you are hidden, your first hit is automatically a critical hit.", "effect": { "on_attack_surprised_hidden_target_auto_crit": true } },
"Infiltration Expertise": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "You have advantage on checks made to bypass security, blend into crowds, or create false identities.", "effect": { "advantage_infiltration_related_checks": true } },
"Poisoner's Touch": { "class": "assassin", "type": "utility", "cooldown": 0, "description": "You can apply poison to a weapon as a bonus action.", "effect": { "bonus_action_apply_poison": true } },
"Create Opening": { "class": "assassin", "type": "utility", "cooldown": "short_rest", "description": "As an action, create a diversion or exploit a minor flaw, granting the next attack against the target (by anyone) advantage.", "effect": { "action_create_diversion_grant_next_attack_advantage_vs_target": true } },
"Vanish (Brief Invisibility)": { "class": "assassin", "type": "stealth", "cooldown": "short_rest", "description": "As a bonus action, become invisible until the end of your current turn.", "effect": { "bonus_action_invisible_until_end_of_turn": true } },
"Anatomical Insight": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "Your Mortal Strike / Sneak Attack damage dice increase by one step (e.g., d6 to d8).", "effect": { "buff_mortal_strike_sneak_attack_die_increase": true } },
"Impersonation": { "class": "assassin", "type": "utility", "cooldown": 0, "description": "You can flawlessly mimic speech patterns and mannerisms of someone you've observed for at least 1 hour.", "effect": { "utility_mimic_speech_mannerisms_observed_1_hour": true } },
"False Identity": { "class": "assassin", "type": "utility", "cooldown": "long_rest", "description": "Spend time and resources to create a convincing false identity with documentation.", "effect": { "utility_create_false_identity_with_docs": true } },
"Ghostly Presence": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "You make no sound when you move, unless you choose to.", "effect": { "passive_silent_movement": true } },
"Contingency Plan": { "class": "assassin", "type": "utility", "cooldown": "long_rest", "description": "Prepare a secret escape route or hidden cache in an area you've studied.", "effect": { "utility_prepare_escape_route_hidden_cache": true } },
"Exploit Weakness": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "If you know a creature's vulnerability (from Target Assessment or other means), your first hit against it exploiting that vulnerability deals maximum damage.", "effect": { "on_known_vulnerability_hit_deal_max_damage": true } },
"Blend into Crowd": { "class": "assassin", "type": "stealth", "cooldown": 0, "description": "You can attempt to hide even when only obscured by a crowd of creatures.", "effect": { "hide_condition_obscured_by_crowd": true } },
"Undetectable": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "You cannot be targeted by divination magic or perceived through magical scrying sensors against your will.", "effect": { "immune_divination_scrying_against_will": true } },
"Swift Poison Application": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "Applying poison to a weapon is a free action once per turn.", "effect": { "free_action_apply_poison_once_per_turn": true } },
"Potent Toxins": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "The save DC for poisons you apply increases by 2.", "effect": { "buff_poison_save_dc_increase_2": true } },
"Perfect Execution": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "When you use your Assassinate feature and hit, the target also suffers an additional effect (e.g., poisoned, bleeding) based on your choice.", "effect": { "on_assassinate_hit_add_chosen_effect_poisoned_bleeding": true } },
"Contingency Strike": { "class": "assassin", "type": "utility", "cooldown": "long_rest", "description": "Prepare a single attack to be delivered automatically under specific trigger conditions you set.", "effect": { "utility_prepare_triggered_automatic_attack": true } },
"Shadow Step": { "class": "assassin", "type": "movement", "cooldown": 0, "description": "As a bonus action, if you are in dim light or darkness, you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness.", "effect": { "bonus_action_teleport_shadows_60ft": true } },
"Isolate Target": { "class": "assassin", "type": "utility", "cooldown": "short_rest", "description": "Use stealth and diversions to separate one target from its group.", "effect": { "utility_isolate_target_from_group": true } },
"Sudden Death": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "Your Death Strike feature can now be used on any creature you have advantage against, not just surprised ones.", "effect": { "buff_death_strike_usability_on_advantage": true } },
"Inescapable Justice": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "Creatures trying to escape from you (e.g., Dash action) provoke opportunity attacks even if they wouldn't normally.", "effect": { "targets_escaping_provoke_opportunity_attacks": true } },
"Sense the Unseen": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "You are aware of the location of any invisible or hidden creature within 30 feet of you, provided you have line of sight to their space.", "effect": { "sense_invisible_hidden_creatures_30ft_line_of_sight": true } },
"Anticipate Ambush": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "You cannot be surprised.", "effect": { "immune_surprised": true } },
"Untouchable": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "Attackers have disadvantage on opportunity attacks made against you.", "effect": { "disadvantage_opportunity_attacks_vs_you": true } },
"Master of Evasion": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "When subjected to an effect that allows a Dexterity save for half damage, you instead take no damage on a success, and only half on a failure.", "effect": { "improved_evasion_dex_save_no_damage_on_success_half_on_fail": true } },
"One with the Night": { "class": "assassin", "type": "stealth", "cooldown": "short_rest", "description": "While in darkness, you are invisible to creatures that rely on darkvision.", "effect": { "condition_darkness_invisible_to_darkvision": true } },
"Fading Strike": { "class": "assassin", "type": "attack", "cooldown": "short_rest", "description": "After hitting with a melee attack, you can use your bonus action to become invisible and move up to half your speed.", "effect": { "on_melee_hit_bonus_action_invisible_move_half_speed": true } },
"Become Death": { "class": "assassin", "type": "ultimate", "cooldown": "long_rest", "description": "For 1 minute, you become a shadowy phantom. You gain resistance to all damage, can move through creatures and objects, and your attacks deal extra necrotic damage.", "effect": { "duration_1_minute_shadow_phantom_form_resist_all_move_through_extra_necrotic": true } },
"Finality": { "class": "assassin", "type": "passive", "cooldown": 0, "description": "If you reduce a creature to 0 HP with your Mortal Strike or Assassinate feature, you regain a use of a short rest ability.", "effect": { "on_0_hp_with_mortal_strike_assassinate_regain_short_rest_ability_use": true } },
"Precise Shot": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Your ranged weapon attacks ignore half and three-quarters cover.", "effect": { "ranged_attacks_ignore_cover": true } },
"Keen Senses": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "You have advantage on Wisdom (Perception) checks.", "effect": { "advantage_perception_checks": true } },
"Ensnaring Strike (non-magical)": { "class": "hunter", "type": "attack", "cooldown": "short_rest", "description": "Your next hit with a ranged weapon attack can also ensnare the target, reducing its speed on a failed Strength save.", "effect": { "on_next_ranged_hit_ensnare_reduce_speed_save_str": true } },
"Patient Ambusher": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "If you haven't moved this turn, your first ranged attack has advantage.", "effect": { "condition_no_move_this_turn_first_ranged_attack_advantage": true } },
"Conclave Feature (e.g., Giant Killer)": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Hunter's Conclave.", "effect": { "utility": "hunter_conclave_specific_feature" } },
"Hunter's Eye": { "class": "hunter", "type": "utility", "cooldown": "short_rest", "description": "As a bonus action, gain advantage on your next attack roll against a creature you have marked with Hunter's Quarry.", "effect": { "bonus_action_advantage_next_attack_vs_quarry_target": true } },
"Rapid Shot": { "class": "hunter", "type": "attack", "cooldown": 0, "description": "You can make one additional ranged weapon attack as a bonus action.", "effect": { "bonus_action_additional_ranged_attack": true } },
"Covering Fire": { "class": "hunter", "type": "utility", "cooldown": "short_rest", "description": "As an action, you can lay down suppressing fire, imposing disadvantage on attacks made by enemies in a designated area.", "effect": { "action_suppressing_fire_area_disadvantage_enemy_attacks": true } },
"Multi-Shot": { "class": "hunter", "type": "attack", "cooldown": 0, "description": "(Hunter Conclave feature) Attack multiple targets in an area.", "effect": { "hunter_conclave_multi_shot_feature": true } },
"Crippling Shot": { "class": "hunter", "type": "attack", "cooldown": "short_rest", "description": "Your next ranged weapon hit can reduce the target's speed to 0 on a failed Constitution save.", "effect": { "on_next_ranged_hit_reduce_speed_to_0_save_con": true } },
"Horde Breaker": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "(Hunter Conclave feature) Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature within 5ft of the original target and in range of your weapon.", "effect": { "hunter_conclave_horde_breaker_feature": true } },
"Advanced Traps": { "class": "hunter", "type": "utility", "cooldown": 0, "description": "You can craft more potent or varied traps (e.g., explosive, magical).", "effect": { "utility_craft_advanced_traps_explosive_magical": true } },
"Evasion (Light Armor)": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "When subjected to an effect for Dex save for half damage, take no damage on success, half on fail, if wearing light or no armor.", "effect": { "dex_save_effect_no_damage_on_success_half_on_fail_light_no_armor": true } },
"Land's Stride": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Moving through nonmagical difficult terrain costs no extra movement. Advantage on saves vs. plants that impede movement.", "effect": { "movement_ignore_nonmagical_difficult_terrain_advantage_saves_vs_plant_movement_impede": true } },
"Pinning Shot": { "class": "hunter", "type": "attack", "cooldown": "short_rest", "description": "A ranged attack that, on hit, can pin a creature to a surface if it fails a Strength save, restraining it.", "effect": { "ranged_attack_on_hit_pin_restrain_save_str": true } },
"Camouflage": { "class": "hunter", "type": "stealth", "cooldown": 0, "description": "You can attempt to hide even when only lightly obscured by foliage, heavy rain, etc.", "effect": { "hide_condition_lightly_obscured_natural": true } },
"Master of the Hunt": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "You have advantage on initiative rolls and against creatures that haven't acted yet.", "effect": { "advantage_initiative_and_vs_creatures_not_acted": true } },
"Volley": { "class": "hunter", "type": "attack", "cooldown": 0, "description": "(Hunter Conclave feature) Make a ranged attack against any number of creatures within 10 feet of a point you can see.", "effect": { "hunter_conclave_volley_feature": true } },
"Stand Against the Tide": { "class": "hunter", "type": "defensive", "cooldown": 0, "description": "(Hunter Conclave feature) Reaction to force an attacker to target another creature within 5ft of you instead, if it misses you.", "effect": { "hunter_conclave_stand_against_the_tide_feature": true } },
"Called Shot": { "class": "hunter", "type": "attack", "cooldown": "short_rest", "description": "Make a ranged attack roll against a specific part of a creature (e.g., eye, wing). On hit, apply a condition (blinded, reduced fly speed) on failed Con save.", "effect": { "ranged_attack_called_shot_apply_condition_save_con": true } },
"Sudden Strike": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "If you take the Attack action on your first turn of combat, you can make one additional ranged weapon attack as part of that action.", "effect": { "first_turn_combat_attack_action_additional_ranged_attack": true } },
"Eyes of the Eagle": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "You have advantage on Wisdom (Perception) checks that rely on sight. You can see much farther than normal.", "effect": { "advantage_sight_perception_extended_range_sight": true } },
"No Escape": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Opportunity attacks you make stop the target's movement for the rest of their turn.", "effect": { "opportunity_attacks_stop_target_movement": true } },
"Leave No Trace": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "You and your group cannot be tracked by nonmagical means unless you choose to leave a trail.", "effect": { "group_cannot_be_tracked_nonmagically": true } },
"One with the Wild": { "class": "hunter", "type": "stealth", "cooldown": "short_rest", "description": "Become effectively invisible while in natural surroundings and stationary.", "effect": { "condition_natural_surroundings_stationary_become_invisible": true } },
"Giant Slayer (Improved)": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "(Hunter Conclave feature) Your Giant Killer feature deals more damage or has other benefits.", "effect": { "hunter_conclave_giant_killer_improved": true } },
"Perfected Ambush": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "If you attack a creature before it has taken any actions in combat, that attack is automatically a critical hit.", "effect": { "on_attack_before_target_acts_auto_crit": true } },
"Arrow-Catching": { "class": "hunter", "type": "defensive", "cooldown": 0, "description": "As a reaction when hit by a ranged weapon attack, reduce damage by 1d10 + Dex mod. If reduced to 0, you catch it.", "effect": { "reaction_on_ranged_weapon_hit_reduce_damage_catch_if_0": true } },
"Steel Will": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Advantage on saving throws against being frightened.", "effect": { "advantage_saves_vs_frightened_hunter": true } },
"Lethal Strike": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Your ranged weapon attacks score a critical hit on a roll of 19-20.", "effect": { "ranged_weapon_crit_range_19_20": true } },
"Unfaltering Aim": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "If you miss with a ranged weapon attack on your turn, you can use your bonus action to reroll that attack roll.", "effect": { "on_miss_ranged_attack_bonus_action_reroll": true } },
"Death Stroke": { "class": "hunter", "type": "attack", "cooldown": "long_rest", "description": "Once per long rest, if you hit with a ranged weapon attack, you can choose to make it a critical hit. If the target is your Hunter's Quarry, it must also make a Con save or be stunned for 1 minute.", "effect": { "once_per_long_rest_ranged_hit_auto_crit_stun_quarry_target_save_con": true } },
"The Ultimate Prey": { "class": "hunter", "type": "passive", "cooldown": 0, "description": "Once per long rest, you can designate one creature as your ultimate prey. You always know its location (if on same plane), have advantage on all attacks against it, and it has disadvantage on saves against your Hunter abilities.", "effect": { "designate_ultimate_prey_know_location_adv_attacks_disadv_saves_vs_hunter_abilities": true } },
"Speak with Spirits": { "class": "shaman", "type": "utility", "cooldown": 0, "description": "You can communicate with nature spirits, ancestral spirits, or minor elemental spirits.", "effect": { "utility_communicate_with_spirits": true } },
"Spiritual Weapon (Minor)": { "class": "shaman", "type": "summon", "cooldown": "short_rest", "description": "Summon a lesser spiritual weapon that makes attacks as a bonus action.", "effect": { "summon_lesser_spiritual_weapon_bonus_action_attack": true } },
"Healing Totem": { "class": "shaman", "type": "utility", "cooldown": 0, "description": "(Spirit Totem) Place a totem that heals allies in an aura.", "effect": { "spirit_totem_healing_aura_allies": true } },
"Earthbind Totem": { "class": "shaman", "type": "utility", "cooldown": 0, "description": "(Spirit Totem) Place a totem that reduces flying speed of enemies or pulls them down.", "effect": { "spirit_totem_reduce_flying_speed_pull_down_enemies": true } },
"Ancestral Protection": { "class": "shaman", "type": "defensive", "cooldown": "short_rest", "description": "Call upon ancestral spirits to protect an ally, imposing disadvantage on an attack roll against them.", "effect": { "target_ally_ancestral_protection_disadvantage_attack_vs_them": true } },
"Elemental Attunement": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You have resistance to one elemental damage type (chosen at level up) related to your spirit guide.", "effect": { "resistance_chosen_elemental_damage_type": true } },
"Ritual Casting": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You can cast shaman spells with the ritual tag as rituals.", "effect": { "utility_can_cast_shaman_ritual_spells_as_rituals": true } },
"Elemental Lash": { "class": "shaman", "type": "buff", "cooldown": 0, "description": "Imbue your weapon attacks with elemental energy (fire, cold, lightning) from your spirit guide, dealing extra damage.", "effect": { "buff_weapon_attacks_extra_elemental_damage_1d6": true } },
"Spirit Link": { "class": "shaman", "type": "utility", "cooldown": "short_rest", "description": "Link your spirit with an ally. You can choose to take half the damage they take (rounded down).", "effect": { "target_ally_link_spirits_take_half_their_damage": true } },
"Guardian Spirit": { "class": "shaman", "type": "summon", "cooldown": "long_rest", "description": "Summon a powerful guardian spirit (CR 2-3 beast or elemental) to fight alongside you.", "effect": { "summon_guardian_spirit_cr2_3_beast_elemental": true } },
"Stoneskin Totem": { "class": "shaman", "type": "utility", "cooldown": 0, "description": "(Spirit Totem) Place a totem that grants allies resistance to nonmagical physical damage.", "effect": { "spirit_totem_resistance_nonmagical_physical_aura_allies": true } },
"Vision Quest": { "class": "shaman", "type": "utility", "cooldown": "long_rest", "description": "Enter a trance to receive a vision or guidance from the spirit world.", "effect": { "utility_enter_trance_receive_spiritual_vision_guidance": true } },
"Ethereal Jaunt": { "class": "shaman", "type": "movement", "cooldown": "short_rest", "description": "Briefly step into the Ethereal Plane, becoming invisible and able to move through objects.", "effect": { "movement_ethereal_jaunt_invisible_move_through_objects_short_duration": true } },
"Walk Between Worlds": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You have advantage on saves against being banished or transported to another plane against your will.", "effect": { "advantage_saves_vs_banishment_planar_transport": true } },
"Ghostly Form": { "class": "shaman", "type": "buff", "cooldown": "long_rest", "description": "Become incorporeal for 1 minute, gaining resistance to nonmagical damage and ability to move through creatures/objects.", "effect": { "buff_incorporeal_form_1_minute_resistance_move_through": true } },
"Astral Projection (Self)": { "class": "shaman", "type": "utility", "cooldown": "long_rest", "description": "Project your astral self, allowing travel on the Astral Plane.", "effect": { "utility_astral_projection_self_travel_astral_plane": true } },
"Unleash Elements": { "class": "shaman", "type": "attack", "cooldown": "short_rest", "description": "Channel raw elemental power in an area, dealing damage of a chosen type (fire, cold, lightning).", "effect": { "aoe_20ft_radius_elemental_damage_choice_4d8_save_dex_half": true } },
"Immunity to Possession": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You cannot be possessed by spirits or other entities against your will.", "effect": { "immune_to_possession": true } },
"See the Unseen": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You can see invisible creatures and objects, as well as into the Ethereal Plane, within 30 feet.", "effect": { "passive_see_invisible_ethereal_30ft": true } },
"Twin Totems": { "class": "shaman", "type": "utility", "cooldown": 0, "description": "You can have two different Spirit Totems active simultaneously.", "effect": { "utility_can_have_two_active_spirit_totems": true } },
"Totemic Projection": { "class": "shaman", "type": "utility", "cooldown": "short_rest", "description": "Place your Spirit Totems at a range up to 60 feet.", "effect": { "utility_place_spirit_totems_at_range_60ft": true } },
"Spiritual Balance": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against being charmed or frightened by spirits or fey.", "effect": { "advantage_saves_vs_charm_frighten_spirits_fey": true } },
"Purge Spirits": { "class": "shaman", "type": "utility", "cooldown": "long_rest", "description": "Attempt to banish a possessing spirit from a creature or object, or end effects created by spirits.", "effect": { "utility_banish_possessing_spirit_end_spirit_effects": true } },
"Whispers of the Past": { "class": "shaman", "type": "utility", "cooldown": "short_rest", "description": "Touch an object or location to receive visions or impressions of its past significant events or owners.", "effect": { "utility_psychometry_visions_of_past_events_owners": true } },
"Glimpse the Future": { "class": "shaman", "type": "utility", "cooldown": "long_rest", "description": "Gain a brief, uncontrolled glimpse of a possible future event, granting advantage on one roll related to it.", "effect": { "utility_glimpse_future_event_advantage_one_related_roll": true } },
"Ancestral Swarm": { "class": "shaman", "type": "attack", "cooldown": "long_rest", "description": "(Spirit Guide Feature) Summon a swarm of ancestral spirits to attack and hinder enemies.", "effect": { "spirit_guide_feature_summon_ancestral_spirit_swarm_attack_hinder": true } },
"Spirit Form (Lesser)": { "class": "shaman", "type": "buff", "cooldown": "long_rest", "description": "Partially shift into the spirit world, gaining some incorporeal traits and resistances.", "effect": { "buff_lesser_spirit_form_incorporeal_traits_resistances": true } },
"Unending Watch": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You no longer need to sleep and cannot be surprised while meditating (trance).", "effect": { "passive_no_sleep_needed_no_surprise_while_meditating": true } },
"Wrath of the Spirits": { "class": "shaman", "type": "attack", "cooldown": "long_rest", "description": "Unleash the fury of all allied spirits, dealing massive damage in an area based on number of active totems/summons.", "effect": { "aoe_massive_damage_scales_with_active_spirits_totems": true } },
"Blessing of the Ancients": { "class": "shaman", "type": "buff", "cooldown": "long_rest", "description": "Channel ancient power to grant significant, long-lasting boons to yourself and allies (e.g., +1 to all saves, damage resistance).", "effect": { "buff_self_allies_long_lasting_boons_saves_resistance": true } },
"Become the Avatar": { "class": "shaman", "type": "ultimate", "cooldown": "long_rest", "description": "Merge with your Spirit Guide or a powerful nature spirit, becoming a mighty avatar with unique abilities.", "effect": { "transformation_spirit_avatar_form_unique_abilities": true } },
"One with the Great Spirit": { "class": "shaman", "type": "passive", "cooldown": 0, "description": "You are in constant communion with the spirit world, gaining profound insights and resilience against mortal frailties.", "effect": { "passive_constant_spirit_communion_insights_resilience": true } },
"Goading Attack": { "class": "gladiator", "type": "attack", "cooldown": 0, "description": "(Combat Flourish) On hit, force enemy to make Wis save or have disadvantage on attacks against targets other than you.", "effect": { "combat_flourish_goading_attack_disadvantage_vs_others_save_wis": true } },
"Battlefield Taunt": { "class": "gladiator", "type": "debuff", "cooldown": "short_rest", "description": "As a bonus action, taunt an enemy. It must make a Wisdom save or have disadvantage on attack rolls for 1 minute if it doesn't target you.", "effect": { "bonus_action_taunt_enemy_disadvantage_if_not_target_you_save_wis": true } },
"Pushing Attack": { "class": "gladiator", "type": "attack", "cooldown": 0, "description": "(Combat Flourish) On hit, push enemy up to 15 feet away if they fail a Strength save.", "effect": { "combat_flourish_pushing_attack_push_15ft_save_str": true } },
"Dramatic Parry": { "class": "gladiator", "type": "defensive", "cooldown": 0, "description": "(Combat Flourish) Add Acclaim die to AC against one melee attack as a reaction.", "effect": { "combat_flourish_dramatic_parry_add_acclaim_die_to_ac_reaction": true } },
"Style Feature (e.g., Retiarius, Secutor)": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Gladiator Style (e.g., trident & net, sword & board).", "effect": { "utility_gladiator_style_specific_feature": true } },
"Signature Pose": { "class": "gladiator", "type": "utility", "cooldown": "short_rest", "description": "Strike a pose to gain Acclaim points or impose a minor condition on a taunted foe.", "effect": { "action_signature_pose_gain_acclaim_or_minor_condition_taunted_foe": true } },
"Mocking Blow": { "class": "gladiator", "type": "attack", "cooldown": 3, "description": "An attack that deals no damage but forces the target to make a Wisdom save or attack you recklessly on its next turn.", "effect": { "attack_no_damage_force_reckless_attack_on_you_save_wis": true } },
"Feinting Attack": { "class": "gladiator", "type": "attack", "cooldown": 0, "description": "(Combat Flourish) Use bonus action to feint, giving advantage on your next attack roll against a creature this turn.", "effect": { "combat_flourish_feinting_attack_bonus_action_advantage_next_attack": true } },
"Spectacular Maneuver": { "class": "gladiator", "type": "utility", "cooldown": "short_rest", "description": "Perform an acrobatic feat or impressive display to gain Acclaim and possibly daze an opponent.", "effect": { "action_spectacular_maneuver_gain_acclaim_daze_opponent_save_wis": true } },
"Unrelenting Assault": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "If you hit with an attack, you can use your bonus action to make another attack with a different light weapon.", "effect": { "on_hit_bonus_action_attack_different_light_weapon": true } },
"Fan Shield": { "class": "gladiator", "type": "defensive", "cooldown": 0, "description": "(Style Feature) If using a shield, you can use it to grant allies partial cover.", "effect": { "style_feature_shield_grant_allies_partial_cover": true } },
"Net Mastery": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "(Style Feature) You are proficient with nets and can throw them more effectively or reload them faster.", "effect": { "style_feature_net_proficiency_improved_use": true } },
"Immunity to Frightened": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "You are immune to the frightened condition while you can see the source of your fear.", "effect": { "immune_frightened_if_can_see_source": true } },
"Inspire Allies": { "class": "gladiator", "type": "buff", "cooldown": "short_rest", "description": "Use your showmanship to grant nearby allies temporary HP or advantage on their next attack.", "effect": { "action_inspire_allies_temp_hp_or_advantage_next_attack": true } },
"Test of Mettle": { "class": "gladiator", "type": "utility", "cooldown": "short_rest", "description": "Challenge an opponent to a one-on-one duel. Other creatures are magically discouraged from interfering.", "effect": { "action_challenge_duel_discourage_interference": true } },
"Overpowering Attack": { "class": "gladiator", "type": "attack", "cooldown": "short_rest", "description": "Make an attack roll with advantage. If it hits, the target is pushed 10 feet and knocked prone.", "effect": { "attack_advantage_on_hit_push_10ft_prone": true } },
"Gain Acclaim on Crit": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "When you score a critical hit, you gain 1 Acclaim point.", "effect": { "on_critical_hit_gain_acclaim_point": true } },
"Stunning Critical": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "When you score a critical hit, the target must also make a Con save or be stunned for 1 round.", "effect": { "on_critical_hit_stun_target_save_con": true } },
"Sand in the Eyes": { "class": "gladiator", "type": "debuff", "cooldown": 0, "description": "(Style Feature / Dirty Trick) Temporarily blind an opponent.", "effect": { "style_feature_dirty_trick_blind_opponent_save_dex": true } },
"Master Duelist": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "You gain a +2 bonus to attack and damage rolls when fighting a single creature with no other creatures within 5 feet of you or it.", "effect": { "bonus_attack_damage_vs_isolated_single_target": 2 } },
"The People's Champion": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "You gain more Acclaim for successful maneuvers and your fame spreads faster.", "effect": { "passive_increased_acclaim_gain_faster_fame": true } },
"Finishing Flourish": { "class": "gladiator", "type": "attack", "cooldown": "short_rest", "description": "If you reduce a creature to 0 HP, you can make a spectacular display to gain significant Acclaim and inspire allies.", "effect": { "on_reduce_target_to_0_hp_gain_acclaim_inspire_allies": true } },
"Unbreakable Focus": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "Advantage on Constitution saving throws to maintain concentration on abilities or effects.", "effect": { "advantage_concentration_saves_abilities_effects": true } },
"Riposte": { "class": "gladiator", "type": "attack", "cooldown": 0, "description": "When a creature misses you with a melee attack, you can use your reaction to make a melee weapon attack against it.", "effect": { "on_enemy_melee_miss_reaction_melee_attack": true } },
"Recover Acclaim": { "class": "gladiator", "type": "utility", "cooldown": "short_rest", "description": "Spend a few moments playing to the crowd (or meditating on past glories) to regain spent Acclaim points.", "effect": { "action_recover_acclaim_points": true } },
"Gain Temporary HP": { "class": "gladiator", "type": "buff", "cooldown": 0, "description": "Part of 'Take a Bow'. Gain temporary HP based on Acclaim spent or performance.", "effect": { "buff_gain_temporary_hp_from_acclaim_or_performance": true } },
"Master of the Arena": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "(Style Capstone) Gain powerful benefits related to your chosen Gladiator Style.", "effect": { "style_capstone_powerful_style_benefits": true } },
"Unstoppable": { "class": "gladiator", "type": "passive", "cooldown": "long_rest", "description": "Once per long rest, if an attack would reduce you to 0 HP, you drop to 1 HP instead.", "effect": { "once_per_long_rest_drop_to_1_hp_instead_of_0": true } },
"Aura of Renown": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "Friendly creatures within 10 feet of you have advantage on saves against being frightened or charmed due to your inspiring presence.", "effect": { "aura_10ft_allies_advantage_saves_frightened_charmed": true } },
"Terrifying Entrance": { "class": "gladiator", "type": "utility", "cooldown": "long_rest", "description": "When you enter combat, you can make an Intimidation check to frighten all enemies within 30 feet who can see you.", "effect": { "on_combat_start_intimidation_check_frighten_enemies_30ft": true } },
"Perfected Form": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "Your attacks score a critical hit on a 19-20, and you can reroll one damage die on critical hits.", "effect": { "crit_range_19_20_reroll_one_damage_die_on_crit": true } },
"Deathblow": { "class": "gladiator", "type": "attack", "cooldown": "long_rest", "description": "If you hit a creature that has less than 25% of its maximum HP, you can choose to force it to make a Con save. On failure, it drops to 0 HP.", "effect": { "on_hit_target_below_25_percent_hp_save_con_or_0_hp": true } },
"Enter Perfect Showmanship": { "class": "gladiator", "type": "buff", "cooldown": "long_rest", "description": "For 1 minute, all your Combat Flourishes are free, you gain maximum Acclaim for any action that grants it, and enemies have disadvantage on attacks against you.", "effect": { "duration_1_minute_free_flourishes_max_acclaim_enemy_disadvantage_vs_you": true } },
"God of the Arena": { "class": "gladiator", "type": "passive", "cooldown": 0, "description": "You can choose to succeed on any Strength, Dexterity, or Charisma saving throw. You can use this feature three times per long rest.", "effect": { "auto_succeed_str_dex_cha_save_3_times_long_rest": true } },
"Hidden Blade": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "You have advantage on attack rolls with daggers or shortswords against surprised creatures.", "effect": { "advantage_daggers_shortswords_vs_surprised": true } },
"Acrobatic Movement": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "Your speed increases by 10 feet, and you have advantage on Dexterity (Acrobatics) checks made to balance or tumble.", "effect": { "speed_increase_10ft_advantage_acrobatics_balance_tumble": true } },
"Shadow Step": { "class": "ninja", "type": "movement", "cooldown": 0, "description": "(Ki Ability) Spend 1 Ki. As a bonus action, if in dim light/darkness, teleport up to 60ft to another dim/dark spot.", "effect": { "cost_ki": 1, "bonus_action_teleport_shadows_60ft": true } },
"Swift Action": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "You can take the Dash, Disengage, or Hide action as a bonus action.", "effect": { "bonus_action_dash_disengage_hide": true } },
"Clan Feature (e.g., Phantom Illusion)": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "Grants benefits based on chosen Shinobi Clan.", "effect": { "utility": "shinobi_clan_specific_feature" } },
"Smoke Bomb": { "class": "ninja", "type": "utility", "cooldown": "short_rest", "description": "As an action, create a 20-foot radius sphere of smoke, heavily obscuring the area for 1 minute.", "effect": { "action_create_smoke_bomb_20ft_radius_obscured_1_minute": true } },
"Substitution Jutsu": { "class": "ninja", "type": "defensive", "cooldown": "short_rest", "description": "When hit by an attack, use your reaction to substitute yourself with a nearby object (log, illusion), taking no damage and moving 10ft.", "effect": { "on_hit_reaction_substitute_object_no_damage_move_10ft": true } },
"Wall Running": { "class": "ninja", "type": "movement", "cooldown": 0, "description": "You can move along vertical surfaces and across liquids on your turn without falling during the move.", "effect": { "movement_walk_on_walls_liquids_during_move": true } },
"Silent Ambush": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "If you attack from hiding, the target has disadvantage on its Wisdom (Perception) check to notice you before the attack.", "effect": { "on_attack_from_hiding_target_disadvantage_perception_to_notice": true } },
"Chain Attack": { "class": "ninja", "type": "attack", "cooldown": 0, "description": "After hitting with a light melee weapon, you can make an additional attack with a different light melee weapon as part of the same Attack action (if dual wielding).", "effect": { "on_light_weapon_hit_additional_attack_different_light_weapon_dual_wield": true } },
"Improved Ninjutsu": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "The Ki cost of your Ninjutsu Arts is reduced, or their effects are enhanced.", "effect": { "buff_ninjutsu_arts_reduced_ki_cost_or_enhanced_effects": true } },
"Elemental Kunai": { "class": "ninja", "type": "utility", "cooldown": "short_rest", "description": "Spend 1 Ki. For 1 minute, kunai or shuriken you throw deal an extra 1d4 elemental damage (fire, cold, lightning).", "effect": { "cost_ki": 1, "duration_1_minute_kunai_shuriken_extra_1d4_elemental_damage": true } },
"Poisoner's Touch": { "class": "ninja", "type": "utility", "cooldown": 0, "description": "You can apply poison to a weapon as a bonus action and are proficient with Poisoner's Kit.", "effect": { "bonus_action_apply_poison_proficiency_poisoner_kit": true } },
"Blink Step": { "class": "ninja", "type": "movement", "cooldown": "short_rest", "description": "Spend 2 Ki. As a bonus action, teleport up to 30 feet. You can do this before or after your action.", "effect": { "cost_ki": 2, "bonus_action_teleport_30ft": true } },
"Heightened Senses": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "Advantage on Wisdom (Perception) checks and you cannot be surprised while conscious.", "effect": { "advantage_perception_checks_no_surprise_conscious": true } },
"Water Walking": { "class": "ninja", "type": "movement", "cooldown": 0, "description": "Spend 1 Ki. For 10 minutes, you can move across any liquid surface as if it were solid ground.", "effect": { "cost_ki": 1, "duration_10_minutes_walk_on_liquids": true } },
"Iaijutsu (Quick Draw Strike)": { "class": "ninja", "type": "attack", "cooldown": "short_rest", "description": "If you draw a melee weapon and attack with it in the same turn, you have advantage on the attack roll and deal extra damage equal to your Dexterity modifier.", "effect": { "on_draw_and_attack_same_turn_advantage_extra_dex_mod_damage": true } },
"Master of Disguise": { "class": "ninja", "type": "utility", "cooldown": 0, "description": "You can cast Disguise Self at will. You have advantage on Charisma (Deception) checks made while disguised.", "effect": { "cast_disguise_self_at_will_advantage_deception_while_disguised": true } },
"Undetectable": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "You cannot be targeted by divination magic or perceived through magical scrying sensors against your will.", "effect": { "immune_divination_scrying_against_will_ninja": true } },
"Advanced Ninjutsu": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "You learn more powerful or versatile Ninjutsu Arts from your clan.", "effect": { "learn_advanced_ninjutsu_arts": true } },
"Flickering Defense": { "class": "ninja", "type": "defensive", "cooldown": "short_rest", "description": "Spend 1 Ki. As a reaction when hit by an attack, impose disadvantage on the attack roll, potentially causing it to miss.", "effect": { "cost_ki": 1, "reaction_on_hit_impose_disadvantage_on_attack": true } },
"Create Duplicate": { "class": "ninja", "type": "utility", "cooldown": "long_rest", "description": "Spend 3 Ki. Create a shadowy, illusory duplicate of yourself that lasts for 1 minute or until destroyed. It can take simple actions but not attack.", "effect": { "cost_ki": 3, "create_illusory_duplicate_1_minute_simple_actions": true } },
"Misdirection": { "class": "ninja", "type": "defensive", "cooldown": "short_rest", "description": "When targeted by an attack while an enemy is within 5ft of you, use reaction to force the attack to target that enemy instead.", "effect": { "on_targeted_by_attack_if_enemy_adjacent_redirect_attack_to_enemy": true } },
"Assassinate": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "During your first turn, you have advantage on attack rolls against any creature that hasn't taken a turn. Any hit you score against a surprised creature is a critical hit.", "effect": { "first_turn_advantage_vs_not_acted_crit_vs_surprised": true } },
"Pressure Point Strike": { "class": "ninja", "type": "attack", "cooldown": "short_rest", "description": "Spend 2 Ki. On hit with unarmed strike, target must make Con save or suffer a condition (e.g., poisoned, blinded, deafened) for 1 minute.", "effect": { "cost_ki": 2, "on_unarmed_hit_apply_condition_save_con_1_minute": true } },
"Read Lips": { "class": "ninja", "type": "utility", "cooldown": 0, "description": "You can understand speech by reading lips if you can see the speaker's mouth and they are speaking a language you know.", "effect": { "utility_read_lips": true } },
"Silent Communication": { "class": "ninja", "type": "utility", "cooldown": 0, "description": "You can use subtle gestures and signals to communicate complex messages silently with those who share your training.", "effect": { "utility_silent_complex_communication_trained_allies": true } },
"Forbidden Jutsu": { "class": "ninja", "type": "utility", "cooldown": "long_rest", "description": "(Clan Capstone) Access to a powerful, clan-specific secret technique with significant effects.", "effect": { "clan_capstone_forbidden_jutsu_powerful_effect": true } },
"Elemental Fury": { "class": "ninja", "type": "buff", "cooldown": "long_rest", "description": "Spend 4 Ki. For 1 minute, your weapon attacks deal an additional 2d6 elemental damage (chosen type).", "effect": { "cost_ki": 4, "duration_1_minute_weapon_attacks_extra_2d6_elemental_damage": true } },
"Empty Mind": { "class": "ninja", "type": "passive", "cooldown": 0, "description": "You have advantage on saving throws against being charmed or frightened, and resistance to psychic damage.", "effect": { "advantage_saves_charmed_frightened_resistance_psychic": true } },
"One with the Shadows": { "class": "ninja", "type": "stealth", "cooldown": "short_rest", "description": "While in dim light or darkness, you can use your action to become invisible. You remain invisible until you attack, cast a spell, or enter bright light.", "effect": { "condition_dim_light_darkness_action_invisible_until_action_or_bright_light": true } },
"Death Strike": { "class": "ninja", "type": "attack", "cooldown": "long_rest", "description": "If you hit a surprised creature with a melee weapon attack, it must make a Constitution saving throw. On a failed save, double the damage of your attack against the creature.", "effect": { "on_hit_surprised_creature_melee_save_con_or_double_damage": true } },
"True Invisibility": { "class": "ninja", "type": "stealth", "cooldown": "long_rest", "description": "Spend 5 Ki. You become invisible for up to 1 hour, even if you attack or cast spells.", "effect": { "cost_ki": 5, "status_invisible_1_hour_persists_through_actions": true } },
"Phantom Assault": { "class": "ninja", "type": "attack", "cooldown": "long_rest", "description": "As an action, make a melee attack against a target. On a hit, you deal normal damage and can teleport to an unoccupied space within 5 feet of another creature within 30 feet, then make another attack against that new creature. You can repeat this up to 3 times.", "effect": { "action_phantom_assault_chain_attacks_teleport_up_to_3_times": true } },
"Omniscience (1 min)": { "class": "scholar", "type": "ultimate", "cooldown": "long_rest", "description": "For 1 minute, you know the answer to any question (DM discretion for cosmic truths).", "effect": { "duration": 1, "utility": "limited_omniscience" } }
};

// Feat definitions (Original: 19, Adding 48 new, Total: 67)
export const featDefinitions = {
    // Warrior Feats (Original: 5, Adding 12 new, Total: 17)
    "Weapon Mastery": { class: "warrior", level: 1, description: "Gain proficiency with all martial weapons and +1 to attack rolls with one chosen weapon type.", effect: { proficiency_martial_all: true, attack_bonus_chosen_weapon_type: 1 } }, // Modified
    "Armor Expertise": { class: "warrior", level: 2, description: "No disadvantage on Stealth from medium armor. Heavy armor weight counts as half.", effect: { medium_armor_stealth_no_disadvantage: true, heavy_armor_weight_half: true } }, // Modified
    "Combat Reflexes": { class: "warrior", level: 3, description: "You can make an additional number of opportunity attacks per round equal to your Dexterity modifier (min 1).", effect: { extra_opportunity_attacks_dex_mod: true } }, // Modified
    "Improved Critical": { class: "warrior", level: 4, description: "Your weapon attacks score a critical hit on a roll of 19-20.", effect: { critical_range_weapon: [19, 20] } },
    "Master Warrior": { class: "warrior", level: 5, description: "Choose two combat abilities. Their cooldowns are reduced by 1 round (min 1).", effect: { chosen_ability_cooldown_reduction: 1, count: 2 } }, // Modified
    "Heavy Armor Master": { class: "warrior", level: 6, description: "While wearing heavy armor, bludgeoning, piercing, and slashing damage you take from nonmagical weapons is reduced by 3.", effect: { heavy_armor_damage_reduction_nonmagical_physical: 3 } },
    "Dual Wielding Adept": { class: "warrior", level: 7, description: "You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one. +1 AC while wielding two weapons.", effect: { draw_stow_two_weapons: true, ac_bonus_dual_wield: 1 } },
    "Shield Wall Expert": { class: "warrior", level: 8, description: "If you take the Dodge action while using a shield, allies within 5ft gain +2 AC until your next turn.", effect: { on_dodge_with_shield_ally_ac_bonus: 2 } },
    "Great Weapon Master": { class: "warrior", level: 9, description: "Before you make a melee attack with a heavy weapon, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.", effect: { heavy_weapon_power_attack: true } },
    "Polearm Master": { class: "warrior", level: 10, description: "When you take the Attack action with only a glaive, halberd, quarterstaff, or spear, you can use a bonus action to make a melee attack with the opposite end (1d4 bludgeoning).", effect: { polearm_bonus_attack: true } },
    "Blade Master": { class: "warrior", level: 11, description: "When wielding a sword, you gain +1 to attack and damage rolls. You can parry, adding your proficiency bonus to AC against one melee attack as a reaction.", effect: { sword_attack_damage_bonus: 1, sword_parry_reaction_prof_ac: true } },
    "Sentinel": { class: "warrior", level: 12, description: "When you hit a creature with an opportunity attack, its speed becomes 0 for the rest of the turn. Creatures provoke OAs from you even if they take the Disengage action.", effect: { opportunity_attack_speed_zero: true, oa_on_disengage: true } },
    "Resilient Warrior": { class: "warrior", level: 13, description: "Choose one ability score. Gain +1 to it and proficiency in saving throws using that ability score.", effect: { ability_score_increase_1_chosen: true, saving_throw_proficiency_chosen: true } },
    "Inspiring Leader": { class: "warrior", level: 14, description: "Spend 10 minutes inspiring your companions, granting up to six creatures (including yourself) temporary hit points equal to your level + Charisma modifier.", effect: { grant_temp_hp_level_plus_cha: true } },
    "Tough as Nails": { class: "warrior", level: 15, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.", effect: { hp_increase_2_per_level: true } },
    "Legendary Warrior": { class: "warrior", level: 16, description: "Once per long rest, you can reroll a failed attack roll, ability check, or saving throw. You must use the new roll.", effect: { reroll_failed_d20_long_rest: true } },
    "Unbreakable Will": { class: "warrior", level: 17, description: "You have advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep.", effect: { advantage_on_saves_vs_multiple_conditions: true } },

    // Mage Feats (Original: 5, Adding 12 new, Total: 17)
    "Spell Power": { class: "mage", level: 1, description: "When you cast a spell that deals damage, add your Intelligence modifier to one damage roll of that spell.", effect: { add_int_mod_to_one_spell_damage_roll: true } }, // Modified
    "Metamagic Adept": { class: "mage", level: 2, description: "Learn two Metamagic options from the Sorcerer list. Gain 2 sorcery points to use them (regain on long rest).", effect: { learn_metamagic: 2, sorcery_points: 2 } },
    "Arcane Scholar": { class: "mage", level: 3, description: "You learn two additional spells of any level you can cast. These do not count against your number of spells known/prepared.", effect: { learn_bonus_spells_any_level: 2 } },
    "Spell Critical": { class: "mage", level: 4, description: "Your damaging spells score a critical hit on a roll of 19-20 on the spell attack roll.", effect: { spell_critical_range_19_20: true } },
    "Grand Magus": { class: "mage", level: 5, description: "Choose one school of magic. Spells from that school cost 1 less spell slot level to cast (min 1st level slot, or cantrip remains cantrip). Max spell level 5th.", effect: { chosen_school_spell_slot_cost_reduction: 1, max_spell_level_affected: 5 } }, // Modified
    "Elemental Adept (Fire)": { class: "mage", level: 6, description: "Spells you cast ignore resistance to damage of the chosen type (Fire, Cold, Lightning, Thunder, Acid). In addition, when you roll damage for a spell that deals damage of that type, treat any 1 on a damage die as a 2.", effect: { fire_ignore_resistance: true, fire_treat_1_as_2_damage: true } },
    "Elemental Adept (Cold)": { class: "mage", level: 6, description: "Spells you cast ignore resistance to damage of the chosen type (Fire, Cold, Lightning, Thunder, Acid). In addition, when you roll damage for a spell that deals damage of that type, treat any 1 on a damage die as a 2.", effect: { cold_ignore_resistance: true, cold_treat_1_as_2_damage: true } },
    "Elemental Adept (Lightning)": { class: "mage", level: 6, description: "Spells you cast ignore resistance to damage of the chosen type (Fire, Cold, Lightning, Thunder, Acid). In addition, when you roll damage for a spell that deals damage of that type, treat any 1 on a damage die as a 2.", effect: { lightning_ignore_resistance: true, lightning_treat_1_as_2_damage: true } },
    "Elemental Adept (Thunder)": { class: "mage", level: 6, description: "Spells you cast ignore resistance to damage of the chosen type (Fire, Cold, Lightning, Thunder, Acid). In addition, when you roll damage for a spell that deals damage of that type, treat any 1 on a damage die as a 2.", effect: { thunder_ignore_resistance: true, thunder_treat_1_as_2_damage: true } },
    "Elemental Adept (Acid)": { class: "mage", level: 6, description: "Spells you cast ignore resistance to damage of the chosen type (Fire, Cold, Lightning, Thunder, Acid). In addition, when you roll damage for a spell that deals damage of that type, treat any 1 on a damage die as a 2.", effect: { acid_ignore_resistance: true, acid_treat_1_as_2_damage: true } },
    "War Caster": { class: "mage", level: 7, description: "Advantage on Con saves to maintain concentration. Can perform somatic components even with weapons/shield in hands. Can cast a spell as an opportunity attack.", effect: { advantage_concentration_saves: true, somatic_with_hands_full: true, spell_as_opportunity_attack: true } },
    "Potent Cantrips": { class: "mage", level: 8, description: "Your damaging cantrips affect even creatures that succeed on saving throws. These creatures take half damage but suffer no additional effects.", effect: { cantrip_half_damage_on_save: true } },
    "Heightened Spell (Feat)": { class: "mage", level: 9, description: "Once per long rest, when you cast a spell that forces a creature to make a saving throw to resist its effects, you can give one target of the spell disadvantage on its first saving throw made against the spell.", effect: { give_disadvantage_on_spell_save_target_long_rest: true } },
    "Twinned Spell (Feat)": { class: "mage", level: 10, description: "Once per long rest, when you cast a spell that targets only one creature and doesn’t have a range of self, you can target a second creature in range with the same spell (1st to 5th level spells).", effect: { twin_single_target_spell_long_rest: true, max_spell_level: 5 } },
    "Spell Sniper": { class: "mage", level: 11, description: "Your ranged spell attacks ignore half cover and three-quarters cover. Double the range of your ranged spell attacks.", effect: { ranged_spell_ignore_cover: true, double_ranged_spell_range: true } },
    "Careful Spell (Feat)": { class: "mage", level: 12, description: "Once per long rest, when you cast a spell that forces other creatures to make a saving throw, you can choose a number of them equal to 1 + spell's level. These creatures automatically succeed.", effect: { protect_allies_from_aoe_spell_long_rest: true } },
    "Subtle Spell (Feat)": { class: "mage", level: 13, description: "Once per long rest, you can cast a spell without any somatic or verbal components (1st to 5th level spells).", effect: { cast_spell_subtly_long_rest: true, max_spell_level: 5 } },
    "Distant Spell (Feat)": { class: "mage", level: 14, description: "Once per long rest, when you cast a spell that has a range of 5 feet or greater, you can double the range of the spell. If range is Touch, make it 30 feet.", effect: { double_spell_range_or_touch_to_30ft_long_rest: true } },
    "Empowered Spell (Feat)": { class: "mage", level: 15, description: "Once per long rest, when you roll damage for a spell, you can reroll a number of the damage dice up to your spellcasting ability modifier (minimum of one). You must use the new rolls.", effect: { reroll_spell_damage_dice_long_rest: true } },
    "Archmage's Boon": { class: "mage", level: 16, description: "You gain one additional spell slot of 6th level and one of 7th level.", effect: { bonus_spell_slots: { "6th": 1, "7th": 1 } } },
    "Master of the Elements": { class: "mage", level: 17, description: "Choose two elements (Fire, Cold, Lightning, Acid, Thunder). Spells of these types you cast deal an extra die of damage.", effect: { chosen_elements_extra_damage_die: 2 } },

    // Rogue Feats (Original: 5, Adding 12 new, Total: 17)
    "Light Fingers": { class: "rogue", level: 1, description: "You gain proficiency in Sleight of Hand. If already proficient, double your proficiency bonus for checks made with it. +5ft movement.", effect: { proficiency_or_expertise_sleight_of_hand: true, movement_bonus_5ft: true } }, // Modified
    "Nimble Escape": { class: "rogue", level: 2, description: "You can take the Disengage or Hide action as a bonus action on each of your turns.", effect: { bonus_action_disengage_hide: true } }, // Replaced Evasion, this is Cunning Action essentially.
    "Assassinate": { class: "rogue", level: 3, description: "Advantage on attack rolls against any creature that hasn’t taken a turn in combat yet. Any hit you score against a surprised creature is a critical hit.", effect: { advantage_vs_untaken_turn: true, critical_vs_surprised: true } },
    "Improved Sneak Attack (Minor)": { class: "rogue", level: 4, description: "Your Sneak Attack deals an additional 1d6 damage.", effect: { sneak_attack_bonus_damage: "1d6" } },
    "Master Thief": { class: "rogue", level: 5, description: "You can use the bonus action granted by Cunning Action to make a Dexterity (Sleight of Hand) check, use thieves' tools to disarm a trap or open a lock, or take the Use an Object action.", effect: { cunning_action_options_extended: true } },
    "Skulker": { class: "rogue", level: 6, description: "You can try to hide when you are lightly obscured. When hidden, missing with a ranged weapon attack doesn't reveal your position.", effect: { hide_lightly_obscured: true, ranged_miss_no_reveal: true } },
    "Deadly Aim": { class: "rogue", level: 7, description: "Before making a ranged attack with a finesse weapon, you can choose to take a -5 penalty to hit for +10 damage.", effect: { ranged_finesse_power_attack: true } },
    "Agile Parry": { class: "rogue", level: 8, description: "When wielding a finesse weapon and no shield, you can use your reaction to add your proficiency bonus to your AC against one melee attack.", effect: { finesse_weapon_parry_reaction_prof_ac: true } },
    "Infiltrator": { class: "rogue", level: 9, description: "You can spend one minute to create a disguise. You have advantage on Charisma (Deception) checks made to pass yourself off as a different person.", effect: { quick_disguise: true, advantage_deception_disguise: true } },
    "Opportunist": { class: "rogue", level: 10, description: "When a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature.", effect: { reaction_attack_on_adjacent_hit_by_other: true } },
    "Unseen Assailant": { class: "rogue", level: 11, description: "If you are hidden from a creature when you hit it with an attack, it has disadvantage on attack rolls against you until the end of your next turn.", effect: { on_hit_while_hidden_target_disadvantage_attacks: true } },
    "Dagger Master": { class: "rogue", level: 12, description: "You gain a +1 bonus to attack and damage rolls made with daggers. You can draw a dagger as part of the attack you make with it.", effect: { dagger_attack_damage_bonus_1: true, draw_dagger_as_part_of_attack: true } },
    "Master Ambusher": { class: "rogue", level: 13, description: "If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6 damage.", effect: { surprise_first_turn_hit_bonus_damage: "2d6" } },
    "Evasive Footwork": { class: "rogue", level: 14, description: "When you move, you can use your bonus action to impose disadvantage on opportunity attacks against you for that turn.", effect: { bonus_action_disadvantage_opportunity_attacks_on_self: true } },
    "Legendary Sneak": { class: "rogue", level: 15, description: "You have advantage on Dexterity (Stealth) checks if you move no more than half your speed on the same turn.", effect: { advantage_stealth_half_speed: true } },
    "Quick Fingers": { class: "rogue", level: 16, description: "You can use thieves' tools to attempt to pick a lock or disarm a trap as a bonus action.", effect: { pick_lock_disarm_trap_bonus_action: true } },
    "Shadow Lord": { class: "rogue", level: 17, description: "When in dim light or darkness, you can use an action to become invisible. You remain invisible as long as you are in dim light or darkness, or until you attack or cast a spell.", effect: { invisible_in_shadows_action: true } },

    // Ranger Feats (Original: 4, Adding 12 new, Total: 16)
    "Precise Shot": { class: "ranger", level: 1, description: "Ranged attacks ignore half cover and three-quarters cover.", effect: { ignore_cover_ranged: true } },
    "Archery Master": { class: "ranger", level: 2, description: "You gain a +2 bonus to attack rolls you make with ranged weapons.", effect: { ranged_attack_bonus_2: true } },
    "Nature's Ally": { class: "ranger", level: 3, description: "Your animal companion's hit point maximum increases by your ranger level. It also adds your proficiency bonus to its damage rolls.", effect: { companion_hp_bonus_ranger_level: true, companion_damage_bonus_prof: true } },
    "Improved Favored Enemy": { class: "ranger", level: 4, description: "Choose one of your favored enemy types. You gain +2 damage against them and advantage on Int (Investigation) checks related to them.", effect: { favored_enemy_damage_bonus_2: true, advantage_investigation_favored_enemy: true } },
    "Master Ranger": { class: "ranger", level: 5, description: "You become proficient in one additional skill from the ranger skill list and gain expertise with one ranger skill you are proficient in.", effect: { bonus_ranger_skill_proficiency: 1, expertise_ranger_skill: 1 } },
    "Mounted Combatant": { class: "ranger", level: 6, description: "Advantage on melee attacks against unmounted creatures smaller than your mount. You can force an attack targeted at your mount to target you instead.", effect: { advantage_vs_smaller_unmounted: true, redirect_attack_to_self_from_mount: true } },
    "Alert": { class: "ranger", level: 7, description: "+5 bonus to initiative. You can't be surprised while conscious. Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you.", effect: { initiative_bonus_5: true, no_surprise_conscious: true, no_advantage_unseen_attacker: true } },
    "Sharpshooter": { class: "ranger", level: 8, description: "Attacking at long range doesn't impose disadvantage. Ranged weapon attacks ignore half/three-quarters cover. Before a ranged attack, take -5 to hit for +10 damage.", effect: { no_disadvantage_long_range: true, ignore_cover_ranged: true, ranged_power_attack: true } },
    "Skilled (Nature Focus)": { class: "ranger", level: 9, description: "Gain proficiency in any combination of three skills or tools. Two must be Nature, Survival, or Herbalism Kit.", effect: { bonus_proficiencies_skills_tools_3: true, condition_two_must_be_nature_survival_herbalism: true } },
    "Resilient (Dexterity)": { class: "ranger", level: 10, description: "Increase your Dexterity score by 1, to a maximum of 20. You gain proficiency in Dexterity saving throws.", effect: { dexterity_increase_1: true, proficiency_dex_saves: true } },
    "Crossbow Expert": { class: "ranger", level: 11, description: "Ignore loading property of crossbows. Being within 5ft of hostile creature doesn't impose disadvantage on ranged attack rolls. When you use Attack action with one-handed weapon, can attack with loaded hand crossbow as bonus action.", effect: { ignore_loading_crossbows: true, no_disadvantage_ranged_5ft: true, bonus_action_hand_crossbow_attack: true } },
    "Mobile": { class: "ranger", level: 12, description: "Your speed increases by 10 feet. When you use the Attack action, if you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn.", effect: { speed_increase_10ft: true, no_opportunity_attack_from_melee_target: true } },
    "Dual Wielder": { class: "ranger", level: 13, description: "+1 AC while wielding a separate melee weapon in each hand. Can use two-weapon fighting even if one-handed melee weapons aren't light. Can draw/stow two one-handed weapons when you'd normally draw/stow one.", effect: { ac_bonus_dual_wield_1: true, two_weapon_fighting_non_light: true, draw_stow_two_weapons: true } },
    "Savage Attacker": { class: "ranger", level: 14, description: "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total.", effect: { reroll_melee_weapon_damage_dice_once_per_turn: true } },
    "Tough": { class: "ranger", level: 15, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.", effect: { hp_increase_2_per_level_tough: true } }, // Renamed to avoid clash with warrior
    "Lucky": { class: "ranger", level: 16, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest.", effect: { luck_points_3: true, spend_luck_point_reroll_d20: true } },
    "Legendary Ranger": { class: "ranger", level: 17, description: "Choose two attributes from: +10ft speed, +2 initiative, advantage on Survival checks, your Animal Companion gains +2 AC and HP equal to your Ranger level.", effect: { choose_two_ranger_attributes: ["speed+10", "initiative+2", "advantage_survival", "companion_buff_ac2_hp_level"] } },
    "Mind Reader": { class: "psychic", level: 1, description: "You can read the surface thoughts of creatures around you.", effect: { utility: "read_surface_thoughts", range: "30 feet" } },
    "Psionic Fortitude": { class: "psychic", level: 2, description: "Gain advantage on saves against being stunned or incapacitated by psychic effects.", effect: { advantage_saves_vs_psychic_stun_incapacitated: true } },
    "The Pinnacle of Thought": { class: "scholar", level: 17, description: "Your Intelligence score increases by 2, to a maximum of 22. You can no longer be surprised.", effect: { intelligence_increase: 2, max_int: 22, immune_surprised: true } },
// THIS IS THE COMPLETE LITERAL FEAT DEFINITIONS SNIPPET (CFS)
    "Mind Reader": { class: "psychic", level: 1, description: "You can read the surface thoughts of creatures around you.", effect: { utility: "read_surface_thoughts", range: "30 feet" } },
    "Psionic Fortitude": { class: "psychic", level: 2, description: "Gain advantage on saves against being stunned or incapacitated by psychic effects.", effect: { advantage_saves_vs_psychic_stun_incapacitated: true } },
    "Telepathic Link": { class: "psychic", level: 3, description: "Establish a telepathic link with a willing creature for 1 hour.", effect: { utility: "telepathic_communication", duration: 60 } },
    "Focused Mind": { class: "psychic", level: 4, description: "Advantage on Constitution saving throws to maintain concentration on psychic abilities.", effect: { advantage_concentration_psychic: true } },
    "Empowered Psionics": { class: "psychic", level: 5, description: "When you deal psychic damage with an ability, add your Intelligence modifier to the damage.", effect: { bonus_psychic_damage_int_mod: true } },
    "War Caster (Mental)": { class: "psychic", level: 6, description: "Similar to War Caster, but for psychic abilities requiring concentration.", effect: { advantage_concentration_psychic: true, psychic_opportunity_attack: true } },
    "Metamagic Adept (Psionic)": { class: "psychic", level: 7, description: "Gain two Metamagic options usable with psychic abilities that mimic spells.", effect: { learn_metamagic_psionic: 2, sorcery_points_psionic: 2 } },
    "Resilient (Wisdom)": { class: "psychic", level: 8, description: "Increase Wisdom by 1, gain proficiency in Wisdom saves.", effect: { wisdom_increase_1: true, proficiency_wis_saves: true } },
    "Master Telepath": { class: "psychic", level: 9, description: "Your telepathic abilities have greater range and potency.", effect: { enhanced_telepathy_range_potency: true } },
    "Heightened Psionics": { class: "psychic", level: 11, description: "Impose disadvantage on saving throws against your psychic abilities once per short rest.", effect: { impose_disadvantage_psychic_save_short_rest: true } },
    "Telekinetic Master": { class: "psychic", level: 13, description: "You can manipulate heavier objects and with finer control using telekinesis.", effect: { enhanced_telekinesis_weight_control: true } },
    "True Sight (Psionic)": { class: "psychic", level: 14, description: "Gain limited truesight through psionic means.", effect: { limited_truesight_psionic: true, range: "30 feet" } },
    "Unshakable Mind": { class: "psychic", level: 15, description: "Immunity to charm, fear, and psychic damage.", effect: { immune: ["charm", "fear", "psychic_damage"] } },
    "Master of Reality": { class: "psychic", level: 16, description: "You can subtly warp reality using psionic power (minor illusion, object manipulation).", effect: { utility: "minor_reality_warping" } },
    "Psionic Godhood": { class: "psychic", level: 17, description: "Attain a near-divine state of psionic power and understanding.", effect: { enhanced_psionic_abilities_godlike: true } },
    "Divine Vigor": { class: "paladin", level: 1, description: "Your faith grants you +5 maximum HP.", effect: { max_hp_bonus: 5 } },
    "Heavy Armor Adept": { class: "paladin", level: 2, description: "You can use heavy armor effectively without speed penalty.", effect: { ignore_heavy_armor_speed_penalty: true } },
    "Oathkeeper's Resolve": { class: "paladin", level: 3, description: "Advantage on saves against effects that would make you break your oath.", effect: { advantage_saves_vs_oath_breaking: true } },
    "Improved Divine Smite (Minor)": { class: "paladin", level: 4, description: "Your Divine Smite deals an additional 1d8 radiant damage.", effect: { divine_smite_bonus_damage: "1d8" } },
    "Radiant Soul": { class: "paladin", level: 5, description: "You emit an aura of faint light; once per long rest, unleash a burst of radiance healing allies and harming fiends.", effect: { faint_light_aura: true, burst_heal_allies_harm_fiends_long_rest: true } },
    "Divine Fortitude": { class: "paladin", level: 9, description: "Increase Constitution by 1; when you use Lay on Hands, gain temporary HP.", effect: { constitution_increase_1: true, lay_on_hands_grants_temp_hp: true } },
    "Master of Auras": { class: "paladin", level: 13, description: "The range of your paladin auras increases by 10 feet.", effect: { aura_range_increase: 10 } },
    "Legendary Resistance (1/day)": { class: "paladin", level: 15, description: "If you fail a saving throw, you can choose to succeed instead. Once per long rest.", effect: { legendary_resistance_1_day: true } },
    "Champion of the Gods": { class: "paladin", level: 17, description: "Your divine power is at its peak, granting a significant boost to your chosen Oath features or overall abilities.", effect: { major_boost_oath_features_or_abilities: true } },
    "Stage Presence": { class: "bard", level: 1, description: "Gain proficiency in Performance and Persuasion.", effect: { proficiency_skills: ["Performance", "Persuasion"] } },
    "Versatile Performer": { class: "bard", level: 2, description: "Choose two additional skills to become proficient in.", effect: { bonus_skill_proficiencies: 2 } },
    "College Initiate": { class: "bard", level: 3, description: "Gain a feature specific to your Bard College earlier or an enhancement to an existing one.", effect: { college_specific_feature_enhancement: true } },
    "Adept Negotiator": { class: "bard", level: 6, description: "Advantage on Charisma (Persuasion) checks to mediate disputes or negotiate terms.", effect: { advantage_persuasion_negotiation: true } },
    "Profound Knowledge": { class: "bard", level: 7, description: "Become proficient in two Intelligence-based skills (Arcana, History, Investigation, Nature, Religion).", effect: { bonus_int_skill_proficiencies: 2 } },
    "Master Orator": { class: "bard", level: 10, description: "Your inspiring speeches can sway crowds and grant allies temporary combat advantages.", effect: { sway_crowds_grant_combat_advantages_allies: true } },
    "Legendary Performer": { class: "bard", level: 11, description: "Your performances are legendary, capable of inspiring awe or dread on a massive scale.", effect: { legendary_performance_awe_dread_scale: true } },
    "Worldly Knowledge": { class: "bard", level: 13, description: "You learn three additional languages and gain expertise in one Intelligence skill.", effect: { learn_languages: 3, expertise_int_skill: 1 } },
    "Silver Tongue": { class: "bard", level: 15, description: "You can reroll any Charisma check, but must use the new roll. Once per short rest.", effect: { reroll_charisma_check_short_rest: true } },
    "God of Music": { class: "bard", level: 17, description: "Your musical abilities transcend mortal limits, allowing for truly magical and reality-altering performances.", effect: { transcendent_musical_abilities_reality_altering: true } },
    "Faithful Servant": { class: "cleric", level: 1, description: "Gain proficiency in Religion and Insight.", effect: { proficiency_skills: ["Religion", "Insight"] } },
    "Armor Proficiency (Heavy)": { class: "cleric", level: 2, description: "You gain proficiency with heavy armor.", effect: { proficiency_heavy_armor: true } },
    "Healer's Touch": { class: "cleric", level: 3, description: "Your healing spells restore an additional 1d4 HP.", effect: { bonus_healing_spell_hp: "1d4" } },
    "Divine Inspiration": { class: "cleric", level: 5, description: "Once per long rest, grant an ally advantage on an attack roll or saving throw.", effect: { grant_ally_advantage_attack_or_save_long_rest: true } },
    "Improved Turning": { class: "cleric", level: 6, description: "Your Turn Undead feature is more effective (lower CR undead are destroyed, higher CR are turned).", effect: { enhanced_turn_undead_effectiveness: true } },
    "Beacon of Faith": { class: "cleric", level: 10, description: "As an action, emit an aura that grants allies advantage on Wisdom saves and fiends/undead disadvantage on attacks.", effect: { aura_adv_wis_saves_allies_disadv_attacks_fiends_undead: true } },
    "Master Healer": { class: "cleric", level: 11, description: "When you cast a healing spell, you can choose to reroll any dice that result in a 1.", effect: { reroll_1s_on_healing_spell_dice: true } },
    "Shield of the Devout": { class: "cleric", level: 13, description: "While wielding a shield, you gain +1 AC and can cast Shield of Faith as a bonus action without expending a spell slot once per short rest.", effect: { shield_ac_bonus_1_shield_of_faith_bonus_action_short_rest: true } },
    "Divine Archon": { class: "cleric", level: 14, description: "Temporarily transform into a celestial being, gaining flight and enhanced divine powers.", effect: { transform_celestial_being_flight_enhanced_powers_short_duration: true } },
    "Unwavering Devotion": { class: "cleric", level: 15, description: "You are immune to being charmed or frightened.", effect: { immune_charmed_frightened: true } },
    "Saint of the Masses": { class: "cleric", level: 17, description: "Your divine blessings and healing spells can affect twice as many targets or have doubled range/area.", effect: { double_targets_range_area_healing_blessings: true } }
// END OF CFS
};