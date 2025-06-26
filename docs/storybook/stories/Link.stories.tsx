import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@repo/design-system';
import { ExternalLink, Download, Mail, Phone, ArrowRight } from 'lucide-react';

const meta = {
  title: 'Components/Navigation/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'underline', 'hover-underline', 'minimal'],
      description: 'Visual style of the link',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the link text',
    },
    external: {
      control: 'boolean',
      description: 'Opens in new tab with security attributes',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
    variant: 'default',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Link href="#" variant="default">Default Link</Link>
        <p className="text-xs text-black/60 mt-1">Standard link style</p>
      </div>
      
      <div>
        <Link href="#" variant="underline">Underlined Link</Link>
        <p className="text-xs text-black/60 mt-1">Always underlined</p>
      </div>
      
      <div>
        <Link href="#" variant="hover-underline">Hover Underline Link</Link>
        <p className="text-xs text-black/60 mt-1">Underlined on hover</p>
      </div>
      
      <div>
        <Link href="#" variant="minimal">Minimal Link</Link>
        <p className="text-xs text-black/60 mt-1">Subtle style</p>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Link href="#" size="sm">Small Link</Link>
        <span className="text-xs text-black/60">12px</span>
      </div>
      
      <div className="flex items-center gap-4">
        <Link href="#" size="md">Medium Link</Link>
        <span className="text-xs text-black/60">14px</span>
      </div>
      
      <div className="flex items-center gap-4">
        <Link href="#" size="lg">Large Link</Link>
        <span className="text-xs text-black/60">16px</span>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="#" external>
        External Link
        <ExternalLink className="inline-block w-3 h-3 ml-1" />
      </Link>
      
      <Link href="#download">
        Download File
        <Download className="inline-block w-4 h-4 ml-1" />
      </Link>
      
      <Link href="#more">
        Read More
        <ArrowRight className="inline-block w-4 h-4 ml-1" />
      </Link>
      
      <Link href="mailto:hello@example.com">
        <Mail className="inline-block w-4 h-4 mr-1" />
        Email Us
      </Link>
      
      <Link href="tel:+1234567890">
        <Phone className="inline-block w-4 h-4 mr-1" />
        Call Us
      </Link>
    </div>
  ),
};

export const External: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="https://example.com" external>
        External link with security attributes
        <ExternalLink className="inline-block w-3 h-3 ml-1" />
      </Link>
      
      <div className="text-xs text-black/60 bg-black/5 p-3">
        External links automatically include:
        <ul className="list-disc list-inside mt-2">
          <li>target="_blank"</li>
          <li>rel="noopener noreferrer"</li>
          <li>External link icon (optional)</li>
        </ul>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="#">Normal State</Link>
      
      <Link href="#" className="text-black/60">
        Visited State (custom styled)
      </Link>
      
      <Link href="#" disabled>
        Disabled State
      </Link>
      
      <div className="p-2 bg-black/5">
        <Link href="#" className="focus:outline-2 focus:outline-black focus:outline-offset-2">
          Focus State (tab to see)
        </Link>
      </div>
    </div>
  ),
};

export const InlineLinks: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <p className="text-sm">
        This is a paragraph with an <Link href="#" variant="hover-underline">inline link</Link> that 
        flows naturally with the text. You can also add <Link href="#" external>external links</Link> 
        within your content.
      </p>
      
      <p className="text-sm">
        Links can have different styles like <Link href="#" variant="underline">underlined</Link>, 
        or be more <Link href="#" variant="minimal">subtle</Link> depending on your needs.
      </p>
      
      <p className="text-sm text-black/60">
        Even in secondary text, <Link href="#" variant="default" className="text-black/60 hover:text-black">
        links remain accessible</Link> and maintain good contrast ratios.
      </p>
    </div>
  ),
};

export const Navigation: Story = {
  render: () => (
    <nav className="space-y-6">
      <div>
        <h3 className="text-xs font-medium uppercase tracking-wider mb-3">Main Navigation</h3>
        <ul className="space-y-2">
          <li><Link href="#" variant="hover-underline">Home</Link></li>
          <li><Link href="#" variant="hover-underline">About</Link></li>
          <li><Link href="#" variant="hover-underline">Services</Link></li>
          <li><Link href="#" variant="hover-underline">Contact</Link></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xs font-medium uppercase tracking-wider mb-3">Resources</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#" external variant="hover-underline">
              Documentation
              <ExternalLink className="inline-block w-3 h-3 ml-1" />
            </Link>
          </li>
          <li>
            <Link href="#" external variant="hover-underline">
              API Reference
              <ExternalLink className="inline-block w-3 h-3 ml-1" />
            </Link>
          </li>
          <li>
            <Link href="#" variant="hover-underline">
              Downloads
              <Download className="inline-block w-3 h-3 ml-1" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  ),
};

export const Footer: Story = {
  render: () => (
    <footer className="border-t border-black pt-8">
      <div className="grid grid-cols-3 gap-8 max-w-4xl">
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link href="#" variant="minimal" size="sm">About Us</Link></li>
            <li><Link href="#" variant="minimal" size="sm">Careers</Link></li>
            <li><Link href="#" variant="minimal" size="sm">Press</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><Link href="#" variant="minimal" size="sm">Help Center</Link></li>
            <li><Link href="#" variant="minimal" size="sm">Contact Us</Link></li>
            <li><Link href="#" variant="minimal" size="sm">Status</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="#" variant="minimal" size="sm">Privacy Policy</Link></li>
            <li><Link href="#" variant="minimal" size="sm">Terms of Service</Link></li>
            <li><Link href="#" variant="minimal" size="sm">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-black/10 text-sm text-black/60">
        © 2024 Company. All rights reserved. 
        <Link href="#" variant="minimal" size="sm" className="ml-4">Privacy</Link> · 
        <Link href="#" variant="minimal" size="sm" className="ml-1">Terms</Link>
      </div>
    </footer>
  ),
};

export const CardLinks: Story = {
  render: () => (
    <div className="grid gap-4 max-w-md">
      <Link href="#" className="block p-4 border border-black hover:bg-black hover:text-white transition-colors">
        <h3 className="font-semibold mb-2">Card Link Title</h3>
        <p className="text-sm opacity-80">
          This entire card is clickable and acts as a link.
        </p>
      </Link>
      
      <div className="p-4 border border-black">
        <h3 className="font-semibold mb-2">Card with Link</h3>
        <p className="text-sm text-black/60 mb-3">
          This card has a specific link action rather than being fully clickable.
        </p>
        <Link href="#" variant="hover-underline">
          Learn more <ArrowRight className="inline-block w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  ),
};