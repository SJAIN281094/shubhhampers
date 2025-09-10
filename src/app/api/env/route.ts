import { NextRequest, NextResponse } from "next/server";

// Define which environment variables are safe to expose
const SAFE_ENV_VARS = [
  "NEXT_PUBLIC_GOOGLE_ANALYTICS",
  "NEXT_PUBLIC_GOOGLE_TAG_MANAGER",
  "NEXT_PUBLIC_ENV",
  "NEXT_PUBLIC_CATALOGUE_URL",
  "NEXT_PUBLIC_BLOGS_BASE_URL",
  "NEXT_PUBLIC_BLOGS_TENANT_ID",
  "NEXT_PUBLIC_BLOGS_DOMAIN_ID"
] as const;

type SafeEnvVar = (typeof SAFE_ENV_VARS)[number];

/**
 * GET /api/env
 *
 * Fetch environment variables by key(s)
 *
 * Query parameters:
 * - key: single environment variable name
 * - keys: comma-separated list of environment variable names (for arrays)
 *
 * Examples:
 * GET /api/env?key=NEXT_PUBLIC_GOOGLE_ANALYTICS
 * GET /api/env?keys=NEXT_PUBLIC_GOOGLE_ANALYTICS,NEXT_PUBLIC_ENV
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const singleKey = searchParams.get("key");
    const multipleKeys = searchParams.get("keys");

    // Handle single key request
    if (singleKey) {
      if (!SAFE_ENV_VARS.includes(singleKey as SafeEnvVar)) {
        return NextResponse.json({ error: "Environment variable not allowed" }, { status: 403 });
      }

      const value = process.env[singleKey];
      return NextResponse.json({
        key: singleKey,
        value: value || null
      });
    }

    // Handle multiple keys request (array support)
    if (multipleKeys) {
      const keys = multipleKeys.split(",").map(k => k.trim());
      const result: Record<string, string | null> = {};

      for (const key of keys) {
        if (SAFE_ENV_VARS.includes(key as SafeEnvVar)) {
          result[key] = process.env[key] || null;
        } else {
          result[key] = null; // Don't expose unauthorized variables
        }
      }

      return NextResponse.json({
        keys: keys,
        values: result
      });
    }

    // No parameters provided - return available keys
    return NextResponse.json({
      message: "Environment API",
      usage: {
        single: "/api/env?key=VARIABLE_NAME",
        multiple: "/api/env?keys=VAR1,VAR2,VAR3"
      },
      allowedKeys: SAFE_ENV_VARS
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * POST /api/env
 *
 * Fetch environment variables by posting an array of keys
 *
 * Body:
 * {
 *   "keys": ["NEXT_PUBLIC_GOOGLE_ANALYTICS", "NEXT_PUBLIC_ENV"]
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { keys } = body;

    if (!Array.isArray(keys)) {
      return NextResponse.json({ error: "Keys must be an array" }, { status: 400 });
    }

    const result: Record<string, string | null> = {};

    for (const key of keys) {
      if (typeof key === "string" && SAFE_ENV_VARS.includes(key as SafeEnvVar)) {
        result[key] = process.env[key] || null;
      } else {
        result[key] = null; // Don't expose unauthorized variables
      }
    }

    return NextResponse.json({
      keys,
      values: result
    });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
