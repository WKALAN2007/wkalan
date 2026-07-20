import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 flex items-center justify-center">
      <Card className="max-w-md w-full border-border/50">
        <CardContent className="p-8 text-center space-y-4">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          <h1 className="text-2xl font-bold tracking-tight">Order confirmed!</h1>
          <p className="text-text-secondary">
            Thank you for your purchase. You&apos;ll receive a confirmation email shortly.
          </p>
          <div className="flex gap-3 justify-center pt-2">
            <Link href="/products" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Continue shopping</Link>
            <Link href="/account" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90">View orders</Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
