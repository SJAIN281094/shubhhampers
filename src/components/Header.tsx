"use client";

import { useState, useEffect } from "react";
import QuickAccessBar from "./QuickAccessBar";
import HeaderLogo from "./HeaderLogo";
import DesktopNavigation from "./DesktopNavigation";
import HeaderCTA from "./HeaderCTA";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
