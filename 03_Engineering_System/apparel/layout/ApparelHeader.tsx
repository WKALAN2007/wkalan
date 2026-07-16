"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "New", href: "/apparel/products?sort=newest" },
  { label: "Women", href: "/apparel/products?category=women" },
  { label: "Men", href: "/apparel/products?category=men" },
  { label: "Accessories", href: "/apparel/products?category=accessories" },
  { label: "Sale", href: "/apparel/products?filter=sale" },
];

export function ApparelHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 sm:px-8">
          {/* Left: Nav (Desktop) */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A] transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#1A1A1A] transition-opacity hover:opacity-60 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
            <span>Menu</span>
          </button>

          {/* Center: Logo */}
          <Link
            href="/apparel"
            className="absolute left-1/2 -translate-x-1/2 font-heading text-xl tracking-[0.12em] text-[#1A1A1A] sm:text-2xl"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            MÉTIER
          </Link>

          {/* Right: Search + Cart */}
          <div className="flex items-center gap-4 sm:gap-5">
            <button
              className="text-[#1A1A1A] transition-opacity hover:opacity-60"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              onClick={toggleDrawer}
              className="relative text-[#1A1A1A] transition-opacity hover:opacity-60"
              aria-label={`Cart, ${itemCount} items`}
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 && (
                <motion.span
                  key={itemCount}
                  className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#1A1A1A] text-[10px] font-medium text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="fixed inset-y-0 right-0 z-[160] w-full max-w-sm bg-white p-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-12 flex items-center justify-between">
                <span
                  className="font-heading text-xl tracking-[0.12em]"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  MÉTIER
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-[#1A1A1A]/60 transition-colors hover:text-[#1A1A1A]"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-heading text-2xl text-[#1A1A1A] transition-opacity hover:opacity-60"
                      style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
