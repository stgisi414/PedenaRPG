
// API Client Module for Gemini AI interactions
import { gameState } from './game-state.js';
import { uiManager } from './ui-manager.js';

export class APIClient {
    constructor() {
        this.GEMINI_API_KEY = '';
        this.GEMINI_API_URL = '';
        this.updateAPIConfig();
    }

    updateAPIConfig() {
        const settings = gameState.gameSettings;
        this.GEMINI_API_KEY = settings.apiKey;
        this.GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${settings.model}:generateContent?key=${this.GEMINI_API_KEY}`;
    }

    async callGeminiAPI(prompt, temperature = 0.10, maxOutputTokens = 56000, includeContext = true) {
        this.updateAPIConfig(); // Ensure we have latest settings

        try {
            let fullPrompt = prompt;

            // Add conversation context if requested and available
            if (includeContext && gameState.conversationHistory.messages.length > 0) {
                const context = gameState.getConversationContext();
                if (context) {
                    fullPrompt = `CONVERSATION HISTORY (Last 20 exchanges):
${context}

CURRENT REQUEST:
${prompt}

Please respond as the DM, maintaining consistency with the conversation history above.`;
                }
            }

            // Add rich text styling instructions if enabled
            if (gameState.richTextEnabled) {
                fullPrompt += this.getRichTextInstructions();
            }

            const response = await fetch(this.GEMINI_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: fullPrompt }] }],
                    generationConfig: {
                        temperature: temperature,
                        maxOutputTokens: maxOutputTokens,
                        topP: 0.8,
                        topK: 40
                    },
                    safetySettings: [
                        {
                            category: "HARM_CATEGORY_HARASSMENT",
                            threshold: "BLOCK_NONE"
                        },
                        {
                            category: "HARM_CATEGORY_HATE_SPEECH",
                            threshold: "BLOCK_NONE"
                        },
                        {
                            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                            threshold: "BLOCK_NONE"
                        },
                        {
                            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                            threshold: "BLOCK_NONE"
                        }
                    ]
                }),
            });

            if (!response.ok) {
                let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                try {
                    const errorData = await response.json();
                    console.error('Gemini API Error:', errorData);
                    errorMessage = errorData.error?.message || errorMessage;
                } catch (e) {
                    console.error('Could not parse error response:', e);
                }
                console.error(`AI Error: ${errorMessage}`);
                return null;
            }

            const data = await response.json();
            if (data.candidates && data.candidates.length > 0) {
                const candidate = data.candidates[0];
                let responseText = "";

                if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
                    responseText = candidate.content.parts[0].text;
                } else {
                    return "I'm having trouble generating a response right now.";
                }

                // JSON sanitization for structured responses
                const firstBrace = responseText.indexOf('{');
                const lastBrace = responseText.lastIndexOf('}');

                if (firstBrace !== -1 && lastBrace > firstBrace) {
                    const jsonString = responseText.substring(firstBrace, lastBrace + 1);
                    if (jsonString.startsWith('{') && jsonString.endsWith('}')) {
                        try {
                            JSON.parse(jsonString);
                            return jsonString;
                        } catch (e) {
                            console.warn("Found JSON-like text but failed to parse. Returning raw text.", e);
                        }
                    }
                }

                if (candidate.finishReason === 'MAX_TOKENS') {
                    console.warn('Response truncated due to MAX_TOKENS');
                    return responseText || "Response was cut short.";
                }

                return responseText;
            }
            console.error('Invalid API response structure:', data);
            return null;
        } catch (error) {
            console.error('Network or API request error:', error);
            return "Network error occurred. Please try again.";
        }
    }

    getRichTextInstructions() {
        return `

🎨 RICH TEXT STYLING - MANDATORY USAGE:
You MUST use rich text formatting in your responses. Apply multiple effects per response for immersion:

TEXT FORMATTING (use VERY frequently - at least 5-8 instances per response):
- **bold text** for ALL character names, important items, locations, actions, dramatic moments
- *italic text* for ALL thoughts, whispers, sounds, emotions, atmospheric descriptions, inner voice
- ***bold italic text*** for EPIC moments, legendary items, powerful magic, climactic events
- __underline text__ for emphasis, important locations, special items, warnings
- ~~strikethrough~~ for crossed out, damaged, or negated text

FORMATTING REQUIREMENTS:
- Use **bold** on EVERY character name, location name, and important noun
- Use *italics* for ALL atmospheric descriptions, sounds, and emotional content
- Use ***bold-italic*** for anything legendary, epic, or extremely important
- Combine formatting: ***{gold:legendary artifacts}***, **{red:dangerous enemies}**, *{blue:magical whispers}*

COLORS (use liberally to paint the scene):
- {red:text} for danger, blood, fire, anger, warning signs
- {green:text} for nature, success, healing, plants, life
- {blue:text} for water, magic, cold, calm, sky, ice
- {purple:text} for royal, mysterious, arcane, noble, magic
- {gold:text} for treasure, divine, precious metals, wealth
- {silver:text} for metallic, ethereal, moonlight, steel
- {crimson:text} for intense red, battle, passion
- {emerald:text} for vibrant green, gems, deep forest
- {brown:text} for earth, wood, leather, natural materials

SPECIAL FONTS (use for atmosphere):
- [medieval:text] for formal announcements, nobility, official documents
- [magic:text] for spells, curses, supernatural phenomena
- [elegant:text] for refined speech, poetry, aristocratic dialogue
- [ancient:text] for old inscriptions, prophecies, runes, history

VISUAL EFFECTS (use 2-4 per response):
- {{highlight:important text}} for key information, clues, interactive items
- {{blink:urgent}} for urgent warnings, immediate threats
- {{wiggle:exciting}} for exciting moments, discoveries, celebrations
- {{shadow:ominous}} for dark, ominous, threatening text
- {{glow:magical}} for magical effects, enchanted items, spells
- {{stretch-h:wide}} for stretched horizontal text, emphasis
- {{stretch-v:tall}} for stretched vertical text, towering things
- {{glow-shadow:epic}} for epic moments, legendary items, climactic events

MANDATORY EXAMPLES TO FOLLOW:
- "The {gold:***legendary tome***} begins to {{glow:[magic:*whisper forgotten secrets*]}} as you **carefully** open its *weathered* pages."
- "A {crimson:***shadowy figure***} emerges from the {{shadow:*darkness*}}, wielding a {{highlight:[ancient:***cursed blade***]}}."
- "The {emerald:**enchanted garden**} {{wiggle:*bursts*}} with {{glow:***magical***}} energy as {blue:*crystalline water*} flows from an {{highlight:[elegant:***fountain of eternal youth***]}}."
- "**Sir Gareth** *whispers urgently*, 'The {red:***Dragon of Desolation***} has awakened, and its {crimson:*fiery breath*} threatens the **entire kingdom**!'"
- "You find a {gold:***Blade of Infinite Sharpness***} lying beside a *mysterious* **stone altar**, its surface {{glow:*humming*}} with {purple:***arcane power***}."

REQUIREMENTS: Use at least 7-10 different formatting effects per response. Use **bold** for ALL names and important items. Use *italics* for ALL sounds, whispers, and atmospheric elements. Use ***bold-italic*** for anything epic or legendary. Every important noun should have both color AND formatting.`;
    }

    async generateCharacterBackground(name, charClass, gender) {
        const prompt = `Create a background story for ${name}, a ${gender} ${charClass} in the fantasy realm of Pedena. 
        Make it 1-2 paragraphs (4-5 sentences per paragraph), interesting, and appropriate for a fantasy RPG character. 
        Include their motivations and how they became an adventurer.

        **Keep the entire response under 350 words.** IMPORTANT: Write in plain text only. Do NOT use any rich text formatting...`;

        try {
            const background = await this.callGeminiAPI(prompt, 0.8, 2048, false);
            if (background) {
                // Clean any potential formatting that might slip through
                return background
                    .replace(/\{[^:]+:[^}]+\}/g, (match) => {
                        const content = match.match(/\{[^:]+:([^}]+)\}/);
                        return content ? content[1] : match;
                    })
                    .replace(/\*\*(.*?)\*\*/g, '$1')
                    .replace(/\*(.*?)\*/g, '$1')
                    .replace(/\[\w+:(.*?)\]/g, '$1')
                    .replace(/\{\{[\w-]+:(.*?)\}\}/g, '$1');
            } else {
                return `${name} is a ${charClass} who seeks adventure in the realm of Pedena.`;
            }
        } catch (error) {
            console.error("Error generating background:", error);
            return `${name} is a ${charClass} who seeks adventure in the realm of Pedena.`;
        }
    }

    async generateSceneryImagePrompt() {
        const player = gameState.getPlayer();
        let contextText = `Player: ${player.name}, a ${player.class}.\n`;
        contextText += `Current Location: ${player.currentLocation}.\n`;

        // Add recent conversation history (last 2-3 messages)
        if (gameState.conversationHistory.messages && gameState.conversationHistory.messages.length > 0) {
            const recentMessages = gameState.conversationHistory.messages.slice(-3);
            contextText += "Recent Events:\n";
            recentMessages.forEach(msg => {
                const role = msg.role === 'user' ? 'Player' : 'DM';
                const cleanContent = uiManager.stripAllRichTextFormatting(msg.content);
                contextText += `- ${role} said: "${cleanContent}"\n`;
            });
        }

        // Add active quest information
        if (player.quests && player.quests.length > 0) {
            const activeQuest = player.quests.find(q => !q.completed);
            if (activeQuest) {
                contextText += `Active Quest: "${uiManager.stripAllRichTextFormatting(activeQuest.title)}"\n`;
                contextText += `Objective: "${uiManager.stripAllRichTextFormatting(activeQuest.objective)}"\n`;
            }
        }

        const geminiPrompt = `You are an AI assistant generating a descriptive text prompt for an image generation model.
The image to be generated will use a reference image of the player's character, and your prompt will describe the scenery and atmosphere around them.
Generate a concise (1-2 sentences, max 50 words) and vivid image prompt.
Focus on the environment, time of day, weather, mood, and any significant nearby landmarks or elements based on the provided game context.
Do NOT describe the character, as that will come from the reference image, but MOST IMPORTANTLY do describe what the character, referenced by his name is doing.
Example output format: 'A misty forest at dawn, with ancient, gnarled trees and a faint glow emanating from a hidden ruin in the distance.'

Game Context:
${contextText}

Image Prompt:`;

        try {
            const imagePrompt = await this.callGeminiAPI(geminiPrompt, 0.7, 100, false);
            if (imagePrompt && imagePrompt.trim() !== '') {
                console.log("Generated Image Prompt:", imagePrompt);
                return imagePrompt.trim();
            } else {
                console.error("Gemini API returned empty or no text for image prompt.");
                return "A mysterious and intriguing landscape.";
            }
        } catch (error) {
            console.error("Error calling Gemini API for image prompt:", error);
            return "A mysterious and intriguing landscape.";
        }
    }

    async generateAndDisplaySceneryImage() {
        const player = gameState.getPlayer();
        const illustrationModeBtn = document.getElementById('illustration-mode-btn');
        let originalButtonHTML = '';

        if (illustrationModeBtn) {
            originalButtonHTML = illustrationModeBtn.innerHTML;
            illustrationModeBtn.innerHTML = `<i class="ra ra-hourglass-o mr-2"></i>Generating Scenery...`;
            illustrationModeBtn.disabled = true;
        } else {
            uiManager.displayMessage("Generating scenery image...", "info");
        }

        const sceneryPrompt = await this.generateSceneryImagePrompt();

        if (!sceneryPrompt || sceneryPrompt === "A mysterious and intriguing landscape.") {
            uiManager.displayMessage("Failed to generate a suitable image prompt.", "error");
            return;
        }

        if (!player.portraitUrl || player.portraitUrl.trim() === '') {
            uiManager.displayMessage("Character portrait not found. Cannot generate scenery image.", "error");
            return;
        }

        // Generate consistent seed based on character name
        const characterSeed = player.name ? player.name.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0) : 12345;

        try {
            const response = await fetch('https://ainovel.site/api/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    prompt: sceneryPrompt,
                    referenceImageUrl: player.portraitUrl,
                    imageSize: "landscape_16_9",
                    numInferenceSteps: 50,
                    guidanceScale: 7.5,
                    seed: Math.abs(characterSeed),
                    negative_prompt: "text, watermark, signature, poorly drawn character, disfigured character, ugly, blurry character",
                    control_image_strength: 0.6,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Image generation service error:', response.status, errorText);
                uiManager.displayMessage(`Image generation service returned an error: ${response.status}.`, "error");
                return;
            }

            const result = await response.json();

            if (result.imageUrl) {
                uiManager.displaySceneryImage(result.imageUrl);
            } else {
                console.error("Image generation failed or did not return an image URL. Response:", result);
                uiManager.displayMessage("Image generation failed or did not return an image URL.", "error");
            }
        } catch (error) {
            console.error("Error during image generation API call:", error);
            uiManager.displayMessage("Failed to connect to image generation service.", "error");
        } finally {
            if (illustrationModeBtn) {
                if (gameState.isIllustrationModeActive) {
                    illustrationModeBtn.innerHTML = `<i class="ra ra-image mr-2"></i>Illustration Mode: ON`;
                } else {
                    illustrationModeBtn.innerHTML = `<i class="ra ra-image mr-2"></i>Illustration Mode`;
                }
                illustrationModeBtn.disabled = false;
            }
        }
    }

    // Portrait generation methods
    async generateAINovelPortrait(name, gender, charClass, background) {
        const prompt = `A highly detailed and fully colored fantasy art portrait of a character named ${name}.
        Gender: ${gender}.
        Class: ${charClass}.
        Appearance details based on their background: ${background}.
        The style should be a realistic fantasy portrait, with dramatic lighting, focusing on the character's face and upper body.
        The background should be atmospheric and relevant to their story.`;

        console.log('🎨 Attempting AI Novel portrait generation...');
        uiManager.displayMessage("Trying AI Novel image service...", 'info');

        // Generate consistent seed based on character name
        const characterSeed = name ? name.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0) : 12345;

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 45000);

            const response = await fetch('https://ainovel.site/api/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (compatible; PedenaRPG/1.0)'
                },
                body: JSON.stringify({
                    prompt: prompt,
                    seed: Math.abs(characterSeed),
                    imageSize: 'portrait_4_3',
                    numInferenceSteps: 50,
                    guidanceScale: 7.5
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                let errorDetails = `HTTP ${response.status}: ${response.statusText}`;
                let errorBody = '';

                try {
                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.includes('application/json')) {
                        const errorData = await response.json();
                        errorBody = JSON.stringify(errorData, null, 2);
                        console.error('AI Novel JSON error response:', errorData);
                    } else {
                        errorBody = await response.text();
                        console.error('AI Novel text error response:', errorBody);
                    }
                } catch (parseError) {
                    console.error('Could not parse error response:', parseError);
                    errorBody = 'Could not parse error response';
                }

                const detailedError = `${errorDetails}\nResponse body: ${errorBody.substring(0, 500)}`;
                console.error('Complete AI Novel error details:', detailedError);

                uiManager.displayMessage(`AI Novel service failed: ${errorDetails}`, 'error');
                throw new Error(detailedError);
            }

            let result;
            try {
                result = await response.json();
                console.log('AI Novel successful response:', result);
            } catch (jsonError) {
                console.error('Failed to parse AI Novel JSON response:', jsonError);
                const responseText = await response.text();
                console.error('Raw response text:', responseText.substring(0, 1000));
                uiManager.displayMessage('AI Novel returned invalid JSON response', 'error');
                throw new Error(`Invalid JSON response from AI Novel: ${jsonError.message}`);
            }

            // Check for various possible image URL properties
            const possibleUrlFields = ['imageUrl', 'image_url', 'url', 'image', 'result', 'data'];
            let imageUrl = null;

            for (const field of possibleUrlFields) {
                if (result[field]) {
                    imageUrl = result[field];
                    console.log(`Found image URL in field '${field}':`, imageUrl);
                    break;
                }
            }

            if (!imageUrl) {
                console.error('No image URL found in AI Novel response. Available fields:', Object.keys(result));
                uiManager.displayMessage('AI Novel did not return an image URL', 'error');
                throw new Error("AI Novel API did not return an image URL in any expected field");
            }

            // Validate the URL
            try {
                new URL(imageUrl);
            } catch (urlError) {
                console.error('Invalid URL returned by AI Novel:', imageUrl);
                uiManager.displayMessage(`AI Novel returned invalid URL: ${imageUrl}`, 'error');
                throw new Error(`Invalid image URL returned: ${imageUrl}`);
            }

            console.log('✅ AI Novel generated valid image URL:', imageUrl);
            uiManager.displayMessage('AI Novel image generated successfully!', 'success');

            return imageUrl;

        } catch (error) {
            if (error.name === 'AbortError') {
                const timeoutMsg = 'AI Novel service timed out after 45 seconds';
                console.error('❌ AI Novel timeout:', timeoutMsg);
                uiManager.displayMessage(timeoutMsg, 'error');
                throw new Error(timeoutMsg);
            } else if (error.message.includes('Failed to fetch')) {
                const networkMsg = 'Network error connecting to AI Novel service (CORS/firewall/DNS issue)';
                console.error('❌ AI Novel network error:', networkMsg);
                uiManager.displayMessage(networkMsg, 'error');
                throw new Error(networkMsg);
            } else {
                console.error('❌ AI Novel service error:', error);
                uiManager.displayMessage(`AI Novel error: ${error.message}`, 'error');
                throw error;
            }
        }
    }

    async generatePicsumPortrait(name) {
        const seed = name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const portraitUrl = `https://picsum.photos/seed/${seed}/300/400?random=${Date.now()}`;

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(portraitUrl);
            img.onerror = () => reject(new Error('Picsum service unavailable'));
            img.src = portraitUrl;
        });
    }

    generateSVGPortrait(name, charClass) {
        const colors = {
            warrior: '#8B4513', mage: '#4B0082', rogue: '#2F4F4F', ranger: '#228B22',
            psychic: '#FFD700', paladin: '#FF4500', bard: '#8A2BE2', cleric: '#FF6347',
            druid: '#32CD32', monk: '#FF8C00', sorcerer: '#8B008B', warlock: '#8B0000',
            barbarian: '#A0522D', brawler: '#8B4513', assassin: '#2F4F4F', hunter: '#228B22',
            shaman: '#FFD700', gladiator: '#FF4500', ninja: '#8A2BE2', summoner: '#FF6347',
            necromancer: '#32CD32', illusionist: '#FF8C00', engineer: '#8B008B',
            alchemist: '#8B0000', scholar: '#A0522D'
        };

        const color = colors[charClass.toLowerCase()] || '#8B4513';
        const initial = name.charAt(0).toUpperCase();

        const svgData = `data:image/svg+xml;base64,${btoa(`
            <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#000;stop-opacity:0.8" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#bg)"/>
                <circle cx="150" cy="120" r="60" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
                <text x="150" y="135" font-family="serif" font-size="48" fill="white" text-anchor="middle" font-weight="bold">${initial}</text>
                <text x="150" y="320" font-family="serif" font-size="20" fill="white" text-anchor="middle">${name}</text>
                <text x="150" y="350" font-family="serif" font-size="16" fill="rgba(255,255,255,0.8)" text-anchor="middle">${charClass}</text>
                <text x="150" y="375" font-family="serif" font-size="14" fill="rgba(255,255,255,0.6)" text-anchor="middle">Level 1</text>
            </svg>
        `)}`;

        return svgData;
    }

    async tryMultipleImageServices(name, gender, charClass, background) {
        const services = [
            {
                name: 'AI Novel API',
                generate: () => this.generateAINovelPortrait(name, gender, charClass, background)
            },
            {
                name: 'Picsum (Placeholder)',
                generate: () => this.generatePicsumPortrait(name)
            },
            {
                name: 'SVG Portrait',
                generate: () => this.generateSVGPortrait(name, charClass)
            }
        ];

        console.log('🎨 Starting portrait generation with services:', services.map(s => s.name));

        for (const service of services) {
            try {
                console.log(`🔄 Trying ${service.name}...`);
                const result = await service.generate();
                if (result) {
                    console.log(`✅ ${service.name} succeeded:`, result);
                    uiManager.displayMessage(`Portrait generated using ${service.name}`, 'success');
                    return result;
                }
            } catch (error) {
                console.warn(`⚠️ ${service.name} failed:`, error.message);
                uiManager.displayMessage(`${service.name} failed: ${error.message}`, 'error');
            }
        }

        console.error('❌ All portrait generation services failed');
        return null;
    }

    // Utility method to roll dice
    rollDice(diceString) {
        if (!diceString || typeof diceString !== 'string') {
            return Math.floor(Math.random() * 6) + 1;
        }

        try {
            const cleanDice = diceString.trim().split(' ')[0];
            const [dicePart, modifier] = cleanDice.split('+');
            const [num, sides] = dicePart.split('d').map(Number);

            if (isNaN(num) || isNaN(sides) || num < 1 || sides < 1) {
                return Math.floor(Math.random() * 6) + 1;
            }

            let total = 0;
            for (let i = 0; i < Math.min(num, 20); i++) {
                total += Math.floor(Math.random() * sides) + 1;
            }

            if (modifier && !isNaN(parseInt(modifier))) {
                total += parseInt(modifier);
            }

            return Math.max(1, total);
        } catch (error) {
            console.error('Error rolling dice:', error, 'String:', diceString);
            return Math.floor(Math.random() * 6) + 1;
        }
    }
}

// Create and export a global instance
export const apiClient = new APIClient();
