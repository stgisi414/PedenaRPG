
// Background Music Manager - Handles dynamic music generation based on game context
export class BGMManager {
    constructor() {
        this.currentTrack = null;
        this.isPlaying = false;
        this.volume = 0.5;
        this.musicQueue = [];
        this.lastLocation = null;
        this.musicCache = new Map();
        this.apiEndpoint = 'https://chronicles-bgm-stefdgisi.replit.app';
        
        // Audio context for web audio
        this.audioContext = null;
        this.gainNode = null;
        this.currentSource = null;
        
        this.initializeAudioContext();
    }

    initializeAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.gainNode = this.audioContext.createGain();
            this.gainNode.connect(this.audioContext.destination);
            this.gainNode.gain.value = this.volume;
        } catch (error) {
            console.warn('Web Audio API not supported:', error);
        }
    }

    // Generate music based on current game context
    async generateLocationMusic(player, gameState = {}) {
        if (!player || !player.currentLocation) {
            console.warn('BGMManager: No player or location data available');
            return null;
        }

        // Check cache first
        const cacheKey = this.createCacheKey(player.currentLocation, player.class, gameState);
        if (this.musicCache.has(cacheKey)) {
            console.log(`BGMManager: Using cached music for ${player.currentLocation}`);
            return this.musicCache.get(cacheKey);
        }

        try {
            // Create structured game context for the BGM API
            const gameContext = this.createGameContext(player, gameState);
            
            console.log(`BGMManager: Generating music for ${player.currentLocation}...`);
            
            const response = await fetch(`${this.apiEndpoint}/api/generate-bgm`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(gameContext)
            });

            if (!response.ok) {
                throw new Error(`BGM API error: ${response.status} - ${response.statusText}`);
            }

            const musicData = await response.json();
            
            // Cache the result
            this.musicCache.set(cacheKey, musicData);
            
            console.log(`BGMManager: Music generated successfully for ${player.currentLocation}`);
            return musicData;

        } catch (error) {
            console.error('BGMManager: Error generating music:', error);
            return null;
        }
    }

    // Generate music using AI-created prompts
    async generateMusicFromAIPrompt(player, customPrompt = null) {
        if (!player) return null;

        try {
            // Create AI prompt for music generation
            const aiPrompt = customPrompt || await this.createAIPrompt(player);
            
            console.log(`BGMManager: Generating music from AI prompt...`);
            
            const response = await fetch(`${this.apiEndpoint}/api/generate-bgm-from-ai-prompt`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: aiPrompt,
                    context: {
                        location: player.currentLocation,
                        characterClass: player.class,
                        level: player.level
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`BGM AI API error: ${response.status} - ${response.statusText}`);
            }

            const musicData = await response.json();
            console.log(`BGMManager: AI-generated music created successfully`);
            return musicData;

        } catch (error) {
            console.error('BGMManager: Error generating AI music:', error);
            return null;
        }
    }

    // Create structured game context for the BGM API
    createGameContext(player, gameState) {
        // Get location data from the game
        const locationData = this.getLocationData(player.currentLocation);
        
        return {
            location: {
                name: player.currentLocation,
                type: locationData?.type || 'unknown',
                atmosphere: this.getLocationAtmosphere(player.currentLocation),
                dangerLevel: locationData?.dangerLevel || 'medium',
                inhabitants: locationData?.inhabitants || [],
                timeOfDay: this.getTimeOfDay()
            },
            character: {
                class: player.class,
                level: player.level,
                alignment: player.alignment?.type || 'neutral',
                currentHp: player.hp,
                maxHp: player.maxHp
            },
            gameState: {
                inCombat: gameState.inCombat || false,
                hasParty: gameState.hasParty || false,
                questActive: (player.quests && player.quests.some(q => !q.completed)) || false,
                recentEvents: gameState.recentEvents || [],
                mood: this.determineMood(player, gameState)
            },
            musicPreferences: {
                intensity: this.calculateIntensity(player, gameState),
                genre: this.getGenreForLocation(player.currentLocation),
                instruments: this.getInstrumentsForClass(player.class),
                tempo: this.getTempoForSituation(gameState)
            }
        };
    }

    // Create AI prompt for Gemini-based music generation
    async createAIPrompt(player) {
        const locationData = this.getLocationData(player.currentLocation);
        const timeOfDay = this.getTimeOfDay();
        const mood = this.determineMood(player);

        const promptTemplate = `Create background music for a fantasy RPG setting:

Location: ${player.currentLocation}
Location Type: ${locationData?.type || 'fantasy location'}
Time of Day: ${timeOfDay}
Character: Level ${player.level} ${player.class}
Character Health: ${player.hp}/${player.maxHp} HP
Current Mood: ${mood}

${locationData?.description ? `Location Description: ${locationData.description}` : ''}

The music should capture the essence of this fantasy location and character situation. Consider:
- The magical and mystical nature of the world
- The character's current state and class
- The atmosphere and inhabitants of the location
- The time of day and overall mood

Generate atmospheric background music that enhances the role-playing experience.`;

        return promptTemplate;
    }

    // Get location data from game systems
    getLocationData(locationName) {
        // Try to get data from the game's world data
        if (typeof window !== 'undefined' && window.gameData) {
            // Check cities first
            const city = Object.values(window.gameData.world.cities || {}).find(c => 
                c.name.toLowerCase() === locationName.toLowerCase()
            );
            if (city) return city;

            // Check regions
            const region = Object.values(window.gameData.world.regions || {}).find(r => 
                r.name.toLowerCase() === locationName.toLowerCase()
            );
            if (region) return region;
        }

        // Fallback location analysis
        return this.analyzeLocationFromName(locationName);
    }

    // Analyze location from name when no data is available
    analyzeLocationFromName(locationName) {
        const name = locationName.toLowerCase();
        
        if (name.includes('town') || name.includes('city') || name.includes('village')) {
            return { type: 'settlement', dangerLevel: 'low', atmosphere: 'peaceful' };
        } else if (name.includes('dungeon') || name.includes('crypt') || name.includes('tomb')) {
            return { type: 'dungeon', dangerLevel: 'high', atmosphere: 'ominous' };
        } else if (name.includes('forest') || name.includes('woods') || name.includes('grove')) {
            return { type: 'forest', dangerLevel: 'medium', atmosphere: 'mystical' };
        } else if (name.includes('mountain') || name.includes('peak') || name.includes('cliff')) {
            return { type: 'mountain', dangerLevel: 'medium', atmosphere: 'majestic' };
        } else if (name.includes('desert') || name.includes('dune') || name.includes('oasis')) {
            return { type: 'desert', dangerLevel: 'high', atmosphere: 'harsh' };
        } else if (name.includes('swamp') || name.includes('marsh') || name.includes('bog')) {
            return { type: 'swamp', dangerLevel: 'high', atmosphere: 'eerie' };
        } else if (name.includes('castle') || name.includes('palace') || name.includes('fortress')) {
            return { type: 'fortress', dangerLevel: 'medium', atmosphere: 'grand' };
        }
        
        return { type: 'unknown', dangerLevel: 'medium', atmosphere: 'neutral' };
    }

    // Determine current mood based on game state
    determineMood(player, gameState = {}) {
        if (gameState.inCombat) return 'intense';
        if (player.hp < player.maxHp * 0.3) return 'desperate';
        if (player.hp === player.maxHp && player.level > 5) return 'confident';
        if (gameState.questActive) return 'adventurous';
        
        const locationMood = this.getLocationAtmosphere(player.currentLocation);
        return locationMood || 'neutral';
    }

    // Get atmosphere based on location
    getLocationAtmosphere(locationName) {
        const name = locationName.toLowerCase();
        
        if (name.includes('tavern') || name.includes('inn')) return 'cozy';
        if (name.includes('market') || name.includes('square')) return 'bustling';
        if (name.includes('temple') || name.includes('shrine')) return 'serene';
        if (name.includes('dungeon') || name.includes('crypt')) return 'ominous';
        if (name.includes('forest') || name.includes('woods')) return 'mystical';
        if (name.includes('mountain') || name.includes('peak')) return 'majestic';
        if (name.includes('desert') || name.includes('dune')) return 'harsh';
        if (name.includes('royal') || name.includes('palace')) return 'grand';
        
        return 'neutral';
    }

    // Calculate music intensity
    calculateIntensity(player, gameState = {}) {
        let intensity = 0.5; // Base intensity
        
        if (gameState.inCombat) intensity += 0.4;
        if (player.hp < player.maxHp * 0.5) intensity += 0.2;
        if (gameState.questActive) intensity += 0.1;
        if (player.level > 10) intensity += 0.1;
        
        return Math.min(1.0, intensity);
    }

    // Get genre based on location
    getGenreForLocation(locationName) {
        const name = locationName.toLowerCase();
        
        if (name.includes('tavern') || name.includes('inn')) return 'folk';
        if (name.includes('royal') || name.includes('palace')) return 'orchestral';
        if (name.includes('dungeon') || name.includes('crypt')) return 'dark_ambient';
        if (name.includes('forest') || name.includes('woods')) return 'celtic';
        if (name.includes('desert')) return 'middle_eastern';
        if (name.includes('mountain')) return 'epic';
        
        return 'fantasy';
    }

    // Get instruments based on character class
    getInstrumentsForClass(characterClass) {
        const classInstruments = {
            'warrior': ['drums', 'brass', 'strings'],
            'mage': ['ethereal_pads', 'chimes', 'flute'],
            'rogue': ['subtle_strings', 'woodwinds', 'light_percussion'],
            'ranger': ['nature_sounds', 'acoustic_guitar', 'flute'],
            'cleric': ['organ', 'choir', 'bells'],
            'paladin': ['orchestral', 'brass', 'choir'],
            'bard': ['lute', 'harp', 'various'],
            'monk': ['eastern_instruments', 'meditation_sounds', 'minimal']
        };
        
        return classInstruments[characterClass?.toLowerCase()] || ['fantasy_ensemble'];
    }

    // Get tempo based on current situation
    getTempoForSituation(gameState = {}) {
        if (gameState.inCombat) return 'fast';
        if (gameState.resting) return 'slow';
        if (gameState.exploring) return 'moderate';
        
        return 'moderate';
    }

    // Get current time of day (simplified)
    getTimeOfDay() {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 12) return 'morning';
        if (hour >= 12 && hour < 17) return 'afternoon';
        if (hour >= 17 && hour < 21) return 'evening';
        return 'night';
    }

    // Create cache key for music caching
    createCacheKey(location, characterClass, gameState) {
        const mood = this.determineMood({ currentLocation: location, class: characterClass }, gameState);
        return `${location}_${characterClass}_${mood}`;
    }

    // Play generated music (if audio data is provided)
    async playMusic(musicData) {
        if (!musicData || !musicData.audioUrl) {
            console.warn('BGMManager: No audio data to play');
            return;
        }

        try {
            // Stop current music
            this.stopMusic();
            
            if (this.audioContext && this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }

            // For now, log the music data - actual audio playback would require
            // the BGM service to return actual audio data or URLs
            console.log('BGMManager: Music ready to play:', musicData);
            
            // Display music info to player
            if (typeof window.displayMessage === 'function') {
                const musicInfo = musicData.description || `Background music generated for ${musicData.location || 'current area'}`;
                window.displayMessage(`🎵 ${musicInfo}`, 'info');
            }
            
            this.isPlaying = true;
            this.currentTrack = musicData;
            
        } catch (error) {
            console.error('BGMManager: Error playing music:', error);
        }
    }

    // Stop current music
    stopMusic() {
        if (this.currentSource) {
            this.currentSource.stop();
            this.currentSource = null;
        }
        this.isPlaying = false;
        this.currentTrack = null;
    }

    // Set volume (0.0 to 1.0)
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        if (this.gainNode) {
            this.gainNode.gain.value = this.volume;
        }
    }

    // Check if location changed and generate new music if needed
    async updateMusicForLocation(player, gameState = {}) {
        if (!player || !player.currentLocation) return;

        // Only generate new music if location changed
        if (this.lastLocation !== player.currentLocation) {
            console.log(`BGMManager: Location changed from ${this.lastLocation} to ${player.currentLocation}`);
            
            const musicData = await this.generateLocationMusic(player, gameState);
            if (musicData) {
                await this.playMusic(musicData);
            }
            
            this.lastLocation = player.currentLocation;
        }
    }

    // Get current music status
    getStatus() {
        return {
            isPlaying: this.isPlaying,
            currentTrack: this.currentTrack,
            volume: this.volume,
            location: this.lastLocation,
            cacheSize: this.musicCache.size
        };
    }

    // Clear music cache
    clearCache() {
        this.musicCache.clear();
        console.log('BGMManager: Music cache cleared');
    }
}

// Export for global access
window.BGMManager = BGMManager;
