import React from 'react';
import { useBanking } from '../context/BankingContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { Home, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useBanking();

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-[#fbf9fa]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#97144d]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 404 Container matching diagram */}
      <ScrollReveal direction="up">
        <div className="max-w-lg w-full p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)] space-y-6">
          
          {/* Visual Graphic */}
          <div className="relative inline-block">
            <span className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#97144d] via-[#c52e69] to-amber-500 font-mono tracking-tighter">
              404
            </span>
            <div className="absolute -bottom-2 right-2 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#97144d] shadow-lg">
              <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Page Not Found
            </h2>
            <p className="text-sm text-slate-500 font-normal">
              The page you are looking for doesn't exist or may have been moved to another route.
            </p>
          </div>

          {/* CTA Button matching diagram */}
          <div className="pt-2">
            <button
              onClick={() => navigate('/')}
              className="btn-shimmer w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] via-[#b01c5d] to-[#97144d] hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-[#97144d]/25 transition-all inline-flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Go to Home</span>
            </button>
          </div>

          {/* Quick helpful alternatives */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 text-xs">
            <button
              onClick={() => navigate('/personal')}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-[#97144d] transition-colors font-bold border border-slate-200"
            >
              Personal
            </button>
            <button
              onClick={() => navigate('/services')}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-[#97144d] transition-colors font-bold border border-slate-200"
            >
              Services
            </button>
            <button
              onClick={() => navigate('/support')}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-[#97144d] transition-colors font-bold border border-slate-200"
            >
              Support
            </button>
          </div>

        </div>
      </ScrollReveal>
    </div>
  );
};
