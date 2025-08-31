/**
 * Footer Links Sections
 * Extracted from main Footer component for better modularity
 */

import NavigationLinkList from "../ui/NavigationLinkList";
import { CONTACT_INFO } from "@lib/contact-utils";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const footerLinksData = {
  people: {
    title: "Gift Hampers For People",
    links: [
      { href: "/hampers/relation/gift-hamper-for-husband", label: "Gift Hamper For Husband" },
      { href: "/hampers/relation/gift-hamper-for-wife", label: "Gift Hamper For Wife" },
      { href: "/hampers/relation/gift-hamper-for-brother", label: "Gift Hamper For Brother" },
      { href: "/hampers/relation/gift-hamper-for-sister", label: "Gift Hamper For Sister" },
      { href: "/hampers/relation/gift-hamper-for-mom", label: "Gift Hamper For Mother" },
      { href: "/hampers/relation/gift-hamper-for-parents", label: "Gift Hamper For Parents" },
      { href: "/hampers/relation/gift-hamper-for-boyfriend", label: "Gift Hamper For Boyfriend" },
      { href: "/hampers/relation/gift-hamper-for-girlfriend", label: "Gift Hamper For Girlfriend" }
    ]
  },
  occasions: {
    title: "Occasion Gift Hampers",
    links: [
      { href: "/hampers/festival/diwali-gift-hampers", label: "Diwali Gift Hampers" },
      { href: "/hampers/festival/holi-gift-hampers", label: "Holi Gift Hampers" },
      { href: "/hampers/festival/rakhi-gift-hampers", label: "Raksha Bandhan Gift Hampers" },
      { href: "/hampers/wedding-gift-hampers", label: "Wedding Gift Hampers" },
      { href: "/hampers/wedding/bridal-gift-hampers", label: "Bridal Gift Hampers" },
      { href: "/hampers/personal/birthday-gift-hampers", label: "Birthday Gift Hampers" },
      { href: "/hampers/personal/anniversary-gift-hampers", label: "Anniversary Gift Hampers" }
    ]
  },
  business: {
    title: "Corporate & Business",
    links: [
      { href: "/hampers/business/business-festival-gift-hampers", label: "Festival Gift Hampers" },
      { href: "/hampers/business/employee-gift-hampers", label: "Employee Gift Hampers" },
      { href: "/hampers/business/client-gift-hampers", label: "Client Gift Hampers" }
    ]
  },
  contact: {
    title: "Quick Links & Contact",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/blogs", label: "Blogs" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact Us" }
    ]
  }
};

interface FooterLinksProps {
  onModalOpen?: () => void;
}

export default function FooterLinks({ onModalOpen: _onModalOpen }: FooterLinksProps) {
  return (
    <>
      {/* Gift Hampers For People */}
      <NavigationLinkList
        title={footerLinksData.people.title}
        links={footerLinksData.people.links}
        variant="footer"
      />

      {/* Occasion Gift Hampers */}
      <NavigationLinkList
        title={footerLinksData.occasions.title}
        links={footerLinksData.occasions.links}
        variant="footer"
      />

      {/* Corporate & Business */}
      <NavigationLinkList
        title={footerLinksData.business.title}
        links={footerLinksData.business.links}
        variant="footer"
      />

      {/* Contact & Support */}
      <div>
        <NavigationLinkList
          title={footerLinksData.contact.title}
          links={footerLinksData.contact.links}
          variant="footer"
        />

        {/* Contact Information */}
        <div className="mt-4 bg-brand-gold/10 border border-brand-gold/30 rounded-lg p-3 space-y-2 backdrop-blur-sm w-fit">
          <div className="flex items-center gap-2 text-brand-light font-medium text-sm">
            <FaPhone className="w-3 h-3 text-brand-gold flex-shrink-0 rotate-90" />
            <span className="whitespace-nowrap">{CONTACT_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-brand-light font-medium text-sm">
            <FaEnvelope className="w-3 h-3 text-brand-gold flex-shrink-0" />
            <span className="whitespace-nowrap">{CONTACT_INFO.email}</span>
          </div>
        </div>
      </div>
    </>
  );
}
