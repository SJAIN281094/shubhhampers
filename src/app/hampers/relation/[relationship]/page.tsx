import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HamperListingPage from "@components/HamperListingPage";
import { parseHamperRoute, getHamperPageData, generateAllHamperPaths } from "@lib/hamper-url-utils";

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
  const relationshipName = routeParams.relationship!;

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

// Relationship page component
export default async function RelationshipPage({
  params
}: {
  params: Promise<{ relationship: string }>;
}) {
  const resolvedParams = await params;

  // Parse and validate the route
  const routeParams = parseHamperRoute(["relation", resolvedParams.relationship]);

  if (!routeParams || routeParams.type !== "relation") {
    notFound();
  }

  // Get page data based on the parsed route
  const pageData = getHamperPageData(routeParams);

  // For relationship-based hampers, we might need custom filtering
  // This could be based on tags, special categories, or custom API parameters
  const customFilters = {
    // You can add custom logic here to filter hampers by relationship
    // For example: tags: [routeParams.relationship], or special relationship-based categories
  };

  return (
    <main className='min-h-screen'>
      <Header />
      <HamperListingPage
        pageData={pageData}
        showCategoryFilters={false} // Don't show category filters on relationship pages
        customFilters={customFilters}
      />
      <Footer />
    </main>
  );
}
