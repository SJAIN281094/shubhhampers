"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui-kit/button";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-gradient-to-br from-brand-dark via-brand-brown/20 to-brand-dark text-brand-light relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-brown/20 via-brand-dark/40 to-brand-brown/20"></div>

      {/* Corporate-Focused Floating Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-brand-gold/25 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-brand-amber/30 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-brand-light/20 rounded-full blur-md animate-pulse delay-300"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-brand-gold/20 rounded-full blur-sm animate-bounce delay-500"></div>

      {/* Modern Geometric Decorations */}
      <div className="absolute top-0 right-0 w-40 h-40">
        <svg viewBox="0 0 160 160" className="w-full h-full">
          <polygon
            points="80,20 100,60 140,60 110,90 140,120 100,120 80,160 60,120 20,120 50,90 20,60 60,60"
            fill="#F1DEA8"
            opacity="0.1"
            className="animate-spin"
            style={{ animationDuration: "40s" }}
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <circle
            cx="64"
            cy="64"
            r="48"
            fill="none"
            stroke="#E9C579"
            strokeWidth="2"
            opacity="0.15"
            className="animate-ping"
          />
          <circle cx="64" cy="64" r="32" fill="#E9C579" opacity="0.1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info - Enhanced */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-gold/20 p-2 rounded-full">
                  <span className="text-2xl">🎁</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-brand-light tracking-wide">
                  Shubhampers
                </h3>
              </div>
              <p className="text-brand-gold mb-6 leading-relaxed">
                Leading corporate gifting solutions trusted by 500+ companies. We specialize in
                premium hampers that strengthen business relationships, boost employee morale, and
                enhance brand perception.
              </p>

              {/* Corporate Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-gold/20 px-4 py-2 rounded-full mb-6">
                <span className="text-brand-light font-semibold text-sm">🏢 Corporate Partner</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-brand-gold/20 border-2 border-brand-gold text-brand-light hover:bg-brand-gold hover:text-brand-dark cursor-pointer transition-all duration-300 hover:scale-105 font-semibold px-4 py-2"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-brand-gold/20 border-2 border-brand-gold text-brand-light hover:bg-brand-gold hover:text-brand-dark cursor-pointer transition-all duration-300 hover:scale-105 font-semibold px-4 py-2"
                >
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-brand-gold/20 border-2 border-brand-gold text-brand-light hover:bg-brand-gold hover:text-brand-dark cursor-pointer transition-all duration-300 hover:scale-105 font-semibold px-4 py-2"
                >
                  Facebook
                </Button>
              </div>

              {/* Quick CTA */}
              <Button className="bg-brand-gold text-brand-dark font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                📞 Get Corporate Quote
              </Button>
            </div>

            {/* Corporate Solutions */}
            <div>
              <h4 className="text-xl font-bold text-brand-light mb-6 flex items-center gap-2">
                <span>🏢</span>
                Corporate Solutions
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    onClick={() => router.push("/collections?category=corporate")}
                    className="text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span>🎯</span>
                    Client Appreciation
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push("/collections?category=corporate")}
                    className="text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span>👥</span>
                    Employee Recognition
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push("/contact")}
                    className="text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span>🤝</span>
                    Business Partnerships
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push("/contact")}
                    className="text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span>🎁</span>
                    Bulk Orders
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push("/contact")}
                    className="text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span>🎨</span>
                    Custom Branding
                  </a>
                </li>
              </ul>
            </div>

            {/* Collections */}
            <div>
              <h4 className="text-xl font-bold text-brand-light mb-6 flex items-center gap-2">
                <span>🎉</span>
                Collections
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    onClick={() => router.push("/collections?category=festivals")}
                    className="text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span>✨</span>
                    Diwali Magic
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push("/collections?category=festivals")}
                    className="text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span>🎄</span>
                    New Year Dreams
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push("/collections?category=personal")}
                    className="text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span>🌹</span>
                    Mother's Day Love
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push("/collections?category=personal")}
                    className="text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span>🎂</span>
                    Birthday Celebrations
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push("/collections?category=personal")}
                    className="text-brand-gold hover:text-brand-light transition-colors cursor-pointer flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span>💕</span>
                    Anniversary Bliss
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h4 className="text-xl font-bold text-brand-light mb-6 flex items-center gap-2">
                <span>📞</span>
                Contact & Support
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start text-brand-gold">
                  <span className="mr-3 mt-1">📍</span>
                  <div>
                    <p className="font-semibold text-brand-light">Corporate Office</p>
                    <p className="text-sm">123 Business District, Corporate City, CC 12345</p>
                  </div>
                </li>
                <li className="flex items-center text-brand-gold">
                  <span className="mr-3">📞</span>
                  <div>
                    <p className="font-semibold text-brand-light">+1 (555) 123-4567</p>
                    <p className="text-sm">Mon-Fri: 9AM-6PM EST</p>
                  </div>
                </li>
                <li className="flex items-center text-brand-gold">
                  <span className="mr-3">✉️</span>
                  <div>
                    <p className="font-semibold text-brand-light">corporate@shubhampers.com</p>
                    <p className="text-sm">For business inquiries</p>
                  </div>
                </li>
                <li className="flex items-center text-brand-gold">
                  <span className="mr-3">💬</span>
                  <div>
                    <p className="font-semibold text-brand-light">Live Chat</p>
                    <p className="text-sm">24/7 customer support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Corporate Features Section */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-brand-gold/20">
            <h3 className="text-2xl font-bold text-brand-light mb-8 text-center">
              Why Choose Shubhampers for Corporate Gifting?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="text-lg font-semibold text-brand-light mb-2">Premium Quality</h4>
                <p className="text-brand-gold text-sm">Handpicked items from world-class brands</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-lg font-semibold text-brand-light mb-2">Fast Delivery</h4>
                <p className="text-brand-gold text-sm">
                  Nationwide delivery with real-time tracking
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-lg font-semibold text-brand-light mb-2">Bulk Discounts</h4>
                <p className="text-brand-gold text-sm">Save up to 40% on large orders</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-lg font-semibold text-brand-light mb-2">Custom Branding</h4>
                <p className="text-brand-gold text-sm">Add your logo and personalize gifts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-brand-brown/50 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-brand-gold text-sm">© 2024 Shubhampers. All rights reserved.</p>
              <div className="flex items-center gap-2">
                <span className="text-brand-gold/60">|</span>
                <span className="text-brand-gold text-sm">🏢 Trusted by 500+ Companies</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/about"
                className="text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline"
              >
                Contact Us
              </a>
              <a
                href="/privacy-policy"
                className="text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="/corporate-terms"
                className="text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline"
              >
                Corporate Terms
              </a>
              <a
                href="/shipping-policy"
                className="text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline"
              >
                Shipping Policy
              </a>
              <a
                href="/return-policy"
                className="text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline"
              >
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
