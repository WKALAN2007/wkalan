// ── Image paths ──
const P = (name: string) => `/hospitality/properties/${name}`;
const R = (name: string) => `/hospitality/restaurants/${name}`;
const E = (name: string) => `/hospitality/experiences/${name}`;
const S = (name: string) => `/hospitality/stories/${name}`;
const O = (name: string) => `/hospitality/offers/${name}`;
const G = (name: string) => `/hospitality/gallery/${name}`;

// ── Properties ──
export const properties = [
  {
    slug: "santorini",
    name: "Aurelia Santorini",
    location: "Santorini, Greece",
    tagline: "The original. Clifftop suites with Caldera views since 1923.",
    heroImage: P("santorini-hero.jpg"),
    gallery: [
      P("santorini-1.jpg"),
      P("santorini-2.jpg"),
      P("santorini-3.jpg"),
      P("santorini-hero.jpg"),
      P("santorini-1.jpg"),
      P("santorini-2.jpg"),
    ],
    rooms: 62,
    restaurants: 3,
    highlights: ["Caldera Views", "Infinity Pool", "Private Beach", "Spa"],
    description: `Perched on the volcanic cliffs of Santorini, Aurelia Santorini is where our story began in 1923. Originally a private residence built by a Greek shipping merchant for his family, the property has evolved over a century into one of the most celebrated resorts in the Cyclades — without ever losing the warmth of a family home.\n\nEach of our 62 suites and villas is carved into the cliffside, offering uninterrupted views of the Caldera and the Aegean beyond. The architecture honors the island's vernacular — whitewashed walls, vaulted ceilings, and cobalt-blue accents — while the interiors bring a quiet, contemporary elegance.\n\nAt Aurelia Santorini, the days unfold at their own pace. Mornings begin with Greek coffee on your private terrace as the sun lifts over the sea. Afternoons are for the infinity pool, a book in the library, or a walk through the winding lanes of Oia. Evenings belong to our restaurants — from the tasting menu at The Aurelia to sunset mezze on the Terrace.`,
    cardImage: P("santorini-hero.jpg"),
  },
  {
    slug: "mykonos",
    name: "Aurelia Mykonos",
    location: "Mykonos, Greece",
    tagline: "Whitewashed villas cascading toward turquoise shores.",
    heroImage: P("mykonos-hero.jpg"),
    gallery: [
      P("mykonos-1.jpg"),
      P("mykonos-2.jpg"),
      P("mykonos-3.jpg"),
      P("mykonos-hero.jpg"),
      P("mykonos-1.jpg"),
      P("mykonos-2.jpg"),
    ],
    rooms: 48,
    restaurants: 2,
    highlights: ["Beachfront", "Pool Villas", "Water Sports", "Beach Club"],
    description: `Aurelia Mykonos is our celebration of the island's dual nature — cosmopolitan energy by day, serene escape by night. Set on a private stretch of coastline just minutes from Mykonos Town, our 48 whitewashed villas cascade down the hillside toward crystalline waters.\n\nDesigned in collaboration with Athenian architects, the property blends Cycladic minimalism with mid-century Mediterranean warmth. Each villa features its own plunge pool and terrace, oriented to capture the famous Mykonos light — that particular golden quality that has drawn artists and wanderers here for generations.\n\nThe rhythm here is yours to set. Spend the morning at our beach club, the afternoon exploring the labyrinthine streets of Chora, and the evening at our open-air restaurant where the catch of the day is grilled over olive wood and served with island-grown herbs.`,
    cardImage: P("mykonos-hero.jpg"),
  },
  {
    slug: "amalfi",
    name: "Aurelia Amalfi",
    location: "Amalfi Coast, Italy",
    tagline: "A lemon-scented palazzo perched above the Tyrrhenian Sea.",
    heroImage: P("amalfi-hero.jpg"),
    gallery: [
      P("amalfi-1.jpg"),
      P("amalfi-2.jpg"),
      P("amalfi-3.jpg"),
      P("amalfi-hero.jpg"),
      P("amalfi-1.jpg"),
      P("amalfi-2.jpg"),
    ],
    rooms: 35,
    restaurants: 2,
    highlights: ["Sea Views", "Lemon Groves", "Cooking School", "Terrace Bar"],
    description: `Housed in a restored 18th-century palazzo, Aurelia Amalfi clings to the cliffs of the Costiera Amalfitana with all the grace of its storied past. Originally built as the summer residence of a Neapolitan noble family, the palazzo was acquired and painstakingly restored by Aurelia in 2015 — a labor of love that took nearly four years.\n\nToday, our 35 rooms and suites are a masterclass in Italian craftsmanship. Hand-painted Vietri tiles line the bathrooms. Terrace railings are forged by local ironworkers using techniques passed down through generations. The scent of lemon — from the groves that terrace the hillside — drifts through every open window.\n\nOur cooking school, led by a third-generation Amalfitana chef, invites guests into the kitchen to learn the secrets of coastal Italian cooking — from handmade scialatielli to the perfect limoncello.`,
    cardImage: P("amalfi-hero.jpg"),
  },
  {
    slug: "bodrum",
    name: "Aurelia Bodrum",
    location: "Bodrum, Turkey",
    tagline: "Where the Aegean meets Anatolian warmth and ancient ruins.",
    heroImage: P("bodrum-hero.jpg"),
    gallery: [
      P("bodrum-1.jpg"),
      P("bodrum-2.jpg"),
      P("bodrum-3.jpg"),
      P("bodrum-hero.jpg"),
      P("bodrum-1.jpg"),
      P("bodrum-2.jpg"),
    ],
    rooms: 40,
    restaurants: 2,
    highlights: ["Hammam Spa", "Private Cove", "Yacht Dock", "Rooftop Bar"],
    description: `Aurelia Bodrum is our newest property — an intimate retreat on the Bodrum Peninsula where the deep blue of the Aegean meets the warmth of Anatolian hospitality. Built from local stone and timber, the property is designed to feel as though it has always been here, nestled among olive groves and fragrant with wild thyme and sage.\n\nOur 40 rooms and suites are arranged around a series of courtyards inspired by traditional Turkish han architecture — places of rest and gathering that trace their lineage back to the Silk Road. Each room opens onto a private garden or sea-view terrace, and our hammam spa offers treatments rooted in Ottoman tradition.\n\nThe private cove, accessible only to guests, is where days begin with a swim in crystalline water and end with grilled octopus and raki at our waterfront restaurant as the sun sinks into the Aegean.`,
    cardImage: P("bodrum-hero.jpg"),
  },
];

// ── Restaurants ──
export const restaurants = [
  {
    slug: "the-aurelia",
    name: "The Aurelia",
    cuisine: "Fine Dining",
    heroImage: R("fine-dining.jpg"),
    gallery: [
      R("fine-dining.jpg"),
      R("terrace.jpg"),
      R("japanese.jpg"),
    ],
    hours: "Dinner: 7:00 PM – 11:00 PM",
    dress: "Smart Elegant",
    description: `The Aurelia is our flagship restaurant — a celebration of seasonal ingredients and culinary artistry guided by Executive Chef Dimitris Apostolou, who earned his first Michelin star at the age of 28.\n\nDimitris's philosophy is rooted in a deep respect for the Aegean pantry: wild herbs foraged from the hillsides, seafood landed that morning by local fishermen, olive oil pressed from century-old groves, and cheeses made by shepherds whose families have tended the same flocks for generations.\n\nThe eight-course tasting menu changes with the seasons, but always tells a story of place. A single dish might pair Santorini fava with fermented wild garlic and bottarga, or roast lamb with thyme honey and ash-baked eggplant. The wine list, curated by our head sommelier, spans the great houses of Europe alongside an extraordinary selection of Greek indigenous varieties — Assyrtiko, Xinomavro, Agiorgitiko — that are finally receiving the global recognition they deserve.\n\nThe dining room itself is a study in understated elegance: hand-thrown ceramics, linen that has been washed a hundred times until it feels like silk, candlelight that flickers against whitewashed walls. A table at The Aurelia is not just a meal — it is an evening, unhurried and unforgettable.`,
    cardImage: R("fine-dining.jpg"),
  },
  {
    slug: "terrace",
    name: "Terrace",
    cuisine: "Mediterranean",
    heroImage: R("terrace.jpg"),
    gallery: [
      R("terrace.jpg"),
      R("fine-dining.jpg"),
      R("japanese.jpg"),
    ],
    hours: "Lunch: 12:00 PM – 3:00 PM | Dinner: 6:30 PM – 10:30 PM",
    dress: "Resort Casual",
    description: `Perched on the edge of the Caldera with sweeping views that stretch to the horizon, Terrace is where the flavors of the Mediterranean come alive in an al fresco setting that is nothing short of cinematic.\n\nOur menu is a love letter to the coastal cuisines of Greece, Italy, and the Levant — wood-fired flatbreads, grilled seafood caught that morning, salads of heirloom tomatoes and barrel-aged feta, and pasta made by hand each afternoon. The wood-fired oven is the heart of the kitchen, turning out everything from slow-roasted lamb shoulder to charred octopus with lemon and oregano.\n\nLunch at Terrace is sun-drenched and leisurely, the kind of meal that stretches into the afternoon with another bottle of Assyrtiko and no particular place to be. Dinner is more theatrical — the sun setting into the sea, the candles lit, the hum of conversation rising as the stars emerge. It is the restaurant our guests return to, year after year, for the dish they cannot find anywhere else.`,
    cardImage: R("terrace.jpg"),
  },
  {
    slug: "mizumi",
    name: "Mizumi",
    cuisine: "Japanese",
    heroImage: R("japanese.jpg"),
    gallery: [
      R("japanese.jpg"),
      R("fine-dining.jpg"),
      R("terrace.jpg"),
    ],
    hours: "Dinner: 6:00 PM – 10:30 PM (Closed Mondays)",
    dress: "Smart Casual",
    description: `Mizumi is our most intimate dining experience — just eight seats at a hinoki wood counter, where Chef Yuki Tanaka prepares an omakase that changes nightly based on what arrived from Tokyo's Toyosu Market that morning.\n\nChef Tanaka trained for twelve years in Tokyo and Kyoto before bringing his craft to the shores of the Aegean. His approach honors the rigor of Edomae tradition while embracing the extraordinary seafood of the Mediterranean — a philosophy he calls "two seas, one blade."\n\nThe result is a cuisine that feels both deeply rooted and entirely surprising. A course might pair bluefin tuna from Kyushu with Santorini capers, or Hokkaido uni with Greek sea salt harvested by hand from the rocks of Milos. Each piece of nigiri is formed with the precision that only decades of practice can produce, served at the exact temperature and moment it should be eaten.\n\nReservations at Mizumi are among the most sought-after in the Greek islands. We recommend booking at least four weeks in advance.`,
    cardImage: R("japanese.jpg"),
  },
  {
    slug: "the-bar",
    name: "The Bar",
    cuisine: "Cocktails & Spirits",
    heroImage: R("bar.jpg"),
    gallery: [
      R("bar.jpg"),
      R("terrace.jpg"),
      R("fine-dining.jpg"),
    ],
    hours: "5:00 PM – 1:00 AM",
    dress: "Smart Casual",
    description: `The Bar is the living room of Aurelia — a warm, mood-lit retreat where the evening begins with a perfectly mixed Negroni and often ends, several hours later, with a rare single malt and a conversation that you will not want to leave.\n\nOur cocktail program is led by Athens-born mixologist Eleni Papadakis, whose creations draw on the herbs, citrus, and botanicals of the Mediterranean. The signature Aurelia Spritz — gin infused with wild fennel, vermouth, prosecco, and a twist of lemon from our own groves — has developed something of a following. Our whisky collection, housed in a glass-walled cellar behind the bar, includes over 200 expressions from Scotland, Japan, and beyond.\n\nThe space itself is designed for lingering: low leather armchairs, shelves lined with well-thumbed books, a fireplace in winter, and a terrace that opens to the sea in summer. Live piano on Thursdays and Saturdays.`,
    cardImage: R("bar.jpg"),
  },
];

// ── Experiences ──
export const experiences = [
  {
    slug: "spa-wellness",
    name: "Spa & Wellness",
    heroImage: E("spa.jpg"),
    gallery: [
      E("spa.jpg"),
      E("pool.jpg"),
      E("fitness.jpg"),
    ],
    duration: "Half-day or full-day programs",
    description: `Our spa is a sanctuary within a sanctuary — a space dedicated to stillness, restoration, and the ancient wisdom of wellness traditions from across the Aegean and beyond.\n\nHoused in a series of cave-like chambers carved into the volcanic rock, the spa draws on Santorini's natural geothermal energy. Treatments are rooted in the island's indigenous botanicals: volcanic clay body wraps, olive oil and sea salt scrubs, and our signature massage — a fusion of Greek and Thai techniques using warm pumice stones harvested from the Caldera.\n\nThe thermal suite includes a hammam, a salt inhalation room, and an ice fountain. Outside, the vitality pool — heated year-round and suspended over the cliff — offers what may be the most breathtaking view from any spa in the Mediterranean.\n\nPrivate yoga and meditation sessions are available on request, held on a platform that extends over the sea — a place where the only sounds are the wind and the water below.`,
    cardImage: E("spa.jpg"),
  },
  {
    slug: "infinity-pool",
    name: "Infinity Pool",
    heroImage: E("pool.jpg"),
    gallery: [
      E("pool.jpg"),
      E("spa.jpg"),
      E("fitness.jpg"),
    ],
    duration: "Open daily, sunrise to sunset",
    description: `The infinity pool at Aurelia Santorini has been photographed for the covers of travel magazines and the feeds of those who have made the pilgrimage here. But no image quite captures the sensation of floating at the edge of the world, the blue of the pool merging seamlessly with the blue of the Aegean, the volcanic islands in the distance shimmering in the heat.\n\nDesigned by the Milan-based firm that shaped our original property, the pool is a feat of engineering as much as aesthetics — a 25-metre heated saltwater basin that appears to hover over the Caldera. Sun loungers are positioned for maximum privacy, and our poolside service delivers chilled towels, fresh fruit, and cocktails throughout the day.\n\nFor those seeking solitude, we recommend the early morning hours — when the pool is still and the only company is the sun rising over the Cyclades.`,
    cardImage: E("pool.jpg"),
  },
  {
    slug: "fitness-center",
    name: "Fitness Center",
    heroImage: E("fitness.jpg"),
    gallery: [
      E("fitness.jpg"),
      E("pool.jpg"),
      E("spa.jpg"),
    ],
    duration: "Open 24 hours",
    description: `Our fitness center is designed for those who believe that a workout with a view is the best kind of motivation. Floor-to-ceiling windows frame the Caldera, while Technogym equipment — the latest Artis line — provides everything needed for a complete training session.\n\nBeyond the equipment, we offer a curated schedule of classes: sunrise yoga on the cliffside platform, Pilates reformer sessions, and high-intensity interval training for those who prefer their endorphins with a side of Aegean panorama. Personal training sessions can be booked with our resident fitness director, a former Olympic athlete who brings both expertise and empathy to every session.\n\nAfter your workout, the cold plunge pool and steam room await — a ritual that has become a favourite among our regular guests.`,
    cardImage: E("fitness.jpg"),
  },
  {
    slug: "island-excursions",
    name: "Island Excursions",
    heroImage: E("excursions.jpg"),
    gallery: [
      E("excursions.jpg"),
      E("sailing.jpg"),
      E("cultural.jpg"),
    ],
    duration: "Half-day or full-day",
    description: `The Cyclades are an archipelago of stories, and our island excursions are designed for travelers who want to go beyond the postcard. Each journey is led by a local guide whose knowledge of the islands runs deep — not just the history and archaeology, but the hidden coves, the family-run tavernas, and the seasonal rhythms that most visitors never see.\n\nSail to the volcanic island of Nea Kameni and hike to the crater's edge. Explore the ancient ruins of Akrotiri — a Minoan city preserved in ash for 3,600 years. Or spend a day island-hopping by private catamaran, stopping to swim in waters so clear the boats appear to float on air.\n\nEvery excursion is private and can be tailored to your interests. Our concierge team will work with you to design an itinerary that reflects your curiosity — whether that means archaeology, gastronomy, photography, or simply the pleasure of being at sea.`,
    cardImage: E("excursions.jpg"),
  },
  {
    slug: "cultural-tours",
    name: "Cultural Tours",
    heroImage: E("cultural.jpg"),
    gallery: [
      E("cultural.jpg"),
      E("excursions.jpg"),
      E("sailing.jpg"),
    ],
    duration: "Half-day or full-day",
    description: `Greece is not a country you simply visit — it is a country you meet. Our cultural tours are designed to connect you with the people, traditions, and stories that make the Aegean one of the world's most enduring civilizations.\n\nVisit a family-run olive oil estate where the same trees have been harvested for over 500 years. Spend a morning with a ceramicist in a mountain village whose pottery tradition predates the Bronze Age. Join a local grandmother in her kitchen to learn the secrets of spanakopita and moussaka — recipes passed down through generations, never written down, shared with the warmth that defines Greek hospitality.\n\nOur most popular tour takes guests to the monastery of Profitis Ilias, perched at the highest point of Santorini, for a private concert of Byzantine chant — an experience that many of our guests describe as the most moving moment of their stay.`,
    cardImage: E("cultural.jpg"),
  },
  {
    slug: "sunset-sailing",
    name: "Sunset Sailing",
    heroImage: E("sailing.jpg"),
    gallery: [
      E("sailing.jpg"),
      E("excursions.jpg"),
      E("cultural.jpg"),
    ],
    duration: "3 hours, departs 2 hours before sunset",
    description: `There are sunsets, and then there is a Santorini sunset — witnessed from the deck of a private catamaran, a glass of Assyrtiko in hand, as the sky transforms through every shade of gold, rose, and violet.\n\nOur sunset sailing experience departs from the private dock at Aurelia Santorini two hours before dusk. Your captain — a local sailor who has navigated these waters for over thirty years — will chart a course along the Caldera, past the volcano, and into the open Aegean, where the only sounds are the wind in the sails and the water against the hull.\n\nAs the sun begins its descent, the crew will prepare a selection of mezze — grilled octopus, Santorini tomato fritters, local cheeses, and fresh fruit — paired with wines from our cellar. There is no rush. The boat will drift as the sky puts on its show, and you will understand why people have been making the pilgrimage to this particular stretch of sea for millennia.\n\nPrivate charters are available for couples and small groups.`,
    cardImage: E("sailing.jpg"),
  },
];

// ── Stories ──
export const stories = [
  {
    slug: "summer-escapes",
    title: "Summer Escapes",
    label: "JOURNAL",
    heroImage: S("summer.jpg"),
    gallery: [
      S("summer.jpg"),
      S("fall.jpg"),
      S("heritage.jpg"),
    ],
    date: "June 2026",
    author: "Aurelia Editorial",
    description: `Summer arrives in the Cyclades not as a date on the calendar but as a shift in the light — a particular gold that appears in late May and lingers until October. This is the season of long days and warm nights, of salt on the skin and the particular pleasure of a cold drink after an afternoon in the sea.\n\nWe have gathered here a collection of our most intimate summer escapes — the private coves, the hidden terraces, the suites with plunge pools that feel like they are floating in the sky. These are the places where summer unfolds at its own unhurried pace, where the only decision to make is whether to swim before lunch or after.\n\nFrom the whitewashed lanes of Mykonos to the lemon-scented terraces of Amalfi, these are the retreats that our team returns to year after year — not because they are the most famous, but because they are the most loved.\n\nThis year, we are particularly excited about our new sailing experiences in Santorini. Our captain, Yiannis, has been navigating these waters for over three decades, and his knowledge of the hidden coves and secret swimming spots is unmatched. There is something about being on the water as the sun sets — the sky turning through shades you did not know existed — that puts everything into perspective.`,
    cardImage: S("summer.jpg"),
  },
  {
    slug: "rise-to-the-table",
    title: "Rise to the Table",
    label: "DINING",
    heroImage: S("dining.jpg"),
    gallery: [
      S("dining.jpg"),
      S("farm.jpg"),
      S("heritage.jpg"),
    ],
    date: "May 2026",
    author: "Aurelia Editorial",
    description: `Eleven visionary women. One remarkable 2026 cohort. This is the story of RISE, our annual mentorship programme that brings together the most exciting female chefs from across the Mediterranean for a summer of collaboration, creativity, and culinary excellence.\n\nNow in its fourth year, RISE was born from a simple observation: while women have always been the keepers of culinary tradition in the Mediterranean — the grandmothers and mothers who passed down recipes through generations — they remain underrepresented in the highest echelons of the restaurant world. RISE aims to change that.\n\nEach year, eleven chefs are selected from hundreds of applicants. They spend the summer at Aurelia Santorini, working alongside Chef Dimitris Apostolou and his team, developing new dishes, leading guest dinners, and building a network that will support them throughout their careers. The programme culminates in a gala dinner where each chef presents a dish that tells her story.\n\nThis year's cohort includes a pastry chef from Beirut who works with ancestral grain varieties, a fish cook from Sardinia who trained on her father's boat, and a fermentation specialist from Copenhagen who is applying Nordic techniques to Aegean ingredients. Their collaboration has produced some of the most exciting food we have ever served.`,
    cardImage: S("dining.jpg"),
  },
  {
    slug: "amber-hues-of-fall",
    title: "The Amber Hues of Fall",
    label: "CULTURE",
    heroImage: S("fall.jpg"),
    gallery: [
      S("fall.jpg"),
      S("heritage.jpg"),
      S("summer.jpg"),
    ],
    date: "October 2025",
    author: "Aurelia Editorial",
    description: `There is a case to be made that autumn is the finest season in the Aegean. The summer crowds have departed. The sea, having been warmed all summer, is at its most inviting. The light shifts from the harsh white of August to something softer — the amber and gold that give this season its name — and the islands exhale.\n\nThis is the season for walking. The hiking trails that connect Santorini's villages, too hot to attempt in July and August, become a daily ritual. The path from Fira to Oia, which traces the rim of the Caldera, offers views that change with every step — the volcanic islands appearing and disappearing as the angle shifts.\n\nIt is also the season for the harvest. The grapevines of Santorini, trained into distinctive basket shapes called kouloura to protect the fruit from the wind, are heavy with Assyrtiko grapes ready for picking. Our guests are invited to join the harvest — hands in the volcanic soil, learning the rhythms that have governed life on this island for over 3,000 years.\n\nIn the evenings, the temperature drops just enough to make a fireplace welcome. The Bar lights its first fire of the season, and the whisky collection — all 200 expressions of it — comes into its own.`,
    cardImage: S("fall.jpg"),
  },
  {
    slug: "where-land-and-menu-live-as-one",
    title: "Where Land & Menu Live As One",
    label: "DINING",
    heroImage: S("farm.jpg"),
    gallery: [
      S("farm.jpg"),
      S("dining.jpg"),
      S("heritage.jpg"),
    ],
    date: "September 2025",
    author: "Aurelia Editorial",
    description: `How our chefs are redefining farm-to-table with regenerative sourcing that goes beyond organic — rebuilding the soil, restoring biodiversity, and creating a food system that gives back more than it takes.\n\nThree years ago, Chef Dimitris Apostolou made a decision that would reshape every kitchen across Aurelia properties. He would no longer buy from any supplier who could not demonstrate regenerative farming practices. It was a bold move — one that meant parting ways with long-time vendors and searching, sometimes island by island, for farmers and fishermen who shared his vision.\n\nToday, the Aurelia network includes over forty small-scale producers across Greece, Italy, and Turkey. A shepherd in the mountains of Crete provides the cheese for our tasting menu. A cooperative of women on Naxos grows the heirloom vegetables that appear on the Terrace menu. A fisherman in Amalfi, who still goes out at dawn in the same wooden boat his grandfather built, supplies the catch of the day.\n\nThis is not a marketing programme. It is a philosophy — one that understands that the finest food begins with the health of the land and the dignity of the people who work it. It is slower, more expensive, and infinitely more satisfying than the industrial alternative. And once you have tasted a tomato grown in volcanic soil by someone who knows its name — not its variety, but its actual name — there is no going back.`,
    cardImage: S("farm.jpg"),
  },
  {
    slug: "the-world-of-aurelia",
    title: "The World of Aurelia",
    label: "HERITAGE",
    heroImage: S("heritage.jpg"),
    gallery: [
      S("heritage.jpg"),
      S("dining.jpg"),
      S("fall.jpg"),
    ],
    date: "August 2025",
    author: "Aurelia Editorial",
    description: `A conversation with our founders on a century of hospitality, the art of placemaking, and what comes next for a brand that has never followed the rules.\n\nWhen Andreas and Eleni Vassiliou opened the doors of their family home to paying guests in the summer of 1923, they did not have a business plan. They had a house — a beautiful one, perched on the edge of the Caldera — and a conviction that travelers were hungry for something that the grand hotels of the era could not provide: a genuine sense of place. Of belonging. Of being welcomed not as a customer, but as a guest.\n\nOne hundred years later, that conviction remains at the heart of everything we do. Aurelia has grown — from one house to four properties across three countries — but the philosophy has not changed. We are still, at our core, hosts. The scale is different, but the impulse is the same: to create spaces where people feel truly at home, even when they are far from it.\n\nWe sat down with Eleni Vassiliou — now 94, and still visiting the Santorini property every summer — to talk about the century behind us and the one ahead.`,
    cardImage: S("heritage.jpg"),
  },
];

// ── Offers ──
export const offers = [
  {
    slug: "suite-sojourn",
    title: "Suite Sojourn",
    heroImage: O("suite-sojourn.jpg"),
    gallery: [
      O("suite-sojourn.jpg"),
      O("more-aurelia.jpg"),
      O("gather-more.jpg"),
    ],
    description: `Reserve a suite and enjoy thoughtful additions that transform a stay into an experience — daily breakfast served on your private terrace, private round-trip transfers from the airport or port, and a curated welcome experience that sets the tone for everything to come.\n\nYour welcome experience includes a bottle of Assyrtiko from our cellar, a selection of seasonal fruits and Greek sweets, and a personal orientation from our concierge team who will help you design your perfect stay — from restaurant reservations to island excursions.\n\nBook a suite for four nights or more, and enjoy a complimentary private sailing excursion (value €400) — a three-hour journey along the Caldera at sunset, with mezze and wine served on board.\n\nTerms: Valid for stays through December 2026. Subject to availability. Not combinable with other offers unless otherwise stated.`,
    cardImage: O("suite-sojourn.jpg"),
  },
  {
    slug: "more-aurelia",
    title: "More Aurelia",
    heroImage: O("more-aurelia.jpg"),
    gallery: [
      O("more-aurelia.jpg"),
      O("suite-sojourn.jpg"),
      O("gather-more.jpg"),
    ],
    description: `Stay an extra night on us. Extend your journey and receive a complimentary fourth night when you book three consecutive nights at any Aurelia property.\n\nWe believe that the best stays are the ones that do not feel rushed — where there is time for a second visit to the restaurant you loved, a morning with no plans, and the kind of deep relaxation that only sets in after the third day.\n\nThis offer applies to all room categories and all four Aurelia properties. The complimentary night will be applied to the least expensive night of your stay.\n\nTerms: Valid for stays through March 2027. Blackout dates apply during peak holiday periods. Subject to availability. Must be booked at least 14 days in advance.`,
    cardImage: O("more-aurelia.jpg"),
  },
  {
    slug: "gather-more-gain-more",
    title: "Gather More, Gain More",
    heroImage: O("gather-more.jpg"),
    gallery: [
      O("gather-more.jpg"),
      O("more-aurelia.jpg"),
      O("suite-sojourn.jpg"),
    ],
    description: `Unlock elevated rewards when you book an exclusive-use villa for your next celebration or retreat. Whether it is a milestone birthday, a family reunion, or a corporate offsite, our villas offer the space, privacy, and service to make any gathering extraordinary.\n\nBenefits include: a dedicated event coordinator to manage every detail, a complimentary group activity (choose from a cooking class, wine tasting, or private boat excursion), daily breakfast for all guests, one complimentary dinner at The Aurelia for the group (up to 10 guests), and priority reservations at all restaurants and experiences.\n\nOur exclusive-use villas range from the four-bedroom Garden Residence at Aurelia Amalfi to the eight-bedroom Caldera Estate at Aurelia Santorini — each with private pools, full kitchens, and dedicated staff.\n\nTerms: Minimum three-night stay. Valid through 2027. Subject to availability. Group size and villa configurations vary by property.`,
    cardImage: O("gather-more.jpg"),
  },
];
