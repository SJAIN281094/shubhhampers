"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "@ui-kit/button";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import HamperCard from "./HamperCard";
import { HamperProduct } from "../lib/hamper-api-types";
import { useHampersPaginated, useHamperDebugInfo } from "../lib/hamper-swr-hooks";
import { HamperPageData } from "../lib/hamper-url-utils";

interface HamperListingPageProps {
  pageData: HamperPageData;
  showCategoryFilters?: boolean;
  customFilters?: Record<string, unknown>;
  initialHampers?: HamperProduct[];
  initialPagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

interface CategoryOption {
  id: string;
  label: string;
  icon: string;
}

export default function HamperListingPage({
  pageData,
  showCategoryFilters = false,
  customFilters = {},
  initialHampers = [],
  initialPagination
}: HamperListingPageProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [allHampers, setAllHampers] = useState<HamperProduct[]>(initialHampers);
  const [currentPage, setCurrentPage] = useState(initialPagination?.page || 1);
  const [hasMoreData, setHasMoreData] = useState(
    initialPagination ? initialPagination.page < initialPagination.pageCount : true
  );
  // Track if we have more data for pagination
  // const [totalCount, setTotalCount] = useState(initialPagination?.total || 0);
  const isFirstLoad = useRef(!initialHampers.length); // Skip first load if we have initial data
  const lastApiParams = useRef<string>("");

  // Get debug info about SWR environment
  const debugInfo = useHamperDebugInfo();

  // Memoize apiParams to prevent infinite re-renders
  const apiParams = useMemo(
    () => ({
      ...pageData.apiParams,
      ...customFilters,
      ...(activeCategory !== "all" && showCategoryFilters && { category: activeCategory })
    }),
    [pageData.apiParams, customFilters, activeCategory, showCategoryFilters]
  );

  // Determine when to use SWR vs server-side data
  // Use SWR only when:
  // 1. No initial data provided (fallback)
  // 2. User actively changed category filter (only on main hampers page)
  const shouldUseSWR =
    initialHampers.length === 0 || (showCategoryFilters && activeCategory !== "all");

  // Use SWR hook for client-side fetching when needed
  const swrResult = useHampersPaginated(
    shouldUseSWR ? apiParams : undefined, // undefined to skip SWR
    1,
    25
  );

  // Use either server-side data or SWR data
  const displayHampers = shouldUseSWR ? swrResult.hampers : allHampers;
  const isLoading = shouldUseSWR ? swrResult.isLoading : false;
  const error = shouldUseSWR ? swrResult.error : null;
  const hasMore = shouldUseSWR ? swrResult.hasMore : hasMoreData;
  const loadMore = swrResult.loadMore;
  const refresh = swrResult.refresh;

  // Category options for filtering (only shown if showCategoryFilters is true)
  const categories: CategoryOption[] = [
    { id: "all", label: "All Hampers", icon: "🎁" },
    { id: "Festival", label: "Festival", icon: "🎉" },
    { id: "Wedding", label: "Wedding", icon: "💒" },
    { id: "Business", label: "Business", icon: "🏢" },
    { id: "Personal", label: "Personal", icon: "💝" }
  ];

  // Error handling
  useEffect(() => {
    if (error) {
      // Error is automatically handled by SWR and displayed in UI
    }
  }, [error]);

  // Track API params changes to prevent unnecessary updates
  const currentApiParamsKey = JSON.stringify(apiParams);

  // Reset when API params change (category change, etc.) - only for SWR pages
  useEffect(() => {
    if (showCategoryFilters && lastApiParams.current !== currentApiParamsKey) {
      setAllHampers(initialHampers); // Reset to initial data, not empty
      setCurrentPage(initialPagination?.page || 1);
      isFirstLoad.current = initialHampers.length === 0;
      lastApiParams.current = currentApiParamsKey;
    }
  }, [currentApiParamsKey, showCategoryFilters, initialHampers, initialPagination]);

  // Update allHampers when fresh data is loaded (only for SWR data)
  useEffect(() => {
    if (shouldUseSWR && swrResult.hampers.length > 0 && isFirstLoad.current) {
      setAllHampers(swrResult.hampers);
      isFirstLoad.current = false;
    }
  }, [shouldUseSWR, swrResult.hampers, isFirstLoad]);

  // Load more hampers for infinite scroll
  const loadMoreHampers = useCallback(async () => {
    if (!isLoading && hasMore && loadMore) {
      try {
        const newHampers = await loadMore(currentPage + 1);

        if (newHampers && newHampers.length > 0) {
          // Always append new hampers to existing ones
          setAllHampers(prev => [...prev, ...newHampers]);
          setCurrentPage(prev => prev + 1);

          // Update hasMore state for server-side data
          if (!shouldUseSWR) {
            setHasMoreData(newHampers.length === 25); // Assuming pageSize is 25
          }
          isFirstLoad.current = false;
        }
      } catch {
        // Error is handled by SWR or silently ignored
      }
    }
  }, [isLoading, hasMore, loadMore, currentPage, shouldUseSWR]);

  // Handle category change (only for pages with category filters)
  const handleCategoryChange = useCallback(
    (categoryId: string) => {
      setActiveCategory(categoryId);
      // The useEffect will handle resetting the state when apiParams change
      // Refresh data for new category
      refresh();
    },
    [refresh]
  );

  return (
    <div className='bg-gradient-to-br from-brand-light/40 via-brand-gold/10 to-brand-amber/5'>
      {/* Breadcrumb Navigation with SEO Schema */}
      <section className='py-6 bg-transparent'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Breadcrumb Schema for SEO */}
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

          <nav
            className='sr-only'
            aria-label='Breadcrumb'
            itemScope
            itemType='https://schema.org/BreadcrumbList'
          >
            {pageData.breadcrumbs.map((crumb, index) => (
              <div
                key={`breadcrumb-${crumb.href}`}
                className='flex items-center'
                itemProp='itemListElement'
                itemScope
                itemType='https://schema.org/ListItem'
              >
                {index > 0 && <span className='mx-2'>/</span>}
                {index === pageData.breadcrumbs.length - 1 ? (
                  <span
                    className='text-brand-brown font-medium'
                    itemProp='name'
                    aria-current='page'
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className='hover:text-brand-brown transition-colors'
                    itemProp='item'
                  >
                    <span itemProp='name'>{crumb.label}</span>
                  </Link>
                )}
                <meta itemProp='position' content={String(index + 1)} />
              </div>
            ))}
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className='py-12 sm:py-16 lg:py-20 bg-transparent'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark mb-6'>
            {pageData.title}
          </h1>
          <p className='text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            {pageData.description}
          </p>
        </div>
      </section>

      {/* Category Filter (conditional) */}
      {showCategoryFilters && (
        <section className='py-12 bg-transparent'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-wrap justify-center gap-4'>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-brand-gold to-brand-amber text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className='text-lg'>{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hampers Grid */}
      <section className='py-20 bg-transparent'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Error state */}
          {error ? (
            <div className='text-center py-12'>
              <div className='text-6xl mb-4'>⚠️</div>
              <h3 className='text-2xl font-bold text-red-600 mb-4'>Failed to Load Hampers</h3>
              <p className='text-gray-600 mb-6'>
                Environment: {debugInfo.environment} | Server Actions:{" "}
                {debugInfo.useServerActions ? "Yes" : "No"}
              </p>
              <Button
                onClick={() => refresh()}
                className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-6 py-3 rounded-full'
              >
                Try Again
              </Button>
            </div>
          ) : isLoading && displayHampers.length === 0 ? (
            <div className='text-center py-12'>
              <div className='animate-spin w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full mx-auto mb-4' />
              <p className='text-brand-brown font-medium'>
                Loading hampers from our collection... (Environment: {debugInfo.environment})
              </p>
            </div>
          ) : (
            <InfiniteScroll
              dataLength={displayHampers.length}
              next={loadMoreHampers}
              hasMore={hasMore}
              loader={
                <div className='text-center py-8'>
                  <div className='animate-spin w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full mx-auto mb-4' />
                  <p className='text-brand-brown font-medium'>Loading more hampers...</p>
                </div>
              }
              endMessage={
                displayHampers.length > 0 ? (
                  <div className='text-center py-12'>
                    <div className='text-6xl mb-4'>🎉</div>
                    <h3 className='text-2xl font-bold text-brand-dark mb-4'>
                      You&apos;ve seen all our hampers!
                    </h3>
                    <p className='text-gray-600 mb-6'>
                      That&apos;s all the hampers we have in this category. Explore other
                      categories!
                    </p>
                  </div>
                ) : null
              }
            >
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {displayHampers.map((hamper: HamperProduct) => (
                  <HamperCard
                    key={hamper.id}
                    hamper={hamper}
                    showPrice={false}
                    showDetailsButton={true}
                  />
                ))}
              </div>
            </InfiniteScroll>
          )}

          {/* No hampers found state */}
          {!isLoading && !error && allHampers.length === 0 && (
            <div className='text-center py-12'>
              <div className='text-6xl mb-4'>🎁</div>
              <h3 className='text-2xl font-bold text-brand-dark mb-4'>No Hampers Found</h3>
              <p className='text-gray-600 mb-6'>
                {showCategoryFilters && activeCategory === "all"
                  ? "We're working on adding more gift hampers to our collection. Please check back soon!"
                  : "We're working on adding more gift hampers in this category. Meanwhile, explore our other amazing hampers and gift baskets!"}
              </p>
              {showCategoryFilters && activeCategory !== "all" && (
                <div className='flex flex-wrap gap-4 justify-center'>
                  <Button
                    onClick={() => handleCategoryChange("all")}
                    className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
                  >
                    🎁 All Hampers
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-r from-brand-brown via-brand-dark to-brand-brown'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='font-display text-3xl sm:text-4xl font-bold text-white mb-6'>
            Can&apos;t Find the Perfect Hamper?
          </h2>
          <p className='text-xl text-brand-light mb-8 max-w-2xl mx-auto'>
            Let us create a custom hamper just for you. Contact our team for personalized
            recommendations.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <PrimaryButton size='lg'>📞 Contact Us</PrimaryButton>
            </Link>
            <SecondaryButton size='lg' onClick={() => (window.location.href = "/hampers")}>
              🎁 Browse All Hampers
            </SecondaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
