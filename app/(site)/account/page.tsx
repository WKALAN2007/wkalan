import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { signOut } from "@/lib/auth"
import { LogOut, Package, Settings, ShoppingBag } from "lucide-react"

export default async function AccountPage() {
  const session = await auth()
  if (!session?.user) redirect("/login")

  const orders = await prisma.order.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    include: { items: { include: { product: true } } },
    take: 10,
  })

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">Account</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6 text-center space-y-3">
                <Avatar className="h-20 w-20 mx-auto">
                  <AvatarImage src={session.user.image || undefined} />
                  <AvatarFallback className="text-2xl">
                    {session.user.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">{session.user.name || "User"}</p>
                  <p className="text-sm text-text-secondary">{session.user.email}</p>
                </div>
                <Badge variant="outline" className="capitalize">
                  {(session.user as { role?: string }).role || "user"}
                </Badge>
              </CardContent>
            </Card>

            <form
              action={async () => {
                "use server"
                await signOut({ redirectTo: "/" })
              }}
            >
              <Button variant="outline" className="w-full" type="submit">
                <LogOut className="mr-2 h-4 w-4" /> Sign out
              </Button>
            </form>
          </div>

          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-border/50">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-surface flex items-center justify-center">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{orders.length}</p>
                    <p className="text-sm text-text-secondary">Orders</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-surface flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {orders.reduce((sum, o) => sum + o.items.length, 0)}
                    </p>
                    <p className="text-sm text-text-secondary">Items purchased</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Orders */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Recent orders</CardTitle>
                <CardDescription>Your order history</CardDescription>
              </CardHeader>
              <CardContent>
                {orders.length === 0 ? (
                  <div className="text-center py-8 text-text-secondary">
                    <p>No orders yet.</p>
                    <Link href="/products" className="mt-4 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                      Start shopping
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="text-sm text-text-tertiary">
                              Order #{order.id.slice(-8)}
                            </p>
                            <p className="text-xs text-text-tertiary">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={
                                order.status === "paid" || order.status === "shipped"
                                  ? "border-green-500 text-green-500"
                                  : order.status === "delivered"
                                  ? "border-blue-500 text-blue-500"
                                  : order.status === "cancelled"
                                  ? "border-red-500 text-red-500"
                                  : ""
                              }
                            >
                              {order.status}
                            </Badge>
                            <p className="font-bold tabular-nums">${order.total.toFixed(2)}</p>
                          </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="space-y-1 mt-2">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex items-center justify-between text-sm">
                              <span>{item.product.name} × {item.quantity}</span>
                              <span className="text-text-secondary">${item.price.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
