import Link from "next/link";

const recognition = [
  { name: "Y Combinator", subtitle: "W24" },
  { name: "Sequoia", subtitle: "Seed" },
  { name: "Forbes", subtitle: "30 Under 30" },
  { name: "TechCrunch", subtitle: "Featured" },
  { name: "A16Z", subtitle: "Partner" },
  { name: "Fast Company", subtitle: "Most Innovative" },
];

const sitemap = {
  Company: [
    { label: "About", href: "/north/about" },
    { label: "Team", href: "/north/team" },
    { label: "Journal", href: "/north/journal" },
    { label: "Press", href: "/north/press" },
  ],
  Product: [
    { label: "Overview", href: "/north/product" },
    { label: "Privacy", href: "/north/product" },
    { label: "Security", href: "/north/product" },
  ],
  Connect: [
    { label: "Contact", href: "/north/contact" },
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export function NorthFooter() {
  return (
    <footer className="bg-white text-gray-900">
      {/* ── Recognition Bar ── */}
      <div className="border-b border-gray-200">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap items-center justify-center gap-8 px-[var(--container-padding)] py-10 sm:gap-14">
          {recognition.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-1 opacity-40 transition-opacity hover:opacity-60"
            >
              <span className="text-xs font-medium tracking-[0.08em] text-gray-900">
                {item.name}
              </span>
              <span className="text-[10px] tracking-[0.12em] text-gray-500">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sitemap ── */}
      <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-2 gap-10 px-[var(--container-padding)] py-16 sm:grid-cols-4">
        {/* Brand column */}
        <div className="col-span-2 sm:col-span-1">
          <span className="text-sm font-medium tracking-[0.04em] text-gray-900">
            North
          </span>
          <p className="mt-3 max-w-[200px] text-xs leading-relaxed text-gray-400">
            Helping people remember what matters. Technology built to preserve
            human stories across generations.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(sitemap).map(([title, links]) => (
          <div key={title}>
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-gray-400">
              {title}
            </span>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-500 no-underline transition-colors hover:text-gray-800"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center gap-4 px-[var(--container-padding)] py-8 sm:flex-row sm:justify-between">
          <p className="text-[11px] text-gray-400">
            &copy; {new Date().getFullYear()} North. All rights reserved.
          </p>
          <p className="text-[11px] italic text-gray-300">
            &ldquo;We started this company because someone we loved needed
            it.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
