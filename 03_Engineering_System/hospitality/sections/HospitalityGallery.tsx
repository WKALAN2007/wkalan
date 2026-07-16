"use client";

import { useState, useEffect } from "react";
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

        {/* Masonry grid */}
        <motion.div
          className="columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.7,
                staggerChildren: 0.03,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          {images.map((img) => (
            <motion.div
              key={img.src}
              className="mb-4 cursor-pointer overflow-hidden sm:mb-5"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-8 top-8 text-xs tracking-[0.15em] text-white/60 transition-colors hover:text-white"
            >
              CLOSE
            </button>

            {/* Image */}
            <motion.img
              src={selectedImage}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
