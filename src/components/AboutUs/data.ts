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
          icon: 'user-check',
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
          icon: 'shield',
          title: 'Integrity and Confidentiality',
     },
     {
          icon: 'clipboard',
          title: 'Accountability',
     },
     {
          icon: 'eye',
          title: 'Security and Compliance',
     },
     {
          icon: 'message-square',
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