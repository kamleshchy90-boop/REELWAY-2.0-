import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sparkles, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { FAQ_DATA } from '../data/reelwayData';

interface FaqSectionProps {
  onNavigateContact: () => void;
}

const FAQ_CATEGORIES = [
  { key: 'all', label: 'All Questions' },
  { key: 'services', label: 'Services' },
  { key: 'pricing', label: 'Pricing & Quotes' },
  { key: 'timelines', label: 'Timelines' },
  { key: 'video', label: 'Video Editing' },
  { key: 'social', label: 'Social Media' },
  { key: 'ads', label: 'Advertising' },
  { key: 'packages', label: 'Custom Packages' },
];

export const FaqSection: React.FC<FaqSectionProps> = ({ onNavigateContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-slate-50/70 relative overflow-hidden border-t border-slate-200">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-rose-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-medium mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>CLARITY & TRANSPARENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Frequently Asked{' '}
            <span className="text-gradient-cinematic">Questions.</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Everything you need to know about our video production, motion graphics, advertising sprints, and custom partnership scopes.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., turnaround, revisions, TikTok ads)..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-rose-500 transition-colors shadow-sm"
            />
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-rose-600 text-white font-bold shadow-md shadow-rose-600/20'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                    isOpen
                      ? 'border-2 border-rose-400 shadow-lg'
                      : 'border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-rose-600 uppercase tracking-wider font-bold">
                        [{faq.categoryLabel}]
                      </span>
                      <h3 className="text-base sm:text-lg font-display font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`p-1.5 rounded-full bg-slate-100 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-rose-600 bg-rose-50' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-slate-500 text-sm">
              No matching questions found. Try a different search term or contact us directly.
            </div>
          )}
        </div>

        {/* Support Callout */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-rose-600 shrink-0" />
            <span className="text-sm text-slate-700">
              Have a question not covered here? We're available 24/7 on WhatsApp and email.
            </span>
          </div>
          <button
            onClick={onNavigateContact}
            className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
