
// UI Management Module
export class UIManager {
    constructor() {
        this.currentInterface = 'background-interface';
        this.messageContainer = null;
        this.isRichTextEnabled = false;
    }

    initialize() {
        this.messageContainer = document.getElementById('message-container');
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Add common UI event listeners here
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-action]')) {
                this.handleActionClick(e);
            }
        });
    }

    handleActionClick(event) {
        const action = event.target.dataset.action;
        const index = event.target.dataset.index;
        
        switch (action) {
            case 'buy':
                this.handleShopAction('buy', index);
                break;
            case 'sell':
                this.handleInventoryAction('sell', index);
                break;
            case 'equip':
                this.handleInventoryAction('equip', index);
                break;
            case 'unequip':
                this.handleInventoryAction('unequip', index);
                break;
        }
    }

    displayMessage(message, type = 'story', isRich = false) {
        if (!this.messageContainer) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type} mb-4 p-4 rounded-lg shadow-md`;

        // Apply type-specific styling
        switch (type) {
            case 'combat':
                messageDiv.className += ' border-l-4 border-red-600 bg-red-50';
                break;
            case 'info':
                messageDiv.className += ' border-l-4 border-blue-600 bg-blue-50';
                break;
            case 'success':
                messageDiv.className += ' border-l-4 border-green-600 bg-green-50';
                break;
            case 'warning':
                messageDiv.className += ' border-l-4 border-yellow-600 bg-yellow-50';
                break;
            case 'error':
                messageDiv.className += ' border-l-4 border-red-600 bg-red-100';
                break;
            default:
                messageDiv.className += ' bg-amber-50 border border-amber-200';
        }

        // Process rich text if enabled
        if (isRich && this.isRichTextEnabled) {
            messageDiv.innerHTML = this.processRichText(message);
        } else {
            messageDiv.textContent = message;
        }

        this.messageContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    processRichText(text) {
        // Rich text processing logic
        return text
            .replace(/\*\*(.*?)\*\*/g, '<span class="rt-bold">$1</span>')
            .replace(/\*(.*?)\*/g, '<span class="rt-italic">$1</span>')
            .replace(/__(.*?)__/g, '<span class="rt-underline">$1</span>')
            .replace(/~~(.*?)~~/g, '<span class="rt-strikethrough">$1</span>')
            .replace(/\[blink\](.*?)\[\/blink\]/g, '<span class="rt-blink">$1</span>')
            .replace(/\[highlight\](.*?)\[\/highlight\]/g, '<span class="rt-highlight">$1</span>')
            .replace(/\[color=(\w+)\](.*?)\[\/color\]/g, '<span class="rt-color-$1">$2</span>')
            .replace(/\[font=(\w+)\](.*?)\[\/font\]/g, '<span class="rt-font-$1">$2</span>');
    }

    switchInterface(interfaceId) {
        // Hide all interfaces
        const interfaces = [
            'background-interface', 'combat-interface', 'shop-interface',
            'inventory-interface', 'skills-interface', 'quest-interface',
            'progression-interface'
        ];

        interfaces.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.classList.add('hidden');
        });

        // Show target interface
        const targetInterface = document.getElementById(interfaceId);
        if (targetInterface) {
            targetInterface.classList.remove('hidden');
            this.currentInterface = interfaceId;
        }
    }

    updatePlayerStatsDisplay() {
        // Update player stats in UI
        const elements = {
            'player-name': 'name',
            'player-class': 'class',
            'player-level': 'level',
            'player-health': (player) => `${player.health}/${player.maxHealth}`,
            'player-mana': (player) => `${player.mana}/${player.maxMana}`,
            'player-gold': 'gold',
            'player-experience': 'experience'
        };

        Object.entries(elements).forEach(([elementId, property]) => {
            const element = document.getElementById(elementId);
            if (element && window.player) {
                if (typeof property === 'function') {
                    element.textContent = property(window.player);
                } else {
                    element.textContent = window.player[property] || '';
                }
            }
        });
    }

    scrollToBottom() {
        if (this.messageContainer) {
            this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
        }
    }

    showLoading(message = 'Processing...') {
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'loading-indicator';
        loadingDiv.className = 'text-center py-4';
        loadingDiv.innerHTML = `<p class="text-amber-700 loading-dots">${message}</p>`;
        
        if (this.messageContainer) {
            this.messageContainer.appendChild(loadingDiv);
            this.scrollToBottom();
        }
    }

    hideLoading() {
        const loading = document.getElementById('loading-indicator');
        if (loading) {
            loading.remove();
        }
    }

    toggleRichText() {
        this.isRichTextEnabled = !this.isRichTextEnabled;
        const button = document.getElementById('rich-text-toggle');
        if (button) {
            button.textContent = this.isRichTextEnabled ? 
                'Disable Rich Text' : 'Enable Rich Text';
        }
        return this.isRichTextEnabled;
    }
}

// Create global instance
export const uiManager = new UIManager();
