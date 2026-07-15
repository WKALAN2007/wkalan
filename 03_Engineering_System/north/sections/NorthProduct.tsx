"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80",
    title: "Understand",
    desc: "AI that connects your memories — not as files, but as the stories they tell.",
    href: "/north/product",
  },
  {
    img: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=800&q=80",
    title: "Organize",
    desc: "Timelines that feel natural — the way your mind remembers, not the way a computer sorts.",
    href: "/north/about",
  },
];

export function NorthProduct() {
  return (
    <section className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.p
          className="mb-16 text-center font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-gray-800 sm:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          2025 Features
        </motion.p>

        <div className="grid gap-8 lg:grid-cols-2">
          {features.map((f, i) => {
            const Card = (
              <motion.div
                key={f.title}
                className="group relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-gray-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {f.desc}
                  </p>
                  {f.href && (
                    <span className="mt-3 inline-block text-[11px] font-medium tracking-[0.08em] text-[var(--color-accent)] transition-opacity group-hover:opacity-100">
                      READ MORE →
                    </span>
                  )}
                </div>
              </motion.div>
            );

            if (f.href) {
              return (
                <Link key={f.title} href={f.href} className="block no-underline">
                  {Card}
                </Link>
              );
            }
            return Card;
          })}
        </div>
      </div>
    </section>
  );
}
