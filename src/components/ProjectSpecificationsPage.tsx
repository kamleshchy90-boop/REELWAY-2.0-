import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  MessageCircle, 
  FileText, 
  Layers, 
  Video, 
  Send, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  Printer, 
  Share2,
  Sliders,
  DollarSign,
  PhoneCall
} from 'lucide-react';
import { SocialMediaPackage, SOCIAL_MEDIA_PACKAGES, SMM_IMPORTANT_NOTES } from '../data/socialMediaPackagesData';

interface ProjectSpecificationsPageProps {
  packageData: SocialMediaPackage | null;
  onBack: () => void;
  onProceedToContact: (specSummary: string, packageName: string) => void;
  onProceedToPayment?: (pkg: SocialMediaPackage) => void;
}

export const ProjectSpecificationsPage: React.FC<ProjectSpecificationsPageProps> = ({
  packageData,
  onBack,
  onProceedToContact,
  onProceedToPayment
}) => {
  // Fallback to Premium Business if none selected
  const activePkg = packageData || SOCIAL_MEDIA_PACKAGES[4];

  // Optional Add-ons state
  const [extraReels, setExtraReels] = useState(0);
  const [include3DIntro, setInclude3DIntro] = useState(false);
  const [expeditedTurnaround, setExpeditedTurnaround] = useState(false);
  const [customBrief, setCustomBrief] = useState('');
  const [brandName, setBrandName] = useState('');
  const [contactHandle, setContactHandle] = useState('');

  // Calculate dynamic total
  const addOnCost = (extraReels * 499) + (include3DIntro ? 1499 : 0) + (expeditedTurnaround ? 1999 : 0);
  const calculatedTotal = activePkg.priceNum + addOnCost;

  const handlePrintSpecs = () => {
    window.print();
  };

  const handleWhatsAppSpecs = () => {
    const summary = `*PROJECT SPECIFICATION BRIEF - REELWAY*
• Package: ${activePkg.fullName} (${activePkg.price}/mo)
• Target: ${activePkg.idealFor}
• Deliverables: ${activePkg.features.join(' | ')}
• Platforms: ${activePkg.platforms.join(', ')}
${extraReels > 0 ? `• Extra Reels: +${extraReels} (₹${extraReels * 499})` : ''}
${include3DIntro ? `• 3D Brand Logo Intro: Included (₹1,499)` : ''}
${expeditedTurnaround ? `• 24-48h Expedited SLA: Included (₹1,999)` : ''}
• Estimated Monthly Investment: ₹${calculatedTotal.toLocaleString()}
${brandName ? `• Brand/Client: ${brandName}` : ''}
${contactHandle ? `• Contact/Handle: ${contactHandle}` : ''}
${customBrief ? `• Notes: ${customBrief}` : ''}

Please confirm slot availability and onboarding timeline!`;

    window.open(`https://wa.me/919084324136?text=${encodeURIComponent(summary)}`, '_blank');
  };

  const handleSubmitSpecs = (e: React.FormEvent) => {
    e.preventDefault();
    const summary = `${activePkg.fullName} | Specs: ${activePkg.features.join(', ')} | Platforms: ${activePkg.platforms.join(', ')} | Extra: +${extraReels} Reels, 3D Intro: ${include3DIntro ? 'Yes' : 'No'} | Est: ₹${calculatedTotal}/mo`;
    onProceedToContact(summary, `${activePkg.fullName} (₹${calculatedTotal.toLocaleString()}/mo)`);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-8 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-mono font-semibold transition-all cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Packages</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-mono text-slate-500">Project Scope</span>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-mono font-bold text-rose-600">
              {activePkg.name} Specifications
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onProceedToPayment && (
              <button
                onClick={() => onProceedToPayment(activePkg)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Pay & Confirm Slot ({activePkg.price})</span>
              </button>
            )}
            <button
              onClick={handlePrintSpecs}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-mono transition-colors cursor-pointer"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Spec Sheet</span>
            </button>
            <button
              onClick={handleWhatsAppSpecs}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Inquiry</span>
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 blur-[120px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL PROJECT SPECIFICATION SHEET</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                {activePkg.fullName} Scope & SOW
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
                {activePkg.idealFor} &bull; Month-to-Month Performance Retainer
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-white text-right sm:min-w-[220px] shrink-0 shadow-lg">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-0.5">
                Monthly Retainer
              </span>
              <div className="text-3xl sm:text-4xl font-display font-black text-white font-mono-data">
                {activePkg.price}
                <span className="text-xs text-slate-400 font-normal font-sans ml-1">/month</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono block mt-1">
                No Long-Term Lock-in &bull; Cancel Anytime
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Grid: Specifications & Scope Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Left 2 Cols: Comprehensive Scope Matrix */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Section 1: Content Deliverables Matrix */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-display font-bold text-slate-900">
                    1. Creative Production Deliverables
                  </h2>
                  <p className="text-xs text-slate-500 font-mono">
                    High-retention visual assets created every 30-day billing cycle
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activePkg.features.map((feat, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900">
                        {feat}
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">
                        Included in base package
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Distribution & Multi-Platform Publishing */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-display font-bold text-slate-900">
                    2. Supported Distribution Channels & Accounts
                  </h2>
                  <p className="text-xs text-slate-500 font-mono">
                    Active publishing, scheduling, and format re-sizing across approved accounts
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {activePkg.platforms.map((plat) => (
                  <div
                    key={plat}
                    className="px-4 py-2.5 rounded-xl bg-slate-100/90 border border-slate-200 text-xs font-mono font-bold text-slate-800 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{plat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Performance, Advertising & Approval SLAs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-display font-bold text-slate-900">
                    3. Turnaround SLA & Working Protocol
                  </h2>
                  <p className="text-xs text-slate-500 font-mono">
                    Standardized turnaround, feedback cycles, and ad account governance
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Standard Turnaround:</span>
                  <span>Drafts delivered within 48–72 hours of asset receipt and script sign-off.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Revision Cycle:</span>
                  <span>Two rounds of revisions per creative to ensure precision and tone alignment.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Ad Campaigns:</span>
                  <span>{activePkg.priceNum >= 4999 ? 'Meta Ads management active. Client provides media spend budget.' : 'Organic growth orientation. Meta Ads add-on available upon request.'}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Communication Channel:</span>
                  <span>Dedicated WhatsApp Group & shared Google Drive / Notion workspace.</span>
                </div>
              </div>
            </div>

            {/* Section 4: Terms & Working Policies */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800">
              <div className="flex items-center gap-2.5 mb-4">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <h3 className="font-display font-bold text-base text-white">
                  Specification Policies & Terms
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {SMM_IMPORTANT_NOTES.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-mono font-bold">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Customizer & Onboarding Form */}
          <div className="space-y-6">
            
            {/* Package Add-on Customizer */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Sliders className="w-4 h-4 text-rose-600" />
                <h3 className="text-sm font-display font-bold text-slate-900">
                  Customize Specifications
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                {/* Extra Reels Counter */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-slate-800">Extra Edited Reels</span>
                    <span className="font-mono text-slate-500">+₹499 each</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Add to monthly quota</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setExtraReels(Math.max(0, extraReels - 1))}
                        className="w-7 h-7 rounded-lg bg-slate-200 hover:bg-slate-300 font-bold flex items-center justify-center cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold text-slate-900 font-mono">
                        {extraReels}
                      </span>
                      <button
                        type="button"
                        onClick={() => setExtraReels(extraReels + 1)}
                        className="w-7 h-7 rounded-lg bg-slate-200 hover:bg-slate-300 font-bold flex items-center justify-center cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3D Brand Logo Intro Add-on */}
                <label className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 cursor-pointer hover:bg-slate-100/80 transition-colors">
                  <input
                    type="checkbox"
                    checked={include3DIntro}
                    onChange={(e) => setInclude3DIntro(e.target.checked)}
                    className="mt-0.5 rounded text-rose-600 focus:ring-rose-500 cursor-pointer"
                  />
                  <div>
                    <span className="font-semibold text-slate-800 block">
                      3D Brand Logo Reveal Animation
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Custom 4K 3D opening hook (+₹1,499 one-time)
                    </span>
                  </div>
                </label>

                {/* 24h Expedited SLA */}
                <label className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 cursor-pointer hover:bg-slate-100/80 transition-colors">
                  <input
                    type="checkbox"
                    checked={expeditedTurnaround}
                    onChange={(e) => setExpeditedTurnaround(e.target.checked)}
                    className="mt-0.5 rounded text-rose-600 focus:ring-rose-500 cursor-pointer"
                  />
                  <div>
                    <span className="font-semibold text-slate-800 block">
                      Priority 24-Hour Expedited Queue
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Guaranteed rapid turnarounds on all creative cuts (+₹1,999/mo)
                    </span>
                  </div>
                </label>
              </div>

              {/* Total Calculation */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block">
                    Estimated Total Retainer
                  </span>
                  <span className="text-xl font-display font-black text-rose-600 font-mono-data">
                    ₹{calculatedTotal.toLocaleString()}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 ml-1">/month</span>
                </div>
              </div>
            </div>

            {/* Quick Specification Sign-Off & Booking Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md">
              <h3 className="text-sm font-display font-bold text-slate-900 mb-2">
                Submit Specification & Book Slot
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Lock your monthly slot with REELWAY. Our creative director will review your brief within 2 hours.
              </p>

              <form onSubmit={handleSubmitSpecs} className="space-y-3">
                <div>
                  <label className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">
                    Brand or Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Acme Tech Solutions"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">
                    Instagram Handle or Website *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactHandle}
                    onChange={(e) => setContactHandle(e.target.value)}
                    placeholder="e.g. @acmetech or acme.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">
                    Specific Goals / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={customBrief}
                    onChange={(e) => setCustomBrief(e.target.value)}
                    placeholder="e.g. Looking to double Instagram follower engagement and run Meta lead ads..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-display font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>Confirm Specifications & Book</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                {onProceedToPayment && (
                  <button
                    type="button"
                    onClick={() => onProceedToPayment(activePkg)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Proceed to Payment (REELWAY: +91 90843 24136)</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleWhatsAppSpecs}
                  className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Send Spec Sheet via WhatsApp</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
