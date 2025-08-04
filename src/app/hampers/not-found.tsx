import Link from "next/link";
import { Button } from "@ui-kit/button";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function HamperNotFound() {
  return (
    <main className='min-h-screen'>
      <Header />

      <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
        <section className='relative py-20 overflow-hidden'>
          {/* Background Elements */}
          <div className='absolute inset-0 bg-brand-gold/8' />
          <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/15 rounded-full opacity-60' />
          <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/20 rounded-full opacity-50' />

          <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='text-center max-w-4xl mx-auto'>
              <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6'>
                <span className='text-brand-brown font-semibold'>🔍 Page Not Found</span>
              </div>

              <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
                Hamper Not Found
              </h1>

              <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
                {`We couldn't find the hamper you're looking for. But don't worry, we have plenty of
                amazing hampers waiting for you!`}
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link href='/hampers'>
                  <Button className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'>
                    🎁 Explore All Hampers
                  </Button>
                </Link>
                <Link href='/contact'>
                  <Button className='bg-white text-brand-brown font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-brand-gold hover:bg-brand-gold/10'>
                    💬 Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
