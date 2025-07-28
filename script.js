Fix travel command blocking for non-hosts by replacing the travel command handling logic with a stricter version that logs travel attempts and blocks non-host players from initiating travel.
```
```javascript
// Check for travel commands in multiplayer - STRICT BLOCKING
        if (multiplayerClient && multiplayerClient.roomId) {
            const travelMatch = command.match(/^(?:go to|travel to|move to|enter|head to|walk to|visit)\s+(.+)$/i);
            if (travelMatch) {
                console.log(`[TRAVEL BLOCK] Travel command detected: ${command}`);
                console.log(`[TRAVEL BLOCK] Is host: ${multiplayerClient.isHost}`);
                console.log(`[TRAVEL BLOCK] Can control travel: ${multiplayerClient.canControlTravel()}`);

                // ABSOLUTE BLOCK for non-hosts
                if (!multiplayerClient.isHost) {
                    console.log(`[TRAVEL BLOCK] *** BLOCKING NON-HOST TRAVEL ***`);
                    displayMessage('🚫 Only the party leader can control travel for the group. You must follow the party.', 'error');
                    return;
                }

                console.log(`[TRAVEL BLOCK] *** HOST TRAVEL APPROVED ***`);
                const destination = travelMatch[1].trim();

                try {
                    const result = await LocationManager.moveToLocation(player, destination);

                    if (result.success) {
                        player.currentLocation = result.newLocation;
                        updatePlayerStatsDisplay();

                        // Notify multiplayer server of HOST travel
                        console.log(`[TRAVEL BLOCK] Host successfully moved to: ${result.newLocation}`);
                        multiplayerClient.requestTravel(result.newLocation, result.description);

                        displayMessage(result.description, 'info');
                        if (result.hasEncounter) {
                            await handleEncounter(result.encounterType);
                        }
                        saveGame();
                        return;
                    } else {
                        displayMessage(result.message, 'error');
                        return;
                    }
                } catch (error) {
                    console.error('Travel error:', error);
                    displayMessage('Error processing travel command.', 'error');
                    return;
                }
            }
        }
```// Check for travel commands in multiplayer - STRICT BLOCKING
        if (multiplayerClient && multiplayerClient.roomId) {
            const travelMatch = command.match(/^(?:go to|travel to|move to|enter|head to|walk to|visit)\s+(.+)$/i);
            if (travelMatch) {
                console.log(`[TRAVEL BLOCK] Travel command detected: ${command}`);
                console.log(`[TRAVEL BLOCK] Is host: ${multiplayerClient.isHost}`);
                console.log(`[TRAVEL BLOCK] Can control travel: ${multiplayerClient.canControlTravel()}`);

                // ABSOLUTE BLOCK for non-hosts
                if (!multiplayerClient.isHost) {
                    console.log(`[TRAVEL BLOCK] *** BLOCKING NON-HOST TRAVEL ***`);
                    displayMessage('🚫 Only the party leader can control travel for the group. You must follow the party.', 'error');
                    return;
                }

                console.log(`[TRAVEL BLOCK] *** HOST TRAVEL APPROVED ***`);
                const destination = travelMatch[1].trim();

                try {
                    const result = await LocationManager.moveToLocation(player, destination);

                    if (result.success) {
                        player.currentLocation = result.newLocation;
                        updatePlayerStatsDisplay();

                        // Notify multiplayer server of HOST travel
                        console.log(`[TRAVEL BLOCK] Host successfully moved to: ${result.newLocation}`);
                        multiplayerClient.requestTravel(result.newLocation, result.description);

                        displayMessage(result.description, 'info');
                        if (result.hasEncounter) {
                            await handleEncounter(result.encounterType);
                        }
                        saveGame();
                        return;
                    } else {
                        displayMessage(result.message, 'error');
                        return;
                    }
                } catch (error) {
                    console.error('Travel error:', error);
                    displayMessage('Error processing travel command.', 'error');
                    return;
                }
            }
        }