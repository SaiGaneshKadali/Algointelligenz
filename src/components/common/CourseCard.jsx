import { Link } from 'react-router-dom';
import { Star, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseCard({ course, showPrice = true }) {
  const levelColors = {
    Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    Intermediate: 'bg-blue-50 text-blue-700 border-blue-100',
    Advanced: 'bg-purple-50 text-purple-700 border-purple-100'
  };

  return (
    <Link to={`/courses/${course.id}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-white rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover hover:border-slate-200 transition-all duration-300 flex flex-col h-full overflow-hidden group cursor-pointer"
      >
        {/* Course Image Wrapper */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 p-2 flex items-center justify-center">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-contain rounded-lg group-hover:scale-102 transition-transform duration-300"
            loading="lazy"
          />
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
          <div className="grid grid-cols-2 gap-4 py-3 border-t border-slate-50 text-xs text-slate-600 mb-4 mt-auto">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-brand-secondary" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-brand-accent" />
              <span>{course.syllabus?.length || 0} Modules</span>
            </div>
          </div>

          {/* CTA & Pricing */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-50 mt-2">
            {/* {showPrice && (
              <div>
                <span className="text-xs text-slate-400 block font-medium">Course Fee</span>
                <span className="text-lg font-extrabold text-brand-primary">{course.price}</span>
              </div>
            )} */}
            
            <span className="text-brand-secondary group-hover:translate-x-1.5 transition-transform duration-300 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
              Explore Syllabus
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
