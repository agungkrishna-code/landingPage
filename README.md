# Krishna Portfolio

Personal portfolio for Krishna (Dewa Gede Agung Krishnananda Sudewa), a junior web
and blockchain developer. Static Astro site with a printed-ledger design.

Live: https://agungkrishnananda.vercel.app

## Stack

- Astro 7.4.12, static output
- Tailwind CSS 4.3.5 through `@tailwindcss/vite`, CSS-first `@theme` tokens in `src/styles/global.css`
- GSAP 3.15.1 with ScrollTrigger
- Lenis 1.3.27, synced to the GSAP ticker and ScrollTrigger
- Newsreader and IBM Plex Sans, self-hosted through Astro's Fonts API
- TypeScript 6, `@astrojs/check`, `@astrojs/sitemap`
- Deployed on Vercel

No database, backend, auth, CMS, or client-side framework. Node 22.23.4 or newer.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check && astro build
npm run preview  # serve the built site
npm run check    # types and Astro diagnostics
```

## Structure

```text
astro.config.mjs               site URL, sitemap, font sources, Tailwind plugin
src/pages/index.astro          page composition
src/pages/404.astro            standalone not-found page
src/layouts/Base.astro         document shell, metadata, fonts, theme init, JSON-LD
src/components/Nav.astro       sticky nav, theme toggle, mobile menu
src/components/Hero.astro      headline, portrait, fact rail
src/components/About.astro     narrative, working rules, toolkit, CV link
src/components/Services.astro  four-service pinned deck
src/components/Work.astro      horizontal project plates
src/components/Contact.astro   reply band, email copy, socials
src/components/Footer.astro    footer meta and back to top
src/components/ScrollProgress.astro  top progress bar
src/components/ui/             DeFi and NFT concept sketches (SVG)
src/data/site.ts               page copy, nav, socials, email, CV path
src/lib/motion.ts              shared motion constants
src/lib/animations.ts          GSAP timelines and ScrollTrigger setup
src/lib/smooth-scroll.ts       Lenis setup and ScrollTrigger sync
src/lib/ui.ts                  theme toggle, nav, mobile menu, copy email
src/scripts/main.ts            client entry point
src/styles/global.css          Tailwind import, design tokens, shared styles
src/assets/                    portrait.png, shitcoin.jpg
public/                        favicon.svg, og.png, robots.txt, krishna-cv.pdf
```

## Editing content

Site copy lives in `src/data/site.ts`: hero, about, services, work, contact,
footer, nav, email, and social links. A few fixed UI labels such as "Open to work",
"Not shipped", and "Capability" stay in their components.

- Portrait: `src/assets/portrait.png`
- Work image: `src/assets/shitcoin.jpg`
- CV: `public/krishna-cv.pdf`, linked from About. Keep the filename.
- Email and socials: `site.ts`. The contact section and mail links read from it.

## Animation

Edit `src/lib/motion.ts` to change the shared feel:

- `ease`: `power3.out`
- `duration`: 0.9s default
- `heroDuration`: 1.05s
- `stagger`: 0.07s
- `revealY`: 26px
- `parallax`: 40px, used by the hero portrait and copy drift

Section-specific timing lives in `src/lib/animations.ts`: hero offsets, reveal
start points (`top 88%` and `top 84%`), the 1.1s hairline draw, pinned services
crossfades, horizontal work distance, and the ±3% work-plate parallax. Lenis speed
is the `duration: 1.05` in `src/lib/smooth-scroll.ts`. Hover and focus transitions
are CSS durations in the component styles.

## Responsive and motion behaviour

- Pins only at 1024px and wider: the services deck and the horizontal work plates.
- Below 1024px: services stack vertically; work is a native scroll-snap carousel.
- `prefers-reduced-motion` disables Lenis, hero word splitting, pins, reveals, and
  parallax. At 768px and wider, Work becomes a static two-column grid so no plates
  are hidden. The 3px scroll progress bar still tracks position; CSS removes the
  remaining animation and transition time.
- GSAP animates transform and opacity only. Colour and underline changes are CSS
  transitions.

## Content rules

- Do not add testimonials, client logos, statistics, or outcome claims. There is no
  evidence for them.
- Concept studies are labelled "Concept" and have no demo link. Do not link them as
  shipped.
- English carries structure; Indonesian carries explanation. Indonesian passages use
  `lang="id"`.
- The copy names Next.js because it is part of Krishna's toolkit. This site is Astro.

## Old version

The previous Next.js portfolio is preserved in git on branch
`next-portfolio-snapshot`. It is not part of the current build.

`implementation_plan.md` and `BUG_FIXES.md` are pre-Astro records. Their Next.js
paths, component names, and visual direction are stale. This README, `DESIGN.md`,
`PRODUCT.md`, and `src/` are current.