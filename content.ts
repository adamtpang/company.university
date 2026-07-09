/* ====================================================================
   COMPANY UNIVERSITY · SITE CONTENT
   Every word on the page lives in this file. Edit, save, done.
   Anything in [BRACKETS] is a placeholder: swap in the real value.
   House style: no em dashes, curly apostrophes, minimal words.
==================================================================== */

/** Every CTA on the page points here. */
export const MAILTO = "mailto:me@adampang.com?subject=Company%20University";

/** The /pilot offer CTA: subject line "Pilot" so replies are instantly routable. */
export const PILOT_MAILTO = "mailto:me@adampang.com?subject=Pilot";

/** The builder-side CTA: subject line "Join" so student replies route separately. */
export const JOIN_MAILTO = "mailto:me@adampang.com?subject=Join%20a%20school";

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
      { label: "Get in", href: "/getin" },
      { label: "Pilot", href: "/pilot" },
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

  /* --------------------------------------------------- · pilot --- */
  /* The /pilot route: the one-page priced offer, built to be DMed
     to a warm company lead. One price, one CTA. */
  pilot: {
    eyebrow: "The pilot · one page, one price",
    heading: "The 6-week Company College pilot.",
    price: "$60,000",
    priceNote: "One cohort, all-in. The first workshop is free before you commit.",
    sub: "Curriculum built around your product, a weekly cohort at Network School, a flagship demo day, and a hiring funnel from the graduates.",
    whatYouGetLabel: "What you get",
    whatYouGet: [
      {
        lead: "A curriculum built around your product.",
        detail: "Reverse-engineered from your docs and your open roles, so every session maps to real usage and real hiring needs.",
      },
      {
        lead: "A weekly cohort of shipping builders.",
        detail: "Selected from the Network School campus and our channels. They build on your product every week, in person.",
      },
      {
        lead: "A flagship demo day.",
        detail: "The cohort demos live in front of the campus and your team. Your judges, your rubric.",
      },
      {
        lead: "A hiring funnel from the graduates.",
        detail: "A ranked, observed shortlist. Top builders fast-track to interviews with your team: signal you watched get built, not a resume pile.",
      },
      {
        lead: "A standing community layer.",
        detail: "The cohort’s channel, content, and champions stay alive on campus after the six weeks.",
      },
      {
        lead: "A one-page monthly report.",
        detail: "KPIs per session: attendance, signups, things shipped, feedback. Designed to be forwarded internally.",
      },
    ] as OfferItem[],
    arcLabel: "The 6-week arc",
    arc: [
      {
        label: "Week 1",
        title: "Foundations",
        note: "Setup to first wins. Every attendee leaves activated on your product.",
      },
      {
        label: "Weeks 2 to 3",
        title: "Core builds",
        note: "Hands-on with the workflows that matter. Real usage, real questions, real feedback.",
      },
      {
        label: "Week 4",
        title: "Advanced build",
        note: "Power-user territory. Builders ship real projects on your stack.",
      },
      {
        label: "Week 5",
        title: "Showcase",
        note: "Community demo night. Champions emerge, content compounds.",
      },
      {
        label: "Week 6",
        title: "Flagship demo day",
        note: "Your team in the room, a rubric you co-sign, and a shortlist to interview.",
      },
    ] as LadderRung[],
    proofLabel: "Proof",
    proof: [
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
        note: "Signed · 300+ person event with Notion at Network School",
      },
    ] as ProofLink[],
    cta: "Book the pilot",
    smallPrint:
      "Miss the monthly KPI bar we set together and that month is free. One company per category, three schools at a time.",
  },

  /* ---------------------------------------------------- · deal --- */
  /* Student-side pricing, App Academy style: free until placed.
     A FLAT success fee, never a percentage of income. Fixed-dollar
     deferred tuition is the defensible version of this model; income
     share agreements are what drew the CFPB action on BloomTech.
     Change the fee by editing one line below. */
  deal: {
    eyebrow: "The deal for builders",
    heading: "Free until you’re hired.",
    sub: "You pay nothing to join a school. Build on the company’s product, demo at the flagship, fast-track to interviews. If a school places you, you pay a flat fee once you’re earning. No job, no bill.",
    terms: [
      {
        lead: "$0 upfront.",
        detail: "Join a school, build every week, demo at the flagship. Workshops and events stay free.",
      },
      {
        lead: "Get hired through your school.",
        detail: "Top builders fast-track to interviews with the company. Not a guarantee: a funnel built on work they watched you ship.",
      },
      {
        lead: "Then $2,500, flat.",
        detail: "A one-time success fee after you start earning. Not a loan, no interest, and never a percentage of your income.",
      },
    ] as OfferItem[],
    cta: "Join a school",
    smallPrint:
      "Flat success fee, agreed in writing before you enroll. If you never get hired through a school, you never pay.",
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
