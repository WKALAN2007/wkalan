// Seed script — populates the database with demo data
// Run with: npx tsx prisma/seed.ts

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import { PrismaClient } from "./generated"
import "dotenv/config"

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
})

const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("🌱 Seeding database...")

  // Clean existing data
  await prisma.cartItem.deleteMany()
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.review.deleteMany()
  await prisma.post.deleteMany()
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.verificationToken.deleteMany()
  await prisma.product.deleteMany()
  await prisma.user.deleteMany()

  // Create admin user
  const admin = await prisma.user.create({
    data: { name: "Admin", email: "admin@wkalan.com", role: "admin" },
  })

  // Create demo user
  const demoUser = await prisma.user.create({
    data: { name: "Demo User", email: "demo@wkalan.com", role: "user" },
  })

  // Create products
  const productData = [
    { name: "Minimalist Desk Lamp", description: "A sleek, adjustable desk lamp with warm LED lighting. CNC-machined aluminum body.", price: 89.99, currency: "usd", category: "Home", stock: 25, featured: true, imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&q=80" },
    { name: "Ceramic Coffee Set", description: "Hand-thrown ceramic coffee set including two cups and a pour-over dripper.", price: 64.00, category: "Kitchen", stock: 15, featured: true, imageUrl: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&q=80" },
    { name: "Linen Notebook Set", description: "Set of three A5 notebooks bound in Belgian linen. Fountain-pen-friendly paper.", price: 34.00, category: "Stationery", stock: 50, featured: true, imageUrl: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80" },
    { name: "Wool Throw Blanket", description: "Heavyweight merino wool throw blanket woven in Scotland. 150×200cm.", price: 149.00, category: "Home", stock: 10, featured: true, imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=600&q=80" },
    { name: "Brass Pen", description: "Solid brass ballpoint pen that develops a unique patina over time.", price: 48.00, category: "Stationery", stock: 30, featured: false, imageUrl: "https://images.unsplash.com/photo-1583485088037-697b1fd54eae?w=600&q=80" },
    { name: "Leather Weekender Bag", description: "Full-grain leather weekender bag with brass hardware. 50L capacity.", price: 295.00, category: "Accessories", stock: 8, featured: true, imageUrl: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&q=80" },
    { name: "Scented Candle — Cedar & Bergamot", description: "Soy wax candle in a hand-blown glass vessel. 60-hour burn time.", price: 42.00, category: "Home", stock: 20, featured: false, imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80" },
    { name: "Wireless Charging Pad", description: "Minimalist 15W wireless charger in walnut wood and anodized aluminum.", price: 55.00, category: "Tech", stock: 40, featured: false, imageUrl: "https://images.unsplash.com/photo-1629624940447-1e10f9d2425b?w=600&q=80" },
    { name: "Japanese Incense Set", description: "Box of 60 incense sticks from Kyoto's oldest incense house.", price: 28.00, category: "Wellness", stock: 35, featured: false, imageUrl: "https://images.unsplash.com/photo-1602133187081-487dae95aa32?w=600&q=80" },
    { name: "Canvas Tote — Natural", description: "Heavyweight 24oz cotton canvas tote with reinforced stitching.", price: 38.00, category: "Accessories", stock: 45, featured: false, imageUrl: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&q=80" },
    { name: "Tea Infuser Bottle", description: "Double-walled glass bottle with built-in stainless steel tea strainer.", price: 32.00, category: "Kitchen", stock: 30, featured: false, imageUrl: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80" },
    { name: "Walnut Desk Organizer", description: "Solid American walnut desk organizer with compartments for pens and phone.", price: 78.00, category: "Home", stock: 12, featured: false, imageUrl: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=600&q=80" },
  ]

  const products = []
  for (const data of productData) {
    const p = await prisma.product.create({ data })
    products.push(p)
  }

  // Create reviews
  await prisma.review.create({ data: { userId: demoUser.id, productId: products[0].id, rating: 5, comment: "Beautiful design and perfectly warm light." } })
  await prisma.review.create({ data: { userId: demoUser.id, productId: products[1].id, rating: 4, comment: "Lovely set. Cups are a bit smaller than expected." } })
  await prisma.review.create({ data: { userId: demoUser.id, productId: products[2].id, rating: 5, comment: "Best notebooks ever. Paper quality is incredible." } })
  await prisma.review.create({ data: { userId: demoUser.id, productId: products[3].id, rating: 5, comment: "Worth every penny. Warm, substantial, beautifully made." } })
  await prisma.review.create({ data: { userId: demoUser.id, productId: products[5].id, rating: 5, comment: "Investment piece. Amazing quality." } })

  // Create blog posts
  await prisma.post.createMany({
    data: [
      { title: "The Art of Intentional Design", slug: "art-of-intentional-design", excerpt: "Why the best design is the design you don't notice.", content: "## The Art of Intentional Design\n\nGreat design is invisible.", published: true, authorId: admin.id },
      { title: "Building a Creative Workspace", slug: "building-creative-workspace", excerpt: "How your environment shapes your work.", content: "## Building a Creative Workspace\n\nYour environment shapes your thinking.", published: true, authorId: admin.id },
      { title: "Why We Source from Small Workshops", slug: "sourcing-small-workshops", excerpt: "The story behind our supply chain.", content: "## Why We Source from Small Workshops\n\nEvery product we sell comes from an independent workshop.", published: true, authorId: admin.id },
    ],
  })

  console.log("✅ Seed complete!")
  console.log(`  👤 2 users (admin@wkalan.com, demo@wkalan.com)`)
  console.log(`  📦 ${products.length} products`)
  console.log(`  ⭐ 5 reviews`)
  console.log(`  📝 3 blog posts`)
}

main()
  .catch((e) => {
    console.error("Seed error:", e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
