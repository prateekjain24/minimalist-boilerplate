import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton, Card, CardContent, CardHeader, Button } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'text', 'circular', 'rectangular'],
      description: 'Shape variant of the skeleton',
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton (CSS value)',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton (CSS value)',
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
      description: 'Animation style',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '100%',
    height: '20px',
    variant: 'default',
    animation: 'pulse',
  },
};

export const TextLines: Story = {
  render: () => (
    <div className="space-y-2 max-w-md">
      <Skeleton variant="text" width="100%" height="1rem" />
      <Skeleton variant="text" width="100%" height="1rem" />
      <Skeleton variant="text" width="80%" height="1rem" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium mb-2">Default</p>
        <Skeleton variant="default" width="200px" height="40px" />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Text</p>
        <div className="space-y-2">
          <Skeleton variant="text" width="300px" height="1rem" />
          <Skeleton variant="text" width="250px" height="1rem" />
          <Skeleton variant="text" width="200px" height="1rem" />
        </div>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Circular</p>
        <div className="flex gap-4">
          <Skeleton variant="circular" width="40px" height="40px" />
          <Skeleton variant="circular" width="60px" height="60px" />
          <Skeleton variant="circular" width="80px" height="80px" />
        </div>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Rectangular</p>
        <Skeleton variant="rectangular" width="200px" height="120px" />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Skeleton variant="circular" width="48px" height="48px" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="120px" height="1.25rem" />
            <Skeleton variant="text" width="180px" height="0.875rem" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <Skeleton variant="text" width="100%" height="1rem" />
        <Skeleton variant="text" width="100%" height="1rem" />
        <Skeleton variant="text" width="70%" height="1rem" />
        
        <div className="pt-4">
          <Skeleton variant="rectangular" width="100%" height="120px" />
        </div>
        
        <div className="flex gap-2 pt-4">
          <Skeleton width="80px" height="36px" />
          <Skeleton width="80px" height="36px" />
        </div>
      </CardContent>
    </Card>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-4 border border-black/10">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="140px" height="1rem" />
            <Skeleton variant="text" width="200px" height="0.75rem" />
          </div>
          <Skeleton width="60px" height="24px" />
        </div>
      ))}
    </div>
  ),
};

export const FormSkeleton: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="space-y-2">
        <Skeleton variant="text" width="80px" height="0.875rem" />
        <Skeleton width="100%" height="40px" />
      </div>
      
      <div className="space-y-2">
        <Skeleton variant="text" width="120px" height="0.875rem" />
        <Skeleton width="100%" height="40px" />
      </div>
      
      <div className="space-y-2">
        <Skeleton variant="text" width="100px" height="0.875rem" />
        <Skeleton width="100%" height="80px" />
      </div>
      
      <div className="flex gap-4">
        <Skeleton width="100px" height="40px" />
        <Skeleton width="100px" height="40px" />
      </div>
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div className="border border-black">
      <div className="border-b border-black p-4">
        <div className="grid grid-cols-4 gap-4">
          <Skeleton variant="text" width="80px" height="1rem" />
          <Skeleton variant="text" width="120px" height="1rem" />
          <Skeleton variant="text" width="100px" height="1rem" />
          <Skeleton variant="text" width="60px" height="1rem" />
        </div>
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="border-b border-black/10 p-4 last:border-0">
          <div className="grid grid-cols-4 gap-4">
            <Skeleton variant="text" width="100px" height="0.875rem" />
            <Skeleton variant="text" width="150px" height="0.875rem" />
            <Skeleton variant="text" width="80px" height="0.875rem" />
            <Skeleton variant="text" width="40px" height="0.875rem" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const AnimationTypes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium mb-2">Pulse Animation</p>
        <Skeleton animation="pulse" width="300px" height="40px" />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Wave Animation</p>
        <Skeleton animation="wave" width="300px" height="40px" />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">No Animation</p>
        <Skeleton animation="none" width="300px" height="40px" />
      </div>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => {
    const SkeletonDemo = () => {
      const [isLoading, setIsLoading] = useState(true);

      return (
        <div className="space-y-4">
          <Button 
            onClick={() => setIsLoading(!isLoading)}
            variant="secondary"
          >
            Toggle Loading
          </Button>
          
          <Card className="w-80">
            <CardHeader>
              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton variant="text" width="150px" height="1.5rem" />
                  <Skeleton variant="text" width="200px" height="1rem" />
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold">Card Title</h3>
                  <p className="text-sm text-black/60">Card description goes here</p>
                </>
              )}
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-3">
                  <Skeleton variant="text" width="100%" height="1rem" />
                  <Skeleton variant="text" width="100%" height="1rem" />
                  <Skeleton variant="text" width="80%" height="1rem" />
                  <Skeleton variant="rectangular" width="100%" height="120px" className="mt-4" />
                </div>
              ) : (
                <>
                  <p className="mb-4">
                    This is the actual content that appears when loading is complete. 
                    It replaces the skeleton placeholders.
                  </p>
                  <div className="bg-black/5 h-32 flex items-center justify-center">
                    <span className="text-black/40">Content Area</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      );
    };

    return <SkeletonDemo />;
  },
};

export const ProfileSkeleton: Story = {
  render: () => (
    <div className="max-w-sm space-y-4">
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" width="80px" height="80px" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="120px" height="1.25rem" />
          <Skeleton variant="text" width="180px" height="0.875rem" />
          <div className="flex gap-2 mt-3">
            <Skeleton width="60px" height="28px" />
            <Skeleton width="60px" height="28px" />
          </div>
        </div>
      </div>
      
      <div className="space-y-3 pt-4">
        <div className="flex justify-between">
          <Skeleton variant="text" width="80px" height="0.875rem" />
          <Skeleton variant="text" width="40px" height="0.875rem" />
        </div>
        <div className="flex justify-between">
          <Skeleton variant="text" width="100px" height="0.875rem" />
          <Skeleton variant="text" width="60px" height="0.875rem" />
        </div>
        <div className="flex justify-between">
          <Skeleton variant="text" width="90px" height="0.875rem" />
          <Skeleton variant="text" width="50px" height="0.875rem" />
        </div>
      </div>
    </div>
  ),
};