import { ScrollReveal } from "./scroll-reveal"

export function OneLiner() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <ScrollReveal>
          <p className="font-display mx-auto max-w-3xl text-balance text-center text-[26px] font-light leading-[1.35] tracking-[-0.01em] text-ink md:text-[32px] lg:text-[38px]">
            Canary is an AI prospecting platform built for CRE brokerages.
            It discovers off-market opportunities, enriches every prospect
            automatically, and gives your team a daily task queue with
            AI-drafted emails and call scripts —{" "}
            <span className="italic text-ink-2">
              grounded in real signals from the companies you&rsquo;re chasing.
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
