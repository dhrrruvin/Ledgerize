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
        description: 'Streamline your finances with expert virtual bookkeeping. We offer precise reconciliations, tax preparation, payroll, and financial reporting—secure, efficient, and cost-effective solutions tailored to your business needs.',
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
        description: 'Optimize cash flow with expert Accounts Payable & Receivable management. We ensure timely payments, accurate invoicing, and seamless reconciliation, enhancing efficiency, reducing errors, and improving your business’s financial health.',
    },
    {
        variant: 'info',
        icon: 'check-circle',
        title: 'Reconciliation',
        description: 'Ensure accuracy with expert reconciliation services. We match transactions, identify discrepancies, and maintain error-free financial records, enhancing cash flow, compliance, and decision-making for a seamless accounting process',
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