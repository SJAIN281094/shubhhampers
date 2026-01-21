import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Safely format a number with locale string
 * Prevents errors when value is undefined, null, or not a valid number
 */
export function formatNumber(value: number | null | undefined, locale: string = "en-IN"): string {
  if (value == null || isNaN(value) || !isFinite(value)) {
    return "0";
  }
  try {
    return value.toLocaleString(locale);
  } catch {
    // Fallback to simple string conversion if locale fails
    return value.toString();
  }
}

/**
 * Safely format a date with locale string
 * Prevents errors when date is invalid or locale fails
 */
export function formatDate(dateString: string | Date, locale: string = "en-US", options?: Intl.DateTimeFormatOptions): string {
  try {
    const date = typeof dateString === "string" ? new Date(dateString) : dateString;
    if (isNaN(date.getTime())) {
      return "";
    }
    return date.toLocaleDateString(locale, options);
  } catch {
    return "";
  }
}
