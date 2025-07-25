// Import game data and assets
import { QuestCharacterGenerator } from './assets/quest-character-names.js';
import { QuestTaskGenerator, questCategories, questThemes } from './assets/quest-tasks.js';
import { CharacterManager } from './game-logic/character-manager.js';
import { GameActions } from './game-logic/game-actions.js';
import { LocationManager } from './game-logic/location-manager.js';
import { classProgression, spellDefinitions, abilityDefinitions, featDefinitions } from './game-logic/class-progression.js';
import { ItemGenerator, ItemManager, itemCategories, itemRarity, statusEffects } from './assets/world-items.js';
import { TransactionMiddleware } from './game-logic/transaction-middleware.js';
import { ItemExchangeMiddleware } from './game-logic/item-exchange-middleware.js';
import { CombatSystem } from './game-logic/combat-system.js';
import { AlignmentSystem } from './game-logic/alignment-system.js';
import { PartyManager } from './game-logic/party-manager.js';
import { MultiCombatSystem } from './game-logic/multi-combat-system.js';
import { RelationshipMiddleware } from './game-logic/relationship-middleware.js';
import { HelpSystem } from './game-logic/help-system.js';
import { countries, cities, regions } from './assets/world-data.js';
import { BGMManager } from './game-logic/bgm-manager.js';

let GEMINI_API_KEY = ''; // We will load this from settings
let GEMINI_API_URL = ``; // We will build this dynamically

let gameSettings = {
    apiKey: '',
    model: '' // Default model
};

function saveSettings() {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('pedenaGameSettings', JSON.stringify(gameSettings));
        console.log("Game settings saved:", gameSettings);
    }
}

function loadSettings() {
    if (typeof localStorage !== 'undefined') {
        const savedSettings = localStorage.getItem('pedenaGameSettings');
        if (savedSettings) {
            gameSettings = JSON.parse(savedSettings);
        }
    }

    // Update variables and UI elements
    GEMINI_API_KEY = gameSettings.apiKey;
    GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${gameSettings.model}:generateContent?key=${GEMINI_API_KEY}`;

    const modelSelect = document.getElementById('gemini-model-select');
    const apiKeyInput = document.getElementById('gemini-api-key-input');

    if (modelSelect) modelSelect.value = gameSettings.model;
    if (apiKeyInput) apiKeyInput.value = gameSettings.apiKey;

    console.log("Game settings loaded:", gameSettings);
}

//Global delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
window.delay = delay;

// Game State
let isIllustrationModeActive = false;
let userInputCounterForImage = 0;
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
    relationships: {}, // NPC relationships: { npcName: { status: 'neutral', trust: 50, interactions: 0 } }
    currentLocation: 'Pedena Town Square',
    currentEnemy: null, // For combat
    alignment: null // Will be initialized by AlignmentSystem
};

// Initialize Party and Multi-Combat Systems
let partyManager;
let multiCombatSystem;

// Initialize BGM Manager
let bgmManager;

// Utility function to validate and fix character stats
function validateAndFixStats(player) {
    const minStatValue = 10;
    let statsFixed = false;

    // Ensure stats object exists
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
        // Check and fix each stat
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

// Auto-fix stats on game load and save
function autoFixStatsInStorage() {
    try {
        // Check current player stats
        if (player && validateAndFixStats(player)) {
            console.log('Stats were fixed for current player');
            updatePlayerStatsDisplay();
        }

        // Check saved game data
        const savedGame = localStorage.getItem('pedenaRPGSave');
        if (savedGame) {
            const saveData = JSON.parse(savedGame);
            let saveDataModified = false;

            if (saveData.player) {
                if (validateAndFixStats(saveData.player)) {
                    saveDataModified = true;
                    console.log('Fixed stats in saved game data');
                }
            } else if (saveData.stats) {
                // Handle old save format
                const tempPlayer = { stats: saveData.stats };
                if (validateAndFixStats(tempPlayer)) {
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

        // Check character progression data
        if (player && player.name) {
            const progressionData = localStorage.getItem(`progression_${player.name}`);
            if (progressionData) {
                const progData = JSON.parse(progressionData);
                if (progData.stats) {
                    const tempPlayer = { stats: progData.stats };
                    if (validateAndFixStats(tempPlayer)) {
                        progData.stats = tempPlayer.stats;
                        localStorage.setItem(`progression_${player.name}`, JSON.stringify(progData));
                        console.log('Fixed stats in character progression data');
                    }
                }
            }
        }

    } catch (error) {
        console.error('Error during stats validation:', error);
    }
};

// NPC Persistence System
let gameWorld = {
    npcs: new Map(), // location -> array of NPCs
    locationMemory: new Map(), // location -> description cache
    lastNPCInteraction: null,
    // --- ADD THE NEXT TWO LINES ---
    time: new Date(864, 5, 12, 8, 0, 0), // Default game start time
    activeEvents: []
};

const showMapBtn = document.getElementById('show-map-btn');
const mapInterface = document.getElementById('map-interface');
const mapDisplay = document.getElementById('map-display');
const mapInfoPanel = document.getElementById('map-info-panel');
const mapInfoContent = document.getElementById('map-info-content');
const exitMapBtn = document.getElementById('exit-map-btn');

function displayMap() {
    mapInterface.classList.remove('hidden');
    mapDisplay.innerHTML = ''; // Clear previous map

    // Create a button for each country
    for (const countryKey in countries) {
        const country = countries[countryKey];
        const countryBtn = document.createElement('button');
        countryBtn.className = 'country-btn';
        countryBtn.textContent = country.name;
        countryBtn.title = country.description;
        countryBtn.onclick = () => showCountryDetails(countryKey);
        mapDisplay.appendChild(countryBtn);
    }
}

function showCountryDetails(countryKey) {
    const country = countries[countryKey];
    const countryCities = Object.values(cities).filter(city => city.country === countryKey);
    const countryRegions = Object.values(regions).filter(region => region.country === countryKey);

    let detailsHTML = `
        <h5 class="font-bold text-xl mb-2 text-center">${country.name}</h5>
        <p class="text-sm italic mb-4 text-center">"${country.description}"</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Ruler:</strong> ${country.ruler}</p>
        <p><strong>Climate:</strong> ${country.climate}</p>
    `;

    if (countryCities.length > 0) {
        detailsHTML += `<h6>Cities:</h6><ul>`;
        countryCities.forEach(city => {
            detailsHTML += `<li>${city.name} (${city.type})</li>`;
        });
        detailsHTML += `</ul>`;
    }

    if (countryRegions.length > 0) {
        detailsHTML += `<h6>Regions:</h6><ul>`;
        countryRegions.forEach(region => {
            detailsHTML += `<li>${region.name} (${region.type})</li>`;
        });
        detailsHTML += `</ul>`;
    }

    mapInfoContent.innerHTML = detailsHTML;
}

// Conversation History System for AI Context
let conversationHistory = {
    messages: [], // Array of {role: 'user'|'assistant', content: string, timestamp: number}
    maxMessages: 75
};

async function addToConversationHistory(role, content) {
    conversationHistory.messages.push({
        role: role,
        content: content,
        timestamp: Date.now()
    });

    // Keep only the last 50 messages
    if (conversationHistory.messages.length > conversationHistory.maxMessages) {
        conversationHistory.messages = conversationHistory.messages.slice(-conversationHistory.maxMessages);
    }

    // Add to alignment system for assessment
    if (role === 'assistant' && conversationHistory.messages.length >= 2) {
        const lastUserMessage = conversationHistory.messages
            .slice(-2)
            .find(msg => msg.role === 'user');

        if (lastUserMessage) {
            const alignmentChange = await AlignmentSystem.addMessage(
                lastUserMessage.content,
                content
            );

            if (alignmentChange !== null) {
                await processAlignmentChange(alignmentChange);
            }
        }
    }
}

function displaySceneryImage(imageUrl) {
    const displayDiv = document.getElementById('scenery-image-display');
    const imgElement = document.getElementById('generated-scenery-image');

    if (displayDiv && imgElement) {
        imgElement.src = imageUrl;
        displayDiv.classList.remove('hidden');
    } else {
        console.error("Scenery image display elements not found.");
        displayMessage("Error: Could not display scenery image UI.", "error");
    }
}

async function generateAndDisplaySceneryImage() {
    const illustrationModeBtn = document.getElementById('illustration-mode-btn');
    let originalButtonHTML = '';

    if (illustrationModeBtn) {
        originalButtonHTML = illustrationModeBtn.innerHTML;
        illustrationModeBtn.innerHTML = `<i class="ra ra-hourglass-o mr-2"></i>Generating Scenery...`;
        illustrationModeBtn.disabled = true;
    } else {
        // If button isn't found, still display a general loading message
        displayMessage("Generating scenery image...", "info");
    }

    const sceneryPrompt = await generateSceneryImagePrompt();

    if (!sceneryPrompt || sceneryPrompt === "A mysterious and intriguing landscape.") {
        displayMessage("Failed to generate a suitable image prompt.", "error");
        // Remove loading indicator if it were more persistent
        return;
    }

    if (!player.portraitUrl || player.portraitUrl.trim() === '') {
        displayMessage("Character portrait not found. Cannot generate scenery image.", "error");
        // Remove loading indicator
        return;
    }

    // Generate consistent seed based on character name (same as portrait generation)
    const characterSeed = player.name ? player.name.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
    }, 0) : 12345;

    try {
        const response = await fetch('https://ainovel.site/api/generate-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                prompt: sceneryPrompt,
                referenceImageUrl: player.portraitUrl,
                imageSize: "landscape_16_9",
                numInferenceSteps: 50,
                guidanceScale: 7.5,
                seed: Math.abs(characterSeed),
                negative_prompt: "text, watermark, signature, poorly drawn character, disfigured character, ugly, blurry character",
                control_image_strength: 0.6,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Image generation service error:', response.status, errorText);
            displayMessage(`Image generation service returned an error: ${response.status}.`, "error");
            // Remove loading indicator
            return;
        }

        const result = await response.json();

        if (result.imageUrl) {
            displaySceneryImage(result.imageUrl); // << UPDATED HERE
            // displayMessage("Scenery image generated!", "success"); // displaySceneryImage will handle visibility
        } else {
            console.error("Image generation failed or did not return an image URL. Response:", result);
            displayMessage("Image generation failed or did not return an image URL.", "error");
        }
    } catch (error) {
        console.error("Error during image generation API call:", error);
        displayMessage("Failed to connect to image generation service.", "error");
    } finally {
        if (illustrationModeBtn) {
            if (isIllustrationModeActive) {
                illustrationModeBtn.innerHTML = `<i class="ra ra-image mr-2"></i>Illustration Mode: ON`;
            } else {
                illustrationModeBtn.innerHTML = `<i class="ra ra-image mr-2"></i>Illustration Mode`;
            }
            illustrationModeBtn.disabled = false;
        }
    }
}

async function generateSceneryImagePrompt() {
    let contextText = `Player: ${player.name}, a ${player.class}.\n`;
    contextText += `Current Location: ${player.currentLocation}.\n`;

    // Add recent conversation history (last 2-3 messages)
    if (conversationHistory.messages && conversationHistory.messages.length > 0) {
        const recentMessages = conversationHistory.messages.slice(-3); // Get last 3 messages
        contextText += "Recent Events:\n";
        recentMessages.forEach(msg => {
            const role = msg.role === 'user' ? 'Player' : 'DM';
            // Strip rich text from conversation history for the prompt
            const cleanContent = stripAllRichTextFormatting(msg.content);
            contextText += `- ${role} said: "${cleanContent}"\n`;
        });
    }

    // Add active quest information
    if (player.quests && player.quests.length > 0) {
        const activeQuest = player.quests.find(q => !q.completed);
        if (activeQuest) {
            contextText += `Active Quest: "${stripAllRichTextFormatting(activeQuest.title)}"\n`;
            contextText += `Objective: "${stripAllRichTextFormatting(activeQuest.objective)}"\n`;
        }
    }

    const geminiPrompt = `You are an AI assistant generating a descriptive text prompt for an image generation model.
The image to be generated will use a reference image of the player's character, and your prompt will describe the scenery and atmosphere around them.
Generate a concise (1-2 sentences, max 50 words) and vivid image prompt.
Focus on the environment, time of day, weather, mood, and any significant nearby landmarks or elements based on the provided game context.
Do NOT describe the character, as that will come from the reference image, but MOST IMORTANTLY do describe what the character, referenced by his name is doing.
Example output format: 'A misty forest at dawn, with ancient, gnarled trees and a faint glow emanating from a hidden ruin in the distance.'

Game Context:
${contextText}

Image Prompt:`;

    try {
        const imagePrompt = await callGeminiAPI(geminiPrompt, 0.7, 100, false);
        if (imagePrompt && imagePrompt.trim() !== '') {
            console.log("Generated Image Prompt:", imagePrompt);
            return imagePrompt.trim();
        } else {
            console.error("Gemini API returned empty or no text for image prompt.");
            return "A mysterious and intriguing landscape."; // Fallback prompt
        }
    } catch (error) {
        console.error("Error calling Gemini API for image prompt:", error);
        return "A mysterious and intriguing landscape."; // Fallback prompt
    }
}

// Function to update the visibility of the Illustration Mode button
function updateIllustrationButtonVisibility() {
    const illustrationBtn = document.getElementById('illustration-mode-btn');
    if (illustrationBtn) {
        if (player && player.portraitUrl && player.portraitUrl.trim() !== '') {
            illustrationBtn.classList.remove('hidden');
        } else {
            illustrationBtn.classList.add('hidden');
        }
    } else {
        // It's possible this function is called before the button is in the DOM
        // or if the game-play-screen is not active.
        // console.warn("Illustration mode button not found in DOM during visibility update.");
    }
}

async function processAlignmentChange(change) {
    console.log("--- Alignment Check Triggered. Change value:", change);

    if (change === null || typeof change === 'undefined') {
        console.error("Alignment change calculation failed. Aborting update.");
        return;
    }

    try {
        const result = AlignmentSystem.updateAlignment(player, change);

        if (!result || typeof result.changed !== 'boolean' || typeof result.newType !== 'string') {
            console.error("Invalid object returned from AlignmentSystem.updateAlignment:", result);
            return;
        }

        if (result.changed) {
            const changeText = (change.good && change.good > 0) || (change.law && change.law > 0) ? 'improved' : 'declined';
            const newAlignmentName = result.newType;

            displayMessage(`Your moral standing has ${changeText}. You are now ${newAlignmentName}.`,
                change > 0 ? 'success' : 'error');

            const description = AlignmentSystem.getAlignmentDescription(player);
            if (description) {
                displayMessage(description, 'info');
            }
        }
    } catch (e) {
        console.error("An error occurred inside the processAlignmentChange function:", e);
    }

    saveGame();
}

function updateRelationship(npcName, statusChange = 0, trustChange = 0, npcDescription = null, forceCreate = false) { // <-- ADD forceCreate
    if (!player.relationships) {
        player.relationships = {};
    }

    const alignmentModifier = AlignmentSystem.getAlignmentModifier(player);

    // Check if the relationship already exists
    if (!player.relationships[npcName]) {
        // **This block is now conditional**
        if (!forceCreate) {
            // If not forcing creation, just return and do nothing for new NPCs.
            return null;
        }

        // This part now only runs if forceCreate is true
        const baseTrust = 50 + (alignmentModifier.npcTrustModifier || 0);
        player.relationships[npcName] = {
            status: 'neutral',
            trust: Math.max(0, Math.min(100, baseTrust)),
            interactions: 0,
            lastInteraction: Date.now(),
            metAt: player.currentLocation,
            description: npcDescription || "A person you've encountered in your travels.",
            firstMeeting: new Date().toLocaleDateString()
        };
        // This message will now only appear when intended
        displayMessage(`You've established a new relationship with ${npcName}.`, 'success');
    }

    const relationship = player.relationships[npcName];
    if (!relationship) return; // Exit if relationship still doesn't exist

    // Apply trust change, modified by alignment
    const modifiedTrustChange = trustChange + ((alignmentModifier.npcTrustModifier || 0) * 0.1);
    relationship.trust = Math.max(0, Math.min(100, relationship.trust + modifiedTrustChange));
    relationship.interactions++;
    relationship.lastInteraction = Date.now();

    if (npcDescription && relationship.description !== npcDescription) {
        relationship.description = npcDescription;
    }

    // Update status based on new trust level
    const oldStatus = relationship.status;
    if (relationship.trust >= 80) relationship.status = 'allied';
    else if (relationship.trust >= 60) relationship.status = 'friendly';
    else if (relationship.trust >= 40) relationship.status = 'neutral';
    else if (relationship.trust >= 20) relationship.status = 'unfriendly';
    else relationship.status = 'hostile';

    if (oldStatus !== relationship.status) {
        displayMessage(`Your relationship with ${npcName} is now ${relationship.status}.`, 'info');
    }

    return relationship;
}

function getConversationContext() {
    // Return the conversation history formatted for AI context
    const recentMessages = conversationHistory.messages.slice(-20); // Last 20 for context
    const contextString = recentMessages.map(msg =>
        `${msg.role === 'user' ? 'Player' : 'DM'}: ${msg.content}`
    ).join('\n');

    return contextString;
}

function saveConversationHistory() {
    localStorage.setItem('pedenaConversationHistory', JSON.stringify(conversationHistory));
}

function loadConversationHistory() {
    const saved = localStorage.getItem('pedenaConversationHistory');
    if (saved) {
        conversationHistory = JSON.parse(saved);
        // Ensure maxMessages property exists
        if (!conversationHistory.maxMessages) {
            conversationHistory.maxMessages = 50;
        }
    }
}

async function checkNPCMentionsAndAdd(aiResponse, playerCommand, gameContextPlayer) {
    console.log("checkNPCMentionsAndAdd: Scanning AI response for NPC mentions...");

    // Ensure the RelationshipMiddleware is available on the window object
    if (!window.RelationshipMiddleware) {
        console.error("RelationshipMiddleware is not available. Cannot process NPC mentions.");
        return;
    }

    try {
        // Use the middleware to intelligently extract potential NPC names from the AI's narrative
        const npcNames = await RelationshipMiddleware.extractNPCNames(aiResponse, gameContextPlayer);

        if (npcNames.length === 0) {
            console.log("checkNPCMentionsAndAdd: No NPC names were identified in the AI response.");
            return;
        }

        console.log("checkNPCMentionsAndAdd: Identified potential NPCs:", npcNames);

        for (const npcName of npcNames) {
            // Resolve the NPC's canonical identity and get a description for them
            const identity = await RelationshipMiddleware.resolveNpcIdentity(npcName, gameContextPlayer.relationships || {}, playerCommand, aiResponse);

            // If the AI determines the name is not actually an NPC, skip it
            if (identity.description === 'Not an NPC.') {
                console.log(`checkNPCMentionsAndAdd: Skipping relationship creation for "${npcName}" as it was identified as a non-NPC entity.`);
                continue;
            }

            // Check if this NPC already exists in the current location's NPC list
            const existingNPCsInLocation = getNPCsInLocation(gameContextPlayer.currentLocation);
            const npcAlreadyInLocation = existingNPCsInLocation.some(npc => npc.name === identity.canonicalName);

            // If they are not in the location, create and save them
            if (!npcAlreadyInLocation) {
                const newNPC = createNPC(identity.canonicalName, identity.description, gameContextPlayer.currentLocation);
                saveNPCToLocation(newNPC, gameContextPlayer.currentLocation);
            }

            // Ensure a relationship entry exists for this NPC, creating it if it's the first time.
            updateRelationship(identity.canonicalName, 0, 0, identity.description, true); // forceCreate = true
        }
    } catch (error) {
        console.error("An error occurred in checkNPCMentionsAndAdd:", error);
    }
}

// Donation Modal Elements
const donationModal = document.getElementById('donation-modal');
const donationModalCloseBtn = document.getElementById('donation-modal-close-btn');
const donateBtn = document.getElementById('donate-btn');

// DOM Elements
const startScreen = document.getElementById('start-screen');
const newGameBtn = document.getElementById('new-game-btn');
const loadGameBtn = document.getElementById('load-game-btn');
const characterCreationScreen = document.getElementById('character-creation-screen');
const charNameInput = document.getElementById('char-name');
const charClassSelect = document.getElementById('char-class');
const charGenderRadios = document.querySelectorAll('input[name="char-gender"]');
const charBackgroundTextarea = document.getElementById('char-background');
const generateBackgroundBtn = document.getElementById('generate-background-btn');
const createCharacterBtn = document.getElementById('create-character-btn');
const gamePlayScreen = document.getElementById('game-play-screen');
const playerNameDisplay = document.getElementById('player-name');
const playerLevelDisplay = document.getElementById('player-level');
const playerHpDisplay = document.getElementById('player-hp');
const gameOutput = document.getElementById('game-output');
const customCommandInput = document.getElementById('custom-command-input');
const executeCommandBtn = document.getElementById('execute-command-btn');
const saveGameBtn = document.getElementById('save-game-btn');
const newQuestBtn = document.getElementById('new-quest-btn');
const showInventoryBtn = document.getElementById('show-inventory-btn');
const showShopBtn = document.getElementById('show-shop-btn');
const showBackgroundBtn = document.getElementById('show-background-btn');

const shopInterface = document.getElementById('shop-interface');
const shopItemsDisplay = document.getElementById('shop-items');
const exitShopBtn = document.getElementById('exit-shop-btn');

const inventoryInterface = document.getElementById('inventory-interface');
const inventoryItemsDisplay = document.getElementById('inventory-items');
const exitInventoryBtn = document.getElementById('exit-inventory-btn');

const skillsInterface = document.getElementById('skills-interface');
const skillsListDisplay = document.getElementById('skills-list');
const exitSkillsBtn = document.getElementById('exit-skills-btn');

const questInterface = document.getElementById('quest-interface');
const questListDisplay = document.getElementById('quest-list');
const exitQuestsBtn = document.getElementById('exit-quests-btn');

const backgroundInterface = document.getElementById('background-interface');
const backgroundContentDisplay = document.getElementById('background-content');
const exitBackgroundBtn = document.getElementById('exit-background-btn');

// Game Dynamics Data Structures (Examples - these would be much more extensive)
const classes = {
    warrior: {
        hpBonus: 20,
        statFocus: { strength: 3, constitution: 2, dexterity: 1 },
        startingSkill: 'Cleave',
        startingAbility: 'Charge'
    },
    mage: {
        hpBonus: 5,
        statFocus: { intelligence: 3, wisdom: 2, charisma: 1 },
        startingSkill: 'Arcane Bolt',
        startingAbility: 'Teleport'
    },
    rogue: {
        hpBonus: 10,
        statFocus: { dexterity: 3, intelligence: 2, charisma: 1 },
        startingSkill: 'Sneak Attack',
        startingAbility: 'Pick Lock'
    },
    ranger: {
        hpBonus: 15,
        statFocus: { dexterity: 3, wisdom: 2, strength: 1 },
        startingSkill: 'Precise Shot',
        startingAbility: 'Track'
    },
    cleric: {
        hpBonus: 15,
        statFocus: { wisdom: 3, constitution: 2, strength: 1 },
        startingSkill: 'Heal',
        startingAbility: 'Bless'
    },
    paladin: {
        hpBonus: 20,
        statFocus: { strength: 3, wisdom: 2, charisma: 1 },
        startingSkill: 'Divine Smite',
        startingAbility: 'Lay on Hands'
    },
    druid: {
        hpBonus: 10,
        statFocus: { wisdom: 3, constitution: 2, dexterity: 1 },
        startingSkill: 'Wild Shape',
        startingAbility: 'Entangle'
    },
    bard: {
        hpBonus: 5,
        statFocus: { charisma: 3, dexterity: 2, intelligence: 1 },
        startingSkill: 'Inspire',
        startingAbility: 'Distract'
    },
    sorcerer: {
        hpBonus: 5,
        statFocus: { charisma: 3, intelligence: 2, dexterity: 1 },
        startingSkill: 'Fireball',
        startingAbility: 'Mystic Armor'
    },
    warlock: {
        hpBonus: 10,
        statFocus: { charisma: 3, intelligence: 2, constitution: 1 },
        startingSkill: 'Dark Bolt',
        startingAbility: 'Summon Imp'
    },
    monk: {
        hpBonus: 10,
        statFocus: { dexterity: 3, wisdom: 2, strength: 1 },
        startingSkill: 'Ki Blast',
        startingAbility: 'Flurry of Blows'
    },
    barbarian: {
        hpBonus: 20,
        statFocus: { strength: 3, constitution: 2, dexterity: 1 },
        startingSkill: 'Whirlwind',
        startingAbility: 'Rage'
    },
    brawler: {
        hpBonus: 15,
        statFocus: { strength: 3, constitution: 2, dexterity: 1 },
        startingSkill: 'Brutal Strike',
        startingAbility: 'Berserk'
    },
    assassin: {
        hpBonus: 10,
        statFocus: { dexterity: 3, intelligence: 2, charisma: 1 },
        startingSkill: 'Backstab',
        startingAbility: 'Vanish'
    },
    necromancer: {
        hpBonus: 5,
        statFocus: { intelligence: 3, wisdom: 2, charisma: 1 },
        startingSkill: 'Raise Dead',
        startingAbility: 'Life Drain'
    },
    alchemist: {
        hpBonus: 5,
        statFocus: { intelligence: 3, dexterity: 2, wisdom: 1 },
        startingSkill: 'Alchemical Bomb',
        startingAbility: 'Potion Mastery'
    },
    engineer: {
        hpBonus: 10,
        statFocus: { intelligence: 3, dexterity: 2, strength: 1 },
        startingSkill: 'Turret Deployment',
        startingAbility: 'Gadgeteer'
    },
    summoner: {
        hpBonus: 10,
        statFocus: { wisdom: 3, intelligence: 2, charisma: 1 },
        startingSkill: 'Summon Elemental',
        startingAbility: 'Conjure Familiar'
    },
    illusionist: {
        hpBonus: 5,
        statFocus: { intelligence: 3, charisma: 2, dexterity: 1 },
        startingSkill: 'Mirage',
        startingAbility: 'Illusory Disguise'
    },
    shaman: {
        hpBonus: 10,
        statFocus: { wisdom: 3, constitution: 2, intelligence: 1 },
        startingSkill: 'Spirit Walk',
        startingAbility: 'Totem Summoning'

    },
    ninja: {
        hpBonus: 10,
        statFocus: { dexterity: 3, strength: 2, wisdom: 1 },
        startingSkill: 'Shadow Strike',
        startingAbility: 'Smoke Bomb'
    },
    psychic: {
        hpBonus: 5,
        statFocus: { intelligence: 3, wisdom: 2, charisma: 1 },
        startingSkill: 'Mind Blast',
        startingAbility: 'Telekinetic Push'
    },
    hunter: {
        hpBonus: 15,
        statFocus: { dexterity: 3, wisdom: 2, strength: 1 }, startingSkill: 'Volley',
        startingAbility: 'Trap Setting'
    },
    scholar: {
        hpBonus: 5,
        statFocus: { intelligence: 3, wisdom: 2, charisma: 1 },
        startingSkill: 'Arcane Research',
        startingAbility: 'Scroll Crafting'
    },
    gladiator: {
        hpBonus: 20,
        statFocus: { strength: 3, constitution: 2, dexterity: 1 },
        startingSkill: 'Gladiator\'s Fury',
        startingAbility: 'Shield Bash'
    }
};

// --- NEW: Data structure for NPC classes ---
const npcClasses = {
    warrior: { hp_base: 125, hp_per_level: 8, damage: '1d8', ac_bonus: 3, description: "A sturdy frontline fighter." },
    mage: { hp_base: 115, hp_per_level: 4, damage: '1d6', ac_bonus: 0, description: "A master of arcane arts." },
    rogue: { hp_base: 120, hp_per_level: 6, damage: '1d6', ac_bonus: 1, description: "A nimble and cunning scout." },
    healer: { hp_base: 118, hp_per_level: 5, damage: '1d4', ac_bonus: 0, description: "A supportive divine spellcaster.", skills: ['Minor Heal'] },
    // Default fallback
    commoner: { hp_base: 50, hp_per_level: 3, damage: '1d4', ac_bonus: 0, description: "A simple traveler." }
};

// --- NEW: Helper function to generate dynamic stats for an NPC ---
async function generateNpcStats(npcName, playerLevel) {
    const prompt = `Based on the fantasy character name "${npcName}", assign a suitable RPG class from this list: Warrior, Mage, Rogue, Healer. Respond with ONLY the class name.`;

    let npcClass = 'commoner'; // Default class
    try {
        const response = await callGeminiAPI(prompt, 0.2, 20, false);
        const cleanedResponse = response.trim().toLowerCase();
        if (npcClasses[cleanedResponse]) {
            npcClass = cleanedResponse;
        }
    } catch (error) {
        console.error("AI failed to assign NPC class, using default. Error:", error);
    }

    const classData = npcClasses[npcClass];
    const level = Math.max(1, playerLevel); // NPCs should be at least your level

    const health = classData.hp_base + ((level - 1) * classData.hp_per_level);
    const ac = 10 + classData.ac_bonus + Math.floor(level / 2);

    return {
        level: level,
        health: health,
        maxHealth: health,
        ac: ac,
        damage: classData.damage,
        skills: classData.skills || [],
        description: classData.description
    };
}

// Helper Functions
// In script.js
function updateGold(amount, reason = '') {
    console.log(`--- updateGold CALLED ---`); // <<< ADD THIS LINE
    console.log(`Attempting to change gold by ${amount} for reason: ${reason}`); // <<< ADD THIS LINE
    console.log(`Gold BEFORE change: ${player.gold}`); // <<< ADD THIS LINE

    const oldGold = player.gold;
    player.gold = Math.max(0, player.gold + Number(amount)); // Ensure amount is treated as a number
    console.log(`updateGold: Amount: ${amount}, Reason: ${reason}, Old Gold: ${oldGold}, New Gold: ${player.gold}`); // ADD THIS LOG

    if (amount > 0) {
        displayMessage(`You gained ${Number(amount)} gold${reason ? ` (${reason})` : ''}!`, 'success');
    } else if (amount < 0) {
        const actualLoss = oldGold - player.gold; // Recalculate actual loss after Math.max(0,...)
        displayMessage(`You lost ${Math.abs(Number(amount))} gold${reason ? ` (${reason})` : ''}!`, 'error');
    }

    updatePlayerStatsDisplay();

    // Ensure inventory is saved when gold changes (often due to transactions)
    if (window.ItemManager && typeof ItemManager.saveInventoryToStorage === 'function') {
        ItemManager.saveInventoryToStorage(player);
    }

    if (!inventoryInterface.classList.contains('hidden')) {
        displayInventory();
    }
    if (!shopInterface.classList.contains('hidden')) {
        //displayShop();
    }

    console.log(`updateGold: About to call saveGame(). Current player.gold is ${player.gold}`); // ADD THIS LOG
    saveGame();
}

function displayMessage(message, type = 'info') {
    // --- START OF BUILT-IN DEBUGGING ---
    // This code checks if the broken alignment message is about to be displayed.
    if (typeof message === 'string' && message.includes('Your alignment shifts. undefined')) {
        console.error("------------------------------------------------------");
        console.error("BUG DETECTED! The broken alignment message was passed to displayMessage.");
        console.error("The call stack below shows exactly which function is responsible.");

        // This command will give us the clues we need.
        console.trace();

        console.error("------------------------------------------------------");
    }
    // --- END OF BUILT-IN DEBUGGING ---

    const p = document.createElement('p');
    p.classList.add('mb-2', 'pb-1', 'border-b', 'border-amber-700/50');

    let icon = '';
    if (type === 'combat') {
        p.classList.add('text-red-700', 'font-bold');
        icon = '<i class="ra ra-sword mr-2"></i>';
    } else if (type === 'success') {
        p.classList.add('text-green-700');
        icon = '<i class="ra ra-check mr-2"></i>';
    } else if (type === 'error') {
        p.classList.add('text-red-500');
        icon = '<i class="ra ra-cancel mr-2"></i>';
    } else if (type === 'exploration') {
        p.classList.add('text-blue-600');
        icon = '<i class="ra ra-telescope mr-2"></i>';
    } else if (type === 'info') {
        icon = '<i class="ra ra-quill mr-2"></i>';
    }

    const processedMessage = processRichText(message, type);

    p.innerHTML = icon + processedMessage;
    gameOutput.appendChild(p);
    gameOutput.scrollTop = gameOutput.scrollHeight;
}

function updatePlayerStatsDisplay() {
    // Always process location text through rich text system for consistent formatting/stripping
    const locationText = processRichText(player.currentLocation, 'location');
    playerNameDisplay.innerHTML = `${player.name} - ${locationText}`;
    playerLevelDisplay.textContent = `Level: ${player.level}`;
    playerHpDisplay.textContent = `HP: ${player.hp}/${player.maxHp}`;
}

function showScreen(screenId) {
    const screens = [startScreen, characterCreationScreen, gamePlayScreen, shopInterface, inventoryInterface, skillsInterface, questInterface];
    screens.forEach(screen => {
        if (screen.id === screenId) {
            screen.classList.remove('hidden');
        } else {
            screen.classList.add('hidden');
        }
    });
}

function hideScreen(screenId) {
    const screens = [startScreen, characterCreationScreen, gamePlayScreen, shopInterface, inventoryInterface, skillsInterface, questInterface, backgroundInterface, document.getElementById('progression-interface')];
    screens.forEach(screen => {
        if (screen.id === screenId) {
            screen.classList.add('hidden');
        }
    });
}

function saveGame() {
    if (!confirm("Are you sure you want to save your game? This will overwrite any existing save.")) {
        return;
    }

    // Validate and fix stats before saving
    if (validateAndFixStats(player)) {
        console.log("Fixed stats before saving");
    }

    // Save character progression separately
    if (player.classProgression) {
        CharacterManager.saveProgression(player);
    }

    console.log(`saveGame: Player object being saved:`, JSON.parse(JSON.stringify(player))); // ADD THIS (JSON.parse(JSON.stringify()) for a clean clone log)
    console.log(`saveGame: Saving player.gold = ${player.gold}`); // SPECIFIC GOLD LOG

    const saveData = {
        player: player,
        gameWorld: {
            npcs: Array.from(gameWorld.npcs.entries()),
            locationMemory: Array.from(gameWorld.locationMemory.entries()),
            lastNPCInteraction: gameWorld.lastNPCInteraction
        },
        conversationHistory: conversationHistory,
        partyData: partyManager ? partyManager.getSaveData() : null
    };
    localStorage.setItem('pedenaRPGSave', JSON.stringify(saveData));
    saveConversationHistory(); // Also save conversation separately
    displayMessage("Game saved!", 'success');
    if (loadGameBtn) loadGameBtn.disabled = false;
}

function loadGame() {
    const savedGame = localStorage.getItem('pedenaRPGSave');
    if (savedGame) {
        console.log("loadGame: Raw data from localStorage ('pedenaRPGSave'):", savedGame.substring(0, 500) + "..."); // Log first 500 chars
        const saveData = JSON.parse(savedGame);
        console.log("loadGame: Parsed saveData.player.gold from localStorage:", saveData.player ? saveData.player.gold : "N/A - saveData.player not found");
        // Handle old save format (just player data)
        if (saveData.player) {
            player = saveData.player;
            window.player = player;
            console.log(`[SCRIPT.JS] After loadGame, window.player HP: <span class="math-inline">${window.player.hp}/${window.player.maxHp}</span>`); // Should be 140/140
            console.log(`[SCRIPT.JS] After loadGame, is module player === window.player? ${player === window.player}`); // Should be true

            // Restore game world if it exists
            if (saveData.gameWorld) {
                // --- This is the block to REPLACE ---
                gameWorld.npcs = new Map(saveData.gameWorld.npcs || []);
                gameWorld.locationMemory = new Map(saveData.gameWorld.locationMemory || []);
                gameWorld.lastNPCInteraction = saveData.gameWorld.lastNPCInteraction || null;

                // FIX: Check for the new properties and initialize them if they don't exist in the save file.
                gameWorld.time = saveData.gameWorld.time ? new Date(saveData.gameWorld.time) : new Date(864, 5, 12, 8, 0, 0);
                gameWorld.activeEvents = saveData.gameWorld.activeEvents || [];
                // --- End of replacement block ---
            }
            // Restore conversation history if it exists
            if (saveData.conversationHistory) {
                conversationHistory = saveData.conversationHistory;
                if (!conversationHistory.maxMessages) {
                    conversationHistory.maxMessages = 50;
                }
            } else {
                // Try to load from separate storage
                loadConversationHistory();
            }
            // Load character progression if available
            if (player.name) {
                CharacterManager.loadProgression(player);
                updateQuickActionButtons();
            }
            // Load inventory and status effects from ItemManager
            ItemManager.loadInventoryFromStorage(player);

            // Load party data if available
            if (saveData.partyData && partyManager) {
                partyManager.loadSaveData(saveData.partyData);
                console.log('Party data restored from save');
                updatePartyUI();
            }
        } else {
            // Old format - just player
            player = saveData;
            window.player = player
            loadConversationHistory();
            ItemManager.loadInventoryFromStorage(player);
        }
        console.log("loadGame: Global player.gold immediately after assignment from saved data:", player.gold);

        // Validate and fix stats after loading
        if (validateAndFixStats(player)) {
            displayMessage("Character stats have been automatically corrected.", 'info');
            saveGame(); // Save the corrected stats immediately
        }

        displayMessage("Game loaded!", 'success');

        // Add helpful reminder about the Explore button
        setTimeout(() => {
            displayMessage("💡 The DM remembers your last encounters! Try using the 🔍 Explore button to help return to your adventure!", 'info');
        }, 1000);

        console.log("loadGame: Final player.gold after all loading steps:", player.gold);

        console.log(`[SCRIPT.JS] loadGame: player HP set to <span class="math-inline">${player.hp}/${player.maxHp}</span>`);
        console.log(`[SCRIPT.JS] loadGame: window.player HP is now <span class="math-inline">${window.player.hp}/${window.player.maxHp}</span>`);
        console.log(`[SCRIPT.JS] loadGame: is module player === window.player? ${player === window.player}`); // Should be true


        updatePlayerStatsDisplay();
        updateQuestButton(); // Update quest button based on saved quests

        showScreen('game-play-screen');
        displayMessage(`Welcome back, ${player.name}! You are in ${player.currentLocation}.`);

        // Add to conversation history
        addToConversationHistory('assistant', `Welcome back, ${player.name}! You are in ${player.currentLocation}.`);

        // Show existing NPCs if any
        const existingNPCs = getNPCsInLocation(player.currentLocation);
        if (existingNPCs.length > 0) {
            const npcMessage = `You notice ${existingNPCs.map(npc => npc.name).join(', ')} in the area.`;
            displayMessage(npcMessage);
            addToConversationHistory('assistant', npcMessage);
        }

        saveConversationHistory();
        updateIllustrationButtonVisibility(); // Update button visibility after loading game
    } else {
        displayMessage("No saved game found.", 'error');
    }
}

function rollDice(diceString) {
    if (!diceString || typeof diceString !== 'string') {
        return Math.floor(Math.random() * 6) + 1; // Default 1d6
    }

    try {
        // Handle format like "3d8" or "1d4+1"
        const cleanDice = diceString.trim().split(' ')[0]; // Remove any damage type suffix
        const [dicePart, modifier] = cleanDice.split('+');
        const [num, sides] = dicePart.split('d').map(Number);

        // Validate numbers
        if (isNaN(num) || isNaN(sides) || num < 1 || sides < 1) {
            return Math.floor(Math.random() * 6) + 1; // Default 1d6
        }

        let total = 0;
        for (let i = 0; i < Math.min(num, 20); i++) { // Cap at 20 dice for safety
            total += Math.floor(Math.random() * sides) + 1;
        }

        // Add modifier if present
        if (modifier && !isNaN(parseInt(modifier))) {
            total += parseInt(modifier);
        }

        return Math.max(1, total); // Ensure at least 1 damage
    } catch (error) {
        console.error('Error rolling dice:', error, 'String:', diceString);
        return Math.floor(Math.random() * 6) + 1; // Default 1d6
    }
}

// AI Interaction Functions (Gemini API Calls)
async function callGeminiAPI(prompt, temperature = 0.10, maxOutputTokens = 56000, includeContext = true) {
    GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${gameSettings.model}:generateContent?key=${gameSettings.apiKey}`;
    try {
        let fullPrompt = prompt;

        // Add conversation context if requested and available
        if (includeContext && conversationHistory.messages.length > 0) {
            const context = getConversationContext();
            if (context) {
                fullPrompt = `CONVERSATION HISTORY (Last 20 exchanges):
${context}

CURRENT REQUEST:
${prompt}

Please respond as the DM, maintaining consistency with the conversation history above.`;
            }
        }

        // Add rich text styling instructions if enabled
        if (richTextEnabled) {
            fullPrompt += `

🎨 RICH TEXT STYLING - MANDATORY USAGE:
You MUST use rich text formatting in your responses. Apply multiple effects per response for immersion:

TEXT FORMATTING (use VERY frequently - at least 5-8 instances per response):
- **bold text** for ALL character names, important items, locations, actions, dramatic moments
- *italic text* for ALL thoughts, whispers, sounds, emotions, atmospheric descriptions, inner voice
- ***bold italic text*** for EPIC moments, legendary items, powerful magic, climactic events
- __underline text__ for emphasis, important locations, special items, warnings
- ~~strikethrough~~ for crossed out, damaged, or negated text

FORMATTING REQUIREMENTS:
- Use **bold** on EVERY character name, location name, and important noun
- Use *italics* for ALL atmospheric descriptions, sounds, and emotional content
- Use ***bold-italic*** for anything legendary, epic, or extremely important
- Combine formatting: ***{gold:legendary artifacts}***, **{red:dangerous enemies}**, *{blue:magical whispers}*

COLORS (use liberally to paint the scene):
- {red:text} for danger, blood, fire, anger, warning signs
- {green:text} for nature, success, healing, plants, life
- {blue:text} for water, magic, cold, calm, sky, ice
- {purple:text} for royal, mysterious, arcane, noble, magic
- {gold:text} for treasure, divine, precious metals, wealth
- {silver:text} for metallic, ethereal, moonlight, steel
- {crimson:text} for intense red, battle, passion
- {emerald:text} for vibrant green, gems, deep forest
- {brown:text} for earth, wood, leather, natural materials

SPECIAL FONTS (use for atmosphere):
- [medieval:text] for formal announcements, nobility, official documents
- [magic:text] for spells, curses, supernatural phenomena
- [elegant:text] for refined speech, poetry, aristocratic dialogue
- [ancient:text] for old inscriptions, prophecies, runes, history

VISUAL EFFECTS (use 2-4 per response):
- {{highlight:important text}} for key information, clues, interactive items
- {{blink:urgent}} for urgent warnings, immediate threats
- {{wiggle:exciting}} for exciting moments, discoveries, celebrations
- {{shadow:ominous}} for dark, ominous, threatening text
- {{glow:magical}} for magical effects, enchanted items, spells
- {{stretch-h:wide}} for stretched horizontal text, emphasis
- {{stretch-v:tall}} for stretched vertical text, towering things
- {{glow-shadow:epic}} for epic moments, legendary items, climactic events

MANDATORY EXAMPLES TO FOLLOW:
- "The {gold:***legendary tome***} begins to {{glow:[magic:*whisper forgotten secrets*]}} as you **carefully** open its *weathered* pages."
- "A {crimson:***shadowy figure***} emerges from the {{shadow:*darkness*}}, wielding a {{highlight:[ancient:***cursed blade***]}}."
- "The {emerald:**enchanted garden**} {{wiggle:*bursts*}} with {{glow:***magical***}} energy as {blue:*crystalline water*} flows from an {{highlight:[elegant:***fountain of eternal youth***]}}."
- "**Sir Gareth** *whispers urgently*, 'The {red:***Dragon of Desolation***} has awakened, and its {crimson:*fiery breath*} threatens the **entire kingdom**!'"
- "You find a {gold:***Blade of Infinite Sharpness***} lying beside a *mysterious* **stone altar**, its surface {{glow:*humming*}} with {purple:***arcane power***}."

REQUIREMENTS: Use at least 7-10 different formatting effects per response. Use **bold** for ALL names and important items. Use *italics* for ALL sounds, whispers, and atmospheric elements. Use ***bold-italic*** for anything epic or legendary. Every important noun should have both color AND formatting.`;
        }

        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: fullPrompt }] }],
                generationConfig: {
                    temperature: temperature,
                    maxOutputTokens: maxOutputTokens,
                    topP: 0.8,
                    topK: 40
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_NONE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_NONE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_NONE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_NONE"
                    }
                ]
            }),
        });

        if (!response.ok) {
            let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
            try {
                const errorData = await response.json();
                console.error('Gemini API Error:', errorData);
                errorMessage = errorData.error?.message || errorMessage;
            } catch (e) {
                console.error('Could not parse error response:', e);
            }
            console.error(`AI Error: ${errorMessage}`);
            return null;
        }

        const data = await response.json();
        if (data.candidates && data.candidates.length > 0) {
            const candidate = data.candidates[0];
            let responseText = "";

            if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
                responseText = candidate.content.parts[0].text;
            } else {
                return "I'm having trouble generating a response right now.";
            }

            // --- NEW, MORE AGGRESSIVE JSON SANITIZATION ---
            // Find the first '{' and the last '}' to isolate the JSON object
            const firstBrace = responseText.indexOf('{');
            const lastBrace = responseText.lastIndexOf('}');

            if (firstBrace !== -1 && lastBrace > firstBrace) {
                const jsonString = responseText.substring(firstBrace, lastBrace + 1);
                // Check if the extracted string is likely a valid JSON object
                if (jsonString.startsWith('{') && jsonString.endsWith('}')) {
                    try {
                        // Test if it's parsable before returning
                        JSON.parse(jsonString);
                        return jsonString; // Return the clean, valid JSON string.
                    } catch (e) {
                        // It looked like JSON but wasn't, so fall through and return original text
                        console.warn("Found what looked like JSON, but it failed to parse. Returning raw text.", e);
                    }
                }
            }

            // If no JSON was found or it was invalid, handle other cases
            if (candidate.finishReason === 'MAX_TOKENS') {
                console.warn('Response truncated due to MAX_TOKENS');
                return responseText || "Response was cut short.";
            }

            return responseText; // Return the original text if no valid JSON was found.
        }
        console.error('Invalid API response structure:', data);
        return null;
    } catch (error) {
        console.error('Network or API request error:', error);
        return "Network error occurred. Please try again.";
    }
}

// NPC Management Functions
function createNPC(name, description, location) {
    console.log(`createNPC: Creating NPC with name "${name}"`);
    return {
        // Generate a unique STRING ID to prevent type mismatch issues in the future.
        id: `npc_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        name: name,
        description: description,
        location: location,
        dialogueHistory: [],
        lastSeen: Date.now(),
        relationship: 'neutral'
    };
}



// Ensure saveNPCToLocation stores NPCs by their actual canonical name
function saveNPCToLocation(npc, location) {
    if (!gameWorld.npcs.has(location)) {
        gameWorld.npcs.set(location, []);
    }
    const locationNPCs = gameWorld.npcs.get(location);
    // Check if NPC already exists by name (case-sensitive as stored)
    const existingIndex = locationNPCs.findIndex(n => n.name === npc.name);
    if (existingIndex >= 0) {
        locationNPCs[existingIndex] = npc; // Update existing
        console.log(`saveNPCToLocation: Updated existing NPC "${npc.name}" at "${location}"`);
    } else {
        locationNPCs.push(npc); // Add new
        console.log(`saveNPCToLocation: Added new NPC "${npc.name}" to location "${location}"`);
    }
}

function getNPCsInLocation(location) {
    return gameWorld.npcs.get(location) || [];
}

// Movement handling function
async function handleStructuredMovement(command, destination) {
    try {
        const movementPrompt = `
Player ${player.name} (Level ${player.level} ${player.class}) wants to: "${command}"
Current location: ${player.currentLocation}
Destination: ${destination}
Current Party: ${partyManager ? partyManager.getPartyNames().join(', ') : 'None'}

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

        const response = await callGeminiAPI(movementPrompt, 0.3, 400, false);
        if (!response) {
            throw new Error("No response from AI");
        }

        // Parse JSON response
        let movementData;
        try {
            const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

            if (jsonMatch) {
                movementData = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error("No valid JSON structure found");
            }

            // Validate all required fields exist and are correct types
            if (typeof movementData.canMove !== 'boolean' ||
                typeof movementData.newLocation !== 'string' ||
                typeof movementData.description !== 'string' ||
                typeof movementData.encounterChance !== 'number' ||
                !movementData.newLocation.trim()) {
                throw new Error("Invalid data types in JSON response");
            }

            // Sanitize and validate ranges
            movementData.encounterChance = Math.max(0, Math.min(1, movementData.encounterChance));
            movementData.goldCost = Math.max(0, parseInt(movementData.goldCost) || 0);
            movementData.newLocation = movementData.newLocation.trim();

        } catch (parseError) {
            console.error("Failed to parse movement JSON:", parseError, "Raw response:", response);
            // Enhanced fallback with basic movement
            const sanitizedDestination = destination.replace(/[^a-zA-Z\s]/g, '').trim();
            if (sanitizedDestination) {
                const fallbackLocation = sanitizedDestination.replace(/\b\w/g, letter => letter.toUpperCase());
                player.currentLocation = fallbackLocation;
                displayMessage(`You travel to ${fallbackLocation}.`, 'success');
                updatePlayerStatsDisplay();
                if (Math.random() < 0.2) checkRandomEncounter();
            } else {
                displayMessage("Unable to determine destination.", 'error');
            }
            return;
        }

        // Process movement result
        if (!movementData.canMove) {
            displayMessage(movementData.description || "You cannot travel there right now.", 'error');
            return;
        }

        // Check gold cost
        if (movementData.goldCost > 0) {
            if (player.gold < movementData.goldCost) {
                displayMessage(`You need ${movementData.goldCost} gold to travel there, but you only have ${player.gold} gold.`, 'error');
                return;
            }
            updateGold(-movementData.goldCost, 'transportation');
        }

        // Update player location
        const oldLocation = player.currentLocation;
        player.currentLocation = movementData.newLocation;
        displayMessage(movementData.description, 'success');
        displayMessage(`You arrive at ${movementData.newLocation}.`, 'info');

        // Update BGM for new location
        await handleLocationMusicUpdate();

        // Show travel time if provided
        if (movementData.travelTime) {
            displayMessage(`Travel time: ${movementData.travelTime}`, 'info');
        }

        // Update displays and save
        updatePlayerStatsDisplay();
        if (LocationManager && LocationManager.saveLocationToHistory) {
            LocationManager.saveLocationToHistory(movementData.newLocation, player.name);
        }
        addToConversationHistory('assistant', `${player.name} traveled from ${oldLocation} to ${movementData.newLocation}`);

        // Check for encounters based on AI decision
        if (movementData.encounterChance > 0 && Math.random() < movementData.encounterChance) {
            setTimeout(async () => {
                const encounterTypes = {
                    'combat': generateRandomEncounter,
                    'social': generateNPCEncounter,
                    'discovery': generateDiscoveryEncounter
                };

                const encounterFunction = encounterTypes[movementData.encounterType] || generateRandomEncounter;
                await encounterFunction();
            }, 1500);
        }

    } catch (error) {
        console.error("Movement system error:", error);
        displayMessage("There was an issue processing your movement. Please try again.", 'error');
    }
}

// Fallback to original movement function for compatibility
async function handleMovement(command) {
    // Extract destination from command
    const movementKeywords = ['go to', 'travel to', 'move to', 'head to', 'walk to', 'run to', 'visit', 'enter'];
    let destination = command.toLowerCase();

    for (const keyword of movementKeywords) {
        if (destination.includes(keyword)) {
            destination = destination.split(keyword)[1].trim();
            break;
        }
    }

    if (!destination) {
        displayMessage("Where would you like to go?", 'error');
        return;
    }

    // Use LocationManager to handle the movement
    const result = await LocationManager.moveToLocation(player, destination);

    if (result.success) {
        player.currentLocation = result.newLocation;
        displayMessage(result.description, 'success');

        // Check for encounters
        if (result.hasEncounter && Math.random() < 0.3) {
            await generateRandomEncounter();
        }
    } else {
        displayMessage(result.message, 'error');
    }
}

async function generateDiscoveryEncounter() {
    displayMessage("You discover something interesting...", 'info');

    const discoveryPrompt = `
Generate a brief discovery encounter for ${player.name} (Level ${player.level} ${player.class}) at ${player.currentLocation}. Current Party: ${partyManager ? partyManager.getPartyNames().join(', ') : 'None'}.

Examples: finding a hidden cache, discovering ancient ruins, spotting a rare herb, finding a shortcut, etc.

Respond with 2-3 sentences describing what they find and what they can do about it.
`;

    const discovery = await callGeminiAPI(discoveryPrompt, 0.7, 200);
    if (discovery) {
        displayMessage(discovery, 'discovery');
    }
}

async function generateNPCEncounter(suggestion = null) {
    if (!suggestion) {
        displayMessage("You encounter someone on the road...", 'info');
    }
    // Pass the AI's suggestion down to the function that creates the NPC.
    await startConversation(suggestion);
}

async function generateRandomEncounter() {
    displayMessage("You encounter something on your journey...", 'info');

    const prompt = `
    You are a Dungeon Master creating a random encounter for a fantasy RPG.
    Based on the player's context, decide on a plausible and interesting random encounter.

    PLAYER CONTEXT:
    - Name: ${player.name}
    - Class: ${player.class}
    - Level: ${player.level}
    - Current Location: ${player.currentLocation}
    - Player Health: ${player.hp}/${player.maxHp}
    - Current Party: ${partyManager ? partyManager.getPartyNames().join(', ') : 'None'}
    - Recent Events: ${getConversationContext().slice(-300)}

    ENCOUNTER OPTIONS:
    - "combat": A fight with a creature or person.
    - "treasure": Finding something valuable (gold, an item).
    - "npc": Meeting a non-player character.
    - "event": A small, narrative event (e.g., weather change, strange discovery).
    - "none": Nothing happens, the path is quiet.

    INSTRUCTIONS:
    1.  Choose the most fitting "encounterType" from the options above.
    2.  Write a brief, engaging "narrative" (1-3 sentences) describing the start of the encounter.
    3.  If the type is "combat", provide a "suggestion" for the enemy (e.g., "a hungry wolf", "a pair of goblins").
    4.  If the type is "npc", provide a "suggestion" for the NPC's description (e.g., "a cheerful merchant with a broken cart wheel").

    Respond with ONLY valid JSON in this exact format. Example:
    {
        "encounterType": "combat",
        "narrative": "As you round a bend, a snarling wolf with matted fur blocks your path, its eyes fixed on you.",
        "suggestion": "a snarling wolf with matted fur"
    }
    `;

    try {
        const response = await callGeminiAPI(prompt, 0.8, 400, false);
        const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

        if (!jsonMatch) {
            throw new Error("AI response for random encounter did not contain valid JSON.");
        }

        const encounter = JSON.parse(jsonMatch[0]);

        // Display the narrative from the AI, making the world feel more responsive.
        if (encounter.narrative) {
            displayMessage(encounter.narrative, 'exploration');
            addToConversationHistory('assistant', encounter.narrative);
        }

        // Handle the encounter based on the type the AI returned.
        switch (encounter.encounterType) {
            case 'combat':
                // The suggestion from the AI will be passed to our intelligent combat generator.
                await generateAndInitiateCombatEncounter(encounter.suggestion);
                break;
            case 'treasure':
                // This function is simple and can remain as is.
                await generateTreasureEncounter();
                break;
            case 'npc':
                // Pass the AI's suggestion to create a more contextual NPC.
                await generateNPCEncounter(encounter.suggestion);
                break;
            case 'event':
                // This function is also fine as is for now.
                await generateEventEncounter();
                break;
            case 'none':
            default:
                // If the AI decides nothing happens, we honor that.
                // The narrative for this is already displayed above.
                break;
        }

    } catch (error) {
        console.error("Error during AI-powered random encounter generation:", error);
        displayMessage("The path ahead is quiet, the world holding its breath for a moment.", 'info'); // Graceful fallback.
    }
}

async function generateAndInitiateCombatEncounter(enemySuggestion = null) {
    displayMessage("⚔️ A hostile presence emerges!", 'combat');

    const suggestionText = enemySuggestion ? `The player's action suggested an encounter with: "${enemySuggestion}". Use this as creative inspiration.` : "The encounter is random, based on the location.";

    const prompt = `
    You are a creative Dungeon Master. Generate a single, plausible hostile enemy for a fantasy RPG.

    PLAYER CONTEXT:
    - Name: ${player.name}
    - Class: ${player.class}
    - Level: ${player.level}
    - Current Location: ${player.currentLocation}
    - Current Party: ${partyManager ? partyManager.getPartyNames().join(', ') : 'None'}

    ENCOUNTER CONTEXT:
    ${suggestionText}

    INSTRUCTIONS:
    Generate a complete enemy profile in JSON format. The enemy should be appropriate for the player's location and level.
    If an "enemySuggestion" is provided, create a specific enemy that fits that theme. For example, if the suggestion is "ambush", you could create a "Roadside Bandit", a "Hidden Archer", or a "Rabid Wolf".
    **IMPORTANT**: Do NOT name the enemy "ambush" or use the raw suggestion as the name. The name must be a creative, specific creature or person.

    Respond with ONLY valid JSON in this exact format:
    {
        "enemyName": "Specific and Creative Enemy Name",
        "enemyType": "Beast/Humanoid/Undead/Elemental/Construct",
        "baseHp": 25,
        "baseAttack": "1d8+2",
        "baseDefense": 3,
        "level": ${player.level},
        "description": "A brief, evocative description of the enemy.",
        "narrative": "A 1-2 sentence narrative describing how the encounter begins."
    }

    ENEMY GUIDELINES:
    - enemyName: Be specific and creative. (e.g., "Grizzled Bandit Captain", "Shadow-Tusk Boar").
    - baseHp: Scale based on concept and player level (e.g., 20-100).
    - baseAttack: Use dice notation (e.g., "1d6", "2d4+1").
    - baseDefense: Scale based on the enemy concept (e.g., 1-10).
    - level: Keep the enemy level within ±2 of the player's level.
    `;

    try {
        const response = await callGeminiAPI(prompt, 0.75, 500, false);
        const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

        if (!jsonMatch) {
            throw new Error("AI response for enemy generation did not contain valid JSON.");
        }

        const enemyData = JSON.parse(jsonMatch[0]);

        if (!enemyData.enemyName || !enemyData.baseHp || !enemyData.baseAttack) {
            throw new Error("AI response for enemy was missing required fields (name, hp, attack).");
        }

        const enemy = {
            name: enemyData.enemyName,
            hp: enemyData.baseHp,
            maxHp: enemyData.baseHp,
            currentHp: enemyData.baseHp,
            attack: enemyData.baseAttack,
            defense: enemyData.baseDefense,
            level: enemyData.level,
            type: enemyData.enemyType,
            description: enemyData.description
        };

        displayMessage(enemyData.narrative, 'combat');
        await CombatSystem.initiateCombat(player, enemy, player.currentLocation);

    } catch (error) {
        console.error('Error in generateAndInitiateCombatEncounter:', error);
        displayMessage("An unknown terror emerges from the shadows!", 'combat');

        // Fallback to a very basic enemy if the AI fails
        const fallbackEnemy = {
            name: 'Mysterious Aggressor',
            hp: 20 + (player.level * 3),
            maxHp: 20 + (player.level * 3),
            currentHp: 20 + (player.level * 3),
            attack: '1d6',
            defense: 2,
            level: player.level,
            type: 'Humanoid'
        };
        await CombatSystem.initiateCombat(player, fallbackEnemy, player.currentLocation);
    }
}

// Legacy combat interface removed - now handled by CombatSystem

async function generateTreasureEncounter() {
    displayMessage("✨ You discover something valuable!", 'success');

    const treasureTypes = ['gold', 'item', 'multiple'];
    const treasureType = treasureTypes[Math.floor(Math.random() * treasureTypes.length)];

    switch (treasureType) {
        case 'gold':
            const goldAmount = Math.floor(Math.random() * (player.level * 30)) + 20;
            updateGold(goldAmount, 'treasure found');
            displayMessage(`💰 You found ${goldAmount} gold coins hidden in the area!`, 'success');
            break;

        case 'item':
            if (window.ItemManager && typeof ItemManager.generateItem === 'function') {
                const item = ItemManager.generateItem({
                    category: Math.random() > 0.5 ? 'WEAPON' : 'MAGICAL',
                    rarity: player.level > 3 ? 'UNCOMMON' : 'COMMON'
                });
                if (item) {
                    ItemManager.addToInventory(player, item);
                    displayMessage(`🎁 You found: ${item.name}!`, 'success');
                    displayMessage(`${item.description}`, 'info');
                }
            } else {
                // Fallback item generation
                const items = ['Health Potion', 'Magic Scroll', 'Silver Ring', 'Iron Dagger'];
                const foundItem = items[Math.floor(Math.random() * items.length)];
                if (!player.inventory) player.inventory = [];
                player.inventory.push({
                    id: Date.now(),
                    name: foundItem,
                    type: 'treasure',
                    description: 'A valuable item found during your travels',
                    value: Math.floor(Math.random() * 50) + 25
                });
                displayMessage(`🎁 You found: ${foundItem}!`, 'success');
            }
            break;

        case 'multiple':
            const smallGold = Math.floor(Math.random() * (player.level * 15)) + 10;
            updateGold(smallGold, 'treasure cache');
            displayMessage(`💰 You found a small treasure cache with ${smallGold} gold!`, 'success');

            if (Math.random() > 0.5) {
                displayMessage("🍺 You also found a healing potion!", 'success');
                if (!player.inventory) player.inventory = [];
                player.inventory.push({
                    id: Date.now(),
                    name: 'Healing Potion',
                    type: 'consumable',
                    effect: { type: 'heal', amount: 25 },
                    description: 'Restores 25 HP when consumed',
                    value: 20
                });
            }
            break;
    }

}

// Add save debouncing to prevent multiple saves
let saveTimeout;
function debouncedSave() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        saveGame();
    }, 500); // Wait 500ms before saving
}

// Item Enhancement Handler
async function handleItemEnhancement(command, lowerCommand) {
    const enhanceKeywords = ['enhance', 'upgrade', 'improve', 'enchant', 'reinforce', 'strengthen', 'empower'];

    // Find which enhancement keyword was used
    const usedKeyword = enhanceKeywords.find(keyword => lowerCommand.includes(keyword));
    if (!usedKeyword) {
        return { handled: false };
    }

    // Extract item name from command
    const itemNameMatch = command.match(new RegExp(`${usedKeyword}\\s+(?:the\\s+|my\\s+)?(.+?)(?:\\s+(?:with|using|at)\\s+|$)`, 'i'));
    if (!itemNameMatch) {
        displayMessage("What item would you like to enhance? Please specify an item name.", 'error');
        return { handled: true };
    }

    const itemName = itemNameMatch[1].trim();

    // Find item in inventory
    const itemIndex = player.inventory.findIndex(item => 
        item.name.toLowerCase().includes(itemName.toLowerCase()) ||
        itemName.toLowerCase().includes(item.name.toLowerCase())
    );

    if (itemIndex === -1) {
        displayMessage(`You don't have "${itemName}" in your inventory to enhance.`, 'error');
        return { handled: true };
    }

    const item = player.inventory[itemIndex];

    // Check if item can be enhanced
    if (!canItemBeEnhanced(item)) {
        displayMessage(`${item.name} cannot be enhanced further or is not enhanceable.`, 'error');
        return { handled: true };
    }

    // Calculate enhancement cost and requirements
    const enhancementCost = calculateEnhancementCost(item);
    const enhancementType = determineEnhancementType(usedKeyword, item);

    // Check if player has required resources
    if (!hasEnhancementResources(enhancementCost)) {
        displayMessage(`You need ${enhancementCost.gold} gold and ${enhancementCost.materials.join(', ')} to enhance ${item.name}.`, 'error');
        return { handled: true };
    }

    // Perform enhancement
    const enhancementResult = performItemEnhancement(item, enhancementType, enhancementCost);

    if (enhancementResult.success) {
        // Deduct resources
        player.gold -= enhancementCost.gold;

        // Update item in inventory
        player.inventory[itemIndex] = enhancementResult.enhancedItem;

        // Display success message
        displayMessage(`Successfully ${usedKeyword}ed ${item.name}! ${enhancementResult.description}`, 'success');

        // Update displays
        updatePlayerDisplay();

        // Refresh inventory if open
        const inventoryInterface = document.getElementById('inventory-interface');
        if (inventoryInterface && !inventoryInterface.classList.contains('hidden')) {
            displayInventory();
        }

        // Save game
        saveGame();
    } else {
        displayMessage(`Failed to enhance ${item.name}: ${enhancementResult.reason}`, 'error');
    }

    return { handled: true };
}

// Check if item can be enhanced
function canItemBeEnhanced(item) {
    // Check enhancement level limit
    const maxEnhancementLevel = getMaxEnhancementLevel(item);
    const currentLevel = item.enhancementLevel || 0;

    if (currentLevel >= maxEnhancementLevel) {
        return false;
    }

    // Check if item type is enhanceable
    const enhanceableTypes = ['weapon', 'armor', 'shield', 'tool', 'jewelry'];
    return enhanceableTypes.includes(item.type) || item.enhanceable === true;
}

// Calculate enhancement cost
function calculateEnhancementCost(item) {
    const baseValue = item.value || 10;
    const currentLevel = item.enhancementLevel || 0;
    const rarity = item.rarity || 'COMMON';

    // Base cost calculation
    let goldCost = Math.floor(baseValue * (1 + currentLevel * 0.5));

    // Rarity multiplier
    const rarityMultipliers = {
        'COMMON': 1,
        'UNCOMMON': 1.5,
        'RARE': 2.5,
        'EPIC': 4,
        'LEGENDARY': 6,
        'ARTIFACT': 10
    };

    goldCost *= (rarityMultipliers[rarity] || 1);

    // Required materials based on item type
    const materials = [];
    if (item.type === 'weapon') {
        materials.push('Metal Ingot', 'Grinding Stone');
    } else if (item.type === 'armor') {
        materials.push('Reinforcement Plate', 'Leather Strips');
    } else if (item.type === 'jewelry') {
        materials.push('Gem Dust', 'Precious Metal');
    } else {
        materials.push('Enhancement Crystal');
    }

    return {
        gold: goldCost,
        materials: materials
    };
}

// Determine enhancement type based on keyword and item
function determineEnhancementType(keyword, item) {
    const enhancementTypes = {
        'enhance': 'general',
        'upgrade': 'tier_increase',
        'improve': 'stat_boost',
        'enchant': 'magical_enhancement',
        'reinforce': 'durability_boost',
        'strengthen': 'damage_boost',
        'empower': 'special_ability'
    };

    return enhancementTypes[keyword] || 'general';
}

// Check if player has required resources
function hasEnhancementResources(cost) {
    if (player.gold < cost.gold) {
        return false;
    }

    // For now, assume player has materials (could be expanded to check actual material inventory)
    return true;
}

// Get maximum enhancement level for item
function getMaxEnhancementLevel(item) {
    const rarityLimits = {
        'COMMON': 3,
        'UNCOMMON': 5,
        'RARE': 7,
        'EPIC': 10,
        'LEGENDARY': 15,
        'ARTIFACT': 20
    };

    return rarityLimits[item.rarity] || 3;
}

// Perform the actual item enhancement
function performItemEnhancement(item, enhancementType, cost) {
    const newItem = JSON.parse(JSON.stringify(item)); // Deep copy
    const currentLevel = newItem.enhancementLevel || 0;
    newItem.enhancementLevel = currentLevel + 1;

    let description = '';
    let success = true;

    // Apply enhancement based on type
    switch (enhancementType) {
        case 'general':
            // General stat improvement
            if (newItem.damage) {
                const damageIncrease = Math.floor(Math.random() * 3) + 1;
                newItem.damage += `+${damageIncrease}`;
                description = `Damage increased by ${damageIncrease}.`;
            }
            if (newItem.armor) {
                newItem.armor += 1;
                description += ` Armor increased by 1.`;
            }
            break;

        case 'tier_increase':
            // Increase item tier/quality
            newItem.value = Math.floor(newItem.value * 1.3);
            description = 'Item quality significantly improved.';
            break;

        case 'stat_boost':
            // Boost primary stats
            if (newItem.effects) {
                newItem.effects.push(`enhancement_level_${newItem.enhancementLevel}`);
            } else {
                newItem.effects = [`enhancement_level_${newItem.enhancementLevel}`];
            }
            description = 'Item effectiveness improved.';
            break;

        case 'magical_enhancement':
            // Add magical properties
            const magicalEffects = ['fire_damage_1', 'frost_damage_1', 'lightning_damage_1', 'holy_damage_1'];
            const randomEffect = magicalEffects[Math.floor(Math.random() * magicalEffects.length)];
            if (newItem.effects) {
                newItem.effects.push(randomEffect);
            } else {
                newItem.effects = [randomEffect];
            }
            description = `Imbued with magical energy (${randomEffect.replace('_', ' ')}).`;
            break;

        case 'durability_boost':
            // Increase durability/resistance
            newItem.durability = (newItem.durability || 100) + 20;
            description = 'Item durability increased by 20.';
            break;

        case 'damage_boost':
            // Specifically boost damage
            if (newItem.damage) {
                const boost = Math.floor(Math.random() * 4) + 2;
                newItem.damage += `+${boost}`;
                description = `Damage significantly increased by ${boost}.`;
            } else {
                description = 'Item sharpness improved.';
            }
            break;

        case 'special_ability':
            // Add special abilities
            const specialAbilities = ['critical_chance_5', 'life_steal_small', 'mana_regen_tiny', 'luck_boost'];
            const randomAbility = specialAbilities[Math.floor(Math.random() * specialAbilities.length)];
            if (newItem.effects) {
                newItem.effects.push(randomAbility);
            } else {
                newItem.effects = [randomAbility];
            }
            description = `Gained special ability: ${randomAbility.replace('_', ' ')}.`;
            break;

        default:
            description = 'Item has been enhanced.';
    }

    // Update item name to reflect enhancement
    if (newItem.enhancementLevel === 1) {
        newItem.name = `Enhanced ${newItem.name}`;
    } else if (newItem.enhancementLevel >= 5) {
        newItem.name = newItem.name.replace('Enhanced ', `Masterwork `);
    } else if (newItem.enhancementLevel >= 10) {
        newItem.name = newItem.name.replace('Masterwork ', `Legendary `);
    }

    return {
        success: success,
        enhancedItem: newItem,
        description: description
    };
}

// Enhanced relationship detection function
// In script.js, REPLACE the old checkRelationshipChanges function with this one.
async function checkRelationshipChanges(playerCommand, aiResponse) {
    console.log("Running relationship check with Gemini...");
    // Await the results from our new Gemini-powered function
    const npcNames = await RelationshipMiddleware.extractNPCNames(aiResponse, player);

    if (npcNames.length === 0) {
        console.log("No potential NPCs identified by Gemini.");
        return;
    }

    let relationshipAdded = false;
    npcNames.forEach(npcName => {
        // The updateRelationship function will add the character if they are new.
        // We pass a trust change of 0 just to ensure the function runs and creates the entry if needed.
        const relationship = updateRelationship(npcName, 0, 0, `Encountered in ${player.currentLocation}.`);
        if (relationship) {
            relationshipAdded = true;
        }
    });
}

// Debug function to check inventory consistency
function debugInventory() {
    console.log("=== INVENTORY DEBUG ===");
    console.log("Player inventory length:", player.inventory ? player.inventory.length : 0);
    console.log("Player inventory items:", player.inventory);
    console.log("Player gold:", player.gold);
    console.log("Player equipment:", player.equipment);

    const savedInventory = localStorage.getItem(`inventory_${player.name}`);
    console.log("Saved inventory in localStorage:", savedInventory ? JSON.parse(savedInventory) : null);

    const savedGame = localStorage.getItem('pedenaRPGSave');
    if (savedGame) {
        const saveData = JSON.parse(savedGame);
        console.log("Player inventory in main save:", saveData.player ? saveData.player.inventory : null);
        console.log("Player gold in main save:", saveData.player ? saveData.player.gold : null);
    }

    displayMessage("Inventory debug info logged to console.", 'info');
}

// Function to fix inventory inconsistencies
function fixInventory() {
    console.log("Attempting to fix inventory inconsistencies...");

    // Force reload inventory from storage
    if (window.ItemManager && typeof ItemManager.loadInventoryFromStorage === 'function') {
        ItemManager.loadInventoryFromStorage(player);
    }

    // Ensure inventory array exists
    if (!player.inventory) {
        player.inventory = [];
    }

    // Remove any duplicate items (same ID)
    const uniqueItems = [];
    const seenIds = new Set();

    player.inventory.forEach(item => {
        if (!item.id) {
            item.id = Date.now() + Math.random(); // Generate missing ID
        }

        if (!seenIds.has(item.id)) {
            seenIds.add(item.id);
            uniqueItems.push(item);
        }
    });

    const removedDuplicates = player.inventory.length - uniqueItems.length;
    player.inventory = uniqueItems;

    // Save fixed inventory
    if (window.ItemManager && typeof ItemManager.saveInventoryToStorage === 'function') {
        ItemManager.saveInventoryToStorage(player);
    }

    saveGame();

    // Refresh display
    if (!document.getElementById('inventory-interface').classList.contains('hidden')) {
        displayInventory();
    }

    displayMessage(`Fixed inventory: removed ${removedDuplicates} duplicates. You now have ${player.inventory.length} items.`, 'success');
    updatePlayerStatsDisplay();
}

// Clean up invalid relationships (removes technical variable names)
function cleanupRelationships() {
    if (!player.relationships) {
        player.relationships = {};
        return;
    }

    const technicalTerms = [
        'classProgression', 'passiveBonuses', 'statusEffects', 'inventory',
        'equipment', 'stats', 'skills', 'abilities', 'spells', 'quests',
        'hp', 'maxHp', 'level', 'exp', 'gold', 'currentLocation'
    ];

    let removedCount = 0;
    technicalTerms.forEach(term => {
        if (player.relationships[term]) {
            delete player.relationships[term];
            removedCount++;
        }
    });

    if (removedCount > 0) {
        displayMessage(`🧹 Cleaned up ${removedCount} invalid relationship entries.`, 'success');
        saveGame();

        // Refresh background display if it's open
        const backgroundInterface = document.getElementById('background-interface');
        if (backgroundInterface && !backgroundInterface.classList.contains('hidden')) {
            displayCharacterBackground();
        }
    } else {
        displayMessage("✅ No invalid relationships found to clean up.", 'info');
    }
}

// Reset character progression to match current class progression data
function resetCharacterProgression() {
    console.log('--- RESET FUNCTION STARTED at ' + new Date().getTime()); // <-- ADD THIS LINE
    if (!player || !player.class) {
        displayMessage("No character to reset progression for.", 'error');
        return;
    }

    if (!confirm("Are you sure you want to reset your character progression? This will rebuild your abilities, spells, and feats based on your current level and class.")) {
        return;
    }

    try {
        const currentLevel = player.level;
        const currentClass = player.class;

        displayMessage("Resetting character progression...", 'info');

        // Backup important data
        const backupData = {
            name: player.name,
            level: currentLevel,
            class: currentClass,
            gender: player.gender,
            background: player.background,
            currentLocation: player.currentLocation,
            gold: player.gold,
            inventory: player.inventory,
            equipment: player.equipment,
            relationships: player.relationships,
            quests: player.quests,
            exp: player.exp,
            expToNextLevel: player.expToNextLevel
        };

        // Reinitialize character progression
        if (CharacterManager && typeof CharacterManager.initializeCharacter === 'function') {
            CharacterManager.initializeCharacter(player, currentClass);

            // Apply progression for each level from 2 to current level
            for (let level = 2; level <= currentLevel; level++) {
                CharacterManager.applyLevelProgression(player, level);
            }

            // Restore backed up data
            player.name = backupData.name;
            player.level = backupData.level;
            player.class = backupData.class;
            player.gender = backupData.gender;
            player.background = backupData.background;
            player.currentLocation = backupData.currentLocation;
            player.gold = backupData.gold;
            player.inventory = backupData.inventory;
            player.equipment = backupData.equipment;
            player.relationships = backupData.relationships;
            player.quests = backupData.quests;
            player.exp = backupData.exp;
            player.expToNextLevel = backupData.expToNextLevel;

            displayMessage("✅ Character progression reset successfully!", 'success');
            displayMessage(`Reinitialized as Level ${currentLevel} ${currentClass} with updated abilities and spells.`, 'info');

            // Save the updated progression
            CharacterManager.saveProgression(player);

            // Update displays
            updatePlayerStatsDisplay();

            // Refresh progression display if it's open
            const progressionInterface = document.getElementById('progression-interface');
            if (progressionInterface && !progressionInterface.classList.contains('hidden')) {
                displayCharacterProgression();
            }

        } else {
            displayMessage("CharacterManager not available for progression reset.", 'error');
        }

    } catch (error) {
        console.error('Error resetting character progression:', error);
        displayMessage("Error occurred while resetting progression. Check console for details.", 'error');
    }
}

async function generateEventEncounter() {
    displayMessage("🌟 Something interesting happens...", 'exploration');

    const events = [
        'weather_change',
        'mysterious_sign',
        'helpful_spirit',
        'ancient_relic',
        'crossroads_choice'
    ];

    const eventType = events[Math.floor(Math.random() * events.length)];

    switch (eventType) {
        case 'weather_change':
            const weathers = ['begins to rain', 'clears up beautifully', 'becomes foggy', 'grows windy'];
            const weather = weathers[Math.floor(Math.random() * weathers.length)];
            displayMessage(`🌤️ The weather ${weather}, affecting your journey.`, 'info');
            break;

        case 'mysterious_sign':
            displayMessage("🪧 You find a weathered signpost with mysterious directions carved into it.", 'exploration');
            displayMessage("The ancient words seem to point toward hidden paths and secret locations.", 'info');
            break;

        case 'helpful_spirit':
            const hpHeal = Math.floor(player.maxHp * 0.25);
            player.hp = Math.min(player.maxHp, player.hp + hpHeal);
            displayMessage("👻 A benevolent spirit appears and blesses you with healing energy!", 'success');
            displayMessage(`❤️ You recover ${hpHeal} HP.`, 'success');
            updatePlayerStatsDisplay();
            break;

        case 'ancient_relic':
            displayMessage("🏛️ You discover the ruins of an ancient structure, worn down by time.", 'exploration');
            displayMessage("Though mostly destroyed, you sense this place once held great significance.", 'info');
            break;

        case 'crossroads_choice':
            displayMessage("🛤️ You reach a crossroads with multiple paths branching in different directions.", 'exploration');
            displayMessage("Each path seems to lead to different adventures and opportunities.", 'info');
            break;
    }
}

async function generateQuest() {
    displayMessage("Seeking new adventures...", 'info');

    // Initialize quests array if it doesn't exist
    if (!player.quests) {
        player.quests = [];
    }

    try {
        // Generate quest using Gemini AI with structured data
        const quest = await generateGeminiQuest();

        // Add to player's quest list
        player.quests.push(quest);
        saveGame();
        updateQuestButton();

        // Display quest information
        displayMessage(`New quest available: ${quest.title}`, 'success');
        displayMessage(quest.description, 'info');
        displayMessage(`Objective: ${quest.objective}`, 'info');
        displayMessage(`Rewards: ${quest.rewards.gold} gold, ${quest.rewards.experience} XP${quest.rewards.items.length > 0 ? ', ' + quest.rewards.items.join(', ') : ''}`, 'info');
        displayMessage(`Difficulty: ${quest.difficulty} | Estimated Time: ${quest.estimatedTime}`, 'info');

        if (quest.complications) {
            displayMessage(`Complication: ${quest.complications}`, 'info');
        }

        // Display quest giver and location
        displayMessage(`Quest Giver: ${quest.questGiver} | Location: ${quest.location}`, 'info');

        // Refresh quest display if it's open
        const questInterface = document.getElementById('quest-interface');
        if (questInterface && !questInterface.classList.contains('hidden')) {
            displayQuests();
        }

    } catch (error) {
        console.error("Quest generation error:", error);
        displayMessage("Unable to generate quest at this time. Please try again.", 'error');
        // Try fallback
        await generateQuestFallback();
    }
}

// Fallback quest generation for compatibility
async function generateQuestFallback() {
    const questPrompt = `
Generate a quest for ${player.name}, a level ${player.level} ${player.class} in ${player.currentLocation}. Player's party: ${partyManager ? partyManager.getPartyNames().join(', ') : 'None'}.

The quest should be appropriate for their level and current location. Include:
1. A clear objective
2. A reward (gold and/or items)
3. Any special requirements or challenges
4. An interesting backstory

Make it engaging and appropriate for a fantasy RPG setting.

The quest should not be too long keep each section concise and to the point.
`;

    const questDescription = await callGeminiAPI(questPrompt, 0.8, 100000);

    if (questDescription) {
        const questId = Date.now().toString();
        const quest = {
            id: questId,
            title: `Quest ${player.quests.length + 1}`,
            description: questDescription,
            completed: false,
            rewards: { gold: 50, experience: 25, items: [] }, // Default values
            location: player.currentLocation,
            dateCreated: new Date().toLocaleDateString()
        };

        player.quests.push(quest);
        displayMessage(`New quest available: ${quest.title}`, 'success');
        displayMessage(questDescription, 'quest');
        saveGame();
        updateQuestButton();
    } else {
        displayMessage("No new quests are available at this time.", 'info');
    }
}

function checkQuestCompletion(playerAction) {
    if (!player.quests || player.quests.length === 0) return;

    player.quests.forEach(quest => {
        if (!quest.completed) {
            let isCompleted = false;
            let completionScore = 0;

            // Get the combined text from quest description and objective
            const questText = (quest.objective || quest.description || '').toLowerCase();
            const actionText = playerAction.toLowerCase();

            console.log('Checking quest completion:', {
                questTitle: quest.title,
                questText,
                actionText,
                questData: quest
            });

            // More strict quest completion requiring multiple criteria to be met
            const actionPatterns = [
                // Combat keywords - require both quest combat objective AND actual combat result
                {
                    keywords: ['kill', 'defeat', 'slay', 'destroy', 'eliminate', 'hunt', 'battle'],
                    triggers: ['defeated', 'killed', 'slain', 'destroyed', 'eliminated', 'victory', 'triumphant', 'beast is dead', 'monster is defeated'],
                    weight: 3
                },

                // Discovery keywords - require quest discovery objective AND actual finding
                {
                    keywords: ['find', 'locate', 'discover', 'uncover', 'retrieve', 'recover'],
                    triggers: ['found', 'discovered', 'located', 'uncovered', 'retrieved', 'recovered', 'came across', 'obtained'],
                    weight: 3
                },

                // Delivery keywords - require delivery objective AND completion confirmation
                {
                    keywords: ['deliver', 'bring', 'escort', 'transport', 'carry'],
                    triggers: ['delivered', 'brought', 'escorted', 'transported', 'handed over', 'completed delivery', 'safely arrived'],
                    weight: 3
                },

                // Investigation keywords - require investigation objective AND revelation
                {
                    keywords: ['investigate', 'examine', 'study', 'unravel', 'solve'],
                    triggers: ['investigated', 'examined', 'studied', 'unraveled', 'solved', 'mystery solved', 'truth revealed'],
                    weight: 3
                },

                // Generic completion - only if very explicit
                {
                    keywords: ['complete', 'finish', 'accomplish'],
                    triggers: ['quest completed', 'mission accomplished', 'task finished', 'objective achieved', 'successfully completed'],
                    weight: 5
                }
            ];

            // Check for action pattern matches with weighted scoring
            for (const pattern of actionPatterns) {
                const hasQuestKeyword = pattern.keywords.some(keyword => questText.includes(keyword));
                const hasActionTrigger = pattern.triggers.some(trigger => actionText.includes(trigger));

                if (hasQuestKeyword && hasActionTrigger) {
                    completionScore += pattern.weight;
                    console.log('Pattern match found:', {
                        pattern: pattern.keywords,
                        questKeyword: hasQuestKeyword,
                        actionTrigger: hasActionTrigger,
                        weight: pattern.weight,
                        score: completionScore
                    });
                }
            }

            // Enhanced target/object matching - require specific targets mentioned in quest
            const questTargets = extractQuestTargets(questText);
            const actionTargets = extractQuestTargets(actionText);

            if (questTargets.length > 0) {
                const targetMatches = questTargets.filter(target => actionTargets.includes(target));
                if (targetMatches.length > 0) {
                    completionScore += 2;
                    console.log('Target match found:', { questTargets, actionTargets, matches: targetMatches });
                }
            }

            // Location-based completion - must be at quest location AND have relevant action
            if (quest.location) {
                const questLocation = quest.location.toLowerCase();
                const currentLocation = player.currentLocation.toLowerCase();
                const actionRequiresLocation = ['arrive', 'reach', 'enter', 'visit', 'explore'].some(verb => actionText.includes(verb));

                if ((questLocation.includes(currentLocation) || currentLocation.includes(questLocation)) && actionRequiresLocation) {
                    completionScore += 1;
                    console.log('Location-based progress:', { questLocation, currentLocation, actionRequiresLocation });
                }
            }

            // Quest title word matching - require substantial overlap
            if (quest.title) {
                const titleWords = quest.title.toLowerCase().split(' ').filter(word => word.length > 3);
                const titleMatches = titleWords.filter(word => actionText.includes(word));

                if (titleMatches.length >= Math.max(2, Math.ceil(titleWords.length * 0.6))) {
                    completionScore += 2;
                    console.log('Quest title substantial match:', { titleWords, titleMatches, actionText });
                }
            }

            // More lenient quest completion - reduce required scores
            const requiredScore = quest.difficulty === 'Easy' ? 2 :
                quest.difficulty === 'Medium' ? 3 :
                    quest.difficulty === 'Hard' ? 4 : 5;

            // Also check for explicit completion phrases
            const explicitCompletionPhrases = [
                'quest completed', 'quest finished', 'mission accomplished', 'task completed',
                'objective achieved', 'successfully completed', 'quest done', 'mission complete',
                'objective complete', 'task finished', 'accomplished the', 'finished the quest',
                'completed the mission', 'achieved the objective'
            ];

            const hasExplicitCompletion = explicitCompletionPhrases.some(phrase =>
                actionText.includes(phrase) || questText.includes('completed')
            );

            // Complete quest if score meets threshold OR explicit completion detected
            isCompleted = completionScore >= requiredScore || hasExplicitCompletion;

            console.log('Quest completion analysis:', {
                questTitle: quest.title,
                totalScore: completionScore,
                requiredScore: requiredScore,
                hasExplicitCompletion: hasExplicitCompletion,
                isCompleted: isCompleted
            });

            if (isCompleted) {
                console.log('Quest completed!', quest.title);
                quest.completed = true;
                quest.dateCompleted = new Date().toLocaleDateString();

                displayMessage(`🎉 Quest completed: ${quest.title || 'Unknown Quest'}!`, 'success');

                // Reset quest pagination since completed quests changed
                resetQuestPagination();

                // Award rewards with proper structured reward parsing
                let goldAwarded = 0;
                let xpAwarded = 0;

                if (quest.rewards && typeof quest.rewards === 'object') {
                    // Parse gold reward from structured quest data
                    goldAwarded = parseInt(quest.rewards.gold) || 0;

                    // Parse XP reward from structured quest data - check all possible property names
                    xpAwarded = parseInt(quest.rewards.experience) || parseInt(quest.rewards.exp) || parseInt(quest.rewards.xp) || 0;

                    console.log('Quest rewards parsing:', {
                        questTitle: quest.title,
                        rewardsObject: quest.rewards,
                        goldParsed: goldAwarded,
                        xpParsed: xpAwarded
                    });

                    // Award items from structured quest data
                    if (quest.rewards.items && Array.isArray(quest.rewards.items) && quest.rewards.items.length > 0) {
                        quest.rewards.items.forEach(itemName => {
                            if (typeof itemName === 'string' && itemName.trim()) {
                                // Create more detailed quest reward items
                                const rewardItem = {
                                    id: Date.now() + Math.random(),
                                    name: itemName.trim(),
                                    type: 'quest_reward',
                                    rarity: quest.difficulty === 'Easy' ? 'COMMON' :
                                        quest.difficulty === 'Medium' ? 'UNCOMMON' :
                                            quest.difficulty === 'Hard' ? 'RARE' : 'EPIC',
                                    description: `A valuable reward earned by completing the quest: ${quest.title}`,
                                    value: Math.max(20, player.level * 10 + (quest.difficulty === 'Hard' ? 50 : 0))
                                };

                                if (!player.inventory) player.inventory = [];
                                player.inventory.push(rewardItem);
                                displayMessage(`🎁 You received: ${rewardItem.name}!`, 'success');
                            }
                        });
                    }
                }

                // Always ensure minimum rewards regardless of quest structure
                if (goldAwarded === 0) {
                    const difficultyMultiplier = quest.difficulty === 'Easy' ? 1.0 :
                        quest.difficulty === 'Medium' ? 1.5 :
                            quest.difficulty === 'Hard' ? 2.0 :
                                quest.difficulty === 'Very Hard' ? 2.5 : 1.5;

                    goldAwarded = Math.floor((50 + player.level * 25) * difficultyMultiplier);
                }

                if (xpAwarded === 0) {
                    const baseXP = 25 + (player.level * 15);
                    const difficultyMultiplier = quest.difficulty === 'Easy' ? 0.8 :
                        quest.difficulty === 'Medium' ? 1.0 :
                            quest.difficulty === 'Hard' ? 1.4 :
                                quest.difficulty === 'Very Hard' ? 2.0 : 1.0;
                    xpAwarded = Math.floor(baseXP * difficultyMultiplier);
                }

                console.log('Final quest rewards:', {
                    questTitle: quest.title,
                    difficulty: quest.difficulty || 'Medium',
                    goldAwarded: goldAwarded,
                    xpAwarded: xpAwarded,
                    playerLevel: player.level
                });

                // Apply rewards - Always award both gold and XP
                updateGold(goldAwarded, 'quest reward');
                displayMessage(`💰 You earned ${goldAwarded} gold!`, 'success');

                const oldLevel = player.level;
                gainExperience(xpAwarded);
                displayMessage(`⭐ You gained ${xpAwarded} experience!`, 'success');

                if (player.level > oldLevel) {
                    displayMessage(`🆙 Level up! You are now level ${player.level}!`, 'success');
                    if (window.displayLevelUpRewards && player.classProgression) {
                        displayLevelUpRewards(player.classProgression, oldLevel);
                    }
                }

                // Update tracking
                if (!player.completedQuests) player.completedQuests = 0;
                player.completedQuests++;

                updateQuestButton();
            } else {
                console.log('Quest not completed - insufficient score:', {
                    questTitle: quest.title,
                    score: completionScore,
                    required: requiredScore
                });
            }
        }
    });
}

// Helper function to extract specific targets from quest text
function extractQuestTargets(text) {
    const commonTargets = [
        'bandit', 'bandits', 'thief', 'thieves', 'robber', 'robbers',
        'goblin', 'goblins', 'orc', 'orcs', 'dragon', 'dragons',
        'wolf', 'wolves', 'bear', 'bears', 'spider', 'spiders',
        'merchant', 'merchants', 'trader', 'traders', 'caravan', 'caravans',
        'artifact', 'treasure', 'relic', 'scroll', 'book', 'crystal', 'gem',
        'temple', 'ruins', 'cave', 'tower', 'castle', 'fortress',
        'village', 'town', 'city', 'settlement'
    ];

    return commonTargets.filter(target => text.includes(target));
}

function completeQuest(quest) {
    if (!quest || quest.completed) {
        console.log("Attempted to complete a null or already completed quest.");
        return;
    }

    quest.completed = true;
    quest.dateCompleted = new Date().toLocaleDateString();

    displayMessage(`🎉 Quest Completed: ${quest.title}!`, 'success');

    // Award rewards directly from the quest object
    const goldAward = quest.rewards?.gold || 0;
    const xpAward = quest.rewards?.experience || 0;
    const itemsAwarded = quest.rewards?.items || [];

    if (goldAward > 0) {
        updateGold(goldAward, 'quest reward');
    }
    if (xpAward > 0) {
        gainExperience(xpAward);
    }

    if (itemsAwarded.length > 0) {
        itemsAwarded.forEach(itemName => {
            if (typeof itemName === 'string' && itemName.trim()) {
                // We'll create a basic representation of the reward item
                const rewardItem = {
                    id: Date.now() + Math.random(),
                    name: itemName.trim(),
                    type: 'quest_reward',
                    rarity: quest.difficulty === 'Hard' ? 'RARE' : 'UNCOMMON',
                    description: `A reward for completing the quest: ${quest.title}`,
                    value: (goldAward + xpAward) / 2 || 50
                };
                ItemManager.addItemToInventory(player, rewardItem);
                displayMessage(`🎁 You received: ${rewardItem.name}!`, 'success');
            }
        });
    }

    // Update the UI
    updateQuestButton();
    resetQuestPagination();
    const questInterface = document.getElementById('quest-interface');
    if (questInterface && !questInterface.classList.contains('hidden')) {
        displayQuests();
    }
}

// Manual quest completion function
function manualCompleteQuest(questTitle) {
    if (!player.quests || player.quests.length === 0) {
        displayMessage("You have no quests to complete.", 'error');
        return;
    }

    // Find quest by partial title match
    const quest = player.quests.find(q =>
        !q.completed &&
        (q.title.toLowerCase().includes(questTitle.toLowerCase()) ||
            questTitle.toLowerCase().includes(q.title.toLowerCase()))
    );

    if (!quest) {
        displayMessage(`Quest "${questTitle}" not found in your active quests.`, 'error');
        return;
    }

    if (quest.completed) {
        displayMessage(`Quest "${quest.title}" is already completed.`, 'info');
        return;
    }

    // Mark as completed
    quest.completed = true;
    quest.dateCompleted = new Date().toLocaleDateString();

    displayMessage(`🎉 Manually completed quest: ${quest.title}!`, 'success');

    // Award rewards
    let goldAwarded = 0;
    let xpAwarded = 0;

    if (quest.rewards && typeof quest.rewards === 'object') {
        goldAwarded = parseInt(quest.rewards.gold) || 0;
        xpAwarded = parseInt(quest.rewards.experience) || parseInt(quest.rewards.exp) || parseInt(quest.rewards.xp) || 0;

        // Award items
        if (quest.rewards.items && Array.isArray(quest.rewards.items) && quest.rewards.items.length > 0) {
            quest.rewards.items.forEach(itemName => {
                if (typeof itemName === 'string' && itemName.trim()) {
                    const rewardItem = {
                        id: Date.now() + Math.random(),
                        name: itemName.trim(),
                        type: 'quest_reward',
                        rarity: quest.difficulty === 'Easy' ? 'COMMON' :
                            quest.difficulty === 'Medium' ? 'UNCOMMON' :
                                quest.difficulty === 'Hard' ? 'RARE' : 'EPIC',
                        description: `A valuable reward earned by completing the quest: ${quest.title}`,
                        value: Math.max(20, player.level * 10 + (quest.difficulty === 'Hard' ? 50 : 0))
                    };

                    if (!player.inventory) player.inventory = [];
                    player.inventory.push(rewardItem);
                    displayMessage(`🎁 You received: ${rewardItem.name}!`, 'success');
                }
            });
        }
    }

    // Ensure minimum rewards
    if (goldAwarded === 0) {
        const difficultyMultiplier = quest.difficulty === 'Easy' ? 1.0 :
            quest.difficulty === 'Medium' ? 1.5 :
                quest.difficulty === 'Hard' ? 2.0 :
                    quest.difficulty === 'Very Hard' ? 2.5 : 1.5;
        goldAwarded = Math.floor((50 + player.level * 25) * difficultyMultiplier);
    }

    if (xpAwarded === 0) {
        const baseXP = 25 + (player.level * 15);
        const difficultyMultiplier = quest.difficulty === 'Easy' ? 0.8 :
            quest.difficulty === 'Medium' ? 1.0 :
                quest.difficulty === 'Hard' ? 1.4 :
                    quest.difficulty === 'Very Hard' ? 2.0 : 1.0;
        xpAwarded = Math.floor(baseXP * difficultyMultiplier);
    }

    // Apply rewards
    updateGold(goldAwarded, 'quest reward');
    displayMessage(`💰 You earned ${goldAwarded} gold!`, 'success');

    const oldLevel = player.level;
    gainExperience(xpAwarded);
    displayMessage(`⭐ You gained ${xpAwarded} experience!`, 'success');

    if (player.level > oldLevel) {
        displayMessage(`🆙 Level up! You are now level ${player.level}!`, 'success');
        if (window.displayLevelUpRewards && player.classProgression) {
            displayLevelUpRewards(player.classProgression, oldLevel);
        }
    }

    // Update tracking
    if (!player.completedQuests) player.completedQuests = 0;
    player.completedQuests++;

    updateQuestButton();
    resetQuestPagination();

    // Refresh quest display if open
    const questInterface = document.getElementById('quest-interface');
    if (questInterface && !questInterface.classList.contains('hidden')) {
        displayQuests();
    }

    saveGame();
    addToConversationHistory('assistant', `${player.name} completed the quest: ${quest.title}`);
}

// Helper function for experience gain
function gainExperience(amount) {
    if (!amount || amount <= 0) return;

    player.exp = (player.exp || 0) + amount;
    console.log(`[script.js] gainExperience: Player XP after update: ${player.exp}`);

    // Check for level up
    while (player.exp >= player.expToNextLevel) {
        player.exp -= player.expToNextLevel;
        player.level++;
        player.maxHp += 10; // Basic HP increase
        player.hp = player.maxHp; // Full heal on level up
        player.expToNextLevel = Math.floor(player.expToNextLevel * 1.5); // Increase XP needed
        console.log(`[script.js] gainExperience: Player leveled up to ${player.level}. New XP: ${player.exp}, New XP to Next: ${player.expToNextLevel}`);

        // Apply class progression if available
        if (window.CharacterManager && typeof CharacterManager.levelUp === 'function') {
            CharacterManager.levelUp(player);
        }
    }

    updatePlayerStatsDisplay();

    // NEW: Refresh progression and background displays if they are open
    const progressionInterface = document.getElementById('progression-interface');
    if (progressionInterface && !progressionInterface.classList.contains('hidden')) {
        // Ensure latest data is loaded before displaying (as already implemented in button handler)
        if (player && player.name) {
            CharacterManager.loadProgression(player);
        }
        displayCharacterProgression();
    }

    const backgroundInterface = document.getElementById('background-interface');
    if (backgroundInterface && !backgroundInterface.classList.contains('hidden')) {
        // Ensure latest data is loaded before displaying (as already implemented in button handler)
        if (player && player.name) {
            CharacterManager.loadProgression(player);
        }
        displayCharacterBackground();
    }

    // Also call saveGame explicitly after XP gain, if not already handled by calling functions (combat/quest)
    saveGame();
}

// Legacy playerAttack function - now handled by CombatSystem.playerAction()
async function playerAttack() {
    if (CombatSystem.combatState.isActive) {
        await CombatSystem.playerAction('attack', 'basic');
    }
}

async function enemyAttack() {
    if (!player.currentEnemy) return;

    const enemy = player.currentEnemy;

    // Enhanced damage calculation with armor consideration
    let baseDamage = 0;

    // Parse enemy attack if it's a dice string
    if (typeof enemy.attack === 'string' && enemy.attack.includes('d')) {
        baseDamage = rollDice(enemy.attack);
    } else if (typeof enemy.attack === 'number') {
        baseDamage = enemy.attack;
    } else {
        baseDamage = 8; // Default damage
    }

    // Ensure baseDamage is a valid number
    if (isNaN(baseDamage) || baseDamage < 0) {
        baseDamage = 8;
    }

    // Add level-based scaling for enemies
    const levelScaling = Math.max(1, Math.floor(player.level / 3));
    const randomVariation = Math.floor(Math.random() * 6) + 1; // 1-6
    let totalDamage = baseDamage + levelScaling + randomVariation;

    // Calculate player defense from equipment and stats
    let playerDefense = 0;

    // Check equipped armor
    if (player.equipment) {
        Object.values(player.equipment).forEach(item => {
            if (item && typeof item.defense === 'number') {
                playerDefense += item.defense;
            }
        });
    }

    // Add constitution bonus to defense
    if (player.stats && player.stats.constitution) {
        const constitutionBonus = Math.floor((player.stats.constitution - 10) / 2);
        playerDefense += Math.max(0, constitutionBonus);
    }

    // Apply defense (minimum 1 damage)
    const finalDamage = Math.max(1, totalDamage - playerDefense);

    // Apply damage to player
    const oldHp = player.hp;
    player.hp = Math.max(0, player.hp - finalDamage);

    // Display combat results
    displayMessage(`${enemy.name} attacks you for ${finalDamage} damage!${playerDefense > 0 ? ` (${totalDamage} reduced by ${playerDefense} defense)` : ''}`, 'combat');
    displayMessage(`Your HP: ${player.hp}/${player.maxHp}${oldHp > player.hp ? ` (-${oldHp - player.hp})` : ''}`, 'info');

    // Update HP display
    updatePlayerStatsDisplay();

    // Check if player is defeated
    if (player.hp <= 0) {
        displayMessage("💀 You have been defeated!", 'error');
        displayMessage("You lose consciousness and wake up in a safe place...", 'info');

        // Enhanced death penalty system
        const goldLoss = Math.floor(player.gold * 0.15); // Lose 15% of gold

        updateGold(-goldLoss, 'death penalty');
        player.hp = Math.floor(player.maxHp * 0.25); // Recover to 25% HP

        displayMessage(`💰 You lost ${goldLoss} gold from your ordeal.`, 'error');
        displayMessage(`❤️ You recover to ${player.hp} HP at a safe location.`, 'info');

        // Move player to a safe location
        const safeLocations = ['Pedena Town Square', 'Temple of Healing', 'Inn'];
        const randomSafeLocation = safeLocations[Math.floor(Math.random() * safeLocations.length)];

        if (player.currentLocation !== randomSafeLocation) {
            player.currentLocation = randomSafeLocation;
            displayMessage(`🏠 You find yourself at ${randomSafeLocation}.`, 'info');
        }

        // End combat
        player.currentEnemy = null;
        // Remove inline combat interface
        const inlineCombat = document.getElementById('inline-combat-interface');
        if (inlineCombat) {
            inlineCombat.remove();
        }
        updatePlayerStatsDisplay();

        // Add death to conversation history
        addToConversationHistory('assistant', `${player.name} was defeated in combat and recovered at ${player.currentLocation}`);
    } else {
        // Combat continues - save progress
    }
}

// Legacy fleeCombat function - now handled by CombatSystem.fleeCombat()
async function fleeCombat() {
    if (CombatSystem.combatState.isActive) {
        await CombatSystem.fleeCombat();
    }
}

// Party Management Functions
function initializePartySystem() {
    if (typeof PartyManager !== 'undefined') {
        partyManager = new PartyManager();
        multiCombatSystem = new MultiCombatSystem(partyManager);

        // Load party data if it exists in save
        const savedGame = localStorage.getItem('pedenaRPGSave');
        if (savedGame) {
            const saveData = JSON.parse(savedGame);
            if (saveData.partyData) {
                partyManager.loadSaveData(saveData.partyData);
            }
        }

        console.log('Party and Multi-Combat systems initialized');
    } else {
        console.warn('PartyManager class not found - party features will be limited');
    }
}

async function recruitNPC(npcName, npcData = null) {
    if (!partyManager) {
        displayMessage("Party system not available.", 'error');
        return;
    }

    let npc = npcData;
    // Try to find an existing NPC in the current location.
    if (!npc) {
        const existingNPCs = getNPCsInLocation(player.currentLocation);
        npc = existingNPCs.find(n => n.name.toLowerCase().includes(npcName.toLowerCase()));
    }

    // If no NPC is found at all, create a new one from scratch.
    if (!npc) {
        displayMessage(`You haven't met ${npcName} before, but you approach them to join your cause.`, 'info');
        const npcStats = await generateNpcStats(npcName, player.level);
        npc = {
            id: `npc_${Date.now()}`,
            name: npcName,
            ...npcStats, // Spread the stats into the new npc object
            loyalty: 60
        };
    }
    // If we found an existing NPC, check if they are missing stats.
    else if (!npc.health || !npc.maxHealth) {
        console.log(`Existing NPC ${npc.name} found, but is missing stats. Generating now.`);
        const npcStats = await generateNpcStats(npc.name, player.level);
        // Combine existing npc data (like ID and description) with the new stats.
        npc = {
            ...npc,
            ...npcStats
        };
        console.log(`Stats generated for ${npc.name}: HP ${npc.health}`);
    }

    const result = partyManager.addMember(npc);
    displayMessage(result.message, result.success ? 'success' : 'error');

    if (result.success) {
        updateRelationship(npcName, 0, 20, `${npcName} has joined your party as a trusted companion.`);
        displayPartyStatus(); // This shows the "=== Party Status ===" message
        saveGame();

        // Refresh the progression screen if it's open
        const progressionInterface = document.getElementById('progression-interface');
        if (progressionInterface && !progressionInterface.classList.contains('hidden')) {
            displayCharacterProgression();
        }
    }

    return result;
}

function dismissPartyMember(memberId) {
    if (!partyManager) {
        displayMessage("Party system not available.", 'error');
        return;
    }

    // Use loose equality (==) to find the member, which ignores the difference
    // between a number and a string (e.g., 123 == "123" is true).
    const member = partyManager.party.find(m => m.id == memberId);

    if (!member) {
        // This is the error message you were seeing.
        displayMessage("Could not find that party member to dismiss.", 'error');
        return;
    }

    if (!confirm(`Are you sure you want to dismiss ${member.name} from your party?`)) {
        return;
    }

    // This calls the core logic in party-manager.js to remove the member.
    const result = partyManager.removeMember(memberId);
    displayMessage(result.message, result.success ? 'success' : 'error');

    if (result.success) {
        const progressionInterface = document.getElementById('progression-interface');
        if (progressionInterface && !progressionInterface.classList.contains('hidden')) {
            displayCharacterProgression();
        }
        saveGame();
    }

    return result;
}

function displayPartyStatus() {
    if (!partyManager) {
        displayMessage("Party system not available.", 'error');
        return;
    }

    const allMembers = partyManager.getAllMembers(player);

    if (allMembers.length === 1) {
        displayMessage("You are traveling alone.", 'info');
        return;
    }

    displayMessage("=== Party Status ===", 'info');

    allMembers.forEach(member => {
        const status = member.isPlayer ? "(You)" : `(${member.position})`;
        const healthStatus = `${member.health}/${member.maxHealth} HP`;
        const loyaltyInfo = member.loyalty ? ` - Loyalty: ${member.loyalty}%` : '';

        displayMessage(`${member.name} ${status} - Level ${member.level} - ${healthStatus}${loyaltyInfo}`, 'info');
    });

    const bonuses = partyManager.getPartyBonuses();
    if (bonuses.attack > 0 || bonuses.defense > 0 || bonuses.special.length > 0) {
        displayMessage(`Party Bonuses: +${bonuses.attack} Attack, +${bonuses.defense} Defense`, 'success');
        if (bonuses.special.length > 0) {
            displayMessage(`Special Abilities: ${bonuses.special.join(', ')}`, 'success');
        }
    }
}

function updatePartyUI() {
    if (!partyManager) return;

    const partyCommands = partyManager.getPartyCommands();

    // Add party status to quick actions if party exists
    if (partyManager.party.length > 0) {
        // You could add party management buttons to the UI here
        // For now, we'll just update the display when needed
    }
}

function buildPartyStatusHTML() {
    // Check if the party manager exists and has members
    if (!partyManager || partyManager.party.length === 0) {
        return '<p class="text-sm text-gray-600 italic">You are currently adventuring alone.</p>';
    }

    let html = '';
    const allMembers = partyManager.getAllMembers(player);

    allMembers.forEach(member => {
        // The member object for the player has `isPlayer: true`
        if (member.isPlayer) {
            html += `
                <div class="p-2 mb-2 border-b border-amber-700/20">
                    <p class="font-semibold">${member.name} (You)</p>
                    <p class="text-sm text-amber-800">Level ${member.level} - ${member.health}/${member.maxHealth} HP</p>
                </div>
            `;
        } else {
            // This is a party member, so we add a dismiss button
            html += `
                <div class="p-2 mb-2 border-b border-amber-700/20 flex justify-between items-center">
                    <div>
                        <p class="font-semibold">${member.name} ${member.position ? `(${member.position})` : ''}</p>
                        <p class="text-sm text-amber-800">Level ${member.level} - ${member.health}/${member.maxHealth} HP ${member.loyalty !== undefined ? `- Loyalty: ${member.loyalty}%` : ''}</p>
                    </div>
                    <button onclick="dismissPartyMember('${member.id}')" class="btn-parchment bg-red-600 hover:bg-red-700 text-white text-xs py-1 px-2">
                        Dismiss
                    </button>
                </div>
            `;
        }
    });

    return html;
}

// Multi-Combat Integration
async function initiateMultiCombat(enemies) {
    if (!multiCombatSystem || !partyManager) {
        // Fallback to regular combat
        return await CombatSystem.initiateCombat(player, enemies[0], player.currentLocation);
    }

    displayMessage("🔥 Multi-member combat begins!", 'combat');

    const combatResult = multiCombatSystem.startCombat(player, enemies);

    if (!combatResult.success) {
        displayMessage("Failed to start multi-combat. Falling back to regular combat.", 'error');
        return await CombatSystem.initiateCombat(player, enemies[0], player.currentLocation);
    }

    // Display initial combat state
    displayCombatState();

    // Start combat loop
    await processCombatTurns();
}

function displayCombatState() {
    if (!multiCombatSystem || !multiCombatSystem.isActive) return;

    const state = multiCombatSystem.getCombatState();

    displayMessage(`=== Round ${state.round} ===`, 'combat');
    displayMessage(`Current Turn: ${state.currentTurn ? state.currentTurn.name : 'None'}`, 'info');

    // Display living allies
    if (state.livingAllies.length > 0) {
        displayMessage("Your Party:", 'info');
        state.livingAllies.forEach(ally => {
            displayMessage(`  ${ally.name}: ${ally.health}/${ally.maxHealth} HP`, 'info');
        });
    }

    // Display living enemies
    if (state.livingEnemies.length > 0) {
        displayMessage("Enemies:", 'info');
        state.livingEnemies.forEach(enemy => {
            displayMessage(`  ${enemy.name}: ${enemy.health}/${enemy.maxHealth} HP`, 'info');
        });
    }

    // Display recent combat log
    const recentLog = state.combatLog.slice(-3);
    recentLog.forEach(logEntry => {
        displayMessage(logEntry, 'combat');
    });
}

async function processCombatTurns() {
    while (multiCombatSystem.isActive) {
        const currentTurn = multiCombatSystem.getCurrentTurn();

        if (!currentTurn) {
            displayMessage("Combat ended unexpectedly.", 'error');
            break;
        }

        if (currentTurn.type === 'player') {
            // Player turn - wait for player input
            displayMessage(`It's your turn! Choose your action:`, 'info');
            displayMessage(`Available actions: Attack, Defend, Use Ability, Flee`, 'info');

            // Set flag to indicate we're waiting for player input in multi-combat
            multiCombatSystem.waitingForPlayerInput = true;
            break; // Exit loop, player will trigger next turn via command

        } else {
            // AI turn (NPC or enemy)
            displayMessage(`${currentTurn.name} is acting...`, 'info');

            const result = await multiCombatSystem.processAITurn();

            if (result && result.combatEnded) {
                handleCombatEnd(result);
                break;
            }

            // Brief pause between AI turns
            await new Promise(resolve => setTimeout(resolve, 1000));

            displayCombatState();
        }
    }
}

function handleCombatEnd(result) {
    if (!result) return;

    displayMessage(result.message, result.result === 'victory' ? 'success' : 'error');

    if (result.result === 'victory') {
        // Calculate rewards
        const baseXP = 50 * multiCombatSystem.enemies.length;
        const baseGold = 30 * multiCombatSystem.enemies.length;

        // Distribute XP among party members
        const playerXP = partyManager.distributeExperience(baseXP);

        gainExperience(playerXP);
        updateGold(baseGold, 'multi-combat victory');

        displayMessage(`You gained ${playerXP} XP and ${baseGold} gold!`, 'success');
        F
        // Check for level up
        if (player.exp >= player.expToNextLevel) {
            displayMessage("Level up achieved!", 'success');
        }

        // Heal party members slightly after victory
        partyManager.party.forEach(member => {
            if (member.health > 0) {
                const healAmount = Math.floor(member.maxHealth * 0.1);
                member.health = Math.min(member.maxHealth, member.health + healAmount);
            }
        });

        displayMessage("Party members recover slightly from the victory.", 'success');

    } else if (result.result === 'defeat') {
        // Handle party defeat
        const goldLoss = Math.floor(player.gold * 0.2);
        updateGold(-goldLoss, 'party defeat penalty');

        // Revive party members at low health
        partyManager.party.forEach(member => {
            if (member.health <= 0) {
                member.health = Math.floor(member.maxHealth * 0.25);
            }
        });

        player.hp = Math.max(1, Math.floor(player.maxHp * 0.25));

        displayMessage("Your party has been defeated but manages to escape...", 'info');
        displayMessage(`You lost ${goldLoss} gold in the retreat.`, 'error');
    }

    // Clean up combat state
    multiCombatSystem.isActive = false;
    multiCombatSystem.waitingForPlayerInput = false;

    updatePlayerStatsDisplay();
}

// Enhanced item pickup handler that detects specific items from story context
async function handleItemPickup(command, storyContext = '') {
    console.log('Processing item pickup:', command);

    // Extract item names from the command and story context
    const pickupItems = extractItemsFromText(command, storyContext);

    if (pickupItems.length === 0) {
        displayMessage("You don't see anything specific to take.", 'info');
        return;
    }

    // Ensure inventory exists
    if (!player.inventory) {
        player.inventory = [];
    }

    let itemsAdded = 0;

    for (const itemName of pickupItems) {
        const generatedItem = await generateItemFromDescription(itemName, {
            locationContext: player.currentLocation,
            playerLevel: player.level,
            playerClass: player.class,
            storyContext: storyContext
        });

        if (generatedItem) {
            // Add to inventory using ItemManager
            ItemManager.addItemToInventory(player, generatedItem);

            displayMessage(`You picked up: ${generatedItem.name}!`, 'success');
            displayMessage(`${generatedItem.description}`, 'info');

            itemsAdded++;
        }
    }

    if (itemsAdded > 0) {
        displayMessage(`${itemsAdded} item(s) added to inventory. You now have ${player.inventory.length} items total.`, 'info');

        // Ensure inventory is saved
        if (window.ItemManager && typeof ItemManager.saveInventoryToStorage === 'function') {
            ItemManager.saveInventoryToStorage(player);
        }

        updatePlayerStatsDisplay();
    }
}

// Extract item names from command and story context
function extractItemsFromText(command, storyContext = '') {
    const combinedText = `${command} ${storyContext}`.toLowerCase();
    const items = [];

    // Common item pickup patterns
    const itemPatterns = [
        /(?:take|grab|pick up|get|collect)\s+(?:the\s+)?([^,.\n]+?)(?:\s+(?:and|,|\n)|$)/g,
        /(?:bronze|iron|steel|silver|gold|ancient|rusty|dented|worn|weathered|magical)\s+([a-z]+(?:\s+[a-z]+)*)/g,
        /(?:helmet|sword|shield|armor|weapon|blade|axe|bow|staff|ring|amulet|potion|scroll|book|gem|crystal)/g
    ];

    // Extract from story context (items mentioned in previous responses)
    const storyItemMatches = storyContext.match(/(?:bronze helmet|short sword|leather jerkin|parchment|sword|helmet|armor|weapon|blade|axe|bow|staff|ring|amulet|potion|scroll|book|gem|crystal|equipment)/gi);
    if (storyItemMatches) {
        items.push(...storyItemMatches.map(item => item.trim()));
    }

    // Extract from command
    let match;
    for (const pattern of itemPatterns) {
        while ((match = pattern.exec(combinedText)) !== null) {
            const item = match[1] || match[0];
            if (item && item.length > 2) {
                items.push(item.trim());
            }
        }
    }

    // Remove duplicates and filter out common words
    const filteredItems = [...new Set(items)].filter(item =>
        !['the', 'and', 'or', 'a', 'an', 'it', 'them', 'that', 'this'].includes(item.toLowerCase())
    );

    console.log('Extracted items:', filteredItems);
    return filteredItems;
}

// Generate item using world-items system based on description
async function generateItemFromDescription(itemName, context) {
    try {
        // Clean up item name
        const cleanName = itemName.replace(/^(the|a|an)\s+/i, '').trim();

        // This call now needs to be awaited
        const itemData = await categorizeItemFromName(cleanName);

        // The ItemGenerator.generateItem function is also async
        const generatedItem = await ItemGenerator.generateItem({
            category: itemData.category,
            rarity: itemData.rarity,
            subType: itemData.subType, // Pass the subType from the AI
            locationContext: context.locationContext,
            playerLevel: context.playerLevel,
            playerClass: context.playerClass,
        });

        if (generatedItem) {
            // Override the generic generated name with the more descriptive one from the narrative
            generatedItem.name = cleanName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

            if (itemData.description) {
                generatedItem.description = itemData.description;
            }

            // Ensure the item has all required properties
            if (!generatedItem.id) generatedItem.id = ItemGenerator.generateItemId();
            if (!generatedItem.value) generatedItem.value = Math.max(1, Math.floor(Math.random() * 50) + 10);
            if (!generatedItem.type) generatedItem.type = itemData.category || 'trinket';
            if (!generatedItem.rarity) generatedItem.rarity = itemData.rarity || 'COMMON';

            return generatedItem;
        }

        // Fallback: create a basic item if generation fails
        console.warn(`Failed to generate item for "${cleanName}", creating fallback item`);
        return createFallbackItem(cleanName, itemData);

    } catch (error) {
        console.error('Error generating item from description:', error);
        // Return fallback item instead of null
        return createFallbackItem(itemName, { category: 'trinket', rarity: 'COMMON' });
    }
}

// Create a fallback item when generation fails
function createFallbackItem(itemName, itemData = {}) {
    const cleanName = itemName.replace(/^(the|a|an)\s+/i, '').trim();
    const capitalizedName = cleanName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
        id: ItemGenerator ? ItemGenerator.generateItemId() : `fallback_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        name: capitalizedName || "Mysterious Item",
        type: itemData.category || 'trinket',
        rarity: itemData.rarity || 'COMMON',
        description: `A ${cleanName.toLowerCase() || 'mysterious item'} that you've acquired. Its properties seem ordinary but it might have hidden value.`,
        value: Math.max(1, Math.floor(Math.random() * 30) + 5),
        effects: [],
        isIdentified: true,
        source: 'ai_fallback'
    };
}

// Categorize item based on name/description
async function categorizeItemFromName(itemName) {
    console.log(`AI is categorizing: "${itemName}"`);

    // Provide context to the AI about what valid categories and rarities exist.
    const categories = Object.values(window.itemCategories || {});
    const rarities = Object.keys(window.itemRarity || {});
    const weaponSubTypes = Object.keys(window.itemTemplates?.weapons || {});
    const armorSubTypes = Object.keys(window.itemTemplates?.armor || {});

    // This prompt asks the AI to act as a categorizer and return a clean JSON object.
    const prompt = `
        You are an expert RPG item categorizer. Analyze the following item name and return its category, rarity, and a specific sub-type in a JSON format.

        Item Name: "${itemName}"

        Here are the valid options for each field:
        - "category": [${categories.map(c => `"${c}"`).join(', ')}]
        - "rarity": [${rarities.map(r => `"${r}"`).join(', ')}]
        - "subType": If the category is 'weapon', choose from [${weaponSubTypes.map(s => `"${s}"`).join(', ')}]. If 'armor', choose from [${armorSubTypes.map(s => `"${s}"`).join(', ')}]. Otherwise, set to null.

        Analyze the item name for keywords (e.g., "Rusty", "Gleaming", "of the Vampire") to determine rarity.
        - Common words like 'Rusty', 'Bent', 'Crude' suggest COMMON.
        - Quality words like 'Steel', 'Balanced' suggest UNCOMMON.
        - Magical or high-quality material words like 'Elven', 'Dwarven', 'of Flame' suggest RARE.
        - Epic or powerful words like 'of the Dragon', 'Soul Reaver' suggest EPIC or LEGENDARY.
        - Unique, world-changing names suggest ARTIFACT or MYTHIC.

        Example 1:
        Item Name: "Gleaming Silver Rapier"
        {
            "category": "weapon",
            "rarity": "UNCOMMON",
            "subType": "swords"
        }

        Example 2:
        Item Name: "Potion of Minor Healing"
        {
            "category": "consumable",
            "rarity": "COMMON",
            "subType": null
        }

        Example 3:
        Item Name: "Ancient Dragonscale Platemail"
        {
            "category": "armor",
            "rarity": "EPIC",
            "subType": "chestplates"
        }

        Respond with ONLY the valid JSON object.
    `;

    try {
        // Call the AI with a low temperature for more predictable, structured output.
        const response = await callGeminiAPI(prompt, 0.2, 250, false);
        const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

        if (jsonMatch) {
            const parsedJson = JSON.parse(jsonMatch[0]);
            // Validate the AI's response to ensure it's usable.
            if (categories.includes(parsedJson.category) && rarities.includes(parsedJson.rarity)) {
                console.log(`AI categorized "${itemName}" as:`, parsedJson);
                return parsedJson;
            }
        }
        // If the AI response is malformed or invalid, throw an error to trigger the fallback.
        throw new Error("AI response was invalid or malformed.");

    } catch (error) {
        console.error(`AI categorization failed for "${itemName}". Error:`, error);
        // If the AI fails, we'll fall back to a default "magical" item.
        return {
            category: 'magical',
            rarity: 'COMMON',
            subType: null
        };
    }
}

// Enhanced Gemini-powered quest generation with structured data
async function generateGeminiQuest() {
    // Get conversation context for quest relevance
    const conversationContext = getConversationContext();

    // Determine quest category and theme based on player and context
    const questData = QuestTaskGenerator.generateQuest(player, {
        currentLocation: player.currentLocation,
        playerLevel: player.level,
        playerClass: player.class,
        recentQuests: player.quests ? player.quests.slice(-3) : []
    });

    // --- NEW LOGIC TO GET RANDOM SUBSETS ---
    const getRandomSubset = (arr, n) => {
        // Add a check to prevent errors if the input isn't an array
        if (!Array.isArray(arr)) {
            console.error("Cannot get random subset of a non-array:", arr);
            return [];
        }
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    };

    const randomCategories = getRandomSubset(Object.keys(questCategories), 10);
    const randomThemes = getRandomSubset(Object.keys(questThemes), 10);
    // --- END OF NEW LOGIC ---


    // Create structured prompt for Gemini with the RANDOMIZED quest template data
    const questPrompt = `
QUEST GENERATION SYSTEM - Generate a detailed, immersive quest for an RPG

PLAYER CONTEXT:
- Name: ${player.name}
- Class: ${player.class}
- Level: ${player.level}
- Current Location: ${player.currentLocation}
- Gold: ${player.gold}
- Player Party: ${partyManager ? partyManager.getPartyNames().join(', ') : 'None'}
- Recent Activities: ${conversationContext.slice(-500)}

QUEST TEMPLATE DATA:
- Category: ${questData.category}
- Theme: ${questData.theme}  
- Difficulty: ${questData.difficulty}
- Base Title: ${questData.title}
- Base Objective: ${questData.objective}
- Suggested Location: ${questData.location}
- Quest Giver: ${questData.questGiver}

QUEST CATEGORIES REFERENCE (Random Sample):
${JSON.stringify(randomCategories, null, 2)}

QUEST THEMES REFERENCE (Random Sample):
${JSON.stringify(randomThemes, null, 2)}

WORLD CONTEXT:
- Current NPCs in area: ${getNPCsInLocation(player.currentLocation).map(npc => npc.name).join(', ') || 'None'}
- Player relationships: ${Object.keys(player.relationships || {}).slice(0, 3).join(', ') || 'None established'}

INSTRUCTIONS:
Create a rich, detailed quest that fits the template data but with enhanced narrative depth.
Respond with ONLY valid JSON in the specified format.

1. Have a compelling title that fits the theme
2. Include vivid, immersive description (2-3 sentences)
3. Clear, specific objective that matches the category
4. Interesting complications or plot twists
5. Rewards appropriate to difficulty and player level
6. Consider the player's recent activities and location

Respond with ONLY valid JSON in this exact format:
{
    "title": "Quest Title Here",
    "description": "Rich, immersive description of the quest situation and background",
    "objective": "Clear, specific objective the player must complete",
    "category": "${questData.category}",
    "theme": "${questData.theme}",
    "difficulty": "${questData.difficulty}",
    "location": "Specific location name",
    "questGiver": "Name and brief description of quest giver",
    "rewards": {
        "gold": ${questData.rewards.gold},
        "experience": ${questData.rewards.experience},
        "items": ${JSON.stringify(questData.rewards.items)}
    },
    "requirements": ${JSON.stringify(questData.requirements)},
    "estimatedTime": "${questData.estimatedTime}",
    "complications": "Optional complication or plot twist",
    "questType": "main/side/urgent",
    "moralAlignment": "good/neutral/evil/ambiguous",
    "consequencesOfFailure": "What happens if the quest fails",
    "hiddenSecrets": "Optional hidden elements or revelations"
}

Make the quest feel personal and relevant to ${player.name}'s journey. Use the conversation context to reference recent events or encounters if appropriate.
`;

    try {
        // The response from callGeminiAPI is now guaranteed to be a clean JSON string (if JSON was present)
        const jsonResponse = await callGeminiAPI(questPrompt, 0.7, 8192, false);

        if (!jsonResponse || !jsonResponse.startsWith('{')) {
            throw new Error("No valid JSON was returned from the API.");
        }

        // Now you can parse directly, no more complex regex needed.
        const geminiQuest = JSON.parse(jsonResponse);

        // Enhance with additional data and validation
        const enhancedQuest = {
            id: Date.now().toString(),
            title: geminiQuest.title || questData.title,
            description: geminiQuest.description || questData.description,
            objective: geminiQuest.objective || questData.objective,
            category: geminiQuest.category || questData.category,
            theme: geminiQuest.theme || questData.theme,
            difficulty: geminiQuest.difficulty || questData.difficulty,
            location: geminiQuest.location || questData.location,
            questGiver: geminiQuest.questGiver || questData.questGiver,
            rewards: {
                gold: Math.max(0, parseInt(geminiQuest.rewards?.gold) || questData.rewards.gold),
                experience: Math.max(0, parseInt(geminiQuest.rewards?.experience) || questData.rewards.experience),
                items: Array.isArray(geminiQuest.rewards?.items) ? geminiQuest.rewards.items : questData.rewards.items
            },
            requirements: Array.isArray(geminiQuest.requirements) ? geminiQuest.requirements : questData.requirements,
            estimatedTime: geminiQuest.estimatedTime || questData.estimatedTime,
            complications: geminiQuest.complications || questData.complications,
            questType: geminiQuest.questType || 'side',
            moralAlignment: geminiQuest.moralAlignment || 'neutral',
            consequencesOfFailure: geminiQuest.consequencesOfFailure || null,
            hiddenSecrets: geminiQuest.hiddenSecrets || null,
            completed: false,
            dateCreated: new Date().toLocaleDateString()
        };

        console.log('Generated Gemini quest:', enhancedQuest);

        // Add to conversation history for future context
        addToConversationHistory('assistant', `New quest generated: ${enhancedQuest.title} - ${enhancedQuest.description}`);

        return enhancedQuest;

    } catch (error) {
        console.error("Error generating Gemini quest:", error);
        // Fallback to original quest system if Gemini fails
        console.log("Falling back to template-based quest generation");
        return {
            ...questData,
            id: Date.now().toString(),
            completed: false,
            dateCreated: new Date().toLocaleDateString()
        };
    }
}

// Function to display character progression details.
function displayLevelUpRewards(progression, oldLevel) {
    const newLevel = progression.level;
    const levelData = classProgression[progression.class].levels[newLevel];

    if (levelData) {
        if (levelData.features.length > 0) {
            displayMessage(`New Features: ${levelData.features.join(', ')}`, 'success');
        }
        if (levelData.abilities.length > 0) {
            displayMessage(`New Abilities: ${levelData.abilities.join(', ')}`, 'success');
        }
        if (levelData.spells.length > 0) {
            displayMessage(`New Spells Available: ${levelData.spells.join(', ')}`, 'success');
        }
        if (levelData.cantrips.length > 0) {
            displayMessage(`New Cantrips: ${levelData.cantrips.join(', ')}`, 'success');
        }
        if (levelData.feats.length > 0) {
            displayMessage(`New Feats: ${levelData.feats.join(', ')}`, 'success');
        }
    }
}
// Update quest button text based on available quests
function updateQuestButton() {
    const questBtn = document.getElementById('new-quest-btn');
    if (!questBtn || !player.quests) return;

    const activeQuests = player.quests.filter(q => !q.completed);
    const completedQuests = player.quests.filter(q => q.completed);

    if (activeQuests.length > 0) {
        questBtn.innerHTML = `<i class="gi gi-scroll-unfurled mr-2"></i>Quests (${activeQuests.length})`;
        questBtn.title = `${activeQuests.length} active quest(s), ${completedQuests.length} completed`;
    } else if (completedQuests.length > 0) {
        questBtn.innerHTML = `<i class="gi gi-scroll-unfurled mr-2"></i>Quest Log`;
        questBtn.title = `${completedQuests.length} completed quest(s)`;
    } else {
        questBtn.innerHTML = `<i class="gi gi-scroll-unfurled mr-2"></i>New Quest`;
        questBtn.title = 'Generate a new quest';
    }
}

// Pagination state for quests and inventory
let questPagination = {
    completedQuestsPage: 0,
    itemsPerPage: 5
};

let inventoryPagination = {
    currentPage: 0,
    itemsPerPage: 5
};

// Display quests interface with pagination
// Function to strip all rich text formatting from quest text
function stripRichTextFormatting(text) {
    if (!text || typeof text !== 'string') return '';

    return text
        // Remove double brace effects first: {{effect:text}}
        .replace(/\{\{[\w-]+:([^}]+)\}\}/g, '$1')
        // Remove single brace color/style formatting: {color:text}, {style:text}
        .replace(/\{[\w_-]+:([^}]+)\}/g, '$1')
        // Remove single word formatting: {word}
        .replace(/\{[\w_-]+\}/g, '')
        // Remove font formatting: [font:text]
        .replace(/\[[\w-]+:([^\]]+)\]/g, '$1')
        // Remove markdown bold: **text**
        .replace(/\*\*(.*?)\*\*/g, '$1')
        // Remove markdown italic: *text*
        .replace(/\*(.*?)\*/g, '$1')
        // Remove markdown underline: __text__
        .replace(/__(.*?)__/g, '$1')
        // Remove markdown strikethrough: ~~text~~
        .replace(/~~(.*?)~~/g, '$1')
        // Remove any remaining curly braces and their content if malformed
        .replace(/\{[^}]*\}/g, '')
        // Remove any remaining square brackets and their content if malformed
        .replace(/\[[^\]]*\]/g, '')
        // Clean up extra whitespace
        .replace(/\s+/g, ' ')
        .trim();
}

// Comprehensive function to strip ALL rich text formatting patterns
function stripAllRichTextFormatting(text) {
    if (!text || typeof text !== 'string') return '';

    return text
        // Remove double brace effects: {{effect:text}}
        .replace(/\{\{[\w-]+:([^}]+)\}\}/g, '$1')
        // Remove single brace color/style formatting: {color:text}, {style:text}
        .replace(/\{[\w_-]+:([^}]+)\}/g, '$1')
        // Remove single word formatting: {word}
        .replace(/\{[\w_-]+\}/g, '')
        // Remove font formatting: [font:text]
        .replace(/\[[\w-]+:([^\]]+)\]/g, '$1')
        // Remove markdown bold: **text**
        .replace(/\*\*(.*?)\*\*/g, '$1')
        // Remove markdown italic: *text* (but not if part of **text**)
        .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '$1')
        // Remove markdown underline: __text__
        .replace(/__(.*?)__/g, '$1')
        // Remove markdown strikethrough: ~~text~~
        .replace(/~~(.*?)~~/g, '$1')
        // Remove any remaining curly braces and their content (more aggressive)
        .replace(/\{[^}]*\}/g, '')
        // Remove any remaining square brackets and their content (more aggressive)
        .replace(/\[[^\]]*\]/g, '')
        // Remove HTML-like rich text spans that might have been processed
        .replace(/<span[^>]*class="rt-[^"]*"[^>]*>([^<]*)<\/span>/g, '$1')
        // Remove any remaining HTML span tags
        .replace(/<span[^>]*>([^<]*)<\/span>/g, '$1')
        // Clean up extra whitespace and multiple spaces
        .replace(/\s+/g, ' ')
        .trim();
}

function displayQuests() {
    // Hide other interfaces
    const interfacesToHide = ['combat-interface', 'shop-interface', 'inventory-interface', 'skills-interface', 'background-interface', 'progression-interface'];
    interfacesToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
    });

    const questInterface = document.getElementById('quest-interface');
    if (questInterface) {
        questInterface.classList.remove('hidden');
    }

    const questListDisplay = document.getElementById('quest-list');
    if (!questListDisplay) return;

    let questHTML = '';

    if (!player.quests || player.quests.length === 0) {
        questHTML = `
            <div class="text-center py-8">
                <p class="text-gray-600 mb-4">No quests available yet.</p>
                <button onclick="generateQuest()" class="btn-parchment">
                    <i class="gi gi-scroll-unfurled mr-2"></i>Generate New Quest
                </button>
            </div>
        `;
    } else {
        const activeQuests = player.quests.filter(q => !q.completed);
        const completedQuests = player.quests.filter(q => q.completed);

        if (activeQuests.length > 0) {
            questHTML += `
                <div class="mb-6">
                    <h5 class="text-xl font-bold mb-3 text-yellow-600">Active Quests (${activeQuests.length})</h5>
                    <div class="grid grid-cols-1 gap-4">
            `;

            activeQuests.forEach((quest, index) => {
                // Clean quest text by removing all rich text formatting
                const cleanTitle = stripRichTextFormatting(quest.title);
                const cleanDescription = stripRichTextFormatting(quest.description);
                const cleanObjective = stripRichTextFormatting(quest.objective);
                const cleanLocation = stripRichTextFormatting(quest.location);
                const cleanQuestGiver = stripRichTextFormatting(quest.questGiver);

                questHTML += `
                    <div class="parchment-box p-4">
                        <div class="flex justify-between items-start mb-2">
                            <h6 class="font-bold text-lg">${cleanTitle}</h6>
                            <div class="flex items-center gap-2">
                                <span class="text-xs px-2 py-1 rounded bg-yellow-200 text-yellow-800">${quest.difficulty || 'Medium'}</span>
                                <button onclick="abandonQuest('${quest.id}')" class="btn-parchment text-xs py-1 px-2 bg-red-600 hover:bg-red-700 text-white" title="Abandon this quest">
                                    <i class="gi gi-cancel mr-1"></i>Abandon
                                </button>
                            </div>
                        </div>
                        <p class="text-sm text-amber-700 mb-2">${cleanDescription}</p>
                        <p class="text-xs text-blue-600 mb-2"><strong>Objective:</strong> ${cleanObjective || cleanDescription}</p>
                        ${cleanLocation ? `<p class="text-xs text-green-600 mb-2"><strong>Location:</strong> ${cleanLocation}</p>` : ''}
                        ${cleanQuestGiver ? `<p class="text-xs text-purple-600 mb-2"><strong>Quest Giver:</strong> ${cleanQuestGiver}</p>` : ''}
                        <div class="flex justify-between items-center mt-3">
                            <div class="text-xs text-gray-600">
                                Rewards: ${quest.rewards?.gold || 50} gold, ${quest.rewards?.experience || 25} XP
                                ${quest.rewards?.items?.length > 0 ? `, ${quest.rewards.items.map(item => stripRichTextFormatting(item)).join(', ')}` : ''}
                            </div>
                        </div></div>
                    </div>
                `;
            });

            questHTML += `
                    </div>
                </div>
            `;
        }

        if (completedQuests.length > 0) {
            const startIndex = questPagination.completedQuestsPage * questPagination.itemsPerPage;
            const endIndex = Math.min(startIndex + questPagination.itemsPerPage, completedQuests.length);
            const paginatedQuests = completedQuests.slice(startIndex, endIndex);
            const totalPages = Math.ceil(completedQuests.length / questPagination.itemsPerPage);

            questHTML += `
                <div class="mb-6">
                    <div class="flex justify-between items-center mb-3">
                        <h5 class="text-xl font-bold text-green-600">Completed Quests (${completedQuests.length})</h5>
                        ${totalPages > 1 ? `<span class="text-sm text-gray-600">Page ${questPagination.completedQuestsPage + 1} of ${totalPages}</span>` : ''}
                    </div>
                    <div class="grid grid-cols-1 gap-3">
            `;

            paginatedQuests.forEach(quest => {
                // Clean quest text by removing all rich text formatting
                const cleanTitle = stripRichTextFormatting(quest.title);
                const cleanDescription = stripRichTextFormatting(quest.description);

                questHTML += `
                    <div class="parchment-box p-3 bg-green-50">
                        <div class="flex justify-between items-center">
                            <h6 class="font-bold">${cleanTitle}</h6>
                            <span class="text-xs px-2 py-1 rounded bg-green-200 text-green-800">✓ Completed</span>
                        </div>
                        <p class="text-sm text-gray-600 mt-1">${cleanDescription}</p>
                        <p class="text-xs text-gray-500 mt-1">Completed: ${quest.dateCompleted || 'Recently'}</p>
                    </div>
                `;
            });

            questHTML += `
                    </div>
            `;

            // Add pagination controls for completed quests
            if (totalPages > 1) {
                questHTML += `
                    <div class="flex justify-center items-center gap-2 mt-4">
                        <button onclick="changeCompletedQuestsPage(-1)" 
                                class="btn-parchment text-xs py-1 px-2 ${questPagination.completedQuestsPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
                                ${questPagination.completedQuestsPage === 0 ? 'disabled' : ''}>
                            Previous
                        </button>
                        <span class="text-sm text-gray-600 mx-2">
                            ${questPagination.completedQuestsPage + 1} / ${totalPages}
                        </span>
                        <button onclick="changeCompletedQuestsPage(1)" 
                                class="btn-parchment text-xs py-1 px-2 ${questPagination.completedQuestsPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}"
                                ${questPagination.completedQuestsPage >= totalPages - 1 ? 'disabled' : ''}>
                            Next
                        </button>
                    </div>
                `;
            }

            questHTML += `
                </div>
            `;
        }

        // Add generate new quest button
        questHTML += `
            <div class="text-center">
                <button id="generate-quest-btn" class="btn-parchment bg-blue-600 hover:bg-blue-700">
                    <i class="gi gi-scroll-unfurled mr-2"></i>Generate New Quest
                </button>
            </div>
        `;
    }

    questListDisplay.innerHTML = questHTML;

    // Add event listener for generate quest button
    const generateQuestBtn = document.getElementById('generate-quest-btn');
    if (generateQuestBtn) {
        generateQuestBtn.addEventListener('click', () => {
            generateQuest();
        });
    }
}

function displayCharacterProgression() {
    if (!player.classProgression) {
        displayMessage("Character progression not available.", 'error');
        return;
    }

    skillsInterface.classList.add('hidden');
    inventoryInterface.classList.add('hidden');
    shopInterface.classList.add('hidden');
    questInterface.classList.add('hidden');
    backgroundInterface.classList.add('hidden');

    // Use the existing progression interface from HTML
    const progressionInterface = document.getElementById('progression-interface');
    if (!progressionInterface) {
        displayMessage("Error: Could not find progression interface element.", 'error');
        return;
    }

    progressionInterface.classList.remove('hidden');

    const progression = CharacterManager.getCharacterProgression(player);
    const progressionContent = document.getElementById('progression-content');

    if (!progressionContent) {
        displayMessage("Error: Could not find progression content element.", 'error');
        return;
    }

    progressionContent.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="parchment-box p-3">
                <h5 class="font-bold mb-2">Class Information</h5>
                <p><strong>Class:</strong> ${progression.class}</p>
                <p><strong>Level:</strong> ${progression.level}</p>
                <p><strong>Hit Die:</strong> ${progression.hitDie}</p>
                <p><strong>Primary Stats:</strong> ${progression.primaryStats.join(', ')}</p>
            </div>

            <div class="parchment-box p-3">
                <h5 class="font-bold mb-2">Experience Progress</h5>
                <p><strong>Current XP:</strong> ${player.exp}</p>
                <p><strong>XP to Next Level:</strong> ${player.expToNextLevel - player.exp}</p>
                <p><strong>Total XP Needed:</strong> ${player.expToNextLevel}</p>

                <div class="mt-3">
                    <div class="w-full bg-amber-200 rounded-full h-4 border border-amber-700">
                        <div class="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-300" 
                             style="width: ${Math.min(100, (player.exp / player.expToNextLevel) * 100)}%">
                        </div>
                    </div>
                    <p class="text-sm text-center mt-1 text-amber-800">
                        ${Math.round((player.exp / player.expToNextLevel) * 100)}% to Level ${player.level + 1}
                    </p>
                </div>
            </div>

            <div class="parchment-box p-3">
                <h5 class="font-bold mb-2">Features Unlocked</h5>
                ${progression.features.map(feature => `<p>• ${feature}</p>`).join('')}
            </div>

            <div class="parchment-box p-3">
                <h5 class="font-bold mb-2">Class Abilities</h5>
                ${progression.abilities.map(ability =>
        `<div class="mb-2">
                        <p class="font-semibold">${ability.name}</p>
                        <p class="text-sm text-amber-700">${ability.definition ? ability.definition.description : 'No description available'}</p>
                    </div>`
    ).join('')}
            </div>

            <div class="parchment-box p-3">
                <h5 class="font-bold mb-2">Feats</h5>
                ${progression.feats.map(feat =>
        `<div class="mb-2">
                        <p class="font-semibold">${feat.name}</p>
                        <p class="text-sm text-amber-700">${feat.definition ? feat.definition.description : 'No description available'}</p>
                    </div>`
    ).join('')}
            </div>

            ${progression.spells.known.length > 0 ? `
            <div class="parchment-box p-3">
                <h5 class="font-bold mb-2">Known Spells</h5>
                ${progression.spells.known.map(spell =>
        `<div class="mb-2">
                        <p class="font-semibold">${spell.name} (Level ${spell.definition ? spell.definition.level : 'Unknown'})</p>
                        <p class="text-sm text-amber-700">${spell.definition ? spell.definition.description : 'No description available'}</p>
                    </div>`
    ).join('')}
            </div>
            ` : ''}

            ${progression.cantrips.length > 0 ? `
            <div class="parchment-box p-3">
                <h5 class="font-bold mb-2">Cantrips</h5>
                ${progression.cantrips.map(cantrip =>
        `<div class="mb-2">
                        <p class="font-semibold">${cantrip.name}</p>
                        <p class="text-sm text-amber-700">${cantrip.definition ? cantrip.definition.description : 'No description available'}</p>
                    </div>`
    ).join('')}
            </div>
            ` : ''}
        </div>
    `;

    // --- ADD THIS AT THE END OF THE FUNCTION ---
    // Find the new container for the party status
    const partyStatusContainer = document.getElementById('party-manager-display');
    if (partyStatusContainer) {
        // Build the party status HTML and inject it into the container
        partyStatusContainer.innerHTML = buildPartyStatusHTML();
    }

}


function learnNewSpell(spellName) {
    const result = CharacterManager.learnSpell(player, spellName);
    displayMessage(result.message, result.success ? 'success' : 'error');
    if (result.success) {
        displayCharacterProgression(); // Refresh display
    }
}

async function pray() {
    // Initialize alignment if not present
    AlignmentSystem.initializeAlignment(player);

    const alignmentInfo = AlignmentSystem.getAlignmentDisplayInfo(player);
    const prayerEffects = alignmentInfo.modifier.prayerEffects;

    displayMessage("You offer a prayer to the gods...", 'info');

    setTimeout(() => {
        if (prayerEffects.length > 0) {
            const effect = prayerEffects[0];

            // Apply healing
            if (effect.healAmount) {
                const oldHp = player.hp;
                player.hp = Math.min(player.maxHp, player.hp + effect.healAmount);
                const actualHeal = player.hp - oldHp;
                if (actualHeal > 0) {
                    displayMessage(`${effect.name}: You recover ${actualHeal} HP!`, 'success');
                }
            }

            // Apply gold bonus (for neutral alignments)
            if (effect.goldBonus) {
                updateGold(effect.goldBonus, 'divine fortune');
                displayMessage(`Fortune smiles upon you! You found ${effect.goldBonus} gold!`, 'success');
            }

            // Apply stat bonuses temporarily
            if (effect.statBonus) {
                Object.entries(effect.statBonus).forEach(([stat, bonus]) => {
                    if (player.stats[stat] !== undefined) {
                        player.stats[stat] += bonus;
                    }
                });

                // Set timer to remove stat bonuses
                setTimeout(() => {
                    Object.entries(effect.statBonus).forEach(([stat, bonus]) => {
                        if (player.stats[stat] !== undefined) {
                            player.stats[stat] -= bonus;
                        }
                    });
                    displayMessage(`The ${effect.name.toLowerCase()} effect has worn off.`, 'info');
                    updatePlayerStatsDisplay();
                }, effect.duration * 1000);
            }

            // Apply status effects
            if (effect.effects && player.statusEffects) {
                effect.effects.forEach(statusEffect => {
                    if (!player.statusEffects) player.statusEffects = [];
                    player.statusEffects.push({
                        name: effect.name,
                        description: effect.description,
                        expiresAt: Date.now() + (effect.duration * 1000),
                        type: alignmentInfo.type.includes('evil') || alignmentInfo.type === 'malevolent' ? 'negative' : 'positive'
                    });
                });
            }

            displayMessage(effect.description, 'success');
            displayMessage(`Effect duration: ${Math.floor(effect.duration / 60)} minutes`, 'info');

            updatePlayerStatsDisplay();
        } else {
            displayMessage("The gods listen but remain silent.", 'info');
        }
    }, 1000);
}

// BGM System Functions
function initializeBGMSystem() {
    if (typeof BGMManager !== 'undefined') {
        bgmManager = new BGMManager();
        console.log('BGM Manager initialized');

        // Load BGM settings
        loadBGMSettings();
        setupBGMEventListeners();
    } else {
        console.warn('BGMManager class not found - BGM features will be limited');
    }
}

function loadBGMSettings() {
    const bgmSettings = JSON.parse(localStorage.getItem('bgmSettings') || '{"enabled": false, "volume": 50}');

    const enabledCheckbox = document.getElementById('bgm-enabled');
    const volumeSlider = document.getElementById('bgm-volume');
    const volumeDisplay = document.getElementById('bgm-volume-display');

    if (enabledCheckbox) enabledCheckbox.checked = bgmSettings.enabled;
    if (volumeSlider) volumeSlider.value = bgmSettings.volume;
    if (volumeDisplay) volumeDisplay.textContent = bgmSettings.volume + '%';

    if (bgmManager) {
        bgmManager.setVolume(bgmSettings.volume / 100);
    }
}

function saveBGMSettings() {
    const enabledCheckbox = document.getElementById('bgm-enabled');
    const volumeSlider = document.getElementById('bgm-volume');

    const settings = {
        enabled: enabledCheckbox ? enabledCheckbox.checked : false,
        volume: volumeSlider ? parseInt(volumeSlider.value) : 50
    };

    localStorage.setItem('bgmSettings', JSON.stringify(settings));
}

function setupBGMEventListeners() {
    // BGM enabled/disabled toggle
    const enabledCheckbox = document.getElementById('bgm-enabled');
    if (enabledCheckbox) {
        enabledCheckbox.addEventListener('change', () => {
            saveBGMSettings();
            updateBGMStatus();
            if (!enabledCheckbox.checked && bgmManager) {
                bgmManager.stopMusic();
            }
        });
    }

    // Volume slider
    const volumeSlider = document.getElementById('bgm-volume');
    const volumeDisplay = document.getElementById('bgm-volume-display');
    if (volumeSlider && volumeDisplay) {
        volumeSlider.addEventListener('input', () => {
            const volume = parseInt(volumeSlider.value);
            volumeDisplay.textContent = volume + '%';
            if (bgmManager) {
                bgmManager.setVolume(volume / 100);
            }
            saveBGMSettings();
        });
    }

    // Generate location music button
    const generateMusicBtn = document.getElementById('generate-location-music-btn');
    if (generateMusicBtn) {
        generateMusicBtn.addEventListener('click', async () => {
            await generateLocationMusic();
        });
    }

    // Stop music button
    const stopMusicBtn = document.getElementById('stop-music-btn');
    if (stopMusicBtn) {
        stopMusicBtn.addEventListener('click', () => {
            if (bgmManager) {
                bgmManager.stopMusic();
                updateBGMStatus();
                displayMessage("Background music stopped.", 'info');
            }
        });
    }
}

async function generateLocationMusic() {
    if (!bgmManager) {
        displayMessage("BGM system not available.", 'error');
        return;
    }

    const enabledCheckbox = document.getElementById('bgm-enabled');
    if (!enabledCheckbox || !enabledCheckbox.checked) {
        displayMessage("Please enable BGM first.", 'error');
        return;
    }

    if (!player || !player.currentLocation) {
        displayMessage("No valid location for music generation.", 'error');
        return;
    }

    try {
        displayMessage("🎵 Generating background music for " + player.currentLocation + "...", 'info');

        const gameState = {
            inCombat: !!player.currentEnemy,
            hasParty: partyManager ? partyManager.party.length > 0 : false,
            questActive: player.quests ? player.quests.some(q => !q.completed) : false,
            recentEvents: []
        };

        const musicData = await bgmManager.generateLocationMusic(player, gameState);

        if (musicData) {
            await bgmManager.playMusic(musicData);
            updateBGMStatus();
            displayMessage("🎶 Background music generated and ready!", 'success');
        } else {
            displayMessage("Failed to generate background music.", 'error');
        }
    } catch (error) {
        console.error('Error generating location music:', error);
        displayMessage("Error generating background music: " + error.message, 'error');
    }
}

function updateBGMStatus() {
    const statusElement = document.getElementById('bgm-status');
    if (!statusElement || !bgmManager) return;

    const status = bgmManager.getStatus();
    const enabledCheckbox = document.getElementById('bgm-enabled');
    const isEnabled = enabledCheckbox ? enabledCheckbox.checked : false;

    if (!isEnabled) {
        statusElement.textContent = "BGM: Disabled";
        statusElement.className = "text-xs text-gray-500 text-center";
    } else if (status.isPlaying) {
        statusElement.textContent = `BGM: Playing (${status.location || 'Unknown'})`;
        statusElement.className = "text-xs text-green-600 text-center";
    } else {
        statusElement.textContent = "BGM: Ready";
        statusElement.className = "text-xs text-amber-600 text-center";
    }
}

// Auto-generate music when location changes
async function handleLocationMusicUpdate() {
    if (!bgmManager) return;

    const enabledCheckbox = document.getElementById('bgm-enabled');
    if (!enabledCheckbox || !enabledCheckbox.checked) return;

    if (player && player.currentLocation) {
        const gameState = {
            inCombat: !!player.currentEnemy,
            hasParty: partyManager ? partyManager.party.length > 0 : false,
            questActive: player.quests ? player.quests.some(q => !q.completed) : false,
            recentEvents: []
        };

        try {
            await bgmManager.updateMusicForLocation(player, gameState);
            updateBGMStatus();
        } catch (error) {
            console.error('Error updating location music:', error);
        }
    }
}

// Modified explore function to accept 'command'
async function explore(command) { // 'command' parameter is already being passed
    displayMessage("Exploring the area...", 'info');

    // Generate potential characters they might encounter (these are *ideas* for the AI)
    const potentialNPCName1 = QuestCharacterGenerator.generateRandomCharacter();
    const potentialNPCName2 = QuestCharacterGenerator.generateMerchant();
    const potentialNPCName3 = QuestCharacterGenerator.generateInnkeeper(); // Add more variety

    const explorePrompt = `
${player.name} (${player.class}, Level ${player.level}) explores ${player.currentLocation}.
Current status: HP ${player.hp}/${player.maxHp}, Gold ${player.gold} Player Party: ${partyManager ? partyManager.getPartyNames().join(', ') : 'None'}

Potential characters in the area (for AI to choose from, or create new ones):
- ${potentialNPCName1}
- ${potentialNPCName2}
- ${potentialNPCName3}

Generate a brief exploration result that includes:
1. What they discover (location feature, item, person, or event)
2. Specific interactable elements they can engage with. If a person, use their FULL NAME.
3. Use named characters if mentioning NPCs. If you mention a person, you MUST also add their name to the INTERACTABLE.people list.
4. Keep it appropriate for their level.

IMPORTANT: If you mention any objects, creatures, or interactive elements, they should be consistently available for future interactions.
If you mention a person, the name in INTERACTABLE.people MUST match the name in DISCOVERY EXACTLY.

Respond with ONLY valid JSON in this exact format:
{
    "discovery": "What they find",
    "interactable": {
        "people": ["Full Name of NPC 1", "Full Name of NPC 2"],
        "objects": ["Object 1", "Object 2", "Object 3"]
    }
}

Example:
{
    "discovery": "You discover a moss-covered altar with strange runes, and a small wooden box sits in a hidden compartment. A concerned-looking Master Theron Steelbeard is pacing near the fountain. A curious squirrel watches from a nearby tree.",
    "interactable": {
        "people": ["Master Theron Steelbeard"],
        "objects": ["altar", "wooden box", "runes", "squirrel"]
    }
}
`;

    const explorationResult = await callGeminiAPI(explorePrompt, 0.7, 1048, false); // Increased tokens slightly for structured JSON

    if (explorationResult) {
        let parsedResult;
        try {
            // Attempt to parse the AI's structured JSON response
            const cleanResponse = explorationResult.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                parsedResult = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error("No valid JSON structure found in AI response for explore.");
            }

            // Basic validation of parsed structure
            if (!parsedResult.discovery || !parsedResult.interactable ||
                !Array.isArray(parsedResult.interactable.people) || !Array.isArray(parsedResult.interactable.objects)) {
                throw new Error("Invalid structure for 'interactable' object in AI response.");
            }

        } catch (parseError) {
            console.error("Explore: Failed to parse structured JSON from AI. Falling back to simple parsing. Error:", parseError, "Raw response:", explorationResult);
            // Fallback to old, less reliable parsing if AI doesn't give perfect JSON
            const discoveryMatch = explorationResult.match(/DISCOVERY:\s*(.+?)(?=\nINTERACTABLE:|$)/s);
            const interactableMatch = explorationResult.match(/INTERACTABLE:\s*(.+?)$/s);
            const discoveryText = discoveryMatch ? discoveryMatch[1].trim() : explorationResult;
            const interactablesFlat = interactableMatch ? interactableMatch[1].split(',').map(s => s.trim()) : [];

            parsedResult = {
                discovery: discoveryText,
                interactable: {
                    people: interactablesFlat.filter(e => e.match(/^[A-Z]/) || e.includes(' ')), // Simple heuristic for people
                    objects: interactablesFlat.filter(e => !(e.match(/^[A-Z]/) || e.includes(' '))) // Everything else is object
                }
            };
            displayMessage("Warning: AI returned unexpected format for 'explore'. Using fallback interpretation.", "error");
        }

        displayMessage(parsedResult.discovery, 'exploration');

        const playerRelationshipsCopy = { ...player.relationships };
        let interactablesForDisplay = []; // To store lowercase for display

        // --- Process PEOPLE (NPCs) ---
        for (const npcNameRaw of parsedResult.interactable.people) {
            interactablesForDisplay.push(npcNameRaw.toLowerCase()); // Add lowercase for display list

            console.log(`Explore: Processing potential NPC: "${npcNameRaw}"`);

            // Resolve NPC identity to get canonical name and description
            const identity = await RelationshipMiddleware.resolveNpcIdentity(npcNameRaw, playerRelationshipsCopy, command, parsedResult.discovery);
            console.log(`Explore: Resolved identity for "${npcNameRaw}": canonicalName="${identity.canonicalName}"`);

            // Check if the NPC is already explicitly in gameWorld.npcs for the current location
            const existingNPCsInLocation = getNPCsInLocation(player.currentLocation);
            const npcAlreadyInLocation = existingNPCsInLocation.some(npc => npc.name === identity.canonicalName);

            if (!npcAlreadyInLocation) {
                const newNPC = createNPC(identity.canonicalName, identity.description, player.currentLocation);
                saveNPCToLocation(newNPC, player.currentLocation);
                console.log(`Explore: Created and saved new NPC to gameWorld.npcs: "${newNPC.name}" at "${newNPC.location}".`);
            } else {
                console.log(`Explore: NPC "${identity.canonicalName}" already exists in gameWorld.npcs for this location.`);
                const existingNpcRef = existingNPCsInLocation.find(npc => npc.name === identity.canonicalName);
                if (existingNpcRef && identity.description && existingNpcRef.description !== identity.description) {
                    existingNpcRef.description = identity.description;
                    console.log(`Explore: Updated description for existing NPC "${existingNpcRef.name}".`);
                }
            }

            // Ensure a relationship entry exists for this NPC in player.relationships
            updateRelationship(identity.canonicalName, 0, 0, identity.description, true); // No trust change, just ensure presence
            console.log(`Explore: Ensured relationship for "${identity.canonicalName}" in player.relationships.`);
        }

        // --- Process OBJECTS ---
        for (const objectNameRaw of parsedResult.interactable.objects) {
            interactablesForDisplay.push(objectNameRaw.toLowerCase()); // Add lowercase for display list
            // For objects, we do NOT create relationships. They are just listed as interactable.
            console.log(`Explore: Identified interactable object: "${objectNameRaw}"`);
        }

        // --- END NEW LOGIC ---

        addExplorationContext(parsedResult.discovery, interactablesForDisplay); // Store lowercase for context string
        addToConversationHistory('assistant', parsedResult.discovery);

        if (interactablesForDisplay.length > 0) {
            displayMessage(`You can interact with: ${interactablesForDisplay.join(', ')}`, 'info');
        }
    } else {
        displayMessage("The area seems quiet. You don't find anything of interest.", 'info');
    }
}

// The handleSpecificNPCInteraction function should be defined as below (already provided in the previous fix):
async function handleSpecificNPCInteraction(npcNameInput) {
    displayMessage(`You try to talk to ${npcNameInput}...`, 'info');

    const existingNPCs = getNPCsInLocation(player.currentLocation);
    console.log(`handleSpecificNPCInteraction: Searching for "${npcNameInput}" in current location's NPCs:`, existingNPCs.map(n => n.name));

    const targetNPC = existingNPCs.find(npc => npc.name.toLowerCase() === npcNameInput.toLowerCase());

    if (targetNPC) {
        console.log(`handleSpecificNPCInteraction: Found NPC: "${targetNPC.name}"`);
        const prompt = `The player, ${player.name}, talks to ${targetNPC.name} in ${player.currentLocation}. What is the NPC's response to being approached?`;
        const response = await callGeminiAPI(prompt, 0.7, 250, true);

        if (response) {
            displayMessage(response);
            addToConversationHistory('assistant', response);
            updateRelationship(targetNPC.name, 0, 5, targetNPC.description, true);
        } else {
            displayMessage(`${targetNPC.name} doesn't seem to have much to say right now.`, 'info');
        }
    } else {
        console.log(`handleSpecificNPCInteraction: NPC "${npcNameInput}" not found in gameWorld.npcs for this location.`);
        displayMessage(`You look around, but you don't see anyone named "${npcNameInput}" here.`, 'error');
    }
}

window.handleSpecificNPCInteraction = handleSpecificNPCInteraction;

async function showShop() {
    // Ensure shopInterface exists and is correctly defined globally (e.g., const shopInterface = document.getElementById('shop-interface');)
    // If 'shopInterface' is not defined as a global 'const' at the top of your script.js, you might need to add:
    // const shopInterface = document.getElementById('shop-interface');
    if (!shopInterface) {
        displayMessage("Error: The main shop interface (ID 'shop-interface') was not found in the HTML. Cannot open shop.", "error");
        console.error("Shop interface element with ID 'shop-interface' not found or is null.");
        return; // Exit the function if the main shop container is missing
    }

    // Hide other interfaces
    const interfaces = ['inventory-interface', 'skills-interface', 'quest-interface', 'background-interface', 'progression-interface'];
    interfaces.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
    });

    shopInterface.classList.remove('hidden'); // Make the shop visible

    const shopItems = shopInterface.querySelector('#shop-items'); // Correct variable name as per your code
    if (!shopItems) {
        displayMessage("Error: The shop items display area (ID 'shop-items') was not found within the shop interface. Cannot display shop items.", "error");
        console.error("Shop items display element with ID 'shop-items' not found within shop interface.");
        return; // Exit the function if the items display area is missing
    }

    // --- Display Loading Message ---
    shopItems.innerHTML = `
        <div style="margin: auto; padding: 50px; color: #D2B48C; font-size: 1.5em; font-weight: bold;">
            <span class="loading-dots">Loading Shop Items</span>
        </div>
    `;
    // --- End Display Loading Message ---

    // Generate a merchant name for this shop visit
    const merchantName = QuestCharacterGenerator.generateMerchant();
    const shopHeader = shopInterface.querySelector('h4'); // Assuming shopHeader is defined here or globally
    if (shopHeader) {
        shopHeader.textContent = `${merchantName}'s Shop`;
    } else {
        console.warn("Shop header (h4) element not found within shop interface.");
    }

    const itemCount = 15 + Math.floor(Math.random() * 6); // 15-20 items
    let shopInventory = [];
    let generatedItemNames = []; // NEW: Array to store names generated in this session

    // Helper function for delay (ensure this is defined globally, e.g., at the top of script.js, if not already)
    // For example:
    /*
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    */

    // --- MODIFIED LOOP FOR SEQUENTIAL GENERATION WITH CONTEXT ---
    // This loop replaces your previous Promise.all() block.
    for (let i = 0; i < itemCount; i++) {
        const context = {
            locationContext: player.currentLocation,
            playerLevel: player.level,
            playerClass: player.class,
            // NEW: Pass the names generated SO FAR in this session
            previouslyGeneratedNames: generatedItemNames.slice(-10) // Pass last 10 names to keep context manageable for AI
        };

        // Apply a delay before generating each item to respect API rate limits
        await delay(200); // Fixed delay of 500ms between each item's AI call

        try {
            const item = await ItemGenerator.generateItem(context);
            if (item) {
                shopInventory.push(item);
                if (item.name) {
                    generatedItemNames.push(item.name); // Add successfully generated name to list for next iteration
                }
            }
        } catch (error) {
            console.error(`Error generating item ${i + 1} (falling back to generic item):`, error);
            displayMessage(`A shop item failed to generate. Replacing with a generic item.`, "error");
            // Fallback for this specific item if AI generation fails
            const fallbackItem = ItemGenerator.generateGenericItem(
                ItemGenerator.getRandomCategory(), ItemGenerator.getRandomRarityKey()
            );
            shopInventory.push(fallbackItem);
            if (fallbackItem.name) {
                generatedItemNames.push(fallbackItem.name); // Add fallback item name to context
            }
        }
    }
    // --- END MODIFIED LOOP ---

    // --- Clear Loading Message (in the finally block to ensure it's always cleared) ---
    shopItems.innerHTML = ''; // Clear the loading message before populating with items
    // --- End Clear Loading Message ---

    // Sort items by rarity and value for better shop organization
    shopInventory.sort((a, b) => {
        const rarityOrder = { 'COMMON': 1, 'UNCOMMON': 2, 'RARE': 3, 'EPIC': 4, 'LEGENDARY': 5, 'ARTIFACT': 6, 'MYTHIC': 7 };
        const aRarity = rarityOrder[a.rarity] || 1;
        const bRarity = rarityOrder[b.rarity] || 1;
        if (aRarity !== bRarity) return aRarity - bRarity;
        return (a.value || 0) - (b.value || 0);
    });

    shopInventory.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('shop-item', 'parchment-box', 'p-3', 'mb-3');
        itemDiv.style.border = '2px solid #2d1810'; // Dark border
        itemDiv.style.borderRadius = '8px';

        const canAfford = player.gold >= item.value;
        const affordabilityClass = canAfford ? 'text-green-600' : 'text-red-600';
        const buttonDisabled = canAfford ? '' : 'disabled';
        const buttonClass = canAfford ? 'btn-parchment' : 'btn-parchment opacity-50 cursor-not-allowed';

        itemDiv.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <h6 class="font-bold text-lg">${item.name}</h6>
                <span class="text-xs px-2 py-1 rounded ${getRarityColor(item.rarity)}">${item.rarity}</span>
            </div>
            <p class="text-sm text-amber-700 mb-2">${item.description}</p>

            ${item.damage ? `<p class="text-xs text-red-600">Damage: ${item.damage}</p>` : ''}
            ${item.armor ? `<p class="text-xs text-blue-600">Armor: ${item.armor}</p>` : ''}
            ${item.effect ? `<p class="text-xs text-purple-600">Effect: ${getEffectDescription(item.effect)}</p>` : ''}
            ${item.effects && item.effects.length > 0 ? `<p class="text-xs text-purple-600">Effects: ${item.effects.slice(0, 2).join(', ').replace(/_/g, ' ')}</p>` : ''}

            <div class="flex justify-between items-center mt-3">
                <span class="font-bold ${affordabilityClass}">${item.value} gold</span>
                <button class="shop-action-btn ${buttonClass} text-sm py-1 px-3" data-action="buy" data-index="${index}" ${buttonDisabled}>
                    ${canAfford ? 'Buy' : 'Too Expensive'}
                </button>
            </div>
        `;
        shopItems.appendChild(itemDiv);
    });

    // Store shop inventory globally for purchase function
    window.currentShopInventory = shopInventory;
}

async function talkToNPC(npcName) {
    displayMessage(`Attempting to talk to ${npcName}...`, 'info');
    const prompt = `The player, ${player.name}, attempts to speak with ${npcName} in ${player.currentLocation}. What is the NPC's initial response? (1-2 sentences)`;
    const response = await callGeminiAPI(prompt, 0.7, 200, true);
    if (response) {
        displayMessage(`${npcName} says: ${response}`);
    } else {
        displayMessage(`${npcName} doesn't seem interested in talking right now.`);
    }
}

// Enhanced exploration context storage
let currentExplorationContext = {
    discoveries: [],
    activeElements: [],
    lastExploration: null
};

function addExplorationContext(discovery, interactableElements = []) {
    currentExplorationContext.discoveries.push({
        discovery: discovery,
        timestamp: Date.now(),
        location: player.currentLocation
    });

    // Add interactable elements
    interactableElements.forEach(element => {
        if (!currentExplorationContext.activeElements.includes(element)) {
            currentExplorationContext.activeElements.push(element);
        }
    });

    currentExplorationContext.lastExploration = discovery;

    // Keep only last 5 discoveries
    if (currentExplorationContext.discoveries.length > 5) {
        currentExplorationContext.discoveries = currentExplorationContext.discoveries.slice(-5);
    }
}

function getExplorationContextString() {
    const playerLocation = player.currentLocation;
    const inventoryItems = player.inventory.map(item => `<span class="math-inline">\{item\.name\} \(x</span>{item.quantity})`).join(', ') || 'none';
    const equippedWeapon = player.equipment?.mainHand?.name || 'unarmed'; // ENSURE THIS LINE IS PRESENT
    const equippedArmor = CombatSystem.calculatePlayerDefense(player); // Assuming this is defined and calculates defense from equipped armor

    if (!player.relationships) {
        player.relationships = {};
    }
    const relationships = Object.values(player.relationships).map(rel => `${rel.name}: ${rel.status}`).join(', ') || 'none';

    let context = `Player is currently in ${playerLocation}. ` +
        `Player HP: <span class="math-inline">\{player\.hp\}/</span>{player.maxHp}. ` +
        `Player Gold: ${player.gold}. ` +
        `Player Inventory: ${inventoryItems}. ` +
        `Equipped Weapon: ${equippedWeapon}. `; // ENSURE THIS IS INCLUDED IN THE CONTEXT
    if (equippedArmor > 0) {
        context += `Player Armor: ${equippedArmor}. `;
    }
    context += `Player Relationships: ${relationships}. `;

    if (player.currentEnemy) {
        context += `Currently in combat with <span class="math-inline">\{player\.currentEnemy\.name\} \(</span>{player.currentEnemy.currentHp}/${player.currentEnemy.maxHp} HP). `;
    }

    return context;
}

// Auto-generate world event
async function startConversation(suggestion = null) {
    if (!suggestion) {
        displayMessage("Looking for someone to talk to...", 'info');
    }

    const existingNPCs = getNPCsInLocation(player.currentLocation);
    // If no suggestion, there's still a chance to meet an existing NPC.
    if (!suggestion && existingNPCs.length > 0 && Math.random() > 0.3) {
        const npc = existingNPCs[Math.floor(Math.random() * existingNPCs.length)];
        const npcMessage = `You see ${npc.name} again. ${npc.description}`;
        displayMessage(npcMessage);
        addToConversationHistory('assistant', npcMessage);
        gameWorld.lastNPCInteraction = npc.id;
        updateRelationship(npc.name, 0, 2, npc.description);
        return; // Exit after interacting with existing NPC
    }

    // Create a new NPC, using the suggestion from the random encounter if it exists.
    const npcName = QuestCharacterGenerator.generateRandomCharacter();

    const prompt = `
        You are a Dungeon Master creating an NPC. The player, ${player.name}, has just encountered them.
        The NPC's name is **${npcName}**. You must use this exact name.
        ${suggestion ? `The situation is: "${suggestion}".` : "Create a simple, interesting reason for them to be here."}
        Write a short, engaging description of the NPC's appearance and their first line of dialogue.
        Format: "You see ${npcName}. Appearance: [brief description]. ${npcName} says: [one line of dialogue]"
    `;

    const npcInfo = await callGeminiAPI(prompt, 0.8, 200, true);
    if (npcInfo) {
        const newNPC = createNPC(npcName, npcInfo, player.currentLocation);
        saveNPCToLocation(newNPC, player.currentLocation);
        gameWorld.lastNPCInteraction = newNPC.id;

        displayMessage(npcInfo);
        addToConversationHistory('assistant', npcInfo);
        updateRelationship(npcName, 0, 5, npcInfo, true);
    } else {
        const fallbackMessage = "You don't see anyone interesting to talk to right now.";
        displayMessage(fallbackMessage);
        addToConversationHistory('assistant', fallbackMessage);
    }

    saveConversationHistory();
}

// Generate character background using AI
async function generateCharacterBackground() {
    const name = charNameInput.value.trim();
    const charClass = charClassSelect.value;
    const gender = Array.from(charGenderRadios).find(radio => radio.checked)?.value;

    if (!name || !charClass || !gender) {
        alert("Please fill in character name, class, and gender first.");
        return;
    }

    generateBackgroundBtn.disabled = true;
    generateBackgroundBtn.textContent = "Generating...";

    const prompt = `Create a background story for ${name}, a ${gender} ${charClass} in the fantasy realm of Pedena. 
    Make it 1-2 paragraphs (4-5 sentences per paragraph), interesting, and appropriate for a fantasy RPG character. 
    Include their motivations and how they became an adventurer.

    **Keep the entire response under 350 words.** IMPORTANT: Write in plain text only. Do NOT use any rich text formatting...`;

    try {
        const background = await callGeminiAPI(prompt, 0.8, 2048, false);
        if (background) {
            // Clean any potential formatting that might slip through
            const cleanBackground = background
                .replace(/\{[^:]+:[^}]+\}/g, (match) => {
                    const content = match.match(/\{[^:]+:([^}]+)\}/);
                    return content ? content[1] : match;
                })
                .replace(/\*\*(.*?)\*\*/g, '$1')
                .replace(/\*(.*?)\*/g, '$1')
                .replace(/\[\w+:(.*?)\]/g, '$1')
                .replace(/\{\{[\w-]+:(.*?)\}\}/g, '$1');

            charBackgroundTextarea.value = cleanBackground;
        } else {
            charBackgroundTextarea.value = `${name} is a ${charClass} who seeks adventure in the realm of Pedena.`;
        }
    } catch (error) {
        console.error("Error generating background:", error);
        charBackgroundTextarea.value = `${name} is a ${charClass} who seeks adventure in the realm of Pedena.`;
    }

    generateBackgroundBtn.disabled = false;
    generateBackgroundBtn.textContent = "Generate Background";
}

// Function to remove character portrait
function removeCharacterPortrait() {
    const portraitContainer = document.getElementById('portrait-container');
    const generateBtn = document.getElementById('generate-portrait-btn');

    if (player && player.portraitUrl) {
        delete player.portraitUrl;
        console.log('✅ Portrait URL removed from player object');
    }

    if (portraitContainer) {
        portraitContainer.innerHTML = `
            <div class="text-center py-4">
                <p class="text-amber-700">No portrait generated yet.</p>
            </div>
        `;
        console.log('✅ Portrait container cleared');
    }

    if (generateBtn) {
        generateBtn.style.display = 'block';
        generateBtn.disabled = false;
        generateBtn.textContent = 'Generate Portrait';
        console.log('✅ Generate button reset');
    }

    // Also clear from background interface if it's open
    const backgroundInterface = document.getElementById('background-interface');
    if (backgroundInterface && !backgroundInterface.classList.contains('hidden')) {
        displayCharacterBackground();
    }

    displayMessage("Character portrait removed successfully.", 'success');
    updateIllustrationButtonVisibility(); // Update button visibility after removing portrait
}

// Enhanced portrait generation with better error handling and logging
async function generateCharacterPortrait() {
    console.log('🎨 Portrait generation started');

    const portraitContainer = document.getElementById('portrait-container');
    const generateBtn = document.getElementById('generate-portrait-btn');

    // Get character details from input fields OR player object
    let charName, charClass, charGender, charBackground;

    if (player && player.name) {
        // Use player data if character is already created
        charName = player.name;
        charClass = player.class;
        charGender = player.gender;
        charBackground = player.background;
    } else {
        // Use input fields during character creation
        charName = charNameInput.value.trim();
        charClass = charClassSelect.value;
        charGender = Array.from(charGenderRadios).find(radio => radio.checked)?.value;
        charBackground = charBackgroundTextarea.value.trim();
    }

    if (!portraitContainer) {
        console.error('❌ Portrait container not found');
        displayMessage("Error: Portrait container not found.", 'error');
        return;
    }

    // Validation check - do this FIRST before any other checks
    if (!charName || !charClass || !charGender) {
        alert("Please fill in character name, class, and gender before generating a portrait.");
        if (generateBtn) {
            generateBtn.disabled = false; // Re-enable button
            generateBtn.textContent = 'Generate Portrait';
        }
        return;
    }

    // Check if portrait already exists on the global player object (only after validation)
    // Only check this if player object exists and has the same name as current input
    if (player && player.portraitUrl && player.name === charName) {
        console.log('ℹ️ Portrait already exists for current player:', player.portraitUrl);
        displayMessage("A portrait has already been generated for this character.", 'info');
        // Optionally, display the existing portrait
        // portraitContainer.innerHTML = `<img src="${player.portraitUrl}" alt="Character Portrait of ${player.name}" class="character-portrait w-full h-auto rounded border-2 border-amber-700">`;
        if (generateBtn) generateBtn.style.display = 'none';
        return;
    }

    if (generateBtn) {
        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';
        console.log('🔄 Button disabled, starting generation process');
    }

    // Show loading indicator in container
    portraitContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-700 mb-2"></div>
            <p class="text-amber-700 text-sm">Generating portrait...</p>
        </div>
    `;

    try {
        console.log('🖼️ Attempting portrait generation for:', {
            name: charName,
            gender: charGender,
            class: charClass,
            background: charBackground?.substring(0, 100) + '...'
        });

        // Pass the gathered details to the image generation services
        const portraitUrl = await tryMultipleImageServices(charName, charGender, charClass, charBackground);

        if (portraitUrl) {
            console.log('✅ Portrait generated successfully:', portraitUrl);
            // Set the portraitUrl on the global player object so it can be saved by createCharacter
            player.portraitUrl = portraitUrl;

            // Create image element with better error handling
            const img = new Image();
            img.onload = function() {
                console.log('Portrait image loaded successfully');
                portraitContainer.innerHTML = `
                    <img src="${portraitUrl}"
                         alt="Character Portrait of ${charName}"
                         class="character-portrait w-full h-auto rounded border-2 border-amber-700">
                `;

                displayMessage("Character portrait generated and loaded successfully!", 'success');

                if (generateBtn) {
                    generateBtn.style.display = 'none'; // Hide button after successful generation
                }

                // Update background interface if it's open
                const backgroundInterface = document.getElementById('background-interface');
                if (backgroundInterface && !backgroundInterface.classList.contains('hidden')) {
                    displayCharacterBackground();
                }
                updateIllustrationButtonVisibility(); // Update button visibility after portrait is loaded
            };

            img.onerror = function() {
                console.error('Failed to load portrait image from:', portraitUrl);
                portraitContainer.innerHTML = `
                    <div class="text-center py-4">
                        <p class="text-red-600">Failed to load portrait image</p>
                        <p class="text-gray-600 text-xs">The image service may be unavailable</p>
                    </div>
                `;
                displayMessage("Portrait generated but failed to load. Try refreshing the page.", 'error');

                if (generateBtn) {
                    generateBtn.disabled = false;
                    generateBtn.textContent = 'Try Again';
                }
            };

            // Start loading the image
            img.src = portraitUrl;

            // Save the portrait URL
            saveGame();

        } else {
            throw new Error("All image generation services failed");
        }

    } catch (error) {
        console.error('❌ Portrait generation failed:', error);

        // Create a placeholder portrait
        const placeholderSvg = createPlaceholderPortrait();
        portraitContainer.innerHTML = `
            <div class="text-center py-4">
                ${placeholderSvg}
                <p class="text-amber-700 text-sm mt-2">Portrait generation failed</p>
                <p class="text-gray-600 text-xs">Using placeholder image</p>
            </div>
        `;

        displayMessage("Failed to generate portrait. Using placeholder image.", 'error');

        if (generateBtn) {
            generateBtn.disabled = false;
            generateBtn.textContent = 'Try Again';
        }
        updateIllustrationButtonVisibility(); // Update button visibility if portrait generation fails
    }
}

// Try multiple image generation services for better reliability
async function tryMultipleImageServices(name, gender, charClass, background) {
    const services = [
        {
            name: 'AI Novel API',
            generate: () => generateAINovelPortrait(name, gender, charClass, background) // Try AI Novel first
        },
        {
            name: 'Picsum (Placeholder)',
            generate: () => generatePicsumPortrait(name) // Fallback to Picsum
        },
        {
            name: 'SVG Portrait',
            generate: () => generateSVGPortrait(name, charClass) // Final fallback
        }
    ];

    console.log('🎨 Starting portrait generation with services:', services.map(s => s.name));

    for (const service of services) {
        try {
            console.log(`🔄 Trying ${service.name}...`);
            const result = await service.generate();
            if (result) {
                console.log(`✅ ${service.name} succeeded:`, result);
                displayMessage(`Portrait generated using ${service.name}`, 'success');
                return result;
            }
        } catch (error) {
            console.warn(`⚠️ ${service.name} failed:`, error.message);
            displayMessage(`${service.name} failed: ${error.message}`, 'error');
        }
    }

    console.error('❌ All portrait generation services failed');
    return null;
}

// Generate portrait using Picsum (reliable placeholder service)
async function generatePicsumPortrait(name) { // Accept name as parameter
    const seed = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const portraitUrl = `https://picsum.photos/seed/${seed}/300/400?random=${Date.now()}`;

    // Test if the URL is accessible
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(portraitUrl);
        img.onerror = () => reject(new Error('Picsum service unavailable'));
        img.src = portraitUrl;
    });
}

// Try the original AI Novel service
async function generateAINovelPortrait(name, gender, charClass, background) { // Accept parameters
    const prompt = `A highly detailed and fully colored fantasy art portrait of a character named ${name}.
    Gender: ${gender}.
    Class: ${charClass}.
    Appearance details based on their background: ${background}.
    The style should be a realistic fantasy portrait, with dramatic lighting, focusing on the character's face and upper body.
    The background should be atmospheric and relevant to their story.`;

    console.log('🎨 Attempting AI Novel portrait generation...');
    console.log('Full request details:', {
        url: 'https://ainovel.site/api/generate-image',
        method: 'POST',
        prompt: prompt.substring(0, 200) + '...',
        parameters: {
            imageSize: 'portrait_4_3',
            numInferenceSteps: 50,
            guidanceScale: 7.5
        }
    });

    displayMessage("Trying AI Novel image service...", 'info');

    // Generate consistent seed based on character name
    const characterSeed = name ? name.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
    }, 0) : 12345;

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 45000);

        const response = await fetch('https://ainovel.site/api/generate-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (compatible; PedenaRPG/1.0)'
            },
            body: JSON.stringify({
                prompt: prompt,
                seed: Math.abs(characterSeed),
                imageSize: 'portrait_4_3',
                numInferenceSteps: 50,
                guidanceScale: 7.5
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        console.log('AI Novel response details:', {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
            url: response.url,
            redirected: response.redirected
        });

        if (!response.ok) {
            let errorDetails = `HTTP ${response.status}: ${response.statusText}`;
            let errorBody = '';

            try {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    errorBody = JSON.stringify(errorData, null, 2);
                    console.error('AI Novel JSON error response:', errorData);
                } else {
                    errorBody = await response.text();
                    console.error('AI Novel text error response:', errorBody);
                }
            } catch (parseError) {
                console.error('Could not parse error response:', parseError);
                errorBody = 'Could not parse error response';
            }

            const detailedError = `${errorDetails}\nResponse body: ${errorBody.substring(0, 500)}`;
            console.error('Complete AI Novel error details:', detailedError);

            displayMessage(`AI Novel service failed: ${errorDetails}`, 'error');
            displayMessage(`Error details: ${errorBody.substring(0, 200)}`, 'error');

            throw new Error(detailedError);
        }

        let result;
        try {
            result = await response.json();
            console.log('AI Novel successful response:', result);
        } catch (jsonError) {
            console.error('Failed to parse AI Novel JSON response:', jsonError);
            const responseText = await response.text();
            console.error('Raw response text:', responseText.substring(0, 1000));
            displayMessage('AI Novel returned invalid JSON response', 'error');
            throw new Error(`Invalid JSON response from AI Novel: ${jsonError.message}`);
        }

        // Check for various possible image URL properties
        const possibleUrlFields = ['imageUrl', 'image_url', 'url', 'image', 'result', 'data'];
        let imageUrl = null;

        for (const field of possibleUrlFields) {
            if (result[field]) {
                imageUrl = result[field];
                console.log(`Found image URL in field '${field}':`, imageUrl);
                break;
            }
        }

        if (!imageUrl) {
            console.error('No image URL found in AI Novel response. Available fields:', Object.keys(result));
            console.error('Full response structure:', result);
            displayMessage('AI Novel did not return an image URL', 'error');
            displayMessage(`Response fields: ${Object.keys(result).join(', ')}`, 'error');
            throw new Error("AI Novel API did not return an image URL in any expected field");
        }

        // Validate the URL
        try {
            new URL(imageUrl);
        } catch (urlError) {
            console.error('Invalid URL returned by AI Novel:', imageUrl);
            displayMessage(`AI Novel returned invalid URL: ${imageUrl}`, 'error');
            throw new Error(`Invalid image URL returned: ${imageUrl}`);
        }

        console.log('✅ AI Novel generated valid image URL:', imageUrl);
        displayMessage('AI Novel image generated successfully!', 'success');

        return imageUrl;

    } catch (error) {
        if (error.name === 'AbortError') {
            const timeoutMsg = 'AI Novel service timed out after 45 seconds';
            console.error('❌ AI Novel timeout:', timeoutMsg);
            displayMessage(timeoutMsg, 'error');
            throw new Error(timeoutMsg);
        } else if (error.message.includes('Failed to fetch')) {
            const networkMsg = 'Network error connecting to AI Novel service (CORS/firewall/DNS issue)';
            console.error('❌ AI Novel network error:', networkMsg);
            displayMessage(networkMsg, 'error');
            displayMessage('This could be a CORS policy, firewall, or DNS resolution issue', 'error');
            throw new Error(networkMsg);
        } else {
            console.error('❌ AI Novel service error:', error);
            displayMessage(`AI Novel error: ${error.message}`, 'error');
            throw error;
        }
    }
}

// Generate SVG portrait as ultimate fallback
async function generateSVGPortrait(name, charClass) { // Accept parameters
    const colors = {
        warrior: '#8B4513',
        mage: '#4B0082',
        rogue: '#2F4F4F',
        ranger: '#228B22',
        psychic: '#FFD700',
        paladin: '#FF4500',
        bard: '#8A2BE2',
        cleric: '#FF6347',
        druid: '#32CD32',
        monk: '#FF8C00',
        sorcerer: '#8B008B',
        warlock: '#8B0000',
        barbarian: '#A0522D',
        brawler: '#8B4513',
        assassin: '#2F4F4F',
        hunter: '#228B22',
        shaman: '#FFD700',
        gladiator: '#FF4500',
        ninja: '#8A2BE2',
        summoner: '#FF6347',
        necromancer: '#32CD32',
        illusionist: '#FF8C00',
        engineer: '#8B008B',
        alchemist: '#8B0000',
        scholar: '#A0522D'
    };

    const color = colors[charClass.toLowerCase()] || '#8B4513'; // Use charClass
    const initial = name.charAt(0).toUpperCase(); // Use name

    const svgData = `data:image/svg+xml;base64,${btoa(`
        <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#000;stop-opacity:0.8" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg)"/>
            <circle cx="150" cy="120" r="60" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
            <text x="150" y="135" font-family="serif" font-size="48" fill="white" text-anchor="middle" font-weight="bold">${initial}</text>
            <text x="150" y="320" font-family="serif" font-size="20" fill="white" text-anchor="middle">${name}</text>
            <text x="150" y="350" font-family="serif" font-size="16" fill="rgba(255,255,255,0.8)" text-anchor="middle">${charClass}</text>
            <text x="150" y="375" font-family="serif" font-size="14" fill="rgba(255,255,255,0.6)" text-anchor="middle">Level 1</text>
        </svg>
    `)}`;
    // Note: Level is hardcoded to 1 for SVG placeholder during character creation

    return svgData;
}

// Create placeholder portrait HTML
function createPlaceholderPortrait(name, charClass, level = 1) { // Accept parameters
    const colors = {
        warrior: '#8B4513',
        mage: '#4B0082',
        rogue: '#2F4F4F',
        ranger: '#228B22',
        psychic: '#FFD700',
        paladin: '#FF4500',
        bard: '#8A2BE2',
        cleric: '#FF6347',
        druid: '#32CD32',
        monk: '#FF8C00',
        sorcerer: '#8B008B',
        warlock: '#8B0000',
        barbarian: '#A0522D',
        brawler: '#8B4513',
        assassin: '#2F4F4F',
        hunter: '#228B22',
        shaman: '#FFD700',
        gladiator: '#FF4500',
        ninja: '#8A2BE2',
        summoner: '#FF6347',
        necromancer: '#32CD32',
        illusionist: '#FF8C00',
        engineer: '#8B008B',
        alchemist: '#8B0000',
        scholar: '#A0522D'
    };

    const color = colors[charClass.toLowerCase()] || '#8B4513'; // Use charClass
    const initial = name.charAt(0).toUpperCase(); // Use name

    return `
        <div class="w-full h-48 rounded border-2 border-amber-700 flex flex-col items-center justify-center text-white" 
             style="background: linear-gradient(135deg, ${color} 0%, #000 100%);">
            <div class="text-6xl font-bold mb-2">${initial}</div>
            <div class="text-lg">${name}</div>
            <div class="text-sm opacity-80">${charClass} - Level ${level}</div>
        </div>
    `;
}

function createMasterPrompt(command) {
    // This function gathers all context needed for the AI to make a comprehensive decision.
    // In script.js, inside createMasterPrompt()

    // Assumes your player and world objects have been updated to track these new states.
    // let player = { ..., statusEffects: [], reputation: { "The Royal Guard": 15 } };
    // let world = { ..., time: new Date(...), activeEvents: [] };

    const playerState = {
        name: player.name,
        class: player.class,
        alignment: player.alignment, // Good to keep this here
        level: player.level,
        hp: player.hp,
        maxHp: player.maxHp,
        location: player.currentLocation,
        statusEffects: player.statusEffects.map(e => e.name), // <-- NEW: List of active status effect names
        reputation: player.reputation, // <-- NEW: Entire reputation object
        inventory: player.inventory.slice(-10).map(i => i.name),
        equipment: player.equipment,
        activeQuests: player.quests.filter(q => !q.completed).map(q => q.title)
    };

    const worldState = {
        timeOfDay: gameWorld.time.toTimeString().split(' ')[0], // Changed 'world' to 'gameWorld'
        day: gameWorld.time.toDateString(), // Changed 'world' to 'gameWorld'
        nearbyNPCs: getNPCsInLocation(player.currentLocation).map(npc => npc.name),
        locationDescription: gameWorld.locationMemory.get(player.currentLocation) || `A place known as ${player.currentLocation}.`,
        activeWorldEvents: gameWorld.activeEvents.map(e => e.details), // Changed 'world' to 'gameWorld'
        recentConversation: getConversationContext().slice(-1000)
    };

    const prompt = `
        You are the Dungeon Master for the RPG "The Chronicles of Pedena".
        Process the player's command within the given game context and respond with a single, valid JSON object that describes all outcomes.

        PLAYER STATE:
        ${JSON.stringify(playerState, null, 2)}

        WORLD STATE:
        ${JSON.stringify(worldState, null, 2)}

        PLAYER COMMAND: "${command}"

        YOUR TASK:
        Based on the command and context, determine the narrative outcome and all resulting game state changes.

        CRITICAL RULES:
        - For commands involving giving, paying, or donating gold... (existing rule)

        // --- ADD THE FOLLOWING NEW RULE ---
        - QUESTS: If the player's command is an attempt to complete a quest (e.g., "I'm done with the quest", "complete quest"), you MUST analyze the context to identify the correct quest.
            - If the player is talking to the quest's "questGiver", assume they are turning in that specific quest.
            - If the narrative context makes it obvious which quest they mean, use that one.
            - If the correct quest is identified, you MUST return a "questProgress" object with "isComplete": true. This is mandatory for the game to work.

        JSON RESPONSE FORMAT:
        {
          "narrative": "...",
          "locationChange": "...",
          "timePassedMinutes": 30, // <-- Time Progression
          "playerStateChanges": { 
              "hp": 0, "exp": 0, "gold": 0,
              "statusEffects": { // <-- Status Effects
                  "add": [ { "name": "Drenched", "duration": 60, "description": "You are soaked, making you vulnerable to cold." } ],
                  "remove": [ "Well-Rested" ]
              }
          } or null,
          "itemChanges": { ... } or null,
          "alignmentChange": { ... } or null,
          "factionReputationChange": [ // <-- Faction System
              { "faction": "Theives' Guild", "change": -10, "reason": "Sided with the city guard." },
              { "faction": "Royal Guard", "change": 5, "reason": "Helped capture a thief." }
          ] or null,
          "relationshipChanges": [ ... ] or null,
           "questProgress": {
            "questTitle": "The Full Name of the Quest",
            "update": "A description of the progress.",
            "isComplete": true
          } or null,
          "worldEvents": [ // <-- World Events
              { "event": "dragon_sighting", "location": "Dragon's Peak", "details": "Rumors spread of a red dragon seen near Dragon's Peak." }
          ] or null,
          "combatState": { ... } or null
        }

        RULES:
        - The "narrative" is mandatory and should describe the events.
        - Only include other keys if a change occurs (e.g., if no items are added/removed, "itemChanges" should be null).
        - Be creative and ensure the response is consistent with the provided context.
    `;
    return prompt;
}

// In script.js - A new, improved executeCustomCommand

async function executeCustomCommand(command) {
    if (!command.trim()) return;

    addToConversationHistory('user', command);

    // --- NEW: Command pre-processing for specific actions ---
    const lowerCommand = command.toLowerCase().trim();
    
    // Item enhancement keywords
    const enhanceKeywords = ['enhance', 'upgrade', 'improve', 'enchant', 'reinforce', 'strengthen', 'empower'];
    
    const recruitKeywords = ['recruit', 'hire', 'ask to join', 'bring along'];

    // Check for item enhancement command
    for (const keyword of enhanceKeywords) {
        if (lowerCommand.includes(keyword)) {
            const result = await handleItemEnhancement(command, lowerCommand);
            if (result.handled) {
                return;
            }
        }
    }

    // Check for recruitment command
    for (const keyword of recruitKeywords) {
        if (lowerCommand.startsWith(keyword + ' ')) {
            const npcName = command.substring(keyword.length + 1).trim();
            if (npcName) {
                console.log(`Intercepted recruitment command for: ${npcName}`);
                // Use the dedicated recruit function which handles party state.
                // This function will display its own system messages like "Jasper has joined your party!"
                await recruitNPC(npcName);

                // The narrative from your screenshot will now be generated here, based on the successful action.
                const narrativePrompt = `The player, ${player.name}, just tried to recruit an NPC named ${npcName}. The recruitment was successful. Write a short, engaging narrative describing how ${npcName} agrees to join the party.`;
                const narrative = await callGeminiAPI(narrativePrompt, 0.7, 300, true);
                if (narrative) {
                    displayMessage(narrative);
                    addToConversationHistory('assistant', narrative);
                }

                // We've handled the command, so we exit here to avoid the generic master prompt.
                return;
            }
        }
    }
    // --- End of command pre-processing ---

    // If the command wasn't a recruitment, proceed with the master prompt as before.
    const masterPrompt = createMasterPrompt(command);

    try {
        const aiResponse = await callGeminiAPI(masterPrompt, 0.7, 1500, false);
        if (!aiResponse) {
            throw new Error("AI response was empty.");
        }

        let parsedResult = null;
        try {
            const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                parsedResult = JSON.parse(jsonMatch[0]);
            }
        } catch (e) {
            console.warn("AI response contained malformed JSON. Treating as narrative.", e);
            parsedResult = null;
        }

        if (parsedResult) {
            console.log("Processing structured AI response:", parsedResult);
            await parseAndApplyStateChanges(parsedResult);
        } else {
            console.log("Processing AI response as simple narrative.");
            displayMessage(aiResponse, 'info');
            addToConversationHistory('assistant', aiResponse);

            // Check for transactions in unstructured responses
            if (window.TransactionMiddleware && typeof TransactionMiddleware.detectTransaction === 'function') {
                console.log("Checking for transactions in unstructured AI response...");
                const transactionData = await TransactionMiddleware.detectTransaction(aiResponse, command, player, getConversationContext());
                if (transactionData && transactionData.hasTransaction) {
                    console.log("Transaction detected in unstructured response:", transactionData);
                    await TransactionMiddleware.processTransaction(transactionData, player);
                }
            }
        }

    } catch (error) {
        console.error("Error processing command:", error);
        displayMessage("You attempt your action, but something goes wrong. The world seems to resist your will.", 'error');
    }

    saveGame();
}

// I'll add this new helper function to handle moving the party.
function movePartyWithPlayer(oldLocation, newLocation) {
    if (partyManager && partyManager.party.length > 0) {
        console.log(`Moving party from ${oldLocation} to ${newLocation}`);

        const oldLocationNPCs = gameWorld.npcs.get(oldLocation) || [];

        if (!gameWorld.npcs.has(newLocation)) {
            gameWorld.npcs.set(newLocation, []);
        }
        const newLocationNPCs = gameWorld.npcs.get(newLocation);

        let updatedOldLocationNPCs = [...oldLocationNPCs];

        partyManager.party.forEach(partyMember => {
            const indexInOldLocation = updatedOldLocationNPCs.findIndex(npc => npc.id === partyMember.id);
            let movedNpc;

            if (indexInOldLocation > -1) {
                // If the party member was registered as an NPC in the old location, move them.
                movedNpc = updatedOldLocationNPCs[indexInOldLocation];
                updatedOldLocationNPCs = updatedOldLocationNPCs.filter(npc => npc.id !== partyMember.id);
            } else {
                // Otherwise, use the party member object directly.
                movedNpc = partyMember;
            }

            // Update the NPC's internal location property.
            movedNpc.location = newLocation;

            // Add the NPC to the new location's list if they aren't already there.
            if (!newLocationNPCs.some(npc => npc.id === movedNpc.id)) {
                newLocationNPCs.push(movedNpc);
            }
        });

        // Update the game world's data for the old location.
        gameWorld.npcs.set(oldLocation, updatedOldLocationNPCs);
    }
}

// In script.js

// Now, I'll modify the parseAndApplyStateChanges function to use this new helper.
// I will replace the existing function with this updated version.
async function parseAndApplyStateChanges(result) {
    if (!result) {
        console.error("parseAndApplyStateChanges called with null or undefined result.");
        return;
    }

    // 1. Narrative (Always present)
    if (result.narrative) {
        displayMessage(result.narrative, 'info');
        addToConversationHistory('assistant', result.narrative);

        // Only check for transactions in narrative if there are no explicit itemChanges
        // This prevents duplicate processing when the AI provides both structured item changes and narrative transactions
        if (!result.itemChanges && window.TransactionMiddleware && typeof TransactionMiddleware.detectTransaction === 'function') {
            console.log("Checking for transactions in structured AI response narrative...");
            const transactionData = await TransactionMiddleware.detectTransaction(result.narrative, '', player, getConversationContext());
            if (transactionData && transactionData.hasTransaction) {
                console.log("Transaction detected in structured response:", transactionData);
                await TransactionMiddleware.processTransaction(transactionData, player);
            }
        } else if (result.itemChanges) {
            console.log("Skipping transaction detection - itemChanges present in structured response");
        }
    }

    // Process itemChanges if they exist
    if (result.itemChanges) {
        console.log("Processing itemChanges from structured response:", result.itemChanges);
        await processItemChanges(result.itemChanges, player);
    }

    // 2. Player State (HP, EXP, Gold, and Status Effects)
    if (result.playerStateChanges) {
        // --- This is the missing logic for Gold, XP, and HP ---
        if (typeof result.playerStateChanges.gold === 'number' && result.playerStateChanges.gold !== 0) {
            updateGold(result.playerStateChanges.gold, 'transaction');
        }
        if (typeof result.playerStateChanges.exp === 'number' && result.playerStateChanges.exp !== 0) {
            gainExperience(result.playerStateChanges.exp);
        }
        if (typeof result.playerStateChanges.hp === 'number' && result.playerStateChanges.hp !== 0) {
            const oldHp = player.hp;
            player.hp = Math.max(0, Math.min(player.maxHp, player.hp + result.playerStateChanges.hp));
            const actualChange = player.hp - oldHp;
            if (actualChange > 0) {
                displayMessage(`You recover ${actualChange} HP.`, 'success');
            } else if (actualChange < 0) {
                displayMessage(`You take ${Math.abs(actualChange)} damage.`, 'error');
            }
        }
        // --- End of missing logic ---

        if (result.playerStateChanges.statusEffects) {
            const effects = result.playerStateChanges.statusEffects;
            if (effects.remove) {
                effects.remove.forEach(effectName => {
                    const index = player.statusEffects.findIndex(e => e.name === effectName);
                    if (index > -1) {
                        displayMessage(`The effect '${player.statusEffects[index].name}' fades.`, 'info');
                        player.statusEffects.splice(index, 1);
                    }
                });
            }
            if (effects.add) {
                effects.add.forEach(effectToAdd => {
                    if (!player.statusEffects) player.statusEffects = [];
                    player.statusEffects.push(effectToAdd);
                    displayMessage(`You are now affected by: ${effectToAdd.name}.`, 'warning');
                });
            }
        }
    }

    // 3. Alignment Change (Immediate)
    if (result.alignmentChange) {
        const alignmentResult = AlignmentSystem.updateAlignment(player, result.alignmentChange);
        if (alignmentResult.changed) {
            displayMessage(`Your alignment has shifted. You are now considered ${alignmentResult.newType}.`, 'info');
        }
    }

    // 4. Faction Reputation Change
    if (result.factionReputationChange && result.factionReputationChange.length > 0) {
        if (!player.reputation) {
            player.reputation = {};
        }
        result.factionReputationChange.forEach(change => {
            if (!player.reputation[change.faction]) {
                player.reputation[change.faction] = 0;
            }
            player.reputation[change.faction] += change.change;
            const trend = change.change > 0 ? "increased" : "decreased";
            displayMessage(`Your reputation with ${change.faction} has ${trend}.`, 'info');
        });
    }

    // 5. Item Changes
    if (result.itemChanges) {
        if (result.itemChanges.remove && result.itemChanges.remove.length > 0) {
            result.itemChanges.remove.forEach(itemToRemove => {
                const itemIndex = player.inventory.findIndex(i => i.name === itemToRemove.name);
                if (itemIndex > -1) {
                    player.inventory.splice(itemIndex, 1);
                    displayMessage(`${itemToRemove.name} removed from inventory.`, 'info');
                }
            });
        }
        if (result.itemChanges.add && result.itemChanges.add.length > 0) {
            result.itemChanges.add.forEach(itemToAdd => {
                const newItem = ItemGenerator.enhanceItem(itemToAdd, { playerLevel: player.level });
                ItemManager.addItemToInventory(player, newItem);
                displayMessage(`You obtained: ${newItem.name}!`, 'success');
            });
        }
    }

    // 6. Location Change
    if (result.locationChange && result.locationChange !== player.currentLocation) {
        const oldLocation = player.currentLocation;
        player.currentLocation = result.locationChange;
        movePartyWithPlayer(oldLocation, player.currentLocation);
    }

    // 7. Quest Progress
    if (result.questProgress) {
        const quest = player.quests.find(q => q.title === result.questProgress.questTitle && !q.completed);
        if (quest) {
            if (result.questProgress.update) {
                displayMessage(`Quest Update: ${result.questProgress.update}`, 'success');
            }
            // If the AI says the quest is complete, call our new direct function
            if (result.questProgress.isComplete) {
                completeQuest(quest);
            }
        }
    }

    // 8. Combat State
    if (result.combatState && result.combatState.initiate) {
        await generateAndInitiateCombatEncounter(result.combatState.enemy);
    }

    // Finally, update all displays.
    updatePlayerStatsDisplay();
}

// Reset pagination when inventory or quests change significantly
function resetInventoryPagination() {
    inventoryPagination.currentPage = 0;
}

function resetQuestPagination() {
    questPagination.completedQuestsPage = 0;
}

// Pagination control functions
function changeCompletedQuestsPage(direction) {
    const completedQuests = player.quests ? player.quests.filter(q => q.completed) : [];
    const totalPages = Math.ceil(completedQuests.length / questPagination.itemsPerPage);

    questPagination.completedQuestsPage += direction;
    questPagination.completedQuestsPage = Math.max(0, Math.min(questPagination.completedQuestsPage, totalPages - 1));

    displayQuests(); // Refresh the display
}

function changeInventoryPage(direction) {
    const unequippedItems = player.inventory ? player.inventory.filter(item => {
        if (!player.equipment) return true;
        return !Object.values(player.equipment).some(equippedItem =>
            equippedItem && equippedItem.id === item.id
        );
    }) : [];

    const totalPages = Math.ceil(unequippedItems.length / inventoryPagination.itemsPerPage);

    inventoryPagination.currentPage += direction;
    inventoryPagination.currentPage = Math.max(0, Math.min(inventoryPagination.currentPage, totalPages - 1));

    displayInventory(); // Refresh the display
}

function buyShopItem(itemIndex) { // Renamed parameter to itemIndex for clarity and consistency
    if (!window.currentShopInventory || !window.currentShopInventory[itemIndex]) {
        displayMessage('Item no longer available.', 'error');
        return;
    }

    const item = window.currentShopInventory[itemIndex];

    if (player.gold < item.value) {
        displayMessage(`You need ${item.value} gold but only have ${player.gold} gold.`, 'error');
        return;
    }

    // Process the purchase - updateGold handles player.gold, saves game, and updates main stats display
    // It also now directly handles the "You lost X gold" message.
    updateGold(-item.value, 'shop purchase');

    const purchasedItem = { ...item };
    // Remove the price property from the item when it's added to inventory, as it's no longer needed for inventory.
    delete purchasedItem.price;

    // Use ItemManager.addItemToInventory to correctly add the item to the player's inventory.
    // This function also handles generating a unique ID if one is missing and saving the inventory.
    if (typeof ItemManager !== 'undefined' && typeof ItemManager.addItemToInventory === 'function') {
        ItemManager.addItemToInventory(player, purchasedItem);
        // Display a message specific to the item being purchased.
        displayMessage(`Purchased ${item.name} for ${item.value} gold!`, 'success');
    } else {
        // Fallback: If ItemManager is not available, directly push to inventory and save.
        // This is a less robust fallback and indicates an issue with ItemManager import/availability.
        if (!player.inventory) {
            player.inventory = [];
        }
        player.inventory.push(purchasedItem);
        displayMessage(`Purchased ${item.name} for ${item.value} gold! (Fallback)`, 'success');
        if (typeof ItemManager !== 'undefined' && typeof ItemManager.saveInventoryToStorage === 'function') {
            ItemManager.saveInventoryToStorage(player);
        }
    }

    // Remove the purchased item from the shop's current inventory.
    window.currentShopInventory.splice(itemIndex, 1);

    // Refresh the shop display to reflect the purchase (item removed, gold updated).
    // The `showShop` function is expected to regenerate the shop display.
    //showShop();

    // Remove the item element from the DOM
    const itemElement = document.querySelector(`.shop-item:nth-child(${itemIndex + 1})`);
    if (itemElement) {
        itemElement.remove();
    }

    // Ensure the inventory display is updated if it's currently open.
    const inventoryInterface = document.getElementById('inventory-interface');
    if (inventoryInterface && !inventoryInterface.classList.contains('hidden')) {
        displayInventory();
    }
}

// Start new game function
function startNewGame() {
    // Reset game state
    player = {
        name: '',
        gender: '',
        class: '',
        background: '',
        stats: {
            strength: 10,
            dexterity: 10,
            intelligence: 10,
            constitution: 10,
            wisdom: 10,
            charisma: 10
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

    // Reset conversation history
    conversationHistory = {
        messages: [],
        maxMessages: 75
    };

    // Reset game world
    gameWorld = {
        npcs: new Map(),
        locationMemory: new Map(),
        lastNPCInteraction: null,
        time: new Date(864, 5, 12, 8, 0, 0),
        activeEvents: []
    };

    // Clear any existing portrait
    if (player.portraitUrl) {
        delete player.portraitUrl;
    }

    // Update global reference
    window.player = player;

    // Show character creation screen
    showScreen('character-creation-screen');

    // Clear any previous form data
    if (charNameInput) charNameInput.value = '';
    if (charClassSelect) charClassSelect.value = 'warrior';
    if (charBackgroundTextarea) charBackgroundTextarea.value = '';

    // Reset gender selection to first option
    const firstGenderRadio = document.querySelector('input[name="char-gender"]');
    if (firstGenderRadio) firstGenderRadio.checked = true;

    console.log('New game started - character creation screen shown');
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    // Check if there's a saved game to enable load button
    if (localStorage.getItem('pedenaRPGSave')) {
        loadGameBtn.disabled = false;
    }

    // Auto-fix any stat issues in storage
    autoFixStatsInStorage();

    // Load conversation history if available
    loadConversationHistory();

    // Add main event listeners (this function should also be defined or its contents integrated)
    addMainEventListeners(); // Assuming this function is defined elsewhere in your script.js

    // Abandon quest function
    function abandonQuest(questId) {
        if (!player.quests || player.quests.length === 0) {
            displayMessage("No quests to abandon.", 'error');
            return;
        }

        const questIndex = player.quests.findIndex(quest => quest.id === questId);
        if (questIndex === -1) {
            displayMessage("Quest not found.", 'error');
            return;
        }

        const quest = player.quests[questIndex];

        if (quest.completed) {
            displayMessage("Cannot abandon a completed quest.", 'error');
            return;
        }

        if (confirm(`Are you sure you want to abandon "${quest.title}"? This action cannot be undone.`)) {
            // Remove the quest from the player's quest list
            player.quests.splice(questIndex, 1);

            displayMessage(`Abandoned quest: ${quest.title}`, 'info');

            // Reset quest pagination since active quests changed
            resetQuestPagination();

            // Update quest button
            updateQuestButton();

            // Refresh quest display if it's open
            const questInterface = document.getElementById('quest-interface');
            if (questInterface && !questInterface.classList.contains('hidden')) {
                displayQuests();
            }

            // Add to conversation history
            addToConversationHistory('assistant', `${player.name} abandoned the quest: ${quest.title}`);
            saveConversationHistory();
        }
    }

    // Initialize party system
    initializePartySystem();

    // Make required functions globally available for TransactionMiddleware and other modules
    window.callGeminiAPI = callGeminiAPI;
    window.updateGold = updateGold;
    window.displayMessage = displayMessage;
    window.saveGame = saveGame;
    window.displayInventory = displayInventory;
    window.showShop = showShop;
    window.ItemManager = ItemManager;
    window.ItemGenerator = ItemGenerator;
    window.itemCategories = itemCategories;
    window.itemRarity = itemRarity;
    window.TransactionMiddleware = TransactionMiddleware;
    window.ItemExchangeMiddleware = ItemExchangeMiddleware;
    //window.CombatSystem = CombatSystem;
    window.AlignmentSystem = AlignmentSystem;
    window.player = player; // Make player globally accessible
    window.partyManager = partyManager;
    window.multiCombatSystem = multiCombatSystem;

    // Make other functions globally accessible if needed by other parts of the code or for debugging
    window.LocationManager = typeof LocationManager !== 'undefined' ? LocationManager : {};
    window.manualCompleteQuest = manualCompleteQuest; // <<< ADD THIS LINE
    window.GameActions = typeof GameActions !== 'undefined' ? GameActions : {};
    window.HelpSystem = HelpSystem;
    // Error fix: Ensure bgmManager is global before accessing
    if (typeof bgmManager !== 'undefined') {
        window.bgmManager = bgmManager;
    } else {
        console.warn('bgmManager is not defined');
    }

    // Error fix: Ensure BGMManager is global before accessing
    if (typeof BGMManager !== 'undefined') {
        window.BGMManager = BGMManager;
    } else {
        console.warn('BGMManager is not defined');
    }
    window.debugInventory = typeof debugInventory !== 'undefined' ? debugInventory : function() { /* ... */ };
    window.fixInventory = typeof fixInventory !== 'undefined' ? fixInventory : function() { /* ... */ };
    window.resetCharacterProgression = typeof resetCharacterProgression !== 'undefined' ? resetCharacterProgression : function() { /* ... */ };
    window.generateQuest = generateQuest;
    window.displayQuests = displayQuests;
    window.changeCompletedQuestsPage = changeCompletedQuestsPage;
    window.changeInventoryPage = changeInventoryPage;
    window.abandonQuest = abandonQuest;
    window.cleanupRelationships = cleanupRelationships;
    window.recruitNPC = recruitNPC;

    // Initialize BGM system after all other systems are ready
    try {
        if (typeof BGMManager !== 'undefined') {
            bgmManager = new BGMManager();
            console.log('BGM Manager initialized');
            
            // Load BGM settings
            loadBGMSettings();
            setupBGMEventListeners();
        } else {
            console.warn('BGMManager class not found - BGM features will be limited');
        }
    } catch (error) {
        console.error('Failed to initialize BGM system:', error);
    }
    window.dismissPartyMember = dismissPartyMember;
    window.displayPartyStatus = displayPartyStatus;
    window.initiateMultiCombat = initiateMultiCombat;
    window.removeCharacterPortrait = removeCharacterPortrait;
    window.generateCharacterPortrait = generateCharacterPortrait;
    window.debugInventory = debugInventory;
    window.fixInventory = fixInventory;
    window.pray = pray;
    window.gainExperience = gainExperience;


    // <<< --- ADD INVENTORY EVENT LISTENER HERE --- >>>
    if (inventoryItemsDisplay) {
        inventoryItemsDisplay.addEventListener('click', function(event) {
            const button = event.target.closest('.inventory-action-btn'); // Target buttons with this class

            if (button) {
                const action = button.dataset.action;
                const itemIndexStr = button.dataset.index; // For most inventory actions
                const slot = button.dataset.slot;         // Specifically for unequip

                console.log(`Inventory action: ${action}, Index: ${itemIndexStr}, Slot: ${slot}`);

                // Ensure itemIndex is a valid number when needed
                const itemIndex = itemIndexStr !== undefined ? parseInt(itemIndexStr, 10) : null;

                if (action !== 'unequip' && itemIndex === null) {
                    console.error("Action requires an item index, but it's missing or invalid.");
                    displayMessage("Error: Item index not found for action.", "error");
                    return;
                }

                // Validate index for actions that need it
                if (action !== 'unequip' && (!player.inventory || itemIndex < 0 || itemIndex >= player.inventory.length)) {
                    console.error(`Invalid item index: ${itemIndex} for inventory of length ${player.inventory?.length || 0}`);
                    displayMessage("Error: Invalid item selected or inventory not ready.", "error");
                    return;
                }

                // MODIFIED: Calls to ItemManager methods now pass 'player' as the first argument
                switch (action) {
                    case 'use':
                        if (itemIndex !== null) ItemManager.useItem(player, itemIndex); // MODIFIED
                        break;
                    case 'equip':
                        if (itemIndex !== null) ItemManager.equipItem(player, itemIndex); // MODIFIED
                        break;
                    case 'sell':
                        if (itemIndex !== null) ItemManager.sellItem(player, itemIndex); // MODIFIED
                        break;
                    case 'drop':
                        if (itemIndex !== null) ItemManager.dropItem(player, itemIndex); // MODIFIED
                        break;
                    case 'unequip': // 'unequip' uses 'data-slot'
                        if (slot) {
                            ItemManager.unequipItem(player, slot); // MODIFIED
                        } else {
                            console.error("Unequip action requires a slot, but it's missing.");
                            displayMessage("Error: Slot not found for unequip action.", "error");
                        }
                        break;
                    default:
                        console.warn('Unknown inventory action:', action);
                }
            }
        });
        console.log("✓ Event delegation setup for inventory items.");
    } else {
        console.error("inventoryItemsDisplay element not found.");
    }

    if (shopItemsDisplay) {
        shopItemsDisplay.addEventListener('click', function(event) {
            const button = event.target.closest('.shop-action-btn'); // Target buttons with this class

            if (button) {
                const action = button.dataset.action;
                const itemIndexStr = button.dataset.index;

                console.log(`Shop action: ${action}, Index: ${itemIndexStr}`);

                const itemIndex = itemIndexStr !== undefined ? parseInt(itemIndexStr, 10) : null;

                if (itemIndex === null) {
                    console.error("Shop action requires an item index, but it's missing or invalid.");
                    displayMessage("Error: Item index not found for shop action.", "error");
                    return;
                }

                // Validate index for shop actions
                if (!window.currentShopInventory || itemIndex < 0 || itemIndex >= window.currentShopInventory.length) {
                    console.error(`Invalid item index: ${itemIndex} for shop inventory of length ${window.currentShopInventory?.length || 0}`);
                    displayMessage("Error: Invalid item selected or shop inventory not ready.", "error");
                    return;
                }

                if (action === 'buy') {
                    buyShopItem(itemIndex); // buyShopItem should use window.currentShopInventory[itemIndex]
                } else {
                    console.warn('Unknown shop action:', action);
                }
            }
        });
        console.log("✓ Event delegation setup for shop items.");
    } else {
        console.error("shopItemsDisplay element not found.");
    }
    // <<< --- END OF INVENTORY EVENT LISTENER --- >>>

    // Illustration Mode toggle button (new absolute positioned button)
    const illustrationToggle = document.getElementById('illustration-mode-toggle');
    if (illustrationToggle) {
        illustrationToggle.addEventListener('click', async () => {
            isIllustrationModeActive = !isIllustrationModeActive;

            if (isIllustrationModeActive) {
                if (player && player.portraitUrl && player.portraitUrl.trim() !== '') {
                    illustrationToggle.innerHTML = '🖼️<span class="hidden sm:inline"> Illustration Mode: ON</span><span class="sm:hidden"> ON</span>';
                    illustrationToggle.className = 'btn-parchment bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm py-1 px-2';
                    await generateAndDisplaySceneryImage();
                } else {
                    displayMessage("Cannot activate Illustration Mode without a character portrait.", "error");
                    isIllustrationModeActive = false;
                    illustrationToggle.innerHTML = '🖼️<span class="hidden sm:inline"> Illustration Mode</span><span class="sm:hidden"> Illus</span>';
                    illustrationToggle.className = 'btn-parchment bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm py-1 px-2';
                }
            } else {
                illustrationToggle.innerHTML = '🖼️<span class="hidden sm:inline"> Illustration Mode</span><span class="sm:hidden"> Illus</span>';
                illustrationToggle.className = 'btn-parchment bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm py-1 px-2';
                displayMessage("Illustration Mode Deactivated.", "info");
            }
        });
    }

    // Illustration Mode button
    const illustrationModeBtn = document.getElementById('illustration-mode-btn');
    if (illustrationModeBtn) {
        illustrationModeBtn.addEventListener('click', async () => {
            isIllustrationModeActive = !isIllustrationModeActive;

            if (isIllustrationModeActive) {
                if (player && player.portraitUrl && player.portraitUrl.trim() !== '') {
                    // Button text/state will be handled by generateAndDisplaySceneryImage
                    await generateAndDisplaySceneryImage();
                } else {
                    displayMessage("Cannot activate Illustration Mode without a character portrait.", "error");
                    isIllustrationModeActive = false; // Revert state
                    // If illustrationModeBtn exists, ensure its text is reset if activation fails early
                    if (illustrationModeBtn) {
                        illustrationModeBtn.innerHTML = `🖼️<span class="hidden sm:inline"> Illustration Mode</span><span class="sm:hidden"> Illus</span>`;
                        illustrationModeBtn.classList.remove('btn-active-style');
                    }
                }
            } else {
                illustrationModeBtn.innerHTML = `🖼️<span class="hidden sm:inline"> Illustration Mode</span><span class="sm:hidden"> Illus</span>`;
                illustrationModeBtn.classList.remove('btn-active-style');
                displayMessage("Illustration Mode Deactivated.", "info");
            }
        });
    }

    // Close Scenery Image button and Overlay click
    const sceneryImageDisplay = document.getElementById('scenery-image-display');
    const closeSceneryImageBtn = document.getElementById('close-scenery-image-btn');

    if (closeSceneryImageBtn && sceneryImageDisplay) {
        closeSceneryImageBtn.addEventListener('click', () => {
            sceneryImageDisplay.classList.add('hidden');
        });
    }

    if (sceneryImageDisplay) {
        sceneryImageDisplay.addEventListener('click', (event) => {
            if (event.target === sceneryImageDisplay) { // Only close if overlay itself is clicked
                sceneryImageDisplay.classList.add('hidden');
            }
        });
    }

    // Settings button and modal functionality
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const settingsModalCloseBtn = document.getElementById('settings-modal-close-btn');

    if (settingsBtn && settingsModal) {
        settingsBtn.addEventListener('click', () => {
            settingsModal.classList.remove('hidden');
        });
    }

    if (settingsModalCloseBtn && settingsModal) {
        settingsModalCloseBtn.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
        });
    }

    if (settingsModal) {
        settingsModal.addEventListener('click', (event) => {
            if (event.target === settingsModal) {
                settingsModal.classList.add('hidden');
            }
        });
    }

}); // End of DOMContentLoaded

// Add debug button to remove portrait
const removePortraitBtn = document.createElement('button');
removePortraitBtn.id = 'remove-portrait-btn';
removePortraitBtn.className = 'btn-parchment bg-red-600 hover:bg-red-700 text-white text-xs md:text-sm py-1 px-2';
removePortraitBtn.style.cssText = `
    font-size: 0.75rem;
`;
removePortraitBtn.innerHTML = '<i class="ra ra-cancel mr-1"></i><span class="hidden sm:inline">Remove Portrait</span><span class="sm:hidden">Del Pic</span>';
removePortraitBtn.title = 'Remove character portrait (debug function)';
removePortraitBtn.addEventListener('click', removeCharacterPortrait);

// Add reset progression button to the game interface
const resetProgressionBtn = document.createElement('button');
resetProgressionBtn.id = 'reset-progression-btn';
resetProgressionBtn.className = 'btn-parchment bg-orange-600 hover:bg-orange-700 text-white text-xs md:text-sm py-1 px-2';
resetProgressionBtn.style.cssText = `
    font-size: 0.75rem;
`;
resetProgressionBtn.innerHTML = '<i class="ra ra-recycle mr-1"></i><span class="hidden sm:inline">Reset Progression</span><span class="sm:hidden">Reset</span>';
resetProgressionBtn.title = 'Reset character progression (feats, skills, abilities) to match updated game files';

// Add illustration mode toggle button
const illustrationToggle = document.createElement('button');
illustrationToggle.id = 'illustration-mode-toggle';
illustrationToggle.className = 'btn-parchment bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm py-1 px-2';
illustrationToggle.style.cssText = `
    font-size: 0.75rem;
`;
illustrationToggle.innerHTML = '🖼️<span class="hidden sm:inline"> Illustration Mode</span><span class="sm:hidden"> Illus</span>';
illustrationToggle.title = 'Toggle illustration mode for scenery images';

// Add rich text styling toggle button
const richTextToggle = document.createElement('button');
richTextToggle.id = 'rich-text-toggle';
richTextToggle.className = 'btn-parchment rich-text-toggle bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm py-1 px-2';
richTextToggle.style.cssText = `
    font-size: 0.75rem;
`;
richTextToggle.innerHTML = '<i class="ra ra-fireball mr-1"></i><span class="hidden sm:inline">Rich Text: OFF</span><span class="sm:hidden">RT: OFF</span>';
richTextToggle.title = 'Toggle rich text styling for game messages';

// Add to game container
const gameContainer = document.getElementById('game-container');
if (gameContainer) {
    gameContainer.appendChild(removePortraitBtn);
    gameContainer.appendChild(resetProgressionBtn);
    gameContainer.appendChild(illustrationToggle);
    gameContainer.appendChild(richTextToggle);
}

// Rich text styling system
let richTextEnabled = localStorage.getItem('richTextEnabled') === 'true';

function updateRichTextToggle() {
    const toggle = document.getElementById('rich-text-toggle');
    if (toggle) {
        const status = richTextEnabled ? 'ON' : 'OFF';
        // This ensures the full "Rich Text: ON/OFF" is always displayed
        toggle.innerHTML = `<i class="ra ra-fireball mr-2"></i>Rich Text: ${status}`;
        toggle.className = `btn-parchment rich-text-toggle w-full ${richTextEnabled ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 hover:bg-gray-700'} text-white`;
    }
}

function toggleRichText() {
    richTextEnabled = !richTextEnabled;
    localStorage.setItem('richTextEnabled', richTextEnabled.toString());
    updateRichTextToggle();
    displayMessage(`Rich text styling ${richTextEnabled ? 'enabled' : 'disabled'}.`, 'info');
}

function processRichText(text, messageType = null) {
    // Skip rich text processing for background generation and combat messages
    if (messageType === 'background' || messageType === 'combat') {
        return text;
    }

    if (!richTextEnabled) {
        // Strip ALL rich text formatting when disabled (including location names)
        return stripAllRichTextFormatting(text);
    }

    // Process markdown-like syntax for rich text
    let processed = text;

    // Bold: **text** or __text__
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<span class="rt-bold">$1</span>');
    processed = processed.replace(/__(.*?)__/g, '<span class="rt-bold">$1</span>');

    // Italic: *text* or _text_ (but not if already processed as bold)
    processed = processed.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<span class="rt-italic">$1</span>');
    processed = processed.replace(/(?<!_)_([^_]+?)_(?!_)/g, '<span class="rt-italic">$1</span>');

    // Process underline before bold to avoid conflicts
    // Underline: {{underline:text}}
    processed = processed.replace(/\{\{underline:(.*?)\}\}/g, '<span class="rt-underline">$1</span>');

    // Strikethrough: ~~text~~
    processed = processed.replace(/~~(.*?)~~/g, '<span class="rt-strikethrough">$1</span>');

    // Special effects with custom syntax
    // Colors: {red:text}, {green:text}, etc. and single word colors {magical}, {infernal}, etc.
    processed = processed.replace(/\{red:(.*?)\}/g, '<span class="rt-color-red">$1</span>');
    processed = processed.replace(/\{green:(.*?)\}/g, '<span class="rt-color-green">$1</span>');
    processed = processed.replace(/\{blue:(.*?)\}/g, '<span class="rt-color-blue">$1</span>');
    processed = processed.replace(/\{purple:(.*?)\}/g, '<span class="rt-color-purple">$1</span>');
    processed = processed.replace(/\{gold:(.*?)\}/g, '<span class="rt-color-gold">$1</span>');
    processed = processed.replace(/\{silver:(.*?)\}/g, '<span class="rt-color-silver">$1</span>');
    processed = processed.replace(/\{crimson:(.*?)\}/g, '<span class="rt-color-crimson">$1</span>');
    processed = processed.replace(/\{emerald:(.*?)\}/g, '<span class="rt-color-emerald">$1</span>');
    processed = processed.replace(/\{brown:(.*?)\}/g, '<span class="rt-color-brown">$1</span>');

    // Shadow effects: {shadow:text}
    processed = processed.replace(/\{shadow:(.*?)\}/g, '<span class="rt-shadow">$1</span>');

    // Handle contextual color words - map to appropriate colors
    processed = processed.replace(/\{magical\}/g, '<span class="rt-color-purple">magical</span>');
    processed = processed.replace(/\{infernal energy\}/g, '<span class="rt-color-red">infernal energy</span>');
    processed = processed.replace(/\{infernal\}/g, '<span class="rt-color-red">infernal</span>');
    processed = processed.replace(/\{peaceful\}/g, '<span class="rt-color-green">peaceful</span>');
    processed = processed.replace(/\{molten rock\}/g, '<span class="rt-color-crimson">molten rock</span>');
    processed = processed.replace(/\{molten\}/g, '<span class="rt-color-crimson">molten</span>');
    processed = processed.replace(/\{ash\}/g, '<span class="rt-color-silver">ash</span>');
    processed = processed.replace(/\{sulfur\}/g, '<span class="rt-color-gold">sulfur</span>');
    processed = processed.replace(/\{flames\}/g, '<span class="rt-color-red">flames</span>');
    processed = processed.replace(/\{lava flows\}/g, '<span class="rt-color-crimson">lava flows</span>');
    processed = processed.replace(/\{lava\}/g, '<span class="rt-color-crimson">lava</span>');
    processed = processed.replace(/\{bridges\}/g, '<span class="rt-color-silver">bridges</span>');
    processed = processed.replace(/\{epic\}/g, '<span class="rt-color-gold">epic</span>');
    processed = processed.replace(/\{hellish\}/g, '<span class="rt-color-red">hellish</span>');
    processed = processed.replace(/\{portal\}/g, '<span class="rt-color-blue">portal</span>');

    // Generic fallback for any remaining single-word colors in braces
    processed = processed.replace(/\{([a-zA-Z\s]+)\}/g, function(match, word) {
        // If it wasn't caught by specific rules above, apply a default color based on context
        if (word.includes('fire') || word.includes('flame') || word.includes('burn')) {
            return `<span class="rt-color-red">${word}</span>`;
        } else if (word.includes('magic') || word.includes('arcane') || word.includes('mystic')) {
            return `<span class="rt-color-purple">${word}</span>`;
        } else if (word.includes('nature') || word.includes('green') || word.includes('forest')) {
            return `<span class="rt-color-green">${word}</span>`;
        } else if (word.includes('water') || word.includes('ice') || word.includes('blue')) {
            return `<span class="rt-color-blue">${word}</span>`;
        } else if (word.includes('gold') || word.includes('treasure') || word.includes('divine')) {
            return `<span class="rt-color-gold">${word}</span>`;
        } else {
            return `<span class="rt-color-purple">${word}</span>`; // Default to purple for unknown
        }
    });

    // Fonts: [medieval:text], [magic:text], etc. and {elegant:text}, {magic:text}, etc.
    processed = processed.replace(/\[medieval:(.*?)\]/g, '<span class="rt-font-medieval">$1</span>');
    processed = processed.replace(/\[magic:(.*?)\]/g, '<span class="rt-font-magic">$1</span>');
    processed = processed.replace(/\[elegant:(.*?)\]/g, '<span class="rt-font-elegant">$1</span>');
    processed = processed.replace(/\[ancient:(.*?)\]/g, '<span class="rt-font-ancient">$1</span>');

    // Alternative curly brace format for fonts
    processed = processed.replace(/\{medieval:(.*?)\}/g, '<span class="rt-font-medieval">$1</span>');
    processed = processed.replace(/\{magic:(.*?)\}/g, '<span class="rt-font-magic">$1</span>');
    processed = processed.replace(/\{elegant:(.*?)\}/g, '<span class="rt-font-elegant">$1</span>');
    processed = processed.replace(/\{ancient:(.*?)\}/g, '<span class="rt-font-ancient">$1</span>');

    // Effects: {{effect:text}} - Process in specific order to avoid conflicts
    processed = processed.replace(/\{\{highlight:(.*?)\}\}/g, '<span class="rt-highlight">$1</span>');
    processed = processed.replace(/\{\{blink:(.*?)\}\}/g, '<span class="rt-blink">$1</span>');
    processed = processed.replace(/\{\{wiggle:(.*?)\}\}/g, '<span class="rt-wiggle">$1</span>');
    processed = processed.replace(/\{\{shadow:(.*?)\}\}/g, '<span class="rt-shadow">$1</span>');
    processed = processed.replace(/\{\{glow:(.*?)\}\}/g, '<span class="rt-glow">$1</span>');
    processed = processed.replace(/\{\{stretch-h:(.*?)\}\}/g, '<span class="rt-stretch-h">$1</span>');
    processed = processed.replace(/\{\{stretch-v:(.*?)\}\}/g, '<span class="rt-stretch-v">$1</span>');
    processed = processed.replace(/\{\{glow-shadow:(.*?)\}\}/g, '<span class="rt-shadow-glow">$1</span>');
    processed = processed.replace(/\{\{underline:(.*?)\}\}/g, '<span class="rt-underline">$1</span>');

    return processed;
}

// Add main event listeners function
function addMainEventListeners() {
    try {
        // --- Navigation and Screen Setup ---
        document.getElementById('header-logo')?.addEventListener('click', () => {
            const gamePlayScreen = document.getElementById('game-play-screen');
            if (gamePlayScreen && !gamePlayScreen.classList.contains('hidden')) {
                if (confirm("Are you sure you want to return to the main menu? Any unsaved progress will be lost.")) {
                    showScreen('start-screen');
                }
            } else {
                showScreen('start-screen');
            }
        });

        newGameBtn?.addEventListener('click', () => {
            if (!gameSettings.apiKey || !gameSettings.model) {
                alert('A Gemini API Key and Model are required. Please configure them in the Settings menu.');
                document.getElementById('settings-modal')?.classList.remove('hidden');
                return;
            }
            showScreen('character-creation-screen');
        });

        loadGameBtn?.addEventListener('click', () => {
            if (!gameSettings.apiKey || !gameSettings.model) {
                alert('A Gemini API Key and Model are required. Please configure them in the Settings menu.');
                document.getElementById('settings-modal')?.classList.remove('hidden');
                return;
            }
            loadGame();
        });

        // --- Character Creation ---
        generateBackgroundBtn?.addEventListener('click', generateCharacterBackground);
        createCharacterBtn?.addEventListener('click', async () => {
            createCharacter();
            await startNewGame(player);
        });
        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'generate-portrait-btn') {
                e.preventDefault();
                generateCharacterPortrait();
            }
        });

        // --- CORE GAMEPLAY COMMAND INPUT (THE FIX) ---
        executeCommandBtn?.addEventListener('click', async () => {
            const command = customCommandInput.value.trim();
            if (!command) return;
            displayMessage(`> ${command}`, 'player-command');
            await executeCustomCommand(command);
            customCommandInput.value = '';
            customCommandInput.focus();
        });

        customCommandInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                executeCommandBtn.click();
            }
        });

        // --- Map Stuff --- //
        showMapBtn?.addEventListener('click', displayMap);
        exitMapBtn?.addEventListener('click', () => mapInterface.classList.add('hidden'));

        // --- Quick Action Buttons ---
        document.getElementById('rest-btn')?.addEventListener('click', () => {
            const healAmount = Math.floor(player.maxHp * 0.25) + 10;
            player.hp = Math.min(player.maxHp, player.hp + healAmount);
            displayMessage(`You rest and recover ${healAmount} HP. You feel refreshed.`, 'success');
            updatePlayerStatsDisplay();
            saveGame();
        });

        document.getElementById('explore-btn')?.addEventListener('click', () => explore("explore the area"));
        document.getElementById('cast-spell-btn')?.addEventListener('click', () => displaySkillsAndAbilities());
        document.getElementById('pray-btn')?.addEventListener('click', pray);
        document.getElementById('help-btn')?.addEventListener('click', () => displayMessage(HelpSystem.getHelp(), 'info'));

        // --- Interface & Menu Buttons ---
        saveGameBtn?.addEventListener('click', saveGame);
        showInventoryBtn?.addEventListener('click', displayInventory);
        showShopBtn?.addEventListener('click', showShop);
        showBackgroundBtn?.addEventListener('click', displayCharacterBackground);

        // Process structured item changes from AI responses
        async function processItemChanges(itemChanges, player) {
            if (!itemChanges || typeof itemChanges !== 'object') {
                console.log("No valid itemChanges to process");
                return;
            }

            // Process items to add
            if (itemChanges.itemsToAdd && Array.isArray(itemChanges.itemsToAdd)) {
                for (const itemData of itemChanges.itemsToAdd) {
                    console.log("Processing item to add:", itemData);

                    // Validate item data
                    if (!itemData || !itemData.name || itemData.name === 'undefined') {
                        console.warn("Skipping invalid item:", itemData);
                        continue;
                    }

                    try {
                        // Create a proper item using ItemGenerator or fallback
                        let newItem;

                        if (window.ItemGenerator && typeof ItemGenerator.generateItem === 'function') {
                            const context = {
                                category: window.itemCategories?.CONSUMABLE || 'consumable',
                                rarity: itemData.rarity || 'COMMON',
                                locationContext: player.currentLocation,
                                playerLevel: player.level,
                                playerClass: player.class,
                                narrativeContext: itemData.description
                            };

                            newItem = await ItemGenerator.generateItem(context);

                            if (newItem) {
                                // Override with specific details from itemChanges
                                newItem.name = itemData.name;
                                if (itemData.description) newItem.description = itemData.description;
                                if (itemData.value) newItem.value = itemData.value;
                            }
                        }

                        // Fallback if ItemGenerator fails
                        if (!newItem) {
                            newItem = {
                                id: `structured_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
                                name: itemData.name,
                                type: itemData.type || 'consumable',
                                rarity: itemData.rarity || 'COMMON',
                                description: itemData.description || `A ${itemData.name.toLowerCase()} obtained during your adventure.`,
                                value: itemData.value || Math.max(1, Math.floor(Math.random() * 20) + 5),
                                isUsable: itemData.isUsable || false,
                                isEquippable: itemData.isEquippable || false
                            };
                        }

                        // Add to inventory using ItemManager
                        if (window.ItemManager && typeof ItemManager.addItemToInventory === 'function') {
                            ItemManager.addItemToInventory(player, newItem);
                            displayMessage(`Added to inventory: ${newItem.name}`, 'success');
                        } else {
                            // Direct inventory addition as fallback
                            if (!player.inventory) player.inventory = [];
                            player.inventory.push(newItem);
                            displayMessage(`Added to inventory: ${newItem.name}`, 'success');
                        }

                    } catch (error) {
                        console.error("Error processing item to add:", error);
                        displayMessage(`Failed to add item: ${itemData.name}`, 'error');
                    }
                }
            }

            // Process items to remove
            if (itemChanges.itemsToRemove && Array.isArray(itemChanges.itemsToRemove)) {
                for (const itemName of itemChanges.itemsToRemove) {
                    if (!itemName || itemName === 'undefined') continue;

                    const itemIndex = player.inventory?.findIndex(item =>
                        item.name.toLowerCase().includes(itemName.toLowerCase())
                    );

                    if (itemIndex !== -1) {
                        const removedItem = player.inventory.splice(itemIndex, 1)[0];
                        displayMessage(`Removed from inventory: ${removedItem.name}`, 'info');
                    }
                }
            }

            // Process gold changes
            if (itemChanges.goldChange && typeof itemChanges.goldChange === 'number' && itemChanges.goldChange !== 0) {
                updateGold(itemChanges.goldChange, 'item transaction');
            }

            // Save changes
            if (window.ItemManager && typeof ItemManager.saveInventoryToStorage === 'function') {
                ItemManager.saveInventoryToStorage(player);
            }
            saveGame();
        }


        document.getElementById('show-progression-btn')?.addEventListener('click', displayCharacterProgression);
        newQuestBtn?.addEventListener('click', displayQuests);

        // --- Exit Buttons ---
        exitShopBtn?.addEventListener('click', () => shopInterface?.classList.add('hidden'));
        exitInventoryBtn?.addEventListener('click', () => inventoryInterface?.classList.add('hidden'));
        exitSkillsBtn?.addEventListener('click', () => skillsInterface?.classList.add('hidden'));
        exitBackgroundBtn?.addEventListener('click', () => backgroundInterface?.classList.add('hidden'));
        document.getElementById('exit-progression-btn')?.addEventListener('click', () => document.getElementById('progression-interface')?.classList.add('hidden'));
        exitQuestsBtn?.addEventListener('click', () => questInterface?.classList.add('hidden'));

        console.log('✓ All main event listeners have been correctly added.');
    } catch (error) {
        console.error('❌ Error adding main event listeners:', error);
    }
}

function updateQuickActionButtons() {
    const castSpellBtn = document.getElementById('cast-spell-btn');
    if (!castSpellBtn) return;

    switch (player.class.toLowerCase()) {
        case 'mage':
            castSpellBtn.innerHTML = `<i class="ra ra-fireball mr-2"></i>Cast Spell`;
            castSpellBtn.title = "Cast a spell from your spellbook";
            break;
        case 'warrior':
            castSpellBtn.innerHTML = `<i class="ra ra-sword mr-2"></i>Use Ability`;
            castSpellBtn.title = "Use a powerful combat ability";
            break;
        case 'rogue':
            castSpellBtn.innerHTML = `<i class="ra ra-dagger mr-2"></i>Use Skill`;
            castSpellBtn.title = "Use a special rogue skill";
            break;
        case 'ranger':
            castSpellBtn.innerHTML = `<i class="ra ra-bow mr-2"></i>Use Technique`;
            castSpellBtn.title = "Use a ranger technique or nature-based ability";
            break;
        case 'cleric':
            castSpellBtn.innerHTML = `<i class="ra ra-holy-symbol mr-2"></i>Cast Healing`;
            castSpellBtn.title = "Cast a healing spell";
            break;
        case 'paladin':
            castSpellBtn.innerHTML = `<i class="ra ra-shield mr-2"></i>Divine Strike`;
            castSpellBtn.title = "Perform a divine strike";
            break;
        case 'bard':
            castSpellBtn.innerHTML = `<i class="ra ra-music mr-2"></i>Perform`;
            castSpellBtn.title = "Perform a musical ability";
            break;
        case 'druid':
            castSpellBtn.innerHTML = `<i class="ra ra-tree mr-2"></i>Nature's Wrath`;
            castSpellBtn.title = "Summon nature's wrath";
            break;
        case 'monk':
            castSpellBtn.innerHTML = `<i class="ra ra-fist mr-2"></i>Martial Art`;
            castSpellBtn.title = "Use a martial art";
            break;
        case 'sorcerer':
            castSpellBtn.innerHTML = `<i class="ra ra-fireball mr-2"></i>Arcane Blast`;
            castSpellBtn.title = "Cast an arcane blast";
            break;
        case 'warlock':
        default:
            castSpellBtn.innerHTML = `<i class="ra ra-fireball mr-2"></i>Special Action`;
            castSpellBtn.title = "Perform a special action";
            break;
        case 'barbarian':
            castSpellBtn.innerHTML = `<i class="ra ra-axe mr-2"></i>Rage`;
            castSpellBtn.title = "Enter a rage";
            break;
        case 'braweler':
            castSpellBtn.innerHTML = `<i class="ra ra-fist mr-2"></i>Brawl`;
            castSpellBtn.title = "Brawl with your fists";
            break;
        case 'necromancer':
            castSpellBtn.innerHTML = `<i class="ra ra-skull mr-2"></i>Necrotic Blast`;
            castSpellBtn.title = "Cast a necrotic blast";
            break;
        case 'assassin':
            castSpellBtn.innerHTML = `<i class="ra ra-dagger mr-2"></i>Assassinate`;
            castSpellBtn.title = "Assassinate your target";
            break;
        case 'alchemist':
            castSpellBtn.innerHTML = `<i class="ra ra-flask mr-2"></i>Alchemy`;
            castSpellBtn.title = "Use an alchemical ability";
            break;
        case 'engineer':
            castSpellBtn.innerHTML = `<i class="ra ra-gears mr-2"></i>Engineer`;
            castSpellBtn.title = "Use an engineering ability";
            break;
        case 'summoner':
            castSpellBtn.innerHTML = `<i class="ra ra-owl mr-2"></i>Summon`;
            castSpellBtn.title = "Summon a creature";
            break;
        case 'illusionist':
            castSpellBtn.innerHTML = `<i class="ra ra-magic-palm mr-2"></i>Illusion`;
            castSpellBtn.title = "Create an illusion";
            break;
        case 'shaman':
            castSpellBtn.innerHTML = `<i class="ra ra-owl mr-2"></i>Spiritual Blast`;
            castSpellBtn.title = "Cast a spiritual blast";
            break;
        case 'ninja':
            castSpellBtn.innerHTML = `<i class="ra ra-ninja-mask mr-2"></i>Ninja Strike`;
            castSpellBtn.title = "Perform a ninja strike";
            break;
        case 'psychic':
            castSpellBtn.innerHTML = `<i class="ra ra-brain mr-2"></i>Psychic Blast`;
            castSpellBtn.title = "Cast a psychic blast";
            break;
        case 'hunter':
            castSpellBtn.innerHTML = `<i class="ra ra-bow mr-2"></i>Hunt`;
            castSpellBtn.title = "Hunt your target";
            break;
        case 'scholar':
            castSpellBtn.innerHTML = `<i class="ra ra-book mr-2"></i>Scholar`;
            castSpellBtn.title = "Use a scholar ability";
            break;
        case 'gladiator':
            castSpellBtn.innerHTML = `<i class="ra ra-sword mr-2"></i>Gladiator Strike`;
            castSpellBtn.title = "Perform a gladiator strike";
            break;
    }
}

// Add missing functions
function createCharacter() {
    const name = charNameInput.value.trim();
    const charClass = charClassSelect.value;
    const gender = Array.from(charGenderRadios).find(radio => radio.checked)?.value;

    if (!name || !charClass || !gender) {
        alert("Please fill in all character details.");
        return;
    }

    // Initialize player
    player.name = name;
    player.class = charClass;
    player.gender = gender;
    player.background = charBackgroundTextarea.value || "A mysterious adventurer.";

    // Apply class bonuses using CharacterManager if available
    if (CharacterManager) {
        CharacterManager.initializeCharacter(player, charClass);
    } else {
        // Fallback initialization
        const classData = classes[charClass];
        if (classData) {
            player.maxHp += classData.hpBonus;
            player.hp = player.maxHp;
        }
    }

    // Start the game
    showScreen('game-play-screen');
    updatePlayerStatsDisplay();
    displayMessage(`Welcome to Pedena, ${player.name}! Your adventure begins in ${player.currentLocation}.`);
    updateQuickActionButtons();
    updateIllustrationButtonVisibility(); // Update button visibility after character creation
    saveGame();
}

function displayInventory() {
    // Hide other interfaces
    const interfacesToHide = ['shop-interface', 'skills-interface', 'quest-interface', 'background-interface', 'progression-interface'];
    interfacesToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
    });

    const inventoryInterface = document.getElementById('inventory-interface');
    if (inventoryInterface) {
        inventoryInterface.classList.remove('hidden');
    } else {
        console.error("inventoryInterface element not found!");
        return;
    }

    // Update status effects before displaying
    if (typeof ItemManager !== 'undefined' && ItemManager.updateStatusEffects) {
        ItemManager.updateStatusEffects(player);
    } else if (typeof window.ItemManager !== 'undefined' && window.ItemManager.updateStatusEffects) {
        window.ItemManager.updateStatusEffects(player);
    }

    console.log("displayInventory: Rendering inventory. Items count:", player.inventory ? player.inventory.length : 'undefined');

    let inventoryHTML = '';

    // Gold Display (dedicated box, spans full width on medium screens if parent is 2-col)
    inventoryHTML += `
        <div class="parchment-box p-3 mb-4 text-center md:col-span-2">
            <p class="font-bold text-xl">Gold: ${player.gold}</p>
        </div>`;

    // Active Status Effects (spans full width on medium screens if parent is 2-col)
    if (player.statusEffects && player.statusEffects.length > 0) {
        inventoryHTML += `<div class="parchment-box p-3 mb-4 md:col-span-2"><h4 class="font-bold mb-2">Active Effects:</h4>`;
        player.statusEffects.forEach(effect => {
            const timeLeft = Math.max(0, Math.floor(((effect.expiresAt || 0) - Date.now()) / 1000));
            inventoryHTML += `<p class="text-sm ${effect.type === 'positive' ? 'text-green-700' : 'text-red-700'}">${effect.name} (${timeLeft}s): ${effect.description}</p>`;
        });
        inventoryHTML += `</div>`;
    }

    // Equipped Items (section spans full width, internal grid is now 2-column on medium+)
    inventoryHTML += `
        <div class="mb-6 w-full md:col-span-2"> 
            <h5 class="text-xl font-bold mb-3 text-blue-600">Equipped Items</h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full"> 
                ${typeof buildEquipmentDisplay === 'function' ? buildEquipmentDisplay() : ''}
            </div>
        </div>`;

    // Inventory Items section (section spans full width, internal grid is single column)
    // Filter out equipped items from inventory display
    const unequippedItems = player.inventory ? player.inventory.filter(item => {
        // Check if this item is currently equipped in any slot
        if (!player.equipment) return true;
        return !Object.values(player.equipment).some(equippedItem =>
            equippedItem && equippedItem.id === item.id
        );
    }) : [];

    const startIndex = inventoryPagination.currentPage * inventoryPagination.itemsPerPage;
    const endIndex = Math.min(startIndex + inventoryPagination.itemsPerPage, unequippedItems.length);
    const paginatedItems = unequippedItems.slice(startIndex, endIndex);
    const totalPages = Math.ceil(unequippedItems.length / inventoryPagination.itemsPerPage);

    inventoryHTML += `
        <div class="mb-6 w-full md:col-span-2"> 
            <div class="flex justify-between items-center mb-3">
                <h5 class="text-xl font-bold text-yellow-600">Inventory Items</h5>
                ${totalPages > 1 ? `<span class="text-sm text-gray-600">Page ${inventoryPagination.currentPage + 1} of ${totalPages}</span>` : ''}
            </div>
            <p class="text-sm text-gray-600 mb-3">Items: ${unequippedItems.length} total, showing ${paginatedItems.length}</p>
            <div class="grid grid-cols-1 gap-4 w-full"> 
    `;

    if (unequippedItems.length === 0) {
        inventoryHTML += '<p class="text-center text-gray-600">Your inventory is empty.</p>';
    } else {
        paginatedItems.forEach((item, index) => {
            // Find the original index in the full inventory for the action buttons
            const originalIndex = player.inventory.findIndex(invItem => invItem.id === item.id);
            inventoryHTML += typeof buildInventoryItemDisplay === 'function' ? buildInventoryItemDisplay(item, originalIndex) : ``;
        });
    }
    inventoryHTML += `
            </div>
    `;

    // Add pagination controls for inventory
    if (totalPages > 1) {
        inventoryHTML += `
            <div class="flex justify-center items-center gap-2 mt-4">
                <button onclick="changeInventoryPage(-1)" 
                        class="btn-parchment text-xs py-1 px-2 ${inventoryPagination.currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
                        ${inventoryPagination.currentPage === 0 ? 'disabled' : ''}>
                    Previous
                </button>
                <span class="text-sm text-gray-600 mx-2">
                    ${inventoryPagination.currentPage + 1} / ${totalPages}
                </span>
                <button onclick="changeInventoryPage(1)" 
                        class="btn-parchment text-xs py-1 px-2 ${inventoryPagination.currentPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}"
                        ${inventoryPagination.currentPage >= totalPages - 1 ? 'disabled' : ''}>
                    Next
                </button>
            </div>
        `;
    }

    inventoryHTML += `
        </div>
    `;

    const inventoryItemsDisplay = document.getElementById('inventory-items');
    if (inventoryItemsDisplay) {
        inventoryItemsDisplay.innerHTML = inventoryHTML;
    } else {
        console.error("inventoryItemsDisplay element not found in displayInventory!");
    }
}

function getIconForItem(item) {
    if (!item) return 'ra-crossed-swords';

    const name = item.name ? item.name.toLowerCase() : '';
    const subType = item.subType ? item.subType.toLowerCase() : '';
    let inferredType = item.type ? item.type.toLowerCase() : null;

    // --- Improved Inference Logic ---
    if (!inferredType) {
        // FIX: Check if armor property EXISTS, not if it's just a non-zero value.
        if (typeof item.armor === 'number') inferredType = 'armor';
        else if (item.damage) inferredType = 'weapon';
        else if (name.includes('potion') || name.includes('elixir')) inferredType = 'consumable';
        else if (name.includes('scroll')) inferredType = 'scroll';
        else if (name.includes('book') || name.includes('tome')) inferredType = 'book';
        else if (name.includes('ring') || name.includes('amulet') || name.includes('necklace')) inferredType = 'jewelry';
        else if (item.tool_type) inferredType = 'tool';
        else if (item.slot === 'back') inferredType = 'armor'; // Specifically classify 'back' slot items as armor
    }

    switch (inferredType) {
        case 'weapon':
            if (name.includes('staff')) return 'ra-staff';
            if (name.includes('bow')) return 'ra-bow';
            if (name.includes('wand')) return 'ra-wand';
            if (name.includes('dagger')) return 'ra-dagger';
            if (name.includes('axe')) return 'ra-axe';
            return 'ra-sword';

        case 'armor':
            switch (item.slot) {
                case 'head': return 'ra-knight-helmet';
                case 'chest': return 'ra-vest';
                case 'hands': return 'ra-gauntlet';
                case 'legs': return '👖'; // FIX: Use emoji for equipped leg items
                case 'feet': return 'ra-boots';
                case 'back': return '🧥'; // FIX: Use emoji for equipped back items
                case 'offHand': return 'ra-shield';
                default: return 'ra-armor';
            }

        case 'consumable':
            return 'ra-potion';

        case 'book':
            return 'ra-book';

        case 'scroll':
            return 'ra-scroll-unfurled';

        case 'jewelry':
            if (item.slot?.includes('ring')) return 'ra-ring';
            if (item.slot === 'amulet') return 'ra-gem';
            return 'ra-gem';

        // ... (other cases remain the same) ...

        default:
            return 'ra-crossed-swords';
    }
}

function buildEquipmentDisplay() {
    if (!player.equipment) {
        player.equipment = {
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
            back: null // Ensure this is initialized if not already
        };
    }

    const equipmentSlots = [
        { slot: 'mainHand', name: 'Main Hand', icon: 'ra-sword' },
        { slot: 'offHand', name: 'Off Hand', icon: 'ra-shield' },
        { slot: 'head', name: 'Head', icon: 'ra-knight-helmet' },
        { slot: 'chest', name: 'Chest', icon: 'ra-vest' },
        { slot: 'hands', name: 'Hands', icon: 'ra-gauntlet' },
        { slot: 'legs', name: 'Legs', icon: '👖' }, // This was already the pants emoji, but confirmed here.
        { slot: 'feet', name: 'Feet', icon: 'ra-boots' }, // This should be the RPG-Awesome class
        { slot: 'back', name: 'Back', icon: '🧥' }, // Changed 'ra-cape' to the coat emoji.
        { slot: 'amulet', name: 'Amulet', icon: 'ra-gem' },
        { slot: 'ring1', name: 'Ring 1', icon: 'ra-ring' },
        { slot: 'ring2', name: 'Ring 2', icon: 'ra-ring' }
    ];

    return equipmentSlots.map(slotData => {
        const item = player.equipment[slotData.slot];
        const iconClass = item ? getIconForItem(item) : slotData.icon;

        // Check if icon is an emoji (doesn't start with 'ra-')
        const isEmoji = !iconClass.startsWith('ra-');

        if (item) {
            // Build combat stats display
            let combatStats = [];
            if (item.damage) combatStats.push(`Damage: ${item.damage}`);
            if (item.armor) combatStats.push(`Armor: +${item.armor}`);

// Donation System Functions
function openDonationModal() {
    if (donationModal) {
        donationModal.classList.remove('hidden');
    }
}

function closeDonationModal() {
    if (donationModal) {
        donationModal.classList.add('hidden');
    }
}

function handleDonation(amount) {
    // Create Venmo payment URL
    const venmoUrl = `https://venmo.com/code?user_id=@your-venmo-username&amount=${amount}&note=Support%20Shadowscale%20Chronicles`;
    
    // Open Venmo payment in new tab
    window.open(venmoUrl, '_blank');
    
    // Display thank you message
    displayMessage(`Thank you for your ${amount} donation! Opening Venmo payment...`, 'success');
    
    // Close modal after a brief delay
    setTimeout(() => {
        closeDonationModal();
    }, 1500);
}

// Initialize donation system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Donation modal event listeners
    if (donateBtn) {
        donateBtn.addEventListener('click', openDonationModal);
    }
    
    if (donationModalCloseBtn) {
        donationModalCloseBtn.addEventListener('click', closeDonationModal);
    }
    
    // Close modal when clicking outside of it
    if (donationModal) {
        donationModal.addEventListener('click', function(e) {
            if (e.target === donationModal) {
                closeDonationModal();
            }
        });
    }
    
    // Event delegation for donation amount buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('donate-amount-btn')) {
            const amount = e.target.getAttribute('data-amount');
            if (amount) {
                handleDonation(amount);
            }
        }
    });
});


            if (item.defense) combatStats.push(`Defense: +${item.defense}`);
            if (item.attack) combatStats.push(`Attack: +${item.attack}`);
            if (item.statBonus) {
                Object.entries(item.statBonus).forEach(([stat, bonus]) => {
                    combatStats.push(`${stat.charAt(0).toUpperCase() + stat.slice(1)}: +${bonus}`);
                });
            }
            if (item.effects && Array.isArray(item.effects)) {
                const combatEffects = item.effects.filter(effect =>
                    effect.includes('strength') || effect.includes('dexterity') ||
                    effect.includes('constitution') || effect.includes('defense') ||
                    effect.includes('attack') || effect.includes('damage') ||
                    effect.includes('armor') || effect.includes('resist')
                );
                combatEffects.forEach(effect => {
                    combatStats.push(effect.replace(/_/g, ' '));
                });
            }

            return `
                <div class="parchment-box p-2 flex items-center gap-3 w-full">
                    <div class="flex-shrink-0">
                        ${isEmoji ?
                    `<span class="text-xl text-green-600">${iconClass}</span>` :
                    `<i class="ra ${iconClass} text-xl text-green-600"></i>`
                }
                    </div>
                    <div class="flex-grow">
                        <h6 class="font-bold text-sm">${slotData.name}</h6>
                        <p class="text-xs text-green-700 font-semibold">${item.name}</p>
                        ${combatStats.length > 0 ?
                    `<div class="text-xs text-blue-600 mt-1">
                                ${combatStats.map(stat => `<span class="block">${stat}</span>`).join('')}
                            </div>` :
                    '<p class="text-xs text-gray-500 italic">No combat bonuses</p>'
                }
                    </div>
                    <button class="btn-parchment inventory-action-btn text-xs py-1 px-2 flex-shrink-0" data-action="unequip" data-slot="${slotData.slot}" style="color: #8B4513 !important;">
                        Unequip
                    </button>
                </div>
            `;
        } else {
            return `
                <div class="parchment-box p-2 flex items-center gap-3 w-full border-dashed border-gray-400">
                    <div class="flex-shrink-0">
                        ${isEmoji ?
                    `<span class="text-xl text-gray-400">${iconClass}</span>` :
                    `<i class="ra ${iconClass} text-xl text-gray-400"></i>`
                }
                    </div>
                    <div class="flex-grow">
                        <h6 class="font-bold text-sm text-gray-500">${slotData.name}</h6>
                        <p class="text-xs text-gray-500">Empty</p>
                    </div>
                </div>
            `;
        }
    }).join('');
}

function buildInventoryItemDisplay(item, index) {

    if (item.unidentified) {
        return `
            <div class="parchment-box p-3 w-full flex gap-3 border-2 border-dashed border-purple-400">
                <div class="flex-shrink-0 pt-1">
                    <i class="ra ra-help text-3xl text-purple-600 animate-pulse"></i>
                </div>
                <div class="flex-grow">
                    <div class="flex justify-between items-start mb-1">
                        <h6 class="font-bold text-lg text-purple-700">${item.name}</h6>
                        <span class="text-xs px-2 py-1 rounded bg-purple-200 text-purple-800">Mysterious</span>
                    </div>
                    <p class="text-sm text-amber-700 mb-2 italic">${item.description}</p>
                    <div class="flex gap-2 flex-wrap">
                         <button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-purple-600 hover:bg-purple-700" style="color: #D2B48C !important;" data-action="appraise" data-index="${index}">Appraise</button>
                         <button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-red-600 hover:bg-red-700" data-action="drop" data-index="${index}">Drop</button>
                    </div>
                </div>
            </div>
        `;
    }

    const canEquip = item.slot && (!player.equipment[item.slot] || player.equipment[item.slot].id !== item.id);
    const isConsumable = item.type === 'consumable' || (item.effect && (item.effect.type === 'heal' || item.effect.type === 'mana'));

    const iconClass = getIconForItem(item);

    return `
        <div class="parchment-box p-3 w-full flex gap-3">
            <div class="flex-shrink-0 pt-1">
                 <i class="ra ${iconClass} text-3xl text-amber-800"></i>
            </div>
            <div class="flex-grow">
                <div class="flex justify-between items-start mb-1">
                    <h6 class="font-bold text-lg">${item.name}</h6>
                    <span class="text-xs px-2 py-1 rounded ${getRarityColor(item.rarity || 'COMMON')}">${item.rarity || 'COMMON'}</span>
                </div>
                <p class="text-sm text-amber-700 mb-2">${item.description || 'No description'}</p>

                ${item.damage ? `<p class="text-xs text-red-600">Damage: ${item.damage}</p>` : ''}
                ${item.armor ? `<p class="text-xs text-blue-600">Armor: ${item.armor}</p>` : ''}
                ${item.effect ? `<p class="text-xs text-purple-600">Effect: ${getEffectDescription(item.effect)}</p>` : ''}
                ${item.value ? `<p class="text-xs text-green-600 mb-2">Value: ${item.value} gold</p>` : ''}

                <div class="flex gap-2 flex-wrap">
                    ${canEquip ? `<button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-green-600 hover:bg-green-700"  style="color: #D2B48C !important;" data-action="equip" data-index="${index}">Equip</button>` : ''}
                    ${isConsumable ? `<button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-blue-600 hover:bg-blue-700"  style="color: #D2B48C !important;" data-action="use" data-index="${index}">Use</button>` : ''}
                    <button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-yellow-600 hover:bg-yellow-700"  style="color: #D2B48C !important;" data-action="sell" data-index="${index}">Sell</button>
                    <button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-red-600 hover:bg-red-700" data-action="drop" data-index="${index}">Drop</button>
                </div>
            </div>
        </div>
    `;
}

function getRarityColor(rarity) {
    const colors = {
        'COMMON': 'bg-gray-200 text-gray-800',
        'UNCOMMON': 'bg-green-200 text-green-800',
        'RARE': 'bg-blue-200 text-blue-800',
        'EPIC': 'bg-purple-200 text-purple-800',
        'LEGENDARY': 'bg-yellow-200 text-yellow-800',
        'ARTIFACT': 'bg-red-200 text-red-800'
    };
    return colors[rarity] || colors['COMMON'];
}

function getEffectDescription(effect) {
    if (!effect) return 'Unknown effect';

    if (effect.type === 'heal') {
        return `Heals ${effect.amount || 'a moderate amount of'} HP`; // Added fallback for amount
    }
    if (effect.type === 'mana') {
        return `Restores ${effect.amount || 'a moderate amount of'} mana`; // Added fallback for amount
    }
    if (effect.type === 'buff') {
        if (effect.status && typeof statusEffects !== 'undefined' && statusEffects[effect.status]) {
            // This is a named status effect like "swift"
            const statusDef = statusEffects[effect.status];
            let description = statusDef.name || effect.status.charAt(0).toUpperCase() + effect.status.slice(1); // Use defined name or capitalize status
            if (effect.duration) {
                description += ` for ${effect.duration}s`;
            }
            // Optionally, you could append statusDef.description here if you want more detail, e.g.
            // description += ` (${statusDef.description})`;
            return description; // Example: "Swift for 120s"
        } else if (effect.amount && effect.stat) {
            // This handles direct stat buffs like {type: "buff", amount: 2, stat: "strength", duration: 60}
            return `+${effect.amount} ${effect.stat}${effect.duration ? ` for ${effect.duration}s` : ''}`;
        } else if (effect.description) {
            // If the effect object itself has a description property
            return effect.description;
        } else {
            // Generic fallback for buff type
            return `A temporary buff${effect.duration ? ` for ${effect.duration}s` : ''}.`;
        }
    }
    if (effect.type === 'status') {
        // This was likely intended for items that apply a status from the item.effects array
        // but can also be a fallback if item.effect itself is {type: "status", effect: "some_effect_name"}
        let statusName = effect.effect || effect.status || 'Unknown status'; // Try to get the status name
        return `Applies ${statusName.replace(/_/g, ' ')}${effect.duration ? ` for ${effect.duration}s` : ''}`;
    }

    // Fallback if no specific type matches but effect.description exists
    if (effect.description) {
        return effect.description;
    }

    return 'Special effect'; // Generic fallback for any other case
}

function getRelationshipColor(status) {
    const colors = {
        'hostile': 'text-red-600',
        'unfriendly': 'text-red-400',
        'neutral': 'text-gray-600',
        'friendly': 'text-green-400',
        'allied': 'text-green-600',
        'romantic': 'text-pink-500'
    };
    return colors[status] || colors['neutral'];
}

function calculateEquipmentBonuses() {
    const bonuses = {
        strength: 0, dexterity: 0, intelligence: 0,
        constitution: 0, wisdom: 0, charisma: 0,
        attack: 0, defense: 0, damage: 0
    };

    if (!player || !player.equipment) return bonuses;

    Object.values(player.equipment).forEach(item => {
        if (!item) return;

        // Check for stat bonuses
        if (item.statBonus) {
            Object.entries(item.statBonus).forEach(([stat, bonus]) => {
                if (bonuses.hasOwnProperty(stat)) {
                    bonuses[stat] += bonus;
                }
            });
        }

        // Add defense bonus
        if (item.defense) {
            bonuses.defense += Number(item.defense) || 0;
        }

        // Add damage bonus
        if (item.damage) {
            bonuses.damage += Number(item.damage) || 0;
        }

        // Check for effects that provide stat bonuses
        if (item.effects && Array.isArray(item.effects)) {
            item.effects.forEach(effect => {
                if (effect.includes('strength_boost')) bonuses.strength += 1;
                if (effect.includes('dexterity_boost')) bonuses.dexterity += 1;
                if (effect.includes('intelligence_boost')) bonuses.intelligence += 1;
                if (effect.includes('constitution_boost')) bonuses.constitution += 1;
                if (effect.includes('wisdom_boost')) bonuses.wisdom += 1;
                if (effect.includes('charisma_boost')) bonuses.charisma += 1;
            });
        }
    });

    return bonuses;
}

function buildStatsGrid(baseStats, equipmentBonuses) {
    let gridHTML = '<div class="grid grid-cols-1 gap-1 text-sm">';
    const statNames = ['strength', 'dexterity', 'intelligence', 'constitution', 'wisdom', 'charisma'];

    statNames.forEach(statName => {
        const baseStatValue = baseStats[statName] || 10;
        const equipBonusValue = equipmentBonuses[statName] || 0;
        const totalStat = baseStatValue + equipBonusValue;
        const modifier = Math.floor((totalStat - 10) / 2);
        const modifierSign = modifier >= 0 ? '+' : '';
        const statDisplayName = statName.charAt(0).toUpperCase() + statName.slice(1);

        gridHTML += `
            <div class="flex justify-between items-center py-1 border-b border-amber-700/20">
                <span class="font-semibold">${statDisplayName}:</span>
                <div class="text-right">
                    <span class="font-bold">${totalStat}</span>
                    <span class="text-xs text-amber-600">(${modifierSign}${modifier})</span>
                    ${equipBonusValue !== 0 ? `<span class="text-xs text-blue-500 ml-1">[${equipBonusValue > 0 ? '+' : ''}${equipBonusValue} equip]</span>` : ''}
                </div>
            </div>
        `;
    });

    // Add combat stats if available in equipmentBonuses
    if (equipmentBonuses.defense > 0) {
        gridHTML += `
            <div class="flex justify-between items-center py-1 border-b border-amber-700/20">
                <span class="font-semibold">Armor Bonus:</span>
                <span class="font-bold">+${equipmentBonuses.defense}</span>
            </div>
        `;
    }

    if (equipmentBonuses.damage > 0) {
        gridHTML += `
            <div class="flex justify-between items-center py-1 border-b border-amber-700/20">
                <span class="font-semibold">Damage Bonus:</span>
                <span class="font-bold">+${equipmentBonuses.damage}</span>
            </div>
        `;
    }

    gridHTML += '</div>';
    return gridHTML;
}

function buildAlignmentDisplay() {
    AlignmentSystem.initializeAlignment(player);
    const alignmentInfo = AlignmentSystem.getAlignmentDisplayInfo(player);

    return `
        <div class="grid grid-cols-1 gap-2 text-sm">
            <div class="flex justify-between items-center py-2 border-b border-amber-700/20">
                <span class="font-semibold">Alignment:</span>
                <span class="font-bold ${alignmentInfo.color}">${alignmentInfo.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-amber-700/20">
                <span class="font-semibold">Moral Score:</span>
                <span class="font-bold">${alignmentInfo.score >= 0 ? '+' : ''}${alignmentInfo.score}</span>
            </div>
            <div class="py-2">
                <p class="text-xs italic text-amber-700">${alignmentInfo.description}</p>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div>
                    <strong>NPC Trust:</strong> ${alignmentInfo.modifier.npcTrustModifier >= 0 ? '+' : ''}${alignmentInfo.modifier.npcTrustModifier}
                </div>
                <div>
                    <strong>Shop Prices:</strong> ${Math.round((alignmentInfo.modifier.shopPriceModifier - 1) * 100)}%
                </div>
                <div>
                    <strong>Quest Rewards:</strong> ${Math.round((alignmentInfo.modifier.questRewardModifier - 1) * 100)}%
                </div>
                <div>
                    <strong>Assessments:</strong> ${player.alignment?.totalAssessments || 0}
                </div>
            </div>
        </div>
    `;
}

// Item action functions
function equipItem(itemIndex) {
    // --- Start of Debugging Logs ---
    console.log("--- equipItem called ---");
    console.log("Item index:", itemIndex);
    if (!player.inventory || !player.inventory[itemIndex]) {
        displayMessage("Item not found in inventory at index: " + itemIndex, 'error');
        console.error("Item not found in inventory at index:", itemIndex, "Current inventory:", JSON.stringify(player.inventory));
        return;
    }
    const item = player.inventory[itemIndex];
    console.log("Item to equip:", JSON.stringify(item, null, 2));
    console.log("Current player.equipment state:", JSON.stringify(player.equipment, null, 2));
    // --- End of Debugging Logs ---

    if (!item.slot) {
        displayMessage("This item cannot be equipped (no slot defined).", 'error');
        return;
    }

    // Initialize equipment object and slots if they don't exist
    if (!player.equipment) {
        player.equipment = {};
    }
    const defaultSlots = { head: null, chest: null, hands: null, legs: null, feet: null, mainHand: null, offHand: null, amulet: null, ring1: null, ring2: null };
    for (const slotKey in defaultSlots) {
        if (player.equipment[slotKey] === undefined) {
            player.equipment[slotKey] = null;
        }
    }

    let targetSlot = item.slot; // Default targetSlot is the item's defined slot

    // Special handling for rings to find an available slot or replace ring1
    if (item.type === 'jewelry' && (item.slot === 'ring' || item.slot === 'ring1' || item.slot === 'ring2')) { // More specific check for rings
        console.log("Processing as a ring. Item slot:", item.slot);
        console.log("ring1 currently:", player.equipment.ring1 ? player.equipment.ring1.name : "Empty");
        console.log("ring2 currently:", player.equipment.ring2 ? player.equipment.ring2.name : "Empty");

        if (player.equipment.ring1 === null) {
            targetSlot = 'ring1';
            console.log("Targeting empty ring1 slot.");
        } else if (player.equipment.ring2 === null) {
            targetSlot = 'ring2';
            console.log("Targeting empty ring2 slot.");
        } else {
            // Both slots are full, default to replacing ring1
            targetSlot = 'ring1';
            displayMessage("Both ring slots are full. Replacing the ring in the first slot.", "info");
            console.log("Both ring slots full. Targeting ring1 for replacement.");
        }
    } else {
        console.log(`Item is not a ring or has a specific non-ring slot. Target slot: ${targetSlot}`);
    }

    // Check if the targetSlot is valid in player.equipment
    if (!player.equipment.hasOwnProperty(targetSlot)) {
        displayMessage(`Cannot equip: Invalid target slot '${targetSlot}' on player equipment object.`, 'error');
        console.error(`Invalid target slot: ${targetSlot}. Player equipment keys: ${Object.keys(player.equipment)}`);
        return;
    }

    // Unequip existing item in the targetSlot if there is one
    if (player.equipment[targetSlot] !== null) {
        const oldItem = player.equipment[targetSlot];
        if (!player.inventory) player.inventory = []; // Ensure inventory array exists
        player.inventory.push(oldItem);
        displayMessage(`Unequipped ${oldItem.name} from ${targetSlot}.`, 'info');
        console.log(`Unequipped ${oldItem.name} from ${targetSlot}.`);
    }

    // Equip the new item
    player.equipment[targetSlot] = item;
    player.inventory.splice(itemIndex, 1); // Remove equipped item from inventory

    displayMessage(`Equipped ${item.name} in ${targetSlot}!`, 'success');
    console.log(`Equipped ${item.name} in ${targetSlot}.`);

    // Apply item effects
    if (item.effects && item.effects.length > 0) { // Check effects array has content
        if (typeof ItemManager !== 'undefined' && typeof ItemManager.applyItemEffects === 'function') {
            ItemManager.applyItemEffects(player, item);
        } else if (typeof window.ItemManager !== 'undefined' && typeof window.ItemManager.applyItemEffects === 'function') {
            window.ItemManager.applyItemEffects(player, item); // Fallback to window if needed
        }
    }

    updatePlayerStatsDisplay();
    displayInventory(); // Refresh inventory display
}

function unequipItem(slot) {
    if (!player.equipment[slot]) {
        displayMessage("No item equipped in that slot.", 'error');
        return;
    }

    const item = player.equipment[slot];

    // Ensure inventory array exists
    if (!player.inventory) {
        player.inventory = [];
    }

    // Move item back to inventory
    player.inventory.push(item);
    player.equipment[slot] = null;

    displayMessage(`Unequipped ${item.name}.`, 'success');
    updatePlayerStatsDisplay();
    displayInventory(); // Refresh display
}

function useItem(itemIndex) {
    if (!player.inventory || !player.inventory[itemIndex]) {
        displayMessage("Item not found.", 'error');
        return;
    }

    const item = player.inventory[itemIndex];

    // Check if item is consumable
    if (item.type !== 'consumable' && !item.effect) {
        displayMessage("This item cannot be used.", 'error');
        return;
    }

    // Apply item effects
    let effectApplied = false;

    if (item.effect) {
        if (item.effect.type === 'heal') {
            const healAmount = item.effect.amount || 30;
            const oldHp = player.hp;
            player.hp = Math.min(player.maxHp, player.hp + healAmount);
            const actualHeal = player.hp - oldHp;
            displayMessage(`You used ${item.name} and recovered ${actualHeal} HP.`, 'success');
            effectApplied = true;
        } else if (item.effect.type === 'mana') {
            displayMessage(`You used ${item.name} and feel your magical energy restored.`, 'success');
            effectApplied = true;
        } else if (window.ItemManager && typeof ItemManager.applyItemEffects === 'function') {
            const result = ItemManager.applyItemEffects(player, item);
            if (result.success) {
                displayMessage(result.message, 'success');
                effectApplied = true;
            }
        }
    }

    if (effectApplied) {
        // Remove item from inventory after use
        player.inventory.splice(itemIndex, 1);
        updatePlayerStatsDisplay();
        displayInventory(); // Refresh display
    } else {
        displayMessage("The item has no effect.", 'info');
    }
}

function sellItem(itemIndex) {
    if (!player.inventory || !player.inventory[itemIndex]) {
        displayMessage("Item not found.", 'error');
        return;
    }

    const item = player.inventory[itemIndex];
    const sellValue = Math.floor((item.value || 10) * 0.6); // Sell for 60% of value

    if (confirm(`Sell ${item.name} for ${sellValue} gold?`)) {
        player.inventory.splice(itemIndex, 1);
        updateGold(sellValue, 'item sale');
        displayMessage(`Sold ${item.name} for ${sellValue} gold.`, 'success');
        displayInventory(); // Refresh display
    }
}

function dropItem(itemIndex) {
    if (!player.inventory || !player.inventory[itemIndex]) {
        displayMessage("Item not found.", 'error');
        return;
    }

    const item = player.inventory[itemIndex];

    if (confirm(`Drop ${item.name}? This item will be lost forever.`)) {
        player.inventory.splice(itemIndex, 1);
        displayMessage(`Dropped ${item.name}.`, 'info');
        displayInventory(); // Refresh display
    }
}

async function appraiseItem(itemIndex) {
    if (!player.inventory || !player.inventory[itemIndex]) {
        displayMessage("Item not found for appraisal.", 'error');
        return;
    }

    const itemToAppraise = player.inventory[itemIndex];

    if (!itemToAppraise.unidentified) {
        displayMessage("This item is already identified.", 'info');
        return;
    }

    displayMessage(`You focus on the mysterious item, trying to discern its properties...`, 'info');

    try {
        // Generate a new, random item to replace the placeholder
        const newItem = await ItemGenerator.generateItem({
            playerLevel: player.level,
            playerClass: player.class,
            locationContext: player.currentLocation
        });

        if (newItem) {
            player.inventory[itemIndex] = newItem; // Replace the placeholder with the new item
            displayMessage(`The item's true nature is revealed! You have identified: <strong>${newItem.name}</strong>!`, 'success');
            ItemManager.saveInventoryToStorage(player);
            displayInventory(); // Refresh the inventory UI
        } else {
            throw new Error("Item generation failed during appraisal.");
        }
    } catch (error) {
        console.error("Error during item appraisal:", error);
        displayMessage("You couldn't quite figure out what the item is. Perhaps try again later.", "error");
    }
}

async function applyAbilityEffects(abilityName, abilityDef) {
    if (!abilityDef) {
        displayMessage(`The ability "${abilityName}" is not defined correctly.`, 'error');
        return;
    }

    displayMessage(`${abilityDef.description}`, 'success');

    // Creates a generic AI prompt to describe the outcome of the ability.
    const effectPrompt = `
        The player ${player.name} uses the ability: "${abilityName}".
        Ability Description: "${abilityDef.description}".
        Current situation: ${getConversationContext().slice(-500)}

        Describe the outcome of this action in a dramatic and engaging way (1-2 sentences).`;

    const outcome = await callGeminiAPI(effectPrompt);
    if (outcome) {
        displayMessage(outcome, 'success');
        addToConversationHistory('assistant', outcome);
    }

    // Example of specific mechanics for abilities
    if (abilityDef.effect?.damage && player.currentEnemy) {
        const damage = rollDice(abilityDef.effect.damage);
        player.currentEnemy.hp -= damage;
        displayMessage(`Your ${abilityName} deals an extra ${damage} damage to ${player.currentEnemy.name}!`, 'combat');
    }
    if (abilityDef.effect?.condition && player.currentEnemy) {
        displayMessage(`${player.currentEnemy.name} is now ${abilityDef.effect.condition}!`, 'combat');
    }

    updatePlayerStatsDisplay();
}

// Add this new function to handle using a spell or ability
async function useAbilityOrSpell(type, name) {
    console.log(`Attempting to use ${type}: ${name}`);
    const skillsInterface = document.getElementById('skills-interface');
    skillsInterface.classList.add('hidden'); // Close the interface after selection

    let effectResult;
    let definition;

    if (type === 'spell' || type === 'cantrip') {
        definition = spellDefinitions[name];
        if (!definition) {
            displayMessage(`Definition for spell "${name}" not found.`, 'error');
            return;
        }

        // Basic spell casting logic
        const spellPrompt = `The player ${player.name} casts the ${type} "${name}".
        Spell Description: "${definition.description}".
        Current situation: ${getConversationContext().slice(-500)}
        Describe the outcome of casting this spell in a dramatic and engaging way (2-3 sentences).`;

        const outcome = await callGeminiAPI(spellPrompt);
        if (outcome) {
            displayMessage(outcome, 'success');
            addToConversationHistory('assistant', outcome);
        } else {
            displayMessage(`You cast ${name}, and arcane energy fills the air.`, 'info');
        }

    } else if (type === 'ability') {
        definition = abilityDefinitions[name];
        effectResult = CharacterManager.useAbility(player, name);
        if (effectResult.success) {
            await applyAbilityEffects(name, definition);
        } else {
            displayMessage(effectResult.message, 'error');
        }

    } else if (type === 'feat') {
        definition = featDefinitions[name];
        displayMessage(`You focus on your training in "${name}". (${definition.description})`, 'info');
        // Feats are often passive, but could have an active component in the future.
    } else {
        displayMessage(`Unknown action type: ${type}`, 'error');
        return;
    }

    saveGame();
}

// Add this new function to display the skills/abilities interface
function displaySkillsAndAbilities() {
    console.log("--- displaySkillsAndAbilities function called ---"); // <<< ADD THIS LINE
    const skillsInterface = document.getElementById('skills-interface');
    const skillsListDisplay = document.getElementById('skills-list');
    if (!skillsInterface || !skillsListDisplay) {
        displayMessage("UI elements for skills are missing.", "error");
        return;
    }

    // Hide other interfaces
    const interfacesToHide = ['shop-interface', 'inventory-interface', 'quest-interface', 'background-interface', 'progression-interface'];
    interfacesToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
    });

    const progression = CharacterManager.getCharacterProgression(player);
    console.log("Player progression data:", progression); // <<< ADD THIS LINE

    if (!progression) {
        displayMessage("Could not retrieve character progression.", "error");
        return;
    }

    let skillsHTML = '';

    // Helper to create a list section with robust onclick handlers
    const createSection = (title, items, type) => {
        if (!items || items.length === 0) return '';
        let sectionHTML = `<h5 class="font-bold mb-2 text-amber-700 text-lg">${title}</h5><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">`;
        items.forEach(item => {
            const definition = item.definition || {};
            // Safely escape the parameters for the onclick attribute using JSON.stringify
            const typeParam = JSON.stringify(type);
            const nameParam = JSON.stringify(item.name);
            sectionHTML += `
                <button onclick='useAbilityOrSpell(${typeParam}, ${nameParam})' class="btn-parchment text-left p-3">
                    <p class="font-bold">${item.name}</p>
                    <p class="text-xs text-amber-800">${definition.description || 'No description available.'}</p>
                </button>
            `;
        });
        sectionHTML += `</div>`;
        return sectionHTML;
    };

    skillsHTML += createSection('Spells', progression.spells.known, 'spell');
    skillsHTML += createSection('Cantrips', progression.cantrips, 'cantrip');
    skillsHTML += createSection('Abilities', progression.abilities, 'ability');
    skillsHTML += createSection('Feats', progression.feats, 'feat');

    if (skillsHTML.trim() === '') {
        skillsHTML = '<p class="text-center text-gray-600">You have no special skills or abilities to use at this time.</p>';
    }

    skillsListDisplay.innerHTML = skillsHTML;
    skillsInterface.classList.remove('hidden');
}


//async function generateCharacterPortrait() {
//This function was modified above to accept charName, charGender, charClass, charBackground
//No further changes needed here, but the old version is presented for context of the diff.
//The actual change will be applied to the already modified generateCharacterPortrait function.
//This is just to ensure the diff tool has the correct "SEARCH" block.
//The following is the OLD generateCharacterPortrait function, which will be replaced by the new one.
//This is the old generateCharacterPortrait function:
//}
async function generateCharacterPortraitOld() {
    const portraitContainer = document.getElementById('portrait-container');
    const generateBtn = document.getElementById('generate-portrait-btn');

    if (player.portraitUrl) {
        displayMessage("A portrait has already been generated for this character.", 'info');
        return;
    }

    if (generateBtn) {
        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';
    }

    // Construct a highly detailed prompt for the AI
    const prompt = `A highly detailed fantasy art portrait of a character named ${player.name}.
    Gender: ${player.gender}.
    Class: ${player.class}.
    Appearance details based on their background: ${player.background}.
    The style should be a realistic fantasy portrait, with dramatic lighting, focusing on the character's face and upper body.
    The background should be atmospheric and relevant to their story.`;

    try {
        const response = await fetch('https://ainovel.site/api/generate-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: prompt,
                seed: 12345, // Consistent seed for similar style
                imageSize: 'portrait_4_3',
                numInferenceSteps: 70,
                guidanceScale: 10
            }),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const result = await response.json();

        if (result.imageUrl) {
            player.portraitUrl = result.imageUrl;
            portraitContainer.innerHTML = `<img src="${player.portraitUrl}" alt="Character Portrait of ${player.name}" class="character-portrait">`;
            displayMessage("Character portrait generated successfully!", 'success');
            if (generateBtn) {
                generateBtn.classList.add('hidden'); // Hide button after generation
            }
            saveGame(); // Save the new portrait URL
        } else {
            throw new Error("API did not return an image URL.");
        }

    } catch (error) {
        console.error('Error generating character portrait:', error);
        displayMessage("Failed to generate character portrait. Please try again later.", 'error');
        if (generateBtn) {
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate Portrait';
        }
    }
}


function displayCharacterBackground() {
    // Hide other interfaces
    const interfacesToHide = ['shop-interface', 'inventory-interface', 'skills-interface', 'quest-interface', 'progression-interface'];
    interfacesToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
    });

    displayMessage("Reviewing your character background...", 'info');

    const backgroundInterface = document.getElementById('background-interface');
    if (backgroundInterface) {
        backgroundInterface.classList.remove('hidden');
    } else {
        console.error("backgroundInterface element not found!");
        return; // Exit if the main container isn't found
    }

    const backgroundContentDisplay = document.getElementById('background-content');
    if (!backgroundContentDisplay) {
        console.error("backgroundContentDisplay element not found!");
        return; // Exit if the content display area isn't found
    }

    // --- Data Preparation for Stats ---
    // Ensure player and player.stats exist, providing defaults if not
    const baseStats = player && player.stats ? player.stats : {
        strength: 10, dexterity: 10, intelligence: 10,
        constitution: 10, wisdom: 10, charisma: 10
    };

    let statsGridHTML = "";
    // Check if the necessary helper functions for detailed stats exist
    if (typeof calculateEquipmentBonuses === 'function' && typeof buildStatsGrid === 'function') {
        const equipmentBonuses = calculateEquipmentBonuses(); // This function calculates bonuses from equipped items
        statsGridHTML = buildStatsGrid(baseStats, equipmentBonuses); // This function formats the stats into HTML
    } else {
        // Fallback to a simpler stats display if helper functions are missing
        console.warn("Detailed stats functions (calculateEquipmentBonuses or buildStatsGrid) missing. Using basic stats display.");
        statsGridHTML = '<div class="grid grid-cols-1 gap-1 text-sm">'; // Simpler grid
        const statNames = ['strength', 'dexterity', 'intelligence', 'constitution', 'wisdom', 'charisma'];
        statNames.forEach(statName => {
            const statValue = baseStats[statName] || 10;
            const modifier = Math.floor((statValue - 10) / 2);
            const modifierSign = modifier >= 0 ? '+' : '';
            const statDisplayName = statName.charAt(0).toUpperCase() + statName.slice(1);
            statsGridHTML += `
                <div class="flex justify-between items-center py-1 border-b border-amber-700/20">
                    <span class="font-semibold">${statDisplayName}:</span>
                    <span class="font-bold">${statValue} (${modifierSign}${modifier})</span>
                </div>`;
        });
        statsGridHTML += '</div>';
    }

    // --- Data Preparation for Relationships ---
    let relationshipsHTML = "";
    if (player.relationships && Object.keys(player.relationships).length > 0) {
        // Sort relationships by last interaction (most recent first) and take only the first 5
        const sortedRelationships = Object.entries(player.relationships)
            .filter(([npcName, relationship]) => relationship && typeof relationship === 'object')
            .sort(([, a], [, b]) => {
                const aTime = a.lastInteraction || 0;
                const bTime = b.lastInteraction || 0;
                return bTime - aTime; // Most recent first
            })
            .slice(0, 5); // Take only the first 5

        if (sortedRelationships.length > 0) {
            relationshipsHTML = '<div class="grid grid-cols-1 gap-4 text-sm">';

            // Add header showing count
            if (Object.keys(player.relationships).length > 5) {
                relationshipsHTML += `<p class="text-xs text-gray-500 italic mb-2">Showing 5 most recent relationships (${Object.keys(player.relationships).length} total)</p>`;
            }

            sortedRelationships.forEach(([npcName, relationship]) => {
                const status = relationship.status || 'neutral';
                const relationshipColor = getRelationshipColor(status);
                const trust = relationship.trust || 0;
                const trustBar = Math.max(0, Math.min(100, trust));
                const interactions = relationship.interactions || 0;
                const metAt = relationship.metAt || 'Unknown location';
                const firstMeeting = relationship.firstMeeting || 'Some time ago';
                const description = relationship.description || 'A person you\'ve encountered.';

                relationshipsHTML += `
                    <div class="parchment-box p-3 border border-amber-700/30 rounded">
                        <div class="flex justify-between items-start mb-2">
                            <div class="flex-grow">
                                <h6 class="font-bold text-base">${npcName}</h6>
                                <span class="text-xs ${relationshipColor} font-semibold">(${status.charAt(0).toUpperCase() + status.slice(1)})</span>
                            </div>
                            <div class="text-right">
                                <span class="text-xs text-gray-600">Trust: ${trust}/100</span>
                                <div class="w-24 bg-gray-200 rounded-full h-2 mt-1">
                                    <div class="bg-green-500 h-2 rounded-full transition-all duration-300" style="width: ${trustBar}%"></div>
                                </div>
                            </div>
                        </div>
                        
                        <p class="text-xs text-amber-700 mb-2 italic">${description}</p>
                        
                        <div class="grid grid-cols-2 gap-2 text-xs text-gray-600">
                            <div>
                                <strong>First met:</strong><br>
                                ${firstMeeting}
                            </div>
                            <div>
                                <strong>Interactions:</strong><br>
                                ${interactions} times
                            </div>
                            <div class="col-span-2">
                                <strong>Last seen:</strong><br>
                                ${relationship.lastInteraction ? new Date(relationship.lastInteraction).toLocaleDateString() : 'Recently'}
                            </div>
                        </div>
                    </div>`;
            });
            relationshipsHTML += '</div>';
        } else {
            relationshipsHTML = '<p class="text-sm text-gray-600 italic">No valid relationships found.</p>';
        }
    } else {
        relationshipsHTML = '<p class="text-sm text-gray-600 italic">No relationships established yet.</p>';
    }

    // Build the portrait section
    let portraitSectionHTML = `
        <div id="portrait-section" class="text-center my-4">
            <div id="portrait-container" class="w-full max-w-sm mx-auto parchment-box p-2">`;

    if (player.portraitUrl) {
        portraitSectionHTML += `<img src="${player.portraitUrl}" alt="Character Portrait of ${player.name}" class="character-portrait">`;
    } else {
        portraitSectionHTML += `<p class="text-amber-700">No portrait generated yet.</p>`;
    }

    portraitSectionHTML += `</div>`;

    if (!player.portraitUrl) {
        portraitSectionHTML += `<button id="generate-portrait-btn" class="btn-parchment mt-4">Generate Portrait</button>`;
    }

    portraitSectionHTML += `</div>`;

    // --- Constructing the innerHTML for backgroundContentDisplay ---
    backgroundContentDisplay.innerHTML = `
        <div class="parchment-box p-4">

            <h5 class="font-bold text-2xl mb-3 text-center text-amber-800">${player.name || 'Character Name'}</h5>
            ${portraitSectionHTML}
            <div class="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
                <p><strong>Class:</strong> ${player.class || 'N/A'}</p>
                <p><strong>Level:</strong> ${player.level || 1}</p>
                <p><strong>Gender:</strong> ${player.gender || 'N/A'}</p>
                <p><strong>HP:</strong> ${player.hp !== undefined ? player.hp : 'N/A'} / ${player.maxHp !== undefined ? player.maxHp : 'N/A'}</p>
                <p><strong>XP:</strong> ${player.exp !== undefined ? player.exp : 0} / ${player.expToNextLevel !== undefined ? player.expToNextLevel : 100}</p>
                <p><strong>Gold:</strong> ${player.gold !== undefined ? player.gold : 0}</p>
            </div>

            <div class="mt-4 pt-4 border-t border-amber-700/30">
                <h6 class="font-bold text-lg mb-2 text-amber-700">Character Statistics</h6>
                ${statsGridHTML}
            </div>

            <div class="mt-4 pt-4 border-t border-amber-700/30">
                <h6 class="font-bold text-lg mb-2 text-amber-700">Moral Alignment</h6>
                ${buildAlignmentDisplay()}
            </div>

            <div class="mt-4 pt-4 border-t border-amber-700/30">
                <h6 class="font-bold text-lg mb-2 text-amber-700">Relationships</h6>
                ${relationshipsHTML}
            </div>

            <div class="mt-4 pt-4 border-t border-amber-700/30">
                <h6 class="font-bold text-lg mb-2 text-amber-700">Background Story</h6>
                <p class="italic text-sm leading-relaxed">${player.background || 'No background story available.'}</p>
            </div>
        </div>
    `;

    // Portrait button event listener is handled globally via event delegation

}

// IMPORTANT: Ensure the helper functions calculateEquipmentBonuses() and buildStatsGrid()
// are defined in your script.js and are working correctly.
// If they are missing, the fallback basic stats display will be used.

// Example structure for calculateEquipmentBonuses (if you need to re-add/verify):
/*
function calculateEquipmentBonuses() {
    const bonuses = { strength: 0, dexterity: 0, intelligence: 0, constitution: 0, wisdom: 0, charisma: 0, attack: 0, defense: 0, damage: 0 };
    if (!player || !player.equipment) return bonuses;

    Object.values(player.equipment).forEach(item => {
        if (!item) return;
        if (item.statBonus) {
            Object.entries(item.statBonus).forEach(([stat, bonus]) => {
                if (bonuses.hasOwnProperty(stat)) bonuses[stat] += bonus;
            });
        }
        if (item.defense) bonuses.defense += Number(item.defense) || 0;
        // Add other bonus calculations as needed (e.g., from item.effects)
    });
    return bonuses;
}
*/

// Example structure for buildStatsGrid (if you need to re-add/verify):
/*
function buildStatsGrid(baseStats, equipmentBonuses) {
    let gridHTML = '<div class="grid grid-cols-1 gap-1 text-sm">';
    const statNames = ['strength', 'dexterity', 'intelligence', 'constitution', 'wisdom', 'charisma'];

    statNames.forEach(statName => {
        const baseStatValue = baseStats[statName] || 10;
        const equipBonusValue = equipmentBonuses[statName] || 0;
        const totalStat = baseStatValue + equipBonusValue;
        const modifier = Math.floor((totalStat - 10) / 2);
        const modifierSign = modifier >= 0 ? '+' : '';
        const statDisplayName = statName.charAt(0).toUpperCase() + statName.slice(1);

        gridHTML += `
            <div class="flex justify-between items-center py-1 border-b border-amber-700/20">
                <span class="font-semibold">${statDisplayName}:</span>
                <div class="text-right">
                    <span class="font-bold">${totalStat}</span>
                    <span class="text-xs text-amber-600">(${modifierSign}${modifier})</span>
                    ${equipBonusValue !== 0 ? `<span class="text-xs text-blue-500 ml-1">[${equipBonusValue > 0 ? '+' : ''}${equipBonusValue} equip]</span>` : ''}
                </div>
            </div>
        `;
    });
    // Add combat stats if available in equipmentBonuses
    if (equipmentBonuses.defense) {
         gridHTML += `<div class="flex justify-between items-center py-1 border-b border-amber-700/20"><span class="font-semibold">Armor Bonus:</span><span class="font-bold">${equipmentBonuses.defense}</span></div>`;
    }
    // Add more combat stats like attack bonus if calculated

    gridHTML += '</div>';
    return gridHTML;
}
*/

if (typeof window !== 'undefined') {
    window.equipItem = equipItem;
    window.unequipItem = unequipItem;
    window.useItem = useItem;
    window.sellItem = sellItem;
    window.dropItem = dropItem;
    window.appraiseItem = appraiseItem;
    window.useAbilityOrSpell = useAbilityOrSpell;
    window.displaySkillsAndAbilities = displaySkillsAndAbilities;
    // ... and any other functions called by inline HTML event handlers
    /* window.displayCharacterBackground = displayCharacterBackground;
    window.displayInventory = displayInventory;
    window.showShop = showShop;
    window.displayCharacterProgression = displayCharacterProgression;
    */
}
// Console function to fix inventory items missing slot properties
window.fixInventorySlots = function() {
    if (!player || !player.inventory) {
        console.log("No player or inventory found");
        return;
    }

    let fixedCount = 0;

    player.inventory.forEach(item => {
        if (!item.slot && item.type) {
            let newSlot = null;

            // Skip items that should never have slots
            if (item.type === 'consumable' || item.type === 'ammunition' || item.type === 'currency' || item.type === 'tool') {
                console.log(`Skipping ${item.name}: type '${item.type}' should not have a slot`);
                return;
            }

            // Determine slot based on item type and name
            if (item.type === 'jewelry') {
                if (item.name.toLowerCase().includes('ring')) {
                    newSlot = 'ring1';
                } else if (item.name.toLowerCase().includes('amulet') || item.name.toLowerCase().includes('necklace') || item.name.toLowerCase().includes('pendant')) {
                    newSlot = 'amulet';
                } else {
                    newSlot = 'ring1'; // Default jewelry to ring slot
                }
            } else if (item.type === 'weapon') {
                newSlot = 'mainHand';
            } else if (item.type === 'armor') {
                // Check item name for armor type
                const name = item.name.toLowerCase();
                if (name.includes('helmet') || name.includes('helm') || name.includes('cap') || name.includes('hood') || name.includes('circlet') || name.includes('crown')) {
                    newSlot = 'head';
                } else if (name.includes('chest') || name.includes('armor') || name.includes('mail') || name.includes('plate') || name.includes('robe') || name.includes('tunic') || name.includes('vest')) {
                    newSlot = 'chest';
                } else if (name.includes('gauntlet') || name.includes('glove') || name.includes('mitt')) {
                    newSlot = 'hands';
                } else if (name.includes('leg') || name.includes('pant') || name.includes('trouser') || name.includes('chap')) {
                    newSlot = 'legs';
                } else if (name.includes('boot') || name.includes('shoe') || name.includes('sandal')) {
                    newSlot = 'feet';
                } else if (name.includes('shield') || name.includes('buckler')) {
                    newSlot = 'offHand';
                } else {
                    newSlot = 'chest'; // Default armor to chest
                }
            } else {
                // For other types, try to guess from name - but be more careful
                const name = item.name.toLowerCase();

                // Skip ammunition items specifically
                if (name.includes('bolt') || name.includes('arrow') || name.includes('ammunition')) {
                    console.log(`Skipping ${item.name}: appears to be ammunition`);
                    return;
                }

                if (name.includes('ring') && !name.includes('bow')) {
                    newSlot = 'ring1';
                } else if (name.includes('amulet') || name.includes('necklace')) {
                    newSlot = 'amulet';
                } else if (name.includes('sword') || name.includes('axe') || name.includes('mace') || name.includes('staff') || name.includes('dagger')) {
                    newSlot = 'mainHand';
                } else if (name.includes('bow') && !name.includes('bolt') && !name.includes('elbow')) {
                    // Only match standalone bows, not crossbow bolts or other false matches
                    newSlot = 'mainHand';
                } else if (name.includes('shield')) {
                    newSlot = 'offHand';
                }
            }

            if (newSlot) {
                item.slot = newSlot;
                fixedCount++;
                console.log(`Fixed ${item.name}: added slot '${newSlot}'`);
            }
        }
    });

    if (fixedCount > 0) {
        console.log(`Fixed ${fixedCount} items with missing slots`);
        saveGame(); // Save the changes

        // Refresh inventory display if it's open
        if (!inventoryInterface.classList.contains('hidden')) {
            displayInventory();
        }
    } else {
        console.log("No items needed fixing");
    }

    return fixedCount;
};

console.log("Added fixInventorySlots() function. Run fixInventorySlots() in console to fix items missing slot properties.");

// In script.js, replace the entire final block of code with this

// --- FINALIZED SETTINGS MODAL LOGIC ---

// 1. Create the main Settings button, which will be visible on the screen
const settingsBtn = document.createElement('button');
settingsBtn.id = 'settings-btn';
settingsBtn.className = 'btn-parchment bg-gray-600 hover:bg-gray-700 text-white text-xs md:text-sm py-1 px-2';
settingsBtn.style.cssText = `position: fixed; top: 10px; right: 10px; z-index: 40;`;
settingsBtn.innerHTML = '<span>⚙️ Settings</span>';
settingsBtn.title = 'Open Game Settings';

// 2. Find the container inside the modal where the action buttons will go
const settingsActionsContainer = document.getElementById('settings-actions-container');

// 3. Create the action buttons (we will add event listeners separately below)
removePortraitBtn.id = 'remove-portrait-btn';
removePortraitBtn.className = 'btn-parchment bg-red-600 hover:bg-red-700 text-white w-full';
removePortraitBtn.innerHTML = '<i class="ra ra-cancel mr-2"></i>Remove Portrait';

resetProgressionBtn.id = 'reset-progression-btn';
resetProgressionBtn.className = 'btn-parchment bg-orange-600 hover:bg-orange-700 text-white w-full';
resetProgressionBtn.innerHTML = '<i class="ra ra-recycle mr-2"></i>Reset Progression';

illustrationToggle.id = 'illustration-mode-toggle';
illustrationToggle.className = 'btn-parchment bg-indigo-600 hover:bg-indigo-700 text-white w-full';
illustrationToggle.title = 'Toggle illustration mode for scenery images';

richTextToggle.className = 'btn-parchment rich-text-toggle bg-purple-600 hover:bg-purple-700 text-white w-full';
richTextToggle.title = 'Toggle rich text styling for game messages';

// 4. Append all buttons to their correct places
document.body.appendChild(settingsBtn);

if (settingsActionsContainer) {
    settingsActionsContainer.appendChild(removePortraitBtn);
    settingsActionsContainer.appendChild(resetProgressionBtn);
    settingsActionsContainer.appendChild(illustrationToggle);
    settingsActionsContainer.appendChild(richTextToggle);
}

// 5. Add ALL event listeners inside DOMContentLoaded to ensure elements exist
// --- REFINED SETTINGS MODAL LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    // Load existing settings first
    loadSettings();

    // Find modal elements
    const modal = document.getElementById('settings-modal');
    const closeBtn = document.getElementById('settings-modal-close-btn');
    const modelSelect = document.getElementById('gemini-model-select');
    const apiKeyInput = document.getElementById('gemini-api-key-input');
    const settingsActionsContainer = document.getElementById('settings-actions-container');

    // Create action buttons FOR THE MODAL LOCALLY to avoid conflicts
    const removePortraitBtn = document.createElement('button');
    removePortraitBtn.className = 'btn-parchment bg-red-600 hover:bg-red-700 text-white w-full';
    removePortraitBtn.innerHTML = '<i class="ra ra-cancel mr-2"></i>Remove Portrait';

    const resetProgressionBtn = document.createElement('button');
    resetProgressionBtn.className = 'btn-parchment bg-orange-600 hover:bg-orange-700 text-white w-full';
    resetProgressionBtn.innerHTML = '<i class="ra ra-recycle mr-2"></i>Reset Progression';

    const illustrationToggleBtn = document.createElement('button');
    illustrationToggleBtn.title = 'Toggle illustration mode for scenery images';

    const richTextToggleBtn = document.createElement('button');
    richTextToggleBtn.id = 'rich-text-toggle'; // Keep original ID for other functions
    richTextToggleBtn.title = 'Toggle rich text styling for game messages';

    // Append action buttons to their container in the modal
    if (settingsActionsContainer) {
        settingsActionsContainer.innerHTML = ''; // Clear container to prevent duplicates on hot reload
        settingsActionsContainer.appendChild(removePortraitBtn);
        settingsActionsContainer.appendChild(resetProgressionBtn);
        settingsActionsContainer.appendChild(illustrationToggleBtn);
        settingsActionsContainer.appendChild(richTextToggleBtn);
    }

    // --- Helper functions to keep button UI in sync ---
    const updateIllustrationButton = () => {
        if (isIllustrationModeActive) {
            illustrationToggleBtn.innerHTML = '🖼️ Illustration Mode: ON';
            illustrationToggleBtn.className = 'btn-parchment bg-green-600 hover:bg-green-700 text-white w-full';
        } else {
            illustrationToggleBtn.innerHTML = '🖼️ Illustration Mode: OFF';
            illustrationToggleBtn.className = 'btn-parchment bg-indigo-600 hover:bg-indigo-700 text-white w-full';
        }
    };

    // Use the existing global `updateRichTextToggle` function, but ensure it targets the correct button if needed.
    // The original `updateRichTextToggle` uses `getElementById`, which is fine as we've kept the ID.

    // --- Initialize button states on load ---
    updateIllustrationButton();
    updateRichTextToggle(); // This will find and update the richTextToggleBtn by its ID

    // --- Add Event Listeners ---
    settingsBtn.addEventListener('click', () => modal.classList.remove('hidden'));
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });

    modelSelect.addEventListener('change', (e) => {
        gameSettings.model = e.target.value;
        saveSettings();
    });
    apiKeyInput.addEventListener('input', (e) => {
        gameSettings.apiKey = e.target.value;
        saveSettings();
    });

    removePortraitBtn.addEventListener('click', () => {
        removeCharacterPortrait();
        modal.classList.add('hidden');
    });

    resetProgressionBtn.addEventListener('click', () => {
        resetCharacterProgression();
        modal.classList.add('hidden');
    });

    richTextToggleBtn.addEventListener('click', () => {
        toggleRichText(); // This global function handles the logic and calls updateRichTextToggle
    });

    illustrationToggleBtn.addEventListener('click', async () => {
        if (!isIllustrationModeActive) {
            if (player && player.portraitUrl && player.portraitUrl.trim() !== '') {
                isIllustrationModeActive = true;
                displayMessage("Illustration Mode Activated.", "info");
                updateIllustrationButton();
                await generateAndDisplaySceneryImage();
            } else {
                displayMessage("Cannot activate Illustration Mode without a character portrait.", "error");
            }
        } else {
            isIllustrationModeActive = false;
            displayMessage("Illustration Mode Deactivated.", "info");
            updateIllustrationButton();
        }
    });

    const donateBtn = document.getElementById('donate-btn');
    const donationModal = document.getElementById('donation-modal');
    const donationModalCloseBtn = document.getElementById('donation-modal-close-btn');
    const donationButtonsContainer = document.getElementById('donation-buttons-container');

    if (donateBtn && donationModal) {
        const donationAmounts = [1, 2, 5, 10, 20, 50, 75, 100];
        const venmoUsername = 'Stefan-Worldwide';

        // Create the donation buttons
        donationAmounts.forEach(amount => {
            const button = document.createElement('a');
            button.href = `https://venmo.com/${venmoUsername}?txn=pay&amount=${amount}&note=Supporting%20Shadowscale%20Chronicles`;
            button.target = '_blank'; // Open in a new tab
            button.rel = 'noopener noreferrer';
            button.className = 'btn-parchment bg-green-600 hover:bg-green-700 text-white text-lg';
            button.textContent = `$${amount}`;
            donationButtonsContainer.appendChild(button);
        });

        // Show the modal when the main donate button is clicked
        donateBtn.addEventListener('click', () => {
            donationModal.classList.remove('hidden');
        });

        // Hide the modal
        const closeDonationModal = () => {
            donationModal.classList.add('hidden');
        };

        donationModalCloseBtn.addEventListener('click', closeDonationModal);

        // Also close if the user clicks on the dark overlay
        donationModal.addEventListener('click', (event) => {
            if (event.target === donationModal) {
                closeDonationModal();
            }
        });
    }

    if (inventoryItemsDisplay) {
        inventoryItemsDisplay.addEventListener('click', function(event) {
            const button = event.target.closest('.inventory-action-btn');

            if (button) {
                const action = button.dataset.action;
                const itemIndexStr = button.dataset.index;
                const slot = button.dataset.slot;
                const itemIndex = itemIndexStr !== undefined ? parseInt(itemIndexStr, 10) : null;

                // ... (validation code remains the same) ...

                switch (action) {
                    // --- ADD THIS NEW CASE ---
                    case 'appraise':
                        if (itemIndex !== null) appraiseItem(itemIndex);
                        break;
                    // --- END OF NEW CASE ---
                    case 'use':
                        if (itemIndex !== null) ItemManager.useItem(player, itemIndex);
                        break;
                    case 'equip':
                        if (itemIndex !== null) ItemManager.equipItem(player, itemIndex);
                        break;
                    case 'sell':
                        if (itemIndex !== null) ItemManager.sellItem(player, itemIndex);
                        break;
                    case 'drop':
                        if (itemIndex !== null) ItemManager.dropItem(player, itemIndex);
                        break;
                    case 'unequip':
                        if (slot) {
                            ItemManager.unequipItem(player, slot);
                        } else {
                            console.error("Unequip action requires a slot, but it's missing.");
                            displayMessage("Error: Slot not found for unequip action.", "error");
                        }
                        break;
                    default:
                        console.warn('Unknown inventory action:', action);
                }
            }
        });
        console.log("✓ Event delegation setup for inventory items.");
    }

});