import React from 'react';
import { cn } from '../../lib/utils';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  /**
   * Type of list
   * @default 'unordered'
   */
  variant?: 'ordered' | 'unordered';
  /**
   * List style
   * @default 'disc' for unordered, 'decimal' for ordered
   */
  styleType?: 'none' | 'disc' | 'decimal' | 'circle' | 'square';
  /**
   * Spacing between list items
   * @default 2
   */
  spacing?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Children elements (should be ListItem components)
   */
  children?: React.ReactNode;
}

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

const spacingClasses = {
  1: 'space-y-1',
  2: 'space-y-2',
  3: 'space-y-3',
  4: 'space-y-4',
  5: 'space-y-5',
  6: 'space-y-6',
};

const styleTypeClasses = {
  none: 'list-none',
  disc: 'list-disc',
  decimal: 'list-decimal',
  circle: 'list-[circle]',
  square: 'list-[square]',
};

export const List = React.forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  ({ 
    className, 
    variant = 'unordered', 
    styleType, 
    spacing = 2, 
    children, 
    ...props 
  }, ref) => {
    const Component = variant === 'ordered' ? 'ol' : 'ul';
    const defaultStyleType = variant === 'ordered' ? 'decimal' : 'disc';
    const appliedStyleType = styleType || defaultStyleType;

    return (
      <Component
        ref={ref as any}
        className={cn(
          styleTypeClasses[appliedStyleType],
          spacingClasses[spacing],
          appliedStyleType !== 'none' && 'pl-6',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

List.displayName = 'List';

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn('text-black', className)}
        {...props}
      >
        {children}
      </li>
    );
  }
);

ListItem.displayName = 'ListItem';