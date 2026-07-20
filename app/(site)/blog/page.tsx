import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = { title: "Blog" }

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    include: { author: { select: { name: true, image: true } } },
  })

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-text-secondary">
            Thoughts, stories, and insights from our team.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-text-secondary">No posts yet.</p>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="border-border/50 hover:border-border transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-6 w-6 rounded-full bg-surface overflow-hidden">
                        {post.author.image && (
                          <img src={post.author.image} alt="" className="h-full w-full object-cover" />
                        )}
                      </div>
                      <span className="text-sm text-text-secondary">{post.author.name}</span>
                      <span className="text-text-tertiary">·</span>
                      <time className="text-sm text-text-tertiary">
                        {new Date(post.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="text-xl font-semibold group-hover:underline mb-2">{post.title}</h2>
                    {post.excerpt && (
                      <p className="text-text-secondary line-clamp-2">{post.excerpt}</p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
