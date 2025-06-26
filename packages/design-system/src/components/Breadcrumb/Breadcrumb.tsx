import React from 'react';
import { cn } from '../../utils/cn';
import { ChevronRight } from 'lucide-react';

// Breadcrumb Context
interface BreadcrumbContextValue {
  separator?: React.ReactNode;
}

const BreadcrumbContext = React.createContext<BreadcrumbContextValue>({});

// Main Breadcrumb Component
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, separator = <ChevronRight className="h-4 w-4" />, children, ...props }, ref) => {
    return (
      <BreadcrumbContext.Provider value={{ separator }}>
        <nav
          ref={ref}
          aria-label="Breadcrumb"
          className={cn('flex items-center', className)}
          {...props}
        >
          <ol className="flex items-center space-x-2">
            {children}
          </ol>
        </nav>
      </BreadcrumbContext.Provider>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

// BreadcrumbItem Component
export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  href?: string;
  current?: boolean;
}

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, href, current = false, children, ...props }, ref) => {
    const { separator } = React.useContext(BreadcrumbContext);
    const isLastItem = current || !href;

    return (
      <li
        ref={ref}
        className={cn('flex items-center', className)}
        {...props}
      >
        {href && !current ? (
          <a
            href={href}
            className={cn(
              'text-gray-600 transition-colors hover:text-black',
              'focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
            )}
            aria-current={current ? 'page' : undefined}
          >
            {children}
          </a>
        ) : (
          <span
            className={cn(
              isLastItem ? 'text-gray-900 font-medium' : 'text-gray-600'
            )}
            aria-current={current ? 'page' : undefined}
          >
            {children}
          </span>
        )}
        {!isLastItem && separator && (
          <span className="ml-2 text-gray-400" aria-hidden="true">
            {separator}
          </span>
        )}
      </li>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';