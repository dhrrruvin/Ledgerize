export interface WhyLedgerizeData{
     icon: string;
     title: string;
}

export interface CoreValueData{
     icon: string;
     title: string;
}

const whyLedgerizesData: WhyLedgerizeData[] = [
     {
          icon: 'trending-down',
          title: 'Cost Efficiency',
     },
     {
          icon: 'cpu',
          title: 'Software Experts',
     },
     {
          icon: 'bar-chart-2',
          title: 'Experienced Professionals',
     },
     {
          icon: 'settings',
          title: 'Customizable Solutions',
     },
     {
          icon: 'arrow-up-right',
          title: 'Scalability',
     },
     {
          icon: 'target',
          title: 'Enhanced Accuracy',
     },
]

const coreValuesData: CoreValueData[] = [
     {
          icon: 'users',
          title: 'Integrity and Confidentiality',
     },
     {
          icon: 'users',
          title: 'Accountability',
     },
     {
          icon: 'eye',
          title: 'Security and Compliance',
     },
     {
          icon: 'cpu',
          title: 'Effective Communication',
     },
     {
          icon: 'clock',
          title: 'Timeliness',
     },
     {
          icon: 'dollar-sign',
          title: 'Affordable Pricing',
     },
]

export {whyLedgerizesData, coreValuesData}