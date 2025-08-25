// Relationship to category and search term mapping for hamper filtering

import { HampersApiParams } from "./hamper-api-types";

interface RelationshipMapping {
  category?: string;
  searchTerms: string[];
  fallbackCategory?: string;
}

// Map relationships to appropriate categories and search terms
const RELATIONSHIP_MAPPINGS: Record<string, RelationshipMapping> = {
  // Family Relations - Personal Category
  wife: {
    category: "personal",
    searchTerms: ["wife", "spouse", "romantic", "anniversary", "valentine", "couple"],
    fallbackCategory: "personal"
  },
  husband: {
    category: "personal",
    searchTerms: ["husband", "spouse", "romantic", "anniversary", "valentine", "couple"],
    fallbackCategory: "personal"
  },
  mom: {
    category: "personal",
    searchTerms: ["mother", "mom", "mummy", "mama", "family", "parent"],
    fallbackCategory: "personal"
  },
  dad: {
    category: "personal",
    searchTerms: ["father", "dad", "daddy", "papa", "family", "parent"],
    fallbackCategory: "personal"
  },
  parents: {
    category: "personal",
    searchTerms: ["parents", "family", "mother", "father", "home"],
    fallbackCategory: "personal"
  },
  sister: {
    category: "personal",
    searchTerms: ["sister", "sibling", "family", "rakhi", "rakshabandhan", "bhai dooj"],
    fallbackCategory: "personal"
  },
  brother: {
    category: "personal",
    searchTerms: ["brother", "sibling", "family", "rakhi", "rakshabandhan", "bhai dooj"],
    fallbackCategory: "personal"
  },
  girlfriend: {
    category: "personal",
    searchTerms: ["girlfriend", "romantic", "valentine", "anniversary", "couple"],
    fallbackCategory: "personal"
  },
  boyfriend: {
    category: "personal",
    searchTerms: ["boyfriend", "romantic", "valentine", "anniversary", "couple"],
    fallbackCategory: "personal"
  },
  friend: {
    category: "personal",
    searchTerms: ["friend", "friendship", "celebration", "birthday"],
    fallbackCategory: "personal"
  },

  // Professional Relations - Business Category
  boss: {
    category: "business",
    searchTerms: ["boss", "manager", "leader", "corporate", "professional", "executive"],
    fallbackCategory: "business"
  },
  colleague: {
    category: "business",
    searchTerms: ["colleague", "coworker", "team", "office", "corporate", "professional"],
    fallbackCategory: "business"
  },
  employee: {
    category: "business",
    searchTerms: ["employee", "staff", "team", "appreciation", "corporate"],
    fallbackCategory: "business"
  },
  client: {
    category: "business",
    searchTerms: ["client", "customer", "business", "corporate", "professional"],
    fallbackCategory: "business"
  }
};

/**
 * Get API parameters for relationship-based filtering
 */
export function getRelationshipApiParams(
  relationship: string,
  page: number = 1,
  pageSize: number = 25
): HampersApiParams {
  const mapping = RELATIONSHIP_MAPPINGS[relationship.toLowerCase()];

  if (!mapping) {
    // Fallback: search for the relationship term directly
    return {
      search: relationship,
      page,
      pageSize,
      isActive: true
    };
  }

  // Primary approach: Use category + search terms for better filtering
  const searchTerm = mapping.searchTerms.join(" ");

  return {
    category: mapping.category,
    search: searchTerm,
    page,
    pageSize,
    isActive: true
  };
}

/**
 * Get fallback API parameters if primary search doesn't yield results
 */
export function getRelationshipFallbackParams(
  relationship: string,
  page: number = 1,
  pageSize: number = 25
): HampersApiParams {
  const mapping = RELATIONSHIP_MAPPINGS[relationship.toLowerCase()];

  if (!mapping) {
    // Fallback to personal category for unknown relationships
    return {
      category: "personal",
      page,
      pageSize,
      isActive: true
    };
  }

  // Use just the category without search terms for broader results
  return {
    category: mapping.fallbackCategory || mapping.category,
    page,
    pageSize,
    isActive: true
  };
}

/**
 * Get all supported relationships
 */
export function getSupportedRelationships(): string[] {
  return Object.keys(RELATIONSHIP_MAPPINGS);
}

/**
 * Check if a relationship is supported
 */
export function isRelationshipSupported(relationship: string): boolean {
  return relationship.toLowerCase() in RELATIONSHIP_MAPPINGS;
}
