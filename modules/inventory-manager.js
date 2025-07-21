
// Inventory Management Module
import { gameState } from './game-state.js';
import { uiManager } from './ui-manager.js';

export class InventoryManager {
    constructor() {
        this.currentShopInventory = [];
    }

    displayInventory() {
        const player = gameState.getPlayer();
        
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
        if (typeof window.ItemManager !== 'undefined' && window.ItemManager.updateStatusEffects) {
            window.ItemManager.updateStatusEffects(player);
        }

        console.log("displayInventory: Rendering inventory. Items count:", player.inventory ? player.inventory.length : 'undefined');

        let inventoryHTML = '';

        // Gold Display
        inventoryHTML += `
            <div class="parchment-box p-3 mb-4 text-center md:col-span-2">
                <p class="font-bold text-xl">Gold: ${player.gold}</p>
            </div>`;

        // Active Status Effects
        if (player.statusEffects && player.statusEffects.length > 0) {
            inventoryHTML += `<div class="parchment-box p-3 mb-4 md:col-span-2"><h4 class="font-bold mb-2">Active Effects:</h4>`;
            player.statusEffects.forEach(effect => {
                const timeLeft = Math.max(0, Math.floor(((effect.expiresAt || 0) - Date.now()) / 1000));
                inventoryHTML += `<p class="text-sm ${effect.type === 'positive' ? 'text-green-700' : 'text-red-700'}">${effect.name} (${timeLeft}s): ${effect.description}</p>`;
            });
            inventoryHTML += `</div>`;
        }

        // Equipped Items
        inventoryHTML += `
            <div class="mb-6 w-full md:col-span-2"> 
                <h5 class="text-xl font-bold mb-3 text-blue-600">Equipped Items</h5>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full"> 
                    ${this.buildEquipmentDisplay()}
                </div>
            </div>`;

        // Inventory Items section
        const unequippedItems = player.inventory ? player.inventory.filter(item => {
            if (!player.equipment) return true;
            return !Object.values(player.equipment).some(equippedItem =>
                equippedItem && equippedItem.id === item.id
            );
        }) : [];

        const pagination = gameState.inventoryPagination;
        const startIndex = pagination.currentPage * pagination.itemsPerPage;
        const endIndex = Math.min(startIndex + pagination.itemsPerPage, unequippedItems.length);
        const paginatedItems = unequippedItems.slice(startIndex, endIndex);
        const totalPages = Math.ceil(unequippedItems.length / pagination.itemsPerPage);

        inventoryHTML += `
            <div class="mb-6 w-full md:col-span-2"> 
                <div class="flex justify-between items-center mb-3">
                    <h5 class="text-xl font-bold text-yellow-600">Inventory Items</h5>
                    ${totalPages > 1 ? `<span class="text-sm text-gray-600">Page ${pagination.currentPage + 1} of ${totalPages}</span>` : ''}
                </div>
                <p class="text-sm text-gray-600 mb-3">Items: ${unequippedItems.length} total, showing ${paginatedItems.length}</p>
                <div class="grid grid-cols-1 gap-4 w-full"> 
        `;

        if (unequippedItems.length === 0) {
            inventoryHTML += '<p class="text-center text-gray-600">Your inventory is empty.</p>';
        } else {
            paginatedItems.forEach((item, index) => {
                const originalIndex = player.inventory.findIndex(invItem => invItem.id === item.id);
                inventoryHTML += this.buildInventoryItemDisplay(item, originalIndex);
            });
        }

        inventoryHTML += `</div>`;

        // Add pagination controls
        if (totalPages > 1) {
            inventoryHTML += `
                <div class="flex justify-center items-center gap-2 mt-4">
                    <button onclick="window.gameState.changeInventoryPage(-1); window.inventoryManager.displayInventory()" 
                            class="btn-parchment text-xs py-1 px-2 ${pagination.currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
                            ${pagination.currentPage === 0 ? 'disabled' : ''}>
                        Previous
                    </button>
                    <span class="text-sm text-gray-600 mx-2">
                        ${pagination.currentPage + 1} / ${totalPages}
                    </span>
                    <button onclick="window.gameState.changeInventoryPage(1); window.inventoryManager.displayInventory()" 
                            class="btn-parchment text-xs py-1 px-2 ${pagination.currentPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}"
                            ${pagination.currentPage >= totalPages - 1 ? 'disabled' : ''}>
                        Next
                    </button>
                </div>
            `;
        }

        inventoryHTML += `</div>`;

        const inventoryItemsDisplay = document.getElementById('inventory-items');
        if (inventoryItemsDisplay) {
            inventoryItemsDisplay.innerHTML = inventoryHTML;
        } else {
            console.error("inventoryItemsDisplay element not found in displayInventory!");
        }
    }

    buildEquipmentDisplay() {
        const player = gameState.getPlayer();
        if (!player.equipment) {
            player.equipment = {
                head: null, chest: null, hands: null, legs: null, feet: null,
                mainHand: null, offHand: null, amulet: null, ring1: null, ring2: null, back: null
            };
        }

        const equipmentSlots = [
            { slot: 'mainHand', name: 'Main Hand', icon: 'ra-sword' },
            { slot: 'offHand', name: 'Off Hand', icon: 'ra-shield' },
            { slot: 'head', name: 'Head', icon: 'ra-knight-helmet' },
            { slot: 'chest', name: 'Chest', icon: 'ra-vest' },
            { slot: 'hands', name: 'Hands', icon: 'ra-gauntlet' },
            { slot: 'legs', name: 'Legs', icon: '👖' },
            { slot: 'feet', name: 'Feet', icon: 'ra-boots' },
            { slot: 'back', name: 'Back', icon: '🧥' },
            { slot: 'amulet', name: 'Amulet', icon: 'ra-gem' },
            { slot: 'ring1', name: 'Ring 1', icon: 'ra-ring' },
            { slot: 'ring2', name: 'Ring 2', icon: 'ra-ring' }
        ];

        return equipmentSlots.map(slotData => {
            const item = player.equipment[slotData.slot];
            const iconClass = item ? uiManager.getIconForItem(item) : slotData.icon;
            const isEmoji = !iconClass.startsWith('ra-');

            if (item) {
                // Build combat stats display
                let combatStats = [];
                if (item.damage) combatStats.push(`Damage: ${item.damage}`);
                if (item.armor) combatStats.push(`Armor: +${item.armor}`);
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

    buildInventoryItemDisplay(item, index) {
        const player = gameState.getPlayer();
        const canEquip = item.slot && (!player.equipment[item.slot] || player.equipment[item.slot].id !== item.id);
        const isConsumable = item.type === 'consumable' || (item.effect && (item.effect.type === 'heal' || item.effect.type === 'mana'));
        const iconClass = uiManager.getIconForItem(item);

        return `
            <div class="parchment-box p-3 w-full flex gap-3">
                <div class="flex-shrink-0 pt-1">
                     <i class="ra ${iconClass} text-3xl text-amber-800"></i>
                </div>
                <div class="flex-grow">
                    <div class="flex justify-between items-start mb-1">
                        <h6 class="font-bold text-lg">${item.name}</h6>
                        <span class="text-xs px-2 py-1 rounded ${uiManager.getRarityColor(item.rarity || 'COMMON')}">${item.rarity || 'COMMON'}</span>
                    </div>
                    <p class="text-sm text-amber-700 mb-2">${item.description || 'No description'}</p>

                    ${item.damage ? `<p class="text-xs text-red-600">Damage: ${item.damage}</p>` : ''}
                    ${item.armor ? `<p class="text-xs text-blue-600">Armor: ${item.armor}</p>` : ''}
                    ${item.effect ? `<p class="text-xs text-purple-600">Effect: ${uiManager.getEffectDescription(item.effect)}</p>` : ''}
                    ${item.value ? `<p class="text-xs text-green-600 mb-2">Value: ${item.value} gold</p>` : ''}

                    <div class="flex gap-2 flex-wrap">
                        ${canEquip ? `<button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-green-600 hover:bg-green-700"  style="color: #D2B48C !important;" data-action="equip" data-index="${index}">Equip</button>` : ''}
                        ${isConsumable ? `<button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-blue-600 hover:bg-blue-700" style="color: #D2B48C !important;" data-action="use" data-index="${index}">Use</button>` : ''}
                        <button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-yellow-600 hover:bg-yellow-700" style="color: #D2B48C !important;" data-action="sell" data-index="${index}">Sell</button>
                        <button class="btn-parchment inventory-action-btn text-xs py-1 px-2 bg-red-600 hover:bg-red-700" style="color: #D2B48C !important;" data-action="drop" data-index="${index}">Drop</button>
                    </div>
                </div>
            </div>
        `;
    }

    async showShop() {
        const shopInterface = document.getElementById('shop-interface');
        if (!shopInterface) {
            uiManager.displayMessage("Error: The main shop interface was not found.", "error");
            return;
        }

        // Hide other interfaces
        const interfaces = ['inventory-interface', 'skills-interface', 'quest-interface', 'background-interface', 'progression-interface'];
        interfaces.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.classList.add('hidden');
        });

        shopInterface.classList.remove('hidden');

        const shopItems = shopInterface.querySelector('#shop-items');
        if (!shopItems) {
            uiManager.displayMessage("Error: The shop items display area was not found.", "error");
            return;
        }

        // Display loading message
        shopItems.innerHTML = `
            <div style="margin: auto; padding: 50px; color: #D2B48C; font-size: 1.5em; font-weight: bold;">
                <span class="loading-dots">Loading Shop Items</span>
            </div>
        `;

        // Generate merchant name
        const merchantName = window.QuestCharacterGenerator ? window.QuestCharacterGenerator.generateMerchant() : "Merchant";
        const shopHeader = shopInterface.querySelector('h4');
        if (shopHeader) {
            shopHeader.textContent = `${merchantName}'s Shop`;
        }

        const itemCount = 15 + Math.floor(Math.random() * 6);
        let shopInventory = [];
        let generatedItemNames = [];

        const player = gameState.getPlayer();

        // Generate items sequentially
        for (let i = 0; i < itemCount; i++) {
            const context = {
                locationContext: player.currentLocation,
                playerLevel: player.level,
                playerClass: player.class,
                previouslyGeneratedNames: generatedItemNames.slice(-10)
            };

            await new Promise(resolve => setTimeout(resolve, 200)); // Rate limiting

            try {
                let item;
                if (window.ItemGenerator && typeof window.ItemGenerator.generateItem === 'function') {
                    item = await window.ItemGenerator.generateItem(context);
                } else {
                    // Fallback item generation
                    item = this.generateFallbackItem();
                }

                if (item) {
                    shopInventory.push(item);
                    if (item.name) {
                        generatedItemNames.push(item.name);
                    }
                }
            } catch (error) {
                console.error(`Error generating item ${i + 1}:`, error);
                uiManager.displayMessage(`A shop item failed to generate. Replacing with a generic item.`, "error");
                
                const fallbackItem = this.generateFallbackItem();
                shopInventory.push(fallbackItem);
                if (fallbackItem.name) {
                    generatedItemNames.push(fallbackItem.name);
                }
            }
        }

        // Clear loading message
        shopItems.innerHTML = '';

        // Sort items by rarity and value
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

            const canAfford = player.gold >= item.value;
            const affordabilityClass = canAfford ? 'text-green-600' : 'text-red-600';
            const buttonDisabled = canAfford ? '' : 'disabled';
            const buttonClass = canAfford ? 'btn-parchment' : 'btn-parchment opacity-50 cursor-not-allowed';

            itemDiv.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <h6 class="font-bold text-lg">${item.name}</h6>
                    <span class="text-xs px-2 py-1 rounded ${uiManager.getRarityColor(item.rarity)}">${item.rarity}</span>
                </div>
                <p class="text-sm text-amber-700 mb-2">${item.description}</p>

                ${item.damage ? `<p class="text-xs text-red-600">Damage: ${item.damage}</p>` : ''}
                ${item.armor ? `<p class="text-xs text-blue-600">Armor: ${item.armor}</p>` : ''}
                ${item.effect ? `<p class="text-xs text-purple-600">Effect: ${uiManager.getEffectDescription(item.effect)}</p>` : ''}
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

        // Store shop inventory globally
        this.currentShopInventory = shopInventory;
        window.currentShopInventory = shopInventory;
    }

    generateFallbackItem() {
        const fallbackItems = [
            { name: 'Health Potion', type: 'consumable', rarity: 'COMMON', value: 25, description: 'Restores 25 HP when used', effect: { type: 'heal', amount: 25 } },
            { name: 'Iron Sword', type: 'weapon', rarity: 'COMMON', value: 50, description: 'A basic iron sword', damage: '1d8', slot: 'mainHand' },
            { name: 'Leather Armor', type: 'armor', rarity: 'COMMON', value: 40, description: 'Basic leather protection', armor: 2, slot: 'chest' },
            { name: 'Wooden Shield', type: 'armor', rarity: 'COMMON', value: 30, description: 'A simple wooden shield', defense: 1, slot: 'offHand' }
        ];
        
        const item = fallbackItems[Math.floor(Math.random() * fallbackItems.length)];
        return {
            ...item,
            id: Date.now() + Math.random()
        };
    }

    buyShopItem(itemIndex) {
        const player = gameState.getPlayer();
        
        if (!this.currentShopInventory || !this.currentShopInventory[itemIndex]) {
            uiManager.displayMessage('Item no longer available.', 'error');
            return;
        }

        const item = this.currentShopInventory[itemIndex];

        if (player.gold < item.value) {
            uiManager.displayMessage(`You need ${item.value} gold but only have ${player.gold} gold.`, 'error');
            return;
        }

        // Process the purchase
        const goldResult = gameState.updateGold(-item.value, 'shop purchase');
        uiManager.displayMessage(`You lost ${Math.abs(goldResult.actualChange)} gold (shop purchase)!`, 'error');

        const purchasedItem = { ...item };
        delete purchasedItem.price;

        // Add to inventory
        if (typeof window.ItemManager !== 'undefined' && typeof window.ItemManager.addItemToInventory === 'function') {
            window.ItemManager.addItemToInventory(player, purchasedItem);
            uiManager.displayMessage(`Purchased ${item.name} for ${item.value} gold!`, 'success');
        } else {
            if (!player.inventory) {
                player.inventory = [];
            }
            player.inventory.push(purchasedItem);
            uiManager.displayMessage(`Purchased ${item.name} for ${item.value} gold! (Fallback)`, 'success');
        }

        // Remove item from shop
        this.currentShopInventory.splice(itemIndex, 1);

        // Update displays
        uiManager.updatePlayerStatsDisplay();
        
        const itemElement = document.querySelector(`.shop-item:nth-child(${itemIndex + 1})`);
        if (itemElement) {
            itemElement.remove();
        }

        const inventoryInterface = document.getElementById('inventory-interface');
        if (inventoryInterface && !inventoryInterface.classList.contains('hidden')) {
            this.displayInventory();
        }

        // Save the game
        gameState.saveGame();
    }

    displayQuests() {
        const player = gameState.getPlayer();
        
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
                    <button onclick="window.generateQuest()" class="btn-parchment">
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

                activeQuests.forEach((quest) => {
                    const cleanTitle = this.stripRichTextFormatting(quest.title);
                    const cleanDescription = this.stripRichTextFormatting(quest.description);
                    const cleanObjective = this.stripRichTextFormatting(quest.objective);
                    const cleanLocation = this.stripRichTextFormatting(quest.location);
                    const cleanQuestGiver = this.stripRichTextFormatting(quest.questGiver);

                    questHTML += `
                        <div class="parchment-box p-4">
                            <div class="flex justify-between items-start mb-2">
                                <h6 class="font-bold text-lg">${cleanTitle}</h6>
                                <div class="flex items-center gap-2">
                                    <span class="text-xs px-2 py-1 rounded bg-yellow-200 text-yellow-800">${quest.difficulty || 'Medium'}</span>
                                    <button onclick="window.abandonQuest('${quest.id}')" class="btn-parchment text-xs py-1 px-2 bg-red-600 hover:bg-red-700 text-white" title="Abandon this quest">
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
                                    ${quest.rewards?.items?.length > 0 ? `, ${quest.rewards.items.map(item => this.stripRichTextFormatting(item)).join(', ')}` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                });

                questHTML += `</div></div>`;
            }

            if (completedQuests.length > 0) {
                const pagination = gameState.questPagination;
                const startIndex = pagination.completedQuestsPage * pagination.itemsPerPage;
                const endIndex = Math.min(startIndex + pagination.itemsPerPage, completedQuests.length);
                const paginatedQuests = completedQuests.slice(startIndex, endIndex);
                const totalPages = Math.ceil(completedQuests.length / pagination.itemsPerPage);

                questHTML += `
                    <div class="mb-6">
                        <div class="flex justify-between items-center mb-3">
                            <h5 class="text-xl font-bold text-green-600">Completed Quests (${completedQuests.length})</h5>
                            ${totalPages > 1 ? `<span class="text-sm text-gray-600">Page ${pagination.completedQuestsPage + 1} of ${totalPages}</span>` : ''}
                        </div>
                        <div class="grid grid-cols-1 gap-3">
                `;

                paginatedQuests.forEach(quest => {
                    const cleanTitle = this.stripRichTextFormatting(quest.title);
                    const cleanDescription = this.stripRichTextFormatting(quest.description);

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

                questHTML += `</div>`;

                // Add pagination controls
                if (totalPages > 1) {
                    questHTML += `
                        <div class="flex justify-center items-center gap-2 mt-4">
                            <button onclick="window.gameState.changeCompletedQuestsPage(-1); window.inventoryManager.displayQuests()" 
                                    class="btn-parchment text-xs py-1 px-2 ${pagination.completedQuestsPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
                                    ${pagination.completedQuestsPage === 0 ? 'disabled' : ''}>
                                Previous
                            </button>
                            <span class="text-sm text-gray-600 mx-2">
                                ${pagination.completedQuestsPage + 1} / ${totalPages}
                            </span>
                            <button onclick="window.gameState.changeCompletedQuestsPage(1); window.inventoryManager.displayQuests()" 
                                    class="btn-parchment text-xs py-1 px-2 ${pagination.completedQuestsPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}"
                                    ${pagination.completedQuestsPage >= totalPages - 1 ? 'disabled' : ''}>
                                Next
                            </button>
                        </div>
                    `;
                }

                questHTML += `</div>`;
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
                if (window.generateQuest) {
                    window.generateQuest();
                }
            });
        }
    }

    stripRichTextFormatting(text) {
        if (!text || typeof text !== 'string') return '';

        return text
            .replace(/\{\{[\w-]+:([^}]+)\}\}/g, '$1')
            .replace(/\{[\w_-]+:([^}]+)\}/g, '$1')
            .replace(/\{[\w_-]+\}/g, '')
            .replace(/\[[\w-]+:([^\]]+)\]/g, '$1')
            .replace(/\*\*(.*?)\*\*/g, '$1')
            .replace(/\*(.*?)\*/g, '$1')
            .replace(/__(.*?)__/g, '$1')
            .replace(/~~(.*?)~~/g, '$1')
            .replace(/\{[^}]*\}/g, '')
            .replace(/\[[^\]]*\]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }
}

// Create and export a global instance
export const inventoryManager = new InventoryManager();
