import { ScrollReveal } from "./scroll-reveal"

export function Pillars() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-t border-rule bg-bg-elev/40"
    >
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <ScrollReveal>
          <div className="mb-20 max-w-3xl md:mb-28">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
              How it works
            </p>
            <h2 className="font-display mt-5 text-balance text-[34px] font-light leading-[1.1] tracking-[-0.02em] text-ink md:text-[44px] lg:text-[52px]">
              Three agents working in your territory.{" "}
              <span className="italic text-ink-3">Every day.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-24 md:space-y-32">
          <Pillar
            number="01"
            tag="Discover"
            title="Find prospects that match your thesis."
            body="Describe your target in plain English. Capture Lab runs the searches, scores candidates, and hands back a ranked list."
            mockup={<DiscoverMockup />}
          />
          <Pillar
            number="02"
            tag="Enrich"
            title="Every company, fully researched, automatically."
            body="Capture Lab pulls the website, finds decision-makers, matches HQ to property data, and scans 90 days of news — refreshed nightly."
            mockup={<EnrichMockup />}
            reverse
          />
          <Pillar
            number="03"
            tag="Outreach"
            title="A prioritized daily queue with drafts ready to send."
            body="Personalized emails, call scripts, and LinkedIn notes — grounded in lease expiry, funding rounds, and your last conversation. Log the outcome and the next touch schedules itself."
            mockup={<OutreachMockup />}
          />
        </div>
      </div>
    </section>
  )
}

function Pillar({
  number,
  tag,
  title,
  body,
  mockup,
  reverse = false,
}: {
  number: string
  tag: string
  title: string
  body: string
  mockup: React.ReactNode
  reverse?: boolean
}) {
  return (
    <ScrollReveal>
      <div
        className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-20 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
            <span className="text-accent">{number}</span> · {tag}
          </p>
          <h3 className="font-display mt-5 text-balance text-[28px] font-light leading-[1.15] tracking-[-0.02em] text-ink md:text-[36px] lg:text-[40px]">
            {title}
          </h3>
          <p className="mt-6 max-w-prose text-[16px] leading-[1.65] text-ink-2 md:text-[17px]">
            {body}
          </p>
        </div>
        <div className="lg:col-span-7">{mockup}</div>
      </div>
    </ScrollReveal>
  )
}

/* --- mockups --------------------------------------------------------- */

function DiscoverMockup() {
  const candidates = [
    { name: "Keystone Logistics Co.", desc: "3PL · Pittsburgh · 220 employees", score: 94 },
    { name: "Allegheny Freight Partners", desc: "3PL · Coraopolis · 180 employees", score: 88 },
    { name: "Westmoreland Distribution", desc: "Warehousing · Greensburg · 95 employees", score: 82 },
    { name: "Steel City Fulfillment", desc: "3PL · Pittsburgh · 340 employees", score: 76 },
  ]
  return (
    <div className="border border-rule bg-bg-elev shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="flex items-center justify-between border-b border-rule px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
        <span>Thesis</span>
        <span className="text-accent">Active</span>
      </div>
      <div className="px-5 py-5 text-[15px] leading-[1.6] text-ink">
        &ldquo;3PL operators, 50–500 employees, expanding in{" "}
        <span className="bg-accent-soft px-1 text-accent-ink">Western PA</span>,
        industrial.&rdquo;
      </div>
      <div className="border-t border-rule">
        <div className="flex items-center justify-between border-b border-rule px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
          <span>Ranked candidates</span>
          <span>{candidates.length} of 47</span>
        </div>
        <ul>
          {candidates.map((c, i) => (
            <li
              key={c.name}
              className={`flex items-center justify-between gap-4 px-5 py-3.5 ${
                i < candidates.length - 1 ? "border-b border-rule" : ""
              }`}
            >
              <div className="min-w-0">
                <p className="truncate text-[14px] font-medium text-ink">
                  {c.name}
                </p>
                <p className="mt-0.5 truncate font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
                  {c.desc}
                </p>
              </div>
              <ScorePill score={c.score} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function EnrichMockup() {
  return (
    <div className="border border-rule bg-bg-elev">
      <div className="flex items-center justify-between border-b border-rule px-5 py-3">
        <div>
          <p className="text-[15px] font-medium text-ink">Keystone Logistics Co.</p>
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
            keystonelogistics.com · Pittsburgh, PA
          </p>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
          Refreshed 2h ago
        </span>
      </div>
      <BriefRow
        label="Website"
        body="Mid-size 3PL focused on industrial fulfillment for steel and durable goods. Recently launched a same-day delivery tier."
      />
      <BriefRow
        label="Decision-makers"
        body={
          <>
            <span className="font-medium text-ink">Sarah Chen</span> · COO ·
            sarah@keystone…<br />
            <span className="font-medium text-ink">Mark Russo</span> · VP Ops ·
            mark@keystone…
          </>
        }
      />
      <BriefRow
        label="Property"
        body={
          <>
            HQ: 4400 Ohio River Blvd · 92,400 sqft ·{" "}
            <span className="bg-accent-soft px-1 text-accent-ink">
              lease expires Mar 2027
            </span>
          </>
        }
      />
      <BriefRow
        label="90-day news"
        body="Series B led by Riverstone ($28M) · hired 30 in Q1 · added Ohio facility."
        last
      />
    </div>
  )
}

function BriefRow({
  label,
  body,
  last = false,
}: {
  label: string
  body: React.ReactNode
  last?: boolean
}) {
  return (
    <div
      className={`grid grid-cols-[120px_1fr] items-baseline gap-4 px-5 py-4 ${
        last ? "" : "border-b border-rule"
      }`}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
        {label}
      </p>
      <p className="text-[14px] leading-[1.6] text-ink-2">{body}</p>
    </div>
  )
}

function OutreachMockup() {
  const queue = [
    {
      company: "Keystone Logistics Co.",
      signal: "LEASE · MAR 2027",
      score: 94,
      draft:
        "Hi Sarah — saw your Ohio River Blvd lease wraps in early '27. With the Series B and Q1 hiring, the timing for a search starts now…",
    },
    {
      company: "Allegheny Freight Partners",
      signal: "FUNDING · $14M",
      score: 88,
      draft:
        "Hi Mark — congrats on closing the Series A. Most 3PLs your size start outgrowing their footprint within 6 months of a raise…",
    },
    {
      company: "Westmoreland Distribution",
      signal: "OWNERSHIP CHANGE",
      score: 82,
      draft:
        "Hi Dana — heard about the buyout from Riverstone. New ownership often revisits real estate in the first 90 days…",
    },
  ]
  return (
    <div className="border border-rule bg-bg-elev">
      <div className="flex items-center justify-between border-b border-rule bg-bg-deep px-5 py-3 text-bg">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <p className="font-mono text-[11px] uppercase tracking-[0.14em]">
            Today&rsquo;s queue
          </p>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bg/70">
          12 prospects
        </span>
      </div>
      <ul>
        {queue.map((q, i) => (
          <li
            key={q.company}
            className={`px-5 py-5 ${
              i < queue.length - 1 ? "border-b border-rule" : ""
            } ${i === 0 ? "bg-accent-soft/40" : ""}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate text-[15px] font-medium text-ink">
                  {q.company}
                </p>
                <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent">
                  {q.signal}
                </p>
              </div>
              <ScorePill score={q.score} />
            </div>
            <div className="mt-3 border-l-2 border-accent/30 pl-3 text-[13.5px] leading-[1.6] text-ink-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                Draft email
              </span>
              <p className="mt-1 italic">&ldquo;{q.draft}&rdquo;</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between border-t border-rule px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
        <span>Next touch auto-scheduled on log</span>
        <span className="text-accent">→ Send</span>
      </div>
    </div>
  )
}

function ScorePill({ score }: { score: number }) {
  return (
    <div className="flex shrink-0 items-baseline gap-1 border border-rule bg-bg px-2 py-1">
      <span className="font-display text-[16px] font-medium leading-none text-ink">
        {score}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
        /100
      </span>
    </div>
  )
}
