import React, { ReactNode, MouseEvent } from 'react';
import { cn } from '../../utils';

interface ChipProps {
  children: ReactNode;
  variant?: 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  selected?: boolean;
  onDelete?: () => void;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'filled',
  size = 'md',
  selected = false,
  onDelete,
  onClick,
  icon,
  className,
  disabled = false
}) => {
  const isClickable = !!onClick && !disabled;
  const isDeletable = !!onDelete && !disabled;

  const baseClasses = cn(
    'inline-flex items-center gap-1.5 font-medium rounded-full',
    'transition-all duration-200',
    isClickable && 'cursor-pointer',
    disabled && 'opacity-50 cursor-not-allowed'
  );

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  const variantClasses = {
    filled: cn(
      selected ? 'bg-black text-white' : 'bg-gray-100 text-gray-900',
      isClickable && !disabled && !selected && 'hover:bg-gray-200',
      isClickable && !disabled && selected && 'hover:bg-gray-800'
    ),
    outlined: cn(
      'bg-transparent border',
      selected 
        ? 'border-black text-black' 
        : 'border-gray-300 text-gray-700',
      isClickable && !disabled && 'hover:bg-gray-50'
    )
  };

  const iconSizeClasses = {
    sm: '[&>svg]:w-3 [&>svg]:h-3',
    md: '[&>svg]:w-4 [&>svg]:h-4',
    lg: '[&>svg]:w-5 [&>svg]:h-5'
  };

  const handleClick = () => {
    if (isClickable) {
      onClick();
    }
  };

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    if (isDeletable) {
      onDelete();
    }
  };

  return (
    <span
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        iconSizeClasses[size],
        className
      )}
      onClick={handleClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-selected={selected}
      aria-disabled={disabled}
    >
      {icon && (
        <span className="flex-shrink-0">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {isDeletable && (
        <button
          onClick={handleDelete}
          className={cn(
            'flex-shrink-0 ml-1 -mr-1',
            'rounded-full transition-colors duration-150',
            'hover:bg-black/10 focus:bg-black/10',
            'focus:outline-none',
            variant === 'filled' && selected && 'hover:bg-white/20 focus:bg-white/20'
          )}
          aria-label="Remove"
          type="button"
        >
          <svg 
            className={cn(
              'w-3.5 h-3.5',
              size === 'sm' && 'w-3 h-3',
              size === 'lg' && 'w-4 h-4'
            )}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}
    </span>
  );
};