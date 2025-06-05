
# Pedena RPG - Known Bugs & Issues

## 🚨 Critical Issues

### 1. Equipment Not Getting Equip Button
- **Problem**: Story-provided items (weapons/equipment) sometimes lack the "Equip" button in inventory
- **Root Cause**: Item generation from AI responses may not be setting proper item types or equipment slots
- **Impact**: Players cannot equip items they find, breaking core equipment mechanics
- **Solution Needed**: 
  - Fix item categorization in `generateItemFromDescription()` function
  - Ensure all equipment items have proper `slot` properties
  - Validate item structure before adding to inventory
- **Priority**: HIGH

### 2. Combat Flee System Unreliable
- **Problem**: Fleeing from combat doesn't work consistently or properly
- **Symptoms**: 
  - Flee attempts may not register
  - Combat continues after successful flee
  - Unclear feedback to player about flee success/failure
- **Root Cause**: Combat system flee mechanics need debugging
- **Priority**: HIGH

### 3. Starting Experience Missing
- **Problem**: Game doesn't automatically provide starting prompt and starting quest
- **Impact**: New players have no guidance or initial direction
- **Solution Needed**: 
  - Add automatic starting narrative on character creation
  - Generate initial tutorial quest
  - Provide clear first steps for new players
- **Priority**: HIGH

### 4. Movement System - Janky & Unreliable
- **Problem**: Movement commands are not properly structured for AI processing
- **Root Cause**: Gemini API responses lack structured JSON format for movement decisions
- **Impact**: Players get inconsistent movement results, unclear destination choices
- **Solution Needed**: 
  - Implement structured prompting with example JSON output
  - Create movement decision schema for AI responses
  - Add proper validation for movement commands
- **Priority**: HIGH

### 5. Quest System - Data Storage & Rewards Broken
- **Problem**: Quest data not properly stored/parsed as JSON
- **Symptoms**: 
  - Quest rewards always default to 50 gold instead of promised amounts (e.g., 200 gold)
  - Quest completion detection unreliable
  - Quest progress not properly tracked
- **Root Cause**: 
  - Quest generation doesn't create proper JSON structure
  - Reward parsing fails to extract correct values from AI responses
  - `checkQuestCompletion()` function is too simplistic
- **Priority**: HIGH

## 🔧 UI/UX Issues

### 6. Class-Specific Action Button Inconsistency
- **Problem**: "Cast Spell" button shows for all classes instead of class-appropriate text
- **Impact**: Confusing for non-spellcaster classes
- **Solution Needed**: 
  - Change button text based on player class
  - "Cast Spell" for mages
  - "Use Ability" for warriors/rogues
  - Class-specific text for rangers
- **Priority**: MEDIUM

### 7. Generic Inventory Icons
- **Problem**: All inventory items show generic crossed swords icon instead of specific item icons
- **Impact**: Poor visual experience, items look identical
- **Solution Needed**: 
  - Implement proper icon mapping system
  - Add item-type specific icons
  - Fix icon display logic in inventory
- **Priority**: MEDIUM

### 8. Combat System - No Player Damage
- **Problem**: Player character never takes damage during combat
- **Symptoms**: 
  - Player HP never decreases
  - Combat feels one-sided and unrealistic
  - No risk/challenge in fights
- **Root Cause**: Damage calculation missing or not applied to player
- **Priority**: MEDIUM

## 🔧 Technical Debt

### 9. AI Response Parsing
- **Problem**: Inconsistent parsing of AI responses across all systems
- **Impact**: Data extraction failures, missed game state updates
- **Solution**: Standardize response parsing with structured schemas

### 10. Game State Management
- **Problem**: Game state not consistently updated after AI responses
- **Impact**: Desynchronization between UI and actual game state
- **Solution**: Implement centralized state management system

### 11. Error Handling
- **Problem**: Poor error handling for API failures and malformed responses
- **Impact**: Game crashes or silent failures when AI API has issues
- **Solution**: Add comprehensive try-catch blocks and fallback systems

## 🎯 Enhancement Opportunities

### 12. Location Memory System
- **Problem**: Locations not properly cached/remembered
- **Impact**: Repetitive location descriptions, no sense of world persistence
- **Solution**: Implement proper location caching in `LocationManager`

### 13. NPC Interaction System
- **Problem**: NPCs not properly tracked or remembered
- **Impact**: Inconsistent NPC behavior and dialogue
- **Solution**: Enhance NPC memory and relationship tracking

### 14. Inventory Management
- **Problem**: Item effects not properly applied
- **Impact**: Equipment and consumables don't provide expected benefits
- **Solution**: Fix item application system in inventory functions

## 🐛 Minor Issues

### 15. UI State Management
- **Problem**: Interface elements sometimes don't hide/show properly
- **Impact**: Overlapping interfaces, confused user experience
- **Solution**: Review interface toggle logic

### 16. Save/Load System
- **Problem**: Some game data not included in save files
- **Impact**: Incomplete game restoration after loading
- **Solution**: Audit save/load functions for completeness

### 17. Character Progression
- **Problem**: Class abilities and spells not properly unlocked
- **Impact**: Character growth feels limited
- **Solution**: Debug `CharacterManager` progression system

## 📋 Implementation Priority

1. **Phase 1 (Critical)**: Fix equipment equip buttons and starting experience
2. **Phase 2 (Critical)**: Repair combat flee system and movement structured prompting
3. **Phase 3 (High)**: Fix quest system JSON handling and rewards
4. **Phase 4 (Medium)**: Implement class-specific UI and proper item icons
5. **Phase 5 (Medium)**: Address player damage in combat system
6. **Phase 6 (Low)**: Standardize AI response parsing and minor UI issues

## 🔍 Investigation Needed

- [ ] Audit item generation and equipment slot assignment
- [ ] Test combat flee mechanics thoroughly
- [ ] Review new player onboarding flow
- [ ] Audit all AI prompt structures for consistency
- [ ] Review game state update flows
- [ ] Test save/load system thoroughly
- [ ] Verify character progression system
- [ ] Check item effect application
- [ ] Validate combat damage calculations

## 📝 Notes

- Many issues stem from inconsistent AI response handling
- Consider implementing response validation schemas
- Need better error logging for debugging
- Game would benefit from automated testing for core systems
- UI consistency improvements needed across all interfaces
- Starting experience is crucial for player retention
