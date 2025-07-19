"use client";

import { useRouter } from "next/navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Button } from "@ui-kit/button";

export default function ServicesPage() {
  const router = useRouter();

  return (
    <main className='min-h-screen'>
      <Header />

      <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
        {/* Hero Section */}
        <section className='relative py-20 overflow-hidden'>
          {/* Background Elements with Golden Touch */}
          <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/15 via-transparent to-brand-amber/10' />
          <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/25 rounded-full blur-2xl animate-pulse' />
          <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-bounce' />

          <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='text-center max-w-4xl mx-auto'>
              <div className='inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold/20 via-brand-light/30 to-brand-amber/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-brand-gold/20 shadow-lg'>
                <span className='text-brand-brown font-bold text-base md:text-lg'>
                  🎯 Our Services
                </span>
              </div>

              <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
                Services That Strengthen Bonds
              </h1>

              <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
                Beyond beautiful hampers, we offer comprehensive services designed to help you build
                meaningful relationships, strengthen business connections, and create lasting
                emotional impact through thoughtful gestures.
              </p>

              {/* Enhanced emotional tagline */}
              <div className='bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-brand-gold/20 shadow-lg'>
                <p className='text-lg text-brand-brown font-medium italic'>
                  "Every service designed to deepen connections and create meaningful moments"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Solutions Section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
                  Business Solutions
                </h2>
                <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
                  Transform your corporate relationships with dedicated business services that
                  understand your unique needs. We work closely with your team to create hamper
                  programs that strengthen employee loyalty, delight clients, and reflect your
                  company's values with every thoughtful gesture.
                </p>
                <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
                  From account management to bulk order coordination, our business solutions help
                  you scale your impact while maintaining the personal touch that makes
                  relationships meaningful.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8'>
                  <div className='text-center p-4 bg-brand-gold/10 rounded-xl'>
                    <div className='text-3xl mb-2'>🏢</div>
                    <h3 className='font-semibold text-brand-brown mb-1'>Account Management</h3>
                    <p className='text-sm text-gray-600'>Dedicated partnership for growth</p>
                  </div>
                  <div className='text-center p-4 bg-brand-amber/10 rounded-xl'>
                    <div className='text-3xl mb-2'>📦</div>
                    <h3 className='font-semibold text-brand-brown mb-1'>Bulk Excellence</h3>
                    <p className='text-sm text-gray-600'>Scale your impact effortlessly</p>
                  </div>
                  <div className='text-center p-4 bg-brand-brown/10 rounded-xl'>
                    <div className='text-3xl mb-2'>🎯</div>
                    <h3 className='font-semibold text-brand-brown mb-1'>Corporate Programs</h3>
                    <p className='text-sm text-gray-600'>Build culture through care</p>
                  </div>
                  <div className='text-center p-4 bg-brand-light/20 rounded-xl'>
                    <div className='text-3xl mb-2'>🤝</div>
                    <h3 className='font-semibold text-brand-brown mb-1'>Client Relations</h3>
                    <p className='text-sm text-gray-600'>Strengthen business bonds</p>
                  </div>
                </div>

                <Button
                  onClick={() => router.push("/contact?service=business")}
                  className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  🏢 Explore Business Solutions
                </Button>
              </div>

              <div className='relative'>
                <div className='bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-3xl p-8 shadow-xl'>
                  <div className='text-6xl mb-6 text-center'>🎯</div>
                  <h3 className='text-2xl font-bold text-brand-dark mb-4 text-center'>
                    Why Choose Our Business Services?
                  </h3>
                  <p className='text-gray-700 leading-relaxed mb-6'>
                    We understand that successful businesses are built on strong relationships. Our
                    business services are designed to help you nurture these connections
                    systematically, whether you're appreciating employees, thanking clients, or
                    building partnerships.
                  </p>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-brand-gold rounded-full' />
                      <span className='text-sm text-gray-700'>Dedicated account management</span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-brand-gold rounded-full' />
                      <span className='text-sm text-gray-700'>Volume coordination expertise</span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-brand-gold rounded-full' />
                      <span className='text-sm text-gray-700'>Cultural integration support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Services Section */}
        <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div className='order-2 lg:order-1'>
                <div className='bg-gradient-to-br from-brand-amber/20 to-brand-gold/20 rounded-3xl p-8 shadow-xl'>
                  <h3 className='text-2xl font-bold text-brand-dark mb-6'>
                    Complete Wedding Support
                  </h3>
                  <div className='space-y-6'>
                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                        💒
                      </div>
                      <div>
                        <h4 className='font-semibold text-brand-dark mb-1'>
                          Wedding Planning & Coordination
                        </h4>
                        <p className='text-gray-600 text-sm'>
                          Complete hamper planning that makes every guest feel special and honored
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                        📋
                      </div>
                      <div>
                        <h4 className='font-semibold text-brand-dark mb-1'>Logistics Management</h4>
                        <p className='text-gray-600 text-sm'>
                          Seamless coordination so you can focus on celebrating your special day
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                        💝
                      </div>
                      <div>
                        <h4 className='font-semibold text-brand-dark mb-1'>Custom Design</h4>
                        <p className='text-gray-600 text-sm'>
                          Hampers that reflect your unique love story and honor your traditions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='order-1 lg:order-2'>
                <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
                  Wedding Services
                </h2>
                <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
                  Your wedding day is about celebrating love with everyone who matters to you. Our
                  wedding hamper services help you express gratitude to guests, honor family
                  traditions, and create beautiful moments that reflect the joy overflowing in your
                  hearts.
                </p>
                <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
                  From planning and logistics to custom design and coordination, we handle every
                  detail so you can focus on what matters most - celebrating your love with family
                  and friends.
                </p>

                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button
                    onClick={() => router.push("/contact?service=wedding")}
                    className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
                  >
                    💒 Plan Wedding Hampers
                  </Button>
                  <Button
                    onClick={() => router.push("/collections?category=wedding")}
                    className='bg-white/90 backdrop-blur-sm text-brand-brown font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-gold/30 hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber hover:text-white'
                  >
                    💝 View Wedding Collections
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Services Section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
                Strategic Consultation
              </h2>
              <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
                Sometimes the most powerful hampers come from understanding exactly what you want to
                achieve. Our consultation services help you develop strategies that create
                meaningful emotional impact.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
              <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300'>
                <div className='text-4xl mb-4'>💡</div>
                <h3 className='text-xl font-bold text-brand-dark mb-3'>Strategy Development</h3>
                <p className='text-gray-600'>
                  Expert guidance to align your hamper initiatives with relationship goals and
                  business objectives.
                </p>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300'>
                <div className='text-4xl mb-4'>🗺️</div>
                <h3 className='text-xl font-bold text-brand-dark mb-3'>Relationship Mapping</h3>
                <p className='text-gray-600'>
                  Understand your connection goals and create hamper experiences that deepen
                  relationships.
                </p>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300'>
                <div className='text-4xl mb-4'>🎨</div>
                <h3 className='text-xl font-bold text-brand-dark mb-3'>Culture Alignment</h3>
                <p className='text-gray-600'>
                  Ensure every hamper reflects your organization's culture and communicates your
                  values effectively.
                </p>
              </div>
            </div>

            <div className='text-center'>
              <p className='text-lg text-gray-700 mb-6 max-w-2xl mx-auto'>
                Our consultation process helps you create hamper programs that strengthen company
                culture, build lasting partnerships, and achieve the emotional impact you're
                seeking.
              </p>
              <Button
                onClick={() => router.push("/contact?service=consultation")}
                className='bg-gradient-to-r from-brand-brown to-brand-gold hover:from-brand-gold hover:to-brand-brown text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
              >
                💬 Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Ongoing Support Section */}
        <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
                  Ongoing Support & Partnership
                </h2>
                <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
                  Great hamper programs evolve and improve over time. Our ongoing support ensures
                  your hamper initiatives continue to create meaningful impact, adapt to changing
                  needs, and maintain the quality that makes them special.
                </p>
                <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
                  We're invested in your success and the strength of your relationships. Whether you
                  need program management, success tracking, or dedicated account support, we're
                  here as your long-term partner.
                </p>

                <div className='space-y-4 mb-8'>
                  <div className='flex items-center gap-4 p-4 bg-white/30 backdrop-blur-sm rounded-lg border border-brand-gold/20'>
                    <div className='text-2xl'>📈</div>
                    <div>
                      <h4 className='font-semibold text-brand-dark'>Program Management</h4>
                      <p className='text-sm text-gray-600'>
                        Continuous improvement and quality assurance
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 p-4 bg-white/30 backdrop-blur-sm rounded-lg border border-brand-gold/20'>
                    <div className='text-2xl'>💪</div>
                    <div>
                      <h4 className='font-semibold text-brand-dark'>Success Support</h4>
                      <p className='text-sm text-gray-600'>
                        Impact tracking and relationship optimization
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 p-4 bg-white/30 backdrop-blur-sm rounded-lg border border-brand-gold/20'>
                    <div className='text-2xl'>🤗</div>
                    <div>
                      <h4 className='font-semibold text-brand-dark'>Dedicated Support</h4>
                      <p className='text-sm text-gray-600'>
                        Personal specialist for ongoing partnership
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => router.push("/contact?service=support")}
                  className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  🤝 Explore Partnership Options
                </Button>
              </div>

              <div className='relative'>
                <div className='bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-3xl p-8 shadow-xl'>
                  <div className='text-6xl mb-6 text-center'>🌟</div>
                  <h3 className='text-2xl font-bold text-brand-dark mb-4 text-center'>
                    Why Partner With Us?
                  </h3>
                  <p className='text-gray-700 leading-relaxed mb-6'>
                    We believe in building lasting partnerships that grow stronger over time. Our
                    ongoing support helps you maximize the impact of your hamper programs while
                    continuously strengthening the relationships that matter most to your business.
                  </p>
                  <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-brand-gold/20'>
                    <p className='text-sm text-brand-brown font-medium italic text-center'>
                      "Your success in building meaningful relationships is our ultimate measure of
                      success"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className='py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white relative overflow-hidden'>
          {/* Golden decorative elements */}
          <div className='absolute top-10 right-10 w-32 h-32 bg-brand-gold/20 rounded-full blur-xl animate-pulse' />
          <div className='absolute bottom-10 left-10 w-24 h-24 bg-brand-amber/25 rounded-full blur-lg animate-bounce' />

          <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='text-center max-w-4xl mx-auto'>
              <h2 className='font-display text-4xl lg:text-5xl font-bold mb-6'>
                Ready to Strengthen Your Relationships?
              </h2>
              <p className='text-xl mb-8 leading-relaxed'>
                {`Let's work together to create service experiences that build lasting connections,
                strengthen business relationships, and achieve the meaningful impact you're seeking.`}
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  onClick={() => router.push("/contact")}
                  className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
                >
                  💬 Discuss Your Needs
                </Button>
                <Button
                  onClick={() => window.open("tel:+919685847274", "_self")}
                  className='bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber hover:text-brand-dark transform hover:scale-105'
                >
                  📞 Call Us Today
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
