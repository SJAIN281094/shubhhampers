import { notFound } from "next/navigation";
import { fetchBlogPost } from "@lib/blog-api";
import BlogDetailsClient from "./BlogDetailsClient";

interface BlogDetailsServerProps {
  slug: string;
}

export default async function BlogDetailsServer({ slug }: BlogDetailsServerProps) {
  // Fetch the blog post
  const post = await fetchBlogPost(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  // Fetch related posts in parallel (not used in current implementation)
  // const relatedPosts = await fetchRelatedBlogPosts(post.id, 3);

  // Increment view count (fire and forget)
  // incrementBlogViewCount(post.id).catch(error =>
  //   console.error("Failed to increment view count:", error)
  // );

  return <BlogDetailsClient post={post} />;
}
