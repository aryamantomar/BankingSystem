import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  Home, 
  GraduationCap, 
  Car, 
  Briefcase, 
  User, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Percent, 
  DollarSign, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const LoansPage: React.FC = () => {
  const { navigate, showToast } = useBanking();

  // Loan types from diagram
  const loanTypes = [
    {
      id: 'home',
      title: 'Home Loan',
      rate: '6.85% p.a.',
      maxAmount: '$2,500,000',
      tenure: 'Up to 30 Years',
      icon: <Home className="w-6 h-6 text-blue-400" />,
      features: ['Zero prepayment penalty', 'Doorstep document pickup', 'Quick sanction in 48 hours']
    },
    {
      id: 'education',
      title: 'Education Loan',
      rate: '8.10% p.a.',
      maxAmount: '$250,000',
      tenure: 'Up to 15 Years',
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      features: ['Covers 100% of tuition & living', 'Moratorium during course period', 'Zero collateral up to $75k']
    },
    {
      id: 'car',
      title: 'Car Loan',
      rate: '7.45% p.a.',
      maxAmount: '$150,000',
      tenure: 'Up to 7 Years',
      icon: <Car className="w-6 h-6 text-emerald-400" />,
      features: ['Up to 100% on-road financing', 'Special discounts for electric vehicles', 'Paperless approval in 1 hour']
    },
    {
      id: 'business',
      title: 'Business Loan',
      rate: '9.20% p.a.',
      maxAmount: '$5,000,000',
      tenure: 'Up to 10 Years',
      icon: <Briefcase className="w-6 h-6 text-amber-400" />,
      features: ['Collateral-free micro loans available', 'Flexible hybrid overdraft limits', 'Tax deductible interest component']
    },
    {
      id: 'personal',
      title: 'Personal Loan',
      rate: '9.50% p.a.',
      maxAmount: '$75,000',
      tenure: 'Up to 5 Years',
      icon: <User className="w-6 h-6 text-violet-400" />,
      features: ['Instant disbursal into account in 15 mins', 'Zero end-use restrictions', 'Minimal basic documentation']
    }
  ];

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenureYears, setTenureYears] = useState(5);

  // EMI Math Calculation
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const [appliedModal, setAppliedModal] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedModal(false);
    showToast('Loan Application Submitted', `Thank you, ${applicantName || 'Applicant'}. Application ref #LN-${Math.floor(1000 + Math.random() * 9000)} is under review. Our loan specialist will call you today!`, 'success');
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Competitive Borrowing Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Loan Details & Calculators
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mt-4 max-w-2xl mx-auto font-light">
            Flexible financing crafted to turn your dreams into reality with transparent interest rates.
          </p>
        </div>
      </section>

      {/* Interactive EMI Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Interactive Loan EMI Calculator</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Adjust amount, interest rate, and tenure to visualize your exact monthly payment obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              {/* Loan Amount */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-slate-300">Loan Amount</span>
                  <span className="text-xl font-black text-white font-mono">${loanAmount.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="1000000"
                  step="5000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>$5,000</span>
                  <span>$500,000</span>
                  <span>$1,000,000</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-slate-300">Interest Rate (p.a.)</span>
                  <span className="text-xl font-black text-cyan-400 font-mono">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="5.0"
                  max="20.0"
                  step="0.25"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>5%</span>
                  <span>12.5%</span>
                  <span>20%</span>
                </div>
              </div>

              {/* Tenure */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-slate-300">Loan Tenure</span>
                  <span className="text-xl font-black text-emerald-400 font-mono">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* Calculated Breakdown Card */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-blue-950/60 to-slate-950 border border-blue-500/40 text-center space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Monthly Installment (EMI)</span>
                <div className="text-4xl sm:text-5xl font-black text-white mt-2 font-mono">
                  ${emi.toLocaleString()}
                  <span className="text-sm text-slate-400 font-sans font-normal"> / mo</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 text-left text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Principal Amount</span>
                  <span className="text-white font-semibold">${loanAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Interest Payable</span>
                  <span className="text-cyan-400 font-semibold">${totalInterest.toLocaleString()}</span>
                </div>
                <div className="border-t border-slate-800 pt-2 flex justify-between font-bold text-sm">
                  <span className="text-slate-300">Total Repayment</span>
                  <span className="text-emerald-400">${totalPayment.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => setAppliedModal(true)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all"
              >
                Apply for this Loan in 2 Minutes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Categories Cards matching diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-white">Explore Our Loan Portfolios</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">Select any loan product to apply directly with low processing fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan) => (
            <div
              key={loan.id}
              className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-blue-600/20 border border-slate-700 flex items-center justify-center transition-colors">
                    {loan.icon}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {loan.rate}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {loan.title}
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Maximum Limit</span>
                    <span className="font-bold text-white">{loan.maxAmount}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Tenure</span>
                    <span className="font-bold text-slate-300">{loan.tenure}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-xs text-slate-300">
                  {loan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setAppliedModal(true);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Apply for {loan.title}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Application Modal */}
      {appliedModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl animate-scaleUp">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Quick Loan Pre-Approval</h3>
              <p className="text-xs text-slate-400 mt-1">Estimated monthly repayment: ${emi}/mo</p>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  required
                  placeholder="e.g. Aryaman Tomar"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  required
                  placeholder="+1 (555) 019-2834"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Monthly In-Hand Income ($)</label>
                <input
                  type="number"
                  defaultValue="8500"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setAppliedModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-500/30"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
