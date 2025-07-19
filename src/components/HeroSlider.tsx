"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "../ui-kit/carousel";
import { Button } from "../ui-kit/button";

// Corporate Background Elements
const CorporateBackground = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30'
        style={{
          backgroundImage:
            "url('https://the-little-basket.s3.us-east-1.amazonaws.com/images/17.jpeg')"
        }}
      />

      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-gradient-to-br from-brand-light/40 via-white/30 to-brand-gold/20' />

      {/* Floating Corporate Elements - Hidden on mobile for better performance */}
      <div className='hidden md:block absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-full blur-2xl animate-pulse' />
      <div className='hidden md:block absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-brand-brown/15 to-brand-gold/15 rounded-full blur-xl animate-pulse delay-500' />
      <div className='hidden lg:block absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-brand-amber/20 to-brand-brown/20 rounded-full blur-lg animate-pulse delay-1000' />

      {/* Decorative Lines - Hidden on mobile */}
      <div className='hidden lg:block absolute top-1/4 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-brand-amber/30 to-transparent' />
      <div className='hidden lg:block absolute bottom-1/3 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent' />
      <div className='hidden lg:block absolute top-1/2 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-brand-brown/20 to-transparent' />
    </div>
  );
};

// Corporate Stats Component
const CorporateStats = () => (
  <div className='absolute top-4 left-4 md:top-8 md:left-8 bg-white/90 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg border border-brand-gold/20'>
    <div className='flex items-center space-x-3 md:space-x-6'>
      <div className='text-center'>
        <div className='text-lg md:text-2xl font-bold text-brand-brown'>100%</div>
        <div className='text-xs text-gray-600'>Commitment</div>
      </div>
      <div className='w-px h-6 md:h-8 bg-brand-gold/30' />
      <div className='text-center'>
        <div className='text-lg md:text-2xl font-bold text-brand-brown'>Premium</div>
        <div className='text-xs text-gray-600'>Quality</div>
      </div>
      <div className='w-px h-6 md:h-8 bg-brand-gold/30' />
      <div className='text-center'>
        <div className='text-lg md:text-2xl font-bold text-brand-brown'>24/7</div>
        <div className='text-xs text-gray-600'>Support</div>
      </div>
    </div>
  </div>
);

// Trust Badges Component - Removed certification badges

const slides = [
  {
    id: 1,
    title: "When Business Becomes Personal",
    subtitle: "Hearts Connect Through Thoughtful Gestures",
    description:
      "Behind every successful business are people who care. Our business hampers turn professional relationships into personal connections, creating moments that matter and memories that last beyond quarterly reports.",
    cta: "Create Meaningful Connections",
    secondaryCta: "Start Your Journey",
    icon: "💼",
    gradient: "from-brand-gold/20 via-brand-light to-brand-amber/10",
    buttonClass:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    features: [
      "Heartfelt Onboarding",
      "Milestone Celebrations",
      "Festival Joy",
      "Genuine Appreciation"
    ],
    stats: { connections: "Deeper", impact: "Lasting", relationships: "Authentic" }
  },
  {
    id: 2,
    title: "Love That Multiplies",
    subtitle: "Celebrating Life's Most Beautiful Moments",
    description:
      "Some celebrations are once in a lifetime. Our wedding hampers help you share your joy with everyone who matters, turning your special day into treasured memories that your loved ones will carry in their hearts forever.",
    cta: "Share Your Joy",
    secondaryCta: "Plan Together",
    icon: "💝",
    gradient: "from-brand-gold/20 via-brand-light to-brand-amber/10",
    buttonClass:
      "bg-gradient-to-r from-brand-brown to-brand-amber hover:from-brand-amber hover:to-brand-brown",
    features: ["Welcome Warmth", "Family Bonds", "Guest Happiness", "Precious Memories"],
    stats: {
      love: "Shared",
      moments: "Treasured",
      memories: "Forever"
    }
  },
  {
    id: 3,
    title: "The People Who Make It Possible",
    subtitle: "Recognizing Hearts That Care",
    description:
      "Your team doesn't just work for you—they believe in you. Show them they're valued not just as employees, but as the incredible humans who make dreams happen. Because appreciation felt deeply creates loyalty that lasts.",
    cta: "Honor Their Dedication",
    secondaryCta: "Show You Care",
    icon: "🌟",
    gradient: "from-brand-amber/15 via-brand-light to-brand-gold/20",
    buttonClass:
      "bg-gradient-to-r from-brand-gold to-brand-brown hover:from-brand-brown hover:to-brand-gold",
    features: [
      "Heartfelt Recognition",
      "Personal Touch",
      "Meaningful Gestures",
      "Genuine Gratitude"
    ],
    stats: {
      appreciation: "Felt",
      motivation: "Inspired",
      loyalty: "Earned"
    }
  },
  {
    id: 4,
    title: "Traditions That Bring Us Together",
    subtitle: "Festivals That Touch Every Soul",
    description:
      "Festivals aren't just dates on a calendar—they're moments when hearts come home. Our festive hampers help you celebrate the traditions that bind us, spreading joy that echoes through families and communities.",
    cta: "Spread Festival Joy",
    secondaryCta: "Celebrate Together",
    icon: "🎆",
    gradient: "from-brand-brown/10 via-brand-light to-brand-amber/15",
    buttonClass:
      "bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber",
    features: ["Festival Magic", "Cultural Pride", "Shared Happiness", "Timeless Traditions"],
    stats: {
      traditions: "Honored",
      joy: "Multiplied",
      communities: "United"
    }
  }
];

export default function HeroSlider() {
  const router = useRouter();
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
      setAnimationKey(prev => prev + 1);
    });

    // Add autoplay functionality with faster timing
    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 4000); // 4 seconds instead of default 6-8 seconds

    return () => clearInterval(autoplay);
  }, [api]);

  const handleScrollToNext = () => {
    const approachSection = document.querySelector("#our-approach-section");
    if (approachSection) {
      approachSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='relative w-full h-[calc(100vh-120px)] min-h-[600px] overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true
        }}
        className='w-full h-full'
      >
        <CarouselContent className='h-full'>
          {slides.map((slide, index) => (
            <CarouselItem key={`${slide.id}-${animationKey}`} className='h-full'>
              <div className={`relative w-full h-full bg-gradient-to-br ${slide.gradient}`}>
                {/* Corporate Background */}
                <CorporateBackground />

                {/* Content Container */}
                <div className='relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8 pt-16 pb-20'>
                  <div className='text-center max-w-6xl mx-auto'>
                    {/* Icon */}
                    <div className='mb-4 md:mb-6 animate-bounce'>
                      <span className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl filter drop-shadow-lg'>
                        {slide.icon}
                      </span>
                    </div>

                    {/* Subtitle */}
                    <div className='mb-3 md:mb-4 animate-fade-in-delay'>
                      <h2 className='text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-brand-brown tracking-wider uppercase drop-shadow-sm'>
                        {slide.subtitle}
                      </h2>
                    </div>

                    {/* Main Title */}
                    <div className='mb-4 md:mb-6 animate-fade-in-delay-2'>
                      <h1 className='font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-brand-dark leading-tight tracking-wide drop-shadow-sm px-2'>
                        {slide.title}
                      </h1>
                    </div>

                    {/* Description */}
                    <div className='mb-6 md:mb-8 animate-fade-in-delay-3'>
                      <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-normal drop-shadow-sm px-4 md:px-0'>
                        {slide.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className='mb-6 md:mb-8 animate-fade-in-delay-3'>
                      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto px-4 md:px-0'>
                        {slide.features.map((feature, idx) => (
                          <div
                            key={`feature-${idx + 1}`}
                            className='bg-white/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-sm border border-brand-gold/20'
                          >
                            <div className='text-xs sm:text-sm font-medium text-brand-brown text-center'>
                              {feature}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 animate-fade-in-delay-3 px-4 md:px-0'>
                      <Button
                        onClick={() => router.push("/collections")}
                        className={`${slide.buttonClass} text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 border-0 w-full sm:w-auto`}
                      >
                        🎁 Explore Collections
                      </Button>
                      <Button
                        onClick={() => router.push("/contact")}
                        className='bg-white/90 backdrop-blur-sm text-brand-brown border-2 border-brand-gold font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto'
                      >
                        💬 Start Conversation
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Corporate Stats - Only show on first slide, hidden on small mobile */}
                {index === 0 && (
                  <div className='hidden sm:block'>
                    <CorporateStats />
                  </div>
                )}

                {/* Slide Indicator */}
                <div className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex space-x-2'>
                  {slides.map((_, idx) => (
                    <div
                      key={`indication-${idx + 1}`}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 cursor-pointer ${
                        idx === currentSlide
                          ? "bg-brand-gold shadow-lg"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      onClick={() => api?.scrollTo(idx)}
                    />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className='absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 text-brand-dark hover:text-brand-amber shadow-lg hover:shadow-xl transition-all duration-300 w-10 h-10 md:w-12 md:h-12 rounded-full' />
        <CarouselNext className='absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 text-brand-dark hover:text-brand-amber shadow-lg hover:shadow-xl transition-all duration-300 w-10 h-10 md:w-12 md:h-12 rounded-full' />
      </Carousel>

      {/* Scroll to Explore Indicator */}
      <div className='absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
        <button
          onClick={handleScrollToNext}
          className='group flex flex-col items-center space-y-1 md:space-y-2 text-brand-brown hover:text-brand-amber transition-all duration-200 cursor-pointer'
        >
          <span className='text-xs md:text-sm font-medium tracking-wider uppercase drop-shadow-sm animate-subtle-blink'>
            Explore Solutions
          </span>
          <div className='w-5 h-8 md:w-6 md:h-10 border-2 border-brand-brown/50 rounded-full flex justify-center group-hover:border-brand-amber/50 transition-colors duration-200'>
            <div className='w-1 h-2 md:h-3 bg-brand-brown/70 rounded-full mt-1 md:mt-2 animate-pulse group-hover:bg-brand-amber/70 transition-colors duration-200' />
          </div>
        </button>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-brand-light/30 via-transparent to-transparent pointer-events-none' />
    </section>
  );
}
