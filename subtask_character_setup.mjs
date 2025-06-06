// Subtask: Character Setup
// Main player object, potentially re-defined for isolated testing
let player = {
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
    hp: 0, // Will be set by CharacterManager
    maxHp: 0, // Will be set by CharacterManager
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
        ring2: null
    },
    skills: [],
    abilities: [],
    quests: [],
    relationships: {},
    currentLocation: '',
    currentEnemy: null,
    alignment: null,
    classProgression: null // Will be initialized by CharacterManager
};

// Attempt to import CharacterManager
// Assuming the execution environment handles ES6 module imports
// and the path is relative to where this script might be conceptually placed or linked.
// For a subtask environment, this import path might need adjustment or modules preloaded.
import CharacterManager from './game-logic/character-manager.js';

function setupCharacter() {
    console.log("Starting Step 1: Character Setup");

    player.name = "JulesTest";
    player.class = "warrior"; // Corrected to lowercase "warrior" to match class-progression.js keys
    player.gender = "female";
    player.level = 1;
    player.background = "A determined warrior seeking to prove her mettle and protect the innocent.";

    // Log before initialization
    console.log("Player object BEFORE CharacterManager.initializeCharacter:", JSON.stringify(player, null, 2));

    try {
        // Call CharacterManager.initializeCharacter
        // This function is expected to modify the player object directly
        CharacterManager.initializeCharacter(player, player.class);
        console.log("CharacterManager.initializeCharacter called successfully.");
    } catch (e) {
        console.error("Error calling CharacterManager.initializeCharacter:", e);
        // If CharacterManager is not available, we might need to mock its effects or log failure.
        // For now, we'll proceed and the logs will show if initialization happened.
    }

    player.currentLocation = "Pedena Town Square";

    // Log the player object after setup
    console.log("Player object AFTER setup:", JSON.stringify(player, null, 2));

    // Verification
    if (player.name === "JulesTest" &&
        player.classProgression && // Check if classProgression was initialized
        player.classProgression.class === "warrior" && // Corrected to lowercase "warrior"
        player.hp > 0 && player.maxHp > 0 &&
        player.currentLocation === "Pedena Town Square" &&
        player.level === 1) {
        console.log("Step 1: Character Setup SUCCEEDED.");
        // This console log will be used by the subtask runner to determine success.
    } else {
        console.error("Step 1: Character Setup FAILED. Verification checks did not pass.");
        console.error("Verification details:", {
            name: player.name,
            classProgressionExists: !!player.classProgression,
            classInProgression: player.classProgression ? player.classProgression.class : "N/A",
            hp: player.hp,
            maxHp: player.maxHp,
            location: player.currentLocation,
            level: player.level
        });
    }

    // For the subtask environment, we might not have access to script.js's global 'player'
    // So, if this script needs to make 'player' available to subsequent steps,
    // it might need to be explicitly exported or put into a shared context if the environment supports it.
    // For now, console logs will indicate success/failure.
}

// Execute the setup
// This self-executing pattern might need to be adapted based on how the subtask runner executes scripts.
// If it's run in an environment where 'player' and 'CharacterManager' are globally available,
// then the import might not be needed, or might be handled differently.
setupCharacter();

// To make `player` object accessible to subsequent scripts in a testing environment if modules are not used:
// globalThis.player = player; // Or some other global context provided by the subtask runner
