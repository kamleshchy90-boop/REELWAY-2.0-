import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowreelModal } from './components/ShowreelModal';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyReelwaySection } from './components/WhyReelwaySection';
import { SocialMediaPackagesSection } from './components/SocialMediaPackagesSection';
import { SocialMediaPackagesPage } from './components/SocialMediaPackagesPage';
import { ProjectSpecificationsPage } from './components/ProjectSpecificationsPage';
import { PaymentReceivedPage } from './components/PaymentReceivedPage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ProjectCalculatorModal } from './components/ProjectCalculatorModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { ProjectItem } from './types';
import { SocialMediaPackage } from './data/socialMediaPackagesData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'packages' | 'specifications' | 'payment'>('home');
  const [selectedPackageForSpecs, setSelectedPackageForSpecs] = useState<SocialMediaPackage | null>(null);
  const [selectedPackageForPayment, setSelectedPackageForPayment] = useState<SocialMediaPackage | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledPackage, setPrefilledPackage] = useState<string>('');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | null }>({
    isOpen: false,
    type: null
  });

  const navigateToContact = (service?: string, pkg?: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    if (service) setPrefilledService(service);
    if (pkg) setPrefilledPackage(pkg);
    setTimeout(() => {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleApplyScope = (scopeSummary: string, packageName: string) => {
    setPrefilledPackage(packageName);
    setPrefilledService(scopeSummary);
    navigateToContact(scopeSummary, packageName);
  };

  const handleOpenSpecifications = (pkg: SocialMediaPackage) => {
    setSelectedPackageForSpecs(pkg);
    setCurrentPage('specifications');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPayment = (pkg: SocialMediaPackage) => {
    setSelectedPackageForPayment(pkg);
    setCurrentPage('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hi REELWAY team! Let's talk about scaling our creative content and marketing.");
    window.open(`https://wa.me/919084324136?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      
      {/* Sticky Top Navigation Bar */}
      <Navbar
        onOpenConsultation={() => navigateToContact('Free Consultation')}
        onOpenShowreel={() => setShowreelOpen(true)}
        onNavigateContact={() => navigateToContact()}
        onSelectOffer={(offerName, discount) => navigateToContact(undefined, `${offerName} (${discount})`)}
        onOpenPackagesPage={() => {
          setCurrentPage('packages');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentPage={currentPage}
      />

      {/* Main Content Sections or Dedicated Pages */}
      {currentPage === 'payment' ? (
        <main className="flex-grow">
          <PaymentReceivedPage
            packageData={selectedPackageForPayment}
            onBack={() => {
              setCurrentPage('home');
              setTimeout(() => {
                const pkgElem = document.getElementById('smm-packages');
                if (pkgElem) pkgElem.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            onGoToSpecs={(pkg) => handleOpenSpecifications(pkg)}
          />
        </main>
      ) : currentPage === 'specifications' ? (
        <main className="flex-grow">
          <ProjectSpecificationsPage
            packageData={selectedPackageForSpecs}
            onBack={() => {
              setCurrentPage('home');
              setTimeout(() => {
                const pkgElem = document.getElementById('smm-packages');
                if (pkgElem) pkgElem.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            onProceedToContact={(specSummary, pkgName) => {
              navigateToContact(specSummary, pkgName);
            }}
            onProceedToPayment={(pkg) => handleOpenPayment(pkg)}
          />
        </main>
      ) : currentPage === 'packages' ? (
        <main className="flex-grow">
          <SocialMediaPackagesPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectPackage={(pkg) => navigateToContact(undefined, pkg)}
            onOpenConsultation={() => navigateToContact('Free Consultation')}
            onOpenProjectSpecifications={handleOpenSpecifications}
            onOpenPaymentPage={handleOpenPayment}
          />
        </main>
      ) : (
        <main className="flex-grow">
          {/* 1. Hero Section with Video Showreel Player */}
          <Hero
            onOpenShowreel={() => setShowreelOpen(true)}
            onOpenConsultation={() => navigateToContact('Free Consultation')}
            onNavigateContact={() => navigateToContact()}
          />

          {/* 2. Core Capabilities & Services Arsenal */}
          <ServicesSection onSelectService={(serviceTitle) => navigateToContact(serviceTitle)} />

          {/* 4. Curated Portfolio & Work Reel + Before/After Slider */}
          <PortfolioSection
            onOpenProjectModal={(proj) => setSelectedProject(proj)}
            onOpenShowreel={() => setShowreelOpen(true)}
          />

          {/* 5. Agile 6-Step Growth Protocol (Discovery -> Script -> Create -> Animate -> Amplify -> Scale) */}
          <ProcessSection />

          {/* 7. Why REELWAY (6 Pillars) */}
          <WhyReelwaySection onNavigateContact={() => navigateToContact()} />

          {/* 11. Social Media Marketing Packages */}
          <SocialMediaPackagesSection
            onSelectPackage={(pkgName) => navigateToContact(undefined, pkgName)}
            onOpenConsultation={() => navigateToContact('Free Consultation')}
            onOpenProjectSpecifications={handleOpenSpecifications}
            onOpenPaymentPage={handleOpenPayment}
          />

          {/* 13. Comprehensive Lead Generation Contact Form & Channels */}
          <ContactSection
            prefilledService={prefilledService}
            prefilledPackage={prefilledPackage}
          />
        </main>
      )}

      {/* Global Footer */}
      <Footer 
        onOpenLegal={(type) => setLegalModal({ isOpen: true, type })} 
        onOpenPackagesPage={() => {
          setCurrentPage('packages');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Floating Action WhatsApp Widget */}
      <WhatsAppFloating />

      {/* Modals & Lightboxes */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onNavigateContact={() => navigateToContact()}
      />

      <ProjectCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onApplyScope={handleApplyScope}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateContact={() => navigateToContact()}
      />

      <PrivacyTermsModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={() => setLegalModal({ isOpen: false, type: null })}
      />

    </div>
  );
}
