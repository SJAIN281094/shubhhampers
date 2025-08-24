/**
 * Home Page API Functions
 */

import { HomePageApiResponse, HeroBanner, TransformedHeroSlide } from "./home-api-types";

const API_BASE_URL = "https://admin.shubhhampers.com/api";

/**
 * Fetch home page data from API
 */
export async function fetchHomePageData(): Promise<HomePageApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/home-page`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      // Cache for 5 minutes, revalidate in background
      next: {
        revalidate: 300,
        tags: ["home-page"]
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: HomePageApiResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Transform API banner data to format expected by HeroSlider
 */
export function transformBannerToSlide(banner: HeroBanner): TransformedHeroSlide {
  // Generate gradient based on category
  const categoryGradients: Record<string, string> = {
    Festival: "from-brand-amber/15 via-brand-light to-brand-gold/20",
    Wedding: "from-brand-gold/20 via-brand-light to-brand-amber/10",
    Business: "from-brand-brown/15 via-brand-light to-brand-gold/15",
    Personal: "from-brand-gold/15 via-brand-light to-brand-amber/15",
    default: "from-brand-light/20 via-white to-brand-gold/10"
  };

  // Generate button class based on category
  const categoryButtonClasses: Record<string, string> = {
    Festival:
      "bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber",
    Wedding:
      "bg-gradient-to-r from-brand-brown to-brand-amber hover:from-brand-amber hover:to-brand-brown",
    Business:
      "bg-gradient-to-r from-brand-dark to-brand-brown hover:from-brand-brown hover:to-brand-dark",
    Personal:
      "bg-gradient-to-r from-brand-gold to-brand-amber hover:from-brand-amber hover:to-brand-gold",
    default:
      "bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber"
  };

  // Use optimized image URL (prefer small format for better performance)
  const imageUrl = banner.image.formats?.small?.url || banner.image.url;

  // Get first primary and secondary for legacy compatibility
  const primaryCTA = banner.ctaButtons.find(btn => btn.variant === "primary");
  const secondaryCTA = banner.ctaButtons.find(btn => btn.variant === "secondary");

  return {
    id: banner.id,
    title: banner.title,
    subtitle: banner.subtitle,
    description: banner.description,
    ctaButtons: banner.ctaButtons || [], // Pass all CTAs dynamically
    gradient: categoryGradients[banner.category] || categoryGradients.default,
    buttonClass: categoryButtonClasses[banner.category] || categoryButtonClasses.default,
    features: banner.tags.map(tag => tag.text),
    image: imageUrl,
    imageAlt: `${banner.title} - ${banner.category} Gift Hampers`,
    // Legacy compatibility fields
    cta: primaryCTA?.text || "",
    ctaUrl: primaryCTA?.url || "",
    secondaryCta: secondaryCTA?.text || "",
    secondaryCtaUrl: secondaryCTA?.url || "",
    category: banner.category.toLowerCase(),
    priority: banner.priority,
    isActive: banner.isActive
  };
}

/**
 * Get transformed hero slides from API
 */
export async function getHeroSlides(): Promise<TransformedHeroSlide[]> {
  try {
    const homeData = await fetchHomePageData();

    // Filter active banners and sort by priority
    const activeBanners = homeData.data.heroCarousel.banners
      .filter(banner => banner.isActive)
      .sort((a, b) => a.priority - b.priority);

    // Transform to slide format
    return activeBanners.map(transformBannerToSlide);
  } catch {
    // Return empty array on error - component should handle gracefully
    return [];
  }
}

/**
 * Get hero carousel configuration
 */
export async function getHeroConfig() {
  try {
    const homeData = await fetchHomePageData();
    return {
      autoPlay: homeData.data.heroCarousel.autoPlay,
      autoPlayInterval: homeData.data.heroCarousel.autoPlayInterval,
      showDots: homeData.data.heroCarousel.showDots,
      showArrows: homeData.data.heroCarousel.showArrows,
      infinite: homeData.data.heroCarousel.infinite,
      pauseOnHover: homeData.data.heroCarousel.pauseOnHover
    };
  } catch {
    // Return default config on error
    return {
      autoPlay: true,
      autoPlayInterval: 5000,
      showDots: true,
      showArrows: true,
      infinite: true,
      pauseOnHover: true
    };
  }
}
