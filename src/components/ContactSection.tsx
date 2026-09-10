import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Loader2,
  Database
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LeadFormData } from '../types';
import { saveLeadInquiry } from '../lib/supabase';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledPackage?: string;
}

const SERVICE_OPTIONS = [
  'Motion Graphics & 2D/3D Animation',
  'High-End Video Editing (Commercials & Reels)',
  'Performance Marketing & Paid Ads (Meta/TikTok/Google)',
  'Social Media Management & Organic Growth',
  'Brand Identity & Motion Systems',
  'Technical SEO & YouTube Optimization',
  'Full-Stack Growth Sprint (Creative + Media)',
  'Custom Hybrid Package'
];

const BUDGET_OPTIONS = [
  '₹299 - ₹499 (Starter / Single Edit)',
  '₹499 - ₹999 (Basic Reel / Short-Form)',
  '₹999 - ₹2,499 (Standard Motion Video)',
  '₹2,499 - ₹4,999 (Pro Pack / Multi-Reels)',
  '₹4,999 - ₹7,999 (Growth Bundle & VFX)',
  '₹7,999 - ₹11,999 (Complete Commercial Sprint)',
  '₹11,999+ (Enterprise Full-Funnel Growth)',
  'Custom Scope / Milestone Based'
];

const TIMELINE_OPTIONS = [
  'Immediately (Within 7 days)',
  '1 - 2 Weeks',
  'Next Month',
  'Exploring for Next Quarter'
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService,
  prefilledPackage
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    website: '',
    service: prefilledService || SERVICE_OPTIONS[0],
    budget: BUDGET_OPTIONS[1],
    timeline: TIMELINE_OPTIONS[0],
    projectDetails: prefilledPackage ? `Interested in ${prefilledPackage} package.` : ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledPackage) {
      setFormData(prev => ({ 
        ...prev, 
        projectDetails: `Inquiry regarding ${prefilledPackage} package.` 
      }));
    }
  }, [prefilledPackage]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof LeadFormData, string>> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Full name is required (minimum 2 characters)';
    }
    if (!formData.email.trim()) {
      errs.email = 'Work email address is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid work email address (e.g. name@brand.com)';
    }
    const phoneClean = formData.whatsapp.replace(/[\s\-\(\)\.]/g, '');
    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'WhatsApp / Phone number is required for fast delivery updates';
    } else if (!/^[\+]?[0-9]{7,15}$/.test(phoneClean)) {
      errs.whatsapp = 'Please enter a valid phone or WhatsApp number (7-15 digits)';
    }
    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 10) {
      errs.projectDetails = 'Please share a brief description of your goals (min 10 characters)';
    }
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await saveLeadInquiry({
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        whatsapp: formData.whatsapp.trim(),
        website: formData.website.trim(),
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        project_details: formData.projectDetails.trim(),
      });
    } catch (err) {
      console.warn('SuperBase save caught error in lead:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const openDirectWhatsApp = () => {
    const text = encodeURIComponent(`Hi REELWAY team! I'm interested in discussing a video & growth project.`);
    window.open(`https://wa.me/919084324136?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#08090d] relative overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-rose-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-400 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START YOUR TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Let's Build Something{' '}
            <span className="text-gradient-cinematic">Extraordinary Together.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Fill out the brief below to receive a custom project scope, timeline estimate, and creative strategy outline within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Channels & Credibility */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-zinc-950/80 border border-white/10 space-y-6">
              <h3 className="text-xl font-display font-bold text-white">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Prefer instant messaging? Reach our executive creative team directly via WhatsApp, phone or direct email.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* WhatsApp Direct */}
                <a
                  href="https://api.whatsapp.com/send?phone=919084324136&text=Hi%20REELWAY%20team!%20I%20want%20to%20chat%20about%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 text-left flex items-center justify-between transition-all group cursor-pointer shadow-lg shadow-emerald-950/40 hover:border-emerald-400 block"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center relative group-hover:scale-105 transition-transform shrink-0">
                      <MessageCircle className="w-6 h-6 fill-emerald-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5 border-2 border-zinc-950 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider block">
                        Click to Chat on WhatsApp
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        +91 90843 24136
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500 text-emerald-400 group-hover:text-black font-mono text-xs font-bold transition-all shrink-0">
                    <span>Chat</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:reelway1r@gmail.com"
                  className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 flex items-center gap-3.5 transition-all block text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-rose-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <span className="text-sm font-semibold text-white">
                      reelway1r@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919084324136"
                  className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 flex items-center gap-3.5 transition-all block text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-amber-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Direct Voice
                    </span>
                    <span className="text-sm font-semibold text-white">
                      +91 90843 24136
                    </span>
                  </div>
                </a>

              </div>

              {/* Office Locations */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase mb-3">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Creative Hubs</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Los Angeles &bull; New York &bull; London &bull; Singapore (Serving Global Clients Across 28+ Timezones)
                </p>
              </div>
            </div>

            {/* Turnaround Guarantee Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-950/20 via-zinc-950 to-zinc-950 border border-rose-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  24-Hour Response SLA
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Our Creative Directors personally review all inbound briefs and respond with preliminary ideas within one business day.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Complete Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/90 border border-white/15 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    Project Brief Received!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our Lead Creative Strategist is already reviewing your goals for <strong className="text-white">{formData.company || 'your brand'}</strong>.
                  </p>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs font-mono text-zinc-400 max-w-md mx-auto">
                    We will reach out via <span className="text-rose-400">{formData.email}</span> and WhatsApp (<span className="text-emerald-400">{formData.whatsapp}</span>) within 24 hours.
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        whatsapp: '',
                        website: '',
                        service: SERVICE_OPTIONS[0],
                        budget: BUDGET_OPTIONS[1],
                        timeline: TIMELINE_OPTIONS[0],
                        projectDetails: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-zinc-300 hover:text-white border border-white/10"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-2">
                    <h3 className="text-lg font-display font-bold text-white">
                      Project Specifications
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      All fields kept strictly confidential
                    </span>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Vance"
                        className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/10 focus:border-rose-500'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Audio Inc."
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-rose-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-rose-500'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="text"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                          errors.whatsapp ? 'border-red-500' : 'border-white/10 focus:border-rose-500'
                        }`}
                      />
                      {errors.whatsapp && <p className="text-[11px] text-red-400 mt-1">{errors.whatsapp}</p>}
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                      Website / Social Handle
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://yourbrand.com or @yourbrand"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>

                  {/* Primary Service Selection */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                      Primary Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                    >
                      {SERVICE_OPTIONS.map((srv) => (
                        <option key={srv} value={srv} className="bg-zinc-900 text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                        Estimated Budget *
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                      >
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b} className="bg-zinc-900 text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                        Target Timeline *
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                      >
                        {TIMELINE_OPTIONS.map((t) => (
                          <option key={t} value={t} className="bg-zinc-900 text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                      Project Details & Vision *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us about your brand goals, target audience, reference videos, and what success looks like..."
                      className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                        errors.projectDetails ? 'border-red-500' : 'border-white/10 focus:border-rose-500'
                      }`}
                    />
                    {errors.projectDetails && <p className="text-[11px] text-red-400 mt-1">{errors.projectDetails}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-display font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-rose-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Brief to Creative Director...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief & Get Custom Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
