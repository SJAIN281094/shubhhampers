"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface OptimizedInstagramEmbedProps {
  url: string;
  className?: string;
}

export default function OptimizedInstagramEmbed({
  url,
  className = ""
}: OptimizedInstagramEmbedProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Only load Instagram script when this component becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("instagram-embed-container");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleScriptLoad = () => {
    setIsLoaded(true);
    // Process Instagram embeds after script loads
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  };

  return (
    <div id="instagram-embed-container" className={className}>
      {isVisible && (
        <>
          <Script
            src="https://www.instagram.com/embed.js"
            strategy="lazyOnload"
            onLoad={handleScriptLoad}
          />

          {/* Instagram Embed Container */}
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
              width: "99.375%"
            }}
          >
            {!isLoaded && (
              <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Loading Instagram post...</p>
                </div>
              </div>
            )}

            <a href={url} target="_blank" rel="noopener noreferrer">
              View this post on Instagram
            </a>
          </blockquote>
        </>
      )}

      {!isVisible && (
        <div className="flex items-center justify-center p-8 bg-gradient-to-br from-brand-light/50 to-brand-gold/10 rounded-lg border border-brand-gold/20">
          <div className="text-center">
            <div className="text-4xl mb-2">📸</div>
            <p className="text-sm text-gray-600">Instagram content will load when visible</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Extend window interface for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
