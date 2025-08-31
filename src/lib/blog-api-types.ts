// API Response Types for Blog API (CMS Integration)

export interface BlogImageFormat {
  url: string;
  width?: number;
  height?: number;
}

export interface BlogImage {
  id: number;
  attributes: {
    url: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: {
      small?: BlogImageFormat;
      medium?: BlogImageFormat;
      large?: BlogImageFormat;
    };
  };
}

export interface BlogAuthor {
  id: number;
  attributes: {
    name: string;
    slug: string;
    bio?: string;
    email?: string;
    avatar?: {
      data: BlogImage | null;
    };
    socialLinks?: {
      twitter?: string;
      linkedin?: string;
      instagram?: string;
      website?: string;
    };
    isActive: boolean;
  };
}

export interface BlogCategory {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description?: string;
    color: string;
    icon?: string;
    featuredImage?: {
      data: BlogImage | null;
    };
    isActive: boolean;
    sortOrder: number;
  };
}

export interface BlogTag {
  id: number;
  attributes: {
    name: string;
    slug: string;
    color?: string;
    isActive: boolean;
  };
}

export interface BlogSEO {
  id?: number;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: {
    data: BlogImage | null;
  };
  twitterTitle?: string;
  twitterDescription?: string;
  noIndex?: boolean;
}

export interface BlogSocialSharing {
  id?: number;
  enableSharing: boolean;
  shareText?: string;
  platforms: string[];
}

export interface ApiBlogPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: {
      data: BlogImage | null;
    };
    gallery?: {
      data: BlogImage[];
    };
    author: {
      data: BlogAuthor;
    };
    category: {
      data: BlogCategory;
    };
    tags: {
      data: BlogTag[];
    };
    readTime: number;
    publishedAt: string;
    updatedAt: string;
    isPublished: boolean;
    isFeatured: boolean;
    viewCount: number;
    seo: BlogSEO;
    socialSharing?: BlogSocialSharing;
  };
}

export interface ApiBlogListResponse {
  data: ApiBlogPost[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ApiBlogDetailResponse {
  data: ApiBlogPost;
}

// Transformed types for UI components (backward compatibility)
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    bio?: string;
    avatar?: string;
    socialLinks?: {
      twitter?: string;
      linkedin?: string;
      instagram?: string;
      website?: string;
    };
  };
  publishedAt: string;
  updatedAt?: string;
  category: {
    name: string;
    slug: string;
    color: string;
    icon?: string;
  };
  tags: {
    name: string;
    slug: string;
    color?: string;
  }[];
  featuredImage: string;
  gallery?: string[];
  readTime: number;
  isPublished: boolean;
  isFeatured: boolean;
  viewCount: number;
  seo: {
    title?: string;
    description?: string;
    keywords: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
  };
  socialSharing?: {
    enableSharing: boolean;
    shareText?: string;
    platforms: string[];
  };
}

// API Request Parameters
export interface BlogApiParams {
  page?: number;
  pageSize?: number;
  category?: string;
  tag?: string;
  author?: string;
  search?: string;
  featured?: boolean;
  sort?: string;
  populate?: string;
}

// Transform functions
export function transformApiBlogPost(apiPost: ApiBlogPost): BlogPost {
  const { id } = apiPost;

  // Parse tags from API response
  const tags =
    apiPost.attributes.tags?.data?.map(tag => ({
      name: tag.attributes.name,
      slug: tag.attributes.slug,
      color: tag.attributes.color || "#8B4513"
    })) || [];

  // Handle image data - the API returns image object with url property
  const featuredImageUrl = apiPost.attributes.featuredImage?.data?.attributes?.url || "";

  return {
    id: id.toString(),
    title: apiPost.attributes.title,
    slug: apiPost.attributes.slug,
    excerpt: apiPost.attributes.excerpt,
    content: apiPost.attributes.content || apiPost.attributes.excerpt,
    author: {
      name: "Shubhhampers Team", // Default since API doesn't have author
      bio: undefined,
      avatar: undefined,
      socialLinks: undefined
    },
    publishedAt: apiPost.attributes.publishedAt || apiPost.attributes.updatedAt,
    updatedAt: apiPost.attributes.updatedAt,
    category: {
      name: "General", // Default since API doesn't have category
      slug: "general",
      color: "#8B4513",
      icon: undefined
    },
    tags,
    featuredImage: featuredImageUrl,
    gallery: [],
    readTime: apiPost.attributes.readTime,
    isPublished: apiPost.attributes.isPublished !== false,
    isFeatured: apiPost.attributes.isFeatured || false,
    viewCount: apiPost.attributes.viewCount || 0,
    seo: {
      title: apiPost.attributes.seo?.metaTitle || apiPost.attributes.title,
      description: apiPost.attributes.seo?.metaDescription || apiPost.attributes.excerpt,
      keywords:
        apiPost.attributes.seo?.keywords?.split(",").map(k => k.trim()) ||
        tags.map(tag => tag.name),
      ogTitle: apiPost.attributes.seo?.ogTitle || apiPost.attributes.title,
      ogDescription: apiPost.attributes.seo?.ogDescription || apiPost.attributes.excerpt,
      ogImage: apiPost.attributes.seo?.ogImage?.data?.attributes?.url || featuredImageUrl,
      twitterTitle: apiPost.attributes.seo?.twitterTitle || apiPost.attributes.title,
      twitterDescription: apiPost.attributes.seo?.twitterDescription || apiPost.attributes.excerpt,
      canonicalUrl: apiPost.attributes.seo?.canonicalUrl,
      noIndex: apiPost.attributes.seo?.noIndex || false
    },
    socialSharing: apiPost.attributes.socialSharing
      ? {
          enableSharing: apiPost.attributes.socialSharing.enableSharing,
          shareText: apiPost.attributes.socialSharing.shareText,
          platforms: apiPost.attributes.socialSharing.platforms
        }
      : undefined
  };
}

export function transformApiBlogList(apiResponse: ApiBlogListResponse): {
  posts: BlogPost[];
  pagination: ApiBlogListResponse["meta"]["pagination"];
} {
  return {
    posts: apiResponse.data.map(transformApiBlogPost),
    pagination: apiResponse.meta.pagination
  };
}
