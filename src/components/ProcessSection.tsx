import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Workflow, 
  ChevronRight 
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/reelwayData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 bg-[#08090d] relative overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-rose-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-400 text-xs font-mono font-medium mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>CINEMATIC TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            The 6-Step Growth Protocol:{' '}
            <span className="text-gradient-cinematic">From Script to Scale.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Our agile production workflow turns complex ideas into world-class video creative and scalable advertising campaigns in record turnaround time.
          </p>
        </div>

        {/* Step Navigation Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-br from-rose-950/40 via-zinc-900 to-zinc-950 border-rose-500/60 shadow-xl shadow-rose-950/50 -translate-y-1'
                    : 'bg-zinc-950/60 border-white/10 hover:border-white/20 hover:bg-zinc-900/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                    isActive ? 'bg-rose-500 text-white' : 'bg-white/5 text-zinc-400'
                  }`}>
                    0{step.step}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {step.duration.split(' ')[0]} {step.duration.split(' ')[1] || ''}
                  </span>
                </div>

                <div>
                  <h4 className={`text-base font-display font-bold ${isActive ? 'text-rose-400' : 'text-white'}`}>
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                    {step.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Focus View */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950/90 border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 7 Columns */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-bold">
                  {activeStep.phase}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>Timeline: {activeStep.duration}</span>
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
                {activeStep.title} &mdash; <span className="text-zinc-400 font-light">{activeStep.tagline}</span>
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 mt-4">
                {activeStep.description}
              </p>

              {/* Action List */}
              <div className="space-y-3 mb-8">
                <span className="text-xs uppercase font-mono tracking-wider text-zinc-400 block font-semibold">
                  Key Sprint Activities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.actions.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-200">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/30 via-zinc-900 to-zinc-950 border border-rose-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-rose-400 block">
                    Sprint Milestone Deliverable:
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {activeStep.deliverable}
                  </span>
                </div>
                <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
                  Signed & Approved
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Visual Step Graphic & Next Action */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-8 rounded-2xl bg-black/50 border border-white/10 relative overflow-hidden flex flex-col items-center text-center">
                
                {/* Step Circle Counter */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 p-[2px] mb-6 shadow-xl shadow-rose-600/30">
                  <div className="w-full h-full bg-[#0d0e14] rounded-full flex flex-col items-center justify-center">
                    <span className="font-display font-extrabold text-2xl text-white">
                      0{activeStep.step}
                    </span>
                    <span className="text-[9px] font-mono uppercase text-zinc-400">
                      Phase
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-display font-bold text-white mb-2">
                  Seamless Client Collaboration
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 max-w-xs">
                  Real-time Frame.io video timestamps, live Slack channels, and zero communication friction.
                </p>

                <div className="flex items-center gap-3 w-full justify-center">
                  {activeStepIndex > 0 && (
                    <button
                      onClick={() => setActiveStepIndex(activeStepIndex - 1)}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-300 border border-white/10"
                    >
                      Previous Step
                    </button>
                  )}
                  {activeStepIndex < PROCESS_STEPS.length - 1 ? (
                    <button
                      onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                      className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white shadow-lg shadow-rose-600/30 flex items-center gap-1.5"
                    >
                      <span>Next Phase</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveStepIndex(0)}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 text-xs font-bold text-white shadow-lg flex items-center gap-1.5"
                    >
                      <span>Restart Protocol</span>
                    </button>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
