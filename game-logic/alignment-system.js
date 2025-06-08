
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
        if (!player.alignment) {
            player.alignment = {
                score: 0,
                type: this.alignmentTypes.NEUTRAL,
                history: [],
                lastAssessment: Date.now(),
                totalAssessments: 0,
                messagesSinceLastAssessment: 0
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

        const assessmentPrompt = `
        ALIGNMENT ASSESSMENT SYSTEM

        Analyze the player's actions for their moral alignment.

        CONVERSATION HISTORY:
        ${messagesToAssess.map((msg, index) =>
            `${index + 1}. Player: "${msg.player}"\n   Game Response: "${msg.ai}"`
        ).join('\n\n')}

        ALIGNMENT SCALE & GUIDELINES:

        +1 (Good): Actions focused on altruism, compassion, and the well-being of others.
        
        Lawful Good: Characterized by honor, duty, and principled compassion. This includes keeping promises, upholding just laws, formal declarations of love and protection, and self-sacrifice driven by a code of conduct. Protecting innocents because it is the right thing to do.
        Chaotic Good: Characterized by a free spirit and a strong personal conscience. This includes breaking unjust rules to help others, protecting innocents through unconventional means (trickery, rebellion), and grand, impulsive gestures of affection or sacrifice that defy tradition or orders.
        0 (Neutral): Actions that are not driven by a commitment to good or evil, but by other principles or a lack thereof.
        
        Lawful Neutral: Adherence to a law, code, or tradition is paramount. This includes enforcing a contract to the letter regardless of the outcome, following orders without moral judgment, and prioritizing procedure over a "good" or "evil" result.
        True Neutral: Actions motivated by pragmatism, balance, or pure self-interest without malice. This includes gathering information dispassionately, making deals with any party, and decisions aimed at maintaining the status quo.
        Chaotic Neutral: Prioritizes absolute personal freedom and impulse. This includes actions taken on a whim, switching allegiances when it's convenient, and a general disregard for laws and traditions. The character is unpredictable and serves their own freedom first.
        -1 (Evil): Actions focused on harming others, benefiting the self at the expense of others, and exercising cruelty.
        
        Lawful Evil: Methodical, organized, and strategic evil. This includes creating and exploiting oppressive rules, using contracts to trap others, betrayal for calculated advancement, and imposing a tyrannical order. Harm is a tool for achieving a greater, selfish goal.
        Chaotic Evil: Impulsive, destructive, and unpredictable evil. This includes harming others for pleasure, random acts of violence, lying and betraying others for immediate gain, and reveling in suffering and destruction. Harm is the goal itself.
        IMPORTANT CONTEXT: If the player is in a romantic relationship, he is probably assertive, protective, or will assert intense romantic actions ("your wish is my command", "I will do anything for you", "I will protect you no matter the cost") should be interpreted as Lawful Good (+1) in this context, as they represent a sworn vow and an honorable commitment to the relationship's code.
        `;

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
        const cleanResponse = response.trim();

        if (cleanResponse.includes('+1') || cleanResponse === '1') {
            return 1;
        } else if (cleanResponse.includes('-1') || cleanResponse === '-1') {
            return -1;
        } else {
            return 0;
        }
    }

    static updateAlignment(player, change) {
        const alignment = this.initializeAlignment(player);

        const oldScore = alignment.score;
        const oldType = alignment.type;

        // Update alignment score (capped between -10 and +10)
        alignment.score = Math.max(-10, Math.min(10, alignment.score + change));

        // Update alignment type based on score
        alignment.type = this.getAlignmentType(alignment.score);

        // Record this assessment
        alignment.history.push({
            change: change,
            oldScore: oldScore,
            newScore: alignment.score,
            oldType: oldType,
            newType: alignment.type,
            timestamp: Date.now()
        });

        alignment.lastAssessment = Date.now();
        alignment.totalAssessments++;
        alignment.messagesSinceLastAssessment = 0;

        return {
            changed: oldType !== alignment.type,
            oldType: oldType,
            newType: alignment.type,
            change: change,
            score: alignment.score
        };
    }

    static getAlignmentType(score) {
        if (score <= -6) return this.alignmentTypes.MALEVOLENT;
        if (score <= -3) return this.alignmentTypes.EVIL;
        if (score <= -1) return this.alignmentTypes.NEUTRAL_EVIL;
        if (score === 0) return this.alignmentTypes.NEUTRAL;
        if (score <= 2) return this.alignmentTypes.NEUTRAL_GOOD;
        if (score <= 5) return this.alignmentTypes.GOOD;
        return this.alignmentTypes.DEVOUT;
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