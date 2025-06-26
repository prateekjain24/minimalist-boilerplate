import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Components/Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input field',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'number', 'search'],
      description: 'Input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    required: {
      control: 'boolean',
      description: 'Mark input as required',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'john@example.com',
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: 'Password must be at least 8 characters',
    defaultValue: '123',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

export const InputTypes: Story = {
  render: () => (
    <div className="space-y-8 w-96">
      <Input label="Text Input" type="text" placeholder="Enter text" />
      <Input label="Email Input" type="email" placeholder="email@example.com" />
      <Input label="Password Input" type="password" placeholder="Enter password" />
      <Input label="Number Input" type="number" placeholder="123" />
      <Input label="Tel Input" type="tel" placeholder="+1 (555) 123-4567" />
      <Input label="URL Input" type="url" placeholder="https://example.com" />
      <Input label="Search Input" type="search" placeholder="Search..." />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      
      // Simple validation
      if (newValue.length < 3) {
        setError('Must be at least 3 characters');
      } else {
        setError('');
      }
    };
    
    return (
      <div className="w-96">
        <Input
          label="Username"
          placeholder="Enter username"
          value={value}
          onChange={handleChange}
          error={error}
        />
        <p className="mt-4 text-sm text-black/60">
          Current value: {value || '(empty)'}
        </p>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
      }
    };
    
    return (
      <form onSubmit={handleSubmit} className="w-96 space-y-6">
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-4 uppercase tracking-wider hover:bg-white hover:text-black border border-black transition-colors"
        >
          Submit
        </button>
      </form>
    );
  },
};