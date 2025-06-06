// Subtask: Iterative Quest Completion until Level 2 (Max 3 Quests)

// --- Essential Imports ---
import OriginalCharacterManager from './game-logic/character-manager.js';
import OriginalCombatSystem from './game-logic/combat-system.js';
// QuestTaskGenerator and its full dependencies are complex to bring in.
// We will rely on a robust mock for generateGeminiQuest for quest variety.
// However, questCategories is simple enough to define.
// import { QuestTaskGenerator, questCategories as OriginalQuestCategories, questThemes, questVariables } from './assets/quest-tasks.js';

console.log("Subtask script started: Iterative Leveling");

// --- Global Player Object ---
let player = {}; // To be initialized in main logic

// --- Simulated 'window' and Global Game Objects ---_
// Ensure player.stats is initialized with numbers for CharacterManager
const baseStatsTemplate = { strength: 10, dexterity: 10, intelligence: 10, constitution: 10, wisdom: 10, charisma: 10 };

global.window = global;
window.player = player; // CombatSystem and other functions might look for window.player
window.CharacterManager = OriginalCharacterManager;
window.CombatSystem = OriginalCombatSystem;

// --- Mocked/Adapted Helper Functions & Game Systems ---
const questCategories = { // Defined locally for simplicity
    EXPLORATION: 'exploration', COMBAT: 'combat', INVESTIGATION: 'investigation',
    DELIVERY: 'delivery', COLLECTION: 'collection', RESCUE: 'rescue',
    DIPLOMACY: 'diplomacy', CRAFTING: 'crafting', PROTECTION: 'protection', MYSTERY: 'mystery',
    TUTORIAL: 'tutorial' // Added for tutorial quests
};

let conversationHistory = { messages: [], maxMessages: 50 };

window.addToConversationHistory = function(role, content) {
    conversationHistory.messages.push({ role, content, timestamp: Date.now() });
    if (conversationHistory.messages.length > conversationHistory.maxMessages) {
        conversationHistory.messages = conversationHistory.messages.slice(-conversationHistory.maxMessages);
    }
    // console.log(`[ConvHistory] ${role}: ${content.substring(0, 50)}...`);
};

window.displayMessage = function(message, type = 'info') {
    console.log(`[displayMessage][${type}] ${message}`);
};

window.saveGame = function() { /* console.log("[Mock] saveGame called."); */ };
window.updatePlayerStatsDisplay = function() { /* console.log("[Mock] updatePlayerStatsDisplay called."); */ };
window.updateQuestButton = function() { /* console.log("[Mock] updateQuestButton called."); */ };
window.getNPCsInLocation = function(location) { return []; };

window.updateGold = function(amount, reason = '') {
    player.gold = Math.max(0, player.gold + Number(amount));
    console.log(`[updateGold] Gold: ${player.gold} (Change: ${Number(amount)}, Reason: ${reason})`);
};

window.gainExperience = function(amount) {
    if (!amount || amount <= 0) return;
    const oldLevel = player.level;
    player.exp = (player.exp || 0) + amount;
    console.log(`[gainExperience] Player ${player.name} gains ${amount} XP. Total XP: ${player.exp}/${player.expToNextLevel}`);

    let leveledUpThisCycle = false;
    while (player.exp >= player.expToNextLevel) {
        const xpOver = player.exp - player.expToNextLevel;
        player.level++;
        player.exp = xpOver;
        // const oldMaxHp = player.maxHp; // Not needed for this log
        player.maxHp += 10; // Warrior HP gain per level (simplified assumption from CharacterManager or game rules)
        player.hp = player.maxHp; // Full heal on level up
        const oldExpToNextLevel = player.expToNextLevel;
        player.expToNextLevel = Math.floor(oldExpToNextLevel * 1.5);

        console.log(`[LevelUp!] Player reached Level ${player.level}! HP: ${player.hp}/${player.maxHp}. Next Lvl XP: ${player.expToNextLevel}.`);
        if (window.CharacterManager && typeof window.CharacterManager.applyLevelProgression === 'function') {
            // This function should update classProgression, abilities, spells etc.
            window.CharacterManager.applyLevelProgression(player, player.level);
        } else {
            console.warn("CharacterManager.applyLevelProgression not found during gainExperience mock");
        }
        leveledUpThisCycle = true;
    }
    // No DOM updatePlayerStatsDisplay();
    if (leveledUpThisCycle) console.log(`[gainExperience] Player is now Level ${player.level}.`);
};

// --- Gemini API Mock for Quest Generation & Combat ---
const GEMINI_API_KEY = 'AIzaSyDIFeql6HUpkZ8JJlr_kuN0WDFHUyOhijA'; // Placeholder
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
let questGenerationAttempt = 0;

window.callGeminiAPI = async function(prompt, temperature = 0.7, maxOutputTokens = 500) {
    // console.log(`[callGeminiAPI Mock] Prompt starts with: "${prompt.substring(0, 100)}..."`);

    if (prompt.includes("QUEST GENERATION SYSTEM") || prompt.includes("TUTORIAL QUEST GENERATION")) {
        questGenerationAttempt++;
        console.log(`[callGeminiAPI Mock] Quest Generation Attempt #${questGenerationAttempt}`);
        let questResponse = {};
        if (questGenerationAttempt === 1) {
            questResponse = {
                title: "Goblin Trouble in the Woods",
                description: "Goblins have been raiding caravans near the Whispering Woods.",
                objective: "Eliminate 3 Cave Goblins in the Whispering Woods.",
                category: questCategories.COMBAT,
                theme: "Monster Threat",
                difficulty: "Easy",
                location: "Whispering Woods",
                questGiver: "Worried Merchant",
                rewards: { gold: 30, experience: 50, items: ["Minor Healing Potion"] }, // XP should be enough with combat
                questType: "side"
            };
        } else if (questGenerationAttempt === 2) {
            questResponse = { // This quest should be skipped due to inappropriate target
                title: "The Menacing Pet",
                description: "A local child's pet puppy has become strangely aggressive.",
                objective: "Subdue the child's Lost Puppy in the Park.",
                category: questCategories.COMBAT, // Still combat to test the filter
                theme: "Local Disturbance",
                difficulty: "Easy",
                location: "Pedena Park",
                questGiver: "Distraught Parent",
                rewards: { gold: 10, experience: 10, items: [] },
                questType: "side"
            };
        } else { // Third or subsequent attempts
            questResponse = {
                title: "Delivery to the Hermit",
                description: "A reclusive hermit needs a package delivered.",
                objective: "Deliver the Sealed Package to the Hermit in the Starfall Hills.",
                category: questCategories.DELIVERY,
                theme: "Errand",
                difficulty: "Easy",
                location: "Starfall Hills",
                questGiver: "A Mysterious Courier",
                rewards: { gold: 25, experience: 40, items: [] }, // Should push over level 2
                questType: "side"
            };
        }
        return JSON.stringify(questResponse);
    } else if (prompt.includes("PLAYER ACTION: attack")) {
        const enemy = window.CombatSystem.combatState.currentEnemy;
        const damageDealt = Math.min(enemy.currentHp, 10 + player.level * 2); // Player deals decent damage
        console.log(`[callGeminiAPI Mock] Player attacks, dealing ${damageDealt} to ${enemy.name}`);
        return JSON.stringify({
            success: true,
            narrative: `${player.name} strikes the ${enemy.name} effectively!`,
            damage: damageDealt,
            enemyHpChange: -damageDealt,
            playerHpChange: 0,
            actionComplete: true
        });
    } else if (prompt.includes("ENEMY TURN PROCESSING")) {
        const enemy = window.CombatSystem.combatState.currentEnemy;
        const damageToPlayer = Math.max(0, (enemy.attack || 5) - Math.floor((player.stats.constitution || 10) / 4) );
        console.log(`[callGeminiAPI Mock] ${enemy.name} attacks, dealing ${damageToPlayer} to ${player.name}`);
        return JSON.stringify({
            success: true,
            narrative: `${enemy.name} retaliates against ${player.name}!`,
            damage: damageToPlayer,
            playerHpChange: -damageToPlayer,
            enemyHpChange: 0,
            actionComplete: true
        });
    } else if (prompt.includes("Generate a combat environment description")) {
        return "The battle unfolds in a tense atmosphere.";
    }
    console.warn(`[callGeminiAPI Mock] Unhandled prompt type. Returning generic success. Prompt: ${prompt.substring(0,100)}`);
    return JSON.stringify({ success: true, narrative: "The action unfolds as expected." });
};

// --- Actual Game Logic (Adapted for Subtask) ---

async function generateQuest() {
    // console.log("[generateQuest] Called.");
    const questJSONString = await window.callGeminiAPI("QUEST GENERATION SYSTEM", 0.7, 1000);
    const newQuest = JSON.parse(questJSONString);

    newQuest.id = Date.now().toString() + Math.random().toString(36).substring(2,7); // More unique ID
    newQuest.completed = false;
    newQuest.dateCreated = new Date().toLocaleDateString();
    newQuest.rewardsAwarded = false; // Initialize custom flag

    if (!player.quests) player.quests = [];
    player.quests.push(newQuest);

    window.displayMessage(`New quest received: ${newQuest.title}`, 'success');
    return newQuest;
}

function extractQuestTargets(text) {
    const commonTargets = [
        'goblin', 'goblins', 'orc', 'orcs', 'dragon', 'dragons', 'puppy',
        'wolf', 'wolves', 'bear', 'bears', 'spider', 'spiders', 'crab', 'crabs',
        'merchant', 'merchants', 'trader', 'traders', 'caravan', 'caravans', 'hermit',
        'artifact', 'treasure', 'relic', 'scroll', 'book', 'crystal', 'gem', 'package', 'letter',
        'temple', 'ruins', 'cave', 'tower', 'castle', 'fortress', 'woods', 'hills', 'park', 'beach', 'grounds'
    ];
    const found = commonTargets.filter(target => text.toLowerCase().includes(target));
    return found;
}

function checkQuestCompletion(playerAction) {
    if (!window.player.quests || window.player.quests.length === 0) return;
    // console.log(`[checkQuestCompletion] Action: "${playerAction}"`);

    window.player.quests.forEach(quest => {
        if (quest.completed) return;

        let isCompleted = false;
        const questText = `${quest.title} ${quest.objective}`.toLowerCase();
        const actionText = playerAction.toLowerCase();
        let completionScore = 0;

        const monsterNameFromQuest = quest.parsedMonsterName ? quest.parsedMonsterName.toLowerCase() : null;

        const actionPatterns = [
            { keywords: ['kill', 'defeat', 'slay', 'subdue', 'eliminate'],
              triggers: monsterNameFromQuest ? [`defeated ${monsterNameFromQuest}`, `eliminated ${monsterNameFromQuest}`, `subdued ${monsterNameFromQuest}`] : ['defeated', 'eliminated', 'subdued'],
              weight: 3 },
            { keywords: ['retrieve', 'get', 'find', 'obtain'],
              triggers: monsterNameFromQuest ? [`retrieved ${monsterNameFromQuest}`, `found ${monsterNameFromQuest}`, `got ${monsterNameFromQuest}`, `obtained ${monsterNameFromQuest}`] : ['retrieved', 'found', 'got', 'obtained'],
              weight: 3 },
            { keywords: ['deliver', 'give', 'transport'],
              triggers: monsterNameFromQuest ? [`delivered ${monsterNameFromQuest}`, `gave ${monsterNameFromQuest}`] : ['delivered', 'gave'],
              weight: 3 },
            { keywords: ['complete', 'finish', 'accomplish'], triggers: ['quest completed', 'task finished', 'objective achieved'], weight: 5 }
        ];

        if (actionText.startsWith("defeated ") && monsterNameFromQuest && actionText.includes(monsterNameFromQuest)) {
            isCompleted = true;
        }

        if (quest.category === questCategories.DELIVERY && actionText.includes("delivered")) {
            if (monsterNameFromQuest && actionText.includes(monsterNameFromQuest)) {
                 isCompleted = true;
            } else if (!monsterNameFromQuest && (actionText.includes("package") || actionText.includes("item"))) {
                 isCompleted = true;
            }
        }

        if (!isCompleted) {
            for (const pattern of actionPatterns) {
                const hasQuestKeyword = pattern.keywords.some(kw => questText.includes(kw));
                const hasActionTrigger = pattern.triggers.some(trg => actionText.includes(trg));
                if (hasQuestKeyword && hasActionTrigger) {
                    completionScore += pattern.weight;
                }
            }
            const questTargets = extractQuestTargets(questText);
            const actionTargets = extractQuestTargets(actionText);
            if (questTargets.some(qt => actionTargets.includes(qt))) {
                completionScore += 2;
            }
            if (quest.location && player.currentLocation.toLowerCase() === quest.location.toLowerCase()) {
                completionScore += 1;
            }
            const requiredScore = quest.difficulty === 'Easy' ? 3 : quest.difficulty === 'Medium' ? 4 : 5;
            if (completionScore >= requiredScore) {
                isCompleted = true;
            }
        }

        if (isCompleted && !quest.rewardsAwarded) {
            quest.completed = true;
            quest.dateCompleted = new Date().toLocaleDateString();
            window.displayMessage(`🎉 Quest completed: ${quest.title}!`, 'success');

            const r = quest.rewards || { gold: 10, experience: 15 };
            window.updateGold(r.gold, `reward for ${quest.title}`);
            window.gainExperience(r.experience); // This will handle level up
            console.log(`[checkQuestCompletion] Awarded for "${quest.title}": ${r.gold} gold, ${r.experience} XP.`);
            quest.rewardsAwarded = true;
        }
    });
}


// --- Main Iterative Logic ---
async function runIterativeLeveling() {
    // Step 1: Character Setup
    player = {
        name: "JulesTest", class: "warrior", gender: "female", level: 1, exp: 0, expToNextLevel: 100,
        hp: 120, maxHp: 120, gold: 50, inventory: [], equipment: {}, quests: [],
        currentLocation: "Pedena Town Square",
        skills: [], abilities: [] // Ensure these are arrays
    };
    player.stats = { ...baseStatsTemplate }; // Initialize stats properly
    window.player = player;
    window.CharacterManager.initializeCharacter(player, "warrior");
    console.log(`Character initialized: ${player.name}, Lvl ${player.level}, HP ${player.hp}/${player.maxHp}, XP ${player.exp}/${player.expToNextLevel}`);
    console.log(`Initial Stats: STR ${player.stats.strength}, CON ${player.stats.constitution}, DEX ${player.stats.dexterity}`);


    // Step 2: Iterative Quest Completion Loop
    let questsAttempted = 0;
    const maxQuests = 3;

    while (player.level < 2 && questsAttempted < maxQuests) {
        questsAttempted++;
        console.log(`\n--- Attempting Quest #${questsAttempted} ---`);
        if(player.hp < player.maxHp) { // Heal if damaged from previous quest
             player.hp = player.maxHp;
             console.log(`Player healed to ${player.hp}/${player.maxHp}`);
        }


        await generateQuest();
        if (!player.quests || player.quests.length === 0 || !player.quests[player.quests.length - questsAttempted]) { // check based on attempt
            console.error("Failed to generate quest for attempt " + questsAttempted + ". Ending attempts.");
            break;
        }
        const currentQuest = player.quests[player.quests.length - 1]; // Always get the latest quest
        console.log(`Generated Quest: "${currentQuest.title}" (Diff: ${currentQuest.difficulty}, Cat: ${currentQuest.category})`);
        console.log(`Objective: "${currentQuest.objective}"`);
        console.log(`Location: "${currentQuest.location}"`);

        let monsterName = null;
        let questLocation = currentQuest.location;

        const combatObjectiveMatch = currentQuest.objective.match(/(?:eliminate|defeat|subdue) (?:the\s)?(.*?)(?: at| in| menacing) (?:the\s)?(.*?)\.?$/i);
        if (combatObjectiveMatch && combatObjectiveMatch[1]) {
            monsterName = combatObjectiveMatch[1].trim();
            currentQuest.parsedMonsterName = monsterName;
            console.log(`Parsed for combat: Target="${monsterName}", Location="${questLocation}" (from quest field)`);
        } else {
            const deliveryMatch = currentQuest.objective.match(/(?:deliver|retrieve) (?:the\s)?(.*?)(?: to| from)/i);
            if(deliveryMatch && deliveryMatch[1]){
                currentQuest.parsedMonsterName = deliveryMatch[1].trim();
                console.log(`Parsed for non-combat: TargetItem="${currentQuest.parsedMonsterName}"`);
            }
        }

        if ((currentQuest.category === questCategories.COMBAT || (currentQuest.category === questCategories.TUTORIAL && monsterName) ) && monsterName) {
            const inappropriateKeywords = ["puppy", "kitten", "child", "pet", "lost friend", "villager", "merchant", "civilian"];
            if (inappropriateKeywords.some(keyword => monsterName.toLowerCase().includes(keyword))) {
                console.log(`[Validation] Inappropriate combat target: "${monsterName}". Skipping quest "${currentQuest.title}".`);
                player.quests.pop();
                continue;
            }
        }

        if (questLocation && player.currentLocation.toLowerCase() !== questLocation.toLowerCase()) {
            console.log(`Navigating from ${player.currentLocation} to ${questLocation}...`);
            player.currentLocation = questLocation;
            window.displayMessage(`You have arrived at ${questLocation}.`, 'exploration');
            window.addToConversationHistory('assistant', `Arrived at ${questLocation}.`);
        } else {
            console.log(`Already at or no specific location for quest "${currentQuest.title}". Current: ${player.currentLocation}`);
        }

        let combatWon = false;
        let enemyForQuestCompletion;

        if ((currentQuest.category === questCategories.COMBAT || (currentQuest.category === questCategories.TUTORIAL && monsterName)) && monsterName) {
            console.log(`Attempting to engage "${monsterName}" for quest "${currentQuest.title}"...`);
            const enemy = {
                name: monsterName,
                hp: 20 + (player.level * 5), maxHp: 20 + (player.level * 5), currentHp: 20 + (player.level*5),
                attack: 5 + player.level, defense: 1 + player.level, level: player.level, type: "Beast",
                expReward: 30 + player.level * 10, goldDrop: 15 + player.level * 5
            };
            enemyForQuestCompletion = enemy; // Store for later action string

            await window.CombatSystem.initiateCombat(player, enemy, player.currentLocation);

            if (window.CombatSystem.combatState.isActive) {
                console.log(`Combat initiated with ${enemy.name}. Player HP: ${player.hp}, Enemy HP: ${window.CombatSystem.combatState.currentEnemy.currentHp}`);
                let playerAttacks = 0;
                const maxPlayerAttacks = 5;

                while (window.CombatSystem.combatState.isActive && playerAttacks < maxPlayerAttacks) {
                    const currentActor = window.CombatSystem.combatState.turnOrder[window.CombatSystem.combatState.currentTurn];
                    if (currentActor === 'player') {
                        await window.CombatSystem.handleCombatCommand("attack");
                        console.log(`Player attacks ${enemy.name}. Player HP: ${player.hp}, Enemy HP: ${window.CombatSystem.combatState.currentEnemy?.currentHp}`);
                        playerAttacks++;
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 50)); // Allow event loop for enemy turn (processed by CS)
                    }
                    if (window.CombatSystem.combatState.currentEnemy && window.CombatSystem.combatState.currentEnemy.currentHp <= 0) {
                        console.log(`${enemy.name} was defeated!`);
                        combatWon = true;
                        break;
                    }
                    if (player.hp <= 0) {
                        console.log(`${player.name} was defeated! Combat lost.`);
                        combatWon = false;
                        break;
                    }
                }
                if (playerAttacks >= maxPlayerAttacks && window.CombatSystem.combatState.isActive) {
                    console.log("Max player attacks reached in combat. Forcing combat end (stalemate).");
                    window.CombatSystem.endCombat('stalemate', player, window.CombatSystem.combatState.currentEnemy);
                }

                if (combatWon && enemyForQuestCompletion && !currentQuest.rewardsAwarded) {
                    console.log(`Awarding direct combat rewards for ${enemyForQuestCompletion.name}: ${enemyForQuestCompletion.expReward} XP, ${enemyForQuestCompletion.goldDrop} Gold`);
                    window.gainExperience(enemyForQuestCompletion.expReward);
                    window.updateGold(enemyForQuestCompletion.goldDrop, `loot from ${enemyForQuestCompletion.name}`);
                    // Now call checkQuestCompletion using the defeated enemy's name
                    checkQuestCompletion(`defeated ${enemyForQuestCompletion.name}`);
                }


            } else {
                console.log(`Failed to initiate combat with ${monsterName}.`);
            }
        } else {
            console.log(`Simulating completion for non-combat quest: "${currentQuest.title}"`);
            let actionString = `completed action for quest ${currentQuest.title}`;
            if (currentQuest.category === questCategories.DELIVERY && currentQuest.parsedMonsterName) {
                actionString = `delivered ${currentQuest.parsedMonsterName.toLowerCase()} for quest ${currentQuest.title}`;
            }
            checkQuestCompletion(actionString);
        }

        console.log(`End of Quest Attempt ${questsAttempted}: Player Level: ${player.level}, XP: ${player.exp}/${player.expToNextLevel}, HP: ${player.hp}/${player.maxHp}, Gold: ${player.gold}. Quests completed: ${player.quests.filter(q=>q.completed).length}`);
    }

    // Step 3: Final Verification
    console.log(`\n--- Subtask Finished ---`);
    console.log(`Final Player Level: ${player.level}. Total Quests Attempted: ${questsAttempted}.`);
    if (player.level >= 2) {
        console.log("SUCCESS: JulesTest reached Level 2.");
    } else {
        console.log(`FAILURE: JulesTest did not reach Level 2. Final Level: ${player.level}, XP: ${player.exp}/${player.expToNextLevel}.`);
    }
}

// --- Run the Main Logic ---
runIterativeLeveling().catch(err => {
    console.error("Error during iterative leveling subtask:", err);
});
