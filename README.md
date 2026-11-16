# Krishna Portfolio

Personal landing page for Krishna (agungkrishnananda), a junior web and blockchain
developer. Built with the Next.js App Router and a hand-written CSS design system.

## Stack

- Next.js 16.4.4 (App Router, Turbopack)
- React 19.3.1
- Plain CSS with custom properties
- `next/font` for Newsreader and IBM Plex Sans
- `next/image` for local image optimization

No UI framework, animation library, or database is used. The site is fully static.

## Structure

```text
app/
├── components/
│   ├── Navbar.jsx      # scroll state, active section, theme, focus-trapped menu
│   ├── Hero.jsx        # title page and portrait plate
│   ├── About.jsx       # narrative, working rules, toolkit
│   ├── Services.jsx    # four-service schedule
│   ├── Work.jsx        # featured project and concept plates
│   ├── Contact.jsx     # reply section and social links
│   ├── CopyEmail.jsx   # clipboard action with success and error feedback
│   ├── Stamp.jsx       # shared status stamp
│   └── Footer.jsx
├── globals.css         # design tokens, layout, components, responsive rules
├── layout.js           # fonts, metadata, JSON-LD, theme bootstrap
├── page.js             # section composition
├── not-found.js        # custom 404
├── error.js            # route error boundary
├── opengraph-image.js  # generated social card
├── icon.svg            # favicon
├── robots.js
└── sitemap.js
public/imgs/            # portrait, project image, legacy icons
public/krishna-cv.pdf   # downloadable CV, linked from About
```

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint
npm run build    # production build
npm start        # serve the production build
```

## Design notes

- The design direction is documented in `DESIGN.md`. Warm paper, deep pine, and
  copper carry the printed-ledger feel and echo the Balinese udeng in the portrait.
- Newsreader carries the editorial voice; IBM Plex Sans keeps technical details
  legible. No mono family is loaded.
- One photograph, used once. Concept work is explicitly labelled as concept work.
  The status stamp marks public work and concepts.
- The copy is intentionally bilingual: English for structure and status, Indonesian
  for explanation. Indonesian passages carry `lang="id"`.
- Light and dark themes are both supported. The first visit follows the operating
  system preference; the toggle persists the choice in `localStorage`.
- Motion is limited to one hero entrance and hover/focus feedback. Scroll-triggered
  reveals are intentionally not used, and `prefers-reduced-motion` disables motion.
- The mobile menu traps focus, locks background scroll, closes on Escape, and
  returns focus to the menu button.

## Content to verify before publishing

- The hero stat row (10+ projects, 3 EVM chains, 100% open source) was removed
  because the figures could not be confirmed. Do not reintroduce them without
  verified counts.
- `public/krishna-cv.pdf` is the downloadable CV linked from About. Replace the
  file in place when the CV is updated; keep the filename stable.
- `mailto:` addresses and social profile URLs are the ones supplied by the owner.
- Concept studies have no public demo and are not linked as if they did.

## Historical documents

`implementation_plan.md` and `BUG_FIXES.md` describe earlier iterations. Some file
names in them no longer exist. Treat this README and the source as current.
