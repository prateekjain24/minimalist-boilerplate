import React from 'react';
import { cn } from '../../utils/cn';

const progressSizes = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  size?: keyof typeof progressSizes;
  indeterminate?: boolean;
  label?: string;
  showLabel?: boolean;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      size = 'md',
      indeterminate = false,
      label,
      showLabel = false,
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));
    const ariaLabel = label || `${clampedValue}% complete`;

    return (
      <div className={cn('w-full', className)} ref={ref} {...props}>
        {showLabel && (
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-gray-700">{label || 'Progress'}</span>
            {!indeterminate && (
              <span className="text-gray-600">{clampedValue}%</span>
            )}
          </div>
        )}
        <div
          role="progressbar"
          aria-label={ariaLabel}
          aria-valuenow={indeterminate ? undefined : clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          className={cn(
            'relative w-full overflow-hidden rounded-full bg-gray-200',
            progressSizes[size]
          )}
        >
          <div
            className={cn(
              'h-full rounded-full bg-black transition-all duration-300',
              indeterminate && 'animate-progress-indeterminate'
            )}
            style={
              !indeterminate
                ? { width: `${clampedValue}%` }
                : { width: '30%' }
            }
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';