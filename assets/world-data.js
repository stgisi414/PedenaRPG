
// World Geography and Locations
export const countries = {
    pedena: {
        name: "Kingdom of Pedena",
        capital: "Pedena Royal City",
        ruler: "King Aldric Goldmane",
        government: "Constitutional Monarchy",
        population: 2500000,
        climate: "Temperate with magical anomalies",
        mainExports: ["Enchanted crystals", "Rare herbs", "Magical artifacts"],
        description: "The central kingdom known for its magical academies and crystal mines"
    },
    vaelthara: {
        name: "Vaelthara Empire",
        capital: "Ironspire",
        ruler: "Empress Seraphina Darkbane",
        government: "Imperial Autocracy",
        population: 4200000,
        climate: "Harsh winters, mild summers",
        mainExports: ["Steel", "War machines", "Mercenaries"],
        description: "A militaristic empire to the north, known for its iron discipline"
    },
    sylvanmere: {
        name: "Sylvanmere Federation",
        capital: "Moonhaven",
        ruler: "Council of Elder Druids",
        government: "Druidic Council",
        population: 800000,
        climate: "Eternal spring in protected groves",
        mainExports: ["Healing potions", "Rare woods", "Nature spirits"],
        description: "Forest realm governed by ancient druids and nature spirits"
    },
    dustlands: {
        name: "Dustlands Consortium",
        capital: "Sandport",
        ruler: "Merchant Prince Khalim",
        government: "Merchant Republic",
        population: 1100000,
        climate: "Arid desert with coastal oases",
        mainExports: ["Spices", "Gems", "Ancient artifacts"],
        description: "Desert trading nation built around ancient ruins and trade routes"
    }
};

export const cities = {
    // Pedena Cities
    pedena_royal_city: {
        name: "Pedena Royal City",
        country: "pedena",
        population: 150000,
        type: "Capital",
        specialties: ["Royal Academy of Magic", "Crystal Market", "Royal Palace"],
        description: "Gleaming capital with crystal spires and floating gardens"
    },
    crystaldale: {
        name: "Crystaldale",
        country: "pedena",
        population: 45000,
        type: "Mining Town",
        specialties: ["Crystal mining", "Gem cutting", "Magical research"],
        description: "Mountain town built around the largest crystal mines in the realm"
    },
    riverport: {
        name: "Riverport",
        country: "pedena",
        population: 85000,
        type: "Trading Hub",
        specialties: ["River trade", "Shipbuilding", "Fish markets"],
        description: "Bustling port city where three rivers converge"
    },
    // Vaelthara Cities
    ironspire: {
        name: "Ironspire",
        country: "vaelthara",
        population: 200000,
        type: "Imperial Capital",
        specialties: ["War College", "Weapon forges", "Military parade grounds"],
        description: "Fortress city dominated by a massive iron tower piercing the clouds"
    },
    grimhold: {
        name: "Grimhold",
        country: "vaelthara",
        population: 60000,
        type: "Fortress City",
        specialties: ["Military training", "Siege weapons", "Veteran barracks"],
        description: "Mountain fortress guarding the northern passes"
    },
    // Sylvanmere Cities
    moonhaven: {
        name: "Moonhaven",
        country: "sylvanmere",
        population: 25000,
        type: "Druidic Capital",
        specialties: ["Druid circles", "Nature magic", "Tree libraries"],
        description: "City built within and around massive ancient trees"
    },
    whispergrove: {
        name: "Whispergrove",
        country: "sylvanmere",
        population: 8000,
        type: "Sacred Grove",
        specialties: ["Healing springs", "Spirit communion", "Rare herbs"],
        description: "Hidden grove where the veil between worlds grows thin"
    },
    // Dustlands Cities
    sandport: {
        name: "Sandport",
        country: "dustlands",
        population: 120000,
        type: "Trade Capital",
        specialties: ["Spice markets", "Caravan supplies", "Ancient artifact trade"],
        description: "Sprawling bazaar city built around a life-giving oasis"
    },
    ruinwatch: {
        name: "Ruinwatch",
        country: "dustlands",
        population: 15000,
        type: "Archaeological Site",
        specialties: ["Ruin exploration", "Ancient magic", "Artifact research"],
        description: "Settlement built atop pre-cataclysm ruins of immense power"
    }
};

export const regions = {
    crystal_peaks: {
        name: "Crystal Peaks",
        country: "pedena",
        type: "Mountain Range",
        dangerLevel: "Medium",
        inhabitants: ["Crystal elementals", "Mountain dwarves", "Pegasi"],
        resources: ["Magical crystals", "Rare minerals", "Cloud silk"],
        description: "Towering peaks where raw magic crystallizes into solid form"
    },
    whispering_woods: {
        name: "Whispering Woods",
        country: "sylvanmere",
        type: "Enchanted Forest",
        dangerLevel: "Low-Medium",
        inhabitants: ["Elves", "Treants", "Woodland spirits"],
        resources: ["Ancient wood", "Healing herbs", "Moonstone"],
        description: "Ancient forest where the trees themselves hold memories of ages past"
    },
    iron_wastes: {
        name: "Iron Wastes",
        country: "vaelthara",
        type: "Scorched Battlefields",
        dangerLevel: "High",
        inhabitants: ["War ghosts", "Iron golems", "Scavenger bands"],
        resources: ["Scrap metal", "Cursed weapons", "Battle relics"],
        description: "Desolate lands scarred by centuries of warfare"
    },
    sunward_dunes: {
        name: "Sunward Dunes",
        country: "dustlands",
        type: "Desert",
        dangerLevel: "High",
        inhabitants: ["Sand dragons", "Nomad tribes", "Djinn"],
        resources: ["Rare spices", "Solar crystals", "Ancient artifacts"],
        description: "Endless desert hiding the ruins of a lost civilization"
    }
};
