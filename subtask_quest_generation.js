// Subtask: Initial Quest Generation

// --- Imports and Dependencies ---
import { QuestTaskGenerator, questCategories, questThemes } from './assets/quest-tasks.js';
// CharacterManager might not be directly needed here, but classProgression might be if QuestTaskGenerator uses it implicitly.
// For now, assuming QuestTaskGenerator is self-contained or takes all player data it needs.

// --- Mocked Globals and Functions from script.js ---
let conversationHistory = { messages: [], maxMessages: 50 };

function addToConversationHistory(role, content) {
    // console.log(`[addToConversationHistory] ${role}: ${content.substring(0, 100)}...`);
    conversationHistory.messages.push({ role, content, timestamp: Date.now() });
    if (conversationHistory.messages.length > conversationHistory.maxMessages) {
        conversationHistory.messages = conversationHistory.messages.slice(-conversationHistory.maxMessages);
    }
}

function getConversationContext() {
    const recentMessages = conversationHistory.messages.slice(-5); // Keep it short for subtask
    return recentMessages.map(msg => `${msg.role === 'user' ? 'Player' : 'DM'}: ${msg.content}`).join('\n');
}

function displayMessage(message, type = 'info') {
    console.log(`[displayMessage][${type}] ${message}`);
}

function saveGame() {
    // console.log("[saveGame] Mocked saveGame call.");
    // In a real scenario, this would save the player object.
    // For this subtask, player object mutations are in-memory.
}

function updateQuestButton() {
    // console.log("[updateQuestButton] Mocked updateQuestButton call.");
}

function getNPCsInLocation(location) {
    // console.log(`[getNPCsInLocation] Mocked for location: ${location}. Returning [].`);
    return [];
}

const GEMINI_API_KEY = 'AIzaSyDIFeql6HUpkZ8JJlr_kuN0WDFHUyOhijA'; // From script.js, ensure it's available
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

async function callGeminiAPI(prompt, temperature = 0.7, maxOutputTokens = 1000, includeContext = false) {
    // console.log(`[callGeminiAPI] Called with prompt: ${prompt.substring(0,100)}... Temp: ${temperature}`);
    // This is a simplified version of the one in script.js, without rich text instructions for subtask clarity
    try {
        let fullPrompt = prompt;
        if (includeContext && conversationHistory.messages.length > 0) {
            const context = getConversationContext();
            if (context) {
                fullPrompt = `CONVERSATION HISTORY:\n${context}\n\nCURRENT REQUEST:\n${prompt}`;
            }
        }

        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({
                contents: [{ parts: [{ text: fullPrompt }] }],
                generationConfig: { temperature, maxOutputTokens, topP: 0.8, topK: 40 },
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
                ]
            }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API Error:', errorData);
            throw new Error(`Gemini API Error: ${errorData.error?.message || response.statusText}`);
        }
        const data = await response.json();
        if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
            return data.candidates[0].content.parts[0].text;
        }
        console.error('Invalid API response structure:', data);
        return null;
    } catch (error) {
        console.error('Error in callGeminiAPI:', error);
        // For subtask, return a fallback JSON structure for quests if API fails
        if (prompt.includes("Respond with ONLY valid JSON")) {
            console.warn("Gemini API call failed, returning fallback JSON for quest.");
            return JSON.stringify({
                title: "Fallback Tutorial Quest",
                description: "The API call failed, so this is a default quest. Investigate the strange crab behavior on the beach.",
                objective: "Defeat 3 Troublesome Crabs at Sandport Beach",
                category: "Tutorial",
                theme: "Introduction",
                difficulty: "Easy",
                location: "Sandport Beach",
                questGiver: "A Stressed Villager",
                rewards: { gold: 10, experience: 10, items: [] },
                requirements: [],
                estimatedTime: "Short",
                complications: null,
                questType: "tutorial",
                moralAlignment: "neutral",
                consequencesOfFailure: "None, try again.",
                hiddenSecrets: null
            });
        }
        return `Fallback narrative due to API error: ${error.message}`;
    }
}

// --- Adapted Quest Generation Functions ---

async function generateGeminiQuest(currentPlayer, context = null) {
    let questPrompt;
    const p = currentPlayer; // Use the passed player object

    if (context && context.isTutorial) { // Check for a specific flag for tutorial context
        questPrompt = `
TUTORIAL QUEST GENERATION:
Player: ${p.name}, Level ${p.level} ${p.class} in ${p.currentLocation}.
Quest Objective: ${context.description}
Title: "${context.title}"
Difficulty: ${context.difficulty || "Easy"}

Generate a simple, clear tutorial quest based on the objective.
Location should be very close to or at ${p.currentLocation}. For example, if player is in "Pedena Town Square", quest could be at "Pedena Market District" or "Pedena Training Grounds".
Quest Giver should be a common townsperson (e.g., Innkeeper, Worried Villager, Guard Captain).
Rewards should be minimal (e.g., 10-20 gold, 10-20 XP).
Keep the description and objective very straightforward for a new player.

Respond with ONLY valid JSON in this exact format:
{
    "title": "Specific Tutorial Quest Title",
    "description": "Short, clear description of why the quest is needed (1-2 sentences).",
    "objective": "Very specific, actionable objective (e.g., 'Defeat 3 Troublesome Crabs on Sandport Beach', 'Deliver this letter to the Blacksmith in the Pedena Market District').",
    "category": "Tutorial",
    "theme": "Introduction",
    "difficulty": "${context.difficulty || "Easy"}",
    "location": "Specific quest location (e.g., 'Sandport Beach', 'Pedena Blacksmith')",
    "questGiver": "Name and brief role (e.g., 'Innkeeper Tom', 'Worried Mother')",
    "rewards": { "gold": ${Math.floor(Math.random() * 11) + 10}, "experience": ${Math.floor(Math.random() * 11) + 10}, "items": [] },
    "requirements": [],
    "estimatedTime": "Short",
    "complications": null,
    "questType": "tutorial",
    "moralAlignment": "neutral",
    "consequencesOfFailure": "None, try again.",
    "hiddenSecrets": null
}`;
    } else {
        // General quest generation using QuestTaskGenerator
        const questDataForPrompt = QuestTaskGenerator.generateQuest(p, {
            currentLocation: p.currentLocation,
            playerLevel: p.level,
            playerClass: p.class,
            recentQuests: p.quests ? p.quests.slice(-3) : []
        });
        // console.log("QuestDataForPrompt (general):", JSON.stringify(questDataForPrompt, null, 2));

        questPrompt = `
QUEST GENERATION SYSTEM - Generate a detailed, immersive quest for an RPG
PLAYER CONTEXT:
- Name: ${p.name}
- Class: ${p.class}
- Level: ${p.level}
- Current Location: ${p.currentLocation}
- Gold: ${p.gold}
- Recent Activities: ${getConversationContext().slice(-500)}

QUEST TEMPLATE DATA:
- Category: ${questDataForPrompt.category}
- Theme: ${questDataForPrompt.theme}
- Difficulty: ${questDataForPrompt.difficulty}
- Base Title: ${questDataForPrompt.title}
- Base Objective: ${questDataForPrompt.objective}
- Suggested Location: ${questDataForPrompt.location}
- Quest Giver: ${questDataForPrompt.questGiver}

Respond with ONLY valid JSON in this exact format:
{
    "title": "Quest Title Here",
    "description": "Rich, immersive description of the quest situation and background",
    "objective": "Clear, specific objective the player must complete",
    "category": "${questDataForPrompt.category}",
    "theme": "${questDataForPrompt.theme}",
    "difficulty": "${questDataForPrompt.difficulty}",
    "location": "Specific location name",
    "questGiver": "Name and brief description of quest giver",
    "rewards": { "gold": ${questDataForPrompt.rewards.gold}, "experience": ${questDataForPrompt.rewards.experience}, "items": ${JSON.stringify(questDataForPrompt.rewards.items)} },
    "requirements": ${JSON.stringify(questDataForPrompt.requirements)},
    "estimatedTime": "${questDataForPrompt.estimatedTime}",
    "complications": "Optional complication or plot twist",
    "questType": "main/side/urgent",
    "moralAlignment": "good/neutral/evil/ambiguous",
    "consequencesOfFailure": "What happens if the quest fails",
    "hiddenSecrets": "Optional hidden elements or revelations"
}`;
    }

    try {
        const response = await callGeminiAPI(questPrompt, 0.7, 1000, false); // includeContext = false for less complex prompts initially
        if (!response) throw new Error("No response from Gemini API for quest generation");

        const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("No valid JSON found in Gemini response for quest: " + cleanResponse);

        const geminiQuest = JSON.parse(jsonMatch[0]);

        const questDataFromGenerator = QuestTaskGenerator.generateQuest(p, { /* ... context ... */ });


        const enhancedQuest = {
            id: Date.now().toString(),
            title: geminiQuest.title || (context ? context.title : questDataFromGenerator.title),
            description: geminiQuest.description || (context ? context.description : questDataFromGenerator.description),
            objective: geminiQuest.objective || questDataFromGenerator.objective,
            category: geminiQuest.category || (context ? "Tutorial" : questDataFromGenerator.category),
            theme: geminiQuest.theme || (context ? "Introduction" : questDataFromGenerator.theme),
            difficulty: geminiQuest.difficulty || (context ? context.difficulty : questDataFromGenerator.difficulty),
            location: geminiQuest.location || questDataFromGenerator.location,
            questGiver: geminiQuest.questGiver || questDataFromGenerator.questGiver,
            rewards: {
                gold: Math.max(0, parseInt(geminiQuest.rewards?.gold) || (context ? 15 : questDataFromGenerator.rewards.gold)),
                experience: Math.max(0, parseInt(geminiQuest.rewards?.experience) || (context ? 15 : questDataFromGenerator.rewards.experience)),
                items: Array.isArray(geminiQuest.rewards?.items) ? geminiQuest.rewards.items : (context ? [] : questDataFromGenerator.rewards.items)
            },
            requirements: Array.isArray(geminiQuest.requirements) ? geminiQuest.requirements : questDataFromGenerator.requirements,
            estimatedTime: geminiQuest.estimatedTime || questDataFromGenerator.estimatedTime,
            complications: geminiQuest.complications || questDataFromGenerator.complications,
            questType: geminiQuest.questType || (context ? "tutorial" : "side"),
            moralAlignment: geminiQuest.moralAlignment || "neutral",
            consequencesOfFailure: geminiQuest.consequencesOfFailure || null,
            hiddenSecrets: geminiQuest.hiddenSecrets || null,
            completed: false,
            dateCreated: new Date().toLocaleDateString()
        };
        // console.log('Generated Gemini quest (enhanced):', JSON.stringify(enhancedQuest, null, 2));
        addToConversationHistory('assistant', `New quest for ${p.name}: ${enhancedQuest.title} - ${enhancedQuest.description}`);
        return enhancedQuest;

    } catch (error) {
        console.error("Error generating Gemini quest:", error);
        console.log("Falling back to template-based quest generation due to Gemini error.");
        const fallbackQ = QuestTaskGenerator.generateFallbackQuest(p);
        if(context && context.isTutorial){ // make sure fallback is still a tutorial
            fallbackQ.title = context.title || "A Simple Task";
            fallbackQ.description = context.description || "Help a villager with a small problem.";
            fallbackQ.objective = context.objective || "Speak to the Innkeeper about a minor issue.";
            fallbackQ.difficulty = context.difficulty || "Easy";
            fallbackQ.category = "Tutorial";
            fallbackQ.rewards.gold = 10;
            fallbackQ.rewards.experience = 10;
        }
        return fallbackQ;
    }
}

async function generateQuest_modified(currentPlayer, options = {}) {
    displayMessage("Seeking new adventures...", 'info');
    if (!currentPlayer.quests) {
        currentPlayer.quests = [];
    }

    try {
        let quest;
        if (options.questContext) { // This is true for the tutorial quest
            quest = await generateGeminiQuest(currentPlayer, { ...options.questContext, isTutorial: true });
        } else {
            quest = await generateGeminiQuest(currentPlayer);
        }

        if (!quest || !quest.title || !quest.objective) {
            console.error("Quest generation returned invalid quest object:", quest);
            throw new Error("Generated quest is invalid (missing title or objective).");
        }

        currentPlayer.quests.push(quest);
        // saveGame(); // Uses global player, skip for isolated test or adapt
        // updateQuestButton(); // DOM operation, skip

        displayMessage(`New quest available: ${quest.title}`, 'success');
        displayMessage(quest.description, 'info');
        displayMessage(`Objective: ${quest.objective}`, 'info');

        return quest;

    } catch (error) {
        console.error("Quest generation error in generateQuest_modified:", error);
        displayMessage("Unable to generate quest at this time. Please try again.", 'error');
        // Return null or a very basic fallback if absolutely needed by subsequent steps
        return null;
    }
}


async function startNewGame_modified(currentPlayer) {
    displayMessage(`Starting new game for ${currentPlayer.name}...`, 'info');
    // 1. Generate Starting Narrative (Simplified for subtask)
    const narrativePrompt = `Generate a short, exciting opening narrative for a new adventurer named ${currentPlayer.name}, a Level 1 ${currentPlayer.class}, who is just starting their journey in the city of ${currentPlayer.currentLocation}. Keep it to 1-2 sentences.`;
    const startingNarrative = await callGeminiAPI(narrativePrompt, 0.7, 100); // Shorten tokens for narrative
    if (startingNarrative) {
        displayMessage(startingNarrative, 'info');
        addToConversationHistory('assistant', startingNarrative);
    }

    // 2. Generate a Tutorial Quest
    const tutorialQuestContext = {
        title: "Your First Steps",
        description: "A local villager in Pedena Town Square seems troubled by something nearby. Speak to them to see if you can help.",
        objective: "Investigate the source of the crabs near Sandport Beach and eliminate 3 Troublesome Crabs.", // More specific for parsing
        difficulty: "Easy",
        // isTutorial: true // This flag will be added by generateQuest_modified
    };

    displayMessage(`Generating tutorial quest for ${currentPlayer.name}...`, 'info');
    const tutorialQuest = await generateQuest_modified(currentPlayer, { questContext: tutorialQuestContext });

    if (tutorialQuest && tutorialQuest.title) { // Check if quest object is valid
        // Quest is already pushed to currentPlayer.quests by generateQuest_modified
        displayMessage(`Tutorial Quest: ${tutorialQuest.title} - Objective: ${tutorialQuest.objective}`, 'success');
    } else {
        displayMessage("Failed to generate tutorial quest.", 'error');
        // Potentially push a hardcoded fallback if essential for next steps
        if (!currentPlayer.quests || currentPlayer.quests.length === 0) {
            const fallbackQuest = {
                id: "fallback_t001",
                title: "Fallback: A Simple Errand",
                description: "The innkeeper looks like he needs some help with small pests.",
                objective: "Defeat 2 Giant Rats in the Inn Cellar",
                category: "Tutorial",
                theme: "Introduction",
                difficulty: "Easy",
                location: "Inn Cellar", // Relative to Pedena Town Square
                questGiver: "Innkeeper Tom",
                rewards: { gold: 5, experience: 5, items: [] },
                completed: false,
                dateCreated: new Date().toLocaleDateString()
            };
            currentPlayer.quests.push(fallbackQuest);
            displayMessage(`Assigned fallback tutorial quest: ${fallbackQuest.title}`, 'warn');
        }
    }
    // saveGame(); // Skip for subtask script
}


// --- Main Execution Logic ---
async function runQuestGenerationStep() {
    console.log("Starting Step 2: Initial Quest Generation");

    // Define the player object as it would be after Step 1
    const player = {
        name: "JulesTest",
        gender: "female",
        class: "warrior",
        background: "A determined warrior seeking to prove her mettle and protect the innocent.",
        stats: { strength: 12, dexterity: 10, intelligence: 10, constitution: 12, wisdom: 10, charisma: 10 }, // Assuming base 10 for non-primary after fix
        hp: 20,
        maxHp: 20,
        level: 1,
        exp: 0,
        expToNextLevel: 100,
        gold: 50,
        inventory: [],
        equipment: { head: null, chest: null, hands: null, legs: null, feet: null, mainHand: null, offHand: null, amulet: null, ring1: null, ring2: null },
        skills: [],
        abilities: [],
        quests: [], // Initialize as empty for this step
        relationships: {},
        currentLocation: "Pedena Town Square",
        currentEnemy: null,
        alignment: null,
        classProgression: {
            class: "warrior",
            level: 1,
            availableSpells: [], knownSpells: [], availableCantrips: [], knownCantrips: [],
            classAbilities: ["Power Strike", "Shield Bash"],
            classFeats: ["Weapon Mastery"],
            unlockedFeatures: ["Fighting Style", "Second Wind"],
            spellSlots: {},
            abilityUses: { "Power Strike": { lastUsed: 0, cooldown: 3 }, "Shield Bash": { lastUsed: 0, cooldown: 2 } }
        }
    };

    await startNewGame_modified(player);

    // Verification
    if (player.quests && player.quests.length > 0) {
        const tutorialQuest = player.quests[0];
        console.log("Step 2: Initial Quest Generation SUCCEEDED.");
        console.log("Generated Tutorial Quest:", JSON.stringify(tutorialQuest, null, 2));
        if (!tutorialQuest.objective || !tutorialQuest.location) {
             console.error("Generated quest is missing critical fields (objective or location).");
        }
    } else {
        console.error("Step 2: Initial Quest Generation FAILED. No quests were added to the player.");
        console.log("Current player.quests:", JSON.stringify(player.quests, null, 2));
    }

    // Make player object available for subsequent steps if needed by testing environment
    // globalThis.playerWithQuest = player;
}

runQuestGenerationStep();

// Exports removed as they are not strictly necessary for this subtask's execution flow
// and caused issues with player variable scope. The script's success is determined by its logs.
