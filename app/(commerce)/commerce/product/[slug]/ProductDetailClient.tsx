"use client";

import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag, Check, Truck, Shield, Leaf } from "lucide-react";
import { products } from "@/03_Engineering_System/commerce/data/products";
import { useCart } from "@/03_Engineering_System/commerce/components/CartContext";

export function ProductDetailClient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] ?? "");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { dispatch } = useCart();

  if (!product) return <NotFound />;

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        color: selectedColor,
        image: product.image,
        quantity,
      },
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen bg-[var(--wk-bg)]">
      {/* Back nav */}
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] pt-28 pb-6">
        <Link href="/commerce" className="group inline-flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--wk-text-tertiary)] transition-all hover:text-[#3d7a3d] hover:gap-3">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          [ BACK TO SHOP ]
        </Link>
      </div>

      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] pb-24">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--wk-surface)] group"
          >
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-[#3d7a3d] px-4 py-1.5 text-[10px] font-semibold tracking-[0.1em] text-white">
                {product.badge}
              </span>
            )}
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="group/like absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all hover:bg-white hover:scale-110 hover:shadow-lg active:scale-95"
            >
              <Heart
                size={18}
                className={`transition-all ${isLiked ? "fill-red-500 text-red-500 scale-110" : "text-gray-700 group-hover/like:text-red-400"}`}
              />
            </button>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <span className="font-mono text-[10px] tracking-[0.15em] text-[#4a8c4a]">
              {product.category}
            </span>
            <h1 className="mt-2 font-heading text-3xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 font-heading text-2xl text-[#2d5a2d]">
              ${product.price.toFixed(2)}
            </p>

            <div className="mt-6 h-px bg-[var(--wk-border)]" />

            {/* Color */}
            <div className="mt-6">
              <span className="text-[10px] tracking-[0.12em] text-[var(--wk-text-tertiary)]">COLOR</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full px-4 py-2 text-xs tracking-[0.04em] transition-all active:scale-95 ${
                      selectedColor === color
                        ? "bg-[#3d7a3d] text-white shadow-md shadow-[#3d7a3d]/30"
                        : "border border-[var(--wk-border)] text-[var(--wk-text-secondary)] hover:border-[#3d7a3d] hover:text-[#3d7a3d] hover:shadow-sm"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-6">
              <span className="text-[10px] tracking-[0.12em] text-[var(--wk-text-tertiary)]">SIZE</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-lg px-5 py-2.5 text-xs tracking-[0.04em] transition-all active:scale-95 ${
                      selectedSize === size
                        ? "bg-[var(--wk-text-primary)] text-white shadow-md"
                        : "border border-[var(--wk-border)] text-[var(--wk-text-secondary)] hover:border-[var(--wk-text-primary)] hover:shadow-sm"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex gap-3">
              <div className="flex items-center rounded-full border border-[var(--wk-border)] overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-12 w-12 items-center justify-center text-[var(--wk-text-secondary)] transition-all hover:bg-[var(--wk-surface)] hover:text-[var(--wk-text-primary)] active:scale-90"
                >
                  <Minus size={14} />
                </button>
                <span className="flex h-12 w-10 items-center justify-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-12 w-12 items-center justify-center text-[var(--wk-text-secondary)] transition-all hover:bg-[var(--wk-surface)] hover:text-[var(--wk-text-primary)] active:scale-90"
                >
                  <Plus size={14} />
                </button>
              </div>
              <motion.button
                onClick={handleAddToCart}
                whileTap={{ scale: 0.96 }}
                className={`flex flex-1 items-center justify-center gap-3 rounded-full text-xs font-semibold tracking-[0.08em] transition-all active:scale-[0.97] ${
                  addedToCart
                    ? "bg-[#2D8A56] text-white shadow-lg shadow-[#2D8A56]/30"
                    : "bg-[var(--wk-text-primary)] text-white hover:bg-[#1a3a1a] hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check size={16} /> [ ADDED TO BAG ]
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} /> [ ADD TO BAG — ${(product.price * quantity).toFixed(2)} ]
                  </>
                )}
              </motion.button>
            </div>

            {/* Perks */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Truck, label: "Free Shipping $50+" },
                { icon: Shield, label: "Quality Guarantee" },
                { icon: Leaf, label: "100% Natural" },
              ].map((perk) => (
                <div key={perk.label} className="flex flex-col items-center gap-1.5 rounded-xl bg-[var(--wk-surface)] py-3 px-2 text-center transition-all hover:bg-[#f2faf2] hover:scale-105 cursor-default">
                  <perk.icon size={16} className="text-[#3d7a3d]" />
                  <span className="text-[10px] leading-tight text-[var(--wk-text-tertiary)]">{perk.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="font-heading text-2xl tracking-[-0.02em] text-[var(--wk-text-primary)] mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {relatedProducts.map((rp, i) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={`/commerce/product/${rp.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[var(--wk-surface)] mb-3">
                      <img src={rp.image} alt={rp.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {rp.badge && (
                        <span className="absolute left-2 top-2 rounded-full bg-[#3d7a3d] px-2.5 py-1 text-[9px] font-semibold tracking-[0.06em] text-white">{rp.badge}</span>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    <h3 className="text-sm font-medium text-[var(--wk-text-primary)] group-hover:text-[#3d7a3d] transition-colors">{rp.name}</h3>
                    <p className="text-sm text-[#2d5a2d] font-semibold mt-1">${rp.price.toFixed(2)}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--wk-bg)]">
      <div className="text-center">
        <h1 className="font-heading text-4xl text-[var(--wk-text-primary)]">Product Not Found</h1>
        <Link href="/commerce" className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] text-[#3d7a3d] transition-all hover:text-[#2d5a2d] hover:gap-3">
          <ArrowLeft size={14} /> [ BACK TO SHOP ]
        </Link>
      </div>
    </main>
  );
}
