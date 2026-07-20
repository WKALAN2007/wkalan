import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await prisma.post.findUnique({ where: { slug } })
  if (!post) return { title: "Not found" }
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { author: { select: { name: true, image: true } } },
  })

  if (!post || !post.published) notFound()

  return (
    <main className="min-h-screen pt-24 pb-24">
      <article className="mx-auto max-w-3xl px-6">
        <Link href="/blog" className="text-sm text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-1 mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">{post.title}</h1>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-surface overflow-hidden">
              {post.author.image && (
                <img src={post.author.image} alt="" className="h-full w-full object-cover" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <time className="text-sm text-text-tertiary">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </header>

        {post.coverImage && (
          <img src={post.coverImage} alt={post.title} className="w-full rounded-xl mb-12" />
        )}

        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
      </article>
    </main>
  )
}
