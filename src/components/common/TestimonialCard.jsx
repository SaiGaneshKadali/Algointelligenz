import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-premium flex flex-col justify-between h-full relative group hover:shadow-premium-hover transition-all duration-300"
    >
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-slate-100 group-hover:text-blue-50/50 transition-colors duration-300">
        <Quote className="h-10 w-10 rotate-180 fill-current" />
      </div>

      <div>
        {/* Star Rating */}
        <div className="flex items-center space-x-1 mb-5">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} className="h-4.5 w-4.5 fill-amber-400 stroke-amber-400" />
          ))}
        </div>

        {/* Text */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-6 relative z-10 italic">
          "{testimonial.text}"
        </p>
      </div>

      {/* Student Meta */}
      <div className="flex items-center space-x-4 pt-4 border-t border-slate-50">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover border-2 border-slate-100 shadow-sm"
          loading="lazy"
        />
        <div>
          <h4 className="text-sm font-bold text-brand-primary leading-tight">
            {testimonial.name}
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            {testimonial.role} at <span className="font-semibold text-brand-secondary">{testimonial.company}</span>
          </p>
          <span className="inline-block text-[9px] font-bold text-brand-accent uppercase bg-teal-50 border border-teal-100 px-2 py-0.5 rounded mt-1">
            {testimonial.courseTaken}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
