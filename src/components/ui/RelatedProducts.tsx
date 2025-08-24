/**
 * Related Products Component
 * Strengthens internal linking between hamper categories and products
 */

import React from "react";
import Link from "next/link";
import { HamperProduct } from "@lib/hamper-api-types";
import HamperCard from "../HamperCard";

interface RelatedProductsProps {
  title?: string;
  products: HamperProduct[];
  currentProductId?: string;
  showPrice?: boolean;
  className?: string;
  variant?: "grid" | "carousel";
  linkContext?: "category" | "subcategory" | "related" | "recommended";
}

const contextTitles = {
  category: "More from this Category",
  subcategory: "Similar Hampers",
  related: "Related Products",
  recommended: "You Might Also Like"
};

export default function RelatedProducts({
  title,
  products,
  currentProductId,
  showPrice = false,
  className = "",
  variant = "grid",
  linkContext = "related"
}: RelatedProductsProps) {
  // Filter out current product if provided
  const filteredProducts = currentProductId
    ? products.filter(product => product.id !== currentProductId)
    : products;

  // Limit to maximum 8 products for performance
  const displayProducts = filteredProducts.slice(0, 8);

  if (displayProducts.length === 0) {
    return null;
  }

  const defaultTitle = contextTitles[linkContext];

  return (
    <section className={`py-12 md:py-16 ${className}`} aria-labelledby='related-products-heading'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-8 md:mb-12'>
          <h2
            id='related-products-heading'
            className='text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-brown mb-4'
          >
            {title || defaultTitle}
          </h2>
          <p className='text-brand-dark/70 max-w-2xl mx-auto'>
            Discover more thoughtfully curated hampers that create meaningful moments
          </p>
        </div>

        {/* Products Grid */}
        <div
          className={`${
            variant === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
              : ""
          } ${
            variant === "carousel" ? "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" : ""
          }`}
        >
          {displayProducts.map(product => (
            <div
              key={product.id}
              className={variant === "carousel" ? "flex-shrink-0 w-80 snap-start" : ""}
            >
              <HamperCard
                hamper={product}
                showPrice={showPrice}
                showDetailsButton={true}
                className='h-full transform hover:scale-105 transition-transform duration-300'
              />
            </div>
          ))}
        </div>

        {/* View More Link */}
        {filteredProducts.length > 8 && (
          <div className='text-center mt-8 md:mt-12'>
            <ViewMoreLink linkContext={linkContext} />
          </div>
        )}
      </div>
    </section>
  );
}

interface ViewMoreLinkProps {
  linkContext: RelatedProductsProps["linkContext"];
}

function ViewMoreLink({ linkContext }: ViewMoreLinkProps) {
  const linkMap: Record<
    NonNullable<RelatedProductsProps["linkContext"]>,
    { href: string; text: string }
  > = {
    category: { href: "/hampers", text: "View All Hampers" },
    subcategory: { href: "/hampers", text: "Explore More Options" },
    related: { href: "/hampers", text: "Browse All Collections" },
    recommended: { href: "/hampers", text: "See All Recommendations" }
  };

  const { href, text } = linkMap[linkContext || "related"];

  return (
    <Link
      href={href}
      className='inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-brand-amber'
    >
      {text}
      <svg
        className='w-5 h-5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 7l5 5m0 0l-5 5m5-5H6'
        />
      </svg>
    </Link>
  );
}
