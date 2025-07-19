"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DesktopNavigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isCollectionsActive = pathname === "/collections" || pathname.startsWith("/collections");

  return (
    <nav className='hidden md:flex space-x-8'>
      {/* Collections Dropdown */}
      <div className='relative group'>
        <Link
          href='/collections'
          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
            isCollectionsActive
              ? "text-brand-brown bg-brand-gold/10 rounded-lg"
              : "text-brand-dark hover:text-brand-brown"
          }`}
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
            </ul>
          </div>
        </div>
      </div>

      {/* Services Link */}
      <Link
        href='/services'
        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive("/services")
            ? "text-brand-brown bg-brand-gold/10 rounded-lg"
            : "text-brand-dark hover:text-brand-brown"
        }`}
      >
        Services
      </Link>

      {/* For Business Link */}
      <Link
        href='/business'
        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive("/business")
            ? "text-brand-brown bg-brand-gold/10 rounded-lg"
            : "text-brand-dark hover:text-brand-brown"
        }`}
      >
        For Business
      </Link>

      {/* Other navigation items */}
      <Link
        href='/about'
        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive("/about")
            ? "text-brand-brown bg-brand-gold/10 rounded-lg"
            : "text-brand-dark hover:text-brand-brown"
        }`}
      >
        About
      </Link>
      <Link
        href='/contact'
        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive("/contact")
            ? "text-brand-brown bg-brand-gold/10 rounded-lg"
            : "text-brand-dark hover:text-brand-brown"
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}
