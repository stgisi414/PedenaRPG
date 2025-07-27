
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
        
        // Send location sync to joining player
        this.sendToClient(ws, {
            type: 'location_changed',
            location: room.gameState.location,
            description: `You have been moved to ${room.gameState.location} to join the party.`
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
        
        // Send location change to all players in the party
        room.players.forEach(player => {
            this.sendToClient(player.socket, {
                type: 'location_changed',
                location: message.destination,
                description: player.id === ws.playerId ? 
                    message.description : 
                    `Your party leader has moved the group to ${message.destination}. ${message.description}`
            });
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
