"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "@ui-kit/button";
import HamperCard from "./HamperCard";
import { HamperProduct, HamperPageData, ApiHamperProduct } from "../lib/hamper-api-types";
import { fetchHampers, transformApiHamperToUI } from "../lib/hamper-api";
import { getApiParamsFromSlug } from "../lib/hamper-slug-mapping";

interface HamperPageTemplateProps {
  data: HamperPageData;
  slug: string; // Add slug to support API pagination
}

export default function HamperPageTemplate({ data, slug }: HamperPageTemplateProps) {
  const [products, setProducts] = useState<HamperProduct[]>(data.products);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Get API parameters from slug
  const apiParams = getApiParamsFromSlug(slug);

  const loadMoreProducts = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    try {
      const nextPage = page + 1;
      const response = await fetchHampers({
        category: apiParams?.category,
        subCategory: apiParams?.subCategory || undefined,
        page: nextPage,
        pageSize: 25,
        isActive: true
      });

      // fetchHampers returns raw API data, we need to transform it
      const newProducts = response.data.map((apiHamper: ApiHamperProduct) =>
        transformApiHamperToUI(apiHamper)
      );

      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts(prev => [...prev, ...newProducts]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Error loading more products:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page, apiParams, loading]);

  // Removed unused handleWhatsAppInquiry since HamperCard handles WhatsApp internally

  return (
    <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
      {/* Hero Section */}
      <section className='relative py-20 overflow-hidden'>
        {/* Background Elements */}
        <div className='absolute inset-0 bg-brand-gold/8' />
        <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/15 rounded-full opacity-60' />
        <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/20 rounded-full opacity-50' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6'>
              <span className='text-brand-brown font-semibold'>🎁 {data.pageSubtitle}</span>
            </div>

            <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
              {data.heroTitle}
            </h1>

            <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
              {data.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <InfiniteScroll
            dataLength={products.length}
            next={loadMoreProducts}
            hasMore={hasMore}
            loader={
              <div className='text-center py-8'>
                <div className='animate-spin w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full mx-auto mb-4' />
                <p className='text-brand-brown font-medium'>Loading more hampers...</p>
              </div>
            }
            endMessage={
              <div className='text-center py-12'>
                <div className='text-6xl mb-4'>🎉</div>
                <h3 className='text-2xl font-bold text-brand-dark mb-4'>
                  You've seen all our hampers!
                </h3>
                <p className='text-gray-600 mb-6'>
                  That's all the hampers we have in this category. Explore other categories or
                  create a custom hamper!
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Link href='/hampers'>
                    <Button className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'>
                      View All Categories
                    </Button>
                  </Link>
                  <Link href='/contact?service=custom'>
                    <Button className='bg-transparent text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber'>
                      Create Custom Hamper
                    </Button>
                  </Link>
                </div>
              </div>
            }
          >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {products.map((product: HamperProduct) => (
                <HamperCard
                  key={product.id}
                  hamper={product}
                  showPrice={false}
                  showDetailsButton={true}
                />
              ))}
            </div>
          </InfiniteScroll>

          {products.length === 0 && !loading && (
            <div className='text-center py-12'>
              <div className='text-6xl mb-4'>🎁</div>
              <h3 className='text-2xl font-bold text-brand-dark mb-4'>No Hampers Found</h3>
              <p className='text-gray-600 mb-6'>
                We're working on adding more hampers in this category. Meanwhile, explore our other
                amazing hampers!
              </p>
              <Link href='/hampers'>
                <Button className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'>
                  View All Hampers
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-4xl mx-auto'>
            <h2 className='font-display text-4xl lg:text-5xl font-bold mb-6'>
              Need Custom {data.pageTitle}?
            </h2>
            <p className='text-xl mb-8 leading-relaxed'>
              Can't find exactly what you're looking for? We specialize in creating custom hampers
              tailored to your specific needs and celebration goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact?service=custom'>
                <Button className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                  🎨 Create Custom Hamper
                </Button>
              </Link>
              <Link href='/hampers'>
                <Button className='bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber hover:text-brand-dark transform hover:scale-105'>
                  🎁 Explore All Hampers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
