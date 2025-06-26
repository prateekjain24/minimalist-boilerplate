import * as React from 'react';
import { cn } from '../../lib/utils';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, error, disabled, ...props }, ref) => {
    const id = React.useId();
    
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
            type="radio"
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
              'w-5 h-5 border-2 border-black bg-white rounded-full',
              'peer-checked:border-black',
              'peer-focus:outline peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-black',
              'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
              error && 'border-red-500 peer-checked:border-red-500',
              'transition-colors duration-200'
            )}
          >
            <div
              className={cn(
                'absolute inset-1 bg-black rounded-full opacity-0 peer-checked:opacity-100',
                'transition-opacity duration-200',
                error && 'bg-red-500'
              )}
            />
          </div>
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

Radio.displayName = 'Radio';

// RadioGroup Component
export interface RadioGroupProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ name, value, onChange, error, children, className }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-2', className)}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === Radio) {
            return React.cloneElement(child, {
              ...child.props,
              name,
              checked: child.props.value === value,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked && onChange) {
                  onChange(e.target.value);
                }
                child.props.onChange?.(e);
              },
              error: error || child.props.error,
            });
          }
          return child;
        })}
        {error && (
          <p className="mt-2 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export { Radio, RadioGroup };