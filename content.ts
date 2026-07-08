/* ====================================================================
   COMPANY UNIVERSITY · SITE CONTENT
   Every word on the page lives in this file. Edit, save, done.
   Anything in [BRACKETS] is a placeholder: swap in the real value.
   House style: no em dashes, curly apostrophes, minimal words.
==================================================================== */

/** Every CTA on the page points here. */
export const MAILTO = "mailto:me@adampang.com?subject=Company%20University";

export type CatalogTag = "live" | "inMotion" | "events" | "open";

export interface CatalogRow {
  index: string;
  name: string;
  tag: CatalogTag;
}

export interface Problem {
  problem: string;
  answer: string;
}

export interface Step {
  title: string;
  desc: string;
}

export interface LadderRung {
  label: string;
  title: string;
  note: string;
}

export interface OfferItem {
  lead: string;
  detail: string;
}

export interface ProofLink {
  name: string;
  href?: string;
  domain?: string;
  note: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Member {
  name: string;
  role: string;
  bio: string;
  linkLabel: string;
  linkHref: string;
  open?: boolean;
}

export interface InSessionCard {
  name: string;
  domain: string;
  tag: CatalogTag;
  note: string;
}

export interface BoardRow {
  rank: string;
  name: string;
  domain: string;
  cap: string;
}

export const content = {
  name: "Company University",
  url: "https://companyuniversity.vercel.app",
  email: "me@adampang.com",
  description:
    "Every company gets a school. The university layer for top companies, at Network School: education in; power users, advocates, and hires out.",
  /* one line under the wordmark on the social card */
  ogThesis: "The university layer for top companies, at Network School.",

  utility: {
    left: "An independent program at Network School",
    right: "Forest City · 40 min from Singapore",
  },

  nav: {
    links: [
      { label: "Problems", href: "#problems" },
      { label: "System", href: "#system" },
      { label: "Offer", href: "#offer" },
      { label: "Proof", href: "#proof" },
      { label: "Companies", href: "/board" },
      { label: "Skills", href: "/skills" },
    ],
    cta: "Claim your college",
  },

  /* ---------------------------------------------------- 1 · hero --- */
  hero: {
    eyebrow: "Network School · Course catalog · 2026",
    headlinePre: "Every company gets a ",
    headlineEm: "school.",
    subline:
      "Company University is the university layer for top companies, at Network School: education in; power users, advocates, and hires out.",
    cta: "Claim your college",
    catalog: {
      header: "Course catalog",
      campus: "Network School",
      rows: [
        { index: "001", name: "Zcash School", tag: "live" },
        { index: "002", name: "Notion College", tag: "inMotion" },
        { index: "003", name: "Claude + OpenClaw", tag: "events" },
        { index: "004", name: "[Your company] College", tag: "open" },
        { index: "005", name: "[Your company] College", tag: "open" },
      ] as CatalogRow[],
      footer: "Registrar’s office · me@adampang.com",
    },
    tags: {
      live: "Live",
      inMotion: "In motion",
      events: "Events run",
      open: "Slot open",
    } as Record<CatalogTag, string>,
  },

  /* ------------------------------------------------ 2 · problems --- */
  problems: {
    eyebrow: "The problems",
    heading: "Six jobs you’d need five teams for.",
    intro:
      "Regular schooling is broken, and top companies already build their own training. Company University formalizes it: an education-to-employment pipeline where each company gets a college inside Network School.",
    items: [
      {
        problem: "Distribution is saturated.",
        answer:
          "We put your product in the hands of 150+ shipping builders every week, and they post what they make.",
      },
      {
        problem: "Activation dies after signup.",
        answer: "Weekly hands-on classes manufacture power users, not trial accounts.",
      },
      {
        problem: "APAC presence costs headcount.",
        answer:
          "A permanent campus embassy for less than one conference booth, cancelable monthly.",
      },
      {
        problem: "User research is slow.",
        answer:
          "Structured beta pools and feedback nights, digested monthly for your PMs.",
      },
      {
        problem: "Hiring is expensive.",
        answer:
          "The school is the take-home test, the flagship is the final round, winners get interviews.",
      },
      {
        problem: "Community never compounds.",
        answer: "A standing college compounds cohort over cohort, media kit included.",
      },
    ] as Problem[],
    capper: "Rent the layer instead of building five teams.",
  },

  /* -------------------------------------------------- 3 · system --- */
  system: {
    eyebrow: "How it works",
    heading: "One system, run for you.",
    sub: "You take one call a month. The machine does the rest.",
    steps: [
      {
        title: "Intake call",
        desc: "30 minutes. Your priorities become the session plan.",
      },
      {
        title: "Weekly engine",
        desc: "Classes with per-session KPIs: attendance, signups, things shipped, feedback collected.",
      },
      {
        title: "Community layer",
        desc: "A permanent home for your users on campus, alive between cohorts.",
      },
      {
        title: "Beta + media loops",
        desc: "Beta pools test what you ship; everything built gets posted.",
      },
      {
        title: "Flagship",
        desc: "A demo day or hackathon with a recruiting funnel built in.",
      },
      {
        title: "Monthly report",
        desc: "One page, designed to be forwarded internally.",
      },
    ] as Step[],
    ladder: {
      label: "The ladder",
      rungs: [
        {
          label: "Step 1",
          title: "Free first workshop",
          note: "On campus within 2 weeks of yes.",
        },
        {
          label: "Step 2",
          title: "6-week school + flagship",
          note: "The full machine, measured weekly.",
        },
        {
          label: "Step 3",
          title: "Permanent campus presence",
          note: "Your standing college at Network School.",
        },
      ] as LadderRung[],
    },
  },

  /* --------------------------------------------------- 4 · offer --- */
  offer: {
    eyebrow: "The offer",
    heading: "Built to be an easy yes.",
    items: [
      {
        lead: "30 minutes a month.",
        detail: "That’s your total time cost. We run curriculum, ops, rooms, people, and follow-up.",
      },
      {
        lead: "First workshop free.",
        detail: "Proof before money, on campus within two weeks of yes.",
      },
      {
        lead: "Miss the bar, don’t pay.",
        detail: "If a month misses the KPI bar we set together, you don’t pay for that month.",
      },
      {
        lead: "One company per category.",
        detail: "Three schools at a time. The slot is yours or your competitor’s.",
      },
    ] as OfferItem[],
    cta: "Claim your college",
  },

  /* --------------------------------------------------- 5 · proof --- */
  proof: {
    eyebrow: "Proof",
    heading: "Already running on campus.",
    links: [
      {
        name: "Zcash School",
        href: "https://zcash.school",
        domain: "zcash.school",
        note: "Live · funded under Zcash community grants",
      },
      {
        name: "Notion College",
        href: "https://notioncollege.vercel.app",
        domain: "notioncollege.vercel.app",
        note: "In motion · event deal signed with Notion",
      },
      {
        name: "Conjecture Institute",
        href: "https://conjecture.school",
        domain: "conjecture.school",
        note: "Research institute on campus",
      },
      {
        name: "Claude + OpenClaw",
        note: "Events already run on campus",
      },
    ] as ProofLink[],
    dashboard: {
      title: "Zcash School · Live at Network School",
      linkLabel: "zcash.school",
      linkHref: "https://zcash.school",
      stats: [
        { value: "Live", label: "Cohort status" },
        { value: "Funded", label: "Zcash community grants" },
        { value: "NS", label: "On campus, Forest City" },
      ] as Stat[],
      footnote: "Live cohort. Attendance and hire numbers publish at the flagship demo day.",
    },
  },

  /* ---------------------------------------------------- 6 · team --- */
  team: {
    eyebrow: "Team",
    heading: "Run from campus, not an agency.",
    members: [
      {
        name: "Adam Pang",
        role: "Program lead",
        bio: "23. Runs company education programs at Network School, Balaji Srinivasan’s live/work campus in Forest City, 40 minutes from Singapore.",
        linkLabel: "adampang.com",
        linkHref: "https://adampang.com",
      },
      {
        name: "[Collaborator]",
        role: "Open seat",
        bio: "[Curriculum, partnerships, or ops. This card is reserved for the right person.]",
        linkLabel: "me@adampang.com",
        linkHref: MAILTO,
        open: true,
      },
    ] as Member[],
  },

  /* --------------------------------------------------- · board --- */
  /* The /board route: companiesmarketcap, reimagined as the
     university layer. Refresh `rows` from companiesmarketcap.com. */
  board: {
    eyebrow: "The university layer",
    heading: "Ranked by market cap.",
    sub: "Every company on the board is an open college. We start at the bottom and climb.",
    inSessionLabel: "Now in session",
    inSession: [
      {
        name: "Zcash School",
        domain: "zcash.school",
        tag: "live",
        note: "Funded under Zcash community grants.",
      },
      {
        name: "Notion College",
        domain: "notion.college",
        tag: "inMotion",
        note: "Event deal signed with Notion.",
      },
      {
        name: "+ 4 in talks",
        domain: "stripe · vercel · exa · cofounder.co",
        tag: "open",
        note: "And climbing the board.",
      },
    ] as InSessionCard[],
    columns: {
      college: "College",
      cap: "Market cap",
      interest: "Interest",
      status: "Status",
    },
    rows: [
      { rank: "1", name: "NVIDIA", domain: "nvidia.university", cap: "$4.85T" },
      { rank: "2", name: "Apple", domain: "apple.university", cap: "$4.32T" },
      { rank: "3", name: "Alphabet", domain: "google.university", cap: "$4.22T" },
      { rank: "4", name: "Microsoft", domain: "microsoft.university", cap: "$2.78T" },
      { rank: "5", name: "Amazon", domain: "amazon.university", cap: "$2.52T" },
      { rank: "6", name: "TSMC", domain: "tsmc.school", cap: "$2.26T" },
      { rank: "7", name: "SpaceX", domain: "spacex.university", cap: "$2.06T" },
      { rank: "8", name: "Broadcom", domain: "broadcom.school", cap: "$1.81T" },
      { rank: "9", name: "Saudi Aramco", domain: "aramco.university", cap: "$1.70T" },
      { rank: "10", name: "Samsung", domain: "samsung.university", cap: "$1.45T" },
      { rank: "11", name: "Tesla", domain: "tesla.university", cap: "$1.43T" },
      { rank: "12", name: "Meta", domain: "meta.university", cap: "$1.43T" },
    ] as BoardRow[],
    claim: "Claim",
    caption: "Market caps via companiesmarketcap.com. Snapshot, refresh in content.ts.",
    footer: "Every company on the board is an open college. We start at the bottom and climb.",
    cta: "Claim your college",
  },

  /* -------------------------------------------------- 7 · footer --- */
  footer: {
    heading: "Your company’s school opens this quarter.",
    sub: "One email starts it. The first workshop is free.",
    cta: "Claim your college",
    smallPrint: [
      "An independent program at Network School · Forest City, near Singapore",
      "© 2026 Company University",
    ],
  },
};
