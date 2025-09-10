// Blog API Functions

import {
  ApiBlogListResponse,
  ApiBlogDetailResponse,
  BlogPost,
  BlogApiParams,
  transformApiBlogPost,
  transformApiBlogList
} from "./blog-api-types";

const BLOGS_API_BASE_URL = process.env.NEXT_PUBLIC_BLOGS_BASE_URL;
const BLOGS_TENANT_ID = process.env.NEXT_PUBLIC_BLOGS_TENANT_ID;
const BLOGS_DOMAIN_ID = process.env.NEXT_PUBLIC_BLOGS_DOMAIN_ID;

// Helper function to build the articles API URL with short parameters
const buildArticlesUrl = () => {
  return `${BLOGS_API_BASE_URL}/t/${BLOGS_TENANT_ID}/d/${BLOGS_DOMAIN_ID}/blogs`;
};

// Helper function to build single article URL by slug
const buildArticleUrl = (slug: string) => {
  return `${BLOGS_API_BASE_URL}/t/${BLOGS_TENANT_ID}/d/${BLOGS_DOMAIN_ID}/blogs/${slug}`;
};

// Helper function to build headers for public API
const buildHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "*/*",
    "User-Agent": "Shubhhampers-Web/1.0"
  };
};

// Fetch blog posts from new API
export async function fetchBlogPosts(_params: BlogApiParams = {}): Promise<{
  posts: BlogPost[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}> {
  try {
    const response = await fetch(buildArticlesUrl(), {
      headers: buildHeaders(),
      next: {
        revalidate: 300, // Cache for 5 minutes
        tags: ["blog-posts"]
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Error: ${response.status} ${response.statusText}`, {
        url: buildArticlesUrl(),
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        body: errorText
      });
      throw new Error(
        `Failed to fetch blog posts: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data: ApiBlogListResponse = await response.json();
    return transformApiBlogList(data);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}

// Fetch single blog post by slug from new API
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(buildArticleUrl(slug), {
      headers: buildHeaders(),
      next: {
        revalidate: 300,
        tags: [`blog-post-${slug}`]
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      const errorText = await response.text();
      console.error(`API Error for slug ${slug}: ${response.status} ${response.statusText}`, {
        url: buildArticleUrl(slug),
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        body: errorText
      });
      throw new Error(
        `Failed to fetch blog post: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data: ApiBlogDetailResponse = await response.json();
    return transformApiBlogPost(data.article);
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
    const response = await fetch(buildArticlesUrl(), {
      headers: buildHeaders(),
      next: { tags: ["blog-slugs"] }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blog slugs");
    }

    const data: ApiBlogListResponse = await response.json();
    return data.articles.map(post => {
      // Generate slug from title if not provided
      return (
        post.slug ||
        post.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
      );
    });
  } catch {
    // Remove console.error to avoid build warnings
    return [];
  }
}

// Search blogs by keyword
export async function searchBlogs(query: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(buildArticlesUrl(), {
      headers: buildHeaders(),
      next: {
        revalidate: 300,
        tags: ["blog-search"]
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to search blogs: ${response.status} ${response.statusText}`);
    }

    const data: ApiBlogListResponse = await response.json();
    const filteredPosts = data.articles.filter(
      post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    return filteredPosts.map((post, index) => transformApiBlogPost(post, index));
  } catch {
    // Remove console.error to avoid build warnings
    return [];
  }
}
