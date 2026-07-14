"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MoriHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-md"
        >
          <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 sm:px-8">
            <a href="/mori" className="text-xs tracking-[0.12em] text-[#B8B0A0] transition-colors hover:text-[#6B6760]">
              Akira Mori
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
