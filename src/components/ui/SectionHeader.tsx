/**
 * Reusable Section Header Component
 * Eliminates repeated section header patterns across components
 */

import React from "react";
import FeatureTag from "../FeatureTag";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  tag?: {
    emoji?: string;
    text: string;
  };
  variant?: "center" | "left" | "hero";
  size?: "sm" | "md" | "lg";
  theme?: "default" | "dark" | "light"; // For different background themes
  showDecorations?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const variantStyles = {
  center: "text-center",
  left: "text-left",
  hero: "text-center"
};

const sizeStyles = {
  sm: {
    title: "text-xl sm:text-2xl md:text-3xl",
    subtitle: "text-sm sm:text-base",
    description: "text-sm sm:text-base",
    spacing: "mb-8"
  },
  md: {
    title: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    subtitle: "text-base sm:text-lg md:text-xl",
    description: "text-base md:text-lg lg:text-xl",
    spacing: "mb-12 md:mb-16"
  },
  lg: {
    title: "text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl",
    subtitle: "text-base sm:text-lg md:text-xl lg:text-2xl",
    description: "text-sm xs:text-base sm:text-lg md:text-xl",
    spacing: "mb-6 md:mb-8"
  }
};

export default function SectionHeader({
  title,
  subtitle,
  description,
  tag,
  variant = "center",
  size = "md",
  theme = "default",
  showDecorations = false,
  className = "",
  children
}: SectionHeaderProps) {
  const styles = sizeStyles[size];

  // Theme-based color classes
  const themeStyles = {
    default: {
      title: "text-brand-brown",
      subtitle: "text-brand-brown",
      description: "text-brand-dark"
    },
    light: {
      title: "text-brand-brown",
      subtitle: "text-brand-brown",
      description: "text-brand-dark"
    },
    dark: {
      title: "text-brand-light",
      subtitle: "text-brand-light",
      description: "text-brand-gold"
    }
  };

  const currentTheme = themeStyles[theme] || themeStyles.default;

  return (
    <div className={`${variantStyles[variant]} ${styles.spacing} relative ${className}`}>
      {/* Decorative Elements */}
      {showDecorations && (
        <>
          <div className='absolute top-0 left-1/4 w-16 h-16 bg-brand-gold/20 rounded-full blur-lg animate-pulse' />
          <div className='absolute top-10 right-1/4 w-12 h-12 bg-brand-amber/30 rounded-full blur-md animate-bounce delay-300' />
        </>
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

      {/* Title */}
      <h2
        className={`font-display font-bold mb-2 xs:mb-3 md:mb-4 leading-tight tracking-wide drop-shadow-sm relative z-10 ${styles.title} ${currentTheme.title}`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <div
          className={`relative z-10 mb-3 md:mb-5 ${variant === "center" ? "max-w-3xl mx-auto" : ""} ${variant === "left" ? "max-w-2xl" : ""}`}
        >
          <p
            className={`italic font-semibold leading-relaxed tracking-wide ${styles.subtitle} ${currentTheme.subtitle} relative drop-shadow-sm`}
          >
            <span className='relative inline-block px-2'>
              <span className='absolute -left-1 -top-2 text-brand-gold text-2xl font-bold opacity-80'>
                "
              </span>
              {subtitle}
              <span className='absolute -right-1 -bottom-2 text-brand-gold text-2xl font-bold opacity-80'>
                "
              </span>
            </span>
          </p>
        </div>
      )}

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
    </div>
  );
}
