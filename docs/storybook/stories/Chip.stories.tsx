import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Overlay & Interactive/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A deletable chip component for tags, filters, and selections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline'],
      description: 'Visual variant of the chip',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the chip',
    },
    deletable: {
      control: 'boolean',
      description: 'Whether the chip can be deleted',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the chip is disabled',
    },
    onDelete: {
      action: 'deleted',
      description: 'Callback when chip is deleted',
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Chip',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip variant="default">Default</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="outline">Outline</Chip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  ),
};

export const Deletable: Story = {
  render: () => {
    const [chips, setChips] = useState(['React', 'TypeScript', 'Next.js', 'Tailwind']);

    const handleDelete = (chipToDelete: string) => {
      setChips(chips.filter(chip => chip !== chipToDelete));
    };

    return (
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <Chip
            key={chip}
            deletable
            onDelete={() => handleDelete(chip)}
          >
            {chip}
          </Chip>
        ))}
        {chips.length === 0 && (
          <p className="text-black/60">All chips deleted</p>
        )}
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip>
        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Verified
      </Chip>
      <Chip>
        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Pending
      </Chip>
      <Chip deletable>
        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
        Tagged
      </Chip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip disabled>Disabled</Chip>
      <Chip disabled deletable>Disabled Deletable</Chip>
      <Chip disabled variant="secondary">Disabled Secondary</Chip>
    </div>
  ),
};

export const FilterChips: Story = {
  render: () => {
    const [filters, setFilters] = useState([
      { id: 1, label: 'Category: Electronics', active: true },
      { id: 2, label: 'Price: $100-$500', active: true },
      { id: 3, label: 'Brand: Apple', active: true },
      { id: 4, label: 'In Stock', active: true },
    ]);

    const removeFilter = (id: number) => {
      setFilters(filters.filter(filter => filter.id !== id));
    };

    const clearAll = () => {
      setFilters([]);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Active Filters</h3>
          {filters.length > 0 && (
            <button 
              onClick={clearAll}
              className="text-sm text-black/60 hover:text-black transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Chip
              key={filter.id}
              variant="outline"
              deletable
              onDelete={() => removeFilter(filter.id)}
            >
              {filter.label}
            </Chip>
          ))}
          {filters.length === 0 && (
            <p className="text-black/60">No filters applied</p>
          )}
        </div>
      </div>
    );
  },
};

export const TagInput: Story = {
  render: () => {
    const [tags, setTags] = useState(['design', 'minimal', 'black-white']);
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputValue.trim()) {
        e.preventDefault();
        if (!tags.includes(inputValue.trim())) {
          setTags([...tags, inputValue.trim()]);
        }
        setInputValue('');
      }
    };

    const removeTag = (tagToRemove: string) => {
      setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
      <div className="w-full max-w-md">
        <label className="block text-xs font-medium uppercase tracking-wider mb-2">
          Tags
        </label>
        <div className="border border-black p-3">
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <Chip
                key={tag}
                size="sm"
                deletable
                onDelete={() => removeTag(tag)}
              >
                {tag}
              </Chip>
            ))}
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a tag..."
            className="w-full px-0 py-1 text-sm bg-transparent border-0 focus:outline-none"
          />
        </div>
        <p className="mt-2 text-xs text-black/60">
          Press Enter to add a tag
        </p>
      </div>
    );
  },
};

export const StatusChips: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Chip variant="default">
          <span className="w-2 h-2 bg-black rounded-full mr-1.5" />
          Active
        </Chip>
        <Chip variant="secondary">
          <span className="w-2 h-2 bg-black/40 rounded-full mr-1.5" />
          Pending
        </Chip>
        <Chip variant="outline">
          <span className="w-2 h-2 border-2 border-black rounded-full mr-1.5" />
          Inactive
        </Chip>
      </div>
      
      <div className="flex gap-2">
        <Chip size="sm">New</Chip>
        <Chip size="sm" variant="secondary">Draft</Chip>
        <Chip size="sm" variant="outline">Archived</Chip>
      </div>
    </div>
  ),
};

export const ChipGroup: Story = {
  render: () => {
    const categories = [
      { id: 1, name: 'Technology', count: 42 },
      { id: 2, name: 'Design', count: 28 },
      { id: 3, name: 'Business', count: 35 },
      { id: 4, name: 'Marketing', count: 19 },
      { id: 5, name: 'Development', count: 67 },
    ];

    const [selected, setSelected] = useState<number[]>([1, 3]);

    const toggleCategory = (id: number) => {
      setSelected(prev =>
        prev.includes(id)
          ? prev.filter(catId => catId !== id)
          : [...prev, id]
      );
    };

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-semibold">Select Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Chip
              key={category.id}
              variant={selected.includes(category.id) ? 'default' : 'outline'}
              onClick={() => toggleCategory(category.id)}
              className="cursor-pointer"
            >
              {category.name}
              <span className="ml-1 text-xs opacity-60">
                ({category.count})
              </span>
            </Chip>
          ))}
        </div>
      </div>
    );
  },
};