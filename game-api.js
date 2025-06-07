
// Game API - Complete programmatic interface for Pedena RPG
// This provides a unified API to access all game data and functionality

import { gameData, GameDataManager } from './assets/game-data-loader.js';
import { CharacterManager } from './game-logic/character-manager.js';
import { GameActions } from './game-logic/game-actions.js';
import { LocationManager } from './game-logic/location-manager.js';
import { AlignmentSystem } from './game-logic/alignment-system.js';
import { CombatSystem } from './game-logic/combat-system.js';
import { ItemManager, itemCategories, itemRarity } from './assets/world-items.js';
import { QuestTaskGenerator, questCategories, questThemes } from './assets/quest-tasks.js';
import { characterNames, characterBackgrounds, personalityTraits, motivations } from './assets/character-data.js';

// Global Game API Class
export class PedenaGameAPI {
    constructor() {
        this.version = "1.0.0";
        this.initialized = false;
        this.gameState = {
            player: null,
            gameWorld: {
                npcs: new Map(),
                locationMemory: new Map(),
                lastNPCInteraction: null
            },
            conversationHistory: {
                messages: [],
                maxMessages: 75
            }
        };
    }

    // Initialize the API
    async initialize(aiFunction = null) {
        if (this.initialized) return;
        
        // Set up global access
        window.PedenaAPI = this;
        window.gameData = gameData;
        
        // Set up AI function for command processing
        if (aiFunction) {
            this.aiFunction = aiFunction;
        } else {
            // Try to use global callGeminiAPI if available
            this.aiFunction = window.callGeminiAPI || this.createFallbackAI();
        }
        
        this.initialized = true;
        return {
            success: true,
            message: "Pedena Game API initialized successfully",
            version: this.version
        };
    }

    // Create fallback AI function if none provided
    createFallbackAI() {
        return async (prompt, temperature = 0.7, maxTokens = 800, includeContext = false) => {
            // Simple fallback that generates basic responses
            console.log('Using fallback AI - prompt:', prompt.substring(0, 100) + '...');
            
            // Basic response generation based on command analysis
            if (prompt.includes('MOVEMENT')) {
                return "You travel to your destination. The journey is uneventful but you arrive safely.";
            } else if (prompt.includes('COMBAT')) {
                return "You engage in battle! After a fierce fight, you emerge victorious.";
            } else if (prompt.includes('EXPLORATION')) {
                return "You explore the area and discover something interesting hidden nearby.";
            } else if (prompt.includes('INTERACTION')) {
                return "You have a pleasant conversation and learn something useful.";
            } else {
                return "You take action and something happens in response to your efforts.";
            }
        };
    }

    // Set AI function after initialization
    setAIFunction(aiFunction) {
        this.aiFunction = aiFunction;
        return {
            success: true,
            message: "AI function set successfully"
        };
    }

    // === GAME DATA ACCESS ===
    
    // Get all world data
    getWorldData() {
        return {
            countries: gameData.world.countries,
            cities: gameData.world.cities,
            regions: gameData.world.regions,
            factions: gameData.organizations.factions,
            guilds: gameData.organizations.guilds,
            religions: gameData.beliefs.religions,
            businesses: gameData.economy.businesses,
            tradeGoods: gameData.economy.tradeGoods
        };
    }

    // Get character creation data
    getCharacterData() {
        return {
            names: characterNames,
            backgrounds: characterBackgrounds,
            personalityTraits: personalityTraits,
            motivations: motivations,
            classes: ['warrior', 'mage', 'rogue', 'ranger']
        };
    }

    // Get item and equipment data
    getItemData() {
        return {
            categories: itemCategories,
            rarity: itemRarity,
            statusEffects: ItemManager.getStatusEffects ? ItemManager.getStatusEffects() : {}
        };
    }

    // Get quest system data
    getQuestData() {
        return {
            categories: questCategories,
            themes: questThemes,
            generator: QuestTaskGenerator
        };
    }

    // === CHARACTER MANAGEMENT ===
    
    // Create a new character
    createCharacter(characterData) {
        const { name, gender, charClass, background } = characterData;
        
        // Use the existing window.player object if it exists, otherwise create new
        if (typeof window !== 'undefined' && window.player) {
            // Update existing player
            window.player.name = name;
            window.player.gender = gender;
            window.player.class = charClass;
            window.player.background = background;
            window.player.currentLocation = 'Pedena Town Square';
            
            // Initialize character progression
            CharacterManager.initializeCharacter(window.player, charClass);
            
            // Initialize alignment system
            AlignmentSystem.initializeAlignment(window.player);
            
            this.gameState.player = window.player;
        } else {
            // Create new player object
            const player = {
                name: name,
                gender: gender,
                class: charClass,
                background: background,
                stats: {
                    strength: 10,
                    dexterity: 10,
                    intelligence: 10,
                    constitution: 10,
                    wisdom: 10,
                    charisma: 10
                },
                hp: 100,
                maxHp: 100,
                level: 1,
                exp: 0,
                expToNextLevel: 100,
                gold: 50,
                inventory: [],
                equipment: {
                    head: null,
                    chest: null,
                    hands: null,
                    legs: null,
                    feet: null,
                    mainHand: null,
                    offHand: null,
                    amulet: null,
                    ring1: null,
                    ring2: null
                },
                skills: [],
                abilities: [],
                quests: [],
                relationships: {},
                currentLocation: 'Pedena Town Square',
                currentEnemy: null,
                alignment: null
            };

            // Initialize character progression
            CharacterManager.initializeCharacter(player, charClass);
            
            // Initialize alignment system
            AlignmentSystem.initializeAlignment(player);
            
            this.gameState.player = player;
            
            // Set as global player if window is available
            if (typeof window !== 'undefined') {
                window.player = player;
            }
        }
        
        return {
            success: true,
            player: this.getPlayerData(),
            message: `Character ${name} created successfully`
        };
    }

    // Get current player data
    getPlayerData() {
        // Always use window.player if available
        const player = (typeof window !== 'undefined' && window.player) ? window.player : this.gameState.player;
        if (!player) return null;
        
        return {
            ...player,
            progression: CharacterManager.getCharacterProgression(player),
            alignmentInfo: AlignmentSystem.getAlignmentDisplayInfo(player),
            modifiers: AlignmentSystem.getAlignmentModifier(player)
        };
    }

    // Update player stats or properties
    updatePlayer(updates) {
        const player = (typeof window !== 'undefined' && window.player) ? window.player : this.gameState.player;
        if (!player) {
            return { success: false, message: "No player character exists" };
        }

        Object.assign(player, updates);
        
        // Keep both references in sync
        if (typeof window !== 'undefined' && window.player) {
            this.gameState.player = window.player;
        }
        
        return {
            success: true,
            player: this.getPlayerData(),
            message: "Player updated successfully"
        };
    }

    // === LOCATION AND MOVEMENT ===
    
    // Get current location info
    getCurrentLocation() {
        if (!this.gameState.player) return null;
        
        const location = GameDataManager.findLocation(this.gameState.player.currentLocation);
        const npcs = this.gameState.gameWorld.npcs.get(this.gameState.player.currentLocation) || [];
        
        return {
            name: this.gameState.player.currentLocation,
            details: location,
            npcs: npcs,
            businesses: GameDataManager.getBusinessesInLocation(this.gameState.player.currentLocation)
        };
    }

    // Move to a new location
    async moveToLocation(destination) {
        if (!this.gameState.player) {
            return { success: false, message: "No player character exists" };
        }

        const result = await LocationManager.moveToLocation(this.gameState.player, destination);
        
        if (result.success) {
            this.gameState.player.currentLocation = result.newLocation;
        }
        
        return result;
    }

    // === QUEST MANAGEMENT ===
    
    // Generate a new quest
    async generateQuest() {
        if (!this.gameState.player) {
            return { success: false, message: "No player character exists" };
        }

        const quest = QuestTaskGenerator.generateQuest(this.gameState.player, {
            currentLocation: this.gameState.player.currentLocation
        });

        this.gameState.player.quests.push(quest);
        
        return {
            success: true,
            quest: quest,
            message: `New quest generated: ${quest.title}`
        };
    }

    // Get all quests
    getQuests() {
        if (!this.gameState.player) return [];
        return this.gameState.player.quests || [];
    }

    // Complete a quest
    completeQuest(questId) {
        if (!this.gameState.player) {
            return { success: false, message: "No player character exists" };
        }

        const quest = this.gameState.player.quests.find(q => q.id === questId);
        if (!quest) {
            return { success: false, message: "Quest not found" };
        }

        quest.completed = true;
        quest.dateCompleted = new Date().toLocaleDateString();

        // Award rewards
        if (quest.rewards) {
            this.gameState.player.gold += quest.rewards.gold || 0;
            this.gameState.player.exp += quest.rewards.experience || 0;
            
            if (quest.rewards.items) {
                quest.rewards.items.forEach(itemName => {
                    const item = {
                        id: Date.now() + Math.random(),
                        name: itemName,
                        type: 'quest_reward',
                        description: `Reward from quest: ${quest.title}`,
                        value: 50
                    };
                    this.gameState.player.inventory.push(item);
                });
            }
        }

        return {
            success: true,
            quest: quest,
            rewards: quest.rewards,
            message: `Quest completed: ${quest.title}`
        };
    }

    // === INVENTORY AND ITEMS ===
    
    // Get player inventory
    getInventory() {
        if (!this.gameState.player) return [];
        return this.gameState.player.inventory || [];
    }

    // Add item to inventory
    addItem(itemData) {
        if (!this.gameState.player) {
            return { success: false, message: "No player character exists" };
        }

        const item = {
            id: Date.now() + Math.random(),
            ...itemData
        };

        this.gameState.player.inventory.push(item);
        
        return {
            success: true,
            item: item,
            message: `Added ${item.name} to inventory`
        };
    }

    // Remove item from inventory
    removeItem(itemId) {
        if (!this.gameState.player) {
            return { success: false, message: "No player character exists" };
        }

        const itemIndex = this.gameState.player.inventory.findIndex(item => item.id === itemId);
        if (itemIndex === -1) {
            return { success: false, message: "Item not found" };
        }

        const removedItem = this.gameState.player.inventory.splice(itemIndex, 1)[0];
        
        return {
            success: true,
            item: removedItem,
            message: `Removed ${removedItem.name} from inventory`
        };
    }

    // === COMBAT SYSTEM ===
    
    // Initiate combat
    async initiateCombat(enemyData) {
        if (!this.gameState.player) {
            return { success: false, message: "No player character exists" };
        }

        const result = await CombatSystem.initiateCombat(
            this.gameState.player, 
            enemyData, 
            this.gameState.player.currentLocation
        );
        
        return result;
    }

    // Get combat status
    getCombatStatus() {
        if (!this.gameState.player) return null;
        return {
            inCombat: this.gameState.player.currentEnemy !== null,
            enemy: this.gameState.player.currentEnemy,
            playerHp: this.gameState.player.hp,
            playerMaxHp: this.gameState.player.maxHp
        };
    }

    // === AI INTERACTION ===
    
    // Process AI command
    async processCommand(command, includeContext = true) {
        const player = (typeof window !== 'undefined' && window.player) ? window.player : this.gameState.player;
        if (!player) {
            return { success: false, message: "No player character exists" };
        }

        // Keep references in sync
        this.gameState.player = player;

        // Add to conversation history
        this.gameState.conversationHistory.messages.push({
            role: 'user',
            content: command,
            timestamp: Date.now()
        });

        try {
            // Create game state for processing
            const gameState = {
                name: player.name,
                currentLocation: player.currentLocation || 'Unknown Location',
                level: player.level || 1,
                class: player.class || 'adventurer',
                hp: player.hp || 100,
                maxHp: player.maxHp || 100,
                gold: player.gold || 0,
                quests: player.quests || [],
                equipment: player.equipment || {},
                inventory: player.inventory || [],
                npcsInLocation: []
            };

            // Analyze the command
            const analysis = GameActions.analyzeCommand(command, gameState);
            
            // Create structured prompt for AI using GameActions method
            const prompt = GameActions.createStructuredPrompt(analysis, gameState);

            // Use the AI function to process the command
            let response;
            if (this.aiFunction) {
                response = await this.aiFunction(prompt, 0.7, 800, false);
            } else {
                response = `You ${command}. [AI processing not available - call setAIFunction() first]`;
            }

            // Check for alignment assessment
            const alignmentChange = AlignmentSystem.addMessage(command, response);
            if (alignmentChange !== null) {
                const alignmentResult = AlignmentSystem.updateAlignment(player, alignmentChange);
                if (alignmentResult.changed) {
                    response += `\n\n[Your moral alignment shifts to ${alignmentResult.newType.replace('_', ' ')}]`;
                }
            }

            // Add AI response to conversation history
            this.gameState.conversationHistory.messages.push({
                role: 'assistant',
                content: response,
                timestamp: Date.now()
            });

            // Handle special commands that might affect game state
            await this.handleCommandEffects(command, analysis, response);

            return {
                success: true,
                response: response,
                actionType: analysis.actionType,
                confidence: analysis.confidence,
                extractedData: analysis.extractedData,
                player: this.getPlayerData()
            };

        } catch (error) {
            console.error('Error processing command:', error);
            return {
                success: false,
                response: `You attempt to ${command}, but something goes wrong.`,
                error: error.message
            };
        }
    }

    // Handle command effects on game state
    async handleCommandEffects(command, analysis, response) {
        const player = (typeof window !== 'undefined' && window.player) ? window.player : this.gameState.player;
        
        // Handle movement commands
        if (analysis.actionType === 'movement' && analysis.extractedData.primary) {
            const destination = analysis.extractedData.primary;
            // Simple location update - could be enhanced with proper location validation
            player.currentLocation = destination.replace(/^(the|a|an)\s+/i, '').trim();
        }
        
        // Handle rest commands
        if (analysis.actionType === 'rest') {
            const healAmount = Math.floor(player.maxHp * 0.25) + 10;
            player.hp = Math.min(player.maxHp, player.hp + healAmount);
        }
        
        // Handle simple item pickup from responses
        if (response.includes('found') || response.includes('discovered')) {
            const goldMatch = response.match(/(\d+)\s+gold/i);
            if (goldMatch) {
                player.gold += parseInt(goldMatch[1]);
            }
        }
    }

    // Get conversation history
    getConversationHistory() {
        return this.gameState.conversationHistory.messages;
    }

    // === GAME STATE MANAGEMENT ===
    
    // Save game state
    saveGame() {
        const saveData = {
            player: this.gameState.player,
            gameWorld: {
                npcs: Array.from(this.gameState.gameWorld.npcs.entries()),
                locationMemory: Array.from(this.gameState.gameWorld.locationMemory.entries()),
                lastNPCInteraction: this.gameState.gameWorld.lastNPCInteraction
            },
            conversationHistory: this.gameState.conversationHistory,
            timestamp: Date.now()
        };

        localStorage.setItem('pedenaGameAPI_save', JSON.stringify(saveData));
        
        return {
            success: true,
            message: "Game saved successfully",
            timestamp: saveData.timestamp
        };
    }

    // Load game state
    loadGame() {
        try {
            const savedData = localStorage.getItem('pedenaGameAPI_save');
            if (!savedData) {
                return { success: false, message: "No saved game found" };
            }

            const saveData = JSON.parse(savedData);
            
            this.gameState.player = saveData.player;
            this.gameState.gameWorld.npcs = new Map(saveData.gameWorld.npcs);
            this.gameState.gameWorld.locationMemory = new Map(saveData.gameWorld.locationMemory);
            this.gameState.gameWorld.lastNPCInteraction = saveData.gameWorld.lastNPCInteraction;
            this.gameState.conversationHistory = saveData.conversationHistory;

            return {
                success: true,
                message: "Game loaded successfully",
                player: this.getPlayerData()
            };
        } catch (error) {
            return {
                success: false,
                message: `Failed to load game: ${error.message}`
            };
        }
    }

    // Get complete game state
    getGameState() {
        return {
            player: this.getPlayerData(),
            location: this.getCurrentLocation(),
            quests: this.getQuests(),
            inventory: this.getInventory(),
            combat: this.getCombatStatus(),
            conversationHistory: this.getConversationHistory(),
            worldData: this.getWorldData(),
            characterData: this.getCharacterData(),
            itemData: this.getItemData(),
            questData: this.getQuestData()
        };
    }

    // === UTILITY METHODS ===
    
    // Get API endpoints list
    getEndpoints() {
        return {
            character: {
                create: 'createCharacter(characterData)',
                get: 'getPlayerData()',
                update: 'updatePlayer(updates)'
            },
            location: {
                current: 'getCurrentLocation()',
                move: 'moveToLocation(destination)'
            },
            quests: {
                generate: 'generateQuest()',
                list: 'getQuests()',
                complete: 'completeQuest(questId)'
            },
            inventory: {
                get: 'getInventory()',
                add: 'addItem(itemData)',
                remove: 'removeItem(itemId)'
            },
            combat: {
                initiate: 'initiateCombat(enemyData)',
                status: 'getCombatStatus()'
            },
            ai: {
                command: 'processCommand(command)',
                history: 'getConversationHistory()'
            },
            game: {
                save: 'saveGame()',
                load: 'loadGame()',
                state: 'getGameState()'
            },
            data: {
                world: 'getWorldData()',
                character: 'getCharacterData()',
                items: 'getItemData()',
                quests: 'getQuestData()'
            }
        };
    }
}

// Auto-initialize when imported
const gameAPI = new PedenaGameAPI();

// Export for use in other modules
export default gameAPI;

// Also expose globally for easy access
if (typeof window !== 'undefined') {
    window.PedenaGameAPI = PedenaGameAPI;
    window.gameAPI = gameAPI;
}
