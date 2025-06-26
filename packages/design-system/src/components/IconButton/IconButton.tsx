import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  'aria-label': string; // Required for accessibility
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  shape = 'circle',
  className,
  disabled,
  ...props
}) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center',
    'font-medium transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    shape === 'circle' ? 'rounded-full' : 'rounded-lg',
    disabled && 'opacity-50 cursor-not-allowed'
  );

  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-14 h-14'
  };

  const variantClasses = {
    primary: cn(
      'bg-black text-white',
      'hover:bg-gray-800',
      'focus:ring-gray-500',
      disabled && 'hover:bg-black'
    ),
    secondary: cn(
      'bg-gray-100 text-gray-900',
      'hover:bg-gray-200',
      'focus:ring-gray-400',
      disabled && 'hover:bg-gray-100'
    ),
    outline: cn(
      'bg-transparent text-gray-900',
      'border border-gray-300',
      'hover:bg-gray-50',
      'focus:ring-gray-400',
      disabled && 'hover:bg-transparent'
    ),
    ghost: cn(
      'bg-transparent text-gray-700',
      'hover:bg-gray-100 hover:text-gray-900',
      'focus:ring-gray-400',
      disabled && 'hover:bg-transparent hover:text-gray-700'
    )
  };

  // Icon size mapping
  const iconSizeClasses = {
    xs: '[&>svg]:w-3 [&>svg]:h-3',
    sm: '[&>svg]:w-4 [&>svg]:h-4',
    md: '[&>svg]:w-5 [&>svg]:h-5',
    lg: '[&>svg]:w-6 [&>svg]:h-6',
    xl: '[&>svg]:w-7 [&>svg]:h-7'
  };

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        iconSizeClasses[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};