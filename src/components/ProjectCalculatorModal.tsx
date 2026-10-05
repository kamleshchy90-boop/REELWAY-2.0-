import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  Film, 
  Layers, 
  TrendingUp, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ProjectCalculatorModalProps {
  onClose: () => void;
  onApplyScope: (scopeSummary: string, suggestedPackage: string) => void;
}

export const ProjectCalculatorModal: React.FC<ProjectCalculatorModalProps> = ({
  onClose,
  onApplyScope
}) => {
  const [reelsCount, setReelsCount] = useState<number>(12);
  const [motionLevel, setMotionLevel] = useState<'none' | '2d' | '3d'>('2d');
  const [adManagement, setAdManagement] = useState<boolean>(true);
  const [scripting, setScripting] = useState<boolean>(true);

  // Dynamic recommendation logic
  let suggestedPackage = 'REELWAY GROW';
  if (reelsCount <= 6 && motionLevel !== '3d') {
    suggestedPackage = 'REELWAY START';
  } else if (reelsCount > 16 || motionLevel === '3d') {
    suggestedPackage = 'REELWAY SCALE';
  }

  const estimatedTurnaround = reelsCount <= 8 ? '48 Hours' : '24-48 Hours Active Queue';

  const handleApply = () => {
    const summary = `Custom Scope: ${reelsCount}x Short-Form Reels/mo, Motion: ${motionLevel.toUpperCase()}, Paid Ads: ${adManagement ? 'Yes' : 'No'}, Scripts & UGC: ${scripting ? 'Included' : 'Provided by client'}`;
    onApplyScope(summary, suggestedPackage);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-display font-bold text-slate-900">
                Interactive Project Scope & Estimate Calculator
              </h3>
              <p className="text-[11px] text-slate-500 font-mono">
                Model your monthly creative capacity and find the ideal sprint package
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-200 hover:bg-rose-600 text-slate-700 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* 1. Reels Volume Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono text-slate-700 uppercase tracking-wider font-semibold flex items-center gap-2">
                <Film className="w-4 h-4 text-rose-600" />
                <span>Monthly Short-Form Video Volume:</span>
              </label>
              <span className="text-base font-display font-extrabold text-rose-600 font-mono-data">
                {reelsCount} Videos / month
              </span>
            </div>
            <input
              type="range"
              min={4}
              max={32}
              step={2}
              value={reelsCount}
              onChange={(e) => setReelsCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>4 videos (Light)</span>
              <span>16 videos (Standard Growth)</span>
              <span>32 videos (High Scale)</span>
            </div>
          </div>

          {/* 2. Motion Graphics Complexity */}
          <div>
            <label className="text-xs font-mono text-slate-700 uppercase tracking-wider font-semibold block mb-3">
              Motion Graphics & Animation Tier:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setMotionLevel('none')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  motionLevel === 'none'
                    ? 'bg-rose-50 border-rose-500 text-rose-700 font-bold shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className="text-xs font-bold mb-1 text-slate-900">Standard Editing</div>
                <div className="text-[10px] text-slate-500">Kinetic captions & overlays</div>
              </button>

              <button
                type="button"
                onClick={() => setMotionLevel('2d')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  motionLevel === '2d'
                    ? 'bg-rose-50 border-rose-500 text-rose-700 font-bold shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className="text-xs font-bold mb-1 text-slate-900">2D Motion Graphics</div>
                <div className="text-[10px] text-slate-500">Custom explainers & UI renders</div>
              </button>

              <button
                type="button"
                onClick={() => setMotionLevel('3d')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  motionLevel === '3d'
                    ? 'bg-rose-50 border-rose-500 text-rose-700 font-bold shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className="text-xs font-bold mb-1 text-slate-900">3D Photoreal CGI</div>
                <div className="text-[10px] text-slate-500">Octane/C4D exploded product views</div>
              </button>
            </div>
          </div>

          {/* 3. Add-Ons Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              onClick={() => setAdManagement(!adManagement)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                adManagement
                  ? 'bg-emerald-50 border-emerald-300 text-slate-900'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <div>
                  <span className="text-xs font-bold block text-slate-900">Paid Media Management</span>
                  <span className="text-[10px] text-slate-500">Meta, TikTok & Google Ads</span>
                </div>
              </div>
              <input type="checkbox" checked={adManagement} readOnly className="accent-emerald-600" />
            </div>

            <div
              onClick={() => setScripting(!scripting)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                scripting
                  ? 'bg-amber-50 border-amber-300 text-slate-900'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-amber-600" />
                <div>
                  <span className="text-xs font-bold block text-slate-900">Scripting & Hook Matrix</span>
                  <span className="text-[10px] text-slate-500">End-to-end creative research</span>
                </div>
              </div>
              <input type="checkbox" checked={scripting} readOnly className="accent-amber-600" />
            </div>
          </div>

          {/* Suggested Package Recommendation Box */}
          <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-rose-700 block font-bold">
                Recommended Sprint Framework:
              </span>
              <div className="text-2xl font-display font-black text-slate-900 mt-0.5">
                {suggestedPackage}
              </div>
              <div className="text-xs text-slate-500 mt-1 font-mono">
                Estimated Turnaround: <span className="text-slate-900 font-semibold">{estimatedTurnaround}</span>
              </div>
            </div>

            <button
              onClick={handleApply}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/30 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Apply Scope & Inquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
