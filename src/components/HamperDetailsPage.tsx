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
            {/* Description */}
            {hamper.description && (
              <div className='prose prose-lg max-w-none'>
                <h2 className='text-3xl font-display font-bold text-brand-brown mb-4'>
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

            {/* Product Highlights */}
            {hamper.tags && hamper.tags.length > 0 && (
              <div>
                <h3 className='text-2xl font-display font-semibold text-brand-brown mb-4'>
                  Highlights
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {hamper.tags.map(tag => (
                    <HamperTag key={tag.id} title={tag.text} variant='compact' />
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {hamper.features && hamper.features.length > 0 && (
              <div>
                <h3 className='text-2xl font-display font-semibold text-brand-brown mb-4'>
                  What&apos;s Included
                </h3>
                <ul className='space-y-2'>
                  {hamper.features.map((feature, index) => (
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

            {/* Additional Info */}
            <div className='space-y-4'>
              {/* Delivery Information */}
              {hamper.deliveryTime && hamper.deliveryTitle && (
                <div className='bg-brand-light/30 rounded-xl p-4 border-l-4 border-brand-gold'>
                  <h4 className='font-display font-semibold text-brand-brown text-2xl mb-2 flex items-center gap-2'>
                    <span className='text-brand-gold'>🚚</span>
                    {hamper.deliveryTitle}
                  </h4>
                  <p className='text-brand-dark leading-relaxed'>{hamper.deliveryTime}</p>
                </div>
              )}

              {/* Minimum Order Information */}
              {hamper.minimumOrder && hamper.minimumOrderTitle && (
                <div className='bg-brand-light/30 rounded-xl p-4 border-l-4 border-brand-gold'>
                  <h4 className='font-display font-semibold text-brand-brown text-2xl mb-2 flex items-center gap-2'>
                    <span className='text-brand-gold'>📦</span>
                    {hamper.minimumOrderTitle}
                  </h4>
                  <p className='text-brand-dark leading-relaxed'>{hamper.minimumOrder}</p>
                </div>
              )}

              {/* Bulk Benefit Information */}
              {hamper.bulkBenefit && hamper.bulkBenefitTitle && (
                <div className='bg-brand-light/30 rounded-xl p-4 border-l-4 border-brand-gold'>
                  <h4 className='font-display font-semibold text-brand-brown text-2xl mb-2 flex items-center gap-2'>
                    <span className='text-brand-gold'>🎯</span>
                    {hamper.bulkBenefitTitle}
                  </h4>
                  <p className='text-brand-dark leading-relaxed'>{hamper.bulkBenefit}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-6'>
              <PrimaryButton onClick={handleWhatsAppInquiry} className='flex-1'>
                Get Pricing on WhatsApp
              </PrimaryButton>
              <SecondaryButton onClick={handleWhatsAppInquiry} className='flex-1'>
                Customize This Hamper
              </SecondaryButton>
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
