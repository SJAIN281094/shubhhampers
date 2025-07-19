"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function DesktopNavigation() {
  return (
    <nav className='hidden md:flex space-x-8'>
      {/* Collections Dropdown */}
      <div className='relative group'>
        <Link
          href='/collections'
          className='text-brand-dark hover:text-brand-brown px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1'
        >
          Our Collections
          <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform duration-200' />
        </Link>

        <div className='absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
          <div className='p-4'>
            <Link
              href='/collections'
              className='block font-semibold text-brand-brown mb-3 text-sm hover:text-brand-dark transition-colors'
            >
              🎁 Our Collections
            </Link>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/collections?category=business'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  Business Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/collections?category=wedding'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  Wedding Collections
                </Link>
              </li>
              <li>
                <Link
                  href='/collections?category=festival'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  Festival Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/collections?category=personal'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  Personal Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/collections?category=luxury'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  Luxury Collections
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services Dropdown */}
      <div className='relative group'>
        <button className='text-brand-dark hover:text-brand-brown px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1'>
          Services
          <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform duration-200' />
        </button>

        <div className='absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
          <div className='p-4'>
            <Link
              href='/services'
              className='block font-semibold text-brand-brown mb-3 text-sm hover:text-brand-dark transition-colors'
            >
              🎯 Our Services
            </Link>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/contact?service=business'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link
                  href='/contact?service=wedding'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  Wedding Services
                </Link>
              </li>
              <li>
                <Link
                  href='/contact?service=consultation'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  Consultation
                </Link>
              </li>
              <li>
                <Link
                  href='/contact?service=bulk'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  Get Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* For Business Link */}
      <Link
        href='/business'
        className='text-brand-dark hover:text-brand-brown px-3 py-2 text-sm font-medium transition-colors duration-200'
      >
        For Business
      </Link>

      {/* Other navigation items */}
      <Link
        href='/about'
        className='text-brand-dark hover:text-brand-brown px-3 py-2 text-sm font-medium transition-colors duration-200'
      >
        About
      </Link>
      <Link
        href='/contact'
        className='text-brand-dark hover:text-brand-brown px-3 py-2 text-sm font-medium transition-colors duration-200'
      >
        Contact
      </Link>
    </nav>
  );
}
