// Slug to API parameter mapping for hamper categories and subcategories
export const SLUG_TO_API_MAPPING = {
  // Category only - Main categories
  "festival-gift-hampers": {
    category: "Festival",
    subCategory: null,
    title: "Festival Gift Hampers",
    description: "Celebrate every festival with our specially curated hampers"
  },
  "wedding-gift-hampers": {
    category: "Wedding",
    subCategory: null,
    title: "Wedding Gift Hampers",
    description: "Perfect wedding gifts for the special day"
  },
  "business-gift-hampers": {
    category: "Business",
    subCategory: null,
    title: "Business Gift Hampers",
    description: "Professional gifting solutions for corporate needs"
  },
  "personal-gift-hampers": {
    category: "Personal",
    subCategory: null,
    title: "Personal Gift Hampers",
    description: "Thoughtful personal gifts for your loved ones"
  },

  // Subcategory + Category - Festival subcategories
  "diwali-festival-gift-hampers": {
    category: "Festival",
    subCategory: "Diwali",
    title: "Diwali Festival Gift Hampers",
    description: "Traditional Diwali hampers with sweets, dry fruits and festive items"
  },
  "holi-festival-gift-hampers": {
    category: "Festival",
    subCategory: "Holi",
    title: "Holi Festival Gift Hampers",
    description: "Colorful Holi celebration hampers with organic colors and sweets"
  },
  "rakhi-festival-gift-hampers": {
    category: "Festival",
    subCategory: "Rakhi",
    title: "Rakhi Festival Gift Hampers",
    description: "Special Rakhi hampers for brother-sister celebration"
  },
  "karva-chauth-festival-gift-hampers": {
    category: "Festival",
    subCategory: "Karva Chauth",
    title: "Karva Chauth Festival Gift Hampers",
    description: "Traditional Karva Chauth hampers for the special occasion"
  },

  // Business subcategories
  "corporate-business-gift-hampers": {
    category: "Business",
    subCategory: "Corporate",
    title: "Corporate Business Gift Hampers",
    description: "Professional corporate gifts for business relationships"
  },
  "employee-business-gift-hampers": {
    category: "Business",
    subCategory: "Employee",
    title: "Employee Business Gift Hampers",
    description: "Employee appreciation and recognition hampers"
  },
  "client-business-gift-hampers": {
    category: "Business",
    subCategory: "Client",
    title: "Client Business Gift Hampers",
    description: "Premium client gifts to strengthen business relationships"
  },

  // Wedding subcategories
  "bridal-wedding-gift-hampers": {
    category: "Wedding",
    subCategory: "Bridal",
    title: "Bridal Wedding Gift Hampers",
    description: "Special bridal hampers for the bride-to-be"
  },
  "engagement-wedding-gift-hampers": {
    category: "Wedding",
    subCategory: "Engagement",
    title: "Engagement Wedding Gift Hampers",
    description: "Beautiful engagement ceremony hampers"
  },
  "mehendi-wedding-gift-hampers": {
    category: "Wedding",
    subCategory: "Mehendi",
    title: "Mehendi Wedding Gift Hampers",
    description: "Colorful mehendi ceremony celebration hampers"
  }
} as const;

// Type for slug mapping
export type SlugMapping = typeof SLUG_TO_API_MAPPING;
export type HamperSlug = keyof SlugMapping;

// Reverse mapping for generating URLs from API data
export const API_TO_SLUG_MAPPING = Object.fromEntries(
  Object.entries(SLUG_TO_API_MAPPING).map(([slug, params]) => {
    const key = params.subCategory ? `${params.category}-${params.subCategory}` : params.category;
    return [key, slug];
  })
);

/**
 * Get API parameters from URL slug
 */
export function getApiParamsFromSlug(slug: string) {
  return SLUG_TO_API_MAPPING[slug as HamperSlug] || null;
}

/**
 * Get URL slug from API parameters
 */
export function getSlugFromApiParams(category: string, subCategory?: string | null) {
  const key = subCategory ? `${category}-${subCategory}` : category;
  return API_TO_SLUG_MAPPING[key] || null;
}

/**
 * Get all available slugs for static generation
 */
export function getAllHamperSlugs(): string[] {
  return Object.keys(SLUG_TO_API_MAPPING);
}

/**
 * Check if a slug is valid
 */
export function isValidHamperSlug(slug: string): slug is HamperSlug {
  return slug in SLUG_TO_API_MAPPING;
}
