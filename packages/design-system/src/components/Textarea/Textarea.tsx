import * as React from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, resize = 'vertical', rows = 4, ...props }, ref) => {
    const id = React.useId();
    
    const resizeClasses = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize',
    };
    
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-xs font-medium uppercase tracking-wider mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          className={cn(
            'w-full px-0 py-3 text-base bg-transparent border-0 border-b border-black',
            'focus:outline-none focus:border-b-2 focus:pb-[11px]',
            'placeholder:text-black/40',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'min-h-[100px]',
            resizeClasses[resize],
            error && 'border-red-500 focus:border-red-500',
            className
          )}
          rows={rows}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-2 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };