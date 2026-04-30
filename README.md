# Pipeline — Marketing Homepage

The marketing site for **Pipeline**, an AI prospecting platform for commercial real estate brokerages.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · `lucide-react` · Fraunces + Inter + JetBrains Mono via `next/font`.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Where copy lives

All section copy is hard-coded in the corresponding component file under `components/landing/`:

- `hero.tsx`, `one-liner.tsx`, `problem.tsx`, `pillars.tsx`, `signals.tsx`, `audiences.tsx`, `differentiators.tsx`, `social-proof.tsx`, `final-cta.tsx`, `footer.tsx`, `nav.tsx`.

Section composition order is in `app/page.tsx`.

## Design tokens

All color and typography tokens are defined as CSS variables in `app/globals.css` and exposed to Tailwind via `tailwind.config.ts`. Adjust there to re-skin globally.

## Replace before launch

- `components/landing/social-proof.tsx` — real brokerage logos, real testimonial quote/attribution, real stats
- `components/landing/final-cta.tsx`, `components/landing/hero.tsx`, `components/landing/nav.tsx` — wire "Book a demo" buttons to a real Calendly / form / mailto URL (currently anchor `#cta`)
- `app/layout.tsx` — replace OG image (`/og.png`) with a real 1200×630 asset
- `public/favicon.ico` — replace with a real favicon
