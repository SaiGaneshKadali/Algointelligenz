import { useState, useMemo } from 'react';
import { Search, Filter, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Data
import { COURSES } from '../constants/courses';

// Components
import CourseCard from '../components/common/CourseCard';
import SectionTitle from '../components/common/SectionTitle';
import EmptyState from '../components/common/EmptyState';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');

  const categories = ['All', 'AI Courses', 'Development Courses', 'Cloud & DevOps'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const durations = [
    { label: 'All Durations', value: 'All' },
    { label: 'Short Term (< 8 weeks)', value: 'short' },
    { label: 'Mid Term (8-12 weeks)', value: 'mid' },
    { label: 'Bootcamp (> 12 weeks)', value: 'long' }
  ];

  // Advanced Filtering logic using useMemo for optimization
  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // 1. Search term match (title, description, or mentor name)
      const matchesSearch = 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (course.mentor && course.mentor.name.toLowerCase().includes(searchTerm.toLowerCase()));

      // 2. Category match
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;

      // 3. Level match
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

      // 4. Duration match
      let matchesDuration = true;
      if (selectedDuration !== 'All') {
        const weeks = parseInt(course.duration);
        if (selectedDuration === 'short') {
          matchesDuration = weeks < 8;
        } else if (selectedDuration === 'mid') {
          matchesDuration = weeks >= 8 && weeks <= 12;
        } else if (selectedDuration === 'long') {
          matchesDuration = weeks > 12;
        }
      }

      return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
    });
  }, [searchTerm, selectedCategory, selectedLevel, selectedDuration]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedLevel('All');
    setSelectedDuration('All');
  };

  return (
    <div className="py-12 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          badge="Course Catalog"
          title="Industry-Guided Technical Programs"
          subtitle="Explore live online training programs led by FAANG developers. Pick a path to start your career transition."
          align="center"
        />

        {/* Filter Controls Panel */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-premium mb-12 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Search Input */}
            <div className="lg:col-span-5 relative">
              <label htmlFor="search" className="sr-only">Search Courses</label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="h-4.5 w-4.5" />
              </div>
              <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses, skills, or mentors..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:bg-white focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all placeholder-slate-400"
              />
            </div>

            {/* Level Select */}
            <div className="lg:col-span-3">
              <label htmlFor="level-filter" className="sr-only">Filter by Level</label>
              <select
                id="level-filter"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:bg-white focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all"
              >
                <option value="All">All Difficulty Levels</option>
                {levels.filter(l => l !== 'All').map(lvl => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

            {/* Duration Select */}
            <div className="lg:col-span-3">
              <label htmlFor="duration-filter" className="sr-only">Filter by Duration</label>
              <select
                id="duration-filter"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:bg-white focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all"
              >
                {durations.map(dur => (
                  <option key={dur.value} value={dur.value}>{dur.label}</option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            <div className="lg:col-span-1 flex justify-end">
              <button
                onClick={handleResetFilters}
                className="w-full lg:w-11 h-11 flex items-center justify-center bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg text-slate-500 hover:text-brand-primary hover:bg-slate-100 transition-colors shadow-sm"
                title="Reset Filters"
              >
                <RefreshCw className="h-4 w-4" />
                <span className="lg:hidden text-sm font-semibold ml-2">Reset</span>
              </button>
            </div>

          </div>

          {/* Category Selector Pills */}
          <div className="border-t border-slate-50 pt-5 flex flex-wrap gap-2.5 items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1.5">
              <Filter className="h-3.5 w-3.5" />
              Categories:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-all duration-200 ${
                  (cat === 'All' && selectedCategory === 'All') || selectedCategory === cat
                    ? 'bg-brand-secondary border-brand-secondary text-white shadow-secondary-shadow'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600 hover:text-brand-primary'
                }`}
              >
                {cat === 'All' ? 'All Programs' : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Results Metadata */}
        <div className="mb-6 flex justify-between items-center text-sm text-slate-500 font-medium">
          <p>
            Showing <span className="font-bold text-brand-primary">{filteredCourses.length}</span> programs
          </p>
          {(searchTerm || selectedCategory !== 'All' || selectedLevel !== 'All' || selectedDuration !== 'All') && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-brand-secondary hover:text-brand-primary font-bold hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Courses Listing Grid */}
        <AnimatePresence mode="popLayout">
          {filteredCourses.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.map((course) => (
                <motion.div
                  layout
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <CourseCard course={course} showPrice={true} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <EmptyState 
              message="No programs match your search term or chosen combination of category, difficulty level, and course duration." 
              onClear={handleResetFilters}
            />
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
