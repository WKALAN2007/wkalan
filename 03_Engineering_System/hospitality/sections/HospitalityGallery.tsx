"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/hospitality/gallery/g-1.jpg", alt: "Resort exterior at dusk" },
  { src: "/hospitality/gallery/g-2.jpg", alt: "Infinity pool with ocean view" },
  { src: "/hospitality/gallery/g-3.jpg", alt: "Luxury suite interior" },
  { src: "/hospitality/gallery/g-4.jpg", alt: "Fine dining table setting" },
  { src: "/hospitality/gallery/g-5.jpg", alt: "Deluxe bedroom with ocean view" },
  { src: "/hospitality/gallery/g-6.jpg", alt: "Spa treatment room" },
  { src: "/hospitality/gallery/g-7.jpg", alt: "Garden suite terrace" },
  { src: "/hospitality/gallery/g-8.jpg", alt: "Outdoor dining terrace" },
  { src: "/hospitality/gallery/g-9.jpg", alt: "Ocean villa exterior" },
  { src: "/hospitality/gallery/g-10.jpg", alt: "Poolside loungers" },
  { src: "/hospitality/gallery/g-11.jpg", alt: "Penthouse living room" },
  { src: "/hospitality/gallery/g-12.jpg", alt: "Fitness center" },
];

export function HospitalityGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      const lenis = (window as any).__lenis;
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = "";
      const lenis = (window as any).__lenis;
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      const lenis = (window as any).__lenis;
      if (lenis) lenis.start();
    };
  }, [selectedImage]);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % images.length;
    });
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + images.length) % images.length;
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, goNext, goPrev]);

  return (
    <section id="gallery" className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <span className="text-xs tracking-[0.2em] text-[var(--color-accent-dark)]">
            GALLERY
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
            Through the Lens
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)]">
            A glimpse into the spaces, textures, and moments that define the
            Aurelia experience.
          </p>
        </motion.div>

        {/* Masonry grid with clip-path reveal */}
        <div className="columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className="mb-4 cursor-pointer overflow-hidden sm:mb-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0, y: 30, clipPath: "inset(10% 0 10% 0)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  clipPath: "inset(0% 0 0% 0)",
                  transition: {
                    duration: 0.7,
                    delay: 0.04 * i,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              onClick={() => setSelectedIndex(i)}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal with prev/next */}
      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute right-6 top-6 z-10 text-xs tracking-[0.15em] text-white/60 transition-colors hover:text-white"
            >
              CLOSE
            </button>

            {/* Counter */}
            <div className="absolute left-6 top-6 z-10 text-xs tracking-[0.15em] text-white/40">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-6 top-1/2 z-10 -translate-y-1/2 p-2 text-white/50 transition-colors hover:text-white"
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Alt text */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-xs tracking-[0.08em] text-white/40">
                {selectedImage.alt}
              </p>
            </div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-6 top-1/2 z-10 -translate-y-1/2 p-2 text-white/50 transition-colors hover:text-white"
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
