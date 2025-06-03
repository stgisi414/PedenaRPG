
// Businesses and Economic Systems
export const businesses = {
    // Magic Shops
    mystical_oddities: {
        name: "Mystical Oddities & Arcane Supplies",
        type: "Magic Shop",
        location: "Pedena Royal City",
        owner: "Madame Zelara Nightwhisper",
        specialty: "Rare magical components and enchanted items",
        reputation: "Expensive but highest quality",
        services: ["Item enchantment", "Magical research", "Rare component sourcing"],
        priceRange: "High",
        description: "Elegant shop filled with floating crystals and mysterious artifacts"
    },
    hedge_wizard_hut: {
        name: "The Hedge Wizard's Hut",
        type: "Magic Shop",
        location: "Crystaldale",
        owner: "Old Man Grizelda",
        specialty: "Basic potions and simple enchantments",
        reputation: "Affordable and reliable",
        services: ["Potion brewing", "Basic item repair", "Magical consultation"],
        priceRange: "Low-Medium",
        description: "Cozy cottage shop with herbs hanging from every rafter"
    },
    
    // Weapon & Armor Shops
    ironclad_armory: {
        name: "Ironclad Armory",
        type: "Weapons & Armor",
        location: "Ironspire",
        owner: "Master Smith Theron Steelbeard",
        specialty: "Military-grade weapons and heavy armor",
        reputation: "Battle-tested quality",
        services: ["Custom forging", "Weapon repair", "Armor fitting"],
        priceRange: "High",
        description: "Fortress-like shop echoing with the sound of hammers on steel"
    },
    wanderers_gear: {
        name: "The Wanderer's Gear",
        type: "Weapons & Armor",
        location: "Riverport",
        owner: "Captain Marisa Quickblade",
        specialty: "Light weapons and travel gear",
        reputation: "Practical and durable",
        services: ["Equipment maintenance", "Travel consulting", "Weapon training"],
        priceRange: "Medium",
        description: "Shop run by retired adventurer with gear from across the realm"
    },
    
    // Inns & Taverns
    golden_griffin: {
        name: "The Golden Griffin Inn",
        type: "Inn & Tavern",
        location: "Pedena Royal City",
        owner: "Innkeeper Helena Warmhearth",
        specialty: "Luxury accommodations and fine dining",
        reputation: "Prestigious establishment",
        services: ["Luxury rooms", "Fine dining", "Private meeting rooms"],
        priceRange: "High",
        description: "Opulent inn favored by nobles and wealthy merchants"
    },
    laughing_dragon: {
        name: "The Laughing Dragon Tavern",
        type: "Tavern",
        location: "Riverport",
        owner: "Bartender 'Big Tom' Ironbelly",
        specialty: "Strong drinks and hearty meals",
        reputation: "Rowdy but friendly",
        services: ["Cheap ale", "Gambling", "Information trading"],
        priceRange: "Low",
        description: "Boisterous tavern where adventurers gather to share tales"
    },
    moonlit_sanctuary: {
        name: "Moonlit Sanctuary Inn",
        type: "Inn",
        location: "Moonhaven",
        owner: "Elven Hostess Silviana Starleaf",
        specialty: "Peaceful rest and natural healing",
        reputation: "Tranquil retreat",
        services: ["Healing baths", "Meditation gardens", "Herbal treatments"],
        priceRange: "Medium",
        description: "Serene inn built within living trees, offering natural rejuvenation"
    },
    
    // General Stores
    everything_emporium: {
        name: "Grimbold's Everything Emporium",
        type: "General Store",
        location: "Multiple locations",
        owner: "Merchant Chain (Grimbold family)",
        specialty: "Wide variety of common goods",
        reputation: "Reliable and well-stocked",
        services: ["General supplies", "Trade goods", "Information bulletin"],
        priceRange: "Medium",
        description: "Chain of well-organized stores with consistent inventory"
    },
    
    // Specialty Shops
    exotic_spices: {
        name: "Khalim's Exotic Spices & Treasures",
        type: "Specialty Shop",
        location: "Sandport",
        owner: "Spice Merchant Khalim Al-Zahra",
        specialty: "Rare spices and desert artifacts",
        reputation: "Exotic and mysterious",
        services: ["Spice trading", "Artifact appraisal", "Desert survival gear"],
        priceRange: "Medium-High",
        description: "Aromatic shop filled with the scents of distant lands"
    },
    tome_keeper: {
        name: "The Tome Keeper's Library",
        type: "Bookshop",
        location: "Pedena Royal City",
        owner: "Scholar Erasmus Inkwell",
        specialty: "Rare books and scrolls",
        reputation: "Academic authority",
        services: ["Book trading", "Research assistance", "Scroll copying"],
        priceRange: "Medium-High",
        description: "Towering shelves filled with knowledge from across the ages"
    },
    
    // Criminal Enterprises
    silk_glove: {
        name: "The Silk Glove",
        type: "Fence/Criminal Front",
        location: "Riverport (hidden)",
        owner: "Unknown (suspected: Shadowmere Brotherhood)",
        specialty: "Stolen goods and information",
        reputation: "Secretive but reliable",
        services: ["Fencing", "Information brokering", "Discrete services"],
        priceRange: "Variable",
        description: "Seemingly legitimate textile shop that serves as a criminal front"
    }
};

export const tradeGoods = {
    // Raw Materials
    iron_ore: {
        name: "Iron Ore",
        category: "Raw Material",
        basePrice: 2,
        weight: 10,
        origin: ["Vaelthara mines", "Mountain regions"],
        uses: ["Weapon crafting", "Armor making", "Construction"],
        description: "Basic metal ore essential for most metalworking"
    },
    mithril_ore: {
        name: "Mithril Ore",
        category: "Precious Material",
        basePrice: 50,
        weight: 5,
        origin: ["Deep mountain veins", "Ancient ruins"],
        uses: ["Magical weapons", "Enchanted armor", "Spell focuses"],
        description: "Rare magical metal that conducts arcane energy"
    },
    crystal_shards: {
        name: "Crystal Shards",
        category: "Magical Material",
        basePrice: 15,
        weight: 2,
        origin: ["Crystal Peaks", "Magical anomalies"],
        uses: ["Spell components", "Magical item creation", "Energy storage"],
        description: "Fragments of pure magical energy in crystalline form"
    },
    
    // Food & Consumables
    healing_herbs: {
        name: "Healing Herbs",
        category: "Consumable",
        basePrice: 8,
        weight: 1,
        origin: ["Sylvanmere forests", "Sacred groves"],
        uses: ["Potion brewing", "Medical treatment", "Religious ceremonies"],
        description: "Plants imbued with natural healing properties"
    },
    exotic_spices: {
        name: "Exotic Spices",
        category: "Luxury Food",
        basePrice: 12,
        weight: 1,
        origin: ["Dustlands markets", "Foreign trade routes"],
        uses: ["Cooking", "Preservation", "Luxury consumption"],
        description: "Rare spices that enhance flavor and preserve food"
    },
    dragon_pepper: {
        name: "Dragon Pepper",
        category: "Rare Spice",
        basePrice: 25,
        weight: 0.5,
        origin: ["Volcanic regions", "Dragon lairs"],
        uses: ["Alchemical reagents", "Exotic cooking", "Fire resistance potions"],
        description: "Incredibly hot peppers that grow in volcanic soil"
    },
    
    // Manufactured Goods
    silk_cloth: {
        name: "Silk Cloth",
        category: "Luxury Textile",
        basePrice: 20,
        weight: 2,
        origin: ["Skilled weavers", "Giant spider silk"],
        uses: ["Fine clothing", "Magical vestments", "Noble gifts"],
        description: "Luxurious fabric prized by nobility and wealthy merchants"
    },
    dwarven_ale: {
        name: "Dwarven Ale",
        category: "Alcoholic Beverage",
        basePrice: 5,
        weight: 3,
        origin: ["Mountain breweries", "Dwarven settlements"],
        uses: ["Entertainment", "Cultural exchange", "Liquid courage"],
        description: "Strong ale brewed using ancient dwarven techniques"
    },
    
    // Magical Items
    scroll_cases: {
        name: "Spell Scroll Cases",
        category: "Magical Supplies",
        basePrice: 30,
        weight: 1,
        origin: ["Mage colleges", "Scribal monasteries"],
        uses: ["Spell storage", "Magic research", "Knowledge preservation"],
        description: "Protective cases for storing magical scrolls and documents"
    }
};

export const economicData = {
    currencyExchange: {
        gold: { value: 1, description: "Standard currency" },
        silver: { value: 0.1, description: "Common small transactions" },
        copper: { value: 0.01, description: "Everyday purchases" },
        platinum: { value: 10, description: "Large transactions, rare" },
        crystalCoin: { value: 5, description: "Pedena magical currency" },
        tradeTokens: { value: 1, description: "Merchant guild currency" }
    },
    
    economicCenters: {
        pedena_royal_city: {
            type: "Political & Magical Hub",
            specialties: ["Magical items", "Luxury goods", "Government services"],
            priceModifier: 1.3,
            description: "High prices due to wealthy clientele and magical focus"
        },
        riverport: {
            type: "Trade Hub",
            specialties: ["River trade", "Common goods", "Transport services"],
            priceModifier: 0.9,
            description: "Competitive prices due to high trade volume"
        },
        sandport: {
            type: "Exotic Trade Center",
            specialties: ["Spices", "Foreign goods", "Ancient artifacts"],
            priceModifier: 1.1,
            description: "Premium prices for rare and exotic items"
        },
        crystaldale: {
            type: "Industrial Mining Town",
            specialties: ["Raw materials", "Mining equipment", "Crystal products"],
            priceModifier: 0.8,
            description: "Lower prices on raw materials, higher on finished goods"
        }
    },
    
    tradeRoutes: {
        golden_road: {
            name: "Golden Trade Road",
            connects: ["Pedena Royal City", "Sandport", "Riverport"],
            duration: "2-3 weeks",
            danger: "Medium",
            primaryGoods: ["Spices", "Crystals", "Luxury items"],
            description: "Main commercial artery connecting major trade centers"
        },
        crystal_path: {
            name: "Crystal Mountain Path",
            connects: ["Crystaldale", "Pedena Royal City"],
            duration: "1 week",
            danger: "High",
            primaryGoods: ["Crystal shards", "Mithril", "Gem stones"],
            description: "Dangerous mountain route for valuable magical materials"
        },
        river_network: {
            name: "Three Rivers Network",
            connects: ["Riverport", "Multiple settlements"],
            duration: "Varies",
            danger: "Low-Medium",
            primaryGoods: ["Common goods", "Food", "Building materials"],
            description: "River system allowing efficient bulk transport"
        }
    }
};
