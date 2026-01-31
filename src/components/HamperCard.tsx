"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { handleWhatsApp } from "@lib/contact-utils";
import HamperTag from "./HamperTag";
import { HamperProduct } from "@lib/hamper-api-types";
import { generateProductUrl } from "@lib/hamper-url-utils";
import { getCategoryUrl } from "@lib/navigation-constants";

interface HamperCardProps {
  hamper: HamperProduct;
  showPrice?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  showDetailsButton?: boolean; // Controls whether to show "Browse" or "View Details"
}

export default function HamperCard({
  hamper,
  showPrice = false,
  onClick,
  className = "",
  style,
  showDetailsButton = false
}: HamperCardProps) {
  const router = useRouter();
  // Check if features exist for layout purposes
  const hasTags = hamper.features && hamper.features.length > 0;

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else if (showDetailsButton) {
      // From listing page - navigate to details page using new URL structure
      const productUrl = generateProductUrl({
        slug: hamper.slug || hamper.id,
        category: hamper.category,
        subCategory: hamper.subCategory || null
      });
      router.push(productUrl);
    } else {
      // From homepage - navigate to category listing page
      const categoryName = hamper.categoryName || hamper.category;
      const url = getCategoryUrl(categoryName);
      router.push(url);
    }
  };

  const handleWhatsAppInquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleWhatsApp(
      `Hello! I'm interested in ${hamper.title} gift hampers. Could you help me with more details?`
    );
  };

  const handleBrowseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (showDetailsButton) {
      // From listing page - navigate to details page using new URL structure
      const productUrl = generateProductUrl({
        slug: hamper.slug || hamper.id,
        category: hamper.category,
        subCategory: hamper.subCategory || null
      });
      router.push(productUrl);
    } else {
      // From homepage - navigate to category listing page
      const categoryName = hamper.categoryName || hamper.category;
      const url = getCategoryUrl(categoryName);
      router.push(url);
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-200 transform hover:scale-[1.02] z-10 cursor-pointer ${className}`}
      onClick={handleCardClick}
      style={{
        willChange: "transform, box-shadow",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        ...style
      }}
    >
      {/* Card Background */}
      <div className="relative min-h-[380px] sm:min-h-[420px] md:min-h-[400px] lg:min-h-[440px] h-full bg-white group-hover:bg-gradient-to-br group-hover:from-brand-gold/20 group-hover:via-brand-light group-hover:to-brand-amber/10 transition-all duration-300 ease-out">
        {/* Background Image */}
        {hamper.backgroundImage && (
          <div className="absolute inset-0 opacity-100 group-hover:opacity-30 transition-opacity duration-300 ease-out">
            <Image
              src={hamper.backgroundImage}
              alt={hamper.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
              priority={false}
              quality={85}
            />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent group-hover:from-brand-brown/80 group-hover:via-brand-amber/60 group-hover:to-brand-gold/40 transition-all duration-300 ease-out" />

        {/* Background Blur on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 backdrop-blur-sm bg-brand-light/20 transition-all duration-300 ease-out" />

        {/* INITIAL STATE */}
        <div className="absolute inset-0 flex flex-col opacity-100 group-hover:opacity-0 transition-all duration-300 ease-out">
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <HamperTag title={hamper.title} />
          </div>

          {/* Price Display (if enabled) */}
          {showPrice && hamper.startingPrice && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
              <p className="text-sm font-semibold text-brand-dark">
                From <span className="text-brand-brown">{hamper.startingPrice}</span>
              </p>
              {hamper.priceRange && <p className="text-xs text-gray-600">{hamper.priceRange}</p>}
            </div>
          )}
        </div>

        {/* HOVER STATE */}
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
          {/* Header */}
          <div className="text-center mb-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-amber via-brand-gold to-brand-brown rounded-xl flex items-center justify-center shadow-lg mx-auto mb-2 overflow-hidden">
              {hamper.images && Array.isArray(hamper.images) && hamper.images.length > 0 ? (
                <Image
                  src={
                    hamper.images[0]?.formats?.small?.url || hamper.images[0]?.url || hamper.image
                  }
                  alt={hamper.title}
                  fill
                  className="object-cover rounded-xl"
                  sizes="64px"
                  loading="lazy"
                />
              ) : (
                <span className="text-xl sm:text-2xl filter drop-shadow-lg text-white">🎁</span>
              )}
            </div>

            <h4 className="font-display text-lg sm:text-xl md:text-lg lg:text-xl group-hover:text-xl group-hover:sm:text-2xl group-hover:md:text-xl group-hover:lg:text-2xl font-bold text-brand-dark leading-tight tracking-wide drop-shadow-sm mb-0.5 transition-all duration-300 ease-out">
              {hamper.title}
            </h4>
            {hamper.subtitle && (
              <h5 className="text-xs sm:text-sm md:text-xs lg:text-sm font-medium text-brand-brown tracking-wider uppercase drop-shadow-sm opacity-90">
                {hamper.subtitle}
              </h5>
            )}
          </div>

          {/* Description */}
          <div className="flex-1 flex flex-col overflow-hidden mb-2">
            <div className="overflow-y-auto flex-1">
              <p className="text-sm sm:text-base md:text-sm lg:text-base text-gray-700 leading-relaxed text-center">
                {hamper.description}
              </p>
            </div>
          </div>

          {/* Features section - compact design */}
          <div className={`mb-3 ${hasTags ? "min-h-[60px]" : ""}`}>
            {hasTags ? (
              <div className="grid grid-cols-2 gap-1.5">
                {hamper.features?.slice(0, 4).map((feature: string) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 p-1.5 bg-white/60 rounded-lg"
                  >
                    <div className="w-1 h-1 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full flex-shrink-0" />
                    <span className="text-xs text-gray-700 font-medium truncate">{feature}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* Price Display in Hover State */}
          {showPrice && hamper.startingPrice && (
            <div className="text-center mb-3">
              <p className="text-sm font-semibold text-brand-dark">
                Starting from <span className="text-brand-brown">{hamper.startingPrice}</span>
              </p>
              {hamper.priceRange && <p className="text-xs text-gray-600">{hamper.priceRange}</p>}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 mt-auto">
            <button
              onClick={handleBrowseClick}
              className="bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer py-1.5 px-2.5 text-xs flex-1 min-w-0"
            >
              <span className="truncate">{showDetailsButton ? "View Details" : "Browse"}</span>
              <IoArrowForward className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 flex-shrink-0" />
            </button>

            <button
              onClick={handleWhatsAppInquiry}
              className="bg-white/90 backdrop-blur-sm text-brand-brown border-2 border-brand-gold font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer py-1.5 px-2.5 text-xs flex-1 min-w-0"
            >
              <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">Let&apos;s Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
