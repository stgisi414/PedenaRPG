// game-logic/relationship-middleware.js

export class RelationshipMiddleware {

    /**
     * Analyzes the conversation to detect if a relationship change has occurred.
     * This version has an improved prompt to explicitly identify all interacting NPCs.
     */
    static async detectRelationshipChange(aiResponse, command, player, gameContext) {
        const potentialNpcNames = await this.extractNPCNames(aiResponse, player); // Use await here
        if (potentialNpcNames.length === 0) {
            console.log("RelationshipMiddleware: No potential new NPC names detected in text.");
            return { hasRelationshipChange: false };
        }

        const relationshipPrompt = `
        RELATIONSHIP ANALYSIS SYSTEM

        PLAYER COMMAND: "${command}"
        GAME RESPONSE: "${aiResponse}"

        CONTEXT:
        - Player Name: ${player.name}
        - Current Relationships: ${JSON.stringify(Object.keys(player.relationships || {}))}
        - Potential NPCs in Scene: ${potentialNpcNames.join(', ')}

        TASKS:
        1. Identify ALL NPCs the player interacted with.
        2. Determine if a significant emotional or trust-altering event occurred.
        3. If an NPC is new, mark 'isNew: true'.
        4. Quantify the trust change.

        Here are 13 more critical interpretation rules, building upon the ones you've provided:

        CRITICAL INTERPRETATION RULES:

        A heroic sacrifice, like taking on a curse for someone, is a HUGE positive event. Assign a large positive trustChange (e.g., +40 to +60).
        Declarations of love ("I love you"), celebratory toasts ("To love!"), and successful quests for an NPC are MAJOR positive and romantic events. Assign a significant positive trustChange (e.g., +20 to +30).
        Destroying a cursed object for someone is a helpful, positive act. Assign a positive trustChange (e.g., +15).
        Betrayal for personal gain (e.g., stealing from, or turning against, an ally for a reward) is a CATASTROPHIC negative event. Assign a massive negative trustChange (e.g., -50 to -70).
        An unprompted, deeply personal confession or sharing of a significant vulnerability is a MAJOR positive event of trust-building. Assign a significant positive trustChange (e.g., +20 to +30).
        Publicly humiliating or shaming someone is a SEVERE negative event. Assign a large negative trustChange (e.g., -30 to -40).
        Actively defending someone against a powerful or dangerous foe, especially when not required to, is a HUGE positive event. Assign a large positive trustChange (e.g., +35 to +45).
        Breaking a sworn oath or a deeply significant promise is a CATASTROPHIC negative event. Assign a massive negative trustChange (e.g., -40 to -60).
        Remembering and acting upon a small, previously mentioned personal detail (e.g., a favorite flower, a childhood dream) is a SUBSTANTIAL positive event. Assign a positive trustChange (e.g., +15 to +20).
        Gaslighting or intentionally manipulating someone's perception of reality is a SEVERE negative event of psychological violation. Assign a large negative trustChange (e.g., -35 to -50).
        Going to great lengths to find a rare or meaningful gift for someone is a MAJOR positive and thoughtful event. Assign a significant positive trustChange (e.g., +20 to +25).
        A direct and sincere apology, especially when admitting significant wrongdoing, is a SUBSTANTIAL positive event. Assign a positive trustChange (e.g., +15 to +25, depending on the severity of the initial act).
        Spreading malicious rumors or lies about someone is a SEVERE negative event. Assign a large negative trustChange (e.g., -25 to -35).
        Choosing to forgive a significant transgression, when an apology is offered, is a HUGE positive event. Assign a large positive trustChange (e.g., +30 to +40).
        A blatant lie discovered, especially about a critical matter, is a MAJOR negative event. Assign a significant negative trustChange (e.g., -20 to -30).
        Showing up to provide comfort or aid during a moment of personal crisis (e.g., loss of a loved one, a devastating failure) is a HUGE positive event. Assign a large positive trustChange (e.g., +30 to +40).

        Respond with ONLY valid JSON in this exact format. Create one entry for EACH NPC interaction.
        {
            "hasRelationshipChange": true/false,
            "changes": [
                {
                    "npcName": "Exact NPC Name",
                    "isNew": true/false,
                    "trustChange": 0,
                    "emotionalImpact": "positive | negative | neutral | romantic",
                    "specificEvent": "Brief description of the key interaction.",
                    "npcDescription": "A one-sentence description of the NPC from the text, if available."
                }
            ]
        }

        If no significant interaction is detected, return {"hasRelationshipChange": false, "changes": []}.
        `;

        try {
            const response = await window.callGeminiAPI(relationshipPrompt, 0.2, 800, false);
            if (!response) return { hasRelationshipChange: false };

            const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

            if (jsonMatch) {
                const relationshipData = JSON.parse(jsonMatch[0]);
                return (relationshipData.hasRelationshipChange && relationshipData.changes.length > 0) ? relationshipData : { hasRelationshipChange: false };
            }
        } catch (error) {
            console.error('Relationship detection error:', error);
        }

        return null;
    }

    /**
     * NEW FUNCTION: Resolves NPC identity using Gemini.
     * @param {string} npcName - The name extracted from the text.
     * @param {object} existingRelationships - The player.relationships object.
     * @param {string} command - The player's command.
     * @param {string} aiResponse - The game's response.
     * @returns {object} An object with canonical name, description, and whether it's a new NPC.
     */
    static async resolveNpcIdentity(npcName, existingRelationships, command, aiResponse) {
        const existingNames = Object.keys(existingRelationships);

        // If the name already exists exactly, no need for AI call.
        if (existingNames.map(n => n.toLowerCase()).includes(npcName.toLowerCase())) {
            return {
                isNew: false,
                canonicalName: existingNames.find(n => n.toLowerCase() === npcName.toLowerCase()),
                description: existingRelationships[npcName]?.description || `A known acquaintance.`
            };
        }

        const prompt = `
        NPC IDENTITY RESOLUTION

        Context:
        - Player Command: "${command}"
        - Game Response: "${aiResponse}"
        - Newly Mentioned NPC: "${npcName}"
        - Existing Known NPCs: ${JSON.stringify(existingNames)}

        Tasks:
        1. Is "${npcName}" a new character, or an alias/title for one of the existing NPCs?
        2. Generate a concise, 1-sentence description for the character suitable for a relationship log.

        IMPORTANT: This is for identifying *people* or *sentient beings*. Do NOT categorize inanimate objects, locations, concepts, or general creatures as NPCs.

        Respond ONLY with valid JSON:
        {
          "isNew": true/false,
          "canonicalName": "The correct or most appropriate name for this character",
          "description": "A new, concise one-sentence description."
        }`;

        try {
            const response = await window.callGeminiAPI(prompt, 0.2, 500, false);
            const jsonMatch = response.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const data = JSON.parse(jsonMatch[0]);
                // Basic validation and ensure it's not a generic object
                if (typeof data.isNew === 'boolean' && data.canonicalName && data.description) {
                    // Add an extra check here to avoid common object names if AI still fails
                    const lowerName = data.canonicalName.toLowerCase();
                    const commonNonNpcWords = ['town', 'square', 'forest', 'woods', 'flagon', 'fountain', 'chest', 'note', 'dragon', 'item', 'gold', 'tavern', 'bar'];
                    if (commonNonNpcWords.some(word => lowerName.includes(word))) {
                        console.warn(`Resolved identity "${data.canonicalName}" flagged as potentially non-NPC due to common object name. Setting isNew to false.`);
                        return { isNew: false, canonicalName: npcName, description: `Not an NPC.` };
                    }
                    return data;
                }
            }
        } catch (e) {
            console.error("Error resolving NPC identity:", e);
        }

        // Fallback: If AI fails, treat it as a new NPC.
        return { isNew: true, canonicalName: npcName, description: `A mysterious figure known as ${npcName}.` };
    }

    /**
     * MODIFIED FUNCTION: Processes the changes using the new resolution step.
     */
    static async processRelationshipChange(relationshipData, player, command, aiResponse) {
        if (!relationshipData || !relationshipData.hasRelationshipChange || !relationshipData.changes) return;

        for (const change of relationshipData.changes) {
            const { npcName, trustChange, npcDescription } = change;
            if (!npcName) continue;

            // **NEW STEP: Resolve identity before updating**
            const identity = await this.resolveNpcIdentity(npcName, player.relationships || {}, command, aiResponse);

            // Only create relationship if identity confirms it's a new NPC (or a known NPC that we are interacting with)
            // and if it's not explicitly flagged as not an NPC by resolveNpcIdentity's internal filtering.
            if (identity.isNew === false && identity.description === 'Not an NPC.') {
                console.log(`RelationshipMiddleware: Skipping relationship creation for "${npcName}" as it's identified as a non-NPC.`);
                continue;
            }

            const finalName = identity.canonicalName;
            const finalDescription = identity.description;

            // Now, update or create the relationship with the resolved canonical name
            if (typeof window.updateRelationship === 'function') {
                // Pass true for forceCreate if it's a new NPC or a known NPC (not a non-NPC)
                window.updateRelationship(finalName, 0, trustChange || 0, finalDescription, true); // forceCreate is true here
            } else {
                console.error("Global function 'updateRelationship' not found!");
            }
        }

        // Save the game once after all changes are processed.
        if (typeof window.saveGame === 'function') {
            window.saveGame();
        }
    }

    /**
     * Improved function to extract potential NPC names from text.
     * It looks for capitalized names that are not common English words.
     * This is the version that will be used by checkNPCMentionsAndAdd.
     */
    static async extractNPCNames(text, player) {
        console.log("RelationshipMiddleware: Extracting NPC names using Gemini from raw text...");
        const extractionPrompt = `
        From the following game text, identify and extract the FULL NAMES of all **Non-Player Characters (NPCs)** being interacted with or explicitly mentioned as a *person* or *sentient being*.

        - **Exclude:**
            - The player's name, which is "${player.name}".
            - Inanimate objects (e.g., "Wooden Chest", "Noticeboard", "Fountain", "Door", "Note").
            - Concepts or abstract entities (e.g., "Dragon's Breath" drink, "The Whispering Egg", "Church of the Eternal Light", "Shadowed Cult", "Gods").
            - General roles not tied to a specific named individual (e.g., "townsfolk", "merchant", "barman", "bartender" unless they are explicitly given a unique name like "Barman Bartholomew").
            - Creatures unless they are specifically named or clearly depicted as sentient (e.g., "wolf" is not an NPC, "Grim the Rogue" is an NPC).
            - Locations (e.g., "Pedena Town Square", "Rusty Flagon", "Whispering Woods", "Forest Entrance").
        - **Include:** Only specific, named individuals who are clearly people or sentient beings.
        - **Respond with ONLY a valid JSON array of strings.** Example: ["Seraphina", "Lysandra", "Master Theron Steelbeard", "Norina Boulderfist", "Iris the Inviting"]

        Game Text:
        ---
        ${text}
        ---

        JSON Array of NPC Names:
        `;

        try {
            // Use low temperature for more predictable, structured output
            const response = await window.callGeminiAPI(extractionPrompt, 0.1, 200, false);
            if (!response) {
                console.error("Gemini name extraction returned no response.");
                return [];
            }

            // Find and parse the JSON array from the response string
            const jsonMatch = response.match(/\[[\s\S]*\]/);
            if (jsonMatch) {
                const names = JSON.parse(jsonMatch[0]);
                // Ensure we have an array of unique names and filter out any empty strings
                const uniqueNames = [...new Set(names)].filter(name => name.trim() !== '');
                console.log("RelationshipMiddleware: Gemini successfully extracted names:", uniqueNames);
                return uniqueNames;
            } else {
                console.error("RelationshipMiddleware: Could not parse JSON array from Gemini name extraction response:", response);
                return [];
            }
        } catch (error) {
            console.error("RelationshipMiddleware: Error calling Gemini API for NPC name extraction:", error);
            return []; // Return an empty array on error to prevent crashes
        }
    }
}

window.RelationshipMiddleware = RelationshipMiddleware