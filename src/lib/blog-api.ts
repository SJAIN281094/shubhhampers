// Blog API Functions

import {
  ApiBlogListResponse,
  ApiBlogDetailResponse,
  BlogPost,
  BlogApiParams,
  transformApiBlogPost,
  transformApiBlogList
} from "./blog-api-types";

// Helper function to get environment variables (server or client)
async function getBlogEnvVars() {
  // Check if we're on the server side
  if (typeof window === "undefined") {
    // Server-side: direct access
    return {
      BLOGS_API_BASE_URL: process.env.NEXT_PUBLIC_BLOGS_BASE_URL,
      BLOGS_TENANT_ID: process.env.NEXT_PUBLIC_BLOGS_TENANT_ID,
      BLOGS_DOMAIN_ID: process.env.NEXT_PUBLIC_BLOGS_DOMAIN_ID
    };
  }

  // Client-side: fetch from API
  try {
    const envKeys =
      "NEXT_PUBLIC_BLOGS_BASE_URL,NEXT_PUBLIC_BLOGS_TENANT_ID,NEXT_PUBLIC_BLOGS_DOMAIN_ID";
    const response = await fetch(`/api/env?keys=${envKeys}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch env vars: ${response.status}`);
    }

    const data = await response.json();
    return {
      BLOGS_API_BASE_URL: data.values?.NEXT_PUBLIC_BLOGS_BASE_URL,
      BLOGS_TENANT_ID: data.values?.NEXT_PUBLIC_BLOGS_TENANT_ID,
      BLOGS_DOMAIN_ID: data.values?.NEXT_PUBLIC_BLOGS_DOMAIN_ID
    };
  } catch {
    // Failed to get blog env vars from API, fallback to process.env
    return {
      BLOGS_API_BASE_URL: process.env.NEXT_PUBLIC_BLOGS_BASE_URL,
      BLOGS_TENANT_ID: process.env.NEXT_PUBLIC_BLOGS_TENANT_ID,
      BLOGS_DOMAIN_ID: process.env.NEXT_PUBLIC_BLOGS_DOMAIN_ID
    };
  }
}

type BlogEnvVars = {
  BLOGS_API_BASE_URL?: string;
  BLOGS_TENANT_ID?: string;
  BLOGS_DOMAIN_ID?: string;
};

// Helper function to build the articles API URL with short parameters
const buildArticlesUrl = (envVars: BlogEnvVars) => {
  return `${envVars.BLOGS_API_BASE_URL}/t/${envVars.BLOGS_TENANT_ID}/d/${envVars.BLOGS_DOMAIN_ID}/blogs`;
};

// Helper function to build single article URL by slug
const buildArticleUrl = (slug: string, envVars: BlogEnvVars) => {
  return `${envVars.BLOGS_API_BASE_URL}/t/${envVars.BLOGS_TENANT_ID}/d/${envVars.BLOGS_DOMAIN_ID}/blogs/${slug}`;
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
    // Get environment variables
    const envVars = await getBlogEnvVars();
    if (!envVars.BLOGS_API_BASE_URL || !envVars.BLOGS_TENANT_ID || !envVars.BLOGS_DOMAIN_ID) {
      throw new Error("Missing required blog environment variables");
    }

    const url = buildArticlesUrl(envVars);
    const fetchOptions: RequestInit = {
      headers: buildHeaders()
    };

    // Only add Next.js specific options on server-side
    if (typeof window === "undefined") {
      fetchOptions.next = {
        revalidate: 300, // Cache for 5 minutes
        tags: ["blog-posts"]
      };
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch blog posts: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data: ApiBlogListResponse = await response.json();
    return transformApiBlogList(data);
  } catch (error) {
    throw error;
  }
}

// Fetch single blog post by slug from new API
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Get environment variables
    const envVars = await getBlogEnvVars();
    if (!envVars.BLOGS_API_BASE_URL || !envVars.BLOGS_TENANT_ID || !envVars.BLOGS_DOMAIN_ID) {
      throw new Error("Missing required blog environment variables");
    }

    const url = buildArticleUrl(slug, envVars);
    const fetchOptions: RequestInit = {
      headers: buildHeaders()
    };

    // Only add Next.js specific options on server-side
    if (typeof window === "undefined") {
      fetchOptions.next = {
        revalidate: 300,
        tags: [`blog-post-${slug}`]
      };
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch blog post: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data: ApiBlogDetailResponse = await response.json();
    return transformApiBlogPost(data.article);
  } catch (error) {
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
  } catch {
    return [];
  }
}

// Generate all blog post slugs for static generation
export async function generateBlogSlugs(): Promise<string[]> {
  try {
    // Get environment variables
    const envVars = await getBlogEnvVars();
    if (!envVars.BLOGS_API_BASE_URL || !envVars.BLOGS_TENANT_ID || !envVars.BLOGS_DOMAIN_ID) {
      return [];
    }

    const url = buildArticlesUrl(envVars);
    const response = await fetch(url, {
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
    // Get environment variables
    const envVars = await getBlogEnvVars();
    if (!envVars.BLOGS_API_BASE_URL || !envVars.BLOGS_TENANT_ID || !envVars.BLOGS_DOMAIN_ID) {
      return [];
    }

    const url = buildArticlesUrl(envVars);
    const fetchOptions: RequestInit = {
      headers: buildHeaders()
    };

    // Only add Next.js specific options on server-side
    if (typeof window === "undefined") {
      fetchOptions.next = {
        revalidate: 300,
        tags: ["blog-search"]
      };
    }

    const response = await fetch(url, fetchOptions);

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
