# AGENTS.md

Project guide for agents working on this repo.

## What this is

Static Astro 7 portfolio for Krishna, deployed on Vercel at
https://agungkrishnananda.vercel.app. Tailwind CSS 4, GSAP with ScrollTrigger,
and Lenis. No database, backend, auth, CMS, or client-side framework.

Read `DESIGN.md` for visual rules and `PRODUCT.md` for audience, evidence, and
product constraints before changing the site.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check && astro build
npm run preview
npm run check
```

Node 22.23.4 or newer. Do not commit `dist/`, `.astro/`, or `node_modules/`.

## Where things live

- Copy, nav, socials, email, CV path: `src/data/site.ts`
- Page composition: `src/pages/index.astro`
- Document shell, metadata, fonts, JSON-LD: `src/layouts/Base.astro`
- Sections: `src/components/*.astro`
- Concept sketches: `src/components/ui/`
- Client entry point that boots UI and motion: `src/scripts/main.ts`
- Motion constants: `src/lib/motion.ts`
- GSAP timelines and ScrollTrigger: `src/lib/animations.ts`
- Lenis sync: `src/lib/smooth-scroll.ts`
- Theme, nav, mobile menu, copy email: `src/lib/ui.ts`
- Tokens and shared CSS: `src/styles/global.css`
- Images: `src/assets/portrait.png`, `src/assets/shitcoin.jpg`
- CV: `public/krishna-cv.pdf`

## Rules

- Do not invent testimonials, client names, logos, statistics, outcomes, or years
  of experience. There is no evidence for them.
- Concept studies stay labelled "Concept" and unlinked. They are not shipped.
- English carries structure; Indonesian carries explanation. Indonesian passages
  use `lang="id"`.
- Animate transform and opacity only. Pins only at 1024px and wider. Respect
  `prefers-reduced-motion`.
- The copy names Next.js as a skill. This site is Astro; do not migrate it back
  to Next.js.
- The previous Next.js version is preserved on branch `next-portfolio-snapshot`,
  not part of this build.