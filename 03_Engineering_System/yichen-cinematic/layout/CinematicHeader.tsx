"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CinematicHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl"
        >
          <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 sm:px-8">
            <a
              href="/yichen-cinematic"
              className="text-xs tracking-[0.15em] text-white/40 transition-colors hover:text-white/70"
            >
              林奕辰
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
