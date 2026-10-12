import { FaqItem, Transaction, UserAccount } from '../types';

export const defaultUser: UserAccount = {
  id: 'usr_8921',
  name: 'Aryaman Tomar',
  email: 'aryaman@nexbank.com',
  phone: '+1 (555) 349-8201',
  accountNumber: '4092 8812 7731',
  ifscCode: 'NEXB0001092',
  accountType: 'Savings',
  balance: 34850.75,
  joinedDate: 'Jan 2024',
  cardDetails: {
    cardNumber: '4111 8892 3421 9081',
    expiry: '09/29',
    cvv: '821',
    cardHolder: 'ARYAMAN TOMAR'
  }
};

export const defaultTransactions: Transaction[] = [
  {
    id: 'TXN-9021',
    type: 'credit',
    amount: 4500.00,
    description: 'Direct Deposit - Global Tech Corp Payroll',
    date: 'Today, 09:30 AM',
    category: 'Salary',
    status: 'Completed'
  },
  {
    id: 'TXN-9020',
    type: 'debit',
    amount: 142.50,
    description: 'Electric Utility Bill Autopay',
    date: 'Yesterday, 04:15 PM',
    category: 'Bill Payment',
    recipient: 'PowerGrid Utilities',
    status: 'Completed'
  },
  {
    id: 'TXN-9019',
    type: 'debit',
    amount: 850.00,
    description: 'Instant Transfer via IMPS to John Doe',
    date: 'Oct 10, 2026',
    category: 'Transfer',
    recipient: 'John Doe (Acct ...8841)',
    status: 'Completed'
  },
  {
    id: 'TXN-9018',
    type: 'credit',
    amount: 220.00,
    description: 'Quarterly Savings Interest Credit',
    date: 'Oct 01, 2026',
    category: 'Deposit',
    status: 'Completed'
  },
  {
    id: 'TXN-9017',
    type: 'debit',
    amount: 500.00,
    description: 'Automated SIP Investment - NexAlpha Fund',
    date: 'Sep 28, 2026',
    category: 'Investment',
    recipient: 'NexAlpha Mutual Fund',
    status: 'Completed'
  }
];

export const faqList: FaqItem[] = [
  {
    category: 'Accounts',
    question: 'How do I open an account with NexBank?',
    answer: 'You can open a digital savings or current account in less than 3 minutes online! Click on "Open Account" in the top menu, fill in your basic personal details, verify your phone and identity, and your account number with a virtual debit card will be instantly generated.'
  },
  {
    category: 'Transfers',
    question: 'What are the charges for fund transfers?',
    answer: 'NexBank offers zero charges on all standard domestic fund transfers including NEFT, RTGS, IMPS, and instant UPI. International wire transfers have a flat $12 administrative fee with real-time mid-market currency exchange rates.'
  },
  {
    category: 'Loans',
    question: 'How do I apply for a personal or home loan?',
    answer: 'Navigate to our Loans page, calculate your estimated monthly installment (EMI) using our interactive calculator, and submit your preliminary application. Approvals are typically processed within 24 to 48 hours.'
  },
  {
    category: 'Security',
    question: 'Is my money and personal data secure with NexBank?',
    answer: 'Absolutely. NexBank utilizes military-grade AES-256 bit end-to-end encryption, multi-factor biometric authentication, real-time AI fraud monitoring, and deposits are insured up to $250,000 by standard deposit insurance regulations.'
  },
  {
    category: 'General',
    question: 'How do I contact customer support 24/7?',
    answer: 'Our customer care team is available around the clock through our in-app Live Chat, toll-free telephone hotline (+1 800-NEX-BANK), email (support@nexbank.com), or at any of our 250+ branch locations.'
  },
  {
    category: 'Accounts',
    question: 'What is the minimum balance requirement for a Savings Account?',
    answer: 'Our Digital High-Yield Savings Account features a $0 minimum balance requirement with no monthly maintenance fees and earns up to 5.25% APY.'
  },
  {
    category: 'Transfers',
    question: 'What is the daily transfer limit on online banking?',
    answer: 'By default, accounts have a daily online limit of $50,000 for transfers. You can securely adjust this limit within your account security dashboard at any time.'
  }
];

export const branchesData = [
  {
    city: 'New York (Headquarters)',
    address: '450 Lexington Ave, Suite 3200, New York, NY 10017',
    phone: '+1 (212) 555-0199',
    hours: 'Mon - Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 2:00 PM'
  },
  {
    city: 'San Francisco Financial District',
    address: '555 California St, Suite 1800, San Francisco, CA 94104',
    phone: '+1 (415) 555-0144',
    hours: 'Mon - Fri: 9:00 AM - 5:00 PM'
  },
  {
    city: 'Chicago Downtown',
    address: '200 S Wacker Dr, 14th Floor, Chicago, IL 60606',
    phone: '+1 (312) 555-0182',
    hours: 'Mon - Fri: 9:00 AM - 5:00 PM, Sat: 10:00 AM - 1:00 PM'
  },
  {
    city: 'London Tech Hub',
    address: '25 Bank Street, Canary Wharf, London E14 5JP, UK',
    phone: '+44 20 7946 0912',
    hours: 'Mon - Fri: 9:00 AM - 5:00 PM GMT'
  }
];
