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
 * Get environment variable from server using API
 */
export async function getEnvVar(key: SafeEnvVar): Promise<string | undefined> {
  if (!SAFE_ENV_VARS.includes(key)) {
    return undefined;
  }

  try {
    // Use site URL for internal API calls
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://www.shubhhampers.com";

    // Make internal API call
    const response = await fetch(`${baseUrl}/api/env?key=${encodeURIComponent(key)}`, {
      headers: {
        "Content-Type": "application/json"
      },
      // Add cache control for server-side requests
      cache: "force-cache"
    });

    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.warn(`Failed to fetch env var ${key} from API: ${response.status}`);
      // Fallback to direct process.env access
      return process.env[key];
    }

    const data = await response.json();
    return data.value || undefined;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`Error fetching env var ${key} from API:`, error);
    // Fallback to direct process.env access
    return process.env[key];
  }
}

/**
 * Get multiple environment variables from server using API
 */
export async function getEnvVars(keys: SafeEnvVar[]): Promise<Record<string, string | undefined>> {
  const validKeys = keys.filter(key => SAFE_ENV_VARS.includes(key));

  if (validKeys.length === 0) {
    return {};
  }

  try {
    // Use site URL for internal API calls
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://www.shubhhampers.com";

    // Make internal API call with array support
    const response = await fetch(`${baseUrl}/api/env`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ keys: validKeys }),
      // Add cache control for server-side requests
      cache: "force-cache"
    });

    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.warn(`Failed to fetch env vars from API: ${response.status}`);
      // Fallback to direct process.env access
      const result: Record<string, string | undefined> = {};
      validKeys.forEach(key => {
        result[key] = process.env[key];
      });
      return result;
    }

    const data = await response.json();
    return data.values || {};
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn("Error fetching env vars from API:", error);
    // Fallback to direct process.env access
    const result: Record<string, string | undefined> = {};
    validKeys.forEach(key => {
      result[key] = process.env[key];
    });
    return result;
  }
}
