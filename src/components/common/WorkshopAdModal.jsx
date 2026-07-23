import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function WorkshopAdModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the ad automatically 1.2 seconds after loading the page
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Overlay with smooth blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-md"
          />

          {/* Premium Invitation Card Container - Light Color */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white border border-slate-200/80 rounded-3xl w-full max-w-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)] relative z-10 flex flex-col font-sans"
          >
            {/* Top Close Button - Elegant slate circle */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 p-2 rounded-full transition-all duration-200 border border-slate-200/40 z-20"
              aria-label="Close Announcement"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            {/* Glowing soft gradient backdrops */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="p-8 md:p-10 space-y-8 text-left relative z-10">
              
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-blue-600 text-[10px] font-extrabold uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-blue-500 animate-pulse" />
                Exclusive Technical Seminar
              </div>

              {/* Main Titles */}
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">
                  AI & Technology <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-indigo-600">
                    AI Workshop 2026
                  </span>
                </h3>
                <p className="text-xs text-slate-500 font-semibold tracking-wide">
                  Presented in collaboration with corporate mentors
                </p>
              </div>

              {/* Details Overlay Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Date Glass Card */}
                <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-4 hover:bg-slate-100/80 transition-all duration-300">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-xl border border-blue-100 shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block mb-0.5">Date & Time</span>
                    <strong className="text-sm font-bold text-slate-700">August 1st, 2026 (Saturday)</strong>
                  </div>
                </div>

                {/* Location Glass Card */}
                <div className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-4 hover:bg-slate-100/80 transition-all duration-300">
                  <div className="bg-teal-50 text-brand-accent p-3 rounded-xl border border-teal-100 shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block mb-0.5">Venue Partner</span>
                    <strong className="text-sm font-bold text-slate-700">Indo sunrise group of institutions</strong>
                  </div>
                </div>
              </div>

              {/* Seminar Focus Points */}
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                Join engineering leads to study prompt patterns, multi-agent frameworks (LangGraph), local model deployment strategies, and FastAPI scale metrics. Open for student reservations.
              </p>

              {/* Actions Grid */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <a
                  href="https://indosunriseinternationalschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-blue-500/10 hover:-translate-y-0.5"
                >
                  Visit Institution Website
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  onClick={handleClose}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-2xl transition-all duration-200 border border-slate-200"
                >
                  Dismiss
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
