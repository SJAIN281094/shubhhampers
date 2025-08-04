import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static optimization for better performance
  output: "standalone",

  // Enable React strict mode for better development
  reactStrictMode: true,

  // Enhanced image optimization for Next.js 15
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: "default",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // path: "/_next/image/",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shubhhampers.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/website/images/**"
      },
      {
        protocol: "https",
        hostname: "shubhhampers-admin.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**"
      }
    ]
  },

  // Next.js 15 optimized headers
  async headers() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "accept",
            value: ".*text/html.*"
          }
        ],
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=60, must-revalidate, stale-while-revalidate=300"
          },
          {
            key: "X-App-Version",
            value: process.env.npm_package_version || Date.now().toString()
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          }
        ]
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        source: "/:path*\\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          },
          {
            key: "Vary",
            value: "Accept"
          }
        ]
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=300, s-maxage=300, stale-while-revalidate=86400"
          }
        ]
      }
    ];
  },

  // Enable compression
  compress: true,

  // Build optimizations
  generateBuildId: async () => {
    return process.env.BUILD_ID || `build-${Date.now()}`;
  },

  // Webpack optimization for Next.js 15 (stable features only)
  webpack: (config, { dev, isServer, webpack }) => {
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
        providedExports: true,
        innerGraph: true,
        concatenateModules: true,
        minimize: true,
        splitChunks: {
          chunks: "all",
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: "react",
              priority: 20,
              chunks: "all"
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              priority: 10,
              chunks: "all"
            },
            common: {
              name: "common",
              minChunks: 2,
              priority: 5,
              chunks: "all",
              enforce: true
            }
          }
        }
      };
    }

    // Enhanced resolve with stable aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": "./src",
      "@components": "./src/components",
      "@ui-kit": "./src/ui-kit",
      "@lib": "./src/lib"
    };

    // Add build-time constants using webpack parameter
    config.plugins.push(
      new webpack.DefinePlugin({
        __BUILD_TIME__: JSON.stringify(Date.now()),
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version || "1.0.0"),
        __NEXT_VERSION__: JSON.stringify("15")
      })
    );

    return config;
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false
  },

  // Remove powered by header for security
  poweredByHeader: false
};

export default nextConfig;
