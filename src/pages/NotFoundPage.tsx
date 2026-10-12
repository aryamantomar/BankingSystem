import React from 'react';
import { useBanking } from '../context/BankingContext';
import { Home, Compass, ArrowRight, ShieldAlert } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useBanking();

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 404 Container matching diagram */}
      <div className="max-w-lg w-full p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
        
        {/* Visual Graphic */}
        <div className="relative inline-block">
          <span className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 font-mono tracking-tighter">
            404
          </span>
          <div className="absolute -bottom-2 right-2 w-8 h-8 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center text-blue-400 shadow-lg">
            <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-400">
            The page you are looking for doesn't exist or may have been moved to another route.
          </p>
        </div>

        {/* CTA Button matching diagram */}
        <div className="pt-2">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </button>
        </div>

        {/* Quick helpful alternatives */}
        <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-2 text-xs">
          <button
            onClick={() => navigate('/personal')}
            className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 transition-colors"
          >
            Personal
          </button>
          <button
            onClick={() => navigate('/services')}
            className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => navigate('/support')}
            className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 transition-colors"
          >
            Support
          </button>
        </div>

      </div>
    </div>
  );
};
