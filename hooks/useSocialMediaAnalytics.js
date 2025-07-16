"use client";

import { useState, useEffect } from "react";

const SocialMediaAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    shares: {
      facebook: 0,
      instagram: 0,
      whatsapp: 0,
      twitter: 0,
      linkedin: 0,
      pinterest: 0,
    },
    engagement: {
      totalShares: 0,
      totalViews: 0,
      clickThroughRate: 0,
    },
  });

  useEffect(() => {
    // Track page views for social media analytics
    if (typeof window !== "undefined") {
      // Google Analytics event
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_title: document.title,
          page_location: window.location.href,
        });
      }

      // Facebook Pixel event
      if (window.fbq) {
        window.fbq("track", "ViewContent", {
          content_type: "product_catalog",
          content_category: "gift_hampers",
        });
      }

      // Load analytics data from localStorage or API
      const savedAnalytics = localStorage.getItem("shubhhampers_analytics");
      if (savedAnalytics) {
        setAnalytics(JSON.parse(savedAnalytics));
      }
    }
  }, []);

  const trackSocialShare = (platform) => {
    const newAnalytics = {
      ...analytics,
      shares: {
        ...analytics.shares,
        [platform]: analytics.shares[platform] + 1,
      },
      engagement: {
        ...analytics.engagement,
        totalShares: analytics.engagement.totalShares + 1,
      },
    };

    setAnalytics(newAnalytics);
    localStorage.setItem(
      "shubhhampers_analytics",
      JSON.stringify(newAnalytics)
    );

    // Send to Google Analytics
    if (window.gtag) {
      window.gtag("event", "share", {
        method: platform,
        content_type: "gift_hamper",
        item_id: window.location.pathname,
      });
    }

    // Send to Facebook Pixel
    if (window.fbq) {
      window.fbq("track", "Share", {
        content_type: "product",
        content_category: "gift_hampers",
      });
    }
  };

  return {
    analytics,
    trackSocialShare,
  };
};

export default SocialMediaAnalytics;
