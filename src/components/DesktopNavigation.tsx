"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav className='hidden lg:flex space-x-6'>
      {/* Festival Dropdown */}
      <div className='relative group'>
        <Link
          href='/collections?category=festival'
          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
            pathname?.includes("category=festival")
              ? "text-brand-brown bg-brand-gold/10 rounded-lg"
              : "text-brand-dark hover:text-brand-brown"
          }`}
        >
          🎆 Festival
          <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform duration-200' />
        </Link>

        <div className='absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
          <div className='p-4'>
            <Link
              href='/collections?category=festival'
              className='block font-semibold text-brand-brown mb-3 text-sm hover:text-brand-dark transition-colors'
            >
              🎆 Festival Gift Hampers
            </Link>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/hampers/raksha-bandhan-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  🪢 Raksha Bandhan Gift Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/hampers/diwali-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  ✨ Diwali Gift Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/hampers/christmas-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  🎄 Christmas Gift Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/hampers/new-year-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  🎊 New Year Gift Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/hampers/holi-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  🎨 Holi Gift Hampers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Wedding Dropdown */}
      <div className='relative group'>
        <Link
          href='/collections?category=wedding'
          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
            pathname?.includes("category=wedding")
              ? "text-brand-brown bg-brand-gold/10 rounded-lg"
              : "text-brand-dark hover:text-brand-brown"
          }`}
        >
          💒 Wedding
          <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform duration-200' />
        </Link>

        <div className='absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
          <div className='p-4'>
            <Link
              href='/collections?category=wedding'
              className='block font-semibold text-brand-brown mb-3 text-sm hover:text-brand-dark transition-colors'
            >
              💒 Wedding Gift Hampers
            </Link>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/hampers/wedding-room-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  🏨 Room Gift Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/hampers/wedding-return-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  🎁 Return Gift Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/hampers/bridesmaid-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  👰 Bridesmaid Gift Hampers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Corporate Dropdown */}
      <div className='relative group'>
        <Link
          href='/collections?category=corporate'
          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
            pathname?.includes("category=corporate")
              ? "text-brand-brown bg-brand-gold/10 rounded-lg"
              : "text-brand-dark hover:text-brand-brown"
          }`}
        >
          🏢 Corporate
          <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform duration-200' />
        </Link>

        <div className='absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
          <div className='p-4'>
            <Link
              href='/collections?category=corporate'
              className='block font-semibold text-brand-brown mb-3 text-sm hover:text-brand-dark transition-colors'
            >
              🏢 Corporate Gift Hampers
            </Link>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/hampers/employee-appreciation-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  👥 Employee Appreciation Gift Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/hampers/client-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  🤝 Client Gift Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/hampers/corporate-festival-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  🎊 Corporate Festival Gift Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/hampers/business-milestone-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  🏆 Business Milestone Gift Hampers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Personal Dropdown */}
      <div className='relative group'>
        <Link
          href='/collections?category=personal'
          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
            pathname?.includes("category=personal")
              ? "text-brand-brown bg-brand-gold/10 rounded-lg"
              : "text-brand-dark hover:text-brand-brown"
          }`}
        >
          💝 Personal
          <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform duration-200' />
        </Link>

        <div className='absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
          <div className='p-4'>
            <Link
              href='/collections?category=personal'
              className='block font-semibold text-brand-brown mb-3 text-sm hover:text-brand-dark transition-colors'
            >
              💝 Personal Gift Hampers
            </Link>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/hampers/anniversary-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  💕 Anniversary Gift Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/hampers/birthday-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  🎂 Birthday Gift Hampers
                </Link>
              </li>
              <li>
                <Link
                  href='/hampers/valentine-gift-hamper'
                  className='block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm'
                >
                  💝 Valentine Gift Hampers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
