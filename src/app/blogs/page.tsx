import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListingClient from "@/components/BlogListingClient";

export const metadata: Metadata = {
  title: "Blogs | Hamper Ideas, Gifting Tips & Celebration Guides | Shubhhampers",
  description:
    "Discover expert insights on thoughtful gifting, hamper ideas, festival celebrations, and corporate gifting strategies from Shubhhampers.",
  keywords: [
    "hamper blogs",
    "gifting tips",
    "festival hampers",
    "corporate gifting",
    "celebration guides",
    "thoughtful gifts",
    "hamper ideas",
    "gift inspiration"
  ],
  alternates: {
    canonical: "https://www.shubhhampers.com/blogs"
  },
  openGraph: {
    type: "website",
    title: "Blogs | Hamper Ideas & Gifting Tips | Shubhhampers",
    description:
      "Expert insights on thoughtful gifting, hamper ideas, and celebration guides from India's premier hamper curation service.",
    url: "https://www.shubhhampers.com/blogs",
    siteName: "Shubhhampers",
    locale: "en_US",
    images: [
      {
        url: "https://www.shubhhampers.com/images/blogs-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shubhhampers Blogs - Gifting Ideas & Tips"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Hamper Ideas & Gifting Tips | Shubhhampers",
    description:
      "Expert insights on thoughtful gifting, hamper ideas, and celebration guides from India's premier hamper curation service.",
    images: ["https://www.shubhhampers.com/images/blogs-twitter-image.jpg"],
    creator: "@shubhhampers",
    site: "@shubhhampers"
  }
};

export default function BlogsPage() {
  return (
    <main className='min-h-screen'>
      <Header />
      <BlogListingClient />
      <Footer />
    </main>
  );
}
