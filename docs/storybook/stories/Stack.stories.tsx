import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Button, Card, CardContent } from '@repo/design-system';

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of the stack',
    },
    spacing: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24],
      description: 'Spacing between items',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Alignment along the cross axis',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Justification along the main axis',
    },
    wrap: {
      control: 'boolean',
      description: 'Whether items should wrap',
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalStack: Story = {
  args: {
    direction: 'vertical',
    spacing: 4,
    children: (
      <>
        <div className="p-4 border border-black">Item 1</div>
        <div className="p-4 border border-black">Item 2</div>
        <div className="p-4 border border-black">Item 3</div>
      </>
    ),
  },
};

export const HorizontalStack: Story = {
  args: {
    direction: 'horizontal',
    spacing: 4,
    children: (
      <>
        <div className="p-4 border border-black">Item 1</div>
        <div className="p-4 border border-black">Item 2</div>
        <div className="p-4 border border-black">Item 3</div>
      </>
    ),
  },
};

export const SpacingVariants: Story = {
  render: () => (
    <div className="space-y-8">
      {[1, 2, 4, 8, 12, 16].map((spacing) => (
        <div key={spacing}>
          <h3 className="font-bold mb-4">Spacing: {spacing}</h3>
          <Stack direction="horizontal" spacing={spacing as any}>
            <div className="p-4 border border-black bg-black/5">Item 1</div>
            <div className="p-4 border border-black bg-black/5">Item 2</div>
            <div className="p-4 border border-black bg-black/5">Item 3</div>
          </Stack>
        </div>
      ))}
    </div>
  ),
};

export const AlignmentOptions: Story = {
  render: () => (
    <div className="space-y-8">
      {(['start', 'center', 'end', 'stretch', 'baseline'] as const).map((align) => (
        <div key={align}>
          <h3 className="font-bold mb-4">Align: {align}</h3>
          <Stack direction="horizontal" spacing={4} align={align} className="border border-dashed border-black/30 p-4 min-h-[120px]">
            <div className="p-4 border border-black">Small</div>
            <div className="p-6 border border-black">Medium</div>
            <div className="p-8 border border-black">Large</div>
          </Stack>
        </div>
      ))}
    </div>
  ),
};

export const JustificationOptions: Story = {
  render: () => (
    <div className="space-y-8">
      {(['start', 'center', 'end', 'between', 'around', 'evenly'] as const).map((justify) => (
        <div key={justify}>
          <h3 className="font-bold mb-4">Justify: {justify}</h3>
          <Stack direction="horizontal" spacing={0} justify={justify} className="border border-dashed border-black/30 p-4">
            <div className="p-4 border border-black">Item 1</div>
            <div className="p-4 border border-black">Item 2</div>
            <div className="p-4 border border-black">Item 3</div>
          </Stack>
        </div>
      ))}
    </div>
  ),
};

export const WithWrap: Story = {
  render: () => (
    <div className="max-w-md">
      <h3 className="font-bold mb-4">Wrapping Stack</h3>
      <Stack direction="horizontal" spacing={4} wrap>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="p-4 border border-black min-w-[100px]">
            Item {i + 1}
          </div>
        ))}
      </Stack>
    </div>
  ),
};

export const ButtonGroup: Story = {
  render: () => (
    <Stack direction="horizontal" spacing={2}>
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Delete</Button>
    </Stack>
  ),
};

export const FormLayout: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardContent>
        <Stack direction="vertical" spacing={6}>
          <Stack direction="vertical" spacing={2}>
            <label className="text-sm font-medium uppercase tracking-wider">Name</label>
            <input 
              type="text" 
              className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2"
              placeholder="Enter your name"
            />
          </Stack>
          
          <Stack direction="vertical" spacing={2}>
            <label className="text-sm font-medium uppercase tracking-wider">Email</label>
            <input 
              type="email" 
              className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2"
              placeholder="Enter your email"
            />
          </Stack>
          
          <Stack direction="vertical" spacing={2}>
            <label className="text-sm font-medium uppercase tracking-wider">Message</label>
            <textarea 
              className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2 resize-none"
              placeholder="Enter your message"
              rows={4}
            />
          </Stack>
          
          <Stack direction="horizontal" spacing={3} justify="end">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  ),
};

export const NavigationBar: Story = {
  render: () => (
    <nav className="border-b border-black p-4">
      <Stack direction="horizontal" justify="between" align="center">
        <h1 className="text-2xl font-bold">LOGO</h1>
        
        <Stack direction="horizontal" spacing={8} align="center">
          <a href="#" className="hover:opacity-60">Home</a>
          <a href="#" className="hover:opacity-60">Products</a>
          <a href="#" className="hover:opacity-60">About</a>
          <a href="#" className="hover:opacity-60">Contact</a>
        </Stack>
        
        <Stack direction="horizontal" spacing={3}>
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="primary" size="sm">Sign Up</Button>
        </Stack>
      </Stack>
    </nav>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <Stack direction="vertical" spacing={8}>
      <h2 className="text-2xl font-bold">Featured Products</h2>
      
      <Stack direction="horizontal" spacing={6} wrap>
        {Array.from({ length: 3 }, (_, i) => (
          <Card key={i} className="flex-1 min-w-[250px]">
            <CardContent>
              <Stack direction="vertical" spacing={4}>
                <div className="h-48 bg-black/5" />
                <Stack direction="vertical" spacing={2}>
                  <h3 className="font-bold">Product {i + 1}</h3>
                  <p className="text-sm text-black/60">
                    A minimal product description that explains the key features.
                  </p>
                </Stack>
                <Stack direction="horizontal" justify="between" align="center">
                  <span className="font-bold">$99.00</span>
                  <Button size="sm">Add to Cart</Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  ),
};

export const NestedStacks: Story = {
  render: () => (
    <Stack direction="vertical" spacing={6} className="border border-black p-6">
      <h3 className="font-bold">Nested Stack Layout</h3>
      
      <Stack direction="horizontal" spacing={4}>
        <Stack direction="vertical" spacing={3} className="flex-1 border border-black/20 p-4">
          <div className="h-12 bg-black/10" />
          <div className="h-12 bg-black/10" />
          <div className="h-12 bg-black/10" />
        </Stack>
        
        <Stack direction="vertical" spacing={3} className="flex-1">
          <Stack direction="horizontal" spacing={3}>
            <div className="flex-1 h-12 bg-black/10 border border-black/20" />
            <div className="flex-1 h-12 bg-black/10 border border-black/20" />
          </Stack>
          <div className="h-24 bg-black/10 border border-black/20" />
        </Stack>
      </Stack>
    </Stack>
  ),
};