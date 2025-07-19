import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import CollectionsClient from "@components/CollectionsClient";

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
    title: "Hamper Collections - Corporate, Wedding, Festival & Personal",
    description:
      "Explore our curated hamper collections for every occasion. Corporate, wedding, festival, and personal celebrations.",
    images: ["/logo-dark.png"]
  },
  twitter: {
    title: "Hamper Collections - Corporate, Wedding, Festival & Personal",
    description:
      "Explore our curated hamper collections for every occasion. Corporate, wedding, festival, and personal celebrations.",
    images: ["/logo-dark.png"]
  }
};

export default function CollectionsPage() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Suspense
        fallback={
          <div className='min-h-screen flex items-center justify-center'>
            <div className='text-center'>
              <div className='text-4xl mb-4'>🎁</div>
              <p className='text-lg text-gray-600'>Loading collections...</p>
            </div>
          </div>
        }
      >
        <CollectionsClient />
      </Suspense>
      <Footer />
    </main>
  );
}
