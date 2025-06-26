import React from 'react';
import { cn } from '../../utils/cn';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Direction of the stack
   * @default 'vertical'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Spacing between items (using design tokens 1-24)
   * @default 4
   */
  spacing?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24;
  /**
   * Alignment of items along the cross axis
   */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /**
   * Justification of items along the main axis
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /**
   * Whether items should wrap
   * @default false
   */
  wrap?: boolean;
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

const spacingClasses = {
  horizontal: {
    1: 'space-x-1',
    2: 'space-x-2',
    3: 'space-x-3',
    4: 'space-x-4',
    5: 'space-x-5',
    6: 'space-x-6',
    7: 'space-x-7',
    8: 'space-x-8',
    9: 'space-x-9',
    10: 'space-x-10',
    11: 'space-x-11',
    12: 'space-x-12',
    14: 'space-x-14',
    16: 'space-x-16',
    20: 'space-x-20',
    24: 'space-x-24',
  },
  vertical: {
    1: 'space-y-1',
    2: 'space-y-2',
    3: 'space-y-3',
    4: 'space-y-4',
    5: 'space-y-5',
    6: 'space-y-6',
    7: 'space-y-7',
    8: 'space-y-8',
    9: 'space-y-9',
    10: 'space-y-10',
    11: 'space-y-11',
    12: 'space-y-12',
    14: 'space-y-14',
    16: 'space-y-16',
    20: 'space-y-20',
    24: 'space-y-24',
  },
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ 
    className, 
    direction = 'vertical', 
    spacing = 4, 
    align, 
    justify, 
    wrap = false, 
    children, 
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          direction === 'horizontal' ? 'flex-row' : 'flex-col',
          spacing && spacingClasses[direction][spacing],
          align && alignClasses[align],
          justify && justifyClasses[justify],
          wrap && 'flex-wrap',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';