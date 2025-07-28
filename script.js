// Check for travel commands in multiplayer
        if (multiplayerClient && multiplayerClient.roomId) {
            const travelMatch = command.match(/^(?:go to|travel to|move to|enter|head to|walk to|visit)\s+(.+)$/i);
            if (travelMatch) {
                // BLOCK NON-HOST TRAVEL
                if (!multiplayerClient.canControlTravel()) {
                    displayMessage('Only the party leader can control travel for the group. You must follow the party.', 'error');
                    return;
                }

                const destination = travelMatch[1].trim();

                try {
                    const result = await LocationManager.moveToLocation(player, destination);

                    if (result.success) {
                        player.currentLocation = result.newLocation;
                        updatePlayerStatsDisplay();

                        // Notify multiplayer server of HOST travel
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
```

```javascript
// Check for travel commands in multiplayer
        if (multiplayerClient && multiplayerClient.roomId) {
            const travelMatch = command.match(/^(?:go to|travel to|move to|enter|head to|walk to|visit)\s+(.+)$/i);
            if (travelMatch) {
                // BLOCK NON-HOST TRAVEL
                if (!multiplayerClient.canControlTravel()) {
                    displayMessage('Only the party leader can control travel for the group. You must follow the party.', 'error');
                    return;
                }

                const destination = travelMatch[1].trim();

                try {
                    const result = await LocationManager.moveToLocation(player, destination);

                    if (result.success) {
                        player.currentLocation = result.newLocation;
                        updatePlayerStatsDisplay();

                        // Notify multiplayer server of HOST travel
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