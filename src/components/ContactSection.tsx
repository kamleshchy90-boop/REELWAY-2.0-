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
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-rose-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-medium mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>START YOUR TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Let's Build Something{' '}
            <span className="text-gradient-cinematic">Extraordinary Together.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Fill out the brief below to receive a custom project scope, timeline estimate, and creative strategy outline within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Channels & Credibility */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
              <h3 className="text-xl font-display font-bold text-slate-900">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Prefer instant messaging? Reach our executive creative team directly via WhatsApp, phone or direct email.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* WhatsApp Direct */}
                <a
                  href="https://api.whatsapp.com/send?phone=919084324136&text=Hi%20REELWAY%20team!%20I%20want%20to%20chat%20about%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-left flex items-center justify-between transition-all group cursor-pointer shadow-sm hover:border-emerald-500 block"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center relative group-hover:scale-105 transition-transform shrink-0">
                      <MessageCircle className="w-6 h-6 fill-emerald-600" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5 border-2 border-white animate-pulse" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider block">
                        Click to Chat on WhatsApp
                      </span>
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        +91 90843 24136
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-mono text-xs font-bold transition-all shrink-0">
                    <span>Chat</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:reelway1r@gmail.com"
                  className="p-4 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 flex items-center gap-3.5 transition-all block text-left shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      reelway1r@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919084324136"
                  className="p-4 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 flex items-center gap-3.5 transition-all block text-left shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Direct Voice
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      +91 90843 24136
                    </span>
                  </div>
                </a>

              </div>

              {/* Office Locations */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase mb-3">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  <span>Creative Hubs</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Los Angeles &bull; New York &bull; London &bull; Singapore (Serving Global Clients Across 28+ Timezones)
                </p>
              </div>
            </div>

            {/* Turnaround Guarantee Box */}
            <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  24-Hour Response SLA
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Our Creative Directors personally review all inbound briefs and respond with preliminary ideas within one business day.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Complete Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                    Project Brief Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our Lead Creative Strategist is already reviewing your goals for <strong className="text-slate-900">{formData.company || 'your brand'}</strong>.
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 max-w-md mx-auto">
                    We will reach out via <span className="text-rose-600 font-bold">{formData.email}</span> and WhatsApp (<span className="text-emerald-700 font-bold">{formData.whatsapp}</span>) within 24 hours.
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
                    className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 border border-slate-300 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-2">
                    <h3 className="text-lg font-display font-bold text-slate-900">
                      Project Specifications
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      All fields kept strictly confidential
                    </span>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Vance"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-colors ${
                          errors.name ? 'border-red-500' : 'border-slate-300 focus:border-rose-500'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Audio Inc."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-colors ${
                          errors.email ? 'border-red-500' : 'border-slate-300 focus:border-rose-500'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="text"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-colors ${
                          errors.whatsapp ? 'border-red-500' : 'border-slate-300 focus:border-rose-500'
                        }`}
                      />
                      {errors.whatsapp && <p className="text-[11px] text-red-500 mt-1">{errors.whatsapp}</p>}
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                      Website / Social Handle
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://yourbrand.com or @yourbrand"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors"
                    />
                  </div>

                  {/* Primary Service Selection */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                      Primary Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors"
                    >
                      {SERVICE_OPTIONS.map((srv) => (
                        <option key={srv} value={srv} className="bg-white text-slate-900">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                        Estimated Budget *
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors"
                      >
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b} className="bg-white text-slate-900">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                        Target Timeline *
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors"
                      >
                        {TIMELINE_OPTIONS.map((t) => (
                          <option key={t} value={t} className="bg-white text-slate-900">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                      Project Details & Vision *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us about your brand goals, target audience, reference videos, and what success looks like..."
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-colors ${
                        errors.projectDetails ? 'border-red-500' : 'border-slate-300 focus:border-rose-500'
                      }`}
                    />
                    {errors.projectDetails && <p className="text-[11px] text-red-500 mt-1">{errors.projectDetails}</p>}
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
