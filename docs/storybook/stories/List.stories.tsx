import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem, Card, CardContent, Stack } from '@repo/design-system';

const meta = {
  title: 'Layout/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['ordered', 'unordered'],
      description: 'Type of list',
    },
    styleType: {
      control: 'select',
      options: ['none', 'disc', 'decimal', 'circle', 'square'],
      description: 'List style type',
    },
    spacing: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Spacing between list items',
    },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnorderedList: Story = {
  args: {
    variant: 'unordered',
    styleType: 'disc',
    spacing: 2,
    children: (
      <>
        <ListItem>First item in the list</ListItem>
        <ListItem>Second item in the list</ListItem>
        <ListItem>Third item in the list</ListItem>
        <ListItem>Fourth item in the list</ListItem>
      </>
    ),
  },
};

export const OrderedList: Story = {
  args: {
    variant: 'ordered',
    styleType: 'decimal',
    spacing: 2,
    children: (
      <>
        <ListItem>Step one: Initialize the project</ListItem>
        <ListItem>Step two: Install dependencies</ListItem>
        <ListItem>Step three: Configure settings</ListItem>
        <ListItem>Step four: Run the application</ListItem>
      </>
    ),
  },
};

export const StyleVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-bold mb-4">Unordered Styles</h3>
        <Stack direction="vertical" spacing={6}>
          <div>
            <p className="text-sm text-black/60 mb-2">disc</p>
            <List variant="unordered" styleType="disc">
              <ListItem>Disc item 1</ListItem>
              <ListItem>Disc item 2</ListItem>
              <ListItem>Disc item 3</ListItem>
            </List>
          </div>
          
          <div>
            <p className="text-sm text-black/60 mb-2">circle</p>
            <List variant="unordered" styleType="circle">
              <ListItem>Circle item 1</ListItem>
              <ListItem>Circle item 2</ListItem>
              <ListItem>Circle item 3</ListItem>
            </List>
          </div>
          
          <div>
            <p className="text-sm text-black/60 mb-2">square</p>
            <List variant="unordered" styleType="square">
              <ListItem>Square item 1</ListItem>
              <ListItem>Square item 2</ListItem>
              <ListItem>Square item 3</ListItem>
            </List>
          </div>
          
          <div>
            <p className="text-sm text-black/60 mb-2">none</p>
            <List variant="unordered" styleType="none">
              <ListItem>No marker item 1</ListItem>
              <ListItem>No marker item 2</ListItem>
              <ListItem>No marker item 3</ListItem>
            </List>
          </div>
        </Stack>
      </div>
      
      <div>
        <h3 className="font-bold mb-4">Ordered Styles</h3>
        <Stack direction="vertical" spacing={6}>
          <div>
            <p className="text-sm text-black/60 mb-2">decimal</p>
            <List variant="ordered" styleType="decimal">
              <ListItem>Decimal item</ListItem>
              <ListItem>Decimal item</ListItem>
              <ListItem>Decimal item</ListItem>
            </List>
          </div>
          
          <div>
            <p className="text-sm text-black/60 mb-2">Custom with CSS</p>
            <List variant="ordered" className="list-[upper-roman]">
              <ListItem>Roman numeral</ListItem>
              <ListItem>Roman numeral</ListItem>
              <ListItem>Roman numeral</ListItem>
            </List>
          </div>
        </Stack>
      </div>
    </div>
  ),
};

export const SpacingVariants: Story = {
  render: () => (
    <div className="space-y-8">
      {[1, 2, 3, 4, 5, 6].map((spacing) => (
        <div key={spacing}>
          <h3 className="font-bold mb-4">Spacing: {spacing}</h3>
          <List spacing={spacing as any}>
            <ListItem>Item with spacing level {spacing}</ListItem>
            <ListItem>Another item with the same spacing</ListItem>
            <ListItem>Third item to show the spacing clearly</ListItem>
          </List>
        </div>
      ))}
    </div>
  ),
};

export const NestedLists: Story = {
  render: () => (
    <List variant="unordered" spacing={3}>
      <ListItem>
        Main navigation
        <List variant="unordered" styleType="circle" className="mt-2">
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>
            Products
            <List variant="unordered" styleType="square" className="mt-2">
              <ListItem>Category A</ListItem>
              <ListItem>Category B</ListItem>
              <ListItem>Category C</ListItem>
            </List>
          </ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </ListItem>
      <ListItem>
        User menu
        <List variant="unordered" styleType="circle" className="mt-2">
          <ListItem>Profile</ListItem>
          <ListItem>Settings</ListItem>
          <ListItem>Logout</ListItem>
        </List>
      </ListItem>
    </List>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Stack direction="vertical" spacing={6}>
      <div>
        <h3 className="font-bold mb-4">Custom Colors</h3>
        <List variant="unordered">
          <ListItem className="text-black">Default black text</ListItem>
          <ListItem className="text-black/70">Lighter text with opacity</ListItem>
          <ListItem className="text-black/50">Even lighter text</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="font-bold mb-4">Custom Markers</h3>
        <List variant="unordered" styleType="none" className="pl-0">
          <ListItem className="flex items-start gap-2">
            <span className="text-black mt-1">→</span>
            <span>Custom arrow marker</span>
          </ListItem>
          <ListItem className="flex items-start gap-2">
            <span className="text-black mt-1">→</span>
            <span>Another item with arrow</span>
          </ListItem>
          <ListItem className="flex items-start gap-2">
            <span className="text-black mt-1">→</span>
            <span>Third item with arrow</span>
          </ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="font-bold mb-4">Checkmark List</h3>
        <List variant="unordered" styleType="none" className="pl-0">
          <ListItem className="flex items-start gap-3">
            <span className="text-black">✓</span>
            <span>Completed task</span>
          </ListItem>
          <ListItem className="flex items-start gap-3">
            <span className="text-black">✓</span>
            <span>Another completed task</span>
          </ListItem>
          <ListItem className="flex items-start gap-3">
            <span className="text-black/30">✓</span>
            <span className="text-black/30">Pending task</span>
          </ListItem>
        </List>
      </div>
    </Stack>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardContent className="p-6">
          <h3 className="font-bold mb-4">Features</h3>
          <List variant="unordered" spacing={3}>
            <ListItem>Clean, minimalist design</ListItem>
            <ListItem>Built with TypeScript</ListItem>
            <ListItem>Fully responsive layout</ListItem>
            <ListItem>Accessible components</ListItem>
            <ListItem>Dark mode support</ListItem>
          </List>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="font-bold mb-4">Installation Steps</h3>
          <List variant="ordered" spacing={3}>
            <ListItem>Clone the repository</ListItem>
            <ListItem>Install dependencies with npm</ListItem>
            <ListItem>Configure environment variables</ListItem>
            <ListItem>Run the development server</ListItem>
            <ListItem>Open localhost:3000</ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <List variant="unordered" styleType="none" spacing={6}>
        <ListItem>
          <h3 className="font-bold mb-2">What is minimalist design?</h3>
          <p className="text-black/70">
            Minimalist design is a design approach that emphasizes simplicity and the removal of superfluous elements.
            It focuses on essential elements and functionality.
          </p>
        </ListItem>
        <ListItem>
          <h3 className="font-bold mb-2">Why choose a black and white color scheme?</h3>
          <p className="text-black/70">
            A monochromatic palette creates strong contrast, improves readability, and maintains visual consistency
            across all components and layouts.
          </p>
        </ListItem>
        <ListItem>
          <h3 className="font-bold mb-2">Is this design system accessible?</h3>
          <p className="text-black/70">
            Yes, all components are built with accessibility in mind, including proper ARIA labels, keyboard navigation,
            and sufficient color contrast ratios.
          </p>
        </ListItem>
      </List>
    </div>
  ),
};

export const Timeline: Story = {
  render: () => (
    <div className="max-w-xl">
      <h3 className="font-bold mb-6">Project Timeline</h3>
      <List variant="unordered" styleType="none" spacing={6}>
        <ListItem className="relative pl-8">
          <span className="absolute left-0 top-2 w-2 h-2 bg-black rounded-full" />
          <span className="absolute left-1 top-4 bottom-0 w-px bg-black/20" />
          <div>
            <p className="font-medium">January 2024</p>
            <p className="text-sm text-black/60 mt-1">Project kickoff and initial planning</p>
          </div>
        </ListItem>
        <ListItem className="relative pl-8">
          <span className="absolute left-0 top-2 w-2 h-2 bg-black rounded-full" />
          <span className="absolute left-1 top-4 bottom-0 w-px bg-black/20" />
          <div>
            <p className="font-medium">February 2024</p>
            <p className="text-sm text-black/60 mt-1">Design system development</p>
          </div>
        </ListItem>
        <ListItem className="relative pl-8">
          <span className="absolute left-0 top-2 w-2 h-2 bg-black rounded-full" />
          <span className="absolute left-1 top-4 bottom-0 w-px bg-black/20" />
          <div>
            <p className="font-medium">March 2024</p>
            <p className="text-sm text-black/60 mt-1">Component implementation</p>
          </div>
        </ListItem>
        <ListItem className="relative pl-8">
          <span className="absolute left-0 top-2 w-2 h-2 bg-black rounded-full" />
          <div>
            <p className="font-medium">April 2024</p>
            <p className="text-sm text-black/60 mt-1">Testing and documentation</p>
          </div>
        </ListItem>
      </List>
    </div>
  ),
};