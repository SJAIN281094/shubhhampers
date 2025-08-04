/**
 * Reusable Section Header Component
 * Eliminates repeated section header patterns across components
 */

import React from "react";
import { cn } from "@lib/utils";
import FeatureTag from "../FeatureTag";

interface SectionHeaderProps {
  title: string;
  description?: string;
  tag?: {
    emoji?: string;
    text: string;
  };
  variant?: "center" | "left" | "hero";
  size?: "sm" | "md" | "lg";
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
    description: "text-sm sm:text-base",
    spacing: "mb-8"
  },
  md: {
    title: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    description: "text-base md:text-lg lg:text-xl",
    spacing: "mb-12 md:mb-16"
  },
  lg: {
    title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    description: "text-lg md:text-xl lg:text-2xl",
    spacing: "mb-16 md:mb-20"
  }
};

export default function SectionHeader({
  title,
  description,
  tag,
  variant = "center",
  size = "md",
  className = "",
  children
}: SectionHeaderProps) {
  const styles = sizeStyles[size];

  return (
    <div className={cn(variantStyles[variant], styles.spacing, className)}>
      {/* Feature Tag */}
      {tag && (
        <FeatureTag className={cn("mb-6 md:mb-8", variant === "left" && "mx-0")}>
          {tag.emoji && `${tag.emoji} `}
          {tag.text}
        </FeatureTag>
      )}

      {/* Title */}
      <h2
        className={cn(
          "font-display font-bold text-brand-brown mb-4 md:mb-6 tracking-wide",
          styles.title
        )}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "text-gray-700 leading-relaxed px-4 md:px-0",
            styles.description,
            variant === "center" && "max-w-4xl mx-auto",
            variant === "left" && "max-w-3xl"
          )}
        >
          {description}
        </p>
      )}

      {/* Additional content */}
      {children}
    </div>
  );
}
