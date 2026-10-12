export interface UserAccount {
  id: string;
  name: string;
  email: string;
  phone: string;
  accountNumber: string;
  ifscCode: string;
  accountType: 'Savings' | 'Current' | 'Salary' | 'Corporate';
  balance: number;
  joinedDate: string;
  cardDetails: {
    cardNumber: string;
    expiry: string;
    cvv: string;
    cardHolder: string;
  };
}

export interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  category: 'Transfer' | 'Bill Payment' | 'Deposit' | 'Shopping' | 'Salary' | 'Recharge' | 'Investment';
  recipient?: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

export interface SupportTicket {
  id: string;
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  createdAt: string;
}

export interface ToastNotification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Accounts' | 'Transfers' | 'Loans' | 'Security';
}
