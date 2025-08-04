"use client";

import Image from "next/image";
import Link from "next/link";
import { IoCheckmarkCircle, IoTime, IoGift, IoPricetag } from "react-icons/io5";
import { FaWhatsapp, FaShare } from "react-icons/fa";
import { Button } from "@ui-kit/button";
import { handleWhatsApp } from "../lib/contact-utils";
import { HamperProduct } from "../lib/hamper-api-types";

interface HamperDetailsPageProps {
  hamper: HamperProduct;
}

export default function HamperDetailsPage({ hamper }: HamperDetailsPageProps) {
  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in the "${hamper.title}" hamper. Could you provide more details about customization options, pricing, and availability?`;
    handleWhatsApp(message);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${hamper.title} - Shubhhampers`,
          text: `Check out this amazing ${hamper.title} hamper from Shubhhampers!`,
          url: window.location.href
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // eslint-disable-next-line no-alert
      alert("Link copied to clipboard!");
    }
  };

  const getCategoryLink = (category: string) => {
    const categoryUrlMap: Record<string, string> = {
      festival: "/hampers/festival-gift-hampers",
      wedding: "/hampers/wedding-gift-hampers",
      business: "/hampers/business-gift-hampers",
      personal: "/hampers/personal-gift-hampers"
    };
    return categoryUrlMap[category] || "/hampers";
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
      {/* Hero Section with Background Image */}
      <section className='relative h-[60vh] overflow-hidden'>
        {/* Background Image */}
        {hamper.backgroundImage && (
          <div className='absolute inset-0'>
            <Image
              src={hamper.backgroundImage}
              alt={hamper.title}
              fill
              className='object-cover'
              quality={90}
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent' />
          </div>
        )}

        {/* Header Controls */}
        <div className='absolute top-8 right-8 z-20'>
          <button
            onClick={handleShare}
            className='bg-white/90 backdrop-blur-sm text-brand-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105'
          >
            <FaShare className='w-5 h-5' />
          </button>
        </div>

        {/* Hero Content */}
        <div className='absolute bottom-8 left-8 right-8 z-20 text-white'>
          <div className='max-w-4xl'>
            <div className='inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mb-4'>
              <span className='text-brand-gold font-semibold capitalize'>
                🎁 {hamper.categoryName || hamper.category} Hamper
              </span>
            </div>

            <h1 className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>
              {hamper.title}
            </h1>

            <p className='text-xl lg:text-2xl text-gray-200 mb-6 leading-relaxed'>
              {hamper.subtitle}
            </p>

            <div className='flex flex-wrap gap-4 items-center'>
              <div className='bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full'>
                <span className='text-gray-200'>📦 {hamper.deliveryTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            {/* Left Column - Product Details */}
            <div className='lg:col-span-2 space-y-8'>
              {/* Description */}
              <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20'>
                <h2 className='font-display text-2xl font-bold text-brand-dark mb-4'>
                  About This Hamper
                </h2>
                <p className='text-gray-700 text-lg leading-relaxed'>{hamper.description}</p>
              </div>

              {/* Features */}
              <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20'>
                <h2 className='font-display text-2xl font-bold text-brand-dark mb-6'>
                  What's Included
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {hamper.features.map((feature, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-3 p-3 bg-brand-gold/10 rounded-lg'
                    >
                      <IoCheckmarkCircle className='w-5 h-5 text-green-600 flex-shrink-0' />
                      <span className='text-gray-700 font-medium'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-white rounded-2xl p-6 shadow-lg border border-brand-gold/20'>
                  <div className='flex items-center gap-3 mb-3'>
                    <IoTime className='w-6 h-6 text-brand-gold' />
                    <h3 className='font-bold text-brand-dark'>Delivery</h3>
                  </div>
                  <p className='text-gray-700'>{hamper.deliveryTime}</p>
                </div>

                <div className='bg-white rounded-2xl p-6 shadow-lg border border-brand-gold/20'>
                  <div className='flex items-center gap-3 mb-3'>
                    <IoGift className='w-6 h-6 text-brand-gold' />
                    <h3 className='font-bold text-brand-dark'>Minimum Order</h3>
                  </div>
                  <p className='text-gray-700'>{hamper.minimumOrder}</p>
                </div>
              </div>

              {/* Bulk Benefits */}
              <div className='bg-gradient-to-r from-brand-gold/20 to-brand-amber/20 rounded-2xl p-6 border border-brand-gold/30'>
                <div className='flex items-center gap-3 mb-3'>
                  <IoPricetag className='w-6 h-6 text-brand-brown' />
                  <h3 className='font-bold text-brand-dark'>Bulk Benefits</h3>
                </div>
                <p className='text-brand-brown font-medium'>{hamper.bulkBenefit}</p>
              </div>
            </div>

            {/* Right Column - Order Section */}
            <div className='lg:col-span-1'>
              <div className='sticky top-8 space-y-6'>
                {/* Order Card */}
                <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20'>
                  <div className='space-y-4'>
                    <Button
                      onClick={handleWhatsAppInquiry}
                      className='w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3'
                    >
                      <FaWhatsapp className='w-5 h-5' />
                      Order via WhatsApp
                    </Button>

                    <Link href='/contact?service=custom'>
                      <Button className='w-full bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'>
                        Customize This Hamper
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Quick Info */}
                <div className='bg-brand-light/50 rounded-2xl p-6 border border-brand-gold/20'>
                  <h3 className='font-bold text-brand-dark mb-4 text-center'>Why Choose Us?</h3>
                  <div className='space-y-3 text-sm'>
                    <div className='flex items-center gap-2'>
                      <IoCheckmarkCircle className='w-4 h-4 text-green-600' />
                      <span>Premium quality guaranteed</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <IoCheckmarkCircle className='w-4 h-4 text-green-600' />
                      <span>Custom packaging available</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <IoCheckmarkCircle className='w-4 h-4 text-green-600' />
                      <span>Timely delivery</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <IoCheckmarkCircle className='w-4 h-4 text-green-600' />
                      <span>Relationship building focus</span>
                    </div>
                  </div>
                </div>

                {/* Browse Similar */}
                <Link
                  href={getCategoryLink((hamper.categoryName || hamper.category).toLowerCase())}
                >
                  <Button className='w-full bg-white text-brand-brown border-2 border-brand-gold font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-brand-gold/10'>
                    Browse More {hamper.categoryName || hamper.category} Hampers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
