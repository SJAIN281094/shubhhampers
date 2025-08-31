import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HamperListingPageServer from "@components/HamperListingPageServer";
import { fetchHampers, transformApiHamperToUI } from "@lib/hamper-api";
import { parseHamperRoute, getHamperPageData, generateAllHamperPaths } from "@lib/hamper-url-utils";
import {
  getRelationshipApiParams,
  getRelationshipFallbackParams,
  isRelationshipSupported
} from "@lib/relationship-mapping";

// Generate static params for all relationship pages
export async function generateStaticParams() {
  const allPaths = generateAllHamperPaths();

  // Filter only relationship-level paths (relation/[relationship])
  return allPaths
    .filter(path => path.params.length === 2 && path.params[0] === "relation")
    .map(path => ({
      relationship: path.params[1]
    }));
}

// Generate metadata for each relationship page
export async function generateMetadata({
  params
}: {
  params: Promise<{ relationship: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  // Parse the route to extract relationship information
  const routeParams = parseHamperRoute(["relation", resolvedParams.relationship]);

  if (!routeParams || routeParams.type !== "relation") {
    return {
      title: "Relationship Gift Not Found | Shubhhampers",
      description: "The requested relationship gift hamper could not be found."
    };
  }

  const pageData = getHamperPageData(routeParams);
  const relationshipName = routeParams.relationship || "";

  // Extract relationship from URL (gift-hamper-for-sister -> sister)
  const relationshipMatch = resolvedParams.relationship.match(/^gift-hamper-for-(.+)$/);
  const relationship = relationshipMatch ? relationshipMatch[1] : relationshipName;
  const capitalizedRel = relationship.charAt(0).toUpperCase() + relationship.slice(1);

  return {
    title: `Gift Hamper for ${capitalizedRel} | ${capitalizedRel} Gift Hampers | Shubhhampers`,
    description: `Perfect gift hampers for your ${relationship}. Thoughtfully curated hampers with premium products that express your love and care. Order the best ${relationship} gift hampers online.`,
    keywords: `gift for ${relationship}, ${relationship} hampers, ${relationship} gifts, gift hamper for ${relationship}, ${relationship} gift baskets, best gifts for ${relationship}, premium ${relationship} hampers`,
    authors: [{ name: "Shubhhampers Team" }],
    creator: "Shubhhampers",
    publisher: "Shubhhampers",

    // Open Graph
    openGraph: {
      title: `Gift Hamper for ${capitalizedRel} | Shubhhampers`,
      description: pageData.description,
      url: `https://www.shubhhampers.com/hampers/relation/${resolvedParams.relationship}`,
      siteName: "Shubhhampers",
      images: [
        {
          url: `https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/gift-hamper-for-${relationship}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `Gift Hamper for ${capitalizedRel}`
        }
      ],
      locale: "en_IN",
      type: "website"
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: `Gift Hamper for ${capitalizedRel} | Shubhhampers`,
      description: pageData.description,
      images: [
        `https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/gift-hamper-for-${relationship}-og.jpg`
      ],
      creator: "@shubhhampers"
    },

    // Canonical URL
    alternates: {
      canonical: `https://www.shubhhampers.com/hampers/relation/${resolvedParams.relationship}`
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

// Server-side data fetching for relationship page
async function getRelationshipPageData(relationship: string, page: number = 1) {
  try {
    // Get relationship-specific API parameters
    const apiParams = getRelationshipApiParams(relationship, page, 25);

    let response = await fetchHampers(apiParams);

    // If no results found and this is a supported relationship, try fallback
    if (response.data.length === 0 && isRelationshipSupported(relationship)) {
      const fallbackParams = getRelationshipFallbackParams(relationship, page, 25);
      response = await fetchHampers(fallbackParams);
    }

    return {
      hampers: response.data.map(transformApiHamperToUI),
      pagination: response.meta.pagination
    };
  } catch {
    // Error is handled by returning empty results
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

// Relationship page component
export default async function RelationshipPage({
  params,
  searchParams
}: {
  params: Promise<{ relationship: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // Parse and validate the route
  const routeParams = parseHamperRoute(["relation", resolvedParams.relationship]);

  if (!routeParams || routeParams.type !== "relation") {
    notFound();
  }

  // Get page data based on the parsed route
  const pageData = getHamperPageData(routeParams);

  // Get page number from search params
  const page = Number(resolvedSearchParams.page) || 1;

  // Fetch hampers data server-side
  const { hampers, pagination } = await getRelationshipPageData(
    routeParams.relationship || "",
    page
  );

  return (
    <main className="min-h-screen">
      <Header />
      <HamperListingPageServer
        pageData={pageData}
        hampers={hampers}
        pagination={pagination}
        currentCategory="relationship"
        showCategoryFilters={false} // Don't show category filters on relationship pages
        baseUrl={`/hampers/relation/${resolvedParams.relationship}`}
      />
      <Footer />
    </main>
  );
}
