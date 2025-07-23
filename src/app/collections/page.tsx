import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import CollectionsClient from "@components/CollectionsClient";

// Dynamic metadata generation for collections with category handling
export async function generateMetadata({
  searchParams
}: {
  searchParams: Promise<{ category?: string }>;
}): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category;

  // Handle canonical URLs for different categories
  const getCanonicalUrl = () => {
    const baseUrl = "https://www.shubhhampers.com/collections";

    // If no category or category is 'all', use base collections URL
    if (!category || category === "all") {
      return baseUrl;
    }

    // For specific categories, include in canonical URL
    return `${baseUrl}?category=${category}`;
  };

  // Dynamic titles and descriptions based on category
  const getMetadataByCategory = () => {
    switch (category) {
      case "business":
        return {
          title: "Corporate Gift Hamper Collections | Shubhhampers",
          description:
            "Premium corporate gift hamper collections for employee appreciation, client relationships, and business celebrations. Professional curation available."
        };
      case "wedding":
        return {
          title: "Wedding Gift Hamper Collections | Shubhhampers",
          description:
            "Beautiful wedding hamper collections for guests, welcome gifts, and bridal celebrations. Elegant packaging and thoughtful curation."
        };
      case "festival":
        return {
          title: "Festival Gift Hamper Collections | Shubhhampers",
          description:
            "Traditional festival hamper collections for Diwali, Holi, Christmas and special celebrations. Authentic and meaningful gifts."
        };
      case "personal":
        return {
          title: "Personal Gift Hamper Collections | Shubhhampers",
          description:
            "Personal celebration hamper collections for birthdays, anniversaries, and special moments. Customizable and heartfelt gifts."
        };
      default:
        return {
          title: "Gift Hamper Collections | Corporate & Wedding | Shubhhampers",
          description:
            "Browse premium hamper collections: corporate gifts, wedding baskets, festival hampers & personal celebrations. Quality curated, delivered fresh!"
        };
    }
  };

  const { title, description } = getMetadataByCategory();

  return {
    title,
    description,
    alternates: {
      canonical: getCanonicalUrl()
    },
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
      type: "website",
      title: title,
      description: description,
      url: getCanonicalUrl(),
      siteName: "Shubhhampers",
      locale: "en_US",
      images: [
        {
          url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
          width: 1200,
          height: 630,
          alt: "Shubhhampers Collections - Premium Gift Hamper Catalog"
        },
        {
          url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image_300x200.png",
          width: 300,
          height: 200,
          alt: "Gift Hamper Collections - Shubhhampers"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [
        {
          url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/social-media/social_media_meta_image.png",
          width: 1200,
          height: 630,
          alt: "Shubhhampers Collections - Premium Gift Hamper Catalog"
        }
      ],
      creator: "@shubhhampers",
      site: "@shubhhampers"
    },
    other: {
      "pinterest-rich-pin": "true",
      "product:brand": "Shubhhampers",
      "product:availability": "in stock",
      "product:category": "Gift Hampers",
      "product:retailer": "Shubhhampers"
    }
  };
}

export default function CollectionsPage() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Suspense fallback={<div>Loading collections...</div>}>
        <CollectionsClient />
      </Suspense>
      <Footer />
    </main>
  );
}
