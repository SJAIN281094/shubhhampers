"use client";

import { useState } from "react";
import { Button } from "../../ui-kit/button";
import { useRouter } from "next/navigation";

const catalogueItems = [
  {
    id: 1,
    title: "Diwali Magic",
    subtitle: "Illuminate Relationships",
    description:
      "We believe Diwali is more than a festival—it's a celebration of relationships. Our carefully curated Diwali collection blends traditional warmth with modern elegance, creating gifts that strengthen bonds and create lasting memories.",
    image: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/10.jpeg",
    category: "Festival",
    priceRange: "₹1,500 - ₹5,000",
    features: [
      "Traditional sweets and snacks",
      "Elegant packaging",
      "Customizable content",
      "Corporate branding available"
    ],
    businessValue: [
      "Strengthen relationships during India's most important festival",
      "Show cultural appreciation and understanding",
      "Create memorable brand experiences"
    ]
  },
  {
    id: 2,
    title: "Employee Recognition",
    subtitle: "Celebrate Their Journey",
    description:
      "Your team's dedication deserves meaningful recognition. We help you create appreciation programs that go beyond traditional gifts—building a culture where every achievement is celebrated.",
    image: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/11.jpeg",
    category: "Corporate",
    priceRange: "₹2,000 - ₹8,000",
    features: [
      "Premium quality products",
      "Personalized messages",
      "Bulk ordering available",
      "Delivery to office locations"
    ],
    businessValue: [
      "Build a culture of appreciation and recognition",
      "Strengthen team bonds and loyalty",
      "Show genuine care for your team's well-being"
    ]
  },
  {
    id: 3,
    title: "Client Appreciation",
    subtitle: "Nurture Partnerships",
    description:
      "Every client relationship is precious. Our client appreciation gifts are designed to show genuine gratitude and strengthen the bonds that drive your business forward.",
    image: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/12.jpeg",
    category: "Corporate",
    priceRange: "₹3,000 - ₹10,000",
    features: [
      "Luxury items selection",
      "Professional presentation",
      "Direct client delivery",
      "Custom corporate messaging"
    ],
    businessValue: [
      "Demonstrate genuine gratitude to clients",
      "Strengthen long-term business partnerships",
      "Create meaningful touchpoints throughout the year"
    ]
  },
  {
    id: 4,
    title: "Festival Celebrations",
    subtitle: "Honor Traditions",
    description:
      "India's festivals are celebrations of life, love, and togetherness. Our festival collections honor these traditions while adding modern touches that make celebrations more meaningful.",
    image: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/18.jpeg",
    category: "Festival",
    priceRange: "₹1,200 - ₹4,500",
    features: [
      "Festival-specific items",
      "Traditional and modern blend",
      "Seasonal availability",
      "Cultural authenticity"
    ],
    businessValue: [
      "Honor Indian traditions and cultural values",
      "Strengthen bonds through meaningful celebrations",
      "Show respect for diverse cultural backgrounds"
    ]
  },
  {
    id: 5,
    title: "Corporate Excellence",
    subtitle: "Elevate Your Brand",
    description:
      "Your corporate gifts reflect your brand values. We help you create gifting experiences that align with your company's culture and strengthen your professional relationships.",
    image: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/19.jpeg",
    category: "Corporate",
    priceRange: "₹2,500 - ₹12,000",
    features: [
      "Brand-aligned products",
      "Premium packaging",
      "Corporate logo integration",
      "Executive presentation"
    ],
    businessValue: [
      "Align gifting with your brand values",
      "Strengthen professional relationships",
      "Demonstrate commitment to excellence"
    ]
  },
  {
    id: 6,
    title: "Wellness & Care",
    subtitle: "Prioritize Well-being",
    description:
      "We believe in gifting wellness and care. Our wellness collection focuses on mental and physical well-being, helping you show genuine concern for your team's health.",
    image: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/13.jpeg",
    category: "Wellness",
    priceRange: "₹1,800 - ₹6,000",
    features: [
      "Health and wellness products",
      "Organic and natural items",
      "Stress relief components",
      "Self-care essentials"
    ],
    businessValue: [
      "Show genuine concern for team well-being",
      "Create a supportive work environment",
      "Build a culture of care and empathy"
    ]
  },
  {
    id: 7,
    title: "Holi Festival",
    subtitle: "Colors of Unity",
    description:
      "Holi celebrates the triumph of good over evil and the arrival of spring. Our Holi collection brings communities together with traditional sweets, organic colors, and festive treats.",
    image: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/14.jpeg",
    category: "Festival",
    priceRange: "₹1,000 - ₹3,500",
    features: [
      "Organic Holi colors",
      "Traditional sweets",
      "Festive packaging",
      "Community celebration focus"
    ],
    businessValue: [
      "Foster team unity and celebration",
      "Honor cultural traditions",
      "Create joyful workplace experiences"
    ]
  },
  {
    id: 8,
    title: "New Year Dreams",
    subtitle: "Fresh Beginnings",
    description:
      "Every new year brings hope and possibilities. Our New Year collection helps you inspire and motivate your team and clients with gifts that symbolize fresh starts.",
    image: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/15.jpeg",
    category: "Celebration",
    priceRange: "₹2,000 - ₹7,000",
    features: [
      "Inspirational items",
      "Goal-setting components",
      "Premium quality products",
      "Motivational messaging"
    ],
    businessValue: [
      "Inspire and motivate teams",
      "Set positive tone for the year",
      "Strengthen client relationships"
    ]
  },
  {
    id: 9,
    title: "Raksha Bandhan",
    subtitle: "Sacred Bonds",
    description:
      "Raksha Bandhan celebrates the sacred bond between siblings. Our collection honors this beautiful relationship with traditional sweets, beautiful rakhis, and thoughtful gifts.",
    image: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/16.jpeg",
    category: "Festival",
    priceRange: "₹800 - ₹2,500",
    features: [
      "Traditional rakhis",
      "Sibling-focused gifts",
      "Cultural authenticity",
      "Emotional connection"
    ],
    businessValue: [
      "Honor family relationships",
      "Show cultural sensitivity",
      "Strengthen personal bonds"
    ]
  },
  {
    id: 10,
    title: "Housewarming Joy",
    subtitle: "Bless New Beginnings",
    description:
      "A new home is a new chapter in life. Our housewarming collection helps you welcome friends and family to their new space with thoughtful gifts that bring positive energy.",
    image: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/17.jpeg",
    category: "Personal",
    priceRange: "₹1,500 - ₹5,500",
    features: [
      "Home essentials",
      "Positive energy items",
      "Elegant presentation",
      "Blessing-focused content"
    ],
    businessValue: [
      "Strengthen personal relationships",
      "Show genuine care and support",
      "Create lasting memories"
    ]
  }
];

export default function CataloguePage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Collections", icon: "🎁" },
    { id: "corporate", name: "Corporate", icon: "🏢" },
    { id: "festival", name: "Festivals", icon: "🎊" },
    { id: "wellness", name: "Wellness", icon: "💚" },
    { id: "celebration", name: "Celebrations", icon: "🎉" },
    { id: "personal", name: "Personal", icon: "💝" }
  ];

  const filteredItems =
    selectedCategory === "all"
      ? catalogueItems
      : catalogueItems.filter(item => item.category.toLowerCase() === selectedCategory);

  const handlePrint = () => {
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-brand-light via-brand-gold/20 to-brand-amber/10'>
      {/* Header */}
      <div className='bg-white shadow-lg print:hidden'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <div>
              <h1 className='text-3xl font-bold text-brand-brown'>Product Catalogue</h1>
              <p className='text-brand-dark'>Discover our curated collection of corporate gifts</p>
            </div>
            <div className='flex gap-3'>
              <Button
                onClick={() => router.push("/contact")}
                className='bg-brand-gold text-brand-brown font-semibold px-6 py-2 rounded-full hover:bg-brand-amber transition-colors'
              >
                📞 Get Quote
              </Button>
              <Button
                onClick={handlePrint}
                className='bg-brand-brown text-brand-light font-semibold px-6 py-2 rounded-full hover:bg-brand-dark transition-colors'
              >
                📄 Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className='container mx-auto px-4 py-8 print:hidden'>
        <div className='flex flex-wrap justify-center gap-3'>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-brand-gold text-brand-brown shadow-lg"
                  : "bg-white/80 text-brand-dark hover:bg-brand-gold/20"
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Catalogue Content */}
      <div className='container mx-auto px-4 pb-20'>
        {/* Print Header */}
        <div className='hidden print:block text-center mb-8'>
          <h1 className='text-4xl font-bold text-brand-brown mb-2'>Shubhampers</h1>
          <h2 className='text-2xl font-semibold text-brand-dark mb-4'>
            Corporate Gifting Catalogue
          </h2>
          <p className='text-brand-dark'>
            Building meaningful relationships through thoughtful gifting
          </p>
          <div className='border-t-2 border-brand-gold mt-4 pt-4'>
            <p className='text-sm text-brand-dark'>
              Contact: +91 98765 43210 | Email: info@shubhampers.com | Website: www.shubhampers.com
            </p>
          </div>
        </div>

        {/* Items Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {filteredItems.map(item => (
            <div
              key={item.id}
              className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 print:break-inside-avoid'
            >
              {/* Image Section */}
              <div className='relative h-64 overflow-hidden'>
                <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                <div className='absolute top-4 left-4 bg-brand-gold text-brand-brown px-3 py-1 rounded-full text-sm font-semibold'>
                  {item.category}
                </div>
                <div className='absolute bottom-4 right-4 bg-white/90 text-brand-brown px-3 py-1 rounded-full text-sm font-semibold'>
                  {item.priceRange}
                </div>
              </div>

              {/* Content Section */}
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-brand-brown mb-2'>{item.title}</h3>
                <h4 className='text-lg font-semibold text-brand-dark mb-3'>{item.subtitle}</h4>
                <p className='text-brand-dark mb-4 leading-relaxed'>{item.description}</p>

                {/* Features */}
                <div className='mb-4'>
                  <h5 className='font-semibold text-brand-brown mb-2'>✨ Key Features:</h5>
                  <ul className='text-sm text-brand-dark space-y-1'>
                    {item.features.map((feature, index) => (
                      <li key={index} className='flex items-center'>
                        <span className='text-brand-gold mr-2'>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Value */}
                <div className='mb-4'>
                  <h5 className='font-semibold text-brand-brown mb-2'>💼 Business Value:</h5>
                  <ul className='text-sm text-brand-dark space-y-1'>
                    {item.businessValue.map((value, index) => (
                      <li key={index} className='flex items-center'>
                        <span className='text-brand-gold mr-2'>•</span>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-3 print:hidden'>
                  <Button
                    onClick={() => router.push("/contact")}
                    className='bg-brand-gold text-brand-brown font-semibold px-4 py-2 rounded-full hover:bg-brand-amber transition-colors flex-1'
                  >
                    Get Quote
                  </Button>
                  <Button
                    onClick={() => router.push("/collections")}
                    className='bg-brand-brown text-brand-light font-semibold px-4 py-2 rounded-full hover:bg-brand-dark transition-colors flex-1'
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Print Footer */}
        <div className='hidden print:block mt-12 text-center'>
          <div className='border-t-2 border-brand-gold pt-4'>
            <p className='text-sm text-brand-dark'>
              Thank you for choosing Shubhampers for your corporate gifting needs.
            </p>
            <p className='text-sm text-brand-dark mt-2'>
              For custom solutions and bulk orders, please contact us directly.
            </p>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            margin: 1in;
            size: A4;
          }

          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:block {
            display: block !important;
          }

          .print\\:break-inside-avoid {
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
