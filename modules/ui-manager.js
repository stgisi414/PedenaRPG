
// UI Management Module
import { gameState } from './game-state.js';

export class UIManager {
    constructor() {
        this.screens = {
            startScreen: document.getElementById('start-screen'),
            characterCreationScreen: document.getElementById('character-creation-screen'),
            gamePlayScreen: document.getElementById('game-play-screen'),
            shopInterface: document.getElementById('shop-interface'),
            inventoryInterface: document.getElementById('inventory-interface'),
            skillsInterface: document.getElementById('skills-interface'),
            questInterface: document.getElementById('quest-interface'),
            backgroundInterface: document.getElementById('background-interface'),
            progressionInterface: document.getElementById('progression-interface')
        };

        this.elements = {
            playerNameDisplay: document.getElementById('player-name'),
            playerLevelDisplay: document.getElementById('player-level'),
            playerHpDisplay: document.getElementById('player-hp'),
            gameOutput: document.getElementById('game-output'),
            customCommandInput: document.getElementById('custom-command-input'),
            executeCommandBtn: document.getElementById('execute-command-btn'),
            inventoryItemsDisplay: document.getElementById('inventory-items'),
            shopItemsDisplay: document.getElementById('shop-items'),
            questListDisplay: document.getElementById('quest-list')
        };
    }

    showScreen(screenId) {
        Object.values(this.screens).forEach(screen => {
            if (screen) {
                if (screen.id === screenId) {
                    screen.classList.remove('hidden');
                } else {
                    screen.classList.add('hidden');
                }
            }
        });
    }

    hideScreen(screenId) {
        Object.values(this.screens).forEach(screen => {
            if (screen && screen.id === screenId) {
                screen.classList.add('hidden');
            }
        });
    }

    displayMessage(message, type = 'info') {
        // Built-in debugging for alignment messages
        if (typeof message === 'string' && message.includes('Your alignment shifts. undefined')) {
            console.error("BUG DETECTED! Broken alignment message:", message);
            console.trace();
        }

        const gameOutput = this.elements.gameOutput;
        if (!gameOutput) return;

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

        const processedMessage = this.processRichText(message, type);
        p.innerHTML = icon + processedMessage;
        gameOutput.appendChild(p);
        gameOutput.scrollTop = gameOutput.scrollHeight;
    }

    updatePlayerStatsDisplay() {
        const player = gameState.getPlayer();
        if (!player) return;

        const locationText = this.processRichText(player.currentLocation, 'location');
        
        if (this.elements.playerNameDisplay) {
            this.elements.playerNameDisplay.innerHTML = `${player.name} - ${locationText}`;
        }
        
        if (this.elements.playerLevelDisplay) {
            this.elements.playerLevelDisplay.textContent = `Level: ${player.level}`;
        }
        
        if (this.elements.playerHpDisplay) {
            this.elements.playerHpDisplay.textContent = `HP: ${player.hp}/${player.maxHp}`;
        }
    }

    processRichText(text, messageType = null) {
        if (messageType === 'background' || messageType === 'combat') {
            return text;
        }

        if (!gameState.richTextEnabled) {
            return this.stripAllRichTextFormatting(text);
        }

        let processed = text;

        // Bold: **text** or __text__
        processed = processed.replace(/\*\*(.*?)\*\*/g, '<span class="rt-bold">$1</span>');
        processed = processed.replace(/__(.*?)__/g, '<span class="rt-bold">$1</span>');

        // Italic: *text* or _text_ (but not if already processed as bold)
        processed = processed.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<span class="rt-italic">$1</span>');
        processed = processed.replace(/(?<!_)_([^_]+?)_(?!_)/g, '<span class="rt-italic">$1</span>');

        // Underline: {{underline:text}}
        processed = processed.replace(/\{\{underline:(.*?)\}\}/g, '<span class="rt-underline">$1</span>');

        // Strikethrough: ~~text~~
        processed = processed.replace(/~~(.*?)~~/g, '<span class="rt-strikethrough">$1</span>');

        // Colors: {red:text}, {green:text}, etc.
        const colorMap = {
            red: 'rt-color-red',
            green: 'rt-color-green',
            blue: 'rt-color-blue',
            purple: 'rt-color-purple',
            gold: 'rt-color-gold',
            silver: 'rt-color-silver',
            crimson: 'rt-color-crimson',
            emerald: 'rt-color-emerald',
            brown: 'rt-color-brown'
        };

        Object.entries(colorMap).forEach(([color, className]) => {
            const regex = new RegExp(`\\{${color}:(.*?)\\}`, 'g');
            processed = processed.replace(regex, `<span class="${className}">$1</span>`);
        });

        // Shadow effects
        processed = processed.replace(/\{shadow:(.*?)\}/g, '<span class="rt-shadow">$1</span>');

        // Fonts: [medieval:text], [magic:text], etc.
        const fontMap = {
            medieval: 'rt-font-medieval',
            magic: 'rt-font-magic',
            elegant: 'rt-font-elegant',
            ancient: 'rt-font-ancient'
        };

        Object.entries(fontMap).forEach(([font, className]) => {
            const regex1 = new RegExp(`\\[${font}:(.*?)\\]`, 'g');
            const regex2 = new RegExp(`\\{${font}:(.*?)\\}`, 'g');
            processed = processed.replace(regex1, `<span class="${className}">$1</span>`);
            processed = processed.replace(regex2, `<span class="${className}">$1</span>`);
        });

        // Effects: {{effect:text}}
        const effectMap = {
            highlight: 'rt-highlight',
            blink: 'rt-blink',
            wiggle: 'rt-wiggle',
            shadow: 'rt-shadow',
            glow: 'rt-glow',
            'stretch-h': 'rt-stretch-h',
            'stretch-v': 'rt-stretch-v',
            'glow-shadow': 'rt-shadow-glow',
            underline: 'rt-underline'
        };

        Object.entries(effectMap).forEach(([effect, className]) => {
            const regex = new RegExp(`\\{\\{${effect}:(.*?)\\}\\}`, 'g');
            processed = processed.replace(regex, `<span class="${className}">$1</span>`);
        });

        // Handle contextual single-word colors
        const contextualColors = {
            magical: 'rt-color-purple',
            'infernal energy': 'rt-color-red',
            infernal: 'rt-color-red',
            peaceful: 'rt-color-green',
            'molten rock': 'rt-color-crimson',
            molten: 'rt-color-crimson',
            ash: 'rt-color-silver',
            sulfur: 'rt-color-gold',
            flames: 'rt-color-red',
            'lava flows': 'rt-color-crimson',
            lava: 'rt-color-crimson',
            bridges: 'rt-color-silver',
            epic: 'rt-color-gold',
            hellish: 'rt-color-red',
            portal: 'rt-color-blue'
        };

        Object.entries(contextualColors).forEach(([word, className]) => {
            const regex = new RegExp(`\\{${word}\\}`, 'g');
            processed = processed.replace(regex, `<span class="${className}">${word}</span>`);
        });

        // Generic fallback for remaining single-word colors
        processed = processed.replace(/\{([a-zA-Z\s]+)\}/g, (match, word) => {
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
                return `<span class="rt-color-purple">${word}</span>`;
            }
        });

        return processed;
    }

    stripAllRichTextFormatting(text) {
        if (!text || typeof text !== 'string') return '';

        return text
            .replace(/\{\{[\w-]+:([^}]+)\}\}/g, '$1')
            .replace(/\{[\w_-]+:([^}]+)\}/g, '$1')
            .replace(/\{[\w_-]+\}/g, '')
            .replace(/\[[\w-]+:([^\]]+)\]/g, '$1')
            .replace(/\*\*(.*?)\*\*/g, '$1')
            .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '$1')
            .replace(/__(.*?)__/g, '$1')
            .replace(/~~(.*?)~~/g, '$1')
            .replace(/\{[^}]*\}/g, '')
            .replace(/\[[^\]]*\]/g, '')
            .replace(/<span[^>]*class="rt-[^"]*"[^>]*>([^<]*)<\/span>/g, '$1')
            .replace(/<span[^>]*>([^<]*)<\/span>/g, '$1')
            .replace(/\s+/g, ' ')
            .trim();
    }

    updateRichTextToggle() {
        const toggle = document.getElementById('rich-text-toggle');
        if (toggle) {
            const status = gameState.richTextEnabled ? 'ON' : 'OFF';
            toggle.innerHTML = `<i class="ra ra-fireball mr-2"></i>Rich Text: ${status}`;
            toggle.className = `btn-parchment rich-text-toggle w-full ${gameState.richTextEnabled ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 hover:bg-gray-700'} text-white`;
        }
    }

    toggleRichText() {
        gameState.richTextEnabled = !gameState.richTextEnabled;
        localStorage.setItem('richTextEnabled', gameState.richTextEnabled.toString());
        this.updateRichTextToggle();
        this.displayMessage(`Rich text styling ${gameState.richTextEnabled ? 'enabled' : 'disabled'}.`, 'info');
    }

    getRarityColor(rarity) {
        const rarityColors = {
            'COMMON': 'bg-gray-200 text-gray-800',
            'UNCOMMON': 'bg-green-200 text-green-800',
            'RARE': 'bg-blue-200 text-blue-800',
            'EPIC': 'bg-purple-200 text-purple-800',
            'LEGENDARY': 'bg-yellow-200 text-yellow-800',
            'ARTIFACT': 'bg-red-200 text-red-800',
            'MYTHIC': 'bg-pink-200 text-pink-800'
        };
        return rarityColors[rarity] || rarityColors['COMMON'];
    }

    getEffectDescription(effect) {
        if (typeof effect === 'string') return effect;
        if (typeof effect === 'object' && effect.type) {
            switch (effect.type) {
                case 'heal':
                    return `Restores ${effect.amount || 25} HP`;
                case 'mana':
                    return `Restores ${effect.amount || 20} MP`;
                case 'buff':
                    return `Temporary boost to ${effect.stat || 'stats'}`;
                default:
                    return effect.description || 'Unknown effect';
            }
        }
        return 'No effect description';
    }

    getIconForItem(item) {
        if (!item) return 'ra-crossed-swords';

        const name = item.name ? item.name.toLowerCase() : '';
        let inferredType = item.type ? item.type.toLowerCase() : null;

        if (!inferredType) {
            if (typeof item.armor === 'number') inferredType = 'armor';
            else if (item.damage) inferredType = 'weapon';
            else if (name.includes('potion') || name.includes('elixir')) inferredType = 'consumable';
            else if (name.includes('scroll')) inferredType = 'scroll';
            else if (name.includes('book') || name.includes('tome')) inferredType = 'book';
            else if (name.includes('ring') || name.includes('amulet') || name.includes('necklace')) inferredType = 'jewelry';
            else if (item.tool_type) inferredType = 'tool';
            else if (item.slot === 'back') inferredType = 'armor';
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
                    case 'legs': return '👖';
                    case 'feet': return 'ra-boots';
                    case 'back': return '🧥';
                    case 'offHand': return 'ra-shield';
                    default: return 'ra-armor';
                }

            case 'consumable': return 'ra-potion';
            case 'book': return 'ra-book';
            case 'scroll': return 'ra-scroll-unfurled';
            case 'jewelry':
                if (item.slot?.includes('ring')) return 'ra-ring';
                if (item.slot === 'amulet') return 'ra-gem';
                return 'ra-gem';
            default: return 'ra-crossed-swords';
        }
    }

    displaySceneryImage(imageUrl) {
        const displayDiv = document.getElementById('scenery-image-display');
        const imgElement = document.getElementById('generated-scenery-image');

        if (displayDiv && imgElement) {
            imgElement.src = imageUrl;
            displayDiv.classList.remove('hidden');
        } else {
            console.error("Scenery image display elements not found.");
            this.displayMessage("Error: Could not display scenery image UI.", "error");
        }
    }

    updateIllustrationButtonVisibility() {
        const illustrationBtn = document.getElementById('illustration-mode-btn');
        const player = gameState.getPlayer();
        
        if (illustrationBtn) {
            if (player && player.portraitUrl && player.portraitUrl.trim() !== '') {
                illustrationBtn.classList.remove('hidden');
            } else {
                illustrationBtn.classList.add('hidden');
            }
        }
    }

    updateQuestButton() {
        const questBtn = document.getElementById('new-quest-btn');
        const player = gameState.getPlayer();
        
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

    updateQuickActionButtons() {
        const castSpellBtn = document.getElementById('cast-spell-btn');
        const player = gameState.getPlayer();
        
        if (!castSpellBtn || !player.class) return;

        const classActions = {
            mage: { icon: 'ra-fireball', text: 'Cast Spell', title: 'Cast a spell from your spellbook' },
            warrior: { icon: 'ra-sword', text: 'Use Ability', title: 'Use a powerful combat ability' },
            rogue: { icon: 'ra-dagger', text: 'Use Skill', title: 'Use a special rogue skill' },
            ranger: { icon: 'ra-bow', text: 'Use Technique', title: 'Use a ranger technique or nature-based ability' },
            cleric: { icon: 'ra-holy-symbol', text: 'Cast Healing', title: 'Cast a healing spell' },
            paladin: { icon: 'ra-shield', text: 'Divine Strike', title: 'Perform a divine strike' },
            bard: { icon: 'ra-music', text: 'Perform', title: 'Perform a musical ability' },
            druid: { icon: 'ra-tree', text: "Nature's Wrath", title: "Summon nature's wrath" },
            monk: { icon: 'ra-fist', text: 'Martial Art', title: 'Use a martial art' },
            sorcerer: { icon: 'ra-fireball', text: 'Arcane Blast', title: 'Cast an arcane blast' },
            barbarian: { icon: 'ra-axe', text: 'Rage', title: 'Enter a rage' },
            brawler: { icon: 'ra-fist', text: 'Brawl', title: 'Brawl with your fists' },
            necromancer: { icon: 'ra-skull', text: 'Necrotic Blast', title: 'Cast a necrotic blast' },
            assassin: { icon: 'ra-dagger', text: 'Assassinate', title: 'Assassinate your target' },
            alchemist: { icon: 'ra-flask', text: 'Alchemy', title: 'Use an alchemical ability' },
            engineer: { icon: 'ra-gears', text: 'Engineer', title: 'Use an engineering ability' },
            summoner: { icon: 'ra-owl', text: 'Summon', title: 'Summon a creature' },
            illusionist: { icon: 'ra-magic-palm', text: 'Illusion', title: 'Create an illusion' },
            shaman: { icon: 'ra-owl', text: 'Spiritual Blast', title: 'Cast a spiritual blast' },
            ninja: { icon: 'ra-ninja-mask', text: 'Ninja Strike', title: 'Perform a ninja strike' },
            psychic: { icon: 'ra-brain', text: 'Psychic Blast', title: 'Cast a psychic blast' },
            hunter: { icon: 'ra-bow', text: 'Hunt', title: 'Hunt your target' },
            scholar: { icon: 'ra-book', text: 'Scholar', title: 'Use a scholar ability' },
            gladiator: { icon: 'ra-sword', text: 'Gladiator Strike', title: 'Perform a gladiator strike' },
            warlock: { icon: 'ra-fireball', text: 'Special Action', title: 'Perform a special action' }
        };

        const action = classActions[player.class.toLowerCase()] || classActions.warlock;
        castSpellBtn.innerHTML = `<i class="ra ${action.icon} mr-2"></i>${action.text}`;
        castSpellBtn.title = action.title;
    }

    // Focus management
    focusCommandInput() {
        if (this.elements.customCommandInput) {
            this.elements.customCommandInput.focus();
        }
    }

    clearCommandInput() {
        if (this.elements.customCommandInput) {
            this.elements.customCommandInput.value = '';
        }
    }

    getCommandInputValue() {
        return this.elements.customCommandInput ? this.elements.customCommandInput.value.trim() : '';
    }
}

// Create and export a global instance
export const uiManager = new UIManager();
