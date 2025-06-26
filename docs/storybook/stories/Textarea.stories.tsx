import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the textarea',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text rows',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Control resize behavior',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
    },
    required: {
      control: 'boolean',
      description: 'Mark textarea as required',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message here...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Description',
    placeholder: 'Tell us more about yourself...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Bio',
    error: 'Bio must be at least 10 characters',
    defaultValue: 'Too short',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'Cannot edit this',
    disabled: true,
    defaultValue: 'This textarea is disabled and cannot be edited.',
  },
};

export const CustomRows: Story = {
  args: {
    label: 'Custom Rows',
    rows: 6,
    placeholder: 'This textarea has 6 rows by default',
  },
};

export const ResizeBehaviors: Story = {
  render: () => (
    <div className="space-y-8 w-96">
      <Textarea 
        label="No Resize" 
        resize="none" 
        placeholder="This textarea cannot be resized"
        defaultValue="Try to resize me - you can't!"
      />
      <Textarea 
        label="Vertical Resize (Default)" 
        resize="vertical" 
        placeholder="Can be resized vertically"
        defaultValue="Drag the bottom edge to resize vertically"
      />
      <Textarea 
        label="Horizontal Resize" 
        resize="horizontal" 
        placeholder="Can be resized horizontally"
        defaultValue="Drag the right edge to resize horizontally"
      />
      <Textarea 
        label="Both Directions" 
        resize="both" 
        placeholder="Can be resized in both directions"
        defaultValue="Drag the corner to resize in any direction"
      />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 200;
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      if (newValue.length <= maxLength) {
        setValue(newValue);
      }
    };
    
    return (
      <div className="w-96">
        <Textarea
          label="Message"
          placeholder="Enter your message (max 200 characters)"
          value={value}
          onChange={handleChange}
          rows={5}
        />
        <div className="mt-2 text-xs text-black/60 text-right">
          {value.length}/{maxLength} characters
        </div>
      </div>
    );
  },
};

export const AutoResize: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      
      // Auto-resize logic
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };
    
    return (
      <div className="w-96">
        <Textarea
          ref={textareaRef}
          label="Auto-resizing Textarea"
          placeholder="Type multiple lines to see auto-resize in action"
          value={value}
          onChange={handleChange}
          resize="none"
          rows={1}
          style={{ overflow: 'hidden' }}
        />
        <p className="mt-4 text-sm text-black/60">
          This textarea automatically adjusts its height based on content.
        </p>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      feedback: '',
      comments: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!formData.feedback) {
        newErrors.feedback = 'Feedback is required';
      } else if (formData.feedback.length < 10) {
        newErrors.feedback = 'Feedback must be at least 10 characters';
      }
      
      if (formData.comments && formData.comments.length > 500) {
        newErrors.comments = 'Comments cannot exceed 500 characters';
      }
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
      }
    };
    
    return (
      <form onSubmit={handleSubmit} className="w-96 space-y-6">
        <Textarea
          label="Feedback"
          placeholder="Share your feedback with us..."
          value={formData.feedback}
          onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
          error={errors.feedback}
          required
          rows={4}
        />
        <Textarea
          label="Additional Comments (Optional)"
          placeholder="Any other comments?"
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          error={errors.comments}
          rows={3}
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-4 uppercase tracking-wider hover:bg-white hover:text-black border border-black transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    );
  },
};