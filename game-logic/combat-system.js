
// Enhanced Combat System with Gemini AI Integration
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
        environment: null
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
        
        // Display combat UI
        this.displayCombatInterface();
        
        // Add opening combat narrative
        const openingNarrative = await this.generateCombatNarrative('combat_start', {
            player: player,
            enemy: enemy,
            environment: this.combatState.environment
        });
        
        this.addToCombatLog(openingNarrative, 'narrative');
        
        // Start first turn
        if (this.combatState.turnOrder[0] === 'enemy') {
            setTimeout(() => this.processEnemyTurn(player, enemy), 1000);
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
        // Try multiple ways to get player reference
        return window.player || 
               (typeof player !== 'undefined' ? player : null) ||
               { name: 'Player', hp: 100, maxHp: 100, level: 1, class: 'Adventurer' };
    }

    static async generateCombatEnvironment(player, enemy, location) {
        const environmentPrompt = `
Generate a dynamic combat environment for this battle:

LOCATION: ${location || player.currentLocation}
PLAYER: ${player.name} (Level ${player.level} ${player.class})
ENEMY: ${enemy.name}

Create environmental factors that could affect combat. Respond with ONLY valid JSON in this exact format:
{
    "terrain": "description",
    "weather": "conditions",
    "interactables": ["element1", "element2"],
    "advantages": {"player": [], "enemy": []},
    "hazards": [],
    "tacticalPositions": []
}

Keep descriptions short and avoid special characters that could break JSON parsing.
`;

        try {
            const response = await window.callGeminiAPI(environmentPrompt, 0.5, 300, false);
            if (response) {
                // More robust JSON extraction and cleaning
                let cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
                
                // Remove any text before the first {
                const firstBrace = cleanResponse.indexOf('{');
                if (firstBrace !== -1) {
                    cleanResponse = cleanResponse.substring(firstBrace);
                }
                
                // Remove any text after the last }
                const lastBrace = cleanResponse.lastIndexOf('}');
                if (lastBrace !== -1) {
                    cleanResponse = cleanResponse.substring(0, lastBrace + 1);
                }
                
                // Clean up common JSON issues
                cleanResponse = cleanResponse
                    .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
                    .replace(/[\u201C\u201D]/g, '"') // Replace smart quotes
                    .replace(/[\u2018\u2019]/g, "'"); // Replace smart apostrophes
                
                const parsedEnvironment = JSON.parse(cleanResponse);
                
                // Validate the structure
                if (parsedEnvironment && typeof parsedEnvironment === 'object') {
                    this.combatState.environment = {
                        terrain: parsedEnvironment.terrain || "Open ground",
                        weather: parsedEnvironment.weather || "Clear",
                        interactables: Array.isArray(parsedEnvironment.interactables) ? parsedEnvironment.interactables : [],
                        advantages: parsedEnvironment.advantages || { player: [], enemy: [] },
                        hazards: Array.isArray(parsedEnvironment.hazards) ? parsedEnvironment.hazards : [],
                        tacticalPositions: Array.isArray(parsedEnvironment.tacticalPositions) ? parsedEnvironment.tacticalPositions : []
                    };
                } else {
                    this.combatState.environment = this.getDefaultEnvironment();
                }
            } else {
                this.combatState.environment = this.getDefaultEnvironment();
            }
        } catch (error) {
            console.error('Error generating combat environment:', error);
            this.combatState.environment = this.getDefaultEnvironment();
        }
    }

    static getDefaultEnvironment() {
        return {
            terrain: "Open ground with scattered rocks",
            weather: "Clear",
            interactables: ["rocks", "fallen tree"],
            advantages: { player: [], enemy: [] },
            hazards: [],
            tacticalPositions: ["high ground", "cover behind rocks"]
        };
    }

    static displayCombatInterface() {
        // Remove any existing combat interface
        const existingInterface = document.getElementById('advanced-combat-interface');
        if (existingInterface) {
            existingInterface.remove();
        }

        const combatDiv = document.createElement('div');
        combatDiv.id = 'advanced-combat-interface';
        combatDiv.classList.add('combat-interface-container');

        combatDiv.innerHTML = `
            <div class="combat-header">
                <h3 class="combat-title">⚔️ Combat Engaged!</h3>
                <div class="turn-indicator">
                    <span id="current-turn-display">Turn: ${this.combatState.turnOrder[this.combatState.currentTurn]}</span>
                </div>
            </div>

            <div class="combat-main">
                <div class="combat-left">
                    <!-- Player Stats -->
                    <div class="combatant-card player-card">
                        <h4>${this.getPlayerReference().name}</h4>
                        <div class="hp-bar">
                            <div class="hp-fill" style="width: ${(this.getPlayerReference().hp / this.getPlayerReference().maxHp) * 100}%"></div>
                            <span class="hp-text">${this.getPlayerReference().hp}/${this.getPlayerReference().maxHp} HP</span>
                        </div>
                        <div class="combatant-effects" id="player-effects"></div>
                    </div>

                    <!-- Combat Actions -->
                    <div class="combat-actions" id="combat-actions-panel">
                        ${this.generateActionButtons()}
                    </div>
                </div>

                <div class="combat-center">
                    <!-- Combat Log -->
                    <div class="combat-log" id="combat-log">
                        <div class="log-entry narrative">Combat begins...</div>
                    </div>
                </div>

                <div class="combat-right">
                    <!-- Enemy Stats -->
                    <div class="combatant-card enemy-card">
                        <h4>${this.combatState.currentEnemy.name}</h4>
                        <div class="hp-bar enemy-hp">
                            <div class="hp-fill" style="width: ${(this.combatState.currentEnemy.currentHp / this.combatState.currentEnemy.maxHp) * 100}%"></div>
                            <span class="hp-text">${this.combatState.currentEnemy.currentHp}/${this.combatState.currentEnemy.maxHp} HP</span>
                        </div>
                        <div class="enemy-info">
                            <span class="enemy-level">Level: ${this.combatState.currentEnemy.level || '?'}</span>
                            <span class="enemy-type">${this.combatState.currentEnemy.type || 'Creature'}</span>
                        </div>
                        <div class="combatant-effects" id="enemy-effects"></div>
                    </div>

                    <!-- Environment -->
                    <div class="environment-panel">
                        <h5>Environment</h5>
                        <div class="environment-details">
                            <p><strong>Terrain:</strong> ${this.combatState.environment.terrain}</p>
                            <p><strong>Weather:</strong> ${this.combatState.environment.weather}</p>
                            ${this.combatState.environment.interactables.length > 0 ? 
                                `<p><strong>Interactive:</strong> ${this.combatState.environment.interactables.join(', ')}</p>` : ''}
                        </div>
                    </div>
                </div>
            </div>

            <div class="combat-footer">
                <button onclick="CombatSystem.fleeCombat()" class="combat-btn flee-btn">🏃 Flee</button>
                <button onclick="CombatSystem.examineEnemy()" class="combat-btn examine-btn">🔍 Examine</button>
                <button onclick="CombatSystem.toggleCombatHelp()" class="combat-btn help-btn">❓ Help</button>
            </div>
        `;

        // Add CSS styles
        this.addCombatStyles();
        
        // Insert into game output
        const gameOutput = document.getElementById('game-output');
        if (gameOutput) {
            gameOutput.appendChild(combatDiv);
            gameOutput.scrollTop = gameOutput.scrollHeight;
        }
    }

    static generateActionButtons() {
        return `
            <div class="action-category">
                <h5>Attack Actions</h5>
                <button onclick="CombatSystem.playerAction('${this.combatActions.ATTACK}', 'basic')" class="action-btn attack-btn">
                    ⚔️ Basic Attack
                </button>
                <button onclick="CombatSystem.playerAction('${this.combatActions.ATTACK}', 'power')" class="action-btn attack-btn">
                    💥 Power Attack
                </button>
            </div>

            <div class="action-category">
                <h5>Magic & Abilities</h5>
                <button onclick="CombatSystem.playerAction('${this.combatActions.CAST_SPELL}', 'offensive')" class="action-btn spell-btn">
                    🔥 Cast Spell
                </button>
                <button onclick="CombatSystem.playerAction('${this.combatActions.SPECIAL_ABILITY}', 'class')" class="action-btn ability-btn">
                    ⭐ Class Ability
                </button>
            </div>

            <div class="action-category">
                <h5>Defensive Actions</h5>
                <button onclick="CombatSystem.playerAction('${this.combatActions.DEFEND}', 'full')" class="action-btn defend-btn">
                    🛡️ Defend
                </button>
                <button onclick="CombatSystem.playerAction('${this.combatActions.USE_ITEM}', 'healing')" class="action-btn item-btn">
                    🧪 Use Item
                </button>
            </div>

            <div class="action-category">
                <h5>Tactical Actions</h5>
                <button onclick="CombatSystem.playerAction('${this.combatActions.TACTICAL_MOVE}', 'position')" class="action-btn tactical-btn">
                    🏃 Reposition
                </button>
                <button onclick="CombatSystem.playerAction('${this.combatActions.EXAMINE}', 'enemy')" class="action-btn examine-btn">
                    👁️ Study Enemy
                </button>
            </div>
        `;
    }

    static async playerAction(actionType, variant = 'basic') {
        if (!this.combatState.isActive) return;
        
        const player = this.getPlayerReference();
        const enemy = this.combatState.currentEnemy;
        
        // Disable action buttons temporarily
        this.disableActionButtons();
        
        // Process the action with Gemini AI
        const actionResult = await this.processPlayerAction(player, enemy, actionType, variant);
        
        // Apply results
        await this.applyActionResults(actionResult, player, enemy);
        
        // Check for combat end
        if (this.checkCombatEnd(player, enemy)) {
            return;
        }
        
        // Progress to next turn
        this.nextTurn(player, enemy);
    }

    static async processPlayerAction(player, enemy, actionType, variant) {
        const actionPrompt = `
COMBAT ACTION PROCESSING

PLAYER ACTION: ${actionType} (${variant})
Player: ${player.name} (Level ${player.level} ${player.class})
Current HP: ${player.hp}/${player.maxHp}
Equipped Weapon: ${player.equipment?.mainHand?.name || 'None'}

ENEMY: ${enemy.name}
Current HP: ${enemy.currentHp}/${enemy.maxHp}
Defense: ${enemy.defense || 0}

ENVIRONMENT: ${this.combatState.environment.terrain}
Weather: ${this.combatState.environment.weather}

COMBAT CONTEXT:
${this.combatState.combatLog.slice(-3).join('\n')}

Process this combat action and provide detailed results:

Respond with JSON:
{
    "success": true/false,
    "narrative": "Detailed description of the action",
    "damage": 0,
    "playerHpChange": 0,
    "enemyHpChange": 0,
    "effects": [],
    "criticalHit": false,
    "environmentInteraction": "",
    "followUpActions": [],
    "soundEffect": "weapon_clash/spell_cast/etc"
}

Make the combat dynamic and engaging with detailed descriptions.
`;

        try {
            const response = await window.callGeminiAPI(actionPrompt, 0.8, 600, false);
            if (response) {
                const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
                const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);
                
                if (jsonMatch) {
                    return JSON.parse(jsonMatch[0]);
                }
            }
        } catch (error) {
            console.error('Error processing combat action:', error);
        }
        
        // Fallback basic action
        return this.getFallbackActionResult(actionType, variant);
    }

    static getFallbackActionResult(actionType, variant) {
        const baseDamage = Math.floor(Math.random() * 15) + 5;
        
        switch (actionType) {
            case this.combatActions.ATTACK:
                return {
                    success: true,
                    narrative: `You strike with your weapon, dealing damage to the enemy!`,
                    damage: baseDamage,
                    enemyHpChange: -baseDamage,
                    criticalHit: Math.random() < 0.1,
                    soundEffect: "weapon_clash"
                };
            case this.combatActions.DEFEND:
                return {
                    success: true,
                    narrative: "You raise your guard, preparing to defend against incoming attacks.",
                    effects: ["defending"],
                    soundEffect: "armor_clank"
                };
            default:
                return {
                    success: false,
                    narrative: "The action fails to have any effect.",
                    soundEffect: "miss"
                };
        }
    }

    static async applyActionResults(result, player, enemy) {
        // Apply damage and effects
        if (result.enemyHpChange) {
            enemy.currentHp = Math.max(0, enemy.currentHp + result.enemyHpChange);
            enemy.hp = enemy.currentHp; // Keep both for compatibility
        }
        
        if (result.playerHpChange) {
            player.hp = Math.max(0, player.hp + result.playerHpChange);
        }
        
        // Add to combat log
        this.addToCombatLog(result.narrative, 'player-action');
        
        if (result.criticalHit) {
            this.addToCombatLog("💥 CRITICAL HIT!", 'critical');
        }
        
        // Update UI
        this.updateCombatUI(player, enemy);
        
        // Play sound effect (if audio system exists)
        this.playCombatSound(result.soundEffect);
    }

    static async processEnemyTurn(player, enemy) {
        const enemyPrompt = `
ENEMY TURN - AI DECISION MAKING

ENEMY: ${enemy.name}
Current HP: ${enemy.currentHp}/${enemy.maxHp}
Attack Power: ${enemy.attack || 10}

PLAYER: ${player.name}
Current HP: ${player.hp}/${player.maxHp}
Defense: ${this.calculatePlayerDefense(player)}

ENVIRONMENT: ${this.combatState.environment.terrain}
RECENT COMBAT: ${this.combatState.combatLog.slice(-2).join(' ')}

The enemy takes their turn. Consider:
- Enemy's current health status
- Player's apparent strength
- Environmental factors
- Available enemy abilities

Respond with JSON:
{
    "action": "attack/special_ability/defensive/tactical",
    "target": "player",
    "narrative": "Detailed description of enemy action",
    "damage": 0,
    "playerHpChange": 0,
    "enemyHpChange": 0,
    "effects": [],
    "environmentUse": "",
    "soundEffect": "growl/roar/spell_cast"
}
`;

        try {
            const response = await window.callGeminiAPI(enemyPrompt, 0.8, 500, false);
            let enemyAction;
            
            if (response) {
                const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
                const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);
                
                if (jsonMatch) {
                    enemyAction = JSON.parse(jsonMatch[0]);
                } else {
                    enemyAction = this.getFallbackEnemyAction(enemy);
                }
            } else {
                enemyAction = this.getFallbackEnemyAction(enemy);
            }
            
            // Apply enemy action results
            await this.applyEnemyAction(enemyAction, player, enemy);
            
            // Check for combat end
            if (this.checkCombatEnd(player, enemy)) {
                return;
            }
            
            // Continue to next turn
            this.nextTurn(player, enemy);
            
        } catch (error) {
            console.error('Error processing enemy turn:', error);
            const fallbackAction = this.getFallbackEnemyAction(enemy);
            await this.applyEnemyAction(fallbackAction, player, enemy);
            this.nextTurn(player, enemy);
        }
    }

    static getFallbackEnemyAction(enemy) {
        const damage = Math.floor(Math.random() * 12) + 3;
        return {
            action: "attack",
            narrative: `${enemy.name} attacks with ferocity, claws and fangs seeking flesh!`,
            damage: damage,
            playerHpChange: -damage,
            soundEffect: "growl"
        };
    }

    static async applyEnemyAction(action, player, enemy) {
        // Apply damage to player
        if (action.playerHpChange) {
            const defense = this.calculatePlayerDefense(player);
            const actualDamage = Math.max(1, Math.abs(action.playerHpChange) - defense);
            player.hp = Math.max(0, player.hp - actualDamage);
            
            if (actualDamage !== Math.abs(action.playerHpChange)) {
                this.addToCombatLog(`Your armor absorbs ${Math.abs(action.playerHpChange) - actualDamage} damage!`, 'defense');
            }
        }
        
        // Add enemy action to log
        this.addToCombatLog(action.narrative, 'enemy-action');
        
        // Update UI
        this.updateCombatUI(player, enemy);
        
        // Play sound
        this.playCombatSound(action.soundEffect);
    }

    static calculatePlayerDefense(player) {
        let defense = 0;
        
        // Equipment defense
        if (player.equipment) {
            Object.values(player.equipment).forEach(item => {
                if (item && item.defense) {
                    defense += parseInt(item.defense) || 0;
                }
            });
        }
        
        // Constitution bonus
        if (player.stats && player.stats.constitution) {
            defense += Math.floor((player.stats.constitution - 10) / 2);
        }
        
        return Math.max(0, defense);
    }

    static nextTurn(player, enemy) {
        this.combatState.currentTurn = (this.combatState.currentTurn + 1) % this.combatState.turnOrder.length;
        
        // Update turn display
        const turnDisplay = document.getElementById('current-turn-display');
        if (turnDisplay) {
            turnDisplay.textContent = `Turn: ${this.combatState.turnOrder[this.combatState.currentTurn]}`;
        }
        
        // Enable/disable actions based on turn
        if (this.combatState.turnOrder[this.combatState.currentTurn] === 'player') {
            this.enableActionButtons();
        } else {
            this.disableActionButtons();
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
        
        if (result === 'victory') {
            // Calculate rewards
            const goldReward = Math.floor(Math.random() * 50) + 25 + (enemy.level || 1) * 10;
            const xpReward = Math.floor(Math.random() * 30) + 15 + (enemy.level || 1) * 5;
            
            // Generate victory narrative
            const victoryNarrative = await this.generateCombatNarrative('victory', {
                player: player,
                enemy: enemy,
                goldReward: goldReward,
                xpReward: xpReward
            });
            
            this.addToCombatLog(victoryNarrative, 'victory');
            
            // Award rewards
            if (typeof window.updateGold === 'function') {
                window.updateGold(goldReward, 'combat victory');
            }
            
            if (typeof window.CharacterManager !== 'undefined' && window.CharacterManager.gainExperience) {
                window.CharacterManager.gainExperience(player, xpReward);
            }
            
            // Check quest completion
            if (typeof window.checkQuestCompletion === 'function') {
                window.checkQuestCompletion(`defeated ${enemy.name}`);
            }
            
        } else if (result === 'defeat') {
            const defeatNarrative = await this.generateCombatNarrative('defeat', { player: player, enemy: enemy });
            this.addToCombatLog(defeatNarrative, 'defeat');
            
            // Handle defeat consequences
            this.handleDefeat(player);
        }
        
        // Remove combat interface after delay
        setTimeout(() => {
            const combatInterface = document.getElementById('advanced-combat-interface');
            if (combatInterface) {
                combatInterface.remove();
            }
        }, 5000);
        
        // Clear enemy reference
        player.currentEnemy = null;
        
        // Save game
        if (typeof window.saveGame === 'function') {
            window.saveGame();
        }
    }

    static handleDefeat(player) {
        // Death penalty
        const goldLoss = Math.floor(player.gold * 0.15);
        player.hp = Math.floor(player.maxHp * 0.25);
        
        if (typeof window.updateGold === 'function') {
            window.updateGold(-goldLoss, 'death penalty');
        }
        
        // Move to safe location
        const safeLocations = ['Pedena Town Square', 'Temple of Healing', 'Inn'];
        player.currentLocation = safeLocations[Math.floor(Math.random() * safeLocations.length)];
        
        if (typeof window.updatePlayerStatsDisplay === 'function') {
            window.updatePlayerStatsDisplay();
        }
    }

    static async generateCombatNarrative(type, context) {
        const prompt = `
Generate a ${type} narrative for this combat scenario:

${JSON.stringify(context, null, 2)}

Create an engaging, dramatic description in 2-3 sentences that captures the ${type} moment.
`;

        try {
            const response = await window.callGeminiAPI(prompt, 0.8, 200, false);
            return response || this.getDefaultNarrative(type);
        } catch (error) {
            return this.getDefaultNarrative(type);
        }
    }

    static getDefaultNarrative(type) {
        const narratives = {
            combat_start: "The battle begins with tension thick in the air!",
            victory: "Victory is yours! The enemy falls defeated.",
            defeat: "You have been overcome. The world fades to black..."
        };
        return narratives[type] || "Something significant happens.";
    }

    static addToCombatLog(message, type = 'info') {
        this.combatState.combatLog.push({ message, type, timestamp: Date.now() });
        
        const logElement = document.getElementById('combat-log');
        if (logElement) {
            const entryDiv = document.createElement('div');
            entryDiv.className = `log-entry ${type}`;
            entryDiv.textContent = message;
            logElement.appendChild(entryDiv);
            logElement.scrollTop = logElement.scrollHeight;
        }
        
        // Also add to main game output for persistence
        if (typeof window.displayMessage === 'function') {
            const messageType = type === 'enemy-action' ? 'combat' : 
                              type === 'victory' ? 'success' : 
                              type === 'defeat' ? 'error' : 'info';
            window.displayMessage(message, messageType);
        }
    }

    static updateCombatUI(player, enemy) {
        // Update HP bars
        const playerHpBar = document.querySelector('.player-card .hp-fill');
        const playerHpText = document.querySelector('.player-card .hp-text');
        if (playerHpBar && playerHpText) {
            const playerHpPercent = (player.hp / player.maxHp) * 100;
            playerHpBar.style.width = `${playerHpPercent}%`;
            playerHpText.textContent = `${player.hp}/${player.maxHp} HP`;
        }
        
        const enemyHpBar = document.querySelector('.enemy-card .hp-fill');
        const enemyHpText = document.querySelector('.enemy-card .hp-text');
        if (enemyHpBar && enemyHpText) {
            const enemyHpPercent = (enemy.currentHp / enemy.maxHp) * 100;
            enemyHpBar.style.width = `${enemyHpPercent}%`;
            enemyHpText.textContent = `${enemy.currentHp}/${enemy.maxHp} HP`;
        }
        
        // Update main game stats
        if (typeof window.updatePlayerStatsDisplay === 'function') {
            window.updatePlayerStatsDisplay();
        }
    }

    static disableActionButtons() {
        const actionButtons = document.querySelectorAll('#combat-actions-panel .action-btn');
        actionButtons.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.5';
        });
    }

    static enableActionButtons() {
        const actionButtons = document.querySelectorAll('#combat-actions-panel .action-btn');
        actionButtons.forEach(btn => {
            btn.disabled = false;
            btn.style.opacity = '1';
        });
    }

    static async fleeCombat() {
        const fleeChance = 0.7;
        if (Math.random() < fleeChance) {
            this.addToCombatLog("You successfully flee from combat!", 'success');
            this.endCombat('flee', this.getPlayerReference(), this.combatState.currentEnemy);
        } else {
            this.addToCombatLog("You failed to escape! The enemy blocks your path!", 'error');
            // Enemy gets free attack
            setTimeout(() => this.processEnemyTurn(this.getPlayerReference(), this.combatState.currentEnemy), 1000);
        }
    }

    static async examineEnemy() {
        const enemy = this.combatState.currentEnemy;
        const examinePrompt = `
Provide tactical information about this enemy:

ENEMY: ${enemy.name}
HP: ${enemy.currentHp}/${enemy.maxHp}
Level: ${enemy.level || '?'}

Generate useful combat information like:
- Apparent weaknesses
- Behavioral patterns
- Suggested tactics
- Risk assessment

Keep it concise (2-3 sentences).
`;

        try {
            const response = await window.callGeminiAPI(examinePrompt, 0.7, 200, false);
            this.addToCombatLog(response || "You study the enemy carefully.", 'info');
        } catch (error) {
            this.addToCombatLog("You study the enemy carefully but learn little.", 'info');
        }
    }

    static toggleCombatHelp() {
        const helpDiv = document.getElementById('combat-help');
        if (helpDiv) {
            helpDiv.remove();
        } else {
            this.showCombatHelp();
        }
    }

    static showCombatHelp() {
        const helpDiv = document.createElement('div');
        helpDiv.id = 'combat-help';
        helpDiv.className = 'combat-help-panel';
        helpDiv.innerHTML = `
            <h4>Combat Help</h4>
            <ul>
                <li><strong>Basic Attack:</strong> Standard weapon attack</li>
                <li><strong>Power Attack:</strong> Higher damage, lower accuracy</li>
                <li><strong>Defend:</strong> Reduce incoming damage</li>
                <li><strong>Cast Spell:</strong> Use magical abilities</li>
                <li><strong>Use Item:</strong> Consume potions or tools</li>
                <li><strong>Reposition:</strong> Change tactical position</li>
                <li><strong>Examine:</strong> Learn about enemy weaknesses</li>
            </ul>
            <button onclick="CombatSystem.toggleCombatHelp()" class="close-help-btn">Close</button>
        `;
        
        const combatInterface = document.getElementById('advanced-combat-interface');
        if (combatInterface) {
            combatInterface.appendChild(helpDiv);
        }
    }

    static playCombatSound(soundEffect) {
        // Placeholder for audio system
        console.log(`Combat sound: ${soundEffect}`);
    }

    static addCombatStyles() {
        if (document.getElementById('combat-system-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'combat-system-styles';
        style.textContent = `
            .combat-interface-container {
                background: linear-gradient(135deg, #2d1810 0%, #3d2818 100%);
                border: 3px solid #8B4513;
                border-radius: 12px;
                padding: 20px;
                margin: 20px 0;
                box-shadow: 0 8px 25px rgba(0,0,0,0.5);
                font-family: 'Georgia', serif;
            }

            .combat-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 2px solid #8B4513;
            }

            .combat-title {
                color: #FFD700;
                font-size: 24px;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
                margin: 0;
            }

            .turn-indicator {
                background: #8B4513;
                padding: 8px 16px;
                border-radius: 20px;
                color: #F5DEB3;
                font-weight: bold;
            }

            .combat-main {
                display: grid;
                grid-template-columns: 1fr 2fr 1fr;
                gap: 20px;
                margin-bottom: 20px;
            }

            .combatant-card {
                background: rgba(139, 69, 19, 0.3);
                border: 2px solid #8B4513;
                border-radius: 8px;
                padding: 15px;
                text-align: center;
            }

            .combatant-card h4 {
                color: #FFD700;
                margin: 0 0 10px 0;
                font-size: 18px;
            }

            .hp-bar {
                position: relative;
                background: #2d1810;
                border: 2px solid #8B4513;
                border-radius: 10px;
                height: 25px;
                margin: 10px 0;
                overflow: hidden;
            }

            .hp-fill {
                height: 100%;
                background: linear-gradient(90deg, #4CAF50 0%, #8BC34A 100%);
                transition: width 0.5s ease;
                border-radius: 6px;
            }

            .enemy-hp .hp-fill {
                background: linear-gradient(90deg, #F44336 0%, #FF9800 100%);
            }

            .hp-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-weight: bold;
                text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
                font-size: 12px;
            }

            .combat-actions {
                display: grid;
                gap: 15px;
            }

            .action-category {
                background: rgba(245, 222, 179, 0.1);
                border-radius: 8px;
                padding: 12px;
            }

            .action-category h5 {
                color: #F5DEB3;
                margin: 0 0 8px 0;
                font-size: 14px;
                text-align: center;
            }

            .action-btn {
                width: 100%;
                padding: 8px 12px;
                margin: 2px 0;
                background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
                border: 2px solid #654321;
                border-radius: 6px;
                color: #F5DEB3;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 11px;
            }

            .action-btn:hover:not(:disabled) {
                background: linear-gradient(135deg, #A0522D 0%, #CD853F 100%);
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            }

            .action-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }

            .combat-log {
                background: rgba(245, 222, 179, 0.1);
                border: 2px solid #8B4513;
                border-radius: 8px;
                padding: 15px;
                height: 300px;
                overflow-y: auto;
            }

            .log-entry {
                margin: 5px 0;
                padding: 5px 8px;
                border-radius: 4px;
                font-size: 13px;
                line-height: 1.4;
            }

            .log-entry.narrative {
                background: rgba(255, 215, 0, 0.2);
                color: #FFD700;
                font-style: italic;
            }

            .log-entry.player-action {
                background: rgba(76, 175, 80, 0.2);
                color: #4CAF50;
            }

            .log-entry.enemy-action {
                background: rgba(244, 67, 54, 0.2);
                color: #F44336;
            }

            .log-entry.critical {
                background: rgba(255, 152, 0, 0.3);
                color: #FF9800;
                font-weight: bold;
            }

            .log-entry.victory {
                background: rgba(76, 175, 80, 0.3);
                color: #4CAF50;
                font-weight: bold;
            }

            .log-entry.defeat {
                background: rgba(244, 67, 54, 0.3);
                color: #F44336;
                font-weight: bold;
            }

            .environment-panel {
                background: rgba(245, 222, 179, 0.1);
                border: 2px solid #8B4513;
                border-radius: 8px;
                padding: 12px;
            }

            .environment-panel h5 {
                color: #F5DEB3;
                margin: 0 0 10px 0;
                text-align: center;
            }

            .environment-details p {
                margin: 5px 0;
                font-size: 12px;
                color: #D2B48C;
            }

            .combat-footer {
                display: flex;
                justify-content: center;
                gap: 15px;
                padding-top: 15px;
                border-top: 2px solid #8B4513;
            }

            .combat-btn {
                padding: 10px 20px;
                background: linear-gradient(135deg, #654321 0%, #8B4513 100%);
                border: 2px solid #8B4513;
                border-radius: 8px;
                color: #F5DEB3;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .combat-btn:hover {
                background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
                transform: translateY(-2px);
            }

            .combat-help-panel {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #2d1810;
                border: 3px solid #8B4513;
                border-radius: 10px;
                padding: 20px;
                z-index: 1000;
                color: #F5DEB3;
                box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            }

            .combat-help-panel h4 {
                color: #FFD700;
                text-align: center;
                margin-bottom: 15px;
            }

            .combat-help-panel ul {
                list-style: none;
                padding: 0;
            }

            .combat-help-panel li {
                margin: 8px 0;
                padding: 5px;
                background: rgba(139, 69, 19, 0.3);
                border-radius: 4px;
            }

            .close-help-btn {
                display: block;
                margin: 15px auto 0;
                padding: 8px 16px;
                background: #8B4513;
                border: none;
                border-radius: 6px;
                color: #F5DEB3;
                cursor: pointer;
            }

            @media (max-width: 768px) {
                .combat-main {
                    grid-template-columns: 1fr;
                    gap: 15px;
                }
                
                .action-btn {
                    font-size: 10px;
                    padding: 6px 8px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Make CombatSystem globally available
if (typeof window !== 'undefined') {
    window.CombatSystem = CombatSystem;
}

export default CombatSystem;
