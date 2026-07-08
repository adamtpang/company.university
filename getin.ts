/* ====================================================================
   HOW TO GET IN  ·  the demand-side pages of Company University
   --------------------------------------------------------------------
   /board ranks companies (supply of schools and jobs).
   /skills ranks what the market wants (demand for skills).
   /getin/[slug] is the bridge for one human: how people actually enter
   a top company, and the first-principles path to become one of them.

   House rules: no em dashes, honest patterns only (no invented names),
   every page ends in the Match CTA. Copy lives here, pages render it.
==================================================================== */

export interface GetInCompany {
  slug: string;
  name: string;
  cap: string; // market cap or stage, display only
  tag: string; // the door: role archetype that fits builders
  oneLine: string;
  hiresFor: string[];
  bar: string; // what they actually select on
  whoGetsIn: string[]; // honest patterns, not names
  skills: string[]; // names that appear on /skills
  artifact: string; // the build-this proof of work
  careersUrl: string;
}

export const GETIN_INTRO = {
  eyebrow: "The demand side",
  heading: "You do not apply to great companies. You enter them.",
  sub: "Every top company has a door built for builders: forward deployed, applied AI, developer relations. The resume line waits outside. The artifact walks in. Pick the company, study who actually gets in, build the proof, route it to a human.",
};

export const THE_METHOD = [
  {
    title: "Pick the door",
    desc: "Not a job title, a door: the role archetype that hires proof over pedigree. It is listed on every page below.",
  },
  {
    title: "Study who gets in",
    desc: "Each company selects on a pattern. Read it. Becoming the pattern beats persuading the recruiter.",
  },
  {
    title: "Build the artifact",
    desc: "One purpose-built project on their platform, deployed, demoable in one link. The spec is on each page.",
  },
  {
    title: "Publish and route it",
    desc: "Post it publicly and tag the team, then get it to a named human: a warm intro beats the portal by an order of magnitude.",
  },
  {
    title: "Apply with proof attached",
    desc: "Now the application is a formality confirming what the team already saw.",
  },
];

export const companies: GetInCompany[] = [
  {
    slug: "anthropic",
    name: "Anthropic",
    cap: "~$180B",
    tag: "Forward Deployed Engineer · Applied AI",
    oneLine: "The frontier lab whose applied team ships Claude into the real world.",
    hiresFor: [
      "Forward Deployed Engineer, Applied AI",
      "Developer Relations, Claude Platform",
      "Applied AI product engineers",
    ],
    bar: "Can you take Claude from API key to production system end to end, own the outcome with a customer, and explain it clearly? The FDE posting explicitly welcomes former technical founders.",
    whoGetsIn: [
      "Ex-founders who shipped real Claude-native products, not demos",
      "Builders with public MCP servers, agent skills, or reference apps the team already saw",
      "People routed by a warm intro from the developer ecosystem, not the cold portal",
    ],
    skills: ["LLM / RAG engineering", "Agentic AI / AI agent engineering", "MLOps / ML platform engineering"],
    artifact: "A real MCP server plus agent-skill bundle that solves one named customer workflow, deployed and demoable in a single link, with a short honest writeup of the design choices.",
    careersUrl: "https://www.anthropic.com/careers",
  },
  {
    slug: "openai",
    name: "OpenAI",
    cap: "~$300B",
    tag: "Forward Deployed / DevEx Engineer",
    oneLine: "The biggest platform surface in AI, hiring builders who make integration effortless.",
    hiresFor: [
      "Forward Deployed Software Engineer",
      "Developer Experience Engineer",
      "Solutions and applied engineers",
    ],
    bar: "Production-grade AI systems after the deal is signed, and empathy for the developer on the other side of the docs. Early-stage startup engineers are explicitly good fits.",
    whoGetsIn: [
      "Engineers from small startups who owned whole systems alone",
      "Builders who publish migrations, teardowns, and integration guides developers actually use",
      "People with a shipped product on the API, not a certificate about it",
    ],
    skills: ["LLM / RAG engineering", "Agentic AI / AI agent engineering", "Prompt engineering & AI literacy"],
    artifact: "Rebuild one of your own live products on the Responses or Agents API and publish the full teardown: what broke, what surprised you, what you would fix in their docs.",
    careersUrl: "https://openai.com/careers",
  },
  {
    slug: "vercel",
    name: "Vercel",
    cap: "~$9B",
    tag: "Startups Advocate · DevRel · FDE",
    oneLine: "The company whose customer is the technical founder you already are.",
    hiresFor: [
      "Startups Advocate (GTM and DevRel)",
      "Forward Deployed Engineer",
      "Sales Engineer, Startups",
    ],
    bar: "Do you speak founder natively and ship on their stack? The advocate role is literally: find technical founders, accelerate them on Vercel.",
    whoGetsIn: [
      "Next.js community builders whose templates and demos other people fork",
      "Founders who shipped many products on Vercel and can talk to founders as a peer",
      "People who show up with the demo already deployed on the platform",
    ],
    skills: ["LLM / RAG engineering", "Prompt engineering & AI literacy", "Analytics Engineering (dbt + SQL + data modeling)"],
    artifact: "A startup-velocity demo: landing page plus AI feature shipped on Vercel in a weekend, with a 90 second walkthrough aimed at their startups team.",
    careersUrl: "https://vercel.com/careers",
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    cap: "~$11B",
    tag: "Forward Deployed Engineer (incl. recent-grad track)",
    oneLine: "The voice AI leader with the friendliest door for young builders: a recent-grad FDE track.",
    hiresFor: [
      "Forward Deployed Engineer, Strategist",
      "FDE, Recent Graduate track",
      "Prototyping and partner engineers",
    ],
    bar: "Prototype fast, demo beautifully, translate the tech for partners. The recent-grad FDE variant trades pedigree for shipped voice demos.",
    whoGetsIn: [
      "Builders with public voice-AI demos that made people share them",
      "Hackathon shippers who integrate the API in a weekend and publish it",
      "Recent grads through the FDE track, the lowest-friction door on this page",
    ],
    skills: ["LLM / RAG engineering", "Agentic AI / AI agent engineering", "Prompt engineering & AI literacy"],
    artifact: "A 60 second public demo of your product speaking with their voices, posted and tagged, then attached to the FDE application as the opening line.",
    careersUrl: "https://elevenlabs.io/careers",
  },
  {
    slug: "ramp",
    name: "Ramp",
    cap: "~$32B",
    tag: "Applied AI Engineer",
    oneLine: "The fastest-growing fintech, paying $155k to $340k for full-stack AI builders.",
    hiresFor: [
      "Applied AI Engineer",
      "Software Engineer, AI DevX",
      "Software Engineer, Product Growth",
    ],
    bar: "Full-stack velocity aimed at spend, savings, and finance workflows. They love candidates who already built in their problem space.",
    whoGetsIn: [
      "Builders who shipped finance or spend-analysis tools before applying",
      "Engineers whose growth instincts show in the product, not the resume",
      "People who publish their thinking about Ramp's own space and tag the team",
    ],
    skills: ["LLM / RAG engineering", "Analytics Engineering (dbt + SQL + data modeling)", "Agentic AI / AI agent engineering"],
    artifact: "A working Ramp-adjacent tool (spend analysis, financial automation) plus a short essay on what you would build inside Ramp, sent to the applied AI team.",
    careersUrl: "https://ramp.com/careers",
  },
  {
    slug: "stripe",
    name: "Stripe",
    cap: "~$91B",
    tag: "Applied AI · Solutions · DevRel",
    oneLine: "The internet's money rails, selected on API craft and unreasonably good writing.",
    hiresFor: [
      "Applied AI and agentic commerce engineers",
      "Solutions architects",
      "Developer relations and docs engineers",
    ],
    bar: "Elegant API work and clear writing. Stripe's culture screens hard for people who make complex things legible.",
    whoGetsIn: [
      "Authors of integrations and OSS the ecosystem actually uses",
      "Writers whose technical posts read like Stripe docs",
      "Founders who processed real volume on the platform and can say what hurt",
    ],
    skills: ["LLM / RAG engineering", "Agentic AI / AI agent engineering", "Analytics Engineering (dbt + SQL + data modeling)"],
    artifact: "An agentic commerce demo on Stripe APIs (an agent that safely buys or bills) with a writeup good enough that their docs team would want to hire the author.",
    careersUrl: "https://stripe.com/jobs",
  },
  {
    slug: "notion",
    name: "Notion",
    cap: "~$10B",
    tag: "DevRel · Ecosystem · AI Engineer",
    oneLine: "The workspace platform whose ecosystem rewards builders with community pull.",
    hiresFor: [
      "Developer relations and ecosystem roles",
      "AI product engineers",
      "Community and education partnerships",
    ],
    bar: "Product taste plus community proof: they notice people who make Notion more valuable for thousands of users without being asked.",
    whoGetsIn: [
      "Template and integration creators with real distribution numbers",
      "Community leaders who ran programs, campuses, or courses on the product",
      "API builders whose tools the community already recommends",
    ],
    skills: ["Prompt engineering & AI literacy", "LLM / RAG engineering", "Analytics Engineering (dbt + SQL + data modeling)"],
    artifact: "A Notion API tool with real users, or a run education program on the platform: the campus model is a door here, walk through it with numbers.",
    careersUrl: "https://www.notion.com/careers",
  },
  {
    slug: "cursor",
    name: "Cursor (Anysphere)",
    cap: "~$10B",
    tag: "Field Engineer · Forward Deployed",
    oneLine: "The AI editor everyone uses, hiring the power users who push it furthest.",
    hiresFor: [
      "Field and forward deployed engineers",
      "Developer relations",
      "Product engineers with dev-tool obsession",
    ],
    bar: "Elite empathy for developer workflow plus live-demo confidence. They hire people who already bend the tool further than the team expected.",
    whoGetsIn: [
      "Power users who publish workflows others adopt",
      "Builders who ship real products with agentic coding and document the method",
      "People who demo live without a net",
    ],
    skills: ["Agentic AI / AI agent engineering", "Prompt engineering & AI literacy", "LLM / RAG engineering"],
    artifact: "A filmed impossible workflow: a real product built end to end with agentic coding, with the technique documented so their team learns something from it.",
    careersUrl: "https://cursor.com/careers",
  },
  {
    slug: "deel",
    name: "Deel",
    cap: "~$12B",
    tag: "Global-first eng, sales, and ops",
    oneLine: "The global payroll giant that hires from anywhere, built for people exactly like remote islanders.",
    hiresFor: [
      "Engineers and AI builders, fully remote",
      "Expansion and market generalists",
      "Sales and partnerships worldwide",
    ],
    bar: "Ownership and speed inside a distributed team. Deel hires from everywhere, which makes it one of the few giants where a Guam address is neutral to positive.",
    whoGetsIn: [
      "Remote operators with public proof they ship without supervision",
      "Generalists who opened a market, a channel, or a product line alone",
      "Builders from outside the Bay who out-shipped the Bay",
    ],
    skills: ["Agentic AI / AI agent engineering", "Analytics Engineering (dbt + SQL + data modeling)", "Prompt engineering & AI literacy"],
    artifact: "An integration or automation demo in the global-employment workflow (onboarding, compliance, payroll data) plus a one-page teardown of a real market-entry playbook.",
    careersUrl: "https://www.deel.com/careers",
  },
  {
    slug: "nvidia",
    name: "NVIDIA",
    cap: "~$4.7T",
    tag: "Applied / agentic AI engineering",
    oneLine: "The most valuable company on Earth, and honestly the hardest door on this page.",
    hiresFor: [
      "Applied and agentic AI engineers",
      "Developer technology engineers",
      "Solutions architects",
    ],
    bar: "Deep systems or CUDA-level credibility, or serious agentic infrastructure depth. Panels lean on pedigree more than any other company here: a warm referral is close to required.",
    whoGetsIn: [
      "CUDA and systems OSS contributors whose work the team already depends on",
      "Researchers and GTC speakers with visible technical depth",
      "Referred candidates: the cold portal survives almost no one",
    ],
    skills: ["MLOps / ML platform engineering", "Agentic AI / AI agent engineering", "LLM / RAG engineering"],
    artifact: "An open-source contribution to agent infrastructure or GPU tooling with real benchmarks. One polished, deep artifact beats a wide portfolio at this door.",
    careersUrl: "https://www.nvidia.com/en-us/about-nvidia/careers/",
  },
];

export const GETIN_MAILTO = (company: string) =>
  `mailto:me@adampang.com?subject=${encodeURIComponent(
    `Get in: ${company}`
  )}&body=${encodeURIComponent(
    "I want in. Here is where I am today, and the company I am aiming at:"
  )}`;
