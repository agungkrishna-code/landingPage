import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { SmoothScroll } from './smooth-scroll';

const root = document.documentElement;

/** Light/dark theme, persisted in localStorage. The head script prevents flash. */
export function initTheme() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

  const sync = () => {
    const dark = root.dataset.theme === 'dark';
    root.style.colorScheme = dark ? 'dark' : 'light';
    if (meta) meta.content = dark ? '#0e1411' : '#f3eddf';
    if (toggle) {
      toggle.setAttribute(
        'aria-label',
        dark ? 'Switch to light theme' : 'Switch to dark theme',
      );
      toggle.setAttribute('aria-pressed', String(dark));
    }
  };

  sync();

  toggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('kr-theme', next);
    } catch {
      // Storage can be unavailable; the theme still applies for this visit.
    }
    sync();
  });
}

/** Nav state, mobile menu, focus handling, active section, anchor scrolling. */
export function initNav(smoothScroll: SmoothScroll) {
  const header = document.querySelector<HTMLElement>('[data-site-nav]');
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  const menuLabel = document.querySelector<HTMLElement>('[data-menu-label]');
  const themeToggle = document.querySelector<HTMLButtonElement>(
    '[data-theme-toggle]',
  );
  const navLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(
      '[data-nav-link], [data-menu-link]',
    ),
  );

  let menuOpen = false;
  let lastFocus: HTMLElement | null = null;
  const background = Array.from(
    document.querySelectorAll<HTMLElement>('main, footer, .brand'),
  );

  const onScroll = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setMenu = (open: boolean, returnFocus = true) => {
    if (!toggle || !menu || menuOpen === open) return;
    menuOpen = open;

    toggle.setAttribute('aria-expanded', String(open));
    if (menuLabel) menuLabel.textContent = open ? 'Close menu' : 'Open menu';

    if (open) {
      lastFocus = document.activeElement as HTMLElement | null;
      menu.inert = false;
      menu.dataset.open = 'true';
      root.classList.add('menu-open');
      background.forEach((element) => {
        element.inert = true;
      });
      smoothScroll.lenis?.stop();
      requestAnimationFrame(() => {
        menu.querySelector<HTMLElement>('a[href]')?.focus();
      });
    } else {
      menu.dataset.open = 'false';
      menu.inert = true;
      root.classList.remove('menu-open');
      background.forEach((element) => {
        element.inert = false;
      });
      smoothScroll.lenis?.start();
      if (returnFocus) (lastFocus ?? toggle).focus();
    }
  };

  toggle?.addEventListener('click', () => setMenu(!menuOpen));

  menu?.querySelectorAll<HTMLAnchorElement>('[data-menu-link]').forEach((link) => {
    link.addEventListener('click', () => setMenu(false, false));
  });

  document.addEventListener('keydown', (event) => {
    if (!menuOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      setMenu(false);
      return;
    }

    if (event.key !== 'Tab' || !menu || !toggle) return;

    const focusable = [
      ...(themeToggle ? [themeToggle] : []),
      toggle,
      ...Array.from(
        menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ),
    ].filter((el) => el.offsetParent !== null);

    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.matchMedia('(min-width: 900px)').addEventListener('change', (event) => {
    if (event.matches) setMenu(false, false);
  });

  const moveFocus = (target: HTMLElement) => {
    const element = target.querySelector<HTMLElement>('h1, h2') ?? target;
    if (!element.hasAttribute('tabindex')) {
      element.setAttribute('tabindex', '-1');
    }
    element.focus({ preventScroll: true });
  };

  // Smooth anchor navigation. Skip reduced-motion users and the skip link.
  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
      'a[href]',
    );
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#') || href === '#') return;
    if (link.classList.contains('skip-link')) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    if (menuOpen) setMenu(false, false);
    moveFocus(target);

    if (!smoothScroll.lenis) return;

    event.preventDefault();

    // Pinned sections change the document height. Re-measure before asking
    // Lenis to scroll, then use a numeric target so the offset stays correct.
    ScrollTrigger.refresh();
    const top = target.getBoundingClientRect().top + window.scrollY - 84;

    smoothScroll.lenis.scrollTo(top, {
      duration: 1.15,
    });
    history.pushState(null, '', href);
  });

  // Active section underline.
  const sections = navLinks
    .map((link) => document.querySelector<HTMLElement>(link.hash))
    .filter((section): section is HTMLElement => Boolean(section));

  let ticking = false;
  const updateActive = () => {
    ticking = false;
    const marker = window.innerHeight * 0.42;
    let active = '';

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= marker && rect.bottom > marker) {
        active = `#${section.id}`;
        break;
      }
    }

    // At the very bottom, the last section wins even if it is short.
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4
    ) {
      active = `#${sections[sections.length - 1]?.id ?? ''}`;
    }

    navLinks.forEach((link) => {
      if (link.hash === active) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const requestActive = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateActive);
  };

  onScroll();
  updateActive();
  window.addEventListener('scroll', requestActive, { passive: true });
  window.addEventListener('resize', requestActive, { passive: true });
}

/** Clipboard action with a labelled fallback for non-secure contexts. */
export function initCopyEmail() {
  const buttons = document.querySelectorAll<HTMLButtonElement>(
    '[data-copy-email]',
  );

  buttons.forEach((button) => {
    const email = button.dataset.email ?? '';
    const label = button.querySelector<HTMLElement>('[data-copy-label]');
    const status = document.querySelector<HTMLElement>('[data-copy-status]');
    const defaultLabel = label?.textContent ?? 'Copy email';
    const copiedLabel = button.dataset.copiedLabel ?? 'Copied';
    const errorLabel = button.dataset.errorLabel ?? 'Press Ctrl+C';
    let timer: number | undefined;

    const announce = (message: string, state: 'copied' | 'error') => {
      button.dataset.state = state;
      if (label) label.textContent = message;
      if (status) status.textContent = message;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        button.removeAttribute('data-state');
        if (label) label.textContent = defaultLabel;
        if (status) status.textContent = '';
      }, 2400);
    };

    const fallbackCopy = () => {
      const field = document.createElement('textarea');
      field.value = email;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.top = '-1000px';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand('copy');
      field.remove();
      return ok;
    };

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        announce(copiedLabel, 'copied');
      } catch {
        const copied = fallbackCopy();
        announce(copied ? copiedLabel : errorLabel, copied ? 'copied' : 'error');
      }
    });
  });
}