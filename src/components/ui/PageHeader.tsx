/**
 * SEO-Optimized Page Header Component
 * Provides proper H1 structure with contextual titles for each page type
 */

import React from "react";
import FeatureTag from "../FeatureTag";

interface PageHeaderProps {
  title: string;
  description?: string;
  tag?: {
    emoji?: string;
    text: string;
  };
  variant?: "center" | "left" | "hero";
  size?: "sm" | "md" | "lg";
  theme?: "default" | "dark";
  showDecorations?: boolean;
  className?: string;
  children?: React.ReactNode;
  breadcrumbs?: Array<{
    label: string;
    href: string;
  }>;
}

const variantStyles = {
  center: "text-center",
  left: "text-left",
  hero: "text-center"
};

const sizeStyles = {
  sm: {
    title: "text-xl sm:text-2xl md:text-3xl",
    description: "text-sm sm:text-base",
    spacing: "mb-8"
  },
  md: {
    title: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    description: "text-base md:text-lg lg:text-xl",
    spacing: "mb-12 md:mb-16"
  },
  lg: {
    title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
    description: "text-base sm:text-lg md:text-xl lg:text-2xl",
    spacing: "mb-6 md:mb-8"
  }
};

export default function PageHeader({
  title,
  description,
  tag,
  variant = "center",
  size = "md",
  theme = "default",
  showDecorations = false,
  className = "",
  children,
  breadcrumbs
}: PageHeaderProps) {
  const styles = sizeStyles[size];

  // Theme-based color classes
  const themeStyles = {
    default: {
      title: "text-brand-brown",
      description: "text-brand-dark"
    },
    dark: {
      title: "text-brand-light",
      description: "text-brand-gold"
    }
  };

  const currentTheme = themeStyles[theme];

  return (
    <div className={`${variantStyles[variant]} ${styles.spacing} relative ${className}`}>
      {/* Decorative Elements */}
      {showDecorations && (
        <>
          <div className="absolute top-0 left-1/4 w-16 h-16 bg-brand-gold/20 rounded-full blur-lg animate-pulse" />
          <div className="absolute top-10 right-1/4 w-12 h-12 bg-brand-amber/30 rounded-full blur-md animate-bounce delay-300" />
        </>
      )}

      {/* Breadcrumbs - Hidden visually but available for screen readers and SEO */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb navigation" className="sr-only">
          <ol className="flex items-center space-x-1 md:space-x-2 text-sm text-brand-dark/70">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center">
                {index > 0 && <span className="mx-1 md:mx-2 text-brand-gold">›</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-medium text-brand-brown" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <a
                    href={crumb.href}
                    className="hover:text-brand-brown transition-colors duration-200"
                  >
                    {crumb.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Feature Tag */}
      {tag && (
        <FeatureTag
          className={`mb-6 md:mb-8 ${variant === "left" ? "mx-0" : ""} ${
            theme === "dark" ? "bg-brand-light/90 text-brand-dark border-brand-gold" : ""
          }`}
        >
          {tag.emoji && `${tag.emoji} `}
          {tag.text}
        </FeatureTag>
      )}

      {/* H1 Title - SEO Optimized */}
      <h1
        className={`font-display font-bold mb-2 xs:mb-3 md:mb-4 leading-tight tracking-wide drop-shadow-sm relative z-10 ${styles.title} ${currentTheme.title}`}
      >
        {title}
      </h1>

      {/* Description */}
      {description && (
        <p
          className={`leading-relaxed mb-6 md:mb-8 px-4 md:px-0 font-normal drop-shadow-sm relative z-10 ${styles.description} ${
            variant === "center" ? "max-w-4xl mx-auto" : ""
          } ${variant === "left" ? "max-w-3xl" : ""} ${currentTheme.description}`}
        >
          {description}
        </p>
      )}

      {/* Additional content */}
      {children}

      {/* Structured Data for Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.label,
                item: `https://www.shubhhampers.com${crumb.href}`
              }))
            })
          }}
        />
      )}
    </div>
  );
}
