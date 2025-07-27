
# Pedena RPG Multiplayer Implementation Guide

## Overview
This guide outlines the steps to implement WebSocket-based multiplayer functionality for the Pedena RPG, featuring turn-based gameplay and party leader-controlled travel.

## Phase 1: WebSocket Server Setup

### Step 1: Install WebSocket Dependencies
Add WebSocket support to your project:
```bash
npm init -y
npm install ws uuid
```

### Step 2: Create WebSocket Server
Create `multiplayer-server.js`:
```javascript
const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');

class MultiplayerServer {
    constructor(port = 5000) {
        this.wss = new WebSocket.Server({ host: '0.0.0.0', port });
        this.rooms = new Map();
        this.players = new Map();
        
        this.wss.on('connection', this.handleConnection.bind(this));
        console.log(`Multiplayer server running on port ${port}`);
    }

    handleConnection(ws, req) {
        const playerId = uuidv4();
        ws.playerId = playerId;
        
        ws.on('message', (data) => this.handleMessage(ws, data));
        ws.on('close', () => this.handleDisconnection(ws));
        
        this.sendToClient(ws, {
            type: 'connected',
            playerId: playerId
        });
    }

    handleMessage(ws, data) {
        try {
            const message = JSON.parse(data);
            
            switch(message.type) {
                case 'create_room':
                    this.createRoom(ws, message);
                    break;
                case 'join_room':
                    this.joinRoom(ws, message);
                    break;
                case 'leave_room':
                    this.leaveRoom(ws);
                    break;
                case 'game_action':
                    this.handleGameAction(ws, message);
                    break;
                case 'travel_request':
                    this.handleTravelRequest(ws, message);
                    break;
                case 'end_turn':
                    this.handleEndTurn(ws, message);
                    break;
            }
        } catch (error) {
            console.error('Message parsing error:', error);
        }
    }

    createRoom(ws, message) {
        const roomId = this.generateRoomCode();
        const room = {
            id: roomId,
            host: ws.playerId,
            players: new Map(),
            gameState: {
                currentTurn: ws.playerId,
                turnOrder: [ws.playerId],
                location: 'Pedena Town Square',
                turnIndex: 0
            },
            maxPlayers: 4
        };
        
        room.players.set(ws.playerId, {
            id: ws.playerId,
            name: message.playerName,
            character: message.character,
            isHost: true,
            socket: ws
        });
        
        this.rooms.set(roomId, room);
        this.players.set(ws.playerId, { roomId, socket: ws });
        
        this.sendToClient(ws, {
            type: 'room_created',
            roomId: roomId,
            isHost: true
        });
        
        this.broadcastRoomUpdate(roomId);
    }

    joinRoom(ws, message) {
        const room = this.rooms.get(message.roomId);
        
        if (!room) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'Room not found'
            });
            return;
        }
        
        if (room.players.size >= room.maxPlayers) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'Room is full'
            });
            return;
        }
        
        room.players.set(ws.playerId, {
            id: ws.playerId,
            name: message.playerName,
            character: message.character,
            isHost: false,
            socket: ws
        });
        
        room.gameState.turnOrder.push(ws.playerId);
        this.players.set(ws.playerId, { roomId: message.roomId, socket: ws });
        
        this.sendToClient(ws, {
            type: 'room_joined',
            roomId: message.roomId,
            isHost: false
        });
        
        this.broadcastRoomUpdate(message.roomId);
    }

    handleTravelRequest(ws, message) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (!room) return;
        
        // Only host can initiate travel
        if (room.host !== ws.playerId) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'Only the party leader can control travel'
            });
            return;
        }
        
        // Move entire party to new location
        room.gameState.location = message.destination;
        
        this.broadcastToRoom(playerData.roomId, {
            type: 'location_changed',
            location: message.destination,
            description: message.description
        });
    }

    handleGameAction(ws, message) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (!room) return;
        
        // Check if it's player's turn
        if (room.gameState.currentTurn !== ws.playerId) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'Not your turn'
            });
            return;
        }
        
        // Broadcast action to all players in room
        this.broadcastToRoom(playerData.roomId, {
            type: 'player_action',
            playerId: ws.playerId,
            action: message.action,
            result: message.result
        });
    }

    handleEndTurn(ws, message) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (!room) return;
        
        if (room.gameState.currentTurn !== ws.playerId) return;
        
        // Advance to next turn
        room.gameState.turnIndex = (room.gameState.turnIndex + 1) % room.gameState.turnOrder.length;
        room.gameState.currentTurn = room.gameState.turnOrder[room.gameState.turnIndex];
        
        this.broadcastToRoom(playerData.roomId, {
            type: 'turn_changed',
            currentTurn: room.gameState.currentTurn,
            turnIndex: room.gameState.turnIndex
        });
    }

    handleDisconnection(ws) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (room) {
            room.players.delete(ws.playerId);
            room.gameState.turnOrder = room.gameState.turnOrder.filter(id => id !== ws.playerId);
            
            if (room.host === ws.playerId && room.players.size > 0) {
                // Transfer host to next player
                const newHost = room.players.values().next().value;
                room.host = newHost.id;
                newHost.isHost = true;
            }
            
            if (room.players.size === 0) {
                this.rooms.delete(playerData.roomId);
            } else {
                this.broadcastRoomUpdate(playerData.roomId);
            }
        }
        
        this.players.delete(ws.playerId);
    }

    broadcastToRoom(roomId, message) {
        const room = this.rooms.get(roomId);
        if (!room) return;
        
        room.players.forEach(player => {
            this.sendToClient(player.socket, message);
        });
    }

    broadcastRoomUpdate(roomId) {
        const room = this.rooms.get(roomId);
        if (!room) return;
        
        const playerList = Array.from(room.players.values()).map(p => ({
            id: p.id,
            name: p.name,
            isHost: p.isHost
        }));
        
        this.broadcastToRoom(roomId, {
            type: 'room_update',
            players: playerList,
            gameState: room.gameState
        });
    }

    sendToClient(ws, message) {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(message));
        }
    }

    generateRoomCode() {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }
}

// Start server
const server = new MultiplayerServer(5000);
```

### Step 3: Create Client-Side WebSocket Manager
Create `game-logic/multiplayer-client.js`:
```javascript
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
                this.ws = new WebSocket('ws://localhost:5000');
                
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
                player.currentLocation = message.location;
                updatePlayerStatsDisplay();
                displayMessage(message.description, 'info');
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
                displayMessage(message.message, 'error');
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
        displayMessage('Disconnected from multiplayer server', 'error');
        this.roomId = null;
        this.isHost = false;
        this.players = [];
    }
}

// Global multiplayer client
window.multiplayerClient = new MultiplayerClient();
```

## Phase 2: UI Integration

### Step 4: Add Multiplayer UI Elements
Add to your HTML (in index.html):
```html
<!-- Multiplayer Interface -->
<div id="multiplayer-interface" class="hidden">
    <div class="interface-header">
        <h3><i class="ra ra-players mr-2"></i>Multiplayer</h3>
        <button id="exit-multiplayer-btn" class="btn-parchment">Exit</button>
    </div>
    
    <div id="multiplayer-content">
        <!-- Connection Status -->
        <div id="connection-status" class="mb-4">
            <span id="connection-indicator" class="status-disconnected">Disconnected</span>
        </div>
        
        <!-- Room Creation/Joining -->
        <div id="room-controls" class="mb-4">
            <button id="create-room-btn" class="btn-parchment mr-2">Create Room</button>
            <button id="join-room-btn" class="btn-parchment">Join Room</button>
        </div>
        
        <!-- Room Code Input -->
        <div id="room-input" class="hidden mb-4">
            <input type="text" id="room-code-input" placeholder="Enter room code" class="form-input">
            <button id="confirm-join-btn" class="btn-parchment ml-2">Join</button>
        </div>
        
        <!-- Current Room Info -->
        <div id="room-info" class="hidden">
            <h4>Room: <span id="current-room-code"></span></h4>
            <p id="host-status"></p>
            
            <!-- Player List -->
            <div id="player-list">
                <h5>Players:</h5>
                <div id="players-container"></div>
            </div>
            
            <!-- Turn Order -->
            <div id="turn-order">
                <h5>Current Turn: <span id="current-turn-player"></span></h5>
                <button id="end-turn-btn" class="btn-parchment hidden">End Turn</button>
            </div>
        </div>
    </div>
</div>
```

### Step 5: Modify Game Controls for Multiplayer
Update your script.js to integrate multiplayer:
```javascript
// Add to script.js
let isMultiplayerMode = false;

// Initialize multiplayer UI
function initializeMultiplayerUI() {
    const multiplayerBtn = document.createElement('button');
    multiplayerBtn.id = 'multiplayer-btn';
    multiplayerBtn.className = 'btn-parchment';
    multiplayerBtn.innerHTML = '<i class="ra ra-players mr-2"></i>Multiplayer';
    multiplayerBtn.onclick = toggleMultiplayerInterface;
    
    // Add to action buttons
    const actionButtons = document.querySelector('.action-buttons');
    if (actionButtons) {
        actionButtons.appendChild(multiplayerBtn);
    }
    
    setupMultiplayerEventListeners();
}

function setupMultiplayerEventListeners() {
    // Connection button
    document.getElementById('create-room-btn').onclick = createMultiplayerRoom;
    document.getElementById('join-room-btn').onclick = showJoinRoomInput;
    document.getElementById('confirm-join-btn').onclick = joinMultiplayerRoom;
    document.getElementById('end-turn-btn').onclick = endPlayerTurn;
    document.getElementById('exit-multiplayer-btn').onclick = leaveMultiplayer;
    
    // Multiplayer client callbacks
    multiplayerClient.on('roomCreated', handleRoomCreated);
    multiplayerClient.on('roomJoined', handleRoomJoined);
    multiplayerClient.on('roomUpdate', handleRoomUpdate);
    multiplayerClient.on('turnChanged', handleTurnChanged);
    multiplayerClient.on('playerAction', handlePlayerAction);
}

async function createMultiplayerRoom() {
    try {
        await multiplayerClient.connect();
        multiplayerClient.createRoom(player.name, {
            name: player.name,
            class: player.class,
            level: player.level
        });
        isMultiplayerMode = true;
    } catch (error) {
        displayMessage('Failed to connect to multiplayer server', 'error');
    }
}

function showJoinRoomInput() {
    document.getElementById('room-input').classList.remove('hidden');
}

async function joinMultiplayerRoom() {
    const roomCode = document.getElementById('room-code-input').value.trim();
    if (!roomCode) return;
    
    try {
        await multiplayerClient.connect();
        multiplayerClient.joinRoom(roomCode, player.name, {
            name: player.name,
            class: player.class,
            level: player.level
        });
        isMultiplayerMode = true;
    } catch (error) {
        displayMessage('Failed to connect to multiplayer server', 'error');
    }
}

function handleRoomCreated(data) {
    document.getElementById('current-room-code').textContent = data.roomId;
    document.getElementById('host-status').textContent = 'You are the party leader';
    document.getElementById('room-info').classList.remove('hidden');
    document.getElementById('room-controls').classList.add('hidden');
    updateConnectionStatus(true);
    displayMessage(`Room created! Share code: ${data.roomId}`, 'success');
}

function handleRoomJoined(data) {
    document.getElementById('current-room-code').textContent = data.roomId;
    document.getElementById('host-status').textContent = 'You are a party member';
    document.getElementById('room-info').classList.remove('hidden');
    document.getElementById('room-controls').classList.add('hidden');
    document.getElementById('room-input').classList.add('hidden');
    updateConnectionStatus(true);
    displayMessage(`Joined room: ${data.roomId}`, 'success');
}

function handleRoomUpdate(data) {
    updatePlayerList(data.players);
    updateTurnDisplay(data.gameState);
}

function handleTurnChanged(data) {
    updateTurnDisplay({ currentTurn: data.currentTurn });
    
    if (multiplayerClient.isMyTurn()) {
        displayMessage("It's your turn!", 'success');
        document.getElementById('end-turn-btn').classList.remove('hidden');
    } else {
        document.getElementById('end-turn-btn').classList.add('hidden');
        const currentPlayer = multiplayerClient.players.find(p => p.id === data.currentTurn);
        displayMessage(`It's ${currentPlayer?.name || 'someone'}'s turn`, 'info');
    }
}

function handlePlayerAction(data) {
    const player = multiplayerClient.players.find(p => p.id === data.playerId);
    displayMessage(`${player?.name || 'Player'} ${data.action}`, 'info');
    if (data.result) {
        displayMessage(data.result, 'info');
    }
}

function updatePlayerList(players) {
    const container = document.getElementById('players-container');
    container.innerHTML = '';
    
    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player-item';
        playerDiv.innerHTML = `
            <span>${player.name} ${player.isHost ? '👑' : ''}</span>
        `;
        container.appendChild(playerDiv);
    });
}

function updateTurnDisplay(gameState) {
    const currentPlayer = multiplayerClient.players.find(p => p.id === gameState.currentTurn);
    document.getElementById('current-turn-player').textContent = currentPlayer?.name || 'Unknown';
}

function updateConnectionStatus(connected) {
    const indicator = document.getElementById('connection-indicator');
    if (connected) {
        indicator.className = 'status-connected';
        indicator.textContent = 'Connected';
    } else {
        indicator.className = 'status-disconnected';
        indicator.textContent = 'Disconnected';
    }
}

function endPlayerTurn() {
    multiplayerClient.endTurn();
    document.getElementById('end-turn-btn').classList.add('hidden');
}

function leaveMultiplayer() {
    isMultiplayerMode = false;
    if (multiplayerClient.ws) {
        multiplayerClient.ws.close();
    }
    document.getElementById('multiplayer-interface').classList.add('hidden');
    displayMessage('Left multiplayer session', 'info');
}

function toggleMultiplayerInterface() {
    const interface = document.getElementById('multiplayer-interface');
    interface.classList.toggle('hidden');
}

// Modify existing movement function to check multiplayer
async function handleMovement(command) {
    if (isMultiplayerMode && !multiplayerClient.canControlTravel()) {
        displayMessage('Only the party leader can control travel', 'error');
        return;
    }
    
    if (isMultiplayerMode && !multiplayerClient.isMyTurn()) {
        displayMessage('Wait for your turn to act', 'error');
        return;
    }
    
    // Original movement logic...
    const result = await LocationManager.moveToLocation(player, destination);
    
    if (result.success && isMultiplayerMode) {
        multiplayerClient.requestTravel(result.newLocation, result.description);
        multiplayerClient.sendAction(`traveled to ${result.newLocation}`, result.description);
    }
}

// Modify command processing for multiplayer
async function processCommand(command) {
    if (isMultiplayerMode && !multiplayerClient.isMyTurn()) {
        displayMessage('Wait for your turn to act', 'error');
        return;
    }
    
    // Process command normally...
    const result = await originalProcessCommand(command);
    
    // Send action to other players
    if (isMultiplayerMode) {
        multiplayerClient.sendAction(command, result);
    }
    
    return result;
}

// Initialize multiplayer UI when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeMultiplayerUI();
});
```

## Phase 3: CSS Styling

### Step 6: Add Multiplayer Styles
Add to your style.css:
```css
/* Multiplayer Interface Styles */
#multiplayer-interface {
    background: linear-gradient(135deg, #2c1810, #1a0f08);
    border: 3px solid #8b6914;
    border-radius: 10px;
    padding: 20px;
    margin: 15px 0;
}

.status-connected {
    color: #28a745;
    font-weight: bold;
}

.status-disconnected {
    color: #dc3545;
    font-weight: bold;
}

.player-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 8px;
    margin: 4px 0;
    border-radius: 4px;
    border-left: 3px solid #8b6914;
}

#turn-order {
    background: rgba(0, 0, 0, 0.3);
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
}

#current-turn-player {
    color: #ffd700;
    font-weight: bold;
}

#end-turn-btn {
    background: #28a745;
    border-color: #28a745;
}

#end-turn-btn:hover {
    background: #218838;
    border-color: #218838;
}
```

## Phase 4: Server Deployment

### Step 7: Deploy WebSocket Server on Replit
1. Create a new Node.js Repl for the server
2. Upload the `multiplayer-server.js` file
3. Install dependencies: `npm install ws uuid`
4. Set the run command to: `node multiplayer-server.js`
5. The server will run on `0.0.0.0:5000`

### Step 8: Update Client Connection
Update the WebSocket connection in `multiplayer-client.js`:
```javascript
// Replace localhost with your Repl URL
this.ws = new WebSocket('wss://your-server-repl-name.your-username.repl.co');
```

## Phase 5: Testing & Integration

### Step 9: Test Multiplayer Features
1. **Room Creation**: Host creates room, gets room code
2. **Room Joining**: Other players join with room code
3. **Turn-Based Actions**: Only current player can act
4. **Travel Control**: Only host can move the party
5. **Synchronized State**: All players see the same game state

### Step 10: Additional Features to Implement
- **Chat System**: Player communication
- **Combat Coordination**: Shared combat encounters
- **Inventory Sharing**: Party-wide item management
- **Quest Synchronization**: Shared quest progress
- **Reconnection Handling**: Resume after disconnect

## Usage Instructions

1. **Host**: Click "Multiplayer" → "Create Room" → Share room code
2. **Join**: Click "Multiplayer" → "Join Room" → Enter room code
3. **Play**: Take turns, only host controls travel
4. **Leave**: Click "Exit" to leave multiplayer session

This implementation provides a solid foundation for multiplayer RPG gameplay with turn-based mechanics and party leader travel control.
