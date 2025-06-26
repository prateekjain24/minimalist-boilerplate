import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@repo/design-system';

const meta = {
  title: 'Overlay & Interactive/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An icon-only button component with variants and sizes for toolbars and compact UIs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'minimal'],
      description: 'Visual variant of the icon button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the icon button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the icon button (required)',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Common icons for examples
const icons = {
  settings: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  menu: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  more: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  ),
  edit: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  delete: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  ),
};

export const Default: Story = {
  args: {
    'aria-label': 'Settings',
    children: icons.settings,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconButton variant="primary" aria-label="Primary">
        {icons.settings}
      </IconButton>
      <IconButton variant="secondary" aria-label="Secondary">
        {icons.settings}
      </IconButton>
      <IconButton variant="ghost" aria-label="Ghost">
        {icons.settings}
      </IconButton>
      <IconButton variant="minimal" aria-label="Minimal">
        {icons.settings}
      </IconButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton size="sm" aria-label="Small">
        {icons.settings}
      </IconButton>
      <IconButton size="md" aria-label="Medium">
        {icons.settings}
      </IconButton>
      <IconButton size="lg" aria-label="Large">
        {icons.settings}
      </IconButton>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconButton variant="primary" disabled aria-label="Disabled primary">
        {icons.settings}
      </IconButton>
      <IconButton variant="secondary" disabled aria-label="Disabled secondary">
        {icons.settings}
      </IconButton>
      <IconButton variant="ghost" disabled aria-label="Disabled ghost">
        {icons.settings}
      </IconButton>
      <IconButton variant="minimal" disabled aria-label="Disabled minimal">
        {icons.settings}
      </IconButton>
    </div>
  ),
};

export const Toolbar: Story = {
  render: () => (
    <div className="flex border border-black p-1">
      <IconButton variant="minimal" aria-label="Bold">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h4.5a4.5 4.5 0 001.545-8.729A4 4 0 0011 2H7zm4 6a2 2 0 100-4H7v4h4zm.5 2H7v6h4.5a2.5 2.5 0 000-5z" />
        </svg>
      </IconButton>
      <IconButton variant="minimal" aria-label="Italic">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 2h6a1 1 0 110 2h-2.176l-3.648 12H10a1 1 0 110 2H4a1 1 0 110-2h2.176l3.648-12H8a1 1 0 110-2z" />
        </svg>
      </IconButton>
      <IconButton variant="minimal" aria-label="Underline">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 4a1 1 0 00-1 1v5a1 1 0 102 0V5a1 1 0 00-1-1zM5 5a1 1 0 10-2 0v5a5 5 0 0010 0V5a1 1 0 10-2 0v5a3 3 0 11-6 0V5zM3 17a1 1 0 100 2h14a1 1 0 100-2H3z" />
        </svg>
      </IconButton>
      <div className="w-px bg-black mx-1" />
      <IconButton variant="minimal" aria-label="Align left">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 8a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1zM3 11a1 1 0 100 2h14a1 1 0 100-2H3zM2 16a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z" />
        </svg>
      </IconButton>
      <IconButton variant="minimal" aria-label="Align center">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zM3 11a1 1 0 100 2h14a1 1 0 100-2H3zM5 16a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
        </svg>
      </IconButton>
      <IconButton variant="minimal" aria-label="Align right">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM6 8a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM3 11a1 1 0 100 2h14a1 1 0 100-2H3zM6 16a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1z" />
        </svg>
      </IconButton>
    </div>
  ),
};

export const ActionBar: Story = {
  render: () => (
    <div className="flex gap-2 p-4 border border-black">
      <IconButton variant="secondary" aria-label="Edit">
        {icons.edit}
      </IconButton>
      <IconButton variant="secondary" aria-label="Delete">
        {icons.delete}
      </IconButton>
      <IconButton variant="secondary" aria-label="More options">
        {icons.more}
      </IconButton>
    </div>
  ),
};

export const Navigation: Story = {
  render: () => (
    <nav className="flex items-center justify-between p-4 border border-black">
      <IconButton variant="ghost" aria-label="Menu">
        {icons.menu}
      </IconButton>
      <div className="flex gap-2">
        <IconButton variant="minimal" aria-label="Search">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </IconButton>
        <IconButton variant="minimal" aria-label="Notifications">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </IconButton>
        <IconButton variant="minimal" aria-label="User profile">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </IconButton>
      </div>
    </nav>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="relative">
        <IconButton aria-label="Notifications">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </IconButton>
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full" />
      </div>

      <div className="relative">
        <IconButton aria-label="Messages">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </IconButton>
        <span className="absolute -top-1 -right-1 min-w-[1rem] h-4 px-1 bg-black text-white text-xs rounded-full flex items-center justify-center">
          3
        </span>
      </div>
    </div>
  ),
};