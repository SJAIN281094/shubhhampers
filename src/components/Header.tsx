"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui-kit/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui-kit/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui-kit/sheet";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full overflow-visible ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-gradient-to-r from-brand-light via-white to-brand-light"
      }`}
      style={{ position: "relative" }}
    >
      {/* Decorative SVG background for desktop */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-32 opacity-10"
        >
          <defs>
            <linearGradient
              id="giftGradient"
              x1="0"
              y1="0"
              x2="1440"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD580" />
              <stop offset="1" stopColor="#B07B4F" />
            </linearGradient>
          </defs>
          <path d="M0,80 Q360,120 720,80 T1440,80 V120 H0Z" fill="url(#giftGradient)" />
          <g>
            <rect x="1200" y="20" width="60" height="40" rx="8" fill="#FFD580" />
            <rect x="1225" y="10" width="10" height="20" rx="3" fill="#B07B4F" />
            <rect x="1245" y="10" width="10" height="20" rx="3" fill="#B07B4F" />
            <path
              d="M1230 30 Q1235 20 1240 30 Q1245 40 1250 30"
              stroke="#B07B4F"
              strokeWidth="2"
              fill="none"
            />
          </g>
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Tagline */}
          <div
            className="flex items-center space-x-3 cursor-pointer hover:opacity-90 transition-opacity duration-200 flex-shrink-0"
            onClick={() => router.push("/")}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-amber to-brand-brown rounded-xl flex items-center justify-center shadow-lg">
                {/* Gift Icon */}
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="8"
                    width="18"
                    height="13"
                    rx="2"
                    fill="currentColor"
                    className="text-brand-gold"
                  />
                  <path d="M12 8V21" stroke="white" strokeWidth="2" />
                  <path d="M3 12H21" stroke="white" strokeWidth="2" />
                  <path
                    d="M7.5 8C6.119 8 5 6.881 5 5.5S6.119 3 7.5 3C9.5 3 10 5.5 12 5.5C14 5.5 14.5 3 16.5 3C17.881 3 19 4.119 19 5.5S17.881 8 16.5 8H7.5Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-3xl font-extrabold bg-gradient-to-r from-brand-brown to-brand-amber bg-clip-text text-transparent tracking-tight drop-shadow-sm">
                Shubhampers
              </h1>
              <p className="text-sm text-brand-brown font-semibold tracking-wide">
                Gifts that connect hearts.
              </p>
            </div>
          </div>

          {/* Main Navigation - SEO & Business Optimized */}
          <nav aria-label="Main Navigation" className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-3 items-center text-sm font-medium">
              <li>
                <a
                  href="/"
                  className="px-3 py-2 rounded-lg hover:bg-brand-gold/10 text-brand-brown font-bold"
                  aria-label="Home"
                >
                  Home
                </a>
              </li>
              <li className="relative group">
                <button
                  className="px-3 py-2 rounded-lg hover:bg-brand-gold/10 text-brand-brown flex items-center"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Corporate
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    <h3 className="font-semibold text-brand-brown mb-3 text-sm">
                      Corporate Solutions
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/collections?category=corporate"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Employee Recognition
                        </a>
                      </li>
                      <li>
                        <a
                          href="/collections?category=corporate"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Client Appreciation
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Bulk Orders
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Custom Branding
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button
                  className="px-3 py-2 rounded-lg hover:bg-brand-gold/10 text-brand-brown flex items-center"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Festivals
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    <h3 className="font-semibold text-brand-brown mb-3 text-sm">
                      Festival Collections
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/collections?category=festivals"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Diwali Magic
                        </a>
                      </li>
                      <li>
                        <a
                          href="/collections?category=festivals"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Holi Festival
                        </a>
                      </li>
                      <li>
                        <a
                          href="/collections?category=festivals"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          New Year Dreams
                        </a>
                      </li>
                      <li>
                        <a
                          href="/collections?category=festivals"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Raksha Bandhan
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button
                  className="px-3 py-2 rounded-lg hover:bg-brand-gold/10 text-brand-brown flex items-center"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Personal
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    <h3 className="font-semibold text-brand-brown mb-3 text-sm">
                      Personal Gifting
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/collections?category=wellness"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Wellness & Care
                        </a>
                      </li>
                      <li>
                        <a
                          href="/collections?category=personal"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Birthday Celebrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="/collections?category=personal"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Secret Santa Magic
                        </a>
                      </li>
                      <li>
                        <a
                          href="/collections?category=personal"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Housewarming Joy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button
                  className="px-3 py-2 rounded-lg hover:bg-brand-gold/10 text-brand-brown flex items-center"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    <h3 className="font-semibold text-brand-brown mb-3 text-sm">About & Contact</h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/about"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Company History
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Our Mission
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          Corporate Partnerships
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-brand-brown"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">24/7 Support</p>
                  <p className="font-semibold text-brand-brown">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                onClick={() => router.push("/collections")}
                className="bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8V21M3 12H21M7.5 8C6.119 8 5 6.881 5 5.5S6.119 3 7.5 3C9.5 3 10 5.5 12 5.5C14 5.5 14.5 3 16.5 3C17.881 3 19 4.119 19 5.5S17.881 8 16.5 8H7.5Z" />
                  </svg>
                  Get Started
                </span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-l border-gray-200 w-80">
                <div className="py-6">
                  {/* Mobile Logo */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-amber to-brand-brown rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">S</span>
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-bold bg-gradient-to-r from-brand-brown to-brand-amber bg-clip-text text-transparent">
                          Shubhampers
                        </h2>
                        <p className="text-xs text-gray-600">Premium Corporate Gifting</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        GST Compliant
                      </span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        Pan-India
                      </span>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-brand-brown mb-3 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        Corporate Solutions
                      </h3>
                      <ul className="space-y-2 ml-6">
                        <li>
                          <a
                            onClick={() => router.push("/collections?category=corporate")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer"
                          >
                            Employee Recognition
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => router.push("/collections?category=corporate")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer"
                          >
                            Client Appreciation
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => router.push("/contact")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer"
                          >
                            Bulk Orders
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => router.push("/contact")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer"
                          >
                            Custom Branding
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-brand-brown mb-3 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        Collections
                      </h3>
                      <ul className="space-y-2 ml-6">
                        <li>
                          <a
                            onClick={() => router.push("/catalogue")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer font-semibold"
                          >
                            📄 Download Catalogue
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => router.push("/collections?category=festivals")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer"
                          >
                            Diwali Magic
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => router.push("/collections?category=festivals")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer"
                          >
                            Holi Festival
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => router.push("/collections?category=festivals")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer"
                          >
                            New Year Dreams
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-brand-brown mb-3 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                          />
                        </svg>
                        Services
                      </h3>
                      <ul className="space-y-2 ml-6">
                        <li>
                          <a
                            onClick={() => router.push("/contact")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer"
                          >
                            GST Invoicing
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => router.push("/contact")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer"
                          >
                            Pan-India Delivery
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => router.push("/contact")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer"
                          >
                            Corporate Accounts
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => router.push("/contact")}
                            className="text-gray-700 hover:text-brand-brown cursor-pointer"
                          >
                            Dedicated Support
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-brand-brown mb-3 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        About & Contact
                      </h3>
                      <ul className="space-y-2 ml-6">
                        <li>
                          <a href="/about" className="text-gray-700 hover:text-brand-brown">
                            Company History
                          </a>
                        </li>
                        <li>
                          <a href="/about" className="text-gray-700 hover:text-brand-brown">
                            Our Mission
                          </a>
                        </li>
                        <li>
                          <a href="/about" className="text-gray-700 hover:text-brand-brown">
                            Values & Culture
                          </a>
                        </li>
                        <li>
                          <a href="/contact" className="text-gray-700 hover:text-brand-brown">
                            General Inquiries
                          </a>
                        </li>
                        <li>
                          <a href="/contact" className="text-gray-700 hover:text-brand-brown">
                            Corporate Partnerships
                          </a>
                        </li>
                        <li>
                          <a href="/contact" className="text-gray-700 hover:text-brand-brown">
                            Bulk Orders
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>

                  {/* Mobile Contact & CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-brand-gold/20 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-brand-brown"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">24/7 Support</p>
                          <p className="font-semibold text-brand-brown">+91 98765 43210</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        onClick={() => router.push("/collections")}
                        className="w-full bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Trust/Support Bar */}
      <div className="hidden lg:flex justify-center items-center gap-6 py-2 bg-white/80 border-t border-b border-brand-gold/20 shadow-sm text-sm font-medium text-brand-brown tracking-wide">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-brand-brown"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          24/7 Support
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-brand-brown"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          Pan-India Delivery
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-brand-brown"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 17v-2a4 4 0 018 0v2M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          GST Compliant
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 font-bold text-brand-brown shadow-sm">
          <svg
            className="w-4 h-4 text-brand-brown"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 8V21M3 12H21M7.5 8C6.119 8 5 6.881 5 5.5S6.119 3 7.5 3C9.5 3 10 5.5 12 5.5C14 5.5 14.5 3 16.5 3C17.881 3 19 4.119 19 5.5S17.881 8 16.5 8H7.5Z" />
          </svg>
          Why Choose Us?
        </div>
      </div>
    </header>
  );
}
