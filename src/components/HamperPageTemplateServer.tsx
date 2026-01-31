import Link from "next/link";
import HamperCard from "./HamperCard";
import SectionHeader from "./ui/SectionHeader";
import EmptyState, { EmptyStateVariants } from "./ui/EmptyState";
import { HamperProduct, ApiPagination } from "@lib/hamper-api-types";

interface HamperPageData {
  pageTitle: string;
  pageSubtitle?: string;
  heroTitle: string;
  heroDescription: string;
  seoDescription: string;
  products: HamperProduct[];
  category?: string;
  subCategory?: string;
  pagination: ApiPagination;
}

interface HamperPageTemplateServerProps {
  data: HamperPageData;
  slug: string;
}

// Server component for pagination controls
function PaginationControls({
  pagination,
  baseUrl
}: {
  pagination: ApiPagination;
  baseUrl: string;
}) {
  const { page, pageCount } = pagination;

  if (pageCount <= 1) return null;

  const buildUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    if (pageNum > 1) {
      params.set("page", pageNum.toString());
    }
    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const showPages = pages.slice(Math.max(0, page - 3), Math.min(pageCount, page + 2));

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {/* Previous Page */}
      {page > 1 && (
        <Link
          href={buildUrl(page - 1)}
          className="px-4 py-2 border border-brand-gold text-brand-brown hover:bg-brand-gold hover:text-white rounded-lg transition-colors"
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
          className="px-4 py-2 border border-brand-gold text-brand-brown hover:bg-brand-gold hover:text-white rounded-lg transition-colors"
        >
          Next
        </Link>
      )}
    </div>
  );
}

export default function HamperPageTemplateServer({ data, slug }: HamperPageTemplateServerProps) {
  const { pageTitle, heroTitle, heroDescription, products, pagination } = data;

  // Build base URL from slug
  const baseUrl = `/hampers/${slug}`;

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-brand-light via-white to-brand-gold/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <SectionHeader
            title={heroTitle}
            description={heroDescription}
            variant="center"
            size="lg"
            showDecorations={false}
          />
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map(hamper => (
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
            description="We couldn't find any hampers in this collection. Please check back later or browse our other collections."
            actions={[
              {
                label: "Browse All Hampers",
                href: "/hampers",
                variant: "primary" as const
              }
            ]}
            className="py-16"
          />
        )}

        {/* Pagination */}
        <PaginationControls pagination={pagination} baseUrl={baseUrl} />

        {/* SEO Content */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">{pageTitle}</h2>
          <p className="text-gray-700 leading-relaxed">{data.seoDescription}</p>
        </div>
      </div>
    </section>
  );
}
