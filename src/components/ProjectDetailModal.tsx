import React, { useEffect, useRef } from 'react';
import { 
  X, 
  Play, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Calendar,
  Sparkles,
  ArrowRight
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
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh] text-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-rose-50 text-rose-700 text-xs font-mono font-bold uppercase border border-rose-200">
              {project.categoryLabel}
            </span>
            <h3 className="text-sm sm:text-base font-display font-bold text-slate-900 truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-200 hover:bg-rose-600 text-slate-700 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Media Player */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-slate-200 flex items-center justify-center shadow-lg">
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
                <span className="text-xs font-mono text-slate-500">
                  Client: <strong className="text-slate-900">{project.client}</strong> &bull; {project.year}
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-1">
                  {project.summary}
                </h4>
              </div>

              {/* Deliverables */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2 font-semibold">
                  Scope & Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1 font-bold">
                  Featured Client Metric:
                </span>
                <div className="text-3xl font-display font-extrabold text-rose-600 font-mono-data">
                  {project.metrics.value}
                </div>
                <div className="text-xs font-semibold text-slate-900 mt-1">
                  {project.metrics.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-2 font-mono">
                  Verified Performance Asset
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onNavigateContact();
                }}
                className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 cursor-pointer"
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
