import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner, Button, Card, CardContent } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the spinner',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'subtle'],
      description: 'Visual variant of the spinner',
    },
    label: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Spinner size="xs" />
        <p className="mt-2 text-xs">Extra Small</p>
      </div>
      <div className="text-center">
        <Spinner size="sm" />
        <p className="mt-2 text-xs">Small</p>
      </div>
      <div className="text-center">
        <Spinner size="md" />
        <p className="mt-2 text-xs">Medium</p>
      </div>
      <div className="text-center">
        <Spinner size="lg" />
        <p className="mt-2 text-xs">Large</p>
      </div>
      <div className="text-center">
        <Spinner size="xl" />
        <p className="mt-2 text-xs">Extra Large</p>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Spinner variant="default" size="lg" />
        <p className="mt-2 text-sm">Default</p>
      </div>
      <div className="text-center">
        <Spinner variant="primary" size="lg" />
        <p className="mt-2 text-sm">Primary</p>
      </div>
      <div className="text-center p-4 bg-black">
        <Spinner variant="subtle" size="lg" />
        <p className="mt-2 text-sm text-white">Subtle</p>
      </div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Spinner size="sm" />
        <span className="text-sm">Loading...</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-sm text-black/60">Processing your request</span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Saving</span>
        <Spinner size="xs" />
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => {
    const ButtonWithSpinner = () => {
      const [isLoading, setIsLoading] = useState(false);

      const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 3000);
      };

      return (
        <div className="space-y-4">
          <Button onClick={handleClick} disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner size="xs" variant="subtle" />
                <span className="ml-2">Processing...</span>
              </>
            ) : (
              'Submit'
            )}
          </Button>
          
          <Button variant="secondary" disabled>
            <Spinner size="xs" />
            <span className="ml-2">Loading...</span>
          </Button>
        </div>
      );
    };

    return <ButtonWithSpinner />;
  },
};

export const InCard: Story = {
  render: () => (
    <div className="space-y-4">
      <Card className="w-80">
        <CardContent className="flex items-center justify-center h-32">
          <div className="text-center">
            <Spinner size="lg" />
            <p className="mt-4 text-sm text-black/60">Loading content...</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="w-80">
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Fetching data</span>
            <Spinner size="sm" />
          </div>
          <div className="h-2 bg-black/10 rounded overflow-hidden">
            <div className="h-full bg-black w-1/3 animate-pulse" />
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const FullPageLoader: Story = {
  render: () => (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center">
        <Spinner size="xl" />
        <p className="mt-4 text-lg font-medium">Loading Application</p>
        <p className="mt-2 text-sm text-black/60">Please wait while we set things up...</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoadingStates: Story = {
  render: () => {
    const [loadingStates, setLoadingStates] = useState({
      users: true,
      posts: true,
      comments: false,
    });

    return (
      <div className="space-y-4 w-80">
        <h3 className="font-semibold">Dashboard Loading States</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-black">
            <span className="text-sm">Users</span>
            {loadingStates.users ? (
              <Spinner size="xs" />
            ) : (
              <span className="text-sm text-black/60">Loaded</span>
            )}
          </div>
          
          <div className="flex items-center justify-between p-3 border border-black">
            <span className="text-sm">Posts</span>
            {loadingStates.posts ? (
              <Spinner size="xs" />
            ) : (
              <span className="text-sm text-black/60">Loaded</span>
            )}
          </div>
          
          <div className="flex items-center justify-between p-3 border border-black">
            <span className="text-sm">Comments</span>
            {loadingStates.comments ? (
              <Spinner size="xs" />
            ) : (
              <span className="text-sm text-black/60">Loaded</span>
            )}
          </div>
        </div>
      </div>
    );
  },
};

export const AsyncContent: Story = {
  render: () => {
    const AsyncLoader = () => {
      const [content, setContent] = useState<string | null>(null);
      const [isLoading, setIsLoading] = useState(false);

      const loadContent = () => {
        setIsLoading(true);
        setContent(null);
        
        setTimeout(() => {
          setContent('Content loaded successfully!');
          setIsLoading(false);
        }, 2000);
      };

      return (
        <div className="space-y-4 text-center">
          <Button onClick={loadContent}>Load Content</Button>
          
          <div className="h-32 flex items-center justify-center border border-black/20">
            {isLoading ? (
              <div className="space-y-2">
                <Spinner size="md" />
                <p className="text-sm text-black/60">Fetching content...</p>
              </div>
            ) : content ? (
              <p className="text-lg">{content}</p>
            ) : (
              <p className="text-black/40">Click button to load content</p>
            )}
          </div>
        </div>
      );
    };

    return <AsyncLoader />;
  },
};

export const CustomAnimations: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-block animate-spin">
          <Spinner size="lg" />
        </div>
        <p className="mt-2 text-sm">Default Spin</p>
      </div>
      
      <div className="text-center">
        <div className="inline-block animate-pulse">
          <Spinner size="lg" />
        </div>
        <p className="mt-2 text-sm">Pulse Animation</p>
      </div>
      
      <div className="text-center">
        <div className="inline-block animate-bounce">
          <Spinner size="lg" />
        </div>
        <p className="mt-2 text-sm">Bounce Animation</p>
      </div>
    </div>
  ),
};