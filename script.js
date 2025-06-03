
const GEMINI_API_KEY = 'AIzaSyDIFeql6HUpkZ8JJlr_kuN0WDFHUyOhijA'; // Replace with your actual Gemini API Key
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-thinking-exp-01-21:generateContent?key=${GEMINI_API_KEY}`;

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
const moveBtn = document.getElementById('move-btn');
const interactBtn = document.getElementById('interact-btn');
const inventoryBtn = document.getElementById('inventory-btn');
const skillsBtn = document.getElementById('skills-btn');
const shopBtn = document.getElementById('shop-btn');
const restBtn = document.getElementById('rest-btn');
const saveGameBtn = document.getElementById('save-game-btn');
const newQuestBtn = document.getElementById('new-quest-btn');

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
    { id: 'short_sword', name: 'Short Sword', type: 'weapon', slot: 'mainHand', damage: '1d6', value: 10, description: 'A basic, well-balanced short sword.' },
    { id: 'leather_armor', name: 'Leather Armor', type: 'armor', slot: 'chest', defense: 3, value: 15, description: 'Flexible and light leather protection.' },
    { id: 'healing_potion', name: 'Healing Potion', type: 'consumable', effect: { type: 'heal', amount: 30 }, value: 8, description: 'Restores a moderate amount of health.' },
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
    playerNameDisplay.textContent = player.name;
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
    localStorage.setItem('pedenaRPGSave', JSON.stringify(player));
    displayMessage("Game saved!", 'success');
    loadGameBtn.disabled = false; // Enable load game button if a save exists
}

function loadGame() {
    const savedGame = localStorage.getItem('pedenaRPGSave');
    if (savedGame) {
        player = JSON.parse(savedGame);
        displayMessage("Game loaded!", 'success');
        updatePlayerStatsDisplay();
        showScreen('game-play-screen');
        displayMessage(`Welcome back, ${player.name}! You are in ${player.currentLocation}.`);
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
async function callGeminiAPI(prompt, temperature = 0.7, maxOutputTokens = 800) {
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
        alert(`Network error during AI call: ${error.message}`);
        return null;
    }
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
    
    const prompt = `Write a brief fantasy RPG background for ${name}, a ${gender} ${charClass} in Pedena. 2-3 sentences about origin and goals.`;

    const background = await callGeminiAPI(prompt, 0.8, 100);
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
    const description = await callGeminiAPI(prompt, 0.7, 200);
    if (description) {
        displayMessage(`You are in ${location}. ${description}`);
    } else {
        displayMessage(`Failed to describe ${location}.`);
    }
}

async function handleMovement() {
    displayMessage("Considering your next move...", 'info');
    const prompt = `The player, ${player.name} (${player.class}, Level ${player.level}), is currently in ${player.currentLocation}. Suggest 3-5 distinct and interesting directions or nearby locations they could travel to within the magical land of Pedena. Format as a comma-separated list of locations.`;
    const directions = await callGeminiAPI(prompt, 0.9, 100);
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
    const prompt = `In ${player.currentLocation}, describe a unique fantasy RPG NPC that ${player.name} (${player.class}) encounters. Give them a name, a brief appearance, and a short personality description (2-3 sentences). Also, generate one short dialogue line from them that hints at a potential quest, local gossip, or a problem.`;
    const npcInfo = await callGeminiAPI(prompt, 0.8, 200);
    if (npcInfo) {
        displayMessage(`You encounter someone: ${npcInfo}`);
    } else {
        displayMessage("You don't see anyone interesting to talk to right now.");
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
        player.level++;
        player.exp -= player.expToNextLevel;
        player.expToNextLevel = Math.floor(player.expToNextLevel * 1.5); // Increase requirement
        player.maxHp += 10; // Simple HP increase
        player.hp = player.maxHp; // Heal to full
        displayMessage(`Congratulations! You reached Level ${player.level}!`, 'success');
        displayMessage(`Your Max HP increased to ${player.maxHp}. You feel rejuvenated!`, 'success');
        // AI call for level up bonus/flavor text
        levelUpAI();
        updatePlayerStatsDisplay();
    }
}

async function levelUpAI() {
    const prompt = `The player, ${player.name} (${player.class}), has just reached Level ${player.level}. Describe a brief, thematic benefit or insight they gain upon leveling up, related to their class or general growth.`;
    const bonus = await callGeminiAPI(prompt, 0.7, 100);
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
    inventoryItemsDisplay.innerHTML = '';
    if (player.inventory.length === 0) {
        inventoryItemsDisplay.innerHTML = '<p class="text-center text-amber-800">Your inventory is empty.</p>';
        return;
    }

    player.inventory.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('parchment-box', 'p-3');
        itemDiv.innerHTML = `
            <p class="font-bold">${item.name} (${item.type})</p>
            <p class="text-sm text-amber-700">${item.description}</p>
            <p class="text-sm">Value: ${item.value} gold</p>
        `;
        const useBtn = document.createElement('button');
        useBtn.classList.add('btn-parchment', 'text-sm', 'mt-2', 'px-3', 'py-1');
        useBtn.textContent = 'Use';
        useBtn.onclick = () => useItem(index);
        itemDiv.appendChild(useBtn);

        const equipBtn = document.createElement('button');
        if (item.type === 'weapon' || item.type === 'armor') {
            equipBtn.classList.add('btn-parchment', 'text-sm', 'mt-2', 'ml-2', 'px-3', 'py-1');
            equipBtn.textContent = 'Equip';
            equipBtn.onclick = () => equipItem(index);
            itemDiv.appendChild(equipBtn);
        }
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
    
    shopItemsDisplay.innerHTML = '';
    // Sample shop items
    const shopItems = [
        { ...items.find(item => item.id === 'short_sword'), price: 15 },
        { ...items.find(item => item.id === 'leather_armor'), price: 25 },
        { ...items.find(item => item.id === 'healing_potion'), price: 12 }
    ];
    
    shopItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('parchment-box', 'p-3');
        itemDiv.innerHTML = `
            <p class="font-bold">${item.name}</p>
            <p class="text-sm text-amber-700">${item.description}</p>
            <p class="text-sm">Price: ${item.price} gold</p>
        `;
        const buyBtn = document.createElement('button');
        buyBtn.classList.add('btn-parchment', 'text-sm', 'mt-2', 'px-3', 'py-1');
        buyBtn.textContent = 'Buy';
        buyBtn.onclick = () => buyItem(item);
        itemDiv.appendChild(buyBtn);
        shopItemsDisplay.appendChild(itemDiv);
    });
}

function buyItem(item) {
    if (player.gold >= item.price) {
        player.gold -= item.price;
        player.inventory.push({ ...item });
        displayMessage(`You bought ${item.name} for ${item.price} gold!`, 'success');
        updatePlayerStatsDisplay();
    } else {
        displayMessage(`You don't have enough gold to buy ${item.name}.`, 'error');
    }
}

async function generateQuest() {
    displayMessage("A mysterious figure approaches with a quest...", 'info');
    const prompt = `Generate a short fantasy RPG quest for ${player.name} (${player.class}, Level ${player.level}) in ${player.currentLocation}. Include: quest giver name, quest objective, and reward. Keep it concise (2-3 sentences).`;
    const quest = await callGeminiAPI(prompt, 0.8, 150);
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

    // Apply class bonuses
    const classData = classes[charClass];
    player.maxHp += classData.hpBonus;
    player.hp = player.maxHp;
    
    // Set stats based on class
    Object.entries(classData.statFocus).forEach(([stat, value]) => {
        player.stats[stat] = 10 + value; // Base 10 + class bonus
    });
    
    // Add starting skills and abilities
    player.skills.push(classData.startingSkill);
    player.abilities.push(classData.startingAbility);
    
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

// Game Action Event Listeners
moveBtn.addEventListener('click', handleMovement);
interactBtn.addEventListener('click', handleNPCInteraction);
inventoryBtn.addEventListener('click', displayInventory);
skillsBtn.addEventListener('click', displaySkills);
shopBtn.addEventListener('click', displayShop);
restBtn.addEventListener('click', restPlayer);
saveGameBtn.addEventListener('click', saveGame);
newQuestBtn.addEventListener('click', generateQuest);

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
});

// End of file
