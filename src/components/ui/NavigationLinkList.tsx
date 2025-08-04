/**
 * Reusable Navigation Link List Component
 * Eliminates repeated link list patterns in Footer and other navigation areas
 */

import Link from "next/link";
import { cn } from "@lib/utils";

interface NavigationLink {
  href: string;
  label: string;
  external?: boolean;
}

interface NavigationLinkListProps {
  title: string;
  links: NavigationLink[];
  variant?: "footer" | "sidebar" | "dropdown";
  className?: string;
  onLinkClick?: (href: string) => void;
}

const variantStyles = {
  footer: {
    title: "text-base md:text-lg font-bold text-brand-light mb-3 md:mb-4",
    container: "space-y-2",
    link: "text-brand-gold hover:text-brand-light transition-colors cursor-pointer hover:translate-x-1 transition-transform text-sm"
  },
  sidebar: {
    title: "text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide",
    container: "space-y-1",
    link: "text-gray-600 hover:text-brand-brown text-sm py-1 block"
  },
  dropdown: {
    title: "text-base font-semibold text-brand-brown mb-3",
    container: "space-y-2",
    link: "block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
  }
};

export default function NavigationLinkList({
  title,
  links,
  variant = "footer",
  className = "",
  onLinkClick
}: NavigationLinkListProps) {
  const styles = variantStyles[variant];

  const handleLinkClick = (href: string) => {
    if (onLinkClick) {
      onLinkClick(href);
    }
  };

  return (
    <div className={cn(className)}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.container}>
        {links.map(link => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.link}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className={styles.link}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
