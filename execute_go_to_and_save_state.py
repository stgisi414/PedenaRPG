import asyncio
from playwright.async_api import async_playwright, TimeoutError
import subprocess
import time
import re

async def main():
    server_process = None
    browser = None
    game_output_html_content = "FAILURE: Game output not captured."
    player_level_content = "FAILURE: Player level not captured."
    player_hp_content = "FAILURE: Player HP not captured."

    try:
        server_process = subprocess.Popen(["python3", "-m", "http.server", "8000", "--directory", "/app"])
        print("HTTP server started on port 8000.")
        await asyncio.sleep(1)

        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page()

            page.on("load", lambda: print("EVENT: Page Loaded"))
            page.on("console", lambda msg: print(f"CONSOLE: {msg.type}: {msg.text}"))
            page.on("pageerror", lambda exc: print(f"PAGE_ERROR: {str(exc)}"))

            print("Navigating to http://localhost:8000/index.html...")
            await page.goto("http://localhost:8000/index.html", timeout=15000)
            print("Navigation complete.")

            # --- Simulate existing game state by creating character ---
            print("Starting character creation to simulate existing game state...")
            await page.click("#new-game-btn", timeout=5000)
            await page.wait_for_function("() => !document.querySelector('#character-creation-screen').classList.contains('hidden')", timeout=7000)
            await page.fill("#char-name", "JulesTest")
            await page.select_option("#char-class", "warrior")
            await page.check('input[name="char-gender"][value="male"]')
            await page.click("#generate-background-btn"); await asyncio.sleep(2) # Wait for background
            await page.click("#create-character-btn")
            await page.wait_for_selector("#game-play-screen", state="visible", timeout=10000)
            print("Character 'JulesTest' created, game play screen visible.")

            # Optional: Wait for initial quest messages to ensure game is fully ready
            await page.wait_for_function(
                "() => document.querySelector('#game-output').innerHTML.includes('New quest available:')",
                timeout=25000
            )
            print("Initial quest messages loaded.")
            # --- End of game state simulation ---

            # 1. Locate "custom-command-input" and type command
            command_to_execute = "go to Whispering Cairns"
            print(f"Typing command: '{command_to_execute}'")
            await page.fill("#custom-command-input", command_to_execute)

            # 2. Click "execute-command-btn"
            # Get current number of child elements in game-output to detect change
            initial_game_output_children = await page.eval_on_selector_all("#game-output > p", "elements => elements.length")

            print("Clicking execute command button...")
            await page.click("#execute-command-btn")

            # 3. Wait for game-output to update
            print("Waiting for game output to update...")
            try:
                await page.wait_for_function(
                    f"(initialChildren) => document.querySelector('#game-output').children.length > initialChildren",
                    arg=initial_game_output_children,
                    timeout=5000  # As per subtask requirement
                )
                print("Game output updated.")
            except TimeoutError:
                print("WARNING: Game output did not change significantly after 5s. Proceeding to capture state anyway.")


            # 4. Read innerHTML of "game-output"
            game_output_html_content = await page.inner_html("#game-output")
            if not game_output_html_content:
                 game_output_html_content = "FAILURE: Game output element was empty or not found after command."

            # 6. Read text content of "player-level" and "player-hp"
            player_level_content = await page.inner_text("#player-level", timeout=1000)
            player_hp_content = await page.inner_text("#player-hp", timeout=1000)

            print("Successfully captured game state elements.")

    except TimeoutError as e:
        print(f"FAILURE: TimeoutError during script execution - {e}")
        # Keep default failure messages for content if error occurs before capture
    except Exception as e:
        print(f"FAILURE: An unexpected error occurred - {type(e).__name__}: {e}")
    finally:
        if browser:
            await browser.close()
        if server_process:
            server_process.terminate()
            server_process.wait()
            print("HTTP server stopped.")

    # Print captured content for file writing by the agent
    print("---BEGIN GAME_OUTPUT_HTML---")
    print(game_output_html_content)
    print("---END GAME_OUTPUT_HTML---")
    print("---BEGIN PLAYER_LEVEL---")
    print(player_level_content)
    print("---END PLAYER_LEVEL---")
    print("---BEGIN PLAYER_HP---")
    print(player_hp_content)
    print("---END PLAYER_HP---")


if __name__ == "__main__":
    asyncio.run(main())
