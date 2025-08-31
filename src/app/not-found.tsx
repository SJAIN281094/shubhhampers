import Link from "next/link";
import { Button } from "@ui-kit/button";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SectionHeader from "@components/ui/SectionHeader";

export default function GlobalNotFound() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="bg-gradient-to-br from-brand-light via-white to-brand-gold/5">
        <section className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-brand-gold/8" />
          <div className="absolute top-10 right-10 w-40 h-40 bg-brand-gold/15 rounded-full opacity-60" />
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/20 rounded-full opacity-50" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* SEO H1 - Hidden but accessible */}
            <h1 className="sr-only">Page Not Found - 404 Error</h1>

            <SectionHeader
              title="Page Not Found"
              description="We couldn't find the page you're looking for. Let's get you back to exploring our amazing hamper collections!"
              variant="center"
              size="lg"
              showDecorations={true}
              tag={{
                emoji: "🔍",
                text: "404 Error"
              }}
            />

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link href="/">
                <Button className="bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  🏠 Go Home
                </Button>
              </Link>
              <Link href="/hampers">
                <Button className="bg-white text-brand-brown font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-brand-gold hover:bg-brand-gold/10">
                  🎁 Browse Hampers
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
