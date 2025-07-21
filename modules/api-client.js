
// API Client Module for AI Interactions
export class APIClient {
    constructor() {
        this.settings = {
            apiKey: '',
            model: 'gemini-pro'
        };
        this.loadSettings();
    }

    loadSettings() {
        try {
            const saved = localStorage.getItem('gameSettings');
            if (saved) {
                this.settings = { ...this.settings, ...JSON.parse(saved) };
            }
        } catch (error) {
            console.error('Error loading API settings:', error);
        }
    }

    saveSettings(newSettings) {
        this.settings = { ...this.settings, ...newSettings };
        localStorage.setItem('gameSettings', JSON.stringify(this.settings));
    }

    async makeAPIRequest(prompt, context = {}) {
        if (!this.settings.apiKey) {
            throw new Error('API key not configured. Please set your API key in settings.');
        }

        const requestBody = {
            contents: [{
                parts: [{ text: this.buildPrompt(prompt, context) }]
            }]
        };

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${this.settings.model}:generateContent?key=${this.settings.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error('Invalid API response format');
            }
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }

    buildPrompt(userInput, context) {
        const { player, gameHistory, currentLocation } = context;
        
        let prompt = `You are the Dungeon Master for "The Chronicles of Pedena," an immersive text-based RPG.

CURRENT GAME STATE:
- Player: ${player?.name || 'Unknown'} (${player?.race || 'Unknown'} ${player?.class || 'Unknown'})
- Level: ${player?.level || 1}, Health: ${player?.health || 100}/${player?.maxHealth || 100}
- Location: ${currentLocation || 'Unknown'}
- Gold: ${player?.gold || 0}

PLAYER ACTION: "${userInput}"

INSTRUCTIONS:
- Respond as a skilled Dungeon Master
- Keep responses engaging and immersive
- Include specific details about the world of Pedena
- Handle combat, exploration, social interactions naturally
- Maintain consistency with previous story events
- Use rich descriptions and atmospheric details

`;

        if (gameHistory && gameHistory.length > 0) {
            const recentHistory = gameHistory.slice(-5);
            prompt += `\nRECENT GAME HISTORY:\n`;
            recentHistory.forEach(entry => {
                prompt += `- ${entry.command}: ${entry.response?.substring(0, 100)}...\n`;
            });
        }

        prompt += `\nRespond to the player's action with an engaging narrative.`;

        return prompt;
    }

    async generateQuest(questType = 'random') {
        const prompt = `Generate a quest for the Chronicles of Pedena RPG game. 
        
Quest Type: ${questType}
Current Player Level: ${window.player?.level || 1}

Create a quest with:
- Title
- Description (2-3 sentences)
- Objectives (specific, measurable goals)
- Rewards (appropriate for level)
- Difficulty rating
- Estimated completion time

Return as JSON format.`;

        try {
            const response = await this.makeAPIRequest(prompt);
            return JSON.parse(response);
        } catch (error) {
            console.error('Quest generation error:', error);
            return null;
        }
    }

    async generatePortrait(character) {
        // This would integrate with image generation API
        const prompt = `Generate a character portrait for:
        Name: ${character.name}
        Race: ${character.race}
        Class: ${character.class}
        Description: ${character.background}`;
        
        // Placeholder for image generation
        return null;
    }
}

// Create global instance
export const apiClient = new APIClient();
