"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { handleWhatsApp } from "../lib/contact-utils";
import { IMAGES } from "../lib/image-constants";
import HamperTag from "./HamperTag";
import FeatureTag from "./FeatureTag";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const EVENTS_DATA = [
  {
    id: "employee-onboarding",
    title: "Employee Onboarding Excellence",
    subtitle: "Welcome New Team Members with Heart",
    category: "corporate",
    description:
      "Transform first days into lasting memories. Our thoughtfully curated onboarding hampers help new team members feel genuinely valued from day one, creating positive impressions that strengthen company culture and employee loyalty.",
    image: "🎯",
    features: ["Personal Recognition", "Milestone Celebration", "Team Building", "Loyalty Boost"],
    backgroundImage: IMAGES.EMPLOYEE_ONBOARDING,
    textColor: "text-white",
    bgGradient: "from-brand-amber/90 via-brand-gold/80 to-brand-brown/90"
  },
  {
    id: "milestone-celebration",
    title: "Business Milestones",
    subtitle: "Celebrating achievements that matter most",
    category: "corporate",
    description:
      "Success tastes sweeter when shared. Our milestone celebration hampers help you commemorate significant achievements with your team, creating shared pride and motivation that propels your organization toward even greater accomplishments.",
    image: "🏆",
    features: ["Achievement Honor", "Team Unity", "Success Sharing", "Future Motivation"],
    backgroundImage: IMAGES.MILESTONE,
    textColor: "text-white",
    bgGradient: "from-brand-brown/90 via-brand-gold/80 to-brand-amber/90"
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    subtitle: "Making business occasions memorable",
    category: "corporate",
    description:
      "Transform corporate gatherings into memorable experiences. Our event hampers ensure every attendee leaves with something special, strengthening business relationships and creating positive associations with your brand that last long after the event ends.",
    image: "🏢",
    features: ["Event Enhancement", "Brand Building", "Guest Delight", "Lasting Impression"],
    backgroundImage: IMAGES.CORPORATE_EVENT,
    textColor: "text-white",
    bgGradient: "from-brand-gold/90 via-brand-amber/80 to-brand-brown/90"
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
  {
    id: "wedding-return-hamper",
    title: "Wedding Return Hampers",
    subtitle: "Show Your Appreciation",
    category: "wedding",
    description:
      "Express your gratitude to guests who made your day special. These thoughtfully curated hampers are a perfect way to say thank you and leave a lasting impression.",
    image: "👰",
    features: ["Heartfelt Gratitude", "Memorable Tokens", "Personalized Touch", "Lasting Memories"],
    backgroundImage: IMAGES.WEDDING_RETURN_HAMPERS,
    textColor: "text-white",
    bgGradient: "from-brand-gold/90 via-brand-amber/80 to-brand-brown/90"
  },

  // Festival Collections
  {
    id: "raksha-bandhan",
    title: "Raksha Bandhan Bonds",
    subtitle: "Celebrate Sacred Sibling Love",
    category: "festival",
    description:
      "Honor the unbreakable bond between siblings with hampers that touch the heart. Our Raksha Bandhan collection celebrates this sacred relationship with traditional elements and modern touches that create treasured memories.",
    image: "💕",
    features: ["Sacred Rakhis", "Sweet Traditions", "Heartfelt Messages", "Sibling Love"],
    backgroundImage: IMAGES.RAKSHABANDHAN,
    textColor: "text-white",
    bgGradient: "from-brand-amber/90 via-brand-light/80 to-brand-gold/90"
  },
  {
    id: "diwali-magic",
    title: "Diwali Magic Collection",
    subtitle: "Illuminate Hearts and Relationships",
    category: "festival",
    description:
      "Feel the warmth of Diwali through hampers that capture the festival's true spirit. Each carefully curated collection brings traditional joy and modern elegance together, creating moments that strengthen bonds and illuminate relationships for years to come.",
    image: "✨",
    features: ["Traditional Sweets", "Premium Items", "Custom Packaging", "Cultural Authenticity"],
    backgroundImage: IMAGES.DIWALI,
    textColor: "text-white",
    bgGradient: "from-brand-gold/90 via-brand-amber/80 to-brand-brown/90"
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
    id: "baby-shower",
    title: "Baby Shower",
    subtitle: "Celebrating new beginnings with love",
    category: "personal",
    description:
      "Welcome the little miracle with hampers that celebrate new life and motherhood. Our baby shower collections create precious moments of joy, offering thoughtful gifts that honor this beautiful journey and show your love for the growing family.",
    image: "👶",
    features: ["New Life Celebration", "Motherhood Honor", "Family Joy", "Precious Moments"],
    backgroundImage: IMAGES.NEW_BABY_BLESSINGS,
    textColor: "text-white",
    bgGradient: "from-pink-400/90 via-blue-300/80 to-yellow-200/90"
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
    backgroundImage: IMAGES.ANNIVERSARY_LOVE_STORY,
    textColor: "text-white",
    bgGradient: "from-purple-400/90 via-pink-300/80 to-blue-200/90"
  },
  {
    id: "anniversary-celebration",
    title: "Anniversary Love Story",
    subtitle: "Celebrating love that grows stronger with time",
    category: "personal",
    description:
      "Honor the beautiful journey of love that grows stronger with each passing year. Our anniversary hampers celebrate milestones that matter, creating new chapters in your love story that will be remembered forever.",
    image: "💕",
    features: ["Love Celebration", "Milestone Honors", "Romantic Touch", "Lasting Memories"],
    backgroundImage: IMAGES.ANNIVERSARY_LOVE_STORY,
    textColor: "text-white",
    bgGradient: "from-pink-400/90 via-red-300/80 to-purple-200/90"
  }
];

export default function EventsSection() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("festival");

  // Define categories for navigation
  const categories = [
    {
      id: "festival",
      label: "Festival",
      icon: "🪔",
      route: "festival",
      title: "Festival Gift Hampers for Sacred Celebrations",
      description:
        "Honor traditions and strengthen family bonds with our curated festival gift hampers. From Diwali sweets to Rakhi gift hampers, each one celebrates the joy of togetherness and cultural heritage."
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
      id: "corporate",
      label: "Corporate",
      icon: "🧑‍💼",
      route: "corporate",
      title: "Corporate Gift Hampers for Professional Excellence",
      description:
        "Build meaningful business relationships and show appreciation that resonates. Our corporate gift hampers strengthen team bonds and create lasting impressions with clients and employees."
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

  // Navigation functions with infinite looping
  const handlePrevious = () => {
    const currentIndex = categories.findIndex(cat => cat.id === activeCategory);
    const previousIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    setActiveCategory(categories[previousIndex].id);
  };

  const handleNext = () => {
    const currentIndex = categories.findIndex(cat => cat.id === activeCategory);
    const nextIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
    setActiveCategory(categories[nextIndex].id);
  };

  // Filter events based on active category and limit to 3 items
  const filteredEvents = EVENTS_DATA.filter(event => event.category === activeCategory).slice(0, 3);

  // Get the current category details
  const currentCategory = categories.find(cat => cat.id === activeCategory);

  // Handle View All button click
  const handleViewAll = () => {
    router.push(`/collections?category=${currentCategory?.route || activeCategory}`);
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
        <div className='text-center mb-20 relative'>
          {/* Floating elements for header */}
          <div className='absolute top-0 left-1/4 w-16 h-16 bg-brand-gold/20 rounded-full blur-lg animate-pulse' />
          <div className='absolute top-10 right-1/4 w-12 h-12 bg-brand-amber/30 rounded-full blur-md animate-bounce delay-300' />

          <FeatureTag>🎯 Complete Hamper Solutions</FeatureTag>

          <h2 className='font-display text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-brown mb-2 xs:mb-3 md:mb-4 leading-tight tracking-wide drop-shadow-sm relative z-10'>
            Hampers for Every Celebration & Relationship
          </h2>

          <p className='text-xs xs:text-sm sm:text-base md:text-lg text-brand-dark max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 px-4 md:px-0 font-normal drop-shadow-sm relative z-10'>
            {`Whether it's honoring family ties, celebrating milestones, or expressing heartfelt
            gratitude — our thoughtfully crafted hampers are made for every occasion that matters.
            From wedding and festive hampers to birthday, rakhi, and corporate gifts, each one is a
            beautiful way to cherish bonds and create meaningful memories.`}
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-3 md:gap-4 mb-16'>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer duration-200 ${
                activeCategory === category.id
                  ? "bg-brand-gold text-brand-brown shadow-xl"
                  : "bg-white/80 text-brand-dark hover:bg-white"
              }`}
            >
              {category.icon} {category.label}
            </button>
          ))}
        </div>

        {/* Navigation Container */}
        <div className='relative flex items-center justify-center'>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className='hidden md:flex absolute left-0 md:-left-16 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-brand-gold/20 text-brand-brown hover:text-brand-dark border border-brand-gold/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group'
            aria-label='Previous category'
          >
            <ChevronLeft className='w-6 h-6 transition-transform duration-200 group-hover:-translate-x-0.5' />
          </button>

          <button
            onClick={handleNext}
            className='hidden md:flex absolute right-0 md:-right-16 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-brand-gold/20 text-brand-brown hover:text-brand-dark border border-brand-gold/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group'
            aria-label='Next category'
          >
            <ChevronRight className='w-6 h-6 transition-transform duration-200 group-hover:translate-x-0.5' />
          </button>

          <div className='w-full'>
            {/* Category Title */}
            <div className='text-center mb-8'>
              <h3 className='text-2xl md:text-3xl font-bold text-brand-dark mb-2'>
                {currentCategory?.icon}{" "}
                {currentCategory?.title || `${currentCategory?.label} Hampers`}
              </h3>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                {currentCategory?.description ||
                  `Discover our curated collection of ${currentCategory?.label.toLowerCase()} hampers designed to create meaningful connections`}
              </p>
            </div>

            {/* Event Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative w-full mb-10'>
              {filteredEvents.map((event, index) => (
                <div
                  key={`${activeCategory}-${event.id}`}
                  className='group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-200 transform hover:scale-[1.02] z-10'
                  style={{
                    animationDelay: `${index * 50}ms`,
                    willChange: "transform, box-shadow",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)"
                  }}
                >
                  {/* Card Background */}
                  <div className='relative min-h-[400px] sm:min-h-[450px] md:min-h-[400px] lg:min-h-[450px] h-full bg-white group-hover:bg-gradient-to-br group-hover:from-brand-gold/20 group-hover:via-brand-light group-hover:to-brand-amber/10 transition-all duration-300 ease-out'>
                    {/* Background Image */}
                    {event.backgroundImage && (
                      <div className='absolute inset-0 opacity-100 group-hover:opacity-30 transition-opacity duration-300 ease-out'>
                        <Image
                          src={event.backgroundImage}
                          alt={event.title}
                          fill
                          className='object-cover'
                          sizes='(max-width: 768px) 100vw, 33vw'
                          loading='lazy'
                          priority={false}
                          quality={85}
                        />
                      </div>
                    )}

                    {/* Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent group-hover:from-brand-brown/80 group-hover:via-brand-amber/60 group-hover:to-brand-gold/40 transition-all duration-300 ease-out' />

                    {/* Background Blur on Hover */}
                    <div className='absolute inset-0 opacity-0 group-hover:opacity-100 backdrop-blur-sm bg-brand-light/20 transition-all duration-300 ease-out' />

                    {/* INITIAL STATE */}
                    <div className='absolute inset-0 flex flex-col opacity-100 group-hover:opacity-0 transition-all duration-300 ease-out'>
                      <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2'>
                        <HamperTag title={event.title} />
                      </div>
                    </div>

                    {/* HOVER STATE */}
                    <div className='absolute inset-0 p-6 sm:p-8 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10'>
                      {/* Header */}
                      <div className='text-center mb-4'>
                        <div className='w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-amber via-brand-gold to-brand-brown rounded-xl flex items-center justify-center shadow-lg mx-auto mb-3'>
                          <span className='text-xl sm:text-2xl filter drop-shadow-lg'>
                            {event.image}
                          </span>
                        </div>

                        <h4 className='font-display text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold text-brand-dark leading-tight tracking-wide drop-shadow-sm mb-1'>
                          {event.title}
                        </h4>
                        <h5 className='text-sm sm:text-base md:text-sm lg:text-base font-medium text-brand-brown tracking-wider uppercase drop-shadow-sm opacity-90'>
                          {event.subtitle}
                        </h5>
                      </div>

                      {/* Description */}
                      <div className='flex-1 flex flex-col overflow-hidden'>
                        <div className='overflow-y-auto flex-1 mb-3'>
                          <p className='text-sm sm:text-base md:text-sm lg:text-base text-gray-700 leading-relaxed text-center line-clamp-4'>
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className='flex gap-2 sm:gap-3 mt-auto'>
                        <PrimaryButton
                          onClick={() => router.push("/collections")}
                          size='sm'
                          className='flex-1'
                        >
                          <span>Browse</span>
                          <IoArrowForward className='w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1' />
                        </PrimaryButton>

                        <SecondaryButton
                          onClick={() =>
                            handleWhatsApp(
                              `Hello! I'm interested in ${event.title} gift hampers. Could you help me with more details?`
                            )
                          }
                          size='sm'
                          className='flex-1'
                        >
                          <FaWhatsapp className='w-4 h-4' />
                          <span>Let's Connect</span>
                        </SecondaryButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className='text-center'>
              <PrimaryButton
                onClick={handleViewAll}
                size='md'
                className='px-6 py-2 rounded-full flex items-center gap-2 mx-auto'
              >
                <span>View All {currentCategory?.label} Hampers</span>
                <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
              </PrimaryButton>
            </div>

            {/* Category Indicator Dots */}
            <div className='flex justify-center gap-2 mt-8'>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-brand-gold shadow-lg scale-125"
                      : "bg-white/60 hover:bg-brand-gold/50 hover:scale-110"
                  }`}
                  aria-label={`Switch to ${category.label} category`}
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
      </div>
    </section>
  );
}
