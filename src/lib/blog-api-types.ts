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
  documentId: string;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content?: string;
    readTime?: number;
    isPublished?: boolean;
    isFeatured?: boolean;
    viewCount?: number;
    publishedAt?: string;
    updatedAt: string;
    featuredImage: {
      url: string;
      formats?: {
        large?: { url: string };
        medium?: { url: string };
        small?: { url: string };
        thumbnail?: { url: string };
      };
    };
    tags: string; // API returns comma-separated string
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

  // Parse tags from API response - API returns tags as comma-separated string
  const tagsString = apiPost.attributes.tags || "";
  const tags = tagsString
    .split(",")
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0)
    .map(tag => ({
      name: tag,
      slug: tag.toLowerCase().replace(/\s+/g, "-"),
      color: "#8B4513"
    }));

  // Handle image data - API returns featuredImage.url directly
  const featuredImageUrl = apiPost.attributes.featuredImage?.url || "";

  return {
    id: id.toString(),
    title: apiPost.attributes.title,
    slug: apiPost.attributes.slug,
    excerpt: apiPost.attributes.excerpt,
    content: apiPost.attributes.content || apiPost.attributes.excerpt || "",
    author: {
      name: "Shubhhampers Team", // Default since API doesn't have author
      bio: undefined,
      avatar: undefined,
      socialLinks: undefined
    },
    publishedAt:
      apiPost.attributes.publishedAt || apiPost.attributes.updatedAt || new Date().toISOString(),
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
    readTime: apiPost.attributes.readTime || 5,
    isPublished: true, // Default to published since API doesn't have this field
    isFeatured: false, // Default to not featured
    viewCount: 0, // Default to 0 since API doesn't have this field
    seo: {
      title: apiPost.attributes.title,
      description: apiPost.attributes.excerpt,
      keywords: tags.map(tag => tag.name),
      ogTitle: apiPost.attributes.title,
      ogDescription: apiPost.attributes.excerpt,
      ogImage: featuredImageUrl,
      twitterTitle: apiPost.attributes.title,
      twitterDescription: apiPost.attributes.excerpt,
      canonicalUrl: undefined,
      noIndex: false
    },
    socialSharing: {
      enableSharing: true,
      shareText: apiPost.attributes.excerpt,
      platforms: ["facebook", "twitter", "linkedin", "whatsapp"]
    }
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
