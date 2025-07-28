
const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle all routes by serving index.html (for single-page applications)
// Fixed the catch-all route to avoid path-to-regexp issues
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle any other routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// WebSocket Multiplayer Server
class MultiplayerServer {
    constructor(server) {
        this.wss = new WebSocket.Server({ server });
        this.rooms = new Map();
        this.players = new Map();
        this.disconnectedPlayers = new Map();
        
        this.wss.on('connection', this.handleConnection.bind(this));
        
        // Start heartbeat interval
        this.startHeartbeat();
        
        // Clean up disconnected players after 60 seconds
        this.startCleanupInterval();
        
        console.log('Multiplayer WebSocket server initialized');
    }

    handleConnection(ws, req) {
        const playerId = uuidv4();
        ws.playerId = playerId;
        ws.isAlive = true;
        ws.lastPong = Date.now();
        ws.currentZone = null;
        
        ws.on('message', (data) => this.handleMessage(ws, data));
        ws.on('close', () => this.handleDisconnection(ws));
        ws.on('pong', () => {
            ws.isAlive = true;
            ws.lastPong = Date.now();
        });
        
        this.sendToClient(ws, {
            type: 'connected',
            playerId: playerId
        });
    }

    startHeartbeat() {
        setInterval(() => {
            this.wss.clients.forEach((ws) => {
                if (ws.isAlive === false) {
                    console.log(`Terminating dead connection: ${ws.playerId}`);
                    return ws.terminate();
                }
                
                ws.isAlive = false;
                ws.ping();
            });
        }, 30000);
    }

    startCleanupInterval() {
        setInterval(() => {
            const now = Date.now();
            const cleanupTime = 60000;
            
            for (const [playerId, disconnectedData] of this.disconnectedPlayers.entries()) {
                if (now - disconnectedData.disconnectedAt > cleanupTime) {
                    console.log(`Cleaning up permanently disconnected player: ${playerId}`);
                    this.permanentlyRemovePlayer(playerId);
                }
            }
        }, 30000);
    }

    handleMessage(ws, data) {
        try {
            const message = JSON.parse(data);
            console.log(`[MULTIPLAYER SERVER] *** MESSAGE RECEIVED ***`);
            console.log(`[MULTIPLAYER SERVER] Message type: ${message.type}`);
            console.log(`[MULTIPLAYER SERVER] Full message:`, message);
            
            switch(message.type) {
                case 'create_room':
                    this.createRoom(ws, message);
                    break;
                case 'join_room':
                    this.joinRoom(ws, message);
                    break;
                case 'reconnect':
                    this.handleReconnection(ws, message);
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
                case 'player_move':
                    this.handlePlayerMove(ws, message);
                    break;
                case 'zone_chat':
                    this.handleZoneChat(ws, message);
                    break;
                case 'request_location_sync':
                    this.handleLocationSyncRequest(ws, message);
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
            socket: ws,
            currentZone: room.gameState.location
        });
        
        ws.currentZone = room.gameState.location;
        
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
        console.log(`[MULTIPLAYER SERVER] *** JOIN ROOM FUNCTION CALLED ***`);
        console.log(`[MULTIPLAYER SERVER] Player ${message.playerName} (${ws.playerId}) attempting to join room ${message.roomId}`);
        console.log(`[MULTIPLAYER SERVER] Available rooms:`, Array.from(this.rooms.keys()));
        
        const room = this.rooms.get(message.roomId);
        
        if (!room) {
            console.log(`[MULTIPLAYER SERVER] ERROR: Room ${message.roomId} not found`);
            this.sendToClient(ws, {
                type: 'error',
                message: 'Room not found'
            });
            return;
        }
        
        console.log(`[MULTIPLAYER SERVER] Room ${message.roomId} found with ${room.players.size} players, location: ${room.gameState.location}`);
        
        if (room.players.size >= room.maxPlayers) {
            console.log(`[MULTIPLAYER SERVER] ERROR: Room ${message.roomId} is full`);
            this.sendToClient(ws, {
                type: 'error',
                message: 'Room is full'
            });
            return;
        }
        
        const playerData = {
            id: ws.playerId,
            name: message.playerName,
            character: message.character,
            isHost: false,
            socket: ws,
            currentZone: room.gameState.location
        };
        
        console.log(`[MULTIPLAYER SERVER] Adding player ${message.playerName} to room ${message.roomId} with location: ${room.gameState.location}`);
        room.players.set(ws.playerId, playerData);
        
        ws.currentZone = room.gameState.location;
        console.log(`[MULTIPLAYER SERVER] Set player ${message.playerName} currentZone to: ${ws.currentZone}`);
        
        room.gameState.turnOrder.push(ws.playerId);
        this.players.set(ws.playerId, { roomId: message.roomId, socket: ws });
        
        console.log(`[MULTIPLAYER SERVER] Sending room_joined confirmation to ${message.playerName}`);
        this.sendToClient(ws, {
            type: 'room_joined',
            roomId: message.roomId,
            isHost: false
        });
        
        console.log(`[MULTIPLAYER SERVER] Broadcasting room update for room ${message.roomId}`);
        this.broadcastRoomUpdate(message.roomId);
        
        // SINGLE LOCATION SYNC - Send one clear location update
        console.log(`[MULTIPLAYER SERVER] *** SENDING SINGLE LOCATION SYNC ***`);
        console.log(`[MULTIPLAYER SERVER] Syncing ${message.playerName} to room location: ${room.gameState.location}`);
        
        this.sendToClient(ws, {
            type: 'location_changed',
            location: room.gameState.location,
            description: `You have joined the party and traveled to ${room.gameState.location}`,
            playerId: ws.playerId,
            playerName: message.playerName,
            forceSync: true
        });
    }

    handleTravelRequest(ws, message) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) {
            console.log(`[MULTIPLAYER SERVER] ERROR: Player data not found for ${ws.playerId}`);
            return;
        }
        
        const room = this.rooms.get(playerData.roomId);
        if (!room) {
            console.log(`[MULTIPLAYER SERVER] ERROR: Room not found for ${playerData.roomId}`);
            return;
        }
        
        if (room.host !== ws.playerId) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'Only the party leader can control travel'
            });
            return;
        }
        
        const oldZone = room.gameState.location;
        const newZone = message.destination;
        
        console.log(`[MULTIPLAYER SERVER] *** HOST TRAVEL REQUEST ***`);
        console.log(`[MULTIPLAYER SERVER] Host ${ws.playerId} traveling from ${oldZone} to ${newZone}`);
        console.log(`[MULTIPLAYER SERVER] Party has ${room.players.size} members`);
        
        // Update room location FIRST
        room.gameState.location = newZone;
        console.log(`[MULTIPLAYER SERVER] Room location updated to: ${room.gameState.location}`);
        
        // Get list of all players to update
        const playersToUpdate = Array.from(room.players.values());
        console.log(`[MULTIPLAYER SERVER] Players to update:`, playersToUpdate.map(p => p.name));
        
        // Update all party members and notify them
        playersToUpdate.forEach(player => {
            try {
                console.log(`[MULTIPLAYER SERVER] Processing player ${player.name} (${player.id})`);
                
                // Update player's zone
                player.currentZone = newZone;
                if (player.socket) {
                    player.socket.currentZone = newZone;
                }
                
                // Create location message
                const isHost = player.id === ws.playerId;
                const locationMessage = {
                    type: 'location_changed',
                    location: newZone,
                    oldZone: oldZone,
                    description: isHost ? 
                        message.description : 
                        `Your party leader has moved the group to ${newZone}. ${message.description}`,
                    playerId: player.id,
                    playerName: player.name,
                    isHostTravel: true,
                    timestamp: Date.now()
                };
                
                console.log(`[MULTIPLAYER SERVER] Sending location update to ${player.name}:`, locationMessage);
                
                // Send location change with error handling
                if (player.socket && player.socket.readyState === 1) { // WebSocket.OPEN = 1
                    this.sendToClient(player.socket, locationMessage);
                    console.log(`[MULTIPLAYER SERVER] ✓ Location update sent to ${player.name}`);
                } else {
                    console.log(`[MULTIPLAYER SERVER] ⚠️ Player ${player.name} socket not ready, state: ${player.socket?.readyState}`);
                }
                
            } catch (error) {
                console.error(`[MULTIPLAYER SERVER] Error updating player ${player.name}:`, error);
            }
        });
        
        // Broadcast room update to ensure everyone has the latest state
        setTimeout(() => {
            console.log(`[MULTIPLAYER SERVER] Broadcasting room update after travel`);
            this.broadcastRoomUpdate(playerData.roomId);
        }, 100);
        
        console.log(`[MULTIPLAYER SERVER] *** HOST TRAVEL COMPLETED ***`);
    }

    handleGameAction(ws, message) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (!room) return;
        
        const player = room.players.get(ws.playerId);
        if (!player) return;
        
        if (room.gameState.currentTurn !== ws.playerId) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'Not your turn'
            });
            return;
        }
        
        const actionScope = message.scope || 'zone';
        
        if (actionScope === 'room') {
            this.broadcastToRoom(playerData.roomId, {
                type: 'player_action',
                playerId: ws.playerId,
                action: message.action,
                result: message.result,
                scope: 'room'
            });
        } else {
            this.broadcastToZone(playerData.roomId, player.currentZone, {
                type: 'player_action',
                playerId: ws.playerId,
                action: message.action,
                result: message.result,
                zone: player.currentZone,
                scope: 'zone'
            });
        }
    }

    handleEndTurn(ws, message) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (!room) return;
        
        if (room.gameState.currentTurn !== ws.playerId) return;
        
        room.gameState.turnIndex = (room.gameState.turnIndex + 1) % room.gameState.turnOrder.length;
        room.gameState.currentTurn = room.gameState.turnOrder[room.gameState.turnIndex];
        
        this.broadcastToRoom(playerData.roomId, {
            type: 'turn_changed',
            currentTurn: room.gameState.currentTurn,
            turnIndex: room.gameState.turnIndex
        });
    }

    handlePlayerMove(ws, message) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (!room) return;
        
        const player = room.players.get(ws.playerId);
        if (!player) return;
        
        const oldZone = player.currentZone;
        const newZone = message.destination;
        
        player.currentZone = newZone;
        ws.currentZone = newZone;
        
        this.sendToClient(ws, {
            type: 'player_moved',
            location: newZone,
            oldZone: oldZone,
            description: message.description
        });
    }

    handleZoneChat(ws, message) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (!room) return;
        
        const player = room.players.get(ws.playerId);
        if (!player) return;
        
        this.broadcastToZone(playerData.roomId, player.currentZone, {
            type: 'zone_chat',
            playerId: ws.playerId,
            playerName: player.name,
            message: message.text,
            zone: player.currentZone
        });
    }

    handleLocationSyncRequest(ws, message) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (!room) return;
        
        const player = room.players.get(ws.playerId);
        if (!player) return;
        
        console.log(`[MULTIPLAYER SERVER] Location sync requested by ${player.name}, sending current location: ${room.gameState.location}`);
        
        this.sendToClient(ws, {
            type: 'location_changed',
            location: room.gameState.location,
            description: `Location synchronized to ${room.gameState.location}`,
            timestamp: Date.now(),
            playerId: ws.playerId,
            playerName: player.name
        });
    }

    handleReconnection(ws, message) {
        const { playerName, sessionToken } = message;
        
        const disconnectedData = this.disconnectedPlayers.get(sessionToken);
        if (!disconnectedData) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'No recent session found. Please join a room normally.'
            });
            return;
        }
        
        const room = this.rooms.get(disconnectedData.roomId);
        if (!room) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'Room no longer exists'
            });
            this.disconnectedPlayers.delete(sessionToken);
            return;
        }
        
        ws.playerId = sessionToken;
        disconnectedData.playerData.socket = ws;
        
        room.players.set(sessionToken, disconnectedData.playerData);
        this.players.set(sessionToken, { roomId: disconnectedData.roomId, socket: ws });
        
        this.disconnectedPlayers.delete(sessionToken);
        
        this.sendToClient(ws, {
            type: 'reconnected',
            roomId: disconnectedData.roomId,
            isHost: disconnectedData.playerData.isHost,
            message: 'Successfully reconnected to your previous session'
        });
        
        this.sendToClient(ws, {
            type: 'location_changed',
            location: room.gameState.location,
            description: `You have reconnected and are back in ${room.gameState.location}.`
        });
        
        this.broadcastRoomUpdate(disconnectedData.roomId);
        console.log(`Player ${playerName} successfully reconnected`);
    }

    handleDisconnection(ws) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (room) {
            const player = room.players.get(ws.playerId);
            if (player) {
                this.disconnectedPlayers.set(ws.playerId, {
                    playerData: {
                        ...player,
                        socket: null
                    },
                    roomId: playerData.roomId,
                    disconnectedAt: Date.now()
                });
                
                room.players.delete(ws.playerId);
                room.gameState.turnOrder = room.gameState.turnOrder.filter(id => id !== ws.playerId);
                
                if (room.host === ws.playerId && room.players.size > 0) {
                    const newHost = room.players.values().next().value;
                    room.host = newHost.id;
                    newHost.isHost = true;
                }
                
                this.broadcastToRoom(playerData.roomId, {
                    type: 'player_disconnected',
                    playerId: ws.playerId,
                    playerName: player.name,
                    message: `${player.name} has disconnected and may reconnect soon.`
                });
                
                if (room.players.size === 0) {
                    this.rooms.delete(playerData.roomId);
                } else {
                    this.broadcastRoomUpdate(playerData.roomId);
                }
                
                console.log(`Player ${player.name} temporarily disconnected, stored for potential reconnection`);
            }
        }
        
        this.players.delete(ws.playerId);
    }

    permanentlyRemovePlayer(playerId) {
        const disconnectedData = this.disconnectedPlayers.get(playerId);
        if (disconnectedData) {
            const room = this.rooms.get(disconnectedData.roomId);
            if (room) {
                this.broadcastToRoom(disconnectedData.roomId, {
                    type: 'player_permanently_left',
                    playerId: playerId,
                    playerName: disconnectedData.playerData.name,
                    message: `${disconnectedData.playerData.name} has permanently left the game.`
                });
            }
            this.disconnectedPlayers.delete(playerId);
        }
    }

    broadcastToRoom(roomId, message) {
        const room = this.rooms.get(roomId);
        if (!room) return;
        
        room.players.forEach(player => {
            this.sendToClient(player.socket, message);
        });
    }

    broadcastToZone(roomId, zone, message, excludePlayerId = null) {
        const room = this.rooms.get(roomId);
        if (!room) return;
        
        room.players.forEach(player => {
            if (player.currentZone === zone && player.id !== excludePlayerId) {
                this.sendToClient(player.socket, message);
            }
        });
    }

    broadcastToPlayer(playerId, message) {
        const playerData = this.players.get(playerId);
        if (playerData && playerData.socket) {
            this.sendToClient(playerData.socket, message);
        }
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
            try {
                const messageStr = JSON.stringify(message);
                ws.send(messageStr);
                
                console.log(`[MULTIPLAYER SERVER] *** MESSAGE SENT SUCCESSFULLY ***`);
                console.log(`[MULTIPLAYER SERVER] Message type: ${message.type}`);
                console.log(`[MULTIPLAYER SERVER] Player: ${ws.playerId}`);
                
                if (message.type === 'location_changed' || message.type === 'force_travel_command') {
                    console.log(`[MULTIPLAYER SERVER] *** CRITICAL MESSAGE SENT ***`);
                    console.log(`[MULTIPLAYER SERVER] Type: ${message.type}`);
                    console.log(`[MULTIPLAYER SERVER] Location/Destination: ${message.location || message.destination}`);
                    console.log(`[MULTIPLAYER SERVER] Full message:`, message);
                }
            } catch (error) {
                console.error(`[MULTIPLAYER SERVER] *** CRITICAL ERROR SENDING MESSAGE ***`);
                console.error(`[MULTIPLAYER SERVER] Error:`, error);
                console.error(`[MULTIPLAYER SERVER] Message type: ${message.type}`);
                console.error(`[MULTIPLAYER SERVER] Player: ${ws.playerId}`);
                console.error(`[MULTIPLAYER SERVER] Message:`, message);
            }
        } else {
            console.error(`[MULTIPLAYER SERVER] *** WEBSOCKET NOT OPEN ***`);
            console.error(`[MULTIPLAYER SERVER] Player: ${ws.playerId}`);
            console.error(`[MULTIPLAYER SERVER] State: ${ws.readyState}`);
            console.error(`[MULTIPLAYER SERVER] Message type: ${message.type}`);
        }
    }

    generateRoomCode() {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }
}

// Initialize multiplayer server
const multiplayerServer = new MultiplayerServer(server);

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
  console.log('Your RPG game is now available!');
  console.log('Multiplayer WebSocket server is ready!');
});
