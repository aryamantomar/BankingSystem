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
  ChevronRight
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const LoansPage: React.FC = () => {
  const { navigate, showToast } = useBanking();

  const loanTypes = [
    {
      id: 'home',
      title: 'Axis-Tier Home Loan',
      rate: '6.85% p.a.',
      maxAmount: '$2,500,000',
      tenure: 'Up to 30 Years',
      icon: <Home className="w-6 h-6 text-[#97144d]" />,
      features: ['Zero prepayment penalty', 'Doorstep document pickup', 'Quick sanction in 48 hours']
    },
    {
      id: 'education',
      title: 'Education Loan',
      rate: '8.10% p.a.',
      maxAmount: '$250,000',
      tenure: 'Up to 15 Years',
      icon: <GraduationCap className="w-6 h-6 text-[#97144d]" />,
      features: ['Covers 100% of tuition & living', 'Moratorium during course period', 'Zero collateral up to $75k']
    },
    {
      id: 'car',
      title: 'Auto / Car Loan',
      rate: '7.45% p.a.',
      maxAmount: '$150,000',
      tenure: 'Up to 7 Years',
      icon: <Car className="w-6 h-6 text-[#97144d]" />,
      features: ['Up to 100% on-road financing', 'Special discounts for electric vehicles', 'Instant digital sanction']
    },
    {
      id: 'business',
      title: 'Business Commercial Credit',
      rate: '9.20% p.a.',
      maxAmount: '$5,000,000',
      tenure: 'Up to 10 Years',
      icon: <Briefcase className="w-6 h-6 text-[#97144d]" />,
      features: ['Collateral-free micro loans available', 'Flexible hybrid overdraft limits', 'Tax deductible interest component']
    },
    {
      id: 'personal',
      title: 'Burgundy Personal Loan',
      rate: '9.50% p.a.',
      maxAmount: '$75,000',
      tenure: 'Up to 5 Years',
      icon: <User className="w-6 h-6 text-[#97144d]" />,
      features: ['Instant disbursal into account in 15 mins', 'Zero end-use restrictions', 'Minimal basic documentation']
    }
  ];

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenureYears, setTenureYears] = useState(5);

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
    showToast('Loan Application Submitted', `Thank you, ${applicantName || 'Applicant'}. Application ref #LN-${Math.floor(1000 + Math.random() * 9000)} is under review. Our Burgundy loan officer will contact you today!`, 'success');
  };

  return (
    <div className="space-y-24 pb-20 bg-[#fbf9fa]">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Competitive Borrowing Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
              Loan Details & Calculators
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mt-4 max-w-2xl mx-auto font-normal">
              Flexible financing crafted to turn your dreams into reality with transparent interest rates.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive EMI Calculator Section with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)] relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Axis-Style Loan EMI Calculator</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                Adjust amount, interest rate, and tenure to visualize your exact monthly payment obligations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Sliders */}
              <div className="lg:col-span-7 space-y-6">
                {/* Loan Amount */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-700">Loan Amount</span>
                    <span className="text-xl font-black text-[#97144d] font-mono">${loanAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="1000000"
                    step="5000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-[#97144d] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono font-bold">
                    <span>$5,000</span>
                    <span>$500,000</span>
                    <span>$1,000,000</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-700">Interest Rate (p.a.)</span>
                    <span className="text-xl font-black text-[#97144d] font-mono">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5.0"
                    max="20.0"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#97144d] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono font-bold">
                    <span>5%</span>
                    <span>12.5%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-700">Loan Tenure</span>
                    <span className="text-xl font-black text-[#97144d] font-mono">{tenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full accent-[#97144d] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono font-bold">
                    <span>1 Year</span>
                    <span>15 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </div>

              {/* Calculated Breakdown Card */}
              <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#fdf2f6] via-white to-[#faf0f5] border border-[#97144d]/30 text-center space-y-6 shadow-md">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#97144d]">Monthly Installment (EMI)</span>
                  <div className="text-4xl sm:text-5xl font-black text-[#97144d] mt-2 font-mono">
                    ${emi.toLocaleString()}
                    <span className="text-sm text-slate-500 font-sans font-normal"> / mo</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 space-y-3 text-left text-xs shadow-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Principal Amount</span>
                    <span className="text-slate-900 font-bold font-mono">${loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Total Interest Payable</span>
                    <span className="text-[#97144d] font-bold font-mono">${totalInterest.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex justify-between font-black text-sm">
                    <span className="text-slate-900">Total Repayment</span>
                    <span className="text-emerald-700 font-mono">${totalPayment.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => setAppliedModal(true)}
                  className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] via-[#ba1e63] to-[#ca8a04] hover:brightness-105 text-white font-black text-sm shadow-md shadow-[#97144d]/25 transition-all"
                >
                  Apply for this Loan in 2 Minutes
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Loan Categories Cards matching diagram with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900">Explore Our Loan Portfolios</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">Select any loan product to apply directly with low processing fees.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan, idx) => (
            <ScrollReveal key={loan.id} direction="up" delay={idx * 80}>
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#97144d]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md hover:-translate-y-2 h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#fdf2f6] group-hover:bg-[#97144d] border border-[#97144d]/20 flex items-center justify-center transition-all group-hover:scale-110">
                      <span className="text-[#97144d] group-hover:text-white transition-colors">{loan.icon}</span>
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#fdf2f6] text-[#97144d] border border-[#97144d]/20">
                      {loan.rate}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#97144d] transition-colors">
                    {loan.title}
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold">Max Limit</span>
                      <span className="font-bold text-slate-900 font-mono">{loan.maxAmount}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold">Tenure</span>
                      <span className="font-bold text-[#97144d] font-mono">{loan.tenure}</span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-xs text-slate-600 font-medium">
                    {loan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#97144d] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setAppliedModal(true);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#97144d] text-slate-800 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-200 hover:border-[#97144d]"
                  >
                    <span>Apply for {loan.title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Quick Application Modal */}
      {appliedModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl animate-scaleUp">
            <div className="text-center">
              <h3 className="text-xl font-black text-slate-900">Axis Burgundy Pre-Approval</h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">Estimated monthly repayment: ${emi}/mo</p>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  required
                  placeholder="e.g. Aryaman Tomar"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  required
                  placeholder="+1 (555) 019-2834"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Monthly In-Hand Income ($)</label>
                <input
                  type="number"
                  defaultValue="8500"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setAppliedModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-shimmer flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#97144d] to-[#ca8a04] hover:brightness-105 text-white text-xs font-black shadow-md shadow-[#97144d]/25"
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
