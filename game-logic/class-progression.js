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

// Ability definitions (Original: 35, Adding 90 new, Total: 125)
export const abilityDefinitions = {
    // Warrior Abilities
    "Power Strike": { class: "warrior", type: "attack", cooldown: 3, description: "Deal extra 1d6 damage on your next melee attack.", effect: { damage: "1d6", type: "bonus" } },
    "Shield Bash": { class: "warrior", type: "control", cooldown: 4, description: "Use your shield to bash an enemy, potentially pushing them back or knocking them prone.", effect: { target: "single", condition: "prone", range: "5ft" } },
    "Cleave Attack": { class: "warrior", type: "attack", cooldown: 5, description: "Strike multiple enemies in a short arc in front of you.", effect: { damage: "weapon_damage", type: "area", range: "5ft_cone" } },
    "Battle Fury": { class: "warrior", type: "buff", cooldown: 6, description: "Enter a state of heightened aggression, increasing your damage for a short duration.", effect: { damage_bonus: "+2", duration: "2_rounds" } },
    "Defensive Stance": { class: "warrior", type: "defensive", cooldown: 4, description: "Adopt a defensive posture, increasing your armor class temporarily.", effect: { ac_bonus: "+2", duration: "1_round" } },
    "Weapon Throw": { class: "warrior", type: "attack", cooldown: 3, description: "Hurl your currently equipped melee weapon at a foe, dealing damage at range.", effect: { damage: "weapon_damage", type: "ranged", range: "30ft" } },
    "Whirlwind Strike": { class: "warrior", type: "attack", cooldown: 8, description: "Spin in a circle, attacking all adjacent enemies.", effect: { damage: "weapon_damage", type: "aoe", range: "5ft_radius" } },
    "Intimidating Shout": { class: "warrior", type: "control", cooldown: 6, description: "Let out a fearsome yell, potentially causing enemies to become frightened.", effect: { target: "area", condition: "frightened", duration: "1_round" } },
    "War Cry": { class: "warrior", type: "buff", cooldown: 7, description: "Inspire allies with a powerful war cry, granting them temporary hit points or a bonus to attack rolls.", effect: { temp_hp: "1d8", type: "buff", target: "allies", range: "30ft" } },
    "Sunder Armor": { class: "warrior", type: "attack", cooldown: 5, description: "Strike an enemy's armor, reducing their AC for a short time.", effect: { ac_reduction: "-2", duration: "2_rounds" } },
    "Retaliation": { class: "warrior", type: "reaction", cooldown: 0, description: "When hit by a melee attack, make an immediate counter-attack.", effect: { trigger: "melee_hit", type: "attack" } },
    "Earthshaker Slam": { class: "warrior", type: "control", cooldown: 10, description: "Slam your weapon into the ground, creating a shockwave that knocks enemies prone.", effect: { target: "area", condition: "prone", range: "15ft_radius" } },
    "Concussive Blow": { class: "warrior", type: "attack", cooldown: 5, description: "Deliver a heavy blow that stuns the target for a short duration.", effect: { damage: "weapon_damage", condition: "stunned", duration: "1_round" } },
    "Rallying Cry": { class: "warrior", type: "buff", cooldown: 6, description: "Encourage allies, allowing them to reroll a failed saving throw or gain a temporary bonus to their next attack.", effect: { target: "ally", effect: "reroll_save" } },
    "Heroic Leap": { class: "warrior", type: "movement", cooldown: 5, description: "Leap a great distance, allowing you to quickly close the gap to an enemy or escape danger.", effect: { movement: "long_jump", bypass_obstacles: true } },
    "Berserker Rage": { class: "warrior", type: "buff", cooldown: 10, description: "Enter a true berserker state, gaining significant damage and resistance, but becoming less controllable.", effect: { damage_bonus: "+4", resistance: "bludgeoning_piercing_slashing", condition: "reckless_attack_always_on", duration: "3_rounds" } },
    "Executioner's Strike": { class: "warrior", type: "attack", cooldown: 12, description: "Deliver a devastating blow to a weakened foe, with a higher chance of a critical hit or bonus damage.", effect: { damage: "weapon_damage", crit_threshold_increase: 2 } },
    "Terrifying Presence": { class: "warrior", type: "control", cooldown: 10, description: "Exude an aura of sheer might, causing enemies around you to be filled with fear.", effect: { target: "area", condition: "frightened", duration: "2_rounds" } },
    "Unstoppable Force": { class: "warrior", type: "buff", cooldown: 15, description: "Become immune to forced movement and the prone condition for a short time.", effect: { condition_immunity: ["prone", "forced_movement"], duration: "2_rounds" } },
    "Stunning Strike": { class: "warrior", type: "attack", cooldown: 6, description: "A precise blow that stuns the target on a successful hit.", effect: { damage: "weapon_damage", condition: "stunned", duration: "1_round" } },
    "Overpower": { class: "warrior", type: "attack", cooldown: 7, description: "Utilize sheer force to break through an enemy's defenses, ignoring a portion of their armor.", effect: { damage: "weapon_damage", ignore_ac: 2 } },
    "Iron Will": { class: "warrior", type: "defensive", cooldown: 8, description: "Shrug off mental assaults, gaining advantage on Wisdom saving throws for a round.", effect: { bonus: "advantage_wisdom_saves", duration: "1_round" } },
    "Shockwave": { class: "warrior", type: "attack", cooldown: 9, description: "Release a powerful wave of force from your weapon, dealing damage and pushing enemies away.", effect: { damage: "2d6", type: "aoe", push_distance: "10ft", range: "15ft_cone" } },
    "Last Stand": { class: "warrior", type: "defensive", cooldown: 15, description: "When gravely wounded, enter a state of extreme defiance, gaining temporary hit points and increased damage.", effect: { temp_hp: "3d10", damage_bonus: "+3", duration: "3_rounds" } },
    "Warlord's Command": { class: "warrior", type: "buff", cooldown: 10, description: "Issue a commanding order that grants an ally an immediate extra attack.", effect: { target: "ally", extra_action: "attack" } },
    "Bladestorm": { class: "warrior", type: "attack", cooldown: 15, description: "Engage in a flurry of blows, attacking all enemies within your reach multiple times.", effect: { damage: "weapon_damage", type: "aoe", num_attacks: 3, range: "reach" } },
    "Avatar of War": { class: "warrior", type: "buff", cooldown: 20, description: "Temporarily transform into a living embodiment of war, gaining massive strength and combat prowess.", effect: { strength_bonus: "+4", damage_bonus: "+4", resistance: "all_physical", duration: "1_min" } },
    "Crippling Blow": { class: "warrior", type: "attack", cooldown: 8, description: "A precise strike that reduces an enemy's movement speed or imposes disadvantage on their attacks.", effect: { damage: "weapon_damage", condition: "speed_reduction", duration: "2_rounds" } },
    "Death Wish": { class: "warrior", type: "buff", cooldown: 12, description: "Embrace reckless abandon, gaining significant bonus damage but also taking increased damage.", effect: { damage_bonus: "1d12", damage_taken_increase: "1d4", duration: "2_rounds" } },
    "Undying Rage": { class: "warrior", type: "buff", cooldown: 18, description: "Your rage becomes so potent that you refuse to fall, remaining conscious at 0 hit points for a short duration.", effect: { condition: "stay_at_0_hp", duration: "1_round" } },
    "Titanic Smash": { class: "warrior", type: "attack", cooldown: 15, description: "Unleash a colossal swing, dealing immense damage and potentially knocking back even large foes.", effect: { damage: "4d12", type: "single", push_distance: "20ft", condition: "prone" } },
    "War God's Blessing": { class: "warrior", type: "buff", cooldown: 20, description: "Invoke a divine blessing that grants you and nearby allies a powerful combat buff, such as increased critical chance or bonus damage.", effect: { crit_threshold_increase: 1, damage_bonus: "+2", target: "allies", range: "30ft", duration: "3_rounds" } },

    // Mage Abilities
    "Spell Focus": { class: "mage", type: "buff", cooldown: 3, description: "Concentrate to enhance your next spell, making it harder to resist or deal more damage.", effect: { spell_dc_bonus: "+1", damage_bonus: "+1d4", duration: "1_spell" } },
    "Mana Shield": { class: "mage", type: "defensive", cooldown: 4, description: "Create a magical barrier that absorbs a portion of incoming damage.", effect: { damage_reduction: "1d6", duration: "1_round" } },
    "Spell Surge": { class: "mage", type: "buff", cooldown: 5, description: "Unleash a burst of arcane energy, allowing you to cast an additional spell this turn (as a bonus action).", effect: { extra_action: "spell", type: "bonus_action" } },
    "Cleave Attack": { class: "warrior", type: "attack", cooldown: 5, description: "Strike multiple enemies in a short arc in front of you.", effect: { damage: "weapon_damage", type: "area", range: "5ft_cone" } },
    "Elemental Mastery": { class: "mage", type: "buff", cooldown: 6, description: "Infuse your spells with a chosen elemental energy, increasing their potency or adding a secondary effect.", effect: { elemental_damage_bonus: "+1d6", type: "choosable_element" } },
    "Spell Steal": { class: "mage", type: "control", cooldown: 8, description: "Attempt to siphon a low-level spell from a caster, gaining the ability to cast it once.", effect: { target: "caster", steal_spell_level: 1 } },
    "Spell Penetration": { class: "mage", type: "buff", cooldown: 4, description: "Focus your arcane energy to overcome spell resistance or saving throws for your next spell.", effect: { bonus: "spell_penetration_3" } },
    "Arcane Mastery": { class: "mage", type: "buff", cooldown: 7, description: "Temporarily gain mastery over raw arcane energy, increasing spell save DCs and attack rolls.", effect: { spell_dc_bonus: "+2", spell_attack_bonus: "+2", duration: "2_rounds" } },
    "Time Stop (Minor)": { class: "mage", type: "utility", cooldown: 10, description: "Briefly distort time around yourself, allowing you to take an extra action or move without provoking opportunity attacks.", effect: { extra_action: "standard", duration: "instant" } },
    "Empowered Elements": { class: "mage", type: "buff", cooldown: 7, description: "Further empower your elemental spells, adding additional dice of damage or a stronger secondary effect.", effect: { elemental_damage_bonus: "+1d8", type: "choosable_element" } },
    "Arcane Warding": { class: "mage", type: "defensive", cooldown: 6, description: "Conjure a shield of pure arcane energy around yourself, granting damage resistance against spells.", effect: { resistance: "spell_damage", duration: "2_rounds" } },
    "Rapid Casting": { class: "mage", type: "buff", cooldown: 5, description: "Temporarily reduce the casting time of your next spell.", effect: { casting_time_reduction: "1_action" } },
    "Spell Reflection": { class: "mage", type: "defensive", cooldown: 10, description: "Attempt to reflect a single-target spell back at its caster.", effect: { trigger: "single_target_spell", effect: "reflect_spell" } },
    "Arcane Infusion": { class: "mage", type: "buff", cooldown: 8, description: "Infuse your very being with magic, gaining increased spell slots or a burst of arcane energy for a few turns.", effect: { spell_slot_recovery: "1_level_5", duration: "instant" } },
    "Mind Blank (Self)": { class: "mage", type: "defensive", cooldown: 15, description: "Temporarily protect your mind from all forms of mental intrusion and psychic damage.", effect: { immunity: ["mind_reading", "psychic_damage"], duration: "1_min" } },
    "Spell Weaver": { class: "mage", type: "buff", cooldown: 10, description: "Combine two lower-level spells into a single, more potent casting.", effect: { combine_spells: "2_lower_level" } },
    "Mystic Shield": { class: "mage", type: "defensive", cooldown: 8, description: "A more powerful mana shield that absorbs more damage and lasts longer.", effect: { damage_reduction: "3d6", duration: "2_rounds" } },
    "Energy Conversion": { class: "mage", type: "utility", cooldown: 6, description: "Convert one type of elemental damage you deal into another.", effect: { convert_damage_type: true } },
    "Arcane Eye": { class: "mage", type: "utility", cooldown: 12, description: "Conjure an invisible, magical eye that you can control to scout remote locations.", effect: { scrying_range: "1_mile" } },
    "Archmage's Insight": { class: "mage", type: "buff", cooldown: 15, description: "Gain profound insight into a magical phenomenon or opponent, revealing vulnerabilities or countermeasures.", effect: { expose_weakness: "magical_target" } },
    "Spell Immunity (One School)": { class: "mage", type: "defensive", cooldown: 20, description: "Temporarily become immune to spells from a chosen school of magic.", effect: { immunity: "chosen_spell_school", duration: "1_min" } },
    "Rune Carver": { class: "mage", type: "utility", cooldown: 10, description: "Inscribe powerful runes that can be activated later for various magical effects.", effect: { create_rune: true, customizable_effect: true } },
    "Astral Projection (Self)": { class: "mage", type: "utility", cooldown: 30, description: "Project your consciousness onto the Astral Plane, leaving your body behind.", effect: { travel: "astral_plane", duration: "1_hour" } },
    "Spell Mimicry": { class: "mage", type: "utility", cooldown: 15, description: "Briefly copy a spell you witness being cast, gaining the ability to cast it once.", effect: { copy_spell_level: 5 } },
    "Etherealness": { class: "mage", type: "movement", cooldown: 12, description: "Become ethereal, allowing you to move through objects and creatures.", effect: { movement: "ethereal", duration: "1_round" } },
    "Leyline Attunement": { class: "mage", type: "buff", cooldown: 18, description: "Draw power from magical leylines, granting a significant boost to your spellcasting for a short time.", effect: { spell_slot_recovery: "1_level_7", spell_dc_bonus: "+1", duration: "2_rounds" } },
    "Planar Binding (Lesser)": { class: "mage", type: "control", cooldown: 20, description: "Attempt to bind a weaker extraplanar creature to your service.", effect: { bind_creature_cr: 5 } },
    "Chronomancy": { class: "mage", type: "utility", cooldown: 25, description: "Manipulate local time, allowing you to undo a single action or gain a bonus action.", effect: { undo_action: true, bonus_action: true, duration: "instant" } },
    "Reality Warp (Minor)": { class: "mage", type: "utility", cooldown: 30, description: "Minorly bend reality, allowing for small, localized alterations to the environment.", effect: { alter_terrain: "small_area" } },
    "Nexus of Power": { class: "mage", type: "buff", cooldown: 30, description: "Become a temporary nexus of arcane energy, empowering all your spells to their maximum potential.", effect: { maximize_spell_damage: true, duration: "1_round" } },
    "Arcane Annihilation": { class: "mage", type: "attack", cooldown: 25, description: "Unleash a devastating burst of raw arcane energy, dealing massive damage to a single target.", effect: { damage: "10d10", type: "single_target" } },
    "Cosmic Awareness": { class: "mage", type: "utility", cooldown: 30, description: "Expand your mind to perceive events across vast distances or gain knowledge of hidden truths.", effect: { scrying_distance: "planetary", knowledge_gain: true } },
    "Unravel Magic": { class: "mage", type: "utility", cooldown: 20, description: "Attempt to unravel the magic of a spell or magical effect, dispelling it or weakening it.", effect: { dispel_magic_level: 9, type: "dispel" } },

    // Rogue Abilities
    "Backstab": { class: "rogue", type: "attack", cooldown: 3, description: "Deal extra damage when attacking an enemy from a hidden position or when they are unaware.", effect: { damage: "1d6", type: "bonus_on_surprise" } },
    "Lockpicking": { class: "rogue", type: "utility", cooldown: 0, description: "Attempt to open locked doors or containers with a set of tools.", effect: { skill_check_bonus: "+5", tool: "thieves'_tools" } },
    "Pickpocket": { class: "rogue", type: "utility", cooldown: 0, description: "Attempt to discreetly steal an item from a creature.", effect: { skill_check_bonus: "+5", target: "creature" } },
    "Dodge Roll": { class: "rogue", type: "defensive", cooldown: 2, description: "Quickly roll out of the way of an attack, granting advantage on your next Dexterity saving throw or imposing disadvantage on an incoming attack roll.", effect: { bonus: "advantage_dex_save", type: "reaction" } },
    "Smoke Bomb": { class: "rogue", type: "utility", cooldown: 4, description: "Throw a smoke bomb that creates a cloud of obscuring smoke, allowing for escape or stealth.", effect: { condition: "heavily_obscured", radius: "10ft", duration: "1_round" } },
    "Shadow Step (Short)": { class: "rogue", type: "movement", cooldown: 5, description: "Melt into shadows and reappear a short distance away.", effect: { movement: "teleport", range: "30ft", requires: "dim_light_or_darkness" } },
    "Poison Blade": { class: "rogue", type: "buff", cooldown: 4, description: "Apply a basic poison to your weapon, adding extra poison damage to your next hit.", effect: { damage: "1d4", type: "poison", duration: "1_hit" } },
    "Caltrops": { class: "rogue", type: "utility", cooldown: 3, description: "Scatter caltrops on the ground to slow and damage enemies who move through them.", effect: { terrain_hazard: "slow_and_damage", area: "5ft_square" } },
    "Distracting Strike": { class: "rogue", type: "attack", cooldown: 4, description: "Feint or attack in a way that distracts an enemy, giving an ally advantage on their next attack against that foe.", effect: { damage: "weapon_damage", ally_advantage: true } },
    "Vanish": { class: "rogue", type: "stealth", cooldown: 6, description: "Immediately take the Hide action as a bonus action, even if in plain sight.", effect: { action: "hide", type: "bonus_action" } },
    "Throwing Knives": { class: "rogue", type: "attack", cooldown: 2, description: "Rapidly throw a volley of small knives at a target.", effect: { damage: "2d4", type: "ranged", num_attacks: 2 } },
    "Silent Takedown": { class: "rogue", type: "attack", cooldown: 5, description: "Subtly incapacitate a target from stealth without making a sound.", effect: { damage: "weapon_damage", condition: "unconscious_or_restrained", type: "stealth_takedown" } },
    "Analyze Weakness": { class: "rogue", type: "utility", cooldown: 4, description: "Study an opponent to discover a weakness, granting you or an ally advantage on your next attack against them.", effect: { target: "single", advantage: "next_attack" } },
    "Wall Run": { class: "rogue", type: "movement", cooldown: 3, description: "Briefly run along vertical surfaces.", effect: { movement: "wall_climb", duration: "1_round" } },
    "Trap Sense (Improved)": { class: "rogue", type: "utility", cooldown: 0, description: "Your senses are finely tuned to detect traps and hidden hazards, granting you advantage on related checks.", effect: { bonus: "advantage_trap_detection" } },
    "Shadow Meld": { class: "rogue", type: "stealth", cooldown: 7, description: "Become one with the shadows, becoming nearly invisible in dim light or darkness.", effect: { condition: "invisible", duration: "1_round", requires: "dim_light_or_darkness" } },
    "Disarming Strike": { class: "rogue", type: "attack", cooldown: 5, description: "Strike a foe's weapon or shield, forcing them to drop it.", effect: { damage: "weapon_damage", condition: "disarmed" } },
    "Master of Disguise": { class: "rogue", type: "utility", cooldown: 0, description: "You can perfectly impersonate another person's appearance and voice.", effect: { perfect_disguise: true } },
    "Garrote": { class: "rogue", type: "attack", cooldown: 6, description: "Attempt to strangle a creature from behind, dealing damage and potentially incapacitating them.", effect: { damage: "weapon_damage", condition: "grappled_and_suffocating" } },
    "Exploit Opening": { class: "rogue", type: "attack", cooldown: 4, description: "When an enemy makes a vulnerable move, you can immediately capitalize with an extra attack.", effect: { trigger: "enemy_vulnerable_move", extra_attack: true } },
    "Slippery Mind (Advantage on Wisdom saves)": { class: "rogue", type: "defensive", cooldown: 0, description: "Your mind is difficult to influence, granting you advantage on Wisdom saving throws.", effect: { bonus: "advantage_wisdom_saves_passive" } },
    "Ghost Walk": { class: "rogue", type: "movement", cooldown: 8, description: "Become incorporeal for a moment, allowing you to pass through solid objects.", effect: { movement: "incorporeal", duration: "1_round" } },
    "Setup Ally": { class: "rogue", type: "buff", cooldown: 3, description: "Create a tactical opening for an ally, granting them a bonus to their next attack roll.", effect: { target: "ally", bonus_to_attack: "+2" } },
    "Chain Attack": { class: "rogue", type: "attack", cooldown: 7, description: "After reducing an enemy to 0 hit points, make an additional attack against a nearby foe.", effect: { trigger: "kill_enemy", extra_attack: "nearby_enemy" } },
    "Misdirection": { class: "rogue", type: "utility", cooldown: 5, description: "Divert attention from yourself or an ally, allowing them to escape notice.", effect: { create_distraction: true, stealth_bonus: "+5" } },
    "Shadow Clone (Brief illusion)": { class: "rogue", type: "utility", cooldown: 9, description: "Create a fleeting illusion of yourself to distract enemies.", effect: { create_illusion: "self", duration: "1_round", type: "distraction" } },
    "Debilitating Strike": { class: "rogue", type: "attack", cooldown: 6, description: "A strike aimed at a weak point, causing the target to suffer a penalty to their next attack or saving throw.", effect: { damage: "weapon_damage", penalty: "-2", target: "enemy" } },
    "Cheat Death (Once per day)": { class: "rogue", type: "defensive", cooldown: 1440, description: "Once per day, when you would be reduced to 0 hit points, you instead drop to 1 hit point.", effect: { trigger: "reduced_to_0_hp", hp_to: 1, uses: "1_per_day" } },
    "Perfected Stealth": { class: "rogue", type: "stealth", cooldown: 0, description: "You are exceptionally skilled at remaining unseen, making you nearly impossible to detect when you are hidden.", effect: { stealth_check_advantage: true } },
    "Death Strike (If target surprised, double damage on hit)": { class: "rogue", type: "attack", cooldown: 10, description: "If you hit a surprised creature, you can double the damage of your attack.", effect: { damage_multiplier: 2, condition: "target_surprised" } },
    "Phantom Step": { class: "rogue", type: "movement", cooldown: 10, description: "Become briefly insubstantial, allowing you to move through obstacles and avoid opportunity attacks.", effect: { movement: "insubstantial", duration: "1_round" } },
    "Master of Poisons": { class: "rogue", type: "utility", cooldown: 0, description: "You are an expert in the creation and application of poisons, gaining proficiency with poisoner's kits and advantage on related checks.", effect: { tool_proficiency: "poisoner's_kit", bonus: "advantage_poison_checks" } },
    "One with the Shadows": { class: "rogue", type: "stealth", cooldown: 15, description: "You can disappear into shadows at will, becoming invisible in dim light or darkness as a bonus action.", effect: { action: "invisible_bonus_action", requires: "dim_light_or_darkness" } },
    "Lethal Precision": { class: "rogue", type: "attack", cooldown: 0, description: "Your strikes are incredibly precise, increasing your critical hit range or damage.", effect: { crit_range_increase: 1 } },

    // Ranger Abilities
    "Track": { class: "ranger", type: "utility", cooldown: 0, description: "Follow tracks and signs of creatures, allowing you to find their path.", effect: { skill_check_bonus: "+5", skill: "Survival" } },
    "Hunter's Mark (Ability)": { class: "ranger", type: "buff", cooldown: 3, description: "Designate a creature as your quarry, dealing extra damage against it.", effect: { damage: "1d6", type: "bonus_per_hit", target: "single" } },
    "Animal Companion (Basic)": { class: "ranger", type: "summon", cooldown: 5, description: "Summon a loyal animal companion to fight alongside you.", effect: { summon_creature: "basic_beast" } },
    "Multi-Shot (Arrows)": { class: "ranger", type: "attack", cooldown: 4, description: "Fire multiple arrows in a rapid volley at a single target or multiple targets.", effect: { damage: "weapon_damage", num_attacks: 2, type: "ranged" } },
    "Empowered Companion (Minor)": { class: "ranger", type: "buff", cooldown: 6, description: "Grant your animal companion a temporary boost to its attack or defense.", effect: { target: "animal_companion", bonus_to_attack: "+1", bonus_to_ac: "+1" } },
    "Camouflage": { class: "ranger", type: "stealth", cooldown: 0, description: "Blend into natural surroundings, making it harder for you to be seen.", effect: { bonus_to_stealth: "+5", requires: "natural_terrain" } },
    "Beast Speech": { class: "ranger", type: "utility", cooldown: 0, description: "You gain the ability to communicate with beasts.", effect: { speak_with_beasts: true } },
    "Volley (Area Effect)": { class: "ranger", type: "attack", cooldown: 7, description: "Unleash a hail of arrows or projectiles in a wide area.", effect: { damage: "weapon_damage", type: "aoe", radius: "10ft" } },
    "Companion's Bond (Shared Senses)": { class: "ranger", type: "utility", cooldown: 0, description: "You can perceive through your animal companion's senses.", effect: { shared_senses: true, range: "1_mile" } },
    "Storm of Arrows": { class: "ranger", type: "attack", cooldown: 9, description: "Launch an overwhelming barrage of arrows, dealing sustained damage to a wide area.", effect: { damage: "3d6", type: "aoe", radius: "20ft", duration: "1_round" } },
    "Call Lightning (Nature version)": { class: "ranger", type: "attack", cooldown: 10, description: "Call down a bolt of lightning from the sky to strike a target.", effect: { damage: "4d6", type: "lightning", target: "single" } },
    "Swift Quiver (Ability)": { class: "ranger", type: "buff", cooldown: 8, description: "Your quiver magically replenishes arrows, allowing for a rapid series of ranged attacks.", effect: { extra_ranged_attack: 1, duration: "1_round" } },
    "Nature's Wrath": { class: "ranger", type: "control", cooldown: 11, description: "Command natural elements to hinder your foes, such as thorny vines or strong gusts of wind.", effect: { condition: "restrained_or_disadvantage", duration: "2_rounds", area: "15ft_square" } },
    "Ethereal Stride (Briefly)": { class: "ranger", type: "movement", cooldown: 10, description: "Briefly step into the Ethereal Plane to bypass obstacles or escape pursuit.", effect: { movement: "ethereal", duration: "1_round" } },
    "Summon Nature's Ally (Advanced)": { class: "ranger", type: "summon", cooldown: 12, description: "Call forth a more powerful beast or fey creature to aid you.", effect: { summon_creature: "advanced_beast_or_fey", cr_limit: 3 } },
    "One with Nature (Temporary Tree Form)": { class: "ranger", type: "defensive", cooldown: 15, description: "Temporarily transform into a sturdy tree-like form, gaining damage resistance and immobility.", effect: { resistance: "bludgeoning_piercing_slashing", condition: "immobile", duration: "3_rounds" } },
    "Aspect of the Beast (Major)": { class: "ranger", type: "buff", cooldown: 14, description: "Embody the essence of a powerful animal, gaining significant physical enhancements.", effect: { strength_bonus: "+3", speed_bonus: "+10ft", duration: "1_min" } },
    "Vanish (Improved)": { class: "ranger", type: "stealth", cooldown: 0, description: "You can now use Vanish as a bonus action in any lighting condition, as long as you break line of sight.", effect: { action: "hide_bonus_action", requires: "no_line_of_sight" } },
    "Master Tracker": { class: "ranger", type: "utility", cooldown: 0, description: "Your tracking skills are unparalleled, allowing you to follow even the most faint or hidden trails.", effect: { bonus_to_tracking: "advantage_and_expertise" } },
    "Call of the Wild (Summon Pack)": { class: "ranger", type: "summon", cooldown: 18, description: "Summon a small pack of less powerful but numerous beasts to overwhelm your enemies.", effect: { summon_creature: "pack_of_wolves", num_creatures: 3 } },
    "Nature's Sanctuary": { class: "ranger", type: "defensive", cooldown: 16, description: "Create a small area of natural tranquility that dampens hostile magic and effects.", effect: { dispel_magic_effect: "area", radius: "10ft", duration: "2_rounds" } },
    "Guardian Spirit (Animal)": { class: "ranger", type: "summon", cooldown: 20, description: "Summon a powerful, spectral animal spirit that protects you and your allies.", effect: { summon_creature: "guardian_spirit", provides: "ac_bonus_or_resistance" } },
    "Elemental Arrows": { class: "ranger", type: "buff", cooldown: 12, description: "Infuse your arrows with elemental energy (fire, cold, lightning, or acid), dealing additional damage.", effect: { damage: "2d6", type: "elemental", duration: "3_attacks" } },
    "Spirit Walker": { class: "ranger", type: "movement", cooldown: 15, description: "Temporarily become incorporeal, allowing you to move through solid objects and creatures.", effect: { movement: "incorporeal", duration: "1_round" } },
    "Eyes of the Eagle (Permanent)": { class: "ranger", type: "utility", cooldown: 0, description: "Your vision becomes as sharp as an eagle's, granting permanent advantage on Perception checks that rely on sight.", effect: { bonus: "permanent_advantage_perception_sight" } },
    "Master of the Wild": { class: "ranger", type: "utility", cooldown: 0, description: "You have unparalleled knowledge of the wilderness, allowing you to find resources, navigate, and avoid hazards with ease.", effect: { expertise_all_survival: true, bonus: "advantage_nature_checks" } },
    "Primal Strike": { class: "ranger", type: "attack", cooldown: 13, description: "Infuse your next attack with raw primal energy, bypassing resistances and dealing bonus damage.", effect: { damage: "3d8", type: "true_damage", ignores: "resistance" } },
    "Nature's Resilience": { class: "ranger", type: "defensive", cooldown: 14, description: "Draw upon the enduring strength of nature to gain significant damage resistance for a short duration.", effect: { resistance: "all_physical", duration: "2_rounds" } },
    "Commune with Nature (Greater)": { class: "ranger", type: "utility", cooldown: 18, description: "Deeply commune with the spirits of nature to gain profound knowledge of your surroundings and any disturbances.", effect: { gain_knowledge: "area_up_to_10_miles" } },
    "Feral Senses (Improved)": { class: "ranger", type: "utility", cooldown: 0, description: "Your senses are so heightened that you can detect hidden or invisible creatures within a certain range.", effect: { blindsight: "30ft" } },
    "Unseen Predator": { class: "ranger", type: "stealth", cooldown: 16, description: "You become an almost undetectable hunter, gaining true invisibility while in natural terrain.", effect: { condition: "invisible", requires: "natural_terrain" } },
    "Wilderness Guardian": { class: "ranger", type: "buff", cooldown: 17, description: "You project an aura of protection over your allies within the wilderness, granting them a bonus to AC and saving throws.", effect: { bonus_to_ac: "+1", bonus_to_saves: "+1", target: "allies", range: "30ft", requires: "natural_terrain" } },
    "Aspect of the Primal Spirit": { class: "ranger", type: "buff", cooldown: 20, description: "Temporarily take on a semi-spiritual form of a powerful primal beast, gaining immense power and resilience.", effect: { damage_bonus: "+4", resistance: "all", duration: "1_min" } },
    "Avatar of the Wild": { class: "ranger", type: "buff", cooldown: 25, description: "Temporarily become an avatar of the wilderness, commanding the very forces of nature and gaining unparalleled power.", effect: { control_weather: "localized", summon_multiple_beasts: true, damage_bonus: "+5", duration: "1_min" } },
    "Perfect Hunter": { class: "ranger", type: "utility", cooldown: 0, description: "Your hunting prowess is absolute; you can always find your prey and never lose its trail.", effect: { "cannot_lose_target_trail": true, bonus: "advantage_on_all_tracking" } },

    // Psychic Abilities
    "Mind Thrust": { class: "psychic", type: "attack", cooldown: 3, description: "Unleash a focused blast of psychic energy at a single target.", effect: { damage: "2d6", type: "psychic", target: "single" } },
    "Telekinetic Shove": { class: "psychic", type: "control", cooldown: 4, description: "Use your mind to push a creature or object a short distance.", effect: { push_distance: "10ft", target: "creature_or_object" } },
    "Precognitive Dodge": { class: "psychic", type: "defensive", cooldown: 2, description: "Glimpse the immediate future, allowing you to anticipate and evade an attack.", effect: { bonus_to_ac: "+2", duration: "1_attack" } },
    "Mental Shield": { class: "psychic", type: "defensive", cooldown: 4, description: "Form a psychic barrier around your mind, gaining resistance to psychic damage and mind-altering effects.", effect: { resistance: "psychic", bonus_to_saves: "mental" } },
    "Telekinetic Lift": { class: "psychic", type: "utility", cooldown: 5, description: "Lift and manipulate objects with your mind.", effect: { lift_weight: "100_lbs", range: "30ft" } },
    "Mind Spike": { class: "psychic", type: "attack", cooldown: 4, description: "Send a sharp jolt of psychic pain into a creature's mind, dealing damage and potentially causing disadvantage on their next action.", effect: { damage: "3d4", type: "psychic", condition: "disadvantage_on_next_action" } },
    "Psychic Blast": { class: "psychic", type: "attack", cooldown: 6, description: "Unleash a wave of concussive psychic force in a cone, affecting multiple enemies.", effect: { damage: "3d6", type: "psychic", area: "15ft_cone" } },
    "Aura Reading": { class: "psychic", type: "utility", cooldown: 0, description: "Read the aura of a creature to discern their emotional state, health, or alignment.", effect: { gain_info: "emotional_state_health_alignment" } },
    "Psychic Crush": { class: "psychic", type: "attack", cooldown: 8, description: "Overwhelm a creature's mind with crushing force, dealing heavy psychic damage.", effect: { damage: "4d8", type: "psychic", target: "single" } },
    "Astral Projection (Self, Short)": { class: "psychic", type: "utility", cooldown: 10, description: "Briefly project your consciousness to a nearby location on the Astral Plane for scouting.", effect: { scrying_range: "100ft", travel: "astral_plane_short" } },
    "Mind Over Body": { class: "psychic", type: "buff", cooldown: 7, description: "Use sheer mental discipline to overcome physical limitations, gaining temporary strength or endurance.", effect: { strength_bonus: "+2", constitution_bonus: "+2", duration: "1_min" } },
    "Telekinetic Wave": { class: "psychic", type: "control", cooldown: 8, description: "Emit a powerful telekinetic wave that pushes enemies away and potentially knocks them prone.", effect: { push_distance: "20ft", condition: "prone", area: "20ft_cone" } },
    "Thought Shield": { class: "psychic", type: "defensive", cooldown: 6, description: "A more robust mental shield that provides stronger resistance and a chance to reflect minor psychic attacks.", effect: { resistance: "psychic_and_mental", reflect_minor_attacks: true } },
    "Psychic Intrusion": { class: "psychic", type: "utility", cooldown: 9, description: "Attempt to subtly influence a creature's thoughts or implant false memories.", effect: { implant_suggestion: true, false_memories: true } },
    "Mind Flay": { class: "psychic", type: "attack", cooldown: 10, description: "Assault a creature's mind with agonizing mental energy, dealing psychic damage and reducing their mental faculties.", effect: { damage: "5d6", type: "psychic", condition: "intelligence_reduction" } },
    "Telekinetic Barrier": { class: "psychic", type: "defensive", cooldown: 11, description: "Create a stationary, invisible barrier of telekinetic force that can block projectiles or impede movement.", effect: { create_barrier: true, blocks: "projectiles_and_movement" } },
    "Spell Weaver": { class: "mage", type: "buff", cooldown: 10, description: "Combine two lower-level spells into a single, more potent casting.", effect: { combine_spells: "2_lower_level" } }, // This was a copy from Mage, kept for consistency
    "Astral Projection (Group)": { class: "psychic", type: "utility", cooldown: 20, description: "Project your consciousness and that of your allies onto the Astral Plane for travel or reconnaissance.", effect: { travel: "astral_plane", target: "group", duration: "1_hour" } },
    "Mind Prison": { class: "psychic", type: "control", cooldown: 15, description: "Trap a creature's mind within a psychic illusion, incapacitating them.", effect: { condition: "incapacitated", duration: "3_rounds" } },
    "Psychic Avatar": { class: "psychic", type: "buff", cooldown: 25, description: "Temporarily manifest as a pure psychic construct, gaining incredible mental power and defense.", effect: { intelligence_bonus: "+4", charisma_bonus: "+4", resistance: "all_mental", duration: "1_min" } },
    "Reality Manipulation (Minor)": { class: "psychic", type: "utility", cooldown: 30, description: "Minorly bend reality to your will, causing small, localized alterations to the environment or events.", effect: { alter_terrain: "small_area" } }, // This was a copy from Mage, kept for consistency
    "Psionic Nova": { class: "psychic", type: "attack", cooldown: 20, description: "Release a massive explosion of psychic energy, devastating all creatures in a wide area around you.", effect: { damage: "8d8", type: "psychic", area: "30ft_radius" } },
    "Mind Palace": { class: "psychic", type: "utility", cooldown: 0, description: "Create an intricate mental construct where you can store memories, perform complex calculations, and retreat for mental solitude.", effect: { perfect_memory: true, accelerated_thought: true } },
    "Telekinetic Warp": { class: "psychic", type: "movement", cooldown: 18, description: "Teleport yourself and several nearby allies across a significant distance.", effect: { movement: "teleport", range: "120ft", target: "self_and_allies" } },
    "Cognitive Overload": { class: "psychic", type: "attack", cooldown: 15, description: "Bombard a creature's mind with overwhelming information and sensory input, causing massive psychic damage and confusion.", effect: { damage: "10d6", type: "psychic", condition: "confused", duration: "2_rounds" } },
    "Ascended Mind": { class: "psychic", type: "buff", cooldown: 30, description: "Your mind transcends mortal limits, granting unparalleled insight, raw psionic power, and temporary omniscience.", effect: { intelligence_bonus: "+5", wisdom_bonus: "+5", omniscience: "limited_time", duration: "1_min" } },
    "Total Recall": { class: "psychic", type: "utility", cooldown: 0, description: "Instantly recall any information you have ever perceived or learned.", effect: { perfect_recall: true } },

    // Paladin Abilities
    "Holy Strike": { class: "paladin", type: "attack", cooldown: 3, description: "Infuse your next melee attack with divine energy, dealing bonus radiant damage.", effect: { damage: "1d6", type: "radiant", bonus: "on_hit" } },
    "Righteous Charge": { class: "paladin", type: "movement", cooldown: 4, description: "Charge forward, slamming into an enemy and potentially knocking them prone.", effect: { movement: "charge", target: "single", condition: "prone" } },
    "Protective Ward": { class: "paladin", type: "defensive", cooldown: 3, description: "Create a magical ward on an ally, granting them a bonus to AC for a short duration.", effect: { target: "ally", ac_bonus: "+2", duration: "1_round" } },
    "Vow of Enmity": { class: "paladin", type: "buff", cooldown: 5, description: "Designate one creature as your sworn enemy, granting you advantage on attack rolls against it.", effect: { target: "single_enemy", advantage_on_attacks: true, duration: "1_min" } },
    "Channel Divinity (1/rest)": { class: "paladin", type: "utility", cooldown: 0, description: "Utilize a special divine power based on your Sacred Oath.", effect: { variable: "oath_dependent" } },
    "Turn the Unholy": { class: "paladin", type: "control", cooldown: 0, description: "As a Channel Divinity option, present your holy symbol and make undead or fiends flee from you.", effect: { target: "undead_fiends", condition: "frightened_and_move_away", area: "30ft_radius" } },
    "Aura of Devotion (Minor)": { class: "paladin", type: "buff", cooldown: 0, description: "You and friendly creatures within 10 feet of you can't be charmed.", effect: { condition_immunity: "charmed", target: "allies", range: "10ft", type: "passive_aura" } },
    "Consecrated Ground": { class: "paladin", type: "utility", cooldown: 6, description: "Sanctify an area, making it difficult for evil creatures to move within or affect it.", effect: { terrain_effect: "difficult_terrain", against: "evil_creatures", area: "10ft_radius" } },
    "Blinding Smite": { class: "paladin", type: "attack", cooldown: 5, description: "Infuse your weapon with dazzling light; on a hit, the target is blinded.", effect: { damage: "weapon_damage", type: "radiant", condition: "blinded", duration: "1_round" } },
    "Crusader's Mantle": { class: "paladin", type: "buff", cooldown: 8, description: "Rays of divine light emanate from you, granting extra radiant damage to your weapon attacks and those of allies within range.", effect: { damage: "1d4", type: "radiant", target: "self_and_allies", range: "30ft", duration: "1_min" } },
    "Divine Steed (Summon)": { class: "paladin", type: "summon", cooldown: 10, description: "Call forth a celestial or fey spirit to serve as your steed.", effect: { summon_creature: "warhorse_or_similar" } },
    "Retributive Strike": { class: "paladin", type: "reaction", cooldown: 0, description: "When an enemy deals damage to an ally within 5 feet of you, you can make a melee weapon attack against that enemy.", effect: { trigger: "ally_damaged_nearby", type: "attack" } },
    "Sacred Weapon": { class: "paladin", type: "buff", cooldown: 7, description: "As a Channel Divinity option, imbue one weapon you are holding with divine energy, gaining a bonus to attack rolls and dealing radiant damage.", effect: { bonus_to_attack: "charisma_mod", type: "radiant_damage", duration: "1_min" } },
    "Holy Rebuke": { class: "paladin", type: "attack", cooldown: 6, description: "Unleash a burst of holy energy that deals radiant damage and pushes enemies away.", effect: { damage: "2d6", type: "radiant", push_distance: "10ft", area: "10ft_cone" } },
    "Divine Judgment": { class: "paladin", type: "attack", cooldown: 8, description: "Channel divine wrath into a powerful attack, dealing extra radiant damage.", effect: { damage: "2d8", type: "radiant", bonus: "on_hit" } },
    "Guardian's Shield": { class: "paladin", type: "defensive", cooldown: 9, description: "Conjure a magical shield of divine energy that grants temporary hit points and resistance to a chosen damage type.", effect: { temp_hp: "3d6", resistance: "choosable_type", duration: "2_rounds" } },
    "Wave of Righteousness": { class: "paladin", type: "attack", cooldown: 10, description: "Send forth a wave of pure divine energy that smites all evil creatures in its path.", effect: { damage: "3d8", type: "radiant", target: "evil_creatures", area: "30ft_line" } },
    "Lingering Light": { class: "paladin", type: "buff", cooldown: 0, description: "Your healing spells leave a lingering effect, restoring a small amount of hit points at the start of an ally's turn.", effect: { healing_over_time: "1d4", duration: "2_rounds" } },
    "Exorcism": { class: "paladin", type: "control", cooldown: 12, description: "Force a possessing spirit out of a creature or banish a fiend or undead.", effect: { remove_possession: true, banish: "fiend_or_undead" } },
    "Unyielding Spirit": { class: "paladin", type: "buff", cooldown: 11, description: "Your resolve is unbreaking, granting you advantage on saving throws against being charmed or frightened.", effect: { bonus: "advantage_charm_frighten_saves" } },
    "Holy Weapon": { class: "paladin", type: "buff", cooldown: 13, description: "Infuse your weapon with holy power, causing it to shed bright light and deal extra radiant damage on hit.", effect: { damage: "2d8", type: "radiant", duration: "1_min" } },
    "Judgment of the Heavens": { class: "paladin", type: "attack", cooldown: 14, description: "Call down a bolt of divine judgment, dealing massive radiant damage to a single target.", effect: { damage: "6d10", type: "radiant", target: "single" } },
    "Divine Intervention (Lesser)": { class: "paladin", type: "utility", cooldown: 20, description: "Appeal to your deity for a minor miracle or assistance in a dire situation.", effect: { variable: "minor_miracle" } },
    "Aura of Warding": { class: "paladin", type: "defensive", cooldown: 0, description: "You and friendly creatures within 10 feet of you have resistance to damage from spells.", effect: { resistance: "spell_damage", target: "allies", range: "10ft", type: "passive_aura" } },
    "Find Greater Steed": { class: "paladin", type: "summon", cooldown: 15, description: "Call forth a more powerful celestial or fey steed, such as a pegasus or griffon.", effect: { summon_creature: "greater_steed" } },
    "Final Stand": { class: "paladin", type: "defensive", cooldown: 18, description: "When reduced to 0 hit points, you can choose to stay conscious and fight for one more round.", effect: { condition: "stay_at_0_hp", duration: "1_round" } },
    "Aura of Justice": { class: "paladin", type: "buff", cooldown: 0, description: "You and friendly creatures within 10 feet of you deal extra radiant damage on their first attack each turn.", effect: { damage: "1d4", type: "radiant", target: "allies", range: "10ft", type: "passive_aura" } },
    "Vessel of Divine Light": { class: "paladin", type: "buff", cooldown: 20, description: "Your body temporarily becomes a conduit for pure divine energy, causing your attacks to deal immense radiant damage.", effect: { damage_bonus: "3d8", type: "radiant", duration: "3_rounds" } },
    "Avenging Angel": { class: "paladin", type: "buff", cooldown: 25, description: "Transform into a winged angelic form, gaining flight, increased damage, and a powerful aura of fear.", effect: { flight: true, damage_bonus: "+4", aura: "frightened", duration: "1_min" } },
    "Aura of Sanctity": { class: "paladin", type: "defensive", cooldown: 0, description: "You and friendly creatures within 10 feet of you gain resistance to all damage from fiends and undead.", effect: { resistance: "fiend_undead_damage", target: "allies", range: "10ft", type: "passive_aura" } },
    "Bulwark of Faith": { class: "paladin", type: "defensive", cooldown: 22, description: "You become an unmoving bastion of faith, granting all allies within range a bonus to all saving throws and resistance to damage.", effect: { bonus_to_saves: "+3", resistance: "all", target: "allies", range: "30ft", duration: "2_rounds" } },
    "Wrath of God": { class: "paladin", type: "attack", cooldown: 25, description: "Unleash a cataclysmic burst of divine energy that obliterates enemies and heals allies in a massive area.", effect: { damage: "10d10", type: "radiant", healing: "10d6", area: "60ft_radius" } },
    "Avatar of Divine Wrath": { class: "paladin", type: "buff", cooldown: 30, description: "Temporarily become an avatar of your deity's wrath, gaining absolute power and the ability to smite multiple foes with divine power.", effect: { damage_bonus: "+5", immunity: "all_damage", smite_multiple: true, duration: "1_min" } },
    "Ultimate Sacrifice": { class: "paladin", type: "healing", cooldown: 30, description: "Sacrifice a portion of your own life force to fully heal a fallen ally and grant them temporary invulnerability.", effect: { self_damage: "all_but_1_hp", target: "fallen_ally", heal_to_full: true, invulnerability: "1_round" } },

    // Bard Abilities
    "Cutting Words": { class: "bard", type: "control", cooldown: 3, description: "Use your sharp wit or scathing music to distract an enemy, imposing a penalty on their attack roll or saving throw.", effect: { target: "enemy", penalty: "-1d6" } },
    "Inspire Courage": { class: "bard", type: "buff", cooldown: 4, description: "Play an inspiring tune, granting an ally a bonus to their next attack roll or saving throw.", effect: { target: "ally", bonus: "+1d6" } },
    "Rallying Performance": { class: "bard", type: "buff", cooldown: 5, description: "Deliver an uplifting performance that grants temporary hit points to nearby allies.", effect: { temp_hp: "1d8", target: "allies", range: "30ft" } },
    "Distracting Tune": { class: "bard", type: "control", cooldown: 4, description: "Play an unsettling melody that imposes disadvantage on a target's Perception checks or concentration saves.", effect: { target: "enemy", disadvantage: "perception_or_concentration" } },
    "Soothing Melody": { class: "bard", type: "healing", cooldown: 3, description: "Play a gentle tune that calms a creature, potentially ending the frightened or charmed condition.", effect: { remove_condition: ["frightened", "charmed"], target: "ally" } },
    "Discordant Note": { class: "bard", type: "attack", cooldown: 5, description: "Strike a jarring chord that deals psychic damage to enemies in an area and can disorient them.", effect: { damage: "2d6", type: "psychic", area: "10ft_radius", condition: "disoriented" } },
    "Harmonize": { class: "bard", type: "buff", cooldown: 6, description: "Weave multiple magical effects into a harmonious whole, enhancing the duration or potency of ongoing spells.", effect: { enhance_spell: "duration_or_potency" } },
    "Echoing Refrain": { class: "bard", type: "control", cooldown: 7, description: "Repeat a powerful musical phrase, causing the effect of a previous spell or ability to occur again on a new target.", effect: { repeat_effect: "previous_ability", target: "new_target" } },
    "Counter-aria": { class: "bard", type: "reaction", cooldown: 8, description: "Interrupt an enemy's spellcasting with a dissonant counter-song, potentially negating their spell.", effect: { trigger: "enemy_casts_spell", type: "counterspell" } },
    "Crescendo": { class: "bard", type: "buff", cooldown: 9, description: "Build to a powerful musical peak, granting yourself and allies a stacking bonus to damage or attack rolls that increases each turn.", effect: { damage_bonus: "+1", stacks: true, duration: "3_rounds" } },
    "Song of Freedom": { class: "bard", type: "utility", cooldown: 10, description: "Perform an inspiring anthem that can break bonds, end restraints, or free allies from imprisonment.", effect: { remove_condition: ["restrained", "grappled"], break_bonds: true } },
    "Enthralling Oration": { class: "bard", type: "control", cooldown: 8, description: "Deliver a captivating speech that charms a group of creatures, rendering them docile or friendly.", effect: { condition: "charmed", target: "group", duration: "1_min" } },
    "Symphony of Heroes": { class: "bard", type: "buff", cooldown: 12, description: "Unleash a grand symphony that invigorates allies, granting them temporary hit points and a bonus to all their rolls.", effect: { temp_hp: "3d8", bonus_to_all_rolls: "+2", target: "allies", range: "60ft", duration: "1_min" } },
    "Dissonant Whisper (Improved)": { class: "bard", type: "attack", cooldown: 7, description: "Whisper terrifying words into a creature's mind, dealing psychic damage and forcing them to use their reaction to move away.", effect: { damage: "4d6", type: "psychic", forced_movement: "reaction" } },
    "Perfect Pitch": { class: "bard", type: "utility", cooldown: 0, description: "You have an innate understanding of sound and resonance, allowing you to perfectly replicate any sound or detect sonic vulnerabilities.", effect: { perfect_sound_replication: true, detect_sonic_vulnerabilities: true } },
    "Chords of Power": { class: "bard", type: "buff", cooldown: 10, description: "Weave powerful magical chords into your music, empowering your spells to be more potent or harder to resist.", effect: { spell_dc_bonus: "+1", spell_damage_bonus: "+1d8", duration: "3_spells" } },
    "Masterpiece": { class: "bard", type: "utility", cooldown: 15, description: "Create a work of art (music, poetry, painting) that has a profound magical effect, such as inspiring a large group or revealing a hidden truth.", effect: { variable: "profound_magical_effect" } },
    "Fascinate (Improved)": { class: "bard", type: "control", cooldown: 11, description: "Captivate a group of creatures with your performance, rendering them charmed and immobile while you concentrate.", effect: { condition: "charmed_and_immobile", target: "group", duration: "concentration" } },
    "Universal Language": { class: "bard", type: "utility", cooldown: 0, description: "You can understand and speak any language, both spoken and written.", effect: { speak_any_language: true } },
    "Song of Lore": { class: "bard", type: "utility", cooldown: 12, description: "Perform an ancient ballad that reveals forgotten lore, grants knowledge of a specific subject, or helps decipher ancient texts.", effect: { gain_knowledge: "specific_subject", decipher_texts: true } },
    "Virtuoso Performance": { class: "bard", type: "buff", cooldown: 15, description: "Enter a state of peak artistic expression, making your spells and abilities incredibly difficult to resist and greatly amplified.", effect: { advantage_on_all_bard_abilities: true, spell_dc_bonus: "+2", duration: "3_rounds" } },
    "Aria of Ruin": { class: "bard", type: "attack", cooldown: 14, description: "Unleash a chaotic aria that deals devastating psychic and thunder damage to enemies in a wide area.", effect: { damage: "8d6", type: "psychic_thunder", area: "30ft_radius" } },
    "Enduring Anthem": { class: "bard", type: "buff", cooldown: 0, description: "Your inspiring presence becomes a constant source of strength, granting allies a passive bonus to saving throws or temporary hit points at the start of combat.", effect: { passive_bonus: "+1_to_saves_or_temp_hp" } },
    "Mind-Altering Melody": { class: "bard", type: "control", cooldown: 16, description: "Play a complex melody that alters a creature's perceptions, potentially causing them to see allies as enemies or vice versa.", effect: { condition: "mind_altered", duration: "1_min" } },
    "Epic Tale": { class: "bard", type: "buff", cooldown: 20, description: "Recount a heroic tale that bolsters the courage and resilience of your allies, granting them temporary invulnerability or greatly increased capabilities.", effect: { temp_invulnerability: "1_round", massive_buff: true, target: "allies" } },
    "Resonant Frequency": { class: "bard", type: "attack", cooldown: 18, description: "Find the resonant frequency of an object or creature, causing it to vibrate violently and take massive force damage, potentially shattering objects.", effect: { damage: "10d8", type: "force", shatter_objects: true } },
    "Unforgettable Performance": { class: "bard", type: "utility", cooldown: 0, description: "Your performances are so impactful that those who witness them are left with a lasting impression, making them amenable to your suggestions or unable to forget you.", effect: { lasting_impression: true, bonus_to_persuasion: "advantage" } },
    "Shattering Crescendo": { class: "bard", type: "attack", cooldown: 22, description: "Build to a deafening peak that explodes with sonic energy, dealing massive thunder damage and potentially deafening and knocking prone all foes.", effect: { damage: "12d6", type: "thunder", condition: ["deafened", "prone"], area: "40ft_radius" } },
    "Hymn of the Ancients": { class: "bard", type: "buff", cooldown: 25, description: "Sing a forgotten hymn that calls upon primordial magic, restoring spent spell slots or granting powerful temporary magical abilities.", effect: { restore_spell_slots: "multiple", temporary_abilities: true } },
    "Unravel Magic": { class: "mage", type: "utility", cooldown: 20, description: "Attempt to unravel the magic of a spell or magical effect, dispelling it or weakening it.", effect: { dispel_magic_level: 9, type: "dispel" } }, // Copy from Mage
    "Aura of Inspiration": { class: "bard", type: "buff", cooldown: 0, description: "You emanate an aura that constantly inspires allies, granting them a small bonus to a chosen type of roll.", effect: { bonus: "+1", choosable_roll: true, type: "passive_aura" } },
    "Harmonic Convergence": { class: "bard", type: "utility", cooldown: 28, description: "Bring multiple magical energies into perfect resonance, amplifying all active beneficial spells and debuffing all hostile ones in an area.", effect: { amplify_beneficial: true, weaken_hostile: true, area: "60ft_radius" } },
    "Word of Creation": { class: "bard", type: "utility", cooldown: 30, description: "Speak a word of true creation, bringing forth objects, simple creatures, or even temporary structures into existence.", effect: { create_object: "variable", complexity: "limited" } },
    "Perfect Harmony": { class: "bard", type: "buff", cooldown: 30, description: "You achieve perfect harmony with all sounds and magic, becoming immune to sonic damage and gaining unmatched control over magical effects.", effect: { immunity: "sonic_damage", unparalleled_spell_control: true } },

    // Cleric Abilities
    "Divine Bolt": { class: "cleric", type: "attack", cooldown: 3, description: "Hurl a bolt of pure divine energy that deals radiant damage to a single target.", effect: { damage: "2d4", type: "radiant", target: "single" } },
    "Turn Undead (Minor)": { class: "cleric", type: "control", cooldown: 0, description: "As a Channel Divinity option, cause undead to flee from you if they fail a saving throw.", effect: { target: "undead", condition: "frightened_and_flee", area: "30ft_radius" } },
    "Preserve Life": { class: "cleric", type: "healing", cooldown: 0, description: "As a Channel Divinity option, restore hit points to creatures of your choice within 30 feet, up to a maximum amount.", effect: { healing: "5_times_cleric_level", target: "multiple_allies" } },
    "Radiant Aura": { class: "cleric", type: "buff", cooldown: 5, description: "Emit a shimmering aura of divine light that grants a small bonus to allied attack rolls or sheds bright light.", effect: { bonus_to_attack: "+1", type: "radiant_light", range: "10ft" } },
    "Prayer of Healing": { class: "cleric", type: "healing", cooldown: 6, description: "Recite a prayer that restores hit points to multiple allies at once.", effect: { healing: "2d8", target: "multiple_allies", range: "30ft" } },
    "Sanctuary": { class: "cleric", type: "defensive", cooldown: 4, description: "Ward a creature with divine protection, causing enemies to be unable to attack them directly unless they succeed a Wisdom save.", effect: { target: "ally", condition: "protected_from_attack" } },
    "Consecrate": { class: "cleric", type: "utility", cooldown: 7, description: "Bless a small area, making it holy ground that provides a minor bonus to allies and hinders evil creatures.", effect: { bonus: "+1_to_all_rolls", target: "allies_in_area", hinders: "evil_creatures" } },
    "Divine Smite (Cleric version)": { class: "cleric", type: "attack", cooldown: 0, description: "When you hit a creature with a melee weapon attack, you can expend a spell slot to deal extra radiant damage.", effect: { damage: "2d8", type: "radiant", trigger: "melee_hit", cost: "spell_slot" } },
    "Mass Healing Word": { class: "cleric", type: "healing", cooldown: 8, description: "Heal multiple injured allies with a single divine invocation.", effect: { healing: "1d4", target: "up_to_6_allies", range: "60ft" } },
    "Spirit Shroud": { class: "cleric", type: "buff", cooldown: 9, description: "Envelop yourself in a shroud of spectral spirits that deal extra damage on your attacks and slow enemies you hit.", effect: { damage: "1d8", type: "force_necrotic_radiant", condition: "speed_reduction", duration: "1_min" } },
    "Blessed Healer": { class: "cleric", type: "healing", cooldown: 0, description: "When you restore hit points to a creature other than yourself, you regain some hit points equal to 2 + the spell's level.", effect: { self_healing: "2+spell_level", trigger: "heal_other" } },
    "Spiritual Guardians (Improved)": { class: "cleric", type: "attack", cooldown: 10, description: "Summon powerful spiritual guardians that deal radiant or necrotic damage to enemies entering their area and halve their speed.", effect: { damage: "3d8", type: "radiant_or_necrotic", condition: "speed_halved", area: "15ft_radius", duration: "10_min" } },
    "Divine Word": { class: "cleric", type: "control", cooldown: 12, description: "Utter a word of divine power that can cause various effects depending on the target's current hit points, from deafening to instant death.", effect: { variable: "hp_dependent_effects" } },
    "Holy Ground": { class: "cleric", type: "utility", cooldown: 11, description: "Create a larger area of sacred ground that heavily impedes evil creatures and provides stronger bonuses to allies.", effect: { terrain_effect: "difficult_and_damaging_for_evil", bonus: "+2_to_all_rolls", target: "allies", area: "30ft_radius" } },
    "Aura of Life": { class: "cleric", type: "buff", cooldown: 0, description: "You radiate an aura that makes it more difficult for creatures to be reduced to 0 hit points or to die.", effect: { prevents_death_from_0hp: true, resistance_to_necrotic: true, range: "30ft", type: "passive_aura" } },
    "Sacred Ground": { class: "cleric", type: "utility", cooldown: 13, description: "Consecrate a large area, making it hallowed ground that strongly hinders evil creatures and offers significant protection to allies.", effect: { terrain_effect: "severe_impediment_for_evil", bonus: "advantage_on_saves", target: "allies", area: "60ft_radius" } },
    "Circle of Healing": { class: "cleric", type: "healing", cooldown: 15, description: "Create a circle of divine energy that rapidly heals all allies within it.", effect: { healing_over_time: "2d6_per_round", area: "15ft_radius", duration: "3_rounds" } },
    "Guardian Spirit": { class: "cleric", type: "summon", cooldown: 14, description: "Summon a powerful, spectral guardian spirit that protects a chosen ally and attacks enemies.", effect: { summon_creature: "spectral_guardian", protects_ally: true } },
    "Supreme Healing": { class: "cleric", type: "healing", cooldown: 16, description: "Your healing spells are greatly empowered, restoring the maximum possible hit points.", effect: { maximize_healing_spells: true } },
    "Pillar of Light": { class: "cleric", type: "attack", cooldown: 17, description: "Call down a searing pillar of divine light that deals massive radiant damage to a single target or small area.", effect: { damage: "8d8", type: "radiant", area: "5ft_cylinder" } },
    "Divine Beacon": { class: "cleric", type: "utility", cooldown: 18, description: "Create a persistent beacon of divine light that reveals hidden truths, dispels illusions, and harms undead/fiends within its radius.", effect: { true_sight: "area", dispel_illusions: true, damage: "2d6_undead_fiend", area: "30ft_radius" } },
    "Word of Recall": { class: "cleric", type: "utility", cooldown: 15, description: "Teleport yourself and several willing creatures to a pre-designated sanctuary.", effect: { teleport: "group", target: "sanctuary" } },
    "Aura of Purity": { class: "cleric", type: "buff", cooldown: 0, description: "You and friendly creatures within 10 feet of you have advantage on saving throws against diseases and against being poisoned.", effect: { bonus: "advantage_disease_poison_saves", type: "passive_aura" } },
    "Divine Judgment": { class: "paladin", type: "attack", cooldown: 8, description: "Channel divine wrath into a powerful attack, dealing extra radiant damage.", effect: { damage: "2d8", type: "radiant", bonus: "on_hit" } }, // Copy from Paladin
    "Resurrection": { class: "cleric", type: "healing", cooldown: 20, description: "Bring a dead creature back to life, provided it hasn't been dead for too long and its body is mostly intact.", effect: { revive_dead: true, limitations: "time_body_intact" } },
    "Cleansing Light": { class: "cleric", type: "healing", cooldown: 19, description: "Emit a burst of purifying light that cures all diseases, poisons, and debilitating conditions from allies in an area.", effect: { remove_conditions: "all_diseases_poisons_debil", target: "allies", area: "30ft_radius" } },
    "Unyielding Faith": { class: "cleric", type: "defensive", cooldown: 0, description: "Your faith is so absolute that you are immune to being charmed or frightened.", effect: { immunity: ["charmed", "frightened"] } },
    "Sanctified Zone": { class: "cleric", type: "utility", cooldown: 22, description: "Create a vast area of divinely blessed ground, turning it into a sanctuary that protects against all hostile magic and offers great boons to allies.", effect: { nullify_hostile_magic: "area", major_bonuses: true, area: "100ft_radius", duration: "1_hour" } },
    "Miracle (Lesser)": { class: "cleric", type: "utility", cooldown: 25, description: "Invoke a direct, but limited, intervention from your deity, allowing you to achieve a minor, but impossible, effect.", effect: { variable: "minor_impossible_effect" } },
    "Vessel of the Divine": { class: "cleric", type: "buff", cooldown: 28, description: "For a short time, you become a living embodiment of your deity, radiating divine power and gaining immense strength and resilience.", effect: { strength_bonus: "+5", resistance: "all_damage", divine_damage_aura: true, duration: "1_min" } },
    "Divine Retribution": { class: "cleric", type: "attack", cooldown: 25, description: "When you or an ally is critically hit, you can unleash a powerful retaliatory strike imbued with divine fury against the attacker.", effect: { trigger: "critical_hit_ally_or_self", damage: "10d6", type: "radiant" } },
    "Apotheosis (Temporary)": { class: "cleric", type: "buff", cooldown: 30, description: "Temporarily ascend to a quasi-divine state, gaining flight, immunity to all damage, and the ability to cast any spell without expending a spell slot.", effect: { flight: true, immunity: "all_damage", free_spellcasting: true, duration: "1_round" } },
    "Avatar of a God": { class: "cleric", type: "buff", cooldown: 30, description: "You are temporarily possessed by the spirit of your deity, gaining near-omnipotent power and the ability to reshape reality within your presence.", effect: { godlike_power: true, reality_warping: "limited_area", duration: "1_min" } },
    "Divine Intervention (Improved)": { class: "cleric", type: "utility", cooldown: 0, description: "Your deity directly intervenes on your behalf, granting a powerful, nearly impossible effect, or turning the tide of battle in your favor.", effect: { variable: "major_impossible_effect", uses: "1_per_week" } },

    // Druid Abilities
    "Nature's Grasp": { class: "druid", type: "control", cooldown: 3, description: "Cause thorny vines to erupt from the ground, grappling and restraining a creature.", effect: { condition: "grappled_and_restrained", duration: "concentration" } },
    "Primal Savagery": { class: "druid", type: "attack", cooldown: 3, description: "Your unarmed strikes become imbued with primal ferocity, dealing extra slashing damage.", effect: { damage: "1d10", type: "slashing" } },
    "Animal Companion (Spirit)": { class: "druid", type: "summon", cooldown: 5, description: "Summon a spectral animal companion to fight alongside you.", effect: { summon_creature: "spectral_beast" } },
    "Circle Spellcasting": { class: "druid", type: "buff", cooldown: 0, description: "Gain access to additional spells based on your chosen Druid Circle.", effect: { variable: "circle_dependent_spells" } },
    "Call of the Wild": { class: "druid", type: "control", cooldown: 6, description: "Emit a primal call that can charm or incite fear in nearby beasts.", effect: { target: "beasts", condition: ["charmed", "frightened"], range: "30ft" } },
    "Natural Recovery": { class: "druid", type: "utility", cooldown: 0, description: "Once per day during a short rest, you can regain expended spell slots equal to half your druid level (rounded up).", effect: { spell_slot_recovery: "half_level", uses: "1_per_day" } },
    "Land's Stride (Minor)": { class: "druid", type: "movement", cooldown: 0, description: "Moving through nonmagical difficult terrain costs you no extra movement.", effect: { bypass_difficult_terrain: "nonmagical" } },
    "Elemental Fury": { class: "druid", type: "attack", cooldown: 7, description: "Channel elemental energy into your attacks, dealing extra damage of a chosen type (fire, cold, lightning).", effect: { damage: "1d6", type: "elemental_choosable" } },
    "Wrath of the Storm": { class: "druid", type: "attack", cooldown: 8, description: "Call forth a localized storm that deals thunder or lightning damage to enemies in an area.", effect: { damage: "3d6", type: "thunder_or_lightning", area: "15ft_radius" } },
    "Guardian of Nature": { class: "druid", type: "buff", cooldown: 10, description: "Temporarily transform into a larger, more powerful form, gaining increased durability and a bonus to damage.", effect: { size_increase: "large", hp_bonus: "+3d10", damage_bonus: "+2", duration: "1_min" } },
    "Mighty Summoner": { class: "druid", type: "buff", cooldown: 9, description: "Your summoned creatures gain a bonus to their attack rolls and hit points.", effect: { target: "summoned_creatures", bonus_to_attack: "+2", hp_bonus: "20" } },
    "Fey Charm": { class: "druid", type: "control", cooldown: 7, description: "Attempt to charm a humanoid or beast with your innate connection to nature, making them friendly towards you.", effect: { target: "humanoid_or_beast", condition: "charmed", duration: "1_hour" } },
    "Nature's Sanctuary": { class: "ranger", type: "defensive", cooldown: 16, description: "Create a small area of natural tranquility that dampens hostile magic and effects.", effect: { dispel_magic_effect: "area", radius: "10ft", duration: "2_rounds" } }, // Copy from Ranger
    "Eye of the Storm": { class: "druid", type: "utility", cooldown: 12, description: "Create a localized calm zone within a larger storm, granting advantage on saving throws to allies within it.", effect: { area: "10ft_radius", bonus: "advantage_on_saves" } },
    "Venomous Thorns": { class: "druid", type: "attack", cooldown: 8, description: "Conjure a barrage of poisonous thorns that deal piercing and poison damage to a target.", effect: { damage: "2d8", type: "piercing_poison" } },
    "Earthquake (Minor)": { class: "druid", type: "control", cooldown: 10, description: "Cause the ground to shake violently in a small area, potentially knocking creatures prone.", effect: { area: "15ft_radius", condition: "prone" } },
    "One with the Land": { class: "druid", type: "utility", cooldown: 0, description: "You gain a deeper connection to the land, granting perfect recall of local geography and immunity to natural hazards.", effect: { perfect_recall_geography: true, immunity: "natural_hazards" } },
    "Beast Speech (Permanent)": { class: "druid", type: "utility", cooldown: 0, description: "You can permanently understand and speak to all beasts.", effect: { permanent_beast_speech: true } },
    "Timeless Body (Minor)": { class: "druid", type: "buff", cooldown: 0, description: "Your aging slows significantly, and you become immune to magical aging effects.", effect: { slowed_aging: true, immunity: "magical_aging" } },
    "Primal Ward": { class: "druid", type: "defensive", cooldown: 13, description: "Form a defensive barrier of raw primal energy that grants damage resistance to yourself and a chosen ally.", effect: { resistance: "all_physical", target: "self_and_ally", duration: "2_rounds" } },
    "Walker in Dreams": { class: "druid", type: "utility", cooldown: 15, description: "You can enter the dreams of others, influencing them or gaining information.", effect: { dream_travel: true, influence_dreams: true } },
    "Elemental Body": { class: "druid", type: "buff", cooldown: 16, description: "Transform into an elemental form, gaining resistance to elemental damage and an elemental attack.", effect: { form: "elemental", resistance: "elemental_damage", elemental_attack: true, duration: "1_min" } },
    "Nature's Resilience": { class: "ranger", type: "defensive", cooldown: 14, description: "Draw upon the enduring strength of nature to gain significant damage resistance for a short duration.", effect: { resistance: "all_physical", duration: "2_rounds" } }, // Copy from Ranger
    "Unseen Predator (Nature)": { class: "ranger", type: "stealth", cooldown: 16, description: "You become an almost undetectable hunter, gaining true invisibility while in natural terrain.", effect: { condition: "invisible", requires: "natural_terrain" } }, // Copy from Ranger
    "Commune with Nature (Greater)": { class: "ranger", type: "utility", cooldown: 18, description: "Deeply commune with the spirits of nature to gain profound knowledge of your surroundings and any disturbances.", effect: { gain_knowledge: "area_up_to_10_miles" } }, // Copy from Ranger
    "Primal Strike": { class: "ranger", type: "attack", cooldown: 13, description: "Infuse your next attack with raw primal energy, bypassing resistances and dealing bonus damage.", effect: { damage: "3d8", type: "true_damage", ignores: "resistance" } }, // Copy from Ranger
    "Thousand Forms (Minor)": { class: "druid", type: "utility", cooldown: 0, description: "You can cast the alter self spell at will, without expending a spell slot.", effect: { cast_spell_at_will: "alter_self" } },
    "One with the Pack": { class: "druid", type: "buff", cooldown: 18, description: "You can inspire a group of beasts to fight fiercely alongside you, granting them a bonus to attack and damage rolls.", effect: { bonus_to_attack_damage: "+2", target: "beasts", range: "60ft" } },
    "Timeless Body": { class: "druid", type: "buff", cooldown: 0, description: "You cease to age, and you can't be aged magically. You also become immune to disease and poison.", effect: { immunity: ["aging", "disease", "poison"] } },
    "Beast Spells": { class: "druid", type: "buff", cooldown: 0, description: "You can cast many of your druid spells while in beast shape.", effect: { cast_in_beast_shape: true } },
    "Perfected Wild Shape": { class: "druid", type: "buff", cooldown: 0, description: "Your Wild Shape forms gain greatly enhanced abilities and hit points.", effect: { enhanced_wild_shape: true } },
    "Aura of the Guardian": { class: "druid", type: "buff", cooldown: 20, description: "You project an aura of natural protection that grants resistance to non-magical damage to all allies within range.", effect: { resistance: "non_magical_damage", target: "allies", range: "30ft", type: "passive_aura" } },
    "Archdruid (Unlimited Wild Shape)": { class: "druid", type: "buff", cooldown: 0, description: "You can use your Wild Shape an unlimited number of times.", effect: { unlimited_wild_shape: true } },
    "Voice of the Earth": { class: "druid", type: "utility", cooldown: 25, description: "You can speak directly to the very earth, commanding it to shift, open, or close.", effect: { terrain_manipulation: true, create_fissures_or_walls: true } },

    // Monk Abilities
    "Focused Strike": { class: "monk", type: "attack", cooldown: 3, description: "Concentrate your inner ki into a single, powerful unarmed strike that deals bonus damage.", effect: { damage: "1d6", type: "bonus" } },
    "Meditative Calm": { class: "monk", type: "defensive", cooldown: 4, description: "Enter a brief meditative state, granting advantage on your next Wisdom saving throw or concentration check.", effect: { bonus: "advantage_wisdom_save_or_concentration" } },
    "Flurry of Blows": { class: "monk", type: "attack", cooldown: 0, description: "After taking the Attack action, you can spend 1 ki point to make two unarmed strikes as a bonus action.", effect: { extra_attacks: 2, cost: "1_ki_point", type: "bonus_action" } },
    "Patient Defense": { class: "monk", type: "defensive", cooldown: 0, description: "You can spend 1 ki point to take the Dodge action as a bonus action on your turn.", effect: { action: "dodge", cost: "1_ki_point", type: "bonus_action" } },
    "Step of the Wind": { class: "monk", type: "movement", cooldown: 0, description: "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.", effect: { action: "disengage_or_dash", cost: "1_ki_point", jump_distance_doubled: true, type: "bonus_action" } },
    "Way of the Open Hand/Shadow/etc.": { class: "monk", type: "utility", cooldown: 0, description: "Gain special abilities based on your chosen Monastic Tradition.", effect: { variable: "tradition_dependent" } },
    "Combat Flow": { class: "monk", type: "buff", cooldown: 5, description: "Your movements become fluid and unpredictable, making you harder to hit and increasing your speed.", effect: { ac_bonus: "+1", speed_bonus: "+5ft", duration: "1_round" } },
    "Pressure Point": { class: "monk", type: "attack", cooldown: 6, description: "Strike a pressure point on an enemy, dealing damage and potentially debilitating them with a temporary condition.", effect: { damage: "weapon_damage", condition: "disadvantage_on_attacks_or_saves" } },
    "Flowing Water Stance": { class: "monk", type: "defensive", cooldown: 5, description: "Adopt a fluid stance that allows you to deflect incoming attacks and turn them against your foe.", effect: { deflect_attack: true, counter_attack: true } },
    "Explosive Ki Burst": { class: "monk", type: "attack", cooldown: 8, description: "Release a burst of ki energy, dealing force damage to all adjacent enemies.", effect: { damage: "2d6", type: "force", area: "5ft_radius" } },
    "Wholeness of Body": { class: "monk", type: "healing", cooldown: 0, description: "As an action, you can regain hit points equal to three times your monk level.", effect: { healing: "3_times_monk_level", uses: "1_per_day" } },
    "Aura of Control": { class: "monk", type: "control", cooldown: 7, description: "Exert your ki to create a subtle aura of influence, making enemies within it hesitant to act.", effect: { speed_reduction: "10ft, disadvantage_on_opportunity_attacks", area: "10ft_radius" } },
    "Leap of the Clouds": { class: "monk", type: "movement", cooldown: 6, description: "Leap an incredible distance, as if bounding across the air.", effect: { movement: "super_jump", range: "60ft" } },
    "Iron Body Technique": { class: "monk", type: "defensive", cooldown: 9, description: "Harden your body with ki, gaining significant damage resistance for a short time.", effect: { resistance: "bludgeoning_piercing_slashing", duration: "2_rounds" } },
    "Quivering Palm (Lesser)": { class: "monk", type: "attack", cooldown: 12, description: "Deliver a precise strike that can cause a debilitating internal vibration, dealing ongoing damage or making the target vulnerable.", effect: { damage_over_time: "1d8", condition: "vulnerable_to_next_hit" } },
    "Mind Over Matter": { class: "monk", type: "buff", cooldown: 10, description: "Your mental fortitude is such that you can ignore the effects of certain conditions or gain advantage on mental saving throws.", effect: { ignore_conditions: ["charmed", "frightened"], advantage_on_mental_saves: true } },
    "Aspect of the Four Winds": { class: "monk", type: "buff", cooldown: 13, description: "Embody the agility of the wind, gaining increased movement speed, AC, and the ability to move freely without provoking opportunity attacks.", effect: { speed_bonus: "+15ft", ac_bonus: "+2", no_opportunity_attacks: true, duration: "1_min" } },
    "Counter Strike": { class: "monk", type: "reaction", cooldown: 0, description: "When an enemy misses you with an attack, you can use your reaction to make an unarmed strike against them.", effect: { trigger: "enemy_misses_attack", type: "unarmed_strike" } },
    "Touch of Serenity": { class: "monk", type: "control", cooldown: 15, description: "Touch a creature to calm their emotions, potentially ending rage or other violent conditions, or even causing them to become indifferent.", effect: { remove_condition: ["rage", "violent"], condition: "indifferent" } },
    "Ki Infusion": { class: "monk", type: "buff", cooldown: 14, description: "Infuse your physical abilities with raw ki, gaining temporary bonuses to Strength, Dexterity, or Constitution checks.", effect: { bonus_to_physical_checks: "+5", duration: "1_min" } },
    "Diamond Soul (Minor)": { class: "monk", type: "defensive", cooldown: 0, description: "You gain proficiency in all saving throws.", effect: { proficiency_all_saves: true, type: "passive" } },
    "Empty Body (Invisibility)": { class: "monk", type: "stealth", cooldown: 16, description: "You can spend ki points to become invisible for a short duration.", effect: { cost: "4_ki_points", condition: "invisible", duration: "1_round" } },
    "Fist of the North Star": { class: "monk", type: "attack", cooldown: 18, description: "Deliver a series of rapid, devastating strikes that explode with force, dealing massive damage to a single target.", effect: { damage: "10d6", type: "force", target: "single" } },
    "Ki Wave": { class: "monk", type: "attack", cooldown: 17, description: "Unleash a wave of concussive ki that knocks back and damages enemies in a line.", effect: { damage: "4d8", type: "force", push_distance: "20ft", area: "30ft_line" } },
    "Ethereal Step": { class: "monk", type: "movement", cooldown: 15, description: "You can spend ki points to briefly step into the Ethereal Plane, bypassing obstacles and enemies.", effect: { cost: "5_ki_points", movement: "ethereal", duration: "1_round" } },
    "Touch of Death (Lesser)": { class: "monk", type: "attack", cooldown: 20, description: "A highly focused strike that can instantly kill a very weak creature or deal massive necrotic damage.", effect: { instant_kill_threshold: "low_hp", damage: "8d10", type: "necrotic" } },
    "Perfected Self": { class: "monk", type: "buff", cooldown: 25, description: "You attain physical and spiritual perfection, gaining immunity to certain conditions and resistance to all damage for a short period.", effect: { immunity: ["charmed", "frightened", "poisoned"], resistance: "all", duration: "3_rounds" } },
    "Rippling Palm": { class: "monk", type: "control", cooldown: 22, description: "A subtle, delayed strike that causes a target to become incapacitated or stunned after a short delay.", effect: { condition: ["incapacitated", "stunned"], delay: "1_round" } },
    "Ki Annihilation": { class: "monk", type: "attack", cooldown: 25, description: "Focus all your ki into a single, devastating strike that can shatter objects and obliterate enemies.", effect: { damage: "15d6", type: "force", shatter_objects: true } },
    "Body of the Lotus": { class: "monk", type: "healing", cooldown: 20, description: "Enter a deep meditative state that rapidly heals your wounds and purifies your body of ailments.", effect: { rapid_healing: true, remove_conditions: "all_diseases_poisons", duration: "1_round" } },
    "Dragon's Breath (Ki-fueled)": { class: "monk", type: "attack", cooldown: 25, description: "Unleash a cone of elemental energy (chosen type) fueled by your ki, dealing massive damage.", effect: { damage: "10d8", type: "elemental_choosable", area: "30ft_cone" } },
    "Transcendent Step": { class: "monk", type: "movement", cooldown: 28, description: "Instantly teleport yourself and any willing creatures within range to any spot you can see.", effect: { teleport: "group", range: "unlimited_sight" } },
    "Quivering Palm": { class: "monk", type: "attack", cooldown: 30, description: "Deliver a fatal internal strike. At any point in the next number of days equal to your monk level, you can use your action to force the target to make a Constitution saving throw, taking 10d10 necrotic damage on a failed save, or half as much on a successful one. If this damage reduces the target to 0 hit points, it dies.", effect: { damage: "10d10", type: "necrotic", condition: "instant_death_on_failure", duration: "monk_level_days" } },
    "Empty Body (Astral Projection)": { class: "monk", type: "utility", cooldown: 30, description: "You can spend ki points to project your consciousness onto the Astral Plane.", effect: { cost: "8_ki_points", travel: "astral_plane", duration: "1_hour" } },

    // Sorcerer Abilities
    "Innate Magic": { class: "sorcerer", type: "buff", cooldown: 0, description: "Your inherent magical talent grants a small bonus to your spell save DC or attack rolls.", effect: { spell_dc_bonus: "+1", spell_attack_bonus: "+1" } },
    "Bloodline Trait": { class: "sorcerer", type: "utility", cooldown: 0, description: "Gain a unique benefit based on your Sorcerous Origin.", effect: { variable: "origin_dependent" } },
    "Flexible Casting": { class: "sorcerer", type: "utility", cooldown: 0, description: "Convert sorcery points into spell slots, or vice versa.", effect: { convert_points_to_slots: true, convert_slots_to_points: true } },
    "Empower Spell (Lesser)": { class: "sorcerer", type: "buff", cooldown: 0, description: "Spend 1 sorcery point to reroll a number of damage dice up to your Charisma modifier.", effect: { cost: "1_sorcery_point", reroll_damage_dice: "charisma_mod" } },
    "Twinned Spell": { class: "sorcerer", type: "metamagic", cooldown: 0, description: "When you cast a spell that targets only one creature, you can spend sorcery points to target a second creature in range with the same spell.", effect: { cost: "spell_level_in_points", target: "additional_single_creature" } },
    "Quickened Spell": { class: "sorcerer", type: "metamagic", cooldown: 0, description: "When you cast a spell that has a casting time of 1 action, you can spend sorcery points to change the casting time to 1 bonus action for this casting.", effect: { cost: "2_sorcery_points", casting_time: "bonus_action" } },
    "Careful Spell": { class: "sorcerer", type: "metamagic", cooldown: 0, description: "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's effect.", effect: { cost: "1_sorcery_point", allies_auto_succeed_save: true } },
    "Distant Spell": { class: "sorcerer", type: "metamagic", cooldown: 0, description: "When you cast a spell that has a range of 5 feet or greater, you can spend sorcery points to double the range of the spell.", effect: { cost: "1_sorcery_point", double_range: true } },
    "Arcane Burst": { class: "sorcerer", type: "attack", cooldown: 5, description: "Unleash a focused burst of raw arcane energy, dealing force damage to a single target.", effect: { damage: "3d8", type: "force" } },
    "Elemental Affinity": { class: "sorcerer", type: "buff", cooldown: 0, description: "When you cast a spell that deals damage of your chosen elemental type, you can add your Charisma modifier to one damage roll of that spell.", effect: { damage_bonus: "charisma_mod", type: "chosen_elemental_damage" } },
    "Unleash Power": { class: "sorcerer", type: "buff", cooldown: 8, description: "Channel your inherent magical might, increasing the damage and effectiveness of your next spell.", effect: { spell_damage_bonus: "+2d6", spell_dc_bonus: "+1", duration: "1_spell" } },
    "Sorcerous Restoration (Minor)": { class: "sorcerer", type: "utility", cooldown: 0, description: "During a short rest, you can regain a small number of expended sorcery points.", effect: { regain_sorcery_points: "half_sorcerer_level" } },
    "Draconic Resilience / Wild Magic Bend Luck": { class: "sorcerer", type: "utility", cooldown: 0, description: "Gain special abilities based on your Sorcerous Origin, such as draconic scales for defense or the ability to influence fate.", effect: { variable: "origin_dependent_trait" } },
    "Elemental Control": { class: "sorcerer", type: "utility", cooldown: 7, description: "Manipulate elemental forces, allowing you to create small elemental effects or alter existing ones.", effect: { create_elemental_effects: "minor", alter_existing_effects: true } },
    "Arcane Fury": { class: "sorcerer", type: "buff", cooldown: 10, description: "Enter a state of uncontrolled arcane power, gaining significantly increased spell damage but also risking wild magic surges.", effect: { spell_damage_bonus: "+3d6", risk_wild_magic: true, duration: "3_rounds" } },
    "Reality Warp (Minor)": { class: "mage", type: "utility", cooldown: 30, description: "Minorly bend reality, allowing for small, localized alterations to the environment.", effect: { alter_terrain: "small_area" } }, // Copy from Mage
    "Spell Bombardment": { class: "sorcerer", type: "buff", cooldown: 0, description: "When you deal damage with a spell, you can expend 2 sorcery points to deal extra damage.", effect: { cost: "2_sorcery_points", bonus_damage: "2d6", trigger: "spell_damage" } },
    "Arcane Shield": { class: "sorcerer", type: "defensive", cooldown: 8, description: "Manifest a shield of raw arcane energy that provides a strong defense against incoming attacks and spells.", effect: { ac_bonus: "+4", resistance: "all_damage", duration: "1_round" } },
    "Master of Magic (Innate)": { class: "sorcerer", type: "buff", cooldown: 12, description: "Your innate mastery of magic allows you to cast a single spell without expending a spell slot once per long rest.", effect: { cast_spell_free: "1_per_long_rest" } },
    "Overchannel (Risky)": { class: "sorcerer", type: "buff", cooldown: 15, description: "Push your magic to its absolute limits, maximizing the damage of a single spell at the cost of taking psychic damage.", effect: { maximize_spell_damage: true, self_damage: "3d10", type: "psychic" } },
    "Heightened Spell": { class: "sorcerer", type: "metamagic", cooldown: 0, description: "When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend sorcery points to give one target disadvantage on its first saving throw.", effect: { cost: "3_sorcery_points", target: "single", disadvantage_on_save: true } },
    "Subtle Spell": { class: "sorcerer", type: "metamagic", cooldown: 0, description: "When you cast a spell, you can spend sorcery points to cast it without any somatic or verbal components.", effect: { cost: "1_sorcery_point", no_components: "somatic_verbal" } },
    "Empowered Spell": { class: "sorcerer", type: "metamagic", cooldown: 0, description: "When you roll damage for a spell, you can spend sorcery points to reroll a number of the damage dice up to your Charisma modifier.", effect: { cost: "1_sorcery_point", reroll_damage_dice: "charisma_mod" } },
    "Arcane Infusion": { class: "mage", type: "buff", cooldown: 8, description: "Infuse your very being with magic, gaining increased spell slots or a burst of arcane energy for a few turns.", effect: { spell_slot_recovery: "1_level_5", duration: "instant" } }, // Copy from Mage
    "Spell Siphon": { class: "sorcerer", type: "utility", cooldown: 13, description: "Absorb a portion of magical energy from a nearby spellcaster or magical effect, regaining sorcery points.", effect: { regain_sorcery_points: "variable", from: "spellcaster_or_effect" } },
    "Unravel Magic": { class: "mage", type: "utility", cooldown: 20, description: "Attempt to unravel the magic of a spell or magical effect, dispelling it or weakening it.", effect: { dispel_magic_level: 9, type: "dispel" } }, // Copy from Mage
    "Chaotic Surge": { class: "sorcerer", type: "buff", cooldown: 14, description: "Embrace the unpredictable nature of wild magic, gaining a massive but random buff to your abilities.", effect: { random_powerful_buff: true, duration: "1_round" } },
    "Planar Jaunt": { class: "summoner", type: "movement", cooldown: 15, description: "Teleport yourself and your eidolon a significant distance.", effect: { teleport: true, range: "60ft", target: "self_and_eidolon" } }, // Copied from summoner and edited
    "Aura of Power": { class: "sorcerer", type: "buff", cooldown: 16, description: "You emanate an aura of raw magical power that empowers all spells cast by you and allies within range.", effect: { bonus_to_spell_damage: "+1d6", bonus_to_spell_dc: "+1", range: "30ft", type: "passive_aura" } },
    "Sorcerous Restoration": { class: "sorcerer", type: "utility", cooldown: 0, description: "During a short rest, you regain all of your expended sorcery points.", effect: { regain_all_sorcery_points: true, uses: "1_per_day" } },
    "Reality Manipulation": { class: "psychic", type: "utility", cooldown: 30, description: "Minorly bend reality to your will, causing small, localized alterations to the environment or events.", effect: { alter_terrain: "small_area" } }, // Copy from Psychic
    "Nexus of Power": { class: "mage", type: "buff", cooldown: 30, description: "Become a temporary nexus of arcane energy, empowering all your spells to their maximum potential.", effect: { maximize_spell_damage: true, duration: "1_round" } }, // Copy from Mage
    "Volatile Casting": { class: "sorcerer", type: "buff", cooldown: 20, description: "Your spells become incredibly volatile, dealing maximum damage but also having a chance to backlash and harm you.", effect: { maximize_spell_damage: true, backlash_chance: "10%", self_damage: "2d6", duration: "1_round" } },
    "Seeking Spell": { class: "sorcerer", type: "metamagic", cooldown: 0, description: "When you cast a spell that requires a creature to make a saving throw and it fails, you can spend sorcery points to make it reroll and take the lower result.", effect: { cost: "1_sorcery_point", force_reroll_lower: true } },
    "Arcane Apotheosis": { class: "sorcerer", type: "buff", cooldown: 30, description: "Temporarily ascend to a state of pure arcane being, gaining flight, immunity to all magical damage, and the ability to cast any spell without expending spell slots.", effect: { flight: true, immunity: "magical_damage", free_spellcasting: true, duration: "1_round" } },

    // Warlock Abilities
    "Patron's Gift": { class: "warlock", type: "utility", cooldown: 0, description: "A minor boon granted by your patron, specific to their nature.", effect: { variable: "patron_dependent_minor_boon" } },
    "Eldritch Grasp": { class: "warlock", type: "attack", cooldown: 3, description: "Extend a spectral hand to grapple a creature at range.", effect: { condition: "grappled", range: "10ft" } },
    "Agonizing Blast": { class: "warlock", type: "invocation", cooldown: 0, description: "When you cast Eldritch Blast, add your Charisma modifier to the damage it deals on a hit.", effect: { bonus_damage: "charisma_mod", spell: "eldritch_blast" } },
    "Armor of Shadows": { class: "warlock", type: "invocation", cooldown: 0, description: "You can cast Mage Armor on yourself at will, without expending a spell slot or material components.", effect: { cast_spell_at_will: "mage_armor" } },
    "Beguiling Influence": { class: "warlock", type: "invocation", cooldown: 0, description: "You gain proficiency in the Deception and Persuasion skills.", effect: { proficiency: ["deception", "persuasion"] } },
    "Pact Weapon": { class: "warlock", type: "buff", cooldown: 0, description: "As a bonus action, you can conjure a pact weapon in your empty hand. You are proficient with it and it counts as magical.", effect: { summon_weapon: true, type: "magical", proficiency: true } },
    "Find Familiar (Special)": { class: "warlock", type: "summon", cooldown: 0, description: "You can cast the find familiar spell as a ritual. The familiar is a celestial, fey, or fiend instead of a beast.", effect: { summon_familiar: "celestial_fey_fiend", type: "ritual" } },
    "Book of Shadows": { class: "warlock", type: "utility", cooldown: 0, description: "Your Pact of the Tome grimoire magically gains three cantrips from any class's spell list. You learn more as you level up.", effect: { gain_cantrips: "any_class_list" } },
    "Dark One's Own Luck (Lesser)": { class: "warlock", type: "buff", cooldown: 6, description: "When you make an ability check or a saving throw, you can add 1d10 to your roll. You can do so after you see the roll's total but before the GM tells you whether you succeed or fail.", effect: { bonus_to_roll: "1d10", uses: "1_per_short_rest" } },
    "Entropic Ward": { class: "warlock", type: "defensive", cooldown: 5, description: "When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage.", effect: { impose_disadvantage_on_attack: true, gain_advantage_on_next_attack: true, type: "reaction" } },
    "Thirsting Blade": { class: "warlock", type: "invocation", cooldown: 0, description: "You can attack twice, instead of once, whenever you take the Attack action on your turn.", effect: { extra_attack: true, type: "pact_of_blade" } },
    "Voice of the Chain Master": { class: "warlock", type: "invocation", cooldown: 0, description: "You can communicate telepathically with your familiar and perceive through its senses as long as you are on the same plane of existence.", effect: { telepathy_familiar: true, shared_senses_familiar: true } },
    "Book of Ancient Secrets": { class: "warlock", type: "invocation", cooldown: 0, description: "You can now inscribe ritual spells into your Book of Shadows, regardless of class, allowing you to cast them as rituals.", effect: { learn_rituals: "any_class" } },
    "Dark One's Blessing": { class: "warlock", type: "healing", cooldown: 0, description: "When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level.", effect: { temp_hp: "charisma_mod_plus_warlock_level", trigger: "kill_hostile_creature" } },
    "Misty Escape": { class: "warlock", type: "movement", cooldown: 8, description: "When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see.", effect: { trigger: "take_damage", condition: "invisible", teleport: "60ft", type: "reaction" } },
    "Relentless Hex": { class: "warlock", type: "invocation", cooldown: 0, description: "As a bonus action, you can teleport up to 30 feet to an unoccupied space you can see within 5 feet of a creature cursed by your Hex spell.", effect: { teleport: "30ft", trigger: "hexed_creature", type: "bonus_action" } },
    "Ghostly Gaze": { class: "warlock", type: "invocation", cooldown: 0, description: "As an action, you can see through solid objects out to 30 feet for 1 minute. This vision can penetrate 1 foot of stone, 1 inch of common metal, or 3 feet of wood or dirt.", effect: { see_through_objects: "30ft", duration: "1_min" } },
    "Patron's Shield": { class: "warlock", type: "defensive", cooldown: 10, description: "Your patron grants you a spectral shield that absorbs a significant amount of damage from a single attack.", effect: { damage_reduction: "4d10", duration: "1_attack" } },
    "Dark Foresight": { class: "warlock", type: "utility", cooldown: 9, description: "Glimpse the future, giving you advantage on your next attack roll, ability check, or saving throw.", effect: { bonus: "advantage_on_next_roll" } },
    "Minions of Chaos": { class: "warlock", type: "invocation", cooldown: 0, description: "You can cast conjure elemental once using a warlock spell slot. You can't do so again until you finish a long rest.", effect: { cast_spell_once: "conjure_elemental" } },
    "Otherworldly Leap": { class: "warlock", type: "invocation", cooldown: 0, description: "You can cast Jump at will, without expending a spell slot or material components.", effect: { cast_spell_at_will: "jump" } },
    "Fiendish Resilience": { class: "warlock", type: "buff", cooldown: 0, description: "You can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one.", effect: { resistance: "choosable_damage_type", duration: "until_next_rest" } },
    "Thought Shield": { class: "psychic", type: "defensive", cooldown: 6, description: "A more robust mental shield that provides stronger resistance and a chance to reflect minor psychic attacks.", effect: { resistance: "psychic_and_mental", reflect_minor_attacks: true } }, // Copy from Psychic
    "Create Thrall (Lesser)": { class: "warlock", type: "control", cooldown: 15, description: "Attempt to magically enslave a weak creature, making it your thrall.", effect: { enslave_creature: "weak", duration: "24_hours" } },
    "Soul Cage": { class: "warlock", type: "utility", cooldown: 20, description: "You can use your action to cast the Soul Cage spell without expending a spell slot.", effect: { cast_spell_free: "soul_cage", uses: "1_per_long_rest" } },
    "Lifedrinker": { class: "warlock", type: "invocation", cooldown: 0, description: "When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier.", effect: { bonus_damage: "charisma_mod", type: "necrotic", weapon: "pact_weapon" } },
    "Witch Sight": { class: "warlock", type: "invocation", cooldown: 0, description: "You can see the true form of any creature transformed by magic, or into an illusion, within 30 feet of you if the creature isn't behind total cover.", effect: { true_sight_limited: true, range: "30ft" } },
    "Forcecage": { class: "mage", type: "control", cooldown: 20, description: "Create an invisible, immobile, impenetrable barrier of force around a target area or creature.", effect: { condition: "imprisoned", area: "20ft_cube", duration: "1_hour" } }, // Copied from mage, since it's also a warlock spell
    "Plane Shift": { class: "mage", type: "utility", cooldown: 20, description: "As a warlock, you can cast the Plane Shift spell once, without expending a spell slot. You can't do so again until you finish a long rest.", effect: { cast_spell_once: "plane_shift" } }, // Copied from mage and edited
    "Visions of Distant Realms": { class: "warlock", type: "invocation", cooldown: 0, description: "You can cast Scrying without expending a spell slot.", effect: { cast_spell_free: "scrying", uses: "1_per_long_rest" } },
    "Hurl Through Hell": { class: "warlock", type: "attack", cooldown: 25, description: "When you hit a creature with an attack, you can banish it to a random layer of the Lower Planes until the end of your next turn.", effect: { banish_to_hell: true, duration: "1_round" } },
    "Create Thrall": { class: "warlock", type: "control", cooldown: 20, description: "You can create a permanent thrall from a humanoid you have charmed, gaining total control over them.", effect: { permanent_thrall: true, target: "humanoid" } },
    "Dark Delirium": { class: "warlock", type: "control", cooldown: 25, description: "Force a creature into a nightmarish delusion, causing them to act irrationally or be incapacitated.", effect: { condition: "delusional_or_incapacitated", duration: "1_min" } },
    "Soul Mirror": { class: "warlock", type: "utility", cooldown: 28, description: "You can create a temporary copy of a creature's soul, which can be interrogated for information or used to influence the original.", effect: { create_soul_copy: true, interrogate_or_influence: true } },
    "True Polymorph": { class: "mage", type: "buff", cooldown: 30, description: "Transform yourself or a willing creature you can see into any other creature, or transform an object into any other object, permanently.", effect: { cast_spell_free: "true_polymorph" } }, // Copied from mage
    "Foresight": { class: "mage", type: "buff", cooldown: 30, description: "Grant yourself or a willing creature incredibly accurate insight into the future, giving them advantage on attack rolls, ability checks, and saving throws.", effect: { cast_spell_free: "foresight" } }, // Copied from mage
    "Wish (Patron's Whim)": { class: "mage", type: "utility", cooldown: 30, description: "Your patron grants you the ability to cast the wish spell, but with a potential price or twist.", effect: { cast_spell_free: "wish", limitations: "patron's_whim" } }, // Copied from mage and edited

    // Barbarian Abilities
    "Primal Scream": { class: "barbarian", type: "buff", cooldown: 3, description: "Let out a guttural scream that inspires fear in enemies and empowers your allies.", effect: { condition: "frightened", target: "enemies", bonus_to_attack: "+1", target: "allies" } },
    "Power Attack": { class: "barbarian", type: "attack", cooldown: 0, description: "Before making a melee attack with a heavy weapon, you can choose to take a penalty to the attack roll to gain a bonus to damage.", effect: { attack_penalty: "-5", damage_bonus: "+10", weapon: "heavy" } },
    "Furious Charge": { class: "barbarian", type: "movement", cooldown: 4, description: "Dash towards an enemy and make a powerful attack, potentially knocking them prone.", effect: { movement: "dash", attack_bonus_damage: "1d6", condition: "prone" } },
    "Intimidating Presence": { class: "barbarian", type: "control", cooldown: 5, description: "Glower menacingly at a creature, attempting to frighten them with your raw ferocity.", effect: { target: "single", condition: "frightened", duration: "1_round" } },
    "Path Feature (e.g., Totem Spirit)": { class: "barbarian", type: "utility", cooldown: 0, description: "Gain special abilities based on your chosen Primal Path.", effect: { variable: "path_dependent" } },
    "Mighty Swing": { class: "barbarian", type: "attack", cooldown: 6, description: "Unleash a wide, powerful swing that strikes all enemies in a short arc.", effect: { damage: "weapon_damage", type: "aoe", range: "10ft_arc" } },
    "Ground Slam": { class: "barbarian", type: "control", cooldown: 7, description: "Slam your weapon or fists into the ground, creating a localized tremor that knocks enemies prone.", effect: { area: "10ft_radius", condition: "prone" } },
    "Fearsome Yell": { class: "barbarian", type: "control", cooldown: 6, description: "A more potent intimidating yell that affects a wider area and has a longer duration.", effect: { target: "area", condition: "frightened", duration: "2_rounds" } },
    "Wild Strikes": { class: "barbarian", type: "buff", cooldown: 8, description: "Your attacks become frenzied and wild, increasing your chance to critically hit.", effect: { crit_range_increase: 1, duration: "2_rounds" } },
    "Unstoppable Momentum": { class: "barbarian", type: "buff", cooldown: 9, description: "While raging, you are immune to being restrained or grappled.", effect: { immunity: ["restrained", "grappled"], requires: "rage_active" } },
    "Aspect of the Beast": { class: "barbarian", type: "buff", cooldown: 10, description: "Channel the essence of a powerful animal (bear, wolf, eagle, etc.), gaining a specific enhancement.", effect: { variable: "choosable_beast_aspect" } },
    "Earth Shaker": { class: "barbarian", type: "control", cooldown: 12, description: "Violently strike the ground, creating a powerful tremor that deals damage and knocks multiple enemies prone.", effect: { damage: "3d8", type: "bludgeoning", condition: "prone", area: "20ft_radius" } },
    "Hunter's Senses": { class: "barbarian", type: "utility", cooldown: 0, description: "Your senses become incredibly sharp, granting you advantage on Perception and Survival checks that rely on smell or hearing.", effect: { bonus: "advantage_smell_hear_checks" } },
    "Ambush Breaker": { class: "barbarian", type: "defensive", cooldown: 0, description: "You cannot be surprised while you are conscious.", effect: { immunity: "surprised_condition" } },
    "Savage Roar": { class: "barbarian", type: "buff", cooldown: 13, description: "A thunderous roar that grants temporary hit points to yourself and allies and makes enemies hesitant to attack.", effect: { temp_hp: "2d10", target: "self_and_allies", condition: "disadvantage_on_attacks_against_you", duration: "2_rounds" } },
    "Bone Breaker": { class: "barbarian", type: "attack", cooldown: 11, description: "A focused strike that deals extra damage and can shatter an enemy's limb or bone, imposing a severe penalty.", effect: { damage: "3d10", condition: "severe_penalty_limb", duration: "1_min" } },
    "Rage Damage +3": { class: "barbarian", type: "buff", cooldown: 0, description: "When you rage, you deal an extra 3 damage on your melee weapon attacks.", effect: { bonus_damage: "+3", requires: "rage" } },
    "Overwhelm": { class: "barbarian", type: "attack", cooldown: 14, description: "Use your brute force to overwhelm an opponent, allowing you to make an extra attack against them after a successful grapple.", effect: { extra_attack_on_grapple: true } },
    "Spirit Walker": { class: "ranger", type: "movement", cooldown: 15, description: "Temporarily become incorporeal, allowing you to move through solid objects and creatures.", effect: { movement: "incorporeal", duration: "1_round" } }, // Copy from Ranger
    "Terrifying Rage": { class: "barbarian", type: "buff", cooldown: 0, description: "While raging, creatures that start their turn within 10 feet of you and are hostile to you must make a Wisdom saving throw or become frightened.", effect: { condition: "frightened", range: "10ft", requires: "rage" } },
    "Undying Fury": { class: "barbarian", type: "buff", cooldown: 16, description: "Your rage becomes so potent that you are resistant to all damage for the duration, even beyond what normal rage provides.", effect: { resistance: "all_damage", duration: "2_rounds" } },
    "Defy Death": { class: "barbarian", type: "defensive", cooldown: 18, description: "When reduced to 0 hit points while raging, you can immediately make a saving throw to drop to 1 hit point instead.", effect: { trigger: "reduced_to_0_hp_while_raging", hp_to: 1, type: "save" } },
    "Wrecking Ball": { class: "barbarian", type: "attack", cooldown: 15, description: "You can move through creatures as if they were difficult terrain. If you end your turn in a creature's space, you are shunted to the nearest unoccupied space, and the creature takes 3d8 bludgeoning damage.", effect: { movement: "through_creatures", damage: "3d8", type: "bludgeoning" } },
    "Primal Strength": { class: "barbarian", type: "buff", cooldown: 0, description: "Your Strength score increases by 2, and your maximum for this score increases by 2.", effect: { stat_increase: "strength_+2" } },
    "Devastating Blow": { class: "barbarian", type: "attack", cooldown: 17, description: "A single, incredibly powerful strike that deals immense damage and can shatter defenses, ignoring a creature's damage resistance.", effect: { damage: "6d12", type: "true_damage", ignores: "resistance" } },
    "Shatter Defenses": { class: "barbarian", type: "control", cooldown: 16, description: "Your overwhelming assault can leave enemies vulnerable, reducing their AC and imposing disadvantage on their saving throws.", effect: { ac_reduction: "-4", disadvantage_on_saves: true, duration: "1_round" } },
    "Retaliation": { class: "warrior", type: "reaction", cooldown: 0, description: "When hit by a melee attack, make an immediate counter-attack.", effect: { trigger: "melee_hit", type: "attack" } }, // Copy from Warrior
    "Raging Storm": { class: "barbarian", type: "buff", cooldown: 20, description: "Your rage unleashes a primal storm around you, dealing constant elemental damage (thunder, lightning, cold) to nearby enemies.", effect: { damage_over_time: "2d6_elemental", area: "10ft_radius", duration: "rage_duration" } },
    "Unending Rage": { class: "barbarian", type: "buff", cooldown: 0, description: "Your rage has no duration limit and doesn't end early unless you fall unconscious or you choose to end it.", effect: { endless_rage: true } },
    "Focused Fury": { class: "barbarian", type: "buff", cooldown: 18, description: "Channel your rage into a focused attack, granting bonus critical hit damage and a higher chance to hit.", effect: { crit_damage_bonus: "+2d6", bonus_to_hit: "+2", duration: "1_attack" } },
    "Titan's Grip": { class: "barbarian", type: "buff", cooldown: 0, description: "You gain the ability to wield two-handed weapons in one hand.", effect: { wield_two_handed_one_hand: true } },
    "Earthshattering Roar": { class: "barbarian", type: "attack", cooldown: 25, description: "Unleash a cataclysmic roar that deals massive thunder damage, knocks all creatures prone, and creates difficult terrain in a vast area.", effect: { damage: "10d8", type: "thunder", condition: "prone", terrain_effect: "difficult_terrain", area: "60ft_radius" } },
    "Avatar of War": { class: "warrior", type: "buff", cooldown: 20, description: "Temporarily transform into a living embodiment of war, gaining massive strength and combat prowess.", effect: { strength_bonus: "+4", damage_bonus: "+4", resistance: "all_physical", duration: "1_min" } }, // Copy from Warrior
    "Living Avalanche": { class: "barbarian", type: "movement", cooldown: 28, description: "You become an unstoppable force, moving through enemies and obstacles with ease, dealing damage and knocking them aside.", effect: { movement: "unstoppable_charge", damage: "4d10", condition: "prone", bypass_obstacles: true } },

    // Brawler Abilities
    "Sucker Punch": { class: "brawler", type: "attack", cooldown: 3, description: "Deliver a quick, unexpected punch that deals bonus damage and can stun a target for a moment.", effect: { damage: "1d6", type: "bonus", condition: "stunned_brief" } },
    "Brace Up": { class: "brawler", type: "defensive", cooldown: 4, description: "Steel yourself against incoming attacks, gaining temporary hit points and resistance to bludgeoning damage.", effect: { temp_hp: "1d8", resistance: "bludgeoning", duration: "1_round" } },
    "Pocket Sand": { class: "brawler", type: "control", cooldown: 3, description: "Throw a handful of sand into an enemy's eyes, temporarily blinding them.", effect: { target: "single", condition: "blinded", duration: "1_round" } },
    "Low Blow": { class: "brawler", type: "attack", cooldown: 4, description: "Aim a punch at a vulnerable spot, dealing extra damage and potentially imposing disadvantage on the target's next attack.", effect: { damage: "1d6", type: "bonus", condition: "disadvantage_on_next_attack" } },
    "Headbutt": { class: "brawler", type: "attack", cooldown: 5, description: "Deliver a forceful headbutt that deals damage and can stun an enemy.", effect: { damage: "1d8", type: "bludgeoning", condition: "stunned" } },
    "Style Feature (e.g., Strong-Arm Grappler)": { class: "brawler", type: "utility", cooldown: 0, description: "Gain special abilities based on your chosen Brawling Style.", effect: { variable: "style_dependent" } },
    "Get Back Up": { class: "brawler", type: "healing", cooldown: 6, description: "Shake off damage and quickly regain some hit points, allowing you to return to the fight.", effect: { healing: "2d6" } },
    "Gut Punch": { class: "brawler", type: "attack", cooldown: 5, description: "A forceful punch to the stomach that deals damage and can cause the target to lose their action.", effect: { damage: "1d8", condition: "lose_action_next_turn" } },
    "Bob and Weave": { class: "brawler", type: "defensive", cooldown: 4, description: "Fluidly dodge and weave to avoid incoming attacks, gaining advantage on Dexterity saving throws and a bonus to AC.", effect: { bonus: "advantage_dex_saves", ac_bonus: "+1" } },
    "Haymaker": { class: "brawler", type: "attack", cooldown: 8, description: "Wind up for a massive, slow punch that deals devastating damage if it hits.", effect: { damage: "3d10", type: "bludgeoning", attack_penalty: "-2" } },
    "Power Through": { class: "brawler", type: "buff", cooldown: 7, description: "Push past pain and exhaustion, gaining temporary immunity to the grappled and restrained conditions and bonus damage.", effect: { immunity: ["grappled", "restrained"], damage_bonus: "+1d4", duration: "1_round" } },
    "Improvised Weapon Master": { class: "brawler", type: "buff", cooldown: 0, description: "You are proficient with any improvised weapon, and they deal increased damage.", effect: { proficiency: "improvised_weapons", damage_increase: "1d4" } },
    "Set Up": { class: "brawler", type: "control", cooldown: 6, description: "Create an opening for an ally by feinting or distracting a foe, granting your ally advantage on their next attack.", effect: { target: "ally", advantage_on_next_attack: true } },
    "Shoulder Check": { class: "brawler", type: "attack", cooldown: 5, description: "Charge into an enemy with your shoulder, dealing bludgeoning damage and pushing them back.", effect: { damage: "1d6", type: "bludgeoning", push_distance: "10ft" } },
    "Ignore Pain": { class: "brawler", type: "defensive", cooldown: 8, description: "Temporarily suppress your pain receptors, gaining resistance to all physical damage for a short duration.", effect: { resistance: "bludgeoning_piercing_slashing", duration: "1_round" } },
    "Combination Strike": { class: "brawler", type: "attack", cooldown: 7, description: "Deliver a rapid series of punches and kicks to a single target, dealing multiple hits.", effect: { damage: "2d4", num_attacks: 3 } },
    "Mean Mug": { class: "brawler", type: "control", cooldown: 6, description: "Fix an enemy with a terrifying glare, imposing disadvantage on their attack rolls against you.", effect: { target: "single", disadvantage_on_attack_rolls: true, duration: "1_round" } },
    "Choke Hold": { class: "brawler", type: "control", cooldown: 9, description: "Attempt to put a creature in a choke hold, grappling them and potentially rendering them unconscious.", effect: { condition: "grappled_and_unconscious", duration: "concentration" } },
    "Disarm": { class: "brawler", type: "attack", cooldown: 5, description: "A precise strike aimed at an opponent's weapon, forcing them to drop it.", effect: { damage: "weapon_damage", condition: "disarmed" } },
    "Ring the Bell": { class: "brawler", type: "attack", cooldown: 10, description: "Deliver a devastating blow to the head that deals bonus damage and can stun the target.", effect: { damage: "2d8", type: "bludgeoning", condition: "stunned", duration: "1_round" } },
    "No Holds Barred": { class: "brawler", type: "buff", cooldown: 11, description: "Temporarily ignore penalties for grappling or fighting dirty, allowing for more powerful and brutal maneuvers.", effect: { ignore_grapple_penalties: true, bonus_to_dirty_fighting: true, duration: "2_rounds" } },
    "Rabble Rouser": { class: "brawler", type: "control", cooldown: 8, description: "Incite a crowd into a riot or frenzy, causing a distraction or gaining temporary allies.", effect: { incite_riot: true, gain_temp_allies: true } },
    "One-Two Punch": { class: "brawler", type: "attack", cooldown: 6, description: "A quick, seamless combination of two unarmed strikes against a single target.", effect: { damage: "1d8", num_attacks: 2 } },
    "Turn the Tables": { class: "brawler", type: "reaction", cooldown: 0, description: "When an enemy attempts to grapple or shove you, you can use your reaction to reverse the effect on them.", effect: { trigger: "grapple_shove_attempt", reverse_effect: true, type: "reaction" } },
    "Unflinching": { class: "brawler", type: "defensive", cooldown: 0, description: "You have advantage on saving throws against being Frightened or Charmed.", effect: { bonus: "advantage_frightened_charmed_saves" } },
    "Second Wind (Brawler version)": { class: "brawler", type: "healing", cooldown: 0, description: "As a bonus action, you can regain hit points equal to 1d10 + your brawler level.", effect: { healing: "1d10_plus_brawler_level", uses: "1_per_rest" } },
    "The Best Defense...": { class: "brawler", type: "buff", cooldown: 12, description: "After taking damage, your next unarmed strike deals bonus damage.", effect: { trigger: "take_damage", bonus_damage_next_attack: "2d6" } },
    "Finishing Move Setup": { class: "brawler", type: "control", cooldown: 14, description: "Create a crucial opening for your next attack, making it incredibly vulnerable to a finishing move.", effect: { vulnerability_to_next_attack: true, target: "single" } },
    "Master of the Pit": { class: "brawler", type: "buff", cooldown: 0, description: "You are a master of arena combat, gaining advantage on checks related to combat maneuvers and intimidating opponents.", effect: { bonus: "advantage_combat_maneuvers_intimidation" } },
    "Come at Me!": { class: "brawler", type: "control", cooldown: 15, description: "Provoke all enemies within range, forcing them to focus their attacks on you.", effect: { condition: "taunted", range: "30ft", duration: "1_round" } },
    "Spiteful Retort": { class: "brawler", type: "reaction", cooldown: 0, description: "When an enemy damages you, you can immediately make a powerful unarmed counter-attack that deals bonus damage.", effect: { trigger: "take_damage", damage: "2d8", type: "unarmed_strike", type: "reaction" } },
    "Center of Attention": { class: "brawler", type: "buff", cooldown: 16, description: "Your presence in a fight commands attention, making it difficult for enemies to ignore you while you're conscious.", effect: { enemies_focus_you: true } },
    "Bone-shattering Blow": { class: "brawler", type: "attack", cooldown: 18, description: "A devastating strike that can break bones, causing extreme pain and imposing severe movement and attack penalties on the target.", effect: { damage: "4d10", type: "bludgeoning", condition: "crippled", duration: "1_min" } },
    "True Grit": { class: "brawler", type: "defensive", cooldown: 0, description: "Your grit allows you to succeed on a failed saving throw once per short or long rest.", effect: { reroll_failed_save: true, uses: "1_per_rest" } },
    "Lights Out": { class: "brawler", type: "attack", cooldown: 20, description: "A knockout blow that deals massive damage and, if successful, instantly renders the target unconscious.", effect: { damage: "6d12", type: "bludgeoning", condition: "unconscious" } },
    "Last Man Standing": { class: "brawler", type: "buff", cooldown: 25, description: "When all allies are fallen or incapacitated around you, you gain significant bonuses to your attacks, damage, and defenses.", effect: { bonus_to_all_rolls: "+3", resistance: "all", duration: "until_combat_ends" } },

    // Assassin Abilities
    "Target Assessment": { class: "assassin", type: "utility", cooldown: 3, description: "Spend time observing a target to learn their weaknesses and routines, granting bonus damage on your first attack against them.", effect: { bonus_damage_on_first_hit: "1d8", requires: "observation" } },
    "Shadow Arts (Minor)": { class: "assassin", type: "utility", cooldown: 4, description: "Utilize minor shadow magic to enhance stealth or create distractions.", effect: { bonus_to_stealth: "+2", create_distraction: "minor" } },
    "Swift Action (Hide/Dash)": { class: "assassin", type: "movement", cooldown: 0, description: "You can take the Hide or Dash action as a bonus action on your turn.", effect: { action: ["hide", "dash"], type: "bonus_action" } },
    "Calculated Approach": { class: "assassin", type: "utility", cooldown: 5, description: "Plan your movements with precision, gaining advantage on your next Stealth or Sleight of Hand check.", effect: { bonus: "advantage_stealth_or_sleight_of_hand" } },
    "Death from the Shadows": { class: "assassin", type: "attack", cooldown: 6, description: "Your attacks from stealth are incredibly potent, dealing additional damage and having a higher chance to critically hit.", effect: { bonus_damage_from_stealth: "2d6", crit_range_increase: 1 } },
    "Infiltration Expertise": { class: "assassin", type: "utility", cooldown: 0, description: "You gain proficiency with disguise kits and forgery kits, and have advantage on checks made to create false identities or impersonate others.", effect: { proficiency: ["disguise_kit", "forgery_kit"], bonus: "advantage_false_identity" } },
    "Poisoner's Touch": { class: "assassin", type: "buff", cooldown: 4, description: "Apply a powerful poison to your weapon as a bonus action, dealing significant poison damage on your next hit.", effect: { damage: "2d6", type: "poison", type: "bonus_action" } },
    "Create Opening": { class: "assassin", type: "control", cooldown: 5, description: "Feint or maneuver to create a momentary opening in an enemy's defense, giving you or an ally advantage on the next attack against them.", effect: { advantage_on_next_attack: true, target: "self_or_ally" } },
    "Vanish (Brief Invisibility)": { class: "assassin", type: "stealth", cooldown: 7, description: "You can use your bonus action to magically become invisible until the start of your next turn or until you attack or cast a spell.", effect: { condition: "invisible", duration: "1_round_or_until_attack", type: "bonus_action" } },
    "Anatomical Insight": { class: "assassin", type: "utility", cooldown: 0, description: "Your knowledge of anatomy allows you to target vital points, increasing your critical hit damage.", effect: { crit_damage_bonus: "+1d6" } },
    "Impersonation": { class: "assassin", type: "utility", cooldown: 0, description: "You can flawlessly mimic the speech, mannerisms, and habits of a person you have observed for a short time.", effect: { perfect_mimicry: true, requires: "observation" } },
    "False Identity": { class: "assassin", type: "utility", cooldown: 0, description: "You can magically adopt a new false identity, including clothing, equipment, and even simple documents.", effect: { create_false_identity: true } },
    "Ghostly Presence": { class: "assassin", type: "stealth", cooldown: 8, description: "You can move silently and leave no trace, making it nearly impossible for non-magical means to track you.", effect: { silent_movement: true, untraceable: true } },
    "Contingency Plan": { class: "assassin", type: "utility", cooldown: 9, description: "You always have a backup plan, allowing you to re-roll a failed ability check or saving throw once per short rest.", effect: { reroll_failed_roll: true, uses: "1_per_short_rest" } },
    "Exploit Weakness": { class: "assassin", type: "attack", cooldown: 7, description: "After successfully hitting an enemy, you can use this ability to exploit a newly discovered weakness, dealing bonus damage.", effect: { bonus_damage_after_hit: "2d6" } },
    "Silent Takedown": { class: "rogue", type: "attack", cooldown: 5, description: "Subtly incapacitate a target from stealth without making a sound.", effect: { damage: "weapon_damage", condition: "unconscious_or_restrained", type: "stealth_takedown" } }, // Copy from Rogue
    "Blend into Crowd": { class: "assassin", type: "stealth", cooldown: 0, description: "You can disappear into a crowd of people, becoming almost impossible to detect unless specifically targeted.", effect: { hidden_in_crowd: true } },
    "Undetectable": { class: "assassin", type: "utility", cooldown: 10, description: "You gain a magical aura that makes it difficult for divination magic to locate or scry upon you.", effect: { resistance_to_divination: true } },
    "Swift Poison Application": { class: "alchemist", type: "utility", cooldown: 0, description: "You can apply poison to a weapon or piece of ammunition as a bonus action.", effect: { apply_poison_bonus_action: true } }, // Copy from Alchemist and edit
    "Potent Toxins": { class: "alchemist", type: "buff", cooldown: 0, description: "Your applied poisons deal additional damage or have a higher chance of imposing their effects.", effect: { bonus_poison_damage: "1d4", increased_poison_dc: true } }, // Copy from Alchemist and edit
    "Perfect Execution": { class: "assassin", type: "attack", cooldown: 12, description: "Your precision reaches its peak, allowing you to land critical hits more often on a vulnerable target.", effect: { crit_range_increase: 2, target: "vulnerable_foe" } },
    "Contingency Strike": { class: "assassin", type: "reaction", cooldown: 0, description: "When an enemy uses a feature that exposes them, you can immediately make a devastating counter-attack.", effect: { trigger: "enemy_exposed_feature", type: "devastating_attack" } },
    "Shadow Step": { class: "ninja", type: "movement", cooldown: 5, description: "Melt into shadows and reappear a short distance away.", effect: { movement: "teleport", range: "30ft", requires: "dim_light_or_darkness" } }, // Copy from Ninja
    "Isolate Target": { class: "assassin", type: "control", cooldown: 13, description: "You can psychologically isolate a single target, making them perceive their allies as absent or hostile, making them easier to pick off.", effect: { condition: "isolated_mind", duration: "1_round" } },
    "Sudden Death": { class: "assassin", type: "attack", cooldown: 15, description: "A single, devastating strike designed to instantly kill a weakened or surprised foe.", effect: { instant_kill_on_hit: "low_hp_or_surprised", damage: "8d10" } },
    "Inescapable Justice": { class: "assassin", type: "control", cooldown: 14, description: "You mark a target as your prey, making it impossible for them to escape your pursuit or hide from your senses.", effect: { cannot_escape_or_hide: true, target: "marked_prey" } },
    "Sense the Unseen": { class: "assassin", type: "utility", cooldown: 0, description: "You gain the ability to pinpoint the location of invisible or hidden creatures within a certain range.", effect: { blindsight: "30ft" } },
    "Anticipate Ambush": { class: "assassin", type: "utility", cooldown: 0, description: "You are always ready for a surprise attack, granting you immunity to being surprised.", effect: { immunity: "surprised_condition" } },
    "Untouchable": { class: "assassin", type: "defensive", cooldown: 18, description: "Your movements are so fluid and unpredictable that you gain temporary immunity to all attacks and spells.", effect: { immunity: "all_attacks_and_spells", duration: "1_round" } },
    "Master of Evasion": { class: "assassin", type: "defensive", cooldown: 0, description: "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.", effect: { evasion_improved: true } },
    "One with the Night": { class: "assassin", type: "stealth", cooldown: 20, description: "You become truly one with the darkness, becoming impossible to detect by any means while in darkness.", effect: { true_invisibility: "in_darkness", immunity: "detection" } },
    "Death Strike": { class: "rogue", type: "attack", cooldown: 10, description: "If you hit a surprised creature, you can double the damage of your attack.", effect: { damage_multiplier: 2, condition: "target_surprised" } }, // Copy from Rogue
    "True Invisibility": { class: "ninja", type: "stealth", cooldown: 25, description: "You can become truly invisible, unable to be detected by any non-magical means and even difficult to detect by magical means.", effect: { condition: "true_invisible", resistance_to_magical_detection: true } }, // Copy from Ninja and edit
    "Phantom Assault": { class: "ninja", type: "attack", cooldown: 28, description: "You strike from the shadows, delivering a series of rapid, devastating attacks that are almost impossible to perceive.", effect: { damage: "10d6", type: "unperceivable", num_attacks: 3 } }, // Copy from Ninja and edit

    // Hunter Abilities
    "Precise Shot": { class: "hunter", type: "attack", cooldown: 3, description: "Aim carefully, granting a bonus to your next ranged attack roll.", effect: { bonus_to_attack: "+2", type: "ranged" } },
    "Keen Senses": { class: "hunter", type: "utility", cooldown: 0, description: "Your senses are heightened, giving you advantage on Wisdom (Perception) checks that rely on sight, sound, or smell.", effect: { bonus: "advantage_perception_checks" } },
    "Ensnaring Strike (non-magical)": { class: "hunter", type: "attack", cooldown: 4, description: "Modify an arrow or bolt to release non-magical thorny vines upon impact, grappling and restraining the target.", effect: { damage: "weapon_damage", condition: "grappled_and_restrained", type: "non_magical_projectile" } },
    "Patient Ambusher": { class: "hunter", type: "stealth", cooldown: 0, description: "You gain advantage on attack rolls against any creature that hasn’t taken a turn in combat yet.", effect: { bonus: "advantage_on_surprise_attacks" } },
    "Conclave Feature (e.g., Giant Killer)": { class: "hunter", type: "utility", cooldown: 0, description: "Gain special abilities based on your chosen Hunter's Conclave.", effect: { variable: "conclave_dependent" } },
    "Hunter's Eye": { class: "hunter", type: "utility", cooldown: 5, description: "Study a target to identify its vulnerabilities, granting you and your allies a small bonus to damage against it.", effect: { bonus_damage: "+1d4", target: "single" } },
    "Rapid Shot": { class: "hunter", type: "attack", cooldown: 4, description: "Fire an additional arrow or bolt as a bonus action.", effect: { extra_attack: "ranged", type: "bonus_action" } },
    "Covering Fire": { class: "hunter", type: "control", cooldown: 5, description: "Lay down suppressing fire to protect an ally, imposing disadvantage on attacks against them.", effect: { target: "ally", disadvantage_on_attacks: true, duration: "1_round" } },
    "Multi-Shot": { class: "hunter", type: "attack", cooldown: 6, description: "Fire a volley of arrows at up to three different targets within range.", effect: { damage: "weapon_damage", num_targets: 3 } },
    "Crippling Shot": { class: "hunter", type: "attack", cooldown: 7, description: "A precise shot aimed at a limb, dealing damage and reducing the target's movement speed.", effect: { damage: "weapon_damage", condition: "speed_reduction", duration: "1_min" } },
    "Horde Breaker": { class: "hunter", type: "attack", cooldown: 0, description: "Once on each of your turns when you make a weapon attack, you can make one additional attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.", effect: { extra_attack: true, trigger: "first_attack_of_turn", target: "adjacent_different_creature" } },
    "Advanced Traps": { class: "hunter", type: "utility", cooldown: 0, description: "You can create more complex and damaging traps, such as poison gas traps or explosive traps.", effect: { create_trap: "advanced", damage_type: "choosable" } },
    "Evasion (Light Armor)": { class: "hunter", type: "defensive", cooldown: 0, description: "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.", effect: { evasion: true, requires: "light_armor" } },
    "Uncanny Dodge": { class: "rogue", type: "defensive", cooldown: 0, description: "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.", effect: { halve_damage: true, type: "reaction" } }, // Copy from Rogue
    "Land's Stride": { class: "ranger", type: "movement", cooldown: 0, description: "Moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.", effect: { bypass_difficult_terrain: true, no_plant_hindrance: true } }, // Copy from Ranger
    "Pinning Shot": { class: "hunter", type: "attack", cooldown: 8, description: "Fire an arrow or bolt that pins a target to a surface or the ground, restraining them.", effect: { damage: "weapon_damage", condition: "restrained", duration: "concentration" } },
    "Camouflage": { class: "ranger", type: "stealth", cooldown: 0, description: "Blend into natural surroundings, making it harder for you to be seen.", effect: { bonus_to_stealth: "+5", requires: "natural_terrain" } }, // Copy from Ranger
    "Master of the Hunt": { class: "hunter", type: "buff", cooldown: 10, description: "Your presence in a hunt makes you and your allies more effective, granting bonuses to tracking and combat rolls against your chosen quarry.", effect: { bonus_to_tracking: "advantage", bonus_to_attack_damage: "+1", against: "quarry" } },
    "Volley": { class: "ranger", type: "attack", cooldown: 7, description: "Unleash a hail of arrows or projectiles in a wide area.", effect: { damage: "weapon_damage", type: "aoe", radius: "10ft" } }, // Copy from Ranger
    "Stand Against the Tide": { class: "hunter", type: "defensive", cooldown: 0, description: "When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to make a melee attack against another creature of your choice.", effect: { trigger: "enemy_melee_miss", force_attack_other: true, type: "reaction" } },
    "Called Shot": { class: "hunter", type: "attack", cooldown: 12, description: "Make a highly precise shot aimed at a specific body part, dealing bonus damage and imposing a specific, temporary penalty (e.g., disadvantage on attacks with that arm).", effect: { damage: "weapon_damage", specific_penalty: "choosable", duration: "1_round" } },
    "Sudden Strike": { class: "hunter", type: "attack", cooldown: 11, description: "When you hit a creature with a weapon attack, you can cause the attack to deal extra damage.", effect: { bonus_damage: "2d6", uses: "1_per_turn" } },
    "Eyes of the Eagle": { class: "ranger", type: "utility", cooldown: 0, description: "Your vision becomes as sharp as an eagle's, granting permanent advantage on Perception checks that rely on sight.", effect: { bonus: "permanent_advantage_perception_sight" } }, // Copy from Ranger
    "No Escape": { class: "hunter", type: "control", cooldown: 13, description: "A marked creature cannot escape your sight or your pursuit, even with magical means of escape.", effect: { negate_escape: true, target: "marked_creature" } },
    "Leave No Trace": { class: "hunter", type: "utility", cooldown: 0, description: "You are so skilled at moving through the wilderness that you leave no discernible tracks or signs of your passage.", effect: { no_tracks_or_signs: true } },
    "One with the Wild": { class: "hunter", type: "buff", cooldown: 0, description: "You gain a deeper connection to the wild, allowing you to move through natural difficult terrain without penalty and ignoring plant-based hazards.", effect: { bypass_natural_difficult_terrain: true, immunity: "plant_hazards" } },
    "Giant Slayer (Improved)": { class: "hunter", type: "attack", cooldown: 0, description: "When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack it, and deal extra damage.", effect: { extra_attack: "reaction", damage: "2d6", target: "large_or_larger_creature" } },
    "Perfected Ambush": { class: "hunter", type: "stealth", cooldown: 15, description: "Your ambushes are flawless, granting you and your allies advantage on attack rolls against surprised creatures.", effect: { advantage_on_surprise_attacks: true, target: "allies" } },
    "Arrow-Catching": { class: "hunter", type: "defensive", cooldown: 0, description: "You can use your reaction to deflect or catch a missile when you are hit by a ranged weapon attack.", effect: { deflect_or_catch_missile: true, type: "reaction" } },
    "Steel Will": { class: "hunter", type: "defensive", cooldown: 0, description: "You gain advantage on saving throws against being charmed or frightened.", effect: { bonus: "advantage_charm_frighten_saves" } },
    "Lethal Strike": { class: "hunter", type: "attack", cooldown: 18, description: "A devastating strike that targets a creature's vital points, dealing massive bonus damage.", effect: { damage: "4d10", type: "bonus_on_hit" } },
    "Unfaltering Aim": { class: "hunter", type: "buff", cooldown: 17, description: "Your aim becomes absolute, allowing you to ignore cover and range penalties for your ranged attacks for a short duration.", effect: { ignore_cover_range_penalties: true, duration: "1_round" } },
    "Death Stroke": { class: "assassin", type: "attack", cooldown: 15, description: "A single, devastating strike designed to instantly kill a weakened or surprised foe.", effect: { instant_kill_on_hit: "low_hp_or_surprised", damage: "8d10" } }, // Copy from Assassin
    "The Ultimate Prey": { class: "hunter", type: "utility", cooldown: 25, description: "You gain unerring knowledge of your current prey's location and vulnerabilities, no matter where they hide.", effect: { unerring_track: true, reveal_vulnerabilities: true } },

    // Shaman Abilities
    "Speak with Spirits": { class: "shaman", type: "utility", cooldown: 0, description: "You can communicate with the spirits of the dead and nature, gaining insights or guidance.", effect: { communicate_with_spirits: true } },
    "Spiritual Weapon (Minor)": { class: "shaman", type: "attack", cooldown: 3, description: "Conjure a spectral weapon that floats in the air and can attack enemies.", effect: { damage: "1d8", type: "force", range: "20ft" } },
    "Healing Totem": { class: "shaman", type: "healing", cooldown: 5, description: "Summon a totem that emanates healing energy, restoring hit points to allies within its aura.", effect: { healing_over_time: "1d4_per_round", area: "10ft_radius" } },
    "Earthbind Totem": { class: "shaman", type: "control", cooldown: 6, description: "Summon a totem that emits a grounding aura, potentially restraining flying creatures or holding enemies in place.", effect: { condition: "restrained_or_speed_0", area: "15ft_radius" } },
    "Ancestral Protection": { class: "shaman", type: "defensive", cooldown: 7, description: "Call upon ancestral spirits to protect an ally, granting them a bonus to AC and saving throws.", effect: { target: "ally", ac_bonus: "+2", bonus_to_saves: "+1", duration: "1_round" } },
    "Elemental Attunement": { class: "shaman", type: "buff", cooldown: 5, description: "Briefly attune yourself to an element, gaining resistance to its damage type and empowering your spells of that type.", effect: { resistance: "choosable_elemental_damage", spell_bonus: "1d4", duration: "2_rounds" } },
    "Ritual Casting": { class: "shaman", type: "utility", cooldown: 0, description: "You can cast any shaman spell you know as a ritual if it has the ritual tag.", effect: { cast_ritual_spells: true } },
    "Elemental Lash": { class: "shaman", type: "attack", cooldown: 6, description: "Manifest a whip of elemental energy that deals damage and can impose a condition based on the element chosen (e.g., burning, slowing).", effect: { damage: "2d6", type: "elemental_choosable", condition: "elemental_effect" } },
    "Spirit Link": { class: "shaman", type: "buff", cooldown: 8, description: "Create a spiritual link between yourself and an ally, allowing you to share damage taken or transfer healing.", effect: { share_damage: true, transfer_healing: true } },
    "Call Lightning": { class: "ranger", type: "attack", cooldown: 10, description: "Call down a bolt of lightning from the sky to strike a target.", effect: { damage: "4d6", type: "lightning", target: "single" } }, // Copy from Ranger
    "Guardian Spirit": { class: "cleric", type: "summon", cooldown: 14, description: "Summon a powerful, spectral guardian spirit that protects a chosen ally and attacks enemies.", effect: { summon_creature: "spectral_guardian", protects_ally: true } }, // Copy from Cleric
    "Stoneskin Totem": { class: "shaman", type: "defensive", cooldown: 10, description: "Summon a totem that grants damage resistance to bludgeoning, piercing, and slashing damage to allies within its aura.", effect: { resistance: "bludgeoning_piercing_slashing", area: "15ft_radius" } },
    "Vision Quest": { class: "shaman", type: "utility", cooldown: 12, description: "Enter a trance to receive visions from the spirit world, gaining knowledge of future events or hidden truths.", effect: { gain_knowledge: "future_events_hidden_truths" } },
    "Ethereal Jaunt": { class: "shaman", type: "movement", cooldown: 11, description: "Briefly step into the Ethereal Plane, allowing you to bypass obstacles and enemies.", effect: { movement: "ethereal", duration: "1_round" } },
    "Walk Between Worlds": { class: "shaman", type: "movement", cooldown: 14, description: "You can briefly shift between the Material Plane and the Ethereal Plane at will.", effect: { shift_planes: "material_ethereal", duration: "instant" } },
    "Ghostly Form": { class: "shaman", type: "defensive", cooldown: 13, description: "Temporarily transform into a spectral form, gaining resistance to all non-force damage and the ability to move through objects.", effect: { resistance: "non_force_damage", movement: "pass_through_objects", duration: "1_round" } },
    "Astral Projection (Self)": { class: "psychic", type: "utility", cooldown: 30, description: "Project your consciousness onto the Astral Plane, leaving your body behind.", effect: { travel: "astral_plane", duration: "1_hour" } }, // Copy from Psychic
    "Unleash Elements": { class: "shaman", type: "attack", cooldown: 15, description: "Unleash a powerful burst of elemental energy (fire, cold, lightning, acid, thunder) in a wide area.", effect: { damage: "6d6", type: "choosable_elemental", area: "20ft_radius" } },
    "Immunity to Possession": { class: "shaman", type: "defensive", cooldown: 0, description: "You are immune to being possessed by spirits or other creatures.", effect: { immunity: "possession" } },
    "See the Unseen": { class: "shaman", type: "utility", cooldown: 0, description: "You gain the ability to see invisible creatures and objects as if they were visible.", effect: { see_invisible: true } },
    "Twin Totems": { class: "shaman", type: "summon", cooldown: 18, description: "You can summon two different spirit totems at once, each with its own effect.", effect: { summon_two_totems: true } },
    "Totemic Projection": { class: "shaman", type: "utility", cooldown: 17, description: "You can project the effects of your totems to a greater distance.", effect: { increase_totem_range: "double" } },
    "Spiritual Balance": { class: "shaman", type: "healing", cooldown: 20, description: "Restore balance to a creature's spiritual and physical being, instantly curing all diseases and poisons and restoring a large amount of hit points.", effect: { cure_all_ailments: true, healing: "6d8" } },
    "Purge Spirits": { class: "shaman", type: "attack", cooldown: 19, description: "Release a wave of purifying energy that deals radiant damage to undead and fiends, potentially banishing them.", effect: { damage: "8d6", type: "radiant", target: "undead_fiends", banish_chance: true } },
    "Whispers of the Past": { class: "shaman", type: "utility", cooldown: 0, description: "You can perceive echoes of past events in a location, providing insights into its history.", effect: { perceive_past_events: true } },
    "Glimpse the Future": { class: "shaman", type: "utility", cooldown: 0, description: "You gain a brief, fleeting vision of the immediate future, granting you advantage on your next attack roll, ability check, or saving throw.", effect: { advantage_on_next_roll: true, uses: "1_per_rest" } },
    "Ancestral Swarm": { class: "shaman", type: "attack", cooldown: 22, description: "Summon a swarm of angry ancestral spirits that deal psychic and necrotic damage to enemies in an area.", effect: { damage: "10d6", type: "psychic_necrotic", area: "30ft_radius" } },
    "Elemental Body": { class: "druid", type: "buff", cooldown: 16, description: "Transform into an elemental form, gaining resistance to elemental damage and an elemental attack.", effect: { form: "elemental", resistance: "elemental_damage", elemental_attack: true, duration: "1_min" } }, // Copy from Druid
    "Spirit Form (Lesser)": { class: "shaman", type: "defensive", cooldown: 25, description: "You can temporarily assume a semi-incorporeal, spectral form, gaining resistance to all non-force damage and the ability to move through objects.", effect: { resistance: "non_force_damage", movement: "pass_through_objects", duration: "3_rounds" } },
    "Unending Watch": { class: "shaman", type: "buff", cooldown: 0, description: "Your connection to the spirit world allows you to remain perpetually vigilant, immune to being surprised and always aware of your surroundings.", effect: { immunity: "surprised", constant_awareness: true } },
    "Wrath of the Spirits": { class: "shaman", type: "attack", cooldown: 28, description: "Call forth the full wrath of the spirit world, dealing immense psychic and necrotic damage to all enemies in a large area and potentially instilling terror.", effect: { damage: "15d6", type: "psychic_necrotic", condition: "frightened", area: "60ft_radius" } },
    "Blessing of the Ancients": { class: "shaman", type: "buff", cooldown: 28, description: "Invoke a powerful blessing from your ancestors, granting all allies within range resistance to all damage and a bonus to all rolls for a short time.", effect: { resistance: "all", bonus_to_all_rolls: "+3", target: "allies", range: "60ft", duration: "2_rounds" } },
    "Become the Avatar": { class: "shaman", type: "buff", cooldown: 30, description: "You temporarily become a conduit for the Great Spirit, gaining absolute control over natural elements and the ability to summon powerful elemental forces.", effect: { elemental_control: "absolute", summon_elemental_army: true, duration: "1_min" } },
    "One with the Great Spirit": { class: "shaman", type: "utility", cooldown: 0, description: "You achieve ultimate oneness with the natural world and the spirit realm, gaining unparalleled knowledge and the ability to shift between planes at will.", effect: { unparalleled_knowledge: true, plane_shift_at_will: true } },

    // Gladiator Abilities
    "Goading Attack": { class: "gladiator", type: "attack", cooldown: 3, description: "Make a melee attack and attempt to goad the target into attacking you. If it hits, the target has disadvantage on attack rolls against creatures other than you.", effect: { damage: "weapon_damage", condition: "disadvantage_attacks_other_than_you", duration: "1_round" } },
    "Battlefield Taunt": { class: "gladiator", type: "control", cooldown: 4, description: "Shout a taunt that draws an enemy's attention, causing them to focus on you.", effect: { target: "single", condition: "taunted", duration: "1_round" } },
    "Disarming Strike": { class: "gladiator", type: "attack", cooldown: 5, description: "When you hit a creature with a weapon attack, you can expend a superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it's holding.", effect: { damage: "weapon_damage", condition: "disarmed" } },
    "Pushing Attack": { class: "gladiator", type: "attack", cooldown: 4, description: "When you hit a creature with a weapon attack, you can expend a superiority die to attempt to drive the target back. If it hits, the target must make a Strength saving throw or be pushed up to 15 feet away from you.", effect: { damage: "weapon_damage", push_distance: "15ft" } },
    "Dramatic Parry": { class: "gladiator", type: "defensive", cooldown: 2, description: "Use your reaction to deflect an attack with a flourish, increasing your AC against that attack.", effect: { ac_bonus: "+2", type: "reaction" } },
    "Style Feature (e.g., Retiarius, Secutor)": { class: "gladiator", type: "utility", cooldown: 0, description: "Gain special abilities based on your chosen Gladiator Style.", effect: { variable: "style_dependent" } },
    "Signature Pose": { class: "gladiator", type: "buff", cooldown: 6, description: "Strike a heroic pose, inspiring allies or intimidating foes.", effect: { bonus_to_attack: "+1", target: "allies", condition: "frightened", target: "enemies" } },
    "Mocking Blow": { class: "gladiator", type: "attack", cooldown: 5, description: "A weapon strike followed by a mocking taunt, dealing bonus damage and imposing disadvantage on the target's next attack.", effect: { damage: "weapon_damage", disadvantage_on_next_attack: true } },
    "Feinting Attack": { class: "gladiator", type: "attack", cooldown: 4, description: "Use a feint to gain advantage on your next attack roll against a creature.", effect: { advantage_on_next_attack: true } },
    "Spectacular Maneuver": { class: "gladiator", type: "buff", cooldown: 8, description: "Perform an impressive combat maneuver that inspires the crowd and grants temporary hit points to yourself.", effect: { temp_hp: "2d8", bonus: "crowd_favor" } },
    "Unrelenting Assault": { class: "gladiator", type: "buff", cooldown: 9, description: "Maintain a relentless attack, allowing you to make an additional weapon attack as a bonus action each turn for a short duration.", effect: { extra_attack: "weapon", type: "bonus_action", duration: "2_rounds" } },
    "Fan Shield": { class: "gladiator", type: "defensive", cooldown: 7, description: "Use your shield to fan away incoming projectiles, gaining advantage on Dexterity saves against ranged attacks.", effect: { bonus: "advantage_dex_saves_ranged" } },
    "Net Mastery": { class: "gladiator", type: "control", cooldown: 6, description: "You gain expertise with nets, allowing you to throw them farther and impose stronger restraints.", effect: { expertise_nets: true, improved_restraint: true } },
    "Test of Mettle": { class: "gladiator", type: "control", cooldown: 8, description: "Challenge an opponent to a duel, forcing them to attack only you or suffer penalties.", effect: { target: "single", condition: "duel_bound", penalty_if_ignore: true } },
    "Overpowering Attack": { class: "gladiator", type: "attack", cooldown: 9, description: "A powerful strike that not only deals damage but also potentially knocks the target prone and pushes them back.", effect: { damage: "weapon_damage", condition: "prone", push_distance: "10ft" } },
    "Gain Acclaim on Crit": { class: "gladiator", type: "utility", cooldown: 0, description: "When you score a critical hit, you gain additional Acclaim points.", effect: { gain_resource: "acclaim", amount: "1_point", trigger: "critical_hit" } },
    "Stunning Critical": { class: "gladiator", type: "attack", cooldown: 0, description: "When you score a critical hit, you can choose to stun the target for 1 round.", effect: { condition: "stunned", duration: "1_round", trigger: "critical_hit" } },
    "Sand in the Eyes": { class: "gladiator", type: "control", cooldown: 7, description: "Throw sand or dirt into an enemy's eyes, blinding them for a short duration.", effect: { target: "single", condition: "blinded", duration: "1_round" } },
    "Master Duelist": { class: "gladiator", type: "buff", cooldown: 0, description: "When you are fighting only one creature, you have advantage on attack rolls against it.", effect: { bonus: "advantage_on_single_target" } },
    "The People's Champion": { class: "gladiator", type: "buff", cooldown: 12, description: "Your presence fills the crowd with adoration, granting you and your allies temporary hit points and inspiration whenever you perform a significant combat feat.", effect: { temp_hp: "3d6", inspiration: true, trigger: "significant_combat_feat" } },
    "Finishing Flourish": { class: "gladiator", type: "attack", cooldown: 13, description: "A spectacular and deadly finishing blow against a weakened opponent, designed to maximize damage and entertain the crowd.", effect: { damage_multiplier: "1.5", type: "finisher" } },
    "Unbreakable Focus": { class: "gladiator", type: "defensive", cooldown: 0, description: "You cannot be charmed or frightened while in combat.", effect: { immunity: ["charmed", "frightened"], requires: "in_combat" } },
    "Riposte": { class: "gladiator", type: "reaction", cooldown: 0, description: "When a creature misses you with a melee attack, you can use your reaction to make a melee weapon attack against the creature.", effect: { trigger: "enemy_melee_miss", type: "melee_attack", type: "reaction" } },
    "Recover Acclaim": { class: "gladiator", type: "utility", cooldown: 0, description: "You can use your bonus action to regain a number of expended Acclaim points.", effect: { regain_acclaim: "variable", type: "bonus_action" } },
    "Gain Temporary HP": { class: "gladiator", type: "healing", cooldown: 0, description: "You gain temporary hit points equal to your Charisma modifier + your Gladiator level.", effect: { temp_hp: "charisma_mod_plus_gladiator_level" } },
    "Master of the Arena": { class: "gladiator", type: "buff", cooldown: 0, description: "You are truly unmatched in the arena, gaining advantage on all attack rolls and saving throws while fighting in an enclosed combat space.", effect: { advantage_on_all_rolls: true, requires: "arena_combat" } },
    "Unstoppable": { class: "gladiator", type: "buff", cooldown: 18, description: "You become immune to forced movement and the prone condition for a short duration, continuing your assault relentlessly.", effect: { immunity: ["forced_movement", "prone"], duration: "2_rounds" } },
    "Aura of Renown": { class: "gladiator", type: "buff", cooldown: 0, description: "You emanate an aura of legendary renown, granting a bonus to Persuasion checks and inspiring allies.", effect: { bonus_to_persuasion: "advantage", inspire_allies: true, type: "passive_aura" } },
    "Terrifying Entrance": { class: "gladiator", type: "control", cooldown: 20, description: "Your grand entrance into combat causes all creatures who witness it to make a Wisdom saving throw or become frightened.", effect: { condition: "frightened", area: "60ft_radius", trigger: "enter_combat" } },
    "Perfected Form": { class: "gladiator", type: "buff", cooldown: 25, description: "You achieve peak physical perfection, granting you permanent resistance to bludgeoning, piercing, and slashing damage from non-magical attacks.", effect: { permanent_resistance: "non_magical_physical" } },
    "Deathblow": { class: "gladiator", type: "attack", cooldown: 22, description: "A single, decisive strike that, if successful, can instantly kill a creature that is already heavily wounded.", effect: { instant_kill_on_hit: "heavily_wounded", damage: "10d10" } },
    "Enter Perfect Showmanship": { class: "gladiator", type: "buff", cooldown: 30, description: "You enter a state of perfect showmanship, granting you unlimited Acclaim and critical hits on nearly every successful attack for a short duration.", effect: { unlimited_acclaim: true, crit_on_18_20: true, duration: "1_min" } },
    "God of the Arena": { class: "gladiator", type: "buff", cooldown: 30, description: "Temporarily transform into a godlike figure within the arena, gaining immense strength, resilience, and the ability to command the crowd's will.", effect: { strength_bonus: "+5", immunity: "all_damage", command_crowd: true, duration: "1_min" } },

    // Ninja Abilities
    "Hidden Blade": { class: "ninja", type: "attack", cooldown: 3, description: "Utilize a concealed weapon for a surprise attack, dealing bonus damage.", effect: { damage: "1d6", type: "bonus_on_surprise" } },
    "Acrobatic Movement": { class: "ninja", type: "movement", cooldown: 0, description: "You can move through enemy spaces without provoking opportunity attacks and can take the Disengage action as a bonus action.", effect: { no_opportunity_attacks: true, disengage_bonus_action: true } },
    "Shadow Step": { class: "ninja", type: "movement", cooldown: 5, description: "Melt into shadows and reappear a short distance away.", effect: { movement: "teleport", range: "30ft", requires: "dim_light_or_darkness" } },
    "Patient Defense": { class: "monk", type: "defensive", cooldown: 0, description: "You can spend 1 ki point to take the Dodge action as a bonus action on your turn.", effect: { action: "dodge", cost: "1_ki_point", type: "bonus_action" } }, // Copy from Monk
    "Swift Action": { class: "assassin", type: "movement", cooldown: 0, description: "You can take the Hide or Dash action as a bonus action on your turn.", effect: { action: ["hide", "dash"], type: "bonus_action" } }, // Copy from Assassin
    "Clan Feature (e.g., Phantom Illusion)": { class: "ninja", type: "utility", cooldown: 0, description: "Gain special abilities based on your chosen Shinobi Clan.", effect: { variable: "clan_dependent" } },
    "Smoke Bomb": { class: "rogue", type: "utility", cooldown: 4, description: "Throw a smoke bomb that creates a cloud of obscuring smoke, allowing for escape or stealth.", effect: { condition: "heavily_obscured", radius: "10ft", duration: "1_round" } }, // Copy from Rogue
    "Substitution Jutsu": { class: "ninja", type: "defensive", cooldown: 8, description: "When targeted by an attack or spell, you can swap places with a nearby object or illusion to avoid the effect.", effect: { avoid_attack_or_spell: true, swap_location: true } },
    "Wall Running": { class: "monk", type: "movement", cooldown: 3, description: "Briefly run along vertical surfaces.", effect: { movement: "wall_climb", duration: "1_round" } }, // Copy from Monk
    "Silent Ambush": { class: "ninja", type: "attack", cooldown: 6, description: "Your attacks from stealth are completely silent, making it impossible for enemies to pinpoint your location based on sound.", effect: { silent_attack: true, bonus_damage_from_stealth: "1d6" } },
    "Chain Attack": { class: "rogue", type: "attack", cooldown: 7, description: "After reducing an enemy to 0 hit points, make an additional attack against a nearby foe.", effect: { trigger: "kill_enemy", extra_attack: "nearby_enemy" } }, // Copy from Rogue
    "Improved Ninjutsu": { class: "ninja", type: "buff", cooldown: 0, description: "Your Ninjutsu Arts become more potent, gaining additional effects or increased range.", effect: { ninjutsu_enhancement: true } },
    "Elemental Kunai": { class: "ninja", type: "attack", cooldown: 5, description: "Infuse your throwing knives with elemental energy (fire, cold, lightning, acid), dealing additional damage.", effect: { damage: "1d6", type: "elemental_choosable", num_attacks: 2 } },
    "Poisoner's Touch": { class: "assassin", type: "buff", cooldown: 4, description: "Apply a powerful poison to your weapon as a bonus action, dealing significant poison damage on your next hit.", effect: { damage: "2d6", type: "poison", type: "bonus_action" } }, // Copy from Assassin
    "Blink Step": { class: "ninja", type: "movement", cooldown: 8, description: "Teleport a very short distance as a bonus action, allowing you to quickly reposition or avoid attacks.", effect: { teleport: "15ft", type: "bonus_action" } },
    "Heightened Senses": { class: "ninja", type: "utility", cooldown: 0, description: "Your senses are so acute that you gain blindsight within a short range, allowing you to perceive hidden or invisible creatures.", effect: { blindsight: "10ft" } },
    "Water Walking": { class: "ninja", type: "movement", cooldown: 0, description: "You gain the ability to move across the surface of water as if it were solid ground.", effect: { move_on_water: true } },
    "Iaijutsu (Quick Draw Strike)": { class: "ninja", type: "attack", cooldown: 7, description: "As a bonus action, you can draw a weapon and make a single, devastating attack against a surprised enemy.", effect: { bonus_action_attack: true, bonus_damage_on_surprise: "2d6" } },
    "Master of Disguise": { class: "rogue", type: "utility", cooldown: 0, description: "You can perfectly impersonate another person's appearance and voice.", effect: { perfect_disguise: true } }, // Copy from Rogue
    "Undetectable": { class: "assassin", type: "utility", cooldown: 10, description: "You gain a magical aura that makes it difficult for divination magic to locate or scry upon you.", effect: { resistance_to_divination: true } }, // Copy from Assassin
    "Advanced Ninjutsu": { class: "ninja", type: "buff", cooldown: 0, description: "Your Ninjutsu Arts reach a new level of mastery, gaining powerful new effects or allowing for more frequent use.", effect: { advanced_ninjutsu_effects: true } },
    "Flickering Defense": { class: "ninja", type: "defensive", cooldown: 9, description: "Your movements are so fast and unpredictable that you gain a significant bonus to AC against a single attack.", effect: { ac_bonus: "+5", duration: "1_attack" } },
    "Shadow Clone": { class: "ninja", type: "utility", cooldown: 10, description: "Create a perfect, but temporary, magical duplicate of yourself that can distract enemies or even draw attacks.", effect: { create_perfect_duplicate: true, duration: "1_round", hp: "1_hp" } },
    "Create Duplicate": { class: "ninja", type: "utility", cooldown: 0, description: "Create a non-magical, illusory duplicate of yourself to distract enemies.", effect: { create_illusion: "self", duration: "1_round", type: "distraction" } },
    "Misdirection": { class: "rogue", type: "utility", cooldown: 5, description: "Divert attention from yourself or an ally, allowing them to escape notice.", effect: { create_distraction: true, stealth_bonus: "+5" } }, // Copy from Rogue
    "Assassinate": { class: "assassin", type: "attack", cooldown: 0, description: "During your first turn of combat, you have advantage on attack rolls against any creature that hasn't taken a turn. Any hit you score against a creature that is surprised is a critical hit.", effect: { advantage_on_first_turn_attacks: true, crit_on_surprised: true } }, // Copy from Assassin
    "Pressure Point Strike": { class: "monk", type: "attack", cooldown: 6, description: "Strike a pressure point on an enemy, dealing damage and potentially debilitating them with a temporary condition.", effect: { damage: "weapon_damage", condition: "disadvantage_on_attacks_or_saves" } },
    "Read Lips": { class: "ninja", type: "utility", cooldown: 0, description: "You can understand what creatures are saying by reading their lips, even if you don't understand the language.", effect: { read_lips: true } },
    "Silent Communication": { class: "ninja", type: "utility", cooldown: 0, description: "You can communicate complex ideas and commands to allies through subtle gestures and facial expressions.", effect: { non_verbal_communication: true, range: "30ft" } },
    "Forbidden Jutsu": { class: "ninja", type: "attack", cooldown: 15, description: "Unleash a powerful, forbidden technique that deals massive damage or imposes a severe, long-lasting condition on a single target.", effect: { damage: "6d8", type: "variable", condition: "severe_long_lasting" } },
    "Elemental Fury": { class: "druid", type: "attack", cooldown: 7, description: "Channel elemental energy into your attacks, dealing extra damage of a chosen type (fire, cold, lightning).", effect: { damage: "1d6", type: "elemental_choosable" } }, // Copy from Druid
    "True Invisibility": { class: "ninja", type: "stealth", cooldown: 25, description: "You can become truly invisible, unable to be detected by any non-magical means and even difficult to detect by magical means.", effect: { condition: "true_invisible", resistance_to_magical_detection: true } },
    "Phantom Assault": { class: "ninja", type: "attack", cooldown: 28, description: "You strike from the shadows, delivering a series of rapid, devastating attacks that are almost impossible to perceive.", effect: { damage: "10d6", type: "unperceivable", num_attacks: 3 } },

    // Summoner Abilities
    "Choose Eidolon Form": { class: "summoner", type: "utility", cooldown: 0, description: "Select the basic form and appearance of your Eidolon.", effect: { customizable: "eidolon_appearance_and_stats" } },
    "Bond Senses": { class: "summoner", type: "utility", cooldown: 0, description: "You can use your action to see and hear through your Eidolon's senses until the start of your next turn.", effect: { shared_senses: true, duration: "1_round" } },
    "Add Claws/Bite": { class: "summoner", type: "buff", cooldown: 0, description: "Your Eidolon gains natural weapon attacks (claws or bite).", effect: { eidolon_weapon: "claws_or_bite" } },
    "Improved Natural Armor": { class: "summoner", type: "buff", cooldown: 0, description: "Your Eidolon's natural armor bonus increases by 1.", effect: { eidolon_ac_bonus: "+1" } },
    "Command Summoned Creature": { class: "summoner", type: "utility", cooldown: 0, description: "You can use your bonus action to verbally command any creature you have summoned.", effect: { command_as_bonus_action: true, target: "summoned_creature" } },
    "Shield Ally (Basic)": { class: "summoner", type: "defensive", cooldown: 4, description: "As a reaction, your Eidolon can interpose itself between you and an attacker, granting you a bonus to AC.", effect: { ac_bonus: "+2", type: "reaction", target: "self" } },
    "Elemental Breath Weapon": { class: "summoner", type: "attack", cooldown: 7, description: "Your Eidolon gains a breath weapon that deals elemental damage (chosen type) in a cone.", effect: { damage: "2d6", type: "elemental_choosable", area: "15ft_cone" } },
    "Empower Eidolon": { class: "summoner", type: "buff", cooldown: 6, description: "Your Eidolon gains a bonus to its attack and damage rolls for a short duration.", effect: { bonus_to_attack_damage: "+2", target: "eidolon", duration: "1_min" } },
    "Extra Attack (for Eidolon)": { class: "summoner", type: "buff", cooldown: 0, description: "Your Eidolon can attack twice, instead of once, whenever it takes the Attack action on its turn.", effect: { eidolon_extra_attack: true } },
    "Channel Eidolon Evolution": { class: "summoner", type: "utility", cooldown: 0, description: "You can modify your Eidolon's evolutions more freely, reassigning points after a short or long rest.", effect: { reassign_evolutions: true } },
    "Share Spells": { class: "summoner", type: "buff", cooldown: 0, description: "When you cast a spell that targets only you, you can also cast it on your Eidolon.", effect: { share_personal_spells: true, target: "eidolon" } },
    "Large Evolution": { class: "summoner", type: "buff", cooldown: 0, description: "Your Eidolon can grow to Large size, increasing its reach and strength.", effect: { eidolon_size: "large", bonus_strength: "+2" } },
    "Flight": { class: "summoner", type: "buff", cooldown: 0, description: "Your Eidolon gains a flying speed.", effect: { eidolon_movement: "flight" } },
    "Greater Shield Ally": { class: "summoner", type: "defensive", cooldown: 6, description: "As a reaction, your Eidolon can absorb all damage from an attack directed at you or an ally, taking the damage itself.", effect: { absorb_damage: true, target: "self_or_ally", type: "reaction" } },
    "Transposition": { class: "summoner", type: "movement", cooldown: 8, description: "You and your Eidolon can instantly swap places with each other.", effect: { swap_places: true, target: "self_and_eidolon" } },
    "Eidolon's Ward": { class: "summoner", type: "defensive", cooldown: 10, description: "Your Eidolon projects a protective aura around itself and you, granting temporary hit points and resistance to a chosen damage type.", effect: { temp_hp: "3d8", resistance: "choosable_type", area: "10ft_radius" } },
    "Remote Viewing": { class: "psychic", type: "utility", cooldown: 9, description: "You can project your senses to a distant location, observing events as if you were there.", effect: { scrying_range: "1_mile" } }, // Copy from Psychic
    "Channel Multiple Evolutions": { class: "summoner", type: "utility", cooldown: 0, description: "You can assign more evolution points to your Eidolon's abilities.", effect: { increased_evolution_points: true } },
    "Life Link": { class: "summoner", type: "buff", cooldown: 12, description: "You gain resistance to all damage while your Eidolon is within 30 feet of you.", effect: { resistance: "all_damage", requires: "eidolon_nearby" } },
    "Unleash Eidolon": { class: "summoner", type: "buff", cooldown: 13, description: "Your Eidolon temporarily gains massive increases to its size, strength, and damage output.", effect: { eidolon_size: "huge", strength_bonus: "+4", damage_bonus: "+3d6", duration: "1_min" } },
    "Merge Forms (Lesser)": { class: "summoner", type: "buff", cooldown: 15, description: "Temporarily merge with your Eidolon, gaining some of its physical capabilities while retaining your own spellcasting.", effect: { partial_merge: true, gain_eidolon_stats: true, duration: "1_min" } },
    "Ultimate Evolution": { class: "summoner", type: "buff", cooldown: 0, description: "Your Eidolon gains its ultimate form, unlocking its full potential and gaining permanent resistances or immunities.", effect: { eidolon_ultimate_form: true, permanent_resistance_immunity: true } },
    "Sacrifice Eidolon to Survive": { class: "summoner", type: "defensive", cooldown: 20, description: "When you would be reduced to 0 hit points, you can choose to transfer the damage to your Eidolon, potentially dismissing it but saving yourself.", effect: { transfer_damage_to_eidolon: true, dismiss_eidolon: true } },
    "Rapid Re-summoning": { class: "summoner", type: "utility", cooldown: 0, description: "You can re-summon your Eidolon with greatly reduced casting time after it has been dismissed or destroyed.", effect: { fast_resummon: true, casting_time_reduced: "1_action" } },
    "Merge Forms": { class: "summoner", type: "buff", cooldown: 25, description: "You can fully merge with your Eidolon, becoming a single, powerful entity with combined abilities and hit points.", effect: { full_merge: true, combined_stats: true, duration: "1_min" } },
    "Frightful Presence": { class: "barbarian", type: "control", cooldown: 5, description: "Glower menacingly at a creature, attempting to frighten them with your raw ferocity.", effect: { target: "single", condition: "frightened", duration: "1_round" } }, // Copy from Barbarian
    "Aura of Command": { class: "summoner", type: "buff", cooldown: 0, description: "You emanate an aura that enhances the combat prowess of all summoned creatures under your control.", effect: { bonus_to_summoned_creatures: "attack_and_damage", range: "30ft" } },
    "Planar Dominion": { class: "summoner", type: "utility", cooldown: 28, description: "You gain a limited ability to control the planar energies around you, allowing for localized planar shifts or summoning of minor environmental effects.", effect: { minor_planar_shifts: true, summon_environmental_effects: true } },
    "Manifest Eidolon Twin": { class: "summoner", type: "summon", cooldown: 30, description: "You can summon a second, identical copy of your Eidolon to fight alongside the original.", effect: { summon_second_eidolon: true } },
    "Master of Realities": { class: "summoner", type: "utility", cooldown: 30, description: "You gain a profound understanding of planar mechanics, allowing you to traverse planes at will or influence the properties of existing planes.", effect: { plane_travel_at_will: true, planar_influence: true } },

    // Necromancer Abilities
    "Rebuke Death": { class: "necromancer", type: "healing", cooldown: 3, description: "Siphon life force from a dying creature to restore hit points to yourself or an ally.", effect: { healing: "1d8", target: "self_or_ally", from: "dying_creature" } },
    "Grave Grasp": { class: "necromancer", type: "attack", cooldown: 4, description: "Summon spectral hands from the ground to grapple and restrain an enemy.", effect: { condition: "grappled_and_restrained", duration: "concentration" } },
    "Animate Basic Undead (1)": { class: "necromancer", type: "summon", cooldown: 5, description: "Raise a single, basic undead creature (e.g., zombie or skeleton) to serve you.", effect: { summon_creature: "basic_undead", num_creatures: 1 } },
    "Bone Armor": { class: "necromancer", type: "defensive", cooldown: 4, description: "Conjure a temporary shield of bone around yourself, granting bonus AC.", effect: { ac_bonus: "+2", duration: "1_round" } },
    "Path Feature (e.g., Dread Lord's Presence)": { class: "necromancer", type: "utility", cooldown: 0, description: "Gain special abilities based on your chosen Path of Necromancy.", effect: { variable: "path_dependent" } },
    "Animate Dead": { class: "necromancer", type: "summon", cooldown: 0, description: "You can cast the Animate Dead spell once per long rest without expending a spell slot.", effect: { cast_spell_once: "animate_dead" } },
    "Life Tap": { class: "necromancer", type: "healing", cooldown: 6, description: "Siphon life force from a living creature, dealing necrotic damage to them and healing yourself.", effect: { damage: "2d6", type: "necrotic", healing: "2d6" } },
    "Deathly Pallor": { class: "necromancer", type: "buff", cooldown: 0, description: "Your appearance becomes gaunt and unsettling, granting you advantage on Intimidation checks against living creatures.", effect: { bonus: "advantage_intimidation_living" } },
    "Empowered Minions (HP & Damage)": { class: "necromancer", type: "buff", cooldown: 0, description: "Your animated undead creatures gain additional hit points and deal extra damage.", effect: { undead_hp_bonus: "+10", undead_damage_bonus: "+2" } },
    "Stitch Undead": { class: "necromancer", type: "utility", cooldown: 5, description: "You can repair damaged undead creatures you control, restoring their hit points.", effect: { repair_undead: true, healing: "3d6" } },
    "Aura of Fear": { class: "necromancer", type: "control", cooldown: 7, description: "Emit a palpable aura of fear, causing hostile creatures within range to become frightened.", effect: { condition: "frightened", area: "10ft_radius", duration: "1_round" } },
    "Harvest Life": { class: "necromancer", type: "healing", cooldown: 8, description: "Siphon the life force from multiple dying creatures in an area, healing yourself and your allies.", effect: { healing: "3d6", target: "multiple_allies", from: "dying_creatures" } },
    "Grave Secrets": { class: "necromancer", type: "utility", cooldown: 0, description: "You can speak to the spirits of the recently deceased, gaining knowledge of their last moments or secrets.", effect: { speak_with_dead: true, gain_secrets: true } },
    "Corpulent Cadavers (Exploding Minions)": { class: "necromancer", type: "attack", cooldown: 9, description: "You can command a controlled undead to explode upon death, dealing necrotic damage to nearby creatures.", effect: { damage: "2d8", type: "necrotic", area: "10ft_radius", trigger: "undead_death" } },
    "Necrotic Ward": { class: "necromancer", type: "defensive", cooldown: 10, description: "Create a barrier of negative energy around yourself, granting resistance to necrotic damage and a chance to deal necrotic damage to attackers.", effect: { resistance: "necrotic", damage_to_attackers: "1d6" } },
    "Army of the Damned (Control more undead)": { class: "necromancer", type: "buff", cooldown: 0, description: "You can control a larger number of undead creatures than normal.", effect: { increased_undead_control: "double" } },
    "Soul Cage": { class: "warlock", type: "utility", cooldown: 20, description: "You can use your action to cast the Soul Cage spell without expending a spell slot.", effect: { cast_spell_free: "soul_cage", uses: "1_per_long_rest" } }, // Copy from Warlock
    "Seize Control": { class: "necromancer", type: "control", cooldown: 12, description: "Attempt to take direct, temporary control of an enemy undead creature.", effect: { control_undead: true, duration: "1_min" } },
    "Master's Command": { class: "necromancer", type: "buff", cooldown: 0, description: "Your commands to your undead thralls are more effective, granting them a bonus to attack rolls or damage.", effect: { undead_attack_damage_bonus: "+1", target: "controlled_undead" } },
    "Instant Thrall": { class: "necromancer", type: "summon", cooldown: 14, description: "You can instantly raise a basic undead creature from a nearby corpse as a bonus action.", effect: { summon_undead_bonus_action: true, requires: "corpse" } },
    "Necrotic Overchannel": { class: "necromancer", type: "buff", cooldown: 15, description: "Maximize the necrotic damage of your next spell, but suffer some self-inflicted necrotic damage.", effect: { maximize_necrotic_damage: true, self_damage: "2d6", type: "necrotic" } },
    "Undead Fortitude": { class: "necromancer", type: "buff", cooldown: 0, description: "When your controlled undead take damage that would reduce them to 0 hit points, they can make a Constitution saving throw to drop to 1 hit point instead.", effect: { undead_resilience: true } },
    "Gravemaster's Resilience": { class: "necromancer", type: "defensive", cooldown: 0, description: "You gain resistance to necrotic and poison damage.", effect: { resistance: ["necrotic", "poison"] } },
    "Ghostly Form": { class: "shaman", type: "defensive", cooldown: 13, description: "Temporarily transform into a spectral form, gaining resistance to all non-force damage and the ability to move through objects.", effect: { resistance: "non_force_damage", movement: "pass_through_objects", duration: "1_round" } }, // Copy from Shaman
    "Drain Life (Area)": { class: "necromancer", type: "attack", cooldown: 18, description: "Siphon life force from all living creatures in an area, dealing necrotic damage to them and healing yourself and your undead.", effect: { damage: "4d6", type: "necrotic", healing: "4d6", area: "20ft_radius" } },
    "Necrotic Resistance": { class: "necromancer", type: "buff", cooldown: 0, description: "You gain resistance to necrotic damage.", effect: { resistance: "necrotic" } },
    "Undeath's Embrace": { class: "necromancer", type: "buff", cooldown: 0, description: "You no longer need to eat, drink, or breathe, and you gain advantage on saving throws against disease and poison.", effect: { no_sustenance: true, advantage_disease_poison_saves: true } },
    "Create Abomination": { class: "necromancer", type: "summon", cooldown: 20, description: "You can spend a significant amount of time and resources to stitch together a powerful, unique undead abomination.", effect: { summon_creature: "unique_abomination", requires: "time_and_resources" } },
    "Soul Bind": { class: "necromancer", type: "control", cooldown: 22, description: "You can magically bind a creature's soul, preventing its resurrection or forcing it to answer your questions.", effect: { prevent_resurrection: true, force_answers: true } },
    "Mass Animate Dead": { class: "necromancer", type: "summon", cooldown: 25, description: "You can animate a large number of corpses simultaneously, raising a small army of undead.", effect: { summon_creature: "multiple_undead", num_creatures: "many" } },
    "Aura of Undeath": { class: "necromancer", type: "buff", cooldown: 0, description: "You emanate an aura that bolsters your undead allies, granting them a bonus to attack and damage rolls.", effect: { undead_attack_damage_bonus: "+2", target: "controlled_undead", range: "30ft" } },
    "Taste of Immortality": { class: "necromancer", type: "buff", cooldown: 30, description: "You gain temporary immunity to exhaustion, disease, and poison.", effect: { immunity: ["exhaustion", "disease", "poison"], duration: "1_min" } },
    "Paralyzing Touch": { class: "necromancer", type: "attack", cooldown: 28, description: "Your touch can infuse a creature with necrotic energy, potentially paralyzing them.", effect: { damage: "2d6", type: "necrotic", condition: "paralyzed" } },

    // Illusionist Abilities
    "Minor Conjuration": { class: "illusionist", type: "utility", cooldown: 0, description: "You can conjure a nonmagical object that fits in your hand and weighs no more than 1 pound.", effect: { create_object: "minor_nonmagical" } },
    "Deceiving Presence": { class: "illusionist", type: "buff", cooldown: 0, description: "Your natural presence makes it harder for others to discern your true intentions, granting you advantage on Deception checks.", effect: { bonus: "advantage_deception" } },
    "Reshape Illusion": { class: "illusionist", type: "utility", cooldown: 0, description: "You can use your action to change the nature of an illusion you have created.", effect: { alter_illusion: true } },
    "Illusory Script": { class: "illusionist", type: "utility", cooldown: 0, description: "You can write on any surface, and only you and designated creatures can read it. To others, it appears as random scribbles.", effect: { secret_writing: true } },
    "Path Feature (e.g., Nightmare Weaver)": { class: "illusionist", type: "utility", cooldown: 0, description: "Gain special abilities based on your chosen Path of Deception.", effect: { variable: "path_dependent" } },
    "Fear": { class: "mage", type: "control", cooldown: 0, description: "Project a psychic illusion that causes creatures in a cone to become frightened.", effect: { condition: "frightened", area: "30ft_cone" } }, // Copy from Mage
    "Lasting Image": { class: "illusionist", type: "buff", cooldown: 0, description: "You can extend the duration of a non-concentration illusion spell.", effect: { extend_illusion_duration: true } },
    "Illusory Sound": { class: "illusionist", type: "utility", cooldown: 0, description: "You can create realistic sounds as part of your illusions, making them more convincing.", effect: { create_realistic_sounds: true } },
    "Potent Illusions": { class: "illusionist", type: "buff", cooldown: 0, description: "Your illusions are more convincing, making it harder for creatures to discern them as false.", effect: { illusion_dc_bonus: "+2" } },
    "Distortion Field": { class: "illusionist", type: "control", cooldown: 7, description: "Create a localized area where light and sound are distorted, imposing disadvantage on attack rolls and Perception checks for enemies within.", effect: { area: "15ft_radius", disadvantage_on_rolls: true } },
    "Instantaneous Duplicate": { class: "illusionist", type: "utility", cooldown: 5, description: "As a reaction when attacked, you can create a fleeting illusory duplicate of yourself, causing the attack to target the duplicate instead.", effect: { create_duplicate: true, type: "reaction", target: "attack" } },
    "Beguiling Defense": { class: "illusionist", type: "defensive", cooldown: 6, description: "Your illusions and deceptive tactics make you difficult to pin down, granting you a bonus to AC against a single attack.", effect: { ac_bonus: "+3", duration: "1_attack" } },
    "Complex Illusions": { class: "illusionist", type: "utility", cooldown: 0, description: "You can create illusions that are more intricate and detailed, capable of fooling multiple senses simultaneously.", effect: { illusions_fool_multiple_senses: true } },
    "Sensory Overload": { class: "illusionist", type: "attack", cooldown: 9, description: "Overwhelm a creature's senses with a barrage of illusory input, dealing psychic damage and potentially incapacitating them.", effect: { damage: "3d8", type: "psychic", condition: "incapacitated" } },
    "Persistent Image": { class: "illusionist", type: "buff", cooldown: 0, description: "You can make an illusion last indefinitely until dispelled or revealed.", effect: { permanent_illusion: true } },
    "Aura of Deception": { class: "illusionist", type: "buff", cooldown: 0, description: "You emanate an aura that makes it harder for hostile creatures to distinguish between reality and illusion, granting them disadvantage on checks to disbelieve your illusions.", effect: { disadvantage_to_disbelieve_illusions: true, range: "30ft" } },
    "Inescapable Illusion": { class: "illusionist", type: "control", cooldown: 12, description: "Trap a creature within a personalized illusion from which they cannot escape easily, even if they know it's false.", effect: { condition: "trapped_in_illusion", duration: "1_min" } },
    "Cognitive Dissonance": { class: "illusionist", type: "attack", cooldown: 10, description: "Cause a creature's mind to perceive conflicting realities, dealing psychic damage and imposing a severe mental penalty.", effect: { damage: "4d6", type: "psychic", condition: "severe_mental_penalty" } },
    "Field of Illusions": { class: "illusionist", type: "control", cooldown: 15, description: "Create a large area where reality is distorted by your illusions, making it difficult for enemies to navigate or attack effectively.", effect: { terrain_effect: "illusory_difficult_terrain", disadvantage_on_attacks: true, area: "30ft_radius" } },
    "Make Illusion Real": { class: "illusionist", type: "utility", cooldown: 18, description: "You can temporarily make a non-damaging illusion physically real, allowing it to interact with the environment or provide cover.", effect: { illusion_becomes_real: true, duration: "1_round" } },
    "Solid Shadows": { class: "illusionist", type: "buff", cooldown: 16, description: "Your shadow illusions gain a tangible quality, allowing them to provide limited cover or even deal bludgeoning damage.", effect: { shadows_provide_cover: true, shadows_deal_damage: "1d4" } },
    "Permanent Illusion": { class: "illusionist", type: "utility", cooldown: 0, description: "You can make a single illusion spell permanent until you dismiss it.", effect: { permanent_illusion_single_spell: true } },
    "Misleading Aura": { class: "illusionist", type: "buff", cooldown: 0, description: "You project an aura that causes anyone attempting to scry on you or read your mind to receive false information.", effect: { false_info_on_scry: true, false_info_on_mind_read: true } },
    "Master of a Thousand Faces (At Will)": { class: "illusionist", type: "utility", cooldown: 0, description: "You can cast the alter self spell at will, without expending a spell slot.", effect: { cast_spell_at_will: "alter_self" } },
    "Unwavering Illusions": { class: "illusionist", type: "buff", cooldown: 0, description: "Your illusions are incredibly resilient, granting them resistance to being disbelieved and making them harder to dispel.", effect: { illusions_resistant_to_disbelieve: true, illusions_harder_to_dispel: true } },
    "Instantaneous Reshaping": { class: "illusionist", type: "utility", cooldown: 0, description: "You can change the appearance and nature of an illusion as a bonus action.", effect: { reshape_illusion_bonus_action: true } },
    "Layered Illusions": { class: "illusionist", type: "utility", cooldown: 20, description: "You can create multiple, overlapping illusions simultaneously, making them incredibly complex and difficult to discern from reality.", effect: { multiple_illusions: true, increased_complexity: true } },
    "Lord of Nightmares": { class: "illusionist", type: "attack", cooldown: 22, description: "You can plunge a creature into a personalized nightmare, dealing massive psychic damage and imposing a severe mental condition (e.g., permanent madness).", effect: { damage: "10d8", type: "psychic", condition: "permanent_madness" } },
    "Mirage Master": { class: "illusionist", type: "control", cooldown: 20, description: "You can create a vast, complex mirage that displaces terrain, conceals features, and disorients those who enter it.", effect: { terrain_displacement: true, conceal_features: true, disorient: true, area: "1_mile_radius" } },
    "Perfected Self (Illusion)": { class: "illusionist", type: "buff", cooldown: 25, description: "You can perfectly disguise yourself as any creature or object, and your illusion is almost impossible to break.", effect: { perfect_disguise: true, illusion_nearly_unbreakable: true } },
    "Unreadable Mind": { class: "psychic", type: "defensive", cooldown: 15, description: "Temporarily protect your mind from all forms of mental intrusion and psychic damage.", effect: { immunity: ["mind_reading", "psychic_damage"], duration: "1_min" } }, // Copy from Psychic
    "Indistinguishable Reality": { class: "illusionist", type: "utility", cooldown: 28, description: "You can make an illusion so real that it is impossible for even magical means to distinguish it from true reality.", effect: { illusion_undistinguishable_from_reality: true, bypasses_true_sight: true } },
    "World of Lies": { class: "illusionist", type: "control", cooldown: 30, description: "You reshape reality within a large area with your illusions, fundamentally altering the environment and perceptions of all within it, making them believe anything you desire.", effect: { reshape_reality: "area", manipulate_perceptions: true, area: "120ft_radius" } },

    // Engineer Abilities
    "Create Flashbang": { class: "engineer", type: "control", cooldown: 3, description: "Construct and deploy a flashbang that blinds and deafens creatures in a small area.", effect: { condition: ["blinded", "deafened"], area: "10ft_radius" } },
    "Deploy Caltrops": { class: "rogue", type: "utility", cooldown: 3, description: "Scatter caltrops on the ground to slow and damage enemies who move through them.", effect: { terrain_hazard: "slow_and_damage", area: "5ft_square" } }, // Copy from Rogue
    "Tool Proficiency (Tinker's Tools, Smith's Tools)": { class: "engineer", type: "utility", cooldown: 0, description: "You gain proficiency with Tinker's Tools and Smith's Tools.", effect: { proficiency: ["tinker's_tools", "smith's_tools"] } },
    "Create Basic Automaton": { class: "engineer", type: "summon", cooldown: 5, description: "Construct a simple automaton to serve as a companion or guard.", effect: { summon_creature: "basic_automaton" } },
    "Infuse Weapon/Armor (+1)": { class: "engineer", type: "buff", cooldown: 0, description: "You can temporarily infuse a non-magical weapon or armor, granting it a +1 bonus to attack and damage rolls or AC.", effect: { bonus_to_weapon_armor: "+1", duration: "1_hour" } },
    "Discipline Feature (e.g., Chemist, Mechanist)": { class: "engineer", type: "utility", cooldown: 0, description: "Gain special abilities based on your chosen Engineering Discipline.", effect: { variable: "discipline_dependent" } },
    "Right Tool for the Job": { class: "engineer", type: "utility", cooldown: 0, description: "You always seem to have the right tool for any job, gaining advantage on any ability check that requires a tool you are proficient with.", effect: { advantage_on_tool_checks: true } },
    "Upgrade Automaton": { class: "engineer", type: "buff", cooldown: 6, description: "You can upgrade your automaton, increasing its hit points or damage.", effect: { automaton_hp_damage_bonus: true } },
    "Create Smoke Bomb": { class: "rogue", type: "utility", cooldown: 4, description: "Throw a smoke bomb that creates a cloud of obscuring smoke, allowing for escape or stealth.", effect: { condition: "heavily_obscured", radius: "10ft", duration: "1_round" } }, // Copy from Rogue
    "Automaton Extra Attack": { class: "engineer", type: "buff", cooldown: 0, description: "Your Automaton can attack twice, instead of once, whenever it takes the Attack action on its turn.", effect: { automaton_extra_attack: true } },
    "Concussive Blast": { class: "engineer", type: "attack", cooldown: 7, description: "Unleash a powerful concussive blast from a device, dealing force damage and potentially knocking enemies prone.", effect: { damage: "3d6", type: "force", condition: "prone", area: "15ft_cone" } },
    "Alchemical Formulas": { class: "alchemist", type: "utility", cooldown: 0, description: "You gain access to a wider range of alchemical formulas, allowing you to create more diverse concoctions.", effect: { access_more_formulas: true } }, // Copy from Alchemist
    "Reinforced Automaton Chassis": { class: "engineer", type: "buff", cooldown: 0, description: "Your Automaton's AC permanently increases by 1.", effect: { automaton_permanent_ac_bonus: "+1" } },
    "On-the-Fly Infusions": { class: "engineer", type: "utility", cooldown: 0, description: "You can apply minor infusions to items as a bonus action during combat.", effect: { apply_minor_infusions_bonus_action: true } },
    "Field Modifications": { class: "engineer", type: "utility", cooldown: 0, description: "You can rapidly modify existing gadgets or constructs, altering their function or enhancing their capabilities temporarily.", effect: { modify_gadgets_on_the_fly: true } },
    "Deploy Mini-Turret": { class: "engineer", type: "summon", cooldown: 8, description: "Deploy a small, stationary turret that automatically fires at nearby enemies.", effect: { summon_creature: "mini_turret", attack_range: "30ft" } },
    "Upgrade Automaton (Armor)": { class: "engineer", type: "buff", cooldown: 0, description: "Your Automaton's natural armor bonus increases by 2.", effect: { automaton_ac_bonus: "+2" } },
    "Build Golem (Lesser)": { class: "engineer", type: "summon", cooldown: 12, description: "You can construct a less powerful, temporary golem to follow your commands.", effect: { summon_creature: "lesser_golem", duration: "1_hour" } },
    "Create Grappling Hook Launcher": { class: "engineer", type: "utility", cooldown: 0, description: "Construct a grappling hook launcher that allows for rapid vertical movement.", effect: { vertical_movement: "60ft", tool: "grappling_hook_launcher" } },
    "Cognitive Enhancer (Self)": { class: "engineer", type: "buff", cooldown: 10, description: "Inject yourself with a chemical stimulant that boosts your intellect, granting advantage on Intelligence checks for a short time.", effect: { bonus: "advantage_intelligence_checks", duration: "1_min" } },
    "Automaton Protocol: Defender": { class: "engineer", type: "buff", cooldown: 0, description: "Your Automaton adopts a defensive protocol, focusing on protecting you and your allies by drawing aggro or intercepting attacks.", effect: { automaton_defensive_mode: true, intercept_attacks: true } },
    "Personal Force Field": { class: "engineer", type: "defensive", cooldown: 12, description: "Activate a personal force field that absorbs damage and grants temporary resistance.", effect: { damage_absorption: "4d6", resistance: "all", duration: "1_round" } },
    "Lightning Coil": { class: "engineer", type: "attack", cooldown: 10, description: "Deploy a device that emits a continuous arc of lightning, dealing damage to enemies who start their turn within its radius.", effect: { damage_over_time: "2d6", type: "lightning", area: "10ft_radius" } },
    "Analyze Weakness": { class: "rogue", type: "utility", cooldown: 4, description: "Study an opponent to discover a weakness, granting you or an ally advantage on your next attack against them.", effect: { target: "single", advantage: "next_attack" } }, // Copy from Rogue
    "Deconstruct Device": { class: "engineer", type: "utility", cooldown: 9, description: "You can rapidly disassemble and render inert mechanical devices or constructs.", effect: { disable_devices: true, damage_constructs: true } },
    "Hack Construct": { class: "engineer", type: "control", cooldown: 15, description: "Attempt to override the programming of a hostile construct, turning it to your side or rendering it inert.", effect: { control_construct: true, render_inert: true } },
    "Emergency Repairs": { class: "engineer", type: "healing", cooldown: 0, description: "You can rapidly repair damaged constructs or even heal organic creatures with medical tools.", effect: { heal_constructs: true, heal_organic: true, uses: "1_per_short_rest" } },
    "Create Juggernaut Automaton": { class: "engineer", type: "summon", cooldown: 20, description: "Construct a massive, heavily armored automaton designed for brute force and defense.", effect: { summon_creature: "juggernaut_automaton", high_hp_ac: true } },
    "Elixir of Life": { class: "alchemist", type: "healing", cooldown: 30, description: "Brew a powerful elixir that can cure any disease or poison, restore lost limbs, or even bring a creature back from the brink of death.", effect: { cure_all: true, restore_limbs: true, near_death_healing: true } }, // Copy from Alchemist
    "Attune to Extra Item": { class: "engineer", type: "buff", cooldown: 0, description: "You can attune to one additional magic item.", effect: { extra_attunement_slot: true } },
    "Master of Magic Items": { class: "engineer", type: "utility", cooldown: 0, description: "You understand magic items instinctively, allowing you to identify their properties instantly and use them regardless of class restrictions.", effect: { identify_magic_items_instantly: true, bypass_restrictions: true } },
    "Perfected Design": { class: "engineer", type: "buff", cooldown: 0, description: "All your crafted items and constructs are of superior quality, granting them minor bonuses or enhanced durability.", effect: { superior_craftsmanship: true } },
    "Remote Detonation": { class: "engineer", type: "attack", cooldown: 18, description: "You can remotely detonate any explosive devices you have deployed, creating a powerful area of effect blast.", effect: { trigger_explosives_remotely: true, area_damage: true } },
    "Enter Genius State": { class: "engineer", type: "buff", cooldown: 30, description: "You enter a hyper-focused state of unparalleled intellect, allowing you to devise solutions to complex problems and craft advanced gadgets in moments.", effect: { unparalleled_intellect: true, rapid_invention: true, duration: "1_min" } },
    "Unlimited Gadgets (1 min)": { class: "engineer", type: "buff", cooldown: 30, description: "For a short duration, you can deploy any of your known gadgets without expending resources or adhering to cooldowns.", effect: { unlimited_gadget_use: true, duration: "1_min" } },

    // Alchemist Abilities
    "Create Concoction (e.g., Healing Draught, Acid Flask)": { class: "alchemist", type: "utility", cooldown: 0, description: "You can spend a bonus action to create a simple alchemical concoction (e.g., a healing draught or acid flask).", effect: { create_concoction_bonus_action: true, variable: "choosable_concoction" } },
    "Proficiency: Alchemist's Supplies": { class: "alchemist", type: "utility", cooldown: 0, description: "You gain proficiency with Alchemist's Supplies.", effect: { proficiency: "alchemist's_supplies" } },
    "Choose Bombs, Mutagens, or Elixirs": { class: "alchemist", type: "utility", cooldown: 0, description: "At 2nd level, you choose a primary focus for your alchemical discoveries: Bombs, Mutagens, or Elixirs.", effect: { primary_focus: ["bombs", "mutagens", "elixirs"] } },
    "Precise Bombardment": { class: "alchemist", type: "attack", cooldown: 4, description: "Your thrown alchemical attacks are more accurate, granting you a bonus to attack rolls.", effect: { bonus_to_attack: "+2", type: "thrown_alchemical" } },
    "Field Feature (e.g., Grenadier, Mutagenist)": { class: "alchemist", type: "utility", cooldown: 0, description: "Gain special abilities based on your chosen Alchemical Field.", effect: { variable: "field_dependent" } },
    "Quick Crafting": { class: "alchemist", type: "utility", cooldown: 0, description: "You can craft alchemical items in half the usual time.", effect: { crafting_speed_halved: true } },
    "Improved Formulas": { class: "alchemist", type: "buff", cooldown: 0, description: "The potency of your alchemical concoctions increases, dealing more damage or providing stronger effects.", effect: { concoction_potency_increased: true } },
    "Catalytic Reaction": { class: "alchemist", type: "attack", cooldown: 5, description: "Apply a special reagent to a creature, making them vulnerable to a specific damage type for one turn.", effect: { vulnerability: "choosable_damage_type", duration: "1_turn" } },
    "Add Intelligence modifier to damage/healing": { class: "alchemist", type: "buff", cooldown: 0, description: "When you deal damage or restore hit points with an alchemical concoction, you add your Intelligence modifier to the roll.", effect: { add_int_mod_to_damage_healing: true } },
    "Heightened Effects": { class: "alchemist", type: "buff", cooldown: 6, description: "Your alchemical creations have a higher chance of imposing their conditions or effects, increasing their save DC.", effect: { alchemical_dc_bonus: "+1" } },
    "Directed Blast": { class: "alchemist", type: "attack", cooldown: 8, description: "You can precisely aim your alchemical bombs, allowing them to affect a more specific area or avoid hitting allies.", effect: { precise_aoe: true, avoid_friendly_fire: true } },
    "Feral Mutagen": { class: "alchemist", type: "buff", cooldown: 7, description: "Drink a mutagen that temporarily transforms you into a more beast-like form, granting increased Strength and a bonus to unarmed strikes.", effect: { strength_bonus: "+2", unarmed_damage: "1d6", duration: "1_min" } },
    "Combine Concoctions": { class: "alchemist", type: "utility", cooldown: 9, description: "You can mix two different concoctions together, creating a combined effect.", effect: { combine_effects: true } },
    "Instant Reaction": { class: "alchemist", type: "utility", cooldown: 0, description: "You can craft a basic alchemical item almost instantly, as a bonus action.", effect: { instant_craft_bonus_action: true } },
    "Sticky Bomb": { class: "alchemist", type: "attack", cooldown: 8, description: "Throw a bomb that adheres to a target, dealing ongoing damage or imposing a persistent condition.", effect: { damage_over_time: "1d8", condition: "persistent_condition" } },
    "Cognitive Mutagen": { class: "alchemist", type: "buff", cooldown: 9, description: "Drink a mutagen that enhances your mental faculties, granting a bonus to Intelligence and Wisdom for a short duration.", effect: { intelligence_bonus: "+2", wisdom_bonus: "+2", duration: "1_min" } },
    "Toxicologist": { class: "alchemist", type: "utility", cooldown: 0, description: "You have an advanced understanding of poisons, granting you expertise with poisoner's kits and allowing you to identify poisons instantly.", effect: { expertise_poisoners_kit: true, identify_poisons_instantly: true } },
    "Apply Poison as Bonus Action": { class: "alchemist", type: "utility", cooldown: 0, description: "You can apply poison to a weapon or piece of ammunition as a bonus action.", effect: { apply_poison_bonus_action: true } },
    "The Big One (Massive Bomb)": { class: "alchemist", type: "attack", cooldown: 12, description: "Craft and deploy a massive explosive device that deals devastating damage in a large area.", effect: { damage: "8d6", type: "fire_force", area: "30ft_radius" } },
    "Perfected Mutagen": { class: "alchemist", type: "buff", cooldown: 11, description: "Your mutagens become incredibly potent, granting massive physical or mental enhancements with fewer drawbacks.", effect: { major_stat_bonus: "+4", reduced_drawbacks: true } },
    "Philosopher's Stone (Lesser)": { class: "alchemist", type: "utility", cooldown: 15, description: "You can create a minor version of a philosopher's stone, capable of transmuting a small amount of non-precious material into precious metal or creating a small elixir of healing.", effect: { minor_transmutation: true, minor_healing_elixir: true } },
    "True Mutagen": { class: "alchemist", type: "buff", cooldown: 13, description: "Drink a mutagen that temporarily grants you immunity to a chosen damage type and significant physical enhancement.", effect: { immunity: "choosable_damage_type", physical_enhancement: true, duration: "3_rounds" } },
    "Efficient Alchemy": { class: "alchemist", type: "utility", cooldown: 0, description: "You consume fewer materials when crafting alchemical items.", effect: { reduced_material_cost: "half" } },
    "Enduring Concoctions": { class: "alchemist", type: "buff", cooldown: 0, description: "The effects of your beneficial alchemical concoctions last twice as long.", effect: { doubled_duration: true } },
    "Instant Identification": { class: "alchemist", type: "utility", cooldown: 0, description: "You can instantly identify any potion, poison, or alchemical substance.", effect: { instant_identification: true } },
    "Advantage on saves vs. potions/poisons": { class: "alchemist", type: "defensive", cooldown: 0, description: "You gain advantage on saving throws against the effects of potions and poisons.", effect: { advantage_on_potion_poison_saves: true } },
    "Plague Bomb": { class: "alchemist", type: "attack", cooldown: 20, description: "Throw a bomb that unleashes a virulent plague, afflicting all creatures in an area with a debilitating disease.", effect: { condition: "disease", area: "20ft_radius", duration: "long_term" } },
    "Chimeric Form": { class: "alchemist", type: "buff", cooldown: 22, description: "Drink a mutagen that temporarily transforms you into a monstrous hybrid form, gaining multiple natural attacks and immunities.", effect: { multiple_natural_attacks: true, immunity: "bludgeoning_piercing_slashing", duration: "1_min" } },
    "Complete Toxin Immunity": { class: "alchemist", type: "buff", cooldown: 0, description: "You become completely immune to all forms of poison damage and the poisoned condition.", effect: { immunity: ["poison_damage", "poisoned_condition"] } },
    "Panacea Elixir": { class: "alchemist", type: "healing", cooldown: 25, description: "Brew a universal cure that can instantly remove any disease, poison, or curse from a creature.", effect: { cure_all_ailments: true } },
    "Perfected Formulas": { class: "alchemist", type: "buff", cooldown: 0, description: "Your alchemical formulas are perfected, ensuring maximum potency and reliability for all your creations.", effect: { maximize_all_concoctions: true } },
    "Spontaneous Alchemy": { class: "alchemist", type: "utility", cooldown: 20, description: "You can create any common alchemical item instantly from readily available materials, without needing a crafting kit.", effect: { instant_craft_common_items: true, no_kit_needed: true } },
    "Create Ultimate Elixir": { class: "alchemist", type: "healing", cooldown: 30, description: "You can brew a single, legendary Elixir of Life, granting permanent youth, curing all ailments, and granting resistance to all damage.", effect: { permanent_youth: true, cure_all_ailments: true, resistance_all_damage: true, uses: "1_per_campaign" } },
    "Halt Aging, Cure All Ailments": { class: "alchemist", type: "buff", cooldown: 0, description: "You gain immunity to magical aging, disease, and poison.", effect: { immunity: ["magical_aging", "disease", "poison"] } },

    // Scholar Abilities
    "Keen Mind": { class: "scholar", type: "utility", cooldown: 0, description: "You have an exceptional memory and can recall anything you have seen or heard, gaining advantage on Intelligence (Recall) checks.", effect: { perfect_memory_recall: true } },
    "Know-It-All": { class: "scholar", type: "utility", cooldown: 0, description: "You are proficient in a wide range of academic subjects, and when you make an Intelligence (History, Arcana, Nature, or Religion) check, you can add half your proficiency bonus to the roll, if you aren't already proficient in the skill.", effect: { half_proficiency_bonus: true, skills: ["history", "arcana", "nature", "religion"] } },
    "Grant Advantage": { class: "scholar", type: "buff", cooldown: 4, description: "Through your keen insight, you can grant an ally advantage on their next attack roll, ability check, or saving throw.", effect: { target: "ally", advantage_on_next_roll: true } },
    "Impose Disadvantage": { class: "scholar", type: "control", cooldown: 4, description: "You can verbally or subtly distract an enemy, imposing disadvantage on their next attack roll or saving throw.", effect: { target: "enemy", disadvantage_on_next_roll: true } },
    "Guide Action": { class: "scholar", type: "buff", cooldown: 5, description: "You can guide an ally's actions with precise instructions, allowing them to reroll a failed attack roll or ability check.", effect: { target: "ally", reroll_failed_roll: true } },
    "Pursuit Feature (e.g., Strategist, Historian, Chirurgeon)": { class: "scholar", type: "utility", cooldown: 0, description: "Gain special abilities based on your chosen Scholarly Pursuit.", effect: { variable: "pursuit_dependent" } },
    "Critical Analysis": { class: "scholar", type: "utility", cooldown: 0, description: "You can quickly analyze a situation or opponent, discovering critical information or vulnerabilities.", effect: { discover_vulnerabilities: true, gain_info: true } },
    "Educated Guess": { class: "scholar", type: "utility", cooldown: 3, description: "You can make an educated guess about a situation, gaining a bonus to a relevant skill check.", effect: { bonus_to_skill_check: "+1d4" } },
    "Quick Study": { class: "scholar", type: "utility", cooldown: 0, description: "You can learn new information or techniques at an accelerated rate, gaining temporary proficiency in a skill or tool.", effect: { temporary_proficiency: true } },
    "Bolster Ally": { class: "scholar", type: "buff", cooldown: 6, description: "Provide a verbal or written pep talk, granting an ally temporary hit points and a bonus to damage on their next hit.", effect: { temp_hp: "1d10", bonus_damage_next_hit: "+1d6", target: "ally" } },
    "Redirect Foe": { class: "scholar", type: "control", cooldown: 7, description: "Subtly influence an enemy's movements or focus, causing them to move to a more advantageous position for your allies, or to target a different creature.", effect: { redirect_movement: true, redirect_target: true } },
    "Battlefield Commands": { class: "scholar", type: "buff", cooldown: 8, description: "Issue clear, concise commands that grant allies extra movement or a bonus to AC for a round.", effect: { extra_movement: true, ac_bonus: "+1", target: "allies" } },
    "Rediscover Lore": { class: "scholar", type: "utility", cooldown: 0, description: "You can recall obscure or forgotten lore, revealing hidden truths or solutions to ancient puzzles.", effect: { recall_obscure_lore: true } },
    "Anatomical Precision": { class: "alchemist", type: "buff", cooldown: 0, description: "Your knowledge of anatomy allows you to target vital points, increasing your critical hit damage.", effect: { crit_damage_bonus: "+1d6" } }, // Copy from Alchemist
    "Add Intelligence to Saves": { class: "scholar", type: "buff", cooldown: 0, description: "You can add your Intelligence modifier to all your saving throws.", effect: { add_int_to_saves: true } },
    "Logical Fortitude": { class: "scholar", type: "defensive", cooldown: 0, description: "Your logical mind makes you highly resistant to mental assaults, granting you advantage on Intelligence and Wisdom saving throws against mind-affecting effects.", effect: { advantage_on_mental_saves: true } },
    "Exploit Pattern": { class: "scholar", type: "attack", cooldown: 9, description: "Identify and exploit a repeating pattern in an enemy's behavior or attack, granting you advantage on your next attack against them.", effect: { advantage_on_next_attack: true, target: "enemy" } },
    "Predictive Analysis": { class: "scholar", type: "utility", cooldown: 0, description: "You can predict likely outcomes based on observed data, granting you a bonus to initiative and a slight edge in strategic planning.", effect: { bonus_to_initiative: "+2", strategic_advantage: true } },
    "Master of Lore": { class: "scholar", type: "utility", cooldown: 0, description: "You are a master of all forms of lore, granting you expertise in all Intelligence-based skills.", effect: { expertise_all_int_skills: true } },
    "Unassailable Knowledge": { class: "scholar", type: "buff", cooldown: 0, description: "Your knowledge is so vast and interconnected that you cannot be charmed or frightened by effects that rely on manipulating information or fear.", effect: { immunity: ["charmed_by_information", "frightened_by_fear_manipulation"] } },
    "Cunning Ploy": { class: "scholar", type: "control", cooldown: 12, description: "You devise a clever trick or deception that causes enemies to turn on each other or fall into a trap.", effect: { cause_friendly_fire: true, lure_into_trap: true } },
    "Uncover Truth": { class: "scholar", type: "utility", cooldown: 10, description: "You can instantly discern lies, uncover hidden motives, or reveal concealed information.", effect: { discern_lies: true, reveal_hidden_info: true } },
    "Miraculous Remedy": { class: "scholar", type: "healing", cooldown: 11, description: "You can apply your knowledge of anatomy and medicine to perform a miraculous healing, curing all diseases, poisons, and one debilitating condition.", effect: { cure_all_ailments: true, remove_one_condition: true } },
    "Socratic Method": { class: "scholar", type: "control", cooldown: 13, description: "Engage a creature in a complex philosophical argument or series of questions, confusing and debilitating them.", effect: { condition: "confused_or_debilitated", duration: "1_round" } },
    "Dismissive Rebuke": { class: "scholar", type: "control", cooldown: 12, description: "You can deliver a scathing verbal rebuke that makes an enemy feel insignificant, imposing disadvantage on their attacks or ability checks against you.", effect: { disadvantage_on_attacks_against_you: true, duration: "1_round" } },
    "Formulate Strategy": { class: "scholar", type: "buff", cooldown: 15, description: "You can spend a minute formulating a battle strategy, granting your allies a significant combat bonus for the duration of the encounter.", effect: { bonus_to_all_rolls: "+2", duration: "encounter" } },
    "Grant Party-Wide Bonus": { class: "scholar", type: "buff", cooldown: 0, description: "You can grant a chosen bonus (e.g., +1 to attack rolls, +1 to AC, or temporary hit points) to all allies within range.", effect: { bonus_to_all_allies: true, choosable_bonus: true, range: "30ft" } },
    "Checkmate": { class: "scholar", type: "attack", cooldown: 20, description: "You've analyzed every possible move, setting up a perfect 'checkmate' that instantly incapacitates a single opponent who fails a saving throw.", effect: { instant_incapacitation: true, target: "single" } },
    "Reveal Forbidden Lore": { class: "scholar", type: "utility", cooldown: 22, description: "You can delve into forbidden knowledge, revealing dark secrets, ancient evils, or forgotten rituals, but at a potential cost to your sanity.", effect: { reveal_forbidden_knowledge: true, potential_cost: true } },
    "Restore Life": { class: "cleric", type: "healing", cooldown: 20, description: "Bring a dead creature back to life, provided it hasn't been dead for too long and its body is mostly intact.", effect: { revive_dead: true, limitations: "time_body_intact" } }, // Copy from Cleric
    "Immunity to Intelligence Reduction": { class: "scholar", type: "buff", cooldown: 0, description: "You are immune to any effect that would reduce your Intelligence score.", effect: { immunity: "intelligence_reduction" } },
    "Mind Palace": { class: "psychic", type: "utility", cooldown: 0, description: "Create an intricate mental construct where you can store memories, perform complex calculations, and retreat for mental solitude.", effect: { perfect_memory: true, accelerated_thought: true } }, // Copy from Psychic
    "Perfect Recall": { class: "psychic", type: "utility", cooldown: 0, description: "Instantly recall any information you have ever perceived or learned.", effect: { perfect_recall: true } }, // Copy from Psychic
    "Foresee Danger": { class: "scholar", type: "utility", cooldown: 0, description: "You have a natural intuition for danger, granting you advantage on initiative rolls and preventing you from being surprised.", effect: { advantage_on_initiative: true, immunity: "surprised" } },
    "Omniscience (1 min)": { class: "mage", type: "buff", cooldown: 30, description: "Your mind transcends mortal limits, granting unparalleled insight, raw psionic power, and temporary omniscience.", effect: { intelligence_bonus: "+5", wisdom_bonus: "+5", omniscience: "limited_time", duration: "1_min" } }, // Copy from Mage
};

export const featDefinitions = {
    // Warrior Feats
    "Weapon Mastery": { class: "warrior", level: 1, description: "Gain proficiency with all martial weapons and +1 to attack rolls with one chosen weapon type." },
    "Armor Expertise": { class: "warrior", level: 2, description: "No disadvantage on Stealth from medium armor. Heavy armor weight counts as half." },
    "Combat Reflexes": { class: "warrior", level: 3, description: "You can make an additional number of opportunity attacks per round equal to your Dexterity modifier (min 1)." },
    "Improved Critical": { class: "warrior", level: 4, description: "Your weapon attacks score a critical hit on a roll of 19-20." },
    "Master Warrior": { class: "warrior", level: 5, description: "Choose two combat abilities. Their cooldowns are reduced by 1 round (min 1)." },
    "Heavy Armor Master": { class: "warrior", level: 6, description: "While wearing heavy armor, bludgeoning, piercing, and slashing damage you take from nonmagical weapons is reduced by 3." },
    "Dual Wielding Adept": { class: "warrior", level: 7, description: "You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one. +1 AC while wielding two weapons." },
    "Shield Wall Expert": { class: "warrior", level: 8, description: "If you take the Dodge action while using a shield, allies within 5ft gain +2 AC until your next turn." },
    "Great Weapon Master": { class: "warrior", level: 9, description: "Before you make a melee attack with a heavy weapon, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage." },
    "Polearm Master": { class: "warrior", level: 10, description: "When you take the Attack action with only a glaive, halberd, quarterstaff, or spear, you can use a bonus action to make a melee attack with the opposite end (1d4 bludgeoning)." },
    "Blade Master": { class: "warrior", level: 11, description: "When wielding a sword, you gain +1 to attack and damage rolls. You can parry, adding your proficiency bonus to AC against one melee attack as a reaction." },
    "Sentinel": { class: "warrior", level: 12, description: "When you hit a creature with an opportunity attack, its speed becomes 0 for the rest of the turn. Creatures provoke OAs from you even if they take the Disengage action." },
    "Resilient Warrior": { class: "warrior", level: 13, description: "Choose one ability score. Gain +1 to it and proficiency in saving throws using that ability score." },
    "Inspiring Leader": { class: "warrior", level: 14, description: "Spend 10 minutes inspiring your companions, granting up to six creatures (including yourself) temporary hit points equal to your level + Charisma modifier." },
    "Tough as Nails": { class: "warrior", level: 15, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Legendary Warrior": { class: "warrior", level: 16, description: "Once per long rest, you can reroll a failed attack roll, ability check, or saving throw. You must use the new roll." },
    "Unbreakable Will": { class: "warrior", level: 17, description: "You have advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep." },

    // Mage Feats
    "Spell Power": { class: "mage", level: 1, description: "When you cast a spell that deals damage, add your Intelligence modifier to one damage roll of that spell." },
    "Metamagic Adept": { class: "mage", level: 2, description: "Learn two Metamagic options from the Sorcerer list. Gain 2 sorcery points to use them (regain on long rest)." },
    "Arcane Scholar": { class: "mage", level: 3, description: "You learn two additional spells of any level you can cast. These do not count against your number of spells known/prepared." },
    "Spell Critical": { class: "mage", level: 4, description: "Your damaging spells score a critical hit on a roll of 19-20 on the spell attack roll." },
    "Grand Magus": { class: "mage", level: 5, description: "Choose one school of magic. Spells from that school cost 1 less spell slot level to cast (min 1st level slot, or cantrip remains cantrip). Max spell level 5th." },
    "Elemental Adept (Fire)": { class: "mage", level: 6, description: "Spells you cast ignore resistance to damage of the chosen type (Fire). In addition, when you roll damage for a spell that deals Fire damage, treat any 1 on a damage die as a 2." },
    "Elemental Adept (Cold)": { class: "mage", level: 11, description: "Spells you cast ignore resistance to damage of the chosen type (Cold). In addition, when you roll damage for a spell that deals Cold damage, treat any 1 on a damage die as a 2." },
    "War Caster": { class: "mage", level: 7, description: "Advantage on Con saves to maintain concentration. Can perform somatic components even with weapons/shield in hands. Can cast a spell as an opportunity attack." },
    "Potent Cantrips": { class: "mage", level: 8, description: "Your damaging cantrips affect even creatures that succeed on saving throws. These creatures take half damage but suffer no additional effects." },
    "Heightened Spell": { class: "mage", level: 9, description: "Once per long rest, when you cast a spell that forces a creature to make a saving throw to resist its effects, you can give one target of the spell disadvantage on its first saving throw made against the spell." },
    "Twinned Spell": { class: "mage", level: 10, description: "Once per long rest, when you cast a spell that targets only one creature and doesn’t have a range of self, you can target a second creature in range with the same spell (1st to 5th level spells)." },
    "Spell Sniper": { class: "mage", level: 11, description: "Your ranged spell attacks ignore half cover and three-quarters cover. Double the range of your ranged spell attacks." },
    "Careful Spell": { class: "mage", level: 12, description: "Once per long rest, when you cast a spell that forces other creatures to make a saving throw, you can choose a number of them equal to 1 + spell's level. These creatures automatically succeed." },
    "Subtle Spell": { class: "mage", level: 13, description: "Once per long rest, you can cast a spell without any somatic or verbal components (1st to 5th level spells)." },
    "Distant Spell": { class: "mage", level: 14, description: "Once per long rest, when you cast a spell that has a range of 5 feet or greater, you can double the range of the spell. If range is Touch, make it 30 feet." },
    "Empowered Spell": { class: "mage", level: 15, description: "Once per long rest, when you roll damage for a spell, you can reroll a number of the damage dice up to your spellcasting ability modifier (minimum of one). You must use the new rolls." },
    "Archmage's Boon": { class: "mage", level: 16, description: "You gain one additional spell slot of 6th level and one of 7th level." },

    // Rogue Feats
    "Light Fingers": { class: "rogue", level: 1, description: "You gain proficiency in Sleight of Hand. If already proficient, double your proficiency bonus for checks made with it. +5ft movement." },
    "Nimble Escape": { class: "rogue", level: 2, description: "You can take the Disengage or Hide action as a bonus action on each of your turns." },
    "Assassinate": { class: "rogue", level: 3, description: "Advantage on attack rolls against any creature that hasn’t taken a turn in combat yet. Any hit you score against a surprised creature is a critical hit." },
    "Improved Sneak Attack (Minor)": { class: "rogue", level: 4, description: "Your Sneak Attack deals an additional 1d6 damage." },
    "Master Thief": { class: "rogue", level: 5, description: "You can use the bonus action granted by Cunning Action to make a Dexterity (Sleight of Hand) check, use thieves' tools to disarm a trap or open a lock, or take the Use an Object action." },
    "Skulker": { class: "rogue", level: 6, description: "You can try to hide when you are lightly obscured. When hidden, missing with a ranged weapon attack doesn't reveal your position." },
    "Deadly Aim": { class: "rogue", level: 7, description: "Before making a ranged attack with a finesse weapon, you can choose to take a -5 penalty to hit for +10 damage." },
    "Agile Parry": { class: "rogue", level: 8, description: "When wielding a finesse weapon and no shield, you can use your reaction to add your proficiency bonus to your AC against one melee attack." },
    "Infiltrator": { class: "rogue", level: 9, description: "You can spend one minute to create a disguise. You have advantage on Charisma (Deception) checks made to pass yourself off as a different person." },
    "Opportunist": { class: "rogue", level: 10, description: "When a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature." },
    "Unseen Assailant": { class: "rogue", level: 11, description: "If you are hidden from a creature when you hit it with an attack, it has disadvantage on attack rolls against you until the end of your next turn." },
    "Dagger Master": { class: "rogue", level: 12, description: "You gain a +1 bonus to attack and damage rolls made with daggers. You can draw a dagger as part of the attack you make with it." },
    "Master Ambusher": { class: "rogue", level: 13, description: "If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6 damage." },
    "Evasive Footwork": { class: "rogue", level: 14, description: "When you move, you can use your bonus action to impose disadvantage on opportunity attacks against you for that turn." },
    "Legendary Sneak": { class: "rogue", level: 15, description: "You have advantage on Dexterity (Stealth) checks if you move no more than half your speed on the same turn." },
    "Quick Fingers": { class: "rogue", level: 16, description: "You can use thieves' tools to attempt to pick a lock or disarm a trap as a bonus action." },
    "Shadow Lord": { class: "rogue", level: 17, description: "When in dim light or darkness, you can use an action to become invisible. You remain invisible as long as you are in dim light or darkness, or until you attack or cast a spell." },

    // Ranger Feats
    "Precise Shot": { class: "ranger", level: 1, description: "Ranged attacks ignore half cover and three-quarters cover." },
    "Archery Master": { class: "ranger", level: 2, description: "You gain a +2 bonus to attack rolls you make with ranged weapons." },
    "Nature's Ally": { class: "ranger", level: 3, description: "Your animal companion's hit point maximum increases by your ranger level. It also adds your proficiency bonus to its damage rolls." },
    "Improved Favored Enemy": { class: "ranger", level: 4, description: "Choose one of your favored enemy types. You gain +2 damage against them and advantage on Intelligence (Investigation) checks related to them." },
    "Master Ranger": { class: "ranger", level: 5, description: "You become proficient in one additional skill from the ranger skill list and gain expertise with one ranger skill you are proficient in." },
    "Mounted Combatant": { class: "ranger", level: 6, description: "Advantage on melee attacks against unmounted creatures smaller than your mount. You can force an attack targeted at your mount to target you instead." },
    "Alert": { class: "ranger", level: 7, description: "+5 bonus to initiative. You can't be surprised while conscious. Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you." },
    "Sharpshooter": { class: "ranger", level: 8, description: "Attacking at long range doesn't impose disadvantage. Ranged weapon attacks ignore half/three-quarters cover. Before a ranged attack, take -5 to hit for +10 damage." },
    "Skilled (Nature Focus)": { class: "ranger", level: 9, description: "Gain proficiency in any combination of three skills or tools. Two must be Nature, Survival, or Herbalism Kit." },
    "Resilient (Dexterity)": { class: "ranger", level: 10, description: "Increase your Dexterity score by 1, to a maximum of 20. You gain proficiency in Dexterity saving throws." },
    "Crossbow Expert": { class: "ranger", level: 11, description: "Ignore loading property of crossbows. Being within 5ft of hostile creature doesn't impose disadvantage on ranged attack rolls. When you use Attack action with one-handed weapon, can attack with loaded hand crossbow as bonus action." },
    "Mobile": { class: "ranger", level: 12, description: "Your speed increases by 10 feet. When you use the Attack action, if you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn." },
    "Dual Wielder": { class: "ranger", level: 13, description: "+1 AC while wielding a separate melee weapon in each hand. Can use two-weapon fighting even if one-handed melee weapons aren't light. Can draw/stow two one-handed weapons when you'd normally draw/stow one." },
    "Savage Attacker": { class: "ranger", level: 14, description: "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total." },
    "Tough": { class: "ranger", level: 15, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Lucky": { class: "ranger", level: 16, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest." },
    "Legendary Ranger": { class: "ranger", level: 17, description: "Choose two of the following: +10ft speed, +2 initiative, advantage on Survival checks, your Animal Companion gains +2 AC and HP equal to your Ranger level." },

    // Psychic Feats
    "Mind Reader": { class: "psychic", level: 1, description: "You can cast Detect Thoughts once per day without expending a spell slot." },
    "Psionic Fortitude": { class: "psychic", level: 2, description: "You have resistance to psychic damage and advantage on saves against mental effects." },
    "Telepathic Link": { class: "psychic", level: 3, description: "You can establish a telepathic link with willing creatures within 30 feet." },
    "Focused Mind": { class: "psychic", level: 4, description: "You have advantage on Constitution saves to maintain concentration on psionic abilities." },
    "Empowered Psionics": { class: "psychic", level: 5, description: "Your psionic abilities deal +1 damage per die rolled." },
    "War Caster (Mental)": { class: "psychic", level: 6, description: "You can cast psionic abilities as opportunity attacks and have advantage on concentration saves." },
    "Metamagic Adept (Psionic)": { class: "psychic", level: 7, description: "Learn two Metamagic options from the Sorcerer list that can be applied to your psionic abilities. Gain 2 sorcery points to use them (regain on long rest)." },
    "Resilient (Wisdom)": { class: "psychic", level: 8, description: "Increase your Wisdom score by 1, to a maximum of 20. You gain proficiency in Wisdom saving throws." },
    "Master Telepath": { class: "psychic", level: 9, description: "You can communicate telepathically with any creature you can see within 60 feet. The creature doesn't need to share a language with you." },
    "Alert": { class: "psychic", level: 10, description: "+5 bonus to initiative. You can't be surprised while conscious. Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you." },
    "Heightened Psionics": { class: "psychic", level: 11, description: "Once per long rest, when you use a psionic ability that forces a creature to make a saving throw, you can give one target of the ability disadvantage on its first saving throw made against it." },
    "Lucky": { class: "psychic", level: 12, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest." },
    "Telekinetic Master": { class: "psychic", level: 13, description: "You can move objects weighing up to 500 pounds with your mind. You can also use your action to cast the Telekinesis spell once without expending a spell slot." },
    "True Sight (Psionic)": { class: "psychic", level: 14, description: "You can see through illusions and shapechanging for 10 minutes once per day, as if under the effect of the True Seeing spell." },
    "Unshakable Mind": { class: "psychic", level: 15, description: "You are immune to being charmed or frightened." },
    "Master of Reality": { class: "psychic", level: 16, description: "Once per day, you can alter reality in a minor way as if casting the Wish spell, limited to its simpler effects (creating nonmagical items, removing conditions, etc.)." },
    "Psionic Godhood": { class: "psychic", level: 17, description: "Your mental powers transcend mortal limitations, granting you immense control over psychic energy. You can cast Power Word Kill once per long rest without expending a spell slot." },

    // Paladin Feats
    "Divine Vigor": { class: "paladin", level: 1, description: "Your divine energy grants you resistance to necrotic damage." },
    "Heavy Armor Adept": { class: "paladin", level: 2, description: "You can don or doff heavy armor in half the time and sleep in heavy armor without penalty." },
    "Oathkeeper's Resolve": { class: "paladin", level: 3, description: "You have advantage on saving throws against being charmed or frightened." },
    "Improved Divine Smite (Minor)": { class: "paladin", level: 4, description: "Your Divine Smite deals an additional 1d8 radiant damage." },
    "Radiant Soul": { class: "paladin", level: 5, description: "You have resistance to radiant damage. Additionally, when you restore hit points with a spell, you restore an additional number of hit points equal to your Charisma modifier." },
    "Shield Master": { class: "paladin", level: 6, description: "If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield. If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect." },
    "Inspiring Leader": { class: "paladin", level: 7, description: "Spend 10 minutes inspiring your companions, granting up to six creatures (including yourself) temporary hit points equal to your level + Charisma modifier." },
    "Sentinel": { class: "paladin", level: 8, description: "When you hit a creature with an opportunity attack, its speed becomes 0 for the rest of the turn. Creatures provoke OAs from you even if they take the Disengage action." },
    "Divine Fortitude": { class: "paladin", level: 9, description: "When you use Lay on Hands, you can also cure one disease or neutralize one poison for every 5 hit points expended." },
    "Tough": { class: "paladin", level: 10, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Resilient (Constitution)": { class: "paladin", level: 11, description: "Increase your Constitution score by 1, to a maximum of 20. You gain proficiency in Constitution saving throws." },
    "Martial Adept": { class: "paladin", level: 12, description: "You learn two maneuvers of your choice from the Battle Master fighter archetype. You gain one superiority die, which is a d6. This die is used to fuel your maneuvers. It is expended when you use it. You regain your expended superiority dice when you finish a short or long rest." },
    "Master of Auras": { class: "paladin", level: 13, description: "The range of your paladin auras increases by 5 feet, to a maximum of 15 feet." },
    "War Caster": { class: "paladin", level: 14, description: "Advantage on Con saves to maintain concentration. Can perform somatic components even with weapons/shield in hands. Can cast a spell as an opportunity attack." },
    "Legendary Resistance (1/day)": { class: "paladin", level: 15, description: "If you fail a saving throw, you can choose to succeed instead (once per day)." },
    "Unbreakable Will": { class: "paladin", level: 16, description: "You have advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep." },
    "Champion of the Gods": { class: "paladin", level: 17, description: "You gain the ability to channel divinity one additional time per rest. Your divine smites deal an extra die of damage." },

    // Bard Feats
    "Stage Presence": { class: "bard", level: 1, description: "You gain proficiency in Performance. If already proficient, double your proficiency bonus for checks made with it. You have advantage on Charisma (Performance) checks to win over a crowd." },
    "Versatile Performer": { class: "bard", level: 2, description: "You learn one additional cantrip of your choice from any spell list. Your Bardic Inspiration dice can be used to add to Charisma (Performance) checks as well as attack rolls, ability checks, and saving throws." },
    "College Initiate": { class: "bard", level: 3, description: "You gain one additional skill proficiency from your Bard College's list, and your proficiency bonus is doubled for any ability check you make that uses that proficiency." },
    "War Caster": { class: "bard", level: 4, description: "Advantage on Con saves to maintain concentration. Can perform somatic components even with weapons/shield in hands. Can cast a spell as an opportunity attack." },
    "Inspiring Leader": { class: "bard", level: 5, description: "Spend 10 minutes inspiring your companions, granting up to six creatures (including yourself) temporary hit points equal to your level + Charisma modifier." },
    "Adept Negotiator": { class: "bard", level: 6, description: "You have advantage on Charisma (Persuasion) checks made to negotiate or de-escalate a conflict. You also gain proficiency in Persuasion if you don't already have it." },
    "Profound Knowledge": { class: "bard", level: 7, description: "You learn two additional skills of your choice. When you make an Intelligence (History), Intelligence (Arcana), or Intelligence (Religion) check, you can add your Charisma modifier to the roll." },
    "Resilient (Constitution)": { class: "bard", level: 8, description: "Increase your Constitution score by 1, to a maximum of 20. You gain proficiency in Constitution saving throws." },
    "Skilled": { class: "bard", level: 9, description: "You gain proficiency in any combination of three skills or tools of your choice." },
    "Master Orator": { class: "bard", level: 10, description: "You have advantage on all Charisma (Performance) and Charisma (Persuasion) checks. Once per long rest, you can choose to succeed on one such check automatically." },
    "Legendary Performer": { class: "bard", level: 11, description: "Your Bardic Inspiration die becomes a d12. When you use your Bardic Inspiration, you can choose to regain one expended use of Bardic Inspiration." },
    "Tough": { class: "bard", level: 12, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Worldly Knowledge": { class: "bard", level: 13, description: "You gain proficiency in two additional languages of your choice. You have advantage on Intelligence (History) checks related to cultures and civilizations you have studied." },
    "Master of Disguise": { class: "bard", level: 14, description: "You can cast the Disguise Self spell at will, without expending a spell slot. You also gain proficiency with the Disguise Kit if you don't already have it, and your proficiency bonus is doubled for any ability check you make that uses it." },
    "Silver Tongue": { class: "bard", level: 15, description: "You gain expertise in Deception and Persuasion. Your Charisma score increases by 1, to a maximum of 20." },
    "Lucky": { class: "bard", level: 16, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest." },
    "God of Music": { class: "bard", level: 17, description: "Your musical prowess is legendary. You can cast any spell from the bard spell list without expending a spell slot once per long rest." },

    // Cleric Feats
    "Faithful Servant": { class: "cleric", level: 1, description: "Your Divine Domain grants you resistance to one damage type associated with your deity (e.g., Radiant, Necrotic, Fire)." },
    "Armor Proficiency (Heavy)": { class: "cleric", level: 2, description: "You gain proficiency with heavy armor." },
    "Healer's Touch": { class: "cleric", level: 3, description: "When you cast a spell that restores hit points, you restore an additional number of hit points equal to your Wisdom modifier." },
    "War Caster": { class: "cleric", level: 4, description: "Advantage on Con saves to maintain concentration. Can perform somatic components even with weapons/shield in hands. Can cast a spell as an opportunity attack." },
    "Divine Inspiration": { class: "cleric", level: 5, description: "Your Lay on Hands pool increases by your Wisdom modifier × your level." },
    "Improved Turning": { class: "cleric", level: 6, description: "Your Turn Undead feature affects creatures of higher Challenge Rating. (CR increases by 1/2)." },
    "Radiant Soul": { class: "cleric", level: 7, description: "You have resistance to radiant damage and your healing spells restore additional hit points." },
    "Resilient (Constitution)": { class: "cleric", level: 8, description: "Increase your Constitution score by 1, to a maximum of 20. You gain proficiency in Constitution saving throws." },
    "Potent Spellcasting": { class: "cleric", level: 9, description: "You can add your Wisdom modifier to the damage roll of any cleric cantrip." },
    "Beacon of Faith": { class: "cleric", level: 10, description: "When you use Channel Divinity, you can choose one additional effect or creature to be affected, if applicable." },
    "Master Healer": { class: "cleric", level: 11, description: "When you cast a healing spell, you treat any 1s or 2s on a healing die as a 3." },
    "Tough": { class: "cleric", level: 12, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Shield of the Devout": { class: "cleric", level: 13, description: "You gain +1 AC when wielding a shield. When an ally within 5ft is targeted by an attack, you can use your reaction to impose disadvantage on that attack." },
    "Divine Archon": { class: "cleric", level: 14, description: "Your presence radiates divine power. Creatures hostile to you within 10 feet have disadvantage on saving throws against your spells and Channel Divinity features." },
    "Unwavering Devotion": { class: "cleric", level: 15, description: "You are immune to being charmed or frightened. You also have advantage on saving throws against effects that would make you unwilling to act on your deity's behalf." },
    "Lucky": { class: "cleric", level: 16, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest." },
    "Saint of the Masses": { class: "cleric", level: 17, description: "Your Divine Intervention feature always succeeds, regardless of the difficulty, and you can use it once per long rest." },

    // Druid Feats
    "Natural Attunement": { class: "druid", level: 1, description: "You gain proficiency in one additional skill from the druid skill list. You can use a druidic focus as a spellcasting focus for any spell." },
    "Beast Form Adept": { class: "druid", level: 2, description: "You gain one additional use of Wild Shape per rest. The maximum Challenge Rating of beasts you can transform into increases by 1/2." },
    "Herbalist": { class: "druid", level: 3, description: "You gain proficiency with the Herbalism Kit. You can craft potions of healing at half the normal cost and time." },
    "Elemental Adept (Nature)": { class: "druid", level: 4, description: "Spells you cast that deal Acid, Cold, Fire, Lightning, or Thunder damage ignore resistance to that damage type. In addition, when you roll damage for a spell that deals one of those damage types, you can treat any 1 on a damage die as a 2." },
    "Primal Power": { class: "druid", level: 5, description: "When you cast a spell that deals damage, you can add your Wisdom modifier to one damage roll of that spell. When you Wild Shape, you gain temporary hit points equal to your Wisdom modifier." },
    "Improved Wild Shape": { class: "druid", level: 6, description: "You can use Wild Shape as a bonus action. The maximum Challenge Rating of beasts you can transform into increases by 1." },
    "Master of the Wild": { class: "druid", level: 7, description: "You have advantage on Wisdom (Survival) checks to track creatures and Wisdom (Nature) checks related to natural environments. You move through nonmagical difficult terrain without penalty." },
    "Resilient (Constitution)": { class: "druid", level: 8, description: "Increase your Constitution score by 1, to a maximum of 20. You gain proficiency in Constitution saving throws." },
    "Elemental Mastery": { class: "druid", level: 9, description: "Choose one elemental damage type (Acid, Cold, Fire, Lightning, or Thunder). Spells you cast that deal this damage type deal an extra die of damage." },
    "Archdruid's Blessing": { class: "druid", level: 10, description: "You can cast a 1st or 2nd level druid spell at will without expending a spell slot (choose two spells when you gain this feat)." },
    "Lord of the Beasts": { class: "druid", level: 11, description: "When you use your Wild Shape feature, you can transform into a beast with a flying speed, regardless of your current Druid Circle. Your summoned beasts gain temporary hit points equal to your druid level when summoned." },
    "Tough": { class: "druid", level: 12, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Spirit Walker": { class: "druid", level: 13, description: "You can cast Etherealness once per long rest without expending a spell slot. While in the Ethereal Plane, you can see and hear into the Material Plane." },
    "Nature's Champion": { class: "druid", level: 14, description: "You can use your Wild Shape an unlimited number of times per short or long rest. Your summoned creatures gain a bonus to attack and damage rolls equal to your proficiency bonus." },
    "Avatar of Nature": { class: "druid", level: 15, description: "You can cast the Shapechange spell once per long rest without expending a spell slot, but you can only transform into beasts or elementals." },
    "Lucky": { class: "druid", level: 16, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest." },
    "Force of Nature": { class: "druid", level: 17, description: "Your connection to nature is absolute. You can cast the Wish spell once per long rest, but only to create non-magical plant or animal life, or to alter natural terrain features." },

    // Monk Feats
    "Acolyte's Discipline": { class: "monk", level: 1, description: "You gain proficiency in Insight. When you use your Martial Arts feature, you can choose to make the unarmed strike deal an additional 1d4 psychic damage." },
    "Ki Adept": { class: "monk", level: 2, description: "You gain 1 additional Ki point. When you spend Ki points, you can regain 1 expended Ki point on a successful hit with an unarmed strike (once per turn)." },
    "Tradition Initiate": { class: "monk", level: 3, description: "You gain an additional feature from your Monastic Tradition at this level, as chosen by your DM." },
    "Agile Parry": { class: "monk", level: 4, description: "When you are targeted by a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, provided you are wielding no shield." },
    "Master of the Unseen Hand": { class: "monk", level: 5, description: "You can move small objects or interact with them telekinetically within 30 feet, as if using Mage Hand (but without the visible hand)." },
    "Elemental Fist": { class: "monk", level: 6, description: "When you hit with an unarmed strike, you can choose to deal an additional 1d6 damage of one of the following types: Acid, Cold, Fire, Lightning, or Thunder." },
    "Defensive Duelist": { class: "monk", level: 7, description: "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you." },
    "Mobile": { class: "monk", level: 8, description: "Your speed increases by 10 feet. When you use the Attack action, if you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn." },
    "Alert": { class: "monk", level: 9, description: "+5 bonus to initiative. You can't be surprised while conscious. Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you." },
    "Resilient (Wisdom)": { class: "monk", level: 10, description: "Increase your Wisdom score by 1, to a maximum of 20. You gain proficiency in Wisdom saving throws." },
    "Master of the Inner Gate": { class: "monk", level: 11, description: "You can use your action to end one effect on yourself that is causing you to be charmed or frightened." },
    "Tough": { class: "monk", level: 12, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Spiritual Awareness": { class: "monk", level: 13, description: "You can cast Detect Evil and Good at will, without expending a spell slot or material components." },
    "Uncanny Dodge (Monk version)": { class: "monk", level: 14, description: "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you." },
    "Master of Many Forms": { class: "monk", level: 15, description: "You can cast the Alter Self spell at will, without expending a spell slot or material components." },
    "Lucky": { class: "monk", level: 16, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest." },
    "Perfect Self": { class: "monk", level: 17, description: "Your Ki points reset to their maximum whenever you roll initiative and have 0 Ki points remaining. You also gain a +2 bonus to your Wisdom and Dexterity scores, up to their maximum." },

    // Sorcerer Feats
    "Arcane Birthright": { class: "sorcerer", level: 1, description: "You gain proficiency in Arcana. When you cast a spell that deals damage, you can reroll one damage die, but you must use the new roll." },
    "Metamagic Initiate (Minor)": { class: "sorcerer", level: 2, description: "Learn one Metamagic option from the Sorcerer list. Gain 1 sorcery point to use it (regain on long rest)." },
    "Metamagic Adept": { class: "sorcerer", level: 3, description: "Learn two Metamagic options from the Sorcerer list. Gain 2 sorcery points to use them (regain on long rest)." },
    "Elemental Adept": { class: "sorcerer", level: 4, description: "When you gain this feat, choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. Spells you cast ignore resistance to damage of that type. In addition, when you roll damage for a spell that deals damage of that type, you can treat any 1 on a damage die as a 2." },
    "Spell Sniper": { class: "sorcerer", level: 5, description: "Your ranged spell attacks ignore half cover and three-quarters cover. Double the range of your ranged spell attacks." },
    "Bloodline Vigor": { class: "sorcerer", level: 6, description: "Your hit point maximum increases by an amount equal to your Sorcerer level. Additionally, you have advantage on saving throws against effects that deal damage matching your Draconic Ancestry (if applicable)." },
    "War Caster": { class: "sorcerer", level: 7, description: "Advantage on Con saves to maintain concentration. Can perform somatic components even with weapons/shield in hands. Can cast a spell as an opportunity attack." },
    "Tough": { class: "sorcerer", level: 8, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Arcane Supremacy": { class: "sorcerer", level: 9, description: "When you cast a spell of 1st level or higher, you can choose to make the spell treat targets' immunity to a chosen damage type as resistance, or resistance as no effect. This can be used once per long rest." },
    "Resilient (Constitution)": { class: "sorcerer", level: 10, description: "Increase your Constitution score by 1, to a maximum of 20. You gain proficiency in Constitution saving throws." },
    "Favored by Magic": { class: "sorcerer", level: 11, description: "When you cast a spell, you can choose to treat the result of one d20 roll for that spell (attack roll, saving throw, or contested check) as a 20. This can be used once per long rest." },
    "Lucky": { class: "sorcerer", level: 12, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest." },
    "Spell Master": { class: "sorcerer", level: 13, description: "Choose one 1st-level spell from your spell list. You can cast it at will without expending a spell slot. You also gain a +1 bonus to your spell save DC." },
    "Bloodline Ascendance": { class: "sorcerer", level: 14, description: "You gain access to a powerful feature related to your Sorcerous Origin (e.g., Draconic Wings for Draconic Bloodline, Wild Magic Surge control for Wild Magic)." },
    "Unbound Essence": { class: "sorcerer", level: 15, description: "You can cast any spell of 5th level or lower from your spell list without expending a spell slot, once per long rest. This spell cannot be a Metamagic enhanced spell." },
    "Archmage's Resolve": { class: "sorcerer", level: 16, description: "You can add your Charisma modifier to the damage roll of any spell you cast." },
    "Avatar of Magic": { class: "sorcerer", level: 17, description: "You can cast one spell of 8th level or lower from your spell list once per long rest without expending a spell slot. You also regain 5 expended sorcery points when you roll initiative." },

    // Warlock Feats
    "Pact Initiate": { class: "warlock", level: 1, description: "You gain proficiency in one additional skill from the warlock skill list. You gain 1 additional Warlock spell slot (replenishes on short rest)." },
    "Invocation Adept": { class: "warlock", level: 2, description: "You learn one additional Eldritch Invocation of your choice." },
    "Boon Focus": { class: "warlock", level: 3, description: "Your Pact Boon gains an additional benefit related to its type (e.g., Pact of the Blade weapon gains +1 to attack/damage, Pact of the Chain familiar gains extra hit points, Pact of the Tome can cast an additional cantrip)." },
    "War Caster": { class: "warlock", level: 4, description: "Advantage on Con saves to maintain concentration. Can perform somatic components even with weapons/shield in hands. Can cast a spell as an opportunity attack." },
    "Improved Pact Weapon": { class: "warlock", level: 5, description: "Your pact weapon gains a +1 bonus to its attack and damage rolls, if it doesn't already have one. This bonus increases to +2 at 10th level and +3 at 15th level." },
    "Patron's Favor": { class: "warlock", level: 6, description: "You gain resistance to one damage type determined by your patron (e.g., Fire for Fiend, Psychic for Great Old One, Cold for Archfey)." },
    "Shadow Adept": { class: "warlock", level: 7, description: "You gain proficiency in Stealth. While in dim light or darkness, you have advantage on Dexterity (Stealth) checks." },
    "Resilient (Constitution)": { class: "warlock", level: 8, description: "Increase your Constitution score by 1, to a maximum of 20. You gain proficiency in Constitution saving throws." },
    "Master of the Pact": { class: "warlock", level: 9, description: "You can use your Pact Magic spell slots to cast spells of higher levels than normally allowed by your warlock level. You also gain 1 additional Warlock spell slot (replenishes on short rest)." },
    "Patron's Resilience": { class: "warlock", level: 10, description: "You gain immunity to one condition determined by your patron (e.g., Frightened for Fiend, Charmed for Archfey, Sleep for Great Old One)." },
    "Arcanum Adept": { class: "warlock", level: 11, description: "You gain one additional Mystic Arcanum of 6th level." },
    "Tough": { class: "warlock", level: 12, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Planar Traveler": { class: "warlock", level: 13, description: "You can cast Plane Shift once per long rest without expending a spell slot. You also have advantage on Charisma (Persuasion) checks when dealing with extraplanar beings aligned with your patron." },
    "Patron's Champion": { class: "warlock", level: 14, description: "When you reduce a hostile creature to 0 hit points, you can regain one expended Warlock spell slot (once per short or long rest)." },
    "Master of Invocations": { class: "warlock", level: 15, description: "You learn two additional Eldritch Invocations of your choice. You can swap one known Invocation for another every long rest." },
    "Lucky": { class: "warlock", level: 16, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest." },
    "Avatar of the Patron": { class: "warlock", level: 17, description: "You can cast your highest level Mystic Arcanum spell once per long rest without expending a spell slot. Additionally, you gain a powerful, temporary transformation linked to your patron once per long rest." },

    // Barbarian Feats
    "Savage Combatant": { class: "barbarian", level: 1, description: "When you hit with a melee weapon attack while raging, you can add your Constitution modifier to the damage roll." },
    "Adrenaline Rush": { class: "barbarian", level: 2, description: "When you initiate a Rage, you gain temporary hit points equal to your proficiency bonus + your Constitution modifier." },
    "Path Initiate": { class: "barbarian", level: 3, description: "You gain an additional feature from your Primal Path at this level, as chosen by your DM." },
    "Great Weapon Master": { class: "barbarian", level: 4, description: "Before you make a melee attack with a heavy weapon, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage." },
    "Relentless Attacker": { class: "barbarian", level: 5, description: "When you miss with a melee attack, you can immediately make another melee attack as part of the same action." },
    "Totemic Warrior": { class: "barbarian", level: 6, description: "You gain one additional totem spirit option for your Totem Warrior path, or a comparable benefit if you chose another path." },
    "Alert": { class: "barbarian", level: 7, description: "+5 bonus to initiative. You can't be surprised while conscious. Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you." },
    "Tough": { class: "barbarian", level: 8, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Improved Critical": { class: "barbarian", level: 9, description: "Your weapon attacks score a critical hit on a roll of 19-20." },
    "Inspiring Rage": { class: "barbarian", level: 10, description: "When you enter a Rage, up to four allied creatures within 30 feet of you that can see or hear you gain temporary hit points equal to your proficiency bonus." },
    "Indomitable Spirit": { class: "barbarian", level: 11, description: "You have advantage on saving throws against being charmed or frightened." },
    "Resilient (Wisdom)": { class: "barbarian", level: 12, description: "Increase your Wisdom score by 1, to a maximum of 20. You gain proficiency in Wisdom saving throws." },
    "Savage Attacker": { class: "barbarian", level: 13, description: "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total." },
    "Avatar of Fury": { class: "barbarian", level: 14, description: "While raging, your melee weapon attacks deal an additional 1d6 damage. This damage increases to 1d8 at 17th level." },
    "Unbreakable Will": { class: "barbarian", level: 15, description: "You have advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep." },
    "Legendary Strength": { class: "barbarian", level: 16, description: "Your Strength score increases by 2, to a maximum of 22. When you make a Strength (Athletics) check or a Strength saving throw, you can add your proficiency bonus twice to the roll." },
    "Primal Champion (Minor)": { class: "barbarian", level: 17, description: "Your Strength and Constitution scores each increase by 1, up to their maximum of 20. You gain a +1 bonus to your hit point maximum per barbarian level." },

    // Brawler Feats
    "Street Scrapper": { class: "brawler", level: 1, description: "You are proficient with improvised weapons. When you hit a creature with an improvised weapon or an unarmed strike, you can use a bonus action to attempt to grapple or shove the target." },
    "Tavern Brawler": { class: "brawler", level: 2, description: "Increase your Strength or Constitution score by 1, to a maximum of 20. You are proficient with improvised weapons and unarmed strikes. When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target." },
    "Style Initiate": { class: "brawler", level: 3, description: "You gain an additional feature from your Brawling Style at this level, as chosen by your DM." },
    "Heavy Hitter": { class: "brawler", level: 4, description: "When you hit a creature with an unarmed strike or an improvised weapon, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage." },
    "Relentless Combatant": { class: "brawler", level: 5, description: "Once per turn, when you reduce a creature to 0 hit points with an unarmed strike or improvised weapon, or score a critical hit with one, you can move up to half your speed and make one additional unarmed strike or improvised weapon attack." },
    "Opportunist": { class: "brawler", level: 6, description: "When a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature." },
    "Unbreakable": { class: "brawler", level: 7, description: "You have advantage on saving throws against being poisoned and are immune to the poisoned condition. You gain resistance to bludgeoning damage from nonmagical attacks." },
    "Tough": { class: "brawler", level: 8, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Expert Grappler": { class: "brawler", level: 9, description: "You have advantage on Strength (Athletics) checks made to grapple a creature. While you have a creature grappled, that creature has disadvantage on attack rolls against targets other than you." },
    "Knockout Artist": { class: "brawler", level: 10, description: "When you hit a creature with an unarmed strike, you can spend 1 Grit point to force the target to make a Constitution saving throw (DC 8 + proficiency bonus + Strength or Dexterity modifier). On a failed save, the creature is stunned until the end of your next turn." },
    "Momentum Fighter": { class: "brawler", level: 11, description: "When you take the Dash action, your next unarmed strike or improvised weapon attack before the end of your turn gains a bonus to its damage roll equal to your proficiency bonus." },
    "Resilient (Wisdom)": { class: "brawler", level: 12, description: "Increase your Wisdom score by 1, to a maximum of 20. You gain proficiency in Wisdom saving throws." },
    "Indomitable": { class: "brawler", level: 13, description: "You can reroll a saving throw that you fail. If you do so, you must use the new roll. You can use this feature once per long rest." },
    "Living Legend": { class: "brawler", level: 14, description: "Your reputation precedes you. You have advantage on Charisma (Intimidation) checks. You also gain temporary hit points equal to your Charisma modifier at the start of combat." },
    "Provocateur": { class: "brawler", level: 15, description: "As a bonus action, you can choose one creature within 30 feet of you that can hear you. That creature must make a Wisdom saving throw (DC 8 + proficiency bonus + Charisma modifier). On a failed save, the creature has disadvantage on attack rolls against targets other than you until the end of its next turn." },
    "Brawler's Resolve": { class: "brawler", level: 16, description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest." },
    "Uncrowned Champion": { class: "brawler", level: 17, description: "You gain a +2 bonus to your Strength and Constitution scores, up to their maximum of 20. Your unarmed strike damage die increases to a d12. You have advantage on saving throws against being grappled or restrained." },

    // Assassin Feats
    "Silent Killer": { class: "assassin", level: 1, description: "You have advantage on Dexterity (Stealth) checks made to remain unseen while moving at half speed or less. When you make a successful attack against a surprised creature, you can choose to deal nonlethal damage without penalty." },
    "Skulker": { class: "assassin", level: 2, description: "You can try to hide when you are lightly obscured. When hidden, missing with a ranged weapon attack doesn't reveal your position." },
    "Lethal Precision": { class: "assassin", level: 3, description: "When you make a Mortal Strike against a creature that hasn't taken a turn in combat, the attack deals an additional 1d6 damage. If that attack is a critical hit, the additional damage is 2d6 instead." },
    "Alert": { class: "assassin", level: 4, description: "+5 bonus to initiative. You can't be surprised while conscious. Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you." },
    "Blade Master": { class: "assassin", level: 5, description: "When wielding a sword, you gain +1 to attack and damage rolls. You can parry, adding your proficiency bonus to AC against one melee attack as a reaction." },
    "Actor": { class: "assassin", level: 6, description: "Increase your Charisma by 1, to a maximum of 20. You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person or to impersonate another person. You can mimic the speech of another creature or the sounds made by creatures for one minute." },
    "Agile Combatant": { class: "assassin", level: 7, description: "When you take the Disengage action, your movement speed increases by 10 feet until the end of your turn. You can also use your reaction to move up to half your speed when an enemy misses you with a melee attack." },
    "Resilient (Wisdom)": { class: "assassin", level: 8, description: "Increase your Wisdom score by 1, to a maximum of 20. You gain proficiency in Wisdom saving throws." },
    "Master Infiltrator": { class: "assassin", level: 9, description: "You have advantage on Dexterity (Sleight of Hand) checks made to pick pockets or plant objects on a creature. You also have advantage on Charisma (Deception) checks made to convince someone you are someone else." },
    "Toxicologist": { class: "assassin", level: 10, description: "You gain expertise in your Poisoner's Kit proficiency. When you apply poison to a weapon or piece of ammunition, it takes no action. Additionally, the DC of poisons you create or apply increases by 1." },
    "Master of Skills": { class: "assassin", level: 11, description: "You gain proficiency in any two skills of your choice. For two skills you are already proficient in, you can choose to double your proficiency bonus for any ability check you make that uses either of those proficiencies." },
    "Mobile": { class: "assassin", level: 12, description: "Your speed increases by 10 feet. When you use the Attack action, if you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn." },
    "Executioner": { class: "assassin", level: 13, description: "When you hit a creature with your Death Strike feature, the target has disadvantage on saving throws against being frightened for one minute. The target is also vulnerable to poison damage for one round." },
    "Perceptive": { class: "assassin", level: 14, description: "Increase your Wisdom score by 1, to a maximum of 20. You have advantage on Wisdom (Perception) checks. Your passive Perception score increases by 5." },
    "Legendary Dodge": { class: "assassin", level: 15, description: "You can use your reaction to halve the damage you take from an attack. You can use this a number of times equal to your Dexterity modifier (minimum of once) per long rest." },
    "Tough": { class: "assassin", level: 16, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Shadow Lord": { class: "assassin", level: 17, description: "When in dim light or darkness, you can use an action to become invisible. You remain invisible as long as you are in dim light or darkness, or until you attack or cast a spell." },

    // Hunter Feats
    "Wilderness Survivor": { class: "hunter", level: 1, description: "You gain proficiency in Survival. You have advantage on Wisdom (Survival) checks made to find food and water in the wilderness." },
    "Trapper": { class: "hunter", level: 2, description: "You gain proficiency with carpenter's tools. You can set simple traps as a bonus action. The DC to disarm your traps increases by your proficiency bonus." },
    "Conclave Initiate": { class: "hunter", level: 3, description: "You gain an additional feature from your Hunter's Conclave at this level, as chosen by your DM." },
    "Sharpshooter": { class: "hunter", level: 4, description: "Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls. Your ranged weapon attacks ignore half cover and three-quarters cover. Before you make a ranged attack with a weapon, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage." },
    "Master Archer": { class: "hunter", level: 5, description: "When you take the Attack action with a ranged weapon, you can make one additional ranged weapon attack as a bonus action." },
    "Expert Tracker": { class: "hunter", level: 6, description: "You have expertise in Survival checks made to track creatures. You also gain advantage on Wisdom (Perception) checks made to find hidden creatures or objects in natural environments." },
    "Skirmisher's Speed": { class: "hunter", level: 7, description: "When you hit a creature with a weapon attack, you can use your reaction to move up to half your speed without provoking opportunity attacks from that creature." },
    "Mobile": { class: "hunter", level: 8, description: "Your speed increases by 10 feet. When you use the Attack action, if you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn." },
    "Resilient (Constitution)": { class: "hunter", level: 9, description: "Increase your Constitution score by 1, to a maximum of 20. You gain proficiency in Constitution saving throws." },
    "Conclave Master": { class: "hunter", level: 10, description: "You gain one additional feature from your Hunter's Conclave at this level, as chosen by your DM." },
    "Quick Draw": { class: "hunter", level: 11, description: "You can draw or stow two weapons when you would normally be able to draw or stow only one. You can also make a ranged weapon attack as a bonus action on your turn if you are holding a loaded ranged weapon." },
    "Alert": { class: "hunter", level: 12, description: "+5 bonus to initiative. You can't be surprised while conscious. Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you." },
    "Ghost in the Wilderness": { class: "hunter", level: 13, description: "You gain expertise in Stealth checks. You have advantage on Dexterity (Stealth) checks made to hide in natural terrain." },
    "Legendary Hunter": { class: "hunter", level: 14, description: "When you use your Hunter's Quarry feature, you can choose one additional target. The extra damage from Hunter's Quarry increases by 1d6." },
    "Evasive Footwork": { class: "hunter", level: 15, description: "When you move, you can use your bonus action to impose disadvantage on opportunity attacks against you for that turn." },
    "Tough": { class: "hunter", level: 16, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Master of the Kill": { class: "hunter", level: 17, description: "When you reduce a creature to 0 hit points with a weapon attack, you regain a number of hit points equal to your Wisdom modifier (minimum of 1). Additionally, your critical hit range for weapon attacks increases to 19-20." },

    // Shaman Feats
    "Spirit Adept": { class: "shaman", level: 1, description: "You gain proficiency in Religion. You can cast Guidance at will. You have advantage on Wisdom (Insight) checks made to discern the true intentions of spirits or fey." },
    "Totemic Focus": { class: "shaman", level: 2, description: "Your Spirit Totem remains active for an additional 1 minute. The bonus or effect provided by your totem increases by 1 (e.g., +1 AC for protective totem, +1d4 healing for healing totem)." },
    "Spirit-Guided Vigor": { class: "shaman", level: 3, description: "Your hit point maximum increases by an amount equal to your Shaman level. You have advantage on death saving throws." },
    "War Caster": { class: "shaman", level: 4, description: "Advantage on Con saves to maintain concentration. Can perform somatic components even with weapons/shield in hands. Can cast a spell as an opportunity attack." },
    "Spirit Channeler": { class: "shaman", level: 5, description: "When you cast a spell that summons a spirit or elemental, the summoned creature gains temporary hit points equal to your Shaman level. The duration of your summoned creatures increases by 1 minute." },
    "Improved Totems": { class: "shaman", level: 6, description: "You gain one additional Spirit Totem option. The bonus or effect provided by your totem increases by 2 (e.g., +2 AC, +1d6 healing)." },
    "Seer's Intuition": { class: "shaman", level: 7, description: "You have proficiency in Insight. When you make a Wisdom (Insight) check, you can add your Wisdom modifier twice to the roll." },
    "Resilient (Constitution)": { class: "shaman", level: 8, description: "Increase your Constitution score by 1, to a maximum of 20. You gain proficiency in Constitution saving throws." },
    "Elemental Master": { class: "shaman", level: 9, description: "Choose one elemental damage type (Acid, Cold, Fire, Lightning, or Thunder). Spells you cast that deal this damage type deal an extra die of damage. You can choose a different type when you finish a long rest." },
    "Spiritual Bastion": { class: "shaman", level: 10, description: "You gain resistance to necrotic and radiant damage. You have advantage on saving throws against effects that would possess or control your mind." },
    "Legendary Totems": { class: "shaman", level: 11, description: "You can have two different Spirit Totems active at the same time. The bonus or effect provided by your totems increases by 3 (e.g., +3 AC, +1d8 healing)." },
    "Tough": { class: "shaman", level: 12, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Oracle's Sight": { class: "shaman", level: 13, description: "You can cast Scrying once per long rest without expending a spell slot. You have advantage on Wisdom (Perception) checks made to discern hidden truths or predict future events." },
    "Spirit Lord's Favor": { class: "shaman", level: 14, description: "Once per long rest, when you cast a spell that deals damage, you can choose to deal an additional 4d6 damage of a type associated with your primary spirit (e.g., necrotic for death spirits, radiant for healing spirits)." },
    "Timeless Spirit": { class: "shaman", level: 15, description: "You can't be aged magically. You are immune to the Frightened and Exhaustion conditions. You gain advantage on saving throws against being paralyzed or stunned." },
    "Lucky": { class: "shaman", level: 16, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest." },
    "Ascendant Shaman": { class: "shaman", level: 17, description: "Your connection to the spirit world is complete. You can cast Mass Heal or True Resurrection once per long rest without expending a spell slot. You also gain a +2 bonus to your Wisdom score, up to its maximum of 20." },

    // Gladiator Feats
    "Crowd Favorite": { class: "gladiator", level: 1, description: "You gain proficiency in Performance. When you succeed on a Charisma (Performance) check to entertain a crowd, you gain 1 additional Acclaim point." },
    "Performer's Grit": { class: "gladiator", level: 2, description: "When you use a Combat Flourish, you gain temporary hit points equal to your Charisma modifier (minimum of 1). These temporary hit points last until the start of your next turn." },
    "Style Initiate": { class: "gladiator", level: 3, description: "You gain an additional feature from your Gladiator Style at this level, as chosen by your DM." },
    "Weapon Specialist": { class: "gladiator", level: 4, description: "You gain a +1 bonus to attack and damage rolls with one weapon type of your choice (e.g., spears, nets, shortswords). You can choose this feat multiple times, each time choosing a new weapon type." },
    "Dual Wielder": { class: "gladiator", level: 5, description: "+1 AC while wielding a separate melee weapon in each hand. Can use two-weapon fighting even if one-handed melee weapons aren't light. Can draw/stow two one-handed weapons when you'd normally draw/stow one." },
    "Shield Master": { class: "gladiator", level: 6, description: "If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield. If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect." },
    "Inspiring Leader": { class: "gladiator", level: 7, description: "Spend 10 minutes inspiring your companions, granting up to six creatures (including yourself) temporary hit points equal to your level + Charisma modifier." },
    "Tough": { class: "gladiator", level: 8, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Improved Critical": { class: "gladiator", level: 9, description: "Your weapon attacks score a critical hit on a roll of 19-20." },
    "Defensive Duelist": { class: "gladiator", level: 10, description: "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you." },
    "Master Tactician": { class: "gladiator", level: 11, description: "You have advantage on Wisdom (Insight) checks made to predict opponent's movements. You can use a bonus action to direct an ally to make one weapon attack or move up to half their speed." },
    "Resilient (Wisdom)": { class: "gladiator", level: 12, description: "Increase your Wisdom score by 1, to a maximum of 20. You gain proficiency in Wisdom saving throws." },
    "Living Idol": { class: "gladiator", level: 13, description: "When you score a critical hit or reduce a hostile creature to 0 hit points, you regain a number of Acclaim points equal to your proficiency bonus. When you regain temporary hit points from a Gladiator ability, you gain additional temporary hit points equal to your Charisma modifier." },
    "Legendary Champion": { class: "gladiator", level: 14, description: "When you take the Attack action, you can make one additional melee weapon attack as a bonus action. Your weapon attacks score a critical hit on a roll of 18-20." },
    "Fearsome": { class: "gladiator", level: 15, description: "You gain proficiency in Intimidation. If already proficient, double your proficiency bonus for checks made with it. When you succeed on an Intimidation check against a creature, that creature has disadvantage on its next attack roll against you." },
    "Savage Attacker": { class: "gladiator", level: 16, description: "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total." },
    "Immortal Champion": { class: "gladiator", level: 17, description: "When you are reduced to 0 hit points, you can choose to regain hit points equal to your Gladiator level instead. You can't use this feature again until you finish a long rest. You also have advantage on death saving throws." },

    // Ninja Feats
    "Shadow Initiate": { class: "ninja", level: 1, description: "You gain proficiency in Stealth. You can cast the Minor Illusion cantrip. When you are in dim light or darkness, you gain a +1 bonus to your AC." },
    "Ki Adept": { class: "ninja", level: 2, description: "You gain 1 additional Ki point. When you spend Ki points, you can regain 1 expended Ki point on a successful hit with an unarmed strike or a finesse weapon (once per turn)." },
    "Clan Initiate": { class: "ninja", level: 3, description: "You gain an additional feature from your Shinobi Clan at this level, as chosen by your DM." },
    "Alert": { class: "ninja", level: 4, description: "+5 bonus to initiative. You can't be surprised while conscious. Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you." },
    "Dual Wielder": { class: "ninja", level: 5, description: "+1 AC while wielding a separate melee weapon in each hand. Can use two-weapon fighting even if one-handed melee weapons aren't light. Can draw/stow two one-handed weapons when you'd normally draw/stow one." },
    "Poisoner": { class: "ninja", level: 6, description: "You gain proficiency with the Poisoner's Kit. You can apply poison to a weapon or piece of ammunition as a bonus action. When you deal poison damage, the target has disadvantage on its next saving throw against being poisoned within one minute." },
    "Evasive": { class: "ninja", level: 7, description: "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail." },
    "Mobile": { class: "ninja", level: 8, description: "Your speed increases by 10 feet. When you use the Attack action, if you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn." },
    "Infiltrator": { class: "ninja", level: 9, description: "You can spend one minute to create a disguise. You have advantage on Charisma (Deception) checks made to pass yourself off as a different person." },
    "Ninjutsu Master": { class: "ninja", level: 10, description: "You can use one of your Ninjutsu Arts without expending Ki points once per short or long rest. The Ki point cost for your Ninjutsu Arts is reduced by 1 (minimum 1)." },
    "Master of Illusions": { class: "ninja", level: 11, description: "You can cast Silent Image at will, without expending a spell slot or material components. When you cast an illusion spell, you can make the illusion appear more convincing; creatures have disadvantage on their Intelligence (Investigation) checks to discern the illusion's true nature." },
    "Lethal Striker": { class: "ninja", level: 12, description: "When you hit a creature with a weapon attack, you can spend 1 Ki point to deal an additional 2d6 necrotic damage. If you do so while hidden, the damage increases to 4d6." },
    "Spymaster": { class: "ninja", level: 13, description: "You have proficiency in Deception. You can understand written secret messages (such as ciphers) twice as fast as normal. You have advantage on Wisdom (Insight) checks made to detect lies." },
    "Clan Master": { class: "ninja", level: 14, description: "You gain a powerful, signature Ninjutsu Art unique to your Shinobi Clan, chosen by your DM. This ability can be used once per long rest." },
    "Unreadable": { class: "ninja", level: 15, description: "You are immune to any effect that would read your thoughts, learn your alignment, or determine whether you are telling the truth. You have advantage on saving throws against being charmed." },
    "Tough": { class: "ninja", level: 16, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Legendary Shinobi": { class: "ninja", level: 17, description: "You can use your Master of the Unseen feature an unlimited number of times per short or long rest. When you make an attack roll while invisible, you gain a +2 bonus to the attack roll." },

    // Summoner Feats
    "Planar Affinity": { class: "summoner", level: 1, description: "You gain proficiency in Arcana. Your Eidolon gains temporary hit points equal to your proficiency bonus when it is summoned." },
    "Bonded Vigor": { class: "summoner", level: 2, description: "Your Eidolon's hit point maximum increases by your Summoner level. It also gains a +1 bonus to its attack rolls." },
    "Eidolon Adept": { class: "summoner", level: 3, description: "Your Eidolon gains one additional Eidolon Evolution point. You can change your Eidolon's form and evolutions during a short or long rest." },
    "Resilient (Constitution)": { class: "summoner", level: 4, description: "Increase your Constitution score by 1, to a maximum of 20. You gain proficiency in Constitution saving throws." },
    "Superior Bond": { class: "summoner", level: 5, description: "Your Eidolon gains an additional attack as part of its Attack action. You can also command your Eidolon as a bonus action instead of an action." },
    "Aspect Adept": { class: "summoner", level: 6, description: "When you use your Aspect feature, you can choose to also grant yourself one of your Eidolon's passive evolutions for the duration." },
    "Greater Eidolon": { class: "summoner", level: 7, description: "Your Eidolon gains two additional Eidolon Evolution points. The maximum size of your Eidolon increases to Large." },
    "War Caster": { class: "summoner", level: 8, description: "Advantage on Con saves to maintain concentration. Can perform somatic components even with weapons/shield in hands. Can cast a spell as an opportunity attack." },
    "Master Summoner": { class: "summoner", level: 9, description: "You gain an additional 3rd-level spell slot. You can cast your Summon Eidolon spell as a bonus action once per long rest." },
    "Perfected Aspect": { class: "summoner", level: 10, description: "When you use your Aspect feature, you can grant yourself two of your Eidolon's passive evolutions for the duration. The duration of your Aspect feature increases to 1 hour." },
    "Planar Expert": { class: "summoner", level: 11, description: "You gain proficiency in two of the following skills: Arcana, History, or Religion. You have advantage on Intelligence (Investigation) checks related to planar creatures or phenomena." },
    "Tough": { class: "summoner", level: 12, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Twin Forms": { class: "summoner", level: 13, description: "When you use your Summon Eidolon feature, you can summon two Eidolons with half the normal hit points, sharing your command action." },
    "Unbreakable Bond": { class: "summoner", level: 14, description: "If your Eidolon is reduced to 0 hit points, you can use your reaction to reduce your own hit points by an amount equal to your Summoner level, causing your Eidolon to drop to 1 hit point instead. You can't use this feature again until you finish a long rest." },
    "Avatar of the Summoner": { class: "summoner", level: 15, description: "You can temporarily merge with your Eidolon, gaining its evolutions and becoming a singular, powerful entity. This transformation lasts for 1 minute and can be used once per long rest." },
    "Lucky": { class: "summoner", level: 16, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest." },
    "Planar Overlord": { class: "summoner", level: 17, description: "You can cast Gate once per long rest without expending a spell slot. When you summon any creature, you have advantage on any Charisma (Persuasion) or Wisdom (Animal Handling) checks made to control or influence it." },

    // Necromancer Feats
    "Forbidden Knowledge": { class: "necromancer", level: 1, description: "You gain proficiency in Arcana. You can cast the Speak with Dead spell once per day without expending a spell slot." },
    "Necromantic Vigor": { class: "necromancer", level: 2, description: "When you reduce a creature to 0 hit points with a necromancy spell, you regain hit points equal to your Intelligence modifier (minimum of 1). Your animated undead gain temporary hit points equal to your proficiency bonus when animated." },
    "Path Initiate": { class: "necromancer", level: 3, description: "You gain an additional feature from your Path of Necromancy at this level, as chosen by your DM." },
    "Resilient (Constitution)": { class: "necromancer", level: 4, description: "Increase your Constitution score by 1, to a maximum of 20. You gain proficiency in Constitution saving throws." },
    "Master of the Dead": { class: "necromancer", level: 5, description: "You can animate an additional number of undead (skeletons or zombies) equal to your Intelligence modifier. Your animated undead gain a bonus to their weapon damage rolls equal to your proficiency bonus." },
    "Undead Commander": { class: "necromancer", level: 6, description: "Your animated undead gain a bonus to their AC equal to your Intelligence modifier. When you command your undead, they can use their reaction to make one weapon attack." },
    "Spell Sniper": { class: "necromancer", level: 7, description: "Your ranged spell attacks ignore half cover and three-quarters cover. Double the range of your ranged spell attacks." },
    "War Caster": { class: "necromancer", level: 8, description: "Advantage on Con saves to maintain concentration. Can perform somatic components even with weapons/shield in hands. Can cast a spell as an opportunity attack." },
    "Lord of the Undead": { class: "necromancer", level: 9, description: "You can cast the Create Undead spell once per long rest without expending a spell slot. Your control over animated undead is improved; they obey your commands implicitly and do not require repeated mental effort." },
    "Dominate Undead": { class: "necromancer", level: 10, description: "As an action, you can attempt to magically command one undead creature you can see within 60 feet. It must succeed on a Wisdom saving throw or be charmed by you for 1 hour or until you or your companions harm it. You can have only one creature charmed in this way at a time." },
    "Reaper's Call": { class: "necromancer", level: 11, description: "When you cast a necromancy spell that deals damage, you can choose to deal an additional 2d8 necrotic damage. This damage is dealt to one creature of your choice targeted by the spell." },
    "Tough": { class: "necromancer", level: 12, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Spirit Drinker": { class: "necromancer", level: 13, description: "When you reduce a creature to 0 hit points with a necromancy spell or by controlling an undead, you regain hit points equal to your proficiency bonus. You can use this once per turn." },
    "Deathless": { class: "necromancer", level: 14, description: "You are immune to effects that would reduce your hit point maximum. When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead (once per long rest)." },
    "True Necromancer": { class: "necromancer", level: 15, description: "Your animated undead gain immunity to necrotic and poison damage. You can animate an additional number of undead (skeletons or zombies) equal to twice your Intelligence modifier." },
    "Plague Lord": { class: "necromancer", level: 16, description: "When you cast a spell that deals necrotic or poison damage, the targets have disadvantage on saving throws against that spell's effects." },
    "Ascendant Necromancer": { class: "necromancer", level: 17, description: "Your mastery over death is absolute. You can cast the Finger of Death spell at will, without expending a spell slot. Additionally, you gain a powerful, temporary transformation into a lich-like state once per long rest." },

    // Illusionist Feats
    "Subtle Weaving": { class: "illusionist", level: 1, description: "When you cast an illusion spell, you can choose to cast it without any somatic or verbal components. This can be used a number of times equal to your Intelligence modifier (minimum of 1) per long rest." },
    "Deceptive Arts": { class: "illusionist", level: 2, description: "You gain proficiency in Deception. When you make a Charisma (Deception) check to mislead or trick someone, you can add your Intelligence modifier to the roll." },
    "Path Initiate": { class: "illusionist", level: 3, description: "You gain an additional feature from your Path of Deception at this level, as chosen by your DM." },
    "Metamagic Adept": { class: "illusionist", level: 4, description: "Learn two Metamagic options from the Sorcerer list. Gain 2 sorcery points to use them (regain on long rest). You can use these for your illusion spells." },
    "Shadow Adept": { class: "illusionist", level: 5, description: "You gain proficiency in Stealth. While in dim light or darkness, you have advantage on Dexterity (Stealth) checks and your illusion spells cast in these conditions are harder to disbelieve (disadvantage on Intelligence (Investigation) checks)." },
    "Elusive": { class: "illusionist", level: 6, description: "You have advantage on Dexterity (Acrobatics) checks. When you take the Disengage action, your movement speed increases by 10 feet until the end of your turn." },
    "Master of Disguise": { class: "illusionist", level: 7, description: "You can cast the Disguise Self spell at will, without expending a spell slot. You also gain proficiency with the Disguise Kit if you don't already have it, and your proficiency bonus is doubled for any ability check you make that uses it." },
    "Resilient (Wisdom)": { class: "illusionist", level: 8, description: "Increase your Wisdom score by 1, to a maximum of 20. You gain proficiency in Wisdom saving throws." },
    "Master Trickster": { class: "illusionist", level: 9, description: "When you cast an illusion spell that causes a creature to be charmed or frightened, the creature has disadvantage on its initial saving throw against that effect." },
    "Nightmare Lord": { class: "illusionist", level: 10, description: "When you cast a spell that causes the frightened condition, you can choose one creature. If that creature fails its saving throw, it also takes 3d6 psychic damage at the start of each of its turns while frightened by your spell." },
    "Reality Bender": { class: "illusionist", level: 11, description: "When you cast an illusion spell of 3rd level or higher, you can choose to make one inanimate object or creature in the illusion real until the start of your next turn. This can be used once per long rest." },
    "Tough": { class: "illusionist", level: 12, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Shapeshifter's Guile": { class: "illusionist", level: 13, description: "You can cast the Alter Self spell at will, without expending a spell slot or material components. You have advantage on Charisma (Deception) checks made to convince someone you are a different person." },
    "Grand Deceiver": { class: "illusionist", level: 14, description: "The DC of your illusion spells increases by 1. Creatures have disadvantage on Intelligence (Investigation) checks made to discern the true nature of your illusions." },
    "Architect of Deception": { class: "illusionist", level: 15, description: "You can maintain concentration on two illusion spells simultaneously, as long as at least one of them is of 5th level or lower. If you fail a concentration check for one, you fail for both." },
    "Lucky": { class: "illusionist", level: 16, description: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You choose which d20 to use. Regain spent luck points on a long rest." },
    "God of Illusions": { class: "illusionist", level: 17, description: "Your illusions are so powerful that they can affect reality. You can cast the Weird spell once per long rest without expending a spell slot. Additionally, you can target one creature with an illusion spell and choose for it to automatically fail its initial saving throw." },

    // Engineer Feats
    "Tinkerer's Know-How": { class: "engineer", level: 1, description: "You gain proficiency with one additional tool of your choice. You can create common non-magical items in half the usual time and cost." },
    "Mechanic's Touch": { class: "engineer", level: 2, description: "Your Construct Companion gains temporary hit points equal to your Engineer level whenever you complete a long rest. You can repair your Construct Companion as a bonus action, restoring hit points equal to your Intelligence modifier." },
    "Discipline Initiate": { class: "engineer", level: 3, description: "You gain an additional feature from your Engineering Discipline at this level, as chosen by your DM." },
    "Durable": { class: "engineer", level: 4, description: "Increase your Constitution score by 1, to a maximum of 20. When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)." },
    "Advanced Gadgetry": { class: "engineer", level: 5, description: "You can deploy or use one of your gadgets as a bonus action on your turn. The DC of your gadgets' effects increases by 1." },
    "Master Craftsman": { class: "engineer", level: 6, description: "You have expertise with Tinker's Tools and Smith's Tools. You can craft rare non-magical items in half the usual time and cost." },
    "Quick Thinker": { class: "engineer", level: 7, description: "You have advantage on Intelligence (Investigation) checks made to understand mechanical devices or puzzles. You can take the Dodge action as a bonus action once per short or long rest." },
    "Resilient (Wisdom)": { class: "engineer", level: 8, description: "Increase your Wisdom score by 1, to a maximum of 20. You gain proficiency in Wisdom saving throws." },
    "Architect": { class: "engineer", level: 9, description: "You gain proficiency with mason's tools or carpenter's tools. You can spend 10 minutes to design or reinforce a structure, granting creatures inside it +1 AC against ranged attacks for 1 hour." },
    "Genius Inventor": { class: "engineer", level: 10, description: "You can create one uncommon magical item that does not require attunement once per week, provided you have the necessary components and time (DM's discretion)." },
    "Signature Invention": { class: "engineer", level: 11, description: "You design a unique, powerful gadget. Choose one spell of 5th level or lower from any spell list. You can cast this spell once per long rest from your gadget without expending a spell slot or components." },
    "Observant": { class: "engineer", level: 12, description: "Increase your Intelligence or Wisdom score by 1, to a maximum of 20. If you can see a creature's mouth, you can interpret what it's saying by moving your lips, even if you don't understand the language. Your passive Perception and passive Investigation scores increase by 5." },
    "Master Mechanic": { class: "engineer", level: 13, description: "You can repair a damaged object or construct with an action, restoring hit points equal to your Engineer level + your Intelligence modifier. You can also temporarily disable a mechanical device with a successful Intelligence (Tinker's Tools) check." },
    "Legendary Engineer": { class: "engineer", level: 14, description: "Your Construct Companion gains immunity to one damage type of your choice (chosen when you gain this feat). It also gains a flying speed of 30 feet." },
    "Attunement Master": { class: "engineer", level: 15, description: "You can attune to one additional magic item. You also have advantage on saving throws against effects caused by magic items." },
    "Tough": { class: "engineer", level: 16, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Avatar of Invention": { class: "engineer", level: 17, description: "You can activate a unique, powerful, temporary construct or gadget of your own design once per long rest. This invention has capabilities akin to a high-level magical effect (DM's discretion, e.g., a short-range teleportation device for the party, a powerful offensive cannon, a self-sustaining miniature factory)." },

    // Alchemist Feats
    "Field Researcher": { class: "alchemist", level: 1, description: "You gain proficiency in Medicine. You have advantage on Intelligence (Nature) checks made to identify plants, fungi, or minerals." },
    "Practical Chemistry": { class: "alchemist", level: 2, description: "You can create one additional concoction per short or long rest. The DC for your concoctions increases by 1." },
    "Field Specialist": { class: "alchemist", level: 3, description: "You gain an additional feature from your Alchemical Field at this level, as chosen by your DM." },
    "Durable": { class: "alchemist", level: 4, description: "Increase your Constitution score by 1, to a maximum of 20. When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)." },
    "Empowered Alchemy": { class: "alchemist", level: 5, description: "When you throw a bomb or use an elixir that deals damage or restores hit points, you can roll one additional damage or healing die for that effect." },
    "Master Chemist": { class: "alchemist", level: 6, description: "You have expertise with Alchemist's Supplies. You can identify the properties of any potion or alchemical substance by touch as an action." },
    "Reactive Formulas": { class: "alchemist", level: 7, description: "You can prepare a concoction as a bonus action once per turn. When you take damage, you can use your reaction to consume a prepared elixir or bomb, gaining its effect." },
    "Resilient (Dexterity)": { class: "alchemist", level: 8, description: "Increase your Dexterity score by 1, to a maximum of 20. You gain proficiency in Dexterity saving throws." },
    "Poisoner": { class: "alchemist", level: 9, description: "You gain proficiency with the Poisoner's Kit. You can apply poison to a weapon or piece of ammunition as a bonus action. When you deal poison damage, the target has disadvantage on its next saving throw against being poisoned within one minute." },
    "Grand Alchemist": { class: "alchemist", level: 10, description: "You can create one rare non-magical item that functions as a potion or bomb with a powerful effect (DM's discretion, e.g., a potion of invisibility, a bomb of blinding light) once per long rest." },
    "Legendary Discovery": { class: "alchemist", level: 11, description: "You discover a groundbreaking alchemical formula. Choose one spell of 5th level or lower from any spell list that mimics an alchemical effect. You can cast this spell once per long rest by consuming rare alchemical components." },
    "Tough": { class: "alchemist", level: 12, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Chemical Purity": { class: "alchemist", level: 13, description: "You have advantage on all saving throws against poison and diseases. You can spend 10 minutes to purify tainted food or water for up to 10 creatures." },
    "Field Grandmaster": { class: "alchemist", level: 14, description: "Your Alchemical Field gains a permanent, potent bonus related to its specialization (e.g., Grenadier's bombs ignore resistance, Mutagenist's mutagens grant temporary damage immunity)." },
    "Mithridatism": { class: "alchemist", level: 15, description: "You are immune to poison damage and the poisoned condition. You can also neutralize any poison a creature is suffering from with a touch as an action." },
    "Genius Chemist": { class: "alchemist", level: 16, description: "You can create any common or uncommon alchemical item (potions, antitoxin, etc.) in 1 round without expending material components (once per short or long rest). You gain a +2 bonus to your Intelligence score, up to its maximum of 20." },
    "Immortal Alchemist": { class: "alchemist", level: 17, description: "You have perfected the Elixir of Life. You stop aging and can't be aged magically. You gain resistance to all damage types for one minute once per long rest." },

    // Scholar Feats
    "Prodigy": { class: "scholar", level: 1, description: "You gain proficiency in one additional skill, one tool, and one language of your choice. You also gain expertise in one skill you are proficient in." },
    "Keen Observer": { class: "scholar", level: 2, description: "You have advantage on Wisdom (Perception) checks made to find hidden objects or clues. Your passive Perception score increases by 5." },
    "Field Expert": { class: "scholar", level: 3, description: "You gain an additional feature from your Scholarly Pursuit at this level, as chosen by your DM." },
    "Linguist": { class: "scholar", level: 4, description: "You learn three additional languages of your choice. You can read and write any nonmagical writing. You have advantage on Intelligence (Investigation) checks made to decipher codes or puzzles." },
    "Team Leader": { class: "scholar", level: 5, description: "As a bonus action, you can choose one ally within 30 feet who can hear you. That ally can add your Intelligence modifier to their next attack roll or ability check before the end of their next turn." },
    "Master Tactician": { class: "scholar", level: 6, description: "When you roll initiative, you can exchange your place in the initiative order with one willing creature. You have advantage on Intelligence (Strategy) checks to plan or execute complex maneuvers." },
    "Defensive Study": { class: "scholar", level: 7, description: "When you make an Intelligence or Wisdom saving throw, you can add your proficiency bonus to the roll if you are not already proficient in that saving throw." },
    "Observant": { class: "scholar", level: 8, description: "Increase your Intelligence or Wisdom score by 1, to a maximum of 20. If you can see a creature's mouth, you can interpret what it's saying by moving your lips, even if you don't understand the language. Your passive Perception and passive Investigation scores increase by 5." },
    "Skilled": { class: "scholar", level: 9, description: "You gain proficiency in any combination of three skills or tools of your choice." },
    "Brilliant Mind": { class: "scholar", level: 10, description: "You can perfectly recall anything you have seen or heard. You gain advantage on any Intelligence check you make to recall information." },
    "Iron Will": { class: "scholar", level: 11, description: "You are immune to being charmed or frightened. You have advantage on saving throws against effects that would attempt to read your thoughts or dominate your mind." },
    "Tough": { class: "scholar", level: 12, description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points." },
    "Grand Strategist": { class: "scholar", level: 13, description: "Once per long rest, before combat begins, you can spend 1 minute devising a strategy. Up to six creatures of your choice (including yourself) gain advantage on their first attack roll or saving throw in the first round of combat." },
    "Living Library": { class: "scholar", level: 14, description: "You are considered proficient in all Intelligence-based skills. If you are already proficient, you add double your proficiency bonus. You can instantly access any information you have ever read or heard." },
    "Unshakable Mind": { class: "scholar", level: 15, description: "You are immune to any effect that would reduce your Intelligence or Wisdom score. You also have resistance to psychic damage." },
    "Alert": { class: "scholar", level: 16, description: "+5 bonus to initiative. You can't be surprised while conscious. Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you." },
    "The Pinnacle of Thought": { class: "scholar", level: 17, description: "Your intellect transcends mortal comprehension. Once per long rest, you can enter a state of heightened mental acuity for 1 minute, during which you have advantage on all Intelligence and Wisdom ability checks and saving throws, and you can understand any language spoken to you." }
};

// Spell definitions with detailed information
export const spellDefinitions = {
    // Cantrips
    "Acid Splash": { level: 0, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: "1d6 acid", description: "Hurl a bubble of acid at one or two creatures within 5 feet of each other." },
    "Blade Ward": { level: 0, school: "Abjuration", castingTime: "1 action", range: "Self", damage: null, description: "Gain resistance to bludgeoning, piercing, and slashing damage from weapon attacks for 1 round." },
    "Chill Touch": { level: 0, school: "Necromancy", castingTime: "1 action", range: "120 feet", damage: "1d8 necrotic", description: "A skeletal hand attacks. If hit, target can't regain hit points until start of your next turn, and undead have disadvantage on attacks against you." },
    "Dancing Lights": { level: 0, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: null, description: "Create up to four torch-sized lights that hover in the air." },
    "Druidcraft": { level: 0, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "Whispering to spirits of nature, you create minor sensory effects related to nature." },
    "Eldritch Blast": { level: 0, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "1d10 force", description: "A beam of crackling energy streaks toward a creature." },
    "Fire Bolt": { level: 0, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "1d10 fire", description: "You hurl a mote of fire at a creature or object within range." },
    "Friends": { level: 0, school: "Enchantment", castingTime: "1 action", range: "Self", damage: null, description: "For 1 minute, you have advantage on all Charisma checks directed at one creature. When the spell ends, the creature may become hostile." },
    "Frost Bolt": { level: 0, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "1d8 cold", description: "A bolt of freezing energy that can slow enemies." },
    "Guidance": { level: 0, school: "Divination", castingTime: "1 action", range: "Touch", damage: null, description: "Touch a willing creature to give them a d4 bonus to one ability check of their choice." },
    "Light": { level: 0, school: "Evocation", castingTime: "1 action", range: "Touch", damage: null, description: "An object you touch sheds bright light in a 20-foot radius." },
    "Mage Hand": { level: 0, school: "Conjuration", castingTime: "1 action", range: "30 feet", damage: null, description: "A spectral hand appears and can manipulate objects." },
    "Mending": { level: 0, school: "Transmutation", castingTime: "1 minute", range: "Touch", damage: null, description: "Repairs a single break or tear in an object you touch." },
    "Message": { level: 0, school: "Transmutation", castingTime: "1 action", range: "120 feet", damage: null, description: "You whisper a message to a creature within range that only they can hear." },
    "Minor Illusion": { level: 0, school: "Illusion", castingTime: "1 action", range: "30 feet", damage: null, description: "Create a sound or image for 1 minute." },
    "Poison Spray": { level: 0, school: "Conjuration", castingTime: "1 action", range: "10 feet", damage: "1d12 poison", description: "Project a puff of noxious gas. Target must make a Constitution saving throw." },
    "Prestidigitation": { level: 0, school: "Transmutation", castingTime: "1 action", range: "10 feet", damage: null, description: "Simple magical effects like lighting candles or cleaning objects." },
    "Ray of Frost": { level: 0, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: "1d8 cold", description: "A beam of frigid air. Hit creature's speed is reduced by 10 feet." },
    "Resistance": { level: 0, school: "Abjuration", castingTime: "1 action", range: "Touch", damage: null, description: "Touch a creature to give them a d4 bonus to one saving throw." },
    "Sacred Flame": { level: 0, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: "1d8 radiant", description: "Flame-like radiance descends on a creature. Target gains no benefit from cover for this saving throw." },
    "Sapping Sting": { level: 0, school: "Necromancy", castingTime: "1 action", range: "30 feet", damage: "1d4 necrotic", description: "A string of necrotic energy saps the strength of a foe. On a failed Constitution save, the target takes damage and is knocked prone." },
    "Shillelagh": { level: 0, school: "Transmutation", castingTime: "1 bonus action", range: "Touch", damage: null, description: "Wood of a club or quarterstaff you are holding is imbued with nature's power. Use your spellcasting ability for attack and damage rolls, damage die becomes a d8." },
    "Shocking Grasp": { level: 0, school: "Evocation", castingTime: "1 action", range: "Touch", damage: "1d8 lightning", description: "Lightning springs from your hand. Advantage on attack roll if target is wearing metal armor." },
    "Spark": { level: 0, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: "1d4 fire", description: "A spark of magical energy strikes a target." },
    "Thaumaturgy": { level: 0, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "You manifest a minor wonder, a sign of supernatural power, such as causing tremors, changing your eye color, or making a door slam shut." },
    "Thorn Whip": { level: 0, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: "1d6 piercing", description: "Create a whip of thorns that pulls enemies closer." },
    "Toll the Dead": { level: 0, school: "Necromancy", castingTime: "1 action", range: "60 feet", damage: "1d8 necrotic", description: "A dolorous bell tolls. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage." },
    "Vicious Mockery": { level: 0, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: "1d4 psychic", description: "Unleash a string of insults. If the target fails a Wisdom save, it takes damage and has disadvantage on its next attack roll." },

    // Level 1 Spells
    "Armor of Agathys": { level: 1, school: "Abjuration", castingTime: "1 action", range: "Self", damage: "5 cold", description: "A protective magical force surrounds you, manifesting as a spectral frost. You gain 5 temporary hit points, and any creature that hits you with a melee attack takes 5 cold damage." },
    "Bless": { level: 1, school: "Enchantment", castingTime: "1 action", range: "30 feet", damage: null, description: "Up to three creatures gain a d4 bonus to attack rolls and saving throws." },
    "Burning Hands": { level: 1, school: "Evocation", castingTime: "1 action", range: "Self (15-foot cone)", damage: "3d6 fire", description: "A thin sheet of flames shoots forth from your outstretched fingertips." },
    "Cause Fear": { level: 1, school: "Necromancy", castingTime: "1 action", range: "60 feet", damage: null, description: "Frighten a creature for up to 1 minute." },
    "Chaos Bolt": { level: 1, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "2d8 + 1d6", description: "Hurl an undulating, warbling mass of chaotic energy at one creature. The attack has a random damage type, and can leap to a new target." },
    "Charm Person": { level: 1, school: "Enchantment", castingTime: "1 action", range: "30 feet", damage: null, description: "Charm a humanoid for 1 hour." },
    "Chromatic Orb": { level: 1, school: "Evocation", castingTime: "1 action", range: "90 feet", damage: "3d8 acid, cold, fire, lightning, poison, or thunder", description: "Hurl a sphere of energy. Choose a damage type upon casting." },
    "Color Spray": { level: 1, school: "Illusion", castingTime: "1 action", range: "Self (15-foot cone)", damage: null, description: "A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can affect, blinding them." },
    "Command": { level: 1, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "You speak a one-word command to a creature. It must obey on its next turn." },
    "Cure Light Wounds": { level: 1, school: "Evocation", castingTime: "1 action", range: "Touch", damage: null, description: "This is a legacy name. See 'Cure Wounds'. Restores 1d8 + spellcasting ability modifier hit points." },
    "Cure Wounds": { level: 1, school: "Evocation", castingTime: "1 action", range: "Touch", damage: null, description: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier." },
    "Detect Thoughts": { level: 1, school: "Divination", castingTime: "1 action", range: "Self", damage: null, description: "You read the surface thoughts of one creature within 30 feet." },
    "Disguise Self": { level: 1, school: "Illusion", castingTime: "1 action", range: "Self", damage: null, description: "Change your appearance for 1 hour." },
    "Entangle": { level: 1, school: "Conjuration", castingTime: "1 action", range: "90 feet", damage: null, description: "Grasping weeds and vines sprout from the ground in a 20-foot square, restraining creatures." },
    "Faerie Fire": { level: 1, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "Each object in a 20-foot cube within range is outlined in light. Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. Any attack roll against an affected creature or object has advantage if the attacker can see it." },
    "False Life": { level: 1, school: "Necromancy", castingTime: "1 action", range: "Self", damage: null, description: "Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for 1 hour." },
    "Find Familiar": { level: 1, school: "Conjuration", castingTime: "1 hour", range: "10 feet", damage: null, description: "You gain the service of a familiar, a spirit that takes an animal form you choose." },
    "Guiding Bolt": { level: 1, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "4d6 radiant", description: "Make a ranged spell attack. On a hit, the next attack against the target has advantage." },
    "Hail of Thorns": { level: 1, school: "Conjuration", castingTime: "1 bonus action", range: "Self", damage: "1d10 piercing", description: "Next time you hit with a ranged weapon attack, thorns explode from it. Target and creatures within 5 ft take damage." },
    "Healing Word": { level: 1, school: "Evocation", castingTime: "1 bonus action", range: "60 feet", damage: null, description: "A creature of your choice regains 1d4 + your spellcasting ability modifier hit points." },
    "Hellish Rebuke": { level: 1, school: "Evocation", castingTime: "1 reaction", range: "60 feet", damage: "2d10 fire", description: "A creature that damages you is momentarily surrounded by hellish flames." },
    "Hex": { level: 1, school: "Enchantment", castingTime: "1 bonus action", range: "90 feet", damage: null, description: "Curse a creature to take an extra 1d6 necrotic damage from your attacks and have disadvantage on an ability of your choice." },
    "Inflict Wounds": { level: 1, school: "Necromancy", castingTime: "1 action", range: "Touch", damage: "3d10 necrotic", description: "Make a melee spell attack to deal necrotic damage." },
    "Magic Missile": { level: 1, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "1d4+1 force", description: "Three darts of magical force automatically hit their targets (per dart)." },
    "Protection from Evil and Good": { level: 1, school: "Abjuration", castingTime: "1 action", range: "Touch", damage: null, description: "Protect a creature against aberrations, celestials, elementals, fey, fiends, and undead." },
    "Ray of Sickness": { level: 1, school: "Necromancy", castingTime: "1 action", range: "60 feet", damage: "2d8 poison", description: "Ranged spell attack that can poison the target." },
    "Sanctuary": { level: 1, school: "Abjuration", castingTime: "1 bonus action", range: "30 feet", damage: null, description: "Protect a creature from attacks until they attack or cast a spell." },
    "Shield": { level: 1, school: "Abjuration", castingTime: "1 reaction", range: "Self", damage: null, description: "An invisible barrier protects you, adding +5 to AC until the start of your next turn." },
    "Shield of Faith": { level: 1, school: "Abjuration", castingTime: "1 bonus action", range: "60 feet", damage: null, description: "Creature gains +2 AC for 10 minutes." },
    "Silent Image": { level: 1, school: "Illusion", castingTime: "1 action", range: "60 feet", damage: null, description: "Create an image of an object, creature, or phenomenon for 10 minutes." },
    "Sleep": { level: 1, school: "Enchantment", castingTime: "1 action", range: "90 feet", damage: null, description: "Puts creatures to sleep. Roll 5d8; total is how many HP of creatures fall unconscious." },
    "Speak with Animals": { level: 1, school: "Divination", castingTime: "1 action", range: "Self", damage: null, description: "You can communicate with beasts for 10 minutes." },
    "Tasha's Hideous Laughter": { level: 1, school: "Enchantment", castingTime: "1 action", range: "30 feet", damage: null, description: "A creature falls into fits of laughter, becoming incapacitated and prone." },
    "Thunderous Smite": { level: 1, school: "Evocation", castingTime: "1 bonus action", range: "Self", damage: "2d6 thunder", description: "Your next melee weapon hit deals an extra 2d6 thunder damage and pushes the target 10 feet." },
    "Thunderwave": { level: 1, school: "Evocation", castingTime: "1 action", range: "Self (15-foot cube)", damage: "2d8 thunder", description: "A wave of thunderous force sweeps out. Each creature in a 15-foot cube pushed 10 feet away." },
    "Unseen Servant": { level: 1, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command." },

    // Level 2 Spells
    "Aid": { level: 2, school: "Abjuration", castingTime: "1 action", range: "30 feet", damage: null, description: "Bolster up to three creatures, increasing their current and maximum hit points by 5." },
    "Augury": { level: 2, school: "Divination", castingTime: "1 minute", range: "Self", damage: null, description: "Receive an omen about the results of a specific course of action." },
    "Barkskin": { level: 2, school: "Transmutation", castingTime: "1 action", range: "Touch", damage: null, description: "Touch a willing creature. Its AC can't be less than 16 for up to 1 hour." },
    "Blindness/Deafness": { level: 2, school: "Necromancy", castingTime: "1 action", range: "30 feet", damage: null, description: "Blind or deafen a creature." },
    "Blur": { level: 2, school: "Illusion", castingTime: "1 action", range: "Self", damage: null, description: "Your body becomes blurred. Attackers have disadvantage on attack rolls against you." },
    "Branding Smite": { level: 2, school: "Evocation", castingTime: "1 bonus action", range: "Self", damage: "2d6 radiant", description: "Your next melee weapon hit deals an extra 2d6 radiant damage and makes the target visible if invisible." },
    "Enlarge/Reduce": { level: 2, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "Make a creature or object larger or smaller." },
    "Gentle Repose": { level: 2, school: "Necromancy", castingTime: "1 action", range: "Touch", damage: null, description: "Preserve a corpse from decay for 10 days." },
    "Hold Person": { level: 2, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "Paralyze a humanoid creature that fails a Wisdom saving throw." },
    "Invisibility": { level: 2, school: "Illusion", castingTime: "1 action", range: "Touch", damage: null, description: "A creature you touch becomes invisible for up to 1 hour." },
    "Lesser Restoration": { level: 2, school: "Abjuration", castingTime: "1 action", range: "Touch", damage: null, description: "Cure one disease or one condition (blinded, deafened, paralyzed, poisoned)." },
    "Magic Weapon": { level: 2, school: "Transmutation", castingTime: "1 bonus action", range: "Touch", damage: null, description: "A nonmagical weapon you touch becomes a magic weapon with a +1 bonus to attack and damage rolls." },
    "Mirror Image": { level: 2, school: "Illusion", castingTime: "1 action", range: "Self", damage: null, description: "Three illusory duplicates of yourself appear in your space." },
    "Misty Step": { level: 2, school: "Conjuration", castingTime: "1 bonus action", range: "Self", damage: null, description: "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see." },
    "Moonbeam": { level: 2, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "2d10 radiant", description: "Create a beam of moonlight that damages creatures who enter or start their turn in it." },
    "Pass without Trace": { level: 2, school: "Abjuration", castingTime: "1 action", range: "Self", damage: null, description: "You and up to 10 creatures gain +10 to Dexterity (Stealth) checks for 1 hour." },
    "Phantasmal Force": { level: 2, school: "Illusion", castingTime: "1 action", range: "60 feet", damage: "1d6 psychic", description: "Create an illusion in a creature's mind that only it can perceive." },
    "Ray of Enfeeblement": { level: 2, school: "Necromancy", castingTime: "1 action", range: "60 feet", damage: null, description: "A ray of dark energy halves the weapon damage of a creature." },
    "Scorching Ray": { level: 2, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "2d6 fire", description: "Three rays of fire strike targets (per ray)." },
    "Shatter": { level: 2, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: "3d8 thunder", description: "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range." },
    "Spike Growth": { level: 2, school: "Transmutation", castingTime: "1 action", range: "150 feet", damage: "2d4 piercing", description: "Ground in a 20-foot radius sprouts hard spikes, becoming difficult terrain that damages those who move through it." },
    "Spiritual Weapon": { level: 2, school: "Evocation", castingTime: "1 bonus action", range: "60 feet", damage: "1d8 + spellcasting mod force", description: "Create a floating weapon that attacks for 1 minute." },
    "Suggestion": { level: 2, school: "Enchantment", castingTime: "1 action", range: "30 feet", damage: null, description: "Suggest a course of activity to a creature, which it follows to the best of its ability." },
    "Summon Beast": { level: 2, school: "Conjuration", castingTime: "1 action", range: "90 feet", damage: null, description: "Summon a fey spirit in the form of a beast to fight for you." },
    "Summon Beast (Lesser)": { level: 2, school: "Conjuration", castingTime: "1 action", range: "90 feet", damage: null, description: "You summon a fey spirit that takes the form of a beast of CR 1/2 or lower." },
    "Web": { level: 2, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "Thick, sticky webbing fills a 20-foot cube, restraining creatures." },
    "Zone of Truth": { level: 2, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "Create a zone where creatures cannot speak a deliberate lie." },

    // Level 3 Spells
    "Animate Dead": { level: 3, school: "Necromancy", castingTime: "1 minute", range: "10 feet", damage: null, description: "Create an undead servant from a pile of bones or a corpse." },
    "Aura of Vitality": { level: 3, school: "Evocation", castingTime: "1 action", range: "Self (30-foot radius)", damage: null, description: "An aura of healing extends from you. As a bonus action, you can heal one creature in the aura for 2d6 hit points." },
    "Beacon of Hope": { level: 3, school: "Abjuration", castingTime: "1 action", range: "30 feet", damage: null, description: "Creatures have advantage on Wisdom and death saving throws, and regain maximum hit points from healing." },
    "Bestow Curse": { level: 3, school: "Necromancy", castingTime: "1 action", range: "Touch", damage: null, description: "Curse a creature with various detrimental effects." },
    "Call Lightning": { level: 3, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "3d10 lightning", description: "Call down lightning bolts from a storm cloud you create." },
    "Clairvoyance": { level: 3, school: "Divination", castingTime: "10 minutes", range: "1 mile", damage: null, description: "Create an invisible sensor to see or hear a location." },
    "Conjure Animals": { level: 3, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "Summon fey spirits in the form of a group of beasts." },
    "Conjure Barrage": { level: 3, school: "Conjuration", castingTime: "1 action", range: "Self (60-foot cone)", damage: "3d8 weapon type", description: "Throw a nonmagical weapon or piece of ammunition into the air to create a cone of identical weapons." },
    "Counterspell": { level: 3, school: "Abjuration", castingTime: "1 reaction", range: "60 feet", damage: null, description: "Interrupt a creature's spellcasting attempt." },
    "Crusader's Mantle": { level: 3, school: "Evocation", castingTime: "1 action", range: "Self", damage: null, description: "Holy power radiates from you in an aura. Until the spell ends, the aura moves with you. Each non-hostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack." },
    "Dispel Magic": { level: 3, school: "Abjuration", castingTime: "1 action", range: "120 feet", damage: null, description: "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on it ends." },
    "Fear": { level: 3, school: "Illusion", castingTime: "1 action", range: "Self (30-foot cone)", damage: null, description: "Frighten creatures in a cone." },
    "Fireball": { level: 3, school: "Evocation", castingTime: "1 action", range: "150 feet", damage: "8d6 fire", description: "A bright flash and thunderous boom as fire explodes in a 20-foot radius." },
    "Flame Arrows": { level: 3, school: "Transmutation", castingTime: "1 action", range: "Touch", damage: "1d6 fire", description: "Touch a quiver. For the duration, ammunition drawn from it deals an extra 1d6 fire damage on a hit." },
    "Fly": { level: 3, school: "Transmutation", castingTime: "1 action", range: "Touch", damage: null, description: "Target gains a flying speed of 60 feet for 10 minutes." },
    "Haste": { level: 3, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "Target gains +2 AC, advantage on Dex saves, and an additional action." },
    "Hypnotic Pattern": { level: 3, school: "Illusion", castingTime: "1 action", range: "120 feet", damage: null, description: "Creates a twisting pattern of colors that charms creatures within a 30-foot cube." },
    "Lightning Arrow": { level: 3, school: "Transmutation", castingTime: "1 bonus action", range: "Self", damage: "4d8 lightning", description: "Next ranged weapon attack deals extra lightning damage, and lightning leaps to others." },
    "Lightning Bolt": { level: 3, school: "Evocation", castingTime: "1 action", range: "Self (100-foot line)", damage: "8d6 lightning", description: "A stroke of lightning forms a line 100 feet long and 5 feet wide." },
    "Major Image": { level: 3, school: "Illusion", castingTime: "1 action", range: "120 feet", damage: null, description: "Create an image with sound, smell, and temperature." },
    "Phantom Steed": { level: 3, school: "Illusion", castingTime: "1 minute", range: "30 feet", damage: null, description: "Create a quasi-real horse for 1 hour." },
    "Plant Growth": { level: 3, school: "Transmutation", castingTime: "1 action or 8 hours", range: "150 feet", damage: null, description: "Make plants grow or enrich the land." },
    "Prayer of Healing": { level: 3, school: "Evocation", castingTime: "10 minutes", range: "30 feet", damage: null, description: "Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier." },
    "Protection from Energy": { level: 3, school: "Abjuration", castingTime: "1 action", range: "Touch", damage: null, description: "Grant resistance to one damage type for 1 hour." },
    "Revivify": { level: 3, school: "Necromancy", castingTime: "1 action", range: "Touch", damage: null, description: "Return a creature that died within 1 minute to life with 1 hit point." },
    "Sending": { level: 3, school: "Evocation", castingTime: "1 action", range: "Unlimited", damage: null, description: "Send a short message of twenty-five words or less to a creature with which you are familiar." },
    "Speak with Dead": { level: 3, school: "Necromancy", castingTime: "1 action", range: "10 feet", damage: null, description: "Ask up to five questions of a corpse." },
    "Spirit Guardians": { level: 3, school: "Conjuration", castingTime: "1 action", range: "Self (15-foot radius)", damage: "3d8 radiant or necrotic", description: "Spectral beings protect you and damage enemies nearby." },
    "Spirit Shroud": { level: 3, school: "Necromancy", castingTime: "1 bonus action", range: "Self", damage: null, description: "Spirits surround you. Your attacks deal an extra 1d8 damage (radiant, necrotic, or cold) and reduce target's speed." },
    "Summon Lesser Demons": { level: 3, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "You summon d6 small demons which appear in unoccupied spaces that you can see within range. They are hostile to all creatures." },
    "Tongues": { level: 3, school: "Divination", castingTime: "1 action", range: "Touch", damage: null, description: "This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says." },
    "Vampiric Touch": { level: 3, school: "Necromancy", castingTime: "1 action", range: "Self", damage: "3d6 necrotic", description: "Touch deals necrotic damage and heals you for half the damage dealt." },
    "Wind Wall": { level: 3, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: null, description: "Create a wall of strong wind that deflects projectiles." },

    // Level 4 Spells
    "Aura of Purity": { level: 4, school: "Abjuration", castingTime: "1 action", range: "Self (30-foot radius)", damage: null, description: "Purifying energy radiates from you. Each non-hostile creature in the area (including you) is immune to disease, has resistance to poison damage, and has advantage on saving throws against effects that cause the blinded, charmed, deafened, frightened, paralyzed, or stunned conditions." },
    "Banishment": { level: 4, school: "Abjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "Attempt to send one creature that you can see within range to another plane of existence." },
    "Blight": { level: 4, school: "Necromancy", castingTime: "1 action", range: "30 feet", damage: "8d8 necrotic", description: "Drain life from a creature or plant." },
    "Blinding Smite": { level: 4, school: "Evocation", castingTime: "1 bonus action", range: "Self", damage: "3d8 radiant", description: "Your next melee weapon hit deals an extra 3d8 radiant damage and must succeed on a Constitution saving throw or be blinded." },
    "Confusion": { level: 4, school: "Enchantment", castingTime: "1 action", range: "90 feet", damage: null, description: "An area is filled with a disorienting effect. An affected creature can't take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn." },
    "Conjure Animals (Specific version)": { level: 4, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "Summon fey spirits in powerful animal forms to fight alongside you. The DM has the creatures' statistics." },
    "Death Ward": { level: 4, school: "Abjuration", castingTime: "1 action", range: "Touch", damage: null, description: "The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends." },
    "Dimension Door": { level: 4, school: "Conjuration", castingTime: "1 action", range: "500 feet", damage: null, description: "Teleport yourself and one willing creature up to 500 feet." },
    "Divination": { level: 4, school: "Divination", castingTime: "1 action", range: "Self", damage: null, description: "Your magic and an offering grant you a useful reply to a single question concerning a specific goal, event, or activity to occur within 7 days." },
    "Dominate Beast": { level: 4, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "You attempt to beguile a beast that you can see within range." },
    "Greater Healing Word": { level: 4, school: "Evocation", castingTime: "1 bonus action", range: "60 feet", damage: null, description: "A creature of your choice regains 4d4 + your spellcasting ability modifier hit points." },
    "Greater Invisibility": { level: 4, school: "Illusion", castingTime: "1 action", range: "Touch", damage: null, description: "Become invisible for 1 minute, even while attacking." },
    "Guardian of Faith": { level: 4, school: "Conjuration", castingTime: "1 action", range: "30 feet", damage: "20 radiant", description: "Create a guardian that attacks enemies who come near." },
    "Guardian of Nature": { level: 4, school: "Transmutation", castingTime: "1 bonus action", range: "Self", damage: null, description: "You transform into a Primal Guardian or Great Tree, gaining various benefits." },
    "Hallucinatory Terrain": { level: 4, school: "Illusion", castingTime: "10 minutes", range: "300 feet", damage: null, description: "Make natural terrain look like different terrain." },
    "Ice Storm": { level: 4, school: "Evocation", castingTime: "1 action", range: "300 feet", damage: "2d8 bludgeoning + 4d6 cold", description: "A hail of rock-hard ice pounds to the ground in a 20-foot-radius cylinder." },
    "Locate Creature": { level: 4, school: "Divination", castingTime: "1 action", range: "Self", damage: null, description: "Describe or name a creature familiar to you. Sense the direction to the creature's location, provided that creature is within 1,000 feet of you." },
    "Modify Memory": { level: 4, school: "Enchantment", castingTime: "1 action", range: "30 feet", damage: null, description: "You attempt to reshape another creature's memories. One creature that you can see must make a Wisdom saving throw." },
    "Phantasmal Killer": { level: 4, school: "Illusion", castingTime: "1 action", range: "120 feet", damage: "4d10 psychic", description: "You tap into the nightmares of a creature to create an illusory manifestation of its deepest fears." },
    "Polymorph": { level: 4, school: "Transmutation", castingTime: "1 action", range: "60 feet", damage: null, description: "Transform a creature into a new form." },
    "Shadow of Moil": { level: 4, school: "Necromancy", castingTime: "1 action", range: "Self", damage: null, description: "Surround yourself with shadows that hide you and harm attackers." },
    "Staggering Smite": { level: 4, school: "Evocation", castingTime: "1 bonus action", range: "Self", damage: "4d6 psychic", description: "Your next melee weapon hit deals an extra 4d6 psychic damage and gives the target disadvantage on attack rolls and ability checks." },
    "Stoneskin": { level: 4, school: "Abjuration", castingTime: "1 action", range: "Touch", damage: null, description: "Target gains resistance to nonmagical bludgeoning, piercing, and slashing damage." },
    "Summon Elemental": { level: 4, school: "Conjuration", castingTime: "1 action", range: "90 feet", damage: null, description: "You call forth an elemental servant. Choose an area of air, earth, fire, or water. An elemental of challenge rating 5 or lower appears." },
    "Wall of Fire": { level: 4, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "5d8 fire", description: "Create a wall of fire on a solid surface." },

    // Level 5 Spells
    "Animate Objects": { level: 5, school: "Transmutation", castingTime: "1 action", range: "120 feet", damage: "Varies", description: "Objects come to life at your command." },
    "Banishing Smite": { level: 5, school: "Abjuration", castingTime: "1 bonus action", range: "Self", damage: "5d10 force", description: "Your next melee weapon hit deals an extra 5d10 force damage. If this damage reduces the target to 50 HP or fewer, you banish it." },
    "Circle of Power": { level: 5, school: "Abjuration", castingTime: "1 action", range: "Self (30-foot radius)", damage: null, description: "An aura of power extends from you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects." },
    "Commune with Nature": { level: 5, school: "Divination", castingTime: "1 minute", range: "Self", damage: null, description: "Briefly become one with nature and gain information about the surrounding land." },
    "Cone of Cold": { level: 5, school: "Evocation", castingTime: "1 action", range: "Self (60-foot cone)", damage: "8d8 cold", description: "Blast of cold air erupts from your hands in a 60-foot cone." },
    "Danse Macabre": { level: 5, school: "Necromancy", castingTime: "1 action", range: "60 feet", damage: null, description: "Threads of dark power animate up to five Small or Medium corpses, which become skeletons or zombies under your control." },
    "Destructive Wave": { level: 5, school: "Evocation", castingTime: "1 action", range: "Self (30-foot radius)", damage: "5d6 thunder + 5d6 radiant or necrotic", description: "You strike the ground, creating a burst of divine energy." },
    "Dispel Evil and Good": { level: 5, school: "Abjuration", castingTime: "1 action", range: "Self", damage: null, description: "Shimmering energy surrounds and protects you from fey, undead, and fiends." },
    "Dominate Person": { level: 5, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "You attempt to beguile a humanoid that you can see within range." },
    "Enervation": { level: 5, school: "Necromancy", castingTime: "1 action", range: "60 feet", damage: "4d8 necrotic", description: "A tendril of dark energy leeches life from a creature and transfers it to you." },
    "Geas": { level: 5, school: "Enchantment", castingTime: "1 minute", range: "60 feet", damage: "5d10 psychic", description: "Place a magical command on a creature that it must follow or take psychic damage." },
    "Greater Restoration": { level: 5, school: "Abjuration", castingTime: "1 action", range: "Touch", damage: null, description: "Remove one debilitating effect from a creature, such as a curse, reduction to an ability score, or a petrification." },
    "Hold Monster": { level: 5, school: "Enchantment", castingTime: "1 action", range: "90 feet", damage: null, description: "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration." },
    "Mass Cure Wounds": { level: 5, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "Heal up to 6 creatures for 3d8 + modifier each." },
    "Negative Energy Flood": { level: 5, school: "Necromancy", castingTime: "1 action", range: "60 feet", damage: "5d12 necrotic", description: "Flood a creature with negative energy. If it dies, it rises as a zombie." },
    "Planar Binding": { level: 5, school: "Abjuration", castingTime: "1 hour", range: "60 feet", damage: null, description: "With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service." },
    "Raise Dead": { level: 5, school: "Necromancy", castingTime: "1 hour", range: "Touch", damage: null, description: "You return a dead creature you touch to life, provided that it has been dead for no longer than 10 days." },
    "Reincarnate": { level: 5, school: "Transmutation", castingTime: "1 hour", range: "Touch", damage: null, description: "You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead for no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body." },
    "Scrying": { level: 5, school: "Divination", castingTime: "10 minutes", range: "Self", damage: null, description: "You can see and hear a particular creature you choose that is on the same plane of existence as you." },
    "Steel Wind Strike": { level: 5, school: "Conjuration", castingTime: "1 action", range: "30 feet", damage: "6d10 force", description: "You flourish your weapon and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each one." },
    "Summon Celestial": { level: 5, school: "Conjuration", castingTime: "1 action", range: "90 feet", damage: null, description: "You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range." },
    "Synaptic Static": { level: 5, school: "Enchantment", castingTime: "1 action", range: "120 feet", damage: "8d6 psychic", description: "You choose a point within range and cause psychic energy to explode there. Each creature in a 20-foot-radius sphere must make an Intelligence saving throw." },
    "Telekinesis": { level: 5, school: "Transmutation", castingTime: "1 action", range: "60 feet", damage: null, description: "Move objects or creatures with your mind." },
    "Teleport (Short Range)": { level: 5, school: "Conjuration", castingTime: "1 action", range: "Special", damage: null, description: "This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If the target is an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature." },
    "Teleportation Circle": { level: 5, school: "Conjuration", castingTime: "1 minute", range: "10 feet", damage: null, description: "You create a 10-foot-diameter circular, horizontal portal that remains open until the end of your next turn." },
    "Tree Stride": { level: 5, school: "Conjuration", castingTime: "1 action", range: "Self", damage: null, description: "Step into a tree and emerge from another tree up to 500 feet away." },
    "Wall of Force": { level: 5, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: null, description: "An invisible wall of force springs into existence." },
    "Wall of Light": { level: 5, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "4d8 radiant", description: "A shimmering wall of bright light appears at a point you choose. Creatures passing through it are blinded and take damage." },
    "Wall of Stone": { level: 5, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: null, description: "A nonmagical wall of solid stone springs into existence at a point you choose within range." },
    "Wrath of Nature": { level: 5, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "Varies", description: "Call upon the spirits of nature to wreak havoc. Choose effects like grasping roots, animated trees, or rock slides." },

    // Level 6 Spells
    "Antimagic Field": { level: 6, school: "Abjuration", castingTime: "1 action", range: "Self (10-foot-radius sphere)", damage: null, description: "A 10-foot-radius invisible sphere of antimagic surrounds you. Spells and other magical effects are suppressed inside the sphere." },
    "Bones of the Earth": { level: 6, school: "Transmutation", castingTime: "1 action", range: "120 feet", damage: "6d6 bludgeoning", description: "You cause up to six pillars of stone to burst from places on the ground that you can see." },
    "Chain Lightning": { level: 6, school: "Evocation", castingTime: "1 action", range: "150 feet", damage: "10d8 lightning", description: "Create a bolt of lightning that arcs from the primary target to up to three other targets." },
    "Circle of Death": { level: 6, school: "Necromancy", castingTime: "1 action", range: "150 feet", damage: "8d6 necrotic", description: "A sphere of negative energy radiates from a point. Each creature in a 60-foot-radius sphere must make a Constitution saving throw." },
    "Conjure Celestial": { level: 6, school: "Conjuration", castingTime: "1 minute", range: "90 feet", damage: null, description: "You summon a celestial of challenge rating 4 or lower." },
    "Conjure Elemental (Greater)": { level: 6, school: "Conjuration", castingTime: "1 minute", range: "90 feet", damage: null, description: "You call forth a powerful elemental servant of CR 7 or lower." },
    "Conjure Fey": { level: 6, school: "Conjuration", castingTime: "1 minute", range: "90 feet", damage: null, description: "You summon a fey creature of challenge rating 6 or lower." },
    "Create Homunculus": { level: 6, school: "Transmutation", castingTime: "1 hour", damage: null, description: "You create a homunculus servant that obeys your commands." },
    "Create Undead": { level: 6, school: "Necromancy", castingTime: "1 minute", range: "10 feet", damage: null, description: "You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control." },
    "Disintegrate": { level: 6, school: "Transmutation", castingTime: "1 action", range: "60 feet", damage: "10d6 + 40 force", description: "A thin green ray springs from your pointing finger. A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated." },
    "Eyebite": { level: 6, school: "Necromancy", castingTime: "1 action", range: "Self", damage: null, description: "Your eyes become an inky void for the spell's duration. As an action, you can affect a creature with one of three effects: Asleep, Panicked, or Sickened." },
    "Find the Path": { level: 6, school: "Divination", castingTime: "1 minute", range: "Self", damage: null, description: "Find the shortest, most direct physical route to a specified fixed location." },
    "Flesh to Stone": { level: 6, school: "Transmutation", castingTime: "1 action", range: "60 feet", damage: null, description: "You attempt to turn one creature that you can see within range into stone." },
    "Forbiddance": { level: 6, school: "Abjuration", castingTime: "10 minutes", range: "Touch", damage: "5d10 radiant or necrotic", description: "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor." },
    "Globe of Invulnerability": { level: 6, school: "Abjuration", castingTime: "1 action", range: "Self (10-foot radius)", damage: null, description: "An immobile, faintly shimmering barrier blocks spells of 5th level or lower from entering." },
    "Heal": { level: 6, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "Choose a creature that you can see within range. A wave of healing energy washes over it, restoring 70 hit points." },
    "Heal (Nature version)": { level: 6, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "A surge of natural energy restores 70 hit points to a creature." },
    "Heroes' Feast": { level: 6, school: "Conjuration", castingTime: "10 minutes", range: "30 feet", damage: null, description: "You bring forth a great feast, which cures diseases, grants immunity to poison and being frightened, and provides temporary hit points." },
    "Mass Heal (Bardic)": { level: 9, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "A wave of healing music washes out from you. Choose any number of creatures in a 30-foot-radius sphere centered on a point. You restore up to 700 hit points, divided as you choose among them." },
    "Mass Suggestion": { level: 6, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "You suggest a course of activity to up to twelve creatures." },
    "Otto's Irresistible Dance": { level: 6, school: "Enchantment", castingTime: "1 action", range: "30 feet", damage: null, description: "Force a creature to dance uncontrollably." },
    "Soul Cage": { level: 6, school: "Necromancy", castingTime: "1 reaction", range: "60 feet", damage: null, description: "This spell snatches the soul of a humanoid as it dies and traps it inside a tiny cage that you carry." },
    "Sunbeam": { level: 6, school: "Evocation", castingTime: "1 action", range: "Self (60-foot line)", damage: "6d8 radiant", description: "A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line." },
    "Transport via Plants": { level: 6, school: "Conjuration", castingTime: "1 action", range: "10 feet", damage: null, description: "Step into one large plant and emerge from another within 500 miles." },
    "True Seeing": { level: 6, school: "Divination", castingTime: "1 action", range: "Touch", damage: null, description: "Gives the willing creature you touch the ability to see things as they actually are for 1 hour." },
    "Wind Walk": { level: 6, school: "Transmutation", castingTime: "1 minute", range: "30 feet", damage: null, description: "You and up to ten willing creatures transform into a cloud of mist." },
    "Word of Recall": { level: 6, school: "Conjuration", castingTime: "1 action", range: "5 feet", damage: null, description: "You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary." },

    // Level 7 Spells
    "Delayed Blast Fireball": { level: 7, school: "Evocation", castingTime: "1 action", range: "150 feet", damage: "12d6 fire", description: "A beam of yellow light streaks to a point you choose, then blossoms with a low roar into an explosion of flame. You can delay the explosion." },
    "Divine Word": { level: 7, school: "Evocation", castingTime: "1 action", range: "30 feet", damage: null, description: "You speak a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Any creature that hears you must make a Charisma saving throw." },
    "Draconic Transformation (Nature version)": { level: 7, school: "Transmutation", castingTime: "1 bonus action", range: "Self", damage: null, description: "You transform into a nature-infused dragon-like being, gaining wings, a breath weapon, and frightful presence." },
    "Etherealness": { level: 7, school: "Transmutation", castingTime: "1 action", range: "Self", damage: null, description: "Step into the Ethereal Plane for up to 8 hours." },
    "Finger of Death": { level: 7, school: "Necromancy", castingTime: "1 action", range: "60 feet", damage: "7d8 + 30 necrotic", description: "Send negative energy to assail a creature. If it dies, it rises as a zombie under your permanent command." },
    "Fire Storm": { level: 7, school: "Evocation", castingTime: "1 action", range: "150 feet", damage: "7d10 fire", description: "A storm of searing flame roars down in a location you choose. The area of the storm consists of up to ten 10-foot cubes." },
    "Forcecage": { level: 7, school: "Evocation", castingTime: "1 action", range: "100 feet", damage: null, description: "An immobile, invisible, cube-shaped prison composed of magical force springs into existence." },
    "Mirage Arcane": { level: 7, school: "Illusion", castingTime: "10 minutes", range: "Sight", damage: null, description: "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain." },
    "Mirage Arcane (Nature Themed)": { level: 7, school: "Illusion", castingTime: "10 minutes", range: "Sight", damage: null, description: "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of natural terrain." },
    "Plane Shift": { level: 7, school: "Conjuration", castingTime: "1 action", range: "Touch", damage: null, description: "You and up to eight willing creatures link hands and travel to a different plane of existence." },
    "Plane Shift (Nature Paths)": { level: 7, school: "Conjuration", castingTime: "1 action", range: "Touch", damage: null, description: "You use the hidden pathways of nature to transport yourself and others to another plane." },
    "Power Word Pain": { level: 7, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "You speak a word of power that causes waves of intense pain to assail one creature you can see. If the target has 100 hit points or fewer, it is subject to crippling pain." },
    "Prismatic Spray": { level: 7, school: "Evocation", castingTime: "1 action", range: "Self (60-foot cone)", damage: "10d6 (random type)", description: "Eight multicolored rays of light flash from your hand. Each ray has a different power and purpose." },
    "Project Image": { level: 7, school: "Illusion", castingTime: "1 action", range: "500 miles", damage: null, description: "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location you have seen before." },
    "Regenerate": { level: 7, school: "Transmutation", castingTime: "1 minute", range: "Touch", damage: null, description: "Target regains 4d8 + 15 hit points. For 1 hour, target regains 1 hp at start of each of its turns." },
    "Regenerate (Nature version)": { level: 7, school: "Transmutation", castingTime: "1 minute", range: "Touch", damage: null, description: "The target's body is infused with the regenerating power of nature. It regains 4d8 + 15 hit points and 1 hit point at the start of each of its turns for 1 hour." },
    "Resurrection": { level: 7, school: "Necromancy", castingTime: "1 hour", range: "Touch", damage: null, description: "You touch a dead creature that has been dead for no more than a century, that didn’t die of old age, and that isn’t undead. If its soul is free and willing, the creature is restored to life with all its hit points." },
    "Reverse Gravity": { level: 7, school: "Transmutation", castingTime: "1 action", range: "100 feet", damage: null, description: "Reverse gravity in a 50-foot-radius, 100-foot-high cylinder." },
    "Reverse Gravity (Nature's Pull)": { level: 7, school: "Transmutation", castingTime: "1 action", range: "100 feet", damage: null, description: "You mimic the crushing force of a black hole or the overwhelming pull of a celestial body, reversing gravity in a 50-foot-radius, 100-foot-high cylinder." },
    "Sequester": { level: 7, school: "Transmutation", castingTime: "1 action", range: "Touch", damage: null, description: "You hide a willing creature or an object from detection for the duration." },
    "Simulacrum": { level: 7, school: "Illusion", castingTime: "12 hours", range: "Touch", damage: null, description: "You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell." },
    "Symbol": { level: 7, school: "Abjuration", castingTime: "1 minute", range: "Touch", damage: "10d10", description: "Inscribe a harmful glyph that triggers when a certain condition is met." },
    "Teleport": { level: 7, school: "Conjuration", castingTime: "1 action", range: "10 feet", damage: null, description: "This spell instantly transports you and up to eight willing creatures of your choice that you can see within range to a destination you select." },
    "Teleport (Long Range)": { level: 7, school: "Conjuration", castingTime: "1 action", range: "Unlimited on same plane", damage: null, description: "This spell instantly transports you and up to eight willing creatures to a destination you are familiar with." },

    // Level 8 Spells
    "Abi-Dalzim's Horrid Wilting": { level: 8, school: "Necromancy", castingTime: "1 action", range: "150 feet", damage: "12d8 necrotic", description: "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range." },
    "Animal Shapes": { level: 8, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "Transform willing creatures into beasts for up to 24 hours." },
    "Antimagic Field": { level: 8, school: "Abjuration", castingTime: "1 action", range: "Self (10-foot-radius sphere)", damage: null, description: "A 10-foot-radius invisible sphere of antimagic surrounds you. Spells and other magical effects are suppressed inside the sphere." },
    "Antipathy/Sympathy": { level: 8, school: "Enchantment", castingTime: "1 hour", range: "60 feet", damage: null, description: "This spell attracts or repels creatures of your choice." },
    "Clone": { level: 8, school: "Necromancy", castingTime: "1 hour", range: "Touch", damage: null, description: "This spell grows an inert duplicate of a living creature. If the original creature dies, its soul transfers to the clone." },
    "Control Weather": { level: 8, school: "Transmutation", castingTime: "10 minutes", range: "Self (5-mile radius)", damage: null, description: "You take control of the weather within 5 miles of you for 8 hours." },
    "Control Weather (Localized)": { level: 8, school: "Transmutation", castingTime: "10 minutes", range: "Self (1-mile radius)", damage: null, description: "You take control of the weather within 1 mile of you for 8 hours." },
    "Demiplane": { level: 8, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "You create a shadowy door on a flat solid surface that you can see within range. The door leads to a demiplane." },
    "Dominate Monster": { level: 8, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "You attempt to beguile any creature, not just humanoids." },
    "Earthquake": { level: 8, school: "Evocation", castingTime: "1 action", range: "500 feet", damage: "Varies", description: "Create a seismic disturbance in a 100-foot radius on the ground." },
    "Earthquake (Divine)": { level: 8, school: "Evocation", castingTime: "1 action", range: "500 feet", damage: "Varies", description: "You create a seismic disturbance infused with divine power. The ground becomes difficult and sacred/desecrated ground." },
    "Earthquake (Localized)": { level: 8, school: "Evocation", castingTime: "1 action", range: "250 feet", damage: "Varies", description: "Create a seismic disturbance in a 50-foot radius on the ground." },
    "Feeblemind": { level: 8, school: "Enchantment", castingTime: "1 action", range: "150 feet", damage: "4d6 psychic", description: "You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality." },
    "Glibness": { level: 8, school: "Transmutation", castingTime: "1 action", range: "Self", damage: null, description: "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15." },
    "Holy Aura": { level: 8, school: "Abjuration", castingTime: "1 action", range: "Self", damage: null, description: "Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you." },
    "Illusory Dragon": { level: 8, school: "Illusion", castingTime: "1 action", range: "120 feet", damage: "7d6 psychic", description: "You create a Large illusory dragon that you can use to make a breath weapon attack." },
    "Incendiary Cloud": { level: 8, school: "Conjuration", castingTime: "1 action", range: "150 feet", damage: "10d8 fire", description: "A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere." },
    "Invulnerability": { level: 8, school: "Abjuration", castingTime: "1 action", range: "Self", damage: null, description: "You are immune to all damage for the duration." },
    "Maze": { level: 8, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "Banish a creature to a labyrinthine demiplane for up to 10 minutes." },
    "Meteor Swarm (Single Meteor)": { level: 8, school: "Evocation", castingTime: "1 action", range: "1 mile", damage: "20d6 fire + 20d6 bludgeoning", description: "A single blazing orb of fire plummets to the ground at a point you choose. (Lesser version of Meteor Swarm)" },
    "Power Word Stun": { level: 8, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "Speak a word of power that can stun a creature with 150 hit points or fewer." },
    "Psychic Scream": { level: 8, school: "Enchantment", castingTime: "1 action", range: "90 feet", damage: "14d6 psychic", description: "You unleash a devastating scream of psychic power. Up to ten creatures of your choice within range must make an Intelligence saving throw." },
    "Summon Greater Demon": { level: 8, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "You utter foul words, summoning one demon from the abyss. You choose the demon’s type, which must be a demon of challenge rating 5 or lower." },
    "Sunburst": { level: 8, school: "Evocation", castingTime: "1 action", range: "150 feet", damage: "12d6 radiant", description: "Brilliant sunlight flashes in a 60-foot radius, blinding creatures and dealing damage." },
    "Sunburst (Nature's Radiance)": { level: 8, school: "Evocation", castingTime: "1 action", range: "150 feet", damage: "12d6 radiant", description: "A burst of sunlight infused with primal power erupts in a 60-foot radius." },
    "Telepathy": { level: 8, school: "Evocation", castingTime: "1 action", range: "Unlimited", damage: null, description: "You create a telepathic link with one willing creature with which you are familiar." },
    "Tsunami": { level: 8, school: "Conjuration", castingTime: "1 minute", range: "Sight", damage: "6d10 bludgeoning", description: "A wall of water springs into existence at a point you choose within range." },

    // Level 9 Spells
    "Astral Projection": { level: 9, school: "Necromancy", castingTime: "1 hour", range: "10 feet", damage: null, description: "You and up to eight willing creatures project your astral bodies into the Astral Plane." },
    "Foresight": { level: 9, school: "Divination", castingTime: "1 minute", range: "Touch", damage: null, description: "You touch a willing creature and bestow a limited ability to see into the immediate future." },
    "Foresight (Primal)": { level: 9, school: "Divination", castingTime: "1 minute", range: "Touch", damage: null, description: "You bestow upon a creature the primal instincts of a perfect predator, granting it advantage on attacks, ability checks, and saving throws." },
    "Gate": { level: 9, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence." },
    "Gate (Lesser)": { level: 8, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "You conjure a temporary, unstable portal linking to a known location on another plane." },
    "Gate (Nature's Passage)": { level: 9, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "You tear open a passage through the natural world to another planar location." },
    "Gate (Unreliable)": { level: 9, school: "Conjuration", castingTime: "1 action", range: "60 feet", damage: null, description: "You attempt to conjure a portal to another plane, but its destination may be imprecise." },
    "Imprisonment": { level: 9, school: "Abjuration", castingTime: "1 minute", range: "30 feet", damage: null, description: "Create a magical restraint to hold a creature." },
    "Imprisonment (Entomb in Earth)": { level: 9, school: "Abjuration", castingTime: "1 minute", range: "30 feet", damage: null, description: "You cause the earth to swallow a creature, holding it in a state of suspended animation." },
    "Imprisonment (Illusory Prison)": { level: 9, school: "Illusion", castingTime: "1 minute", range: "30 feet", damage: null, description: "You create a personalized, inescapable mental prison for a creature." },
    "Imprisonment (Lesser)": { level: 8, school: "Abjuration", castingTime: "1 minute", range: "30 feet", damage: null, description: "You create a magical restraint to hold a creature, but powerful magic can break it." },
    "Mass Heal": { level: 9, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "A wave of healing energy washes out. Choose any number of creatures, restore up to 700 hit points, divided as you choose among them." },
    "Mass Heal (Arcane)": { level: 9, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "A wave of pure arcane energy washes out, restoring up to 700 hit points to creatures you choose." },
    "Mass Heal (Divine)": { level: 9, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "A wave of divine healing energy washes out, restoring up to 700 hit points to creatures you choose." },
    "Mass Heal (Nature's Touch)": { level: 9, school: "Evocation", castingTime: "1 action", range: "60 feet", damage: null, description: "A wave of life-giving natural energy washes out, restoring up to 700 hit points to creatures you choose." },
    "Mass Hold Monster": { level: 9, school: "Enchantment", castingTime: "1 action", range: "90 feet", damage: null, description: "You magically paralyze up to three creatures you can see within range." },
    "Mass Polymorph": { level: 9, school: "Transmutation", castingTime: "1 action", range: "120 feet", damage: null, description: "You transform up to ten creatures that you can see within range." },
    "Mass Resurrection": { level: 9, school: "Necromancy", castingTime: "1 hour", range: "Touch", damage: null, description: "You restore life to a large group of dead creatures." },
    "Maelstrom": { level: 8, school: "Evocation", castingTime: "1 action", range: "120 feet", damage: "6d6 bludgeoning", description: "A mass of 5-foot-deep swirling water appears in a 30-foot radius. It is difficult terrain and pulls creatures toward the center." },
    "Meteor Swarm": { level: 9, school: "Evocation", castingTime: "1 action", range: "1 mile", damage: "20d6 fire + 20d6 bludgeoning", description: "Blazing orbs of fire plummet to the ground at four different points you can see within range." },
    "Power Word Heal": { level: 9, school: "Evocation", castingTime: "1 action", range: "Touch", damage: null, description: "A wave of healing power washes over a creature you touch. The target regains all its hit points." },
    "Power Word Kill": { level: 9, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "Speak a word of power that can instantly kill a creature with 100 hit points or fewer." },
    "Power Word Kill (Lesser)": { level: 8, school: "Enchantment", castingTime: "1 action", range: "60 feet", damage: null, description: "Speak a word of power that can instantly kill a creature with 75 hit points or fewer." },
    "Prismatic Wall": { level: 9, school: "Abjuration", castingTime: "1 action", range: "60 feet", damage: "10d6 fire, etc.", description: "A shimmering, multicolored wall of light springs into existence. It has seven layers, each with a different effect." },
    "Shapechange": { level: 9, school: "Transmutation", castingTime: "1 action", range: "Self", damage: null, description: "You assume the form of a different creature for the duration." },
    "Shapechange (Beasts Only)": { level: 9, school: "Transmutation", castingTime: "1 action", range: "Self", damage: null, description: "You assume the form of any beast you have seen before." },
    "Storm of Vengeance": { level: 9, school: "Conjuration", castingTime: "1 action", range: "Sight", damage: "Varies", description: "A churning storm cloud forms, lashing out with acid, lightning, hail, and freezing winds over multiple rounds." },
    "Time Ravage": { level: 9, school: "Necromancy", castingTime: "1 action", range: "90 feet", damage: "10d12 necrotic", description: "You target one creature you can see, forcing it to make a Constitution saving throw. On a failed save, the target is rapidly aged." },
    "Time Stop": { level: 9, school: "Transmutation", castingTime: "1 action", range: "Self", damage: null, description: "You briefly stop the flow of time for everyone but yourself. 1d4+1 rounds of free action." },
    "True Polymorph": { level: 9, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "Transform a creature or object into a different creature or object permanently." },
    "True Polymorph (Beasts/Plants)": { level: 9, school: "Transmutation", castingTime: "1 action", range: "30 feet", damage: null, description: "Transform a creature into a different beast or plant permanently." },
    "True Resurrection": { level: 9, school: "Necromancy", castingTime: "1 hour", range: "Touch", damage: null, description: "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If its soul is free and willing, the creature is restored to life with all its hit points." },
    "True Resurrection (Arcane)": { level: 9, school: "Necromancy", castingTime: "1 hour", range: "Touch", damage: null, description: "You use raw arcane power to reform a creature's body and restore it to life." },
    "True Resurrection (Divine)": { level: 9, school: "Necromancy", castingTime: "1 hour", range: "Touch", damage: null, description: "You channel divine power to beseech a deity to return a soul to its body." },
    "True Resurrection (Nature's Cycle)": { level: 9, school: "Necromancy", castingTime: "1 hour", range: "Touch", damage: null, description: "You return a creature to life by accelerating its natural reincarnation, forming a new body for its soul." },
    "Tsunami (Divine)": { level: 8, school: "Conjuration", castingTime: "1 minute", range: "Sight", damage: "6d10 bludgeoning", description: "A wall of water infused with divine power springs into existence at a point you choose within range." },
    "Weird": { level: 9, school: "Illusion", castingTime: "1 action", range: "120 feet", damage: "4d10 psychic", description: "You tap into the deepest fears of a group of creatures, making them perceive a monstrous entity. Those who fail a Wisdom save become frightened." },
    "Whirlwind": { level: 7, school: "Evocation", castingTime: "1 action", range: "300 feet", damage: "10d6 bludgeoning", description: "A whirlwind appears at a point you choose. It is a 10-foot-radius, 30-foot-high cylinder of swirling air." },
    "Wish": { level: 9, school: "Conjuration", castingTime: "1 action", range: "Self", damage: null, description: "The mightiest spell a mortal can cast, capable of altering the very foundations of reality in response to your desires." },
    "Wish (Divine)": { level: 9, school: "Conjuration", castingTime: "1 action", range: "Self", damage: null, description: "You entreat your deity to grant a powerful boon, altering reality." },
    "Wish (Limited)": { level: 9, school: "Conjuration", castingTime: "1 action", range: "Self", damage: null, description: "The mightiest spell a mortal can cast, capable of altering reality itself (with limitations and risks)." },
    "Wish (Nature's Boon)": { level: 9, school: "Conjuration", castingTime: "1 action", range: "Self", damage: null, description: "You ask the primal forces of nature to grant a wish that aligns with the natural order." },
    "Wish (Patron's Whim)": { level: 9, school: "Conjuration", castingTime: "1 action", range: "Self", damage: null, description: "You petition your otherworldly patron to grant a wish, though the outcome may be unpredictable." },
    "World Tree Teleport": { level: 9, school: "Conjuration", castingTime: "10 minutes", range: "Touch", damage: null, description: "You touch a large, healthy tree and instantly transport yourself and others to the vicinity of any other tree of the same species on the same plane of existence." }
};

