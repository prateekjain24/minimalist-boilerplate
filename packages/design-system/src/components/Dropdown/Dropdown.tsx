import React, { useState, useRef, useEffect, ReactNode, ReactElement, cloneElement, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils';

// Dropdown Context
interface DropdownContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const DropdownContext = React.createContext<DropdownContextValue | undefined>(undefined);

const useDropdownContext = () => {
  const context = React.useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown components must be used within a Dropdown');
  }
  return context;
};

// Dropdown Root
interface DropdownProps {
  children: ReactNode;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
}

export const Dropdown: React.FC<DropdownProps> = ({ 
  children,
  placement = 'bottom-start'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, activeIndex, setActiveIndex }}>
      <div className="relative inline-block">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

// Dropdown Trigger
interface DropdownTriggerProps {
  children: ReactElement;
  className?: string;
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ 
  children,
  className
}) => {
  const { isOpen, setIsOpen } = useDropdownContext();
  const triggerRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return cloneElement(children, {
    ref: triggerRef,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    'aria-expanded': isOpen,
    'aria-haspopup': 'menu',
    className: cn(children.props.className, className)
  });
};

// Dropdown Content
interface DropdownContentProps {
  children: ReactNode;
  className?: string;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
}

export const DropdownContent: React.FC<DropdownContentProps> = ({ 
  children,
  className,
  placement = 'bottom-start'
}) => {
  const { isOpen, setIsOpen, activeIndex, setActiveIndex } = useDropdownContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const itemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
        const trigger = contentRef.current.previousElementSibling;
        if (trigger && !trigger.contains(e.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      
      // Calculate position
      const trigger = contentRef.current?.previousElementSibling;
      if (trigger) {
        const triggerRect = trigger.getBoundingClientRect();
        const contentRect = contentRef.current?.getBoundingClientRect();
        
        let top = 0;
        let left = 0;
        
        if (placement.startsWith('bottom')) {
          top = triggerRect.bottom + 4;
        } else {
          top = triggerRect.top - (contentRect?.height || 0) - 4;
        }
        
        if (placement.endsWith('start')) {
          left = triggerRect.left;
        } else {
          left = triggerRect.right - (contentRect?.width || 0);
        }
        
        setPosition({ top, left });
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, setIsOpen, placement]);

  const handleKeyDown = (e: KeyboardEvent) => {
    const items = itemsRef.current.filter(item => item && !item.getAttribute('aria-disabled'));
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = activeIndex < items.length - 1 ? activeIndex + 1 : 0;
        setActiveIndex(nextIndex);
        items[nextIndex]?.focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = activeIndex > 0 ? activeIndex - 1 : items.length - 1;
        setActiveIndex(prevIndex);
        items[prevIndex]?.focus();
        break;
      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        items[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        setActiveIndex(items.length - 1);
        items[items.length - 1]?.focus();
        break;
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={contentRef}
      className={cn(
        'fixed z-50 min-w-[12rem] bg-white rounded-lg shadow-lg border border-gray-200',
        'py-1 outline-none',
        'animate-in fade-in-0 zoom-in-95',
        className
      )}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`
      }}
      role="menu"
      aria-orientation="vertical"
      onKeyDown={handleKeyDown}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<any>, {
            ref: (el: HTMLElement) => {
              itemsRef.current[index] = el;
            },
            tabIndex: activeIndex === index ? 0 : -1
          });
        }
        return child;
      })}
    </div>,
    document.body
  );
};

// Dropdown Item
interface DropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ children, onClick, disabled = false, className }, ref) => {
    const { setIsOpen } = useDropdownContext();

    const handleClick = () => {
      if (!disabled && onClick) {
        onClick();
        setIsOpen(false);
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          'w-full px-3 py-2 text-sm text-left',
          'hover:bg-gray-100 focus:bg-gray-100',
          'focus:outline-none transition-colors duration-150',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        onClick={handleClick}
        disabled={disabled}
        role="menuitem"
        aria-disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

// Dropdown Separator
export const DropdownSeparator: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div 
      className={cn('my-1 h-px bg-gray-200', className)} 
      role="separator"
    />
  );
};