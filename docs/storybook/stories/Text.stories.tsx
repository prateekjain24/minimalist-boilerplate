import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '@repo/design-system';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
      description: 'Text size variant',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight variant',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'inverse'],
      description: 'Text color variant',
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'strong', 'em', 'small'],
      description: 'HTML element to render as',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    size: 'base',
    weight: 'normal',
  },
};

export const ExtraSmall: Story = {
  args: {
    children: 'Extra small text for fine print and annotations.',
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    children: 'Small text for secondary information.',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large text for emphasis.',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'Extra large text for important content.',
    size: 'xl',
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    children: 'Double extra large text for headlines.',
    size: '2xl',
  },
};

export const Bold: Story = {
  args: {
    children: 'Bold text for strong emphasis.',
    weight: 'bold',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary text color for less prominent content.',
    color: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary text color for subtle information.',
    color: 'tertiary',
  },
};

export const Inverse: Story = {
  parameters: {
    backgrounds: { default: 'black' },
  },
  args: {
    children: 'Inverse text color for dark backgrounds.',
    color: 'inverse',
  },
};

export const CenterAligned: Story = {
  args: {
    children: 'Center aligned text for balanced layouts.',
    align: 'center',
  },
};

export const AsSpan: Story = {
  args: {
    children: 'This text is rendered as a span element.',
    as: 'span',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Text size="xs">Extra Small (xs) - 12px</Text>
      <Text size="sm">Small (sm) - 14px</Text>
      <Text size="base">Base (base) - 16px</Text>
      <Text size="lg">Large (lg) - 18px</Text>
      <Text size="xl">Extra Large (xl) - 20px</Text>
      <Text size="2xl">Double Extra Large (2xl) - 24px</Text>
    </div>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <Text weight="normal">Normal Weight (400)</Text>
      <Text weight="medium">Medium Weight (500)</Text>
      <Text weight="semibold">Semibold Weight (600)</Text>
      <Text weight="bold">Bold Weight (700)</Text>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 bg-white">
        <Text color="primary">Primary Color - Full black</Text>
        <Text color="secondary">Secondary Color - 70% black</Text>
        <Text color="tertiary">Tertiary Color - 50% black</Text>
      </div>
      <div className="p-4 bg-black">
        <Text color="inverse">Inverse Color - White on dark</Text>
      </div>
    </div>
  ),
};

export const MixedVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <Text size="2xl" weight="bold">
        Bold Headline Text
      </Text>
      <Text size="lg" weight="medium" color="secondary">
        Subheading with medium weight and secondary color
      </Text>
      <Text size="base">
        Regular paragraph text that forms the main body content. This demonstrates
        the default text style used throughout the application.
      </Text>
      <Text size="sm" color="tertiary">
        Small print disclaimer text with tertiary color for reduced emphasis.
      </Text>
      <div className="p-4 bg-black">
        <Text size="lg" weight="semibold" color="inverse">
          Inverse text on dark background with semibold weight
        </Text>
      </div>
    </div>
  ),
};