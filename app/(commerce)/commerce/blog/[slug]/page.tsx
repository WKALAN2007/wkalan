import { blogPosts } from "@/03_Engineering_System/commerce/data/products";
import { BlogPostClient } from "./BlogPostClient";

export function generateStaticParams() {
  return blogPosts.map((_, i) => ({ slug: `post-${i + 1}` }));
}

export default function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  return <BlogPostClient params={params} />;
}
