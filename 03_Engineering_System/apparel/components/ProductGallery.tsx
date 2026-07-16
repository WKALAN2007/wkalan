"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 sm:flex-row-reverse sm:gap-6">
      {/* Main Image */}
      <div className="relative flex-1 overflow-hidden bg-[#F3F2EF]">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedIndex}
            src={images[selectedIndex]}
            alt={`${productName} — view ${selectedIndex + 1}`}
            className="aspect-[3/4] w-full object-cover sm:aspect-auto sm:h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto sm:flex-col sm:overflow-x-visible">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`relative h-20 w-16 flex-shrink-0 overflow-hidden bg-[#F3F2EF] sm:h-24 sm:w-20 ${
                i === selectedIndex
                  ? "ring-1 ring-[#1A1A1A] ring-offset-2"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
