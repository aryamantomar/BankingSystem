import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  UserCheck, 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  Crown,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const AccountOpeningPage: React.FC = () => {
  const { openAccount, navigate } = useBanking();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [accountType, setAccountType] = useState<'Savings' | 'Current' | 'Salary' | 'Corporate'>('Savings');
  const [initialDeposit, setInitialDeposit] = useState('2500');
  const [govId, setGovId] = useState('AXIS-9921-X');
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  // Created Result State
  const [createdUser, setCreatedUser] = useState<any | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    if (step === 2) {
      setStep(3);
      return;
    }

    // Step 3 submission - create real account in context
    const newUser = openAccount({
      name: fullName || 'Aryaman Tomar',
      email: email || 'aryaman@example.com',
      phone: phone || '+1 (555) 019-2834',
      accountType,
      balance: parseFloat(initialDeposit) || 2500
    });

    setCreatedUser(newUser);
  };

  return (
    <div className="min-h-[85vh] py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      
      {/* Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#97144d]/30 to-amber-500/20 border border-[#97144d]/50 text-gold-300 text-xs font-bold uppercase tracking-wider">
          <Crown className="w-3.5 h-3.5" />
          <span>Paperless Burgundy Onboarding</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Open Your Account</h1>
        <p className="text-sm text-pink-200/70 max-w-md mx-auto">
          Get your digital account number and virtual Burgundy metal card in under 3 minutes.
        </p>
      </div>

      {/* Progress Steps Indicator */}
      {!createdUser && (
        <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs font-bold">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-gold-300' : 'text-slate-500'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center border ${
              step >= 1 ? 'bg-[#97144d] text-white border-amber-400' : 'bg-[#1e0514] text-pink-300 border-[#97144d]/30'
            }`}>1</span>
            <span>Personal Details</span>
          </div>
          <div className="w-8 sm:w-16 h-0.5 bg-[#97144d]/30"></div>
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-gold-300' : 'text-slate-500'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center border ${
              step >= 2 ? 'bg-[#97144d] text-white border-amber-400' : 'bg-[#1e0514] text-pink-300 border-[#97144d]/30'
            }`}>2</span>
            <span>Preferences</span>
          </div>
          <div className="w-8 sm:w-16 h-0.5 bg-[#97144d]/30"></div>
          <div className={`flex items-center gap-2 ${step >= 3 ? 'text-gold-300' : 'text-slate-500'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center border ${
              step >= 3 ? 'bg-[#97144d] text-white border-amber-400' : 'bg-[#1e0514] text-pink-300 border-[#97144d]/30'
            }`}>3</span>
            <span>Verification</span>
          </div>
        </div>
      )}

      {/* Account Created Success View */}
      {createdUser ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1d0514] border border-amber-400/40 shadow-2xl space-y-8 animate-scaleUp text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="w-16 h-16 rounded-full bg-[#97144d]/30 text-gold-400 flex items-center justify-center mx-auto border border-amber-400/50 shadow-lg">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Congratulations, {createdUser.name}!</h2>
            <p className="text-sm text-pink-100/80">
              Your NexBank {createdUser.accountType} Burgundy Account is officially active and funded.
            </p>
          </div>

          {/* Generated Details Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-[#11030b] border border-[#97144d]/40">
              <span className="text-[10px] text-pink-300/60 uppercase block font-bold">Account Number</span>
              <span className="font-mono text-sm font-bold text-gold-300">{createdUser.accountNumber}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#11030b] border border-[#97144d]/40">
              <span className="text-[10px] text-pink-300/60 uppercase block font-bold">Routing / IFSC</span>
              <span className="font-mono text-sm font-bold text-[#ea7ea6]">{createdUser.ifscCode}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#11030b] border border-[#97144d]/40">
              <span className="text-[10px] text-pink-300/60 uppercase block font-bold">Initial Balance</span>
              <span className="font-mono text-sm font-bold text-emerald-400">${createdUser.balance.toLocaleString()}</span>
            </div>
          </div>

          {/* Virtual Card Preview */}
          <div className="max-w-sm mx-auto p-6 rounded-2xl bg-gradient-to-tr from-[#3b061d] via-[#740e3a] to-[#97144d] text-white shadow-2xl text-left space-y-4 border border-amber-400/40 relative overflow-hidden group hover:rotate-1 transition-transform">
            <div className="flex justify-between items-center text-xs">
              <span className="font-black tracking-wider text-gold-200 uppercase">BURGUNDY METAL</span>
              <div className="w-8 h-6 rounded bg-gradient-to-tr from-amber-300 to-amber-500 border border-amber-200 flex items-center justify-center">
                <div className="w-4 h-3 border border-amber-800/40 rounded-sm"></div>
              </div>
            </div>
            <div className="font-mono text-base tracking-widest pt-2 font-bold text-gold-100">
              {createdUser.cardDetails.cardNumber}
            </div>
            <div className="flex justify-between text-[11px] text-pink-200 pt-2 font-medium">
              <div>
                <span className="block text-[9px] uppercase font-bold text-pink-300/60">Cardholder</span>
                <span>{createdUser.cardDetails.cardHolder}</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase font-bold text-pink-300/60">Expires</span>
                <span className="font-mono text-gold-300 font-bold">{createdUser.cardDetails.expiry}</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase font-bold text-pink-300/60">CVV</span>
                <span className="font-mono text-gold-300 font-bold">{createdUser.cardDetails.cvv}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="btn-shimmer px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] via-[#c52e69] to-amber-500 hover:brightness-110 text-white font-black text-sm shadow-xl shadow-[#97144d]/40 transition-all flex items-center justify-center gap-2"
            >
              <span>Access Online Dashboard Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/services')}
              className="px-6 py-3.5 rounded-xl bg-[#240616] hover:bg-[#34091f] text-pink-100 text-sm font-bold transition-colors border border-[#97144d]/40"
            >
              Explore Services
            </button>
          </div>
        </div>
      ) : (
        /* Form Wizard */
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1d0514] border border-[#97144d]/40 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Personal Details */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-black text-white border-b border-[#97144d]/30 pb-2">
                  Step 1: Your Personal Information
                </h3>

                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Aryaman Tomar"
                    required
                    className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-pink-200 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. aryaman@nexbank.com"
                      required
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-pink-200 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 019-2834"
                      required
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Account Preferences */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-black text-white border-b border-[#97144d]/30 pb-2">
                  Step 2: Account Selection & Funding
                </h3>

                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-2">Select Account Type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { type: 'Savings', rate: '5.25% - 7.10%' },
                      { type: 'Current', rate: 'Zero Minimum' },
                      { type: 'Salary', rate: 'Zero Fee' },
                      { type: 'Corporate', rate: 'Burgundy Multi' }
                    ].map((item) => (
                      <div
                        key={item.type}
                        onClick={() => setAccountType(item.type as any)}
                        className={`p-4 rounded-2xl border cursor-pointer text-center transition-all ${
                          accountType === item.type
                            ? 'bg-[#3b061d] border-amber-400 text-white shadow-lg'
                            : 'bg-[#11030b] border-[#97144d]/30 text-pink-200 hover:border-pink-400'
                        }`}
                      >
                        <h4 className="font-bold text-sm text-white">{item.type}</h4>
                        <span className="text-[10px] text-gold-400 font-bold">{item.rate}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-1.5">Initial Opening Deposit ($ USD)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-400 font-bold">$</span>
                    <input
                      type="number"
                      value={initialDeposit}
                      onChange={(e) => setInitialDeposit(e.target.value)}
                      required
                      min="0"
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl pl-8 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-bold"
                    />
                  </div>
                  <p className="text-[11px] text-pink-200/60 mt-1">Funds earn compounding interest from day one.</p>
                </div>
              </div>
            )}

            {/* Step 3: Identity Verification & Compliance */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-black text-white border-b border-[#97144d]/30 pb-2">
                  Step 3: Identity & Compliance Verification
                </h3>

                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-1.5">Government ID / PAN / SSN</label>
                  <input
                    type="text"
                    value={govId}
                    onChange={(e) => setGovId(e.target.value)}
                    required
                    className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-amber-400"
                  />
                  <p className="text-[11px] text-pink-200/60 mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Encrypted with AES-256 bit banking security
                  </p>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-pink-100/80 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      required
                      className="mt-0.5 accent-[#97144d] rounded"
                    />
                    <span>
                      I certify that all provided details are accurate and agree to NexBank Electronic Banking Agreement, Terms of Service, and Privacy Policy.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="pt-4 border-t border-[#97144d]/30 flex justify-between gap-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((step - 1) as any)}
                  className="px-6 py-2.5 rounded-xl bg-[#240616] text-pink-200 hover:text-white text-xs font-bold transition-colors border border-[#97144d]/30"
                >
                  Back
                </button>
              ) : <div></div>}

              <button
                type="submit"
                className="btn-shimmer px-8 py-3 rounded-xl bg-gradient-to-r from-[#97144d] via-[#c52e69] to-amber-500 hover:brightness-110 text-white font-black text-sm shadow-xl shadow-[#97144d]/40 transition-all flex items-center gap-2"
              >
                <span>{step === 3 ? 'Confirm & Create Account' : 'Proceed'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
};
