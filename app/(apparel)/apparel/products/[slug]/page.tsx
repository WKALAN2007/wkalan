import { notFound } from "next/navigation";
import { products } from "@/data/apparel/products";
import { Breadcrumb } from "@/03_Engineering_System/apparel/components/Breadcrumb";
import { ProductDetailClient } from "./ProductDetailClient";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  // Related products: same category, excluding current
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1400px] px-6 pb-20 sm:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/apparel" },
              { label: "Products", href: "/apparel/products" },
              { label: product.category, href: `/apparel/products?category=${product.category}` },
              { label: product.name },
            ]}
          />
        </div>

        <ProductDetailClient product={product} relatedProducts={related} />
      </div>
    </main>
  );
}
