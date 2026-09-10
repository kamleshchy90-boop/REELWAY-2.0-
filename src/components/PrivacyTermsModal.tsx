import React, { useEffect } from 'react';
import { X, Shield, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({
  isOpen,
  type,
  onClose
}) => {
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

  if (!isOpen || !type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#0e1017] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
              {type === 'privacy' ? <Shield className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-sm sm:text-base font-display font-bold text-white">
                {type === 'privacy' ? 'REELWAY Privacy Policy' : 'REELWAY Terms of Service'}
              </h3>
              <p className="text-[11px] text-zinc-400 font-mono">
                Last updated: January 2026 &bull; Strict Client Confidentiality
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-rose-500 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-zinc-300 font-light leading-relaxed">
          {type === 'privacy' ? (
            <>
              <div>
                <h4 className="text-base font-display font-bold text-white mb-2">1. Client Confidentiality & NDAs</h4>
                <p>
                  At REELWAY, we understand that your unreleased product footage, ad copy, metrics, and business strategies are sensitive trade assets. We maintain strict non-disclosure practices across our entire team. No raw footage, storyboard, or internal data is ever shared with third parties.
                </p>
              </div>

              <div>
                <h4 className="text-base font-display font-bold text-white mb-2">2. Information We Collect</h4>
                <p>
                  We collect information you explicitly submit through our inquiry and appointment booking forms, including your name, business email, WhatsApp contact, company name, project brief, and selected sprint parameters. This data is utilized solely for communicating with you regarding your project and tailoring custom quotations.
                </p>
              </div>

              <div>
                <h4 className="text-base font-display font-bold text-white mb-2">3. Database & Security Standards</h4>
                <p>
                  Submitted project briefs and consultation records are stored securely using encrypted cloud infrastructure with row-level security. We never sell, rent, or monetize client contact information.
                </p>
              </div>

              <div>
                <h4 className="text-base font-display font-bold text-white mb-2">4. Your Data Rights</h4>
                <p>
                  You have the right to request deletion or modification of your inquiry details from our systems at any time by contacting our privacy compliance desk at <strong className="text-white">reelway1r@gmail.com</strong>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-base font-display font-bold text-white mb-2">1. Engagement & Sprint Scope</h4>
                <p>
                  REELWAY provides custom motion design, video production, performance media buying, and brand identity services. The exact deliverables, sprint timelines, and asset specifications for each project are governed by the mutually approved custom quote and project brief.
                </p>
              </div>

              <div>
                <h4 className="text-base font-display font-bold text-white mb-2">2. Intellectual Property Rights</h4>
                <p>
                  Upon settlement of project invoices, all final rendered video assets, animations, and deliverables created for your brand become your exclusive commercial property. REELWAY retains the right to display finished work in agency reels and case studies unless a private NDA is explicitly agreed upon prior to project kickoff.
                </p>
              </div>

              <div>
                <h4 className="text-base font-display font-bold text-white mb-2">3. Turnaround Times & Revisions</h4>
                <p>
                  Active sprint turnarounds (such as 24-48 hours for short-form edits) depend upon prompt client feedback and asset provision. Sprints include iterative revision rounds within the active delivery window to ensure total alignment with your brand standards.
                </p>
              </div>

              <div>
                <h4 className="text-base font-display font-bold text-white mb-2">4. Payment Terms</h4>
                <p>
                  Project sprint milestones or monthly retainers are billed according to custom quotation terms. Invoices are payable via approved corporate wire, credit transfer, or verified payment portals prior to final master file handoff.
                </p>
              </div>
            </>
          )}

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-xs text-zinc-400">
              For custom enterprise contracts, master services agreements (MSA), or mutual NDAs, please reach out to <strong className="text-white">reelway1r@gmail.com</strong>.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-zinc-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
