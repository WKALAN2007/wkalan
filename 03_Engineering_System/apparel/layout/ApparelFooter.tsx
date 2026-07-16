import Link from "next/link";

const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "/apparel/products?sort=newest" },
    { label: "Women", href: "/apparel/products?category=women" },
    { label: "Men", href: "/apparel/products?category=men" },
    { label: "Accessories", href: "/apparel/products?category=accessories" },
    { label: "Sale", href: "/apparel/products?filter=sale" },
  ],
  about: [
    { label: "Our Story", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Size Guide", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns & Exchanges", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "FAQ", href: "#" },
  ],
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A]/50">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ApparelFooter() {
  return (
    <footer className="border-t border-[#E8E7E3] bg-[#FAFAF8]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8">
        {/* Top: Columns + Newsletter */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <span
              className="font-heading text-xl tracking-[0.12em] text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              MÉTIER
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6B6B68]">
              Contemporary fashion for the considered life. Timeless pieces crafted with intention, designed to be lived in.
            </p>
          </div>

          <FooterColumn title="Shop" links={footerLinks.shop} />
          <FooterColumn title="About" links={footerLinks.about} />
          <FooterColumn title="Support" links={footerLinks.support} />
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#E8E7E3] pt-8 sm:flex-row">
          <p className="text-xs text-[#A0A09C]">
            © {new Date().getFullYear()} MÉTIER. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-[#A0A09C] transition-colors hover:text-[#1A1A1A]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-[#A0A09C] transition-colors hover:text-[#1A1A1A]">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-[#A0A09C] transition-colors hover:text-[#1A1A1A]">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
