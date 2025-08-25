import { IMAGES } from "./image-constants";

// Mock data for all hamper pages
export interface HamperProduct {
  id: string;
  title: string;
  subtitle: string;
  priceRange: string;
  startingPrice: string;
  image: string;
  description: string;
  features: string[];
  deliveryTime: string;
  minimumOrder: string;
  bulkBenefit: string;
  bgColor: string;
  accentColor: string;
  category: string;
  backgroundImage?: string;
  textColor?: string;
  bgGradient?: string;
}

export interface HamperPageData {
  pageTitle: string;
  pageSubtitle: string;
  heroTitle: string;
  heroDescription: string;
  seoDescription: string;
  products: HamperProduct[];
  category: string;
}

// All hamper products data
export const ALL_HAMPER_PRODUCTS: HamperProduct[] = [
  // Wedding Hampers
  {
    id: "wedding-welcome-hampers",
    title: "Wedding Room Hampers",
    subtitle: "Embrace Guests with Love",
    category: "wedding",
    priceRange: "₹1,200 - ₹4,500",
    startingPrice: "₹1,200",
    image: "💒",
    description:
      "Welcome your beloved guests with hampers that express the overflowing joy in your hearts. Create that perfect first moment when loved ones feel the warmth of your celebration and the depth of your gratitude for their presence.",
    features: ["Warm Welcomes", "Guest Appreciation", "Traditional Touch", "Joyful Presentation"],
    deliveryTime: "3-5 days",
    minimumOrder: "50 pieces",
    bulkBenefit: "20% off on 100+ orders",
    bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
    accentColor: "from-brand-gold to-brand-amber",
    backgroundImage: IMAGES.WEDDING_WELCOME_HAMPERS,
    textColor: "text-white",
    bgGradient: "from-brand-light/90 via-brand-gold/80 to-brand-amber/90"
  },
  {
    id: "wedding-return-hampers",
    title: "Wedding Return Hampers",
    subtitle: "Gratitude That Echoes Forever",
    category: "wedding",
    priceRange: "₹800 - ₹3,000",
    startingPrice: "₹800",
    image: "🎁",
    description:
      "Express heartfelt thanks with hampers that guests will treasure long after your special day. Each meaningful keepsake reminds loved ones of the joy they helped create and the love that surrounded your celebration.",
    features: ["Lasting Keepsakes", "Heartfelt Thanks", "Memory Creation", "Love Tokens"],
    deliveryTime: "3-5 days",
    minimumOrder: "100 pieces",
    bulkBenefit: "25% off on 200+ orders",
    bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
    accentColor: "from-brand-light to-brand-gold",
    backgroundImage: IMAGES.WEDDING_RETURN_HAMPERS,
    textColor: "text-white",
    bgGradient: "from-brand-gold/90 via-brand-amber/80 to-brand-brown/90"
  },
  {
    id: "bridal-party-hampers",
    title: "Bridesmaid Hampers",
    subtitle: "Honor Your Closest Supporters",
    category: "wedding",
    priceRange: "₹1,500 - ₹5,000",
    startingPrice: "₹1,500",
    image: "👰",
    description:
      "Show your bridal party how much their love and support means to you. These specially curated hampers express gratitude to the special people who've stood by your side through your journey to this beautiful moment.",
    features: [
      "Friendship Celebration",
      "Support Recognition",
      "Personal Touch",
      "Beautiful Memories"
    ],
    deliveryTime: "2-4 days",
    minimumOrder: "5 pieces",
    bulkBenefit: "15% off on 10+ orders",
    bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
    accentColor: "from-brand-amber to-brand-brown",
    backgroundImage: IMAGES.BRIDAL_PARTY_HAMPERS,
    textColor: "text-white",
    bgGradient: "from-brand-gold/90 via-brand-amber/80 to-brand-brown/90"
  },

  // Festival Hampers
  {
    id: "diwali-magic",
    title: "Diwali Magic Collection",
    subtitle: "Illuminate Hearts and Relationships",
    category: "festival",
    priceRange: "₹1,500 - ₹6,000",
    startingPrice: "₹1,500",
    image: "✨",
    description:
      "Feel the warmth of Diwali through hampers that capture the festival's true spirit. Each carefully curated collection brings traditional joy and modern elegance together, creating moments that strengthen bonds and illuminate relationships for years to come.",
    features: ["Traditional Sweets", "Premium Items", "Custom Packaging", "Cultural Authenticity"],
    deliveryTime: "2-4 days",
    minimumOrder: "10 pieces",
    bulkBenefit: "40% off on 50+ orders",
    bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
    accentColor: "from-brand-amber to-brand-brown",
    backgroundImage: IMAGES.DIWALI,
    textColor: "text-white",
    bgGradient: "from-brand-gold/90 via-brand-amber/80 to-brand-brown/90"
  },
  {
    id: "raksha-bandhan",
    title: "Raksha Bandhan Bonds",
    subtitle: "Celebrate Sacred Sibling Love",
    category: "festival",
    priceRange: "₹500 - ₹2,500",
    startingPrice: "₹500",
    image: "💕",
    description:
      "Honor the unbreakable bond between siblings with hampers that touch the heart. Our Raksha Bandhan collection celebrates this sacred relationship with traditional elements and modern touches that create treasured memories.",
    features: [
      "Sacred Rakshabandhan Threads",
      "Sweet Traditions",
      "Heartfelt Messages",
      "Sibling Love"
    ],
    deliveryTime: "2-3 days",
    minimumOrder: "20 pieces",
    bulkBenefit: "25% off on 50+ orders",
    bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
    accentColor: "from-brand-light to-brand-gold",
    backgroundImage: IMAGES.RAKSHABANDHAN,
    textColor: "text-white",
    bgGradient: "from-brand-amber/90 via-brand-light/80 to-brand-gold/90"
  },
  {
    id: "christmas-new-year",
    title: "Christmas & New Year Celebration",
    subtitle: "Joy, Hope, and Fresh Beginnings",
    category: "festival",
    priceRange: "₹1,000 - ₹4,500",
    startingPrice: "₹1,000",
    image: "🎄",
    description:
      "Welcome the season of giving and new possibilities with hampers that inspire hope and spread joy. Create magical moments that celebrate achievements and set the tone for wonderful new beginnings ahead.",
    features: ["Holiday Magic", "New Year Inspiration", "Seasonal Joy", "Hope & Renewal"],
    deliveryTime: "3-5 days",
    minimumOrder: "15 pieces",
    bulkBenefit: "35% off on 75+ orders",
    bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
    accentColor: "from-brand-gold to-brand-brown",
    backgroundImage: IMAGES.CHRISTMAS_NEW_YEAR,
    textColor: "text-white",
    bgGradient: "from-brand-light/90 via-brand-gold/80 to-brand-brown/90"
  },

  // Business Hampers
  {
    id: "employee-onboarding",
    title: "Employee Onboarding Excellence",
    subtitle: "Welcome New Team Members with Heart",
    category: "business",
    priceRange: "₹2,000 - ₹8,000",
    startingPrice: "₹2,000",
    image: "🎯",
    description:
      "Transform first days into lasting memories. Our thoughtfully curated onboarding hampers help new team members feel genuinely valued from day one, creating positive impressions that strengthen company culture and employee loyalty.",
    features: [
      "Premium Welcome Kit",
      "Company Branded Items",
      "Personal Touch",
      "Quality Essentials"
    ],
    deliveryTime: "2-3 business days",
    minimumOrder: "10 pieces",
    bulkBenefit: "25% off on 50+ orders",
    bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
    accentColor: "from-brand-amber to-brand-brown",
    backgroundImage: IMAGES.EMPLOYEE_ONBOARDING,
    textColor: "text-white",
    bgGradient: "from-brand-amber/90 via-brand-gold/80 to-brand-brown/90"
  },
  {
    id: "client-appreciation",
    title: "Client Appreciation Excellence",
    subtitle: "Strengthen Business Partnerships",
    category: "business",
    priceRange: "₹3,000 - ₹15,000",
    startingPrice: "₹3,000",
    image: "🤝",
    description:
      "Show clients they're truly valued with hampers that speak volumes about your gratitude. Every carefully selected item reflects your commitment to excellence and deepens business relationships that drive mutual success.",
    features: [
      "Premium Quality",
      "Custom Branding",
      "Executive Presentation",
      "Relationship Building"
    ],
    deliveryTime: "2-4 days",
    minimumOrder: "5 pieces",
    bulkBenefit: "30% off on 25+ orders",
    bgColor: "bg-gradient-to-br from-brand-brown/20 to-brand-gold/20",
    accentColor: "from-brand-gold to-brand-amber",
    backgroundImage: IMAGES.EMPLOYEE_ONBOARDING, // Using existing corporate image
    textColor: "text-white",
    bgGradient: "from-brand-brown/90 via-brand-gold/80 to-brand-amber/90"
  },
  {
    id: "business-festivals",
    title: "Corporate Festival Celebrations",
    subtitle: "Unite Teams Through Tradition",
    category: "business",
    priceRange: "₹2,500 - ₹8,000",
    startingPrice: "₹2,500",
    image: "🏢",
    description:
      "Honor traditions while building stronger workplace bonds. Our corporate festival hampers help teams celebrate together, creating shared moments of joy that transcend professional boundaries and build lasting connections.",
    features: ["Cultural Sensitivity", "Team Unity", "Traditional Elements", "Modern Presentation"],
    deliveryTime: "3-5 days",
    minimumOrder: "20 pieces",
    bulkBenefit: "35% off on 100+ orders",
    bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
    accentColor: "from-brand-gold to-brand-brown",
    backgroundImage: IMAGES.CORPORATE_EVENT,
    textColor: "text-white",
    bgGradient: "from-brand-light/90 via-brand-gold/80 to-brand-brown/90"
  },

  // Personal Hampers
  {
    id: "birthday-celebration",
    title: "Birthday Celebration Magic",
    subtitle: "Making Special Days Unforgettable",
    category: "personal",
    priceRange: "₹800 - ₹3,500",
    startingPrice: "₹800",
    image: "🎂",
    description:
      "Transform ordinary birthdays into extraordinary celebrations with hampers that capture the magic of growing older surrounded by love. Each thoughtfully chosen item adds sparkle to their special day and creates memories to treasure.",
    features: ["Birthday Magic", "Personal Touch", "Celebration Joy", "Memory Making"],
    deliveryTime: "1-3 days",
    minimumOrder: "1 piece",
    bulkBenefit: "15% off on 10+ orders",
    bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-amber/20",
    accentColor: "from-brand-amber to-brand-brown",
    backgroundImage: IMAGES.BIRTHDAY_CELEBRATION,
    textColor: "text-white",
    bgGradient: "from-brand-gold/90 via-brand-amber/80 to-brand-brown/90"
  },
  {
    id: "anniversary-love-story",
    title: "Marriage & Anniversary",
    subtitle: "Celebrating Enduring Bonds",
    category: "personal",
    priceRange: "₹1,200 - ₹5,000",
    startingPrice: "₹1,200",
    image: "💕",
    description:
      "Honor the beautiful journey of love that grows stronger with each passing year. Our anniversary hampers celebrate milestones that matter, creating new chapters in your love story that will be remembered forever.",
    features: ["Love Stories", "Milestone Moments", "Romantic Touch", "Enduring Bonds"],
    deliveryTime: "2-4 days",
    minimumOrder: "1 piece",
    bulkBenefit: "20% off on 5+ orders",
    bgColor: "bg-gradient-to-br from-brand-amber/20 to-brand-light/20",
    accentColor: "from-brand-light to-brand-gold",
    backgroundImage: IMAGES.ANNIVERSARY_LOVE_STORY,
    textColor: "text-white",
    bgGradient: "from-brand-amber/90 via-brand-light/80 to-brand-gold/90"
  },
  {
    id: "new-baby-blessings",
    title: "Baby Announcement",
    subtitle: "Welcome Little Miracles with Love",
    category: "personal",
    priceRange: "₹1,000 - ₹4,000",
    startingPrice: "₹1,000",
    image: "👶",
    description:
      "Celebrate the arrival of precious little miracles with hampers that shower new families with love and support. Each thoughtful item helps welcome the newest member and honors this beautiful beginning.",
    features: ["Baby Essentials", "Family Celebration", "Gentle Care", "Precious Moments"],
    deliveryTime: "1-3 days",
    minimumOrder: "1 piece",
    bulkBenefit: "15% off on 5+ orders",
    bgColor: "bg-gradient-to-br from-brand-light/20 to-brand-gold/20",
    accentColor: "from-brand-gold to-brand-amber",
    backgroundImage: IMAGES.NEW_BABY_BLESSINGS,
    textColor: "text-white",
    bgGradient: "from-brand-light/90 via-brand-gold/80 to-brand-amber/90"
  }
];

// Individual hamper page data (for specific hamper types)
export const INDIVIDUAL_HAMPER_PAGES: Record<string, HamperPageData> = {
  // Category pages (list all hampers in that category)
  "festival-gift-hampers": {
    pageTitle: "Festival Gift Hampers",
    pageSubtitle: "Festival Celebrations",
    heroTitle: "Festival Gift Hampers for Sacred Celebrations",
    heroDescription:
      "Celebrate traditions and strengthen bonds with our authentic festival hampers. From Diwali to Christmas, each hamper brings the true spirit of celebration to your loved ones.",
    seoDescription:
      "Traditional festival hampers for Diwali, Holi, Christmas, Raksha Bandhan and special celebrations. Authentic festival gift hampers with quality items. Buy festival hampers online.",
    category: "festival",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.category === "festival")
  },

  "wedding-gift-hampers": {
    pageTitle: "Wedding Gift Hampers",
    pageSubtitle: "Wedding Celebrations",
    heroTitle: "Wedding Gift Hampers for Unforgettable Moments",
    heroDescription:
      "Create magical moments for your special day with our thoughtfully curated wedding hampers. From welcoming guests to expressing gratitude, every hamper tells a story of love and celebration.",
    seoDescription:
      "Beautiful wedding hampers for guests, welcome gifts, and bridal celebrations. Wedding gift hampers with elegant packaging and thoughtful curation. Order wedding hampers online.",
    category: "wedding",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.category === "wedding")
  },

  "business-gift-hampers": {
    pageTitle: "Business Gift Hampers",
    pageSubtitle: "Corporate Solutions",
    heroTitle: "Corporate Gift Hampers for Professional Excellence",
    heroDescription:
      "Strengthen business relationships and boost team morale with our professional corporate hampers. From employee appreciation to client relationships, we help you build lasting connections.",
    seoDescription:
      "Corporate hampers for employee appreciation, client relationships, and business celebrations. Professional business hampers with custom branding. Corporate hamper delivery.",
    category: "business",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.category === "business")
  },

  "personal-gift-hampers": {
    pageTitle: "Personal Gift Hampers",
    pageSubtitle: "Personal Celebrations",
    heroTitle: "Personal Gift Hampers for Life's Special Moments",
    heroDescription:
      "Celebrate life's special moments with our personalized hampers. From birthdays to anniversaries, each hamper is crafted to create unforgettable memories and strengthen personal bonds.",
    seoDescription:
      "Personal celebration hampers for birthdays, anniversaries, and special moments. Customizable gift hampers with heartfelt touches. Personal hamper delivery.",
    category: "personal",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.category === "personal")
  },

  // Specific hamper types
  "diwali-gift-hampers": {
    pageTitle: "Diwali Gift Hampers",
    pageSubtitle: "Diwali Celebrations",
    heroTitle: "Diwali Magic Gift Hampers",
    heroDescription:
      "Illuminate hearts and relationships with our Diwali hampers that capture the festival's true spirit. Traditional joy meets modern elegance.",
    seoDescription:
      "Diwali gift hampers with traditional sweets and premium items. Authentic Diwali hampers for celebrations. Buy Diwali hampers online.",
    category: "festival",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.id === "diwali-magic")
  },

  "christmas-gift-hampers": {
    pageTitle: "Christmas Gift Hampers",
    pageSubtitle: "Christmas Celebrations",
    heroTitle: "Christmas & New Year Gift Hampers",
    heroDescription:
      "Welcome the season of giving with hampers that inspire hope and spread joy. Create magical moments that celebrate achievements and new beginnings.",
    seoDescription:
      "Christmas gift hampers and New Year celebration hampers. Holiday magic hampers with seasonal joy. Buy Christmas hampers online.",
    category: "festival",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.id === "christmas-new-year")
  },

  "raksha-bandhan-gift-hampers": {
    pageTitle: "Raksha Bandhan Gift Hampers",
    pageSubtitle: "Raksha Bandhan Celebrations",
    heroTitle: "Raksha Bandhan Gift Hampers",
    heroDescription:
      "Honor the unbreakable bond between siblings with hampers that touch the heart. Our Raksha Bandhan collection celebrates this sacred relationship with traditional elements and modern touches.",
    seoDescription:
      "Raksha Bandhan gift hampers for siblings. Raksha Bandhan hampers with traditional elements and heartfelt messages. Buy Raksha Bandhan hampers online.",
    category: "festival",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.id === "raksha-bandhan")
  },

  "wedding-welcome-gift-hampers": {
    pageTitle: "Wedding Welcome Gift Hampers",
    pageSubtitle: "Guest Welcome",
    heroTitle: "Wedding Room Hampers for Guests",
    heroDescription:
      "Welcome your beloved guests with hampers that express the overflowing joy in your hearts. Create that perfect first moment when loved ones feel the warmth of your celebration.",
    seoDescription:
      "Beautiful wedding welcome hampers for guests with elegant packaging and thoughtful curation. Perfect for wedding room gifts and guest appreciation.",
    category: "wedding",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.id === "wedding-welcome-hampers")
  },

  "wedding-return-gift-hampers": {
    pageTitle: "Wedding Return Gift Hampers",
    pageSubtitle: "Guest Thank You",
    heroTitle: "Wedding Return Gift Hampers",
    heroDescription:
      "Express heartfelt thanks with hampers that guests will treasure long after your special day. Each meaningful keepsake reminds loved ones of the joy they helped create.",
    seoDescription:
      "Wedding return gift hampers for guests with lasting keepsakes and heartfelt thanks. Perfect wedding thank you gifts.",
    category: "wedding",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.id === "wedding-return-hampers")
  },

  "bridesmaid-gift-hampers": {
    pageTitle: "Bridesmaid Gift Hampers",
    pageSubtitle: "Bridal Party",
    heroTitle: "Bridesmaid Gift Hampers",
    heroDescription:
      "Show your bridal party how much their love and support means to you. These specially curated hampers express gratitude to the special people who've stood by your side.",
    seoDescription:
      "Bridesmaid gift hampers for bridal party. Honor your closest supporters with thoughtful bridesmaid hampers.",
    category: "wedding",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.id === "bridal-party-hampers")
  },

  "birthday-gift-hampers": {
    pageTitle: "Birthday Gift Hampers",
    pageSubtitle: "Birthday Celebrations",
    heroTitle: "Birthday Celebration Gift Hampers",
    heroDescription:
      "Transform ordinary birthdays into extraordinary celebrations with hampers that capture the magic of growing older surrounded by love.",
    seoDescription:
      "Birthday gift hampers for her, him, and all ages. Birthday celebration hampers with personal touch. Buy birthday hampers online.",
    category: "personal",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.id === "birthday-celebration")
  },

  "anniversary-gift-hampers": {
    pageTitle: "Anniversary Gift Hampers",
    pageSubtitle: "Anniversary Celebrations",
    heroTitle: "Marriage & Anniversary Gift Hampers",
    heroDescription:
      "Honor the beautiful journey of love that grows stronger with each passing year. Celebrate milestones that matter with our anniversary hampers.",
    seoDescription:
      "Anniversary gift hampers for couples. Marriage anniversary hampers with romantic touch. Buy anniversary hampers online.",
    category: "personal",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.id === "anniversary-love-story")
  },

  "baby-announcement-gift-hampers": {
    pageTitle: "Baby Announcement Gift Hampers",
    pageSubtitle: "New Baby Celebrations",
    heroTitle: "Baby Announcement Gift Hampers",
    heroDescription:
      "Celebrate the arrival of precious little miracles with hampers that shower new families with love and support. Each thoughtful item helps welcome the newest member.",
    seoDescription:
      "Baby announcement gift hampers for new parents. Welcome little miracles with thoughtful baby hampers.",
    category: "personal",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.id === "new-baby-blessings")
  },

  "corporate-gift-hampers": {
    pageTitle: "Corporate Gift Hampers",
    pageSubtitle: "Employee Appreciation",
    heroTitle: "Employee Onboarding Gift Hampers",
    heroDescription:
      "Transform first days into lasting memories. Our thoughtfully curated onboarding hampers help new team members feel genuinely valued from day one.",
    seoDescription:
      "Corporate gift hampers for employee onboarding and appreciation. Professional business hampers with custom branding.",
    category: "business",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.id === "employee-onboarding")
  },

  "client-appreciation-gift-hampers": {
    pageTitle: "Client Appreciation Gift Hampers",
    pageSubtitle: "Business Relationships",
    heroTitle: "Client Appreciation Gift Hampers",
    heroDescription:
      "Show clients they're truly valued with hampers that speak volumes about your gratitude. Every carefully selected item reflects your commitment to excellence.",
    seoDescription:
      "Client appreciation gift hampers for business relationships. Professional corporate hampers for client gifting.",
    category: "business",
    products: ALL_HAMPER_PRODUCTS.filter(p => p.id === "client-appreciation")
  }
};

// Helper function to get page data by slug
export function getHamperPageData(slug: string): HamperPageData | null {
  // Check individual hamper pages
  if (INDIVIDUAL_HAMPER_PAGES[slug]) {
    return INDIVIDUAL_HAMPER_PAGES[slug];
  }

  return null;
}

// Helper function to get all available slugs
export function getAllHamperSlugs(): string[] {
  return Object.keys(INDIVIDUAL_HAMPER_PAGES);
}
