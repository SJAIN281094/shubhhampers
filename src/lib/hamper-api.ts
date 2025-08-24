import axios from "axios";
import type {
  ApiHampersResponse,
  ApiHamperProduct,
  HampersApiParams,
  HamperProduct,
  HamperPageData
} from "./hamper-api-types";
import { getApiParamsFromSlug } from "./hamper-slug-mapping";

// Base API configuration
const API_BASE_URL = "https://admin.shubhhampers.com/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

// Add request interceptor for logging in development
apiClient.interceptors.request.use(
  config => {
    // Remove console logging to avoid build warnings
    return config;
  },
  error => Promise.reject(error)
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle errors without console logging to avoid build warnings
    return Promise.reject(error);
  }
);

/**
 * Transform API hamper data to UI-friendly format
 */
function transformApiHamperToUI(apiHamper: ApiHamperProduct): HamperProduct {
  const mainImage = apiHamper.image?.[0]?.url || "/images/hamper-placeholder.jpg";
  const categoryName = apiHamper.category.name;
  const subCategoryName = apiHamper.subCategory?.name;

  // Generate features from hamper items
  const features = apiHamper.hamperItems.map(item => `${item.quantity}x ${item.item.name}`);

  // Calculate price display
  const startingPrice = `₹${apiHamper.discountedPrice.toLocaleString()}`;
  const originalPrice = apiHamper.discount > 0 ? `₹${apiHamper.basePrice.toLocaleString()}` : "";
  const priceRange =
    apiHamper.discount > 0
      ? `₹${apiHamper.discountedPrice.toLocaleString()} - ₹${apiHamper.basePrice.toLocaleString()}`
      : startingPrice;

  // Generate colors based on category
  const categoryColors = {
    Festival: { bgColor: "#FFF7ED", accentColor: "#F97316", textColor: "#9A3412" },
    Wedding: { bgColor: "#FDF2F8", accentColor: "#EC4899", textColor: "#BE185D" },
    Business: { bgColor: "#F0F9FF", accentColor: "#0EA5E9", textColor: "#0C4A6E" },
    Personal: { bgColor: "#F0FDF4", accentColor: "#22C55E", textColor: "#15803D" }
  };

  const colors =
    categoryColors[categoryName as keyof typeof categoryColors] || categoryColors.Personal;

  return {
    id: apiHamper.id.toString(),
    documentId: apiHamper.documentId,
    slug: apiHamper.slug,
    title: apiHamper.title,
    subtitle: apiHamper.subTitle || "",
    priceRange,
    startingPrice,
    discountedPrice: apiHamper.discount > 0 ? startingPrice : undefined,
    originalPrice: originalPrice || undefined,
    discount: apiHamper.discount > 0 ? `₹${apiHamper.discount} OFF` : undefined,
    image: mainImage,
    description: apiHamper.description,
    features,
    deliveryTime: apiHamper.delivery.description,
    minimumOrder: apiHamper.minimumOrder.description,
    bulkBenefit: apiHamper.bulkBenefit.description,
    bgColor: colors.bgColor,
    accentColor: colors.accentColor,
    textColor: colors.textColor,
    category: categoryName,
    subCategory: subCategoryName || undefined,
    categoryName,
    subCategoryName,
    backgroundImage: mainImage,
    hamperItems: apiHamper.hamperItems,
    images: apiHamper.image,
    isActive: apiHamper.isActive
  };
}

/**
 * Fetch hampers from API
 */
export async function fetchHampers(params: HampersApiParams = {}): Promise<ApiHampersResponse> {
  try {
    const queryParams = {
      page: params.page || 1,
      pageSize: params.pageSize || 25,
      ...(params.category && { category: params.category }),
      ...(params.subCategory && { subCategory: params.subCategory }),
      ...(params.search && { search: params.search }),
      ...(params.isActive !== undefined && { isActive: params.isActive })
    };

    const response = await apiClient.get<ApiHampersResponse>("/hampers", {
      params: queryParams
    });

    return response.data;
  } catch {
    throw new Error("Failed to fetch hampers");
  }
}

/**
 * Fetch hamper page data by slug for SSR
 */
export async function getHamperPageDataBySlug(
  slug: string,
  page: number = 1,
  pageSize: number = 25
): Promise<HamperPageData | null> {
  try {
    const slugMapping = getApiParamsFromSlug(slug);

    if (!slugMapping) {
      return null;
    }

    const apiResponse = await fetchHampers({
      category: slugMapping.category,
      subCategory: slugMapping.subCategory || undefined,
      page,
      pageSize,
      isActive: true
    });

    // Transform API products to UI format
    const products = apiResponse.data.map(transformApiHamperToUI);

    const pageData: HamperPageData = {
      pageTitle: slugMapping.title,
      pageSubtitle:
        slugMapping.category + (slugMapping.subCategory ? ` - ${slugMapping.subCategory}` : ""),
      heroTitle: slugMapping.title,
      heroDescription: slugMapping.description,
      seoDescription: `${slugMapping.description} - Premium quality hampers curated by Shubhhampers`,
      products,
      category: slugMapping.category,
      subCategory: slugMapping.subCategory || undefined,
      pagination: apiResponse.meta.pagination
    };

    return pageData;
  } catch {
    return null;
  }
}

/**
 * Fetch individual hamper by ID
 */
export async function fetchHamperById(id: string): Promise<HamperProduct | null> {
  try {
    const response = await apiClient.get<{ data: ApiHamperProduct }>(`/hampers/${id}`, {
      params: { populate: "deep" }
    });

    return transformApiHamperToUI(response.data.data);
  } catch {
    return null;
  }
}

/**
 * Get all categories for navigation
 */
export async function fetchHamperCategories(): Promise<string[]> {
  try {
    const response = await apiClient.get("/hampers", {
      params: {
        "fields[0]": "id",
        "populate[category][fields][0]": "name",
        pageSize: 100
      }
    });

    const categories = new Set<string>();
    response.data.data.forEach((hamper: ApiHamperProduct) => {
      if (hamper.category?.name) {
        categories.add(hamper.category.name);
      }
    });

    return Array.from(categories);
  } catch {
    return [];
  }
}

/**
 * Search hampers by query
 */
export async function searchHampers(
  query: string,
  category?: string,
  page: number = 1,
  pageSize: number = 25
): Promise<ApiHampersResponse> {
  try {
    const queryParams = {
      page,
      pageSize,
      ...(category && { category: category })
    };

    const response = await apiClient.get<ApiHampersResponse>("/hampers", {
      params: queryParams
    });

    return response.data;
  } catch {
    throw new Error("Failed to search hampers");
  }
}

/**
 * Fetch hamper by slug
 */
export async function fetchHamperBySlug(slug: string): Promise<HamperProduct | null> {
  try {
    const response = await apiClient.get(`/hampers?slug=${encodeURIComponent(slug)}`);

    if (response.data?.data && response.data.data.length > 0) {
      return transformApiHamperToUI(response.data.data[0]);
    }

    return null;
  } catch (error) {
    throw error;
  }
}

// Export for testing and debugging
export { apiClient, transformApiHamperToUI };
