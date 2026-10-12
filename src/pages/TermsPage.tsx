import React from 'react';
import { useBanking } from '../context/BankingContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { Scale, ArrowLeft } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const { navigate } = useBanking();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10 text-slate-700 font-normal bg-[#fbf9fa]">
      
      {/* Header matching diagram */}
      <ScrollReveal direction="down">
        <div className="space-y-3">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#97144d] hover:text-[#740e3a] mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Legal & Regulatory Framework</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Terms & Conditions</h1>
          <p className="text-xs text-slate-500">
            Last updated: October 1, 2026 • Effective for all personal and business NexBank accounts.
          </p>
        </div>
      </ScrollReveal>

      {/* Structured Legal Content */}
      <ScrollReveal direction="up">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#150912] border border-slate-200/90 dark:border-[#97144d]/25 space-y-8 text-sm leading-relaxed shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)]">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#fdf2f6] text-[#97144d] flex items-center justify-center text-xs font-black border border-[#97144d]/20">1</span>
              Acceptance of Banking Agreement
            </h2>
            <p className="text-slate-600">
              By establishing, accessing, or maintaining an account with NexBank National Association ("NexBank", "we", "us"), you acknowledge that you have read, understood, and agreed to be bound by these Electronic Banking Terms and Conditions, all schedule fee disclosures, and applicable federal and state banking laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#fdf2f6] text-[#97144d] flex items-center justify-center text-xs font-black border border-[#97144d]/20">2</span>
              Account Eligibility & Verification (KYC / CIP)
            </h2>
            <p className="text-slate-600">
              To help fight the funding of terrorism and money laundering activities, federal regulations require all financial institutions to obtain, verify, and record identity documentation for each person who opens an account. We require your legal name, physical residential address, date of birth, taxpayer identification number, and biometric liveness verification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#fdf2f6] text-[#97144d] flex items-center justify-center text-xs font-black border border-[#97144d]/20">3</span>
              Funds Transfers & Settlement Rules
            </h2>
            <p className="text-slate-600">
              NexBank facilitates electronic fund transfers via NEFT, RTGS, IMPS, ACH, and UPI networks. Standard cut-off times apply for same-day settlements. In the event of inadvertent incorrect beneficiary account entry by the user, NexBank will execute best-effort recall protocols but holds no strict liability for irrevocable third-party settlements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#fdf2f6] text-[#97144d] flex items-center justify-center text-xs font-black border border-[#97144d]/20">4</span>
              Security Credentials & Unauthorized Access
            </h2>
            <p className="text-slate-600">
              You are exclusively responsible for maintaining the confidentiality of your credentials, password, and multi-factor authorization tokens. If you suspect any fraudulent transactions or lost debit cards, you must immediately report the event via our 24/7 hotline or toggle the card freeze control within your client dashboard.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#fdf2f6] text-[#97144d] flex items-center justify-center text-xs font-black border border-[#97144d]/20">5</span>
              Deposit Insurance Coverage
            </h2>
            <p className="text-slate-600">
              All consumer deposit balances maintained in qualifying savings and current accounts at NexBank are insured by the Federal Deposit Insurance Corporation (FDIC) up to the standard statutory maximum limit of $250,000 per depositor.
            </p>
          </section>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>NexBank Regulatory Charter Ref #NB-FDIC-98124</span>
            <button onClick={() => navigate('/privacy')} className="text-[#97144d] hover:underline font-bold">
              Read Privacy Policy →
            </button>
          </div>

        </div>
      </ScrollReveal>

    </div>
  );
};
