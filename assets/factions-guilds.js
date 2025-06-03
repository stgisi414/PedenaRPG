
// Factions and Political Organizations
export const factions = {
    crystal_order: {
        name: "Order of the Crystal Flame",
        type: "Magical Order",
        alignment: "Lawful Good",
        influence: "High",
        headquarters: "Crystal Sanctum, Pedena Royal City",
        leader: "Archmage Lyralei Starweaver",
        goals: ["Preserve magical knowledge", "Protect the innocent", "Maintain magical balance"],
        allies: ["Royal Guard of Pedena", "Healers Guild"],
        enemies: ["Shadow Cult", "Chaos Mages"],
        description: "Elite order of mages dedicated to using magic for the betterment of all"
    },
    shadow_cult: {
        name: "Cult of the Void Shadow",
        type: "Secret Society",
        alignment: "Chaotic Evil",
        influence: "Medium",
        headquarters: "Unknown (suspected: Abandoned ruins)",
        leader: "The Faceless Prophet",
        goals: ["Summon ancient darkness", "Corrupt magical sources", "Overthrow current order"],
        allies: ["Demon cultists", "Undead necromancers"],
        enemies: ["Order of the Crystal Flame", "All major kingdoms"],
        description: "Secretive cult seeking to unleash primordial darkness upon the world"
    },
    iron_legion: {
        name: "Iron Legion",
        type: "Military Organization",
        alignment: "Lawful Neutral",
        influence: "Very High",
        headquarters: "Ironspire Citadel",
        leader: "General Marcus Steelheart",
        goals: ["Expand Vaelthara Empire", "Maintain military supremacy", "Enforce imperial law"],
        allies: ["Mercenary companies", "Weapon smiths"],
        enemies: ["Rebel groups", "Foreign armies"],
        description: "Elite military force serving as the backbone of the Vaelthara Empire"
    },
    nature_wardens: {
        name: "Wardens of the Ancient Grove",
        type: "Environmental Guardians",
        alignment: "Neutral Good",
        influence: "Medium",
        headquarters: "Heart of Sylvanmere",
        leader: "Elder Druid Thornwick",
        goals: ["Protect natural balance", "Guard ancient secrets", "Heal corrupted lands"],
        allies: ["Animal spirits", "Sylvanmere druids"],
        enemies: ["Industrial polluters", "Demon summoners"],
        description: "Guardians of nature's sacred places and ancient wisdom"
    },
    merchant_princes: {
        name: "Coalition of Merchant Princes",
        type: "Trade Consortium",
        alignment: "True Neutral",
        influence: "High",
        headquarters: "Golden Pavilion, Sandport",
        leader: "Prince-Merchant Khalim Al-Rashid",
        goals: ["Control trade routes", "Maximize profits", "Maintain trade stability"],
        allies: ["Caravan guards", "Trading guilds"],
        enemies: ["Bandits", "Trade competitors"],
        description: "Powerful alliance of the wealthiest merchants controlling desert trade"
    }
};

export const guilds = {
    mages_guild: {
        name: "Arcane Collegium",
        type: "Magical Society",
        membershipReq: "Demonstrated magical ability",
        headquarters: "Tower of Stars, Pedena Royal City",
        guildmaster: "Master Evelyn Moonwhisper",
        services: ["Spell research", "Magical item identification", "Apprentice training"],
        ranks: ["Apprentice", "Journeymage", "Master", "Archmage"],
        fees: { joining: 50, monthly: 10 },
        description: "Premier organization for magical practitioners and scholars"
    },
    merchants_guild: {
        name: "Golden Scale Trading Company",
        type: "Commercial Guild",
        membershipReq: "Established business or 100 gold deposit",
        headquarters: "Commerce Hall, Riverport",
        guildmaster: "Guildmaster Tobias Goldweaver",
        services: ["Trade route protection", "Market information", "Bulk purchasing"],
        ranks: ["Vendor", "Trader", "Merchant", "Trade Baron"],
        fees: { joining: 25, monthly: 5 },
        description: "Largest commercial organization facilitating trade across the realm"
    },
    thieves_guild: {
        name: "Shadowmere Brotherhood",
        type: "Criminal Organization",
        membershipReq: "Invitation only - proven skills",
        headquarters: "The Rat's Nest (secret location)",
        guildmaster: "Shadowmaster Vale",
        services: ["Information brokering", "Discrete services", "Fence operations"],
        ranks: ["Cutpurse", "Burglar", "Shadow", "Shadowmaster"],
        fees: { joining: "A favor owed", monthly: "Percentage of earnings" },
        description: "Underground network of thieves, spies, and information brokers"
    },
    warriors_guild: {
        name: "Brotherhood of the Crossed Swords",
        type: "Combat Society",
        membershipReq: "Combat prowess demonstration",
        headquarters: "Warrior's Hall, multiple locations",
        guildmaster: "Battlemaster Gareth Ironvow",
        services: ["Combat training", "Mercenary contracts", "Weapon maintenance"],
        ranks: ["Squire", "Warrior", "Veteran", "Battlemaster"],
        fees: { joining: 30, monthly: 8 },
        description: "Organization of fighters, guards, and mercenaries for hire"
    },
    crafters_guild: {
        name: "Artisan's Circle",
        type: "Craft Guild",
        membershipReq: "Masterwork demonstration",
        headquarters: "Craftsman's Quarter, Crystaldale",
        guildmaster: "Master Smith Dura Forgeheart",
        services: ["Quality assurance", "Material sourcing", "Apprentice placement"],
        ranks: ["Apprentice", "Journeyman", "Artisan", "Master"],
        fees: { joining: 20, monthly: 3 },
        description: "Union of skilled craftspeople maintaining quality standards"
    },
    healers_guild: {
        name: "Circle of Restoration",
        type: "Medical Guild",
        membershipReq: "Healing knowledge or divine calling",
        headquarters: "Temple of Mercy, Moonhaven",
        guildmaster: "High Priestess Seraphine",
        services: ["Healing services", "Medical supplies", "Disease research"],
        ranks: ["Acolyte", "Healer", "Priest", "High Priest"],
        fees: { joining: 15, monthly: 2 },
        description: "Organization of healers, clerics, and medical practitioners"
    }
};

export const secretOrganizations = {
    whispered_council: {
        name: "The Whispered Council",
        type: "Shadow Government",
        publicKnowledge: "Rumors only",
        truePurpose: "Control major political decisions behind the scenes",
        members: "Unknown nobles, merchants, and mages",
        influence: "Extremely High (Hidden)",
        description: "Secret cabal of powerful individuals manipulating politics"
    },
    phoenix_rising: {
        name: "Phoenix Rising",
        type: "Revolutionary Group",
        publicKnowledge: "Terrorist organization",
        truePurpose: "Overthrow corrupt nobility and establish democracy",
        members: "Disenfranchised citizens, idealistic mages",
        influence: "Growing",
        description: "Underground movement fighting against oppressive regimes"
    },
    keepers_of_time: {
        name: "Keepers of the Eternal Moment",
        type: "Mystical Order",
        publicKnowledge: "Ancient legend",
        truePurpose: "Prevent temporal catastrophes and guard timeline stability",
        members: "Time mages, ancient scholars, prophets",
        influence: "Subtle but crucial",
        description: "Guardians of time itself, working to prevent paradoxes"
    }
};
