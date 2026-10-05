import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  MessageCircle, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

interface FinalCtaSectionProps {
  onStartProject: () => void;
  onBookConsultation: () => void;
  onChatWhatsApp: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onStartProject,
  onBookConsultation,
  onChatWhatsApp,
}) => {
  return (
    <section id="final-cta" className="py-24 bg-slate-50/70 relative overflow-hidden border-t border-slate-200">
      {/* Subtle Glowing Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1000px] h-[500px] bg-gradient-to-tr from-rose-500/10 via-amber-400/8 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 lg:p-20 rounded-3xl bg-white border-2 border-rose-300 shadow-2xl text-center relative overflow-hidden">
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* Top Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold mb-8 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Scale With REELWAY Today</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Your Brand Deserves{' '}
            <span className="text-gradient-cinematic">More Than Average.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed mb-12">
            Let's create something people remember &mdash; and build marketing that delivers results.
          </p>

          {/* 3 Explicitly Requested Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto mb-12">
            
            {/* 1. START YOUR PROJECT */}
            <button
              onClick={onStartProject}
              id="final-cta-start-project"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-display font-extrabold text-sm sm:text-base shadow-xl shadow-rose-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 2. BOOK A FREE CONSULTATION */}
            <button
              onClick={onBookConsultation}
              id="final-cta-book-consult"
              className="px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-sm sm:text-base border border-slate-800 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>BOOK A FREE CONSULTATION</span>
            </button>

            {/* 3. CHAT WITH REELWAY */}
            <button
              onClick={onChatWhatsApp}
              id="final-cta-chat-whatsapp"
              className="px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>CHAT WITH REELWAY</span>
            </button>

          </div>

          {/* Guarantee Badges */}
          <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-600">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Dedicated Senior Creative Squad</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>24-48h Short-Form Iterations</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Custom Tailored Pricing</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
