import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const labelVariants = cva(
  'text-xs font-medium uppercase tracking-wider transition-colors duration-200',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      state: {
        default: 'text-black',
        disabled: 'text-black/50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      size: 'sm',
      state: 'default',
    },
  }
);

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, state, required, disabled, children, ...props }, ref) => {
    return (
      <label
        className={cn(
          labelVariants({ 
            size, 
            state: disabled ? 'disabled' : state,
            className 
          })
        )}
        ref={ref}
        {...props}
      >
        {children}
        {required && (
          <span className="ml-1 text-black" aria-label="required">
            *
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = 'Label';

export { Label, labelVariants };