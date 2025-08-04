import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HamperListingPage from "@components/HamperListingPage";
import { parseHamperRoute, getHamperPageData, generateAllHamperPaths } from "@lib/hamper-url-utils";
import { fetchHampers, transformApiHamperToUI } from "@lib/hamper-api";

// Generate static params for all subcategory pages
export async function generateStaticParams() {
  const allPaths = generateAllHamperPaths();

  // Filter only subcategory-level paths (two segments, not relation)
  return allPaths
    .filter(path => path.params.length === 2 && path.params[0] !== "relation")
    .map(path => ({
      category: path.params[0],
      subCategory: path.params[1]
    }));
}

// Generate metadata for each subcategory page
export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string; subCategory: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  // Parse the route to extract subcategory information
  const routeParams = parseHamperRoute([resolvedParams.category, resolvedParams.subCategory]);

  if (!routeParams || routeParams.type !== "subcategory") {
    return {
      title: "Subcategory Not Found | Shubhhampers",
      description: "The requested hamper subcategory could not be found."
    };
  }

  const pageData = getHamperPageData(routeParams);
  const categoryName = routeParams.category!;
  const subCategoryName = routeParams.subCategory!;
  const capitalizedCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  const capitalizedSubCategory = subCategoryName.charAt(0).toUpperCase() + subCategoryName.slice(1);

  return {
    title: `${capitalizedSubCategory} ${capitalizedCategory} Gift Hampers | ${capitalizedSubCategory} Hampers | Shubhhampers`,
    description: `Exquisite ${subCategoryName} ${categoryName} gift hampers for special celebrations. Premium ${subCategoryName} hampers with carefully selected items and elegant presentation. Order ${subCategoryName} hampers online.`,
    keywords: `${subCategoryName} hampers, ${subCategoryName} ${categoryName} hampers, ${subCategoryName} gift hampers, ${subCategoryName} gifts, ${categoryName} ${subCategoryName} hampers, premium ${subCategoryName} hampers`,
    authors: [{ name: "Shubhhampers Team" }],
    creator: "Shubhhampers",
    publisher: "Shubhhampers",

    // Open Graph
    openGraph: {
      title: `${capitalizedSubCategory} ${capitalizedCategory} Gift Hampers | Shubhhampers`,
      description: pageData.description,
      url: `https://www.shubhhampers.com/hampers/${resolvedParams.category}/${resolvedParams.subCategory}`,
      siteName: "Shubhhampers",
      images: [
        {
          url: `https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/${categoryName}-${subCategoryName}-hampers-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${capitalizedSubCategory} ${capitalizedCategory} Gift Hampers`
        }
      ],
      locale: "en_IN",
      type: "website"
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: `${capitalizedSubCategory} ${capitalizedCategory} Gift Hampers | Shubhhampers`,
      description: pageData.description,
      images: [
        `https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/${categoryName}-${subCategoryName}-hampers-og.jpg`
      ],
      creator: "@shubhhampers"
    },

    // Canonical URL
    alternates: {
      canonical: `https://www.shubhhampers.com/hampers/${resolvedParams.category}/${resolvedParams.subCategory}`
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

// Subcategory page component
// Server-side data fetching for subcategory page
async function getSubCategoryPageData(categoryName: string, subCategoryName: string) {
  try {
    const response = await fetchHampers({
      category: categoryName,
      subCategory: subCategoryName,
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

export default async function SubCategoryPage({
  params
}: {
  params: Promise<{ category: string; subCategory: string }>;
}) {
  const resolvedParams = await params;

  // Parse and validate the route
  const routeParams = parseHamperRoute([resolvedParams.category, resolvedParams.subCategory]);

  if (!routeParams || routeParams.type !== "subcategory") {
    notFound();
  }

  // Get page data based on the parsed route
  const pageData = getHamperPageData(routeParams);

  // Fetch hampers data server-side
  const categoryName =
    routeParams.category!.charAt(0).toUpperCase() + routeParams.category!.slice(1);
  const subCategoryName =
    routeParams.subCategory!.charAt(0).toUpperCase() + routeParams.subCategory!.slice(1);
  const { hampers, pagination } = await getSubCategoryPageData(categoryName, subCategoryName);

  return (
    <main className='min-h-screen'>
      <Header />
      <HamperListingPage
        pageData={pageData}
        showCategoryFilters={false} // Don't show category filters on specific subcategory pages
        initialHampers={hampers}
        initialPagination={pagination}
      />
      <Footer />
    </main>
  );
}
