export interface ServiceData {
    variant: string;
    icon: string;
    title: string;
    description: string;
}

const servicesData: ServiceData[] = [
    {
        variant: 'info',
        icon: 'book',
        title: 'Virtual Bookkeeping',
        description: 'Accledgwise provides efficient cloud-based bookkeeping with standardized procedures, top accounting software, and custom reporting tools. We tailor our services to meet each client’s unique financial needs with precision.',
    },
    {
        variant: 'info',
        icon: 'book-open',
        title: 'Setup Xero / QBO / MYOB',
        description: 'Effortlessly set up Xero, QuickBooks Online (QBO), or MYOB with our expert guidance. We ensure seamless integration, accurate configuration, and compliance, optimizing your accounting system for efficiency, accuracy, and business growth.',
    },
    {
        variant: 'info',
        icon: 'credit-card',
        title: 'Accounts Payable & Receivable',
        description: 'Accounts Receivable manages billing, orders, aging analysis, collections, cash forecasting, and reporting, including overdue tracking, credit policies, and automated billing.\n\nAccounts Payable handles invoice digitization, secure storage, payment approvals, expense allocation, online payments, and vendor inquiries',
    },
    {
        variant: 'info',
        icon: 'check-circle',
        title: 'Reconciliation',
        description: 'We offer vendor invoice reconciliation, credit card and bank statement matching, cheque sequencing, and balance sheet reconciliation to enhance cash flow, track unsettled and overdue payments, and ensure financial accuracy.',
    },
    {
        variant: 'info',
        icon: 'pie-chart',
        title: 'Financial Reporting',
        description: 'Gain clarity with expert financial reporting. We provide accurate balance sheets, profit & loss statements, ensuring compliance, data-driven decisions, and business growth with precise, real-time financial insights.',
    },
    {
        variant: 'info',
        icon: 'briefcase',
        title: 'Payroll Management',
        description: 'Streamline payroll management with accurate processing, tax compliance, and timely payments. We handle wages, deductions, and reporting, ensuring error-free payroll, satisfied employees, and full regulatory compliance for your business.',
    },
];

export { servicesData };
