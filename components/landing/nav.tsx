import Link from "next/link"

const tabs = [
  { href: "#problem", label: "Problem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-capture-lab", label: "Why us" },
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
            src="/capture-lab-mark.png"
            alt=""
            className="h-7 w-7 object-contain"
          />
          Capture Lab
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="relative font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2 transition-colors duration-200 hover:text-ink after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ink after:transition-[width] after:duration-300 after:ease-out after:content-[''] hover:after:w-full"
            >
              {tab.label}
            </a>
          ))}
        </nav>

        <a
          href="https://app.capture-lab.net/"
          className="relative font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:text-ink after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ink after:transition-[width] after:duration-300 after:ease-out after:content-[''] hover:after:w-full"
        >
          Sign in
        </a>
      </div>
    </header>
  )
}
