"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const linkClass = "text-sm text-white/40 transition-all duration-300 hover:text-white/80 hover:translate-x-1 inline-block";

export function CommerceFooter() {
  return (
    <footer className="bg-[#1a3a1a] py-24">
      <motion.div
        className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
      >
        <div className="grid gap-16 md:grid-cols-4">
          {/* Brand */}
          <motion.div className="flex flex-col gap-4 md:col-span-1" variants={item}>
            <Link href="/commerce" className="group font-heading text-2xl tracking-[-0.02em] text-white transition-all hover:opacity-70 flex items-center gap-2">
              <span className="inline-block w-5 h-5 rounded-[50%_0_50%_50%] bg-[#4a8c4a] -rotate-[30deg] transition-all duration-500 group-hover:rotate-0 group-hover:scale-110" />
              VERDANT
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              Pure, plant-based essentials for conscious living.
              <br />
              Every product a promise to you and the planet.
            </p>
            <div className="mt-4 flex gap-4">
              {[
                { label: "IG", href: "#" },
                { label: "TW", href: "#" },
                { label: "PT", href: "#" },
                { label: "YT", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group/social text-xs tracking-[0.2em] text-white/25 transition-all duration-300 hover:text-[#7ab87a] hover:scale-110 inline-block"
                >
                  [{s.label}]
                </a>
              ))}
            </div>
          </motion.div>

          {/* Shop */}
          <motion.div className="flex flex-col gap-3" variants={item}>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#7ab87a]/60">
              Shop
            </span>
            {[
              { label: "All Products", href: "/commerce#new-arrivals" },
              { label: "Skincare", href: "/commerce/category/skincare" },
              { label: "Home Care", href: "/commerce/category/home-care" },
              { label: "Wellness", href: "/commerce/category/wellness" },
              { label: "Kitchen", href: "/commerce/category/kitchen" },
              { label: "Subscribe", href: "/commerce/subscribe" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </motion.div>

          {/* Support */}
          <motion.div className="flex flex-col gap-3" variants={item}>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#7ab87a]/60">
              Support
            </span>
            {[
              { label: "Contact Us", href: "/commerce/contact" },
              { label: "About", href: "/commerce/about" },
              { label: "FAQ", href: "/commerce/contact" },
              { label: "Shipping & Returns", href: "/commerce/contact" },
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div className="flex flex-col gap-3" variants={item}>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#7ab87a]/60">
              Contact
            </span>
            <a
              href="mailto:hello@verdant.co"
              className="text-sm text-white/40 transition-all duration-300 hover:text-white/80 hover:translate-x-1 inline-block"
            >
              hello@verdant.co
            </a>
            <a href="#" className="text-sm text-white/40 transition-all duration-300 hover:text-white/80 hover:translate-x-1 inline-block">
              1-800-VERDANT
            </a>
            <p className="text-sm text-white/25">
              Portland, Oregon
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-20 border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          variants={item}
        >
          <p className="text-xs text-white/15">
            &copy; {new Date().getFullYear()} VERDANT. All rights reserved. Demo site — Built by WKALAN.
          </p>
          <Link href="/commerce" className="text-xs text-white/15 transition-colors hover:text-white/40">
            Back to top ↑
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
}
