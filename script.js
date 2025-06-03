// Import game data assets
import { gameData, GameDataManager } from './assets/game-data-loader.js';
import { CharacterManager } from './game-logic/character-manager.js';
import { classProgression, spellDefinitions, abilityDefinitions } from './game-logic/class-progression.js';
import { GameActions } from './game-logic/game-actions.js'; // Import GameActions
import LocationManager from './game-logic/location-manager.js';
import { ItemGenerator, ItemManager, itemCategories, itemRarity, statusEffects } from './assets/world-items.js';

const GEMINI_API_KEY = 'AIzaSyDIFeql6HUpkZ8JJlr_kuN0WDFHUyOhijA'; // Replace with your actual Gemini API Key
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

// Game State
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
        ring2: null
    },
    skills: [],
    abilities: [],
    quests: [],
    currentLocation: 'Pedena Town Square',
    currentEnemy: null // For combat
};

// NPC Persistence System
let gameWorld = {
    npcs: new Map(), // location -> array of NPCs
    locationMemory: new Map(), // location -> description cache
    lastNPCInteraction: null
};

// Conversation History System for AI Context
let conversationHistory = {
    messages: [], // Array of {role: 'user'|'assistant', content: string, timestamp: number}
    maxMessages: 50
};

function addToConversationHistory(role, content) {
    conversationHistory.messages.push({
        role: role,
        content: content,
        timestamp: Date.now()
    });

    // Keep only the last 50 messages
    if (conversationHistory.messages.length > conversationHistory.maxMessages) {
        conversationHistory.messages = conversationHistory.messages.slice(-conversationHistory.maxMessages);
    }
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

const combatInterface = document.getElementById('combat-interface');
const enemyInfoDisplay = document.getElementById('enemy-info');
const attackBtn = document.getElementById('attack-btn');
const fleeBtn = document.getElementById('flee-btn');

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
    }
};

const items = [
    // Weapons
    { id: 'short_sword', name: 'Short Sword', type: 'weapon', slot: 'mainHand', damage: '1d6', value: 10, description: 'A basic, well-balanced short sword.' },
    { id: 'long_sword', name: 'Long Sword', type: 'weapon', slot: 'mainHand', damage: '1d8', value: 25, description: 'A versatile blade favored by knights.' },
    { id: 'battle_axe', name: 'Battle Axe', type: 'weapon', slot: 'mainHand', damage: '1d10', value: 30, description: 'Heavy two-handed axe for devastating attacks.' },
    { id: 'dagger', name: 'Steel Dagger', type: 'weapon', slot: 'mainHand', damage: '1d4', value: 5, description: 'Quick and silent blade for rogues.' },
    { id: 'war_hammer', name: 'War Hammer', type: 'weapon', slot: 'mainHand', damage: '1d8', value: 20, description: 'Blunt weapon that crushes armor.' },
    { id: 'crossbow', name: 'Light Crossbow', type: 'weapon', slot: 'mainHand', damage: '1d8', value: 35, description: 'Ranged weapon with mechanical precision.' },
    { id: 'shortbow', name: 'Shortbow', type: 'weapon', slot: 'mainHand', damage: '1d6', value: 29, description: 'Compact bow ideal for quick shots and mobility.' },
    { id: 'staff', name: 'Mage Staff', type: 'weapon', slot: 'mainHand', damage: '1d6', value: 40, description: 'Enchanted staff that amplifies magical power.' },
    { id: 'rapier', name: 'Elven Rapier', type: 'weapon', slot: 'mainHand', damage: '1d8', value: 45, description: 'Elegant blade with superior craftsmanship.' },
    { id: 'mace', name: 'Holy Mace', type: 'weapon', slot: 'mainHand', damage: '1d6', value: 28, description: 'Blessed weapon effective against undead.' },
    { id: 'scimitar', name: 'Curved Scimitar', type: 'weapon', slot: 'mainHand', damage: '1d6', value: 22, description: 'Desert blade with curved design.' },

    // Armor
    { id: 'leather_armor', name: 'Leather Armor', type: 'armor', slot: 'chest', defense: 3, value: 15, description: 'Flexible and light leather protection.' },
    { id: 'chain_mail', name: 'Chain Mail', type: 'armor', slot: 'chest', defense: 5, value: 50, description: 'Interlocked metal rings provide solid defense.' },
    { id: 'plate_armor', name: 'Plate Armor', type: 'armor', slot: 'chest', defense: 8, value: 150, description: 'Heavy metal plates offering maximum protection.' },
    { id: 'robe', name: 'Mage Robes', type: 'armor', slot: 'chest', defense: 1, value: 30, description: 'Enchanted robes that enhance magical abilities.' },
    { id: 'scale_mail', name: 'Scale Mail', type: 'armor', slot: 'chest', defense: 6, value: 75, description: 'Overlapping metal scales like dragon hide.' },
    { id: 'studded_leather', name: 'Studded Leather', type: 'armor', slot: 'chest', defense: 4, value: 25, description: 'Leather reinforced with metal studs.' },
    { id: 'steel_helm', name: 'Steel Helmet', type: 'armor', slot: 'head', defense: 2, value: 20, description: 'Protective metal headgear.' },
    { id: 'leather_boots', name: 'Leather Boots', type: 'armor', slot: 'feet', defense: 1, value: 8, description: 'Sturdy boots for long journeys.' },
    { id: 'steel_gauntlets', name: 'Steel Gauntlets', type: 'armor', slot: 'hands', defense: 1, value: 15, description: 'Metal gloves for hand protection.' },
    { id: 'cloak', name: 'Traveler\'s Cloak', type: 'armor', slot: 'chest', defense: 1, value: 12, description: 'Weather-resistant cloak for adventurers.' },

    // Shields
    { id: 'wooden_shield', name: 'Wooden Shield', type: 'armor', slot: 'offHand', defense: 2, value: 10, description: 'Simple round shield made of oak.' },
    { id: 'steel_shield', name: 'Steel Shield', type: 'armor', slot: 'offHand', defense: 3, value: 30, description: 'Metal shield with reinforced rim.' },
    { id: 'tower_shield', name: 'Tower Shield', type: 'armor', slot: 'offHand', defense: 4, value: 60, description: 'Large shield offering maximum coverage.' },

    // Consumables
    { id: 'healing_potion', name: 'Healing Potion', type: 'consumable', effect: { type: 'heal', amount: 30 }, value: 8, description: 'Restores a moderate amount of health.' },
    { id: 'greater_healing', name: 'Greater Healing Potion', type: 'consumable', effect: { type: 'heal', amount: 60 }, value: 20, description: 'Powerful healing elixir.' },
    { id: 'mana_potion', name: 'Mana Potion', type: 'consumable', effect: { type: 'mana', amount: 40 }, value: 12, description: 'Restores magical energy.' },
    { id: 'antidote', name: 'Antidote', type: 'consumable', effect: { type: 'cure_poison' }, value: 15, description: 'Neutralizes poison and toxins.' },
    { id: 'strength_elixir', name: 'Strength Elixir', type: 'consumable', effect: { type: 'buff_str', duration: 300 }, value: 25, description: 'Temporarily increases physical strength.' },
    { id: 'invisibility_potion', name: 'Invisibility Potion', type: 'consumable', effect: { type: 'invisibility', duration: 180 }, value: 40, description: 'Grants temporary invisibility.' },
    { id: 'fire_resistance', name: 'Fire Resistance Potion', type: 'consumable', effect: { type: 'resist_fire', duration: 600 }, value: 30, description: 'Protects against fire damage.' },

    // Jewelry & Accessories
    { id: 'silver_ring', name: 'Silver Ring', type: 'jewelry', slot: 'ring1', value: 25, description: 'Simple silver band with minor enchantment.' },
    { id: 'gold_amulet', name: 'Gold Amulet', type: 'jewelry', slot: 'amulet', value: 50, description: 'Ornate necklace that radiates protective magic.' },
    { id: 'sapphire_ring', name: 'Sapphire Ring', type: 'jewelry', slot: 'ring1', value: 100, description: 'Precious ring that enhances magical abilities.' },
    { id: 'iron_bracers', name: 'Iron Bracers', type: 'armor', slot: 'hands', defense: 1, value: 18, description: 'Metal arm guards for extra protection.' },

    // Tools & Utilities
    { id: 'lockpicks', name: 'Thieves\' Tools', type: 'tool', value: 20, description: 'Set of picks and tools for opening locks.' },
    { id: 'rope', name: 'Silk Rope', type: 'tool', value: 5, description: '50 feet of strong, lightweight rope.' },
    { id: 'torch', name: 'Torch', type: 'tool', value: 1, description: 'Wooden torch that burns for hours.' },
    { id: 'lantern', name: 'Brass Lantern', type: 'tool', value: 15, description: 'Reliable light source with oil reservoir.' },
    { id: 'spyglass', name: 'Spyglass', type: 'tool', value: 35, description: 'Collapsible telescope for distant viewing.' },
    { id: 'compass', name: 'Magnetic Compass', type: 'tool', value: 25, description: 'Never lose your way with this navigation aid.' },
    { id: 'bedroll', name: 'Bedroll', type: 'tool', value: 3, description: 'Comfortable sleeping gear for camping.' },
    { id: 'rations', name: 'Trail Rations', type: 'consumable', effect: { type: 'sustenance' }, value: 2, description: 'Preserved food for long journeys.' },

    // Ammunition
    { id: 'arrows', name: 'Arrows (20)', type: 'ammunition', value: 3, description: 'Bundle of 20 steel-tipped arrows for bows.' },
    { id: 'arrow_quiver', name: 'Arrow Quiver', type: 'tool', value: 8, description: 'Leather quiver that holds up to 30 arrows securely.' },
    { id: 'bolts', name: 'Crossbow Bolts (20)', type: 'ammunition', value: 4, description: 'Bundle of 20 heavy crossbow bolts.' },
    { id: 'bolt_quiver', name: 'Bolt Quiver', type: 'tool', value: 10, description: 'Sturdy case designed to hold crossbow bolts safely.' },

    // Spell Components & Magical Items
    { id: 'scroll_fireball', name: 'Fireball Scroll', type: 'scroll', value: 60, description: 'Single-use scroll containing a fireball spell.' },
    { id: 'scroll_heal', name: 'Healing Scroll', type: 'scroll', value: 40, description: 'Divine scroll that instantly heals wounds.' },
    { id: 'crystal_orb', name: 'Crystal Orb', type: 'magical', value: 80, description: 'Scrying orb that reveals distant places.' },
    { id: 'spell_components', name: 'Spell Components', type: 'magical', value: 10, description: 'Various herbs and minerals for spellcasting.' },
    { id: 'enchanted_ink', name: 'Enchanted Ink', type: 'magical', value: 30, description: 'Magical ink for scribing powerful scrolls.' },
    { id: 'phoenix_feather', name: 'Phoenix Feather', type: 'magical', value: 120, description: 'Rare component for fire-based enchantments.' },
    { id: 'moonstone', name: 'Moonstone', type: 'magical', value: 75, description: 'Glowing stone that stores lunar energy.' },

    // Rare & Unique Items
    { id: 'dragons_tooth', name: 'Dragon\'s Tooth', type: 'rare', value: 200, description: 'Legendary crafting material from an ancient wyrm.' },
    { id: 'elven_wine', name: 'Elven Wine', type: 'luxury', value: 45, description: 'Exquisite vintage from the Sylvanmere vineyards.' },
    { id: 'dwarven_ale', name: 'Dwarven Ale', type: 'consumable', effect: { type: 'courage_boost' }, value: 8, description: 'Strong ale that boosts confidence and morale.' },
    { id: 'ancient_map', name: 'Ancient Map', type: 'treasure', value: 90, description: 'Mysterious map showing forgotten treasure locations.' },
    { id: 'gold_coin', name: 'Gold Coin', type: 'currency', value: 1, description: 'The standard currency of Pedena.' }
];

const enemies = [
    { id: 'goblin', name: 'Goblin', hp: 25, attack: '1d4', defense: 2, expReward: 20, goldDrop: 5, loot: [{ id: 'gold_coin', chance: 0.8, quantity: '1d3' }] },
    { id: 'dire_wolf', name: 'Dire Wolf', hp: 40, attack: '1d6', defense: 3, expReward: 35, goldDrop: 8, loot: [{ id: 'leather_scrap', chance: 0.7, quantity: '1d2' }] }
];

// Helper Functions
function updateGold(amount, reason = '') {
    const oldGold = player.gold;
    player.gold = Math.max(0, player.gold + amount);
    
    if (amount > 0) {
        displayMessage(`You gained ${amount} gold${reason ? ` (${reason})` : ''}!`, 'success');
    } else if (amount < 0) {
        const actualLoss = oldGold - player.gold;
        displayMessage(`You lost ${actualLoss} gold${reason ? ` (${reason})` : ''}.`, 'error');
    }
    
    updatePlayerStatsDisplay();
    console.log(`Gold updated: ${oldGold} -> ${player.gold} (change: ${amount})`);
}

function displayMessage(message, type = 'info') {
    const p = document.createElement('p');
    p.classList.add('mb-2', 'pb-1', 'border-b', 'border-amber-700/50');
    if (type === 'combat') {
        p.classList.add('text-red-700', 'font-bold');
    } else if (type === 'success') {
        p.classList.add('text-green-700');
    } else if (type === 'error') {
        p.classList.add('text-red-500');
    }
    p.textContent = message;
    gameOutput.appendChild(p);
    gameOutput.scrollTop = gameOutput.scrollHeight; // Auto-scroll to bottom
}

function updatePlayerStatsDisplay() {
    playerNameDisplay.textContent = `${player.name} - ${player.currentLocation}`;
    playerLevelDisplay.textContent = `Level: ${player.level}`;
    playerHpDisplay.textContent = `HP: ${player.hp}/${player.maxHp}`;
}

function showScreen(screenId) {
    const screens = [startScreen, characterCreationScreen, gamePlayScreen, combatInterface, shopInterface, inventoryInterface, skillsInterface, questInterface];
    screens.forEach(screen => {
        if (screen.id === screenId) {
            screen.classList.remove('hidden');
        } else {
            screen.classList.add('hidden');
        }
    });
}

function saveGame() {
    if (!confirm("Are you sure you want to save your game? This will overwrite any existing save.")) {
        return;
    }

    // Save character progression separately
    if (player.classProgression) {
        CharacterManager.saveProgression(player);
    }

    const saveData = {
        player: player,
        gameWorld: {
            npcs: Array.from(gameWorld.npcs.entries()),
            locationMemory: Array.from(gameWorld.locationMemory.entries()),
            lastNPCInteraction: gameWorld.lastNPCInteraction
        },
        conversationHistory: conversationHistory
    };
    localStorage.setItem('pedenaRPGSave', JSON.stringify(saveData));
    saveConversationHistory(); // Also save conversation separately
    displayMessage("Game saved!", 'success');
    loadGameBtn.disabled = false; // Enable load game button if a save exists
}

function loadGame() {
    const savedGame = localStorage.getItem('pedenaRPGSave');
    if (savedGame) {
        const saveData = JSON.parse(savedGame);

        // Handle old save format (just player data)
        if (saveData.player) {
            player = saveData.player;
            // Restore game world if it exists
            if (saveData.gameWorld) {
                gameWorld.npcs = new Map(saveData.gameWorld.npcs);
                gameWorld.locationMemory = new Map(saveData.gameWorld.locationMemory);
                gameWorld.lastNPCInteraction = saveData.gameWorld.lastNPCInteraction;
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
            }
            // Load inventory and status effects from ItemManager
            ItemManager.loadInventoryFromStorage(player);
        } else {
            // Old format - just player
            player = saveData;
            loadConversationHistory();
            ItemManager.loadInventoryFromStorage(player);
        }

        displayMessage("Game loaded!", 'success');
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
    } else {
        displayMessage("No saved game found.", 'error');
    }
}

function rollDice(diceString) {
    const [num, sides] = diceString.split('d').map(Number);
    let total = 0;
    for (let i = 0; i < num; i++) {
        total += Math.floor(Math.random() * sides) + 1;
    }
    return total;
}

// AI Interaction Functions (Gemini API Calls)
async function callGeminiAPI(prompt, temperature = 0.10, maxOutputTokens = 800, includeContext = true) {
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

            // Handle MAX_TOKENS case
            if (candidate.finishReason === 'MAX_TOKENS') {
                console.warn('Response truncated due to MAX_TOKENS');
                if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
                    return candidate.content.parts[0].text;
                }
                return "Response was cut short. Please try a simpler request.";
            }

            // Check if content exists and has parts
            if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
                return candidate.content.parts[0].text;
            }
            // Handle case where content exists but parts might be missing
            else if (candidate.content && candidate.content.role) {
                console.log('API response received but no content parts found:', data);
                return "I'm having trouble generating a response right now. Please try again.";
            }
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
    return {
        id: Date.now() + Math.random(),
        name: name,
        description: description,
        location: location,
        dialogueHistory: [],
        lastSeen: Date.now(),
        relationship: 'neutral'
    };
}

function saveNPCToLocation(npc, location) {
    if (!gameWorld.npcs.has(location)) {
        gameWorld.npcs.set(location, []);
    }
    const locationNPCs = gameWorld.npcs.get(location);
    // Check if NPC already exists by name
    const existingIndex = locationNPCs.findIndex(n => n.name === npc.name);
    if (existingIndex >= 0) {
        locationNPCs[existingIndex] = npc; // Update existing
    } else {
        locationNPCs.push(npc); // Add new
    }
}

function getNPCsInLocation(location) {
    return gameWorld.npcs.get(location) || [];
}

async function generateCharacterBackground() {
    const name = charNameInput.value.trim();
    const charClass = charClassSelect.value;
    const gender = Array.from(charGenderRadios).find(radio => radio.checked)?.value;

    if (!name || !charClass || !gender) {
        alert("Please fill in character name, class, and gender.");
        return;
    }

    charBackgroundTextarea.value = "Generating character background...";
    generateBackgroundBtn.disabled = true;

    // Generate rich context using world data
    const context = GameDataManager.generateBackgroundPromptContext({ name, class: charClass, gender });

    const prompt = `Create a brief background for ${name}, a ${gender} ${charClass} in Pedena. Use these world elements: Cities like ${context.worldLore.majorCities.join(', ')}; factions like ${context.worldLore.activeFactions.join(', ')}; guilds like ${context.worldLore.availableGuilds.join(', ')}. 2-3 sentences about origin and goals.`;

    const background = await callGeminiAPI(prompt, 0.8, 200, false); // Don't include conversation history for character creation
    if (background) {
        charBackgroundTextarea.value = background;
        player.background = background;
    } else {
        charBackgroundTextarea.value = "Failed to generate background. You can write your own or try again later.";
        player.background = "A mysterious adventurer with an unknown past.";
    }

    generateBackgroundBtn.disabled = false;
}

async function generateWorldDescription(location) {
    displayMessage(`Describing ${location}...`, 'info');
    const prompt = `Describe the fantasy RPG location of ${location} in the magical land of Pedena. Focus on key features, atmosphere, and potential points of interest in about 3-5 sentences. Consider if it's a town, forest, cave, or mountain.`;
    const description = await callGeminiAPI(prompt, 0.7, 250);
    if (description) {
        displayMessage(`You are in ${location}. ${description}`);
    } else {
        displayMessage(`Failed to describe ${location}.`);
    }
}

async function handleMovement(command) {
    displayMessage("Considering your next move...", 'info');

    // Use LocationManager to get possible destinations
    const possibleDestinations = LocationManager.getPossibleDestinations(player.currentLocation, command);

    if (possibleDestinations && possibleDestinations.length > 0) {
        displayMessage("Where would you like to go?");
        possibleDestinations.forEach((destination, index) => {
            const button = document.createElement('button');
            button.classList.add('btn-parchment', 'w-full', 'mb-2');
            button.textContent = destination;
            button.onclick = async () => {
                player.currentLocation = destination;
                displayMessage(`You travel to ${destination}.`);
                await generateWorldDescription(destination);
                // After moving, remove the movement choice buttons
                document.querySelectorAll('.game-action-choice').forEach(btn => btn.remove());
                checkRandomEncounter(); // Check for encounters after moving
            };
            button.classList.add('game-action-choice'); // Add a class to identify these buttons
            gameOutput.appendChild(button);
        });
        gameOutput.scrollTop = gameOutput.scrollHeight;
    } else {
        displayMessage("The path ahead is unclear. You remain in your current location.");
    }
}

async function handleNPCInteraction() {
    displayMessage("Looking for someone to talk to...", 'info');

    // Check for existing NPCs in this location first
    const existingNPCs = getNPCsInLocation(player.currentLocation);

    if (existingNPCs.length > 0 && Math.random() > 0.3) {
        // 70% chance to interact with existing NPC
        const npc = existingNPCs[Math.floor(Math.random() * existingNPCs.length)];
        const npcMessage = `You see ${npc.name} again. ${npc.description}`;
        displayMessage(npcMessage);
        addToConversationHistory('assistant', npcMessage);
        gameWorld.lastNPCInteraction = npc.id;
    } else {
        // Create new NPC
        const context = GameDataManager.generateLocationContext(player.currentLocation);
        const randomFaction = GameDataManager.getRandomFrom(gameData.organizations.factions);

        const prompt = `Create NPC in ${player.currentLocation}. Format: "Name: [name]. Appearance: [brief]. Says: [one line dialogue]"`;

        const npcInfo = await callGeminiAPI(prompt, 0.8, 200, true);
        if (npcInfo) {
            // Parse the NPC info to extract name
            const nameMatch = npcInfo.match(/Name:\s*([^.]+)/);
            const npcName = nameMatch ? nameMatch[1].trim() : "Mysterious Figure";

            const newNPC = createNPC(npcName, npcInfo, player.currentLocation);
            saveNPCToLocation(newNPC, player.currentLocation);
            gameWorld.lastNPCInteraction = newNPC.id;

            const encounterMessage = `You encounter someone new: ${npcInfo}`;
            displayMessage(encounterMessage);
            addToConversationHistory('assistant', encounterMessage);
        } else {
            const fallbackMessage = "You don't see anyone interesting to talk to right now.";
            displayMessage(fallbackMessage);
            addToConversationHistory('assistant', fallbackMessage);
        }
    }
    saveConversationHistory();
}

async function initiateCombat(enemy) {
    player.currentEnemy = enemy;
    showScreen('combat-interface');
    displayMessage(`A wild ${enemy.name} appears!`, 'combat');
    enemyInfoDisplay.innerHTML = `<p class="text-xl font-bold">${enemy.name}</p><p>HP: ${enemy.hp}</p><p>Attack: ${enemy.attack}</p>`;
    gamePlayScreen.classList.add('hidden'); // Hide general game actions during combat
}

async function playerAttack() {
    if (!player.currentEnemy) return;

    const damage = rollDice(player.equipment.mainHand?.damage || '1d4'); // Default bare-hand damage
    player.currentEnemy.hp -= damage;
    displayMessage(`You strike the ${player.currentEnemy.name} for ${damage} damage!`, 'combat');
    enemyInfoDisplay.innerHTML = `<p class="text-xl font-bold">${player.currentEnemy.name}</p><p>HP: ${player.currentEnemy.hp}</p><p>Attack: ${player.currentEnemy.attack}</p>`;

    if (player.currentEnemy.hp <= 0) {
        displayMessage(`You defeated the ${player.currentEnemy.name}!`, 'success');
        player.exp += player.currentEnemy.expReward;
        updateGold(player.currentEnemy.goldDrop, 'combat victory');
        displayMessage(`You gained ${player.currentEnemy.expReward} EXP!`, 'success');
        
        // Generate random loot using new system (30% chance)
        if (Math.random() < 0.3) {
            const lootItem = ItemGenerator.generateItem({
                enemyContext: player.currentEnemy.name,
                locationContext: player.currentLocation,
                rarity: Math.random() < 0.9 ? 'COMMON' : 'UNCOMMON'
            });
            ItemManager.addItemToInventory(player, lootItem);
            displayMessage(`You found loot: ${lootItem.name}!`, 'success');
        }
        
        // Handle legacy loot system
        if (player.currentEnemy.loot) {
            player.currentEnemy.loot.forEach(lootItem => {
                if (Math.random() < lootItem.chance) {
                    const quantity = rollDice(lootItem.quantity || '1');
                    const foundItem = items.find(item => item.id === lootItem.id);
                    if (foundItem) {
                        for (let i = 0; i < quantity; i++) {
                            player.inventory.push({ ...foundItem }); // Add a copy
                        }
                        displayMessage(`You found ${quantity} ${foundItem.name}(s)!`, 'success');
                    }
                }
            });
        }
        player.currentEnemy = null;
        showScreen('game-play-screen');
        gamePlayScreen.classList.remove('hidden'); // Show general game actions
        checkLevelUp();
    } else {
        // Enemy's turn
        await enemyAttack();
    }
    updatePlayerStatsDisplay();
}

async function enemyAttack() {
    if (!player.currentEnemy) return;
    const enemyDamage = rollDice(player.currentEnemy.attack);
    player.hp -= enemyDamage;
    displayMessage(`${player.currentEnemy.name} attacks you for ${enemyDamage} damage!`, 'combat');
    updatePlayerStatsDisplay();

    if (player.hp <= 0) {
        displayMessage("You have been defeated! Game Over.", 'error');
        alert("Game Over!");
        location.reload(); // Simple reload for now
    }
}

async function fleeCombat() {
    displayMessage("You attempt to flee!", 'info');
    // Simple flee chance for now, can be based on dexterity etc.
    if (Math.random() > 0.5) {
        displayMessage("You successfully escaped!", 'success');
        player.currentEnemy = null;
        showScreen('game-play-screen');
        gamePlayScreen.classList.remove('hidden');
    } else {
        displayMessage("You failed to escape and the enemy attacks!", 'combat');
        await enemyAttack();
    }
}

function checkRandomEncounter() {
    // 30% chance of encounter after movement
    if (Math.random() < 0.3) {
        const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
        initiateCombat({ ...randomEnemy }); // Pass a copy to avoid modifying original
    }
}

function checkLevelUp() {
    while (player.exp >= player.expToNextLevel) {
        const oldLevel = player.level;
        player.level++;
        player.exp -= player.expToNextLevel;
        player.expToNextLevel = Math.floor(player.expToNextLevel * 1.5); // Increase requirement

        // Use new progression system for level up
        if (player.classProgression && CharacterManager.levelUp(player)) {
            displayMessage(`Congratulations! You reached Level ${player.level}!`, 'success');
            displayMessage(`Your Max HP increased to ${player.maxHp}. You feel rejuvenated!`, 'success');

            // Show new abilities and features gained
            const progression = CharacterManager.getCharacterProgression(player);
            displayLevelUpRewards(progression, oldLevel);
        } else {
            // Fallback to old system
            player.maxHp += 10;
            player.hp = player.maxHp;
            displayMessage(`Congratulations! You reached Level ${player.level}!`, 'success');
            displayMessage(`Your Max HP increased to ${player.maxHp}. You feel rejuvenated!`, 'success');
        }

        // AI call for level up bonus/flavor text
        levelUpAI();
        updatePlayerStatsDisplay();
    }
}

async function levelUpAI() {
    const prompt = `The player, ${player.name} (${player.class}), has just reached Level ${player.level}. Describe a brief, thematic benefit or insight they gain upon leveling up, related to their class or general growth.`;
    const bonus = await callGeminiAPI(prompt, 0.7, 150);
    if (bonus) {
        displayMessage(`Upon leveling up, you feel: ${bonus}`, 'info');
    }
}

function displayInventory() {
    shopInterface.classList.add('hidden');
    skillsInterface.classList.add('hidden');
    questInterface.classList.add('hidden');
    combatInterface.classList.add('hidden');
    backgroundInterface.classList.add('hidden');
    inventoryInterface.classList.remove('hidden');

    displayMessage("Opening your inventory...", 'info');

    // Update status effects before displaying inventory
    ItemManager.updateStatusEffects(player);

    // Load fresh inventory from storage
    ItemManager.loadInventoryFromStorage(player);

    inventoryItemsDisplay.innerHTML = '';

    // Debug information
    console.log('Displaying inventory for:', player.name);
    console.log('Current inventory:', player.inventory);
    console.log('Inventory length:', player.inventory ? player.inventory.length : 'undefined');

    // Ensure inventory exists
    if (!player.inventory) {
        player.inventory = [];
        console.log('Inventory was undefined, initialized empty array');
    }

    // Show gold
    const goldDiv = document.createElement('div');
    goldDiv.classList.add('parchment-box', 'p-3', 'mb-4', 'text-center');
    goldDiv.innerHTML = `<p class="font-bold text-xl">Gold: ${player.gold}</p>`;
    inventoryItemsDisplay.appendChild(goldDiv);

    // Show inventory count for debugging
    const debugDiv = document.createElement('div');
    debugDiv.classList.add('parchment-box', 'p-3', 'mb-4', 'text-center', 'bg-blue-50');
    debugDiv.innerHTML = `<p class="text-sm">Inventory Items: ${player.inventory.length}</p>`;
    inventoryItemsDisplay.appendChild(debugDiv);

    // Show active status effects
    if (player.statusEffects && player.statusEffects.length > 0) {
        const effectsDiv = document.createElement('div');
        effectsDiv.classList.add('parchment-box', 'p-3', 'mb-4');
        effectsDiv.innerHTML = '<h4 class="font-bold mb-2">Active Effects:</h4>';
        player.statusEffects.forEach(effect => {
            const effectP = document.createElement('p');
            effectP.classList.add('text-sm', effect.type === 'positive' ? 'text-green-700' : 'text-red-700');
            const timeLeft = Math.max(0, Math.floor((effect.expiresAt - Date.now()) / 1000));
            effectP.textContent = `${effect.name} (${timeLeft}s): ${effect.description}`;
            effectsDiv.appendChild(effectP);
        });
        inventoryItemsDisplay.appendChild(effectsDiv);
    }

    // Show equipped items
    const equippedDiv = document.createElement('div');
    equippedDiv.classList.add('parchment-box', 'p-3', 'mb-4');
    equippedDiv.innerHTML = '<h4 class="font-bold mb-2">Currently Equipped:</h4>';
    const equippedItems = Object.entries(player.equipment).filter(([slot, item]) => item);
    if (equippedItems.length > 0) {
        equippedItems.forEach(([slot, item]) => {
            const equipDiv = document.createElement('div');
            equipDiv.classList.add('flex', 'justify-between', 'items-center', 'mb-2', 'p-2', 'bg-amber-50', 'rounded');
            
            const itemInfo = document.createElement('span');
            itemInfo.textContent = `${item.name} (${item.slot})`;
            equipDiv.appendChild(itemInfo);
            
            const unequipBtn = document.createElement('button');
            unequipBtn.classList.add('btn-parchment', 'text-xs', 'px-2', 'py-1', 'bg-red-600', 'text-white', 'hover:bg-red-700');
            unequipBtn.innerHTML = '<i class="gi gi-cancel mr-1"></i>Unequip';
            unequipBtn.onclick = () => unequipItem(slot);
            equipDiv.appendChild(unequipBtn);
            
            equippedDiv.appendChild(equipDiv);
        });
    } else {
        equippedDiv.innerHTML += '<p class="text-amber-700">Nothing equipped</p>';
    }
    inventoryItemsDisplay.appendChild(equippedDiv);

    if (player.inventory.length === 0) {
        inventoryItemsDisplay.innerHTML += '<p class="text-center text-amber-800">Your inventory is empty. Check the console for debugging information.</p>';
        return;
    }

    const inventoryHeader = document.createElement('h4');
    inventoryHeader.classList.add('font-bold', 'mb-3');
    inventoryHeader.textContent = 'Inventory Items:';
    inventoryItemsDisplay.appendChild(inventoryHeader);

    player.inventory.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('parchment-box', 'p-3', 'mb-2');
        
        // Add rarity styling
        const rarityData = itemRarity[item.rarity];
        const rarityStyle = rarityData ? `color: ${rarityData.color}; font-weight: bold;` : '';
        const rarityText = rarityData ? ` (${rarityData.name})` : '';
        
        itemDiv.innerHTML = `
            <p class="font-bold" style="${rarityStyle}">${item.name}${rarityText}</p>
            <p class="text-sm text-amber-700">${item.description}</p>
            <p class="text-sm">Value: ${item.value || 10} gold</p>
            ${item.effects && item.effects.length > 0 ? `<p class="text-xs text-purple-600">Effects: ${item.effects.join(', ')}</p>` : ''}
        `;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('flex', 'gap-2', 'mt-2');

        if (item.type === 'consumable') {
            const useBtn = document.createElement('button');
            useBtn.classList.add('btn-parchment', 'text-sm', 'px-3', 'py-1');
            useBtn.textContent = 'Use';
            useBtn.onclick = () => useItem(index);
            buttonContainer.appendChild(useBtn);
        }

        if (item.languageContent) {
            const readBtn = document.createElement('button');
            readBtn.classList.add('btn-parchment', 'text-sm', 'px-3', 'py-1', 'bg-purple-600', 'text-white');
            readBtn.textContent = item.type === 'scroll' ? 'Read & Cast' : 'Study';
            readBtn.onclick = () => useItem(index);
            buttonContainer.appendChild(readBtn);
        }

        if (item.type === 'weapon' || item.type === 'armor') {
            const equipBtn = document.createElement('button');
            equipBtn.classList.add('btn-parchment', 'text-sm', 'px-3', 'py-1');
            equipBtn.textContent = 'Equip';
            equipBtn.onclick = () => equipItem(index);
            buttonContainer.appendChild(equipBtn);
        }

        // Add sell button for all items
        const sellBtn = document.createElement('button');
        sellBtn.classList.add('btn-parchment', 'text-sm', 'px-3', 'py-1', 'bg-yellow-600', 'text-white', 'hover:bg-yellow-700');
        const sellPrice = Math.floor((item.value || 10) * 0.5); // Sell for 50% of value
        sellBtn.textContent = `Sell (${sellPrice}g)`;
        sellBtn.onclick = () => sellItem(index);
        buttonContainer.appendChild(sellBtn);

        itemDiv.appendChild(buttonContainer);
        inventoryItemsDisplay.appendChild(itemDiv);
    });
}

function useItem(index) {
    const item = player.inventory[index];
    
    // Handle language items with special reading functionality
    if (item.languageContent) {
        readLanguageItem(item);
        return;
    }
    
    // Use the new ItemManager system
    const result = ItemManager.useItem(player, item.id);
    
    if (result.success) {
        displayMessage(result.message, 'success');
        updatePlayerStatsDisplay();
        displayInventory(); // Refresh inventory display
    } else {
        // Fallback to old system for legacy items
        if (item.type === 'consumable' && item.effect?.type === 'heal') {
            player.hp = Math.min(player.maxHp, player.hp + item.effect.amount);
            displayMessage(`You used ${item.name} and healed ${item.effect.amount} HP!`, 'success');
            player.inventory.splice(index, 1); // Remove consumed item
            updatePlayerStatsDisplay();
            displayInventory(); // Refresh inventory display
        } else {
            displayMessage(result.message || `You cannot use ${item.name} at this time.`, 'info');
        }
    }
}

function readLanguageItem(item) {
    const content = item.languageContent;
    
    // Display the constructed language text first
    displayMessage(`You carefully examine ${item.name} and see the following ${content.script} text written in ${content.language}:`, 'info');
    
    // Show the constructed language text in a special format
    const languageDiv = document.createElement('div');
    languageDiv.classList.add('parchment-box', 'p-4', 'my-3', 'border-2', 'border-purple-600', 'bg-purple-50');
    languageDiv.innerHTML = `
        <h5 class="font-bold text-purple-800 mb-2">${content.language} Text:</h5>
        <p class="font-serif text-lg italic text-purple-900 mb-3">"${content.originalText}"</p>
        <hr class="border-purple-300 my-3">
        <h6 class="font-semibold text-purple-700 mb-1">Translation:</h6>
        <p class="text-purple-800">"${content.translation}"</p>
    `;
    gameOutput.appendChild(languageDiv);
    gameOutput.scrollTop = gameOutput.scrollHeight;
    
    // Add to conversation history for AI context
    addToConversationHistory('user', `I read the ${item.name}`);
    addToConversationHistory('assistant', `The ${content.language} text reads: "${content.originalText}" which translates to: "${content.translation}"`);
    
    // Apply any magical effects from reading
    if (item.effects && item.effects.length > 0) {
        const result = ItemManager.applyItemEffects(player, item);
        if (result.success) {
            displayMessage(`Reading the ${content.language} text has a magical effect: ${result.message}`, 'success');
        }
    }
    
    // Remove single-use scrolls after reading
    if (item.singleUse) {
        const itemIndex = player.inventory.indexOf(item);
        if (itemIndex >= 0) {
            player.inventory.splice(itemIndex, 1);
            displayMessage(`The ${item.name} crumbles to dust after being read.`, 'info');
            ItemManager.saveInventoryToStorage(player);
            displayInventory(); // Refresh inventory display
        }
    }
    
    updatePlayerStatsDisplay();
    saveConversationHistory();
}

function equipItem(index) {
    const itemToEquip = player.inventory[index];
    if (itemToEquip.slot) {
        const currentEquipped = player.equipment[itemToEquip.slot];
        if (currentEquipped) {
            player.inventory.push(currentEquipped); // Put old item back in inventory
            displayMessage(`You unequipped ${currentEquipped.name}.`);
        }
        player.equipment[itemToEquip.slot] = itemToEquip;
        player.inventory.splice(index, 1); // Remove equipped item from inventory
        displayMessage(`You equipped ${itemToEquip.name}!`, 'success');
        displayInventory(); // Refresh inventory display
        updatePlayerStatsDisplay();
    } else {
        displayMessage(`${itemToEquip.name} cannot be equipped.`, 'info');
    }
}

function unequipItem(slot) {
    const equippedItem = player.equipment[slot];
    if (equippedItem) {
        // Move item back to inventory
        player.inventory.push(equippedItem);
        // Remove from equipment slot
        player.equipment[slot] = null;
        displayMessage(`You unequipped ${equippedItem.name}.`, 'success');
        displayInventory(); // Refresh inventory display
        updatePlayerStatsDisplay();
    } else {
        displayMessage(`No item equipped in ${slot} slot.`, 'info');
    }
}

function sellItem(index) {
    const item = player.inventory[index];
    if (!item) {
        displayMessage("Item not found.", 'error');
        return;
    }

    const sellPrice = Math.floor((item.value || 10) * 0.5); // Sell for 50% of item value
    
    if (confirm(`Are you sure you want to sell ${item.name} for ${sellPrice} gold?`)) {
        // Remove item from inventory
        player.inventory.splice(index, 1);
        
        // Add gold to player
        updateGold(sellPrice, `sold ${item.name}`);
        
        displayMessage(`You sold ${item.name} for ${sellPrice} gold.`, 'success');
        
        // Save inventory changes
        ItemManager.saveInventoryToStorage(player);
        
        // Refresh inventory display
        displayInventory();
        
        // Save game state
        saveGame();
    }
}

function displaySkills() {
    shopInterface.classList.add('hidden');
    inventoryInterface.classList.add('hidden');
    questInterface.classList.add('hidden');
    combatInterface.classList.add('hidden');
    backgroundInterface.classList.add('hidden');
    skillsInterface.classList.remove('hidden');

    skillsListDisplay.innerHTML = '';
    if (player.skills.length === 0) {
        skillsListDisplay.innerHTML = '<p class="text-center text-amber-800">You have no special skills yet.</p>';
        return;
    }

    player.skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('parchment-box', 'p-3', 'mb-2');
        skillDiv.innerHTML = `<p class="font-bold">${skill}</p>`;
        skillsListDisplay.appendChild(skillDiv);
    });
}

function displayShop() {
    inventoryInterface.classList.add('hidden');
    skillsInterface.classList.add('hidden');
    questInterface.classList.add('hidden');
    combatInterface.classList.add('hidden');
    backgroundInterface.classList.add('hidden');
    shopInterface.classList.remove('hidden');

    displayMessage("Welcome to the merchant's shop!", 'info');

    shopItemsDisplay.innerHTML = '';

    // Add gold display at top first
    const goldDisplay = document.createElement('div');
    goldDisplay.classList.add('parchment-box', 'p-4', 'mb-6', 'text-center', 'bg-amber-100', 'border-2', 'border-amber-600');
    goldDisplay.innerHTML = `<p class="font-bold text-2xl text-amber-900">Your Gold: ${player.gold}</p>`;
    shopItemsDisplay.appendChild(goldDisplay);

    // Create shop items with markup prices
    const shopItems = items.filter(item => item.id !== 'gold_coin').map(item => ({
        ...item,
        price: Math.ceil(item.value * 1.5) // 50% markup
    }));

    // Group items by category
    const categories = {
        'Weapons': shopItems.filter(item => item.type === 'weapon'),
        'Armor & Shields': shopItems.filter(item => item.type === 'armor'),
        'Consumables': shopItems.filter(item => item.type === 'consumable'),
        'Tools & Utilities': shopItems.filter(item => item.type === 'tool' || item.type === 'ammunition'),
        'Magical Items': shopItems.filter(item => ['magical', 'scroll'].includes(item.type)),
        'Jewelry': shopItems.filter(item => item.type === 'jewelry'),
        'Rare Items': shopItems.filter(item => ['rare', 'luxury', 'treasure'].includes(item.type))
    };

    Object.entries(categories).forEach(([categoryName, categoryItems]) => {
        if (categoryItems.length > 0) {
            // Create category container
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('mb-8');

            // Category header
            const categoryHeader = document.createElement('h5');
            categoryHeader.classList.add('font-bold', 'text-xl', 'mb-4', 'text-amber-900', 'border-b-2', 'border-amber-700', 'pb-2');
            categoryHeader.textContent = categoryName;
            categoryContainer.appendChild(categoryHeader);

            // Items grid
            const categoryGrid = document.createElement('div');
            categoryGrid.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-4');

            categoryItems.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('parchment-box', 'p-4', 'flex', 'flex-col', 'h-full');

                // Item content
                const itemContent = document.createElement('div');
                itemContent.classList.add('flex-grow');
                
                let itemDetails = `
                    <h6 class="font-bold text-lg text-amber-900 mb-2">${item.name}</h6>
                    <p class="text-sm text-amber-700 mb-3 leading-relaxed">${item.description}</p>
                    <div class="space-y-1 mb-3">
                        <p class="text-sm font-semibold text-green-700">Price: ${item.price} gold</p>
                `;

                // Add type-specific information
                if (item.damage) {
                    itemDetails += `<p class="text-sm text-red-600">Damage: ${item.damage}</p>`;
                }
                if (item.defense) {
                    itemDetails += `<p class="text-sm text-blue-600">Defense: +${item.defense}</p>`;
                }
                if (item.effect) {
                    itemDetails += `<p class="text-sm text-purple-600">Effect: ${item.effect.type}</p>`;
                }
                if (item.slot) {
                    itemDetails += `<p class="text-sm text-gray-600">Slot: ${item.slot}</p>`;
                }
                
                itemDetails += `</div>`;
                itemContent.innerHTML = itemDetails;
                itemDiv.appendChild(itemContent);

                // Buy button at bottom
                const buyBtn = document.createElement('button');
                buyBtn.classList.add('btn-parchment', 'text-sm', 'mt-auto', 'py-2', 'w-full');
                
                if (player.gold >= item.price) {
                    buyBtn.textContent = `Buy for ${item.price} gold`;
                    buyBtn.onclick = () => buyItem(item);
                    buyBtn.classList.add('bg-green-600', 'hover:bg-green-700', 'text-white');
                } else {
                    buyBtn.textContent = 'Too Expensive';
                    buyBtn.disabled = true;
                    buyBtn.classList.add('bg-gray-400', 'text-gray-700', 'cursor-not-allowed');
                }

                itemDiv.appendChild(buyBtn);
                categoryGrid.appendChild(itemDiv);
            });

            categoryContainer.appendChild(categoryGrid);
            shopItemsDisplay.appendChild(categoryContainer);
        }
    });
}

function buyItem(item) {
    if (player.gold >= item.price) {
        updateGold(-item.price, `purchased ${item.name}`);
        const purchasedItem = { ...item };
        delete purchasedItem.price; // Remove price property from inventory item
        player.inventory.push(purchasedItem);
        displayShop(); // Refresh shop to update gold display and affordable items
        saveGame(); // Save after purchase
    } else {
        displayMessage(`You don't have enough gold to buy ${item.name}. You need ${item.price - player.gold} more gold.`, 'error');
    }
}

async function processCustomCommand(command) {
    if (!command.trim()) {
        displayMessage("Please enter a command.", 'error');
        return;
    }

    displayMessage(`> ${command}`, 'info');
    addToConversationHistory('user', command);
    displayMessage("Processing your command...", 'info');

    // Check if command mentions receiving an item (like "succubus language script")
    if (command.toLowerCase().includes('receive') || command.toLowerCase().includes('get') || 
        command.toLowerCase().includes('obtain') || command.toLowerCase().includes('script') ||
        command.toLowerCase().includes('language') || command.toLowerCase().includes('tome') ||
        command.toLowerCase().includes('book') || command.toLowerCase().includes('scroll')) {
        await handleItemReceival(command);
    }

    // First check if this is a movement command using LocationManager
    const movementAnalysis = LocationManager.analyzeMovementCommand(command, player.currentLocation, player);
    
    if (movementAnalysis.confidence > 0.6) {
        // Use advanced location processing
        const detailedPrompt = LocationManager.createDetailedMovementPrompt(movementAnalysis, player);
        
        const response = await callGeminiAPI(detailedPrompt, 0.8, 1000, true);
        if (response) {
            displayMessage(response);
            addToConversationHistory('assistant', response);
            
            // Apply movement results
            if (movementAnalysis.destination && movementAnalysis.destination.name) {
                let newLocationName = movementAnalysis.destination.name;
                
                // Handle different destination types
                if (movementAnalysis.destination.parentLocation) {
                    newLocationName = `${movementAnalysis.destination.name}, ${movementAnalysis.destination.parentLocation}`;
                }
                
                player.currentLocation = newLocationName;
                LocationManager.saveLocationToHistory(newLocationName, player.name);
                updatePlayerStatsDisplay();
                
                // Check for encounters
                if (Math.random() < movementAnalysis.encounterChance) {
                    checkRandomEncounter();
                }
            }
        }
        
        saveConversationHistory();
        return;
    }

    // For non-movement commands, use the existing system
    const actionAnalysis = GameActions.analyzeCommand(command, player);
    actionAnalysis.originalCommand = command; // Ensure original command is preserved

    // Handle immediate consequences based on action analysis
    await handleActionConsequences(actionAnalysis);

    // Get character abilities for context
    let abilitiesText = 'none';
    if (player.classProgression && player.classProgression.classAbilities) {
        abilitiesText = player.classProgression.classAbilities.join(', ');
    }

    let spellsText = 'none';
    if (player.classProgression && player.classProgression.knownSpells && player.classProgression.knownCantrips) {
        const allSpells = [...player.classProgression.knownSpells, ...player.classProgression.knownCantrips];
        spellsText = allSpells.join(', ') || 'none';
    }

    // Create context-rich prompt for the AI
    const questContext = getActiveQuestsContext();
    const contextPrompt = `
CURRENT GAME STATE:
Player: ${player.name} (${player.class}, Level ${player.level})
Current Location: ${player.currentLocation}
HP: ${player.hp}/${player.maxHp}
Gold: ${player.gold}
Inventory: ${player.inventory.map(item => item.name).join(', ') || 'empty'}
Equipped: ${Object.values(player.equipment).filter(item => item).map(item => item.name).join(', ') || 'nothing'}
Class Abilities: ${abilitiesText}
Known Spells/Cantrips: ${spellsText}

${questContext}NPCs in location: ${getNPCsInLocation(player.currentLocation).map(npc => npc.name).join(', ') || 'none'}

Player Command: "${command}"
Action Analysis: ${JSON.stringify(actionAnalysis)}

As the game master, interpret this command and action analysis, and provide a detailed response describing what happens. Focus on the immediate narrative result. Consider quest progress if relevant. Keep response to 2-3 sentences.`;

    const response = await callGeminiAPI(contextPrompt, 0.8, 800, true);
    if (response) {
        displayMessage(response);
        addToConversationHistory('assistant', response);

        // Process secondary effects based on AI response and action type
        await processActionResults(actionAnalysis, response);

        saveConversationHistory();
    } else {
        const fallbackResponse = "You attempt the action, but nothing notable happens.";
        displayMessage(fallbackResponse);
        addToConversationHistory('assistant', fallbackResponse);
        saveConversationHistory();
    }
}

// Item receival handler for story events
async function handleItemReceival(command) {
    // Determine if this is a quest-related or story item
    const isQuestItem = command.toLowerCase().includes('quest') || 
                       player.quests.some(q => !q.completed);
    
    const context = {
        questContext: isQuestItem ? { 
            id: Date.now(), 
            importance: 'major',
            description: command 
        } : null,
        locationContext: player.currentLocation,
        playerLevel: player.level,
        playerClass: player.class
    };

    // Generate contextual item using AI
    const itemPrompt = `Based on the player's action: "${command}"
    
    Player: ${player.name} (Level ${player.level} ${player.class})
    Location: ${player.currentLocation}
    
    Generate a specific item name and description that fits this scenario. The item should be meaningful to the story.
    Format: "Item Name: [name] | Description: [description] | Type: [scroll/book/magical/artifact] | Rarity: [COMMON/UNCOMMON/RARE/EPIC/LEGENDARY]"`;

    const aiResponse = await callGeminiAPI(itemPrompt, 0.8, 300, true);
    
    if (aiResponse) {
        const generatedItem = parseAIItemResponse(aiResponse, context);
        if (generatedItem) {
            // Ensure inventory array exists
            if (!player.inventory) {
                player.inventory = [];
            }
            
            // Add item to inventory
            player.inventory.push(generatedItem);
            
            // Save to local storage immediately
            ItemManager.saveInventoryToStorage(player);
            
            displayMessage(`You received: ${generatedItem.name}!`, 'success');
            displayMessage(`${generatedItem.description}`, 'info');
            displayMessage(`Item added to inventory. You now have ${player.inventory.length} items.`, 'info');
            
            // Apply any immediate effects
            if (generatedItem.effects && generatedItem.effects.length > 0) {
                const effectResult = ItemManager.applyItemEffects(player, generatedItem);
                if (effectResult.success) {
                    displayMessage(effectResult.message, 'success');
                }
            }
            
            updatePlayerStatsDisplay();
            saveGame();
            
            // Log for debugging
            console.log('Item added to inventory:', generatedItem);
            console.log('Current inventory count:', player.inventory.length);
        } else {
            displayMessage('Failed to generate item from AI response.', 'error');
            console.log('Failed to parse AI response:', aiResponse);
        }
    } else {
        displayMessage('Failed to generate item due to AI error.', 'error');
    }
}

function parseAIItemResponse(aiResponse, context) {
    try {
        // Extract item details from AI response
        const nameMatch = aiResponse.match(/Item Name:\s*([^|]+)/i);
        const descMatch = aiResponse.match(/Description:\s*([^|]+)/i);
        const typeMatch = aiResponse.match(/Type:\s*([^|]+)/i);
        const rarityMatch = aiResponse.match(/Rarity:\s*([^|]+)/i);
        
        const itemName = nameMatch ? nameMatch[1].trim() : 'Mysterious Item';
        const description = descMatch ? descMatch[1].trim() : 'A mysterious item of unknown origin.';
        const type = typeMatch ? typeMatch[1].trim().toLowerCase() : 'magical';
        const rarity = rarityMatch ? rarityMatch[1].trim().toUpperCase() : 'UNCOMMON';
        
        // Detect language type from item name and context
        const detectLanguageType = (name, desc) => {
            const lowerName = name.toLowerCase();
            const lowerDesc = desc.toLowerCase();
            const fullText = lowerName + ' ' + lowerDesc;
            
            if (fullText.includes('succubus') || fullText.includes('demon') || fullText.includes('infernal')) return 'succubus';
            if (fullText.includes('elven') || fullText.includes('elf') || fullText.includes('elvish')) return 'elven';
            if (fullText.includes('dragon') || fullText.includes('draconic') || fullText.includes('wyrm')) return 'draconic';
            if (fullText.includes('demonic') || fullText.includes('fiend') || fullText.includes('abyss')) return 'demonic';
            if (fullText.includes('celestial') || fullText.includes('angel') || fullText.includes('divine')) return 'celestial';
            if (fullText.includes('orc') || fullText.includes('orcish') || fullText.includes('tribal')) return 'orcish';
            
            return 'elven'; // Default
        };
        
        // Check if this is a language-based item
        const isLanguageItem = itemName.toLowerCase().includes('language') || 
                              itemName.toLowerCase().includes('script') ||
                              itemName.toLowerCase().includes('tome') ||
                              itemName.toLowerCase().includes('scroll') ||
                              type.includes('scroll') || 
                              type.includes('book');
        
        if (isLanguageItem) {
            const languageType = detectLanguageType(itemName, description);
            const validRarity = Object.keys(itemRarity).includes(rarity) ? rarity : 'UNCOMMON';
            
            // Generate appropriate language item
            if (type.includes('scroll')) {
                return ItemGenerator.generateLanguageScroll(validRarity, languageType);
            } else {
                return ItemGenerator.generateLanguageBook(validRarity, languageType);
            }
        }
        
        // Map type to category for non-language items
        let category = itemCategories.MAGICAL;
        if (type.includes('scroll')) category = itemCategories.SCROLL;
        else if (type.includes('book') || type.includes('tome')) category = itemCategories.BOOK;
        else if (type.includes('artifact')) category = itemCategories.ARTIFACT;
        else if (type.includes('weapon')) category = itemCategories.WEAPON;
        
        // Generate item using the ItemGenerator
        const generatedItem = ItemGenerator.generateItem({
            category: category,
            rarity: Object.keys(itemRarity).includes(rarity) ? rarity : 'UNCOMMON',
            questContext: context.questContext,
            locationContext: context.locationContext
        });
        
        // Override with AI-generated details
        generatedItem.name = itemName;
        generatedItem.description = description;
        
        return generatedItem;
        
    } catch (error) {
        console.error('Error parsing AI item response:', error);
        // Fallback to basic item generation
        return ItemGenerator.generateItem(context);
    }
}

// New action handling functions to replace old system
async function handleActionConsequences(actionAnalysis) {
    const { actionType, extractedData, confidence } = actionAnalysis;

    // Handle immediate consequences based on action type
    switch (actionType) {
        case GameActions.actionTypes.MOVEMENT:
            await handleMovementAction(extractedData);
            break;

        case GameActions.actionTypes.COMBAT:
            await handleCombatAction(extractedData);
            break;

        case GameActions.actionTypes.INTERACTION:
            await handleInteractionAction(extractedData);
            break;

        case GameActions.actionTypes.EXPLORATION:
            await handleExplorationAction(extractedData);
            break;

        case GameActions.actionTypes.REST:
            await handleRestAction(extractedData);
            break;

        case GameActions.actionTypes.INVENTORY:
            await handleInventoryAction(extractedData);
            break;

        case GameActions.actionTypes.SKILL:
            await handleSkillAction(extractedData);
            break;

        default:
            // For unknown or other action types, minimal processing
            break;
    }
}

async function handleMovementAction(extractedData) {
    const command = extractedData.originalCommand || extractedData.primary || '';
    
    // Use LocationManager for advanced movement analysis
    const movementAnalysis = LocationManager.analyzeMovementCommand(command, player.currentLocation, player);
    
    if (movementAnalysis.confidence > 0.5 && movementAnalysis.destination) {
        const destination = movementAnalysis.destination;
        
        // Handle different movement types
        switch (movementAnalysis.movementType) {
            case 'city_travel':
            case 'region_travel':
                player.currentLocation = destination.name;
                displayMessage(`After ${movementAnalysis.estimatedTime} minutes of travel, you arrive at ${destination.name}.`);
                if (destination.description) {
                    displayMessage(destination.description);
                }
                LocationManager.saveLocationToHistory(destination.name, player.name);
                break;
                
            case 'district_travel':
            case 'building_entry':
                player.currentLocation = `${destination.name}, ${destination.parentLocation}`;
                displayMessage(`You move to ${destination.name}.`);
                break;
                
            case 'directional_travel':
                if (destination.possibleLocations && destination.possibleLocations.length > 0) {
                    const randomDestination = destination.possibleLocations[Math.floor(Math.random() * destination.possibleLocations.length)];
                    player.currentLocation = randomDestination;
                    displayMessage(`Traveling ${destination.direction}, you reach ${randomDestination}.`);
                    LocationManager.saveLocationToHistory(randomDestination, player.name);
                } else {
                    displayMessage(`You head ${destination.direction} but don't find anything notable.`);
                }
                break;
                
            case 'interpreted_travel':
                player.currentLocation = destination.name;
                displayMessage(`You travel to ${destination.name}.`);
                LocationManager.saveLocationToHistory(destination.name, player.name);
                break;
                
            default:
                displayMessage("You wander around but don't go anywhere specific.");
                return;
        }
        
        // Check for encounters based on calculated chance
        if (Math.random() < movementAnalysis.encounterChance) {
            checkRandomEncounter();
        }
        
        updatePlayerStatsDisplay();
        
    } else if (extractedData.primary) {
        // Fallback to simple movement
        let newLocation = extractedData.primary;
        newLocation = newLocation.replace(/^(the|a|an)\s+/i, '').trim();
        newLocation = newLocation.replace(/\s+(and|then|,).*$/i, '').trim();

        if (newLocation && !['alone', 'him', 'her', 'them', 'person', 'npc'].includes(newLocation.toLowerCase())) {
            player.currentLocation = newLocation;
            displayMessage(`You travel to ${newLocation}.`);
            LocationManager.saveLocationToHistory(newLocation, player.name);
            if (Math.random() < 0.3) checkRandomEncounter();
            updatePlayerStatsDisplay();
        }
    }
}

async function handleCombatAction(extractedData) {
    // 60% chance to trigger combat for combat actions
    if (Math.random() < 0.6) {
        checkRandomEncounter();
    }
}

async function handleInteractionAction(extractedData) {
    await handleNPCInteraction();
}

async function handleExplorationAction(extractedData) {
    // 40% chance to find something when searching/exploring
    if (Math.random() < 0.4) {
        if (Math.random() < 0.3) {
            // 30% chance for item, 70% chance for gold
            const foundItem = ItemGenerator.generateItem({
                locationContext: player.currentLocation,
                rarity: Math.random() < 0.8 ? 'COMMON' : 'UNCOMMON'
            });
            ItemManager.addItemToInventory(player, foundItem);
            displayMessage(`You found: ${foundItem.name}!`, 'success');
        } else {
            const goldFound = Math.floor(Math.random() * 15) + 5;
            updateGold(goldFound, 'exploration');
        }
        updatePlayerStatsDisplay();
    }
}

async function handleRestAction(extractedData) {
    const healAmount = Math.floor(Math.random() * 20) + 10;
    player.hp = Math.min(player.maxHp, player.hp + healAmount);
    displayMessage(`You feel refreshed and recover ${healAmount} HP.`, 'success');
    updatePlayerStatsDisplay();
}

async function handleInventoryAction(extractedData) {
    // Handle basic inventory actions - more complex logic can be added
    if (extractedData.primary) {
        const itemName = extractedData.primary.toLowerCase();
        const item = player.inventory.find(item => 
            item.name.toLowerCase().includes(itemName)
        );

        if (item && item.type === 'consumable' && item.effect?.type === 'heal') {
            const index = player.inventory.indexOf(item);
            player.hp = Math.min(player.maxHp, player.hp + item.effect.amount);
            player.inventory.splice(index, 1);
            displayMessage(`You used ${item.name} and healed ${item.effect.amount} HP!`, 'success');
            updatePlayerStatsDisplay();
        }
    }
}

async function handleSkillAction(extractedData) {
    // Handle skill-based actions with basic success/failure
    const skillCheck = Math.random();
    if (skillCheck > 0.3) {
        displayMessage("Your skill attempt succeeds!", 'success');
    } else {
        displayMessage("Your skill attempt fails.", 'error');
    }
}

async function processActionResults(actionAnalysis, aiResponse) {
    // Process secondary effects based on AI response and action type
    const { actionType } = actionAnalysis;
    let gameStateChanged = false;

    // Check if AI response indicates quest progress
    if (aiResponse.toLowerCase().includes('quest') && aiResponse.toLowerCase().includes('complete')) {
        checkQuestCompletion(aiResponse);
        gameStateChanged = true;
    }

    // Check for level up or experience gain
    if (aiResponse.toLowerCase().includes('experience') || aiResponse.toLowerCase().includes('exp')) {
        const expMatch = aiResponse.match(/(\d+)\s*(?:exp|experience)/i);
        if (expMatch) {
            const expGained = parseInt(expMatch[1]);
            player.exp += expGained;
            displayMessage(`You gained ${expGained} experience!`, 'success');
            checkLevelUp();
            gameStateChanged = true;
        }
    }

    // Check for gold gain or loss in AI response
    const goldMatches = [
        aiResponse.match(/(?:gain|find|receive|earn|get|obtain)\s*(\d+)\s*gold/i),
        aiResponse.match(/(\d+)\s*gold\s*(?:pieces?|coins?)?.*(?:gained|found|received|earned|obtained)/i),
        aiResponse.match(/(?:lose|lost|spend|pay|cost)\s*(\d+)\s*gold/i),
        aiResponse.match(/(\d+)\s*gold.*(?:lost|spent|paid|costs?)/i)
    ];

    for (const match of goldMatches) {
        if (match) {
            const goldAmount = parseInt(match[1]);
            const isLoss = /(?:lose|lost|spend|pay|cost)/i.test(aiResponse);
            
            if (isLoss) {
                player.gold = Math.max(0, player.gold - goldAmount);
                displayMessage(`You lost ${goldAmount} gold.`, 'error');
            } else {
                player.gold += goldAmount;
                displayMessage(`You gained ${goldAmount} gold!`, 'success');
            }
            gameStateChanged = true;
            break; // Only process the first gold match to avoid duplicates
        }
    }

    // Check for item mentions that might need to be added to inventory
    if (aiResponse.toLowerCase().includes('receive') && (aiResponse.toLowerCase().includes('item') || aiResponse.toLowerCase().includes('weapon') || aiResponse.toLowerCase().includes('armor') || aiResponse.toLowerCase().includes('potion'))) {
        // This will be handled by the existing handleItemReceival function
        console.log('Item receival detected in AI response');
    }

    if (gameStateChanged) {
        updatePlayerStatsDisplay();
        saveGame(); // Auto-save when game state changes significantly
    }
}

function checkQuestCompletion(aiResponse) {
    // Simple quest completion detection
    const activeQuests = player.quests.filter(q => !q.completed);
    if (activeQuests.length > 0) {
        // Mark first active quest as completed if AI indicates success
        activeQuests[0].completed = true;
        displayMessage("Quest completed!", 'success');
        
        // Bonus rewards
        const expReward = 50;
        const goldReward = 25;
        
        player.exp += expReward;
        player.gold += goldReward;
        
        displayMessage(`Quest rewards: ${expReward} experience and ${goldReward} gold!`, 'success');
        updateQuestButton();
        updatePlayerStatsDisplay();
    }
}

function displayBackground() {
    shopInterface.classList.add('hidden');
    inventoryInterface.classList.add('hidden');
    skillsInterface.classList.add('hidden');
    combatInterface.classList.add('hidden');
    questInterface.classList.add('hidden');
    backgroundInterface.classList.remove('hidden');

    displayMessage("Reviewing your character background...", 'info');

    backgroundContentDisplay.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="parchment-box p-4">
                <h5 class="font-bold text-lg mb-3 text-amber-900">Character Details</h5>
                <p class="mb-2"><strong>Name:</strong> ${player.name || 'Unknown'}</p>
                <p class="mb-2"><strong>Gender:</strong> ${player.gender || 'Unknown'}</p>
                <p class="mb-2"><strong>Class:</strong> ${player.class || 'Unknown'}</p>
                <p class="mb-2"><strong>Level:</strong> ${player.level || 1}</p>
                <p class="mb-2"><strong>Current Location:</strong> ${player.currentLocation || 'Unknown'}</p>
            </div>

            <div class="parchment-box p-4">
                <h5 class="font-bold text-lg mb-3 text-amber-900">Character Stats</h5>
                <p class="mb-1"><strong>Strength:</strong> ${player.stats.strength || 10}</p>
                <p class="mb-1"><strong>Dexterity:</strong> ${player.stats.dexterity || 10}</p>
                <p class="mb-1"><strong>Intelligence:</strong> ${player.stats.intelligence || 10}</p>
                <p class="mb-1"><strong>Constitution:</strong> ${player.stats.constitution || 10}</p>
                <p class="mb-1"><strong>Wisdom:</strong> ${player.stats.wisdom || 10}</p>
                <p class="mb-1"><strong>Charisma:</strong> ${player.stats.charisma || 10}</p>
            </div>
        </div>

        <div class="parchment-box p-4 mt-4">
            <h5 class="font-bold text-lg mb-3 text-amber-900">Background Story</h5>
            <div class="text-sm leading-relaxed text-amber-800">
                ${player.background || 'No background story available. Create a character to generate one!'}
            </div>
        </div>
    `;
}

function restPlayer() {
    player.hp = player.maxHp;
    displayMessage("You take a long rest and restore your health to full.", 'success');
    updatePlayerStatsDisplay();
}

// Event Listeners
newGameBtn.addEventListener('click', () => {
    showScreen('character-creation-screen');
});

loadGameBtn.addEventListener('click', loadGame);

generateBackgroundBtn.addEventListener('click', generateCharacterBackground);

createCharacterBtn.addEventListener('click', () => {
    const name = charNameInput.value.trim();
    const charClass = charClassSelect.value;
    const gender = Array.from(charGenderRadios).find(radio => radio.checked)?.value;
    const background = charBackgroundTextarea.value.trim();

    if (!name || !charClass || !gender) {
        alert('Please fill in all character details.');
        return;
    }

    // Set up player character
    player.name = name;
    player.class = charClass;
    player.gender = gender;
    player.background = background;

    // Initialize base stats to 10 before applying any bonuses
    player.stats = {
        strength: 10,
        dexterity: 10,
        intelligence: 10,
        constitution: 10,
        wisdom: 10,
        charisma: 10
    };

    // Initialize character with new progression system
    CharacterManager.initializeCharacter(player, charClass);

    // Apply class bonuses from old system for compatibility
    const classData = classes[charClass];
    if (classData) {
        // Set stats based on class
        Object.entries(classData.statFocus).forEach(([stat, value]) => {
            player.stats[stat] = 10 + value; // Base 10 + class bonus
        });
    }

    // Add starting equipment
    if (charClass === 'warrior') {
        player.inventory.push({ ...items.find(item => item.id === 'short_sword') });
        player.inventory.push({ ...items.find(item => item.id === 'leather_armor') });
    }
    player.inventory.push({ ...items.find(item => item.id === 'healing_potion') });

    updatePlayerStatsDisplay();
    updateQuestButton(); // Initialize quest button for new character
    showScreen('game-play-screen');
    displayMessage(`Welcome to Pedena, ${player.name} the ${player.class}!`);
    displayMessage(`You begin your adventure in ${player.currentLocation}.`);
    generateWorldDescription(player.currentLocation);
});

// Custom Command Event Listeners
executeCommandBtn.addEventListener('click', () => {
    processCustomCommand(customCommandInput.value);
    customCommandInput.value = ''; // Clear input after execution
});

customCommandInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        processCustomCommand(customCommandInput.value);
        customCommandInput.value = ''; // Clear input after execution
    }
});

// Game Action Event Listeners
saveGameBtn.addEventListener('click', saveGame);
newQuestBtn.addEventListener('click', () => {
    // Check if we should show quests or generate new quest
    const activeQuests = player.quests.filter(q => !q.completed);
    if (activeQuests.length > 0) {
        displayQuests();
    } else {
        generateQuest();
    }
});
showInventoryBtn.addEventListener('click', displayInventory);
showShopBtn.addEventListener('click', displayShop);
showBackgroundBtn.addEventListener('click', displayBackground);
document.getElementById('show-progression-btn').addEventListener('click', displayCharacterProgression);

// Combat Event Listeners
attackBtn.addEventListener('click', playerAttack);
fleeBtn.addEventListener('click', fleeCombat);

// Interface Exit Buttons
exitShopBtn.addEventListener('click', () => {
    shopInterface.classList.add('hidden');
});

exitInventoryBtn.addEventListener('click', () => {
    inventoryInterface.classList.add('hidden');
});

exitSkillsBtn.addEventListener('click', () => {
    skillsInterface.classList.add('hidden');
});

exitQuestsBtn.addEventListener('click', () => {
    questInterface.classList.add('hidden');
});

exitBackgroundBtn.addEventListener('click', () => {
    backgroundInterface.classList.add('hidden');
});

document.getElementById('exit-progression-btn').addEventListener('click', () => {
    document.getElementById('progression-interface').classList.add('hidden');
});

// Quest management functions
function markQuestComplete(questId) {
    const quest = player.quests.find(q => q.id === questId);
    if (quest) {
        quest.completed = true;
        displayMessage(`Quest completed: ${quest.description.substring(0, 50)}...`, 'success');
        player.exp += 50;
        player.gold += 25;
        updateQuestButton();
        updatePlayerStatsDisplay();
        checkLevelUp();
    }
}

function abandonQuest(questId) {
    if (confirm("Are you sure you want to abandon this quest?")) {
        const questIndex = player.quests.findIndex(q => q.id === questId);
        if (questIndex >= 0) {
            const quest = player.quests[questIndex];
            player.quests.splice(questIndex, 1);
            displayMessage(`You abandoned the quest: ${quest.description.substring(0, 50)}...`, 'info');
            updateQuestButton();
            displayQuests(); // Refresh the quest display
        }
    }
}

function getActiveQuestsContext() {
    const activeQuests = player.quests.filter(q => !q.completed);
    if (activeQuests.length > 0) {
        return `ACTIVE QUESTS: ${activeQuests.map(q => q.description.substring(0, 100)).join('; ')}\n`;
    }
    return '';
}

function updateQuestButton() {
    console.log('updateQuestButton called - Total quests:', player.quests.length, 'Active quests:', player.quests.filter(q => !q.completed).length);

    const activeQuests = player.quests.filter(q => !q.completed);
    if (activeQuests.length > 0) {
        newQuestBtn.textContent = `View Quests (${activeQuests.length})`;
        console.log('Button set to View Quest mode');
    } else {
        newQuestBtn.textContent = 'New Quest';
        console.log('Button set to New Quest mode');
    }
}

function displayQuests() {
    inventoryInterface.classList.add('hidden');
    shopInterface.classList.add('hidden');
    skillsInterface.classList.add('hidden');
    combatInterface.classList.add('hidden');
    backgroundInterface.classList.add('hidden');
    questInterface.classList.remove('hidden');

    displayMessage("Reviewing your quests...", 'info');

    questListDisplay.innerHTML = '';

    if (player.quests.length === 0) {
        questListDisplay.innerHTML = '<p class="text-center text-amber-800">You have no quests yet. Click "New Quest" to start an adventure!</p>';
        return;
    }

    const activeQuests = player.quests.filter(q => !q.completed);
    const completedQuests = player.quests.filter(q => q.completed);

    if (activeQuests.length > 0) {
        const activeHeader = document.createElement('h5');
        activeHeader.classList.add('font-bold', 'text-lg', 'mb-3', 'text-green-700');
        activeHeader.textContent = 'Active Quests';
        questListDisplay.appendChild(activeHeader);

        activeQuests.forEach(quest => {
            const questDiv = document.createElement('div');
            questDiv.classList.add('parchment-box', 'p-4', 'mb-3', 'border-l-4', 'border-green-600');
            questDiv.innerHTML = `
                <p class="font-bold text-green-800 mb-2">Quest ${quest.id}</p>
                <p class="text-sm leading-relaxed mb-3">${quest.description}</p>
                <div class="flex gap-2">
                    <button onclick="markQuestComplete(${quest.id})" class="btn-parchment text-sm px-3 py-1 bg-green-600 text-white">
                        Mark Complete
                    </button>
                    <button onclick="abandonQuest(${quest.id})" class="btn-parchment text-sm px-3 py-1 bg-red-600 text-white">
                        Abandon Quest
                    </button>
                </div>
            `;
            questListDisplay.appendChild(questDiv);
        });
    }

    if (completedQuests.length > 0) {
        const completedHeader = document.createElement('h5');
        completedHeader.classList.add('font-bold', 'text-lg', 'mb-3', 'mt-6', 'text-blue-700');
        completedHeader.textContent = 'Completed Quests';
        questListDisplay.appendChild(completedHeader);

        completedQuests.forEach(quest => {
            const questDiv = document.createElement('div');
            questDiv.classList.add('parchment-box', 'p-4', 'mb-3', 'border-l-4', 'border-blue-600', 'opacity-75');
            questDiv.innerHTML = `
                <p class="font-bold text-blue-800 mb-2">Quest ${quest.id} ✓</p>
                <p class="text-sm leading-relaxed text-blue-700">${quest.description}</p>
            `;
            questListDisplay.appendChild(questDiv);
        });
    }

    // Add New Quest button at the bottom
    const newQuestButton = document.createElement('button');
    newQuestButton.classList.add('btn-parchment', 'w-full', 'mt-4');
    newQuestButton.innerHTML = '<i class="gi gi-scroll-unfurled mr-2"></i>Generate New Quest';
    newQuestButton.onclick = () => {
        questInterface.classList.add('hidden');
        generateQuest();
    };
    questListDisplay.appendChild(newQuestButton);
}

async function generateQuest() {
    displayMessage("Seeking new adventures...", 'info');

    const contextPrompt = `
Generate a fantasy RPG quest for ${player.name} (${player.class}, Level ${player.level}) in ${player.currentLocation}. 
Current context: HP ${player.hp}/${player.maxHp}, Gold ${player.gold}

Create a quest that:
1. Fits their level and class
2. Has a clear objective
3. Mentions specific rewards
4. Is 2-3 sentences long
5. Includes potential consequences for success/failure

Format: Just the quest description, no extra text.`;

    const questDescription = await callGeminiAPI(contextPrompt, 0.8, 400);
    if (questDescription) {
        const newQuest = {
            id: Date.now(),
            description: questDescription,
            completed: false
        };
        player.quests.push(newQuest);
        console.log('Quest added:', newQuest);
        console.log('Total quests:', player.quests.length);
        console.log('Active quests:', player.quests.filter(q => !q.completed).length);

        displayMessage(`New quest available: ${questDescription}`, 'success');
        updateQuestButton();
        saveGame(); // Auto-save when quest is generated
    } else {
        displayMessage("No new quests are available at this time.", 'info');
    }
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    // Check if there's a saved game to enable load button
    if (localStorage.getItem('pedenaRPGSave')) {
        loadGameBtn.disabled = false;
    }

    // Load conversation history if available
    loadConversationHistory();

    // Make functions globally accessible
    window.displayCharacterProgression = displayCharacterProgression;
    window.updateQuestButton = updateQuestButton;
    window.markQuestComplete = markQuestComplete;
    window.displayQuests = displayQuests;
    window.generateQuest = generateQuest;
    window.learnNewSpell = learnNewSpell;
    window.abandonQuest = abandonQuest;
    window.LocationManager = LocationManager;
    window.GameActions = GameActions;
    
    // Debug functions for local storage
    window.debugInventory = function() {
        console.log('=== INVENTORY DEBUG ===');
        console.log('Player name:', player.name);
        console.log('Current inventory:', player.inventory);
        console.log('Inventory length:', player.inventory ? player.inventory.length : 'undefined');
        
        // Check local storage
        const savedInventory = localStorage.getItem(`inventory_${player.name}`);
        const savedGame = localStorage.getItem('pedenaRPGSave');
        
        console.log('Saved inventory in localStorage:', savedInventory ? JSON.parse(savedInventory) : 'Not found');
        console.log('Full saved game:', savedGame ? JSON.parse(savedGame) : 'Not found');
        
        // List all localStorage keys
        console.log('All localStorage keys:', Object.keys(localStorage));
        
        return {
            currentInventory: player.inventory,
            savedInventory: savedInventory ? JSON.parse(savedInventory) : null,
            localStorageKeys: Object.keys(localStorage)
        };
    };
    
    window.fixInventory = function() {
        console.log('Attempting to fix inventory...');
        if (!player.inventory) {
            player.inventory = [];
        }
        ItemManager.saveInventoryToStorage(player);
        saveGame();
        console.log('Inventory fixed and saved');
    };
});

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
// Function to display character progression details.
function displayCharacterProgression() {
    if (!player.classProgression) {
        displayMessage("Character progression not available.", 'error');
        return;
    }

    skillsInterface.classList.add('hidden');
    inventoryInterface.classList.add('hidden');
    shopInterface.classList.add('hidden');
    questInterface.classList.add('hidden');
    combatInterface.classList.add('hidden');
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
}

function learnNewSpell(spellName) {
    const result = CharacterManager.learnSpell(player, spellName);
    displayMessage(result.message, result.success ? 'success' : 'error');
    if (result.success) {
        displayCharacterProgression(); // Refresh display
    }
}