import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, DropdownSeparator, Button, IconButton } from '@repo/design-system';

const meta = {
  title: 'Overlay & Interactive/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dropdown menu component with keyboard navigation support and customizable items.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment of the dropdown content relative to the trigger',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Side on which to render the dropdown content',
    },
    sideOffset: {
      control: 'number',
      description: 'Distance in pixels from the trigger',
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button>Open Menu</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem onSelect={() => console.log('Profile clicked')}>
          Profile
        </DropdownItem>
        <DropdownItem onSelect={() => console.log('Settings clicked')}>
          Settings
        </DropdownItem>
        <DropdownItem onSelect={() => console.log('Team clicked')}>
          Team
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem onSelect={() => console.log('Logout clicked')}>
          Logout
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button>Actions</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem onSelect={() => console.log('New file')}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New File
        </DropdownItem>
        <DropdownItem onSelect={() => console.log('Copy')}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </DropdownItem>
        <DropdownItem onSelect={() => console.log('Edit')}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem onSelect={() => console.log('Delete')} destructive>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithKeyboardShortcuts: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button>File Menu</Button>
      </DropdownTrigger>
      <DropdownContent className="w-56">
        <DropdownItem onSelect={() => console.log('New')}>
          <span className="flex-1">New</span>
          <span className="text-xs text-black/60">⌘N</span>
        </DropdownItem>
        <DropdownItem onSelect={() => console.log('Open')}>
          <span className="flex-1">Open...</span>
          <span className="text-xs text-black/60">⌘O</span>
        </DropdownItem>
        <DropdownItem onSelect={() => console.log('Save')}>
          <span className="flex-1">Save</span>
          <span className="text-xs text-black/60">⌘S</span>
        </DropdownItem>
        <DropdownItem onSelect={() => console.log('Save As')}>
          <span className="flex-1">Save As...</span>
          <span className="text-xs text-black/60">⇧⌘S</span>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem onSelect={() => console.log('Print')}>
          <span className="flex-1">Print...</span>
          <span className="text-xs text-black/60">⌘P</span>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const Nested: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button>Multi-level Menu</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem onSelect={() => console.log('Home')}>Home</DropdownItem>
        <DropdownItem>
          <span className="flex-1">Products</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </DropdownItem>
        <DropdownItem>
          <span className="flex-1">Services</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem onSelect={() => console.log('About')}>About</DropdownItem>
        <DropdownItem onSelect={() => console.log('Contact')}>Contact</DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button>Options</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem onSelect={() => console.log('Enabled')}>
          Enabled Action
        </DropdownItem>
        <DropdownItem disabled>
          Disabled Action
        </DropdownItem>
        <DropdownItem onSelect={() => console.log('Another enabled')}>
          Another Enabled
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem disabled>
          Locked Feature
        </DropdownItem>
        <DropdownItem onSelect={() => console.log('Available')}>
          Available Feature
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const IconButtonTrigger: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <IconButton aria-label="More options">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </IconButton>
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownItem onSelect={() => console.log('View')}>View</DropdownItem>
        <DropdownItem onSelect={() => console.log('Edit')}>Edit</DropdownItem>
        <DropdownItem onSelect={() => console.log('Share')}>Share</DropdownItem>
        <DropdownSeparator />
        <DropdownItem onSelect={() => console.log('Delete')} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="flex gap-8">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="secondary">Align Start</Button>
        </DropdownTrigger>
        <DropdownContent align="start">
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="secondary">Align Center</Button>
        </DropdownTrigger>
        <DropdownContent align="center">
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="secondary">Align End</Button>
        </DropdownTrigger>
        <DropdownContent align="end">
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
};