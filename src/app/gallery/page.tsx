import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";
import InstagramGallery from "@components/InstagramGallery";
import CTASection from "@components/CTASection";

export const metadata: Metadata = {
  title: "Instagram Gallery | Shubhhampers",
  description:
    "Explore our latest hamper creations and behind-the-scenes moments from our Instagram. See real hampers, happy customers, and creative packaging ideas.",
  alternates: {
    canonical: "https://www.shubhhampers.com/gallery"
  },
  keywords: [
    "instagram gallery",
    "hamper photos",
    "gift hamper ideas",
    "packaging inspiration",
    "shubhhampers instagram",
    "hamper showcase",
    "gift ideas gallery"
  ],
  openGraph: {
    type: "website",
    title: "Instagram Gallery | Shubhhampers",
    description:
      "Explore our latest hamper creations and behind-the-scenes moments from our Instagram.",
    url: "https://www.shubhhampers.com/gallery",
    siteName: "Shubhhampers",
    locale: "en_US",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Instagram Gallery"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Gallery | Shubhhampers",
    description:
      "Explore our latest hamper creations and behind-the-scenes moments from our Instagram.",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Instagram Gallery"
      }
    ],
    creator: "@shubhhampers",
    site: "@shubhhampers"
  }
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <InstagramGallery />
      <CTASection
        title="Inspired by What You See?"
        description="Let's bring your vision to life with a custom hamper that captures the same beauty and thoughtfulness you've seen in our gallery. Every hamper tells a unique story."
        primaryButtonText="Create Your Hamper"
        primaryButtonHref="/contact"
        secondaryButtonText="Browse Collections"
        secondaryButtonHref="/hampers"
        theme="dark"
      />
      <Footer />
    </main>
  );
}
