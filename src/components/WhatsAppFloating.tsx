import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSend = () => {
    const defaultMsg = message.trim() || 'Hi REELWAY team! I would like to discuss a video production and marketing project.';
    const encoded = encodeURIComponent(defaultMsg);
    window.open(`https://wa.me/919084324136?text=${encoded}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const quickPrompts = [
    'I need 3D Motion Graphics for a product launch',
    'I want to scale short-form TikTok/Reels ads',
    'Request a custom quote for REELWAY GROW'
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Pop-up Chat Card */}
      {isOpen && (
        <div 
          ref={popupRef}
          className="mb-3 w-80 sm:w-96 rounded-3xl bg-zinc-950 border border-emerald-500/40 shadow-2xl shadow-black/90 p-5 animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5 border-2 border-zinc-950 animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-display font-bold text-white">
                  REELWAY Strategy Desk
                </h4>
                <span className="text-[10px] font-mono text-emerald-400">
                  Online &bull; Avg reply: 5 mins
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 mb-3">
            👋 Hey there! Need a fast quote or want to see examples relevant to your industry?
          </p>

          {/* Quick Prompts */}
          <div className="space-y-1.5 mb-3">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setMessage(qp);
                }}
                className="w-full text-left p-2 rounded-xl bg-white/5 hover:bg-emerald-950/40 hover:border-emerald-500/30 border border-white/5 text-[11px] text-zinc-300 hover:text-white transition-colors"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Input & Send */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-grow px-3 py-2 bg-black/60 border border-white/10 rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={handleSend}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-btn"
        className="relative group p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/50 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-25"></span>
        <MessageCircle className="w-6 h-6 fill-white" />
      </button>
    </div>
  );
};
