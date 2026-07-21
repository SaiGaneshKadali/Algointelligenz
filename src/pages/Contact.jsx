import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../context/ToastContext';
import { useCallModal } from '../context/CallModalContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  HelpCircle, 
  Plus, 
  Minus, 
  Send
} from 'lucide-react';

// Components
import SectionTitle from '../components/common/SectionTitle';

export default function Contact() {
  const { addToast } = useToast();
  const { openCallModal } = useCallModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Generative AI',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const coursesList = [
    "Generative AI",
    "ChatGPT & Prompt Engineering",
    "Machine Learning Engineering",
    "Deep Learning & Neural Networks",
    "React JS Development",
    "MERN Full Stack Development",
    "Python Full Stack Development",
    "AWS Cloud Architect",
    "DevOps Engineering Masterclass"
  ];

  const faqs = [
    {
      question: "Are the classes online, or do you have physical classroom setups?",
      answer: "We offer both! Most of our batches are delivered as high-definition live interactive online webinars. However, we also host hands-on coding labs, physical bootcamps, and career counseling sessions at our Silicon Valley campus location."
    },
    {
      question: "Does the academy provide a job placement guarantee?",
      answer: "We provide 100% dedicated placement support. This includes 1-on-1 resume optimization, simulated FAANG mock panel interviews, and direct portfolio referral drives. Our hiring partnerships allow graduates to skip basic filters and secure direct interviews with over 50 leading firms."
    },
    {
      question: "Can I pay the course fee in monthly installments?",
      answer: "Yes, we partner with major educational finance companies to offer 0% EMI (Equated Monthly Installment) payment options. You can break down the course fee into 6, 9, or 12 monthly payments."
    },
    {
      question: "What happens if I have to miss a live weekend lecture?",
      answer: "Every live lecture is recorded and published to our student portal within 2 hours of completion. You retain lifetime access to the recordings, codebase files, slides, and our active student/mentor Discord community."
    },
    {
      question: "Is there any refund policy if I withdraw from the program?",
      answer: "Yes, we offer a full 100% refund policy within the first 7 days (or first 2 lectures) of starting your cohort if you feel the training structure does not align with your expectations."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (!formData.name || !formData.email || !formData.phone) {
      addToast("Please fill in all required fields.", "warning");
      return;
    }
    // Set success indicator
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: 'Generative AI',
      message: ''
    });
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="space-y-0 bg-brand-bg min-h-screen">
      
      {/* 1. Page Header */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(37,99,233,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <SectionTitle
            badge="Contact Academy"
            title="Get in Touch with Our Mentors"
            subtitle="Have questions about cohorts, enrollment fees, or placement partnerships? Send us a message today."
            align="center"
            dark={true}
          />
        </div>
      </section>

      {/* 2. Contact Split Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Coordinates Info */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold text-brand-secondary uppercase tracking-widest">Connect Directly</span>
                <h2 className="text-3xl font-extrabold text-brand-primary tracking-tight">
                  Contact Coordinates
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  Drop by our Bangalore campus, dial our advisors, or drop an email query. Our career counseling desk is open 7 days a week.
                </p>
              </div>

              {/* Coordinates Grid */}
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-brand-secondary p-3 rounded-xl shrink-0 border border-blue-100">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-primary">Office Address</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      41 1st main, BTM 1st stage,<br />
                      Bangalore - 560029
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-brand-secondary p-3 rounded-xl shrink-0 border border-blue-100">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-primary">Advisors Desk</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      +91 7899 917 141
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-brand-secondary p-3 rounded-xl shrink-0 border border-blue-100">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-primary">General Inquiries</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Tazeem@algointelligenz.com
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our Social Channels</h4>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-slate-50 border border-slate-100 hover:bg-brand-secondary hover:text-white p-3 rounded-xl text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-slate-50 border border-slate-100 hover:bg-brand-secondary hover:text-white p-3 rounded-xl text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="bg-slate-50 border border-slate-100 hover:bg-brand-secondary hover:text-white p-3 rounded-xl text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            {/* Right: Validation Form (Form Commented Out for Future Use) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 shadow-premium text-left relative overflow-hidden flex flex-col justify-center min-h-[400px]">
              {/* <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="text-xs font-bold text-slate-700 block mb-2">Full Name *</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Aarav Sharma"
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 text-sm focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-xs font-bold text-slate-700 block mb-2">Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="aarav@google.com"
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 text-sm focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="text-xs font-bold text-slate-700 block mb-2">Phone Number *</label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 234-5678"
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 text-sm focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="course" className="text-xs font-bold text-slate-700 block mb-2">Course Preference</label>
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 text-sm focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors"
                        >
                          {coursesList.map((course, idx) => (
                            <option key={idx} value={course}>{course}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-xs font-bold text-slate-700 block mb-2">Inquiry / Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your background or list your counseling availability..."
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 text-sm focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-secondary hover:bg-brand-primary text-white py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-secondary-shadow hover:shadow-premium flex items-center justify-center gap-2 group"
                    >
                      <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Submit Application Request
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 space-y-4"
                  >
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full border border-emerald-100 flex items-center justify-center text-3xl shadow-sm">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-brand-primary">Application Received!</h3>
                    <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting us. A dedicated academic mentor will review your details and contact you via email/phone within 24 business hours to book your counseling session.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-brand-secondary hover:text-brand-primary pt-4 hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence> */}

              <div className="space-y-6 text-center max-w-md mx-auto py-8">
                <div className="w-16 h-16 bg-blue-50 text-brand-secondary rounded-2xl flex items-center justify-center mx-auto border border-blue-100 shadow-sm text-2xl font-bold">
                  💬
                </div>
                <h3 className="text-xl font-extrabold text-brand-primary tracking-tight">Connect with a Career Advisor</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  We are here to guide your learning journey! Since we do not collect personal information through this website, please reach out to our admissions team directly via email or phone.
                </p>
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-center gap-4 text-xs font-bold uppercase tracking-wider">
                  <button
                    type="button"
                    onClick={openCallModal}
                    className="bg-brand-secondary hover:bg-brand-primary text-white py-3.5 px-6 rounded-lg transition-colors text-center shadow-secondary-shadow"
                  >
                    Call Advisors
                  </button>
                  <a href="mailto:Tazeem@algointelligenz.com" className="bg-white border border-slate-200 hover:border-slate-300 text-brand-primary py-3.5 px-6 rounded-lg transition-colors text-center">
                    Email Admissions
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Map Section */}
      <section className="h-96 w-full bg-slate-100 border-t border-b border-slate-200 relative overflow-hidden">
        {/* Real Google Maps embed pinned to address */}
        <iframe 
          title="Google Map Campus Location"
          src="https://maps.google.com/maps?q=41+1st+main+BTM+1st+stage+Bangalore+560029&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-4 shadow-xl z-10 hidden sm:block max-w-xs text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping shrink-0" />
            <p className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">Algointelligenz Campus</p>
          </div>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            41 1st main, BTM 1st stage, Bangalore - 560029
          </p>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Frequently Asked Questions"
            title="Got Questions? We Have Answers"
            subtitle="Review typical queries regarding batch structures, counseling sessions, placement systems, and refund rules."
          />

          <div className="mt-12 space-y-4 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-100 shadow-premium overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between font-bold text-sm text-brand-primary hover:text-brand-secondary transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-slate-400" />
                      {faq.question}
                    </span>
                    {isOpen ? <Minus className="h-5 w-5 text-brand-secondary shrink-0" /> : <Plus className="h-5 w-5 text-brand-secondary shrink-0" />}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-slate-50/50 text-xs text-slate-500 leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
