// Blog API Functions

import {
  ApiBlogListResponse,
  ApiBlogDetailResponse,
  BlogPost,
  BlogApiParams,
  transformApiBlogPost
} from "./blog-api-types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || "http://localhost:1337";

// Fetch blog posts - simplified to just get all data
export async function fetchBlogPosts(_params: BlogApiParams = {}): Promise<{
  posts: BlogPost[];
  pagination: null;
}> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blog-posts`, {
      headers: {
        "Content-Type": "application/json"
      },
      next: {
        revalidate: 300, // Cache for 5 minutes
        tags: ["blog-posts"]
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`);
    }

    const data: ApiBlogListResponse = await response.json();
    return {
      posts: data.data.map(transformApiBlogPost),
      pagination: null
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}

// Fetch single blog post by slug using direct endpoint
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blog-posts/${slug}`, {
      headers: {
        "Content-Type": "application/json"
      },
      next: {
        revalidate: 300,
        tags: [`blog-post-${slug}`]
      }
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Failed to fetch blog post: ${response.status} ${response.statusText}`);
    }

    const data: ApiBlogDetailResponse = await response.json();
    return transformApiBlogPost(data.data);
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    throw error;
  }
}

// Fetch related blog posts - simplified
export async function fetchRelatedBlogPosts(
  _currentPostId: string,
  _limit: number = 3
): Promise<BlogPost[]> {
  try {
    // For now, just return empty array since we don't have category/tag filtering
    // You can implement this later if needed
    return [];
  } catch (error) {
    console.error("Error fetching related blog posts:", error);
    return [];
  }
}

// Generate all blog post slugs for static generation
export async function generateBlogSlugs(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blog-posts`, {
      headers: {
        "Content-Type": "application/json"
      },
      next: { tags: ["blog-slugs"] }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blog slugs");
    }

    const data: ApiBlogListResponse = await response.json();
    return data.data.map(post => post.attributes.slug);
  } catch {
    // Remove console.error to avoid build warnings
    return [];
  }
}

// Search blogs by keyword
export async function searchBlogs(query: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/blog-posts?search=${encodeURIComponent(query)}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        next: {
          revalidate: 300,
          tags: ["blog-search"]
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to search blogs: ${response.status} ${response.statusText}`);
    }

    const data: ApiBlogListResponse = await response.json();
    return data.data.map(transformApiBlogPost);
  } catch {
    // Remove console.error to avoid build warnings
    return [];
  }
}
