import { Camera, Music, ExternalLink } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "#" },
    { label: "Ready-to-Wear", href: "#" },
    { label: "Tailoring", href: "#" },
    { label: "Accessories", href: "#" },
  ],
  about: [
    { label: "Our Story", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Stockists", href: "#" },
    { label: "Contact", href: "#" },
  ],
  support: [
    { label: "Size Guide", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
    { label: "FAQ", href: "#" },
  ],
};

export function FashionFooter() {
  return (
    <footer className="bg-[#111111] text-white/60">
      <div className="mx-auto max-w-[1400px] px-8 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3
              className="font-heading text-xl tracking-[0.1em] text-white"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              NKSEN
            </h3>
            <p className="text-sm leading-relaxed">
              Clothes worn for living,
              <br />
              rather than being seen.
            </p>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              Shop
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              About
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Social */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
                Support
              </h4>
              <ul className="flex flex-col gap-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/40 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-white/40 transition-colors hover:text-white"
                aria-label="Spotify"
              >
                <Music className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Portfolio */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              Portfolio
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://wkalan2007.github.io/wkalanpersonalwebsite/#library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm transition-colors hover:text-white"
                >
                  WKALAN
                  <ExternalLink className="h-3 w-3 opacity-40 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://wkalan2007.github.io/ifyoulovebasketball/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm transition-colors hover:text-white"
                >
                  小白剪了個球
                  <ExternalLink className="h-3 w-3 opacity-40 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <span>&copy; 2026 NKSEN. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
