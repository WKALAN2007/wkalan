"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const contacts = [
  {
    label: "Bilibili",
    value: "@小白剪了個球",
    href: "https://space.bilibili.com/108062400",
    note: "30万+ 粉丝",
  },
  {
    label: "WeChat",
    value: "baiyunfan7",
    href: "#",
    note: "注明来意",
  },
  {
    label: "QQ 群",
    value: "1023342855",
    href: "#",
    note: "免费看 NBA",
  },
];

export function BasketballConnect() {
  return (
    <section id="connect" className="bg-[#111111] py-24 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 flex flex-col items-center gap-3 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a84c]"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            The Connect
          </motion.span>
          <motion.div
            className="h-[1px] w-12 bg-[#c9a84c]/40"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-2 border border-[#1a1a1a] bg-[#0d0d0d] p-6 text-center transition-all duration-500 hover:border-[#c9a84c]/30"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#888888]">
                {c.label}
              </span>
              <span className="flex items-center gap-1 text-sm font-bold text-white transition-colors group-hover:text-[#c9a84c]">
                {c.value}
                {c.href.startsWith("http") && (
                  <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </span>
              <span className="text-xs text-[#666666]">{c.note}</span>
            </motion.a>
          ))}
        </div>

        {/* Main Bilibili CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://space.bilibili.com/108062400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#c9a84c] px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-[#c9a84c] transition-all hover:bg-[#c9a84c] hover:text-[#0a0a0a]"
          >
            在 B 站 观 看 &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
