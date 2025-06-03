
// Advanced Location Management System
import { gameData, GameDataManager } from '../assets/game-data-loader.js';

// Ensure gameData is available globally for compatibility
if (typeof window !== 'undefined') {
    window.gameData = gameData;
}

export class LocationManager {
    
    static locationTypes = {
        CITY: 'city',
        REGION: 'region', 
        BUILDING: 'building',
        DISTRICT: 'district',
        LANDMARK: 'landmark',
        WILDERNESS: 'wilderness',
        DUNGEON: 'dungeon'
    };

    static movementPatterns = {
        // Specific location patterns
        cities: /(?:go|travel|move|head|journey|visit)\s+(?:to\s+)?(?:the\s+)?(pedena royal city|crystaldale|riverport|ironspire|grimhold|moonhaven|whispergrove|sandport|ruinwatch)/i,
        regions: /(?:go|travel|move|head|journey|visit)\s+(?:to\s+)?(?:the\s+)?(crystal peaks|whispering woods|iron wastes|sunward dunes)/i,
        districts: /(?:go|travel|move|head|journey|visit)\s+(?:to\s+)?(?:the\s+)?(market district|noble quarter|docks|slums|temple district|mage quarter|merchant quarter)/i,
        buildings: /(?:go|travel|move|head|journey|visit|enter)\s+(?:to\s+)?(?:the\s+)?(inn|tavern|shop|temple|guild hall|library|academy|barracks|palace|cathedral)/i,
        directional: /(?:go|move|head|travel)\s+(north|south|east|west|northeast|northwest|southeast|southwest)/i,
        generic: /(?:go|move|travel|head|journey|visit)\s+(?:to\s+)?(?:the\s+)?(.+)/i
    };

    static analyzeMovementCommand(command, currentLocation, gameState) {
        const lowerCommand = command.toLowerCase().trim();
        
        const analysis = {
            originalCommand: command,
            movementType: 'unknown',
            destination: null,
            confidence: 0,
            travelMethod: 'walking',
            estimatedTime: 0,
            encounterChance: 0.1,
            possibleDestinations: [],
            contextualInfo: this.buildLocationContext(currentLocation, gameState)
        };

        // Check for specific city destinations
        const cityMatch = lowerCommand.match(this.movementPatterns.cities);
        if (cityMatch) {
            const cityName = this.normalizeCityName(cityMatch[1]);
            const cityData = this.findCityData(cityName);
            if (cityData) {
                analysis.movementType = 'city_travel';
                analysis.destination = cityData;
                analysis.confidence = 0.95;
                analysis.estimatedTime = this.calculateTravelTime(currentLocation, cityName);
                analysis.encounterChance = this.calculateEncounterChance(currentLocation, cityName);
                return analysis;
            }
        }

        // Check for region destinations
        const regionMatch = lowerCommand.match(this.movementPatterns.regions);
        if (regionMatch) {
            const regionName = this.normalizeRegionName(regionMatch[1]);
            const regionData = this.findRegionData(regionName);
            if (regionData) {
                analysis.movementType = 'region_travel';
                analysis.destination = regionData;
                analysis.confidence = 0.9;
                analysis.estimatedTime = this.calculateTravelTime(currentLocation, regionName);
                analysis.encounterChance = this.calculateEncounterChance(currentLocation, regionName);
                return analysis;
            }
        }

        // Check for district movement (within same city)
        const districtMatch = lowerCommand.match(this.movementPatterns.districts);
        if (districtMatch) {
            analysis.movementType = 'district_travel';
            analysis.destination = {
                name: this.capitalizeWords(districtMatch[1]),
                type: 'district',
                parentLocation: currentLocation
            };
            analysis.confidence = 0.8;
            analysis.estimatedTime = 15; // 15 minutes within city
            analysis.encounterChance = 0.05;
            return analysis;
        }

        // Check for building entry
        const buildingMatch = lowerCommand.match(this.movementPatterns.buildings);
        if (buildingMatch) {
            analysis.movementType = 'building_entry';
            analysis.destination = {
                name: this.capitalizeWords(buildingMatch[1]),
                type: 'building',
                parentLocation: currentLocation
            };
            analysis.confidence = 0.85;
            analysis.estimatedTime = 5; // 5 minutes to enter building
            analysis.encounterChance = 0.02;
            return analysis;
        }

        // Check for directional movement
        const directionalMatch = lowerCommand.match(this.movementPatterns.directional);
        if (directionalMatch) {
            const direction = directionalMatch[1];
            const possibleDestinations = this.getDestinationsInDirection(currentLocation, direction);
            analysis.movementType = 'directional_travel';
            analysis.destination = {
                direction: direction,
                possibleLocations: possibleDestinations
            };
            analysis.confidence = 0.7;
            analysis.possibleDestinations = possibleDestinations;
            analysis.estimatedTime = 60; // 1 hour of travel
            analysis.encounterChance = 0.3;
            return analysis;
        }

        // Generic movement - try to interpret destination
        const genericMatch = lowerCommand.match(this.movementPatterns.generic);
        if (genericMatch) {
            const destination = genericMatch[1];
            const interpretedDestination = this.interpretGenericDestination(destination, currentLocation);
            analysis.movementType = 'interpreted_travel';
            analysis.destination = interpretedDestination;
            analysis.confidence = interpretedDestination.confidence;
            analysis.estimatedTime = interpretedDestination.estimatedTime || 30;
            analysis.encounterChance = interpretedDestination.encounterChance || 0.2;
            return analysis;
        }

        return analysis;
    }

    static normalizeCityName(cityName) {
        const cityMap = {
            'pedena royal city': 'pedena_royal_city',
            'royal city': 'pedena_royal_city',
            'capital': 'pedena_royal_city',
            'crystaldale': 'crystaldale',
            'crystal dale': 'crystaldale',
            'riverport': 'riverport',
            'river port': 'riverport',
            'ironspire': 'ironspire',
            'iron spire': 'ironspire',
            'grimhold': 'grimhold',
            'grim hold': 'grimhold',
            'moonhaven': 'moonhaven',
            'moon haven': 'moonhaven',
            'whispergrove': 'whispergrove',
            'whisper grove': 'whispergrove',
            'sandport': 'sandport',
            'sand port': 'sandport',
            'ruinwatch': 'ruinwatch',
            'ruin watch': 'ruinwatch'
        };
        return cityMap[cityName.toLowerCase()] || cityName.toLowerCase().replace(/\s+/g, '_');
    }

    static normalizeRegionName(regionName) {
        const regionMap = {
            'crystal peaks': 'crystal_peaks',
            'peaks': 'crystal_peaks',
            'mountains': 'crystal_peaks',
            'whispering woods': 'whispering_woods',
            'woods': 'whispering_woods',
            'forest': 'whispering_woods',
            'iron wastes': 'iron_wastes',
            'wastes': 'iron_wastes',
            'battlefield': 'iron_wastes',
            'sunward dunes': 'sunward_dunes',
            'dunes': 'sunward_dunes',
            'desert': 'sunward_dunes'
        };
        return regionMap[regionName.toLowerCase()] || regionName.toLowerCase().replace(/\s+/g, '_');
    }

    static findCityData(cityKey) {
        return gameData.world.cities[cityKey] || null;
    }

    static findRegionData(regionKey) {
        return gameData.world.regions[regionKey] || null;
    }

    static calculateTravelTime(from, to) {
        // Base times in minutes
        const travelTimes = {
            'same_city': 15,
            'nearby_city': 120,
            'distant_city': 240,
            'region': 180,
            'cross_country': 480
        };

        if (from.toLowerCase().includes(to.toLowerCase()) || to.toLowerCase().includes(from.toLowerCase())) {
            return travelTimes.same_city;
        }

        // Check if cities are in same country
        const fromCity = Object.values(gameData.world.cities).find(city => 
            city.name.toLowerCase().includes(from.toLowerCase())
        );
        const toCity = Object.values(gameData.world.cities).find(city => 
            city.name.toLowerCase().includes(to.toLowerCase())
        );

        if (fromCity && toCity) {
            if (fromCity.country === toCity.country) {
                return travelTimes.nearby_city;
            } else {
                return travelTimes.cross_country;
            }
        }

        return travelTimes.region;
    }

    static calculateEncounterChance(from, to) {
        const encounterRates = {
            'city_to_city': 0.2,
            'city_to_region': 0.4,
            'region_to_region': 0.5,
            'within_city': 0.05,
            'dangerous_region': 0.7
        };

        const dangerousRegions = ['iron_wastes', 'sunward_dunes'];
        
        if (dangerousRegions.some(region => to.toLowerCase().includes(region))) {
            return encounterRates.dangerous_region;
        }

        if (from.toLowerCase() === to.toLowerCase()) {
            return encounterRates.within_city;
        }

        return encounterRates.city_to_city;
    }

    static getDestinationsInDirection(currentLocation, direction) {
        // This would ideally use a proper geographic system
        // For now, we'll use logical assumptions based on world data
        const directionMap = {
            north: ['Vaelthara Empire', 'Ironspire', 'Grimhold', 'Iron Wastes'],
            south: ['Dustlands Consortium', 'Sandport', 'Ruinwatch', 'Sunward Dunes'],
            east: ['Crystal Peaks', 'Crystaldale'],
            west: ['Sylvanmere Federation', 'Moonhaven', 'Whispergrove', 'Whispering Woods'],
            northeast: ['Grimhold', 'Iron Wastes'],
            northwest: ['Moonhaven', 'Whispering Woods'],
            southeast: ['Ruinwatch', 'Sunward Dunes'],
            southwest: ['Sandport', 'Dustlands']
        };

        return directionMap[direction] || [];
    }

    static interpretGenericDestination(destination, currentLocation) {
        const keywords = destination.toLowerCase().split(' ');
        
        // Check for location type keywords
        const locationTypes = {
            'town': { type: 'city', confidence: 0.7 },
            'city': { type: 'city', confidence: 0.8 },
            'village': { type: 'city', confidence: 0.6 },
            'forest': { type: 'region', confidence: 0.8 },
            'mountain': { type: 'region', confidence: 0.8 },
            'desert': { type: 'region', confidence: 0.8 },
            'castle': { type: 'building', confidence: 0.9 },
            'temple': { type: 'building', confidence: 0.9 },
            'market': { type: 'district', confidence: 0.8 },
            'docks': { type: 'district', confidence: 0.8 },
            'inn': { type: 'building', confidence: 0.9 },
            'tavern': { type: 'building', confidence: 0.9 }
        };

        for (const keyword of keywords) {
            if (locationTypes[keyword]) {
                return {
                    name: this.capitalizeWords(destination),
                    type: locationTypes[keyword].type,
                    confidence: locationTypes[keyword].confidence,
                    estimatedTime: this.getEstimatedTimeByType(locationTypes[keyword].type),
                    encounterChance: this.getEncounterChanceByType(locationTypes[keyword].type)
                };
            }
        }

        // Fuzzy match against known locations
        const allLocations = [
            ...Object.values(gameData.world.cities),
            ...Object.values(gameData.world.regions)
        ];

        for (const location of allLocations) {
            if (this.fuzzyMatch(destination, location.name)) {
                return {
                    name: location.name,
                    type: location.type || 'unknown',
                    confidence: 0.6,
                    estimatedTime: 120,
                    encounterChance: 0.2,
                    data: location
                };
            }
        }

        // Default unknown destination
        return {
            name: this.capitalizeWords(destination),
            type: 'unknown',
            confidence: 0.3,
            estimatedTime: 60,
            encounterChance: 0.4
        };
    }

    static fuzzyMatch(input, target) {
        const inputLower = input.toLowerCase();
        const targetLower = target.toLowerCase();
        
        // Exact match
        if (inputLower === targetLower) return true;
        
        // Contains match
        if (targetLower.includes(inputLower) || inputLower.includes(targetLower)) return true;
        
        // Word match
        const inputWords = inputLower.split(' ');
        const targetWords = targetLower.split(' ');
        
        for (const inputWord of inputWords) {
            for (const targetWord of targetWords) {
                if (inputWord === targetWord || 
                    (inputWord.length > 3 && targetWord.includes(inputWord)) ||
                    (targetWord.length > 3 && inputWord.includes(targetWord))) {
                    return true;
                }
            }
        }
        
        return false;
    }

    static getEstimatedTimeByType(type) {
        const times = {
            'building': 5,
            'district': 15,
            'city': 120,
            'region': 180,
            'unknown': 60
        };
        return times[type] || 60;
    }

    static getEncounterChanceByType(type) {
        const chances = {
            'building': 0.02,
            'district': 0.05,
            'city': 0.2,
            'region': 0.4,
            'unknown': 0.3
        };
        return chances[type] || 0.3;
    }

    static buildLocationContext(currentLocation, gameState) {
        const context = {
            currentLocation: currentLocation,
            nearbyLocations: this.getNearbyLocations(currentLocation),
            availableTransport: this.getAvailableTransport(currentLocation),
            currentWeather: this.generateWeather(),
            timeOfDay: this.getTimeOfDay(),
            playerLevel: gameState.level,
            playerClass: gameState.class,
            recentLocations: this.getRecentLocations(gameState)
        };

        return context;
    }

    static getNearbyLocations(currentLocation) {
        // This would be enhanced with a proper geography system
        const locationData = Object.values(gameData.world.cities).find(city => 
            city.name.toLowerCase().includes(currentLocation.toLowerCase())
        );

        if (locationData) {
            return Object.values(gameData.world.cities)
                .filter(city => city.country === locationData.country && city.name !== locationData.name)
                .slice(0, 3)
                .map(city => city.name);
        }

        return ['Crystal Peaks', 'Whispering Woods', 'Royal City'];
    }

    static getAvailableTransport(location) {
        const transports = ['walking', 'horse'];
        
        if (location.toLowerCase().includes('port') || location.toLowerCase().includes('river')) {
            transports.push('boat');
        }
        
        if (location.toLowerCase().includes('royal') || location.toLowerCase().includes('capital')) {
            transports.push('royal carriage');
        }
        
        return transports;
    }

    static generateWeather() {
        const weather = ['clear', 'cloudy', 'light rain', 'foggy', 'windy'];
        return weather[Math.floor(Math.random() * weather.length)];
    }

    static getTimeOfDay() {
        const times = ['dawn', 'morning', 'midday', 'afternoon', 'evening', 'night'];
        return times[Math.floor(Math.random() * times.length)];
    }

    static getRecentLocations(gameState) {
        return JSON.parse(localStorage.getItem(`recentLocations_${gameState.name}`) || '[]').slice(-3);
    }

    static saveLocationToHistory(location, playerName) {
        const recent = this.getRecentLocations({ name: playerName });
        recent.push({
            location: location,
            timestamp: Date.now()
        });
        localStorage.setItem(`recentLocations_${playerName}`, JSON.stringify(recent.slice(-10)));
    }

    static capitalizeWords(str) {
        return str.replace(/\b\w/g, letter => letter.toUpperCase());
    }

    static createDetailedMovementPrompt(analysis, gameState) {
        const context = analysis.contextualInfo;
        
        return `ADVANCED MOVEMENT ANALYSIS:
Movement Type: ${analysis.movementType.toUpperCase()}
Confidence: ${(analysis.confidence * 100).toFixed(1)}%
Command: "${analysis.originalCommand}"

DESTINATION ANALYSIS:
${analysis.destination ? `
Target: ${analysis.destination.name || 'Unknown'}
Type: ${analysis.destination.type || 'Unknown'}
${analysis.destination.country ? `Country: ${analysis.destination.country}` : ''}
${analysis.destination.population ? `Population: ${analysis.destination.population.toLocaleString()}` : ''}
${analysis.destination.description ? `Description: ${analysis.destination.description}` : ''}
` : 'No specific destination identified'}

TRAVEL DETAILS:
Estimated Time: ${analysis.estimatedTime} minutes
Encounter Chance: ${(analysis.encounterChance * 100).toFixed(1)}%
Travel Method: ${analysis.travelMethod}
Weather: ${context.currentWeather}
Time of Day: ${context.timeOfDay}

CURRENT CONTEXT:
Current Location: ${context.currentLocation}
Player: ${gameState.name} (Level ${context.playerLevel} ${context.playerClass})
Nearby Locations: ${context.nearbyLocations.join(', ')}
Available Transport: ${context.availableTransport.join(', ')}
Recent Locations: ${context.recentLocations.map(loc => loc.location).join(', ') || 'None'}

${analysis.possibleDestinations.length > 0 ? `
POSSIBLE DESTINATIONS: ${analysis.possibleDestinations.join(', ')}
` : ''}

INSTRUCTIONS FOR AI:
1. Describe the journey in detail based on the movement type and destination
2. Use the specific location data provided above
3. Consider travel time, weather, and time of day in your narrative
4. Include appropriate encounters based on encounter chance
5. Update the player's location to the specific destination name
6. Describe arrival at the destination using its unique characteristics
7. If destination is unclear, provide 2-3 specific options based on context

Please provide a detailed, immersive travel narrative that moves the player from ${context.currentLocation} to ${analysis.destination?.name || 'the intended destination'}.`;
    }
}

export default LocationManager;
