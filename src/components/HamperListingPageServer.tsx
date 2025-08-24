import Link from "next/link";
import HamperCard from "./HamperCard";
import SectionHeader from "./ui/SectionHeader";
import EmptyState, { EmptyStateVariants } from "./ui/EmptyState";
import { HamperProduct, ApiPagination } from "../lib/hamper-api-types";

interface CategoryOption {
  id: string;
  label: string;
  icon: string;
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

// Server component for category filters
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
    <div className='bg-white rounded-2xl shadow-lg border border-brand-gold/20 p-6 mb-8'>
      <h3 className='text-lg font-semibold text-brand-dark mb-4'>Filter by Category</h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3'>
        {categories.map(category => (
          <Link
            key={category.id}
            href={buildCategoryUrl(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              currentCategory === category.id
                ? "bg-brand-gold text-white shadow-md"
                : "bg-gray-50 text-gray-700 hover:bg-brand-gold/10 hover:text-brand-brown"
            }`}
          >
            <span className='text-lg'>{category.icon}</span>
            <span>{category.label}</span>
          </Link>
        ))}
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
