// Subtask: Navigate to Quest Location

// --- Imports and Dependencies (subset of script.js, simplified) ---
// Assuming these are available in the execution scope or preloaded.
// For a real module system, explicit imports would be needed.
// We'll define/mock them as we did in previous subtask scripts.

import { LocationManager } from './game-logic/location-manager.js'; // Assuming this exists and is simple
import { CombatSystem } from './game-logic/combat-system.js'; // For generateCombatEncounter if called

// --- Mocked Globals and Functions from script.js ---
let player; // Will be initialized in runNavigationStep
let conversationHistory = { messages: [], maxMessages: 50 };
let gameWorld = { npcs: new Map(), locationMemory: new Map(), lastNPCInteraction: null }; // For getNPCsInLocation

function addToConversationHistory(role, content) {
    // console.log(`[addToConversationHistory] ${role}: ${content.substring(0,100)}...`);
    conversationHistory.messages.push({ role, content, timestamp: Date.now() });
    if (conversationHistory.messages.length > conversationHistory.maxMessages) {
        conversationHistory.messages = conversationHistory.messages.slice(-conversationHistory.maxMessages);
    }
}

function getConversationContext() {
    const recentMessages = conversationHistory.messages.slice(-5);
    return recentMessages.map(msg => `${msg.role === 'user' ? 'Player' : 'DM'}: ${msg.content}`).join('\n');
}

function displayMessage(message, type = 'info') {
    console.log(`[displayMessage][${type}] ${message}`);
}

function saveGame() {
    // console.log("[saveGame] Mocked saveGame call for navigation step.");
}

function updatePlayerStatsDisplay() {
    // console.log("[updatePlayerStatsDisplay] Mocked for navigation.");
}

function getNPCsInLocation(location) { return []; } // Simplified mock

const GEMINI_API_KEY = 'AIzaSyDIFeql6HUpkZ8JJlr_kuN0WDFHUyOhijA';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

async function callGeminiAPI(prompt, temperature = 0.3, maxOutputTokens = 400, includeContext = false) {
    // console.log(`[callGeminiAPI] NavPrompt: ${prompt.substring(0,100)}...`);
    if (prompt.includes("Respond with ONLY valid JSON") && prompt.includes("canMove")) {
        // Specific mock for handleStructuredMovement's Gemini call
        const destinationMatch = prompt.match(/Destination: ([^\n]+)/);
        const destination = destinationMatch ? destinationMatch[1].trim() : "Unknown Location";
        return JSON.stringify({
            canMove: true,
            newLocation: destination, // Use the parsed destination
            description: `You make your way towards ${destination}. The path is clear.`,
            encounterChance: 0.1, // Low chance for subtask simplicity
            encounterType: "discovery",
            goldCost: 0,
            travelTime: "a short while"
        });
    }
    // Fallback for other API calls if any were made
    return `Mocked API response for: ${prompt.substring(0,50)}`;
}

// --- Simplified Encounter and Combat Stubs (to avoid pulling all dependencies) ---
async function generateRandomEncounter() {
    // console.log("[generateRandomEncounter] Mocked: No encounter triggered during navigation for this subtask.");
    displayMessage("The path seems quiet for now.", "info");
}
async function generateSpecificEnemyEncounter(command, p) {
    displayMessage(`[generateSpecificEnemyEncounter] Mocked for command: ${command}`, "info");
    return null; // No enemy generated for this subtask
}

// Mock CombatSystem partially if needed by generateRandomEncounter -> generateCombatEncounter
const MockCombatSystem = {
    combatState: { isActive: false },
    generateSpecificEnemyEncounter: async (command, p) => {
        displayMessage(`[MockCombatSystem.generateSpecificEnemyEncounter] Mocked for: ${command}`, "info");
        return null; // No specific enemy
    },
    initiateCombat: (p, enemy, location) => {
        displayMessage(`[MockCombatSystem.initiateCombat] Mocked combat with ${enemy.name} at ${location}`, "info");
    },
    handleCombatCommand: (command) => { return false; }
};
// Assign to global CombatSystem if script.js expects it globally, otherwise pass as param.
// For this subtask, direct assignment is simpler if executeCustomCommand uses a global one.
global.CombatSystem = CombatSystem || MockCombatSystem; // Ensure CombatSystem is available, use mock if real one isn't imported/set up

// Mock LocationManager if its methods are called by handleStructuredMovement
const MockLocationManager = {
    saveLocationToHistory: (location, playerName) => {
        // console.log(`[MockLocationManager.saveLocationToHistory] Location: ${location} for ${playerName}`);
    }
};
// Assign to global LocationManager
global.LocationManager = LocationManager || MockLocationManager;


// --- Adapted Core Logic from script.js ---

async function handleStructuredMovement(command, destination) {
    // console.log(`[handleStructuredMovement] Command: "${command}", Destination: "${destination}"`);
    try {
        const movementPrompt = `
Player ${player.name} (Level ${player.level} ${player.class}) wants to: "${command}"
Current location: ${player.currentLocation}
Destination: ${destination}

Respond with ONLY valid JSON in this exact format:
{
    "canMove": true/false,
    "newLocation": "exact location name",
    "description": "movement description",
    "encounterChance": 0.0-1.0,
    "encounterType": "combat/social/discovery",
    "goldCost": 0,
    "travelTime": "time description"
}

Make the location name proper and descriptive.`;

        const response = await callGeminiAPI(movementPrompt); // Temperature and tokens are default in callGeminiAPI mock for this case
        if (!response) {
            throw new Error("No response from AI for movement");
        }

        let movementData;
        try {
            // Simplified parsing, mock ensures it's JSON
            movementData = JSON.parse(response);
        } catch (parseError) {
            console.error("Failed to parse movement JSON:", parseError, "Raw response:", response);
            // Fallback for safety, though mock should prevent this
            player.currentLocation = destination.replace(/\b\w/g, l => l.toUpperCase());
            displayMessage(`You travel to ${player.currentLocation}. (Fallback due to parse error)`, 'info');
            updatePlayerStatsDisplay();
            saveGame();
            return;
        }

        if (!movementData.canMove) {
            displayMessage(movementData.description || "You cannot travel there right now.", 'error');
            return;
        }

        if (movementData.goldCost > 0) { /* ... gold handling ... */ }

        const oldLocation = player.currentLocation;
        player.currentLocation = movementData.newLocation; // CRITICAL UPDATE

        displayMessage(movementData.description, 'success');
        displayMessage(`You arrive at ${movementData.newLocation}.`, 'info');
        if (movementData.travelTime) {
            displayMessage(`Travel time: ${movementData.travelTime}`, 'info');
        }

        updatePlayerStatsDisplay();
        // Ensure MockLocationManager is used to prevent localStorage errors in this subtask
        MockLocationManager.saveLocationToHistory(movementData.newLocation, player.name);
        addToConversationHistory('assistant', `${player.name} traveled from ${oldLocation} to ${movementData.newLocation}`);
        saveGame();

        if (movementData.encounterChance > 0 && Math.random() < movementData.encounterChance) {
            // console.log("Encounter triggered by chance!");
            // Simplified: direct call to generateRandomEncounter which is mocked
            await generateRandomEncounter();
        }

    } catch (error) {
        console.error("Movement system error in handleStructuredMovement:", error);
        displayMessage("There was an issue processing your movement. Please try again.", 'error');
        // Fallback: update to destination directly if error in structured system
        player.currentLocation = destination.replace(/\b\w/g, l => l.toUpperCase());
        displayMessage(`You manage to find your way to ${player.currentLocation}. (Fallback due to system error)`, 'info');
        updatePlayerStatsDisplay();
        saveGame();
    }
}

async function executeCustomCommand(command) {
    if (!command.trim()) return;
    displayMessage(`> ${command}`, 'user'); // Changed type to 'user' for clarity
    addToConversationHistory('user', command);

    const movementPatterns = [
        /(?:go|travel|move|head|walk|run)\s+(?:to\s+)?(.+)/i,
        /(?:visit|enter)\s+(?:the\s+)?(.+)/i,
    ];
    let destination = null;
    for (const pattern of movementPatterns) {
        const match = command.match(pattern);
        if (match && match[1]) {
            destination = match[1].replace(/^(the|a|an)\s+/i, '').trim();
            destination = destination.replace(/\s+(and|then|,).*$/i, '').trim();
            break;
        }
    }

    if (destination) {
        await handleStructuredMovement(command, destination);
        return;
    }

    // Other command handling (simplified for this subtask)
    displayMessage("Command not recognized as movement for this subtask.", "info");
}


// --- Main Execution Logic ---
async function runNavigationStep() {
    console.log("Starting Step 4: Navigate to Quest Location");

    // Initialize player state (as after Step 2)
    player = {
        name: "JulesTest",
        gender: "female",
        class: "warrior",
        currentLocation: "Pedena Town Square", // Starting location for this step
        level: 1,
        hp: 20, maxHp: 20, gold: 50, quests: [{
            id: "1749185609215", title: "A Worrisome Delivery",
            objective: "Retrieve Elara's lost puppy from the Pedena Training Grounds.",
            location: "Pedena Training Grounds", // This is the key from previous step
            // ... other quest fields
        }],
        // ... other player fields from previous steps if necessary for functions being called
        classProgression: { class: "warrior", level: 1, classAbilities: [], classFeats: [], unlockedFeatures: [] } // simplified
    };

    const extracted_location_name = player.quests[0].location; // "Pedena Training Grounds"

    console.log(`Player initial location: ${player.currentLocation}`);
    console.log(`Target quest location: ${extracted_location_name}`);

    await executeCustomCommand(`go to ${extracted_location_name}`);

    // Verification
    if (player.currentLocation === extracted_location_name) {
        console.log("Step 4: Navigate to Quest Location SUCCEEDED.");
        console.log(`Player successfully navigated to: ${player.currentLocation}`);
    } else {
        console.error("Step 4: Navigate to Quest Location FAILED.");
        console.error(`Expected location: ${extracted_location_name}, Actual: ${player.currentLocation}`);
    }
}

runNavigationStep();
