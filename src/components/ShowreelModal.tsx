import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Youtube,
  Instagram,
  Film,
  Smartphone
} from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateContact: () => void;
}

const SHOWREELS = [
  {
    id: 'N-YXve5L3e0',
    type: 'youtube',
    tabLabel: 'Master 4K',
    title: 'Master Cinematic Showreel',
    subtitle: '4K Commercial & Motion Design',
    aspectRatio: '16:9',
    tag: '4K MASTER',
    directUrl: 'https://youtu.be/N-YXve5L3e0',
    embedUrl: 'https://www.youtube-nocookie.com/embed/N-YXve5L3e0?autoplay=1&rel=0&modestbranding=1&playsinline=1',
    icon: Film
  },
  {
    id: 'DZ19hgUNg9J',
    type: 'instagram',
    tabLabel: 'Instagram Reel',
    title: 'Dynamic Instagram Showreel',
    subtitle: 'High-Retention Editorial Motion',
    aspectRatio: '9:16',
    tag: 'IG SHOWREEL',
    directUrl: 'https://www.instagram.com/reel/DZ19hgUNg9J/',
    embedUrl: 'https://www.instagram.com/reel/DZ19hgUNg9J/embed/',
    icon: Instagram
  },
  {
    id: 'IUoPX1Js7XE',
    type: 'youtube',
    tabLabel: 'Viral Shorts #1',
    title: 'Shorts & Viral Motion Reel',
    subtitle: 'High-Converting Vertical Content',
    aspectRatio: '9:16',
    tag: 'VIRAL SHORTS',
    directUrl: 'https://youtube.com/shorts/IUoPX1Js7XE',
    embedUrl: 'https://www.youtube-nocookie.com/embed/IUoPX1Js7XE?autoplay=1&rel=0&modestbranding=1&playsinline=1',
    icon: Smartphone
  },
  {
    id: 'fi4CEKoU22c',
    type: 'youtube',
    tabLabel: 'Creative FX #2',
    title: 'Kinetic FX & Motion Showreel',
    subtitle: 'Dynamic VFX & Sound Design',
    aspectRatio: '9:16',
    tag: 'CREATIVE FX',
    directUrl: 'https://youtube.com/shorts/fi4CEKoU22c',
    embedUrl: 'https://www.youtube-nocookie.com/embed/fi4CEKoU22c?autoplay=1&rel=0&modestbranding=1&playsinline=1',
    icon: Sparkles
  }
];

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ 
  isOpen, 
  onClose,
  onNavigateContact
}) => {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const activeReel = SHOWREELS[activeReelIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      id="showreel-lightbox"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-6 md:p-10 animate-in fade-in duration-200"
    >
      {/* Outer Click Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#0d0e15] border border-white/15 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[95vh]">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-white/10 bg-zinc-950/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-display font-bold text-white flex items-center gap-2">
                REELWAY OFFICIAL SHOWREEL
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                  {activeReel.tag}
                </span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {activeReel.title} &bull; {activeReel.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2">
            {/* Showreel Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
              {SHOWREELS.map((reel, idx) => {
                const Icon = reel.icon;
                const isActive = activeReelIndex === idx;
                return (
                  <button
                    key={reel.id}
                    onClick={() => setActiveReelIndex(idx)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{reel.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            <a
              href={activeReel.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 border border-white/15 transition-colors"
              title={`Open in ${activeReel.type === 'instagram' ? 'Instagram' : 'YouTube'}`}
            >
              {activeReel.type === 'instagram' ? (
                <Instagram className="w-3.5 h-3.5 text-pink-500" />
              ) : (
                <Youtube className="w-3.5 h-3.5 text-red-500" />
              )}
              <span className="hidden sm:inline">{activeReel.type === 'instagram' ? 'Instagram' : 'YouTube'}</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
            </a>

            <button
              onClick={onClose}
              id="close-showreel-btn"
              className="p-2 rounded-full bg-white/10 hover:bg-rose-500 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Showreel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video w-full bg-black overflow-hidden shadow-inner flex items-center justify-center">
          <iframe
            key={activeReel.id}
            src={activeReel.embedUrl}
            title={`REELWAY ${activeReel.title}`}
            className={`h-full border-0 ${activeReel.type === 'instagram' ? 'w-full max-w-[420px]' : 'w-full'}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Bottom Drawer & Next Steps */}
        <div className="p-4 sm:p-6 bg-zinc-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Ready to elevate your brand creative with REELWAY?
              </p>
              <p className="text-xs text-zinc-400">
                Average client turnaround is 48 hours with guaranteed performance standards.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onNavigateContact();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-bold text-xs rounded-xl shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
