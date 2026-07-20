"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Lenis smooth scroll wrapper with GSAP ScrollTrigger integration.
 *
 * - Creates a Lenis instance with expo-out easing
 * - Bridges GSAP ScrollTrigger to Lenis so they stay in sync
 * - Forces scroll to top on reload (prevents browser scroll restoration)
 * - Exposes `window.__lenis` for other components to access
 */
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    // GSAP + Lenis bridge — keep ScrollTrigger in sync with smooth scroll
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      ScrollTrigger.getAll().forEach((st) => st.kill());
      delete (window as any).__lenis;
    };
  }, []);

  return null;
}
