import React, { type ReactElement, cloneElement } from 'react';
import { cn } from '../../utils/cn';

interface ButtonGroupProps {
  children: ReactElement[];
  orientation?: 'horizontal' | 'vertical';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  orientation = 'horizontal',
  size,
  variant,
  className
}) => {
  const orientationClasses = {
    horizontal: 'flex-row',
    vertical: 'flex-col'
  };

  const borderRadiusClasses = {
    horizontal: {
      first: 'rounded-r-none',
      middle: 'rounded-none',
      last: 'rounded-l-none'
    },
    vertical: {
      first: 'rounded-b-none',
      middle: 'rounded-none',
      last: 'rounded-t-none'
    }
  };

  const borderClasses = {
    horizontal: {
      notLast: 'border-r-0'
    },
    vertical: {
      notLast: 'border-b-0'
    }
  };

  return (
    <div
      className={cn(
        'inline-flex',
        orientationClasses[orientation],
        className
      )}
      role="group"
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        const isFirst = index === 0;
        const isLast = index === children.length - 1;
        const isMiddle = !isFirst && !isLast;

        let radiusClass = '';
        if (isFirst) {
          radiusClass = borderRadiusClasses[orientation].first;
        } else if (isMiddle) {
          radiusClass = borderRadiusClasses[orientation].middle;
        } else if (isLast) {
          radiusClass = borderRadiusClasses[orientation].last;
        }

        const borderClass = !isLast ? borderClasses[orientation].notLast : '';

        // Clone the button with additional classes and inherited props
        return cloneElement(child as ReactElement<any>, {
          className: cn(
            child.props.className,
            radiusClass,
            borderClass,
            // Remove focus ring offset for connected buttons
            'focus:ring-offset-0'
          ),
          size: child.props.size || size,
          variant: child.props.variant || variant
        });
      })}
    </div>
  );
};