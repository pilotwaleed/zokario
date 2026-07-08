/* =========================================================
   ZOKARIO: catalogue
   Products, preview chapters, coupons. Single source of truth.
   ========================================================= */

const ZK = {

  coupons: {
    WELCOME10: { pct: 10, label: "Welcome offer: 10% off" },
    READERS15: { pct: 15, label: "Private reading list: 15% off" }
  },

  categories: [
    "Business & Money", "Self-Improvement", "Health & Fitness", "Stories & Fiction",
    "Travel & Lifestyle", "AI & Technology", "Relationships", "Productivity"
  ],

  products: [

  /* ---------------- BOOKS ---------------- */
  {
    id: "the-quiet-ledger",
    type: "book",
    title: "The Quiet Ledger",
    subtitle: "A calmer way to think about money: the habits, systems, and numbers that actually matter.",
    category: "Business & Money",
    price: 19, oldPrice: 26,
    rating: 4.9, ratings: 214,
    pages: 184, readTime: "4½ hours",
    badges: ["bestseller", "featured"],
    cover: { c1: "#25301F", c2: "#131A10", acc: "#D9C28C", motif: "ledger" },
    hook: "Money stops being stressful the moment you can see it clearly.",
    desc: [
      "Most money advice is loud. It promises speed, shortcuts, and a version of wealth that looks good on a screen. The Quiet Ledger takes the opposite position: that financial calm is built slowly, in private, from a small set of habits repeated without drama.",
      "Across twelve chapters, it walks you from the psychology of spending to a working personal system: one ledger, one weekly review, one set of numbers you actually understand. No jargon, no hype, no pretending a spreadsheet will change your life. Just structure, applied gently, until money becomes something you direct instead of something you fear."
    ],
    learn: [
      "Why most budgets fail within six weeks, and the review ritual that doesn't",
      "The four numbers that describe your entire financial life",
      "How to design a spending system that runs on ten minutes a week",
      "A calm framework for debt, saving, and long-horizon investing",
      "How to talk about money without tension, with yourself and others"
    ],
    audience: [
      "Professionals who earn well but feel strangely broke",
      "Anyone whose money system is 'check the balance and hope'",
      "Couples who want a shared language for spending",
      "Readers allergic to get-rich-quick culture"
    ],
    contents: [
      "The Noise Around Money", "What a Ledger Really Is", "The Four Numbers",
      "Designing the Weekly Review", "Spending Without Guilt", "The Debt Chapter",
      "Saving as Architecture", "A Gentle Introduction to Investing",
      "Money and Other People", "When Income Changes", "Automation, Carefully", "The Quiet Years"
    ],
    faq: [
      { q: "Is this book beginner-friendly?", a: "Yes. It assumes no financial background and avoids jargon entirely. Every concept is introduced from zero and built up slowly." },
      { q: "Does it cover investing?", a: "One full chapter introduces long-horizon investing principles, calmly and without stock tips. It is a book about systems, not speculation." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library on any device." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Chapter One", t: "The Noise Around Money", paras: [
        "There is a particular kind of tiredness that comes from money. Not from the lack of it, although that has its own weight, but from the constant, low-frequency hum of not quite knowing. Not knowing what was spent, not knowing what is left, not knowing whether the plan, if there ever was a plan, is working. Most people carry this hum for years and call it normal.",
        "The financial industry has little interest in turning the volume down. Noise is profitable. Urgency sells subscriptions, apps, courses, and eleven different accounts you will forget to check. So the advice arrives loud: optimise everything, track everything, feel vaguely guilty about coffee. And when the system collapses, as systems built on guilt always do, the industry sells you a new one.",
        "This book begins from a different premise: that your relationship with money improves in proportion to how quiet it becomes. Clarity is quiet. A number you trust is quiet. A decision you have already made once, well, and never need to revisit: that is the quietest sound in personal finance.",
        "So we will not begin with a budget. We will begin with a ledger: a single, honest record of what is true. Not what should be true, not what you wish were true in your more optimistic moments. What is. It takes most readers under an hour to build, and it is the last dramatic thing this book will ask of you."
      ]},
      { kicker: "Chapter Two", t: "What a Ledger Really Is", paras: [
        "Before spreadsheets, before banks, before money itself in any form you would recognise, people kept ledgers. Clay tablets in Mesopotamia recorded grain owed and grain delivered. The technology has changed; the human need has not. A ledger is simply a place where the truth is written down so that it no longer has to be remembered, argued with, or feared.",
        "Notice what a ledger is not. It is not a forecast. It is not a judgement. It does not care what you intended to spend in March. It records what happened, and in doing so it performs a small act of mercy: it separates you from your money. You are not the number. You are the person reading the number.",
        "Your ledger will have four lines, and we will spend the next chapter on them properly. For now, only this: everything you have, everything you owe, everything that arrives in a month, everything that leaves. Four lines. Most people have never seen all four written in the same place, and the first time they do, something in the shoulders lets go."
      ]},
      { kicker: "Chapter Three", t: "The Four Numbers", paras: [
        "Own, owe, in, out. Every financial instrument ever devised, from mortgages and index funds to credit cards and pensions, is a variation on these four movements. When you know your four numbers, financial news becomes translation instead of intimidation.",
        "In this chapter we calculate each one with actual figures, handle the accounts you have been avoiding, and set the review rhythm that keeps the numbers honest without demanding your evenings."
      ]},
      { kicker: "Chapter Four", t: "Designing the Weekly Review", paras: [
        "Ten minutes, once a week, at a time you already like. The weekly review is the engine of this entire system, and this chapter builds yours: what to check, what to ignore, what to write down, and how to end every review with one decision instead of ten anxieties.",
        "You will also meet the two-list method for irregular expenses (the birthdays, repairs, and renewals that ambush ordinary budgets) and learn why the review works best when it is slightly boring."
      ]},
      { kicker: "Chapter Five", t: "Spending Without Guilt", paras: [
        "A spending plan that requires you to become a different person is not a plan; it is a wish. This chapter draws the line between the spending that is quietly building your life and the spending that is quietly renting your attention, and shows you how to fund the first kind without ceremony.",
        "Guilt, it turns out, is a terrible accountant. Structure is better."
      ]},
      { kicker: "Chapter Six", t: "Saving as Architecture", paras: [
        "Savings fail when they depend on willpower and succeed when they depend on plumbing. Here we design the account structure: buffers, horizons, and the order in which money flows, arranged so that saving happens before you have the chance to be human about it.",
        "By the end of this chapter your money will move by design. The remaining chapters build on that foundation: debt, investing, other people, and the long quiet years where the system pays for itself."
      ]}
    ]
  },

  {
    id: "deep-focus",
    type: "book",
    title: "Deep Focus",
    subtitle: "Reclaiming sustained attention in a world engineered to interrupt you.",
    category: "Productivity",
    price: 17, oldPrice: 24,
    rating: 4.8, ratings: 186,
    pages: 162, readTime: "4 hours",
    badges: ["featured", "bestseller"],
    cover: { c1: "#1E2733", c2: "#0F141C", acc: "#CBB689", motif: "focus" },
    hook: "Attention is the last honest currency. This is how you stop spending it by accident.",
    desc: [
      "You do not have an attention problem. You have an attention environment problem: a phone, a feed, an open-plan calendar, and a culture that treats interruption as collaboration. Deep Focus is a field guide to rebuilding the conditions under which real thinking happens.",
      "It is deliberately practical. Every chapter ends in something you can change the same day: a room, a ritual, a default, a sentence you say to protect an hour. The result is not a productivity system. It is something quieter and more valuable: the returned ability to sit with one difficult thing until it gives."
    ],
    learn: [
      "The three-layer model of attention, and where yours actually leaks",
      "How to build a daily deep block that survives real life",
      "Environment design: rooms, screens, and defaults that protect thought",
      "The art of the graceful no: scripts for meetings, messages, and asks",
      "How to recover focus after it breaks, without losing the day"
    ],
    audience: [
      "Knowledge workers whose calendar owns them",
      "Writers, developers, designers: anyone paid to think in long arcs",
      "Students facing the deepest distraction environment in history",
      "Anyone who reads four paragraphs and reaches for their phone"
    ],
    contents: [
      "The Interruption Economy", "Three Layers of Attention", "The Deep Block",
      "Rooms That Think With You", "Screens, Tamed", "The Graceful No",
      "Meetings and Other Weather", "Recovery Protocols", "Focus and the Body", "A Long Attention Span Life"
    ],
    faq: [
      { q: "Is this another 'delete your apps' book?", a: "No. It treats tools as neutral and environments as decisive. You will change defaults and structures, not take vows." },
      { q: "How long are the chapters?", a: "Ten chapters, each readable in 20 to 25 minutes, each ending with one concrete change." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Chapter One", t: "The Interruption Economy", paras: [
        "Somewhere in the last fifteen years, being reachable became a moral obligation. The message arrives, the badge glows, and a small social contract activates: someone wants you, and wanting is urgent. It took a decade of design brilliance to make ignoring a notification feel like rudeness. It was not an accident. It was a business model.",
        "The economics are simple. Your sustained attention is worth more to you than to anyone else: a focused hour compounds into skill, work, and thought that belongs to you. But your fragmented attention is worth more to everyone else. Fragments can be sold. And so a trillion-dollar industry exists to convert the first kind into the second, thirty seconds at a time.",
        "The good news hides inside the bad: because the assault on attention is designed, it can be un-designed. Focus is not a personality trait you missed out on. It is a set of conditions, and conditions can be built. This book is about building them, deliberately, humanely, and without pretending you can live outside the modern world.",
        "We begin with an honest audit. Not of your willpower, but of your environment. For one ordinary day, you are going to count interruptions the way an accountant counts expenses, and the number will annoy you into the rest of this book."
      ]},
      { kicker: "Chapter Two", t: "Three Layers of Attention", paras: [
        "Attention is not one thing. There is the surface layer: the flicking, scanning, triaging mode that gets you through email and traffic. There is the middle layer, where meetings and conversations live. And there is the deep layer: the slow, expensive, gloriously productive state where hard problems actually move.",
        "Modern work has quietly reorganised itself around the first two layers. The deep layer, the only one where your most valuable output happens, is treated as a luxury, something you get to after the messages, which means never. The deepest layer of your working mind has been rescheduled to a time that does not exist.",
        "The rest of this book is a reclamation project, and it starts with a rule so simple it sounds like a trick: the deep layer gets scheduled first, or it does not happen. Not longer hours. Earlier ownership."
      ]},
      { kicker: "Chapter Three", t: "The Deep Block", paras: [
        "One block, most days, ninety minutes, one difficult thing. This chapter builds the ritual around it: the start cue, the shutdown, the door policy. It also shows why consistency beats heroism every single week.",
        "You will also learn the two-minute entry ritual that eliminates the worst part of deep work: the cold start."
      ]},
      { kicker: "Chapter Four", t: "Rooms That Think With You", paras: [
        "Your environment votes on your behaviour before you do. Here we design the physical setup that makes depth the path of least resistance: light, sound, sight-lines, and the single-purpose corner.",
        "It costs less than you think. Most of it is subtraction."
      ]},
      { kicker: "Chapter Five", t: "The Graceful No", paras: [
        "Every yes is a scheduling decision made on behalf of your future self, usually without consulting them. This chapter provides kind, firm, reusable scripts for declining meetings, deferring messages, and negotiating response times without spending social capital you don't have.",
        "The remaining chapters cover recovery after broken focus, the physiology of attention, and what a long-attention life looks like when the system becomes invisible."
      ]}
    ]
  },

  {
    id: "the-morning-architecture",
    type: "book",
    title: "The Morning Architecture",
    subtitle: "Design the first ninety minutes of your day, and the rest begins to follow.",
    category: "Self-Improvement",
    price: 15,
    rating: 4.7, ratings: 158,
    pages: 148, readTime: "3½ hours",
    badges: ["new"],
    cover: { c1: "#3A2E20", c2: "#1C130A", acc: "#E8CD96", motif: "morning" },
    hook: "Not a 5 AM sermon. A blueprint for mornings that belong to you.",
    desc: [
      "The morning routine industry sold us a fantasy of ice baths and hour-long journaling sessions: routines designed to be photographed, not lived. The Morning Architecture starts somewhere more honest: with the morning you actually have, the energy you actually wake with, and the one or two moves that genuinely change a day's trajectory.",
      "Built around a simple framework of anchor, fuel, and direction, the book helps you construct a morning that fits inside real life: kids, commutes, night-owl chronotypes and all. Architecture, not performance."
    ],
    learn: [
      "The anchor-fuel-direction framework for any schedule",
      "Why the first decision of the day matters more than the first hour",
      "Chronotypes: designing with your biology instead of against it",
      "The 15-minute minimum viable morning for chaotic seasons",
      "Evening staging: how tonight quietly builds tomorrow"
    ],
    audience: [
      "People who have tried and abandoned three morning routines",
      "Parents and shift workers with genuinely constrained mornings",
      "Night owls tired of being told to become larks",
      "Anyone whose day starts with a phone and a flinch"
    ],
    contents: [
      "Against the Performance Morning", "Anchor, Fuel, Direction", "The First Decision",
      "Chronotypes and Honesty", "The Minimum Viable Morning", "Evening Staging",
      "Mornings With Other People", "Rebuilding After a Fall", "Ninety Days of Architecture"
    ],
    faq: [
      { q: "Do I have to wake up earlier?", a: "No. The book is explicitly against arbitrary early rising. It works with the wake time your life actually allows." },
      { q: "Is there a program to follow?", a: "The final chapter offers a gentle 90-day build, but the framework works à la carte." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Chapter One", t: "Against the Performance Morning", paras: [
        "At some point the morning stopped being a time of day and became a genre. You know the aesthetic: the 4:47 alarm, the lemon water, the journal with the leather strap, the cold plunge timed for the camera. An entire industry now runs on the suggestion that your life is mediocre because your first hour is insufficiently cinematic.",
        "Here is what the genre never mentions: almost none of it survives contact with an actual life. A teething baby dissolves the ice bath. A late shift erases the sunrise walk. And when the routine breaks, as routines built for cameras always do, it takes your confidence down with it, as if you failed the morning rather than the morning failing you.",
        "This book proposes something less photogenic and far more durable. A morning is not a performance; it is a piece of architecture. It has load-bearing elements and decorative ones, and the art is knowing the difference. Strip away everything aspirational and three functions remain: something that anchors you, something that fuels you, and something that points you. Everything else is furniture.",
        "Anchor, fuel, direction. Fifteen minutes can hold all three. So can ninety, luxuriously. The chapters ahead build each element for your actual constraints, and teach you to rebuild fast in the seasons when life redraws the plans."
      ]},
      { kicker: "Chapter Two", t: "Anchor, Fuel, Direction", paras: [
        "An anchor is any action that tells your nervous system the day has begun on your terms. It must be small, repeatable, and yours. Making the bed counts. Sitting with coffee before any screen counts. The anchor's job is not self-improvement; it is sovereignty: a five-minute claim staked on the day before the world files its requests.",
        "Fuel is bluntly physical: light, water, movement, food, in whatever combination your body responds to. Not a wellness protocol. A pit stop. Ten minutes of honest fuel outperforms an hour of aesthetic ritual.",
        "Direction is the piece almost everyone skips: one clear-eyed look at the day and one sentence about what would make it a good one. Not a plan. A heading. Days with headings bend toward them; days without get bent by whoever emails first."
      ]},
      { kicker: "Chapter Three", t: "The First Decision", paras: [
        "The first decision of most modern mornings is made by a notification. This chapter is about taking that decision back: the phone protocols that work for people who genuinely need their phones, and the surprising downstream effects of a first hour with no inputs.",
        "You will design your own 'first decision' and place it where you cannot miss it."
      ]},
      { kicker: "Chapter Four", t: "The Minimum Viable Morning", paras: [
        "Some seasons allow ninety-minute mornings. Some allow fifteen, interrupted twice. This chapter builds your MVM, the smallest version that still delivers anchor, fuel, and direction, so that hard seasons bend the routine without breaking it.",
        "Later chapters cover evening staging, shared households, and the 90-day build that turns architecture into habit."
      ]}
    ]
  },

  {
    id: "fuel",
    type: "book",
    title: "Fuel",
    subtitle: "Eating for steady energy: a practical system for people who don't want food to be complicated.",
    category: "Health & Fitness",
    price: 16, oldPrice: 21,
    rating: 4.8, ratings: 173,
    pages: 170, readTime: "4 hours",
    badges: [],
    cover: { c1: "#33251C", c2: "#170F0A", acc: "#D8A96B", motif: "fuel" },
    hook: "Stop eating for rules. Start eating for energy.",
    desc: [
      "Diet culture gave food a morality. Fuel gives it back a function. This is a book about eating for the thing you actually want: steady, reliable energy across a working day. It is written for people exhausted by contradiction and cleanses.",
      "It builds a personal eating system from evidence and repetition: default meals, honest grocery patterns, and the small experiments that reveal what your body runs well on. No foods are forbidden. No mornings begin with guilt."
    ],
    learn: [
      "The energy-first framework: judging food by how the afternoon feels",
      "Default meals: why deciding once beats deciding daily",
      "Blood sugar basics without the wearable evangelism",
      "How to eat well in restaurants, airports, and other real places",
      "A grocery system that survives busy weeks"
    ],
    audience: [
      "People tired of diets but not ready to give up on feeling good",
      "Desk workers riding the 3 PM crash",
      "Anyone who wants a system, not a philosophy",
      "Cooks of convenience who still care"
    ],
    contents: [
      "The Morality of Food", "Energy First", "The Crash Explained", "Default Meals",
      "The Grocery Pattern", "Eating Out Without Ceremony", "Protein, Practically",
      "The Experiment Month", "Movement and Meals", "A Quiet Relationship With Food"
    ],
    faq: [
      { q: "Is this a diet book?", a: "No. There are no forbidden foods, no phases, and no weigh-ins. It is a system for eating in a way that produces steady energy." },
      { q: "Does it include recipes?", a: "It includes default meal templates rather than recipes: flexible patterns you can fill with foods you already like." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Chapter One", t: "The Morality of Food", paras: [
        "Somewhere along the way, eating acquired a conscience. Foods became good or bad, clean or dirty; a slice of cake stopped being dessert and became a confession. And an entire industry grew up around managing the guilt it had first manufactured: a diet for every deadly sin.",
        "The strange result is that we now know more about nutrition than any generation in history and feel worse about eating than any of them. Knowledge was never the missing piece. A cease-fire was.",
        "This book proposes one question to replace the moral audit: how do you want to feel at four in the afternoon? Not thinner, not virtuous. Functional. Awake. Even. When energy becomes the metric, food gets simpler almost immediately, because your body starts giving you data instead of verdicts.",
        "We will build the system slowly: a handful of default meals, a grocery rhythm, one month of small experiments. By the end, food should take up less space in your head, which, you may discover, was the goal all along."
      ]},
      { kicker: "Chapter Two", t: "Energy First", paras: [
        "Track nothing except how you feel two hours after eating. That is the entire diagnostic method of this book, and it outperforms most apps because it measures the only output you actually care about.",
        "This chapter explains the physiology just deeply enough to be useful: why the enormous lunch mugs you, why the pastry breakfast writes a cheque the afternoon has to cash. It then turns this into a simple plate pattern you can apply anywhere food is served.",
        "No arithmetic. No scanning barcodes. Just a working model of your own machinery, refined by attention."
      ]},
      { kicker: "Chapter Three", t: "Default Meals", paras: [
        "Decision fatigue, not appetite, is what breaks most eating intentions. This chapter builds your set of default meals: five breakfasts, five lunches, five dinners you genuinely like. It shows how defaults free you to be adventurous when it's worth it.",
        "Later chapters handle groceries, restaurants, protein without obsession, and the experiment month that tunes the whole system to your body."
      ]}
    ]
  },

  {
    id: "the-last-lighthouse",
    type: "book",
    title: "The Last Lighthouse",
    subtitle: "A novel about a keeper, an island, and the ships we refuse to stop waiting for.",
    category: "Stories & Fiction",
    price: 12,
    rating: 4.9, ratings: 241,
    pages: 236, readTime: "6 hours",
    badges: ["bestseller", "featured"],
    cover: { c1: "#1C2A33", c2: "#0C1319", acc: "#E3C989", motif: "lighthouse" },
    hook: "The light was decommissioned years ago. Maren keeps it burning anyway.",
    desc: [
      "On the island of Brenholm, the lighthouse was switched off the year the shipping lanes moved. Everyone left. Maren stayed, climbing the tower each night to light a lamp for ships that no longer come, in memory of one that never arrived.",
      "When a stranger washes ashore with a decades-old letter in a waterproof case, Maren's private ritual becomes something else: an unfinished story demanding an ending. The Last Lighthouse is a quiet, luminous novel about grief, stubbornness, and the strange forms loyalty takes, written in prose as spare and steady as the light itself."
    ],
    learn: [],
    audience: [
      "Readers of quiet literary fiction: Claire Keegan, Kent Haruf, Amor Towles",
      "Anyone drawn to islands, weather, and slow revelations",
      "Book clubs that like their endings discussed, not resolved",
      "Readers who underline sentences"
    ],
    contents: [
      "Part One: The Keeper", "Part Two: The Letter", "Part Three: The Crossing", "Part Four: What the Light Was For"
    ],
    faq: [
      { q: "How long is the novel?", a: "About 236 pages: a deliberate, single-sitting-tempting read of roughly six hours." },
      { q: "Is it part of a series?", a: "No. It is a complete, standalone story." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Part One", t: "The Keeper", paras: [
        "The lamp had been officially dark for eleven years, which was, Maren felt, exactly the kind of thing officials would believe. Every evening at civil dusk she climbed the hundred and four steps with the oilcan she no longer needed and the matches she did, and by full dark the tower of Brenholm was throwing its old gold rope across the water, hand over hand, out toward the shipping lanes that had moved forty miles south the summer her brother's boat did not come home.",
        "The islanders had called her mad, back when there were islanders. Now there was only the ferry twice a month, the shop that opened when Agnes felt like it, and the grey house at the harbour where Maren mended nets for mainland fishermen who paid in envelopes and never came upstairs to ask about the light. Which was fine. Which was, in fact, the arrangement she had built her whole life around: a question no one asked, burning at the top of a tower every night, visible for nineteen miles.",
        "She was sixty-one years old. She had been keeping a decommissioned light for eleven years, and a promise for thirty-two. On the night the storm brought her the stranger, she had just replaced the second mantle and was thinking, as she thought most nights at exactly this altitude, that the sea gives back everything except what you actually asked for.",
        "The wave that put Tomas Vik on the shingle of Brenholm was, by the harbourmaster's later estimate, the seventh of a set that had no business this far east. Maren saw none of it. She saw only, in the second sweep of her illegal light, a shape on the beach that had not been there in the first."
      ]},
      { kicker: "Part One", t: "What the Sea Returns", paras: [
        "He was alive, which complicated things. The dead she knew how to receive; the island had taught her the full liturgy of that. But the man on the shingle was breathing in long ragged pulls, one hand closed so tightly around a scratched orange case that she had to prise his fingers back one by one, apologising to each of them, before she could get him onto the sledge.",
        "The case she put on the kitchen table while he slept in her brother's bed, in her brother's unworn thirty-two-year-old sweater, because some economies of grief are simply practical. She did not open it. It had a latch and a rubber seal and the particular self-importance of something meant to survive what its owner might not, and she sat across from it most of the night, drinking tea gone cold, aware that she was afraid of a plastic box and unable to laugh herself out of it.",
        "At four in the morning the stranger spoke from the doorway, in an accent she couldn't place and a voice like dragged shingle. 'You're her,' he said. 'The keeper. The one who kept it burning.' He nodded at the case as though it had introduced them. 'Then that belongs to you. I've been trying to deliver it for nine years.'"
      ]},
      { kicker: "Part Two", t: "The Letter", paras: [
        "The letter inside was dated the third of April, thirty-two years ago: four days after the Signe went down with all hands, three days after the sea had officially stopped looking, and one day before Maren had lit the lamp for the first time against every regulation in the book.",
        "It was in her brother's handwriting. It was addressed to her. And it began with the seven words that would take the rest of the novel, and the rest of her, to answer: 'If you are reading this, keep going…'"
      ]},
      { kicker: "Part Three", t: "The Crossing", paras: [
        "To finish what the letter started, Maren must do the one thing thirty-two years of keeping faith never required of her: leave the island, cross the water her brother did not, and knock on a door in a city that believes she died with the rest of Brenholm.",
        "Tomas offers to take her. His reasons, like his boat, are borrowed and patched, and the crossing will demand the truth about both."
      ]}
    ]
  },

  {
    id: "slow-cities",
    type: "book",
    title: "Slow Cities",
    subtitle: "Essays on travelling at the speed of noticing: eleven cities, unhurried.",
    category: "Travel & Lifestyle",
    price: 14,
    rating: 4.7, ratings: 129,
    pages: 198, readTime: "5 hours",
    badges: ["new"],
    cover: { c1: "#2E2A22", c2: "#15120C", acc: "#D9BE8C", motif: "arch" },
    hook: "You can cross a city in an hour, or you can let one cross you.",
    desc: [
      "The itinerary said four days for Lisbon; the writer stayed five weeks. Slow Cities is a collection of eleven essays about what happens when you stop consuming cities and start keeping them company, written against the checklist, the queue, and the photograph taken instead of the look.",
      "From a Kyoto neighbourhood at bath-time to a Mexico City market at dawn, these essays are less about where to go than how to be there. A travel book for people who suspect the point was never the landmarks."
    ],
    learn: [
      "The art of the aimless first day",
      "How to find a city's daily rhythms, and fold yourself into them",
      "Eating alone, well, and without apology",
      "What to do instead of the top ten list",
      "Coming home: how slow travel changes ordinary weeks"
    ],
    audience: [
      "Travellers burnt out on optimised itineraries",
      "Remote workers choosing cities by feel",
      "Armchair readers who want prose, not listicles",
      "Anyone planning one unhurried trip"
    ],
    contents: [
      "Lisbon, on Foot", "Kyoto at Bath-Time", "Mexico City, Before the Market Opens",
      "Naples Doesn't Care", "A Week of Viennese Coffee", "Tbilisi, Interrupted",
      "The Ferry Cities", "Marrakesh in the Off-Season", "Montevideo, Sundays",
      "Hanoi at Knee Height", "Coming Home Slowly"
    ],
    faq: [
      { q: "Is this a guidebook?", a: "No. There are no hotel picks or maps. It is a book of essays about a way of travelling, useful before any trip to anywhere." },
      { q: "Can I read the essays out of order?", a: "Absolutely. Each stands alone; the final essay is the only one best saved for last." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Essay One", t: "Lisbon, on Foot", paras: [
        "I missed the tram on purpose on the third morning, which is the exact moment the trip began. The 28 is a beautiful tram and everyone should ride it once, ideally at seven before the queue outnumbers the city. But a tram is a sentence read aloud at speed, and Lisbon is a book that wants you to move your lips.",
        "On foot, the city reorganises itself around smaller units: the tiled doorway repainted in a slightly wrong blue, the grocer who stacks oranges like a man with opinions about oranges, the laundry line that crosses four centuries of architecture without asking permission of any of them. None of this is on the itinerary. All of it is the city.",
        "By the second week I had a café where the coffee arrived without ordering, which is not a transaction; it is a minor citizenship. And I had learned Lisbon's first lesson, the one the hills teach your calves and the widows teach the afternoon: that arrival is not an event but a practice, and most of us leave three days before it happens.",
        "This is a book about staying past that point. Eleven cities, no checklists, one method: walk until the city stops performing and starts living, then keep walking."
      ]},
      { kicker: "Essay Two", t: "Kyoto at Bath-Time", paras: [
        "The guidebooks send you to Kyoto's temples at dawn, and the guidebooks are right, and that is the problem: everyone holding the same book arrives at the same silence and evaporates it together. I found my Kyoto at the opposite end of the day, at the neighbourhood sentō, where the entire street goes at seven to sit in very hot water and say almost nothing.",
        "You cannot photograph a public bath, which is precisely what saved it. Whatever a place forbids the camera, it keeps for the participants. An hour in that water taught me more about the city's actual texture than three days of shrines had: its codes of nearness and distance, its genius for shared solitude.",
        "The old man who finally spoke to me asked one question: how long was I staying? A month, I said. He nodded at the water. 'Then you have time to come back tomorrow.' It was the entire philosophy of this book, issued from a bath."
      ]},
      { kicker: "Essay Three", t: "Naples Doesn't Care", paras: [
        "Naples is the only city in this book that will not notice whether you visit, and there is a specific liberation in that. This essay is about travelling in places that refuse to perform, and about the best pizza of my life, eaten standing, watched by a dog with no interest in my enlightenment.",
        "The remaining essays cross eight more cities before the last one turns for home, and asks what all this slowness is for."
      ]}
    ]
  },

  {
    id: "thinking-with-machines",
    type: "book",
    title: "Thinking With Machines",
    subtitle: "A practical guide to working alongside intelligent tools, without losing your judgement.",
    category: "AI & Technology",
    price: 21, oldPrice: 28,
    rating: 4.8, ratings: 197,
    pages: 206, readTime: "5 hours",
    badges: ["featured", "new"],
    cover: { c1: "#20242E", c2: "#101218", acc: "#C9B283", motif: "nodes" },
    hook: "The tools are astonishing. Your judgement is still the product.",
    desc: [
      "A new class of tools can draft, summarise, code, and reason. Most advice about them swings between panic and worship. Thinking With Machines takes a third position: these are instruments, and instruments reward technique.",
      "Written for professionals rather than technologists, it covers the working methods of delegation, verification, and taste that separate people who use intelligent tools well from people who merely use them. The thesis is simple: machines are becoming excellent at answers. The leverage moves to whoever asks the better questions and edits with the better judgement."
    ],
    learn: [
      "A mental model of what these tools actually do, no math required",
      "The delegation ladder: what to hand over, what to keep",
      "Verification habits that catch confident nonsense",
      "How to keep your own skills sharpening rather than atrophying",
      "Where this is heading: a sober look past the headlines"
    ],
    audience: [
      "Professionals integrating AI tools into real work",
      "Managers deciding what these tools mean for their teams",
      "Writers, analysts, developers: anyone whose craft is thinking",
      "Sceptics and enthusiasts who both deserve better arguments"
    ],
    contents: [
      "What the Machine Is Doing", "The Delegation Ladder", "Prompting Is Editing",
      "Verification as a Habit", "Taste, the Unautomatable", "Your Skills Under Automation",
      "Teams and Tools", "The Honest Limits", "Working Futures", "A Craftsman's Position"
    ],
    faq: [
      { q: "Do I need a technical background?", a: "None. The book explains the machinery with analogies, then focuses on working methods anyone can apply." },
      { q: "Will this date quickly?", a: "The tools chapter will age; the methods of delegation, verification, and taste are designed to outlast product cycles, and the book is updated when it matters." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library, including updated editions." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Chapter One", t: "What the Machine Is Doing", paras: [
        "Every powerful tool arrives with two crowds already shouting: one insisting it changes everything, the other insisting it changes nothing real. The printing press had both. So did the spreadsheet. While the crowds argue, a third group quietly learns the tool and takes a decade's advantage. This book is for the third group.",
        "You do not need to understand the mathematics of these systems any more than a pilot needs to machine a turbine blade. You need a working model: honest about capability, honest about failure modes. Here is the one this book builds on: you are working with a brilliant, tireless, extremely well-read collaborator who has no stake in being right. The eloquence is real. The indifference is too. Every technique in the chapters ahead follows from holding both facts at once.",
        "Treat it as an oracle and you will eventually publish its mistakes under your name. Treat it as a toy and you will hand your advantage to whoever didn't. Treat it as an instrument, learn its range, its failure notes, its response to your phrasing, and something remarkable happens: it starts returning work that is better than either of you would produce alone.",
        "The difference between those outcomes is not the tool. It is technique. Technique is teachable, and that is what this book is for."
      ]},
      { kicker: "Chapter Two", t: "The Delegation Ladder", paras: [
        "The single most useful question of the next decade of knowledge work: what, exactly, should you hand over? Delegate too little and you are doing arithmetic by hand out of pride. Delegate too much and your judgement, the thing you are actually paid for, begins to quietly dissolve.",
        "This chapter builds the ladder. At the bottom: work where errors are cheap and obvious, such as formatting, first-pass summaries, and boilerplate. Hand it over completely. In the middle: drafting and analysis, delegated with review, where the machine proposes and you dispose. At the top: decisions, positions, anything with your name on it. There the machine advises; it never signs.",
        "The rungs will move as the tools improve. The ladder itself will not. Knowing which rung a task belongs to is becoming a core professional skill. It is as basic, and as revealing, as knowing what to put in an email versus a meeting."
      ]},
      { kicker: "Chapter Three", t: "Verification as a Habit", paras: [
        "The machine's most dangerous property is not that it is wrong; everything is sometimes wrong. It is that it is wrong fluently. This chapter installs the checking habits that catch confident nonsense before it ships: source-tracing, reversal tests, the two-minute sanity pass.",
        "Later chapters take up taste, skill preservation, teams, and a clear-eyed reading of where this is all going, without the panic, without the worship."
      ]}
    ]
  },

  {
    id: "the-honest-table",
    type: "book",
    title: "The Honest Table",
    subtitle: "The conversations that hold people together, and how to stop avoiding them.",
    category: "Relationships",
    price: 15,
    rating: 4.9, ratings: 168,
    pages: 156, readTime: "4 hours",
    badges: [],
    cover: { c1: "#33222A", c2: "#170D12", acc: "#DBB98E", motif: "rings" },
    hook: "Every relationship has a table. The question is what stays unsaid across it.",
    desc: [
      "Most relationships don't break loudly. They erode: one unsaid thing at a time, one changed subject, one 'it's fine' that wasn't. The Honest Table is about the conversations that reverse erosion: how to open them, survive them, and come out closer on the other side.",
      "Drawing on conflict research and long clinical practice traditions, it offers scripts without being robotic and honesty without cruelty. For partners, families, and the friendships too old to lose."
    ],
    learn: [
      "The anatomy of an avoided conversation, and its compounding cost",
      "Openers that lower defences instead of raising them",
      "How to hear hard things without leaving or exploding",
      "Repair: the skill that predicts whether relationships last",
      "When honesty needs a witness, and when it needs a pause"
    ],
    audience: [
      "Couples with a subject they steer around",
      "Adult children and parents with decades of unsaid things",
      "Friends navigating a rupture worth repairing",
      "Anyone who rehearses conversations they never have"
    ],
    contents: [
      "The Cost of Unsaid Things", "Why We Avoid", "Setting the Table",
      "Openers", "Staying in the Room", "Repair", "The Apology Chapter",
      "Boundaries Without Walls", "Tables That Keep Being Honest"
    ],
    faq: [
      { q: "Is this only for romantic relationships?", a: "No. The frameworks apply equally to family, friendship, and even working relationships. Examples are drawn from all four." },
      { q: "Is it script-based?", a: "It offers language to start from, then teaches the principles underneath so your own words can take over." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Chapter One", t: "The Cost of Unsaid Things", paras: [
        "Every relationship keeps two ledgers. The first records what happens: anniversaries, arguments, holidays, the events you could reconstruct from photographs. The second ledger is quieter. It records what almost happened: the sentence rehearsed in the car and swallowed at the door, the subject changed with practised smoothness, the 'it's fine' issued like a receipt for a transaction that never took place.",
        "The second ledger is the one that decides things. Not because the unsaid things are dramatic (most are startlingly small) but because they compound. An unsaid thing does not stay the same size. It gathers interpretations. It recruits evidence. Left long enough, it stops being a sentence and becomes a lens, and then two people are looking at the same marriage through different instruments, wondering why they can no longer describe what they see to each other.",
        "This book is about settling the second ledger: deliberately, kindly, and much earlier than feels comfortable. The work is harder than avoidance in the moment and immeasurably cheaper over a decade.",
        "We begin with why avoidance feels so rational from the inside. Because it does, and until you respect the logic of silence, you cannot argue yourself out of it."
      ]},
      { kicker: "Chapter Two", t: "Why We Avoid", paras: [
        "Nobody avoids a hard conversation out of laziness. We avoid because some part of us has run the projection and concluded the relationship cannot afford the collision, that raising the thing risks the whole structure. Avoidance is almost always loyalty, badly invested.",
        "The projection, however, is usually wrong in a specific direction: it prices the conversation at its worst possible outcome and prices the silence at zero. Silence is never zero. This chapter teaches you to price it honestly, and it introduces the distinction the whole book turns on, between conversations that are dangerous and conversations that are merely uncomfortable.",
        "Most of the ones you are avoiding are the second kind wearing the first kind's coat."
      ]},
      { kicker: "Chapter Three", t: "Setting the Table", paras: [
        "Where, when, and how a hard conversation begins predicts most of how it ends. This chapter covers the staging: timing, territory, the sentence before the sentence, and why the car and the kitchen out-perform the sit-down summit.",
        "The chapters that follow move through the conversation itself: openers, staying present, repair, apology. They end with tables that stay honest for good."
      ]}
    ]
  },

  {
    id: "night-pages",
    type: "book",
    title: "Night Pages",
    subtitle: "Nine short stories for the hour when the house goes quiet.",
    category: "Stories & Fiction",
    price: 11,
    rating: 4.6, ratings: 112,
    pages: 142, readTime: "3½ hours",
    badges: ["new"],
    cover: { c1: "#232031", c2: "#100E18", acc: "#CBB081", motif: "moon" },
    hook: "Nine stories, each the length of a late cup of tea.",
    desc: [
      "A night-shift nurse who has started receiving other people's dreams. A lighthouse converted to a bed-and-breakfast where one guest refuses to check out. A translator hired to interpret a language only two people ever spoke. Night Pages collects nine stories built for the last hour of the day: strange, humane, and quietly luminous.",
      "Each story runs 12 to 20 pages: long enough to leave somewhere, short enough to finish tonight."
    ],
    learn: [],
    audience: [
      "Readers who love Kelly Link, Ted Chiang's quieter registers, and Tove Jansson's winter books",
      "People rebuilding a bedtime reading habit",
      "Short-fiction lovers who want craft without cynicism",
      "Anyone who wants one complete thing per evening"
    ],
    contents: [
      "The Dream Ledger", "Vacancy", "The Two-Person Language", "Winter Apples",
      "The Cartographer's Daughter", "Signal", "The Borrowed Coat", "Low Tide", "Night Pages"
    ],
    faq: [
      { q: "Are the stories connected?", a: "They stand alone, though attentive readers will notice one object that travels between them." },
      { q: "What genre is this?", a: "Literary with a thin silver thread of the strange, closer to fable than fantasy." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Story One", t: "The Dream Ledger", paras: [
        "The first dream that did not belong to her arrived on a Tuesday, filed neatly between two of her own, the way a mis-sorted letter arrives in an otherwise ordinary post. Ines knew it was foreign the moment she woke: it was a dream of deep-sea fishing, and she had never seen the ocean, and the hands hauling the nets in the dream were a man's hands, scarred across the knuckles in a pattern as specific as handwriting.",
        "She was a night nurse on the geriatric ward, which meant she slept while the city worked and woke while it softened, and perhaps, she reasoned, that borderline schedule had left a window open somewhere. She started the notebook the same week, patient and unsurprised, the way she charted everything: one page per dream that wasn't hers. The scarred hands appeared four more times. Then came a dream of a wedding in a language she almost recognised, and a dream of standing in a childhood kitchen she had never stood in, straining to reach a blue tin on a high shelf.",
        "It was the blue tin that undid her calm, because three weeks later she saw it, the same tin with the same worn dent at the corner, on the bedside table of the new admission in bed nine, an old fisherman with scarred knuckles who had not woken since his stroke, and who was, according to the chart, dreaming of nothing at all.",
        "Ines sat down slowly in the visitor's chair, opened her notebook, and began, for the first time, to read someone their own dreams back."
      ]},
      { kicker: "Story Two", t: "Vacancy", paras: [
        "The lighthouse had been a bed-and-breakfast for nine years, and Mr. Aldous had been in the lamp room for all of them. He paid monthly, in advance, by cheques drawn on a bank Hedda could never quite find in any registry, and he asked for only two things: that no one else be given the lamp room, and that the light never be switched fully off, decorative though it now was, a heritage fitting on a dimmer.",
        "The story of why is the story of what Hedda finds the one night the storm cuts the power, and of what has been navigating, all these years, by a light everyone agreed was only for show."
      ]}
    ]
  },

  {
    id: "the-compound-path",
    type: "book",
    title: "The Compound Path",
    subtitle: "Patience as a strategy: investing principles for people playing the long game.",
    category: "Business & Money",
    price: 18,
    rating: 4.8, ratings: 145,
    pages: 178, readTime: "4½ hours",
    badges: [],
    cover: { c1: "#2A2E1E", c2: "#13160D", acc: "#D4BC85", motif: "steps" },
    hook: "The market rewards temperament. This book trains it.",
    desc: [
      "Everyone knows compounding is powerful. Almost no one can sit still long enough to receive it. The Compound Path is a book about the sitting still: the principles, structures, and self-knowledge that let ordinary investors capture extraordinary mathematics.",
      "It contains no stock picks and no forecasts. Instead: how markets reward patience, why your own behaviour is the main risk in your portfolio, and how to build an investing life boring enough to survive four decades. Companion to The Quiet Ledger, and readable alone."
    ],
    learn: [
      "The arithmetic of compounding, felt rather than recited",
      "Why behaviour beats selection: the evidence, plainly told",
      "Building the boring portfolio: structure over cleverness",
      "Market falls: a field guide to your own reactions",
      "The forty-year view: investing as inheritance to your future self"
    ],
    audience: [
      "Beginner and intermediate investors tired of noise",
      "Readers of The Quiet Ledger ready for the next room",
      "Anyone who checks their portfolio more than monthly",
      "Long-game players in a short-game culture"
    ],
    contents: [
      "The Eighth Wonder, Slowly", "Your Behaviour Is the Portfolio", "The Boring Portfolio",
      "Fees, the Silent Leak", "A Field Guide to Falling Markets", "Time in the Market",
      "When to Do Nothing", "The Forty-Year View"
    ],
    faq: [
      { q: "Does this recommend specific investments?", a: "No. It teaches principles and structures, then points you to the questions worth asking any provider. No tickers, no tips." },
      { q: "Do I need The Quiet Ledger first?", a: "No. This book stands alone, though the two are designed to sit well together." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Chapter One", t: "The Eighth Wonder, Slowly", paras: [
        "There is a famous illustration of compounding involving a chessboard and grains of rice: one grain on the first square, two on the second, doubling on and on until the final squares require more rice than the planet grows. It is mathematically true, universally quoted, and it has taught almost nobody anything, because the human mind files it under 'clever' rather than 'urgent'.",
        "Here is the version that changes behaviour. Two people begin working at twenty-five. The first invests steadily for ten years and then, life happening, never adds another unit. The second waits those same ten years, then invests the identical amount every year for thirty. The first person, who stopped, very often ends with more. Not because of skill. Because their money was in the room a decade earlier, and in compounding, being early is a bigger advantage than being clever, disciplined, or even rich.",
        "Every useful investing behaviour follows from actually believing that paragraph: not admiring it, believing it, the way you believe in gravity when standing near an edge. The rest of this book is an attempt to move compounding from the part of your mind that admires ideas to the part that flinches near edges.",
        "We start with the only variable that is fully yours: your own behaviour."
      ]},
      { kicker: "Chapter Two", t: "Your Behaviour Is the Portfolio", paras: [
        "Decades of investor-return studies converge on an awkward finding: the average investor reliably underperforms the average investment, often by more than fees and inflation combined. The gap has a single cause: buying after rises and selling after falls, at the exact moments feeling and wisdom point in opposite directions.",
        "This chapter is a guided tour of your own likely mistakes: loss aversion, recency, the itch to act. The aim is not to shame them but to design around them. You cannot remove the flinch. You can build a portfolio the flinch cannot reach."
      ]}
    ]
  },

  {
    id: "the-atlas-of-small-habits",
    type: "book",
    title: "The Atlas of Small Habits",
    subtitle: "Field notes on the tiny behaviours that quietly run your life.",
    category: "Self-Improvement",
    price: 16, oldPrice: 22,
    rating: 4.7, ratings: 203,
    pages: 188, readTime: "4½ hours",
    badges: ["bestseller"],
    cover: { c1: "#2C2620", c2: "#14100B", acc: "#DFC793", motif: "compass" },
    hook: "You don't decide your days. Your defaults do.",
    desc: [
      "For every visible decision you make, a hundred invisible defaults fire: where your keys live, what happens after you sit down, the first app your thumb finds. The Atlas of Small Habits maps that hidden terrain and shows you how to redraw it.",
      "Organised as an atlas, with territories of morning, work, evening, and relationships, it treats habit change as cartography rather than combat. Small map edits, compounding daily."
    ],
    learn: [
      "The default audit: surfacing behaviours you've never once chosen",
      "Placement theory: why where beats willpower",
      "Keystone defaults: the handful that reorganise everything around them",
      "Breaking loops kindly: friction as an ally",
      "Redrawing shared maps in households and teams"
    ],
    audience: [
      "Anyone who has read the big habit books and wants finer tools",
      "People whose environments quietly work against them",
      "Household-builders wanting shared systems without nagging",
      "Fans of practical, essayistic non-fiction"
    ],
    contents: [
      "Terra Incognita: The Default Audit", "Placement Theory", "The Morning Territory",
      "The Desk Territory", "The Evening Territory", "Loops and How They Close",
      "Keystone Defaults", "Shared Maps", "Redrawing Season by Season"
    ],
    faq: [
      { q: "How is this different from Atomic Habits?", a: "It is narrower and deeper: entirely about defaults and environment, treated with an essayist's eye. It complements the classics rather than repeating them." },
      { q: "Is there a workbook element?", a: "Each territory ends with a one-page mapping exercise. The companion Daily Review notebook pairs well but is not required." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Territory One", t: "Terra Incognita: The Default Audit", paras: [
        "Ask someone to describe their day and they will narrate their decisions: chose the salad, called the client, went to the gym. Watch the same day on film and you will see something else: a river of unchosen movements, hundreds of them, flowing around a handful of actual choices like water around stones. The phone lifted forty-one times, not once deliberately. The route walked identically. The snack eaten in the same chair, at the same minute, with the same absence of anyone deciding anything.",
        "None of this is failure. Defaults are the mind's compression algorithm; without them you could not survive a supermarket. But here is the cartographer's question this book turns on: who drew your map? Some defaults you laid down deliberately, years ago, for reasons that still hold. Others were drawn by app designers, supermarket planners, old flatmates, and a version of you that no longer exists, and you are still walking their routes daily, in your own life, like a tenant.",
        "The default audit is how we begin. For two ordinary days you will do nothing differently. You will only notice, and note, the moments where behaviour happened without a decision. Readers consistently report the same reaction, somewhere around the thirtieth entry: I had no idea anyone was driving.",
        "Then, territory by territory, we take the pen back."
      ]},
      { kicker: "Territory Two", t: "Placement Theory", paras: [
        "The most reliable finding in behaviour research is embarrassingly physical: distance changes behaviour more than desire does. Fruit at eye level gets eaten. The guitar in the case stays in the case. Your environment is a ballot, and every placement is a vote cast daily on your behalf.",
        "This chapter turns placement into a method: the thirty-second rule, sight-line design, the one-move principle. It then applies these to the objects that currently place you."
      ]}
    ]
  },

  /* ---------------- TEMPLATES ---------------- */
  {
    id: "founders-operating-system",
    type: "template",
    title: "The Founder's Operating System",
    subtitle: "A complete Notion workspace for running an early-stage business, from strategy to Monday morning.",
    category: "Business & Money",
    price: 29, oldPrice: 39,
    rating: 4.9, ratings: 87,
    pages: 40, readTime: "30-min setup",
    badges: ["featured", "bestseller"],
    cover: { c1: "#1F2A2E", c2: "#0E1416", acc: "#CBB689", motif: "grid" },
    hook: "The structure your business was improvising toward.",
    desc: [
      "Every early business runs an operating system; most run one made of loose tabs, half-remembered priorities, and a notes app with trust issues. The Founder's Operating System replaces improvisation with structure: a linked Notion workspace covering strategy, quarterly goals, weekly cadence, projects, pipeline, and decisions.",
      "Built lean on purpose (twelve linked views, not two hundred) and delivered with a 40-page field manual explaining not just how each board works, but why it exists. Duplicate it, and Monday knows what it's for."
    ],
    learn: [
      "One-page strategy view that everything else references",
      "Quarterly goals wired to weekly priorities automatically",
      "Project and pipeline boards with sane, minimal statuses",
      "A decision log, the tool founders wish they'd started years earlier",
      "The weekly review dashboard that runs the whole system"
    ],
    audience: [
      "Solo founders and 2 to 10 person teams",
      "Freelancers becoming studios",
      "Side-project builders ready for structure",
      "Anyone whose business lives in seventeen tabs"
    ],
    contents: [
      "Strategy Page", "Quarterly Goals Board", "Weekly Cadence Dashboard", "Projects Board",
      "Pipeline / CRM", "Decision Log", "Meeting Notes System", "Metrics Page",
      "SOP Library", "Field Manual (40 pages)"
    ],
    faq: [
      { q: "What do I need to use this?", a: "A free Notion account. Duplicate the workspace with one click, then follow the 30-minute setup chapter in the field manual." },
      { q: "Is it customisable?", a: "Fully. It is a normal Notion workspace you own. The manual marks which structures to keep and where to safely improvise." },
      { q: "Do I get updates?", a: "Yes. When the template is refined, updated versions appear in your Zokario library at no extra cost." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Field Manual · Introduction", t: "Why Your Business Needs an Operating System", paras: [
        "Ask a founder what their strategy is and you will usually get a good answer. Ask where that strategy lives, where it physically exists in a place that Monday morning consults, and you get a pause. In most early businesses, strategy lives in the founder's head, goals live in an old slide deck, projects live in chat threads, and the week is run by whoever emailed most recently. Each piece is fine. The absence of connection between them is what exhausts you.",
        "An operating system, in the sense this template uses the word, is just that connection: a small set of linked structures where strategy points to goals, goals point to this quarter, this quarter points to this week, and this week points to today. Nothing exotic. The magic is not in any board; it is in the pointing.",
        "This manual walks you through each piece in the order you should adopt them, one per day for a working week. Resist the urge to set up everything at once; systems adopted in an afternoon are abandoned in a fortnight. By Friday you will have something most companies ten times your size do not: a business you can see.",
        "The preview ends here. The full manual continues with the Strategy Page setup, the goals cascade, and the weekly review that holds it all together."
      ]}
    ]
  },

  {
    id: "content-engine",
    type: "template",
    title: "Content Engine",
    subtitle: "A publishing pipeline for consistent creators: plan, produce, repurpose, without the chaos.",
    category: "Productivity",
    price: 24,
    rating: 4.8, ratings: 64,
    pages: 32, readTime: "25-min setup",
    badges: ["new"],
    cover: { c1: "#2E2418", c2: "#16100A", acc: "#DDBE7F", motif: "spokes" },
    hook: "Consistency isn't a personality trait. It's a pipeline.",
    desc: [
      "The creators who publish every week are not more disciplined than you; they are better plumbed. Content Engine is a Notion pipeline that turns ideas into published work through five honest stages: capture, develop, produce, publish, repurpose.",
      "It includes the idea bank, an editorial calendar, per-platform checklists, and the repurposing matrix that turns one strong idea into five formats. The included manual covers the workflow plus the editorial habits that keep engines running."
    ],
    learn: [
      "An idea bank that captures without becoming a graveyard",
      "The five-stage pipeline from spark to published",
      "Editorial calendar with realistic cadence design",
      "The repurposing matrix: one idea, five outputs",
      "Weekly editorial review in fifteen minutes"
    ],
    audience: [
      "Writers, YouTubers, podcasters publishing (or meaning to) weekly",
      "Small brands running their own content",
      "Freelancers marketing through expertise",
      "Anyone with 200 ideas and 3 published pieces"
    ],
    contents: [
      "Idea Bank", "Development Board", "Editorial Calendar", "Production Checklists",
      "Platform Templates", "Repurposing Matrix", "Analytics Page", "Editorial Manual (32 pages)"
    ],
    faq: [
      { q: "Which platforms does it cover?", a: "The pipeline is platform-agnostic; included checklists cover newsletters, YouTube, podcasts, and short-form social." },
      { q: "Notion only?", a: "Yes, the template is Notion-based. The manual's workflow principles transfer to any tool." },
      { q: "Do I get updates?", a: "Updated versions appear in your Zokario library automatically." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Manual · Introduction", t: "Consistency Is Plumbing", paras: [
        "Every creator you admire for their consistency has been asked the same question (how do you do it?) and has given some version of the same unhelpful answer: I just sit down and do the work. It is unhelpful because it is incomplete. Watch them closely and you will find, behind the discipline, a structure so boring nobody thinks to mention it: a place ideas go, a place drafts live, a day things ship, a way one piece becomes five.",
        "Discipline without plumbing produces the pattern you already know: heroic bursts, quiet collapses, the relaunch post. Plumbing without discipline produces nothing at all, but that failure is rarer than you'd think, because pipelines have a strange effect on the people who own them. An idea sitting in a development stage asks to be finished in a way a note in your phone never will.",
        "This engine has five stages, and the manual's first rule is that ideas only move forward: no idea skips from capture to production on a wave of enthusiasm, because enthusiasm is precisely the unreliable input the system exists to replace.",
        "The preview ends here. The full manual continues with the idea bank setup and the cadence design chapter, where you'll choose a publishing rhythm you can actually keep."
      ]}
    ]
  },

  {
    id: "job-search-vault",
    type: "template",
    title: "The Job Search Vault",
    subtitle: "Run your search like a campaign: tracker, scripts, and interview preparation in one system.",
    category: "Self-Improvement",
    price: 19,
    rating: 4.7, ratings: 52,
    pages: 36, readTime: "20-min setup",
    badges: [],
    cover: { c1: "#26222E", c2: "#110F16", acc: "#C9B283", motif: "vault" },
    hook: "A job search is a project. Manage it like one.",
    desc: [
      "Job searching is one of the highest-stakes projects most people ever run, and most run it from a downloads folder and dread. The Job Search Vault is a complete campaign system: application pipeline, company research dossiers, outreach scripts, interview prep sheets, and offer comparison tools.",
      "The included manual covers the strategy layer: positioning, the narrow search, and negotiation fundamentals, all of it calm, practical, and free of hustle-culture noise."
    ],
    learn: [
      "Pipeline tracking that turns rejection into iteration data",
      "Research dossiers that make interviews conversations",
      "Outreach scripts that read like a person, not a funnel",
      "The interview prep sheet: stories, questions, logistics",
      "Offer comparison beyond the salary number"
    ],
    audience: [
      "Active job seekers at any level",
      "Quiet-market candidates who prefer precision to spray",
      "Career changers needing narrative structure",
      "New graduates running a first real search"
    ],
    contents: [
      "Application Pipeline", "Company Dossiers", "Outreach Scripts", "Interview Prep Sheets",
      "Story Bank (STAR)", "Offer Comparison Tool", "Reference Tracker", "Strategy Manual (36 pages)"
    ],
    faq: [
      { q: "Does it work for any industry?", a: "Yes. The system is industry-agnostic. Example dossiers cover tech, design, finance, and healthcare." },
      { q: "What tool does it run in?", a: "Notion (free plan is enough). Scripts and prep sheets are also included as printable PDFs." },
      { q: "Do I get updates?", a: "Updated versions appear in your Zokario library automatically." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Manual · Introduction", t: "The Search Is a Project", paras: [
        "Nobody would run a product launch from memory, out of a downloads folder, with no record of what was tried or what came back. Yet this is how most people run the project that determines where they will spend two thousand hours a year. The result is predictable: effort without iteration. Twenty applications vanish, and because nothing was tracked, the twenty-first is identical.",
        "Treating the search as a project changes the emotional physics before it changes the outcomes. A rejection stops being a verdict and becomes a data point in a pipeline you own. Follow-ups stop being awkward because they are scheduled. And the interview stops being an exam, because the dossier means you walk in knowing more about the company's last two years than half the panel.",
        "The vault has seven rooms, and the manual opens each in sequence. But the first chapter is about aim: the narrow search, and why applying to fewer roles, better, outperforms volume everywhere except in your anxiety, which was never a good adviser anyway.",
        "The preview ends here. The full manual continues with positioning and the pipeline setup."
      ]}
    ]
  },

  /* ---------------- NOTEBOOKS ---------------- */
  {
    id: "the-daily-review",
    type: "notebook",
    title: "The Daily Review",
    subtitle: "A five-minute evening notebook: one page a day, digital and printable.",
    category: "Productivity",
    price: 13,
    rating: 4.8, ratings: 91,
    pages: 190, readTime: "5 min daily",
    badges: ["featured"],
    cover: { c1: "#2A2117", c2: "#141009", acc: "#E4CFA3", motif: "check" },
    hook: "The day happened. Five minutes decides what it meant.",
    desc: [
      "The Daily Review is a beautifully typeset notebook built around one evening page: three prompts, one line of gratitude, tomorrow's heading. Nothing that takes more than five minutes; nothing you will dread by Thursday.",
      "Delivered as a hyperlinked PDF for tablets (GoodNotes, Notability, and similar) and a printable edition, with monthly dividers, review spreads, and a design calm enough to end days inside: 190 pages, six months of evenings."
    ],
    learn: [
      "The three-prompt evening page: went well, got hard, learned",
      "Tomorrow's heading: one sentence that starts the next day early",
      "Monthly review spreads that compound the daily pages",
      "Hyperlinked navigation for effortless tablet use",
      "A rhythm gentle enough to actually keep"
    ],
    audience: [
      "Tablet journalers (GoodNotes, Notability, Xodo)",
      "People who abandon elaborate journals by February",
      "Fans of The Morning Architecture and Atlas of Small Habits",
      "Anyone who wants a bookend for the day"
    ],
    contents: [
      "How to Use This Notebook", "6 × Monthly Dividers", "180 × Daily Pages",
      "6 × Monthly Review Spreads", "Year Compass Page", "Printable Edition"
    ],
    faq: [
      { q: "Which apps does it work with?", a: "Any PDF annotation app (GoodNotes, Notability, Xodo, Flexcil), plus a printable A5/Letter edition for paper people." },
      { q: "Is it dated?", a: "Undated. Start any day, skip without guilt, and the notebook never expires." },
      { q: "Apple Pencil required?", a: "Any stylus works, as does typing in apps that support text boxes. Or a pen, on the printed edition." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Opening Pages", t: "How to Use This Notebook", paras: [
        "This notebook makes one promise: five minutes, at the end of the day, and no page will ever ask more of you than that. It is built on the observation that most journaling practices fail not from lack of depth but from excess of it: the blank page demands an essay, the essay demands energy, and by Thursday the notebook has joined its ancestors in the drawer.",
        "The daily page asks three things. What went well: one to three lines, and yes, small counts. What got hard: named plainly, because named things shrink. What you learned: about the work, the people, or yourself, and 'nothing today' is an honest entry. Beneath them, one line of gratitude and one sentence for tomorrow: the heading your next morning will be glad to find.",
        "Write badly. Write in fragments. The page does not grade. Its entire function is to place a small full stop at the end of the day, so the day stops running in the background all night.",
        "The preview ends here. The full notebook contains 180 daily pages, monthly dividers and review spreads, the year compass, and the printable edition."
      ]}
    ]
  },

  {
    id: "the-reading-log",
    type: "notebook",
    title: "The Reading Log",
    subtitle: "A reader's notebook for capturing books before they evaporate.",
    category: "Self-Improvement",
    price: 9,
    rating: 4.7, ratings: 58,
    badges: [],
    pages: 120, readTime: "Per book",
    cover: { c1: "#20282E", c2: "#0E1316", acc: "#D9BE8C", motif: "bookmark" },
    hook: "You read the book. Keep what it gave you.",
    desc: [
      "A month after finishing most books, we retain a mood and two anecdotes. The Reading Log is a notebook designed to interrupt that evaporation: per-book spreads for passages, arguments, disagreements, and the one-paragraph review future-you will actually reread.",
      "Includes an annual reading map, a to-read pipeline with honest priorities, and quote index pages, delivered as a hyperlinked tablet PDF and printable edition. Room for sixty books; enough for two ambitious years."
    ],
    learn: [
      "The per-book spread: capture while reading, distil after",
      "Writing the one-paragraph review that beats a rating",
      "Quote indexing you'll actually consult",
      "The to-read pipeline: priorities over piles",
      "An annual map of your reading life"
    ],
    audience: [
      "Readers of 10 to 60 books a year",
      "Note-takers who underline and then lose the underlines",
      "Book club members who want receipts",
      "Anyone rebuilding a reading habit with intent"
    ],
    contents: [
      "How to Log a Book", "60 × Book Spreads", "Quote Index", "To-Read Pipeline",
      "Annual Reading Map", "Printable Edition"
    ],
    faq: [
      { q: "How many books does it hold?", a: "Sixty full spreads. Many readers use one file per year or two." },
      { q: "Digital, paper, or both?", a: "Both. A hyperlinked PDF for tablets and a printable edition are included in one purchase." },
      { q: "Is it dated?", a: "Undated and unjudging. Log every book or one a season." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Opening Pages", t: "How to Log a Book", paras: [
        "There is a particular grief every serious reader knows: the brilliant book, read a year ago, that survives in memory only as a colour and a feeling of having been changed. The change may even be real. But the argument that caused it, the passages and turns and objections you raised at two a.m., has evaporated, and with it your ability to give the book away to anyone else.",
        "Logging is not homework; done right, it is the opposite of homework. While reading, you keep the spread beside you and feed it scraps: a page number, a phrase, a protest. No sentences required. The distillation happens after the last page, in ten minutes, while the book is still warm. You write the argument in your own words, the strongest passage, the honest disagreement, and the one-paragraph review addressed to the only critic who matters: you, in five years.",
        "Sixty spreads await. The first book you log will feel like admin. The third will feel like conversation. By the tenth, you will wonder how you ever let the others evaporate.",
        "The preview ends here. The full notebook includes all book spreads, the quote index, the pipeline, the annual map, and the printable edition."
      ]}
    ]
  },

  {
    id: "ninety-day-focus-planner",
    type: "notebook",
    title: "The 90-Day Focus Planner",
    subtitle: "One quarter, one aim: a planning notebook for finishing what matters.",
    category: "Productivity",
    price: 15, oldPrice: 19,
    rating: 4.9, ratings: 74,
    pages: 210, readTime: "Weekly rhythm",
    badges: ["bestseller"],
    cover: { c1: "#302020", c2: "#170D0D", acc: "#DDBE7F", motif: "quarter" },
    hook: "A year is too long to steer. Ninety days is a voyage.",
    desc: [
      "New Year's plans die of distance: December cannot see February clearly, let alone October. The 90-Day Focus Planner works at the range where planning actually functions: one quarter, one primary aim, thirteen weekly reviews, and daily pages that keep the aim in peripheral vision.",
      "Built as a hyperlinked tablet PDF with printable edition: quarter-setting spreads, weekly plan/review pairs, ninety daily pages, and a closing retrospective that sets up the next voyage. Undated: begin any Monday."
    ],
    learn: [
      "Choosing one primary aim, and surviving the fear of choosing",
      "The weekly plan/review pair that keeps quarters honest",
      "Daily pages with the aim in peripheral vision",
      "Mid-quarter correction without mid-quarter collapse",
      "The retrospective that makes the next 90 days sharper"
    ],
    audience: [
      "Builders with a project that keeps not-happening",
      "Goal-setters tired of annual resolutions",
      "Freelancers and founders pacing real work",
      "Users of The Daily Review ready for a steering layer"
    ],
    contents: [
      "The One Aim Method", "Quarter-Setting Spreads", "13 × Weekly Plan + Review",
      "90 × Daily Pages", "Mid-Quarter Correction Spread", "Closing Retrospective", "Printable Edition"
    ],
    faq: [
      { q: "Can I run more than one goal?", a: "The system enforces one primary aim, with a small 'meanwhile' list for maintenance goals. That constraint is the product." },
      { q: "Is it dated?", a: "Undated. Start any Monday. Miss a week and the planner simply continues; no guilt-inducing empty dates." },
      { q: "Digital or printable?", a: "Both editions are included: hyperlinked PDF for tablets and printable A5/Letter." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Opening Pages", t: "The One Aim Method", paras: [
        "Every January, millions of intelligent people write down seven goals, and by March the seven have quietly negotiated themselves down to zero. The failure is not ambition; it is arithmetic. Seven goals across ninety usable days is under two weeks of attention each: enough to start anything, enough to finish nothing.",
        "This planner enforces a different arithmetic: one primary aim per quarter. Not one project but one aim, the single sentence that, if true in ninety days, would make this quarter unmistakably worth it. Everything else goes on the 'meanwhile' list, where maintenance lives: the gym you keep attending, the inbox you keep answering. Meanwhile items get systems. The aim gets you.",
        "Choosing one aim is frightening in a way seven goals never are, because one aim can visibly fail. That fear is worth examining on paper, and the quarter-setting spread will make you do exactly that, because a goal that cannot fail was never a goal, only a decoration.",
        "The preview ends here. The full planner contains the quarter-setting spreads, thirteen weekly pairs, ninety daily pages, and the retrospective."
      ]}
    ]
  }
,

  /* ---------------- ARABIC & FRENCH SHELVES ---------------- */
  {
    "id": "rasail-muntasaf-al-layl",
    "type": "book",
    "lang": "ar",
    "title": "رسائل منتصف الليل",
    "subtitle": "حارس ليل يكتب إلى قارئ لا يعرفه، عن الكتب المفتوحة والمدن بعد أن تنام.",
    "category": "Stories & Fiction",
    "price": 11,
    "rating": 4.9,
    "ratings": 132,
    "pages": 168,
    "readTime": "4 ساعات",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#25202E",
      "c2": "#100E16",
      "acc": "#D8C08B",
      "motif": "moon"
    },
    "hook": "من يترك الكتب مفتوحة في مكتبة تطفأ أنوارها كل ليلة؟",
    "desc": [
      "في مكتبة عريقة تنام في قلب المدينة، يبدأ الحارس الليلي جولته المعتادة بين الرفوف، فيجد كتابا مفتوحا على صفحة بعينها، وتحت السطر الأخير خط رفيع بقلم رصاص. في الليلة التالية كتاب آخر، وصفحة أخرى، وإشارة لا يفهمها. هكذا تبدأ المراسلة الأغرب: رسائل قصيرة يتركها الحارس بين الصفحات لقارئ مجهول لا يظهر أبدا، لكنه يجيب دائما بطريقته الخاصة، كتابا مفتوحا يقول ما لا تقوله الكلمات.",
      "هذا الكتاب أدب رسائل بنفس حكائي رقيق، وتأمل هادئ في القراءة بوصفها صداقة بين غرباء، وفي الوحدة حين تصير مسكونة بالكتب، وفي المدن بعد أن تنام وتصفو أصواتها. لغة فصيحة دافئة لا تتكلف، ورسائل قصيرة تقرأ واحدة في الليلة أو دفعة واحدة حتى الفجر. وبين رسالة وأخرى تتكشف حكاية صغيرة لا ترفع صوتها، عن وحشة الحارس وسر القارئ الغائب. كتاب لمن يعرف أن بعض أجمل المحادثات تجري بين شخصين لم يلتقيا قط."
    ],
    "learn": [
      "حكاية كاملة تروى على مهل عبر رسائل قصيرة، من أول خيط إلى آخر مفاجأة",
      "تأملات صافية في القراءة: لماذا نفتح الكتب، وماذا تفعل بنا الصفحات التي تترك مفتوحة",
      "بورتريه حميم للمدينة بعد منتصف الليل، بشوارعها الخالية ونوافذها القليلة المضيئة",
      "لغة عربية فصيحة دافئة بلا تكلف، تصلح للقراءة بصوت عال قبل النوم",
      "خاتمة تعيد ترتيب الحكاية كلها، وتجعل العودة إلى الرسائل الأولى قراءة جديدة"
    ],
    "audience": [
      "عشاق أدب الرسائل والحكايات الهادئة التي تروى همسا",
      "قراء الليل الذين يعرفون سحر المكتبات بعد أن تغلق أبوابها",
      "من يبحث عن نص عربي فصيح يقرأ على مهل، رسالة كل ليلة",
      "كل من راسل غريبا يوما، أو تمنى لو فعل"
    ],
    "faq": [
      {
        "q": "بأي صيغة يصلني الكتاب؟",
        "a": "فور إتمام الشراء تصلك نسختان بصيغتي PDF وePub، تقرأهما على أي جهاز أو تطبيق قراءة تفضله."
      },
      {
        "q": "هل أستطيع القراءة دون تحميل ملفات؟",
        "a": "نعم، الكتاب متاح كاملا في القارئ الإلكتروني على موقعنا، فتتابع الرسائل من متصفحك أينما كنت وتحفظ صفحتك تلقائيا."
      },
      {
        "q": "هل أحصل على الطبعات المنقحة لاحقا؟",
        "a": "كل تحديث أو طبعة منقحة تصلك مجانا مدى الحياة، وتجدها في مكتبتك دون أي خطوة إضافية."
      }
    ],
    "contents": ["الرسالة الأولى: إلى من يترك الكتب مفتوحة","الرسالة الثانية: عن الرفوف العليا","الرسالة الثالثة: قارئة الساعة الثالثة","الرسالة الرابعة: الكتاب الذي لم يعد","الرسالة الخامسة: نافذة تضاء في الجهة الأخرى","الرسالة السادسة: عن الغبار والذاكرة","الرسالة السابعة: ليلة انقطاع الكهرباء","الرسالة الثامنة: الاسم على بطاقة الاستعارة","الرسالة الأخيرة: الفجر"],
    "previewCount": 1,
    "chapters": [
      {
        "kicker": "الرسالة الأولى",
        "t": "إلى من يترك الكتب مفتوحة",
        "paras": [
          "سيدي، أو سيدتي، أو أيا كان الاسم الذي تحمله حين يحملك الليل إلى هنا: أكتب إليك من الطاولة الطويلة قرب النافذة الغربية، حيث يبقي مصباح الحراسة دائرة صغيرة من الضوء لا تتجاوز حجم كتاب. أنا الحارس الليلي لهذه المكتبة منذ أحد عشر عاما، وأعرف أصواتها كما يعرف الطبيب نبض مريضه: أنين الخشب حين يبرد، وتنهيدة الساعة الجدارية في القاعة الشرقية، وخطوات القطط على السطح. لكنني منذ شهر أسمع صوتا جديدا لا أعرفه؛ صوت ورقة تقلب في مكان ما، ثم صمت. وفي الصباح أجد ما تتركه لي: كتابا مفتوحا على صفحة بعينها، كأنه رسالة.",
          "أول مرة ظننتها مصادفة: كتاب رحلات قديم على الطاولة نفسها، مفتوح على وصف مدينة ساحلية لم أسمع بها، وتحت سطر واحد خط رفيع بقلم رصاص: «المدن التي لا يزورها أحد تنتظر أيضا». أعدته إلى رفه وواصلت جولتي، وقلت لنفسي إن قارئا نهاريا نسيه. لكن في الليلة التالية وجدت ديوانا مفتوحا على قصيدة عن النوافذ المضاءة، وبعدها كتاب فلك مفتوحا على خريطة الوجه المظلم من القمر. عشرون ليلة وعشرون كتابا، ولا أثر لك: لا باب فتح، ولا نافذة كسرت، ولا صورة على شاشات الكاميرات إلا الرفوف واقفة في عتمتها كأشجار شتوية. لو كنت لصا لكنت أغرب لص في التاريخ: لا تأخذ شيئا، بل تترك.",
          "كان يجب أن أبلغ الإدارة، أعرف. لكن قل لي: كيف أشرح لهم أن أحدا يقتحم المكتبة كل ليلة ليقرأ؟ سيغيرون الأقفال، ويضاعفون الكاميرات، وينتهي كل شيء. والحقيقة التي أعترف بها لك وحدك أنني لم أعد أحتمل انتهاء أي شيء. المدينة بعد منتصف الليل تشبه بيتا كبيرا نام أهله ونسوا مصباحا مضاء؛ وأنا ذلك المصباح منذ أحد عشر عاما. أمشي بين الرفوف فأسمع نداء آلاف الكتب التي لم يفتحها أحد منذ سنين، وأفكر في كتابها الذين ظنوا أنهم يكلمون المستقبل. ثم جئت أنت، تفتح واحدا منها كل ليلة، فتشعر المكتبة كلها، وأنا معها، بأن أحدا في هذا العالم ما زال يصغي.",
          "لذلك سأترك هذه الرسالة حيث تعرف أن تجد: بين صفحتي مئة وأربعين ومئة وإحدى وأربعين من كتاب الرحلات ذاته، عند وصف المدينة التي تنتظر. لن أطلب اسمك، ولن أراقب الممرات، ولن أرفع عيني عن كتابي إن سمعت حفيف خطاك؛ فبعض الصداقات لا تحتمل الضوء الكامل. فقط أجب بالطريقة التي تجيد: افتح لي كتابا. وسأنتظر كما تنتظر المدن التي لا يزورها أحد: بلا عجلة، وبنافذة واحدة مضاءة. عند هذا الحد تنتهي المعاينة المجانية؛ وفي النسخة الكاملة تتوالى الرسائل ليلة بعد ليلة، ويبدأ القارئ المجهول في الرد بطرق لم يتوقعها الحارس، حتى تتكشف حكاية عن المكتبة وسر قديم بين رفوفها."
        ]
      }
    ]
  },

  {
    "id": "fann-al-julus-maa-al-nafs",
    "type": "book",
    "lang": "ar",
    "title": "فن الجلوس مع النفس",
    "subtitle": "دعوة هادئة إلى عشر دقائق من الخلوة الصادقة، بعيدا عن الشاشات وضجيج التحسين.",
    "category": "Self-Improvement",
    "price": 14,
    "rating": 4.8,
    "ratings": 98,
    "pages": 152,
    "readTime": "4 ساعات",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#2E2418",
      "c2": "#171008",
      "acc": "#E0CBA0",
      "motif": "rings"
    },
    "hook": "عشر دقائق في اليوم، بلا شاشة، بلا تبرير، بلا أحد سواك.",
    "desc": [
      "في زمن صار فيه الانشغال وساما، يقترح هذا الكتاب فعلا صغيرا يكاد يكون منسيا: أن تجلس مع نفسك عشر دقائق كل يوم، بلا هاتف، ولا مهمة، ولا نية تحسين. لا يعدك «فن الجلوس مع النفس» بحياة جديدة خلال أسبوع، ولا يمنحك قائمة عادات لتطاردها؛ إنما يعيد إليك عادة أقدم من كل ذلك: أن تكون حاضرا حيث أنت، وأن تسمع ما يقوله داخلك حين يهدأ الخارج.",
      "على امتداد فصوله، يمضي الكتاب بخطوات عملية هادئة: كيف تبدأ، وكيف تصمد أمام الملل الأول، وماذا تفعل حين تصعد الأفكار المزعجة التي طالما هربت منها. لغته فصيحة معاصرة، ونبرته نبرة صديق لا مدرب، وتمارينه قليلة مقصودة، تنجز في دقائق ولا تحتاج إلى شيء سوى كرسي ونافذة وصدق. كتاب صغير الحجم، لكنه يفتح في اليوم مساحة كانت مغلقة منذ سنوات، وتتسع كلما عدت إليها."
    ],
    "learn": [
      "كيف تقتطع عشر دقائق يومية للخلوة الصادقة، وتحميها من زحام الجدول.",
      "طريقة عملية للجلوس بلا شاشة ولا مشتت، من الدقيقة الأولى إلى الأخيرة.",
      "كيف تستقبل الأفكار المزعجة دون أن تحاكمها أو تهرب منها.",
      "الفرق بين الانتباه الحقيقي وضجيج التطوير الذاتي وشعاراته الصاخبة.",
      "كيف تحول الخلوة القصيرة إلى عادة تدوم، بلا تشدد ولا جلد للذات."
    ],
    "audience": [
      "من أرهقته كتب التطوير الذاتي ووعودها الصاخبة.",
      "المنشغلون الذين لا يجدون في يومهم دقيقة صمت واحدة.",
      "من يشعر أنه يعرف الجميع ولا يكاد يعرف نفسه.",
      "الباحثون عن ممارسة تأمل بسيطة بلغة عربية رصينة، بلا طقوس معقدة."
    ],
    "faq": [
      {
        "q": "بأي صيغة أحصل على الكتاب بعد الشراء؟",
        "a": "يصلك الكتاب فور إتمام الشراء بصيغتي PDF وePub معا، لتقرأه على أي جهاز تفضله."
      },
      {
        "q": "هل أحتاج إلى تحميل الملفات لأبدأ القراءة؟",
        "a": "لا؛ يمكنك البدء فورا عبر القارئ الإلكتروني على موقعنا، وتبقى نسختا التحميل متاحتين لك في أي وقت."
      },
      {
        "q": "ماذا لو صدرت طبعة منقحة من الكتاب لاحقا؟",
        "a": "كل التحديثات والطبعات المنقحة تصلك مجانا مدى الحياة، دون أي رسوم إضافية."
      }
    ],
    "contents": ["الفصل الأول: الغرفة التي لا تدخلها","الفصل الثاني: عشر دقائق","الفصل الثالث: ضجيج التحسين","الفصل الرابع: الملل باب لا عدو","الفصل الخامس: ما يصعد حين تهدأ","الفصل السادس: الجسد يجلس أولا","الفصل السابع: خلوة وسط الزحام","الفصل الثامن: دفتر الجلسات","خاتمة: صداقة طويلة مع النفس"],
    "previewCount": 1,
    "chapters": [
      {
        "kicker": "الفصل الأول",
        "t": "الغرفة التي لا تدخلها",
        "paras": [
          "في البيت الذي تسكنه غرفة لا تدخلها. تمر بها كل يوم، تلمح بابها من طرف عينك، ثم تسرع الخطى كأن في الداخل شيئا يؤجل. تلك الغرفة هي أنت. نحن نقضي العمر في زيارة الآخرين: نطرق أبوابهم، نجيب رسائلهم، نحفظ مواعيدهم وأسماء أطفالهم، ونعود آخر الليل إلى أنفسنا كما يعود مسافر إلى فندق: ننام في المكان ولا نعرفه. لست بحاجة إلى رحلة بعيدة لتلتقي نفسك، ولا إلى معتكف في جبل، ولا إلى معلم يبيعك الطمأنينة في عبوات. تحتاج إلى كرسي، وإلى عشر دقائق، وإلى قرار صغير يشبه فتح نافذة في غرفة مغلقة منذ سنوات: أن تجلس، فقط، ولا تفعل شيئا آخر.",
          "ستكتشف في الدقيقة الأولى أن الجلوس أصعب مما يبدو. اليد تبحث عن الهاتف كما يبحث المدخن عن سيجارته، والذهن يقترح عليك أعمالا عاجلة لم تكن عاجلة قبل لحظة. هذا طبيعي؛ فأنت تفطم نفسك عن ضجيج طالما ظننته حياة. لا تقاوم ولا تؤنب. اجلس حيث يصلك ضوء النهار إن أمكن، وضع الهاتف في غرفة أخرى لا في جيبك، ودع يديك فارغتين. لست هنا لتتأمل تأملا عظيما، ولا لتصل إلى صفاء تحدث به الناس. أنت هنا لتشهد فقط: هذا قلبي يخفق، هذا نفسي يدخل ويخرج، هذه أفكاري تعبر كسحاب لا يستأذن. الشهادة وحدها، من غير حكم ولا تحسين، هي الباب الذي أغلق طويلا.",
          "في اليوم الثالث أو الرابع، سيصعد من الأعماق ما كنت تدفنه بالانشغال: حديث مؤجل، خسارة لم تبك كما ينبغي، سؤال عن الطريق الذي تمشيه ولا تعرف لماذا. لا تفزع؛ فهذه ليست علامة فشل، بل علامة أن الماء بدأ يصفو حتى صار القاع مرئيا. كل ما يطلب منك أن تبقى جالسا، وأن تنظر إلى ما صعد كما تنظر إلى ضيف قديم: تعرفه، وتتركه يقول ما جاء ليقوله، ثم تدعه ينصرف حين يشاء. ستدهشك حقيقة بسيطة: أن أكثر ما نخافه في دواخلنا يذبل حين نمنحه النظر، وأن الهرب هو الذي كان يغذيه طوال هذه السنين. الجلوس ليس مواجهة؛ إنه مصالحة بطيئة، على دفعات صغيرة، بحجم عشر دقائق.",
          "لن أعدك بأن تصبح شخصا آخر؛ فالكتب التي تعد بذلك كثيرة، وأرففها مزدحمة. أعدك بشيء أقل بريقا وأصدق أثرا: أن تعود إلى نفسك جارا حسن الجوار، تعرف متى تطرق بابها ومتى تتركها لصمتها. عشر دقائق في اليوم لا ترى في جدول أحد، لكنها مع الأيام تحفر مجرى هادئا يتغير به مذاق اليوم كله: تبطئ قبل أن تغضب، وتسمع قبل أن تجيب، وتلاحظ الضوء على الجدار وكأنك تراه أول مرة. هنا تنتهي المعاينة المجانية من هذا الكتاب؛ ويمضي الكتاب الكامل بعدها خطوة خطوة: كيف تهيئ خلوتك الأولى، وكيف تعبر أسبوع الملل، وكيف تصغي إلى ما يصعد من الداخل، حتى تصير العشر دقائق أصدق مواعيد يومك."
        ]
      }
    ]
  },

  {
    "id": "kharait-al-mudun-al-qadima",
    "type": "book",
    "lang": "ar",
    "title": "خرائط المدن القديمة",
    "subtitle": "رحلات مشي بطيئة في أزقة المدن العربية القديمة، حيث تحفظ الجدران ما ينساه العابرون.",
    "category": "Travel & Lifestyle",
    "price": 12,
    "rating": 4.7,
    "ratings": 76,
    "pages": 190,
    "readTime": "5 ساعات",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#1F2A26",
      "c2": "#0E1512",
      "acc": "#CBB689",
      "motif": "compass"
    },
    "hook": "امش ببطء؛ فالمدن القديمة لا تبوح إلا لمن يتمهل.",
    "desc": [
      "هذا كتاب في المشي قبل أن يكون كتابا في السفر. خمس مدن عربية قديمة، هي فاس وصنعاء ودمشق والقاهرة والكويت القديمة، نعبرها زقاقا زقاقا، لا بحثا عن المعالم الكبيرة، بل عن التفاصيل الصغيرة التي تسبقها: مقبض باب نحاسي لمعته الأيادي، رائحة خبز تتسلل من فرن حجري، ظل عريشة يتكسر على جدار طيني. في كل فصل نبطئ الخطى حتى تستيقظ الحواس، ونصغي إلى ما تقوله المدينة حين نكف عن استعجالها.",
      "بين هذه الصفحات خرائط من نوع آخر: خرائط الروائح والأصوات والظلال، ترسمها القدمان قبل العينين. نجالس النجار في فاس، ونصعد سطوح صنعاء عند المغيب، ونتبع ماء بردى تحت أقواس دمشق، ونضيع عمدا في حواري الجمالية، ونبحث في فرجان الكويت القديمة عن بيوت ما زال يسكنها البحر. وفي ختام كل رحلة مسار مشي مقترح لمن أراد أن يجرب الدرب بقدميه. أدب رحلات تأملي يذكرك أن المدينة ليست ما نراه فيها، بل ما تتركه فينا حين نغادرها."
    ],
    "learn": [
      "فن المشي البطيء: كيف تقرأ المدينة بقدميك قبل عينيك",
      "مسارات مقترحة في أزقة فاس وصنعاء ودمشق والقاهرة والكويت القديمة",
      "كيف تفتح حواسك على الروائح والأصوات والظلال التي تسبق المعالم",
      "قراءة العمارة القديمة: الأبواب والمشربيات والأفنية وما ترويه من ذاكرة",
      "تدوين الرحلة: تحويل الملاحظات الصغيرة إلى نصوص تستحق القراءة"
    ],
    "audience": [
      "عشاق أدب الرحلات والكتابة التأملية",
      "المسافرون الذين يفضلون الأزقة على قوائم المعالم",
      "المهتمون بالعمارة والتراث العمراني العربي",
      "من يبحث عن قراءة هادئة تبطئ إيقاع أيامه"
    ],
    "faq": [
      {
        "q": "بأي صيغة أحصل على الكتاب بعد الشراء؟",
        "a": "يصلك الكتاب فور إتمام الشراء بصيغتي PDF وePub معا، لتقرأه على أي جهاز تفضله."
      },
      {
        "q": "هل أستطيع القراءة دون تحميل أي ملفات؟",
        "a": "نعم، يمكنك قراءة الكتاب كاملا عبر القارئ الإلكتروني على موقعنا من أي متصفح، ويحفظ موضع قراءتك تلقائيا أينما توقفت."
      },
      {
        "q": "ماذا لو أضيفت مسارات أو فصول جديدة لاحقا؟",
        "a": "جميع التحديثات المستقبلية مجانية مدى الحياة؛ كلما أضفنا مسارا أو فصلا جديدا وصلتك النسخة المحدثة دون أي تكلفة إضافية."
      }
    ],
    "contents": ["مدخل: المشي بوصفه قراءة","فاس: الأزقة التي تعرف أسماءها","صنعاء: نوافذ القمرية","دمشق: ياسمين الجدران المتعبة","القاهرة: مقاهي الظهيرة","الكويت القديمة: بيوت البحر","طنجة: المدينة التي تودع","خاتمة: خريطة لا تكتمل"],
    "previewCount": 1,
    "chapters": [
      {
        "kicker": "الفصل الأول",
        "t": "فاس: أن تضيع كما ينبغي",
        "paras": [
          "تدخل فاس كما تدخل كتابا قديما لم يفرغ أحد من قراءته بعد. عند باب بوجلود يقف الصباح لحظة كأنه يستأذن، ثم ينسكب الضوء على الزليج الأزرق فتتذكر أن لهذه المدينة عادة في تحويل كل شيء إلى بداية للحكاية. لا تسأل عن الطريق؛ فالسؤال هنا نوع من الاستعجال، والاستعجال خطيئة المشائين. خذ أول زقاق يضيق بك، ودع كتفيك يتعلمان لغة الجدران: انحناءة هنا، والتفاتة هناك، ثم ذلك الانفراج المفاجئ حين تنفتح ساحة صغيرة كأنها نفس أخذته المدينة بعد جملة طويلة. في فاس تفهم مبكرا أن الخريطة الحقيقية لا تطوى في الجيب، بل تكتب على مهل بباطن القدمين.",
          "الروائح في فاس تسبق الأسماء. قبل أن تعرف أنك اقتربت من سوق العطارين، يخبرك الهواء: قرفة وكمون وماء زهر وشيء من دخان خشب الأرز يتصاعد من ورشة نجار لم يرفع رأسه منذ الفجر. أبطئ هنا. ضع يدك على مقبض نحاسي لمعته آلاف الأيادي قبل يدك، وأصغ إلى إيقاع المطارق في ساحة الصفارين يعلو ويخفت كأنه نبض المدينة نفسه. عربة بغل تمر فيلتصق الجميع بالجدران في حركة واحدة متوارثة، ثم يعود الزقاق إلى سيرته الأولى. لا أحد هنا يمشي وحده؛ أنت تمشي مع كل من مشوا قبلك، وآثار خطاهم محفورة في الحجر انخفاضات ناعمة تلمع تحت الضوء الشحيح.",
          "في ساحة الصفارين جلست على عتبة حجرية أراقب شيخا يطرق إناء نحاسيا ويعيد إليه استدارته الأولى. سألته منذ متى وهو هنا، فأشار إلى الجدار خلفه وقال: اسأله، فهو أقدم مني وأحفظ للحكاية. ضحك ثم أضاف بصوت أخفض: نحن نمر يا ولدي، والجدران تبقى؛ لهذا نحسن إليها الصنعة. تلك الجملة مشت معي بقية النهار. صرت أرى الجدران بعين أخرى: هذا الجص المتشقق دفتر حسابات قرن كامل، وهذه الحفرة أثر مزلاج لباب لم يعد له وجود، وذاك السواد فوق القوس دخان قناديل أطفأتها الكهرباء ولم تمحها. المدينة القديمة لا تخبئ ذاكرتها في المتاحف؛ إنها تعلقها على الجدران لمن يرفع رأسه.",
          "قرب العصر صعدت إلى سطح يطل على مدابغ الشوارة، حيث تنبسط أحواض الصباغة تحتك كلوحة ألوان تركها رسام على عجل. من فوق، تبدو فاس بحرا من السطوح الطينية تتخلله مآذن خضراء، ولا أثر للأزقة التي تهت فيها طوال النهار؛ كأن المدينة تخفي ممراتها عمن ينظر إليها من عل، ولا تمنحها إلا لمن ينزل إليها ماشيا. أدركت حينها أن الضياع في فاس ليس خطأ في القراءة، بل هو طريقة القراءة الوحيدة. غدا سأعود إلى باب بوجلود وأبدأ من جديد، بزقاق لم أجربه. هنا تنتهي المعاينة المجانية؛ ويتابع الكتاب الكامل الرحلة في بقية أزقة فاس، ثم يحملك إلى سطوح صنعاء، وياسمين دمشق، وحواري القاهرة، وفرجان الكويت القديمة."
        ]
      }
    ]
  },

  {
    "id": "la-bibliotheque-de-minuit",
    "type": "book",
    "lang": "fr",
    "title": "La Bibliothèque de minuit",
    "subtitle": "Un court roman sur une bibliothèque qui n'ouvre qu'à minuit, et sur ceux que la nuit tient éveillés.",
    "category": "Stories & Fiction",
    "price": 12,
    "rating": 4.8,
    "ratings": 114,
    "pages": 176,
    "readTime": "4 heures",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#232837",
      "c2": "#0F1219",
      "acc": "#D6BE8C",
      "motif": "bookmark"
    },
    "hook": "Elle prête à chacun le livre dont il ne savait pas avoir besoin.",
    "desc": [
      "Dans une ville sans nom, une bibliothèque de quartier n'ouvre ses portes qu'entre minuit et l'aube. On y croise une infirmière qui rentre de garde, un veuf qui parle aux rayonnages, une adolescente qui a peur d'éteindre la lumière. Derrière le comptoir, madame Solane ne demande jamais de carte : elle observe, elle écoute, puis elle prête à chacun le livre dont il ne savait pas avoir besoin. Élias, qui ne dort plus depuis deux cent onze nuits, va recevoir le sien.",
      "Écrit dans une langue simple et lumineuse, La Bibliothèque de minuit est un roman court sur l'insomnie, le deuil et la douceur têtue des lieux qui restent ouverts quand tout ferme. Un réalisme à peine déplacé, où le merveilleux tient en une étiquette manuscrite et une lampe qu'on n'éteint pas. Cent soixante-seize pages à lire une nuit où le sommeil ne vient pas, ou à garder pour celles qui viendront."
    ],
    "learn": [
      "Un court roman complet, à lire en une ou deux nuits blanches",
      "Une galerie d'insomniaques attachants, croqués avec tendresse et précision",
      "Une bibliothécaire mystérieuse dont chaque prêt cache une intention",
      "Une écriture au réalisme doux, entre mélancolie et lumière",
      "Une méditation discrète sur le deuil, la lecture et les lieux qui consolent"
    ],
    "audience": [
      "Les lecteurs qui aiment les romans courts à l'atmosphère enveloppante",
      "Les insomniaques qui cherchent une compagnie plutôt qu'un remède",
      "Les amoureux des bibliothèques, des librairies et des lieux habités par les livres",
      "Ceux qui ont aimé les récits où le quotidien glisse doucement vers l'étrange"
    ],
    "faq": [
      {
        "q": "Dans quels formats le livre est-il disponible ?",
        "a": "Le roman est livré en PDF et en ePub, sans protection contraignante, pour le lire sur liseuse, tablette ou ordinateur."
      },
      {
        "q": "Puis-je lire sans rien télécharger ?",
        "a": "Oui, votre achat inclut l'accès à notre lecteur en ligne : le livre vous suit sur tous vos appareils, votre page retenue d'une nuit à l'autre."
      },
      {
        "q": "L'édition sera-t-elle mise à jour ?",
        "a": "Les mises à jour sont offertes à vie : si le texte est corrigé ou enrichi d'une préface, vous recevez la nouvelle édition sans frais."
      }
    ],
    "contents": ["Chapitre un : L’heure des insomniaques","Chapitre deux : La bibliothécaire","Chapitre trois : Le lecteur du mardi","Chapitre quatre : Livres prêtés, jamais rendus","Chapitre cinq : La salle du fond","Chapitre six : L’inventaire des absences","Chapitre sept : Une ville qui dort mal","Chapitre huit : L’aube"],
    "previewCount": 1,
    "chapters": [
      {
        "kicker": "Chapitre premier",
        "t": "Ceux qui ne dorment pas",
        "paras": [
          "Personne ne se souvenait d'avoir vu madame Solane arriver. À minuit moins le quart, les fenêtres de la bibliothèque de la rue des Remparts s'allumaient une à une, d'une lumière jaune et patiente, comme on rallume une mémoire. Le quartier dormait, ou faisait semblant. Seuls les insomniaques savaient. Et les insomniaques se reconnaissent entre eux à cette façon qu'ils ont de marcher la nuit, sans hâte, les mains dans les poches, en évitant leur propre reflet dans les vitrines. Ils venaient de partout : de la cité des Lilas, des immeubles cossus du boulevard, de la chambre de bonne où l'on entend trop bien respirer la ville. Ils poussaient la porte vitrée, et la porte ne grinçait jamais.",
          "À l'intérieur, il faisait la température exacte des souvenirs d'enfance. Madame Solane se tenait derrière son comptoir de bois sombre, ni jeune ni vieille, avec ce visage qu'on oublie dès qu'on le quitte et qu'on reconnaît pourtant toute sa vie. Elle ne demandait jamais de carte. Elle demandait autre chose : comment était la nuit, si l'on avait mangé, depuis quand on ne pleurait plus. Puis elle disparaissait entre les rayonnages, longtemps parfois, et revenait avec un seul livre qu'elle posait sur le comptoir sans un mot. Ce n'était jamais celui qu'on serait venu chercher. C'était toujours, on le comprenait plus tard, celui qu'il fallait.",
          "Cette nuit de novembre, il tombait une pluie fine qui ne mouillait presque pas, une pluie pour la forme. Élias entra à minuit vingt, le col relevé, ses trente-quatre ans portés comme un manteau trop grand. Cela faisait deux cent onze nuits qu'il ne dormait plus ; il les comptait, c'était devenu sa manière à lui de prier. Il venait pour la chaleur, se disait-il, pour les lampes, pour le bruit des pages tournées par d'autres mains. Il s'assit à sa place habituelle, près de la fenêtre d'où l'on voyait le carrefour désert et son feu tricolore qui continuait, imperturbable, à régler la circulation de personne.",
          "Il ne l'entendit pas approcher. Madame Solane posa devant lui un petit volume à la couverture fatiguée, sans titre apparent, dont la tranche gardait la trace d'un ruban jaune. « Celui-ci vous attendait », dit-elle simplement, avant de regagner son comptoir comme si de rien n'était. Élias regarda longtemps le livre sans y toucher. Il connaissait cette écriture, sur l'étiquette. Il l'aurait reconnue entre mille : c'était celle de sa mère, morte au printemps, qui de toute sa vie n'avait jamais mis les pieds dans une bibliothèque. Dehors, le feu passa au vert pour personne. L'extrait gratuit s'achève ici ; le roman complet continue avec la première nuit d'Élias parmi les insomniaques, et le secret des livres que madame Solane ne prête qu'une seule fois."
        ]
      }
    ]
  },

  {
    "id": "l-art-de-finir",
    "type": "book",
    "lang": "fr",
    "title": "L'Art de finir",
    "subtitle": "Un essai sur la discipline discrète de l'achèvement, à l'usage des collectionneurs de commencements.",
    "category": "Productivity",
    "price": 15,
    "rating": 4.9,
    "ratings": 87,
    "pages": 148,
    "readTime": "4 heures",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#33221F",
      "c2": "#170E0C",
      "acc": "#DDBE7F",
      "motif": "check"
    },
    "hook": "Commencer est une ivresse. Finir est un art.",
    "desc": [
      "Nous vivons entourés de commencements. Le roman abandonné à la page quarante, la langue apprise jusqu'à la troisième leçon, le projet qui dort dans un dossier soigneusement nommé. Commencer nous flatte : c'est le moment où tout est encore possible, où rien n'a encore déçu. Cet essai examine avec une tendresse lucide notre collection d'élans interrompus, et ce qu'elle dit de nous : moins une paresse qu'une peur élégamment déguisée en enthousiasme.",
      "Puis il propose autre chose : une discipline de l'achèvement, patiente et presque artisanale. Finir n'est pas une performance ; c'est un rapport au temps, au réel, à soi. Au fil de pages précises et sans jargon, l'auteur montre comment le geste de conclure, qu'il s'agisse d'un texte, d'un chantier ou d'une conversation, transforme le travail en œuvre et l'agitation en trajectoire. Un livre bref, à terminer d'une traite, pour changer durablement la manière dont on mène tout le reste."
    ],
    "learn": [
      "Pourquoi l'esprit préfère l'ivresse du début à la sobriété de la fin",
      "Distinguer les projets à finir de ceux qu'il faut abandonner franchement",
      "Traverser le dernier kilomètre, cette zone où tout semble soudain médiocre",
      "Faire de l'achèvement une habitude discrète plutôt qu'un exploit occasionnel",
      "Ce que finir change vraiment : la confiance, la réputation, le rapport au temps"
    ],
    "audience": [
      "Les collectionneurs de débuts (projets, livres, formations) qui commencent à s'en lasser",
      "Les indépendants et les créatifs dont le travail ne compte que livré",
      "Les perfectionnistes qui confondent l'inachevé et le perfectible",
      "Tout lecteur qui préfère un essai élégant à un manuel de méthodes"
    ],
    "faq": [
      {
        "q": "Sous quels formats le livre est-il disponible ?",
        "a": "Vous recevez le livre en PDF et en ePub, sans protection contraignante, pour le lire confortablement sur tous vos appareils."
      },
      {
        "q": "Puis-je le lire sans rien télécharger ?",
        "a": "Oui. Chaque achat inclut l'accès à notre liseuse en ligne, qui conserve votre progression d'un appareil à l'autre."
      },
      {
        "q": "Le livre évoluera-t-il après l'achat ?",
        "a": "Chaque édition révisée vous est offerte : les mises à jour sont gratuites, à vie, sans jamais rien racheter."
      }
    ],
    "contents": ["Chapitre un : Le culte du commencement","Chapitre deux : Pourquoi nous abandonnons","Chapitre trois : La dernière ligne droite","Chapitre quatre : Finir petit","Chapitre cinq : L’ennui du milieu","Chapitre six : Rituels d’achèvement","Chapitre sept : Savoir abandonner, parfois","Conclusion : La bibliothèque des choses finies"],
    "previewCount": 1,
    "chapters": [
      {
        "kicker": "Chapitre premier",
        "t": "La collection des commencements",
        "paras": [
          "Il faudrait un jour dresser l'inventaire de nos débuts. Le cahier neuf dont seules les trois premières pages portent une écriture appliquée. La méthode d'italien arrêtée au passé composé. Le meuble poncé sur une seule face, qui attend dans le garage une main qui ne reviendra pas. Nous croyons collectionner des projets ; nous collectionnons en réalité des promesses faites à nous-mêmes, et soigneusement rompues. L'étrange est que cette collection ne nous accable pas. Elle nous rassure. Chaque début inachevé conserve intacte sa perfection possible : tant que le roman n'est pas écrit, il demeure un chef-d'œuvre. C'est l'achèvement qui prend le risque de la médiocrité. Commencer, c'est se choisir un avenir flatteur ; finir, c'est accepter un présent exact.",
          "Notre époque a fait du commencement une vertu cardinale. On célèbre le lancement, l'élan, la première pierre ; on photographie les inaugurations, jamais les livraisons. Le vocabulaire lui-même a pris parti : entreprendre sonne comme une aventure, terminer comme une formalité. Il y a pourtant une injustice dans cette hiérarchie. Le premier jour ne coûte presque rien : l'enthousiasme paie tout. C'est le quarantième jour qui exige quelque chose de nous, quand la nouveauté s'est éteinte et qu'il ne reste que le travail, nu, sans musique. Ceux qui finissent ne sont pas plus doués que les autres. Ils ont simplement appris à travailler sans applaudissements intérieurs, à avancer dans cette zone tempérée où rien n'exalte et rien n'empêche. Une compétence modeste, presque invisible, qui décide pourtant de tout.",
          "J'ai longtemps cru que mes abandons étaient des accidents. Un imprévu, une fatigue, un autre projet plus urgent : il y avait toujours une explication locale, raisonnable, irréprochable. Puis j'ai remarqué la régularité du phénomène : je m'arrêtais toujours au même endroit. Pas au début, où l'élan porte encore ; pas à la fin, que je n'atteignais jamais ; mais aux deux tiers, précisément là où l'ouvrage devient assez réel pour être jugé. Tant qu'une chose est en cours, elle bénéficie d'un sursis. Achevée, elle témoigne. Mes abandons n'étaient pas des accidents : c'étaient des acquittements. Je fuyais moins l'effort que le verdict. Cette découverte, humiliante et libératrice, est le point de départ de ce livre.",
          "Ce livre ne vous demandera pas de devenir quelqu'un d'autre. Il ne promet ni matin miraculeux ni méthode en sept étapes. Le monde n'a pas besoin d'une méthode de plus, il a besoin de choses finies. Il propose un déplacement du regard : cesser de juger nos journées à ce qu'elles ouvrent, commencer à les juger à ce qu'elles ferment. C'est un critère plus sévère, et curieusement plus doux ; on s'y découvre moins dispersé qu'on ne le craignait, et plus capable qu'on ne l'espérait. Finir est un art mineur en apparence, majeur en conséquence. L'extrait gratuit s'achève ici ; le livre complet se poursuit avec l'anatomie de l'abandon, la règle du dernier kilomètre et l'apprentissage patient des fins."
        ]
      }
    ]
  },

  {
    "id": "cafes-et-autres-refuges",
    "type": "book",
    "lang": "fr",
    "title": "Cafés et autres refuges",
    "subtitle": "De Vienne à Paris, l'éloge discret du droit de s'attarder devant une tasse vide.",
    "category": "Travel & Lifestyle",
    "price": 11,
    "rating": 4.7,
    "ratings": 65,
    "pages": 132,
    "readTime": "4 heures",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#2A2E1F",
      "c2": "#13160E",
      "acc": "#D2BC8C",
      "motif": "arch"
    },
    "hook": "Personne, ici, ne vous demandera de partir.",
    "desc": [
      "Il existe des lieux où le temps consent à ralentir. De Vienne à Lisbonne, de Trieste à Paris, ce livre s'attarde dans les cafés d'Europe, non pour en dresser l'inventaire, mais pour écouter ce qu'ils murmurent à qui sait s'asseoir. On y croise des habitués silencieux, des serveurs philosophes, des lumières d'hiver posées sur le marbre des tables. Chaque chapitre est une halte, chaque page une tasse qu'on ne finit pas trop vite.",
      "Contre la hâte qui gouverne nos journées, ces pages défendent un droit ancien : celui de rester assis longtemps devant une tasse vide, sans autre projet que de regarder. On y apprend à lire une salle comme on lit un visage, à reconnaître la grammaire secrète des banquettes et des miroirs, à goûter cette solitude peuplée qui ne ressemble à aucune autre. Un livre à emporter en voyage, ou à ouvrir chez soi quand le monde va trop vite."
    ],
    "learn": [
      "Lire l'âme d'une ville dans la salle de ses cafés",
      "L'art d'être un habitué, même de passage",
      "Ce que la tasse vide dit du temps retrouvé",
      "Observer sans déranger : petite grammaire du regard",
      "Vienne, Lisbonne, Trieste, Paris : quatre manières d'habiter la lenteur"
    ],
    "audience": [
      "Les voyageurs qui préfèrent une table d'angle aux files de musée",
      "Les lecteurs de littérature de voyage intime, du feuilleton viennois au carnet lisboète",
      "Ceux qui écrivent, rêvent ou lisent mieux dans le murmure d'une salle",
      "Quiconque a déjà commandé un second café pour ne pas avoir à partir"
    ],
    "faq": [
      {
        "q": "Dans quels formats le livre est-il proposé ?",
        "a": "Vous recevez le livre en PDF et en ePub, lisibles sur tous vos appareils. Les deux formats sont inclus dans le prix, sans supplément."
      },
      {
        "q": "Le livre sera-t-il enrichi au fil du temps ?",
        "a": "Oui, les mises à jour sont gratuites à vie. Chaque édition révisée ou augmentée vous est offerte automatiquement, sans rien racheter."
      },
      {
        "q": "Puis-je lire sans rien télécharger ?",
        "a": "Bien sûr. Notre liseuse en ligne vous permet de commencer la lecture dès l'achat, depuis n'importe quel navigateur, où que vous soyez."
      }
    ],
    "contents": ["Vienne : Le marbre et le temps","Lisbonne : Une bica au comptoir","Trieste : La ville qui lit","Paris : Les habitués","Rome : Le bar d’angle","Istanbul : Le thé et la Corne d’Or","Éloge de la tasse vide"],
    "previewCount": 1,
    "chapters": [
      {
        "kicker": "Chapitre premier",
        "t": "Vienne, l'heure du marbre",
        "paras": [
          "À Vienne, on n'entre pas dans un café : on y revient. Même la première fois. La porte à tambour du Sperl tourne lentement, comme si elle voulait vous laisser le temps de changer d'avis, puis vous dépose dans une lumière qui n'appartient à aucune heure du jour. Les banquettes de velours ont la couleur exacte d'un automne qui aurait décidé de durer. Un serveur en veste noire s'approche sans hâte (la hâte, ici, serait une faute de goût) et pose devant vous un verre d'eau sur un petit plateau d'argent. C'est un pacte. L'eau dit : restez. Elle sera renouvelée sans que vous demandiez rien, aussi longtemps que vous tiendrez votre poste. Certains habitués tiennent le leur depuis trente ans.",
          "J'ai passé un hiver à observer l'homme de la table sept. Il arrivait à neuf heures avec deux journaux dont il ne lisait, m'a-t-il semblé, que les titres, puis il regardait la rue. Pas distraitement : avec l'attention scrupuleuse d'un homme qui vérifie que le monde continue. Son mélange refroidissait à côté de lui, à peine entamé. Un matin, j'ai compris qu'il ne venait pas pour le café. Il venait pour la place. Pour cette portion de fenêtre qui lui appartenait par usage, comme certains bancs appartiennent aux vieux messieurs des jardins publics. Le café ne vend pas une boisson ; il loue, pour le prix d'une tasse, un point de vue sur l'existence des autres. C'est la transaction la plus honnête que je connaisse.",
          "On me demandera ce que je faisais là, moi, pendant tout ce temps. Rien, précisément. C'est un métier plus difficile qu'il n'y paraît. Les premières semaines, je sortais un carnet pour me donner une contenance ; puis le carnet est resté fermé, puis il est resté à l'hôtel. Ma tasse était vide dès dix heures et personne, jamais, n'est venu la remporter avec ce regard qui, ailleurs, signifie qu'il serait temps de céder la table. À Vienne, une tasse vide n'est pas une fin : c'est une preuve de résidence. J'ai appris là ce que ce livre voudrait transmettre : qu'il existe encore, en Europe, des lieux où l'on peut être quelqu'un simplement parce qu'on est assis quelque part.",
          "Le dernier jour, l'homme de la table sept m'a salué d'un signe de tête. Rien de plus, mais à Vienne, c'est un serment. J'ai quitté le Sperl comme on quitte une maison où l'on a été heureux sans bruit, en emportant cette certitude : nos vies pressées ont besoin de ces salles lentes comme les phrases ont besoin de virgules. Le train de nuit m'attendait, et au bout des rails, Lisbonne, ses comptoirs de bois sombre et ses bicas bues debout : une tout autre grammaire de la lenteur. L'extrait gratuit s'achève ici ; le livre complet poursuit le voyage vers Lisbonne, Trieste et Paris, et vers tous ceux qui, devant une tasse vide, refusent encore de se lever."
        ]
      }
    ]
  }
,

  /* ---------------- THE WONDER ROOM (bedtime tales) ---------------- */
  {
    "id": "the-moon-ferry",
    "contents": ["The Harbour Where the Rooftops End","A Ticket Paid in Wishes","The Lighthouse That Collected Echoes","Fog, and How to Be Brave in It","The Island of Almost-Morning","The Ferryman's Lantern","Home Before the Stars Go Out"],
    "type": "book",
    "lang": "en",
    "wonder": true,
    "title": "The Moon Ferry",
    "subtitle": "A bedtime tale of leftover dreams and the quiet ferryman who carries them home",
    "category": "Stories & Fiction",
    "price": 9,
    "rating": 4.9,
    "ratings": 58,
    "pages": 44,
    "readTime": "20 min aloud",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#22283A",
      "c2": "#0F1220",
      "acc": "#E8D9A8",
      "motif": "boat"
    },
    "hook": "Every night a quiet ferryman sails the sky-sea, delivering the day's leftover dreams to the children who need them most. Until tonight, when one small dream refuses to go.",
    "desc": [
      "Some stories are made for daylight. This one is made for the hush that comes after: for the lamp turned low, the blanket pulled to the chin, the small voice asking for just one more page. The Moon Ferry is a bedtime tale in the old, unhurried tradition: gentle enough to slow a racing mind, strange enough to fill it with wonder, and written to sound beautiful out loud.",
      "You will follow Oto, the quiet ferryman of the sky-sea, as he gathers the day's leftover dreams and carries them to the children who need them most, until one shy dream refuses to go. What unfolds is a tender story about fear, patience, and the courage it takes to be given away. Read it in one moonlit sitting, or let it become the ritual your evenings are built around."
    ],
    "learn": [
      "A gentle courage: the knowledge that shy things, like shy children, bloom when given time",
      "A sleep ritual with its own geography: a harbour, a lantern, a golden boat, a hush",
      "Empathy for the quiet ones, taught by a story that honours listening over loudness",
      "An imagination stocked with sky-seas and starlit crossings, ready for dreaming of its own"
    ],
    "audience": [
      "Young listeners aged 4 to 9 who always ask for one more page",
      "Parents and grandparents who love the music of reading aloud",
      "Gift-givers looking for something that outlasts a toy",
      "Families building a calmer, softer ending to the day"
    ],
    "faq": [
      {
        "q": "How long does it take to read aloud, and what age is it for?",
        "a": "One unhurried crossing takes about twenty minutes aloud, or you can split it into three or four short voyages over several nights. The tale is tuned for listeners aged four to nine, with sentences shaped so the grown-up doing the reading falls a little under the spell too."
      },
      {
        "q": "Is this a picture book?",
        "a": "No, and honestly so. The Moon Ferry is a beautifully typeset text edition, designed like a small keepsake: elegant pages, generous margins, type set for candlelight. The pictures are painted where they glow brightest: in your child's imagination, one read-aloud sentence at a time."
      },
      {
        "q": "What formats do I receive?",
        "a": "Your purchase includes the tale as both PDF and ePub, plus instant access in our online reader on any device. Every future refinement of the edition is yours as a free update, forever. Buy it once, and the ferry keeps sailing."
      }
    ],
    "previewCount": 1,
    "chapters": [
      {
        "kicker": "Chapter One · The First Crossing",
        "t": "The Harbour Where the Rooftops End",
        "paras": [
          "When the last lamp in the last window goes out, a harbour appears where the rooftops end: a small, patient harbour made of mist and moonlight, with one golden boat rocking gently at its pier. The boat belongs to Oto, the quietest ferryman who ever lived. He wears a coat the colour of midnight and a scarf knitted from fog, and he never rings a bell or calls a name. He simply waits, as the tide of stars comes in, for the sky-sea to open its silver road.",
          "Every night, Oto sails from windowsill to windowsill, gathering the dreams the day left behind. Some dreams are small and warm, like a spoonful of honey. Some are wide as summer, smelling of grass and bicycle wind. He lifts each one with careful hands, wraps it in a square of starlight, and lays it in the boat's golden hold. Then he sails on, past chimneys and church towers, to deliver them, one by one, to the children who need them most: the worried ones, the lonely ones, the ones who cannot sleep.",
          "But tonight, something is different. Tonight, at the very bottom of the hold, one small dream is trembling. It is a curled-up, silvery thing, no bigger than a plum, and when Oto reaches for it, it rolls away and hides behind the anchor rope. 'Come now,' he whispers, in his voice like turning pages. 'Somebody is waiting for you.' But the little dream shakes its silvery head, for dreams can be shy, and this one is the shyest he has ever carried. It will not, will not, will not be delivered.",
          "Oto sits down on the edge of his golden boat and thinks. In all his thousand nights of sailing, no dream has ever refused him. Far below, in a small house at the end of a small street, a child named Mira lies awake with empty hands, waiting for a dream that will not come. And far above, the moon leans closer to watch. Here, little listener, the free crossing ends, and the harbour lantern dims. In the full tale, Oto and the runaway dream sail the whole sky-sea to learn why some dreams are afraid, and how even the shyest one finds its way home."
        ]
      }
    ]
  },

  {
    "id": "the-paper-fox",
    "contents": ["The Fox on Page Forty","Ink Still Wet","The Margin Forest","A Bookmark for a Tail","The Library at the Edge of Sleep","The Unfinished Sentence","Back Between the Covers"],
    "type": "book",
    "lang": "en",
    "wonder": true,
    "title": "The Paper Fox",
    "subtitle": "A bedtime tale for small listeners who are not quite sure about the dark",
    "category": "Stories & Fiction",
    "price": 9,
    "rating": 4.8,
    "ratings": 44,
    "pages": 40,
    "readTime": "20 min aloud",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#33261B",
      "c2": "#180F08",
      "acc": "#E4C88C",
      "motif": "fox"
    },
    "hook": "At midnight, a folded fox takes a frightened girl by the sleeve and introduces her to the lamps the dark has been keeping.",
    "desc": [
      "Some children fear the dark. Mira folds it. From a single page of her grandmother's oldest book, she creases a small fox, and at midnight it stretches, shakes out its paper ears, and takes her by the sleeve. What follows is a walk through the dark itself: not a monster, they discover, but a quiet room whose lamps she has simply never met.",
      "Written to be read aloud, The Paper Fox moves at the pace of a slowing heartbeat: its sentences fold and unfold like the fox itself, easing small listeners from wide-eyed to heavy-lidded. And for the parent, it offers something rarer still: a gentle answer to \"I'm scared of the dark\" that you don't have to invent at nine o'clock. The tale answers it for you, beautifully."
    ],
    "learn": [
      "That the dark is not a monster but a room, one whose lamps are simply waiting to be met",
      "That small hands can fold fear into something that walks beside you",
      "A sleep ritual with real music in it: sentences paced to slow the breath and lower the lids",
      "That imagination is a lantern a child carries alone, long after the last page is turned"
    ],
    "audience": [
      "Little listeners aged 4 to 9, especially the ones who ask for the hallway light left on",
      "Parents and grandparents who believe bedtime deserves beautiful sentences",
      "Gift-givers seeking something quieter and finer than another flashing toy",
      "Families building a nightly read-aloud ritual their children will actually ask for"
    ],
    "faq": [
      {
        "q": "How long does it take to read aloud, and what age is it for?",
        "a": "Read gently, the whole tale takes about twenty minutes aloud, or two ten-minute nights, since it rests naturally at the halfway fold. It is written for listeners aged four to nine, with enough music in the sentences that older readers rarely mind staying."
      },
      {
        "q": "Is this an illustrated picture book?",
        "a": "No, and honestly so. The Paper Fox is a beautifully typeset text edition, made for reading aloud. There are no picture-book illustrations; the typography carries the atmosphere, and your child's imagination paints the fox. Many parents find that is precisely the point."
      },
      {
        "q": "What formats do I receive?",
        "a": "Your purchase includes the tale as both PDF and ePub, plus instant access in our online reader on any device. Every future refinement of the edition is yours as a free update, forever."
      }
    ],
    "previewCount": 1,
    "chapters": [
      {
        "kicker": "Chapter One",
        "t": "The Fox on Page Forty",
        "paras": [
          "Mira was brave about almost everything. She was brave about spiders, brave about thunder, brave about the deep end of the swimming pool. But when the lamp clicked off at night, her bravery folded itself up very small and hid somewhere near her toes. The dark, she was certain, was not empty. It rustled. It breathed. It rearranged the furniture when nobody was looking. So every evening she asked for the door left open, and the hallway light left on, and one more glass of water she did not really want.",
          "In the corner of her room lived her grandmother's oldest book, a heavy thing with a cracked spine and pages the colour of weak tea. Mira was allowed to touch it, gently, on Sundays. But that night, while the hallway light hummed, she did something she had never done before. She slipped page forty free of its stitching, the page where a fox ran forever through printed grass, and folded it, corner to corner, crease by crease, the way Grandmother had once taught her, until a small paper fox sat in her palm with its ears up, listening.",
          "At midnight, which is when all proper magic checks its watch, the paper fox stretched. It shook out its creases the way other animals shake out their fur. It hopped from the shelf to the blanket, walked up the hill of Mira's knees, and looked at her with eyes made of two small printed letters. \"You have been telling stories about my house,\" it said, in a voice like pages turning. \"You say the dark is full of monsters. The dark is only a room, little folder. A room whose lamps you haven't met yet. Come and be introduced.\"",
          "Mira meant to say no. She had a whole speech about it, kept somewhere near her toes with her bravery. But the fox took her sleeve in its paper teeth, gently, the way you hold something you have decided to keep. And the floor felt suddenly like the first page of something. Here, little listener, the free preview curls up and closes its eyes. In the full tale, Mira meets the lamp that lives in the wardrobe, the one that sleeps under the bed, and the oldest light of all. She learns why the dark keeps them, and why it kept her grandmother's fox."
        ]
      }
    ]
  },

  {
    "id": "markab-al-ghaym",
    "contents": ["مركب لا يعرف الماء","شراع من ضوء المصباح","ميناء الوسائد","النجمة التي دلت الطريق","بحر الغيم الهادئ","الرسو عند حافة الحلم"],
    "type": "book",
    "lang": "ar",
    "wonder": true,
    "title": "مركب الغيم",
    "subtitle": "حكاية قبل النوم عن صبي يبحر فوق الغيم ليعيد الأحلام الضائعة إلى نوافذها",
    "category": "Stories & Fiction",
    "price": 9,
    "rating": 4.9,
    "ratings": 37,
    "pages": 42,
    "readTime": "20 دقيقة قراءة بصوت عال",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#1F2A33",
      "c2": "#0D141A",
      "acc": "#E0CBA0",
      "motif": "boat"
    },
    "hook": "كل ليلة، حين تنام المدينة، يرفع سراج شراعه فوق الغيم ليعيد الأحلام الضائعة إلى نوافذها... حتى وجد حلما لا يعرف نافذته.",
    "desc": [
      "ماذا لو كانت الأحلام التي تفلت من الرؤوس النائمة لا تضيع، بل تنتظر من يعيدها؟ في «مركب الغيم» تلتقي عائلتكم بسراج، الصبي الذي يملك مركبا صغيرا لا يبحر في الماء بل فوق الغيم، يجمع كل ليلة أحلام مدينته الشاردة ويردها إلى نوافذها واحدا واحدا. حكاية تقرأ قبل النوم فتحول إطفاء المصباح إلى موعد ينتظره الصغار بشغف، لا لحظة يتهربون منها.",
      "كتبناها بفصحى موسيقية رقيقة، جملها مصوغة لتقال بصوت عال في ضوء المصباح الخافت: إيقاع يهدهد، ومفردات تفتح الخيال دون أن تثقل الأذن الصغيرة. وحين يعثر سراج على حلم لا يعرف نافذته، تبدأ رحلة تعلم أطفالكم أن اللطف بوصلة، وأن لكل حلم تائه بيتا ينتظره. هدية نوم هانئ تقدمونها لأولادكم، وذكرى صوتكم وأنتم تقرؤون لهم تبقى أطول من الليل نفسه."
    ],
    "learn": [
      "طقس نوم دافئ يجعل إطفاء الضوء بداية الحكاية لا نهايتها",
      "شجاعة اللطف: أن نعيد ما ضاع إلى أصحابه مهما طال الطريق",
      "خيال يبحر بعيدا ثم يعود بالطفل إلى وسادته آمنا مطمئنا",
      "أذن صغيرة تتذوق موسيقى الفصحى وتألف جمالها منذ الصغر"
    ],
    "audience": [
      "المصغون الصغار من أربع سنوات إلى تسع",
      "الآباء والأمهات الذين يعشقون القراءة بصوت عال قبل النوم",
      "من يبحث عن هدية ليلية راقية لطفل غال على قلبه",
      "المعلمون ورواة الحكايات في المكتبات وحلقات ما قبل النوم"
    ],
    "faq": [
      {
        "q": "كم تستغرق قراءتها، ولأي عمر تناسب؟",
        "a": "صممت الحكاية لتقرأ في نحو عشرين دقيقة بصوت عال، ويمكن تقسيمها بيسر على ليلتين أو ثلاث. لغتها ومعانيها تناسب المصغين من أربع سنوات إلى تسع، على أن الكبار الذين يقرؤونها كثيرا ما يسهرون معها أيضا."
      },
      {
        "q": "هل الكتاب مصور بالرسوم؟",
        "a": "«مركب الغيم» طبعة نصية أنيقة الإخراج، من غير رسوم مصورة؛ ذهبت عنايتنا كلها إلى جمال الحرف وفسحة الصفحة وإيقاع الجملة، ليرسم خيال طفلكم الصور بنفسه، وتلك أجمل الرسوم على الإطلاق."
      },
      {
        "q": "بأي صيغة أحصل على الكتاب؟",
        "a": "تصلكم فور الشراء نسختا PDF وePub معا، مع قارئ إلكتروني أنيق عبر المتصفح تفتحونه من أي جهاز، وتحديثات مجانية مدى الحياة كلما صقلنا الطبعة وزدناها جمالا."
      }
    ],
    "previewCount": 1,
    "chapters": [
      {
        "kicker": "الليلة الأولى",
        "t": "مركب لا يعرف الماء",
        "paras": [
          "في مدينة قديمة تنام بيوتها متلاصقة كالعصافير على سلك، كان يعيش صبي اسمه سراج. لم يكن سراج كسائر الصبيان؛ فبينما يربط الناس قواربهم عند النهر، كان يربط مركبه الصغير بحبل من ضوء القمر إلى مدخنة بيته فوق السطح. مركب من خشب الأمنيات، شراعه من نسيج الغيوم البيضاء، لا يعرف الماء ولا يريده، لأنه لا يبحر إلا حين تطفأ مصابيح المدينة كلها، وتصعد إليه النجوم لتجلس على حافته كما يجلس الأصدقاء القدامى.",
          "وكان لسراج عمل لا يعرفه أحد سواه. ففي كل ليلة، حين يغرق النائمون في نومهم، تفلت من رؤوسهم أحلام صغيرة كما تفلت الفراشات من كف مفتوحة: حلم طفلة عن حصان أزرق، وحلم خباز عن رغيف يطير، وحلم جدة عن بيتها الأول. تصعد الأحلام الشاردة إلى السماء وتتشابك بين الغيوم، فيرفع سراج شراعه، ويمضي بمركبه في الليل الواسع، يلتقطها واحدا واحدا بشبكة من خيوط الفجر، ويهمس لكل حلم منها: لا تخف، أنا أعرف طريق البيت.",
          "كان سراج يعرف نوافذ مدينته كلها كما يعرف خطوط كفه. النافذة ذات الستارة الصفراء لحلم البنت التي تحب الخيول، والنافذة التي يفوح منها عبق الخبز لحلم الخباز، والنافذة الصغيرة خلف شجرة الليمون لحلم الجدة. يدنو مركبه من كل نافذة دنو الغيمة من قمة الجبل، فيفتحها الهواء الطيب برفق، وينساب الحلم إلى وسادة صاحبه كقطرة عسل في كوب حليب دافئ. وعندها فقط يبتسم النائم في نومه، ولا يدري أحد في الصباح لماذا استيقظت المدينة كلها وفي صدرها خفة أجنحة.",
          "غير أن ليلة من الليالي جاءت مختلفة عن كل ما قبلها. فبينما كان سراج يطوي شبكته ليعود، لمح بين الغيوم حلما صغيرا يرتجف وحده، حلما بلون الفضة لم ير مثله من قبل، لا رائحة خبز فيه ولا صهيل حصان، ولا خيط واحد يدله على نافذته. حمله سراج بين كفيه وقال: لكل حلم بيت... فمن نسيك أيها الحلم؟ وهنا، يا صاحبي المصغي، يرسو مركب المعاينة عند هذه الغيمة؛ أما الحكاية كاملة فتحمل رحلة سراج خلف الحلم الفضي، وسر النافذة التي لا ترى، وليلة تتعلم فيها المدينة كلها أن تحلم من جديد."
        ]
      }
    ]
  },

  {
    "id": "ou-dorment-les-etoiles",
    "contents": ["L'étoile qui refusait de dormir","La berceuse du phare","Le filet à constellations","Un nuage pour oreiller","Le gardien des veilleuses","Là où dorment les étoiles"],
    "type": "book",
    "lang": "fr",
    "wonder": true,
    "title": "Où dorment les étoiles",
    "subtitle": "Un conte du soir à lire à voix haute, où la plus petite étoile du ciel apprend enfin à fermer les yeux",
    "category": "Stories & Fiction",
    "price": 9,
    "rating": 4.8,
    "ratings": 31,
    "pages": 38,
    "readTime": "20 min à voix haute",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#26223A",
      "c2": "#110F1E",
      "acc": "#D8C08B",
      "motif": "star"
    },
    "hook": "Chaque étoile doit dormir une nuit par siècle. Line refuse, jusqu'au soir où un enfant lui apprend, geste après geste, les rituels du coucher… et découvre pourquoi le ciel a besoin de berceuses.",
    "desc": [
      "Il existe une loi très ancienne que les astronomes ont oubliée : chaque étoile doit dormir une nuit par siècle, pour que sa lumière reste claire. Mais Line, la plus petite étoile du ciel, refuse de fermer les yeux. « Où dorment les étoiles » raconte la rencontre entre cette étoile insomniaque et un enfant qui, du fond de son jardin, lui apprend patiemment les gestes tendres du soir.",
      "Écrit pour être lu à voix haute, ce conte épouse le rythme du coucher : phrases qui se balancent, refrains qui reviennent comme des vagues, silences placés là où l'on borde. Chaque soir, il transforme la lecture en rituel : le verre d'eau, la lumière douce, le dernier mot murmuré. Un texte que les parents savourent autant que les enfants l'écoutent, et qui referme la journée comme on referme un coffret précieux."
    ],
    "learn": [
      "Le sommeil apprivoisé : fermer les yeux devient un voyage, non une défaite",
      "Un rituel du soir que l'enfant réclame de lui-même : le verre d'eau, la berceuse, le dernier murmure",
      "La tendresse de prendre soin : dans ce conte, c'est l'enfant qui borde l'étoile",
      "Une oreille qui s'affine : refrains, rimes cachées et musique de la langue française"
    ],
    "audience": [
      "Les petites oreilles de 4 à 9 ans, du premier bâillement au dernier « encore ! »",
      "Les parents et grands-parents qui aiment lire à voix haute et faire durer le soir",
      "Ceux qui cherchent un cadeau d'anniversaire, de naissance ou de premier grand lit",
      "Tous les enfants qui, comme Line, trouvent chaque soir une excellente raison de ne pas dormir"
    ],
    "faq": [
      {
        "q": "Pour quel âge, et combien de temps dure la lecture à voix haute ?",
        "a": "Le conte est écrit pour les écouteurs de 4 à 9 ans et se lit en une vingtaine de minutes à voix haute : un soir entier, ou deux soirs si l'on veut faire durer le plaisir. Les phrases sont rythmées pour la voix, avec des refrains que les enfants reprennent vite en chœur."
      },
      {
        "q": "Le livre est-il illustré ?",
        "a": "« Où dorment les étoiles » est une édition texte, sans illustrations d'album : sa beauté tient à une typographie soignée, à des pages aérées pensées pour la lecture du soir, et aux images que la voix fait naître. C'est l'imagination de l'enfant qui peint le ciel, et c'est très bien ainsi."
      },
      {
        "q": "Sous quels formats le conte est-il livré ?",
        "a": "Vous recevez le PDF et l'ePub, ainsi qu'un accès à notre liseuse en ligne pour lire depuis n'importe quel écran. Toutes les mises à jour futures de l'édition sont incluses, sans frais supplémentaires."
      }
    ],
    "previewCount": 1,
    "chapters": [
      {
        "kicker": "Chapitre premier · extrait offert",
        "t": "L'étoile qui refusait de dormir",
        "paras": [
          "Il faut que tu saches une chose que les grandes personnes ont oubliée : les étoiles aussi doivent dormir. Pas souvent, rassure-toi. Une seule nuit par siècle, une toute petite nuit, à peine le temps d'un rêve. Ce soir-là, l'étoile s'enveloppe dans un nuage, souffle sur sa propre lumière comme on souffle sur une bougie, et le ciel, très poliment, fait silence autour d'elle. Au matin, un matin d'étoile qui dure cent ans, elle se réveille plus brillante qu'avant, lavée de ses poussières, neuve comme un sou d'argent. C'est la loi du ciel. Et personne, jamais, n'avait songé à désobéir.",
          "Personne, sauf Line. Line était la plus petite étoile du ciel, si petite que les cartes des marins l'oubliaient, si vive qu'elle clignotait deux fois plus vite que les autres. Quand vint son tour de dormir, elle croisa ses rayons et dit non. « Non, non et non. Si je ferme les yeux, je vais rater quelque chose. Une comète, peut-être. Ou un vœu. Ou le sourire de la Lune. » Les vieilles étoiles soupirèrent, les planètes haussèrent leurs anneaux, et Line resta allumée, toute seule, comme une veilleuse têtue au bord de la nuit.",
          "Or, tout en bas, dans un jardin où l'herbe sentait le soir, un enfant n'arrivait pas à dormir non plus. Il s'appelait Nour, et il comptait les étoiles comme d'autres comptent les moutons. Ce soir-là, il en compta une de trop. Une petite lumière qui tremblait, là-haut, comme tremble une paupière qui lutte. « Toi non plus, tu ne veux pas dormir », murmura Nour. Et voici un secret que je te confie : les étoiles entendent tout ce qu'on murmure aux fenêtres. La petite lumière descendit d'un étage de ciel, puis d'un autre, et vint se poser sur le rebord, pas plus grosse qu'une luciole vexée.",
          "« Je ne dormirai pas », annonça Line en faisant des étincelles. « Jamais. Même pas dans cent ans. » Nour la regarda longtemps. Puis il sourit, du sourire de ceux qui connaissent les rituels du soir : le verre d'eau, la chanson à moitié inventée, la couverture remontée jusqu'au menton. « Alors je vais t'apprendre », dit-il. Ici, l'extrait s'endort, blotti sous cette page comme sous un drap frais ; mais le conte, lui, continue : tu y découvriras les sept gestes qui bordent une étoile, la berceuse que le ciel attendait depuis mille ans, et la vraie raison pour laquelle, chaque nuit, quelqu'un doit chanter là-haut."
        ]
      }
    ]
  }
,

  /* ---------------- THE MONALIZA SALON (vintage art) ---------------- */
  {
    "id": "the-gilded-frame",
    "contents": [
      "The Window That Was Never a Window",
      "Gold Is an Instrument",
      "The Cabinet of Small Wonders",
      "Crimson Walls: The Salon Learns to Argue",
      "North Light and the Painter's Room",
      "The Museum Invents the Visitor",
      "White Walls, Silent Rooms",
      "What the Frame Still Knows"
    ],
    "type": "book",
    "lang": "en",
    "monaliza": true,
    "title": "The Gilded Frame",
    "subtitle": "How frames, light and rooms taught Europe to look at pictures",
    "category": "Art & Beauty",
    "price": 15,
    "rating": 4.7,
    "ratings": 16,
    "pages": 176,
    "readTime": "4h read",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#2A1F12",
      "c2": "#17110A",
      "acc": "#D4B36A",
      "motif": "frame"
    },
    "hook": "Nobody is born knowing how to look at a painting. Europe learned it slowly, in candlelit chapels and crimson salons, and this book retraces the lesson room by room.",
    "desc": [
      "We like to believe that seeing is natural, that a person set before a masterpiece will simply feel its force. History says otherwise. For five centuries Europe built an elaborate apparatus around its pictures: gold frames that gathered candlelight, chapels that made you kneel to see, cabinets that made you lean close, salons that made you argue. The Gilded Frame is the story of that apparatus, and of how the rooms around paintings quietly taught whole generations where to stand, when to hush, and what to feel.",
      "Moving from Florentine gilders' workshops to the velvet crush of the Paris salon and on to the white silence of the modern gallery, the book reads museums the way one reads literature: for plot, for character, for the telling detail. It is researched with care and written to be read in an armchair, and it leaves you with a permanent souvenir. After this book, you will never again see only the picture. You will see the whole patient machinery of looking that surrounds it."
    ],
    "learn": [
      "Why gold frames were machines for light rather than displays of wealth",
      "How the salon hang of Paris trained a century of arguing eyes",
      "What the white walls of the modern gallery quietly ask of you",
      "How to read any museum room like a text before you read a single label"
    ],
    "audience": [
      "Museum lovers who suspect the walls are doing something to them",
      "Readers who prefer rooms, light and human habit to theory and isms",
      "Travelers who plan whole cities around a single collection"
    ],
    "faq": [
      {
        "q": "Do I need a background in art history?",
        "a": "None at all. The book assumes curiosity and a working pair of eyes, and it supplies everything else as it goes."
      },
      {
        "q": "Is it academic?",
        "a": "It is carefully researched but written for the armchair, not the seminar. The notes stay in the back, where they belong."
      },
      {
        "q": "Which places does it visit?",
        "a": "Florence, Amsterdam, Paris and London among others, with detours into private cabinets, a painter's north lit studio, and one very crowded salon of 1785."
      }
    ],
    "chapters": [
      {
        "kicker": "Chapter One",
        "t": "The Window That Was Never a Window",
        "paras": [
          "In 1435, in a treatise slim enough to slip inside a coat, Leon Battista Alberti asked painters to think of a picture as an open window. It was a beautiful lie, and Europe believed it for five hundred years. A window admits whatever the weather sends; a painting admits only what a mind has chosen, weighed and quietly arranged. But the lie was useful, because it told people where to put their eyes. Stand here, said the window. Look through, not at. And so the first lesson in the long education of the European gaze was given by a piece of architecture that never existed.",
          "The frame made the fiction respectable. In Florence and Siena, gilders laid gold leaf thinner than breath over gesso and bole, then burnished it with a wolf's tooth until the surface could hold the flames of a whole chapel in a single molding. We say ornate now and mean it as a mild insult, but ornament was never the point. Gold was an instrument, the way a bell is an instrument. In rooms lit by fire, a gilded frame gathered the trembling light and gave it back, so that the picture seemed to burn gently at its edges, set apart from the wall, from the evening, from the ordinary world that had made it.",
          "The rooms were teachers too, and stricter ones. An altarpiece hung high and hemmed in incense could not be glanced at; to see it at all you knelt and lifted your chin, and the posture of your body became the posture of your attention. Nobody explained that the image was sacred. The height explained it, the smoke explained it, the ache in your tilted neck explained it. Centuries before wall labels and audio guides, architecture was already whispering its instructions, and the whisper worked precisely because no one noticed they were obeying.",
          "This book is a walk through those rooms with the lights of history turned up. It moves from the chapel to the collector's cabinet, from the crimson crush of the Paris salon to the white hush of the modern gallery, asking at every threshold the same quiet question: who taught us to stand like this? By the last page you will not see paintings differently, or not only that. You will begin to notice everything around the painting, the frame, the light, the wall, the room, the whole patient apparatus that has been telling you, all your life, how to look."
        ]
      }
    ],
    "previewCount": 1
  },

  {
    "id": "one-hour-in-a-museum",
    "contents": [
      "Choose One Painting and Forgive the Rest",
      "The First Ten Minutes, or the Fog",
      "How to Stand: A Small Physics of Attention",
      "Questions to Ask a Picture",
      "The Painting Begins to Look Back",
      "Holding Your Ground in a Crowd",
      "Leaving: How to Come Away Changed"
    ],
    "type": "book",
    "lang": "en",
    "monaliza": true,
    "title": "One Hour in a Museum",
    "subtitle": "One painting, sixty minutes and the art of coming away changed",
    "category": "Art & Beauty",
    "price": 12,
    "rating": 4.8,
    "ratings": 27,
    "pages": 128,
    "readTime": "3h read",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#1F262B",
      "c2": "#11161A",
      "acc": "#A8BFC8",
      "motif": "eye"
    },
    "hook": "The average visitor gives a masterpiece less than half a minute. This small book asks for one hour, and shows you what the painting does with it.",
    "desc": [
      "Every lover of museums knows the strange arithmetic of a visit: miles of parquet, hundreds of pictures, sore feet, and a faint hollowness on the way out, as if one had attended a banquet and somehow never eaten. One Hour in a Museum proposes a small act of heresy. Choose a single painting, stay with it for a full hour, and let that hour be the visit. What sounds like penance turns out to be the most generous thing you can do for yourself in a gallery.",
      "This is a practical manual written like an essay, gentle in tone and precise in method. It walks you through the difficult first minutes when boredom argues loudest, teaches you the questions that open a picture without a label or an audio guide, and shows you how to hold your ground politely in a crowded room. By the final chapter the hour no longer feels long. It feels like the only honest unit of looking, and it travels with you out of the museum and into the street."
    ],
    "learn": [
      "A repeatable method for spending a full hour with one painting",
      "What to do in the first ten minutes, when boredom argues loudest",
      "Questions that open a picture without a label or an audio guide",
      "How to leave a museum rested instead of ruined"
    ],
    "audience": [
      "Anyone who has left a great museum exhausted and faintly guilty",
      "Frequent visitors who want depth instead of mileage",
      "Beginners who want one honest hour with art rather than a syllabus"
    ],
    "faq": [
      {
        "q": "Does the method work with any painting?",
        "a": "Yes. It cares about your attention, not the artwork's fame. A minor still life will repay the hour as generously as a celebrated face."
      },
      {
        "q": "Do I really need a full hour?",
        "a": "The book builds up to it gently. Even twenty minutes practiced this way will change how you stand in front of pictures for good."
      },
      {
        "q": "Can I use it in a crowded museum?",
        "a": "That is exactly where it matters most. There is a whole chapter on keeping your spot with grace, and on letting the crowd become part of the picture."
      }
    ],
    "chapters": [
      {
        "kicker": "Chapter One",
        "t": "Choose One Painting and Forgive the Rest",
        "paras": [
          "Researchers armed with stopwatches have followed us through the great museums, and the news is humbling. The average visitor gives a painting somewhere between fifteen and thirty seconds, and a good share of that is spent on the label, hunting for the name, the date, the reassurance that we are looking at something important. We walk miles of parquet, we photograph what we do not stop for, and we exit through the gift shop with sore feet and a strange hollow feeling, as if we had attended a banquet and somehow never eaten. Nobody plans this. It is simply what happens when a building holds five thousand pictures and an afternoon holds three hours.",
          "The remedy is a small act of heresy: choose one painting and let it be the visit. Not the famous one, or not necessarily. Fame draws crowds, and crowds set a rhythm of their own. Walk instead until something snags you, and it will be a snag, not a thunderclap: an odd green, a face turned the wrong way, a shadow that seems to know something. You will feel a faint reluctance to move on, no stronger than a sleeve caught on a nail. That reluctance is the whole secret. Trust the snag. It is your eye telling you, in the only language it has, that there is business between you and this picture.",
          "Then comes the harder part, which is forgiving the rest. The other galleries will hum at your back like unanswered letters, and a voice will remind you that you came all this way, that the famous room is just upstairs, that everyone else is seeing more. Let the voice finish, and stay where you are. A museum is not an examination to be passed. It is closer to a sea, and no one reproaches a swimmer for spending the whole morning in one cove. The collection has waited a few hundred years for you; it can wait until your next visit. Whatever you renounce today, you renounce into safekeeping.",
          "What happens in the hour itself is the subject of this book, and I will not spoil it beyond one promise. Somewhere past the fifteenth minute, when the first boredom has burned off like morning fog, the painting begins to move at your speed instead of demanding that you move at its own. Details arrive one by one, like guests who waited politely to be greeted. The picture stops being an image of something and becomes a place where you have been. And when you finally step back and give your painting a nod, the odd thing is how the rest of the museum looks on your way out: brighter, slower, and suddenly full of coves."
        ]
      }
    ],
    "previewCount": 1
  },

  {
    "id": "letters-to-a-young-painter",
    "contents": [
      "On Beginning Badly",
      "On the Discipline of Seeing",
      "On Copying Without Shame",
      "On Doubt, the Loyal Companion",
      "On Materials and Modest Means",
      "On Failure and the Wastepaper Basket",
      "On Beauty, Since You Ask",
      "On Keeping Going"
    ],
    "type": "book",
    "lang": "en",
    "monaliza": true,
    "title": "Letters to a Young Painter",
    "subtitle": "Letters on craft, doubt and beauty for an artist at the beginning of the road",
    "category": "Art & Beauty",
    "price": 14,
    "rating": 4.9,
    "ratings": 26,
    "pages": 152,
    "readTime": "4h read",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#2B2015",
      "c2": "#19130C",
      "acc": "#C8956A",
      "motif": "quillpen"
    },
    "hook": "Eight letters to an artist at the start of the road: on bad drawings, borrowed courage, honest doubt, and the slow arrival of something like a style.",
    "desc": [
      "A young artist writes to an older painter asking the oldest question in the studio: do I have talent? The answers arrive as eight letters, warm, unhurried and quietly funny, written by someone who has spent a lifetime at the easel and kept every receipt. They speak of the drawer of terrible early drawings that every master hides, of copying without shame, of doubt as a loyal companion rather than an intruder, and of beauty as something you walk toward daily rather than wait for.",
      "This is not a manual of technique, though craft runs through every page like a grain through wood. It is a book about the hand and the heart at the same desk, written for painters, and just as much for writers, musicians and anyone standing at the beginning of a long apprenticeship. Read one letter a week or all eight in an evening; either way, they end where all good letters end, with the feeling of having been personally addressed."
    ],
    "learn": [
      "How to survive the years when your taste outruns your skill",
      "What to copy from the masters, and what to leave in their century",
      "How doubt can be put to work instead of put to sleep",
      "A working definition of beauty you can actually paint toward"
    ],
    "audience": [
      "Beginning painters, and those still circling the courage to begin",
      "Artists in any medium who are tired of advice that shouts",
      "Readers who love the studio letters of older centuries and want new ones"
    ],
    "faq": [
      {
        "q": "Am I too old to be the young painter of the title?",
        "a": "No. Young here means early on the road, and the road does not check birthdays. Several of the letters are kindest to late beginners."
      },
      {
        "q": "Are the letters technical?",
        "a": "They touch on craft constantly but hold no diagrams. Expect advice on seeing, working and enduring rather than on brush numbers."
      },
      {
        "q": "Who writes the letters?",
        "a": "An older painter, composed for this book rather than borrowed from history, whose counsel is distilled from many real studios and many real lives. What matters is the voice, and the voice keeps its promises."
      }
    ],
    "chapters": [
      {
        "kicker": "The First Letter",
        "t": "On Beginning Badly",
        "paras": [
          "You ask, in a letter I have now read three times, whether you have talent, and you ask it the way a patient asks for a diagnosis, bracing for the worst. I will disappoint you at once: I cannot see talent, and neither can anyone else who is honest. At the beginning it does not exist in a visible form. What I can see in your pages is appetite, which is rarer than talent and far more useful, because appetite gets up in the morning. Talent is a rumor other people start about you years later, once the work is done. Do not wait for the rumor.",
          "So begin, and begin badly, because there is no other door. Every painter you admire kept a drawer they showed no one, full of horses like dogs and hands like gloves left out in the rain. The drawer is not the shameful part of the story; it is the story. Those thousand poor drawings are the tuition, paid in the only currency the craft accepts. When your hand betrays you tonight, and it will, do not read it as a verdict. Read it as a receipt. You have paid another day toward an eye and a hand that will one day agree with each other.",
          "As for what to draw, do not go looking for beauty yet; beauty is shy around beginners and it can smell ambition. Draw what is in front of you and beneath your notice. The kitchen chair. Your own left hand, that patient model who works without pay. The coat on the hook, hanging with more sorrow than most martyrdoms manage in oil. If you can be faithful to the chair, faithful to how its shadow pools on the floor and nowhere else in the world, you will have learned the whole trade in miniature. Everything I know about painting saints I learned from furniture.",
          "I will not promise you success, since I have no idea what the word will mean by the time you deserve it. I promise you something better and stranger: the work will change you faster than you change the work. In a year you will see shadows where you now see nothing, and colors inside colors, like rooms opening off a corridor, and you will walk through the ordinary world as if it had been repainted overnight by someone who loved it. That is the wage, and it is paid daily. Write to me again when the paper wins, and it will win often. I will be here."
        ]
      }
    ],
    "previewCount": 1
  },

  {
    "id": "fi-madh-al-jamal",
    "contents": [
      "الجمال يبدأ بالنظر",
      "العين تتربى كما تتربى اليد",
      "فن الوقوف أمام اللوحة",
      "المتحف بيت البطء",
      "دروس الأساتذة القدامى",
      "الضوء رسام أول",
      "جمال الأشياء العادية",
      "خاتمة في مدح البطء"
    ],
    "type": "book",
    "lang": "ar",
    "monaliza": true,
    "title": "في مدح الجمال",
    "subtitle": "تأملات في الفن والنظر وتربية العين",
    "category": "Art & Beauty",
    "price": 13,
    "rating": 4.9,
    "ratings": 28,
    "pages": 136,
    "readTime": "3h read",
    "badges": [
      "new"
    ],
    "cover": {
      "c1": "#291620",
      "c2": "#170C12",
      "acc": "#D9A3B0",
      "motif": "rose"
    },
    "hook": "الجمال لا يطرق الأبواب، بل يمر بهدوء أمام الذين تعلموا النظر. هذا الكتاب دعوة إلى أن تكون منهم.",
    "desc": [
      "هذا كتاب في النظر قبل أن يكون كتابا في الفن. يمضي في فصوله من قاعات المتاحف إلى ضوء الصباح على جدار البيت، وفي يده سؤال واحد: كيف تتعلم العين أن ترى الجمال بدل أن تمر به؟ لا يعد قارئه بمعلومات تحفظ ولا أسماء تستظهر، بل بعادة جديدة في الالتفات، تجعل اللوحة العتيقة والشارع المألوف سواء في القدرة على المفاجأة.",
      "كتب بلغة عربية تحب البطء وتصغي إلى الإيقاع، واستأنس بدروس الأساتذة القدامى من غير أن يثقل على قارئه بمصطلح أو حاشية. هو رفيق قصير للمتحف والمقهى والليل، يقرأ على مهل ويعاد إليه كما يعاد إلى الأماكن التي أحسنت ضيافتنا."
    ],
    "learn": [
      "كيف تقف أمام لوحة واحدة فلا تغادرها كما جئت",
      "لماذا تعلم القدامى الرؤية قبل أن يتعلموا الرسم",
      "كيف يتحول المتحف من واجب ثقافي إلى موعد شخصي",
      "كيف تقتنص عينك الجمال في يوم عادي تماما"
    ],
    "audience": [
      "لمحبي الفن الذين يبحثون عن لغة عربية تليق به",
      "لزوار المتاحف الذين يخرجون دائما بإحساس أن شيئا فاتهم",
      "لكل من يريد أن يبطئ قليلا في عالم لا يتوقف"
    ],
    "faq": [
      {
        "q": "هل أحتاج إلى معرفة مسبقة بتاريخ الفن؟",
        "a": "لا. يكفي أن تكون ممن يستوقفهم الجمال أحيانا ولا يعرفون لماذا. الكتاب يتكفل بالباقي."
      },
      {
        "q": "هل هو كتاب أكاديمي؟",
        "a": "هو تأمل أدبي يكتب بلغة قريبة، ويمشي مع قارئه كما يمشي صديق عارف، من غير حواش ولا مصطلحات ثقيلة."
      },
      {
        "q": "هل يقتصر على الفن الغربي؟",
        "a": "ينطلق من قاعات المتاحف الكبرى ويعود دائما إلى الضوء القريب: إلى الخط والزخرفة والظل في البيوت القديمة وجمال اليومي العربي."
      }
    ],
    "chapters": [
      {
        "kicker": "الفصل الأول",
        "t": "الجمال يبدأ بالنظر",
        "paras": [
          "يظن كثيرون أن الجمال صفة في الأشياء وحدها، كاللون والوزن والطول، وأنه ينتظرنا في اللوحات والحدائق وواجهات المدن كما ينتظر الكنز من يحفر. والحق أن الجمال نصفه في الشيء ونصفه الآخر في العين التي تنظر إليه. الوردة نفسها تمر بها يد مستعجلة فتكون زهرة من جملة الزهر، وتقف أمامها عين متأنية فتصير حادثة صغيرة من حوادث الضوء. لم يتغير في الوردة شيء، وإنما تغير مقدار ما أعطيناها من أنفسنا. ولهذا كان النظر، في حقيقته، عطاء قبل أن يكون أخذا.",
          "والعين تتربى كما تتربى اليد على الخط والأذن على المقام. لم يولد أحد عارفا بالنظر، وإن ولدنا جميعا مبصرين. كان الرسامون القدامى يقضون سنوات في الورشة قبل أن يمسوا اللون، ينسخون ويحدقون ويخطئون، لا ليتعلموا الرسم أولا، بل ليتعلموا الرؤية. فالرؤية صنعة خفية تسبق كل صنعة ظاهرة. ومن دربت عينه على تمييز ظل عن ظل، ودرجة من درجة، صار العالم في ناظريه أغنى مما كان، من غير أن يزداد العالم شيئا.",
          "وفي المتاحف درس لا يعلمه غيرها: أن تقف. نحن نمشي في حياتنا كلها، نمر بالوجوه والجدران والغيوم مرور من يطارده الوقت، حتى إذا دخلنا قاعة هادئة ووقفنا أمام لوحة، حدث الشيء النادر: توقفنا. والوقوف أمام الجمال ليس خمولا، بل هو أشد ضروب الانتباه يقظة. دقيقة صادقة أمام لوحة عتيقة قد تفتح فيك نافذة ظلت موصدة أعواما. فالصورة لا تتكلم لمن يمر، وإنما تبوح لمن يقيم.",
          "هذا الكتاب مديح طويل لتلك الوقفة. لن تجد فيه تواريخ تحفظ ولا أسماء تستظهر، بل دعوة واحدة تتكرر في كل فصل بصيغة جديدة: أبطئ. انظر مرة ثانية. أعط الشيء الجميل ما يستحقه من وقتك، يعطك ما لا تتوقعه من نفسك. ومن تعلم النظر مرة واحدة لم يعد يرى العالم كما كان يراه، لأن العين التي عرفت الجمال لا تعود أبدا إلى عماها الأول."
        ]
      }
    ],
    "previewCount": 1
  }

  ]
};

/* Convenience lookups */
ZK.byId = function (id) { return ZK.products.find(p => p.id === id); };
ZK.fmt = function (n) { return "$" + (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, ""); };
