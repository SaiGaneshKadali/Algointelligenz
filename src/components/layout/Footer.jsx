import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { addToast } = useToast();

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
                className="h-10 w-auto object-contain rounded-lg"
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
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-brand-secondary text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-brand-secondary text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
              <li>
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
              </li>
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
              <span>100 Technology Parkway, Suite 500, Silicon Valley, CA 94025</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-brand-accent shrink-0" />
              <span>+1 (555) 234-5678</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-brand-accent shrink-0" />
              <span>info@aitechacademy.edu</span>
            </div>
            <div className="pt-2 text-xs text-slate-500">
              <p className="font-semibold text-slate-400">Business Hours:</p>
              <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
              <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
              Subscribe to Newsletter
            </h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Stay updated with course releases, early-bird discounts, and placement drives.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
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
            </form>
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
