import type { Meta, StoryObj } from '@storybook/react-vite';
import { 
  Form, 
  FormField, 
  FormLabel, 
  FormMessage, 
  FormDescription,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  Switch,
  Button,
  type SelectOption
} from '@repo/design-system';
import { useState } from 'react';

const meta = {
  title: 'Components/Forms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onSubmit: {
      action: 'submitted',
      description: 'Form submission handler',
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicForm: Story = {
  render: () => (
    <Form className="w-96">
      <FormField>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" placeholder="Enter your name" />
      </FormField>
      
      <FormField>
        <FormLabel htmlFor="email" required>Email</FormLabel>
        <Input id="email" type="email" placeholder="email@example.com" />
        <FormDescription>We'll never share your email with anyone else.</FormDescription>
      </FormField>
      
      <Button type="submit">Submit</Button>
    </Form>
  ),
};

export const FormWithValidation: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const validateForm = () => {
      const newErrors: Record<string, string> = {};
      
      if (!formData.username) {
        newErrors.username = 'Username is required';
      } else if (formData.username.length < 3) {
        newErrors.username = 'Username must be at least 3 characters';
      }
      
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      return newErrors;
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors = validateForm();
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('Registration successful!');
      }
    };
    
    return (
      <Form onSubmit={handleSubmit} className="w-96">
        <FormField>
          <FormLabel htmlFor="username" required>Username</FormLabel>
          <Input 
            id="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            placeholder="Choose a username"
          />
          {errors.username && <FormMessage>{errors.username}</FormMessage>}
        </FormField>
        
        <FormField>
          <FormLabel htmlFor="email" required>Email</FormLabel>
          <Input 
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
          />
          {errors.email && <FormMessage>{errors.email}</FormMessage>}
        </FormField>
        
        <FormField>
          <FormLabel htmlFor="password" required>Password</FormLabel>
          <Input 
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter password"
          />
          {errors.password && <FormMessage>{errors.password}</FormMessage>}
          <FormDescription>Must be at least 8 characters long</FormDescription>
        </FormField>
        
        <FormField>
          <FormLabel htmlFor="confirmPassword" required>Confirm Password</FormLabel>
          <Input 
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            placeholder="Confirm password"
          />
          {errors.confirmPassword && <FormMessage>{errors.confirmPassword}</FormMessage>}
        </FormField>
        
        <Button type="submit" className="w-full">Create Account</Button>
      </Form>
    );
  },
};

export const CompleteForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      bio: '',
      experience: '',
      notifications: {
        email: true,
        sms: false,
      },
      newsletter: false,
      terms: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const countryOptions: SelectOption[] = [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia' },
    ];
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.country) newErrors.country = 'Please select a country';
      if (!formData.experience) newErrors.experience = 'Please select your experience level';
      if (!formData.terms) newErrors.terms = 'You must accept the terms';
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        console.log('Form submitted:', formData);
        alert('Application submitted successfully!');
      }
    };
    
    return (
      <Form onSubmit={handleSubmit} className="w-[600px]">
        <div className="grid grid-cols-2 gap-4">
          <FormField>
            <FormLabel htmlFor="firstName" required>First Name</FormLabel>
            <Input 
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="John"
            />
            {errors.firstName && <FormMessage>{errors.firstName}</FormMessage>}
          </FormField>
          
          <FormField>
            <FormLabel htmlFor="lastName" required>Last Name</FormLabel>
            <Input 
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="Doe"
            />
            {errors.lastName && <FormMessage>{errors.lastName}</FormMessage>}
          </FormField>
        </div>
        
        <FormField>
          <FormLabel htmlFor="email" required>Email</FormLabel>
          <Input 
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
          />
          {errors.email && <FormMessage>{errors.email}</FormMessage>}
        </FormField>
        
        <FormField>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <Input 
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
          />
          <FormDescription>Optional - for urgent communications only</FormDescription>
        </FormField>
        
        <FormField>
          <FormLabel htmlFor="country" required>Country</FormLabel>
          <Select
            id="country"
            options={countryOptions}
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="Select your country"
          />
          {errors.country && <FormMessage>{errors.country}</FormMessage>}
        </FormField>
        
        <FormField>
          <FormLabel htmlFor="bio">Bio</FormLabel>
          <Textarea
            id="bio"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Tell us about yourself..."
            rows={4}
          />
          <FormDescription>Maximum 500 characters</FormDescription>
        </FormField>
        
        <FormField>
          <FormLabel required>Experience Level</FormLabel>
          <RadioGroup 
            name="experience" 
            value={formData.experience}
            onChange={(value) => setFormData({ ...formData, experience: value })}
          >
            <Radio value="junior" label="Junior (0-2 years)" />
            <Radio value="mid" label="Mid-level (2-5 years)" />
            <Radio value="senior" label="Senior (5+ years)" />
          </RadioGroup>
          {errors.experience && <FormMessage>{errors.experience}</FormMessage>}
        </FormField>
        
        <FormField>
          <FormLabel>Notification Preferences</FormLabel>
          <div className="space-y-3">
            <Switch
              label="Email notifications"
              checked={formData.notifications.email}
              onChange={(e) => setFormData({
                ...formData,
                notifications: { ...formData.notifications, email: e.target.checked }
              })}
            />
            <Switch
              label="SMS notifications"
              checked={formData.notifications.sms}
              onChange={(e) => setFormData({
                ...formData,
                notifications: { ...formData.notifications, sms: e.target.checked }
              })}
            />
          </div>
        </FormField>
        
        <FormField>
          <Checkbox
            label="Subscribe to newsletter"
            checked={formData.newsletter}
            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
          />
        </FormField>
        
        <FormField>
          <Checkbox
            label="I accept the terms and conditions"
            checked={formData.terms}
            onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
          />
          {errors.terms && <FormMessage>{errors.terms}</FormMessage>}
        </FormField>
        
        <div className="flex gap-4">
          <Button type="submit" className="flex-1">Submit Application</Button>
          <Button type="button" variant="secondary" className="flex-1">Save Draft</Button>
        </div>
      </Form>
    );
  },
};

export const LoginForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      remember: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!formData.email) {
        newErrors.email = 'Email is required';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      }
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
          setIsLoading(false);
          alert('Login successful!');
        }, 1500);
      }
    };
    
    return (
      <Form onSubmit={handleSubmit} className="w-96">
        <FormField>
          <FormLabel htmlFor="email" required>Email</FormLabel>
          <Input 
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            disabled={isLoading}
          />
          {errors.email && <FormMessage>{errors.email}</FormMessage>}
        </FormField>
        
        <FormField>
          <FormLabel htmlFor="password" required>Password</FormLabel>
          <Input 
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter password"
            disabled={isLoading}
          />
          {errors.password && <FormMessage>{errors.password}</FormMessage>}
        </FormField>
        
        <FormField>
          <div className="flex items-center justify-between">
            <Checkbox
              label="Remember me"
              checked={formData.remember}
              onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
              disabled={isLoading}
            />
            <a href="#" className="text-sm underline">Forgot password?</a>
          </div>
        </FormField>
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </Form>
    );
  },
};

export const MultiStepForm: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      // Step 1
      fullName: '',
      email: '',
      // Step 2
      company: '',
      position: '',
      // Step 3
      plan: '',
      billing: '',
    });
    
    const handleNext = () => {
      if (currentStep < 3) setCurrentStep(currentStep + 1);
    };
    
    const handlePrev = () => {
      if (currentStep > 1) setCurrentStep(currentStep - 1);
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    };
    
    return (
      <Form onSubmit={handleSubmit} className="w-96">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={cn(
                  'w-full h-1 bg-black/20',
                  step <= currentStep && 'bg-black',
                  step < 3 && 'mr-2'
                )}
              />
            ))}
          </div>
          <p className="text-sm text-center mt-4">Step {currentStep} of 3</p>
        </div>
        
        {currentStep === 1 && (
          <>
            <FormField>
              <FormLabel htmlFor="fullName" required>Full Name</FormLabel>
              <Input 
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="John Doe"
              />
            </FormField>
            
            <FormField>
              <FormLabel htmlFor="email" required>Email</FormLabel>
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
              />
            </FormField>
          </>
        )}
        
        {currentStep === 2 && (
          <>
            <FormField>
              <FormLabel htmlFor="company">Company</FormLabel>
              <Input 
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Inc."
              />
            </FormField>
            
            <FormField>
              <FormLabel htmlFor="position">Position</FormLabel>
              <Input 
                id="position"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                placeholder="Software Engineer"
              />
            </FormField>
          </>
        )}
        
        {currentStep === 3 && (
          <>
            <FormField>
              <FormLabel required>Select Plan</FormLabel>
              <RadioGroup 
                name="plan" 
                value={formData.plan}
                onChange={(value) => setFormData({ ...formData, plan: value })}
              >
                <Radio value="basic" label="Basic - $9/month" />
                <Radio value="pro" label="Pro - $29/month" />
                <Radio value="enterprise" label="Enterprise - $99/month" />
              </RadioGroup>
            </FormField>
            
            <FormField>
              <FormLabel required>Billing Cycle</FormLabel>
              <RadioGroup 
                name="billing" 
                value={formData.billing}
                onChange={(value) => setFormData({ ...formData, billing: value })}
              >
                <Radio value="monthly" label="Monthly" />
                <Radio value="yearly" label="Yearly (Save 20%)" />
              </RadioGroup>
            </FormField>
          </>
        )}
        
        <div className="flex gap-4">
          {currentStep > 1 && (
            <Button type="button" variant="secondary" onClick={handlePrev}>
              Previous
            </Button>
          )}
          {currentStep < 3 ? (
            <Button type="button" onClick={handleNext} className="flex-1">
              Next
            </Button>
          ) : (
            <Button type="submit" className="flex-1">
              Complete
            </Button>
          )}
        </div>
      </Form>
    );
  },
};

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}