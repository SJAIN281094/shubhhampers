/**
 * Navigation Constants - Centralized navigation configuration
 * Eliminates duplication between DesktopNavigation and MobileNavigation
 */

export interface NavigationItem {
  id: string;
  label: string;
  emoji: string;
  href: string;
  isActive?: (pathname: string) => boolean;
  children?: NavigationSubItem[];
}

export interface NavigationSubItem {
  id: string;
  label: string;
  emoji: string;
  href: string;
  description?: string;
}

// Main navigation configuration
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "festival",
    label: "Festival",
    emoji: "🎆",
    href: "/hampers/festival-gift-hampers",
    isActive: pathname =>
      pathname?.includes("/hampers/festival") || pathname?.includes("festival-gift-hampers"),
    children: [
      {
        id: "festival-all",
        label: "Festival Gift Hampers",
        emoji: "🎆",
        href: "/hampers/festival-gift-hampers",
        description: "All Festival Hampers"
      },
      {
        id: "rakhi",
        label: "Raksha Bandhan Gift Hampers",
        emoji: "🪢",
        href: "/hampers/festival/rakhi-gift-hampers"
      },
      {
        id: "diwali",
        label: "Diwali Gift Hampers",
        emoji: "✨",
        href: "/hampers/festival/diwali-gift-hampers"
      },
      {
        id: "holi",
        label: "Holi Gift Hampers",
        emoji: "🎄",
        href: "/hampers/festival/holi-gift-hampers"
      }
    ]
  },
  {
    id: "wedding",
    label: "Wedding",
    emoji: "💒",
    href: "/hampers/wedding-gift-hampers",
    isActive: pathname =>
      pathname?.includes("/hampers/wedding") || pathname?.includes("wedding-gift-hampers"),
    children: [
      {
        id: "wedding-all",
        label: "Wedding Gift Hampers",
        emoji: "💒",
        href: "/hampers/wedding-gift-hampers",
        description: "All Wedding Hampers"
      },
      {
        id: "bridal",
        label: "Bridal Gift Hampers",
        emoji: "👰",
        href: "/hampers/wedding/bridal-gift-hampers"
      },
      {
        id: "engagement",
        label: "Engagement Gift Hampers",
        emoji: "💍",
        href: "/hampers/wedding/engagement-gift-hampers"
      },
      {
        id: "mehendi",
        label: "Mehendi Gift Hampers",
        emoji: "🎨",
        href: "/hampers/wedding/mehendi-gift-hampers"
      }
    ]
  },
  {
    id: "business",
    label: "Business",
    emoji: "🏢",
    href: "/hampers/business-gift-hampers",
    isActive: pathname =>
      pathname?.includes("/hampers/business") ||
      pathname?.includes("business-gift-hampers") ||
      pathname?.includes("corporate"),
    children: [
      {
        id: "business-all",
        label: "Business Gift Hampers",
        emoji: "🏢",
        href: "/hampers/business-gift-hampers",
        description: "All Business Hampers"
      },
      {
        id: "corporate",
        label: "Corporate Gift Hampers",
        emoji: "👥",
        href: "/hampers/business/corporate-gift-hampers"
      },
      {
        id: "employee",
        label: "Employee Gift Hampers",
        emoji: "🏆",
        href: "/hampers/business/employee-gift-hampers"
      },
      {
        id: "client",
        label: "Client Gift Hampers",
        emoji: "🤝",
        href: "/hampers/business/client-gift-hampers"
      }
    ]
  },
  {
    id: "personal",
    label: "Personal",
    emoji: "💝",
    href: "/hampers/personal-gift-hampers",
    isActive: pathname =>
      pathname?.includes("/hampers/personal") ||
      pathname?.includes("personal-gift-hampers") ||
      pathname?.includes("birthday") ||
      pathname?.includes("anniversary"),
    children: [
      {
        id: "personal-all",
        label: "Personal Gift Hampers",
        emoji: "💝",
        href: "/hampers/personal-gift-hampers",
        description: "All Personal Hampers"
      },
      {
        id: "anniversary",
        label: "Anniversary Gift Hampers",
        emoji: "💕",
        href: "/hampers/personal/anniversary-gift-hampers"
      },
      {
        id: "birthday",
        label: "Birthday Gift Hampers",
        emoji: "🎂",
        href: "/hampers/personal/birthday-gift-hampers"
      }
    ]
  }
];

// Additional navigation items for mobile menu
export const ADDITIONAL_NAVIGATION_ITEMS: NavigationSubItem[] = [
  {
    id: "blogs",
    label: "Blogs",
    emoji: "📝",
    href: "/blogs"
  },
  {
    id: "gallery",
    label: "Gallery",
    emoji: "📸",
    href: "/gallery"
  },
  {
    id: "about",
    label: "About Us",
    emoji: "ℹ️",
    href: "/about"
  },
  {
    id: "contact",
    label: "Contact",
    emoji: "📞",
    href: "/contact"
  }
];

// Category URL mapping for backward compatibility and shared use
export const CATEGORY_URL_MAP: Record<string, string> = {
  festival: "/hampers/festival-gift-hampers",
  wedding: "/hampers/wedding-gift-hampers",
  business: "/hampers/business-gift-hampers",
  personal: "/hampers/personal-gift-hampers"
};

// Utility functions
export const getCategoryUrl = (category: string): string => {
  return CATEGORY_URL_MAP[category?.toLowerCase()] || "/hampers";
};

export const getNavigationItemById = (id: string): NavigationItem | undefined => {
  return NAVIGATION_ITEMS.find(item => item.id === id);
};

export const getNavigationSubItemById = (
  parentId: string,
  subId: string
): NavigationSubItem | undefined => {
  const parent = getNavigationItemById(parentId);
  return parent?.children?.find(child => child.id === subId);
};
