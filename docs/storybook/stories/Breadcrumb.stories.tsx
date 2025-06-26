import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb, BreadcrumbItem, Link } from '@repo/design-system';
import { ChevronRight, Slash, Home, ArrowRight } from 'lucide-react';

const meta = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'select',
      options: ['chevron', 'slash', 'arrow', 'dot'],
      description: 'Style of separator between items',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of breadcrumb text',
    },
    maxItems: {
      control: 'number',
      description: 'Maximum number of items to show before collapsing',
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link href="/">Home</Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <Link href="/products">Products</Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <span>Electronics</span>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const WithHomeIcon: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link href="/">
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <Link href="/dashboard">Dashboard</Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <Link href="/dashboard/analytics">Analytics</Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <span>Reports</span>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const Separators: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Chevron Separator</p>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <span>
            <ChevronRight className="h-4 w-4" />
          </span>
          <BreadcrumbItem>
            <Link href="/category">Category</Link>
          </BreadcrumbItem>
          <span>
            <ChevronRight className="h-4 w-4" />
          </span>
          <BreadcrumbItem>
            <span>Page</span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Slash Separator</p>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <span>
            <Slash className="h-4 w-4" />
          </span>
          <BreadcrumbItem>
            <Link href="/category">Category</Link>
          </BreadcrumbItem>
          <span>
            <Slash className="h-4 w-4" />
          </span>
          <BreadcrumbItem>
            <span>Page</span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Arrow Separator</p>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <span>
            <ArrowRight className="h-4 w-4" />
          </span>
          <BreadcrumbItem>
            <Link href="/category">Category</Link>
          </BreadcrumbItem>
          <span>
            <ArrowRight className="h-4 w-4" />
          </span>
          <BreadcrumbItem>
            <span>Page</span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Text Separator</p>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <span>/</span>
          <BreadcrumbItem>
            <Link href="/category">Category</Link>
          </BreadcrumbItem>
          <span>/</span>
          <BreadcrumbItem>
            <span>Page</span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Small</p>
        <Breadcrumb size="sm">
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <span />
          <BreadcrumbItem>
            <Link href="/products">Products</Link>
          </BreadcrumbItem>
          <span />
          <BreadcrumbItem>
            <span>Details</span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Medium (Default)</p>
        <Breadcrumb size="md">
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <span />
          <BreadcrumbItem>
            <Link href="/products">Products</Link>
          </BreadcrumbItem>
          <span />
          <BreadcrumbItem>
            <span>Details</span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Large</p>
        <Breadcrumb size="lg">
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <span />
          <BreadcrumbItem>
            <Link href="/products">Products</Link>
          </BreadcrumbItem>
          <span />
          <BreadcrumbItem>
            <span>Details</span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const LongPath: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link href="/">Home</Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <Link href="/documents">Documents</Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <Link href="/documents/projects">Projects</Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <Link href="/documents/projects/2024">2024</Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <Link href="/documents/projects/2024/q1">Q1</Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <span>Financial Report</span>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const CollapsedBreadcrumb: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-black/60">Breadcrumb with collapsed middle items</p>
      <Breadcrumb maxItems={4}>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <span />
        <BreadcrumbItem>
          <Link href="/level1">Level 1</Link>
        </BreadcrumbItem>
        <span />
        <BreadcrumbItem>
          <span className="px-2">...</span>
        </BreadcrumbItem>
        <span />
        <BreadcrumbItem>
          <Link href="/level4">Level 4</Link>
        </BreadcrumbItem>
        <span />
        <BreadcrumbItem>
          <span>Current Page</span>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
};

export const ECommerce: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Product Page</h3>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/">Store</Link>
          </BreadcrumbItem>
          <span>
            <ChevronRight className="h-4 w-4" />
          </span>
          <BreadcrumbItem>
            <Link href="/clothing">Clothing</Link>
          </BreadcrumbItem>
          <span>
            <ChevronRight className="h-4 w-4" />
          </span>
          <BreadcrumbItem>
            <Link href="/clothing/mens">Men's</Link>
          </BreadcrumbItem>
          <span>
            <ChevronRight className="h-4 w-4" />
          </span>
          <BreadcrumbItem>
            <Link href="/clothing/mens/shirts">Shirts</Link>
          </BreadcrumbItem>
          <span>
            <ChevronRight className="h-4 w-4" />
          </span>
          <BreadcrumbItem>
            <span>Oxford Button-Down</span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Account Section</h3>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/">
              <Home className="h-4 w-4" />
            </Link>
          </BreadcrumbItem>
          <span />
          <BreadcrumbItem>
            <Link href="/account">My Account</Link>
          </BreadcrumbItem>
          <span />
          <BreadcrumbItem>
            <Link href="/account/orders">Orders</Link>
          </BreadcrumbItem>
          <span />
          <BreadcrumbItem>
            <span>Order #12345</span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const FileSystem: Story = {
  render: () => (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link href="/">Root</Link>
        </BreadcrumbItem>
        <span>/</span>
        <BreadcrumbItem>
          <Link href="/users">users</Link>
        </BreadcrumbItem>
        <span>/</span>
        <BreadcrumbItem>
          <Link href="/users/john">john</Link>
        </BreadcrumbItem>
        <span>/</span>
        <BreadcrumbItem>
          <Link href="/users/john/documents">documents</Link>
        </BreadcrumbItem>
        <span>/</span>
        <BreadcrumbItem>
          <span>report.pdf</span>
        </BreadcrumbItem>
      </Breadcrumb>
      
      <div className="font-mono text-sm bg-black text-white p-4">
        <span className="text-white/60">~/</span>users/john/documents/
        <span className="text-white">report.pdf</span>
      </div>
    </div>
  ),
};

export const WithDropdown: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link href="/">Home</Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <Link href="/products" className="flex items-center gap-1">
          Products
          <ChevronRight className="h-3 w-3 rotate-90" />
        </Link>
      </BreadcrumbItem>
      <span />
      <BreadcrumbItem>
        <span>Current Product</span>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-black/60">Responsive breadcrumb that adapts to screen size</p>
      <Breadcrumb className="flex-wrap">
        <BreadcrumbItem>
          <Link href="/" className="whitespace-nowrap">Home</Link>
        </BreadcrumbItem>
        <span />
        <BreadcrumbItem>
          <Link href="/very-long-category-name" className="whitespace-nowrap">
            Very Long Category Name
          </Link>
        </BreadcrumbItem>
        <span />
        <BreadcrumbItem>
          <Link href="/another-long-name" className="whitespace-nowrap">
            Another Long Name
          </Link>
        </BreadcrumbItem>
        <span />
        <BreadcrumbItem>
          <span className="whitespace-nowrap">
            Current Page With Long Title
          </span>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
};