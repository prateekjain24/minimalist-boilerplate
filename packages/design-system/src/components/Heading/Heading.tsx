import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const headingVariants = cva(
  'text-black transition-colors duration-200',
  {
    variants: {
      level: {
        h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
        h2: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
        h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
        h4: 'text-xl md:text-2xl lg:text-3xl font-semibold',
        h5: 'text-lg md:text-xl lg:text-2xl font-medium',
        h6: 'text-base md:text-lg lg:text-xl font-medium',
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
    },
    defaultVariants: {
      level: 'h1',
      align: 'left',
    },
  }
);

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
  children?: React.ReactNode;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, weight, align, as, ...props }, ref) => {
    // Use 'as' prop if provided, otherwise use 'level' prop
    const Component = as || level || 'h1';
    
    // If weight is not specified, use the default weight from the level variant
    const finalClassName = cn(
      headingVariants({ level: level || Component as HeadingLevel, align }),
      weight && headingVariants({ weight }),
      className
    );
    
    return (
      <Component
        className={finalClassName}
        ref={ref}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };