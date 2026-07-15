import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  TrendingUp, 
  BookOpen, 
  Building2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Data constants
import { COURSES } from '../constants/courses';
import { TESTIMONIALS } from '../constants/testimonials';
import { PARTNERS } from '../constants/partners';

// Components
import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import LearningJourney from '../components/home/LearningJourney';
import CourseCard from '../components/common/CourseCard';
import StatsCard from '../components/common/StatsCard';
import TestimonialCard from '../components/common/TestimonialCard';
import SectionTitle from '../components/common/SectionTitle';

export default function Home() {
  // Filter for featured courses (first 8 featured)
  const featuredCourses = COURSES.filter(course => course.featured).slice(0, 8);

  const stats = [
    { value: 12000, suffix: "+", title: "Students Trained", icon: GraduationCap, description: "Professionals & college graduates" },
    { value: 95, suffix: "%", title: "Placement Rate", icon: TrendingUp, description: "Placed within 180 days of graduation" },
    { value: 17, suffix: "+", title: "Active Courses", icon: BookOpen, description: "AI, Full Stack & DevOps tracks" },
    { value: 50, suffix: "+", title: "Hiring Partners", icon: Building2, description: "Global tech & enterprise clients" }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Banner Section */}
      <Hero />

      {/* 2. Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8">
            <SectionTitle
              badge="Featured Programs"
              title="Launch Your Tech Career"
              subtitle="Pick from our highest-rated engineering paths, tailored to meet modern corporate expectations."
              align="left"
              className="mb-0 max-w-2xl"
            />
            <Link to="/courses" className="mt-4 md:mt-0 shrink-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-secondary border border-blue-100 hover:border-brand-secondary bg-blue-50/50 hover:bg-blue-50 px-5 py-3 rounded-lg transition-all duration-300"
              >
                View All Courses
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} showPrice={false} />
            ))}
          </div>

        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 4. Learning Journey Section */}
      <LearningJourney />

      {/* 5. Student Success Metrics Section */}
      <section className="py-20 bg-slate-50 relative border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="By The Numbers"
            title="Our Track Record Speaks For Itself"
            subtitle="Providing high-impact instruction that creates tangible career transitions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, idx) => (
              <StatsCard
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                title={stat.title}
                icon={stat.icon}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Carousel Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Alumni Stories"
            title="What Our Graduates Are Saying"
            subtitle="Read real student reviews detailing how their transition campaigns succeeded."
          />

          <div className="mt-12 relative px-4 md:px-8">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              pagination={{ clickable: true, el: '.custom-testimonials-pagination' }}
              navigation={{
                nextEl: '.swiper-button-next-t',
                prevEl: '.swiper-button-prev-t',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="pb-12"
            >
              {TESTIMONIALS.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-auto">
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Bullet Container */}
            <div className="custom-testimonials-pagination flex justify-center mt-6 space-x-2" />

            {/* Navigation controls */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 hidden lg:flex justify-between pointer-events-none z-10">
              <button className="swiper-button-prev-t pointer-events-auto bg-white border border-slate-100 text-slate-600 hover:text-brand-secondary w-11 h-11 rounded-full shadow-premium flex items-center justify-center -ml-6 transition-all hover:scale-105">
                &#8592;
              </button>
              <button className="swiper-button-next-t pointer-events-auto bg-white border border-slate-100 text-slate-600 hover:text-brand-secondary w-11 h-11 rounded-full shadow-premium flex items-center justify-center -mr-6 transition-all hover:scale-105">
                &#8594;
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Partner Companies Logos Section */}
      <section className="py-12 bg-slate-50 border-t border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Our Alumni Work at Leading Tech Brands
          </p>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 }
            }}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            speed={4000}
            className="flex items-center text-slate-400"
          >
            {PARTNERS.map((partner, idx) => (
              <SwiperSlide key={idx} className="flex justify-center items-center opacity-40 hover:opacity-85 hover:text-slate-700 transition-opacity duration-300">
                <div className="flex items-center justify-center h-12 px-6">
                  {partner.svg}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 8. Call To Action (CTA) Section */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(37,99,233,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 text-xs text-brand-accent font-semibold mb-2">
            <Sparkles className="h-4 w-4" />
            Join Our Next Batch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Elevate Your Engineering Career?
          </h2>
          <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed font-normal">
            Schedule a free 1-on-1 counseling call with our mentors. Let us map out your custom path, evaluate course syllabus options, and coordinate placement support.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-secondary hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-all shadow-secondary-shadow hover:shadow-premium flex items-center justify-center gap-2 group"
              >
                Book Free Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/courses">
              <button className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold px-8 py-3.5 rounded-lg text-sm transition-all shadow-lg">
                Browse Curriculum
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
