/**
 * Footer Company Information Section
 * Extracted from main Footer component for better modularity
 */

import { CONTACT_INFO } from "@lib/contact-utils";
import LogoImage from "../ui/LogoImage";
import SocialButton from "../ui/SocialButton";

export default function FooterCompanyInfo() {
  return (
    <div className="lg:col-span-2">
      {/* Company Header */}
      <div className="flex items-center gap-3 mb-4">
        <LogoImage size="lg" />
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-light tracking-wide">
            {CONTACT_INFO.company.name}
          </h3>
          <p className="text-sm text-brand-gold font-medium">{CONTACT_INFO.company.tagline}</p>
        </div>
      </div>

      {/* Company Description */}
      <p className="text-brand-gold mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
        {CONTACT_INFO.company.description}
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap gap-3 mb-6">
        <SocialButton platform="linkedin" />
        <SocialButton platform="instagram" />
        <SocialButton platform="facebook" />
      </div>
    </div>
  );
}
