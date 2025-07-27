
// Multiplayer initialization and callback setup
// This file handles multiplayer location synchronization without modifying the main script.js

function initializeMultiplayerCallbacks() {
    if (typeof multiplayerClient === 'undefined') {
        console.warn('MultiplayerClient not available');
        return;
    }

    // Set up location synchronization callback
    multiplayerClient.on('locationChanged', function(message) {
        console.log('Multiplayer location change received:', message);
        
        if (typeof player !== 'undefined' && message.location) {
            const oldLocation = player.currentLocation;
            player.currentLocation = message.location;
            
            console.log(`Player location updated: ${oldLocation} -> ${message.location}`);
            
            // Update UI
            if (typeof updatePlayerStatsDisplay === 'function') {
                updatePlayerStatsDisplay();
            }
            
            // Display message
            if (typeof displayMessage === 'function') {
                displayMessage(message.description || `Moved to ${message.location}`, 'info');
                displayMessage(`Location synchronized: ${message.location}`, 'success');
            }
            
            // Save the game with new location
            if (typeof saveGame === 'function') {
                saveGame();
            }
            
            // Add to conversation history
            if (typeof addToConversationHistory === 'function') {
                addToConversationHistory('assistant', `Location changed to ${message.location}`);
            }
        }
    });

    // Set up room joined callback to ensure location sync
    multiplayerClient.on('roomJoined', function(message) {
        console.log('Room joined, requesting location sync');
        
        // Small delay to ensure room state is updated
        setTimeout(() => {
            if (typeof displayMessage === 'function') {
                displayMessage('Synchronizing with party location...', 'info');
            }
        }, 500);
    });

    console.log('Multiplayer callbacks initialized');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMultiplayerCallbacks);
} else {
    initializeMultiplayerCallbacks();
}

// Also initialize when multiplayer client becomes available
if (typeof multiplayerClient !== 'undefined') {
    initializeMultiplayerCallbacks();
} else {
    // Poll for multiplayerClient availability
    const checkInterval = setInterval(() => {
        if (typeof multiplayerClient !== 'undefined') {
            initializeMultiplayerCallbacks();
            clearInterval(checkInterval);
        }
    }, 100);
}
