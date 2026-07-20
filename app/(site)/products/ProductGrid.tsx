"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface Product {
  id: string
  name: string
  description: string
  price: number
  currency: string
  imageUrl: string | null
  category: string | null
  avgRating: number
  reviewCount: number
}

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[3/4] rounded-xl" />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-text-secondary">No products yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`} className="group">
          <Card className="overflow-hidden border-0 shadow-none bg-transparent">
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface mb-4 relative">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-text-tertiary">
                  No image
                </div>
              )}
              {product.category && (
                <Badge variant="secondary" className="absolute top-3 left-3">
                  {product.category}
                </Badge>
              )}
            </div>
            <CardContent className="p-0 space-y-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-lg leading-snug group-hover:underline">
                  {product.name}
                </h3>
                <span className="font-medium text-base tabular-nums whitespace-nowrap">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-text-secondary line-clamp-2">{product.description}</p>
              {product.reviewCount > 0 && (
                <div className="flex items-center gap-1 text-sm text-text-secondary">
                  <span className="text-yellow-500">★</span>
                  <span>{product.avgRating}</span>
                  <span className="text-text-tertiary">({product.reviewCount})</span>
                </div>
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
