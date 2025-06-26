import React from 'react';
import { cn } from '../../utils/cn';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns (1-12)
   * @default 1
   */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * Gap between grid items (using design tokens)
   * @default 4
   */
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24;
  /**
   * Responsive column configuration
   */
  responsive?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  /**
   * Auto-fit or auto-fill with minmax
   */
  autoFit?: boolean;
  autoFill?: boolean;
  /**
   * Minimum column width when using auto-fit or auto-fill
   */
  minColumnWidth?: string;
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

const columnClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

const gapClasses = {
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
  9: 'gap-9',
  10: 'gap-10',
  11: 'gap-11',
  12: 'gap-12',
  14: 'gap-14',
  16: 'gap-16',
  20: 'gap-20',
  24: 'gap-24',
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ 
    className, 
    columns = 1, 
    gap = 4, 
    responsive, 
    autoFit, 
    autoFill, 
    minColumnWidth = '250px',
    children, 
    style,
    ...props 
  }, ref) => {
    const responsiveClasses = responsive
      ? [
          responsive.sm && `sm:grid-cols-${responsive.sm}`,
          responsive.md && `md:grid-cols-${responsive.md}`,
          responsive.lg && `lg:grid-cols-${responsive.lg}`,
          responsive.xl && `xl:grid-cols-${responsive.xl}`,
        ].filter(Boolean).join(' ')
      : '';

    const gridStyle = (autoFit || autoFill) 
      ? {
          ...style,
          gridTemplateColumns: `repeat(${autoFit ? 'auto-fit' : 'auto-fill'}, minmax(${minColumnWidth}, 1fr))`,
        }
      : style;

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          !autoFit && !autoFill && columnClasses[columns],
          gapClasses[gap],
          responsiveClasses,
          className
        )}
        style={gridStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';