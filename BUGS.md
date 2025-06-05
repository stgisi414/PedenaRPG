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

## 🔧 UI/UX Issues

### 4. Class-Specific Action Button Inconsistency
- **Problem**: "Cast Spell" button shows for all classes instead of class-appropriate text
- **Impact**: Confusing for non-spellcaster classes
- **Solution Needed**: 
  - Change button text based on player class
  - "Cast Spell" for mages
  - "Use Ability" for warriors/rogues
  - Class-specific text for rangers
- **Priority**: MEDIUM

### 5. Generic Inventory Icons
- **Problem**: All inventory items show generic crossed swords icon instead of specific item icons
- **Impact**: Poor visual experience, items look identical
- **Solution Needed**: 
  - Implement proper icon mapping system
  - Add item-type specific icons
  - Fix icon display logic in inventory
- **Priority**: MEDIUM

## 🔧 Technical Debt

### 6. Game Save Spamming
- **Problem**: Game save messages appearing too frequently in game output
- **Impact**: Clutters game interface and disrupts immersion
- **Solution**: 
  - Reduce save notification frequency
  - Make save notifications less intrusive
  - Consider silent auto-saves with occasional confirmation

### 7. AI Response Parsing
- **Problem**: Inconsistent parsing of AI responses across all systems
- **Impact**: Data extraction failures, missed game state updates
- **Solution**: Standardize response parsing with structured schemas

### 8. Game State Management
- **Problem**: Game state not consistently updated after AI responses
- **Impact**: Desynchronization between UI and actual game state
- **Solution**: Implement centralized state management system

### 9. Error Handling
- **Problem**: Poor error handling for API failures and malformed responses
- **Impact**: Game crashes or silent failures when AI API has issues
- **Solution**: Add comprehensive try-catch blocks and fallback systems

## 🎯 Enhancement Opportunities

### 10. Location Memory System
- **Problem**: Locations not properly cached/remembered
- **Impact**: Repetitive location descriptions, no sense of world persistence
- **Solution**: Implement proper location caching in `LocationManager`

### 11. NPC Interaction System
- **Problem**: NPCs not properly tracked or remembered
- **Impact**: Inconsistent NPC behavior and dialogue
- **Solution**: Enhance NPC memory and relationship tracking

### 12. Inventory Management
- **Problem**: Item effects not properly applied
- **Impact**: Equipment and consumables don't provide expected benefits
- **Solution**: Fix item application system in inventory functions

## 🐛 Minor Issues

### 13. UI State Management
- **Problem**: Interface elements sometimes don't hide/show properly
- **Impact**: Overlapping interfaces, confused user experience
- **Solution**: Review interface toggle logic

### 14. Save/Load System
- **Problem**: Some game data not included in save files
- **Impact**: Incomplete game restoration after loading
- **Solution**: Audit save/load functions for completeness

### 15. Character Progression
- **Problem**: Class abilities and spells not properly unlocked
- **Impact**: Character growth feels limited
- **Solution**: Debug `CharacterManager` progression system

## 📋 Implementation Priority

1. **Phase 1 (Critical)**: Fix equipment equip buttons and starting experience
2. **Phase 2 (Critical)**: Repair combat flee system and movement structured prompting
3. **Phase 3 (High)**: Fix quest system JSON handling and rewards
4. **Phase 4 (Medium)**: Implement class-specific UI and proper item icons
5. **Phase 5 (Medium)**: Standardize AI response parsing and minor UI issues
6. **Phase 6 (Low)**: Address game save spamming and generic inventory icons

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
- [ ] Investigate game save frequency and improve user experience

## 📝 Notes

- Many issues stem from inconsistent AI response handling
- Consider implementing response validation schemas
- Need better error logging for debugging
- Game would benefit from automated testing for core systems
- UI consistency improvements needed across all interfaces
- Starting experience is crucial for player retention