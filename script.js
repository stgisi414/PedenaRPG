// Import game data assets
import { gameData, GameDataManager } from './assets/game-data-loader.js';
import { CharacterManager } from './game-logic/character-manager.js';
import { classProgression, spellDefinitions, abilityDefinitions } from './game-logic/class-progression.js';

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
        }
    };
    localStorage.setItem('pedenaRPGSave', JSON.stringify(saveData));
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
            // Load character progression if available
            if (player.name) {
                CharacterManager.loadProgression(player);
            }
        } else {
            // Old format - just player
            player = saveData;
        }

        displayMessage("Game loaded!", 'success');
        updatePlayerStatsDisplay();
        showScreen('game-play-screen');
        displayMessage(`Welcome back, ${player.name}! You are in ${player.currentLocation}.`);

        // Show existing NPCs if any
        const existingNPCs = getNPCsInLocation(player.currentLocation);
        if (existingNPCs.length > 0) {
            displayMessage(`You notice ${existingNPCs.map(npc => npc.name).join(', ')} in the area.`);
        }
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
async function callGeminiAPI(prompt, temperature = 0.10, maxOutputTokens = 10100) {
    try {
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: temperature,
                    maxOutputTokens: maxOutputTokens,
                    topP: 0.8,
                    topK: 40
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH", 
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
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

    const background = await callGeminiAPI(prompt, 0.8, 60);
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
    const description = await callGeminiAPI(prompt, 0.7, 100);
    if (description) {
        displayMessage(`You are in ${location}. ${description}`);
    } else {
        displayMessage(`Failed to describe ${location}.`);
    }
}

async function handleMovement() {
    displayMessage("Considering your next move...", 'info');

    // Get real locations from world data
    const nearbyLocations = [
        GameDataManager.getRandomFrom(gameData.world.cities),
        GameDataManager.getRandomFrom(gameData.world.cities),
        GameDataManager.getRandomFrom(gameData.world.regions)
    ];

    const locationNames = nearbyLocations.map(loc => loc.name);
    const prompt = `Player ${player.name} (${player.class}, Level ${player.level}) is in ${player.currentLocation}. Here are nearby places: ${locationNames.join(', ')}. Suggest 3-4 travel destinations from these or similar locations in Pedena. Format as comma-separated list.`;

    const directions = await callGeminiAPI(prompt, 0.9, 60);
    if (directions) {
        const choices = directions.split(',').map(s => s.trim()).filter(s => s !== '');
        displayMessage("Where would you like to go?");
        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.classList.add('btn-parchment', 'w-full', 'mb-2');
            button.textContent = choice;
            button.onclick = async () => {
                player.currentLocation = choice;
                displayMessage(`You travel to ${choice}.`);
                await generateWorldDescription(choice);
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
        displayMessage(`You see ${npc.name} again. ${npc.description}`);
        gameWorld.lastNPCInteraction = npc.id;
    } else {
        // Create new NPC
        const context = GameDataManager.generateLocationContext(player.currentLocation);
        const randomFaction = GameDataManager.getRandomFrom(gameData.organizations.factions);

        const prompt = `Create NPC in ${player.currentLocation}. Format: "Name: [name]. Appearance: [brief]. Says: [one line dialogue]"`;

        const npcInfo = await callGeminiAPI(prompt, 0.8, 50);
        if (npcInfo) {
            // Parse the NPC info to extract name
            const nameMatch = npcInfo.match(/Name:\s*([^.]+)/);
            const npcName = nameMatch ? nameMatch[1].trim() : "Mysterious Figure";

            const newNPC = createNPC(npcName, npcInfo, player.currentLocation);
            saveNPCToLocation(newNPC, player.currentLocation);
            gameWorld.lastNPCInteraction = newNPC.id;

            displayMessage(`You encounter someone new: ${npcInfo}`);
        } else {
            displayMessage("You don't see anyone interesting to talk to right now.");
        }
    }
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
        player.gold += player.currentEnemy.goldDrop;
        displayMessage(`You gained ${player.currentEnemy.expReward} EXP and ${player.currentEnemy.goldDrop} gold.`, 'success');
        // Handle loot
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
    const bonus = await callGeminiAPI(prompt, 0.7, 30);
    if (bonus) {
        displayMessage(`Upon leveling up, you feel: ${bonus}`, 'info');
    }
}

function displayInventory() {
    shopInterface.classList.add('hidden');
    skillsInterface.classList.add('hidden');
    questInterface.classList.add('hidden');
    combatInterface.classList.add('hidden');
    inventoryInterface.classList.remove('hidden');

    displayMessage("Opening your inventory...", 'info');

    inventoryItemsDisplay.innerHTML = '';

    // Show gold
    const goldDiv = document.createElement('div');
    goldDiv.classList.add('parchment-box', 'p-3', 'mb-4', 'text-center');
    goldDiv.innerHTML = `<p class="font-bold text-xl">Gold: ${player.gold}</p>`;
    inventoryItemsDisplay.appendChild(goldDiv);

    // Show equipped items
    const equippedDiv = document.createElement('div');
    equippedDiv.classList.add('parchment-box', 'p-3', 'mb-4');
    equippedDiv.innerHTML = '<h4 class="font-bold mb-2">Currently Equipped:</h4>';
    const equippedItems = Object.values(player.equipment).filter(item => item);
    if (equippedItems.length > 0) {
        equippedItems.forEach(item => {
            const equipDiv = document.createElement('p');
            equipDiv.textContent = `${item.name} (${item.slot})`;
            equippedDiv.appendChild(equipDiv);
        });
    } else {
        equippedDiv.innerHTML += '<p class="text-amber-700">Nothing equipped</p>';
    }
    inventoryItemsDisplay.appendChild(equippedDiv);

    if (player.inventory.length === 0) {
        inventoryItemsDisplay.innerHTML += '<p class="text-center text-amber-800">Your inventory is empty.</p>';
        return;
    }

    const inventoryHeader = document.createElement('h4');
    inventoryHeader.classList.add('font-bold', 'mb-3');
    inventoryHeader.textContent = 'Inventory Items:';
    inventoryItemsDisplay.appendChild(inventoryHeader);

    player.inventory.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('parchment-box', 'p-3', 'mb-2');
        itemDiv.innerHTML = `
            <p class="font-bold">${item.name} (${item.type})</p>
            <p class="text-sm text-amber-700">${item.description}</p>
            <p class="text-sm">Value: ${item.value} gold</p>
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

        if (item.type === 'weapon' || item.type === 'armor') {
            const equipBtn = document.createElement('button');
            equipBtn.classList.add('btn-parchment', 'text-sm', 'px-3', 'py-1');
            equipBtn.textContent = 'Equip';
            equipBtn.onclick = () => equipItem(index);
            buttonContainer.appendChild(equipBtn);
        }

        itemDiv.appendChild(buttonContainer);
        inventoryItemsDisplay.appendChild(itemDiv);
    });
}

function useItem(index) {
    const item = player.inventory[index];
    if (item.type === 'consumable' && item.effect?.type === 'heal') {
        player.hp = Math.min(player.maxHp, player.hp + item.effect.amount);
        displayMessage(`You used ${item.name} and healed ${item.effect.amount} HP!`, 'success');
        player.inventory.splice(index, 1); // Remove consumed item
        updatePlayerStatsDisplay();
        displayInventory(); // Refresh inventory display
    } else {
        displayMessage(`You cannot use ${item.name} at this time.`, 'info');
    }
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

function displaySkills() {
    shopInterface.classList.add('hidden');
    inventoryInterface.classList.add('hidden');
    questInterface.classList.add('hidden');
    combatInterface.classList.add('hidden');
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
    shopInterface.classList.remove('hidden');

    displayMessage("Welcome to the merchant's shop!", 'info');

    shopItemsDisplay.innerHTML = '';

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
        'Tools & Utilities': shopItems.filter(item => item.type === 'tool'),
        'Magical Items': shopItems.filter(item => ['magical', 'scroll'].includes(item.type)),
        'Jewelry': shopItems.filter(item => item.type === 'jewelry'),
        'Rare Items': shopItems.filter(item => ['rare', 'luxury', 'treasure'].includes(item.type))
    };

    Object.entries(categories).forEach(([categoryName, categoryItems]) => {
        if (categoryItems.length > 0) {
            const categoryHeader = document.createElement('h5');
            categoryHeader.classList.add('font-bold', 'text-lg', 'mb-3', 'mt-4', 'text-amber-900', 'border-b', 'border-amber-700');
            categoryHeader.textContent = categoryName;
            shopItemsDisplay.appendChild(categoryHeader);

            const categoryGrid = document.createElement('div');
            categoryGrid.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-3', 'mb-4');

            categoryItems.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('parchment-box', 'p-3');

                let itemDetails = `
                    <p class="font-bold">${item.name}</p>
                    <p class="text-sm text-amber-700">${item.description}</p>
                    <p class="text-sm"><strong>Price:</strong> ${item.price} gold</p>
                `;

                // Add type-specific information
                if (item.damage) {
                    itemDetails += `<p class="text-sm"><strong>Damage:</strong> ${item.damage}</p>`;
                }
                if (item.defense) {
                    itemDetails += `<p class="text-sm"><strong>Defense:</strong> +${item.defense}</p>`;
                }
                if (item.effect) {
                    itemDetails += `<p class="text-sm"><strong>Effect:</strong> ${item.effect.type}</p>`;
                }
                if (item.slot) {
                    itemDetails += `<p class="text-sm"><strong>Slot:</strong> ${item.slot}</p>`;
                }

                itemDiv.innerHTML = itemDetails;

                const buyBtn = document.createElement('button');
                buyBtn.classList.add('btn-parchment', 'text-sm', 'mt-2', 'px-3', 'py-1', 'w-full');
                buyBtn.textContent = `Buy for ${item.price} gold`;
                buyBtn.onclick = () => buyItem(item);

                // Disable if player can't afford
                if (player.gold < item.price) {
                    buyBtn.disabled = true;
                    buyBtn.textContent = 'Too Expensive';
                }

                itemDiv.appendChild(buyBtn);
                categoryGrid.appendChild(itemDiv);
            });

            shopItemsDisplay.appendChild(categoryGrid);
        }
    });

    // Add gold display at top
    const goldDisplay = document.createElement('div');
    goldDisplay.classList.add('parchment-box', 'p-3', 'mb-4', 'text-center', 'sticky', 'top-0', 'bg-amber-100', 'border-2', 'border-amber-600');
    goldDisplay.innerHTML = `<p class="font-bold text-xl">Your Gold: ${player.gold}</p>`;
    shopItemsDisplay.insertBefore(goldDisplay, shopItemsDisplay.firstChild);
}

function buyItem(item) {
    if (player.gold >= item.price) {
        player.gold -= item.price;
        const purchasedItem = { ...item };
        delete purchasedItem.price; // Remove price property from inventory item
        player.inventory.push(purchasedItem);
        displayMessage(`You bought ${item.name} for ${item.price} gold!`, 'success');
        updatePlayerStatsDisplay();
        displayShop(); // Refresh shop to update gold display and affordable items
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
    displayMessage("Processing your command...", 'info');

    // Check for movement first, before AI call
    await handleCommandConsequences(command, "");

    // Create context-rich prompt for the AI
    const contextPrompt = `
Player: ${player.name} (${player.class}, Level ${player.level})
Current Location: ${player.currentLocation}
HP: ${player.hp}/${player.maxHp}
Gold: ${player.gold}
Inventory: ${player.inventory.map(item => item.name).join(', ') || 'empty'}
Equipped: ${Object.values(player.equipment).filter(item => item).map(item => item.name).join(', ') || 'nothing'}

Player Command: "${command}"

As the game master, interpret this command and provide a detailed response describing what happens. Focus on the immediate narrative result. If movement occurred, acknowledge the new location. Keep response to 2-3 sentences.`;

    const response = await callGeminiAPI(contextPrompt, 0.8, 100);
    if (response) {
        displayMessage(response);
    } else {
        displayMessage("You attempt the action, but nothing notable happens.");
    }
}

async function handleCommandConsequences(command, aiResponse) {
    const lowerCommand = command.toLowerCase();

    // Check for combat keywords
    if (lowerCommand.includes('attack') || lowerCommand.includes('fight') || lowerCommand.includes('battle')) {
        if (Math.random() < 0.6) { // 60% chance to trigger combat
            checkRandomEncounter();
        }
    }

    // Check for NPC interaction keywords
    if (lowerCommand.includes('talk to') || lowerCommand.includes('speak to') || lowerCommand.includes('ask')) {
        await handleNPCInteraction();
    }

    // Enhanced movement detection - check for many movement keywords
    if (lowerCommand.includes('go to') || lowerCommand.includes('travel') || lowerCommand.includes('move to') ||
        lowerCommand.includes('leave') || lowerCommand.includes('exit') || lowerCommand.includes('enter') ||
        lowerCommand.includes('walk to') || lowerCommand.includes('head to') || lowerCommand.includes('journey to') ||
        lowerCommand.includes('visit') || lowerCommand.includes('flee to') || lowerCommand.includes('escape to')) {

        // Try to extract location from command
        let newLocation = null;

        // Direct location patterns
        const locationPatterns = [
            /(?:go to|travel to|move to|walk to|head to|journey to|visit|flee to|escape to)\s+(.+)/i,
            /(?:leave|exit)\s+(?:the\s+)?(.+?)(?:\s+and|\s+to|\s*$)/i,
            /(?:enter|go into)\s+(?:the\s+)?(.+)/i
        ];

        for (const pattern of locationPatterns) {
            const match = command.match(pattern);
            if (match) {
                newLocation = match[1].trim();
                break;
            }
        }

        // If no specific location found, use AI to determine movement
        if (!newLocation && (lowerCommand.includes('leave') || lowerCommand.includes('exit'))) {
            // Generate a nearby location to move to
            const nearbyLocations = [
                GameDataManager.getRandomFrom(gameData.world.cities),
                GameDataManager.getRandomFrom(gameData.world.regions)
            ];
            newLocation = nearbyLocations[Math.floor(Math.random() * nearbyLocations.length)].name;
            displayMessage(`You leave ${player.currentLocation} and head towards ${newLocation}.`);
        }

        if (newLocation) {
            // Clean up the location name
            newLocation = newLocation.replace(/^(the|a|an)\s+/i, '').trim();
            player.currentLocation = newLocation;
            displayMessage(`You are now in ${newLocation}.`);
            await generateWorldDescription(newLocation);
            if (Math.random() < 0.3) checkRandomEncounter();
        }
    }

    // Check for rest/healing keywords
    if (lowerCommand.includes('rest') || lowerCommand.includes('sleep') || lowerCommand.includes('heal')) {
        const healAmount = Math.floor(Math.random() * 20) + 10;
        player.hp = Math.min(player.maxHp, player.hp + healAmount);
        displayMessage(`You feel refreshed and recover ${healAmount} HP.`, 'success');
        updatePlayerStatsDisplay();
    }

    // Check for gold/treasure keywords
    if (lowerCommand.includes('search') || lowerCommand.includes('loot') || lowerCommand.includes('treasure')) {
        if (Math.random() < 0.4) { // 40% chance to find something
            const goldFound = Math.floor(Math.random() * 15) + 5;
            player.gold += goldFound;
            displayMessage(`You found ${goldFound} gold!`, 'success');
            updatePlayerStatsDisplay();
        }
    }
}

async function generateQuest() {
    if (!confirm("Are you sure you want to request a new quest?")) {
        return;
    }

    displayMessage("A mysterious figure approaches with a quest...", 'info');

    // Use world data for quest context
    const randomFaction = GameDataManager.getRandomFrom(gameData.organizations.factions);
    const randomGuild = GameDataManager.getRandomFrom(gameData.organizations.guilds);
    const randomBusiness = GameDataManager.getRandomFrom(gameData.economy.businesses);

    const prompt = `Create a quest for ${player.name} (${player.class}, Level ${player.level}) in ${player.currentLocation}. Involve elements like ${randomFaction.name}, ${randomGuild.name}, or ${randomBusiness.name}. Include quest giver, objective, reward (2-3 sentences).`;

    const quest = await callGeminiAPI(prompt, 0.8, 80);
    if (quest) {
        player.quests.push({
            id: Date.now(),
            description: quest,
            completed: false
        });
        displayMessage(`New Quest Added: ${quest}`, 'success');
    } else {
        displayMessage("No one seems to have any tasks for you right now.");
    }
}

function displayQuests() {
    shopInterface.classList.add('hidden');
    inventoryInterface.classList.add('hidden');
    skillsInterface.classList.add('hidden');
    combatInterface.classList.add('hidden');
    questInterface.classList.remove('hidden');

    questListDisplay.innerHTML = '';
    if (player.quests.length === 0) {
        questListDisplay.innerHTML = '<p class="text-center text-amber-800">You have no active quests.</p>';
        return;
    }

    player.quests.forEach(quest => {
        const questDiv = document.createElement('div');
        questDiv.classList.add('parchment-box', 'p-3', 'mb-2');
        questDiv.innerHTML = `<p class="text-sm">${quest.description}</p>`;
        questListDisplay.appendChild(questDiv);
    });
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
newQuestBtn.addEventListener('click', generateQuest);
showInventoryBtn.addEventListener('click', displayInventory);
showShopBtn.addEventListener('click', displayShop);
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

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    // Check if there's a saved game to enable load button
    if (localStorage.getItem('pedenaRPGSave')) {
        loadGameBtn.disabled = false;
    }

    // Make displayCharacterProgression globally accessible
    window.displayCharacterProgression = displayCharacterProgression;
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

    // Create progression interface
    let progressionInterface = document.getElementById('progression-interface');
    if (!progressionInterface) {
        progressionInterface = document.createElement('div');
        progressionInterface.id = 'progression-interface';
        progressionInterface.classList.add('hidden', 'mt-6');
        progressionInterface.innerHTML = `
            <h4 class="text-2xl font-bold text-purple-700 mb-4 text-center">Character Progression</h4>
            <div id="progression-content" class="parchment-box p-4 mb-4"></div>
            <div class="text-center">
                <button id="exit-progression-btn" class="btn-parchment bg-gray-600 hover:bg-gray-700 text-white">Close Progression</button>
            </div>
        `;
        gamePlayScreen.appendChild(progressionInterface);

        document.getElementById('exit-progression-btn').addEventListener('click', () => {
            progressionInterface.classList.add('hidden');
        });
    }

    progressionInterface.classList.remove('hidden');

    const progressionContent = document.getElementById('progression-content');
    const progression = CharacterManager.getCharacterProgression(player);

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
                        <p class="text-sm text-amber-700">${ability.definition.description}</p>
                    </div>`
                ).join('')}
            </div>

            <div class="parchment-box p-3">
                <h5 class="font-bold mb-2">Feats</h5>
                ${progression.feats.map(feat =>
                    `<div class="mb-2">
                        <p class="font-semibold">${feat.name}</p>
                        <p class="text-sm text-amber-700">${feat.definition.description}</p>
                    </div>`
                ).join('')}
            </div>

            ${progression.spells.known.length > 0 ? `
            <div class="parchment-box p-3">
                <h5 class="font-bold mb-2">Known Spells</h5>
                ${progression.spells.known.map(spell =>
                    `<div class="mb-2">
                        <p class="font-semibold">${spell.name} (Level ${spell.definition.level})</p>
                        <p class="text-sm text-amber-700">${spell.definition.description}</p>
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
                        <p class="text-sm text-amber-700">${cantrip.definition.description}</p>
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