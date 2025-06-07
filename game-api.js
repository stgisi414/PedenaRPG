
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
    async initialize() {
        if (this.initialized) return;
        
        // Set up global access
        window.PedenaAPI = this;
        window.gameData = gameData;
        
        this.initialized = true;
        return {
            success: true,
            message: "Pedena Game API initialized successfully",
            version: this.version
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
        
        return {
            success: true,
            player: this.getPlayerData(),
            message: `Character ${name} created successfully`
        };
    }

    // Get current player data
    getPlayerData() {
        if (!this.gameState.player) return null;
        
        return {
            ...this.gameState.player,
            progression: CharacterManager.getCharacterProgression(this.gameState.player),
            alignmentInfo: AlignmentSystem.getAlignmentDisplayInfo(this.gameState.player),
            modifiers: AlignmentSystem.getAlignmentModifier(this.gameState.player)
        };
    }

    // Update player stats or properties
    updatePlayer(updates) {
        if (!this.gameState.player) {
            return { success: false, message: "No player character exists" };
        }

        Object.assign(this.gameState.player, updates);
        
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
        if (!this.gameState.player) {
            return { success: false, message: "No player character exists" };
        }

        // Add to conversation history
        this.gameState.conversationHistory.messages.push({
            role: 'user',
            content: command,
            timestamp: Date.now()
        });

        // Process with GameActions
        const result = await GameActions.processPlayerAction(command, this.gameState.player);
        
        // Add AI response to conversation history
        if (result && result.response) {
            this.gameState.conversationHistory.messages.push({
                role: 'assistant',
                content: result.response,
                timestamp: Date.now()
            });
        }

        return result;
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
