"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "@ui-kit/button";
import HamperCard from "./HamperCard";
import { HamperProduct } from "../lib/hamper-api-types";
import { useHampersPaginatedLegacy, useHamperDebugInfo } from "../lib/hamper-swr-hooks";

export default function HampersClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [allHampers, setAllHampers] = useState<HamperProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Get debug info about SWR environment
  const debugInfo = useHamperDebugInfo();

  // Use SWR hook for data fetching
  const { hampers, isLoading, error, hasMore, loadMore, refresh } = useHampersPaginatedLegacy(
    activeCategory,
    1,
    25
  );

  const categories = [
    { id: "all", label: "All Hampers", icon: "🎁" },
    { id: "Festival", label: "Festival", icon: "🎉" },
    { id: "Wedding", label: "Wedding", icon: "💒" },
    { id: "Business", label: "Business", icon: "🏢" },
    { id: "Corporate", label: "Corporate", icon: "🏢" }
  ];

  // Initialize all hampers for infinite scroll
  useEffect(() => {
    if (hampers.length > 0) {
      setAllHampers(hampers);
    }
  }, [hampers]);

  // Error handling
  useEffect(() => {
    if (error) {
      // Error is automatically handled by SWR and displayed in UI
    }
  }, [error]);

  // No URL parameter handling needed for categories

  // Reset allHampers when category changes
  useEffect(() => {
    setAllHampers(hampers);
    setCurrentPage(1);
  }, [activeCategory, hampers]);

  // Load more hampers for infinite scroll
  const loadMoreHampers = useCallback(async () => {
    if (!isLoading && hasMore) {
      try {
        const newHampers = await loadMore(currentPage + 1);

        if (newHampers && newHampers.length > 0) {
          setAllHampers(prev => [...prev, ...newHampers]);
          setCurrentPage(prev => prev + 1);
        }
      } catch {
        // Error is handled by SWR
      }
    }
  }, [isLoading, hasMore, loadMore, currentPage]);

  // Memoize category change handler
  const handleCategoryChange = useCallback(
    (categoryId: string) => {
      setActiveCategory(categoryId);
      setCurrentPage(1);

      // Refresh data for new category
      refresh();
    },
    [refresh]
  );

  // Removed unused handleWhatsAppInquiry since HamperCard handles WhatsApp internally

  return (
    <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
      {/* Hero Section */}
      <section className='relative py-20 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-amber/5' />
        <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl animate-pulse' />
        <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-bounce' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6'>
              <span className='text-brand-brown font-semibold'>🎁 Gift Hampers</span>
            </div>

            <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
              Gift Hampers & Gift Baskets
            </h1>

            <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
              Discover our hampers collection featuring wedding hampers, festival gift baskets,
              corporate hampers, and personal celebration hampers. Each gift hamper is thoughtfully
              curated to create magical moments and lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='py-12 bg-white'>
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

      {/* Hampers Grid */}
      <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
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
          ) : isLoading && allHampers.length === 0 ? (
            <div className='text-center py-12'>
              <div className='animate-spin w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full mx-auto mb-4' />
              <p className='text-brand-brown font-medium'>
                Loading hampers from our collection... (Environment: {debugInfo.environment})
              </p>
            </div>
          ) : (
            <InfiniteScroll
              dataLength={allHampers.length}
              next={loadMoreHampers}
              hasMore={hasMore}
              loader={
                <div className='text-center py-8'>
                  <div className='animate-spin w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full mx-auto mb-4' />
                  <p className='text-brand-brown font-medium'>Loading more hampers...</p>
                </div>
              }
              endMessage={
                allHampers.length > 0 ? (
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
                {allHampers.map((hamper: HamperProduct) => (
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

          {!isLoading && !error && allHampers.length === 0 && (
            <div className='text-center py-12'>
              <div className='text-6xl mb-4'>🎁</div>
              <h3 className='text-2xl font-bold text-brand-dark mb-4'>No Hampers Found</h3>
              <p className='text-gray-600 mb-6'>
                {activeCategory === "all"
                  ? "We're working on adding more gift hampers to our collection. Please check back soon!"
                  : "We're working on adding more gift hampers in this category. Meanwhile, explore our other amazing hampers and gift baskets!"}
              </p>
              {activeCategory !== "all" && (
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
      <section className='py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-4xl mx-auto'>
            <h2 className='font-display text-4xl lg:text-5xl font-bold mb-6'>
              Need Custom Hampers?
            </h2>
            <p className='text-xl mb-8 leading-relaxed'>
              Can&apos;t find exactly what you&apos;re looking for? We specialize in creating custom
              gift hampers and gift baskets tailored to your specific celebration needs and
              relationship goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact?service=custom'>
                <Button className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                  🎨 Create Custom Hamper
                </Button>
              </Link>
              <Link href='/business'>
                <Button className='bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber hover:text-brand-dark transform hover:scale-105'>
                  🏢 Business Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
