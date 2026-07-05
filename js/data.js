/* =========================================================
   ZOKARIO — catalogue
   Products, preview chapters, coupons. Single source of truth.
   ========================================================= */

const ZK = {

  coupons: {
    WELCOME10: { pct: 10, label: "Welcome offer — 10% off" },
    READERS15: { pct: 15, label: "Private reading list — 15% off" }
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
    subtitle: "A calmer way to think about money — the habits, systems, and numbers that actually matter.",
    category: "Business & Money",
    price: 19, oldPrice: 26,
    rating: 4.9, ratings: 214,
    pages: 184, readTime: "4½ hours",
    badges: ["bestseller", "featured"],
    cover: { c1: "#25301F", c2: "#131A10", acc: "#D9C28C", motif: "ledger" },
    hook: "Money stops being stressful the moment you can see it clearly.",
    desc: [
      "Most money advice is loud. It promises speed, shortcuts, and a version of wealth that looks good on a screen. The Quiet Ledger takes the opposite position: that financial calm is built slowly, in private, from a small set of habits repeated without drama.",
      "Across twelve chapters, it walks you from the psychology of spending to a working personal system — one ledger, one weekly review, one set of numbers you actually understand. No jargon, no hype, no pretending a spreadsheet will change your life. Just structure, applied gently, until money becomes something you direct instead of something you fear."
    ],
    learn: [
      "Why most budgets fail within six weeks — and the review ritual that doesn't",
      "The four numbers that describe your entire financial life",
      "How to design a spending system that runs on ten minutes a week",
      "A calm framework for debt, saving, and long-horizon investing",
      "How to talk about money without tension — with yourself and others"
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
      { q: "Does it cover investing?", a: "One full chapter introduces long-horizon investing principles — calmly and without stock tips. It is a book about systems, not speculation." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library on any device." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Chapter One", t: "The Noise Around Money", paras: [
        "There is a particular kind of tiredness that comes from money. Not from the lack of it — although that has its own weight — but from the constant, low-frequency hum of not quite knowing. Not knowing what was spent, not knowing what is left, not knowing whether the plan, if there ever was a plan, is working. Most people carry this hum for years and call it normal.",
        "The financial industry has little interest in turning the volume down. Noise is profitable. Urgency sells subscriptions, apps, courses, and eleven different accounts you will forget to check. So the advice arrives loud: optimise everything, track everything, feel vaguely guilty about coffee. And when the system collapses — because systems built on guilt always collapse — the industry sells you a new one.",
        "This book begins from a different premise: that your relationship with money improves in proportion to how quiet it becomes. Clarity is quiet. A number you trust is quiet. A decision you have already made once, well, and never need to revisit — that is the quietest sound in personal finance.",
        "So we will not begin with a budget. We will begin with a ledger — a single, honest record of what is true. Not what should be true, not what you wish were true in your more optimistic moments. What is. It takes most readers under an hour to build, and it is the last dramatic thing this book will ask of you."
      ]},
      { kicker: "Chapter Two", t: "What a Ledger Really Is", paras: [
        "Before spreadsheets, before banks, before money itself in any form you would recognise, people kept ledgers. Clay tablets in Mesopotamia recorded grain owed and grain delivered. The technology has changed; the human need has not. A ledger is simply a place where the truth is written down so that it no longer has to be remembered, argued with, or feared.",
        "Notice what a ledger is not. It is not a forecast. It is not a judgement. It does not care what you intended to spend in March. It records what happened, and in doing so it performs a small act of mercy: it separates you from your money. You are not the number. You are the person reading the number.",
        "Your ledger will have four lines, and we will spend the next chapter on them properly. For now, only this: everything you have, everything you owe, everything that arrives in a month, everything that leaves. Four lines. Most people have never seen all four written in the same place, and the first time they do, something in the shoulders lets go."
      ]},
      { kicker: "Chapter Three", t: "The Four Numbers", paras: [
        "Own, owe, in, out. Every financial instrument ever devised — every mortgage, index fund, credit card, and pension — is a variation on these four movements. When you know your four numbers, financial news becomes translation instead of intimidation.",
        "In this chapter we calculate each one with actual figures, handle the accounts you have been avoiding, and set the review rhythm that keeps the numbers honest without demanding your evenings."
      ]},
      { kicker: "Chapter Four", t: "Designing the Weekly Review", paras: [
        "Ten minutes, once a week, at a time you already like. The weekly review is the engine of this entire system, and this chapter builds yours: what to check, what to ignore, what to write down, and how to end every review with one decision instead of ten anxieties.",
        "You will also meet the two-list method for irregular expenses — the birthdays, repairs, and renewals that ambush ordinary budgets — and learn why the review works best when it is slightly boring."
      ]},
      { kicker: "Chapter Five", t: "Spending Without Guilt", paras: [
        "A spending plan that requires you to become a different person is not a plan; it is a wish. This chapter draws the line between the spending that is quietly building your life and the spending that is quietly renting your attention — and shows you how to fund the first kind without ceremony.",
        "Guilt, it turns out, is a terrible accountant. Structure is better."
      ]},
      { kicker: "Chapter Six", t: "Saving as Architecture", paras: [
        "Savings fail when they depend on willpower and succeed when they depend on plumbing. Here we design the account structure — buffers, horizons, and the order in which money flows — so that saving happens before you have the chance to be human about it.",
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
      "You do not have an attention problem. You have an attention environment problem — a phone, a feed, an open-plan calendar, and a culture that treats interruption as collaboration. Deep Focus is a field guide to rebuilding the conditions under which real thinking happens.",
      "It is deliberately practical. Every chapter ends in something you can change the same day: a room, a ritual, a default, a sentence you say to protect an hour. The result is not a productivity system. It is something quieter and more valuable — the returned ability to sit with one difficult thing until it gives."
    ],
    learn: [
      "The three-layer model of attention, and where yours actually leaks",
      "How to build a daily deep block that survives real life",
      "Environment design: rooms, screens, and defaults that protect thought",
      "The art of the graceful no — scripts for meetings, messages, and asks",
      "How to recover focus after it breaks, without losing the day"
    ],
    audience: [
      "Knowledge workers whose calendar owns them",
      "Writers, developers, designers — anyone paid to think in long arcs",
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
      { q: "How long are the chapters?", a: "Ten chapters, each readable in 20–25 minutes, each ending with one concrete change." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Chapter One", t: "The Interruption Economy", paras: [
        "Somewhere in the last fifteen years, being reachable became a moral obligation. The message arrives, the badge glows, and a small social contract activates: someone wants you, and wanting is urgent. It took a decade of design brilliance to make ignoring a notification feel like rudeness. It was not an accident. It was a business model.",
        "The economics are simple. Your sustained attention is worth more to you than to anyone else — a focused hour compounds into skill, work, and thought that belongs to you. But your fragmented attention is worth more to everyone else. Fragments can be sold. And so a trillion-dollar industry exists to convert the first kind into the second, thirty seconds at a time.",
        "The good news hides inside the bad: because the assault on attention is designed, it can be un-designed. Focus is not a personality trait you missed out on. It is a set of conditions, and conditions can be built. This book is about building them — deliberately, humanely, and without pretending you can live outside the modern world.",
        "We begin with an honest audit. Not of your willpower — of your environment. For one ordinary day, you are going to count interruptions the way an accountant counts expenses, and the number will annoy you into the rest of this book."
      ]},
      { kicker: "Chapter Two", t: "Three Layers of Attention", paras: [
        "Attention is not one thing. There is the surface layer — the flicking, scanning, triaging mode that gets you through email and traffic. There is the middle layer, where meetings and conversations live. And there is the deep layer: the slow, expensive, gloriously productive state where hard problems actually move.",
        "Modern work has quietly reorganised itself around the first two layers. The deep layer, the only one where your most valuable output happens, is treated as a luxury — something you get to after the messages, which means never. The deepest layer of your working mind has been rescheduled to a time that does not exist.",
        "The rest of this book is a reclamation project, and it starts with a rule so simple it sounds like a trick: the deep layer gets scheduled first, or it does not happen. Not longer hours. Earlier ownership."
      ]},
      { kicker: "Chapter Three", t: "The Deep Block", paras: [
        "One block, most days, ninety minutes, one difficult thing. This chapter builds the ritual around it — the start cue, the shutdown, the door policy — and shows why consistency beats heroism every single week.",
        "You will also learn the two-minute entry ritual that eliminates the worst part of deep work: the cold start."
      ]},
      { kicker: "Chapter Four", t: "Rooms That Think With You", paras: [
        "Your environment votes on your behaviour before you do. Here we design the physical setup — light, sound, sight-lines, and the single-purpose corner — that makes depth the path of least resistance.",
        "It costs less than you think. Most of it is subtraction."
      ]},
      { kicker: "Chapter Five", t: "The Graceful No", paras: [
        "Every yes is a scheduling decision made on behalf of your future self, usually without consulting them. This chapter provides the scripts — kind, firm, reusable — for declining meetings, deferring messages, and negotiating response times without spending social capital you don't have.",
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
      "The morning routine industry sold us a fantasy of ice baths and hour-long journaling sessions — routines designed to be photographed, not lived. The Morning Architecture starts somewhere more honest: with the morning you actually have, the energy you actually wake with, and the one or two moves that genuinely change a day's trajectory.",
      "Built around a simple framework — anchor, fuel, direction — the book helps you construct a morning that fits inside real life: kids, commutes, night-owl chronotypes and all. Architecture, not performance."
    ],
    learn: [
      "The anchor-fuel-direction framework for any schedule",
      "Why the first decision of the day matters more than the first hour",
      "Chronotypes: designing with your biology instead of against it",
      "The 15-minute minimum viable morning for chaotic seasons",
      "Evening staging — how tonight quietly builds tomorrow"
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
        "Here is what the genre never mentions: almost none of it survives contact with an actual life. A teething baby dissolves the ice bath. A late shift erases the sunrise walk. And when the routine breaks — because routines built for cameras always break — it takes your confidence down with it, as if you failed the morning rather than the morning failing you.",
        "This book proposes something less photogenic and far more durable. A morning is not a performance; it is a piece of architecture. It has load-bearing elements and decorative ones, and the art is knowing the difference. Strip away everything aspirational and three functions remain: something that anchors you, something that fuels you, and something that points you. Everything else is furniture.",
        "Anchor, fuel, direction. Fifteen minutes can hold all three. So can ninety, luxuriously. The chapters ahead build each element for your actual constraints — and teach you to rebuild fast in the seasons when life redraws the plans."
      ]},
      { kicker: "Chapter Two", t: "Anchor, Fuel, Direction", paras: [
        "An anchor is any action that tells your nervous system the day has begun on your terms. It must be small, repeatable, and yours. Making the bed counts. Sitting with coffee before any screen counts. The anchor's job is not self-improvement; it is sovereignty — a five-minute claim staked on the day before the world files its requests.",
        "Fuel is bluntly physical: light, water, movement, food, in whatever combination your body responds to. Not a wellness protocol — a pit stop. Ten minutes of honest fuel outperforms an hour of aesthetic ritual.",
        "Direction is the piece almost everyone skips: one clear-eyed look at the day and one sentence about what would make it a good one. Not a plan. A heading. Days with headings bend toward them; days without get bent by whoever emails first."
      ]},
      { kicker: "Chapter Three", t: "The First Decision", paras: [
        "The first decision of most modern mornings is made by a notification. This chapter is about taking that decision back — the phone protocols that work for people who genuinely need their phones, and the surprising downstream effects of a first hour with no inputs.",
        "You will design your own 'first decision' and place it where you cannot miss it."
      ]},
      { kicker: "Chapter Four", t: "The Minimum Viable Morning", paras: [
        "Some seasons allow ninety-minute mornings. Some allow fifteen, interrupted twice. This chapter builds your MVM — the smallest version that still delivers anchor, fuel, and direction — so that hard seasons bend the routine without breaking it.",
        "Later chapters cover evening staging, shared households, and the 90-day build that turns architecture into habit."
      ]}
    ]
  },

  {
    id: "fuel",
    type: "book",
    title: "Fuel",
    subtitle: "Eating for steady energy — a practical system for people who don't want food to be complicated.",
    category: "Health & Fitness",
    price: 16, oldPrice: 21,
    rating: 4.8, ratings: 173,
    pages: 170, readTime: "4 hours",
    badges: [],
    cover: { c1: "#33251C", c2: "#170F0A", acc: "#D8A96B", motif: "fuel" },
    hook: "Stop eating for rules. Start eating for energy.",
    desc: [
      "Diet culture gave food a morality. Fuel gives it back a function. This is a book about eating for the thing you actually want — steady, reliable energy across a working day — written for people exhausted by contradiction and cleanses.",
      "It builds a personal eating system from evidence and repetition: default meals, honest grocery patterns, and the small experiments that reveal what your body runs well on. No foods are forbidden. No mornings begin with guilt."
    ],
    learn: [
      "The energy-first framework: judging food by how the afternoon feels",
      "Default meals — why deciding once beats deciding daily",
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
      { q: "Does it include recipes?", a: "It includes default meal templates rather than recipes — flexible patterns you can fill with foods you already like." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Chapter One", t: "The Morality of Food", paras: [
        "Somewhere along the way, eating acquired a conscience. Foods became good or bad, clean or dirty; a slice of cake stopped being dessert and became a confession. And an entire industry grew up around managing the guilt it had first manufactured — a diet for every deadly sin.",
        "The strange result is that we now know more about nutrition than any generation in history and feel worse about eating than any of them. Knowledge was never the missing piece. A cease-fire was.",
        "This book proposes one question to replace the moral audit: how do you want to feel at four in the afternoon? Not thinner, not virtuous — functional. Awake. Even. When energy becomes the metric, food gets simpler almost immediately, because your body starts giving you data instead of verdicts.",
        "We will build the system slowly: a handful of default meals, a grocery rhythm, one month of small experiments. By the end, food should take up less space in your head — which, you may discover, was the goal all along."
      ]},
      { kicker: "Chapter Two", t: "Energy First", paras: [
        "Track nothing except how you feel two hours after eating. That is the entire diagnostic method of this book, and it outperforms most apps because it measures the only output you actually care about.",
        "This chapter explains the physiology just deeply enough to be useful — why the enormous lunch mugs you, why the pastry breakfast writes a cheque the afternoon has to cash — and then turns it into a simple plate pattern you can apply anywhere food is served.",
        "No arithmetic. No scanning barcodes. Just a working model of your own machinery, refined by attention."
      ]},
      { kicker: "Chapter Three", t: "Default Meals", paras: [
        "Decision fatigue, not appetite, is what breaks most eating intentions. This chapter builds your set of default meals — five breakfasts, five lunches, five dinners you genuinely like — and shows how defaults free you to be adventurous when it's worth it.",
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
      "On the island of Brenholm, the lighthouse was switched off the year the shipping lanes moved. Everyone left. Maren stayed — climbing the tower each night to light a lamp for ships that no longer come, in memory of one that never arrived.",
      "When a stranger washes ashore with a decades-old letter in a waterproof case, Maren's private ritual becomes something else: an unfinished story demanding an ending. The Last Lighthouse is a quiet, luminous novel about grief, stubbornness, and the strange forms loyalty takes — written in prose as spare and steady as the light itself."
    ],
    learn: [],
    audience: [
      "Readers of quiet literary fiction — Claire Keegan, Kent Haruf, Amor Towles",
      "Anyone drawn to islands, weather, and slow revelations",
      "Book clubs that like their endings discussed, not resolved",
      "Readers who underline sentences"
    ],
    contents: [
      "Part One — The Keeper", "Part Two — The Letter", "Part Three — The Crossing", "Part Four — What the Light Was For"
    ],
    faq: [
      { q: "How long is the novel?", a: "About 236 pages — a deliberate, single-sitting-tempting read of roughly six hours." },
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
        "He was alive, which complicated things. The dead she knew how to receive — the island had taught her the full liturgy of that. But the man on the shingle was breathing in long ragged pulls, one hand closed so tightly around a scratched orange case that she had to prise his fingers back one by one, apologising to each of them, before she could get him onto the sledge.",
        "The case she put on the kitchen table while he slept in her brother's bed, in her brother's unworn thirty-two-year-old sweater, because some economies of grief are simply practical. She did not open it. It had a latch and a rubber seal and the particular self-importance of something meant to survive what its owner might not, and she sat across from it most of the night, drinking tea gone cold, aware that she was afraid of a plastic box and unable to laugh herself out of it.",
        "At four in the morning the stranger spoke from the doorway, in an accent she couldn't place and a voice like dragged shingle. 'You're her,' he said. 'The keeper. The one who kept it burning.' He nodded at the case as though it had introduced them. 'Then that belongs to you. I've been trying to deliver it for nine years.'"
      ]},
      { kicker: "Part Two", t: "The Letter", paras: [
        "The letter inside was dated the third of April, thirty-two years ago — four days after the Signe went down with all hands, three days after the sea had officially stopped looking, and one day before Maren had lit the lamp for the first time against every regulation in the book.",
        "It was in her brother's handwriting. It was addressed to her. And it began with the seven words that would take the rest of the novel, and the rest of her, to answer: 'If you are reading this, keep going—'"
      ]},
      { kicker: "Part Three", t: "The Crossing", paras: [
        "To finish what the letter started, Maren must do the one thing thirty-two years of keeping faith never required of her: leave the island, cross the water her brother did not, and knock on a door in a city that believes she died with the rest of Brenholm.",
        "Tomas offers to take her. His reasons, like his boat, are borrowed and patched — and the crossing will demand the truth about both."
      ]}
    ]
  },

  {
    id: "slow-cities",
    type: "book",
    title: "Slow Cities",
    subtitle: "Essays on travelling at the speed of noticing — eleven cities, unhurried.",
    category: "Travel & Lifestyle",
    price: 14,
    rating: 4.7, ratings: 129,
    pages: 198, readTime: "5 hours",
    badges: ["new"],
    cover: { c1: "#2E2A22", c2: "#15120C", acc: "#D9BE8C", motif: "arch" },
    hook: "You can cross a city in an hour, or you can let one cross you.",
    desc: [
      "The itinerary said four days for Lisbon; the writer stayed five weeks. Slow Cities is a collection of eleven essays about what happens when you stop consuming cities and start keeping them company — written against the checklist, the queue, and the photograph taken instead of the look.",
      "From a Kyoto neighbourhood at bath-time to a Mexico City market at dawn, these essays are less about where to go than how to be there. A travel book for people who suspect the point was never the landmarks."
    ],
    learn: [
      "The art of the aimless first day",
      "How to find a city's daily rhythms — and fold yourself into them",
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
      { q: "Is this a guidebook?", a: "No — there are no hotel picks or maps. It is a book of essays about a way of travelling, useful before any trip to anywhere." },
      { q: "Can I read the essays out of order?", a: "Absolutely. Each stands alone; the final essay is the only one best saved for last." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Essay One", t: "Lisbon, on Foot", paras: [
        "I missed the tram on purpose on the third morning, which is the exact moment the trip began. The 28 is a beautiful tram and everyone should ride it once, ideally at seven before the queue outnumbers the city. But a tram is a sentence read aloud at speed, and Lisbon is a book that wants you to move your lips.",
        "On foot, the city reorganises itself around smaller units: the tiled doorway repainted in a slightly wrong blue, the grocer who stacks oranges like a man with opinions about oranges, the laundry line that crosses four centuries of architecture without asking permission of any of them. None of this is on the itinerary. All of it is the city.",
        "By the second week I had a café where the coffee arrived without ordering, which is not a transaction — it is a minor citizenship. And I had learned Lisbon's first lesson, the one the hills teach your calves and the widows teach the afternoon: that arrival is not an event but a practice, and most of us leave three days before it happens.",
        "This is a book about staying past that point. Eleven cities, no checklists, one method: walk until the city stops performing and starts living, then keep walking."
      ]},
      { kicker: "Essay Two", t: "Kyoto at Bath-Time", paras: [
        "The guidebooks send you to Kyoto's temples at dawn, and the guidebooks are right, and that is the problem — everyone holding the same book arrives at the same silence and evaporates it together. I found my Kyoto at the opposite end of the day, at the neighbourhood sentō, where the entire street goes at seven to sit in very hot water and say almost nothing.",
        "You cannot photograph a public bath, which is precisely what saved it. Whatever a place forbids the camera, it keeps for the participants. An hour in that water taught me more about the city's actual texture — its codes of nearness and distance, its genius for shared solitude — than three days of shrines.",
        "The old man who finally spoke to me asked one question: how long was I staying? A month, I said. He nodded at the water. 'Then you have time to come back tomorrow.' It was the entire philosophy of this book, issued from a bath."
      ]},
      { kicker: "Essay Three", t: "Naples Doesn't Care", paras: [
        "Naples is the only city in this book that will not notice whether you visit, and there is a specific liberation in that. This essay is about travelling in places that refuse to perform — and about the best pizza of my life, eaten standing, watched by a dog with no interest in my enlightenment.",
        "The remaining essays cross eight more cities before the last one turns for home, and asks what all this slowness is for."
      ]}
    ]
  },

  {
    id: "thinking-with-machines",
    type: "book",
    title: "Thinking With Machines",
    subtitle: "A practical guide to working alongside intelligent tools — without losing your judgement.",
    category: "AI & Technology",
    price: 21, oldPrice: 28,
    rating: 4.8, ratings: 197,
    pages: 206, readTime: "5 hours",
    badges: ["featured", "new"],
    cover: { c1: "#20242E", c2: "#101218", acc: "#C9B283", motif: "nodes" },
    hook: "The tools are astonishing. Your judgement is still the product.",
    desc: [
      "A new class of tools can draft, summarise, code, and reason. Most advice about them swings between panic and worship. Thinking With Machines takes a third position: these are instruments, and instruments reward technique.",
      "Written for professionals rather than technologists, it covers the working methods — delegation, verification, taste — that separate people who use intelligent tools well from people who merely use them. The thesis is simple: machines are becoming excellent at answers. The leverage moves to whoever asks the better questions and edits with the better judgement."
    ],
    learn: [
      "A mental model of what these tools actually do — no math required",
      "The delegation ladder: what to hand over, what to keep",
      "Verification habits that catch confident nonsense",
      "How to keep your own skills sharpening rather than atrophying",
      "Where this is heading — a sober look past the headlines"
    ],
    audience: [
      "Professionals integrating AI tools into real work",
      "Managers deciding what these tools mean for their teams",
      "Writers, analysts, developers — anyone whose craft is thinking",
      "Sceptics and enthusiasts who both deserve better arguments"
    ],
    contents: [
      "What the Machine Is Doing", "The Delegation Ladder", "Prompting Is Editing",
      "Verification as a Habit", "Taste, the Unautomatable", "Your Skills Under Automation",
      "Teams and Tools", "The Honest Limits", "Working Futures", "A Craftsman's Position"
    ],
    faq: [
      { q: "Do I need a technical background?", a: "None. The book explains the machinery with analogies, then focuses on working methods anyone can apply." },
      { q: "Will this date quickly?", a: "The tools chapter will age; the methods — delegation, verification, taste — are designed to outlast product cycles, and the book is updated when it matters." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library, including updated editions." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Chapter One", t: "What the Machine Is Doing", paras: [
        "Every powerful tool arrives with two crowds already shouting: one insisting it changes everything, the other insisting it changes nothing real. The printing press had both. So did the spreadsheet. While the crowds argue, a third group quietly learns the tool and takes a decade's advantage. This book is for the third group.",
        "You do not need to understand the mathematics of these systems any more than a pilot needs to machine a turbine blade. You need a working model — honest about capability, honest about failure modes. Here is the one this book builds on: you are working with a brilliant, tireless, extremely well-read collaborator who has no stake in being right. The eloquence is real. The indifference is too. Every technique in the chapters ahead follows from holding both facts at once.",
        "Treat it as an oracle and you will eventually publish its mistakes under your name. Treat it as a toy and you will hand your advantage to whoever didn't. Treat it as an instrument — learn its range, its failure notes, its response to your phrasing — and something remarkable happens: it starts returning work that is better than either of you would produce alone.",
        "The difference between those outcomes is not the tool. It is technique. Technique is teachable, and that is what this book is for."
      ]},
      { kicker: "Chapter Two", t: "The Delegation Ladder", paras: [
        "The single most useful question of the next decade of knowledge work: what, exactly, should you hand over? Delegate too little and you are doing arithmetic by hand out of pride. Delegate too much and your judgement — the thing you are actually paid for — begins to quietly dissolve.",
        "This chapter builds the ladder. At the bottom: work where errors are cheap and obvious — formatting, first-pass summaries, boilerplate. Hand it over completely. In the middle: drafting and analysis, delegated with review, where the machine proposes and you dispose. At the top: decisions, positions, anything with your name on it. There the machine advises; it never signs.",
        "The rungs will move as the tools improve. The ladder itself will not. Knowing which rung a task belongs to is becoming a core professional skill — as basic, and as revealing, as knowing what to put in an email versus a meeting."
      ]},
      { kicker: "Chapter Three", t: "Verification as a Habit", paras: [
        "The machine's most dangerous property is not that it is wrong; everything is sometimes wrong. It is that it is wrong fluently. This chapter installs the checking habits — source-tracing, reversal tests, the two-minute sanity pass — that catch confident nonsense before it ships.",
        "Later chapters take up taste, skill preservation, teams, and a clear-eyed reading of where this is all going — without the panic, without the worship."
      ]}
    ]
  },

  {
    id: "the-honest-table",
    type: "book",
    title: "The Honest Table",
    subtitle: "The conversations that hold people together — and how to stop avoiding them.",
    category: "Relationships",
    price: 15,
    rating: 4.9, ratings: 168,
    pages: 156, readTime: "4 hours",
    badges: [],
    cover: { c1: "#33222A", c2: "#170D12", acc: "#DBB98E", motif: "rings" },
    hook: "Every relationship has a table. The question is what stays unsaid across it.",
    desc: [
      "Most relationships don't break loudly. They erode — one unsaid thing at a time, one changed subject, one 'it's fine' that wasn't. The Honest Table is about the conversations that reverse erosion: how to open them, survive them, and come out closer on the other side.",
      "Drawing on conflict research and long clinical practice traditions, it offers scripts without being robotic and honesty without cruelty. For partners, families, and the friendships too old to lose."
    ],
    learn: [
      "The anatomy of an avoided conversation — and its compounding cost",
      "Openers that lower defences instead of raising them",
      "How to hear hard things without leaving or exploding",
      "Repair: the skill that predicts whether relationships last",
      "When honesty needs a witness — and when it needs a pause"
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
      { q: "Is this only for romantic relationships?", a: "No — the frameworks apply equally to family, friendship, and even working relationships. Examples are drawn from all four." },
      { q: "Is it script-based?", a: "It offers language to start from, then teaches the principles underneath so your own words can take over." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 2,
    chapters: [
      { kicker: "Chapter One", t: "The Cost of Unsaid Things", paras: [
        "Every relationship keeps two ledgers. The first records what happens: anniversaries, arguments, holidays, the events you could reconstruct from photographs. The second ledger is quieter. It records what almost happened — the sentence rehearsed in the car and swallowed at the door, the subject changed with practised smoothness, the 'it's fine' issued like a receipt for a transaction that never took place.",
        "The second ledger is the one that decides things. Not because the unsaid things are dramatic — most are startlingly small — but because they compound. An unsaid thing does not stay the same size. It gathers interpretations. It recruits evidence. Left long enough, it stops being a sentence and becomes a lens, and then two people are looking at the same marriage through different instruments, wondering why they can no longer describe what they see to each other.",
        "This book is about settling the second ledger — deliberately, kindly, and much earlier than feels comfortable. The work is harder than avoidance in the moment and immeasurably cheaper over a decade.",
        "We begin with why avoidance feels so rational from the inside. Because it does — and until you respect the logic of silence, you cannot argue yourself out of it."
      ]},
      { kicker: "Chapter Two", t: "Why We Avoid", paras: [
        "Nobody avoids a hard conversation out of laziness. We avoid because some part of us has run the projection and concluded the relationship cannot afford the collision — that raising the thing risks the whole structure. Avoidance is almost always loyalty, badly invested.",
        "The projection, however, is usually wrong in a specific direction: it prices the conversation at its worst possible outcome and prices the silence at zero. Silence is never zero. This chapter teaches you to price it honestly — and introduces the distinction the whole book turns on, between conversations that are dangerous and conversations that are merely uncomfortable.",
        "Most of the ones you are avoiding are the second kind wearing the first kind's coat."
      ]},
      { kicker: "Chapter Three", t: "Setting the Table", paras: [
        "Where, when, and how a hard conversation begins predicts most of how it ends. This chapter covers the staging: timing, territory, the sentence before the sentence, and why the car and the kitchen out-perform the sit-down summit.",
        "The chapters that follow move through the conversation itself — openers, staying present, repair, apology — and end with tables that stay honest for good."
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
      "A night-shift nurse who has started receiving other people's dreams. A lighthouse converted to a bed-and-breakfast where one guest refuses to check out. A translator hired to interpret a language only two people ever spoke. Night Pages collects nine stories built for the last hour of the day — strange, humane, and quietly luminous.",
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
      { q: "What genre is this?", a: "Literary with a thin silver thread of the strange — closer to fable than fantasy." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Story One", t: "The Dream Ledger", paras: [
        "The first dream that did not belong to her arrived on a Tuesday, filed neatly between two of her own, the way a mis-sorted letter arrives in an otherwise ordinary post. Ines knew it was foreign the moment she woke: it was a dream of deep-sea fishing, and she had never seen the ocean, and the hands hauling the nets in the dream were a man's hands, scarred across the knuckles in a pattern as specific as handwriting.",
        "She was a night nurse on the geriatric ward, which meant she slept while the city worked and woke while it softened, and perhaps, she reasoned, that borderline schedule had left a window open somewhere. She started the notebook the same week — patient, unsurprised, the way she charted everything — one page per dream that wasn't hers. The scarred hands appeared four more times. Then came a dream of a wedding in a language she almost recognised, and a dream of standing in a childhood kitchen she had never stood in, straining to reach a blue tin on a high shelf.",
        "It was the blue tin that undid her calm, because three weeks later she saw it — the same tin, the same worn dent at the corner — on the bedside table of the new admission in bed nine, an old fisherman with scarred knuckles who had not woken since his stroke, and who was, according to the chart, dreaming of nothing at all.",
        "Ines sat down slowly in the visitor's chair, opened her notebook, and began, for the first time, to read someone their own dreams back."
      ]},
      { kicker: "Story Two", t: "Vacancy", paras: [
        "The lighthouse had been a bed-and-breakfast for nine years, and Mr. Aldous had been in the lamp room for all of them. He paid monthly, in advance, by cheques drawn on a bank Hedda could never quite find in any registry, and he asked for only two things: that no one else be given the lamp room, and that the light — decorative now, a heritage fitting on a dimmer — never be switched fully off.",
        "The story of why is the story of what Hedda finds the one night the storm cuts the power — and of what has been navigating, all these years, by a light everyone agreed was only for show."
      ]}
    ]
  },

  {
    id: "the-compound-path",
    type: "book",
    title: "The Compound Path",
    subtitle: "Patience as a strategy — investing principles for people playing the long game.",
    category: "Business & Money",
    price: 18,
    rating: 4.8, ratings: 145,
    pages: 178, readTime: "4½ hours",
    badges: [],
    cover: { c1: "#2A2E1E", c2: "#13160D", acc: "#D4BC85", motif: "steps" },
    hook: "The market rewards temperament. This book trains it.",
    desc: [
      "Everyone knows compounding is powerful. Almost no one can sit still long enough to receive it. The Compound Path is a book about the sitting still — the principles, structures, and self-knowledge that let ordinary investors capture extraordinary mathematics.",
      "It contains no stock picks and no forecasts. Instead: how markets reward patience, why your own behaviour is the main risk in your portfolio, and how to build an investing life boring enough to survive four decades. Companion to The Quiet Ledger, and readable alone."
    ],
    learn: [
      "The arithmetic of compounding, felt rather than recited",
      "Why behaviour beats selection — the evidence, plainly told",
      "Building the boring portfolio: structure over cleverness",
      "Market falls: a field guide to your own reactions",
      "The forty-year view — investing as inheritance to your future self"
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
      { q: "Do I need The Quiet Ledger first?", a: "No — this book stands alone, though the two are designed to sit well together." },
      { q: "Which formats are included?", a: "PDF and ePub downloads, plus unlimited online reading in your Zokario library." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Chapter One", t: "The Eighth Wonder, Slowly", paras: [
        "There is a famous illustration of compounding involving a chessboard and grains of rice — one grain on the first square, two on the second, doubling on and on until the final squares require more rice than the planet grows. It is mathematically true, universally quoted, and it has taught almost nobody anything, because the human mind files it under 'clever' rather than 'urgent'.",
        "Here is the version that changes behaviour. Two people begin working at twenty-five. The first invests steadily for ten years and then — life happening — never adds another unit. The second waits those same ten years, then invests the identical amount every year for thirty. The first person, who stopped, very often ends with more. Not because of skill. Because their money was in the room a decade earlier, and in compounding, being early is a bigger advantage than being clever, disciplined, or even rich.",
        "Every useful investing behaviour follows from actually believing that paragraph — not admiring it, believing it, the way you believe in gravity when standing near an edge. The rest of this book is an attempt to move compounding from the part of your mind that admires ideas to the part that flinches near edges.",
        "We start with the only variable that is fully yours: your own behaviour."
      ]},
      { kicker: "Chapter Two", t: "Your Behaviour Is the Portfolio", paras: [
        "Decades of investor-return studies converge on an awkward finding: the average investor reliably underperforms the average investment — often by more than fees and inflation combined. The gap has a single cause: buying after rises and selling after falls, at the exact moments feeling and wisdom point in opposite directions.",
        "This chapter is a guided tour of your own likely mistakes — loss aversion, recency, the itch to act — not to shame them but to design around them. You cannot remove the flinch. You can build a portfolio the flinch cannot reach."
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
      "For every visible decision you make, a hundred invisible defaults fire — where your keys live, what happens after you sit down, the first app your thumb finds. The Atlas of Small Habits maps that hidden terrain and shows you how to redraw it.",
      "Organised as an atlas — territories of morning, work, evening, and relationships — it treats habit change as cartography rather than combat. Small map edits, compounding daily."
    ],
    learn: [
      "The default audit: surfacing behaviours you've never once chosen",
      "Placement theory — why where beats willpower",
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
        "Ask someone to describe their day and they will narrate their decisions: chose the salad, called the client, went to the gym. Watch the same day on film and you will see something else — a river of unchosen movements, hundreds of them, flowing around a handful of actual choices like water around stones. The phone lifted forty-one times, not once deliberately. The route walked identically. The snack eaten in the same chair, at the same minute, with the same absence of anyone deciding anything.",
        "None of this is failure. Defaults are the mind's compression algorithm; without them you could not survive a supermarket. But here is the cartographer's question this book turns on: who drew your map? Some defaults you laid down deliberately, years ago, for reasons that still hold. Others were drawn by app designers, supermarket planners, old flatmates, and a version of you that no longer exists — and you are still walking their routes daily, in your own life, like a tenant.",
        "The default audit is how we begin. For two ordinary days you will do nothing differently — you will only notice, and note, the moments where behaviour happened without a decision. Readers consistently report the same reaction, somewhere around the thirtieth entry: I had no idea anyone was driving.",
        "Then, territory by territory, we take the pen back."
      ]},
      { kicker: "Territory Two", t: "Placement Theory", paras: [
        "The most reliable finding in behaviour research is embarrassingly physical: distance changes behaviour more than desire does. Fruit at eye level gets eaten. The guitar in the case stays in the case. Your environment is a ballot, and every placement is a vote cast daily on your behalf.",
        "This chapter turns placement into a method — the thirty-second rule, sight-line design, the one-move principle — and applies it to the objects that currently place you."
      ]}
    ]
  },

  /* ---------------- TEMPLATES ---------------- */
  {
    id: "founders-operating-system",
    type: "template",
    title: "The Founder's Operating System",
    subtitle: "A complete Notion workspace for running an early-stage business — strategy to Monday morning.",
    category: "Business & Money",
    price: 29, oldPrice: 39,
    rating: 4.9, ratings: 87,
    pages: 40, readTime: "30-min setup",
    badges: ["featured", "bestseller"],
    cover: { c1: "#1F2A2E", c2: "#0E1416", acc: "#CBB689", motif: "grid" },
    hook: "The structure your business was improvising toward.",
    desc: [
      "Every early business runs an operating system; most run one made of loose tabs, half-remembered priorities, and a notes app with trust issues. The Founder's Operating System replaces improvisation with structure: a linked Notion workspace covering strategy, quarterly goals, weekly cadence, projects, pipeline, and decisions.",
      "Built lean on purpose — twelve linked views, not two hundred — and delivered with a 40-page field manual explaining not just how each board works, but why it exists. Duplicate it, and Monday knows what it's for."
    ],
    learn: [
      "One-page strategy view that everything else references",
      "Quarterly goals wired to weekly priorities automatically",
      "Project and pipeline boards with sane, minimal statuses",
      "A decision log — the tool founders wish they'd started years earlier",
      "The weekly review dashboard that runs the whole system"
    ],
    audience: [
      "Solo founders and 2–10 person teams",
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
      { q: "Is it customisable?", a: "Fully — it is a normal Notion workspace you own. The manual marks which structures to keep and where to safely improvise." },
      { q: "Do I get updates?", a: "Yes. When the template is refined, updated versions appear in your Zokario library at no extra cost." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Field Manual — Introduction", t: "Why Your Business Needs an Operating System", paras: [
        "Ask a founder what their strategy is and you will usually get a good answer. Ask where that strategy lives — where it physically exists, in a place that Monday morning consults — and you get a pause. In most early businesses, strategy lives in the founder's head, goals live in an old slide deck, projects live in chat threads, and the week is run by whoever emailed most recently. Each piece is fine. The absence of connection between them is what exhausts you.",
        "An operating system, in the sense this template uses the word, is just that connection: a small set of linked structures where strategy points to goals, goals point to this quarter, this quarter points to this week, and this week points to today. Nothing exotic. The magic is not in any board — it is in the pointing.",
        "This manual walks you through each piece in the order you should adopt them, one per day for a working week. Resist the urge to set up everything at once; systems adopted in an afternoon are abandoned in a fortnight. By Friday you will have something most companies ten times your size do not: a business you can see.",
        "The preview ends here — the full manual continues with the Strategy Page setup, the goals cascade, and the weekly review that holds it all together."
      ]}
    ]
  },

  {
    id: "content-engine",
    type: "template",
    title: "Content Engine",
    subtitle: "A publishing pipeline for consistent creators — plan, produce, repurpose, without the chaos.",
    category: "Productivity",
    price: 24,
    rating: 4.8, ratings: 64,
    pages: 32, readTime: "25-min setup",
    badges: ["new"],
    cover: { c1: "#2E2418", c2: "#16100A", acc: "#DDBE7F", motif: "spokes" },
    hook: "Consistency isn't a personality trait. It's a pipeline.",
    desc: [
      "The creators who publish every week are not more disciplined than you — they are better plumbed. Content Engine is a Notion pipeline that turns ideas into published work through five honest stages: capture, develop, produce, publish, repurpose.",
      "It includes the idea bank, an editorial calendar, per-platform checklists, and the repurposing matrix that turns one strong idea into five formats. The included manual covers the workflow plus the editorial habits that keep engines running."
    ],
    learn: [
      "An idea bank that captures without becoming a graveyard",
      "The five-stage pipeline from spark to published",
      "Editorial calendar with realistic cadence design",
      "The repurposing matrix — one idea, five outputs",
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
      { kicker: "Manual — Introduction", t: "Consistency Is Plumbing", paras: [
        "Every creator you admire for their consistency has been asked the same question — how do you do it? — and has given some version of the same unhelpful answer: I just sit down and do the work. It is unhelpful because it is incomplete. Watch them closely and you will find, behind the discipline, a structure so boring nobody thinks to mention it: a place ideas go, a place drafts live, a day things ship, a way one piece becomes five.",
        "Discipline without plumbing produces the pattern you already know: heroic bursts, quiet collapses, the relaunch post. Plumbing without discipline produces nothing at all — but that failure is rarer than you'd think, because pipelines have a strange effect on the people who own them. An idea sitting in a development stage asks to be finished in a way a note in your phone never will.",
        "This engine has five stages, and the manual's first rule is that ideas only move forward — no idea skips from capture to production on a wave of enthusiasm, because enthusiasm is precisely the unreliable input the system exists to replace.",
        "The preview ends here. The full manual continues with the idea bank setup and the cadence design chapter — where you'll choose a publishing rhythm you can actually keep."
      ]}
    ]
  },

  {
    id: "job-search-vault",
    type: "template",
    title: "The Job Search Vault",
    subtitle: "Run your search like a campaign — tracker, scripts, and interview preparation in one system.",
    category: "Self-Improvement",
    price: 19,
    rating: 4.7, ratings: 52,
    pages: 36, readTime: "20-min setup",
    badges: [],
    cover: { c1: "#26222E", c2: "#110F16", acc: "#C9B283", motif: "vault" },
    hook: "A job search is a project. Manage it like one.",
    desc: [
      "Job searching is one of the highest-stakes projects most people ever run — and most run it from a downloads folder and dread. The Job Search Vault is a complete campaign system: application pipeline, company research dossiers, outreach scripts, interview prep sheets, and offer comparison tools.",
      "The included manual covers the strategy layer: positioning, the narrow search, and negotiation fundamentals — calm, practical, and free of hustle-culture noise."
    ],
    learn: [
      "Pipeline tracking that turns rejection into iteration data",
      "Research dossiers that make interviews conversations",
      "Outreach scripts that read like a person, not a funnel",
      "The interview prep sheet — stories, questions, logistics",
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
      { q: "Does it work for any industry?", a: "Yes — the system is industry-agnostic. Example dossiers cover tech, design, finance, and healthcare." },
      { q: "What tool does it run in?", a: "Notion (free plan is enough). Scripts and prep sheets are also included as printable PDFs." },
      { q: "Do I get updates?", a: "Updated versions appear in your Zokario library automatically." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Manual — Introduction", t: "The Search Is a Project", paras: [
        "Nobody would run a product launch from memory, out of a downloads folder, with no record of what was tried or what came back. Yet this is how most people run the project that determines where they will spend two thousand hours a year. The result is predictable: effort without iteration. Twenty applications vanish, and because nothing was tracked, the twenty-first is identical.",
        "Treating the search as a project changes the emotional physics before it changes the outcomes. A rejection stops being a verdict and becomes a data point in a pipeline you own. Follow-ups stop being awkward because they are scheduled. And the interview stops being an exam, because the dossier means you walk in knowing more about the company's last two years than half the panel.",
        "The vault has seven rooms, and the manual opens each in sequence. But the first chapter is about aim: the narrow search — why applying to fewer roles, better, outperforms volume everywhere except in your anxiety, which was never a good adviser anyway.",
        "The preview ends here. The full manual continues with positioning and the pipeline setup."
      ]}
    ]
  },

  /* ---------------- NOTEBOOKS ---------------- */
  {
    id: "the-daily-review",
    type: "notebook",
    title: "The Daily Review",
    subtitle: "A five-minute evening notebook — one page a day, digital and printable.",
    category: "Productivity",
    price: 13,
    rating: 4.8, ratings: 91,
    pages: 190, readTime: "5 min daily",
    badges: ["featured"],
    cover: { c1: "#2A2117", c2: "#141009", acc: "#E4CFA3", motif: "check" },
    hook: "The day happened. Five minutes decides what it meant.",
    desc: [
      "The Daily Review is a beautifully typeset notebook built around one evening page: three prompts, one line of gratitude, tomorrow's heading. Nothing that takes more than five minutes; nothing you will dread by Thursday.",
      "Delivered as a hyperlinked PDF for tablets (GoodNotes, Notability, and similar) and a printable edition, with monthly dividers, review spreads, and a design calm enough to end days inside — 190 pages, six months of evenings."
    ],
    learn: [
      "The three-prompt evening page: went well, got hard, learned",
      "Tomorrow's heading — one sentence that starts the next day early",
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
      { q: "Which apps does it work with?", a: "Any PDF annotation app — GoodNotes, Notability, Xodo, Flexcil — plus a printable A5/Letter edition for paper people." },
      { q: "Is it dated?", a: "Undated. Start any day, skip without guilt, and the notebook never expires." },
      { q: "Apple Pencil required?", a: "Any stylus works, as does typing in apps that support text boxes — or a pen, on the printed edition." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Opening Pages", t: "How to Use This Notebook", paras: [
        "This notebook makes one promise: five minutes, at the end of the day, and no page will ever ask more of you than that. It is built on the observation that most journaling practices fail not from lack of depth but from excess of it — the blank page demands an essay, the essay demands energy, and by Thursday the notebook has joined its ancestors in the drawer.",
        "The daily page asks three things. What went well — one to three lines, and yes, small counts. What got hard — named plainly, because named things shrink. What you learned — about the work, the people, or yourself, and 'nothing today' is an honest entry. Beneath them, one line of gratitude and one sentence for tomorrow: the heading your next morning will be glad to find.",
        "Write badly. Write in fragments. The page does not grade. Its entire function is to place a small full stop at the end of the day, so the day stops running in the background all night.",
        "The preview ends here — the full notebook contains 180 daily pages, monthly dividers and review spreads, the year compass, and the printable edition."
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
      "Includes an annual reading map, a to-read pipeline with honest priorities, and quote index pages — as a hyperlinked tablet PDF and printable edition. Room for sixty books; enough for two ambitious years."
    ],
    learn: [
      "The per-book spread: capture while reading, distil after",
      "Writing the one-paragraph review that beats a rating",
      "Quote indexing you'll actually consult",
      "The to-read pipeline — priorities over piles",
      "An annual map of your reading life"
    ],
    audience: [
      "Readers of 10–60 books a year",
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
      { q: "Digital, paper, or both?", a: "Both — a hyperlinked PDF for tablets and a printable edition are included in one purchase." },
      { q: "Is it dated?", a: "Undated and unjudging. Log every book or one a season." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Opening Pages", t: "How to Log a Book", paras: [
        "There is a particular grief every serious reader knows: the brilliant book, read a year ago, that survives in memory only as a colour and a feeling of having been changed. The change may even be real. But the argument that caused it — the passages, the turns, the objections you raised at two a.m. — has evaporated, and with it your ability to give the book away to anyone else.",
        "Logging is not homework; done right, it is the opposite of homework. While reading, you keep the spread beside you and feed it scraps: a page number, a phrase, a protest. No sentences required. The distillation happens after the last page, in ten minutes, while the book is still warm — the argument in your own words, the strongest passage, the honest disagreement, and the one-paragraph review addressed to the only critic who matters: you, in five years.",
        "Sixty spreads await. The first book you log will feel like admin. The third will feel like conversation. By the tenth, you will wonder how you ever let the others evaporate.",
        "The preview ends here — the full notebook includes all book spreads, the quote index, the pipeline, the annual map, and the printable edition."
      ]}
    ]
  },

  {
    id: "ninety-day-focus-planner",
    type: "notebook",
    title: "The 90-Day Focus Planner",
    subtitle: "One quarter, one aim — a planning notebook for finishing what matters.",
    category: "Productivity",
    price: 15, oldPrice: 19,
    rating: 4.9, ratings: 74,
    pages: 210, readTime: "Weekly rhythm",
    badges: ["bestseller"],
    cover: { c1: "#302020", c2: "#170D0D", acc: "#DDBE7F", motif: "quarter" },
    hook: "A year is too long to steer. Ninety days is a voyage.",
    desc: [
      "New Year's plans die of distance — December cannot see February clearly, let alone October. The 90-Day Focus Planner works at the range where planning actually functions: one quarter, one primary aim, thirteen weekly reviews, and daily pages that keep the aim in peripheral vision.",
      "Built as a hyperlinked tablet PDF with printable edition: quarter-setting spreads, weekly plan/review pairs, ninety daily pages, and a closing retrospective that sets up the next voyage. Undated — begin any Monday."
    ],
    learn: [
      "Choosing one primary aim — and surviving the fear of choosing",
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
      { q: "Is it dated?", a: "Undated — start any Monday. Miss a week and the planner simply continues; no guilt-inducing empty dates." },
      { q: "Digital or printable?", a: "Both editions are included: hyperlinked PDF for tablets and printable A5/Letter." }
    ],
    previewCount: 1,
    chapters: [
      { kicker: "Opening Pages", t: "The One Aim Method", paras: [
        "Every January, millions of intelligent people write down seven goals, and by March the seven have quietly negotiated themselves down to zero. The failure is not ambition; it is arithmetic. Seven goals across ninety usable days is under two weeks of attention each — enough to start anything, enough to finish nothing.",
        "This planner enforces a different arithmetic: one primary aim per quarter. Not one project — one aim, the single sentence that, if true in ninety days, would make this quarter unmistakably worth it. Everything else goes on the 'meanwhile' list, where maintenance lives: the gym you keep attending, the inbox you keep answering. Meanwhile items get systems. The aim gets you.",
        "Choosing one aim is frightening in a way seven goals never are, because one aim can visibly fail. That fear is worth examining on paper, and the quarter-setting spread will make you do exactly that — because a goal that cannot fail was never a goal, only a decoration.",
        "The preview ends here — the full planner contains the quarter-setting spreads, thirteen weekly pairs, ninety daily pages, and the retrospective."
      ]}
    ]
  }

  ]
};

/* Convenience lookups */
ZK.byId = function (id) { return ZK.products.find(p => p.id === id); };
ZK.fmt = function (n) { return "$" + (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, ""); };
