"use client";

/**
 * Fixed header — client name + nav.
 */
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mix-blend-difference text-white">
      <a href="#top" className="text-sm font-medium">
        {/* ══ UPDATE: client name ══ */}
        CLIENT
      </a>

      <nav className="flex items-center gap-6 text-sm">
        <a href="#about" className="hover:opacity-70 transition-opacity">
          关于
        </a>
        <a href="#work" className="hover:opacity-70 transition-opacity">
          作品
        </a>
        <a href="#contact" className="hover:opacity-70 transition-opacity">
          联系
        </a>
      </nav>
    </header>
  );
}
