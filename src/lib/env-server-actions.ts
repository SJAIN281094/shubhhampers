"use server";

/**
 * Server action to fetch environment variables safely
 *
 * Note: Since these are server actions, we can directly access process.env
 * without making HTTP requests. This avoids connection errors in production.
 */

// Define which environment variables can be safely exposed to the client
const SAFE_ENV_VARS = [
  "NEXT_PUBLIC_CATALOGUE_URL",
  "API_BASE_URL",
  "INSTAGRAM_ACCESS_TOKEN",
  "NEXT_PUBLIC_GOOGLE_ANALYTICS",
  "NEXT_PUBLIC_GOOGLE_TAG_MANAGER",
  "NEXT_PUBLIC_ENV",
  "NEXT_PUBLIC_BLOGS_BASE_URL",
  "NEXT_PUBLIC_BLOGS_TENANT_ID",
  "NEXT_PUBLIC_BLOGS_DOMAIN_ID"
] as const;

type SafeEnvVar = (typeof SAFE_ENV_VARS)[number];

/**
 * Get environment variable directly from process.env
 * Since this is a server action, we can access process.env directly
 */
export async function getEnvVar(key: SafeEnvVar): Promise<string | undefined> {
  if (!SAFE_ENV_VARS.includes(key)) {
    return undefined;
  }

  // Direct access to process.env since we're running on the server
  return process.env[key];
}

/**
 * Get multiple environment variables directly from process.env
 * Since this is a server action, we can access process.env directly
 */
export async function getEnvVars(keys: SafeEnvVar[]): Promise<Record<string, string | undefined>> {
  const validKeys = keys.filter(key => SAFE_ENV_VARS.includes(key));

  if (validKeys.length === 0) {
    return {};
  }

  // Direct access to process.env since we're running on the server
  const result: Record<string, string | undefined> = {};
  validKeys.forEach(key => {
    result[key] = process.env[key];
  });
  return result;
}
