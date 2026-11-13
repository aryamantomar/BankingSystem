import React from 'react';
import { BankingProvider, useBanking } from './context/BankingContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';
import { LiveChatModal } from './components/LiveChatModal';
import { VideoTourModal } from './components/VideoTourModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PersonalBankingPage } from './pages/PersonalBankingPage';
import { BusinessBankingPage } from './pages/BusinessBankingPage';
import { ServicesPage } from './pages/ServicesPage';
import { SupportPage } from './pages/SupportPage';
import { AuthPage } from './pages/AuthPage';
import { AccountOpeningPage } from './pages/AccountOpeningPage';
import { LoansPage } from './pages/LoansPage';
import { InvestmentsPage } from './pages/InvestmentsPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { DashboardPage } from './pages/DashboardPage';

const PageRenderer: React.FC = () => {
  const { currentRoute } = useBanking();

  // Route router matching exactly the sitemap diagram
  switch (currentRoute) {
    case '/':
      return <HomePage />;
    case '/about':
      return <AboutPage />;
    case '/personal':
      return <PersonalBankingPage />;
    case '/business':
      return <BusinessBankingPage />;
    case '/services':
      return <ServicesPage />;
    case '/support':
      return <SupportPage />;
    case '/login':
    case '/signup':
      return <AuthPage />;
    case '/open-account':
      return <AccountOpeningPage />;
    case '/loans':
      return <LoansPage />;
    case '/investments':
      return <InvestmentsPage />;
    case '/contact':
      return <ContactPage />;
    case '/faq':
      return <FaqPage />;
    case '/terms':
      return <TermsPage />;
    case '/privacy':
      return <PrivacyPage />;
    case '/dashboard':
      return <DashboardPage />;
    case '/404':
      return <NotFoundPage />;
    default:
      return <NotFoundPage />;
  }
};

export function App() {
  return (
    <BankingProvider>
      <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0c0409] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-[#97144d] selection:text-white transition-colors duration-200">
        <Navbar />
        <main className="flex-1">
          <PageRenderer />
        </main>
        <Footer />
        <ToastContainer />
        <LiveChatModal />
        <VideoTourModal />
      </div>
    </BankingProvider>
  );
}

export default App;
