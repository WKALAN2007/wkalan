"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { products } from "@/data/apparel/products";
import { useCart } from "@/context/CartContext";

const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 8);

export function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addItem, openDrawer } = useCart();

  return (
    <section className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          className="mb-16 flex items-end justify-between sm:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <motion.span
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#B8B0A0]"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.7 } },
              }}
            >
              This Season
            </motion.span>
            <motion.p
              className="mt-6 font-heading text-3xl leading-[1.2] text-[#1E1E1C] sm:text-4xl"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
              }}
            >
              Featured Pieces
            </motion.p>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } },
            }}
          >
            <Link
              href="/apparel/products"
              className="group hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A] transition-opacity hover:opacity-60 sm:flex"
            >
              View All
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {featuredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onQuickAdd={() => {
                addItem({ product, size: product.sizes[0], color: product.colors[0].name, quantity: 1 });
                openDrawer();
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
  onQuickAdd,
}: {
  product: (typeof featuredProducts)[0];
  index: number;
  onQuickAdd: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group relative flex-shrink-0 cursor-pointer"
      style={{ width: "clamp(260px, 28vw, 340px)", scrollSnapAlign: "start" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.08 * index,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <Link href={`/apparel/products/${product.slug}`} className="relative block aspect-[3/4] overflow-hidden bg-[#F3F2EF]">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-[#1A1A1A] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
              New
            </span>
          )}
          {product.isSale && (
            <span className="bg-[#D43D3D] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
              Sale
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <motion.button
          onClick={(e) => { e.preventDefault(); onQuickAdd(); }}
          className="absolute inset-x-3 bottom-3 flex h-10 items-center justify-center gap-2 bg-white text-xs font-medium uppercase tracking-[0.1em] text-[#1A1A1A] shadow-lg transition-colors hover:bg-[#1A1A1A] hover:text-white"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <Plus className="h-3.5 w-3.5" />
          Quick Add
        </motion.button>
      </Link>

      {/* Info */}
      <div className="mt-3 px-1">
        <Link href={`/apparel/products/${product.slug}`}>
          <h3 className="text-sm font-medium text-[#1A1A1A] transition-opacity hover:opacity-60">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center gap-2">
          {product.compareAtPrice ? (
            <>
              <span className="text-sm text-[#D43D3D]">¥{product.price.toLocaleString()}</span>
              <span className="text-xs text-[#A0A09C] line-through">
                ¥{product.compareAtPrice.toLocaleString()}
              </span>
            </>
          ) : (
            <span className="text-sm text-[#6B6B68]">¥{product.price.toLocaleString()}</span>
          )}
        </div>
        {/* Color dots */}
        <div className="mt-2 flex gap-1.5">
          {product.colors.map((c) => (
            <span
              key={c.hex}
              className="block h-3 w-3 rounded-full border border-[#D4D3CE]"
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
