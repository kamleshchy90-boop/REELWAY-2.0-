import React, { useRef, useEffect } from 'react';
import { 
  X, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Layers 
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onNavigateContact
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#0d0e15] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-950">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 text-xs font-mono font-bold uppercase">
              {project.categoryLabel}
            </span>
            <h3 className="text-sm sm:text-base font-display font-bold text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-rose-500 text-zinc-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Media Player */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 flex items-center justify-center">
            {project.videoPreviewUrl.includes('instagram.com') ? (
              <iframe
                src={(() => {
                  const match = project.videoPreviewUrl.match(/(?:reel|p)\/([^/?#&]+)/);
                  const reelId = match ? match[1] : 'DZ19hgUNg9J';
                  return `https://www.instagram.com/reel/${reelId}/embed/`;
                })()}
                title={project.title}
                className="w-full h-full max-w-[400px] border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : project.videoPreviewUrl.includes('youtube.com') || project.videoPreviewUrl.includes('youtu.be') ? (
              <iframe
                src={(() => {
                  let videoId = '';
                  if (project.videoPreviewUrl.includes('youtu.be/')) {
                    videoId = project.videoPreviewUrl.split('youtu.be/')[1].split('?')[0].split('&')[0];
                  } else if (project.videoPreviewUrl.includes('shorts/')) {
                    videoId = project.videoPreviewUrl.split('shorts/')[1].split('?')[0].split('&')[0];
                  } else if (project.videoPreviewUrl.includes('v=')) {
                    videoId = project.videoPreviewUrl.split('v=')[1]?.split('&')[0] || '';
                  } else if (project.videoPreviewUrl.includes('embed/')) {
                    videoId = project.videoPreviewUrl.split('embed/')[1]?.split('?')[0] || '';
                  }
                  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
                })()}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                ref={videoRef}
                src={project.videoPreviewUrl}
                poster={project.thumbnail}
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Details & Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            
            <div className="md:col-span-2 space-y-4">
              <div>
                <span className="text-xs font-mono text-zinc-400">
                  Client: <strong className="text-white">{project.client}</strong> &bull; {project.year}
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                  {project.summary}
                </h4>
              </div>

              {/* Deliverables */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-semibold">
                  Scope & Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-rose-500/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                  Featured Client Metric:
                </span>
                <div className="text-3xl font-display font-extrabold text-rose-400 font-mono-data">
                  {project.metrics.value}
                </div>
                <div className="text-xs font-semibold text-white mt-1">
                  {project.metrics.label}
                </div>
                <div className="text-[11px] text-zinc-400 mt-2 font-mono">
                  Verified Performance Asset
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onNavigateContact();
                }}
                className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2"
              >
                <span>Inquire Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
