"use client";

import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui-kit/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui-kit/sheet";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function MobileNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const isActive = (path: string) => pathname === path;

  // Toggle expanded sections
  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  // Memoized close handler to prevent re-renders
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Memoized navigation handlers
  const handleNavigateToContact = useCallback(() => {
    router.push("/contact");
    setIsOpen(false);
  }, [router]);

  const handleNavigateToWhatsApp = useCallback(() => {
    window.open("https://wa.me/919685847274", "_blank");
    setIsOpen(false);
  }, []);

  return (
    <div className='lg:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className='text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 p-3 min-h-[44px] min-w-[44px]'
            aria-label='Open mobile menu'
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
          className='w-[280px] xs:w-80 sm:w-96 bg-white border-l border-brand-gold/20 overflow-y-auto'
        >
          <div className='flex flex-col h-full'>
            {/* Header */}
            <div className='py-6 border-b border-brand-gold/20'>
              <h2 className='text-2xl font-bold text-brand-dark'>Shubhhampers</h2>
              <p className='text-sm text-brand-brown'>Hampers that build relationships</p>
            </div>

            {/* Navigation - Expandable Category Links */}
            <nav className='flex-1 py-6 space-y-6'>
              {/* Home */}
              <Link
                href='/'
                className={`block font-semibold transition-colors ${
                  isActive("/")
                    ? "text-brand-dark bg-brand-gold/10 px-3 py-2 rounded-lg"
                    : "text-brand-brown hover:text-brand-dark"
                }`}
                onClick={handleClose}
              >
                🏠 Home
              </Link>

              {/* Festival Section */}
              <div className='space-y-2'>
                <button
                  onClick={() => toggleSection("festival")}
                  className='flex items-center justify-between w-full font-bold text-brand-dark text-sm uppercase tracking-wide hover:text-brand-brown transition-colors py-3 px-2 rounded-lg hover:bg-brand-gold/10 min-h-[48px]'
                >
                  🎆 Festival Gift Hampers
                  {expandedSections.has("festival") ? (
                    <ChevronDown className='w-4 h-4' />
                  ) : (
                    <ChevronRight className='w-4 h-4' />
                  )}
                </button>
                {expandedSections.has("festival") && (
                  <div className='space-y-2 ml-4 pl-2 border-l-2 border-brand-gold/20'>
                    <Link
                      href='/collections?category=festival'
                      className='block text-brand-brown hover:text-brand-dark cursor-pointer font-medium text-sm'
                      onClick={handleClose}
                    >
                      🎆 All Festival Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/raksha-bandhan-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      🪢 Raksha Bandhan Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/diwali-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      ✨ Diwali Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/christmas-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      🎄 Christmas Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/new-year-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      🎊 New Year Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/holi-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      🎨 Holi Gift Hampers
                    </Link>
                  </div>
                )}
              </div>

              {/* Wedding Section */}
              <div className='space-y-2'>
                <button
                  onClick={() => toggleSection("wedding")}
                  className='flex items-center justify-between w-full font-bold text-brand-dark text-sm uppercase tracking-wide hover:text-brand-brown transition-colors py-3 px-2 rounded-lg hover:bg-brand-gold/10 min-h-[48px]'
                >
                  💒 Wedding Gift Hampers
                  {expandedSections.has("wedding") ? (
                    <ChevronDown className='w-4 h-4' />
                  ) : (
                    <ChevronRight className='w-4 h-4' />
                  )}
                </button>
                {expandedSections.has("wedding") && (
                  <div className='space-y-2 ml-4 pl-2 border-l-2 border-brand-gold/20'>
                    <Link
                      href='/collections?category=wedding'
                      className='block text-brand-brown hover:text-brand-dark cursor-pointer font-medium text-sm'
                      onClick={handleClose}
                    >
                      💒 All Wedding Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/wedding-room-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      🏨 Room Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/wedding-return-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      🎁 Return Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/bridesmaid-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      👰 Bridesmaid Gift Hampers
                    </Link>
                  </div>
                )}
              </div>

              {/* Corporate Section */}
              <div className='space-y-2'>
                <button
                  onClick={() => toggleSection("corporate")}
                  className='flex items-center justify-between w-full font-bold text-brand-dark text-sm uppercase tracking-wide hover:text-brand-brown transition-colors py-3 px-2 rounded-lg hover:bg-brand-gold/10 min-h-[48px]'
                >
                  🏢 Corporate Gift Hampers
                  {expandedSections.has("corporate") ? (
                    <ChevronDown className='w-4 h-4' />
                  ) : (
                    <ChevronRight className='w-4 h-4' />
                  )}
                </button>
                {expandedSections.has("corporate") && (
                  <div className='space-y-2 ml-4 pl-2 border-l-2 border-brand-gold/20'>
                    <Link
                      href='/collections?category=corporate'
                      className='block text-brand-brown hover:text-brand-dark cursor-pointer font-medium text-sm'
                      onClick={handleClose}
                    >
                      🏢 All Corporate Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/employee-appreciation-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      👥 Employee Appreciation Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/client-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      🤝 Client Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/corporate-festival-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      🎊 Corporate Festival Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/business-milestone-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      🏆 Business Milestone Gift Hampers
                    </Link>
                  </div>
                )}
              </div>

              {/* Personal Section */}
              <div className='space-y-2'>
                <button
                  onClick={() => toggleSection("personal")}
                  className='flex items-center justify-between w-full font-bold text-brand-dark text-sm uppercase tracking-wide hover:text-brand-brown transition-colors py-3 px-2 rounded-lg hover:bg-brand-gold/10 min-h-[48px]'
                >
                  💝 Personal Gift Hampers
                  {expandedSections.has("personal") ? (
                    <ChevronDown className='w-4 h-4' />
                  ) : (
                    <ChevronRight className='w-4 h-4' />
                  )}
                </button>
                {expandedSections.has("personal") && (
                  <div className='space-y-2 ml-4 pl-2 border-l-2 border-brand-gold/20'>
                    <Link
                      href='/collections?category=personal'
                      className='block text-brand-brown hover:text-brand-dark cursor-pointer font-medium text-sm'
                      onClick={handleClose}
                    >
                      💝 All Personal Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/anniversary-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      💕 Anniversary Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/birthday-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      🎂 Birthday Gift Hampers
                    </Link>
                    <Link
                      href='/hampers/valentine-gift-hamper'
                      className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                      onClick={handleClose}
                    >
                      💝 Valentine Gift Hampers
                    </Link>
                  </div>
                )}
              </div>

              {/* Moved to Footer - Links for reference */}
              <div className='space-y-4 pt-4 border-t border-brand-gold/20'>
                <h3 className='font-bold text-brand-dark text-sm uppercase tracking-wide'>
                  More Info
                </h3>
                <div className='space-y-3 ml-2'>
                  <Link
                    href='/services'
                    className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                    onClick={handleClose}
                  >
                    🔧 Services
                  </Link>
                  <Link
                    href='/about'
                    className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                    onClick={handleClose}
                  >
                    ℹ️ About Us
                  </Link>
                  <Link
                    href='/contact'
                    className='block text-gray-600 hover:text-brand-brown cursor-pointer text-sm'
                    onClick={handleClose}
                  >
                    📞 Contact
                  </Link>
                </div>
              </div>
            </nav>

            {/* Quick Actions */}
            <div className='py-6 border-t border-brand-gold/20 space-y-4'>
              <Button
                onClick={handleNavigateToContact}
                className='w-full bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200'
              >
                💬 Start Consultation
              </Button>

              <Button
                onClick={handleNavigateToWhatsApp}
                className='w-full bg-transparent text-brand-brown border-2 border-brand-gold font-semibold py-3 rounded-lg hover:bg-brand-gold/10 transition-all duration-200'
              >
                📱 WhatsApp Us
              </Button>

              {/* Contact Info */}
              <div className='text-center text-sm text-gray-600 space-y-1'>
                <p>📧 connect@shubhhampers.com</p>
                <p>📞 +91 96858 47274</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
