import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ContactHero from "@components/ContactHero";
import ContactMethods from "@components/ContactMethods";
import ContactFormSection from "@components/ContactFormSection";
import QuickContact from "@components/QuickContact";

export const metadata: Metadata = {
  title:
    "Contact Shubhhampers - Get in Touch for Premium Hamper Services | Connect@shubhhampers.com",
  description:
    "Contact Shubhhampers for premium hamper curation services. Reach us at +91 99999 99999 or connect@shubhhampers.com. Professional consultation for corporate, wedding, and personal hampers.",
  keywords: [
    "contact Shubhhampers",
    "hamper consultation",
    "premium hamper services contact",
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
    title: "Contact Shubhhampers - Premium Hamper Services",
    description:
      "Contact us for premium hamper curation services. Professional consultation for corporate, wedding, and personal hampers.",
    url: "https://www.shubhhampers.com/contact",
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
    title: "Contact Shubhhampers - Premium Hamper Services",
    description:
      "Contact us for premium hamper curation services. Professional consultation for corporate, wedding, and personal hampers.",
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
