import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import "./globals.css";

// Font configurations using Next.js optimized font loading
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

// Dynamic imports for client-side only components to prevent hydration issues
const PerformanceOptimizer = dynamic(() => import("@components/PerformanceOptimizer"));

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shubhhampers.com"),
  // Global fallback metadata - will be overridden by page-specific metadata
  title: {
    default: "Premium Gift Hampers & Baskets | Shubhhampers",
    template: "%s | Shubhhampers"
  },
  description:
    "Premium gift hampers for corporate clients, weddings & festivals. Custom curated baskets that build meaningful relationships. Order today!",
  alternates: {
    canonical: "https://www.shubhhampers.com"
  },
  icons: {
    icon: "/logo-dark.png",
    shortcut: "/logo-dark.png",
    apple: "/logo-dark.png"
  },
  keywords: [
    // Core Hamper Keywords
    "Shubhhampers",
    "Premium Hampers",
    "Hamper Delivery",
    "Custom Hampers",
    "Luxury Hampers",
    "Unique Hampers",
    "Corporate Hampers",
    "Wedding Hampers",
    "Festival Hampers",
    "Personal Hampers",
    "Business Hampers",
    "Hamper Curation",
    "Hamper Boxes",
    "Hamper Services",
    "Hamper Consultation",
    "Hamper Personalization",
    "Hamper Ideas",
    "Hamper Shop",
    "Online Hampers",
    "Hamper Store",
    "Hamper Packaging",
    "Hamper Experience",
    // Business & Corporate Keywords
    "Employee Appreciation Hampers",
    "Client Hampers",
    "Professional Hampers",
    "Corporate Hampers India",
    "Office Hampers",
    "Team Building Hampers",
    "Business Relationship Hampers",
    "B2B Hampers",
    // Regional & Local Keywords
    "Indian Hampers",
    "Traditional Hampers",
    "Modern Indian Hampers",
    "Local Artisan Hampers",
    "Handcrafted Indian Hampers",
    // Seasonal & Festival Keywords
    "Diwali Hampers",
    "Holi Hampers",
    "Rakhi Hampers",
    "Karva Chauth Hampers",
    "Christmas Hampers India",
    "New Year Hampers",
    "Valentine's Day Hampers",
    "Mother's Day Hampers India",
    "Father's Day Hampers India",
    // Wedding Keywords
    "Wedding Welcome Hampers",
    "Wedding Return Hampers",
    "Wedding Guest Hampers",
    "Bridal Hampers",
    "Wedding Celebration Hampers",
    // Emotional & Experience Keywords
    "Memorable Hampers",
    "Thoughtful Hampers",
    "Emotional Hampers",
    "Heartfelt Hampers",
    "Special Moment Hampers",
    "Celebration Hampers",
    "Relationship Building Hampers",
    // Quality & Premium Keywords
    "Premium Hamper Collections",
    "Luxury Hamper Boxes",
    "High-End Hampers",
    "Exclusive Hampers",
    "Designer Hampers",
    "Curated Hamper Collections",
    // Social Media & Trending Keywords
    "Instagram Worthy Hampers",
    "Unboxing Experience Hampers",
    "Surprise Hampers",
    "Shareable Hampers"
  ],
  authors: [
    {
      name: "Shubhhampers",
      url: "https://www.shubhhampers.com"
    }
  ],
  creator: "Shubhhampers",
  publisher: "Shubhhampers",
  // Removed duplicate Open Graph tags - each page will define its own
  // Global Twitter fallback
  twitter: {
    card: "summary_large_image",
    creator: "@shubhhampers",
    site: "@shubhhampers"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Optimized Font Loading with preconnect and font-display swap */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

        {/* Load Bonheur Royale font (not available in Next.js fonts) */}
        <link
          href='https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap'
          rel='stylesheet'
        />

        {/* Critical Structured Data - Load immediately */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shubhhampers",
              url: "https://www.shubhhampers.com",
              logo: "https://www.shubhhampers.com/logo-dark.png",
              description:
                "Premium hamper curation service specializing in corporate hampers, wedding hampers, and festival celebrations",
              sameAs: [
                "https://www.instagram.com/shubhhampers_",
                "https://www.linkedin.com/company/shubhhampers"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 96858 47274",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
                email: "connect@shubhhampers.com"
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "India"
              },
              foundingDate: "2024",
              numberOfEmployees: "2-10",
              serviceArea: {
                "@type": "Country",
                name: "India"
              }
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {/* Performance Optimizer - Preloads critical resources and optimizes rendering */}
        <PerformanceOptimizer />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            title='Google Tag Manager'
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`}
            height='0'
            width='0'
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* OPTIMIZED EXTERNAL SCRIPTS */}

        {/* Google Tag Manager - Critical for analytics */}
        <Script
          id='google-tag-manager'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}');`
          }}
        />

        {/* Google Analytics - Load after page becomes interactive */}
        {process.env.NEXT_PUBLIC_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              strategy='afterInteractive'
            />
            <Script
              id='google-analytics'
              strategy='afterInteractive'
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
