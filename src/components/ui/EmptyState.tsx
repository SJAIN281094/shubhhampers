/**
 * Reusable Empty State Component
 * Handles "No Content Found" scenarios across the application
 */

import React from "react";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

export interface EmptyStateAction {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "custom";
  className?: string;
}

interface EmptyStateProps {
  icon: string; // Emoji or icon
  title: string;
  description: string;
  actions?: EmptyStateAction[];
  className?: string;
}

export default function EmptyState({
  icon,
  title,
  description,
  actions = [],
  className = ""
}: EmptyStateProps) {
  return (
    <div className={`text-center py-12 ${className}`}>
      <div className='text-6xl mb-4'>{icon}</div>
      <h3 className='text-2xl font-bold text-brand-dark mb-4'>{title}</h3>
      <p className='text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed'>{description}</p>

      {actions.length > 0 && (
        <div className='flex flex-wrap gap-4 justify-center'>
          {actions.map(action => {
            const buttonContent = action.label;
            const buttonKey = `${action.variant || "custom"}-${action.label}`;
            if (action.variant === "primary") {
              const PrimaryButtonElement = (
                <PrimaryButton onClick={action.onClick} size='md' className={action.className}>
                  {buttonContent}
                </PrimaryButton>
              );

              return action.href ? (
                <Link key={buttonKey} href={action.href}>
                  {PrimaryButtonElement}
                </Link>
              ) : (
                <div key={buttonKey}>{PrimaryButtonElement}</div>
              );
            }

            if (action.variant === "secondary") {
              const SecondaryButtonElement = (
                <SecondaryButton onClick={action.onClick} size='md' className={action.className}>
                  {buttonContent}
                </SecondaryButton>
              );

              return action.href ? (
                <Link key={buttonKey} href={action.href}>
                  {SecondaryButtonElement}
                </Link>
              ) : (
                <div key={buttonKey}>{SecondaryButtonElement}</div>
              );
            }

            // Custom variant - user provides their own styling
            const CustomButtonElement = (
              <button
                onClick={action.onClick}
                className={`bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${action.className || ""}`}
              >
                {buttonContent}
              </button>
            );

            return action.href ? (
              <Link key={buttonKey} href={action.href}>
                {CustomButtonElement}
              </Link>
            ) : (
              <div key={buttonKey}>{CustomButtonElement}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Predefined variants for common use cases
export const EmptyStateVariants = {
  noHampers: {
    icon: "🎁",
    title: "No Hampers Found"
  },
  noArticles: {
    icon: "📝",
    title: "No Articles Found"
  },
  noPosts: {
    icon: "📷",
    title: "No Posts Found"
  }
};
