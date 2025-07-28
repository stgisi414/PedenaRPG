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
    console.log('[LOCATION SYNC] *** LOCATION CHANGED MESSAGE RECEIVED ***');
    console.log('[LOCATION SYNC] Message:', message);

    // IMMEDIATE update without waiting for player object
    if (typeof player !== 'undefined' && player) {
        console.log(`[LOCATION SYNC] Player object ready, updating location from "${player.currentLocation}" to "${message.location}"`);

        // Update player location
        const oldLocation = player.currentLocation;
        player.currentLocation = message.location;

        console.log(`[LOCATION SYNC] Player location updated successfully`);

        // Force update the display using multiple methods
        if (typeof updatePlayerStatsDisplay === 'function') {
            console.log('[LOCATION SYNC] Calling updatePlayerStatsDisplay');
            updatePlayerStatsDisplay();
        }

        // Force update player name display element IMMEDIATELY
        const playerNameElements = document.querySelectorAll('#player-name, .player-name');
        playerNameElements.forEach(element => {
            if (element) {
                console.log(`[LOCATION SYNC] Updating element text to: ${player.name} - ${player.currentLocation}`);
                element.textContent = `${player.name} - ${player.currentLocation}`;
            }
        });

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
    } else {
        console.log('[LOCATION SYNC] Player object not ready, deferring location update');

        // Wait for player object to be ready if it's not available yet
        const waitForPlayer = setInterval(() => {
            if (typeof player !== 'undefined' && player && player.name) {
                clearInterval(waitForPlayer);
                handleLocationChanged(message); // Recursive call when ready
            }
        }, 50);

        // Timeout after 3 seconds
        setTimeout(() => {
            clearInterval(waitForPlayer);
            console.log('[LOCATION SYNC] Timeout waiting for player object');
        }, 3000);
    }
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