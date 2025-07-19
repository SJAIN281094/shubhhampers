"use client";

import { useRouter } from "next/navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Button } from "@ui-kit/button";

export default function BusinessPage() {
  const router = useRouter();

  const businessUseCases = [
    {
      title: "Employee Appreciation",
      description:
        "Show your team they're valued with thoughtful hampers that strengthen workplace culture and boost morale.",
      icon: "👥",
      examples: [
        "Work anniversaries",
        "Achievement recognition",
        "Holiday appreciation",
        "Welcome new hires"
      ]
    },
    {
      title: "Client Relationships",
      description:
        "Deepen business partnerships with clients through meaningful gestures that go beyond transactions.",
      icon: "🤝",
      examples: [
        "Thank you gifts",
        "Project milestones",
        "Seasonal greetings",
        "Contract celebrations"
      ]
    },
    {
      title: "Corporate Events",
      description:
        "Make corporate events memorable with hampers that guests will treasure long after the event ends.",
      icon: "🎉",
      examples: ["Conference gifts", "Launch events", "Annual meetings", "Trade show giveaways"]
    },
    {
      title: "Business Development",
      description:
        "Open doors and strengthen prospects with thoughtful hampers that make your business memorable.",
      icon: "📈",
      examples: [
        "Prospect outreach",
        "Partnership building",
        "Referral thanks",
        "Networking events"
      ]
    }
  ];

  const businessBenefits = [
    {
      title: "Strengthen Company Culture",
      description:
        "Create a workplace where people feel genuinely appreciated and valued, leading to higher engagement and retention.",
      icon: "🏢",
      impact: "Higher employee satisfaction and loyalty"
    },
    {
      title: "Build Lasting Partnerships",
      description:
        "Transform business relationships from transactional to meaningful, creating partners who choose to work with you.",
      icon: "🤝",
      impact: "Increased client retention and referrals"
    },
    {
      title: "Enhance Brand Reputation",
      description:
        "Show that your business cares about relationships, not just profits, building trust and positive reputation.",
      icon: "⭐",
      impact: "Stronger brand perception and word-of-mouth"
    },
    {
      title: "Drive Business Growth",
      description:
        "Invested relationships lead to repeat business, referrals, and opportunities that drive sustainable growth.",
      icon: "📊",
      impact: "Measurable ROI through relationship investment"
    }
  ];

  return (
    <main className='min-h-screen'>
      <Header />

      <div className='bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
        {/* Hero Section */}
        <section className='relative py-20 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/15 via-transparent to-brand-amber/10' />
          <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/25 rounded-full blur-2xl animate-pulse' />
          <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-bounce' />

          <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='text-center max-w-4xl mx-auto'>
              <div className='inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold/20 via-brand-light/30 to-brand-amber/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-brand-gold/20 shadow-lg'>
                <span className='text-brand-brown font-bold text-base md:text-lg'>
                  🏢 For Business
                </span>
              </div>

              <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
                Strengthen Business Relationships
              </h1>

              <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
                Transform your business relationships through thoughtful hampers that show genuine
                appreciation, build lasting partnerships, and create the kind of workplace culture
                where people thrive and businesses grow.
              </p>

              <div className='bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-brand-gold/20 shadow-lg'>
                <p className='text-lg text-brand-brown font-medium italic mb-4'>
                  "Every hamper is an investment in relationships that drive business success"
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    onClick={() => router.push("/contact?service=business")}
                    className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
                  >
                    🏢 Start Your Business Journey
                  </Button>
                  <Button
                    onClick={() => router.push("/collections?category=business")}
                    className='bg-white/90 backdrop-blur-sm text-brand-brown font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-gold/30 hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber hover:text-white transform hover:scale-105'
                  >
                    💼 View Business Collections
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Use Cases Section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
                How Businesses Use Hampers
              </h2>
              <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
                From strengthening team culture to building client partnerships, discover how
                thoughtful hampers can transform every aspect of your business relationships.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              {businessUseCases.map((useCase, index) => (
                <div
                  key={index}
                  className='bg-gradient-to-br from-brand-light/20 to-brand-gold/10 rounded-3xl p-8 shadow-xl border border-brand-gold/20 hover:shadow-2xl transition-all duration-500'
                >
                  <div className='flex items-start gap-6 mb-6'>
                    <div className='text-5xl'>{useCase.icon}</div>
                    <div>
                      <h3 className='text-2xl font-bold text-brand-dark mb-3'>{useCase.title}</h3>
                      <p className='text-gray-700 leading-relaxed'>{useCase.description}</p>
                    </div>
                  </div>

                  <div className='bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-brand-gold/20'>
                    <h4 className='font-semibold text-brand-brown mb-3 flex items-center gap-2'>
                      <span className='w-2 h-2 bg-brand-gold rounded-full' />
                      Perfect For:
                    </h4>
                    <div className='grid grid-cols-2 gap-2'>
                      {useCase.examples.map((example, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-2 p-2 bg-white/50 backdrop-blur-sm rounded-lg'
                        >
                          <div className='w-1.5 h-1.5 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full' />
                          <span className='text-sm text-gray-700'>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='text-center mt-12'>
              <Button
                onClick={() => router.push("/contact?inquiry=use-cases")}
                className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
              >
                💬 Discuss Your Specific Needs
              </Button>
            </div>
          </div>
        </section>

        {/* Business Benefits Section */}
        <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
              <div>
                <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
                  Why Businesses Choose Hampers
                </h2>
                <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
                  Smart businesses understand that relationships are their most valuable asset.
                  Thoughtful hampers are more than gifts – they're strategic investments in the
                  relationships that drive business success.
                </p>
                <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
                  When you show genuine appreciation through carefully curated hampers, you create
                  emotional connections that transform transactions into partnerships and employees
                  into advocates.
                </p>

                <div className='bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-brand-gold/20'>
                  <h3 className='text-xl font-bold text-brand-dark mb-4'>
                    Measurable Business Impact
                  </h3>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-brand-gold rounded-full' />
                      <span className='text-gray-700'>
                        Increased employee retention & satisfaction
                      </span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-brand-gold rounded-full' />
                      <span className='text-gray-700'>
                        Higher client lifetime value & referrals
                      </span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-brand-gold rounded-full' />
                      <span className='text-gray-700'>Stronger brand reputation & trust</span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-brand-gold rounded-full' />
                      <span className='text-gray-700'>Enhanced team culture & collaboration</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <div className='bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-3xl p-8 shadow-xl'>
                  <div className='text-6xl mb-6 text-center'>💼</div>
                  <h3 className='text-2xl font-bold text-brand-dark mb-4 text-center'>
                    The Shubhhampers Difference
                  </h3>
                  <div className='space-y-4'>
                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                        🎯
                      </div>
                      <div>
                        <h4 className='font-semibold text-brand-dark mb-1'>Strategic Approach</h4>
                        <p className='text-gray-600 text-sm'>
                          We understand business goals and align hampers with your objectives
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                        ⚡
                      </div>
                      <div>
                        <h4 className='font-semibold text-brand-dark mb-1'>Scalable Solutions</h4>
                        <p className='text-gray-600 text-sm'>
                          From single hampers to company-wide programs, we scale with you
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                        🤝
                      </div>
                      <div>
                        <h4 className='font-semibold text-brand-dark mb-1'>Partnership Focus</h4>
                        <p className='text-gray-600 text-sm'>
                          We work as your partner, invested in your relationship success
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {businessBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className='bg-white rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300 text-center'
                >
                  <div className='text-4xl mb-4'>{benefit.icon}</div>
                  <h3 className='text-lg font-bold text-brand-dark mb-3'>{benefit.title}</h3>
                  <p className='text-gray-600 mb-4 text-sm leading-relaxed'>
                    {benefit.description}
                  </p>
                  <div className='bg-brand-gold/10 rounded-lg p-3'>
                    <p className='text-xs text-brand-brown font-medium'>{benefit.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Support Businesses Section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div className='order-2 lg:order-1'>
                <div className='bg-gradient-to-br from-brand-amber/20 to-brand-gold/20 rounded-3xl p-8 shadow-xl'>
                  <h3 className='text-2xl font-bold text-brand-dark mb-6'>
                    How We Support Your Business
                  </h3>
                  <div className='space-y-6'>
                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                        1
                      </div>
                      <div>
                        <h4 className='font-semibold text-brand-dark mb-1'>
                          Understanding Your Culture
                        </h4>
                        <p className='text-gray-600 text-sm'>
                          We learn about your company values, culture, and relationship goals to
                          ensure perfect alignment
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                        2
                      </div>
                      <div>
                        <h4 className='font-semibold text-brand-dark mb-1'>Strategic Planning</h4>
                        <p className='text-gray-600 text-sm'>
                          Together we create hamper strategies that support your business objectives
                          and relationship goals
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                        3
                      </div>
                      <div>
                        <h4 className='font-semibold text-brand-dark mb-1'>Seamless Execution</h4>
                        <p className='text-gray-600 text-sm'>
                          We handle all the details so you can focus on your business while we
                          strengthen your relationships
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                        4
                      </div>
                      <div>
                        <h4 className='font-semibold text-brand-dark mb-1'>Ongoing Partnership</h4>
                        <p className='text-gray-600 text-sm'>
                          We continue to support and optimize your hamper programs for maximum
                          relationship impact
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='order-1 lg:order-2'>
                <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
                  Your Success is Our Mission
                </h2>
                <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
                  We believe that when businesses invest in relationships, everyone wins. Your
                  employees feel valued, your clients feel appreciated, and your business grows
                  through the strength of these connections.
                </p>
                <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
                  That's why we approach every business partnership with the same care and attention
                  we put into every hamper – because we know that your success in building
                  meaningful relationships is the ultimate measure of our success.
                </p>

                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button
                    onClick={() => router.push("/services")}
                    className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
                  >
                    🎯 Explore Business Services
                  </Button>
                  <Button
                    onClick={() => router.push("/contact?inquiry=partnership")}
                    className='bg-white/90 backdrop-blur-sm text-brand-brown font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-gold/30 hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber hover:text-white'
                  >
                    🤝 Discuss Partnership
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
                Ready to Get Started?
              </h2>
              <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
                Whether you're looking to appreciate a single employee or create a company-wide
                hamper program, we're here to help you build stronger relationships that drive
                business success.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300 text-center'>
                <div className='text-4xl mb-4'>💬</div>
                <h3 className='text-xl font-bold text-brand-dark mb-3'>Start with Consultation</h3>
                <p className='text-gray-600 mb-6'>
                  Book a free consultation to discuss your business needs and relationship goals.
                </p>
                <Button
                  onClick={() => router.push("/contact?service=consultation")}
                  className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full'
                >
                  Book Consultation
                </Button>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300 text-center'>
                <div className='text-4xl mb-4'>📦</div>
                <h3 className='text-xl font-bold text-brand-dark mb-3'>Explore Collections</h3>
                <p className='text-gray-600 mb-6'>
                  Browse our business collections designed specifically for professional
                  relationships.
                </p>
                <Button
                  onClick={() => router.push("/collections?category=business")}
                  className='bg-gradient-to-r from-brand-amber to-brand-brown text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full'
                >
                  View Collections
                </Button>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300 text-center'>
                <div className='text-4xl mb-4'>🤝</div>
                <h3 className='text-xl font-bold text-brand-dark mb-3'>Become a Partner</h3>
                <p className='text-gray-600 mb-6'>
                  Join our business partnership program for ongoing support and special benefits.
                </p>
                <Button
                  onClick={() => router.push("/contact?service=business")}
                  className='bg-gradient-to-r from-brand-brown to-brand-gold text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full'
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className='py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white relative overflow-hidden'>
          <div className='absolute top-10 right-10 w-32 h-32 bg-brand-gold/20 rounded-full blur-xl animate-pulse' />
          <div className='absolute bottom-10 left-10 w-24 h-24 bg-brand-amber/25 rounded-full blur-lg animate-bounce' />

          <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='text-center max-w-4xl mx-auto'>
              <h2 className='font-display text-4xl lg:text-5xl font-bold mb-6'>
                Transform Your Business Relationships Today
              </h2>
              <p className='text-xl mb-8 leading-relaxed'>
                Join hundreds of businesses who have discovered the power of thoughtful hampers in
                building stronger teams, deeper client partnerships, and sustainable business
                growth.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  onClick={() => router.push("/contact?inquiry=business-start")}
                  className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
                >
                  🚀 Start Your Business Journey
                </Button>
                <Button
                  onClick={() => window.open("tel:+919685847274", "_self")}
                  className='bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber hover:text-brand-dark transform hover:scale-105'
                >
                  📞 Call Our Business Team
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
