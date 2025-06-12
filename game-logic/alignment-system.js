
// Alignment System - Tracks player morality and affects NPC interactions
export class AlignmentSystem {

    static alignmentTypes = {
        MALEVOLENT: 'malevolent',    // -10 to -6
        EVIL: 'evil',                // -5 to -3
        NEUTRAL_EVIL: 'neutral_evil', // -2 to -1
        NEUTRAL: 'neutral',          // 0
        NEUTRAL_GOOD: 'neutral_good', // 1 to 2
        GOOD: 'good',                // 3 to 5
        DEVOUT: 'devout'             // 6 to 10
    };

    static alignmentDescriptions = {
        malevolent: "Your soul radiates darkness. People fear and avoid you.",
        evil: "Your actions show clear malicious intent. Most people distrust you.",
        neutral_evil: "You tend toward selfish and harmful choices.",
        neutral: "You walk the middle path, neither particularly good nor evil.",
        neutral_good: "You generally try to do the right thing.",
        good: "Your kindness and virtue are evident to all who meet you.",
        devout: "You are a beacon of righteousness. People look up to you as a moral example."
    };

    static messageQueue = [];
    static messageCount = 0;
    static assessmentInterval = 10;

    static initializeAlignment(player) {
        if (!player.alignment || typeof player.alignment.goodScore === 'undefined') {
            player.alignment = {
                goodScore: 0, // Tracks Good vs. Evil
                lawScore: 0,  // Tracks Lawful vs. Chaotic
                type: 'True Neutral',
                history: [],
            };
        }
        return player.alignment;
    }

    static addMessage(playerMessage, aiResponse) {
        this.messageQueue.push({
            player: playerMessage,
            ai: aiResponse,
            timestamp: Date.now()
        });

        this.messageCount++;

        // Trigger assessment every 10 messages
        if (this.messageCount >= this.assessmentInterval) {
            return this.triggerAlignmentAssessment();
        }

        return null;
    }

    static async triggerAlignmentAssessment() {
        if (this.messageQueue.length === 0) return null;

        const messagesToAssess = this.messageQueue.slice(-this.assessmentInterval);

        // --- NEW, SIMPLIFIED PROMPT ---
        const assessmentPrompt = `
        MORALITY & ETHICS ANALYSIS (TWO-AXIS)

        Analyze the player's recent actions based on two axes:
        1.  Good (+1) vs. Evil (-1)
        2.  Lawful (+1) vs. Chaotic (-1)

        CONVERSATION HISTORY:
        ${messagesToAssess.map((msg, index) =>
            `${index + 1}. Player: "${msg.player}"\n   Game Response: "${msg.ai}"`
        ).join('\n\n')}

        DEFINITIONS:
        - GOOD: Altruism, compassion, helping others, sacrifice.
        - EVIL: Harming others, cruelty, selfishness at others' expense.
        - LAWFUL: Adherence to rules, tradition, order, personal code, or promises.
        - CHAOTIC: Prioritizing freedom, defying authority, acting on whims, breaking rules.
        - NEUTRAL: Actions not strongly aligned with either extreme.

        INSTRUCTIONS:
        Respond with ONLY a valid JSON object in this exact format:
        {
          "goodChange": 0,
          "lawChange": 0,
          "reason": "A brief explanation for your scoring."
        }

        EXAMPLE SCORING:
        - Donating to the poor: { "goodChange": 1, "lawChange": 0, "reason": "A selfless and good act." }
        - Lying to a guard to help a refugee escape: { "goodChange": 1, "lawChange": -1, "reason": "Broke the law for a good cause." }
        - Attacking a merchant for profit: { "goodChange": -1, "lawChange": -1, "reason": "A cruel and chaotic act for personal gain." }
        - Fulfilling a contract precisely as written: { "goodChange": 0, "lawChange": 1, "reason": "Adhered to a formal agreement." }
        `;
        // --- END OF NEW PROMPT ---

        try {
            // Use the game API's AI function instead of making direct calls
            const gameAPI = window.gameAPI || window.PedenaAPI;
            if (gameAPI && gameAPI.aiFunction) {
                const response = await gameAPI.aiFunction(assessmentPrompt, 0.2, 100, false);

                if (response) {
                    const alignmentChange = this.parseAlignmentResponse(response);
                    this.messageCount = 0;
                    this.messageQueue = [];

                    return alignmentChange;
                }
            } else {
                console.log('No AI function available for alignment assessment');
                // Reset counters anyway
                this.messageCount = 0;
                this.messageQueue = [];
                return 0;
            }
        } catch (error) {
            console.error('Alignment assessment error:', error);
        }

        return 0;
    }

    static parseAlignmentResponse(response) {
        try {
            const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const data = JSON.parse(jsonMatch[0]);
                return {
                    good: data.goodChange || 0,
                    law: data.lawChange || 0
                };
            }
            return { good: 0, law: 0 };
        } catch (error) {
            console.error("Failed to parse alignment JSON:", error);
            return { good: 0, law: 0 };
        }
    }

    static updateAlignment(player, change) {
        const alignment = this.initializeAlignment(player);
        const oldType = alignment.type;

        console.log('--- AlignmentSystem.updateAlignment CALLED ---'); // <<< ADD THIS LINE
        console.log('Change object received:', JSON.stringify(change)); // <<< ADD THIS LINE
        console.log(`Scores BEFORE update: good=${alignment.goodScore}, law=${alignment.lawScore}`); // <<< ADD THIS LINE

        alignment.goodScore = Math.max(-10, Math.min(10, alignment.goodScore + change.good));
        alignment.lawScore = Math.max(-10, Math.min(10, alignment.lawScore + change.law));

        alignment.type = this.getAlignmentType(alignment.goodScore, alignment.lawScore);

        console.log(`Scores AFTER update: good=${alignment.goodScore}, law=${alignment.lawScore}`); // <<< ADD THIS LINE
        console.log(`Alignment type changed from "${oldType}" to "${alignment.type}"`); // <<< ADD THIS LINE


        alignment.history.push({
            change: change,
            newGoodScore: alignment.goodScore,
            newLawScore: alignment.lawScore,
            newType: alignment.type,
            timestamp: Date.now()
        });

        return {
            changed: oldType !== alignment.type,
            oldType: oldType,
            newType: alignment.type,
            change: change,
            goodScore: alignment.goodScore,
            lawScore: alignment.lawScore
        };
    }

    static getAlignmentType(goodScore, lawScore) {
        let verticalAxis = 'Neutral';
        if (goodScore >= 3) verticalAxis = 'Good';
        else if (goodScore <= -3) verticalAxis = 'Evil';

        let horizontalAxis = 'Neutral';
        if (lawScore >= 3) horizontalAxis = 'Lawful';
        else if (lawScore <= -3) horizontalAxis = 'Chaotic';

        if (verticalAxis === 'Neutral' && horizontalAxis === 'Neutral') {
            return 'True Neutral';
        }
        if (verticalAxis === 'Neutral') return `${horizontalAxis} Neutral`;
        if (horizontalAxis === 'Neutral') return `Neutral ${verticalAxis}`;

        return `${horizontalAxis} ${verticalAxis}`;
    }

    static getAlignmentModifier(player) {
        const alignment = this.initializeAlignment(player);
        const type = alignment.type;

        return {
            npcTrustModifier: this.getNpcTrustModifier(type),
            shopPriceModifier: this.getShopPriceModifier(type),
            questRewardModifier: this.getQuestRewardModifier(type),
            combatModifier: this.getCombatModifier(type),
            prayerEffects: this.getPrayerEffects(type, alignment.score)
        };
    }

    static getNpcTrustModifier(alignmentType) {
        const modifiers = {
            malevolent: -30,
            evil: -20,
            neutral_evil: -10,
            neutral: 0,
            neutral_good: 10,
            good: 20,
            devout: 30
        };
        return modifiers[alignmentType] || 0;
    }

    static getShopPriceModifier(alignmentType) {
        const modifiers = {
            malevolent: 1.3,  // 30% more expensive
            evil: 1.2,        // 20% more expensive
            neutral_evil: 1.1, // 10% more expensive
            neutral: 1.0,     // Normal prices
            neutral_good: 0.95, // 5% discount
            good: 0.9,        // 10% discount
            devout: 0.8       // 20% discount
        };
        return modifiers[alignmentType] || 1.0;
    }

    static getQuestRewardModifier(alignmentType) {
        const modifiers = {
            malevolent: 0.7,  // 30% less rewards
            evil: 0.8,        // 20% less rewards
            neutral_evil: 0.9, // 10% less rewards
            neutral: 1.0,     // Normal rewards
            neutral_good: 1.1, // 10% bonus rewards
            good: 1.2,        // 20% bonus rewards
            devout: 1.3       // 30% bonus rewards
        };
        return modifiers[alignmentType] || 1.0;
    }

    static getCombatModifier(alignmentType) {
        return {
            damageBonus: alignmentType === 'malevolent' ? 0.1 : alignmentType === 'devout' ? 0.1 : 0,
            defenseBonus: alignmentType === 'good' || alignmentType === 'devout' ? 0.05 : 0,
            critChance: alignmentType === 'evil' || alignmentType === 'malevolent' ? 0.05 : 0
        };
    }

    static getPrayerEffects(alignmentType, score) {
        const effects = [];

        if (alignmentType === 'devout') {
            effects.push({
                name: 'Divine Blessing',
                description: 'Your devotion is rewarded with divine protection and strength',
                duration: 300, // 5 minutes
                effects: ['divine_protection', 'strength_boost', 'wisdom_boost'],
                healAmount: 50,
                statBonus: { wisdom: 3, charisma: 2 }
            });
        } else if (alignmentType === 'good') {
            effects.push({
                name: 'Righteous Favor',
                description: 'The gods smile upon your good deeds',
                duration: 240, // 4 minutes
                effects: ['minor_blessing', 'courage'],
                healAmount: 30,
                statBonus: { wisdom: 2, charisma: 1 }
            });
        } else if (alignmentType === 'malevolent') {
            effects.push({
                name: 'Dark Pact',
                description: 'Dark forces answer your prayers with power and corruption',
                duration: 300, // 5 minutes
                effects: ['dark_power', 'intimidation', 'strength_boost'],
                healAmount: 20,
                statBonus: { strength: 3, charisma: -1 },
                darkPower: Math.abs(score) * 2 // Extra damage based on evil score
            });
        } else if (alignmentType === 'evil') {
            effects.push({
                name: 'Malicious Whispers',
                description: 'Sinister voices grant you cunning and power',
                duration: 240, // 4 minutes
                effects: ['cunning', 'dark_insight'],
                healAmount: 15,
                statBonus: { dexterity: 2, intelligence: 1 }
            });
        } else {
            // Neutral alignments get luck-based effects
            effects.push({
                name: 'Fortune\'s Favor',
                description: 'Lady Luck smiles upon you',
                duration: 180, // 3 minutes
                effects: ['luck_boost', 'fortune'],
                healAmount: 25,
                goldBonus: Math.floor(Math.random() * 50) + 25, // 25-75 gold
                critBonus: 0.1 // 10% increased crit chance
            });
        }

        return effects;
    }

    static getAlignmentDescription(player) {
        const alignment = this.initializeAlignment(player);
        return this.alignmentDescriptions[alignment.type] || "Your moral standing is unclear.";
    }

    static getAlignmentDisplayInfo(player) {
        const alignment = this.initializeAlignment(player);

        return {
            type: alignment.type,
            score: alignment.score,
            description: this.getAlignmentDescription(player),
            color: this.getAlignmentColor(alignment.type),
            modifier: this.getAlignmentModifier(player)
        };
    }

    static getAlignmentColor(alignmentType) {
        const colors = {
            malevolent: 'text-red-900',
            evil: 'text-red-700',
            neutral_evil: 'text-red-400',
            neutral: 'text-gray-600',
            neutral_good: 'text-blue-400',
            good: 'text-blue-700',
            devout: 'text-yellow-600'
        };
        return colors[alignmentType] || 'text-gray-600';
    }
}

window.AlignmentSystem = AlignmentSystem