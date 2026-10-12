import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { faqList } from '../data/bankingData';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  Crown
} from 'lucide-react';

export const FaqPage: React.FC = () => {
  const { navigate, setIsChatOpen } = useBanking();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'Accounts', 'Transfers', 'Loans', 'Security', 'General'];

  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f8fafc] pt-8">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-6 md:pt-12 text-center space-y-4">
        <ScrollReveal direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Knowledge & Help Portal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-2">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-slate-600 max-w-xl mx-auto font-normal mt-2">
            Everything you need to know about NexBank accounts, limits, security, and loans.
          </p>

          {/* Search Bar matching diagram */}
          <div className="pt-6 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. transfer charges, open account, security)..."
              className="w-full bg-white dark:bg-[#180a14] border border-slate-200 dark:border-[#97144d]/30 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#97144d] shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#97144d] text-white shadow-md shadow-[#97144d]/20'
                    : 'bg-white dark:bg-[#180a14] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-[#97144d]/30 hover:border-[#97144d]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Accordion Questions List matching diagram */}
      <section className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 rounded-2xl bg-white dark:bg-[#150912] border border-slate-200 dark:border-[#97144d]/25 text-center text-sm text-slate-500 dark:text-slate-300 shadow-sm">
            No matching questions found for "{searchQuery}". Try searching with different keywords or ask our 24/7 AI chat.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 50}>
                <div
                  className="rounded-3xl bg-white dark:bg-[#150912] border border-slate-200/90 dark:border-[#97144d]/25 overflow-hidden transition-all duration-200 shadow-sm hover:border-[#97144d]/30"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-rose-50/40 dark:hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-[#fdf2f6] dark:bg-[#97144d]/25 text-[#97144d] dark:text-pink-300 border border-[#97144d]/20 shrink-0">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="p-1.5 rounded-xl bg-[#fdf2f6] dark:bg-[#97144d]/25 text-[#97144d] dark:text-pink-300 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-[#97144d]/20 bg-[#fdf8fa] dark:bg-[#180a14] animate-fadeIn font-normal">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })
        )}
      </section>

      {/* Still need help callout */}
      <section>
        <ScrollReveal direction="up">
          <div className="p-8 rounded-3xl bg-white dark:bg-[#150912] border border-slate-200/90 dark:border-[#97144d]/25 text-center space-y-4 shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)]">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">Couldn't find what you were searching for?</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto font-normal">
              Our round-the-clock customer support officers and NexBot AI assistant are ready to assist you anytime.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsChatOpen(true)}
                className="btn-shimmer px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#97144d] via-[#b01c5d] to-[#97144d] hover:brightness-110 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#97144d]/25"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with NexBot Now</span>
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200 transition-colors"
              >
                Contact Customer Support Desk
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
