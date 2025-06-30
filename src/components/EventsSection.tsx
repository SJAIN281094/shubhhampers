"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@ui-kit/button";

const events = [
  {
    id: 1,
    title: "Diwali Magic",
    subtitle: "Illuminate Relationships",
    description:
      "We believe Diwali is more than a festival—it's a celebration of relationships. Our carefully curated Diwali collection blends traditional warmth with modern elegance, creating gifts that strengthen bonds and create lasting memories. Every hamper tells a story of connection and care.",
    image: "✨",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/10.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse"
  },
  {
    id: 2,
    title: "Employee Recognition",
    subtitle: "Celebrate Their Journey",
    description:
      "Your team's dedication deserves meaningful recognition. We help you create appreciation programs that go beyond traditional gifts—building a culture where every achievement is celebrated, every milestone is honored, and every team member feels valued.",
    image: "👥",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/11.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse"
  },
  {
    id: 3,
    title: "Client Appreciation",
    subtitle: "Nurture Partnerships",
    description:
      "Every client relationship is precious. Our client appreciation gifts are designed to show genuine gratitude and strengthen the bonds that drive your business forward. From onboarding to milestone celebrations, we help you create meaningful touchpoints.",
    image: "🤝",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/12.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse"
  },
  {
    id: 4,
    title: "Festival Celebrations",
    subtitle: "Honor Traditions",
    description:
      "India's festivals are celebrations of life, love, and togetherness. Our festival collections honor these traditions while adding modern touches that make celebrations more meaningful. From Holi to Raksha Bandhan, we help you strengthen bonds through thoughtful gifting.",
    image: "🎊",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/18.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse"
  },
  {
    id: 5,
    title: "Corporate Excellence",
    subtitle: "Elevate Your Brand",
    description:
      "Your corporate gifts reflect your brand values. We help you create gifting experiences that align with your company's culture and strengthen your professional relationships. Every gift is an opportunity to demonstrate your commitment to excellence.",
    image: "🏢",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/19.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse"
  },
  {
    id: 6,
    title: "Wellness & Care",
    subtitle: "Prioritize Well-being",
    description:
      "We believe in gifting wellness and care. Our wellness collection focuses on mental and physical well-being, helping you show genuine concern for your team's health. From stress relief to self-care, we help you create a culture of care and support.",
    image: "💚",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/13.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse"
  },
  {
    id: 7,
    title: "Holi Festival",
    subtitle: "Colors of Unity",
    description:
      "Holi celebrates the triumph of good over evil and the arrival of spring. Our Holi collection brings communities together with traditional sweets, organic colors, and festive treats that honor this beautiful festival of unity and joy.",
    image: "🎨",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/14.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse"
  },
  {
    id: 8,
    title: "New Year Dreams",
    subtitle: "Fresh Beginnings",
    description:
      "Every new year brings hope and possibilities. Our New Year collection helps you inspire and motivate your team and clients with gifts that symbolize fresh starts, new opportunities, and the promise of a brighter future together.",
    image: "🎆",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/15.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse"
  },
  {
    id: 9,
    title: "Raksha Bandhan",
    subtitle: "Sacred Bonds",
    description:
      "Raksha Bandhan celebrates the sacred bond between siblings. Our collection honors this beautiful relationship with traditional sweets, beautiful rakhis, and thoughtful gifts that strengthen the unbreakable bond of love and protection.",
    image: "🪢",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/16.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse"
  },
  {
    id: 10,
    title: "Housewarming Joy",
    subtitle: "Bless New Beginnings",
    description:
      "A new home is a new chapter in life. Our housewarming collection helps you welcome friends and family to their new space with thoughtful gifts that bring positive energy, warmth, and good fortune to their new beginning.",
    image: "🏠",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    backgroundImage: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/17.jpeg",
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse"
  },
  {
    id: 11,
    title: "Secret Santa Magic",
    subtitle: "Mystery & Joy",
    description:
      "The magic of anonymous giving brings teams closer together. Our Secret Santa collection creates excitement and wonder with carefully curated hampers filled with delightful surprises that make office parties and gatherings truly special.",
    image: "🎁",
    bgColor: "bg-gradient-to-br from-brand-light via-brand-gold to-brand-amber",
    accentColor: "bg-gradient-to-br from-brand-gold to-brand-brown",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: false,
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(218,167,85,0.3)]",
    animationClass: "animate-pulse"
  },
  {
    id: 12,
    title: "Birthday Celebrations",
    subtitle: "Personal Milestones",
    description:
      "Every birthday is a personal milestone worth celebrating. Our birthday collection helps you recognize individual achievements and strengthen personal bonds with gifts that make each person feel special and valued.",
    image: "🎂",
    bgColor: "bg-gradient-to-br from-brand-gold via-brand-amber to-brand-light",
    accentColor: "bg-gradient-to-br from-brand-light to-brand-gold",
    textColor: "text-brand-dark",
    buttonColor:
      "bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber",
    isReversed: true,
    specialEffects: true,
    glowEffect: "shadow-[0_0_50px_rgba(233,197,121,0.3)]",
    animationClass: "animate-pulse"
  }
];

export default function EventsSection() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("corporate");

  return (
    <section
      id='events-section'
      className='py-20 bg-gradient-to-br from-brand-light via-brand-gold/20 to-brand-amber/10'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Enhanced Section Header */}
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6'>
            <span className='text-brand-brown font-semibold'>
              🎯 Fresh Approach to Corporate Gifting
            </span>
          </div>
          <h2 className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown mb-6 tracking-wide'>
            Building Meaningful Relationships
          </h2>
          <p className='text-xl lg:text-2xl text-brand-dark max-w-4xl mx-auto leading-relaxed mb-8'>
            We believe every gift is an opportunity to strengthen bonds and create lasting
            impressions. Our fresh approach to corporate gifting focuses on genuine connections,
            thoughtful curation, and meaningful experiences that drive real business value.
          </p>

          {/* Business Benefits Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12'>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-brand-gold/20'>
              <div className='text-3xl mb-3'>💝</div>
              <h3 className='font-semibold text-brand-brown mb-2'>Genuine Connections</h3>
              <p className='text-brand-dark text-sm'>
                Create authentic relationships through thoughtful, personalized gifting experiences
              </p>
            </div>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-brand-gold/20'>
              <div className='text-3xl mb-3'>🎯</div>
              <h3 className='font-semibold text-brand-brown mb-2'>Strategic Impact</h3>
              <p className='text-brand-dark text-sm'>
                Every gift is designed to strengthen bonds and drive meaningful business outcomes
              </p>
            </div>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-brand-gold/20'>
              <div className='text-3xl mb-3'>✨</div>
              <h3 className='font-semibold text-brand-brown mb-2'>Fresh Perspective</h3>
              <p className='text-brand-dark text-sm'>
                Innovative approaches that blend tradition with modern gifting sensibilities
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className='flex flex-wrap justify-center gap-4 mb-16'>
          <button
            onClick={() => setActiveCategory("corporate")}
            className={`px-6 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              activeCategory === "corporate"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark"
            }`}
          >
            🏢 Corporate Events
          </button>
          <button
            onClick={() => setActiveCategory("festivals")}
            className={`px-6 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              activeCategory === "festivals"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark"
            }`}
          >
            🎉 Festivals & Celebrations
          </button>
          <button
            onClick={() => setActiveCategory("personal")}
            className={`px-6 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              activeCategory === "personal"
                ? "bg-brand-gold text-brand-brown"
                : "bg-white/80 text-brand-dark"
            }`}
          >
            💝 Personal Occasions
          </button>
        </div>

        {/* Events Grid with Enhanced Layout */}
        <div className='space-y-12'>
          {events.map(event => (
            <div
              key={event.id}
              className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:scale-[1.02] ${
                event.isReversed ? "lg:flex-row-reverse" : ""
              } lg:flex ${event.specialEffects ? event.glowEffect : ""}`}
            >
              {/* Enhanced Background */}
              <div
                className={`relative w-full lg:w-1/2 p-12 lg:p-16 ${event.bgColor} transition-all duration-500`}
              >
                {/* Business Impact Badge */}
                <div className='absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg'>
                  <span className='text-sm font-semibold text-brand-brown'>
                    {event.id <= 6
                      ? "🎯 Corporate Ready"
                      : event.id <= 12
                        ? "🎉 Universal Appeal"
                        : "🎁 Seasonal Special"}
                  </span>
                </div>

                {/* Futuristic Glow Elements */}
                {event.specialEffects && (
                  <>
                    <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-gold/40 to-brand-amber/20 rounded-full blur-2xl animate-pulse' />
                    <div className='absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-brand-amber/30 to-brand-gold/40 rounded-full blur-xl animate-pulse delay-300' />
                    <div className='absolute top-1/2 left-1/4 w-20 h-20 bg-brand-gold/20 rounded-full blur-lg animate-bounce' />
                  </>
                )}

                {/* Modern Geometric Decorations */}
                <div className='absolute top-4 right-4 w-16 h-16'>
                  <svg viewBox='0 0 64 64' className='w-full h-full'>
                    <polygon
                      points='32,4 44,20 56,20 48,32 56,44 44,44 32,60 20,44 8,44 16,32 8,20 20,20'
                      fill={event.specialEffects ? "#DAA755" : "#E9C579"}
                      opacity={event.specialEffects ? "0.6" : "0.3"}
                      className={event.specialEffects ? "animate-spin" : ""}
                      style={{ animationDuration: "20s" }}
                    />
                  </svg>
                </div>
                <div className='absolute bottom-4 left-4 w-12 h-12'>
                  <svg viewBox='0 0 48 48' className='w-full h-full'>
                    <circle
                      cx='24'
                      cy='24'
                      r='20'
                      fill='none'
                      stroke={event.specialEffects ? "#E9C579" : "#DAA755"}
                      strokeWidth='2'
                      opacity={event.specialEffects ? "0.8" : "0.4"}
                      className={event.specialEffects ? "animate-ping" : ""}
                    />
                    <circle
                      cx='24'
                      cy='24'
                      r='12'
                      fill={event.specialEffects ? "#DAA755" : "#E9C579"}
                      opacity={event.specialEffects ? "0.6" : "0.3"}
                    />
                  </svg>
                </div>

                {/* Enhanced Content */}
                <div className='relative z-10'>
                  <div
                    className={`text-6xl mb-6 ${event.specialEffects ? "animate-bounce" : ""}`}
                    style={{ animationDuration: "3s" }}
                  >
                    {event.image}
                  </div>
                  <h3
                    className={`font-display text-3xl lg:text-4xl font-bold mb-4 ${
                      event.textColor
                    } tracking-wide drop-shadow-sm ${
                      event.specialEffects
                        ? "bg-gradient-to-r from-brand-dark to-brand-brown bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {event.title}
                  </h3>
                  <h4
                    className={`text-xl lg:text-2xl font-semibold mb-4 ${
                      event.textColor
                    } tracking-wide drop-shadow-sm ${
                      event.specialEffects ? "text-brand-brown font-bold" : ""
                    }`}
                  >
                    {event.subtitle}
                  </h4>
                  <p
                    className={`text-lg mb-6 leading-relaxed ${event.textColor} drop-shadow-sm ${
                      event.specialEffects ? "font-light" : ""
                    }`}
                  >
                    {event.description}
                  </p>

                  {/* Business Benefits for Corporate Events */}
                  {event.id <= 6 && (
                    <div className='mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-brand-gold/30'>
                      <h5 className='font-semibold text-brand-brown mb-2'>💼 Business Value:</h5>
                      <ul className='text-sm text-brand-dark space-y-1'>
                        {event.id === 1 && (
                          <>
                            <li>
                              •{"Strengthen relationships during India's most important festival"}
                            </li>
                            <li>• Show cultural appreciation and understanding</li>
                            <li>• Create memorable brand experiences</li>
                          </>
                        )}
                        {event.id === 2 && (
                          <>
                            <li>• Build a culture of appreciation and recognition</li>
                            <li>• Strengthen team bonds and loyalty</li>
                            <li>• {"Show genuine care for your team's well-being"}</li>
                          </>
                        )}
                        {event.id === 3 && (
                          <>
                            <li>• Demonstrate genuine gratitude to clients</li>
                            <li>• Strengthen long-term business partnerships</li>
                            <li>• Create meaningful touchpoints throughout the year</li>
                          </>
                        )}
                        {event.id === 4 && (
                          <>
                            <li>• Honor Indian traditions and cultural values</li>
                            <li>• Strengthen bonds through meaningful celebrations</li>
                            <li>• Show respect for diverse cultural backgrounds</li>
                          </>
                        )}
                        {event.id === 5 && (
                          <>
                            <li>• Align gifting with your brand values</li>
                            <li>• Strengthen professional relationships</li>
                            <li>• Demonstrate commitment to excellence</li>
                          </>
                        )}
                        {event.id === 6 && (
                          <>
                            <li>• Show genuine concern for team well-being</li>
                            <li>• Create a supportive work environment</li>
                            <li>• Build a culture of care and empathy</li>
                          </>
                        )}
                      </ul>
                    </div>
                  )}

                  <div className='flex flex-wrap gap-3'>
                    <Button
                      onClick={() => router.push("/collections")}
                      className={`${
                        event.buttonColor
                      } text-brand-light font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                        event.specialEffects
                          ? "hover:scale-105 hover:shadow-[0_0_30px_rgba(218,167,85,0.5)]"
                          : ""
                      }`}
                    >
                      {event.specialEffects ? "✨ Discover Magic ✨" : "Explore"}
                    </Button>
                    <Button
                      onClick={() => router.push("/contact")}
                      className='bg-white/80 text-brand-brown font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-brand-gold/30'
                    >
                      📞 Get Quote
                    </Button>
                  </div>
                </div>
              </div>

              {/* Enhanced Image/Visual Section */}
              <div
                className={`relative w-full lg:w-1/2 ${
                  event.backgroundImage ? "p-0 overflow-hidden" : "p-12 lg:p-16"
                } ${
                  event.backgroundImage ? "bg-transparent" : event.accentColor
                } flex items-center justify-center min-h-[400px]`}
              >
                {/* Background Image for Diwali - Right Side Only */}
                {event.backgroundImage && (
                  <div
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-110'
                    style={{
                      backgroundImage: `url('${event.backgroundImage}')`
                    }}
                  />
                )}

                {/* Enhanced Golden Overlay */}
                {event.backgroundImage && (
                  <div
                    className={
                      "absolute inset-0 bg-gradient-to-br from-brand-light/90 via-brand-gold/30 to-brand-amber/40 scale-110"
                    }
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className='text-center mt-20 bg-gradient-to-r from-brand-gold to-brand-amber rounded-3xl p-12 shadow-2xl'>
          <h3 className='text-3xl lg:text-4xl font-bold text-brand-brown mb-6'>
            Ready to Build Meaningful Connections?
          </h3>
          <p className='text-xl text-brand-dark mb-8 max-w-2xl mx-auto'>
            {`Let's work together to create gifting experiences that strengthen
            your relationships and drive real business value. We're committed to
            understanding your needs and delivering solutions that make a
            difference.`}
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button
              onClick={() => router.push("/collections")}
              className='bg-brand-brown text-brand-light font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg'
            >
              🏢 Start Your Journey
            </Button>
            <Button
              onClick={() => router.push("/contact")}
              className='bg-white/90 text-brand-brown font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg border border-brand-gold/30'
            >
              📞 {"Let's Connect"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
