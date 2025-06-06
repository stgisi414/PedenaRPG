// Subtask: Parse Quest Details

// --- Helper function to simulate player state after quest generation ---
function getPlayerStateAfterStep2() {
    // This player state is based on the successful output of subtask_quest_generation.js
    const player = {
        name: "JulesTest",
        gender: "female",
        class: "warrior",
        background: "A determined warrior seeking to prove her mettle and protect the innocent.",
        stats: { strength: 12, dexterity: 10, intelligence: 10, constitution: 12, wisdom: 10, charisma: 10 },
        hp: 20,
        maxHp: 20,
        level: 1,
        exp: 0,
        expToNextLevel: 100,
        gold: 50,
        inventory: [],
        equipment: { head: null, chest: null, hands: null, legs: null, feet: null, mainHand: null, offHand: null, amulet: null, ring1: null, ring2: null },
        skills: [],
        abilities: [],
        quests: [
            {
                // This quest is taken from the successful output of the previous step
                "id": "1749185609215", // Example ID, actual will vary
                "title": "A Worrisome Delivery",
                "description": "Elara, a villager in Pedena Town Square, is worried about her lost puppy. She needs you to retrieve it.",
                "objective": "Retrieve Elara's lost puppy from the Pedena Training Grounds.",
                "category": "Tutorial",
                "theme": "Introduction",
                "difficulty": "Easy",
                "location": "Pedena Training Grounds", // This is a good candidate for direct use
                "questGiver": "Elara, Worried Villager",
                "rewards": { "gold": 16, "experience": 16, "items": [] },
                "requirements": [],
                "estimatedTime": "Short",
                "complications": "Corrupt officials are protecting them", // This seems like an LLM quirk
                "questType": "tutorial",
                "moralAlignment": "neutral",
                "consequencesOfFailure": "None, try again.",
                "hiddenSecrets": null,
                "completed": false,
                "dateCreated": "6/6/2025" // Example date
            }
        ],
        relationships: {},
        currentLocation: "Pedena Town Square",
        currentEnemy: null,
        alignment: null,
        classProgression: {
            class: "warrior",
            level: 1,
            availableSpells: [], knownSpells: [], availableCantrips: [], knownCantrips: [],
            classAbilities: ["Power Strike", "Shield Bash"],
            classFeats: ["Weapon Mastery"],
            unlockedFeatures: ["Fighting Style", "Second Wind"],
            spellSlots: {},
            abilityUses: { "Power Strike": { lastUsed: 0, cooldown: 3 }, "Shield Bash": { lastUsed: 0, cooldown: 2 } }
        }
    };
    // Update IDs and dates if necessary from actual previous run for perfect continuity, though not essential for parsing logic
    if (player.quests[0]) player.quests[0].id = Date.now().toString(); // Simulate a dynamic ID
    return player;
}

// --- Parsing Logic ---
function parseQuestDetails(quest) {
    if (!quest || !quest.objective) {
        console.error("Invalid quest object or missing objective.");
        return null;
    }

    const objective = quest.objective;
    let targetEntity = null; // Could be a monster, item, or person
    let location = quest.location; // Prefer the explicit location field if available and correct

    // Attempt to parse location from objective if the dedicated field isn't good enough
    // Example objective: "Retrieve Elara's lost puppy from the Pedena Training Grounds."
    // Example objective: "Eliminate the Troublesome Crab menacing the Sandport Beach."

    // Regex for "from the X" or "at X" or "menacing the X" or "in X"
    const locationPatterns = [
        /from (the\s+)?(.+?)(?:\.|$|,| menacing)/i,
        /at (the\s+)?(.+?)(?:\.|$|,| menacing)/i,
        /menacing (the\s+)?(.+?)(?:\.|$|,)/i,
        /in (the\s+)?(.+?)(?:\.|$|,)/i
    ];

    let parsedLocationFromObjective;
    for (const pattern of locationPatterns) {
        const match = objective.match(pattern);
        if (match && match[2]) {
            parsedLocationFromObjective = match[2].trim();
            // Prioritize more specific locations
            if (!location || parsedLocationFromObjective.length > location.length) {
                 // location = parsedLocationFromObjective; // This could override a good quest.location
            }
            break;
        }
    }
    // If quest.location is already good, we might not need to override it with parsed one.
    // For this subtask, quest.location seems reliable.
    // If not location is set from quest.location, use the parsed one.
    if (!location && parsedLocationFromObjective) {
        location = parsedLocationFromObjective;
    }


    // Attempt to parse target entity
    // Example: "Retrieve Elara's lost puppy from..." -> "Elara's lost puppy"
    // Example: "Eliminate the Troublesome Crab menacing..." -> "Troublesome Crab"
    // Example: "Deliver this letter to the Blacksmith" -> "letter" (target item), "Blacksmith" (target NPC)

    let retrieveMatch = objective.match(/Retrieve (?:the\s+)?(.*?)(?: from|$)/i);
    if (retrieveMatch && retrieveMatch[1]) {
        targetEntity = retrieveMatch[1].trim();
    } else {
        let eliminateMatch = objective.match(/(?:Eliminate|Defeat|Slay) (?:the\s+)?(.*?)(?: menacing| at| from| in|$)/i);
        if (eliminateMatch && eliminateMatch[1]) {
            targetEntity = eliminateMatch[1].trim();
        } else {
            let deliverMatch = objective.match(/Deliver (?:this\s+)?(.*?)(?: to|$)/i);
            if (deliverMatch && deliverMatch[1]){
                targetEntity = deliverMatch[1].trim();
                // Could also parse recipient: objective.match(/to (?:the\s+)?(.*?)(?: at| in|$)/i)
            } else {
                 // Fallback: try to get keywords before "from", "at", "menacing", "in"
                const parts = objective.split(/ from | at | menacing | in /i);
                if (parts.length > 0) {
                    const firstPart = parts[0].replace(/^(Retrieve|Eliminate|Defeat|Slay|Deliver|Find|Speak to|Talk to)\s+(?:the\s+|a\s+|an\s+)?/i, '');
                    targetEntity = firstPart.trim();
                }
            }
        }
    }

    // Further clean up targetEntity: remove trailing 'the' if it was part of a broader match.
    if (targetEntity && targetEntity.toLowerCase().endsWith(" the")) {
        targetEntity = targetEntity.substring(0, targetEntity.length - " the".length).trim();
    }
    // Remove location string from target entity if it was accidentally included
    if (targetEntity && location && targetEntity.toLowerCase().includes(location.toLowerCase())) {
        targetEntity = targetEntity.toLowerCase().replace(location.toLowerCase(), "").trim();
        // Capitalize first letter of each word
        targetEntity = targetEntity.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }


    return { targetEntity, location };
}


// --- Main Execution Logic ---
function runParseQuestStep() {
    console.log("Starting Step 3: Parse Quest Details");

    const player = getPlayerStateAfterStep2();

    if (!player.quests || player.quests.length === 0) {
        console.error("Step 3: Parse Quest Details FAILED. Player has no quests.");
        return;
    }

    const tutorialQuest = player.quests[0];
    console.log("Tutorial Quest to Parse:", JSON.stringify(tutorialQuest, null, 2));

    const parsedDetails = parseQuestDetails(tutorialQuest);

    if (parsedDetails && parsedDetails.location && parsedDetails.targetEntity) {
        console.log("Step 3: Parse Quest Details SUCCEEDED.");
        console.log("Parsed Target Entity:", parsedDetails.targetEntity);
        console.log("Parsed Location:", parsedDetails.location);
        // Store for next step (conceptually)
        // globalThis.parsedQuestTarget = parsedDetails.targetEntity;
        // globalThis.parsedQuestLocation = parsedDetails.location;
    } else {
        console.error("Step 3: Parse Quest Details FAILED. Could not parse target or location.");
        console.log("Parsed Details:", JSON.stringify(parsedDetails, null, 2));
    }
}

runParseQuestStep();
