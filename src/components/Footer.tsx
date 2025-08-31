"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import FooterCompanyInfo from "./footer/FooterCompanyInfo";
import FooterLinks from "./footer/FooterLinks";
import FooterBottomBar from "./footer/FooterBottomBar";

// Dynamic import to avoid potential webpack bundling issues
const CatalogueModal = dynamic(() => import("./CatalogueModal"), {
  ssr: false,
  loading: () => null
});

export default function Footer() {
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-br from-brand-dark via-brand-brown/20 to-brand-dark text-brand-light relative overflow-hidden">
        {/* Enhanced Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-brown/20 via-brand-dark/40 to-brand-brown/20" />

        {/* Corporate-Focused Floating Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-brand-gold/25 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-brand-amber/30 rounded-full blur-lg animate-bounce" />
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-brand-light/20 rounded-full blur-md animate-pulse delay-300" />
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-brand-gold/20 rounded-full blur-sm animate-bounce delay-500" />

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {/* Company Info */}
              <FooterCompanyInfo />

              {/* Footer Links */}
              <FooterLinks onModalOpen={() => setIsCatalogueModalOpen(true)} />
            </div>
          </div>

          {/* Bottom Bar */}
          <FooterBottomBar onCatalogueOpen={() => setIsCatalogueModalOpen(true)} />
        </div>
      </footer>

      {/* Catalogue Modal */}
      <CatalogueModal
        isOpen={isCatalogueModalOpen}
        onClose={() => setIsCatalogueModalOpen(false)}
      />
    </>
  );
}
