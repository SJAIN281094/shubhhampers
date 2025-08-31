/**
 * Reusable Decorative Background Component
 * Eliminates repeated decorative background patterns
 */

import React from "react";
import { cn } from "@lib/utils";

interface FloatingElement {
  id: string;
  size: "sm" | "md" | "lg" | "xl";
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center-left"
    | "center-right";
  animation: "pulse" | "bounce" | "none";
  color: "gold" | "amber" | "brown" | "light";
  delay?: string;
}

interface DecorativeBackgroundProps {
  variant?: "subtle" | "moderate" | "rich";
  elements?: FloatingElement[];
  className?: string;
  children?: React.ReactNode;
}

const sizeStyles = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-40 h-40"
};

const positionStyles = {
  "top-left": "top-10 left-10",
  "top-right": "top-10 right-10",
  "bottom-left": "bottom-10 left-10",
  "bottom-right": "bottom-10 right-10",
  "center-left": "top-1/3 left-1/4",
  "center-right": "bottom-1/3 right-1/4"
};

const colorStyles = {
  gold: "bg-brand-gold/25",
  amber: "bg-brand-amber/30",
  brown: "bg-brand-brown/20",
  light: "bg-brand-light/20"
};

const animationStyles = {
  pulse: "animate-pulse",
  bounce: "animate-bounce",
  none: ""
};

const defaultElements: FloatingElement[] = [
  {
    id: "element-1",
    size: "lg",
    position: "top-right",
    animation: "pulse",
    color: "gold"
  },
  {
    id: "element-2",
    size: "md",
    position: "bottom-left",
    animation: "bounce",
    color: "amber"
  },
  {
    id: "element-3",
    size: "md",
    position: "center-left",
    animation: "pulse",
    color: "light",
    delay: "delay-300"
  },
  {
    id: "element-4",
    size: "sm",
    position: "center-right",
    animation: "bounce",
    color: "gold",
    delay: "delay-500"
  }
];

const variantBackgrounds = {
  subtle: "bg-gradient-to-br from-brand-brown/10 via-brand-dark/20 to-brand-brown/10",
  moderate: "bg-gradient-to-br from-brand-brown/20 via-brand-dark/40 to-brand-brown/20",
  rich: "bg-gradient-to-br from-brand-dark via-brand-brown/20 to-brand-dark"
};

export default function DecorativeBackground({
  variant = "moderate",
  elements = defaultElements,
  className = "",
  children
}: DecorativeBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Main Background */}
      <div className={cn("absolute inset-0", variantBackgrounds[variant])} />

      {/* Floating Elements */}
      {elements.map(element => (
        <div
          key={element.id}
          className={cn(
            "absolute rounded-full blur-xl",
            sizeStyles[element.size],
            positionStyles[element.position],
            colorStyles[element.color],
            animationStyles[element.animation],
            element.delay || ""
          )}
        />
      ))}

      {/* Geometric Decorations */}
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

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
