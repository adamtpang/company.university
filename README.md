# Company University

Every company gets a school. The university layer for top companies, hosted at Network School. Single static page: Next.js (App Router) + Tailwind CSS v4, no backend.

Live: https://companyuniversity.vercel.app

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Deploy (Vercel)

The CLI is already authed as adamtpang.

```bash
npx vercel link --yes --project companyuniversity
npx vercel deploy --prod --yes
```

## Where things live

| What | File |
| --- | --- |
| All copy, links, catalog rows, stats | `content.ts` (root level, the only file with copy) |
| Design tokens: colors | `app/globals.css` under `@theme` |
| Fonts (Newsreader, Public Sans, IBM Plex Mono) | `app/layout.tsx` |
| Sections, one labeled component each | `app/page.tsx` |
| Scroll-reveal animation | `components/Reveal.tsx` |
| Social card (OG image) | `app/opengraph-image.tsx` |
| Favicon | `app/icon.svg` |

## Placeholders to fill

All in `content.ts`. Search for `[`.

| Placeholder | Section | Replace with |
| --- | --- | --- |
| `[X]` | proof.dashboard | Zcash School attendees |
| `[Y]` | proof.dashboard | Zcash School projects shipped |
| `[Z]` | proof.dashboard | Zcash School signups |
| `[Collaborator]` | team | Second team member, when found |
| `[Your company] College` | hero.catalog | Intentional: leave it, that is the pitch |

## House rules

- No em dashes anywhere: periods, colons, commas, or middle dots instead.
- Curly apostrophes in rendered copy.
- No third-party logos: text wordmarks only.
- Every CTA uses `mailto:me@adampang.com?subject=Company%20University` (the `MAILTO` constant in `content.ts`).
