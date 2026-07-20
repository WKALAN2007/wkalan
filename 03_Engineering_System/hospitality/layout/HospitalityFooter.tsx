const sitemap = {
  Property: [
    { label: "Rooms & Suites", href: "#accommodations" },
    { label: "Dining", href: "#dining" },
    { label: "Experiences", href: "#experiences" },
    { label: "Gallery", href: "#gallery" },
  ],
  About: [
    { label: "Our Story", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
  Connect: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export function HospitalityFooter() {
  return (
    <footer className="bg-[#1C1C1A] text-[#F9F7F4]">
      {/* ── Sitemap ── */}
      <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-2 gap-10 px-[var(--container-padding)] py-20 sm:grid-cols-4">
        {/* Brand column */}
        <div className="col-span-2 sm:col-span-1">
          <span className="font-heading text-xl tracking-[0.04em] text-[var(--wk-accent-dark)]">
            AURELIA
          </span>
          <p className="mt-3 max-w-[200px] text-xs leading-relaxed text-white/40">
            Where timeless elegance meets modern comfort. A sanctuary for the
            discerning traveler.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(sitemap).map(([title, links]) => (
          <div key={title}>
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--wk-accent-dark)]/60">
              {title}
            </span>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/40 no-underline transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center gap-4 px-[var(--container-padding)] py-8 sm:flex-row sm:justify-between">
          <p className="text-[11px] text-white/30">
            &copy; {new Date().getFullYear()} Aurelia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-white/30 no-underline transition-colors hover:text-white/50">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] text-white/30 no-underline transition-colors hover:text-white/50">
              Cookie Policy
            </a>
            <a href="#" className="text-[11px] text-white/30 no-underline transition-colors hover:text-white/50">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
