import React, { createContext, useContext, useState, useId } from 'react';
import { cn } from '../../utils/cn';

interface AccordionContextType {
  expandedItems: Set<string>;
  toggleItem: (id: string) => void;
  type: 'single' | 'multiple';
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Type of accordion - single or multiple items can be open
   * @default 'single'
   */
  type?: 'single' | 'multiple';
  /**
   * Default expanded items (array of item IDs)
   */
  defaultExpanded?: string[];
  /**
   * Children elements (should be AccordionItem components)
   */
  children?: React.ReactNode;
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Unique identifier for the item
   */
  id?: string;
  /**
   * Children elements (should include AccordionTrigger and AccordionContent)
   */
  children?: React.ReactNode;
}

export interface AccordionTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = 'single', defaultExpanded = [], children, ...props }, ref) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(
      new Set(defaultExpanded)
    );

    const toggleItem = (id: string) => {
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          if (type === 'single') {
            newSet.clear();
          }
          newSet.add(id);
        }
        return newSet;
      });
    };

    return (
      <AccordionContext.Provider value={{ expandedItems, toggleItem, type }}>
        <div
          ref={ref}
          className={cn('border-t border-black', className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

interface AccordionItemContextType {
  isExpanded: boolean;
  itemId: string;
}

const AccordionItemContext = createContext<AccordionItemContextType | null>(null);

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, id, children, ...props }, ref) => {
    const context = useContext(AccordionContext);
    const generatedId = useId();
    const itemId = id || generatedId;

    if (!context) {
      throw new Error('AccordionItem must be used within an Accordion');
    }

    const isExpanded = context.expandedItems.has(itemId);

    return (
      <AccordionItemContext.Provider value={{ isExpanded, itemId }}>
        <div
          ref={ref}
          className={cn('border-b border-black', className)}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const accordionContext = useContext(AccordionContext);
    const itemContext = useContext(AccordionItemContext);

    if (!accordionContext || !itemContext) {
      throw new Error('AccordionTrigger must be used within an AccordionItem');
    }

    const { isExpanded, itemId } = itemContext;
    const { toggleItem } = accordionContext;

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => toggleItem(itemId)}
        aria-expanded={isExpanded}
        className={cn(
          'flex w-full items-center justify-between py-4 text-left font-medium text-black transition-all hover:opacity-70',
          className
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            'ml-2 h-4 w-4 shrink-0 transition-transform duration-200',
            isExpanded && 'rotate-45'
          )}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3V13M3 8H13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const itemContext = useContext(AccordionItemContext);

    if (!itemContext) {
      throw new Error('AccordionContent must be used within an AccordionItem');
    }

    const { isExpanded } = itemContext;

    return (
      <div
        ref={ref}
        className={cn(
          'overflow-hidden text-sm transition-all duration-200',
          isExpanded ? 'max-h-96' : 'max-h-0'
        )}
        {...props}
      >
        <div className={cn('pb-4 pt-0', className)}>{children}</div>
      </div>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';