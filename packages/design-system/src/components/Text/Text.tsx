import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const textVariants = cva(
  'transition-colors duration-200',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
      color: {
        primary: 'text-black',
        secondary: 'text-black/70',
        tertiary: 'text-black/50',
        inverse: 'text-white',
      },
    },
    defaultVariants: {
      size: 'base',
      weight: 'normal',
      align: 'left',
      color: 'primary',
    },
  }
);

type TextElement = 'p' | 'span' | 'div' | 'strong' | 'em' | 'small';

export interface TextProps<T extends TextElement = 'p'>
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textVariants> {
  as?: T;
  children?: React.ReactNode;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, size, weight, align, color, as = 'p', ...props }, ref) => {
    const Component = as;
    
    return (
      <Component
        className={cn(textVariants({ size, weight, align, color, className }))}
        ref={ref as any}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text, textVariants };