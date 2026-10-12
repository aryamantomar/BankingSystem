import React, { useState, useEffect } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  Menu, 
  X, 
  LogOut, 
  ChevronRight, 
  LayoutDashboard,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { NexBankLogo } from './NexBankLogo';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const { currentRoute, navigate, user, logout } = useBanking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#97144d]/10 shadow-[0_4px_20px_-4px_rgba(151,20,77,0.06)] transition-all duration-300">
      
      {/* Dynamic Scroll Progress Bar at the very top */}
      <div 
        className="h-1 bg-gradient-to-r from-[#97144d] via-[#dc4e83] to-[#ca8a04] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Axis-style Top Micro Bar */}
      <div className="bg-[#97144d] text-white text-[11px] py-1.5 px-4 sm:px-8 border-b border-white/10 hidden sm:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            NexBank 24/7 Digital Banking • FDIC Insured
          </span>
          <span className="text-white/40">|</span>
          <span className="text-amber-200 font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300" />
            High-Yield Fixed Deposit: Up to 7.85% APY
          </span>
        </div>
        <div className="flex items-center gap-4 font-medium text-white/90">
          <span className="hover:text-amber-200 cursor-pointer transition-colors" onClick={() => navigate('/loans')}>EMI Calculator</span>
          <span>•</span>
          <span className="hover:text-amber-200 cursor-pointer transition-colors flex items-center gap-1" onClick={() => navigate('/contact')}>
            <PhoneCall className="w-3 h-3" />
            1800-NEX-BANK
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with NexBank Custom Emblem */}
          <div 
            onClick={() => handleNavClick('/')}
            className="cursor-pointer"
          >
            <NexBankLogo size="md" showBadge showTagline />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3.5 py-2 text-sm font-bold rounded-xl transition-all duration-200 relative group ${
                    active
                      ? 'text-[#97144d] bg-[#97144d]/10 font-extrabold shadow-sm'
                      : 'text-slate-600 hover:text-[#97144d] hover:bg-slate-100/80'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#97144d] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* User Actions & Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle showLabel={false} />
            {user ? (
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => handleNavClick('/dashboard')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
                    currentRoute === '/dashboard'
                      ? 'bg-[#97144d] text-white border-[#97144d] shadow-md shadow-[#97144d]/30'
                      : 'bg-white dark:bg-[#1a0b15] hover:bg-slate-50 dark:hover:bg-[#25101e] text-[#97144d] dark:text-[#f43f5e] border-[#97144d]/30 hover:border-[#97144d]'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 text-amber-500" />
                  <span>Dashboard</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/50">
                    ${user.balance.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </span>
                </button>

                <button
                  onClick={logout}
                  title="Sign out"
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors border border-transparent hover:border-rose-200 dark:hover:border-rose-900/50"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => handleNavClick('/login')}
                  className="px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-[#97144d] dark:hover:text-[#f43f5e] bg-white dark:bg-[#1a0b15] hover:bg-slate-50 dark:hover:bg-[#25101e] border border-slate-200 dark:border-[#97144d]/30 hover:border-[#97144d]/40 rounded-xl transition-all shadow-sm"
                >
                  Login / Sign Up
                </button>

                <button
                  onClick={() => handleNavClick('/open-account')}
                  className="btn-shimmer relative px-5 py-2.5 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-[#97144d] via-[#c52e69] to-[#ca8a04] hover:brightness-105 shadow-md shadow-[#97144d]/30 transition-all duration-200 active:scale-95"
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
            <ThemeToggle size="sm" showLabel={false} />
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
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-[#97144d]/20 bg-white dark:bg-[#130711] px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-xl">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold ${
                  active
                    ? 'bg-[#97144d]/10 dark:bg-[#97144d]/25 text-[#97144d] dark:text-[#f43f5e] border border-[#97144d]/20'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-200 dark:border-[#97144d]/20 space-y-2">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#1c0d19] border border-slate-200 dark:border-[#97144d]/30 text-slate-700 dark:text-slate-200">
              <span className="text-xs font-bold">Display Theme</span>
              <ThemeToggle size="sm" showLabel />
            </div>
            {user ? (
              <>
                <button
                  onClick={() => handleNavClick('/dashboard')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#97144d] text-white font-bold text-sm shadow-md"
                >
                  <LayoutDashboard className="w-4 h-4 text-amber-300" />
                  <span>Go to Dashboard (${user.balance.toFixed(2)})</span>
                </button>
                <button
                  onClick={logout}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-bold text-sm border border-rose-200 dark:border-rose-900/50"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out ({user.name})</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleNavClick('/open-account')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#97144d] via-[#c52e69] to-[#ca8a04] text-white font-bold text-sm shadow-md text-center"
                >
                  Open Free Account
                </button>
                <button
                  onClick={() => handleNavClick('/login')}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-[#1c0d19] text-slate-700 dark:text-slate-200 font-bold text-sm text-center border border-slate-200 dark:border-[#97144d]/30"
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
