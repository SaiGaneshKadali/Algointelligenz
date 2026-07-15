import { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { Star, Clock, BookOpen, ChevronDown, ChevronUp, ArrowRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CourseCard({ course, showPrice = true }) {
  const [showSyllabus, setShowSyllabus] = useState(false);
  const { addToast } = useToast();

  const levelColors = {
    Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    Intermediate: 'bg-blue-50 text-blue-700 border-blue-100',
    Advanced: 'bg-purple-50 text-purple-700 border-purple-100'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col h-full overflow-hidden group"
    >
      {/* Course Image Wrapper */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-white/95 text-brand-primary px-2.5 py-1 rounded-md shadow-sm">
          {course.category}
        </span>

        {/* Level Badge */}
        <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border rounded-md shadow-sm ${levelColors[course.level]}`}>
          {course.level}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Ratings */}
        <div className="flex items-center space-x-1 mb-2">
          <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
          <span className="text-sm font-bold text-slate-800">{course.rating}</span>
          <span className="text-xs text-slate-400">({course.reviews} reviews)</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-brand-primary mb-2 line-clamp-1 group-hover:text-brand-secondary transition-colors duration-200">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4">
          {course.description}
        </p>

        {/* Quick Meta */}
        <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-slate-50 text-xs text-slate-600 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand-secondary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-brand-accent" />
            <span>{course.syllabus?.length || 0} Modules</span>
          </div>
        </div>

        {/* Mentor Info */}
        {course.mentor && (
          <div className="flex items-center space-x-3 mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
            <div className="bg-slate-200 text-slate-600 p-1 rounded-full shrink-0">
              <User className="h-4 w-4" />
            </div>
            <div className="text-[11px] truncate">
              <p className="font-semibold text-brand-primary">{course.mentor.name}</p>
              <p className="text-slate-400 text-[10px]">{course.mentor.role} @ {course.mentor.company}</p>
            </div>
          </div>
        )}

        {/* Interactive Syllabus Toggle */}
        <button
          onClick={() => setShowSyllabus(!showSyllabus)}
          className="flex items-center justify-between w-full py-1 text-xs font-semibold text-slate-500 hover:text-brand-secondary transition-colors mb-4 border-b border-slate-100 pb-2"
        >
          <span>Curriculum Preview</span>
          {showSyllabus ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>

        {/* Expanding Syllabus Drawer */}
        <AnimatePresence initial={false}>
          {showSyllabus && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <ul className="text-xs text-slate-500 space-y-2 mb-4 pl-1">
                {course.syllabus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-secondary font-bold shrink-0">{idx + 1}.</span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA & Pricing */}
        <div className="mt-auto flex items-center justify-between pt-2">
          {showPrice && (
            <div>
              <span className="text-xs text-slate-400 block font-medium">Course Fee</span>
              <span className="text-lg font-extrabold text-brand-primary">{course.price}</span>
            </div>
          )}
          
          <button
            onClick={() => addToast(`Enrolling program: ${course.title}. Our advisors will call you shortly to block your seat.`, 'success')}
            className={`flex items-center gap-1.5 font-semibold text-xs py-2 px-4 rounded-lg transition-all duration-300 ${
              showPrice 
                ? 'bg-brand-secondary hover:bg-brand-primary text-white shadow-secondary-shadow' 
                : 'text-brand-secondary hover:text-brand-primary hover:translate-x-1'
            }`}
          >
            Enroll Now
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
