import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  UserCheck, 
  ShieldCheck, 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Building2,
  Lock,
  DollarSign
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
  const [govId, setGovId] = useState('NEX-9921-X');
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Paperless Digital Onboarding</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Open Your Account</h1>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Get your digital account number and virtual debit card in under 3 minutes.
        </p>
      </div>

      {/* Progress Steps Indicator */}
      {!createdUser && (
        <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs font-semibold">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-blue-400' : 'text-slate-500'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center border ${
              step >= 1 ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}>1</span>
            <span>Personal Details</span>
          </div>
          <div className="w-8 sm:w-16 h-0.5 bg-slate-800"></div>
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-blue-400' : 'text-slate-500'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center border ${
              step >= 2 ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}>2</span>
            <span>Preferences</span>
          </div>
          <div className="w-8 sm:w-16 h-0.5 bg-slate-800"></div>
          <div className={`flex items-center gap-2 ${step >= 3 ? 'text-blue-400' : 'text-slate-500'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center border ${
              step >= 3 ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}>3</span>
            <span>Verification</span>
          </div>
        </div>
      )}

      {/* Account Created Success View */}
      {createdUser ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-emerald-500/40 shadow-2xl space-y-8 animate-scaleUp text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Congratulations, {createdUser.name}!</h2>
            <p className="text-sm text-slate-300">
              Your NexBank {createdUser.accountType} Account is officially active and ready for transactions.
            </p>
          </div>

          {/* Generated Details Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block font-semibold">Account Number</span>
              <span className="font-mono text-sm font-bold text-blue-400">{createdUser.accountNumber}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block font-semibold">Routing / IFSC</span>
              <span className="font-mono text-sm font-bold text-cyan-400">{createdUser.ifscCode}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block font-semibold">Initial Balance</span>
              <span className="font-mono text-sm font-bold text-emerald-400">${createdUser.balance.toLocaleString()}</span>
            </div>
          </div>

          {/* Virtual Card Preview */}
          <div className="max-w-sm mx-auto p-5 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-900 text-white shadow-xl text-left space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold tracking-wider">NexBank Instant Virtual</span>
              <CreditCard className="w-4 h-4 text-blue-200" />
            </div>
            <div className="font-mono text-base tracking-widest pt-2">
              {createdUser.cardDetails.cardNumber}
            </div>
            <div className="flex justify-between text-[11px] text-blue-200 pt-2">
              <div>
                <span className="block text-[9px] uppercase">Cardholder</span>
                <span>{createdUser.cardDetails.cardHolder}</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase">Expires</span>
                <span>{createdUser.cardDetails.expiry}</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase">CVV</span>
                <span>{createdUser.cardDetails.cvv}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Access Online Dashboard Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/services')}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-sm font-semibold transition-colors"
            >
              Explore Services
            </button>
          </div>
        </div>
      ) : (
        /* Form Wizard */
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Personal Details */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                  Step 1: Your Personal Information
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Aryaman Tomar"
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. aryaman@nexbank.com"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 019-2834"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Account Preferences */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                  Step 2: Account Selection & Funding
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Select Account Type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { type: 'Savings', rate: '5.25% APY' },
                      { type: 'Current', rate: 'Zero Minimum' },
                      { type: 'Salary', rate: 'Zero Fee' },
                      { type: 'Corporate', rate: 'Treasury' }
                    ].map((item) => (
                      <div
                        key={item.type}
                        onClick={() => setAccountType(item.type as any)}
                        className={`p-4 rounded-xl border cursor-pointer text-center transition-all ${
                          accountType === item.type
                            ? 'bg-blue-600/20 border-blue-500 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <h4 className="font-bold text-sm text-white">{item.type}</h4>
                        <span className="text-[10px] text-blue-400 font-semibold">{item.rate}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Initial Opening Deposit ($ USD)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      value={initialDeposit}
                      onChange={(e) => setInitialDeposit(e.target.value)}
                      required
                      min="0"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-8 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-bold"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Funds will be immediately credited and earn daily compounding interest.</p>
                </div>
              </div>
            )}

            {/* Step 3: Identity Verification & Compliance */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                  Step 3: Identity & Compliance Verification
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Government ID / SSN / Tax ID</label>
                  <input
                    type="text"
                    value={govId}
                    onChange={(e) => setGovId(e.target.value)}
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-blue-500"
                  />
                  <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Encrypted with AES-256 bit banking security
                  </p>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      required
                      className="mt-0.5 accent-blue-600 rounded"
                    />
                    <span>
                      I certify that all provided details are accurate and agree to NexBank Electronic Banking Agreement, Terms of Service, and Privacy Policy.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="pt-4 border-t border-slate-800 flex justify-between gap-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((step - 1) as any)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                >
                  Back
                </button>
              ) : <div></div>}

              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2"
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
