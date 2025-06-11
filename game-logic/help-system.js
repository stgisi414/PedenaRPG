
// Help System - Provides comprehensive tutorial and command help
export class HelpSystem {
    
    static helpCategories = {
        BASIC: 'basic',
        MOVEMENT: 'movement',
        COMBAT: 'combat',
        MAGIC: 'magic',
        INVENTORY: 'inventory',
        SOCIAL: 'social',
        QUEST: 'quest',
        CHARACTER: 'character',
        WORLD: 'world',
        ADVANCED: 'advanced'
    };

    static gameModules = {
        'character-manager': {
            name: 'Character Manager',
            description: 'Handles character creation, progression, leveling, and class abilities',
            functions: ['initializeCharacter', 'levelUp', 'applyProgression', 'saveProgression'],
            category: this.helpCategories.CHARACTER
        },
        'combat-system': {
            name: 'Combat System',
            description: 'Manages all combat mechanics, damage calculation, and battle flow',
            functions: ['initiateCombat', 'playerAction', 'fleeCombat', 'calculateDamage'],
            category: this.helpCategories.COMBAT
        },
        'location-manager': {
            name: 'Location Manager',
            description: 'Handles world navigation, location discovery, and travel mechanics',
            functions: ['moveToLocation', 'exploreLocation', 'saveLocationToHistory'],
            category: this.helpCategories.MOVEMENT
        },
        'item-manager': {
            name: 'Item Manager',
            description: 'Controls inventory, equipment, item generation, and trading',
            functions: ['addToInventory', 'equipItem', 'useItem', 'generateItem'],
            category: this.helpCategories.INVENTORY
        },
        'quest-system': {
            name: 'Quest System',
            description: 'Generates, tracks, and manages quest completion and rewards',
            functions: ['generateQuest', 'completeQuest', 'trackProgress'],
            category: this.helpCategories.QUEST
        },
        'alignment-system': {
            name: 'Alignment System',
            description: 'Tracks moral choices and their impact on character and world',
            functions: ['updateAlignment', 'getAlignmentInfo', 'addMessage'],
            category: this.helpCategories.CHARACTER
        },
        'relationship-middleware': {
            name: 'Relationship System',
            description: 'Manages NPC relationships, trust levels, and social interactions',
            functions: ['updateRelationship', 'resolveNpcIdentity', 'extractNPCNames'],
            category: this.helpCategories.SOCIAL
        },
        'game-actions': {
            name: 'Action Analyzer',
            description: 'Analyzes player commands and categorizes them for appropriate processing',
            functions: ['analyzeCommand', 'processPlayerAction', 'createStructuredPrompt'],
            category: this.helpCategories.BASIC
        }
    };

    static commandHelp = {
        // Basic Commands
        'help': {
            usage: 'help [command]',
            description: 'Shows this help system or specific command help',
            examples: ['help', 'help attack', 'help modules'],
            category: this.helpCategories.BASIC
        },
        'modules': {
            usage: 'modules',
            description: 'Lists all available game modules and their functions',
            examples: ['modules'],
            category: this.helpCategories.BASIC
        },
        
        // Movement Commands
        'go': {
            usage: 'go to [location]',
            description: 'Travel to a new location',
            examples: ['go to tavern', 'go to forest', 'travel to mountain pass'],
            tips: 'Use descriptive location names. The AI will find the closest match.',
            category: this.helpCategories.MOVEMENT
        },
        'explore': {
            usage: 'explore [area]',
            description: 'Explore your current area or a specific location',
            examples: ['explore', 'explore the ruins', 'search the cave'],
            tips: 'Exploring reveals NPCs, items, and quest opportunities.',
            category: this.helpCategories.MOVEMENT
        },
        
        // Combat Commands
        'attack': {
            usage: 'attack [target]',
            description: 'Initiate combat with a target',
            examples: ['attack goblin', 'fight the bandit', 'strike the wolf'],
            tips: 'Combat is turn-based. Consider your equipment and abilities.',
            category: this.helpCategories.COMBAT
        },
        'defend': {
            usage: 'defend',
            description: 'Take a defensive stance to reduce incoming damage',
            examples: ['defend', 'block', 'parry'],
            tips: 'Defending reduces damage but you cannot attack that turn.',
            category: this.helpCategories.COMBAT
        },
        'flee': {
            usage: 'flee',
            description: 'Attempt to escape from combat',
            examples: ['flee', 'run away', 'escape'],
            tips: 'Fleeing may fail and leave you vulnerable to attack.',
            category: this.helpCategories.COMBAT
        },
        
        // Magic Commands
        'cast': {
            usage: 'cast [spell name]',
            description: 'Cast a spell from your known spells',
            examples: ['cast fireball', 'cast heal', 'cast teleport'],
            tips: 'Only spellcasting classes can cast spells. Check your progression.',
            category: this.helpCategories.MAGIC
        },
        'spell': {
            usage: 'spell [spell name]',
            description: 'Alternative way to cast spells',
            examples: ['spell magic missile', 'spell cure wounds'],
            tips: 'Same as cast command. Use whichever feels more natural.',
            category: this.helpCategories.MAGIC
        },
        
        // Inventory Commands
        'inventory': {
            usage: 'inventory',
            description: 'Open your inventory to view and manage items',
            examples: ['inventory', 'check inventory', 'show items'],
            tips: 'You can equip, use, sell, or drop items from your inventory.',
            category: this.helpCategories.INVENTORY
        },
        'equip': {
            usage: 'equip [item]',
            description: 'Equip an item from your inventory',
            examples: ['equip sword', 'wear armor', 'wield staff'],
            tips: 'Equipment provides bonuses to stats and combat effectiveness.',
            category: this.helpCategories.INVENTORY
        },
        'use': {
            usage: 'use [item]',
            description: 'Use a consumable item',
            examples: ['use potion', 'drink health potion', 'eat bread'],
            tips: 'Consumable items are destroyed when used but provide immediate benefits.',
            category: this.helpCategories.INVENTORY
        },
        
        // Social Commands
        'talk': {
            usage: 'talk to [NPC]',
            description: 'Initiate conversation with an NPC',
            examples: ['talk to merchant', 'speak with guard', 'greet innkeeper'],
            tips: 'NPCs remember your interactions and can provide quests or information.',
            category: this.helpCategories.SOCIAL
        },
        'persuade': {
            usage: 'persuade [NPC]',
            description: 'Attempt to convince an NPC through diplomacy',
            examples: ['persuade guard to let me pass', 'convince merchant to lower price'],
            tips: 'Your charisma and relationship with the NPC affects success.',
            category: this.helpCategories.SOCIAL
        },
        
        // Quest Commands
        'quests': {
            usage: 'quests',
            description: 'View your active and completed quests',
            examples: ['quests', 'show quests', 'quest log'],
            tips: 'Track your progress and see available rewards.',
            category: this.helpCategories.QUEST
        },
        'complete': {
            usage: 'complete [quest name]',
            description: 'Manually complete a quest if auto-detection failed',
            examples: ['complete delivery quest', 'finish escort mission'],
            tips: 'Most quests complete automatically when objectives are met.',
            category: this.helpCategories.QUEST
        },
        
        // Character Commands
        'stats': {
            usage: 'stats',
            description: 'View your character statistics and progression',
            examples: ['stats', 'character', 'show stats'],
            tips: 'Stats affect combat, magic, and social interactions.',
            category: this.helpCategories.CHARACTER
        },
        'level': {
            usage: 'level',
            description: 'Check your current level and experience',
            examples: ['level', 'experience', 'xp'],
            tips: 'Complete quests and defeat enemies to gain experience.',
            category: this.helpCategories.CHARACTER
        },
        'progression': {
            usage: 'progression',
            description: 'View detailed character progression and abilities',
            examples: ['progression', 'abilities', 'class features'],
            tips: 'Shows spells, abilities, and feats gained from leveling.',
            category: this.helpCategories.CHARACTER
        },
        
        // World Commands
        'pray': {
            usage: 'pray',
            description: 'Offer a prayer for divine assistance',
            examples: ['pray', 'pray for guidance', 'seek divine help'],
            tips: 'Prayer effects depend on your moral alignment.',
            category: this.helpCategories.WORLD
        },
        'rest': {
            usage: 'rest',
            description: 'Rest to recover health and energy',
            examples: ['rest', 'sleep', 'take a break'],
            tips: 'Resting heals you but may trigger random encounters.',
            category: this.helpCategories.WORLD
        },
        'shop': {
            usage: 'shop',
            description: 'Open the merchant shop to buy and sell items',
            examples: ['shop', 'trade', 'merchant'],
            tips: 'Shop inventory changes and prices vary by location.',
            category: this.helpCategories.WORLD
        }
    };

    static getHelp(command = null) {
        if (!command) {
            return this.getGeneralHelp();
        }
        
        command = command.toLowerCase().trim();
        
        if (command === 'modules') {
            return this.getModulesHelp();
        }
        
        if (this.commandHelp[command]) {
            return this.getCommandHelp(command);
        }
        
        // Try to find partial matches
        const partialMatches = Object.keys(this.commandHelp).filter(cmd => 
            cmd.includes(command) || command.includes(cmd)
        );
        
        if (partialMatches.length > 0) {
            return this.getCommandHelp(partialMatches[0]);
        }
        
        return this.getCommandNotFound(command);
    }

    static getGeneralHelp() {
        const categoryCommands = {};
        
        // Group commands by category
        Object.entries(this.commandHelp).forEach(([cmd, data]) => {
            if (!categoryCommands[data.category]) {
                categoryCommands[data.category] = [];
            }
            categoryCommands[data.category].push(cmd);
        });

        let helpText = `
🎮 **PEDENA RPG HELP SYSTEM** 🎮

**Basic Usage:**
- Type 'help [command]' for specific command help
- Type 'help modules' to see all game modules
- Type commands naturally - the AI understands context!

**Available Commands by Category:**

`;

        Object.entries(categoryCommands).forEach(([category, commands]) => {
            const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
            helpText += `**${categoryName}:** ${commands.join(', ')}\n`;
        });

        helpText += `
**Getting Started:**
1. Create a character if you haven't already
2. Try 'explore' to discover your surroundings
3. Use 'inventory' to check your starting equipment
4. Talk to NPCs with 'talk to [name]'
5. Generate quests with 'quests' button

**Tips:**
- Commands are flexible - "attack goblin" and "fight the goblin" both work
- NPCs remember your interactions and build relationships
- Your moral choices affect your alignment and available options
- Equipment and level progression significantly impact combat
- Save regularly to preserve your progress

Type 'help [command]' for detailed information about any command!
`;

        return helpText;
    }

    static getCommandHelp(command) {
        const cmd = this.commandHelp[command];
        if (!cmd) return this.getCommandNotFound(command);

        let helpText = `
🔍 **HELP: ${command.toUpperCase()}**

**Usage:** ${cmd.usage}
**Description:** ${cmd.description}

**Examples:**
${cmd.examples.map(ex => `  • ${ex}`).join('\n')}
`;

        if (cmd.tips) {
            helpText += `\n**Tips:** ${cmd.tips}`;
        }

        // Add related commands
        const relatedCommands = Object.entries(this.commandHelp)
            .filter(([c, data]) => data.category === cmd.category && c !== command)
            .map(([c]) => c)
            .slice(0, 5);

        if (relatedCommands.length > 0) {
            helpText += `\n\n**Related Commands:** ${relatedCommands.join(', ')}`;
        }

        return helpText;
    }

    static getModulesHelp() {
        let helpText = `
🔧 **PEDENA RPG GAME MODULES** 🔧

The game is built with modular systems that handle different aspects:

`;

        Object.entries(this.gameModules).forEach(([key, module]) => {
            helpText += `**${module.name}**
Description: ${module.description}
Key Functions: ${module.functions.join(', ')}
Category: ${module.category}

`;
        });

        helpText += `
**How Modules Work:**
- Each module handles a specific aspect of the game
- Modules communicate through defined interfaces
- Your commands are analyzed and routed to appropriate modules
- The AI system coordinates between modules for complex actions

**Module Integration:**
- Character Manager ↔ Combat System (stats, abilities)
- Location Manager ↔ Quest System (location-based quests)
- Item Manager ↔ Combat System (equipment bonuses)
- Alignment System ↔ Relationship System (moral choices affect NPCs)

Type 'help [category]' to see commands for specific categories!
`;

        return helpText;
    }

    static getCommandNotFound(command) {
        const allCommands = Object.keys(this.commandHelp);
        const suggestions = allCommands.filter(cmd => {
            const distance = this.levenshteinDistance(command, cmd);
            return distance <= 2;
        }).slice(0, 3);

        let helpText = `
❓ **Command '${command}' not found**

`;

        if (suggestions.length > 0) {
            helpText += `**Did you mean:** ${suggestions.join(', ')}

`;
        }

        helpText += `**Available commands:** ${allCommands.slice(0, 10).join(', ')}${allCommands.length > 10 ? '...' : ''}

Type 'help' for the full command list or 'help modules' for system information.
`;

        return helpText;
    }

    static levenshteinDistance(str1, str2) {
        const matrix = [];
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[str2.length][str1.length];
    }

    static searchCommands(query) {
        const results = [];
        const lowerQuery = query.toLowerCase();
        
        Object.entries(this.commandHelp).forEach(([command, data]) => {
            if (command.includes(lowerQuery) || 
                data.description.toLowerCase().includes(lowerQuery) ||
                data.examples.some(ex => ex.toLowerCase().includes(lowerQuery))) {
                results.push({
                    command,
                    relevance: this.calculateRelevance(query, command, data)
                });
            }
        });
        
        return results.sort((a, b) => b.relevance - a.relevance).map(r => r.command);
    }

    static calculateRelevance(query, command, data) {
        let relevance = 0;
        const lowerQuery = query.toLowerCase();
        
        if (command === lowerQuery) relevance += 100;
        else if (command.includes(lowerQuery)) relevance += 50;
        else if (lowerQuery.includes(command)) relevance += 30;
        
        if (data.description.toLowerCase().includes(lowerQuery)) relevance += 20;
        
        data.examples.forEach(example => {
            if (example.toLowerCase().includes(lowerQuery)) relevance += 10;
        });
        
        return relevance;
    }

    static getQuickReference() {
        return `
📋 **QUICK REFERENCE**

**Essential Commands:**
• help - Show help system
• explore - Discover surroundings
• inventory - Check items
• quests - View quest log
• stats - Character info

**Movement:** go to [place], explore [area]
**Combat:** attack [enemy], defend, flee
**Social:** talk to [NPC], persuade [NPC]
**Magic:** cast [spell] (spellcasters only)
**Items:** use [item], equip [item]

**Pro Tips:**
- Be descriptive in commands
- NPCs remember interactions
- Equipment affects combat
- Alignment affects options
- Save frequently
`;
    }
}

// Make available globally
window.HelpSystem = HelpSystem;
export default HelpSystem;
