import React from 'react';

// 1. Fins Solar Energy & EV Charger
export const FinsSolarLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Growth Chevron & Navy Pillar */}
    <g>
      {/* Orange Arrow Zigzag */}
      <path
        d="M20 60 L60 38 L95 72 L145 28 L145 68 L108 55 L78 88 L20 60 Z"
        fill="#F59E0B"
      />
      <path
        d="M20 60 L60 38 L95 72 L78 88 Z"
        fill="#F59E0B"
      />
      <path
        d="M20 60 L20 102 L52 118 L52 75 Z"
        fill="#D97706"
      />
      <path
        d="M100 70 L145 28 L145 70 Z"
        fill="#F59E0B"
      />
      {/* Dark Slate Pillar */}
      <path
        d="M95 72 L120 54 L120 120 L95 102 Z"
        fill="#1E293B"
      />
    </g>

    {/* Fins Text */}
    <text
      x="155"
      y="98"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="72"
      fontWeight="900"
      fill="#0f172a"
      letterSpacing="-2"
    >
      Fins
    </text>

    {/* Green Banner */}
    <rect x="10" y="122" width="380" height="32" rx="4" fill="#15803D" />
    <text
      x="200"
      y="143"
      fontFamily="monospace"
      fontSize="16"
      fontWeight="900"
      fill="#FFFFFF"
      letterSpacing="2.5"
      textAnchor="middle"
    >
      SOLAR ENERGY & EV CHARGER
    </text>
  </svg>
);

// 2. Green Energy Seva Private Limited
export const GreenEnergyLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 420 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Stepped Tree/Solar Pyramid */}
    <g fill="#22C55E">
      <polygon points="210,5 204,14 216,14" />
      <rect x="200" y="17" width="20" height="4" rx="1" />
      <rect x="194" y="24" width="32" height="4" rx="1" />
      <rect x="188" y="31" width="44" height="4" rx="1" />
      <rect x="182" y="38" width="56" height="4" rx="1" />
      <rect x="176" y="45" width="68" height="4" rx="1" />
      <rect x="170" y="52" width="80" height="4" rx="1" />
    </g>

    {/* GREEN ENERGY text */}
    <text
      x="18"
      y="105"
      fontFamily="system-ui, sans-serif"
      fontSize="44"
      fontWeight="900"
      fill="#22C55E"
      letterSpacing="1"
    >
      GREEN
    </text>
    <text
      x="215"
      y="105"
      fontFamily="system-ui, sans-serif"
      fontSize="44"
      fontWeight="900"
      fill="#FBBF24"
      letterSpacing="1"
    >
      ENERGY
    </text>

    {/* Subtitle with borders */}
    <line x1="10" y1="120" x2="410" y2="120" stroke="#16A34A" strokeWidth="2" />
    <text
      x="210"
      y="138"
      fontFamily="system-ui, sans-serif"
      fontSize="16"
      fontWeight="800"
      fill="#15803D"
      letterSpacing="7"
      textAnchor="middle"
    >
      SEVA PRIVATE LIMITED
    </text>
  </svg>
);

// 3. Dhiyo AI LABS
export const DhiyoAiLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 380 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 3D Glowing Cube & Flame */}
    <g transform="translate(10, 10)">
      {/* Flame */}
      <path
        d="M45 4 C40 18 30 28 30 42 C30 52 38 60 45 60 C52 60 60 52 60 42 C60 28 50 18 45 4 Z"
        fill="url(#flameGrad)"
      />
      <path
        d="M45 20 C42 28 36 34 36 44 C36 50 40 55 45 55 C50 55 54 50 54 44 C54 34 48 28 45 20 Z"
        fill="#FEF08A"
      />
      {/* Cube Base */}
      <polygon points="45,55 75,70 75,105 45,120 15,105 15,70" fill="#1E40AF" />
      <polygon points="45,55 75,70 45,85 15,70" fill="#3B82F6" />
      <polygon points="45,85 75,70 75,105 45,120" fill="#1D4ED8" />
      <polygon points="45,85 15,70 15,105 45,120" fill="#2563EB" />
      {/* Circuit sparks */}
      <circle cx="45" cy="85" r="2.5" fill="#FFFFFF" />
      <circle cx="30" cy="98" r="2" fill="#93C5FD" />
      <circle cx="60" cy="98" r="2" fill="#93C5FD" />
    </g>

    {/* Text Dhiyo AI */}
    <text
      x="105"
      y="78"
      fontFamily="system-ui, sans-serif"
      fontSize="52"
      fontWeight="900"
      fill="#0f172a"
    >
      Dhiyo AI
    </text>

    {/* Text LABS */}
    <text
      x="105"
      y="118"
      fontFamily="system-ui, sans-serif"
      fontSize="36"
      fontWeight="900"
      fill="url(#labsGrad)"
      letterSpacing="3"
    >
      LABS
    </text>

    <line x1="105" y1="86" x2="310" y2="86" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.6" />

    <defs>
      <linearGradient id="flameGrad" x1="45" y1="0" x2="45" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="60%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
      <linearGradient id="labsGrad" x1="105" y1="100" x2="250" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#FCD34D" />
      </linearGradient>
    </defs>
  </svg>
);

// 4. EASYSELL SERVICES
export const EasySellLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 450 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Yellow Arrowhead */}
    <polygon points="10,85 55,10 55,85" fill="#F59E0B" />
    
    {/* E bars & EASYSELL Text */}
    <rect x="58" y="10" width="38" height="18" fill="#0f172a" />
    <rect x="58" y="44" width="38" height="16" fill="#0f172a" />
    <rect x="58" y="73" width="38" height="18" fill="#0f172a" />

    <text
      x="102"
      y="88"
      fontFamily="system-ui, sans-serif"
      fontSize="72"
      fontWeight="900"
      fill="#0f172a"
      letterSpacing="1"
    >
      ASYSELL
    </text>

    {/* SERVICES */}
    <text
      x="275"
      y="125"
      fontFamily="system-ui, sans-serif"
      fontSize="24"
      fontWeight="900"
      fill="#F59E0B"
      letterSpacing="14"
      textAnchor="middle"
    >
      SERVICES
    </text>
  </svg>
);

// 5. DIGITAL WEALTH (Powered by Infibulls Solutions LLP)
export const DigitalWealthLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 440 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* D */}
    <text
      x="10"
      y="76"
      fontFamily="system-ui, sans-serif"
      fontSize="58"
      fontWeight="900"
      fill="#38BDF8"
    >
      D
    </text>

    {/* Growth Arrow as I */}
    <g>
      <polygon points="82,24 102,12 88,48 76,44" fill="#22C55E" />
      <path d="M76 44 L92 22 L72 78 L60 78 Z" fill="#22C55E" />
    </g>

    {/* GITAL */}
    <text
      x="96"
      y="76"
      fontFamily="system-ui, sans-serif"
      fontSize="58"
      fontWeight="900"
      fill="#38BDF8"
      letterSpacing="1"
    >
      GITAL
    </text>

    {/* WEALTH */}
    <text
      x="10"
      y="124"
      fontFamily="system-ui, sans-serif"
      fontSize="54"
      fontWeight="900"
      fill="#22C55E"
      letterSpacing="2"
    >
      WEALTH
    </text>

    {/* Subtitle with top rule */}
    <line x1="10" y1="135" x2="420" y2="135" stroke="#0284C7" strokeWidth="1.5" />
    <text
      x="215"
      y="152"
      fontFamily="monospace"
      fontSize="12"
      fontWeight="700"
      fill="#15803D"
      letterSpacing="2.5"
      textAnchor="middle"
    >
      POWERED BY INFIBULLS SOLUTIONS LLP
    </text>
  </svg>
);

// 6. NEWTECH Computer Education Center
export const NewtechLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 420 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Mortarboard + Book Center Icon */}
    <g transform="translate(170, 0)">
      {/* Mortarboard Cap */}
      <polygon points="40,2 75,15 40,28 5,15" fill="#3B82F6" />
      <rect x="25" y="24" width="30" height="8" rx="2" fill="#1D4ED8" />
      {/* Orange tassel */}
      <circle cx="15" cy="18" r="2.5" fill="#F59E0B" />
      <line x1="15" y1="18" x2="15" y2="28" stroke="#F59E0B" strokeWidth="1.5" />
      
      {/* Open Book */}
      <path d="M40 34 C25 30 10 32 0 38 L0 58 C10 52 25 50 40 54 Z" fill="#22C55E" />
      <path d="M40 34 C55 30 70 32 80 38 L80 58 C70 52 55 50 40 54 Z" fill="#22C55E" />
      <path d="M40 38 C28 34 14 36 6 40 L6 54 C14 50 28 48 40 51 Z" fill="#FFFFFF" />
      <path d="M40 38 C52 34 66 36 74 40 L74 54 C66 50 52 48 40 51 Z" fill="#FFFFFF" />
      
      {/* Stand Base */}
      <path d="M36 55 L44 55 L48 64 L32 64 Z" fill="#60A5FA" />
      <rect x="20" y="64" width="40" height="4" rx="1" fill="#3B82F6" />
    </g>

    {/* NEWTECH */}
    <text
      x="210"
      y="108"
      fontFamily="system-ui, sans-serif"
      fontSize="48"
      fontWeight="900"
      fill="#0f172a"
      letterSpacing="2"
      textAnchor="middle"
    >
      NEWTECH
    </text>

    {/* COMPUTER EDUCATION CENTER */}
    <text
      x="210"
      y="136"
      fontFamily="system-ui, sans-serif"
      fontSize="16"
      fontWeight="900"
      fill="#16A34A"
      letterSpacing="4"
      textAnchor="middle"
    >
      COMPUTER EDUCATION CENTER
    </text>

    {/* Gradient Underline */}
    <line x1="50" y1="146" x2="210" y2="146" stroke="#F59E0B" strokeWidth="2" />
    <line x1="210" y1="146" x2="370" y2="146" stroke="#22C55E" strokeWidth="2" />
  </svg>
);
