import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import ContextProvider from "@/Context/Context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Shubhhampers",
  icons: {
    icon: "/shubhhampers-mini.png",
    shortcut: "/shubhhampers-mini.png",
    apple: "/shubhhampers-mini.png",
  },
  keywords: [
    "Shubhhampers",
    "Gifts",
    "Gifting",
    "Corporate",
    "Gift Hampers",
    "Gift Boxes",
    "Gift Delivery",
    "Personalized Gifts",
    "Custom Gifts",
    "Luxury Gifts",
    "Unique Gifts",
    "Corporate Gifts",
    "Occasion Gifts",
    "Birthday Gifts",
    "Anniversary Gifts",
    "Wedding Gifts",
    "Festival Gifts",
    "Gift Ideas",
    "Gift Shop",
    "Online Gifts",
    "Gift Store",
    "Gift Basket",
    "Gift Packaging",
    "Gift Accessories",
    "Gift Experience",
    "Gift Services",
    "Gift Consultation",
    "Gift Personalization",
    "Gift Trends",
    "Gift Inspiration",
    "Gift Recommendations",
    "Gift Shopping",
    "Gift Enthusiasts",
    "Gift Lovers",
    "Gift Enthusiast",
    "Gift Lover",
    "Gift Givers",
    "Gift Giving",
    "Gift Culture",
    "Gift Community",
    "Gift Enthusiast Community",
    "Gift Lover Community",
    "Gift Giver Community",
    "Gift Giving Community",
    "Gift Enthusiast Culture",
    "Gift Lover Culture",
    // Social Media & Trending Keywords
    "Viral Gifts",
    "Trending Gifts",
    "Instagram Worthy Gifts",
    "Social Media Gifts",
    "Shareable Gifts",
    "Photogenic Gifts",
    "Unboxing Experience",
    "Gift Reveal",
    "Surprise Gifts",
    // Regional & Local Keywords
    "Indian Gifts",
    "Desi Gifts",
    "Traditional Gifts",
    "Modern Indian Gifts",
    "Local Artisan Gifts",
    "Handcrafted Indian Gifts",
    // Seasonal & Festival Keywords
    "Diwali Gifts",
    "Holi Gifts",
    "Rakhi Gifts",
    "Karva Chauth Gifts",
    "Christmas Gifts India",
    "New Year Gifts",
    "Valentine's Day Gifts",
    "Mother's Day Gifts India",
    "Father's Day Gifts India",
    // Emotional & Experience Keywords
    "Memorable Gifts",
    "Thoughtful Gifts",
    "Emotional Gifts",
    "Heartfelt Gifts",
    "Special Moments",
    "Celebration Gifts",
    "Joy Gifts",
    "Happiness Gifts",
    "Love Gifts",
    // Business & Corporate Keywords
    "Employee Appreciation Gifts",
    "Client Gifts",
    "Business Gifts",
    "Professional Gifts",
    "Corporate Hampers India",
    "Office Gifts",
    "Team Building Gifts",
    // Luxury & Premium Keywords
    "Premium Gift Hampers",
    "Luxury Gift Boxes",
    "High-End Gifts",
    "Exclusive Gifts",
    "Designer Gift Hampers",
    "Curated Gift Collections",
  ],
  authors: [
    {
      name: "Shubhhampers",
      url: "https://www.shubhhampers.com",
    },
  ],
  creator: "Shubhhampers",
  publisher: "Shubhhampers",
  description:
    "Shubhhampers is a gifting company that specializes in creating unique and personalized gift hampers and boxes for all occasions.",
  openGraph: {
    title: "Shubhhampers - Unique & Personalized Gift Hampers",
    description:
      "Shubhhampers is a gifting company that specializes in creating unique and personalized gift hampers and boxes for all occasions.",
    url: "https://www.shubhhampers.com",
    siteName: "Shubhhampers",
    images: [
      {
        url: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image.png",
        width: 1200,
        height: 630,
        alt: "Shubhhampers - Premium Gift Hampers",
      },
    ],
    locale: "en_US",
    type: "website",
    // Additional OpenGraph properties for better social sharing
    countryName: "India",
    region: "India",
    phoneNumber: "+91-9685847274",
    email: "connect@shubhhampers.com",
    streetAddress: "DLF Industrial Area, Faridabad, Haryana",
    locality: "Faridabad",
    postalCode: "121003",
    // // Rich media properties
    // video:
    //   "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/corporate-hampers/hampers-corporate_video_1.mp4", // Add if you have brand videos
    // audio:
    //   "https://the-little-basket.s3.us-east-1.amazonaws.com/audio/brand_jingle.mp3", // Add if you have audio content
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhhampers - Unique & Personalized Gift Hampers",
    description:
      "Shubhhampers is a gifting company that specializes in creating unique and personalized gift hampers and boxes for all occasions.",
    images: [
      "https://the-little-basket.s3.us-east-1.amazonaws.com/images/social-media/social_media_meta_image.png",
    ],
    creator: "@shubhhampers",
    site: "@shubhhampers",
  },
  // Additional social media metadata
  // facebook: {
  //   appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
  // },
  // LinkedIn specific metadata
  linkedin: {
    title: "Shubhhampers - Premium Corporate & Personal Gift Solutions",
    description:
      "Discover handcrafted gift hampers perfect for corporate gifting, special occasions, and personal celebrations. Unique, personalized, and delivered with care.",
  },
  // Instagram metadata
  instagram: {
    username: "@shubhhampers_",
  },
  // WhatsApp sharing metadata
  whatsapp: {
    title: "Check out Shubhhampers - Amazing Gift Hampers!",
    description: "🎁 Unique & Personalized Gift Hampers for Every Occasion 🎁",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
            `,
            }}
          />
        )}

        {/* Facebook Pixel */}
        {process.env.NEXT_PUBLIC_ENV === "production" &&
          process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
              }}
            />
          )}

        {/* Instagram Integration */}
        {process.env.NEXT_PUBLIC_ENV === "production" && (
          <script async src="https://www.instagram.com/embed.js" />
        )}

        {/* WhatsApp Business API */}
        {process.env.NEXT_PUBLIC_ENV === "production" &&
          process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.WhatsAppWidget = {
                  config: {
                    phoneNumber: '${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}',
                    message: 'Hi! I am interested in your gift hampers.',
                    position: 'right'
                  }
                };
              `,
              }}
            />
          )}

        {/* LinkedIn Insight Tag */}
        {process.env.NEXT_PUBLIC_ENV === "production" &&
          process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                _linkedin_partner_id = "${process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              `,
              }}
            />
          )}

        {/* Twitter/X Pixel */}
        {process.env.NEXT_PUBLIC_ENV === "production" &&
          process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
                },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
                a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
                twq('init','${process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID}');
                twq('track','PageView');
              `,
              }}
            />
          )}

        {/* Structured Data for Social Media */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shubhhampers",
              url: "https://www.shubhhampers.com",
              logo: "https://www.shubhhampers.com/logo.png",
              sameAs: [
                "https://www.facebook.com/shubhhampers",
                "https://www.instagram.com/shubhhampers_",
                "https://www.twitter.com/shubhhampers",
                "https://www.linkedin.com/company/shubh-hampers",
                "https://www.youtube.com/channel/shubhhampers",
                "https://www.pinterest.com/shubhhampers",
                "https://wa.me/" +
                  (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""),
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9685847274",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />
      </head>
      <body className={`bg-gray-100 mt-[96px] ${inter.className}`}>
        <NextTopLoader color="#000" height={4} />
        <ContextProvider>
          <Header />
          <Toaster position="top-right" reverseOrder={false} />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
