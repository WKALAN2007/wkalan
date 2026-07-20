"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Single Page",
    price: "HK$8,000",
    timeline: "5–7 天",
    desc: "单页网站。定制设计 + 开发。响应式。适合需要一个干净、围绕你的网上空间的人。",
    href: "mailto:hello@wkalan.com?subject=Single%20Page",
  },
  {
    name: "Full Site",
    price: "HK$25,000",
    timeline: "10–14 天",
    desc: "多页品牌站。定制设计系统。内容架构。SEO优化。适合需要完整网上根据地的人。",
    href: "mailto:hello@wkalan.com?subject=Full%20Site",
  },
];

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
          <div className="flex flex-col items-center gap-4 text-center">
            <motion.span
              className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              定价
            </motion.span>
            <motion.h2
              className="mt-4 font-heading text-[var(--text-h2)] leading-[1.15] tracking-[-0.02em] text-white"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              简单。透明。
            </motion.h2>
            <motion.p
              className="mt-2 max-w-md text-sm leading-relaxed text-white/40"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              从一次对话开始。一小时。聊聊你。
            </motion.p>
          </div>

          <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
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
                  预约对话 <span>&rarr;</span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
