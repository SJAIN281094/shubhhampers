import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  // Next.js Core Web Vitals config (includes React, React Hooks, Next.js rules)
  ...nextVitals,

  // TypeScript-specific rules
  ...nextTs,

  // Prettier integration (disables conflicting ESLint formatting rules)
  prettier,

  // Override default ignores
  globalIgnores([
    // Default ignores from eslint-config-next
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Additional ignores
    "node_modules/**",
    "dist/**",
    "*.config.js",
    "*.config.mjs",
    "*.config.ts",
    "tailwind.config.ts",
    "next.config.ts",
    "postcss.config.mjs",
    "middleware.ts",
    "scripts/**"
  ]),

  // Custom rules overrides
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/ban-ts-comment": "warn",

      // General rules
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-expressions": "error",
      "no-duplicate-imports": "error",
      "no-multiple-empty-lines": ["error", { max: 2 }],
      "eol-last": "error",
      "no-trailing-spaces": "error",
      "comma-dangle": "error",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "comma-spacing": ["error", { before: false, after: true }],
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-before-blocks": "error",
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always"
        }
      ],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "space-unary-ops": ["error", { words: true, nonwords: false }],
      "spaced-comment": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "generator-star-spacing": ["error", { before: false, after: true }],
      "yield-star-spacing": ["error", { before: false, after: true }],
      "template-curly-spacing": ["error", "never"],
      "max-len": [
        "warn",
        {
          code: 100,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true
        }
      ]
    }
  },

  // Node.js scripts configuration (for scripts directory)
  {
    files: ["scripts/**/*.js"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
      "no-console": "off",
      quotes: ["error", "single"]
    }
  },

  // Test files configuration
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "off"
    }
  },

  // Next.js pages and app directory configuration
  {
    files: ["**/pages/**/*.{js,jsx,ts,tsx}", "**/app/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "import/no-default-export": "off"
    }
  }
]);

export default eslintConfig;
