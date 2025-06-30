"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Button } from "@ui-kit/button";

export default function CollectionsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (
      categoryParam &&
      ["corporate", "festivals", "personal", "wellness", "luxury"].includes(categoryParam)
    ) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  const categories = [
    { id: "all", name: "All Collections", icon: "🎁" },
    { id: "corporate", name: "Corporate", icon: "🏢" },
    { id: "festivals", name: "Festivals", icon: "🎊" },
    { id: "personal", name: "Personal", icon: "💝" },
    { id: "wellness", name: "Wellness", icon: "💚" },
    { id: "luxury", name: "Luxury", icon: "✨" },
  ];

  const collections = [
    {
      id: "diwali-magic",
      title: "Diwali Magic",
      subtitle: "Festival of Lights",
      description:
        "Illuminate relationships with our carefully curated Diwali collection. From traditional sweets to modern luxury items, we help you celebrate the festival of lights with thoughtful gifting.",
      image: "✨",
      category: "festivals",
      priceRange: "₹1,500 - ₹15,000",
      deliveryTime: "3-5 days",
      features: ["Traditional Sweets", "Luxury Items", "Custom Packaging", "Express Delivery"],
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
      accentColor: "from-brand-amber to-brand-brown",
    },
    {
      id: "holi-celebration",
      title: "Holi Festival",
      subtitle: "Colors of Unity",
      description:
        "Add color to your relationships with our vibrant Holi collection. Celebrate the festival of colors with thoughtful gifts that bring joy and happiness.",
      image: "🎨",
      category: "festivals",
      priceRange: "₹800 - ₹5,000",
      deliveryTime: "3-5 days",
      features: ["Colorful Items", "Traditional Gifts", "Party Supplies", "Sweet Treats"],
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
      accentColor: "from-brand-amber to-brand-brown",
    },
    {
      id: "raksha-bandhan",
      title: "Raksha Bandhan",
      subtitle: "Sacred Bonds",
      description:
        "Celebrate the sacred bond between siblings with our Raksha Bandhan collection. From traditional rakhis to modern gift sets, we help you honor this special relationship.",
      image: "💕",
      category: "festivals",
      priceRange: "₹500 - ₹3,000",
      deliveryTime: "2-4 days",
      features: ["Traditional Rakhis", "Gift Sets", "Sweets", "Personalized Messages"],
      bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
      accentColor: "from-brand-light to-brand-gold",
    },
    {
      id: "new-year-dreams",
      title: "New Year Dreams",
      subtitle: "Fresh Beginnings",
      description:
        "Welcome the new year with hope and joy through our New Year collection. From celebration items to thoughtful gifts, we help you start the year with meaningful connections.",
      image: "🎊",
      category: "festivals",
      priceRange: "₹1,000 - ₹8,000",
      deliveryTime: "2-4 days",
      features: ["Celebration Items", "Luxury Gifts", "Custom Messages", "Express Delivery"],
      bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-brown",
    },
    {
      id: "corporate-excellence",
      title: "Corporate Excellence",
      subtitle: "Elevate Your Brand",
      description:
        "Elevate your corporate relationships with premium gifting solutions. From client appreciation to employee recognition, we help you strengthen business bonds.",
      image: "🏢",
      category: "corporate",
      priceRange: "₹2,000 - ₹25,000",
      deliveryTime: "2-4 days",
      features: ["Custom Branding", "Bulk Orders", "Corporate Accounts", "Dedicated Support"],
      bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-brown",
    },
    {
      id: "employee-recognition",
      title: "Employee Recognition",
      subtitle: "Celebrate Their Journey",
      description:
        "Recognize and appreciate your team with our employee recognition collection. From performance rewards to milestone celebrations, we help you build a culture of appreciation.",
      image: "👥",
      category: "corporate",
      priceRange: "₹1,500 - ₹10,000",
      deliveryTime: "2-4 days",
      features: ["Recognition Items", "Team Gifts", "Bulk Orders", "Corporate Branding"],
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
      accentColor: "from-brand-amber to-brand-brown",
    },
    {
      id: "client-appreciation",
      title: "Client Appreciation",
      subtitle: "Nurture Partnerships",
      description:
        "Show genuine gratitude to your clients with our client appreciation collection. From onboarding gifts to milestone celebrations, we help you strengthen long-term partnerships.",
      image: "🤝",
      category: "corporate",
      priceRange: "₹3,000 - ₹20,000",
      deliveryTime: "2-4 days",
      features: ["Premium Gifts", "Custom Branding", "Personalized Notes", "Priority Delivery"],
      bgColor: "bg-gradient-to-br from-brand-brown/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-amber",
    },
    {
      id: "housewarming-joy",
      title: "Housewarming Joy",
      subtitle: "Bless New Beginnings",
      description:
        "Celebrate new beginnings with our housewarming collection. From traditional items to modern essentials, we help you bless new homes with thoughtful gifts.",
      image: "🏠",
      category: "corporate",
      priceRange: "₹1,000 - ₹8,000",
      deliveryTime: "3-5 days",
      features: ["Traditional Items", "Home Essentials", "Blessing Items", "Custom Packaging"],
      bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
      accentColor: "from-brand-light to-brand-gold",
    },
    {
      id: "secret-santa-magic",
      title: "Secret Santa Magic",
      subtitle: "Mystery & Joy",
      description:
        "Add excitement to your workplace with our Secret Santa collection. From mystery gifts to themed items, we help you create fun and engaging team activities.",
      image: "🎁",
      category: "corporate",
      priceRange: "₹500 - ₹3,000",
      deliveryTime: "2-4 days",
      features: ["Mystery Gifts", "Themed Items", "Bulk Orders", "Anonymous Delivery"],
      bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-brown",
    },
    {
      id: "wellness-care",
      title: "Wellness & Care",
      subtitle: "Prioritize Well-being",
      description:
        "Show genuine care for your team's well-being with our wellness collection. From stress relief to self-care, we help you create a culture of care and support.",
      image: "💚",
      category: "wellness",
      priceRange: "₹1,200 - ₹8,000",
      deliveryTime: "3-5 days",
      features: ["Health Products", "Wellness Items", "Care Packages", "Personalized Notes"],
      bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
      accentColor: "from-brand-light to-brand-gold",
    },
    {
      id: "birthday-celebrations",
      title: "Birthday Celebrations",
      subtitle: "Personal Milestones",
      description:
        "Make birthdays extra special with our curated birthday collection. From personalized gifts to luxury items, we help you create unforgettable birthday moments.",
      image: "🎂",
      category: "personal",
      priceRange: "₹1,000 - ₹12,000",
      deliveryTime: "2-4 days",
      features: ["Personalized Gifts", "Luxury Items", "Birthday Themes", "Custom Messages"],
      bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-brown",
    },
    {
      id: "anniversary-bliss",
      title: "Anniversary Bliss",
      subtitle: "Celebrate Love",
      description:
        "Celebrate love and togetherness with our anniversary collection. From romantic gifts to luxury items, we help you make anniversary celebrations truly special.",
      image: "💕",
      category: "personal",
      priceRange: "₹2,000 - ₹20,000",
      deliveryTime: "3-5 days",
      features: ["Romantic Gifts", "Luxury Items", "Personalized Messages", "Special Packaging"],
      bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
      accentColor: "from-brand-light to-brand-gold",
    },
    {
      id: "wedding-celebrations",
      title: "Wedding Celebrations",
      subtitle: "Bless New Unions",
      description:
        "Celebrate the most important day with our wedding collection. From traditional items to modern gifts, we help you bless new unions with thoughtful presents.",
      image: "💒",
      category: "personal",
      priceRange: "₹3,000 - ₹25,000",
      deliveryTime: "3-5 days",
      features: ["Traditional Items", "Luxury Gifts", "Custom Packaging", "Blessing Items"],
      bgColor: "bg-gradient-to-br from-brand-brown/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-amber",
    },
    {
      id: "graduation-success",
      title: "Graduation Success",
      subtitle: "Celebrate Achievements",
      description:
        "Celebrate academic achievements with our graduation collection. From traditional gifts to modern items, we help you honor this important milestone.",
      image: "🎓",
      category: "personal",
      priceRange: "₹1,500 - ₹10,000",
      deliveryTime: "2-4 days",
      features: [
        "Traditional Gifts",
        "Modern Items",
        "Personalized Messages",
        "Achievement Themes",
      ],
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
      accentColor: "from-brand-amber to-brand-brown",
    },
    {
      id: "mothers-day-love",
      title: "Mother's Day Love",
      subtitle: "Celebrate Her Love",
      description:
        "Show your mother how much she means to you with our Mother's Day collection. From traditional items to luxury gifts, we help you express your love and gratitude.",
      image: "🌹",
      category: "personal",
      priceRange: "₹1,000 - ₹15,000",
      deliveryTime: "2-4 days",
      features: [
        "Traditional Items",
        "Luxury Gifts",
        "Personalized Messages",
        "Flower Arrangements",
      ],
      bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
      accentColor: "from-brand-light to-brand-gold",
    },
    {
      id: "luxury-prestige",
      title: "Luxury Prestige",
      subtitle: "Premium Collections",
      description:
        "Indulge in luxury with our premium gifting collection. From high-end products to exclusive items, we help you make a lasting impression.",
      image: "✨",
      category: "luxury",
      priceRange: "₹5,000 - ₹50,000",
      deliveryTime: "1-3 days",
      features: ["Premium Products", "Exclusive Items", "Luxury Packaging", "Priority Delivery"],
      bgColor: "bg-gradient-to-br from-brand-brown/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-amber",
    },
    {
      id: "exclusive-corporate",
      title: "Exclusive Corporate",
      subtitle: "VIP Treatment",
      description:
        "Provide VIP treatment to your most important clients with our exclusive corporate collection. From luxury items to personalized experiences, we help you create unforgettable impressions.",
      image: "👑",
      category: "luxury",
      priceRange: "₹10,000 - ₹100,000",
      deliveryTime: "1-2 days",
      features: ["Luxury Items", "Personalized Experiences", "VIP Packaging", "Dedicated Support"],
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-brown/20",
      accentColor: "from-brand-brown to-brand-amber",
    },
    {
      id: "wellness-luxury",
      title: "Wellness Luxury",
      subtitle: "Premium Self-Care",
      description:
        "Indulge in premium wellness with our luxury wellness collection. From high-end spa items to exclusive wellness experiences, we help you prioritize self-care in style.",
      image: "💎",
      category: "luxury",
      priceRange: "₹8,000 - ₹30,000",
      deliveryTime: "2-3 days",
      features: [
        "Premium Spa Items",
        "Exclusive Experiences",
        "Luxury Packaging",
        "Wellness Consultation",
      ],
      bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
      accentColor: "from-brand-gold to-brand-brown",
    },
  ];

  const filteredCollections =
    activeCategory === "all"
      ? collections
      : collections.filter((collection) => collection.category === activeCategory);

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
    <main className="min-h-screen">
      <Header />

      <div className="bg-gradient-to-br from-brand-light via-white to-brand-gold/5">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-amber/5"></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-bounce"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6">
                <span className="text-brand-brown font-semibold">🎁 Our Collections</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide">
                Gifting Collections
              </h1>

              <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                Discover our thoughtfully curated collections designed to help you create meaningful
                connections through the perfect gift for every occasion.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-brand-amber to-brand-gold text-white shadow-lg"
                      : "bg-white text-brand-dark border-2 border-brand-gold/30 hover:border-brand-gold hover:shadow-md"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCollections.map((collection) => (
                <div
                  key={collection.id}
                  className={`${collection.bgColor} rounded-3xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                >
                  {/* Collection Header */}
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {collection.image}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">{collection.title}</h3>
                    <p className="text-brand-brown font-semibold mb-4">{collection.subtitle}</p>
                  </div>

                  {/* Collection Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">{collection.description}</p>

                  {/* Collection Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Price Range:</span>
                      <span className="text-sm font-semibold text-brand-brown">
                        {collection.priceRange}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Delivery:</span>
                      <span className="text-sm font-semibold text-brand-brown">
                        {collection.deliveryTime}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-brand-dark mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {collection.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                          <span className="text-xs text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={() => router.push(`/collections/${collection.id}`)}
                      className={`bg-gradient-to-r ${collection.accentColor} text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      🎁 Explore Collection
                    </Button>
                    <Button
                      onClick={() => router.push(`/contact?collection=${collection.id}`)}
                      className="bg-white/80 text-brand-brown font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-gold/30"
                    >
                      📞 Get Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredCollections.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">No Collections Found</h3>
                <p className="text-gray-600 mb-6">
                  We're working on new collections in this category. Check back soon!
                </p>
                <Button
                  onClick={() => setActiveCategory("all")}
                  className="bg-gradient-to-r from-brand-amber to-brand-gold text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View All Collections
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Our Collections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                Why Choose Our Collections?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Every collection is thoughtfully curated to help you create meaningful connections
                and lasting impressions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-amber rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Thoughtful Curation</h3>
                <p className="text-gray-600">
                  Every item is carefully selected to create meaningful, memorable experiences
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-amber to-brand-brown rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Custom Options</h3>
                <p className="text-gray-600">
                  Personalize gifts with custom messages, branding, and packaging
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-brown to-brand-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Fast Delivery</h3>
                <p className="text-gray-600">
                  Flexible delivery options from same-day to scheduled delivery
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-amber rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Personal Support</h3>
                <p className="text-gray-600">
                  Direct communication and dedicated support for every client
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
                Ready to Find the Perfect Gift?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Let's work together to create meaningful gifting experiences that strengthen your
                relationships and make every moment special.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => router.push("/contact")}
                  className="bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  💬 Get in Touch
                </Button>
                <Button
                  onClick={() => window.open("tel:+919876543210", "_self")}
                  className="bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-dark"
                >
                  📞 Call Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
