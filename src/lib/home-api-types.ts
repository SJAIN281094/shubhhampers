/**
 * API Types for Home Page Hero Section
 */

export interface HeroImage {
  id: number;
  documentId: string;
  name: string;
  caption: string | null;
  url: string;
  formats: {
    small?: {
      url: string;
    };
    medium?: {
      url: string;
    };
    large?: {
      url: string;
    };
  };
}

export interface HeroCTAButton {
  id: number;
  text: string;
  url: string;
  isExternal: boolean;
  variant: "primary" | "secondary";
  icon: string | null;
  disabled: boolean;
}

export interface HeroTag {
  id: number;
  text: string;
}

export interface HeroBanner {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundOverlay: boolean;
  category: string;
  priority: number;
  isActive: boolean;
  image: HeroImage;
  ctaButtons: HeroCTAButton[];
  tags: HeroTag[];
}

export interface HeroCarousel {
  id: number;
  autoPlay: boolean;
  autoPlayInterval: number;
  showDots: boolean;
  showArrows: boolean;
  infinite: boolean;
  pauseOnHover: boolean;
  banners: HeroBanner[];
}

export interface HomePageData {
  id: number;
  documentId: string;
  title: string;
  heroCarousel: HeroCarousel;
  seo: any | null;
}

export interface HomePageApiResponse {
  data: HomePageData;
}

// Transformed types for UI compatibility
export interface TransformedHeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaUrl: string;
  secondaryCta: string;
  secondaryCtaUrl: string;
  gradient: string; // Generated based on category
  buttonClass: string; // Generated based on variant
  features: string[];
  image: string;
  imageAlt: string;
  category: string;
  priority: number;
  isActive: boolean;
}
