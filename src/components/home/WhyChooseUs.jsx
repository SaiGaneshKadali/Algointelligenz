import { motion } from 'framer-motion';
import { Tv, Users, Briefcase, Code, Award, MessageSquare } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: Tv,
      title: "Live Interactive Training",
      description: "No boring pre-recorded lectures. Learn from real instructors in real-time, ask questions, and resolve bugs instantly."
    },
    {
      icon: Users,
      title: "Elite Industry Mentors",
      description: "Get weekly 1-on-1 mentorship and career advice from software developers currently working at FAANG and Fortune 500 companies."
    },
    {
      icon: Briefcase,
      title: "100% Placement Assistance",
      description: "Dedicated placement cell organizing exclusive hiring drives, sharing job opportunities, and coordinating partner referrals."
    },
    {
      icon: Code,
      title: "Production-Grade Projects",
      description: "Build robust SaaS systems, scalable ML models, and containerized cloud services. Build a GitHub portfolio that stands out."
    },
    {
      icon: Award,
      title: "Globally Recognized Certificates",
      description: "Showcase course completion certificates verified by our institutional partners and highly valued by HR specialists."
    },
    {
      icon: MessageSquare,
      title: "Rigorous Interview Prep",
      description: "Comprehensive DSA review sessions, system design deep dives, mock behavioral drills, and technical panel reviews."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionTitle
          badge="Why Algointelligenz"
          title="Designed for Fast-Track Career Success"
          subtitle="We bridge the gap between traditional college curriculums and high-growth industry demands."
        />

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Icon Wrapper */}
                <div className="bg-blue-50/60 text-brand-secondary p-3.5 rounded-xl inline-block mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>
                
                {/* Header & Text */}
                <h3 className="text-lg font-bold text-brand-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
