"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Sample",
    price: "HK$500",
    timeline: "5 days",
    desc: "你的第一个数字身份。",
    href: "mailto:hello@wkalan.com",
  },
  {
    name: "Advance",
    price: "HK$1,000",
    timeline: "10 days",
    desc: "深度与故事。不只是存在——是被了解。",
    href: "mailto:hello@wkalan.com",
  },
  {
    name: "Pro",
    price: "HK$2,000",
    timeline: "14 days",
    desc: "你的数字遗产。一个能超越你的空间。",
    href: "mailto:hello@wkalan.com",
  },
];

export function TheInvitation() {
  return (
    <section className="bg-[#0F0F0D] py-[var(--space-section-lg)]">
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
              The Invitation
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
              你值得一个
              <br />
              地方安放。
            </motion.h2>
            <motion.p
              className="mt-2 max-w-md text-sm leading-relaxed text-white/40"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              不是模板。不是一个 link-in-bio。是一个围绕真实的你而设计的数字身份。
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
                  了解 <span>&rarr;</span>
                </span>
              </motion.a>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.9 } },
            }}
          >
            <p className="text-sm text-white/30">
              不确定哪个适合你？预约一次免费的 30 分钟对话。
            </p>
            <a
              href="mailto:hello@wkalan.com"
              className="inline-flex items-center gap-2 border border-[#C9A84C]/40 px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#C9A84C] transition-all hover:border-[#C9A84C] hover:bg-[#C9A84C]/10"
            >
              开始对话 &rarr;
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
