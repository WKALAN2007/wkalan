"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/03_Engineering_System/commerce/data/products";

export function BlogPreview() {
  return (
    <section id="blog" className="bg-[#fafaf7] py-24 md:py-32">
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)]">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]"
          >
            10.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-heading text-4xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-5xl lg:text-6xl"
          >
            The Verdant Journal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 max-w-md text-sm text-[var(--wk-text-secondary)]"
          >
            Stories, guides, and inspiration for a greener lifestyle.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, i) => (
            <Link
              key={post.title}
              href={`/commerce/blog/post-${i + 1}`}
              className="group block overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-sm)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)] active:scale-[0.98]"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="font-mono text-[10px] tracking-[0.1em] text-[#4a8c4a] uppercase transition-colors group-hover:text-[#2d5a2d]">
                  {post.tag}
                </span>
                <h3 className="mt-2 font-heading text-base leading-snug text-[var(--wk-text-primary)] transition-colors group-hover:text-[#3d7a3d]">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--wk-text-tertiary)] transition-colors group-hover:text-[var(--wk-text-secondary)]">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold tracking-[0.08em] text-[#3d7a3d] opacity-0 translate-x-[-4px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  [ READ MORE ] →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
