import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Award
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/reelwayData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-rose-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-medium mb-4 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
              <span>EXECUTIVE ENDORSEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Trusted By Founders & CMOs{' '}
              <span className="text-gradient-cinematic">Scaling To Millions.</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Real feedback from leaders who trusted REELWAY to elevate their visual brand and multiply advertising performance.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-300 shadow-sm transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/25 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid / Active Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            TESTIMONIALS_DATA[currentIndex % TESTIMONIALS_DATA.length],
            TESTIMONIALS_DATA[(currentIndex + 1) % TESTIMONIALS_DATA.length],
            TESTIMONIALS_DATA[(currentIndex + 2) % TESTIMONIALS_DATA.length],
          ].map((item) => (
            <div
              key={`${item.id}-${currentIndex}`}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-rose-400 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl animate-in fade-in duration-300"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 group-hover:text-rose-400 transition-colors" />
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6 italic">
                  "{item.quote}"
                </p>

                {/* Verified Metric Pill */}
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span className="truncate font-semibold">{item.verifiedMetric}</span>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.clientName}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-display font-bold text-slate-900">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.role}, <span className="text-slate-800 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentIndex ? 'w-8 bg-rose-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Full Testimonial List Carousel Card for Extra Depth */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-rose-600" />
            <span className="text-xs font-mono text-slate-700">
              4.9/5 Average Rating across 500+ Video & Digital Marketing Campaigns
            </span>
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            Verified Partner Reviews
          </span>
        </div>

      </div>
    </section>
  );
};
