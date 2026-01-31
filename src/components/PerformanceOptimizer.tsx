"use client";

import { useEffect, useMemo } from "react";
import { useIsMounted } from "@hooks/useIsMounted";
import { IMAGES } from "@lib/image-constants";

export default function PerformanceOptimizer() {
  const isMounted = useIsMounted();

  // Memoize critical resources list
  const criticalResources = useMemo(
    () => ({
      images: Object.values(IMAGES),
      domains: [
        "fonts.googleapis.com",
        "fonts.gstatic.com",
        "shubhhampers.s3.ap-south-1.amazonaws.com"
      ]
    }),
    []
  );

  useEffect(() => {
    // Only run after component is mounted (client-side only)
    if (!isMounted) return;

    // Stable performance optimizations
    const optimizePerformance = () => {
      // Preload critical images with high priority
      criticalResources.images.forEach(src => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });

      // DNS prefetch for external resources
      criticalResources.domains.forEach(domain => {
        const link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical origins
      const preconnectDomains = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"];

      preconnectDomains.forEach(url => {
        const existing = document.querySelector(`link[href="${url}"]`);
        if (!existing) {
          const link = document.createElement("link");
          link.rel = "preconnect";
          link.href = url;
          link.crossOrigin = "anonymous";
          document.head.appendChild(link);
        }
      });
    };

    // Optimize CSS rendering with stable APIs
    const optimizeCSSRendering = () => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(
          () => {
            // Prefetch critical CSS classes to warm up the browser cache
            const criticalClasses = [
              "font-display",
              "text-brand-dark",
              "bg-brand-gold",
              "animate-fade-in",
              "bg-gradient-to-br"
            ];

            const fragment = document.createDocumentFragment();
            criticalClasses.forEach(className => {
              const element = document.createElement("div");
              element.className = className;
              element.style.cssText = "position:absolute;top:-9999px;visibility:hidden;";
              fragment.appendChild(element);
            });

            document.body.appendChild(fragment);

            // Clean up after style calculation
            requestAnimationFrame(() => {
              if (document.body.contains(fragment)) {
                document.body.removeChild(fragment);
              }
            });
          },
          { timeout: 5000 }
        );
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(optimizeCSSRendering, 2000);
      }
    };

    // Optimize image loading with Intersection Observer
    const optimizeImageLoading = () => {
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;

                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  img.removeAttribute("data-src");
                  img.loading = "lazy";
                  img.decoding = "async";
                  imageObserver.unobserve(img);
                }
              }
            });
          },
          {
            rootMargin: "50px 0px",
            threshold: [0, 0.1, 0.5, 1]
          }
        );

        // Observe all images with data-src
        document.querySelectorAll("img[data-src]").forEach(img => {
          imageObserver.observe(img);
        });

        return () => imageObserver.disconnect();
      }
    };

    // Setup intelligent prefetching
    const setupPrefetching = () => {
      if ("IntersectionObserver" in window) {
        const prefetchObserver = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const element = entry.target as HTMLElement;
                const href = element.getAttribute("data-prefetch");

                if (href) {
                  const link = document.createElement("link");
                  link.rel = "prefetch";
                  link.href = href;
                  document.head.appendChild(link);
                  prefetchObserver.unobserve(element);
                }
              }
            });
          },
          { rootMargin: "200px" }
        );

        // Observe elements that should be prefetched
        document.querySelectorAll("[data-prefetch]").forEach(element => {
          prefetchObserver.observe(element);
        });

        return () => prefetchObserver.disconnect();
      }
    };

    // Performance monitoring with stable APIs
    const monitorPerformance = () => {
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {
            if (entry.entryType === "navigation") {
              const navEntry = entry as PerformanceNavigationTiming;
              // Performance Metrics collected
              void {
                ttfb: Math.round(navEntry.responseStart - navEntry.requestStart),
                domComplete: Math.round(navEntry.domComplete - navEntry.startTime),
                loadComplete: Math.round(navEntry.loadEventEnd - navEntry.startTime)
              };
            }
          });
        });

        try {
          observer.observe({ entryTypes: ["navigation"] });
        } catch {
          // Error observing performance metrics
        }

        return () => observer.disconnect();
      }
    };

    // Execute all optimizations
    optimizePerformance();
    optimizeCSSRendering();
    const cleanupImageLoading = optimizeImageLoading();
    const cleanupPrefetching = setupPrefetching();
    const cleanupPerformance = monitorPerformance();

    // Cleanup function
    return () => {
      cleanupImageLoading?.();
      cleanupPrefetching?.();
      cleanupPerformance?.();
    };
  }, [criticalResources, isMounted]);

  return null;
}

// Stable performance monitoring
export const measurePerformance = () => {
  if (typeof window === "undefined") return null;

  try {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;

    if (navigation) {
      const metrics = {
        // Core performance metrics
        ttfb: Math.round(navigation.responseStart - navigation.requestStart),
        domComplete: Math.round(navigation.domComplete - navigation.startTime),
        loadComplete: Math.round(navigation.loadEventEnd - navigation.startTime),

        // Network timing
        dns: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
        ssl: Math.round(navigation.connectEnd - navigation.secureConnectionStart),

        // Rendering metrics
        domInteractive: Math.round(navigation.domInteractive - navigation.startTime),
        firstPaint: 0 // Will be populated if available
      };

      // Get First Paint timing if available
      const paintEntries = performance.getEntriesByType("paint");
      const fp = paintEntries.find(entry => entry.name === "first-paint");
      if (fp) metrics.firstPaint = Math.round(fp.startTime);

      // Next.js 15 Performance metrics collected
      return metrics;
    }
  } catch {
    // Performance measurement failed
  }

  return null;
};
