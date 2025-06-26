import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '@repo/design-system';

const meta = {
  title: 'Overlay & Interactive/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A user avatar component with image support and fallback initials.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>XS</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar shape="circle">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar shape="square">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User" />
        <AvatarFallback>XY</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const FallbackOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>XYZ</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-3">
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://github.com/nextjs.png" alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarFallback>+5</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Online user" />
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-black border-2 border-white rounded-full" />
      </div>
      
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="Away user" />
          <AvatarFallback>AW</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-black/40 border-2 border-white rounded-full" />
      </div>
      
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/nextjs.png" alt="Offline user" />
          <AvatarFallback>OF</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-white border-2 border-black rounded-full" />
      </div>
    </div>
  ),
};

export const UserCard: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 border border-black">
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold text-black">John Doe</h3>
        <p className="text-sm text-black/60">john.doe@example.com</p>
      </div>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback className="animate-pulse bg-black/10" />
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback className="animate-pulse bg-black/10" />
      </Avatar>
      <Avatar size="xl">
        <AvatarFallback className="animate-pulse bg-black/10" />
      </Avatar>
    </div>
  ),
};