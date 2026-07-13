import { motion } from 'framer-motion';
import { UserCheck, BookOpen, Laptop, FileCheck, Landmark } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function LearningJourney() {
  const steps = [
    {
      icon: UserCheck,
      stepNum: "01",
      title: "Enroll & Align",
      description: "Apply for your preferred cohort. Connect with a career advisor to review goals, match prerequisites, and set batch timings."
    },
    {
      icon: BookOpen,
      stepNum: "02",
      title: "Live Guided Lectures",
      description: "Attend interactive online classrooms. Code alongside engineers from high-growth software teams and work through challenging assignments."
    },
    {
      icon: Laptop,
      stepNum: "03",
      title: "Build Capstone Portfolios",
      description: "Build five enterprise projects, deploy code to live environments, write tests, and document your repository details."
    },
    {
      icon: FileCheck,
      stepNum: "04",
      title: "Review & Certify",
      description: "Pass peer code-reviews, complete assignments, and claim your cryptographic credential verified by hiring managers."
    },
    {
      icon: Landmark,
      stepNum: "05",
      title: "Placement Drive",
      description: "Optimize your resume, practice mock panel interviews, and get referred to our partner network of over 50 hiring companies."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: '100%', transition: { duration: 1.5, ease: "easeInOut" } }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionTitle
          badge="Learning Path"
          title="Your Roadmap from Classroom to Career"
          subtitle="Our structured learning pipeline is engineered to develop real industry competence."
        />

        {/* Timeline Wrapper */}
        <div className="relative mt-16 pl-6 md:pl-0">
          
          {/* Vertical Center Line */}
          <div className="absolute left-[20px] md:left-1/2 top-2 bottom-2 w-[2px] bg-slate-100 -translate-x-1/2 hidden md:block">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-brand-secondary via-brand-accent to-emerald-500 rounded-full"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 relative"
          >
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  variants={stepVariants}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Outer spacing to balance timeline */}
                  <div className="w-full md:w-1/2 md:px-12 flex justify-start md:justify-end">
                    <div className={`w-full max-w-md bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-300 ${
                      isEven ? 'md:text-left' : 'md:text-right'
                    }`}>
                      <span className="text-xs font-bold text-brand-secondary uppercase block mb-1">
                        Step {step.stepNum}
                      </span>
                      <h3 className="text-lg font-bold text-brand-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Timeline Node */}
                  <div className="absolute left-[-26px] md:left-1/2 md:-translate-x-1/2 bg-white border border-slate-100 p-2.5 rounded-full shadow-premium z-20 flex items-center justify-center">
                    <div className="bg-brand-secondary text-white p-2.5 rounded-full">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Empty side for centering structure */}
                  <div className="hidden md:block w-1/2 px-12" />
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
