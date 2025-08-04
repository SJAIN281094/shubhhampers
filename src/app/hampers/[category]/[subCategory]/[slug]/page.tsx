import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HamperDetailsPage from "@components/HamperDetailsPage";
import { parseHamperRoute } from "@lib/hamper-url-utils";
import { fetchHamperBySlug } from "@lib/hamper-api";

// This will be populated dynamically based on API data
export async function generateStaticParams() {
  // For now, return empty array - we'll implement dynamic generation later
  // as it requires fetching all products from API
  return [];
}

// Generate metadata for each product page
export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string; subCategory: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  // Parse the route to extract product information
  const routeParams = parseHamperRoute([
    resolvedParams.category,
    resolvedParams.subCategory,
    resolvedParams.slug
  ]);

  if (!routeParams || routeParams.type !== "product") {
    return {
      title: "Product Not Found | Shubhhampers",
      description: "The requested hamper product could not be found."
    };
  }

  try {
    // Fetch product data by slug
    const hamper = await fetchHamperBySlug(resolvedParams.slug);

    if (!hamper) {
      return {
        title: "Product Not Found | Shubhhampers",
        description: "The requested hamper product could not be found."
      };
    }

    const categoryName = hamper.categoryName || hamper.category;
    const subCategoryName = hamper.subCategoryName || hamper.subCategory || categoryName;

    return {
      title: `${hamper.title} | ${categoryName} ${subCategoryName} Gift Hamper | Shubhhampers`,
      description:
        hamper.description ||
        `Premium ${hamper.title} hamper from our ${categoryName} collection. Perfect for special occasions and celebrations.`,
      keywords: `${hamper.title}, ${categoryName} hampers, ${subCategoryName} hampers, gift hampers, premium hampers, ${hamper.title} online`,
      authors: [{ name: "Shubhhampers Team" }],
      creator: "Shubhhampers",
      publisher: "Shubhhampers",

      // Open Graph
      openGraph: {
        title: `${hamper.title} | Premium Gift Hamper | Shubhhampers`,
        description:
          hamper.description ||
          `Premium ${hamper.title} hamper from our ${categoryName} collection.`,
        url: `https://www.shubhhampers.com/hampers/${resolvedParams.category}/${resolvedParams.subCategory}/${resolvedParams.slug}`,
        siteName: "Shubhhampers",
        images:
          hamper.images && hamper.images.length > 0
            ? [
                {
                  url: hamper.images[0].url,
                  width: 1200,
                  height: 630,
                  alt: hamper.title
                }
              ]
            : [
                {
                  url: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/default-hamper-og.jpg",
                  width: 1200,
                  height: 630,
                  alt: "Premium Gift Hamper"
                }
              ],
        locale: "en_IN",
        type: "website"
      },

      // Twitter
      twitter: {
        card: "summary_large_image",
        title: `${hamper.title} | Premium Gift Hamper | Shubhhampers`,
        description:
          hamper.description ||
          `Premium ${hamper.title} hamper from our ${categoryName} collection.`,
        images:
          hamper.images && hamper.images.length > 0
            ? [hamper.images[0].url]
            : [
                "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/default-hamper-og.jpg"
              ],
        creator: "@shubhhampers"
      },

      // Canonical URL
      alternates: {
        canonical: `https://www.shubhhampers.com/hampers/${resolvedParams.category}/${resolvedParams.subCategory}/${resolvedParams.slug}`
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
  } catch {
    return {
      title: "Product Not Found | Shubhhampers",
      description: "The requested hamper product could not be found."
    };
  }
}

// Product detail page component
export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ category: string; subCategory: string; slug: string }>;
}) {
  const resolvedParams = await params;

  // Parse and validate the route
  const routeParams = parseHamperRoute([
    resolvedParams.category,
    resolvedParams.subCategory,
    resolvedParams.slug
  ]);

  if (!routeParams || routeParams.type !== "product") {
    notFound();
  }

  try {
    // Fetch product data by slug
    const hamper = await fetchHamperBySlug(resolvedParams.slug);

    if (!hamper) {
      notFound();
    }

    // Verify that the category and subcategory in URL match the product data
    const expectedCategory = (hamper.categoryName || hamper.category).toLowerCase();
    const expectedSubCategory =
      (hamper.subCategoryName || hamper.subCategory)?.toLowerCase() || expectedCategory;

    if (
      resolvedParams.category !== expectedCategory ||
      resolvedParams.subCategory !== expectedSubCategory
    ) {
      // Redirect to correct URL or show not found
      notFound();
    }

    return (
      <main className='min-h-screen'>
        <Header />
        <HamperDetailsPage hamper={hamper} />
        <Footer />
      </main>
    );
  } catch {
    notFound();
  }
}
