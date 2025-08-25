import Link from "next/link";
import GradientCard from "./ui/GradientCard";
import ProcessStep from "./ui/ProcessStep";
import SectionHeader from "./ui/SectionHeader";
import PrimaryButton from "./PrimaryButton";

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
            <SectionHeader title='Our Approach' variant='left' size='md' className='mb-0' />
            <p className='text-sm sm:text-base md:text-sm lg:text-base text-gray-700 mb-6 leading-relaxed'>
              {`We don't believe in one-size-fits-all solutions. Every celebration
              is unique, and every special moment deserves personalized
              attention. That's why we work closely with you to understand
              your specific needs and create hamper experiences that truly
              matter.`}
            </p>
            <p className='text-sm sm:text-base md:text-sm lg:text-base text-gray-700 mb-8 leading-relaxed'>
              {`From the initial consultation to the final delivery, we're
              with you every step of the way, ensuring that every hamper
              reflects your values and creates magical moments.`}
            </p>

            <Link href='/contact'>
              <PrimaryButton size='sm'>💬 {"Let's Start Your Journey"}</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
