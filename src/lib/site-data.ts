export const SITE = {
  name: "Haris Malik",
  role: "Off-Page SEO Specialist for Home Automation Brands",
  email: "hello@harismalik.seo",
  location: "Remote — working with teams across US, UK & EU",
  tagline:
    "Editorial links that make smart-home brands the obvious answer in search.",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/clients", label: "Industry" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 2400, suffix: "+", label: "Editorial links placed", decimals: 0 },
  { value: 9, suffix: " yrs", label: "In off-page SEO", decimals: 0 },
  { value: 62, suffix: "", label: "Home automation brands advised", decimals: 0 },
  { value: 4.1, suffix: "x", label: "Median organic traffic lift", decimals: 1 },
];

export const DIFFERENTIATORS = [
  {
    title: "One industry, not fifty",
    body: "Every prospect list, every pitch angle and every writer relationship I maintain is built around home automation, smart lighting, security and connected living. Depth beats breadth when you are competing for the same 400 publications.",
  },
  {
    title: "Editorial, not marketplaces",
    body: "Placements come from manual outreach to editors and contributors who already cover the category. No link farms, no PBNs, no bulk marketplace inventory recycled across your competitors.",
  },
  {
    title: "Link plans tied to revenue pages",
    body: "Authority is routed deliberately: money pages, comparison pages and the supporting cluster that keeps them ranking. Every placement has a documented reason for existing.",
  },
  {
    title: "Reporting your CFO can read",
    body: "Monthly reporting shows placed URLs, live status, referring-domain growth, keyword movement on target pages, and what changes next month. No vanity dashboards.",
  },
];

export const EXPERTISE = [
  "Guest posting on smart-home & AV publications",
  "Editorial link acquisition through manual outreach",
  "Contextual link insertions on aged, indexed pages",
  "Competitor backlink gap analysis",
  "Topical authority mapping for product & category pages",
  "Digital PR angles for hardware launches",
  "Anchor text distribution & risk control",
  "Link velocity planning for new domains",
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  benefits: string[];
  process: string[];
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "guest-posting",
    title: "Guest Posting",
    summary:
      "Contributed articles on genuine smart-home, AV and home-tech publications that already rank.",
    overview:
      "I place long-form contributed articles on publications that cover connected living, installation, integration and smart security. Every target is vetted for real editorial standards, organic traffic from your market, and topical relevance to what you sell — not just a domain rating number.",
    benefits: [
      "Links from pages that already attract buyers researching automation",
      "Full control of the surrounding context and internal anchor",
      "Brand exposure to installers, integrators and homeowners",
      "Compounding topical relevance rather than isolated citations",
    ],
    process: [
      "Prospecting against a maintained home-automation publication index",
      "Editor-level outreach with a specific, usable pitch",
      "Brief and outline approval with your team",
      "Writing by subject-aware writers, not generic content mills",
      "Placement, indexation check and live-status monitoring",
    ],
    deliverables: [
      "Approved target list with traffic and relevance notes",
      "Published article URLs with anchors and destination pages",
      "Indexation and live-link monitoring for 12 months",
    ],
  },
  {
    slug: "manual-outreach",
    title: "Manual Outreach",
    summary:
      "One-to-one campaigns to editors, contributors and category writers — no bulk sending.",
    overview:
      "Outreach is where most link building quietly fails. Templates get ignored, and the sites that do reply are the ones selling to everyone. I run small, hand-written campaigns against curated lists, with pitches built from what the publication actually published last month.",
    benefits: [
      "Access to sites that never respond to mass outreach",
      "Relationships that produce repeat placements at lower cost",
      "Cleaner backlink profile with fewer paid footprints",
      "Higher reply-to-placement conversion per hour spent",
    ],
    process: [
      "Manual qualification of every prospect and contact",
      "Angle research from recent editorial coverage",
      "Personalised first contact and structured follow-up",
      "Negotiation of placement, anchor and context",
      "Relationship logging for future campaigns",
    ],
    deliverables: [
      "Outreach log with contacts, angles and outcomes",
      "Reply and placement rate reporting",
      "Warm-relationship list you keep",
    ],
  },
  {
    slug: "editorial-links",
    title: "Editorial Link Building",
    summary:
      "Earned mentions inside genuinely editorial coverage of the smart-home category.",
    overview:
      "Editorial links are placed because a writer needed your product, data or expertise to finish their piece. I create the reasons for that: original testing data, installation insight, integration guides and expert commentary that writers can cite without hesitation.",
    benefits: [
      "The strongest trust signal available in off-page SEO",
      "Naturally varied anchors and surrounding context",
      "Durable placements that survive editorial clean-ups",
      "Secondary syndication and pickup",
    ],
    process: [
      "Asset and angle selection with your product team",
      "Journalist and contributor mapping in the category",
      "Pitching with a genuine editorial hook",
      "Coordination of quotes, data and imagery",
      "Coverage tracking and follow-on pitching",
    ],
    deliverables: [
      "Editorial angle brief",
      "Coverage report with reach and link data",
      "Reusable expert-commentary library",
    ],
  },
  {
    slug: "link-insertions",
    title: "Link Insertions",
    summary:
      "Contextual placements inside existing, aged, indexed pages that already have equity.",
    overview:
      "Instead of publishing a new page that has to earn trust from zero, insertions place your link inside an article that has been indexed for years and already receives traffic. Done selectively, this is the fastest way to move a stubborn commercial page.",
    benefits: [
      "Faster impact than new placements — the page is already ranked",
      "Highly relevant surrounding paragraph and internal links",
      "Efficient cost per referring domain",
      "Useful for targeted keyword pushes",
    ],
    process: [
      "Identify aged pages ranking for adjacent smart-home queries",
      "Confirm the page has organic traffic, not just age",
      "Negotiate a genuinely useful in-content placement",
      "Write or edit the surrounding paragraph",
      "Verify indexation and cache refresh",
    ],
    deliverables: [
      "Insertion targets with traffic and query data",
      "Placed URLs with screenshots of context",
      "Refresh monitoring for removals",
    ],
  },
  {
    slug: "authority-building",
    title: "Authority Building",
    summary:
      "A structured programme to move your domain from unknown to cited within the category.",
    overview:
      "Authority is the cumulative result of who links to you, how often, from where, and about what. This programme sequences placements, digital PR and content so search engines repeatedly see your brand associated with home-automation entities and problems.",
    benefits: [
      "Predictable referring-domain growth curve",
      "Stronger rankings across the whole category, not one keyword",
      "Improved conversion from brand recognition",
      "Insulation from single-tactic algorithm risk",
    ],
    process: [
      "Authority audit against three named competitors",
      "12-month referring-domain and relevance targets",
      "Quarterly tactic mix: guest, editorial, insertion, PR",
      "Monthly execution and measurement",
      "Quarterly strategy reset based on movement",
    ],
    deliverables: [
      "Authority roadmap document",
      "Quarterly competitor benchmark",
      "Monthly execution and movement report",
    ],
  },
  {
    slug: "competitor-link-analysis",
    title: "Competitor Link Analysis",
    summary:
      "Exactly which links are holding your competitors above you — and which are replicable.",
    overview:
      "I pull the full referring-domain profile of your closest competitors, strip the noise, and isolate the placements that actually correlate with their rankings on your target queries. You get a prioritised, replicable target list rather than a 4,000-row export.",
    benefits: [
      "Clarity on the real gap, not a vanity metric comparison",
      "A ready-to-execute prospect list",
      "Insight into which publications drive category rankings",
      "Faster decisions on where budget goes",
    ],
    process: [
      "Competitor selection by SERP overlap, not revenue",
      "Full backlink export and manual de-noising",
      "Link-intersect and gap modelling per money page",
      "Replicability scoring for each domain",
      "Prioritised acquisition roadmap",
    ],
    deliverables: [
      "Gap analysis document with prioritised targets",
      "Per-page authority gap model",
      "90-day acquisition plan",
    ],
  },
  {
    slug: "topical-authority",
    title: "Topical Authority",
    summary:
      "Off-page signals mapped to the content clusters that decide category rankings.",
    overview:
      "Search engines evaluate whether your site is a credible source on a subject, not just a strong domain. I map your cluster structure — matter/zigbee/thread, lighting control, access control, energy — and then route external links into the pages that anchor each cluster.",
    benefits: [
      "Rankings across a whole topic rather than isolated terms",
      "Better internal equity distribution",
      "Clear editorial priorities for your content team",
      "Improved eligibility for AI-generated answers and citations",
    ],
    process: [
      "Entity and cluster mapping for your category",
      "Cluster-level authority scoring",
      "Link routing plan per cluster hub",
      "Content-gap handover to your writers",
      "Cluster movement tracking",
    ],
    deliverables: [
      "Topical map with hub and spoke pages",
      "Link routing plan",
      "Cluster performance dashboard",
    ],
  },
  {
    slug: "monthly-link-building",
    title: "Monthly Link Building",
    summary:
      "An ongoing retained programme with a fixed quality bar and transparent reporting.",
    overview:
      "For brands who have decided that links are a permanent line item, not a project. A fixed monthly quota of vetted placements, sequenced against your commercial priorities, with the same reporting format every month so trends are readable.",
    benefits: [
      "Consistent link velocity that looks natural",
      "Compounding relationships and falling cost per link",
      "Priority responsiveness for launches and seasonal pushes",
      "One accountable specialist, no rotating account managers",
    ],
    process: [
      "Quarterly priority-page selection",
      "Monthly target list approval",
      "Execution across guest, editorial and insertion channels",
      "Monthly reporting call",
      "Rolling strategy adjustment",
    ],
    deliverables: [
      "Agreed monthly placement quota",
      "Standardised monthly report",
      "Live link-status monitoring",
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery & audit",
    body: "I map your commercial pages, current backlink profile, anchor distribution and the three competitors actually beating you in the SERP.",
  },
  {
    step: "02",
    title: "Gap modelling",
    body: "Per-page authority gaps are quantified so we know how many quality referring domains each target page realistically needs.",
  },
  {
    step: "03",
    title: "Prospecting",
    body: "Targets are drawn from a maintained index of home-automation and adjacent publications, then manually qualified for traffic and relevance.",
  },
  {
    step: "04",
    title: "Outreach",
    body: "Hand-written pitches to named editors and contributors, built from what each publication recently ran.",
  },
  {
    step: "05",
    title: "Placement",
    body: "Briefs, drafts and anchors are approved by you before anything goes live. Nothing is published on your behalf without sign-off.",
  },
  {
    step: "06",
    title: "Measure & compound",
    body: "Indexation, live-status, referring-domain growth and target-page movement are tracked monthly, and next month's plan follows the data.",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  headline: string;
  summary: string;
  timeline: string;
  background: string;
  problem: string;
  research: string;
  strategy: string;
  execution: string[];
  lessons: string[];
  metrics: { label: string; before: number; after: number; suffix?: string }[];
  chart: { month: string; sessions: number }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "smart-lighting-brand",
    client: "European smart lighting manufacturer",
    category: "Smart lighting · DTC + trade",
    headline: "From invisible to category-cited in 11 months",
    summary:
      "A lighting-control manufacturer with strong product pages and almost no editorial footprint moved into the top three for its core commercial cluster.",
    timeline: "11 months · retained programme",
    background:
      "A mid-size European manufacturer selling wireless lighting control to both homeowners and electrical trade. Excellent product documentation, an in-house content team, and a domain that had never run a structured off-page programme.",
    problem:
      "Category and comparison pages plateaued on page two. The three competitors above them each held 4–6x the referring domains from genuine home-tech publications, and every internal content push failed to break through because the authority gap was never addressed.",
    research:
      "A link-intersect across the three SERP competitors showed that ranking correlated less with total domains and more with links from publications that specifically covered installation and integration. Of 380 candidate domains, only 94 met that bar — and the client had links from four of them.",
    strategy:
      "Route authority into six cluster hubs rather than spraying it at the homepage. Prioritise installation-focused publications, use link insertions for the two pages closest to page one, and reserve guest posting for hubs that needed context as much as equity.",
    execution: [
      "Built and manually qualified a 94-domain priority index",
      "Ran hand-written outreach in cohorts of 20 domains per month",
      "Placed 63 contextual links across six cluster hubs",
      "Used aged-page insertions for the two fastest-moving commercial pages",
      "Published four data-led pieces used as pitch assets for editorial coverage",
    ],
    lessons: [
      "Relevance of the linking page beat domain rating in every regression we ran",
      "Two well-placed insertions moved a page further than eleven generic guest posts",
      "Cluster-level routing made results legible to the client's leadership team",
    ],
    metrics: [
      { label: "Organic sessions / mo", before: 8400, after: 41200 },
      { label: "Referring domains", before: 112, after: 289 },
      { label: "Top-3 keywords", before: 9, after: 148 },
      { label: "Domain rating", before: 31, after: 54 },
    ],
    chart: [
      { month: "M1", sessions: 8400 },
      { month: "M2", sessions: 9100 },
      { month: "M3", sessions: 11200 },
      { month: "M4", sessions: 14600 },
      { month: "M5", sessions: 17900 },
      { month: "M6", sessions: 21400 },
      { month: "M7", sessions: 25800 },
      { month: "M8", sessions: 29500 },
      { month: "M9", sessions: 33100 },
      { month: "M10", sessions: 37600 },
      { month: "M11", sessions: 41200 },
    ],
  },
  {
    slug: "security-integrator",
    client: "North American smart security integrator",
    category: "Access control · installer network",
    headline: "Winning local + national queries with editorial links only",
    summary:
      "A multi-state integrator replaced a directory-heavy backlink profile with genuine editorial coverage and tripled qualified enquiries.",
    timeline: "9 months · retained programme",
    background:
      "A smart security and access-control integrator operating across eleven metros, selling installation and monitoring to residential and light-commercial customers.",
    problem:
      "The profile was 78% directories and citations. Service pages ranked locally but had no chance nationally, and a previous agency's anchor text was aggressively commercial across low-quality domains.",
    research:
      "Anchor analysis showed 41% exact-match on a profile with almost no branded anchors — a distribution no competitor in the SERP shared. Meanwhile the top three all held coverage in security-trade and smart-home publications.",
    strategy:
      "Rebalance anchors toward branded and partial-match, disavow nothing but dilute aggressively, and build editorial coverage in trade publications the client's buyers actually read.",
    execution: [
      "Anchor dilution plan targeting a branded-first distribution",
      "38 editorial placements across security and smart-home trade titles",
      "Original installation-cost dataset used as a digital PR asset",
      "Contributor relationships established with five recurring writers",
      "Quarterly review of live-link status and anchor drift",
    ],
    lessons: [
      "Anchor rebalancing produced movement before any new authority arrived",
      "Trade publications converted better than higher-DR consumer sites",
      "One proprietary dataset generated eleven placements over two quarters",
    ],
    metrics: [
      { label: "Organic sessions / mo", before: 5200, after: 19800 },
      { label: "Referring domains", before: 204, after: 361 },
      { label: "Qualified enquiries / mo", before: 22, after: 71 },
      { label: "Exact-match anchors", before: 41, after: 12, suffix: "%" },
    ],
    chart: [
      { month: "M1", sessions: 5200 },
      { month: "M2", sessions: 5900 },
      { month: "M3", sessions: 7400 },
      { month: "M4", sessions: 9300 },
      { month: "M5", sessions: 11800 },
      { month: "M6", sessions: 13900 },
      { month: "M7", sessions: 16100 },
      { month: "M8", sessions: 18000 },
      { month: "M9", sessions: 19800 },
    ],
  },
  {
    slug: "matter-thread-platform",
    client: "Matter-compatible hub platform",
    category: "Interoperability · developer + consumer",
    headline: "Building topical authority around a new protocol",
    summary:
      "A hub platform used protocol-led content and editorial outreach to own emerging Matter and Thread queries before the category consolidated.",
    timeline: "7 months · project engagement",
    background:
      "A hardware and software platform shipping a Matter-compatible hub, competing against established ecosystems with far larger domains.",
    problem:
      "The brand could not outrank incumbents on head terms, and its category pages had no authority signals attached to the protocol topics buyers were searching.",
    research:
      "Query analysis showed a rapidly growing set of protocol-specific searches with weak, non-specialist results. Incumbent authority was concentrated on brand and product terms, not protocol explainers.",
    strategy:
      "Skip the head terms entirely for two quarters. Build cluster authority around Matter, Thread and border-router topics where editorial links were still cheap and available.",
    execution: [
      "Mapped a 40-page protocol cluster with three hub pages",
      "Placed 44 links, 80% of which pointed at cluster hubs",
      "Ran contributor outreach to developer and smart-home publications",
      "Secured recurring expert commentary slots for the CTO",
      "Handed the content team a prioritised gap list each month",
    ],
    lessons: [
      "Emerging protocol topics are the cheapest authority in the category",
      "Hub-directed links lifted spoke pages without direct placements",
      "Expert commentary compounded once two publications had cited the CTO",
    ],
    metrics: [
      { label: "Organic sessions / mo", before: 3100, after: 16400 },
      { label: "Referring domains", before: 67, after: 173 },
      { label: "Cluster keywords in top 10", before: 4, after: 96 },
      { label: "Domain rating", before: 24, after: 43 },
    ],
    chart: [
      { month: "M1", sessions: 3100 },
      { month: "M2", sessions: 4200 },
      { month: "M3", sessions: 6100 },
      { month: "M4", sessions: 8700 },
      { month: "M5", sessions: 11500 },
      { month: "M6", sessions: 14100 },
      { month: "M7", sessions: 16400 },
    ],
  },
];

export const INDUSTRY_BRANDS = [
  { name: "Control4", note: "Dealer-led integration ecosystems and OS 3 workflows" },
  { name: "Crestron", note: "Commercial-grade control and AV distribution" },
  { name: "Lutron", note: "Lighting control, shading and Caséta/RA ecosystems" },
  { name: "Brilliant", note: "In-wall control panels and retrofit smart switching" },
  { name: "Ring", note: "Consumer security, video doorbells and neighbourhood apps" },
  { name: "Sonos", note: "Multi-room audio and voice-integrated speakers" },
  { name: "Philips Hue", note: "Zigbee lighting, bridges and entertainment sync" },
  { name: "Alarm.com", note: "Professionally monitored security platforms" },
  { name: "Ecobee", note: "Smart thermostats, sensors and energy programmes" },
  { name: "Yale Home", note: "Smart locks, access control and keyless entry" },
  { name: "Aqara", note: "Zigbee sensors, hubs and Matter bridging" },
  { name: "Shelly", note: "Wi-Fi relays, DIY automation and energy metering" },
];

export const TESTIMONIALS = [
  {
    name: "Marta Vieira",
    role: "Head of Growth",
    company: "Smart lighting manufacturer",
    quote:
      "The difference was the target list. We had seen plenty of link reports before; this was the first time every domain was somewhere our buyers actually read.",
    result: "+390% organic sessions in 11 months",
    initials: "MV",
  },
  {
    name: "Daniel Osei",
    role: "Marketing Director",
    company: "Security integrator group",
    quote:
      "He fixed the anchor profile a previous agency left us with before selling us a single new link. That told me everything about how he works.",
    result: "Exact-match anchors down from 41% to 12%",
    initials: "DO",
  },
  {
    name: "Ingrid Halvorsen",
    role: "VP Product Marketing",
    company: "Matter hub platform",
    quote:
      "We stopped fighting for head terms and owned the protocol conversation instead. That strategy call was worth the whole engagement.",
    result: "96 cluster keywords in the top 10",
    initials: "IH",
  },
];

export const FAQS = [
  {
    q: "Do you only work with home automation companies?",
    a: "Yes. Smart home, lighting control, access control, connected security, energy management and the integrator channel around them. The publication relationships and prospect indexes I maintain are category-specific, which is the entire reason the work performs.",
  },
  {
    q: "How many links will I get per month?",
    a: "It depends on the quality bar we agree, not on a package. A typical retained programme places between six and fourteen vetted placements monthly. I would rather deliver six links you would be happy to show a journalist than thirty you would not.",
  },
  {
    q: "Do you use paid placements?",
    a: "Some publications charge a contributor or administrative fee; most serious ones in this category do. What I do not use are marketplaces, PBNs, link farms, or networks that resell the same inventory to your competitors. Every fee is disclosed to you.",
  },
  {
    q: "How long before I see movement?",
    a: "Anchor and insertion work often moves pages within six to ten weeks. Genuine authority growth on competitive commercial clusters is a two-to-four quarter project. Anyone promising faster on a competitive smart-home term is selling something else.",
  },
  {
    q: "Will you write the content?",
    a: "Yes, for guest placements and insertions. Drafts are written by writers who understand the category, and nothing is submitted without your approval on brief, angle and anchor.",
  },
  {
    q: "What do you need from my team?",
    a: "Access to analytics and Search Console, a named approver for briefs and anchors, and a list of the pages that actually generate revenue. That is usually enough to start.",
  },
];

export const TIMELINE = [
  {
    year: "2016",
    title: "First outreach role",
    body: "Started as an outreach associate at a UK agency, sending far too many templated emails and learning exactly why they failed.",
  },
  {
    year: "2018",
    title: "Moved to editorial-only",
    body: "Stopped working with marketplaces entirely and rebuilt a workflow around named editors and genuine pitches.",
  },
  {
    year: "2020",
    title: "First smart-home client",
    body: "A lighting-control brand asked for help. Learning the installer channel changed how I thought about relevance.",
  },
  {
    year: "2022",
    title: "Specialised completely",
    body: "Turned down every engagement outside home automation and started maintaining a category publication index full time.",
  },
  {
    year: "2024",
    title: "Retained programmes only",
    body: "Shifted to a small number of long-term retained programmes where compounding authority is actually possible.",
  },
  {
    year: "Today",
    title: "Advising category leaders",
    body: "Working with manufacturers, platforms and integrators on multi-quarter authority roadmaps.",
  },
];

export const VALUES = [
  {
    title: "Disclose everything",
    body: "Every fee, every placement, every removal. You should never learn about a link from an audit.",
  },
  {
    title: "Relevance over metrics",
    body: "A DR 42 installation publication beats a DR 78 general blog every time in this category.",
  },
  {
    title: "Say no early",
    body: "If a target does not fit, it does not get pitched — even when the quota would be easier to fill.",
  },
  {
    title: "Build things that survive",
    body: "Placements should still be live and valuable three algorithm updates from now.",
  },
];
