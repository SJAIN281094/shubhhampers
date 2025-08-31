import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";
import BusinessHero from "@components/BusinessHero";
import BusinessUseCases from "@components/BusinessUseCases";
import BusinessBenefits from "@components/BusinessBenefits";
import BusinessCTA from "@components/BusinessCTA";

export const metadata: Metadata = {
  title: "Corporate Gift Baskets & Business Hampers | Shubhhampers",
  description:
    "Boost business relationships with corporate gift hampers. Employee recognition, client appreciation & team building. Measurable ROI guaranteed!",
  alternates: {
    canonical: "https://www.shubhhampers.com/business"
  },
  keywords: [
    "business hampers",
    "corporate hampers",
    "employee appreciation hampers",
    "client appreciation hampers",
    "corporate gift solutions",
    "business relationship building",
    "employee recognition hampers",
    "B2B hamper services",
    "corporate milestone hampers",
    "team building hampers",
    "business celebration hampers",
    "professional hamper curation",
    "corporate gifting strategy",
    "bulk corporate hampers",
    "business client hampers"
  ],
  openGraph: {
    type: "website",
    title: "Corporate Gift Baskets & Business Hamper Solutions",
    description:
      "Strengthen business relationships with strategic corporate hampers. Employee recognition, client appreciation, measurable ROI.",
    url: "https://www.shubhhampers.com/business",
    siteName: "Shubhhampers",
    locale: "en_US",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Business Solutions - Corporate Gift Hampers"
      },
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image_300x200.png",
        width: 300,
        height: 200,
        alt: "Corporate Hampers - Business Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Gift Baskets & Business Hamper Solutions",
    description:
      "Strengthen business relationships with strategic corporate hampers. Employee recognition, client appreciation, measurable ROI.",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Business Solutions - Corporate Gift Hampers"
      }
    ],
    creator: "@shubhhampers",
    site: "@shubhhampers"
  },
  other: {
    "pinterest-rich-pin": "true",
    "article:author": "Shubhhampers Team",
    "article:publisher": "Shubhhampers",
    "article:section": "Business Solutions"
  }
};

export default function BusinessPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="bg-gradient-to-br from-brand-light via-white to-brand-gold/5">
        <BusinessHero />
        <BusinessUseCases />
        <BusinessBenefits />
        <BusinessCTA />
      </div>

      <Footer />
    </main>
  );
}
