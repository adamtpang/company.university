<!-- BEGIN:claude-codex-sync -->
# Claude/Codex sync

Before making changes, read `CLAUDE.md` in this project if it exists. It is the live handoff from Claude Code and the source of truth for current project progress, design decisions, constraints, and open tasks. Keep future progress updates there so Claude and Codex stay in sync.

If this file contains older project context that conflicts with `CLAUDE.md`, prefer `CLAUDE.md` unless the user says otherwise.
<!-- END:claude-codex-sync -->

<!-- BEGIN:imported-claude-context -->
# Imported Claude context

Copied from `CLAUDE.md` on 2026-07-07 so Codex starts with the same project context Claude Code used. Keep `CLAUDE.md` as the source of truth and refresh this block after meaningful Claude-side progress.

<!-- SOURCE: CLAUDE.md -->

# CLAUDE.md - company.university

Context for Claude Code, Codex, and humans working in this folder.

## What this is

This handoff was generated on 2026-07-07 so every top-level Codex project under
`C:\Users\adamp\OneDrive\Aether` has both `CLAUDE.md` and `AGENTS.md`.

No richer Claude handoff was found here during the workspace sync. Treat this file
as a starting point, then inspect the actual code and docs before making changes.

## Detected project facts

- Workspace folder: `company.university`
- Git repository: no
- `package.json`: yes
- Detected stack: Next.js, React, Tailwind, TypeScript, package "company-university"
- Existing context-like files: README.md, readme.md
- Notable top-level files: .gitignore, content.ts, next-env.d.ts, next.config.ts, package-lock.json, package.json, postcss.config.mjs, README.md, skills.ts, tsconfig.json

## How to keep this useful

- If you learn the product purpose, stack, run commands, deployment target, or open
  tasks, update this file.
- Keep `AGENTS.md` synchronized with this file so Codex sessions have the same
  context inline.
- Prefer concrete project facts over generic instructions.

## Imported existing context

Source: `README.md`

```markdown
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
```
<!-- END:imported-claude-context -->
