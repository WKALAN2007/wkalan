"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LumenHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (!lenis) return;
    const update = ({ scroll }: { scroll: number }) => setScrolled(scroll > 60);
    lenis.on("scroll", update);
    return () => lenis.off("scroll", update);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-6"
      animate={{
        background: scrolled ? "rgba(7, 11, 32, 0.94)" : "rgba(7, 11, 32, 0)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.3 }}
    >
      <span className="font-medium text-sm tracking-[0.04em]" style={{ color: "var(--lumen-text-primary)" }}>
        Lumen
      </span>
    </motion.header>
  );
}
