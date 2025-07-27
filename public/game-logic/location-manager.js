
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
        'steelhaven': 'steelhaven',
        'steel haven': 'steelhaven',
        'moonhaven': 'moonhaven',
        'moon haven': 'moonhaven',
        'whispergrove': 'whispergrove',
        'whisper grove': 'whispergrove',
        'rootfast': 'rootfast',
        'sandport': 'sandport',
        'sand port': 'sandport',
        'ruinwatch': 'ruinwatch',
        'ruin watch': 'ruinwatch',
        'mirage point': 'mirage_point',
        'mirage_point': 'mirage_point',
        'skyport city': 'skyport_city',
        'skyport_city': 'skyport_city',
        'cirrus outpost': 'cirrus_outpost',
        'cirrus_outpost': 'cirrus_outpost',
        'tempest spire': 'tempest_spire',
        'tempest_spire': 'tempest_spire',
        'glowstone citadel': 'glowstone_citadel',
        'glowstone_citadel': 'glowstone_citadel',
        'mithril hall': 'mithril_hall',
        'mithril_hall': 'mithril_hall',
        'fungus forest town': 'fungus_forest_town',
        'fungus_forest_town': 'fungus_forest_town',
        'icewind hold': 'icewind_hold',
        'icewind_hold': 'icewind_hold',
        'mammoth graveyard post': 'mammoth_graveyard_post',
        'mammoth_graveyard_post': 'mammoth_graveyard_post',
        'aurora point': 'aurora_point',
        'aurora_point': 'aurora_point',
        'obsidian spire': 'obsidian_spire',
        'obsidian_spire': 'obsidian_spire',
        'ashfall town': 'ashfall_town',
        'ashfall_town': 'ashfall_town',
        'lavastream foundry': 'lavastream_foundry',
        'lavastream_foundry': 'lavastream_foundry',
        'coralhaven': 'coralhaven',
        'coral haven': 'coralhaven',
        'typhoon watch': 'typhoon_watch',
        'typhoon_watch': 'typhoon_watch',
        'atoll market': 'atoll_market',
        'atoll_market': 'atoll_market',
        'sunstone city': 'sunstone_city',
        'sunstone_city': 'sunstone_city',
        'dawnstar village': 'dawnstar_village',
        'dawnstar_village': 'dawnstar_village',
        'radiant bastion': 'radiant_bastion',
        'radiant_bastion': 'radiant_bastion',
        'nightsedge': 'nightsedge',
        'gloomfen village': 'gloomfen_village',
        'gloomfen_village': 'gloomfen_village',
        'crypt rest': 'crypt_rest',
        'crypt_rest': 'crypt_rest',
        'khanbaliq (moving camp)': 'khanbaliq_moving_camp',
        'khanbaliq': 'khanbaliq_moving_camp',
        'khanbaliq moving camp': 'khanbaliq_moving_camp',
        'windy pass outpost': 'windy_pass_outpost',
        'windy_pass_outpost': 'windy_pass_outpost',
        'spirit rock encampment': 'spirit_rock_encampment',
        'spirit_rock_encampment': 'spirit_rock_encampment',
        'silent summit monastery': 'silent_summit_monastery',
        'silent_summit_monastery': 'silent_summit_monastery',
        'whisperwind hermitage': 'whisperwind_hermitage',
        'whisperwind_hermitage': 'whisperwind_hermitage',
        'stone lantern village': 'stone_lantern_village',
        'stone_lantern_village': 'stone_lantern_village',
        'gearhaven': 'gearhaven',
        'springloaded town': 'springloaded_town',
        'springloaded_town': 'springloaded_town',
        'bolt & rivet junction': 'bolt_and_rivet_junction',
        'bolt and rivet junction': 'bolt_and_rivet_junction',
        'bolt_and_rivet_junction': 'bolt_and_rivet_junction',
        'stilt town': 'stilt_town',
        'stilt_town': 'stilt_town',
        'bayou bazaar': 'bayou_bazaar',
        'bayou_bazaar': 'bayou_bazaar',
        'whisper reed village': 'whisper_reed_village',
        'whisper_reed_village': 'whisper_reed_village',
        'bellezza city': 'bellezza_city',
        'bellezza_city': 'bellezza_city',
        'vino rosso estate': 'vino_rosso_estate',
        'vino_rosso_estate': 'vino_rosso_estate',
        'bibliotheca port': 'bibliotheca_port',
        'bibliotheca_port': 'bibliotheca_port'
        };
        return cityMap[cityName.toLowerCase()] || cityName.toLowerCase().replace(/\s+/g, '_');
    }

    static normalizeRegionName(regionName) {
        const regionMap = {
            // Pedena Regions
            'crystal peaks': 'crystal_peaks',
            'peaks': 'crystal_peaks',
            'crystal_peaks': 'crystal_peaks',
            'silverwood forest': 'silverwood_forest',
            'silverwood_forest': 'silverwood_forest',
            'arcane marshes': 'arcane_marshes',
            'arcane_marshes': 'arcane_marshes',
            'rolling fields of elmsworth': 'rolling_fields_of_elmsworth',
            'rolling fields': 'rolling_fields_of_elmsworth',
            'elmsworth': 'rolling_fields_of_elmsworth',
            'rolling_fields_of_elmsworth': 'rolling_fields_of_elmsworth',

            // Sylvanmere Regions
            'whispering woods': 'whispering_woods',
            'woods': 'whispering_woods',
            'whispering_woods': 'whispering_woods',
            'the emerald glade': 'emerald_glade',
            'emerald glade': 'emerald_glade',
            'emerald_glade': 'emerald_glade',
            'river of souls': 'river_of_souls',
            'river_of_souls': 'river_of_souls',
            'thicket of thorns': 'thicket_of_thorns',
            'thicket_of_thorns': 'thicket_of_thorns',

            // Vaelthara Regions
            'iron wastes': 'iron_wastes',
            'wastes': 'iron_wastes',
            'iron_wastes': 'iron_wastes',
            'dragonstooth mountains': 'dragonstooth_mountains',
            'dragonstooth_mountains': 'dragonstooth_mountains',
            'shadowfen bog': 'shadowfen_bog',
            'shadowfen_bog': 'shadowfen_bog',
            'legionnaire plains': 'legionnaire_plains',
            'legionnaire_plains': 'legionnaire_plains',

            // Dustlands Regions
            'sunward dunes': 'sunward_dunes',
            'dunes': 'sunward_dunes',
            'sunward_dunes': 'sunward_dunes',
            'the salt flats': 'the_salt_flats',
            'salt flats': 'the_salt_flats',
            'the_salt_flats': 'the_salt_flats',
            'whispering canyons': 'whispering_canyons',
            'whispering_canyons': 'whispering_canyons',
            'oasis of the seven palms': 'oasis_of_the_seven_palms',
            'oasis': 'oasis_of_the_seven_palms',
            'oasis_of_the_seven_palms': 'oasis_of_the_seven_palms',

            // Aeria Regions
            'sea of clouds': 'sea_of_clouds',
            'sea_of_clouds': 'sea_of_clouds',
            'zephyr peaks': 'zephyr_peaks',
            'zephyr_peaks': 'zephyr_peaks',
            'the shattered sky': 'the_shattered_sky',
            'shattered sky': 'the_shattered_sky',
            'the_shattered_sky': 'the_shattered_sky',
            'sunbeam plateau': 'sunbeam_plateau',
            'sunbeam_plateau': 'sunbeam_plateau',

            // Deepdelve Regions
            'the great chasm': 'the_great_chasm',
            'great chasm': 'the_great_chasm',
            'the_great_chasm': 'the_great_chasm',
            'labyrinthine tunnels': 'labyrinthine_tunnels',
            'labyrinthine_tunnels': 'labyrinthine_tunnels',
            'the crystal caves': 'the_crystal_caves',
            'crystal caves': 'the_crystal_caves',
            'the_crystal_caves': 'the_crystal_caves',
            'forgotten forge city': 'forgotten_forge_city',
            'forgotten_forge_city': 'forgotten_forge_city',

            // Frostfell Regions
            'glacial sea of shards': 'glacial_sea_of_shards',
            'glacial sea': 'glacial_sea_of_shards',
            'glacial_sea_of_shards': 'glacial_sea_of_shards',
            'the howling pass': 'the_howling_pass',
            'howling pass': 'the_howling_pass',
            'the_howling_pass': 'the_howling_pass',
            'valley of the sleeping giants': 'valley_of_the_sleeping_giants',
            'sleeping giants': 'valley_of_the_sleeping_giants',
            'valley_of_the_sleeping_giants': 'valley_of_the_sleeping_giants',
            'shimmering ice plains': 'shimmering_ice_plains',
            'ice plains': 'shimmering_ice_plains',
            'shimmering_ice_plains': 'shimmering_ice_plains',

            // Ignis Caldera Regions
            'magma sea': 'magma_sea',
            'magma_sea': 'magma_sea',
            'ashlands expanse': 'ashlands_expanse',
            'ashlands_expanse': 'ashlands_expanse',
            'geyser fields of fury': 'geyser_fields_of_fury',
            'geyser fields': 'geyser_fields_of_fury',
            'geyser_fields_of_fury': 'geyser_fields_of_fury',
            'basalt columns of the ancients': 'basalt_columns_of_the_ancients',
            'basalt columns': 'basalt_columns_of_the_ancients',
            'basalt_columns_of_the_ancients': 'basalt_columns_of_the_ancients',

            // Azure Isles Regions
            'the sunken city of aeloria': 'the_sunken_city_of_aeloria',
            'sunken city': 'the_sunken_city_of_aeloria',
            'aeloria': 'the_sunken_city_of_aeloria',
            'the_sunken_city_of_aeloria': 'the_sunken_city_of_aeloria',
            'singing reefs': 'singing_reefs',
            'singing_reefs': 'singing_reefs',
            'isle of storms': 'isle_of_storms',
            'isle_of_storms': 'isle_of_storms',
            'tranquil lagoon of whispers': 'tranquil_lagoon_of_whispers',
            'tranquil lagoon': 'tranquil_lagoon_of_whispers',
            'tranquil_lagoon_of_whispers': 'tranquil_lagoon_of_whispers',

            // Solara Theocracy Regions
            'plains of golden light': 'plains_of_golden_light',
            'golden plains': 'plains_of_golden_light',
            'plains_of_golden_light': 'plains_of_golden_light',
            'the burning mesa': 'the_burning_mesa',
            'burning mesa': 'the_burning_mesa',
            'the_burning_mesa': 'the_burning_mesa',
            'canyon of echoes': 'canyon_of_echoes',
            'canyon_of_echoes': 'canyon_of_echoes',
            'river of life': 'river_of_life',
            'river_of_life': 'river_of_life',

            // Umbra Marches Regions
            'forest of hanging shadows': 'forest_of_hanging_shadows',
            'hanging shadows': 'forest_of_hanging_shadows',
            'forest_of_hanging_shadows': 'forest_of_hanging_shadows',
            'the mourning hills': 'the_mourning_hills',
            'mourning hills': 'the_mourning_hills',
            'the_mourning_hills': 'the_mourning_hills',
            'veil of secrets': 'veil_of_secrets',
            'veil_of_secrets': 'veil_of_secrets',
            'blackwater tarns': 'blackwater_tarns',
            'blackwater_tarns': 'blackwater_tarns',

            // Whispering Steppes Regions
            'endless grass sea': 'endless_grass_sea',
            'grass sea': 'endless_grass_sea',
            'endless_grass_sea': 'endless_grass_sea',
            'ancestor mounds': 'ancestor_mounds',
            'ancestor_mounds': 'ancestor_mounds',
            'broken tooth badlands': 'broken_tooth_badlands',
            'broken tooth': 'broken_tooth_badlands',
            'broken_tooth_badlands': 'broken_tooth_badlands',
            'sky altar plateau': 'sky_altar_plateau',
            'sky_altar_plateau': 'sky_altar_plateau',

            // Serene Peaks Regions
            'dragon spine ridge': 'dragon_spine_ridge',
            'dragon spine': 'dragon_spine_ridge',
            'dragon_spine_ridge': 'dragon_spine_ridge',
            'valley of hidden waterfalls': 'valley_of_hidden_waterfalls',
            'hidden waterfalls': 'valley_of_hidden_waterfalls',
            'valley_of_hidden_waterfalls': 'valley_of_hidden_waterfalls',
            'caverns of echoing ki': 'caverns_of_echoing_ki',
            'echoing ki': 'caverns_of_echoing_ki',
            'caverns_of_echoing_ki': 'caverns_of_echoing_ki',
            'frozen mirror lake': 'frozen_mirror_lake',
            'mirror lake': 'frozen_mirror_lake',
            'frozen_mirror_lake': 'frozen_mirror_lake',

            // Cogsworth Regions
            'the great steamworks delta': 'the_great_steamworks_delta',
            'steamworks delta': 'the_great_steamworks_delta',
            'the_great_steamworks_delta': 'the_great_steamworks_delta',
            'the ticking forest': 'the_ticking_forest',
            'ticking forest': 'the_ticking_forest',
            'the_ticking_forest': 'the_ticking_forest',
            'scrapheap mountains': 'scrapheap_mountains',
            'scrapheap': 'scrapheap_mountains',
            'scrapheap_mountains': 'scrapheap_mountains',
            'the blueprint archives': 'the_blueprint_archives',
            'blueprint archives': 'the_blueprint_archives',
            'the_blueprint_archives': 'the_blueprint_archives',

            // Murkwater Fen Regions
            'serpent coils river': 'serpent_coils_river',
            'serpent coils': 'serpent_coils_river',
            'serpent_coils_river': 'serpent_coils_river',
            'the whispering mangroves': 'the_whispering_mangroves',
            'whispering mangroves': 'the_whispering_mangroves',
            'the_whispering_mangroves': 'the_whispering_mangroves',
            'graveyard of ships': 'graveyard_of_ships',
            'graveyard_of_ships': 'graveyard_of_ships',
            'sacred mudflats of the loa': 'sacred_mudflats_of_the_loa',
            'sacred mudflats': 'sacred_mudflats_of_the_loa',
            'sacred_mudflats_of_the_loa': 'sacred_mudflats_of_the_loa',

            // Florencia Regions
            'rolling vineyards of tuscano': 'rolling_vineyards_of_tuscano',
            'rolling vineyards': 'rolling_vineyards_of_tuscano',
            'tuscano': 'rolling_vineyards_of_tuscano',
            'rolling_vineyards_of_tuscano': 'rolling_vineyards_of_tuscano',
            'marble quarries of carrara nova': 'marble_quarries_of_carrara_nova',
            'marble quarries': 'marble_quarries_of_carrara_nova',
            'carrara nova': 'marble_quarries_of_carrara_nova',
            'marble_quarries_of_carrara_nova': 'marble_quarries_of_carrara_nova',
            'the forgotten catacombs of bellezza': 'the_forgotten_catacombs_of_bellezza',
            'forgotten catacombs': 'the_forgotten_catacombs_of_bellezza',
            'catacombs': 'the_forgotten_catacombs_of_bellezza',
            'the_forgotten_catacombs_of_bellezza': 'the_forgotten_catacombs_of_bellezza',
            'coastal cliffs of the muse': 'coastal_cliffs_of_the_muse',
            'coastal cliffs': 'coastal_cliffs_of_the_muse',
            'cliffs of the muse': 'coastal_cliffs_of_the_muse',
            'coastal_cliffs_of_the_muse': 'coastal_cliffs_of_the_muse'
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
            north: [
                'ironspire', 
                'grimhold', 
                'steelhaven', 
                'iron_wastes', 
                'dragonstooth_mountains', 
                'shadowfen_bog', 
                'legionnaire_plains',
                'icewind_hold', 
                'mammoth_graveyard_post', 
                'aurora_point', 
                'glacial_sea_of_shards', 
                'the_howling_pass', 
                'valley_of_the_sleeping_giants', 
                'shimmering_ice_plains',
                'silent_summit_monastery',
                'whisperwind_hermitage',
                'stone_lantern_village',
                'dragon_spine_ridge',
                'valley_of_hidden_waterfalls',
                'caverns_of_echoing_ki',
                'frozen_mirror_lake'
            ],
            south: [
                'sandport', 
                'ruinwatch', 
                'mirage_point', 
                'sunward_dunes', 
                'the_salt_flats', 
                'whispering_canyons', 
                'oasis_of_the_seven_palms',
                'obsidian_spire', 
                'ashfall_town', 
                'lavastream_foundry', 
                'magma_sea', 
                'ashlands_expanse', 
                'geyser_fields_of_fury', 
                'basalt_columns_of_the_ancients',
                'stilt_town',
                'bayou_bazaar',
                'whisper_reed_village',
                'serpent_coils_river',
                'the_whispering_mangroves',
                'graveyard_of_ships',
                'sacred_mudflats_of_the_loa'
            ],
            east: [
                'skyport_city', 
                'cirrus_outpost', 
                'tempest_spire', 
                'sea_of_clouds', 
                'zephyr_peaks', 
                'the_shattered_sky', 
                'sunbeam_plateau',
                'bellezza_city',
                'vino_rosso_estate',
                'bibliotheca_port',
                'rolling_vineyards_of_tuscano',
                'marble_quarries_of_carrara_nova',
                'the_forgotten_catacombs_of_bellezza',
                'coastal_cliffs_of_the_muse',
                'gearhaven',
                'springloaded_town',
                'bolt_and_rivet_junction',
                'the_great_steamworks_delta',
                'the_ticking_forest',
                'scrapheap_mountains',
                'the_blueprint_archives'
            ],
            west: [
                'moonhaven', 
                'whispergrove', 
                'rootfast', 
                'whispering_woods', 
                'emerald_glade', 
                'river_of_souls', 
                'thicket_of_thorns',
                'nightsedge',
                'gloomfen_village',
                'crypt_rest',
                'forest_of_hanging_shadows',
                'the_mourning_hills',
                'veil_of_secrets',
                'blackwater_tarns',
                'khanbaliq_moving_camp',
                'windy_pass_outpost',
                'spirit_rock_encampment',
                'endless_grass_sea',
                'ancestor_mounds',
                'broken_tooth_badlands',
                'sky_altar_plateau'
            ],
            northeast: [
                'tempest_spire',
                'zephyr_peaks',
                'steelhaven'
            ],
            northwest: [
                'grimhold',
                'dragonstooth_mountains',
                'rootfast'
            ],
            southeast: [
                'ashfall_town',
                'lavastream_foundry',
                'coralhaven',
                'typhoon_watch',
                'atoll_market',
                'the_sunken_city_of_aeloria',
                'singing_reefs',
                'isle_of_storms',
                'tranquil_lagoon_of_whispers'
            ],
            southwest: [
                'ruinwatch',
                'mirage_point',
                'nightsedge',
                'gloomfen_village',
                'sunstone_city',
                'dawnstar_village',
                'radiant_bastion',
                'plains_of_golden_light',
                'the_burning_mesa',
                'canyon_of_echoes',
                'river_of_life'
            ],
            center: [
                'pedena_royal_city',
                'crystaldale',
                'riverport',
                'crystal_peaks',
                'silverwood_forest',
                'arcane_marshes',
                'rolling_fields_of_elmsworth'
            ],
            up: [
                'skyport_city', 
                'cirrus_outpost', 
                'tempest_spire', 
                'sea_of_clouds', 
                'zephyr_peaks', 
                'the_shattered_sky', 
                'sunbeam_plateau'
            ],
            down: [
                'glowstone_citadel', 
                'mithril_hall', 
                'fungus_forest_town', 
                'the_great_chasm', 
                'labyrinthine_tunnels', 
                'the_crystal_caves', 
                'forgotten_forge_city'
            ]
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

    static async moveToLocation(player, destination) {
        try {
            // Analyze the movement command
            const analysis = this.analyzeMovementCommand(
                `travel to ${destination}`, 
                player.currentLocation, 
                player
            );

            // Validate movement
            if (analysis.confidence < 0.3) {
                return {
                    success: false,
                    message: `Unable to find a route to "${destination}". Please specify a clearer destination.`,
                    analysis: analysis
                };
            }

            // Determine the actual destination name
            let newLocation;
            if (analysis.destination && analysis.destination.name) {
                newLocation = analysis.destination.name;
            } else {
                // Clean up destination name as fallback
                newLocation = this.capitalizeWords(destination.replace(/^(the|a|an)\s+/i, '').trim());
            }

            // Calculate travel effects
            const encounterChance = analysis.encounterChance || 0.2;
            const travelTime = analysis.estimatedTime || 60;

            // Clear any active combat when traveling
            if (typeof window.CombatSystem !== 'undefined') {
                window.CombatSystem.clearCombatState();
            }

            // Save location to history
            this.saveLocationToHistory(newLocation, player.name);

            // Create travel description
            let description = `You travel from ${player.currentLocation} to ${newLocation}.`;
            
            if (analysis.destination && analysis.destination.description) {
                description += ` ${analysis.destination.description}`;
            } else {
                description += ` The journey takes about ${travelTime} minutes.`;
            }

            // Check for random encounters
            let hasEncounter = false;
            let encounterType = null;
            if (Math.random() < encounterChance) {
                hasEncounter = true;
                encounterType = this.getRandomEncounterType();
                description += ` During your journey, you encounter ${encounterType}.`;
            }

            return {
                success: true,
                newLocation: newLocation,
                oldLocation: player.currentLocation,
                description: description,
                travelTime: travelTime,
                hasEncounter: hasEncounter,
                encounterType: encounterType,
                analysis: analysis
            };

        } catch (error) {
            console.error('LocationManager.moveToLocation error:', error);
            return {
                success: false,
                message: `Error traveling to ${destination}: ${error.message}`,
                error: error
            };
        }
    }

    static getRandomEncounterType() {
        const encounters = [
            'a merchant caravan selling common goods',
            'a group of friendly travelers sharing tales by a campfire',
            'a pack of territorial wild animals',
            'a desperate band of bandits demanding a toll',
            'a mysterious, cloaked stranger offering a cryptic warning',
            'an eerily silent, abandoned campsite with warm embers',
            'the crumbling ruins of an ancient watchtower',
            'a cleverly hidden treasure cache marked by a strange symbol',
            'a traveling troupe of musicians and actors',
            'a lost child searching for their family',
            'a patrol of local guards or soldiers',
            'a powerful monster blocking the path',
            'a magical anomaly causing strange weather',
            'a wandering hermit seeking solitude and rare herbs',
            'an overturned cart with its owner trapped beneath',
            'a sacred grove with a serene, otherworldly atmosphere',
            'a competitive group of rival adventurers',
            'a bounty hunter looking for a wanted criminal',
            'a swarm of aggressive, oversized insects',
            'a ghostly apparition replaying a tragic event',
            'a broken bridge over a raging river',
            'a charismatic charlatan selling fake potions',
            'a royal messenger with an urgent decree',
            'a hunting party tracking a rare beast',
            'an ancient, sentient tree that speaks in riddles',
            'a patch of enchanted, glowing mushrooms',
            'a field of petrified soldiers from a past battle',
            'a scholar attempting to translate ancient markings',
            'a territorial griffin guarding its nest',
            'a natural disaster, like a rockslide or flash flood',
            'a group of pilgrims on their way to a holy site',
            'a cursed object that temps passersby',
            'a territorial dispute between two goblin tribes',
            'a hidden entrance to an underground cave system',
            'a magical portal shimmering with unstable energy',
            'a tax collector accompanied by hired muscle',
            'a flock of exotic, colorful birds',
            'a con artist running a shell game on the side of the road',
            'a dying creature that asks for a final favor',
            'a lone, heavily armored knight on a secret quest',
            'a group of refugees fleeing a conflict',
            'a mischievous fey creature playing pranks',
            'a wild magic zone where spells have unpredictable effects',
            'a poacher\'s trap, recently sprung and empty',
            'an old, forgotten graveyard with weathered tombstones',
            'a dragon flying high overhead, casting a massive shadow',
            'an escaped farm animal causing chaos',
            'a circle of druids performing a ritual',
            'a food vendor selling strange but delicious local cuisine',
            'a sudden, unnatural fog that dampens all sound'
        ];
        return encounters[Math.floor(Math.random() * encounters.length)];
    }
}

window.locationManager = LocationManager
