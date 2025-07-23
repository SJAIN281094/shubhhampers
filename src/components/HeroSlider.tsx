"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
import { IMAGES } from "../lib/image-constants";

// Corporate Background Elements
const CorporateBackground = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30'
        style={{
          backgroundImage: `url(${IMAGES.HERO_BACKGROUND})`
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
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Memoized navigation handlers to prevent re-renders
  const navigateToCollections = useCallback(() => {
    router.push("/collections");
  }, [router]);

  const navigateToContact = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const scrollToSlide = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  // Optimized autoplay with pause/resume functionality
  const startAutoplay = useCallback(() => {
    if (!isMounted) return; // Only start autoplay after mount
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      if (!isPaused && document.visibilityState === "visible") {
        api?.scrollNext();
      }
    }, 6000); // Increased to 6 seconds for better UX
  }, [api, isPaused, isMounted]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  // Pause/resume handlers
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Main effect for carousel setup
  useEffect(() => {
    if (!api || !isMounted) return;

    // Set initial slide
    setCurrentSlide(api.selectedScrollSnap());

    // Listen for slide changes (optimized to avoid unnecessary re-renders)
    const handleSelect = () => {
      const newSlide = api.selectedScrollSnap();
      setCurrentSlide(newSlide);
    };

    api.on("select", handleSelect);

    // Start autoplay
    startAutoplay();

    // Cleanup
    return () => {
      api.off("select", handleSelect);
      stopAutoplay();
    };
  }, [api, startAutoplay, stopAutoplay, isMounted]);

  // Handle page visibility changes (pause when tab is not active)
  useEffect(() => {
    if (!isMounted) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [startAutoplay, stopAutoplay, isMounted]);

  // Handle autoplay state changes
  useEffect(() => {
    if (!isMounted) return;

    if (isPaused) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }, [isPaused, startAutoplay, stopAutoplay, isMounted]);

  return (
    <section
      className='relative w-full h-[calc(100vh-120px)] min-h-[600px] overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-gold/5'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* SEO-optimized H1 tag for the homepage - hidden but accessible */}
      <h1 className='sr-only'>
        Premium Gift Hampers & Baskets for Corporate, Wedding & Personal Celebrations | Shubhhampers
      </h1>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true
        }}
        className='w-full h-full'
      >
        <CarouselContent className='h-full'>
          {slides.map(slide => (
            <CarouselItem key={slide.id} className='h-full'>
              <div className={`relative w-full h-full bg-gradient-to-br ${slide.gradient}`}>
                {/* Corporate Background */}
                <CorporateBackground />

                {/* Content Container */}
                <div className='relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8 pt-16 pb-20'>
                  <div className='text-center max-w-4xl lg:max-w-5xl mx-auto'>
                    {/* Emoji Icon */}
                    <div className='text-6xl sm:text-7xl md:text-8xl mb-6 md:mb-8 animate-fade-in drop-shadow-lg'>
                      {slide.icon}
                    </div>

                    {/* Title & Subtitle - Using H2 for slider titles */}
                    <h2 className='font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark mb-4 md:mb-6 leading-tight tracking-wide animate-fade-in-delay-1'>
                      {slide.title}
                    </h2>
                    <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-brown mb-6 md:mb-8 animate-fade-in-delay-2'>
                      {slide.subtitle}
                    </h3>

                    {/* Description */}
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-delay-2 px-4'>
                      {slide.description}
                    </p>

                    {/* Features Grid */}
                    <div className='mb-6 md:mb-8 animate-fade-in-delay-3'>
                      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto px-4 md:px-0'>
                        {slide.features.map(feature => (
                          <div
                            key={`slide-${slide.id}-feature-${feature.replace(/\s+/g, "-").toLowerCase()}`}
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
                        onClick={navigateToCollections}
                        className={`${slide.buttonClass} text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 border-0 w-full sm:w-auto`}
                      >
                        🎁 Explore Collections
                      </Button>
                      <Button
                        onClick={navigateToContact}
                        className='bg-white/90 backdrop-blur-sm text-brand-brown border-2 border-brand-gold font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto'
                      >
                        💬 Start Conversation
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Slide Indicator */}
                <div className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex space-x-2'>
                  {slides.map((slideItem, idx) => (
                    <button
                      key={`slide-indicator-${slideItem.id}`}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 cursor-pointer ${
                        idx === currentSlide
                          ? "bg-brand-gold shadow-lg"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      onClick={() => scrollToSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
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

      {/* Autoplay Status Indicator */}
      {isPaused && (
        <div className='absolute bottom-4 left-4 bg-white/90 text-brand-dark px-3 py-1 rounded-full text-sm font-medium shadow-lg'>
          ⏸️ Paused
        </div>
      )}
    </section>
  );
}
