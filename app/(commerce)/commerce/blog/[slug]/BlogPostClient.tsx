"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { blogPosts } from "@/03_Engineering_System/commerce/data/products";

export function BlogPostClient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const index = parseInt(slug.replace("post-", "")) - 1;
  const post = blogPosts[index];

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--wk-bg)]">
        <div className="text-center">
          <h1 className="font-heading text-4xl">Post Not Found</h1>
          <Link href="/commerce" className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] text-[#3d7a3d] transition-all hover:text-[#2d5a2d] hover:gap-3">
            <ArrowLeft size={14} /> [ BACK TO JOURNAL ]
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = blogPosts.filter((_, i) => i !== index).slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--wk-bg)]">
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)] pt-28 pb-6">
        <Link href="/commerce#blog" className="group inline-flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--wk-text-tertiary)] transition-all hover:text-[#3d7a3d] hover:gap-3">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          [ BACK TO JOURNAL ]
        </Link>
      </div>

      <article className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)] pb-24">
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 overflow-hidden rounded-2xl aspect-[16/9]"
        >
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[10px] tracking-[0.15em] text-[#4a8c4a] uppercase">
            {post.tag}
          </span>
          <h1 className="mt-3 font-heading text-3xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-4xl lg:text-5xl leading-[1.15]">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-6 text-xs text-[var(--wk-text-tertiary)]">
            <span className="flex items-center gap-1.5"><User size={12} /> Verdant Editorial</span>
            <span className="flex items-center gap-1.5"><Clock size={12} /> 5 min read</span>
          </div>

          <div className="mt-8 h-px bg-[var(--wk-border)]" />

          {/* Article body */}
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--wk-text-secondary)]">
            <p>
              {post.excerpt} At Verdant, we believe that every small choice adds up.
              Whether it&apos;s switching to a plastic-free cleaning routine or choosing
              products that give back to the earth, the journey toward greener living
              starts with a single step — and we&apos;re here to walk it with you.
            </p>
            <p>
              Our commitment to sustainability goes far beyond our products. We&apos;ve
              built partnerships with regenerative farms across 14 countries, invested
              in carbon-offset programs that exceed our emissions by 10%, and designed
              every piece of packaging to either biodegrade or be endlessly refillable.
            </p>
            <p>
              The result is a product line that doesn&apos;t just avoid harm — it actively
              restores. From the lavender fields of Provence to the bamboo forests of
              Zhejiang, every ingredient in our supply chain is chosen not just for its
              efficacy, but for its impact on the soil, the water, and the communities
              that steward them.
            </p>
            <blockquote className="border-l-2 border-[#3d7a3d] pl-6 font-heading text-lg text-[var(--wk-text-primary)] italic">
              &ldquo;Nature is not a place to visit. It is home — and everything we make
              should honor that.&rdquo;
            </blockquote>
            <p>
              As we look ahead to the rest of 2026, we&apos;re more excited than ever. New
              product categories are in development, our refill station network is expanding
              to 50 cities, and we&apos;re on track to become a certified B-Corp by year&apos;s end.
            </p>
          </div>
        </motion.div>

        {/* Related Posts */}
        <div className="mt-20">
          <h2 className="font-heading text-xl tracking-[-0.02em] text-[var(--wk-text-primary)] mb-6">
            More from the Journal
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedPosts.map((rp, i) => (
              <Link
                key={i}
                href={`/commerce/blog/post-${blogPosts.indexOf(rp) + 1}`}
                className="group overflow-hidden rounded-xl bg-white shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={rp.image} alt={rp.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <span className="font-mono text-[9px] tracking-[0.1em] text-[#4a8c4a] uppercase">{rp.tag}</span>
                  <h3 className="mt-1 font-heading text-sm leading-snug text-[var(--wk-text-primary)] group-hover:text-[#3d7a3d] transition-colors">{rp.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
