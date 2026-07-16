"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQty, itemCount, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
          />

          {/* Drawer Panel */}
          <motion.aside
            className="fixed inset-y-0 right-0 z-[210] flex w-full max-w-md flex-col bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E8E7E3] px-6 py-5">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4 text-[#1A1A1A]" />
                <span className="text-sm font-medium text-[#1A1A1A]">
                  Cart ({itemCount})
                </span>
              </div>
              <button
                onClick={closeDrawer}
                className="text-[#A0A09C] transition-colors hover:text-[#1A1A1A]"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <AnimatePresence mode="popLayout">
                {items.length === 0 ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-20 text-center"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ShoppingBag className="mb-4 h-12 w-12 text-[#D4D3CE]" />
                    <p className="text-sm text-[#6B6B68]">Your cart is empty</p>
                    <button
                      onClick={closeDrawer}
                      className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A] underline underline-offset-4 transition-opacity hover:opacity-60"
                    >
                      Continue Shopping
                    </button>
                  </motion.div>
                ) : (
                  items.map((item, i) => (
                    <motion.div
                      key={`${item.product.id}-${item.size}-${item.color}`}
                      className="flex gap-4 border-b border-[#E8E7E3] py-4 last:border-b-0"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50, height: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, borderBottomWidth: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {/* Product Image */}
                      <Link
                        href={`/apparel/products/${item.product.slug}`}
                        onClick={closeDrawer}
                        className="block h-24 w-20 flex-shrink-0 overflow-hidden bg-[#F3F2EF]"
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="h-full w-full object-cover"
                        />
                      </Link>

                      {/* Info + Qty */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <Link
                            href={`/apparel/products/${item.product.slug}`}
                            onClick={closeDrawer}
                            className="text-sm font-medium text-[#1A1A1A] transition-opacity hover:opacity-60"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-xs text-[#A0A09C]">
                            {item.size} / {item.color}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                updateQty(item.product.id, item.size, item.color, item.quantity - 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D4D3CE] text-[#6B6B68] transition-all hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="min-w-[1.25rem] text-center text-sm text-[#1A1A1A]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQty(item.product.id, item.size, item.color, item.quantity + 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D4D3CE] text-[#6B6B68] transition-all hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-[#1A1A1A]">
                              ¥{(item.product.price * item.quantity).toLocaleString()}
                            </span>
                            <button
                              onClick={() => removeItem(item.product.id, item.size, item.color)}
                              className="text-[#A0A09C] transition-colors hover:text-[#D43D3D]"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer with subtotal + checkout */}
            {items.length > 0 && (
              <motion.div
                className="border-t border-[#E8E7E3] px-6 py-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-[#6B6B68]">Subtotal</span>
                  <span className="font-heading text-lg text-[#1A1A1A]" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                    ¥{subtotal.toLocaleString()}
                  </span>
                </div>
                <p className="mb-4 text-xs text-[#A0A09C]">
                  Shipping & taxes calculated at checkout
                </p>
                <Link
                  href="/apparel/cart"
                  onClick={closeDrawer}
                  className="flex h-12 w-full items-center justify-center bg-[#1A1A1A] text-sm font-medium text-white transition-colors hover:bg-[#333]"
                >
                  View Cart
                </Link>
              </motion.div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
