import { content } from "@/content";
import {
  ranked,
  demandScore,
  tier,
  type Growth,
  type TalentGap,
} from "@/skills";

/* Personalized match link: carries the specific skill so every "Match me"
   click reaches Adam as an actionable, routable lead instead of a blank email. */
const matchMailto = (skill: string) =>
  `mailto:${content.email}?subject=${encodeURIComponent(
    `Company University: Match me for ${skill}`
  )}`;

/* The demand board: skillmarketcap, resurrected. /board ranks companies
   (supply); this ranks the skills the market wants most (demand). The cert
   is the bridge that matches talent to demand. */

const TIER_PILL: Record<"S" | "A" | "B" | "C", string> = {
  S: "border-accent bg-accent text-paper",
  A: "border-accent/50 text-accent",
  B: "border-ink/25 text-ink/55",
  C: "border-dashed border-ink/30 text-ink/40",
};

const GROWTH_LABEL: Record<Growth, string> = {
  surging: "Surging",
  hot: "Hot",
  steady: "Steady",
  cooling: "Cooling",
};

const GAP_LABEL: Record<TalentGap, string> = {
  severe: "Severe shortage",
  moderate: "Undersupplied",
  balanced: "Balanced",
};

const TH =
  "px-5 py-3 font-mono text-[9px] font-normal uppercase tracking-[0.16em] text-ink/45";

export default function SkillsBoard() {
  const rows = ranked();
  const hottest = rows
    .filter((s) => s.growth === "surging")
    .slice(0, 3);

  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.24em] text-accent">
          The demand layer
        </p>
        <h1 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05] tracking-[-0.015em]">
          The skills the market is buying.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink/60">
          Companies are the supply of schools and jobs. These are the skills in
          demand, ranked by a demand score built from growth, pay, and how
          scarce the talent is. Pick one, earn the cert, get matched to a
          company on the board.
        </p>

        {/* hottest right now */}
        {hottest.length > 0 && (
          <>
            <p className="mt-12 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              <span className="pulse-dot" aria-hidden />
              Hottest right now
            </p>
            <div className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-3">
              {hottest.map((s) => (
                <div key={s.name} className="bg-accent/5 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-mono text-[10px] tracking-[0.04em] text-accent">
                      {s.domain}
                    </p>
                    <span className="flex-none border border-accent bg-accent px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-paper">
                      {GAP_LABEL[s.gap]}
                    </span>
                  </div>
                  <p className="mt-2.5 font-serif text-[1.2rem] leading-tight">
                    {s.name}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-5 text-ink/55">
                    {s.oneLine}
                  </p>
                  <p className="mt-2 font-mono text-[11px] tabular-nums text-ink/70">
                    {s.salary}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* the board */}
        <div className="mt-12 overflow-x-auto border border-line">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr className="border-b border-line">
                <th className={`${TH} w-12 text-left`}>#</th>
                <th className={`${TH} text-left`}>Skill</th>
                <th className={`${TH} hidden text-right sm:table-cell`}>
                  Demand
                </th>
                <th className={`${TH} hidden text-right sm:table-cell`}>
                  Pay
                </th>
                <th className={`${TH} hidden text-left md:table-cell`}>
                  Top cert
                </th>
                <th className={`${TH} text-right`}>Match</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((s, i) => {
                const score = demandScore(s);
                const t = tier(score);
                return (
                  <tr
                    key={s.name}
                    className="border-b border-line transition-colors last:border-0 hover:bg-paper-2"
                  >
                    <td className="px-5 py-3.5 text-left font-mono text-[11px] text-ink/40">
                      {i + 1}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="flex items-center gap-2">
                        <span
                          className={`flex-none border px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.1em] ${TIER_PILL[t]}`}
                        >
                          {t}
                        </span>
                        <span className="font-serif text-[15px]">{s.name}</span>
                      </span>
                      <span className="mt-0.5 block font-mono text-[10.5px] text-accent">
                        {s.domain} · {GROWTH_LABEL[s.growth]}
                      </span>
                    </td>
                    <td className="hidden px-5 py-3.5 text-right tabular-nums sm:table-cell">
                      {score}
                    </td>
                    <td className="hidden px-5 py-3.5 text-right tabular-nums text-ink/70 sm:table-cell">
                      {s.salary}
                    </td>
                    <td className="hidden px-5 py-3.5 text-left md:table-cell">
                      <span className="text-[12px] text-ink/70">{s.cert}</span>
                      <span className="mt-0.5 block font-mono text-[10px] text-ink/40">
                        {s.certProvider}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <a
                        href={matchMailto(s.name)}
                        className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent transition-colors hover:text-accent-deep hover:underline"
                      >
                        Match me →
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[11px] italic text-ink/40">
          Demand score is a 0-100 index of growth, pay, and talent scarcity.
          Grounded in 2026 labor-market research; not investment advice.
        </p>
      </div>
    </section>
  );
}
