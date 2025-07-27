
// Area Portrait Management System
export class AreaPortraitManager {
    static storageKey = 'area_portraits';
    static defaultPrompts = {
        // Cities
        pedena_royal_city: "A majestic royal city with crystal spires and floating gardens, gleaming white marble buildings with golden domes, magical energy crackling through the air, fantasy capital city",
        crystaldale: "A mountain mining town built around massive crystal formations, glowing magical crystals emerging from rocky cliffs, dwarven architecture, mystical mountain settlement",
        riverport: "A bustling port city where three rivers converge, wooden docks with sailing ships, merchant warehouses, river trade hub with medieval fantasy architecture",
        ironspire: "A massive fortress city dominated by an iron tower piercing the clouds, military architecture, steel and stone fortifications, imposing imperial capital",
        grimhold: "A mountain fortress city carved into black stone cliffs, defensive walls and battlements, harsh mountain peaks, military stronghold",
        moonhaven: "An elven city built within and around massive ancient trees, treehouse architecture, glowing moonlight through forest canopy, mystical forest capital",
        sandport: "A sprawling desert bazaar city around a life-giving oasis, middle eastern architecture, palm trees, bustling markets with colorful tents",
        
        // Regions
        crystal_peaks: "Towering mountain peaks where raw magic crystallizes into solid form, floating crystal formations, magical energy aurora, mystical mountain range",
        whispering_woods: "Ancient enchanted forest where trees hold memories of ages past, ethereal mist, glowing runes on bark, mystical woodland",
        iron_wastes: "Desolate battlefields scarred by warfare, rusted weapons and armor scattered across barren ground, dark stormy skies, post-apocalyptic wasteland",
        sunward_dunes: "Endless golden desert with ancient ruins partially buried in sand, mysterious pyramids, blazing desert sun, Arabian fantasy landscape",
        sea_of_clouds: "Vast cloud layer beneath floating islands, ethereal cloudscape, sky whales swimming through mist, aerial fantasy realm",
        magma_sea: "Underground ocean of molten lava, flowing magma rivers, volcanic rock formations, hellish subterranean landscape",
        
        // Default fallback
        default: "A mysterious and atmospheric fantasy landscape with dramatic lighting and magical ambiance"
    };

    static async generateAreaPortrait(locationKey, locationData = null) {
        try {
            // Check if portrait already exists in cache
            const cachedPortrait = this.getCachedPortrait(locationKey);
            if (cachedPortrait) {
                return {
                    success: true,
                    imageUrl: cachedPortrait,
                    fromCache: true
                };
            }

            // Generate prompt based on location
            const prompt = this.generateLocationPrompt(locationKey, locationData);
            
            // Check if player portrait exists for reference
            const player = JSON.parse(localStorage.getItem('gameState'));
            if (!player || !player.portraitUrl) {
                return {
                    success: false,
                    error: "Player portrait required for area generation"
                };
            }

            // Generate image using existing API
            const response = await fetch('https://ainovel.site/api/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    prompt: prompt,
                    referenceImageUrl: player.portraitUrl,
                    imageSize: "landscape_16_9",
                    numInferenceSteps: 50,
                    guidanceScale: 7.5,
                    seed: this.generateSeedFromLocation(locationKey),
                    negative_prompt: "text, watermark, signature, people, characters, person, human, face, portrait, blurry, low quality",
                    control_image_strength: 0.3, // Lower strength for scenery
                }),
            });

            if (!response.ok) {
                throw new Error(`Image generation failed: ${response.status}`);
            }

            const result = await response.json();
            
            if (result.imageUrl) {
                // Cache the generated portrait
                this.cachePortrait(locationKey, result.imageUrl);
                
                return {
                    success: true,
                    imageUrl: result.imageUrl,
                    fromCache: false
                };
            } else {
                throw new Error("No image URL returned from API");
            }

        } catch (error) {
            console.error('Area portrait generation error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    static generateLocationPrompt(locationKey, locationData) {
        // Use predefined prompt if available
        if (this.defaultPrompts[locationKey]) {
            return `${this.defaultPrompts[locationKey]}, high quality fantasy landscape art, detailed environment, atmospheric lighting, no people, scenic vista`;
        }

        // Generate prompt from location data
        if (locationData) {
            let prompt = "";
            
            if (locationData.description) {
                prompt = locationData.description;
            } else if (locationData.name) {
                prompt = `A fantasy location called ${locationData.name}`;
            }

            // Add type-specific details
            if (locationData.type) {
                switch (locationData.type) {
                    case 'city':
                    case 'Capital':
                    case 'Trading Hub':
                        prompt += ", medieval fantasy city with buildings and architecture";
                        break;
                    case 'region':
                    case 'Mountain Range':
                    case 'Enchanted Forest':
                        prompt += ", natural fantasy landscape with dramatic terrain";
                        break;
                    case 'Desert':
                        prompt += ", vast desert landscape with sand dunes";
                        break;
                    case 'Forest':
                        prompt += ", dense magical forest with ancient trees";
                        break;
                    default:
                        prompt += ", fantasy landscape";
                }
            }

            // Add atmospheric elements
            prompt += ", high quality fantasy landscape art, detailed environment, atmospheric lighting, no people, scenic vista";
            
            return prompt;
        }

        // Fallback to default
        return `${this.defaultPrompts.default}, high quality fantasy landscape art, detailed environment, atmospheric lighting, no people, scenic vista`;
    }

    static generateSeedFromLocation(locationKey) {
        // Generate consistent seed from location name
        return Math.abs(locationKey.split('').reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0));
    }

    static getCachedPortrait(locationKey) {
        try {
            const cached = localStorage.getItem(`${this.storageKey}_${locationKey}`);
            return cached || null;
        } catch (error) {
            console.error('Error reading cached portrait:', error);
            return null;
        }
    }

    static cachePortrait(locationKey, imageUrl) {
        try {
            localStorage.setItem(`${this.storageKey}_${locationKey}`, imageUrl);
            
            // Also update the master cache list
            const cacheList = this.getCacheList();
            if (!cacheList.includes(locationKey)) {
                cacheList.push(locationKey);
                localStorage.setItem(`${this.storageKey}_list`, JSON.stringify(cacheList));
            }
            
            return true;
        } catch (error) {
            console.error('Error caching portrait:', error);
            return false;
        }
    }

    static getCacheList() {
        try {
            const list = localStorage.getItem(`${this.storageKey}_list`);
            return list ? JSON.parse(list) : [];
        } catch (error) {
            console.error('Error reading cache list:', error);
            return [];
        }
    }

    static clearCache() {
        try {
            const cacheList = this.getCacheList();
            cacheList.forEach(locationKey => {
                localStorage.removeItem(`${this.storageKey}_${locationKey}`);
            });
            localStorage.removeItem(`${this.storageKey}_list`);
            return true;
        } catch (error) {
            console.error('Error clearing cache:', error);
            return false;
        }
    }

    static getCacheSize() {
        const cacheList = this.getCacheList();
        return cacheList.length;
    }

    static async preloadAreaPortraits(locationKeys = []) {
        const results = [];
        
        for (const locationKey of locationKeys) {
            try {
                const result = await this.generateAreaPortrait(locationKey);
                results.push({
                    locationKey,
                    success: result.success,
                    fromCache: result.fromCache,
                    error: result.error
                });
                
                // Small delay to avoid overwhelming the API
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (error) {
                results.push({
                    locationKey,
                    success: false,
                    error: error.message
                });
            }
        }
        
        return results;
    }

    // Integration with map display
    static async displayAreaPortrait(locationKey, locationData = null) {
        const result = await this.generateAreaPortrait(locationKey, locationData);
        
        if (result.success) {
            // Use existing scenery display system
            if (typeof displaySceneryImage === 'function') {
                displaySceneryImage(result.imageUrl);
            } else {
                // Fallback display method
                this.showAreaPortraitModal(result.imageUrl, locationKey);
            }
        }
        
        return result;
    }

    static showAreaPortraitModal(imageUrl, locationName) {
        // Create modal if it doesn't exist
        let modal = document.getElementById('area-portrait-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'area-portrait-modal';
            modal.className = 'hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
            modal.innerHTML = `
                <div class="bg-stone-800 p-4 rounded-lg shadow-xl max-w-3xl w-full relative parchment-border">
                    <img id="area-portrait-image" src="#" alt="Area Portrait"
                        class="w-full h-auto rounded mb-4 max-h-[70vh] object-contain">
                    <h3 id="area-portrait-title" class="text-center text-xl font-bold text-amber-700 mb-2"></h3>
                    <button id="close-area-portrait-btn"
                        class="btn-parchment absolute top-2 right-2 bg-red-700 hover:bg-red-800 text-white py-1 px-2 text-sm">Close</button>
                </div>
            `;
            document.body.appendChild(modal);

            // Add close functionality
            const closeBtn = modal.querySelector('#close-area-portrait-btn');
            closeBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        }

        // Update content and show
        const img = modal.querySelector('#area-portrait-image');
        const title = modal.querySelector('#area-portrait-title');
        
        img.src = imageUrl;
        title.textContent = locationName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        modal.classList.remove('hidden');
    }
}

// Make available globally
window.AreaPortraitManager = AreaPortraitManager;
