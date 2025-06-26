import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { X } from 'lucide-react';

// Toast types
export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Toast positioning
const positionClasses: Record<ToastPosition, string> = {
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
};

// Toast variants
const toastVariants: Record<ToastVariant, string> = {
  default: 'border-gray-200 bg-white',
  success: 'border-gray-300 bg-gray-50',
  error: 'border-gray-700 bg-gray-100',
  warning: 'border-gray-500 bg-gray-50',
};

// Toast reducer
type ToastAction =
  | { type: 'ADD_TOAST'; toast: Toast }
  | { type: 'REMOVE_TOAST'; id: string }
  | { type: 'UPDATE_TOAST'; id: string; toast: Partial<Toast> };

interface ToastState {
  toasts: Toast[];
}

const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case 'ADD_TOAST':
      return { toasts: [...state.toasts, action.toast] };
    case 'REMOVE_TOAST':
      return { toasts: state.toasts.filter((t) => t.id !== action.id) };
    case 'UPDATE_TOAST':
      return {
        toasts: state.toasts.map((t) =>
          t.id === action.id ? { ...t, ...action.toast } : t
        ),
      };
    default:
      return state;
  }
};

// Toast Context
interface ToastContextValue {
  toasts: Toast[];
  toast: (toast: Omit<Toast, 'id'>) => string;
  dismiss: (id: string) => void;
  update: (id: string, toast: Partial<Toast>) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

// ToastProvider
export interface ToastProviderProps {
  children: React.ReactNode;
  position?: ToastPosition;
  duration?: number;
}

let toastId = 0;

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'bottom-right',
  duration = 5000,
}) => {
  const [state, dispatch] = useReducer(toastReducer, { toasts: [] });

  const toast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = `toast-${toastId++}`;
      dispatch({
        type: 'ADD_TOAST',
        toast: { ...toast, id, duration: toast.duration || duration },
      });
      return id;
    },
    [duration]
  );

  const dismiss = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_TOAST', id });
  }, []);

  const update = useCallback((id: string, toast: Partial<Toast>) => {
    dispatch({ type: 'UPDATE_TOAST', id, toast });
  }, []);

  return (
    <ToastContext.Provider value={{ toasts: state.toasts, toast, dismiss, update }}>
      {children}
      <ToastContainer position={position} />
    </ToastContext.Provider>
  );
};

// useToast hook
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

// ToastContainer
interface ToastContainerProps {
  position: ToastPosition;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ position }) => {
  const { toasts } = useToast();

  return (
    <div
      className={cn(
        'fixed z-50 flex max-w-sm flex-col gap-2',
        positionClasses[position]
      )}
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

// Individual Toast Item
interface ToastItemProps {
  toast: Toast;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast }) => {
  const { dismiss } = useToast();
  const [progress, setProgress] = React.useState(100);

  useEffect(() => {
    if (!toast.duration || toast.duration === Infinity) return;

    const timer = setTimeout(() => {
      dismiss(toast.id);
    }, toast.duration);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev - 100 / (toast.duration! / 100);
        return next > 0 ? next : 0;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [toast.id, toast.duration, dismiss]);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg border p-4 shadow-lg transition-all',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-80',
        'data-[state=closed]:slide-out-to-right-full',
        'data-[state=open]:animate-in data-[state=open]:fade-in-80',
        'data-[state=open]:slide-in-from-top-full',
        toastVariants[toast.variant || 'default']
      )}
      data-state="open"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          {toast.title && (
            <h5 className="mb-1 font-medium text-gray-900">{toast.title}</h5>
          )}
          {toast.description && (
            <p className="text-sm text-gray-600">{toast.description}</p>
          )}
          {toast.action && (
            <button
              onClick={toast.action.onClick}
              className="mt-2 text-sm font-medium underline-offset-2 hover:underline"
            >
              {toast.action.label}
            </button>
          )}
        </div>
        <button
          onClick={() => dismiss(toast.id)}
          className={cn(
            'rounded-md p-1 transition-colors hover:bg-black/10',
            'focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
          )}
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      {toast.duration && toast.duration !== Infinity && (
        <div
          className="absolute bottom-0 left-0 h-1 bg-black/20 transition-all"
          style={{ width: `${progress}%` }}
        />
      )}
    </div>
  );
};