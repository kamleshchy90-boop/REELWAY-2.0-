import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin, 
  MessageCircle, 
  ArrowUp, 
  Sparkles,
  Heart
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
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Offers', href: '#festival-offers' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com' },
    { name: 'Facebook', icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com' },
    { name: 'YouTube', icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com' },
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com' },
    { name: 'WhatsApp', icon: <MessageCircle className="w-4 h-4" />, href: 'https://wa.me/919084324136' },
  ];

  const seoKeywords = [
    'REELWAY',
    'Motion Graphics Agency',
    'Video Editing Agency',
    'Digital Marketing Agency',
    'Social Media Marketing',
    'Performance Marketing',
    'Meta Ads',
    'Google Ads',
    'SEO Agency',
    'Creative Digital Agency'
  ];

  return (
    <footer id="main-footer" className="bg-[#050608] text-zinc-400 border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <ReelwayLogo size="lg" />
            </div>

            <p className="text-base font-display font-bold text-white tracking-wide">
              Creative Content. Powerful Marketing. Real Growth.
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm font-light">
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
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-rose-600 hover:text-white text-zinc-300 border border-white/10 flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-rose-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#services" className="hover:text-white">Motion Graphics & 3D</a></li>
              <li><a href="#services" className="hover:text-white">High-End Video Editing</a></li>
              <li><a href="#services" className="hover:text-white">Performance Media Buying</a></li>
              <li><a href="#services" className="hover:text-white">Social Media Management</a></li>
              <li><a href="#services" className="hover:text-white">Brand Motion Systems</a></li>
              <li><a href="#services" className="hover:text-white">Video SEO & GEO</a></li>
            </ul>
          </div>

          {/* Contact / Inquiry */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <a href="mailto:reelway1r@gmail.com" className="text-white font-medium hover:text-rose-400 block transition-colors">
                reelway1r@gmail.com
              </a>
              <a href="tel:+919084324136" className="text-zinc-300 hover:text-white block transition-colors">
                +91 90843 24136
              </a>
              <a href="https://wa.me/919084324136" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 block transition-colors">
                WhatsApp: Available 24/7
              </a>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-rose-400 text-xs font-bold border border-white/10"
                >
                  <span>Request Custom Quote</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="py-8 border-b border-white/5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3">
            SEO Directory & Specializations:
          </div>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((kw, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} REELWAY Creative Growth Agency. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
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
