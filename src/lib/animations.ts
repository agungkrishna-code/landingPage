import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOTION } from './motion';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Wrap each word in a mask so it can rise from behind a line. */
function splitWords(root: HTMLElement): HTMLElement[] {
  if (root.dataset.split === 'true') {
    return gsap.utils.toArray<HTMLElement>('.word-mask > span', root);
  }

  const label = (root.textContent ?? '').replace(/\s+/g, ' ').trim();
  const wrapper = document.createElement('span');
  wrapper.className = 'split-wrap';
  wrapper.setAttribute('aria-hidden', 'true');

  while (root.firstChild) wrapper.appendChild(root.firstChild);
  root.appendChild(wrapper);
  root.setAttribute('aria-label', label);

  const walker = document.createTreeWalker(wrapper, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (node.nodeValue?.trim()) nodes.push(node);
  }

  for (const node of nodes) {
    const fragment = document.createDocumentFragment();
    const parts = (node.nodeValue ?? '').split(/(\s+)/);

    for (const part of parts) {
      if (part === '') continue;
      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
        continue;
      }

      const mask = document.createElement('span');
      mask.className = 'word-mask';

      const word = document.createElement('span');
      word.textContent = part;

      mask.appendChild(word);
      fragment.appendChild(mask);
    }

    node.parentNode?.replaceChild(fragment, node);
  }

  root.dataset.split = 'true';
  return gsap.utils.toArray<HTMLElement>('.word-mask > span', root);
}

function initScrollProgress() {
  const bar = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!bar) return;

  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      gsap.set(bar, { scaleX: self.progress });
    },
  });
}

/**
 * The desktop work counter is driven by ScrollTrigger. On touch layouts the
 * track scrolls natively, so keep the same counter in sync with scrollLeft.
 */
function initWorkCarouselCount() {
  const track = document.querySelector<HTMLElement>('[data-work-track]');
  const count = document.querySelector<HTMLElement>('[data-work-count]');
  const scroller = document.querySelector<HTMLElement>('[data-work-viewport]');
  if (!track || !count || !scroller) return;

  const cards = gsap.utils.toArray<HTMLElement>('[data-work-card]', track);
  if (cards.length < 2) return;

  // Cards outside the carousel viewport are not readable or focusable. This
  // keeps keyboard focus from landing on an invisible plate link.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          (entry.target as HTMLElement).inert = !entry.isIntersecting;
        }
      },
      { root: scroller, threshold: 0 },
    );

    cards.forEach((card) => observer.observe(card));
  }

  let frame = 0;
  const update = () => {
    frame = 0;
    if (window.matchMedia('(min-width: 1024px)').matches) return;

    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    if (step <= 0) return;

    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    const atEnd =
      maxScroll > 0 && scroller.scrollLeft >= maxScroll - 2;

    const index = atEnd
      ? cards.length - 1
      : Math.min(
          cards.length - 1,
          Math.max(0, Math.round(scroller.scrollLeft / step)),
        );
    count.textContent = String(index + 1).padStart(2, '0');
  };

  scroller.addEventListener(
    'scroll',
    () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    },
    { passive: true },
  );
}

function initHero() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const title = document.querySelector<HTMLElement>('[data-hero-title]');
  if (!hero || !title) return;

  const kicker = hero.querySelector<HTMLElement>('[data-hero-kicker]');
  const sub = hero.querySelector<HTMLElement>('[data-hero-sub]');
  const actions = hero.querySelector<HTMLElement>('[data-hero-actions]');
  const portrait = hero.querySelector<HTMLElement>('[data-hero-portrait]');
  const portraitImg = hero.querySelector<HTMLElement>('[data-portrait-inner] img');
  const stamp = hero.querySelector<HTMLElement>('.portrait-stamp');
  const rail = hero.querySelector<HTMLElement>('[data-hero-rail]');
  const railItems = rail ? Array.from(rail.children) : [];

  const run = () => {
    if (!title.isConnected) return;
    const words = splitWords(title);

    const tl = gsap.timeline({
      defaults: { ease: MOTION.ease },
    });

    if (kicker) {
      tl.from(kicker, { y: 12, opacity: 0, duration: 0.65 }, 0);
    }

    tl.from(
      words,
      {
        yPercent: 112,
        opacity: 0,
        duration: MOTION.heroDuration,
        stagger: MOTION.stagger,
      },
      0.05,
    );

    if (sub) {
      tl.from(sub, { y: 18, opacity: 0, duration: MOTION.duration }, '-=0.7');
    }

    if (actions) {
      tl.from(
        Array.from(actions.children),
        {
          y: 14,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
        },
        '-=0.68',
      );
    }

    if (portrait) {
      tl.from(
        portrait,
        { y: 28, opacity: 0, duration: 1.1 },
        0.22,
      );
    }

    if (portraitImg) {
      tl.from(
        portraitImg,
        { scale: 1.08, duration: 1.2, ease: 'power3.out' },
        0.22,
      );
    }

    if (stamp) {
      tl.from(
        stamp,
        { scale: 1.12, opacity: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.42',
      );
    }

    if (railItems.length) {
      tl.from(
        railItems,
        { y: 10, opacity: 0, duration: 0.6, stagger: 0.07 },
        '-=0.5',
      );
    }
  };

  if (document.fonts?.status === 'loaded') {
    run();
  } else {
    document.fonts.ready.then(run).catch(run);
  }
}

function initHeroParallax(mm: gsap.MatchMedia) {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const frame = hero?.querySelector<HTMLElement>('.portrait-frame');
  const copy = hero?.querySelector<HTMLElement>('[data-hero-copy]');
  if (!hero) return;

  mm.add('(min-width: 768px)', () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      },
    });

    if (frame) {
      tl.to(frame, { y: -MOTION.parallax, ease: 'none' }, 0);
    }

    if (copy) {
      tl.to(copy, { y: MOTION.parallax * 0.4, ease: 'none' }, 0);
    }
  });
}

function initReveals() {
  const single = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  for (const element of single) {
    gsap.from(element, {
      y: MOTION.revealY,
      opacity: 0,
      duration: MOTION.duration,
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
        once: true,
      },
    });
  }

  const groups = gsap.utils.toArray<HTMLElement>('[data-reveal-group]');
  for (const group of groups) {
    const children = gsap.utils.toArray<HTMLElement>(
      '[data-reveal-child]',
      group,
    );
    if (!children.length) continue;

    gsap.from(children, {
      y: MOTION.revealY,
      opacity: 0,
      duration: MOTION.duration,
      stagger: MOTION.stagger,
      scrollTrigger: {
        trigger: group,
        start: 'top 84%',
        once: true,
      },
    });
  }

  const rules = gsap.utils.toArray<HTMLElement>('[data-rule-draw]');
  for (const rule of rules) {
    const vertical = rule.dataset.ruleDraw === 'y';
    gsap.from(rule, {
      [vertical ? 'scaleY' : 'scaleX']: 0,
      transformOrigin: vertical ? 'top center' : 'left center',
      duration: 1.1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: rule,
        start: 'top 90%',
        once: true,
      },
    });
  }
}

function initServices(mm: gsap.MatchMedia) {
  const section = document.querySelector<HTMLElement>('[data-services]');
  if (!section) return;

  const cards = gsap.utils.toArray<HTMLElement>('[data-service-card]', section);
  const current = section.querySelector<HTMLElement>('[data-service-current]');
  const ticks = gsap.utils.toArray<HTMLElement>('[data-service-tick]', section);
  const bar = section.querySelector<HTMLElement>('[data-service-bar]');

  mm.add('(max-width: 1023px)', () => {
    if (!cards.length) return;
    gsap.from(cards, {
      y: MOTION.revealY,
      opacity: 0,
      duration: MOTION.duration,
      stagger: MOTION.stagger,
      scrollTrigger: {
        trigger: section,
        start: 'top 78%',
        once: true,
      },
    });
  });

  mm.add('(min-width: 1024px)', () => {
    const pin = section.querySelector<HTMLElement>('[data-services-pin]');
    if (!pin || cards.length < 2) return;

    const points = cards.slice(1).map((_, index) => (index + 1) / cards.length);
    let lastIndex = 0;

    const setActive = (index: number) => {
      if (index === lastIndex) return;
      lastIndex = index;
      if (current) current.textContent = String(index + 1).padStart(2, '0');
      ticks.forEach((tick, tickIndex) => {
        tick.classList.toggle('is-active', tickIndex === index);
      });
    };

    section.classList.add('is-pinned');
    gsap.set(cards, { zIndex: (index) => index + 1 });
    gsap.set(cards.slice(1), { opacity: 0, yPercent: 7 });
    setActive(0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 72px',
        end: () => `+=${window.innerHeight * (cards.length - 1) * 0.9}`,
        pin,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            cards.length - 1,
            points.filter((point) => progress >= point).length,
          );
          setActive(index);
          if (bar) gsap.set(bar, { scaleY: progress });
        },
      },
    });

    cards.forEach((card, index) => {
      if (index === 0) return;
      const at = points[index - 1];

      tl.to(
        cards[index - 1],
        { opacity: 0, yPercent: -7, duration: 0.12, ease: 'power2.inOut' },
        at,
      ).to(
        card,
        { opacity: 1, yPercent: 0, duration: 0.14, ease: 'power2.out' },
        at + 0.02,
      );
    });

    return () => {
      section.classList.remove('is-pinned');
      gsap.set(cards, { clearProps: 'all' });
      if (bar) gsap.set(bar, { clearProps: 'all' });
    };
  });
}

function initWork(mm: gsap.MatchMedia) {
  const section = document.querySelector<HTMLElement>('[data-work]');
  const pin = section?.querySelector<HTMLElement>('[data-work-pin]');
  const track = section?.querySelector<HTMLElement>('[data-work-track]');
  const viewport = section?.querySelector<HTMLElement>('[data-work-viewport]');
  if (!section || !pin || !track || !viewport) return;

  const cards = gsap.utils.toArray<HTMLElement>('[data-work-card]', track);
  const count = section.querySelector<HTMLElement>('[data-work-count]');
  const bar = section.querySelector<HTMLElement>('[data-work-bar]');

  mm.add('(min-width: 1024px)', () => {
    if (cards.length === 0) return;

    section.classList.add('is-pinned');
    viewport.tabIndex = -1;

    const distance = () =>
      Math.max(0, track.scrollWidth - pin.clientWidth);

    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top 72px',
        end: () => `+=${distance() + window.innerHeight * 0.35}`,
        pin,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (count) {
            const index = Math.min(
              cards.length,
              Math.max(
                1,
                Math.round(self.progress * (cards.length - 1)) + 1,
              ),
            );
            count.textContent = String(index).padStart(2, '0');
          }
          if (bar) gsap.set(bar, { scaleX: self.progress });
        },
      },
    });

    gsap.utils
      .toArray<HTMLElement>('[data-work-parallax]', track)
      .forEach((element) => {
        const card = element.closest<HTMLElement>('[data-work-card]');
        gsap.fromTo(
          element,
          { xPercent: -3 },
          {
            xPercent: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: card ?? element,
              containerAnimation: tween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          },
        );
      });

    return () => {
      section.classList.remove('is-pinned');
      viewport.tabIndex = 0;
      gsap.set(track, { clearProps: 'transform' });
      if (bar) gsap.set(bar, { clearProps: 'all' });
    };
  });
}

function initReducedMotionWork() {
  const viewport = document.querySelector<HTMLElement>('[data-work-viewport]');
  if (!viewport) return;

  const layout = window.matchMedia('(min-width: 768px)');
  const sync = () => {
    viewport.tabIndex = layout.matches ? -1 : 0;
  };

  sync();
  layout.addEventListener('change', sync);
}

export function initAnimations() {
  const progress = gsap.context(initScrollProgress);
  initWorkCarouselCount();

  if (reduceMotion()) {
    initReducedMotionWork();
    window.addEventListener('pagehide', () => progress.revert(), { once: true });
    return;
  }

  document.documentElement.dataset.motion = 'ok';
  ScrollTrigger.config({ ignoreMobileResize: true });
  gsap.defaults({ ease: MOTION.ease, duration: MOTION.duration });

  const mm = gsap.matchMedia();
  const ctx = gsap.context(() => {
    initHero();
    initHeroParallax(mm);
    initReveals();
    initServices(mm);
    initWork(mm);
  });

  const refresh = () => ScrollTrigger.refresh();

  window.addEventListener('load', refresh, { once: true });
  document.fonts?.ready.then(refresh).catch(() => {});
  document.querySelectorAll('img').forEach((image) => {
    if (!image.complete) {
      image.addEventListener('load', refresh, { once: true });
      image.addEventListener('error', refresh, { once: true });
    }
  });

  window.addEventListener(
    'pagehide',
    () => {
      mm.revert();
      ctx.revert();
      progress.revert();
    },
    { once: true },
  );
}