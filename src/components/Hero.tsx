import React from 'react';
import { 
  Play, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Layers,
  Award,
  Video
} from 'lucide-react';
import { HERO_STATS } from '../data/reelwayData';
import { 
  FinsSolarLogo, 
  GreenEnergyLogo, 
  DhiyoAiLogo, 
  EasySellLogo, 
  DigitalWealthLogo, 
  NewtechLogo 
} from './ClientLogos';

interface HeroProps {
  onOpenShowreel: () => void;
  onOpenConsultation: () => void;
  onNavigateContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenShowreel,
  onOpenConsultation,
  onNavigateContact
}) => {
  return (
    <section 
      id="hero-section" 
      className="relative min-h-screen pt-36 pb-20 overflow-hidden flex flex-col justify-center bg-[#08090d] bg-grid-pattern"
    >
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-rose-600/15 via-amber-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-rose-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-amber-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-rose-500/40 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-zinc-300 tracking-wide uppercase">
              Motion Graphics &bull; Video Production &bull; Performance Marketing &bull; Website Developers
            </span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.06] mb-6">
            Creative Content.{' '}
            <span className="text-gradient-cinematic">Powerful Marketing.</span>{' '}
            Real Growth.
          </h1>
          
          {/* Subheadline with exact requested positioning */}
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-white">REELWAY</span> doesn't just create videos or run ads. We create <span className="text-rose-400 font-medium">attention</span>, build <span className="text-amber-400 font-medium">brands</span>, and drive digital growth through high-performance creative content.
          </p>
        </div>

        {/* CTAs Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <button
            onClick={onNavigateContact}
            id="hero-start-project-btn"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white font-display font-bold text-base shadow-xl shadow-rose-600/25 hover:shadow-rose-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
          >
            <span>START YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenShowreel}
            id="hero-watch-reel-btn"
            className="px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-display font-semibold text-base border border-white/15 hover:border-rose-500/50 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>WATCH 2026 SHOWREEL</span>
          </button>

          <button
            onClick={onOpenConsultation}
            id="hero-book-consult-btn"
            className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-display font-medium text-base border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
          >
            Book Free Consultation
          </button>
        </div>

        {/* Verified Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {HERO_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-rose-500/30 backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-rose-400 transition-colors mb-1 font-mono-data">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-zinc-200">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-400 mt-1 font-mono">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos / Trust Ribbon */}
        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-8">
            Trusted by fast-growing industry leaders, high-growth startups & enterprises
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {/* 1. Fins Solar */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex items-center justify-center h-20 group">
              <FinsSolarLogo className="h-9 w-auto max-w-full group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/* 2. Green Energy */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex items-center justify-center h-20 group">
              <GreenEnergyLogo className="h-9 w-auto max-w-full group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/* 3. Dhiyo AI Labs */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex items-center justify-center h-20 group">
              <DhiyoAiLogo className="h-9 w-auto max-w-full group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/* 4. EasySell Services */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex items-center justify-center h-20 group">
              <EasySellLogo className="h-8 w-auto max-w-full group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/* 5. Digital Wealth */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex items-center justify-center h-20 group">
              <DigitalWealthLogo className="h-9 w-auto max-w-full group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/* 6. Newtech Computer Education */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex items-center justify-center h-20 group">
              <NewtechLogo className="h-9 w-auto max-w-full group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
