// Simulates retrieving relationship status for Lily Gamgee
// based on the series of simulated interactions.

const npcNameToReport = "Lily Gamgee";

// Estimated state after simulated interactions:
// 1. Generation: Initial trust (e.g., 50 base + 5 for positive first impression) = 55. Status: 'neutral'.
//    (Based on updateRelationship in script.js for new NPCs)
// 2. Player response 1 (friendly greeting): Assume +3 trust. Total 58. Status: 'neutral'.
// 3. Player response 2 (offering help): Assume +3 trust. Total 61. Status becomes 'friendly'.
//    (Based on trust >= 60 for 'friendly' in updateRelationship)
// 4. Player response 3 (asking details): Assume +2 trust. Total 63. Status 'friendly'.
// 5. Player response 4 (stating intention): Assume +2 trust. Total 65. Status 'friendly'.

const simulatedPlayerRelationships = {
  "Lily Gamgee": {
    status: "friendly",
    trust: 65,
    interactions: 4 // After generation, there were 4 player responses.
  },
  // Other NPCs might exist here in a real game state
  "Old Man Hemlock": { // Example, not interacted with yet
    status: "neutral",
    trust: 50,
    interactions: 0
  }
};

if (simulatedPlayerRelationships[npcNameToReport]) {
  const relationship = simulatedPlayerRelationships[npcNameToReport];
  console.log(`NPC: ${npcNameToReport}`);
  console.log(`Status: ${relationship.status}`);
  console.log(`Trust: ${relationship.trust}`);
} else {
  console.log(`NPC "${npcNameToReport}" not found in player.relationships.`);
}
