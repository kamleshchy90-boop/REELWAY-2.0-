import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Tag, 
  Gift, 
  Check, 
  Flame, 
  Percent,
  Search,
  CheckCircle2
} from 'lucide-react';
import { FESTIVAL_OFFERS } from '../data/reelwayData';

interface FestivalOffersSectionProps {
  onClaimOffer: (offerName: string, discount: string) => void;
}

export const FestivalOffersSection: React.FC<FestivalOffersSectionProps> = ({ 
  onClaimOffer 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [claimedId, setClaimedId] = useState<string | null>(null);

  const filteredOffers = FESTIVAL_OFFERS.filter(offer => 
    offer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.festival.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.discount.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClaim = (offer: typeof FESTIVAL_OFFERS[0]) => {
    setClaimedId(offer.id);
    onClaimOffer(offer.name, offer.discount);
    setTimeout(() => {
      setClaimedId(null);
    }, 2500);
  };

  return (
    <div id="festival-offers" className="my-16 scroll-mt-24">
      {/* Container Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#11131f] via-[#0d0e17] to-[#090a0f] border-2 border-amber-500/30 shadow-2xl relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-600/10 blur-[140px] pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCLUSIVE INDIAN FESTIVAL OFFERS & DISCOUNTS</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Celebrate & Scale with <span className="text-gradient-cinematic">Festive Creative Discounts</span>
          </h3>

          <p className="text-xs sm:text-base text-zinc-300 font-light max-w-2xl mx-auto">
            Book your commercial video editing, 3D motion graphics, and paid ad sprints during festive windows to unlock guaranteed savings and priority turnaround slots.
          </p>

          {/* Search / Filter bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search festival offer (e.g. Diwali, Navratri, 15% OFF)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400/60 transition-colors"
            />
          </div>
        </div>

        {/* Festival Offers Interactive Table / Grid */}
        <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-white/[0.04] border-b border-white/10 text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
            <div className="col-span-6 flex items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-amber-400" />
              <span>Favorite Festival Offer</span>
            </div>
            <div className="col-span-3 text-center flex items-center justify-center gap-1.5">
              <Gift className="w-3.5 h-3.5 text-rose-400" />
              <span>Special Discount</span>
            </div>
            <div className="col-span-3 text-right">Action</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {filteredOffers.map((offer) => {
              const isClaimed = claimedId === offer.id;
              return (
                <div
                  key={offer.id}
                  className={`p-4 sm:p-5 transition-all flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center ${
                    offer.popular
                      ? 'bg-gradient-to-r from-amber-500/10 via-transparent to-rose-500/5 hover:bg-white/[0.04]'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Festival Offer Name & Details */}
                  <div className="md:col-span-6 flex items-center gap-3.5 w-full">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0 shadow-md">
                      <span>{offer.emoji}</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm sm:text-base font-display font-bold text-white group-hover:text-amber-300">
                          {offer.name}
                        </h4>
                        {offer.popular && (
                          <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase bg-amber-500 text-black rounded-full shadow-sm">
                            TOP FAVORITE
                          </span>
                        )}
                        <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-mono uppercase bg-white/5 text-zinc-400 rounded border border-white/5">
                          {offer.badge}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 font-light mt-0.5">
                        {offer.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="md:col-span-3 flex items-center justify-between md:justify-center w-full">
                    <span className="text-xs font-mono text-zinc-400 md:hidden">Discount:</span>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-mono font-extrabold shadow-sm">
                      <Percent className="w-3.5 h-3.5 text-rose-400" />
                      <span>{offer.discount}</span>
                    </div>
                  </div>

                  {/* Claim Button */}
                  <div className="md:col-span-3 flex items-center justify-end w-full">
                    <button
                      onClick={() => handleClaim(offer)}
                      className={`w-full md:w-auto px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                        isClaimed
                          ? 'bg-emerald-500 text-black shadow-emerald-500/30'
                          : 'bg-white/10 hover:bg-amber-500 hover:text-black text-white border border-white/15 hover:border-amber-400'
                      }`}
                    >
                      {isClaimed ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Applied!</span>
                        </>
                      ) : (
                        <>
                          <span>Claim Offer</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Festive Guarantee Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Valid across all short-form video, 3D motion, and paid ads sprint packages.</span>
          </div>
          <div className="text-amber-400 font-semibold">
            ✨ Discounts auto-applied upon booking consultation
          </div>
        </div>

      </div>
    </div>
  );
};
