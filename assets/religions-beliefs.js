
// Religions and Belief Systems
export const deities = {
    lumina: {
        name: "Lumina the Dawnbringer",
        domain: ["Light", "Healing", "Hope", "New Beginnings"],
        alignment: "Lawful Good",
        symbol: "Golden sun rising over mountains",
        worshippers: ["Healers", "Paladins", "Common folk", "Farmers"],
        temples: "Temple of Eternal Dawn in major cities",
        clergy: "Order of the Golden Sun",
        description: "Goddess of light and healing, patron of those who bring hope to the world"
    },
    morteus: {
        name: "Morteus the Gravewarden",
        domain: ["Death", "Rest", "Memory", "Transition"],
        alignment: "Lawful Neutral",
        symbol: "Skull crowned with forget-me-nots",
        worshippers: ["Undertakers", "Historians", "The grieving", "Necromancers"],
        temples: "Silent Crypts in graveyards",
        clergy: "Silent Brothers",
        description: "God of peaceful death and remembrance, guardian of the boundary between life and afterlife"
    },
    verdana: {
        name: "Verdana the Wildmother",
        domain: ["Nature", "Growth", "Animals", "Seasons"],
        alignment: "Neutral Good",
        symbol: "Tree with roots and branches forming a circle",
        worshippers: ["Druids", "Rangers", "Farmers", "Hunters"],
        temples: "Sacred groves throughout Sylvanmere",
        clergy: "Circle of the Eternal Grove",
        description: "Goddess of nature and growing things, mother to all living creatures"
    },
    thalassa: {
        name: "Thalassa the Stormcaller",
        domain: ["Ocean", "Storms", "Travel", "Adventure"],
        alignment: "Chaotic Neutral",
        symbol: "Ship's wheel surrounded by lightning",
        worshippers: ["Sailors", "Merchants", "Adventurers", "Pirates"],
        temples: "Floating shrines in harbors",
        clergy: "Tide Priests",
        description: "Goddess of the seas and storms, patron of those who brave the unknown"
    },
    ferrum: {
        name: "Ferrum the Forgefather",
        domain: ["Crafting", "Industry", "War", "Strength"],
        alignment: "Lawful Neutral",
        symbol: "Hammer striking an anvil with sparks",
        worshippers: ["Smiths", "Warriors", "Engineers", "Miners"],
        temples: "Great Forges in industrial cities",
        clergy: "Hammerpriests",
        description: "God of crafting and warfare, patron of those who shape the world with their hands"
    },
    nyx: {
        name: "Nyx the Shadowweaver",
        domain: ["Darkness", "Secrets", "Magic", "Mystery"],
        alignment: "True Neutral",
        symbol: "Crescent moon veiled in shadow",
        worshippers: ["Spies", "Scholars", "Mages", "Thieves"],
        temples: "Hidden sanctuaries in shadows",
        clergy: "Veil Keepers",
        description: "Goddess of secrets and hidden knowledge, patron of those who work in shadows"
    }
};

export const religions = {
    church_of_lumina: {
        name: "Church of the Eternal Dawn",
        primaryDeity: "Lumina",
        structure: "Hierarchical with High Priest at top",
        influence: "Very High in Pedena",
        beliefs: ["Light conquers darkness", "Healing is sacred duty", "Hope must be preserved"],
        practices: ["Dawn prayers", "Healing services", "Charity work"],
        holyDays: ["Festival of First Light", "Healing Moon", "Harvest Blessing"],
        description: "Dominant religion focused on healing, hope, and bringing light to the world"
    },
    circle_of_seasons: {
        name: "Circle of the Eternal Seasons",
        primaryDeity: "Verdana",
        structure: "Druidic circles with rotating leadership",
        influence: "Dominant in Sylvanmere",
        beliefs: ["Balance in all things", "Nature knows best", "Death feeds new life"],
        practices: ["Seasonal ceremonies", "Animal communion", "Plant cultivation"],
        holyDays: ["Spring Awakening", "Summer Solstice", "Autumn Harvest", "Winter Rest"],
        description: "Nature-based religion emphasizing balance and the cycle of seasons"
    },
    forge_brotherhood: {
        name: "Brotherhood of the Eternal Forge",
        primaryDeity: "Ferrum",
        structure: "Guild-like with Master Smiths as priests",
        influence: "Strong in Vaelthara and industrial areas",
        beliefs: ["Work shapes destiny", "Strength through discipline", "Create to improve the world"],
        practices: ["Dawn smithing", "Weapon blessing", "Apprentice ceremonies"],
        holyDays: ["Forgefire Festival", "Day of the Master Smith", "Iron Solidarity"],
        description: "Religion of crafters and warriors emphasizing hard work and strength"
    },
    tide_singers: {
        name: "Tide Singers of Thalassa",
        primaryDeity: "Thalassa",
        structure: "Loose confederation of sea priests",
        influence: "Strong in coastal regions",
        beliefs: ["Change is constant", "Adventure brings growth", "Respect the sea's power"],
        practices: ["Storm dancing", "Ship blessing", "Tide reading"],
        holyDays: ["Storm's End", "First Voyage", "Deep Tide Festival"],
        description: "Maritime religion focused on adventure, change, and respecting natural forces"
    },
    shadow_mysteries: {
        name: "Mysteries of the Veiled Moon",
        primaryDeity: "Nyx",
        structure: "Secret initiates with hidden hierarchy",
        influence: "Hidden but widespread",
        beliefs: ["Knowledge is power", "Some truths must be hidden", "Darkness preserves light"],
        practices: ["Secret rituals", "Information gathering", "Magical research"],
        holyDays: ["Night of No Moon", "Revelation of Secrets", "Shadow Dance"],
        description: "Mystery religion focused on hidden knowledge and the balance of light and dark"
    }
};

export const cults = {
    void_seekers: {
        name: "Seekers of the Endless Void",
        type: "Nihilistic Cult",
        secretLevel: "Highly Secret",
        danger: "Extremely High",
        beliefs: ["Existence is suffering", "Void is peace", "Reality must end"],
        practices: ["Void meditation", "Reality corruption", "Summoning void entities"],
        leader: "The Null Prophet",
        description: "Dangerous cult seeking to unravel reality itself"
    },
    crimson_hand: {
        name: "The Crimson Hand",
        type: "Blood Magic Cult",
        secretLevel: "Secret",
        danger: "High",
        beliefs: ["Power through sacrifice", "Blood holds life essence", "Strength over weakness"],
        practices: ["Blood rituals", "Sacrifice ceremonies", "Pain meditation"],
        leader: "Bloodmaster Scar",
        description: "Cult practicing forbidden blood magic and sacrifice"
    },
    golden_coin: {
        name: "Order of the Golden Coin",
        type: "Wealth Worship",
        secretLevel: "Semi-Open",
        danger: "Medium",
        beliefs: ["Wealth is virtue", "Poverty is sin", "Gold grants immortality"],
        practices: ["Wealth accumulation", "Economic manipulation", "Luxury rituals"],
        leader: "The Golden Prophet",
        description: "Cult that worships wealth and material possessions above all else"
    }
};

export const philosophies = {
    balance_seekers: {
        name: "Philosophy of Perfect Balance",
        origin: "Ancient Sylvanmere scholars",
        coreIdea: "True wisdom comes from understanding all perspectives",
        practitioners: ["Judges", "Mediators", "Scholarly monks"],
        description: "Philosophical school emphasizing balance in all aspects of life"
    },
    progress_doctrine: {
        name: "Doctrine of Endless Progress",
        origin: "Vaelthara engineers and mages",
        coreIdea: "Advancement and improvement are moral imperatives",
        practitioners: ["Inventors", "Researchers", "Progressive politicians"],
        description: "Philosophy that views technological and magical advancement as humanity's purpose"
    },
    simple_path: {
        name: "The Simple Path",
        origin: "Rural Pedena communities",
        coreIdea: "Happiness comes from simple pleasures and honest work",
        practitioners: ["Farmers", "Artisans", "Village leaders"],
        description: "Philosophy emphasizing simplicity, community, and finding joy in everyday life"
    }
};
