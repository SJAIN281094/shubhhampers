import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@components/Header";
import HeroSlider from "@components/HeroSlider";
import Footer from "@components/Footer";

// Dynamic imports for below-the-fold components
const OurApproachSection = dynamic(() => import("@components/OurApproachSection"), {
  loading: () => (
    <div className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <div className='w-16 h-16 mx-auto mb-4 bg-brand-gold/20 rounded-full animate-pulse' />
          <div className='h-4 bg-brand-gold/20 rounded w-48 mx-auto animate-pulse' />
        </div>
      </div>
    </div>
  )
});

const EventsSection = dynamic(() => import("@components/EventsSection"), {
  loading: () => (
    <div className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <div className='w-12 h-12 mx-auto mb-4 bg-brand-amber/20 rounded-full animate-pulse' />
          <div className='h-4 bg-brand-amber/20 rounded w-64 mx-auto mb-2 animate-pulse' />
          <div className='h-3 bg-brand-gold/20 rounded w-32 mx-auto animate-pulse' />
        </div>
      </div>
    </div>
  )
});

const HowWeWorkSection = dynamic(() => import("@components/HowWeWorkSection"), {
  loading: () => (
    <div className='py-20 bg-gradient-to-br from-brand-light/20 to-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <div className='w-14 h-14 mx-auto mb-4 bg-brand-brown/20 rounded-full animate-pulse' />
          <div className='h-4 bg-brand-brown/20 rounded w-56 mx-auto animate-pulse' />
        </div>
      </div>
    </div>
  )
});

const CTASection = dynamic(() => import("@components/CTASection"), {
  loading: () => (
    <div className='py-20 bg-gradient-to-br from-brand-brown to-brand-dark'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <div className='w-20 h-20 mx-auto mb-4 bg-brand-gold/30 rounded-full animate-pulse' />
          <div className='h-6 bg-brand-gold/30 rounded w-72 mx-auto mb-2 animate-pulse' />
          <div className='h-4 bg-brand-gold/20 rounded w-48 mx-auto animate-pulse' />
        </div>
      </div>
    </div>
  )
});

export const metadata: Metadata = {
  title: "Shubhhampers - Premium Corporate & Personal Hampers | Build Meaningful Relationships",
  description:
    "Transform your relationships with thoughtfully curated hampers. Specializing in corporate employee appreciation, wedding celebrations, festival hampers, and personal milestones. Premium quality, authentic service.",
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
    title: "Shubhhampers - Premium Corporate & Personal Hampers",
    description:
      "Transform your relationships with thoughtfully curated hampers. Corporate appreciation, weddings, festivals & personal celebrations.",
    url: "https://www.shubhhampers.com",
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
    title: "Shubhhampers - Premium Corporate & Personal Hampers",
    description:
      "Transform your relationships with thoughtfully curated hampers. Corporate appreciation, weddings, festivals & personal celebrations.",
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
    "article:section": "Gift Hampers"
  }
};

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <HeroSlider />
      <OurApproachSection />
      <EventsSection />
      <HowWeWorkSection />
      <CTASection />
      <Footer />
    </main>
  );
}
