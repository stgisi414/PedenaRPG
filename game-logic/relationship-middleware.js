
// Relationship Management Middleware - Tracks NPC interactions and relationships
export class RelationshipMiddleware {
    
    static initialize() {
        // Add global event listener for relationship updates
        window.addEventListener('npc-interaction', (event) => {
            this.handleNPCInteraction(event.detail);
        });
        
        // Add listener for conversation events
        window.addEventListener('conversation-update', (event) => {
            this.updateLastConversation(event.detail);
        });
        
        console.log('RelationshipMiddleware initialized');
    }
    
    static handleNPCInteraction(data) {
        const { npcName, location, description, player } = data;
        
        if (!npcName || !player) {
            console.warn('RelationshipMiddleware: Missing required data for NPC interaction');
            return;
        }
        
        // Get or create relationship record
        let relationship = this.getRelationship(player.name, npcName);
        
        if (!relationship) {
            // Create new relationship
            relationship = {
                id: Date.now() + Math.random(),
                playerName: player.name,
                npcName: npcName,
                locationMet: location || player.currentLocation,
                npcDescription: description || 'No description available',
                relationshipLevel: 'neutral', // neutral, friendly, hostile, romantic, ally, enemy
                trustLevel: 50, // 0-100 scale
                timesSpoken: 0,
                lastConversation: null,
                conversationHistory: [],
                dateFirstMet: new Date().toISOString(),
                lastInteraction: new Date().toISOString(),
                notes: []
            };
        } else {
            // Update existing relationship
            relationship.lastInteraction = new Date().toISOString();
            if (description && description !== relationship.npcDescription) {
                relationship.npcDescription = description;
            }
        }
        
        relationship.timesSpoken++;
        this.saveRelationship(relationship);
        
        console.log(`Updated relationship with ${npcName}`, relationship);
    }
    
    static updateLastConversation(data) {
        const { npcName, playerName, conversation, sentiment } = data;
        
        if (!npcName || !playerName || !conversation) return;
        
        const relationship = this.getRelationship(playerName, npcName);
        if (!relationship) return;
        
        // Update conversation data
        relationship.lastConversation = {
            text: conversation,
            timestamp: new Date().toISOString(),
            sentiment: sentiment || 'neutral'
        };
        
        // Add to conversation history (keep last 10)
        relationship.conversationHistory.unshift({
            text: conversation,
            timestamp: new Date().toISOString(),
            sentiment: sentiment || 'neutral'
        });
        
        if (relationship.conversationHistory.length > 10) {
            relationship.conversationHistory = relationship.conversationHistory.slice(0, 10);
        }
        
        // Adjust relationship based on sentiment
        if (sentiment) {
            this.adjustRelationshipBySentiment(relationship, sentiment);
        }
        
        this.saveRelationship(relationship);
    }
    
    static adjustRelationshipBySentiment(relationship, sentiment) {
        const adjustments = {
            'positive': { trust: 2, level: 'friendly' },
            'negative': { trust: -3, level: 'hostile' },
            'neutral': { trust: 1, level: null },
            'romantic': { trust: 3, level: 'romantic' },
            'threatening': { trust: -5, level: 'enemy' }
        };
        
        const adjustment = adjustments[sentiment];
        if (!adjustment) return;
        
        // Adjust trust level
        relationship.trustLevel = Math.max(0, Math.min(100, relationship.trustLevel + adjustment.trust));
        
        // Update relationship level based on trust
        if (relationship.trustLevel >= 80 && adjustment.level === 'friendly') {
            relationship.relationshipLevel = 'ally';
        } else if (relationship.trustLevel >= 70 && adjustment.level === 'romantic') {
            relationship.relationshipLevel = 'romantic';
        } else if (relationship.trustLevel <= 20) {
            relationship.relationshipLevel = 'enemy';
        } else if (relationship.trustLevel <= 40) {
            relationship.relationshipLevel = 'hostile';
        } else if (adjustment.level && relationship.trustLevel > 40) {
            relationship.relationshipLevel = adjustment.level;
        }
    }
    
    static getRelationship(playerName, npcName) {
        const relationships = this.getAllRelationships(playerName);
        return relationships.find(rel => rel.npcName === npcName);
    }
    
    static getAllRelationships(playerName) {
        const key = `relationships_${playerName}`;
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : [];
    }
    
    static saveRelationship(relationship) {
        const relationships = this.getAllRelationships(relationship.playerName);
        const existingIndex = relationships.findIndex(rel => rel.npcName === relationship.npcName);
        
        if (existingIndex >= 0) {
            relationships[existingIndex] = relationship;
        } else {
            relationships.push(relationship);
        }
        
        const key = `relationships_${relationship.playerName}`;
        localStorage.setItem(key, JSON.stringify(relationships));
    }
    
    static getRelationshipSummary(playerName, npcName) {
        const relationship = this.getRelationship(playerName, npcName);
        if (!relationship) return null;
        
        return {
            name: relationship.npcName,
            level: relationship.relationshipLevel,
            trust: relationship.trustLevel,
            timesSp0ken: relationship.timesSpoken,
            locationMet: relationship.locationMet,
            lastSeen: relationship.lastInteraction,
            lastConversation: relationship.lastConversation?.text || 'No recent conversation'
        };
    }
    
    static getRelationshipContext(playerName, npcName) {
        const relationship = this.getRelationship(playerName, npcName);
        if (!relationship) return null;
        
        // Create context string for AI prompts
        const recentConversations = relationship.conversationHistory
            .slice(0, 3)
            .map(conv => `"${conv.text}" (${conv.sentiment})`)
            .join(', ');
        
        return `Previous relationship with ${npcName}: ${relationship.relationshipLevel} (Trust: ${relationship.trustLevel}/100). ` +
               `Met at ${relationship.locationMet}. Spoken ${relationship.timesSpoken} times. ` +
               `Recent conversations: ${recentConversations || 'None'}. ` +
               `Description: ${relationship.npcDescription}`;
    }
    
    static addNote(playerName, npcName, note) {
        const relationship = this.getRelationship(playerName, npcName);
        if (!relationship) return false;
        
        relationship.notes.push({
            text: note,
            timestamp: new Date().toISOString()
        });
        
        this.saveRelationship(relationship);
        return true;
    }
    
    static getAllRelationshipsByLocation(playerName, location) {
        const relationships = this.getAllRelationships(playerName);
        return relationships.filter(rel => rel.locationMet === location);
    }
    
    static clearRelationships(playerName) {
        const key = `relationships_${playerName}`;
        localStorage.removeItem(key);
        console.log(`Cleared all relationships for ${playerName}`);
    }
}

export default RelationshipMiddleware;
