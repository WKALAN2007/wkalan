import { categories, products } from "@/03_Engineering_System/commerce/data/products";
import { CategoryPageClient } from "./CategoryPageClient";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.name.toLowerCase().replace(/\s+/g, "-") }));
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  return <CategoryPageClient params={params} />;
}
