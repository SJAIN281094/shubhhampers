/**
 * Application Configuration Constants
 * Centralized configuration for app-wide settings, constants, and configuration values
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: "https://admin.shubhhampers.com/api",
  TIMEOUT: 10000,
  DEFAULT_PAGE_SIZE: 25,
  MAX_PAGE_SIZE: 100
} as const;

// App Information
export const APP_INFO = {
  name: "Shubhhampers",
  version: "1.0.0",
  description: "Curated gift hampers for corporate clients, weddings & festivals",
  url: "https://www.shubhhampers.com",
  buildYear: "2025"
} as const;

// SEO & Meta Configuration
export const SEO_CONFIG = {
  defaultTitle: "Curated Gift Hampers & Baskets | Shubhhampers",
  titleTemplate: "%s | Shubhhampers",
  defaultDescription:
    "Curated gift hampers for corporate clients, weddings & festivals. Custom curated baskets that build meaningful relationships. Order today!",
  keywords: [
    // Core Hamper Keywords
    "Shubhhampers",
    "Curated Hampers",
    "Hamper Delivery",
    "Custom Hampers",
    "Luxury Hampers",
    "Corporate Hampers",
    "Wedding Hampers",
    "Festival Hampers",
    "Personal Hampers",
    "Business Hampers"
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shubhhampers",
    url: "https://www.shubhhampers.com",
    logo: "https://www.shubhhampers.com/logo-dark.png",
    description:
      "Curated hamper service specializing in corporate hampers, wedding hampers, and festival celebrations"
  }
} as const;

// UI Configuration
export const UI_CONFIG = {
  // Animation durations
  animations: {
    fast: 200,
    normal: 300,
    slow: 500
  },

  // Breakpoints (matching Tailwind)
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  },

  // Component sizes
  sizes: {
    headerHeight: 64,
    mobileMenuWidth: 280,
    cardMinHeight: 400,
    buttonHeight: {
      sm: 32,
      md: 40,
      lg: 48
    }
  },

  // Common z-index values
  zIndex: {
    dropdown: 50,
    modal: 100,
    toast: 200,
    overlay: 500
  }
} as const;

// Business Rules & Limits
export const BUSINESS_CONFIG = {
  hampers: {
    featuresDisplayLimit: 4,
    imageQuality: 85,
    thumbnailSize: 64
  },

  forms: {
    maxMessageLength: 1000,
    maxNameLength: 100,
    maxEmailLength: 255
  },

  pagination: {
    defaultPageSize: 25,
    maxPageSize: 100,
    showPagesAround: 2
  }
} as const;

// Feature Flags
export const FEATURE_FLAGS = {
  enableAnalytics: process.env.NEXT_PUBLIC_ENV === "production",
  enableErrorReporting: process.env.NEXT_PUBLIC_ENV === "production",
  enableDevTools: process.env.NODE_ENV === "development",
  enableWhatsAppIntegration: true,
  enableInstagramGallery: true,
  enableBlogSection: true
} as const;

// Environment Configuration
export const ENV_CONFIG = {
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
  appEnv: process.env.NEXT_PUBLIC_ENV || "development"
} as const;

// Default Messages & Text
export const DEFAULT_MESSAGES = {
  whatsapp: {
    default: "Hello, I'm interested in your hamper services",
    inquiry: (title: string) =>
      `Hello! I'm interested in ${title} gift hampers. Could you help me with more details?`,
    contact: "Hi! I'd like to know more about your hamper services.",
    business: "Hello! I'm interested in corporate hamper solutions for my business."
  },

  errors: {
    networkError: "Network error occurred. Please try again.",
    notFound: "The requested item could not be found.",
    serverError: "Server error occurred. Please try again later.",
    validationError: "Please check your input and try again."
  },

  loading: {
    default: "Loading...",
    hampers: "Loading hampers...",
    submitting: "Submitting...",
    processing: "Processing..."
  }
} as const;

// External Services
export const EXTERNAL_SERVICES = {
  analytics: {
    googleTagManager: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER,
    googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  },

  storage: {
    s3BaseUrl: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images"
  },

  maps: {
    // Future: Google Maps API key if needed
  }
} as const;

// Export all configs as a single object for convenience
export const APP_CONFIG = {
  api: API_CONFIG,
  app: APP_INFO,
  seo: SEO_CONFIG,
  ui: UI_CONFIG,
  business: BUSINESS_CONFIG,
  features: FEATURE_FLAGS,
  env: ENV_CONFIG,
  messages: DEFAULT_MESSAGES,
  external: EXTERNAL_SERVICES
} as const;

// Type exports for consumers
export type ApiConfig = typeof API_CONFIG;
export type UIConfig = typeof UI_CONFIG;
export type BusinessConfig = typeof BUSINESS_CONFIG;
export type FeatureFlags = typeof FEATURE_FLAGS;
