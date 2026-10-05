import React from 'react';
import { 
  ArrowUp, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter, 
  Mail, 
  Phone, 
  MessageCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ReelwayLogo } from './ReelwayLogo';

interface FooterProps {
  onOpenLegal?: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About Agency', href: '#about' },
    { label: 'Services Arsenal', href: '#services' },
    { label: 'Selected Work', href: '#portfolio' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'The Protocol', href: '#process' },
    { label: 'Why REELWAY', href: '#why-us' },
    { label: 'Pricing Quotes', href: '#pricing' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com' },
    { name: 'YouTube', icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com' },
    { name: 'Twitter / X', icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com' },
  ];

  const seoKeywords = [
    'REELWAY',
    'Motion Graphics Agency',
    'Video Editing Agency',
    'Digital Marketing Agency',
    'Short-Form Video Production',
    '3D Product Animation',
    'Performance Paid Media',
    'Meta Ads Agency',
    'Google Ads',
    'SEO Agency',
    'Creative Digital Agency'
  ];

  return (
    <footer id="main-footer" className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-20 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-200">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <ReelwayLogo size="lg" />
            </div>

            <p className="text-base font-display font-bold text-slate-900 tracking-wide">
              Creative Content. Powerful Marketing. Real Growth.
            </p>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-normal">
              REELWAY doesn't just create videos or run ads. REELWAY creates attention, builds brands and drives digital growth through high-performance creative content.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-xl bg-white hover:bg-rose-600 hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-all duration-200 shadow-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-rose-600 transition-colors text-slate-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Capabilities */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><a href="#services" className="hover:text-slate-900">Motion Graphics & 3D</a></li>
              <li><a href="#services" className="hover:text-slate-900">High-End Video Editing</a></li>
              <li><a href="#services" className="hover:text-slate-900">Performance Media Buying</a></li>
              <li><a href="#services" className="hover:text-slate-900">Social Media Management</a></li>
              <li><a href="#services" className="hover:text-slate-900">Brand Motion Systems</a></li>
              <li><a href="#services" className="hover:text-slate-900">Video SEO & GEO</a></li>
            </ul>
          </div>

          {/* Contact / Inquiry */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <a href="mailto:reelway1r@gmail.com" className="text-slate-900 font-semibold hover:text-rose-600 block transition-colors">
                reelway1r@gmail.com
              </a>
              <a href="tel:+919084324136" className="text-slate-700 hover:text-slate-950 block transition-colors">
                +91 90843 24136
              </a>
              <a href="https://wa.me/919084324136" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-medium hover:text-emerald-800 block transition-colors">
                WhatsApp: Available 24/7
              </a>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-rose-600 text-xs font-bold border border-slate-300 shadow-sm"
                >
                  <span>Request Custom Quote</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="py-8 border-b border-slate-200">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3 font-semibold">
            SEO Directory & Specializations:
          </div>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((kw, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-600 hover:text-slate-900 shadow-sm transition-colors"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} REELWAY Creative Growth Agency. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
