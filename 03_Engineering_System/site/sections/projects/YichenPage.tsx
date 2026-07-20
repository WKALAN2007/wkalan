"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SampleNav } from "@/03_Engineering_System/site/layout/SampleNav";

const images = [
  { src: "/yichen-hero-v2.jpg", alt: "Portrait of Yichen" },
  { src: "/yichen-observer.jpg", alt: "Observer" },
  { src: "/yichen-landscape.jpg", alt: "Landscape series" },
  { src: "/yichen-story-1.jpg", alt: "Story — grandmother" },
  { src: "/yichen-story-2.jpg", alt: "Story — words" },
  { src: "/yichen-story-3.jpg", alt: "Story — memory" },
];

export function YichenPage() {
  return (
    <main className="pb-16">
      {/* Hero — full bleed portrait */}
      <section className="relative bg-[var(--wk-bg)]">
        <div className="relative aspect-[3/4] md:aspect-[16/7] w-full overflow-hidden">
          <Image
            src="/yichen-hero-v2.jpg"
            alt="Yichen Studio"
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
              摄影
</span>
            <h1 className="mt-2 font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-[var(--wk-text-primary)]">
              Yichen Studio
            </h1>
            <p className="mt-4 max-w-lg text-[var(--text-body)] leading-relaxed text-[var(--wk-text-secondary)]">
              一个摄影师的作品集——围绕他们作品所要求的宁静而构建。没有界面噪音。只有作品。
</p>
          </div>
        </div>
      </section>

      {/* Gallery — stacked full-width images */}
      <section className="bg-[var(--wk-bg)] py-[var(--space-section)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <div className="flex flex-col gap-16 md:gap-24">
            {images.slice(1).map((img, i) => (
              <motion.div
                key={img.src}
                className="relative aspect-[4/3] md:aspect-[16/7] w-full overflow-hidden bg-[var(--wk-surface)]"
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
                  sizes="(max-width: 1200px) 100vw, 1200px"
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
            喜欢吗？
</span>
          <h2 className="mt-4 font-[var(--font-display)] text-[var(--text-h2)] leading-[var(--leading-tight)] text-[var(--wk-text-primary)]">
            你的作品值得这样。
</h2>
          <p className="mx-auto mt-4 max-w-sm text-[var(--text-body)] text-[var(--wk-text-secondary)]">
            一个不与照片争抢的摄影网站。只是承载。
</p>
          <a
            href="mailto:hello@wkalan.com?subject=Photography Project"
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[var(--wk-text-primary)] px-8 py-4 text-[var(--text-body)] font-medium text-white transition-all hover:bg-[var(--wk-accent)]"
          >
            开始你的项目 →
</a>
        </div>
      </section>
      <SampleNav current="/yichen" />
    </main>
  );
}
