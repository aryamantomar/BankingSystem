import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { faqList } from '../data/bankingData';
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
    <div className="space-y-16 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#97144d]/30 to-amber-500/20 border border-[#97144d]/50 text-gold-300 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge & Help Portal</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-pink-100/70 max-w-xl mx-auto font-normal">
          Everything you need to know about NexBank accounts, limits, security, and loans.
        </p>

        {/* Search Bar matching diagram */}
        <div className="pt-4 max-w-xl mx-auto relative">
          <Search className="w-5 h-5 text-pink-300/60 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. transfer charges, open account, security)..."
            className="w-full bg-[#180411] border border-[#97144d]/40 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-pink-300/40 focus:outline-none focus:border-amber-400 shadow-xl"
          />
        </div>

        {/* Category Pills */}
        <div className="pt-2 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#97144d] to-[#c52e69] text-white shadow-md shadow-[#97144d]/30'
                  : 'bg-[#1b0513] text-pink-200 border border-[#97144d]/30 hover:border-pink-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion Questions List matching diagram */}
      <section className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 rounded-2xl bg-[#1d0514] border border-[#97144d]/40 text-center text-sm text-pink-200/60">
            No matching questions found for "{searchQuery}". Try searching with different keywords or ask our 24/7 AI chat.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#1b0513]/90 border border-[#97144d]/30 overflow-hidden transition-all duration-200 shadow-lg"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#25071a] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#97144d]/30 text-gold-300 border border-[#97144d]/50 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="p-1.5 rounded-xl bg-[#2a071c] text-pink-200 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-gold-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-sm text-pink-100/80 leading-relaxed border-t border-[#97144d]/20 bg-[#12030c]/70 animate-fadeIn font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* Still need help callout */}
      <section className="p-8 rounded-3xl bg-[#1d0514] border border-[#97144d]/40 text-center space-y-4 shadow-xl">
        <h3 className="text-xl font-black text-white">Couldn't find what you were searching for?</h3>
        <p className="text-xs sm:text-sm text-pink-200/70 max-w-md mx-auto font-normal">
          Our round-the-clock customer support officers and NexBot AI assistant are ready to assist you anytime.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setIsChatOpen(true)}
            className="btn-shimmer px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 hover:brightness-110 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat with NexBot Now</span>
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-2.5 rounded-xl bg-[#240616] hover:bg-[#34091f] text-pink-100 font-bold text-xs border border-[#97144d]/40"
          >
            Contact Customer Support Desk
          </button>
        </div>
      </section>

    </div>
  );
};
