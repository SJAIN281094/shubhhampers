export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown content
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readTime: number; // in minutes
  isPublished: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "hamper-ideas",
    name: "Hamper Ideas",
    slug: "hamper-ideas",
    description: "Creative ideas and inspiration for hamper gifting",
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: "gifting-tips",
    name: "Gifting Tips",
    slug: "gifting-tips",
    description: "Expert tips for thoughtful gifting",
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: "celebrations",
    name: "Celebrations",
    slug: "celebrations",
    description: "Festival and occasion celebration guides",
    color: "bg-green-100 text-green-800"
  },
  {
    id: "business-insights",
    name: "Business Insights",
    slug: "business-insights",
    description: "Corporate gifting strategies and insights",
    color: "bg-orange-100 text-orange-800"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "diwali-hamper-guide-2024",
    title: "The Ultimate Guide to Diwali Hampers 2024: Spreading Joy and Light",
    slug: "diwali-hamper-guide-2024",
    excerpt:
      "Discover the perfect Diwali hamper ideas that blend tradition with modern gifting. From artisanal sweets to premium dry fruits, create memorable celebrations.",
    content: `# The Ultimate Guide to Diwali Hampers 2024: Spreading Joy and Light

Diwali, the festival of lights, is a time when hearts connect through the beautiful tradition of gift-giving. At Shubhhampers, we believe that the perfect Diwali hamper is more than just a collection of items—it's a vessel of love, respect, and celebration.

## What Makes a Perfect Diwali Hamper?

### Traditional Elements
- **Premium Sweets**: Artisanal mithai from renowned sweet shops
- **Dry Fruits & Nuts**: Carefully selected almonds, cashews, dates, and figs
- **Diyas & Candles**: Beautiful decorative diyas to light up homes
- **Rangoli Supplies**: Colorful powders and stencils for stunning designs

### Modern Touches
- **Gourmet Chocolates**: International brands mixed with Indian flavors
- **Eco-friendly Items**: Sustainable packaging and green products
- **Personalized Cards**: Custom messages that touch the heart
- **Premium Tea/Coffee**: Exotic blends for cozy celebrations

## Categories for Different Recipients

### Family & Friends
Create warmth with traditional sweets, homemade treats, and personal touches that show you care.

### Corporate Clients
Professional yet festive hampers featuring premium items, branded elements, and elegant packaging.

### Neighbors & Colleagues
Thoughtful medium-sized hampers that express gratitude without being overwhelming.

## DIY vs Professional Hampers

While creating your own hamper can be personal, professional curation ensures:
- **Quality Assurance**: Every item is premium grade
- **Beautiful Presentation**: Expert packaging that wows
- **Time Saving**: Focus on celebrating, not shopping
- **Dietary Considerations**: Options for various preferences

## Making It Personal

The magic of a hamper lies in personalization:
- Include a handwritten note
- Add family photos or memories
- Choose items based on recipient's preferences
- Include regional specialties

## Conclusion

This Diwali, let your hampers be messengers of joy. Whether you choose traditional elements or modern twists, the thought and care you put in will light up hearts just like the festival lights up homes.

**Ready to create the perfect Diwali hamper?** Contact Shubhhampers today for expert curation that brings smiles and strengthens relationships.`,
    author: "Shubhhampers Team",
    publishedAt: "2024-01-20T10:00:00Z",
    category: "celebrations",
    tags: ["diwali", "festival", "hampers", "traditions", "gifts"],
    featuredImage: "https://placehold.co/800x400/DAA520/FFFFFF?text=Diwali+Hampers",
    readTime: 5,
    isPublished: true,
    seo: {
      title: "Ultimate Diwali Hamper Guide 2024 | Traditional & Modern Ideas",
      description:
        "Create perfect Diwali hampers with our comprehensive guide. Traditional sweets, modern touches, and expert tips for memorable celebrations.",
      keywords: [
        "diwali hampers",
        "festival gifts",
        "traditional sweets",
        "corporate diwali gifts",
        "diwali celebration"
      ]
    }
  },
  {
    id: "corporate-gifting-strategy",
    title: "Corporate Gifting Strategy: Building Stronger Business Relationships",
    slug: "corporate-gifting-strategy",
    excerpt:
      "Master the art of corporate gifting with strategic insights that strengthen business relationships, boost employee morale, and enhance brand reputation.",
    content: `# Corporate Gifting Strategy: Building Stronger Business Relationships

In today's competitive business landscape, corporate gifting has evolved from a simple courtesy to a strategic tool for relationship building, employee engagement, and brand enhancement.

## The Strategic Value of Corporate Gifting

### Relationship Building
Corporate gifts serve as:
- **Trust Builders**: Demonstrating appreciation and commitment
- **Memory Makers**: Creating positive associations with your brand
- **Conversation Starters**: Opening doors for future collaborations

### Employee Engagement
Internal gifting strategies can:
- Boost morale and motivation
- Recognize achievements and milestones
- Foster team spirit and loyalty
- Reduce turnover rates

## Types of Corporate Gifts

### Client Appreciation Gifts
- **Premium Hampers**: Curated selections showing thoughtfulness
- **Branded Items**: Subtle brand reminders with utility
- **Experience Gifts**: Memorable experiences over material items

### Employee Recognition
- **Achievement Awards**: Celebrating individual and team success
- **Wellness Hampers**: Showing care for employee well-being
- **Festival Gifts**: Celebrating cultural diversity and inclusion

### Executive Gifts
- **Luxury Items**: Premium quality reflecting company standards
- **Personalized Options**: Custom engraving or monogramming
- **Cultural Sensitivity**: Respecting diverse backgrounds and preferences

## Best Practices for Corporate Gifting

### Timing is Everything
- **Quarterly Reviews**: Marking business milestones
- **Festivals & Holidays**: Culturally relevant occasions
- **Project Completions**: Celebrating successful collaborations
- **New Partnerships**: Welcoming new business relationships

### Budget Considerations
Create tiered gifting strategies:
- **Tier 1**: Key clients and C-level executives
- **Tier 2**: Regular clients and senior managers
- **Tier 3**: New contacts and team members

### Compliance & Ethics
Always ensure:
- Company policy compliance
- Industry regulation adherence
- Cultural appropriateness
- Transparent gift value disclosure

## Measuring ROI on Corporate Gifting

### Quantitative Metrics
- Client retention rates
- Employee satisfaction scores
- Referral generation
- Repeat business volume

### Qualitative Indicators
- Feedback quality
- Relationship depth
- Brand perception
- Team morale

## The Shubhhampers Advantage

Our corporate gifting solutions offer:
- **Strategic Consultation**: Tailored to your business needs
- **Quality Assurance**: Premium products and presentation
- **Scalable Solutions**: From single gifts to bulk orders
- **Cultural Sensitivity**: Appropriate for diverse recipients

## Conclusion

Effective corporate gifting is an investment in relationships—both internal and external. When done thoughtfully, it creates lasting impressions that translate into business success.

**Ready to elevate your corporate gifting strategy?** Let Shubhhampers help you create meaningful connections through thoughtful curation.`,
    author: "Business Strategy Team",
    publishedAt: "2024-01-18T14:30:00Z",
    category: "business-insights",
    tags: [
      "corporate gifting",
      "business strategy",
      "employee engagement",
      "client relations",
      "ROI"
    ],
    featuredImage: "https://placehold.co/800x400/8B4513/FFFFFF?text=Corporate+Strategy",
    readTime: 8,
    isPublished: true,
    seo: {
      title: "Corporate Gifting Strategy Guide | Business Relationship Building",
      description:
        "Master corporate gifting with strategic insights for stronger business relationships, employee engagement, and brand enhancement.",
      keywords: [
        "corporate gifting",
        "business strategy",
        "employee engagement",
        "client appreciation",
        "corporate hampers"
      ]
    }
  },
  {
    id: "wedding-hamper-trends-2024",
    title: "Wedding Hamper Trends 2024: Modern Romance Meets Traditional Elegance",
    slug: "wedding-hamper-trends-2024",
    excerpt:
      "Explore the latest wedding hamper trends that perfectly blend modern aesthetics with traditional values, creating unforgettable gifting experiences.",
    content: `# Wedding Hamper Trends 2024: Modern Romance Meets Traditional Elegance

Wedding celebrations are evolving, and so are the gifting traditions. Today's couples and families seek hampers that honor heritage while embracing contemporary style and sustainability.

## Trending Themes for 2024

### Sustainable Luxury
- **Eco-friendly Packaging**: Reusable baskets and biodegradable materials
- **Organic Products**: Natural and chemical-free items
- **Local Sourcing**: Supporting local artisans and businesses
- **Minimal Waste**: Thoughtfully curated items with purpose

### Personalization at Its Peak
- **Custom Monogramming**: Couple's initials on premium items
- **Photo Memories**: Personalized photo frames and albums
- **Favorite Things**: Curated based on couple's preferences
- **Story Telling**: Items that narrate the couple's journey

### Wellness & Self-Care
- **Spa Essentials**: Luxury bath products and aromatherapy
- **Organic Teas**: Calming blends for relaxation
- **Skincare Sets**: Premium, natural beauty products
- **Meditation Items**: Promoting mental well-being

## Popular Wedding Hamper Categories

### Welcome Hampers for Guests
Create first impressions with:
- Regional specialties representing the venue
- Welcome notes with wedding itinerary
- Local treats and refreshments
- Small keepsakes as mementos

### Bridal Party Appreciation
Show gratitude to your squad with:
- Personalized jewelry or accessories
- Luxury skincare and beauty products
- Matching robes or pajama sets
- Heartfelt thank-you notes

### Return Gifts for Guests
Send guests home with:
- Artisanal sweets and treats
- Small potted plants or succulents
- Handcrafted items from local artisans
- Photo frames with wedding pictures

### Couple's Hampers
For the newlyweds themselves:
- Gourmet cooking ingredients for their first meals
- Premium wines or champagne
- Cozy home essentials
- Experience vouchers for future dates

## Design Aesthetics

### Color Trends
- **Sage Green & Cream**: Natural, calming combinations
- **Dusty Rose & Gold**: Romantic, elegant pairings
- **Navy & Copper**: Sophisticated, modern choices
- **Terracotta & Ivory**: Warm, earthy tones

### Packaging Innovation
- **Glass Containers**: Reusable for home organization
- **Woven Baskets**: Sustainable and decorative
- **Wooden Boxes**: Rustic charm with lasting utility
- **Fabric Wraps**: Beautiful, reusable textile packaging

## Cultural Fusion Hampers

### East Meets West
Blending traditions beautifully:
- Traditional sweets with gourmet chocolates
- Indian spices with international gourmet items
- Cultural artifacts with modern home decor
- Regional textiles with contemporary accessories

### Regional Specialties
Celebrating local heritage:
- State-specific delicacies and treats
- Traditional crafts and artwork
- Local music or literature
- Regional festival items

## Budget-Friendly Tips

### Smart Curation
- Mix high-value items with thoughtful smaller ones
- Focus on presentation over price
- Choose quality over quantity
- Consider DIY elements for personal touch

### Bulk Benefits
- Order in advance for better rates
- Consider seasonal availability
- Negotiate package deals
- Plan for volume discounts

## Technology Integration

### QR Code Stories
- Link to couple's love story
- Wedding day video highlights
- Thank you messages from the couple
- Digital photo galleries

### Social Media Integration
- Custom hashtags for wedding
- Instagram-worthy unboxing experiences
- Shareable moments creation
- Digital thank you cards

## Future of Wedding Hampers

### Virtual Reality Experiences
- Virtual venue tours
- Interactive recipe demonstrations
- Augmented reality greeting cards
- Digital memory books

### Subscription Models
- Monthly treats for newlyweds
- Anniversary surprise deliveries
- Seasonal celebration packages
- Ongoing relationship nurturing

## Conclusion

Wedding hampers in 2024 are about creating experiences, not just giving gifts. They're storytelling tools that celebrate love while respecting tradition and embracing innovation.

**Planning your dream wedding hampers?** Let Shubhhampers blend your vision with our expertise to create unforgettable gifting experiences.`,
    author: "Wedding Specialists",
    publishedAt: "2024-01-15T16:45:00Z",
    category: "hamper-ideas",
    tags: ["wedding", "trends", "modern", "traditional", "personalization"],
    featuredImage: "https://placehold.co/800x400/F4A460/FFFFFF?text=Wedding+Trends",
    readTime: 7,
    isPublished: true,
    seo: {
      title: "Wedding Hamper Trends 2024 | Modern & Traditional Ideas",
      description:
        "Discover the latest wedding hamper trends blending modern aesthetics with traditional elegance for unforgettable celebrations.",
      keywords: [
        "wedding hampers",
        "wedding trends 2024",
        "bridal gifts",
        "wedding return gifts",
        "personalized hampers"
      ]
    }
  },
  {
    id: "thoughtful-gifting-psychology",
    title: "The Psychology of Thoughtful Gifting: Creating Emotional Connections",
    slug: "thoughtful-gifting-psychology",
    excerpt:
      "Understand the science behind meaningful gifts and how thoughtful curation can strengthen relationships, express emotions, and create lasting memories.",
    content: `# The Psychology of Thoughtful Gifting: Creating Emotional Connections

Gift-giving is one of humanity's oldest social behaviors, deeply rooted in psychology and culture. Understanding the emotional mechanics behind thoughtful gifting can transform how we connect with others.

## The Science of Gift-Giving

### Neurological Responses
When we give and receive gifts, our brains release:
- **Dopamine**: The reward chemical that creates pleasure
- **Oxytocin**: The bonding hormone that strengthens relationships
- **Serotonin**: The happiness chemical that improves mood
- **Endorphins**: Natural mood elevators that create euphoria

### Psychological Benefits for Givers
- **Enhanced Well-being**: Giving activates the brain's reward center
- **Strengthened Identity**: Expressing values through gift choices
- **Social Connection**: Deepening bonds with recipients
- **Purpose & Meaning**: Contributing to others' happiness

## Elements of Thoughtful Gifting

### Understanding the Recipient
Effective gift-giving requires:
- **Active Listening**: Noting preferences in conversations
- **Observation Skills**: Recognizing needs and interests
- **Empathy**: Understanding emotional states and desires
- **Memory**: Recalling important details and moments

### Timing & Context
The impact of gifts varies by:
- **Life Events**: Celebrations, challenges, transitions
- **Emotional States**: Joy, stress, accomplishment, grief
- **Relationship Stage**: New, developing, established, strained
- **Cultural Context**: Traditions, customs, expectations

## The Curation Advantage

### Why Curation Matters
Professional curation adds value through:
- **Expertise**: Knowledge of quality and trends
- **Time Efficiency**: Saving precious hours
- **Quality Assurance**: Guaranteed satisfaction
- **Presentation**: Beautiful, memorable packaging

### Elements of Expert Curation
- **Theme Development**: Creating cohesive stories
- **Quality Selection**: Choosing premium items
- **Balance**: Mixing practical with indulgent
- **Surprise Factor**: Unexpected delights

## Types of Emotional Connections

### Appreciation & Gratitude
Gifts that say "thank you":
- Recognition of effort and contribution
- Acknowledgment of relationship value
- Expression of genuine gratitude
- Validation of importance

### Love & Affection
Romantic and familial expressions:
- Intimate understanding demonstration
- Emotional vulnerability sharing
- Future commitment symbols
- Cherished memory creation

### Support & Encouragement
Gifts during challenges:
- Comfort during difficult times
- Motivation for goals
- Belief in capabilities
- Presence during absence

### Celebration & Joy
Marking special moments:
- Achievement recognition
- Milestone commemoration
- Happiness amplification
- Success sharing

## Cultural Considerations

### Universal Principles
Across cultures, meaningful gifts share:
- **Thoughtfulness**: Consideration and care
- **Appropriateness**: Suitable for context
- **Quality**: Reflecting respect for recipient
- **Personal Touch**: Individual consideration

### Cultural Variations
Different traditions emphasize:
- **Reciprocity**: Balance in giving and receiving
- **Hierarchy**: Respect for social structures
- **Symbolism**: Meaningful representations
- **Presentation**: Ceremonial importance

## The Digital Age Impact

### Modern Challenges
Technology affects gifting through:
- **Information Overload**: Too many choices
- **Instant Gratification**: Reduced anticipation
- **Distance**: Physical separation challenges
- **Authenticity**: Maintaining personal touch

### Digital Solutions
Technology also enables:
- **Better Research**: Understanding preferences
- **Global Reach**: Connecting across distances
- **Customization**: Personalization options
- **Tracking**: Ensuring successful delivery

## Measuring Emotional Impact

### Immediate Responses
Look for:
- Facial expressions and body language
- Verbal appreciation and surprise
- Emotional reactions (joy, tears, laughter)
- Immediate engagement with items

### Long-term Effects
Assess through:
- Continued use or display of gifts
- Mentions in future conversations
- Reciprocal gesturing
- Relationship quality improvements

## Common Gifting Mistakes

### Thoughtless Choices
Avoid:
- Generic, impersonal items
- Gifts that serve the giver more
- Inappropriate timing or context
- Ignoring stated preferences

### Over-complication
Don't:
- Make it about expense over thought
- Create obligation or pressure
- Overwhelm with too many items
- Lose sight of the recipient's needs

## Building a Gifting Philosophy

### Personal Values
Consider:
- What relationships mean to you
- How you want to be remembered
- What emotions you want to evoke
- How gifts fit your lifestyle

### Practical Guidelines
Develop:
- Budget frameworks for different relationships
- Timing strategies for various occasions
- Quality standards that reflect your values
- Personal touches that make gifts memorable

## The Future of Thoughtful Gifting

### Emerging Trends
- **Experience Gifts**: Creating memories over objects
- **Sustainable Options**: Environmental consciousness
- **Wellness Focus**: Supporting mental and physical health
- **Technology Integration**: Smart, connected gifts

### Timeless Principles
Despite changes, these remain constant:
- Thoughtfulness trumps expense
- Personal touch creates connection
- Quality matters more than quantity
- The story behind the gift adds meaning

## Conclusion

Thoughtful gifting is an art that combines emotional intelligence, cultural awareness, and genuine care. When we understand the psychology behind meaningful gifts, we can create connections that last far beyond the unwrapping moment.

**Ready to create emotionally resonant gifting experiences?** Let Shubhhampers help you express what words cannot, through thoughtfully curated hampers that speak directly to the heart.`,
    author: "Psychology & Gifting Experts",
    publishedAt: "2024-01-12T11:20:00Z",
    category: "gifting-tips",
    tags: ["psychology", "emotional connection", "thoughtful gifting", "relationships", "science"],
    featuredImage: "https://placehold.co/800x400/CD853F/FFFFFF?text=Gift+Psychology",
    readTime: 10,
    isPublished: true,
    seo: {
      title: "Psychology of Thoughtful Gifting | Creating Emotional Connections",
      description:
        "Understand the science behind meaningful gifts and how thoughtful curation strengthens relationships and creates lasting memories.",
      keywords: [
        "gift psychology",
        "thoughtful gifting",
        "emotional connections",
        "gift science",
        "meaningful gifts"
      ]
    }
  }
];

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug && post.isPublished);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  const category = BLOG_CATEGORIES.find(cat => cat.slug === categorySlug);
  if (!category) return [];

  return BLOG_POSTS.filter(post => post.category === category.id && post.isPublished);
}

export function getAllPublishedPosts(): BlogPost[] {
  return BLOG_POSTS.filter(post => post.isPublished).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getRelatedPosts(currentPostSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentPostSlug);
  if (!currentPost) return [];

  return BLOG_POSTS.filter(
    post =>
      post.slug !== currentPostSlug &&
      post.isPublished &&
      (post.category === currentPost.category ||
        post.tags.some(tag => currentPost.tags.includes(tag)))
  )
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function generateBlogsSlugs(): string[] {
  return BLOG_POSTS.filter(post => post.isPublished).map(post => post.slug);
}
