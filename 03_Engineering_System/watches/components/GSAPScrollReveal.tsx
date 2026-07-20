"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GSAP ScrollTrigger-powered reveal wrapper.
 *
 * Unlike framer-motion whileInView, GSAP ScrollTrigger offers:
 * - Precise scrub control (animation tied to scroll position)
 * - Complex timeline sequencing
 * - stagger with from/to individual control
 *
 * Usage: <GSAPReveal animation="fadeUp"><div>Content</div></GSAPReveal>
 */
export function GSAPReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  scrub = false,
}: {
  children: ReactNode;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp";
  delay?: number;
  duration?: number;
  scrub?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animProps: gsap.TweenVars = {
      opacity: 0,
      ...(animation === "fadeUp" && { y: 40 }),
      ...(animation === "fadeIn" && {}),
      ...(animation === "slideLeft" && { x: -60 }),
      ...(animation === "slideRight" && { x: 60 }),
      ...(animation === "scaleUp" && { scale: 0.9 }),
    };

    const targetProps: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      ease: "power3.out",
    };

    if (scrub) {
      gsap.fromTo(el, animProps, {
        ...targetProps,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=100",
          end: "top center",
          scrub: 0.8,
        },
      });
    } else {
      gsap.fromTo(el, animProps, {
        ...targetProps,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=80",
          once: true,
        },
      });
    }
  }, [animation, delay, duration, scrub]);

  return <div ref={ref}>{children}</div>;
}

/**
 * GSAP Stagger container.
 * Reveals children one-by-one with GSAP stagger.
 *
 * Usage: <GSAPStagger stagger={0.1}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </GSAPStagger>
 */
export function GSAPStagger({
  children,
  stagger = 0.1,
  from = "fadeUp",
}: {
  children: ReactNode;
  stagger?: number;
  from?: "fadeUp" | "fadeIn" | "slideRight";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.children;
    if (!items.length) return;

    const animProps: gsap.TweenVars = {
      opacity: 0,
      ...(from === "fadeUp" && { y: 30 }),
      ...(from === "fadeIn" && {}),
      ...(from === "slideRight" && { x: -40 }),
    };

    gsap.fromTo(items, animProps, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.7,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=60",
        once: true,
      },
    });
  }, [stagger, from]);

  return <div ref={ref}>{children}</div>;
}

/**
 * GSAP Scrub parallax section.
 * Elements move at different rates based on scroll position.
 */
export function GSAPParallax({
  children,
  speed = 0.3,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 40 },
      {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      }
    );
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
