import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Award, Star, BookOpen, Calendar, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { COURSES } from '../constants/courses';

export default function CourseDetail() {
  const { id } = useParams();

  // Find course from database
  const course = COURSES.find((c) => c.id === id);

  // Fallback if course id is invalid
  if (!course) {
    return <Navigate to="/" replace />;
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-brand-bg min-h-screen pb-20"
    >
      {/* 1. Header/Hero Section */}
      <section className="bg-brand-dark text-white relative overflow-hidden py-16 md:py-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,233,0.12),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Button */}
          <Link 
            to="/courses" 
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-secondary transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              {/* Category */}
              <span className="bg-brand-secondary/15 text-brand-secondary border border-brand-secondary/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {course.category}
              </span>
              
              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight font-display tracking-tight">
                {course.title}
              </h1>
              
              {/* Description */}
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl">
                {course.description}
              </p>

              {/* Course Meta Info */}
              <div className="flex flex-wrap gap-y-4 gap-x-8 pt-4 border-t border-slate-800/80 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-secondary" />
                  <span><strong>Duration:</strong> {course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-brand-accent" />
                  <span><strong>Level:</strong> {course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span><strong>Rating:</strong> {course.rating} ({course.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Curriculum Panels */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-extrabold text-brand-primary tracking-tight flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-brand-secondary" />
                Course Curriculum
              </h2>
              <p className="text-slate-500 text-sm">
                Explore the modules and exact topics you will master throughout this comprehensive program.
              </p>
            </motion.div>

            {/* Subsections Cards */}
            <div className="space-y-6">
              {course.syllabus.map((section, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-premium hover:shadow-premium-hover transition-all duration-300"
                >
                  {/* Module Header */}
                  <div className="flex items-start gap-4 pb-4 border-b border-slate-100 mb-6">
                    <span className="flex items-center justify-center bg-brand-secondary/10 text-brand-secondary font-extrabold text-sm h-8 w-8 rounded-lg shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-brand-primary">
                        {section.title}
                      </h3>
                      <span className="text-[10px] text-brand-secondary/80 font-bold uppercase tracking-wider">
                        Module 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Topics */}
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pl-1.5">
                    {section.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="h-4.5 w-4.5 text-brand-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <motion.div 
              variants={itemVariants} 
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-premium"
            >
              {/* Product Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 p-2 flex items-center justify-center">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              {/* Details & Pricing */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <span className="text-xs text-slate-400 font-medium block uppercase tracking-wider mb-1">Course Fee</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-brand-primary">{course.price}</span>
                    <span className="text-xs text-slate-400 font-semibold">(One-time program fee)</span>
                  </div>
                </div>

                {/* Info List */}
                <div className="space-y-4 border-t border-b border-slate-50 py-5 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-brand-secondary shrink-0" />
                    <div>
                      <strong className="block text-brand-primary text-xs font-bold uppercase tracking-wider mb-0.5">Schedule</strong>
                      <span>{course.timings}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-brand-accent shrink-0" />
                    <div>
                      <strong className="block text-brand-primary text-xs font-bold uppercase tracking-wider mb-0.5">Assurance</strong>
                      <span>Certificate of Completion & Support</span>
                    </div>
                  </div>
                </div>

                {/* Highlights Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">Program Features</h4>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500">
                    <div className="h-1.5 w-1.5 bg-brand-secondary rounded-full" />
                    <span>Live Online Mentorship Sessions</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500">
                    <div className="h-1.5 w-1.5 bg-brand-secondary rounded-full" />
                    <span>Real-world Applied Capstone Projects</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500">
                    <div className="h-1.5 w-1.5 bg-brand-secondary rounded-full" />
                    <span>Dedicated Career Placement Services</span>
                  </div>
                </div>

                {/* Action Trigger Link */}
                <Link 
                  to="/contact" 
                  className="w-full flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-primary text-white font-bold text-sm py-3 px-6 rounded-lg transition-colors shadow-secondary-shadow group"
                >
                  Get in Touch
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
