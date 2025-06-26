import React from 'react';
import { cn } from '../../utils/cn';
import { ExternalLink } from 'lucide-react';

const linkVariants = {
  default: 'hover:opacity-70',
  underline: 'underline underline-offset-2',
  'hover-underline': 'hover:underline hover:underline-offset-2',
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof linkVariants;
  external?: boolean;
  showExternalIcon?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant = 'default',
      external = false,
      showExternalIcon = true,
      children,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const isExternal = external || target === '_blank';
    const linkTarget = isExternal ? '_blank' : target;
    const linkRel = isExternal
      ? cn('noopener noreferrer', rel)
      : rel;

    return (
      <a
        ref={ref}
        target={linkTarget}
        rel={linkRel}
        className={cn(
          'inline-flex items-center gap-1 text-current transition-all',
          'focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2',
          linkVariants[variant],
          className
        )}
        {...props}
      >
        {children}
        {isExternal && showExternalIcon && (
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';