import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string; // Original image name (e.g., "business-celebration.png")
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  loading?: "lazy" | "eager";
  placeholder?: "blur" | "empty";
}

const OPTIMIZED_BASE_PATH = "/optimized";

// Generate blur data URL for smooth loading
function generateBlurDataURL(): string {
  return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";
}

export default function OptimizedImage({
  src,
  alt,
  fill = false,
  className = "",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  quality = 90,
  loading = "lazy",
  placeholder = "blur",
  ...props
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [webpError, setWebpError] = useState(false);

  // Extract filename without extension
  const baseName = src.replace(/\.[^/.]+$/, "");

  // Choose the best available format
  const getImageSrc = () => {
    if (!webpError && !imageError) {
      // Try WebP first (94% smaller!)
      return `${OPTIMIZED_BASE_PATH}/${baseName}.webp`;
    } else if (!imageError) {
      // Fall back to optimized PNG
      return `${OPTIMIZED_BASE_PATH}/${baseName}-optimized.png`;
    } else {
      // Ultimate fallback to original
      return src;
    }
  };

  const handleImageError = () => {
    if (!webpError) {
      // First error - try PNG fallback
      setWebpError(true);
    } else {
      // Second error - use original
      setImageError(true);
    }
  };

  // For modern browsers that support multiple formats
  const modernImageProps = {
    src: getImageSrc(),
    alt: alt || "", // Ensure alt is always provided
    fill,
    className,
    priority,
    quality,
    loading: priority ? "eager" : loading,
    placeholder,
    blurDataURL: placeholder === "blur" ? generateBlurDataURL() : undefined,
    onError: handleImageError,
    sizes: fill ? sizes : undefined,
    ...props
  };

  // Next.js Image handles responsive images automatically with the sizes prop

  return (
    <>
      {/* Modern browsers with WebP/AVIF support */}
      <Image {...modernImageProps} alt={alt || ""} />

      {/* Preload critical images for better performance */}
      {priority && !imageError && (
        <>
          <link
            rel='preload'
            as='image'
            href={`${OPTIMIZED_BASE_PATH}/${baseName}.webp`}
            type='image/webp'
          />
          {/* Preload AVIF for ultra-modern browsers */}
          <link
            rel='preload'
            as='image'
            href={`${OPTIMIZED_BASE_PATH}/${baseName}.avif`}
            type='image/avif'
          />
        </>
      )}
    </>
  );
}

// Hook for responsive image breakpoints
export function useImageBreakpoint() {
  if (typeof window === "undefined") return "lg";

  const width = window.innerWidth;
  if (width < 640) return "sm";
  if (width < 1024) return "md";
  return "lg";
}

// Utility function to get the optimal image URL for a given breakpoint
export function getOptimalImageUrl(baseName: string, breakpoint?: string): string {
  const bp = breakpoint || "lg";
  const suffix = bp === "lg" ? "" : `-${bp}`;
  return `${OPTIMIZED_BASE_PATH}/${baseName}${suffix}.webp`;
}
