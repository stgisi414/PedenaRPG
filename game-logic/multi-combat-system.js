
// Multi-Member Combat System
class MultiCombatSystem {
    constructor(partyManager) {
        this.partyManager = partyManager;
        this.turnOrder = [];
        this.currentTurnIndex = 0;
        this.enemies = [];
        this.combatLog = [];
        this.round = 1;
        this.isActive = false;
    }

    // Start multi-member combat
    startCombat(player, enemies) {
        this.isActive = true;
        this.round = 1;
        this.currentTurnIndex = 0;
        this.combatLog = [];
        this.enemies = this.prepareEnemies(enemies);
        
        // Get all combatants
        const partyMembers = this.partyManager.getAllMembers(player);
        const allCombatants = [...partyMembers, ...this.enemies];
        
        // Roll initiative and create turn order
        this.turnOrder = this.rollInitiative(allCombatants);
        
        this.addToCombatLog(`🏁 Combat begins! Round ${this.round}`);
        this.addToCombatLog(`Initiative order: ${this.turnOrder.map(c => c.name).join(' → ')}`);
        
        return {
            success: true,
            turnOrder: this.turnOrder,
            currentTurn: this.getCurrentTurn(),
            combatLog: this.combatLog
        };
    }

    // Prepare enemies for combat
    prepareEnemies(enemies) {
        if (!Array.isArray(enemies)) {
            enemies = [enemies];
        }

        return enemies.map((enemy, index) => ({
            id: `enemy_${index}`,
            name: enemy.name || `Enemy ${index + 1}`,
            type: 'enemy',
            health: enemy.health || 15,
            maxHealth: enemy.health || 15,
            ac: enemy.ac || 12,
            damage: enemy.damage || '1d6',
            abilities: enemy.abilities || [],
            isEnemy: true,
            initiative: 0
        }));
    }

    // Roll initiative for all combatants
    rollInitiative(combatants) {
        combatants.forEach(combatant => {
            combatant.initiative = this.rollD20() + this.getInitiativeBonus(combatant);
        });

        // Sort by initiative (highest first)
        return combatants.sort((a, b) => b.initiative - a.initiative);
    }

    // Get initiative bonus based on type
    getInitiativeBonus(combatant) {
        if (combatant.type === 'player') return 2; // Player gets bonus
        if (combatant.type === 'npc') return 1; // NPCs get small bonus
        return 0; // Enemies get no bonus
    }

    // Get current turn combatant
    getCurrentTurn() {
        if (!this.isActive || this.turnOrder.length === 0) return null;
        return this.turnOrder[this.currentTurnIndex];
    }

    // Process turn for current combatant
    async processTurn(action, targetId = null) {
        const currentCombatant = this.getCurrentTurn();
        if (!currentCombatant) return { success: false, message: "No active turn" };

        let result = { success: false, message: "Invalid action" };

        switch (action) {
            case 'attack':
                result = this.processAttack(currentCombatant, targetId);
                break;
            case 'defend':
                result = this.processDefend(currentCombatant);
                break;
            case 'ability':
                result = this.processAbility(currentCombatant, targetId);
                break;
            case 'flee':
                result = this.processFlee(currentCombatant);
                break;
        }

        if (result.success) {
            this.addToCombatLog(result.message);
            this.nextTurn();
            
            // Check for combat end conditions
            const combatStatus = this.checkCombatStatus();
            if (combatStatus.ended) {
                return { ...result, combatEnded: true, ...combatStatus };
            }
        }

        return {
            ...result,
            currentTurn: this.getCurrentTurn(),
            turnOrder: this.turnOrder,
            combatLog: this.combatLog,
            round: this.round
        };
    }

    // Process attack action
    processAttack(attacker, targetId) {
        const targets = targetId ? 
            this.turnOrder.filter(c => c.id === targetId) : 
            this.getValidTargets(attacker);

        if (targets.length === 0) {
            return { success: false, message: "No valid targets" };
        }

        const target = targets[0];
        const attackRoll = this.rollD20();
        const hitChance = 10 + this.getAttackBonus(attacker);

        if (attackRoll >= target.ac - hitChance) {
            const damage = this.rollDamage(attacker.damage);
            target.health = Math.max(0, target.health - damage);
            
            let message = `💥 ${attacker.name} hits ${target.name} for ${damage} damage!`;
            if (target.health <= 0) {
                message += ` ${target.name} is defeated!`;
            }
            
            return { success: true, message, damage, target: target.id };
        } else {
            return { 
                success: true, 
                message: `❌ ${attacker.name} misses ${target.name}!`,
                damage: 0,
                target: target.id
            };
        }
    }

    // Process defend action
    processDefend(defender) {
        defender.defending = true;
        return {
            success: true,
            message: `🛡️ ${defender.name} takes a defensive stance! (+2 AC until next turn)`
        };
    }

    // Process ability action
    processAbility(caster, targetId) {
        if (!caster.abilities || caster.abilities.length === 0) {
            return { success: false, message: `${caster.name} has no abilities to use` };
        }

        const ability = caster.abilities[0]; // Use first available ability
        const targets = this.getAbilityTargets(caster, ability, targetId);

        let message = `✨ ${caster.name} uses ${ability}!`;
        
        if (ability.includes('heal')) {
            targets.forEach(target => {
                const healing = this.rollD20() / 2;
                target.health = Math.min(target.maxHealth, target.health + healing);
                message += ` ${target.name} heals for ${healing}!`;
            });
        } else if (ability.includes('damage')) {
            targets.forEach(target => {
                const damage = this.rollDamage('2d6');
                target.health = Math.max(0, target.health - damage);
                message += ` ${target.name} takes ${damage} damage!`;
            });
        }

        return { success: true, message };
    }

    // Process flee attempt
    processFlee(fleer) {
        const fleeRoll = this.rollD20();
        if (fleeRoll >= 12) {
            this.endCombat('fled');
            return {
                success: true,
                message: `💨 ${fleer.name} successfully flees from combat!`,
                combatEnded: true,
                result: 'fled'
            };
        } else {
            return {
                success: true,
                message: `❌ ${fleer.name} fails to flee!`
            };
        }
    }

    // AI turn for NPCs and enemies
    async processAITurn() {
        const currentCombatant = this.getCurrentTurn();
        if (!currentCombatant || currentCombatant.type === 'player') return;

        // Simple AI logic
        if (currentCombatant.health < currentCombatant.maxHealth * 0.3 && 
            currentCombatant.abilities && currentCombatant.abilities.includes('heal')) {
            return this.processTurn('ability');
        } else {
            const targets = this.getValidTargets(currentCombatant);
            if (targets.length > 0) {
                return this.processTurn('attack', targets[0].id);
            }
        }

        return this.processTurn('defend');
    }

    // Get valid targets for attacker
    getValidTargets(attacker) {
        if (attacker.isEnemy) {
            return this.turnOrder.filter(c => !c.isEnemy && c.health > 0);
        } else {
            return this.turnOrder.filter(c => c.isEnemy && c.health > 0);
        }
    }

    // Get ability targets
    getAbilityTargets(caster, ability, targetId) {
        if (ability.includes('group') || ability.includes('party')) {
            return this.turnOrder.filter(c => !c.isEnemy && c.health > 0);
        } else if (targetId) {
            return this.turnOrder.filter(c => c.id === targetId);
        } else {
            return this.getValidTargets(caster);
        }
    }

    // Move to next turn
    nextTurn() {
        // Remove defending status
        if (this.turnOrder[this.currentTurnIndex]) {
            this.turnOrder[this.currentTurnIndex].defending = false;
        }

        this.currentTurnIndex++;
        
        if (this.currentTurnIndex >= this.turnOrder.length) {
            this.currentTurnIndex = 0;
            this.round++;
            this.addToCombatLog(`\n🔄 Round ${this.round} begins!`);
        }

        // Skip defeated combatants
        while (this.getCurrentTurn() && this.getCurrentTurn().health <= 0) {
            this.currentTurnIndex++;
            if (this.currentTurnIndex >= this.turnOrder.length) {
                this.currentTurnIndex = 0;
                this.round++;
            }
        }
    }

    // Check if combat should end
    checkCombatStatus() {
        const livingAllies = this.turnOrder.filter(c => !c.isEnemy && c.health > 0);
        const livingEnemies = this.turnOrder.filter(c => c.isEnemy && c.health > 0);

        if (livingEnemies.length === 0) {
            this.endCombat('victory');
            return { ended: true, result: 'victory', message: "🎉 Victory! All enemies defeated!" };
        }

        if (livingAllies.length === 0) {
            this.endCombat('defeat');
            return { ended: true, result: 'defeat', message: "💀 Defeat! All party members defeated!" };
        }

        return { ended: false };
    }

    // End combat
    endCombat(result) {
        this.isActive = false;
        this.addToCombatLog(`\n🏁 Combat ended: ${result}`);
    }

    // Utility functions
    rollD20() {
        return Math.floor(Math.random() * 20) + 1;
    }

    rollDamage(diceString) {
        // Simple dice roller - handles format like "1d6", "2d8", etc.
        const [count, sides] = diceString.split('d').map(n => parseInt(n));
        let total = 0;
        for (let i = 0; i < count; i++) {
            total += Math.floor(Math.random() * sides) + 1;
        }
        return total;
    }

    getAttackBonus(combatant) {
        let bonus = Math.floor(combatant.level / 2) || 0;
        if (combatant.equipment && combatant.equipment.mainHand) {
            bonus += 1; // weapon bonus
        }
        return bonus;
    }

    addToCombatLog(message) {
        this.combatLog.push(message);
    }

    // Get combat UI data
    getCombatState() {
        return {
            isActive: this.isActive,
            round: this.round,
            turnOrder: this.turnOrder,
            currentTurn: this.getCurrentTurn(),
            combatLog: this.combatLog,
            livingAllies: this.turnOrder.filter(c => !c.isEnemy && c.health > 0),
            livingEnemies: this.turnOrder.filter(c => c.isEnemy && c.health > 0)
        };
    }
}

// Export for use in other modules
window.MultiCombatSystem = MultiCombatSystem;
