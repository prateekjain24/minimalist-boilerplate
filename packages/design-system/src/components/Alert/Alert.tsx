import React from 'react';
import { cn } from '../../utils/cn';
import { X, Info, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

// Alert variants
const alertVariants = {
  info: {
    container: 'border-gray-300 bg-gray-50',
    icon: 'text-gray-600',
    title: 'text-gray-900',
    description: 'text-gray-700',
  },
  success: {
    container: 'border-gray-400 bg-gray-100',
    icon: 'text-gray-700',
    title: 'text-gray-900',
    description: 'text-gray-700',
  },
  warning: {
    container: 'border-gray-500 bg-gray-200',
    icon: 'text-gray-800',
    title: 'text-gray-900',
    description: 'text-gray-800',
  },
  error: {
    container: 'border-gray-700 bg-gray-300',
    icon: 'text-gray-900',
    title: 'text-gray-900',
    description: 'text-gray-800',
  },
};

const iconMap = {
  info: Info,
  success: CheckCircle,
  warning: AlertCircle,
  error: XCircle,
};

// Alert Context
interface AlertContextValue {
  variant: keyof typeof alertVariants;
}

const AlertContext = React.createContext<AlertContextValue | undefined>(undefined);

const useAlertContext = () => {
  const context = React.useContext(AlertContext);
  if (!context) {
    throw new Error('Alert compound components must be used within Alert');
  }
  return context;
};

// Main Alert Component
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof alertVariants;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', dismissible, onDismiss, children, ...props }, ref) => {
    const styles = alertVariants[variant];

    return (
      <AlertContext.Provider value={{ variant }}>
        <div
          ref={ref}
          role="alert"
          className={cn(
            'relative flex gap-3 rounded-lg border p-4 transition-all',
            styles.container,
            className
          )}
          {...props}
        >
          {children}
          {dismissible && (
            <button
              onClick={onDismiss}
              className={cn(
                'absolute right-2 top-2 rounded-md p-1 transition-colors hover:bg-black/10',
                'focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
              )}
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </AlertContext.Provider>
    );
  }
);

Alert.displayName = 'Alert';

// AlertIcon Component
export interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<{ className?: string }>;
}

export const AlertIcon = React.forwardRef<HTMLDivElement, AlertIconProps>(
  ({ className, icon, ...props }, ref) => {
    const { variant } = useAlertContext();
    const styles = alertVariants[variant];
    const Icon = icon || iconMap[variant];

    return (
      <div ref={ref} className={cn('flex-shrink-0', className)} {...props}>
        <Icon className={cn('h-5 w-5', styles.icon)} />
      </div>
    );
  }
);

AlertIcon.displayName = 'AlertIcon';

// AlertTitle Component
export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => {
    const { variant } = useAlertContext();
    const styles = alertVariants[variant];

    return (
      <h5
        ref={ref}
        className={cn('font-medium leading-none tracking-tight', styles.title, className)}
        {...props}
      />
    );
  }
);

AlertTitle.displayName = 'AlertTitle';

// AlertDescription Component
export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => {
  const { variant } = useAlertContext();
  const styles = alertVariants[variant];

  return (
    <p
      ref={ref}
      className={cn('text-sm leading-relaxed', styles.description, className)}
      {...props}
    />
  );
});

AlertDescription.displayName = 'AlertDescription';