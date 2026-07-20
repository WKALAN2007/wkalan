"use client"

import { useEffect, useState, use } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { ArrowLeft, Minus, Plus, ShoppingCart, Star } from "lucide-react"

interface Review {
  id: string
  rating: number
  comment: string | null
  createdAt: string
  user: { name: string | null; image: string | null }
}

interface Product {
  id: string
  name: string
  description: string
  price: number
  currency: string
  imageUrl: string | null
  category: string | null
  stock: number
  avgRating: number
  reviews: Review[]
}

export function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [adding, setAdding] = useState(false)

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.message) {
          router.push("/products")
          return
        }
        setProduct(data)
      })
      .finally(() => setLoading(false))
  }, [id, router])

  async function addToCart() {
    setAdding(true)
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product!.id, quantity }),
      })
      if (!res.ok) throw new Error()
      toast.success("Added to cart")
    } catch {
      toast.error("Please sign in to add items")
    } finally {
      setAdding(false)
    }
  }

  if (loading) return null
  if (!product) return null

  return (
    <div className="mx-auto max-w-6xl px-6">
      <Link href="/products" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image */}
        <div className="aspect-[3/4] rounded-2xl bg-surface overflow-hidden">
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-text-tertiary">
              No image
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          {product.category && <Badge variant="secondary">{product.category}</Badge>}

          <div>
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">{product.name}</h1>
            {product.reviews.length > 0 && (
              <div className="flex items-center gap-1 mt-2 text-sm">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.round(product.avgRating) ? "fill-yellow-500 text-yellow-500" : "text-border"}`}
                    />
                  ))}
                </div>
                <span className="text-text-secondary ml-1">
                  {product.avgRating} ({product.reviews.length} reviews)
                </span>
              </div>
            )}
          </div>

          <p className="text-3xl font-bold tabular-nums">${product.price.toFixed(2)}</p>

          <p className="text-text-secondary leading-relaxed">{product.description}</p>

          <Separator />

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-surface transition-colors rounded-l-lg"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 tabular-nums font-medium min-w-[3rem] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-surface transition-colors rounded-r-lg"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button size="lg" className="flex-1" onClick={addToCart} disabled={adding}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              {adding ? "Adding..." : "Add to cart"}
            </Button>
          </div>

          {product.stock > 0 ? (
            <p className="text-sm text-text-secondary">{product.stock} in stock</p>
          ) : (
            <p className="text-sm text-red-500">Out of stock</p>
          )}

          {/* Reviews */}
          {product.reviews.length > 0 && (
            <>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Reviews</h3>
                {product.reviews.map((review) => (
                  <Card key={review.id} className="border-border/50">
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            {review.user.name?.charAt(0) || "U"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{review.user.name || "Anonymous"}</p>
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-border"}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                      {review.comment && <p className="text-sm text-text-secondary">{review.comment}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
