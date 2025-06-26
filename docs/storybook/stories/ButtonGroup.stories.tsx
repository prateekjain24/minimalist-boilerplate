import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup, Button, IconButton } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Overlay & Interactive/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for grouping related buttons together with connected styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the button group',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'minimal'],
      description: 'Visual variant for all buttons in the group',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size for all buttons in the group',
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <ButtonGroup variant="primary">
        <Button>Primary</Button>
        <Button>Buttons</Button>
        <Button>Group</Button>
      </ButtonGroup>

      <ButtonGroup variant="secondary">
        <Button>Secondary</Button>
        <Button>Buttons</Button>
        <Button>Group</Button>
      </ButtonGroup>

      <ButtonGroup variant="ghost">
        <Button>Ghost</Button>
        <Button>Buttons</Button>
        <Button>Group</Button>
      </ButtonGroup>

      <ButtonGroup variant="minimal">
        <Button>Minimal</Button>
        <Button>Buttons</Button>
        <Button>Group</Button>
      </ButtonGroup>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <ButtonGroup size="sm">
        <Button>Small</Button>
        <Button>Size</Button>
        <Button>Group</Button>
      </ButtonGroup>

      <ButtonGroup size="md">
        <Button>Medium</Button>
        <Button>Size</Button>
        <Button>Group</Button>
      </ButtonGroup>

      <ButtonGroup size="lg">
        <Button>Large</Button>
        <Button>Size</Button>
        <Button>Group</Button>
      </ButtonGroup>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex gap-4">
      <ButtonGroup orientation="vertical">
        <Button>Top</Button>
        <Button>Middle</Button>
        <Button>Bottom</Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical" variant="secondary">
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
        <Button>Fourth</Button>
      </ButtonGroup>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ButtonGroup>
      <Button>
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </Button>
      <Button>
        Next
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>
    </ButtonGroup>
  ),
};

export const IconButtonGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <ButtonGroup>
        <IconButton aria-label="Bold">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h4.5a4.5 4.5 0 001.545-8.729A4 4 0 0011 2H7zm4 6a2 2 0 100-4H7v4h4zm.5 2H7v6h4.5a2.5 2.5 0 000-5z" />
          </svg>
        </IconButton>
        <IconButton aria-label="Italic">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 2h6a1 1 0 110 2h-2.176l-3.648 12H10a1 1 0 110 2H4a1 1 0 110-2h2.176l3.648-12H8a1 1 0 110-2z" />
          </svg>
        </IconButton>
        <IconButton aria-label="Underline">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 4a1 1 0 00-1 1v5a1 1 0 102 0V5a1 1 0 00-1-1zM5 5a1 1 0 10-2 0v5a5 5 0 0010 0V5a1 1 0 10-2 0v5a3 3 0 11-6 0V5zM3 17a1 1 0 100 2h14a1 1 0 100-2H3z" />
          </svg>
        </IconButton>
      </ButtonGroup>

      <ButtonGroup variant="secondary">
        <IconButton aria-label="Align left">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 8a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1zM3 11a1 1 0 100 2h14a1 1 0 100-2H3zM2 16a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z" />
          </svg>
        </IconButton>
        <IconButton aria-label="Align center">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zM3 11a1 1 0 100 2h14a1 1 0 100-2H3zM5 16a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
          </svg>
        </IconButton>
        <IconButton aria-label="Align right">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM6 8a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM3 11a1 1 0 100 2h14a1 1 0 100-2H3zM6 16a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1z" />
          </svg>
        </IconButton>
      </ButtonGroup>
    </div>
  ),
};

export const ToggleGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('grid');

    return (
      <ButtonGroup variant="secondary">
        <Button 
          className={selected === 'grid' ? 'bg-black text-white' : ''}
          onClick={() => setSelected('grid')}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Grid
        </Button>
        <Button 
          className={selected === 'list' ? 'bg-black text-white' : ''}
          onClick={() => setSelected('list')}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          List
        </Button>
      </ButtonGroup>
    );
  },
};

export const Pagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(2);

    return (
      <ButtonGroup>
        <IconButton 
          aria-label="First page"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </IconButton>
        <IconButton 
          aria-label="Previous page"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </IconButton>
        {[1, 2, 3, 4, 5].map((page) => (
          <Button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? 'bg-black text-white' : ''}
          >
            {page}
          </Button>
        ))}
        <IconButton 
          aria-label="Next page"
          onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
          disabled={currentPage === 5}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </IconButton>
        <IconButton 
          aria-label="Last page"
          onClick={() => setCurrentPage(5)}
          disabled={currentPage === 5}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </IconButton>
      </ButtonGroup>
    );
  },
};

export const MixedContent: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Text</Button>
      <IconButton aria-label="Icon">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </IconButton>
      <Button>
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        With Icon
      </Button>
    </ButtonGroup>
  ),
};

export const Segmented: Story = {
  render: () => {
    const [timeframe, setTimeframe] = useState('week');

    return (
      <div className="p-4 border border-black">
        <h3 className="text-sm font-semibold mb-4">Analytics Timeframe</h3>
        <ButtonGroup variant="secondary" className="w-full">
          <Button 
            className={timeframe === 'day' ? 'bg-black text-white flex-1' : 'flex-1'}
            onClick={() => setTimeframe('day')}
          >
            Day
          </Button>
          <Button 
            className={timeframe === 'week' ? 'bg-black text-white flex-1' : 'flex-1'}
            onClick={() => setTimeframe('week')}
          >
            Week
          </Button>
          <Button 
            className={timeframe === 'month' ? 'bg-black text-white flex-1' : 'flex-1'}
            onClick={() => setTimeframe('month')}
          >
            Month
          </Button>
          <Button 
            className={timeframe === 'year' ? 'bg-black text-white flex-1' : 'flex-1'}
            onClick={() => setTimeframe('year')}
          >
            Year
          </Button>
        </ButtonGroup>
      </div>
    );
  },
};