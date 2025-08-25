"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
// import ProcessStep from "./ui/ProcessStep"; // Using direct implementation
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { handleWhatsApp } from "../lib/contact-utils";

export default function HowWeWorkSection() {
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
        <SectionHeader
          tag={{ emoji: "🛠️", text: "Our Process" }}
          title='How We Work Together'
          description="Our consultation-first approach ensures every hamper is perfectly tailored to your needs. Here's how we turn your vision into meaningful experiences."
          variant='center'
          size='md'
        />

        {/* Process Steps */}
        <div className='relative'>
          {/* Connection Line */}
          <div className='hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl'>
            <div className='relative h-1'>
              <div className='absolute inset-0 bg-gradient-to-r from-brand-gold/30 via-brand-amber/50 to-brand-gold/30 rounded-full' />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16'>
            {processSteps.map((step, index) => (
              <div key={step.id} className='relative'>
                {/* Step Number Badge */}
                <motion.div
                  className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-20'
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    className='w-8 h-8 bg-gradient-to-br from-brand-amber to-brand-brown rounded-full flex items-center justify-center shadow-lg border-3 border-white'
                    whileHover={{
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className='text-white font-bold text-sm'>{step.id}</span>
                  </motion.div>
                </motion.div>

                {/* Main Card */}
                <motion.div
                  className='relative bg-white rounded-2xl shadow-xl border border-brand-gold/20 h-full'
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Gradient Overlay */}
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-br from-brand-light/50 via-transparent to-brand-gold/20 rounded-2xl'
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.2 }
                    }}
                  />

                  {/* Floating Icon */}
                  <motion.div
                    className='absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-amber rounded-xl flex items-center justify-center shadow-lg z-30'
                    initial={{ rotate: 12 }}
                    whileHover={{
                      rotate: 6,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className='text-xl'>{step.icon}</span>
                  </motion.div>

                  <div className='relative z-10 p-6 pt-8 h-full flex flex-col'>
                    {/* Content */}
                    <motion.h3
                      className='text-lg sm:text-xl font-bold text-brand-dark mb-3'
                      whileHover={{
                        color: "#8B4513",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      className='text-sm sm:text-base text-gray-600 mb-6 leading-relaxed flex-grow'
                      whileHover={{
                        color: "#374151",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {step.description}
                    </motion.p>

                    {/* Features */}
                    <div className='space-y-2 mt-auto'>
                      <h4 className='font-semibold text-brand-brown text-sm mb-3'>Key Focus:</h4>
                      <div className='grid grid-cols-1 gap-2'>
                        {step.details.map(detail => (
                          <motion.div
                            key={detail}
                            className='flex items-center gap-2 text-xs text-gray-600 bg-brand-light/30 rounded-lg px-3 py-1.5'
                            whileHover={{
                              backgroundColor: "rgba(233, 197, 121, 0.2)",
                              scale: 1.02,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <div className='w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0' />
                            <span className='leading-tight'>{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicator */}
                    <motion.div
                      className='absolute bottom-3 right-3 opacity-10'
                      whileHover={{
                        opacity: 0.3,
                        scale: 1.1,
                        x: 2,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        className='text-4xl font-bold text-brand-gold'
                        whileHover={{
                          color: "#F59E0B",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {step.id}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Mobile Connection Arrow */}
                {index < processSteps.length - 1 && (
                  <div className='lg:hidden flex justify-center mt-4 mb-2'>
                    <div className='w-0.5 h-8 bg-gradient-to-b from-brand-gold to-brand-amber rounded-full' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why This Process Works */}
        <div className='bg-gradient-to-br from-brand-brown to-brand-dark text-white rounded-3xl p-8 md:p-12 shadow-2xl'>
          <div className='text-center max-w-4xl mx-auto'>
            <h3 className='font-display text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6'>
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

            <p className='text-sm sm:text-base md:text-sm lg:text-base mb-6 md:mb-8 text-brand-gold leading-relaxed px-4 md:px-0'>
              {`Ready to start your custom hamper journey? Let's discuss your needs
              and create something special together.`}
            </p>

            <div className='flex flex-col sm:flex-row gap-3 w-full'>
              <Link href='/contact' className='w-full sm:flex-1'>
                <PrimaryButton size='md' className='w-full'>
                  💬 Start Consultation
                </PrimaryButton>
              </Link>
              <SecondaryButton
                onClick={() =>
                  handleWhatsApp(
                    "Hi! I'd like to understand your hamper process and how you can help us create meaningful connections."
                  )
                }
                size='md'
                className='w-full sm:flex-1'
              >
                💬 WhatsApp Us Now
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
