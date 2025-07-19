"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@ui-kit/button";

// Move collections data outside component to prevent recreation on every render
const COLLECTIONS_DATA = [
  // BUSINESS HAMPERS - Enhanced collection
  {
    id: "employee-onboarding",
    title: "Employee Onboarding Excellence",
    subtitle: "Welcome New Team Members with Heart",
    category: "business",
    priceRange: "₹2,000 - ₹8,000",
    startingPrice: "₹2,000",
    image: "🎯",
    description:
      "Transform first days into lasting memories. Our thoughtfully curated onboarding hampers help new team members feel genuinely valued from day one, creating positive impressions that strengthen company culture and employee loyalty.",
    features: [
      "Premium Welcome Kit",
      "Company Branded Items",
      "Personal Touch",
      "Quality Essentials"
    ],
    deliveryTime: "2-3 business days",
    minimumOrder: "10 pieces",
    bulkBenefit: "25% off on 50+ orders",
    bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
    accentColor: "from-brand-amber to-brand-brown"
  },
  {
    id: "client-appreciation",
    title: "Client Appreciation Excellence",
    subtitle: "Strengthen Business Partnerships",
    category: "business",
    priceRange: "₹3,000 - ₹15,000",
    startingPrice: "₹3,000",
    image: "🤝",
    description:
      "Show clients they're truly valued with hampers that speak volumes about your gratitude. Every carefully selected item reflects your commitment to excellence and deepens business relationships that drive mutual success.",
    features: [
      "Premium Quality",
      "Custom Branding",
      "Executive Presentation",
      "Relationship Building"
    ],
    deliveryTime: "2-4 days",
    minimumOrder: "5 pieces",
    bulkBenefit: "30% off on 25+ orders",
    bgColor: "bg-gradient-to-br from-brand-brown/20 to-brand-gold/20",
    accentColor: "from-brand-gold to-brand-amber"
  },
  {
    id: "business-festivals",
    title: "Corporate Festival Celebrations",
    subtitle: "Unite Teams Through Tradition",
    category: "business",
    priceRange: "₹2,500 - ₹8,000",
    startingPrice: "₹2,500",
    image: "🏢",
    description:
      "Honor traditions while building stronger workplace bonds. Our corporate festival hampers help teams celebrate together, creating shared moments of joy that transcend professional boundaries and build lasting connections.",
    features: ["Cultural Sensitivity", "Team Unity", "Traditional Elements", "Modern Presentation"],
    deliveryTime: "3-5 days",
    minimumOrder: "20 pieces",
    bulkBenefit: "35% off on 100+ orders",
    bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
    accentColor: "from-brand-gold to-brand-brown"
  },
  // WEDDING HAMPERS - Enhanced emotional content
  {
    id: "wedding-welcome-hampers",
    title: "Wedding Room Hampers",
    subtitle: "Embrace Guests with Love",
    category: "wedding",
    priceRange: "₹1,200 - ₹4,500",
    startingPrice: "₹1,200",
    image: "💒",
    description:
      "Welcome your beloved guests with hampers that express the overflowing joy in your hearts. Create that perfect first moment when loved ones feel the warmth of your celebration and the depth of your gratitude for their presence.",
    features: ["Warm Welcomes", "Guest Appreciation", "Traditional Touch", "Joyful Presentation"],
    deliveryTime: "3-5 days",
    minimumOrder: "50 pieces",
    bulkBenefit: "20% off on 100+ orders",
    bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
    accentColor: "from-brand-gold to-brand-amber"
  },
  {
    id: "wedding-return-hampers",
    title: "Wedding Return Hampers",
    subtitle: "Gratitude That Echoes Forever",
    category: "wedding",
    priceRange: "₹800 - ₹3,000",
    startingPrice: "₹800",
    image: "🎁",
    description:
      "Express heartfelt thanks with hampers that guests will treasure long after your special day. Each meaningful keepsake reminds loved ones of the joy they helped create and the love that surrounded your celebration.",
    features: ["Lasting Keepsakes", "Heartfelt Thanks", "Memory Creation", "Love Tokens"],
    deliveryTime: "3-5 days",
    minimumOrder: "100 pieces",
    bulkBenefit: "25% off on 200+ orders",
    bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
    accentColor: "from-brand-light to-brand-gold"
  },
  {
    id: "bridal-party-hampers",
    title: "Bridesmaid Hampers",
    subtitle: "Honor Your Closest Supporters",
    category: "wedding",
    priceRange: "₹1,500 - ₹5,000",
    startingPrice: "₹1,500",
    image: "👰",
    description:
      "Show your bridal party how much their love and support means to you. These specially curated hampers express gratitude to the special people who've stood by your side through your journey to this beautiful moment.",
    features: [
      "Friendship Celebration",
      "Support Recognition",
      "Personal Touch",
      "Beautiful Memories"
    ],
    deliveryTime: "2-4 days",
    minimumOrder: "5 pieces",
    bulkBenefit: "15% off on 10+ orders",
    bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
    accentColor: "from-brand-amber to-brand-brown"
  },
  {
    id: "diwali-magic",
    title: "Diwali Magic Collection",
    subtitle: "Illuminate Hearts and Relationships",
    category: "festival",
    priceRange: "₹1,500 - ₹6,000",
    startingPrice: "₹1,500",
    image: "✨",
    description:
      "Feel the warmth of Diwali through hampers that capture the festival's true spirit. Each carefully curated collection brings traditional joy and modern elegance together, creating moments that strengthen bonds and illuminate relationships for years to come.",
    features: ["Traditional Sweets", "Premium Items", "Custom Packaging", "Cultural Authenticity"],
    deliveryTime: "2-4 days",
    minimumOrder: "10 pieces",
    bulkBenefit: "40% off on 50+ orders",
    bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
    accentColor: "from-brand-amber to-brand-brown"
  },
  {
    id: "raksha-bandhan",
    title: "Raksha Bandhan Bonds",
    subtitle: "Celebrate Sacred Sibling Love",
    category: "festival",
    priceRange: "₹500 - ₹2,500",
    startingPrice: "₹500",
    image: "💕",
    description:
      "Honor the unbreakable bond between siblings with hampers that touch the heart. Our Raksha Bandhan collection celebrates this sacred relationship with traditional elements and modern touches that create treasured memories.",
    features: ["Sacred Rakhis", "Sweet Traditions", "Heartfelt Messages", "Sibling Love"],
    deliveryTime: "2-3 days",
    minimumOrder: "20 pieces",
    bulkBenefit: "25% off on 50+ orders",
    bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
    accentColor: "from-brand-light to-brand-gold"
  },
  {
    id: "christmas-new-year",
    title: "Christmas & New Year Celebration",
    subtitle: "Joy, Hope, and Fresh Beginnings",
    category: "festival",
    priceRange: "₹1,000 - ₹4,500",
    startingPrice: "₹1,000",
    image: "🎄",
    description:
      "Welcome the season of giving and new possibilities with hampers that inspire hope and spread joy. Create magical moments that celebrate achievements and set the tone for wonderful new beginnings ahead.",
    features: ["Holiday Magic", "New Year Inspiration", "Seasonal Joy", "Hope & Renewal"],
    deliveryTime: "3-5 days",
    minimumOrder: "15 pieces",
    bulkBenefit: "35% off on 75+ orders",
    bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
    accentColor: "from-brand-gold to-brand-brown"
  },
  // PERSONAL HAMPERS - Enhanced emotional content
  {
    id: "birthday-celebration",
    title: "Birthday Celebration Magic",
    subtitle: "Making Special Days Unforgettable",
    category: "personal",
    priceRange: "₹800 - ₹3,500",
    startingPrice: "₹800",
    image: "🎂",
    description:
      "Transform ordinary birthdays into extraordinary celebrations with hampers that capture the magic of growing older surrounded by love. Each thoughtfully chosen item adds sparkle to their special day and creates memories to treasure.",
    features: ["Birthday Magic", "Personal Touch", "Celebration Joy", "Memory Making"],
    deliveryTime: "1-3 days",
    minimumOrder: "1 piece",
    bulkBenefit: "15% off on 10+ orders",
    bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
    accentColor: "from-brand-amber to-brand-brown"
  },
  {
    id: "anniversary-love-story",
    title: "Marriage & Anniversary",
    subtitle: "Celebrating Enduring Bonds",
    category: "personal",
    priceRange: "₹1,200 - ₹5,000",
    startingPrice: "₹1,200",
    image: "💕",
    description:
      "Honor the beautiful journey of love that grows stronger with each passing year. Our anniversary hampers celebrate milestones that matter, creating new chapters in your love story that will be remembered forever.",
    features: ["Love Stories", "Milestone Moments", "Romantic Touch", "Enduring Bonds"],
    deliveryTime: "2-4 days",
    minimumOrder: "1 piece",
    bulkBenefit: "20% off on 5+ orders",
    bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
    accentColor: "from-brand-light to-brand-gold"
  },
  {
    id: "new-baby-blessings",
    title: "Baby Announcement",
    subtitle: "Welcome Little Miracles with Love",
    category: "personal",
    priceRange: "₹1,000 - ₹4,000",
    startingPrice: "₹1,000",
    image: "👶",
    description:
      "Celebrate the arrival of precious little miracles with hampers that shower new families with love and support. Each thoughtful item helps welcome the newest member and honors this beautiful beginning.",
    features: ["Baby Essentials", "Family Celebration", "Gentle Care", "Precious Moments"],
    deliveryTime: "1-3 days",
    minimumOrder: "1 piece",
    bulkBenefit: "15% off on 5+ orders",
    bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
    accentColor: "from-brand-gold to-brand-amber"
  }
];

export default function CollectionsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

  // Handle URL parameters for category filtering
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const categories = [
    { id: "all", label: "All Collections", icon: "🎁" },
    { id: "business", label: "Business", icon: "🏢" },
    { id: "wedding", label: "Wedding", icon: "💒" },
    { id: "festival", label: "Festival", icon: "🎉" },
    { id: "personal", label: "Personal", icon: "💝" }
  ];

  // Use external collections data for better performance

  // Memoize filtered collections to prevent recalculation on every render
  const filteredCollections = useMemo(() => {
    return activeCategory === "all"
      ? COLLECTIONS_DATA
      : COLLECTIONS_DATA.filter((collection: any) => collection.category === activeCategory);
  }, [activeCategory]);

  // Memoize category change handler
  const handleCategoryChange = useCallback(
    (categoryId: string) => {
      setActiveCategory(categoryId);
      // Update URL without page reload
      const params = new URLSearchParams(searchParams);
      if (categoryId === "all") {
        params.delete("category");
      } else {
        params.set("category", categoryId);
      }
      const newUrl = params.toString() ? `?${params.toString()}` : "/collections";
      router.push(newUrl, { scroll: false });
    },
    [searchParams, router]
  );

  // Memoize WhatsApp inquiry handler
  const handleWhatsAppInquiry = useCallback((collection: any) => {
    const message = `Hi! I'm interested in the "${collection.title}" hamper collection. Could you provide more details about customization options and pricing?`;
    const phoneNumber = "919999999999";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }, []);

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
              <span className='text-brand-brown font-semibold'>✨ Our Collections</span>
            </div>

            <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
              Discover Our Collections
            </h1>

            <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
              Explore our carefully curated hamper collections, each designed to create meaningful
              connections and lasting memories for every special occasion.
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

      {/* Collections Grid */}
      <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='font-display text-3xl lg:text-4xl font-bold text-brand-dark mb-4'>
              {activeCategory === "all"
                ? "All Collections"
                : categories.find(cat => cat.id === activeCategory)?.label + " Collections"}
            </h2>
            <p className='text-lg text-gray-700'>
              {filteredCollections.length} collection{filteredCollections.length !== 1 ? "s" : ""}{" "}
              available
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredCollections.map((collection: any) => (
              <div
                key={collection.id}
                className={`${collection.bgColor} rounded-3xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-300 group cursor-pointer relative overflow-hidden flex flex-col h-full`}
              >
                {/* Optimized hover overlay */}
                <div className='absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* Collection Header */}
                <div className='text-center mb-6 relative z-10'>
                  <div className='text-6xl mb-4 group-hover:scale-105 transition-transform duration-200 will-change-transform'>
                    {collection.image}
                  </div>
                  <h3 className='text-2xl font-bold text-brand-dark mb-2'>{collection.title}</h3>
                  <p className='text-brand-brown font-semibold mb-4'>{collection.subtitle}</p>
                </div>

                {/* Collection Description */}
                <p className='text-gray-700 mb-6 leading-relaxed relative z-10 flex-grow'>
                  {collection.description}
                </p>

                {/* Enhanced Features */}
                <div className='mb-6 relative z-10'>
                  <h4 className='text-sm font-semibold text-brand-dark mb-3 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-brand-gold rounded-full' />
                    Key Features:
                  </h4>
                  <div className='grid grid-cols-2 gap-2'>
                    {collection.features.map((feature: any, index: number) => (
                      <div
                        key={index}
                        className='flex items-center gap-2 p-2 bg-white/40 rounded-lg'
                      >
                        <div className='w-1.5 h-1.5 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full' />
                        <span className='text-xs text-gray-700 font-medium'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact CTA Buttons - Fixed at bottom */}
                <div className='flex gap-2 relative z-10 mt-auto'>
                  <button
                    onClick={() => handleWhatsAppInquiry(collection)}
                    className='bg-gradient-to-r from-brand-amber to-brand-brown text-white font-medium px-4 py-2 text-sm rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex-1'
                  >
                    💬 Inquire
                  </button>
                  <Link href={`/contact?collection=${collection.title}`}>
                    <Button className='bg-white/90 text-brand-brown font-medium px-4 py-2 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-brand-gold/30 hover:bg-brand-gold/10 flex-1'>
                      📋 Quote
                    </Button>
                  </Link>
                </div>

                {/* Premium indicator */}
                <div className='absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full animate-pulse' />
              </div>
            ))}
          </div>

          {filteredCollections.length === 0 && (
            <div className='text-center py-12'>
              <div className='text-6xl mb-4'>🎁</div>
              <h3 className='text-2xl font-bold text-brand-dark mb-4'>No Collections Found</h3>
              <p className='text-gray-600 mb-6'>
                We're working on adding more collections in this category. Meanwhile, explore our
                other amazing collections!
              </p>
              <Button
                onClick={() => handleCategoryChange("all")}
                className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
              >
                View All Collections
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-4xl mx-auto'>
            <h2 className='font-display text-4xl lg:text-5xl font-bold mb-6'>
              Need Something Custom?
            </h2>
            <p className='text-xl mb-8 leading-relaxed'>
              Can't find exactly what you're looking for? We specialize in creating custom hampers
              tailored to your specific needs and relationship goals.
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
