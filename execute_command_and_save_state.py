import asyncio
from playwright.async_api import async_playwright, TimeoutError
import subprocess
import time
import re # Not strictly needed for this version, but good to keep if parsing is added later

async def main():
    server_process = None
    browser = None

    # Configuration for this specific run
    command_to_execute = "go to Old Well"
    # The script will print markers for the agent to create the correct file.

    game_output_html_content = f"FAILURE: Game output not captured for command '{command_to_execute}'."
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

            print(f"Navigating to http://localhost:8000/index.html for command '{command_to_execute}'...")
            await page.goto("http://localhost:8000/index.html", timeout=15000)
            print("Navigation complete.")

            # --- Simulate existing game state by creating character ---
            print("Starting character creation to simulate existing game state...")
            await page.click("#new-game-btn", timeout=5000)
            await page.wait_for_function("() => !document.querySelector('#character-creation-screen').classList.contains('hidden')", timeout=7000)
            await page.fill("#char-name", "JulesTest")
            await page.select_option("#char-class", "warrior")
            await page.check('input[name="char-gender"][value="male"]')
            await page.click("#generate-background-btn"); await asyncio.sleep(2)
            await page.click("#create-character-btn")
            await page.wait_for_selector("#game-play-screen", state="visible", timeout=10000)
            print("Character 'JulesTest' created, game play screen visible.")

            await page.wait_for_function(
                "() => document.querySelector('#game-output').innerHTML.includes('New quest available:')",
                timeout=25000
            )
            print("Initial quest messages loaded.")
            # --- End of game state simulation ---

            # 1. Locate "custom-command-input" and type command
            print(f"Typing command: '{command_to_execute}'")
            await page.fill("#custom-command-input", command_to_execute)

            # 2. Click "execute-command-btn"
            initial_game_output_children = await page.eval_on_selector_all("#game-output > p", "elements => elements.length")

            print("Clicking execute command button...")
            await page.click("#execute-command-btn")

            # 3. Wait for game-output to update
            print("Waiting for game output to update...")
            try:
                await page.wait_for_function(
                    f"(initialChildren) => document.querySelector('#game-output').children.length > initialChildren",
                    arg=initial_game_output_children,
                    timeout=5000
                )
                print("Game output updated.")
            except TimeoutError:
                print("WARNING: Game output did not change significantly after 5s. Proceeding to capture state anyway.")

            # 4. Read innerHTML of "game-output"
            game_output_html_content = await page.inner_html("#game-output")
            if not game_output_html_content:
                 game_output_html_content = f"FAILURE: Game output element was empty or not found after command '{command_to_execute}'."

            # 6. Read text content of "player-level" and "player-hp"
            player_level_content = await page.inner_text("#player-level", timeout=1000)
            player_hp_content = await page.inner_text("#player-hp", timeout=1000)

            print(f"Successfully captured game state elements for command '{command_to_execute}'.")

    except TimeoutError as e:
        print(f"FAILURE: TimeoutError during script execution for command '{command_to_execute}' - {e}")
    except Exception as e:
        print(f"FAILURE: An unexpected error for command '{command_to_execute}' - {type(e).__name__}: {e}")
    finally:
        if browser:
            await browser.close()
        if server_process:
            server_process.terminate()
            server_process.wait()
            print("HTTP server stopped.")

    # Print captured content for file writing by the agent
    print("---BEGIN GAME_OUTPUT_HTML_TURN_2---") # Unique marker for this turn
    print(game_output_html_content)
    print("---END GAME_OUTPUT_HTML_TURN_2---")
    print("---BEGIN PLAYER_LEVEL_TURN_2---")
    print(player_level_content)
    print("---END PLAYER_LEVEL_TURN_2---")
    print("---BEGIN PLAYER_HP_TURN_2---")
    print(player_hp_content)
    print("---END PLAYER_HP_TURN_2---")

if __name__ == "__main__":
    asyncio.run(main())
