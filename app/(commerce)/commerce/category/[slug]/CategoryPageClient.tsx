"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { categories, products } from "@/03_Engineering_System/commerce/data/products";
import { ProductCard } from "@/03_Engineering_System/commerce/components/ProductCard";

export function CategoryPageClient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const category = categories.find((c) => c.name.toLowerCase().replace(/\s+/g, "-") === slug);

  if (!category) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--wk-bg)]">
        <div className="text-center">
          <h1 className="font-heading text-4xl">Category Not Found</h1>
          <Link href="/commerce" className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] text-[#3d7a3d] hover:text-[#2d5a2d] transition-colors">
            <ArrowLeft size={14} /> [ BACK TO SHOP ]
          </Link>
        </div>
      </main>
    );
  }

  const categoryProducts = products.filter((p) => {
    const catMap: Record<string, string> = {
      skincare: "Skincare",
      "home-care": "Home Care",
      wellness: "Wellness",
      kitchen: "Kitchen",
      "bath-body": "Bath & Body",
      "on-the-go": "On the Go",
    };
    return p.category === catMap[slug];
  });

  return (
    <main className="min-h-screen bg-[var(--wk-bg)]">
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] pt-28 pb-6">
        <Link href="/commerce#categories" className="group inline-flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--wk-text-tertiary)] transition-all hover:text-[#3d7a3d] hover:gap-3">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          [ BACK TO CATEGORIES ]
        </Link>
      </div>

      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]">
            CATEGORY
          </span>
          <h1 className="mt-3 font-heading text-4xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-5xl lg:text-6xl">
            {category.name}
          </h1>
          <p className="mt-3 text-sm text-[var(--wk-text-secondary)]">{category.description}</p>
        </motion.div>

        {/* Products */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {categoryProducts.map((product, i) => (
              <Link
                key={product.id}
                href={`/commerce/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="block"
              >
                <ProductCard product={product} index={i} />
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-[var(--wk-text-tertiary)] py-20">
            No products in this category yet. Check back soon.
          </p>
        )}
      </div>
    </main>
  );
}
