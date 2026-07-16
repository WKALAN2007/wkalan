"use client";

import { motion } from "framer-motion";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelect: (size: string) => void;
}

export function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A]">
          Size
        </span>
        <button className="text-[10px] uppercase tracking-[0.1em] text-[#A0A09C] underline underline-offset-2 transition-colors hover:text-[#1A1A1A]">
          Size Guide
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <motion.button
            key={size}
            onClick={() => onSelect(size)}
            className={`relative flex h-12 w-14 items-center justify-center border text-sm font-medium transition-colors ${
              selectedSize === size
                ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                : "border-[#D4D3CE] text-[#1A1A1A] hover:border-[#1A1A1A]"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {size}
            {selectedSize === size && (
              <motion.div
                className="absolute inset-0 border border-[#1A1A1A]"
                layoutId="selectedSize"
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderRadius: "inherit" }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
