import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@components/Header";
import Footer from "@components/Footer";

// Eager load above-the-fold content only
import HeroSlider from "@components/HeroSlider";

// Server-side API imports
import { getHeroSlides } from "@lib/home-api";
import { fetchHampers } from "@lib/hamper-api";
import type { HamperProduct } from "@lib/hamper-api-types";

// Aggressively lazy load below-the-fold components with minimal loading states
const EventsSection = dynamic(() => import("@components/EventsSection"), {
  loading: () => <div className='h-20 bg-white' />
});

const HowWeWorkSection = dynamic(() => import("@components/HowWeWorkSection"), {
  loading: () => <div className='h-20 bg-gradient-to-br from-brand-light/20 to-white' />
});

const CTASection = dynamic(() => import("@components/CTASection"), {
  loading: () => <div className='h-20 bg-gradient-to-br from-brand-brown to-brand-dark' />
});

export const metadata: Metadata = {
  title: "Curated Gift Hampers & Baskets | Shubhhampers",
  description:
    "Curated gift hampers for corporate clients, weddings & festivals. Custom curated baskets that build meaningful relationships. Order today!",
  alternates: {
    canonical: "https://www.shubhhampers.com"
  },
  keywords: [
    "curated hampers India",
    "corporate hampers",
    "employee appreciation hampers",
    "wedding hampers",
    "festival hampers",
    "business relationship building",
    "custom hamper curation",
    "luxury hamper delivery",
    "professional hamper service",
    "thoughtful corporate gifts"
  ],
  openGraph: {
    type: "website",
    title: "Curated Gift Hampers & Baskets | Shubhhampers",
    description:
      "Transform your relationships with thoughtfully curated hampers. Corporate appreciation, weddings, festivals & personal celebrations.",
    url: "https://www.shubhhampers.com",
    siteName: "Shubhhampers",
    locale: "en_US",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Homepage - Curated Gift Hampers for Every Occasion"
      },
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image_300x200.png",
        width: 300,
        height: 200,
        alt: "Shubhhampers - Curated Gift Hampers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Curated Gift Hampers & Baskets | Shubhhampers",
    description:
      "Transform your relationships with thoughtfully curated hampers. Corporate appreciation, weddings, festivals & personal celebrations.",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Homepage - Curated Gift Hampers for Every Occasion"
      }
    ],
    creator: "@shubhhampers",
    site: "@shubhhampers"
  },
  other: {
    "pinterest-rich-pin": "true",
    "article:author": "Shubhhampers Team",
    "article:publisher": "Shubhhampers",
    "article:section": "Gift Hampers"
  }
};

// Category-to-API mapping for fetching hampers
const CATEGORY_API_MAPPING = {
  festival: "Festival",
  wedding: "Wedding",
  business: "Business",
  personal: "Personal"
};

// Server-side data fetching function
async function getHomePageData() {
  try {
    // Fetch hero slides data
    const heroSlides = await getHeroSlides();

    // Fetch hampers for all categories in parallel
    const hampersByCategory: Record<string, HamperProduct[]> = {};

    const categoryPromises = Object.entries(CATEGORY_API_MAPPING).map(
      async ([categoryKey, apiCategory]) => {
        try {
          const response = await fetchHampers({
            category: apiCategory,
            limit: 3, // Only fetch 3 items per category
            offset: 0,
            isActive: true
          });

          // Transform API data to UI format using the correct structure
          const transformedHampers: HamperProduct[] = response.data.map(apiHamper => {
            const mainImage = apiHamper.image?.[0]?.url || "/images/hamper-placeholder.jpg";
            const categoryName = apiHamper.category.name;
            const subCategoryName = apiHamper.subCategory?.name;

            // Generate features from hamper items (first 4 items) - only from API data
            const features = apiHamper.hamperItems
              .slice(0, 4)
              .map(item => `${item.quantity}x ${item.item.name}`);

            // Calculate price display
            const startingPrice = `₹${apiHamper.discountedPrice.toLocaleString()}`;
            const originalPrice =
              apiHamper.discount > 0 ? `₹${apiHamper.basePrice.toLocaleString()}` : "";
            const priceRange =
              apiHamper.discount > 0
                ? `₹${apiHamper.discountedPrice.toLocaleString()} - ₹${apiHamper.basePrice.toLocaleString()}`
                : startingPrice;

            return {
              id: apiHamper.id.toString(),
              documentId: apiHamper.documentId,
              slug: apiHamper.slug,
              title: apiHamper.title,
              subtitle: apiHamper.subTitle || `${categoryName} Hamper`,
              priceRange,
              startingPrice,
              discountedPrice: apiHamper.discount > 0 ? startingPrice : undefined,
              originalPrice: originalPrice || undefined,
              discount: apiHamper.discount > 0 ? `₹${apiHamper.discount} OFF` : undefined,
              image: mainImage,
              images: apiHamper.image,
              description: apiHamper.description,
              features,
              deliveryTime: apiHamper.delivery.description,
              deliveryTitle: apiHamper.delivery.title,
              minimumOrder: apiHamper.minimumOrder.description,
              minimumOrderTitle: apiHamper.minimumOrder.title,
              bulkBenefit: apiHamper.bulkBenefit.description,
              bulkBenefitTitle: apiHamper.bulkBenefit.title,
              bgColor: "#FFF7ED",
              accentColor: "#F97316",
              textColor: "#9A3412",
              category: categoryName, // Use string for HamperProduct type
              subCategory: subCategoryName, // Use string for HamperProduct type
              backgroundImage: mainImage,
              hamperItems: apiHamper.hamperItems,
              tags: apiHamper.tags || [],
              isActive: apiHamper.isActive
            };
          });

          hampersByCategory[categoryKey] = transformedHampers;
        } catch {
          // Silent error handling - set empty array for failed category
          hampersByCategory[categoryKey] = []; // Empty array on error
        }
      }
    );

    await Promise.all(categoryPromises);

    return {
      heroSlides: heroSlides || [],
      categoryHampers: hampersByCategory
    };
  } catch {
    // Silent error handling - return empty data on failure
    return {
      heroSlides: [],
      categoryHampers: {}
    };
  }
}

export default async function Home() {
  // Fetch all data server-side
  const { heroSlides, categoryHampers } = await getHomePageData();

  return (
    <main className='min-h-screen'>
      <Header />
      {/* Hidden H1 for SEO - main page heading */}
      <h1 className='sr-only'>
        Curated Gift Hampers for Every Occasion - Corporate, Wedding, Festival & Personal |
        Shubhhampers
      </h1>
      <HeroSlider slides={heroSlides} />
      <EventsSection categoryHampers={categoryHampers} />
      <HowWeWorkSection />
      <CTASection />
      <Footer />
    </main>
  );
}
