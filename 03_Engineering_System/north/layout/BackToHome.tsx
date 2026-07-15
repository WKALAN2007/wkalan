"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export function BackToHome() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (!lenis) {
      // Fallback: use window scroll
      const onScroll = () => setVisible(window.scrollY > 400);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const update = ({ scroll }: { scroll: number }) => {
      setVisible(scroll > 400);
    };
    lenis.on("scroll", update);
    return () => lenis.off("scroll", update);
  }, []);

  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex flex-col gap-2"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 backdrop-blur-sm transition-all hover:border-gray-400 hover:text-gray-800"
        aria-label="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 10l5-5 5 5" />
        </svg>
      </button>

      {/* Home */}
      <Link
        href="/north"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 backdrop-blur-sm transition-all hover:border-gray-400 hover:text-gray-800"
        aria-label="Back to home"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 6l6-4 6 4v8H2V6z" />
          <path d="M6 14V9h4v5" />
        </svg>
      </Link>
    </motion.div>
  );
}
