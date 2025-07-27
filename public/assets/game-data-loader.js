
// Game Data Loader - Integrates all world data
import { countries, cities, regions } from './world-data.js';
import { factions, guilds, secretOrganizations } from './factions-guilds.js';
import { deities, religions, cults, philosophies } from './religions-beliefs.js';
import { businesses, tradeGoods, economicData } from './businesses-economy.js';

// Main game data object
export const gameData = {
    world: {
        countries,
        cities,
        regions
    },
    organizations: {
        factions,
        guilds,
        secretOrganizations
    },
    beliefs: {
        deities,
        religions,
        cults,
        philosophies
    },
    economy: {
        businesses,
        tradeGoods,
        economicData
    }
};

// Helper functions for game integration
export class GameDataManager {
    
    // Get random element from any category
    static getRandomFrom(category) {
        const keys = Object.keys(category);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return category[randomKey];
    }
    
    // Get businesses in a specific location
    static getBusinessesInLocation(locationName) {
        return Object.values(businesses).filter(business => 
            business.location.toLowerCase().includes(locationName.toLowerCase())
        );
    }
    
    // Get factions by alignment
    static getFactionsByAlignment(alignment) {
        return Object.values(factions).filter(faction => 
            faction.alignment === alignment
        );
    }
    
    // Get trade goods by category
    static getTradeGoodsByCategory(category) {
        return Object.values(tradeGoods).filter(good => 
            good.category === category
        );
    }
    
    // Generate location-appropriate background elements
    static generateLocationContext(locationName) {
        const location = this.findLocation(locationName);
        if (!location) return null;
        
        const context = {
            location: location,
            localBusinesses: this.getBusinessesInLocation(locationName),
            dominantReligion: this.getDominantReligion(location.country),
            localFactions: this.getLocalFactions(location.country),
            tradeGoods: this.getRegionalTradeGoods(location.country)
        };
        
        return context;
    }
    
    // Find a location by name
    static findLocation(name) {
        const normalizedName = name.toLowerCase();
        
        // Check cities first
        for (const city of Object.values(cities)) {
            if (city.name.toLowerCase().includes(normalizedName)) {
                return city;
            }
        }
        
        // Check regions
        for (const region of Object.values(regions)) {
            if (region.name.toLowerCase().includes(normalizedName)) {
                return region;
            }
        }
        
        return null;
    }
    
    // Get dominant religion for a country
    static getDominantReligion(countryName) {
        switch (countryName?.toLowerCase()) {
            case 'pedena':
                return religions.church_of_lumina;
            case 'sylvanmere':
                return religions.circle_of_seasons;
            case 'vaelthara':
                return religions.forge_brotherhood;
            case 'dustlands':
                return religions.tide_singers;
            default:
                return this.getRandomFrom(religions);
        }
    }
    
    // Get local factions for a country
    static getLocalFactions(countryName) {
        const localFactions = [];
        
        Object.values(factions).forEach(faction => {
            if (faction.headquarters?.toLowerCase().includes(countryName?.toLowerCase())) {
                localFactions.push(faction);
            }
        });
        
        return localFactions.length > 0 ? localFactions : [this.getRandomFrom(factions)];
    }
    
    // Get regional trade goods
    static getRegionalTradeGoods(countryName) {
        const regionalGoods = [];
        
        Object.values(tradeGoods).forEach(good => {
            if (good.origin.some(origin => 
                origin.toLowerCase().includes(countryName?.toLowerCase())
            )) {
                regionalGoods.push(good);
            }
        });
        
        return regionalGoods;
    }
    
    // Generate rich background context for AI prompts
    static generateBackgroundPromptContext(characterData) {
        const { name, class: charClass, gender } = characterData;
        
        // Get random elements for background generation
        const randomCity = this.getRandomFrom(cities);
        const randomFaction = this.getRandomFrom(factions);
        const randomGuild = this.getRandomFrom(guilds);
        const randomReligion = this.getRandomFrom(religions);
        const randomBusiness = this.getRandomFrom(businesses);
        
        const context = {
            worldLore: {
                majorCities: [randomCity.name, this.getRandomFrom(cities).name],
                activeFactions: [randomFaction.name, this.getRandomFrom(factions).name],
                availableGuilds: [randomGuild.name, this.getRandomFrom(guilds).name],
                dominantReligions: [randomReligion.name, this.getRandomFrom(religions).name],
                notableBusinesses: [randomBusiness.name, this.getRandomFrom(businesses).name]
            },
            characterContext: {
                name,
                class: charClass,
                gender,
                possibleOrigins: [randomCity.name, this.getRandomFrom(cities).name],
                potentialAffiliations: [randomFaction.name, randomGuild.name],
                culturalInfluences: [randomReligion.name, this.getRandomFrom(philosophies).name]
            }
        };
        
        return context;
    }
}

// Export everything for easy access
export default gameData;
