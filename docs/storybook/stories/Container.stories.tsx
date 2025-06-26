import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '@repo/design-system';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'Maximum width of the container',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Padding variant for the container',
    },
    center: {
      control: 'boolean',
      description: 'Center the container horizontally',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxWidth: 'lg',
    padding: 'md',
    center: true,
    children: (
      <div className="bg-black/5 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Container Content</h2>
        <p className="text-black/60">
          This is a centered container with default settings. It provides consistent spacing and maximum width constraints.
        </p>
      </div>
    ),
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8 py-8">
      {(['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map((size) => (
        <Container key={size} maxWidth={size} className="bg-black/5">
          <div className="py-6 text-center">
            <h3 className="text-lg font-bold">maxWidth: {size}</h3>
            <p className="text-sm text-black/60 mt-2">
              {size === 'sm' && 'Maximum width: 640px'}
              {size === 'md' && 'Maximum width: 768px'}
              {size === 'lg' && 'Maximum width: 1024px'}
              {size === 'xl' && 'Maximum width: 1280px'}
              {size === '2xl' && 'Maximum width: 1536px'}
              {size === 'full' && 'Full width container'}
            </p>
          </div>
        </Container>
      ))}
    </div>
  ),
};

export const PaddingVariants: Story = {
  render: () => (
    <div className="space-y-4">
      {(['none', 'sm', 'md', 'lg', 'xl'] as const).map((padding) => (
        <Container key={padding} padding={padding} className="bg-black/5">
          <div className="bg-white border border-black p-4">
            <p className="font-medium">padding: {padding}</p>
            <p className="text-sm text-black/60">
              {padding === 'none' && 'No horizontal padding'}
              {padding === 'sm' && '16px horizontal padding'}
              {padding === 'md' && '24px horizontal padding'}
              {padding === 'lg' && '32px horizontal padding'}
              {padding === 'xl' && '48px horizontal padding'}
            </p>
          </div>
        </Container>
      ))}
    </div>
  ),
};

export const NotCentered: Story = {
  args: {
    maxWidth: 'md',
    center: false,
    children: (
      <div className="bg-black text-white p-8">
        <h2 className="text-2xl font-bold mb-4">Left-Aligned Container</h2>
        <p>
          This container is not centered and will align to the start of its parent element.
        </p>
      </div>
    ),
  },
};

export const RealWorldExample: Story = {
  render: () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Container maxWidth="xl" padding="md">
        <header className="py-6 border-b border-black">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">MINIMAL</h1>
            <nav className="flex gap-8">
              <a href="#" className="hover:opacity-60">Products</a>
              <a href="#" className="hover:opacity-60">About</a>
              <a href="#" className="hover:opacity-60">Contact</a>
            </nav>
          </div>
        </header>
      </Container>

      {/* Hero Section */}
      <Container maxWidth="lg" padding="lg" className="py-24">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6">Clean. Simple. Powerful.</h2>
          <p className="text-xl text-black/60 mb-8 max-w-2xl mx-auto">
            Experience the beauty of minimalist design with our carefully crafted components.
          </p>
          <button className="bg-black text-white px-8 py-4 hover:bg-white hover:text-black border border-black transition-colors">
            GET STARTED
          </button>
        </div>
      </Container>

      {/* Content Section */}
      <Container maxWidth="md" padding="md" className="py-16">
        <article className="prose prose-lg max-w-none">
          <h3 className="text-3xl font-bold mb-4">The Power of Containers</h3>
          <p className="text-black/70 leading-relaxed">
            Containers provide consistent spacing and width constraints across your application.
            They ensure your content is readable and well-structured, regardless of screen size.
          </p>
          <p className="text-black/70 leading-relaxed">
            By using different container sizes for different sections, you can create visual
            hierarchy and guide the user's attention to what matters most.
          </p>
        </article>
      </Container>
    </div>
  ),
};

export const Nested: Story = {
  render: () => (
    <Container maxWidth="xl" padding="lg" className="bg-black/5">
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Outer Container (XL)</h2>
        
        <Container maxWidth="lg" padding="md" className="bg-black/10">
          <div className="py-6">
            <h3 className="text-xl font-bold mb-4 text-center">Middle Container (LG)</h3>
            
            <Container maxWidth="md" padding="sm" className="bg-black/20">
              <div className="py-4">
                <h4 className="text-lg font-bold mb-2 text-center">Inner Container (MD)</h4>
                <p className="text-center text-sm">
                  Containers can be nested to create complex layouts with different constraints.
                </p>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </Container>
  ),
};