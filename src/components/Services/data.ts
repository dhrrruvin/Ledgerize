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
        description: 'Record and manage financial transactions efficiently.',
    },
    {
        variant: 'info',
        icon: 'book-open',
        title: 'Setup Xero / QBO / MYOB',
        description: 'Streamline financial management with expert setup.',
    },
    {
        variant: 'info',
        icon: 'credit-card',
        title: 'Accounts Payable & Receivable',
        description: 'Management of accounts payable and receivable.',
    },
    {
        variant: 'info',
        icon: 'check-circle',
        title: 'Reconciliation',
        description: 'Ensure accurate matching of financial records.',
    },
    {
        variant: 'info',
        icon: 'pie-chart',
        title: 'Financial Reporting',
        description: 'Generate detailed financial insights and reports.',
    },
    {
        variant: 'info',
        icon: 'briefcase',
        title: 'Payroll Management',
        description: 'Handle employee compensation and tax compliance efficiently.',
    },
];

export { servicesData };