
# Pedena RPG - Known Bugs & Issues

## 🚨 Critical Issues

### 1. Movement System - Janky & Unreliable
- **Problem**: Movement commands are not properly structured for AI processing
- **Root Cause**: Gemini API responses lack structured JSON format for movement decisions
- **Impact**: Players get inconsistent movement results, unclear destination choices
- **Solution Needed**: 
  - Implement structured prompting with example JSON output
  - Create movement decision schema for AI responses
  - Add proper validation for movement commands
- **Priority**: HIGH

### 2. Quest System - Data Storage & Rewards Broken
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

### 3. Combat System - No Player Damage
- **Problem**: Player character never takes damage during combat
- **Symptoms**: 
  - Player HP never decreases
  - Combat feels one-sided and unrealistic
  - No risk/challenge in fights
- **Root Cause**: Damage calculation missing or not applied to player
- **Priority**: MEDIUM

## 🔧 Technical Debt

### 4. AI Response Parsing
- **Problem**: Inconsistent parsing of AI responses across all systems
- **Impact**: Data extraction failures, missed game state updates
- **Solution**: Standardize response parsing with structured schemas

### 5. Game State Management
- **Problem**: Game state not consistently updated after AI responses
- **Impact**: Desynchronization between UI and actual game state
- **Solution**: Implement centralized state management system

### 6. Error Handling
- **Problem**: Poor error handling for API failures and malformed responses
- **Impact**: Game crashes or silent failures when AI API has issues
- **Solution**: Add comprehensive try-catch blocks and fallback systems

## 🎯 Enhancement Opportunities

### 7. Location Memory System
- **Problem**: Locations not properly cached/remembered
- **Impact**: Repetitive location descriptions, no sense of world persistence
- **Solution**: Implement proper location caching in `LocationManager`

### 8. NPC Interaction System
- **Problem**: NPCs not properly tracked or remembered
- **Impact**: Inconsistent NPC behavior and dialogue
- **Solution**: Enhance NPC memory and relationship tracking

### 9. Inventory Management
- **Problem**: Item effects not properly applied
- **Impact**: Equipment and consumables don't provide expected benefits
- **Solution**: Fix item application system in inventory functions

## 🐛 Minor Issues

### 10. UI State Management
- **Problem**: Interface elements sometimes don't hide/show properly
- **Impact**: Overlapping interfaces, confused user experience
- **Solution**: Review interface toggle logic

### 11. Save/Load System
- **Problem**: Some game data not included in save files
- **Impact**: Incomplete game restoration after loading
- **Solution**: Audit save/load functions for completeness

### 12. Character Progression
- **Problem**: Class abilities and spells not properly unlocked
- **Impact**: Character growth feels limited
- **Solution**: Debug `CharacterManager` progression system

## 📋 Implementation Priority

1. **Phase 1 (Critical)**: Fix movement system structured prompting
2. **Phase 2 (Critical)**: Repair quest system JSON handling and rewards
3. **Phase 3 (High)**: Implement player damage in combat system
4. **Phase 4 (Medium)**: Standardize AI response parsing
5. **Phase 5 (Low)**: Address minor UI and enhancement issues

## 🔍 Investigation Needed

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
