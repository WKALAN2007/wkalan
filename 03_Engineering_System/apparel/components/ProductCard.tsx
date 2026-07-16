"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Plus } from "lucide-react";
import type { Product } from "@/data/apparel/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
  priority?: boolean;
}

export function ProductCard({ product, index = 0, priority = false }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const { addItem, openDrawer } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      product,
      size: product.sizes[0],
      color: product.colors[0].name,
      quantity: 1,
    });
    openDrawer();
  };

  return (
    <motion.div
      className="group relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.06 * index,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link
        href={`/apparel/products/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-[#F3F2EF]"
      >
        <motion.img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          loading={priority ? "eager" : "lazy"}
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

        {/* Quick Add */}
        <motion.button
          onClick={handleQuickAdd}
          className="absolute inset-x-3 bottom-3 flex h-10 items-center justify-center gap-2 bg-white text-xs font-medium uppercase tracking-[0.1em] text-[#1A1A1A] shadow-lg transition-colors hover:bg-[#1A1A1A] hover:text-white"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
          transition={{ duration: 0.25 }}
        >
          <Plus className="h-3.5 w-3.5" />
          Quick Add
        </motion.button>
      </Link>

      {/* Info */}
      <div className="mt-3">
        <Link href={`/apparel/products/${product.slug}`}>
          <h3 className="text-sm font-medium text-[#1A1A1A] transition-opacity hover:opacity-60">
            {product.name}
          </h3>
        </Link>
        <p className="mt-0.5 text-xs text-[#A0A09C]">{product.subcategory}</p>
        <div className="mt-1.5 flex items-center gap-2">
          {product.compareAtPrice ? (
            <>
              <span className="text-sm font-medium text-[#D43D3D]">
                ¥{product.price.toLocaleString()}
              </span>
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
