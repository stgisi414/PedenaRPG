// Simulates Lily Gamgee's fourth response to the player.

const lilyPreviousResponse = "The notice board's a mixed bag, truth be told. You'll find requests for mending fences or finding lost pets alongside the occasional plea for help with something a bit more... adventurous. Never know what might pop up. As for Hemlock? Heh. He complains about the sun being too bright and the stream too loud. But sometimes, mixed in with his grumbling about youngsters and the price of tea, he mentions things he's seen – strange tracks by the river, or odd lights in the old woods. Mostly old tales, I reckon, but he's got sharp eyes for an old man.";

const playerResponse = "That's very helpful, Lily. Sounds like Old Man Hemlock might be worth a visit then, if he's got sharp eyes. I think I'll head down by the stream and see if I can talk to him. Thanks again!";

// Simulate the construction of a prompt for callGeminiAPI
const simulatedPromptToGemini = `
Conversation History:
Player: "I'm always interested in lending a hand where it's needed, Lily. Whether it's helping someone with a problem, recovering lost items, or even dealing with minor troubles that might plague a town. Do you know of any such situations around here?"
Lily Gamgee: "${lilyPreviousResponse.split(". As for Hemlock?")[0]}."
Player: "Thanks for the tips, Lily! Does the notice board usually have anything interesting, or is it mostly just local gossip? And Old Man Hemlock, is he usually complaining about anything serious, or just the weather?"
Lily Gamgee: "${lilyPreviousResponse}"
Player: "${playerResponse}"

CURRENT REQUEST:
Lily Gamgee (friendly, helpful, a bit folksy) responds to the Player's decision to go see Old Man Hemlock. She might offer a final piece of advice or a good-natured warning.

Lily Gamgee's reply:`;

// Mocked response from Lily
const lilyMockedReply = "Alright then, best of luck with him! Don't be too put off if he's a bit crusty at first – that's just his way. And if he mentions his prize-winning beets from three summers ago, just nod along. You might get something useful out of him yet. Safe travels, adventurer!";

// Output the simulated response
console.log(lilyMockedReply);
