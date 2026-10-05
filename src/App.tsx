import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowreelModal } from './components/ShowreelModal';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyReelwaySection } from './components/WhyReelwaySection';
import { FestivalOffersSection } from './components/FestivalOffersSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { BlogJournalSection } from './components/BlogJournalSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectCalculatorModal } from './components/ProjectCalculatorModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { ProjectItem } from './types';
import { CASE_STUDIES_DATA } from './data/reelwayData';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledPackage, setPrefilledPackage] = useState<string>('');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | null }>({
    isOpen: false,
    type: null
  });

  const navigateToContact = (service?: string, pkg?: string) => {
    if (service) setPrefilledService(service);
    if (pkg) setPrefilledPackage(pkg);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenVideoFromCase = (videoUrl: string, title: string) => {
    const cs = CASE_STUDIES_DATA.find(c => c.videoUrl === videoUrl || c.title === title);
    if (cs) {
      setSelectedProject({
        id: cs.id,
        title: cs.title,
        client: cs.client,
        category: 'commercials',
        categoryLabel: cs.industry,
        tag: 'CASE STUDY',
        thumbnail: cs.heroImage,
        videoPreviewUrl: cs.videoUrl || videoUrl,
        aspectRatio: '16:9',
        metrics: {
          label: cs.results[0]?.label || 'ROI / Growth',
          value: cs.results[0]?.metric || '+380%'
        },
        duration: '1:15',
        year: '2026',
        summary: cs.creativeSolution,
        deliverables: cs.results.map(r => `${r.label}: ${r.metric}`)
      });
    } else {
      setShowreelOpen(true);
    }
  };

  const handleApplyScope = (scopeSummary: string, packageName: string) => {
    setPrefilledPackage(packageName);
    setPrefilledService(scopeSummary);
    navigateToContact(scopeSummary, packageName);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hi REELWAY team! Let's talk about scaling our creative content and marketing.");
    window.open(`https://wa.me/919084324136?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      
      {/* Sticky Top Navigation Bar */}
      <Navbar
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenShowreel={() => setShowreelOpen(true)}
        onNavigateContact={() => navigateToContact()}
        onSelectOffer={(offerName, discount) => navigateToContact(undefined, `${offerName} (${discount})`)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Video Showreel Player */}
        <Hero
          onOpenShowreel={() => setShowreelOpen(true)}
          onOpenConsultation={() => setConsultationOpen(true)}
          onNavigateContact={() => navigateToContact()}
        />

        {/* 2. About REELWAY (Creative + Performance Synergy) */}
        <AboutSection onNavigateContact={() => navigateToContact()} />

        {/* 3. Core Capabilities & Services Arsenal (Fixes #services anchor links) */}
        <ServicesSection onSelectService={(serviceTitle) => navigateToContact(serviceTitle)} />

        {/* 4. Curated Portfolio & Work Reel + Before/After Slider */}
        <PortfolioSection
          onOpenProjectModal={(proj) => setSelectedProject(proj)}
          onOpenShowreel={() => setShowreelOpen(true)}
        />

        {/* 5. Verified Case Studies (Challenge -> Strategy -> Creative Solution -> Campaign -> Results) */}
        <CaseStudiesSection
          onOpenVideo={handleOpenVideoFromCase}
          onNavigateContact={() => navigateToContact()}
        />

        {/* 6. Agile 6-Step Growth Protocol (Discovery -> Script -> Create -> Animate -> Amplify -> Scale) */}
        <ProcessSection />

        {/* 7. Why REELWAY (6 Pillars) */}
        <WhyReelwaySection onNavigateContact={() => navigateToContact()} />

        {/* 8. Exclusive Festival Offers (Diwali, Navratri, Eid, Holi & Regional Brand Sprints) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FestivalOffersSection
            onClaimOffer={(offerName, discount) =>
              navigateToContact(undefined, `${offerName} (${discount})`)
            }
          />
        </div>

        {/* 9. Pricing Packages (START, GROW, SCALE - Custom Quotes) */}
        <PricingSection
          onSelectPackage={(pkgName) => navigateToContact(undefined, pkgName)}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* 9. Testimonials (Founder & CMO Reviews) */}
        <TestimonialsSection />

        {/* 10. FAQ Accordion */}
        <FaqSection onNavigateContact={() => navigateToContact()} />

        {/* 11. The REELWAY Journal (Blog) */}
        <BlogJournalSection />

        {/* 12. Final High-Impact CTA */}
        <FinalCtaSection
          onStartProject={() => navigateToContact()}
          onBookConsultation={() => setConsultationOpen(true)}
          onChatWhatsApp={openWhatsApp}
        />

        {/* 13. Comprehensive Lead Generation Contact Form & Channels */}
        <ContactSection
          prefilledService={prefilledService}
          prefilledPackage={prefilledPackage}
        />
      </main>

      {/* Global Footer */}
      <Footer onOpenLegal={(type) => setLegalModal({ isOpen: true, type })} />

      {/* Floating Action WhatsApp Widget */}
      <WhatsAppFloating />

      {/* Modals & Lightboxes */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onNavigateContact={() => navigateToContact()}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
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
