"use client";

import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@ui-kit/button";
import { Sheet, SheetContent, SheetTrigger } from "@ui-kit/sheet";
import { ChevronDown, ChevronRight } from "lucide-react";
import { IMAGES, IMAGE_ALT } from "@lib/image-constants";
import { NAVIGATION_ITEMS, ADDITIONAL_NAVIGATION_ITEMS } from "@lib/navigation-constants";
import { CONTACT_INFO } from "@lib/contact-utils";

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
    window.open(CONTACT_INFO.whatsappUrl, "_blank");
    setIsOpen(false);
  }, []);

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 p-3 min-h-[44px] min-w-[44px]"
            aria-label="Open mobile menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {/* Gift Box Icon */}
              <rect x="3" y="8" width="18" height="13" rx="2" strokeWidth={2} fill="none" />
              <path d="M12 8V21" strokeWidth={2} />
              <path d="M3 12H21" strokeWidth={2} />
              <path
                d="M7.5 8C6.119 8 5 6.881 5 5.5S6.119 3 7.5 3C9.5 3 10 5.5 12 5.5C14 5.5 14.5 3 16.5 3C17.881 3 19 4.119 19 5.5S17.881 8 16.5 8H7.5Z"
                strokeWidth={2}
                fill="none"
              />
            </svg>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[280px] xs:w-80 sm:w-96 bg-white border-l border-brand-gold/20 overflow-y-auto"
        >
          <div className="flex flex-col h-full">
            {/* Header - Match HeaderLogo styling */}
            <div className="py-6 border-b border-brand-gold/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-light via-white to-brand-gold/20 rounded-lg overflow-hidden shadow-md border border-brand-gold/20 p-1">
                  <Image
                    src={IMAGES.LOGO_DARK}
                    alt={IMAGE_ALT.LOGO}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                    priority={true}
                    quality={90}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="font-display text-2xl font-extrabold bg-gradient-to-r from-brand-brown to-brand-amber bg-clip-text text-transparent tracking-tight drop-shadow-sm leading-none">
                    {CONTACT_INFO.company.name}
                  </div>
                  <p className="text-xs text-brand-brown font-medium mt-1">
                    {CONTACT_INFO.company.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation - Expandable Category Links */}
            <nav className="flex-1 py-4 space-y-4">
              {/* Home */}
              <Link
                href="/"
                className={`block font-semibold transition-colors px-3 py-3 rounded-lg ${
                  isActive("/")
                    ? "text-brand-dark bg-brand-gold/10"
                    : "text-brand-brown hover:text-brand-dark hover:bg-brand-gold/5"
                }`}
                onClick={handleClose}
              >
                Home
              </Link>

              {/* Navigation Sections */}
              {NAVIGATION_ITEMS.map(navItem => (
                <div key={navItem.id} className="space-y-3">
                  <button
                    onClick={() => toggleSection(navItem.id)}
                    className="flex items-center justify-between w-full font-semibold text-brand-dark text-sm uppercase tracking-wide hover:text-brand-brown transition-colors py-3 px-3 rounded-lg hover:bg-brand-gold/10 min-h-[48px]"
                  >
                    {navItem.label} Gift Hampers
                    {expandedSections.has(navItem.id) ? (
                      <ChevronDown className="w-4 h-4 text-brand-amber" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-brand-amber" />
                    )}
                  </button>
                  {expandedSections.has(navItem.id) && navItem.children && (
                    <div className="space-y-2 ml-6 pl-3 border-l-2 border-brand-gold/30">
                      {navItem.children.map(child => (
                        <Link
                          key={child.id}
                          href={child.href}
                          className={`block hover:text-brand-dark cursor-pointer text-sm py-2 px-2 rounded hover:bg-brand-gold/5 transition-colors ${
                            child.description
                              ? "text-brand-brown font-medium"
                              : "text-gray-600 hover:text-brand-brown"
                          }`}
                          onClick={handleClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* More Info Section */}
              <div className="space-y-4 pt-4 border-t border-brand-gold/30">
                <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wide px-3">
                  More Info
                </h3>
                <div className="space-y-2">
                  {ADDITIONAL_NAVIGATION_ITEMS.map(item => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="block text-gray-600 hover:text-brand-brown cursor-pointer text-sm py-2 px-3 rounded hover:bg-brand-gold/5 transition-colors"
                      onClick={handleClose}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Quick Actions */}
            <div className="py-6 border-t border-brand-gold/30 space-y-4">
              <Button
                onClick={handleNavigateToContact}
                className="w-full bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
              >
                Start Consultation
              </Button>

              <Button
                onClick={handleNavigateToWhatsApp}
                className="w-full bg-transparent text-brand-brown border-2 border-brand-gold font-semibold py-3 rounded-lg hover:bg-brand-gold/10 transition-all duration-200 transform hover:scale-[1.02]"
              >
                WhatsApp Us
              </Button>

              {/* Contact Info */}
              <div className="text-center text-sm text-brand-brown space-y-1 pt-2">
                <p className="font-medium">{CONTACT_INFO.displayEmail}</p>
                <p className="font-medium">{CONTACT_INFO.displayPhone}</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
