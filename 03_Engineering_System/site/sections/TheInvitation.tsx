"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Identity Lite",
    price: "HK$16,000",
    timeline: "Single-page identity",
    desc: "单页数字身份。深度对话 + 定制设计 + 开发。适合想要一个专属数字空间的创作者。",
    href: "mailto:hello@wkalan.com?subject=Identity%20Lite",
  },
  {
    name: "Identity Full",
    price: "HK$39,000",
    timeline: "Multi-page identity",
    desc: "多页数字身份。完整品味过程。定制设计系统。内容架构。适合需要完整数字存在的创作者与创始人。",
    href: "mailto:hello@wkalan.com?subject=Identity%20Full",
  },
  {
    name: "Identity System",
    price: "HK$95,000",
    timeline: "Full identity + brand",
    desc: "完整数字身份 + 品牌系统。品牌策略、视觉语言、内容策略、动态设计。适合将数字身份作为核心的创作者。",
    href: "mailto:hello@wkalan.com?subject=Identity%20System",
  },
];

/**
 * Pricing section — 3 tiers aligned with brand positioning.
 * Digital Identity, not "websites." Investment, not commodity.
 */
export function TheInvitation() {
  return (
    <section className="bg-[#0F0F0D] py-[var(--space-section-lg)]" id="pricing">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col items-center gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <motion.span
              className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              Pricing
            </motion.span>
            <motion.div
              className="h-[1px] w-12 bg-[#C9A84C]/40"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } },
              }}
              style={{ transformOrigin: "center" }}
            />
            <motion.h2
              className="mt-4 font-heading text-[var(--text-h2)] leading-[1.15] tracking-[-0.02em] text-white"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              选择你的数字身份
            </motion.h2>
            <motion.p
              className="mt-2 max-w-md text-sm leading-relaxed text-white/40"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              每个项目都从一次深度对话开始。不是问卷，不是brief——是聊天。先品味你的人生，再给你一个价格。
            </motion.p>
          </div>

          {/* Tier Cards */}
          <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.a
                key={tier.name}
                href={tier.href}
                className="group flex flex-col items-center gap-4 border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-500 hover:border-[#C9A84C]/30 hover:bg-white/[0.06]"
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.5 + 0.1 * i, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  {tier.name}
                </span>
                <span className="font-heading text-3xl text-[#C9A84C]">{tier.price}</span>
                <span className="text-xs tracking-[0.15em] text-white/30">{tier.timeline}</span>
                <p className="text-sm leading-relaxed text-white/50">{tier.desc}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.15em] text-[#C9A84C] transition-all group-hover:gap-2">
                  开始对话 <span>&rarr;</span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
