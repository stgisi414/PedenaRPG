// Game Actions System - Analyzes and categorizes player commands
export class GameActions {

    static actionTypes = {
        MOVEMENT: 'movement',
        COMBAT: 'combat', 
        INTERACTION: 'interaction',
        INVENTORY: 'inventory',
        MAGIC: 'magic',
        EXPLORATION: 'exploration',
        QUEST: 'quest',
        SOCIAL: 'social',
        SKILL: 'skill',
        REST: 'rest',
        TRADE: 'trade',
        UNKNOWN: 'unknown'
    };

    static actionPatterns = {
        [this.actionTypes.MOVEMENT]: {
            keywords: ['go', 'move', 'travel', 'walk', 'run', 'head', 'journey', 'visit', 'leave', 'exit', 'enter', 'return', 'flee to', 'escape to'],
            patterns: [
                /(?:go|move|travel|walk|run|head|journey|visit)\s+(?:to\s+)?(.+)/i,
                /(?:leave|exit)\s+(?:the\s+)?(.+?)(?:\s+and\s+(?:go|head)\s+(?:to\s+)?(.+))?/i,
                /(?:enter|go\s+into)\s+(?:the\s+)?(.+)/i,
                /(?:return|go\s+back)\s+(?:to\s+)?(.+)/i
            ],
            context: ['location', 'direction', 'destination'],
            consequences: ['location_change', 'random_encounter', 'discovery']
        },

        [this.actionTypes.COMBAT]: {
            keywords: ['attack', 'fight', 'battle', 'strike', 'hit', 'slash', 'stab', 'shoot', 'cast fireball', 'defend', 'block', 'parry', 'dodge'],
            patterns: [
                /(?:attack|fight|battle|strike|hit)\s+(?:the\s+)?(.+)/i,
                /(?:slash|stab|shoot)\s+(?:at\s+)?(?:the\s+)?(.+)/i,
                /(?:defend|block|parry)\s+(?:against\s+)?(?:the\s+)?(.+)/i
            ],
            context: ['target', 'weapon', 'combat_style'],
            consequences: ['damage', 'counterattack', 'status_effect']
        },

        [this.actionTypes.INTERACTION]: {
            keywords: ['talk', 'speak', 'ask', 'tell', 'whisper', 'shout', 'greet', 'conversation', 'chat', 'discuss'],
            patterns: [
                /(?:talk|speak)\s+(?:to|with)\s+(.+)/i,
                /(?:ask|tell)\s+(.+?)\s+about\s+(.+)/i,
                /(?:greet|approach)\s+(?:the\s+)?(.+)/i,
                /(?:whisper|shout)\s+(?:to\s+)?(.+)/i
            ],
            context: ['npc', 'topic', 'mood'],
            consequences: ['relationship_change', 'information', 'quest_progress']
        },

        [this.actionTypes.EXPLORATION]: {
            keywords: ['search', 'examine', 'look', 'inspect', 'investigate', 'explore', 'check', 'study', 'observe'],
            patterns: [
                /(?:search|examine|look\s+at|inspect|investigate)\s+(?:the\s+)?(.+)/i,
                /(?:explore|check)\s+(?:the\s+)?(.+)/i,
                /(?:study|observe)\s+(?:the\s+)?(.+)/i
            ],
            context: ['object', 'area', 'detail_level'],
            consequences: ['discovery', 'hidden_item', 'lore', 'trap']
        },

        [this.actionTypes.MAGIC]: {
            keywords: ['cast', 'spell', 'magic', 'enchant', 'summon', 'invoke', 'channel', 'ritual', 'cantrip'],
            patterns: [
                /(?:cast|use)\s+(.+?)(?:\s+(?:on|at)\s+(.+))?/i,
                /(?:enchant|summon|invoke)\s+(.+)/i,
                /(?:perform|conduct)\s+(?:a\s+)?ritual/i
            ],
            context: ['spell_name', 'target', 'components'],
            consequences: ['magical_effect', 'mana_cost', 'spell_failure']
        },

        [this.actionTypes.INVENTORY]: {
            keywords: ['use', 'equip', 'unequip', 'drink', 'eat', 'consume', 'wear', 'wield', 'drop', 'pick up', 'take'],
            patterns: [
                /(?:use|drink|eat|consume)\s+(?:the\s+)?(.+)/i,
                /(?:equip|wear|wield)\s+(?:the\s+)?(.+)/i,
                /(?:drop|discard)\s+(?:the\s+)?(.+)/i,
                /(?:pick\s+up|take|grab)\s+(?:the\s+)?(.+)/i
            ],
            context: ['item', 'action_type', 'slot'],
            consequences: ['item_effect', 'stat_change', 'inventory_change']
        },

        [this.actionTypes.SOCIAL]: {
            keywords: ['persuade', 'intimidate', 'deceive', 'charm', 'negotiate', 'bargain', 'flirt', 'compliment', 'insult'],
            patterns: [
                /(?:persuade|convince)\s+(.+?)\s+(?:to\s+)?(.+)/i,
                /(?:intimidate|threaten)\s+(.+)/i,
                /(?:deceive|lie\s+to)\s+(.+)/i,
                /(?:charm|flirt\s+with)\s+(.+)/i
            ],
            context: ['target', 'method', 'goal'],
            consequences: ['relationship_change', 'success_failure', 'reputation']
        },

        [this.actionTypes.SKILL]: {
            keywords: ['lockpick', 'picklock', 'sneak', 'hide', 'climb', 'jump', 'swim', 'craft', 'repair', 'heal'],
            patterns: [
                /(?:lockpick|pick\s+lock)\s+(?:the\s+)?(.+)/i,
                /(?:sneak|hide)\s+(?:behind|in|under)\s+(.+)/i,
                /(?:climb|jump\s+over|swim\s+across)\s+(?:the\s+)?(.+)/i,
                /(?:craft|make|create)\s+(?:a\s+)?(.+)/i,
                /(?:repair|fix)\s+(?:the\s+)?(.+)/i
            ],
            context: ['skill_type', 'target', 'difficulty'],
            consequences: ['skill_check', 'progress', 'failure_consequence']
        },

        [this.actionTypes.REST]: {
            keywords: ['rest', 'sleep', 'camp', 'meditate', 'recover', 'heal', 'take a break'],
            patterns: [
                /(?:rest|sleep|camp)\s*(?:for\s+)?(.+)?/i,
                /(?:meditate|recover)\s*(?:for\s+)?(.+)?/i,
                /take\s+a\s+(?:rest|break|nap)/i
            ],
            context: ['duration', 'location', 'safety'],
            consequences: ['hp_recovery', 'mana_recovery', 'random_event']
        },

        [this.actionTypes.TRADE]: {
            keywords: ['buy', 'sell', 'trade', 'purchase', 'bargain', 'shop', 'merchant'],
            patterns: [
                /(?:buy|purchase)\s+(?:a\s+)?(.+?)(?:\s+from\s+(.+))?/i,
                /(?:sell|trade)\s+(?:my\s+)?(.+?)(?:\s+(?:to|with)\s+(.+))?/i,
                /(?:bargain|negotiate)\s+(?:with\s+)?(.+?)(?:\s+for\s+(.+))?/i
            ],
            context: ['item', 'trader', 'price'],
            consequences: ['gold_change', 'inventory_change', 'reputation']
        },

        [this.actionTypes.QUEST]: {
            keywords: ['complete', 'finish', 'deliver', 'report', 'submit', 'turn in'],
            patterns: [
                /(?:complete|finish)\s+(?:the\s+)?(.+?)(?:\s+quest)?/i,
                /(?:deliver|bring)\s+(.+?)\s+to\s+(.+)/i,
                /(?:report|tell)\s+(.+?)\s+(?:about\s+)?(.+)/i
            ],
            context: ['quest_name', 'objective', 'npc'],
            consequences: ['quest_completion', 'reward', 'story_progress']
        }
    };

    static analyzeCommand(command, gameState) {
        const lowerCommand = command.toLowerCase().trim();

        const analysis = {
            originalCommand: command,
            actionType: this.actionTypes.UNKNOWN,
            confidence: 0,
            extractedData: {},
            contextualInfo: this.buildContextualInfo(gameState),
            suggestedConsequences: [],
            aiPromptData: {}
        };

        // Analyze command against each action type
        for (const [actionType, actionData] of Object.entries(this.actionPatterns)) {
            const match = this.matchActionType(lowerCommand, actionData);
            if (match.confidence > analysis.confidence) {
                analysis.actionType = actionType;
                analysis.confidence = match.confidence;
                analysis.extractedData = match.extractedData;
                analysis.suggestedConsequences = actionData.consequences;
            }
        }

        // Build AI prompt data
        analysis.aiPromptData = this.buildAIPromptData(analysis, gameState);

        return analysis;
    }

    static matchActionType(command, actionData) {
        let maxConfidence = 0;
        let extractedData = {};

        // Check keyword matches
        const keywordMatches = actionData.keywords.filter(keyword => 
            command.includes(keyword.toLowerCase())
        );
        const keywordConfidence = keywordMatches.length / actionData.keywords.length;

        // Check pattern matches
        let patternConfidence = 0;
        for (const pattern of actionData.patterns) {
            const match = command.match(pattern);
            if (match) {
                patternConfidence = Math.max(patternConfidence, 0.8);
                // Extract data from pattern match
                if (match[1]) extractedData.primary = match[1].trim();
                if (match[2]) extractedData.secondary = match[2].trim();
                break;
            }
        }

        maxConfidence = Math.max(keywordConfidence * 0.6 + patternConfidence * 0.4, keywordConfidence, patternConfidence);

        return {
            confidence: maxConfidence,
            extractedData: extractedData
        };
    }

    static buildContextualInfo(gameState) {
        return {
            currentLocation: gameState.currentLocation,
            playerLevel: gameState.level,
            playerClass: gameState.class,
            playerHP: `${gameState.hp}/${gameState.maxHp}`,
            currentGold: gameState.gold,
            hasActiveQuests: gameState.quests?.filter(q => !q.completed).length > 0,
            equippedWeapon: gameState.equipment?.mainHand?.name || 'none',
            recentActions: this.getRecentActions(),
            nearbyNPCs: this.getNearbyNPCs(gameState),
            availableItems: this.getAvailableItems(gameState)
        };
    }

    static buildAIPromptData(analysis, gameState) {
        const promptData = {
            actionCategory: analysis.actionType,
            confidence: analysis.confidence,
            playerContext: {
                name: gameState.name,
                class: gameState.class,
                level: gameState.level,
                location: gameState.currentLocation,
                hp: gameState.hp,
                maxHp: gameState.maxHp,
                gold: gameState.gold
            },
            extractedElements: analysis.extractedData,
            expectedConsequences: analysis.suggestedConsequences,
            gameStateSnapshot: {
                hasActiveQuests: analysis.contextualInfo.hasActiveQuests,
                equippedWeapon: analysis.contextualInfo.equippedWeapon,
                nearbyNPCs: analysis.contextualInfo.nearbyNPCs,
                recentLocation: gameState.currentLocation
            },
            recommendedResponse: this.getResponseRecommendation(analysis.actionType)
        };

        return promptData;
    }

    static getResponseRecommendation(actionType) {
        const recommendations = {
            [this.actionTypes.MOVEMENT]: "Describe the journey and new location. Check for encounters.",
            [this.actionTypes.COMBAT]: "Determine combat outcome, damage, and enemy response.",
            [this.actionTypes.INTERACTION]: "Role-play NPC response and advance relationships.",
            [this.actionTypes.EXPLORATION]: "Reveal discoveries, hidden items, or environmental details.",
            [this.actionTypes.MAGIC]: "Describe magical effects and determine success/failure.",
            [this.actionTypes.INVENTORY]: "Apply item effects and update character state.",
            [this.actionTypes.SOCIAL]: "Determine social outcome and relationship changes.",
            [this.actionTypes.SKILL]: "Make skill check and describe results.",
            [this.actionTypes.REST]: "Apply recovery and check for random events.",
            [this.actionTypes.TRADE]: "Handle transaction and update economics.",
            [this.actionTypes.QUEST]: "Check quest progress and potential completion."
        };

        return recommendations[actionType] || "Interpret action and provide appropriate narrative response.";
    }

    static getRecentActions() {
        // This would track recent player actions for context
        return JSON.parse(localStorage.getItem('recentActions') || '[]').slice(-3);
    }

    static logAction(actionAnalysis) {
        const recentActions = this.getRecentActions();
        recentActions.push({
            action: actionAnalysis.originalCommand,
            type: actionAnalysis.actionType,
            timestamp: Date.now()
        });
        localStorage.setItem('recentActions', JSON.stringify(recentActions.slice(-10)));
    }

    static getNearbyNPCs(gameState) {
        // This would integrate with your existing NPC system
        return gameState.npcsInLocation || [];
    }

    static getAvailableItems(gameState) {
        return {
            inventory: gameState.inventory?.slice(0, 3).map(item => item.name) || [],
            equipped: Object.values(gameState.equipment || {})
                .filter(item => item)
                .map(item => item.name)
        };
    }

    static createStructuredPrompt(analysis, gameState) {
        return this.createDetailedPrompt(analysis, gameState);
    }

    static createDetailedPrompt(analysis, gameState) {
        const promptData = analysis.aiPromptData;

        return `GAME ACTION ANALYSIS:
Action Type: ${analysis.actionType.toUpperCase()}
Confidence: ${(analysis.confidence * 100).toFixed(1)}%
Original Command: "${analysis.originalCommand}"

EXTRACTED ELEMENTS:
${Object.entries(analysis.extractedData)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n') || 'None detected'}

PLAYER CONTEXT:
${Object.entries(promptData.playerContext)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n')}

GAME STATE:
Current Location: ${gameState.currentLocation}
Active Quests: ${promptData.gameStateSnapshot.hasActiveQuests ? 'Yes' : 'No'}
Equipped Weapon: ${promptData.gameStateSnapshot.equippedWeapon}
Nearby NPCs: ${promptData.gameStateSnapshot.nearbyNPCs.join(', ') || 'None'}

EXPECTED CONSEQUENCES: ${analysis.suggestedConsequences.join(', ')}

AI INSTRUCTION: ${promptData.recommendedResponse}

Please respond as the game master, interpreting this ${analysis.actionType} action and providing an appropriate narrative response that considers the analyzed context and expected consequences.`;
    }

    static async processPlayerAction(command, player) {
        try {
            // Create a basic game state from player data
            const gameState = {
                currentLocation: player.currentLocation || 'Unknown Location',
                level: player.level || 1,
                class: player.class || 'adventurer',
                hp: player.hp || 100,
                maxHp: player.maxHp || 100,
                gold: player.gold || 0,
                quests: player.quests || [],
                equipment: player.equipment || {},
                inventory: player.inventory || [],
                npcsInLocation: player.npcsInLocation || []
            };

            // Analyze the command
            const analysis = this.analyzeCommand(command, gameState);

            // Log the action
            this.logAction(analysis);

            // Create structured prompt for AI
            const prompt = this.createStructuredPrompt(analysis, gameState);

            // Call AI to process the action
            let response;
            if (typeof window !== 'undefined' && window.callGeminiAPI) {
                response = await window.callGeminiAPI(prompt, 0.7, 800, false);
            } else {
                response = `You ${command}. [AI processing not available]`;
            }

            return {
                success: true,
                response: response,
                actionType: analysis.actionType,
                confidence: analysis.confidence,
                extractedData: analysis.extractedData
            };

        } catch (error) {
            console.error('Error processing player action:', error);
            return {
                success: false,
                response: `You attempt to ${command}, but something goes wrong.`,
                error: error.message
            };
        }
    }
}

window.GameActions = GameActions