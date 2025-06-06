
// Factions and Political Organizations
export const factions = {
    crystal_order: {
        name: "Order of the Crystal Flame",
        type: "Magical Order",
        alignment: "Lawful Good",
        influence: "High",
        headquarters: "Crystal Sanctum, Pedena Royal City",
        leader: "Archmage Lyralei Starweaver",
        goals: ["Preserve magical knowledge", "Protect the innocent", "Maintain magical balance"],
        allies: ["Royal Guard of Pedena", "Healers Guild", "Solara Theocracy (cautiously)"],
        enemies: ["Shadow Cult", "Chaos Mages", "Vaeltharan Empire (ideologically)"],
        description: "Elite order of mages dedicated to using magic for the betterment of all."
    },
    shadow_cult: {
        name: "Cult of the Void Shadow",
        type: "Secret Society / Apocalyptic Cult",
        alignment: "Chaotic Evil",
        influence: "Medium (Covert)",
        headquarters: "Unknown (suspected: The Shadowfen Bog, Vaelthara or deep within Umbra Marches)",
        leader: "The Faceless Prophet (identity unknown)",
        goals: ["Summon ancient darkness", "Corrupt magical sources", "Usher in an age of shadow"],
        allies: ["Demon cultists", "Undead necromancers", "Corrupted fey"],
        enemies: ["Order of the Crystal Flame", "Solara Theocracy", "Wardens of the Ancient Grove", "All major kingdoms"],
        description: "Secretive cult seeking to unleash primordial darkness upon the world."
    },
    iron_legion: {
        name: "The Iron Legion",
        type: "Military Organization (Vaelthara Empire)",
        alignment: "Lawful Neutral",
        influence: "Very High (within Vaelthara)",
        headquarters: "Ironspire Citadel, Vaelthara",
        leader: "Grand Marshal Vorlag Steelgrave (reports to Empress Seraphina)",
        goals: ["Expand Vaelthara Empire", "Maintain military supremacy", "Enforce imperial law"],
        allies: ["Vaeltharan weaponsmiths guilds", "Select mercenary companies"],
        enemies: ["Rebel groups within Vaelthara", "Armies of opposing nations", "Pedena (historical rival)"],
        description: "Elite military force serving as the backbone of the Vaelthara Empire, known for its discipline and brutality."
    },
    nature_wardens: {
        name: "Wardens of the Ancient Grove",
        type: "Environmental Guardians / Druidic Circle",
        alignment: "Neutral Good",
        influence: "Medium (High within Sylvanmere)",
        headquarters: "Heart of Sylvanmere, Moonhaven",
        leader: "Archdruid Elara Meadowlight (also owner of Verdant Vial)",
        goals: ["Protect natural balance", "Guard ancient secrets", "Heal corrupted lands", "Resist industrial expansion"],
        allies: ["Animal spirits", "Sylvanmere druids", "Fey allies", "Herbalist Guilds"],
        enemies: ["Industrial polluters (Cogsworth)", "Demon summoners", "Ignis Caldera (expansionist fire cults)"],
        description: "Guardians of nature's sacred places and ancient wisdom, deeply connected to the Sylvanmere Federation."
    },
    merchant_princes_coalition: { // Renamed for clarity
        name: "Coalition of Merchant Princes",
        type: "Trade Consortium",
        alignment: "True Neutral",
        influence: "High (Economic)",
        headquarters: "Golden Pavilion, Sandport, Dustlands",
        leader: "Prince-Merchant Khalim Al-Rashid",
        goals: ["Control trade routes", "Maximize profits", "Maintain trade stability", "Influence political decisions through wealth"],
        allies: ["Caravan guards guilds", "Various trading companies", "Corrupt officials"],
        enemies: ["Bandit kings", "Trade competitors (especially Pedena Royal Bank)", "Vaeltharan tariffs"],
        description: "Powerful alliance of the wealthiest merchants controlling desert trade and beyond."
    },
    skyguard_of_aeria: {
        name: "Skyguard of Aeria",
        type: "Aerial Military & Exploration Force",
        alignment: "Lawful Neutral",
        influence: "High (within Aeria)",
        headquarters: "Tempest Spire, Aeria",
        leader: "Grand Sky-Marshal Lyra Cloudwing (also ruler of Aeria)",
        goals: ["Defend Aerian territories", "Explore the Sea of Clouds", "Maintain skyship superiority", "Secure Aetherium resources"],
        allies: ["Aerian Inventors' Guild", "Weather Mages"],
        enemies: ["Sky pirates", "Hostile sky-beasts", "Nations attempting to steal Aetherium tech (Vaelthara, Cogsworth)"],
        description: "Aeria's elite aerial force, patrolling the skies on advanced skyships and trained griffons."
    },
    deepdelve_miners_guild_council: {
        name: "Deepdelve Miners' Guild Council",
        type: "Labor & Trade Organization",
        alignment: "Lawful Neutral",
        influence: "Very High (within Deepdelve)",
        headquarters: "Mithril Hall, Deepdelve",
        leader: "Council of Clan Elders (rotating spokesperson, currently Foreman Borin Deepvein)",
        goals: ["Regulate mining operations", "Ensure fair trade of ores and gems", "Protect dwarven and gnomish interests", "Maintain Deep Roads"],
        allies: ["Adamant Anvil (Durin Stonehammer)", "Glowstone Citadel government"],
        enemies: ["Underdark monster incursions", "Surface world entities trying to exploit their resources unfairly", "Duergar raiding parties"],
        description: "The powerful governing body of miners in Deepdelve, controlling access to vast mineral wealth."
    },
    frostfang_tribes_confederacy: {
        name: "Frostfang Tribes Confederacy",
        type: "Tribal Alliance",
        alignment: "Chaotic Neutral",
        influence: "Medium (Regional to Frostfell)",
        headquarters: "The Great Moot at Icewind Hold (seasonal)",
        leader: "Jarl Thora Snowstrider (spokesperson, but individual tribes vary)",
        goals: ["Survive the harsh Frostfell", "Protect ancestral lands", "Hunt great beasts", "Resist Vaeltharan encroachment"],
        allies: ["Friendly spirit animals", "Occasional rogue druids"],
        enemies: ["Vaeltharan Empire (expansion)", "Ice giants", "Remorhazes"],
        description: "A loose alliance of hardy nomadic tribes in the Frostfell, valuing strength and tradition."
    },
    ashwalkers_of_ignis: {
        name: "Ashwalkers of Ignis",
        type: "Religious Cult / Survivalist Group",
        alignment: "Neutral Evil",
        influence: "Medium (within Ignis Caldera)",
        headquarters: "Sunken Temple of the Magma Heart, Ignis Caldera",
        leader: "Magus Volcanus (claims to speak for the volcano)",
        goals: ["Appease the great volcano", "Gain power from geothermal energies", "Expand territory by 'cleansing fire'"],
        allies: ["Fire elementals", "Salamander clans"],
        enemies: ["Sylvanmere Federation (opposing element)", "Azure Isles (water clashes)", "Those who disrespect fire"],
        description: "Fanatical worshippers of the volcanic forces of Ignis Caldera, believing fire is the ultimate purifier."
    },
    triton_confederacy_azure: {
        name: "Triton Confederacy of the Azure",
        type: "Underwater Kingdom Alliance",
        alignment: "Lawful Good",
        influence: "Medium (Aquatic)",
        headquarters: "The Gilded Coral Palace (underwater near Coralhaven)",
        leader: "King Tritonus Wavebreaker",
        goals: ["Protect the seas and its inhabitants", "Maintain balance in the Azure Isles", "Trade peacefully with surface dwellers (cautiously)"],
        allies: ["Azure Isles Navy (Sea Lord Kaia)", "Friendly sea creatures"],
        enemies: ["Kraken cultists", "Sea pirates", "Polluting surface nations"],
        description: "An alliance of Triton and Merfolk kingdoms ruling the deeper waters of the Azure Archipelago."
    },
    knights_of_the_radiant_sun: {
        name: "Knights of the Radiant Sun",
        type: "Holy Knightly Order",
        alignment: "Lawful Good",
        influence: "High (within Solara Theocracy)",
        headquarters: "Radiant Bastion, Solara Theocracy",
        leader: "High Commander Elara Sunguard",
        goals: ["Uphold the tenets of the Sun God", "Protect the faithful", "Vanquish undead and shadow creatures", "Spread the light of Solara"],
        allies: ["Solara Theocracy priesthood", "Order of the Crystal Flame (shared goals)"],
        enemies: ["Shadow Cult", "Umbra Marches denizens", "Necromancers"],
        description: "The elite holy warriors of the Solara Theocracy, clad in shining armor and wielding sun-blessed weapons."
    },
    the_veiled_hand: {
        name: "The Veiled Hand",
        type: "Spy Network & Assassin Guild",
        alignment: "Neutral Evil",
        influence: "Medium (Covert, widespread)",
        headquarters: "Hidden safehouses in multiple major cities (Nightsedge, Pedena Royal City, Sandport)",
        leader: "The Night Whisper (identity unknown)",
        goals: ["Gather intelligence for paying clients", "Eliminate targets discreetly", "Manipulate political events from the shadows"],
        allies: ["Corrupt nobles", "Desperate merchants", "Anyone with enough coin"],
        enemies: ["City guards", "Royal intelligence agencies", "Those they are paid to target"],
        description: "A shadowy organization offering services of espionage, sabotage, and assassination for the right price."
    },
    plainsriders_collective: {
        name: "Plainsriders' Collective",
        type: "Nomadic Alliance",
        alignment: "True Neutral",
        influence: "Medium (Regional to Whispering Steppes)",
        headquarters: "Follows the Great Khan's camp (Khanbaliq)",
        leader: "Elder Chieftain Altan Nightmane",
        goals: ["Preserve nomadic traditions", "Protect grazing lands", "Facilitate trade among tribes", "Maintain freedom from settled lands"],
        allies: ["Other nomadic tribes", "Spirit shamans of the Steppes"],
        enemies: ["Vaeltharan expansionists", "Dustlands Consortium (resource disputes)", "Bandit clans"],
        description: "A council representing various nomadic tribes of the Whispering Steppes, focused on their collective survival and freedom."
    },
    brotherhood_of_the_focused_ki: {
        name: "Brotherhood of the Focused Ki",
        type: "Monastic Order / Martial Artists",
        alignment: "Lawful Neutral",
        influence: "Low (but respected for skill)",
        headquarters: "The Silent Fist Dojo, Silent Summit Monastery, Serene Peaks",
        leader: "Grand Master Rinpo (also shop owner)",
        goals: ["Achieve physical and spiritual perfection", "Master Ki energy", "Protect ancient martial traditions", "Offer guidance to worthy students"],
        allies: ["Other Serene Peaks monasteries", "Philosophical scholars"],
        enemies: ["Those who would misuse Ki for evil", "Disruptors of peace"],
        description: "An ancient order of martial artists dedicated to mastering their bodies and minds through rigorous training and meditation."
    },
    cogsmiths_innovators_guild: {
        name: "Cogsmiths & Innovators' Guild",
        type: "Technological & Crafting Guild",
        alignment: "Neutral Good",
        influence: "Very High (within Cogsworth)",
        headquarters: "The Grand Inventors' Guildhall, Gearhaven, Cogsworth",
        leader: "Chief Inventor Beatrice Cogwright (also ruler of Cogsworth)",
        goals: ["Advance clockwork and steam technology", "Promote innovation and invention", "Improve quality of life through machines", "Standardize mechanical components"],
        allies: ["Precision Gears & Pistons Smithy", "Most Cogsworth businesses"],
        enemies: ["Luddites", "Magical orders fearing technology (some Pedena factions)", "Industrial spies from Vaelthara"],
        description: "The primary governing and research body in Cogsworth, driving its technological advancement."
    },
    murkwaters_spirit_callers: {
        name: "Murkwater's Spirit-Callers",
        type: "Shamanistic Circle / Tribal Council",
        alignment: "Chaotic Neutral",
        influence: "High (within Murkwater Fen)",
        headquarters: "The Sunken Log Council Ring, near Stilt Town",
        leader: "Elder Bog-Whisper (advised by Mambo Ezili)",
        goals: ["Commune with fen spirits (Loa)", "Protect the Murkwater ecosystem", "Maintain tribal traditions and independence", "Offer spiritual guidance and remedies"],
        allies: ["Mambo Ezili's Spiritual Remedies", "Friendly fen spirits", "Certain reclusive druids"],
        enemies: ["Those who would drain the swamps", "Exploitative outsiders", "Malevolent spirits"],
        description: "A council of powerful shamans and spirit-callers who guide the tribes of the Murkwater Fen."
    },
    florentine_patrons_of_art_society: {
        name: "Florentine Patrons of Art Society",
        type: "Cultural & Economic Alliance",
        alignment: "True Neutral",
        influence: "High (Cultural & Economic in Florencia)",
        headquarters: "The Medici Villa, Bellezza City, Florencia",
        leader: "Duke Lorenzo di Medici (unofficial head)",
        goals: ["Foster artistic and scholarly pursuits", "Increase Florencia's cultural prestige", "Fund grand projects (architecture, opera)", "Maintain wealth and influence of patrician families"],
        allies: ["Artists' guilds", "Scholarly academies", "Wealthy merchant families"],
        enemies: ["Vandal hordes", "Anti-intellectual movements", "Rival city-states (economic/cultural)"],
        description: "An influential group of wealthy families and individuals in Florencia dedicated to sponsoring arts and culture, thereby shaping its economy."
    }
};

// Guilds and Professional Organizations
export const guilds = {
    mages_guild: {
        name: "Arcane Collegium",
        type: "Magical Society",
        membershipReq: "Demonstrated magical ability",
        headquarters: "Tower of Stars, Pedena Royal City",
        guildmaster: "Master Evelyn Moonwhisper",
        services: ["Spell research", "Magical item identification", "Apprentice training", "Ley line mapping"],
        ranks: ["Apprentice", "Journeymage", "Adept", "Master", "Archmage"],
        fees: { joining: 50, monthly: 10 },
        description: "Premier organization for magical practitioners and scholars, focused on theoretical and practical magic."
    },
    merchants_guild: {
        name: "Golden Scale Trading Company",
        type: "Commercial Guild",
        membershipReq: "Established business or 100 gold deposit",
        headquarters: "Commerce Hall, Riverport",
        guildmaster: "Guildmaster Tobias Goldweaver",
        services: ["Trade route protection", "Market information", "Bulk purchasing agreements", "Dispute resolution between members"],
        ranks: ["Vendor", "Trader", "Merchant", "Trade Baron", "Grand Merchant Prince (Honorary)"],
        fees: { joining: 25, monthly: 5 },
        description: "Largest commercial organization facilitating trade across the realm, wields considerable economic power."
    },
    thieves_guild: {
        name: "Shadowmere Brotherhood",
        type: "Criminal Organization / Covert Network",
        membershipReq: "Invitation only - proven skills in stealth, larceny, or information gathering",
        headquarters: "The Rat's Nest (secret shifting location, often in Riverport or Nightsedge)",
        guildmaster: "Shadowmaster Vale (identity closely guarded)",
        services: ["Information brokering", "Discrete 'acquisitions'", "Fence operations", "Safe houses"],
        ranks: ["Footpad", "Cutpurse", "Burglar", "Shadow", "Master Thief", "Shadowmaster"],
        fees: { joining: "A significant favor owed or dangerous task", monthly: "Percentage of earnings (often 20%)" },
        description: "Underground network of thieves, spies, and information brokers operating in the shadows."
    },
    warriors_guild: {
        name: "Brotherhood of the Crossed Swords",
        type: "Combat Society / Mercenary Guild",
        membershipReq: "Combat prowess demonstration or sponsorship by a Veteran",
        headquarters: "Warrior's Hall, (Multiple major cities, e.g., Ironspire, Pedena Royal City)",
        guildmaster: "Battlemaster Gareth Ironvow",
        services: ["Combat training", "Mercenary contracts", "Weapon maintenance", "Bounty hunting coordination"],
        ranks: ["Squire", "Warrior", "Veteran", "Champion", "Battlemaster"],
        fees: { joining: 30, monthly: 8 },
        description: "Organization of fighters, guards, and mercenaries for hire, valuing strength and honor (usually)."
    },
    crafters_guild: {
        name: "Artisan's Circle",
        type: "Craft Guild (General)",
        membershipReq: "Masterwork demonstration in a chosen craft",
        headquarters: "Craftsman's Quarter, Crystaldale (main), branches in most cities",
        guildmaster: "Master Smith Dura Forgeheart",
        services: ["Quality assurance (hallmarks)", "Material sourcing (bulk rates)", "Apprentice placement", "Standardized measures"],
        ranks: ["Apprentice", "Journeyman", "Artisan", "Master Craftsman", "Grand Artisan (Council Member)"],
        fees: { joining: 20, monthly: 3 },
        description: "Union of skilled craftspeople maintaining quality standards across various trades (smithing, weaving, carpentry, etc.)."
    },
    healers_guild: {
        name: "Circle of Restoration",
        type: "Medical & Divine Healing Guild",
        membershipReq: "Healing knowledge (herbal or magical) or divine calling",
        headquarters: "Temple of Mercy, Moonhaven (Sylvanmere focus), with shrines in Pedena Royal City & Sunstone City",
        guildmaster: "High Priestess Seraphine Lightbringer",
        services: ["Healing services (mundane and magical)", "Medical supplies distribution", "Disease research & treatment", "Midwifery"],
        ranks: ["Acolyte", "Healer", "Priest/Physician", "Master Healer", "High Priest/Priestess"],
        fees: { joining: 15, monthly: 1 },
        description: "Organization of healers, clerics, and medical practitioners dedicated to alleviating suffering."
    },
    alchemists_guild: {
        name: "Guild of Transmutation & Elixirs",
        type: "Alchemical Society",
        membershipReq: "Successful creation of a complex potion or transmutation",
        headquarters: "The Bubbling Crucible, Pedena Royal City",
        guildmaster: "Master Alchemist Phineas Mortarion",
        services: ["Rare ingredient exchange", "Alchemical formula sharing (coded)", "Laboratory rental", "Potion analysis"],
        ranks: ["Student", "Distiller", "Alchemist", "Master Alchemist", "Philosopher Alchemist"],
        fees: { joining: 40, monthly: 7 },
        description: "A guild for alchemists, potion brewers, and those who seek to understand the fundamental nature of materials."
    },
    explorers_league: {
        name: "The Explorer's League",
        type: "Adventure & Discovery Guild",
        membershipReq: "Documented discovery of a new location or significant find",
        headquarters: "The Charted Path Lodge, Sandport (Dustlands)",
        guildmaster: "Chief Cartographer 'Nomad' Silas",
        services: ["Funding expeditions", "Map sharing and creation", "Lost ruin information", "Survival training"],
        ranks: ["Pathfinder", "Scout", "Explorer", "Master Explorer", "Grand Cartographer"],
        fees: { joining: 20, annual: 6 },
        description: "An organization for adventurers, cartographers, and archaeologists dedicated to exploring the unknown."
    },
    entertainers_guild: {
        name: "The Gilded Masque Troupe",
        type: "Performance & Arts Guild",
        membershipReq: "Audition demonstrating skill in an art form (music, acting, acrobatics etc.)",
        headquarters: "The Grand Stage, Bellezza City (Florencia)",
        guildmaster: "Maestro Allegro Veridian",
        services: ["Securing performance venues", "Contract negotiation", "Costume and prop workshops", "Training in various arts"],
        ranks: ["Apprentice Performer", "Journeyman Player", "Featured Artist", "Master Performer", "Director of the Arts"],
        fees: { joining: 10, monthly: "A share of performance earnings (5%)" },
        description: "A guild representing bards, actors, musicians, acrobats, and other performers across the lands."
    },
    shipwrights_mariners_guild: {
        name: "The Azure Trident Guild",
        type: "Maritime Craft & Trade Guild",
        membershipReq: "Demonstrated skill in shipbuilding, navigation, or seamanship",
        headquarters: "The Salty Dog Docks, Coralhaven (Azure Isles)",
        guildmaster: "Admiral 'Ironkeel' Anya Sharma",
        services: ["Ship construction & repair", "Naval chart provision", "Crew recruitment", "Cargo insurance (basic)"],
        ranks: ["Deckhand", "Boatswain/Carpenter", "First Mate/Navigator", "Captain", "Commodore"],
        fees: { joining: 35, annual: 8 },
        description: "A guild for shipbuilders, sailors, navigators, and maritime merchants of the Azure Isles and beyond."
    },
    farmers_agriculturists_union: {
        name: "The Sun-Blessed Seed Union",
        type: "Agricultural Cooperative",
        membershipReq: "Owns or works viable farmland",
        headquarters: "The Harvest Hall, Dawnstar Village (Solara Theocracy)",
        guildmaster: "Elder Farmer Tiberius Fields",
        services: ["Seed exchange", "Pest control advice (mundane & blessed)", "Bulk grain storage", "Market day organization"],
        ranks: ["Farmhand", "Landholder", "Master Farmer", "Council Elder"],
        fees: { joining: 5, seasonal: "Tithe of harvest (small percentage)" },
        description: "A cooperative of farmers and agricultural workers, primarily in fertile regions like Solara and parts of Pedena."
    },
    beastmasters_guild: {
        name: "The Wild Call Guild",
        type: "Animal Training & Husbandry Society",
        membershipReq: "Proven ability to train or handle a specific type of beast",
        headquarters: "The Menagerie, Khanbaliq (Whispering Steppes, seasonal)",
        guildmaster: "Chief Tamer Zara 'Wolf-Whisper'",
        services: ["Animal training (mounts, guard beasts, exotic pets)", "Veterinary care (traditional)", "Sourcing rare animals", "Organized hunts (for specific beasts)"],
        ranks: ["Handler", "Trainer", "Master Tamer", "Beast Lord/Lady"],
        fees: { joining: 25, monthly: 4 },
        description: "A guild for those skilled in the taming, training, and care of animals, from common livestock to exotic beasts."
    },
    engineers_inventors_society_cogsworth: {
        name: "Cogsworth Society of Engineers & Inventors",
        type: "Technological Innovation Guild",
        membershipReq: "Presentation of a working prototype or significant theoretical paper",
        headquarters: "The Fulcrum Point, Gearhaven (Cogsworth)",
        guildmaster: "Chief Engineer Tiberius 'Cog' Volpin",
        services: ["Patent registration (Cogsworth system)", "Access to workshops and rare components", "Collaborative project funding", "Peer review of inventions"],
        ranks: ["Apprentice Tinkerer", "Mechanic", "Engineer", "Inventor", "Master Artificer"],
        fees: { joining: 60, annual: 12 },
        description: "The primary guild in Cogsworth for all mechanical and steam-powered innovation, distinct from the broader Crafters' Guild."
    },
    lorekeepers_archivists_order: {
        name: "Order of the Endless Scroll",
        type: "Scholarly & Historical Society",
        membershipReq: "Contribution of significant historical text or proven research ability",
        headquarters: "The Great Library, Bibliotheca Port (Florencia), with chapters in Pedena Royal City",
        guildmaster: "Archivist Elara Thorne",
        services: ["Access to vast archives", "Historical research commissions", "Preservation of ancient texts", "Translation services"],
        ranks: ["Novice Scribe", "Researcher", "Historian", "Loremaster", "Keeper of Ages"],
        fees: { joining: 30, annual: 5 },
        description: "A society dedicated to the preservation, study, and dissemination of knowledge and history."
    },
    miners_prospectors_union_deepdelve: {
        name: "Deepdelve Miners' & Prospectors' Union",
        type: "Resource Extraction Guild",
        membershipReq: "Experience in mining or prospecting; loyalty to Deepdelve",
        headquarters: "The Pick & Lantern Hall, Mithril Hall (Deepdelve)",
        guildmaster: "Foreman Grok Stonebeard",
        services: ["Mining claim registration", "Safety standard enforcement", "Ore appraisal and brokerage", "Collective bargaining for wages"],
        ranks: ["Digger", "Prospector", "Vein Master", "Mine Foreman", "Deep Lord (Guild Council)"],
        fees: { joining: 10, monthly: "Share of valuable finds (negotiable)" },
        description: "A powerful union representing the interests of those who toil in the rich but dangerous mines of Deepdelve."
    }
};

// Secret Organizations
export const secretOrganizations = {
    whispered_council: {
        name: "The Whispered Council",
        type: "Shadow Government / Illuminati",
        publicKnowledge: "Vague rumors among conspiracy theorists and high nobility only",
        truePurpose: "Subtly guide the fate of major nations towards a perceived 'greater good' or their own agenda, maintain a balance of power they control.",
        members: "Unknown, highly influential figures across various kingdoms, guilds, and orders (e.g., Pedena, Florencia, Merchant Princes)",
        influence: "Extremely High (Hidden)",
        methods: ["Political manipulation", "Economic pressure", "Strategic assassinations (rarely)", "Information control"],
        description: "A clandestine cabal of immensely powerful and influential individuals from various walks of life, secretly manipulating major political and economic events across several nations."
    },
    phoenix_rising: {
        name: "Phoenix Rising",
        type: "Revolutionary Group / Idealistic Insurgents",
        publicKnowledge: "Dismissed as a disorganized band of rebels or terrorists by ruling powers",
        truePurpose: "Overthrow corrupt or tyrannical regimes and establish more equitable societies, often through direct action.",
        members: "Disenfranchised citizens, idealistic mages, disgruntled former soldiers, oppressed minorities (chapters in Vaelthara, Dustlands slums, parts of Pedena)",
        influence: "Growing (regional cells)",
        methods: ["Propaganda", "Sabotage", "Organizing popular uprisings", "Guerrilla warfare"],
        description: "An underground revolutionary movement fighting against oppression and corruption, their methods vary from peaceful protest to armed rebellion."
    },
    keepers_of_time: {
        name: "Keepers of the Eternal Moment",
        type: "Mystical Order / Chronal Guardians",
        publicKnowledge: "Ancient legend, myth, or misunderstood prophecy; known to very few select mages",
        truePurpose: "Prevent temporal catastrophes, repair paradoxes, and guard the stability of the timeline against misuse of chronomancy.",
        members: "Time mages, ancient scholars, prophets, beings from outside linear time (headquarters likely extra-planar or in Serene Peaks' most hidden sanctums)",
        influence: "Subtle but Cosmic (operates outside normal spheres of influence)",
        methods: ["Temporal observation", "Subtle timeline adjustments", "Direct intervention against chronal threats", "Guarding temporal artifacts"],
        description: "An ancient and incredibly secretive order dedicated to safeguarding the flow of time itself from paradoxes and malicious manipulation."
    },
    silent_cartographers_guild: {
        name: "The Silent Cartographers' Guild",
        type: "Information Brokerage / Explorer Society (Secretive)",
        publicKnowledge: "Rumored to exist among spies and high-level explorers; sometimes mistaken for a branch of the Explorer's League",
        truePurpose: "To map and catalogue dangerous, forbidden, or magically hidden locations and sell this exclusive information to select clientele.",
        members: "Elite explorers, master survivalists, discreet scholars, former spies (operates across all nations, especially Dustlands, Umbra Marches, Frostfell, Deepdelve)",
        influence: "Medium (Specialized Niche)",
        methods: ["Covert exploration", "Stealthy infiltration", "Information verification", "Secure data storage and dissemination"],
        description: "A highly secretive guild that charts the uncharted and the forbidden, selling their invaluable maps and knowledge to the highest bidder or those they deem worthy."
    },
    the_ebon_talon: {
        name: "The Ebon Talon",
        type: "Militant Extremist Splinter Cell",
        publicKnowledge: "Officially disavowed; considered a rogue element by Vaelthara. Other nations see them as Vaeltharan black ops.",
        truePurpose: "Advance Vaeltharan supremacy through more direct, ruthless, and unsanctioned means than the official Iron Legion allows. Believe the Empress is too cautious.",
        members: "Disgruntled Vaeltharan veterans, nationalist fanatics, skilled assassins and saboteurs (primarily Vaelthara, with agents abroad)",
        influence: "Low (Official), Medium (Covert Military Impact)",
        methods: ["Assassination of foreign leaders", "Sabotage of rival nations' infrastructure", "Inciting border conflicts", "Blackmail"],
        description: "An ultra-nationalist, clandestine military group originating from Vaelthara, undertaking deniable operations to further what they see as the Empire's true destiny."
    },
    conclave_of_dreamweavers: {
        name: "Conclave of Dreamweavers",
        type: "Mystical Research & Influence Network",
        publicKnowledge: "Almost none; a few obscure texts might hint at 'sleep sages' or 'mind walkers'.",
        truePurpose: "Explore the collective unconscious (the Dream Egress), glean hidden truths, influence thoughts and decisions through dreams, and guard against dream-borne threats.",
        members: "Powerful oneiromancers, psychic sensitives, reclusive mystics, some fey (scattered, with hidden nexus points in Sylvanmere, Serene Peaks, Pedena Royal City's 'dream district')",
        influence: "Unknown (Potentially High, but untraceable)",
        methods: ["Astral projection into dreams", "Lucid dream manipulation", "Scrying through the dreamscape", "Creation of dream wards and nightmares"],
        description: "A hidden network of mystics who navigate and manipulate the world of dreams, their motives often enigmatic and their influence subtle yet potentially profound."
    },
    children_of_the_first_spark: {
        name: "Children of the First Spark",
        type: "Techno-Religious Cult / Transhumanist Movement",
        publicKnowledge: "Rumors of strange experiments and disappearances near Cogsworth's more unregulated workshops.",
        truePurpose: "Achieve a perceived 'ascension' by perfectly merging organic life with clockwork and steam technology, believing pure mechanism is the next stage of evolution.",
        members: "Radical inventors, disenfranchised workers seeking 'perfection', rogue artificers (centered in Cogsworth, with secret labs)",
        influence: "Low (Growing Cult Following)",
        methods: ["Unethical cybernetic experimentation", "Theft of advanced components", "Proselytizing their techno-gospel", "Sabotage of 'impure' organic-focused research"],
        description: "A secretive cult within Cogsworth that worships the 'First Spark' of invention, seeking to transcend organic limitations through extreme mechanical augmentation."
    }
};

