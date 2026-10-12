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
import { ScrollReveal } from '../components/ScrollReveal';

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
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#fbf9fa]">
      {/* Background glow in soft Axis burgundy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#97144d]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Auth Card matching diagram in Light Mode */}
      <ScrollReveal direction="up">
        <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-3xl shadow-[0_20px_50px_-15px_rgba(151,20,77,0.12)] p-8 sm:p-10 relative space-y-6">
          
          {/* Logo and Brand */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#97144d] p-0.5 shadow-md shadow-[#97144d]/25 mb-2">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <svg className="w-7 h-7 text-[#97144d]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L2 21H7.5L12 12.5L16.5 21H22L12 3Z" fill="#97144d" />
                  <path d="M12 9L7 19H17L12 9Z" fill="#dc4e83" />
                  <path d="M12 14L9.5 19H14.5L12 14Z" fill="#ca8a04" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Nex<span className="text-[#97144d]">Bank</span>
              </h2>
              <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#97144d] text-white">
                BURGUNDY
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              {isLoginMode ? 'Welcome Back' : 'Create New Account'}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              {isLoginMode ? 'Login to your NexBank account' : 'Start your modern banking journey in minutes'}
            </p>
          </div>

          {/* 1-Click Demo Login helper banner */}
          {isLoginMode && (
            <div 
              onClick={handleDemoLogin}
              className="p-3.5 rounded-2xl bg-[#fdf2f6] border border-[#97144d]/20 text-center cursor-pointer hover:bg-[#fae3ed] transition-all group shadow-sm"
            >
              <div className="flex items-center justify-center gap-1.5 text-xs font-black text-[#97144d]">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Click for 1-Click Burgundy Demo Access</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Preloaded with $34,850.75 balance & virtual metal card</p>
            </div>
          )}

          {/* Form matching diagram wireframe */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLoginMode && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Aryaman Tomar"
                    required={!isLoginMode}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {isLoginMode ? 'Email / Customer ID' : 'Email Address'}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={emailOrId}
                  onChange={(e) => setEmailOrId(e.target.value)}
                  placeholder={isLoginMode ? "aryaman@nexbank.com or 40928812" : "name@example.com"}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                />
              </div>
            </div>

            {!isLoginMode && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2831"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                  />
                </div>
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700">Password</label>
                {isLoginMode && (
                  <button
                    type="button"
                    onClick={() => showToast('Password Recovery', 'A secure reset link has been dispatched to your email.', 'info')}
                    className="text-xs text-[#97144d] hover:underline font-bold"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Action button */}
            <button
              type="submit"
              className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] via-[#ba1e63] to-[#ca8a04] hover:brightness-105 text-white font-extrabold text-sm shadow-md shadow-[#97144d]/25 transition-all flex items-center justify-center gap-2"
            >
              <span>{isLoginMode ? 'Login' : 'Complete Registration'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider matching diagram */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full"></div>
            <span className="bg-white px-3 text-xs text-slate-400 uppercase font-black">or</span>
          </div>

          {/* Secondary toggle button */}
          <button
            onClick={() => setIsLoginMode(!isLoginMode)}
            className="w-full py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs transition-colors"
          >
            {isLoginMode ? 'Sign Up for New Account' : 'Existing Customer? Back to Login'}
          </button>

          {/* Security badge matching diagram */}
          <div className="pt-2 text-center flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#97144d]" />
            <span>Secure Banking • Protected by NexBank</span>
          </div>

        </div>
      </ScrollReveal>
    </div>
  );
};
