"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui-kit/button";
import { handleWhatsApp } from "../lib/contact-utils";

export default function HowWeWorkSection() {
  const router = useRouter();

  const processSteps = [
    {
      id: 1,
      icon: "💬",
      title: "Initial Consultation",
      description:
        "We start by understanding your needs, occasion, recipients, and vision. Every detail matters to us.",
      details: [
        "Understand your goals",
        "Discuss recipients",
        "Explore preferences",
        "Set expectations"
      ]
    },
    {
      id: 2,
      icon: "🎨",
      title: "Custom Curation",
      description:
        "Based on our discussion, we handpick items that perfectly match your requirements and create a meaningful experience.",
      details: ["Thoughtful selection", "Quality focus", "Cultural relevance", "Personal touches"]
    },
    {
      id: 3,
      icon: "💎",
      title: "Proposal & Approval",
      description:
        "We present our curated hamper proposal with detailed explanation and transparent pricing for your approval.",
      details: ["Detailed proposal", "Transparent pricing", "Visual mockups", "Easy revisions"]
    },
    {
      id: 4,
      icon: "🎁",
      title: "Creation & Delivery",
      description:
        "Once approved, we carefully prepare your hampers and ensure they reach recipients at the perfect moment.",
      details: ["Premium packaging", "Quality checks", "Timely delivery", "Personal satisfaction"]
    }
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-4 py-2 md:px-6 md:py-2 rounded-full mb-4 md:mb-6'>
            <span className='text-brand-brown font-semibold text-sm md:text-base'>
              🛠️ Our Process
            </span>
          </div>
          <h2 className='font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-brown mb-4 md:mb-6 tracking-wide'>
            How We Work Together
          </h2>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 md:px-0'>
            Our consultation-first approach ensures every hamper is perfectly tailored to your
            needs. Here's how we turn your vision into meaningful experiences.
          </p>
        </div>

        {/* Process Steps */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                index % 2 === 0
                  ? "bg-gradient-to-br from-brand-light via-brand-gold/20 to-brand-amber/10"
                  : "bg-gradient-to-br from-brand-gold/20 via-brand-amber/10 to-brand-light"
              }`}
            >
              {/* Background Decorations */}
              <div className='absolute top-4 right-4 w-16 h-16'>
                <svg viewBox='0 0 64 64' className='w-full h-full'>
                  <circle
                    cx='32'
                    cy='32'
                    r='28'
                    fill='none'
                    stroke='#E9C579'
                    strokeWidth='2'
                    opacity='0.3'
                    className='animate-ping'
                  />
                  <circle cx='32' cy='32' r='20' fill='#E9C579' opacity='0.15' />
                </svg>
              </div>

              <div className='relative z-10 p-8'>
                {/* Step Number & Icon */}
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-16 h-16 bg-gradient-to-br from-brand-amber to-brand-brown rounded-full flex items-center justify-center shadow-lg'>
                    <span className='text-2xl'>{step.icon}</span>
                  </div>
                  <div className='w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-md'>
                    <span className='text-brand-brown font-bold text-lg'>{step.id}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className='text-2xl lg:text-3xl font-bold text-brand-dark mb-4'>
                  {step.title}
                </h3>
                <p className='text-lg text-gray-700 mb-6 leading-relaxed'>{step.description}</p>

                {/* Details List */}
                <div className='bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-brand-gold/20'>
                  <h4 className='font-semibold text-brand-brown mb-3'>What We Focus On:</h4>
                  <div className='grid grid-cols-2 gap-2'>
                    {step.details.map((detail, idx) => (
                      <div key={idx} className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-brand-gold rounded-full' />
                        <span className='text-sm text-gray-600'>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why This Process Works */}
        <div className='bg-gradient-to-br from-brand-brown to-brand-dark text-white rounded-3xl p-12 shadow-2xl'>
          <div className='text-center max-w-4xl mx-auto'>
            <h3 className='font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6'>
              Why Our Process Works
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
              <div className='text-center'>
                <div className='text-4xl mb-4'>🎯</div>
                <h4 className='text-lg md:text-xl font-bold mb-2 md:mb-3'>No Surprises</h4>
                <p className='text-brand-gold text-sm sm:text-base'>
                  Complete transparency at every step. You know exactly what to expect.
                </p>
              </div>
              <div className='text-center'>
                <div className='text-4xl mb-4'>💝</div>
                <h4 className='text-lg md:text-xl font-bold mb-2 md:mb-3'>Personal Touch</h4>
                <p className='text-brand-gold text-sm sm:text-base'>
                  Every hamper reflects your thoughtfulness and care for the recipient.
                </p>
              </div>
              <div className='text-center'>
                <div className='text-4xl mb-4'>⚡</div>
                <h4 className='text-lg md:text-xl font-bold mb-2 md:mb-3'>Efficient & Reliable</h4>
                <p className='text-brand-gold text-sm sm:text-base'>
                  Streamlined process that saves you time while delivering excellence.
                </p>
              </div>
            </div>

            <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-brand-gold leading-relaxed px-4 md:px-0'>
              {`Ready to start your custom hamper journey? Let's discuss your needs
              and create something special together.`}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                onClick={() => router.push("/contact")}
                className='bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
              >
                💬 Start Consultation
              </Button>
              <Button
                onClick={() =>
                  handleWhatsApp(
                    "Hi! I'd like to understand your hamper process and how you can help us create meaningful connections."
                  )
                }
                className='bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-dark hover:scale-105'
              >
                💬 WhatsApp Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
