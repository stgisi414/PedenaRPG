export class MultiplayerClient {
    constructor() {
        this.ws = null;
        this.isConnected = false;
        this.roomId = null;
        this.playerId = null;
        this.isHost = false;
        this.currentTurn = null;
        this.players = [];
        this.callbacks = new Map();
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectTimeout = null;
    }

    connect() {
        return new Promise((resolve, reject) => {
            try {
                // Use the current domain for WebSocket connection
                const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
                const host = window.location.host;
                this.ws = new WebSocket(`${protocol}//${host}`);

                this.ws.onopen = () => {
                    this.isConnected = true;
                    console.log('Connected to multiplayer server');
                    resolve();
                };

                this.ws.onmessage = (event) => {
                    this.handleMessage(JSON.parse(event.data));
                };

                this.ws.onclose = () => {
                    this.isConnected = false;
                    this.handleDisconnection();
                };

                this.ws.onerror = (error) => {
                    console.error('WebSocket error:', error);
                    reject(error);
                };
            } catch (error) {
                reject(error);
            }
        });
    }

    handleMessage(message) {
        console.log(`[MULTIPLAYER CLIENT] *** MESSAGE RECEIVED ***`);
        console.log(`[MULTIPLAYER CLIENT] Message type: ${message.type}`);
        console.log(`[MULTIPLAYER CLIENT] Full message:`, message);

        // IMMEDIATE LOCATION CHECK - CHECK BEFORE SWITCH STATEMENT
        if (message.type === 'location_changed') {
            console.log(`[MULTIPLAYER CLIENT] *** LOCATION_CHANGED MESSAGE DETECTED ***`);
            console.log(`[MULTIPLAYER CLIENT] Location: ${message.location}`);
            console.log(`[MULTIPLAYER CLIENT] Description: ${message.description}`);
            console.log(`[MULTIPLAYER CLIENT] Force sync: ${message.forceSync}`);
            console.log(`[MULTIPLAYER CLIENT] Player ID: ${message.playerId}`);
            console.log(`[MULTIPLAYER CLIENT] PROCESSING LOCATION UPDATE NOW`);
            
            // IMMEDIATELY process location change
            this.processLocationChange(message);
            
            console.log(`[MULTIPLAYER CLIENT] *** LOCATION PROCESSING COMPLETED ***`);
        } else {
            console.log(`[MULTIPLAYER CLIENT] Not a location_changed message: ${message.type}`);
        }
        switch(message.type) {
            case 'connected':
                this.playerId = message.playerId;
                break;
            case 'room_created':
                this.roomId = message.roomId;
                this.isHost = message.isHost;
                this.triggerCallback('roomCreated', message);
                break;
            case 'room_joined':
                this.roomId = message.roomId;
                this.isHost = message.isHost;
                this.triggerCallback('roomJoined', message);
                break;
            case 'reconnected':
                this.roomId = message.roomId;
                this.isHost = message.isHost;
                this.reconnectAttempts = 0;
                if (typeof displayMessage !== 'undefined') {
                    displayMessage(message.message, 'success');
                }
                this.triggerCallback('reconnected', message);
                break;
            case 'room_update':
                this.players = message.players;
                this.currentTurn = message.gameState.currentTurn;
                this.updatePartyFromPlayers(message.players);
                this.triggerCallback('roomUpdate', message);
                break;
            case 'force_location_update':
                console.log(`[MULTIPLAYER CLIENT] *** FORCED LOCATION UPDATE RECEIVED ***`);
                console.log(`[MULTIPLAYER CLIENT] Being forced to location: ${message.location}`);
                this.processForcedLocationUpdate(message);
                break;
            case 'force_travel_command':
                console.log(`[MULTIPLAYER CLIENT] *** FORCE TRAVEL COMMAND RECEIVED ***`);
                console.log(`[MULTIPLAYER CLIENT] Command: ${message.command}`);
                console.log(`[MULTIPLAYER CLIENT] Destination: ${message.destination}`);
                this.executeForcedTravel(message);
                break;
            case 'location_changed':
                console.log(`[MULTIPLAYER CLIENT] Received location_changed:`, message);
                this.processLocationChange(message);
                break;
            case 'player_action':
                this.displayPlayerAction(message);
                this.triggerCallback('playerAction', message);
                break;
            case 'player_moved':
                if (typeof player !== 'undefined') {
                    player.currentLocation = message.location;
                    updatePlayerStatsDisplay();
                    displayMessage(message.description, 'info');
                }
                this.triggerCallback('playerMoved', message);
                break;
            case 'player_entered_zone':
                if (typeof displayMessage !== 'undefined') {
                    displayMessage(`${message.playerName} enters the area from ${message.origin}`, 'info');
                }
                break;
            case 'player_left_zone':
                if (typeof displayMessage !== 'undefined') {
                    displayMessage(`${message.playerName} leaves for ${message.destination}`, 'info');
                }
                break;
            case 'zone_chat':
                if (typeof displayMessage !== 'undefined') {
                    displayMessage(`[${message.zone}] ${message.playerName}: ${message.message}`, 'chat');
                }
                break;
            case 'zone_update':
                if (typeof displayMessage !== 'undefined') {
                    displayMessage(message.message, 'zone');
                }
                break;
            case 'turn_changed':
                this.currentTurn = message.currentTurn;
                this.updateTurnDisplay();
                this.triggerCallback('turnChanged', message);
                break;
            case 'player_disconnected':
                if (typeof displayMessage !== 'undefined') {
                    displayMessage(message.message, 'warning');
                }
                break;
            case 'player_permanently_left':
                if (typeof displayMessage !== 'undefined') {
                    displayMessage(message.message, 'info');
                }
                break;
            case 'test_connectivity':
                console.log(`[MULTIPLAYER CLIENT] *** TEST CONNECTIVITY MESSAGE RECEIVED ***`);
                console.log(`[MULTIPLAYER CLIENT] Original message type was: ${message.originalMessageType}`);
                console.log(`[MULTIPLAYER CLIENT] This proves WebSocket connection is working!`);
                if (message.originalMessageType === 'location_changed') {
                    console.log(`[MULTIPLAYER CLIENT] *** LOCATION MESSAGE SHOULD HAVE BEEN RECEIVED BUT WASN'T ***`);
                }
                break;
            case 'error':
                if (typeof displayMessage !== 'undefined') {
                    displayMessage(message.message, 'error');
                }
                break;
        }
    }

    updatePartyFromPlayers(players) {
        if (typeof partyManager === 'undefined' || typeof player === 'undefined') return;

        // Add other players to party (excluding self)
        players.forEach(playerData => {
            if (playerData.id !== this.playerId) {
                const existingMember = partyManager.party.find(member => member.id === playerData.id);
                if (!existingMember) {
                    const memberData = {
                        id: playerData.id,
                        name: playerData.name,
                        level: playerData.character?.level || 1,
                        health: 100,
                        maxHealth: 100,
                        ac: 12,
                        damage: '1d6',
                        description: `${playerData.name} - A fellow adventurer`
                    };
                    partyManager.addMember(memberData);
                    displayMessage(`${playerData.name} joins your party!`, 'success');
                }
            }
        });
    }

    displayPlayerAction(message) {
        if (typeof displayMessage !== 'undefined') {
            const playerName = this.players.find(p => p.id === message.playerId)?.name || 'Unknown Player';
            displayMessage(`${playerName}: ${message.action}`, 'multiplayer');
            if (message.result) {
                displayMessage(message.result, 'info');
            }
        }
    }

    updateTurnDisplay() {
        if (typeof displayMessage !== 'undefined') {
            const currentPlayerName = this.players.find(p => p.id === this.currentTurn)?.name || 'Unknown';
            if (this.isMyTurn()) {
                displayMessage("It's your turn!", 'success');
            } else {
                displayMessage(`It's ${currentPlayerName}'s turn. Please wait...`, 'info');
            }
        }
    }

    createRoom(playerName, character) {
        this.send({
            type: 'create_room',
            playerName: playerName,
            character: character
        });
    }

    joinRoom(roomId, playerName, character) {
        this.send({
            type: 'join_room',
            roomId: roomId,
            playerName: playerName,
            character: character
        });
    }

    requestTravel(destination, description) {
        this.send({
            type: 'travel_request',
            destination: destination,
            description: description
        });
    }

    sendAction(action, result, scope = 'zone') {
        this.send({
            type: 'game_action',
            action: action,
            result: result,
            scope: scope // 'zone' or 'room'
        });
    }

    sendPlayerMove(destination, description) {
        this.send({
            type: 'player_move',
            destination: destination,
            description: description
        });
    }

    sendZoneChat(message) {
        this.send({
            type: 'zone_chat',
            text: message
        });
    }

    endTurn() {
        this.send({
            type: 'end_turn'
        });
    }

    send(message) {
        if (this.ws && this.isConnected) {
            this.ws.send(JSON.stringify(message));
        }
    }

    on(event, callback) {
        if (!this.callbacks.has(event)) {
            this.callbacks.set(event, []);
        }
        this.callbacks.get(event).push(callback);
    }

    triggerCallback(event, data) {
        const callbacks = this.callbacks.get(event) || [];
        callbacks.forEach(callback => callback(data));
    }

    isMyTurn() {
        return this.currentTurn === this.playerId;
    }

    canControlTravel() {
        const canTravel = this.isHost && this.roomId && this.isConnected;
        console.log(`[MULTIPLAYER CLIENT] canControlTravel check: isHost=${this.isHost}, roomId=${this.roomId}, connected=${this.isConnected}, result=${canTravel}`);
        return canTravel;
    }

    handleDisconnection() {
        this.isConnected = false;

        if (typeof displayMessage !== 'undefined') {
            displayMessage('Disconnected from multiplayer server', 'error');
        }

        // Attempt automatic reconnection if we were in a room
        if (this.roomId && this.reconnectAttempts < this.maxReconnectAttempts) {
            this.attemptReconnection();
        } else {
            // Give up on reconnection
            this.roomId = null;
            this.isHost = false;
            this.players = [];
        }
    }

    processLocationChange(message) {
        console.log(`[MULTIPLAYER CLIENT] *** PROCESSING LOCATION CHANGE ***`);
        console.log(`[MULTIPLAYER CLIENT] Target location: ${message.location}`);
        console.log(`[MULTIPLAYER CLIENT] Is host travel: ${message.isHostTravel}`);
        console.log(`[MULTIPLAYER CLIENT] Forced: ${message.forced}`);
        console.log(`[MULTIPLAYER CLIENT] Message:`, message);

        if (typeof player !== 'undefined' && player) {
            const oldLocation = player.currentLocation;
            console.log(`[MULTIPLAYER CLIENT] FORCING player location from "${oldLocation}" to "${message.location}"`);
            
            // FORCE Update player location immediately
            player.currentLocation = message.location;
            
            // FORCE update the UI with multiple attempts
            if (typeof updatePlayerStatsDisplay !== 'undefined') {
                console.log(`[MULTIPLAYER CLIENT] FORCING updatePlayerStatsDisplay() multiple times`);
                updatePlayerStatsDisplay();
                
                // Force immediate updates with delays
                setTimeout(() => updatePlayerStatsDisplay(), 10);
                setTimeout(() => updatePlayerStatsDisplay(), 50);
                setTimeout(() => updatePlayerStatsDisplay(), 100);
                setTimeout(() => updatePlayerStatsDisplay(), 200);
                setTimeout(() => updatePlayerStatsDisplay(), 500);
                setTimeout(() => updatePlayerStatsDisplay(), 1000);
            }

            // Display messages 
            if (typeof displayMessage !== 'undefined') {
                console.log(`[MULTIPLAYER CLIENT] Displaying travel messages`);
                displayMessage(message.description, message.forced ? 'warning' : 'info');
                
                // Clear combat state if traveling
                if (typeof window.CombatSystem !== 'undefined') {
                    window.CombatSystem.clearCombatState();
                }
            }

            // FORCE save game
            if (typeof saveGame !== 'undefined') {
                console.log(`[MULTIPLAYER CLIENT] FORCE saving game`);
                saveGame();
            }
            
            // FORCE update all location displays
            this.forceUpdateLocationDisplay(message.location);
            
        } else {
            console.log(`[MULTIPLAYER CLIENT] ERROR: Player object is undefined!`);
        }

        console.log(`[MULTIPLAYER CLIENT] *** FORCED LOCATION CHANGE COMPLETED ***`);
    }

    executeForcedTravel(message) {
        console.log(`[MULTIPLAYER CLIENT] *** EXECUTING FORCED TRAVEL ***`);
        console.log(`[MULTIPLAYER CLIENT] Travel command: ${message.command}`);
        console.log(`[MULTIPLAYER CLIENT] Destination: ${message.destination}`);
        
        // Execute the actual travel command through the game's command processing system
        if (typeof processCommand !== 'undefined') {
            console.log(`[MULTIPLAYER CLIENT] Calling processCommand with: ${message.command}`);
            
            // Execute the travel command
            processCommand(message.command).then(() => {
                console.log(`[MULTIPLAYER CLIENT] Travel command executed successfully`);
                
                // Force update player location
                if (typeof player !== 'undefined') {
                    player.currentLocation = message.destination;
                    console.log(`[MULTIPLAYER CLIENT] Player location force-updated to: ${player.currentLocation}`);
                    
                    // Update displays
                    if (typeof updatePlayerStatsDisplay !== 'undefined') {
                        updatePlayerStatsDisplay();
                    }
                    
                    // Display success message
                    if (typeof displayMessage !== 'undefined') {
                        displayMessage(message.description, 'success');
                        displayMessage(`Successfully synchronized to party location: ${message.destination}`, 'info');
                    }
                    
                    // Save game state
                    if (typeof saveGame !== 'undefined') {
                        saveGame();
                    }
                }
            }).catch(error => {
                console.error(`[MULTIPLAYER CLIENT] Error executing travel command:`, error);
                
                // Fallback to direct location update
                this.processLocationChange({
                    type: 'location_changed',
                    location: message.destination,
                    description: message.description
                });
            });
        } else {
            console.error(`[MULTIPLAYER CLIENT] processCommand function not available, falling back to location change`);
            
            // Fallback to direct location update
            this.processLocationChange({
                type: 'location_changed',
                location: message.destination,
                description: message.description
            });
        }
    }

    forceUpdateLocationDisplay(location) {
        console.log(`[MULTIPLAYER CLIENT] Force updating all location displays to: ${location}`);

        // Try multiple selectors to find location displays
        const selectors = [
            '#current-location',
            '.current-location', 
            '[data-location]',
            '.player-stats .location',
            '#player-location',
            '.location-display'
        ];

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (el && el.textContent !== location) {
                    console.log(`[MULTIPLAYER CLIENT] Updating element with selector "${selector}" to: ${location}`);
                    el.textContent = location;
                }
            });
        });
    }

    processForcedLocationUpdate(message) {
        console.log(`[MULTIPLAYER CLIENT] *** PROCESSING FORCED LOCATION UPDATE ***`);
        console.log(`[MULTIPLAYER CLIENT] FORCED to location: ${message.location}`);
        
        if (typeof player !== 'undefined' && player) {
            const oldLocation = player.currentLocation;
            console.log(`[MULTIPLAYER CLIENT] FORCING player location from "${oldLocation}" to "${message.location}"`);
            
            // FORCE update player location immediately
            player.currentLocation = message.location;
            
            // Update UI multiple times to ensure it sticks
            if (typeof updatePlayerStatsDisplay !== 'undefined') {
                updatePlayerStatsDisplay();
                setTimeout(() => updatePlayerStatsDisplay(), 100);
                setTimeout(() => updatePlayerStatsDisplay(), 500);
            }
            
            // Display forced movement message
            if (typeof displayMessage !== 'undefined') {
                displayMessage(message.description, 'warning');
                displayMessage(`*** PARTY TRAVEL: Moved to ${message.location} ***`, 'success');
            }
            
            // Save the forced location change
            if (typeof saveGame !== 'undefined') {
                saveGame();
            }
            
            this.forceUpdateLocationDisplay(message.location);
        }
        
        console.log(`[MULTIPLAYER CLIENT] *** FORCED LOCATION UPDATE COMPLETED ***`);
    }

    requestTravel(destination, description) {
        // BLOCK NON-HOST TRAVEL ATTEMPTS
        if (!this.isHost) {
            console.log(`[MULTIPLAYER CLIENT] *** TRAVEL BLOCKED - NOT HOST ***`);
            if (typeof displayMessage !== 'undefined') {
                displayMessage('Only the party leader can control travel for the group', 'error');
            }
            return;
        }
        
        console.log(`[MULTIPLAYER CLIENT] *** HOST INITIATING TRAVEL ***`);
        this.send({
            type: 'travel_request',
            destination: destination,
            description: description
        });
    }

    attemptReconnection() {
        this.reconnectAttempts++;

        if (typeof displayMessage !== 'undefined') {
            displayMessage(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`, 'info');
        }

        this.reconnectTimeout = setTimeout(() => {
            this.connect().then(() => {
                // Attempt to reconnect to previous session
                this.send({
                    type: 'reconnect',
                    playerName: typeof player !== 'undefined' ? player.name : 'Unknown',
                    sessionToken: this.playerId
                });
            }).catch(() => {
                if (this.reconnectAttempts < this.maxReconnectAttempts) {
                    this.attemptReconnection();
                } else {
                    if (typeof displayMessage !== 'undefined') {
                        displayMessage('Failed to reconnect. Please refresh and rejoin manually.', 'error');
                    }
                    this.roomId = null;
                    this.isHost = false;
                    this.players = [];
                }
            });
        }, 2000 * this.reconnectAttempts); // Exponential backoff
    }
}

// Global multiplayer client
window.multiplayerClient = new MultiplayerClient();