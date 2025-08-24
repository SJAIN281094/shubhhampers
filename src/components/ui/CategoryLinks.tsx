/**
 * Category Links Component
 * Provides contextual internal linking between categories and subcategories
 */

import React from "react";
import Link from "next/link";

interface CategoryLink {
  label: string;
  href: string;
  description?: string;
  isActive?: boolean;
}

interface CategoryLinksProps {
  title?: string;
  links: CategoryLink[];
  variant?: "pills" | "grid" | "list";
  className?: string;
  showDescriptions?: boolean;
}

export default function CategoryLinks({
  title,
  links,
  variant = "pills",
  className = "",
  showDescriptions = false
}: CategoryLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className={`py-8 ${className}`} aria-labelledby='category-links-heading'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {title && (
          <h3
            id='category-links-heading'
            className='text-xl md:text-2xl font-display font-semibold text-brand-brown mb-6'
          >
            {title}
          </h3>
        )}

        <div
          className={`${variant === "pills" ? "flex flex-wrap gap-3" : ""} ${
            variant === "grid" ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" : ""
          } ${variant === "list" ? "space-y-2" : ""}`}
        >
          {links.map(link => (
            <CategoryLinkItem
              key={link.href}
              link={link}
              variant={variant}
              showDescription={showDescriptions}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CategoryLinkItemProps {
  link: CategoryLink;
  variant: CategoryLinksProps["variant"];
  showDescription?: boolean;
}

function CategoryLinkItem({ link, variant, showDescription }: CategoryLinkItemProps) {
  const baseClasses =
    "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-amber focus:ring-opacity-50";

  if (variant === "pills") {
    return (
      <Link
        href={link.href}
        className={`${baseClasses} inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
          link.isActive
            ? "bg-brand-amber text-brand-dark"
            : "bg-brand-gold/20 text-brand-brown hover:bg-brand-gold/30 hover:scale-105"
        }`}
      >
        {link.label}
      </Link>
    );
  }

  if (variant === "grid") {
    return (
      <Link
        href={link.href}
        className={`${baseClasses} block p-4 rounded-xl border-2 text-center ${
          link.isActive
            ? "border-brand-amber bg-brand-amber/10 text-brand-brown"
            : "border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 hover:scale-105"
        }`}
      >
        <div className='font-medium text-brand-brown mb-1'>{link.label}</div>
        {showDescription && link.description && (
          <div className='text-sm text-brand-dark/70'>{link.description}</div>
        )}
      </Link>
    );
  }

  // List variant
  return (
    <Link
      href={link.href}
      className={`${baseClasses} block p-3 rounded-lg hover:bg-brand-gold/10 ${
        link.isActive ? "bg-brand-amber/10 border-l-4 border-brand-amber" : ""
      }`}
    >
      <div className='flex justify-between items-center'>
        <div>
          <div className='font-medium text-brand-brown'>{link.label}</div>
          {showDescription && link.description && (
            <div className='text-sm text-brand-dark/70 mt-1'>{link.description}</div>
          )}
        </div>
        <svg
          className='w-5 h-5 text-brand-gold'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
        </svg>
      </div>
    </Link>
  );
}
