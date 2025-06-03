
// Character Templates and Name Generators
export const characterNames = {
    human: {
        male: [
            "Aldric", "Gareth", "Marcus", "Theron", "Cedric", "Roland", "Damien", "Viktor",
            "Tobias", "Erasmus", "Sebastian", "Nathaniel", "Alexander", "Roderick", "Leopold"
        ],
        female: [
            "Helena", "Seraphina", "Lyralei", "Evelyn", "Isabelle", "Cordelia", "Guinevere",
            "Celestine", "Rosalind", "Evangeline", "Anastasia", "Vivienne", "Morgana", "Elara"
        ],
        surnames: [
            "Goldmane", "Steelheart", "Ironvow", "Warmhearth", "Starweaver", "Moonwhisper",
            "Brightblade", "Stormwind", "Dragonsbane", "Lightbringer", "Shadowbane", "Forgeheart"
        ]
    },
    elven: {
        male: [
            "Silvanus", "Thalion", "Erevan", "Valerius", "Caelynn", "Lysander", "Thranduil",
            "Elrohir", "Celeborn", "Haldir", "Legolas", "Eldarion", "Faelar", "Galinndan"
        ],
        female: [
            "Silviana", "Arwen", "Galadriel", "Elaria", "Nimrodel", "Tauriel", "Eleryn",
            "Celebrian", "Idril", "Nessa", "Varda", "Melian", "Luthien", "Earwen"
        ],
        surnames: [
            "Starleaf", "Moonwhisper", "Silverbrook", "Dawnstrider", "Nightwind", "Goldleaf",
            "Starweaver", "Mistwalker", "Thornweave", "Brightarrow", "Swiftwind", "Stargazer"
        ]
    },
    dwarven: {
        male: [
            "Thorin", "Gimli", "Balin", "Dwalin", "Groin", "Oin", "Dain", "Nain",
            "Thror", "Thrain", "Durin", "Fundin", "Gloin", "Bifur", "Bofur"
        ],
        female: [
            "Dura", "Mira", "Vera", "Nora", "Kira", "Thora", "Bera", "Gilda",
            "Hilda", "Brenna", "Freya", "Astrid", "Sigrid", "Ingrid", "Helga"
        ],
        surnames: [
            "Forgeheart", "Ironbeard", "Stoneaxe", "Goldbeard", "Hammerfist", "Ironvow",
            "Steelbeard", "Rockbreaker", "Gemcutter", "Oathkeeper", "Battleaxe", "Strongarm"
        ]
    },
    halfling: {
        male: [
            "Bilbo", "Frodo", "Samwise", "Meriadoc", "Peregrin", "Bandobras", "Gerontius",
            "Otho", "Lotho", "Fredegar", "Folco", "Odo", "Polo", "Ponto"
        ],
        female: [
            "Rosie", "Pearl", "Daisy", "Lily", "Poppy", "Primula", "Belladonna",
            "Mirabella", "Donnamira", "Camellia", "Rosamunda", "Adamanta", "Esmeralda", "Lobelia"
        ],
        surnames: [
            "Baggins", "Took", "Brandybuck", "Gamgee", "Cotton", "Goodbody", "Proudfoot",
            "Burrows", "Greenhill", "Underhill", "Bracegirdle", "Bolger", "Boffin", "Banks"
        ]
    }
};

export const characterBackgrounds = {
    noble: {
        description: "Born into wealth and privilege",
        startingGold: 100,
        connections: ["Royal court", "Merchant guilds", "Religious hierarchy"],
        skills: ["Diplomacy", "History", "Leadership"],
        possibleSecrets: [
            "Family fortune built on illegal trade",
            "Bastard child of royal lineage",
            "Arranged marriage they're fleeing from",
            "Family curse or ancient debt"
        ]
    },
    commoner: {
        description: "Raised among the common folk",
        startingGold: 25,
        connections: ["Local merchants", "Town guards", "Fellow workers"],
        skills: ["Survival", "Trade craft", "Local knowledge"],
        possibleSecrets: [
            "Discovered noble bloodline",
            "Witnessed a crime they can't report",
            "Hidden magical talent",
            "Family member in criminal organization"
        ]
    },
    criminal: {
        description: "Life on the wrong side of the law",
        startingGold: 40,
        connections: ["Thieves guild", "Black market dealers", "Corrupt officials"],
        skills: ["Stealth", "Lockpicking", "Street knowledge"],
        possibleSecrets: [
            "Planning to go legitimate",
            "Double agent for law enforcement",
            "Stole from powerful crime boss",
            "Witnessed guild leader's murder"
        ]
    },
    scholar: {
        description: "Devoted to learning and knowledge",
        startingGold: 60,
        connections: ["Academic institutions", "Libraries", "Research societies"],
        skills: ["Research", "Ancient languages", "Magical theory"],
        possibleSecrets: [
            "Uncovered dangerous forbidden knowledge",
            "Plagiarized famous work",
            "Discovered government conspiracy",
            "Family grimoire with dark magic"
        ]
    },
    merchant: {
        description: "Experienced in trade and commerce",
        startingGold: 80,
        connections: ["Trading partners", "Caravan guards", "Foreign contacts"],
        skills: ["Negotiation", "Appraisal", "Travel experience"],
        possibleSecrets: [
            "Smuggling operation on the side",
            "Selling cursed or dangerous items",
            "Massive debt to crime syndicate",
            "Trading partner is enemy spy"
        ]
    },
    soldier: {
        description: "Veteran of military service",
        startingGold: 50,
        connections: ["Military units", "Veterans groups", "Weapon smiths"],
        skills: ["Combat tactics", "Weapon maintenance", "Military protocol"],
        possibleSecrets: [
            "Deserted during crucial battle",
            "Committed war crimes they regret",
            "Knows location of hidden military cache",
            "Former comrade is now enemy leader"
        ]
    },
    orphan: {
        description: "Grew up without family",
        startingGold: 15,
        connections: ["Other orphans", "Street contacts", "Charitable organizations"],
        skills: ["Self-reliance", "Street survival", "Reading people"],
        possibleSecrets: [
            "Parents killed by government agents",
            "Raised by secret organization",
            "Natural magical abilities emerging",
            "Only heir to lost fortune"
        ]
    },
    religious: {
        description: "Devoted follower of divine calling",
        startingGold: 35,
        connections: ["Religious hierarchy", "Fellow believers", "Charitable groups"],
        skills: ["Religious knowledge", "Counseling", "Community service"],
        possibleSecrets: [
            "Questioning faith due to recent events",
            "Discovered corruption in religious hierarchy",
            "Received divine visions others doubt",
            "Former life before religious conversion"
        ]
    }
};

export const personalityTraits = {
    positive: [
        "Brave and courageous",
        "Compassionate and caring",
        "Witty and humorous",
        "Loyal and trustworthy",
        "Intelligent and curious",
        "Charismatic and inspiring",
        "Patient and understanding",
        "Determined and persistent",
        "Honest and forthright",
        "Creative and imaginative"
    ],
    negative: [
        "Stubborn and inflexible",
        "Prideful and arrogant",
        "Suspicious and paranoid",
        "Impulsive and reckless",
        "Greedy and materialistic",
        "Pessimistic and gloomy",
        "Short-tempered and aggressive",
        "Secretive and evasive",
        "Cowardly in crucial moments",
        "Overly trusting and naive"
    ],
    quirks: [
        "Collects unusual trinkets",
        "Speaks to animals as equals",
        "Never removes their hat/hood",
        "Counts coins obsessively",
        "Quotes ancient proverbs",
        "Draws detailed maps of everywhere",
        "Talks to their weapons",
        "Always orders the same meal",
        "Writes in a secret journal",
        "Fears a specific common animal"
    ]
};

export const motivations = {
    personal: [
        "Seeking revenge for family's death",
        "Searching for lost loved one",
        "Proving worth to disapproving family",
        "Overcoming traumatic past event",
        "Finding cure for mysterious illness",
        "Recovering stolen family heirloom",
        "Earning enough gold to retire comfortably",
        "Discovering true parentage",
        "Mastering a particular skill or magic",
        "Fulfilling a dying person's last wish"
    ],
    heroic: [
        "Protecting the innocent from harm",
        "Fighting against corruption and injustice",
        "Preserving ancient knowledge and wisdom",
        "Preventing prophesied disaster",
        "Uniting divided peoples",
        "Cleansing corrupted lands",
        "Destroying evil artifacts",
        "Establishing peace between nations",
        "Defending the weak and powerless",
        "Spreading hope in dark times"
    ],
    ambitious: [
        "Gaining political power and influence",
        "Building a merchant empire",
        "Becoming the greatest warrior/mage",
        "Founding their own kingdom",
        "Accumulating vast wealth",
        "Achieving immortality",
        "Mastering forbidden knowledge",
        "Leading a religious movement",
        "Creating legendary artifacts",
        "Being remembered in history"
    ]
};

// Character generation helper functions
export class CharacterGenerator {
    
    static generateRandomName(race = 'human', gender = 'male') {
        const names = characterNames[race] || characterNames.human;
        const firstName = names[gender][Math.floor(Math.random() * names[gender].length)];
        const surname = names.surnames[Math.floor(Math.random() * names.surnames.length)];
        return `${firstName} ${surname}`;
    }
    
    static generateRandomBackground() {
        const backgrounds = Object.keys(characterBackgrounds);
        const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        return characterBackgrounds[randomBg];
    }
    
    static generatePersonality() {
        const positive = personalityTraits.positive[
            Math.floor(Math.random() * personalityTraits.positive.length)
        ];
        const negative = personalityTraits.negative[
            Math.floor(Math.random() * personalityTraits.negative.length)
        ];
        const quirk = personalityTraits.quirks[
            Math.floor(Math.random() * personalityTraits.quirks.length)
        ];
        
        return { positive, negative, quirk };
    }
    
    static generateMotivation() {
        const categories = ['personal', 'heroic', 'ambitious'];
        const category = categories[Math.floor(Math.random() * categories.length)];
        return motivations[category][
            Math.floor(Math.random() * motivations[category].length)
        ];
    }
    
    static generateFullCharacterContext(name, charClass, gender) {
        const background = this.generateRandomBackground();
        const personality = this.generatePersonality();
        const motivation = this.generateMotivation();
        
        return {
            name,
            class: charClass,
            gender,
            background,
            personality,
            motivation,
            connections: background.connections,
            possibleSecret: background.possibleSecrets[
                Math.floor(Math.random() * background.possibleSecrets.length)
            ]
        };
    }
}
