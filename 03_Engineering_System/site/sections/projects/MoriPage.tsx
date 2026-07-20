"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SampleNav } from "@/03_Engineering_System/site/layout/SampleNav";

const images = [
  { src: "/mori-banner.jpg", alt: "Mori banner" },
  { src: "/mori-1.jpg", alt: "Mori work 1" },
  { src: "/mori-2.jpg", alt: "Mori work 2" },
  { src: "/mori-3.jpg", alt: "Mori work 3" },
  { src: "/mori-4.jpg", alt: "Mori work 4" },
];

export function MoriPage() {
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-[var(--wk-bg)]">
        <div className="relative aspect-[3/4] md:aspect-[16/7] w-full overflow-hidden">
          <Image
            src="/mori-banner.jpg"
            alt="Mori"
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
              品牌与数字
</span>
            <h1 className="mt-2 font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-[var(--wk-text-primary)]">
              Mori
            </h1>
            <p className="mt-4 max-w-lg text-[var(--text-body)] leading-relaxed text-[var(--wk-text-secondary)]">
              从一根线构建的品牌与数字存在——摄影、身份、网站。一致的，而非零散的。
</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[var(--wk-bg)] py-[var(--space-section)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {images.slice(1).map((img, i) => (
              <motion.div
                key={img.src}
                className={`relative w-full overflow-hidden bg-[var(--wk-surface)] ${
                  i === 0 ? "md:col-span-2 aspect-[16/7]" : "aspect-[4/5]"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--wk-border)] bg-[var(--wk-surface)] py-[var(--space-section)]">
        <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)] text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--wk-text-tertiary)]">
            从这里开始
</span>
          <h2 className="mt-4 font-[var(--font-display)] text-[var(--text-h2)] leading-[var(--leading-tight)] text-[var(--wk-text-primary)]">
            每个表面都保持一致。
</h2>
          <p className="mx-auto mt-4 max-w-sm text-[var(--text-body)] text-[var(--wk-text-secondary)]">
            品牌识别、摄影、网站——说着同一种语言。
</p>
          <a
            href="mailto:hello@wkalan.com?subject=Brand & Digital Project"
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[var(--wk-text-primary)] px-8 py-4 text-[var(--text-body)] font-medium text-white transition-all hover:bg-[var(--wk-accent)]"
          >
            开始你的项目 →
</a>
        </div>
      </section>
      <SampleNav current="/mori" />
    </main>
  );
}
