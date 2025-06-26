import React, { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';

// Drawer Context
interface DrawerContextValue {
  isOpen: boolean;
  onClose: () => void;
  position: 'left' | 'right' | 'top' | 'bottom';
}

const DrawerContext = React.createContext<DrawerContextValue | undefined>(undefined);

const useDrawerContext = () => {
  const context = React.useContext(DrawerContext);
  if (!context) {
    throw new Error('Drawer components must be used within a Drawer');
  }
  return context;
};

// Drawer Root
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg';
}

export const Drawer: React.FC<DrawerProps> = ({ 
  isOpen, 
  onClose, 
  children,
  position = 'right',
  size = 'md'
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: position === 'left' || position === 'right' ? 'max-w-xs' : 'max-h-xs',
    md: position === 'left' || position === 'right' ? 'max-w-md' : 'max-h-md',
    lg: position === 'left' || position === 'right' ? 'max-w-lg' : 'max-h-lg'
  };

  const positionClasses = {
    left: 'left-0 top-0 h-full',
    right: 'right-0 top-0 h-full',
    top: 'top-0 left-0 w-full',
    bottom: 'bottom-0 left-0 w-full'
  };

  const animationClasses = {
    left: 'animate-in slide-in-from-left',
    right: 'animate-in slide-in-from-right',
    top: 'animate-in slide-in-from-top',
    bottom: 'animate-in slide-in-from-bottom'
  };

  return createPortal(
    <DrawerContext.Provider value={{ isOpen, onClose, position }}>
      <div className="fixed inset-0 z-50">
        <DrawerOverlay />
        <div 
          ref={drawerRef}
          className={cn(
            'fixed z-50 bg-white shadow-xl',
            'transform transition-transform duration-300',
            positionClasses[position],
            animationClasses[position],
            sizeClasses[size],
            position === 'left' || position === 'right' ? 'w-full' : 'h-full'
          )}
        >
          {children}
        </div>
      </div>
    </DrawerContext.Provider>,
    document.body
  );
};

// Drawer Overlay
export const DrawerOverlay: React.FC = () => {
  return (
    <div 
      className={cn(
        'fixed inset-0 bg-black/50',
        'animate-in fade-in-0 duration-200'
      )}
    />
  );
};

// Drawer Content
interface DrawerContentProps {
  children: ReactNode;
  className?: string;
}

export const DrawerContent: React.FC<DrawerContentProps> = ({ 
  children, 
  className 
}) => {
  const { position } = useDrawerContext();
  
  return (
    <div className={cn(
      'flex flex-col h-full',
      position === 'top' || position === 'bottom' ? 'h-auto' : '',
      className
    )}>
      {children}
    </div>
  );
};

// Drawer Header
interface DrawerHeaderProps {
  children: ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ 
  children, 
  className,
  showCloseButton = true
}) => {
  const { onClose } = useDrawerContext();

  return (
    <div className={cn(
      'px-6 py-4 border-b border-gray-200',
      'flex items-center justify-between flex-shrink-0',
      className
    )}>
      <div className="text-lg font-semibold text-gray-900">
        {children}
      </div>
      {showCloseButton && (
        <button
          onClick={onClose}
          className={cn(
            'ml-4 p-1 rounded-lg',
            'text-gray-400 hover:text-gray-600',
            'hover:bg-gray-100',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-gray-300'
          )}
          aria-label="Close drawer"
        >
          <svg 
            className="w-5 h-5" 
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
    </div>
  );
};

// Drawer Body
interface DrawerBodyProps {
  children: ReactNode;
  className?: string;
}

export const DrawerBody: React.FC<DrawerBodyProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn(
      'px-6 py-4 flex-1 overflow-y-auto',
      className
    )}>
      {children}
    </div>
  );
};

// Drawer Footer
interface DrawerFooterProps {
  children: ReactNode;
  className?: string;
}

export const DrawerFooter: React.FC<DrawerFooterProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn(
      'px-6 py-4 border-t border-gray-200',
      'flex items-center justify-end gap-3 flex-shrink-0',
      className
    )}>
      {children}
    </div>
  );
};