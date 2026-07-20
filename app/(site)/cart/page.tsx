"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2, Loader2 } from "lucide-react"

interface CartItem {
  id: string
  quantity: number
  product: {
    id: string
    name: string
    price: number
    imageUrl: string | null
  }
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [checkingOut, setCheckingOut] = useState(false)

  const fetchCart = useCallback(async () => {
    const res = await fetch("/api/cart")
    if (!res.ok) {
      setItems([])
      setLoading(false)
      return
    }
    const data = await res.json()
    setItems(data)
    setLoading(false)
  }, [])

  useEffect(() => { fetchCart() }, [fetchCart])

  async function updateQuantity(productId: string, quantity: number) {
    await fetch("/api/cart", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    })
    fetchCart()
  }

  async function removeItem(productId: string) {
    await fetch("/api/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    })
    setItems(items.filter((i) => i.product.id !== productId))
    toast.success("Removed from cart")
  }

  async function checkout() {
    setCheckingOut(true)
    try {
      const res = await fetch("/api/checkout", { method: "POST" })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        toast.error(data.message || "Checkout failed")
      }
    } catch {
      toast.error("An error occurred")
    } finally {
      setCheckingOut(false)
    }
  }

  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  if (loading) {
    return (
      <main className="min-h-screen pt-24 pb-24 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-text-secondary" />
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link href="/products" className="text-sm text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-1 mb-2">
              <ArrowLeft className="h-4 w-4" /> Continue shopping
            </Link>
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">Cart</h1>
          </div>
          {items.length > 0 && (
            <span className="text-text-secondary">{items.length} item{items.length !== 1 && "s"}</span>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 space-y-4">
            <ShoppingBag className="h-16 w-16 mx-auto text-text-tertiary" />
            <p className="text-lg text-text-secondary">Your cart is empty</p>
            <Link href="/products" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Browse products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="border-border/50 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 bg-surface flex-shrink-0">
                        {item.product.imageUrl ? (
                          <img src={item.product.imageUrl} alt={item.product.name} className="h-full w-full object-cover" />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center text-text-tertiary text-xs">No img</div>
                        )}
                      </div>
                      <div className="flex-1 py-4 pr-4 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link href={`/products/${item.product.id}`} className="font-medium hover:underline">
                              {item.product.name}
                            </Link>
                            <p className="text-sm font-medium mt-0.5">${item.product.price.toFixed(2)}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-text-tertiary hover:text-red-500" onClick={() => removeItem(item.product.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium tabular-nums">{item.quantity}</span>
                          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="border-border/50 sticky top-28">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-lg font-semibold">Order summary</h2>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Subtotal</span>
                    <span className="font-medium tabular-nums">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Shipping</span>
                    <span className="text-text-secondary">Calculated at checkout</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold tabular-nums">${subtotal.toFixed(2)}</span>
                  </div>
                  <Button className="w-full" size="lg" onClick={checkout} disabled={checkingOut}>
                    {checkingOut ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Redirecting...
                      </>
                    ) : (
                      "Checkout with Stripe"
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
