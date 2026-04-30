import { ScrollReveal } from "./scroll-reveal"

const backers = [
  { name: "Carnegie Mellon University", src: "/logos/cmu-stack.jpg", className: "h-24" },
  { name: "Harvard University", src: "/logos/harvard.svg", className: "h-20" },
  { name: "Pear VC (PearX)", src: "/logos/pearvc.png", className: "h-24" },
]

export function Backed() {
  return (
    <section className="border-t border-rule bg-bg-elev/40">
      <div className="mx-auto max-w-content px-6 py-16 md:py-20">
        <ScrollReveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
            Supported by a team from
          </p>
          <ul className="mt-10 flex flex-wrap items-center justify-around gap-x-12 gap-y-8 md:gap-x-16">
            {backers.map((b) => (
              <li key={b.name} className="flex items-center justify-center">
                <img
                  src={b.src}
                  alt={b.name}
                  className={`${b.className} w-auto object-contain`}
                />
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
