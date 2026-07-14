"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "作品", href: "#stories" },
  { label: "流程", href: "#process" },
  { label: "关于", href: "#origin" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Header appears after scrolling past 60% of hero
      if (scrollY > heroHeight * 0.6) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Background becomes opaque after full hero
      setScrolled(scrollY > heroHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-[var(--color-background)]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-16 max-w-[var(--container-max)] items-center justify-between px-[var(--container-padding)]">
            {/* Logo */}
            <a
              href="/"
              className="font-heading text-lg tracking-[-0.02em] text-[var(--color-text-primary)] transition-opacity hover:opacity-60"
            >
              WKALAN
            </a>

            {/* Nav */}
            <nav className="hidden items-center gap-8 sm:flex">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="mailto:hello@wkalan.com"
              className="text-sm font-medium text-[var(--color-accent)] transition-opacity hover:opacity-70"
            >
              开始对话 &rarr;
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
