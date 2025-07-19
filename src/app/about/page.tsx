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
  title: "About Shubhhampers - Our Story, Mission & Values | Premium Hamper Curation",
  description:
    "Learn about Shubhhampers' mission to build meaningful relationships through thoughtful hamper curation. Discover our authentic approach, core values, and commitment to premium quality service.",
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
    title: "About Shubhhampers - Our Story & Mission",
    description:
      "Learn about our mission to build meaningful relationships through thoughtful hamper curation. Authentic approach, premium quality.",
    images: [
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers - Premium Gift Hampers"
      }
    ]
  },
  twitter: {
    title: "About Shubhhampers - Our Story & Mission",
    description:
      "Learn about our mission to build meaningful relationships through thoughtful hamper curation. Authentic approach, premium quality.",
    images: [
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers - Premium Gift Hampers"
      }
    ]
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
