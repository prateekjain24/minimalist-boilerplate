import React from 'react';
import { cn } from '../../utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  shape?: 'line' | 'rectangle' | 'circle';
  width?: string | number;
  height?: string | number;
  count?: number;
  animation?: 'pulse' | 'none';
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      shape = 'rectangle',
      width,
      height,
      count = 1,
      animation = 'pulse',
      style,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'bg-gray-200',
      animation === 'pulse' && 'animate-pulse',
      shape === 'circle' && 'rounded-full',
      shape === 'line' && 'rounded',
      shape === 'rectangle' && 'rounded'
    );

    const defaultDimensions = {
      line: { width: '100%', height: '1rem' },
      rectangle: { width: '100%', height: '4rem' },
      circle: { width: '3rem', height: '3rem' },
    };

    const dimensions = {
      width: width || defaultDimensions[shape].width,
      height: height || defaultDimensions[shape].height,
    };

    if (count === 1) {
      return (
        <div
          ref={ref}
          className={cn(baseClasses, className)}
          style={{
            width: dimensions.width,
            height: dimensions.height,
            ...style,
          }}
          aria-hidden="true"
          {...props}
        />
      );
    }

    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={baseClasses}
            style={{
              width: dimensions.width,
              height: dimensions.height,
              ...style,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }
);

Skeleton.displayName = 'Skeleton';