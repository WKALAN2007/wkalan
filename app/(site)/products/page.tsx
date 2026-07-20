import { ProductGrid } from "./ProductGrid"

export const metadata = {
  title: "Products",
  description: "Browse our collection",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Products</h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl">
            Explore our curated collection. Each piece is crafted with attention to detail and quality.
          </p>
        </header>
        <ProductGrid />
      </div>
    </main>
  )
}
