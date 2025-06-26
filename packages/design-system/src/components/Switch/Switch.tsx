import * as React from 'react';
import { cn } from '../../lib/utils';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, size = 'md', disabled, ...props }, ref) => {
    const id = React.useId();
    
    const sizeClasses = {
      sm: {
        track: 'w-8 h-4',
        thumb: 'w-3 h-3',
        translate: 'peer-checked:translate-x-4',
      },
      md: {
        track: 'w-11 h-6',
        thumb: 'w-5 h-5',
        translate: 'peer-checked:translate-x-5',
      },
      lg: {
        track: 'w-14 h-8',
        thumb: 'w-7 h-7',
        translate: 'peer-checked:translate-x-6',
      },
    };
    
    const sizes = sizeClasses[size];
    
    return (
      <label
        htmlFor={id}
        className={cn(
          'flex items-center cursor-pointer',
          disabled && 'cursor-not-allowed opacity-50'
        )}
      >
        <div className="relative">
          <input
            id={id}
            type="checkbox"
            ref={ref}
            disabled={disabled}
            className={cn(
              'sr-only peer',
              className
            )}
            {...props}
          />
          <div
            className={cn(
              'bg-black/20 peer-checked:bg-black',
              'peer-focus:outline peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-black',
              'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
              'transition-colors duration-200',
              sizes.track
            )}
          />
          <div
            className={cn(
              'absolute left-0.5 top-0.5 bg-white border-2 border-black',
              'transition-transform duration-200',
              sizes.thumb,
              sizes.translate
            )}
          />
        </div>
        {label && (
          <span className={cn(
            'ml-3 text-sm select-none',
            disabled && 'opacity-50'
          )}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };