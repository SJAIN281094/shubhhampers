import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ServicesHero from "@components/ServicesHero";
import CoreServices from "@components/CoreServices";
import ConsultationServices from "@components/ConsultationServices";
import SupportPartnership from "@components/SupportPartnership";
import ServicesCTA from "@components/ServicesCTA";

export const metadata: Metadata = {
  title: "Custom Gift Baskets & Bulk Hampers | Shubhhampers",
  description:
    "Custom gift basket curation, bulk corporate orders & personalized packaging. Professional hamper consultation for businesses. Get quote today!",
  alternates: {
    canonical: "https://www.shubhhampers.com/services"
  },
  keywords: [
    "hamper services",
    "custom hamper curation",
    "bulk hamper orders",
    "business hamper accounts",
    "corporate hamper services",
    "personalized hamper packaging",
    "hamper consultation services",
    "professional hamper curation",
    "business hamper programs",
    "custom hamper design",
    "hamper delivery services",
    "corporate gifting services"
  ],
  openGraph: {
    type: "website",
    title: "Custom Gift Baskets & Bulk Hamper Services",
    description:
      "Comprehensive hamper services including custom curation, bulk orders, and business account management. Professional consultation available.",
    url: "https://www.shubhhampers.com/services",
    siteName: "Shubhhampers",
    locale: "en_US",
    images: [
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Services - Custom Gift Baskets & Bulk Orders"
      },
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image_300x200.png",
        width: 300,
        height: 200,
        alt: "Custom Hamper Services - Shubhhampers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Gift Baskets & Bulk Hamper Services",
    description:
      "Comprehensive hamper services including custom curation, bulk orders, and business account management. Professional consultation available.",
    images: [
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Services - Custom Gift Baskets & Bulk Orders"
      }
    ],
    creator: "@shubhhampers",
    site: "@shubhhampers"
  },
  other: {
    "pinterest-rich-pin": "true",
    "article:author": "Shubhhampers Team",
    "article:publisher": "Shubhhampers",
    "article:section": "Services"
  }
};

export default function ServicesPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
        <ServicesHero />
        <CoreServices />
        <ConsultationServices />
        <SupportPartnership />
        <ServicesCTA />
      </div>

      <Footer />
    </main>
  );
}
