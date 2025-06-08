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

    static async initiateCombat(playerInstance, enemy, environment = null) {
        console.log(`[CS_INIT] initiateCombat received playerInstance: HP=<span class="math-inline">${playerInstance.hp}/${playerInstance.maxHp}</span>`);

        if (window.player) {
            console.log(`[CS_INIT] At START of initiateCombat, window.player (global) HP: <span class="math-inline">${window.player.hp}/${window.player.maxHp}</span>`);
            console.log(`[CS_INIT] At START, is param player === window.player? ${player === window.player}`);
        } else {
            console.log(`[CS_INIT] At START of initiateCombat, window.player is not defined!`);
        }

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
        if (window.player) {
            console.log(`[CS_INIT] BEFORE await generateCombatEnvironment: window.player (global) HP: <span class="math-inline">${window.player.hp}/${window.player.maxHp}</span>`);
        }
        await this.generateCombatEnvironment(playerInstance, enemy, environment);
        if (window.player) {
            // THIS IS THE CRITICAL CHECK:
            console.log(`[CS_INIT] AFTER await generateCombatEnvironment: window.player (global) HP: <span class="math-inline">${window.player.hp}/${window.player.maxHp}</span>`);
        }

        // Display combat start in main game output
        this.displayCombatStart(playerInstance, enemy);

        // Start first turn
        if (this.combatState.turnOrder[0] === 'enemy') {
            setTimeout(() => this.processEnemyTurn(playerInstance, enemy), 2000);
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
        // Try multiple ways to get the player object
        if (typeof window !== 'undefined' && window.player) {
            console.log("[getPlayerReference] Condition 1: Returning 'window.player'.");
            console.log(`[getPlayerReference] 'window.player' HP: ${window.player.hp}/${window.player.maxHp}`); // Log its state
            return window.player;
        }
        // This 'player' would refer to a global variable 'player' if CombatSystem.js is not a module,
        // or if 'player' is in its immediate outer scope. Unlikely to be the script.js module 'player'.
        if (typeof player !== 'undefined') {
            console.log("[getPlayerReference] Condition 2: Returning 'player' (global or outer scope).");
            console.log(`[getPlayerReference] 'player' (global or outer scope) HP: ${player.hp}/${player.maxHp}`); // Log its state
            return player;
        }
        if (typeof window !== 'undefined' && window.globalThis && window.globalThis.player) {
            console.log("[getPlayerReference] Condition 3: Returning 'window.globalThis.player'.");
            console.log(`[getPlayerReference] 'window.globalThis.player' HP: ${window.globalThis.player.hp}/${window.globalThis.player.maxHp}`); // Log its state
            return window.globalThis.player;
        }
        // Last resort fallback
        console.error("CombatSystem: Could not find player object! This is a critical error.");
        return null;
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
        console.log(`[CS_DISPLAY_START] Using THE PASSED 'player' PARAMETER for HP: HP=${player.hp}/${player.maxHp}`);

        if (typeof window.displayMessage === 'function') {
            // Always use the global player reference for correct HP values
            const actualPlayer = this.getPlayerReference();
            if (!actualPlayer) {
                console.error("CombatSystem.displayCombatStart: actualPlayer from getPlayerReference() is null.");
                // Fallback if actualPlayer (from window.player) is null,
                // you might want to use the 'player' parameter passed to displayCombatStart as a direct fallback.
                if (player) { // Check if the 'player' parameter to this function is valid
                     console.log(`[COMBATSYSTEM.JS] displayCombatStart FALLBACK using passed 'player' param: HP=${player.hp}/${player.maxHp}`);
                     if (typeof window.displayMessage === 'function') {
                        // Potentially display using 'player.hp' if actualPlayer is not found.
                        // This depends on whether 'player' passed here is guaranteed to be up-to-date.
                         window.displayMessage(`<span class="math-inline">${playerToDisplay.name} (${playerToDisplay.hp}/${playerToDisplay.maxHp} HP)</span> vs <span class="math-inline">${enemy.name} (${enemy.currentHp}/${enemy.maxHp} HP)`, 'combat</span>');

                         if (typeof window.updatePlayerStatsDisplay === 'function') {
                             // updatePlayerStatsDisplay in script.js will use window.player.
                             // This is fine if you also ensure window.player is kept in sync (Solution 1).
                             // If not, changes made to playerToDisplay here won't reflect in main UI unless playerToDisplay IS window.player.
                             window.updatePlayerStatsDisplay();
                         }

                     }
                }
                return;
            }
            console.log(`[COMBATSYSTEM.JS] displayCombatStart using actualPlayer (from getPlayerReference): HP=${actualPlayer.hp}/${actualPlayer.maxHp}`);

            if (typeof window.displayMessage === 'function') {
                window.displayMessage("⚔️ COMBAT BEGINS!", 'combat');
                if (this.combatState.environment && this.combatState.environment.description) {
                     window.displayMessage(this.combatState.environment.description, 'combat');
                }
                // This message correctly uses actualPlayer from getPlayerReference
                window.displayMessage(`${actualPlayer.name} (${actualPlayer.hp}/${actualPlayer.maxHp} HP) vs ${enemy.name} (${enemy.currentHp}/${enemy.maxHp} HP)`, 'combat');

                const turnOrderMessage = this.combatState.turnOrder[0] === 'player' ? 'You act first!' : `${enemy.name} acts first!`;
                window.displayMessage(`Turn ${this.combatState.turnNumber}: ${turnOrderMessage}`, 'combat');

                if (typeof window.updatePlayerStatsDisplay === 'function') {
                    window.updatePlayerStatsDisplay();
                }
            }
        }
    }

    static displayPlayerTurnOptions() {
        if (typeof window.displayMessage === 'function') {
            window.displayMessage("🗡️ Your turn! Choose your action:", 'combat');
            window.displayMessage("Commands: 'attack', 'defend', 'cast spell', 'use item', 'examine enemy', 'flee'", 'info');
        }
    }

    static async processPlayerAction(currentPlayer, enemy, actionType, command) {
        if (!this.combatState.isActive) return;

        // Always use the actual player object from global reference
        const actualPlayer = this.getPlayerReference();
        if (!actualPlayer) {
            console.error("CombatSystem: Could not get player reference for action processing");
            return;
        }
        const actionPrompt = this.buildPlayerActionPrompt(currentPlayer, enemy, actionType, command);

        try {
            const response = await window.callGeminiAPI(actionPrompt, 0.8, 500, false);
            const actionResult = this.parseActionResponse(response, actionType);

            await this.applyActionResults(actionResult, currentPlayer, enemy, 'player');

            // Check for combat end
            if (this.checkCombatEnd(currentPlayer, enemy)) {
                return;
            }

            // Progress to next turn
            this.nextTurn(currentPlayer, enemy);

        } catch (error) {
            console.error('Error processing player action:', error);
            const fallbackResult = this.getFallbackActionResult(actionType);
            await this.applyActionResults(fallbackResult, player, enemy, 'player');
            this.nextTurn(player, enemy);
        }
    }

    static buildPlayerActionPrompt(currentPlayer, enemy, actionType, command) {

        // Get complete character progression for AI context
        const progression = typeof window !== 'undefined' && window.CharacterManager ? 
            window.CharacterManager.getCharacterProgression(currentPlayer) : null;

        const contextData = {
            turn: this.combatState.turnNumber,
            player: {
                name: currentPlayer.name,
                class: currentPlayer.class,
                level: currentPlayer.level,
                hp: currentPlayer.hp,
                maxHp: currentPlayer.maxHp,
                exp: currentPlayer.exp,
                gold: currentPlayer.gold,
                weapon: currentPlayer.equipment?.mainHand?.name || 'unarmed',
                armor: this.calculatePlayerDefense(currentPlayer),
                stats: currentPlayer.stats || {},
                equipment: currentPlayer.equipment || {},
                inventory: currentPlayer.inventory || [],
                // Complete progression data
                progression: progression ? {
                    knownSpells: progression.spells.known.map(s => ({
                        name: s.name,
                        level: s.definition?.level || 'Unknown',
                        description: s.definition?.description || 'No description'
                    })),
                    cantrips: progression.cantrips.map(c => ({
                        name: c.name,
                        description: c.definition?.description || 'No description'
                    })),
                    abilities: progression.abilities.map(a => ({
                        name: a.name,
                        description: a.definition?.description || 'No description',
                        cooldown: a.definition?.cooldown || 0
                    })),
                    feats: progression.feats.map(f => ({
                        name: f.name,
                        description: f.definition?.description || 'No description'
                    })),
                    spellSlots: progression.spellSlots || {},
                    features: progression.features || []
                } : null
            },
            enemy: {
                name: enemy.name,
                hp: enemy.currentHp,
                maxHp: enemy.maxHp,
                type: enemy.type || 'creature',
                level: enemy.level || 1,
                attack: enemy.attack || 8,
                defense: enemy.defense || 0
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

IMPORTANT: The player has access to ALL their spells, abilities, cantrips, and inventory items listed above.
- Consider their full spell repertoire when they attempt to cast spells
- Factor in their class abilities and feats for enhanced effects
- Account for their equipment and inventory for tactical options
- Respect spell slot limitations and ability cooldowns

Process this combat action and respond with ONLY valid JSON:
{
    "success": true/false,
    "narrative": "Detailed 2-3 sentence description of what happens",
    "damage": 0,
    "playerHpChange": 0,
    "enemyHpChange": 0,
    "effects": [],
    "criticalHit": false,
    "actionComplete": true/false,
    "spellSlotUsed": 0,
    "abilityUsed": "",
    "itemUsed": ""
}

Rules:
- Make combat dramatic and engaging
- Consider player's FULL progression: spells, abilities, feats, equipment, inventory
- For spell casting: Check if player knows the spell and has appropriate spell slots
- For abilities: Consider cooldowns and usage limitations
- Critical hits occur ~10% of the time on attacks, more often with certain feats
- Defensive actions reduce incoming damage
- Failed actions should still have narrative descriptions
- Scale damage based on spell level, abilities, and equipment (5-50+ for high-level spells)
- Factor in feats like "Spell Power" for enhanced spell damage
- Consider metamagic options and spell modifications from feats
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
        // Always use the actual player object from global reference
        const actualPlayer = this.getPlayerReference();
        if (!actualPlayer) {
            console.error("CombatSystem: Could not get player reference for enemy turn processing");
            return;
        }

        const enemyPrompt = this.buildEnemyActionPrompt(actualPlayer, enemy);

        try {
            const response = await window.callGeminiAPI(enemyPrompt, 0.8, 500, false);
            const actionResult = this.parseActionResponse(response, 'enemy_action');

            // Check if enemy is fleeing based on narrative
            if (this.checkEnemyFlee(actionResult, response)) {
                this.endCombat('enemy_fled', actualPlayer, enemy);
                return;
            }

            await this.applyActionResults(actionResult, actualPlayer, enemy, 'enemy');

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
                attack: enemy.attack || 8,
                defense: enemy.defense || 0
            },
            player: {
                name: player.name,
                class: player.class,
                level: player.level,
                hp: player.hp,
                maxHp: player.maxHp,
                defense: this.calculatePlayerDefense(player),
                stats: player.stats || {},
                equipment: player.equipment || {},
                // Basic spell/ability awareness for enemy tactics
                hasSpells: player.classProgression?.knownSpells?.length > 0,
                spellcasterLevel: player.level,
                armorClass: this.calculatePlayerDefense(player) + 10
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

IMPORTANT COMBAT GUIDELINES:
- Enemies fight bravely and aggressively by default
- Only consider fleeing when critically wounded (below 25% HP) AND clearly outmatched
- Most creatures will fight to the death rather than flee
- Intelligent creatures may flee when facing certain death
- If the enemy does flee, it must be VERY explicit: set "fled": true and use phrases like "flees from combat", "abandons the fight completely", or "the encounter is over"

FLEEING RESTRICTIONS:
- Do NOT flee unless enemy HP is critically low (under 25%)
- Do NOT use ambiguous language that could be misinterpreted as fleeing
- Avoid words like "moves away", "steps back", "retreats temporarily" unless actually fleeing
- Focus on aggressive combat actions: attacks, special abilities, defensive maneuvers

Respond with ONLY valid JSON:
{
    "success": true,
    "narrative": "2-3 sentence description of enemy action - be explicit if fleeing",
    "damage": 0,
    "playerHpChange": 0,
    "enemyHpChange": 0,
    "effects": [],
    "actionComplete": true,
    "fled": false
}

Make the enemy fight courageously and only flee when facing certain death with clear, unambiguous language.
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

    static checkEnemyFlee(actionResult, response) {
        // Check for explicit fled flag in JSON response
        if (actionResult.fled === true) {
            return true;
        }

        // Only check for flee if enemy is critically wounded (below 25% HP)
        const enemy = this.combatState.currentEnemy;
        if (!enemy || enemy.currentHp > (enemy.maxHp * 0.25)) {
            return false;
        }

        // Very specific flee keywords that clearly indicate escape
        const strictFleeKeywords = [
            'flees from combat', 'escapes from the battle', 'retreats completely',
            'abandons the fight', 'vanishes from sight', 'disappears into',
            'the fight is over', 'combat ends as', 'encounter is over'
        ];

        const narrative = (actionResult.narrative || '').toLowerCase();
        const fullResponse = (response || '').toLowerCase();

        // Only trigger flee on very explicit indicators
        const hasExplicitFlee = strictFleeKeywords.some(keyword =>
            narrative.includes(keyword) || fullResponse.includes(keyword)
        );

        // Additional check for complete phrases that indicate fleeing
        const fleePatterns = [
            /the .+ (has )?(fled|escaped|vanished|disappeared) (completely|entirely|from sight)/,
            /combat (is |has )?over.+escaped/,
            /encounter (ends|is over).+flee/
        ];

        const hasFleePattern = fleePatterns.some(pattern =>
            pattern.test(narrative) || pattern.test(fullResponse)
        );

        return hasExplicitFlee || hasFleePattern;
    }

    static async applyActionResults(result, player, enemy, actor) {
        // Get the actual player reference
        const actualPlayer = this.getPlayerReference() || player;

        // Apply HP changes
        if (result.enemyHpChange && actor === 'player') {
            enemy.currentHp = Math.max(0, enemy.currentHp + result.enemyHpChange);
            enemy.hp = enemy.currentHp;
        }

        if (result.playerHpChange && actor === 'enemy') {
            const defense = this.calculatePlayerDefense(actualPlayer);
            const actualDamage = Math.max(1, Math.abs(result.playerHpChange) - defense);
            actualPlayer.hp = Math.max(0, actualPlayer.hp - actualDamage);

            if (defense > 0 && actualDamage !== Math.abs(result.playerHpChange)) {
                if (typeof window.displayMessage === 'function') {
                    window.displayMessage(`Your armor absorbs ${Math.abs(result.playerHpChange) - actualDamage} damage!`, 'combat');
                }
            }
        }

        // Process spell slot usage and ability cooldowns for player actions
        if (actor === 'player' && actualPlayer.classProgression) {
            if (result.spellSlotUsed && result.spellSlotUsed > 0) {
                // Deduct spell slot usage (this would need to be implemented in CharacterManager)
                if (typeof window.displayMessage === 'function') {
                    window.displayMessage(`Used a level ${result.spellSlotUsed} spell slot.`, 'info');
                }
            }
            
            if (result.abilityUsed && typeof window.CharacterManager !== 'undefined') {
                // Mark ability as used (CharacterManager handles cooldowns)
                window.CharacterManager.useAbility(actualPlayer, result.abilityUsed);
            }

            if (result.itemUsed && actualPlayer.inventory) {
                // Handle item consumption if needed
                if (typeof window.displayMessage === 'function') {
                    window.displayMessage(`Used ${result.itemUsed}.`, 'info');
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

            // Display current HP status using actual player values
            const playerHpStatus = `${actualPlayer.name}: ${actualPlayer.hp}/${actualPlayer.maxHp} HP`;
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
            // Always use the actual player object from global reference
            const actualPlayer = this.getPlayerReference();
            setTimeout(() => this.processEnemyTurn(actualPlayer, enemy), 1500);
        }
    }

    static checkCombatEnd(player, enemy) {
        // Always use the actual player object from global reference
        const actualPlayer = this.getPlayerReference();
        if (!actualPlayer) {
            console.error("CombatSystem: Could not get player reference for combat end check");
            return false;
        }

        if (actualPlayer.hp <= 0) {
            this.endCombat('defeat', actualPlayer, enemy);
            return true;
        } else if (enemy.currentHp <= 0) {
            this.endCombat('victory', actualPlayer, enemy);
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
        } else if (result === 'enemy_fled') {
            if (typeof window.displayMessage === 'function') {
                window.displayMessage("💨 The enemy has fled from combat!", 'info');
                window.displayMessage("You remain victorious on the battlefield.", 'success');
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

    // Generate specific enemy encounter based on player command
    static async generateSpecificEnemyEncounter(command, player) {
        const enemyInterpretationPrompt = `
ENEMY ENCOUNTER INTERPRETATION

Player Command: "${command}"
Current Location: ${player.currentLocation}
Player Level: ${player.level}
Player Class: ${player.class}

TASK: Analyze the command to determine what specific enemy the player wants to attack.

Consider:
1. What creature type is mentioned in the command?
2. Does this creature make sense in the current location?
3. What would be an appropriate power level for the player's level?
4. If no specific creature is mentioned, what would be a logical enemy for this location?

Respond with ONLY valid JSON:
{
    "enemyFound": true/false,
    "enemyName": "specific enemy name",
    "enemyType": "Beast/Humanoid/Undead/Elemental/Giant/Dragon/Fey",
    "baseHp": 20,
    "baseAttack": 10,
    "baseDefense": 2,
    "level": 2,
    "description": "brief description of why this enemy is here",
    "narrative": "1-2 sentence description of the encounter setup",
    "plausible": true/false,
    "reason": "explanation of why this enemy does/doesn't make sense here"
}

ENEMY GUIDELINES:
- HP: 15-80 based on level and type
- Attack: 8-30 based on level and type  
- Defense: 1-8 based on level and type
- Level should be within ±2 of player level
- Enemy name should match what was mentioned or be appropriate for location

LOCATION-APPROPRIATE ENEMIES:
- Towns/Cities: Bandits, Thieves, Guards, Cultists
- Wilderness: Wolves, Bears, Goblins, Orcs
- Dungeons: Skeletons, Zombies, Traps, Dark creatures
- Mountains: Giants, Dragons, Stone creatures
- Forests: Wolves, Fey creatures, Rangers
- Deserts: Sand creatures, Nomads, Elementals
- Spires/Towers: Wraiths, Mages, Constructs

If the requested enemy doesn't make sense for the location, set plausible to false and explain why.
If no enemy is mentioned, suggest an appropriate one for the location.
`;

        try {
            const response = await window.callGeminiAPI(enemyInterpretationPrompt, 0.8, 600, false);
            if (!response) return null;

            const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

            if (jsonMatch) {
                const enemyData = JSON.parse(jsonMatch[0]);

                if (!enemyData.plausible) {
                    if (typeof window.displayMessage === 'function') {
                        window.displayMessage(`${enemyData.reason}`, 'error');
                    }
                    return null;
                }

                if (enemyData.enemyFound) {
                    // Scale enemy based on player level
                    const levelDifference = Math.max(0, player.level - enemyData.level);
                    const scaledEnemy = {
                        name: levelDifference > 0 ? `Veteran ${enemyData.enemyName}` : enemyData.enemyName,
                        hp: enemyData.baseHp + (levelDifference * 5),
                        maxHp: enemyData.baseHp + (levelDifference * 5),
                        currentHp: enemyData.baseHp + (levelDifference * 5),
                        attack: enemyData.baseAttack + (levelDifference * 2),
                        defense: enemyData.baseDefense + levelDifference,
                        level: Math.max(enemyData.level, player.level - 1),
                        type: enemyData.enemyType,
                        description: enemyData.description
                    };

                    return {
                        enemy: scaledEnemy,
                        narrative: enemyData.narrative
                    };
                }
            }
        } catch (error) {
            console.error('Error generating specific enemy encounter:', error);
        }

        return null;
    }

    // Helper method to process combat commands from the main game loop
    static async handleCombatCommand(command) {
        if (!this.combatState.isActive) return false;

        const actualPlayer = this.getPlayerReference();
        const enemy = this.combatState.currentEnemy;

        if (!actualPlayer) {
            console.error("CombatSystem: Could not get player reference for combat command");
            return false;
        }

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

        await this.processPlayerAction(actualPlayer, enemy, actionType, command);
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

    // Clear combat state when traveling or changing locations
    static clearCombatState() {
        if (this.combatState.isActive) {
            if (typeof window.displayMessage === 'function') {
                window.displayMessage("💨 You leave the combat behind as you travel to a new location.", 'info');
            }
            
            // Clear player's enemy reference
            const player = this.getPlayerReference();
            if (player) {
                player.currentEnemy = null;
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
    }
}

// Make CombatSystem globally available
if (typeof window !== 'undefined') {
    window.CombatSystem = CombatSystem;
}