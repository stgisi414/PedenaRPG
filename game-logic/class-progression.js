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
    "Power Word Kill": { level: 9, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "Speak a word of power that can instantly kill a creature with 100 hit points or fewer." }
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
    "Perfect Hunter": { class: "ranger", type: "passive", cooldown: 0, description: "You always know the location of any of your Favored Enemies within 1 mile of you, provided they are not hidden by magical means.", effect: { know_favored_enemy_location_1_mile_nonmagical_hiding: true } }
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
    "Legendary Ranger": { class: "ranger", level: 17, description: "Choose two attributes from: +10ft speed, +2 initiative, advantage on Survival checks, your Animal Companion gains +2 AC and HP equal to your Ranger level.", effect: { choose_two_ranger_attributes: ["speed+10", "initiative+2", "advantage_survival", "companion_buff_ac2_hp_level"] } }
};