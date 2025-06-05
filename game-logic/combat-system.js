// Text-Based Combat System with Gemini AI Integration
export class CombatSystem {
    static combatState = {
        isActive: false,
        currentEnemy: null,
        turnOrder: [],
        currentTurn: 0,
        combatLog: [],
        playerActions: [],
        enemyActions: [],
        battleConditions: {},
        environment: null,
        turnNumber: 1
    };

    static combatActions = {
        ATTACK: 'attack',
        DEFEND: 'defend',
        CAST_SPELL: 'cast_spell',
        USE_ITEM: 'use_item',
        SPECIAL_ABILITY: 'special_ability',
        FLEE: 'flee',
        EXAMINE: 'examine',
        TACTICAL_MOVE: 'tactical_move'
    };

    static async initiateCombat(player, enemy, environment = null) {
        this.combatState.isActive = true;
        this.combatState.currentEnemy = enemy;
        this.combatState.environment = environment;
        this.combatState.combatLog = [];
        this.combatState.playerActions = [];
        this.combatState.enemyActions = [];
        this.combatState.turnNumber = 1;

        // Initialize enemy with full stats if needed
        enemy.maxHp = enemy.maxHp || enemy.hp;
        enemy.currentHp = enemy.hp;

        // Determine turn order based on dexterity/speed
        const playerSpeed = this.calculateInitiative(player);
        const enemySpeed = this.calculateInitiative(enemy);

        this.combatState.turnOrder = playerSpeed >= enemySpeed ? ['player', 'enemy'] : ['enemy', 'player'];
        this.combatState.currentTurn = 0;

        // Generate dynamic combat environment
        await this.generateCombatEnvironment(player, enemy, environment);

        // Display combat start in main game output
        this.displayCombatStart(player, enemy);

        // Start first turn
        if (this.combatState.turnOrder[0] === 'enemy') {
            setTimeout(() => this.processEnemyTurn(player, enemy), 2000);
        } else {
            this.displayPlayerTurnOptions();
        }

        return this.combatState;
    }

    static calculateInitiative(character) {
        const baseDex = character.stats?.dexterity || 10;
        const levelBonus = (character.level || 1) * 2;
        const randomFactor = Math.floor(Math.random() * 20) + 1;
        return baseDex + levelBonus + randomFactor;
    }

    static getPlayerReference() {
        return window.player || 
               (typeof player !== 'undefined' ? player : null) ||
               { name: 'Player', hp: 100, maxHp: 100, level: 1, class: 'Adventurer' };
    }

    static async generateCombatEnvironment(player, enemy, location) {
        const environmentPrompt = `
Generate a combat environment description for this battle:

LOCATION: ${location || player.currentLocation}
PLAYER: ${player.name} (Level ${player.level} ${player.class})
ENEMY: ${enemy.name}

Create a brief, atmospheric description of the combat setting in 1-2 sentences.
Focus on terrain, lighting, and immediate surroundings that could affect the fight.
`;

        try {
            const response = await window.callGeminiAPI(environmentPrompt, 0.7, 200, false);
            this.combatState.environment = {
                description: response || `You face ${enemy.name} in ${location || player.currentLocation}.`,
                terrain: "varied terrain",
                advantages: { player: [], enemy: [] }
            };
        } catch (error) {
            console.error('Error generating combat environment:', error);
            this.combatState.environment = {
                description: `You face ${enemy.name} in ${location || player.currentLocation}.`,
                terrain: "open ground",
                advantages: { player: [], enemy: [] }
            };
        }
    }

    static displayCombatStart(player, enemy) {
        if (typeof window.displayMessage === 'function') {
            window.displayMessage("⚔️ COMBAT BEGINS!", 'combat');
            window.displayMessage(this.combatState.environment.description, 'combat');
            window.displayMessage(`${player.name} (${player.hp}/${player.maxHp} HP) vs ${enemy.name} (${enemy.currentHp}/${enemy.maxHp} HP)`, 'combat');

            const turnOrder = this.combatState.turnOrder[0] === 'player' ? 'You act first!' : `${enemy.name} acts first!`;
            window.displayMessage(`Turn ${this.combatState.turnNumber}: ${turnOrder}`, 'combat');
        }
    }

    static displayPlayerTurnOptions() {
        if (typeof window.displayMessage === 'function') {
            window.displayMessage("🗡️ Your turn! Choose your action:", 'combat');
            window.displayMessage("Commands: 'attack', 'defend', 'cast spell', 'use item', 'examine enemy', 'flee'", 'info');
        }
    }

    static async processPlayerAction(player, enemy, actionType, command) {
        if (!this.combatState.isActive) return;

        const actionPrompt = this.buildPlayerActionPrompt(player, enemy, actionType, command);

        try {
            const response = await window.callGeminiAPI(actionPrompt, 0.8, 500, false);
            const actionResult = this.parseActionResponse(response, actionType);

            await this.applyActionResults(actionResult, player, enemy, 'player');

            // Check for combat end
            if (this.checkCombatEnd(player, enemy)) {
                return;
            }

            // Progress to next turn
            this.nextTurn(player, enemy);

        } catch (error) {
            console.error('Error processing player action:', error);
            const fallbackResult = this.getFallbackActionResult(actionType);
            await this.applyActionResults(fallbackResult, player, enemy, 'player');
            this.nextTurn(player, enemy);
        }
    }

    static buildPlayerActionPrompt(player, enemy, actionType, command) {
        const contextData = {
            turn: this.combatState.turnNumber,
            player: {
                name: player.name,
                class: player.class,
                level: player.level,
                hp: player.hp,
                maxHp: player.maxHp,
                weapon: player.equipment?.mainHand?.name || 'unarmed',
                armor: this.calculatePlayerDefense(player)
            },
            enemy: {
                name: enemy.name,
                hp: enemy.currentHp,
                maxHp: enemy.maxHp,
                type: enemy.type || 'creature',
                level: enemy.level || 1
            },
            environment: this.combatState.environment.description,
            recentActions: this.combatState.combatLog.slice(-2),
            actionType: actionType,
            command: command
        };

        return `
COMBAT TURN PROCESSING - Turn ${this.combatState.turnNumber}

CONTEXT: ${JSON.stringify(contextData, null, 2)}

PLAYER ACTION: ${actionType} - "${command}"

Process this combat action and respond with ONLY valid JSON:
{
    "success": true/false,
    "narrative": "Detailed 2-3 sentence description of what happens",
    "damage": 0,
    "playerHpChange": 0,
    "enemyHpChange": 0,
    "effects": [],
    "criticalHit": false,
    "actionComplete": true/false
}

Rules:
- Make combat dramatic and engaging
- Consider player level, equipment, and enemy type
- Critical hits occur ~10% of the time on attacks
- Defensive actions reduce incoming damage
- Failed actions should still have narrative descriptions
- Keep damage reasonable (1-20 for most attacks)
`;
    }

    static parseActionResponse(response, actionType) {
        try {
            const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            }
        } catch (error) {
            console.error('Error parsing action response:', error);
        }

        return this.getFallbackActionResult(actionType);
    }

    static getFallbackActionResult(actionType) {
        const baseDamage = Math.floor(Math.random() * 12) + 5;

        switch (actionType) {
            case this.combatActions.ATTACK:
                return {
                    success: true,
                    narrative: "You strike with your weapon, dealing damage to your enemy!",
                    damage: baseDamage,
                    enemyHpChange: -baseDamage,
                    criticalHit: Math.random() < 0.1,
                    actionComplete: true
                };
            case this.combatActions.DEFEND:
                return {
                    success: true,
                    narrative: "You raise your guard and prepare to defend against incoming attacks.",
                    effects: ["defending"],
                    actionComplete: true
                };
            case this.combatActions.FLEE:
                return {
                    success: Math.random() < 0.7,
                    narrative: Math.random() < 0.7 ? "You successfully escape from combat!" : "You failed to escape! The enemy blocks your path!",
                    actionComplete: true
                };
            default:
                return {
                    success: false,
                    narrative: "Your action fails to have any effect.",
                    actionComplete: true
                };
        }
    }

    static async processEnemyTurn(player, enemy) {
        const enemyPrompt = this.buildEnemyActionPrompt(player, enemy);

        try {
            const response = await window.callGeminiAPI(enemyPrompt, 0.8, 500, false);
            const actionResult = this.parseActionResponse(response, 'enemy_action');

            await this.applyActionResults(actionResult, player, enemy, 'enemy');

            // Check for combat end
            if (this.checkCombatEnd(player, enemy)) {
                return;
            }

            // Continue to next turn
            this.nextTurn(player, enemy);

        } catch (error) {
            console.error('Error processing enemy turn:', error);
            const fallbackAction = this.getFallbackEnemyAction(enemy);
            await this.applyActionResults(fallbackAction, player, enemy, 'enemy');
            this.nextTurn(player, enemy);
        }
    }

    static buildEnemyActionPrompt(player, enemy) {
        const contextData = {
            turn: this.combatState.turnNumber,
            enemy: {
                name: enemy.name,
                hp: enemy.currentHp,
                maxHp: enemy.maxHp,
                type: enemy.type || 'creature',
                level: enemy.level || 1,
                attack: enemy.attack || 8
            },
            player: {
                name: player.name,
                hp: player.hp,
                maxHp: player.maxHp,
                defense: this.calculatePlayerDefense(player),
                level: player.level
            },
            environment: this.combatState.environment.description,
            recentActions: this.combatState.combatLog.slice(-2)
        };

        return `
ENEMY TURN PROCESSING - Turn ${this.combatState.turnNumber}

CONTEXT: ${JSON.stringify(contextData, null, 2)}

The enemy takes their turn. Consider:
- Enemy's health status and desperation level
- Player's apparent strength and defenses
- Environmental factors
- Enemy type and natural behaviors

Respond with ONLY valid JSON:
{
    "success": true,
    "narrative": "2-3 sentence description of enemy action",
    "damage": 0,
    "playerHpChange": 0,
    "enemyHpChange": 0,
    "effects": [],
    "actionComplete": true
}

Make the enemy action feel intelligent and appropriate for the creature type.
`;
    }

    static getFallbackEnemyAction(enemy) {
        const damage = Math.floor(Math.random() * 10) + 3;
        return {
            success: true,
            narrative: `${enemy.name} attacks with ferocity, striking at you with natural weapons!`,
            damage: damage,
            playerHpChange: -damage,
            actionComplete: true
        };
    }

    static async applyActionResults(result, player, enemy, actor) {
        // Apply HP changes
        if (result.enemyHpChange && actor === 'player') {
            enemy.currentHp = Math.max(0, enemy.currentHp + result.enemyHpChange);
            enemy.hp = enemy.currentHp;
        }

        if (result.playerHpChange && actor === 'enemy') {
            const defense = this.calculatePlayerDefense(player);
            const actualDamage = Math.max(1, Math.abs(result.playerHpChange) - defense);
            player.hp = Math.max(0, player.hp - actualDamage);

            if (defense > 0 && actualDamage !== Math.abs(result.playerHpChange)) {
                if (typeof window.displayMessage === 'function') {
                    window.displayMessage(`Your armor absorbs ${Math.abs(result.playerHpChange) - actualDamage} damage!`, 'combat');
                }
            }
        }

        // Display action narrative
        if (typeof window.displayMessage === 'function') {
            const messageType = actor === 'player' ? 'success' : 'combat';
            window.displayMessage(result.narrative, messageType);

            if (result.criticalHit) {
                window.displayMessage("💥 CRITICAL HIT!", 'success');
            }

            // Display current HP status
            const playerHpStatus = `${player.name}: ${player.hp}/${player.maxHp} HP`;
            const enemyHpStatus = `${enemy.name}: ${enemy.currentHp}/${enemy.maxHp} HP`;
            window.displayMessage(`${playerHpStatus} | ${enemyHpStatus}`, 'info');
        }

        // Store action in combat log
        this.combatState.combatLog.push({
            turn: this.combatState.turnNumber,
            actor: actor,
            action: result.narrative,
            timestamp: Date.now()
        });

        // Update main game UI
        if (typeof window.updatePlayerStatsDisplay === 'function') {
            window.updatePlayerStatsDisplay();
        }
    }

    static calculatePlayerDefense(player) {
        let defense = 0;

        if (player.equipment) {
            Object.values(player.equipment).forEach(item => {
                if (item && item.defense) {
                    defense += parseInt(item.defense) || 0;
                }
            });
        }

        if (player.stats && player.stats.constitution) {
            defense += Math.floor((player.stats.constitution - 10) / 2);
        }

        return Math.max(0, defense);
    }

    static nextTurn(player, enemy) {
        this.combatState.currentTurn = (this.combatState.currentTurn + 1) % this.combatState.turnOrder.length;

        if (this.combatState.currentTurn === 0) {
            this.combatState.turnNumber++;
        }

        const currentActor = this.combatState.turnOrder[this.combatState.currentTurn];

        if (typeof window.displayMessage === 'function') {
            window.displayMessage(`--- Turn ${this.combatState.turnNumber} ---`, 'combat');
        }

        if (currentActor === 'player') {
            this.displayPlayerTurnOptions();
        } else {
            if (typeof window.displayMessage === 'function') {
                window.displayMessage(`${enemy.name}'s turn...`, 'combat');
            }
            setTimeout(() => this.processEnemyTurn(player, enemy), 1500);
        }
    }

    static checkCombatEnd(player, enemy) {
        if (player.hp <= 0) {
            this.endCombat('defeat', player, enemy);
            return true;
        } else if (enemy.currentHp <= 0) {
            this.endCombat('victory', player, enemy);
            return true;
        }
        return false;
    }

    static async endCombat(result, player, enemy) {
        this.combatState.isActive = false;

        if (typeof window.displayMessage === 'function') {
            window.displayMessage("⚔️ COMBAT ENDS!", 'combat');
        }

        if (result === 'victory') {
            const goldReward = Math.floor(Math.random() * 40) + 20 + (enemy.level || 1) * 10;
            const xpReward = Math.floor(Math.random() * 25) + 15 + (enemy.level || 1) * 5;

            if (typeof window.displayMessage === 'function') {
                window.displayMessage(`🎉 Victory! ${enemy.name} is defeated!`, 'success');
                window.displayMessage(`💰 You gained ${goldReward} gold and ${xpReward} experience!`, 'success');
            }

            if (typeof window.updateGold === 'function') {
                window.updateGold(goldReward, 'combat victory');
            }

            if (typeof window.CharacterManager !== 'undefined' && window.CharacterManager.gainExperience) {
                window.CharacterManager.gainExperience(player, xpReward);
            }

            if (typeof window.checkQuestCompletion === 'function') {
                window.checkQuestCompletion(`defeated ${enemy.name}`);
            }

        } else if (result === 'defeat') {
            this.handleDefeat(player);
        } else if (result === 'flee') {
            if (typeof window.displayMessage === 'function') {
                window.displayMessage("🏃 You successfully escape from combat!", 'info');
            }
        }

        // Clear enemy reference
        player.currentEnemy = null;

        // Save game
        if (typeof window.saveGame === 'function') {
            window.saveGame();
        }

        // Reset combat state
        this.combatState = {
            isActive: false,
            currentEnemy: null,
            turnOrder: [],
            currentTurn: 0,
            combatLog: [],
            playerActions: [],
            enemyActions: [],
            battleConditions: {},
            environment: null,
            turnNumber: 1
        };
    }

    static handleDefeat(player) {
        const goldLoss = Math.floor(player.gold * 0.15);
        player.hp = Math.floor(player.maxHp * 0.25);

        if (typeof window.displayMessage === 'function') {
            window.displayMessage("💀 You have been defeated!", 'error');
            window.displayMessage("You lose consciousness and wake up in a safe place...", 'info');
            window.displayMessage(`💰 You lost ${goldLoss} gold from your ordeal.`, 'error');
            window.displayMessage(`❤️ You recover to ${player.hp} HP.`, 'info');
        }

        if (typeof window.updateGold === 'function') {
            window.updateGold(-goldLoss, 'death penalty');
        }

        const safeLocations = ['Pedena Town Square', 'Temple of Healing', 'Inn'];
        player.currentLocation = safeLocations[Math.floor(Math.random() * safeLocations.length)];

        if (typeof window.updatePlayerStatsDisplay === 'function') {
            window.updatePlayerStatsDisplay();
        }
    }

    // Helper method to process combat commands from the main game loop
    static async handleCombatCommand(command) {
        if (!this.combatState.isActive) return false;

        const player = this.getPlayerReference();
        const enemy = this.combatState.currentEnemy;

        // Check if it's player's turn
        if (this.combatState.turnOrder[this.combatState.currentTurn] !== 'player') {
            if (typeof window.displayMessage === 'function') {
                window.displayMessage("It's not your turn yet!", 'error');
            }
            return true;
        }

        const lowerCommand = command.toLowerCase().trim();
        let actionType = this.combatActions.ATTACK; // default

        // Parse command to determine action type
        if (lowerCommand.includes('attack') || lowerCommand.includes('strike') || lowerCommand.includes('hit')) {
            actionType = this.combatActions.ATTACK;
        } else if (lowerCommand.includes('defend') || lowerCommand.includes('block') || lowerCommand.includes('guard')) {
            actionType = this.combatActions.DEFEND;
        } else if (lowerCommand.includes('spell') || lowerCommand.includes('cast') || lowerCommand.includes('magic')) {
            actionType = this.combatActions.CAST_SPELL;
        } else if (lowerCommand.includes('item') || lowerCommand.includes('potion') || lowerCommand.includes('use')) {
            actionType = this.combatActions.USE_ITEM;
        } else if (lowerCommand.includes('flee') || lowerCommand.includes('run') || lowerCommand.includes('escape')) {
            actionType = this.combatActions.FLEE;
        } else if (lowerCommand.includes('examine') || lowerCommand.includes('study') || lowerCommand.includes('look')) {
            actionType = this.combatActions.EXAMINE;
        }

        await this.processPlayerAction(player, enemy, actionType, command);
        return true;
    }

    // Static method for external access
    static async fleeCombat() {
        if (!this.combatState.isActive) return;

        const fleeResult = this.getFallbackActionResult(this.combatActions.FLEE);

        if (fleeResult.success) {
            this.endCombat('flee', this.getPlayerReference(), this.combatState.currentEnemy);
        } else {
            if (typeof window.displayMessage === 'function') {
                window.displayMessage(fleeResult.narrative, 'error');
            }
            setTimeout(() => this.processEnemyTurn(this.getPlayerReference(), this.combatState.currentEnemy), 1000);
        }
    }
}

// Make CombatSystem globally available
if (typeof window !== 'undefined') {
    window.CombatSystem = CombatSystem;
}

export default CombatSystem;