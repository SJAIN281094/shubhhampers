import Link from "next/link";
import HamperCard from "./HamperCard";
import SectionHeader from "./ui/SectionHeader";
import EmptyState, { EmptyStateVariants } from "./ui/EmptyState";
import { HamperProduct, ApiPagination } from "../lib/hamper-api-types";

interface CategoryOption {
  id: string;
  label: string;
  icon: string;
  description?: string;
}

interface HamperListingPageServerProps {
  pageData: {
    title: string;
    description: string;
    apiParams?: { [key: string]: unknown };
    breadcrumbs?: { label: string; href: string }[];
  };
  hampers: HamperProduct[];
  pagination: ApiPagination;
  currentCategory?: string;
  showCategoryFilters?: boolean;
  baseUrl?: string; // For pagination links
}

const getCategoryTag = (category?: string) => {
  const categoryMap: Record<string, { emoji: string; text: string }> = {
    Festival: { emoji: "🎉", text: "Festival Hampers" },
    Wedding: { emoji: "💒", text: "Wedding Hampers" },
    Business: { emoji: "🏢", text: "Business Hampers" },
    Personal: { emoji: "💝", text: "Personal Hampers" }
  };

  return categoryMap[category || ""] || { emoji: "🎁", text: "Gift Hampers" };
};

// Server component for pagination controls
function PaginationControls({
  pagination,
  currentCategory,
  baseUrl = "/hampers"
}: {
  pagination: ApiPagination;
  currentCategory?: string;
  baseUrl?: string;
}) {
  const { page, pageCount } = pagination;

  if (pageCount <= 1) return null;

  const buildUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    if (currentCategory && currentCategory !== "all") {
      params.set("category", currentCategory);
    }
    if (pageNum > 1) {
      params.set("page", pageNum.toString());
    }
    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const showPages = pages.slice(Math.max(0, page - 3), Math.min(pageCount, page + 2));

  return (
    <div className='flex justify-center items-center space-x-2 mt-12'>
      {/* Previous Page */}
      {page > 1 && (
        <Link
          href={buildUrl(page - 1)}
          className='px-4 py-2 border border-brand-gold text-brand-brown hover:bg-brand-gold hover:text-white rounded-lg transition-colors'
        >
          Previous
        </Link>
      )}

      {/* Page Numbers */}
      {showPages.map(pageNum => (
        <Link
          key={pageNum}
          href={buildUrl(pageNum)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            pageNum === page
              ? "bg-brand-gold text-white"
              : "border border-brand-gold text-brand-brown hover:bg-brand-gold hover:text-white"
          }`}
        >
          {pageNum}
        </Link>
      ))}

      {/* Next Page */}
      {page < pageCount && (
        <Link
          href={buildUrl(page + 1)}
          className='px-4 py-2 border border-brand-gold text-brand-brown hover:bg-brand-gold hover:text-white rounded-lg transition-colors'
        >
          Next
        </Link>
      )}
    </div>
  );
}

// Server component for category filters - Chip Design
function CategoryFilters({
  currentCategory = "all",
  baseUrl = "/hampers"
}: {
  currentCategory?: string;
  baseUrl?: string;
}) {
  const categories: CategoryOption[] = [
    { id: "all", label: "All Hampers", icon: "🎁" },
    { id: "Festival", label: "Festival", icon: "🎉" },
    { id: "Wedding", label: "Wedding", icon: "💒" },
    { id: "Business", label: "Business", icon: "🏢" },
    { id: "Personal", label: "Personal", icon: "💝" }
  ];

  const buildCategoryUrl = (categoryId: string) => {
    if (categoryId === "all") {
      return baseUrl;
    }
    return `${baseUrl}?category=${categoryId}`;
  };

  return (
    <div className='text-center mb-8'>
      {/* Centered Heading */}
      <h3 className='text-xl font-semibold text-brand-dark mb-6'>Explore by Category</h3>

      {/* Category Chips */}
      <div className='flex flex-wrap justify-center gap-3'>
        {categories.map(category => {
          const isActive = currentCategory === category.id;

          return (
            <Link
              key={category.id}
              href={buildCategoryUrl(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-brand-gold to-brand-amber text-white shadow-lg transform scale-105"
                  : "bg-white border border-brand-gold/30 text-brand-dark hover:bg-brand-gold/10 hover:border-brand-gold shadow-sm"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function HamperListingPageServer({
  pageData,
  hampers,
  pagination,
  currentCategory = "all",
  showCategoryFilters = false,
  baseUrl = "/hampers"
}: HamperListingPageServerProps) {
  const categoryTag = getCategoryTag(currentCategory !== "all" ? currentCategory : undefined);

  return (
    <section className='py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Hero Section */}
        <div className='text-center mb-8 sm:mb-12'>
          {/* SEO H1 - Hidden but accessible */}
          <h1 className='sr-only'>{pageData.title}</h1>

          {/* Breadcrumb Structured Data */}
          {pageData.breadcrumbs && pageData.breadcrumbs.length > 0 && (
            <script
              type='application/ld+json'
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: pageData.breadcrumbs.map((crumb, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: crumb.label,
                    item: `https://www.shubhhampers.com${crumb.href}`
                  }))
                })
              }}
            />
          )}
          <SectionHeader
            tag={categoryTag}
            title={pageData.title}
            description={pageData.description}
            variant='center'
            size='lg'
            showDecorations={false}
          />
        </div>

        {/* Category Filters */}
        {showCategoryFilters && (
          <CategoryFilters currentCategory={currentCategory} baseUrl={baseUrl} />
        )}

        {/* Hampers Grid */}
        {hampers.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {hampers.map(hamper => (
              <HamperCard
                key={hamper.id}
                hamper={hamper}
                showPrice={false}
                showDetailsButton={true}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={EmptyStateVariants.noHampers.icon}
            title={EmptyStateVariants.noHampers.title}
            description="We couldn't find any hampers matching your criteria. Try adjusting your filters or browse all hampers."
            actions={[
              {
                label: "View All Hampers",
                href: "/hampers",
                variant: "primary" as const
              }
            ]}
            className='py-16'
          />
        )}

        {/* Pagination */}
        <PaginationControls
          pagination={pagination}
          currentCategory={currentCategory}
          baseUrl={baseUrl}
        />
      </div>
    </section>
  );
}
