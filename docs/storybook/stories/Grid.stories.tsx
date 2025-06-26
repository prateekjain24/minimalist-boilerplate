import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Card, CardContent, Button } from '@repo/design-system';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: 'Number of columns',
    },
    gap: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24],
      description: 'Gap between grid items',
    },
    autoFit: {
      control: 'boolean',
      description: 'Auto-fit columns with minmax',
    },
    autoFill: {
      control: 'boolean',
      description: 'Auto-fill columns with minmax',
    },
    minColumnWidth: {
      control: 'text',
      description: 'Minimum column width for auto-fit/auto-fill',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicGrid: Story = {
  args: {
    columns: 3,
    gap: 4,
    children: (
      <>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="p-4 border border-black text-center">
            Item {i + 1}
          </div>
        ))}
      </>
    ),
  },
};

export const ColumnVariants: Story = {
  render: () => (
    <div className="space-y-8">
      {[1, 2, 3, 4, 6, 12].map((columns) => (
        <div key={columns}>
          <h3 className="font-bold mb-4">Columns: {columns}</h3>
          <Grid columns={columns as any} gap={4}>
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="p-4 border border-black bg-black/5 text-center">
                {i + 1}
              </div>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};

export const GapVariants: Story = {
  render: () => (
    <div className="space-y-8">
      {[1, 2, 4, 8, 12].map((gap) => (
        <div key={gap}>
          <h3 className="font-bold mb-4">Gap: {gap}</h3>
          <Grid columns={3} gap={gap as any}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="p-4 border border-black bg-black/5 text-center">
                Item {i + 1}
              </div>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};

export const ResponsiveGrid: Story = {
  args: {
    columns: 1,
    gap: 4,
    responsive: {
      sm: 2,
      md: 3,
      lg: 4,
      xl: 6,
    },
    children: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="p-8 border border-black text-center">
            <div className="text-xs text-black/60 mb-2">Responsive</div>
            <div className="font-bold">Item {i + 1}</div>
          </div>
        ))}
      </>
    ),
  },
};

export const AutoFitGrid: Story = {
  args: {
    autoFit: true,
    minColumnWidth: '200px',
    gap: 6,
    children: (
      <>
        {Array.from({ length: 8 }, (_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">Card {i + 1}</h3>
              <p className="text-sm text-black/60">
                Auto-fit creates as many columns as will fit.
              </p>
            </CardContent>
          </Card>
        ))}
      </>
    ),
  },
};

export const AutoFillGrid: Story = {
  args: {
    autoFill: true,
    minColumnWidth: '200px',
    gap: 6,
    children: (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">Card {i + 1}</h3>
              <p className="text-sm text-black/60">
                Auto-fill creates columns even if empty.
              </p>
            </CardContent>
          </Card>
        ))}
      </>
    ),
  },
};

export const ProductGrid: Story = {
  render: () => (
    <Grid columns={1} gap={8} responsive={{ sm: 2, md: 3, lg: 4 }}>
      {Array.from({ length: 8 }, (_, i) => (
        <Card key={i} className="overflow-hidden">
          <div className="aspect-square bg-black/5" />
          <CardContent className="p-4">
            <h3 className="font-bold mb-1">Product {i + 1}</h3>
            <p className="text-sm text-black/60 mb-3">
              Minimal product description
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">$99.00</span>
              <Button size="sm" variant="primary">Buy</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </Grid>
  ),
};

export const DashboardLayout: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      
      {/* Stats Grid */}
      <Grid columns={1} gap={4} responsive={{ sm: 2, lg: 4 }}>
        {[
          { label: 'Total Sales', value: '$12,345' },
          { label: 'New Users', value: '234' },
          { label: 'Active Sessions', value: '45' },
          { label: 'Conversion Rate', value: '3.4%' },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <p className="text-sm text-black/60 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </Grid>
      
      {/* Main Content Grid */}
      <Grid columns={1} gap={6} responsive={{ lg: 3 }}>
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Sales Chart</h3>
              <div className="h-64 bg-black/5 flex items-center justify-center">
                <span className="text-black/40">Chart Placeholder</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="font-bold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-sm">Activity item {i + 1}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </div>
  ),
};

export const ImageGallery: Story = {
  render: () => (
    <Grid autoFit minColumnWidth="150px" gap={2}>
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className="aspect-square bg-black/10 hover:bg-black/20 transition-colors cursor-pointer">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-black/40">{i + 1}</span>
          </div>
        </div>
      ))}
    </Grid>
  ),
};

export const MixedSizes: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-4">
      <Card className="col-span-6 md:col-span-4">
        <CardContent className="p-6 h-48">
          <h3 className="font-bold">Wide Card</h3>
          <p className="text-sm text-black/60">Spans 4 columns on medium+ screens</p>
        </CardContent>
      </Card>
      
      <Card className="col-span-6 md:col-span-2">
        <CardContent className="p-6 h-48">
          <h3 className="font-bold">Narrow Card</h3>
          <p className="text-sm text-black/60">Spans 2 columns</p>
        </CardContent>
      </Card>
      
      <Card className="col-span-6 md:col-span-3">
        <CardContent className="p-6 h-32">
          <h3 className="font-bold">Half Width</h3>
        </CardContent>
      </Card>
      
      <Card className="col-span-6 md:col-span-3">
        <CardContent className="p-6 h-32">
          <h3 className="font-bold">Half Width</h3>
        </CardContent>
      </Card>
      
      <Card className="col-span-6">
        <CardContent className="p-6">
          <h3 className="font-bold">Full Width Card</h3>
          <p className="text-sm text-black/60">Spans all 6 columns</p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const NestedGrids: Story = {
  render: () => (
    <Grid columns={2} gap={6}>
      <Card>
        <CardContent className="p-6">
          <h3 className="font-bold mb-4">Nested Grid 1</h3>
          <Grid columns={2} gap={3}>
            <div className="p-3 border border-black/20 text-center text-sm">A</div>
            <div className="p-3 border border-black/20 text-center text-sm">B</div>
            <div className="p-3 border border-black/20 text-center text-sm">C</div>
            <div className="p-3 border border-black/20 text-center text-sm">D</div>
          </Grid>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="font-bold mb-4">Nested Grid 2</h3>
          <Grid columns={3} gap={2}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="p-2 border border-black/20 text-center text-xs">
                {i + 1}
              </div>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  ),
};