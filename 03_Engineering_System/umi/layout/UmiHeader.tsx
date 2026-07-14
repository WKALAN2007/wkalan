"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", emoji: "🐟" },
  { label: "Research", emoji: "📋" },
  { label: "Loyalty", emoji: "🎁" },
  { label: "FAQ", emoji: "💭" },
  { label: "Shop", emoji: "🛒" },
];

export function UmiHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 sm:px-8">
        <a href="/umi" className="text-xl font-bold tracking-[-0.02em]">UMI</a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href="#" className="flex flex-col items-center gap-0.5 text-xs text-gray-500 transition-colors hover:text-[#C1272D]">
              <span className="text-sm">{item.emoji}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden" aria-label="Menu">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}
