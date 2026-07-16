"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/data/apparel/products";
import { ProductCard } from "./ProductCard";
import { FilterSidebar, type Filters } from "./FilterSidebar";

export function ProductGrid() {
  const [filters, setFilters] = useState<Filters>({
    category: "",
    size: "",
    sort: "newest",
    sale: false,
  });
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.size) {
      result = result.filter((p) => p.sizes.includes(filters.size as any));
    }

    if (filters.sale) {
      result = result.filter((p) => p.isSale);
    }

    switch (filters.sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // newest first (reverse of original order)
        break;
    }

    return result;
  }, [filters]);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        {/* Page Header */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.2em] text-[#B8B0A0]"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            {filters.category ? filters.category : "All"} Collection
          </motion.span>
          <motion.h1
            className="mt-4 font-heading text-3xl text-[#1E1E1C] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
            }}
          >
            {filters.category
              ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1)
              : "Shop All"}
          </motion.h1>
          <motion.p
            className="mt-2 text-sm text-[#A0A09C]"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7, delay: 0.15 } },
            }}
          >
            {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          </motion.p>
        </motion.div>

        <div className="flex gap-10">
          {/* Filter Sidebar */}
          <AnimatePresence>
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              mobileOpen={mobileFilterOpen}
              onMobileClose={() => setMobileFilterOpen(false)}
            />
          </AnimatePresence>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button + Active Filters */}
            <div className="mb-8 flex flex-wrap items-center gap-3 lg:hidden">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="flex items-center gap-2 border border-[#D4D3CE] px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-[#1A1A1A] transition-all hover:border-[#1A1A1A]"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filters
              </button>
              {/* Active count */}
              {(filters.category || filters.size || filters.sale) && (
                <span className="text-xs text-[#6B6B68]">
                  {[filters.category, filters.size, filters.sale ? "sale" : ""]
                    .filter(Boolean)
                    .length}{" "}
                  active
                </span>
              )}
            </div>

            {/* Product Cards Grid */}
            <motion.div
              className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-3"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProductCard product={product} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                className="py-20 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-sm text-[#A0A09C]">
                  No products match your filters.
                </p>
                <button
                  onClick={() =>
                    setFilters({ category: "", size: "", sort: "newest", sale: false })
                  }
                  className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A] underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
