"use client";

import { motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

export interface Filters {
  category: string;
  size: string;
  sort: string;
  sale: boolean;
}

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const categories = [
  { label: "All", value: "" },
  { label: "Women", value: "women" },
  { label: "Men", value: "men" },
  { label: "Accessories", value: "accessories" },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A–Z", value: "name-asc" },
];

export function FilterSidebar({
  filters,
  onFilterChange,
  mobileOpen,
  onMobileClose,
}: FilterSidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    category: true,
    size: true,
    sort: true,
  });

  const toggleSection = (section: string) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const updateFilter = (key: keyof Filters, value: string | boolean) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <button
          onClick={() => toggleSection("category")}
          className="flex w-full items-center justify-between text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A]"
        >
          Category
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${expanded.category ? "rotate-180" : ""}`}
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: expanded.category ? "auto" : 0 }}
          className="overflow-hidden"
        >
          <div className="mt-4 space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => updateFilter("category", cat.value)}
                className={`block text-sm transition-colors ${
                  filters.category === cat.value
                    ? "font-medium text-[#1A1A1A]"
                    : "text-[#6B6B68] hover:text-[#1A1A1A]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Size */}
      <div>
        <button
          onClick={() => toggleSection("size")}
          className="flex w-full items-center justify-between text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A]"
        >
          Size
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${expanded.size ? "rotate-180" : ""}`}
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: expanded.size ? "auto" : 0 }}
          className="overflow-hidden"
        >
          <div className="mt-4 flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => updateFilter("size", filters.size === size ? "" : size)}
                className={`flex h-9 w-12 items-center justify-center border text-xs font-medium transition-all ${
                  filters.size === size
                    ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                    : "border-[#D4D3CE] text-[#6B6B68] hover:border-[#1A1A1A]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sale filter */}
      <div>
        <button
          onClick={() => updateFilter("sale", !filters.sale)}
          className={`flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
            filters.sale ? "text-[#D43D3D]" : "text-[#6B6B68] hover:text-[#1A1A1A]"
          }`}
        >
          <span
            className={`flex h-4 w-4 items-center justify-center border text-[10px] ${
              filters.sale
                ? "border-[#D43D3D] bg-[#D43D3D] text-white"
                : "border-[#D4D3CE]"
            }`}
          >
            {filters.sale ? "✓" : ""}
          </span>
          Sale Items
        </button>
      </div>

      {/* Sort */}
      <div>
        <button
          onClick={() => toggleSection("sort")}
          className="flex w-full items-center justify-between text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A]"
        >
          Sort By
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${expanded.sort ? "rotate-180" : ""}`}
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: expanded.sort ? "auto" : 0 }}
          className="overflow-hidden"
        >
          <div className="mt-4 space-y-2">
            {sortOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => updateFilter("sort", opt.value)}
                className={`block text-sm transition-colors ${
                  filters.sort === opt.value
                    ? "font-medium text-[#1A1A1A]"
                    : "text-[#6B6B68] hover:text-[#1A1A1A]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop: Static sidebar */}
      <aside className="hidden w-[220px] flex-shrink-0 lg:block">
        <div className="sticky top-24">
          <FilterContent />
        </div>
      </aside>

      {/* Mobile: Bottom sheet overlay */}
      {mobileOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[120] bg-black/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onMobileClose}
          />
          <motion.aside
            className="fixed bottom-0 left-0 right-0 z-[130] max-h-[80vh] overflow-y-auto bg-white p-6 lg:hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-[0.15em]">Filters</span>
              <button onClick={onMobileClose} className="text-[#A0A09C]">
                <X className="h-5 w-5" />
              </button>
            </div>
            <FilterContent />
          </motion.aside>
        </>
      )}
    </>
  );
}
