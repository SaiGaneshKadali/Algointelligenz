import { motion } from 'framer-motion';
import { 
  Award, 
  ArrowUpRight, 
  Briefcase, 
  FileText, 
  HelpCircle, 
  Compass, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign 
} from 'lucide-react';
import CountUp from 'react-countup';
const CountUpComponent = typeof CountUp === 'function' ? CountUp : (CountUp.default || CountUp);
import { useInView } from 'react-intersection-observer';

// Data
import { TESTIMONIALS } from '../constants/testimonials';
import { PARTNERS } from '../constants/partners';

// Components
import SectionTitle from '../components/common/SectionTitle';

export default function Placements() {
  const { ref: counterRef, inView: countersInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const placementMetrics = [
    { value: 42, suffix: " LPA", label: "Highest Package Offered", description: "Generative AI alumni placed in Silicon Valley", icon: DollarSign, color: "text-amber-500 bg-amber-50 border-amber-100" },
    { value: 12.8, suffix: " LPA", label: "Average Salary Package", description: "Across MERN, DevOps & AI graduates", icon: TrendingUp, color: "text-blue-600 bg-blue-50 border-blue-100", decimals: 1 },
    { value: 95, suffix: "%", label: "Successful Placements", description: "Job secured within 6 months of graduation", icon: Briefcase, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
    { value: 50, suffix: "+", label: "Active Hiring Partners", description: "MNCs and technical startups", icon: Award, color: "text-purple-600 bg-purple-50 border-purple-100" }
  ];

  const preparationPillars = [
    {
      icon: FileText,
      title: "Resume & Portfolio Tuning",
      description: "Our advisors work 1-on-1 to audit your CV, highlight your capstone projects, write descriptions, and review your GitHub commits to make your profile outstanding."
    },
    {
      icon: HelpCircle,
      title: "Intense Mock Interviews",
      description: "Participate in simulated technical and behavioral panel discussions. Solve dynamic coding questions, explain system designs, and receive actionable grading reports."
    },
    {
      icon: Compass,
      title: "Strategic Career Guidance",
      description: "Consult with industry veterans who help clarify career goals, evaluate job offers, align skill benchmarks, and navigate corporate hierarchies."
    }
  ];

  const salaryComparison = [
    { track: "Generative AI Specialist", salary: "18 - 32 LPA", avgHike: "+75%" },
    { track: "Machine Learning Engineer", salary: "14 - 28 LPA", avgHike: "+65%" },
    { track: "MERN Full Stack Developer", salary: "8 - 18 LPA", avgHike: "+55%" },
    { track: "DevOps & Cloud Engineer", salary: "10 - 22 LPA", avgHike: "+60%" },
    { track: "React UI Architect", salary: "8 - 16 LPA", avgHike: "+50%" }
  ];

  return (
    <div className="space-y-0 bg-brand-bg min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,233,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <SectionTitle
            badge="Placement Portal"
            title="Accelerating High-Growth Careers"
            subtitle="Explore our verified career statistics, alumni placements, salary indicators, and dedicated hiring frameworks."
            align="center"
            dark={true}
          />
        </div>
      </section>

      {/* 2. Placements Statistics Counters */}
      <section ref={counterRef} className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementMetrics.map((metric, idx) => {
              const IconComp = metric.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-premium flex flex-col justify-between text-left h-full">
                  <div>
                    <div className={`p-3 rounded-xl inline-block mb-4 border ${metric.color}`}>
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="text-3xl font-extrabold text-brand-primary block tracking-tight">
                      {countersInView ? (
                        <CountUpComponent
                          start={0}
                          end={metric.value}
                          duration={2.5}
                          decimals={metric.decimals || 0}
                          suffix={metric.suffix}
                        />
                      ) : (
                        `0${metric.suffix}`
                      )}
                    </span>
                    <h4 className="text-sm font-bold text-slate-800 mt-2 block">{metric.label}</h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed border-t border-slate-50 pt-2">{metric.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Salary Range Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Salary Packages"
            title="Average Compensation Packages by Program Track"
            subtitle="Typical compensation figures reported by alumni in their post-graduation offers."
          />

          <div className="bg-white rounded-2xl border border-slate-100 shadow-premium overflow-hidden mt-8">
            <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider py-4 px-6 text-left">
              <span>Program Track</span>
              <span>Salary Range</span>
              <span className="text-right">Average Salary Hike</span>
            </div>
            <div className="divide-y divide-slate-100">
              {salaryComparison.map((item, idx) => (
                <div key={idx} className="grid grid-cols-3 text-sm py-4 px-6 items-center text-slate-600 font-medium hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-brand-primary">{item.track}</span>
                  <span>{item.salary}</span>
                  <span className="text-right text-emerald-600 font-bold">{item.avgHike}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Student Placement Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Alumni Placed"
            title="Recent Alumni Placement Spotlights"
            subtitle="Meet our graduates who successfully transitioned to international engineering teams."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {TESTIMONIALS.map((alumni) => (
              <motion.div
                key={alumni.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group"
              >
                {/* Glow Accent */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div>
                  {/* Top: Student Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={alumni.avatar}
                      alt={alumni.name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-brand-primary leading-tight">{alumni.name}</h4>
                      <span className="text-[10px] text-slate-400 font-medium">{alumni.courseTaken} Alumni</span>
                    </div>
                  </div>
                  
                  {/* Placed at */}
                  <div className="bg-white px-4 py-3.5 rounded-xl border border-slate-100 mb-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold block uppercase">Placed Company</span>
                      <span className="text-sm font-extrabold text-brand-primary block">{alumni.company}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 font-semibold block uppercase">Compensation</span>
                      <span className="text-sm font-bold text-emerald-600 block">{alumni.salaryPackage}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-normal italic">
                  "{alumni.text.slice(0, 140)}..."
                </p>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Career Support Services */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Career Framework"
            title="Our Step-by-Step Preparation Services"
            subtitle="We provide a structured ecosystem to prepare you for technical challenges."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {preparationPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-premium text-left space-y-4">
                  <div className="bg-blue-50 text-brand-secondary p-4 rounded-xl inline-block">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary">{pillar.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">{pillar.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Hiring Partners Gallery */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-10">
            Our Graduates Work with These Trusted Brands
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center text-slate-300">
            {PARTNERS.map((partner, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center p-4 border border-slate-100 hover:border-slate-200 rounded-xl hover:shadow-premium bg-slate-50/50 text-slate-400 hover:text-slate-600 transition-all duration-300"
                title={partner.name}
              >
                {partner.svg}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
