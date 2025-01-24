export interface ServiceData {
    icon: string;
    title: string;
    description: string;
}

const servicesData: ServiceData[] = [
    {
        icon: 'book',
        title: 'Virtual Bookkeeping',
        description: 'Record and manage financial transactions efficiently.',
    },
    {
        icon: 'book-open',
        title: 'Setup Xero / QBO / MYOB',
        description: 'Streamline financial management with expert setup.',
    },
    {
        icon: 'credit-card',
        title: 'Accounts Payable',
        description: 'Manage invoices and payments seamlessly.',
    },
    {
        icon: 'dollar-sign',
        title: 'Accounts Receivables',
        description: 'Track and collect customer payments effectively.',
    },
    {
        icon: 'check-circle',
        title: 'Reconciliation',
        description: 'Ensure accurate matching of financial records.',
    },
    {
        icon: 'pie-chart',
        title: 'Financial Reporting',
        description: 'Generate detailed financial insights and reports.',
    },
    {
        icon: 'briefcase',
        title: 'Payroll Management',
        description: 'Handle employee compensation and tax compliance efficiently.',
    },
];

export { servicesData };