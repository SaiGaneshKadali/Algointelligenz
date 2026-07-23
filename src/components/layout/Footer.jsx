import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { useCallModal } from '../../context/CallModalContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { addToast } = useToast();
  const { openCallModal } = useCallModal();

  const handleSubscribe = (e) => {
    e.preventDefault();
    addToast('Thank you for subscribing to our newsletter! We will send you updates on new batches.', 'success');
    e.target.reset();
  };

  return (
    <footer className="bg-brand-primary text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Algointelligenz Logo" 
                className="h-14 w-auto object-contain rounded-lg"
              />
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white block leading-none">
                  Algointelligenz
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold block mt-0.5">
                  Learn Smart. Build Future.
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 pt-2">
              Empowering professionals and students with advanced technical skills in Artificial Intelligence, Software Engineering, Cloud Architecting, and DevOps.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-brand-secondary text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1FSecDSNCC/" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-brand-secondary text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/algointelligenz?igsh=YTZoM3R2cXU3b3Nw&utm_source=qr&wa_status_inline=true" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-brand-secondary text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center" aria-label="Instagram">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  All Courses
                </Link>
              </li>
              {/* <li>
                <Link to="/placements" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Placements & Success
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="space-y-4 text-sm">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
              Get in Touch
            </h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
              <span>41 1st main, BTM 1st stage, Bangalore - 560029</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-brand-accent shrink-0" />
              <span>+91 7899 917 141</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-brand-accent shrink-0" />
              <span>Tazeem@algointelligenz.com</span>
            </div>
          </div>

          {/* Column 4: Admissions Desk (Form Commented Out for Future Use) */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
              Admissions Desk
            </h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Have any questions? Speak directly to our advisors to clear your doubts and enroll.
            </p>
            <div className="space-y-2">
              <button
                type="button"
                onClick={openCallModal}
                className="w-full flex items-center justify-center bg-brand-secondary hover:bg-brand-secondary/90 text-white rounded-lg py-2.5 text-sm font-semibold transition-colors duration-300 shadow-secondary-shadow"
              >
                Call Advisors
              </button>
              <a href="mailto:Tazeem@algointelligenz.com" className="w-full flex items-center justify-center bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 rounded-lg py-2.5 text-sm font-semibold transition-colors duration-300">
                Email Admissions
              </a>
            </div>
            {/* <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 text-sm focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary placeholder-slate-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white rounded-lg py-2.5 text-sm font-medium transition-colors duration-300 shadow-secondary-shadow"
              >
                Subscribe
              </button>
            </form> */}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {currentYear} Algointelligenz. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
