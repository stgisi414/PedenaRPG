
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
            case 'room_update':
                this.players = message.players;
                this.currentTurn = message.gameState.currentTurn;
                this.triggerCallback('roomUpdate', message);
                break;
            case 'location_changed':
                if (typeof player !== 'undefined') {
                    player.currentLocation = message.location;
                    updatePlayerStatsDisplay();
                    displayMessage(message.description, 'info');
                }
                this.triggerCallback('locationChanged', message);
                break;
            case 'player_action':
                this.triggerCallback('playerAction', message);
                break;
            case 'turn_changed':
                this.currentTurn = message.currentTurn;
                this.triggerCallback('turnChanged', message);
                break;
            case 'error':
                if (typeof displayMessage !== 'undefined') {
                    displayMessage(message.message, 'error');
                }
                break;
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

    sendAction(action, result) {
        this.send({
            type: 'game_action',
            action: action,
            result: result
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
        return this.isHost;
    }

    handleDisconnection() {
        if (typeof displayMessage !== 'undefined') {
            displayMessage('Disconnected from multiplayer server', 'error');
        }
        this.roomId = null;
        this.isHost = false;
        this.players = [];
    }
}

// Global multiplayer client
window.multiplayerClient = new MultiplayerClient();
