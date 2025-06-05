// Import game data and assets
import { gameData, GameDataManager } from './assets/game-data-loader.js';
import { QuestCharacterGenerator } from './assets/quest-character-names.js';
import { QuestTaskGenerator, questCategories, questThemes, questTemplates, questVariables } from './assets/quest-tasks.js';
import { CharacterManager } from './game-logic/character-manager.js';
import { GameActions } from './game-logic/game-actions.js';
import { LocationManager } from './game-logic/location-manager.js';
import { classProgression, spellDefinitions, abilityDefinitions } from './game-logic/class-progression.js';
import { ItemGenerator, ItemManager, itemCategories, itemRarity, statusEffects } from './assets/world-items.js';
import { TransactionMiddleware } from './game-logic/transaction-middleware.js';
import { ItemExchangeMiddleware } from './game-logic/item-exchange-middleware.js';
import { CombatSystem } from './game-logic/combat-system.js';

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
    relationships: {}, // NPC relationships: { npcName: { status: 'neutral', trust: 50, interactions: 0 } }
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
    maxMessages: 75
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

function updateRelationship(npcName, statusChange = 0, trustChange = 0) {
    if (!player.relationships) {
        player.relationships = {};
    }

    if (!player.relationships[npcName]) {
        player.relationships[npcName] = {
            status: 'neutral',
            trust: 50,
            interactions: 0,
            lastInteraction: Date.now()
        };
    }

    const relationship = player.relationships[npcName];
    relationship.trust = Math.max(0, Math.min(100, relationship.trust + trustChange));
    relationship.interactions++;
    relationship.lastInteraction = Date.now();

    // Update status based on trust level
    if (relationship.trust >= 80) {
        relationship.status = 'allied';
    } else if (relationship.trust >= 60) {
        relationship.status = 'friendly';
    } else if (relationship.trust >= 40) {
        relationship.status = 'neutral';
    } else if (relationship.trust >= 20) {
        relationship.status = 'unfriendly';
    } else {
        relationship.status = 'hostile';
    }

    saveGame();
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
// In script.js
function updateGold(amount, reason = '') {
    const oldGold = player.gold;
    player.gold = Math.max(0, player.gold + Number(amount)); // Ensure amount is treated as a number
    console.log(`updateGold: Amount: ${amount}, Reason: ${reason}, Old Gold: ${oldGold}, New Gold: ${player.gold}`); // ADD THIS LOG

    if (amount > 0) {
        displayMessage(`You gained <span class="math-inline">${Number(amount)} gold</span>${reason ? ` (${reason})` : ''}!`, 'success');
    } else if (amount < 0) {
        const actualLoss = oldGold - player.gold; // Recalculate actual loss after Math.max(0,...)
        displayMessage(`You lost ${Math.abs(Number(amount))} gold${reason ? ` (${reason})` : ''}!`, 'error');
    }

    updatePlayerStatsDisplay();

    if (!inventoryInterface.classList.contains('hidden')) {
        displayInventory();
    }
    if (!shopInterface.classList.contains('hidden')) {
        displayShop();
    }

    console.log(`updateGold: About to call saveGame(). Current player.gold is ${player.gold}`); // ADD THIS LOG
    saveGame();
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

    console.log(`saveGame: Player object being saved:`, JSON.parse(JSON.stringify(player))); // ADD THIS (JSON.parse(JSON.stringify()) for a clean clone log)
    console.log(`saveGame: Saving player.gold = ${player.gold}`); // SPECIFIC GOLD LOG

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
        console.log("loadGame: Final player.gold after all loading steps:", player.gold);

        console.log(`[SCRIPT.JS] loadGame: player HP set to <span class="math-inline">${player.hp}/${player.maxHp}</span>`);
        console.log(`[SCRIPT.JS] loadGame: window.player HP is now <span class="math-inline">${window.player.hp}/${window.player.maxHp}</span>`);
        console.log(`[SCRIPT.JS] loadGame: is module player === window.player? ${player === window.player}`); // Should be true

        
        updatePlayerStatsDisplay();
        updateQuestButton(); // Update quest button based on saved quests

        // Auto-fix relationships based on conversation history
        //autoFixMaraRelationship();

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
async function callGeminiAPI(prompt, temperature = 0.10, maxOutputTokens = 16000, includeContext = true) {
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
    gameWorld.npcs.get(location).push(npc);
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
                saveGame();
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
        saveGame();

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

    // Weighted encounter types based on location and level
    const encounterWeights = {
        combat: 0.4,
        treasure: 0.2,
        npc: 0.25,
        event: 0.15
    };

    // Adjust weights based on player level and location
    if (player.level < 3) {
        encounterWeights.combat = 0.3; // Less combat for low level
        encounterWeights.treasure = 0.3; // More treasure
    }

    if (player.currentLocation.toLowerCase().includes('city') || player.currentLocation.toLowerCase().includes('town')) {
        encounterWeights.combat = 0.2; // Less combat in cities
        encounterWeights.npc = 0.5; // More NPCs in populated areas
    }

    // Generate random encounter
    const random = Math.random();
    let cumulative = 0;
    let encounterType = 'event';

    for (const [type, weight] of Object.entries(encounterWeights)) {
        cumulative += weight;
        if (random <= cumulative) {
            encounterType = type;
            break;
        }
    }

    switch (encounterType) {
        case 'combat':
            await generateCombatEncounter();
            break;
        case 'treasure':
            await generateTreasureEncounter();
            break;
        case 'npc':
            await generateNPCEncounter();
            break;
        case 'event':
            await generateEventEncounter();
            break;
        default:
            displayMessage("The path ahead is quiet and peaceful.", 'info');
            break;
    }
}

async function generateCombatEncounter() {
    // Use intelligent enemy generation for random encounters too
    const randomEncounterCommand = "encounter a hostile creature";
    const enemyEncounter = await CombatSystem.generateSpecificEnemyEncounter(randomEncounterCommand, player);

    if (enemyEncounter) {
        displayMessage("⚔️ A hostile creature blocks your path!", 'combat');
        displayMessage(enemyEncounter.narrative, 'combat');
        console.log(`[SCRIPT.JS] Before calling initiateCombat: HP=<span class="math-inline">${player.hp}/${player.maxHp}</span>`);
        await CombatSystem.initiateCombat(player, enemyEncounter.enemy, player.currentLocation);
    } else {
        // Fallback to basic encounter if AI fails
        displayMessage("⚔️ A hostile creature blocks your path!", 'combat');

        const basicEnemy = {
            name: 'Hostile Creature',
            hp: 20 + (player.level * 3),
            maxHp: 20 + (player.level * 3),
            currentHp: 20 + (player.level * 3),
            attack: 8 + (player.level * 1.333),
            defense: 1 + (player.level * 0.75),
            level: Math.max(1, player.level - Math.floor(Math.random() * 3) - 1),
            type: 'Beast'
        };

        await CombatSystem.initiateCombat(player, basicEnemy, player.currentLocation);
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

    saveGame();
}

// Enhanced relationship detection function
function checkRelationshipChanges(playerCommand, aiResponse) {
    const combinedText = (playerCommand + ' ' + aiResponse).toLowerCase();

    // Romantic relationship patterns
    const romanticPatterns = [
        /(?:be my|will you be my|become my) (?:girlfriend|boyfriend|partner|lover)/,
        /(?:yes.*(?:girlfriend|boyfriend|partner)|(?:girlfriend|boyfriend|partner).*yes)/,
        /(?:accepted.*(?:proposal|relationship)|agreed.*(?:girlfriend|boyfriend))/,
        /(?:kissed|kiss|romantic|romance|dating|lovers)/,
        /(?:glad to be yours|your (?:girlfriend|boyfriend)|relationship.*established)/
    ];

    // Friend/ally patterns
    const friendshipPatterns = [
        /(?:become friends|best friends|good friends|trusted ally)/,
        /(?:friendship.*established|friends now|alliance.*formed)/,
        /(?:trust.*you|ally.*you|friend.*you)/
    ];

    // Hostile patterns
    const hostilePatterns = [
        /(?:enemy|enemies|hate|despise|hostile|angry)/,
        /(?:betrayed|backstabbed|double.*crossed)/,
        /(?:war|conflict|fight.*you)/
    ];

    // Extract NPC names from the conversation
    const npcNames = extractNPCNames(aiResponse);

    npcNames.forEach(npcName => {
        const currentRelationship = player.relationships[npcName];
        let relationshipChanged = false;
        let newStatus = currentRelationship?.status || 'neutral';
        let trustChange = 0;

        // Check for romantic development
        if (romanticPatterns.some(pattern => pattern.test(combinedText))) {
            if (combinedText.includes(npcName.toLowerCase()) ||
                combinedText.includes('mara') || // Special case for current conversation
                aiResponse.toLowerCase().includes('kiss') ||
                aiResponse.toLowerCase().includes('girlfriend') ||
                aiResponse.toLowerCase().includes('yours')) {

                newStatus = 'romantic';
                trustChange = 30;
                relationshipChanged = true;

                displayMessage(`💕 Your relationship with ${npcName} has blossomed into romance!`, 'success');
            }
        }
        // Check for friendship
        else if (friendshipPatterns.some(pattern => pattern.test(combinedText))) {
            if (newStatus !== 'romantic') { // Don't downgrade from romantic
                newStatus = 'allied';
                trustChange = 15;
                relationshipChanged = true;
                displayMessage(`🤝 You've become close friends with ${npcName}!`, 'success');
            }
        }
        // Check for hostility
        else if (hostilePatterns.some(pattern => pattern.test(combinedText))) {
            newStatus = 'hostile';
            trustChange = -20;
            relationshipChanged = true;
            displayMessage(`⚔️ Your relationship with ${npcName} has turned hostile!`, 'error');
        }

        // Update relationship if changed
        if (relationshipChanged) {
            updateRelationship(npcName, 0, trustChange);
            // Override the status with our detected status
            if (player.relationships[npcName]) {
                player.relationships[npcName].status = newStatus;
            }
            saveGame();
        }
    });
}

// Function to extract NPC names from AI responses
function extractNPCNames(aiResponse) {
    const names = [];

    // Known NPCs from conversation history (filter out technical terms)
    const knownNPCs = Object.keys(player.relationships || {}).filter(name => {
        // Filter out technical variable names and properties
        const technicalTerms = [
            'classProgression', 'passiveBonuses', 'statusEffects', 'inventory', 
            'equipment', 'stats', 'skills', 'abilities', 'spells', 'quests',
            'hp', 'maxHp', 'level', 'exp', 'gold', 'currentLocation'
        ];
        return !technicalTerms.includes(name);
    });

    // Check for known NPCs in the response
    knownNPCs.forEach(name => {
        if (aiResponse.toLowerCase().includes(name.toLowerCase())) {
            names.push(name);
        }
    });

    // Common NPC name patterns in the response
    const namePatterns = [
        /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*?)(?:\s+(?:says|whispers|shouts|laughs|smiles|nods|looks|eyes|face))/g,
        /([A-Z][a-z]+)(?:'s\s+(?:eyes|face|voice|smile|laugh))/g,
        /([A-Z][a-z]+)(?:\s+(?:bursts|leans|wraps|kisses))/g
    ];

    namePatterns.forEach(pattern => {
        let match;
        while ((match = pattern.exec(aiResponse)) !== null) {
            const name = match[1].trim();
            if (name.length > 1 && name.length < 20 && !names.includes(name)) {
                // Enhanced exclusion list to prevent technical terms from becoming relationships
                const excludeWords = [
                    'The', 'A', 'An', 'You', 'Your', 'Game', 'Character', 'Player', 
                    'He', 'She', 'Him', 'Her', 'They', 'Them', 'It', 'Says', 'Looks', 
                    'Smiles', 'Laughs', 'Class', 'Level', 'Stats', 'Equipment', 'Inventory',
                    'ClassProgression', 'PassiveBonuses', 'StatusEffects', 'Skills', 'Abilities'
                ];
                if (!excludeWords.includes(name)) {
                    names.push(name);
                }
            }
        }
    });

    // Special case: if "Mara" is mentioned, include her
    if (aiResponse.toLowerCase().includes('mara') && !names.includes('Mara')) {
        names.push('Mara');
    }

    return [...new Set(names)]; // Remove duplicates
}

// Manual fix for Mara relationship (can be called from console)
function fixMaraRelationship() {
    if (!player.relationships) {
        player.relationships = {};
    }

    player.relationships['Mara Moneymaker'] = {
        status: 'romantic',
        trust: 85,
        interactions: 5,
        lastInteraction: Date.now()
    };

    displayMessage("💕 Relationship with Mara Moneymaker updated to romantic!", 'success');
    saveGame();

    // Refresh background display if it's open
    const backgroundInterface = document.getElementById('background-interface');
    if (backgroundInterface && !backgroundInterface.classList.contains('hidden')) {
        displayCharacterBackground();
    }
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
            saveGame();

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

// Auto-fix Mara relationship if we detect she should be romantic but isn't
function autoFixMaraRelationship() {
    // Ensure player and relationships exist before proceeding
    if (!player || !player.relationships) {
        console.log('autoFixMaraRelationship: Player or relationships not initialized yet');
        return;
    }

    // Ensure conversationHistory exists and has messages
    if (!conversationHistory || !conversationHistory.messages || conversationHistory.messages.length === 0) {
        console.log('autoFixMaraRelationship: No conversation history available');
        return;
    }

    const conversationText = conversationHistory.messages.slice(-10).map(m => m.content).join(' ').toLowerCase();

    if ((conversationText.includes('mara') && conversationText.includes('girlfriend')) ||
        (conversationText.includes('mara') && conversationText.includes('kiss')) ||
        (conversationText.includes('glad to be yours'))) {

        const maraRelationship = player.relationships['Mara Moneymaker'] || player.relationships['Mara'];

        if (!maraRelationship || maraRelationship.status !== 'romantic') {
            console.log('Auto-fixing Mara relationship based on conversation history');
            //fixMaraRelationship();
        }
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

    saveGame();
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

            // Only complete quest if score meets threshold
            const requiredScore = quest.difficulty === 'Easy' ? 3 :
                quest.difficulty === 'Medium' ? 4 :
                    quest.difficulty === 'Hard' ? 5 : 6;

            isCompleted = completionScore >= requiredScore;

            console.log('Quest completion analysis:', {
                questTitle: quest.title,
                totalScore: completionScore,
                requiredScore: requiredScore,
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

                    // Parse XP reward from structured quest data
                    xpAwarded = parseInt(quest.rewards.experience) || parseInt(quest.rewards.exp) || 0;

                    console.log('Structured quest rewards:', {
                        questTitle: quest.title,
                        rewardsObject: quest.rewards,
                        goldAwarded: goldAwarded,
                        xpAwarded: xpAwarded
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
                } else {
                    // Enhanced fallback reward system for legacy quests
                    const difficultyMultiplier = quest.difficulty === 'Easy' ? 1.0 :
                        quest.difficulty === 'Medium' ? 1.5 :
                            quest.difficulty === 'Hard' ? 2.0 : 2.5;

                    goldAwarded = Math.floor((50 + player.level * 25) * difficultyMultiplier);
                    xpAwarded = Math.floor((25 + player.level * 15) * difficultyMultiplier);

                    console.log('Fallback quest rewards:', {
                        questTitle: quest.title,
                        difficulty: quest.difficulty,
                        multiplier: difficultyMultiplier,
                        goldAwarded: goldAwarded,
                        xpAwarded: xpAwarded
                    });
                }

                // Apply rewards
                if (goldAwarded > 0) {
                    updateGold(goldAwarded, 'quest reward');
                    displayMessage(`💰 You earned ${goldAwarded} gold!`, 'success');
                }

                if (xpAwarded > 0) {
                    const oldLevel = player.level;
                    gainExperience(xpAwarded);
                    displayMessage(`⭐ You gained ${xpAwarded} experience!`, 'success');

                    if (player.level > oldLevel) {
                        displayMessage(`🆙 Level up! You are now level ${player.level}!`, 'success');
                        if (window.displayLevelUpRewards && player.classProgression) {
                            displayLevelUpRewards(player.classProgression, oldLevel);
                        }
                    }
                }

                // Update tracking
                if (!player.completedQuests) player.completedQuests = 0;
                player.completedQuests++;

                saveGame();
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

// Helper function for experience gain
function gainExperience(amount) {
    if (!amount || amount <= 0) return;

    player.exp = (player.exp || 0) + amount;

    // Check for level up
    while (player.exp >= player.expToNextLevel) {
        player.exp -= player.expToNextLevel;
        player.level++;
        player.maxHp += 10; // Basic HP increase
        player.hp = player.maxHp; // Full heal on level up
        player.expToNextLevel = Math.floor(player.expToNextLevel * 1.5); // Increase XP needed

        // Apply class progression if available
        if (window.CharacterManager && typeof CharacterManager.levelUp === 'function') {
            CharacterManager.levelUp(player);
        }
    }

    updatePlayerStatsDisplay();
}

// Legacy playerAttack function - now handled by CombatSystem.playerAction()
async function playerAttack() {
    if (CombatSystem.combatState.isActive) {
        await CombatSystem.playerAction('attack', 'basic');
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
        saveGame();

        // Add death to conversation history
        addToConversationHistory('assistant', `${player.name} was defeated in combat and recovered at ${player.currentLocation}`);
    } else {
        // Combat continues - save progress
        saveGame();
    }
}

function updatePlayerHPDisplay() {
    const hpDisplay = document.getElementById('player-hp');
    if (hpDisplay) {
        hpDisplay.textContent = `HP: ${player.hp}/${player.maxHp}`;
    }
}

// Legacy fleeCombat function - now handled by CombatSystem.fleeCombat()
async function fleeCombat() {
    if (CombatSystem.combatState.isActive) {
        await CombatSystem.fleeCombat();
    }
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
        const generatedItem = generateItemFromDescription(itemName, {
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
        updatePlayerStatsDisplay();
        saveGame();
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
function generateItemFromDescription(itemName, context) {
    try {
        // Clean up item name
        const cleanName = itemName.replace(/^(the|a|an)\s+/i, '').trim();

        // Determine item category and properties from name
        const itemData = categorizeItemFromName(cleanName);

        // Use ItemGenerator to create the item
        const generatedItem = ItemGenerator.generateItem({
            category: itemData.category,
            rarity: itemData.rarity,
            locationContext: context.locationContext,
            playerLevel: context.playerLevel
        });

        // Override with specific name and properties if detected
        if (itemData.specificName) {
            generatedItem.name = itemData.specificName;
        }

        if (itemData.description) {
            generatedItem.description = itemData.description;
        }

        return generatedItem;

    } catch (error) {
        console.error('Error generating item:', error);
        return null;
    }
}

// Categorize item based on name/description
function categorizeItemFromName(itemName) {
    const name = itemName.toLowerCase();

    // Specific item mappings
    const specificItems = {
        'bronze helmet': {
            category: itemCategories.ARMOR,
            rarity: 'COMMON',
            specificName: 'Dented Bronze Helmet',
            description: 'A weathered gladiatorial helmet with scratches and dents from countless battles.'
        },
        'dented bronze helmet': {
            category: itemCategories.ARMOR,
            rarity: 'COMMON',
            specificName: 'Dented Bronze Helmet',
            description: 'A weathered gladiatorial helmet with scratches and dents from countless battles.'
        },
        'short sword': {
            category: itemCategories.WEAPON,
            rarity: 'COMMON',
            specificName: 'Rusty Gladiatorial Short Sword',
            description: 'A sturdy short sword used in arena combat, showing signs of age but still serviceable.'
        },
        'rusty short sword': {
            category: itemCategories.WEAPON,
            rarity: 'COMMON',
            specificName: 'Rusty Gladiatorial Short Sword',
            description: 'A sturdy short sword used in arena combat, showing signs of age but still serviceable.'
        },
        'leather jerkin': {
            category: itemCategories.ARMOR,
            rarity: 'COMMON',
            specificName: 'Patched Leather Jerkin',
            description: 'A leather vest with numerous patches and repairs, worn by gladiators for basic protection.'
        },
        'parchment': {
            category: itemCategories.SCROLL,
            rarity: 'UNCOMMON',
            specificName: 'Mysterious Parchment',
            description: 'A rolled-up piece of parchment with faded writing, possibly containing important information.'
        },
        'bronze coin': {
            category: itemCategories.CURRENCY,
            rarity: 'COMMON',
            specificName: 'Ancient Bronze Coin',
            description: 'A weathered bronze coin with worn markings, possibly from an old civilization.'
        },
        'iron key': {
            category: itemCategories.TOOL,
            rarity: 'COMMON',
            specificName: 'Rusted Iron Key',
            description: 'A heavy iron key, rusted with age but still functional.'
        },
        'healing potion': {
            category: itemCategories.CONSUMABLE,
            rarity: 'COMMON',
            specificName: 'Minor Healing Potion',
            description: 'A small vial containing a red liquid that glows faintly with restorative magic.'
        },
        'mana potion': {
            category: itemCategories.CONSUMABLE,
            rarity: 'COMMON',
            specificName: 'Lesser Mana Potion',
            description: 'A blue crystalline bottle filled with magical energy.'
        }
    };

    // Check for specific items first
    if (specificItems[name]) {
        return specificItems[name];
    }

    // General categorization patterns
    if (name.includes('helmet') || name.includes('helm') || name.includes('hat') || name.includes('cap')) {
        return { category: itemCategories.ARMOR, rarity: 'COMMON' };
    }
    if (name.includes('sword') || name.includes('blade') || name.includes('dagger') || name.includes('knife')) {
        return { category: itemCategories.WEAPON, rarity: 'COMMON' };
    }
    if (name.includes('axe') || name.includes('hammer') || name.includes('mace') || name.includes('staff')) {
        return { category: itemCategories.WEAPON, rarity: 'COMMON' };
    }
    if (name.includes('bow') || name.includes('crossbow') || name.includes('spear') || name.includes('javelin')) {
        return { category: itemCategories.WEAPON, rarity: 'COMMON' };
    }
    if (name.includes('armor') || name.includes('jerkin') || name.includes('vest') || name.includes('mail') || name.includes('plate')) {
        return { category: itemCategories.ARMOR, rarity: 'COMMON' };
    }
    if (name.includes('shield') || name.includes('buckler')) {
        return { category: itemCategories.ARMOR, rarity: 'COMMON' };
    }
    if (name.includes('gauntlets') || name.includes('gloves') || name.includes('boots') || name.includes('greaves')) {
        return { category: itemCategories.ARMOR, rarity: 'COMMON' };
    }
    if (name.includes('potion') || name.includes('elixir') || name.includes('draught')) {
        return { category: itemCategories.CONSUMABLE, rarity: 'COMMON' };
    }
    if (name.includes('scroll') || name.includes('parchment') || name.includes('tome')) {
        return { category: itemCategories.SCROLL, rarity: 'UNCOMMON' };
    }
    if (name.includes('book') || name.includes('grimoire') || name.includes('codex')) {
        return { category: itemCategories.BOOK, rarity: 'UNCOMMON' };
    }
    if (name.includes('ring') || name.includes('amulet') || name.includes('necklace') || name.includes('pendant')) {
        return { category: itemCategories.JEWELRY, rarity: 'UNCOMMON' };
    }
    if (name.includes('gem') || name.includes('crystal') || name.includes('stone') || name.includes('orb')) {
        return { category: itemCategories.MAGICAL, rarity: 'RARE' };
    }
    if (name.includes('coin') || name.includes('gold') || name.includes('silver') || name.includes('copper')) {
        return { category: itemCategories.CURRENCY, rarity: 'COMMON' };
    }
    if (name.includes('key') || name.includes('lockpick') || name.includes('tool') || name.includes('kit')) {
        return { category: itemCategories.TOOL, rarity: 'COMMON' };
    }
    if (name.includes('herb') || name.includes('ingredient') || name.includes('component') || name.includes('reagent')) {
        return { category: itemCategories.CRAFTING, rarity: 'COMMON' };
    }
    if (name.includes('wand') || name.includes('rod') || name.includes('artifact') || name.includes('relic')) {
        return { category: itemCategories.MAGICAL, rarity: 'UNCOMMON' };
    }

    // Default to magical item if no specific category matches
    return { category: itemCategories.MAGICAL, rarity: 'COMMON' };
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

    // Create structured prompt for Gemini with quest template data
    const questPrompt = `
QUEST GENERATION SYSTEM - Generate a detailed, immersive quest for an RPG

PLAYER CONTEXT:
- Name: ${player.name}
- Class: ${player.class}
- Level: ${player.level}
- Current Location: ${player.currentLocation}
- Gold: ${player.gold}
- Recent Activities: ${conversationContext.slice(-500)}

QUEST TEMPLATE DATA:
- Category: ${questData.category}
- Theme: ${questData.theme}  
- Difficulty: ${questData.difficulty}
- Base Title: ${questData.title}
- Base Objective: ${questData.objective}
- Suggested Location: ${questData.location}
- Quest Giver: ${questData.questGiver}

QUEST CATEGORIES REFERENCE:
${JSON.stringify(questCategories, null, 2)}

QUEST THEMES REFERENCE:
${JSON.stringify(questThemes, null, 2)}

WORLD CONTEXT:
- Current NPCs in area: ${getNPCsInLocation(player.currentLocation).map(npc => npc.name).join(', ') || 'None'}
- Player relationships: ${Object.keys(player.relationships || {}).slice(0, 3).join(', ') || 'None established'}

INSTRUCTIONS:
Create a rich, detailed quest that fits the template data but with enhanced narrative depth. The quest should:

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
        const response = await callGeminiAPI(questPrompt, 0.7, 1000, false);
        if (!response) {
            throw new Error("No response from Gemini API");
        }

        // Parse the JSON response
        const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

        if (!jsonMatch) {
            throw new Error("No valid JSON found in response");
        }

        const geminiQuest = JSON.parse(jsonMatch[0]);

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
                questHTML += `
                    <div class="parchment-box p-4">
                        <div class="flex justify-between items-start mb-2">
                            <h6 class="font-bold text-lg">${quest.title}</h6>
                            <div class="flex items-center gap-2">
                                <span class="text-xs px-2 py-1 rounded bg-yellow-200 text-yellow-800">${quest.difficulty || 'Medium'}</span>
                                <button onclick="abandonQuest('${quest.id}')" class="btn-parchment text-xs py-1 px-2 bg-red-600 hover:bg-red-700 text-white" title="Abandon this quest">
                                    <i class="gi gi-cancel mr-1"></i>Abandon
                                </button>
                            </div>
                        </div>
                        <p class="text-sm text-amber-700 mb-2">${quest.description}</p>
                        <p class="text-xs text-blue-600 mb-2"><strong>Objective:</strong> ${quest.objective || quest.description}</p>
                        ${quest.location ? `<p class="text-xs text-green-600 mb-2"><strong>Location:</strong> ${quest.location}</p>` : ''}
                        ${quest.questGiver ? `<p class="text-xs text-purple-600 mb-2"><strong>Quest Giver:</strong> ${quest.questGiver}</p>` : ''}
                        <div class="flex justify-between items-center mt-3">
                            <div class="text-xs text-gray-600">
                                Rewards: ${quest.rewards?.gold || 50} gold, ${quest.rewards?.experience || 25} XP
                                ${quest.rewards?.items?.length > 0 ? `, ${quest.rewards.items.join(', ')}` : ''}
                            </div>
                        </div>
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
                questHTML += `
                    <div class="parchment-box p-3 bg-green-50">
                        <div class="flex justify-between items-center">
                            <h6 class="font-bold">${quest.title}</h6>
                            <span class="text-xs px-2 py-1 rounded bg-green-200 text-green-800">✓ Completed</span>
                        </div>
                        <p class="text-sm text-gray-600 mt-1">${quest.description}</p>
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

Generate a brief exploration result that includes:
1. What they discover (location feature, item, person, or event)
2. Specific interactable elements they can engage with
3. Use named characters if mentioning NPCs
4. Keep it appropriate for their level

IMPORTANT: If you mention any objects, creatures, or interactive elements, they should be consistently available for future interactions.

Format the response as:
DISCOVERY: [What they find]
INTERACTABLE: [Comma-separated list of things they can interact with]

Example:
DISCOVERY: You discover a moss-covered altar with strange runes, and a small wooden box sits in a hidden compartment.
INTERACTABLE: altar, wooden box, runes
`;

    const explorationResult = await callGeminiAPI(explorePrompt, 0.7, 300);

    if (explorationResult) {
        // Parse the structured response
        const discoveryMatch = explorationResult.match(/DISCOVERY:\s*(.+?)(?=\nINTERACTABLE:|$)/s);
        const interactableMatch = explorationResult.match(/INTERACTABLE:\s*(.+?)$/s);

        const discovery = discoveryMatch ? discoveryMatch[1].trim() : explorationResult;
        const interactables = interactableMatch
            ? interactableMatch[1].split(',').map(s => s.trim().toLowerCase())
            : [];

        displayMessage(discovery, 'exploration');

        // Store exploration context
        addExplorationContext(discovery, interactables);
        addToConversationHistory('assistant', discovery);

        if (interactables.length > 0) {
            displayMessage(`You can interact with: ${interactables.join(', ')}`, 'info');
        }
    } else {
        displayMessage("The area seems quiet. You don't find anything of interest.", 'info');
    }
}

function showShop() {
    // Hide other interfaces
    const interfaces = ['combat-interface', 'inventory-interface', 'skills-interface', 'quest-interface', 'background-interface', 'progression-interface'];
    interfaces.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
    });

    shopInterface.classList.remove('hidden');
    const shopItems = shopInterface.querySelector('#shop-items');
    shopItems.innerHTML = '';

    // Generate a merchant name for this shop visit
    const merchantName = QuestCharacterGenerator.generateMerchant();

    // Update shop header with merchant name
    const shopHeader = shopInterface.querySelector('h4');
    shopHeader.textContent = `${merchantName}'s Shop`;

    // Generate 15-20 random items using world-items system
    const itemCount = 15 + Math.floor(Math.random() * 6); // 15-20 items
    const shopInventory = [];

    for (let i = 0; i < itemCount; i++) {
        const context = {
            locationContext: player.currentLocation,
            playerLevel: player.level,
            playerClass: player.class
        };

        const item = ItemGenerator.generateItem(context);
        shopInventory.push(item);
    }

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
    if (currentExplorationContext.discoveries.length === 0) return '';

    const recent = currentExplorationContext.discoveries.slice(-3);
    const contextString = recent.map(d => d.discovery).join(' ');
    const activeElements = currentExplorationContext.activeElements.length > 0
        ? `\n\nCurrently visible/interactable: ${currentExplorationContext.activeElements.join(', ')}`
        : '';

    return `\n\nRECENT EXPLORATION CONTEXT:\n${contextString}${activeElements}`;
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

        // Update relationship - small positive interaction for talking
        updateRelationship(npc.name, 0, 2);
        displayMessage(`Your relationship with ${npc.name} has slightly improved.`, 'info');
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

            // Initialize relationship for new NPC
            updateRelationship(npcName, 0, 5);
            displayMessage(`You've established a new relationship with ${npcName}.`, 'info');
        } else {
            const fallbackMessage = "You don't see anyone interesting to talk to right now.";
            displayMessage(fallbackMessage);
            addToConversationHistory('assistant', fallbackMessage);
        }
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
    Make it 2-3 paragraphs, interesting, and appropriate for a fantasy RPG character. 
    Include their motivations and how they became an adventurer.`;

    try {
        const background = await callGeminiAPI(prompt, 0.8, 400);
        if (background) {
            charBackgroundTextarea.value = background;
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

// Execute custom commands
async function executeCustomCommand(command) {
    if (!command.trim()) return;

    displayMessage(`> ${command}`, 'info');
    addToConversationHistory('user', command);

    // Check for movement commands
    const movementPatterns = [
        /(?:go|travel|move|head|walk|run)\s+(?:to\s+)?(.+)/i,
        /(?:visit|enter)\s+(?:the\s+)?(.+)/i,
        /(?:leave|exit)\s+(?:the\s+)?(.+?)(?:\s+and\s+(?:go|head)\s+(?:to\s+)?(.+))?/i
    ];

    let basicMovementMatch = false;
    let destination = null;

    for (const pattern of movementPatterns) {
        const match = command.match(pattern);
        if (match) {
            basicMovementMatch = true;
            destination = match[2] || match[1]; // Use second capture group if available, otherwise first
            break;
        }
    }

    if (basicMovementMatch && destination) {
        // Clean up the destination name
        destination = destination.replace(/^(the|a|an)\s+/i, '').trim();
        destination = destination.replace(/\s+(and|then|,).*$/i, '').trim();

        await handleStructuredMovement(command, destination);
        return;
    }

    // Check if we're in combat and handle combat commands
    if (CombatSystem.combatState.isActive) {
        const combatHandled = await CombatSystem.handleCombatCommand(command);
        if (combatHandled) {
            addToConversationHistory('user', command);
            return;
        }
    }

    // Check for combat initiation commands
    const combatKeywords = ['attack', 'fight', 'battle', 'combat', 'engage', 'strike', 'assault'];
    const isCombatCommand = combatKeywords.some(keyword => command.toLowerCase().includes(keyword));

    if (isCombatCommand) {
        // Use intelligent enemy generation based on the specific command
        const enemyEncounter = await CombatSystem.generateSpecificEnemyEncounter(command, player);

        if (enemyEncounter) {
            // Display the narrative setup
            displayMessage(enemyEncounter.narrative, 'combat');

            // Initiate combat with the specific enemy
            await CombatSystem.initiateCombat(player, enemyEncounter.enemy, player.currentLocation);
        } else {
            // If no plausible enemy found, don't start combat
            displayMessage("There's nothing here to attack that makes sense.", 'info');
        }
        return;
    }

    // Check for other command types
    if (command.toLowerCase().includes('talk') || command.toLowerCase().includes('speak')) {
        await startConversation();
        return;
    }

    if (command.toLowerCase().includes('explore') || command.toLowerCase().includes('look around')) {
        await explore();
        return;
    }

    // Check if this is an item pickup command
    const pickupKeywords = ['take', 'grab', 'pick up', 'get', 'collect', 'acquire'];
    const isPickupCommand = pickupKeywords.some(keyword => command.toLowerCase().includes(keyword));

    // For all other commands, use general AI processing with exploration context
    const explorationContext = getExplorationContextString();

    const contextPrompt = `
${player.name} (${player.class}, Level ${player.level}) in ${player.currentLocation} says: "${command}"

Current status: HP ${player.hp}/${player.maxHp}, Gold ${player.gold}${explorationContext}

Respond as a Dungeon Master. Describe what happens in 1-3 sentences. Be engaging and appropriate for a fantasy RPG.

IMPORTANT: If the player is trying to interact with something from recent exploration (box, altar, runes, etc.), acknowledge and respond to that interaction based on the exploration context above.
`;

    try {
        const response = await callGeminiAPI(contextPrompt, 0.7, 300, true);
        if (response) {
            displayMessage(response, 'info');
            addToConversationHistory('assistant', response);

            // Handle item pickup if detected
            if (isPickupCommand) {
                await handleItemPickup(command, response);
            }

            // Check for transactions in the AI response
            try {
                const transactionData = await TransactionMiddleware.detectTransaction(response, player, {
                    command: command,
                    location: player.currentLocation
                });

                if (transactionData && transactionData.hasTransaction) {
                    const transactionResults = await TransactionMiddleware.processTransaction(transactionData, player);
                    if (transactionResults && transactionResults.length > 0) {
                        console.log('Transaction processed:', transactionResults);
                    }
                }
            } catch (transactionError) {
                console.error('Transaction processing error:', transactionError);
            }

            // Check for item exchanges in the AI response
            try {
                const exchangeData = await ItemExchangeMiddleware.detectItemExchange(response, command, player, {
                    location: player.currentLocation
                });

                if (exchangeData && exchangeData.hasExchange) {
                    const exchangeResult = await ItemExchangeMiddleware.processItemExchange(exchangeData, player);
                    if (exchangeResult && exchangeResult.success) {
                        console.log('Item exchange processed:', exchangeResult);
                    }
                }
            } catch (exchangeError) {
                console.error('Item exchange processing error:', exchangeError);
            }

            // Check for quest completion
            checkQuestCompletion(command + ' ' + response);

            // Check for relationship changes including romantic developments
            checkRelationshipChanges(command, response);

            // Save conversation history
            saveConversationHistory();
        } else {
            displayMessage("Nothing interesting happens.", 'info');
        }
    } catch (error) {
        console.error("Error processing command:", error);
        displayMessage("You attempt your action, but nothing notable occurs.", 'info');
    }
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
        const healAmount = Math.floor(player.maxHp * 0.25) + 10;
        player.hp = Math.min(player.maxHp, player.hp + healAmount);
        displayMessage(`You rest and recover ${healAmount} HP. You feel refreshed.`, 'success');
        updatePlayerStatsDisplay();
        saveGame();

        // Shop item purchase function
        // It's generally better to define this function outside and then assign to window if needed,
        // rather than defining it inside another event listener.
        // However, I'll keep your current structure for this part.
        function buyShopItem(itemIndex) {
            if (!window.currentShopInventory || !window.currentShopInventory[itemIndex]) {
                displayMessage('Item no longer available.', 'error');
                return;
            }

            const item = window.currentShopInventory[itemIndex]; // item here has .name, .value, .price, .description etc.

            if (player.gold < item.value) { // Use item.value instead of item.price
                displayMessage(`You need ${item.value} gold but only have ${player.gold} gold.`, 'error');
                return;
            }

            // Ensure inventory exists
            if (!player.inventory) {
                player.inventory = [];
            }

            // Purchase the item
            updateGold(-item.value, 'shop purchase'); // Deduct item.value
            const purchasedItem = { ...item }; // Create a copy
            // Ensure the item has a unique ID if it doesn't have one
            if (!purchasedItem.id) {
                purchasedItem.id = Date.now() + Math.random();
            }
            player.inventory.push(purchasedItem);
            displayMessage(`Purchased ${item.name} for ${item.value} gold!`, 'success');

            // Remove item from shop inventory
            window.currentShopInventory.splice(itemIndex, 1);

            // Save game state
            if (typeof ItemManager !== 'undefined' && ItemManager.saveInventoryToStorage) {
                ItemManager.saveInventoryToStorage(player);
            }
            saveGame();

            // Reset inventory pagination since items changed
            resetInventoryPagination();

            // Refresh shop display
            showShop();

            // Check if inventory is open and refresh it
            const inventoryInterface = document.getElementById('inventory-interface');
            if (inventoryInterface && !inventoryInterface.classList.contains('hidden')) {
                console.log("buyShopItem: Inventory is open, refreshing display.");
                displayInventory();
            }
        }
        // Make sure window.buyShopItem is updated if you are using inline HTML onclick
        if (typeof window !== 'undefined') {
            window.buyShopItem = buyShopItem;
        }

        // Small chance of random event while resting
        if (Math.random() < 0.1) {
            setTimeout(() => {
                displayMessage("While resting, you notice something interesting nearby...", 'info');
                generateDiscoveryEncounter();
            }, 1000);
        }
    });

    document.getElementById('explore-btn')?.addEventListener('click', () => {
        explore();
    });

    document.getElementById('cast-spell-btn')?.addEventListener('click', () => {
        // ... (your existing cast-spell logic) ...
        // Check if player has class progression and is a spellcaster
        if (player.classProgression && (player.classProgression.class === 'mage' || player.classProgression.class === 'ranger')) {
            // Debug logging
            console.log('Player class progression:', player.classProgression);
            console.log('Known spells:', player.classProgression.knownSpells);
            console.log('Available spells:', player.classProgression.availableSpells);

            // Check both known spells and available spells
            const spellsToUse = player.classProgression.knownSpells && player.classProgression.knownSpells.length > 0
                ? player.classProgression.knownSpells
                : player.classProgression.availableSpells || [];

            if (spellsToUse.length > 0) {
                const randomSpell = spellsToUse[Math.floor(Math.random() * spellsToUse.length)];
                displayMessage(`You attempt to cast ${randomSpell}...`, 'info');

                // Get spell definition for better effect description
                const spellDef = spellDefinitions[randomSpell];
                if (spellDef) {
                    displayMessage(`${spellDef.description}`, 'success');

                    // Apply spell damage if it has any
                    if (spellDef.damage && player.currentEnemy) {
                        let damage = 0;

                        // Handle different damage formats
                        if (typeof spellDef.damage === 'string') {
                            if (spellDef.damage.includes('d')) {
                                // Standard dice notation like "3d8"
                                damage = rollDice(spellDef.damage);
                            } else if (spellDef.damage.includes('+')) {
                                // Handle format like "1d4+1 force"
                                const damagePart = spellDef.damage.split(' ')[0]; // Get "1d4+1"
                                const parts = damagePart.split('+');
                                damage = rollDice(parts[0]) + parseInt(parts[1] || 0);
                            } else {
                                // Try to parse as a number
                                damage = parseInt(spellDef.damage) || 8;
                            }
                        } else if (typeof spellDef.damage === 'number') {
                            damage = spellDef.damage;
                        } else {
                            damage = 8; // Default damage
                        }

                        // Ensure damage is a valid number
                        if (isNaN(damage) || damage < 1) {
                            damage = Math.floor(Math.random() * 8) + 3; // 3-10 damage
                        }

                        // Apply damage to enemy if in combat
                        if (player.currentEnemy) {
                            player.currentEnemy.hp = Math.max(0, player.currentEnemy.hp - damage);
                            displayMessage(`The spell deals ${damage} ${spellDef.school} damage!`, 'combat');

                            // Update enemy HP display
                            const enemyHpDisplay = document.getElementById('enemy-hp-display');
                            if (enemyHpDisplay) {
                                enemyHpDisplay.textContent = player.currentEnemy.hp;
                            }

                            // Check if enemy is defeated
                            if (player.currentEnemy.hp <= 0) {
                                displayMessage(`${player.currentEnemy.name} is defeated by your spell!`, 'success');

                                // Reward gold and XP
                                const goldReward = Math.floor(Math.random() * 40) + 20;
                                const xpReward = Math.floor(Math.random() * 25) + 15;

                                updateGold(goldReward, 'magical victory');
                                gainExperience(xpReward);

                                displayMessage(`You gained ${goldReward} gold and ${xpReward} XP!`, 'success');

                                player.currentEnemy = null;
                                // Remove inline combat interface
                                const inlineCombat = document.getElementById('inline-combat-interface');
                                if (inlineCombat) {
                                    inlineCombat.remove();
                                }
                                checkQuestCompletion(`defeated enemy with ${randomSpell}`);
                                saveGame();
                            } else {
                                // Enemy retaliates
                                setTimeout(() => enemyAttack(), 1500);
                            }
                        } else {
                            displayMessage(`The spell deals ${damage} ${spellDef.school} damage!`, 'combat');
                        }
                    }
                } else {
                    // Fallback effects
                    const effects = [
                        { msg: "The spell fizzles out harmlessly.", type: 'info' },
                        { msg: "You feel magical energy coursing through you!", type: 'success' },
                        { msg: "Sparks of magic dance around your fingers.", type: 'success' },
                        { msg: "You sense the magical weave responding to your call.", type: 'success' }
                    ];
                    const effect = effects[Math.floor(Math.random() * effects.length)];
                    setTimeout(() => displayMessage(effect.msg, effect.type), 500);
                }
            } else {
                displayMessage(`You don't know any spells yet. Class: ${player.classProgression.class}, Level: ${player.level}`, 'info');
                displayMessage("If this seems wrong, try using the Reset Progression button.", 'info');
            }
        } else {
            displayMessage("You are not a spellcaster.", 'info');
        }
    });

    document.getElementById('pray-btn')?.addEventListener('click', () => {
        displayMessage("You offer a prayer to the gods...", 'info');
        // Random blessing effect
        if (Math.random() < 0.3) {
            const blessings = [
                { effect: () => player.hp = Math.min(player.maxHp, player.hp + 5), msg: "You feel blessed with minor healing." },
                { effect: () => updateGold(Math.floor(Math.random() * 10) + 5, 'divine blessing'), msg: "You find a few coins that weren't there before." },
                { effect: () => { }, msg: "You feel a sense of peace and protection." }
            ];
            const blessing = blessings[Math.floor(Math.random() * blessings.length)];
            blessing.effect();
            setTimeout(() => {
                displayMessage(blessing.msg, 'success');
                updatePlayerStatsDisplay();
                saveGame();
            }, 1000);
        } else {
            setTimeout(() => displayMessage("The gods listen but remain silent.", 'info'), 1000);
        }
    });

    // Add event listeners for progression and quest buttons
    document.getElementById('show-progression-btn')?.addEventListener('click', () => {
        displayCharacterProgression();
    });

    document.getElementById('new-quest-btn')?.addEventListener('click', () => {
        // Always show quest interface first, then allow generating new ones from within
        displayQuests();
    });

    // Add event listeners for interface exit buttons
    document.getElementById('exit-progression-btn')?.addEventListener('click', () => {
        document.getElementById('progression-interface')?.classList.add('hidden');
    });

    document.getElementById('exit-quests-btn')?.addEventListener('click', () => {
        questInterface?.classList.add('hidden');
    });

    // Define global functions if they are not already (some might be defined outside DOMContentLoaded)
    // This ensures they are available when the event listener tries to call them.
    // If these are already top-level functions in your script, this explicit window assignment might be redundant
    // but doesn't hurt if the event delegation pattern is used.
    window.updateQuestButton = typeof updateQuestButton !== 'undefined' ? updateQuestButton : function() { /* ... */ };
    window.displayQuests = typeof displayQuests !== 'undefined' ? displayQuests : function() { /* ... */ };
    window.displayCharacterProgression = typeof displayCharacterProgression !== 'undefined' ? displayCharacterProgression : function() { /* ... */ };
    window.learnNewSpell = typeof learnNewSpell !== 'undefined' ? learnNewSpell : function() { /* ... */ };
    // ... and so on for other functions like equipItem, useItem, etc., if they are not already global or part of an imported module.
    // However, for event delegation, they just need to be in scope.

    // Add main event listeners (this function should also be defined or its contents integrated)
    addMainEventListeners(); // Assuming this function is defined elsewhere in your script.js

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

    // Reset pagination when inventory or quests change significantly
    function resetInventoryPagination() {
        inventoryPagination.currentPage = 0;
    }

    function resetQuestPagination() {
        questPagination.completedQuestsPage = 0;
    }

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

            // Save game state
            saveGame();

            // Add to conversation history
            addToConversationHistory('assistant', `${player.name} abandoned the quest: ${quest.title}`);
            saveConversationHistory();
        }
    }

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
    window.CombatSystem = CombatSystem;
    window.player = player; // Make player globally accessible

    // Make other functions globally accessible if needed by other parts of the code or for debugging
    window.LocationManager = typeof LocationManager !== 'undefined' ? LocationManager : {};
    window.GameActions = typeof GameActions !== 'undefined' ? GameActions : {};
    window.debugInventory = typeof debugInventory !== 'undefined' ? debugInventory : function() { /* ... */ };
    window.fixInventory = typeof fixInventory !== 'undefined' ? fixInventory : function() { /* ... */ };
    window.resetCharacterProgression = typeof resetCharacterProgression !== 'undefined' ? resetCharacterProgression : function() { /* ... */ };
    window.generateQuest = generateQuest;
    window.displayQuests = displayQuests;
    window.changeCompletedQuestsPage = changeCompletedQuestsPage;
    window.changeInventoryPage = changeInventoryPage;
    window.abandonQuest = abandonQuest;
    window.cleanupRelationships = cleanupRelationships;
    window.fixMaraRelationship = fixMaraRelationship;


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


                switch (action) {
                    case 'use':
                        if (itemIndex !== null) useItem(itemIndex);
                        break;
                    case 'equip':
                        if (itemIndex !== null) equipItem(itemIndex);
                        break;
                    case 'sell':
                        if (itemIndex !== null) sellItem(itemIndex);
                        break;
                    case 'drop':
                        if (itemIndex !== null) dropItem(itemIndex);
                        break;
                    case 'unequip': // 'unequip' uses 'data-slot'
                        if (slot) {
                            unequipItem(slot);
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

}); // End of DOMContentLoaded

// Add reset progression button to the game interface
const resetProgressionBtn = document.createElement('button');
resetProgressionBtn.id = 'reset-progression-btn';
resetProgressionBtn.className = 'btn-parchment bg-orange-600 hover:bg-orange-700 text-white text-sm py-1 px-2';
resetProgressionBtn.style.position = 'absolute';
resetProgressionBtn.style.top = '10px';
resetProgressionBtn.style.right = '10px';
resetProgressionBtn.style.zIndex = '999';
resetProgressionBtn.innerHTML = '<i class="gi gi-refresh mr-1"></i>Reset Progression';
resetProgressionBtn.title = 'Reset character progression (feats, skills, abilities) to match updated game files';

// Add to game container
const gameContainer = document.getElementById('game-container');
if (gameContainer) {
    gameContainer.appendChild(resetProgressionBtn);
}

// Add main event listeners function
function addMainEventListeners() {
    try {
        // Start screen buttons
        newGameBtn?.addEventListener('click', () => {
            console.log('New game button clicked');
            showScreen('character-creation-screen');
        });

        loadGameBtn?.addEventListener('click', () => {
            console.log('Load game button clicked');
            loadGame();

            console.log(`[SCRIPT.JS] After loadGame, module-scoped player HP: <span class="math-inline">${player.hp}/${player.maxHp}</span>`); // Should be 140/140
            if (window.player) {
                console.log(`[SCRIPT.JS] After loadGame, window.player HP: <span class="math-inline">${window.player.hp}/${window.player.maxHp}</span>`); // What is this?
                console.log(`[SCRIPT.JS] After loadGame, is module player === window.player? ${player === window.player}`);
            } else {
                console.log(`[SCRIPT.JS] After loadGame, window.player is not yet defined (or not yet assigned).`);
            }
            
        });

        // Character creation
        generateBackgroundBtn?.addEventListener('click', () => {
            console.log('Generate background button clicked');
            generateCharacterBackground();
        });

        createCharacterBtn?.addEventListener('click', () => {
            console.log('Create character button clicked');
            createCharacter();
        });

        // Game play buttons
        executeCommandBtn?.addEventListener('click', () => {
            const command = customCommandInput.value.trim();
            if (command) {
                console.log('Executing command:', command);
                executeCustomCommand(command);
                customCommandInput.value = '';
            }
        });

        customCommandInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                executeCommandBtn.click();
            }
        });

        saveGameBtn?.addEventListener('click', () => {
            console.log('Save game button clicked');
            saveGame();
        });

        // Combat buttons
        attackBtn?.addEventListener('click', () => {
            console.log('Attack button clicked');
            playerAttack();
        });

        fleeBtn?.addEventListener('click', () => {
            console.log('Flee button clicked');
            fleeCombat();
        });

        // Interface buttons
        showInventoryBtn?.addEventListener('click', () => {
            console.log('Show inventory button clicked');
            displayInventory();
        });

        showShopBtn?.addEventListener('click', () => {
            console.log('Show shop button clicked');
            showShop();
        });

        showBackgroundBtn?.addEventListener('click', () => {
            console.log('Show background button clicked');
            displayCharacterBackground();
        });

        // Exit buttons
        exitShopBtn?.addEventListener('click', () => {
            shopInterface?.classList.add('hidden');
        });

        exitInventoryBtn?.addEventListener('click', () => {
            inventoryInterface?.classList.add('hidden');
        });

        exitSkillsBtn?.addEventListener('click', () => {
            skillsInterface?.classList.add('hidden');
        });

        exitBackgroundBtn?.addEventListener('click', () => {
            backgroundInterface?.classList.add('hidden');
        });

        // Reset progression button
        const resetProgressionBtn = document.getElementById('reset-progression-btn');
        resetProgressionBtn?.addEventListener('click', () => {
            console.log('Reset progression button clicked');
            resetCharacterProgression();
        });

        console.log('✓ Main event listeners added');
    } catch (error) {
        console.error('❌ Error adding main event listeners:', error);
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
    saveGame();
}

function displayInventory() {
    // Hide other interfaces
    const interfacesToHide = ['shop-interface', 'skills-interface', 'quest-interface', 'combat-interface', 'background-interface', 'progression-interface'];
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
            ring2: null
        };
    }

    const equipmentSlots = [
        { slot: 'mainHand', name: 'Main Hand', icon: 'gi-sword-brandish' },
        { slot: 'offHand', name: 'Off Hand', icon: 'gi-round-shield' },
        { slot: 'head', name: 'Head', icon: 'gi-helmet' },
        { slot: 'chest', name: 'Chest', icon: 'gi-chest-armor' },
        { slot: 'hands', name: 'Hands', icon: 'gi-gauntlet' },
        { slot: 'legs', name: 'Legs', icon: 'gi-leg-armor' },
        { slot: 'feet', name: 'Feet', icon: 'gi-leg-armor' },
        { slot: 'amulet', name: 'Amulet', icon: 'gi-gem-pendant' },
        { slot: 'ring1', name: 'Ring 1', icon: 'gi-diamond-ring' },
        { slot: 'ring2', name: 'Ring 2', icon: 'gi-diamond-ring' }
    ];

    return equipmentSlots.map(slotData => {
        const item = player.equipment[slotData.slot];
        if (item) {
            return `
                <div class="parchment-box p-2 flex items-center gap-3 w-full">
                    <div class="flex-shrink-0">
                        <i class="gi ${slotData.icon} text-xl text-green-600"></i>
                    </div>
                    <div class="flex-grow">
                        <h6 class="font-bold text-sm">${slotData.name}</h6>
                        <p class="text-xs text-green-700">${item.name}</p>
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
                        <i class="gi ${slotData.icon} text-xl text-gray-400"></i>
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
    const canEquip = item.slot && (!player.equipment[item.slot] || player.equipment[item.slot].id !== item.id);
    const isConsumable = item.type === 'consumable' || (item.effect && (item.effect.type === 'heal' || item.effect.type === 'mana'));

    return `
        <div class="parchment-box p-2 w-full">
            <div class="flex justify-between items-start mb-1">
                <h6 class="font-bold text-lg">${item.name}</h6>
                <span class="text-xs px-2 py-1 rounded ${getRarityColor(item.rarity || 'COMMON')}">${item.rarity || 'COMMON'}</span>
            </div>
            <p class="text-sm text-amber-700 mb-1">${item.description || 'No description'}</p>
            
            ${item.damage ? `<p class="text-xs text-red-600">Damage: ${item.damage}</p>` : ''}
            ${item.defense ? `<p class="text-xs text-blue-600">Defense: ${item.defense}</p>` : ''}
            ${item.effect ? `<p class="text-xs text-purple-600">Effect: ${getEffectDescription(item.effect)}</p>` : ''}
            ${item.value ? `<p class="text-xs text-green-600 mb-1">Value: ${item.value} gold</p>` : ''}
            
            <div class="flex gap-2 flex-wrap">
                ${canEquip ? `<button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-green-600 hover:bg-green-700"  style="color: #D2B48C !important;" data-action="equip" data-index="${index}">Equip</button>` : ''}
                ${isConsumable ? `<button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-blue-600 hover:bg-blue-700"  style="color: #D2B48C !important;" data-action="use" data-index="${index}">Use</button>` : ''}
                <button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-yellow-600 hover:bg-yellow-700"  style="color: #D2B48C !important;" data-action="sell" data-index="${index}">Sell</button>
                <button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-red-600 hover:bg-red-700" data-action="drop" data-index="${index}">Drop</button>
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
    saveGame();
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
    saveGame();
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
        saveGame();
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
        saveGame();
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
        saveGame();
    }
}

function displayCharacterBackground() {
    // Hide other interfaces
    const interfacesToHide = ['combat-interface', 'shop-interface', 'inventory-interface', 'skills-interface', 'quest-interface', 'progression-interface'];
    interfacesToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
    });

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
        relationshipsHTML = '<div class="grid grid-cols-1 gap-2 text-sm">';
        Object.entries(player.relationships).forEach(([npcName, relationship]) => {
            // Add null check for relationship object
            if (!relationship || typeof relationship !== 'object') {
                console.warn(`Invalid relationship data for ${npcName}:`, relationship);
                return; // Skip this relationship
            }
            
            const status = relationship.status || 'neutral';
            const relationshipColor = getRelationshipColor(status);
            const trust = relationship.trust || 0;
            const trustBar = Math.max(0, Math.min(100, trust));

            relationshipsHTML += `
                <div class="flex justify-between items-center py-2 border-b border-amber-700/20">
                    <div class="flex-grow">
                        <span class="font-semibold">${npcName}</span>
                        <span class="text-xs ${relationshipColor} ml-2">(${status})</span>
                        <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div class="bg-green-500 h-2 rounded-full" style="width: ${trustBar}%"></div>
                        </div>
                    </div>
                    <span class="text-xs text-gray-600 ml-2">${trust}/100</span>
                </div>`;
        });
        relationshipsHTML += '</div>';
    } else {
        relationshipsHTML = '<p class="text-sm text-gray-600 italic">No relationships established yet.</p>';
    }

    // --- Constructing the innerHTML for backgroundContentDisplay ---
    backgroundContentDisplay.innerHTML = `
        <div class="parchment-box p-4">

            <h5 class="font-bold text-2xl mb-3 text-center text-amber-800">${player.name || 'Character Name'}</h5>

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
                <h6 class="font-bold text-lg mb-2 text-amber-700">Relationships</h6>
                ${relationshipsHTML}
            </div>

            <div class="mt-4 pt-4 border-t border-amber-700/30">
                <h6 class="font-bold text-lg mb-2 text-amber-700">Background Story</h6>
                <p class="italic text-sm leading-relaxed">${player.background || 'No background story available.'}</p>
            </div>
        </div>
    `;
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
    // ... and any other functions called by inline HTML event handlers
    /* window.displayCharacterBackground = displayCharacterBackground;
    window.displayInventory = displayInventory;
    window.showShop = showShop;
    window.displayCharacterProgression = displayCharacterProgression;
    */
}