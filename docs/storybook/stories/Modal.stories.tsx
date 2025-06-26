import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Overlay & Interactive/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A minimalist modal dialog component with portal rendering and keyboard support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls the visibility of the modal',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the modal dialog',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when modal is closed',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for interactive examples
const ModalDemo = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open {size.toUpperCase()} Modal
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p className="text-black">
              This is a {size} modal dialog. Click outside or press ESC to close.
            </p>
            <p className="text-black/60 mt-4">
              The modal implements a strict black and white aesthetic with sharp corners,
              following the minimalist design principles.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <ModalDemo size="sm" />
      <ModalDemo size="md" />
      <ModalDemo size="lg" />
      <ModalDemo size="xl" />
    </div>
  ),
};

export const WithLongContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Modal with Long Content
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <ModalContent>
            <ModalHeader>Terms of Service</ModalHeader>
            <ModalBody>
              <div className="space-y-4 text-black">
                <h3 className="text-lg font-semibold">1. Introduction</h3>
                <p className="text-black/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris.
                </p>
                <h3 className="text-lg font-semibold">2. Acceptance of Terms</h3>
                <p className="text-black/80">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <h3 className="text-lg font-semibold">3. User Responsibilities</h3>
                <p className="text-black/80">
                  Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                </p>
                <h3 className="text-lg font-semibold">4. Privacy Policy</h3>
                <p className="text-black/80">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <h3 className="text-lg font-semibold">5. Disclaimers</h3>
                <p className="text-black/80">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                  adipisci velit, sed quia non numquam eius modi tempora incidunt.
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Decline
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Accept Terms
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Modal (No Close Button)
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalContent>
            <ModalHeader showCloseButton={false}>Action Required</ModalHeader>
            <ModalBody>
              <p className="text-black">
                This modal requires user action. You must click one of the buttons below.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Option A
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Option B
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const CustomContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Custom Modal
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalContent>
            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 border-4 border-black" />
              <h2 className="text-2xl font-bold mb-2">Success!</h2>
              <p className="text-black/60 mb-6">
                Your action has been completed successfully.
              </p>
              <Button onClick={() => setIsOpen(false)} className="w-full">
                Done
              </Button>
            </div>
          </ModalContent>
        </Modal>
      </>
    );
  },
};