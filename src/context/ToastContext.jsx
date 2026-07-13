import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X, AlertTriangle } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} onClose={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

function ToastItem({ toast, onClose }) {
  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />,
    error: <AlertCircle className="h-5 w-5 text-rose-500 shrink-0" />,
    info: <Info className="h-5 w-5 text-blue-500 shrink-0" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
  };

  const colors = {
    success: 'bg-white border-emerald-100 text-slate-700 shadow-premium',
    error: 'bg-white border-rose-100 text-slate-700 shadow-premium',
    info: 'bg-white border-blue-100 text-slate-700 shadow-premium',
    warning: 'bg-white border-amber-100 text-slate-700 shadow-premium'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={`pointer-events-auto flex items-start gap-3.5 p-4 rounded-xl border shadow-lg ${colors[toast.type]}`}
    >
      {icons[toast.type]}
      <div className="flex-grow text-left">
        <p className="text-xs font-semibold leading-relaxed">
          {toast.message}
        </p>
      </div>
      <button 
        onClick={() => onClose(toast.id)}
        className="text-slate-400 hover:text-slate-600 transition-colors shrink-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
