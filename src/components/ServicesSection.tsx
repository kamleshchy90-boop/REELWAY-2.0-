import React, { useState } from 'react';
import { 
  Sparkles, 
  Film, 
  TrendingUp, 
  Share2, 
  Layers, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  ArrowUpRight,
  Sliders,
  Code2,
  Globe
} from 'lucide-react';
import { SERVICES_DATA } from '../data/reelwayData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [detailedModalService, setDetailedModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Film': return <Film className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Share2': return <Share2 className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Search': return <Search className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#08090d] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-400 text-xs font-mono font-medium mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>FULL-STACK CREATIVE & GROWTH ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Engineered For Attention.{' '}
            <span className="text-gradient-cinematic">Optimized For Scale.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            From photorealistic 3D product renders to viral short-form editing and multi-million dollar performance media campaigns, we build everything your brand needs to dominate digital feeds.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES_DATA.map((service) => {
            const isHovered = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                className={`p-7 rounded-3xl bg-zinc-950/80 border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isHovered 
                    ? 'border-rose-500/50 shadow-2xl shadow-rose-950/40 -translate-y-1.5' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Subtle Gradient Backlight */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40 pointer-events-none transition-opacity group-hover:opacity-70`} />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-rose-400 group-hover:text-white group-hover:bg-rose-600 transition-all duration-300 flex items-center justify-center shadow-lg">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 group-hover:border-rose-500/30 group-hover:text-rose-300 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-rose-300 transition-colors relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mb-4 relative z-10 leading-relaxed">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-zinc-300 mb-6 relative z-10 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6 relative z-10">
                    <span className="text-[11px] uppercase font-mono tracking-wider text-zinc-400 block font-semibold">
                      Core Deliverables:
                    </span>
                    {service.deliverables.slice(0, 4).map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-zinc-400 border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-white/5 text-zinc-500">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Metric & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                  <div>
                    <div className="text-lg font-display font-extrabold text-rose-400 font-mono-data">
                      {service.highlightMetric.value}
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono max-w-[130px] leading-tight">
                      {service.highlightMetric.label}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-rose-600 text-zinc-200 hover:text-white text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Fast Track Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/20">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-display font-bold text-white">
                Need a Custom Hybrid Creative Package?
              </h4>
              <p className="text-sm text-zinc-400">
                We design bespoke sprint scopes combining short-form editing, 3D motion graphics, and paid media buying.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectService('Custom Hybrid Package')}
            className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-display font-bold text-sm shadow-lg shadow-rose-600/30 shrink-0 transition-all flex items-center gap-2"
          >
            <span>Request Custom Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
