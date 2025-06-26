import * as React from 'react';
import { cn } from '../../lib/utils';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  indeterminate?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, indeterminate, disabled, ...props }, ref) => {
    const id = React.useId();
    const checkboxRef = React.useRef<HTMLInputElement>(null);
    
    React.useImperativeHandle(ref, () => checkboxRef.current!);
    
    React.useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate || false;
      }
    }, [indeterminate]);
    
    return (
      <div className="w-full">
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
              ref={checkboxRef}
              disabled={disabled}
              className={cn(
                'sr-only peer',
                className
              )}
              {...props}
            />
            <div
              className={cn(
                'w-5 h-5 border-2 border-black bg-white',
                'peer-checked:bg-black peer-checked:border-black',
                'peer-focus:outline peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-black',
                'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
                error && 'border-red-500 peer-checked:border-red-500 peer-checked:bg-red-500',
                'transition-colors duration-200'
              )}
            >
              {/* Checkmark */}
              <svg
                className={cn(
                  'absolute inset-0 w-full h-full p-1 text-white opacity-0 peer-checked:opacity-100',
                  'transition-opacity duration-200'
                )}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              {/* Indeterminate line */}
              {indeterminate && (
                <div className="absolute inset-x-1.5 top-1/2 -translate-y-1/2 h-0.5 bg-white" />
              )}
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
        {error && (
          <p className="mt-2 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };