# Design

Krishna's portfolio, direction A: The Ledger.

## Design Read

Personal portfolio for hiring readers and freelance prospects, in a printed working-ledger style. Dial ENERGY 2 / RHYTHM 3 / MOTION 1.

## Palette

| Token | Light | Dark | Role |
|---|---|---|---|
| Paper | `#f3eddf` | `#0e1411` | page background |
| Ink | `#141c17` | `#f1ecdf` | primary text |
| Pine | `#0e5544` | `#8fd3b6` | action, links, shipped status |
| Copper | `#9a4a22` | `#dd9a6c` | accent, concept status |
| Chalk | `#fcf8ee` | `#161f19` | raised surface, photo border |

The dark contact band uses fixed tokens: `#0a2b23` background, `#f7f2e6` text, `#a9e0c5` accent. It stays dark in both themes so the closing action reads as one moment.

## Type

- Newsreader: display, headings, lead, project titles. A screen-first literary serif with a newsroom edge.
- IBM Plex Sans: body, navigation, buttons, captions, technical labels. Workmanlike and readable at small sizes.
- Two families only. No mono. Tabular numerals replace mono for numbers.

## Layout

- 12-column grid, 1240px maximum, 24px gutter, fluid outer margin.
- A static 3-column margin rail for section labels, facts, and captions.
- Left-aligned throughout. No centered section headings.
- Hairline rules and flat surfaces. No gradients, shadows, blur, glow, or background patterns.
- The only repeated decorative gesture is the status stamp.

## Motion

One entrance on the hero: copy, portrait, and bottom rail settle in a short stagger. No scroll reveals. Link and button feedback is color and underline only. Reduced motion removes all of it.

## The one memorable element

The status stamp. It marks `PUBLIC PROJECT` and `CONCEPT`. It is rectangular, text-only, double-ruled, and slightly rotated. It makes the product principle "label the finish line" visible before the reader parses the copy.

## Copy system

- English carries structure: navigation, section headings, buttons, status stamps, project titles, metadata.
- Indonesian carries the explanation: body paragraphs, captions, section intros, contact lead.
- Technical terms stay in English: Next.js, Solidity, interface, contract, on-chain, wallet, deploy.
- `lang="id"` is set on Indonesian passages so screen readers switch voice correctly.

## Anti-slop decisions

- No numbered eyebrows on section headings. Numbers appear only in the service schedule.
- No uniform card grid. Services are a schedule; work is a set of plates; contact is a reply section.
- No service icons. The concept diagrams stay because they are real concept work.
- No arrow on the primary CTA. Arrows only mark links that leave the site.
- No testimonials, stats, client logos, FAQ, pricing, or form. There is no evidence for them.
- The portrait is the only photograph. The coin is the only other image. The unused stock desk photos stay unused.