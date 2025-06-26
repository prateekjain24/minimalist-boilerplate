import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Container, Stack, Card, CardContent } from '@repo/design-system';

const meta = {
  title: 'Layout/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether single or multiple items can be expanded',
    },
    defaultExpanded: {
      control: 'object',
      description: 'Array of item IDs to be expanded by default',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleExpand: Story = {
  args: {
    type: 'single',
    children: (
      <>
        <AccordionItem id="item-1">
          <AccordionTrigger>What is minimalist design?</AccordionTrigger>
          <AccordionContent>
            Minimalist design is a design approach that emphasizes simplicity and the removal of 
            superfluous elements. It focuses on essential elements, using plenty of whitespace, 
            limited color palettes, and clean typography to create elegant and functional designs.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem id="item-2">
          <AccordionTrigger>Why use a black and white color scheme?</AccordionTrigger>
          <AccordionContent>
            A monochromatic palette creates strong contrast, improves readability, and maintains 
            visual consistency across all components. It also ensures accessibility compliance 
            and reduces cognitive load on users.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem id="item-3">
          <AccordionTrigger>How does this improve user experience?</AccordionTrigger>
          <AccordionContent>
            By removing visual clutter and focusing on functionality, users can navigate and 
            understand content more easily. The consistent design language and clear hierarchy 
            help users accomplish their tasks efficiently.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

export const MultipleExpand: Story = {
  args: {
    type: 'multiple',
    defaultExpanded: ['item-1', 'item-3'],
    children: (
      <>
        <AccordionItem id="item-1">
          <AccordionTrigger>Getting Started</AccordionTrigger>
          <AccordionContent>
            To get started with our design system, install the package via npm or yarn. 
            Import the components you need and start building your minimalist interface.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem id="item-2">
          <AccordionTrigger>Core Components</AccordionTrigger>
          <AccordionContent>
            Our design system includes essential components like Button, Card, Input, 
            and layout utilities such as Container, Grid, and Stack. Each component 
            follows our strict design principles.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem id="item-3">
          <AccordionTrigger>Customization</AccordionTrigger>
          <AccordionContent>
            While maintaining the minimalist aesthetic, components can be customized 
            through props, className overrides, and CSS variables. The design tokens 
            ensure consistency across customizations.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

export const DefaultExpanded: Story = {
  args: {
    type: 'single',
    defaultExpanded: ['faq-2'],
    children: (
      <>
        <AccordionItem id="faq-1">
          <AccordionTrigger>How do I install the design system?</AccordionTrigger>
          <AccordionContent>
            Run <code className="bg-black/10 px-2 py-1">npm install @repo/design-system</code> in 
            your project directory. Then import components as needed.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem id="faq-2">
          <AccordionTrigger>Is TypeScript supported?</AccordionTrigger>
          <AccordionContent>
            Yes! The design system is built with TypeScript and includes comprehensive type 
            definitions for all components and utilities. You'll get full IntelliSense support 
            in your IDE.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem id="faq-3">
          <AccordionTrigger>Can I use this with Next.js?</AccordionTrigger>
          <AccordionContent>
            Absolutely. The design system is optimized for Next.js and supports both the App 
            Router and Pages Router. Server components are fully supported.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

export const WithLongContent: Story = {
  render: () => (
    <Container maxWidth="md">
      <Accordion type="single">
        <AccordionItem>
          <AccordionTrigger>Component Architecture</AccordionTrigger>
          <AccordionContent>
            <Stack direction="vertical" spacing={4}>
              <p>
                Our component architecture follows a compound component pattern, allowing for 
                flexible composition while maintaining consistency. Each component is built 
                with accessibility in mind.
              </p>
              <p>
                The architecture includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Base components for atomic UI elements</li>
                <li>Layout components for structure and spacing</li>
                <li>Composite components for complex interactions</li>
                <li>Utility hooks for common behaviors</li>
              </ul>
              <p>
                All components use CSS-in-JS for styling, ensuring proper style encapsulation 
                and runtime flexibility. The design tokens are injected as CSS variables for 
                easy theming.
              </p>
            </Stack>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionTrigger>Performance Considerations</AccordionTrigger>
          <AccordionContent>
            <Stack direction="vertical" spacing={4}>
              <p>
                Performance is a key consideration in our design system. We implement several 
                optimizations to ensure smooth user experiences:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Code splitting at the component level</li>
                <li>Lazy loading for heavy components</li>
                <li>Memoization of expensive computations</li>
                <li>Virtual scrolling for long lists</li>
                <li>Debounced event handlers</li>
              </ul>
            </Stack>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Stack direction="vertical" spacing={8}>
      <div>
        <h3 className="font-bold mb-4">Default Styling</h3>
        <Accordion type="single">
          <AccordionItem>
            <AccordionTrigger>Default accordion item</AccordionTrigger>
            <AccordionContent>
              This accordion uses the default styling with borders and standard spacing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <h3 className="font-bold mb-4">No Borders</h3>
        <Accordion type="single" className="border-0">
          <AccordionItem className="border-0">
            <AccordionTrigger className="py-2">Borderless item 1</AccordionTrigger>
            <AccordionContent>
              This accordion has no borders for a cleaner look.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-0">
            <AccordionTrigger className="py-2">Borderless item 2</AccordionTrigger>
            <AccordionContent>
              Great for embedding in cards or other containers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <h3 className="font-bold mb-4">With Background</h3>
        <Accordion type="single" className="bg-black/5 p-4">
          <AccordionItem className="bg-white mb-2 last:mb-0">
            <AccordionTrigger className="px-4">Styled item 1</AccordionTrigger>
            <AccordionContent className="px-4">
              This accordion has a background color and padding.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="bg-white mb-2 last:mb-0">
            <AccordionTrigger className="px-4">Styled item 2</AccordionTrigger>
            <AccordionContent className="px-4">
              Each item stands out as a separate card.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Stack>
  ),
};

export const InCard: Story = {
  render: () => (
    <Card className="max-w-2xl">
      <CardContent className="p-0">
        <div className="p-6 border-b border-black">
          <h2 className="text-xl font-bold">Help Center</h2>
          <p className="text-sm text-black/60 mt-1">Find answers to common questions</p>
        </div>
        
        <Accordion type="single" className="border-0">
          <AccordionItem className="border-b-0 border-t border-black/10 first:border-t-0">
            <AccordionTrigger className="px-6">How do I reset my password?</AccordionTrigger>
            <AccordionContent className="px-6">
              Click on the "Forgot Password" link on the login page. Enter your email address 
              and we'll send you instructions to reset your password.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem className="border-b-0 border-t border-black/10">
            <AccordionTrigger className="px-6">Can I change my username?</AccordionTrigger>
            <AccordionContent className="px-6">
              Yes, you can change your username from your account settings. Note that this 
              can only be done once every 30 days.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem className="border-b-0 border-t border-black/10">
            <AccordionTrigger className="px-6">How do I delete my account?</AccordionTrigger>
            <AccordionContent className="px-6">
              Go to Settings → Account → Delete Account. Please note that this action is 
              permanent and cannot be undone.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  ),
};

export const ProductFeatures: Story = {
  render: () => (
    <Container maxWidth="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Product Features</h2>
        <p className="text-black/60 max-w-2xl mx-auto">
          Explore the powerful features that make our product stand out
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold mb-4">Core Features</h3>
          <Accordion type="multiple">
            <AccordionItem>
              <AccordionTrigger>Real-time Collaboration</AccordionTrigger>
              <AccordionContent>
                Work together with your team in real-time. See changes as they happen, 
                with live cursors and instant updates across all devices.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem>
              <AccordionTrigger>Advanced Analytics</AccordionTrigger>
              <AccordionContent>
                Get detailed insights into your data with our powerful analytics engine. 
                Track metrics, visualize trends, and make data-driven decisions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem>
              <AccordionTrigger>API Integration</AccordionTrigger>
              <AccordionContent>
                Connect with your favorite tools through our comprehensive API. 
                We support REST, GraphQL, and webhooks for maximum flexibility.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Premium Features</h3>
          <Accordion type="multiple">
            <AccordionItem>
              <AccordionTrigger>AI-Powered Insights</AccordionTrigger>
              <AccordionContent>
                Leverage machine learning to uncover hidden patterns in your data. 
                Get predictive analytics and automated recommendations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem>
              <AccordionTrigger>Enterprise Security</AccordionTrigger>
              <AccordionContent>
                Bank-level encryption, SSO support, and compliance with major 
                security standards including SOC 2 and GDPR.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem>
              <AccordionTrigger>Custom Workflows</AccordionTrigger>
              <AccordionContent>
                Build custom workflows tailored to your business processes. 
                Automate repetitive tasks and streamline operations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Container>
  ),
};

export const NestedAccordions: Story = {
  render: () => (
    <Container maxWidth="md">
      <h3 className="font-bold mb-4">Documentation</h3>
      <Accordion type="single">
        <AccordionItem>
          <AccordionTrigger>Installation Guide</AccordionTrigger>
          <AccordionContent>
            <Stack direction="vertical" spacing={4}>
              <p>Follow these steps to install our product:</p>
              
              <Accordion type="single" className="border-0 bg-black/5 p-4">
                <AccordionItem className="bg-white mb-2">
                  <AccordionTrigger className="text-sm px-3 py-2">System Requirements</AccordionTrigger>
                  <AccordionContent className="text-sm px-3">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Node.js 16 or higher</li>
                      <li>4GB RAM minimum</li>
                      <li>10GB free disk space</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="bg-white mb-2">
                  <AccordionTrigger className="text-sm px-3 py-2">Installation Steps</AccordionTrigger>
                  <AccordionContent className="text-sm px-3">
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Download the installer</li>
                      <li>Run the setup wizard</li>
                      <li>Configure settings</li>
                      <li>Verify installation</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Stack>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionTrigger>Configuration</AccordionTrigger>
          <AccordionContent>
            Configuration details would go here...
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  ),
};