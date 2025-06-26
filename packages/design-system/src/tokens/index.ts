export * from './colors';
export * from './spacing';
export * from './typography';
export * from './animations';

// Re-export as a single tokens object
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { animations } from './animations';

export const tokens = {
  colors,
  spacing,
  typography,
  animations,
} as const;

export type Tokens = typeof tokens;