
// Party Management System for Multi-Member Combat
export class PartyManager {
    constructor() {
        this.party = [];
        this.maxPartySize = 4;
        this.formation = 'line'; // line, circle, wedge, defensive
        this.combatPositions = new Map();
    }

    // Add NPC to partyconst enhancedItem = await this.enhanc
    addMember(memberData) {
        if (this.party.length >= this.maxPartySize) {
            return { success: false, message: 'Your party is full.' };
        }

        if (this.party.some(member => member.name === memberData.name)) {
            return { success: false, message: `${memberData.name} is already in your party.` };
        }

        // Create a new member object from the provided data
        const newMember = {
            id: memberData.id || `member_${Date.now()}`,
            name: memberData.name,
            level: memberData.level || 1,
            health: memberData.health,
            maxHealth: memberData.maxHealth,
            ac: memberData.ac || 10,
            damage: memberData.damage || '1d4',
            skills: memberData.skills || [],
            loyalty: memberData.loyalty || 50,
            description: memberData.description || 'A trusty companion.'
        };

        // Add a check to ensure health stats are valid before adding the member
        if (typeof newMember.health !== 'number' || typeof newMember.maxHealth !== 'number') {
            console.error("Attempted to add a party member without valid health stats:", memberData);
            return { success: false, message: `Error: Could not determine health for ${memberData.name}.` };
        }

        this.party.push(newMember);
        return { success: true, message: `${newMember.name} joins your party! (${this.party.length}/${this.maxPartySize})` };
    }

    // Remove member from party
    removeMember(memberId) {
        // Use loose equality (==) here as well to find the member in the party array.
        const memberIndex = this.party.findIndex(member => member.id == memberId);

        if (memberIndex === -1) {
            return { success: false, message: 'Member not found in party.' };
        }

        const removedMember = this.party.splice(memberIndex, 1);
        return { success: true, message: `${removedMember[0].name} has left the party.` };
    }

    // Get all party members including player
    getAllMembers(player) {
        // The player object is correctly created with the 'Leader' position.
        const playerAsMember = {
            id: 'player',
            isPlayer: true,
            name: player.name,
            level: player.level,
            health: player.hp,
            maxHealth: player.maxHp,
            position: 'Leader'
        };

        // The fix is to ensure we map over the party array and create
        // new objects that include the calculated "position" property.
        const partyWithPositions = this.party.map((member, index) => ({
            ...member,
            position: `Companion ${index + 1}`
        }));

        // Return the player along with the party members who now have positions.
        return [playerAsMember, ...partyWithPositions];
    }

    // Get living party members
    getLivingMembers(player) {
        return this.getAllMembers(player).filter(member => member.health > 0);
    }

    // Get party member names (excluding player)
    getPartyNames() {
        return this.party.map(member => member.name);
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
