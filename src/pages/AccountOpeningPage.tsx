import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  UserCheck, 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  Crown, 
  ShieldCheck
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

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
    <div className="min-h-[85vh] py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 bg-[#fbf9fa]">
      
      {/* Title */}
      <ScrollReveal direction="down">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5 text-amber-500" />
            <span>Paperless Burgundy Onboarding</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Open Your Account</h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto font-medium">
            Get your digital account number and virtual Burgundy metal card in under 3 minutes.
          </p>
        </div>
      </ScrollReveal>

      {/* Progress Steps Indicator */}
      {!createdUser && (
        <ScrollReveal direction="up" delay={100}>
          <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs font-bold">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#97144d]' : 'text-slate-400'}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center border font-black ${
                step >= 1 ? 'bg-[#97144d] text-white border-[#97144d]' : 'bg-white text-slate-400 border-slate-300'
              }`}>1</span>
              <span>Personal Details</span>
            </div>
            <div className="w-8 sm:w-16 h-0.5 bg-slate-200"></div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#97144d]' : 'text-slate-400'}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center border font-black ${
                step >= 2 ? 'bg-[#97144d] text-white border-[#97144d]' : 'bg-white text-slate-400 border-slate-300'
              }`}>2</span>
              <span>Preferences</span>
            </div>
            <div className="w-8 sm:w-16 h-0.5 bg-slate-200"></div>
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#97144d]' : 'text-slate-400'}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center border font-black ${
                step >= 3 ? 'bg-[#97144d] text-white border-[#97144d]' : 'bg-white text-slate-400 border-slate-300'
              }`}>3</span>
              <span>Verification</span>
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Account Created Success View */}
      {createdUser ? (
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(151,20,77,0.12)] space-y-8 animate-scaleUp text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-[#fdf2f6] text-[#97144d] flex items-center justify-center mx-auto border border-[#97144d]/20 shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Congratulations, {createdUser.name}!</h2>
              <p className="text-sm text-slate-600 font-medium">
                Your NexBank {createdUser.accountType} Burgundy Account is officially active and funded.
              </p>
            </div>

            {/* Generated Details Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto text-left">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">Account Number</span>
                <span className="font-mono text-sm font-black text-[#97144d]">{createdUser.accountNumber}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">Routing / IFSC</span>
                <span className="font-mono text-sm font-black text-slate-800">{createdUser.ifscCode}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">Initial Balance</span>
                <span className="font-mono text-sm font-black text-emerald-700">${createdUser.balance.toLocaleString()}</span>
              </div>
            </div>

            {/* Virtual Card Preview */}
            <div className="max-w-sm mx-auto p-6 rounded-2xl bg-gradient-to-tr from-[#3b061d] via-[#740e3a] to-[#97144d] text-white shadow-xl text-left space-y-4 border border-amber-400/40 relative overflow-hidden">
              <div className="flex justify-between items-center text-xs">
                <span className="font-black tracking-wider text-amber-200 uppercase">BURGUNDY METAL</span>
                <div className="w-8 h-6 rounded bg-gradient-to-tr from-amber-300 to-amber-500 border border-amber-200 flex items-center justify-center">
                  <div className="w-4 h-3 border border-amber-800/40 rounded-sm"></div>
                </div>
              </div>
              <div className="font-mono text-base tracking-widest pt-2 font-bold text-amber-100">
                {createdUser.cardDetails.cardNumber}
              </div>
              <div className="flex justify-between text-[11px] text-pink-200 pt-2 font-medium">
                <div>
                  <span className="block text-[9px] uppercase font-bold text-pink-300/80">Cardholder</span>
                  <span>{createdUser.cardDetails.cardHolder}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-bold text-pink-300/80">Expires</span>
                  <span className="font-mono text-amber-300 font-bold">{createdUser.cardDetails.expiry}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-bold text-pink-300/80">CVV</span>
                  <span className="font-mono text-amber-300 font-bold">{createdUser.cardDetails.cvv}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="btn-shimmer px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] via-[#ba1e63] to-[#ca8a04] hover:brightness-105 text-white font-extrabold text-sm shadow-md shadow-[#97144d]/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Access Online Dashboard Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/services')}
                className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold transition-colors"
              >
                Explore Services
              </button>
            </div>
          </div>
        </ScrollReveal>
      ) : (
        /* Form Wizard */
        <ScrollReveal direction="up" delay={150}>
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(151,20,77,0.08)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">
                    Step 1: Your Personal Information
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Aryaman Tomar"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. aryaman@nexbank.com"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Account Preferences */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">
                    Step 2: Account Selection & Funding
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Select Account Type</label>
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
                              ? 'bg-[#fdf2f6] border-[#97144d] text-slate-900 shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <h4 className="font-bold text-sm text-slate-900">{item.type}</h4>
                          <span className="text-[10px] text-[#97144d] font-black">{item.rate}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Initial Opening Deposit ($ USD)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                      <input
                        type="number"
                        value={initialDeposit}
                        onChange={(e) => setInitialDeposit(e.target.value)}
                        required
                        min="0"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white font-bold"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 font-medium">Funds earn compounding interest from day one.</p>
                  </div>
                </div>
              )}

              {/* Step 3: Identity Verification & Compliance */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">
                    Step 3: Identity & Compliance Verification
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Government ID / PAN / SSN</label>
                    <input
                      type="text"
                      value={govId}
                      onChange={(e) => setGovId(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 font-mono focus:outline-none focus:border-[#97144d] focus:bg-white"
                    />
                    <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Encrypted with AES-256 bit banking security
                    </p>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer font-medium">
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
              <div className="pt-4 border-t border-slate-100 flex justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((step - 1) as any)}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold transition-colors"
                  >
                    Back
                  </button>
                ) : <div></div>}

                <button
                  type="submit"
                  className="btn-shimmer px-8 py-3 rounded-xl bg-gradient-to-r from-[#97144d] via-[#ba1e63] to-[#ca8a04] hover:brightness-105 text-white font-black text-sm shadow-md shadow-[#97144d]/25 transition-all flex items-center gap-2"
                >
                  <span>{step === 3 ? 'Confirm & Create Account' : 'Proceed'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        </ScrollReveal>
      )}

    </div>
  );
};
