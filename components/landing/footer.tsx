import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-bg-deep">
      <div className="mx-auto max-w-content border-t border-white/10 px-6 py-10 md:py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-display text-[20px] font-medium leading-none tracking-tight text-bg"
            >
              Capture Lab
            </Link>
            <a
              href="https://www.linkedin.com/company/capture-lab-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/70 transition-colors hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z" />
              </svg>
            </a>
          </div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bg/60">
            <a href="#" className="transition-colors hover:text-bg">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-bg">
              Terms
            </a>
          </nav>

          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bg/40">
            © {new Date().getFullYear()} Capture Lab
          </p>
        </div>
      </div>
    </footer>
  )
}
