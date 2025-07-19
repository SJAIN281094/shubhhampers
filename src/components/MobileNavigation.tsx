"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui-kit/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui-kit/sheet";

export default function MobileNavigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='lg:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className='text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10'
          >
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              {/* Gift Box Icon */}
              <rect x='3' y='8' width='18' height='13' rx='2' strokeWidth={2} fill='none' />
              <path d='M12 8V21' strokeWidth={2} />
              <path d='M3 12H21' strokeWidth={2} />
              <path
                d='M7.5 8C6.119 8 5 6.881 5 5.5S6.119 3 7.5 3C9.5 3 10 5.5 12 5.5C14 5.5 14.5 3 16.5 3C17.881 3 19 4.119 19 5.5S17.881 8 16.5 8H7.5Z'
                strokeWidth={2}
                fill='none'
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='bg-white border-l border-gray-200 w-80 flex flex-col h-full'
        >
          {/* Fixed Header - Mobile Logo */}
          <div className='flex-shrink-0 pt-6 pb-4 border-b border-gray-100'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-gradient-to-br from-brand-amber to-brand-brown rounded-xl flex items-center justify-center shadow-lg'>
                {/* Gift Icon - Same as Header */}
                <svg
                  className='w-6 h-6 text-white'
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
                <h2 className='font-display text-xl font-bold bg-gradient-to-r from-brand-brown to-brand-amber bg-clip-text text-transparent'>
                  Shubhhampers
                </h2>
                <p className='text-xs text-gray-600'>Hampers that build relationships.</p>
              </div>
            </div>
          </div>

          {/* Scrollable Navigation Content */}
          <div className='flex-1 overflow-y-auto px-6 py-4'>
            <nav className='space-y-6'>
              <div>
                <Link
                  href='/collections'
                  className='font-semibold text-brand-brown mb-3 flex items-center hover:text-brand-dark transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  🎁 Collections
                </Link>
                <ul className='space-y-2 ml-6'>
                  <li>
                    <Link
                      href='/collections?category=business'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Business Hampers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/collections?category=wedding'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Wedding Hampers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/collections?category=festivals'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Festival Hampers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/collections?category=personal'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Personal Celebrations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/collections?category=luxury'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Luxury Hampers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <Link
                  href='/services'
                  className='font-semibold text-brand-brown mb-3 flex items-center hover:text-brand-dark transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  🎯 Services
                </Link>
                <ul className='space-y-2 ml-6'>
                  <li>
                    <Link
                      href='/contact?service=business'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Business Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact?service=wedding'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Wedding Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact?service=consultation'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Consultation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact?service=bulk'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Bulk Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Get Consultation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* For Business */}
              <div>
                <Link
                  href='/business'
                  className='font-semibold text-brand-brown flex items-center hover:text-brand-dark transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  🏢 For Business
                </Link>
              </div>

              {/* About */}
              <div>
                <h3 className='font-semibold text-brand-brown mb-3 flex items-center'>
                  💼 For Business
                </h3>
                <ul className='space-y-2 ml-6'>
                  <li>
                    <Link
                      href='/business-accounts'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Business Accounts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/volume-discounts'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Volume Discounts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/partnership-program'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Partnership Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/case-studies'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={() => setIsOpen(false)}
                    >
                      Case Studies
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='font-semibold text-brand-brown mb-3 flex items-center'>ℹ️ About</h3>
                <ul className='space-y-2 ml-6'>
                  <li>
                    <Link
                      href='/about'
                      className='text-gray-700 hover:text-brand-brown'
                      onClick={() => setIsOpen(false)}
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about#process'
                      className='text-gray-700 hover:text-brand-brown'
                      onClick={() => setIsOpen(false)}
                    >
                      Our Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about#team'
                      className='text-gray-700 hover:text-brand-brown'
                      onClick={() => setIsOpen(false)}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about#values'
                      className='text-gray-700 hover:text-brand-brown'
                      onClick={() => setIsOpen(false)}
                    >
                      Our Values
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='font-semibold text-brand-brown mb-3'>
                  <Link
                    href='/contact'
                    className='text-brand-brown hover:text-brand-amber'
                    onClick={() => setIsOpen(false)}
                  >
                    📞 Contact Us
                  </Link>
                </h3>
              </div>
            </nav>
          </div>

          {/* Fixed Footer - Mobile CTA */}
          <div className='flex-shrink-0 p-6 border-t border-gray-100 bg-white'>
            <Button
              onClick={() => {
                router.push("/contact");
                setIsOpen(false);
              }}
              className='w-full bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
            >
              Get Quote
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
