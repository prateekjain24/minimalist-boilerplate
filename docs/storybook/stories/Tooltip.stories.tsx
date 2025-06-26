import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger, TooltipContent, Button, IconButton } from '@repo/design-system';

const meta = {
  title: 'Overlay & Interactive/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component that shows helpful information on hover with positioning options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the tooltip relative to the trigger',
    },
    delayDuration: {
      control: 'number',
      description: 'Delay in milliseconds before showing the tooltip',
    },
    offset: {
      control: 'number',
      description: 'Distance in pixels from the trigger element',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        This is a helpful tooltip
      </TooltipContent>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <Tooltip position="top">
        <TooltipTrigger>
          <Button variant="secondary">Top</Button>
        </TooltipTrigger>
        <TooltipContent>
          Tooltip positioned on top
        </TooltipContent>
      </Tooltip>

      <Tooltip position="right">
        <TooltipTrigger>
          <Button variant="secondary">Right</Button>
        </TooltipTrigger>
        <TooltipContent>
          Tooltip positioned on right
        </TooltipContent>
      </Tooltip>

      <Tooltip position="bottom">
        <TooltipTrigger>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent>
          Tooltip positioned on bottom
        </TooltipContent>
      </Tooltip>

      <Tooltip position="left">
        <TooltipTrigger>
          <Button variant="secondary">Left</Button>
        </TooltipTrigger>
        <TooltipContent>
          Tooltip positioned on left
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <Button variant="secondary">Instant</Button>
        </TooltipTrigger>
        <TooltipContent>
          No delay (0ms)
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={300}>
        <TooltipTrigger>
          <Button variant="secondary">Fast</Button>
        </TooltipTrigger>
        <TooltipContent>
          300ms delay
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={700}>
        <TooltipTrigger>
          <Button variant="secondary">Normal</Button>
        </TooltipTrigger>
        <TooltipContent>
          700ms delay
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={1000}>
        <TooltipTrigger>
          <Button variant="secondary">Slow</Button>
        </TooltipTrigger>
        <TooltipContent>
          1000ms delay
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <Button>Rich Content Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className="space-y-2">
          <p className="font-semibold">Keyboard Shortcut</p>
          <p className="text-sm text-black/80">Press ⌘K to open command palette</p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIconButtons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger>
          <IconButton aria-label="Settings">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>Settings</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <IconButton aria-label="Delete">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>Delete item</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <IconButton aria-label="Edit">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>Edit item</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <IconButton aria-label="Share">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.632 4.316C18.114 15.938 18 15.482 18 15c0-.482.114-.938.316-1.342M15 9a3 3 0 100-6 3 3 0 000 6zm0 12a3 3 0 100-6 3 3 0 000 6zM9 12a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>Share</TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const DisabledElements: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger>
          <Button disabled>Disabled Button</Button>
        </TooltipTrigger>
        <TooltipContent>
          This action is currently unavailable
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <span className="inline-block">
            <IconButton disabled aria-label="Disabled action">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </IconButton>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          Feature locked. Upgrade to access.
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <Button>Hover for detailed info</Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className="max-w-xs">
          <p className="font-semibold mb-1">Advanced Feature</p>
          <p className="text-sm text-black/80">
            This feature allows you to perform complex operations with ease.
            It includes automatic optimization and real-time synchronization.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};