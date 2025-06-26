# CLAUDE.md - Minimalist Design System Boilerplate

A monorepo boilerplate with Next.js 14, FastAPI, and a comprehensive design system featuring 40+ components.

## Key Features

- **Design**: Minimalist black & white aesthetic with sharp corners
- **Architecture**: Turborepo monorepo with pnpm workspaces
- **Frontend**: Next.js 14 (App Router), Tailwind CSS, TypeScript
- **Backend**: FastAPI with async SQLAlchemy and Redis
- **Components**: 40+ pre-built components with CVA variants
- **Documentation**: Storybook with all component stories

## Quick Start

```bash
# Prerequisites: Node.js 18+, pnpm 8+, Python 3.10+, Docker

# Install dependencies
pnpm install

# Start development
pnpm dev              # All services
pnpm docker:up        # With Docker

# Build
pnpm build

# Component development
pnpm storybook
```

## Project Structure

```
boilerplate/
├── apps/
│   ├── web/              # Next.js frontend
│   └── api/              # FastAPI backend
├── packages/
│   ├── design-system/    # 40+ UI components
│   ├── api-client/       # Generated TypeScript client
│   └── config/           # Shared configs
└── docs/
    └── storybook/        # Component documentation
```

## Component Library

### Categories & Components

**Typography & Text**: Text, Heading, Label, Badge  
**Forms**: Input, Textarea, Select, Checkbox, Radio, Switch, Form  
**Layout**: Container, Separator, Stack, Grid, List, Accordion  
**Feedback**: Alert, Toast, Progress, Spinner, Skeleton  
**Navigation**: Link, Breadcrumb, Tabs, Pagination  
**Overlays**: Modal, Drawer, Tooltip, Dropdown  
**Interactive**: Avatar, Table, IconButton, ButtonGroup, Chip, Card

### Design Tokens

- **Colors**: Black/white with 10 shade variants
- **Spacing**: 4px base unit (1-64)
- **Typography**: Inter + JetBrains Mono fonts
- **Animations**: Fade, slide, scale transitions

## Development Commands

```bash
# Development
pnpm dev              # Start all services
pnpm dev:web          # Frontend only
pnpm dev:api          # Backend only

# Quality
pnpm lint             # Lint code
pnpm type-check       # TypeScript check
pnpm test             # Run tests

# API
pnpm generate:api     # Generate client from OpenAPI

# Docker
pnpm docker:up        # Start containers
pnpm docker:down      # Stop containers
```

## Access Points

- Frontend: http://localhost:3000
- API: http://localhost:8000/docs
- Storybook: http://localhost:6006

## Implementation Notes

- All components use `forwardRef` and TypeScript
- CVA for variant management
- Tailwind CSS with design tokens
- Components marked with `'use client'` for Next.js
- Toast requires provider setup (currently using alert fallback)

## Environment Variables

See `.env.example` for required configuration.

## Troubleshooting

1. **TypeScript errors**: Use relative paths in tsconfig extends
2. **"use client" errors**: Components are client-side by default
3. **Component errors**: Check import paths match file structure
4. **Toast not working**: Requires ToastProvider setup

## Design Principles

1. Minimalism first - every element has purpose
2. Black & white only - no colors
3. Sharp corners - no rounded edges
4. Functional beauty - form follows function
5. Consistent spacing - 4px base unit
6. Clear hierarchy - typography scales
7. Subtle interactions - minimal animations