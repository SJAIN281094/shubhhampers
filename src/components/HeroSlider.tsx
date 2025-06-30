"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui-kit/carousel";
import { Button } from "../ui-kit/button";

// Corporate Background Elements
const CorporateBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://the-little-basket.s3.us-east-1.amazonaws.com/images/17.jpeg')`,
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light/40 via-white/30 to-brand-gold/20"></div>

      {/* Floating Corporate Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-brand-brown/15 to-brand-gold/15 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-brand-amber/20 to-brand-brown/20 rounded-full blur-lg animate-pulse delay-2000"></div>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-brand-amber/30 to-transparent"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-brand-brown/20 to-transparent"></div>
    </div>
  );
};

// Corporate Stats Component
const CorporateStats = () => (
  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-brand-gold/20">
    <div className="flex items-center space-x-6">
      <div className="text-center">
        <div className="text-2xl font-bold text-brand-brown">100%</div>
        <div className="text-xs text-gray-600">Commitment</div>
      </div>
      <div className="w-px h-8 bg-brand-gold/30"></div>
      <div className="text-center">
        <div className="text-2xl font-bold text-brand-brown">Premium</div>
        <div className="text-xs text-gray-600">Quality</div>
      </div>
      <div className="w-px h-8 bg-brand-gold/30"></div>
      <div className="text-center">
        <div className="text-2xl font-bold text-brand-brown">24/7</div>
        <div className="text-xs text-gray-600">Support</div>
      </div>
    </div>
  </div>
);

// Trust Badges Component
const TrustBadges = () => (
  <div className="absolute top-8 right-8 flex items-center space-x-3">
    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200">
      GST Compliant
    </div>
    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200">
      MSME Registered
    </div>
    <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium border border-purple-200">
      ISO Certified
    </div>
  </div>
);

const slides = [
  {
    id: 1,
    title: "Corporate Gifting",
    subtitle: "A Fresh Perspective",
    description:
      "We're reimagining corporate gifting with a blend of innovation and tradition. Every gift we curate tells your brand's story, strengthening relationships and creating lasting impressions that drive business growth.",
    cta: "Discover Our Approach",
    secondaryCta: "Schedule Consultation",
    icon: "🏢",
    gradient: "from-brand-gold/20 via-brand-light to-brand-amber/10",
    buttonClass:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    features: [
      "Innovative Solutions",
      "Personalized Approach",
      "Quality Assurance",
      "Dedicated Support",
    ],
    stats: { innovation: "100%", quality: "Premium", support: "24/7" },
  },
  {
    id: 2,
    title: "Festival Celebrations",
    subtitle: "Honoring Traditions",
    description:
      "We believe every festival is an opportunity to strengthen bonds. Our carefully curated collections blend India's rich cultural heritage with modern gifting sensibilities, making celebrations more meaningful and memorable.",
    cta: "Explore Collections",
    secondaryCta: "Custom Festival Gifts",
    icon: "🎊",
    gradient: "from-brand-gold/20 via-brand-light to-brand-amber/10",
    buttonClass:
      "bg-gradient-to-r from-brand-brown to-brand-amber hover:from-brand-amber hover:to-brand-brown",
    features: ["Diwali Special", "Holi Collection", "Raksha Bandhan", "New Year Dreams"],
    stats: { traditions: "Respected", celebrations: "Enhanced", memories: "Timeless" },
  },
  {
    id: 3,
    title: "Employee Recognition",
    subtitle: "Building Culture",
    description:
      "Your team is your greatest asset. We help you create recognition programs that not only celebrate achievements but also build a culture of appreciation, motivation, and loyalty that drives organizational success.",
    cta: "Design Your Program",
    secondaryCta: "Culture Strategy",
    icon: "👥",
    gradient: "from-brand-amber/15 via-brand-light to-brand-gold/20",
    buttonClass:
      "bg-gradient-to-r from-brand-gold to-brand-brown hover:from-brand-brown hover:to-brand-gold",
    features: [
      "Performance Recognition",
      "Milestone Celebrations",
      "Team Building",
      "Wellness Programs",
    ],
    stats: { culture: "Enhanced", motivation: "Boosted", loyalty: "Strengthened" },
  },
  {
    id: 4,
    title: "Client Appreciation",
    subtitle: "Nurturing Relationships",
    description:
      "Every client interaction is an opportunity to demonstrate your commitment to excellence. Our gifting solutions help you create meaningful touchpoints that strengthen relationships and build trust for long-term partnerships.",
    cta: "Build Relationships",
    secondaryCta: "Partnership Strategy",
    icon: "🤝",
    gradient: "from-brand-brown/10 via-brand-light to-brand-amber/15",
    buttonClass:
      "bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber",
    features: ["Onboarding Gifts", "Milestone Celebrations", "Holiday Gifts", "VIP Programs"],
    stats: { relationships: "Strengthened", trust: "Built", partnerships: "Long-term" },
  },
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
      setAnimationKey((prev) => prev + 1);
    });
  }, [api]);

  const handleScrollToNext = () => {
    const eventsSection = document.querySelector("#events-section");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[calc(100vh-120px)] overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-gold/5">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={`${slide.id}-${animationKey}`} className="h-full">
              <div className={`relative w-full h-full bg-gradient-to-br ${slide.gradient}`}>
                {/* Corporate Background */}
                <CorporateBackground />

                {/* Content Container */}
                <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-6xl mx-auto">
                    {/* Icon */}
                    <div className="mb-6 animate-bounce">
                      <span className="text-5xl sm:text-6xl lg:text-7xl filter drop-shadow-lg">
                        {slide.icon}
                      </span>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-4 animate-fade-in-delay">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-brand-brown tracking-wider uppercase drop-shadow-sm">
                        {slide.subtitle}
                      </h2>
                    </div>

                    {/* Main Title */}
                    <div className="mb-6 animate-fade-in-delay-2">
                      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-dark leading-tight tracking-wide drop-shadow-sm">
                        {slide.title}
                      </h1>
                    </div>

                    {/* Description */}
                    <div className="mb-8 animate-fade-in-delay-3">
                      <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-normal drop-shadow-sm">
                        {slide.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-8 animate-fade-in-delay-3">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                        {slide.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-brand-gold/20"
                          >
                            <div className="text-sm font-medium text-brand-brown">{feature}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-delay-3">
                      <Button
                        size="lg"
                        onClick={() => router.push("/collections")}
                        className={`${slide.buttonClass} text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0`}
                      >
                        {slide.cta}
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => router.push("/contact")}
                        className="bg-white/90 backdrop-blur-sm border-brand-gold text-brand-brown hover:bg-brand-gold hover:text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                      >
                        {slide.secondaryCta}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Corporate Stats - Only show on first slide */}
                {index === 0 && <CorporateStats />}

                {/* Trust Badges - Only show on first slide */}
                {index === 0 && <TrustBadges />}

                {/* Slide Indicator */}
                <div className="absolute bottom-8 right-8 flex space-x-2">
                  {slides.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide
                          ? "bg-brand-amber scale-125"
                          : "bg-brand-brown/30 hover:bg-brand-brown/50"
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
        <CarouselPrevious className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 text-brand-dark hover:text-brand-amber shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 rounded-full" />
        <CarouselNext className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 text-brand-dark hover:text-brand-amber shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 rounded-full" />
      </Carousel>

      {/* Scroll to Explore Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={handleScrollToNext}
          className="group flex flex-col items-center space-y-2 text-brand-brown hover:text-brand-amber transition-all duration-300 cursor-pointer"
        >
          <span className="text-sm font-medium tracking-wider uppercase drop-shadow-sm animate-subtle-blink">
            Explore Solutions
          </span>
          <div className="w-6 h-10 border-2 border-brand-brown/50 rounded-full flex justify-center group-hover:border-brand-amber/50 transition-colors duration-300">
            <div className="w-1 h-3 bg-brand-brown/70 rounded-full mt-2 animate-pulse group-hover:bg-brand-amber/70 transition-colors duration-300"></div>
          </div>
        </button>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-light/30 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}
