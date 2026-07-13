import { motion } from 'framer-motion';
import { Target, Eye, Tv, Users, Code, Award, CheckCircle2, ChevronRight } from 'lucide-react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Components
import SectionTitle from '../components/common/SectionTitle';

export default function About() {
  const trainers = [
    {
      name: "Dr. Aris Thorne",
      role: "Lead AI Instructor",
      credentials: "Former Lead AI Scientist at Google DeepMind",
      bio: "Aris has over 12 years of AI research experience. He holds a PhD in Computer Science and specializes in LLM alignment and agentic workflow designs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Alex Rivera",
      role: "Lead Frontend Instructor",
      credentials: "Former Senior UI Engineer at Vercel",
      bio: "Alex is a core contributor to several popular open-source React tooling utilities. He specializes in SSR, Next.js architecture, and UX optimization.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Dr. Elena Rostova",
      role: "Machine Learning Head",
      credentials: "Former Neural Network Researcher at NVIDIA",
      bio: "Elena specializes in CUDA acceleration techniques, computer vision networks, and large-scale model training workflows.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Liam O'Connor",
      role: "DevOps & Cloud Head",
      credentials: "Former VP of Infrastructure at Cloudflare",
      bio: "Liam has designed fault-tolerant cloud infrastructures for millions of active concurrent users. He is a Kubernetes and GitOps expert.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
    }
  ];

  const methodologySteps = [
    {
      icon: Tv,
      title: "Interactive Live Classes",
      description: "Lectures are delivered live. Chat, speak, screen-share, and write code alongside instructors who debug in real-time."
    },
    {
      icon: Code,
      title: "Enterprise Projects",
      description: "Students build real production-grade products, managing databases, configuring docker, and building secure authentication layers."
    },
    {
      icon: Users,
      title: "1-on-1 Code Review",
      description: "Instructors do thorough pull request reviews, teaching you refactoring, standard design patterns, and linting practices."
    },
    {
      icon: Award,
      title: "Hiring Preparation",
      description: "Intense interview training, resume auditing, GitHub optimization, and live mock drills before placement interviews."
    }
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", caption: "Interactive Coding Labs" },
    { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", caption: "Collaborative Study Lounge" },
    { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", caption: "Smart Classroom Setup" },
    { url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", caption: "Online Broadcast Studio" }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. Page Banner Intro */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,233,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <SectionTitle
            badge="About Algointelligenz"
            title="Pioneering the Future of Technical Education"
            subtitle="We are a premium IT training institute dedicated to raising the standard of software engineering globally."
            align="center"
            className="text-white"
          />
        </div>
      </section>

      {/* 2. Institute Overview / Why We Started */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Image left */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-152202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                  alt="Students coding together"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-secondary text-white p-6 rounded-2xl shadow-secondary-shadow hidden sm:block max-w-xs text-left">
                <span className="text-3xl font-extrabold block">2021</span>
                <span className="text-xs font-bold uppercase tracking-wider block mt-1">Academy Founded</span>
                <span className="text-[11px] text-slate-200 mt-2 block leading-relaxed">
                  Established to solve the shortage of industry-ready developers and AI prompt engineers.
                </span>
              </div>
            </div>

            {/* Content right */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Our Origin Story</span>
              <h2 className="text-3xl font-extrabold text-brand-primary tracking-tight leading-tight">
                Why We Started
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Standard technical degrees often fail to prepare developers for real-world software engineering environments. Many graduates exit with basic syntax knowledge, yet lack the skills to construct secure backend layers, Dockerize services, fine-tune models, or collaborate in team Git structures.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Algointelligenz was founded by lead developers from major tech groups to close this qualification gap. We built a project-first, mentor-driven academy that mirrors a professional engineering team. You do not just listen to slideshow lectures—you build and deploy SaaS applications.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-brand-primary">Curriculum Updated Weekly</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-brand-primary">Zero Filler Content</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-brand-primary">Practical Live Instruction</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-brand-primary">Lifetime Career Assistance</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-premium text-left space-y-4">
              <div className="bg-blue-50 text-brand-secondary p-3.5 rounded-xl inline-block">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary">Our Mission</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                To empower passionate learners with software development competencies and AI capabilities, enabling high-value career transitions through premium, live-guided instruction, real capstones, and systematic hiring support.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-premium text-left space-y-4">
              <div className="bg-teal-50/60 text-brand-accent p-3.5 rounded-xl inline-block">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary">Our Vision</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                To build the world's most trusted engineering training platform, recognized by employers globally as the gold standard of practical IT training, and help 50,000+ engineers unlock their high-growth potential.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Training Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="How We Teach"
            title="The Academy Training Methodology"
            subtitle="An intensive, hands-on framework mimicking real agile engineering workflows."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {methodologySteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-premium text-left space-y-4">
                  <span className="text-xs font-bold text-slate-300 font-mono block">STAGE 0{idx + 1}</span>
                  <div className="bg-slate-50 text-slate-700 p-3 rounded-xl inline-block">
                    <IconComponent className="h-5 w-5 text-brand-secondary" />
                  </div>
                  <h4 className="text-base font-bold text-brand-primary">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{step.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Meet Our Trainers */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Faculty Panel"
            title="Learn from Industry Practitioners"
            subtitle="Meet the lead engineering mentors guiding your technical transition. Highly qualified instructors with corporate history."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {trainers.map((trainer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-premium flex flex-col h-full hover:shadow-premium-hover transition-all duration-300"
              >
                <div className="h-64 w-full bg-slate-100">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-left flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-brand-primary">{trainer.name}</h4>
                    <p className="text-xs font-semibold text-brand-secondary">{trainer.role}</p>
                    <p className="text-[10px] uppercase font-bold text-slate-400 leading-tight">{trainer.credentials}</p>
                    <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-50">{trainer.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Placement Support Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <SectionTitle
            badge="Hiring Pipeline"
            title="Our Dedicated Placement Support Process"
            subtitle="How we prepare and introduce you to our partner hiring managers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative text-left space-y-3 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <span className="text-4xl font-extrabold text-blue-100 block">01</span>
              <h4 className="text-base font-bold text-brand-primary">Resume Audits & GitHub Setup</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Advisors restructure your CV to align with tech keyword standards, highlighting your capstones, Git commits, and core skills.
              </p>
            </div>
            
            <div className="relative text-left space-y-3 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <span className="text-4xl font-extrabold text-teal-100 block">02</span>
              <h4 className="text-base font-bold text-brand-primary">Weekly Mock Panels</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Take part in mock coding drills and architectural interviews led by FAANG developers. Get detailed feedback logs on your technical gaps.
              </p>
            </div>

            <div className="relative text-left space-y-3 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <span className="text-4xl font-extrabold text-emerald-100 block">03</span>
              <h4 className="text-base font-bold text-brand-primary">Partner Referrals & Placement</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Get referred to corporate clients. Skip preliminary screening tests and proceed directly to technical panel discussions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Infrastructure Gallery (Swiper) */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Facility Tour"
            title="Our Learning Facilities & Studio"
            subtitle="Take a look at the smart classrooms, collab zones, and high-performance labs hosting our onsite training programs."
          />

          <div className="mt-12 rounded-3xl overflow-hidden border border-slate-100 shadow-premium bg-white p-4">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="rounded-2xl"
            >
              {galleryImages.map((img, idx) => (
                <SwiperSlide key={idx} className="relative group">
                  <div className="h-96 w-full">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/80 to-transparent p-6 text-left">
                    <p className="text-white text-base font-bold tracking-wide">
                      {img.caption}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

    </div>
  );
}
