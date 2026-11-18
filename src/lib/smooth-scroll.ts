import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export type SmoothScroll = {
  lenis: Lenis | null;
  destroy: () => void;
};

/**
 * Lenis is deliberately skipped for reduced-motion users and for touch or
 * coarse-pointer devices, where native momentum scrolling is already smooth.
 * Running it there only adds a second animation loop on top of ScrollTrigger.
 */
export function initSmoothScroll(): SmoothScroll {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  if (reduced.matches || !precisePointer.matches) {
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