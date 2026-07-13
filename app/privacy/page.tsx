import type { Metadata } from "next";
import { content, MAILTO } from "@/content";
import { Mark } from "@/components/brand";

export const metadata: Metadata = {
  title: "Privacy policy · Company University",
  description:
    "How Company University collects, uses, and protects your information.",
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

export default function PrivacyPage() {
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
          Privacy policy
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-paper/60">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-6 rounded-lg border border-paper/10 bg-ink-2 p-5 text-[13.5px] leading-6 text-paper/55">
          This is a general template provided for transparency. It is not legal
          advice. A licensed attorney should review this policy before you rely
          on it for anything high stakes.
        </div>

        <Section n="01" title="Overview">
          <p>
            This privacy policy explains how Company University (“we”, “us”, or
            “our”) collects, uses, and protects information when you visit this
            website or use our programs. By using the website, you agree to this
            policy.
          </p>
        </Section>

        <Section n="02" title="Information we collect">
          <p>We collect a limited amount of information:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <span className="text-paper/85">Information you give us.</span>{" "}
              When you email us, apply, or enroll, we receive your name, email
              address, company, and anything else you choose to share.
            </li>
            <li>
              <span className="text-paper/85">Usage information.</span> When you
              visit the website, our analytics providers automatically collect
              standard information such as pages viewed, referring links,
              approximate location, device, and browser.
            </li>
            <li>
              <span className="text-paper/85">Payment information.</span> If you
              pay for a program, our payment provider collects the information
              needed to process the payment. We do not receive or store your
              full card number.
            </li>
          </ul>
        </Section>

        <Section n="03" title="How we use information">
          <p>We use information to:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>respond to your messages and provide the services,</li>
            <li>operate, maintain, and improve the website and our programs,</li>
            <li>process payments and keep records,</li>
            <li>send you information you request or that relates to a program,</li>
            <li>comply with law and protect our rights.</li>
          </ul>
        </Section>

        <Section n="04" title="Payments">
          <p>
            Payments are processed by Stripe. Your payment details are handled
            directly by Stripe under its own privacy policy and security
            standards. We receive confirmation of payment and limited details
            such as the last four digits of a card, but not your full card
            information.
          </p>
        </Section>

        <Section n="05" title="Analytics and cookies">
          <p>
            We use Vercel Analytics and PostHog to understand how the website is
            used so we can improve it. These tools may set cookies or use
            similar technologies and may collect usage information as described
            above. You can control cookies through your browser settings.
            Analytics are disabled when the relevant keys are not configured.
          </p>
        </Section>

        <Section n="06" title="How we share information">
          <p>
            We do not sell your personal information. We share it only with:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              service providers that help us operate, including Stripe for
              payments, Vercel for hosting and analytics, and PostHog for
              product analytics,
            </li>
            <li>
              authorities or others when required by law or to protect rights,
              safety, and property,
            </li>
            <li>
              a successor in the event of a merger, acquisition, or sale of
              assets.
            </li>
          </ul>
        </Section>

        <Section n="07" title="Data retention">
          <p>
            We keep personal information for as long as needed to provide the
            services, meet legal and accounting obligations, and resolve
            disputes. When it is no longer needed, we delete or anonymize it.
          </p>
        </Section>

        <Section n="08" title="Your rights">
          <p>
            Depending on where you live, you may have rights to access, correct,
            delete, or limit the use of your personal information, and to opt out
            of certain processing. To exercise any of these rights, email us at{" "}
            {content.email}. We will respond as required by applicable law,
            including the GDPR and the CCPA where they apply.
          </p>
        </Section>

        <Section n="09" title="International users">
          <p>
            We operate from the United States and may process information in the
            United States and other countries. By using the website, you
            understand that your information may be transferred to and processed
            in countries with different data protection rules than your own.
          </p>
        </Section>

        <Section n="10" title="Children’s privacy">
          <p>
            The website and our programs are not directed to children under 18,
            and we do not knowingly collect information from them. If you believe
            a child has provided us with information, contact us and we will
            delete it.
          </p>
        </Section>

        <Section n="11" title="Security">
          <p>
            We take reasonable measures to protect your information. No method of
            transmission or storage is fully secure, however, so we cannot
            guarantee absolute security.
          </p>
        </Section>

        <Section n="12" title="Changes to this policy">
          <p>
            We may update this policy from time to time. When we do, we will
            revise the “last updated” date above. Your continued use of the
            website after a change means you accept the updated policy.
          </p>
        </Section>

        <Section n="13" title="Contact">
          <p>
            Questions about this policy or your information? Email us at{" "}
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
            <a href="/terms" className="transition-colors hover:text-paper">
              Terms of service
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
