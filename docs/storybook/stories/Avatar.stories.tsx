import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarGroup } from '@repo/design-system';

const meta = {
  title: 'Overlay & Interactive/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'User profile images with fallback support, status indicators, and group displays.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size',
    },
    status: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'away', 'busy'],
      description: 'Status indicator',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    name: {
      control: 'text',
      description: 'Name for generating initials',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    alt: 'User',
    name: 'Claude User',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" src="https://github.com/shadcn.png" alt="User" name="XS" />
      <Avatar size="sm" src="https://github.com/shadcn.png" alt="User" name="SM" />
      <Avatar size="md" src="https://github.com/shadcn.png" alt="User" name="MD" />
      <Avatar size="lg" src="https://github.com/shadcn.png" alt="User" name="LG" />
      <Avatar size="xl" src="https://github.com/shadcn.png" alt="User" name="XL" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src="https://github.com/shadcn.png" alt="Online user" name="ON" status="online" />
      <Avatar src="https://github.com/vercel.png" alt="Away user" name="AW" status="away" />
      <Avatar src="https://github.com/nextjs.png" alt="Busy user" name="BU" status="busy" />
      <Avatar src="https://github.com/shadcn.png" alt="Offline user" name="OF" status="offline" />
    </div>
  ),
};

export const Fallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar alt="John Doe" name="John Doe" />
      <Avatar alt="Alice Brown" name="Alice Brown" />
      <Avatar alt="X" name="X" />
      <Avatar alt="No Name" />
    </div>
  ),
};

export const BrokenImage: Story = {
  args: {
    src: '/broken-image.jpg',
    alt: 'User with broken image',
    name: 'John Doe',
  },
};

export const Group: Story = {
  render: () => (
    <AvatarGroup size="md">
      <Avatar src="https://github.com/shadcn.png" alt="User 1" name="User 1" />
      <Avatar src="https://github.com/vercel.png" alt="User 2" name="User 2" />
      <Avatar src="https://github.com/nextjs.png" alt="User 3" name="User 3" />
      <Avatar alt="+5" name="+5" />
    </AvatarGroup>
  ),
};

export const GroupWithStatus: Story = {
  render: () => (
    <AvatarGroup size="lg">
      <Avatar src="https://github.com/shadcn.png" alt="Online user" name="ON" status="online" />
      <Avatar src="https://github.com/vercel.png" alt="Away user" name="AW" status="away" />
      <Avatar src="https://github.com/nextjs.png" alt="Offline user" name="OF" status="offline" />
    </AvatarGroup>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-80 border border-black p-4">
      <div className="flex items-center gap-4">
        <Avatar src="https://github.com/shadcn.png" alt="John Doe" name="John Doe" size="lg" />
        <div>
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-sm text-black/60">Software Engineer</p>
        </div>
      </div>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-black/10 animate-pulse" />
      <div className="w-12 h-12 rounded-full bg-black/10 animate-pulse" />
      <div className="w-16 h-16 rounded-full bg-black/10 animate-pulse" />
    </div>
  ),
};