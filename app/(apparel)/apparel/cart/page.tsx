"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Trash2, Minus, Plus, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Breadcrumb } from "@/03_Engineering_System/apparel/components/Breadcrumb";

export default function CartPage() {
  const { items, itemCount, subtotal, removeItem, updateQty } = useCart();

  const shipping = subtotal >= 20000 ? 0 : 1500;
  const total = subtotal + shipping;

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1400px] px-6 pb-20 sm:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/apparel" },
            { label: "Products", href: "/apparel/products" },
            { label: "Cart" },
          ]}
        />

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-heading text-3xl text-[#1E1E1C] sm:text-4xl"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Shopping Cart
          </h1>
          <p className="mt-2 text-sm text-[#A0A09C]">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </p>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center py-32 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ShoppingBag className="mb-6 h-16 w-16 text-[#D4D3CE]" />
            <h2 className="font-heading text-2xl text-[#1A1A1A]" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              Your cart is empty
            </h2>
            <p className="mt-2 text-sm text-[#6B6B68]">
              Explore our collection and find something you love.
            </p>
            <Link
              href="/apparel/products"
              className="mt-8 inline-flex items-center gap-2 border-b border-[#D4D3CE] pb-2 text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A] transition-all hover:border-[#1A1A1A]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Cart Items */}
            <div className="space-y-6">
              {items.map((item) => (
                <motion.div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="flex gap-5 border-b border-[#E8E7E3] pb-6"
                  layout
                >
                  <Link
                    href={`/apparel/products/${item.product.slug}`}
                    className="block h-32 w-24 flex-shrink-0 overflow-hidden bg-[#F3F2EF] sm:h-40 sm:w-32"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <Link
                            href={`/apparel/products/${item.product.slug}`}
                            className="text-sm font-medium text-[#1A1A1A] transition-opacity hover:opacity-60"
                          >
                            {item.product.name}
                          </Link>
                          <p className="mt-1 text-xs text-[#A0A09C]">
                            {item.size} / {item.color}
                          </p>
                        </div>
                        <span className="text-sm font-medium text-[#1A1A1A]">
                          ¥{item.product.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQty(item.product.id, item.size, item.color, item.quantity - 1)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4D3CE] text-[#6B6B68] transition-all hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm text-[#1A1A1A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQty(item.product.id, item.size, item.color, item.quantity + 1)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4D3CE] text-[#6B6B68] transition-all hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id, item.size, item.color)}
                        className="text-[#A0A09C] transition-colors hover:text-[#D43D3D]"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

              <Link
                href="/apparel/products"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#6B6B68] transition-colors hover:text-[#1A1A1A]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <motion.div
              className="h-fit border border-[#E8E7E3] bg-[#FAFAF8] p-6 sm:p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3
                className="font-heading text-xl text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Order Summary
              </h3>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B6B68]">Subtotal</span>
                  <span className="text-[#1A1A1A]">¥{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B68]">Shipping</span>
                  <span className="text-[#1A1A1A]">
                    {shipping === 0 ? (
                      <span className="text-[#2D8A56]">Free</span>
                    ) : (
                      `¥${shipping.toLocaleString()}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-[#A0A09C]">
                    Free shipping on orders over ¥20,000
                  </p>
                )}
                <div className="border-t border-[#E8E7E3] pt-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-[#1A1A1A]">Total</span>
                    <span
                      className="font-heading text-lg text-[#1A1A1A]"
                      style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                      ¥{total.toLocaleString()}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#A0A09C]">Tax included</p>
                </div>
              </div>

              <button className="mt-6 flex h-14 w-full items-center justify-center gap-2 bg-[#1A1A1A] text-sm font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#333]">
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="mt-4 text-center text-xs text-[#A0A09C]">
                This is a demo store. No actual payment will be processed.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}
