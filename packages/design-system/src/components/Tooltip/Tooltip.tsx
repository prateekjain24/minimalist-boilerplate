import React, { useState, useRef, useEffect, ReactNode, cloneElement, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils';

interface TooltipProps {
  children: ReactElement;
  content: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = 'top',
  delay = 200,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>();

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const spacing = 8;

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - spacing;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + spacing;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - spacing;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + spacing;
        break;
    }

    // Ensure tooltip stays within viewport
    const padding = 8;
    if (left < padding) left = padding;
    if (left + tooltipRect.width > window.innerWidth - padding) {
      left = window.innerWidth - tooltipRect.width - padding;
    }
    if (top < padding) top = padding;
    if (top + tooltipRect.height > window.innerHeight - padding) {
      top = window.innerHeight - tooltipRect.height - padding;
    }

    setPosition({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
      window.addEventListener('scroll', calculatePosition);
      window.addEventListener('resize', calculatePosition);
    }

    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [isVisible, placement]);

  const handleMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const arrowClasses = {
    top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-t-gray-900 border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-b-gray-900 border-l-transparent border-r-transparent border-t-transparent',
    left: 'right-[-4px] top-1/2 -translate-y-1/2 border-l-gray-900 border-t-transparent border-b-transparent border-r-transparent',
    right: 'left-[-4px] top-1/2 -translate-y-1/2 border-r-gray-900 border-t-transparent border-b-transparent border-l-transparent'
  };

  return (
    <>
      {cloneElement(children, {
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        'aria-describedby': isVisible ? 'tooltip' : undefined
      })}
      {isVisible && createPortal(
        <div
          ref={tooltipRef}
          id="tooltip"
          role="tooltip"
          className={cn(
            'fixed z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded',
            'animate-in fade-in-0 zoom-in-95',
            'transition-opacity duration-150',
            className
          )}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`
          }}
        >
          {content}
          <div 
            className={cn(
              'absolute w-0 h-0',
              'border-4 border-solid',
              arrowClasses[placement]
            )}
          />
        </div>,
        document.body
      )}
    </>
  );
};

// Additional component exports for more control
interface TooltipTriggerProps {
  children: ReactElement;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  children,
  onMouseEnter,
  onMouseLeave
}) => {
  return cloneElement(children, {
    onMouseEnter,
    onMouseLeave
  });
};

interface TooltipContentProps {
  children: ReactNode;
  className?: string;
}

export const TooltipContent: React.FC<TooltipContentProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('tooltip-content', className)}>
      {children}
    </div>
  );
};