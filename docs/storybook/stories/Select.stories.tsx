import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, type SelectOption } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Components/Forms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the select',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
    },
    required: {
      control: 'boolean',
      description: 'Mark select as required',
    },
    options: {
      control: 'object',
      description: 'Array of options with value and label',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions: SelectOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a fruit',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Favorite Fruit',
    options: defaultOptions,
    placeholder: 'Choose your favorite',
  },
};

export const WithError: Story = {
  args: {
    label: 'Required Selection',
    options: defaultOptions,
    placeholder: 'Please select',
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: defaultOptions,
    disabled: true,
    defaultValue: 'apple',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    options: defaultOptions,
    placeholder: 'Select an option',
    required: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Pre-selected Option',
    options: defaultOptions,
    defaultValue: 'orange',
  },
};

export const CountrySelect: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select your country',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'jp', label: 'Japan' },
      { value: 'cn', label: 'China' },
    ],
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [showInfo, setShowInfo] = useState(false);
    
    const fruitInfo: Record<string, string> = {
      apple: 'Apples are rich in fiber and antioxidants.',
      banana: 'Bananas are high in potassium and vitamin B6.',
      orange: 'Oranges are an excellent source of vitamin C.',
      grape: 'Grapes contain powerful antioxidants.',
      strawberry: 'Strawberries are packed with vitamins and minerals.',
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
      setShowInfo(true);
    };
    
    return (
      <div className="w-96 space-y-4">
        <Select
          label="Learn About Fruits"
          options={defaultOptions}
          placeholder="Select a fruit to learn more"
          value={value}
          onChange={handleChange}
        />
        {showInfo && value && (
          <div className="p-4 border border-black bg-white">
            <p className="text-sm">{fruitInfo[value]}</p>
          </div>
        )}
      </div>
    );
  },
};

export const LinkedSelects: Story = {
  render: () => {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    
    const categories: SelectOption[] = [
      { value: 'electronics', label: 'Electronics' },
      { value: 'clothing', label: 'Clothing' },
      { value: 'home', label: 'Home & Garden' },
    ];
    
    const subcategories: Record<string, SelectOption[]> = {
      electronics: [
        { value: 'phones', label: 'Phones' },
        { value: 'laptops', label: 'Laptops' },
        { value: 'tablets', label: 'Tablets' },
        { value: 'cameras', label: 'Cameras' },
      ],
      clothing: [
        { value: 'shirts', label: 'Shirts' },
        { value: 'pants', label: 'Pants' },
        { value: 'shoes', label: 'Shoes' },
        { value: 'accessories', label: 'Accessories' },
      ],
      home: [
        { value: 'furniture', label: 'Furniture' },
        { value: 'decor', label: 'Decor' },
        { value: 'kitchen', label: 'Kitchen' },
        { value: 'garden', label: 'Garden' },
      ],
    };
    
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCategory(e.target.value);
      setSubcategory(''); // Reset subcategory
    };
    
    return (
      <div className="w-96 space-y-6">
        <Select
          label="Category"
          options={categories}
          placeholder="Select a category"
          value={category}
          onChange={handleCategoryChange}
        />
        <Select
          label="Subcategory"
          options={category ? subcategories[category] : []}
          placeholder={category ? "Select a subcategory" : "Select a category first"}
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          disabled={!category}
        />
        {category && subcategory && (
          <p className="text-sm text-black/60">
            Selected: {categories.find(c => c.value === category)?.label} → {subcategories[category].find(s => s.value === subcategory)?.label}
          </p>
        )}
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      size: '',
      color: '',
      quantity: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const sizeOptions: SelectOption[] = [
      { value: 'xs', label: 'Extra Small' },
      { value: 's', label: 'Small' },
      { value: 'm', label: 'Medium' },
      { value: 'l', label: 'Large' },
      { value: 'xl', label: 'Extra Large' },
    ];
    
    const colorOptions: SelectOption[] = [
      { value: 'black', label: 'Black' },
      { value: 'white', label: 'White' },
      { value: 'gray', label: 'Gray' },
    ];
    
    const quantityOptions: SelectOption[] = Array.from({ length: 10 }, (_, i) => ({
      value: String(i + 1),
      label: String(i + 1),
    }));
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!formData.size) newErrors.size = 'Please select a size';
      if (!formData.color) newErrors.color = 'Please select a color';
      if (!formData.quantity) newErrors.quantity = 'Please select quantity';
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert(`Order placed: ${formData.quantity}x ${formData.size} in ${formData.color}`);
      }
    };
    
    return (
      <form onSubmit={handleSubmit} className="w-96 space-y-6">
        <Select
          label="Size"
          options={sizeOptions}
          placeholder="Select size"
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
          error={errors.size}
          required
        />
        <Select
          label="Color"
          options={colorOptions}
          placeholder="Select color"
          value={formData.color}
          onChange={(e) => setFormData({ ...formData, color: e.target.value })}
          error={errors.color}
          required
        />
        <Select
          label="Quantity"
          options={quantityOptions}
          placeholder="Select quantity"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          error={errors.quantity}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-4 uppercase tracking-wider hover:bg-white hover:text-black border border-black transition-colors"
        >
          Add to Cart
        </button>
      </form>
    );
  },
};