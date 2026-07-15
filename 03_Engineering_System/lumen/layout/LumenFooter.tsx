import Link from "next/link";

const recognition = [
  { name: "TechCrunch", subtitle: "Disrupt" },
  { name: "Sequoia", subtitle: "Seed" },
  { name: "Forbes", subtitle: "Featured" },
  { name: "a16z", subtitle: "Partner" },
];

const sitemap = {
  Company: [
    { label: "About", href: "/lumen/about" },
    { label: "Team", href: "/lumen/team" },
    { label: "Journal", href: "/lumen/journal" },
    { label: "Press", href: "/lumen/press" },
  ],
  Product: [
    { label: "Overview", href: "/lumen/product" },
    { label: "Privacy", href: "/lumen/product" },
    { label: "Security", href: "/lumen/product" },
  ],
  Connect: [
    { label: "Contact", href: "/lumen/contact" },
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export function LumenFooter() {
  return (
    <footer style={{ background: "var(--lumen-bg)" }}>
      {/* Recognition Bar */}
      <div className="border-b" style={{ borderColor: "var(--lumen-border)" }}>
        <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap items-center justify-center gap-8 px-[var(--container-padding)] py-10 sm:gap-14">
          {recognition.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-1 opacity-40 transition-opacity hover:opacity-60">
              <span className="text-xs font-medium tracking-[0.08em]" style={{ color: "var(--lumen-text-primary)" }}>{item.name}</span>
              <span className="text-[10px] tracking-[0.12em]" style={{ color: "var(--lumen-text-tertiary)" }}>{item.subtitle}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sitemap */}
      <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-2 gap-10 px-[var(--container-padding)] py-16 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <span className="text-sm font-medium tracking-[0.04em]" style={{ color: "var(--lumen-text-primary)" }}>Lumen</span>
          <p className="mt-3 max-w-[200px] text-xs leading-relaxed" style={{ color: "var(--lumen-text-tertiary)" }}>
            Helping people think clearly. An AI research workspace designed for clarity.
          </p>
        </div>
        {Object.entries(sitemap).map(([title, links]) => (
          <div key={title}>
            <span className="text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: "var(--lumen-text-dim)" }}>{title}</span>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs no-underline transition-colors" style={{ color: "var(--lumen-text-tertiary)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "var(--lumen-border)" }}>
        <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center gap-4 px-[var(--container-padding)] py-8 sm:flex-row sm:justify-between">
          <p className="text-[11px]" style={{ color: "var(--lumen-text-dim)" }}>&copy; {new Date().getFullYear()} Lumen. All rights reserved.</p>
          <p className="text-[11px] italic" style={{ color: "var(--lumen-text-dim)" }}>&ldquo;The future belongs to people who can think clearly.&rdquo;</p>
        </div>
      </div>
    </footer>
  );
}
