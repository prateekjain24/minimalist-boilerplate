import type { Meta, StoryObj } from '@storybook/react';
import { Separator, Container } from '@repo/design-system';

const meta = {
  title: 'Layout/Separator',
  component: Separator,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the separator',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is decorative or semantic',
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: (args) => (
    <div className="w-full">
      <p className="mb-4">Content above the separator</p>
      <Separator {...args} />
      <p className="mt-4">Content below the separator</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    decorative: true,
  },
  render: (args) => (
    <div className="flex items-center h-12">
      <span>Left content</span>
      <Separator {...args} className="mx-4" />
      <span>Right content</span>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold mb-4">Default Thickness</h3>
        <Separator />
      </div>
      
      <div>
        <h3 className="font-bold mb-4">Thicker Separator</h3>
        <Separator className="h-0.5" />
      </div>
      
      <div>
        <h3 className="font-bold mb-4">Dashed Separator</h3>
        <Separator className="border-t-2 border-dashed border-black bg-transparent h-0" />
      </div>
      
      <div>
        <h3 className="font-bold mb-4">Dotted Separator</h3>
        <Separator className="border-t-2 border-dotted border-black bg-transparent h-0" />
      </div>
      
      <div>
        <h3 className="font-bold mb-4">Gradient Separator</h3>
        <Separator className="h-px bg-gradient-to-r from-transparent via-black to-transparent" />
      </div>
    </div>
  ),
};

export const InNavigation: Story = {
  render: () => (
    <nav className="flex items-center gap-4">
      <a href="#" className="hover:opacity-60">Home</a>
      <Separator orientation="vertical" className="h-6" />
      <a href="#" className="hover:opacity-60">Products</a>
      <Separator orientation="vertical" className="h-6" />
      <a href="#" className="hover:opacity-60">About</a>
      <Separator orientation="vertical" className="h-6" />
      <a href="#" className="hover:opacity-60">Contact</a>
    </nav>
  ),
};

export const InSidebar: Story = {
  render: () => (
    <div className="w-64 border border-black p-4">
      <h3 className="font-bold mb-4">Menu</h3>
      
      <div className="space-y-2">
        <a href="#" className="block py-2 hover:opacity-60">Dashboard</a>
        <a href="#" className="block py-2 hover:opacity-60">Analytics</a>
        <a href="#" className="block py-2 hover:opacity-60">Reports</a>
      </div>
      
      <Separator className="my-4" />
      
      <div className="space-y-2">
        <a href="#" className="block py-2 hover:opacity-60">Settings</a>
        <a href="#" className="block py-2 hover:opacity-60">Help</a>
      </div>
      
      <Separator className="my-4" />
      
      <div className="space-y-2">
        <a href="#" className="block py-2 hover:opacity-60">Logout</a>
      </div>
    </div>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <Container maxWidth="md">
      <article className="py-8">
        <header>
          <h1 className="text-3xl font-bold mb-2">The Art of Minimalism</h1>
          <p className="text-black/60">Published on December 1, 2023</p>
        </header>
        
        <Separator className="my-8" />
        
        <div className="space-y-6">
          <p className="leading-relaxed">
            Minimalism is not just about having less. It's about making room for more of what matters.
            By eliminating the unnecessary, we create space for the essential.
          </p>
          
          <p className="leading-relaxed">
            In design, this principle translates to clean lines, purposeful whitespace, and a focus
            on functionality over decoration.
          </p>
        </div>
        
        <Separator className="my-8" />
        
        <footer className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-black/60">Share:</span>
            <a href="#" className="text-sm hover:opacity-60">Twitter</a>
            <Separator orientation="vertical" className="h-4" />
            <a href="#" className="text-sm hover:opacity-60">LinkedIn</a>
            <Separator orientation="vertical" className="h-4" />
            <a href="#" className="text-sm hover:opacity-60">Email</a>
          </div>
          
          <button className="text-sm hover:opacity-60">Bookmark</button>
        </footer>
      </article>
    </Container>
  ),
};

export const SemanticVsDecorative: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold mb-4">Decorative Separator (Visual Only)</h3>
        <div className="border border-black/20 p-4 rounded">
          <p className="mb-4">This separator is purely visual and has no semantic meaning.</p>
          <Separator decorative={true} />
          <p className="mt-4">It won't be announced by screen readers.</p>
        </div>
      </div>
      
      <div>
        <h3 className="font-bold mb-4">Semantic Separator (Content Division)</h3>
        <div className="border border-black/20 p-4 rounded">
          <section>
            <h4 className="font-medium mb-2">Section 1</h4>
            <p>This separator indicates a thematic break in content.</p>
          </section>
          <Separator decorative={false} className="my-4" />
          <section>
            <h4 className="font-medium mb-2">Section 2</h4>
            <p>Screen readers will announce this separator.</p>
          </section>
        </div>
      </div>
    </div>
  ),
};

export const WithSpacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold mb-4">Default Spacing</h3>
        <p>Content above</p>
        <Separator />
        <p>Content below</p>
      </div>
      
      <div>
        <h3 className="font-bold mb-4">Custom Spacing</h3>
        <p>Content above</p>
        <Separator className="my-8" />
        <p>Content below</p>
      </div>
      
      <div>
        <h3 className="font-bold mb-4">Asymmetric Spacing</h3>
        <p>Content above</p>
        <Separator className="mt-2 mb-8" />
        <p>Content below</p>
      </div>
    </div>
  ),
};