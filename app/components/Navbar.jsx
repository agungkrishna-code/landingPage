'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

const EMAIL = 'agungkrishnananda@gmail.com';
const MOBILE_BREAKPOINT = '(min-width: 861px)';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  });
  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);

  const closeMenu = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  const focusTarget = useCallback((href) => {
    window.requestAnimationFrame(() => {
      const section = document.querySelector(href);
      const heading = section?.querySelector('h1, h2');
      const target = heading || section;
      if (target instanceof HTMLElement) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  }, []);

  useEffect(() => {
    const current =
      document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute('content', current === 'dark' ? '#0e1411' : '#f3eddf');
    });
  }, []);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12);

      let current = '#home';
      for (const link of LINKS) {
        const section = document.querySelector(link.href);
        if (section && section.getBoundingClientRect().top <= 160) {
          current = link.href;
        }
      }
      setActive(current);
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        update();
        frame = 0;
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_BREAKPOINT);
    const onChange = (event) => {
      if (event.matches && open) {
        setOpen(false);
        window.requestAnimationFrame(() => {
          document.querySelector('.nav .brand')?.focus();
        });
      }
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const panel = panelRef.current;
    const getFocusable = () =>
      panel
        ? Array.from(panel.querySelectorAll('a[href], button:not([disabled])'))
        : [];

    panel?.querySelector('.menu-close')?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== 'Tab') return;

      const items = getFocusable();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [open, closeMenu]);

  const toggleTheme = () => {
    const current =
      document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    setTheme(next);
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute('content', next === 'dark' ? '#0e1411' : '#f3eddf');
    });
    try {
      localStorage.setItem('kr-theme', next);
    } catch {
      // The theme still applies for this visit when storage is unavailable.
    }
  };

  return (
    <>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <a className="brand" href="#home" aria-label="Krishna, back to top">
            Krishna
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={active === link.href ? 'is-active' : ''}
                    aria-current={active === link.href ? 'location' : undefined}
                    onClick={() => setActive(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-btn"
              onClick={toggleTheme}
              suppressHydrationWarning
              aria-label={
                theme === 'dark'
                  ? 'Switch to light theme'
                  : 'Switch to dark theme'
              }
              title={
                theme === 'dark'
                  ? 'Switch to light theme'
                  : 'Switch to dark theme'
              }
            >
              <svg
                className="ico-moon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <svg
                className="ico-sun"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            </button>

            <a
              className="btn btn-primary btn-sm nav-cta"
              href={`mailto:${EMAIL}?subject=Hello%20Krishna`}
            >
              Email Krishna
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              className="menu-toggle"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls={open ? 'mobile-menu' : undefined}
            >
              <span className="menu-toggle-label">Menu</span>
              <span className="menu-icon" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="menu-panel"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-title"
          ref={panelRef}
        >
          <div className="menu-head">
            <a
              className="brand"
              href="#home"
              onClick={() => {
                setActive('#home');
                closeMenu(false);
                focusTarget('#home');
              }}
            >
              Krishna
            </a>
            <button
              type="button"
              className="menu-close"
              onClick={() => closeMenu()}
              aria-label="Close menu"
            >
              <span>Close</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <p className="section-label menu-title" id="menu-title">
            Menu
          </p>

          <nav aria-label="Mobile">
            <ul className="menu-list">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActive(link.href);
                      closeMenu(false);
                      focusTarget(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu-foot">
            <a
              className="btn btn-primary"
              href={`mailto:${EMAIL}?subject=Hello%20Krishna`}
              onClick={() => closeMenu(false)}
            >
              Email Krishna
            </a>
            <a
              className="menu-email"
              href={`mailto:${EMAIL}`}
              onClick={() => closeMenu(false)}
            >
              {EMAIL}
            </a>
          </div>
        </div>
      )}
    </>
  );
}