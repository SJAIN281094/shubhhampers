import { fetchBlogPosts } from "@/lib/blog-api";
import { BlogApiParams } from "@/lib/blog-api-types";
import BlogListingClient from "./BlogListingClient";
import EmptyState from "./ui/EmptyState";

interface BlogListingServerProps {
  searchParams?: Promise<{
    page?: string;
    category?: string;
    tag?: string;
    search?: string;
  }>;
}

export default async function BlogListingServer({ searchParams }: BlogListingServerProps) {
  try {
    const params = await searchParams;

    // Parse search parameters
    const apiParams: BlogApiParams = {
      page: params?.page ? parseInt(params.page) : 1,
      pageSize: 9, // Show 9 posts per page
      category: params?.category,
      tag: params?.tag,
      search: params?.search
    };

    // Fetch data in parallel
    const blogData = await fetchBlogPosts(apiParams);

    if (!blogData.posts.length && Object.keys(params || {}).length === 0) {
      // No posts at all
      return (
        <EmptyState
          icon="📝"
          title="No Blog Posts Found"
          description="We're working on creating amazing content for you. Please check back soon!"
          actions={[
            {
              label: "Go to Home",
              href: "/",
              variant: "primary"
            }
          ]}
        />
      );
    }

    // Pass data to client component
    return <BlogListingClient />;
  } catch {
    // Error in BlogListingServer

    return (
      <EmptyState
        icon="⚠️"
        title="Unable to Load Blog Posts"
        description="We're experiencing technical difficulties. Please try again later."
        actions={[
          {
            label: "Refresh Page",
            href: "/blogs",
            variant: "primary"
          }
        ]}
      />
    );
  }
}
