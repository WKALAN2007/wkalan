"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SampleNav } from "@/03_Engineering_System/site/layout/SampleNav";

export function FounderPage() {
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-[var(--wk-bg)]">
        <div className="relative aspect-[3/4] md:aspect-[16/7] w-full overflow-hidden">
          <Image
            src="/hero-founder.jpg"
            alt="Founder"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--wk-bg)] via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="mx-auto max-w-[var(--container-max)]">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--wk-text-tertiary)]">
              数字产品
</span>
            <h1 className="mt-2 font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-[var(--wk-text-primary)]">
              Boreal
            </h1>
            <p className="mt-4 max-w-lg text-[var(--text-body)] leading-relaxed text-[var(--wk-text-secondary)]">
              一个创始人的数字存在——网站、融资文档、品牌识别——为被认真对待而设计。从一场对话开始构建。
</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[var(--wk-bg)] py-[var(--space-section)]">
        <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                label: "网站",
                body: "干净、快速、有目的性。不用模板——每个布局决定都追溯到创始人的原话。",
              },
              {
                label: "融资文档",
                body: "幻灯片与网站共享同一套视觉语言。投资人会注意到一致性。",
              },
              {
                label: "品牌识别",
                body: "字体、颜色、标志——是一个系统，不是贴了 logo 的模板。",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--wk-text-tertiary)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-[var(--text-h3)] font-medium text-[var(--wk-text-primary)]">
                  {item.label}
                </h3>
                <p className="mt-2 text-[var(--text-body)] leading-relaxed text-[var(--wk-text-secondary)]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="bg-[var(--wk-bg)] pb-[var(--space-section)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--wk-surface)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/hero-surf.jpg"
              alt="Boreal — founder presence"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--wk-border)] bg-[var(--wk-surface)] py-[var(--space-section)]">
        <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)] text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--wk-text-tertiary)]">
            从这里开始
</span>
          <h2 className="mt-4 font-[var(--font-display)] text-[var(--text-h2)] leading-[var(--leading-tight)] text-[var(--wk-text-primary)]">
            被认真对待。
</h2>
          <p className="mx-auto mt-4 max-w-sm text-[var(--text-body)] text-[var(--wk-text-secondary)]">
            从对话开始——不填表单。我们聊。我做。你上线。
</p>
          <a
            href="mailto:hello@wkalan.com?subject=Digital Product Project"
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[var(--wk-text-primary)] px-8 py-4 text-[var(--text-body)] font-medium text-white transition-all hover:bg-[var(--wk-accent)]"
          >
            开始你的项目 →
</a>
        </div>
      </section>
      <SampleNav current="/founder" />
    </main>
  );
}
