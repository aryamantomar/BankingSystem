import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  Building2, 
  Menu, 
  X, 
  User, 
  LogOut, 
  ChevronRight, 
  CreditCard,
  PhoneCall,
  LayoutDashboard
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
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo matching the diagram */}
          <div 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400 fill-current" viewBox="0 0 24 24">
                  <path d="M4 3h4.2l7.8 11.5V3H20v18h-4.2L8 9.5V21H4V3z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  Nex<span className="text-blue-500">Bank</span>
                </span>
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Secure
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide hidden sm:block">
                Modern Banking for a Brighter Tomorrow
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    active
                      ? 'text-blue-400 bg-blue-500/10 font-semibold shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
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
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentRoute === '/dashboard'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-800/80 hover:bg-slate-750 text-slate-200 border border-slate-700/80 hover:border-blue-500/50'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 text-blue-400" />
                  <span>Dashboard</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ${user.balance.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </span>
                </button>

                <button
                  onClick={logout}
                  title="Sign out"
                  className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors border border-transparent hover:border-rose-500/20"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => handleNavClick('/login')}
                  className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
                >
                  Login / Sign Up
                </button>

                <button
                  onClick={() => handleNavClick('/open-account')}
                  className="relative group overflow-hidden px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-blue-500/20 transition-all duration-200"
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
                className="text-xs px-2.5 py-1.5 rounded-md bg-blue-600 text-white font-medium"
              >
                ${Math.floor(user.balance)}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  active
                    ? 'bg-blue-600/15 text-blue-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-800/80 space-y-2">
            {user ? (
              <>
                <button
                  onClick={() => handleNavClick('/dashboard')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Go to Dashboard (${user.balance.toFixed(2)})</span>
                </button>
                <button
                  onClick={logout}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-500/10 text-rose-400 font-medium text-sm border border-rose-500/20"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out ({user.name})</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleNavClick('/open-account')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-md shadow-blue-500/20 text-center"
                >
                  Open Free Account
                </button>
                <button
                  onClick={() => handleNavClick('/login')}
                  className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 font-medium text-sm text-center border border-slate-700"
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
