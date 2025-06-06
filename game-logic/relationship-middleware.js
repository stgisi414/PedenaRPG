// game-logic/relationship-middleware.js

export class RelationshipMiddleware {

    /**
     * Analyzes the conversation to detect if a relationship change has occurred.
     * This version has an improved prompt to explicitly identify all interacting NPCs.
     */
    static async detectRelationshipChange(aiResponse, command, player, gameContext) {
        const potentialNpcNames = this.extractNPCNames(aiResponse, player);
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
     * Processes the detected changes and updates the player's relationships.
     */
    static async processRelationshipChange(relationshipData, player) {
        if (!relationshipData || !relationshipData.hasRelationshipChange || !relationshipData.changes) return;

        console.log("RelationshipMiddleware: Processing detected changes:", relationshipData.changes);

        let gameWasSaved = false;
        relationshipData.changes.forEach(change => {
            const { npcName, trustChange, npcDescription } = change;

            if (!npcName) return;

            if (typeof window.updateRelationship === 'function') {
                window.updateRelationship(npcName, 0, trustChange || 0, npcDescription);
                gameWasSaved = true; // Assume updateRelationship and saveGame work
            } else {
                console.error("Global function 'updateRelationship' not found!");
            }
        });

        // Save the game state once after all changes if not already saved
        if (gameWasSaved && typeof window.saveGame === 'function') {
            window.saveGame();
        }
    }

    /**
     * Improved function to extract potential NPC names from text.
     * It looks for capitalized names that are not common English words.
     */
    static extractNPCNames(text, player) {
        const names = new Set();

        // Regex to find capitalized words (potential names) that are not at the start of a sentence.
        const namePatterns = /(?<!\.\s)\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\b/g;
        const commonWords = new Set(['The', 'A', 'An', 'You', 'Your', 'My', 'He', 'She', 'It', 'But', 'And', 'If', 'Or', 'So', 'With', 'From', 'In', 'On', 'At']);

        let match;
        while ((match = namePatterns.exec(text)) !== null) {
            const potentialName = match[1].trim();
            // Add if it's not a common word and not the player's name
            if (!commonWords.has(potentialName) && potentialName.toLowerCase() !== player.name.toLowerCase()) {
                names.add(potentialName);
            }
        }

        return Array.from(names);
    }
}

export default RelationshipMiddleware;