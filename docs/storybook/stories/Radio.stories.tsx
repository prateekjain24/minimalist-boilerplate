import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Components/Forms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the radio button',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the radio button',
    },
    name: {
      control: 'text',
      description: 'Name attribute for radio button group',
    },
    value: {
      control: 'text',
      description: 'Value of the radio button',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'options',
    value: 'option1',
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected option',
    name: 'options',
    value: 'selected',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    name: 'options',
    value: 'disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled selected option',
    name: 'options',
    value: 'disabled-checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const NoLabel: Story = {
  args: {
    'aria-label': 'Radio button without visible label',
    name: 'options',
    value: 'no-label',
  },
};

export const RadioGroupBasic: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    
    return (
      <RadioGroup name="basic-group" value={value} onChange={setValue}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    );
  },
};

export const RadioGroupWithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <RadioGroup 
        name="error-group" 
        value={value} 
        onChange={setValue}
        error="Please select an option"
      >
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    );
  },
};

export const SizeSelection: Story = {
  render: () => {
    const [size, setSize] = useState('medium');
    
    return (
      <div className="w-96">
        <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
          Select Size
        </h3>
        <RadioGroup name="size" value={size} onChange={setSize}>
          <Radio value="small" label="Small (S)" />
          <Radio value="medium" label="Medium (M)" />
          <Radio value="large" label="Large (L)" />
          <Radio value="xlarge" label="Extra Large (XL)" />
        </RadioGroup>
        <p className="mt-4 text-sm text-black/60">
          Selected size: {size.toUpperCase()}
        </p>
      </div>
    );
  },
};

export const PaymentMethod: Story = {
  render: () => {
    const [payment, setPayment] = useState('card');
    
    const paymentMethods = [
      { value: 'card', label: 'Credit/Debit Card', description: 'Visa, Mastercard, Amex' },
      { value: 'paypal', label: 'PayPal', description: 'Redirect to PayPal' },
      { value: 'bank', label: 'Bank Transfer', description: 'Direct bank payment' },
      { value: 'crypto', label: 'Cryptocurrency', description: 'Bitcoin, Ethereum' },
    ];
    
    return (
      <div className="w-96">
        <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
          Payment Method
        </h3>
        <RadioGroup name="payment" value={payment} onChange={setPayment}>
          {paymentMethods.map((method) => (
            <div key={method.value} className="py-2">
              <Radio value={method.value} label={method.label} />
              <p className="ml-8 text-xs text-black/60 mt-1">
                {method.description}
              </p>
            </div>
          ))}
        </RadioGroup>
      </div>
    );
  },
};

export const DeliveryOptions: Story = {
  render: () => {
    const [delivery, setDelivery] = useState('standard');
    const [showEstimate, setShowEstimate] = useState(false);
    
    const deliveryOptions = [
      { value: 'standard', label: 'Standard Delivery', price: 'Free', days: '5-7 business days' },
      { value: 'express', label: 'Express Delivery', price: '$9.99', days: '2-3 business days' },
      { value: 'overnight', label: 'Overnight Delivery', price: '$24.99', days: 'Next business day' },
    ];
    
    return (
      <div className="w-96">
        <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
          Delivery Options
        </h3>
        <RadioGroup 
          name="delivery" 
          value={delivery} 
          onChange={(value) => {
            setDelivery(value);
            setShowEstimate(true);
          }}
        >
          {deliveryOptions.map((option) => (
            <div key={option.value} className="flex justify-between items-start py-2">
              <Radio 
                value={option.value} 
                label={
                  <div>
                    <span>{option.label}</span>
                    <span className="block text-xs text-black/60 mt-1">
                      {option.days}
                    </span>
                  </div>
                } 
              />
              <span className="text-sm font-medium">{option.price}</span>
            </div>
          ))}
        </RadioGroup>
        {showEstimate && (
          <div className="mt-4 p-3 border border-black bg-black/5">
            <p className="text-sm">
              Estimated delivery: {deliveryOptions.find(o => o.value === delivery)?.days}
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const SurveyExample: Story = {
  render: () => {
    const [satisfaction, setSatisfaction] = useState('');
    const [recommendation, setRecommendation] = useState('');
    
    return (
      <div className="w-96 space-y-6">
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
            How satisfied are you with our service?
          </h3>
          <RadioGroup name="satisfaction" value={satisfaction} onChange={setSatisfaction}>
            <Radio value="very-satisfied" label="Very Satisfied" />
            <Radio value="satisfied" label="Satisfied" />
            <Radio value="neutral" label="Neutral" />
            <Radio value="dissatisfied" label="Dissatisfied" />
            <Radio value="very-dissatisfied" label="Very Dissatisfied" />
          </RadioGroup>
        </div>
        
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
            Would you recommend us to others?
          </h3>
          <RadioGroup name="recommendation" value={recommendation} onChange={setRecommendation}>
            <Radio value="definitely" label="Definitely" />
            <Radio value="probably" label="Probably" />
            <Radio value="not-sure" label="Not Sure" />
            <Radio value="probably-not" label="Probably Not" />
            <Radio value="definitely-not" label="Definitely Not" />
          </RadioGroup>
        </div>
        
        {satisfaction && recommendation && (
          <div className="mt-6 p-4 border border-black">
            <p className="text-sm">Thank you for your feedback!</p>
          </div>
        )}
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      plan: '',
      billing: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!formData.plan) newErrors.plan = 'Please select a plan';
      if (!formData.billing) newErrors.billing = 'Please select billing cycle';
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert(`Selected: ${formData.plan} plan with ${formData.billing} billing`);
      }
    };
    
    return (
      <form onSubmit={handleSubmit} className="w-96 space-y-6">
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
            Select Plan
          </h3>
          <RadioGroup 
            name="plan" 
            value={formData.plan} 
            onChange={(value) => setFormData({ ...formData, plan: value })}
            error={errors.plan}
          >
            <Radio value="basic" label="Basic - $9/month" />
            <Radio value="pro" label="Pro - $29/month" />
            <Radio value="enterprise" label="Enterprise - $99/month" />
          </RadioGroup>
        </div>
        
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
            Billing Cycle
          </h3>
          <RadioGroup 
            name="billing" 
            value={formData.billing} 
            onChange={(value) => setFormData({ ...formData, billing: value })}
            error={errors.billing}
          >
            <Radio value="monthly" label="Monthly" />
            <Radio value="yearly" label="Yearly (Save 20%)" />
          </RadioGroup>
        </div>
        
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-4 uppercase tracking-wider hover:bg-white hover:text-black border border-black transition-colors"
        >
          Continue
        </button>
      </form>
    );
  },
};