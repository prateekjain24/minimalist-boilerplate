import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@repo/design-system';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading level for styling',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML element to render as',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Override default font weight',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: 'Heading Level 1',
    level: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'Heading Level 2',
    level: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'Heading Level 3',
    level: 'h3',
  },
};

export const H4: Story = {
  args: {
    children: 'Heading Level 4',
    level: 'h4',
  },
};

export const H5: Story = {
  args: {
    children: 'Heading Level 5',
    level: 'h5',
  },
};

export const H6: Story = {
  args: {
    children: 'Heading Level 6',
    level: 'h6',
  },
};

export const CenterAligned: Story = {
  args: {
    children: 'Center Aligned Heading',
    level: 'h2',
    align: 'center',
  },
};

export const RightAligned: Story = {
  args: {
    children: 'Right Aligned Heading',
    level: 'h3',
    align: 'right',
  },
};

export const CustomWeight: Story = {
  args: {
    children: 'H2 with Normal Weight Override',
    level: 'h2',
    weight: 'normal',
  },
};

export const SemanticVsVisual: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-black/60 mb-2">H1 element styled as H3:</p>
        <Heading as="h1" level="h3">
          Semantic H1, Visual H3
        </Heading>
      </div>
      <div>
        <p className="text-sm text-black/60 mb-2">H3 element styled as H1:</p>
        <Heading as="h3" level="h1">
          Semantic H3, Visual H1
        </Heading>
      </div>
      <div>
        <p className="text-sm text-black/60 mb-2">H2 element with custom weight:</p>
        <Heading as="h2" level="h2" weight="normal">
          H2 with Normal Weight
        </Heading>
      </div>
    </div>
  ),
};

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <Heading level="h1">H1: Main Page Title</Heading>
      <p className="text-sm text-black/60">48px/60px/72px (responsive) - Bold</p>
      
      <div className="border-t border-black/10 pt-6">
        <Heading level="h2">H2: Section Heading</Heading>
        <p className="text-sm text-black/60">36px/48px/60px (responsive) - Bold</p>
      </div>
      
      <div className="border-t border-black/10 pt-6">
        <Heading level="h3">H3: Subsection Heading</Heading>
        <p className="text-sm text-black/60">30px/36px/48px (responsive) - Semibold</p>
      </div>
      
      <div className="border-t border-black/10 pt-6">
        <Heading level="h4">H4: Content Heading</Heading>
        <p className="text-sm text-black/60">20px/24px/30px (responsive) - Semibold</p>
      </div>
      
      <div className="border-t border-black/10 pt-6">
        <Heading level="h5">H5: Minor Heading</Heading>
        <p className="text-sm text-black/60">18px/20px/24px (responsive) - Medium</p>
      </div>
      
      <div className="border-t border-black/10 pt-6">
        <Heading level="h6">H6: Small Heading</Heading>
        <p className="text-sm text-black/60">16px/18px/20px (responsive) - Medium</p>
      </div>
    </div>
  ),
};

export const ResponsiveBehavior: Story = {
  parameters: {
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1440px', height: '900px' } },
      },
    },
  },
  render: () => (
    <div className="space-y-6">
      <div className="text-sm text-black/60 mb-4">
        Headings are responsive and adapt to screen size. Try changing viewport size.
      </div>
      <Heading level="h1">Responsive H1 Heading</Heading>
      <Heading level="h2">Responsive H2 Heading</Heading>
      <Heading level="h3">Responsive H3 Heading</Heading>
    </div>
  ),
};

export const AlignmentVariants: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Heading level="h3" align="left">
        Left Aligned Heading (Default)
      </Heading>
      <Heading level="h3" align="center">
        Center Aligned Heading
      </Heading>
      <Heading level="h3" align="right">
        Right Aligned Heading
      </Heading>
    </div>
  ),
};

export const WeightOverrides: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-black/60 mb-2">H1 with different weights:</p>
        <Heading level="h1" weight="normal">H1 Normal Weight</Heading>
        <Heading level="h1" weight="medium">H1 Medium Weight</Heading>
        <Heading level="h1" weight="semibold">H1 Semibold Weight</Heading>
        <Heading level="h1" weight="bold">H1 Bold Weight (Default)</Heading>
      </div>
    </div>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <article className="max-w-4xl space-y-6">
      <Heading level="h1">Minimalist Design System</Heading>
      <Heading level="h2" weight="normal" className="text-black/70">
        A clean, modern foundation for building beautiful applications
      </Heading>
      
      <div className="space-y-4 pt-8">
        <Heading level="h3">Core Principles</Heading>
        <p className="text-base text-black/70">
          Our design system is built on fundamental principles that guide every decision.
        </p>
      </div>
      
      <div className="space-y-4">
        <Heading level="h4">1. Simplicity First</Heading>
        <p className="text-base text-black/70">
          Every element serves a purpose. No unnecessary decoration.
        </p>
      </div>
      
      <div className="space-y-4">
        <Heading level="h4">2. Consistent Hierarchy</Heading>
        <p className="text-base text-black/70">
          Clear visual hierarchy ensures information is easy to scan and understand.
        </p>
      </div>
    </article>
  ),
};