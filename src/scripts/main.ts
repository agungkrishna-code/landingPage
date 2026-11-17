// Site-wide behaviour. Animation code is split into src/lib/animations.ts.
// This entry point only wires the UI and starts the motion layer.

import { initSmoothScroll } from '../lib/smooth-scroll';
import { initTheme, initNav, initCopyEmail } from '../lib/ui';
import { initAnimations } from '../lib/animations';

const boot = () => {
  document.documentElement.classList.add('js');

  const smoothScroll = initSmoothScroll();
  initTheme();
  initNav(smoothScroll);
  initCopyEmail();
  initAnimations();

  window.addEventListener('pagehide', () => smoothScroll.destroy(), {
    once: true,
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}