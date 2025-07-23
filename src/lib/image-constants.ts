// Image Constants - Replace these URLs with S3 URLs later
export const IMAGES = {
  // Logo
  LOGO_DARK: "/logo-dark.png",
  LOGO_LIGHT: "/logo-light.png",

  // Existing Event Background Images (these actually exist)
  BUSINESS_CELEBRATION: "/business-celebration.png",
  FAMILY_HAMPER: "/family-hamper.png",
  MILESTONE: "/milestone.png",
  RETURN_HAMPER: "/return-hamper.png",
  WEDDING_HAMPERS: "/wedding-hampers.png",
  WELCOME_GIFT: "/welcome-gift.png",

  // Map Collections to Existing Images
  // Business Collections
  EMPLOYEE_ONBOARDING: "/welcome-gift.png", // Use welcome-gift for onboarding
  CLIENT_APPRECIATION: "/business-celebration.png", // Use business-celebration for client appreciation
  CORPORATE_FESTIVALS: "/milestone.png", // Use milestone for corporate festivals

  // Wedding Collections
  WEDDING_WELCOME_HAMPERS: "/wedding-hampers.png", // Use wedding-hampers for welcome
  WEDDING_RETURN_HAMPERS: "/return-hamper.png", // Use return-hamper for wedding return
  BRIDAL_PARTY_HAMPERS: "/family-hamper.png", // Use family-hamper for bridal party

  // Festival Collections (map to existing images)
  DIWALI_MAGIC: "/milestone.png", // Use milestone for Diwali
  RAKSHA_BANDHAN: "/family-hamper.png", // Use family-hamper for Raksha Bandhan
  CHRISTMAS_NEW_YEAR: "/business-celebration.png", // Use business-celebration for Christmas

  // Personal Collections (map to existing images)
  BIRTHDAY_CELEBRATION_MAGIC: "/welcome-gift.png", // Use welcome-gift for birthday
  ANNIVERSARY_LOVE_STORY: "/family-hamper.png", // Use family-hamper for anniversary
  NEW_BABY_BLESSINGS: "/welcome-gift.png", // Use welcome-gift for baby

  // Hero/Background Images
  HERO_BACKGROUND: "https://the-little-basket.s3.us-east-1.amazonaws.com/images/17.jpeg"
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
