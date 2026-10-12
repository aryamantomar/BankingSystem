import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const LiveChatModal: React.FC = () => {
  const { isChatOpen, setIsChatOpen, user } = useBanking();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: `Namaste & Welcome! I'm NexBot, your 24/7 AI banking concierge. How can I assist you with your NexBank Burgundy account today?`,
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    'Check my balance',
    'What are loan interest rates?',
    'How do I transfer funds?',
    'Burgundy debit card perks'
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: text.trim(),
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    setTimeout(() => {
      const lower = text.toLowerCase();
      let reply = "I understand your query. Our senior Burgundy relationship desk has been notified. You can also reach our 24/7 helpline at +1 800-NEX-BANK.";

      if (lower.includes('balance')) {
        if (user) {
          reply = `Your current primary NexBank Savings Account balance is $${user.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}.`;
        } else {
          reply = "Please sign in to your NexBank account to view your live balance, or click 'Login' on the top bar.";
        }
      } else if (lower.includes('loan') || lower.includes('interest')) {
        reply = "NexBank offers Home Loans starting at 6.85% p.a., Education Loans at 8.10% p.a., and Personal Loans at 9.50% p.a. Check our interactive EMI Calculator on the Loans page!";
      } else if (lower.includes('transfer') || lower.includes('imps') || lower.includes('neft') || lower.includes('upi')) {
        reply = "You can execute zero-fee transfers instantly via IMPS, UPI, NEFT, or RTGS from your Dashboard or the Services page!";
      } else if (lower.includes('card') || lower.includes('burgundy') || lower.includes('perk')) {
        reply = "NexBank Burgundy Metal Card offers 5% cashback on travel, complimentary worldwide airport lounge visits, zero foreign exchange markup, and dining discounts!";
      } else if (lower.includes('open') || lower.includes('account')) {
        reply = "You can open an instant digital Burgundy savings or current account in 3 minutes! Click 'Open Account' on the top bar.";
      }

      const botReply: ChatMessage = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'bot',
        text: reply,
        time: 'Just now'
      };
      setMessages((prev) => [...prev, botReply]);
    }, 600);
  };

  return (
    <>
      {/* Floating launcher trigger */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-[#97144d] via-[#c52e69] to-[#ca8a04] text-white shadow-xl shadow-[#97144d]/35 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center gap-2 group border border-white/40"
        aria-label="Open Live Chat"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
        <span className="text-sm font-bold pr-1 hidden sm:inline">24/7 Burgundy Assist</span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping"></span>
      </button>

      {/* Chat Window Modal in Light Mode */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] sm:w-[400px] h-[540px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scaleUp">
          
          {/* Header */}
          <div className="p-4 bg-[#97144d] text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-amber-300 shadow-sm">
                  <Bot className="w-5 h-5 text-amber-200" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#97144d]"></span>
              </div>
              <div>
                <h4 className="text-sm font-black text-white flex items-center gap-1.5">
                  NexBot Concierge
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </h4>
                <p className="text-[11px] text-pink-100 flex items-center gap-1">
                  Burgundy Priority • Instant AI
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#faf7f9]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-[#97144d]/10 border border-[#97144d]/20 flex items-center justify-center text-[#97144d] shrink-0 font-bold">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#97144d] text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className={`text-[10px] block mt-1 ${msg.sender === 'user' ? 'text-pink-200 text-right' : 'text-slate-400'}`}>
                    {msg.time}
                  </span>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-white shrink-0 font-bold">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="p-2 border-t border-slate-200 bg-white flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap text-[11px] px-3 py-1 rounded-full bg-[#fdf2f6] hover:bg-[#97144d] text-[#97144d] hover:text-white border border-[#97144d]/20 transition-all font-semibold shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about Burgundy perks, FD rates, loans..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#97144d] focus:bg-white transition-all"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#97144d] hover:bg-[#740e3a] text-white transition-all shadow-md shadow-[#97144d]/20"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
