
// Game State Management Module
export class GameState {
    constructor() {
        this.player = null;
        this.gameHistory = [];
        this.currentLocation = '';
        this.isGameActive = false;
    }

    initializePlayer(playerData) {
        this.player = {
            name: playerData.name || '',
            race: playerData.race || '',
            class: playerData.class || '',
            background: playerData.background || '',
            level: playerData.level || 1,
            experience: playerData.experience || 0,
            health: playerData.health || 100,
            maxHealth: playerData.maxHealth || 100,
            mana: playerData.mana || 50,
            maxMana: playerData.maxMana || 50,
            gold: playerData.gold || 100,
            strength: playerData.strength || 10,
            dexterity: playerData.dexterity || 10,
            intelligence: playerData.intelligence || 10,
            constitution: playerData.constitution || 10,
            wisdom: playerData.wisdom || 10,
            charisma: playerData.charisma || 10,
            inventory: playerData.inventory || [],
            equipment: playerData.equipment || {
                mainHand: null,
                offHand: null,
                head: null,
                chest: null,
                hands: null,
                legs: null,
                feet: null,
                back: null,
                amulet: null,
                ring1: null,
                ring2: null
            },
            skills: playerData.skills || {},
            quests: playerData.quests || [],
            relationships: playerData.relationships || {},
            statusEffects: playerData.statusEffects || [],
            portraitUrl: playerData.portraitUrl || '',
            alignment: playerData.alignment || { lawful: 0, good: 0 },
            party: playerData.party || null,
            ...playerData
        };
        return this.player;
    }

    saveGameState() {
        const gameState = {
            player: this.player,
            gameHistory: this.gameHistory,
            currentLocation: this.currentLocation,
            timestamp: Date.now()
        };
        localStorage.setItem('pedenaGameState', JSON.stringify(gameState));
    }

    loadGameState() {
        try {
            const saved = localStorage.getItem('pedenaGameState');
            if (saved) {
                const gameState = JSON.parse(saved);
                this.player = gameState.player;
                this.gameHistory = gameState.gameHistory || [];
                this.currentLocation = gameState.currentLocation || '';
                return true;
            }
        } catch (error) {
            console.error('Error loading game state:', error);
        }
        return false;
    }

    resetGameState() {
        this.player = null;
        this.gameHistory = [];
        this.currentLocation = '';
        this.isGameActive = false;
        localStorage.removeItem('pedenaGameState');
    }

    updatePlayer(updates) {
        if (this.player) {
            Object.assign(this.player, updates);
            this.saveGameState();
        }
    }

    addToHistory(entry) {
        this.gameHistory.push({
            timestamp: Date.now(),
            ...entry
        });
        this.saveGameState();
    }
}

// Create global instance
export const gameState = new GameState();
