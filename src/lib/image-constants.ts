// Image Constants - Replace these URLs with S3 URLs later
export const IMAGES = {
  // Logo
  LOGO_DARK: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/logo-dark.png",
  LOGO_LIGHT: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/logo-light.png",

  // Map Collections to Existing Images
  // Business Collections
  EMPLOYEE_ONBOARDING:
    "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/hampers-corporate_1.jpg",
  MILESTONE: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/welcome-gift_1.png",
  CORPORATE_EVENT:
    "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/milestone_1.png",

  // Festival Collections (map to existing images)
  DIWALI: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/hampers-diwali_6.jpeg",
  RAKSHABANDHAN:
    "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/hampers-rakshabandhan_2.jpeg",
  CHRISTMAS_NEW_YEAR:
    "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/business-celebration.png",

  // Wedding Collections
  WEDDING_WELCOME_HAMPERS:
    "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/wedding-hampers_1.png",
  WEDDING_RETURN_HAMPERS:
    "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/wedding-hampers_1.png",
  BRIDAL_PARTY_HAMPERS:
    "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/wedding-hampers_1.png",

  // Personal Collections (map to existing images)
  BIRTHDAY_CELEBRATION:
    "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/gifts/gift_5.jpeg",
  ANNIVERSARY_LOVE_STORY:
    "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/hampers-birthday_1.jpeg",
  FAMILY_HAMPER:
    "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/family-hamper_1.png",
  NEW_BABY_BLESSINGS:
    "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/hampers_baby-shower_1.jpeg",

  // Hero/Background Images
  HERO_BACKGROUND: "https://shubhhampers.s3.ap-south-1.amazonaws.com/website/images/gift_9.jpeg"
} as const;

// Image Alt Text Constants
export const IMAGE_ALT = {
  LOGO: "Shubhhampers Logo",
  BUSINESS_CELEBRATION: "Business Celebration Hamper",
  FAMILY_HAMPER: "Family Hamper Collection",
  MILESTONE: "Milestone Celebration Hamper",
  RETURN_HAMPER: "Return & Thank You Hamper",
  WEDDING_HAMPERS: "Wedding Celebration Hampers",
  WELCOME_GIFT: "Welcome Gift Hamper",

  // Collections Alt Text (using descriptive names)
  // Business Collections
  EMPLOYEE_ONBOARDING: "Employee Onboarding Excellence Hamper",
  CLIENT_APPRECIATION: "Client Appreciation Excellence Hamper",
  CORPORATE_FESTIVALS: "Corporate Festival Celebrations Hamper",

  // Wedding Collections
  WEDDING_WELCOME_HAMPERS: "Wedding Room Hampers",
  WEDDING_RETURN_HAMPERS: "Wedding Return Hampers",
  BRIDAL_PARTY_HAMPERS: "Bridesmaid Hampers",

  // Festival Collections
  DIWALI_MAGIC: "Diwali Magic Collection Hamper",
  RAKSHA_BANDHAN: "Raksha Bandhan Bonds Hamper",
  CHRISTMAS_NEW_YEAR: "Christmas & New Year Celebration Hamper",

  // Personal Collections
  BIRTHDAY_CELEBRATION_MAGIC: "Birthday Celebration Magic Hamper",
  ANNIVERSARY_LOVE_STORY: "Marriage & Anniversary Hamper",
  NEW_BABY_BLESSINGS: "Baby Announcement Hamper",

  HERO_BACKGROUND: "Corporate Hamper Background"
} as const;
