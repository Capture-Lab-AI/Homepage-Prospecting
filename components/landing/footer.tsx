import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-bg-deep">
      <div className="mx-auto max-w-content border-t border-white/10 px-6 py-10 md:py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Link
            href="/"
            className="font-display text-[20px] font-medium leading-none tracking-tight text-bg"
          >
            Canary
          </Link>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bg/60">
            <a href="#" className="transition-colors hover:text-bg">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-bg">
              Terms
            </a>
            <a
              href="mailto:hello@canary.example.com"
              className="transition-colors hover:text-bg"
            >
              Contact
            </a>
          </nav>

          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bg/40">
            © {new Date().getFullYear()} Canary
          </p>
        </div>
      </div>
    </footer>
  )
}
