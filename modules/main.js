// Main Module - Coordinates all other modules
import { gameState } from './game-state.js';
import { uiManager } from './ui-manager.js';
import { apiClient } from './api-client.js';
import { inventoryManager } from './inventory-manager.js';

class Game {
    constructor() {
        this.gameState = gameState;
        this.uiManager = uiManager;
        this.apiClient = apiClient;
        this.inventoryManager = inventoryManager;
        this.isInitialized = false;
    }

    async initialize() {
        if (this.isInitialized) return;

        // Load saved game state
        if (this.gameState.loadGame()) {
            console.log('Game state loaded from localStorage');
            window.player = this.gameState.getPlayer();
            this.uiManager.updatePlayerStatsDisplay();
        }

        // Set up global references for backward compatibility
        window.gameState = this.gameState;
        window.uiManager = this.uiManager;
        window.apiClient = this.apiClient;
        window.inventoryManager = this.inventoryManager;

        this.setupGlobalFunctions();
        this.isInitialized = true;

        console.log('✓ Game modules initialized successfully');
    }

    setupGlobalFunctions() {
        // Expose key functions globally for backward compatibility
        window.displayMessage = (message, type) => {
            this.uiManager.displayMessage(message, type);
        };

        window.showScreen = (screenId) => {
            this.uiManager.showScreen(screenId);
        };

        window.updatePlayerStatsDisplay = () => {
            this.uiManager.updatePlayerStatsDisplay();
        };

        window.addItem = (item) => {
            if (window.player) {
                this.inventoryManager.addItem(item);
                this.gameState.saveGame();
            }
        };

        window.equipItem = (itemIndex) => {
            if (window.player) {
                const success = this.inventoryManager.equipItem(itemIndex);
                if (success) {
                    this.uiManager.updatePlayerStatsDisplay();
                    this.gameState.saveGame();
                }
                return success;
            }
            return false;
        };
    }

    async processCommand(command) {
        if (!window.player) {
            this.uiManager.displayMessage('Please create a character first.', 'error');
            return;
        }

        try {
            const context = this.gameState.getExplorationContextString();
            const response = await this.apiClient.callGeminiAPI(`${command}. Context: ${context}`);

            // Add to conversation history
            this.gameState.addToConversationHistory('user', command);
            this.gameState.addToConversationHistory('assistant', response);

            // Display response
            this.uiManager.displayMessage(response, 'story');

            // Save conversation history
            this.gameState.saveConversationHistory();

        } catch (error) {
            console.error('Command processing error:', error);
            this.uiManager.displayMessage('There was an error processing your command.', 'error');
        }
    }
}

// Create and export game instance
export const game = new Game();

// Initialize game when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => game.initialize());
} else {
    game.initialize();
}