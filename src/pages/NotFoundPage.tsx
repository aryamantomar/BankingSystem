import React from 'react';
import { useBanking } from '../context/BankingContext';
import { Home, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useBanking();

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#97144d]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 404 Container matching diagram */}
      <div className="max-w-lg w-full p-8 sm:p-12 rounded-3xl bg-[#1d0514] border border-[#97144d]/40 shadow-2xl space-y-6">
        
        {/* Visual Graphic */}
        <div className="relative inline-block">
          <span className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ea7ea6] via-amber-400 to-[#97144d] font-mono tracking-tighter">
            404
          </span>
          <div className="absolute -bottom-2 right-2 w-8 h-8 rounded-full bg-[#11030b] border border-[#97144d]/50 flex items-center justify-center text-gold-400 shadow-lg">
            <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Page Not Found
          </h2>
          <p className="text-sm text-pink-200/70 font-normal">
            The page you are looking for doesn't exist or may have been moved to another route.
          </p>
        </div>

        {/* CTA Button matching diagram */}
        <div className="pt-2">
          <button
            onClick={() => navigate('/')}
            className="btn-shimmer w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-[#97144d]/40 transition-all inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </button>
        </div>

        {/* Quick helpful alternatives */}
        <div className="pt-6 border-t border-[#97144d]/30 grid grid-cols-3 gap-2 text-xs">
          <button
            onClick={() => navigate('/personal')}
            className="p-2.5 rounded-xl bg-[#11030b] hover:bg-[#28071c] text-pink-200 transition-colors font-bold border border-[#97144d]/20"
          >
            Personal
          </button>
          <button
            onClick={() => navigate('/services')}
            className="p-2.5 rounded-xl bg-[#11030b] hover:bg-[#28071c] text-pink-200 transition-colors font-bold border border-[#97144d]/20"
          >
            Services
          </button>
          <button
            onClick={() => navigate('/support')}
            className="p-2.5 rounded-xl bg-[#11030b] hover:bg-[#28071c] text-pink-200 transition-colors font-bold border border-[#97144d]/20"
          >
            Support
          </button>
        </div>

      </div>
    </div>
  );
};
