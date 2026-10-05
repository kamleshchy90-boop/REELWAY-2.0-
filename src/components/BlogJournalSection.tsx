import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Calendar, 
  Search, 
  Sparkles, 
  X,
  Share2,
  Tag
} from 'lucide-react';
import { BLOG_ARTICLES, JOURNAL_CATEGORIES } from '../data/reelwayData';
import { BlogArticle } from '../types';

export const BlogJournalSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  // Keyboard navigation & body scroll lock for article modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedArticle(null);
      }
    };
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArticle]);

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="journal" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-rose-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-medium mb-4 shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-rose-600" />
              <span>THE REELWAY JOURNAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Insights, Frameworks &{' '}
              <span className="text-gradient-cinematic">Creative Science.</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Deep-dive breakdowns on motion graphics, video retention psychology, paid media algorithms, AI automation, and brand scalability.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-rose-500 shadow-sm"
            />
          </div>
        </div>

        {/* Category Pills Bar matching exact requested categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {JOURNAL_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-rose-600 text-white font-bold shadow-md shadow-rose-600/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer rounded-3xl bg-white border border-slate-200 hover:border-rose-400 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold text-rose-300 border border-white/10 uppercase">
                      {article.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-0.5 rounded bg-black/70 text-[10px] font-mono text-zinc-300 border border-white/10 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <div className="text-[11px] font-mono text-slate-500 mb-2 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-rose-600 transition-colors mb-3 leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-slate-200"
                  />
                  <div className="text-left">
                    <span className="text-xs font-semibold text-slate-900 block">
                      {article.author.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block font-mono">
                      {article.author.role}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold text-rose-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </article>
          ))}
        </div>

        {/* Full Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
            <div className="absolute inset-0" onClick={() => setSelectedArticle(null)} />
            
            <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]">
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded bg-rose-50 text-rose-700 font-mono text-xs font-bold uppercase border border-rose-200">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    &bull; {selectedArticle.readTime}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-full bg-slate-200 hover:bg-rose-600 text-slate-700 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                  <img
                    src={selectedArticle.author.avatar}
                    alt={selectedArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">
                      {selectedArticle.author.name}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {selectedArticle.author.role} &bull; {selectedArticle.date}
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden aspect-video max-h-80 w-full mb-6">
                  <img
                    src={selectedArticle.coverImage}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {selectedArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-mono text-slate-600 border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
