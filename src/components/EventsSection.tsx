"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@ui-kit/button";

const events = [
  // BUSINESS HAMPER EVENTS
  {
    id: 1,
    title: "Employee Onboarding Kits",
    subtitle: "Welcome New Team Members",
    description:
      "First impressions matter. Our employee onboarding kits create a warm welcome for new team members, helping them feel valued from day one. Every kit tells them they're joining a company that cares about their journey and success.",
    image: "🎯",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/11.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse",
    category: "business"
  },
  {
    id: 2,
    title: "Company Milestone Celebrations",
    subtitle: "Honor Achievements Together",
    description:
      "Every milestone deserves celebration. Whether it's company anniversaries, project completions, or breakthrough achievements, our milestone celebration hampers help you recognize collective success and inspire continued excellence.",
    image: "🏆",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/19.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse",
    category: "business"
  },
  {
    id: 3,
    title: "Business Festival Packs",
    subtitle: "Celebrate Together",
    description:
      "Bring your team together during festivals with our business festival packs. These thoughtfully curated collections honor traditions while strengthening workplace bonds, creating shared moments of joy and cultural appreciation.",
    image: "🏢",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/19.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse",
    category: "business"
  },

  // WEDDING HAMPER EVENTS
  {
    id: 4,
    title: "Guest Welcome Hampers",
    subtitle: "Warm Welcome to Your Celebration",
    description:
      "Welcome your wedding guests with thoughtfully curated hampers that show your appreciation for their presence. From traditional treats to modern comforts, these hampers create the perfect first impression and set the tone for your celebration.",
    image: "💒",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/13.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse",
    category: "wedding"
  },
  {
    id: 5,
    title: "Family Hampers",
    subtitle: "Honor Both Families",
    description:
      "Strengthen bonds between families with our thoughtful family hamper collections. Whether for the bride's side or groom's side, these hampers honor traditions, show respect, and create lasting memories that bring families together.",
    image: "💝",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/14.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse",
    category: "wedding"
  },
  {
    id: 6,
    title: "Return Hampers for Guests",
    subtitle: "Gratitude That Lasts",
    description:
      "Express your heartfelt gratitude with return hampers that guests will treasure. Our collection features meaningful keepsakes that remind your loved ones of your special day and the joy they helped create.",
    image: "🎁",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/15.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse",
    category: "wedding"
  },

  // FESTIVAL HAMPER EVENTS
  {
    id: 7,
    title: "Diwali Hampers",
    subtitle: "Illuminate Relationships",
    description:
      "We believe Diwali is more than a festival—it's a celebration of relationships. Our carefully curated Diwali collection blends traditional warmth with modern elegance, creating hampers that strengthen bonds and create lasting memories.",
    image: "✨",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/10.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse",
    category: "festivals"
  },
  {
    id: 8,
    title: "Rakhi Hampers",
    subtitle: "Sacred Bonds",
    description:
      "Raksha Bandhan celebrates the sacred bond between siblings. Our collection honors this beautiful relationship with traditional sweets, beautiful rakhis, and thoughtful hampers that strengthen the unbreakable bond of love and protection.",
    image: "🪢",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/16.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse",
    category: "festivals"
  },
  {
    id: 9,
    title: "Christmas & New Year",
    subtitle: "Fresh Beginnings & Joy",
    description:
      "Celebrate the season of giving and new beginnings with our Christmas and New Year collection. From festive hampers to inspiring hampers that symbolize fresh starts, we help you spread joy and welcome new possibilities.",
    image: "🎄",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/15.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse",
    category: "festivals"
  },

  // PERSONAL CELEBRATIONS - NEW CATEGORY
  {
    id: 10,
    title: "Birthday Celebration Hampers",
    subtitle: "Make Every Birthday Special",
    description:
      "Transform ordinary birthdays into extraordinary celebrations. Our birthday hampers are curated to create genuine joy and memorable moments, whether for family, friends, or colleagues. Every hamper brings personal warmth to their special day.",
    image: "🎂",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/12.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse",
    category: "personal"
  },
  {
    id: 11,
    title: "Anniversary Hampers",
    subtitle: "Celebrate Love Stories",
    description:
      "Every anniversary tells a story of love, commitment, and shared memories. Our anniversary hampers honor these precious milestones with thoughtful collections that reflect the depth of relationships and the joy of togetherness.",
    image: "💖",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/13.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse",
    category: "personal"
  },
  {
    id: 12,
    title: "New Baby Celebration",
    subtitle: "Welcome Little Miracles",
    description:
      "Celebrate the arrival of new life with hampers that honor this precious beginning. Our new baby collections bring comfort to parents and joy to families, creating beautiful first memories for everyone involved.",
    image: "👶",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/14.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse",
    category: "personal"
  },

  // LUXURY HAMPERS - NEW CATEGORY
  {
    id: 13,
    title: "Premium Luxury Collection",
    subtitle: "Exceptional Experiences",
    description:
      "For moments that demand the extraordinary. Our premium luxury hampers feature the finest selections, rare delicacies, and exclusive items that create unforgettable experiences and leave lasting impressions.",
    image: "👑",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/19.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse",
    category: "luxury"
  },
  {
    id: 14,
    title: "Executive Gift Hampers",
    subtitle: "Sophisticated Impressions",
    description:
      "Make powerful business statements with our executive hampers. Designed for discerning professionals, these collections balance sophistication with thoughtfulness, perfect for high-level client appreciation and executive recognition.",
    image: "💼",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/11.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse",
    category: "luxury"
  },
  {
    id: 15,
    title: "VIP Experience Hampers",
    subtitle: "Beyond Expectations",
    description:
      "For your most valued relationships. Our VIP hampers go beyond products to create experiences—featuring exclusive items, personalized touches, and premium presentation that demonstrates the highest level of appreciation.",
    image: "⭐",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/12.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse",
    category: "luxury"
  }
];

export default function EventsSection() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("business");

  // Filter events based on active category
  const filteredEvents = events.filter(event => event.category === activeCategory);

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
            From business relationships to personal celebrations, festive traditions to luxury
            experiences—we curate meaningful hampers that strengthen bonds and create lasting
            memories for every important occasion in life.
          </p>

          {/* Enhanced Benefits Grid */}
          <div className='mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-brand-gold/30'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4 text-center'>
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
                <p className='text-xs md:text-sm font-semibold text-brand-brown'>Festivals</p>
                <p className='text-xs text-brand-dark'>Cultural traditions</p>
              </div>
              <div className='p-3'>
                <div className='text-xl md:text-2xl mb-2'>🎂</div>
                <p className='text-xs md:text-sm font-semibold text-brand-brown'>Personal</p>
                <p className='text-xs text-brand-dark'>Life milestones</p>
              </div>
              <div className='p-3'>
                <div className='text-xl md:text-2xl mb-2'>👑</div>
                <p className='text-xs md:text-sm font-semibold text-brand-brown'>Luxury</p>
                <p className='text-xs text-brand-dark'>Premium experiences</p>
              </div>
            </div>
          </div>
        </div>

        {/* Updated Category Filter Buttons - 5 Categories */}
        <div className='flex flex-wrap justify-center gap-3 md:gap-4 mb-16'>
          <button
            onClick={() => setActiveCategory("business")}
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              activeCategory === "business"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark hover:bg-white"
            }`}
          >
            🧑‍💼 Business
          </button>
          <button
            onClick={() => setActiveCategory("wedding")}
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              activeCategory === "wedding"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark hover:bg-white"
            }`}
          >
            💒 Wedding
          </button>
          <button
            onClick={() => setActiveCategory("festivals")}
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              activeCategory === "festivals"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark hover:bg-white"
            }`}
          >
            🪔 Festivals
          </button>
          <button
            onClick={() => setActiveCategory("personal")}
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              activeCategory === "personal"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark hover:bg-white"
            }`}
          >
            🎂 Personal
          </button>
          <button
            onClick={() => setActiveCategory("luxury")}
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              activeCategory === "luxury"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark hover:bg-white"
            }`}
          >
            👑 Luxury
          </button>
        </div>

        {/* Hero-Style Event Cards - Always Visible Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative'>
          {/* Hero-Style Floating Background Elements */}
          <div className='absolute top-10 left-10 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl animate-pulse' />
          <div className='absolute bottom-20 right-20 w-24 h-24 bg-brand-amber/30 rounded-full blur-xl animate-bounce' />
          <div className='absolute top-1/3 right-1/4 w-20 h-20 bg-brand-light/30 rounded-full blur-lg animate-pulse delay-300' />

          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className='group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer z-10'
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Card Background - Clean Initial State, Hover Effects */}
              <div className='relative min-h-[600px] sm:min-h-[650px] md:min-h-[600px] lg:min-h-[650px] h-full bg-white group-hover:bg-gradient-to-br group-hover:from-brand-gold/20 group-hover:via-brand-light group-hover:to-brand-amber/10 transition-all duration-500'>
                {/* Background Image for Initial State - Always Visible */}
                {event.backgroundImage && (
                  <div
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 group-hover:opacity-30 transition-opacity duration-500'
                    style={{
                      backgroundImage: `url('${event.backgroundImage}')`
                    }}
                  />
                )}

                {/* Subtle Golden Gradient Overlay for Premium Feel */}
                <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-amber/8 group-hover:opacity-60 transition-all duration-500' />

                {/* Overlay for better text readability in initial state */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent group-hover:from-brand-gold/15 group-hover:via-transparent group-hover:to-brand-amber/10 transition-all duration-500' />

                {/* Hover Decorative Elements */}
                <div className='absolute top-4 right-4 w-8 h-8 bg-brand-gold/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse' />
                <div className='absolute bottom-20 right-4 w-6 h-6 bg-brand-amber/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce' />

                {/* INITIAL STATE - Background Image with Enhanced Title Tag */}
                <div className='absolute inset-0 flex flex-col opacity-100 group-hover:opacity-0 transition-all duration-500'>
                  {/* Enhanced Title Tag at Bottom */}
                  <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2'>
                    <div className='relative group'>
                      {/* Tag Shadow/Glow Effect */}
                      <div className='absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300' />

                      {/* Main Tag */}
                      <div className='relative bg-gradient-to-r from-white via-brand-light/95 to-white backdrop-blur-md px-6 py-3 rounded-full border border-brand-gold/30 shadow-xl'>
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
                <div className='absolute inset-0 p-6 sm:p-8 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out'>
                  {/* Header with Enhanced Icon */}
                  <div className='text-center mb-6'>
                    <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-amber via-brand-gold to-brand-brown rounded-xl flex items-center justify-center shadow-lg mx-auto mb-4 animate-bounce'>
                      <span className='text-2xl sm:text-3xl filter drop-shadow-lg'>
                        {event.image}
                      </span>
                    </div>

                    <h3 className='font-display text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold text-brand-dark leading-tight tracking-wide drop-shadow-sm mb-2'>
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

                  {/* Benefits Section - Condensed for Space */}
                  <div className='mt-auto'>
                    {(event.category === "business" ||
                      event.category === "wedding" ||
                      event.category === "festivals" ||
                      event.category === "personal" ||
                      event.category === "luxury") && (
                      <div className='mb-4 p-3 sm:p-4 bg-white/30 backdrop-blur-sm rounded-lg border border-brand-gold/30 shadow-lg'>
                        <h5 className='flex items-center justify-center gap-2 font-bold text-brand-brown mb-3 text-sm sm:text-base text-center'>
                          {event.category === "business" && "💼 Business Impact"}
                          {event.category === "wedding" && "💒 Wedding Value"}
                          {event.category === "festivals" && "🎊 Cultural Significance"}
                          {event.category === "personal" && "🎂 Personal Value"}
                          {event.category === "luxury" && "👑 Luxury Value"}
                        </h5>

                        {/* Simplified Benefits List */}
                        <div className='text-center'>
                          <div className='flex items-center justify-center gap-2 mb-2'>
                            <span className='text-brand-gold text-base'>✨</span>
                            <span className='text-xs sm:text-sm font-medium text-gray-700'>
                              {event.id === 1 && "Create positive first impressions"}
                              {event.id === 2 && "Celebrate achievements that matter"}
                              {event.id === 3 && "Honor traditions & build unity"}
                              {event.id === 4 && "Create memorable first impressions"}
                              {event.id === 5 && "Honor traditions & respect families"}
                              {event.id === 6 && "Express heartfelt gratitude"}
                              {event.id === 7 && "Honor festival of lights"}
                              {event.id === 8 && "Celebrate sacred bonds"}
                              {event.id === 9 && "Celebrate new beginnings"}
                              {event.id === 10 && "Create genuine joy & memorable moments"}
                              {event.id === 11 && "Honor love stories & milestones"}
                              {event.id === 12 && "Welcome little miracles"}
                              {event.id === 13 && "Create unforgettable experiences"}
                              {event.id === 14 && "Sophisticated business statements"}
                              {event.id === 15 && "Beyond products to experiences"}
                            </span>
                          </div>
                          <div className='flex items-center justify-center gap-2'>
                            <span className='text-brand-gold text-base'>✨</span>
                            <span className='text-xs sm:text-sm font-medium text-gray-700'>
                              {event.id === 1 && "Show commitment to employee experience"}
                              {event.id === 2 && "Inspire continued excellence"}
                              {event.id === 3 && "Cultural appreciation"}
                              {event.id === 4 && "Show appreciation for presence"}
                              {event.id === 5 && "Strengthen family bonds"}
                              {event.id === 6 && "Create lasting keepsakes"}
                              {event.id === 7 && "Strengthen relationships"}
                              {event.id === 8 && "Honor sibling relationships"}
                              {event.id === 9 && "Spread seasonal joy"}
                              {event.id === 10 && "Show appreciation for special occasions"}
                              {event.id === 11 && "Strengthen relationships"}
                              {event.id === 12 && "Create beautiful first memories"}
                              {event.id === 13 && "Premium selections & rare delicacies"}
                              {event.id === 14 && "Executive recognition"}
                              {event.id === 15 && "Exclusive items & personalization"}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className='flex gap-2 sm:gap-3'>
                      <button
                        onClick={() => router.push("/collections")}
                        className={`${event.buttonColor} text-white font-semibold px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 sm:gap-2 flex-1`}
                      >
                        <span>Explore</span>
                        <svg
                          className='w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1'
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
                      </button>
                      <button
                        onClick={() => router.push("/contact")}
                        className='bg-white/90 backdrop-blur-sm border-brand-gold text-brand-brown hover:bg-brand-gold hover:text-white font-semibold px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border flex items-center justify-center gap-1 sm:gap-2'
                      >
                        <span>Quote</span>
                        <span>💬</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Status Indicator - Always Visible */}
                <div className='absolute bottom-4 right-4 transition-all duration-300'>
                  <div className='w-3 h-3 bg-brand-gold/70 rounded-full animate-pulse group-hover:bg-brand-gold group-hover:scale-125' />
                </div>
              </div>
            </div>
          ))}
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
              onClick={() => router.push("/collections")}
              className='bg-brand-brown text-brand-light font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg'
            >
              🏢 Start Your Journey
            </Button>
            <Button
              onClick={() => router.push("/contact")}
              className='bg-white/90 text-brand-brown font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg border border-brand-gold/30'
            >
              📞 {"Let's Connect"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
