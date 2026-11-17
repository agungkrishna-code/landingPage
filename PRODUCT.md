# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

1. **Hiring readers** — someone screening Krishna for a junior web/blockchain role, opening the site from a CV, a LinkedIn profile, or a GitHub link. They give it one pass and ask: can this person actually ship, and is the claimed level honest?
2. **Freelance and collaboration prospects** — a founder, small team, or fellow builder who needs a landing page, a contract, or the wiring between them, and is deciding whether to email.

Both arrive with no prior context on Krishna and decide within a minute or two.

## Product Purpose

A personal portfolio for Krishna (Dewa Gede Agung Krishnananda Sudewa), a junior developer working across Next.js interfaces and Solidity contracts. It exists to convert a cold visitor into an email — either a hiring conversation or a scoped freelance project — by showing real work and an honest account of skill level rather than a claim sheet.

Success: a qualified visitor sends mail about a role, a project, or a collaboration.

## Positioning

One person builds both sides of an on-chain product: the interface and the contract behind it. The site states junior status plainly and labels unfinished work as unfinished — a neighbouring senior-contractor portfolio could not truthfully copy either the two-sided scope or the candour.

## Operating Context

- Contact happens by email: `agungkrishnananda@gmail.com`. There is no form, booking flow, or account system.
- Public presence the site links to: GitHub `github.com/agungkrishna-code`, LinkedIn `linkedin.com/in/dewa-gede-agung-krishnananda-sudewa-790433223`, Instagram `@agungkrishnananda`.
- Deployed as a fully static Astro build on Vercel at `https://agungkrishnananda.vercel.app`. There is no server runtime.
- The owner is early-career and actively looking; availability messaging ("open for freelance and collaboration") is live product copy, not decoration.
- Site sections in use: home, about, services, work, contact.

## Capabilities and Constraints

- Static Astro 7 site with Tailwind CSS 4. No database, backend, auth, CMS, or client-side app framework. Page copy lives in `src/data/site.ts`; layout and motion are separate.
- GSAP 3 with ScrollTrigger drives the motion, and Lenis smooths scrolling on the same ticker. Motion includes hero word masks, scroll reveals, hairline draws, a pinned services deck and horizontal work plates at 1024px and wider, parallax, and a scroll progress bar. `prefers-reduced-motion` disables Lenis, splitting, pins, reveals, and parallax.
- Four stated service lines: web development, smart contracts, dApp integration, API/backend.
- Light and dark themes; first visit follows OS preference, choice persists in `localStorage` (`kr-theme`).
- SEO surface is intentional: metadata, canonical, Open Graph, Twitter card, `Person` JSON-LD, robots, sitemap.
- The CV is downloadable at `/krishna-cv.pdf` (`public/krishna-cv.pdf`), linked from the About section. Replacing that file updates the download.
- **Hero stat figures are withdrawn.** "10+ projects", "3 EVM chains", and "100% open source" were carried over from an earlier version and could not be confirmed. The row has been removed from `Hero.astro` and its styles from `global.css`. Reintroducing any figure requires verified counts; replacing that row is otherwise an open decision.
- Terminology the site uses about itself: "junior", "concept studies", "in progress", "open for freelance and collaboration". Claims of seniority, team size, client logos, or years of experience are not available.

## Brand Commitments

- Name: Krishna / agungkrishnananda. First-person voice throughout.
- Voice: plain, specific, unhyped. Short declarative sentences. Admit the limits of the work.
- The portrait shows Krishna in a Balinese udeng, and the identity is Balinese-Indonesian; that is real and stays.
- Standing rule from the owner: concepts stay labelled as concepts and are never linked as if they shipped.

## Evidence on Hand

- One public, open-source project: **Shitcoin Documentary** — research and documentation tracing a meme token from launch to aftermath (`github.com/agungkrishna-code/shitcoin_source_documentary`). Real, linkable.
- Two concept studies — DeFi Dashboard, NFT Minting dApp — illustrated with hand-built SVG diagrams. No public demo, no repository, explicitly not shipped.
- A CV file exists and is the owner's to supply.
- **Absent and must not be invented:** testimonials, client names, case studies with outcomes, press, benchmarks, performance numbers, team members, years of experience.

## Product Principles

1. **Show work, do not inflate it.** Every claim traceable to something a visitor can open. Withdrawn numbers stay withdrawn.
2. **Honesty about level is the product.** "Junior" is stated up front because it is the truth and it builds trust faster than a claim.
3. **Label the finish line.** Shipped, in progress, and concept are visually and verbally distinct everywhere.
4. **One clear next action.** Every section routes toward emailing Krishna.
5. **The work lives on GitHub.** The site is a pointer to real repositories, not a replacement for them.

## Accessibility & Inclusion

Accessible by default, not as an afterthought: keyboard-operable throughout, visible focus, WCAG AA contrast in both themes, motion that respects `prefers-reduced-motion`, and a layout that holds from small phones upward. The audience reads on phones between other things.
