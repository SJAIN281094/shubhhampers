/**
 * URL utilities for hamper routes
 * Handles the new URL structure with modular approach
 */

// Route types
export type HamperRouteType = "category" | "subcategory" | "relation" | "product";

export interface HamperRouteParams {
  type: HamperRouteType;
  category?: string;
  subCategory?: string;
  relationship?: string;
  productSlug?: string;
}

export interface HamperPageData {
  title: string;
  description: string;
  apiParams: {
    category?: string;
    subCategory?: string;
  };
  breadcrumbs: Array<{
    label: string;
    href: string;
  }>;
}

/**
 * Parse hamper URL segments to determine route type and parameters
 */
export function parseHamperRoute(segments: string[]): HamperRouteParams | null {
  if (segments.length === 0) return null;

  // Handle /hampers/relation/gift-hamper-for-[relationship]
  if (segments[0] === "relation" && segments.length === 2) {
    const relationshipMatch = segments[1].match(/^gift-hamper-for-(.+)$/);
    if (relationshipMatch) {
      return {
        type: "relation",
        relationship: relationshipMatch[1]
      };
    }
  }

  // Handle /hampers/[category]-gift-hampers (category pages)
  if (segments.length === 1) {
    const categoryMatch = segments[0].match(/^(.+)-gift-hampers$/);
    if (categoryMatch) {
      return {
        type: "category",
        category: categoryMatch[1]
      };
    }
  }

  // Handle /hampers/[category]/[subCategory]-gift-hampers (subcategory pages)
  if (segments.length === 2) {
    // First segment should be just the category name (festival, wedding, etc.)
    // Second segment should be subcategory-gift-hampers
    const subCategoryMatch = segments[1].match(/^(.+)-gift-hampers$/);

    if (subCategoryMatch) {
      return {
        type: "subcategory",
        category: segments[0], // Just the category name
        subCategory: subCategoryMatch[1]
      };
    }
  }

  // Handle /hampers/[category]/[subCategory]/[slug] (product detail pages)
  if (segments.length === 3) {
    // First segment: category name (festival, wedding, etc.)
    // Second segment: subcategory name (diwali, bridal, etc.)
    // Third segment: product slug
    return {
      type: "product",
      category: segments[0],
      subCategory: segments[1],
      productSlug: segments[2]
    };
  }

  return null;
}

/**
 * Generate URL path from route parameters
 */
export function generateHamperPath(params: HamperRouteParams): string {
  switch (params.type) {
    case "category":
      return `/hampers/${params.category}-gift-hampers`;

    case "subcategory":
      return `/hampers/${params.category}/${params.subCategory}-gift-hampers`;

    case "product":
      return `/hampers/${params.category}/${params.subCategory}/${params.productSlug}`;

    case "relation":
      return `/hampers/relation/gift-hamper-for-${params.relationship}`;

    default:
      return "/hampers";
  }
}

/**
 * Get page data based on route parameters
 */
export function getHamperPageData(params: HamperRouteParams): HamperPageData {
  switch (params.type) {
    case "category": {
      const category = capitalizeWord(params.category!);
      return {
        title: `${category} Gift Hampers`,
        description: `Explore our curated collection of ${category.toLowerCase()} gift hampers`,
        apiParams: {
          category: category
        },
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Gift Hampers", href: "/hampers" },
          { label: `${category} Hampers`, href: generateHamperPath(params) }
        ]
      };
    }

    case "subcategory": {
      const category = capitalizeWord(params.category!);
      const subCategory = capitalizeWord(params.subCategory!);
      return {
        title: `${subCategory} ${category} Gift Hampers`,
        description: `Special ${subCategory.toLowerCase()} hampers for ${category.toLowerCase()} celebrations`,
        apiParams: {
          category: category,
          subCategory: subCategory
        },
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Gift Hampers", href: "/hampers" },
          {
            label: `${category} Hampers`,
            href: generateHamperPath({ type: "category", category: params.category })
          },
          { label: `${subCategory} Hampers`, href: generateHamperPath(params) }
        ]
      };
    }

    case "relation": {
      const relationship = capitalizeWord(params.relationship!);
      return {
        title: `Gift Hamper for ${relationship}`,
        description: `Thoughtful gift hampers specially curated for your ${relationship.toLowerCase()}`,
        apiParams: {
          // For relationship-based hampers, we might need special handling
          // This could be a custom filter or tag in the API
        },
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Gift Hampers", href: "/hampers" },
          { label: "Relationship Gifts", href: "/hampers/relation" },
          { label: `For ${relationship}`, href: generateHamperPath(params) }
        ]
      };
    }

    default:
      return {
        title: "Gift Hampers",
        description: "Explore our complete collection of gift hampers",
        apiParams: {},
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Gift Hampers", href: "/hampers" }
        ]
      };
  }
}

/**
 * Generate static paths for all possible hamper routes
 */
export function generateAllHamperPaths(): Array<{ params: string[] }> {
  const paths: Array<{ params: string[] }> = [];

  // Categories (from API or predefined list)
  const categories = ["festival", "wedding", "business", "personal"];

  // SubCategories by category
  const subCategories = {
    festival: ["diwali", "holi", "rakhi", "karva-chauth"],
    wedding: ["bridal", "engagement", "mehendi"],
    business: ["corporate", "employee", "client"],
    personal: ["anniversary", "birthday"]
  };

  // Relationships
  const relationships = [
    "sister",
    "brother",
    "husband",
    "wife",
    "mom",
    "dad",
    "parents",
    "boss",
    "colleague",
    "friend",
    "girlfriend",
    "boyfriend"
  ];

  // Generate category paths
  categories.forEach(category => {
    paths.push({ params: [`${category}-gift-hampers`] });
  });

  // Generate subcategory paths
  Object.entries(subCategories).forEach(([category, subs]) => {
    subs.forEach(subCategory => {
      paths.push({
        params: [category, `${subCategory}-gift-hampers`]
      });
    });
  });

  // Generate relationship paths
  relationships.forEach(relationship => {
    paths.push({
      params: ["relation", `gift-hamper-for-${relationship}`]
    });
  });

  return paths;
}

/**
 * Utility to capitalize first letter of a word
 */
function capitalizeWord(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Check if a route is valid hamper route
 */
export function isValidHamperRoute(segments: string[]): boolean {
  return parseHamperRoute(segments) !== null;
}

/**
 * Get SEO-friendly URL slug from category/subcategory
 */
export function createSlugFromCategory(category: string, subCategory?: string): string {
  const categorySlug = category.toLowerCase().replace(/\s+/g, "-");

  if (subCategory) {
    const subCategorySlug = subCategory.toLowerCase().replace(/\s+/g, "-");
    return `${categorySlug}/${subCategorySlug}-gift-hampers`;
  }

  return `${categorySlug}-gift-hampers`;
}

/**
 * Extract category and subcategory from URL slug
 */
export function extractCategoryFromSlug(slug: string): { category?: string; subCategory?: string } {
  const segments = slug.split("/");

  if (segments.length === 1) {
    // Category only: "festival-gift-hampers"
    const match = segments[0].match(/^(.+)-gift-hampers$/);
    return match ? { category: capitalizeWord(match[1]) } : {};
  }

  if (segments.length === 2) {
    // Category + SubCategory: "festival-gift-hampers/diwali-gift-hampers"
    const categoryMatch = segments[0].match(/^(.+)-gift-hampers$/);
    const subCategoryMatch = segments[1].match(/^(.+)-gift-hampers$/);

    if (categoryMatch && subCategoryMatch) {
      return {
        category: capitalizeWord(categoryMatch[1]),
        subCategory: capitalizeWord(subCategoryMatch[1])
      };
    }
  }

  return {};
}

/**
 * Generate product URL from API product data
 */
export function generateProductUrl(product: {
  slug: string;
  category: { name: string } | string;
  subCategory: { name: string } | string | null | undefined;
}): string {
  // Handle category as object or string
  const categoryName =
    typeof product.category === "string" ? product.category : product.category.name;

  // Handle subCategory as object, string, null, or undefined
  const subCategoryName = product.subCategory
    ? typeof product.subCategory === "string"
      ? product.subCategory
      : product.subCategory.name
    : null;

  if (!subCategoryName) {
    // If no subcategory, use a default or the category name
    return `/hampers/${categoryName.toLowerCase()}/${categoryName.toLowerCase()}/${product.slug}`;
  }

  return generateHamperPath({
    type: "product",
    category: categoryName.toLowerCase(),
    subCategory: subCategoryName.toLowerCase(),
    productSlug: product.slug
  });
}
