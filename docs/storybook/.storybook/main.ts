import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from '@storybook/react-vite';
import react from '@vitejs/plugin-react';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-docs")],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  viteFinal: async (config) => {
    // Remove any existing React plugins
    config.plugins = config.plugins?.filter(
      (plugin) => !plugin || plugin.name !== 'vite:react-babel'
    );
    
    // Add React plugin with automatic JSX runtime
    config.plugins?.push(
      react({
        jsxRuntime: 'automatic',
      })
    );
    
    return config;
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}