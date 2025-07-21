
// Game State Management Module
export class GameState {
    constructor() {
        this.player = {
            name: '',
            gender: '',
            class: '',
            background: '',
            stats: {
                strength: 0,
                dexterity: 0,
                intelligence: 0,
                constitution: 0,
                wisdom: 0,
                charisma: 0
            },
            hp: 100,
            maxHp: 100,
            level: 1,
            exp: 0,
            expToNextLevel: 100,
            gold: 50,
            inventory: [],
            equipment: {
                head: null,
                chest: null,
                hands: null,
                legs: null,
                feet: null,
                mainHand: null,
                offHand: null,
                amulet: null,
                ring1: null,
                ring2: null,
                back: null
            },
            skills: [],
            abilities: [],
            quests: [],
            relationships: {},
            currentLocation: 'Pedena Town Square',
            currentEnemy: null,
            alignment: null
        };

        this.gameWorld = {
            npcs: new Map(),
            locationMemory: new Map(),
            lastNPCInteraction: null,
            time: new Date(864, 5, 12, 8, 0, 0),
            activeEvents: []
        };

        this.conversationHistory = {
            messages: [],
            maxMessages: 75
        };

        this.gameSettings = {
            apiKey: '',
            model: ''
        };

        this.isIllustrationModeActive = false;
        this.userInputCounterForImage = 0;
        this.richTextEnabled = localStorage.getItem('richTextEnabled') === 'true';

        // Pagination states
        this.questPagination = {
            completedQuestsPage: 0,
            itemsPerPage: 5
        };

        this.inventoryPagination = {
            currentPage: 0,
            itemsPerPage: 5
        };

        // Exploration context
        this.currentExplorationContext = {
            discoveries: [],
            activeElements: [],
            lastExploration: null
        };
    }

    getPlayer() {
        return this.player;
    }

    setPlayer(playerData) {
        this.player = { ...this.player, ...playerData };
    }

    updatePlayerStats(updates) {
        this.player = { ...this.player, ...updates };
    }

    getGameWorld() {
        return this.gameWorld;
    }

    getConversationHistory() {
        return this.conversationHistory;
    }

    addToConversationHistory(role, content) {
        this.conversationHistory.messages.push({
            role: role,
            content: content,
            timestamp: Date.now()
        });

        if (this.conversationHistory.messages.length > this.conversationHistory.maxMessages) {
            this.conversationHistory.messages = this.conversationHistory.messages.slice(-this.conversationHistory.maxMessages);
        }
    }

    getConversationContext() {
        const recentMessages = this.conversationHistory.messages.slice(-20);
        return recentMessages.map(msg =>
            `${msg.role === 'user' ? 'Player' : 'DM'}: ${msg.content}`
        ).join('\n');
    }

    saveConversationHistory() {
        localStorage.setItem('pedenaConversationHistory', JSON.stringify(this.conversationHistory));
    }

    loadConversationHistory() {
        const saved = localStorage.getItem('pedenaConversationHistory');
        if (saved) {
            this.conversationHistory = JSON.parse(saved);
            if (!this.conversationHistory.maxMessages) {
                this.conversationHistory.maxMessages = 75;
            }
        }
    }

    validateAndFixStats(player = this.player) {
        const minStatValue = 10;
        let statsFixed = false;

        if (!player.stats) {
            player.stats = {
                strength: minStatValue,
                dexterity: minStatValue,
                intelligence: minStatValue,
                constitution: minStatValue,
                wisdom: minStatValue,
                charisma: minStatValue
            };
            statsFixed = true;
            console.log('Created missing stats object with default values');
        } else {
            const statNames = ['strength', 'dexterity', 'intelligence', 'constitution', 'wisdom', 'charisma'];
            statNames.forEach(statName => {
                if (typeof player.stats[statName] !== 'number' || player.stats[statName] < minStatValue) {
                    const oldValue = player.stats[statName];
                    player.stats[statName] = minStatValue;
                    statsFixed = true;
                    console.log(`Fixed ${statName}: ${oldValue} -> ${minStatValue}`);
                }
            });
        }

        return statsFixed;
    }

    autoFixStatsInStorage() {
        try {
            if (this.player && this.validateAndFixStats(this.player)) {
                console.log('Stats were fixed for current player');
            }

            const savedGame = localStorage.getItem('pedenaRPGSave');
            if (savedGame) {
                const saveData = JSON.parse(savedGame);
                let saveDataModified = false;

                if (saveData.player) {
                    if (this.validateAndFixStats(saveData.player)) {
                        saveDataModified = true;
                        console.log('Fixed stats in saved game data');
                    }
                } else if (saveData.stats) {
                    const tempPlayer = { stats: saveData.stats };
                    if (this.validateAndFixStats(tempPlayer)) {
                        saveData.stats = tempPlayer.stats;
                        saveDataModified = true;
                        console.log('Fixed stats in old save format');
                    }
                }

                if (saveDataModified) {
                    localStorage.setItem('pedenaRPGSave', JSON.stringify(saveData));
                    console.log('Updated saved game with fixed stats');
                }
            }

            if (this.player && this.player.name) {
                const progressionData = localStorage.getItem(`progression_${this.player.name}`);
                if (progressionData) {
                    const progData = JSON.parse(progressionData);
                    if (progData.stats) {
                        const tempPlayer = { stats: progData.stats };
                        if (this.validateAndFixStats(tempPlayer)) {
                            progData.stats = tempPlayer.stats;
                            localStorage.setItem(`progression_${this.player.name}`, JSON.stringify(progData));
                            console.log('Fixed stats in character progression data');
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error during stats validation:', error);
        }
    }

    saveGame() {
        if (!confirm("Are you sure you want to save your game? This will overwrite any existing save.")) {
            return;
        }

        if (this.validateAndFixStats(this.player)) {
            console.log("Fixed stats before saving");
        }

        const saveData = {
            player: this.player,
            gameWorld: {
                npcs: Array.from(this.gameWorld.npcs.entries()),
                locationMemory: Array.from(this.gameWorld.locationMemory.entries()),
                lastNPCInteraction: this.gameWorld.lastNPCInteraction,
                time: this.gameWorld.time,
                activeEvents: this.gameWorld.activeEvents
            },
            conversationHistory: this.conversationHistory
        };

        localStorage.setItem('pedenaRPGSave', JSON.stringify(saveData));
        this.saveConversationHistory();
        console.log('Game saved successfully');
        return true;
    }

    loadGame() {
        const savedGame = localStorage.getItem('pedenaRPGSave');
        if (savedGame) {
            const saveData = JSON.parse(savedGame);
            
            if (saveData.player) {
                this.player = saveData.player;
                
                if (saveData.gameWorld) {
                    this.gameWorld.npcs = new Map(saveData.gameWorld.npcs || []);
                    this.gameWorld.locationMemory = new Map(saveData.gameWorld.locationMemory || []);
                    this.gameWorld.lastNPCInteraction = saveData.gameWorld.lastNPCInteraction || null;
                    this.gameWorld.time = saveData.gameWorld.time ? new Date(saveData.gameWorld.time) : new Date(864, 5, 12, 8, 0, 0);
                    this.gameWorld.activeEvents = saveData.gameWorld.activeEvents || [];
                }

                if (saveData.conversationHistory) {
                    this.conversationHistory = saveData.conversationHistory;
                    if (!this.conversationHistory.maxMessages) {
                        this.conversationHistory.maxMessages = 75;
                    }
                } else {
                    this.loadConversationHistory();
                }
            } else {
                this.player = saveData;
                this.loadConversationHistory();
            }

            if (this.validateAndFixStats(this.player)) {
                console.log('Character stats have been automatically corrected');
                this.saveGame();
            }

            console.log('Game loaded successfully');
            return true;
        }
        
        console.log('No saved game found');
        return false;
    }

    updateGold(amount, reason = '') {
        const oldGold = this.player.gold;
        this.player.gold = Math.max(0, this.player.gold + Number(amount));
        
        console.log(`Gold updated: ${oldGold} -> ${this.player.gold} (${amount >= 0 ? '+' : ''}${amount}) - ${reason}`);
        
        return {
            oldGold,
            newGold: this.player.gold,
            actualChange: this.player.gold - oldGold
        };
    }

    gainExperience(amount) {
        if (!amount || amount <= 0) return false;

        this.player.exp = (this.player.exp || 0) + amount;
        let leveledUp = false;

        while (this.player.exp >= this.player.expToNextLevel) {
            this.player.exp -= this.player.expToNextLevel;
            this.player.level++;
            this.player.maxHp += 10;
            this.player.hp = this.player.maxHp;
            this.player.expToNextLevel = Math.floor(this.player.expToNextLevel * 1.5);
            leveledUp = true;
            console.log(`Player leveled up to ${this.player.level}`);
        }

        return leveledUp;
    }

    // NPC Management
    createNPC(name, description, location) {
        return {
            id: `npc_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            name: name,
            description: description,
            location: location,
            dialogueHistory: [],
            lastSeen: Date.now(),
            relationship: 'neutral'
        };
    }

    saveNPCToLocation(npc, location) {
        if (!this.gameWorld.npcs.has(location)) {
            this.gameWorld.npcs.set(location, []);
        }
        const locationNPCs = this.gameWorld.npcs.get(location);
        const existingIndex = locationNPCs.findIndex(n => n.name === npc.name);
        if (existingIndex >= 0) {
            locationNPCs[existingIndex] = npc;
        } else {
            locationNPCs.push(npc);
        }
    }

    getNPCsInLocation(location) {
        return this.gameWorld.npcs.get(location) || [];
    }

    // Relationship Management
    updateRelationship(npcName, statusChange = 0, trustChange = 0, npcDescription = null, forceCreate = false) {
        if (!this.player.relationships) {
            this.player.relationships = {};
        }

        if (!this.player.relationships[npcName]) {
            if (!forceCreate) {
                return null;
            }

            const baseTrust = 50;
            this.player.relationships[npcName] = {
                status: 'neutral',
                trust: Math.max(0, Math.min(100, baseTrust)),
                interactions: 0,
                lastInteraction: Date.now(),
                metAt: this.player.currentLocation,
                description: npcDescription || "A person you've encountered in your travels.",
                firstMeeting: new Date().toLocaleDateString()
            };
        }

        const relationship = this.player.relationships[npcName];
        if (!relationship) return;

        relationship.trust = Math.max(0, Math.min(100, relationship.trust + trustChange));
        relationship.interactions++;
        relationship.lastInteraction = Date.now();

        if (npcDescription && relationship.description !== npcDescription) {
            relationship.description = npcDescription;
        }

        const oldStatus = relationship.status;
        if (relationship.trust >= 80) relationship.status = 'allied';
        else if (relationship.trust >= 60) relationship.status = 'friendly';
        else if (relationship.trust >= 40) relationship.status = 'neutral';
        else if (relationship.trust >= 20) relationship.status = 'unfriendly';
        else relationship.status = 'hostile';

        return {
            relationship,
            statusChanged: oldStatus !== relationship.status
        };
    }

    // Settings Management
    saveSettings() {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('pedenaGameSettings', JSON.stringify(this.gameSettings));
        }
    }

    loadSettings() {
        if (typeof localStorage !== 'undefined') {
            const savedSettings = localStorage.getItem('pedenaGameSettings');
            if (savedSettings) {
                this.gameSettings = JSON.parse(savedSettings);
            }
        }
    }

    // Exploration Context
    addExplorationContext(discovery, interactableElements = []) {
        this.currentExplorationContext.discoveries.push({
            discovery: discovery,
            timestamp: Date.now(),
            location: this.player.currentLocation
        });

        interactableElements.forEach(element => {
            if (!this.currentExplorationContext.activeElements.includes(element)) {
                this.currentExplorationContext.activeElements.push(element);
            }
        });

        this.currentExplorationContext.lastExploration = discovery;

        if (this.currentExplorationContext.discoveries.length > 5) {
            this.currentExplorationContext.discoveries = this.currentExplorationContext.discoveries.slice(-5);
        }
    }

    getExplorationContextString() {
        const playerLocation = this.player.currentLocation;
        const inventoryItems = this.player.inventory.map(item => `${item.name} (x${item.quantity || 1})`).join(', ') || 'none';
        const equippedWeapon = this.player.equipment?.mainHand?.name || 'unarmed';
        
        if (!this.player.relationships) {
            this.player.relationships = {};
        }
        
        const relationships = Object.values(this.player.relationships).map(rel => `${rel.name}: ${rel.status}`).join(', ') || 'none';

        let context = `Player is currently in ${playerLocation}. ` +
            `Player HP: ${this.player.hp}/${this.player.maxHp}. ` +
            `Player Gold: ${this.player.gold}. ` +
            `Player Inventory: ${inventoryItems}. ` +
            `Equipped Weapon: ${equippedWeapon}. ` +
            `Player Relationships: ${relationships}. `;

        if (this.player.currentEnemy) {
            context += `Currently in combat with ${this.player.currentEnemy.name} (${this.player.currentEnemy.currentHp}/${this.player.currentEnemy.maxHp} HP). `;
        }

        return context;
    }

    resetInventoryPagination() {
        this.inventoryPagination.currentPage = 0;
    }

    resetQuestPagination() {
        this.questPagination.completedQuestsPage = 0;
    }

    changeCompletedQuestsPage(direction) {
        const completedQuests = this.player.quests ? this.player.quests.filter(q => q.completed) : [];
        const totalPages = Math.ceil(completedQuests.length / this.questPagination.itemsPerPage);

        this.questPagination.completedQuestsPage += direction;
        this.questPagination.completedQuestsPage = Math.max(0, Math.min(this.questPagination.completedQuestsPage, totalPages - 1));
    }

    changeInventoryPage(direction) {
        const unequippedItems = this.player.inventory ? this.player.inventory.filter(item => {
            if (!this.player.equipment) return true;
            return !Object.values(this.player.equipment).some(equippedItem =>
                equippedItem && equippedItem.id === item.id
            );
        }) : [];

        const totalPages = Math.ceil(unequippedItems.length / this.inventoryPagination.itemsPerPage);

        this.inventoryPagination.currentPage += direction;
        this.inventoryPagination.currentPage = Math.max(0, Math.min(this.inventoryPagination.currentPage, totalPages - 1));
    }
}

// Global delay function
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Create and export a global instance
export const gameState = new GameState();
