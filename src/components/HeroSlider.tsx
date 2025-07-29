"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES, IMAGE_ALT } from "../lib/image-constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TbBrandWhatsapp } from "react-icons/tb";
import Image from "next/image";
import { handleWhatsApp } from "../lib/contact-utils";
import HamperTag from "./HamperTag";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

// Enhanced Background Elements with Motion
const MotionBackground = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* Background Image */}
      <motion.div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30'
        style={{
          backgroundImage: `url(${IMAGES.HERO_BACKGROUND})`
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

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
        className='hidden md:block absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-brand-brown/15 to-brand-gold/15 rounded-full blur-xl'
        animate={{
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className='hidden lg:block absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-brand-amber/20 to-brand-brown/20 rounded-full blur-lg'
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
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

// SEO-optimized slides with seasonal keywords and images
const slides = [
  {
    id: 1,
    title: "Festivals That Feel Like Home",
    subtitle: "Rakhi & Diwali Gift Hampers for the People You Love Most",
    description:
      "Bring hearts closer with gift hampers made to celebrate love, laughter, and the bonds that matter. From Rakhi gift hampers for your brother to Diwali sweets and snacks for your parents, every box is a tribute to tradition and togetherness. Packed with warmth and a personal touch, these gift hampers say what words can't.",
    cta: "🎁 Browse Festival Gift Hampers",
    secondaryCta: "WhatsApp Us",
    gradient: "from-brand-amber/15 via-brand-light to-brand-gold/20",
    buttonClass:
      "bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber",
    features: [
      "Gift Hamper with Love",
      "Rakhi Gift Hampers for Brother & Sister",
      "Diwali for Family",
      "Tradition in a Box",
      "Handwritten Notes",
      "Home in Every Gift Hamper"
    ],
    image: IMAGES.DIWALI,
    imageAlt: IMAGE_ALT.DIWALI_MAGIC,
    stats: {
      festivals: "Celebrated",
      traditions: "Honored",
      joy: "Shared"
    },
    category: "festival",
    keywords: "diwali hampers, rakhi gift hampers, festival gift hampers, diwali chocolate hampers"
  },
  {
    id: 2,
    title: "Wedding Room Gift Hampers & Return Gift Hampers",
    subtitle: "Welcome Guests with Warmth, Thank Them with Love",
    description:
      "From heartfelt room welcome gift hampers for your guests and bridal suite, to elegant wedding return gift hampers for friends and family — every gift hamper is designed to make your celebrations feel personal, memorable, and full of love.",
    cta: "💒 Browse Wedding Gift Hampers",
    secondaryCta: "WhatsApp Us",
    gradient: "from-brand-gold/20 via-brand-light to-brand-amber/10",
    buttonClass:
      "bg-gradient-to-r from-brand-brown to-brand-amber hover:from-brand-amber hover:to-brand-brown",
    features: [
      "Room Welcome Gift Hampers",
      "Guest Entry Gift Hampers",
      "Bridal Suite Gift Hamper",
      "Wedding Return Gift Hampers",
      "Couple Gift Hampers",
      "Sangeet / Mehendi Favors"
    ],
    image: IMAGES.WEDDING_WELCOME_HAMPERS,
    imageAlt: IMAGE_ALT.WEDDING_WELCOME_HAMPERS,
    stats: {
      love: "Celebrated",
      moments: "Treasured",
      memories: "Created"
    },
    category: "wedding",
    keywords:
      "wedding gift hamper, wedding hampers, wedding return gift hampers, wedding hamper for couple"
  },
  {
    id: 3,
    title: "Corporate Gift Hampers & Business Gifting Solutions",
    subtitle: "Premium Gift Hampers for Employees, Clients & Celebrations",
    description:
      "Show appreciation that resonates. From employee onboarding to client thank-yous and festival gifting, our premium corporate gift hampers are crafted to build meaningful connections, boost morale, and leave a lasting impression — all while reflecting your brand's values with elegance and warmth.",
    cta: "🏢 View Corporate Gift Hampers",
    secondaryCta: "WhatsApp Us",
    gradient: "from-brand-gold/20 via-brand-light to-brand-amber/10",
    buttonClass:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    features: [
      "Employee Gifting",
      "Client Gift Hampers",
      "Milestone Celebrations",
      "Corporate Festive Gifting"
    ],
    image: IMAGES.EMPLOYEE_ONBOARDING,
    imageAlt: IMAGE_ALT.EMPLOYEE_ONBOARDING,
    stats: { relationships: "Strengthened", appreciation: "Expressed", success: "Celebrated" },
    category: "business",
    keywords:
      "corporate gift hampers, employee appreciation gifts, business hampers, corporate gifting"
  },
  {
    id: 4,
    title: "Birthday & Personal Gift Hampers",
    subtitle: "Valentine Gift Hampers | Gifts for Her, Him & Every Beautiful Bond",
    description:
      "Celebrate the moments that matter most. From birthday gift hampers that bring joy to Valentine's Day baskets filled with love, and anniversary gifts that rekindle memories — each gift hamper is thoughtfully curated to make your personal celebrations more meaningful, memorable, and full of heart.",
    cta: "💝 Browse Personal Gift Hampers",
    secondaryCta: "WhatsApp Us",
    gradient: "from-brand-brown/10 via-brand-light to-brand-amber/15",
    buttonClass:
      "bg-gradient-to-r from-brand-gold to-brand-brown hover:from-brand-brown hover:to-brand-gold",
    features: [
      "Birthday Gift Hampers",
      "Valentine's Day Gifts",
      "Anniversary Gift Hampers",
      "Made with Love"
    ],
    image: IMAGES.BIRTHDAY_CELEBRATION,
    imageAlt: IMAGE_ALT.BIRTHDAY_CELEBRATION_MAGIC,
    stats: {
      love: "Expressed",
      moments: "Cherished",
      bonds: "Strengthened"
    },
    category: "personal",
    keywords:
      "birthday hampers, valentine hamper, birthday gift hampers for her, valentine's day gift basket"
  }
];

// Motion variants for animations
const slideVariants = {
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
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function HeroSlider() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Memoized navigation handlers
  const navigateToCategory = useCallback(
    (category: string) => {
      router.push(`/collections?category=${category}`);
    },
    [router]
  );

  const getCategoryMessage = (category: string) => {
    const categoryMessages = {
      festival:
        "Hi! I'm interested in your Festival Gift Hampers. Can you help me with Diwali and Rakhi gift hampers?",
      wedding:
        "Hi! I'm interested in your Wedding Gift Hampers. Can you help me with room welcome hampers and return gifts?",
      business:
        "Hi! I'm interested in your Corporate Gift Hampers. Can you help me with employee and client gifting solutions?",
      personal:
        "Hi! I'm interested in your Personal Gift Hampers. Can you help me with birthday and anniversary gifts?"
    };
    return (
      categoryMessages[category as keyof typeof categoryMessages] ||
      "Hi! I'm interested in your gift hampers. Can you help me choose the perfect one?"
    );
  };

  // Slide navigation
  const paginate = useCallback(
    (newDirection: number) => {
      const nextIndex =
        newDirection > 0
          ? (currentSlide + 1) % slides.length
          : currentSlide === 0
            ? slides.length - 1
            : currentSlide - 1;

      setDirection(newDirection);
      setCurrentSlide(nextIndex);
    },
    [currentSlide]
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
    if (!isMounted) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      if (!isPaused && document.visibilityState === "visible") {
        paginate(1);
      }
    }, 7000); // 7 seconds for better user experience
  }, [paginate, isPaused, isMounted]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  // Pause/resume handlers
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    setShowNavigation(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
    setShowNavigation(false);
  }, []);

  // Effects for autoplay management
  useEffect(() => {
    if (!isMounted) return;
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay, isMounted]);

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

  useEffect(() => {
    if (!isMounted) return;

    if (isPaused) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }, [isPaused, startAutoplay, stopAutoplay, isMounted]);

  const currentSlideData = slides[currentSlide];

  return (
    <section
      className='relative w-full h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] lg:h-[calc(100vh-120px)] min-h-[500px] sm:min-h-[600px] overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-gold/5'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* SEO-optimized H1 tag with seasonal keywords */}
      <h1 className='sr-only'>
        Diwali Hampers | Wedding Gift Hampers | Birthday Hampers | Valentine's Day Gift Baskets |
        Premium Festival, Corporate & Personal Gift Hampers - Shubhhampers
      </h1>

      <div className='relative w-full h-full'>
        <AnimatePresence initial={false} custom={direction} mode='wait'>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient}`}
          >
            <MotionBackground />
            {/* Content Container - Alternating Layout */}
            <div className='relative z-10 flex items-center justify-center h-full px-3 xs:px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-16'>
              <div className='max-w-7xl mx-auto w-full'>
                <div
                  className={`flex flex-col ${currentSlide % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12 xl:gap-16`}
                >
                  {/* Hero Image Section */}
                  <motion.div
                    className='flex-1 w-full max-w-[200px] xs:max-w-[250px] sm:max-w-xs lg:max-w-lg'
                    initial={{ opacity: 0, x: currentSlide % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0 }}
                  >
                    {/* Floating Card Container */}
                    <div className='relative'>
                      {/* Decorative Background Elements */}
                      <div className='absolute -inset-2 xs:-inset-4 bg-gradient-to-br from-brand-gold/20 via-brand-amber/10 to-brand-brown/20 rounded-2xl xs:rounded-3xl blur-xl' />
                      <div className='absolute -inset-1 xs:-inset-2 bg-gradient-to-br from-brand-light/30 to-brand-gold/20 rounded-xl xs:rounded-2xl' />

                      {/* Main Image Card */}
                      <div className='relative w-full aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20'>
                        {/* Image */}
                        <Image
                          src={currentSlideData.image}
                          alt={currentSlideData.imageAlt}
                          fill
                          className='object-cover'
                          priority
                          sizes='(max-width: 1024px) 100vw, 50vw'
                        />

                        {/* Multi-layered Overlay */}
                        <div className='absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-white/10' />
                        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-brand-gold/5 to-brand-amber/10' />

                        {/* Corner Accent */}
                        <div className='absolute top-2 xs:top-4 right-2 xs:right-4 w-12 xs:w-16 h-12 xs:h-16 bg-gradient-to-br from-brand-gold/30 to-brand-amber/40 rounded-full blur-lg' />
                        <div className='absolute bottom-2 xs:bottom-4 left-2 xs:left-4 w-8 xs:w-12 h-8 xs:h-12 bg-gradient-to-tr from-brand-brown/20 to-brand-gold/30 rounded-full blur-md' />

                        {/* Inner Border Highlight */}
                        <div className='absolute inset-2 rounded-xl border border-white/10 pointer-events-none' />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    className='flex-1 text-center lg:text-left max-w-2xl'
                    initial={{ opacity: 0, x: currentSlide % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    {/* Title & Subtitle */}
                    <motion.h2
                      className='font-display text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-dark mb-2 xs:mb-3 md:mb-4 leading-tight tracking-wide'
                      variants={contentVariants}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {currentSlideData.title}
                    </motion.h2>
                    <motion.h3
                      className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-brand-brown mb-3 xs:mb-4 md:mb-6'
                      variants={contentVariants}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {currentSlideData.subtitle}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className='text-xs xs:text-sm sm:text-base md:text-lg text-brand-dark/80 mb-4 xs:mb-6 md:mb-8 leading-relaxed'
                      variants={contentVariants}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      {currentSlideData.description}
                    </motion.p>

                    {/* Features Grid */}
                    <motion.div
                      className='mb-6 md:mb-8'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      <div className='flex flex-wrap gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start'>
                        {currentSlideData.features.map((feature, index) => (
                          <motion.div
                            key={`slide-${currentSlideData.id}-feature-${feature.replace(/\s+/g, "-").toLowerCase()}`}
                            initial={{ opacity: 0, scale: 0.5, y: 30, rotateX: -15 }}
                            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: 1.2 + index * 0.15,
                              ease: "backOut",
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                              transition: { duration: 0.2 }
                            }}
                            className='h-full'
                          >
                            <HamperTag
                              title={feature}
                              className='scale-75 xs:scale-90 sm:scale-100'
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                      className='flex flex-col lg:flex-row items-center lg:items-start lg:justify-start justify-center space-y-3 lg:space-y-0 lg:space-x-4 w-full'
                      variants={contentVariants}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 0.8, delay: 1.6 }}
                    >
                      <PrimaryButton
                        onClick={() => navigateToCategory(currentSlideData.category)}
                        size='md'
                        className='w-full lg:w-auto lg:flex-1 lg:max-w-[280px]'
                      >
                        {currentSlideData.cta}
                      </PrimaryButton>
                      <SecondaryButton
                        onClick={() =>
                          handleWhatsApp(getCategoryMessage(currentSlideData.category))
                        }
                        size='md'
                        className='w-full lg:w-auto lg:flex-1 lg:max-w-[220px]'
                      >
                        <TbBrandWhatsapp className='w-5 h-5' />
                        WhatsApp Us
                      </SecondaryButton>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Show on Hover */}
        <AnimatePresence>
          {showNavigation && (
            <>
              <motion.button
                onClick={() => paginate(-1)}
                className='absolute left-2 xs:left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 text-brand-dark hover:text-brand-amber shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 xs:w-10 xs:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-20 touch-manipulation'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className='w-6 h-6 xs:w-5 xs:h-5 md:w-6 md:h-6' />
              </motion.button>

              <motion.button
                onClick={() => paginate(1)}
                className='absolute right-2 xs:right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 text-brand-dark hover:text-brand-amber shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 xs:w-10 xs:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-20 touch-manipulation'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className='w-6 h-6 xs:w-5 xs:h-5 md:w-6 md:h-6' />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className='absolute bottom-2 xs:bottom-4 right-2 xs:right-4 md:bottom-8 md:right-8 flex space-x-1.5 xs:space-x-2 z-20'>
          {slides.map((slideItem, idx) => (
            <motion.button
              key={`slide-indicator-${slideItem.id}`}
              className={`w-3 h-3 xs:w-2 xs:h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 cursor-pointer touch-manipulation ${
                idx === currentSlide ? "bg-brand-gold shadow-lg" : "bg-white/50 hover:bg-white/80"
              }`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Autoplay Status Indicator */}
        <AnimatePresence>
          {isPaused && (
            <motion.div
              className='absolute bottom-4 left-4 bg-white/90 text-brand-dark px-3 py-1 rounded-full text-sm font-medium shadow-lg z-20'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              ⏸️ Paused
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
