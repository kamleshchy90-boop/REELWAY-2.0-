import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BEFORE_AFTER_ITEMS } from '../data/reelwayData';
import { Sparkles, Sliders, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 my-16 shadow-lg relative overflow-hidden">
      {/* Top Header & Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold mb-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>INTERACTIVE COMPARISON</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
            The REELWAY Transformation
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Drag the slider to compare raw inputs against finished, high-performance assets.
          </p>
        </div>

        {/* Item Selector Buttons */}
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeItemIndex === idx
                  ? 'bg-gradient-to-r from-rose-600 to-amber-500 text-white font-bold shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Canvas */}
      <div
        ref={containerRef}
        className="relative w-full aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-300 shadow-xl"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* AFTER IMAGE (Background - Full Width) */}
        <img
          src={activeItem.afterImage}
          alt={activeItem.afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BEFORE IMAGE (Clipped with hardware-accelerated clipPath) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={activeItem.beforeImage}
            alt={activeItem.beforeLabel}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle separator shadow */}
          <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/40 backdrop-blur-sm shadow-2xl" />
        </div>

        {/* DRAG HANDLE BAR */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.4)] z-30"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl border-2 border-rose-500 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
            <ArrowLeftRight className="w-4 h-4 text-slate-950 font-bold" />
          </div>
        </div>

        {/* BADGES ON CANVAS */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-zinc-200 border border-white/15 text-xs font-mono font-semibold">
            BEFORE: {activeItem.beforeLabel.split('(')[0]}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="px-3 py-1.5 rounded-lg bg-rose-600/90 backdrop-blur-md text-white border border-white/20 text-xs font-mono font-bold shadow-md">
            AFTER: {activeItem.afterLabel.split('(')[0]}
          </span>
        </div>

        {/* Bottom Hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-zinc-300 text-[10px] font-mono">
            &larr; Drag slider left / right to compare &rarr;
          </span>
        </div>
      </div>

      {/* Description Bottom Bar */}
      <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-700">
            <span className="font-semibold text-slate-900">{activeItem.title}:</span> {activeItem.description}
          </p>
        </div>
        <div className="text-[11px] font-mono text-slate-500 uppercase shrink-0">
          Result: High Conversion Velocity
        </div>
      </div>
    </div>
  );
};
