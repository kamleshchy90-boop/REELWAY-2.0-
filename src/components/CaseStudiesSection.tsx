import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Award, 
  Quote, 
  Target, 
  Compass, 
  Layers, 
  Send, 
  BarChart3,
  Play
} from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/reelwayData';
import { CaseStudy } from '../types';

interface CaseStudiesSectionProps {
  onOpenVideo: (url: string, title: string) => void;
  onNavigateContact: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onOpenVideo,
  onNavigateContact
}) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCase = CASE_STUDIES_DATA[activeCaseIndex];

  return (
    <section id="cases" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Subtle backlights */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-rose-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-medium mb-4 shadow-sm">
              <Award className="w-3.5 h-3.5 text-rose-600" />
              <span>VERIFIED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Real Growth.{' '}
              <span className="text-gradient-cinematic">Verified Client Proof.</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Every campaign follows our proven 5-stage blueprint: <span className="text-slate-900 font-semibold">Challenge &rarr; Strategy &rarr; Creative Solution &rarr; Campaign &rarr; Results</span>.
            </p>
          </div>

          {/* Case Studies Selector Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto overflow-x-auto max-w-full">
            {CASE_STUDIES_DATA.map((cs, idx) => (
              <button
                key={cs.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCaseIndex === idx
                    ? 'bg-gradient-to-r from-rose-600 to-amber-500 text-white font-bold shadow-md shadow-rose-600/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {cs.client}
              </button>
            ))}
          </div>
        </div>

        {/* Master Case Study Container */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          
          {/* Top Meta & Industry */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-100 mb-10">
            <div>
              <span className="text-xs font-mono text-rose-600 font-bold uppercase tracking-wider block mb-1">
                {activeCase.industry}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 max-w-4xl leading-tight">
                {activeCase.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                Client: <strong className="text-slate-900">{activeCase.client}</strong>
              </span>
            </div>
          </div>

          {/* 5-Stage Blueprint Breakdown Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
            
            {/* Left 7 Columns: Step-by-Step Flow */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Challenge */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-mono text-xs font-bold">
                    01
                  </div>
                  <h4 className="text-sm sm:text-base font-display font-bold text-slate-900 flex items-center gap-2">
                    <Target className="w-4 h-4 text-red-500" />
                    Challenge
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                  {activeCase.challenge}
                </p>
              </div>

              {/* 2. Strategy */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-mono text-xs font-bold">
                    02
                  </div>
                  <h4 className="text-sm sm:text-base font-display font-bold text-slate-900 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-amber-500" />
                    Strategy
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                  {activeCase.strategy}
                </p>
              </div>

              {/* 3. Creative Solution */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-mono text-xs font-bold">
                    03
                  </div>
                  <h4 className="text-sm sm:text-base font-display font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-rose-500" />
                    Creative Solution
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                  {activeCase.creativeSolution}
                </p>
              </div>

              {/* 4. Campaign Execution */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-mono text-xs font-bold">
                    04
                  </div>
                  <h4 className="text-sm sm:text-base font-display font-bold text-slate-900 flex items-center gap-2">
                    <Send className="w-4 h-4 text-blue-500" />
                    Campaign
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                  {activeCase.campaign}
                </p>
              </div>

            </div>

            {/* Right 5 Columns: Visual Preview & Verified Results */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Media Thumbnail with Play Trigger */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-video group shadow-md">
                <img
                  src={activeCase.heroImage}
                  alt={activeCase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent pointer-events-none" />

                {activeCase.videoUrl && (
                  <button
                    onClick={() => onOpenVideo(activeCase.videoUrl!, activeCase.title)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xl shadow-rose-600/50 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </button>
                )}

                <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                  <span className="text-xs font-mono text-zinc-100 bg-black/60 px-3 py-1 rounded backdrop-blur-md">
                    Featured Visual Case Deliverable
                  </span>
                </div>
              </div>

              {/* 5. Results (Verified Client Metrics) */}
              <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                      05. Verified Results & ROI
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold border border-emerald-200">
                    Audit Verified
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {activeCase.results.map((res, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-emerald-100 shadow-sm">
                      <div className="text-2xl font-display font-extrabold text-emerald-600 font-mono-data">
                        {res.metric}
                      </div>
                      <div className="text-xs font-semibold text-slate-800 mt-0.5">
                        {res.label}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1 font-mono leading-tight">
                        {res.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Testimonial Quote Footer Bar */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-rose-500 shrink-0 opacity-80" />
              <div>
                <p className="text-sm sm:text-base text-slate-700 italic font-light leading-relaxed">
                  "{activeCase.testimonial.quote}"
                </p>
                <p className="text-xs font-semibold text-slate-900 mt-2">
                  {activeCase.testimonial.author} &bull; <span className="text-slate-500 font-normal">{activeCase.testimonial.role}, {activeCase.testimonial.company}</span>
                </p>
              </div>
            </div>

            <button
              onClick={onNavigateContact}
              className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-display font-bold text-xs shadow-lg shadow-rose-600/30 whitespace-nowrap transition-all flex items-center gap-2 shrink-0 self-end md:self-auto cursor-pointer"
            >
              <span>Build Similar Campaign</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
