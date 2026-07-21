import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, Copy, Check, PhoneCall, MapPin, Sparkles } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export default function CallModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  const phoneNumber = "+91 7899 917 141";
  const rawPhone = "+917899917141";

  const handleCopy = () => {
    navigator.clipboard.writeText(rawPhone);
    setCopied(true);
    addToast(`Phone number ${phoneNumber} copied to clipboard!`, 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-center overflow-hidden"
          >
            {/* Ambient Background Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 p-2 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Animated Phone Symbol */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <span className="absolute inset-0 rounded-full bg-brand-secondary/20 animate-ping" />
              <div className="relative bg-brand-secondary text-white p-5 rounded-full shadow-secondary-shadow">
                <PhoneCall className="h-8 w-8" />
              </div>
            </div>

            {/* Title & Badge */}
            <div className="space-y-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-secondary border border-blue-100 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="h-3 w-3" />
                Advisors Desk Live
              </span>
              <h3 className="text-2xl font-extrabold text-brand-primary tracking-tight">
                Speak to Career Advisors
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                Connect directly with our admissions counseling team for batch timings, course fees, and career paths.
              </p>
            </div>

            {/* Phone Display Box */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-6 space-y-2">
              <div className="text-2xl sm:text-3xl font-black text-brand-primary tracking-tight font-mono">
                {phoneNumber}
              </div>
              <div className="flex items-center justify-center gap-1 text-[11px] text-emerald-600 font-semibold pt-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Line Active
              </div>
            </div>

            {/* Action Triggers */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-primary text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-secondary-shadow hover:shadow-premium group"
              >
                <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Call Directly Now
              </button>

              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-brand-primary py-3 px-6 rounded-xl font-semibold text-xs transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span className="text-emerald-600 font-bold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-400" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>
            </div>

            {/* Location Footer Note */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-brand-secondary shrink-0" />
              <span>BTM Layout 1st Stage, Bangalore - 560029</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
