"use server";

/**
 * Server action to fetch environment variables safely
 */

// Define which environment variables can be safely exposed to the client
const SAFE_ENV_VARS = [
  "NEXT_PUBLIC_CATALOGUE_URL",
  "API_BASE_URL",
  "INSTAGRAM_ACCESS_TOKEN",
  "NEXT_PUBLIC_GOOGLE_ANALYTICS",
  "NEXT_PUBLIC_GOOGLE_TAG_MANAGER",
  "NEXT_PUBLIC_ENV"
] as const;

type SafeEnvVar = (typeof SAFE_ENV_VARS)[number];

/**
 * Get environment variable from server
 */
export async function getEnvVar(key: SafeEnvVar): Promise<string | undefined> {
  if (!SAFE_ENV_VARS.includes(key)) {
    return undefined;
  }
  return process.env[key];
}
