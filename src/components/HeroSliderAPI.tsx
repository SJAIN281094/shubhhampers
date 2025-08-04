/**
 * API-Enabled Hero Slider Component
 * Fetches hero carousel data from the home page API
 */

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TbBrandWhatsapp } from "react-icons/tb";
import Image from "next/image";
import { handleWhatsApp } from "../lib/contact-utils";
import HamperTag from "./HamperTag";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { getHeroSlides, getHeroConfig } from "../lib/home-api";
import { TransformedHeroSlide } from "../lib/home-api-types";

// Enhanced Background Elements with Motion
const MotionBackground = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* Overlay for better text readability */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-brand-light/40 via-white/30 to-brand-gold/20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Floating Elements with Motion - Hidden on mobile for better performance */}
      <motion.div
        className='hidden md:block absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-full blur-2xl'
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className='hidden lg:block absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-brand-amber/15 to-brand-gold/15 rounded-full blur-xl'
        animate={{
          x: [0, 15, 0],
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Decorative Lines with Motion - Hidden on mobile */}
      <motion.div
        className='hidden lg:block absolute top-1/4 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-brand-amber/30 to-transparent'
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 128, opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
      <motion.div
        className='hidden lg:block absolute bottom-1/3 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent'
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 96, opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
    </div>
  );
};

interface HeroSliderProps {
  fallbackSlides?: TransformedHeroSlide[]; // Fallback slides if API fails
}

export default function HeroSliderAPI({ fallbackSlides = [] }: HeroSliderProps) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [slides, setSlides] = useState<TransformedHeroSlide[]>(fallbackSlides);
  const [config, setConfig] = useState({
    autoPlay: true,
    autoPlayInterval: 5000,
    showDots: true,
    showArrows: true,
    infinite: true,
    pauseOnHover: true
  });
  const [isLoading, setIsLoading] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch hero data from API
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setIsLoading(true);
        const [apiSlides, apiConfig] = await Promise.all([getHeroSlides(), getHeroConfig()]);

        if (apiSlides.length > 0) {
          setSlides(apiSlides);
        }
        setConfig(apiConfig);
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
        // Fallback to provided slides or keep current slides
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Memoized navigation handlers
  const _navigateToCategory = useCallback(
    (category: string) => {
      // Map categories to SEO-friendly URLs
      const categoryUrlMap: Record<string, string> = {
        festival: "/hampers/festival-gift-hampers",
        wedding: "/hampers/wedding-gift-hampers",
        business: "/hampers/business-gift-hampers",
        personal: "/hampers/personal-gift-hampers",
        corporate: "/hampers/business-gift-hampers", // Alias for business
        all: "/hampers"
      };
      const url = categoryUrlMap[category] || "/hampers";
      router.push(url);
    },
    [router]
  );

  const getCategoryMessage = (category: string) => {
    const categoryMessages = {
      festival:
        "Hi! I'm interested in your Festival Gift Hampers. Can you help me with Diwali and Raksha Bandhan gift hampers?",
      wedding:
        "Hi! I'm interested in your Wedding Gift Hampers. Can you help me with room welcome hampers and return gifts?",
      business:
        "Hi! I'm interested in your Corporate Gift Hampers. Can you help me with employee and client gifting solutions?",
      personal:
        "Hi! I'm interested in your Personal Gift Hampers. Can you help me with birthday and anniversary celebrations?",
      default:
        "Hi! I'm interested in Shubhhampers services and would like to discuss my requirements."
    };
    return categoryMessages[category as keyof typeof categoryMessages] || categoryMessages.default;
  };

  const handleSecondaryAction = useCallback(
    (slide: TransformedHeroSlide) => {
      // If secondary CTA is a WhatsApp URL, handle it as WhatsApp
      if (slide.secondaryCtaUrl.includes("whatsapp")) {
        handleWhatsApp(getCategoryMessage(slide.category));
      } else {
        // Otherwise navigate to the URL
        if (slide.secondaryCtaUrl.startsWith("http")) {
          window.open(slide.secondaryCtaUrl, "_blank");
        } else {
          router.push(slide.secondaryCtaUrl);
        }
      }
    },
    [router]
  );

  const handlePrimaryAction = useCallback(
    (slide: TransformedHeroSlide) => {
      if (slide.ctaUrl.startsWith("http")) {
        window.open(slide.ctaUrl, "_blank");
      } else {
        router.push(slide.ctaUrl);
      }
    },
    [router]
  );

  // Navigation functions
  const paginate = useCallback(
    (newDirection: number) => {
      if (slides.length === 0) return;

      const nextIndex = config.infinite
        ? (currentSlide + newDirection + slides.length) % slides.length
        : Math.max(0, Math.min(slides.length - 1, currentSlide + newDirection));

      setDirection(newDirection);
      setCurrentSlide(nextIndex);
    },
    [currentSlide, slides.length, config.infinite]
  );

  const goToSlide = useCallback(
    (index: number) => {
      const newDirection = index > currentSlide ? 1 : -1;
      setDirection(newDirection);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  // Autoplay functionality
  const startAutoplay = useCallback(() => {
    if (!isMounted || !config.autoPlay) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      if (!isPaused && document.visibilityState === "visible") {
        paginate(1);
      }
    }, config.autoPlayInterval);
  }, [paginate, isPaused, isMounted, config.autoPlay, config.autoPlayInterval]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  // Pause/resume handlers
  const handleMouseEnter = useCallback(() => {
    if (config.pauseOnHover) {
      setIsPaused(true);
    }
    if (config.showArrows) {
      setShowNavigation(true);
    }
  }, [config.pauseOnHover, config.showArrows]);

  const handleMouseLeave = useCallback(() => {
    if (config.pauseOnHover) {
      setIsPaused(false);
    }
    if (config.showArrows) {
      setShowNavigation(false);
    }
  }, [config.pauseOnHover, config.showArrows]);

  // Effects for autoplay management
  useEffect(() => {
    if (!isMounted || slides.length === 0) return;
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay, isMounted, slides.length]);

  // Don't render until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <section className='min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-gold/5 flex items-center justify-center'>
        <div className='animate-pulse text-brand-brown'>Loading...</div>
      </section>
    );
  }

  // If no slides available, show a fallback
  if (slides.length === 0) {
    return (
      <section className='min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-gold/5 flex items-center justify-center'>
        <div className='text-center text-brand-brown'>
          <h2 className='text-2xl font-bold mb-4'>Welcome to Shubhhampers</h2>
          <p className='text-lg mb-6'>Premium Gift Hampers for Every Occasion</p>
          <PrimaryButton onClick={() => router.push("/hampers")}>Browse Hampers</PrimaryButton>
        </div>
      </section>
    );
  }

  const currentSlideData = slides[currentSlide];

  return (
    <section
      className='relative min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-gold/5 overflow-hidden'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label='Hero carousel showcasing gift hampers'
    >
      <MotionBackground />

      {/* Main Content */}
      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center'>
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
              }),
              center: {
                zIndex: 1,
                x: 0,
                opacity: 1
              },
              exit: (direction: number) => ({
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
              })
            }}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'
          >
            {/* Left Column - Content */}
            <motion.div
              className='text-center lg:text-left order-2 lg:order-1'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Tags */}
              <motion.div
                className='flex flex-wrap justify-center lg:justify-start gap-2 mb-6'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {currentSlideData.features.slice(0, 3).map((feature, index) => (
                  <HamperTag key={`${currentSlide}-${index}`} title={feature} />
                ))}
              </motion.div>

              {/* Title */}
              <motion.h1
                className='font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-dark mb-4 lg:mb-6 leading-tight tracking-wide'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {currentSlideData.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                className='text-xl sm:text-2xl lg:text-3xl text-brand-brown font-semibold mb-4 lg:mb-6 leading-relaxed'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {currentSlideData.subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p
                className='text-base sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {currentSlideData.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className='flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <PrimaryButton
                  onClick={() => handlePrimaryAction(currentSlideData)}
                  size='lg'
                  className='whitespace-nowrap'
                >
                  {currentSlideData.cta}
                </PrimaryButton>

                <SecondaryButton
                  onClick={() => handleSecondaryAction(currentSlideData)}
                  size='lg'
                  className='whitespace-nowrap'
                >
                  {currentSlideData.secondaryCta.includes("WhatsApp") && (
                    <TbBrandWhatsapp className='w-5 h-5' />
                  )}
                  {currentSlideData.secondaryCta}
                </SecondaryButton>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className='order-1 lg:order-2 relative'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className='relative aspect-square lg:aspect-[4/5] max-w-lg mx-auto lg:max-w-none'>
                {/* Decorative Background */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-br ${currentSlideData.gradient} rounded-2xl lg:rounded-3xl`}
                />

                {/* Image Container */}
                <div className='relative bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20'>
                  <Image
                    src={currentSlideData.image}
                    alt={currentSlideData.imageAlt}
                    fill
                    className='object-cover'
                    priority={currentSlide === 0}
                    quality={85}
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />

                  {/* Image Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent' />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {config.showArrows && slides.length > 1 && (
        <AnimatePresence>
          {showNavigation && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={() => paginate(-1)}
                className='absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 lg:p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-brand-gold/20 text-brand-brown hover:text-brand-dark group'
                aria-label='Previous slide'
              >
                <ChevronLeft className='w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform' />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={() => paginate(1)}
                className='absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 lg:p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-brand-gold/20 text-brand-brown hover:text-brand-dark group'
                aria-label='Next slide'
              >
                <ChevronRight className='w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform' />
              </motion.button>
            </>
          )}
        </AnimatePresence>
      )}

      {/* Slide Indicators */}
      {config.showDots && slides.length > 1 && (
        <motion.div
          className='absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className='flex space-x-2 lg:space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg border border-brand-gold/20'>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-brand-gold to-brand-amber scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Loading indicator for API data */}
      {isLoading && (
        <div className='absolute top-4 right-4 z-30'>
          <div className='bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-brand-gold/20'>
            <div className='flex items-center gap-2 text-brand-brown text-sm'>
              <div className='w-2 h-2 bg-brand-gold rounded-full animate-pulse' />
              Loading content...
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
