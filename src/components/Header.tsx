"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import QuickAccessBar from "./QuickAccessBar";
import HeaderLogo from "./HeaderLogo";
import DesktopNavigation from "./DesktopNavigation";
import HeaderCTA from "./HeaderCTA";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ticking = useRef(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const shouldBeScrolled = scrollY > 20;

        // Only update state if the value actually changed
        setIsScrolled(prevScrolled => {
          if (prevScrolled !== shouldBeScrolled) {
            return shouldBeScrolled;
          }
          return prevScrolled;
        });

        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run after component is mounted
    if (!isMounted) return;

    // Set initial scroll state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, isMounted]);

  return (
    <>
      {/* Quick Access Elements Bar */}
      <QuickAccessBar />

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full overflow-visible ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-gradient-to-r from-brand-light via-white to-brand-light"
        }`}
      >
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo & Tagline */}
            <HeaderLogo />

            {/* Desktop Navigation */}
            <DesktopNavigation />

            {/* CTA Button */}
            <HeaderCTA />

            {/* Mobile Menu */}
            <MobileNavigation />
          </div>
        </div>
      </header>
    </>
  );
}
