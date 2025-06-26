import React, { type ReactNode, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

// Table Root
interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
  className?: string;
  striped?: boolean;
  hover?: boolean;
}

export const Table: React.FC<TableProps> = ({
  children,
  className,
  striped = false,
  hover = false,
  ...props
}) => {
  return (
    <div className="w-full overflow-auto">
      <table
        className={cn(
          'w-full text-sm text-left text-gray-900',
          'border-collapse',
          className
        )}
        data-striped={striped}
        data-hover={hover}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

// Table Header
interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <thead
      className={cn(
        'border-b border-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </thead>
  );
};

// Table Body
interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
}

export const TableBody: React.FC<TableBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
};

// Table Footer
interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
}

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <tfoot
      className={cn(
        'border-t border-gray-200 bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </tfoot>
  );
};

// Table Row
interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  className?: string;
}

export const TableRow: React.FC<TableRowProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <tr
      className={cn(
        'border-b border-gray-100',
        'transition-colors duration-150',
        '[table[data-hover=true]_tbody_&]:hover:bg-gray-50',
        '[table[data-striped=true]_tbody_&:nth-child(even)]:bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

// Table Head Cell
interface TableHeadProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  className?: string;
}

export const TableHead: React.FC<TableHeadProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <th
      className={cn(
        'px-4 py-3 font-medium text-gray-700',
        'text-xs uppercase tracking-wider',
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
};

// Table Cell
interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <td
      className={cn(
        'px-4 py-3',
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
};

// Responsive Table Wrapper (optional)
interface ResponsiveTableProps {
  children: ReactNode;
  className?: string;
}

export const ResponsiveTable: React.FC<ResponsiveTableProps> = ({
  children,
  className
}) => {
  return (
    <div 
      className={cn(
        'w-full overflow-x-auto -mx-4 px-4',
        'sm:mx-0 sm:px-0',
        className
      )}
    >
      {children}
    </div>
  );
};