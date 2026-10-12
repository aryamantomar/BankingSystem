import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  ArrowRight, 
  User, 
  Phone,
  Sparkles 
} from 'lucide-react';

export const AuthPage: React.FC = () => {
  const { login, openAccount, navigate, showToast } = useBanking();
  
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [emailOrId, setEmailOrId] = useState('aryaman@nexbank.com');
  const [password, setPassword] = useState('NexBank@2026!');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginMode) {
      if (!emailOrId.trim()) {
        showToast('Input Required', 'Please enter your Email or Customer ID.', 'warning');
        return;
      }
      login(emailOrId, password);
      navigate('/dashboard');
    } else {
      if (!fullName.trim() || !emailOrId.trim()) {
        showToast('Input Required', 'Please complete all required fields.', 'warning');
        return;
      }
      openAccount({
        name: fullName,
        email: emailOrId,
        phone: phone || '+1 (555) 000-0000',
        accountType: 'Savings',
        balance: 2500
      });
      navigate('/dashboard');
    }
  };

  const handleDemoLogin = () => {
    setEmailOrId('aryaman@nexbank.com');
    setPassword('NexBank@2026!');
    login('aryaman@nexbank.com', 'NexBank@2026!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Auth Card matching diagram */}
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8 sm:p-10 relative space-y-6">
        
        {/* Logo and Brand */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-700 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 mb-2">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400 fill-current" viewBox="0 0 24 24">
                <path d="M4 3h4.2l7.8 11.5V3H20v18h-4.2L8 9.5V21H4V3z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Nex<span className="text-blue-500">Bank</span>
          </h2>
          <h3 className="text-lg font-bold text-white">
            {isLoginMode ? 'Welcome Back' : 'Create New Account'}
          </h3>
          <p className="text-xs text-slate-400">
            {isLoginMode ? 'Login to your NexBank account' : 'Start your modern banking journey in minutes'}
          </p>
        </div>

        {/* 1-Click Demo Login helper banner */}
        {isLoginMode && (
          <div 
            onClick={handleDemoLogin}
            className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center cursor-pointer hover:bg-blue-500/20 transition-colors group"
          >
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Click here for 1-Click Demo Access</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">Preloaded with $34,850.75 balance & card</p>
          </div>
        )}

        {/* Form matching diagram wireframe */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLoginMode && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Aryaman Tomar"
                  required={!isLoginMode}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              {isLoginMode ? 'Email / Customer ID' : 'Email Address'}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={emailOrId}
                onChange={(e) => setEmailOrId(e.target.value)}
                placeholder={isLoginMode ? "aryaman@nexbank.com or 40928812" : "name@example.com"}
                required
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {!isLoginMode && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 019-2831"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          )}

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-slate-300">Password</label>
              {isLoginMode && (
                <button
                  type="button"
                  onClick={() => showToast('Password Recovery', 'A secure reset link has been dispatched to your email.', 'info')}
                  className="text-xs text-blue-400 hover:text-blue-300 font-medium"
                >
                  Forgot Password?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Action button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
          >
            <span>{isLoginMode ? 'Login' : 'Complete Registration'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Divider matching diagram */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-800 w-full"></div>
          <span className="bg-slate-900 px-3 text-xs text-slate-500 uppercase font-semibold">or</span>
        </div>

        {/* Secondary toggle button */}
        <button
          onClick={() => setIsLoginMode(!isLoginMode)}
          className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700/80 font-semibold text-xs transition-colors"
        >
          {isLoginMode ? 'Sign Up for New Account' : 'Existing Customer? Back to Login'}
        </button>

        {/* Security badge matching diagram */}
        <div className="pt-2 text-center flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Secure Banking • Protected by NexBank</span>
        </div>

      </div>
    </div>
  );
};
