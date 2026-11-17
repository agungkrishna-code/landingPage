# Design

Krishna's portfolio, direction A: The Ledger.

## Design Read

Personal portfolio for hiring readers and freelance prospects, in a printed working-ledger style. Dial ENERGY 2 / RHYTHM 3 / MOTION 3.

## Palette

| Token | Light | Dark | Role |
|---|---|---|---|
| Paper | `#f3eddf` | `#0e1411` | page background |
| Ink | `#141c17` | `#f1ecdf` | primary text |
| Pine | `#0e5544` | `#8fd3b6` | action, links, shipped status |
| Copper | `#9a4a22` | `#dd9a6c` | accent, concept status |
| Chalk | `#fcf8ee` | `#161f19` | raised surface, photo border |

The work band sits on a deeper paper (`--color-paper-2`, `#ece5d4` light and `#131c17` dark). The dark contact band uses fixed tokens: `#0a2b23` background, `#f7f2e6` text, `#a9e0c5` accent. It stays dark in both themes so the closing action reads as one moment.

The gradient stops are mixed only from these tokens. No new hue enters the page.

## Type

- Newsreader: display, headings, lead, project titles. A screen-first literary serif with a newsroom edge.
- IBM Plex Sans: body, navigation, buttons, captions, technical labels. Workmanlike and readable at small sizes.
- Two families only. No mono. Tabular numerals replace mono for numbers.
- Both families are self-hosted through Astro's Fonts API. The fallbacks are Georgia for Newsreader and the system sans stack for Plex.

## Layout

- The hero uses a 12-column grid at desktop. The page frame is 1240px maximum with a fluid outer margin of 20px to 48px.
- The hero closes on a hairline fact rail: three items plus a scroll cue at desktop. Facts elsewhere use a two-column term and detail pattern.
- Left-aligned throughout. No centered section headings.
- Hairline rules and flat surfaces stay the default. Depth comes from one lighting system derived from the palette (see below), never from new hues, neon, or heavy glow.
- The only repeated decorative gesture is the status stamp.
- Controls: one 12px radius (`--radius-control`) on every button and icon button, 48px tall for the primary action and 44px for the compact variant, with 22px and 18px side padding. Pressing a control drops it 1px. The primary action gets one soft hover glow; every other control stays shadowless. The stamp and the tag labels stay square so the stamp keeps the only hard corner on the page.

## Lighting

The page is printed on one sheet and lit from two corners. Every value below comes from the existing palette.

- **Page.** A mint radial at 9% opacity in the top-left hero corner, a fainter copper radial at 5.5% in the opposite corner, over a paper-to-paper-2 vertical wash. Sections are transparent, so the sheet changes tone without a seam. The contact band stays a deliberate dark interruption.
- **Grain.** A 180px procedural noise tile at about 3.5% average alpha, painted above the page wash. It keeps the wash from banding and reads as paper, not as a filter. No image file is added.
- **Rules.** Structural hairlines use a gradient that fades to transparent at both ends. Short link underlines, tag borders, and focus rings keep their solid geometry.
- **Cards.** A 4% white sheen from the top edge down, plus a gradient hairline on the top edge. The FLOW rows use a 22% chalk wash because they sit directly on paper. The service copper tick now fades out to the right.
- **Accent type.** Section and contact italic accents use a pine-to-lighter-pine fill in light mode and a mint-to-cream fill in dark mode, clipped to the text. The hero accent stays solid pine because the split-word entrance would break a clipped fill.
- **Controls.** The primary action uses a pine-to-lighter-pine gradient in light mode and mint-to-lighter-mint in dark mode, with a slow crossfade to a darker (light) or lighter (dark) hover fill and one soft shadow glow. Other controls stay flat.
- **Nav.** The sticky bar is 98% paper with a 14px backdrop blur and a fading bottom rule once scrolled. Without backdrop-filter support it falls back to solid paper. Under `prefers-reduced-transparency` it also goes solid.

## Motion

Motion is ink settling on the page, not decoration layered on top. Elements rise a short distance, words emerge from behind a mask, and hairlines draw themselves. The shared easing is `power3.out`; most moves run 0.6 to 1.2 seconds, with the stamp snapping in at 0.5. GSAP and ScrollTrigger drive the timelines. Lenis smooths scrolling on the same ticker.

- **Hero.** Kicker, headline words, subhead, actions, portrait, stamp, and fact rail enter in one staggered timeline after fonts load. Each headline word sits in an overflow mask and rises from `yPercent: 112`. The portrait settles from 28px while its image scales from 1.08. No other section replays this entrance.
- **Scroll reveals.** Single blocks and grouped children rise 26px and fade at `top 88%` and `top 84%`, once. The contact hairline draws from zero to full width over 1.1s with `power2.inOut`. The same setup supports vertical rules with `data-rule-draw="y"`.
- **Services.** At 1024px and wider the deck pins below the 72px nav. Four cards crossfade as the page scrolls, moving ±7% in y, while a count, ticks, and a vertical progress line track the active card. The timeline is scrubbed at 0.6.
- **Work.** At 1024px and wider the section pins and the plate track moves horizontally by its overflow width plus 35vh. A count and a horizontal copper bar track progress. Each plate image drifts ±3% on x against the track, scrubbed at 0.8.
- **Progress.** A 3px copper bar at the top of the viewport scales with document progress. It stays active under reduced motion because it reports position.
- **Reduced motion.** Lenis is not started, the hero is not split, and reveals, pins, and parallax are not initialised. Work becomes a static two-column grid at 768px and wider so every plate stays visible. CSS reduces animation and transition durations to near zero, and the hero scroll cue stops.

GSAP animates transform and opacity only. Colour, border, and underline changes are CSS transitions. The primary button's hover fill and shadow crossfade through pseudo-element opacity, so the motion rule still holds.

## The one memorable element

The status stamp. It marks `PUBLIC PROJECT`, `CONCEPT`, `OPEN SOURCE`, and `OPEN TO WORK`. It is rectangular, text-only, double-ruled, and slightly rotated. It makes the product principle "label the finish line" visible before the reader parses the copy.

## Copy system

- English carries structure: navigation, section headings, buttons, status stamps, project titles, metadata.
- Indonesian carries the explanation: body paragraphs, captions, section intros, contact lead.
- Technical terms stay in English: Next.js, Solidity, interface, contract, on-chain, wallet, deploy. Next.js is a skill named in the copy; the site itself is built with Astro.
- `lang="id"` is set on Indonesian passages so screen readers switch voice correctly.

## Anti-slop decisions

- No numbered eyebrows on section headings. Numbers appear in the service schedule and as catalogue numbers on work plates, never as section labels.
- No uniform card grid. Services are a schedule; work is a set of plates; contact is a reply section.
- No service icons. The concept diagrams stay because they are real concept work.
- The primary email CTA has no arrow. Directional arrows are reserved for movement: down to work, up to top, and out for external links.
- No testimonials, stats, client logos, FAQ, pricing, or form. There is no evidence for them.
- The portrait is the only photograph on the page. The coin artwork and the two SVG concept sketches are the only other page images. No stock photography is used.