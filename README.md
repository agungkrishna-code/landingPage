# Agung Landing Page — Next.js

Landing page personal untuk Krishna (agungkrishnananda), junior web & blockchain developer.

## Migrasi dari HTML Statis

Proyek ini telah dimigrasi dari HTML statis ke **Next.js 16 (App Router)** dengan struktur berikut:

```
landingPage/
├── app/
│   ├── components/
│   │   └── Navbar.js         # Navigasi dengan state toggle
│   ├── globals.css            # Entry CSS
│   ├── legacy-style.css       # CSS lama yang sudah disesuaikan
│   ├── layout.js              # Root layout
│   └── page.js                # Halaman utama
├── public/
│   ├── imgs/                  # Asset gambar (dari assets/imgs)
│   └── legacy-style.css       # Backup CSS
├── next.config.js
└── package.json
```

## Instalasi & Menjalankan

```bash
npm install
npm run dev      # Development: http://localhost:3000
npm run build    # Production build
npm start        # Production server
```

## Perubahan Utama

1. **Navbar**: Dari jQuery toggle → React state (`useState`)
2. **Smooth scroll**: Dari jQuery animate → CSS `scroll-behavior: smooth`
3. **Asset**: `assets/imgs/` → `public/imgs/`
4. **CSS**: Path relatif `../imgs/` → absolut `/imgs/`
5. **Metadata**: `<head>` → `app/layout.js` metadata export
6. **Icon fonts**: Themify Icons tetap digunakan via CSS

## File Lama

File berikut masih ada tapi tidak digunakan:
- `index.html` (backup)
- `assets/` (backup folder asli)
- `app-globals.css` (backup)

Anda bisa menghapusnya setelah memverifikasi aplikasi berjalan dengan baik.
