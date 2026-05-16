import Link from "next/link"
import { LinkButton } from "@/components/ui/button"

const tabs = [
  { href: "#problem", label: "Problem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-vantage", label: "Why us" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-[22px] font-medium leading-none tracking-tight text-ink"
        >
          <img
            src="/vantage-mark.png"
            alt=""
            className="h-7 w-7 object-contain"
          />
          Vantage
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2 transition-colors hover:text-ink"
            >
              {tab.label}
            </a>
          ))}
        </nav>

        <LinkButton
          href="https://calendly.com/matthew-capture-lab/30min"
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          variant="primary"
        >
          Book a demo
        </LinkButton>
      </div>
    </header>
  )
}
