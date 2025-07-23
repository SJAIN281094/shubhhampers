import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";
import AboutHero from "@components/AboutHero";
import OurMission from "@components/OurMission";
import OurValues from "@components/OurValues";
import OurApproach from "@components/OurApproach";
import WhyChooseUs from "@components/WhyChooseUs";
import AboutCTA from "@components/AboutCTA";

export const metadata: Metadata = {
  title: "About Us - Premium Gift Hamper Company | Shubhhampers",
  description:
    "Meet Shubhhampers - premium gift hamper company building meaningful relationships through thoughtful curation. Our story, mission & values.",
  alternates: {
    canonical: "https://www.shubhhampers.com/about"
  },
  keywords: [
    "about Shubhhampers",
    "hamper company story",
    "relationship building mission",
    "premium hamper curation",
    "corporate hamper specialists",
    "authentic hamper service",
    "business values",
    "hamper company philosophy",
    "professional hamper team",
    "trusted hamper partner"
  ],
  openGraph: {
    type: "website",
    title: "About Shubhhampers - Premium Gift Hamper Company",
    description:
      "Learn about our mission to build meaningful relationships through thoughtful hamper curation. Authentic approach, premium quality.",
    url: "https://www.shubhhampers.com/about",
    siteName: "Shubhhampers",
    locale: "en_US",
    images: [
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "About Shubhhampers - Our Story and Mission"
      },
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image_300x200.png",
        width: 300,
        height: 200,
        alt: "Shubhhampers Team - Premium Gift Hampers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Shubhhampers - Premium Gift Hamper Company",
    description:
      "Learn about our mission to build meaningful relationships through thoughtful hamper curation. Authentic approach, premium quality.",
    images: [
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "About Shubhhampers - Our Story and Mission"
      }
    ],
    creator: "@shubhhampers",
    site: "@shubhhampers"
  },
  other: {
    "pinterest-rich-pin": "true",
    "article:author": "Shubhhampers Team",
    "article:publisher": "Shubhhampers",
    "article:section": "About Us"
  }
};

export default function AboutPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
        <AboutHero />
        <OurMission />
        <OurValues />
        <OurApproach />
        <WhyChooseUs />
        <AboutCTA />
      </div>

      <Footer />
    </main>
  );
}
