# Krishna Portfolio

Personal landing page for Krishna (agungkrishnananda), a junior web and blockchain
developer. Built with the Next.js App Router and a hand-written CSS design system.

## Stack

- Next.js 16.4.4 (App Router, Turbopack)
- React 19.3.1
- Plain CSS with custom properties
- `next/font` for Instrument Serif, IBM Plex Sans, and IBM Plex Mono
- `next/image` for local image optimization

No UI framework, animation library, or database is used. The site is fully static.

## Structure

```text
app/
├── components/
│   ├── Navbar.jsx      # scroll state, active section, theme, focus-trapped menu
│   ├── Hero.jsx        # first screen and portrait
│   ├── About.jsx       # narrative, principles, toolkit
│   ├── Services.jsx    # four-service ledger
│   ├── Work.jsx        # featured project and concept studies
│   ├── Contact.jsx     # contact band and social links
│   ├── CopyEmail.jsx   # clipboard action with success and error feedback
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

- Warm paper, deep pine, verdigris, and copper. The palette avoids the generic
  blue-purple developer-gradient look and echoes the Balinese udeng in the portrait.
- Instrument Serif carries the editorial voice; IBM Plex Sans and Mono keep the
  technical details legible.
- One photograph, used once. Concept work is explicitly labelled as concept work.
- Light and dark themes are both supported. The first visit follows the operating
  system preference; the toggle persists the choice in `localStorage`.
- Motion is limited to entrance, hover, and press feedback. Scroll-triggered
  reveals are intentionally not used, and `prefers-reduced-motion` disables motion.
- The mobile menu traps focus, locks background scroll, closes on Escape, and
  returns focus to the menu button.

## Content to verify before publishing

- The hero figures (10+ projects, 3 EVM chains, 100% open source) are carried over
  from the previous version of the site. Confirm they are accurate.
- `mailto:` addresses and social profile URLs are the ones supplied by the owner.
- Concept studies have no public demo and are not linked as if they did.

## Historical documents

`implementation_plan.md` and `BUG_FIXES.md` describe earlier iterations. Some file
names in them no longer exist. Treat this README and the source as current.
