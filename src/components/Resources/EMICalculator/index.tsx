import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import ContactUs from "../../ContactUs"
import Footer from "../../Footer"
import TopNav from "../../Navbar/TopNav"
import FeatherIcon from "feather-icons-react"
import { useCallback, useEffect, useRef, useState } from "react"
import Chart from "./Chart"

const EMICalculator = () => {

     const contactUsRef = useRef<HTMLDivElement | null>(null);

     const [loanAmount, setLoanAmount] = useState<number>(3000000);
     const [rateOfInterest, setRateOfInterest] = useState<number>(9);
     const [tenor, setTenor] = useState<number>(180);
     const [tenorUnit, setTenorUnit] = useState<'months' | 'years'>('months');
     const [emi, setEMI] = useState<number | null>(null);
     const [totalInterestPayemnt, setTotalInterestPayemnt] = useState<number | null>(null);
     const [totalPayment, setTotalPayment] = useState<number | null>(null)

     // function to calculate EMI
     const calculateEMI = useCallback(() => {
          const p = loanAmount;
          const r = rateOfInterest / 12 / 100;
          let n = tenor;

          // convert tenor to months is it is in years
          if (tenorUnit === 'years') {
               n = tenor * 12;
          }

          // emi formula
          const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

          // total payment
          const totalPaymentValue = (emiValue * n);

          // total interest payment
          const totalInterestPaymentValue = totalPaymentValue - p;

          // update state
          setEMI(emiValue);
          setTotalPayment(totalPaymentValue);
          setTotalInterestPayemnt(totalInterestPaymentValue);

     }, [loanAmount, rateOfInterest, tenor, tenorUnit]);

     useEffect(() => {
          calculateEMI();
          window.scrollTo(0, 0);
     }, []);

     return (
          <>
               <div className="header">
                    <TopNav />
               </div>

               <div id="emiCalculator">
                    <div className="py-0 py-sm-4 px-0 px-sm-3 bg-light min-vh-100">
                         <Container fluid>
                              <Row>
                                   <Col xl={4} md={6}>
                                        <Card>
                                             <Card.Body>
                                                  <Card.Title>EMI Calculator</Card.Title>

                                                  <Form.Label>Loan Amount</Form.Label>
                                                  <InputGroup className="mb-3">
                                                       <InputGroup.Text id="rsAddon">Rs.</InputGroup.Text>
                                                       <Form.Control
                                                            type="number"
                                                            name="lamount"
                                                            value={loanAmount}
                                                            defaultValue={10000}
                                                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                                                       />
                                                  </InputGroup>


                                                  <Form.Label>Rate of Interest [P.A.] is</Form.Label>
                                                  <InputGroup className="mb-3">
                                                       <InputGroup.Text id="rsAddon"><FeatherIcon icon="percent" /></InputGroup.Text>
                                                       <Form.Control
                                                            type="number"
                                                            name="roi"
                                                            value={rateOfInterest}
                                                            defaultValue={9}
                                                            onChange={(e) => setRateOfInterest(Number(e.target.value))}
                                                       />
                                                  </InputGroup>


                                                  <Form.Label>Tenor</Form.Label>
                                                  <InputGroup className="mb-3">
                                                       <InputGroup.Text id="rsAddon"><FeatherIcon icon="clock" /></InputGroup.Text>
                                                       <Form.Control
                                                            type="number"
                                                            name="month"
                                                            value={tenor}
                                                            defaultValue={180}
                                                            onChange={(e) => setTenor(Number(e.target.value))}
                                                       />
                                                  </InputGroup>

                                                  <Form.Label>Tenor Unit</Form.Label>
                                                  <div className="d-flex mb-3">
                                                       <Form.Check
                                                            type="radio"
                                                            name="tenorUnit"
                                                            label="Months"
                                                            value="months"
                                                            checked={tenorUnit === 'months'}
                                                            onChange={() => setTenorUnit('months')}
                                                            className="me-3"
                                                       />
                                                       <Form.Check
                                                            type="radio"
                                                            name="tenorUnit"
                                                            label="Years"
                                                            value="years"
                                                            checked={tenorUnit === 'years'}
                                                            onChange={() => setTenorUnit('years')}
                                                       />
                                                  </div>

                                                  {/* <Row>
                                                                 <Col lg={6}>
                                                                      <Form.Select value={tenorUnit} onChange={(e) => setTenorUnit(e.target.value)}>
                                                                           <option value="year">Year</option>
                                                                           <option value="month">Month</option>
                                                                      </Form.Select>
                                                                 </Col>
                                                                 <Col lg={6}>
                                                                      <InputGroup className="mb-3">
                                                                           <InputGroup.Text id="rsAddon"><FeatherIcon icon="clock" /></InputGroup.Text>
                                                                           <Form.Control
                                                                                type="number"
                                                                                name="month"
                                                                                value={tenor}
                                                                                defaultValue={180}
                                                                                onChange={(e) => setTenor(Number(e.target.value))}
                                                                           />
                                                                      </InputGroup>
                                                                 </Col>
                                                            </Row> */}

                                                  <Button
                                                       onClick={(e) => {
                                                            e.preventDefault();
                                                            calculateEMI();
                                                       }}>
                                                       Calculate
                                                  </Button>
                                             </Card.Body>
                                        </Card>
                                   </Col>
                                   <Col xl={4} md={6}>
                                        <Card className="d-flex align-items-center text-center">
                                             <Card.Body>
                                                  <div>
                                                       <p>Loan EMI</p>
                                                       {emi !== null && (
                                                            <h4>₹ {emi.toFixed(0)}</h4>
                                                       )}
                                                  </div>
                                                  <hr />
                                                  <div>
                                                       <p>Total Interest Payments</p>
                                                       {totalInterestPayemnt !== null && (
                                                            <h4>₹ {totalInterestPayemnt.toFixed(0)}</h4>
                                                       )}
                                                  </div>
                                                  <hr />
                                                  <div>
                                                       <p>Total of Payments <br />(principal + Interest)</p>
                                                       {totalPayment !== null && (
                                                            <h4>₹ {totalPayment.toFixed(0)}</h4>
                                                       )}
                                                  </div>
                                             </Card.Body>
                                        </Card>
                                   </Col>
                                   <Col xl={4}>
                                        <Card>
                                             <Card.Body>
                                                  {emi && totalInterestPayemnt !== null && (
                                                       <Chart loanAmount={Number(loanAmount.toFixed(0))} totalInterestPayemnt={Number(totalInterestPayemnt.toFixed(0))} />
                                                  )}
                                             </Card.Body>
                                        </Card>
                                   </Col>
                              </Row>
                              <Row>
                                   <Col data-aos="fade-right" data-aos-duration="600">
                                        <h1>Reliable, Free and accurate EMI Calculate</h1>
                                        <p>
                                             An EMI (Equated Monthly Installment) calculator is a tool that helps you calculate the monthly payments you need to make towards a loan, such as a home loan, car loan, or personal loan. It takes into account the loan amount, interest rate, and loan tenure to provide an accurate estimate of your monthly payments. A reliable, free, and accurate EMI calculator is essential for financial planning and budgeting.
                                        </p>
                                        <h4>Key Features of a Reliable EMI Calculator</h4>
                                        <ul>
                                             <li>Accuracy</li>
                                             <li>Free to Use</li>
                                             <li>User - Friendly Interface</li>
                                             <li>Detailed Breakdown</li>
                                             <li>Flexibility</li>
                                             <li>Mobile and Web Compatibility</li>
                                        </ul>
                                   </Col>
                              </Row>
                         </Container>
                    </div>
               </div >

               <ContactUs ref={contactUsRef} />
               <Footer />
          </>
     )
}

export default EMICalculator