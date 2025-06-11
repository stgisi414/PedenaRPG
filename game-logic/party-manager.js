
// Party Management System for Multi-Member Combat
export class PartyManager {
    constructor() {
        this.party = [];
        this.maxPartySize = 4;
        this.formation = 'line'; // line, circle, wedge, defensive
        this.combatPositions = new Map();
    }

    // Add NPC to partyconst enhancedItem = await this.enhanc
    addMember(npc) {
        if (this.party.length >= this.maxPartySize) {
            return { success: false, message: "Party is full! Maximum 4 members allowed." };
        }

        // --- FIX: Check for member by name to prevent duplicates ---
        if (this.party.find(member => member.name.toLowerCase() === npc.name.toLowerCase())) {
            return { success: false, message: `${npc.name} is already in your party.` };
        }

        // Convert NPC to party member format
        const partyMember = {
            id: npc.id || `npc_${Date.now()}`,
            name: npc.name,
            type: 'npc',
            level: npc.level || 1,
            health: npc.health || 20,
            maxHealth: npc.maxHealth || 20,
            ac: npc.ac || 12,
            damage: npc.damage || '1d6',
            skills: npc.skills || [],
            equipment: npc.equipment || {},
            abilities: npc.abilities || [],
            loyalty: npc.loyalty || 50,
            isPlayer: false,
            position: this.getNextPosition()
        };

        this.party.push(partyMember);
        this.updateFormation();
        return { 
            success: true, 
            message: `${npc.name} joins your party! (${this.party.length}/${this.maxPartySize})` 
        };
    }

    // Remove member from party
    removeMember(memberId) {
        const memberIndex = this.party.findIndex(member => member.id === memberId);
        if (memberIndex === -1) {
            return { success: false, message: "Member not found in party." };
        }

        const member = this.party[memberIndex];
        this.party.splice(memberIndex, 1);
        this.updateFormation();
        return { 
            success: true, 
            message: `${member.name} leaves the party.` 
        };
    }

    // Get all party members including player
    getAllMembers(player) {
        const playerMember = {
            id: 'player',
            name: player.name,
            type: 'player',
            level: player.level,
            health: player.hp,         // <-- FIX: Changed from player.health
            maxHealth: player.maxHp,   // <-- FIX: Changed from player.maxHealth
            ac: player.ac || 12,
            damage: this.getPlayerDamage(player),
            skills: player.skills || [],
            equipment: player.equipment || {},
            abilities: player.abilities || [],
            isPlayer: true,
            position: 'front'
        };

        return [playerMember, ...this.party];
    }

    // Get living party members
    getLivingMembers(player) {
        return this.getAllMembers(player).filter(member => member.health > 0);
    }

    // Update party formation
    updateFormation() {
        const positions = ['front', 'left_flank', 'right_flank', 'rear'];
        this.party.forEach((member, index) => {
            member.position = positions[index] || 'rear';
        });
    }

    // Get next available position
    getNextPosition() {
        const positions = ['front', 'left_flank', 'right_flank', 'rear'];
        const usedPositions = this.party.map(member => member.position);
        return positions.find(pos => !usedPositions.includes(pos)) || 'rear';
    }

    // Get player damage based on equipment
    getPlayerDamage(player) {
        const weapon = player.equipment?.mainHand;
        if (weapon && weapon.damage) {
            return weapon.damage;
        }
        return '1d4'; // unarmed
    }

    // Party commands interface
    getPartyCommands() {
        if (this.party.length === 0) {
            return [];
        }

        return [
            { text: "👥 Party Status", action: "showPartyStatus" },
            { text: "📊 Formation", action: "showFormation" },
            { text: "💊 Group Heal", action: "groupHeal" },
            { text: "👋 Dismiss Member", action: "dismissMember" }
        ];
    }

    // Check if party has specific skills
    hasPartySkill(skillName) {
        return this.party.some(member => 
            member.skills && member.skills.includes(skillName)
        );
    }

    // Calculate party bonuses
    getPartyBonuses() {
        const bonuses = {
            attack: 0,
            defense: 0,
            health: 0,
            special: []
        };

        this.party.forEach(member => {
            if (member.abilities) {
                member.abilities.forEach(ability => {
                    if (ability.includes('attack_bonus')) bonuses.attack += 1;
                    if (ability.includes('defense_bonus')) bonuses.defense += 1;
                    if (ability.includes('group_heal')) bonuses.special.push('group_heal');
                });
            }
        });

        return bonuses;
    }

    // Distribute experience among party
    distributeExperience(totalXP) {
        const activeMembers = this.party.filter(member => member.health > 0);
        if (activeMembers.length === 0) return 0;

        const xpPerMember = Math.floor(totalXP / (activeMembers.length + 1)); // +1 for player
        
        // Update NPC experience (simplified - they don't level up like player)
        activeMembers.forEach(member => {
            member.experience = (member.experience || 0) + xpPerMember;
        });

        return xpPerMember; // return player's share
    }

    // Save party state
    getSaveData() {
        return {
            party: this.party,
            formation: this.formation,
            maxPartySize: this.maxPartySize
        };
    }

    // Load party state
    loadSaveData(data) {
        if (data) {
            this.party = data.party || [];
            this.formation = data.formation || 'line';
            this.maxPartySize = data.maxPartySize || 4;
        }
    }
}

// Export for use in other modules
window.PartyManager = PartyManager;
