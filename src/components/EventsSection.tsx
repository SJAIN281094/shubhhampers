"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
// import { IMAGES } from "../lib/image-constants"; // Not needed for server-side data

import PrimaryButton from "./PrimaryButton";
import SectionHeader from "./ui/SectionHeader";
import type { HamperProduct } from "../lib/hamper-api-types";
import HamperCard from "./HamperCard";

interface EventsSectionProps {
  categoryHampers: Record<string, HamperProduct[]>;
}

export default function EventsSection({ categoryHampers = {} }: EventsSectionProps) {
  const router = useRouter();

  // Define categories for navigation
  const categories = [
    {
      id: "festival",
      label: "Festival",
      icon: "🪔",
      route: "festival",
      title: "Festival Gift Hampers for Sacred Celebrations",
      description:
        "Honor traditions and strengthen family bonds with our curated festival gift hampers. From Diwali sweets to Raksha Bandhan gift hampers, each one celebrates the joy of togetherness and cultural heritage."
    },
    {
      id: "wedding",
      label: "Wedding",
      icon: "💒",
      route: "wedding",
      title: "Wedding Gift Hampers for Unforgettable Moments",
      description:
        "Welcome guests with warmth and thank them with love. Our wedding gift hampers create lasting memories for your special day, from room welcome gift hampers to elegant return gift hampers."
    },
    {
      id: "business",
      label: "Business",
      icon: "🧑‍💼",
      route: "business",
      title: "Business Gift Hampers for Professional Excellence",
      description:
        "Build meaningful business relationships and show appreciation that resonates. Our business gift hampers strengthen team bonds and create lasting impressions with clients and employees."
    },
    {
      id: "personal",
      label: "Personal",
      icon: "💝",
      route: "personal",
      title: "Personal Gift Hampers for Life's Special Moments",
      description:
        "Celebrate birthdays, anniversaries, and milestones with gift hampers that speak from the heart. Each gift hamper is thoughtfully curated to express love and create cherished memories."
    }
  ];

  // Handle category click - smooth scroll to section
  const handleCategoryClick = (categoryId: string) => {
    const element = document.getElementById(`${categoryId}-section`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  // Handle View All button click
  const handleViewAll = (categoryId: string) => {
    // Map categories to SEO-friendly URLs
    const categoryUrlMap: Record<string, string> = {
      festival: "/hampers/festival-gift-hampers",
      wedding: "/hampers/wedding-gift-hampers",
      business: "/hampers/business-gift-hampers",
      personal: "/hampers/personal-gift-hampers"
    };
    const url = categoryUrlMap[categoryId] || "/hampers";
    router.push(url);
  };

  // Get hampers for each category from API data
  const getHampersForCategory = (categoryId: string): HamperProduct[] => {
    return categoryHampers[categoryId] || [];
  };

  return (
    <section
      id='events-section'
      className='py-20 bg-gradient-to-br from-brand-gold/20 via-brand-light to-brand-amber/10 relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-amber/3' />
      <div className='absolute top-20 right-10 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl animate-pulse delay-1000' />
      <div className='absolute bottom-40 left-10 w-36 h-36 bg-brand-amber/15 rounded-full blur-2xl animate-bounce delay-2000' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-light/20 rounded-full blur-3xl animate-pulse delay-500' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <SectionHeader
          tag={{ emoji: "🎯", text: "Complete Hamper Solutions" }}
          title='Hampers for Every Celebration & Relationship'
          description={`Whether it's honoring family ties, celebrating milestones, or expressing heartfelt
            gratitude — our thoughtfully crafted hampers are made for every occasion that matters.
            From wedding and festive hampers to birthday, Raksha Bandhan, and business gifts, each one is a
            beautiful way to cherish bonds and create meaningful memories.`}
          variant='center'
          size='lg'
          showDecorations={true}
        />

        {/* Category Filter Buttons - Only show for categories with hampers */}
        {(() => {
          const availableCategories = categories.filter(category => {
            const categoryHampersData = getHampersForCategory(category.id);
            return categoryHampersData.length > 0;
          });

          // Only show filter buttons if there are categories with hampers
          if (availableCategories.length === 0) return null;

          return (
            <div className='flex flex-wrap justify-center gap-3 md:gap-4 mt-16 mb-4'>
              {availableCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className='px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer duration-200 bg-white/80 text-brand-dark hover:bg-brand-gold hover:text-brand-brown'
                >
                  {category.icon} {category.label}
                </button>
              ))}
            </div>
          );
        })()}

        {/* Category Sections - Only show categories with available hampers */}
        {(() => {
          // Get categories with available hampers
          const availableCategories = categories.filter(category => {
            const categoryHampersData = getHampersForCategory(category.id);
            return categoryHampersData.length > 0;
          });

          // If no categories have hampers, show minimal message
          if (availableCategories.length === 0) {
            return (
              <div className='text-center py-12'>
                <p className='text-gray-500 text-lg mb-4'>
                  Our hamper collections are being updated.
                </p>
                <PrimaryButton onClick={() => router.push("/hampers")} size='md'>
                  View All Hampers
                </PrimaryButton>
              </div>
            );
          }

          return (
            <div className='space-y-20'>
              {availableCategories.map(category => {
                const categoryHampersData = getHampersForCategory(category.id);

                return (
                  <div key={category.id} id={`${category.id}-section`} className='scroll-mt-20'>
                    {/* Category Title */}
                    <div className='text-center mb-6'>
                      <h3 className='font-display text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold text-brand-brown mb-4 leading-tight tracking-wide drop-shadow-sm'>
                        {category.icon} {category.title}
                      </h3>
                      <p className='text-brand-dark max-w-3xl mx-auto text-sm sm:text-base md:text-sm lg:text-base leading-relaxed'>
                        {category.description}
                      </p>
                    </div>

                    {/* Hamper Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-10'>
                      {categoryHampersData.map((hamper, index) => (
                        <HamperCard
                          key={hamper.id}
                          hamper={hamper}
                          showPrice={false}
                          showDetailsButton={true}
                          className='animate-fade-in'
                          style={{
                            animationDelay: `${index * 100}ms`
                          }}
                        />
                      ))}
                    </div>

                    {/* View All Button */}
                    <div className='flex justify-center'>
                      <PrimaryButton
                        onClick={() => handleViewAll(category.id)}
                        size='md'
                        className='px-6 py-2 rounded-full inline-flex items-center gap-2'
                      >
                        <span>View All {category.label} Hampers</span>
                        <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                      </PrimaryButton>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}
      </div>
    </section>
  );
}
