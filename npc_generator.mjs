import { QuestCharacterGenerator } from './assets/quest-character-names.js';

try {
  const npcName = QuestCharacterGenerator.generateRandomCharacter();

  // Mocked demeanor based on the format in startConversation()
  const appearance = "They have a weathered face and watchful eyes, clad in simple traveler's clothes.";
  const dialogue = "Greetings, traveler. What brings you to these parts?";

  const npcInfo = `You see ${npcName}. Appearance: ${appearance}. ${npcName} says: "${dialogue}"`;

  console.log(npcInfo);
} catch (error) {
  console.error("Error generating NPC info:", error);
  // Fallback in case QuestCharacterGenerator fails for some reason
  const npcName = "Mysterious Stranger";
  const appearance = "A figure shrouded in shadows.";
  const dialogue = "We meet at last...";
  const npcInfo = `You see ${npcName}. Appearance: ${appearance}. ${npcName} says: "${dialogue}"`;
  console.log(npcInfo);
}
