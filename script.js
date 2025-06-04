// Import game data and assets
import { gameData, GameDataManager } from './assets/game-data-loader.js';
import { QuestCharacterGenerator } from './assets/quest-character-names.js';
import { CharacterManager } from './game-logic/character-manager.js';
import { GameActions } from './game-logic/game-actions.js';
import { LocationManager } from './game-logic/location-manager.js';
import { classProgression, spellDefinitions, abilityDefinitions } from './game-logic/class-progression.js';
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

    // Refresh inventory display if it's currently open
    if (!inventoryInterface.classList.contains('hidden')) {
        displayInventory();
    }

    // Refresh shop display if it's currently open (for updated affordable items)
    if (!shopInterface.classList.contains('hidden')) {
        displayShop();
    }

    // Auto-save after gold changes
    saveGame();

    console.log(`Gold updated: ${oldGold} -> ${player.gold} (change: ${amount})`);
}

function displayMessage(message, type = 'info') {
    const p = document.createElement('p');
    p.classList.add('mb-2', 'pb-1', 'border-b', 'border-amber-700/50');

    let icon = '';
    if (type === 'combat') {
        p.classList.add('text-red-700', 'font-bold');
        icon = '<i class="gi gi-sword-brandish mr-2"></i>';
    } else if (type === 'success') {
        p.classList.add('text-green-700');
        icon = '<i class="gi gi-check-mark mr-2"></i>';
    } else if (type === 'error') {
        p.classList.add('text-red-500');
        icon = '<i class="gi gi-cancel mr-2"></i>';
    } else if (type === 'exploration') {
        p.classList.add('text-blue-600');
        icon = '<i class="gi gi-telescope mr-2"></i>';
    } else if (type === 'info') {
        icon = '<i class="gi gi-scroll-quill mr-2"></i>';
    }

    p.innerHTML = icon + message;
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

function hideScreen(screenId) {
    const screens = [startScreen, characterCreationScreen, gamePlayScreen, combatInterface, shopInterface, inventoryInterface, skillsInterface, questInterface, backgroundInterface, document.getElementById('progression-interface')];
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

        // Validate and fix stats after loading
        if (validateAndFixStats(player)) {
            displayMessage("Character stats have been automatically corrected.", 'info');
            saveGame(); // Save the corrected stats immediately
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

async function executeCustomCommand(command) {
    displayMessage(`> ${command}`, 'info');

    // Check if it's a movement command
    const movementKeywords = ['go to', 'travel to', 'move to', 'head to', 'walk to', 'run to', 'visit', 'enter'];
    const isMovement = movementKeywords.some(keyword => command.toLowerCase().includes(keyword));

    if (isMovement) {
        await handleStructuredMovement(command);
        return;
    }

    displayMessage(`> ${command}`, 'user');
    displayMessage("Processing your command...", 'info');

    // Check for direct gold giving commands
    const goldGivePattern = /(?:give|hand|pay).*?(\d+)\s*gold/i;
    const goldMatch = command.match(goldGivePattern);
    if (goldMatch) {
        const goldAmount = parseInt(goldMatch[1]);
        if (player.gold >= goldAmount) {
            updateGold(-goldAmount, 'given to NPC');
        }
    }

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

                const oldLocation = player.currentLocation;
                player.currentLocation = newLocationName;
                displayMessage(`You leave ${oldLocation} and arrive at ${newLocationName}.`, 'success');
                LocationManager.saveLocationToHistory(newLocationName, player.name);
                updatePlayerStatsDisplay(); // Ensure UI is updated

                // Check for encounters
                if (Math.random() < movementAnalysis.encounterChance) {
                    checkRandomEncounter();
                }
            }
        }

        saveConversationHistory();
        return;
    }

    // Check for basic movement patterns as fallback
    const basicMovementPatterns = [
        /(?:go|move|travel|head|journey|visit)\s+(?:to\s+)?(?:the\s+)?(.+)/i,
        /(?:enter|go\s+into)\s+(?:the\s+)?(.+)/i,
        /(?:leave|exit)\s+(?:the\s+)?(.+?)(?:\s+and\s+(?:go|head)\s+(?:to\s+)?(.+))?/i
    ];

    let isBasicMovement = false;
    let destination = null;

    for (const pattern of basicMovementPatterns) {
        const match = command.match(pattern);
        if (match) {
            isBasicMovement = true;
            destination = match[2] || match[1]; // Use second capture group if available, otherwise first
            break;
        }
    }

    if (isBasicMovement && destination) {
        // Clean up the destination name
        destination = destination.replace(/^(the|a|an)\s+/i, '').trim();
        destination = destination.replace(/\s+(and|then|,).*$/i, '').trim();

        // Capitalize properly
        destination = destination.replace(/\b\w/g, letter => letter.toUpperCase());

        if (destination && !['Alone', 'Him', 'Her', 'Them', 'Person', 'Npc'].includes(destination)) {
            const oldLocation = player.currentLocation;
            player.currentLocation = destination;

            // Generate AI response for the movement
            const movementPrompt = `${player.name} travels from ${oldLocation} to ${destination}. Describe the journey and arrival in 1-2 sentences.`;
            const movementResponse = await callGeminiAPI(movementPrompt, 0.7, 300, true);

            if (movementResponse) {
                displayMessage(movementResponse);
                addToConversationHistory('assistant', movementResponse);
            }

            displayMessage(`You leave ${oldLocation} and arrive at ${destination}.`, 'success');
            LocationManager.saveLocationToHistory(destination, player.name);
            updatePlayerStatsDisplay(); // Ensure UI is updated

            if (Math.random() < 0.3) checkRandomEncounter();
            saveConversationHistory();
            return;
        }
    }

    // For non-movement commands, use the existing system
    const actionAnalysis = GameActions.analyzeCommand(command, player);
    actionAnalysis.originalCommand = command; // Ensure original command is preserved

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
    const contextPrompt = `CURRENT GAME STATE:
Player: ${player.name} (${player.class}, Level ${player.level})
Current Location: ${player.currentLocation}
HP: ${player.hp}/${player.maxHp}
Gold: ${player.gold}
Inventory: ${player.inventory.map(item => item.name).join(', ') || 'empty'}
Equipped: ${Object.values(player.equipment).filter(item => item).map(item => item.name).join(', ') || 'nothing'}
Class Abilities: ${abilitiesText}
Known Spells/Cantrips: ${spellsText}

${questContext}
NPCs in location: ${getNPCsInLocation(player.currentLocation).map(npc => npc.name).join(', ') || 'none'}

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

async function handleStructuredMovement(command) {
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

    // Create structured prompt for AI with JSON schema
    const movementPrompt = `
You are a game master for a fantasy RPG. The player "${player.name}" (Level ${player.level} ${player.class}) wants to travel from "${player.currentLocation}" to "${destination}".

You must respond with ONLY valid JSON in this exact format:
{
    "canMove": true/false,
    "newLocation": "Exact location name",
    "travelTime": "time description",
    "description": "2-3 sentence travel description",
    "encounterChance": 0.0-1.0,
    "encounterType": "none/combat/social/discovery",
    "goldCost": 0
}

Rules:
- If destination is vague, interpret as closest reasonable location
- Keep location names consistent and memorable
- Travel time should be realistic for fantasy setting
- Description should be immersive but brief
- Encounter chance: 0.1 for safe areas, 0.3 for wilderness, 0.5 for dangerous areas
- Gold cost only for transport services (ships, carriages, etc.)

Current context: Player has ${player.gold} gold, is at "${player.currentLocation}"
`;

    try {
        const response = await callGeminiAPI(movementPrompt, 0.3, 400);

        if (!response) {
            displayMessage("Unable to process movement request.", 'error');
            return;
        }

        // Extract JSON from response
        let movementData;
        try {
            // Try to find JSON in the response
            const jsonMatch = response.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                movementData = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error("No JSON found in response");
            }
        } catch (parseError) {
            console.error("Failed to parse movement JSON:", parseError);
            // Fallback to old system
            await handleMovement(command);
            return;
        }

        // Validate required fields
        if (!movementData.canMove === undefined || !movementData.newLocation || !movementData.description) {
            console.error("Invalid movement data structure:", movementData);
            await handleMovement(command);
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
            player.gold -= movementData.goldCost;
            displayMessage(`You pay ${movementData.goldCost} gold for transportation.`, 'info');
        }

        // Update player location
        player.currentLocation = movementData.newLocation;
        displayMessage(movementData.description, 'success');

        // Show travel time if provided
        if (movementData.travelTime) {
            displayMessage(`Travel time: ${movementData.travelTime}`, 'info');
        }

        // Save the new location
        saveGame();

        // Check for encounters based on AI decision
        if (movementData.encounterChance > 0 && Math.random() < movementData.encounterChance) {
            setTimeout(async () => {
                if (movementData.encounterType === 'combat') {
                    await generateRandomEncounter();
                } else if (movementData.encounterType === 'social') {
                    await generateNPCEncounter();
                } else if (movementData.encounterType === 'discovery') {
                    await generateDiscoveryEncounter();
                } else {
                    await generateRandomEncounter(); // Default fallback
                }
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

        // Save the new location
        saveGame();

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
Generate a brief discovery encounter for ${player.name} (Level ${player.level} ${player.class}) at ${player.currentLocation}.

Examples: finding a hidden cache, discovering ancient ruins, spotting a rare herb, finding a shortcut, etc.

Respond with 2-3 sentences describing what they find and what they can do about it.
`;

    const discovery = await callGeminiAPI(discoveryPrompt, 0.7, 200);
    if (discovery) {
        displayMessage(discovery, 'discovery');
    }
}

async function generateNPCEncounter() {
    displayMessage("You encounter someone on the road...", 'info');

    // Use existing NPC generation system
    await startConversation();
}

async function generateRandomEncounter() {
    displayMessage("You encounter something on your journey...", 'info');

    // Generate a random encounter type
    const encounterTypes = ['combat', 'treasure', 'npc', 'event'];
    const encounterType = encounterTypes[Math.floor(Math.random() * encounterTypes.length)];

    switch (encounterType) {
        case 'combat':
            displayMessage("A wild monster appears!", 'combat');
            break;
        case 'treasure':
            displayMessage("You found a hidden treasure!", 'success');
            break;
        case 'npc':
            displayMessage("You meet a wandering traveler.", 'info');
            break;
        case 'event':
            displayMessage("A strange event unfolds before you...", 'exploration');
            break;
        default:
            displayMessage("Nothing happens...", 'info');
            break;
    }
}

async function generateQuest() {
    displayMessage("Seeking new adventures...", 'info');

    const questPrompt = `
Generate a quest for ${player.name}, a level ${player.level} ${player.class} in ${player.currentLocation}.

You must respond with ONLY valid JSON in this exact format:
{
    "title": "Quest Title",
    "description": "Detailed quest description (2-3 sentences)",
    "objective": "Clear objective statement",
    "rewards": {
        "gold": 50-500,
        "experience": 25-200,
        "items": ["item1", "item2"] or []
    },
    "difficulty": "Easy/Medium/Hard/Very Hard",
    "estimatedTime": "time description",
    "location": "quest location",
    "questGiver": "NPC name or source",
    "requirements": ["requirement1", "requirement2"] or []
}

Quest should be appropriate for level ${player.level}. 
Reward scaling: Level 1-3: 50-150 gold, Level 4-6: 100-300 gold, Level 7+: 200-500 gold.
Make it engaging and fantasy-appropriate.
`;

    try {
        const response = await callGeminiAPI(questPrompt, 0.7, 500);

        if (!response) {
            displayMessage("No new quests are available at this time.", 'info');
            return;
        }

        // Extract JSON from response
        let questData;
        try {
            const jsonMatch = response.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                questData = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error("No JSON found in response");
            }
        } catch (parseError) {
            console.error("Failed to parse quest JSON:", parseError);
            // Fallback to old system
            await generateQuestFallback();
            return;
        }

        // Validate required fields
        if (!questData.title || !questData.description || !questData.rewards) {
            console.error("Invalid quest data structure:", questData);
            await generateQuestFallback();
            return;
        }

        // Create quest object
        const questId = Date.now().toString();
        const quest = {
            id: questId,
            title: questData.title,
            description: questData.description,
            objective: questData.objective || questData.description,
            completed: false,
            rewards: {
                gold: questData.rewards.gold || 50,
                experience: questData.rewards.experience || 25,
                items: questData.rewards.items || []
            },
            difficulty: questData.difficulty || 'Medium',
            estimatedTime: questData.estimatedTime || 'Unknown',
            location: questData.location || player.currentLocation,
            questGiver: questData.questGiver || 'Unknown',
            requirements: questData.requirements || [],
            dateCreated: new Date().toLocaleDateString()
        };

        player.quests.push(quest);
        saveGame();

        // Display quest information
        displayMessage(`New quest available: ${quest.title}`, 'success');
        displayMessage(quest.description, 'quest');
        displayMessage(`Rewards: ${quest.rewards.gold} gold, ${quest.rewards.experience} XP${quest.rewards.items.length > 0 ? ', ' + quest.rewards.items.join(', ') : ''}`, 'info');
        displayMessage(`Difficulty: ${quest.difficulty} | Estimated Time: ${quest.estimatedTime}`, 'info');

    } catch (error) {
        console.error("Quest generation error:", error);
        displayMessage("Unable to generate quest at this time. Please try again.", 'error');
    }
}

// Fallback quest generation for compatibility
async function generateQuestFallback() {
    const questPrompt = `
Generate a quest for ${player.name}, a level ${player.level} ${player.class} in ${player.currentLocation}.

The quest should be appropriate for their level and current location. Include:
1. A clear objective
2. A reward (gold and/or items)
3. Any special requirements or challenges
4. An interesting backstory

Make it engaging and appropriate for a fantasy RPG setting.
`;

    const questDescription = await callGeminiAPI(questPrompt, 0.8, 400);

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
    } else {
        displayMessage("No new quests are available at this time.", 'info');
    }
}

function checkQuestCompletion(playerAction) {
    if (!player.quests || player.quests.length === 0) return;

    player.quests.forEach(quest => {
        if (!quest.completed) {
            // Enhanced keyword matching for quest completion
            let isCompleted = false;

            // Check objective if available, otherwise use description
            const questText = (quest.objective || quest.description).toLowerCase();
            const actionText = playerAction.toLowerCase();

            // Extract key action words and target objects
            const actionKeywords = questText.match(/\b(kill|defeat|slay|destroy|find|locate|discover|collect|gather|deliver|bring|talk|speak|converse|visit|go to|explore|investigate|solve|complete)\b/g) || [];
            const targetKeywords = questText.match(/\b(goblin|orc|dragon|treasure|artifact|scroll|book|merchant|priest|king|queen|temple|castle|forest|mountain|cave|ruins)\b/g) || [];

            // Check if action contains quest keywords
            if (actionKeywords.length > 0) {
                const matchedActions = actionKeywords.filter(keyword => actionText.includes(keyword));
                if (matchedActions.length > 0) {
                    // If we have targetKeywords, check for those too
                    if (targetKeywords.length > 0) {
                        const matchedTargets = targetKeywords.filter(keyword => actionText.includes(keyword));
                        isCompleted = matchedTargets.length > 0;
                    } else {
                        // No specific targets mentioned, action match is enough
                        isCompleted = true;
                    }
                }
            }

            // Additional checks for location-based quests
            if (!isCompleted && quest.location && questText.includes(quest.location.toLowerCase())) {
                if (actionText.includes('arrive') || actionText.includes('reach') || actionText.includes('enter')) {
                    isCompleted = true;
                }
            }

            if (isCompleted) {
                quest.completed = true;
                displayMessage(`Quest completed: ${quest.title}!`, 'success');

                // Award structured quest rewards
                if (quest.rewards) {
                    // Award gold
                    if (quest.rewards.gold > 0) {
                        player.gold += quest.rewards.gold;
                        displayMessage(`You earned ${quest.rewards.gold} gold!`, 'reward');
                    }

                    // Award experience
                    if (quest.rewards.experience > 0) {
                        const oldLevel = player.level;
                        CharacterManager.gainExperience(player, quest.rewards.experience);
                        displayMessage(`You gained ${quest.rewards.experience} experience!`, 'reward');

                        // Check for level up
                        if (player.level > oldLevel) {
                            displayMessage(`Level up! You are now level ${player.level}!`, 'success');
                        }
                    }

                    // Award items
                    if (quest.rewards.items && quest.rewards.items.length > 0) {
                        quest.rewards.items.forEach(itemName => {
                            const item = ItemManager.createItem(itemName, player.level);
                            if (item) {
                                ItemManager.addToInventory(player, item);
                                displayMessage(`You received: ${item.name}!`, 'reward');
                            }
                        });
                    }
                } else {
                    // Fallback to old reward system
                    const reward = quest.reward || 50;
                    player.gold += reward;
                    displayMessage(`You earned ${reward} gold!`, 'reward');
                }

                saveGame();
            }
        }
    });
}

async function playerAttack() {
    if (!player.currentEnemy) return;

    const enemy = player.currentEnemy;

    // Calculate player damage based on class and level
    let baseDamage = 10;
    const levelBonus = player.level * 2;
    const classMultiplier = getClassAttackMultiplier(player.class);
    const randomVariation = Math.floor(Math.random() * 10) + 1; // 1-10

    const damage = Math.floor((baseDamage + levelBonus) * classMultiplier + randomVariation);

    enemy.hp -= damage;
    displayMessage(`You attack ${enemy.name} for ${damage} damage!`, 'combat');

    if (enemy.hp <= 0) {
        displayMessage(`${enemy.name} is defeated!`, 'success');

        // Reward gold and XP based on enemy level
        const goldReward = Math.floor(Math.random() * 50) + 25;
        const xpReward = Math.floor(Math.random() * 30) + 15;

        player.gold += goldReward;
        CharacterManager.gainExperience(player, xpReward);

        displayMessage(`You gained ${goldReward} gold and ${xpReward} XP!`, 'reward');

        player.currentEnemy = null;
        hideScreen('combat-interface');
        checkQuestCompletion(`defeated ${enemy.name}`);
        saveGame();
    } else {
        // Enemy attacks back
        setTimeout(() => enemyAttack(), 1000);
    }
}

function getClassAttackMultiplier(playerClass) {
    const multipliers = {
        'warrior': 1.3,
        'rogue': 1.1,
        'ranger': 1.2,
        'mage': 0.8
    };
    return multipliers[playerClass] || 1.0;
}

async function enemyAttack() {
    if (!player.currentEnemy) return;

    const enemy = player.currentEnemy;

    // Calculate enemy damage
    const baseDamage = enemy.attack || 8;
    const randomVariation = Math.floor(Math.random() * 8) + 1; // 1-8
    const damage = baseDamage + randomVariation;

    // Apply damage to player
    player.hp -= damage;

    // Ensure HP doesn't go below 0
    if (player.hp < 0) {
        player.hp = 0;
    }

    displayMessage(`${enemy.name} attacks you for ${damage} damage!`, 'combat');
    displayMessage(`Your HP: ${player.hp}/${player.maxHp}`, 'info');

    // Update HP display
    updatePlayerHPDisplay();

    // Check if player is defeated
    if (player.hp <= 0) {
        displayMessage("You have been defeated!", 'error');
        displayMessage("You lose consciousness and wake up in a safe place, but lose some gold...", 'info');

        // Player death penalty
        const goldLoss = Math.floor(player.gold * 0.1); // Lose 10% of gold
        player.gold = Math.max(0, player.gold - goldLoss);
        player.hp = Math.floor(player.maxHp * 0.25); // Recover to 25% HP

        if (goldLoss > 0) {
            displayMessage(`You lost ${goldLoss} gold.`, 'error');
        }

        displayMessage(`You recover to ${player.hp} HP.`, 'info');

        // End combat
        player.currentEnemy = null;
        hideScreen('combat-interface');
        saveGame();
    }

    saveGame(); // Save after each combat round
}

function updatePlayerHPDisplay() {
    const hpDisplay = document.getElementById('player-hp');
    if (hpDisplay) {
        hpDisplay.textContent = `HP: ${player.hp}/${player.maxHp}`;
    }
}

async function fleeCombat() {
    if (!player.currentEnemy) return;

    const enemy = player.currentEnemy;
    const fleeChance = 0.7; // 70% chance to flee successfully

    if (Math.random() < fleeChance) {
        displayMessage(`You successfully flee from ${enemy.name}!`, 'success');
        player.currentEnemy = null;
        hideScreen('combat-interface');
        saveGame();
    } else {
        displayMessage(`You failed to escape! ${enemy.name} blocks your path!`, 'error');
        // Enemy gets a free attack
        setTimeout(() => enemyAttack(), 1000);
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
}

function learnNewSpell(spellName) {
    const result = CharacterManager.learnSpell(player, spellName);
    displayMessage(result.message, result.success ? 'success' : 'error');
    if (result.success) {
        displayCharacterProgression(); // Refresh display
    }
}

async function explore() {
    displayMessage("Exploring the area...", 'info');

    // Generate potential characters they might encounter
    const potentialNPC = QuestCharacterGenerator.generateRandomCharacter();
    const potentialMerchant = QuestCharacterGenerator.generateMerchant();

    const explorePrompt = `
${player.name} (${player.class}, Level ${player.level}) explores ${player.currentLocation}.
Current status: HP ${player.hp}/${player.maxHp}, Gold ${player.gold}

Potential characters in the area:
- ${potentialNPC}
- ${potentialMerchant}

Generate a brief exploration result (1-2 sentences) that includes:
1. What they discover (location, item, person, or event)
2. A specific choice or action they can take
3. Use the named characters if mentioning NPCs
4. Keep it appropriate for their level

Format: Just the exploration result, no extra text.
`;

    const explorationResult = await callGeminiAPI(explorePrompt, 0.7, 300);

    if (explorationResult) {
        displayMessage(explorationResult, 'exploration');
    } else {
        displayMessage("The area seems quiet. You don't find anything of interest.", 'info');
    }
}

function showShop() {
    shopInterface.classList.remove('hidden');
    const shopItems = shopInterface.querySelector('#shop-items');
    shopItems.innerHTML = '';

    // Generate a merchant name for this shop visit
    const merchantName = QuestCharacterGenerator.generateMerchant();

    // Update shop header with merchant name
    const shopHeader = shopInterface.querySelector('h4');
    shopHeader.textContent = `${merchantName}'s Shop`;

    const items = [
        { name: 'Health Potion', cost: 25, effect: 'heal', value: 30 },
        { name: 'Magic Scroll', cost: 50, effect: 'spell', value: 1 },
        { name: 'Iron Sword', cost: 100, effect: 'weapon', value: 10 },
        { name: 'Leather Armor', cost: 75, effect: 'armor', value: 5 },
        { name: 'Lucky Charm', cost: 150, effect: 'luck', value: 1 }
    ];

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('shop-item');
        itemDiv.innerHTML = `
            <p>${item.name} - ${item.cost} gold</p>
            <button onclick="buyItem('${item.name}')">Buy</button>
        `;
        shopItems.appendChild(itemDiv);
    });
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

// Auto-generate world event
async function startConversation() {
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

        // Use QuestCharacterGenerator to get a name
        const npcName = QuestCharacterGenerator.generateRandomCharacter();

        // Get some example names to provide to the AI
        const exampleNames = [
            QuestCharacterGenerator.generateRandomCharacter(),
            QuestCharacterGenerator.generateRandomCharacter(),
            QuestCharacterGenerator.generateMerchant(),
            QuestCharacterGenerator.generateInnkeeper()
        ];

        const prompt = `Create an NPC encounter in ${player.currentLocation}. 

IMPORTANT: The NPC is named "${npcName}" - use this EXACT name, do NOT use generic names like "Elara" or "the villager".

Character name examples from this world: ${exampleNames.join(', ')}

Format: "You see ${npcName}. Appearance: [brief description]. ${npcName} says: [one line of dialogue]"

Use the name "${npcName}" throughout the description.`;

        const npcInfo = await callGeminiAPI(prompt, 0.8, 200, true);
        if (npcInfo) {
            const newNPC = createNPC(npcName, npcInfo, player.currentLocation);
            saveNPCToLocation(newNPC, player.currentLocation);
            gameWorld.lastNPCInteraction = newNPC.id;

            const encounterMessage = npcInfo;
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

    // Add event listeners for quick action buttons
    document.getElementById('rest-btn')?.addEventListener('click', () => {
        player.hp = Math.min(player.maxHp, player.hp + 20);
        displayMessage("You feel refreshed.", 'success');
        updatePlayerStatsDisplay();
    });

    document.getElementById('explore-btn')?.addEventListener('click', () => {
        startConversation();
    });

    // Make functions globally accessible
    window.displayCharacterProgression = displayCharacterProgression;
    window.updateQuestButton = updateQuestButton;
    window.markQuestComplete = markQuestComplete;
    window.displayQuests = displayQuests;
    window.generateQuest = generateQuest;
    window.learnNewSpell = learnNewSpell;
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