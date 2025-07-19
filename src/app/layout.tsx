import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shubhhampers.com"),
  title: "Shubhhampers - Premium Hampers that Build Relationships",
  description:
    "Shubhhampers specializes in creating unique and personalized hampers for corporate clients, weddings, festivals, and special occasions. Building meaningful relationships through thoughtful hamper curation.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Shubhhampers",
    title: "Shubhhampers - Premium Hampers that Build Relationships",
    description:
      "Transform your relationships with thoughtfully curated hampers. Corporate appreciation, employee recognition, weddings, festivals & personal celebrations.",
    images: [
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers - Premium Hampers that Build Relationships"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhhampers - Premium Hampers that Build Relationships",
    description:
      "Discover handcrafted hampers perfect for corporate appreciation, weddings, festivals, and personal celebrations.",
    images: [
      "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image.png"
    ],
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}');`
          }}
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Poppins:wght@400;500&display=swap'
          rel='stylesheet'
        />

        {/* Structured Data for Organization */}
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
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_ENV === "production" && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
        )}
        {process.env.NEXT_PUBLIC_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `
            }}
          />
        )}
        {process.env.NEXT_PUBLIC_ENV === "production" && (
          <script async src='https://www.instagram.com/embed.js' />
        )}
      </head>
      <body className='antialiased'>
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
      </body>
    </html>
  );
}
