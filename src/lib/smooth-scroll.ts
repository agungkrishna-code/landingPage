import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export type SmoothScroll = {
  lenis: Lenis | null;
  destroy: () => void;
};

/**
 * Lenis is deliberately disabled for reduced-motion users. ScrollTrigger keeps
 * working against native scrolling in that case.
 */
export function initSmoothScroll(): SmoothScroll {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return { lenis: null, destroy: () => {} };
  }

  const lenis = new Lenis({
    autoRaf: false,
    duration: 1.05,
    smoothWheel: true,
    anchors: false,
  });

  lenis.on('scroll', ScrollTrigger.update);

  const raf = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    destroy: () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      ScrollTrigger.update();
    },
  };
}