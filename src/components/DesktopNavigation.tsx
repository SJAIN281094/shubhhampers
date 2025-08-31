"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS } from "@lib/navigation-constants";

export default function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex space-x-6">
      {NAVIGATION_ITEMS.map(navItem => (
        <div key={navItem.id} className="relative group">
          <Link
            href={navItem.href}
            className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
              navItem.isActive?.(pathname || "")
                ? "text-brand-brown bg-brand-gold/10 rounded-lg"
                : "text-brand-dark hover:text-brand-brown"
            }`}
          >
            {navItem.label}
            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
          </Link>

          {navItem.children && (
            <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                <Link
                  href={navItem.href}
                  className="block font-semibold text-brand-brown mb-3 text-sm hover:text-brand-dark transition-colors"
                >
                  {navItem.label} Gift Hampers
                </Link>
                <ul className="space-y-2">
                  {navItem.children
                    .filter(child => !child.description) // Skip the "All" items in dropdown
                    .map(child => (
                      <li key={child.id}>
                        <Link
                          href={child.href}
                          className="block px-3 py-2 text-gray-700 hover:text-brand-brown hover:bg-brand-gold/10 rounded text-sm"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
