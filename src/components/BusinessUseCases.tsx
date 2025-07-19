import Link from "next/link";
import { Button } from "@ui-kit/button";

export default function BusinessUseCases() {
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

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
            How Businesses Use Hampers
          </h2>
          <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
            From strengthening team culture to building client partnerships, discover how thoughtful
            hampers can transform every aspect of your business relationships.
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
          <Link href='/contact?inquiry=use-cases'>
            <Button className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'>
              💬 Discuss Your Specific Needs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
