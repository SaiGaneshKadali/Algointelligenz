import { motion } from 'framer-motion';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  loading = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg text-sm transition-all duration-300 focus:outline-none';
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-secondary shadow-premium',
    secondary: 'bg-brand-secondary text-white hover:bg-brand-primary shadow-secondary-shadow',
    accent: 'bg-brand-accent text-white hover:bg-brand-accent/90 shadow-accent-shadow',
    outline: 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 shadow-sm',
    ghost: 'text-slate-600 hover:bg-slate-50 hover:text-brand-primary'
  };

  const sizes = 'px-5 py-2.5';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.01 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.99 } : {}}
      className={`${baseStyles} ${variants[variant]} ${sizes} ${
        disabled || loading ? 'opacity-60 cursor-not-allowed' : ''
      } ${className}`}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
}
