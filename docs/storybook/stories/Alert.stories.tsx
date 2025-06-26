import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertDescription, AlertTitle, AlertIcon, Button } from '@repo/design-system';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';

const meta = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'The visual style of the alert',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const iconMap = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle,
};

export const AlertDefault: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert message with neutral styling.
        </AlertDescription>
      </>
    ),
  },
};

export const AlertInfo: Story = {
  args: {
    variant: 'info',
    children: (
      <>
        <AlertIcon />
        <div>
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            Your session will expire in 5 minutes. Please save your work.
          </AlertDescription>
        </div>
      </>
    ),
  },
};

export const AlertSuccess: Story = {
  args: {
    variant: 'success',
    children: (
      <>
        <AlertIcon />
        <div>
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </div>
      </>
    ),
  },
};

export const AlertWarning: Story = {
  args: {
    variant: 'warning',
    children: (
      <>
        <AlertIcon />
        <div>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            This action cannot be undone. Please confirm before proceeding.
          </AlertDescription>
        </div>
      </>
    ),
  },
};

export const AlertError: Story = {
  args: {
    variant: 'error',
    children: (
      <>
        <AlertIcon />
        <div>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to connect to the server. Please check your internet connection and try again.
          </AlertDescription>
        </div>
      </>
    ),
  },
};

export const AlertWithAction: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertIcon />
      <div>
        <AlertTitle>Storage Almost Full</AlertTitle>
        <AlertDescription>
          You have used 90% of your storage quota. Consider upgrading your plan or deleting old files.
        </AlertDescription>
        <div className="mt-4 flex gap-2">
          <Button size="sm" variant="primary">Upgrade Plan</Button>
          <Button size="sm" variant="secondary">Manage Files</Button>
        </div>
      </div>
    </Alert>
  ),
};

export const AlertDismissible: Story = {
  args: {
    variant: 'info',
    dismissible: true,
    children: (
      <>
        <AlertIcon />
        <div>
          <AlertTitle>New Feature Available</AlertTitle>
          <AlertDescription>
            Try our new dark mode feature in the settings menu.
          </AlertDescription>
        </div>
      </>
    ),
  },
};

export const AlertAllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default">
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>A neutral alert for general information.</AlertDescription>
      </Alert>
      
      <Alert variant="info">
        <AlertIcon />
        <div>
          <AlertTitle>Info Alert</AlertTitle>
          <AlertDescription>Provides helpful information to the user.</AlertDescription>
        </div>
      </Alert>
      
      <Alert variant="success">
        <AlertIcon />
        <div>
          <AlertTitle>Success Alert</AlertTitle>
          <AlertDescription>Confirms successful completion of an action.</AlertDescription>
        </div>
      </Alert>
      
      <Alert variant="warning">
        <AlertIcon />
        <div>
          <AlertTitle>Warning Alert</AlertTitle>
          <AlertDescription>Warns about potential issues or consequences.</AlertDescription>
        </div>
      </Alert>
      
      <Alert variant="error">
        <AlertIcon />
        <div>
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>Indicates an error or failure condition.</AlertDescription>
        </div>
      </Alert>
    </div>
  ),
};

export const AlertCustomContent: Story = {
  render: () => (
    <Alert variant="default">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <AlertTitle>System Maintenance</AlertTitle>
          <AlertDescription>
            Our systems will undergo maintenance on Sunday, March 10th from 2:00 AM to 6:00 AM EST.
          </AlertDescription>
          <ul className="mt-2 list-disc list-inside text-sm">
            <li>API services will be unavailable</li>
            <li>Dashboard access will be limited</li>
            <li>Automated reports will be delayed</li>
          </ul>
        </div>
        <Button size="sm" variant="minimal">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </Alert>
  ),
};