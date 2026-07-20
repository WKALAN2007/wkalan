"use client";

import { useState, useCallback } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-neutral-100">
      <a href="#top" className="text-sm font-semibold text-neutral-900">
        WKALAN
      </a>

      <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-500">
        <a href="#process" className="hover:text-neutral-900 transition-colors">
          怎么做
        </a>
        <a href="#stories" className="hover:text-neutral-900 transition-colors">
          案例
        </a>
        <a href="#pricing" className="hover:text-neutral-900 transition-colors">
          定价
        </a>
        <a
          href="mailto:hello@wkalan.com"
          className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2 text-xs font-medium text-white hover:bg-neutral-700 transition-colors"
        >
          预约对话
        </a>
      </nav>

      {/* Mobile menu button */}
      <button
        className="sm:hidden text-sm text-neutral-500"
        onClick={toggleMenu}
        type="button"
      >
        {menuOpen ? "关闭" : "菜单"}
      </button>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-[57px] bg-white z-40 flex flex-col gap-6 p-6 sm:hidden">
          <a href="#process" onClick={closeMenu} className="text-lg text-neutral-900">
            怎么做
          </a>
          <a href="#stories" onClick={closeMenu} className="text-lg text-neutral-900">
            案例
          </a>
          <a href="#pricing" onClick={closeMenu} className="text-lg text-neutral-900">
            定价
          </a>
          <a
            href="mailto:hello@wkalan.com"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white"
          >
            预约对话 →
          </a>
        </div>
      )}
    </header>
  );
}
