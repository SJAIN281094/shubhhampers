"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";

// Separate component that uses useSearchParams
function CollectionsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (
      categoryParam &&
      ["business", "wedding", "festivals", "personal", "luxury"].includes(categoryParam)
    ) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  const categories = [
    { id: "all", name: "All Collections", icon: "🎁" },
    { id: "business", name: "Business Hampers", icon: "🏢" },
    { id: "wedding", name: "Wedding Hampers", icon: "💒" },
    { id: "festivals", name: "Festival Hampers", icon: "🎊" },
    { id: "personal", name: "Personal Hampers", icon: "💝" },
    { id: "luxury", name: "Luxury Hampers", icon: "✨" }
  ];

  const collections = [
    // BUSINESS HAMPERS - Enhanced collection
    {
      id: "employee-onboarding",
      title: "Employee Onboarding Excellence",
      subtitle: "Welcome New Team Members with Heart",
      description:
        "Transform first days into lasting memories. Our thoughtfully curated onboarding hampers help new team members feel genuinely valued from day one, creating positive impressions that strengthen company culture and employee loyalty.",
      image: "🎯",
      category: "business",
      startingPrice: "₹2,000",
      minimumOrder: "10 pieces",
      bulkBenefit: "25% off on 50+ orders",
      features: [
        "Premium Welcome Kit",
        "Company Branded Items",
        "Personal Touch",
        "Quality Essentials"
      ],
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
      accentColor: "from-brand-amber to-brand-brown"
    },
    {
      id: "client-appreciation",
      title: "Client Appreciation Excellence",
      subtitle: "Strengthen Business Partnerships",
      description:
        "Show clients they're truly valued with hampers that speak volumes about your gratitude. Every carefully selected item reflects your commitment to excellence and deepens business relationships that drive mutual success.",
      image: "🤝",
      category: "business",
      startingPrice: "₹3,000",
      minimumOrder: "5 pieces",
      bulkBenefit: "30% off on 25+ orders",
      features: [
        "Premium Quality",
        "Custom Branding",
        "Executive Presentation",
        "Relationship Building"
      ],
      bgColor: "bg-gradient-to-br from-brand-brown/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-amber"
    },
    {
      id: "employee-recognition",
      title: "Employee Recognition Program",
      subtitle: "Celebrate Outstanding Performance",
      description:
        "Recognition that resonates deeply. Our employee appreciation hampers help you celebrate achievements in ways that make team members feel genuinely appreciated, fostering loyalty and inspiring continued excellence.",
      image: "🏆",
      category: "business",
      startingPrice: "₹1,500",
      minimumOrder: "15 pieces",
      bulkBenefit: "20% off on 100+ orders",
      features: [
        "Achievement Recognition",
        "Performance Rewards",
        "Team Building",
        "Motivation Enhancement"
      ],
      bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
      accentColor: "from-brand-light to-brand-gold"
    },
    {
      id: "business-festivals",
      title: "Corporate Festival Celebrations",
      subtitle: "Unite Teams Through Tradition",
      description:
        "Honor traditions while building stronger workplace bonds. Our corporate festival hampers help teams celebrate together, creating shared moments of joy that transcend professional boundaries and build lasting connections.",
      image: "🏢",
      category: "business",
      startingPrice: "₹2,500",
      minimumOrder: "20 pieces",
      bulkBenefit: "35% off on 100+ orders",
      features: [
        "Cultural Sensitivity",
        "Team Unity",
        "Traditional Elements",
        "Modern Presentation"
      ],
      bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-brown"
    },

    // FESTIVAL HAMPERS - Enhanced with emotional content
    {
      id: "diwali-magic",
      title: "Diwali Magic Collection",
      subtitle: "Illuminate Hearts and Relationships",
      description:
        "Feel the warmth of Diwali through hampers that capture the festival's true spirit. Each carefully curated collection brings traditional joy and modern elegance together, creating moments that strengthen bonds and illuminate relationships for years to come.",
      image: "✨",
      category: "festivals",
      startingPrice: "₹1,500",
      minimumOrder: "10 pieces",
      bulkBenefit: "40% off on 50+ orders",
      features: [
        "Traditional Sweets",
        "Premium Items",
        "Custom Packaging",
        "Cultural Authenticity"
      ],
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
      accentColor: "from-brand-amber to-brand-brown"
    },
    {
      id: "holi-celebration",
      title: "Holi Festival Joy",
      subtitle: "Colors of Unity and Happiness",
      description:
        "Embrace the vibrant spirit of Holi with hampers that spread joy and bring people together. Experience the festival of colors through thoughtfully selected items that create laughter, memories, and stronger community bonds.",
      image: "🎨",
      category: "festivals",
      startingPrice: "₹800",
      minimumOrder: "25 pieces",
      bulkBenefit: "30% off on 100+ orders",
      features: ["Festive Colors", "Traditional Treats", "Celebration Essentials", "Community Joy"],
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
      accentColor: "from-brand-amber to-brand-brown"
    },
    {
      id: "raksha-bandhan",
      title: "Raksha Bandhan Bonds",
      subtitle: "Celebrate Sacred Sibling Love",
      description:
        "Honor the unbreakable bond between siblings with hampers that touch the heart. Our Raksha Bandhan collection celebrates this sacred relationship with traditional elements and modern touches that create treasured memories.",
      image: "💕",
      category: "festivals",
      startingPrice: "₹500",
      minimumOrder: "20 pieces",
      bulkBenefit: "25% off on 50+ orders",
      features: ["Sacred Rakhis", "Sweet Traditions", "Heartfelt Messages", "Sibling Love"],
      bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
      accentColor: "from-brand-light to-brand-gold"
    },
    {
      id: "christmas-new-year",
      title: "Christmas & New Year Celebration",
      subtitle: "Joy, Hope, and Fresh Beginnings",
      description:
        "Welcome the season of giving and new possibilities with hampers that inspire hope and spread joy. Create magical moments that celebrate achievements and set the tone for wonderful new beginnings ahead.",
      image: "🎄",
      category: "festivals",
      startingPrice: "₹1,000",
      minimumOrder: "15 pieces",
      bulkBenefit: "35% off on 75+ orders",
      features: ["Holiday Magic", "New Year Inspiration", "Seasonal Joy", "Hope & Renewal"],
      bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-brown"
    },

    // WEDDING HAMPERS - Enhanced emotional content
    {
      id: "wedding-welcome-hampers",
      title: "Wedding Welcome Hampers",
      subtitle: "Embrace Guests with Love",
      description:
        "Welcome your beloved guests with hampers that express the overflowing joy in your hearts. Create that perfect first moment when loved ones feel the warmth of your celebration and the depth of your gratitude for their presence.",
      image: "💒",
      category: "wedding",
      startingPrice: "₹1,200",
      minimumOrder: "50 pieces",
      bulkBenefit: "20% off on 100+ orders",
      features: ["Warm Welcomes", "Guest Appreciation", "Traditional Touch", "Joyful Presentation"],
      bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-amber"
    },
    {
      id: "wedding-return-hampers",
      title: "Wedding Return Hampers",
      subtitle: "Gratitude That Echoes Forever",
      description:
        "Express heartfelt thanks with hampers that guests will treasure long after your special day. Each meaningful keepsake reminds loved ones of the joy they helped create and the love that surrounded your celebration.",
      image: "🎁",
      category: "wedding",
      startingPrice: "₹800",
      minimumOrder: "100 pieces",
      bulkBenefit: "25% off on 200+ orders",
      features: ["Lasting Keepsakes", "Heartfelt Thanks", "Memory Creation", "Love Tokens"],
      bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
      accentColor: "from-brand-light to-brand-gold"
    },
    {
      id: "bridal-party-hampers",
      title: "Bridal Party Appreciation",
      subtitle: "Honor Your Closest Supporters",
      description:
        "Show your bridal party how much their love and support means to you. These specially curated hampers express gratitude to the special people who've stood by your side through your journey to this beautiful moment.",
      image: "👰",
      category: "wedding",
      startingPrice: "₹1,500",
      minimumOrder: "5 pieces",
      bulkBenefit: "15% off on 10+ orders",
      features: [
        "Friendship Celebration",
        "Support Recognition",
        "Personal Touch",
        "Beautiful Memories"
      ],
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
      accentColor: "from-brand-amber to-brand-brown"
    },

    // PERSONAL HAMPERS - Enhanced emotional content
    {
      id: "birthday-celebrations",
      title: "Birthday Celebration Magic",
      subtitle: "Make Their Day Unforgettable",
      description:
        "Transform birthdays into magical celebrations that touch the heart. Our personalized hampers create genuine joy and lasting memories, showing your loved ones just how special they are to you.",
      image: "🎂",
      category: "personal",
      startingPrice: "₹800",
      minimumOrder: "1 piece",
      bulkBenefit: "10% off on 5+ orders",
      features: ["Personal Touch", "Birthday Magic", "Memory Making", "Heartfelt Celebration"],
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
      accentColor: "from-brand-amber to-brand-brown"
    },
    {
      id: "anniversary-bliss",
      title: "Anniversary Love Stories",
      subtitle: "Celebrate Your Journey Together",
      description:
        "Honor the beautiful love story you're writing together. Our anniversary hampers celebrate the precious milestones that mark your journey, creating moments that remind you both of the love that grows stronger each year.",
      image: "💕",
      category: "personal",
      startingPrice: "₹1,500",
      minimumOrder: "1 piece",
      bulkBenefit: "15% off on 3+ orders",
      features: ["Love Celebration", "Milestone Honors", "Romantic Touch", "Journey Memories"],
      bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
      accentColor: "from-brand-light to-brand-gold"
    },
    {
      id: "new-baby-celebration",
      title: "New Baby Blessings",
      subtitle: "Welcome Little Miracles",
      description:
        "Celebrate the arrival of precious new life with hampers that honor this beautiful beginning. Create joy for new parents and families as they embark on the most wonderful journey of their lives.",
      image: "👶",
      category: "personal",
      startingPrice: "₹1,000",
      minimumOrder: "1 piece",
      bulkBenefit: "10% off on 3+ orders",
      features: ["New Life Celebration", "Family Joy", "Precious Moments", "Blessing Touch"],
      bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-brown"
    },

    // LUXURY HAMPERS - Enhanced premium content
    {
      id: "luxury-experience",
      title: "Luxury Experience Collection",
      subtitle: "Beyond Expectations",
      description:
        "Indulge in the extraordinary with hampers that redefine luxury. Every meticulously selected item creates an unforgettable experience, leaving lasting impressions that speak to the finest tastes and deepest appreciation.",
      image: "✨",
      category: "luxury",
      startingPrice: "₹10,000",
      minimumOrder: "1 piece",
      bulkBenefit: "20% off on 10+ orders",
      features: [
        "Exceptional Quality",
        "Exclusive Items",
        "VIP Experience",
        "Premium Presentation"
      ],
      bgColor: "bg-gradient-to-br from-brand-brown/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-amber"
    },
    {
      id: "executive-prestige",
      title: "Executive Prestige Collection",
      subtitle: "Sophisticated Business Excellence",
      description:
        "Make powerful statements with hampers designed for discerning executives. These sophisticated collections balance elegance with purpose, perfect for high-level appreciation that commands respect and builds lasting professional relationships.",
      image: "💼",
      category: "luxury",
      startingPrice: "₹8,000",
      minimumOrder: "3 pieces",
      bulkBenefit: "25% off on 15+ orders",
      features: [
        "Executive Quality",
        "Business Prestige",
        "Sophisticated Appeal",
        "Professional Excellence"
      ],
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
      accentColor: "from-brand-amber to-brand-brown"
    }
  ];

  const filteredCollections =
    activeCategory === "all"
      ? collections
      : collections.filter(collection => collection.category === activeCategory);

  // Handle category selection and update URL
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      router.push("/collections");
    } else {
      router.push(`/collections?category=${categoryId}`);
    }
  };

  return (
    <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
      {/* Hero Section */}
      <section className='relative py-20 overflow-hidden'>
        {/* Background Elements with Golden Touch */}
        <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/15 via-transparent to-brand-amber/10' />
        <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/25 rounded-full blur-2xl animate-pulse' />
        <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-bounce' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold/20 via-brand-light/30 to-brand-amber/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-brand-gold/20 shadow-lg'>
              <span className='text-brand-brown font-bold text-base md:text-lg'>
                🎁 Our Hamper Collections
              </span>
            </div>

            <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
              Hampers That Touch Hearts
            </h1>

            <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
              Discover thoughtfully curated collections designed to create meaningful connections
              and unforgettable moments. Every hamper tells a story of care, appreciation, and
              genuine human connection.
            </p>

            {/* Enhanced emotional tagline */}
            <div className='bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-brand-gold/20 shadow-lg'>
              <p className='text-lg text-brand-brown font-medium italic'>
                "Transform simple gestures into extraordinary memories that last a lifetime"
              </p>
            </div>
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
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-brand-amber to-brand-gold text-white shadow-lg border-2 border-brand-gold/50"
                    : "bg-white text-brand-dark border-2 border-brand-gold/30 hover:border-brand-gold hover:shadow-md hover:bg-gradient-to-r hover:from-brand-light/50 hover:to-brand-gold/20"
                }`}
              >
                <span className='mr-2'>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredCollections.map(collection => (
              <div
                key={collection.id}
                className={`${collection.bgColor} rounded-3xl p-8 shadow-xl border border-brand-gold/20 hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col h-full`}
              >
                {/* Golden gradient overlay for premium feel */}
                <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-amber/8 opacity-0 group-hover:opacity-100 transition-all duration-500' />

                {/* Collection Header */}
                <div className='text-center mb-6 relative z-10'>
                  <div className='text-6xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {collection.image}
                  </div>
                  <h3 className='text-2xl font-bold text-brand-dark mb-2'>{collection.title}</h3>
                  <p className='text-brand-brown font-semibold mb-4'>{collection.subtitle}</p>
                </div>

                {/* Collection Description */}
                <p className='text-gray-700 mb-6 leading-relaxed relative z-10 flex-grow'>
                  {collection.description}
                </p>

                {/* Collection Details with Golden Accents */}
                <div className='space-y-3 mb-6 relative z-10'>
                  <div className='flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-brand-gold/20'>
                    <span className='text-sm text-gray-600 font-medium'>Starting from:</span>
                    <span className='text-sm font-bold text-brand-brown'>
                      {collection.startingPrice}
                    </span>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-brand-gold/20'>
                    <span className='text-sm text-gray-600 font-medium'>Minimum Order:</span>
                    <span className='text-sm font-bold text-brand-brown'>
                      {collection.minimumOrder}
                    </span>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-brand-gold/20'>
                    <span className='text-sm text-gray-600 font-medium'>Bulk Benefit:</span>
                    <span className='text-sm font-bold text-brand-brown'>
                      {collection.bulkBenefit}
                    </span>
                  </div>
                </div>

                {/* Enhanced Features */}
                <div className='mb-6 relative z-10'>
                  <h4 className='text-sm font-semibold text-brand-dark mb-3 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-brand-gold rounded-full' />
                    Key Features:
                  </h4>
                  <div className='grid grid-cols-2 gap-2'>
                    {collection.features.map((feature, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-2 p-2 bg-white/30 backdrop-blur-sm rounded-lg'
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
                    onClick={() => router.push(`/collections/${collection.id}`)}
                    className={`bg-gradient-to-r ${collection.accentColor} text-white font-medium px-4 py-2 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex-1`}
                  >
                    View
                  </button>
                  <button
                    onClick={() => router.push(`/contact?collection=${collection.id}`)}
                    className='bg-white/90 backdrop-blur-sm text-brand-brown font-medium px-4 py-2 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-brand-gold/30 hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber hover:text-white transform hover:scale-105 flex-1'
                  >
                    Quote
                  </button>
                </div>

                {/* Premium indicator */}
                <div className='absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full animate-pulse' />
              </div>
            ))}
          </div>

          {/* Enhanced No Results Message */}
          {filteredCollections.length === 0 && (
            <div className='text-center py-12'>
              <div className='w-24 h-24 bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-gold/20'>
                <span className='text-3xl'>🔍</span>
              </div>
              <h3 className='text-2xl font-bold text-brand-dark mb-2'>No Collections Found</h3>
              <p className='text-gray-600 mb-6'>
                {
                  "We're carefully curating new collections in this category. Check back soon for more ways to create meaningful connections!"
                }
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className='bg-gradient-to-r from-brand-amber to-brand-gold text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
              >
                View All Collections
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Why Choose Our Collections */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
              Why Our Hampers Create Lasting Connections?
            </h2>
            <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
              Every collection is thoughtfully curated to touch hearts, strengthen relationships,
              and create unforgettable moments that resonate long after the occasion.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center group'>
              <div className='w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-amber rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <span className='text-2xl'>💝</span>
              </div>
              <h3 className='text-xl font-bold text-brand-dark mb-3'>Emotionally Curated</h3>
              <p className='text-gray-600'>
                Every item is selected to create genuine emotional connections and meaningful
                experiences
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-16 h-16 bg-gradient-to-br from-brand-amber to-brand-brown rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <span className='text-2xl'>🎨</span>
              </div>
              <h3 className='text-xl font-bold text-brand-dark mb-3'>Personalized Touch</h3>
              <p className='text-gray-600'>
                Custom messages, branding, and packaging that reflect your unique story and values
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-16 h-16 bg-gradient-to-br from-brand-brown to-brand-gold rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <span className='text-2xl'>⚡</span>
              </div>
              <h3 className='text-xl font-bold text-brand-dark mb-3'>Reliable Excellence</h3>
              <p className='text-gray-600'>
                Timely delivery and consistent quality that builds trust and strengthens
                relationships
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-amber rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <span className='text-2xl'>🤝</span>
              </div>
              <h3 className='text-xl font-bold text-brand-dark mb-3'>Relationship Focus</h3>
              <p className='text-gray-600'>
                Dedicated support that understands your goals and helps you achieve meaningful
                impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className='py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white relative overflow-hidden'>
        {/* Golden decorative elements */}
        <div className='absolute top-10 right-10 w-32 h-32 bg-brand-gold/20 rounded-full blur-xl animate-pulse' />
        <div className='absolute bottom-10 left-10 w-24 h-24 bg-brand-amber/25 rounded-full blur-lg animate-bounce' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center max-w-4xl mx-auto'>
            <h2 className='font-display text-4xl lg:text-5xl font-bold mb-6'>
              Ready to Create Meaningful Moments?
            </h2>
            <p className='text-xl mb-8 leading-relaxed'>
              {`Let's work together to craft hamper experiences that touch hearts,
              strengthen relationships, and create memories that last a lifetime.`}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button
                onClick={() => router.push("/contact")}
                className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
              >
                💬 Start Your Journey
              </button>
              <button
                onClick={() => window.open("tel:+9196858472274", "_self")}
                className='bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber hover:text-brand-dark transform hover:scale-105'
              >
                📞 Call Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Loading fallback component
function CollectionsLoading() {
  return (
    <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
      <section className='relative py-20 overflow-hidden'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6'>
              <span className='text-brand-brown font-semibold'>🎁 Our Collections</span>
            </div>
            <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
              Hamper Collections
            </h1>
            <div className='flex justify-center'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Main page component with Suspense boundary
export default function CollectionsPage() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Suspense fallback={<CollectionsLoading />}>
        <CollectionsContent />
      </Suspense>
      <Footer />
    </main>
  );
}
