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
  title: "About Us - Curated Wedding & Festival Hamper Company | Shubhhampers",
  description:
    "Meet Shubhhampers - curated wedding hampers and festival gift baskets company creating magical moments through thoughtful curation. Our story, mission & values.",
  alternates: {
    canonical: "https://www.shubhhampers.com/about"
  },
  keywords: [
    "about Shubhhampers",
    "wedding hamper company",
    "festival gift baskets",
    "curated wedding hampers",
    "festival hamper specialists",
    "wedding gift curation",
    "authentic hamper service",
    "business hampers",
    "festival gift hampers",
    "trusted hamper partner",
    "wedding celebration hampers",
    "festival celebration gifts"
  ],
  openGraph: {
    type: "website",
    title: "About Shubhhampers - Curated Wedding & Festival Hamper Company",
    description:
      "Learn about our mission to create magical moments through thoughtful wedding and festival hamper curation. Authentic approach, curated quality.",
    url: "https://www.shubhhampers.com/about",
    siteName: "Shubhhampers",
    locale: "en_US",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "About Shubhhampers - Our Story and Mission"
      },
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image_300x200.png",
        width: 300,
        height: 200,
        alt: "Shubhhampers Team - Curated Wedding & Festival Hampers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Shubhhampers - Curated Wedding & Festival Hamper Company",
    description:
      "Learn about our mission to create magical moments through thoughtful wedding and festival hamper curation. Authentic approach, curated quality.",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
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
    <main className="min-h-screen">
      <Header />

      <div className="bg-gradient-to-br from-brand-light via-white to-brand-gold/5">
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
