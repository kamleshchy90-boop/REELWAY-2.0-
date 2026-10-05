import React, { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  Film, 
  Eye, 
  ExternalLink, 
  Clock, 
  Calendar, 
  Filter, 
  CheckCircle2, 
  TrendingUp, 
  ArrowUpRight 
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/reelwayData';
import { ProjectItem } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface PortfolioSectionProps {
  onOpenProjectModal: (project: ProjectItem) => void;
  onOpenShowreel: () => void;
}

const FILTER_TABS = [
  { key: 'all', label: 'All Work' },
  { key: 'reels', label: 'Short-Form Viral Reels' },
  { key: '3d', label: '3D Product CGI' },
  { key: 'brand', label: 'Official Showreels' },
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  onOpenProjectModal, 
  onOpenShowreel 
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects = activeTab === 'all' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-slate-50/70 relative overflow-hidden border-t border-slate-200">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-medium mb-4 shadow-sm">
              <Film className="w-3.5 h-3.5 text-rose-600" />
              <span>CURATED WORK REEL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Crafted For Impact.{' '}
              <span className="text-gradient-cinematic">Validated By Metrics.</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Explore our recent 3D motion reveals, viral commercial reels, and high-performance ad campaigns engineered for hyper-growth brands.
            </p>
          </div>

          <button
            onClick={onOpenShowreel}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-medium text-xs border border-slate-300 flex items-center gap-2 transition-all hover:border-rose-400 shrink-0 shadow-sm cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
            <span>Play 2026 Showreel</span>
          </button>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-rose-600 text-white font-bold shadow-md shadow-rose-600/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              onClick={() => onOpenProjectModal(project)}
              className="group cursor-pointer rounded-3xl bg-white border border-slate-200 hover:border-rose-400 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Dark Cinematic Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                {/* Play Button Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xl shadow-rose-600/50 scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold text-rose-300 border border-white/10 uppercase">
                    {project.categoryLabel}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-zinc-300 border border-white/10">
                    {project.duration}
                  </span>
                </div>

                {/* Metric Highlight Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-rose-500/30 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-rose-400" />
                    <span className="text-[11px] font-mono font-bold text-white">
                      {project.metrics.label}: <span className="text-rose-400">{project.metrics.value}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-xs font-mono text-slate-500 mb-1 flex items-center justify-between">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-rose-600 transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.deliverables.slice(0, 2).map((del, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-600 border border-slate-200">
                        {del}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-rose-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Watch <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Embedded Before / After Interactive Slider */}
        <BeforeAfterSlider />

      </div>
    </section>
  );
};
