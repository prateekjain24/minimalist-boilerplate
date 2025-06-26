import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@repo/design-system';
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
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/products">Products</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Electronics</BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const WithHomeIcon: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/dashboard/analytics">Analytics</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Reports</BreadcrumbPage>
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
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/category">Category</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Page</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Slash Separator</p>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/category">Category</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Page</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Arrow Separator</p>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ArrowRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/category">Category</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ArrowRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Page</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Text Separator</p>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/category">Category</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Page</BreadcrumbPage>
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
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Details</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Medium (Default)</p>
        <Breadcrumb size="md">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Details</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Large</p>
        <Breadcrumb size="lg">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Details</BreadcrumbPage>
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
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/documents">Documents</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/documents/projects">Projects</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/documents/projects/2024">2024</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/documents/projects/2024/q1">Q1</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Financial Report</BreadcrumbPage>
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
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/level1">Level 1</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <span className="px-2">...</span>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/level4">Level 4</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
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
            <BreadcrumbLink href="/">Store</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/clothing">Clothing</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/clothing/mens">Men's</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/clothing/mens/shirts">Shirts</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Oxford Button-Down</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Account Section</h3>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home className="h-4 w-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/account">My Account</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/account/orders">Orders</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Order #12345</BreadcrumbPage>
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
          <BreadcrumbLink href="/">Root</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/users">users</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/users/john">john</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/users/john/documents">documents</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>report.pdf</BreadcrumbPage>
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
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/products" className="flex items-center gap-1">
          Products
          <ChevronRight className="h-3 w-3 rotate-90" />
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Current Product</BreadcrumbPage>
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
          <BreadcrumbLink href="/" className="whitespace-nowrap">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/very-long-category-name" className="whitespace-nowrap">
            Very Long Category Name
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/another-long-name" className="whitespace-nowrap">
            Another Long Name
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="whitespace-nowrap">
            Current Page With Long Title
          </BreadcrumbPage>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
};