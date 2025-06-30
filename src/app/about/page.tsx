"use client";

import Header from "@components/Header";
import Footer from "@components/Footer";
import { Button } from "@ui-kit/button";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="bg-gradient-to-br from-brand-light via-white to-brand-gold/5">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-amber/5"></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-bounce"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6">
                <span className="text-brand-brown font-semibold">✨ Our Story</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide">
                About Shubhampers
              </h1>

              <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                We're passionate about creating meaningful connections through thoughtful gifting.
                Every gift we curate tells a story of care, appreciation, and genuine human
                connection.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At Shubhampers, we believe that every gift is an opportunity to strengthen
                  relationships and create lasting memories. We're not just delivering packages –
                  we're delivering joy, appreciation, and genuine human connection.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether it's celebrating a festival, appreciating your team, or nurturing client
                  relationships, we're here to help you make every moment special and meaningful.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-brand-gold/10 rounded-xl">
                    <div className="text-3xl mb-2">💝</div>
                    <h3 className="font-semibold text-brand-brown mb-1">Thoughtful</h3>
                    <p className="text-sm text-gray-600">Every item carefully selected</p>
                  </div>
                  <div className="text-center p-4 bg-brand-amber/10 rounded-xl">
                    <div className="text-3xl mb-2">🤝</div>
                    <h3 className="font-semibold text-brand-brown mb-1">Personal</h3>
                    <p className="text-sm text-gray-600">Direct communication & care</p>
                  </div>
                  <div className="text-center p-4 bg-brand-brown/10 rounded-xl">
                    <div className="text-3xl mb-2">✨</div>
                    <h3 className="font-semibold text-brand-brown mb-1">Quality</h3>
                    <p className="text-sm text-gray-600">Premium products & service</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-3xl p-8 shadow-xl">
                  <div className="text-6xl mb-6 text-center">🎁</div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4 text-center">
                    Why We Started
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We noticed that many gifting experiences felt impersonal and generic. We wanted
                    to change that by creating a platform where every gift feels personal,
                    thoughtful, and meaningful. Our journey began with a simple belief: that the
                    best gifts are those that strengthen relationships and create genuine
                    connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                These core values guide everything we do and every relationship we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">💫</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Authenticity</h3>
                <p className="text-gray-600">
                  We believe in being genuine in everything we do. No corporate jargon, no empty
                  promises – just honest, transparent relationships.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Purpose</h3>
                <p className="text-gray-600">
                  Every gift we curate has a purpose – to strengthen relationships, show
                  appreciation, and create meaningful connections.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Growth</h3>
                <p className="text-gray-600">
                  We're constantly learning, improving, and growing together with our clients and
                  partners.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Partnership</h3>
                <p className="text-gray-600">
                  We see our clients as partners in creating meaningful experiences. Your success is
                  our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-brand-amber/20 to-brand-gold/20 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-brand-dark mb-6">How We Work</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-1">
                          Understanding Your Needs
                        </h4>
                        <p className="text-gray-600 text-sm">
                          We take time to understand your goals, values, and the relationships you
                          want to strengthen.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-1">Thoughtful Curation</h4>
                        <p className="text-gray-600 text-sm">
                          We carefully select items that align with your values and create
                          meaningful experiences.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-1">Personal Touch</h4>
                        <p className="text-gray-600 text-sm">
                          We add personal touches and ensure every detail reflects your care and
                          appreciation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-1">Ongoing Support</h4>
                        <p className="text-gray-600 text-sm">
                          We're here to support you throughout your gifting journey and help you
                          succeed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                  Our Approach
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We don't believe in one-size-fits-all solutions. Every client is unique, and every
                  relationship deserves personalized attention. That's why we work closely with you
                  to understand your specific needs and create gifting experiences that truly
                  matter.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  From the initial consultation to the final delivery, we're with you every step of
                  the way, ensuring that every gift reflects your values and strengthens your
                  relationships.
                </p>

                <Button className="bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  💬 Let's Start Your Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We're a small, passionate team dedicated to making every gifting experience special.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-gold to-brand-amber rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                  👨‍💼
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Founder & CEO</h3>
                <p className="text-gray-600 mb-4">
                  Passionate about creating meaningful connections through thoughtful gifting.
                </p>
                <div className="text-sm text-brand-gold">Vision & Strategy</div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-amber to-brand-brown rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                  👩‍💼
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Head of Curation</h3>
                <p className="text-gray-600 mb-4">
                  Expert in selecting the perfect items that create memorable experiences.
                </p>
                <div className="text-sm text-brand-gold">Product Selection</div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-brown to-brand-gold rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                  👨‍💻
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Customer Success</h3>
                <p className="text-gray-600 mb-4">
                  Dedicated to ensuring every client has an exceptional experience.
                </p>
                <div className="text-sm text-brand-gold">Client Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
                Ready to Create Something Special?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Let's work together to create gifting experiences that strengthen your relationships
                and make every moment meaningful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  💬 Get in Touch
                </Button>
                <Button className="bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-dark">
                  🎁 Explore Collections
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
