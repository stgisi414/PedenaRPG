// Simulates the player attempting to recruit Lily Gamgee.

const playerName = "Player"; // Assuming a generic player name for the prompt context
const lilyName = "Lily Gamgee";

// 1. Player's recruitment command
const playerCommand = `${playerName}: "Lily, your insights have been very helpful, and you seem like a capable person. Would you consider joining me on my adventures? We could achieve much more together."`;

// 2. Simulate Lily's verbal response (positive)
const lilyVerbalResponse = `${lilyName}: "Join you on your adventures? That's a kind offer, and you seem like a trustworthy sort. Pedena can be a dangerous place alone. Yes, I think I will. It would be good to see more of this land with a capable companion."`;

// 3. Simulate the call to partyManager.addMember(npc)
const lilyNPCData = {
  id: 'lily_gamgee_simulated',
  name: 'Lily Gamgee',
  level: 1, // Assuming starting level for a new companion
  health: 20,
  maxHealth: 20,
  // In a real game, more attributes like class, skills, etc., would be here.
};

// Simulate the PartyManager (very basic for this subtask)
const simulatedPartyManager = {
  partyMembers: [], // Player is implicitly member 0 or managed separately
  maxPartySize: 4,
  addMember: function(npc) {
    if (this.partyMembers.length < this.maxPartySize - 1) { // -1 to account for player
      this.partyMembers.push(npc);
      // The party count includes the player plus any companions.
      const currentPartyCount = 1 + this.partyMembers.length;
      return {
        success: true,
        message: `${npc.name} has joined your party! (${currentPartyCount}/${this.maxPartySize} members)`
      };
    } else {
      return {
        success: false,
        message: `Your party is full. Cannot add ${npc.name}.`
      };
    }
  }
};

const recruitmentOutcome = simulatedPartyManager.addMember(lilyNPCData);

// 4. Report Lily's verbal response and the outcome
console.log(lilyVerbalResponse);
console.log(recruitmentOutcome.message);

// For verification, show the party state
// console.log("Party members after attempt:", simulatedPartyManager.partyMembers);
