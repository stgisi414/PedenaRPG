
// Quest Character Names Database
// Comprehensive collection of names for NPCs, quest givers, and other characters

export const questCharacterNames = {
    // Fantasy Human Names
    human: {
        male: {
            noble: [
                "Lord Aldric Blackmoor", "Sir Gareth Goldmantle", "Duke Marcus Ironhold", "Baron Theron Stormwind",
                "Count Cedric Brightblade", "Lord Roland Dragonsbane", "Sir Damien Lightbringer", "Duke Viktor Shadowbane",
                "Baron Tobias Forgeheart", "Lord Erasmus Moonwhisper", "Sir Sebastian Starweaver", "Count Nathaniel Warmhearth",
                "Duke Alexander Steelheart", "Baron Roderick Ironvow", "Lord Leopold Goldmane", "Earl Percival Silverwood",
                "Viscount Arthur Greycastle", "Marquess Julian Stonebridge", "Baron Alaric Stonewall", "Count Borin Hammerfall",
                "Lord Cedric Trueheart", "Sir Edmund Valorcrest", "Duke Hadrian Winterbourne", "Baron Silas Shadowbrook",
                "Count Oswald Rivershore", "Lord Percival Grimstone", "Sir Alistair Hawkwing", "Duke Bertram Blackwood",
                "Baron Reginald Oakenshield", "Lord Geoffrey Fairweather", "Sir Kaelen Swiftblade", "Count Valerius Darkwater",
                "Duke Lysander Everlight", "Baron Lysander Everlight", "Lord Tristan Firebrand", "Sir Eldrin Whisperwind",
                "Duke Octavius Grandhelm", "Baron Silas Ravenwood", "Count Orion Sunstrider", "Lord Florian Nightshade",
                "Sir Galahad Ironclad", "Duke Maximus Silvermane", "Baron Corbin Heathcliff", "Lord Darian Wyrmslayer",
                "Sir Borin Stonefist", "Count Gideon Lionheart", "Duke Caspian Deepwater", "Baron Lysander Vancroft"
            ],
            commoner: [
                "Thomas the Blacksmith", "Willem the Merchant", "Garrett the Innkeeper", "Connor the Farmer",
                "Bran the Baker", "Erik the Hunter", "Finn the Fisherman", "Owen the Carpenter",
                "Leif the Trader", "Magnus the Guard", "Bjorn the Miller", "Ulf the Tanner",
                "Gunnar the Stable Boy", "Ragnar the Courier", "Tormund the Shepherd", "Jacob the Cooper",
                "Peter the Weaver", "Martin the Mason", "Alfred the Carter", "Harold the Potter",
                "Kenneth the Dyer", "Robert the Thatcher", "Simon the Wainwright", "Walter the Fuller",
                "Young Ben the Stablehand", "Old Giles the Shepherd", "Dusty Tim the Scavenger", "Grumpy Greg the Farmer",
                "Jolly John the Brewer", "Quiet Quill the Scribe", "Nimble Nick the Pickpocket", "Strongarm Sam the Docker",
                "Fletcher the Bowyer", "Cobbler the Shoemaker", "Miles the Miller's Son", "Caleb the Cooper's Apprentice",
                "Pippin the Baker's Boy", "Elara the Herbalist's Assistant", "Gareth the Blacksmith's Apprentice", "Bram the Fisher's Mate",
                "Clyde the Caravan Guard", "Dexter the Dice Player", "Earnest the Beggar", "Felix the Fence",
                "Gavin the Grave Digger", "Hugh the Hedge Knight", "Isaac the Illuminator", "Joram the Journeyman",
                "Kaelen the Kyleman", "Lachlan the Lantern Lighter", "Milo the Messenger", "Nevin the Night Watchman"
            ],
            scholarly: [
                "Magister Aldwin", "Scholar Percival", "Sage Cornelius", "Archivist Benedictus",
                "Chronicler Matthias", "Researcher Ambrose", "Librarian Crispin", "Philosopher Godfrey",
                "Historian Reginald", "Theorist Algernon", "Academic Mortimer", "Professor Barnabas",
                "Scribe Ignatius", "Lorekeeper Silvanus", "Academician Peregrine", "Apothecary Elara",
                "Alchemist Fabian", "Astrologer Orion", "Cartographer Silas", "Cryptographer Cyrus",
                "Diviner Malachi", "Enchanter Balthazar", "Lexicographer Quentin", "Naturalist Linus",
                "Numerologist Zephyr", "Paleographer Titus", "Runecaster Kael", "Sorcerer Aldric",
                "Thaumaturge Gareth", "Theologian Phineas", "Herbalist Cedric", "Cartographer Elias",
                "Astronomer Xander", "Geographer Roland", "Mythologist Finn", "Sanskrit Scholar Kian",
                "Ancient Linguist Oberon", "Magus Thorne", "Chronomancer Victor", "Botanist Lyra",
                "Geologist Flint", "Zoologist Arion", "Cosmographer Darius", "Strategist Gideon",
                "Philosopher Eldrin", "Ethnobotanist Jasper", "Numerology Master Corvus", "Runesmith Balin"
            ],
            military: [
                "Captain Roderick", "Commander Thaddeus", "Sergeant Brutus", "Lieutenant Cassius",
                "General Maximus", "Colonel Aurelius", "Major Lucius", "Centurion Marcus",
                "Corporal Gaius", "Admiral Octavius", "Marshal Titus", "Warden Flavius",
                "Captain-General Valerius", "Field Marshal Antonius", "High Commander Septimus", "Knight Commander Lysander",
                "Paladin Sir Kaelen", "Warmaster Gorn", "Legionnaire Drusus", "Prefect Aulus",
                "Tribune Quintus", "Decurion Servius", "Scout Master Orion", "Archer Captain Lyra",
                "Siege Master Borg", "Sentinel Guard Brand", "Veteran Sergeant Grim", "Captain Anya",
                "Commander Elara", "Sergeant Roric", "Lieutenant Brynn", "General Valeria",
                "Colonel Lyra", "Major Kieran", "Centurion Nova", "Corporal Finn",
                "Admiral Draven", "Marshal Thorne", "Warden Silas", "Captain-General Isolde",
                "Field Marshal Kael", "High Commander Orion", "Elite Guard Captain Gareth", "Shadowblade Commander Elara",
                "Royal Knight Sir Lorian", "Mercenary Captain Kael", "City Watch Commander Theron", "Border Guard Captain Alistair",
                "Iron Legion Commander Marcus", "Stormwind Captain Valerius", "Silverhand Paladin Gideon", "Dragonwatch Captain Roland"
            ],
            criminal: [
                "Blackjack Pete", "Scar-face McGruff", "One-Eye Marcus", "Knuckles Bronson",
                "The Viper", "Shadow Jake", "Blade Runner", "Silent Sam", "Quick-Draw Quinn",
                "Rattlesnake Rick", "Phantom Phil", "Ghost Walker", "Night Stalker", "Smoke Jensen",
                "The Reaper", "Sly Sid", "Whispering Will", "Crooked Caleb", "Grease-fingers Jerry",
                "Barrel-chested Boris", "Grifter Gus", "Shifty Shane", "Loose-tongue Larry", "Fingers Flinn",
                "The Smuggler King", "The Silent Assassin", "The Golden Thief", "The Wraith", "The Whisper",
                "Twisted Trevor", "Mad Maggie's Brother", "The Butcher of Blackwater", "Snake-Eye Sven",
                "Crimson Cloak", "The Alley Cat", "Silver Shroud", "Grim Gutter", "The Shadow Hand",
                "Whisperwind Jack", "Blind Bart", "Cutthroat Karl", "Jailbreak Jimmy", "Lizard Linc"
            ]
        },
        female: {
            noble: [
                "Lady Helena Starweaver", "Duchess Seraphina Moonwhisper", "Countess Lyralei Brightblade",
                "Baroness Evelyn Goldmane", "Lady Isabelle Dragonsbane", "Duchess Cordelia Lightbringer",
                "Countess Guinevere Shadowbane", "Lady Celestine Forgeheart", "Baroness Rosalind Warmhearth",
                "Duchess Evangeline Steelheart", "Lady Anastasia Ironvow", "Countess Vivienne Starweaver",
                "Baroness Morgana Stormwind", "Lady Elara Blackmoor", "Duchess Ophelia Goldmantle", "Baroness Rowena Silverwood",
                "Viscountess Clara Greycastle", "Marquess Liliana Stonebridge", "Baroness Giselle Stonewall", "Countess Freya Hammerfall",
                "Lady Beatrice Trueheart", "Dame Eleanor Valorcrest", "Duchess Isolde Winterbourne", "Baroness Serena Shadowbrook",
                "Countess Rosalind Rivershore", "Lady Gwendolyn Grimstone", "Dame Astrid Hawkwing", "Duchess Rhiannon Blackwood",
                "Baroness Rowena Oakenshield", "Lady Fiona Fairweather", "Dame Elara Swiftblade", "Countess Genevieve Darkwater",
                "Duchess Annelise Everlight", "Baroness Annelise Everlight", "Lady Seraphina Firebrand", "Dame Lysandra Whisperwind",
                "Duchess Octavia Grandhelm", "Baroness Cassandra Ravenwood", "Countess Aurora Sunstrider", "Lady Isolde Nightshade",
                "Dame Rowena Ironclad", "Duchess Valeriana Silvermane", "Baroness Evelyn Heathcliff", "Lady Lilith Wyrmslayer",
                "Dame Bryn Stonefist", "Countess Celeste Lionheart", "Duchess Thalassa Deepwater", "Baroness Seraphina Vancroft"
            ],
            commoner: [
                "Martha the Healer", "Anna the Seamstress", "Brigitte the Tavern Wench", "Clara the Cook",
                "Diana the Midwife", "Elena the Weaver", "Fiona the Herbalist", "Greta the Laundress",
                "Hannah the Milkmaid", "Ingrid the Barmaid", "Jane the Spinner", "Kate the Candlemaker",
                "Luna the Fortune Teller", "Mary the Butcher's Wife", "Nina the Flower Girl", "Rose the Baker's Daughter",
                "Sally the Washerwoman", "Tilly the Tanner's Assistant", "Ursula the Fisherwoman", "Violet the Stablehand",
                "Willow the Basket Weaver", "Zoe the Shepherdess", "Old Elara the Storyteller", "Young Maeve the Apprentice",
                "Jena the Potter's Wife", "Bea the Brewer's Assistant", "Daisy the Farmhand", "Gwen the Gardner",
                "Piper the Piper's Daughter", "Rowan the Rogue's Sister", "Thistle the Thief's Kin", "Skye the Scavenger",
                "Agnes the Apple Seller", "Bree the Basket Weaver", "Cora the Cheese Maker", "Daphne the Dairymaid",
                "Edith the Embroiderer", "Flora the Flower Seller", "Gail the Goose Girl", "Hazel the Huckster",
                "Iris the Inn Maid", "June the Jewel Crafter", "Kira the Knitter", "Lena the Lantern Maker",
                "Molly the Mushroom Gatherer", "Nora the Net Mender", "Olive the Orchard Worker", "Penny the Peddler"
            ],
            scholarly: [
                "Magistra Cordelia", "Scholar Beatrice", "Sage Isadora", "Archivist Prudence",
                "Chronicler Theodora", "Researcher Evangeline", "Librarian Penelope", "Philosopher Constance",
                "Historian Minerva", "Theorist Arabella", "Academic Genevieve", "Professor Felicity",
                "Scribe Seraphina", "Lorekeeper Cassandra", "Academician Vivienne", "Apothecary Elara",
                "Alchemist Celeste", "Astrologer Lyra", "Cartographer Isolde", "Cryptographer Xenia",
                "Diviner Morgana", "Enchantress Morwen", "Lexicographer Clementine", "Naturalist Willow",
                "Numerologist Aura", "Paleographer Beatrix", "Runecaster Faelan", "Sorceress Lyra",
                "Thaumaturge Elysia", "Theologian Honora", "Herbalist Gwendolyn", "Cartographer Briar",
                "Astronomer Selene", "Geographer Fiona", "Mythologist Iris", "Sanskrit Scholar Priya",
                "Ancient Linguist Isolde", "Magus Seraphina", "Chronomancer Celeste", "Botanist Meadow",
                "Geologist Terra", "Zoologist Fauna", "Cosmographer Astra", "Strategist Eleanor",
                "Philosopher Elara", "Ethnobotanist Asteria", "Numerology Master Lyra", "Runesmith Runa"
            ],
            military: [
                "Captain Valeria", "Commander Octavia", "Sergeant Livia", "Lieutenant Cassia",
                "General Aurelia", "Colonel Claudia", "Major Flavia", "Centurion Julia",
                "Corporal Antonia", "Admiral Lucilla", "Marshal Severina", "Warden Marcella",
                "Captain-General Domitia", "Field Marshal Faustina", "High Commander Messalina", "Knight Commander Isolde",
                "Paladin Dame Isolde", "Warmistress Grizel", "Legionnaire Britta", "Prefect Aelia",
                "Tribune Vivia", "Decurion Camilla", "Scout Master Lyra", "Archer Captain Elara",
                "Siege Master Bertha", "Sentinel Guard Sigrid", "Veteran Sergeant Griselda", "Captain Britta",
                "Commander Anya", "Sergeant Fiona", "Lieutenant Gwen", "General Lyra",
                "Colonel Astrid", "Major Kira", "Centurion Rona", "Corporal Maeve",
                "Admiral Seraphina", "Marshal Isolde", "Warden Elara", "Captain-General Theodora",
                "Field Marshal Vivienne", "High Commander Seraphina", "Elite Guard Captain Isolde", "Shadowblade Commander Theron",
                "Royal Knight Dame Aeliana", "Mercenary Captain Kaelen", "City Watch Commander Valeriana", "Border Guard Captain Alistra",
                "Iron Legion Commander Marcella", "Stormwind Captain Corina", "Silverhand Paladin Lyralei", "Dragonwatch Captain Isolde"
            ],
            criminal: [
                "Black Widow", "Scarlett the Knife", "Poison Ivy", "The Siren", "Shadow Cat",
                "Raven Wing", "Silk Fingers", "The Phantom", "Night Rose", "Silver Tongue",
                "The Vixen", "Blood Moon", "Ghost Dancer", "The Serpent", "Dark Angel",
                "Twisted Thistle", "Whispering Willow", "Crooked Cora", "Grease-fingers Gert",
                "Barrel-chested Bertha", "Grifter Gwen", "Shifty Sarah", "Loose-tongue Liz", "Fingers Fiona",
                "The Smuggler Queen", "The Silent Shadow", "The Golden Lily", "The Banshee", "The Echo",
                "Mad Anya", "The Butcheress of Blackwood", "Snake-Eye Sal", "Crimson Petal",
                "The Alley Witch", "Silver Streak", "Grim Grace", "The Shadow Queen",
                "Whisperwind Jess", "Blind Betty", "Cutthroat Clara", "Jailbreak Jan", "Lizard Lyra"
            ]
        }
    },

    // Elven Names
    elven: {
        male: [
            "Silvanus Starleaf", "Thalion Moonwhisper", "Erevan Silverbrook", "Valerius Dawnstrider",
            "Caelynn Nightwind", "Lysander Goldleaf", "Thranduil Starweaver", "Elrohir Mistwalker",
            "Celeborn Thornweave", "Haldir Brightarrow", "Legolas Swiftwind", "Eldarion Stargazer",
            "Faelar Dreamwalker", "Galinndan Shadowmere", "Aramil Silverstream", "Aerion Windrider",
            "Alderon Sunstrider", "Caelen Whisperwind", "Darian Moonglade", "Eldrin Swiftbow",
            "Faelan Lightfoot", "Galen Starfall", "Haldor Rivendell", "Ilian Fireheart",
            "Kaelen Greenleaf", "Lirion Shadowbrook", "Mithrandir Greybeard", "Naelan Frostbloom",
            "Orion Sunpetal", "Perrin Deepwoods", "Quenriel Skywatcher", "Rielon Emberflow",
            "Sylvanus Moonshadow", "Theron Nightshade", "Ulmo Wavewalker", "Valen Wildheart",
            "Xylos Foreststrider", "Yavin Starseeker", "Zephyr Wingfoot", "Aerion Sunwhisper",
            "Alderon Silverwing", "Caelen Stormlight", "Darian Whisperfall", "Eldrin Dawnbringer",
            "Faelan Moonpetal", "Galen Starbrook", "Haldor Rivensong", "Ilian Brightflame",
            "Kaelen Whispertree", "Lirion Shadowglen", "Mithrandir Greycloak", "Naelan Frostwind",
            "Orion Sunfire", "Perrin Deepriver", "Quenriel Skysinger", "Rielon Emberlight",
            "Sylvanus Moonshroud", "Theron Nightbreeze", "Ulmo Wavebreaker", "Valen Wildfire",
            "Xylos Forestwhisper", "Yavin Starfall", "Zephyr Wingblade"
        ],
        female: [
            "Silviana Starleaf", "Arwen Moonwhisper", "Galadriel Silverbrook", "Elaria Dawnstrider",
            "Nimrodel Nightwind", "Tauriel Goldleaf", "Eleryn Starweaver", "Celebrian Mistwalker",
            "Idril Thornweave", "Nessa Brightarrow", "Varda Swiftwind", "Melian Stargazer",
            "Luthien Dreamwalker", "Earwen Shadowmere", "Aranel Silverstream", "Aeriana Windrider",
            "Alderion Sunstrider", "Caelynn Whisperwind", "Darianne Moonglade", "Eldrinne Swiftbow",
            "Faelana Lightfoot", "Galena Starfall", "Haldora Rivendell", "Iliana Fireheart",
            "Kaelen Greenleaf", "Liriana Shadowbrook", "Mithranda Greybeard", "Naelana Frostbloom",
            "Oriana Sunpetal", "Perrina Deepwoods", "Quenriela Skywatcher", "Rielana Emberflow",
            "Sylvana Moonshadow", "Therona Nightshade", "Ulma Wavewalker", "Valena Wildheart",
            "Xylara Foreststrider", "Yavina Starseeker", "Zephyra Wingfoot", "Aeriana Sunwhisper",
            "Alderion Silverwing", "Caelynn Stormlight", "Darianne Whisperfall", "Eldrinne Dawnbringer",
            "Faelana Moonpetal", "Galena Starbrook", "Haldora Rivensong", "Iliana Brightflame",
            "Kaelen Whispertree", "Liriana Shadowglen", "Mithranda Greycloak", "Naelana Frostwind",
            "Oriana Sunfire", "Perrina Deepriver", "Quenriela Skysinger", "Rielana Emberlight",
            "Sylvana Moonshroud", "Therona Nightbreeze", "Ulma Wavebreaker", "Valena Wildfire",
            "Xylara Forestwhisper", "Yavina Starfall", "Zephyra Wingblade"
        ]
    },

    // Dwarven Names
    dwarven: {
        male: [
            "Thorin Forgeheart", "Gimli Ironbeard", "Balin Stoneaxe", "Dwalin Goldbeard",
            "Groin Hammerfist", "Oin Ironvow", "Dain Steelbeard", "Nain Rockbreaker",
            "Thror Gemcutter", "Thrain Oathkeeper", "Durin Battleaxe", "Fundin Strongarm",
            "Gloin Ironshield", "Bifur Stormhammer", "Bofur Deepdelver", "Borin Stonefist",
            "Brandr Rockhammer", "Doric Earthsplitter", "Fimbur Gemhoard", "Gror Stonecleaver",
            "Kili Oreseeker", "Moriak Deeprock", "Norin Boulderfist", "Ori Ironpick",
            "Runar Grimbold", "Skald Stonecaller", "Thrain Coppervein", "Urgrim Anvilfist",
            "Volnir Goldvein", "Yarik Hammerfall", "Zori Stoneborn", "Gruk Ironhide",
            "Thorn Stonegrip", "Brom Granitefoot", "Gareth Hammerlock", "Korgan Stonebrow",
            "Drek Skullsplitter", "Rurik Boulderhelm", "Borin Deepforge", "Gimli Grudgebearer",
            "Balin Oathsworn", "Dwalin Ironfoot", "Groin Gemguard", "Oin Goldhammer",
            "Dain Rockshield", "Nain Deepaxe", "Thror Anvilborn", "Thrain Steelheart",
            "Durin Bloodaxe", "Fundin Strongbeard", "Gloin Stonefist", "Bifur Oathstone",
            "Bofur Deepmine", "Borin Stonehammer", "Brandr Ironpick", "Doric Earthborn",
            "Fimbur Gemheart", "Gror Stoneguard", "Kili Oreheart", "Moriak Deephammer"
        ],
        female: [
            "Dura Forgeheart", "Mira Ironbeard", "Vera Stoneaxe", "Nora Goldbeard",
            "Kira Hammerfist", "Thora Ironvow", "Bera Steelbeard", "Gilda Rockbreaker",
            "Hilda Gemcutter", "Brenna Oathkeeper", "Freya Battleaxe", "Astrid Strongarm",
            "Sigrid Ironshield", "Ingrid Stormhammer", "Helga Deepdelver", "Borina Stonefist",
            "Branda Rockhammer", "Dora Earthsplitter", "Fimburia Gemhoard", "Grilda Stonecleaver",
            "Kilia Oreseeker", "Moria Deeprock", "Norina Boulderfist", "Oria Ironpick",
            "Runara Grimbold", "Skalda Stonecaller", "Thraina Coppervein", "Urgrima Anvilfist",
            "Volnira Goldvein", "Yarika Hammerfall", "Zorina Stoneborn", "Grukka Ironhide",
            "Thornilda Stonegrip", "Brommda Granitefoot", "Garethina Hammerlock", "Korgana Stonebrow",
            "Dreka Skullsplitter", "Rurika Boulderhelm", "Borina Deepforge", "Gimli Ironhide",
            "Balina Oathsworn", "Dwalina Ironfoot", "Groina Gemguard", "Oina Goldhammer",
            "Daina Rockshield", "Naina Deepaxe", "Throrina Anvilborn", "Thraina Steelheart",
            "Durina Bloodaxe", "Fundina Strongbeard", "Gloina Stonefist", "Bifura Oathstone",
            "Bofura Deepmine", "Borina Stonehammer", "Branda Ironpick", "Dora Earthborn",
            "Fimburia Gemheart", "Grilda Stoneguard", "Kilia Oreheart", "Moria Deephammer"
        ]
    },

    // Halfling Names
    halfling: {
        male: [
            "Bilbo Baggins", "Frodo Took", "Samwise Brandybuck", "Meriadoc Gamgee",
            "Peregrin Cotton", "Bandobras Goodbody", "Gerontius Proudfoot", "Otho Burrows",
            "Lotho Greenhill", "Fredegar Underhill", "Folco Bracegirdle", "Odo Bolger",
            "Polo Boffin", "Ponto Banks", "Largo Hornblower", "Caleb Hilltop",
            "Finnian Applewood", "Jasper Meadowsweet", "Kaelen Bramblefoot", "Leo Lightfoot",
            "Milo Willowbrook", "Nevin Shortstrider", "Oliver Thistlewick", "Pippin Greenbottle",
            "Quinn Shadowbrook", "Roscoe Sweetwater", "Silas Honeytree", "Tobin Greenleaf",
            "Alden Smallfoot", "Bram Cloverfield", "Corbin Hayseed", "Dorian Swift",
            "Elias Riverbend", "Felix Merryweather", "Gareth Goodfellow", "Horace Longbottom",
            "Isaac Bramble", "Jules Littlejohn", "Kendrick Hearth", "Larkin Green",
            "Marcus Mudfoot", "Ned Smallwood", "Oscar Applewick", "Piers Stonehill",
            "Reuben Quickstep", "Sterling Meadowlark", "Thaddeus Goodale", "Uriah Underfoot"
        ],
        female: [
            "Rosie Baggins", "Pearl Took", "Daisy Brandybuck", "Lily Gamgee",
            "Poppy Cotton", "Primula Goodbody", "Belladonna Proudfoot", "Mirabella Burrows",
            "Donnamira Greenhill", "Camellia Underhill", "Rosamunda Bracegirdle", "Adamanta Bolger",
            "Esmeralda Boffin", "Lobelia Banks", "Amaranth Hornblower", "Willow Hilltop",
            "Elara Applewood", "Ivy Meadowsweet", "Lila Bramblefoot", "Maple Lightfoot",
            "Olive Willowbrook", "Penelope Shortstrider", "Phoebe Thistlewick", "Primrose Greenbottle",
            "Rowan Shadowbrook", "Scarlett Sweetwater", "Hazel Honeytree", "Tilly Greenleaf",
            "Agnes Smallfoot", "Betty Cloverfield", "Clementine Hayseed", "Daphne Swift",
            "Ella Riverbend", "Fiona Merryweather", "Grace Goodfellow", "Hannah Longbottom",
            "Iris Bramble", "Jessa Littlejohn", "Kate Hearth", "Lena Green",
            "Minnie Mudfoot", "Nell Smallwood", "Orla Applewick", "Pansy Stonehill",
            "Ruby Quickstep", "Seraphina Meadowlark", "Theodora Goodale", "Ursula Underfoot"
        ]
    },

    // Orcish/Goblin Names
    orcish: {
        male: [
            "Grashk the Bloodthirsty", "Urzok Ironskull", "Borgash the Destroyer", "Thrakul Bonecrusher",
            "Muzgob the Vicious", "Gazok Redeye", "Burzum Blackfang", "Lugdush the Savage",
            "Grishnak Skullsplitter", "Ugluk the Merciless", "Azog Deathbringer", "Bolg Ironjaw",
            "Gothmog the Terrible", "Gorbag Bloodaxe", "Lagduf the Cruel", "Snarlfang the Ravager",
            "Krog Fleshrender", "Drogar Gutripper", "Morgash the Mangler", "Zargoth the Impaler",
            "Ragnuk Skullcrusher", "Vilefang the Corrupt", "Grogash Stonefist", "Blarg the Brute",
            "Thorg Grimfang", "Splat Bloodtooth", "Gnash Jawbreaker", "Krak Hammerhead",
            "Mogrok Ironhide", "Bargul Bonechewer", "Snagartooth the Grimy", "Griznak the Foul",
            "Oshkosh the Cruel", "Drogul the Defiler", "Zurgon the Dread", "Kruglak Iron-Gut",
            "Mokosh Skull-Smasher", "Thrallgrim Bladefang", "Grommash Hellscream", "Nazgrel the Hunter",
            "Kilrogg Deadeye", "Durotan the Chieftain", "Orgrim Doomhammer", "Gul'dan the Betrayer",
            "Mannoroth the Destroyer", "Kargath Bladefist", "Rend Blackhand", "Maim Blackhand"
        ],
        female: [
            "Grisha the Fierce", "Urza Ironhide", "Borga the Ruthless", "Thraki Bonegnawer",
            "Muzga the Brutal", "Gaza Redeye", "Burza Blackclaw", "Lugda the Wild",
            "Grish Skullbreaker", "Ugla the Pitiless", "Aza Deathwhisper", "Bola Ironteeth",
            "Gothma the Dreadful", "Gorba Bloodclaw", "Lagda the Savage", "Snarlfangha the Ravager",
            "Kroga Fleshrender", "Droga Gutripper", "Morga the Mangler", "Zarga the Impaler",
            "Ragna Skullcrusher", "Vilefanga the Corrupt", "Groga Stonefist", "Blargha the Brute",
            "Thorga Grimfang", "Splat Bloodtooth", "Gnashe Jawbreaker", "Kraka Hammerhead",
            "Mogra Ironhide", "Barga Bonechewer", "Snagartootha the Grimy", "Grizna the Foul",
            "Oshka the Cruel", "Droga the Defiler", "Zurga the Dread", "Krugla Iron-Gut",
            "Moksha Skull-Smasher", "Thralda Bladefang", "Grommella Hellscream", "Nazgela the Huntress",
            "Kilrogga Deadeye", "Durotana the Chieftainess", "Orgrima Doomhammer", "Gul'danna the Betrayer",
            "Mannorotha the Destroyer", "Kargatha Bladefist", "Renda Blackhand", "Maima Blackhand"
        ]
    },

    // Special Quest Giver Names
    questGivers: {
        mysterious: [
            "The Hooded Figure", "The Stranger in Gray", "The Wandering Merchant",
            "The Veiled Oracle", "The Shadow Walker", "The Whispering Voice",
            "The Cloaked Traveler", "The Silent Watcher", "The Masked Messenger",
            "The Enigmatic Scholar", "The Phantom Guide", "The Ethereal Presence",
            "The Keeper of Secrets", "The Unseen Hand", "The Dream Weaver",
            "The Shrouded One", "The Faceless Courier", "The Architect of Whispers",
            "The Listener in the Dark", "The Weaver of Fates", "The Echoing Prophet",
            "The Oracle of Shadows", "The Silent Alchemist", "The Hidden Master",
            "The Glimmering Apparition", "The Collector of Lost Souls", "The Warden of Forgotten Lore",
            "The Watcher of Ancient Scrolls", "The Voice from the Abyss", "The Herald of Twilight",
            "The Silent Weaver", "The Enigmatic Wanderer", "The Ghostly Figure",
            "The Observer of Destinies", "The Mute Messenger", "The Oracle of Whispers",
            "The Architect of Illusions", "The Listener of Lost Tales", "The Weaver of Nightmares"
        ],
        divine: [
            "Seraph Aurelia", "Angel Raphael", "Saint Celestine", "Prophet Ezekiel",
            "Oracle Pythia", "Priestess Vesta", "High Cleric Benedictus", "Divine Messenger",
            "Blessed Isadora", "Sacred Voice", "Holy Emanation", "Celestial Herald",
            "Archangel Michael", "Cherub Gabriel", "Deaconess Felicity", "Bishop Alaric",
            "Abbess Sophia", "Oracle Celeste", "Holy Matron Elara", "Sacred Guardian",
            "Emissary of Light", "Voice of the Heavens", "Divine Loremaster", "The Pureheart",
            "Spirit of Justice", "Angel of Mercy", "Divine Ascetic", "Prophetess Cassandra",
            "High Priestess Lyra", "Holy Father Theron", "Blessed Mother Eleanor", "Celestial Weaver",
            "Guardian Angel Raphael", "Seraphina the Pure", "Saint Roland the Just", "Prophet Jeremiah",
            "Oracle Theodora", "Priestess Solara", "High Cleric Gideon", "Divine Architect",
            "Blessed Aurelia", "Sacred Oracle", "Holy Lightbearer", "Celestial Envoy"
        ],
        ancient: [
            "Elder Thalorin", "Ancient Keeper", "The Old One", "Primordial Sage",
            "Archdruid Elderoak", "The First Walker", "Timeless Guardian",
            "The Ageless Watcher", "Eternal Chronicler", "The Ancient Voice",
            "Primal Spirit", "The Forgotten King", "Lich Lord Kael", "Ancient Dragon Whisperer",
            "The Last Titan", "The Silent One", "The Stone Speaker", "The Spirit of the Mountain",
            "The Root of All Wisdom", "The Echo of Creation", "The First Born", "The Ancestral Dreamer",
            "The Primordial Weaver", "The Living Mountain", "The Whispering Rock", "The Soul of the Forest",
            "The Elder Dragon", "The First Necromancer", "The Living Rune", "The Spirit of the Lake",
            "The Ancestral Shaman", "The Forgotten Prophet", "The Ageless Wanderer", "The Ancient Oracle",
            "The Primordial Giant", "The Last Griffin Rider", "The Silent Sentinel", "The Stone Guardian",
            "The Spirit of the River", "The Root of All Magic", "The Echo of the Stars", "The First Mage",
            "The Ancestral Seer", "The Primordial Beast", "The Living Glacier", "The Whispering Winds"
        ]
    },

    // Merchant and Trader Names
    merchants: {
        male: [
            "Goldwin the Trader", "Barnaby Coinsworth", "Jasper Merchant", "Roderick Sellswell",
            "Aldwin Goodbargain", "Cornelius Richworth", "Mortimer Goldhand", "Percival Peddler",
            "Reginald Tradesman", "Algernon Shopkeep", "Benedict Vendor", "Crispin Dealer",
            "Godfrey Haggler", "Ambrose Purveyor", "Matthias Broker", "Silas Silverpurse",
            "Thomas the Honest", "Walter the Waresmith", "Xavier the Exchanger", "York the Yeoman Merchant",
            "Zane the Zealous Trader", "Bartholomew Bigbelly", "Cyrus Coincollector", "Dexter Dosh",
            "Ernest Easytrade", "Frederick Fairdeal", "Gerald Gilt", "Hector Hoarder",
            "Irving Ironmonger", "Jonas Jewel", "Kendall Keeneye", "Lionel Ledger",
            "Miles Moneymaker", "Nigel Nodule", "Orson Orb", "Phileas Philanthropist",
            "Quincy Quid", "Ronald Rouble", "Samuel Scrubber", "Theron Thrifts",
            "Uriah Utility", "Victor Value", "Wendell Wares", "Xerxes Xchange",
            "Yancy Yield", "Zachary Zeal", "Borin Bags", "Doric Dust",
            "Fimbur Flour", "Gror Gems", "Kili Kettle", "Moriak Mead"
        ],
        female: [
            "Goldwyn the Trader", "Beatrice Coinsworth", "Jasmine Merchant", "Rosalind Sellswell",
            "Aldwina Goodbargain", "Cornelia Richworth", "Minerva Goldhand", "Prudence Peddler",
            "Regina Tradesman", "Arabella Shopkeep", "Benedetta Vendor", "Cordelia Dealer",
            "Genevieve Haggler", "Ambrosia Purveyor", "Matilda Broker", "Silvana Silverpurse",
            "Theodora the Honest", "Wilma Waresmith", "Xena the Exchanger", "Yvonne Yeoman Merchant",
            "Zara the Zealous Trader", "Bridget Bigbelly", "Cynthia Coincollector", "Desiree Dosh",
            "Elara Easytrade", "Felicia Fairdeal", "Gilda Gilt", "Helena Hoarder",
            "Isolde Ironmonger", "Jocelyn Jewel", "Kira Keeneye", "Livia Ledger",
            "Mara Moneymaker", "Nia Nodule", "Olga Orb", "Penelope Philanthropist",
            "Quinn Quid", "Rhiannon Rouble", "Sabrina Scrubber", "Tabitha Thrifts",
            "Ursula Utility", "Victoria Value", "Wendy Wares", "Xenia Xchange",
            "Yara Yield", "Zelda Zeal", "Borina Bags", "Dora Dust",
            "Fimburia Flour", "Grilda Gems", "Kilia Kettle", "Moria Mead"
        ]
    },

    // Tavern Keepers and Innkeepers
    innkeepers: {
        male: [
            "Big Tom's Ale House", "Willem the Jovial", "Garrett Goodbrew", "Connor Hearthkeeper",
            "Bran the Welcoming", "Erik Warmhearth", "Finn the Friendly", "Owen Alemaster",
            "Leif the Hospitable", "Magnus Stoutbelly", "Bjorn the Merry", "Ulf Brewmaster",
            "Gunnar the Cheerful", "Ragnar Innkeeper", "Tormund the Host", "Barnaby the Brewmaster",
            "Caleb the Comforting", "Dorian the Drunkard's Friend", "Elias the Enthusiastic Host", "Felix the Feasting Friar",
            "Gareth the Gracious", "Hugh the Hearty", "Isaac the Inviting", "Joram the Jovial",
            "Kendrick the Kind", "Larkin the Laughing", "Milo the Merry", "Nevin the Neighborly",
            "Oscar the Openhearted", "Piers the Pleasing", "Reuben the Refreshing", "Sterling the Spirited",
            "Thaddeus the Tippler", "Uriah the Understanding", "Victor the Vivacious", "Wendell the Welcomer",
            "Xavier the Xylos", "Yancy the Yielding", "Zachary the Zestful", "Old Man Tiber",
            "Jolly Jim", "Grumpy Greg", "Singing Sam", "Whispering Will",
            "Honest Abe", "Fatty Finn", "Thin Tim", "Dancing Dave"
        ],
        female: [
            "Goodwife Martha", "Anna the Hostess", "Brigitte Warmsmile", "Clara the Kind",
            "Diana Hearthmother", "Elena the Caring", "Fiona Sweetbread", "Greta the Generous",
            "Hannah the Helpful", "Ingrid Goodcheer", "Jane the Jolly", "Kate Kindheart",
            "Luna the Lovely", "Mary the Motherly", "Nina the Nurturing", "Rosie the Red-Haired Hostess",
            "Sally the Smiling", "Tilly the Tavern Siren", "Ursula the Understanding Innkeeper", "Violet the Vibrant Hostess",
            "Willow the Welcoming", "Zoe the Zestful", "Old Elara the Innkeeper", "Young Maeve the Barmaid",
            "Jena the Jovial Hostess", "Bea the Brewmistress", "Daisy the Delightful", "Gwen the Gracious",
            "Piper the Piping Hostess", "Rowan the Radiant", "Thistle the Thoughtful", "Skye the Serene",
            "Agnes the Amiable", "Bree the Bubbly", "Cora the Cheerful", "Daphne the Delightful",
            "Edith the Engaging", "Flora the Friendly", "Gail the Good-Hearted", "Hazel the Hospitable",
            "Iris the Inviting", "June the Jolly", "Kira the Kind", "Lena the Lively",
            "Molly the Merry", "Nora the Nurturing", "Olive the Optimistic", "Penny the Pleasant"
        ]
    },

    // Religious Figures
    religious: {
        priests: [
            "Father Benedict", "Brother Augustine", "Sister Magdalene", "Mother Superior Agatha",
            "Abbot Cornelius", "Prior Matthias", "Chaplain Theodore", "Friar Francis",
            "Cardinal Maximilian", "Archbishop Silvanus", "Bishop Aurelius", "Deacon Marcus",
            "Holy Elder Cyprian", "Sanctified Brother Julian", "Reverend Mother Seraphina", "Apostle Theron",
            "Sacred Seer Kaelen", "High Priest Elara", "Divine Loremaster Silas", "Father Confessor Aldric",
            "Elder Sister Beatrice", "Inquisitor Valerius", "Canon Percival", "Vicar Thaddeus",
            "Patriarch Godfrey", "Matriarch Isadora", "Archon Remus", "Pontiff Lucius",
            "Cardinal Vincent", "Archbishop Gideon", "Bishop Fabian", "Deaconess Anna",
            "Holy Father Anselm", "Sanctified Sister Brigid", "Reverend Mother Clementine", "Apostle Bartholomew",
            "Sacred Seer Fiona", "High Priest Gareth", "Divine Loremaster Isolde", "Father Confessor Lysander",
            "Elder Sister Cordelia", "Inquisitor Hadrian", "Canon Julian", "Vicar Lysandra",
            "Patriarch Orion", "Matriarch Penelope", "Archon Quintus", "Pontiff Severus"
        ],
        cultists: [
            "Dark Priest Malachar", "Shadow Cultist Vex", "Void Worshipper Nihil",
            "Blood Ritualist Crimson", "Death Cleric Mortis", "Chaos Devotee Entropy",
            "Demon Summoner Bael", "Necromancer Lich", "Dark Oracle Raven",
            "Shadow Prophet Gloom", "Unholy Acolyte Bane", "Cursed Priest Doom",
            "Whisperer of the Void", "Grim Seeker Kael", "Flesh Weaver Zorg",
            "Mind Bender Silas", "Soul Corruptor Morwen", "Abyssal Speaker Theron",
            "Blasphemous Preacher", "Nightmare Weaver", "Crimson Oathbinder", "Apostate Alchemist",
            "Heretic Lumina", "The Gutter Priest", "Cult of the Whispering Darkness Leader", "Shadowbind Master",
            "Void Speaker Grimlore", "Gravewalker Necron", "Blood Coven Witch Elara", "Chaos Warlock Xylos",
            "Demonologist Azmar", "The Faceless Priest", "Acolyte of the Serpent", "Deathspeaker Gorok",
            "Crimson Hand Assassin", "Shadowed Monk Corvus", "Obsidian Oracle Valerius", "Abyssal Prophetess Lilith",
            "Blasphemous Zealot", "Nightmare Harbinger", "Crimson Ritual Master", "Apostate Sorcerer",
            "Heretic Loremaster", "The Silent Cultist", "Cult of the Shadowed Moon Leader", "Shadowbind Apprentice"
        ]
    }
};

// Helper functions for generating quest characters
export class QuestCharacterGenerator {
    
    static getRandomName(category, subcategory = null, gender = null) {
        const names = questCharacterNames[category];
        if (!names) return "Unknown Character";
        
        if (subcategory && names[subcategory]) {
            if (gender && names[subcategory][gender]) {
                const genderNames = names[subcategory][gender];
                return genderNames[Math.floor(Math.random() * genderNames.length)];
            } else if (Array.isArray(names[subcategory])) {
                return names[subcategory][Math.floor(Math.random() * names[subcategory].length)];
            }
        }
        
        // Fallback to first available array
        const firstArray = this.findFirstArray(names);
        return firstArray[Math.floor(Math.random() * firstArray.length)];
    }
    
    static findFirstArray(obj) {
        for (const key in obj) {
            if (Array.isArray(obj[key])) {
                return obj[key];
            } else if (typeof obj[key] === 'object') {
                const result = this.findFirstArray(obj[key]);
                if (result) return result;
            }
        }
        return ["Unnamed Character"];
    }
    
    static generateQuestGiver(type = 'random') {
        const types = ['mysterious', 'divine', 'ancient'];
        const selectedType = type === 'random' ? 
            types[Math.floor(Math.random() * types.length)] : type;
            
        return this.getRandomName('questGivers', selectedType);
    }
    
    static generateMerchant(gender = 'random') {
        const selectedGender = gender === 'random' ? 
            (Math.random() < 0.5 ? 'male' : 'female') : gender;
            
        return this.getRandomName('merchants', selectedGender);
    }
    
    static generateInnkeeper(gender = 'random') {
        const selectedGender = gender === 'random' ? 
            (Math.random() < 0.5 ? 'male' : 'female') : gender;
            
        return this.getRandomName('innkeepers', selectedGender);
    }
    
    static generateByRace(race, gender = 'random', type = 'random') {
        if (!questCharacterNames[race]) return "Unknown Character";
        
        const raceData = questCharacterNames[race];
        
        if (race === 'human' && type !== 'random') {
            const selectedGender = gender === 'random' ? 
                (Math.random() < 0.5 ? 'male' : 'female') : gender;
            return this.getRandomName('human', selectedGender, type);
        } else {
            const selectedGender = gender === 'random' ? 
                (Math.random() < 0.5 ? 'male' : 'female') : gender;
            return this.getRandomName(race, selectedGender);
        }
    }
    
    static generateRandomCharacter() {
        const categories = Object.keys(questCharacterNames);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        
        if (randomCategory === 'human') {
            const types = ['noble', 'commoner', 'scholarly', 'military', 'criminal'];
            const randomType = types[Math.floor(Math.random() * types.length)];
            const randomGender = Math.random() < 0.5 ? 'male' : 'female';
            return this.getRandomName('human', randomGender, randomType);
        } else if (randomCategory === 'questGivers') {
            return this.generateQuestGiver();
        } else if (randomCategory === 'merchants') {
            return this.generateMerchant();
        } else if (randomCategory === 'innkeepers') {
            return this.generateInnkeeper();
        } else {
            const randomGender = Math.random() < 0.5 ? 'male' : 'female';
            return this.getRandomName(randomCategory, randomGender);
        }
    }
    
    static generateCharacterWithTitle(race, role, gender = 'random') {
        const name = this.generateByRace(race, gender, role);
        const titles = {
            noble: ['Lord', 'Lady', 'Sir', 'Dame', 'Duke', 'Duchess', 'Count', 'Countess'],
            military: ['Captain', 'Commander', 'General', 'Admiral', 'Colonel', 'Major'],
            scholarly: ['Professor', 'Scholar', 'Sage', 'Magister', 'Archivist'],
            religious: ['Father', 'Mother', 'Brother', 'Sister', 'Prior', 'Abbess'],
            criminal: ['Boss', 'Chief', 'Leader', 'Kingpin']
        };
        
        if (titles[role]) {
            const title = titles[role][Math.floor(Math.random() * titles[role].length)];
            return `${title} ${name}`;
        }
        
        return name;
    }
}

export default { questCharacterNames, QuestCharacterGenerator };
