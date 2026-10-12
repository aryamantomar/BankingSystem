import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  Menu, 
  X, 
  LogOut, 
  ChevronRight, 
  LayoutDashboard,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentRoute, navigate, user, logout } = useBanking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Personal Banking', path: '/personal' },
    { label: 'Business Banking', path: '/business' },
    { label: 'Services', path: '/services' },
    { label: 'Support', path: '/support' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && currentRoute === '/') return true;
    if (path !== '/' && currentRoute.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#14040e]/90 backdrop-blur-xl border-b border-[#97144d]/25 transition-all duration-300">
      {/* Top micro bar for Axis-style rates and status */}
      <div className="bg-gradient-to-r from-[#500827] via-[#97144d] to-[#40051e] text-[11px] text-white/90 py-1 px-4 sm:px-8 border-b border-white/10 hidden sm:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            NexBank 24/7 Digital Banking • 100% Secure
          </span>
          <span className="text-white/40">|</span>
          <span className="text-gold-300 font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-gold-400" />
            Axis-Inspired Burgundy Experience: Up to 7.85% FD Rate
          </span>
        </div>
        <div className="flex items-center gap-4 font-medium text-white/80">
          <span className="hover:text-white cursor-pointer" onClick={() => navigate('/loans')}>Fixed EMI Calc</span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer" onClick={() => navigate('/contact')}>Toll Free: 1800-NEX-BANK</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo inspired by Axis Bank geometric triangle/maroon identity */}
          <div 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-[#97144d] via-[#dc4e83] to-amber-400 p-0.5 shadow-lg shadow-[#97144d]/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#1b0512] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                {/* Axis-style geometric stylized chevron/pyramid emblem */}
                <svg className="w-6 h-6 text-[#ea7ea6] group-hover:text-amber-300 transition-colors drop-shadow" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L2 21H7.5L12 12.5L16.5 21H22L12 3Z" fill="#97144d" />
                  <path d="M12 9L7 19H17L12 9Z" fill="#ea7ea6" />
                  <path d="M12 14L9.5 19H14.5L12 14Z" fill="#facc15" />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white group-hover:text-[#f8d2df] transition-colors">
                  Nex<span className="text-[#ea7ea6]">Bank</span>
                </span>
                <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-gradient-to-r from-[#97144d] to-[#c52e69] text-white tracking-wider shadow-sm">
                  BURGUNDY
                </span>
              </div>
              <p className="text-[11px] text-pink-200/60 font-medium tracking-wide hidden sm:block">
                Modern Banking for a Brighter Tomorrow
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 relative group ${
                    active
                      ? 'text-white bg-[#97144d]/40 border border-[#97144d]/60 shadow-md shadow-[#97144d]/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-amber-400 to-[#ea7ea6] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* User Actions & Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => handleNavClick('/dashboard')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all border ${
                    currentRoute === '/dashboard'
                      ? 'bg-gradient-to-r from-[#97144d] to-[#731640] text-white border-pink-500/40 shadow-lg shadow-[#97144d]/30'
                      : 'bg-[#240615] hover:bg-[#34091f] text-pink-100 border-[#97144d]/30 hover:border-[#dc4e83]/50'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 text-gold-400" />
                  <span>Dashboard</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ${user.balance.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </span>
                </button>

                <button
                  onClick={logout}
                  title="Sign out"
                  className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors border border-transparent hover:border-rose-500/20"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => handleNavClick('/login')}
                  className="px-4 py-2 text-sm font-bold text-slate-200 hover:text-white bg-[#240615] hover:bg-[#34091f] border border-[#97144d]/40 hover:border-[#dc4e83] rounded-xl transition-all"
                >
                  Login / Sign Up
                </button>

                <button
                  onClick={() => handleNavClick('/open-account')}
                  className="btn-shimmer relative px-5 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#97144d] via-[#c52e69] to-[#ca8a04] hover:brightness-110 shadow-lg shadow-[#97144d]/40 transition-all duration-200 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    Open Account
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            {user && (
              <button
                onClick={() => handleNavClick('/dashboard')}
                className="text-xs px-2.5 py-1.5 rounded-lg bg-[#97144d] text-white font-bold"
              >
                ${Math.floor(user.balance)}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-pink-200 hover:text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#97144d]/30 bg-[#160410]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold ${
                  active
                    ? 'bg-[#97144d]/30 text-white font-bold border border-[#97144d]/50'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-pink-400" />
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#97144d]/30 space-y-2">
            {user ? (
              <>
                <button
                  onClick={() => handleNavClick('/dashboard')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#97144d] to-[#c52e69] text-white font-bold text-sm shadow-lg shadow-[#97144d]/30"
                >
                  <LayoutDashboard className="w-4 h-4 text-gold-300" />
                  <span>Go to Dashboard (${user.balance.toFixed(2)})</span>
                </button>
                <button
                  onClick={logout}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-500/10 text-rose-300 font-medium text-sm border border-rose-500/20"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out ({user.name})</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleNavClick('/open-account')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#97144d] via-[#c52e69] to-[#ca8a04] text-white font-bold text-sm shadow-lg shadow-[#97144d]/30 text-center"
                >
                  Open Free Account
                </button>
                <button
                  onClick={() => handleNavClick('/login')}
                  className="w-full py-2.5 rounded-xl bg-[#240615] text-slate-200 font-semibold text-sm text-center border border-[#97144d]/40"
                >
                  Sign In to Online Banking
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
