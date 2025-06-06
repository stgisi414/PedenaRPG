// Simulates Lily Gamgee's third response to the player.

const lilyPreviousResponse = "That's good to hear. Not many adventurers pass through offering help without first asking for coin. As for troubles... most folks keep to themselves, but the town notice board near the market usually has a few postings. Sometimes old Man Hemlock down by the stream complains about more than just the creaks in his bones. Might be worth a word, if you're set on finding a task.";

const playerResponse = "Thanks for the tips, Lily! Does the notice board usually have anything interesting, or is it mostly just local gossip? And Old Man Hemlock, is he usually complaining about anything serious, or just the weather?";

// Simulate the construction of a prompt for callGeminiAPI
const simulatedPromptToGemini = `
Conversation History:
Lily Gamgee: "An adventurer, you say? Pedena certainly has its share of quiet corners and hidden paths. What sort of opportunities catch your eye, friend? And the pleasure's mine."
Player: "I'm always interested in lending a hand where it's needed, Lily. Whether it's helping someone with a problem, recovering lost items, or even dealing with minor troubles that might plague a town. Do you know of any such situations around here?"
Lily Gamgee: "${lilyPreviousResponse}"
Player: "${playerResponse}"

CURRENT REQUEST:
Lily Gamgee (friendly, folksy, a bit gossipy but helpful) responds to the Player's questions about the notice board and Old Man Hemlock.

Lily Gamgee's reply:`;

// Mocked response from Lily
const lilyMockedReply = "The notice board's a mixed bag, truth be told. You'll find requests for mending fences or finding lost pets alongside the occasional plea for help with something a bit more... adventurous. Never know what might pop up. As for Hemlock? Heh. He complains about the sun being too bright and the stream too loud. But sometimes, mixed in with his grumbling about youngsters and the price of tea, he mentions things he's seen – strange tracks by the river, or odd lights in the old woods. Mostly old tales, I reckon, but he's got sharp eyes for an old man.";

// Output the simulated response
console.log(lilyMockedReply);
