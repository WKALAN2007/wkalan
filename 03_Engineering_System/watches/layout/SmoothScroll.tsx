"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Lenis from "lenis";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const [showTop, setShowTop] = useState(false);

  const handleAnchor = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    e.preventDefault();
    lenisRef.current?.scrollTo(el, {
      offset: -80,
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", handleAnchor);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", handleAnchor);
    };
  }, [handleAnchor]);

  return (
    <AnimatePresence>
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => lenisRef.current?.scrollTo(0, { duration: 1.2 })}
          style={{
            position: "fixed",
            bottom: 32,
            right: 24,
            zIndex: 80,
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid rgba(184,153,71,0.2)",
            background: "rgba(15,15,15,0.8)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "none",
            transition: "all 0.5s",
          }}
          aria-label="Scroll to top"
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(184,153,71,0.5)";
            e.currentTarget.style.background = "rgba(184,153,71,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(184,153,71,0.2)";
            e.currentTarget.style.background = "rgba(15,15,15,0.8)";
          }}
        >
          <ArrowUp size={16} color="rgba(184,153,71,0.6)" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
