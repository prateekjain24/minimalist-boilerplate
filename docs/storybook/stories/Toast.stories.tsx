import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToastProvider, useToast, Button } from '@repo/design-system';
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';

const meta = {
  title: 'Components/Feedback/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Toast notifications for temporary messages. Auto-dismisses after 5 seconds by default.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: 'Visual style of the toast',
    },
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: 'Position of the toast on screen',
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds before auto-dismiss',
      defaultValue: 5000,
    },
  },
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastDemo = ({ variant, position = 'bottom-right', showAction = false, showIcon = false }) => {
  const { toast } = useToast();

  const messages = {
    default: { title: 'Notification', description: 'This is a default toast message.' },
    success: { title: 'Success!', description: 'Your changes have been saved.' },
    error: { title: 'Error', description: 'Something went wrong. Please try again.' },
    warning: { title: 'Warning', description: 'Please review before continuing.' },
    info: { title: 'Info', description: 'New updates are available.' },
  };

  const icons = {
    success: <CheckCircle className="h-5 w-5" />,
    error: <XCircle className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    info: <Info className="h-5 w-5" />,
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Button
        onClick={() => {
          toast({
            variant,
            title: messages[variant || 'default'].title,
            description: messages[variant || 'default'].description,
            icon: showIcon ? icons[variant] : undefined,
            action: showAction ? {
              label: 'Try again',
              onClick: () => console.log('Try again clicked')
            } : undefined,
          });
        }}
      >
        Show {variant || 'default'} toast
      </Button>
    </div>
  );
};

export const ToastDefault: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="default" />
    </ToastProvider>
  ),
};

export const ToastSuccess: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="success" showIcon />
    </ToastProvider>
  ),
};

export const ToastError: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="error" showIcon />
    </ToastProvider>
  ),
};

export const ToastWarning: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="warning" showIcon />
    </ToastProvider>
  ),
};

export const ToastInfo: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="info" showIcon />
    </ToastProvider>
  ),
};

export const ToastWithAction: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="error" showIcon showAction />
    </ToastProvider>
  ),
};

export const ToastPositions: Story = {
  render: () => {
    const positions = [
      'top-left', 'top-center', 'top-right',
      'bottom-left', 'bottom-center', 'bottom-right'
    ] as const;

    return (
      <ToastProvider>
        <div className="h-screen p-8 bg-white">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {positions.map((position) => (
              <div key={position}>
                <ToastDemo variant="default" position={position} />
                <p className="text-center mt-2 text-sm text-black/60">{position}</p>
              </div>
            ))}
          </div>
        </div>
      </ToastProvider>
    );
  },
};

export const ToastMultiple: Story = {
  render: () => {
    const MultipleToastDemo = () => {
      const { toast } = useToast();

      return (
        <div className="h-screen flex items-center justify-center bg-white">
          <div className="space-y-4">
            <Button
              onClick={() => {
                toast({
                  title: 'First toast',
                  description: 'This is the first notification.',
                });
                setTimeout(() => {
                  toast({
                    variant: 'success',
                    title: 'Second toast',
                    description: 'This appears after the first.',
                    icon: <CheckCircle className="h-5 w-5" />,
                  });
                }, 1000);
                setTimeout(() => {
                  toast({
                    variant: 'warning',
                    title: 'Third toast',
                    description: 'Multiple toasts stack nicely.',
                    icon: <AlertTriangle className="h-5 w-5" />,
                  });
                }, 2000);
              }}
            >
              Show Multiple Toasts
            </Button>
          </div>
        </div>
      );
    };

    return (
      <ToastProvider>
        <MultipleToastDemo />
      </ToastProvider>
    );
  },
};

export const ToastCustomDuration: Story = {
  render: () => {
    const CustomDurationDemo = () => {
      const { toast } = useToast();

      return (
        <div className="h-screen flex items-center justify-center bg-white">
          <div className="space-y-4">
            <Button
              onClick={() => {
                toast({
                  title: 'Quick notification',
                  description: 'This will disappear in 2 seconds.',
                  duration: 2000,
                });
              }}
            >
              2 Second Toast
            </Button>
            <Button
              onClick={() => {
                toast({
                  title: 'Persistent notification',
                  description: 'This will stay for 10 seconds.',
                  duration: 10000,
                });
              }}
              variant="secondary"
            >
              10 Second Toast
            </Button>
          </div>
        </div>
      );
    };

    return (
      <ToastProvider>
        <CustomDurationDemo />
      </ToastProvider>
    );
  },
};

export const ToastRealWorld: Story = {
  render: () => {
    const RealWorldDemo = () => {
      const { toast } = useToast();

      const handleSave = () => {
        // Simulate API call
        toast({
          title: 'Saving...',
          description: 'Please wait while we save your changes.',
        });

        setTimeout(() => {
          toast({
            variant: 'success',
            title: 'Changes saved!',
            description: 'Your profile has been updated successfully.',
            icon: <CheckCircle className="h-5 w-5" />,
          });
        }, 2000);
      };

      const handleDelete = () => {
        toast({
          variant: 'error',
          title: 'Item deleted',
          description: 'The item has been removed from your list.',
          icon: <XCircle className="h-5 w-5" />,
          action: { label: 'Undo', onClick: () => console.log('Undo clicked') },
        });
      };

      return (
        <div className="h-screen flex items-center justify-center bg-white">
          <div className="space-x-4">
            <Button onClick={handleSave}>Save Changes</Button>
            <Button onClick={handleDelete} variant="secondary">Delete Item</Button>
          </div>
        </div>
      );
    };

    return (
      <ToastProvider>
        <RealWorldDemo />
      </ToastProvider>
    );
  },
};