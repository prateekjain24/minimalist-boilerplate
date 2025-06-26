'use client';

import { useState } from 'react';
import {
  // Typography & Text
  Text,
  Heading,
  Label,
  Badge,
  
  // Form Components
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Form,
  
  // Core Components
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  
  // Layout & Structure
  Container,
  Separator,
  Stack,
  Grid,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  
  // Feedback & Navigation
  Alert,
  Progress,
  Spinner,
  Skeleton,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Pagination,
  
  // Overlay & Interactive
  Modal,
  Drawer,
  Tooltip,
  Dropdown,
  Avatar,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  IconButton,
  ButtonGroup,
  Chip,
} from '@repo/design-system';

export default function HomePage() {
  // State for interactive components
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('tab1');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleShowToast = () => {
    // For now, using alert as Toast requires ToastProvider setup
    alert('This is a toast notification!');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section border-b border-black">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h1" className="mb-4">
              Minimalist Design System Showcase
            </Heading>
            <Text size="lg" className="text-black/60">
              A comprehensive showcase of all 40+ components
            </Text>
          </div>
        </Container>
      </section>

      {/* Typography & Text Components */}
      <section className="section">
        <Container>
          <Heading as="h2" className="mb-8">Typography & Text Components</Heading>
          
          <div className="space-y-8">
            {/* Text Component */}
            <Card>
              <CardHeader>
                <CardTitle>Text Component</CardTitle>
                <CardDescription>Various text sizes and styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Text size="xs">Extra small text (xs)</Text>
                <Text size="sm">Small text (sm)</Text>
                <Text size="base">Base text (base)</Text>
                <Text size="lg">Large text (lg)</Text>
                <Text size="xl">Extra large text (xl)</Text>
                <Text size="2xl">2X large text (2xl)</Text>
                <Text weight="medium" className="mt-4">Medium weight text</Text>
                <Text weight="semibold">Semibold weight text</Text>
                <Text weight="bold">Bold weight text</Text>
              </CardContent>
            </Card>

            {/* Heading Component */}
            <Card>
              <CardHeader>
                <CardTitle>Heading Component</CardTitle>
                <CardDescription>Semantic heading levels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Heading as="h1">Heading Level 1</Heading>
                <Heading as="h2">Heading Level 2</Heading>
                <Heading as="h3">Heading Level 3</Heading>
                <Heading as="h4">Heading Level 4</Heading>
                <Heading as="h5">Heading Level 5</Heading>
                <Heading as="h6">Heading Level 6</Heading>
              </CardContent>
            </Card>

            {/* Label & Badge */}
            <Card>
              <CardHeader>
                <CardTitle>Label & Badge Components</CardTitle>
                <CardDescription>Labels and status badges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="example">Form Label</Label>
                    <Input id="example" placeholder="Input with label" className="mt-2" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default Badge</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="error">Error</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <Separator />

      {/* Form Components */}
      <section className="section">
        <Container>
          <Heading as="h2" className="mb-8">Form Components</Heading>
          
          <Grid cols={2} gap={8}>
            {/* Input & Textarea */}
            <Card>
              <CardHeader>
                <CardTitle>Input & Textarea</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input 
                    label="Text Input" 
                    placeholder="Enter text..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <div>
                  <Input 
                    label="Email Input" 
                    type="email" 
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <Input 
                    label="Input with Error" 
                    error="This field is required"
                    placeholder="Error state"
                  />
                </div>
                <div>
                  <Textarea 
                    label="Textarea"
                    placeholder="Enter multiple lines..."
                    rows={4}
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Select & Switches */}
            <Card>
              <CardHeader>
                <CardTitle>Select & Toggle Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select 
                  label="Select Option"
                  placeholder="Choose an option"
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' }
                  ]}
                />
                
                <div className="space-y-2">
                  <Checkbox 
                    label="Checkbox Option"
                    checked={checkboxChecked}
                    onChange={(e) => setCheckboxChecked(e.target.checked)}
                  />
                  <Checkbox label="Disabled Checkbox" disabled />
                  <Checkbox label="Checked & Disabled" checked disabled />
                </div>

                <RadioGroup value={radioValue} onChange={setRadioValue}>
                  <Radio value="option1" label="Radio Option 1" />
                  <Radio value="option2" label="Radio Option 2" />
                  <Radio value="option3" label="Radio Option 3" />
                </RadioGroup>

                <div className="space-y-2">
                  <Switch 
                    label="Switch Control"
                    checked={switchChecked}
                    onChange={setSwitchChecked}
                  />
                  <Switch label="Disabled Switch" disabled />
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* Buttons */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Button Component</CardTitle>
              <CardDescription>All button variants and sizes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="minimal">Minimal</Button>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button disabled>Disabled</Button>
                  <IconButton aria-label="Icon button">
                    <span>★</span>
                  </IconButton>
                  <ButtonGroup>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                  </ButtonGroup>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>

      <Separator />

      {/* Layout & Structure */}
      <section className="section">
        <Container>
          <Heading as="h2" className="mb-8">Layout & Structure Components</Heading>
          
          <div className="space-y-8">
            {/* Container */}
            <Card>
              <CardHeader>
                <CardTitle>Container Component</CardTitle>
                <CardDescription>Responsive container with max-width</CardDescription>
              </CardHeader>
              <CardContent>
                <Container size="sm" className="bg-black/5 p-4 mb-4">
                  <Text>Small Container</Text>
                </Container>
                <Container size="md" className="bg-black/5 p-4 mb-4">
                  <Text>Medium Container</Text>
                </Container>
                <Container size="lg" className="bg-black/5 p-4">
                  <Text>Large Container</Text>
                </Container>
              </CardContent>
            </Card>

            {/* Stack & Grid */}
            <Card>
              <CardHeader>
                <CardTitle>Stack & Grid Components</CardTitle>
                <CardDescription>Flexible layout utilities</CardDescription>
              </CardHeader>
              <CardContent>
                <Text className="mb-4 font-semibold">Stack (Vertical)</Text>
                <Stack spacing={4} className="mb-8">
                  <div className="bg-black/10 p-4">Stack Item 1</div>
                  <div className="bg-black/10 p-4">Stack Item 2</div>
                  <div className="bg-black/10 p-4">Stack Item 3</div>
                </Stack>
                
                <Text className="mb-4 font-semibold">Grid (3 columns)</Text>
                <Grid cols={3} gap={4}>
                  <div className="bg-black/10 p-4">Grid Item 1</div>
                  <div className="bg-black/10 p-4">Grid Item 2</div>
                  <div className="bg-black/10 p-4">Grid Item 3</div>
                  <div className="bg-black/10 p-4">Grid Item 4</div>
                  <div className="bg-black/10 p-4">Grid Item 5</div>
                  <div className="bg-black/10 p-4">Grid Item 6</div>
                </Grid>
              </CardContent>
            </Card>

            {/* List */}
            <Card>
              <CardHeader>
                <CardTitle>List Component</CardTitle>
                <CardDescription>Ordered and unordered lists</CardDescription>
              </CardHeader>
              <CardContent>
                <Grid cols={2} gap={8}>
                  <div>
                    <Text className="mb-2 font-semibold">Unordered List</Text>
                    <List>
                      <ListItem>First item</ListItem>
                      <ListItem>Second item</ListItem>
                      <ListItem>Third item</ListItem>
                    </List>
                  </div>
                  <div>
                    <Text className="mb-2 font-semibold">Ordered List</Text>
                    <List ordered>
                      <ListItem>First step</ListItem>
                      <ListItem>Second step</ListItem>
                      <ListItem>Third step</ListItem>
                    </List>
                  </div>
                </Grid>
              </CardContent>
            </Card>

            {/* Accordion */}
            <Card>
              <CardHeader>
                <CardTitle>Accordion Component</CardTitle>
                <CardDescription>Collapsible content panels</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is this design system?</AccordionTrigger>
                    <AccordionContent>
                      A minimalist design system built with modern web technologies,
                      focusing on clean aesthetics and functional beauty.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I use these components?</AccordionTrigger>
                    <AccordionContent>
                      Import components from @repo/design-system and use them in your
                      React applications. All components support TypeScript.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Are the components accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes, all components are built with accessibility in mind,
                      including proper ARIA attributes and keyboard navigation.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <Separator />

      {/* Feedback & Navigation */}
      <section className="section">
        <Container>
          <Heading as="h2" className="mb-8">Feedback & Navigation Components</Heading>
          
          <div className="space-y-8">
            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alert Component</CardTitle>
                <CardDescription>Various alert types and styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>Default alert message</Alert>
                <Alert variant="success">Success! Your changes have been saved.</Alert>
                <Alert variant="warning">Warning: Please review before proceeding.</Alert>
                <Alert variant="error">Error: Something went wrong.</Alert>
                <Alert 
                  variant="info"
                  action={
                    <Button size="sm" variant="minimal">
                      Learn more
                    </Button>
                  }
                >
                  Info: New features are available
                </Alert>
              </CardContent>
            </Card>

            {/* Progress & Loading */}
            <Card>
              <CardHeader>
                <CardTitle>Progress & Loading States</CardTitle>
                <CardDescription>Progress bars and loading indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Progress value={25} />
                  <Progress value={50} />
                  <Progress value={75} />
                  <Progress value={100} />
                </div>
                <div className="flex items-center gap-4">
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                  <Text>Loading...</Text>
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card>
              <CardHeader>
                <CardTitle>Navigation Components</CardTitle>
                <CardDescription>Links, breadcrumbs, and tabs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Link href="#">Default Link</Link>
                  <Link href="#" variant="underline">Underlined Link</Link>
                  <Link href="#" external>External Link</Link>
                </div>
                
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link href="#">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link href="#">Products</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Design System</BreadcrumbItem>
                </Breadcrumb>

                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                  <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <Text>Content for Tab 1</Text>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <Text>Content for Tab 2</Text>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <Text>Content for Tab 3</Text>
                  </TabsContent>
                </Tabs>

                <div className="space-y-2">
                  <Text className="font-semibold">Pagination</Text>
                  <Pagination 
                    currentPage={1}
                    totalPages={10}
                    onPageChange={(page) => console.log('Page:', page)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <Separator />

      {/* Overlay & Interactive */}
      <section className="section">
        <Container>
          <Heading as="h2" className="mb-8">Overlay & Interactive Components</Heading>
          
          <Grid cols={2} gap={8}>
            {/* Overlays */}
            <Card>
              <CardHeader>
                <CardTitle>Overlay Components</CardTitle>
                <CardDescription>Modals, drawers, and tooltips</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                  <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
                  <Button onClick={handleShowToast}>Show Toast</Button>
                </div>
                
                <div className="flex gap-4">
                  <Tooltip content="This is a tooltip">
                    <Button variant="secondary">Hover me</Button>
                  </Tooltip>
                  
                  <Dropdown
                    trigger={<Button variant="secondary">Dropdown ▼</Button>}
                  >
                    <div className="p-2 space-y-1">
                      <button className="block w-full text-left px-3 py-2 hover:bg-black/5">
                        Option 1
                      </button>
                      <button className="block w-full text-left px-3 py-2 hover:bg-black/5">
                        Option 2
                      </button>
                      <button className="block w-full text-left px-3 py-2 hover:bg-black/5">
                        Option 3
                      </button>
                    </div>
                  </Dropdown>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Elements */}
            <Card>
              <CardHeader>
                <CardTitle>Interactive Elements</CardTitle>
                <CardDescription>Avatar, chips, and more</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Avatar src="/avatar.jpg" alt="User" size="sm" />
                  <Avatar src="/avatar.jpg" alt="User" size="md" />
                  <Avatar src="/avatar.jpg" alt="User" size="lg" />
                  <Avatar alt="User" size="md" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Chip>Default Chip</Chip>
                  <Chip variant="primary">Primary Chip</Chip>
                  <Chip variant="secondary">Secondary Chip</Chip>
                  <Chip onDelete={() => console.log('Delete')}>Deletable</Chip>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* Table */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Table Component</CardTitle>
              <CardDescription>Data table with sorting</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Usage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Button</TableCell>
                    <TableCell>Core</TableCell>
                    <TableCell><Badge variant="success">Stable</Badge></TableCell>
                    <TableCell>High</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Modal</TableCell>
                    <TableCell>Overlay</TableCell>
                    <TableCell><Badge variant="success">Stable</Badge></TableCell>
                    <TableCell>Medium</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Toast</TableCell>
                    <TableCell>Feedback</TableCell>
                    <TableCell><Badge variant="warning">Beta</Badge></TableCell>
                    <TableCell>Low</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Modals and Overlays */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <Heading as="h3" className="mb-4">Modal Title</Heading>
          <Text className="mb-6">
            This is a modal dialog. It can contain any content and provides
            a focused experience for the user.
          </Text>
          <div className="flex gap-2 justify-end">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        position="right"
      >
        <div className="p-6">
          <Heading as="h3" className="mb-4">Drawer Title</Heading>
          <Text className="mb-6">
            This is a drawer component. It slides in from the edge of the
            screen and can contain forms, navigation, or any other content.
          </Text>
          <Button onClick={() => setIsDrawerOpen(false)}>
            Close Drawer
          </Button>
        </div>
      </Drawer>

    </main>
  );
}