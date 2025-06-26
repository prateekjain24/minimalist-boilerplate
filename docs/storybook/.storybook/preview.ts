import type { Preview } from '@storybook/react-vite';
import '@repo/design-system/styles';
import '../styles/storybook.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#FFFFFF' },
        { name: 'black', value: '#000000' },
        { name: 'gray', value: '#F5F5F5' },
        { name: 'light gray', value: '#FAFAFA' },
      ],
    },
    docs: {
      toc: true,
      canvas: {
        sourceState: 'shown',
      },
    },
    layout: 'centered',
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '812px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          ['Introduction', 'Getting Started'],
          'Components',
          [
            'Button',
            'Typography & Text',
            ['Text', 'Heading', 'Label', 'Badge'],
            'Form',
            ['Input', 'Textarea', 'Select', 'Checkbox', 'Radio', 'Switch', 'Form'],
            'Layout & Structure',
            ['Container', 'Separator', 'Stack', 'Grid', 'List', 'Accordion'],
            'Feedback & Navigation',
            ['Alert', 'Toast', 'Progress', 'Spinner', 'Skeleton', 'Link', 'Breadcrumb', 'Tabs', 'Pagination'],
            'Overlay & Interactive',
            ['Modal', 'Drawer', 'Tooltip', 'Dropdown', 'Avatar', 'Table', 'IconButton', 'ButtonGroup', 'Chip'],
          ],
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'circlehollow' },
          { value: 'dark', title: 'Dark', icon: 'circle' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;