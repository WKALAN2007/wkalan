"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Properties", href: "#accommodations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Dining", href: "#dining" },
  { label: "Gallery", href: "#gallery" },
  { label: "Our Story", href: "#about" },
];

export function HospitalityHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (!lenis) return;

    const update = ({ scroll }: { scroll: number }) => {
      setScrolled(scroll > 60);
    };

    lenis.on("scroll", update);
    return () => lenis.off("scroll", update);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-6"
      animate={{
        background: scrolled
          ? "rgba(28, 28, 26, 0.95)"
          : "rgba(28, 28, 26, 0)",
        borderBottom: scrolled
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid rgba(255, 255, 255, 0)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="font-heading text-xl tracking-[0.04em] text-[var(--wk-accent-dark)] no-underline"
      >
        AURELIA
      </a>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            className={`text-xs tracking-[0.08em] transition-colors no-underline ${
              activeSection === link.href
                ? "text-[var(--wk-accent-dark)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* RESERVE button */}
      <a
        href="#booking"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("booking");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden border border-[var(--wk-accent-dark)] px-5 py-2 text-xs tracking-[0.12em] text-[var(--wk-accent-dark)] no-underline transition-colors hover:bg-[var(--wk-accent-dark)] hover:text-white md:inline-block"
      >
        RESERVE
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="flex h-8 w-8 items-center justify-center md:hidden"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            className="block h-[1.5px] w-5 bg-[var(--wk-accent-dark)]"
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-[1.5px] w-5 bg-[var(--wk-accent-dark)]"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-[1.5px] w-5 bg-[var(--wk-accent-dark)]"
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </button>

      {/* Mobile menu */}
      <motion.nav
        className="absolute inset-x-0 top-full flex flex-col border-b border-white/10 bg-[rgba(28,28,26,0.98)] px-8 pb-6 pt-2 md:hidden"
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            className="py-3 text-sm tracking-[0.04em] text-white/70 no-underline transition-colors hover:text-[var(--wk-accent-dark)]"
          >
            {link.label}
          </a>
        ))}
      </motion.nav>
    </motion.header>
  );
}
