"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Product } from "@/03_Engineering_System/commerce/data/products";
import { useCart } from "./CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [addedToCart, setAddedToCart] = useState(false);
  const { dispatch } = useCart();

  const slug = product.name.toLowerCase().replace(/\s+/g, "-");

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        color: product.colors[0],
        image: product.image,
        quantity: 1,
      },
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <Link href={`/commerce/product/${slug}`} className="block">
        {/* Image Container */}
        <div
          className="relative mb-4 aspect-[3/4] overflow-hidden rounded-xl bg-[var(--wk-surface)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Primary Image */}
          <motion.img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
            animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Hover Image */}
          <motion.img
            src={product.imageHover}
            alt={`${product.name} alternate`}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 1.02 }}
            transition={{ duration: 0.5 }}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-[#3d7a3d] px-3 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-white shadow-lg shadow-[#3d7a3d]/30 transition-all group-hover:scale-105 group-hover:shadow-xl">
              {product.badge}
            </span>
          )}

          {/* Quick view overlay on hover */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/5 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-[10px] font-semibold tracking-[0.08em] text-[var(--wk-text-primary)] shadow-lg transition-all hover:bg-white hover:scale-105 hover:shadow-xl"
            >
              <Eye size={13} /> QUICK VIEW
            </motion.span>
          </motion.div>

          {/* Hover Overlay Actions */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/30 via-transparent to-transparent p-4 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Quick size select */}
            <motion.div
              className="mb-3 flex gap-1.5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.3, delay: 0.08 }}
            >
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedSize(size);
                  }}
                  className={`rounded-full px-3 py-1 text-[10px] tracking-[0.08em] backdrop-blur-md transition-all active:scale-90 ${
                    selectedSize === size
                      ? "bg-white text-black shadow-lg scale-105"
                      : "bg-white/20 text-white hover:bg-white/50 hover:scale-105"
                  }`}
                >
                  ({size})
                </button>
              ))}
            </motion.div>

            {/* Add to cart button */}
            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.92 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.3, delay: 0.12 }}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-semibold tracking-[0.1em] backdrop-blur-md transition-all active:scale-95 ${
                addedToCart
                  ? "bg-[#2D8A56] text-white shadow-lg shadow-[#2D8A56]/30"
                  : "bg-white text-black hover:bg-white/95 hover:shadow-xl hover:scale-105"
              }`}
            >
              {addedToCart ? (
                "[ ADDED ]"
              ) : (
                <><ShoppingBag size={12} /> [ ADD TO BAG ]</>
              )}
            </motion.button>
          </motion.div>

          {/* Like button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="group/like absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm transition-all hover:bg-white hover:scale-110 hover:shadow-md active:scale-90"
          >
            <Heart
              size={14}
              className={`transition-all group-hover/like:scale-110 ${
                isLiked ? "fill-red-500 text-red-500" : "text-gray-700 group-hover/like:text-red-400"
              }`}
            />
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-1 px-0.5">
          <div className="flex items-start justify-between">
            <h3 className="text-sm font-medium text-[var(--wk-text-primary)] transition-colors group-hover:text-[#3d7a3d]">
              {product.name}
            </h3>
            <span className="text-sm font-semibold text-[#2d5a2d] transition-all group-hover:scale-105">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <p className="text-xs text-[var(--wk-text-tertiary)] transition-colors group-hover:text-[var(--wk-text-secondary)]">
            {product.category}
          </p>
          <div className="flex gap-1.5 pt-1">
            {product.colors.map((color) => (
              <span
                key={color}
                className="text-[10px] tracking-[0.06em] text-[var(--wk-text-tertiary)] transition-colors group-hover:text-[var(--wk-text-secondary)]"
              >
                {color}
                {product.colors.indexOf(color) < product.colors.length - 1 && " ·"}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
