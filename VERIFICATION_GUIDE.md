# Verification System Guide

This guide explains the comprehensive verification system implemented for the project to ensure code quality and prevent issues before commits and deployments.

## Available Verification Commands

### Manual Verification Commands

```bash
# Full verification (recommended before major commits/releases)
npm run verify
# Runs: type-check → lint:strict → format:check → build

# Quick verification (faster, good for development)
npm run verify:quick
# Runs: type-check → lint:check → format:check

# Individual verification steps
npm run type-check      # TypeScript type checking
npm run lint:strict     # ESLint with max-warnings 0
npm run lint:check      # ESLint without fixes (quieter)
npm run format:check    # Prettier format validation
npm run build          # Next.js production build
```

### Automatic Git Hooks

#### Pre-commit Hook

**Runs on**: Every `git commit`
**What it does**:

1. `npm run verify:quick` - Type check, lint, and format check entire codebase
2. `npx lint-staged` - Auto-fix and format staged files

This ensures that:

- No TypeScript errors exist anywhere in the project
- All code follows linting rules (with strict warnings)
- All code is properly formatted
- Only clean, properly formatted code gets committed

#### Pre-push Hook

**Runs on**: Every `git push`
**What it does**:

- `npm run verify` - Full verification including production build

This ensures that:

- Everything that worked locally will work in production
- No build errors will be pushed to the repository
- The deployed version will be functional

## Verification Details

### Type Checking

- Uses TypeScript compiler (`tsc --noEmit`)
- Validates all TypeScript files for type errors
- Ensures type safety across the entire codebase

### Linting

- **lint:strict**: Maximum code quality with 0 warnings allowed
- **lint:check**: Standard linting without auto-fixes
- Covers React, TypeScript, accessibility, and code style rules
- Enforces consistent code formatting and best practices

### Format Checking

- Uses Prettier to ensure consistent code formatting
- Validates that all files follow the defined formatting rules
- Covers TypeScript, JavaScript, JSON, CSS, and Markdown files

### Build Verification

- Runs Next.js production build
- Ensures the application can be successfully built
- Catches build-time errors before deployment

## Workflow Integration

### Development Workflow

```bash
# During development - quick checks
npm run verify:quick

# Before major commits
npm run verify

# Auto-fix formatting and linting issues
npm run lint:fix
npm run format
```

### Git Workflow

```bash
# Normal commit (automatically runs pre-commit verification)
git add .
git commit -m "feat: add new feature"

# Push (automatically runs pre-push verification)
git push origin main
```

### Troubleshooting

#### If Pre-commit Fails

1. Check the error messages for specific issues
2. Run individual commands to isolate problems:
   ```bash
   npm run type-check    # Check for TypeScript errors
   npm run lint:strict   # Check for linting issues
   npm run format:check  # Check for formatting issues
   ```
3. Fix issues manually or use auto-fix commands:
   ```bash
   npm run lint:fix      # Auto-fix linting issues
   npm run format        # Auto-format files
   ```

#### If Pre-push Fails

1. Run `npm run verify` locally to see the full error
2. Common issues:
   - Build errors: Check for missing dependencies or syntax errors
   - Type errors: Fix TypeScript issues
   - Linting/formatting: Run `npm run lint:fix` and `npm run format`

#### Bypassing Hooks (Emergency Only)

```bash
# Skip pre-commit hook (NOT RECOMMENDED)
git commit --no-verify -m "emergency fix"

# Skip pre-push hook (NOT RECOMMENDED)
git push --no-verify
```

## Configuration Files

- **ESLint**: `eslint.config.js` - Linting rules and configuration
- **Prettier**: Uses default configuration with lint-staged integration
- **TypeScript**: `tsconfig.json` - Type checking configuration
- **Husky**: `.husky/` directory - Git hooks configuration
- **Lint-staged**: `package.json` - Staged files processing

## Benefits

✅ **Prevents Issues**: Catches errors before they reach the repository
✅ **Maintains Quality**: Enforces consistent code standards
✅ **Saves Time**: Reduces debugging time and failed deployments
✅ **Team Consistency**: Ensures all team members follow the same standards
✅ **Production Safety**: Guarantees that pushed code builds successfully

## Customization

To modify the verification process:

1. **Add/Remove Steps**: Edit the `verify` and `verify:quick` scripts in `package.json`
2. **Modify Hooks**: Edit files in `.husky/` directory
3. **Change Linting Rules**: Update `eslint.config.js`
4. **Adjust Format Rules**: Modify prettier configuration
5. **Update TypeScript**: Modify `tsconfig.json`
