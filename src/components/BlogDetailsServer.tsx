import { notFound } from "next/navigation";
import { fetchBlogPost } from "@/lib/blog-api";
import BlogDetailsClient from "./BlogDetailsClient";
import EmptyState from "./ui/EmptyState";

interface BlogDetailsServerProps {
  slug: string;
}

export default async function BlogDetailsServer({ slug }: BlogDetailsServerProps) {
  try {
    // Fetch the blog post
    const post = await fetchBlogPost(slug);

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
  } catch {
    // Error in BlogDetailsServer

    return (
      <div className="container mx-auto px-4 py-16">
        <EmptyState
          icon="⚠️"
          title="Unable to Load Blog Post"
          description="We're experiencing technical difficulties. Please try again later."
          actions={[
            {
              label: "Go to Blogs",
              href: "/blogs",
              variant: "primary"
            }
          ]}
        />
      </div>
    );
  }
}
