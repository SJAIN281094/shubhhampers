import type { Metadata } from "next";
import Header from "@components/Header";
import HeroSlider from "@components/HeroSlider";
import OurApproachSection from "@components/OurApproachSection";
import EventsSection from "@components/EventsSection";
import HowWeWorkSection from "@components/HowWeWorkSection";
import CTASection from "@components/CTASection";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "Shubhhampers - Premium Corporate & Personal Hampers | Build Meaningful Relationships",
  description:
    "Transform your relationships with thoughtfully curated hampers. Specializing in corporate employee appreciation, wedding celebrations, festival hampers, and personal milestones. Premium quality, authentic service.",
  keywords: [
    "premium hampers India",
    "corporate hampers",
    "employee appreciation hampers",
    "wedding hampers",
    "festival hampers",
    "business relationship building",
    "custom hamper curation",
    "luxury hamper delivery",
    "professional hamper service",
    "thoughtful corporate gifts"
  ],
  openGraph: {
    title: "Shubhhampers - Premium Corporate & Personal Hampers",
    description:
      "Transform your relationships with thoughtfully curated hampers. Corporate appreciation, weddings, festivals & personal celebrations.",
    images: ["/logo-dark.png"]
  },
  twitter: {
    title: "Shubhhampers - Premium Corporate & Personal Hampers",
    description:
      "Transform your relationships with thoughtfully curated hampers. Corporate appreciation, weddings, festivals & personal celebrations.",
    images: ["/logo-dark.png"]
  }
};

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <HeroSlider />
      <OurApproachSection />
      <EventsSection />
      <HowWeWorkSection />
      <CTASection />
      <Footer />
    </main>
  );
}
