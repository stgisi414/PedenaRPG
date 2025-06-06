
// Religions and Belief Systems
export const deities = {
    lumina: {
        name: "Lumina the Dawnbringer",
        domain: ["Light", "Healing", "Hope", "New Beginnings", "Truth"],
        alignment: "Lawful Good",
        symbol: "Golden sun rising over mountains",
        worshippers: ["Healers", "Paladins", "Common folk", "Farmers", "Judges"],
        temples: "Temple of Eternal Dawn in major cities, Sunstone Sanctuaries in Solara Theocracy",
        clergy: "Order of the Golden Sun, Beacon Priests",
        description: "Goddess of light and healing, patron of those who bring hope, truth, and renewal to the world. Widely worshipped, especially in Pedena and Solara Theocracy."
    },
    morteus: {
        name: "Morteus the Gravewarden",
        domain: ["Death", "Rest", "Memory", "Transition", "Ancestors"],
        alignment: "Lawful Neutral",
        symbol: "Skull crowned with forget-me-nots or a simple, unadorned gravestone",
        worshippers: ["Undertakers", "Historians", "The grieving", "Philosophers", "Ancestor venerators"],
        temples: "Silent Crypts in graveyards, Halls of Remembrance, Shrines in Deepdelve",
        clergy: "Silent Brothers and Sisters, Keepers of the Veil",
        description: "God of peaceful death, remembrance, and the natural transition of souls. Ensures the dead rest undisturbed and are honored."
    },
    verdana: {
        name: "Verdana the Wildmother",
        domain: ["Nature", "Growth", "Animals", "Seasons", "Wilderness"],
        alignment: "Neutral Good",
        symbol: "Tree with roots and branches forming a circle, or a blooming flower",
        worshippers: ["Druids", "Rangers", "Farmers", "Hunters", "Herbalists", "Elves of Sylvanmere"],
        temples: "Sacred groves throughout Sylvanmere, living shrines in wild places",
        clergy: "Circle of the Eternal Grove, Green Warden Priests",
        description: "Goddess of nature in all its forms, mother to all living creatures, and guardian of the wilderness."
    },
    thalassa: {
        name: "Thalassa the Stormcaller",
        domain: ["Ocean", "Storms", "Travel", "Adventure", "Luck (for sailors)"],
        alignment: "Chaotic Neutral",
        symbol: "Ship's wheel surrounded by lightning, or a crashing wave",
        worshippers: ["Sailors", "Merchants (sea-faring)", "Adventurers", "Pirates", "Fisherfolk of Azure Isles"],
        temples: "Floating shrines in harbors, clifftop beacons, Coralhaven Grand Temple of Tides",
        clergy: "Tide Priests, Storm Weavers",
        description: "Goddess of the vast and unpredictable seas and storms, patron of those who brave the unknown and live by the ocean's whims."
    },
    ferrum: {
        name: "Ferrum the Forgefather",
        domain: ["Crafting", "Industry", "War", "Strength", "Earth (metals)"],
        alignment: "Lawful Neutral",
        symbol: "Hammer striking an anvil with sparks, or a geared cog",
        worshippers: ["Smiths", "Warriors", "Engineers", "Miners", "Artisans of Vaelthara and Cogsworth", "Dwarves of Deepdelve"],
        temples: "Great Forges in industrial cities, Armory-Shrines in Ironspire, Deepdelve Under-Forges",
        clergy: "Hammerpriests, Cog-Servants",
        description: "God of crafting, innovation, warfare, and the enduring strength of metal and stone. Patron of those who shape the world with their hands and might."
    },
    nyx: {
        name: "Nyx the Shadowweaver",
        domain: ["Darkness", "Secrets", "Magic (illusion, shadow)", "Mystery", "Night"],
        alignment: "True Neutral",
        symbol: "Crescent moon veiled in shadow, or a pair of closed eyes",
        worshippers: ["Spies", "Scholars (of hidden lore)", "Mages (illusionists, shadowmancers)", "Thieves", "Inhabitants of Umbra Marches"],
        temples: "Hidden sanctuaries in shadows, libraries of forbidden texts in Nightsedge",
        clergy: "Veil Keepers, Seekers of the Unseen",
        description: "Goddess of secrets, hidden knowledge, the night, and the more subtle forms of magic. Patron of those who work in shadows and seek what is concealed."
    },
    aerion: {
        name: "Aerion Sky-Lord",
        domain: ["Sky", "Wind", "Freedom", "Birds", "Exploration (aerial)"],
        alignment: "Chaotic Good",
        symbol: "A soaring eagle against a cloud, or a stylized wind spiral",
        worshippers: ["Aerian sky-sailors", "Griffon riders", "Explorers", "Those seeking liberation"],
        temples: "Sky-altars on floating islands (Skyport City), wind-swept cliff shrines",
        clergy: "Windcallers, Sky Priests",
        description: "God of the open sky, the winds, and the spirit of freedom. Revered by the people of Aeria."
    },
    silvanus_the_silent_watcher: {
        name: "Silvanus the Silent Watcher",
        domain: ["Forests (deep, ancient)", "Solitude", "Secrets of the old world", "Endurance", "Stealth"],
        alignment: "True Neutral",
        symbol: "An ancient, moss-covered standing stone or a single, unblinking owl's eye",
        worshippers: ["Hermits", "Ancient treants", "Stealthy hunters", "Keepers of old lore in Sylvanmere"],
        temples: "Untouched ancient groves, hidden cave shrines, often no formal temples",
        clergy: "Whisperers of the Old Wood (rare, solitary)",
        description: "An ancient, reclusive deity of the deepest, oldest forests, concerned with secrets and endurance rather than overt growth."
    },
    khronos_the_timekeeper: {
        name: "Khronos the Timekeeper",
        domain: ["Time", "Fate", "Cycles", "History", "Prophecy"],
        alignment: "Lawful Neutral",
        symbol: "An hourglass with ever-flowing sand, or a coiled serpent eating its tail",
        worshippers: ["Historians", "Astrologers", "Prophets", "Philosophers", "The Keepers of the Eternal Moment (secretly)"],
        temples: "Observatories, great libraries with historical archives (Pedena, Florencia), hidden temporal sanctums",
        clergy: "Oracle Priests, Chroniclers of Ages",
        description: "The god of time and fate, overseeing the cycles of history and the tapestry of destiny. Often seen as impartial and inevitable."
    },
    ignis_prime: {
        name: "Ignis Prime, The Great Inferno",
        domain: ["Fire (primordial)", "Destruction", "Rebirth (through fire)", "Volcanoes", "Forge (raw power)"],
        alignment: "Chaotic Neutral / Chaotic Evil (depending on aspect)",
        symbol: "A stylized volcano erupting, or a pure, uncontrolled flame",
        worshippers: ["Cultists of Ignis Caldera", "Pyromancers", "Destruction-seekers", "Some blacksmiths (for primal heat)"],
        temples: "The Grand Volcano Temple in Obsidian Spire, lava tube shrines",
        clergy: "Flamebearers, Ash Prophets",
        description: "The raw, untamed power of fire and volcanic fury. Worshipped with fervor and fear in Ignis Caldera."
    },
    lithos_the_stoneheart: {
        name: "Lithos the Stoneheart",
        domain: ["Earth", "Mountains", "Endurance", "Stability", "Protection (of the deep)"],
        alignment: "Lawful Neutral",
        symbol: "A perfect, uncut geode or a mountain silhouette",
        worshippers: ["Dwarves of Deepdelve", "Miners", "Stonemasons", "Geomancers"],
        temples: "Carved into mountain hearts (Glowstone Citadel), deep geode caverns",
        clergy: "Stone Shapers, Deep Wardens",
        description: "God of the earth, mountains, and unwavering stability. Patron deity of many in Deepdelve."
    },
    auril_frostmaiden: { // Adapted for Frostfell context
        name: "Auril the Frostmaiden",
        domain: ["Winter", "Cold", "Survival (in arctic conditions)", "Secrets (frozen)", "Endurance (against cold)"],
        alignment: "Neutral Evil / True Neutral (depending on interpretation)",
        symbol: "A six-pointed snowflake with a cruel eye in the center",
        worshippers: ["Frostfell tribes (out of fear and respect)", "Ice mages", "Some winter wolves"],
        temples: "Ice shrines built on glaciers (Icewind Hold outskirts), frozen caves",
        clergy: "Ice Hearths (shamans who appease her)",
        description: "The cruel and beautiful goddess of winter and cold, whose favor is sought for survival in the Frostfell."
    },
    sola_the_eternal_light: { // Primary deity for Solara Theocracy
        name: "Sola, the Eternal Light",
        domain: ["Sun", "Truth", "Justice", "Order", "Purification"],
        alignment: "Lawful Good",
        symbol: "A radiant sun with an eye in the center",
        worshippers: ["The entire Solara Theocracy", "Paladins of justice", "Judges", "Farmers seeking good harvests"],
        temples: "The Grand Solar Cathedral in Sunstone City, Sun-Temples in every Solaran settlement",
        clergy: "Lumenarchs, Sunpriests, Radiant Knights",
        description: "The primary deity of the Solara Theocracy, embodying the sun's life-giving and truth-revealing power."
    },
    umbra_lord_of_shadows: { // Primary deity for Umbra Marches context
        name: "Umbra, Lord of Hidden Paths",
        domain: ["Shadows", "Secrets", "Intrigue", "Night's Veil", "Misdirection"],
        alignment: "Lawful Evil / Neutral Evil",
        symbol: "A stylized black hand with an eye in the palm, or a cloak clasp shaped like a coiled serpent",
        worshippers: ["Assassins", "Spies", "Cultists of Nightsedge", "Those seeking to operate unseen"],
        temples: "The Shadowed Sanctum in Nightsedge, hidden shrines in dark alleys",
        clergy: "Nightcloaks, Whisper Masters",
        description: "The god of shadows, secrets, and intrigue, to whom many in the Umbra Marches pay homage for power and concealment."
    },
    spirit_of_the_great_herd: { // For Whispering Steppes
        name: "The Great Sky-Father / Earth-Mother (Spirit of the Great Herd)",
        domain: ["Sky", "Earth", "Animals (especially herd animals)", "Nomadic life", "Ancestors of the Steppes"],
        alignment: "True Neutral",
        symbol: "A stylized bison skull with sky-blue horns, or a galloping horse silhouette against a vast sky",
        worshippers: ["Nomad Clans of the Whispering Steppes", "Sky-spirit shamans", "Hunters"],
        temples: "Mobile tent-shrines, sacred rock formations (Sky Altar Plateau), ancestral mounds",
        clergy: "Spirit-Speakers, Khan-Shamans",
        description: "Not a single deity but a pantheon or a singular great spirit representing the vital forces of the Steppes, revered by the nomadic tribes."
    },
    the_focused_mind: { // For Serene Peaks
        name: "The Focused Mind (The Great Teacher)",
        domain: ["Ki", "Enlightenment", "Discipline", "Inner Peace", "Martial Prowess (mental aspect)"],
        alignment: "Lawful Neutral",
        symbol: "An empty circle, or hands clasped in meditation",
        worshippers: ["Monks of the Serene Peaks", "Philosophers", "Those seeking inner balance"],
        temples: "The Silent Summit Monastery, meditation halls in Stone Lantern Village",
        clergy: "Abbots, Senseis, Enlightened Masters",
        description: "More a concept or an enlightened state than a personal deity, representing the path to inner mastery and peace through discipline."
    },
    the_prime_mover_cogsworth: { // For Cogsworth
        name: "The Prime Mover (The Great Cog)",
        domain: ["Invention", "Clockwork", "Steam Power", "Logic", "Order (mechanical)"],
        alignment: "Lawful Neutral",
        symbol: "An intricate set of interlocking gears, or a stylized blueprint",
        worshippers: ["Inventors and Engineers of Cogsworth", "Mechanists", "Clockmakers"],
        temples: "The Grand Calculation Engine in Gearhaven (functions as a temple/university)",
        clergy: "Logic Priests, Master Mechanics",
        description: "The embodiment of perfect clockwork precision and the spark of invention, revered by the citizens of Cogsworth."
    },
    maman_brigitte_loa_of_the_fen: { // For Murkwater Fen
        name: "Maman Brigitte (Loa of Life, Death, and the Fen)",
        domain: ["Swamps", "Spirits (Loa)", "Life/Death cycle (local)", "Protection (of the Fen)", "Herbalism (swamp)"],
        alignment: "Chaotic Neutral (can be benevolent or wrathful)",
        symbol: "A skull adorned with swamp lilies, or a coiled water serpent",
        worshippers: ["Tribes of Murkwater Fen", "Voodoo practitioners", "Fenland healers"],
        temples: "Sacred mudflats, spirit houses in Stilt Town, ancient gnarled trees",
        clergy: "Mambos and Houngans (Voodoo Queen Mambo Ezili is preeminent)",
        description: "A powerful Loa (spirit deity) who embodies the fierce, cyclical nature of the Murkwater Fen, dealing in life, death, and potent swamp magic."
    },
    muse_of_bellezza: { // For Florencia
        name: "Calliope, Muse of Inspiration",
        domain: ["Arts (all forms)", "Beauty", "Creativity", "Eloquence", "Knowledge (cultural)"],
        alignment: "Chaotic Good",
        symbol: "A golden lyre wreathed in laurel, or an open scroll with a quill",
        worshippers: ["Artists, poets, musicians, sculptors of Florencia", "Scholars", "Patrons of the Arts"],
        temples: "The Grand Florentine Opera House (serves as a major temple), art academies, garden shrines",
        clergy: "Orators of the Muse, Keepers of the Sacred Flame (of inspiration)",
        description: "The divine muse inspiring all forms of art, beauty, and eloquent expression, highly revered in Florencia."
    },
    the_trickster_spirit: {
        name: "The Trickster Spirit (Coyote, Raven, Fox - many names)",
        domain: ["Luck (unpredictable)", "Mischief", "Freedom (from rules)", "Adaptation", "Survival (through cunning)"],
        alignment: "Chaotic Neutral",
        symbol: "A laughing animal mask, or a path that abruptly changes direction",
        worshippers: ["Rogues", "Gamblers", "Outcasts", "Some nomadic tribes (Whispering Steppes, Dustlands)", "Rebels"],
        temples: "No formal temples; makeshift shrines in hidden places, crossroads",
        clergy: "Wandering storytellers, clever con artists claiming inspiration",
        description: "A capricious spirit or minor deity of luck, mischief, and cunning, appearing in many cultures under different guises."
    },
    typhon_the_world_breaker: {
        name: "Typhon, The World-Breaker",
        domain: ["Chaos", "Destruction (cataclysmic)", "Monsters", "Primordial Fury", "Forbidden Power"],
        alignment: "Chaotic Evil",
        symbol: "A fractured world orb, or a monstrous, many-headed silhouette",
        worshippers: ["Apocalyptic cults (like some factions within the Shadow Cult)", "Power-hungry sorcerers", "Leaders of monster hordes"],
        temples: "Desecrated ruins, sites of great disasters, hidden lairs where sacrifices are made",
        clergy: "Harbingers of Ruin, Maw-Priests",
        description: "An ancient, primordial entity of destruction and chaos, whose followers seek to unravel reality or gain immense, destructive power."
    }
};

export const religions = {
    church_of_lumina: {
        name: "Church of the Eternal Dawn",
        primaryDeity: "Lumina", // Or Sola for Solara Theocracy, this is the general one
        structure: "Hierarchical with High Priest/Priestess at top (e.g., in Pedena)",
        influence: "Very High in Pedena, significant in Solara Theocracy (as Church of Sola)",
        beliefs: ["Light conquers darkness", "Healing is sacred duty", "Hope must be preserved", "Truth illuminates the path"],
        practices: ["Dawn prayers", "Healing services", "Charity work", "Temple upkeep", "Spreading enlightenment"],
        holyDays: ["Festival of First Light (Spring Equinox)", "Midsummer's Peak of Radiance", "Harvest Blessing", "Winter Solstice Vigil of Hope"],
        description: "Dominant religion in many good-aligned human lands, focused on healing, hope, truth, and bringing light to the world."
    },
    circle_of_seasons: {
        name: "Circle of the Eternal Seasons",
        primaryDeity: "Verdana", // And often Silvanus the Silent Watcher in deeper Sylvanmere
        structure: "Decentralized druidic circles with elder councils, a High Druid in Moonhaven",
        influence: "Dominant in Sylvanmere, respected by rangers and rural communities elsewhere",
        beliefs: ["Balance in all things", "Nature knows best", "Death feeds new life", "The interconnectedness of all living things"],
        practices: ["Seasonal ceremonies", "Animal communion", "Plant cultivation", "Protecting sacred groves", "Weather whispering"],
        holyDays: ["Spring Awakening Rite", "Summer Solstice Sun Celebration", "Autumn Harvest Feast", "Winter's Slumber Vigil"],
        description: "Nature-based religion emphasizing balance, the cycle of seasons, and respect for all life."
    },
    forge_brotherhood: {
        name: "Brotherhood of the Eternal Forge",
        primaryDeity: "Ferrum", // And often Lithos in Deepdelve
        structure: "Guild-like with Master Smiths and Chief Engineers as priests/leaders",
        influence: "Strong in Vaelthara, Deepdelve, Cogsworth and industrial areas of Pedena",
        beliefs: ["Work shapes destiny", "Strength through discipline and creation", "Innovation is a virtue", "The earth's gifts must be masterfully shaped"],
        practices: ["Dawn smithing/crafting rituals", "Weapon and tool blessing", "Apprentice initiation ceremonies", "The Great Anvil Rite"],
        holyDays: ["Forgefire Festival (celebrating a great invention or creation)", "Day of the Master Smith", "Iron Solidarity Day", "Festival of Innovation (Cogsworth)"],
        description: "Religion of crafters, warriors, and innovators, emphasizing hard work, strength, and the power of creation and industry."
    },
    tide_singers: {
        name: "Tide Singers of Thalassa",
        primaryDeity: "Thalassa",
        structure: "Loose confederation of sea priests, oracle divers, and ship captains leading local worship",
        influence: "Strong in coastal regions, dominant in the Azure Isles",
        beliefs: ["The sea is life and death; respect its power", "Change is constant as the tides", "Adventure brings growth and fortune", "Luck favors the bold"],
        practices: ["Storm dancing to appease or call storms", "Ship blessing before voyages", "Tide reading for prophecy", "Offerings to the deep"],
        holyDays: ["Storm's End Festival (after major hurricanes)", "First Voyage Blessing (for new ships/captains)", "Deep Tide Festival (annual tribute)", "Blessing of the Nets"],
        description: "Maritime religion focused on adventure, the ever-changing nature of the sea, and respecting its formidable power."
    },
    shadow_mysteries: {
        name: "Mysteries of the Veiled Moon",
        primaryDeity: "Nyx", // And often Umbra, Lord of Hidden Paths, in Umbra Marches
        structure: "Secret cells and initiates with hidden councils and a clandestine hierarchy",
        influence: "Hidden but widespread, strong in Umbra Marches and among intelligence networks",
        beliefs: ["Knowledge is power, especially hidden knowledge", "Some truths must be shielded from the unworthy", "Darkness preserves secrets and offers refuge", "Balance between light and shadow is necessary"],
        practices: ["Secret rituals under the new moon", "Information gathering and trading", "Magical research into illusions and shadow", "Tests of discretion and cunning"],
        holyDays: ["Night of No Moon (most sacred)", "Revelation of Secrets (annual sharing of minor hidden truths)", "Shadow Dance Festival (masked revelry)", "The Longest Night Vigil"],
        description: "A mystery religion focused on hidden knowledge, secrets, the power of the night, and the delicate balance of light and dark."
    },
    cult_of_the_great_serpent: { // New Religion 1
        name: "Cult of the Great Serpent",
        primaryDeity: "Typhon, The World-Breaker (often disguised or referred to obliquely as 'The Coiled One' or 'The Earthshaker')",
        structure: "Secretive cells led by charismatic 'Fang Speakers', ultimate leadership unknown or extra-planar",
        influence: "Low but dangerous, scattered cells in remote regions (Dustlands ruins, Deepdelve fissures, Ignis Caldera's underbelly)",
        beliefs: ["The world is flawed and must be unmade to be reborn", "Power lies in primordial chaos", "Great monsters are avatars of true power", "Sacrifice appeases the ancient ones"],
        practices: ["Secretive blood rituals", "Summoning of monstrous entities", "Attempts to awaken ancient destructive beings", "Infiltration of powerful organizations"],
        holyDays: ["The Great Unraveling (prophesied day of destruction)", "Feast of Fangs (ritual sacrifice)", "Night of Whispering Scales (communion attempts)"],
        description: "An apocalyptic cult worshipping primordial destructive forces, often disguised, seeking to bring about a cataclysmic end or gain immense power from it."
    },
    the_ancestral_hearth_guardians: { // New Religion 2
        name: "Ancestral Hearth Guardians",
        primaryDeity: "Morteus (as guardian of lineage) and local ancestor spirits",
        structure: "Family-based, led by clan elders or community historians, no central authority",
        influence: "Medium within traditional communities (Pedena countryside, Vaelthara old families, Whispering Steppes tribes)",
        beliefs: ["The wisdom of ancestors guides the living", "Family and lineage are sacred", "Honoring the dead ensures prosperity for the living", "Memory preserves the soul"],
        practices: ["Regular offerings at ancestor shrines", "Recitation of family histories", "Funerary rites focused on remembrance", "Seeking guidance from elder spirits"],
        holyDays: ["Day of Remembrance (annual ancestor veneration)", "Clan Gathering Feasts", "Naming Day (honoring ancestors by naming newborns)"],
        description: "A widespread folk religion focused on the veneration of ancestors and seeking their guidance and protection for the family and community."
    },
    the_path_of_perfect_form: { // New Religion 3
        name: "The Path of Perfect Form",
        primaryDeity: "The Focused Mind (as an ideal) and masters who achieved 'perfection'",
        structure: "Monastic schools with a lineage of masters and disciples, some solitary practitioners",
        influence: "Dominant in Serene Peaks, with small dojos in other major cities (Pedena, Florencia)",
        beliefs: ["Perfection of body and mind is achievable through discipline", "Ki is the energy of life and can be mastered", "Inner peace leads to outer strength", "Action and inaction must be in balance"],
        practices: ["Rigorous martial arts training", "Deep meditation and Ki cultivation", "Calligraphy and philosophical study", "Asceticism"],
        holyDays: ["The Great Test (annual martial tournament and Ki display)", "Day of Silent Contemplation", "Festival of the Five Elements (aligning Ki)"],
        description: "A disciplined philosophy and martial religion centered in the Serene Peaks, focused on achieving physical and spiritual perfection."
    },
    the_celestial_compact: { // New Religion 4
        name: "The Celestial Compact",
        primaryDeity: "Pantheon including Lumina, Sola, Khronos, and other benevolent sky/fate deities",
        structure: "Council of high priests from different temples, often involved in astrology and prophecy",
        influence: "Medium among scholars, navigators (Aeria, Azure Isles), and those concerned with fate",
        beliefs: ["The stars govern destiny", "Divine beings work in concert for a grand cosmic plan", "Understanding celestial movements reveals the future", "Harmony among gods reflects harmony in the world"],
        practices: ["Astrological charting and divination", "Grand celestial observances", "Cooperative multi-faith rituals", "Maintaining ancient calendars"],
        holyDays: ["Conjunction of Spheres (rare planetary alignment)", "Starfall Festival (meteor showers)", "Festival of Divine Unity"],
        description: "A syncretic religion that sees a unified pantheon in the celestial bodies, focusing on prophecy, fate, and cosmic harmony."
    },
    the_cogwork_oracle_faith: { // New Religion 5
        name: "The Cogwork Oracle Faith",
        primaryDeity: "The Prime Mover (The Great Cog) and the 'Logic Engine' (a central calculating machine)",
        structure: "Techno-priests who maintain the Logic Engine, engineers as lay ministers",
        influence: "Growing rapidly in Cogsworth, some influence in Pedena's more industrial sectors",
        beliefs: ["Logic and precision are the highest virtues", "The universe is a grand machine", "The Prime Mover's plans are revealed through calculation and invention", "Efficiency is divine"],
        practices: ["Maintenance and 'worship' of the Logic Engine", "Design and construction of intricate clockwork offerings", "Logical problem-solving rituals", "The 'Great Recalibration' festival"],
        holyDays: ["Day of the First Gear", "Festival of Calculated Futures", "The Synchronicity Symposium"],
        description: "A religion centered in Cogsworth, believing that a divine, logical order underpins reality, discoverable through mechanics and computation."
    }
};

export const cults = {
    void_seekers: {
        name: "Seekers of the Endless Void",
        type: "Nihilistic Cult",
        secretLevel: "Highly Secret",
        danger: "Extremely High",
        beliefs: ["Existence is suffering", "Void is peace", "Reality must end"],
        practices: ["Void meditation", "Reality corruption", "Summoning void entities"],
        leader: "The Null Prophet",
        description: "Dangerous cult seeking to unravel reality itself"
    },
    crimson_hand: {
        name: "The Crimson Hand",
        type: "Blood Magic Cult",
        secretLevel: "Secret",
        danger: "High",
        beliefs: ["Power through sacrifice", "Blood holds life essence", "Strength over weakness"],
        practices: ["Blood rituals", "Sacrifice ceremonies", "Pain meditation"],
        leader: "Bloodmaster Scar",
        description: "Cult practicing forbidden blood magic and sacrifice"
    },
    golden_coin: {
        name: "Order of the Golden Coin",
        type: "Wealth Worship",
        secretLevel: "Semi-Open",
        danger: "Medium",
        beliefs: ["Wealth is virtue", "Poverty is sin", "Gold grants immortality (metaphorically or literally)"],
        practices: ["Wealth accumulation", "Economic manipulation", "Luxury rituals", "Philanthropy (for influence)"],
        leader: "The Gilded Hierophant (formerly The Golden Prophet)",
        description: "Cult that worships wealth and material possessions above all else, often infiltrating merchant guilds and financial institutions."
    },
    children_of_the_ash: {
        name: "Children of the Ash",
        type: "Post-Apocalyptic Survival Cult",
        secretLevel: "Secret (operates in ruins)",
        danger: "Medium to High (territorial, desperate)",
        beliefs: ["The old world was decadent and deserved its fall", "Only the strong and pure will survive the 'Great Filter'", "Scavenging is a holy act", "New world from the ashes"],
        practices: ["Ritualistic scavenging", "Strict adherence to survivalist dogma", "Worship of 'Relics of the Before-Times'", "Testing initiates for resilience"],
        leader: "Elder Scorch (often a title)",
        description: "Groups that have formed in the aftermath of localized disasters or in blighted lands, believing the 'end times' have passed and only the worthy will inherit the new, harsh world."
    },
    whisperers_of_the_deep_root: {
        name: "Whisperers of the Deep Root",
        type: "Aberrant Nature Cult / Primalists",
        secretLevel: "Highly Secret (primarily among isolated communities or corrupted druid circles)",
        danger: "High (manipulative, can command corrupted nature)",
        beliefs: ["Nature's 'true' form is raw, untamed, and consuming", "Civilization is a blight", "The Deep Roots hold ancient, hungry power", "Reversion to primal state is enlightenment"],
        practices: ["Blood sacrifices to ancient trees or earth spirits", "Consumption of hallucinogenic fungi to 'commune'", "Twisting natural life into monstrous forms", "Undermining civilized settlements near wild areas"],
        leader: "The Voice of the Gnarlwood (often a corrupted treant or a powerful, unhinged druid)",
        description: "A dark reflection of druidic circles, these cultists worship the terrifying, consuming aspects of nature, seeking to unleash its raw power upon the civilized world."
    }
};

export const philosophies = {
    balance_seekers: {
        name: "Philosophy of Perfect Balance (The Equilibrium Path)",
        origin: "Ancient Sylvanmere scholars and Serene Peaks ascetics",
        coreIdea: "True wisdom and societal harmony come from understanding, respecting, and maintaining equilibrium between opposing forces (light/dark, order/chaos, nature/civilization).",
        practitioners: ["Judges", "Mediators", "Scholarly monks", "Diplomats", "Some druids"],
        description: "Philosophical school emphasizing balance in all aspects of life, nature, and governance, believing extremes lead to suffering."
    },
    progress_doctrine: {
        name: "Doctrine of Endless Progress (The Unfolding Scroll)",
        origin: "Vaelthara engineers, Cogsworth innovators, and Pedena arcane researchers",
        coreIdea: "Humanity's (and other sentient races') purpose is to constantly advance, innovate, and improve upon existing conditions through technology, magic, and social structures.",
        practitioners: ["Inventors", "Researchers", "Progressive politicians", "Ambitious mages", "Master artisans seeking new techniques"],
        description: "Philosophy that views technological, magical, and societal advancement as moral imperatives, striving for a 'better future'."
    },
    simple_path: {
        name: "The Simple Path (Hearthstone Philosophy)",
        origin: "Rural Pedena communities and Halfling villages",
        coreIdea: "True happiness and fulfillment are found in simple pleasures, honest work, strong community bonds, and a life lived close to the land and family.",
        practitioners: ["Farmers", "Artisans", "Village leaders", "Many common folk", "Some retired adventurers"],
        description: "Philosophy emphasizing simplicity, community, hard work, and finding joy in everyday life and personal relationships."
    },
    the_stoic_shield: {
        name: "The Stoic Shield (The Unbent Reed)",
        origin: "Vaeltharan legionnaire veterans and philosophers from besieged cities",
        coreIdea: "Virtue, reason, and resilience in the face of adversity are paramount. One cannot control external events, only one's reaction to them. Duty and discipline are key.",
        practitioners: ["Soldiers", "Guards", "Stoic mages", "Individuals facing hardship", "Some dwarven clans in Deepdelve"],
        description: "A philosophy centered on enduring hardship with courage and reason, focusing on inner strength, duty, and emotional control."
    },
    primal_truth_seekers: {
        name: "Primal Truth Seekers (The Wild Heart)",
        origin: "Frostfell shamans, nomadic tribes of the Whispering Steppes, and some Sylvanmere recluses",
        coreIdea: "The truest understanding of the world comes from direct experience with raw nature, unmarred by civilization. Instinct and ancestral spirits hold profound wisdom.",
        practitioners: ["Shamans", "Tribal hunters", "Hermits", "Rangers who shun cities", "Barbaric warriors"],
        description: "A philosophy that rejects complex societal structures and 'civilized' knowledge in favor of instinct, raw experience, and communion with primal nature or spirits."
    },
    the_eternal_cycle_doctrine: {
        name: "The Eternal Cycle Doctrine (Wheel of Ages)",
        origin: "Ancient Dustlands mystics and Khronos's more philosophical followers",
        coreIdea: "All existence is part of an unending cycle of creation, destruction, and rebirth. Individual lives and civilizations are fleeting, but the Cycle itself is eternal and sacred.",
        practitioners: ["Long-lived races (elves, dragons in disguise)", "Historians studying deep time", "Certain priests of Morteus or Khronos", "Sages"],
        description: "A cyclical view of existence, emphasizing the impermanence of individual things but the eternal nature of cosmic processes and rebirth."
    },
    aesthetic_perfectionism_florentine: {
        name: "Aesthetic Perfectionism (The Divine Form)",
        origin: "Florencia artistic and scholarly circles, worshippers of the Muse of Bellezza",
        coreIdea: "The pursuit and creation of perfect beauty in art, form, and thought is the highest calling, reflecting a divine order or inspiring mortals to greatness.",
        practitioners: ["Master artists", "Sculptors", "Poets", "Architects", "Some nobles and patrons of the arts"],
        description: "A philosophy dominant in Florencia, positing that the ultimate human endeavor is the creation and appreciation of absolute beauty and masterful artistry."
    },
    libertine_creed: {
        name: "The Libertine Creed (Freedom's Call)",
        origin: "Azure Isles free ports, some chaotic elements in Pedena's underbelly, traveling bards",
        coreIdea: "Personal freedom and the pursuit of individual pleasure and experience are the highest goods. Laws and strictures that limit this are to be questioned or circumvented.",
        practitioners: ["Pirates", "Some adventurers", "Hedonistic nobles", "Free-spirited artists", "Rebels against strict laws"],
        description: "A philosophy that champions individual liberty above all else, often leading to hedonism or a disregard for restrictive societal norms."
    },
    the_shadow_synthesis: {
        name: "The Shadow Synthesis (Nyx's Gambit)",
        origin: "Intellectual circles within Umbra Marches, some pragmatic mages",
        coreIdea: "Light and dark, good and evil, order and chaos are not absolute opposites but necessary components of a greater, more complex whole. True understanding requires embracing all facets.",
        practitioners: ["Gray mages", "Philosophical spies", "Diplomats dealing with morally ambiguous factions", "Followers of Nyx"],
        description: "A nuanced philosophy that rejects simplistic dualism, seeking understanding and utility in the interplay of seemingly opposing forces."
    },
    the_survivalist_compact: {
        name: "The Survivalist Compact (Iron Will)",
        origin: "Harsh environments like Iron Wastes, Frostfell, and active warzones in Vaelthara",
        coreIdea: "The only absolute truth is survival. All actions are justified if they ensure the continuation of oneself, one's kin, or one's group against a hostile world.",
        practitioners: ["Hardened mercenaries", "Isolated communities", "Desperate refugees", "Some goblinoid tribes"],
        description: "A grim, pragmatic philosophy born of extreme hardship, where survival is the ultimate and often only guiding principle."
    }
};

