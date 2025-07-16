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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
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
