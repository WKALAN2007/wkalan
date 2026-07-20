import { auth } from "@/lib/auth"
import { stripe } from "@/lib/stripe"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const cartItems = await prisma.cartItem.findMany({
    where: { userId: session.user.id },
    include: { product: true },
  })

  if (cartItems.length === 0) {
    return NextResponse.json({ message: "Cart is empty" }, { status: 400 })
  }

  const line_items = cartItems.map((item) => ({
    price_data: {
      currency: item.product.currency,
      product_data: {
        name: item.product.name,
        description: item.product.description,
        images: item.product.imageUrl ? [item.product.imageUrl] : [],
      },
      unit_amount: Math.round(item.product.price * 100), // cents
    },
    quantity: item.quantity,
  }))

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.AUTH_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.AUTH_URL}/cart`,
      metadata: { userId: session.user.id },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Stripe checkout error:", error)
    return NextResponse.json({ message: "Checkout failed" }, { status: 500 })
  }
}
