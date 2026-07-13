import { SearchX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmptyState({ message = "We couldn't find any courses matching your criteria.", onClear }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-6 border border-dashed border-slate-200 rounded-2xl bg-white text-center shadow-premium"
    >
      <div className="bg-slate-50 text-slate-400 p-5 rounded-2xl mb-5 border border-slate-100">
        <SearchX className="h-10 w-10 text-slate-400" />
      </div>
      <h3 className="text-xl font-bold text-brand-primary mb-2">No Results Found</h3>
      <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto leading-relaxed">
        {message}
      </p>
      {onClear && (
        <button
          onClick={onClear}
          className="bg-brand-secondary hover:bg-brand-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-secondary-shadow hover:shadow-premium transition-all duration-300"
        >
          Clear All Filters
        </button>
      )}
    </motion.div>
  );
}
