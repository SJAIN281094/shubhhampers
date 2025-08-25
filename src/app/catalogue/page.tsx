import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";
import CatalogueViewPage from "@components/CatalogueViewPage";
import { getEnvVar } from "@lib/env-server-actions";

export const metadata: Metadata = {
  title: "Complete Hamper Catalogue - Curated Gift Hampers Collection | Shubhhampers",
  description:
    "Explore our comprehensive catalogue of curated hampers for corporate gifts, weddings, festivals & personal celebrations. Download our complete collection featuring 100+ thoughtfully curated gift hampers with detailed product information.",
  alternates: {
    canonical: "https://www.shubhhampers.com/catalogue"
  },
  keywords: [
    // Core Catalogue Keywords
    "hamper catalogue download",
    "curated gift hamper collection",
    "corporate hamper catalogue PDF",
    "wedding hamper brochure",
    "festival hamper collection",
    "business gift catalogue",
    "hamper product portfolio",
    "gift hamper showcase",
    "shubhhampers complete catalogue",
    "thoughtfully curated hamper brochure",
    // Category-Specific Keywords
    "corporate gifts catalogue",
    "employee appreciation hampers collection",
    "client gift hamper options",
    "wedding hamper showcase",
    "bridal gift collection",
    "festival celebration hampers",
    "diwali hamper catalogue",
    "rakhi gift collection",
    "birthday hamper options",
    "anniversary gift catalogue",
    // Business Keywords
    "bulk hamper ordering guide",
    "corporate gifting solutions",
    "custom hamper design options",
    "business relationship gifts",
    "professional hamper service",
    "B2B gift solutions",
    // Product Features
    "curated gift hampers",
    "artisan hamper collection",
    "thoughtfully crafted hampers",
    "expertly designed gifts",
    "hamper customization options",
    "personalized gift solutions"
  ],
  openGraph: {
    type: "website",
    title: "Complete Hamper Catalogue - Curated Gift Hampers Collection | Shubhhampers",
    description:
      "Download our comprehensive catalogue featuring 100+ curated hampers for corporate gifts, weddings, festivals & personal celebrations. Explore thoughtfully crafted collections with detailed product information and customization options.",
    url: "https://www.shubhhampers.com/catalogue",
    siteName: "Shubhhampers",
    locale: "en_US",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Complete Catalogue - Curated Gift Hampers Collection for Corporate, Wedding & Festival Celebrations"
      },
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image_300x200.png",
        width: 300,
        height: 200,
        alt: "Shubhhampers Catalogue Preview - Curated Gift Hampers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Hamper Catalogue - Curated Gift Hampers | Shubhhampers",
    description:
      "Download our comprehensive catalogue featuring 100+ curated hampers for corporate gifts, weddings, festivals & personal celebrations. Explore thoughtfully crafted collections now.",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Complete Catalogue - Curated Gift Hampers Collection"
      }
    ],
    creator: "@shubhhampers",
    site: "@shubhhampers"
  },
  other: {
    "pinterest-rich-pin": "true",
    "article:author": "Shubhhampers Team",
    "article:publisher": "Shubhhampers",
    "article:section": "Gift Hampers Catalogue",
    "product:brand": "Shubhhampers",
    "product:category": "Gift Hampers",
    "og:image:type": "image/png",
    "twitter:image:type": "image/png"
  }
};

export default async function CataloguePage() {
  // Get catalogue PDF URL from environment variable (no fallback)
  const CATALOGUE_PDF_URL = await getEnvVar("NEXT_PUBLIC_CATALOGUE_URL");
  // Structured data for SEO
  const catalogueStructuredData = {
    "@context": "https://schema.org",
    "@type": "Catalog",
    name: "Shubhhampers Curated Gift Hampers Catalogue",
    description:
      "Complete collection of curated hampers for corporate gifts, weddings, festivals and personal celebrations",
    url: "https://www.shubhhampers.com/catalogue",
    publisher: {
      "@type": "Organization",
      name: "Shubhhampers",
      url: "https://www.shubhhampers.com",
      logo: "https://www.shubhhampers.com/logo-dark.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 96858 47274",
        contactType: "customer service",
        email: "connect@shubhhampers.com"
      }
    },
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      category: "Gift Hampers"
    },
    audience: {
      "@type": "Audience",
      audienceType: ["Corporate Clients", "Wedding Planners", "Individual Customers"]
    },
    inLanguage: "en-IN",
    dateModified: new Date().toISOString(),
    keywords: "curated hampers, corporate gifts, wedding hampers, festival gifts, gift baskets"
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.shubhhampers.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Catalogue",
        item: "https://www.shubhhampers.com/catalogue"
      }
    ]
  };

  return (
    <main className='min-h-screen'>
      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([catalogueStructuredData, breadcrumbStructuredData])
        }}
      />

      <Header />

      {/* Hidden H1 for SEO */}
      <h1 className='sr-only'>
        Hamper Catalogue - Complete Collection of Curated Gift Hampers | Shubhhampers
      </h1>

      <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
        <CatalogueViewPage catalogueUrl={CATALOGUE_PDF_URL || undefined} />
      </div>

      <Footer />
    </main>
  );
}
