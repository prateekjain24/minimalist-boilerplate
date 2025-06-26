import React, { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils';

// Modal Context
interface ModalContextValue {
  isOpen: boolean;
  onClose: () => void;
}

const ModalContext = React.createContext<ModalContextValue | undefined>(undefined);

const useModalContext = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used within a Modal');
  }
  return context;
};

// Modal Root
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  children,
  size = 'md' 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
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
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  };

  return createPortal(
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <ModalOverlay />
        <div 
          ref={modalRef}
          className={cn(
            'relative z-50 w-full bg-white rounded-lg shadow-xl',
            'transform transition-all duration-200',
            'animate-in fade-in-0 zoom-in-95',
            sizeClasses[size]
          )}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.body
  );
};

// Modal Overlay
export const ModalOverlay: React.FC = () => {
  return (
    <div 
      className={cn(
        'fixed inset-0 bg-black/50',
        'animate-in fade-in-0 duration-200'
      )}
    />
  );
};

// Modal Content
interface ModalContentProps {
  children: ReactNode;
  className?: string;
}

export const ModalContent: React.FC<ModalContentProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn('relative', className)}>
      {children}
    </div>
  );
};

// Modal Header
interface ModalHeaderProps {
  children: ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ 
  children, 
  className,
  showCloseButton = true
}) => {
  const { onClose } = useModalContext();

  return (
    <div className={cn(
      'px-6 py-4 border-b border-gray-200',
      'flex items-center justify-between',
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
          aria-label="Close modal"
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

// Modal Body
interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn(
      'px-6 py-4',
      'max-h-[60vh] overflow-y-auto',
      className
    )}>
      {children}
    </div>
  );
};

// Modal Footer
interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn(
      'px-6 py-4 border-t border-gray-200',
      'flex items-center justify-end gap-3',
      className
    )}>
      {children}
    </div>
  );
};