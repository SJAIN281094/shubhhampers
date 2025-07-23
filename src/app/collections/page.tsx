import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@components/Header";
import Footer from "@components/Footer";

// Dynamic import for the heavy collections client component
const CollectionsClient = dynamic(() => import("@components/CollectionsClient"), {
  loading: () => (
    <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5 min-h-screen'>
      {/* Hero Section Loading */}
      <section className='relative py-20 overflow-hidden'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='w-20 h-20 mx-auto mb-6 bg-brand-gold/20 rounded-full animate-pulse' />
            <div className='h-8 bg-brand-gold/20 rounded w-96 mx-auto mb-4 animate-pulse' />
            <div className='h-6 bg-brand-amber/20 rounded w-64 mx-auto animate-pulse' />
          </div>
        </div>
      </section>

      {/* Category Filter Loading */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-4'>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className='w-32 h-12 bg-gray-100 rounded-full animate-pulse' />
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid Loading */}
      <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className='bg-white/50 rounded-3xl p-8 shadow-lg animate-pulse'>
                <div className='text-center mb-6'>
                  <div className='w-16 h-16 mx-auto mb-4 bg-brand-gold/20 rounded-full' />
                  <div className='h-6 bg-brand-gold/20 rounded w-48 mx-auto mb-2' />
                  <div className='h-4 bg-brand-amber/20 rounded w-32 mx-auto' />
                </div>
                <div className='space-y-3 mb-6'>
                  <div className='h-4 bg-gray-200 rounded w-full' />
                  <div className='h-4 bg-gray-200 rounded w-3/4' />
                  <div className='h-4 bg-gray-200 rounded w-5/6' />
                </div>
                <div className='flex gap-2'>
                  <div className='h-10 bg-brand-amber/20 rounded-lg flex-1' />
                  <div className='h-10 bg-gray-200 rounded-lg flex-1' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
});

export const metadata: Metadata = {
  title: "Hamper Collections - Corporate, Wedding, Festival & Personal | Shubhhampers",
  description:
    "Explore our curated hamper collections: Corporate employee appreciation, wedding celebrations, festival hampers, and personal milestone gifts. Premium quality, thoughtful curation, delivered with care.",
  keywords: [
    "hamper collections",
    "corporate hamper collections",
    "wedding hamper collections",
    "festival hamper collections",
    "personal hamper collections",
    "business hampers catalog",
    "employee appreciation hampers",
    "wedding guest hampers",
    "Diwali hampers collection",
    "custom hamper options",
    "premium hamper catalog",
    "luxury hamper collections"
  ],
  openGraph: {
    type: "website",
    title: "Hamper Collections - Corporate, Wedding, Festival & Personal",
    description:
      "Explore our curated hamper collections for every occasion. Corporate, wedding, festival, and personal celebrations.",
    url: "https://www.shubhhampers.com/collections",
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
    title: "Hamper Collections - Corporate, Wedding, Festival & Personal",
    description:
      "Explore our curated hamper collections for every occasion. Corporate, wedding, festival, and personal celebrations.",
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
    "product:brand": "Shubhhampers",
    "product:availability": "in stock",
    "product:category": "Gift Hampers",
    "product:retailer": "Shubhhampers"
  }
};

export default function CollectionsPage() {
  return (
    <main className='min-h-screen'>
      <Header />
      <CollectionsClient />
      <Footer />
    </main>
  );
}
