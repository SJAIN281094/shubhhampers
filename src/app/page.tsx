import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@components/Header";
import Footer from "@components/Footer";

// Eager load above-the-fold content only
import HeroSlider from "@components/HeroSlider";

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
  title: "Premium Gift Hampers & Baskets | Shubhhampers",
  description:
    "Premium gift hampers for corporate clients, weddings & festivals. Custom curated baskets that build meaningful relationships. Order today!",
  alternates: {
    canonical: "https://www.shubhhampers.com"
  },
  keywords: [
    "premium hampers India",
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
    title: "Premium Gift Hampers & Baskets | Shubhhampers",
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
        alt: "Shubhhampers Homepage - Premium Gift Hampers for Every Occasion"
      },
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image_300x200.png",
        width: 300,
        height: 200,
        alt: "Shubhhampers - Premium Gift Hampers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Gift Hampers & Baskets | Shubhhampers",
    description:
      "Transform your relationships with thoughtfully curated hampers. Corporate appreciation, weddings, festivals & personal celebrations.",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Homepage - Premium Gift Hampers for Every Occasion"
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

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <HeroSlider />
      <EventsSection />
      <HowWeWorkSection />
      <CTASection />
      <Footer />
    </main>
  );
}
