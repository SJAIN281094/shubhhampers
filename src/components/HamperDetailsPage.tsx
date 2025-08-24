/**
 * Hamper Details Page Component (Updated for SEO)
 * Displays individual hamper product details with proper H1 structure and internal linking
 */

"use client";

import React from "react";
import Image from "next/image";
import { HamperProduct } from "@lib/hamper-api-types";
import SectionHeader from "./ui/SectionHeader";
import RelatedProducts from "./ui/RelatedProducts";
import ProductSchema from "./ui/ProductSchema";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import HamperTag from "./HamperTag";
import { handleWhatsApp } from "@lib/contact-utils";

interface HamperDetailsPageProps {
  hamper: HamperProduct;
  relatedProducts?: HamperProduct[];
}

export default function HamperDetailsPage({
  hamper,
  relatedProducts = []
}: HamperDetailsPageProps) {
  const handleWhatsAppInquiry = () => {
    handleWhatsApp(
      `Hello! I'm interested in ${hamper.title} gift hamper. Could you help me with pricing and availability details?`
    );
  };

  // Generate breadcrumbs
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Gift Hampers", href: "/hampers" },
    {
      label: `${hamper.categoryName || hamper.category} Hampers`,
      href: `/hampers/${hamper.category?.toLowerCase()}-gift-hampers`
    },
    {
      label: hamper.title,
      href: "#"
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-brand-light/30 via-white to-brand-gold/10'>
      {/* Product Schema */}
      <ProductSchema product={hamper} />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Product Header - SEO Optimized */}
        <div className='text-center mb-8'>
          {/* SEO H1 - Hidden but accessible */}
          <h1 className='sr-only'>{hamper.title}</h1>

          {/* Breadcrumb Structured Data */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <script
              type='application/ld+json'
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: breadcrumbs.map((crumb, index) => ({
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
            title={hamper.title}
            description={
              hamper.description || `Premium ${hamper.title} from our curated collection`
            }
            variant='center'
            size='lg'
            tag={{
              emoji: "🎁",
              text: `${hamper.categoryName || hamper.category} Collection`
            }}
          />
        </div>

        {/* Product Details */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12'>
          {/* Product Images */}
          <div className='space-y-4'>
            {hamper.images && hamper.images.length > 0 ? (
              <div className='aspect-square relative rounded-2xl overflow-hidden shadow-xl'>
                <Image
                  src={hamper.images[0].url}
                  alt={`${hamper.title} - Premium Gift Hamper`}
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            ) : (
              <div className='aspect-square bg-brand-gold/20 rounded-2xl flex items-center justify-center'>
                <div className='text-center text-brand-brown'>
                  <div className='text-6xl mb-4'>🎁</div>
                  <p className='text-lg font-medium'>Premium Hamper</p>
                </div>
              </div>
            )}

            {/* Additional Images */}
            {hamper.images && hamper.images.length > 1 && (
              <div className='grid grid-cols-3 gap-2'>
                {hamper.images.slice(1, 4).map((image, index) => (
                  <div
                    key={image.url || `image-${index}`}
                    className='aspect-square relative rounded-lg overflow-hidden'
                  >
                    <Image
                      src={image.url}
                      alt={`${hamper.title} - View ${index + 2}`}
                      fill
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className='space-y-6'>
            {/* Features/Tags */}
            {hamper.features && hamper.features.length > 0 && (
              <div className='flex flex-wrap gap-2'>
                {hamper.features.slice(0, 5).map((feature, index) => (
                  <HamperTag key={feature || `feature-tag-${index}`} title={feature} />
                ))}
              </div>
            )}

            {/* Description */}
            {hamper.description && (
              <div className='prose prose-lg max-w-none'>
                <h2 className='text-2xl font-display font-bold text-brand-brown mb-4'>
                  About This Hamper
                </h2>
                <div className='text-brand-dark leading-relaxed'>
                  {hamper.description.split("\n").map((paragraph, index) => (
                    <p key={paragraph.slice(0, 50) || `desc-${index}`} className='mb-4'>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {hamper.features && hamper.features.length > 0 && (
              <div>
                <h3 className='text-xl font-display font-semibold text-brand-brown mb-4'>
                  What&apos;s Included
                </h3>
                <ul className='space-y-2'>
                  {hamper.features.slice(0, 8).map((feature, index) => (
                    <li
                      key={feature || `feature-list-${index}`}
                      className='flex items-start gap-3 text-brand-dark'
                    >
                      <span className='text-brand-gold mt-1'>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-6'>
              <PrimaryButton onClick={handleWhatsAppInquiry} className='flex-1'>
                Get Pricing on WhatsApp
              </PrimaryButton>
              <SecondaryButton onClick={handleWhatsAppInquiry} className='flex-1'>
                Customize This Hamper
              </SecondaryButton>
            </div>

            {/* Additional Info */}
            <div className='bg-brand-light/30 rounded-xl p-6 space-y-3'>
              <div className='flex items-center gap-3 text-brand-dark'>
                <span className='text-brand-gold'>🚚</span>
                <span>Free delivery across India</span>
              </div>
              <div className='flex items-center gap-3 text-brand-dark'>
                <span className='text-brand-gold'>📞</span>
                <span>24/7 customer support</span>
              </div>
              <div className='flex items-center gap-3 text-brand-dark'>
                <span className='text-brand-gold'>🎨</span>
                <span>100% customizable hampers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Internal Linking - Related Products */}
        {relatedProducts.length > 0 && (
          <RelatedProducts
            title='You Might Also Like'
            products={relatedProducts}
            currentProductId={hamper.id}
            showPrice={false}
            linkContext='recommended'
          />
        )}
      </div>
    </div>
  );
}
