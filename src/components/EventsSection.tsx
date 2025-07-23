"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@ui-kit/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { handleWhatsApp } from "../lib/contact-utils";
import { IMAGES } from "../lib/image-constants";

// Events data matching actual collections from CollectionsClient.tsx
const EVENTS_DATA = [
  // Business Collections
  {
    id: "employee-onboarding",
    title: "Employee Onboarding Excellence",
    subtitle: "Welcome New Team Members with Heart",
    category: "business",
    description:
      "Transform first days into lasting memories. Our thoughtfully curated onboarding hampers help new team members feel genuinely valued from day one, creating positive impressions that strengthen company culture and employee loyalty.",
    image: "🎯",
    features: ["Personal Recognition", "Milestone Celebration", "Team Building", "Loyalty Boost"],
    backgroundImage:
      "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/corporate-hampers/hampers-corporate_1.jpg",
    textColor: "text-white",
    bgGradient: "from-brand-amber/90 via-brand-gold/80 to-brand-brown/90"
  },
  {
    id: "milestone-celebration",
    title: "Business Milestones",
    subtitle: "Celebrating achievements that matter most",
    category: "business",
    description:
      "Success tastes sweeter when shared. Our milestone celebration hampers help you commemorate significant achievements with your team, creating shared pride and motivation that propels your organization toward even greater accomplishments.",
    image: "🏆",
    features: ["Achievement Honor", "Team Unity", "Success Sharing", "Future Motivation"],
    backgroundImage: "milestone.png", // Now using optimized WebP (96% smaller!)
    textColor: "text-white",
    bgGradient: "from-brand-brown/90 via-brand-gold/80 to-brand-amber/90"
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    subtitle: "Making business occasions memorable",
    category: "business",
    description:
      "Transform corporate gatherings into memorable experiences. Our event hampers ensure every attendee leaves with something special, strengthening business relationships and creating positive associations with your brand that last long after the event ends.",
    image: "🏢",
    features: ["Event Enhancement", "Brand Building", "Guest Delight", "Lasting Impression"],
    backgroundImage: "business-celebration.png", // Now using optimized WebP (94% smaller!)
    textColor: "text-white",
    bgGradient: "from-brand-gold/90 via-brand-amber/80 to-brand-brown/90"
  },
  {
    id: "client-appreciation",
    title: "Client Appreciation Excellence",
    subtitle: "Strengthen Business Partnerships",
    category: "business",
    description:
      "Show clients they're truly valued with hampers that speak volumes about your gratitude. Every carefully selected item reflects your commitment to excellence and deepens business relationships that drive mutual success.",
    image: "🤝",
    features: [
      "Premium Quality",
      "Custom Branding",
      "Executive Presentation",
      "Relationship Building"
    ],
    backgroundImage: IMAGES.CLIENT_APPRECIATION,
    textColor: "text-white",
    bgGradient: "from-brand-brown/90 via-brand-gold/80 to-brand-amber/90"
  },
  {
    id: "business-festivals",
    title: "Corporate Festival Celebrations",
    subtitle: "Unite Teams Through Tradition",
    category: "business",
    description:
      "Honor traditions while building stronger workplace bonds. Our corporate festival hampers help teams celebrate together, creating shared moments of joy that transcend professional boundaries and build lasting connections.",
    image: "🏢",
    features: ["Cultural Sensitivity", "Team Unity", "Traditional Elements", "Modern Presentation"],
    backgroundImage: IMAGES.CORPORATE_FESTIVALS,
    textColor: "text-white",
    bgGradient: "from-brand-light/90 via-brand-gold/80 to-brand-brown/90"
  },

  // Wedding Collections
  {
    id: "wedding-welcome-hampers",
    title: "Wedding Room Hampers",
    subtitle: "Embrace Guests with Love",
    category: "wedding",
    description:
      "Welcome your beloved guests with hampers that express the overflowing joy in your hearts. Create that perfect first moment when loved ones feel the warmth of your celebration and the depth of your gratitude for their presence.",
    image: "💒",
    features: ["Warm Welcomes", "Guest Appreciation", "Traditional Touch", "Joyful Presentation"],
    backgroundImage: IMAGES.WEDDING_WELCOME_HAMPERS,
    textColor: "text-white",
    bgGradient: "from-brand-light/90 via-brand-gold/80 to-brand-amber/90"
  },
  {
    id: "baby-shower",
    title: "Baby Shower",
    subtitle: "Celebrating new beginnings with love",
    category: "festivals",
    description:
      "Welcome the little miracle with hampers that celebrate new life and motherhood. Our baby shower collections create precious moments of joy, offering thoughtful gifts that honor this beautiful journey and show your love for the growing family.",
    image: "👶",
    features: ["New Life Celebration", "Motherhood Honor", "Family Joy", "Precious Moments"],
    backgroundImage:
      "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/baby-shower/hampers_baby-shower_1.jpeg",
    textColor: "text-white",
    bgGradient: "from-pink-400/90 via-blue-300/80 to-yellow-200/90"
  },
  {
    id: "rakshabandhan",
    title: "Rakshabandhan",
    subtitle: "Celebrating the sacred bond of siblings",
    category: "festivals",
    description:
      "Honor the unbreakable bond between siblings with hampers that speak of love, protection, and lifelong connection. Our Rakshabandhan collections strengthen family ties and create memories that last beyond the festival celebrations.",
    image: "🪔",
    features: ["Sibling Bond", "Family Tradition", "Love Expression", "Cultural Heritage"],
    backgroundImage:
      "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/rakshabandhan/hampers-rakshabandhan_2.jpeg",
    textColor: "text-white",
    bgGradient: "from-orange-400/90 via-red-300/80 to-yellow-300/90"
  },
  {
    id: "diwali",
    title: "Diwali",
    subtitle: "Illuminating hearts with joy and prosperity",
    category: "festivals",
    description:
      "Celebrate the festival of lights with hampers that spread joy, prosperity, and togetherness. Our Diwali collections bring the warmth of tradition and the spirit of celebration to your loved ones, creating bright memories that last throughout the year.",
    image: "🪔",
    features: ["Festival of Lights", "Prosperity Wishes", "Traditional Joy", "Family Togetherness"],
    backgroundImage:
      "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/diwali/hampers-diwali_6.jpeg",
    textColor: "text-white",
    bgGradient: "from-yellow-400/90 via-orange-300/80 to-red-300/90"
  },
  {
    id: "family-occasions",
    title: "Family Celebrations",
    subtitle: "Honoring bonds that define us",
    category: "personal",
    description:
      "Express heartfelt thanks with hampers that guests will treasure long after your special day. Each meaningful keepsake reminds loved ones of the joy they helped create and the love that surrounded your celebration.",
    image: "🎁",
    features: ["Lasting Keepsakes", "Heartfelt Thanks", "Memory Creation", "Love Tokens"],
    backgroundImage: IMAGES.WEDDING_RETURN_HAMPERS,
    textColor: "text-white",
    bgGradient: "from-brand-amber/90 via-brand-light/80 to-brand-gold/90"
  },
  {
    id: "bridal-party-hampers",
    title: "Bridesmaid Hampers",
    subtitle: "Honor Your Closest Supporters",
    category: "wedding",
    description:
      "Show your bridal party how much their love and support means to you. These specially curated hampers express gratitude to the special people who've stood by your side through your journey to this beautiful moment.",
    image: "👰",
    features: [
      "Friendship Celebration",
      "Support Recognition",
      "Personal Touch",
      "Beautiful Memories"
    ],
    backgroundImage: IMAGES.BRIDAL_PARTY_HAMPERS,
    textColor: "text-white",
    bgGradient: "from-brand-gold/90 via-brand-amber/80 to-brand-brown/90"
  },

  // Festival Collections (Note: category is "festival" not "festivals")
  {
    id: "diwali-magic",
    title: "Diwali Magic Collection",
    subtitle: "Illuminate Hearts and Relationships",
    category: "festival",
    description:
      "Feel the warmth of Diwali through hampers that capture the festival's true spirit. Each carefully curated collection brings traditional joy and modern elegance together, creating moments that strengthen bonds and illuminate relationships for years to come.",
    image: "✨",
    features: ["Traditional Sweets", "Premium Items", "Custom Packaging", "Cultural Authenticity"],
    backgroundImage: IMAGES.DIWALI_MAGIC,
    textColor: "text-white",
    bgGradient: "from-brand-gold/90 via-brand-amber/80 to-brand-brown/90"
  },
  {
    id: "raksha-bandhan",
    title: "Raksha Bandhan Bonds",
    subtitle: "Celebrate Sacred Sibling Love",
    category: "festival",
    description:
      "Honor the unbreakable bond between siblings with hampers that touch the heart. Our Raksha Bandhan collection celebrates this sacred relationship with traditional elements and modern touches that create treasured memories.",
    image: "💕",
    features: ["Sacred Rakhis", "Sweet Traditions", "Heartfelt Messages", "Sibling Love"],
    backgroundImage: IMAGES.RAKSHA_BANDHAN,
    textColor: "text-white",
    bgGradient: "from-brand-amber/90 via-brand-light/80 to-brand-gold/90"
  },
  {
    id: "christmas-new-year",
    title: "Christmas & New Year Celebration",
    subtitle: "Joy, Hope, and Fresh Beginnings",
    category: "festival",
    description:
      "Welcome the season of giving and new possibilities with hampers that inspire hope and spread joy. Create magical moments that celebrate achievements and set the tone for wonderful new beginnings ahead.",
    image: "🎄",
    features: ["Holiday Magic", "New Year Inspiration", "Seasonal Joy", "Hope & Renewal"],
    backgroundImage: IMAGES.CHRISTMAS_NEW_YEAR,
    textColor: "text-white",
    bgGradient: "from-brand-light/90 via-brand-gold/80 to-brand-brown/90"
  },

  // Personal Collections
  {
    id: "birthday-celebration",
    title: "Birthday Celebration Magic",
    subtitle: "Making Special Days Unforgettable",
    category: "personal",
    description:
      "Some goodbyes deserve extraordinary gratitude. Our farewell hampers help you express heartfelt appreciation that honors shared experiences and ensures that departing colleagues, partners, or friends carry your sincere thanks in their hearts.",
    image: "🎁",
    features: [
      "Heartfelt Gratitude",
      "Memory Preservation",
      "Relationship Honor",
      "Lasting Impact"
    ],
    backgroundImage:
      "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_5.jpeg", // Now using optimized WebP (96% smaller!)
    textColor: "text-white",
    bgGradient: "from-brand-brown/90 via-brand-amber/80 to-brand-gold/90"
  },
  {
    id: "birthday-celebration",
    title: "Birthday Celebrations",
    subtitle: "Making every year special and memorable",
    category: "personal",
    description:
      "Transform birthdays into extraordinary celebrations that create lasting memories. Our birthday hampers add magic to special days, showing your loved ones how much they mean to you with thoughtfully curated gifts that bring joy and smiles.",
    image: "🎂",
    features: ["Birthday Magic", "Personal Joy", "Memory Creation", "Love Expression"],
    backgroundImage:
      "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/birthday/hampers-birthday_1.jpeg",
    textColor: "text-white",
    bgGradient: "from-purple-400/90 via-pink-300/80 to-blue-200/90"
  }
];
export default function EventsSection() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("business");

  // Define categories for navigation
  const categories = ["business", "festivals", "wedding", "personal"];

  // Navigation functions with infinite looping
  const handlePrevious = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const previousIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    setActiveCategory(categories[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
    setActiveCategory(categories[nextIndex]);
  };

  // Filter events based on active category
  const filteredEvents = EVENTS_DATA.filter(event => event.category === activeCategory);

  return (
    <section
      id='events-section'
      className='py-20 bg-gradient-to-br from-brand-gold/20 via-brand-light to-brand-amber/10 relative overflow-hidden'
    >
      {/* Hero-Style Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-amber/3' />
      <div className='absolute top-20 right-10 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl animate-pulse delay-1000' />
      <div className='absolute bottom-40 left-10 w-36 h-36 bg-brand-amber/15 rounded-full blur-2xl animate-bounce delay-2000' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-light/20 rounded-full blur-3xl animate-pulse delay-500' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Hero-Style Section Header */}
        <div className='text-center mb-20 relative'>
          {/* Hero-style floating elements for header */}
          <div className='absolute top-0 left-1/4 w-16 h-16 bg-brand-gold/20 rounded-full blur-lg animate-pulse' />
          <div className='absolute top-10 right-1/4 w-12 h-12 bg-brand-amber/30 rounded-full blur-md animate-bounce delay-300' />

          <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-3 md:px-8 md:py-4 rounded-full mb-6 md:mb-8 relative z-10'>
            <span className='text-brand-brown font-bold text-base md:text-lg drop-shadow-sm'>
              🎯 Complete Hamper Solutions
            </span>
          </div>
          <h2 className='font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-dark mb-4 md:mb-6 tracking-wide drop-shadow-sm relative z-10'>
            Hampers for Every Occasion
          </h2>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 px-4 md:px-0 font-normal drop-shadow-sm relative z-10'>
            From business relationships to personal celebrations, festive traditions to meaningful
            experiences—we curate thoughtful hampers that strengthen bonds and create lasting
            memories for every important occasion in life.
          </p>

          {/* Enhanced Benefits Grid */}
          <div className='mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-brand-gold/30'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
              <div className='p-3'>
                <div className='text-xl md:text-2xl mb-2'>🧑‍💼</div>
                <p className='text-xs md:text-sm font-semibold text-brand-brown'>Business</p>
                <p className='text-xs text-brand-dark'>Professional relationships</p>
              </div>
              <div className='p-3'>
                <div className='text-xl md:text-2xl mb-2'>💒</div>
                <p className='text-xs md:text-sm font-semibold text-brand-brown'>Wedding</p>
                <p className='text-xs text-brand-dark'>Celebration moments</p>
              </div>
              <div className='p-3'>
                <div className='text-xl md:text-2xl mb-2'>🪔</div>
                <p className='text-xs md:text-sm font-semibold text-brand-brown'>Festival</p>
                <p className='text-xs text-brand-dark'>Cultural traditions</p>
              </div>
              <div className='p-3'>
                <div className='text-xl md:text-2xl mb-2'>🎂</div>
                <p className='text-xs md:text-sm font-semibold text-brand-brown'>Personal</p>
                <p className='text-xs text-brand-dark'>Life milestones</p>
              </div>
            </div>
          </div>
        </div>

        {/* Updated Category Filter Buttons - 5 Categories */}
        <div className='flex flex-wrap justify-center gap-3 md:gap-4 mb-16 '>
          <button
            onClick={() => setActiveCategory("business")}
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer duration-200 ${
              activeCategory === "business"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark hover:bg-white"
            }`}
          >
            🧑‍💼 Business
          </button>
          <button
            onClick={() => setActiveCategory("festivals")}
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer duration-200 ${
              activeCategory === "festivals"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark hover:bg-white"
            }`}
          >
            🪔 Festival
          </button>
          <button
            onClick={() => setActiveCategory("wedding")}
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer duration-200 ${
              activeCategory === "wedding"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark hover:bg-white"
            }`}
          >
            💒 Wedding
          </button>
          <button
            onClick={() => setActiveCategory("personal")}
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer duration-200 ${
              activeCategory === "personal"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark hover:bg-white"
            }`}
          >
            🎂 Personal
          </button>
        </div>

        {/* Navigation Container - Positioned outside the images */}
        <div className='relative flex items-center justify-center'>
          {/* Left Navigation Arrow - Hidden on mobile */}
          <button
            onClick={handlePrevious}
            className='hidden md:flex absolute left-0 md:-left-16 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-brand-gold/20 text-brand-brown hover:text-brand-dark border border-brand-gold/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group'
            aria-label='Previous category'
          >
            <ChevronLeft className='w-6 h-6 transition-transform duration-200 group-hover:-translate-x-0.5' />
          </button>

          {/* Right Navigation Arrow - Hidden on mobile */}
          <button
            onClick={handleNext}
            className='hidden md:flex absolute right-0 md:-right-16 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-brand-gold/20 text-brand-brown hover:text-brand-dark border border-brand-gold/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group'
            aria-label='Next category'
          >
            <ChevronRight className='w-6 h-6 transition-transform duration-200 group-hover:translate-x-0.5' />
          </button>

          {/* Hero-Style Event Cards - Always Visible Content */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative w-full'>
            {/* Hero-Style Floating Background Elements */}
            <div className='absolute top-10 left-10 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl animate-pulse' />
            <div className='absolute bottom-20 right-20 w-24 h-24 bg-brand-amber/30 rounded-full blur-xl animate-bounce' />
            <div className='absolute top-1/3 right-1/4 w-20 h-20 bg-brand-light/30 rounded-full blur-lg animate-pulse delay-300' />

            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className='group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-200 transform hover:scale-[1.02] z-10'
                style={{
                  animationDelay: `${index * 50}ms`,
                  willChange: "transform, box-shadow",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)"
                }}
              >
                {/* Card Background - Clean Initial State, Hover Effects */}
                <div
                  className='relative min-h-[600px] sm:min-h-[650px] md:min-h-[600px] lg:min-h-[650px] h-full bg-white group-hover:bg-gradient-to-br group-hover:from-brand-gold/20 group-hover:via-brand-light group-hover:to-brand-amber/10 transition-all duration-300 ease-out'
                  style={{
                    willChange: "background-color",
                    backfaceVisibility: "hidden"
                  }}
                >
                  {/* Simple Background Image */}
                  {event.backgroundImage && (
                    <div
                      className='absolute inset-0 opacity-100 group-hover:opacity-30 transition-opacity duration-300 ease-out'
                      style={{
                        willChange: "opacity",
                        backfaceVisibility: "hidden",
                        transform: "translateZ(0)"
                      }}
                    >
                      <Image
                        src={event.backgroundImage}
                        alt={event.title}
                        fill
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, 50vw'
                        loading='lazy'
                        priority={false}
                        quality={85}
                      />
                    </div>
                  )}

                  {/* Subtle Golden Gradient Overlay for Premium Feel */}
                  <div
                    className='absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-amber/8 group-hover:opacity-60 transition-opacity duration-300 ease-out'
                    style={{
                      willChange: "opacity",
                      backfaceVisibility: "hidden"
                    }}
                  />

                  {/* Overlay for better text readability in initial state */}
                  <div
                    className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent group-hover:from-brand-gold/15 group-hover:via-transparent group-hover:to-brand-amber/10 transition-all duration-300 ease-out'
                    style={{
                      willChange: "background-image",
                      backfaceVisibility: "hidden"
                    }}
                  />

                  {/* Hover Decorative Elements */}
                  <div
                    className='absolute top-4 right-4 w-8 h-8 bg-brand-gold/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out animate-pulse'
                    style={{
                      willChange: "opacity, transform",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)"
                    }}
                  />
                  <div
                    className='absolute bottom-20 right-4 w-6 h-6 bg-brand-amber/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out animate-bounce'
                    style={{
                      willChange: "opacity, transform",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)"
                    }}
                  />

                  {/* INITIAL STATE - Background Image with Enhanced Title Tag */}
                  <div
                    className='absolute inset-0 flex flex-col opacity-100 group-hover:opacity-0 transition-all duration-300 ease-out'
                    style={{
                      willChange: "opacity, transform",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)"
                    }}
                  >
                    {/* Enhanced Title Tag at Bottom */}
                    <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2'>
                      <div className='relative group'>
                        {/* Tag Shadow/Glow Effect */}
                        <div
                          className='absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300 ease-out'
                          style={{
                            willChange: "opacity",
                            backfaceVisibility: "hidden"
                          }}
                        />

                        {/* Main Tag */}
                        <div className='relative bg-gradient-to-r from-white via-brand-light/95 to-white backdrop-blur-sm px-6 py-3 rounded-full border border-brand-gold/30 shadow-xl'>
                          {/* Golden accent line */}
                          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-full' />

                          {/* Single Line Title */}
                          <span className='text-brand-dark font-bold text-sm md:text-base text-center tracking-wide whitespace-nowrap'>
                            {event.title}
                          </span>

                          {/* Bottom golden accent line */}
                          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-brand-amber to-transparent rounded-full' />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* HOVER STATE - Full Content Reveal */}
                  <div
                    className='absolute inset-0 p-6 sm:p-8 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out'
                    style={{
                      willChange: "opacity, transform",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)"
                    }}
                  >
                    {/* Header with Enhanced Icon */}
                    <div className='text-center mb-6'>
                      <div
                        className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-amber via-brand-gold to-brand-brown rounded-xl flex items-center justify-center shadow-lg mx-auto mb-4 animate-bounce'
                        style={{
                          willChange: "transform",
                          backfaceVisibility: "hidden",
                          transform: "translateZ(0)"
                        }}
                      >
                        <span className='text-2xl sm:text-3xl filter drop-shadow-lg'>
                          {event.image}
                        </span>
                      </div>

                      <h3 className='font-display text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-dark leading-tight tracking-wide drop-shadow-sm mb-2'>
                        {event.title}
                      </h3>
                      <h4 className='text-sm sm:text-base md:text-sm lg:text-base font-medium text-brand-brown tracking-wider uppercase drop-shadow-sm opacity-90'>
                        {event.subtitle}
                      </h4>
                    </div>

                    {/* Description - Scrollable on smaller cards */}
                    <div className='flex-1 flex flex-col overflow-hidden'>
                      <div className='overflow-y-auto flex-1 mb-4'>
                        <p className='text-sm sm:text-base md:text-sm lg:text-sm text-gray-700 leading-relaxed text-center'>
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Benefits Section - Updated for all categories including festivals */}
                    <div className='mt-auto'>
                      <div className='mb-4 p-3 sm:p-4 bg-white/80 rounded-lg border border-brand-gold/30 shadow-lg'>
                        <h5 className='flex items-center justify-center gap-2 font-bold text-brand-brown mb-3 text-sm sm:text-base text-center'>
                          {event.category === "business" && "💼 Business Impact"}
                          {event.category === "wedding" && "💒 Wedding Value"}
                          {event.category === "festivals" && "🎊 Festival Significance"}
                          {event.category === "personal" && "🎂 Personal Value"}
                        </h5>

                        {/* Simplified Benefits List - Updated for festivals */}
                        <div className='text-center'>
                          <div className='flex items-center justify-center gap-2 mb-2'>
                            <span className='text-brand-gold text-base'>✨</span>
                            <span className='text-xs sm:text-sm font-medium text-gray-700'>
                              {event.id === "employee-appreciation" && "Personal Recognition"}
                              {event.id === "milestone-celebration" && "Achievement Honor"}
                              {event.id === "corporate-events" && "Event Enhancement"}
                              {event.id === "wedding-celebration" && "Guest Appreciation"}
                              {event.id === "family-occasions" && "Family Bonding"}
                              {event.id === "farewell-appreciation" && "Heartfelt Gratitude"}
                              {event.id === "baby-shower" && "New Life Celebration"}
                              {event.id === "rakshabandhan" && "Sibling Bond"}
                              {event.id === "birthday-celebration" && "Birthday Magic"}
                              {event.id === "diwali" && "Festival of Lights"}
                            </span>
                          </div>
                          <div className='flex items-center justify-center gap-2'>
                            <span className='text-brand-gold text-base'>✨</span>
                            <span className='text-xs sm:text-sm font-medium text-gray-700'>
                              {event.id === "employee-appreciation" &&
                                "Strengthen loyalty & morale"}
                              {event.id === "milestone-celebration" &&
                                "Create shared pride & motivation"}
                              {event.id === "corporate-events" && "Enhance corporate gatherings"}
                              {event.id === "wedding-celebration" &&
                                "Express gratitude & create memories"}
                              {event.id === "family-occasions" &&
                                "Honor family bonds & create warm memories"}
                              {event.id === "farewell-appreciation" &&
                                "Express heartfelt gratitude"}
                              {event.id === "baby-shower" && "Honor motherhood & new beginnings"}
                              {event.id === "rakshabandhan" &&
                                "Celebrate sacred sibling traditions"}
                              {event.id === "birthday-celebration" &&
                                "Create extraordinary celebrations"}
                              {event.id === "diwali" && "Spread joy, prosperity & togetherness"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className='flex gap-2 sm:gap-3'>
                        <button
                          onClick={() => router.push("/collections")}
                          className={`${event.bgGradient} text-white font-semibold px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center gap-1 sm:gap-2 flex-1 cursor-pointer`}
                        >
                          <svg
                            className='w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 5l7 7-7 7'
                            />
                          </svg>
                          <span>Explore</span>
                        </button>
                        <button
                          onClick={() => router.push("/contact")}
                          className='bg-white/90 border-brand-gold text-brand-brown hover:bg-brand-gold hover:text-white font-semibold px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg shadow-lg hover:shadow-xl transition-colors duration-200 border flex items-center justify-center gap-1 sm:gap-2 cursor-pointer'
                        >
                          <span>Quote</span>
                          <span>💬</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Status Indicator - Always Visible */}
                  <div
                    className='absolute bottom-4 right-4 transition-transform duration-300 ease-out'
                    style={{
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)"
                    }}
                  >
                    <div
                      className='w-3 h-3 bg-brand-gold/70 rounded-full animate-pulse group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300 ease-out'
                      style={{
                        willChange: "transform, background-color",
                        backfaceVisibility: "hidden"
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Category Indicator Dots - Below the images */}
            <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20'>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-brand-gold shadow-lg scale-125"
                      : "bg-white/60 hover:bg-brand-gold/50 hover:scale-110"
                  }`}
                  aria-label={`Switch to ${category} category`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid Empty State */}
        {filteredEvents.length === 0 && (
          <div className='text-center py-12'>
            <div className='w-24 h-24 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-3xl'>🎁</span>
            </div>
            <h3 className='text-xl font-bold text-brand-brown mb-2'>No hampers found</h3>
            <p className='text-brand-dark opacity-80'>
              Try selecting a different category to explore our collections.
            </p>
          </div>
        )}

        {/* Call-to-Action Section */}
        <div className='text-center mt-20 bg-gradient-to-r from-brand-gold to-brand-amber rounded-3xl p-8 md:p-12 shadow-2xl'>
          <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-brown mb-4 md:mb-6'>
            Ready to Build Meaningful Connections?
          </h3>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl text-brand-dark mb-6 md:mb-8 max-w-2xl mx-auto px-4 md:px-0'>
            {`Let's work together to create hamper experiences that strengthen
            your relationships and drive real business value. We're committed to
            understanding your needs and delivering solutions that make a
            difference.`}
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button
              onClick={() => router.push("/collections?category=all")}
              className='bg-brand-brown text-brand-light font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg'
            >
              🏢 Start Your Journey
            </Button>
            <Button
              onClick={() =>
                handleWhatsApp(
                  "Hi! I'm interested in your hamper services and would like to learn more about how you can help strengthen our relationships."
                )
              }
              className='bg-white/90 text-brand-brown font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg border border-brand-gold/30'
            >
              💬 {"Let's Connect"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
