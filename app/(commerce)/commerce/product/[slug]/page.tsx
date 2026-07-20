import { notFound } from "next/navigation";
import { products } from "@/03_Engineering_System/commerce/data/products";
import { ProductDetailClient } from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.name.toLowerCase().replace(/\s+/g, "-") }));
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ProductDetailClient params={params} />;
}
