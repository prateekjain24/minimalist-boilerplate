import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from '@repo/design-system';
import { useState, useEffect } from 'react';

const meta = {
  title: 'Components/Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value (0-100)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Height of the progress bar',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Visual variant based on progress state',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Show indeterminate loading state',
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    size: 'md',
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium mb-2">Small</p>
        <Progress value={40} size="sm" />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Medium</p>
        <Progress value={40} size="md" />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Large</p>
        <Progress value={40} size="lg" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium mb-2">Default</p>
        <Progress value={60} variant="default" showLabel />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Success (100%)</p>
        <Progress value={100} variant="success" showLabel />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Warning (80%)</p>
        <Progress value={80} variant="warning" showLabel />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Error (Failed)</p>
        <Progress value={30} variant="error" showLabel />
      </div>
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    size: 'md',
  },
};

export const Animated: Story = {
  render: () => {
    const AnimatedProgress = () => {
      const [progress, setProgress] = useState(0);

      useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(timer);
              return 100;
            }
            return prev + 10;
          });
        }, 500);

        return () => clearInterval(timer);
      }, []);

      return (
        <div className="space-y-2">
          <Progress value={progress} showLabel />
          <p className="text-sm text-black/60">Loading... {progress}%</p>
        </div>
      );
    };

    return <AnimatedProgress />;
  },
};

export const FileUpload: Story = {
  render: () => {
    const FileUploadProgress = () => {
      const [uploads, setUploads] = useState([
        { name: 'document.pdf', progress: 100, status: 'complete' },
        { name: 'image.jpg', progress: 65, status: 'uploading' },
        { name: 'video.mp4', progress: 30, status: 'uploading' },
        { name: 'archive.zip', progress: 0, status: 'queued' },
      ]);

      useEffect(() => {
        const timer = setInterval(() => {
          setUploads((prev) =>
            prev.map((file) => {
              if (file.progress >= 100) return file;
              return {
                ...file,
                progress: Math.min(file.progress + Math.random() * 20, 100),
                status: file.progress >= 100 ? 'complete' : 'uploading',
              };
            })
          );
        }, 1000);

        return () => clearInterval(timer);
      }, []);

      return (
        <div className="space-y-4 max-w-md">
          <h3 className="font-semibold">Uploading Files</h3>
          {uploads.map((file, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{file.name}</span>
                <span className="text-black/60">
                  {file.status === 'complete' ? 'Complete' : 
                   file.status === 'queued' ? 'Queued' : 
                   `${Math.round(file.progress)}%`}
                </span>
              </div>
              <Progress 
                value={file.progress} 
                variant={file.status === 'complete' ? 'success' : 'default'}
                size="sm"
              />
            </div>
          ))}
        </div>
      );
    };

    return <FileUploadProgress />;
  },
};

export const SteppedProgress: Story = {
  render: () => {
    const steps = [
      { label: 'Account Details', value: 100 },
      { label: 'Personal Information', value: 100 },
      { label: 'Preferences', value: 50 },
      { label: 'Review', value: 0 },
    ];

    const totalProgress = steps.reduce((acc, step) => acc + step.value, 0) / steps.length;

    return (
      <div className="space-y-6 max-w-md">
        <div>
          <h3 className="font-semibold mb-2">Profile Completion</h3>
          <Progress value={totalProgress} showLabel size="lg" />
        </div>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{step.label}</span>
                <span className="text-black/60">{step.value}%</span>
              </div>
              <Progress value={step.value} size="sm" variant={step.value === 100 ? 'success' : 'default'} />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const CustomLabels: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Storage Used</span>
          <span>8.2 GB / 10 GB</span>
        </div>
        <Progress value={82} variant="warning" />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Daily Goal</span>
          <span>7/10 tasks completed</span>
        </div>
        <Progress value={70} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>API Rate Limit</span>
          <span>950/1000 requests</span>
        </div>
        <Progress value={95} variant="error" />
      </div>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="space-y-2">
        <p className="text-sm font-medium">Determinate Loading</p>
        <Progress value={45} />
        <p className="text-xs text-black/60">45% complete</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Indeterminate Loading</p>
        <Progress indeterminate />
        <p className="text-xs text-black/60">Processing...</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Completed</p>
        <Progress value={100} variant="success" />
        <p className="text-xs text-black/60">Task completed successfully</p>
      </div>
    </div>
  ),
};