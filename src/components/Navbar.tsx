import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Menu, 
  X, 
  ArrowUpRight, 
  Calendar, 
  Tag,
  ChevronDown,
  Sparkles,
  Gift,
  Check
} from 'lucide-react';
import { ReelwayLogo } from './ReelwayLogo';
import confetti from 'canvas-confetti';

export const FAVORITE_OFFERS = [
  { id: 'diwali', name: 'Diwali Dhamaka Offer', emoji: '🪔', discount: '15% OFF', festival: 'Diwali', highlight: true },
  { id: 'holi', name: 'Holi Rang Offer', emoji: '🌈', discount: '7% OFF', festival: 'Holi' },
  { id: 'navratri', name: 'Navratri Shakti Offer', emoji: '🔱', discount: '12% OFF', festival: 'Navratri' },
  { id: 'dussehra', name: 'Dussehra Vijay Offer', emoji: '🏹', discount: '13% OFF', festival: 'Dussehra' },
  { id: 'ganesh', name: 'Ganesh Utsav Offer', emoji: '🐘', discount: '5% OFF', festival: 'Ganesh Utsav' },
  { id: 'janmashtami', name: 'Janmashtami Special Offer', emoji: '🦚', discount: '12% OFF', festival: 'Janmashtami' },
  { id: 'ramnavami', name: 'Ram Navami Shubh Offer', emoji: '🚩', discount: '5% OFF', festival: 'Ram Navami' },
  { id: 'makarsankranti', name: 'Makar Sankranti Utsav Offer', emoji: '☀️', discount: '3% OFF', festival: 'Makar Sankranti' },
  { id: 'mahashivratri', name: 'Mahashivratri Maha Offer', emoji: '🔱', discount: '10% OFF', festival: 'Mahashivratri' },
  { id: 'hanumanjayanti', name: 'Hanuman Jayanti Special Offer', emoji: '🚩', discount: '6% OFF', festival: 'Hanuman Jayanti' },
];

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenShowreel: () => void;
  onNavigateContact: () => void;
  onSelectOffer?: (offerName: string, discount: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation, 
  onOpenShowreel,
  onNavigateContact,
  onSelectOffer
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offersDropdownOpen, setOffersDropdownOpen] = useState(false);
  const [mobileOffersExpanded, setMobileOffersExpanded] = useState(false);
  const [recentlyClaimed, setRecentlyClaimed] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOffersDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Favorite Offer', href: '#festival-offers', isSpecialOffer: true },
    { label: 'Why REELWAY', href: '#why-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setOffersDropdownOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClaimOffer = (offer: typeof FAVORITE_OFFERS[0]) => {
    setRecentlyClaimed(offer.id);
    setOffersDropdownOpen(false);
    setMobileMenuOpen(false);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.2, x: 0.5 }
      });
    } catch {
      // safe fallback
    }

    if (onSelectOffer) {
      onSelectOffer(offer.name, offer.discount);
    } else {
      const contactElem = document.querySelector('#contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setTimeout(() => {
      setRecentlyClaimed(null);
    }, 2500);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#090a0f]/92 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/60' 
            : 'bg-gradient-to-b from-[#090a0f]/90 via-[#090a0f]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            id="brand-logo"
          >
            <ReelwayLogo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              if (link.isSpecialOffer) {
                return (
                  <div 
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setOffersDropdownOpen(true)}
                    onMouseLeave={() => setOffersDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setOffersDropdownOpen(!offersDropdownOpen)}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 text-amber-300 bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/40 hover:border-amber-400 hover:from-amber-500/30 hover:to-rose-500/30 shadow-sm shadow-amber-500/10 cursor-pointer"
                    >
                      <Tag className="w-3.5 h-3.5 text-amber-400" />
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3 h-3 text-amber-400 transition-transform duration-200 ${offersDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Desktop Dropdown Flyout */}
                    {offersDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] p-3.5 bg-[#0e1017]/98 backdrop-blur-2xl border border-amber-500/40 rounded-2xl shadow-2xl shadow-black/80 z-50 animate-in fade-in zoom-in-95 duration-150">
                        
                        <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-white/10 px-1">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                            <span className="text-xs font-display font-black text-amber-300 uppercase tracking-wider">
                              Favorite Festive Offers
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                            UP TO 15% OFF
                          </span>
                        </div>

                        {/* 10 Offers Grid */}
                        <div className="grid grid-cols-1 gap-1 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar">
                          {FAVORITE_OFFERS.map((offer) => (
                            <button
                              key={offer.id}
                              type="button"
                              onClick={() => handleClaimOffer(offer)}
                              className="w-full text-left p-2 rounded-xl bg-white/[0.03] hover:bg-amber-500/15 border border-white/5 hover:border-amber-500/40 transition-all flex items-center justify-between group cursor-pointer"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-base shrink-0">{offer.emoji}</span>
                                <div className="truncate">
                                  <span className="text-xs font-semibold text-zinc-200 group-hover:text-amber-300 transition-colors">
                                    {offer.name}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0 pl-2">
                                <span className="text-[11px] font-mono font-black text-rose-400 bg-rose-500/15 group-hover:bg-rose-500 group-hover:text-white transition-colors px-2 py-0.5 rounded-lg border border-rose-500/30">
                                  {offer.discount}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-white/10 px-1 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                          <span>Click any offer to apply instant discount</span>
                          <span className="text-amber-400 font-bold flex items-center gap-1">
                            Claim <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </div>

                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 text-zinc-300 hover:text-white hover:bg-white/10"
                >
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Consultation */}
            <button
              onClick={onOpenConsultation}
              id="nav-consult-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 rounded-full transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Book Call</span>
            </button>

            {/* Primary CTA */}
            <button
              onClick={onNavigateContact}
              id="nav-start-project-btn"
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 rounded-full group-hover:opacity-90 transition-opacity"></div>
              <div className="relative px-5 py-2 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white rounded-full text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-lg shadow-rose-600/30 transition-all duration-200">
                <span>Start Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onNavigateContact}
              className="px-3 py-1.5 text-xs font-bold text-white bg-rose-600 rounded-full"
            >
              Start
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer" 
          className="fixed inset-0 z-40 bg-[#090a0f]/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 lg:hidden animate-in fade-in duration-200 overflow-y-auto"
        >
          <div className="flex flex-col gap-2 mb-8">
            {navLinks.map((link) => {
              if (link.isSpecialOffer) {
                return (
                  <div key={link.label} className="border-b border-white/5 py-2">
                    <button
                      type="button"
                      onClick={() => setMobileOffersExpanded(!mobileOffersExpanded)}
                      className="w-full text-lg font-display font-semibold transition-colors flex items-center justify-between text-amber-300 font-bold"
                    >
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-amber-400" />
                        <span>{link.label}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${mobileOffersExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mobile Expanded List */}
                    {mobileOffersExpanded && (
                      <div className="mt-3 grid grid-cols-1 gap-1.5 pl-2">
                        {FAVORITE_OFFERS.map((offer) => (
                          <button
                            key={offer.id}
                            type="button"
                            onClick={() => handleClaimOffer(offer)}
                            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 text-xs text-left hover:bg-amber-500/20 transition-all border border-white/5"
                          >
                            <div className="flex items-center gap-2">
                              <span>{offer.emoji}</span>
                              <span className="text-zinc-200 font-medium">{offer.name}</span>
                            </div>
                            <span className="text-rose-400 font-mono font-bold">{offer.discount}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-display font-semibold py-2.5 border-b border-white/5 transition-colors flex items-center justify-between text-zinc-300 hover:text-rose-400"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              );
            })}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShowreel();
              }}
              className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-rose-400 text-rose-400" />
              <span>Watch 2026 Showreel</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-zinc-800 border border-white/10 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book Free 30-Min Strategy Call</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateContact();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-rose-600 to-rose-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

