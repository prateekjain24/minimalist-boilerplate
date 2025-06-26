import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Overlay & Interactive/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A slide-out panel component that can appear from any edge of the screen.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls the visibility of the drawer',
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position from which the drawer slides out',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Size of the drawer',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when drawer is closed',
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for interactive examples
const DrawerDemo = ({ 
  position = 'right',
  size = 'md' 
}: { 
  position?: 'top' | 'right' | 'bottom' | 'left';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open {position} Drawer ({size})
      </Button>
      <Drawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        position={position}
        size={size}
      >
        <DrawerContent>
          <DrawerHeader>Drawer Title</DrawerHeader>
          <DrawerBody>
            <div className="space-y-4">
              <p className="text-black">
                This drawer slides out from the {position} side of the screen.
              </p>
              <p className="text-black/60">
                The drawer follows the minimalist design system with sharp corners and
                a strict black and white color palette.
              </p>
              <div className="border border-black p-4">
                <p className="text-sm text-black/80">
                  Size: {size.toUpperCase()}
                </p>
              </div>
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Save Changes
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const Default: Story = {
  render: () => <DrawerDemo />,
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <DrawerDemo position="top" />
      <DrawerDemo position="right" />
      <DrawerDemo position="bottom" />
      <DrawerDemo position="left" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <DrawerDemo size="sm" />
      <DrawerDemo size="md" />
      <DrawerDemo size="lg" />
      <DrawerDemo size="xl" />
      <DrawerDemo size="full" />
    </div>
  ),
};

export const NavigationDrawer: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
      'Dashboard',
      'Analytics',
      'Reports',
      'Settings',
      'Profile',
      'Help',
    ];

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Navigation
        </Button>
        <Drawer 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          position="left"
          size="sm"
        >
          <DrawerContent>
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-4 py-3 text-black hover:bg-black hover:text-white transition-colors duration-200"
                    onClick={() => {
                      console.log(`Navigating to ${item}`);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};

export const FormDrawer: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Create New Item
        </Button>
        <Drawer 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          position="right"
          size="md"
        >
          <DrawerContent>
            <DrawerHeader>Create New Item</DrawerHeader>
            <DrawerBody>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2 focus:pb-[11px]"
                    placeholder="Enter title"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2 resize-none"
                    rows={4}
                    placeholder="Enter description"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-2">
                    Category
                  </label>
                  <select className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2">
                    <option>Select category</option>
                    <option>Design</option>
                    <option>Development</option>
                    <option>Marketing</option>
                  </select>
                </div>
              </form>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Create
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};

export const BottomSheet: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Bottom Sheet
        </Button>
        <Drawer 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          position="bottom"
          size="lg"
        >
          <DrawerContent>
            <DrawerHeader>Share Options</DrawerHeader>
            <DrawerBody>
              <div className="grid grid-cols-4 gap-4">
                {['Email', 'Link', 'Twitter', 'Facebook', 'LinkedIn', 'WhatsApp', 'Telegram', 'More'].map((option) => (
                  <button
                    key={option}
                    className="flex flex-col items-center gap-2 p-4 border border-black hover:bg-black hover:text-white transition-colors duration-200"
                    onClick={() => {
                      console.log(`Sharing via ${option}`);
                      setIsOpen(false);
                    }}
                  >
                    <div className="w-8 h-8 border-2 border-current" />
                    <span className="text-xs">{option}</span>
                  </button>
                ))}
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};