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
```bash
git clone https://github.com/prateekjain24/minimalist-boilerplate.git
cd minimalist-boilerplate
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Start the development environment:
```bash
# Using Docker Compose (recommended)
pnpm docker:up

# Or run services individually
pnpm dev
```

### Access Points

- Frontend: http://localhost:3000
- API: http://localhost:8000
- API Documentation: http://localhost:8000/docs
- Storybook: http://localhost:6006

## 📁 Project Structure

```
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
```

## 🛠️ Development

### Available Commands

```bash
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
```

### Design System Development

The design system uses Storybook for component development and documentation:

```bash
pnpm storybook        # Start Storybook dev server
pnpm build:storybook  # Build static Storybook
```

#### Storybook Documentation

The design system includes comprehensive Storybook documentation with:

- **38 Component Stories**: Interactive examples for all 40+ components
- **Welcome Pages**: Introduction to the design system and getting started guide
- **Organized Categories**: Components grouped by type for easy navigation
- **Interactive Controls**: Test all component props in real-time
- **Code Examples**: Copy-paste ready code for every component
- **Responsive Testing**: Built-in viewport presets for mobile, tablet, and desktop
- **Theme Switcher**: Toggle between light and dark backgrounds
- **Auto-generated Docs**: TypeScript interfaces automatically documented

To explore the component library:
```bash
cd docs/storybook
pnpm storybook
```

Then open http://localhost:6006 in your browser.

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

## 🧩 Component Library

The design system includes 40+ meticulously crafted components, organized into logical categories:

### Typography & Text Components
- **Text**: Flexible text component with size and weight variants
- **Heading**: Semantic heading components (H1-H6) with consistent styling
- **Label**: Form label component with required field indicators
- **Badge**: Status indicators and tags with multiple variants

### Form Components  
- **Input**: Text input with label and error state support
- **Textarea**: Multi-line text input with auto-resize capability
- **Select**: Custom select dropdown with consistent styling
- **Checkbox**: Custom checkbox with label support
- **Radio**: Radio button groups with proper accessibility
- **Switch**: Toggle switch for binary options
- **Form**: Form wrapper with built-in validation handling

### Layout & Structure Components
- **Container**: Responsive container with max-width constraints
- **Separator**: Visual divider with horizontal/vertical orientations
- **Stack**: Flexbox utility for vertical/horizontal layouts
- **Grid**: CSS Grid wrapper for complex layouts
- **List**: Ordered/unordered lists with custom styling
- **Accordion**: Collapsible content panels with smooth animations

### Feedback & Navigation Components
- **Alert**: Informational messages with severity levels
- **Toast**: Temporary notification system
- **Progress**: Linear and circular progress indicators
- **Spinner**: Loading spinner with size variants
- **Skeleton**: Loading placeholder for content
- **Link**: Styled anchor with hover states
- **Breadcrumb**: Navigation breadcrumb trail
- **Tabs**: Tab navigation with content panels
- **Pagination**: Page navigation with various layouts

### Overlay & Interactive Components
- **Modal**: Dialog overlay with backdrop
- **Drawer**: Slide-out panel from any edge
- **Tooltip**: Contextual information on hover
- **Dropdown**: Menu dropdown with keyboard navigation
- **Avatar**: User profile images with fallbacks
- **Table**: Data table with sorting and selection
- **IconButton**: Icon-only buttons with tooltips
- **ButtonGroup**: Group buttons with connected borders
- **Chip**: Compact elements for tags and filters

### Component Patterns

All components follow consistent patterns:
- **CVA (class-variance-authority)** for variant management
- **React.forwardRef** for proper ref forwarding
- **Compound components** for complex structures
- **Accessible by default** with ARIA attributes
- **TypeScript interfaces** for type safety
- **Tailwind CSS** for styling consistency

## 📝 License

MIT License - see LICENSE file for details