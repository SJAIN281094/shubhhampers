import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";
import BusinessHero from "@components/BusinessHero";
import BusinessUseCases from "@components/BusinessUseCases";
import BusinessBenefits from "@components/BusinessBenefits";
import BusinessCTA from "@components/BusinessCTA";

export const metadata: Metadata = {
  title:
    "Business Hamper Solutions - Corporate Employee Appreciation & Client Relations | Shubhhampers",
  description:
    "Strengthen your business relationships with strategic corporate hampers. Employee recognition, client appreciation, team building, and business milestone celebrations. Professional hamper curation for measurable ROI.",
  keywords: [
    "business hampers",
    "corporate hampers",
    "employee appreciation hampers",
    "client appreciation hampers",
    "corporate gift solutions",
    "business relationship building",
    "employee recognition hampers",
    "B2B hamper services",
    "corporate milestone hampers",
    "team building hampers",
    "business celebration hampers",
    "professional hamper curation",
    "corporate gifting strategy",
    "bulk corporate hampers",
    "business client hampers"
  ],
  openGraph: {
    title: "Business Hamper Solutions - Corporate Employee & Client Appreciation",
    description:
      "Strengthen business relationships with strategic corporate hampers. Employee recognition, client appreciation, measurable ROI.",
    images: ["/logo-dark.png"]
  },
  twitter: {
    title: "Business Hamper Solutions - Corporate Employee & Client Appreciation",
    description:
      "Strengthen business relationships with strategic corporate hampers. Employee recognition, client appreciation, measurable ROI.",
    images: ["/logo-dark.png"]
  }
};

export default function BusinessPage() {
  return (
    <main className='min-h-screen'>
      <Header />

      <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
        <BusinessHero />
        <BusinessUseCases />
        <BusinessBenefits />
        <BusinessCTA />
      </div>

      <Footer />
    </main>
  );
}
