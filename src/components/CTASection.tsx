"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import FeatureTag from "./FeatureTag";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { handleWhatsApp } from "../lib/contact-utils";

export default function CTASection() {
  return (
    <section className='py-20 bg-gradient-to-br from-brand-brown via-brand-dark to-brand-brown relative overflow-hidden'>
      {/* Enhanced Decorative Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-brand-dark/30 via-brand-brown/20 to-brand-dark/30' />

      {/* Authentic Floating Elements */}
      <div className='absolute top-10 left-10 w-40 h-40 bg-brand-gold/30 rounded-full blur-2xl animate-pulse' />
      <div className='absolute bottom-20 right-20 w-32 h-32 bg-brand-amber/40 rounded-full blur-xl animate-bounce' />
      <div className='absolute top-1/3 right-1/4 w-24 h-24 bg-brand-light/30 rounded-full blur-lg animate-pulse delay-300' />
      <div className='absolute bottom-1/3 left-1/4 w-20 h-20 bg-brand-gold/25 rounded-full blur-md animate-bounce delay-500' />

      {/* Modern Geometric Decorations */}
      <div className='absolute top-0 left-0 w-48 h-48'>
        <svg viewBox='0 0 192 192' className='w-full h-full'>
          <polygon
            points='96,16 128,64 176,64 144,96 176,128 128,128 96,176 64,128 16,128 48,96 16,64 64,64'
            fill='#F1DEA8'
            opacity='0.15'
            className='animate-spin'
            style={{ animationDuration: "30s" }}
          />
        </svg>
      </div>
      <div className='absolute bottom-0 right-0 w-40 h-40'>
        <svg viewBox='0 0 160 160' className='w-full h-full'>
          <circle
            cx='80'
            cy='80'
            r='60'
            fill='none'
            stroke='#E9C579'
            strokeWidth='3'
            opacity='0.2'
            className='animate-ping'
          />
          <circle cx='80' cy='80' r='40' fill='#E9C579' opacity='0.15' />
        </svg>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-5xl mx-auto'>
          {/* Brand Badge */}
          <FeatureTag className='mb-6 md:mb-8 bg-brand-light/90 text-brand-dark border-brand-gold'>
            🎯 Why Choose Shubhhampers?
          </FeatureTag>

          {/* Main Heading */}
          <h2 className='font-display text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-light mb-2 xs:mb-3 md:mb-4 leading-tight tracking-wide'>
            India's Most Trusted Hamper Partner
          </h2>

          {/* Description */}
          <p className='text-xs xs:text-sm sm:text-base md:text-lg text-brand-gold mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto px-4 md:px-0'>
            {`From corporate celebrations to personal milestones, we've been creating 
            memorable hamper experiences that strengthen relationships and spread joy. 
            Discover why thousands of clients trust Shubhhampers for their gifting needs.`}
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 md:mb-12 px-4 md:px-0'>
            <Link href='/hampers'>
              <PrimaryButton size='md'>🎁 Explore Our Hampers</PrimaryButton>
            </Link>
            <SecondaryButton
              size='md'
              onClick={() =>
                handleWhatsApp(
                  "Hi! I'm interested in Shubhhampers services and would like to discuss my requirements."
                )
              }
            >
              <FaWhatsapp className='w-4 h-4' />
              Let's Chat
            </SecondaryButton>
          </div>

          {/* Key Differentiators */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:bg-white/15 transition-all duration-300'>
              <div className='text-4xl mb-4'>🏆</div>
              <h3 className='text-lg md:text-xl font-bold text-brand-light mb-2'>
                Proven Excellence
              </h3>
              <p className='text-brand-gold text-xs sm:text-sm'>
                Hundreds of successful corporate and personal hamper deliveries across India
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:bg-white/15 transition-all duration-300'>
              <div className='text-4xl mb-4'>⚡</div>
              <h3 className='text-lg md:text-xl font-bold text-brand-light mb-2'>Fast Delivery</h3>
              <p className='text-brand-gold text-xs sm:text-sm'>
                Quick turnaround times without compromising on quality and presentation
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:bg-white/15 transition-all duration-300'>
              <div className='text-4xl mb-4'>💎</div>
              <h3 className='text-lg md:text-xl font-bold text-brand-light mb-2'>
                Premium Quality
              </h3>
              <p className='text-brand-gold text-xs sm:text-sm'>
                Only the finest products make it into our hampers - guaranteed satisfaction
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:bg-white/15 transition-all duration-300'>
              <div className='text-4xl mb-4'>🎨</div>
              <h3 className='text-lg md:text-xl font-bold text-brand-light mb-2'>
                Custom Solutions
              </h3>
              <p className='text-brand-gold text-xs sm:text-sm'>
                Personalized hampers designed specifically for your brand and occasion
              </p>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className='bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-brand-gold/20'>
            <h3 className='font-display text-3xl lg:text-4xl font-bold text-brand-light mb-6'>
              The Shubhhampers Difference
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='text-5xl mb-4'>🤝</div>
                <h4 className='text-base md:text-lg font-semibold text-brand-light mb-2'>
                  Personal Consultation
                </h4>
                <p className='text-brand-gold text-xs sm:text-sm'>
                  One-on-one guidance to create hampers that perfectly match your vision and budget
                </p>
              </div>
              <div className='text-center'>
                <div className='text-5xl mb-4'>🔒</div>
                <h4 className='text-base md:text-lg font-semibold text-brand-light mb-2'>
                  Reliable Service
                </h4>
                <p className='text-brand-gold text-xs sm:text-sm'>
                  Consistent quality, on-time delivery, and responsive customer support you can
                  count on
                </p>
              </div>
              <div className='text-center'>
                <div className='text-5xl mb-4'>💰</div>
                <h4 className='text-base md:text-lg font-semibold text-brand-light mb-2'>
                  Best Value
                </h4>
                <p className='text-brand-gold text-xs sm:text-sm'>
                  Competitive pricing with transparent costs - no hidden fees, maximum value
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className='mt-12'>
            <p className='text-xs xs:text-sm sm:text-base md:text-lg text-brand-gold mb-6'>
              {`Join thousands of satisfied customers who trust Shubhhampers 
              for their most important celebrations and business relationships.`}
            </p>
            <div className='flex flex-wrap justify-center gap-3'>
              <Link href='/contact'>
                <PrimaryButton size='md'>📧 Get Started Today</PrimaryButton>
              </Link>
              <SecondaryButton
                onClick={() =>
                  handleWhatsApp(
                    "Hi! I'm interested in Shubhhampers services and would like to discuss my hamper requirements."
                  )
                }
                size='md'
              >
                <FaWhatsapp className='w-4 h-4' />
                WhatsApp Us
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
