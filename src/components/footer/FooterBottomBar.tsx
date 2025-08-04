/**
 * Footer Bottom Bar Section
 * Extracted from main Footer component for better modularity
 */

import Link from "next/link";
import { CONTACT_INFO } from "@lib/contact-utils";

interface FooterBottomBarProps {
  onCatalogueOpen: () => void;
}

export default function FooterBottomBar({ onCatalogueOpen }: FooterBottomBarProps) {
  return (
    <div className='border-t border-brand-brown/50 py-8'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
        {/* Copyright & Tagline */}
        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <p className='text-brand-gold text-sm'>
            © 2025 {CONTACT_INFO.company.name}. All rights reserved.
          </p>
          <div className='flex items-center gap-2'>
            <span className='text-brand-gold/60'>|</span>
            <span className='text-brand-gold text-sm'>{CONTACT_INFO.company.fullTagline}</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className='flex flex-wrap justify-center gap-6'>
          <Link
            href='/about'
            className='text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline'
          >
            About Us
          </Link>
          <Link
            href='/contact'
            className='text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline'
          >
            Contact Us
          </Link>
          <Link
            href='/hampers/personal/birthday-gift-hampers'
            className='text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline'
          >
            Birthday Hampers
          </Link>
          <Link
            href='/hampers/festival/diwali-gift-hampers'
            className='text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline'
          >
            Diwali Hampers
          </Link>
          <Link
            href='/hampers/business-gift-hampers'
            className='text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline'
          >
            Business Hampers
          </Link>
          <button
            onClick={onCatalogueOpen}
            className='text-brand-gold hover:text-brand-light text-sm transition-colors cursor-pointer hover:underline'
          >
            Catalogue
          </button>
        </div>
      </div>
    </div>
  );
}
