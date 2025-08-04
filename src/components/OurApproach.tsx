import Link from "next/link";
import { Button } from "@ui-kit/button";
import GradientCard from "./ui/GradientCard";
import ProcessStep from "./ui/ProcessStep";

export default function OurApproach() {
  const processSteps = [
    {
      id: 1,
      icon: "🎯",
      title: "Understanding Your Celebration",
      description:
        "We take time to understand your goals, values, and the special moments you want to celebrate.",
      details: []
    },
    {
      id: 2,
      icon: "🎨",
      title: "Thoughtful Curation",
      description:
        "We carefully select items that align with your values and create meaningful experiences.",
      details: []
    },
    {
      id: 3,
      icon: "✨",
      title: "Personal Touch",
      description:
        "We add personal touches and ensure every detail reflects your care and celebration.",
      details: []
    },
    {
      id: 4,
      icon: "🤝",
      title: "Ongoing Support",
      description:
        "We're here to support you throughout your celebration journey and help you create magical moments.",
      details: []
    }
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='order-2 lg:order-1'>
            <GradientCard variant='amber' size='lg'>
              <h3 className='text-2xl font-bold text-brand-dark mb-6'>How We Work</h3>
              <div className='space-y-6'>
                {processSteps.map(step => (
                  <ProcessStep key={step.id} step={step} index={step.id - 1} variant='simple' />
                ))}
              </div>
            </GradientCard>
          </div>

          <div className='order-1 lg:order-2'>
            <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
              Our Approach
            </h2>
            <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
              {`We don't believe in one-size-fits-all solutions. Every celebration
              is unique, and every special moment deserves personalized
              attention. That's why we work closely with you to understand
              your specific needs and create hamper experiences that truly
              matter.`}
            </p>
            <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
              {`From the initial consultation to the final delivery, we're
              with you every step of the way, ensuring that every hamper
              reflects your values and creates magical moments.`}
            </p>

            <Link href='/contact'>
              <Button className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200'>
                💬 {"Let's Start Your Journey"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
