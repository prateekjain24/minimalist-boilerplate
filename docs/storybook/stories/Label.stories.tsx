import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '@repo/design-system';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Label size variant',
    },
    state: {
      control: 'select',
      options: ['default', 'disabled'],
      description: 'Label state',
    },
    required: {
      control: 'boolean',
      description: 'Show required asterisk',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    htmlFor: {
      control: 'text',
      description: 'Associates label with form control',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email Address',
  },
};

export const Required: Story = {
  args: {
    children: 'Email Address',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Email Address',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    children: 'Small Label',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Label',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Label',
    size: 'lg',
  },
};

export const WithHtmlFor: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email-input">Email Address</Label>
      <input
        id="email-input"
        type="email"
        className="px-0 py-2 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2"
        placeholder="Enter your email"
      />
    </div>
  ),
};

export const RequiredWithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="password-input" required>
        Password
      </Label>
      <input
        id="password-input"
        type="password"
        className="px-0 py-2 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2"
        placeholder="Enter your password"
      />
    </div>
  ),
};

export const DisabledWithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="disabled-input" disabled>
        Disabled Field
      </Label>
      <input
        id="disabled-input"
        type="text"
        disabled
        className="px-0 py-2 text-base bg-transparent border-0 border-b border-black/50 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="This field is disabled"
      />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label size="sm">Small Label (12px)</Label>
        <p className="text-xs text-black/60">Default size - uppercase, wide tracking</p>
      </div>
      <div className="space-y-2">
        <Label size="md">Medium Label (14px)</Label>
        <p className="text-xs text-black/60">Larger text while maintaining uppercase style</p>
      </div>
      <div className="space-y-2">
        <Label size="lg">Large Label (16px)</Label>
        <p className="text-xs text-black/60">Largest size for prominent labels</p>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Default State</Label>
        <p className="text-xs text-black/60">Full black color, interactive</p>
      </div>
      <div className="space-y-2">
        <Label disabled>Disabled State</Label>
        <p className="text-xs text-black/60">50% opacity, cursor not allowed</p>
      </div>
      <div className="space-y-2">
        <Label required>Required Field</Label>
        <p className="text-xs text-black/60">Shows asterisk indicator</p>
      </div>
      <div className="space-y-2">
        <Label required disabled>Required & Disabled</Label>
        <p className="text-xs text-black/60">Combined states</p>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="firstname" required>
          First Name
        </Label>
        <input
          id="firstname"
          type="text"
          className="w-full px-0 py-2 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2"
          placeholder="John"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="lastname" required>
          Last Name
        </Label>
        <input
          id="lastname"
          type="text"
          className="w-full px-0 py-2 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2"
          placeholder="Doe"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" required>
          Email Address
        </Label>
        <input
          id="email"
          type="email"
          className="w-full px-0 py-2 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2"
          placeholder="john.doe@example.com"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">
          Phone Number
        </Label>
        <input
          id="phone"
          type="tel"
          className="w-full px-0 py-2 text-base bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2"
          placeholder="+1 (555) 123-4567"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company" disabled>
          Company (Coming Soon)
        </Label>
        <input
          id="company"
          type="text"
          disabled
          className="w-full px-0 py-2 text-base bg-transparent border-0 border-b border-black/50 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Feature not yet available"
        />
      </div>
    </form>
  ),
};

export const CheckboxAndRadioLabels: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-sm font-medium">Checkbox Options:</p>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" className="w-4 h-4 border-2 border-black" />
          <Label htmlFor="terms" className="cursor-pointer">
            I agree to the terms and conditions
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="newsletter" className="w-4 h-4 border-2 border-black" />
          <Label htmlFor="newsletter" className="cursor-pointer">
            Subscribe to newsletter
          </Label>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-sm font-medium">Radio Options:</p>
        <div className="flex items-center space-x-2">
          <input type="radio" id="option1" name="options" className="w-4 h-4 border-2 border-black" />
          <Label htmlFor="option1" className="cursor-pointer">
            Option One
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="option2" name="options" className="w-4 h-4 border-2 border-black" />
          <Label htmlFor="option2" className="cursor-pointer">
            Option Two
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="option3" name="options" disabled className="w-4 h-4 border-2 border-black/50" />
          <Label htmlFor="option3" disabled className="cursor-not-allowed">
            Option Three (Disabled)
          </Label>
        </div>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <Label className="text-red-600">
        Error Label Style
      </Label>
      <Label className="text-green-600">
        Success Label Style
      </Label>
      <Label className="text-blue-600">
        Info Label Style
      </Label>
      <Label className="bg-black text-white px-2 py-1">
        Inverted Label Style
      </Label>
    </div>
  ),
};