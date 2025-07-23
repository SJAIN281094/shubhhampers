/**
 * ESLint 9 Flat Config
 *
 * This is the modern ESLint flat config with advanced features.
 *
 * Usage:
 *   npm run lint:flat        - Run ESLint with flat config
 *   npm run lint:flat:fix    - Auto-fix with flat config
 *   npm run verify:flat      - Full verification with flat config
 *
 * Default usage (Next.js compatible):
 *   npm run lint             - Uses .eslintrc.json (Next.js compatible)
 *   npm run build            - Uses .eslintrc.json (no warnings)
 *
 * Benefits of flat config:
 *   - Modern ESLint 9 features
 *   - Better performance
 *   - More explicit configuration
 *   - typescript-eslint integration
 */

const js = require("@eslint/js");
const nextPlugin = require("@next/eslint-plugin-next");
const tseslint = require("typescript-eslint");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");

const eslintConfig = [
  // Basic ESLint recommended rules
  js.configs.recommended,

  // Next.js flat config - this should be properly detected by Next.js
  nextPlugin.flatConfig.recommended,
  nextPlugin.flatConfig.coreWebVitals,

  // TypeScript ESLint configuration
  ...tseslint.configs.recommended,

  // React configuration
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      "tailwind.config.ts",
      "next.config.ts",
      "postcss.config.mjs",
      "middleware.ts",
      "next-env.d.ts",
      "scripts/**"
    ]
  },

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["scripts/**"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
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

  // Node.js scripts configuration
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
];

module.exports = eslintConfig;
