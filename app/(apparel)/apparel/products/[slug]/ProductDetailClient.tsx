"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Truck, RotateCcw, Shield } from "lucide-react";
import type { Product } from "@/data/apparel/products";
import { ProductGallery } from "@/03_Engineering_System/apparel/components/ProductGallery";
import { SizeSelector } from "@/03_Engineering_System/apparel/components/SizeSelector";
import { AddToCartButton } from "@/03_Engineering_System/apparel/components/AddToCartButton";
import { ProductCard } from "@/03_Engineering_System/apparel/components/ProductCard";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: Props) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [expandedDetails, setExpandedDetails] = useState(false);

  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) return;
    const color = selectedColor || product.colors[0].name;
    addItem({ product, size: selectedSize, color, quantity: 1 });
  };

  const visibleDetails = expandedDetails
    ? product.details
    : product.details.slice(0, 3);

  return (
    <div>
      {/* Product Layout: Gallery (left) + Info (right) */}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <ProductGallery images={product.images} productName={product.name} />

        {/* Product Info */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Brand + Category */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8B0A0]">
                {product.brand}
              </span>
              {product.isNew && (
                <span className="bg-[#1A1A1A] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white">
                  New
                </span>
              )}
              {product.isSale && (
                <span className="bg-[#D43D3D] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white">
                  Sale
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              className="mt-3 font-heading text-3xl leading-[1.15] text-[#1E1E1C] sm:text-4xl"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-4 flex items-center gap-3">
              {product.compareAtPrice ? (
                <>
                  <span className="font-heading text-2xl text-[#D43D3D]" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                    ¥{product.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-[#A0A09C] line-through">
                    ¥{product.compareAtPrice.toLocaleString()}
                  </span>
                </>
              ) : (
                <span className="font-heading text-2xl text-[#1A1A1A]" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                  ¥{product.price.toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-[#6B6B68]">
              {product.description}
            </p>

            {/* Color Selector */}
            <div className="mt-8 space-y-3">
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A]">
                Color — {selectedColor}
              </span>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setSelectedColor(c.name)}
                    className={`relative flex h-10 items-center gap-2 border px-4 text-xs transition-all ${
                      selectedColor === c.name
                        ? "border-[#1A1A1A]"
                        : "border-[#D4D3CE] hover:border-[#1A1A1A]"
                    }`}
                  >
                    <span
                      className="block h-4 w-4 rounded-full border border-[#D4D3CE]"
                      style={{ backgroundColor: c.hex }}
                    />
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-8">
              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelect={setSelectedSize}
              />
            </div>

            {/* Add to Cart */}
            <div className="mt-6">
              <AddToCartButton
                onClick={handleAddToCart}
                disabled={!selectedSize}
              />
            </div>

            {/* Shipping info */}
            <div className="mt-8 space-y-3 border-t border-[#E8E7E3] pt-6">
              <div className="flex items-center gap-3 text-xs text-[#6B6B68]">
                <Truck className="h-3.5 w-3.5" />
                Free shipping on orders over ¥20,000
              </div>
              <div className="flex items-center gap-3 text-xs text-[#6B6B68]">
                <RotateCcw className="h-3.5 w-3.5" />
                30-day returns & exchanges
              </div>
              <div className="flex items-center gap-3 text-xs text-[#6B6B68]">
                <Shield className="h-3.5 w-3.5" />
                1-year quality guarantee
              </div>
            </div>

            {/* Details Accordion */}
            <div className="mt-8 border-t border-[#E8E7E3] pt-6">
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A]">
                Details
              </h3>
              <ul className="mt-3 space-y-2">
                {visibleDetails.map((detail, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#6B6B68]"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-[#D4D3CE]" />
                    {detail}
                  </motion.li>
                ))}
              </ul>
              {product.details.length > 3 && (
                <button
                  onClick={() => setExpandedDetails(!expandedDetails)}
                  className="mt-3 flex items-center gap-1 text-xs font-medium uppercase tracking-[0.1em] text-[#1A1A1A] transition-opacity hover:opacity-60"
                >
                  {expandedDetails ? "Show Less" : `+ ${product.details.length - 3} More`}
                  <ChevronRight
                    className={`h-3 w-3 transition-transform ${expandedDetails ? "rotate-90" : ""}`}
                  />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-24 border-t border-[#E8E7E3] pt-20">
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#B8B0A0]"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.7 } },
              }}
            >
              You May Also Like
            </motion.span>
            <motion.h2
              className="mt-4 font-heading text-3xl text-[#1E1E1C]"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
              }}
            >
              Related Products
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
