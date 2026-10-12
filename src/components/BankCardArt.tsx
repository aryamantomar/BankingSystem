import React, { useState } from 'react';
import { Crown, Wifi, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';
import { NexBankLogo } from './NexBankLogo';

interface BankCardArtProps {
  cardNumber?: string;
  cardHolder?: string;
  expiry?: string;
  cvv?: string;
  balance?: number;
  variant?: 'privilege' | 'obsidian' | 'gold';
  isFrozen?: boolean;
  showDetailsToggle?: boolean;
  className?: string;
}

export const BankCardArt: React.FC<BankCardArtProps> = ({
  cardNumber = '4111 8920 4019 9081',
  cardHolder = 'ARYAMAN TOMAR',
  expiry = '10/31',
  cvv = '789',
  balance,
  variant = 'privilege',
  isFrozen = false,
  showDetailsToggle = true,
  className = '',
}) => {
  const [showNumber, setShowNumber] = useState(false);
  const [activeTheme, setActiveTheme] = useState<'privilege' | 'obsidian' | 'gold'>(variant);

  // Background style presets
  const themeStyles = {
    privilege: {
      bg: 'bg-gradient-to-br from-[#730d3a] via-[#97144d] to-[#420621]',
      border: 'border-amber-400/40',
      foil: 'stroke-amber-300/30',
      flowerStroke: 'stroke-amber-300/40',
      flowerFill: 'fill-amber-300/10',
      textAccent: 'text-amber-300',
      chipGlow: 'from-amber-200 via-amber-400 to-amber-600',
      label: 'Privilege Metal Edition',
    },
    obsidian: {
      bg: 'bg-gradient-to-br from-[#1c1822] via-[#2f1124] to-[#0f0b12]',
      border: 'border-[#ea7ea6]/40',
      foil: 'stroke-rose-300/25',
      flowerStroke: 'stroke-rose-300/35',
      flowerFill: 'fill-rose-300/10',
      textAccent: 'text-rose-300',
      chipGlow: 'from-slate-200 via-rose-300 to-slate-400',
      label: 'Obsidian Titanium',
    },
    gold: {
      bg: 'bg-gradient-to-br from-[#856514] via-[#b88c28] to-[#594208]',
      border: 'border-amber-200/50',
      foil: 'stroke-white/35',
      flowerStroke: 'stroke-amber-100/45',
      flowerFill: 'fill-amber-100/15',
      textAccent: 'text-amber-100',
      chipGlow: 'from-yellow-100 via-amber-300 to-yellow-600',
      label: 'Sovereign Gold Reserve',
    },
  };

  const currentTheme = themeStyles[activeTheme];

  const formattedCardNumber = showNumber
    ? cardNumber
    : `${cardNumber.slice(0, 4)} •••• •••• ${cardNumber.replace(/\s/g, '').slice(-4)}`;

  return (
    <div className={`relative select-none ${className}`}>
      {/* 3D Physical Bank Card Wrapper */}
      <div
        className={`relative aspect-[1.586/1] w-full rounded-2xl sm:rounded-3xl p-5 sm:p-7 ${currentTheme.bg} border ${currentTheme.border} text-white shadow-[0_25px_50px_-12px_rgba(151,20,77,0.35)] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-10px_rgba(151,20,77,0.45)] group`}
      >
        {/* Guilloche & Ornate Flower Art Watermark (SVG Art) */}
        <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen">
          <svg className="w-full h-full" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Concentric Guilloche Security Geometry */}
            <g className={currentTheme.foil} strokeWidth="0.7">
              <circle cx="120" cy="125" r="40" strokeDasharray="3 3" />
              <circle cx="120" cy="125" r="75" />
              <circle cx="120" cy="125" r="110" strokeDasharray="4 2" />
              <path d="M 0 125 C 60 40, 120 210, 180 125 C 240 40, 300 210, 360 125" opacity="0.4" />
            </g>

            {/* EXPANDED LUXURY FLOWER ARTWORK (Botanical Lotus & Blossom Engraving) */}
            <g transform="translate(290, 125)" className={`${currentTheme.flowerStroke} ${currentTheme.flowerFill}`}>
              {/* Central Stamen Core */}
              <circle cx="0" cy="0" r="14" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="7" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="2.5" fill="currentColor" />
              {/* Radiating Flower Pistils */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line
                  key={`pistil-${deg}`}
                  x1="0"
                  y1="0"
                  x2={11 * Math.cos((deg * Math.PI) / 180)}
                  y2={11 * Math.sin((deg * Math.PI) / 180)}
                  strokeWidth="0.8"
                />
              ))}

              {/* Inner Petal Tier (8 Petals) */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <g key={`inner-petal-${deg}`} transform={`rotate(${deg})`}>
                  <path
                    d="M 0 -14 C -10 -28, -8 -42, 0 -52 C 8 -42, 10 -28, 0 -14 Z"
                    strokeWidth="1.1"
                  />
                  {/* Petal Central Vein */}
                  <line x1="0" y1="-16" x2="0" y2="-46" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
                </g>
              ))}

              {/* Outer Grand Petal Tier (8 Interleaved Blossom Petals) */}
              {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => (
                <g key={`outer-petal-${deg}`} transform={`rotate(${deg})`}>
                  <path
                    d="M 0 -14 C -16 -35, -14 -60, 0 -76 C 14 -60, 16 -35, 0 -14 Z"
                    strokeWidth="1.2"
                  />
                  <line x1="0" y1="-18" x2="0" y2="-68" strokeWidth="0.7" />
                  <path d="M -4 -42 Q 0 -50 4 -42" strokeWidth="0.6" fill="none" />
                </g>
              ))}

              {/* Graceful Floral Vines & Tendril Art */}
              <path
                d="M -30 20 C -60 50, -100 30, -140 60 C -170 85, -200 70, -230 95"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M -25 -25 C -55 -60, -90 -45, -130 -70 C -160 -90, -190 -80, -220 -100"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
              {/* Ornamental Floating Petal Accents */}
              <path d="M -80 35 C -90 30, -95 40, -85 45 C -75 42, -75 35, -80 35 Z" strokeWidth="0.8" />
              <path d="M -150 45 C -160 40, -165 50, -155 55 C -145 52, -145 45, -150 45 Z" strokeWidth="0.8" />
              <path d="M -60 -45 C -70 -50, -75 -40, -65 -35 C -55 -38, -55 -45, -60 -45 Z" strokeWidth="0.8" />
            </g>
          </svg>
        </div>

        {/* Dynamic Metallic Specular Glare / Hologram Sheen */}
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-45 pointer-events-none group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

        {/* Card Header: NexBank & Privilege Badge */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <NexBankLogo variant="card" size="xs" badgeText="PREMIER" />
          </div>

          <div className="flex items-center gap-2 text-amber-200/90">
            {/* Contactless RFID Waves Art */}
            <Wifi className="w-5 h-5 -rotate-90 text-amber-200/80" />
            <Crown className="w-4 h-4 text-amber-300" />
          </div>
        </div>

        {/* Middle Section: Realistic Golden EMV Chip & Hologram */}
        <div className="relative z-10 mt-4 sm:mt-6 flex items-center justify-between">
          {/* Realistic EMV Smart Chip */}
          <div className="relative w-11 h-8 sm:w-13 sm:h-9 rounded-md bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-[1.5px] shadow-md border border-amber-300/70">
            <div className="w-full h-full rounded-[4px] bg-gradient-to-tr from-amber-300 via-amber-400 to-yellow-300 relative overflow-hidden flex items-center justify-center">
              {/* Chip contact traces */}
              <div className="absolute inset-x-0 h-[1px] bg-amber-800/40 top-1/3"></div>
              <div className="absolute inset-x-0 h-[1px] bg-amber-800/40 bottom-1/3"></div>
              <div className="absolute inset-y-0 w-[1px] bg-amber-800/40 left-1/3"></div>
              <div className="absolute inset-y-0 w-[1px] bg-amber-800/40 right-1/3"></div>
              <div className="w-3.5 h-3.5 rounded-sm border border-amber-800/50"></div>
            </div>
          </div>

          {/* Optional balance display */}
          {balance !== undefined && (
            <div className="text-right">
              <span className="text-[9px] sm:text-[10px] text-pink-200/80 uppercase font-semibold block">Available Funds</span>
              <span className="text-lg sm:text-2xl font-black font-mono tracking-tight text-white drop-shadow">
                ${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          )}
        </div>

        {/* Embossed Card Number */}
        <div className="relative z-10 mt-4 sm:mt-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-base sm:text-xl font-black tracking-[0.18em] sm:tracking-[0.22em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              {formattedCardNumber}
            </span>
            {showDetailsToggle && (
              <button
                type="button"
                onClick={() => setShowNumber(!showNumber)}
                className="p-1 rounded-lg hover:bg-white/10 text-pink-200 hover:text-white transition-colors"
                title={showNumber ? 'Hide Card Number' : 'Show Card Number'}
              >
                {showNumber ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>

        {/* Card Footer: Cardholder Name, Expiry & Master/Visa Holographic Emblem */}
        <div className="relative z-10 mt-3 sm:mt-4 flex items-end justify-between text-xs">
          <div>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-pink-200/70 block font-semibold">Cardholder</span>
            <span className="font-black text-white tracking-wider text-xs sm:text-sm drop-shadow uppercase font-mono">
              {cardHolder}
            </span>
          </div>

          <div className="text-center">
            <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-pink-200/70 block font-semibold">Valid Thru</span>
            <span className="font-mono font-black text-amber-200 text-xs sm:text-sm drop-shadow">
              {expiry}
            </span>
          </div>

          {/* Hologram Card Association Emblem */}
          <div className="relative flex items-center">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-rose-500/90 mix-blend-screen shadow-inner"></div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-400/90 mix-blend-screen -ml-3 shadow-inner"></div>
          </div>
        </div>

        {/* Frozen State Overlay */}
        {isFrozen && (
          <div className="absolute inset-0 z-20 bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <Lock className="w-6 h-6" />
            </div>
            <span className="text-sm font-black text-rose-300 uppercase tracking-widest">Card Temporarily Locked</span>
            <span className="text-[11px] text-slate-400">Unfreeze anytime in your security settings</span>
          </div>
        )}
      </div>

      {/* Card Theme Switcher Pills */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 px-1">
        <span className="font-medium flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#97144d]" />
          Card Edition:
        </span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTheme('privilege')}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${
              activeTheme === 'privilege'
                ? 'bg-[#97144d] text-white shadow-sm'
                : 'bg-white dark:bg-[#1a0b15] border border-slate-200 dark:border-[#97144d]/30 text-slate-600 dark:text-slate-300 hover:border-[#97144d]/40'
            }`}
          >
            Privilege
          </button>
          <button
            type="button"
            onClick={() => setActiveTheme('obsidian')}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${
              activeTheme === 'obsidian'
                ? 'bg-slate-900 dark:bg-rose-950 dark:border dark:border-[#97144d] text-white shadow-sm'
                : 'bg-white dark:bg-[#1a0b15] border border-slate-200 dark:border-[#97144d]/30 text-slate-600 dark:text-slate-300 hover:border-[#97144d]/40'
            }`}
          >
            Obsidian
          </button>
          <button
            type="button"
            onClick={() => setActiveTheme('gold')}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${
              activeTheme === 'gold'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white dark:bg-[#1a0b15] border border-slate-200 dark:border-[#97144d]/30 text-slate-600 dark:text-slate-300 hover:border-[#97144d]/40'
            }`}
          >
            Gold
          </button>
        </div>
      </div>
    </div>
  );
};
