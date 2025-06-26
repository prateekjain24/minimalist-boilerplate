# CLAUDE.md - Minimalist Design System Boilerplate Implementation Guide

## Project Overview

This document provides comprehensive instructions for implementing a minimalist design system boilerplate with a black & white aesthetic. The project uses a monorepo structure with Next.js 14 for frontend, FastAPI for backend, and a shared design system package.

### Key Characteristics
- **Design**: Minimalist black & white color scheme with sharp corners
- **Architecture**: Turborepo monorepo with shared packages
- **Frontend**: Next.js 14 with App Router, Tailwind CSS, Radix UI
- **Backend**: FastAPI with Python
- **Type Safety**: End-to-end TypeScript with generated API client
- **Developer Experience**: Hot reload, linting, Docker support

## Prerequisites

Before starting implementation:
```bash
# Required tools
node >= 18.0.0
pnpm >= 8.0.0
python >= 3.10
docker >= 20.0.0
git
```

## Project Structure

```
minimalist-boilerplate/
├── apps/
│   ├── web/                      # Next.js Frontend Application
│   └── api/                      # FastAPI Backend Application
├── packages/
│   ├── design-system/            # Shared Design System Components
│   ├── api-client/               # Generated TypeScript API Client
│   └── config/                   # Shared Configuration Files
├── docs/
│   └── storybook/               # Component Documentation
├── docker/                       # Docker configurations
├── scripts/                      # Build and utility scripts
└── [root config files]          # Monorepo configuration
```

## Implementation Tasks

### Phase 1: Project Foundation

#### Task 1.1: Initialize Monorepo Structure
**Priority**: Critical
**Dependencies**: None
**Parallel Safe**: Yes

```bash
# Create project directory
mkdir minimalist-boilerplate && cd minimalist-boilerplate

# Initialize pnpm workspace
pnpm init

# Create pnpm-workspace.yaml
cat > pnpm-workspace.yaml << 'EOF'
packages:
  - 'apps/*'
  - 'packages/*'
  - 'docs/*'
EOF

# Create directory structure
mkdir -p apps/web apps/api packages/design-system packages/api-client packages/config docs/storybook

# Initialize git
git init
echo "node_modules" > .gitignore
echo ".env.local" >> .gitignore
echo ".env" >> .gitignore
echo "dist" >> .gitignore
echo ".next" >> .gitignore
echo ".turbo" >> .gitignore
echo "*.pyc" >> .gitignore
echo "__pycache__" >> .gitignore
echo ".DS_Store" >> .gitignore
```

#### Task 1.2: Setup Root Package.json
**Priority**: Critical
**Dependencies**: Task 1.1
**Parallel Safe**: No

Create `package.json` in root:
```json
{
  "name": "minimalist-boilerplate",
  "version": "1.0.0",
  "private": true,
  "packageManager": "pnpm@8.15.0",
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "lint": "turbo lint",
    "format": "prettier --write \"**/*.{ts,tsx,md,json}\"",
    "clean": "turbo clean && rm -rf node_modules",
    "storybook": "turbo storybook",
    "test": "turbo test",
    "type-check": "turbo type-check",
    "generate:api": "turbo generate:api",
    "docker:up": "docker-compose up",
    "docker:down": "docker-compose down",
    "docker:build": "docker-compose build"
  },
  "devDependencies": {
    "turbo": "^1.11.0",
    "prettier": "^3.1.0",
    "eslint": "^8.55.0",
    "@types/node": "^20.10.0"
  },
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=8.0.0"
  }
}
```

#### Task 1.3: Configure Turborepo
**Priority**: Critical
**Dependencies**: Task 1.2
**Parallel Safe**: No

Create `turbo.json` in root:
```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"],
      "env": ["NODE_ENV", "NEXT_PUBLIC_*"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "outputs": []
    },
    "type-check": {
      "outputs": []
    },
    "test": {
      "outputs": ["coverage/**"],
      "dependsOn": ["build"]
    },
    "clean": {
      "cache": false
    },
    "storybook": {
      "cache": false,
      "persistent": true
    },
    "generate:api": {
      "cache": false,
      "outputs": ["packages/api-client/src/**"]
    }
  }
}
```

### Phase 2: Design System Package

#### Task 2.1: Initialize Design System Package
**Priority**: Critical
**Dependencies**: Phase 1
**Parallel Safe**: Yes

```bash
cd packages/design-system

# Create package.json
cat > package.json << 'EOF'
{
  "name": "@repo/design-system",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./src/styles/globals.css",
    "./tokens": {
      "import": "./dist/tokens/index.mjs",
      "require": "./dist/tokens/index.js",
      "types": "./dist/tokens/index.d.ts"
    }
  },
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "lint": "eslint src/",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tsup": "^8.0.1",
    "typescript": "^5.3.3"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
EOF

# Create tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "extends": "@repo/config/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOF

# Create tsup.config.ts
cat > tsup.config.ts << 'EOF'
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/tokens/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
});
EOF
```

#### Task 2.2: Create Design Tokens
**Priority**: Critical
**Dependencies**: Task 2.1
**Parallel Safe**: Yes

Create token files in `packages/design-system/src/tokens/`:

**colors.ts**:
```typescript
export const colors = {
  black: {
    DEFAULT: '#000000',
    90: '#1A1A1A',
    80: '#333333',
    70: '#4D4D4D',
    60: '#666666',
    50: '#808080',
    40: '#999999',
    30: '#B3B3B3',
    20: '#CCCCCC',
    10: '#E6E6E6',
  },
  white: {
    DEFAULT: '#FFFFFF',
    90: '#FAFAFA',
    80: '#F5F5F5',
    70: '#F0F0F0',
    60: '#E6E6E6',
    50: '#D9D9D9',
    40: '#CCCCCC',
    30: '#BFBFBF',
    20: '#B3B3B3',
    10: '#A6A6A6',
  },
  // Semantic colors for CSS variables
  semantic: {
    background: {
      primary: 'var(--color-white)',
      secondary: 'var(--color-white-80)',
      tertiary: 'var(--color-white-60)',
      inverse: 'var(--color-black)',
    },
    text: {
      primary: 'var(--color-black)',
      secondary: 'var(--color-black-60)',
      tertiary: 'var(--color-black-40)',
      inverse: 'var(--color-white)',
    },
    border: {
      primary: 'var(--color-black)',
      secondary: 'var(--color-black-20)',
      tertiary: 'var(--color-black-10)',
    },
  },
} as const;

export type Colors = typeof colors;
```

**spacing.ts**:
```typescript
// 4px base scale following 4-8-12-16-20-24-32-40-48-64-80-96
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
} as const;

export type Spacing = typeof spacing;
```

**typography.ts**:
```typescript
export const typography = {
  fontFamily: {
    sans: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ],
    mono: [
      '"JetBrains Mono"',
      'Consolas',
      'Monaco',
      '"Andale Mono"',
      '"Ubuntu Mono"',
      'monospace',
    ],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],      // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],  // 14px
    base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],          // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }], // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],  // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em' }],   // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.05em' }],    // 36px
    '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.05em' }],            // 48px
    '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.05em' }],         // 60px
    '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.05em' }],          // 72px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

export type Typography = typeof typography;
```

**animations.ts**:
```typescript
export const animations = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  keyframes: {
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    fadeOut: {
      from: { opacity: '1' },
      to: { opacity: '0' },
    },
    slideUp: {
      from: { transform: 'translateY(10px)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
    slideDown: {
      from: { transform: 'translateY(-10px)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
    slideLeft: {
      from: { transform: 'translateX(10px)', opacity: '0' },
      to: { transform: 'translateX(0)', opacity: '1' },
    },
    slideRight: {
      from: { transform: 'translateX(-10px)', opacity: '0' },
      to: { transform: 'translateX(0)', opacity: '1' },
    },
    scaleIn: {
      from: { transform: 'scale(0.95)', opacity: '0' },
      to: { transform: 'scale(1)', opacity: '1' },
    },
  },
} as const;

export type Animations = typeof animations;
```

**index.ts** (tokens):
```typescript
export * from './colors';
export * from './spacing';
export * from './typography';
export * from './animations';

// Re-export as a single tokens object
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { animations } from './animations';

export const tokens = {
  colors,
  spacing,
  typography,
  animations,
} as const;

export type Tokens = typeof tokens;
```

#### Task 2.3: Create Base Components
**Priority**: High
**Dependencies**: Task 2.2
**Parallel Safe**: Yes

Create component files in `packages/design-system/src/components/`:

**Button/Button.tsx**:
```typescript
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider',
  {
    variants: {
      variant: {
        primary: 'bg-black text-white border border-black hover:bg-white hover:text-black',
        secondary: 'bg-white text-black border border-black hover:bg-black hover:text-white',
        ghost: 'bg-transparent text-black hover:bg-black hover:text-white',
        minimal: 'bg-transparent text-black hover:bg-black/5',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
```

**Input/Input.tsx**:
```typescript
import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    const id = React.useId();
    
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-xs font-medium uppercase tracking-wider mb-2"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          className={cn(
            'w-full px-0 py-3 text-base bg-transparent border-0 border-b border-black',
            'focus:outline-none focus:border-b-2 focus:pb-[11px]',
            'placeholder:text-black/40',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:border-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-2 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
```

**Card/Card.tsx**:
```typescript
import * as React from 'react';
import { cn } from '../../lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'bg-white border border-black p-6',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mb-4 pb-4 border-b border-black', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-bold leading-tight tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-black/60 mt-2', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mt-6 pt-6 border-t border-black', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

**utils.ts** (in `packages/design-system/src/lib/`):
```typescript
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
```

**index.ts** (components):
```typescript
// Components
export * from './Button/Button';
export * from './Input/Input';
export * from './Card/Card';

// Add more components as they are created
```

#### Task 2.4: Create Global Styles
**Priority**: High
**Dependencies**: Task 2.2
**Parallel Safe**: Yes

Create `packages/design-system/src/styles/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

:root {
  /* Color tokens */
  --color-black: #000000;
  --color-black-90: #1A1A1A;
  --color-black-80: #333333;
  --color-black-70: #4D4D4D;
  --color-black-60: #666666;
  --color-black-50: #808080;
  --color-black-40: #999999;
  --color-black-30: #B3B3B3;
  --color-black-20: #CCCCCC;
  --color-black-10: #E6E6E6;
  
  --color-white: #FFFFFF;
  --color-white-90: #FAFAFA;
  --color-white-80: #F5F5F5;
  --color-white-70: #F0F0F0;
  --color-white-60: #E6E6E6;
  --color-white-50: #D9D9D9;
  --color-white-40: #CCCCCC;
  --color-white-30: #BFBFBF;
  --color-white-20: #B3B3B3;
  --color-white-10: #A6A6A6;
  
  /* Spacing tokens */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  
  /* Typography tokens */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', Consolas, Monaco, monospace;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  
  /* Animation tokens */
  --duration-fast: 150ms;
  --duration-base: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;
  
  --easing-linear: linear;
  --easing-in: cubic-bezier(0.4, 0, 1, 1);
  --easing-out: cubic-bezier(0, 0, 0.2, 1);
  --easing-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reset and base styles */
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.5;
  color: var(--color-black);
  background-color: var(--color-white);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h1 { font-size: var(--text-5xl); }
h2 { font-size: var(--text-4xl); }
h3 { font-size: var(--text-3xl); }
h4 { font-size: var(--text-2xl); }
h5 { font-size: var(--text-xl); }
h6 { font-size: var(--text-lg); }

/* Focus styles */
:focus-visible {
  outline: 2px solid var(--color-black);
  outline-offset: 2px;
}

/* Selection */
::selection {
  background-color: var(--color-black);
  color: var(--color-white);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slideDown {
  from { transform: translateY(-10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Utility classes */
.animate-fadeIn { animation: fadeIn var(--duration-base) var(--easing-out); }
.animate-slideUp { animation: slideUp var(--duration-slow) var(--easing-out); }
.animate-slideDown { animation: slideDown var(--duration-slow) var(--easing-out); }
.animate-scaleIn { animation: scaleIn var(--duration-base) var(--easing-out); }
```

### Phase 3: Next.js Web Application

#### Task 3.1: Initialize Next.js App
**Priority**: Critical
**Dependencies**: Phase 2
**Parallel Safe**: Yes

```bash
cd apps/web

# Create package.json
cat > package.json << 'EOF'
{
  "name": "@apps/web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@repo/design-system": "workspace:*",
    "@repo/api-client": "workspace:*",
    "@tanstack/react-query": "^5.17.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "zustand": "^4.4.7"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-config-next": "14.0.4",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.3"
  }
}
EOF

# Create next.config.js
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@repo/design-system', '@repo/api-client'],
  experimental: {
    typedRoutes: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
};

module.exports = nextConfig;
EOF

# Create tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "extends": "@repo/config/tsconfig.nextjs.json",
  "compilerOptions": {
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/store/*": ["./src/store/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF
```

#### Task 3.2: Configure Tailwind CSS
**Priority**: High
**Dependencies**: Task 3.1
**Parallel Safe**: Yes

Create `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss';
import { colors, spacing, typography } from '@repo/design-system/tokens';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/design-system/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
    },
    spacing,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    letterSpacing: typography.letterSpacing,
    lineHeight: typography.lineHeight,
    extend: {
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
        slower: '500ms',
      },
    },
  },
  plugins: [],
};

export default config;
```

Create `postcss.config.js`:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### Task 3.3: Create App Directory Structure
**Priority**: Critical
**Dependencies**: Task 3.2
**Parallel Safe**: Yes

Create the Next.js app directory structure:

```bash
mkdir -p src/app src/components src/lib src/hooks src/store src/styles
```

**src/app/layout.tsx**:
```typescript
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@repo/design-system/styles';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Minimalist App',
  description: 'A minimalist design system application',
  keywords: ['minimalist', 'design system', 'black and white'],
  authors: [{ name: 'Your Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

**src/app/globals.css**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Custom base styles if needed */
  body {
    @apply text-black bg-white;
  }
}

@layer components {
  /* Component styles */
  .container {
    @apply mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl;
  }
  
  .section {
    @apply py-12 sm:py-16 lg:py-20;
  }
}

@layer utilities {
  /* Custom utilities */
  .text-gradient {
    @apply bg-gradient-to-r from-black to-black/60 bg-clip-text text-transparent;
  }
  
  .border-gradient {
    @apply relative;
    background: linear-gradient(to right, black, transparent);
    background-clip: padding-box;
  }
}
```

**src/app/providers.tsx**:
```typescript
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
```

**src/app/page.tsx**:
```typescript
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@repo/design-system';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slideUp">
              Minimalist Design System
            </h1>
            <p className="text-xl text-black/60 mb-8 animate-slideUp animation-delay-100">
              A clean, modern foundation for building beautiful applications
            </p>
            <div className="flex gap-4 justify-center animate-slideUp animation-delay-200">
              <Button size="lg">Get Started</Button>
              <Button variant="secondary" size="lg">Documentation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section border-t border-black">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Minimalist</CardTitle>
                <CardDescription>
                  Every element serves a purpose. No unnecessary decoration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Clean lines, sharp corners, and purposeful whitespace create focus and clarity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Scalable</CardTitle>
                <CardDescription>
                  Built on a robust token system for consistent design at any scale.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  From single components to complex applications, maintain visual harmony.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Accessible</CardTitle>
                <CardDescription>
                  WCAG compliant with built-in keyboard navigation and screen reader support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Inclusive design ensures your application works for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
```

### Phase 4: FastAPI Backend

#### Task 4.1: Initialize FastAPI Application
**Priority**: Critical
**Dependencies**: Phase 1
**Parallel Safe**: Yes

```bash
cd apps/api

# Create requirements.txt
cat > requirements.txt << 'EOF'
fastapi==0.109.0
uvicorn[standard]==0.27.0
pydantic==2.5.3
pydantic-settings==2.1.0
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.6
sqlalchemy==2.0.25
alembic==1.13.1
asyncpg==0.29.0
redis==5.0.1
httpx==0.26.0
pytest==7.4.4
pytest-asyncio==0.23.3
black==23.12.1
flake8==7.0.0
mypy==1.8.0
EOF

# Create basic structure
mkdir -p app/api/v1/endpoints app/core app/models app/schemas app/crud app/db tests

# Create __init__.py files
touch app/__init__.py app/api/__init__.py app/api/v1/__init__.py app/api/v1/endpoints/__init__.py
touch app/core/__init__.py app/models/__init__.py app/schemas/__init__.py app/crud/__init__.py app/db/__init__.py
```

**app/core/config.py**:
```python
from typing import List, Optional
from pydantic_settings import BaseSettings
from pydantic import AnyHttpUrl, validator


class Settings(BaseSettings):
    # API
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Minimalist API"
    VERSION: str = "1.0.0"
    DESCRIPTION: str = "A minimalist FastAPI backend"
    
    # CORS
    BACKEND_CORS_ORIGINS: List[AnyHttpUrl] = []
    
    @validator("BACKEND_CORS_ORIGINS", pre=True)
    def assemble_cors_origins(cls, v: str | List[str]) -> List[str] | str:
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, (list, str)):
            return v
        raise ValueError(v)
    
    # Database
    DATABASE_URL: Optional[str] = "postgresql+asyncpg://user:pass@localhost/dbname"
    
    # Security
    SECRET_KEY: str = "your-secret-key-here-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379"
    
    # Environment
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    
    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
```

**app/main.py**:
```python
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.api.v1.api import api_router
from app.db.session import engine
from app.models import Base


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    async with engine.begin() as conn:
        # Create tables (in production, use Alembic migrations)
        await conn.run_sync(Base.metadata.create_all)
    
    yield
    
    # Shutdown
    await engine.dispose()


app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description=settings.DESCRIPTION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    lifespan=lifespan,
)

# Set up CORS
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Include API router
app.include_router(api_router, prefix=settings.API_V1_STR)

# Root endpoint
@app.get("/", include_in_schema=False)
async def root():
    return JSONResponse(
        content={
            "message": "Welcome to Minimalist API",
            "version": settings.VERSION,
            "docs": f"{settings.API_V1_STR}/docs",
        }
    )

# Health check
@app.get("/health", include_in_schema=False)
async def health_check():
    return {"status": "healthy", "environment": settings.ENVIRONMENT}
```

**app/db/base.py**:
```python
from app.models.base import Base
from app.models.user import User
from app.models.item import Item

# Import all models here to ensure they are registered with SQLAlchemy
__all__ = ["Base", "User", "Item"]
```

**app/db/session.py**:
```python
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.orm import declarative_base

from app.core.config import settings

# Create async engine
engine = create_async_engine(
    settings.DATABASE_URL,
    echo=settings.DEBUG,
    future=True,
)

# Create async session factory
AsyncSessionLocal = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

# Dependency to get DB session
async def get_db():
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()
```

**app/models/base.py**:
```python
from datetime import datetime
from sqlalchemy import Column, DateTime, Integer
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class BaseModel(Base):
    __abstract__ = True
    
    id = Column(Integer, primary_key=True, index=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)
```

**app/api/v1/api.py**:
```python
from fastapi import APIRouter

from app.api.v1.endpoints import auth, users, items

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(items.router, prefix="/items", tags=["items"])
```

#### Task 4.2: Create Docker Configuration
**Priority**: High
**Dependencies**: Task 4.1
**Parallel Safe**: Yes

**apps/api/Dockerfile**:
```dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for better caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create non-root user
RUN useradd -m -u 1000 appuser && chown -R appuser:appuser /app
USER appuser

# Expose port
EXPOSE 8000

# Run the application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

**apps/api/.dockerignore**:
```
__pycache__
*.pyc
*.pyo
*.pyd
.Python
*.so
*.egg
*.egg-info/
dist/
build/
.env
.venv
venv/
.pytest_cache/
.mypy_cache/
.coverage
htmlcov/
.git
.gitignore
Dockerfile
.dockerignore
```

### Phase 5: API Client Package

#### Task 5.1: Setup API Client Generator
**Priority**: High
**Dependencies**: Phase 4
**Parallel Safe**: Yes

```bash
cd packages/api-client

# Create package.json
cat > package.json << 'EOF'
{
  "name": "@repo/api-client",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "generate": "tsx scripts/generate.ts",
    "lint": "eslint src/",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "axios": "^1.6.5"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "openapi-typescript": "^6.7.3",
    "swagger-typescript-api": "^13.0.3",
    "tsup": "^8.0.1",
    "tsx": "^4.7.0",
    "typescript": "^5.3.3"
  }
}
EOF

# Create generation script
mkdir scripts
cat > scripts/generate.ts << 'EOF'
import { generateApi } from 'swagger-typescript-api';
import * as path from 'path';
import * as fs from 'fs';

const API_URL = process.env.API_URL || 'http://localhost:8000';

async function generate() {
  try {
    console.log(`Generating API client from ${API_URL}/api/v1/openapi.json`);
    
    await generateApi({
      name: 'api.ts',
      output: path.resolve(process.cwd(), './src/generated'),
      url: `${API_URL}/api/v1/openapi.json`,
      httpClientType: 'axios',
      generateClient: true,
      generateRouteTypes: true,
      generateResponses: true,
      unwrapResponseData: true,
      prettier: {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
      },
    });
    
    console.log('API client generated successfully!');
  } catch (error) {
    console.error('Failed to generate API client:', error);
    process.exit(1);
  }
}

generate();
EOF
```

**packages/api-client/src/index.ts**:
```typescript
export * from './generated/api';
export { createApiClient } from './client';
```

**packages/api-client/src/client.ts**:
```typescript
import { Api } from './generated/api';
import type { AxiosRequestConfig } from 'axios';

export interface ApiClientConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
  interceptors?: {
    request?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    response?: {
      onSuccess?: (response: any) => any;
      onError?: (error: any) => Promise<any>;
    };
  };
}

export function createApiClient(config: ApiClientConfig) {
  const api = new Api({
    baseURL: config.baseURL,
    timeout: config.timeout || 30000,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
  });

  // Add request interceptor
  if (config.interceptors?.request) {
    api.instance.interceptors.request.use(config.interceptors.request);
  }

  // Add response interceptors
  if (config.interceptors?.response) {
    api.instance.interceptors.response.use(
      config.interceptors.response.onSuccess,
      config.interceptors.response.onError
    );
  }

  return api;
}
```

### Phase 6: Shared Configuration

#### Task 6.1: Create Shared Configs
**Priority**: Medium
**Dependencies**: Phase 1
**Parallel Safe**: Yes

```bash
cd packages/config

# Create package.json
cat > package.json << 'EOF'
{
  "name": "@repo/config",
  "version": "1.0.0",
  "private": true,
  "files": [
    "eslint",
    "typescript",
    "prettier"
  ]
}
EOF

# Create TypeScript configs
mkdir typescript
```

**packages/config/typescript/tsconfig.base.json**:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "checkJs": false,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "inlineSources": false,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "noEmit": true
  }
}
```

**packages/config/typescript/tsconfig.nextjs.json**:
```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "jsx": "preserve",
    "incremental": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  }
}
```

**packages/config/eslint/base.js**:
```javascript
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    es2022: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
  },
};
```

**packages/config/prettier/index.js**:
```javascript
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
};
```

### Phase 7: Storybook Documentation

#### Task 7.1: Setup Storybook
**Priority**: Medium
**Dependencies**: Phase 2
**Parallel Safe**: Yes

```bash
cd docs/storybook

# Initialize Storybook package
cat > package.json << 'EOF'
{
  "name": "@docs/storybook",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build": "storybook build",
    "lint": "eslint ."
  },
  "dependencies": {
    "@repo/design-system": "workspace:*",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@storybook/addon-essentials": "^7.6.7",
    "@storybook/addon-interactions": "^7.6.7",
    "@storybook/addon-links": "^7.6.7",
    "@storybook/blocks": "^7.6.7",
    "@storybook/react": "^7.6.7",
    "@storybook/react-vite": "^7.6.7",
    "@storybook/testing-library": "^0.2.2",
    "storybook": "^7.6.7",
    "vite": "^5.0.10"
  }
}
EOF
```

**.storybook/main.ts**:
```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
```

**.storybook/preview.ts**:
```typescript
import type { Preview } from '@storybook/react';
import '@repo/design-system/styles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#FFFFFF' },
        { name: 'black', value: '#000000' },
        { name: 'gray', value: '#F5F5F5' },
      ],
    },
  },
};

export default preview;
```

**stories/Button.stories.tsx**:
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/design-system';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'minimal'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};
```

### Phase 8: Docker and Deployment

#### Task 8.1: Create Docker Compose
**Priority**: High
**Dependencies**: All previous phases
**Parallel Safe**: No

**docker-compose.yml** (root):
```yaml
version: '3.8'

services:
  # PostgreSQL Database
  db:
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      POSTGRES_USER: ${DB_USER:-minimalist}
      POSTGRES_PASSWORD: ${DB_PASSWORD:-minimalist123}
      POSTGRES_DB: ${DB_NAME:-minimalist_db}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_USER:-minimalist}"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Redis Cache
  redis:
    image: redis:7-alpine
    restart: unless-stopped
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  # FastAPI Backend
  api:
    build:
      context: ./apps/api
      dockerfile: Dockerfile
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      DATABASE_URL: postgresql+asyncpg://${DB_USER:-minimalist}:${DB_PASSWORD:-minimalist123}@db:5432/${DB_NAME:-minimalist_db}
      REDIS_URL: redis://redis:6379
      BACKEND_CORS_ORIGINS: ${BACKEND_CORS_ORIGINS:-http://localhost:3000}
      SECRET_KEY: ${SECRET_KEY:-your-secret-key-change-in-production}
      ENVIRONMENT: ${ENVIRONMENT:-development}
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - ./apps/api:/app
    command: uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

  # Next.js Frontend
  web:
    build:
      context: .
      dockerfile: ./apps/web/Dockerfile
      args:
        NEXT_PUBLIC_API_URL: ${NEXT_PUBLIC_API_URL:-http://localhost:8000}
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      NEXT_PUBLIC_API_URL: ${NEXT_PUBLIC_API_URL:-http://localhost:8000}
    depends_on:
      - api
    volumes:
      - ./apps/web:/app/apps/web
      - ./packages:/app/packages
      - /app/node_modules
      - /app/apps/web/node_modules
    command: pnpm --filter @apps/web dev

volumes:
  postgres_data:
  redis_data:
```

**apps/web/Dockerfile**:
```dockerfile
FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable
RUN corepack prepare pnpm@8.15.0 --activate

# Set working directory
WORKDIR /app

# Copy workspace files
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY packages ./packages
COPY apps/web ./apps/web

# Install dependencies
RUN pnpm install --frozen-lockfile

# Development stage
FROM base AS dev
EXPOSE 3000
CMD ["pnpm", "--filter", "@apps/web", "dev"]

# Build stage
FROM base AS builder
RUN pnpm --filter @apps/web build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/apps/web/.next ./apps/web/.next
COPY --from=builder /app/apps/web/public ./apps/web/public
COPY --from=builder /app/apps/web/package.json ./apps/web/package.json

USER nextjs

EXPOSE 3000

CMD ["node", "apps/web/.next/standalone/apps/web/server.js"]
```

### Phase 9: Testing and Quality

#### Task 9.1: Setup Testing Infrastructure
**Priority**: Medium
**Dependencies**: Previous phases
**Parallel Safe**: Yes

**Root package.json scripts addition**:
```json
{
  "scripts": {
    "test": "turbo test",
    "test:unit": "turbo test:unit",
    "test:e2e": "turbo test:e2e",
    "test:coverage": "turbo test:coverage"
  }
}
```

**apps/web/vitest.config.ts**:
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

**apps/web/playwright.config.ts**:
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'pnpm dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
```

### Phase 10: Final Setup and Documentation

#### Task 10.1: Create README and Documentation
**Priority**: Low
**Dependencies**: All phases
**Parallel Safe**: Yes

**README.md** (root):
```markdown
# Minimalist Design System Boilerplate

A modern, minimalist design system boilerplate featuring a black & white aesthetic, built with Next.js 14, FastAPI, and a shared component library.

## 🏗️ Architecture

- **Monorepo Structure**: Managed with Turborepo and pnpm workspaces
- **Frontend**: Next.js 14 with App Router, Tailwind CSS, and Radix UI
- **Backend**: FastAPI with async SQLAlchemy and Redis
- **Design System**: Shared component library with Storybook documentation
- **Type Safety**: End-to-end TypeScript with generated API client

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18
- pnpm >= 8
- Python >= 3.10
- Docker & Docker Compose

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd minimalist-boilerplate
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env
\`\`\`

4. Start the development environment:
\`\`\`bash
# Using Docker Compose (recommended)
pnpm docker:up

# Or run services individually
pnpm dev
\`\`\`

### Access Points

- Frontend: http://localhost:3000
- API: http://localhost:8000
- API Documentation: http://localhost:8000/docs
- Storybook: http://localhost:6006

## 📁 Project Structure

\`\`\`
minimalist-boilerplate/
├── apps/
│   ├── web/          # Next.js frontend application
│   └── api/          # FastAPI backend application
├── packages/
│   ├── design-system/  # Shared UI components and design tokens
│   ├── api-client/     # Auto-generated TypeScript API client
│   └── config/         # Shared configuration files
├── docs/
│   └── storybook/      # Component documentation
└── docker/             # Docker configurations
\`\`\`

## 🛠️ Development

### Available Commands

\`\`\`bash
# Development
pnpm dev              # Start all services in development mode
pnpm dev:web          # Start only frontend
pnpm dev:api          # Start only backend

# Building
pnpm build            # Build all packages
pnpm build:web        # Build frontend
pnpm build:api        # Build backend

# Testing
pnpm test             # Run all tests
pnpm test:unit        # Run unit tests
pnpm test:e2e         # Run E2E tests

# Code Quality
pnpm lint             # Lint all packages
pnpm format           # Format all files
pnpm type-check       # Type check all packages

# API Client
pnpm generate:api     # Generate TypeScript client from OpenAPI

# Docker
pnpm docker:up        # Start all services with Docker
pnpm docker:down      # Stop all Docker services
pnpm docker:build     # Build Docker images
\`\`\`

### Design System Development

The design system uses Storybook for component development and documentation:

\`\`\`bash
pnpm storybook        # Start Storybook dev server
pnpm build:storybook  # Build static Storybook
\`\`\`

### API Development

FastAPI provides automatic API documentation:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
- OpenAPI Schema: http://localhost:8000/api/v1/openapi.json

## 🎨 Design Principles

1. **Minimalism First**: Every element serves a purpose
2. **Black & White**: Strict monochromatic color palette
3. **Sharp & Clean**: No rounded corners, clear boundaries
4. **Functional Beauty**: Design serves purpose, not decoration
5. **Consistent Spacing**: 4px base unit throughout
6. **Typography Hierarchy**: Clear visual hierarchy
7. **Subtle Interactions**: Minimal animations that enhance UX

## 📝 License

MIT License - see LICENSE file for details
\`\`\`

**.env.example**:
```env
# Environment
NODE_ENV=development
ENVIRONMENT=development

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
API_V1_STR=/api/v1

# Database
DB_USER=minimalist
DB_PASSWORD=minimalist123
DB_NAME=minimalist_db
DATABASE_URL=postgresql+asyncpg://minimalist:minimalist123@localhost:5432/minimalist_db

# Redis
REDIS_URL=redis://localhost:6379

# Security
SECRET_KEY=your-secret-key-here-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_DAYS=7

# CORS
BACKEND_CORS_ORIGINS=http://localhost:3000,http://localhost:6006
```

## Validation Checklist

After implementation, verify:

- [ ] All packages install without errors
- [ ] Development servers start successfully
- [ ] Design tokens are properly applied
- [ ] Components render in Storybook
- [ ] API documentation is accessible
- [ ] Docker containers run without issues
- [ ] TypeScript compilation passes
- [ ] Linting passes
- [ ] Basic tests pass

## Troubleshooting

### Common Issues

1. **pnpm install fails**: Ensure you're using pnpm >= 8.0.0
2. **API connection errors**: Check CORS settings and API URL
3. **Docker issues**: Ensure Docker daemon is running
4. **Type errors**: Run `pnpm type-check` to identify issues
5. **Style issues**: Ensure design system package is built

## Next Steps

1. Implement authentication flow
2. Add more components to design system
3. Set up CI/CD pipelines
4. Configure production deployments
5. Add comprehensive test coverage
6. Implement error boundary and logging
7. Set up monitoring and analytics
8. Create component usage guidelines

---

This boilerplate provides a solid foundation for building scalable, minimalist applications with a consistent design system. The modular architecture allows for easy extension and customization while maintaining visual coherence across all applications.