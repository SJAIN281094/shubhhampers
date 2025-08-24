/**
 * Reusable Loading Component
 * Handles all loading states across the application
 */

import React from "react";
import { cn } from "@lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "skeleton" | "inline";
  message?: string;
  className?: string;
}

const sizeStyles = {
  sm: {
    spinner: "w-6 h-6",
    text: "text-sm"
  },
  md: {
    spinner: "w-8 h-8",
    text: "text-base"
  },
  lg: {
    spinner: "w-12 h-12",
    text: "text-lg"
  }
};

export default function Loading({
  size = "md",
  variant = "spinner",
  message = "Loading...",
  className = ""
}: LoadingProps) {
  const styles = sizeStyles[size];

  if (variant === "spinner") {
    return (
      <div className={cn("text-center py-12", className)}>
        <div
          className={cn(
            "animate-spin border-4 border-brand-gold border-t-transparent rounded-full mx-auto mb-4",
            styles.spinner
          )}
        />
        <p className={cn("text-brand-brown font-medium", styles.text)}>{message}</p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={cn("flex items-center gap-2 text-brand-brown", styles.text, className)}>
        <div
          className={cn(
            "animate-spin border-2 border-brand-gold border-t-transparent rounded-full",
            styles.spinner
          )}
        />
        {message}
      </div>
    );
  }

  if (variant === "skeleton") {
    return (
      <div className={cn("space-y-4", className)}>
        <div className='h-6 bg-brand-gold/20 rounded w-48 animate-pulse' />
        <div className='space-y-3'>
          <div className='h-4 bg-gray-200 rounded animate-pulse' />
          <div className='h-4 bg-gray-200 rounded w-5/6 animate-pulse' />
          <div className='h-4 bg-gray-200 rounded w-3/4 animate-pulse' />
        </div>
      </div>
    );
  }

  return null;
}

// Predefined loading variants for common use cases
export const LoadingVariants = {
  hampers: {
    initial: {
      size: "lg" as const,
      message: "Loading hampers from our collection..."
    },
    more: {
      size: "md" as const,
      message: "Loading more hampers..."
    }
  },
  articles: {
    initial: {
      size: "lg" as const,
      message: "Loading articles..."
    },
    more: {
      size: "md" as const,
      message: "Loading more articles..."
    }
  },
  content: {
    initial: {
      size: "md" as const,
      message: "Loading content..."
    }
  }
};

// Specialized loading components for specific scenarios
export function LoadingCard({ className = "" }: { className?: string }) {
  return (
    <div className={cn("bg-white rounded-lg p-4 shadow-sm border", className)}>
      <div className='animate-pulse space-y-4'>
        <div className='bg-gray-200 h-40 rounded' />
        <div className='space-y-2'>
          <div className='h-4 bg-gray-200 rounded w-3/4' />
          <div className='h-4 bg-gray-200 rounded w-1/2' />
        </div>
      </div>
    </div>
  );
}

export function LoadingGrid({ items = 6, className = "" }: { items?: number; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {Array.from({ length: items }, (_, index) => (
        <LoadingCard key={`loading-card-${index}`} />
      ))}
    </div>
  );
}
