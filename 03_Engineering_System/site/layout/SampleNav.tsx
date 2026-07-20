"use client";

import Link from "next/link";

/**
 * Shared sample navigation bar — fixed bottom, minimal.
 * Appears on every sample website page so visitors can
 * return to the main portfolio or jump between samples.
 */

const samples = [
  { name: "Aurelia Hospitality", href: "/hospitality" },
  { name: "一尘工作室", href: "/yichen" },
  { name: "Mori", href: "/mori" },
  { name: "Boreal", href: "/founder" },
  { name: "The Watch Archive", href: "/watches" },
  { name: "Meridian Commerce", href: "/commerce" },
  { name: "Atelier", href: "/fashion" },
];

export function SampleNav({ current }: { current: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--wk-border)] bg-[var(--wk-bg)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-4 py-3">
        {/* Back to portfolio */}
        <Link
          href="/#work"
          className="text-xs font-medium text-[var(--wk-text-secondary)] hover:text-[var(--wk-text-primary)] transition-colors"
        >
          ← 返回作品集
        </Link>

        {/* Sample selector — scrollable row of dots/names */}
        <div className="hidden md:flex items-center gap-3 text-[10px]">
          {samples.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`uppercase tracking-[0.1em] transition-colors ${
                s.href === current
                  ? "text-[var(--wk-text-primary)] font-medium"
                  : "text-[var(--wk-text-tertiary)] hover:text-[var(--wk-text-secondary)]"
              }`}
            >
              {s.name}
            </Link>
          ))}
        </div>

        {/* Mobile: just a shortcut to next sample */}
        <Link
          href="/#work"
          className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--wk-text-tertiary)] hover:text-[var(--wk-text-primary)] transition-colors md:hidden"
        >
          全部作品
        </Link>
      </div>
    </div>
  );
}
