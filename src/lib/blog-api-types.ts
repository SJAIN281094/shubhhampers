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
  featuredImageUrl: string;
  createdAt: string;
  readTime: number;
  title: string;
  excerpt: string;
  tags: string[];
  // Optional fields that might be available in detailed view
  id?: string;
  category?: {
    id: string;
    name: string;
    slug: string;
    description: string;
    basePath: string;
    createdAt: string;
    updatedAt: string;
  };
  author?: null | {
    id: string;
    name: string;
    email?: string;
    bio?: string;
    avatar?: string;
  };
  slug?: string;
  status?: string;
  publishedAt?: string | null;
  content?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  viewCount?: number;
  isFeatured?: boolean;
  canonicalUrl?: string;
  noindex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogImageUrl?: string;
  structuredData?: string;
  updatedAt?: string;
}

// New API Response Structure
export interface ApiPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface ApiDomain {
  id: string;
  name: string;
  hostname: string;
}

export interface ApiTenant {
  id: string;
  name: string;
}

export interface ApiBlogListResponse {
  articles: ApiBlogPost[];
  pagination: ApiPagination;
  domain: ApiDomain;
  tenant: ApiTenant;
}

export interface ApiBlogDetailResponse {
  article: ApiBlogPost & {
    id: string;
    slug: string;
    content: string;
    publishedAt: string;
    updatedAt: string;
    seoTitle?: string;
    seoDescription?: string;
    canonicalUrl?: string;
  };
  domain: ApiDomain;
  tenant: ApiTenant;
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
export function transformApiBlogPost(apiPost: ApiBlogPost, index?: number): BlogPost {
  // Generate a slug from title if not provided
  const slug =
    apiPost.slug ||
    apiPost.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // Generate an ID if not provided (use index or timestamp)
  const id = apiPost.id || `blog-${index || Date.now()}`;

  // Parse tags from API response - new API returns tags as array
  const tags = apiPost.tags.map(tag => ({
    name: tag,
    slug: tag.toLowerCase().replace(/\s+/g, "-"),
    color: "#8B4513"
  }));

  // Handle image data - new API returns featuredImageUrl directly
  const featuredImageUrl = apiPost.featuredImageUrl || "";

  return {
    id: id,
    title: apiPost.title,
    slug: slug,
    excerpt: apiPost.excerpt,
    content: apiPost.content || apiPost.excerpt || "",
    author: {
      name: apiPost.author?.name || "Shubhhampers Team",
      bio: apiPost.author?.bio,
      avatar: apiPost.author?.avatar,
      socialLinks: undefined
    },
    publishedAt: apiPost.publishedAt || apiPost.createdAt || new Date().toISOString(),
    updatedAt: apiPost.updatedAt,
    category: {
      name: apiPost.category?.name || "General",
      slug: apiPost.category?.slug || "general",
      color: "#8B4513",
      icon: undefined
    },
    tags: tags,
    featuredImage: featuredImageUrl,
    gallery: [],
    readTime: apiPost.readTime || 5,
    isPublished: apiPost.status === "published" || true, // Default to published for listing
    isFeatured: apiPost.isFeatured || false,
    viewCount: apiPost.viewCount || 0,
    seo: {
      title: apiPost.seoTitle || apiPost.title,
      description: apiPost.seoDescription || apiPost.excerpt,
      keywords: apiPost.seoKeywords
        ? apiPost.seoKeywords.split(",").map(k => k.trim())
        : tags.map(tag => tag.name),
      ogTitle: apiPost.ogTitle || apiPost.title,
      ogDescription: apiPost.ogDescription || apiPost.excerpt,
      ogImage: apiPost.ogImageUrl || featuredImageUrl,
      twitterTitle: apiPost.ogTitle || apiPost.title,
      twitterDescription: apiPost.ogDescription || apiPost.excerpt,
      canonicalUrl: apiPost.canonicalUrl,
      noIndex: apiPost.noindex || false
    },
    socialSharing: {
      enableSharing: true,
      shareText: apiPost.excerpt,
      platforms: ["facebook", "twitter", "linkedin", "whatsapp"]
    }
  };
}

export function transformApiBlogList(apiResponse: ApiBlogListResponse): {
  posts: BlogPost[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
} {
  return {
    posts: apiResponse.articles.map((post, index) => transformApiBlogPost(post, index)),
    pagination: {
      page: apiResponse.pagination.page,
      pageSize: apiResponse.pagination.limit,
      pageCount: apiResponse.pagination.totalPages,
      total: apiResponse.pagination.total
    }
  };
}
