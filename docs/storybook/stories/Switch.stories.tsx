import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Components/Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the switch',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the switch',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the switch',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Active switch',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled active switch',
    disabled: true,
    defaultChecked: true,
  },
};

export const NoLabel: Story = {
  args: {
    'aria-label': 'Toggle switch',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch (default)" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Unchecked" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled Checked" disabled defaultChecked />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [isOn, setIsOn] = useState(false);
    
    return (
      <div className="space-y-4 w-96">
        <Switch
          label="Toggle me"
          checked={isOn}
          onChange={(e) => setIsOn(e.target.checked)}
        />
        <p className="text-sm text-black/60">
          Switch is {isOn ? 'ON' : 'OFF'}
        </p>
      </div>
    );
  },
};

export const SettingsExample: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      twoFactor: false,
      analytics: true,
    });
    
    const handleChange = (key: keyof typeof settings) => {
      setSettings(prev => ({
        ...prev,
        [key]: !prev[key],
      }));
    };
    
    return (
      <div className="w-96 space-y-6">
        <h3 className="text-sm font-medium uppercase tracking-wider">
          Application Settings
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Push Notifications</p>
              <p className="text-xs text-black/60">Receive push notifications on your device</p>
            </div>
            <Switch
              checked={settings.notifications}
              onChange={() => handleChange('notifications')}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Dark Mode</p>
              <p className="text-xs text-black/60">Use dark theme throughout the app</p>
            </div>
            <Switch
              checked={settings.darkMode}
              onChange={() => handleChange('darkMode')}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Auto-save</p>
              <p className="text-xs text-black/60">Automatically save your work</p>
            </div>
            <Switch
              checked={settings.autoSave}
              onChange={() => handleChange('autoSave')}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Two-factor Authentication</p>
              <p className="text-xs text-black/60">Add an extra layer of security</p>
            </div>
            <Switch
              checked={settings.twoFactor}
              onChange={() => handleChange('twoFactor')}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Analytics</p>
              <p className="text-xs text-black/60">Help us improve by sharing usage data</p>
            </div>
            <Switch
              checked={settings.analytics}
              onChange={() => handleChange('analytics')}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const FeatureToggles: Story = {
  render: () => {
    const [features, setFeatures] = useState({
      beta: false,
      experimental: false,
      advanced: false,
    });
    
    return (
      <div className="w-96 space-y-6">
        <h3 className="text-sm font-medium uppercase tracking-wider">
          Feature Toggles
        </h3>
        <div className="space-y-4">
          <Switch
            label="Enable Beta Features"
            size="lg"
            checked={features.beta}
            onChange={(e) => setFeatures({ ...features, beta: e.target.checked })}
          />
          <Switch
            label="Experimental Features"
            size="lg"
            checked={features.experimental}
            onChange={(e) => setFeatures({ ...features, experimental: e.target.checked })}
            disabled={!features.beta}
          />
          <Switch
            label="Advanced Options"
            size="lg"
            checked={features.advanced}
            onChange={(e) => setFeatures({ ...features, advanced: e.target.checked })}
            disabled={!features.experimental}
          />
        </div>
        {features.beta && (
          <div className="p-3 border border-black bg-black/5">
            <p className="text-sm">
              ⚠️ Beta features may be unstable and subject to change.
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const NotificationPreferences: Story = {
  render: () => {
    const [notifications, setNotifications] = useState({
      email: {
        marketing: true,
        updates: true,
        security: true,
      },
      push: {
        messages: true,
        mentions: false,
        reminders: true,
      },
    });
    
    const updateNotification = (
      type: 'email' | 'push',
      key: string,
      value: boolean
    ) => {
      setNotifications(prev => ({
        ...prev,
        [type]: {
          ...prev[type],
          [key]: value,
        },
      }));
    };
    
    return (
      <div className="w-96 space-y-6">
        <h3 className="text-sm font-medium uppercase tracking-wider">
          Notification Preferences
        </h3>
        
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider mb-3 text-black/60">
            Email Notifications
          </h4>
          <div className="space-y-3">
            <Switch
              label="Marketing emails"
              size="sm"
              checked={notifications.email.marketing}
              onChange={(e) => updateNotification('email', 'marketing', e.target.checked)}
            />
            <Switch
              label="Product updates"
              size="sm"
              checked={notifications.email.updates}
              onChange={(e) => updateNotification('email', 'updates', e.target.checked)}
            />
            <Switch
              label="Security alerts"
              size="sm"
              checked={notifications.email.security}
              onChange={(e) => updateNotification('email', 'security', e.target.checked)}
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider mb-3 text-black/60">
            Push Notifications
          </h4>
          <div className="space-y-3">
            <Switch
              label="Direct messages"
              size="sm"
              checked={notifications.push.messages}
              onChange={(e) => updateNotification('push', 'messages', e.target.checked)}
            />
            <Switch
              label="Mentions"
              size="sm"
              checked={notifications.push.mentions}
              onChange={(e) => updateNotification('push', 'mentions', e.target.checked)}
            />
            <Switch
              label="Reminders"
              size="sm"
              checked={notifications.push.reminders}
              onChange={(e) => updateNotification('push', 'reminders', e.target.checked)}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      agreedToTerms: false,
      subscribeNewsletter: false,
      shareData: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!formData.agreedToTerms) {
        newErrors.terms = 'You must agree to the terms and conditions';
      }
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('Account created successfully!');
      }
    };
    
    return (
      <form onSubmit={handleSubmit} className="w-96 space-y-6">
        <div className="space-y-4">
          <div>
            <Switch
              label="I agree to the terms and conditions"
              checked={formData.agreedToTerms}
              onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
            />
            {errors.terms && (
              <p className="mt-2 text-xs text-red-500">{errors.terms}</p>
            )}
          </div>
          
          <Switch
            label="Subscribe to newsletter"
            checked={formData.subscribeNewsletter}
            onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
          />
          
          <Switch
            label="Share usage data to improve our services"
            checked={formData.shareData}
            onChange={(e) => setFormData({ ...formData, shareData: e.target.checked })}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-4 uppercase tracking-wider hover:bg-white hover:text-black border border-black transition-colors"
        >
          Create Account
        </button>
      </form>
    );
  },
};