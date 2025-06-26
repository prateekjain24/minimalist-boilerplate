import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardContent, Badge } from '@repo/design-system';
import { User, Settings, CreditCard, Bell, Shield, Palette } from 'lucide-react';

const meta = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default active tab',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the tabs',
    },
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of tab triggers',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-full max-w-2xl">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Account Information</h3>
            <p className="text-sm text-black/60">
              Make changes to your account here. Click save when you're done.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password" className="mt-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Change Password</h3>
            <p className="text-sm text-black/60">
              Update your password to keep your account secure.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Preferences</h3>
            <p className="text-sm text-black/60">
              Customize your experience with these settings.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="profile" className="w-full max-w-2xl">
      <TabsList>
        <TabsTrigger value="profile" className="gap-2">
          <User className="h-4 w-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="billing" className="gap-2">
          <CreditCard className="h-4 w-4" />
          Billing
        </TabsTrigger>
        <TabsTrigger value="notifications" className="gap-2">
          <Bell className="h-4 w-4" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="security" className="gap-2">
          <Shield className="h-4 w-4" />
          Security
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="mt-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Profile Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Display Name</label>
                <input type="text" className="w-full mt-1 px-3 py-2 border border-black" />
              </div>
              <div>
                <label className="text-sm font-medium">Bio</label>
                <textarea className="w-full mt-1 px-3 py-2 border border-black" rows={3} />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="billing" className="mt-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Billing Information</h3>
            <p className="text-sm text-black/60">Manage your subscription and payment methods.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications" className="mt-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Notification Preferences</h3>
            <p className="text-sm text-black/60">Choose what notifications you want to receive.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="security" className="mt-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Security Settings</h3>
            <p className="text-sm text-black/60">Manage your security preferences and two-factor authentication.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Default Variant</h3>
        <Tabs defaultValue="tab1" variant="default">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <p className="text-sm">Content for tab 1</p>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <p className="text-sm">Content for tab 2</p>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <p className="text-sm">Content for tab 3</p>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4">Pills Variant</h3>
        <Tabs defaultValue="tab1" variant="pills">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <p className="text-sm">Content for tab 1</p>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <p className="text-sm">Content for tab 2</p>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <p className="text-sm">Content for tab 3</p>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4">Underline Variant</h3>
        <Tabs defaultValue="tab1" variant="underline">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <p className="text-sm">Content for tab 1</p>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <p className="text-sm">Content for tab 2</p>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <p className="text-sm">Content for tab 3</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Small</h3>
        <Tabs defaultValue="tab1" size="sm">
          <TabsList>
            <TabsTrigger value="tab1">Small Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Small Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Small Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4">Medium (Default)</h3>
        <Tabs defaultValue="tab1" size="md">
          <TabsList>
            <TabsTrigger value="tab1">Medium Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Medium Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Medium Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4">Large</h3>
        <Tabs defaultValue="tab1" size="lg">
          <TabsList>
            <TabsTrigger value="tab1">Large Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Large Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Large Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="general" orientation="vertical" className="flex gap-8 max-w-4xl">
      <TabsList className="flex-col h-fit w-48">
        <TabsTrigger value="general" className="w-full justify-start">General</TabsTrigger>
        <TabsTrigger value="appearance" className="w-full justify-start">Appearance</TabsTrigger>
        <TabsTrigger value="notifications" className="w-full justify-start">Notifications</TabsTrigger>
        <TabsTrigger value="privacy" className="w-full justify-start">Privacy</TabsTrigger>
        <TabsTrigger value="advanced" className="w-full justify-start">Advanced</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="general">
          <h3 className="text-lg font-semibold mb-4">General Settings</h3>
          <p className="text-sm text-black/60">Configure general application settings.</p>
        </TabsContent>
        <TabsContent value="appearance">
          <h3 className="text-lg font-semibold mb-4">Appearance</h3>
          <p className="text-sm text-black/60">Customize how the application looks.</p>
        </TabsContent>
        <TabsContent value="notifications">
          <h3 className="text-lg font-semibold mb-4">Notifications</h3>
          <p className="text-sm text-black/60">Manage your notification preferences.</p>
        </TabsContent>
        <TabsContent value="privacy">
          <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
          <p className="text-sm text-black/60">Control your privacy and data sharing.</p>
        </TabsContent>
        <TabsContent value="advanced">
          <h3 className="text-lg font-semibold mb-4">Advanced Settings</h3>
          <p className="text-sm text-black/60">Advanced configuration options.</p>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Tabs defaultValue="inbox">
      <TabsList>
        <TabsTrigger value="inbox" className="gap-2">
          Inbox
          <Badge variant="default" size="sm">24</Badge>
        </TabsTrigger>
        <TabsTrigger value="sent">Sent</TabsTrigger>
        <TabsTrigger value="drafts" className="gap-2">
          Drafts
          <Badge variant="secondary" size="sm">3</Badge>
        </TabsTrigger>
        <TabsTrigger value="spam" className="gap-2">
          Spam
          <Badge variant="destructive" size="sm">99+</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="inbox" className="mt-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Inbox Messages</h3>
            <p className="text-sm text-black/60">You have 24 unread messages.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="sent" className="mt-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Sent Messages</h3>
            <p className="text-sm text-black/60">Your sent messages appear here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="drafts" className="mt-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Draft Messages</h3>
            <p className="text-sm text-black/60">You have 3 draft messages.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="spam" className="mt-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Spam Messages</h3>
            <p className="text-sm text-black/60">99+ messages marked as spam.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const DisabledTabs: Story = {
  render: () => (
    <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Active Tab</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled Tab
        </TabsTrigger>
        <TabsTrigger value="another">Another Tab</TabsTrigger>
        <TabsTrigger value="also-disabled" disabled>
          Also Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="mt-4">
        <p className="text-sm">This tab is active and clickable.</p>
      </TabsContent>
      <TabsContent value="another" className="mt-4">
        <p className="text-sm">This tab is also active.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const CodeEditor: Story = {
  render: () => (
    <div className="border border-black">
      <Tabs defaultValue="html" variant="underline" className="w-full">
        <div className="border-b border-black">
          <TabsList className="h-auto p-0">
            <TabsTrigger value="html" className="rounded-none border-r border-black">
              index.html
            </TabsTrigger>
            <TabsTrigger value="css" className="rounded-none border-r border-black">
              styles.css
            </TabsTrigger>
            <TabsTrigger value="js" className="rounded-none">
              script.js
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="html" className="m-0">
          <pre className="p-4 font-mono text-sm bg-black/5">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`}
          </pre>
        </TabsContent>
        <TabsContent value="css" className="m-0">
          <pre className="p-4 font-mono text-sm bg-black/5">
{`body {
  font-family: system-ui;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #000;
}`}
          </pre>
        </TabsContent>
        <TabsContent value="js" className="m-0">
          <pre className="p-4 font-mono text-sm bg-black/5">
{`console.log('Hello World');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
});`}
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const Analytics: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="exports">Exports</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="mt-6">
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-black/60">Total Revenue</p>
              <p className="text-2xl font-bold mt-2">$45,231</p>
              <p className="text-xs text-black/60 mt-1">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-black/60">Active Users</p>
              <p className="text-2xl font-bold mt-2">2,543</p>
              <p className="text-xs text-black/60 mt-1">+5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-black/60">Sales</p>
              <p className="text-2xl font-bold mt-2">1,234</p>
              <p className="text-xs text-black/60 mt-1">+18% from last month</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="analytics" className="mt-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Analytics Dashboard</h3>
            <p className="text-sm text-black/60">Detailed analytics and metrics will appear here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="reports" className="mt-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Reports</h3>
            <p className="text-sm text-black/60">Generate and view reports for different time periods.</p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="exports" className="mt-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Data Exports</h3>
            <p className="text-sm text-black/60">Export your data in various formats.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};