import React, { useState, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  status,
  className
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl'
  };

  const statusSizeClasses = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4'
  };

  const statusColorClasses = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    busy: 'bg-red-500'
  };

  const getInitials = (name: string) => {
    const names = name.trim().split(' ');
    if (names.length === 1) {
      return names[0]?.substring(0, 2).toUpperCase() || '';
    }
    return names.map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const showFallback = !src || imageError;
  const initials = name ? getInitials(name) : '?';

  return (
    <div className={cn('relative inline-block', className)}>
      <div
        className={cn(
          'relative overflow-hidden rounded-full',
          'bg-gray-200 flex items-center justify-center',
          sizeClasses[size]
        )}
      >
        {!showFallback ? (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="font-medium text-gray-600">
            {initials}
          </span>
        )}
      </div>
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-white',
            statusSizeClasses[size],
            statusColorClasses[status]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
};

// Avatar Group
interface AvatarGroupProps {
  children: ReactNode;
  max?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 5,
  size = 'md',
  className
}) => {
  const childrenArray = React.Children.toArray(children);
  const visibleChildren = childrenArray.slice(0, max);
  const remainingCount = childrenArray.length - max;

  const overlapClasses = {
    xs: '-ml-2',
    sm: '-ml-2.5',
    md: '-ml-3',
    lg: '-ml-3.5',
    xl: '-ml-4'
  };

  return (
    <div className={cn('flex items-center', className)}>
      {visibleChildren.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<AvatarProps>, {
            key: index,
            size,
            className: cn(
              index > 0 && overlapClasses[size],
              'ring-2 ring-white'
            )
          });
        }
        return null;
      })}
      {remainingCount > 0 && (
        <div
          className={cn(
            'relative overflow-hidden rounded-full',
            'bg-gray-300 flex items-center justify-center',
            'ring-2 ring-white font-medium text-gray-700',
            overlapClasses[size],
            {
              'w-6 h-6 text-xs': size === 'xs',
              'w-8 h-8 text-sm': size === 'sm',
              'w-10 h-10 text-base': size === 'md',
              'w-12 h-12 text-lg': size === 'lg',
              'w-16 h-16 text-xl': size === 'xl'
            }
          )}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};