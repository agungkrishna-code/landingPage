# Implementation Plan — Modern Polish Landing Page Krishna

[Overview]
Tujuan: memoles web portfolio statis-legacy (Next.js App Router + CSS Meyawo 2019 + Bootstrap/jQuery remnants) menjadi landing page modern 2026 tanpa rewrite total. Scope: visual system, hero, about, services, portfolio, footer, responsive + performance + SEO. Pendekatan: pertahankan App Router (`app/page.js`, `app/layout.js`), ganti legacy-style.css dengan design-system modern (CSS variables, Inter/Space Grotesk, dark-mode, glassmorphism, reveal-on-scroll), komponen React client-side ringan tanpa jQuery/Bootstrap JS.

[Types]
- `Theme = 'light' | 'dark'` — disimpan di `localStorage('kr-theme')`, toggle via `data-theme` pada `<html>`.
- `NavLink = { href: '#home'|'#about'|'#services'|'#portfolio'|'#contact'; label: string }`.
- `Service = { icon: string; title: string; desc: string }`.
- `Project = { slug: string; title: string; tags: string[]; img: string; href: string; desc: string }`.
- `RevealProps = { delay?: number; variant?: 'up'|'fade'|'scale' }` untuk animasi IntersectionObserver.

[Files]
- Baru: `app/components/Navbar.jsx` (ganti `app/components/Navbar.js`, sticky glass + mobile drawer + theme toggle), `app/components/Hero.jsx`, `app/components/About.jsx`, `app/components/Services.jsx`, `app/components/Portfolio.jsx`, `app/components/Footer.jsx`, `app/components/Reveal.jsx` (wrapper IntersectionObserver), `app/components/ThemeToggle.jsx`.
- Baru: `app/tokens.css` (variables, dark theme, font import) diimpor oleh `app/globals.css`.
- Modifikasi: `app/globals.css` (hapus import legacy, jadi entry design system ~400 baris), `app/layout.js` (metadata SEO lengkap + font preconnect + `suppressHydrationWarning` untuk theme), `app/page.js` (komposisi section, hapus markup inline panjang), `next.config.js` (tambah `images: {formats:['image/avif','image/webp']}`).
- Hapus/pindah (setelah verifikasi): `index.html`, `assets/` (backup), `app-globals.css`, `app/legacy-style.css`, `public/legacy-style.css` → pindah ke `_backup/` atau hapus.
- Konfigurasi: `package.json` — tidak tambah dependency (tetap next/react saja, animasi pakai CSS + IO murni).

[Functions]
- Baru: `useScrolled(threshold)` di `Navbar.jsx` → boolean shadow saat scrollY>24; `useActiveSection(ids)` via IntersectionObserver → id aktif untuk underline nav; `toggleTheme()` di `ThemeToggle.jsx` → flip data-theme + localStorage; `useReveal()` di `Reveal.jsx` → observer tambah class `.is-visible`.
- Modifikasi: `Navbar()` (`app/components/Navbar.js`) → rewrite ke `.jsx`, hapus jQuery affix, tambah drawer + focus-trap sederhana + Escape close; `Page()` (`app/page.js`) → dari monolit 5145B menjadi komposisi `<Navbar/><Hero/><About/>...`.
- Dihapus: pemakaian global `jquery-3.4.1.js`, `bootstrap.bundle.js`, `bootstrap.affix.js`, `assets/js/script.js` (ganti React + CSS).

[Classes]
- Baru: CSS classes di `globals.css`+`tokens.css`: `.container-x` (max-w 1120px), `.btn-primary/.btn-ghost` (gradient + ring), `.glass-nav`, `.hero-grid/.hero-badge/.gradient-text`, `.card-service` (hover lift + border glow), `.portfolio-card` (aspect-ratio, overlay gradient, bukan overlay ungu flat), `.section-title/.eyebrow`, `.reveal/.is-visible`, `.footer-modern`.
- Modifikasi: `.header/.about/.section/.footer` legacy → hapus total (13048 baris legacy-style.css diganti ±400 baris modern).
- Dihapus: `.custom-navbar`, `.hamburger--elastic`, `.portfolio-card-overlay` versi lama, semua grid Bootstrap `.col-md-4/.row` → ganti CSS Grid `grid-template-columns: repeat(auto-fit,minmax(280px,1fr))`.

[Dependencies]
- Tambah: tidak ada (sengaja zero-dependency agar build ringan). Opsional bila user setuju: `lucide-react` untuk ikon (ganti themify-icons) — satu-satunya usulan dependency baru.
- Hapus: jQuery, Bootstrap JS/CSS vendor, themify-icons (ganti inline SVG/lucide) — hapus folder `assets/vendors/`.
- Integrasi: Next Font (`next/font/google` Inter + Space Grotesk) di `layout.js`; Next Image (`next/image`) untuk foto portfolio + `priority` di hero.

[Testing]
- Manual: `npm run dev` cek 375px/768px/1280px (drawer, grid, hero stack), toggle dark/light tanpa flash, scroll-spy aktif, tidak ada 404 `/imgs/*`.
- `npm run build && npm start` pastikan no error, cek Lighthouse (target: Performance ≥90, SEO ≥95).
- Validasi: HTML headings berurutan (h1 sekali di hero), alt image terisi, kontras teks ≥4.5:1, tombol keyboard-focusable.
- Regression: bandingkan screenshot sebelum/sesudah tiap section.

[Implementation Order]
1. Backup + inventarisasi aset (`public/imgs/`, pastikan `profile`, `shitcoin.jpeg`, `folio-2/3.jpg` ada; optimasi ke WebP).
2. `app/tokens.css` + rewrite `app/globals.css` (variables, reset modern, utilities, responsive).
3. `Reveal.jsx` + `ThemeToggle.jsx` (fondasi animasi & tema).
4. `Navbar.jsx` (glass + drawer + scroll-spy) ganti `Navbar.js`.
5. `Hero.jsx` + `About.jsx` (headline gradient, badge, stats, CV button sebagai `<a download>`).
6. `Services.jsx` + `Portfolio.jsx` (grid cards, perbaiki tag h4/h5 mismatch di index.html lama).
7. `Footer.jsx` + `page.js` komposisi + `layout.js` metadata/SEO.
8. `next.config.js` images + hapus legacy (`index.html`, `assets/`, `*-legacy-style.css`).
9. QA: dev → build → Lighthouse → polish kontras/spacing.

# Addendum — Gap Closure (Nov 2026, diputuskan: portfolio href="#" DIBIARKAN, tanpa section #contact)
## Overview
Menutup celah rencana-vs-realisasi tanpa mengubah portfolio dead-link dan tanpa section kontak penuh.
## Types
- `NavLink` tetap 4 link (tanpa `#contact`). `Theme` tambah fallback `prefers-color-scheme` first-visit. `Project.href:'#'` dipertahankan.
## Files
- BARU: `app/icon.svg` (favicon), `app/robots.js`, `app/sitemap.js`.
- MODIFIKASI: `app/layout.js` (metadataBase, canonical, og:image, twitter card, robots, JSON-LD Person, Space Grotesk via next/font, theme fallback); `app/globals.css` (hapus 2 `@import` Google Fonts, tambah reduced-motion); `app/page.js` (tambah `sizes` + `priority` foto profil; portfolio TIDAK disentuh); `next.config.js` (`images:{formats:['image/avif','image/webp']}`); `app/components/Navbar.jsx` (`aria-expanded`, `aria-controls`, Escape-close); `README.md` + `BUG_FIXES.md` (koreksi klaim usang).
- HAPUS: `public/imgs/header.jpg`, `folio-1.jpg`, `scooter.svg`, `shipped.svg`, `startup.svg` (tak terpakai).
## Functions
- BARU: `robots.js: default()`, `sitemap.js: default()`. MODIFIKASI: `RootLayout` (metadata+JSON-LD), `Navbar()` (Escape-close + aria).
## Classes
- Tidak ada class baru/dihapus; CSS tambah 1 blok reduced-motion.
## Dependencies
- Tidak ada paket baru.
## Testing
- `npm run build && npm start` no-error, no 404 favicon; Lighthouse Performance ≥90, SEO ≥95; cek tema, drawer+Escape, reduced-motion, mobile 360px + desktop 1440px.
## Implementation Order
1. next.config.js → 2. layout.js → 3. globals.css → 4. icon/robots/sitemap → 5. page.js (sizes+priority) → 6. Navbar a11y → 7. hapus aset mati → 8. koreksi docs → 9. build + Lighthouse.

