// Check for travel commands in multiplayer - ABSOLUTE BLOCKING
        if (multiplayerClient && multiplayerClient.roomId) {
            const travelMatch = command.match(/^(?:go to|travel to|move to|enter|head to|walk to|visit)\s+(.+)$/i);
            if (travelMatch) {
                console.log(`[TRAVEL BLOCK] *** TRAVEL COMMAND INTERCEPTED ***`);
                console.log(`[TRAVEL BLOCK] Command: ${command}`);
                console.log(`[TRAVEL BLOCK] Player is host: ${multiplayerClient.isHost}`);
                console.log(`[TRAVEL BLOCK] Room ID: ${multiplayerClient.roomId}`);

                // ABSOLUTE BLOCK for non-hosts - NO EXCEPTIONS
                if (!multiplayerClient.isHost) {
                    console.log(`[TRAVEL BLOCK] *** ABSOLUTELY BLOCKING NON-HOST TRAVEL ***`);
                    displayMessage('🚫 TRAVEL BLOCKED: Only the party leader can control travel for the group.', 'error');
                    displayMessage('🚫 You must follow where the party leader takes you.', 'error');
                    return; // HARD STOP - NO TRAVEL ALLOWED
                }

                console.log(`[TRAVEL BLOCK] *** HOST TRAVEL PROCESSING ***`);
                const destination = travelMatch[1].trim();

                try {
                    const result = await LocationManager.moveToLocation(player, destination);

                    if (result.success) {
                        player.currentLocation = result.newLocation;
                        updatePlayerStatsDisplay();

                        // Notify multiplayer server that HOST is traveling (this will move everyone)
                        console.log(`[TRAVEL BLOCK] Host initiating party travel to: ${result.newLocation}`);
                        multiplayerClient.requestTravel(result.newLocation, result.description);

                        displayMessage(result.description, 'info');
                        displayMessage(`🎯 Leading party to: ${result.newLocation}`, 'success');

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
                    console.error('Host travel error:', error);
                    displayMessage('Error processing travel command.', 'error');
                    return;
                }
            }
        }