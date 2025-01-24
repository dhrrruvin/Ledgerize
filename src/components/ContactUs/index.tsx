import FeatherIcon from "feather-icons-react"
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap"
import FormInput from "../Form/FormInput"
import { Link } from "react-router-dom"

interface ContactUsProps {
     ref: React.RefObject<HTMLDivElement | null>;
}

const ContactUs = ({ ref }: ContactUsProps) => {
     return (
          <>
               <section ref={ref} id="contactus" className="section pt-lg-8 pb-lg-4 pt-4 pb-3 position-relative">
                    <Container className="testimonial">
                         <Row className="align-items-center">
                              <Col lg={6} data-aos="fade-right" data-aos-duration="600">
                                   <h1 className="display-5 fw-medium mt-0">Get started today</h1>
                                   <p>
                                        "Ledgerize  Your Trusted Offshore Partner for Professional Bookkeeping Services, Tailored to Meet the Unique Accounting Needs of Your Business or Family.
                                   </p>
                                   <p>
                                        Share your requirements and concerns with us, and we’ll provide a free quote for regular or one-time services. Contact us today!
                                   </p>
                                   <div className="mt-5 text-muted">Email me at</div>
                                   <div>
                                        <h4 className="mt-0 fw-medium">
                                             <Link
                                                  to="#"
                                                  onClick={() => (window.location.href = 'mailto:ledgerize@domain.com')}
                                             >
                                                  ledgerize@domain.com
                                             </Link>
                                        </h4>
                                   </div>
                                   <div className="mt-5 text-muted">Social</div>
                                   <ul className="list-inline mt-1">
                                        <li className="list-inline-item me-3">
                                             <Link to="#">
                                                  <FeatherIcon icon="facebook" className="icon-xs icon-dual" />
                                             </Link>
                                        </li>
                                        <li className="list-inline-item me-3">
                                             <Link to="#">
                                                  <FeatherIcon icon="twitter" className="icon-xs icon-dual" />
                                             </Link>
                                        </li>
                                        <li className="list-inline-item me-3">
                                             <Link to="#">
                                                  <FeatherIcon icon="linkedin" className="icon-xs icon-dual" />
                                             </Link>
                                        </li>
                                        <li className="list-inline-item me-3">
                                             <Link to="#">
                                                  <FeatherIcon icon="instagram" className="icon-xs icon-dual" />
                                             </Link>
                                        </li>
                                   </ul>
                              </Col>
                              <Col lg={6} data-aos="fade-left" data-aos-duration="900">
                                   <Row>
                                        <Col lg={6}>
                                             <FormInput
                                                  type="text"
                                                  name="name"
                                                  placeholder="Your Name"
                                                  containerClass={'mb-3'}
                                             />
                                        </Col>
                                        <Col lg={6}>
                                             <FormInput
                                                  type="text"
                                                  name="cnumber"
                                                  placeholder="Contact Number"
                                                  containerClass={'mb-3'}
                                             />
                                        </Col>
                                   </Row>
                                   <Row>
                                        <Col lg={6}>
                                             <FormInput
                                                  type="email"
                                                  name="email"
                                                  placeholder="Your email"
                                                  containerClass={'mb-3'}
                                             />
                                        </Col>
                                        <Col lg={6}>
                                             <Dropdown className="">
                                                  <Dropdown.Toggle id="dropdown-basic" variant="outline" className="w-100 d-flex justify-content-between dropdown-outline-secondary">
                                                       Nature of work
                                                       <FeatherIcon icon="chevron-down" className="icon-xs" />
                                                  </Dropdown.Toggle>
                                                  <Dropdown.Menu className="w-100">
                                                       <Dropdown.Item eventKey="1">Virtual Bookkeeping</Dropdown.Item>
                                                       <Dropdown.Item eventKey="2">Setup Xero / QBO / MYOB</Dropdown.Item>
                                                       <Dropdown.Item eventKey="2">Accounts Payable</Dropdown.Item>
                                                       <Dropdown.Item eventKey="2">Accounts Receivables</Dropdown.Item>
                                                       <Dropdown.Item eventKey="2">Reconciliation</Dropdown.Item>
                                                       <Dropdown.Item eventKey="2">Financial Reporting</Dropdown.Item>
                                                       <Dropdown.Item eventKey="2">Payroll Management</Dropdown.Item>
                                                  </Dropdown.Menu>
                                             </Dropdown>
                                        </Col>
                                   </Row>
                                   <Row>
                                        <Col>
                                             <FormInput
                                                  type="text"
                                                  name="website/company"
                                                  placeholder="Website / Company"
                                                  containerClass={'mb-3'}
                                             />
                                        </Col>
                                   </Row>

                                   <FormInput
                                        type="textarea"
                                        name="message"
                                        placeholder="Add your work requirement"
                                        rows={5}
                                        containerClass={'mb-3'}
                                   />
                                   <div className="mb-0 text-end">
                                        <Button variant="primary" type="submit">
                                             Submit
                                        </Button>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </section>
          </>
     )
}

export default ContactUs