// Subtask: Win Combat

// --- Imports and Dependencies ---
import OriginalCombatSystem from './game-logic/combat-system.js';
import OriginalCharacterManager from './game-logic/character-manager.js';

// --- Mocked Globals and Functions from script.js ---
let player; // Will be initialized in runWinCombatStep
let conversationHistory = { messages: [], maxMessages: 50 };

global.window = global; // Make global act like window for this script
window.CombatSystem = OriginalCombatSystem;
window.CharacterManager = OriginalCharacterManager; // Needed for getCharacterProgression in combat prompts

function addToConversationHistory(role, content) {
    conversationHistory.messages.push({ role, content, timestamp: Date.now() });
    if (conversationHistory.messages.length > conversationHistory.maxMessages) {
        conversationHistory.messages = conversationHistory.messages.slice(-conversationHistory.maxMessages);
    }
}

function getConversationContext() {
    const recentMessages = conversationHistory.messages.slice(-5);
    return recentMessages.map(msg => `${msg.role === 'user' ? 'Player' : 'DM'}: ${msg.content}`).join('\n');
}

window.displayMessage = function(message, type = 'info') {
    console.log(`[displayMessage][${type}] ${message}`);
}

window.saveGame = function() {
    // console.log("[saveGame] Mocked saveGame call for win combat step.");
}

window.updatePlayerStatsDisplay = function() {
    // console.log("[updatePlayerStatsDisplay] Mocked for win combat step.");
}

window.updateGold = function(amount, reason = '') {
    player.gold += amount;
    console.log(`[updateGold] Player gold is now ${player.gold} (Reason: ${reason})`);
}

window.checkQuestCompletion = function(action) {
    console.log(`[checkQuestCompletion] Mocked for action: ${action}`);
    // In a real scenario, this would check if "defeated Surprisingly Fierce Puppy" completes a quest objective.
}

window.ItemManager = { // Mock for potential item drops from enemy
    generateItem: (context) => ({ name: "Puppy Treat (Mock)", type: "misc", value: 1 }),
    addItemToInventory: (p, item) => {
        if(!p.inventory) p.inventory = [];
        p.inventory.push(item);
        // console.log(`[ItemManager.addItemToInventory] Mocked adding ${item.name} to ${p.name}`);
    }
};

window.gainExperience = function(amount) {
    if (!amount || amount <= 0) return;
    const oldLevel = player.level;
    player.exp = (player.exp || 0) + amount;
    console.log(`[gainExperience] Player ${player.name} gains ${amount} XP. Total XP: ${player.exp}`);

    while (player.exp >= player.expToNextLevel) {
        player.exp -= player.expToNextLevel;
        player.level++;
        player.maxHp += 10; // From original script.js
        player.hp = player.maxHp; // Full heal
        player.expToNextLevel = Math.floor(player.expToNextLevel * 1.5);
        displayMessage(`Level up! You are now level ${player.level}!`, 'success');
        if (window.CharacterManager && typeof window.CharacterManager.levelUp === 'function') {
             window.CharacterManager.levelUp(player);
        } else {
            console.warn("CharacterManager.levelUp not found during gainExperience mock");
        }
    }
    updatePlayerStatsDisplay();
};


const GEMINI_API_KEY = 'AIzaSyDIFeql6HUpkZ8JJlr_kuN0WDFHUyOhijA';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

// Enhanced mock for callGeminiAPI to handle combat turns
window.callGeminiAPI = async function(prompt, temperature = 0.7, maxOutputTokens = 500, includeContext = false) {
    // console.log(`[callGeminiAPI] WinCombatPrompt: ${prompt.substring(0,100)}...`);

    if (prompt.includes("PLAYER ACTION: attack")) {
        // Simulate player attacking the enemy
        const enemyHp = window.CombatSystem.combatState.currentEnemy.currentHp;
        const damageDealt = Math.min(enemyHp, 8); // Player deals 8 damage, or less if enemy is low HP
        return JSON.stringify({
            success: true,
            narrative: `JulesTest attacks the ${window.CombatSystem.combatState.currentEnemy.name} with great force! It yelps!`,
            damage: damageDealt,
            playerHpChange: 0,
            enemyHpChange: -damageDealt, // Negative value for damage
            effects: [],
            criticalHit: false,
            actionComplete: true
        });
    } else if (prompt.includes("ENEMY TURN PROCESSING")) {
        // Simulate enemy attacking the player (but missing or doing minimal damage to ensure player wins)
        return JSON.stringify({
            success: true,
            narrative: `The ${window.CombatSystem.combatState.currentEnemy.name} snaps at JulesTest, but misses wildly!`,
            damage: 0,
            playerHpChange: 0, // No damage to player
            enemyHpChange: 0,
            effects: [],
            actionComplete: true
        });
    } else if (prompt.includes("Generate a combat environment description")) {
        return "The combat continues in the dimly lit area with scattered crates.";
    }

    // Fallback for any other prompts
    console.warn(`[callGeminiAPI] Unhandled prompt type during win_combat subtask. Prompt: ${prompt.substring(0,100)}`);
    return JSON.stringify({ success: false, narrative: "An unexpected action occurs.", actionComplete: true });
};


// --- Main Execution Logic ---
async function runWinCombatStep() {
    console.log("Starting Step 6: Win Combat");

    // Initialize player and combat state from end of Step 5
    player = {
        name: "JulesTest", gender: "female", class: "warrior",
        currentLocation: "Pedena Training Grounds",
        level: 1, hp: 20, maxHp: 20, gold: 50, exp: 0, expToNextLevel: 100,
        stats: { strength: 12, dexterity: 10, intelligence: 10, constitution: 12, wisdom: 10, charisma: 10 },
        inventory: [], equipment: { head: null, chest: null, hands: null, legs: null, feet: null, mainHand: null, offHand: null, amulet: null, ring1: null, ring2: null },
        skills: [], abilities: [],
        quests: [{
            id: "1749185609215", title: "A Worrisome Delivery",
            objective: "Retrieve Elara's lost puppy from the Pedena Training Grounds.",
            location: "Pedena Training Grounds", completed: false
        }],
        classProgression: {
            class: "warrior", level: 1, classAbilities: ["Power Strike", "Shield Bash"], classFeats: ["Weapon Mastery"],
            unlockedFeatures: ["Fighting Style", "Second Wind"], knownSpells: [], availableSpells: [], knownCantrips: [], availableCantrips: [],
            spellSlots: {}, abilityUses: {}
        }
    };
    window.player = player; // Make it globally accessible

    // Initialize CombatSystem state from end of Step 5
    window.CombatSystem.combatState = {
        isActive: true,
        currentEnemy: {
            name: "Surprisingly Fierce Puppy", hp: 15, maxHp: 15, currentHp: 15, // Ensure currentHp is distinct
            attack: 5, defense: 1, level: 1, type: "Beast",
            description: "This puppy seems unusually aggressive and territorial!"
        },
        turnOrder: ["player", "enemy"], // Player acts first
        currentTurn: 0, // Player's turn
        combatLog: [], playerActions: [], enemyActions: [], battleConditions: {},
        environment: {
            description: "The area is dimly lit, with scattered crates providing some cover. The air is tense.",
            terrain: "varied terrain", advantages: { player: [], enemy: [] }
        },
        turnNumber: 1
    };

    console.log(`Initial Player HP: ${player.hp}, Enemy HP: ${window.CombatSystem.combatState.currentEnemy.currentHp}`);
    displayMessage(`Pre-combat check: Combat is active. Current enemy: ${window.CombatSystem.combatState.currentEnemy.name}`, "info");

    // Simulate player's first turn
    if (window.CombatSystem.combatState.isActive && window.CombatSystem.combatState.turnOrder[window.CombatSystem.combatState.currentTurn] === 'player') {
        console.log("Player's Turn 1: Attacking...");
        await window.CombatSystem.handleCombatCommand("attack");
        // This will call processPlayerAction -> applyActionResults -> nextTurn.
        // nextTurn for enemy uses setTimeout(..., 1500)
    }

    // Wait for enemy's turn to process (which is inside a setTimeout in CombatSystem.nextTurn)
    console.log("Waiting for enemy turn and subsequent processing (2s)...");
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Check if combat ended after enemy's turn (e.g. if player was defeated - mock prevents this)
    if (!window.CombatSystem.combatState.isActive) {
        console.log("Combat ended after enemy's first turn.");
    } else {
        // Simulate player's second turn if combat is still active and it's player's turn
        if (window.CombatSystem.combatState.turnOrder[window.CombatSystem.combatState.currentTurn] === 'player') {
            console.log("Player's Turn 2: Attacking...");
            await window.CombatSystem.handleCombatCommand("attack");
            // This should defeat the enemy if it has 15HP and each attack deals 8 damage.
            // applyActionResults -> checkCombatEnd -> endCombat should be called.
        } else {
            console.log("It's not player's turn after waiting, or combat logic issue. Current actor:", window.CombatSystem.combatState.turnOrder[window.CombatSystem.combatState.currentTurn]);
        }
    }

    // Wait a bit more for any final combat processing from endCombat
    console.log("Waiting for potential endCombat processing (0.5s)...");
    await new Promise(resolve => setTimeout(resolve, 500));

    // Final Verification
    if (!window.CombatSystem.combatState.isActive) {
        console.log("Step 6: Win Combat SUCCEEDED. Combat is no longer active.");
        console.log(`Player HP after combat: ${player.hp}/${player.maxHp}`);
        if (window.CombatSystem.combatState.currentEnemy) { // Should be null if combat ended properly
             console.log(`Enemy HP after combat: ${window.CombatSystem.combatState.currentEnemy.currentHp}`);
        } else {
            console.log("Enemy has been cleared from combat state.");
        }
    } else {
        console.error("Step 6: Win Combat FAILED. Combat is still active.");
        console.log(`Player HP: ${player.hp}, Enemy HP: ${window.CombatSystem.combatState.currentEnemy?.currentHp}`);
    }
}

runWinCombatStep();
