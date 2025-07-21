
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

        // Initialize UI
        this.uiManager.initialize();

        // Load saved game state
        if (this.gameState.loadGameState()) {
            console.log('Game state loaded from localStorage');
            window.player = this.gameState.player;
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
        window.displayMessage = (message, type, isRich) => {
            this.uiManager.displayMessage(message, type, isRich);
        };

        window.switchInterface = (interfaceId) => {
            this.uiManager.switchInterface(interfaceId);
        };

        window.updatePlayerStatsDisplay = () => {
            this.uiManager.updatePlayerStatsDisplay();
        };

        window.addItem = (item) => {
            if (window.player) {
                this.inventoryManager.addItem(window.player, item);
                this.gameState.saveGameState();
            }
        };

        window.equipItem = (itemIndex) => {
            if (window.player) {
                const success = this.inventoryManager.equipItem(window.player, itemIndex);
                if (success) {
                    this.uiManager.updatePlayerStatsDisplay();
                    this.gameState.saveGameState();
                }
                return success;
            }
            return false;
        };
    }

    async processCommand(command) {
        if (!window.player) {
            this.uiManager.displayMessage('Please create a character first.', 'warning');
            return;
        }

        this.uiManager.showLoading('Processing your command...');

        try {
            const context = {
                player: window.player,
                gameHistory: this.gameState.gameHistory,
                currentLocation: this.gameState.currentLocation
            };

            const response = await this.apiClient.makeAPIRequest(command, context);
            
            // Add to history
            this.gameState.addToHistory({
                command: command,
                response: response
            });

            // Display response
            this.uiManager.displayMessage(response, 'story', this.uiManager.isRichTextEnabled);

            // Process any game state changes
            await this.processGameStateChanges(response);

        } catch (error) {
            console.error('Command processing error:', error);
            this.uiManager.displayMessage('Sorry, there was an error processing your command. Please try again.', 'error');
        } finally {
            this.uiManager.hideLoading();
        }
    }

    async processGameStateChanges(response) {
        // Extract and process game state changes from the response
        // This would include item pickups, stat changes, location changes, etc.
        
        // Example: Extract items mentioned in response
        const items = this.extractItemsFromResponse(response);
        items.forEach(item => {
            this.inventoryManager.addItem(window.player, item);
        });

        // Update UI
        this.uiManager.updatePlayerStatsDisplay();
        this.gameState.saveGameState();
    }

    extractItemsFromResponse(response) {
        // Simple item extraction logic - would be more sophisticated in practice
        const items = [];
        const itemPatterns = [
            /you (?:find|discover|pick up|take|get) (?:a |an |the )?([^.!?]+)/gi,
            /(?:found|discovered|obtained|acquired) (?:a |an |the )?([^.!?]+)/gi
        ];

        for (const pattern of itemPatterns) {
            let match;
            while ((match = pattern.exec(response)) !== null) {
                const itemName = match[1].trim();
                if (itemName.length > 2 && itemName.length < 50) {
                    items.push({
                        id: `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                        name: itemName,
                        type: 'misc',
                        value: Math.floor(Math.random() * 50) + 1,
                        description: `A ${itemName} you found during your adventure.`
                    });
                }
            }
        }

        return items;
    }
}

// Create and initialize the game
const game = new Game();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => game.initialize());
} else {
    game.initialize();
}

// Export for global access
window.game = game;
export default game;
