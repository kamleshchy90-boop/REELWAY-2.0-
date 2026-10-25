import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Check, 
  CheckCircle2, 
  Copy, 
  Download, 
  ExternalLink, 
  FileText, 
  Lock, 
  MessageCircle, 
  Phone, 
  Printer, 
  QrCode, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Building, 
  Smartphone, 
  Wallet,
  AlertCircle
} from 'lucide-react';
import { SocialMediaPackage, SOCIAL_MEDIA_PACKAGES } from '../data/socialMediaPackagesData';

interface PaymentReceivedPageProps {
  packageData: SocialMediaPackage | null;
  onBack: () => void;
  onGoToSpecs?: (pkg: SocialMediaPackage) => void;
}

export const PaymentReceivedPage: React.FC<PaymentReceivedPageProps> = ({
  packageData,
  onBack,
  onGoToSpecs
}) => {
  // Default to package 1 or passed package
  const [selectedPkg, setSelectedPkg] = useState<SocialMediaPackage>(
    packageData || SOCIAL_MEDIA_PACKAGES[0]
  );

  // Form states
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientBrand, setClientBrand] = useState('');
  const [utrNumber, setUtrNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'gpay' | 'phonepe' | 'bank'>('upi');
  
  // Payment Received Confirmation state
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);

  const REELWAY_NUMBER = '+91 90843 24136';
  const REELWAY_RAW_NUMBER = '919084324136';
  const REELWAY_UPI_ID = '9084324136@upi';

  const receiptNumber = `RW-INV-${selectedPkg.number}${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const handleCopy = (text: string, type: 'upi' | 'number') => {
    navigator.clipboard.writeText(text);
    if (type === 'upi') {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    } else {
      setCopiedNumber(true);
      setTimeout(() => setCopiedNumber(false), 2000);
    }
  };

  const handleConfirmPaymentReceived = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setIsPaymentConfirmed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppNotify = () => {
    const text = `*PAYMENT CONFIRMATION & ONBOARDING - REELWAY*
• Status: Payment Transferred / Received
• Package: ${selectedPkg.fullName} (${selectedPkg.price}/mo)
• Amount: ${selectedPkg.price}
• Client: ${clientName || 'Partner Brand'}
• Brand/Handle: ${clientBrand || 'N/A'}
• Phone: ${clientPhone || 'N/A'}
• UTR / Ref No: ${utrNumber || 'Attached via screenshot'}
• Official Reelway No: ${REELWAY_NUMBER}

Please verify our transaction and initiate the creative onboarding protocol!`;

    window.open(`https://wa.me/${REELWAY_RAW_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Action Bar */}
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
            <span className="text-xs font-mono text-slate-500">Official Billing</span>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-mono font-bold text-rose-600">
              {isPaymentConfirmed ? 'Payment Received & Confirmed' : 'Payment Portal'}
            </span>
          </div>

          {/* Reelway Official Verified Contact Badge */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${REELWAY_RAW_NUMBER}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono font-bold hover:bg-rose-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-600" />
              <span>REELWAY: {REELWAY_NUMBER}</span>
            </a>
            <a
              href={`https://wa.me/${REELWAY_RAW_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* PAYMENT CONFIRMED / RECEIVED VIEW */}
        {isPaymentConfirmed ? (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
            
            {/* Success Celebration Card */}
            <div className="rounded-3xl bg-white border-2 border-emerald-500 p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[130px] pointer-events-none" />
              
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-inner ring-8 ring-emerald-50">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>OFFICIAL PAYMENT RECEIVED & VERIFIED</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-3">
                Payment Received & Slot Confirmed!
              </h1>
              
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
                Thank you, <strong className="text-slate-900">{clientName || 'Partner'}</strong>. Your payment for <strong className="text-rose-600">{selectedPkg.fullName} ({selectedPkg.price}/month)</strong> has been logged into REELWAY Creative Studio.
              </p>

              {/* Instant WhatsApp Handshake Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <button
                  onClick={handleWhatsAppNotify}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation to REELWAY (+91 90843 24136)</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt</span>
                </button>
              </div>
            </div>

            {/* Official Digital Tax Invoice / Receipt */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl print:shadow-none print:border-none">
              
              {/* Receipt Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-slate-200 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-rose-600" />
                    <span className="font-display font-black text-2xl tracking-wider text-slate-900">
                      REELWAY
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    High-Performance Motion Graphics, Video Production & Digital Marketing
                  </p>
                  <p className="text-xs font-mono text-slate-600 mt-1">
                    Official REELWAY Helpline: <strong className="text-slate-900">{REELWAY_NUMBER}</strong>
                  </p>
                </div>

                <div className="sm:text-right">
                  <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 font-mono text-xs font-bold border border-emerald-200 uppercase">
                    Status: PAID IN FULL
                  </span>
                  <div className="mt-2 text-xs font-mono text-slate-600">
                    Invoice: <span className="font-bold text-slate-900">{receiptNumber}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    Date: {currentDate}
                  </div>
                </div>
              </div>

              {/* Bill To & Package Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-b border-slate-200 text-xs">
                <div>
                  <h4 className="font-mono font-bold uppercase text-slate-400 mb-2">
                    Billed To:
                  </h4>
                  <div className="font-bold text-base text-slate-900">{clientName || 'Client Partner'}</div>
                  {clientBrand && <div className="text-slate-600">{clientBrand}</div>}
                  <div className="text-slate-600 font-mono">{clientPhone}</div>
                  <div className="text-slate-500 mt-2">
                    Transaction / UTR: <span className="font-mono font-semibold text-slate-800">{utrNumber || 'Direct Payment'}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono font-bold uppercase text-slate-400 mb-2">
                    Service Plan & SLA:
                  </h4>
                  <div className="font-bold text-base text-slate-900">{selectedPkg.fullName}</div>
                  <div className="text-slate-600 mt-1">{selectedPkg.idealFor}</div>
                  <div className="text-slate-500 mt-1">Billing Frequency: Monthly Retainer</div>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="py-6 border-b border-slate-200">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-mono">
                      <th className="py-3">Description</th>
                      <th className="py-3">Turnaround SLA</th>
                      <th className="py-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-4">
                        <div className="font-bold text-slate-900">{selectedPkg.fullName}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {selectedPkg.features.join(' • ')}
                        </div>
                      </td>
                      <td className="py-4 font-mono text-slate-600">48-72h Active Queue</td>
                      <td className="py-4 font-mono font-bold text-slate-900 text-right">{selectedPkg.price}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-slate-200 font-bold text-sm">
                      <td colSpan={2} className="pt-4 text-slate-900">Total Received:</td>
                      <td className="pt-4 font-mono text-rose-600 text-right text-base">{selectedPkg.price}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Next Steps for Onboarding */}
              <div className="pt-8">
                <h4 className="font-display font-bold text-sm text-slate-900 mb-3">
                  What Happens Next (Onboarding Roadmap):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-rose-600 block mb-1">Step 1 &bull; 0–2 Hours</span>
                    <span className="text-slate-700">Creative Director contact via WhatsApp (+91 90843 24136) to set up brand assets folder.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-rose-600 block mb-1">Step 2 &bull; 24 Hours</span>
                    <span className="text-slate-700">Scriptwriting, moodboard approval, and first batch of reels into active production.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-rose-600 block mb-1">Step 3 &bull; 48–72 Hours</span>
                    <span className="text-slate-700">First cuts delivered in 4K with audio sync, captions, and kinetic animation.</span>
                  </div>
                </div>
              </div>

              {/* Footer Stamp & Support */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <div>
                  Official Receipt Verified by REELWAY Accounting &bull; Support: <strong className="text-slate-900">{REELWAY_NUMBER}</strong>
                </div>
                <button
                  onClick={() => setIsPaymentConfirmed(false)}
                  className="text-xs font-mono text-slate-500 hover:text-slate-900 underline cursor-pointer"
                >
                  Edit Payment Form
                </button>
              </div>

            </div>

          </div>
        ) : (
          /* PAYMENT SUBMISSION & DETAILS VIEW */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 7 Cols: Payment Methods (QR Code, UPI, REELWAY Number) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md relative overflow-hidden">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold mb-3">
                  <Lock className="w-3.5 h-3.5" />
                  <span>SECURE DIRECT PAYMENT GATEWAY</span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mb-2">
                  Complete Payment for {selectedPkg.name}
                </h1>
                
                <p className="text-xs sm:text-sm text-slate-600">
                  Transfer via UPI, Google Pay, PhonePe, or Bank NEFT directly to the verified REELWAY business account.
                </p>

                {/* Package Selector Dropdown */}
                <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">
                      Selected Plan:
                    </label>
                    <select
                      value={selectedPkg.id}
                      onChange={(e) => {
                        const pkg = SOCIAL_MEDIA_PACKAGES.find(p => p.id === e.target.value);
                        if (pkg) setSelectedPkg(pkg);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 font-display font-bold text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-rose-500"
                    >
                      {SOCIAL_MEDIA_PACKAGES.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.fullName} — {p.price}/mo
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Payable Now
                    </span>
                    <span className="text-2xl sm:text-3xl font-display font-black text-rose-600 font-mono-data">
                      {selectedPkg.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Official Reelway Number & UPI Quick Pay Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-900">
                        Official REELWAY Number & UPI ID
                      </h3>
                      <p className="text-xs text-slate-500 font-mono">
                        Instant payment via Google Pay, PhonePe, Paytm, or BHIM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Verified REELWAY Phone Number */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">
                        Official REELWAY Payment / WhatsApp Number
                      </span>
                      <span className="text-base sm:text-lg font-mono font-bold text-slate-900">
                        {REELWAY_NUMBER}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(REELWAY_NUMBER, 'number')}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-xs font-mono font-semibold text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                    >
                      {copiedNumber ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedNumber ? 'Copied!' : 'Copy Number'}</span>
                    </button>
                  </div>

                  {/* Verified REELWAY UPI ID */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">
                        Official REELWAY VPA / UPI ID
                      </span>
                      <span className="text-base sm:text-lg font-mono font-bold text-rose-600">
                        {REELWAY_UPI_ID}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(REELWAY_UPI_ID, 'upi')}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-xs font-mono font-semibold text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                    >
                      {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedUpi ? 'Copied!' : 'Copy UPI'}</span>
                    </button>
                  </div>
                </div>

                {/* QR Code Graphic Box */}
                <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <span className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-400 font-mono text-[10px] uppercase font-bold border border-rose-500/30">
                      Scan & Pay Any UPI App
                    </span>
                    <h4 className="text-lg font-display font-bold text-white mt-2 mb-1">
                      Fast UPI QR Payment
                    </h4>
                    <p className="text-xs text-slate-400 max-w-xs">
                      Scan with Google Pay, PhonePe, Paytm, or Cred. Amount payable is <strong>{selectedPkg.price}</strong>.
                    </p>
                    <div className="mt-3 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verified Merchant: REELWAY Creative Studio</span>
                    </div>
                  </div>

                  {/* Clean Mock QR Code Visual */}
                  <div className="p-3 bg-white rounded-2xl shrink-0 shadow-lg flex flex-col items-center">
                    <div className="w-36 h-36 bg-slate-950 rounded-xl p-2 flex items-center justify-center relative overflow-hidden">
                      {/* Stylized QR Code SVG */}
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                        <rect x="0" y="0" width="30" height="30" fill="white" />
                        <rect x="5" y="5" width="20" height="20" fill="black" />
                        <rect x="10" y="10" width="10" height="10" fill="white" />
                        
                        <rect x="70" y="0" width="30" height="30" fill="white" />
                        <rect x="75" y="5" width="20" height="20" fill="black" />
                        <rect x="80" y="10" width="10" height="10" fill="white" />

                        <rect x="0" y="70" width="30" height="30" fill="white" />
                        <rect x="5" y="75" width="20" height="20" fill="black" />
                        <rect x="10" y="80" width="10" height="10" fill="white" />

                        <rect x="40" y="10" width="10" height="15" fill="white" />
                        <rect x="55" y="5" width="10" height="20" fill="white" />
                        <rect x="35" y="35" width="30" height="30" fill="white" />
                        <rect x="45" y="45" width="10" height="10" fill="black" />
                        <rect x="15" y="40" width="10" height="20" fill="white" />
                        <rect x="75" y="40" width="15" height="15" fill="white" />
                        <rect x="40" y="75" width="25" height="10" fill="white" />
                        <rect x="75" y="70" width="20" height="20" fill="white" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center font-black text-[9px] shadow-md border-2 border-white">
                          RW
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-900 font-bold mt-1.5">
                      {selectedPkg.price} &bull; REELWAY
                    </span>
                  </div>
                </div>

              </div>

              {/* NEFT / Bank Account Details Accordion */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <Building className="w-4 h-4 text-slate-600" />
                  <span className="font-display font-bold text-slate-900">
                    Direct Bank Transfer (NEFT / IMPS / RTGS)
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 font-mono text-[11px] bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 block">Beneficiary Name:</span>
                    <strong className="text-slate-900">REELWAY CREATIVE STUDIO</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Bank Helpline:</span>
                    <strong className="text-slate-900">{REELWAY_NUMBER}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Account Type:</span>
                    <strong className="text-slate-900">Current Business Account</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Payment Purpose:</span>
                    <strong className="text-slate-900">{selectedPkg.name} Retainer</strong>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 5 Cols: "Payment Received" Form & Verification */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl sticky top-28">
                
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    Payment Received Form
                  </h3>
                </div>
                
                <p className="text-xs text-slate-500 mb-6">
                  Already transferred or paying now? Submit your details to generate your official receipt and trigger immediate onboarding.
                </p>

                <form onSubmit={handleConfirmPaymentReceived} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">
                      Your Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">
                      Brand / Business Name
                    </label>
                    <input
                      type="text"
                      value={clientBrand}
                      onChange={(e) => setClientBrand(e.target.value)}
                      placeholder="e.g. Sharma Fashion or Acme Inc."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">
                      UPI UTR / Bank Reference Number
                    </label>
                    <input
                      type="text"
                      value={utrNumber}
                      onChange={(e) => setUtrNumber(e.target.value)}
                      placeholder="e.g. 423984029342 (or Screenshot ref)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-500 font-mono"
                    />
                  </div>

                  {/* Summary Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center justify-between text-slate-600 mb-1">
                      <span>Package:</span>
                      <strong className="text-slate-900">{selectedPkg.fullName}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-600 mb-1">
                      <span>Amount Received:</span>
                      <strong className="text-rose-600 font-mono font-bold">{selectedPkg.price}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Verified Reelway Contact:</span>
                      <strong className="text-slate-900 font-mono">{REELWAY_NUMBER}</strong>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-display font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm Payment Received & Get Receipt</span>
                  </button>

                  {/* Direct WhatsApp Callout */}
                  <button
                    type="button"
                    onClick={handleWhatsAppNotify}
                    className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Send Payment Slip via WhatsApp</span>
                  </button>
                </form>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
