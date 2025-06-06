import asyncio
from playwright.async_api import async_playwright, TimeoutError
import subprocess
import time
import re # Kept for consistency, though not actively parsing here

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

            # 1. Character Creation
            print("Starting character creation...")
            await page.click("#new-game-btn", timeout=5000)
            await page.wait_for_function("() => !document.querySelector('#character-creation-screen').classList.contains('hidden')", timeout=7000)
            await page.fill("#char-name", "JulesTest")
            await page.select_option("#char-class", "warrior")
            await page.check('input[name="char-gender"][value="male"]')
            await page.click("#generate-background-btn"); await asyncio.sleep(2) # Wait for background
            await page.click("#create-character-btn")
            await page.wait_for_selector("#game-play-screen", state="visible", timeout=10000)
            print("Character 'JulesTest' created, game play screen visible.")

            # Wait for initial quest messages and an additional 3 seconds
            print("Waiting for initial messages and quest to load...")
            await page.wait_for_function(
                "() => document.querySelector('#game-output').innerHTML.includes('New quest available:')",
                timeout=25000
            )
            await asyncio.sleep(3) # Additional wait as per subtask
            print("Initial messages and quest loaded.")
            # --- End of game state simulation ---

            # 2. Extract Game Output
            game_output_html_content = await page.inner_html("#game-output")
            if not game_output_html_content:
                 game_output_html_content = "FAILURE: Game output element was empty or not found."

            # 3. Extract Player Status
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
    # Using unique markers for this specific output file
    print("---BEGIN CURRENT_QUEST_DETAILS_GAME_OUTPUT_HTML---")
    print(game_output_html_content)
    print("---END CURRENT_QUEST_DETAILS_GAME_OUTPUT_HTML---")
    print("---BEGIN CURRENT_QUEST_DETAILS_PLAYER_LEVEL---")
    print(player_level_content)
    print("---END CURRENT_QUEST_DETAILS_PLAYER_LEVEL---")
    print("---BEGIN CURRENT_QUEST_DETAILS_PLAYER_HP---")
    print(player_hp_content)
    print("---END CURRENT_QUEST_DETAILS_PLAYER_HP---")

if __name__ == "__main__":
    asyncio.run(main())
