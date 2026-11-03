'use client';
import { useEffect, useState } from 'react';
const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#service', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const t = localStorage.getItem('kr-theme') || 'light';
    setTheme(t); document.documentElement.dataset.theme = t;
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let cur = '#home';
      LINKS.forEach((l) => { const el = document.querySelector(l.href); if (el && el.getBoundingClientRect().top < 200) cur = l.href; });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const toggle = () => { const n = theme === 'light' ? 'dark' : 'light'; setTheme(n); document.documentElement.dataset.theme = n; localStorage.setItem('kr-theme', n); };
  return (<>
    <nav className={`gnav${scrolled ? ' scrolled' : ''}`}>
      <div className="cx nin">
        <a className="logo" href="#home">stay<b>foolish</b></a>
        <ul className="nlinks dk">{LINKS.map((l) => <li key={l.href}><a href={l.href} className={active === l.href ? 'on' : ''}>{l.label}</a></li>)}</ul>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="tbtn icon" onClick={toggle} aria-label="Toggle theme" title={theme === 'light' ? 'Switch to dark' : 'Switch to light'}>
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" /><line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
                <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" /><line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button className="tbtn drawer" onClick={() => setOpen(!open)} aria-label="Menu">Menu</button>
        </div>
      </div>
    </nav>
    {open && <div className="dpanel">{LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}</div>}
  </>);
}
