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
  Sparkles,
  Crown
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
      {/* Background glow in Axis burgundy and gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#97144d]/20 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Auth Card matching diagram with Axis Burgundy styling */}
      <div className="w-full max-w-md bg-[#180411] border border-[#97144d]/40 rounded-3xl shadow-2xl p-8 sm:p-10 relative space-y-6">
        
        {/* Logo and Brand */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#97144d] via-[#dc4e83] to-amber-400 p-0.5 shadow-xl shadow-[#97144d]/40 mb-2">
            <div className="w-full h-full bg-[#1b0512] rounded-[14px] flex items-center justify-center">
              <svg className="w-7 h-7 text-[#ea7ea6]" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L2 21H7.5L12 12.5L16.5 21H22L12 3Z" fill="#97144d" />
                <path d="M12 9L7 19H17L12 9Z" fill="#ea7ea6" />
                <path d="M12 14L9.5 19H14.5L12 14Z" fill="#facc15" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl font-black text-white tracking-tight">
              Nex<span className="text-[#ea7ea6]">Bank</span>
            </h2>
            <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#97144d] text-gold-300">
              BURGUNDY
            </span>
          </div>
          <h3 className="text-lg font-bold text-white">
            {isLoginMode ? 'Welcome Back' : 'Create New Account'}
          </h3>
          <p className="text-xs text-pink-200/70">
            {isLoginMode ? 'Login to your NexBank account' : 'Start your modern banking journey in minutes'}
          </p>
        </div>

        {/* 1-Click Demo Login helper banner */}
        {isLoginMode && (
          <div 
            onClick={handleDemoLogin}
            className="p-3.5 rounded-2xl bg-[#28051a] border border-amber-400/40 text-center cursor-pointer hover:bg-[#380824] transition-all group shadow-md"
          >
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-gold-300">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Click for 1-Click Burgundy Demo Access</span>
            </div>
            <p className="text-[10px] text-pink-200/70 mt-0.5">Preloaded with $34,850.75 balance & virtual metal card</p>
          </div>
        )}

        {/* Form matching diagram wireframe */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLoginMode && (
            <div>
              <label className="block text-xs font-bold text-pink-200 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Aryaman Tomar"
                  required={!isLoginMode}
                  className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-pink-200 mb-1.5">
              {isLoginMode ? 'Email / Customer ID' : 'Email Address'}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={emailOrId}
                onChange={(e) => setEmailOrId(e.target.value)}
                placeholder={isLoginMode ? "aryaman@nexbank.com or 40928812" : "name@example.com"}
                required
                className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {!isLoginMode && (
            <div>
              <label className="block text-xs font-bold text-pink-200 mb-1.5">Phone Number</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 019-2831"
                  className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          )}

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-pink-200">Password</label>
              {isLoginMode && (
                <button
                  type="button"
                  onClick={() => showToast('Password Recovery', 'A secure reset link has been dispatched to your email.', 'info')}
                  className="text-xs text-gold-300 hover:text-white font-medium"
                >
                  Forgot Password?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-pink-300 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Action button */}
          <button
            type="submit"
            className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] via-[#c52e69] to-amber-500 hover:brightness-110 text-white font-black text-sm shadow-xl shadow-[#97144d]/40 transition-all flex items-center justify-center gap-2"
          >
            <span>{isLoginMode ? 'Login' : 'Complete Registration'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Divider matching diagram */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-[#97144d]/30 w-full"></div>
          <span className="bg-[#180411] px-3 text-xs text-pink-300/60 uppercase font-bold">or</span>
        </div>

        {/* Secondary toggle button */}
        <button
          onClick={() => setIsLoginMode(!isLoginMode)}
          className="w-full py-3 rounded-xl bg-[#220615] hover:bg-[#320820] text-pink-100 border border-[#97144d]/40 font-bold text-xs transition-colors"
        >
          {isLoginMode ? 'Sign Up for New Account' : 'Existing Customer? Back to Login'}
        </button>

        {/* Security badge matching diagram */}
        <div className="pt-2 text-center flex items-center justify-center gap-1.5 text-[11px] text-pink-200/70">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
          <span>Secure Banking • Protected by NexBank</span>
        </div>

      </div>
    </div>
  );
};
