import React from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  MessageCircle, 
  Calculator, 
  HelpCircle,
  Home
} from 'lucide-react';
import { SocialMediaPackagesSection } from './SocialMediaPackagesSection';

import { SocialMediaPackage } from '../data/socialMediaPackagesData';

interface SocialMediaPackagesPageProps {
  onBackToHome: () => void;
  onSelectPackage: (packageName: string) => void;
  onOpenConsultation: () => void;
  onOpenProjectSpecifications?: (pkg: SocialMediaPackage) => void;
  onOpenPaymentPage?: (pkg: SocialMediaPackage) => void;
}

export const SocialMediaPackagesPage: React.FC<SocialMediaPackagesPageProps> = ({
  onBackToHome,
  onSelectPackage,
  onOpenConsultation,
  onOpenProjectSpecifications,
  onOpenPaymentPage
}) => {
  return (
    <div className="min-h-screen bg-white text-slate-800 pt-28 pb-20">
      {/* Top Breadcrumb & Return to Home Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between py-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-mono font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-mono text-slate-500 font-medium">Pricing & Plans</span>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-mono font-bold text-rose-600">Social Media Marketing Packages</span>
          </div>

          <button
            onClick={() => {
              const text = encodeURIComponent("Hi REELWAY! I want to discuss your Social Media Marketing packages.");
              window.open(`https://wa.me/919084324136?text=${text}`, '_blank');
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct WhatsApp Support</span>
          </button>
        </div>
      </div>

      {/* Main Packages Section Component */}
      <SocialMediaPackagesSection
        onSelectPackage={(pkg) => {
          onSelectPackage(pkg);
          onBackToHome();
        }}
        onOpenConsultation={() => {
          onOpenConsultation();
          onBackToHome();
        }}
        onOpenProjectSpecifications={onOpenProjectSpecifications}
        onOpenPaymentPage={onOpenPaymentPage}
      />
    </div>
  );
};
