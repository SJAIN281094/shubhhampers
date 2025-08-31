import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HamperListingPageServer from "@components/HamperListingPageServer";
import { parseHamperRoute, getHamperPageData, generateAllHamperPaths } from "@lib/hamper-url-utils";
import { fetchHampers, transformApiHamperToUI } from "@lib/hamper-api";

// Generate static params for all category pages
export async function generateStaticParams() {
  const allPaths = generateAllHamperPaths();

  // Filter only category-level paths (single segment)
  return allPaths
    .filter(path => path.params.length === 1)
    .map(path => ({
      category: path.params[0]
    }));
}

// Generate metadata for each category page
export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  // Parse the route to extract category information
  const routeParams = parseHamperRoute([resolvedParams.category]);

  if (!routeParams || routeParams.type !== "category") {
    return {
      title: "Category Not Found | Shubhhampers",
      description: "The requested hamper category could not be found."
    };
  }

  const pageData = getHamperPageData(routeParams);
  const categoryName = routeParams.category || "";
  const capitalizedCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return {
    title: `${capitalizedCategory} Gift Hampers | ${capitalizedCategory} Hampers Online | Shubhhampers`,
    description: `Premium ${categoryName} gift hampers for every occasion. Curated ${categoryName} hampers with elegant packaging and thoughtful selection. Order ${categoryName} hampers online with fast delivery.`,
    keywords: `${categoryName} hampers, ${categoryName} gift hampers, ${categoryName} gifts, ${categoryName} gift baskets, premium ${categoryName} hampers, ${categoryName} hampers online`,
    authors: [{ name: "Shubhhampers Team" }],
    creator: "Shubhhampers",
    publisher: "Shubhhampers",

    // Open Graph
    openGraph: {
      title: `${capitalizedCategory} Gift Hampers | Shubhhampers`,
      description: pageData.description,
      url: `https://www.shubhhampers.com/hampers/${resolvedParams.category}`,
      siteName: "Shubhhampers",
      images: [
        {
          url: `https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/${categoryName}-hampers-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${capitalizedCategory} Gift Hampers`
        }
      ],
      locale: "en_IN",
      type: "website"
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: `${capitalizedCategory} Gift Hampers | Shubhhampers`,
      description: pageData.description,
      images: [
        `https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/${categoryName}-hampers-og.jpg`
      ],
      creator: "@shubhhampers"
    },

    // Canonical URL
    alternates: {
      canonical: `https://www.shubhhampers.com/hampers/${resolvedParams.category}`
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
}

// Category page component
// Server-side data fetching for category page
async function getCategoryPageData(categoryName: string, page: number = 1) {
  try {
    const response = await fetchHampers({
      category: categoryName,
      pageSize: 25,
      page,
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

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // Parse and validate the route
  const routeParams = parseHamperRoute([resolvedParams.category]);

  if (!routeParams || routeParams.type !== "category") {
    notFound();
  }

  // Get page data based on the parsed route
  const pageData = getHamperPageData(routeParams);

  // Get page number from search params
  const page = Number(resolvedSearchParams.page) || 1;

  // Fetch hampers data server-side
  const categoryName = routeParams.category
    ? routeParams.category.charAt(0).toUpperCase() + routeParams.category.slice(1)
    : "Unknown";
  const { hampers, pagination } = await getCategoryPageData(categoryName, page);

  return (
    <main className="min-h-screen">
      <Header />
      <HamperListingPageServer
        pageData={pageData}
        hampers={hampers}
        pagination={pagination}
        currentCategory={categoryName}
        showCategoryFilters={false} // Don't show category filters on category-specific pages
        baseUrl={`/hampers/${resolvedParams.category}`}
      />
      <Footer />
    </main>
  );
}
