import type { Metadata } from "next";
import { content, MAILTO } from "@/content";
import { Mark } from "@/components/brand";

export const metadata: Metadata = {
  title: "Terms of service · Company University",
  description:
    "The terms that govern your use of Company University and its programs.",
  alternates: {
    canonical: `${content.url}/terms`,
  },
};

const NAV = [
  { label: "Home", href: "/" },
  { label: "Companies", href: "/board" },
  { label: "Skills", href: "/skills" },
  { label: "Get in", href: "/getin" },
  { label: "Pilot", href: "/pilot" },
];

const LAST_UPDATED = "13 July 2026";

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-[1.4rem] leading-snug tracking-tight text-paper">
        <span className="mr-3 font-mono text-[11px] tracking-[0.2em] text-paper/40">
          {n}
        </span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-paper/70">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <>
      {/* utility strip */}
      <div className="border-b border-paper/10 bg-ink-2">
        <div className="mx-auto flex h-9 max-w-3xl items-center justify-between px-6 font-mono text-[9.5px] uppercase tracking-[0.22em] text-paper/40">
          <span>{content.utility.left}</span>
          <span className="hidden sm:block">{content.utility.right}</span>
        </div>
      </div>

      {/* header */}
      <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-3 text-paper">
            <Mark className="h-7 w-7" base="var(--color-accent-bright)" />
            <span className="font-serif text-[17px] tracking-tight">
              {content.name}
            </span>
          </a>
          <nav aria-label="Sections" className="hidden items-center gap-8 md:flex">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-paper/40">
          Legal
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3rem)] leading-[1.08] tracking-[-0.01em] text-paper">
          Terms of service
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-paper/60">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-6 rounded-lg border border-paper/10 bg-ink-2 p-5 text-[13.5px] leading-6 text-paper/55">
          This is a general template provided for transparency. It is not legal
          advice. A licensed attorney should review these terms before you rely
          on them for anything high stakes.
        </div>

        <Section n="01" title="Agreement to these terms">
          <p>
            These terms of service (the “terms”) form a binding agreement
            between you and Company University (“Company University”, “we”, “us”,
            or “our”), the operator of this website and its programs. By
            accessing or using this website, contacting us, or enrolling in any
            of our programs, you agree to these terms. If you do not agree, do
            not use the website or our programs.
          </p>
        </Section>

        <Section n="02" title="Who we are">
          <p>
            Company University is an independent education program operated by a
            United States limited liability company. It runs company specific
            schools and cohorts, including at Network School in Forest City, near
            Singapore. You can reach us at {content.email}.
          </p>
        </Section>

        <Section n="03" title="The services">
          <p>
            We offer educational content, cohorts, workshops, pilots, and
            related services (together, the “services”). We may add, change, or
            remove parts of the services at any time. Some services are
            described on this website and are subject to separate written
            proposals or order forms, which control if they conflict with these
            terms.
          </p>
        </Section>

        <Section n="04" title="Eligibility">
          <p>
            You must be at least 18 years old and able to form a binding
            contract to use the services. If you use the services on behalf of a
            company or other organization, you represent that you have authority
            to bind that organization to these terms.
          </p>
        </Section>

        <Section n="05" title="Payments, pilots, and refunds">
          <p>
            Prices for pilots and other paid services are quoted on this website
            or in a written proposal. Payments are processed by our third party
            payment provider, Stripe. By paying, you also agree to Stripe’s
            terms. We do not receive or store your full card details.
          </p>
          <p>
            Unless a written proposal says otherwise, fees are due before a
            program begins, are stated in United States dollars, and are
            exclusive of any taxes, which are your responsibility. Refunds, if
            any, are handled as described in the applicable proposal. If no
            refund terms are stated, fees are non refundable once a program has
            started.
          </p>
        </Section>

        <Section n="06" title="Acceptable use">
          <p>You agree not to:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>use the services for any unlawful purpose,</li>
            <li>
              copy, resell, or redistribute our content or curriculum without
              written permission,
            </li>
            <li>
              interfere with, disrupt, or attempt to gain unauthorized access to
              the website or our systems,
            </li>
            <li>
              misrepresent your affiliation with any person, company, or
              organization.
            </li>
          </ul>
        </Section>

        <Section n="07" title="Intellectual property">
          <p>
            The website, our curriculum, and our materials, including text,
            design, and logos, are owned by us or our licensors and are
            protected by intellectual property laws. We grant you a limited,
            non exclusive, non transferable license to access and use the
            services for your own internal, non commercial use, or as otherwise
            agreed in writing. All rights not expressly granted are reserved.
          </p>
        </Section>

        <Section n="08" title="Third party services and links">
          <p>
            The website may link to or rely on third party services, such as
            Stripe for payments, Vercel for hosting and analytics, and PostHog
            for product analytics. We are not responsible for third party
            services, and your use of them is governed by their own terms and
            policies.
          </p>
        </Section>

        <Section n="09" title="Disclaimers">
          <p>
            The services are provided on an “as is” and “as available” basis,
            without warranties of any kind, whether express or implied,
            including any implied warranties of merchantability, fitness for a
            particular purpose, and non infringement. We do not warrant that the
            services will be uninterrupted, error free, or that any particular
            outcome, hire, or result will be achieved.
          </p>
        </Section>

        <Section n="10" title="Limitation of liability">
          <p>
            To the fullest extent permitted by law, we will not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages, or for any loss of profits, revenue, data, or goodwill. Our
            total liability for any claim arising out of or relating to the
            services will not exceed the amount you paid to us for the services
            in the three months before the event giving rise to the claim.
          </p>
        </Section>

        <Section n="11" title="Indemnification">
          <p>
            You agree to indemnify and hold us harmless from any claims,
            damages, liabilities, and expenses, including reasonable legal fees,
            arising out of your use of the services, your violation of these
            terms, or your violation of any rights of a third party.
          </p>
        </Section>

        <Section n="12" title="Termination">
          <p>
            We may suspend or end your access to the services at any time if you
            breach these terms or if we discontinue the services. Sections that
            by their nature should survive termination, including intellectual
            property, disclaimers, limitation of liability, and indemnification,
            will survive.
          </p>
        </Section>

        <Section n="13" title="Changes to these terms">
          <p>
            We may update these terms from time to time. When we do, we will
            revise the “last updated” date above. Your continued use of the
            services after a change means you accept the updated terms.
          </p>
        </Section>

        <Section n="14" title="Governing law">
          <p>
            These terms are governed by the laws of the United States and the
            state or territory in which we are organized, without regard to
            conflict of law rules. Any dispute will be resolved in the courts
            located there, and you consent to their jurisdiction.
          </p>
        </Section>

        <Section n="15" title="Contact">
          <p>
            Questions about these terms? Email us at{" "}
            <a
              href={MAILTO}
              className="text-accent-bright underline decoration-paper/30 underline-offset-4 hover:decoration-paper"
            >
              {content.email}
            </a>
            .
          </p>
        </Section>
      </main>

      {/* footer */}
      <footer className="border-t border-paper/10 bg-ink text-paper">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/45">
            <a href="/privacy" className="transition-colors hover:text-paper">
              Privacy policy
            </a>
            <a
              href="https://adam.gives"
              className="transition-colors hover:text-paper"
            >
              The menu · adam.gives
            </a>
            <a
              href="https://adampang.com"
              className="transition-colors hover:text-paper"
            >
              The board · adampang.com
            </a>
          </div>
          <div className="space-y-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-paper/35">
            {content.footer.smallPrint.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
