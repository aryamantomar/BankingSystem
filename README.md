# NexBank - Modern Banking for a Brighter Tomorrow

A fully functional, responsive, modern digital banking web application engineered strictly according to the **NexBank Website Structure & Sitemap** blueprint.

---

## 🧭 Sitemap & Architecture Implementation

All 15 routes specified in the system diagram are fully implemented:

### 1. Primary Navigation Routes
* **Home (`/`)**: Hero banner with CTA (*Get Started*), mobile app preview graphic, 4 key badges (*Secure Banking, Instant Transfers, 24/7 Support, Smart Banking*), and *"Why Choose NexBank?"* grid.
* **About Us (`/about`)**: Company vision, headquarters visual, and the 3 core pillars: *Our Mission*, *Our Vision*, *Our Values*, leadership cards, and milestones.
* **Personal Banking (`/personal`)**: The 5 personal banking pillars: *Savings Account (5.25% APY)*, *Current Account*, *Fixed Deposit*, *Loans*, and *Debit & Credit Cards (NexCard Metal)* with interactive FD calculator.
* **Business Banking (`/business`)**: The 5 commercial pillars: *Business Accounts*, *Business Loans*, *Trade Finance*, *Merchant Services*, and *Corporate Banking*, with developer REST API preview.
* **Our Services (`/services`)**: The 6 core services: *Funds Transfer (NEFT/RTGS/IMPS/UPI)*, *Bill Payments*, *Recharge*, *Investments*, *Insurance*, and *Locker Services* — with **live interactive simulators**.
* **Customer Support (`/support`)**: The 5 support pillars: *FAQs*, *Contact Us*, *Raise a Complaint (with instant ticket ID generation)*, *Track Request (real-time ticket tracker)*, and *24/7 Live Chat*.
* **Authentication (`/login` & `/signup`)**: Modal/card matching the wireframe with Email/Customer ID, Password toggle, 1-Click Demo Login, and FDIC trust badges.

### 2. Other Important Pages
* **Account Opening (`/open-account`)**: 3-step digital onboarding wizard generating instant Account Numbers, IFSC codes, initial balances, and virtual debit cards.
* **Loan Details (`/loans`)**: Home, Education, Car, and Business Loans with an **interactive real-time EMI Calculator** (Principal, Rate, Tenure).
* **Investment & Wealth (`/investments`)**: Mutual Funds, Fixed Deposits, Bonds, and Digital Gold with an **interactive SIP Wealth Calculator**.
* **Contact Us & Branches (`/contact`)**: Global offices, email, toll-free lines, interactive branch selector, and message dispatch.
* **FAQ (`/faq`)**: Searchable accordion knowledge base answering questions from the wireframe.
* **Terms & Conditions (`/terms`)**: Legal compliance, electronic banking agreements, and regulatory disclosures.
* **Privacy Policy (`/privacy`)**: AES-256 cryptographic standards, GLBA/GDPR disclosures, and user rights.
* **404 Page (`/404`)**: Error page matching wireframe with "Go to Home" CTA.
* **Online Banking Dashboard (`/dashboard`)**: Logged-in user banking portal with available balance, cashflow metrics, virtual metal card toggle (reveal CVV/number & freeze card), and real-time transaction history.

---

## ⚡ Tech Stack

* **Framework**: React 18 + TypeScript + Vite
* **Styling**: Tailwind CSS with custom glassmorphism and gradients
* **Icons**: Lucide React
* **State Management**: React Context (`BankingContext`) with LocalStorage persistence

---

## 🚀 Running the Project

### Development Server:
```bash
cd /home/aryaman-tomar/Desktop/nexbank
npm run dev
```

### Production Build & Preview:
```bash
cd /home/aryaman-tomar/Desktop/nexbank
npm run build
npm run preview
```
