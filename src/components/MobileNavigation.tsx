"use client";

import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui-kit/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui-kit/sheet";

export default function MobileNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;
  const isCollectionsActive = pathname === "/collections" || pathname.startsWith("/collections");

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
            className='text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10'
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

        <SheetContent side='right' className='w-80 sm:w-96 bg-white border-l border-brand-gold/20'>
          <div className='flex flex-col h-full'>
            {/* Header */}
            <div className='py-6 border-b border-brand-gold/20'>
              <h2 className='text-2xl font-bold text-brand-dark'>Shubhhampers</h2>
              <p className='text-sm text-brand-brown'>Hampers that build relationships</p>
            </div>

            {/* Navigation */}
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

              {/* About */}
              <Link
                href='/about'
                className={`block font-semibold transition-colors ${
                  isActive("/about")
                    ? "text-brand-dark bg-brand-gold/10 px-3 py-2 rounded-lg"
                    : "text-brand-brown hover:text-brand-dark"
                }`}
                onClick={handleClose}
              >
                ℹ️ About Us
              </Link>

              {/* Collections */}
              <div>
                <Link
                  href='/collections?category=all'
                  className={`font-semibold mb-3 flex items-center transition-colors ${
                    isCollectionsActive
                      ? "text-brand-dark bg-brand-gold/10 px-3 py-2 rounded-lg"
                      : "text-brand-brown hover:text-brand-dark"
                  }`}
                  onClick={handleClose}
                >
                  🎁 Collections
                </Link>
                <ul className='space-y-2 ml-6'>
                  <li>
                    <Link
                      href='/collections?category=business'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={handleClose}
                    >
                      Business Hampers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/collections?category=wedding'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={handleClose}
                    >
                      Wedding Hampers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/collections?category=festival'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={handleClose}
                    >
                      Festival Hampers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/collections?category=personal'
                      className='text-gray-700 hover:text-brand-brown cursor-pointer'
                      onClick={handleClose}
                    >
                      Personal Hampers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <Link
                href='/services'
                className={`block font-semibold transition-colors ${
                  isActive("/services")
                    ? "text-brand-dark bg-brand-gold/10 px-3 py-2 rounded-lg"
                    : "text-brand-brown hover:text-brand-dark"
                }`}
                onClick={handleClose}
              >
                🔧 Services
              </Link>

              {/* Business */}
              <Link
                href='/business'
                className={`block font-semibold transition-colors ${
                  isActive("/business")
                    ? "text-brand-dark bg-brand-gold/10 px-3 py-2 rounded-lg"
                    : "text-brand-brown hover:text-brand-dark"
                }`}
                onClick={handleClose}
              >
                🏢 Business Solutions
              </Link>

              {/* Contact */}
              <Link
                href='/contact'
                className={`block font-semibold transition-colors ${
                  isActive("/contact")
                    ? "text-brand-dark bg-brand-gold/10 px-3 py-2 rounded-lg"
                    : "text-brand-brown hover:text-brand-dark"
                }`}
                onClick={handleClose}
              >
                📞 Contact
              </Link>
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
                <p>📧 hello@shubhhampers.com</p>
                <p>📞 +91 96858 47274</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
