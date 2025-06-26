import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/tokens/index.ts'],
  format: ['cjs', 'esm'],
  dts: false, // Temporarily disable TypeScript declarations
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
});