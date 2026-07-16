export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: "MÉTIER";
  price: number;
  compareAtPrice?: number;
  category: "women" | "men" | "accessories";
  subcategory: string;
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  isNew?: boolean;
  isSale?: boolean;
  isFeatured?: boolean;
}

export interface CategoryInfo {
  label: string;
  slug: string;
  image: string;
  count: number;
}

export const categories: CategoryInfo[] = [
  { label: "Women", slug: "women", image: "/apparel/categories/women.jpg", count: 8 },
  { label: "Men", slug: "men", image: "/apparel/categories/men.jpg", count: 8 },
  { label: "Accessories", slug: "accessories", image: "/apparel/categories/accessories.jpg", count: 6 },
  { label: "Sale", slug: "sale", image: "/apparel/categories/sale.jpg", count: 6 },
];

const img = (slug: string, index: number) => `/apparel/products/${slug}-${index}.jpg`;

export const products: Product[] = [
  // ── WOMEN (8) ──
  {
    id: "w-01",
    slug: "silk-camisole",
    name: "Silk Camisole",
    brand: "MÉTIER",
    price: 8900,
    category: "women",
    subcategory: "tops",
    description:
      "Cut from fluid silk charmeuse with a subtle sheen. Features adjustable spaghetti straps and a flattering V-neckline. An essential layering piece that transitions effortlessly from day to evening.",
    details: [
      "100% silk charmeuse",
      "Adjustable straps",
      "Relaxed fit",
      "French seam finishing",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Ivory", hex: "#F5F0E8" },
      { name: "Noir", hex: "#1A1A1A" },
      { name: "Blush", hex: "#E8C4B8" },
    ],
    images: [img("silk-camisole", 1), img("silk-camisole", 2)],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "w-02",
    slug: "pleated-midi-dress",
    name: "Pleated Midi Dress",
    brand: "MÉTIER",
    price: 14500,
    category: "women",
    subcategory: "dresses",
    description:
      "An elegant midi dress with accordion pleats that catch the light with every movement. The fitted bodice flows into a fluid skirt. Perfect for evening occasions or elevated daytime styling.",
    details: [
      "100% recycled polyester",
      "Accordion pleating",
      "Fitted bodice",
      "Invisible side zip",
      "Machine wash cold",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Midnight", hex: "#1C1C3A" },
      { name: "Sage", hex: "#9CAF88" },
    ],
    images: [img("pleated-midi-dress", 1), img("pleated-midi-dress", 2)],
    isFeatured: true,
  },
  {
    id: "w-03",
    slug: "wide-leg-wool-pant",
    name: "Wide-Leg Wool Pant",
    brand: "MÉTIER",
    price: 12800,
    category: "women",
    subcategory: "bottoms",
    description:
      "Tailored from Italian wool twill with a fluid drape. High-rise waist with extended belt loops. The wide leg elongates the silhouette while maintaining a structured, polished look.",
    details: [
      "100% Italian wool twill",
      "High-rise",
      "Wide leg",
      "Side pockets",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal", hex: "#36454F" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Cream", hex: "#F5F0E0" },
    ],
    images: [img("wide-leg-wool-pant", 1), img("wide-leg-wool-pant", 2)],
  },
  {
    id: "w-04",
    slug: "cropped-tweed-jacket",
    name: "Cropped Tweed Jacket",
    brand: "MÉTIER",
    price: 19500,
    category: "women",
    subcategory: "outerwear",
    description:
      "A modern take on the classic tweed jacket. Cropped silhouette with frayed edges and gold-toned buttons. Fully lined in silk for a luxurious feel against the skin.",
    details: [
      "Wool-blend tweed",
      "Cropped fit",
      "Gold-toned buttons",
      "Silk lining",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Tweed Ivory", hex: "#F0EDE4" },
      { name: "Tweed Navy", hex: "#2C3E50" },
    ],
    images: [img("cropped-tweed-jacket", 1), img("cropped-tweed-jacket", 2)],
    isNew: true,
  },
  {
    id: "w-05",
    slug: "cotton-poplin-shirt",
    name: "Cotton Poplin Shirt",
    brand: "MÉTIER",
    price: 6500,
    category: "women",
    subcategory: "tops",
    description:
      "Crisp cotton poplin with a relaxed boyfriend fit. Features a classic collar, button-through front, and elongated cuffs. Wear it tucked, half-tucked, or open over a camisole.",
    details: [
      "100% organic cotton poplin",
      "Boyfriend fit",
      "Button-through front",
      "Machine washable",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Blue Stripe", hex: "#A8C4DF" },
      { name: "Pink", hex: "#F4C2C2" },
    ],
    images: [img("cotton-poplin-shirt", 1), img("cotton-poplin-shirt", 2)],
  },
  {
    id: "w-06",
    slug: "ribbed-knit-maxi",
    name: "Ribbed Knit Maxi Dress",
    brand: "MÉTIER",
    price: 11800,
    category: "women",
    subcategory: "dresses",
    description:
      "Body-skimming maxi dress in a fine ribbed knit. Designed to hug the silhouette with a subtle flare at the hem. The square neckline and thin straps create an elegant, minimalist frame.",
    details: [
      "Viscose-nylon blend rib knit",
      "Square neckline",
      "Slim fit with flared hem",
      "Unlined",
      "Hand wash cold",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Espresso", hex: "#4A3728" },
      { name: "Vanilla", hex: "#F3E5AB" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    images: [img("ribbed-knit-maxi", 1), img("ribbed-knit-maxi", 2)],
    isNew: true,
  },
  {
    id: "w-07",
    slug: "tailored-bermuda-short",
    name: "Tailored Bermuda Short",
    brand: "MÉTIER",
    price: 7800,
    category: "women",
    subcategory: "bottoms",
    description:
      "Precision-tailored Bermuda shorts with a mid-rise waist and pressed crease. A polished alternative for warm-weather dressing. Pair with the matching blazer for a complete suit.",
    details: [
      "Wool-blend suiting",
      "Mid-rise",
      "Pressed crease",
      "Side and back pockets",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Sand", hex: "#C2B280" },
      { name: "Navy", hex: "#1B2A4A" },
    ],
    images: [img("tailored-bermuda-short", 1), img("tailored-bermuda-short", 2)],
  },
  {
    id: "w-08",
    slug: "cashmere-turtleneck",
    name: "Cashmere Turtleneck",
    brand: "MÉTIER",
    price: 15800,
    compareAtPrice: 19500,
    category: "women",
    subcategory: "tops",
    description:
      "Luxuriously soft cashmere with a relaxed turtle neck. Ribbed at the collar, cuffs, and hem. An investment piece that will anchor your cold-weather wardrobe for years to come.",
    details: [
      "100% Grade-A Mongolian cashmere",
      "Relaxed turtle neck",
      "Ribbed trims",
      "Slightly cropped length",
      "Hand wash or dry clean",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Oatmeal", hex: "#D9CEB8" },
      { name: "Burgundy", hex: "#722F37" },
      { name: "Slate", hex: "#708090" },
    ],
    images: [img("cashmere-turtleneck", 1), img("cashmere-turtleneck", 2)],
    isSale: true,
    isFeatured: true,
  },
  // ── MEN (8) ──
  {
    id: "m-01",
    slug: "japanese-selvedge-jean",
    name: "Japanese Selvedge Jean",
    brand: "MÉTIER",
    price: 13500,
    category: "men",
    subcategory: "bottoms",
    description:
      "Cut from 14oz Japanese selvedge denim woven on vintage shuttle looms. Straight-leg fit with a mid-rise. Designed to age beautifully, developing unique wear patterns over time.",
    details: [
      "14oz Japanese selvedge denim",
      "Straight-leg fit",
      "Mid-rise",
      "Button fly",
      "Chain-stitched hem",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Raw Indigo", hex: "#1B3A5C" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    images: [img("japanese-selvedge-jean", 1), img("japanese-selvedge-jean", 2)],
    isFeatured: true,
  },
  {
    id: "m-02",
    slug: "merino-half-zip",
    name: "Merino Half-Zip Knit",
    brand: "MÉTIER",
    price: 9800,
    category: "men",
    subcategory: "tops",
    description:
      "Ultra-fine merino wool knit with a half-zip funnel neck. Temperature-regulating and odor-resistant. Equally at home on the golf course or under a blazer at the office.",
    details: [
      "100% extra-fine merino wool",
      "Half-zip funnel neck",
      "Ribbed cuffs and hem",
      "Machine washable",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Heather Grey", hex: "#B0B0B0" },
      { name: "Olive", hex: "#556B2F" },
    ],
    images: [img("merino-half-zip", 1), img("merino-half-zip", 2)],
    isNew: true,
  },
  {
    id: "m-03",
    slug: "unstructured-linen-blazer",
    name: "Unstructured Linen Blazer",
    brand: "MÉTIER",
    price: 16800,
    category: "men",
    subcategory: "outerwear",
    description:
      "Deconstructed blazer in Irish linen. No padding, no lining — just clean, effortless tailoring. Patch pockets and horn buttons complete the relaxed sophistication.",
    details: [
      "100% Irish linen",
      "Unstructured, unlined",
      "Patch pockets",
      "Horn buttons",
      "Dry clean only",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Natural", hex: "#F5F0E0" },
      { name: "Dusty Blue", hex: "#7A9BAE" },
    ],
    images: [img("unstructured-linen-blazer", 1), img("unstructured-linen-blazer", 2)],
    isFeatured: true,
  },
  {
    id: "m-04",
    slug: "heavyweight-organic-tee",
    name: "Heavyweight Organic Tee",
    brand: "MÉTIER",
    price: 4500,
    category: "men",
    subcategory: "tops",
    description:
      "The perfect tee, obsessively refined. 220gsm organic cotton jersey with a dense, structured hand-feel. Pre-washed to eliminate shrinkage. Boxy fit with a clean, ribbed collar.",
    details: [
      "220gsm organic cotton jersey",
      "Boxy fit",
      "Ribbed collar",
      "Pre-washed",
      "Machine wash warm",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#1A1A1A" },
      { name: "Sand", hex: "#C2B280" },
      { name: "Rust", hex: "#B7410E" },
    ],
    images: [img("heavyweight-organic-tee", 1), img("heavyweight-organic-tee", 2)],
  },
  {
    id: "m-05",
    slug: "relaxed-chino",
    name: "Relaxed Chino",
    brand: "MÉTIER",
    price: 8500,
    category: "men",
    subcategory: "bottoms",
    description:
      "Garment-dyed cotton twill chinos with a relaxed tapered fit. The enzyme wash gives them a broken-in feel from day one. A modern alternative to the standard slim chino.",
    details: [
      "100% cotton twill",
      "Garment-dyed",
      "Relaxed tapered fit",
      "Side and back pockets",
      "Machine wash cold",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Khaki", hex: "#C3B091" },
      { name: "Navy", hex: "#1B2A4A" },
    ],
    images: [img("relaxed-chino", 1), img("relaxed-chino", 2)],
  },
  {
    id: "m-06",
    slug: "waxed-cotton-jacket",
    name: "Waxed Cotton Field Jacket",
    brand: "MÉTIER",
    price: 22500,
    category: "men",
    subcategory: "outerwear",
    description:
      "British Millerain waxed cotton, lined with cotton flannel. Four front pockets, corduroy collar, and adjustable waist. Built to withstand weather and improve with age.",
    details: [
      "British Millerain waxed cotton",
      "Cotton flannel lining",
      "Corduroy collar",
      "Four front pockets",
      "Spot clean only",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Olive", hex: "#556B2F" },
      { name: "Navy", hex: "#1B2A4A" },
    ],
    images: [img("waxed-cotton-jacket", 1), img("waxed-cotton-jacket", 2)],
    isNew: true,
  },
  {
    id: "m-07",
    slug: "oxford-cloth-button-down",
    name: "Oxford Cloth Button-Down",
    brand: "MÉTIER",
    price: 7200,
    category: "men",
    subcategory: "tops",
    description:
      "A definitive Oxford shirt crafted from Portuguese cotton. The collar is unfused for a natural roll. Finished with a locker loop and box pleat — details that speak to tradition.",
    details: [
      "100% Portuguese Oxford cotton",
      "Unfused collar",
      "Locker loop",
      "Box pleat",
      "Machine wash warm",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Blue", hex: "#A8C4DF" },
      { name: "Pink", hex: "#F4C2C2" },
    ],
    images: [img("oxford-cloth-button-down", 1), img("oxford-cloth-button-down", 2)],
  },
  {
    id: "m-08",
    slug: "wool-flannel-trouser",
    name: "Wool Flannel Trouser",
    brand: "MÉTIER",
    price: 11500,
    compareAtPrice: 14500,
    category: "men",
    subcategory: "bottoms",
    description:
      "Classic wool flannel trousers with a mid-rise and straight leg. Double reverse pleats add comfort and drape. Half-lined to the knee for shape retention without added weight.",
    details: [
      "100% wool flannel",
      "Mid-rise, straight leg",
      "Double reverse pleats",
      "Half-lined to knee",
      "Dry clean only",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Grey Flannel", hex: "#8C8C8C" },
      { name: "Charcoal", hex: "#36454F" },
    ],
    images: [img("wool-flannel-trouser", 1), img("wool-flannel-trouser", 2)],
    isSale: true,
  },
  // ── ACCESSORIES (6) ──
  {
    id: "a-01",
    slug: "leather-tote-bag",
    name: "Leather Tote Bag",
    brand: "MÉTIER",
    price: 18500,
    category: "accessories",
    subcategory: "bags",
    description:
      "Full-grain vegetable-tanned leather tote. Unlined interior with a single slip pocket. The handles are designed to patina beautifully with daily use. Fits a 16-inch laptop.",
    details: [
      "Full-grain vegetable-tanned leather",
      "Unlined",
      "Single interior slip pocket",
      "Fits 16-inch laptop",
      "Made in Italy",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Cognac", hex: "#9A4E2D" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    images: [img("leather-tote-bag", 1), img("leather-tote-bag", 2)],
    isFeatured: true,
  },
  {
    id: "a-02",
    slug: "silk-twilly-scarf",
    name: "Silk Twilly Scarf",
    brand: "MÉTIER",
    price: 3800,
    category: "accessories",
    subcategory: "accessories",
    description:
      "A slender silk scarf hand-rolled at the edges. Tie it around your neck, wrist, ponytail, or bag handle. The abstract print is exclusive to MÉTIER.",
    details: [
      "100% silk twill",
      "Hand-rolled edges",
      "Exclusive MÉTIER print",
      "Dry clean only",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Abstract Print", hex: "#E8C4B8" },
    ],
    images: [img("silk-twilly-scarf", 1), img("silk-twilly-scarf", 2)],
    isNew: true,
  },
  {
    id: "a-03",
    slug: "minimalist-leather-belt",
    name: "Minimalist Leather Belt",
    brand: "MÉTIER",
    price: 5800,
    category: "accessories",
    subcategory: "accessories",
    description:
      "A single piece of Italian leather with a brushed brass buckle. No stitching, no embellishment — just clean, honest design. Edges are hand-burnished for a refined finish.",
    details: [
      "Italian full-grain leather",
      "Brushed brass buckle",
      "Hand-burnished edges",
      "30mm width",
      "Made in Italy",
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "Brown", hex: "#8B4513" },
    ],
    images: [img("minimalist-leather-belt", 1), img("minimalist-leather-belt", 2)],
  },
  {
    id: "a-04",
    slug: "leather-chelsea-boot",
    name: "Leather Chelsea Boot",
    brand: "MÉTIER",
    price: 24500,
    category: "accessories",
    subcategory: "shoes",
    description:
      "Goodyear-welted Chelsea boots in polished calfskin. Elastic side panels and a pulled tab for easy on-off. Leather sole with a rubber grip insert. Made in Northampton, England.",
    details: [
      "Polished calfskin leather",
      "Goodyear welted construction",
      "Leather sole with rubber insert",
      "Made in England",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "Black Calf", hex: "#1A1A1A" },
      { name: "Brown Calf", hex: "#6B3A2A" },
    ],
    images: [img("leather-chelsea-boot", 1), img("leather-chelsea-boot", 2)],
  },
  {
    id: "a-05",
    slug: "resin-sunglasses",
    name: "Resin Sunglasses",
    brand: "MÉTIER",
    price: 9800,
    category: "accessories",
    subcategory: "accessories",
    description:
      "Bold geometric frames handcrafted from Italian acetate. CR-39 lenses with full UV400 protection. Each pair is polished by hand over three days for a glass-like finish.",
    details: [
      "Italian Mazzucchelli acetate",
      "CR-39 lenses, UV400 protection",
      "Hand-polished finish",
      "Includes hard case and cloth",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Tortoise", hex: "#8B6914" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    images: [img("resin-sunglasses", 1), img("resin-sunglasses", 2)],
  },
  {
    id: "a-06",
    slug: "canvas-crossbody-bag",
    name: "Canvas Crossbody Bag",
    brand: "MÉTIER",
    price: 6800,
    compareAtPrice: 8500,
    category: "accessories",
    subcategory: "bags",
    description:
      "Lightweight cotton canvas with leather trim and an adjustable webbing strap. Zip-top closure with a compact interior. The everyday bag you'll reach for again and again.",
    details: [
      "Cotton canvas with leather trim",
      "Adjustable webbing strap",
      "Zip-top closure",
      "Interior zip pocket",
      "Spot clean",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Olive", hex: "#556B2F" },
      { name: "Natural", hex: "#F5F0E0" },
    ],
    images: [img("canvas-crossbody-bag", 1), img("canvas-crossbody-bag", 2)],
    isSale: true,
  },
];

export const allSizes = ["XS", "S", "M", "L", "XL", "XXL"] as const;
export const allColors = [
  "White", "Black", "Blue", "Brown", "Green", "Grey",
  "Red", "Pink", "Beige", "Navy",
] as const;

export const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A–Z", value: "name-asc" },
] as const;
