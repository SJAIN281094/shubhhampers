import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import ContextProvider from "@/Context/Context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "The Little Basket",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "The Little Basket",
    "Gifts",
    "Gifting",
    "Gift Baskets",
    "Gift Boxes",
    "Gift Delivery",
    "Personalized Gifts",
    "Custom Gifts",
    "Luxury Gifts",
    "Unique Gifts",
  ],
  authors: [
    {
      name: "The Little Basket",
      url: "https://thelittlebasket.com",
    },
  ],
  creator: "The Little Basket",
  publisher: "The Little Basket",
  description:
    "The Little Basket is a gifting company that specializes in creating unique and personalized gift baskets and boxes for all occasions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${inter.className}`}>
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
