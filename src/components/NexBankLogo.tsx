import React from 'react';

export interface NexBankLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'symbol' | 'card' | 'footer';
  showBadge?: boolean;
  showTagline?: boolean;
  className?: string;
  badgeText?: string;
  onClick?: () => void;
  inverted?: boolean;
}

export const NexBankLogo: React.FC<NexBankLogoProps> = ({
  size = 'md',
  variant = 'full',
  showBadge = true,
  showTagline = false,
  className = '',
  badgeText = 'PREMIER',
  onClick,
  inverted = false
}) => {
  // Sizing mappings
  const emblemSizes = {
    xs: 'w-7 h-7 rounded-lg p-0.5',
    sm: 'w-8 h-8 rounded-lg p-0.5',
    md: 'w-11 h-11 rounded-xl p-0.5',
    lg: 'w-13 h-13 sm:w-14 sm:h-14 rounded-2xl p-0.5',
    xl: 'w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-1'
  };

  const textSizes = {
    xs: 'text-base',
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const badgeSizes = {
    xs: 'text-[8px] px-1 py-0.2',
    sm: 'text-[9px] px-1.5 py-0.5',
    md: 'text-[10px] px-2 py-0.5',
    lg: 'text-xs px-2.5 py-1',
    xl: 'text-xs px-3 py-1'
  };

  // Standalone vector symbol of NexBank
  const Emblem = (
    <div
      className={`relative ${emblemSizes[size]} bg-gradient-to-tr from-[#97144d] via-[#c52e69] to-amber-400 shadow-md shadow-[#97144d]/25 group-hover:shadow-[#97144d]/40 group-hover:scale-105 transition-all duration-300 flex items-center justify-center shrink-0`}
    >
      <div className="w-full h-full bg-white dark:bg-[#180a14] rounded-[inherit] flex items-center justify-center relative overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          className="w-[82%] h-[82%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Deep Axis Burgundy Gradient */}
            <linearGradient id="nbLogoBurgundy" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#6d0b36" />
              <stop offset="50%" stop-color="#97144d" />
              <stop offset="100%" stop-color="#b81b60" />
            </linearGradient>

            {/* Ruby / Crimson Dynamic Velocity Ribbon */}
            <linearGradient id="nbLogoRuby" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#e11d48" />
              <stop offset="60%" stop-color="#be123c" />
              <stop offset="100%" stop-color="#881337" />
            </linearGradient>

            {/* 24K Sovereign Gold Gradient */}
            <linearGradient id="nbLogoGold" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#b45309" />
              <stop offset="40%" stop-color="#d97706" />
              <stop offset="80%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#fef08a" />
            </linearGradient>

            {/* Specular Highlight Sheen */}
            <linearGradient id="nbLogoSpecular" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.6" />
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
            </linearGradient>
          </defs>

          {/* Left Foundation Pillar (Rock-Solid Trust & Security) */}
          <path
            d="M 18 80 L 18 32 C 18 27 21 23 26 21 L 34 18 C 36 17 38 18.5 38 21 L 38 71 C 38 76 35 80 30 82 L 22 85 C 20 86 18 84.5 18 82 Z"
            fill="url(#nbLogoBurgundy)"
          />
          <path d="M 20 33 L 20 78 L 24 76 L 24 31 Z" fill="url(#nbLogoSpecular)" opacity="0.4" />

          {/* Dynamic Diagonal Nexus Bridge (Cross-border Speed & Connectivity) */}
          <path
            d="M 32 23 L 68 67 C 71 70 70 75 66 78 L 58 84 C 55 86 51 85 48 82 L 14 40 C 11 37 12 32 16 29 L 24 23 C 27 21 30 21 32 23 Z"
            fill="url(#nbLogoRuby)"
          />

          {/* Right Rising Pillar & Crown Wing (Wealth Creation & Innovation) */}
          <path
            d="M 62 79 C 62 82 64 83 66 82 L 74 79 C 79 77 82 73 82 68 L 82 29 C 82 24 79 20 74 18 L 66 15 C 64 14 62 16 62 18 L 62 79 Z"
            fill="url(#nbLogoGold)"
          />
          <path d="M 76 21 L 76 66 L 80 64 L 80 23 Z" fill="url(#nbLogoSpecular)" opacity="0.5" />

          {/* Chevron Crown Crest (Homage to Axis Bank's Triangular Apex) */}
          <path d="M 50 12 L 62 26 L 50 40 L 38 26 Z" fill="url(#nbLogoGold)" opacity="0.95" />
          <path d="M 50 17 L 57 26 L 50 35 L 43 26 Z" fill="#ffffff" opacity="0.85" />
          <circle cx="50" cy="26" r="2.5" fill="#97144d" />
        </svg>
      </div>
    </div>
  );

  // If only symbol is requested
  if (variant === 'symbol') {
    return (
      <div onClick={onClick} className={`inline-flex items-center ${className}`}>
        {Emblem}
      </div>
    );
  }

  // Card header variant (streamlined for bank cards)
  if (variant === 'card') {
    return (
      <div onClick={onClick} className={`flex items-center gap-2.5 select-none ${className}`}>
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-200 text-[#730d3a] p-0.5 shadow-md flex items-center justify-center shrink-0">
          <div className="w-full h-full bg-[#590b2d] rounded-[10px] flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-5 h-5" fill="none">
              <path d="M 18 80 L 18 32 C 18 27 21 23 26 21 L 34 18 C 36 17 38 18.5 38 21 L 38 71 C 38 76 35 80 30 82 L 22 85 C 20 86 18 84.5 18 82 Z" fill="#facc15" />
              <path d="M 32 23 L 68 67 C 71 70 70 75 66 78 L 58 84 C 55 86 51 85 48 82 L 14 40 C 11 37 12 32 16 29 L 24 23 C 27 21 30 21 32 23 Z" fill="#f43f5e" />
              <path d="M 62 79 C 62 82 64 83 66 82 L 74 79 C 79 77 82 73 82 68 L 82 29 C 82 24 79 20 74 18 L 66 15 C 64 14 62 16 62 18 L 62 79 Z" fill="#fef08a" />
              <circle cx="50" cy="26" r="3" fill="#fde047" />
            </svg>
          </div>
        </div>
        <div>
          <div className="text-xs sm:text-sm font-black tracking-wider flex items-center gap-1.5 text-white">
            <span>NEXBANK</span>
            {showBadge && (
              <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {badgeText}
              </span>
            )}
          </div>
          <span className="text-[9px] uppercase tracking-widest text-pink-100/70 block font-semibold">
            Private Client
          </span>
        </div>
      </div>
    );
  }

  // Full and Compact variants
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3.5 select-none group ${className}`}
    >
      {Emblem}

      <div>
        <div className="flex items-center gap-2">
          <span
            className={`${textSizes[size]} font-black tracking-tight transition-colors ${
              inverted
                ? 'text-white group-hover:text-amber-300'
                : 'text-slate-900 dark:text-white group-hover:text-[#97144d] dark:group-hover:text-amber-300'
            }`}
          >
            Nex<span className="text-[#97144d] dark:text-[#f43f5e]">Bank</span>
          </span>

          {showBadge && (
            <span
              className={`${badgeSizes[size]} uppercase font-extrabold rounded bg-[#97144d] text-white tracking-wider shadow-sm flex items-center gap-1 border border-[#97144d]/30`}
            >
              <span className="w-1 h-1 rounded-full bg-amber-300 animate-pulse" />
              <span>{badgeText}</span>
            </span>
          )}
        </div>

        {showTagline && (
          <p
            className={`text-[11px] font-medium tracking-wide hidden sm:block ${
              inverted ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            Modern Banking for a Brighter Tomorrow
          </p>
        )}
      </div>
    </div>
  );
};

export default NexBankLogo;
