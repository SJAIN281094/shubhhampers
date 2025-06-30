"use client";

import Header from "@components/Header";
import HeroSlider from "@components/HeroSlider";
import EventsSection from "@components/EventsSection";
import CTASection from "@components/CTASection";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <HeroSlider />
      <EventsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
