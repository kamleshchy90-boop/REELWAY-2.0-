import React from 'react';
import { 
  Sparkles, 
  Target, 
  Layers, 
  Flame, 
  Check, 
  X as CloseIcon, 
  TrendingUp, 
  ArrowRight,
  Zap
} from 'lucide-react';

interface AboutSectionProps {
  onNavigateContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateContact }) => {
  return (
    <section id="about" className="py-24 bg-slate-50/70 relative overflow-hidden border-t border-slate-200">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-medium mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>THE REELWAY ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Why Ordinary Content Fails in 2026 — And How We Engineer{' '}
            <span className="text-gradient-cinematic">Attention & Conversion.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The market is saturated with low-effort templates and soulless AI-generated videos. Consumers have developed subconscious immunity to generic ads. To stand out today, you need cinematic craft paired with obsessive performance analytics.
          </p>
        </div>

        {/* The Comparison Bento: Traditional vs REELWAY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* The Broken Traditional Way */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-red-200 relative overflow-hidden group shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-bold px-3 py-1 rounded bg-red-50 border border-red-200">
                The Traditional Agency Trap
              </span>
              <CloseIcon className="w-5 h-5 text-red-500" />
            </div>

            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
              Siloed Studios & Outdated Freelance Chaos
            </h3>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Design studios create beautiful videos that generate zero conversions, while performance agencies run ugly generic static ads with sky-high customer acquisition costs.
            </p>

            <ul className="space-y-3.5">
              {[
                '3-week sluggish turnaround for single video edits',
                'Creative teams with zero knowledge of Meta or TikTok algorithms',
                'Performance media buyers using boring Canva templates',
                'Fragmented communication across 4 different freelance vendors',
                'High acquisition costs (CPA) and declining ROAS'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CloseIcon className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The REELWAY Synergy */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-rose-300 relative overflow-hidden shadow-xl group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-rose-700 font-bold px-3 py-1 rounded bg-rose-50 border border-rose-200">
                The REELWAY Standard
              </span>
              <Sparkles className="w-5 h-5 text-amber-500" />
            </div>

            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
              Creative Studio + Performance Growth Under One Roof
            </h3>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Every frame, 3D animation, kinetic text layer, and sound stem is mathematically crafted for thumb-stopping retention and scalable media buying efficiency.
            </p>

            <ul className="space-y-3.5">
              {[
                '24 - 48 Hour iteration sprints on winning creative hooks',
                '3D CGI & Hollywood DaVinci grading applied to viral short-form',
                'Direct synergy between creative directors and senior media buyers',
                'Dynamic Creative Testing matrices with 20+ variations per concept',
                'Proven average of 4.2x ROAS across global client campaigns'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <div className="text-xs font-mono text-slate-500">
                Guaranteed creative velocity & ROAS accountability
              </div>
              <button 
                onClick={onNavigateContact}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
              Thumb-Stopping Hooks
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              We engineer the first 0.8 to 3 seconds with visual disruptions, text anchors, and audio risers to shatter baseline 3-second hold rates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
              High-Speed Agile Sprints
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              No endless revision meetings. We operate in rapid sprint cycles with live Slack channels and Frame.io timestamped review boards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
              Scale-Ready Assets
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every asset is delivered in modular formats (9:16 vertical, 16:9 widescreen, 1:1 feed, 4:5 carousels) configured for immediate ad upload.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
