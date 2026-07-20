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
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[var(--wk-bg)]/80 backdrop-blur-sm border-b border-[var(--wk-border)]">
      <a href="#top" className="text-sm font-semibold text-[var(--wk-text-primary)]">
        WKALAN
      </a>

      <nav className="hidden sm:flex items-center gap-6 text-sm text-[var(--wk-text-secondary)]">
        <a href="#work" className="hover:text-[var(--wk-text-primary)] transition-colors">
          作品
</a>
        <a
          href="mailto:hello@wkalan.com"
          className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-[var(--wk-text-primary)] px-4 py-2 text-xs font-medium text-[var(--wk-text-inverse)] hover:bg-[var(--wk-accent)] transition-colors"
        >
          开始对话 &rarr;
        </a>
      </nav>

      {/* Mobile menu button */}
      <button
        className="sm:hidden text-sm text-[var(--wk-text-secondary)]"
        onClick={toggleMenu}
        type="button"
      >
        {menuOpen ? "关闭" : "菜单"}
      </button>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-[57px] bg-[var(--wk-bg)] z-40 flex flex-col gap-6 p-6 sm:hidden">
          <a href="#work" onClick={closeMenu} className="text-lg text-[var(--wk-text-primary)]">
            作品
  </a>
          <a
            href="mailto:hello@wkalan.com"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[var(--wk-text-primary)] px-6 py-3 text-sm font-medium text-[var(--wk-text-inverse)]"
          >
            开始对话 &rarr;
          </a>
        </div>
      )}
    </header>
  );
}
