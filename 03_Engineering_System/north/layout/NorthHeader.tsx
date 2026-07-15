"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/north" },
  { label: "Product", href: "/north/product" },
  { label: "About", href: "/north/about" },
  { label: "Team", href: "/north/team" },
  { label: "Journal", href: "/north/journal" },
  { label: "Press", href: "/north/press" },
  { label: "Contact", href: "/north/contact" },
];

export function NorthHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (!lenis) return;

    const update = ({ scroll }: { scroll: number }) => {
      setScrolled(scroll > 60);
    };

    lenis.on("scroll", update);
    return () => lenis.off("scroll", update);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-6"
      animate={{
        background: scrolled
          ? "rgba(15, 15, 13, 0.95)"
          : "rgba(15, 15, 13, 0)",
        borderBottom: scrolled
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid rgba(255, 255, 255, 0)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <Link
        href="/north"
        className="font-medium text-sm tracking-[0.04em] text-gray-800 no-underline"
      >
        North
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.slice(1).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs tracking-[0.08em] transition-colors no-underline ${
              pathname === link.href
                ? "text-[var(--color-text-primary)]"
                : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="flex h-8 w-8 items-center justify-center md:hidden"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            className="block h-[1.5px] w-5 bg-gray-800"
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-[1.5px] w-5 bg-gray-800"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-[1.5px] w-5 bg-gray-800"
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </button>

      {/* Mobile menu */}
      <motion.nav
        className="absolute inset-x-0 top-full flex flex-col border-b border-gray-200 bg-white px-8 pb-6 pt-2 md:hidden"
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`py-3 text-sm tracking-[0.04em] no-underline transition-colors ${
              pathname === link.href
                ? "text-[var(--color-text-primary)]"
                : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </motion.nav>
    </motion.header>
  );
}
