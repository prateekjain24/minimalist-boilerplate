import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@repo/design-system';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Badge variant style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Badge size',
    },
    dot: {
      control: 'boolean',
      description: 'Show dot indicator',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

export const WithDot: Story = {
  args: {
    children: 'Active',
    dot: true,
  },
};

export const PrimaryWithDot: Story = {
  args: {
    children: 'Live',
    variant: 'primary',
    dot: true,
  },
};

export const SecondaryWithDot: Story = {
  args: {
    children: 'Online',
    variant: 'secondary',
    dot: true,
  },
};

export const OutlineWithDot: Story = {
  args: {
    children: 'Available',
    variant: 'outline',
    dot: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-black/60 mb-4">Badge Variants:</p>
        <div className="flex items-center gap-4">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
      
      <div>
        <p className="text-sm text-black/60 mb-4">With Dot Indicator:</p>
        <div className="flex items-center gap-4">
          <Badge variant="primary" dot>Primary</Badge>
          <Badge variant="secondary" dot>Secondary</Badge>
          <Badge variant="outline" dot>Outline</Badge>
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-black/60 mb-4">Small Size:</p>
        <div className="flex items-center gap-4">
          <Badge size="sm" variant="primary">Small</Badge>
          <Badge size="sm" variant="secondary">Small</Badge>
          <Badge size="sm" variant="outline">Small</Badge>
        </div>
      </div>
      
      <div>
        <p className="text-sm text-black/60 mb-4">Medium Size (Default):</p>
        <div className="flex items-center gap-4">
          <Badge size="md" variant="primary">Medium</Badge>
          <Badge size="md" variant="secondary">Medium</Badge>
          <Badge size="md" variant="outline">Medium</Badge>
        </div>
      </div>
      
      <div>
        <p className="text-sm text-black/60 mb-4">Large Size:</p>
        <div className="flex items-center gap-4">
          <Badge size="lg" variant="primary">Large</Badge>
          <Badge size="lg" variant="secondary">Large</Badge>
          <Badge size="lg" variant="outline">Large</Badge>
        </div>
      </div>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Badge variant="primary" dot>Active</Badge>
        <Badge variant="secondary">Pending</Badge>
        <Badge variant="outline">Draft</Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="primary" size="sm">New</Badge>
        <Badge variant="secondary" size="sm">Updated</Badge>
        <Badge variant="outline" size="sm">Archived</Badge>
      </div>
    </div>
  ),
};

export const CountBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Badge size="sm">99+</Badge>
        <Badge size="sm" variant="secondary">42</Badge>
        <Badge size="sm" variant="outline">7</Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge>1.2K</Badge>
        <Badge variant="secondary">500</Badge>
        <Badge variant="outline">25</Badge>
      </div>
    </div>
  ),
};

export const CategoryBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" size="sm">Design</Badge>
        <Badge variant="outline" size="sm">Development</Badge>
        <Badge variant="outline" size="sm">Marketing</Badge>
        <Badge variant="outline" size="sm">Sales</Badge>
        <Badge variant="outline" size="sm">Support</Badge>
      </div>
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <p className="text-base">
        This is a new feature <Badge size="sm" variant="primary">NEW</Badge> that was just released.
      </p>
      <p className="text-base">
        Server status: <Badge variant="primary" dot>Online</Badge> with <Badge variant="secondary">42</Badge> active connections.
      </p>
      <p className="text-base">
        Article tagged with <Badge variant="outline" size="sm">Technology</Badge> <Badge variant="outline" size="sm">Tutorial</Badge>
      </p>
    </div>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="border border-black p-4 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">Production Server</h3>
            <p className="text-sm text-black/60 mt-1">api.example.com</p>
          </div>
          <Badge variant="primary" dot>Live</Badge>
        </div>
        <div className="flex gap-2">
          <Badge size="sm" variant="secondary">v2.4.1</Badge>
          <Badge size="sm" variant="outline">Linux</Badge>
          <Badge size="sm" variant="outline">4 CPU</Badge>
          <Badge size="sm" variant="outline">16GB RAM</Badge>
        </div>
      </div>
      
      <div className="border border-black p-4 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">Staging Server</h3>
            <p className="text-sm text-black/60 mt-1">staging.example.com</p>
          </div>
          <Badge variant="secondary" dot>Idle</Badge>
        </div>
        <div className="flex gap-2">
          <Badge size="sm" variant="secondary">v2.5.0-beta</Badge>
          <Badge size="sm" variant="outline">Linux</Badge>
          <Badge size="sm" variant="outline">2 CPU</Badge>
          <Badge size="sm" variant="outline">8GB RAM</Badge>
        </div>
      </div>
      
      <div className="border border-black p-4 space-y-4 opacity-60">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">Development Server</h3>
            <p className="text-sm text-black/60 mt-1">dev.example.com</p>
          </div>
          <Badge variant="outline">Offline</Badge>
        </div>
        <div className="flex gap-2">
          <Badge size="sm" variant="outline">v2.5.0-dev</Badge>
          <Badge size="sm" variant="outline">Linux</Badge>
          <Badge size="sm" variant="outline">1 CPU</Badge>
          <Badge size="sm" variant="outline">4GB RAM</Badge>
        </div>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Badge className="bg-red-600 text-white border-red-600">Error</Badge>
        <Badge className="bg-green-600 text-white border-green-600">Success</Badge>
        <Badge className="bg-blue-600 text-white border-blue-600">Info</Badge>
        <Badge className="bg-yellow-600 text-white border-yellow-600">Warning</Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge className="bg-gradient-to-r from-black to-gray-600 text-white border-0">
          Gradient
        </Badge>
        <Badge className="animate-pulse">
          Pulsing
        </Badge>
      </div>
    </div>
  ),
};