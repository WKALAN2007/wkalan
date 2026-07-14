"use client";

import { useState, useEffect } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

export function FashionHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [barDismissed, setBarDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerTop = !barDismissed ? "top-8" : "top-0";

  return (
    <>
      {/* Announcement Bar */}
      {!barDismissed && (
        <div className="fixed inset-x-0 top-0 z-[110] flex h-8 items-center justify-center bg-[#1A1A1A] text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-xs">
          <span>Complimentary shipping on all orders</span>
          <button
            onClick={() => setBarDismissed(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 transition-colors hover:text-white"
            aria-label="Dismiss announcement"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Main Header */}
      <header
        className={`fixed inset-x-0 z-[100] transition-all duration-500 ${headerTop} ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 sm:px-8">
          {/* Left: Menu */}
          <button
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#1A1A1A] transition-opacity hover:opacity-60"
            aria-label="Menu"
          >
            <Menu className="h-4 w-4" />
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Center: Logo */}
          <a
            href="/fashion"
            className="font-heading text-xl tracking-[0.15em] text-[#1A1A1A] sm:text-2xl"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            NKSEN
          </a>

          {/* Right: Search + Cart */}
          <div className="flex items-center gap-4 sm:gap-5">
            <button
              className="text-[#1A1A1A] transition-opacity hover:opacity-60"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              className="text-[#1A1A1A] transition-opacity hover:opacity-60"
              aria-label="Cart"
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
