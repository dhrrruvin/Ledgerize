export interface ResourceData{
     title: string;     
     description?: Array<Description>
     isCalculate: boolean;
}

interface Description {
     linkId?: any;
     text: string;
}

const resourcesData: ResourceData[] = [
     {
          title: 'EMI Calculator',
          description: [
               {
                    text: 'EMI Calculator is an online tool that helps you to calculate the EMI of your Loan. It is an easy to use tool, which compute EMI by using following details: loan amount, interest rate, loan tenure. You can change the inputs to know the different EMI amount and It saves you from a confusing manual calculation process. ',
                    linkId: '/home/resources/EMICalculator'
               }
          ],
          isCalculate: true,
     },
     {
          title: 'Super Guarantee Contributions Calculator',
          description: [
               {
                    linkId: 'https://www.ato.gov.au/single-page-applications/calculatorsandtools?anchor=SuperGuaranteeContributions&anchor=SuperGuaranteeContributions/questions&anchor=SuperGuaranteeContributions/questions&anchor=SuperGuaranteeContributions/questions#SuperGuaranteeContributions/questions',
                    text: 'Under Australian legislation, every employer must pay certain amount of your salary into a superannuation fund. It’s designed to help you build up and save for retirement. Use this tool to work out how much super you need to contribute for your eligible employees.'
               }
          ],
          isCalculate: true,
     },
     {
          title: 'Tax Withhelds for Individuals Calculator',
          description: [
               {
                    linkId: 'https://www.ato.gov.au/single-page-applications/calculatorsandtools?anchor=TWC#TWC/questions',
                    text: 'Use this tool to estimate the federal income tax you want your employer to withhold from your paycheck. This is tax withholding. See how your withholding affects your refund, take-home pay or tax due.'
               }
          ],
          isCalculate: true,
     },
     {
          title: 'Government Website',
          description: [
               {
                    linkId:'https://www.ato.gov.au/',
                    text: '•	ATO (Australian Tax Office) -  lodge GST returns, Income tax returns, IAS, Superannuation '
               },
               {
                    linkId: 'https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/payroll-tax/lodge-and-pay-returns/annual-return/',
                    text: '•	Annual Revenue NSW - Lodge your annual return for payroll tax '
               },
               {
                    linkId: 'https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/payroll-tax/lodge-and-pay-returns/monthly-return',
                    text: '•	Monthly Revenue NSW - Calculate and pay your monthly payroll tax return '
               },
               {
                    linkId: 'https://qro.qld.gov.au/payroll-tax/returns/',
                    text: '•	Queensland Government - Lodging and paying payroll tax returns '
               }
          ],
          isCalculate: false,
     },
     {
          title: 'Act and Legislations reference',
          description: [
               {
                    linkId:'https://www.legislation.gov.au/C2004A00446/2014-01-01/text ',
                    text: '• GST Act 1999 '
               },
               {
                    linkId:'https://legislation.nsw.gov.au/view/whole/html/2002-12-12/act-1971-022#:~:text=An%20Act%20to%20impose%20a,and%20for%20purposes%20connected%20therewith',
                    text: '• Payroll tax act 1971 '
               },
               {
                    linkId:'https://treasury.gov.au/programs-and-initiatives-superannuation/stronger-super/acts-and-regulations',
                    text: '• Superannuation Act '

               }
          ],
          isCalculate: false,
     },
]

export { resourcesData };