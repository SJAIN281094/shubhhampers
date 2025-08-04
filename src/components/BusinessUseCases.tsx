import Link from "next/link";
import { Button } from "@ui-kit/button";
import SectionHeader from "./ui/SectionHeader";
import GradientCard from "./ui/GradientCard";

// Type definitions
interface BusinessUseCase {
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

// Move business use cases data outside component for better performance
const BUSINESS_USE_CASES: BusinessUseCase[] = [
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
    examples: ["Prospect outreach", "Partnership building", "Referral thanks", "Networking events"]
  }
];

export default function BusinessUseCases() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeader
          title='How Businesses Use Hampers'
          description='From strengthening team culture to building client partnerships, discover how thoughtful hampers can transform every aspect of your business relationships.'
          variant='center'
          size='md'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {BUSINESS_USE_CASES.map((useCase: BusinessUseCase) => (
            <GradientCard key={useCase.title} variant='light' size='lg' hover={true}>
              <div className='flex items-start gap-6 mb-6'>
                <div className='text-5xl'>{useCase.icon}</div>
                <div>
                  <h3 className='text-2xl font-bold text-brand-dark mb-3'>{useCase.title}</h3>
                  <p className='text-gray-700 leading-relaxed'>{useCase.description}</p>
                </div>
              </div>

              <div className='bg-white/50 rounded-xl p-4 border border-brand-gold/20'>
                <h4 className='font-semibold text-brand-brown mb-3 flex items-center gap-2'>
                  <span className='w-2 h-2 bg-brand-gold rounded-full' />
                  Perfect For:
                </h4>
                <div className='grid grid-cols-2 gap-2'>
                  {useCase.examples.map((example: string) => (
                    <div
                      key={example}
                      className='flex items-center gap-2 p-2 bg-white/60 rounded-lg'
                    >
                      <div className='w-1.5 h-1.5 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full' />
                      <span className='text-sm text-gray-700'>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GradientCard>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link href='/contact?inquiry=use-cases'>
            <Button className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200'>
              💬 Discuss Your Specific Needs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
