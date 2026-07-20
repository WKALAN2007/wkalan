"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart, CartItem } from "./CartContext";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const { state, dispatch } = useCart();

  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => dispatch({ type: "CLOSE_CART" })}
            className="fixed inset-0 z-[var(--z-overlay)] bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 right-0 top-0 z-[var(--z-modal)] w-full max-w-md bg-[var(--wk-bg)] shadow-2xl"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[var(--wk-border)] px-6 py-4">
                <h2 className="font-heading text-lg tracking-[-0.02em]">
                  Your Bag ({itemCount})
                </h2>
                <button
                  onClick={() => dispatch({ type: "CLOSE_CART" })}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--wk-text-secondary)] transition-all hover:bg-[var(--wk-surface)] hover:text-[var(--wk-text-primary)] hover:scale-110 active:scale-90"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <AnimatePresence>
                  {state.items.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center py-20 text-center"
                    >
                      <ShoppingBag size={40} className="mb-4 text-[var(--wk-text-tertiary)]" />
                      <p className="text-sm text-[var(--wk-text-secondary)]">
                        Your bag is empty
                      </p>
                      <button
                        onClick={() => dispatch({ type: "CLOSE_CART" })}
                        className="group mt-4 text-xs tracking-[0.1em] text-[#3d7a3d] transition-all hover:text-[#2d5a2d] hover:gap-2 inline-flex items-center gap-1"
                      >
                        [ Continue Shopping ]
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </button>
                    </motion.div>
                  ) : (
                    state.items.map((item: CartItem) => (
                      <motion.div
                        key={`${item.id}-${item.size}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-4 border-b border-[var(--wk-border)] py-4 group"
                      >
                        {/* Image */}
                        <Link
                          href={`/commerce/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-[var(--wk-surface)] transition-all hover:shadow-md hover:scale-105"
                          onClick={() => dispatch({ type: "CLOSE_CART" })}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </Link>

                        {/* Info */}
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <Link
                              href={`/commerce/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                              className="text-sm font-medium transition-colors hover:text-[#3d7a3d]"
                              onClick={() => dispatch({ type: "CLOSE_CART" })}
                            >
                              {item.name}
                            </Link>
                            <p className="text-xs text-[var(--wk-text-tertiary)]">
                              {item.color} / {item.size}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: { id: item.id, quantity: item.quantity - 1 },
                                  })
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--wk-border)] text-xs transition-all hover:bg-[var(--wk-surface)] hover:border-[var(--wk-text-primary)] active:scale-90"
                              >
                                <Minus size={10} />
                              </button>
                              <span className="w-7 text-center text-xs font-medium">{item.quantity}</span>
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: { id: item.id, quantity: item.quantity + 1 },
                                  })
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--wk-border)] text-xs transition-all hover:bg-[var(--wk-surface)] hover:border-[var(--wk-text-primary)] active:scale-90"
                              >
                                <Plus size={10} />
                              </button>
                            </div>
                            <span className="text-sm font-semibold">
                              ${(item.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              {state.items.length > 0 && (
                <div className="border-t border-[var(--wk-border)] px-6 py-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-[var(--wk-text-secondary)]">Subtotal</span>
                    <span className="font-heading text-lg font-bold">${subtotal.toLocaleString()}</span>
                  </div>
                  <button className="group w-full bg-[var(--wk-text-primary)] py-3.5 text-sm tracking-[0.08em] text-white transition-all hover:bg-[#1a3a1a] hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 active:scale-[0.98] rounded-full">
                    [ CHECKOUT ]
                    <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </button>
                  <p className="mt-2 text-center text-[10px] text-[var(--wk-text-tertiary)]">
                    Shipping &amp; taxes calculated at checkout
                  </p>
                  <button
                    onClick={() => dispatch({ type: "CLOSE_CART" })}
                    className="mt-3 w-full text-center text-[10px] tracking-[0.08em] text-[var(--wk-text-tertiary)] transition-colors hover:text-[#3d7a3d] underline underline-offset-4"
                  >
                    [ OR CONTINUE SHOPPING ]
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
