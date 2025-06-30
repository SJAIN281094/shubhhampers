import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubhampers - Gifts that connect hearts.",
  description: "Shubhampers - Gifts that connect hearts."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Poppins:wght@400;500&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
