export interface ResourceData{
     icon: string;
     title: string;     
     discription?: {
          description1?: {
               link?: {
                    isLink: boolean;
                    linkId?: string;
               };
               text: string;               
          };
          description2?: {
               link?: {
                    isLink: boolean;
                    linkId?: string;
               };
               text: string;               
          };
          description3?: {
               link?: {
                    isLink: boolean;
                    linkId?: string;
               };
               text: string;               
          };
          description4?: {
               link?: {
                    isLink: boolean;
                    linkId?: string;
               };
               text: string;               
          };
     }
     text?: string;
     isCalculate: boolean;
     path: string;
}

const resourcesData: ResourceData[] = [
     {
          icon: 'calculator',
          title: 'EMI Calculator',
          text: 'EMI Calculator is an online tool that helps you to calculate the EMI of your Loan. It is an easy to use tool, which compute EMI by using following details: loan amount, interest rate, loan tenure. You can change the inputs to know the different EMI amount and It saves you from a confusing manual calculation process. ',
          isCalculate: true,
          path:'/home/resources/EMICalculator',
     },
     {
          icon: 'abc',
          title: 'Super Guaranty Contributions Calculator',
          discription: {
               description1: {
                    link: {
                         isLink: true,
                         linkId:'https://www.ato.gov.au/single-page-applications/calculatorsandtools?anchor=SuperGuaranteeContributions&anchor=SuperGuaranteeContributions/questions&anchor=SuperGuaranteeContributions/questions&anchor=SuperGuaranteeContributions/questions#SuperGuaranteeContributions/questions'
                    },
                    text: 'Under Australian legislation, generally your employer must pay 11.5% of your salary into a super fund. It’s designed to help you build up and save for retirement. Use this tool to work out how much super you need to contribute for your eligible employees.'
               }
          },
          isCalculate: false,
          path:'/',
     },
     {
          icon: 'abc',
          title: 'Tax Withhelds for Individulas Calculator',
          discription: {
               description1: {
                    link: {
                         isLink: true,
                         linkId:'https://www.ato.gov.au/single-page-applications/calculatorsandtools?anchor=TWC#TWC/questions'
                    },
                    text: 'Use this tool to estimate the federal income tax you want your employer to withhold from your paycheck. This is tax withholding. See how your withholding affects your refund, take-home pay or tax due.'
               }
          },
          isCalculate: false,
          path:'/',
     },
     {
          icon: 'abc',
          title: 'Goverment Website',
          discription: {
               description1: {
                    link: {
                         isLink: true,
                         linkId:'https://www.ato.gov.au/'
                    },
                    text: '•	ATO (Australian Tax Office) -  lodge GST returns, Income tax returns, IAS, Superannuation '
               },               
               description2: {
                    link: {
                         isLink: true,
                         linkId:'https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/payroll-tax/lodge-and-pay-returns/annual-return/'
                    },
                    text: '•	Revenue NSW - Lodge your annual return for payroll tax '
               },         
               description3: {
                    link: {
                         isLink: true,
                         linkId:'https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/payroll-tax/lodge-and-pay-returns/monthly-return'
                    },
                    text: '•	Revenue NSW - Calculate and pay your monthly payroll tax return '
               },
               description4: {
                    link: {
                         isLink: true,
                         linkId: 'https://qro.qld.gov.au/payroll-tax/returns/'
                    },
                    text: '•	Queensland Government - Lodging and paying payroll tax returns '
               }
          },
          isCalculate: false,
          path:'/',
     },
     {
          icon: 'abc',
          title: 'Act & Laws References',
          discription: {
               description1: {
                    link: {
                         isLink: true,
                         linkId:'https://treasury.gov.au/sites/default/files/2019-03/Explanatory-Material-A-New-Tax-System.pdf'
                    },
                    text: '• GST Act 1999 '
               },
               description2: {
                    link: {
                         isLink: true,
                         linkId:'https://legislation.nsw.gov.au/view/whole/html/2002-12-12/act-1971-022#:~:text=An%20Act%20to%20impose%20a,and%20for%20purposes%20connected%20therewith'
                    },
                    text: '• Payroll tax act 1971 '
               },
               description3: {
                    link: {
                         isLink: true,
                         linkId:'https://treasury.gov.au/programs-and-initiatives-superannuation/stronger-super/acts-and-regulations'
                    },
                    text: '• Superannuation Act '
               }
          },
          isCalculate: false,
          path:'/',
     },
]

export { resourcesData };