import * as React from 'react';
import { cn } from '../../lib/utils';

// Form Component
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn('space-y-6', className)}
        {...props}
      >
        {children}
      </form>
    );
  }
);

Form.displayName = 'Form';

// FormField Component
export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('space-y-2', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

// FormLabel Component
export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, required, disabled, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'block text-xs font-medium uppercase tracking-wider',
          disabled && 'text-black/50 cursor-not-allowed',
          className
        )}
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

FormLabel.displayName = 'FormLabel';

// FormMessage Component
export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  error?: boolean;
  children: React.ReactNode;
}

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, error = true, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-xs',
          error ? 'text-red-500' : 'text-black/60',
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

FormMessage.displayName = 'FormMessage';

// FormDescription Component
export interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const FormDescription = React.forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-xs text-black/60',
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

FormDescription.displayName = 'FormDescription';

export { Form, FormField, FormLabel, FormMessage, FormDescription };