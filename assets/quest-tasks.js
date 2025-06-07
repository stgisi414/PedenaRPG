
// Quest Task Generation System
// Comprehensive quest templates and generation logic for varied, contextual quests

import { itemTemplates, itemRarity } from './world-items.js';

export const questCategories = {
    EXPLORATION: 'exploration',
    COMBAT: 'combat',
    INVESTIGATION: 'investigation',
    DELIVERY: 'delivery',
    COLLECTION: 'collection',
    RESCUE: 'rescue',
    DIPLOMACY: 'diplomacy',
    CRAFTING: 'crafting',
    PROTECTION: 'protection',
    MYSTERY: 'mystery'
};

export const questThemes = {
    ANCIENT_RUINS: 'ancient_ruins',
    POLITICAL_INTRIGUE: 'political_intrigue',
    MAGICAL_ANOMALY: 'magical_anomaly',
    TRADE_DISPUTES: 'trade_disputes',
    RELIGIOUS_CONFLICT: 'religious_conflict',
    NATURAL_DISASTER: 'natural_disaster',
    CRIMINAL_ACTIVITY: 'criminal_activity',
    MONSTER_THREAT: 'monster_threat',
    LOST_KNOWLEDGE: 'lost_knowledge',
    FAMILY_DRAMA: 'family_drama'
};

export const questTemplates = {
    [questCategories.EXPLORATION]: {
        [questThemes.ANCIENT_RUINS]: [
            {
                titleTemplates: [
                    "The Lost {RUIN_TYPE} of {ANCIENT_NAME}",
                    "Secrets of the {DESCRIPTOR} {STRUCTURE}",
                    "The {ANCIENT_NAME} Expedition",
                    "Into the {RUIN_TYPE} Depths",
                    "The {DESCRIPTOR} Legacy"
                ],
                objectives: [
                    "Explore the ancient {RUIN_TYPE} and document your findings",
                    "Retrieve the {ARTIFACT} from the depths of {LOCATION}",
                    "Map the layout of the forgotten {STRUCTURE}",
                    "Investigate the mysterious energy emanating from {LOCATION}"
                ],
                complications: [
                    "The ruins are guarded by ancient {GUARDIAN_TYPE}",
                    "Dangerous traps protect the inner chambers",
                    "A rival expedition has already begun exploring",
                    "The structure is slowly collapsing"
                ]
            }
        ],
        [questThemes.MAGICAL_ANOMALY]: [
            {
                titleTemplates: [
                    "The {ANOMALY_TYPE} Disturbance",
                    "Unstable {MAGIC_TYPE} Phenomenon",
                    "The {LOCATION} Anomaly",
                    "When Magic Goes Wrong",
                    "The {DESCRIPTOR} Convergence"
                ],
                objectives: [
                    "Investigate the magical disturbance near {LOCATION}",
                    "Stabilize the chaotic {MAGIC_TYPE} energies",
                    "Find the source of the magical anomaly",
                    "Contain the spreading magical corruption"
                ],
                complications: [
                    "The anomaly is growing stronger",
                    "Local wildlife has been mutated",
                    "The disturbance is affecting nearby settlements",
                    "Other mages have failed to solve the problem"
                ]
            }
        ]
    },

    [questCategories.COMBAT]: {
        [questThemes.MONSTER_THREAT]: [
            {
                titleTemplates: [
                    "The {MONSTER_TYPE} Menace",
                    "Hunt for the {DESCRIPTOR} {BEAST}",
                    "Slaying the {LEGENDARY_NAME}",
                    "The {LOCATION} Terror",
                    "Bane of {AFFECTED_GROUP}"
                ],
                objectives: [
                    "Hunt down and eliminate the {MONSTER_TYPE} terrorizing {LOCATION}",
                    "Slay the legendary beast known as {LEGENDARY_NAME}",
                    "Clear the {MONSTER_TYPE} nest from {LOCATION}",
                    "Defeat the alpha {MONSTER_TYPE} and its pack"
                ],
                complications: [
                    "The creature is more intelligent than expected",
                    "It has a protective lair filled with traps",
                    "The monster commands lesser creatures",
                    "Previous hunting parties have failed"
                ]
            }
        ],
        [questThemes.CRIMINAL_ACTIVITY]: [
            {
                titleTemplates: [
                    "The {CRIMINAL_GROUP} Problem",
                    "Dismantling the {ORGANIZATION_NAME}",
                    "Justice for {VICTIM_GROUP}",
                    "The {CRIME_TYPE} Crisis",
                    "Shadow War Against {CRIMINAL_LEADER}"
                ],
                objectives: [
                    "Eliminate the {CRIMINAL_GROUP} terrorizing local merchants",
                    "Capture the notorious criminal leader {CRIMINAL_LEADER}",
                    "Disrupt the {CRIMINAL_GROUP}'s operations in {LOCATION}",
                    "Recover stolen goods from the {CRIMINAL_GROUP}"
                ],
                complications: [
                    "The criminals have inside information",
                    "They're better organized than expected",
                    "Corrupt officials are protecting them",
                    "Innocent hostages complicate the situation"
                ]
            }
        ]
    },

    [questCategories.INVESTIGATION]: {
        [questThemes.MYSTERY]: [
            {
                titleTemplates: [
                    "The Mystery of {MYSTERIOUS_EVENT}",
                    "Unraveling the {DESCRIPTOR} Truth",
                    "The {LOCATION} Conspiracy",
                    "What Happened to {MISSING_PERSON}?",
                    "The {EVIDENCE_TYPE} Investigation"
                ],
                objectives: [
                    "Investigate the mysterious disappearance of {MISSING_PERSON}",
                    "Uncover the truth behind the {MYSTERIOUS_EVENT}",
                    "Follow the clues to solve the {CRIME_TYPE}",
                    "Expose the conspiracy affecting {AFFECTED_GROUP}"
                ],
                complications: [
                    "Key witnesses are reluctant to talk",
                    "Evidence keeps disappearing",
                    "Multiple suspects have solid alibis",
                    "The investigation puts you in danger"
                ]
            }
        ],
        [questThemes.POLITICAL_INTRIGUE]: [
            {
                titleTemplates: [
                    "Shadows in the {POLITICAL_BODY}",
                    "The {NOBLE_TITLE}'s Secret",
                    "Conspiracy Against {POLITICAL_FIGURE}",
                    "The {DOCUMENT_TYPE} Affair",
                    "Whispers of {POLITICAL_EVENT}"
                ],
                objectives: [
                    "Investigate corruption within the {POLITICAL_BODY}",
                    "Uncover the plot against {POLITICAL_FIGURE}",
                    "Retrieve compromising documents from {LOCATION}",
                    "Expose the conspiracy behind {POLITICAL_EVENT}"
                ],
                complications: [
                    "Powerful nobles are involved",
                    "Your investigation is being monitored",
                    "Key evidence is heavily guarded",
                    "Multiple factions are playing different games"
                ]
            }
        ]
    },

    [questCategories.DELIVERY]: {
        [questThemes.TRADE_DISPUTES]: [
            {
                titleTemplates: [
                    "The {TRADE_GOOD} Shipment",
                    "Urgent Delivery to {DESTINATION}",
                    "The {MERCHANT_NAME} Contract",
                    "Securing the {TRADE_ROUTE}",
                    "The Missing {CARAVAN_TYPE}"
                ],
                objectives: [
                    "Safely deliver {TRADE_GOOD} to {DESTINATION}",
                    "Escort the merchant caravan through dangerous territory",
                    "Negotiate safe passage with local {FACTION}",
                    "Recover the lost shipment of {TRADE_GOOD}"
                ],
                complications: [
                    "Bandits are targeting the route",
                    "Political tensions make travel dangerous",
                    "The cargo is more valuable than initially stated",
                    "Weather conditions threaten the journey"
                ]
            }
        ]
    },

    [questCategories.RESCUE]: {
        [questThemes.FAMILY_DRAMA]: [
            {
                titleTemplates: [
                    "Saving {FAMILY_MEMBER}",
                    "The {FAMILY_NAME} Crisis",
                    "A {RELATIONSHIP}'s Plea",
                    "The Kidnapped {PERSON_TYPE}",
                    "Family Honor at Stake"
                ],
                objectives: [
                    "Rescue {FAMILY_MEMBER} from {CAPTOR_GROUP}",
                    "Negotiate the release of the kidnapped {PERSON_TYPE}",
                    "Infiltrate {LOCATION} to free the prisoners",
                    "Pay the ransom and ensure safe return"
                ],
                complications: [
                    "The captors keep changing their demands",
                    "The rescue location is heavily fortified",
                    "Multiple hostages complicate the operation",
                    "Time is running out"
                ]
            }
        ]
    },

    [questCategories.DIPLOMACY]: {
        [questThemes.RELIGIOUS_CONFLICT]: [
            {
                titleTemplates: [
                    "The {RELIGIOUS_GROUP} Schism",
                    "Peace Between {FACTION1} and {FACTION2}",
                    "The {SACRED_ITEM} Dispute",
                    "Healing the {RELIGIOUS_SITE} Rift",
                    "The {PROPHET_NAME} Question"
                ],
                objectives: [
                    "Mediate between conflicting {RELIGIOUS_GROUP} factions",
                    "Negotiate the return of the sacred {SACRED_ITEM}",
                    "Arrange a peace summit between {FACTION1} and {FACTION2}",
                    "Resolve the dispute over {RELIGIOUS_SITE}"
                ],
                complications: [
                    "Both sides are deeply entrenched",
                    "External forces are stirring up conflict",
                    "Religious extremists oppose any compromise",
                    "Historical grievances run deep"
                ]
            }
        ]
    }
};

export const questVariables = {
    RUIN_TYPE: ["temple", "fortress", "city", "tower", "catacomb", "palace", "monastery", "observatory", "library", "vault"],
    ANCIENT_NAME: ["Aethermoor", "Shadowspire", "Crystalfall", "Ironhold", "Starweave", "Thornwick", "Goldmane", "Stormwind", "Moonhaven", "Dragonrest"],
    DESCRIPTOR: ["forgotten", "cursed", "hidden", "lost", "ancient", "mysterious", "abandoned", "sacred", "forbidden", "legendary"],
    STRUCTURE: ["citadel", "sanctum", "chamber", "hall", "shrine", "archive", "laboratory", "garden", "tomb", "arena"],
    ARTIFACT: ["Crown of Stars", "Scepter of Ages", "Crystal of Power", "Tome of Secrets", "Blade of Light", "Orb of Storms", "Amulet of Wisdom", "Ring of Binding"],
    GUARDIAN_TYPE: ["stone golems", "spectral warriors", "elemental spirits", "ancient constructs", "guardian beasts", "living shadows", "arcane sentinels"],
    ANOMALY_TYPE: ["temporal", "dimensional", "elemental", "psychic", "necromantic", "divine", "chaotic", "void"],
    MAGIC_TYPE: ["arcane", "divine", "primal", "shadow", "elemental", "celestial", "infernal", "temporal"],
    MONSTER_TYPE: ["dragon", "giant", "undead horde", "demon pack", "corrupted beast", "magical aberration", "ancient predator", "elemental titan"],
    LEGENDARY_NAME: ["Shadowmaw", "Ironscale", "Stormwing", "Bloodfang", "Nightbane", "Frostclaw", "Voidheart", "Starbreaker"],
    BEAST: ["wyrm", "behemoth", "leviathan", "chimera", "hydra", "basilisk", "manticore", "griffin"],
    AFFECTED_GROUP: ["merchants", "pilgrims", "farmers", "travelers", "settlers", "miners", "scholars", "refugees"],
    CRIMINAL_GROUP: ["bandits", "smugglers", "cultists", "pirates", "assassins", "thieves", "slavers", "rebels"],
    ORGANIZATION_NAME: ["Crimson Blade", "Shadow Hand", "Iron Wolves", "Blood Ravens", "Silent Daggers", "Black Serpents", "Void Seekers"],
    CRIMINAL_LEADER: ["Scarface Marcus", "The Shadow", "Iron Fist Viktor", "Poison Ivy", "The Viper", "Red-Eye Morgan", "Silent Death"],
    CRIME_TYPE: ["murder", "kidnapping", "extortion", "smuggling", "fraud", "treason", "theft", "conspiracy"],
    VICTIM_GROUP: ["innocent families", "honest merchants", "local farmers", "traveling pilgrims", "guild members", "city officials"],
    MISSING_PERSON: ["Lord Aldric", "Scholar Beatrice", "Young Timothy", "Merchant Goldwin", "Priestess Seraphine", "Captain Roderick"],
    MYSTERIOUS_EVENT: ["the Vanishing", "the Strange Lights", "the Silent Screams", "the Frozen Time", "the Bleeding Stones", "the Whispering Winds"],
    EVIDENCE_TYPE: ["bloodstained", "encrypted", "witness", "circumstantial", "magical", "financial", "testimonial"],
    POLITICAL_BODY: ["Council", "Senate", "Court", "Assembly", "Parliament", "Tribunal", "Cabinet"],
    NOBLE_TITLE: ["Duke", "Duchess", "Count", "Countess", "Baron", "Baroness", "Lord", "Lady"],
    POLITICAL_FIGURE: ["the King", "the Queen", "the Chancellor", "the High Judge", "the Ambassador", "the General"],
    DOCUMENT_TYPE: ["treaty", "will", "contract", "letter", "decree", "warrant", "charter"],
    POLITICAL_EVENT: ["succession", "rebellion", "alliance", "trade war", "border dispute", "diplomatic crisis"],
    TRADE_GOOD: ["silk", "spices", "weapons", "magical components", "precious gems", "rare books", "healing potions", "enchanted items"],
    DESTINATION: ["Ironspire", "Moonhaven", "Crystaldale", "Riverport", "Sandport", "Grimhold", "Whispergrove"],
    MERCHANT_NAME: ["Goldwin", "Tobias", "Marcus", "Beatrice", "Cornelius", "Isadora", "Wilhelm"],
    TRADE_ROUTE: ["Silk Road", "Iron Highway", "Crystal Pass", "River Route", "Desert Trail", "Mountain Path"],
    CARAVAN_TYPE: ["merchant", "diplomatic", "military", "refugee", "pilgrimage", "scientific"],
    FACTION: ["local militia", "border guards", "tribal warriors", "bandits", "competing merchants"],
    FAMILY_MEMBER: ["daughter", "son", "wife", "husband", "father", "mother", "brother", "sister"],
    FAMILY_NAME: ["Goldmane", "Ironhold", "Starweave", "Thornwick", "Stormwind", "Moonhaven", "Dragonrest"],
    RELATIONSHIP: ["mother", "father", "spouse", "sibling", "child", "cousin", "friend"],
    PERSON_TYPE: ["noble", "merchant", "scholar", "priest", "child", "elder", "artisan"],
    CAPTOR_GROUP: ["bandits", "cultists", "slavers", "enemy soldiers", "mercenaries", "pirates"],
    RELIGIOUS_GROUP: ["Order of Light", "Circle of Druids", "Church of Stars", "Brotherhood of Steel", "Sisterhood of Mercy"],
    FACTION1: ["Orthodox Believers", "Reform Movement", "Traditional Order", "Progressive Circle"],
    FACTION2: ["Modernist Sect", "Conservative Wing", "Radical Branch", "Moderate Council"],
    SACRED_ITEM: ["Holy Relic", "Blessed Tome", "Sacred Crown", "Divine Symbol", "Ancient Scroll"],
    RELIGIOUS_SITE: ["Great Temple", "Sacred Grove", "Holy Shrine", "Blessed Cathedral", "Ancient Monastery"],
    PROPHET_NAME: ["Saint Celestine", "Prophet Matthias", "Oracle Pythia", "Sage Cornelius", "Blessed Isadora"]
};

export class QuestTaskGenerator {
    static generateQuest(player, gameContext = {}) {
        // Determine quest parameters based on player level and context
        const difficulty = this.determineDifficulty(player.level);
        const category = this.selectQuestCategory(player, gameContext);
        const theme = this.selectQuestTheme(category, gameContext);
        
        // Get appropriate template
        const templates = questTemplates[category]?.[theme];
        if (!templates || templates.length === 0) {
            return this.generateFallbackQuest(player);
        }
        
        const template = templates[Math.floor(Math.random() * templates.length)];
        
        // Generate quest details
        const questData = {
            id: Date.now().toString(),
            title: this.generateTitle(template.titleTemplates),
            description: this.generateDescription(template, category, theme, gameContext),
            objective: this.generateObjective(template.objectives, gameContext),
            category: category,
            theme: theme,
            difficulty: difficulty,
            location: this.generateLocation(gameContext),
            questGiver: this.generateQuestGiver(category, theme, gameContext),
            rewards: this.calculateRewards(player.level, difficulty, category),
            requirements: this.generateRequirements(player, difficulty),
            estimatedTime: this.estimateTime(difficulty, category),
            complications: this.generateComplications(template.complications),
            completed: false,
            dateCreated: new Date().toLocaleDateString()
        };
        
        return questData;
    }
    
    static determineDifficulty(playerLevel) {
        const roll = Math.random();
        if (playerLevel <= 2) {
            return roll < 0.7 ? 'Easy' : roll < 0.95 ? 'Medium' : 'Hard';
        } else if (playerLevel <= 5) {
            return roll < 0.4 ? 'Easy' : roll < 0.8 ? 'Medium' : roll < 0.95 ? 'Hard' : 'Very Hard';
        } else {
            return roll < 0.2 ? 'Medium' : roll < 0.6 ? 'Hard' : roll < 0.9 ? 'Very Hard' : 'Legendary';
        }
    }
    
    static selectQuestCategory(player, gameContext) {
        const playerClass = player.class?.toLowerCase();
        const location = gameContext.currentLocation?.toLowerCase() || '';
        
        // Weight categories based on player class
        const weights = {
            [questCategories.COMBAT]: playerClass === 'warrior' ? 3 : playerClass === 'ranger' ? 2 : 1,
            [questCategories.INVESTIGATION]: playerClass === 'rogue' ? 3 : playerClass === 'mage' ? 2 : 1,
            [questCategories.DIPLOMACY]: playerClass === 'mage' ? 2 : 1,
            [questCategories.EXPLORATION]: playerClass === 'ranger' ? 3 : 2,
            [questCategories.DELIVERY]: 1,
            [questCategories.RESCUE]: 2,
            [questCategories.COLLECTION]: 2,
            [questCategories.CRAFTING]: playerClass === 'warrior' ? 2 : 1,
            [questCategories.PROTECTION]: playerClass === 'warrior' ? 2 : 1,
            [questCategories.MYSTERY]: playerClass === 'rogue' ? 2 : playerClass === 'mage' ? 2 : 1
        };
        
        // Adjust weights based on location
        if (location.includes('city') || location.includes('town')) {
            weights[questCategories.DIPLOMACY] *= 2;
            weights[questCategories.INVESTIGATION] *= 2;
            weights[questCategories.DELIVERY] *= 2;
        } else if (location.includes('wild') || location.includes('forest') || location.includes('mountain')) {
            weights[questCategories.EXPLORATION] *= 2;
            weights[questCategories.COMBAT] *= 2;
            weights[questCategories.RESCUE] *= 1.5;
        }
        
        return this.weightedRandomSelect(weights);
    }
    
    static selectQuestTheme(category, gameContext) {
        const themes = Object.keys(questTemplates[category] || {});
        if (themes.length === 0) return questThemes.ANCIENT_RUINS;
        
        const location = gameContext.currentLocation?.toLowerCase() || '';
        const weights = {};
        
        themes.forEach(theme => {
            weights[theme] = 1;
            
            // Adjust theme weights based on location
            if (location.includes('ruin') && theme === questThemes.ANCIENT_RUINS) weights[theme] *= 3;
            if (location.includes('city') && theme === questThemes.POLITICAL_INTRIGUE) weights[theme] *= 2;
            if (location.includes('temple') && theme === questThemes.RELIGIOUS_CONFLICT) weights[theme] *= 2;
            if (location.includes('market') && theme === questThemes.TRADE_DISPUTES) weights[theme] *= 2;
        });
        
        return this.weightedRandomSelect(weights);
    }
    
    static generateTitle(titleTemplates) {
        const template = titleTemplates[Math.floor(Math.random() * titleTemplates.length)];
        return this.fillTemplate(template);
    }
    
    static generateDescription(template, category, theme, gameContext) {
        const baseDescriptions = {
            [questCategories.EXPLORATION]: [
                "Ancient secrets await discovery in forgotten places.",
                "Mysterious phenomena require investigation by brave adventurers.",
                "Lost knowledge lies hidden, waiting to be uncovered."
            ],
            [questCategories.COMBAT]: [
                "Dangerous creatures threaten the safety of innocent people.",
                "Evil forces must be confronted and defeated.",
                "A menace stalks the land, requiring a hero's intervention."
            ],
            [questCategories.INVESTIGATION]: [
                "Strange events have puzzled local authorities.",
                "The truth lies hidden beneath layers of deception.",
                "Mysterious circumstances demand careful investigation."
            ]
        };
        
        const descriptions = baseDescriptions[category] || ["An important task awaits completion."];
        const baseDesc = descriptions[Math.floor(Math.random() * descriptions.length)];
        
        return `${baseDesc} ${this.generateContextualFlavor(theme, gameContext)}`;
    }
    
    static generateContextualFlavor(theme, gameContext) {
        const flavors = {
            [questThemes.ANCIENT_RUINS]: [
                "The ruins hold secrets from a bygone age.",
                "Archaeologists believe these ruins predate recorded history.",
                "Local legends speak of great power hidden within."
            ],
            [questThemes.MAGICAL_ANOMALY]: [
                "The magical disturbance grows stronger each day.",
                "Scholars are baffled by the unusual magical readings.",
                "The anomaly threatens to destabilize the entire region."
            ],
            [questThemes.POLITICAL_INTRIGUE]: [
                "The political implications could reshape the kingdom.",
                "Noble houses are positioning themselves for advantage.",
                "The stability of the realm hangs in the balance."
            ]
        };
        
        const themeFlavorss = flavors[theme] || ["The situation requires immediate attention."];
        return themeFlavorss[Math.floor(Math.random() * themeFlavorss.length)];
    }
    
    static generateObjective(objectives, gameContext) {
        const objective = objectives[Math.floor(Math.random() * objectives.length)];
        return this.fillTemplate(objective, gameContext);
    }
    
    static generateLocation(gameContext) {
        if (gameContext.currentLocation) {
            const nearbyLocations = [
                `Near ${gameContext.currentLocation}`,
                `${gameContext.currentLocation} Outskirts`,
                `The ${this.getRandomVariable('DESCRIPTOR')} ${this.getRandomVariable('STRUCTURE')}`,
                this.getRandomVariable('DESTINATION')
            ];
            return nearbyLocations[Math.floor(Math.random() * nearbyLocations.length)];
        }
        return this.getRandomVariable('DESTINATION');
    }
    
    static generateQuestGiver(category, theme, gameContext) {
        const questGivers = {
            [questCategories.COMBAT]: ["Captain of the Guard", "Village Elder", "Concerned Citizen", "Royal Commander"],
            [questCategories.INVESTIGATION]: ["Local Magistrate", "Worried Family Member", "Guild Representative", "Town Watch"],
            [questCategories.EXPLORATION]: ["Scholar", "Archaeologist", "Adventurer's Guild", "Curious Merchant"],
            [questCategories.DIPLOMACY]: ["Ambassador", "Religious Leader", "Noble Representative", "Peacekeeper"],
            [questCategories.DELIVERY]: ["Merchant", "Courier Master", "Trade Official", "Caravan Leader"]
        };
        
        const givers = questGivers[category] || ["Mysterious Stranger", "Local Official", "Concerned Citizen"];
        const baseGiver = givers[Math.floor(Math.random() * givers.length)];
        
        // Add specific names occasionally
        if (Math.random() < 0.6) {
            const names = this.getRandomVariable('MISSING_PERSON');
            return `${baseGiver} ${names}`;
        }
        
        return baseGiver;
    }
    
    static calculateRewards(playerLevel, difficulty, category) {
        const basePold = 50 + (playerLevel * 25);
        const baseXP = 25 + (playerLevel * 15);
        
        const difficultyMultipliers = {
            'Easy': 0.8,
            'Medium': 1.0,
            'Hard': 1.4,
            'Very Hard': 2.0,
            'Legendary': 3.0
        };
        
        const categoryMultipliers = {
            [questCategories.COMBAT]: 1.2,
            [questCategories.EXPLORATION]: 1.1,
            [questCategories.INVESTIGATION]: 1.0,
            [questCategories.DIPLOMACY]: 0.9,
            [questCategories.DELIVERY]: 0.8
        };
        
        const diffMult = difficultyMultipliers[difficulty] || 1.0;
        const catMult = categoryMultipliers[category] || 1.0;
        
        const gold = Math.floor(basePold * diffMult * catMult * (0.8 + Math.random() * 0.4));
        const experience = Math.floor(baseXP * diffMult * catMult * (0.8 + Math.random() * 0.4));
        
        const items = this.generateRewardItems(playerLevel, difficulty);
        
        return { gold, experience, items };
    }
    
    static generateRewardItems(playerLevel, difficulty) {
        const items = [];
        const raritiesToConsider = {
            'Easy': ['COMMON', 'UNCOMMON'],
            'Medium': ['UNCOMMON', 'RARE'],
            'Hard': ['RARE'],
            'Very Hard': ['RARE', 'EPIC'],
            'Legendary': ['EPIC', 'LEGENDARY']
        }[difficulty] || ['COMMON'];

        // Create a flat list of all possible reward items of the considered rarities
        const itemPool = [];
        for (const category in itemTemplates) {
            for (const subcategory in itemTemplates[category]) {
                itemTemplates[category][subcategory].forEach(item => {
                    if (raritiesToConsider.includes(item.rarity)) {
                        // We only need the name for the quest reward list
                        itemPool.push(item.name);
                    }
                });
            }
        }

        if (itemPool.length === 0) return []; // No suitable items found

        const numItems = difficulty === 'Easy' ? (Math.random() < 0.5 ? 1 : 2) : 
                         difficulty === 'Medium' ? 2 : 
                         difficulty === 'Hard' ? (Math.random() < 0.5 ? 2 : 3) : 3;

        // Select unique items from the pool
        const shuffledPool = [...new Set(itemPool)].sort(() => 0.5 - Math.random());
        return shuffledPool.slice(0, numItems);
    }
    
    static generateRequirements(player, difficulty) {
        const requirements = [];
        
        if (difficulty === 'Hard' || difficulty === 'Very Hard') {
            requirements.push(`Minimum level ${Math.max(1, player.level - 1)}`);
        }
        
        if (Math.random() < 0.3) {
            const reqTypes = ["Combat experience", "Diplomatic skills", "Magical knowledge", "Stealth abilities"];
            requirements.push(reqTypes[Math.floor(Math.random() * reqTypes.length)]);
        }
        
        return requirements;
    }
    
    static estimateTime(difficulty, category) {
        const baseTimes = {
            [questCategories.DELIVERY]: ["30 minutes", "1 hour", "2 hours"],
            [questCategories.INVESTIGATION]: ["1 hour", "2 hours", "3 hours"],
            [questCategories.COMBAT]: ["45 minutes", "1.5 hours", "2.5 hours"],
            [questCategories.EXPLORATION]: ["1 hour", "2 hours", "4 hours"],
            [questCategories.DIPLOMACY]: ["30 minutes", "1 hour", "2 hours"]
        };
        
        const times = baseTimes[category] || ["1 hour", "2 hours", "3 hours"];
        const difficultyIndex = ['Easy', 'Medium', 'Hard'].indexOf(difficulty);
        return times[Math.min(difficultyIndex, times.length - 1)] || "2 hours";
    }
    
    static generateComplications(complications) {
        if (Math.random() < 0.7 && complications && complications.length > 0) {
            return complications[Math.floor(Math.random() * complications.length)];
        }
        return null;
    }
    
    static fillTemplate(template, context = {}) {
        let filled = template;
        
        // Replace variables with random selections
        const variableRegex = /\{([A-Z_]+)\}/g;
        filled = filled.replace(variableRegex, (match, variable) => {
            return this.getRandomVariable(variable) || match;
        });
        
        // Replace context-specific variables
        if (context.currentLocation) {
            filled = filled.replace(/\{LOCATION\}/g, context.currentLocation);
        }
        
        return filled;
    }
    
    static getRandomVariable(variable) {
        const values = questVariables[variable];
        if (!values || values.length === 0) return variable;
        return values[Math.floor(Math.random() * values.length)];
    }
    
    static weightedRandomSelect(weights) {
        const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
        let random = Math.random() * totalWeight;
        
        for (const [key, weight] of Object.entries(weights)) {
            random -= weight;
            if (random <= 0) return key;
        }
        
        return Object.keys(weights)[0];
    }
    
    static generateFallbackQuest(player) {
        return {
            id: Date.now().toString(),
            title: `Adventure Awaits (Level ${player.level})`,
            description: "A new opportunity for adventure has presented itself. The details may be unclear, but the potential for glory and reward is real.",
            objective: "Seek out adventure and complete the task at hand",
            category: questCategories.EXPLORATION,
            theme: questThemes.MYSTERY,
            difficulty: player.level <= 2 ? 'Easy' : player.level <= 5 ? 'Medium' : 'Hard',
            location: player.currentLocation || "Unknown Location",
            questGiver: "Mysterious Figure",
            rewards: {
                gold: 50 + (player.level * 20),
                experience: 25 + (player.level * 10),
                items: ["Healing Potion"]
            },
            requirements: [],
            estimatedTime: "1-2 hours",
            complications: null,
            completed: false,
            dateCreated: new Date().toLocaleDateString()
        };
    }
}

export default { questCategories, questThemes, questTemplates, questVariables, QuestTaskGenerator };
