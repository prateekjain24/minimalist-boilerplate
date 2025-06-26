import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state (partially checked)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
    },
    required: {
      control: 'boolean',
      description: 'Mark checkbox as required',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Pre-checked checkbox',
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required checkbox',
    error: 'You must accept the terms',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked checkbox',
    disabled: true,
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Partially selected',
    indeterminate: true,
  },
};

export const NoLabel: Story = {
  args: {
    'aria-label': 'Checkbox without visible label',
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled defaultChecked />
      <Checkbox label="With Error" error="This field is required" />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="space-y-4 w-96">
        <Checkbox
          label="Click me to toggle"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p className="text-sm text-black/60">
          Checkbox is {checked ? 'checked' : 'unchecked'}
        </p>
      </div>
    );
  },
};

export const IndeterminateExample: Story = {
  render: () => {
    const [parentChecked, setParentChecked] = useState(false);
    const [childStates, setChildStates] = useState({
      option1: false,
      option2: false,
      option3: false,
    });
    
    const allChecked = Object.values(childStates).every(Boolean);
    const someChecked = Object.values(childStates).some(Boolean);
    
    const handleParentChange = () => {
      const newState = !allChecked;
      setParentChecked(newState);
      setChildStates({
        option1: newState,
        option2: newState,
        option3: newState,
      });
    };
    
    const handleChildChange = (key: keyof typeof childStates) => {
      setChildStates(prev => ({
        ...prev,
        [key]: !prev[key],
      }));
    };
    
    return (
      <div className="space-y-4 w-96">
        <div className="pb-2 border-b border-black">
          <Checkbox
            label="Select All"
            checked={allChecked}
            indeterminate={someChecked && !allChecked}
            onChange={handleParentChange}
          />
        </div>
        <div className="pl-6 space-y-3">
          <Checkbox
            label="Option 1"
            checked={childStates.option1}
            onChange={() => handleChildChange('option1')}
          />
          <Checkbox
            label="Option 2"
            checked={childStates.option2}
            onChange={() => handleChildChange('option2')}
          />
          <Checkbox
            label="Option 3"
            checked={childStates.option3}
            onChange={() => handleChildChange('option3')}
          />
        </div>
      </div>
    );
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
    
    const toppings = [
      { value: 'cheese', label: 'Extra Cheese' },
      { value: 'pepperoni', label: 'Pepperoni' },
      { value: 'mushrooms', label: 'Mushrooms' },
      { value: 'onions', label: 'Onions' },
      { value: 'peppers', label: 'Bell Peppers' },
      { value: 'olives', label: 'Olives' },
    ];
    
    const handleToppingChange = (topping: string, checked: boolean) => {
      if (checked) {
        setSelectedToppings([...selectedToppings, topping]);
      } else {
        setSelectedToppings(selectedToppings.filter(t => t !== topping));
      }
    };
    
    return (
      <div className="w-96">
        <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
          Pizza Toppings
        </h3>
        <div className="space-y-3">
          {toppings.map((topping) => (
            <Checkbox
              key={topping.value}
              label={topping.label}
              checked={selectedToppings.includes(topping.value)}
              onChange={(e) => handleToppingChange(topping.value, e.target.checked)}
            />
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-black">
          <p className="text-sm text-black/60">
            Selected: {selectedToppings.length > 0 
              ? selectedToppings.join(', ') 
              : 'None'}
          </p>
        </div>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      newsletter: false,
      terms: false,
      privacy: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!formData.terms) {
        newErrors.terms = 'You must accept the terms and conditions';
      }
      if (!formData.privacy) {
        newErrors.privacy = 'You must accept the privacy policy';
      }
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
      }
    };
    
    return (
      <form onSubmit={handleSubmit} className="w-96 space-y-4">
        <Checkbox
          label="Subscribe to newsletter"
          checked={formData.newsletter}
          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
        />
        <Checkbox
          label="I accept the terms and conditions"
          checked={formData.terms}
          onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
          error={errors.terms}
          required
        />
        <Checkbox
          label="I accept the privacy policy"
          checked={formData.privacy}
          onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
          error={errors.privacy}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-4 uppercase tracking-wider hover:bg-white hover:text-black border border-black transition-colors mt-6"
        >
          Sign Up
        </button>
      </form>
    );
  },
};