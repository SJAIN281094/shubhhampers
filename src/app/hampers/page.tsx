import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HamperListingPage from "@components/HamperListingPage";
import { HamperPageData } from "@lib/hamper-url-utils";
import { fetchHampers, transformApiHamperToUI } from "@lib/hamper-api";

// Main hampers page metadata
export const metadata: Metadata = {
  title: "Gift Hampers & Gift Baskets | Premium Hampers Online | Shubhhampers",
  description:
    "Discover premium gift hampers and gift baskets for every occasion. Wedding hampers, festival hampers, corporate gifts, and personal celebrations. Free delivery across India.",
  keywords:
    "gift hampers, gift baskets, hampers online, wedding hampers, festival hampers, corporate gifts, diwali hampers, premium hampers, custom hampers, bulk hampers",
  authors: [{ name: "Shubhhampers Team" }],
  creator: "Shubhhampers",
  publisher: "Shubhhampers",

  // Open Graph
  openGraph: {
    title: "Gift Hampers & Gift Baskets | Premium Hampers Online | Shubhhampers",
    description:
      "Discover premium gift hampers and gift baskets for every occasion. Wedding hampers, festival hampers, corporate gifts, and personal celebrations.",
    url: "https://www.shubhhampers.com/hampers",
    siteName: "Shubhhampers",
    images: [
      {
        url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/og-hampers.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Gift Hampers and Gift Baskets"
      }
    ],
    locale: "en_IN",
    type: "website"
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Gift Hampers & Gift Baskets | Premium Hampers Online | Shubhhampers",
    description:
      "Discover premium gift hampers and gift baskets for every occasion. Wedding hampers, festival hampers, corporate gifts, and personal celebrations.",
    images: ["https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/og-hampers.jpg"],
    creator: "@shubhhampers"
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.shubhhampers.com/hampers"
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

// Page data for main hampers page
const mainHampersPageData: HamperPageData = {
  title: "Gift Hampers & Gift Baskets",
  description:
    "Discover our premium collection of gift hampers and gift baskets for every occasion. From wedding hampers to festival celebrations, find the perfect gift for your loved ones.",
  apiParams: {}, // No specific filters - show all hampers
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Gift Hampers", href: "/hampers" }
  ]
};

// Server-side data fetching
async function getHampersPageData() {
  try {
    const response = await fetchHampers({
      pageSize: 25,
      page: 1,
      isActive: true
    });

    return {
      hampers: response.data.map(transformApiHamperToUI),
      pagination: response.meta.pagination
    };
  } catch {
    return {
      hampers: [],
      pagination: {
        page: 1,
        pageSize: 25,
        pageCount: 0,
        total: 0
      }
    };
  }
}

export default async function HampersPage() {
  // Fetch data server-side
  const { hampers, pagination } = await getHampersPageData();

  return (
    <main className='min-h-screen'>
      <Header />
      <HamperListingPage
        pageData={mainHampersPageData}
        showCategoryFilters={true}
        initialHampers={hampers}
        initialPagination={pagination}
      />
      <Footer />
    </main>
  );
}
