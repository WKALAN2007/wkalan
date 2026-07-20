import { Suspense } from "react"
import { ProductDetail } from "./ProductDetail"
import { Skeleton } from "@/components/ui/skeleton"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return { title: "Product" }
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <Suspense fallback={<Skeleton className="h-[600px] max-w-6xl mx-auto" />}>
        <ProductDetail params={params} />
      </Suspense>
    </main>
  )
}
