import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-brand-dark overflow-hidden min-h-[90vh] flex items-center pt-8 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,233,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0)_80%,rgba(15,23,42,0.9))] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Trust Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-full px-4 py-1.5 shadow-lg backdrop-blur-sm"
            >
              <Sparkles className="h-5 w-5 text-brand-accent animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
                #1 Rated Tech Training Academy
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Master AI and <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400">
                Software Skills
              </span> <br />
              for Tomorrow's Careers.
            </motion.h1>

            {/* Paragraph Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-normal"
            >
              Accelerate your engineering journey with hands-on, live-guided bootcamp training. Gain practical project experience and 100% dedicated placement support from industry mentors.
            </motion.p>

            {/* Key benefits list */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 pt-2"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0" />
                <span>Live Interactive Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0" />
                <span>Mentors from Google, AWS, Vercel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0" />
                <span>5+ Enterprise Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0" />
                <span>100% Placement Guarantee Support</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <Link to="/courses" className="shrink-0">
                <button className="w-full sm:w-auto bg-brand-secondary hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-all shadow-secondary-shadow hover:shadow-premium flex items-center justify-center gap-2 group">
                  Explore Courses
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

          </motion.div>

          {/* Hero Right Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Tech Visual Component Box */}
            <div className="relative z-10 bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
              
              {/* Fake Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-900 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                  ai-agent-training.js
                </div>
              </div>

              {/* Fake Terminal Code Content */}
              <pre className="font-mono text-xs text-blue-400 leading-relaxed overflow-x-auto text-left">
                <code>
                  <span className="text-slate-500">// Initialize AI Academy Model</span><br />
                  <span className="text-purple-400">const</span> academy = <span className="text-purple-400">new</span> <span className="text-teal-300">Algointelligenz</span>();<br /><br />
                  <span className="text-slate-500">// Fetch Live Syllabus Modules</span><br />
                  <span className="text-purple-400">await</span> academy.loadModules([<br />
                  &nbsp;&nbsp;<span className="text-emerald-300">"Prompt_Engineering_and_LLM"</span>,<br />
                  &nbsp;&nbsp;<span className="text-emerald-300">"Applied_AI_with_Python_Foundation"</span>,<br />
                  &nbsp;&nbsp;<span className="text-emerald-300">"Agentic_AI_and_LLM_Engineering"</span>,<br />
                  &nbsp;&nbsp;<span className="text-emerald-300">"Python_Backend_Development_Deployment"</span><br />
                  ]);<br /><br />
                  <span className="text-slate-500">// Optimize Student Success</span><br />
                  <span className="text-purple-400">const</span> path = academy.getCareerPath(<span className="text-slate-200">"student"</span>);<br />
                  <span className="text-purple-400">await</span> path.trainLive();<br />
                  <span className="text-purple-400">await</span> path.buildEnterpriseProjects();<br />
                  <span className="text-purple-400">await</span> path.getCertified();<br />
                  <span className="text-purple-400">const</span> job = <span className="text-purple-400">await</span> path.placementSupport();<br /><br />
                  <span className="text-amber-300">console</span>.log(<span className="text-emerald-300">{"`Status: ${job.company} Placed! 🎉`"}</span>);
                </code>
              </pre>
            </div>

            {/* Glowing Cards overlay */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-premium flex items-center gap-3 backdrop-blur-md"
            >
              <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-xl">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-400 block font-semibold">Average Hike</span>
                <span className="text-sm font-bold text-white block">68% Salary Hike</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-premium flex items-center gap-3 backdrop-blur-md"
            >
              <div className="bg-blue-500/20 text-blue-400 p-2 rounded-xl">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-400 block font-semibold">Active Placements</span>
                <span className="text-sm font-bold text-white block">1,200+ Placed</span>
              </div>
            </motion.div>

            {/* Decorative background blur balls */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-60 h-60 rounded-full bg-teal-500/10 blur-3xl" />
            <div className="absolute -z-10 -top-8 -left-8 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
