import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserAccount, Transaction, SupportTicket, ToastNotification } from '../types';
import { defaultUser, defaultTransactions } from '../data/bankingData';

interface BankingContextType {
  user: UserAccount | null;
  isAuthenticated: boolean;
  transactions: Transaction[];
  tickets: SupportTicket[];
  toasts: ToastNotification[];
  currentRoute: string;
  navigate: (route: string) => void;
  login: (emailOrId: string, password?: string) => boolean;
  logout: () => void;
  openAccount: (formData: Partial<UserAccount>) => UserAccount;
  transferFunds: (amount: number, recipientName: string, recipientAcct: string, type: 'IMPS' | 'NEFT' | 'UPI' | 'RTGS') => boolean;
  payBill: (category: string, provider: string, amount: number) => boolean;
  createTicket: (data: { name: string; email: string; category: string; subject: string; message: string }) => string;
  showToast: (title: string, message: string, type?: ToastNotification['type']) => void;
  dismissToast: (id: string) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
}

const BankingContext = createContext<BankingContextType | undefined>(undefined);

export const BankingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load state from local storage or defaults
  const [user, setUser] = useState<UserAccount | null>(() => {
    const saved = localStorage.getItem('nexbank_user');
    return saved ? JSON.parse(saved) : defaultUser;
  });

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('nexbank_transactions');
    return saved ? JSON.parse(saved) : defaultTransactions;
  });

  const [tickets, setTickets] = useState<SupportTicket[]>(() => {
    const saved = localStorage.getItem('nexbank_tickets');
    return saved ? JSON.parse(saved) : [
      {
        id: 'TICK-8021',
        name: 'Aryaman Tomar',
        email: 'aryaman@nexbank.com',
        category: 'Card Services',
        subject: 'International Card Usage Activation',
        message: 'Requesting to enable zero-forex charges on European POS terminals.',
        status: 'In Progress',
        createdAt: 'Oct 11, 2026'
      }
    ];
  });

  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Simple, rock-solid Hash Route listener
  const getInitialRoute = () => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setCurrentRoute(hash || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: string) => {
    const cleanRoute = route.startsWith('/') ? route : `/${route}`;
    window.location.hash = cleanRoute;
    setCurrentRoute(cleanRoute);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('nexbank_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('nexbank_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('nexbank_transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('nexbank_tickets', JSON.stringify(tickets));
  }, [tickets]);

  const showToast = (title: string, message: string, type: ToastNotification['type'] = 'info') => {
    const id = 'toast_' + Math.random().toString(36).substring(2, 9);
    const newToast: ToastNotification = { id, title, message, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const login = (emailOrId: string) => {
    const mockUser: UserAccount = {
      ...defaultUser,
      email: emailOrId.includes('@') ? emailOrId : 'user@nexbank.com',
      name: emailOrId.includes('@') ? emailOrId.split('@')[0].toUpperCase() : 'Aryaman Tomar',
    };
    setUser(mockUser);
    showToast('Login Successful', `Welcome back, ${mockUser.name}!`, 'success');
    return true;
  };

  const logout = () => {
    setUser(null);
    showToast('Logged Out', 'You have been securely signed out of NexBank.', 'info');
    navigate('/');
  };

  const openAccount = (formData: Partial<UserAccount>): UserAccount => {
    const randomAcct = '4092 ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000);
    const randomCard = '4111 ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000);
    
    const newUser: UserAccount = {
      id: 'usr_' + Date.now().toString().slice(-4),
      name: formData.name || 'Valued Customer',
      email: formData.email || 'customer@nexbank.com',
      phone: formData.phone || '+1 800-000-0000',
      accountNumber: randomAcct,
      ifscCode: 'NEXB000' + Math.floor(1000 + Math.random() * 9000),
      accountType: formData.accountType || 'Savings',
      balance: formData.balance || 2500,
      joinedDate: 'Oct 2026',
      cardDetails: {
        cardNumber: randomCard,
        expiry: '10/31',
        cvv: String(Math.floor(100 + Math.random() * 900)),
        cardHolder: (formData.name || 'VALUED CUSTOMER').toUpperCase()
      }
    };

    setUser(newUser);
    // Add opening bonus/initial deposit transaction
    const initialTxn: Transaction = {
      id: 'TXN-' + Math.floor(1000 + Math.random() * 9000),
      type: 'credit',
      amount: newUser.balance,
      description: 'Initial Account Deposit',
      date: 'Just now',
      category: 'Deposit',
      status: 'Completed'
    };
    setTransactions([initialTxn]);

    showToast('Account Created!', `Welcome to NexBank, ${newUser.name}. Account #${newUser.accountNumber}`, 'success');
    return newUser;
  };

  const transferFunds = (amount: number, recipientName: string, recipientAcct: string, type: string) => {
    if (!user) {
      showToast('Authentication Required', 'Please log in to transfer funds.', 'warning');
      return false;
    }
    if (user.balance < amount) {
      showToast('Insufficient Balance', `You need at least $${amount.toFixed(2)} to complete this transfer.`, 'error');
      return false;
    }

    const newBalance = user.balance - amount;
    setUser({ ...user, balance: newBalance });

    const newTxn: Transaction = {
      id: 'TXN-' + Math.floor(1000 + Math.random() * 9000),
      type: 'debit',
      amount,
      description: `${type} Transfer to ${recipientName} (${recipientAcct})`,
      date: 'Just now',
      category: 'Transfer',
      recipient: recipientName,
      status: 'Completed'
    };

    setTransactions((prev) => [newTxn, ...prev]);
    showToast('Transfer Successful', `$${amount.toLocaleString()} sent via ${type} to ${recipientName}`, 'success');
    return true;
  };

  const payBill = (category: string, provider: string, amount: number) => {
    if (!user) {
      showToast('Authentication Required', 'Please log in to pay bills.', 'warning');
      return false;
    }
    if (user.balance < amount) {
      showToast('Insufficient Balance', `You need at least $${amount.toFixed(2)} to pay this bill.`, 'error');
      return false;
    }

    const newBalance = user.balance - amount;
    setUser({ ...user, balance: newBalance });

    const newTxn: Transaction = {
      id: 'TXN-' + Math.floor(1000 + Math.random() * 9000),
      type: 'debit',
      amount,
      description: `Bill Payment - ${provider} (${category})`,
      date: 'Just now',
      category: 'Bill Payment',
      recipient: provider,
      status: 'Completed'
    };

    setTransactions((prev) => [newTxn, ...prev]);
    showToast('Bill Payment Completed', `$${amount.toFixed(2)} paid to ${provider}`, 'success');
    return true;
  };

  const createTicket = (data: { name: string; email: string; category: string; subject: string; message: string }) => {
    const id = 'TICK-' + Math.floor(1000 + Math.random() * 9000);
    const newTicket: SupportTicket = {
      id,
      name: data.name,
      email: data.email,
      category: data.category,
      subject: data.subject,
      message: data.message,
      status: 'Open',
      createdAt: 'Just now'
    };

    setTickets((prev) => [newTicket, ...prev]);
    showToast('Complaint Registered', `Your support reference ID is #${id}. We will resolve this within 24h.`, 'success');
    return id;
  };

  return (
    <BankingContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        transactions,
        tickets,
        toasts,
        currentRoute,
        navigate,
        login,
        logout,
        openAccount,
        transferFunds,
        payBill,
        createTicket,
        showToast,
        dismissToast,
        isChatOpen,
        setIsChatOpen
      }}
    >
      {children}
    </BankingContext.Provider>
  );
};

export const useBanking = () => {
  const context = useContext(BankingContext);
  if (!context) {
    throw new Error('useBanking must be used within a BankingProvider');
  }
  return context;
};
