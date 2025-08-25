import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ContactHero from "@components/ContactHero";
import ContactMethods from "@components/ContactMethods";
import ContactFormSection from "@components/ContactFormSection";
import QuickContact from "@components/QuickContact";

export const metadata: Metadata = {
  title: "Contact Us - Curated Gift Hamper Service | Shubhhampers",
  description:
    "Contact Shubhhampers for curated gift hamper consultation. Call +91 96858 47274 or email connect@shubhhampers.com. Free quote available!",
  alternates: {
    canonical: "https://www.shubhhampers.com/contact"
  },
  keywords: [
    "contact Shubhhampers",
    "hamper consultation",
    "curated hamper services contact",
    "corporate hamper inquiry",
    "wedding hamper consultation",
    "hamper service provider contact",
    "business hamper quote",
    "professional hamper consultation",
    "hamper curation services",
    "custom hamper inquiry"
  ],
  openGraph: {
    type: "website",
    title: "Contact Shubhhampers - Curated Gift Hamper Services",
    description:
      "Contact us for curated hamper services. Professional consultation for corporate, wedding, and personal hampers.",
    url: "https://www.shubhhampers.com/contact",
    siteName: "Shubhhampers",
    locale: "en_US",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Contact Shubhhampers - Get Premium Hamper Consultation"
      },
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image_300x200.png",
        width: 300,
        height: 200,
        alt: "Contact Us - Shubhhampers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Shubhhampers - Curated Gift Hamper Services",
    description:
      "Contact us for curated hamper services. Professional consultation for corporate, wedding, and personal hampers.",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Contact Shubhhampers - Get Premium Hamper Consultation"
      }
    ],
    creator: "@shubhhampers",
    site: "@shubhhampers"
  },
  other: {
    "pinterest-rich-pin": "true",
    "article:author": "Shubhhampers Team",
    "article:publisher": "Shubhhampers",
    "article:section": "Contact"
  }
};

export default function ContactPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
        <ContactHero />
        <ContactMethods />
        <ContactFormSection />
        <QuickContact />
      </div>

      <Footer />
    </main>
  );
}
