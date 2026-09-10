import React from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Zap, 
  Calculator,
  HelpCircle,
  Tag,
  Gift,
  Flame,
  Star,
  Crown
} from 'lucide-react';
import { PRICING_PACKAGES } from '../data/reelwayData';
import { PricingPackage } from '../types';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
  onOpenCalculator: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  onSelectPackage, 
  onOpenCalculator 
}) => {
  return (
    <section id="pricing" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Anchor for Offers */}
      <div id="offers" className="absolute -top-16 left-0" />

      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-rose-600/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Special Offer Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-rose-950/40 to-zinc-950 border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30 shadow-lg">
                <Flame className="w-6 h-6 fill-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-amber-500 text-black rounded">
                    LIMITED TIME OFFER
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Active for New Brand Partners
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-white">
                  Starter Video Edit Trial from just <span className="text-amber-300 font-black">₹299</span> + Free 3D Brand Logo Intro!
                </h3>
                <p className="text-xs text-zinc-300 mt-1 max-w-2xl">
                  Test drive REELWAY's speed and storytelling before committing to a monthly sprint package. Includes 1-on-1 Creative Direction & 24h turn-around.
                </p>
              </div>
            </div>

            <button
              onClick={() => onSelectPackage('Starter Trial ₹299 Special Offer')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <Gift className="w-4 h-4" />
              <span>Claim Offer Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-400 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT SPRINT ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Tailored Capacity.{' '}
            <span className="text-gradient-cinematic">Custom Scaled Quotes.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            No rigid one-size-fits-all contracts. We calibrate your dedicated monthly sprint capacity around your exact creative volume and media buying goals.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`p-8 sm:p-10 rounded-3xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isPopular
                    ? 'bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 border-2 border-rose-500/80 shadow-2xl shadow-rose-950/60 lg:-translate-y-3'
                    : 'bg-zinc-950/80 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Highlight Ribbon */}
                {isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-l from-rose-600 to-amber-500 text-white text-[10px] font-mono font-extrabold uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div>
                  {/* Title & Target */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-display font-extrabold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs font-mono text-rose-400/90 font-medium">
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Pricing Display: Custom Quote */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Investment Model
                    </div>
                    <div className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
                      Custom Quote
                    </div>
                    <div className="text-xs text-zinc-400 mt-1">
                      Based on monthly creative volume & ad spend tier
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                    {pkg.overview}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] uppercase font-mono tracking-wider text-zinc-400 block font-semibold">
                      Included in Sprint:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <div className="w-4 h-4 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Turnaround & Support Specs */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs font-mono space-y-1.5 mb-8">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>Turnaround:</span>
                      <span className="text-white font-medium">{pkg.turnaround}</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>Support:</span>
                      <span className="text-white font-medium truncate max-w-[170px]">{pkg.supportLevel}</span>
                    </div>
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg ${
                    isPopular
                      ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white shadow-rose-600/30'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-rose-500/40'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

        {/* ⭐ 12 MONTHS FAVORITE OFFER SHOWCASE CARD ⭐ */}
        <div id="favorite-offer" className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-950/40 via-zinc-950 to-rose-950/30 border-2 border-amber-500/50 shadow-2xl relative overflow-hidden scroll-mt-24">
          <div className="absolute top-0 right-0">
            <div className="bg-gradient-to-l from-amber-500 to-rose-600 text-black text-[11px] font-mono font-black uppercase tracking-widest px-6 py-1.5 rounded-bl-2xl shadow-xl flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5 fill-black" />
              <span>⭐ ALL-TIME FAVORITE 12-MONTH OFFER</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 lg:pt-0">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 text-xs font-mono font-bold uppercase bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/40 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  12 MONTHS ANNUAL GROWTH RETAINER
                </span>
                <span className="px-3 py-1 text-xs font-mono font-bold uppercase bg-rose-500/20 text-rose-300 rounded-full border border-rose-500/30">
                  🎁 2 MONTHS 100% FREE
                </span>
                <span className="px-3 py-1 text-xs font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                  SAVE UP TO 35%
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                Scale For 12 Months With Guaranteed VIP Creative Capacity & Strategy.
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                Lock in your dedicated Creative Director, Senior 3D Animator, and Performance Media Buyer for the entire year. Pay for 10 months and receive 12 full months of uninterrupted weekly output.
              </p>

              {/* Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span><strong>2 Months Free:</strong> Pay 10 Months, Get 12 Months</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span><strong>Dedicated Team:</strong> Reserved Creative Director & 3D Lead</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span><strong>Quarterly Brand Identity:</strong> Free 3D Motion Overhauls</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span><strong>VIP Speed:</strong> 24h Turnarounds & Unlimited Revisions</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-stretch space-y-4 p-6 rounded-2xl bg-black/50 border border-white/10">
              <div className="text-center">
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                  12-Month Annual Commitment
                </span>
                <span className="text-3xl font-display font-black text-amber-300 block">
                  Custom Annual Quote
                </span>
                <span className="text-xs text-emerald-400 font-mono font-semibold">
                  Includes 2 Free Bonus Months
                </span>
              </div>

              <button
                onClick={() => onSelectPackage('⭐ 12 Months Favorite Offer (Annual Retainer)')}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-amber-400 hover:from-amber-400 hover:to-rose-400 text-black font-display font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <Crown className="w-4 h-4 fill-black" />
                <span>Claim 12-Month Offer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-zinc-400 font-mono">
                Only 3 enterprise retainer slots open for Q1/Q2 2026.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Scope Calculator Trigger Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-display font-bold text-white">
                Interactive Project Scope & Estimate Calculator
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Calculate estimated monthly deliverables and receive an instant tailored scope recommendation.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCalculator}
            className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold border border-white/10 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Launch Calculator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
