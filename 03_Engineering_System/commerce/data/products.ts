export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  imageHover: string;
  colors: string[];
  sizes: string[];
  badge?: string;
}

// All product + category + section images sourced from Unsplash free photos
// Format: https://images.unsplash.com/photo-{ID}?w=800&h=1000&fit=crop

export const products: Product[] = [
  {
    id: "p1",
    name: "Botanical Face Oil",
    category: "Skincare",
    price: 38,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=1000&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=800&h=1000&fit=crop",
    colors: ["Original", "Lavender"],
    sizes: ["30ml", "50ml"],
    badge: "Best Seller",
  },
  {
    id: "p2",
    name: "Lavender Surface Spray",
    category: "Home Care",
    price: 16,
    image: "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=800&h=1000&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=800&h=1000&fit=crop",
    colors: ["Lavender", "Citrus", "Unscented"],
    sizes: ["500ml", "1L"],
    badge: "Sale",
  },
  {
    id: "p3",
    name: "Bamboo Utensil Set",
    category: "Kitchen",
    price: 24,
    image: "https://images.unsplash.com/photo-1633878353628-5fc8b983325c?w=800&h=1000&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1633878353697-f751870d1d76?w=800&h=1000&fit=crop",
    colors: ["Natural", "Dark"],
    sizes: ["5-Piece", "10-Piece"],
    badge: "Eco Pick",
  },
  {
    id: "p4",
    name: "Organic Herbal Tea Blend",
    category: "Wellness",
    price: 18,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&h=1000&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&h=1000&fit=crop",
    colors: ["Chamomile", "Peppermint", "Ginger"],
    sizes: ["40g", "100g"],
    badge: "New",
  },
  {
    id: "p5",
    name: "Coconut & Shea Body Butter",
    category: "Skincare",
    price: 28,
    image: "https://images.unsplash.com/photo-1620915789294-c972b1b1af7c?w=800&h=1000&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1641696682490-1d3fa2f5f833?w=800&h=1000&fit=crop",
    colors: ["Unscented", "Coconut", "Rose"],
    sizes: ["200ml", "400ml"],
    badge: "Staff Pick",
  },
  {
    id: "p6",
    name: "Natural Soy Candle Trio",
    category: "Home Care",
    price: 32,
    image: "https://images.unsplash.com/photo-1710788199174-847f04737b89?w=800&h=1000&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1643122966694-8778087ee3b0?w=800&h=1000&fit=crop",
    colors: ["Forest", "Ocean", "Garden"],
    sizes: ["3-Pack"],
    badge: "Gift Ready",
  },
  {
    id: "p7",
    name: "Glass Food Storage Set",
    category: "Kitchen",
    price: 45,
    image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=800&h=1000&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1650963764655-91902eedb9bd?w=800&h=1000&fit=crop",
    colors: ["Clear", "Amber"],
    sizes: ["5-Piece", "10-Piece"],
  },
  {
    id: "p8",
    name: "Plant-Based Laundry Strips",
    category: "Home Care",
    price: 14,
    image: "https://images.unsplash.com/photo-1566707675793-3ec9e5590bb6?w=800&h=1000&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1557687790-902ede7ab58c?w=800&h=1000&fit=crop",
    colors: ["Fresh Linen", "Lavender"],
    sizes: ["32 Strips", "64 Strips"],
    badge: "Value",
  },
];

export const categories = [
  {
    name: "Skincare",
    count: 12,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop",
    description: "Face · Body · Oils",
  },
  {
    name: "Home Care",
    count: 8,
    image: "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=600&h=600&fit=crop",
    description: "Cleaning · Candles · Laundry",
  },
  {
    name: "Wellness",
    count: 10,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600&h=600&fit=crop",
    description: "Tea · Supplements · Self-Care",
  },
  {
    name: "Kitchen",
    count: 15,
    image: "https://images.unsplash.com/photo-1633878353628-5fc8b983325c?w=600&h=600&fit=crop",
    description: "Utensils · Storage · Tools",
  },
  {
    name: "Bath & Body",
    count: 14,
    image: "https://images.unsplash.com/photo-1620915789294-c972b1b1af7c?w=600&h=600&fit=crop",
    description: "Soap · Butter · Soaks",
  },
  {
    name: "On the Go",
    count: 9,
    image: "https://images.unsplash.com/photo-1650963764655-91902eedb9bd?w=600&h=600&fit=crop",
    description: "Bags · Bottles · Travel Kits",
  },
];

export const testimonials = [
  {
    name: "Sarah R.",
    initials: "SR",
    role: "Verified Buyer",
    stars: 5,
    quote:
      "Switched to Verdant six months ago and my skin has never been clearer. The face oil is magical — and knowing it's all natural makes me feel even better about using it daily.",
  },
  {
    name: "Michael J.",
    initials: "MJ",
    role: "Subscriber · 8 months",
    stars: 5,
    quote:
      "Finally, cleaning products that actually work AND smell amazing without giving me a headache. The lavender surface spray is a game-changer. My whole home is Verdant now.",
  },
  {
    name: "Elena L.",
    initials: "EL",
    role: "Verified Buyer",
    stars: 5,
    quote:
      "As a mom of three, I care deeply about what's in our home. Verdant gives me peace of mind — effective, safe, and the subscription means I never run out. Absolute lifesaver.",
  },
];

export const blogPosts = [
  {
    title: "10 Easy Swaps for a Zero-Waste Kitchen",
    tag: "Guide",
    image: "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?w=600&h=450&fit=crop",
    excerpt: "Small changes that make a big difference — start your plastic-free journey today.",
  },
  {
    title: "The Science Behind Plant-Based Cleaning",
    tag: "Wellness",
    image: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=600&h=450&fit=crop",
    excerpt: "Why enzymes and essential oils outperform synthetic chemicals every time.",
  },
  {
    title: "Meet the Farmers Behind Your Face Oil",
    tag: "Lifestyle",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=600&h=450&fit=crop",
    excerpt: "We visited our lavender cooperative in Provence — here's their story.",
  },
  {
    title: "How We Achieved Climate-Positive Status",
    tag: "Sustainability",
    image: "https://images.unsplash.com/photo-1573784540576-21ddeff9479b?w=600&h=450&fit=crop",
    excerpt: "Inside our journey to offsetting 110% of our carbon emissions.",
  },
];

export const subscriptionTiers = [
  {
    name: "The Starter",
    icon: "🌱",
    frequency: "Every 2 months",
    price: 28,
    featured: false,
    perks: [
      "2 full-size products",
      "Free shipping",
      "10% off all add-ons",
      "Seasonal samples included",
    ],
  },
  {
    name: "The Essential",
    icon: "🌿",
    frequency: "Every month",
    price: 42,
    featured: true,
    perks: [
      "4 full-size products",
      "Free priority shipping",
      "15% off all add-ons",
      "Exclusive early access",
      "Free seasonal gift",
    ],
  },
  {
    name: "The Whole Home",
    icon: "🌳",
    frequency: "Every month",
    price: 68,
    featured: false,
    perks: [
      "6 full-size products",
      "Free express shipping",
      "20% off all add-ons",
      "Exclusive early access",
      "Free seasonal gift",
      "Personal concierge",
    ],
  },
];

export const comparisonData = {
  rows: [
    { label: "Ingredients", verdant: "100% natural, organic certified", conventional: "Mixed — some natural, some synthetic", budget: "Mostly synthetic, petroleum-based" },
    { label: "Packaging", verdant: "Compostable / glass / refillable", conventional: "Recyclable plastic, mixed materials", budget: "Single-use plastic, non-recyclable" },
    { label: "Testing", verdant: "Third-party lab tested, cruelty-free", conventional: "In-house testing, may test on animals", budget: "Minimal or no testing disclosed" },
    { label: "Carbon Footprint", verdant: "110% carbon offset — climate positive", conventional: "Some offset programs, not verified", budget: "No offset, high emissions supply chain" },
    { label: "Sourcing", verdant: "Direct fair-trade partnerships", conventional: "Wholesale distributors, mixed ethics", budget: "Commodity markets, opaque origins" },
  ],
};

export const trustBadges = [
  { icon: "✅", label: "Non-GMO" },
  { icon: "🐰", label: "Cruelty-Free" },
  { icon: "🌾", label: "Gluten-Free" },
  { icon: "🌍", label: "Climate Positive" },
  { icon: "🏅", label: "USDA Organic" },
  { icon: "♻️", label: "B-Corp Pending" },
];

export const processSteps = [
  {
    num: "01",
    title: "Ethically Harvested",
    description: "We work with small farms and cooperatives across 14 countries, harvesting at peak potency using regenerative methods.",
    image: "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?w=600&h=380&fit=crop",
  },
  {
    num: "02",
    title: "Cold-Processed",
    description: "Our low-temperature extraction preserves every active compound — no heat, no chemicals, just pure botanical integrity.",
    image: "https://images.unsplash.com/photo-1605040056130-38d9faad3534?w=600&h=380&fit=crop",
  },
  {
    num: "03",
    title: "Sustainably Delivered",
    description: "From our eco-friendly facility to your doorstep — carbon-neutral shipping in home-compostable packaging.",
    image: "https://images.unsplash.com/photo-1650963764655-91902eedb9bd?w=600&h=380&fit=crop",
  },
];
