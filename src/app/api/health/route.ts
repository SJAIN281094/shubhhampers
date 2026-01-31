import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: "shubhhampers-web",
      version: process.env.npm_package_version || "1.0.0"
    },
    { status: 200 }
  );
}

// Support HEAD requests for health checks
export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}
