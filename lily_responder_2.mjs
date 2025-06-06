// Simulates Lily Gamgee's second response to the player.

const lilyPreviousResponse = "An adventurer, you say? Pedena certainly has its share of quiet corners and hidden paths. What sort of opportunities catch your eye, friend? And the pleasure's mine.";

const playerResponse = "I'm always interested in lending a hand where it's needed, Lily. Whether it's helping someone with a problem, recovering lost items, or even dealing with minor troubles that might plague a town. Do you know of any such situations around here?";

// Simulate the construction of a prompt for callGeminiAPI
const simulatedPromptToGemini = `
Conversation History:
Player: "Just an adventurer exploring the area and looking for interesting opportunities, Lily. It's a pleasure to meet you."
Lily Gamgee: "${lilyPreviousResponse}"
Player: "${playerResponse}"

CURRENT REQUEST:
Lily Gamgee (friendly, helpful, slightly folksy) responds to the Player's desire to find tasks and help out.

Lily Gamgee's reply:`;

// Mocked response from Lily
const lilyMockedReply = "That's good to hear. Not many adventurers pass through offering help without first asking for coin. As for troubles... most folks keep to themselves, but the town notice board near the market usually has a few postings. Sometimes old Man Hemlock down by the stream complains about more than just the creaks in his bones. Might be worth a word, if you're set on finding a task.";

// Output the simulated response
console.log(lilyMockedReply);
