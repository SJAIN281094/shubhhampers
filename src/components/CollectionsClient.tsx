"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@ui-kit/button";

export default function CollectionsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

  // Handle URL parameters for category filtering
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const categories = [
    { id: "all", label: "All Collections", icon: "🎁" },
    { id: "business", label: "Business", icon: "🏢" },
    { id: "wedding", label: "Wedding", icon: "💒" },
    { id: "festival", label: "Festival", icon: "🎉" },
    { id: "personal", label: "Personal", icon: "💝" }
  ];

  const collections = [
    {
      id: 1,
      title: "Executive Appreciation",
      category: "business",
      price: "₹2,500 - ₹15,000",
      image: "/business-celebration.png",
      description: "Premium hampers for executive gifts and corporate milestones",
      features: ["Premium Selection", "Corporate Branding", "Professional Packaging"],
      deliveryTime: "2-3 business days"
    },
    {
      id: 2,
      title: "Employee Recognition",
      category: "business",
      price: "₹1,200 - ₹5,000",
      image: "/milestone.png",
      description: "Thoughtful hampers to show appreciation for your team",
      features: ["Volume Discounts", "Custom Cards", "Bulk Delivery"],
      deliveryTime: "1-2 business days"
    },
    {
      id: 3,
      title: "Wedding Welcome Hampers",
      category: "wedding",
      price: "₹800 - ₹3,500",
      image: "/wedding-hampers.png",
      description: "Beautiful welcome gifts for your wedding guests",
      features: ["Custom Design", "Cultural Elements", "Elegant Packaging"],
      deliveryTime: "3-5 days"
    },
    {
      id: 4,
      title: "Wedding Return Hampers",
      category: "wedding",
      price: "₹600 - ₹2,500",
      image: "/return-hamper.png",
      description: "Memorable thank you gifts for your guests",
      features: ["Traditional Items", "Modern Touch", "Bulk Orders"],
      deliveryTime: "3-5 days"
    },
    {
      id: 5,
      title: "Diwali Celebration",
      category: "festival",
      price: "₹900 - ₹4,000",
      image: "/family-hamper.png",
      description: "Traditional Diwali hampers with sweets and gifts",
      features: ["Traditional Sweets", "Festival Items", "Beautiful Packaging"],
      deliveryTime: "2-4 days"
    },
    {
      id: 6,
      title: "Personal Milestones",
      category: "personal",
      price: "₹700 - ₹3,000",
      image: "/welcome-gift.png",
      description: "Special hampers for birthdays and personal celebrations",
      features: ["Personal Touch", "Custom Messages", "Gift Wrapping"],
      deliveryTime: "1-3 days"
    }
  ];

  const filteredCollections =
    activeCategory === "all"
      ? collections
      : collections.filter(collection => collection.category === activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Update URL without page reload
    const params = new URLSearchParams(searchParams);
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    const newUrl = params.toString() ? `?${params.toString()}` : "/collections";
    router.push(newUrl, { scroll: false });
  };

  const handleWhatsAppInquiry = (collection: any) => {
    const message = `Hi! I'm interested in the "${collection.title}" hamper collection. Could you provide more details about customization options and pricing?`;
    const phoneNumber = "919999999999";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
      {/* Hero Section */}
      <section className='relative py-20 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-amber/5' />
        <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl animate-pulse' />
        <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-bounce' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6'>
              <span className='text-brand-brown font-semibold'>✨ Our Collections</span>
            </div>

            <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
              Discover Our Collections
            </h1>

            <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
              Explore our carefully curated hamper collections, each designed to create meaningful
              connections and lasting memories for every special occasion.
            </p>
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
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-brand-gold to-brand-amber text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className='text-lg'>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='font-display text-3xl lg:text-4xl font-bold text-brand-dark mb-4'>
              {activeCategory === "all"
                ? "All Collections"
                : categories.find(cat => cat.id === activeCategory)?.label + " Collections"}
            </h2>
            <p className='text-lg text-gray-700'>
              {filteredCollections.length} collection{filteredCollections.length !== 1 ? "s" : ""}{" "}
              available
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredCollections.map(collection => (
              <div
                key={collection.id}
                className='bg-white rounded-3xl shadow-xl border border-brand-gold/20 overflow-hidden hover:shadow-2xl transition-all duration-500 group'
              >
                <div className='relative h-64 overflow-hidden'>
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute top-4 right-4 bg-brand-gold/20 backdrop-blur-sm px-3 py-1 rounded-full'>
                    <span className='text-brand-brown font-semibold text-sm'>
                      {collection.deliveryTime}
                    </span>
                  </div>
                </div>

                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='text-2xl'>
                      {categories.find(cat => cat.id === collection.category)?.icon}
                    </span>
                    <span className='text-sm font-semibold text-brand-brown uppercase tracking-wide'>
                      {categories.find(cat => cat.id === collection.category)?.label}
                    </span>
                  </div>

                  <h3 className='text-xl font-bold text-brand-dark mb-3'>{collection.title}</h3>
                  <p className='text-gray-600 mb-4 leading-relaxed'>{collection.description}</p>

                  <div className='grid grid-cols-1 gap-2 mb-4'>
                    {collection.features.map((feature, idx) => (
                      <div key={idx} className='flex items-center gap-2'>
                        <div className='w-1.5 h-1.5 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full' />
                        <span className='text-sm text-gray-600'>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className='flex items-center justify-between mb-6'>
                    <div className='text-lg font-bold text-brand-brown'>{collection.price}</div>
                    <div className='text-sm text-gray-500'>Starting from</div>
                  </div>

                  <div className='flex gap-3'>
                    <button
                      onClick={() => handleWhatsAppInquiry(collection)}
                      className='flex-1 bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
                    >
                      💬 Inquire
                    </button>
                    <Link href={`/contact?collection=${collection.title}`}>
                      <Button className='bg-white text-brand-brown font-semibold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-gold/30 hover:bg-brand-gold/10'>
                        📋 Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCollections.length === 0 && (
            <div className='text-center py-12'>
              <div className='text-6xl mb-4'>🎁</div>
              <h3 className='text-2xl font-bold text-brand-dark mb-4'>No Collections Found</h3>
              <p className='text-gray-600 mb-6'>
                We're working on adding more collections in this category. Meanwhile, explore our
                other amazing collections!
              </p>
              <Button
                onClick={() => handleCategoryChange("all")}
                className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
              >
                View All Collections
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-4xl mx-auto'>
            <h2 className='font-display text-4xl lg:text-5xl font-bold mb-6'>
              Need Something Custom?
            </h2>
            <p className='text-xl mb-8 leading-relaxed'>
              Can't find exactly what you're looking for? We specialize in creating custom hampers
              tailored to your specific needs and relationship goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact?service=custom'>
                <Button className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                  🎨 Create Custom Hamper
                </Button>
              </Link>
              <Link href='/business'>
                <Button className='bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber hover:text-brand-dark transform hover:scale-105'>
                  🏢 Business Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
