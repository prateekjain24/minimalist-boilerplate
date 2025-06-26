export const colors = {
  black: {
    DEFAULT: '#000000',
    90: '#1A1A1A',
    80: '#333333',
    70: '#4D4D4D',
    60: '#666666',
    50: '#808080',
    40: '#999999',
    30: '#B3B3B3',
    20: '#CCCCCC',
    10: '#E6E6E6',
  },
  white: {
    DEFAULT: '#FFFFFF',
    90: '#FAFAFA',
    80: '#F5F5F5',
    70: '#F0F0F0',
    60: '#E6E6E6',
    50: '#D9D9D9',
    40: '#CCCCCC',
    30: '#BFBFBF',
    20: '#B3B3B3',
    10: '#A6A6A6',
  },
  // Semantic colors for CSS variables
  semantic: {
    background: {
      primary: 'var(--color-white)',
      secondary: 'var(--color-white-80)',
      tertiary: 'var(--color-white-60)',
      inverse: 'var(--color-black)',
    },
    text: {
      primary: 'var(--color-black)',
      secondary: 'var(--color-black-60)',
      tertiary: 'var(--color-black-40)',
      inverse: 'var(--color-white)',
    },
    border: {
      primary: 'var(--color-black)',
      secondary: 'var(--color-black-20)',
      tertiary: 'var(--color-black-10)',
    },
  },
} as const;

export type Colors = typeof colors;