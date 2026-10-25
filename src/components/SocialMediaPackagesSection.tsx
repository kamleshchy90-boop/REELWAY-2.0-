import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Flame, 
  Star, 
  Crown, 
  ShieldCheck, 
  Info, 
  MessageCircle, 
  Layers, 
  Video, 
  Smartphone, 
  HelpCircle,
  ExternalLink,
  ChevronDown,
  TrendingUp,
  FileText,
  CreditCard
} from 'lucide-react';
import { SOCIAL_MEDIA_PACKAGES, SMM_IMPORTANT_NOTES, SocialMediaPackage } from '../data/socialMediaPackagesData';

interface SocialMediaPackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
  onOpenConsultation?: () => void;
  onOpenProjectSpecifications?: (pkg: SocialMediaPackage) => void;
  onOpenPaymentPage?: (pkg: SocialMediaPackage) => void;
}

export const SocialMediaPackagesSection: React.FC<SocialMediaPackagesSectionProps> = ({
  onSelectPackage,
  onOpenConsultation,
  onOpenProjectSpecifications,
  onOpenPaymentPage
}) => {
  const [filterTier, setFilterTier] = useState<'all' | 'starter' | 'growth' | 'enterprise'>('all');
  const [showComparison, setShowComparison] = useState(false);

  const filteredPackages = SOCIAL_MEDIA_PACKAGES.filter(pkg => {
    if (filterTier === 'starter') return pkg.priceNum <= 2999;
    if (filterTier === 'growth') return pkg.priceNum >= 4999 && pkg.priceNum <= 11999;
    if (filterTier === 'enterprise') return pkg.priceNum >= 14999;
    return true;
  });

  const handleWhatsAppInquiry = (pkg: SocialMediaPackage) => {
    const message = encodeURIComponent(`Hi REELWAY! I am interested in the ${pkg.fullName} (${pkg.price}${pkg.period}). Please share details and onboarding timeline.`);
    window.open(`https://wa.me/919084324136?text=${message}`, '_blank');
  };

  return (
    <section id="smm-packages" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-t border-slate-200 scroll-mt-20">
      {/* Anchor for packages */}
      <div id="packages" className="absolute -top-12 left-0" />

      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-rose-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>TRANSPARENT CREATIVE & PERFORMANCE PACKAGES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            SOCIAL MEDIA <span className="text-gradient-cinematic">MARKETING PACKAGES</span>
          </h2>
          
          <p className="text-base sm:text-xl text-slate-600 font-medium italic mb-8">
            Creative Content. Powerful Marketing. Real Growth.
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From agile startup packages to full-scale enterprise content engines. Choose the exact monthly deliverable volume tailored to your brand stage.
          </p>

          {/* Tier Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilterTier('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterTier === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              All Packages (8)
            </button>
            <button
              onClick={() => setFilterTier('starter')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterTier === 'starter'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Starter & Local (₹999 – ₹2,999)
            </button>
            <button
              onClick={() => setFilterTier('growth')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterTier === 'growth'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Professional & Growth (₹4,999 – ₹11,999)
            </button>
            <button
              onClick={() => setFilterTier('enterprise')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterTier === 'enterprise'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Expansion & Enterprise (₹14,999 – ₹19,999)
            </button>
          </div>
        </div>

        {/* 8 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredPackages.map((pkg) => {
            const isFeatured = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl transition-all duration-300 flex flex-col justify-between relative bg-white border ${
                  isFeatured 
                    ? 'border-2 border-rose-500 shadow-2xl scale-[1.02] ring-4 ring-rose-500/10' 
                    : 'border-slate-200 hover:border-rose-300 shadow-md hover:shadow-xl'
                } p-6 sm:p-7 group`}
              >
                <div>
                  {/* Package Header */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono font-bold text-rose-600 uppercase tracking-widest block mb-1">
                      Package #{pkg.number}
                    </span>
                    <h3 className="text-xl font-display font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-1 min-h-[32px]">
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-4 border-y border-slate-100 mb-5 bg-slate-50/70 -mx-6 px-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight font-mono-data">
                        {pkg.price}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        {pkg.period}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">
                      Billed monthly &bull; Guaranteed turnaround
                    </span>
                  </div>

                  {/* Included Deliverables & Features */}
                  <div className="space-y-3 mb-6">
                    <div className="text-[11px] font-mono font-semibold uppercase text-slate-700 tracking-wider">
                      Included Deliverables:
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-700 flex items-start gap-2.5 leading-relaxed">
                          <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Platforms Supported */}
                  <div className="pt-4 border-t border-slate-100 mb-6">
                    <div className="text-[10px] font-mono uppercase text-slate-500 font-medium mb-2">
                      Platforms Supported:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.platforms.map((plat) => (
                        <span 
                          key={plat}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium"
                        >
                          {plat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      if (onOpenPaymentPage) {
                        onOpenPaymentPage(pkg);
                      } else if (onOpenProjectSpecifications) {
                        onOpenProjectSpecifications(pkg);
                      } else {
                        onSelectPackage(`${pkg.fullName} (${pkg.price}/mo)`);
                      }
                    }}
                    className={`w-full py-3 rounded-xl font-display font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      isFeatured
                        ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white shadow-rose-600/20 hover:shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Payment Received / Pay Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2 pt-0.5">
                    <button
                      type="button"
                      onClick={() => onOpenProjectSpecifications && onOpenProjectSpecifications(pkg)}
                      className="flex-1 py-2 rounded-xl text-[11px] font-mono font-medium text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <FileText className="w-3 h-3 text-rose-600" />
                      <span>Specifications</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleWhatsAppInquiry(pkg)}
                      className="flex-1 py-2 rounded-xl text-[11px] font-mono font-medium text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-600" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Side-by-Side Comparison Toggle */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="px-6 py-3 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-mono font-semibold inline-flex items-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <Layers className="w-4 h-4 text-rose-600" />
            <span>{showComparison ? 'Hide Detailed Spec Matrix' : 'Compare All 8 Packages Side-by-Side'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showComparison ? 'rotate-180' : ''}`} />
          </button>

          {showComparison && (
            <div className="mt-8 rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden overflow-x-auto text-left animate-in fade-in duration-300">
              <table className="w-full border-collapse min-w-[800px] text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 font-display font-bold text-slate-900 text-left">Package Name</th>
                    <th className="p-4 font-display font-bold text-slate-900">Price/mo</th>
                    <th className="p-4 font-display font-bold text-slate-900">Posts</th>
                    <th className="p-4 font-display font-bold text-slate-900">Reels & Videos</th>
                    <th className="p-4 font-display font-bold text-slate-900">Stories/Ads</th>
                    <th className="p-4 font-display font-bold text-slate-900">Paid Ads</th>
                    <th className="p-4 font-display font-bold text-slate-900 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {SOCIAL_MEDIA_PACKAGES.map((pkg) => (
                    <tr key={pkg.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4 font-bold text-slate-900">
                        {pkg.fullName}
                        <span className="block text-[10px] text-slate-500 font-normal">{pkg.idealFor}</span>
                      </td>
                      <td className="p-4 font-display font-bold text-rose-600 font-mono-data text-sm">{pkg.price}</td>
                      <td className="p-4 text-slate-700">{pkg.deliverables.posts}</td>
                      <td className="p-4 text-slate-700">{pkg.deliverables.reels}</td>
                      <td className="p-4 text-slate-700">{pkg.deliverables.stories || '—'}</td>
                      <td className="p-4 text-slate-700">
                        {pkg.priceNum >= 4999 ? 'Meta Ads' : '—'}
                        {pkg.priceNum >= 7999 ? ' + Google Ads' : ''}
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => {
                              if (onOpenPaymentPage) {
                                onOpenPaymentPage(pkg);
                              } else {
                                onSelectPackage(`${pkg.fullName} (${pkg.price}/mo)`);
                              }
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition-colors cursor-pointer"
                          >
                            Pay
                          </button>
                          <button
                            onClick={() => {
                              if (onOpenProjectSpecifications) {
                                onOpenProjectSpecifications(pkg);
                              } else {
                                onSelectPackage(`${pkg.fullName} (${pkg.price}/mo)`);
                              }
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold transition-colors cursor-pointer"
                          >
                            Specs
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Important Notes Callout Box (Exact match from prompt) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 blur-[100px] pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-display font-bold text-white">
                Important Package Notes & Working Policies
              </h4>
              <p className="text-xs text-slate-400 font-mono">
                Ensuring clarity, transparency, and rapid delivery for every client sprint
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SMM_IMPORTANT_NOTES.map((note, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Need custom volume, 3D character animation, or dedicated full-time retainer staff?
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                Request Custom Retainer Quote
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
