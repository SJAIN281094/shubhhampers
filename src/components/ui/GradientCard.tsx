/**
 * Reusable Gradient Card Component
 * Eliminates repeated gradient card patterns across components
 */

import React from "react";
import { cn } from "@lib/utils";

interface GradientCardProps {
  children: React.ReactNode;
  variant?: "gold" | "amber" | "brown" | "light";
  size?: "sm" | "md" | "lg";
  hover?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles = {
  gold: "from-brand-gold/20 to-brand-amber/20",
  amber: "from-brand-amber/20 to-brand-gold/20",
  brown: "from-brand-brown/20 to-brand-gold/20",
  light: "from-brand-light/20 to-brand-gold/10"
};

const sizeStyles = {
  sm: "p-4 rounded-xl",
  md: "p-6 md:p-8 rounded-2xl",
  lg: "p-8 md:p-12 rounded-3xl"
};

export default function GradientCard({
  children,
  variant = "gold",
  size = "md",
  hover = true,
  className = "",
  style
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br shadow-lg border border-brand-gold/20",
        variantStyles[variant],
        sizeStyles[size],
        hover && "hover:shadow-xl transition-shadow duration-200",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
