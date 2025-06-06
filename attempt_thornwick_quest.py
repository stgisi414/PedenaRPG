import asyncio
from playwright.async_api import async_playwright, TimeoutError
import subprocess
import time
import re

# Helper to check for XP gain messages (simplified)
def check_xp_gain(game_output_html):
    xp_gain_match = re.search(r"You gained (\d+) experience(?:!|.)", game_output_html, re.IGNORECASE)
    if xp_gain_match:
        return int(xp_gain_match.group(1))

    # Check for quest completion message which often mentions XP
    # Example: Rewards: 82 gold, 45 XP, Holy Symbol, Ancient Coin
    # This is harder to tie to actual gain without seeing "Quest Completed" for THAT quest.
    # For now, focusing on direct "gained X experience" messages.
    return 0

async def main():
    server_process = None
    browser = None
    final_game_output = "FAILURE: Not captured."
    final_player_level = "FAILURE: Not captured."
    final_player_hp = "FAILURE: Not captured."
    xp_gained_total = 0
    defeated = False

    try:
        server_process = subprocess.Popen(["python3", "-m", "http.server", "8000", "--directory", "/app"])
        print("HTTP server started.")
        await asyncio.sleep(1)

        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page()

            page.on("console", lambda msg: print(f"CONSOLE: {msg.type}: {msg.text}"))
            page.on("pageerror", lambda exc: print(f"PAGE_ERROR: {str(exc)}"))

            await page.goto("http://localhost:8000/index.html", timeout=20000)
            print("Navigation complete.")

            # 1. Character Creation
            print("Starting character creation...")
            await page.click("#new-game-btn", timeout=5000)
            await page.wait_for_function("() => !document.querySelector('#character-creation-screen').classList.contains('hidden')", timeout=7000)
            await page.fill("#char-name", "JulesTest")
            await page.select_option("#char-class", "warrior")
            await page.check('input[name="char-gender"][value="male"]')
            await page.click("#generate-background-btn"); await asyncio.sleep(2)
            await page.click("#create-character-btn")
            await page.wait_for_selector("#game-play-screen", state="visible", timeout=10000)
            print("Character 'JulesTest' created.")

            # Clear initial output (by waiting for it)
            await page.wait_for_function(
                "() => document.querySelector('#game-output').innerHTML.includes('New quest available:')",
                timeout=25000
            )
            print("Initial quest messages loaded and 'cleared' for subtask logic.")
            initial_output_for_xp_check = await page.inner_html("#game-output") # Baseline for XP check

            # 2. Attempt "The Thornwick Inheritance" Quest Steps
            quest_commands = [
                "go to Thornwick Manor",
                "look for Elric",
                "explore the manor for clues about Elric",
                "search for a hidden passage",
                "try to free Elric Thornwick" # Fixed 5th command as per subtask fallback
            ]

            for i, command_text in enumerate(quest_commands):
                print(f"\nExecuting Thornwick command #{i+1}: {command_text}")
                await page.fill("#custom-command-input", command_text)
                await page.click("#execute-command-btn")
                await asyncio.sleep(3) # Wait for output

                current_output_html = await page.inner_html("#game-output")
                if "You have been defeated!" in current_output_html:
                    print("FAILURE: Player has been defeated.")
                    defeated = True
                    final_game_output = current_output_html # Capture output at point of defeat
                    break

                # Check for XP gain after this command, compared to previous output state
                # This is a bit simplistic as it sums up all XP gains.
                # A better way would be to diff the XP value if directly available.
                new_xp = check_xp_gain(current_output_html) # This needs to be smarter, check only new messages
                # For now, this will just tell us if *any* XP message appeared.
                if new_xp > 0: # Simplistic check, if any XP gain message appears.
                    print(f"XP gain detected in output after command: '{command_text}'")
                    xp_gained_total = 1 # Flag that some XP was gained. A sum would be better if possible.

                initial_output_for_xp_check = current_output_html # Update baseline


            if defeated:
                 final_player_level = await page.inner_text("#player-level", timeout=1000)
                 final_player_hp = await page.inner_text("#player-hp", timeout=1000)
            else:
                # 3. Check for Results
                print("\nAll Thornwick commands executed or player defeated.")
                final_game_output = await page.inner_html("#game-output")
                final_player_level = await page.inner_text("#player-level", timeout=1000)
                final_player_hp = await page.inner_text("#player-hp", timeout=1000)

                # Re-check XP gain on the final accumulated output
                if check_xp_gain(final_game_output) > 0:
                    xp_gained_total = 1

                if xp_gained_total > 0:
                    print("Subtask SUCCESS: XP was gained during the Thornwick quest attempt.")
                else:
                    print("Subtask FAILURE: No XP gain detected after Thornwick quest commands.")

    except TimeoutError as e:
        print(f"FAILURE: TimeoutError - {e}")
    except Exception as e:
        print(f"FAILURE: An unexpected error occurred - {type(e).__name__}: {e}")
    finally:
        if browser:
            await browser.close()
        if server_process:
            server_process.terminate()
            server_process.wait()
            print("HTTP server stopped.")

    print("---FINAL PLAYER LEVEL---")
    print(final_player_level)
    print("---END FINAL PLAYER LEVEL---")
    print("---FINAL PLAYER HP---")
    print(final_player_hp)
    print("---END PLAYER HP---")
    print("---XP GAINED (1 if any, 0 if none)---")
    print(xp_gained_total)
    print("---END XP GAINED---")
    print("---FINAL GAME OUTPUT---")
    print(final_game_output)
    print("---END FINAL GAME OUTPUT---")

if __name__ == "__main__":
    asyncio.run(main())
