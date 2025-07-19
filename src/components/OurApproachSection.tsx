"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui-kit/button";

export default function OurApproachSection() {
  const router = useRouter();

  return (
    <section className='py-20 bg-gradient-to-br from-brand-light via-brand-gold/20 to-brand-amber/10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-4 py-2 md:px-6 md:py-2 rounded-full mb-4 md:mb-6'>
            <span className='text-brand-brown font-semibold text-sm md:text-base'>
              ✨ Our Fresh Approach
            </span>
          </div>
          <h2 className='font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-brown mb-4 md:mb-6 tracking-wide'>
            Hampers with Heart & Purpose
          </h2>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-brand-dark max-w-4xl mx-auto leading-relaxed px-4 md:px-0'>
            We believe every hamper should tell a story. Our approach combines thoughtful curation,
            personal consultation, and genuine care to create experiences that strengthen
            relationships and create lasting memories.
          </p>
        </div>

        {/* Approach Values Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300 text-center'>
            <div className='w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-amber rounded-full mx-auto mb-6 flex items-center justify-center'>
              <span className='text-3xl'>🎯</span>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-brand-dark mb-3 md:mb-4'>
              Thoughtful Consultation
            </h3>
            <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
              We listen first, understand your needs, and then create custom solutions that
              perfectly match your vision and budget.
            </p>
          </div>

          <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300 text-center'>
            <div className='w-16 h-16 bg-gradient-to-br from-brand-amber to-brand-brown rounded-full mx-auto mb-6 flex items-center justify-center'>
              <span className='text-3xl'>💝</span>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-brand-dark mb-3 md:mb-4'>
              Personal Curation
            </h3>
            <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
              Every item is handpicked with care. We focus on quality, meaning, and the story each
              hamper tells about your relationships.
            </p>
          </div>

          <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300 text-center'>
            <div className='w-16 h-16 bg-gradient-to-br from-brand-brown to-brand-gold rounded-full mx-auto mb-6 flex items-center justify-center'>
              <span className='text-3xl'>🤝</span>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-brand-dark mb-3 md:mb-4'>
              Genuine Partnership
            </h3>
            <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
              We're not just vendors—we're partners in your success. We care about your outcomes and
              relationships as much as you do.
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className='bg-gradient-to-r from-brand-gold to-brand-amber rounded-3xl p-12 shadow-2xl text-center'>
          <h3 className='font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-brown mb-4 md:mb-6'>
            What Makes Our Approach Different?
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8'>
            <div className='text-left'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-brand-brown rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <h4 className='text-base md:text-lg font-semibold text-brand-dark'>
                  No Generic Solutions
                </h4>
              </div>
              <p className='text-brand-dark ml-11 text-sm sm:text-base'>
                Every hamper is custom-designed based on your specific needs, occasion, and
                relationships.
              </p>
            </div>

            <div className='text-left'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-brand-brown rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <h4 className='text-lg font-semibold text-brand-dark'>Transparent Communication</h4>
              </div>
              <p className='text-brand-dark ml-11'>
                Open dialogue throughout the process. You'll know exactly what goes into your
                hampers and why.
              </p>
            </div>

            <div className='text-left'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-brand-brown rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <h4 className='text-lg font-semibold text-brand-dark'>Cultural Sensitivity</h4>
              </div>
              <p className='text-brand-dark ml-11'>
                We understand and honor traditions while adding modern touches that make each moment
                special.
              </p>
            </div>

            <div className='text-left'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-brand-brown rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <h4 className='text-lg font-semibold text-brand-dark'>Flexible & Responsive</h4>
              </div>
              <p className='text-brand-dark ml-11'>
                Last-minute changes? Special requests? We adapt to your needs with grace and
                efficiency.
              </p>
            </div>
          </div>

          <Button
            onClick={() => router.push("/about")}
            className='bg-brand-brown text-brand-light font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base'
          >
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
