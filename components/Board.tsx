import { content, MAILTO, type CatalogTag } from "@/content";

/* The university-layer leaderboard: companiesmarketcap, reimagined.
   Live schools are pinned on top (where a leaderboard shows "your
   position"); the ranked board below is the open green field. */

const PILL: Record<CatalogTag, string> = {
  live: "border-accent bg-accent text-paper",
  inMotion: "border-accent/50 text-accent",
  events: "border-ink/25 text-ink/55",
  open: "border-dashed border-ink/35 text-ink/45",
};

/* faint "interest" sparklines, varied by row */
const SPARKS = [
  "0,13 9,12 18,10 27,9 36,6 45,4 54,2",
  "0,11 9,12 18,9 27,10 36,7 45,8 54,5",
  "0,12 9,10 18,11 27,8 36,7 45,5 54,4",
  "0,10 9,11 18,8 27,9 36,7 45,6 54,5",
];

const TH =
  "px-5 py-3 font-mono text-[9px] font-normal uppercase tracking-[0.16em] text-ink/45";

export default function Board() {
  const b = content.board;
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.24em] text-accent">
          {b.eyebrow}
        </p>
        <h1 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05] tracking-[-0.015em]">
          {b.heading}
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink/60">{b.sub}</p>

        {/* now in session */}
        <p className="mt-12 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          <span className="pulse-dot" aria-hidden />
          {b.inSessionLabel}
        </p>
        <div className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-3">
          {b.inSession.map((c) => (
            <div key={c.name} className="bg-accent/5 p-5">
              <div className="flex items-start justify-between gap-2">
                <p className="font-mono text-[10px] tracking-[0.04em] text-accent">
                  {c.domain}
                </p>
                <span
                  className={`flex-none border px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] ${PILL[c.tag]}`}
                >
                  {content.hero.tags[c.tag]}
                </span>
              </div>
              <p className="mt-2.5 font-serif text-[1.2rem] leading-tight">{c.name}</p>
              <p className="mt-1.5 text-[12px] leading-5 text-ink/55">{c.note}</p>
            </div>
          ))}
        </div>

        {/* the board */}
        <div className="mt-12 overflow-x-auto border border-line">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr className="border-b border-line">
                <th className={`${TH} w-12 text-left`}>#</th>
                <th className={`${TH} text-left`}>{b.columns.college}</th>
                <th className={`${TH} hidden text-right sm:table-cell`}>
                  {b.columns.cap}
                </th>
                <th className={`${TH} hidden text-right md:table-cell`}>
                  {b.columns.interest}
                </th>
                <th className={`${TH} text-right`}>{b.columns.status}</th>
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr
                  key={r.rank}
                  className="border-b border-line transition-colors last:border-0 hover:bg-paper-2"
                >
                  <td className="px-5 py-3.5 text-left font-mono text-[11px] text-ink/40">
                    {r.rank}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="font-serif text-[15px]">{r.name}</span>
                    <span className="mt-0.5 block font-mono text-[10.5px] text-accent">
                      {r.domain}
                    </span>
                  </td>
                  <td className="hidden px-5 py-3.5 text-right tabular-nums sm:table-cell">
                    {r.cap}
                  </td>
                  <td className="hidden px-5 py-3.5 text-right md:table-cell">
                    <svg
                      viewBox="0 0 54 16"
                      className="ml-auto h-4 w-[54px] text-ink/20"
                      aria-hidden
                    >
                      <polyline
                        points={SPARKS[i % SPARKS.length]}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <a
                      href={MAILTO}
                      className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent transition-colors hover:text-accent-deep hover:underline"
                    >
                      {b.claim} →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[11px] italic text-ink/40">{b.caption}</p>
      </div>
    </section>
  );
}
