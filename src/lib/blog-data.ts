export type BlogSection = { heading: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: "hero" | "smartHome" | "growth" | "workspace";
  intro: string[];
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  related: string[];
};

const p = (...s: string[]) => s;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "guest-posting-for-home-automation-brands",
    title: "Guest Posting for Home Automation Brands That Actually Moves Rankings",
    seoTitle: "Guest Posting for Home Automation Brands | Haris Malik",
    metaDescription:
      "How to run guest posting for smart home brands: target selection, editor outreach, briefs, anchors and the placements that actually shift commercial rankings.",
    excerpt:
      "Most guest posting in the smart home category is inventory shuffling. Here is the version that moves commercial pages.",
    category: "Guest Posting",
    date: "2026-06-18",
    readTime: "8 min",
    image: "workspace",
    intro: p(
      "Guest posting has a reputation problem, and it earned it. For a decade the tactic has been sold as volume: buy ten posts a month on whatever domains a vendor has access to, point them at a category page, and hope. In home automation that approach fails faster than in most industries, because the pool of publications that genuinely cover connected living is small enough that everyone is buying from the same handful of resellers.",
      "The version that works looks almost nothing like that. It is slower, more selective, and built around the question a search engine is actually trying to answer: does the wider web treat this brand as a credible source on smart home topics?"
    ),
    sections: [
      {
        heading: "Start with publications, not domains",
        paragraphs: p(
          "The first mistake is treating target selection as a metrics exercise. A spreadsheet sorted by domain rating will hand you general-interest blogs with inflated scores and no readership in your category. What matters far more is whether the publication publishes smart-home content regularly, whether those articles rank, and whether the audience includes people who buy or specify automation products.",
          "I maintain an index of home-automation and adjacent publications — consumer smart home, custom installation trade, AV integration, home security, energy management and the developer side of Matter and Thread. Each entry records how often the site publishes in the category, whether contributed content is labelled, whether existing contributed pieces rank, and who the contact is. That index, not a backlink tool, drives every campaign."
        ),
      },
      {
        heading: "Pitch what the editor is missing",
        paragraphs: p(
          "Editors in this space are not short of product announcements. They are short of installation reality: what breaks in a retrofit, how Zigbee and Thread coexist in a dense apartment building, what a realistic budget looks like for whole-home lighting control. A pitch that offers one of those, with a named author who can defend it, gets replies from publications that ignore mass outreach entirely.",
          "The practical test I use before sending anything: could this pitch only have been written by someone who read the publication's last month of output? If the answer is no, it is a template, and it will perform like one."
        ),
      },
      {
        heading: "Write the piece to be useful, then place the link",
        paragraphs: p(
          "The link is the last decision, not the first. When an article is planned backwards from a target anchor, the surrounding text reads like it — and editors, readers and increasingly search systems notice. Plan the piece so that it answers a real question fully, and the natural place to reference your page becomes obvious.",
          "In practice that usually means one contextual link to a genuinely relevant resource, placed where a reader would want more depth, with an anchor that describes the destination rather than the keyword you wish you ranked for. One well-placed contextual link outperforms three shoehorned ones, and it survives editorial clean-ups."
        ),
      },
      {
        heading: "Route placements to clusters, not the homepage",
        paragraphs: p(
          "Homepage links feel safe and do very little for a commercial page three clicks deep. Map your site into clusters — lighting control, access control, energy, interoperability — and identify the hub page for each. Route external links into those hubs and let internal linking distribute equity to the spokes.",
          "This also makes reporting legible. Instead of reporting twelve links, you report that the access-control cluster gained nine referring domains and moved from an average position of 18 to 7 on its target set. That is a conversation your leadership team can actually act on."
        ),
      },
      {
        heading: "Measure placement quality, not placement count",
        paragraphs: p(
          "Track four things per placement: is it indexed, is it still live at 90 days, does the linking page receive organic traffic, and did the destination page move. Most programmes track only the first. The third and fourth are where the money is.",
          "After two quarters you will have enough data to see which publication types drive movement for your specific site. In every home-automation programme I have run, that answer has been installation-focused and trade titles — not the highest-authority consumer sites."
        ),
      },
    ],
    faqs: [
      {
        q: "How many guest posts per month should a smart home brand target?",
        a: "Between four and ten vetted placements is a realistic range for most brands. Beyond that, quality control breaks down and link velocity starts to look unnatural for a domain that was not previously earning coverage.",
      },
      {
        q: "Should guest posts link to product pages?",
        a: "Sometimes, but sparingly. Most placements should point at cluster hubs, guides and comparison resources. A profile where every external link hits a product page is trivially recognisable as constructed.",
      },
    ],
    related: ["editorial-link-building-vs-guest-posting", "anchor-text-strategy-smart-home"],
  },
  {
    slug: "home-automation-seo-strategy",
    title: "A Home Automation SEO Strategy That Survives Contact With the SERP",
    seoTitle: "Home Automation SEO Strategy: A Practical Framework",
    metaDescription:
      "A complete off-page and topical framework for smart home SEO: cluster mapping, authority gaps, protocol content and the sequencing that actually compounds.",
    excerpt:
      "Smart home SERPs are dominated by publishers and marketplaces. Here is how a manufacturer competes anyway.",
    category: "Strategy",
    date: "2026-06-02",
    readTime: "9 min",
    image: "smartHome",
    intro: p(
      "Search results in home automation are unusually hostile to brands. Ask any commercial question — best smart lock, Matter hub comparison, lighting control cost — and the first page is publishers, marketplaces and review aggregators. Manufacturer pages appear late, if at all.",
      "That structure is not an accident, and it will not be fixed by publishing more product pages. It is fixed by earning the same signals the publishers have: subject coverage, citation and authority routed to the right places."
    ),
    sections: [
      {
        heading: "Accept where you can and cannot win",
        paragraphs: p(
          "A manufacturer will rarely outrank a major publisher on a pure 'best of' query, and chasing it burns budget. What a manufacturer can own is everything downstream: protocol explainers, compatibility questions, installation and configuration, integration with named ecosystems, and comparison pages where your own product is one of the honest options.",
          "This is a strategic decision, not a defeat. The queries you can win convert far better, because someone searching how to bridge Zigbee sensors into a Matter fabric is closer to a purchase decision than someone browsing a listicle."
        ),
      },
      {
        heading: "Map the category as entities",
        paragraphs: p(
          "Build a map of the entities in your space: protocols, ecosystems, device classes, use cases, and the named brands your buyers already own. Every page you publish should sit clearly against one of those entities, and your cluster hubs should be the definitive resource for a group of them.",
          "Doing this before any link building matters, because it tells you where authority needs to land. Without it, you end up pointing links at whatever page happens to exist."
        ),
      },
      {
        heading: "Quantify the authority gap per page",
        paragraphs: p(
          "For each target page, pull the referring-domain counts of the pages currently ranking one to five. Strip out domains that are clearly not replicable. What remains is a realistic number: this page needs roughly this many relevant referring domains to be competitive.",
          "That number turns link building from an open-ended expense into a plan with an end state. It also stops you from over-investing in pages that are already sufficiently authoritative and simply have a content or intent problem."
        ),
      },
      {
        heading: "Sequence, do not spray",
        paragraphs: p(
          "Concentrate a quarter's placements on one or two clusters rather than distributing them evenly. Clusters respond non-linearly: nothing moves for weeks, then the hub crosses a threshold and the spokes lift together. Even distribution keeps every cluster just below that threshold.",
          "Pick the cluster closest to revenue first, prove the mechanism, then reuse the same pattern on the next one. Clients tolerate patience far better when the first cluster has already worked."
        ),
      },
      {
        heading: "Feed the content team from the link side",
        paragraphs: p(
          "Outreach produces intelligence: what editors are asking about, what data they cannot find, what questions keep coming up. That should flow straight back into the content roadmap. In most programmes I run, the highest-performing pages of the year came from a question an editor asked during outreach.",
          "Off-page and on-page teams that operate separately in this category both underperform. The link programme is a research function as much as an acquisition one."
        ),
      },
    ],
    faqs: [
      {
        q: "How long does a home automation SEO programme take to show results?",
        a: "Expect early movement on lower-competition cluster pages within one quarter, and meaningful commercial movement between two and four quarters depending on the authority gap you started with.",
      },
      {
        q: "Is technical SEO or off-page more important for smart home brands?",
        a: "Technical issues are usually solved once; authority is the ongoing constraint. Fix crawl and template problems first, then treat off-page as the permanent programme.",
      },
    ],
    related: ["topical-authority-for-smart-home-sites", "competitor-backlink-gap-analysis"],
  },
  {
    slug: "editorial-link-building-vs-guest-posting",
    title: "Editorial Link Building vs Guest Posting: When Each One Wins",
    seoTitle: "Editorial Link Building vs Guest Posting | Which to Use",
    metaDescription:
      "A practical comparison of editorial link building and guest posting for smart home brands, including cost, control, durability and when to run each.",
    excerpt:
      "They are not competing tactics. They solve different problems, and most programmes need both in a specific order.",
    category: "Editorial Links",
    date: "2026-05-21",
    readTime: "7 min",
    image: "growth",
    intro: p(
      "The two tactics get discussed as if one is legitimate and the other is not. In reality they differ on three axes that matter to a programme: how much control you have over the placement, how much it costs per referring domain, and how durable the link is.",
      "Understanding those trade-offs lets you deploy each where it is strongest instead of defending one tactic on principle."
    ),
    sections: [
      {
        heading: "Control: guest posting wins",
        paragraphs: p(
          "With a contributed article you control the topic, the surrounding context, the anchor and the destination. That precision is valuable when you need authority routed to a specific cluster hub with a specific contextual signal.",
          "Editorial coverage gives you almost none of that. A writer may link to your homepage, use your brand name as the anchor, or mention you without linking at all. You are trading control for credibility."
        ),
      },
      {
        heading: "Credibility: editorial wins decisively",
        paragraphs: p(
          "An editorial link exists because a journalist needed your product, data or expertise. Search systems and human readers both weigh that differently from a contributed byline. In a category where reviewers and publishers dominate the SERP, being cited by them is the strongest available signal.",
          "Editorial links also tend to arrive with secondary benefits: syndication, aggregator pickup, and the kind of brand-name search volume that supports everything else you do."
        ),
      },
      {
        heading: "Cost and predictability",
        paragraphs: p(
          "Guest posting has a predictable unit cost and a predictable timeline. You can forecast it. Editorial link building is lumpy: a campaign might produce nothing for six weeks and then eleven placements in ten days when a data asset lands.",
          "For a business planning a budget, that means guest posting forms the baseline and editorial work is the upside. Programmes that rely entirely on editorial coverage tend to have painful quarters."
        ),
      },
      {
        heading: "Durability over three years",
        paragraphs: p(
          "Editorial placements survive longer. Contributed content is the first thing removed when a publication changes ownership, cleans up its archive, or decides to stop accepting external bylines. I have seen guest-post attrition rates above 20% over three years on some publications, and close to zero on genuine editorial coverage.",
          "Factor that into cost per link. A cheaper placement that disappears in eighteen months is not cheaper."
        ),
      },
      {
        heading: "How to sequence them",
        paragraphs: p(
          "Start with guest posting and insertions to establish a baseline of relevant referring domains and get commercial pages within striking distance. Once the brand has visible category presence, editorial pitching converts much better — writers check whether you exist before citing you.",
          "Running editorial-first for a brand nobody has heard of is the most common reason digital PR campaigns in this category fail."
        ),
      },
    ],
    faqs: [
      {
        q: "Can a small brand get editorial links?",
        a: "Yes, but it needs an asset — original testing data, installation cost benchmarks, or a genuine expert available for comment. Pitching a product alone rarely works below a certain brand recognition threshold.",
      },
      {
        q: "What ratio of guest to editorial links is healthy?",
        a: "There is no fixed ratio, but a profile that is entirely contributed content looks constructed. Aim to increase the editorial share every quarter as brand presence grows.",
      },
    ],
    related: ["digital-pr-for-hardware-launches", "guest-posting-for-home-automation-brands"],
  },
  {
    slug: "link-insertions-done-properly",
    title: "Link Insertions Done Properly: Speed Without the Risk",
    seoTitle: "Link Insertions: How to Use Them Safely and Effectively",
    metaDescription:
      "How to select, negotiate and verify contextual link insertions on aged pages — and how to avoid the patterns that make them obvious.",
    excerpt:
      "Insertions are the fastest lever in off-page SEO and the easiest to abuse. The selection criteria are everything.",
    category: "Link Insertions",
    date: "2026-05-09",
    readTime: "7 min",
    image: "workspace",
    intro: p(
      "A link insertion places your link inside an article that already exists, is already indexed, and in the best cases already ranks. You skip the entire waiting period a new page has to serve before it carries meaningful equity.",
      "That speed is exactly why insertions get abused. The tactic is only as good as the page you insert into, and most vendors sell insertions on pages chosen for availability rather than value."
    ),
    sections: [
      {
        heading: "Select for traffic, not age",
        paragraphs: p(
          "Age is the headline metric vendors quote, and it is close to meaningless on its own. A 2017 article that has never received a visitor passes very little. Check the estimated organic traffic of the specific URL, not the domain, and check which queries it ranks for.",
          "My working threshold in the smart-home category is that the page should rank in the top twenty for at least one query with real volume that is topically adjacent to the destination page. Below that, the insertion is a directory link with better formatting."
        ),
      },
      {
        heading: "Relevance is paragraph-level",
        paragraphs: p(
          "Domain relevance is not enough. The paragraph containing your link should be about the thing your page is about. Inserting a smart-lock link into a paragraph about robot vacuums on an otherwise relevant smart-home site wastes the placement.",
          "When the natural paragraph does not exist, write it. A well-written addition that improves the article is usually accepted, and it produces a placement that reads as if it was always there."
        ),
      },
      {
        heading: "Watch the footprint",
        paragraphs: p(
          "Insertions leave patterns: the same publications, the same paragraph structures, the same outbound-link neighbourhoods. If you can spot a vendor's inventory by reading three of their placements, so can everyone else.",
          "Vary sources deliberately, avoid pages that already carry four or five commercial outbound links, and refuse pages where the surrounding links point to obviously unrelated commercial sites."
        ),
      },
      {
        heading: "Verify after placement",
        paragraphs: p(
          "An insertion is not done when it goes live. Confirm the page is still indexed after the edit, confirm the cached version reflects the change, and confirm the link is not nofollowed at the template level. Re-check at 30 and 90 days — silent removals are common.",
          "Keep screenshots of the surrounding context. When a client asks in month eight why a specific link was chosen, the context is the answer."
        ),
      },
      {
        heading: "Use insertions tactically, not as the whole programme",
        paragraphs: p(
          "Insertions are a lever for pages sitting at positions six to fifteen that need a push. They are not a substitute for building genuine editorial presence, and a profile made entirely of insertions has an obvious shape.",
          "In most programmes I run they account for roughly a quarter of placements, concentrated on whichever commercial pages are closest to breaking through."
        ),
      },
    ],
    faqs: [
      {
        q: "Are link insertions against search engine guidelines?",
        a: "Paid links that pass equity are, regardless of format. The practical distinction is whether the placement is genuinely useful in context and on a page with a real audience. Selection quality is what separates a durable insertion from a liability.",
      },
      {
        q: "How quickly do insertions affect rankings?",
        a: "Often within four to ten weeks, because the host page is already indexed and trusted. That is considerably faster than a newly published guest article.",
      },
    ],
    related: ["anchor-text-strategy-smart-home", "manual-outreach-that-gets-replies"],
  },
  {
    slug: "manual-outreach-that-gets-replies",
    title: "Manual Outreach That Gets Replies From Editors Who Ignore Everyone",
    seoTitle: "Manual Outreach for Link Building: Getting Editor Replies",
    metaDescription:
      "A practical outreach system for smart home link building: list building, angle research, first contact, follow-ups and relationship management.",
    excerpt:
      "The best publications in this category never answer templates. Here is the workflow that reaches them.",
    category: "Manual Outreach",
    date: "2026-04-27",
    readTime: "8 min",
    image: "workspace",
    intro: p(
      "Outreach at scale is a numbers game with terrible numbers. Reply rates below two percent are normal, and the sites that do reply are usually the ones selling placements to everyone. The alternative is to send far fewer emails and make each one worth reading.",
      "This is the workflow I use. It produces reply rates between eighteen and thirty percent on curated lists, which changes the economics of the whole programme."
    ),
    sections: [
      {
        heading: "Build lists by hand, in cohorts of twenty",
        paragraphs: p(
          "A twenty-domain cohort is small enough to research properly and large enough to produce placements. For each domain I record recent smart-home coverage, the named contact, their last three articles, and one specific gap in their coverage.",
          "This takes about three hours per cohort. That time is the entire competitive advantage — nobody sending five hundred emails a day can do it."
        ),
      },
      {
        heading: "Lead with the angle, not the ask",
        paragraphs: p(
          "The first two sentences must show you read their work and have something they can use. No introductions, no compliments, no explaining who you are. Editors decide within one line whether to keep reading.",
          "State the specific piece you are proposing, why their audience needs it now, and who is writing it. Save the link discussion for after they express interest — leading with it converts a pitch into a transaction."
        ),
      },
      {
        heading: "Follow up twice, then stop",
        paragraphs: p(
          "Two follow-ups spaced five and twelve days apart capture nearly all the replies you are going to get. A third adds almost nothing and costs you the relationship. Each follow-up should add something — a revised angle, a data point, a different section of the publication.",
          "Log every non-reply. A contact who ignored you in March frequently accepts a different angle in September, and the log is what makes that possible."
        ),
      },
      {
        heading: "Treat replies as relationships",
        paragraphs: p(
          "The first placement is the expensive one. Every subsequent placement with the same contact costs a fraction of the effort. Maintain a relationship record: what they accepted, what they rejected and why, their deadlines, their format preferences.",
          "After two years of this in one category, a meaningful share of a month's placements come from inbound requests. That is the point at which a programme becomes genuinely defensible."
        ),
      },
      {
        heading: "Measure the right funnel",
        paragraphs: p(
          "Track contacted, replied, accepted, published and live-at-90-days. Most teams only track published. The reply-to-accepted ratio tells you whether your angles are good; the accepted-to-published ratio tells you whether your writing is.",
          "When placements dip, this funnel tells you which part broke instead of leaving you to guess."
        ),
      },
    ],
    faqs: [
      {
        q: "Should outreach emails be personalised manually or with variables?",
        a: "Manually, for the first two sentences at minimum. Variable-based personalisation is recognisable and performs closer to a template than to genuine research.",
      },
      {
        q: "What is a realistic reply rate?",
        a: "On a properly researched list in a narrow category, eighteen to thirty percent is achievable. On a scraped list, expect low single digits.",
      },
    ],
    related: ["guest-posting-for-home-automation-brands", "editorial-link-building-vs-guest-posting"],
  },
  {
    slug: "authority-building-for-new-domains",
    title: "Authority Building for New Domains in a Crowded Category",
    seoTitle: "Authority Building for New Smart Home Domains",
    metaDescription:
      "How to build domain authority from zero in home automation: link velocity, foundational coverage, cluster sequencing and realistic timelines.",
    excerpt:
      "A domain with no history has one advantage: nothing to undo. Here is how to sequence its first twelve months.",
    category: "Authority",
    date: "2026-04-14",
    readTime: "8 min",
    image: "growth",
    intro: p(
      "New domains in home automation face a specific problem. The category's commercial queries are contested by publishers with fifteen-year-old domains and thousands of referring domains. No amount of clever content fixes that in a quarter.",
      "What does work is a deliberate sequence that establishes existence, then relevance, then competitiveness — in that order."
    ),
    sections: [
      {
        heading: "Months one to three: existence",
        paragraphs: p(
          "The first objective is simply to be a real entity on the web. Consistent brand information, a handful of category directories that actually matter, product listings, and two or three genuine mentions. This is unglamorous and it is the foundation everything else stands on.",
          "Keep link velocity modest. A brand-new domain acquiring forty referring domains in month one has a shape that nothing organic produces."
        ),
      },
      {
        heading: "Months three to six: relevance",
        paragraphs: p(
          "Now the placements need to be topical. Every link should come from somewhere that covers connected living, installation, security or energy. The goal is a profile where a reviewer scanning your referring domains would conclude you belong to this category.",
          "This is where the cheapest available authority sits: emerging protocol topics, new device classes, and questions the incumbents have not bothered to answer well."
        ),
      },
      {
        heading: "Months six to twelve: competitiveness",
        paragraphs: p(
          "With relevance established, concentrate placements on the cluster nearest to revenue. Expect a lag: hubs absorb links for weeks before spokes move. Resist the temptation to redistribute effort during that lag — it is the single most common way programmes fail.",
          "Around month eight in most programmes the curve changes slope. Everything before that looks like it is not working, which is why the plan has to be agreed up front."
        ),
      },
      {
        heading: "Do not buy your way past the sequence",
        paragraphs: p(
          "Every accelerated approach I have inherited and had to repair used the same shortcut: a burst of high-DR, low-relevance links early. It produces a brief lift and a profile that requires two quarters of dilution to fix.",
          "There is no version of this where a new domain outranks an established publisher on a head term inside six months. Planning around that constraint is more productive than pretending it away."
        ),
      },
      {
        heading: "Report leading indicators, not rankings",
        paragraphs: p(
          "In months one to six, rankings are a lagging and demoralising metric. Report relevant referring domains acquired, cluster coverage, indexation rate, and impressions growth in Search Console.",
          "Those move early and predict the rankings that arrive later. They also keep a stakeholder group patient enough to let the programme reach the point where it works."
        ),
      },
    ],
    faqs: [
      {
        q: "How many referring domains does a new smart home site need?",
        a: "It depends entirely on the pages you are targeting. Model it per page against the sites currently ranking one to five rather than chasing a domain-wide number.",
      },
      {
        q: "Is a link velocity limit a real thing?",
        a: "There is no published threshold, but abnormal acceleration relative to your brand's actual visibility is a pattern worth avoiding. Growth that tracks your other marketing activity is safer.",
      },
    ],
    related: ["home-automation-seo-strategy", "link-velocity-and-risk"],
  },
  {
    slug: "topical-authority-for-smart-home-sites",
    title: "Topical Authority for Smart Home Sites: Mapping Before Linking",
    seoTitle: "Topical Authority for Smart Home Websites",
    metaDescription:
      "How to map entities, build cluster hubs and route external links so a smart home site becomes a recognised source on its subject.",
    excerpt:
      "Domain authority is a vendor metric. Topical authority is what actually decides who ranks in this category.",
    category: "Topical Authority",
    date: "2026-04-01",
    readTime: "9 min",
    image: "smartHome",
    intro: p(
      "Two sites with identical backlink counts can rank very differently, and the reason is usually subject coverage. Search systems are trying to determine whether a site is a credible source on a topic, and that judgement is built from both the content you publish and the company your links keep.",
      "Topical authority is therefore an off-page discipline as much as a content one."
    ),
    sections: [
      {
        heading: "Map entities before pages",
        paragraphs: p(
          "Start with the entities that define your category: Matter, Thread, Zigbee, Z-Wave, border routers, occupancy sensing, scene control, access control, load shedding, and the ecosystems your buyers already own. These are the things search systems already understand relationships between.",
          "Every page you publish should map cleanly to one entity or one relationship between two. Pages that do not map to anything are the ones that never rank and quietly drag down the rest."
        ),
      },
      {
        heading: "Build genuine hubs",
        paragraphs: p(
          "A hub is not a category listing page. It is the most complete resource on your site for a group of entities, deep enough that a reader does not need to go elsewhere, and linked to every spoke that elaborates on part of it.",
          "Hubs are what external links should point at. They absorb equity and redistribute it internally, which is far more efficient than trying to acquire links for forty individual spokes."
        ),
      },
      {
        heading: "Cover the unglamorous questions",
        paragraphs: p(
          "Coverage completeness matters more than any single article's quality. The questions competitors skip — firmware rollback procedures, mixed-protocol interference, what happens to automations when the internet drops — are cheap to rank for and they are the ones that establish genuine subject credibility.",
          "They also generate the outreach angles that editors actually accept, which closes the loop between content and links."
        ),
      },
      {
        heading: "Route links at cluster level",
        paragraphs: p(
          "Assign each quarter's placements to a cluster and measure at cluster level: average position across the cluster's target set, impressions, and how many spokes entered the top ten without receiving a direct link.",
          "That last metric is the clearest evidence the mechanism is working. When spokes start lifting on their own, the hub has crossed the threshold."
        ),
      },
      {
        heading: "Keep the map alive",
        paragraphs: p(
          "This category changes fast. Protocols get versions, ecosystems get bridged, device classes appear. Review the entity map quarterly and add clusters early — the cheapest authority available is always on a topic that is about to matter and does not yet have good results.",
          "Brands that did this with Matter in its first eighteen months are still holding those positions."
        ),
      },
    ],
    faqs: [
      {
        q: "How many pages does a cluster need?",
        a: "Enough to answer the subject completely, which is usually between eight and twenty-five. Publishing thin pages to hit a count is counterproductive.",
      },
      {
        q: "Do internal links build topical authority?",
        a: "They distribute it and signal structure, but they cannot create it alone. External corroboration is what turns internal structure into recognised authority.",
      },
    ],
    related: ["home-automation-seo-strategy", "competitor-backlink-gap-analysis"],
  },
  {
    slug: "digital-pr-for-hardware-launches",
    title: "Digital PR for Hardware Launches Without a Publicist Budget",
    seoTitle: "Digital PR for Smart Home Hardware Launches",
    metaDescription:
      "How smart home hardware brands earn editorial coverage at launch: asset selection, embargo handling, reviewer outreach and link capture.",
    excerpt:
      "Launches produce a short window of editorial attention. Most brands waste it on press releases nobody links to.",
    category: "Digital PR",
    date: "2026-03-19",
    readTime: "7 min",
    image: "hero",
    intro: p(
      "A hardware launch is the one moment when journalists in your category are predisposed to write about you. It is also the moment most brands hand them a press release with no data, no images they can use, and no angle beyond 'we made a thing'.",
      "Treated properly, a launch can generate more durable links than two quarters of outreach."
    ),
    sections: [
      {
        heading: "Decide what the story is besides the product",
        paragraphs: p(
          "Product specs are not a story. The story is usually adjacent: what problem the category has not solved, what your testing revealed, what the installation data says. Give a writer a piece they can build a headline around and the product becomes the supporting detail.",
          "The strongest angle I have used repeatedly in this category is real installation cost and time data. Nobody publishes it, everybody searching wants it, and it is trivially citable."
        ),
      },
      {
        heading: "Prepare assets writers can actually use",
        paragraphs: p(
          "High-resolution images without watermarks, a short spec sheet in plain HTML, a named spokesperson with real availability, and any data in a format that can be quoted and charted. Every missing item is a reason a writer covers a competitor instead.",
          "Host the data on your own site with a permanent URL. That is the page everyone will link to, and it keeps earning citations long after the launch cycle ends."
        ),
      },
      {
        heading: "Sequence the outreach",
        paragraphs: p(
          "Brief the two or three publications that matter most under embargo, well ahead. Give them exclusivity on some element. Then run the wider push on launch day, and a third wave two weeks later aimed at writers who cover round-ups and comparisons rather than news.",
          "That third wave is where most of the durable links come from, and it is the one almost everyone skips."
        ),
      },
      {
        heading: "Capture the unlinked mentions",
        paragraphs: p(
          "A launch generates brand mentions without links. Monitor for them and follow up politely with a specific suggestion: the data page, not the homepage. Conversion on these requests is far higher than cold outreach because the writer already covered you.",
          "Do this within a fortnight, while the article is still fresh in the writer's queue."
        ),
      },
      {
        heading: "Keep the asset working after launch",
        paragraphs: p(
          "Refresh the data annually and re-pitch it. A benchmark that gets updated becomes a reference point, and reference points accumulate links passively for years.",
          "This is the closest thing to a compounding asset available in off-page SEO for hardware brands."
        ),
      },
    ],
    faqs: [
      {
        q: "Do press release distribution services build links?",
        a: "They produce syndicated duplicates with little value. Direct pitching to named writers is what generates coverage worth having.",
      },
      {
        q: "How far ahead should embargo briefings go out?",
        a: "Two to three weeks for most trade and consumer smart-home publications, longer if you want review coverage that requires hands-on testing time.",
      },
    ],
    related: ["editorial-link-building-vs-guest-posting", "unlinked-brand-mentions"],
  },
  {
    slug: "anchor-text-strategy-smart-home",
    title: "Anchor Text Strategy for Smart Home Brands",
    seoTitle: "Anchor Text Strategy for Smart Home SEO",
    metaDescription:
      "How to plan anchor text distribution for smart home sites, dilute an over-optimised profile and choose anchors that read naturally.",
    excerpt:
      "Anchor text is where most inherited link profiles go wrong, and it is the fastest thing to fix.",
    category: "Anchor Text",
    date: "2026-03-05",
    readTime: "7 min",
    image: "growth",
    intro: p(
      "When I audit a new client's backlink profile, anchor distribution is the first thing I look at, and it is the first thing that is usually broken. Aggressive exact-match anchors are the signature of a previous agency being measured on rankings for a specific keyword.",
      "The fix is not disavowal. It is dilution, and it works faster than people expect."
    ),
    sections: [
      {
        heading: "What a natural profile looks like",
        paragraphs: p(
          "Sites that earn links naturally have anchors dominated by their brand name, their URL, and phrases like the article title or 'according to'. Exact-match commercial anchors are a small minority, and they appear mostly on pages that are genuinely about that term.",
          "Compare your distribution to the three competitors ranking above you rather than to a generic percentage guideline. The right distribution is category-relative."
        ),
      },
      {
        heading: "Diluting an over-optimised profile",
        paragraphs: p(
          "Dilution means acquiring new links with branded, URL and descriptive anchors until the aggressive ones stop dominating. It requires no removals and carries none of the risk of disavowing links that are actually helping.",
          "In the integrator programme I ran last year, exact-match share fell from 41% to 12% across nine months purely through acquisition, and the affected pages started moving before any authority gain could explain it."
        ),
      },
      {
        heading: "Choose anchors that describe the destination",
        paragraphs: p(
          "A good anchor tells a reader what they will get if they click. 'Matter and Thread compatibility explained' is better than 'smart home hub' both for the reader and as a relevance signal, because it carries the topic without the commercial fingerprint.",
          "This also makes anchors much easier to get past editors, who reject keyword-stuffed anchors far more often than descriptive ones."
        ),
      },
      {
        heading: "Vary by placement type",
        paragraphs: p(
          "Guest posts should skew descriptive and partial-match. Insertions should follow whatever the host paragraph naturally supports. Editorial coverage will be mostly branded, and that is fine — it is doing a different job.",
          "A profile where every placement type produces the same anchor shape is a profile where one person wrote all of them."
        ),
      },
      {
        heading: "Monitor drift",
        paragraphs: p(
          "Anchor distribution moves as links are removed and added. Review it quarterly against the same competitor set, and adjust the acquisition mix accordingly. It takes fifteen minutes and prevents the problem you would otherwise inherit two years later.",
          "Keep a record of the distribution at each review so drift is visible as a trend rather than a snapshot."
        ),
      },
    ],
    faqs: [
      {
        q: "What percentage of anchors should be exact match?",
        a: "There is no universal number. Benchmark against the sites currently ranking for your targets; in most smart-home SERPs the leaders sit in the low single digits.",
      },
      {
        q: "Should I disavow over-optimised links?",
        a: "Rarely. Unless the links are from clearly manipulative networks, dilution is lower risk and usually faster than disavowal.",
      },
    ],
    related: ["link-insertions-done-properly", "link-velocity-and-risk"],
  },
  {
    slug: "competitor-backlink-gap-analysis",
    title: "Competitor Backlink Gap Analysis Without the 4,000-Row Export",
    seoTitle: "Competitor Backlink Gap Analysis for Smart Home SEO",
    metaDescription:
      "A practical method for competitor link analysis: choosing competitors, de-noising exports, scoring replicability and building an acquisition roadmap.",
    excerpt:
      "The export is not the analysis. Here is how to turn a competitor's profile into a list you can actually execute.",
    category: "Competitor Analysis",
    date: "2026-02-20",
    readTime: "8 min",
    image: "growth",
    intro: p(
      "Every backlink tool will hand you a link-intersect report in about ninety seconds. That report is not an analysis; it is raw material, and roughly eighty percent of it is noise you cannot or should not replicate.",
      "The work is in the filtering, the scoring and the sequencing."
    ),
    sections: [
      {
        heading: "Pick competitors by SERP overlap",
        paragraphs: p(
          "The competitors that matter are the ones appearing alongside you on your target queries, not the biggest companies in the industry. A billion-dollar manufacturer's profile is unreplicable and tells you nothing actionable.",
          "Pull the top five results for twenty of your priority queries and pick the three domains that appear most often. Those are your real competitors for this purpose."
        ),
      },
      {
        heading: "Strip the noise ruthlessly",
        paragraphs: p(
          "Remove scrapers, aggregators, expired-domain spam, syndicated duplicates, and anything from a domain with no organic traffic. Then remove the categories you cannot replicate: acquisitions coverage, funding announcements, partner-network pages.",
          "A 4,000-row export typically reduces to 200–400 genuinely interesting domains. That is a list a person can work with."
        ),
      },
      {
        heading: "Score for replicability",
        paragraphs: p(
          "For each remaining domain, ask three questions: does it accept contributed or updated content, does it cover our specific subcategory, and is there an identifiable contact? Score each and sort.",
          "The top decile of that list is usually where the next quarter's placements come from, and it is a far better use of budget than chasing domain rating."
        ),
      },
      {
        heading: "Map gaps per page, not per domain",
        paragraphs: p(
          "Domain-level gap analysis hides the thing you need to know. Run the intersect for individual URL pairs — your category page against their ranking category page — and you will see exactly which placements support the pages beating you.",
          "That is the difference between 'they have more links' and 'their comparison page has nineteen relevant referring domains and ours has three'."
        ),
      },
      {
        heading: "Turn it into a 90-day plan",
        paragraphs: p(
          "Group the prioritised targets into monthly cohorts of twenty, assign each cohort to a destination cluster, and set a realistic conversion expectation. A well-qualified cohort should produce four to eight placements.",
          "The analysis is only worth what gets executed from it. A gap document with no cohort plan attached almost never turns into links."
        ),
      },
    ],
    faqs: [
      {
        q: "Which backlink tool is best for this?",
        a: "The tool matters much less than the filtering discipline. Any major index will surface the same replicable domains once the noise is removed.",
      },
      {
        q: "How often should gap analysis be repeated?",
        a: "Quarterly is sufficient for most programmes. Competitor profiles do not change fast enough to justify monthly re-analysis.",
      },
    ],
    related: ["topical-authority-for-smart-home-sites", "measuring-link-building-roi"],
  },
  {
    slug: "link-velocity-and-risk",
    title: "Link Velocity and Risk: How Fast Is Too Fast",
    seoTitle: "Link Velocity and Risk Management in Link Building",
    metaDescription:
      "How to plan link acquisition pace, recognise unnatural patterns and manage risk across a multi-quarter link building programme.",
    excerpt:
      "There is no published speed limit. There are patterns that look constructed, and they are avoidable.",
    category: "Authority",
    date: "2026-02-06",
    readTime: "7 min",
    image: "hero",
    intro: p(
      "Clients ask for a number: how many links per month is safe. There is no number, because velocity only means anything relative to everything else the brand is doing.",
      "What matters is whether your acquisition curve is consistent with a brand that is actually growing."
    ),
    sections: [
      {
        heading: "Velocity is relative, not absolute",
        paragraphs: p(
          "A brand running a national campaign, launching a product and appearing at trade shows can plausibly acquire fifty referring domains in a month. A dormant domain acquiring the same fifty has no story to explain it.",
          "Before setting a monthly target, look at what else is happening in the business. Align link acquisition with real activity and the curve takes care of itself."
        ),
      },
      {
        heading: "Consistency beats bursts",
        paragraphs: p(
          "A steady six to twelve relevant domains monthly for two years produces a healthier profile and better results than three months of thirty followed by nine months of nothing. Bursts also make attribution impossible — you cannot tell which placements worked.",
          "Retained programmes exist for this reason, not because agencies prefer recurring revenue."
        ),
      },
      {
        heading: "Watch the composition, not just the count",
        paragraphs: p(
          "Risk lives in composition. Thirty links from thirty different genuine publications is unremarkable. Thirty links from five networks with shared hosting and identical footers is a pattern regardless of pace.",
          "Audit composition quarterly: hosting overlap, outbound-link neighbourhoods, template similarity and contact overlap."
        ),
      },
      {
        heading: "Plan for removals",
        paragraphs: p(
          "Between ten and twenty percent of contributed placements disappear over three years. If your plan assumes every link is permanent, your projections are wrong and your quarterly reports will eventually show unexplained regression.",
          "Build attrition into the model and monitor live status monthly so removals are found early enough to replace."
        ),
      },
      {
        heading: "Have a downside plan",
        paragraphs: p(
          "Before a programme starts, agree what happens if rankings drop: what gets paused, what gets audited first, and what evidence would justify changing tactics. Deciding this calmly in month one is much better than deciding it in a panic in month seven.",
          "Programmes with a written downside plan survive volatility. Programmes without one get cancelled during the first bad month."
        ),
      },
    ],
    faqs: [
      {
        q: "Can too many links hurt a site?",
        a: "Volume alone is not the problem; an implausible pattern of low-relevance, similarly-sourced links is. Composition and plausibility matter far more than count.",
      },
      {
        q: "Should link building pause during an algorithm update?",
        a: "No. Pause interpretation, not acquisition. Wait for the rollout to settle before drawing conclusions, but continuity of a quality programme is not the risk.",
      },
    ],
    related: ["authority-building-for-new-domains", "anchor-text-strategy-smart-home"],
  },
  {
    slug: "unlinked-brand-mentions",
    title: "Turning Unlinked Brand Mentions Into Editorial Links",
    seoTitle: "How to Convert Unlinked Brand Mentions Into Links",
    metaDescription:
      "A repeatable workflow for finding unlinked mentions of a smart home brand and converting them into contextual editorial links.",
    excerpt:
      "The cheapest links available are on pages that already mention you and forgot the hyperlink.",
    category: "Editorial Links",
    date: "2026-01-23",
    readTime: "6 min",
    image: "workspace",
    intro: p(
      "Every brand with any market presence is mentioned on pages that do not link to it. Round-ups, forum digests, comparison articles, installer blogs. Each one is a writer who already decided you were worth naming.",
      "Conversion rates on these requests run several times higher than cold outreach, and the work is mostly mechanical."
    ),
    sections: [
      {
        heading: "Find them systematically",
        paragraphs: p(
          "Set up monitoring for your brand name, product names, and common misspellings, and filter out your own domain and social profiles. Run a quarterly historical sweep too — most unlinked mentions predate any monitoring you set up.",
          "Prioritise by whether the mentioning page receives organic traffic. A mention on a page nobody visits is not worth an email."
        ),
      },
      {
        heading: "Ask for something specific",
        paragraphs: p(
          "Do not ask for 'a link'. Point at the exact sentence, suggest the exact destination, and explain why it helps the reader — usually because the page you are suggesting answers the question the sentence raises.",
          "Suggest a resource page or guide rather than a product page. Editors decline commercial destinations far more often, and a guide link routed into a cluster is worth more anyway."
        ),
      },
      {
        heading: "Make it easy to say yes",
        paragraphs: p(
          "Include the anchor you would suggest, the URL, and a one-line reason. Three sentences total. The entire value of this tactic is that it costs the writer thirty seconds.",
          "Never mention SEO, rankings or link equity. Frame it entirely as a reader-experience improvement, because for a well-chosen destination that is genuinely what it is."
        ),
      },
      {
        heading: "Track and repeat quarterly",
        paragraphs: p(
          "Log which publications converted. Those contacts are now warm, and they are excellent candidates for the next editorial pitch — you have had a successful interaction with no commercial ask attached.",
          "A quarterly sweep takes a couple of hours and reliably produces placements that cost nothing but attention."
        ),
      },
    ],
    faqs: [
      {
        q: "What conversion rate should I expect?",
        a: "On relevant pages with real traffic, twenty to forty percent is common — far above cold outreach, because the writer already referenced you voluntarily.",
      },
      {
        q: "Is it worth chasing mentions on low-traffic pages?",
        a: "Generally no. Prioritise by traffic and relevance; the long tail of dead pages consumes time without return.",
      },
    ],
    related: ["digital-pr-for-hardware-launches", "manual-outreach-that-gets-replies"],
  },
  {
    slug: "measuring-link-building-roi",
    title: "Measuring Link Building ROI Without Fooling Yourself",
    seoTitle: "How to Measure Link Building ROI Properly",
    metaDescription:
      "A measurement framework for link building: leading indicators, cluster-level attribution, cost per relevant referring domain and revenue modelling.",
    excerpt:
      "Counting links is not measurement. Here is a framework that survives a conversation with a finance team.",
    category: "Measurement",
    date: "2026-01-09",
    readTime: "8 min",
    image: "growth",
    intro: p(
      "Link building is the easiest marketing channel to report dishonestly. Placements are countable, look like output, and correlate with nothing in particular. A finance team is right to be sceptical of a report that says 'we built fourteen links'.",
      "Here is the measurement structure I use, built so the numbers still make sense two years later."
    ),
    sections: [
      {
        heading: "Separate output, outcome and impact",
        paragraphs: p(
          "Output is placements. Outcome is what changed in search: relevant referring domains, cluster average position, impressions. Impact is business: qualified sessions, enquiries, revenue from organic.",
          "Report all three, clearly labelled. Most reporting conflates them, which is why nobody trusts it."
        ),
      },
      {
        heading: "Use cost per relevant referring domain",
        paragraphs: p(
          "Cost per link is a misleading unit because it treats every domain as equivalent. Cost per relevant referring domain — where relevance is defined by your own category criteria — is comparable across quarters and across vendors.",
          "Watch this figure fall over time as relationships mature. If it is not falling by year two, the programme is not compounding and something is wrong with how relationships are being managed."
        ),
      },
      {
        heading: "Attribute at cluster level",
        paragraphs: p(
          "Attributing a ranking change to an individual link is not possible. Attributing it to a quarter of concentrated work on a cluster is. Set the analysis unit to the cluster and the numbers become both honest and useful.",
          "This is another reason to sequence work by cluster rather than distributing evenly — even distribution makes measurement impossible as well as being less effective."
        ),
      },
      {
        heading: "Model revenue conservatively",
        paragraphs: p(
          "Take incremental organic sessions on the target cluster, apply the site's actual conversion rate for that page type, apply the real close rate and average value. Then discount it, because some of that traffic would have arrived anyway.",
          "A conservative model that holds up under scrutiny buys more budget than an optimistic one that gets picked apart in the first review meeting."
        ),
      },
      {
        heading: "Report the failures",
        paragraphs: p(
          "Include placements that were removed, campaigns that produced nothing, and clusters that did not move. Every programme has them. Reporting them is what makes the rest of the report credible.",
          "It also produces better decisions: the clusters that did not move are usually telling you something about intent or content that no amount of additional linking will fix."
        ),
      },
    ],
    faqs: [
      {
        q: "How long before link building ROI can be measured?",
        a: "Leading indicators move within one quarter. Meaningful revenue attribution generally needs two to four quarters of data on a cluster.",
      },
      {
        q: "Should link building be measured against last-click attribution?",
        a: "No. Organic discovery rarely closes last-click. Use assisted and cluster-level session growth alongside conversion data.",
      },
    ],
    related: ["competitor-backlink-gap-analysis", "home-automation-seo-strategy"],
  },
  {
    slug: "smart-home-content-that-earns-links",
    title: "Smart Home Content That Actually Earns Links",
    seoTitle: "Content That Earns Links for Smart Home Brands",
    metaDescription:
      "Which content formats reliably attract editorial links in the home automation category, and how to build them so writers can cite them.",
    excerpt:
      "Most linkable-asset advice is generic. These are the formats that work specifically in home automation.",
    category: "Strategy",
    date: "2025-12-15",
    readTime: "7 min",
    image: "smartHome",
    intro: p(
      "The 'linkable asset' conversation usually produces an infographic nobody wanted. In home automation the formats that actually earn citations are narrower and more practical than the generic advice suggests.",
      "They share one property: they contain a number or a finding a writer cannot get anywhere else."
    ),
    sections: [
      {
        heading: "Installation cost and time benchmarks",
        paragraphs: p(
          "Nobody publishes reliable figures for what whole-home lighting control, retrofit access control or multi-room audio actually cost and how long they take to install. Every consumer article about the category needs a number, and writers will cite whoever provides one credibly.",
          "You need a defensible methodology and a sample size you can state. Publish both alongside the data, keep it on a permanent URL, and update it annually."
        ),
      },
      {
        heading: "Interoperability testing",
        paragraphs: p(
          "Which devices actually work together, in what configurations, with what caveats. This is expensive to produce and enormously valuable, because compatibility claims in this industry are marketing statements and everyone knows it.",
          "Even a limited matrix covering thirty devices across three ecosystems attracts citations, because the honest version does not exist elsewhere."
        ),
      },
      {
        heading: "Failure and reliability data",
        paragraphs: p(
          "What breaks, how often, and what the recovery looks like. Support ticket data, anonymised and aggregated, is one of the most citable assets a manufacturer owns and almost none of them publish it.",
          "It also builds extraordinary trust with the installer channel, which is a commercial benefit independent of any link."
        ),
      },
      {
        heading: "Protocol explainers written by engineers",
        paragraphs: p(
          "Most Matter and Thread content online is rewritten from the same three sources. An explainer written by someone who has actually implemented a border router reads differently and gets cited by writers who need a source they can trust.",
          "Put the engineer's name on it. Attribution is part of what makes it citable."
        ),
      },
      {
        heading: "What does not work",
        paragraphs: p(
          "Trend-prediction posts, generic buyer's guides, infographics summarising public data, and anything with 'ultimate' in the title. These formats get produced constantly in this category and earn nothing, because they contain no information that did not already exist.",
          "If your asset can be written by someone who has never touched the hardware, no writer needs to cite it."
        ),
      },
    ],
    faqs: [
      {
        q: "How much does a linkable data asset cost to produce?",
        a: "Usually less than a quarter of link-building budget, and the good ones keep earning citations for years. Internal data you already hold is the cheapest starting point.",
      },
      {
        q: "How do I promote a data asset?",
        a: "Pitch it directly to writers who have recently needed that number and did not have it. Search for articles hedging with 'roughly' or 'estimates vary' and start there.",
      },
    ],
    related: ["digital-pr-for-hardware-launches", "topical-authority-for-smart-home-sites"],
  },
  {
    slug: "choosing-an-off-page-seo-partner",
    title: "Choosing an Off-Page SEO Partner: Questions That Reveal Everything",
    seoTitle: "How to Choose an Off-Page SEO Partner",
    metaDescription:
      "The questions that separate a genuine link building specialist from a reseller, and the answers you should expect to hear.",
    excerpt:
      "Six questions. If a vendor cannot answer them specifically, you already know what you are buying.",
    category: "Strategy",
    date: "2025-11-28",
    readTime: "6 min",
    image: "workspace",
    intro: p(
      "Most link building vendors are resellers with a spreadsheet of marketplace inventory. Some are genuine specialists. The difference is not visible on a website, but it becomes obvious in about twenty minutes of specific questions.",
      "These are the ones I would ask if I were buying."
    ),
    sections: [
      {
        heading: "Show me five placements from the last quarter",
        paragraphs: p(
          "Not a client list — actual live URLs. Read the articles. Do they read like something a person wanted to publish, or like filler built around an anchor? Is the surrounding site genuinely about your category?",
          "A specialist will have examples ready and will happily walk you through why each target was chosen. A reseller will offer a domain list with metrics instead."
        ),
      },
      {
        heading: "What is your removal rate at twelve months?",
        paragraphs: p(
          "Anyone who has run programmes for years knows this number, and anyone who does not track it is not monitoring live status. Both answers are informative.",
          "A credible answer sits somewhere between five and fifteen percent for contributed content. 'Zero' means they are not checking."
        ),
      },
      {
        heading: "How do you decide which page gets the link?",
        paragraphs: p(
          "The answer should involve cluster structure, competitor gap data and commercial priority. If it involves 'whatever page the client wants to rank', there is no strategy underneath.",
          "Ask what they would do if the page you named was the wrong target. A specialist will tell you; a reseller will agree with you."
        ),
      },
      {
        heading: "What will you refuse to do?",
        paragraphs: p(
          "Everyone claims quality standards. Ask for a specific example of a target they rejected last month and why. Specialists answer immediately because it happens weekly.",
          "Vagueness here is the single most reliable warning sign in the whole conversation."
        ),
      },
      {
        heading: "Who actually does the work?",
        paragraphs: p(
          "Find out whether the person in the meeting is the person doing outreach, or whether it is being subcontracted to a team you will never meet. Neither is disqualifying, but you should know.",
          "In a narrow category like home automation, subcontracted outreach usually means generic outreach, because the subcontractor has no category relationships."
        ),
      },
      {
        heading: "What does month one look like?",
        paragraphs: p(
          "A good answer involves audit, gap modelling and target list approval — probably with few or no links placed. A vendor promising placements in week one is drawing from existing inventory, which is inventory your competitors can also buy.",
          "Slow first months are a feature. They are what the rest of the programme is built on."
        ),
      },
    ],
    faqs: [
      {
        q: "Should I hire a specialist or a full-service agency?",
        a: "If off-page is your main constraint and your category is narrow, a specialist with category relationships will outperform a generalist team. For broad multi-channel needs, an agency may fit better.",
      },
      {
        q: "What is a reasonable monthly budget for link building?",
        a: "It varies with competition, but budgets below the cost of a handful of genuinely vetted placements per month rarely produce movement in a contested category like home automation.",
      },
    ],
    related: ["measuring-link-building-roi", "manual-outreach-that-gets-replies"],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export const BLOG_CATEGORIES = Array.from(
  new Set(BLOG_POSTS.map((post) => post.category)),
).sort();
