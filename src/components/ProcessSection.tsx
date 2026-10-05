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
    <section id="process" className="py-24 bg-slate-50/70 relative overflow-hidden border-t border-slate-200">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-rose-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-medium mb-4 shadow-sm">
            <Workflow className="w-3.5 h-3.5 text-rose-600" />
            <span>CINEMATIC TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            The 6-Step Growth Protocol:{' '}
            <span className="text-gradient-cinematic">From Script to Scale.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
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
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-white border-2 border-rose-500 shadow-lg -translate-y-1'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                    isActive ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    0{step.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {step.duration.split(' ')[0]} {step.duration.split(' ')[1] || ''}
                  </span>
                </div>

                <div>
                  <h4 className={`text-base font-display font-bold ${isActive ? 'text-rose-600' : 'text-slate-900'}`}>
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {step.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Focus View */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 7 Columns */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-mono font-bold">
                  {activeStep.phase}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  <Clock className="w-3 h-3 text-amber-500" />
                  <span>Timeline: {activeStep.duration}</span>
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mb-2">
                {activeStep.title} &mdash; <span className="text-slate-500 font-light">{activeStep.tagline}</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 mt-4">
                {activeStep.description}
              </p>

              {/* Action List */}
              <div className="space-y-3 mb-8">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block font-semibold">
                  Key Sprint Activities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.actions.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Box */}
              <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-rose-700 block font-bold">
                    Sprint Milestone Deliverable:
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {activeStep.deliverable}
                  </span>
                </div>
                <div className="text-xs font-mono text-emerald-700 bg-emerald-100 px-3 py-1 rounded border border-emerald-200 font-bold">
                  Signed & Approved
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Visual Step Graphic & Next Action */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden flex flex-col items-center text-center">
                
                {/* Step Circle Counter */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 p-[2px] mb-6 shadow-xl shadow-rose-600/20">
                  <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center">
                    <span className="font-display font-extrabold text-2xl text-slate-900">
                      0{activeStep.step}
                    </span>
                    <span className="text-[9px] font-mono uppercase text-slate-500 font-bold">
                      Phase
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
                  Seamless Client Collaboration
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 max-w-xs">
                  Real-time Frame.io video timestamps, live Slack channels, and zero communication friction.
                </p>

                <div className="flex items-center gap-3 w-full justify-center">
                  {activeStepIndex > 0 && (
                    <button
                      onClick={() => setActiveStepIndex(activeStepIndex - 1)}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-300 shadow-sm cursor-pointer"
                    >
                      Previous Step
                    </button>
                  )}
                  {activeStepIndex < PROCESS_STEPS.length - 1 ? (
                    <button
                      onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                      className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white shadow-md shadow-rose-600/25 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next Phase</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveStepIndex(0)}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 text-xs font-bold text-white shadow-md flex items-center gap-1.5 cursor-pointer"
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
