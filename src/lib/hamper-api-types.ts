// API Response Types for Hamper API

export interface HamperImageFormat {
  url: string;
}

export interface HamperImage {
  id: number;
  documentId: string;
  name: string;
  caption: string | null;
  url: string;
  formats: {
    small?: HamperImageFormat;
    medium?: HamperImageFormat;
    large?: HamperImageFormat;
  };
}

export interface HamperAbout {
  id: number;
  title: string;
  subTitle: string | null;
  description: string;
  icon: string | null;
}

export interface HamperCategory {
  id: number;
  documentId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
}

export interface HamperSubCategory {
  id: number;
  documentId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
}

export interface HamperDelivery {
  id: number;
  title: string;
  subTitle: string | null;
  description: string;
  icon: string | null;
}

export interface HamperMinimumOrder {
  id: number;
  title: string;
  subTitle: string | null;
  description: string;
  icon: string | null;
}

export interface HamperBulkBenefit {
  id: number;
  title: string;
  subTitle: string | null;
  description: string;
  icon: string | null;
}

export interface HamperTag {
  id: number;
  text: string;
}

export interface HamperItem {
  id: number;
  documentId: string;
  name: string;
  description: string;
  price: number;
  image: HamperImage | null;
}

export interface HamperItemWithQuantity {
  id: number;
  documentId: string;
  quantity: number;
  item: HamperItem;
}

export interface ApiHamperProduct {
  id: number;
  documentId: string;
  basePrice: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  discount: number;
  discountedPrice: number;
  isActive: boolean;
  slug: string;
  title: string;
  subTitle: string | null;
  description: string;
  category: HamperCategory;
  subCategory: HamperSubCategory | null;
  delivery: HamperDelivery;
  minimumOrder: HamperMinimumOrder;
  bulkBenefit: HamperBulkBenefit;
  image: HamperImage[];
  hamperItems: HamperItemWithQuantity[];
  tags: HamperTag[];
}

export interface ApiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ApiHampersResponse {
  data: ApiHamperProduct[];
  meta: {
    pagination: ApiPagination;
  };
}

// API Request Parameters
export interface HampersApiParams {
  category?: string;
  subCategory?: string;
  page?: number;
  pageSize?: number;
  limit?: number;
  offset?: number;
  isActive?: boolean;
  search?: string; // For relationship-based and keyword searches
}

// Transformed types for UI components (matching your existing types)
export interface HamperProduct {
  id: string;
  documentId: string;
  slug: string;
  title: string;
  subtitle: string;
  priceRange: string;
  startingPrice: string;
  discountedPrice?: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  images: HamperImage[];
  description: string;
  features: string[];
  deliveryTime: string;
  deliveryTitle: string;
  minimumOrder: string;
  minimumOrderTitle: string;
  bulkBenefit: string;
  bulkBenefitTitle: string;
  bgColor: string;
  accentColor: string;
  category: string;
  subCategory?: string;
  categoryName?: string; // Legacy compatibility
  subCategoryName?: string; // Legacy compatibility
  backgroundImage?: string;
  textColor?: string;
  bgGradient?: string;
  hamperItems: HamperItemWithQuantity[];
  tags: HamperTag[];
  isActive: boolean;
}

export interface HamperPageData {
  pageTitle: string;
  pageSubtitle: string;
  heroTitle: string;
  heroDescription: string;
  seoDescription: string;
  products: HamperProduct[];
  category: string;
  subCategory?: string;
  pagination: ApiPagination;
}
