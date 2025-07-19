"use client";

import { Button } from "@ui-kit/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-gradient-to-br from-brand-dark via-brand-brown/20 to-brand-dark text-brand-light relative overflow-hidden'>
      {/* Enhanced Decorative Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-brand-brown/20 via-brand-dark/40 to-brand-brown/20' />

      {/* Corporate-Focused Floating Elements */}
      <div className='absolute top-10 right-10 w-32 h-32 bg-brand-gold/25 rounded-full blur-xl animate-pulse' />
      <div className='absolute bottom-10 left-10 w-24 h-24 bg-brand-amber/30 rounded-full blur-lg animate-bounce' />
      <div className='absolute top-1/3 left-1/4 w-20 h-20 bg-brand-light/20 rounded-full blur-md animate-pulse delay-300' />
      <div className='absolute bottom-1/3 right-1/4 w-16 h-16 bg-brand-gold/20 rounded-full blur-sm animate-bounce delay-500' />

      {/* Modern Geometric Decorations */}
      <div className='absolute top-0 right-0 w-40 h-40'>
        <svg viewBox='0 0 160 160' className='w-full h-full'>
          <polygon
            points='80,20 100,60 140,60 110,90 140,120 100,120 80,160 60,120 20,120 50,90 20,60 60,60'
            fill='#F1DEA8'
            opacity='0.1'
            className='animate-spin'
            style={{ animationDuration: "40s" }}
          />
        </svg>
      </div>
      <div className='absolute bottom-0 left-0 w-32 h-32'>
        <svg viewBox='0 0 128 128' className='w-full h-full'>
          <circle
            cx='64'
            cy='64'
            r='48'
            fill='none'
            stroke='#E9C579'
            strokeWidth='2'
            opacity='0.15'
            className='animate-ping'
          />
          <circle cx='64' cy='64' r='32' fill='#E9C579' opacity='0.1' />
        </svg>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Main Footer Content */}
        <div className='py-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
            {/* Company Info - Enhanced */}
            <div className='lg:col-span-2'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-brand-amber to-brand-brown rounded-xl flex items-center justify-center shadow-lg'>
                  {/* Gift Icon - Same as Header */}
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <rect
                      x='3'
                      y='8'
                      width='18'
                      height='13'
                      rx='2'
                      fill='currentColor'
                      className='text-brand-gold'
                    />
                    <path d='M12 8V21' stroke='white' strokeWidth='2' />
                    <path d='M3 12H21' stroke='white' strokeWidth='2' />
                    <path
                      d='M7.5 8C6.119 8 5 6.881 5 5.5S6.119 3 7.5 3C9.5 3 10 5.5 12 5.5C14 5.5 14.5 3 16.5 3C17.881 3 19 4.119 19 5.5S17.881 8 16.5 8H7.5Z'
                      stroke='white'
                      strokeWidth='2'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='font-display text-2xl md:text-3xl font-bold text-brand-light tracking-wide'>
                    Shubhhampers
                  </h3>
                  <p className='text-sm text-brand-gold font-medium'>
                    Hampers that build relationships.
                  </p>
                </div>
              </div>
              <p className='text-brand-gold mb-4 md:mb-6 leading-relaxed text-sm sm:text-base'>
                Fresh approach to business hamper solutions. We specialize in thoughtful, custom
                hampers that strengthen business relationships, boost employee morale, and create
                meaningful connections through genuine care and attention.
              </p>

              {/* Approach Badge */}
              <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-4 py-2 rounded-full mb-6'>
                <span className='text-brand-light font-semibold text-xs sm:text-sm'>
                  ✨ Fresh Approach
                </span>
              </div>

              {/* Social Links */}
              <div className='flex space-x-4 mb-6'>
                <Button
                  variant='outline'
                  size='sm'
                  className='bg-brand-gold/20 border-2 border-brand-gold text-brand-light hover:bg-brand-gold hover:text-brand-dark cursor-pointer transition-all duration-300 hover:scale-105 font-semibold px-4 py-2'
                >
                  LinkedIn
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  className='bg-brand-gold/20 border-2 border-brand-gold text-brand-light hover:bg-brand-gold hover:text-brand-dark cursor-pointer transition-all duration-300 hover:scale-105 font-semibold px-4 py-2'
                >
                  Instagram
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  className='bg-brand-gold/20 border-2 border-brand-gold text-brand-light hover:bg-brand-gold hover:text-brand-dark cursor-pointer transition-all duration-300 hover:scale-105 font-semibold px-4 py-2'
                >
                  Facebook
                </Button>
              </div>

              {/* Quick CTA */}
              <Button className='bg-brand-gold text-brand-dark font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                📞 Get Business Quote
              </Button>
            </div>

            {/* Business Hampers */}
            <div>
              <h4 className='text-lg md:text-xl font-bold text-brand-light mb-4 md:mb-6 flex items-center gap-2'>
                <span>🧑‍💼</span>
                Business Hampers
              </h4>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='/collections?category=business'
                    className='text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform'
                  >
                    <span>🎯</span>
                    Employee Onboarding Kits
                  </Link>
                </li>
                <li>
                  <Link
                    href='/collections?category=business'
                    className='text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform'
                  >
                    <span>🏆</span>
                    Company Milestone Celebrations
                  </Link>
                </li>
                <li>
                  <Link
                    href='/collections?category=business'
                    className='text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform'
                  >
                    <span>🏢</span>
                    Business Festival Packs
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform'
                  >
                    <span>🎁</span>
                    Bulk Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform'
                  >
                    <span>🎨</span>
                    Custom Consultation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Wedding & Festive */}
            <div>
              <h4 className='text-lg md:text-xl font-bold text-brand-light mb-4 md:mb-6 flex items-center gap-2'>
                <span>💒</span>
                Wedding & Festive
              </h4>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='/collections?category=wedding'
                    className='text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform'
                  >
                    <span>💒</span>
                    Guest Welcome Hampers
                  </Link>
                </li>
                <li>
                  <Link
                    href='/collections?category=wedding'
                    className='text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform'
                  >
                    <span>💝</span>
                    Family Hampers
                  </Link>
                </li>
                <li>
                  <Link
                    href='/collections?category=festive'
                    className='text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform'
                  >
                    <span>✨</span>
                    Diwali Hampers
                  </Link>
                </li>
                <li>
                  <Link
                    href='/collections?category=festive'
                    className='text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform'
                  >
                    <span>🪢</span>
                    Rakhi Hampers
                  </Link>
                </li>
                <li>
                  <Link
                    href='/collections?category=festive'
                    className='text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform'
                  >
                    <span>🎄</span>
                    Christmas / New Year
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h4 className='text-lg md:text-xl font-bold text-brand-light mb-4 md:mb-6 flex items-center gap-2'>
                <span>📞</span>
                Contact & Support
              </h4>
              <ul className='space-y-4'>
                <li className='flex items-center text-brand-gold'>
                  <span className='mr-3'>📞</span>
                  <div>
                    <p className='font-semibold text-brand-light'>+91 96858 47274</p>
                    <p className='text-sm'>Mon-Fri: 9AM-6PM IST</p>
                  </div>
                </li>
                <li className='flex items-center text-brand-gold'>
                  <span className='mr-3'>✉️</span>
                  <div>
                    <p className='font-semibold text-brand-light'>connect@shubhhampers.com</p>
                    <p className='text-sm'>For business inquiries</p>
                  </div>
                </li>
                <li className='flex items-center text-brand-gold'>
                  <span className='mr-3'>💬</span>
                  <div>
                    <p className='font-semibold text-brand-light'>Live Chat</p>
                    <p className='text-sm'>24/7 customer support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Corporate Features Section */}
          <div className='mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-brand-gold/20'>
            <h3 className='text-xl md:text-2xl font-bold text-brand-light mb-6 md:mb-8 text-center'>
              Why Choose Shubhhampers for Business Hampers?
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='text-center'>
                <div className='text-4xl mb-4'>🏆</div>
                <h4 className='text-lg font-semibold text-brand-light mb-2'>Premium Quality</h4>
                <p className='text-brand-gold text-sm'>Handpicked items from world-class brands</p>
              </div>
              <div className='text-center'>
                <div className='text-4xl mb-4'>⚡</div>
                <h4 className='text-lg font-semibold text-brand-light mb-2'>Fast Delivery</h4>
                <p className='text-brand-gold text-sm'>
                  Nationwide delivery with real-time tracking
                </p>
              </div>
              <div className='text-center'>
                <div className='text-4xl mb-4'>💰</div>
                <h4 className='text-lg font-semibold text-brand-light mb-2'>Bulk Discounts</h4>
                <p className='text-brand-gold text-sm'>Save up to 40% on large orders</p>
              </div>
              <div className='text-center'>
                <div className='text-4xl mb-4'>🎨</div>
                <h4 className='text-lg font-semibold text-brand-light mb-2'>Custom Branding</h4>
                <p className='text-brand-gold text-sm'>Add your logo and personalize hampers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className='border-t border-brand-brown/50 py-8'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
              <p className='text-brand-gold text-sm'>© 2024 Shubhhampers. All rights reserved.</p>
              <div className='flex items-center gap-2'>
                <span className='text-brand-gold/60'>|</span>
                <span className='text-brand-gold text-sm'>✨ Hampers that build relationships</span>
              </div>
            </div>
            <div className='flex flex-wrap justify-center gap-6'>
              <a
                href='/about'
                className='text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline'
              >
                About Us
              </a>
              <a
                href='/contact'
                className='text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline'
              >
                Contact Us
              </a>
              <a
                href='/collections'
                className='text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline'
              >
                Collections
              </a>
              <a
                href='/catalogue'
                className='text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline'
              >
                Catalogue
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
