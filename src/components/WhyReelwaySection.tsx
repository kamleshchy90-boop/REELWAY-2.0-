import React from 'react';
import { 
  Layers, 
  Compass, 
  Sparkles, 
  Target, 
  Zap, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { WHY_REELWAY_PILLARS } from '../data/reelwayData';

interface WhyReelwaySectionProps {
  onNavigateContact: () => void;
}

export const WhyReelwaySection: React.FC<WhyReelwaySectionProps> = ({ onNavigateContact }) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-rose-600/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-400 text-xs font-mono font-medium mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UNCOMPROMISING PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Why High-Growth Brands{' '}
            <span className="text-gradient-cinematic">Choose REELWAY.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            We operate at the exact intersection of cinematic artistry and analytical growth engineering. Here is why the world’s most ambitious teams partner with us.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {WHY_REELWAY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-8 rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-rose-500/40 backdrop-blur-md transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-rose-300 transition-colors mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs font-mono text-rose-400/90 mb-4 leading-relaxed font-semibold">
                  "{pillar.tagline}"
                </p>

                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>REELWAY Guaranteed Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Metric Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-2xl font-display font-bold text-white">
              Ready to replace guesswork with compounding creative growth?
            </h4>
            <p className="text-sm text-zinc-400 max-w-2xl">
              We onboard a limited number of clients each month to maintain deep senior creative direction on every active account.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onNavigateContact}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-display font-bold text-sm shadow-xl shadow-rose-600/30 transition-all flex items-center gap-2"
            >
              <span>Explore Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
