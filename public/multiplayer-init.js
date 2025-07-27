// Simple, direct multiplayer location synchronization
let locationSyncInitialized = false;

function initializeLocationSync() {
    if (locationSyncInitialized) return;

    console.log('[LOCATION SYNC] Initializing direct location synchronization');

    // Wait for both multiplayerClient and player to be ready
    const checkReady = setInterval(() => {
        if (typeof multiplayerClient !== 'undefined' && typeof player !== 'undefined') {
            clearInterval(checkReady);
            setupLocationHandlers();
            locationSyncInitialized = true;
            console.log('[LOCATION SYNC] Location sync ready');
        }
    }, 50);
}

function setupLocationHandlers() {
    console.log('[LOCATION SYNC] Setting up location handlers');

    // Override the handleMessage method to catch location_changed
    const originalHandleMessage = multiplayerClient.handleMessage.bind(multiplayerClient);

    multiplayerClient.handleMessage = function(message) {
        console.log(`[LOCATION SYNC] Intercepting message: ${message.type}`);

        if (message.type === 'location_changed') {
            console.log('[LOCATION SYNC] Processing location_changed message:', message);
            handleLocationChanged(message);
        } else if (message.type === 'room_joined') {
            console.log('[LOCATION SYNC] Room joined, requesting location sync');
            handleRoomJoined(message);
        } else if (message.type === 'room_update') {
            console.log('[LOCATION SYNC] Room update, checking for location sync');
            handleRoomUpdate(message);
        }

        // Call original handler
        return originalHandleMessage(message);
    };
}

function handleLocationChanged(message) {
    if (!message.location) {
        console.log('[LOCATION SYNC] No location in message');
        return;
    }

    console.log(`[LOCATION SYNC] Processing location change to: ${message.location}`);

    // Wait for player object to be available
    const waitForPlayer = setInterval(() => {
        if (typeof player !== 'undefined' && player.currentLocation !== undefined) {
            clearInterval(waitForPlayer);
            
            console.log(`[LOCATION SYNC] Player object ready, updating location to: ${message.location}`);
            
            // Update player location immediately
            const oldLocation = player.currentLocation;
            player.currentLocation = message.location;

            // AGGRESSIVELY update the main player name display
            const playerNameDisplay = document.getElementById('player-name');
            if (playerNameDisplay) {
                let locationText;
                if (typeof processRichText === 'function') {
                    locationText = processRichText(player.currentLocation, 'location');
                } else {
                    locationText = player.currentLocation;
                }
                
                // Method 1: Direct update
                playerNameDisplay.innerHTML = `${player.name} - ${locationText}`;
                
                // Method 2: Force immediate DOM update with multiple techniques
                playerNameDisplay.textContent = ''; // Clear first
                playerNameDisplay.innerHTML = `${player.name} - ${locationText}`; // Set again
                
                // Method 3: Force style recalculation
                playerNameDisplay.style.visibility = 'hidden';
                playerNameDisplay.offsetHeight; // Force reflow
                playerNameDisplay.style.visibility = 'visible';
                
                // Method 4: Dispatch custom event to force update
                playerNameDisplay.dispatchEvent(new Event('locationUpdated', { bubbles: true }));
                
                console.log('[LOCATION SYNC] AGGRESSIVELY updated player name display:', playerNameDisplay.innerHTML);
            } else {
                console.error('[LOCATION SYNC] player-name element not found!');
            }

            // Update all possible location displays
            updateLocationDisplays(message.location);

            // Update stats display
            if (typeof updatePlayerStatsDisplay === 'function') {
                console.log('[LOCATION SYNC] Calling updatePlayerStatsDisplay');
                updatePlayerStatsDisplay();
            }

            // Show message
            if (typeof displayMessage === 'function') {
                if (!message.isSecondarySync) {
                    displayMessage(`Location synchronized: ${message.location}`, 'success');
                }
                if (message.description && !message.isSecondarySync) {
                    displayMessage(message.description, 'info');
                }
            }

            // Save game
            if (typeof saveGame === 'function') {
                console.log('[LOCATION SYNC] Saving game');
                saveGame();
            }

            console.log(`[LOCATION SYNC] Location updated from "${oldLocation}" to "${player.currentLocation}"`);
        }
    }, 50);

    // Timeout after 5 seconds if player object never becomes available
    setTimeout(() => {
        clearInterval(waitForPlayer);
        console.log('[LOCATION SYNC] Timeout waiting for player object');
    }, 5000);
}

function handleRoomJoined(message) {
    console.log('[LOCATION SYNC] Joined room, will request location sync in 100ms');

    // Request location sync after a short delay
    setTimeout(() => {
        if (multiplayerClient && multiplayerClient.isConnected) {
            console.log('[LOCATION SYNC] Sending location sync request');
            multiplayerClient.send({
                type: 'request_location_sync'
            });
        }
    }, 100);
}

function handleRoomUpdate(message) {
    if (message.gameState && message.gameState.location && message.gameState.location !== player.currentLocation) {
        console.log(`[LOCATION SYNC] Room update shows different location: ${message.gameState.location}`);

        // Force sync to room location
        handleLocationChanged({
            type: 'location_changed',
            location: message.gameState.location,
            description: `Synchronized to party location: ${message.gameState.location}`
        });
    }
}

function updateLocationDisplays(location) {
    console.log(`[LOCATION SYNC] Updating all location displays to: ${location}`);

    // Update various possible location element selectors
    const selectors = [
        '#current-location',
        '.current-location',
        '[data-location]',
        '.player-stats .location',
        '#player-location',
        '.location-display',
        '.player-location'
    ];

    let elementsUpdated = 0;
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (el) {
                console.log(`[LOCATION SYNC] Updated element ${selector} to: ${location}`);
                el.textContent = location;
                elementsUpdated++;
            }
        });
    });

    // Also update any spans or divs that might contain location info
    document.querySelectorAll('span, div').forEach(el => {
        if (el.textContent && el.textContent.includes('Location:')) {
            const newText = el.textContent.replace(/Location:.*/, `Location: ${location}`);
            if (newText !== el.textContent) {
                el.textContent = newText;
                console.log('[LOCATION SYNC] Updated location info element');
                elementsUpdated++;
            }
        }
    });

    console.log(`[LOCATION SYNC] Total elements updated: ${elementsUpdated}`);
    
    // Force a manual search for player stats display and update it
    setTimeout(() => {
        const statsContainer = document.querySelector('.player-stats, #player-stats, .stats-container');
        if (statsContainer) {
            const locationElements = statsContainer.querySelectorAll('*');
            locationElements.forEach(el => {
                if (el.textContent && el.textContent.includes('Location:') && !el.textContent.includes(location)) {
                    el.textContent = el.textContent.replace(/Location:.*/, `Location: ${location}`);
                    console.log('[LOCATION SYNC] Force updated stats container location');
                }
            });
        }
    }, 100);
}

// Initialize immediately if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLocationSync);
} else {
    initializeLocationSync();
}

// Also try initialization on window load as backup
window.addEventListener('load', initializeLocationSync);

console.log('[LOCATION SYNC] Location sync initialization script loaded');