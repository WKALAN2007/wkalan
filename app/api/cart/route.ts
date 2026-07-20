import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const cartItems = await prisma.cartItem.findMany({
    where: { userId: session.user.id },
    include: { product: true },
    orderBy: { id: "desc" },
  })

  return NextResponse.json(cartItems)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const { productId, quantity = 1 } = await req.json()

  if (!productId) {
    return NextResponse.json({ message: "Product ID required" }, { status: 400 })
  }

  // Upsert: add or update quantity
  const existing = await prisma.cartItem.findUnique({
    where: { userId_productId: { userId: session.user.id, productId } },
  })

  let cartItem
  if (existing) {
    cartItem = await prisma.cartItem.update({
      where: { id: existing.id },
      data: { quantity: existing.quantity + quantity },
      include: { product: true },
    })
  } else {
    cartItem = await prisma.cartItem.create({
      data: { userId: session.user.id, productId, quantity },
      include: { product: true },
    })
  }

  return NextResponse.json(cartItem, { status: 201 })
}

export async function DELETE(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const { productId } = await req.json()

  if (!productId) {
    return NextResponse.json({ message: "Product ID required" }, { status: 400 })
  }

  await prisma.cartItem.deleteMany({
    where: { userId: session.user.id, productId },
  })

  return NextResponse.json({ message: "Removed" })
}

export async function PATCH(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const { productId, quantity } = await req.json()

  if (!productId || quantity === undefined) {
    return NextResponse.json({ message: "Product ID and quantity required" }, { status: 400 })
  }

  if (quantity <= 0) {
    await prisma.cartItem.deleteMany({
      where: { userId: session.user.id, productId },
    })
    return NextResponse.json({ message: "Removed" })
  }

  const updated = await prisma.cartItem.update({
    where: { userId_productId: { userId: session.user.id, productId } },
    data: { quantity },
    include: { product: true },
  })

  return NextResponse.json(updated)
}
