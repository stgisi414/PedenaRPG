
// Main Script - Minimal Entry Point
// This file imports and initializes all the modular components

import { gameState } from './modules/game-state.js';
import { uiManager } from './modules/ui-manager.js';
import { apiClient } from './modules/api-client.js';
import { inventoryManager } from './modules/inventory-manager.js';

// Import game logic modules
import { CharacterManager } from './game-logic/character-manager.js';
import { GameActions } from './game-logic/game-actions.js';
import { LocationManager } from './game-logic/location-manager.js';
import { CombatSystem } from './game-logic/combat-system.js';
import { AlignmentSystem } from './game-logic/alignment-system.js';
import { PartyManager } from './game-logic/party-manager.js';
import { MultiCombatSystem } from './game-logic/multi-combat-system.js';
import { RelationshipMiddleware } from './game-logic/relationship-middleware.js';
import { HelpSystem } from './game-logic/help-system.js';

// Import data modules
import { QuestCharacterGenerator } from './assets/quest-character-names.js';
import { QuestTaskGenerator, questCategories, questThemes } from './assets/quest-tasks.js';
import { ItemGenerator, ItemManager, itemCategories, itemRarity, statusEffects } from './assets/world-items.js';

// Global game instance
let game;
let partyManager;
let multiCombatSystem;

// Game settings
let gameSettings = {
    apiKey: '',
    model: 'gemini-1.5-flash-latest'
};

// Initialize the game
async function initializeGame() {
    try {
        // Load settings
        loadSettings();
        
        // Make modules globally available for backward compatibility
        window.gameState = gameState;
        window.uiManager = uiManager;
        window.apiClient = apiClient;
        window.inventoryManager = inventoryManager;
        
        // Initialize party and combat systems
        partyManager = new PartyManager();
        multiCombatSystem = new MultiCombatSystem(partyManager);
        window.partyManager = partyManager;
        window.multiCombatSystem = multiCombatSystem;
        
        // Make game logic available globally
        window.CharacterManager = CharacterManager;
        window.CombatSystem = CombatSystem;
        window.AlignmentSystem = AlignmentSystem;
        window.RelationshipMiddleware = RelationshipMiddleware;
        window.ItemManager = ItemManager;
        window.ItemGenerator = ItemGenerator;
        window.QuestCharacterGenerator = QuestCharacterGenerator;
        window.QuestTaskGenerator = QuestTaskGenerator;
        
        // Auto-fix stats on load
        gameState.autoFixStatsInStorage();
        
        // Set up UI
        setupEventListeners();
        
        // Initialize UI manager
        uiManager.updateRichTextToggle();
        
        // Add missing global UI functions for backward compatibility
        window.updateIllustrationButtonVisibility = () => {
            // Implementation for illustration button visibility
            console.log('Illustration button visibility updated');
        };
        
        window.updateQuestButton = () => {
            // Implementation for quest button updates  
            console.log('Quest button updated');
        };
        
        console.log('✓ Game initialized successfully');
        
    } catch (error) {
        console.error('Failed to initialize game:', error);
        uiManager.displayMessage('Failed to initialize game. Please refresh the page.', 'error');
    }
}

// Settings management
function saveSettings() {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('pedenaGameSettings', JSON.stringify(gameSettings));
        console.log("Game settings saved:", gameSettings);
    }
}

function loadSettings() {
    if (typeof localStorage !== 'undefined') {
        const savedSettings = localStorage.getItem('pedenaGameSettings');
        if (savedSettings) {
            gameSettings = JSON.parse(savedSettings);
        }
    }

    const modelSelect = document.getElementById('gemini-model-select');
    const apiKeyInput = document.getElementById('gemini-api-key-input');

    if (modelSelect) modelSelect.value = gameSettings.model;
    if (apiKeyInput) apiKeyInput.value = gameSettings.apiKey;

    console.log("Game settings loaded:", gameSettings);
}

// Event listeners setup
function setupEventListeners() {
    // Character creation
    const newGameBtn = document.getElementById('new-game-btn');
    const loadGameBtn = document.getElementById('load-game-btn');
    const createCharacterBtn = document.getElementById('create-character-btn');
    const executeCommandBtn = document.getElementById('execute-command-btn');
    const customCommandInput = document.getElementById('custom-command-input');
    
    if (newGameBtn) {
        newGameBtn.addEventListener('click', () => {
            uiManager.showScreen('character-creation-screen');
        });
    }
    
    if (loadGameBtn) {
        loadGameBtn.addEventListener('click', () => {
            if (gameState.loadGame()) {
                window.player = gameState.getPlayer();
                uiManager.showScreen('game-play-screen');
                uiManager.updatePlayerStatsDisplay();
                uiManager.updateIllustrationButtonVisibility();
                uiManager.updateQuestButton();
                uiManager.displayMessage(`Welcome back, ${window.player.name}! You are in ${window.player.currentLocation}.`, 'success');
                
                // Add helpful reminder about the Explore button
                setTimeout(() => {
                    uiManager.displayMessage("💡 The DM remembers your last encounters! Try using the 🔍 Explore button to help return to your adventure!", 'info');
                }, 1000);
            } else {
                uiManager.displayMessage("No saved game found.", 'error');
            }
        });
    }
    
    if (createCharacterBtn) {
        createCharacterBtn.addEventListener('click', createCharacter);
    }
    
    if (executeCommandBtn) {
        executeCommandBtn.addEventListener('click', executeCommand);
    }
    
    if (customCommandInput) {
        customCommandInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                executeCommand();
            }
        });
    }
    
    // Interface buttons
    setupInterfaceButtons();
    
    // Settings
    setupSettingsListeners();
    
    console.log('✓ All event listeners have been set up');
}

function setupInterfaceButtons() {
    // Inventory
    const showInventoryBtn = document.getElementById('show-inventory-btn');
    if (showInventoryBtn) {
        showInventoryBtn.addEventListener('click', () => {
            inventoryManager.displayInventory();
        });
    }
    
    // Shop
    const showShopBtn = document.getElementById('show-shop-btn');
    if (showShopBtn) {
        showShopBtn.addEventListener('click', () => {
            inventoryManager.showShop();
        });
    }
    
    // Quests
    const newQuestBtn = document.getElementById('new-quest-btn');
    if (newQuestBtn) {
        newQuestBtn.addEventListener('click', () => {
            inventoryManager.displayQuests();
        });
    }
    
    // Exit buttons
    const exitButtons = [
        'exit-shop-btn', 'exit-inventory-btn', 'exit-skills-btn', 
        'exit-quests-btn', 'exit-background-btn', 'exit-progression-btn'
    ];
    
    exitButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                uiManager.showScreen('game-play-screen');
            });
        }
    });
    
    // Save game
    const saveGameBtn = document.getElementById('save-game-btn');
    if (saveGameBtn) {
        saveGameBtn.addEventListener('click', () => {
            gameState.saveGame();
            uiManager.displayMessage("Game saved!", 'success');
        });
    }
}

function setupSettingsListeners() {
    const modelSelect = document.getElementById('gemini-model-select');
    const apiKeyInput = document.getElementById('gemini-api-key-input');
    
    if (modelSelect) {
        modelSelect.addEventListener('change', (e) => {
            gameSettings.model = e.target.value;
            saveSettings();
        });
    }
    
    if (apiKeyInput) {
        apiKeyInput.addEventListener('change', (e) => {
            gameSettings.apiKey = e.target.value;
            saveSettings();
        });
    }
}

// Character creation
async function createCharacter() {
    const name = document.getElementById('char-name').value.trim();
    const charClass = document.getElementById('char-class').value;
    const gender = document.querySelector('input[name="char-gender"]:checked')?.value;
    const background = document.getElementById('char-background').value.trim();
    
    if (!name || !charClass || !gender) {
        uiManager.displayMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Create player character
    const player = {
        name,
        class: charClass,
        gender,
        background: background || await apiClient.generateCharacterBackground(name, charClass, gender),
        level: 1,
        hp: 100,
        maxHp: 100,
        exp: 0,
        expToNextLevel: 100,
        gold: 50,
        stats: {
            strength: 14,
            dexterity: 12,
            intelligence: 13,
            constitution: 15,
            wisdom: 11,
            charisma: 10
        },
        inventory: [],
        equipment: {
            head: null, chest: null, hands: null, legs: null, feet: null,
            mainHand: null, offHand: null, amulet: null, ring1: null, ring2: null, back: null
        },
        skills: [],
        abilities: [],
        quests: [],
        relationships: {},
        currentLocation: 'Pedena Town Square',
        currentEnemy: null,
        alignment: null
    };
    
    // Initialize character
    if (CharacterManager && typeof CharacterManager.initializeCharacter === 'function') {
        CharacterManager.initializeCharacter(player, charClass);
    }
    
    // Set global player and save
    gameState.setPlayer(player);
    window.player = player;
    gameState.saveGame();
    
    // Start game
    uiManager.showScreen('game-play-screen');
    uiManager.updatePlayerStatsDisplay();
    uiManager.displayMessage(`Welcome to Pedena, ${name}! Your adventure begins in ${player.currentLocation}.`, 'success');
    
    console.log('Character created:', player);
}

// Command execution
async function executeCommand() {
    const command = uiManager.getCommandInputValue();
    if (!command) return;
    
    const player = gameState.getPlayer();
    if (!player) {
        uiManager.displayMessage('Please create a character first.', 'error');
        return;
    }
    
    uiManager.clearCommandInput();
    uiManager.displayMessage(`> ${command}`, 'info');
    
    try {
        // Add to conversation history
        gameState.addToConversationHistory('user', command);
        
        // Process command with AI
        const response = await apiClient.callGeminiAPI(
            `Player ${player.name} (Level ${player.level} ${player.class}) says: "${command}". 
            Current location: ${player.currentLocation}. 
            Respond as a Dungeon Master with 2-3 sentences describing what happens.`
        );
        
        if (response) {
            uiManager.displayMessage(response, 'story');
            gameState.addToConversationHistory('assistant', response);
        } else {
            uiManager.displayMessage('The world remains silent...', 'info');
        }
        
        // Save conversation history
        gameState.saveConversationHistory();
        
    } catch (error) {
        console.error('Command execution error:', error);
        uiManager.displayMessage('There was an error processing your command.', 'error');
    }
}

// Global function exports for backward compatibility
window.createCharacter = createCharacter;
window.executeCommand = executeCommand;
window.saveSettings = saveSettings;
window.loadSettings = loadSettings;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGame);
} else {
    initializeGame();
}

// Export for module use
export { gameSettings, saveSettings, loadSettings };
