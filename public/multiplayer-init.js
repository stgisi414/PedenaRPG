
// Multiplayer initialization and callback setup
// This file handles multiplayer location synchronization without modifying the main script.js

function initializeMultiplayerCallbacks() {
    console.log('[MULTIPLAYER INIT] Starting multiplayer callback initialization');
    console.log('[MULTIPLAYER INIT] MultiplayerClient available:', typeof multiplayerClient !== 'undefined');
    console.log('[MULTIPLAYER INIT] Player object available:', typeof player !== 'undefined');
    console.log('[MULTIPLAYER INIT] Player current location:', typeof player !== 'undefined' ? player.currentLocation : 'N/A');
    
    if (typeof multiplayerClient === 'undefined') {
        console.warn('[MULTIPLAYER INIT] MultiplayerClient not available');
        return;
    }

    // Set up location synchronization callback
    multiplayerClient.on('locationChanged', function(message) {
        console.log('[MULTIPLAYER INIT] Location change callback triggered with message:', message);
        console.log('[MULTIPLAYER INIT] Player object check:', typeof player !== 'undefined');
        console.log('[MULTIPLAYER INIT] Message location check:', message.location);
        
        if (typeof player !== 'undefined' && message.location) {
            const oldLocation = player.currentLocation;
            console.log('[MULTIPLAYER INIT] Current player location before change:', oldLocation);
            
            player.currentLocation = message.location;
            console.log('[MULTIPLAYER INIT] Player location updated to:', player.currentLocation);
            console.log('[MULTIPLAYER INIT] Location change confirmed:', `${oldLocation} -> ${message.location}`);
            
            // Update UI
            if (typeof updatePlayerStatsDisplay === 'function') {
                console.log('[MULTIPLAYER INIT] Calling updatePlayerStatsDisplay');
                updatePlayerStatsDisplay();
                console.log('[MULTIPLAYER INIT] updatePlayerStatsDisplay completed');
            } else {
                console.log('[MULTIPLAYER INIT] updatePlayerStatsDisplay not available');
            }
            
            // Display message
            if (typeof displayMessage === 'function') {
                console.log('[MULTIPLAYER INIT] Displaying location change messages');
                displayMessage(message.description || `Moved to ${message.location}`, 'info');
                displayMessage(`Location synchronized: ${message.location}`, 'success');
                displayMessage(`[DEBUG] Location changed from ${oldLocation} to ${message.location}`, 'info');
                console.log('[MULTIPLAYER INIT] Messages displayed');
            } else {
                console.log('[MULTIPLAYER INIT] displayMessage not available');
            }
            
            // Save the game with new location
            if (typeof saveGame === 'function') {
                console.log('[MULTIPLAYER INIT] Saving game after location change');
                saveGame();
                console.log('[MULTIPLAYER INIT] Game saved');
            } else {
                console.log('[MULTIPLAYER INIT] saveGame not available');
            }
            
            // Add to conversation history
            if (typeof addToConversationHistory === 'function') {
                console.log('[MULTIPLAYER INIT] Adding location change to conversation history');
                addToConversationHistory('assistant', `Location changed to ${message.location}`);
                console.log('[MULTIPLAYER INIT] Conversation history updated');
            } else {
                console.log('[MULTIPLAYER INIT] addToConversationHistory not available');
            }
            
            // Force refresh of location display
            const locationElements = document.querySelectorAll('[data-location], .location-display, #current-location');
            console.log('[MULTIPLAYER INIT] Found location elements to update:', locationElements.length);
            locationElements.forEach(el => {
                if (el.textContent) {
                    console.log('[MULTIPLAYER INIT] Updating element text to new location');
                    el.textContent = message.location;
                }
            });
            
        } else {
            console.log('[MULTIPLAYER INIT] Cannot update location - player undefined:', typeof player === 'undefined', 'or message.location missing:', !message.location);
        }
    });

    // Set up room joined callback to ensure location sync
    multiplayerClient.on('roomJoined', function(message) {
        console.log('[MULTIPLAYER INIT] Room joined callback triggered:', message);
        console.log('[MULTIPLAYER INIT] Requesting location synchronization');
        
        // Small delay to ensure room state is updated
        setTimeout(() => {
            console.log('[MULTIPLAYER INIT] Displaying synchronization message');
            if (typeof displayMessage === 'function') {
                displayMessage('Synchronizing with party location...', 'info');
                displayMessage('[DEBUG] Room joined, awaiting location sync', 'info');
            }
        }, 500);
    });

    console.log('[MULTIPLAYER INIT] Multiplayer callbacks initialized successfully');
}

// Auto-initialize when DOM is ready
console.log('[MULTIPLAYER INIT] Document ready state:', document.readyState);
if (document.readyState === 'loading') {
    console.log('[MULTIPLAYER INIT] Waiting for DOM to load');
    document.addEventListener('DOMContentLoaded', () => {
        console.log('[MULTIPLAYER INIT] DOM loaded, initializing callbacks');
        initializeMultiplayerCallbacks();
    });
} else {
    console.log('[MULTIPLAYER INIT] DOM already loaded, initializing callbacks immediately');
    initializeMultiplayerCallbacks();
}

// Also initialize when multiplayer client becomes available
console.log('[MULTIPLAYER INIT] Checking for multiplayerClient availability');
if (typeof multiplayerClient !== 'undefined') {
    console.log('[MULTIPLAYER INIT] multiplayerClient already available');
    initializeMultiplayerCallbacks();
} else {
    console.log('[MULTIPLAYER INIT] multiplayerClient not yet available, polling...');
    // Poll for multiplayerClient availability
    const checkInterval = setInterval(() => {
        console.log('[MULTIPLAYER INIT] Polling for multiplayerClient...');
        if (typeof multiplayerClient !== 'undefined') {
            console.log('[MULTIPLAYER INIT] multiplayerClient now available!');
            initializeMultiplayerCallbacks();
            clearInterval(checkInterval);
        }
    }, 100);
}
