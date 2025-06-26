import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Card, CardContent, CardHeader, CardTitle, Container, Heading, Stack, Text, Badge, Separator } from '@repo/design-system';

const meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
    controls: { hideNoControlsWarning: true },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Introduction: Story = {
  render: () => (
    <div className="min-h-screen bg-white">
      <Container size="lg" className="py-16">
        <Stack direction="vertical" spacing={8}>
          {/* Hero Section */}
          <div className="text-center">
            <Heading as="h1" className="mb-4">
              Minimalist Design System
            </Heading>
            <Text size="xl" className="text-black/60 max-w-2xl mx-auto">
              A meticulously crafted component library built on minimalist principles. 
              Black & white aesthetic, sharp corners, and purposeful design.
            </Text>
          </div>

          <Separator />

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="py-6">
                <Text size="3xl" weight="bold">40+</Text>
                <Text size="sm" className="text-black/60">Components</Text>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="py-6">
                <Text size="3xl" weight="bold">100%</Text>
                <Text size="sm" className="text-black/60">TypeScript</Text>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="py-6">
                <Text size="3xl" weight="bold">A11y</Text>
                <Text size="sm" className="text-black/60">Accessible</Text>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="py-6">
                <Text size="3xl" weight="bold">CVA</Text>
                <Text size="sm" className="text-black/60">Powered</Text>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Design Principles */}
          <Stack direction="vertical" spacing={6}>
            <Heading as="h2">Design Principles</Heading>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Minimalism First</CardTitle>
                </CardHeader>
                <CardContent>
                  <Text className="text-black/60">
                    Every element serves a purpose. No unnecessary decoration, 
                    no visual noise. Clean, focused, and intentional.
                  </Text>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Black & White</CardTitle>
                </CardHeader>
                <CardContent>
                  <Text className="text-black/60">
                    A strict monochromatic palette creates visual hierarchy through 
                    contrast, spacing, and typography—not color.
                  </Text>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sharp & Clean</CardTitle>
                </CardHeader>
                <CardContent>
                  <Text className="text-black/60">
                    No rounded corners. Clear boundaries. Geometric precision 
                    that emphasizes structure and organization.
                  </Text>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Functional Beauty</CardTitle>
                </CardHeader>
                <CardContent>
                  <Text className="text-black/60">
                    Design serves purpose, not decoration. Beauty emerges from 
                    clarity, consistency, and thoughtful composition.
                  </Text>
                </CardContent>
              </Card>
            </div>
          </Stack>

          <Separator />

          {/* Component Categories */}
          <Stack direction="vertical" spacing={6}>
            <Heading as="h2">Component Categories</Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Typography & Text
                    <Badge variant="secondary">4</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Text size="sm" className="text-black/60">
                    Text, Heading, Label, Badge
                  </Text>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Form Components
                    <Badge variant="secondary">7</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Text size="sm" className="text-black/60">
                    Input, Textarea, Select, Checkbox, Radio, Switch, Form
                  </Text>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Layout & Structure
                    <Badge variant="secondary">6</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Text size="sm" className="text-black/60">
                    Container, Separator, Stack, Grid, List, Accordion
                  </Text>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Feedback & Navigation
                    <Badge variant="secondary">9</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Text size="sm" className="text-black/60">
                    Alert, Toast, Progress, Spinner, Skeleton, Link, Breadcrumb, Tabs, Pagination
                  </Text>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Overlay & Interactive
                    <Badge variant="secondary">9</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Text size="sm" className="text-black/60">
                    Modal, Drawer, Tooltip, Dropdown, Avatar, Table, IconButton, ButtonGroup, Chip
                  </Text>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Core Components
                    <Badge variant="secondary">3</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Text size="sm" className="text-black/60">
                    Button, Card, Input (foundation)
                  </Text>
                </CardContent>
              </Card>
            </div>
          </Stack>

          <Separator />

          {/* Technical Implementation */}
          <Stack direction="vertical" spacing={6}>
            <Heading as="h2">Technical Implementation</Heading>
            <div className="grid md:grid-cols-2 gap-6">
              <Stack direction="vertical" spacing={4}>
                <Heading as="h3" level="h4">Component Patterns</Heading>
                <Stack direction="vertical" spacing={2}>
                  <Text size="sm">
                    <strong>CVA (class-variance-authority)</strong> - Variant management
                  </Text>
                  <Text size="sm">
                    <strong>React.forwardRef</strong> - Proper ref forwarding
                  </Text>
                  <Text size="sm">
                    <strong>Compound Components</strong> - Complex structures
                  </Text>
                  <Text size="sm">
                    <strong>TypeScript Interfaces</strong> - Full type safety
                  </Text>
                </Stack>
              </Stack>
              <Stack direction="vertical" spacing={4}>
                <Heading as="h3" level="h4">Built With</Heading>
                <Stack direction="vertical" spacing={2}>
                  <Text size="sm">
                    <strong>React 18</strong> - Modern React features
                  </Text>
                  <Text size="sm">
                    <strong>Tailwind CSS</strong> - Utility-first styling
                  </Text>
                  <Text size="sm">
                    <strong>Design Tokens</strong> - Consistent theming
                  </Text>
                  <Text size="sm">
                    <strong>Storybook 7</strong> - Component documentation
                  </Text>
                </Stack>
              </Stack>
            </div>
          </Stack>

          <Separator />

          {/* Getting Started */}
          <Stack direction="vertical" spacing={6}>
            <Heading as="h2">Getting Started</Heading>
            <Card>
              <CardContent className="py-6">
                <Stack direction="vertical" spacing={4}>
                  <Text>
                    Explore the components in the sidebar. Each component includes:
                  </Text>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <Text size="sm" className="inline">
                        Interactive controls to test different props
                      </Text>
                    </li>
                    <li>
                      <Text size="sm" className="inline">
                        Multiple story variants showing use cases
                      </Text>
                    </li>
                    <li>
                      <Text size="sm" className="inline">
                        Code examples you can copy and paste
                      </Text>
                    </li>
                    <li>
                      <Text size="sm" className="inline">
                        Auto-generated documentation from TypeScript
                      </Text>
                    </li>
                  </ul>
                </Stack>
              </CardContent>
            </Card>
          </Stack>

          {/* CTA */}
          <div className="text-center pt-8">
            <Stack direction="horizontal" spacing={4} className="justify-center">
              <Button size="lg">Explore Components</Button>
              <Button size="lg" variant="secondary">View on GitHub</Button>
            </Stack>
          </div>
        </Stack>
      </Container>
    </div>
  ),
};

export const GettingStarted: Story = {
  render: () => (
    <Container size="lg" className="py-16">
      <Stack direction="vertical" spacing={8}>
        <Heading as="h1">Getting Started</Heading>
        
        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
          </CardHeader>
          <CardContent>
            <Stack direction="vertical" spacing={4}>
              <Text>Install the design system package:</Text>
              <pre className="bg-black text-white p-4 overflow-x-auto">
                <code>pnpm add @repo/design-system</code>
              </pre>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Import Styles</CardTitle>
          </CardHeader>
          <CardContent>
            <Stack direction="vertical" spacing={4}>
              <Text>Import the global styles in your root layout:</Text>
              <pre className="bg-black text-white p-4 overflow-x-auto">
                <code>{`import '@repo/design-system/styles';`}</code>
              </pre>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Use Components</CardTitle>
          </CardHeader>
          <CardContent>
            <Stack direction="vertical" spacing={4}>
              <Text>Import and use components in your application:</Text>
              <pre className="bg-black text-white p-4 overflow-x-auto">
                <code>{`import { Button, Card, Input } from '@repo/design-system';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Input label="Name" placeholder="Enter your name" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}`}</code>
              </pre>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Design Tokens</CardTitle>
          </CardHeader>
          <CardContent>
            <Stack direction="vertical" spacing={4}>
              <Text>Access design tokens for custom components:</Text>
              <pre className="bg-black text-white p-4 overflow-x-auto">
                <code>{`import { tokens } from '@repo/design-system/tokens';

// Use in your styles
const customStyles = {
  padding: tokens.spacing[4],
  color: tokens.colors.black.DEFAULT,
  fontSize: tokens.typography.fontSize.base,
};`}</code>
              </pre>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  ),
};