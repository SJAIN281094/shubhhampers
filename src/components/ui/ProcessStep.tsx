/**
 * Reusable Process Step Component
 * Used for workflow/process displays across multiple components
 */

import React from "react";
import { cn } from "@lib/utils";

interface ProcessStepProps {
  step: {
    id: number;
    icon: string;
    title: string;
    description: string;
    details?: string[];
  };
  index: number;
  variant?: "simple" | "detailed" | "card";
  className?: string;
}

export default function ProcessStep({
  step,
  index: _index,
  variant = "simple",
  className = ""
}: ProcessStepProps) {
  if (variant === "simple") {
    return (
      <div className={cn("flex items-start gap-4", className)}>
        <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0'>
          {step.id}
        </div>
        <div>
          <h4 className='font-semibold text-brand-dark mb-1'>{step.title}</h4>
          <p className='text-gray-600 text-sm'>{step.description}</p>
        </div>
      </div>
    );
  }

  if (variant === "detailed") {
    return (
      <div className={cn("text-center", className)}>
        {/* Step Number Badge */}
        <div className='relative mb-6'>
          <div className='w-16 h-16 bg-gradient-to-br from-brand-amber to-brand-brown rounded-full flex items-center justify-center shadow-lg mx-auto border-4 border-white'>
            <span className='text-white font-bold text-lg'>{step.id}</span>
          </div>
        </div>

        {/* Icon */}
        <div className='text-4xl mb-4'>{step.icon}</div>

        {/* Content */}
        <h3 className='text-xl font-bold text-brand-dark mb-3'>{step.title}</h3>
        <p className='text-gray-600 mb-4 leading-relaxed'>{step.description}</p>

        {/* Details List */}
        {step.details && (
          <ul className='space-y-2 text-sm text-gray-500'>
            {step.details.map((detail, idx) => (
              <li key={idx} className='flex items-center justify-center gap-2'>
                <div className='w-1.5 h-1.5 bg-brand-gold rounded-full' />
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  // Card variant
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-xl border border-brand-gold/20 p-6 h-full",
        className
      )}
    >
      {/* Step Number Badge */}
      <div className='flex items-center justify-between mb-4'>
        <div className='w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-amber rounded-xl flex items-center justify-center shadow-lg'>
          <span className='text-white font-bold'>{step.id}</span>
        </div>
        <div className='text-3xl'>{step.icon}</div>
      </div>

      {/* Content */}
      <h3 className='text-lg font-bold text-brand-dark mb-3'>{step.title}</h3>
      <p className='text-gray-600 text-sm leading-relaxed'>{step.description}</p>

      {/* Details */}
      {step.details && (
        <div className='mt-4 space-y-2'>
          {step.details.map((detail, idx) => (
            <div key={idx} className='flex items-center gap-2 text-xs text-gray-500'>
              <div className='w-1 h-1 bg-brand-gold rounded-full' />
              {detail}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
