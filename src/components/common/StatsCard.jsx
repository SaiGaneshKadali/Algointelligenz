import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CountUpComponent = typeof CountUp === 'function' ? CountUp : (CountUp.default || CountUp);

export default function StatsCard({ value, suffix = '', title, description, icon: Icon }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-premium flex items-center space-x-6 hover:shadow-premium-hover transition-all duration-300"
    >
      {/* Icon Area */}
      {Icon && (
        <div className="bg-blue-50 text-brand-secondary p-4 rounded-xl shrink-0">
          <Icon className="h-6 w-6 animate-float" />
        </div>
      )}

      {/* Content Area */}
      <div>
        <span className="text-3xl md:text-4xl font-extrabold text-brand-primary block tracking-tight">
          {inView ? (
            <CountUpComponent 
              start={0} 
              end={value} 
              duration={2.5} 
              separator="," 
              suffix={suffix}
            />
          ) : (
            `0${suffix}`
          )}
        </span>
        <span className="text-sm font-bold text-slate-800 block mt-1">
          {title}
        </span>
        {description && (
          <span className="text-xs text-slate-500 block mt-0.5 leading-normal">
            {description}
          </span>
        )}
      </div>
    </motion.div>
  );
}
