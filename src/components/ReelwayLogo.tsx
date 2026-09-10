import React from 'react';

interface ReelwayLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

export const ReelwayLogo: React.FC<ReelwayLogoProps> = ({
  size = 'md',
  animated = true,
  className = '',
  showSubtitle = false
}) => {
  // Height and scale calibrations
  const dimensions = {
    sm: { height: 28, textClass: 'text-base', waveHeight: 22 },
    md: { height: 38, textClass: 'text-xl', waveHeight: 32 },
    lg: { height: 48, textClass: 'text-2xl', waveHeight: 40 },
    xl: { height: 64, textClass: 'text-4xl', waveHeight: 56 }
  }[size];

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      
      {/* SVG Soundwave Logo + Wordmark */}
      <svg
        viewBox="0 0 460 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: dimensions.height, width: 'auto' }}
        className="overflow-visible"
        aria-label="REELWAY Logo"
      >
        <defs>
          <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FF1E27" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* ================= LEFT SOUNDWAVE FREQUENCY BARS ================= */}
        <g className={animated ? 'animate-pulse' : ''} filter="url(#glow-red)">
          {/* Bar 1 (Outermost left) */}
          <rect x="10" y="32" width="10" height="56" rx="5" fill="#FF1E27" />

          {/* Bar 2 */}
          <rect x="26" y="16" width="10" height="88" rx="5" fill="#FF1E27" />

          {/* Bar 3 */}
          <rect x="42" y="24" width="10" height="72" rx="5" fill="#FF1E27" />

          {/* Bar 4 (Tallest peak) */}
          <rect x="58" y="6" width="10" height="108" rx="5" fill="#FF1E27" />

          {/* Bar 5 */}
          <rect x="74" y="20" width="10" height="80" rx="5" fill="#FF1E27" />

          {/* Bar 6 (Split inner frequency dots/capsules) */}
          <rect x="90" y="28" width="10" height="20" rx="5" fill="#FF1E27" />
          <rect x="90" y="72" width="10" height="20" rx="5" fill="#FF1E27" />
        </g>

        {/* ================= CENTER WORDMARK: REEL (WHITE) + WAY (RED) ================= */}
        <g style={{ fontFamily: 'monospace, "JetBrains Mono", Courier, sans-serif' }}>
          <text
            x="230"
            y="76"
            fontSize="52"
            fontWeight="900"
            letterSpacing="2"
            textAnchor="middle"
          >
            <tspan fill="#FFFFFF" style={{ fontFamily: 'monospace' }}>REEL</tspan>
            <tspan fill="#FF1E27" style={{ fontFamily: 'monospace' }}>WAY</tspan>
          </text>
        </g>

        {/* ================= RIGHT SOUNDWAVE FREQUENCY BARS ================= */}
        <g className={animated ? 'animate-pulse' : ''} filter="url(#glow-red)">
          {/* Bar 1 (Split inner frequency dots/capsules) */}
          <rect x="360" y="28" width="10" height="20" rx="5" fill="#FF1E27" />
          <rect x="360" y="72" width="10" height="20" rx="5" fill="#FF1E27" />

          {/* Bar 2 (Tallest right peak) */}
          <rect x="376" y="6" width="10" height="108" rx="5" fill="#FF1E27" />

          {/* Bar 3 */}
          <rect x="392" y="20" width="10" height="80" rx="5" fill="#FF1E27" />

          {/* Bar 4 */}
          <rect x="408" y="16" width="10" height="88" rx="5" fill="#FF1E27" />

          {/* Bar 5 */}
          <rect x="424" y="24" width="10" height="72" rx="5" fill="#FF1E27" />

          {/* Bar 6 (Outermost right) */}
          <rect x="440" y="32" width="10" height="56" rx="5" fill="#FF1E27" />
        </g>
      </svg>

      {showSubtitle && (
        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase hidden sm:inline-block border-l border-white/10 pl-3">
          Creative + Growth
        </span>
      )}
    </div>
  );
};
