"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";

interface AddToCartButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function AddToCartButton({ onClick, disabled = false }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  const handleClick = useCallback(() => {
    if (disabled) return;
    onClick();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }, [disabled, onClick]);

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      className={`relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden text-sm font-medium uppercase tracking-[0.1em] transition-colors ${
        disabled
          ? "cursor-not-allowed bg-[#E8E7E3] text-[#A0A09C]"
          : added
            ? "bg-[#2D8A56] text-white"
            : "bg-[#1A1A1A] text-white hover:bg-[#333]"
      }`}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      <AnimatePresence mode="wait">
        {added ? (
          <motion.span
            key="added"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <Check className="h-4 w-4" />
            Added to Cart
          </motion.span>
        ) : (
          <motion.span
            key="add"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            <ShoppingBag className="h-4 w-4" />
            {disabled ? "Select a Size" : "Add to Cart"}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
