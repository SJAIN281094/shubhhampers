import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ServicesHero from "@components/ServicesHero";
import CoreServices from "@components/CoreServices";
import ConsultationServices from "@components/ConsultationServices";
import SupportPartnership from "@components/SupportPartnership";
import ServicesCTA from "@components/ServicesCTA";

export const metadata: Metadata = {
  title: "Hamper Services - Custom Curation, Bulk Orders & Business Solutions | Shubhhampers",
  description:
    "Comprehensive hamper services including custom curation, bulk corporate orders, business account management, and personalized packaging. Professional consultation for all your hamper needs.",
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
    title: "Hamper Services - Custom Curation, Bulk Orders & Business Solutions",
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
        alt: "Shubhhampers - Premium Gift Hampers"
      },
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image_300x200.png",
        width: 300,
        height: 200,
        alt: "Shubhhampers - Premium Gift Hampers"
      }
    ]
  },
  twitter: {
    title: "Hamper Services - Custom Curation, Bulk Orders & Business Solutions",
    description:
      "Comprehensive hamper services including custom curation, bulk orders, and business account management. Professional consultation available.",
    images: [
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers - Premium Gift Hampers"
      },
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image_300x200.png",
        width: 300,
        height: 200,
        alt: "Shubhhampers - Premium Gift Hampers"
      }
    ]
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
