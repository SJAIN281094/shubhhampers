"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  var __BUILD_TIME__: string;
  var __APP_VERSION__: string;
}

interface CacheInvalidatorProps {
  checkInterval?: number; // in milliseconds
}

export default function CacheInvalidator({ checkInterval = 5 * 60 * 1000 }: CacheInvalidatorProps) {
  const [isMounted, setIsMounted] = useState(false);
  const lastBuildTime = useRef<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const checkForUpdates = async () => {
    try {
      // Check for app version changes by fetching a lightweight endpoint
      const response = await fetch("/", {
        method: "HEAD",
        cache: "no-cache"
      });

      const serverTimestamp = response.headers.get("X-Cache-Timestamp");

      // Initialize on first load - use a stable fallback instead of Date.now()
      if (lastBuildTime.current === null) {
        lastBuildTime.current = serverTimestamp || "initial";
        return;
      }

      // Check if there's a new deployment
      if (serverTimestamp && serverTimestamp !== lastBuildTime.current) {
        console.log("🔄 New deployment detected! Refreshing cache...");

        // Clear all caches
        if ("caches" in window) {
          const cacheNames = await caches.keys();
          await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
        }

        // Force reload to get latest version
        window.location.reload();
      }
    } catch (error) {
      console.error("Cache invalidation check failed:", error);
    }
  };

  const setupUpdateChecker = () => {
    // Check immediately
    checkForUpdates();

    // Set up periodic checks
    intervalRef.current = setInterval(checkForUpdates, checkInterval);
  };

  // Prevent hydration mismatch by only running after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run after component is mounted (client-side only)
    if (!isMounted) return;

    // Setup update checker
    setupUpdateChecker();

    // Check when page becomes visible (user returns to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkForUpdates();
      }
    };

    // Check when user comes back online
    const handleOnline = () => {
      checkForUpdates();
    };

    // Check when focus returns to window
    const handleFocus = () => {
      checkForUpdates();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("online", handleOnline);
    window.addEventListener("focus", handleFocus);

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("focus", handleFocus);
    };
  }, [checkInterval, isMounted]);

  // This component doesn't render anything
  return null;
}

// Export utility functions for manual cache management
export const clearApplicationCache = async () => {
  try {
    // Clear service worker caches
    if ("caches" in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
      console.log("🧹 Application caches cleared");
    }

    // Clear localStorage (if needed for your app)
    if (typeof Storage !== "undefined") {
      // Only clear specific app-related items, not all localStorage
      const keysToRemove = Object.keys(localStorage).filter(
        key => key.startsWith("shubhhampers-") || key.startsWith("app-")
      );
      keysToRemove.forEach(key => localStorage.removeItem(key));
    }

    return true;
  } catch (error) {
    console.error("Failed to clear application cache:", error);
    return false;
  }
};

export const forceAppRefresh = () => {
  // Force a hard refresh with cache bypass
  window.location.reload();
};
