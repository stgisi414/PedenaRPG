
const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');

class MultiplayerServer {
    constructor(port = 5000) {
        this.wss = new WebSocket.Server({ host: '0.0.0.0', port });
        this.rooms = new Map();
        this.players = new Map();
        this.disconnectedPlayers = new Map(); // Store temporarily disconnected players
        
        this.wss.on('connection', this.handleConnection.bind(this));
        
        // Start heartbeat interval
        this.startHeartbeat();
        
        // Clean up disconnected players after 60 seconds
        this.startCleanupInterval();
        
        console.log(`Multiplayer server running on port ${port}`);
    }

    handleConnection(ws, req) {
        const playerId = uuidv4();
        ws.playerId = playerId;
        ws.isAlive = true;
        ws.lastPong = Date.now();
        ws.currentZone = null; // Track player's current zone
        
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
                
                // Mark as potentially dead and ping
                ws.isAlive = false;
                ws.ping();
            });
        }, 30000); // Check every 30 seconds
    }

    startCleanupInterval() {
        setInterval(() => {
            const now = Date.now();
            const cleanupTime = 60000; // 60 seconds
            
            for (const [playerId, disconnectedData] of this.disconnectedPlayers.entries()) {
                if (now - disconnectedData.disconnectedAt > cleanupTime) {
                    console.log(`Cleaning up permanently disconnected player: ${playerId}`);
                    this.permanentlyRemovePlayer(playerId);
                }
            }
        }, 30000); // Check every 30 seconds
    }

    handleMessage(ws, data) {
        try {
            const message = JSON.parse(data);
            console.log(`[MULTIPLAYER SERVER] *** MESSAGE RECEIVED ***`);
            console.log(`[MULTIPLAYER SERVER] Message type: ${message.type}`);
            console.log(`[MULTIPLAYER SERVER] Full message:`, message);
            
            // IMMEDIATE TEST - Send a test message back to prove server is processing
            this.sendToClient(ws, {
                type: 'test_connectivity',
                originalMessageType: message.type,
                serverReceived: true,
                timestamp: Date.now()
            });
            
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
        
        // Set player's zone
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
            console.log(`[MULTIPLAYER SERVER] ERROR: Room ${message.roomId} is full (${room.players.size}/${room.maxPlayers})`);
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
        
        // Set player's zone
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
        
        // IMMEDIATE DEBUG - Let's see if we even get to this point
        console.log(`[MULTIPLAYER SERVER] *** REACHED LOCATION SYNC CODE ***`);
        console.log(`[MULTIPLAYER SERVER] Player ${message.playerName} joining room with location: ${room.gameState.location}`);
        console.log(`[MULTIPLAYER SERVER] WebSocket ready state: ${ws.readyState}`);
        console.log(`[MULTIPLAYER SERVER] Current time: ${Date.now()}`);
        
        // IMMEDIATE LOCATION SYNC - Send right away without delay
        console.log(`[MULTIPLAYER SERVER] *** SENDING IMMEDIATE LOCATION SYNC ***`);
        
        const travelMessage = {
            type: 'force_travel_command',
            command: `travel to ${room.gameState.location}`,
            destination: room.gameState.location,
            description: `You have joined the party and traveled to ${room.gameState.location}`,
            playerId: ws.playerId,
            playerName: message.playerName,
            forceSync: true,
            immediate: true
        };
        
        console.log(`[MULTIPLAYER SERVER] *** SENDING TRAVEL MESSAGE IMMEDIATELY ***`, travelMessage);
        this.sendToClient(ws, travelMessage);
        
        const locationMessage = {
            type: 'location_changed',
            location: room.gameState.location,
            description: `Location synchronized to party location: ${room.gameState.location}`,
            playerId: ws.playerId,
            isBackupSync: true,
            immediate: true
        };
        
        console.log(`[MULTIPLAYER SERVER] *** SENDING LOCATION MESSAGE IMMEDIATELY ***`, locationMessage);
        this.sendToClient(ws, locationMessage);
        
        // Also try with delays as backup
        const locationSyncAttempts = [100, 500, 1000];
        locationSyncAttempts.forEach((delay, index) => {
            setTimeout(() => {
                console.log(`[MULTIPLAYER SERVER] *** DELAYED SYNC ATTEMPT ${index + 1} ***`);
                this.sendToClient(ws, {
                    ...travelMessage,
                    attempt: index + 1,
                    immediate: false
                });
                this.sendToClient(ws, {
                    ...locationMessage,
                    attempt: index + 1,
                    immediate: false
                });
            }, delay);
        });
    }

    handleReconnection(ws, message) {
        const { playerName, sessionToken } = message;
        
        // Check if this player was recently disconnected
        const disconnectedData = this.disconnectedPlayers.get(sessionToken);
        if (!disconnectedData) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'No recent session found. Please join a room normally.'
            });
            return;
        }
        
        // Restore player state
        const room = this.rooms.get(disconnectedData.roomId);
        if (!room) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'Room no longer exists'
            });
            this.disconnectedPlayers.delete(sessionToken);
            return;
        }
        
        // Update WebSocket connection
        ws.playerId = sessionToken;
        disconnectedData.playerData.socket = ws;
        
        // Restore player to room
        room.players.set(sessionToken, disconnectedData.playerData);
        this.players.set(sessionToken, { roomId: disconnectedData.roomId, socket: ws });
        
        // Remove from disconnected list
        this.disconnectedPlayers.delete(sessionToken);
        
        this.sendToClient(ws, {
            type: 'reconnected',
            roomId: disconnectedData.roomId,
            isHost: disconnectedData.playerData.isHost,
            message: 'Successfully reconnected to your previous session'
        });
        
        // Send current location
        this.sendToClient(ws, {
            type: 'location_changed',
            location: room.gameState.location,
            description: `You have reconnected and are back in ${room.gameState.location}.`
        });
        
        this.broadcastRoomUpdate(disconnectedData.roomId);
        console.log(`Player ${playerName} successfully reconnected`);
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
        
        const oldZone = room.gameState.location;
        const newZone = message.destination;
        
        console.log(`[MULTIPLAYER SERVER] *** HOST TRAVEL REQUEST ***`);
        console.log(`[MULTIPLAYER SERVER] Host ${playerData.socket.playerId} moving party from ${oldZone} to ${newZone}`);
        
        // Update room location
        room.gameState.location = newZone;
        
        // Update all players' zones and FORCE them to follow
        room.players.forEach(player => {
            // Update player's zone
            player.currentZone = newZone;
            player.socket.currentZone = newZone;
            
            if (player.id === ws.playerId) {
                // Host gets normal travel confirmation
                this.sendToClient(player.socket, {
                    type: 'location_changed',
                    location: newZone,
                    oldZone: oldZone,
                    description: message.description,
                    isHostTravel: true,
                    playerId: player.id
                });
            } else {
                // Non-hosts get FORCED to follow
                console.log(`[MULTIPLAYER SERVER] FORCING player ${player.name} to follow to ${newZone}`);
                this.sendToClient(player.socket, {
                    type: 'location_changed',
                    location: newZone,
                    oldZone: oldZone,
                    description: `🚀 PARTY TRAVEL: Your party leader has moved the group to ${newZone}. ${message.description}`,
                    isHostTravel: true,
                    forced: true,
                    playerId: player.id
                });
            }
        });
        
        console.log(`[MULTIPLAYER SERVER] *** PARTY TRAVEL COMPLETED ***`);
    }

    handleGameAction(ws, message) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (!room) return;
        
        const player = room.players.get(ws.playerId);
        if (!player) return;
        
        // Check if it's player's turn
        if (room.gameState.currentTurn !== ws.playerId) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'Not your turn'
            });
            return;
        }
        
        // Determine if action should be broadcast to zone or entire room
        const actionScope = message.scope || 'zone'; // 'zone' or 'room'
        
        if (actionScope === 'room') {
            // Broadcast to entire room (for important events)
            this.broadcastToRoom(playerData.roomId, {
                type: 'player_action',
                playerId: ws.playerId,
                action: message.action,
                result: message.result,
                scope: 'room'
            });
        } else {
            // Broadcast only to players in the same zone
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
        
        // Advance to next turn
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
        
        // Update player's zone
        player.currentZone = newZone;
        ws.currentZone = newZone;
        
        // Notify player of successful move
        this.sendToClient(ws, {
            type: 'player_moved',
            location: newZone,
            oldZone: oldZone,
            description: message.description
        });
        
        // Notify old zone that player left
        if (oldZone !== newZone) {
            this.broadcastToZone(playerData.roomId, oldZone, {
                type: 'player_left_zone',
                playerId: ws.playerId,
                playerName: player.name,
                destination: newZone
            }, ws.playerId);
            
            // Notify new zone that player arrived
            this.broadcastToZone(playerData.roomId, newZone, {
                type: 'player_entered_zone',
                playerId: ws.playerId,
                playerName: player.name,
                origin: oldZone
            }, ws.playerId);
        }
    }

    handleZoneChat(ws, message) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (!room) return;
        
        const player = room.players.get(ws.playerId);
        if (!player) return;
        
        // Broadcast chat message only to players in the same zone
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
        
        // Send current room location to requesting player
        this.sendToClient(ws, {
            type: 'location_changed',
            location: room.gameState.location,
            description: `Location synchronized to ${room.gameState.location}`,
            timestamp: Date.now(),
            playerId: ws.playerId,
            playerName: player.name
        });
    }

    handleDisconnection(ws) {
        const playerData = this.players.get(ws.playerId);
        if (!playerData) return;
        
        const room = this.rooms.get(playerData.roomId);
        if (room) {
            const player = room.players.get(ws.playerId);
            if (player) {
                // Store disconnected player data for potential reconnection
                this.disconnectedPlayers.set(ws.playerId, {
                    playerData: {
                        ...player,
                        socket: null // Clear the old socket
                    },
                    roomId: playerData.roomId,
                    disconnectedAt: Date.now()
                });
                
                // Temporarily remove from active room
                room.players.delete(ws.playerId);
                room.gameState.turnOrder = room.gameState.turnOrder.filter(id => id !== ws.playerId);
                
                // Handle host transfer if needed
                if (room.host === ws.playerId && room.players.size > 0) {
                    const newHost = room.players.values().next().value;
                    room.host = newHost.id;
                    newHost.isHost = true;
                }
                
                // Broadcast disconnection message
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

// Start server
const server = new MultiplayerServer(5000);
