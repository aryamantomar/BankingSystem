import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  Wallet, 
  SendHorizontal, 
  Receipt, 
  CreditCard, 
  Download, 
  ShieldCheck, 
  Lock, 
  Unlock, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Copy, 
  Eye, 
  EyeOff, 
  Check, 
  Sparkles,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user, transactions, transferFunds, payBill, showToast, navigate } = useBanking();

  const [filterType, setFilterType] = useState<'all' | 'credit' | 'debit'>('all');
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [cardFrozen, setCardFrozen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Quick Action Modal states
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [transferAmount, setTransferAmount] = useState('500');
  const [recipientName, setRecipientName] = useState('David Miller');
  const [recipientAcct, setRecipientAcct] = useState('4092 1198 4402');

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 text-center">
        <div className="max-w-md p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-xl font-bold text-white">Sign In Required</h2>
          <p className="text-xs text-slate-400">Please authenticate to view your personal banking dashboard.</p>
          <button
            onClick={() => navigate('/login')}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleCopyAccount = () => {
    navigator.clipboard?.writeText(user.accountNumber.replace(/\s/g, ''));
    setCopied(true);
    showToast('Copied to Clipboard', `Account Number ${user.accountNumber} copied.`, 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(transferAmount);
    if (isNaN(amt) || amt <= 0) return;
    const ok = transferFunds(amt, recipientName, recipientAcct, 'IMPS');
    if (ok) {
      setShowTransferModal(false);
    }
  };

  const handleDownloadStatement = () => {
    showToast('Statement Generated', 'Your October 2026 Monthly Statement PDF has been downloaded.', 'success');
  };

  const filteredTransactions = transactions.filter((t) => {
    if (filterType === 'credit') return t.type === 'credit';
    if (filterType === 'debit') return t.type === 'debit';
    return true;
  });

  return (
    <div className="space-y-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-slate-900 border border-blue-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">NexBank Online Portal</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Welcome, {user.name}
          </h1>
          <p className="text-xs text-slate-400">
            Account #{user.accountNumber} • IFSC: {user.ifscCode} • Member since {user.joinedDate}
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowTransferModal(true)}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md shadow-blue-500/25 transition-all flex items-center gap-1.5"
          >
            <SendHorizontal className="w-4 h-4" />
            <span>Send Money</span>
          </button>
          <button
            onClick={() => navigate('/services')}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Receipt className="w-4 h-4" />
            <span>Pay Bills</span>
          </button>
          <button
            onClick={handleDownloadStatement}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Statement PDF</span>
          </button>
        </div>
      </div>

      {/* Account Balances & Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Account Summary Metrics */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Total Balance Card */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold text-slate-400">Available Balance</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>
              <div className="mt-3">
                <h2 className="text-3xl font-black text-white font-mono tracking-tight">
                  ${user.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </h2>
                <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Earning 5.25% Annual Percentage Yield</span>
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Account Type: <strong className="text-slate-200">{user.accountType}</strong></span>
                <button onClick={handleCopyAccount} className="hover:text-white flex items-center gap-1">
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Acct'}</span>
                </button>
              </div>
            </div>

            {/* Monthly In/Out Cashflow Card */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-semibold text-slate-400">October Cash Flow</span>
              <div className="mt-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1">
                    <ArrowDownLeft className="w-3.5 h-3.5 text-emerald-400" /> Total Inflow
                  </span>
                  <span className="font-bold text-emerald-400 font-mono">+$4,720.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1">
                    <ArrowUpRight className="w-3.5 h-3.5 text-rose-400" /> Total Outflow
                  </span>
                  <span className="font-bold text-rose-400 font-mono">-$1,492.50</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
                  <span>Net Savings Rate</span>
                  <span className="font-bold text-cyan-400">+68.3%</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Transfer Form Shortcut */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Instant One-Click Transfer</h3>
              <span className="text-xs text-blue-400 font-semibold">Zero Fee Rails</span>
            </div>

            <form onSubmit={handleQuickTransfer} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="Recipient Name"
                required
                className="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
              />
              <input
                type="number"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="Amount ($)"
                required
                className="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 font-bold"
              />
              <button
                type="submit"
                className="py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
              >
                <SendHorizontal className="w-3.5 h-3.5" />
                <span>Send ${transferAmount}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right: Interactive Debit Card Widget */}
        <div className="lg:col-span-5 space-y-4">
          <div className={`p-6 rounded-3xl border transition-all relative overflow-hidden shadow-2xl ${
            cardFrozen
              ? 'bg-slate-900 border-rose-500/40 opacity-75'
              : 'bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-950 border-blue-500/30'
          }`}>
            <div className="flex justify-between items-center text-xs text-white">
              <span className="font-extrabold tracking-wider">NexBank Metal Platinum</span>
              <CreditCard className="w-5 h-5 text-blue-200" />
            </div>

            <div className="mt-8 space-y-1">
              <span className="text-[10px] text-blue-200 uppercase tracking-wider">Card Number</span>
              <div className="text-lg sm:text-xl font-mono font-bold tracking-widest text-white flex items-center justify-between">
                <span>
                  {showCardNumber
                    ? user.cardDetails.cardNumber
                    : '4111 •••• •••• ' + user.cardDetails.cardNumber.slice(-4)}
                </span>
                <button
                  onClick={() => setShowCardNumber(!showCardNumber)}
                  className="text-blue-200 hover:text-white p-1"
                >
                  {showCardNumber ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-end text-xs text-blue-200">
              <div>
                <span className="text-[9px] uppercase block text-blue-300">Cardholder</span>
                <span className="font-bold text-white tracking-wider">{user.cardDetails.cardHolder}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase block text-blue-300">Expires</span>
                <span className="font-mono text-white font-bold">{user.cardDetails.expiry}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase block text-blue-300">CVV</span>
                <span className="font-mono text-white font-bold">{showCardNumber ? user.cardDetails.cvv : '•••'}</span>
              </div>
            </div>

            {cardFrozen && (
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center flex-col gap-2">
                <Lock className="w-8 h-8 text-rose-400" />
                <span className="text-sm font-bold text-rose-300 uppercase tracking-wider">Card Frozen</span>
              </div>
            )}
          </div>

          {/* Card Controls */}
          <div className="flex gap-2 text-xs">
            <button
              onClick={() => {
                setCardFrozen(!cardFrozen);
                showToast(
                  cardFrozen ? 'Card Unfrozen' : 'Card Frozen',
                  cardFrozen ? 'Your card is now active for purchases.' : 'Card temporarily blocked from authorizations.',
                  cardFrozen ? 'success' : 'warning'
                );
              }}
              className={`flex-1 py-2.5 rounded-xl border font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                cardFrozen
                  ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-600/30'
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/20 hover:bg-rose-500/20'
              }`}
            >
              {cardFrozen ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
              <span>{cardFrozen ? 'Unfreeze Card' : 'Freeze Card'}</span>
            </button>

            <button
              onClick={() => showToast('Limits Updated', 'Daily contactless and online limit set to $5,000.', 'info')}
              className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700 font-semibold transition-colors text-center"
            >
              Adjust Limits
            </button>
          </div>
        </div>

      </div>

      {/* Transaction History Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Live Transaction History</h3>
            <p className="text-xs text-slate-400">Showing recent activity across all linked payment channels.</p>
          </div>

          <div className="flex gap-2">
            {(['all', 'credit', 'debit'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setFilterType(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                  filterType === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Transaction / Description</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredTransactions.map((t) => (
                <tr key={t.id} className="hover:bg-slate-850/60 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        t.type === 'credit'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {t.type === 'credit' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{t.description}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{t.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-400">{t.category}</td>
                  <td className="py-3.5 px-4 text-slate-400">{t.date}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {t.status}
                    </span>
                  </td>
                  <td className={`py-3.5 px-4 text-right font-mono font-bold text-sm ${
                    t.type === 'credit' ? 'text-emerald-400' : 'text-slate-200'
                  }`}>
                    {t.type === 'credit' ? '+' : '-'}${t.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
