import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get("category")
  const featured = searchParams.get("featured")
  const limit = Number(searchParams.get("limit")) || 50

  const where: any = {}
  if (category) where.category = category
  if (featured === "true") where.featured = true

  const products = await prisma.product.findMany({
    where,
    take: limit,
    orderBy: { createdAt: "desc" },
    include: { reviews: { select: { rating: true } } },
  })

  const productsWithRating = products.map((product) => {
    const avgRating =
      product.reviews.length > 0
        ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
        : 0
    return { ...product, avgRating: Math.round(avgRating * 10) / 10, reviewCount: product.reviews.length, reviews: undefined }
  })

  return NextResponse.json(productsWithRating)
}
