
// Relationship Middleware - Handles relationship changes and AI-powered relationship decisions
export class RelationshipMiddleware {

    static async detectRelationshipChange(aiResponse, command, player, gameContext) {
        // Check if the command or response contains relationship indicators
        const relationshipKeywords = [
            'friend', 'enemy', 'ally', 'romantic', 'love', 'hate', 'trust', 'betray',
            'marry', 'kiss', 'hug', 'flirt', 'anger', 'please', 'disappoint', 'impress',
            'respect', 'admire', 'despise', 'fear', 'protect', 'threaten', 'help',
            'save', 'rescue', 'sacrifice', 'liege', 'loyalty', 'devotion', 'bond'
        ];

        const hasRelationshipKeywords = relationshipKeywords.some(keyword => 
            command.toLowerCase().includes(keyword) || 
            aiResponse.toLowerCase().includes(keyword)
        );

        if (!hasRelationshipKeywords) {
            console.log("RelationshipMiddleware: No relationship keywords detected");
            return { hasRelationshipChange: false };
        }

        const relationshipPrompt = `
RELATIONSHIP ANALYSIS - Detect and analyze relationship changes between player and NPCs.

Player command: "${command}"
AI Response: "${aiResponse}"

Player context: ${player.name} (Level ${player.level} ${player.class})
Current location: ${player.currentLocation}
Current relationships: ${JSON.stringify(player.relationships || {}, null, 2)}

CRITICAL RULES:
1. ONLY detect if there's an actual relationship change or significant interaction
2. Look for emotional impact, trust changes, status shifts, or romantic developments
3. Extract specific NPC names and relationship changes
4. Consider the context and magnitude of the interaction
5. Rate the emotional impact and trust change

Respond with ONLY valid JSON in this exact format:
{
    "hasRelationshipChange": true/false,
    "confidence": 0.0-1.0,
    "npcName": "exact NPC name",
    "relationshipType": "friendship/romantic/alliance/rivalry/neutral/hostile/family/loyalty",
    "trustChange": -100 to 100,
    "emotionalImpact": "positive/negative/neutral",
    "impactMagnitude": "minor/moderate/major/life_changing",
    "specificEvent": "brief description of what happened",
    "newStatus": "potential new relationship status",
    "reasons": ["reason1", "reason2"],
    "shouldPromoteToRomantic": true/false,
    "shouldDemoteRelationship": true/false
}

RELATIONSHIP GUIDELINES:
- Trust changes: -100 (complete betrayal) to +100 (ultimate sacrifice/devotion)
- Life-changing events: marriage proposals, ultimate sacrifices, major betrayals
- Major events: saving someone's life, declaring love, major favors
- Moderate events: gifts, compliments, minor help, flirting
- Minor events: casual conversation, small favors

If no actual relationship change is detected, return {"hasRelationshipChange": false, "confidence": 0.0}
`;

        try {
            const response = await window.callGeminiAPI(relationshipPrompt, 0.7, 800, false);
            if (!response) return null;

            const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

            if (jsonMatch) {
                const relationshipData = JSON.parse(jsonMatch[0]);
                
                // Apply confidence threshold
                if (relationshipData.confidence && relationshipData.confidence < 0.6) {
                    console.log(`RelationshipMiddleware: Low confidence relationship change (${relationshipData.confidence}), ignoring`);
                    return { hasRelationshipChange: false };
                }
                
                return relationshipData;
            }
        } catch (error) {
            console.error('Relationship detection error:', error);
        }

        return null;
    }

    static async processRelationshipChange(relationshipData, player) {
        console.log("RelationshipMiddleware: Processing relationship change:", JSON.stringify(relationshipData, null, 2));
        
        if (!relationshipData.hasRelationshipChange) return;

        const { npcName, relationshipType, trustChange, emotionalImpact, impactMagnitude, specificEvent, newStatus, reasons } = relationshipData;
        
        // Initialize relationships object if it doesn't exist
        if (!player.relationships) {
            player.relationships = {};
        }

        // Get or create relationship
        let relationship = player.relationships[npcName] || {
            name: npcName,
            status: 'neutral',
            trust: 50,
            firstMet: new Date().toISOString(),
            lastInteraction: new Date().toISOString(),
            interactions: 0,
            notes: []
        };

        // Update relationship data
        relationship.trust = Math.max(0, Math.min(100, relationship.trust + (trustChange || 0)));
        relationship.lastInteraction = new Date().toISOString();
        relationship.interactions = (relationship.interactions || 0) + 1;

        // Add interaction note
        if (specificEvent) {
            relationship.notes = relationship.notes || [];
            relationship.notes.push({
                event: specificEvent,
                date: new Date().toISOString(),
                trustChange: trustChange,
                impact: impactMagnitude
            });
            
            // Keep only last 10 notes to prevent memory bloat
            if (relationship.notes.length > 10) {
                relationship.notes = relationship.notes.slice(-10);
            }
        }

        // Determine new relationship status based on trust and type
        const oldStatus = relationship.status;
        relationship.status = this.calculateRelationshipStatus(relationship.trust, relationshipType, relationshipData);

        // Store updated relationship
        player.relationships[npcName] = relationship;

        // Display relationship change messages
        if (typeof window.displayMessage === 'function') {
            this.displayRelationshipChange(npcName, oldStatus, relationship.status, trustChange, impactMagnitude, specificEvent);
        }

        // Save relationship changes
        if (typeof window.saveGame === 'function') {
            window.saveGame();
        }

        // Check for quest completion related to relationships
        if (typeof window.checkQuestCompletion === 'function') {
            window.checkQuestCompletion(`relationship change with ${npcName}`);
            if (relationship.status === 'romantic') {
                window.checkQuestCompletion(`romantic relationship with ${npcName}`);
            }
        }

        return { 
            success: true, 
            npcName: npcName,
            oldStatus: oldStatus,
            newStatus: relationship.status,
            trustLevel: relationship.trust,
            message: `Relationship with ${npcName} updated` 
        };
    }

    static calculateRelationshipStatus(trust, relationshipType, relationshipData) {
        // Handle special relationship promotions/demotions
        if (relationshipData.shouldPromoteToRomantic && trust >= 70) {
            return 'romantic';
        }
        
        if (relationshipData.shouldDemoteRelationship && trust < 30) {
            return 'hostile';
        }

        // Use provided relationship type if it makes sense
        if (relationshipType && relationshipType !== 'neutral') {
            // Validate relationship type against trust level
            switch (relationshipType) {
                case 'romantic':
                    return trust >= 60 ? 'romantic' : 'friendship';
                case 'friendship':
                    return trust >= 40 ? 'friendship' : 'neutral';
                case 'alliance':
                    return trust >= 50 ? 'alliance' : 'neutral';
                case 'rivalry':
                    return trust <= 60 ? 'rivalry' : 'neutral';
                case 'hostile':
                    return trust <= 40 ? 'hostile' : 'rivalry';
                case 'loyalty':
                    return trust >= 80 ? 'loyalty' : 'alliance';
                default:
                    break;
            }
        }

        // Calculate status based on trust level
        if (trust >= 90) return 'devoted';
        if (trust >= 80) return 'loyalty';
        if (trust >= 70) return 'close_friend';
        if (trust >= 60) return 'friendship';
        if (trust >= 50) return 'friendly';
        if (trust >= 40) return 'neutral';
        if (trust >= 30) return 'unfriendly';
        if (trust >= 20) return 'rivalry';
        if (trust >= 10) return 'hostile';
        return 'enemy';
    }

    static displayRelationshipChange(npcName, oldStatus, newStatus, trustChange, impactMagnitude, specificEvent) {
        if (oldStatus !== newStatus) {
            const statusChange = `${oldStatus} → ${newStatus}`;
            window.displayMessage(`💖 Relationship with ${npcName} changed: ${statusChange}`, 'relationship');
        }

        if (trustChange !== 0) {
            const trustDirection = trustChange > 0 ? '↗️' : '↘️';
            const trustMagnitude = Math.abs(trustChange);
            window.displayMessage(`${trustDirection} Trust with ${npcName}: ${trustChange > 0 ? '+' : ''}${trustChange}`, 'relationship');
        }

        if (specificEvent) {
            window.displayMessage(`📝 "${specificEvent}"`, 'info');
        }

        // Special messages for significant relationship milestones
        switch (newStatus) {
            case 'romantic':
                window.displayMessage(`💕 Your relationship with ${npcName} has become romantic!`, 'success');
                break;
            case 'devoted':
                window.displayMessage(`🌟 ${npcName} is now completely devoted to you!`, 'success');
                break;
            case 'loyalty':
                window.displayMessage(`🛡️ ${npcName} has sworn loyalty to you!`, 'success');
                break;
            case 'enemy':
                window.displayMessage(`⚔️ ${npcName} now considers you an enemy!`, 'error');
                break;
            case 'hostile':
                window.displayMessage(`😠 ${npcName} has become hostile towards you!`, 'error');
                break;
        }
    }

    static getRelationshipSummary(player) {
        if (!player.relationships || Object.keys(player.relationships).length === 0) {
            return "No relationships established yet.";
        }

        const relationships = Object.values(player.relationships);
        const summary = relationships.map(rel => {
            const statusEmoji = this.getStatusEmoji(rel.status);
            return `${statusEmoji} ${rel.name}: ${rel.status} (Trust: ${rel.trust})`;
        }).join('\n');

        return summary;
    }

    static getStatusEmoji(status) {
        const emojiMap = {
            'devoted': '🌟',
            'loyalty': '🛡️',
            'romantic': '💕',
            'close_friend': '🤝',
            'friendship': '😊',
            'friendly': '🙂',
            'neutral': '😐',
            'unfriendly': '😒',
            'rivalry': '😤',
            'hostile': '😠',
            'enemy': '⚔️'
        };
        return emojiMap[status] || '❓';
    }

    static findRelationship(player, npcName) {
        if (!player.relationships) return null;
        
        // Try exact match first
        if (player.relationships[npcName]) {
            return player.relationships[npcName];
        }
        
        // Try partial match
        const names = Object.keys(player.relationships);
        const partialMatch = names.find(name => 
            name.toLowerCase().includes(npcName.toLowerCase()) ||
            npcName.toLowerCase().includes(name.toLowerCase())
        );
        
        return partialMatch ? player.relationships[partialMatch] : null;
    }

    // Enhanced relationship context for AI interactions
    static getRelationshipContextForAI(player, npcName) {
        const relationship = this.findRelationship(player, npcName);
        if (!relationship) {
            return {
                hasRelationship: false,
                status: 'unknown',
                trust: 50,
                context: 'First meeting'
            };
        }

        return {
            hasRelationship: true,
            status: relationship.status,
            trust: relationship.trust,
            interactions: relationship.interactions,
            lastInteraction: relationship.lastInteraction,
            recentNotes: relationship.notes ? relationship.notes.slice(-3) : [],
            context: `Known ${relationship.status} with ${relationship.trust} trust after ${relationship.interactions} interactions`
        };
    }
}

export default RelationshipMiddleware;
