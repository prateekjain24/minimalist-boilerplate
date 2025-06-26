import type { Preview } from '@storybook/react';
import '@repo/design-system/styles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#FFFFFF' },
        { name: 'black', value: '#000000' },
        { name: 'gray', value: '#F5F5F5' },
      ],
    },
  },
};

export default preview;