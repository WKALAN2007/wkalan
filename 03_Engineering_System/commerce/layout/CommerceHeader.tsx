"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/03_Engineering_System/commerce/components/CartContext";

const navLinks = [
  { label: "Shop", href: "/commerce#new-arrivals" },
  { label: "Categories", href: "/commerce#categories" },
  { label: "About", href: "/commerce/about" },
  { label: "Subscribe", href: "/commerce/subscribe" },
  { label: "Contact", href: "/commerce/contact" },
];

export function CommerceHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { state, dispatch } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      if (scrollY > heroHeight * 0.4) setVisible(true);
      else setVisible(false);
      setScrolled(scrollY > heroHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-[var(--wk-bg)]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-16 max-w-[var(--container-wide)] items-center justify-between px-[var(--container-padding)]">
            {/* Logo */}
            <Link
              href="/commerce"
              className="group font-heading text-xl tracking-[-0.02em] text-[#1a3a1a] transition-all hover:opacity-70 flex items-center gap-2"
            >
              <span className="inline-block w-5 h-5 rounded-[50%_0_50%_50%] bg-[#4a8c4a] -rotate-[30deg] transition-all duration-500 group-hover:rotate-0 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-[#4a8c4a]/40" />
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">VERDANT</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-3 py-2 text-sm tracking-[0.04em] text-[var(--wk-text-secondary)] transition-all duration-300 hover:text-[#3d7a3d] hover:scale-105"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#3d7a3d] transition-all duration-300 group-hover:w-full -translate-x-1/2 hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Cart button */}
              <button
                onClick={() => dispatch({ type: "TOGGLE_CART" })}
                className="group relative rounded-full px-3 py-2 text-sm tracking-[0.04em] text-[var(--wk-text-secondary)] transition-all hover:text-[#3d7a3d] hover:bg-[#f2faf2] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Bag</span>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#3d7a3d] text-[10px] font-bold text-white shadow-md shadow-[#3d7a3d]/40 transition-all group-hover:scale-110"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="group rounded-full px-3 py-2 text-sm tracking-[0.04em] text-[var(--wk-text-secondary)] transition-all hover:text-[#3d7a3d] hover:bg-[#f2faf2] hover:scale-105 active:scale-95 md:hidden"
              >
                <span className="transition-transform group-hover:scale-110 inline-block">
                  {mobileMenuOpen ? "(x)" : "Menu"}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-[var(--wk-border)] bg-[var(--wk-bg)]"
              >
                <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] py-6">
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block w-full rounded-lg px-4 py-3 text-left font-heading text-2xl tracking-[-0.02em] text-[var(--wk-text-primary)] transition-all hover:bg-[#f2faf2] hover:text-[#3d7a3d] hover:pl-6 active:scale-[0.98]"
                        >
                          [{link.label}]
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
