import { Card, Col, Container, Row } from "react-bootstrap"
import FeatherIcon from "feather-icons-react"

// images
import whyLedgerize from '../../assets/images/about/why.svg';
import coreValue from '../../assets/images/about/core.svg';

// data
import { CoreValueData, WhyLedgerizeData } from "./data"

interface LedgerizeProps {
     whyLedgerizesData: WhyLedgerizeData[];
     coreValuesData: CoreValueData[];
     ref: React.RefObject<HTMLDivElement | null>;
}

const AboutUs = ({ whyLedgerizesData, coreValuesData, ref }: LedgerizeProps) => {
     return (
          <>
               {/* who we are */}
               <section id="aboutUs" ref={ref} className="position-relative overflow-hidden pt-6 pb-3 features-3">
                    <Container>
                         <Row className="">
                              <Col md={12}>
                                   <div className="mb-lg-0 mb-4" data-aos="fade-up" data-aos-duration="200">
                                        <h1 className="display-5 fw-medium mb-2">About Us</h1>
                                        <h3 className="display-5 fw-medium mb-2">Who we are!</h3>
                                        <h5 className="fw-normal text-muted mx-auto mt-0 pb-2">
                                             Accledgwise is a dynamic startup founded by experienced professionals with over 15 years of expertise in bookkeeping,
                                             accounts preparation, finalization, and payroll services. The firm specializes in offering tailored bookkeeping,
                                             BAS preparation, and other financial solutions specifically for Australian businesses at competitive prices.
                                        </h5>
                                        <h5 className="fw-normal text-muted mx-auto mt-0 pb-2">
                                             Co-founder Mr. Vinay Thakkar brings over 10 years of experience, focusing on Australian businesses for the past 5 years.
                                             Supported by a skilled team of two chartered accountants, each with over 15 years of experience. The team is also well
                                             equipped with accounting software / application which are commonly used which includes XERO, MYOB, Quick
                                             books, DEXT etc. The team is compatible enough to handle all the complexity involved during the services.
                                        </h5>
                                        <h5 className="fw-normal text-muted mx-auto mt-0 pb-2">
                                             Accledgwise is dedicated to delivering a premium service experience focused on professionalism, ethical standards,
                                             data security, and client confidentiality. We provide personalized financial solutions tailored to each business,
                                             ensuring high quality and timely results. Our goal is to build long-term, trusted relationships that help businesses
                                             streamline operations and save time. By leveraging expertise and advanced technologies, we align our solutions with
                                             your business objectives, offering reliable, efficient, and cost-effective financial services to drive your success
                                             in a competitive environment.
                                        </h5>
                                        <h3 className="display-5 fw-medium mb-2">Our Vision</h3>
                                        <h5 className="fw-normal text-muted mx-auto mt-0 pb-2">
                                             To be the preferred choice for comprehensive bookkeeping and Payroll services, delivering excellence through experienced
                                             and tech-savvy professionals.
                                        </h5>
                                        <h3 className="display-5 fw-medium mb-2">Our Mission</h3>
                                        <h5 className="fw-normal text-muted mx-auto mt-0 pb-2">
                                             We are committed to delivering high-quality bookkeeping services, focusing on ethics, client satisfaction, and innovation,
                                             while building long-term relationships through an integrated approach that meets all client needs.
                                        </h5>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </section>

               {/* why accledgwise */}
               <section className="position-relative overflow-hidden py-3 features-3">
                    <Container>
                         <Row className="align-items-center">
                              <Col lg={6}>
                                   <div className="mb-lg-0 mb-4" data-aos="fade-right" data-aos-duration="600">
                                        <h1 className="display-5 fw-medium mb-2">Why Accledgwise?</h1>
                                        <h5 className="fw-normal text-muted mx-auto mt-0 mb-4 pb-3">
                                             Choosing Accledgwise means choosing a partner committed to your financial success.
                                        </h5>
                                        <Row className="d-block d-lg-none">
                                             <Col className="px-2 px-xs-6 px-sm-6 px-md-10">
                                                  <img
                                                       src={whyLedgerize}
                                                       alt="desktop1"
                                                       data-aos="fade-left"
                                                       data-aos-duration="700"
                                                  />
                                             </Col>
                                        </Row>
                                        <Row className="mt-5">
                                             {(whyLedgerizesData || []).map((whyLedgerize, index) => {
                                                  return (
                                                       <Col md={6} key={index.toString()} data-aos="fade-right" data-duration="600">
                                                            <Card className="shadow-sm">
                                                                 <Card.Body className="p-2">
                                                                      <div className="d-flex align-items-center">
                                                                           <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 flex-shrink-0">
                                                                                <FeatherIcon icon={whyLedgerize.icon} className="icon-dual-primary" />
                                                                           </span>
                                                                           <div className="flex-grow-1">
                                                                                <h5 className="m-0">{whyLedgerize.title}</h5>
                                                                           </div>
                                                                      </div>
                                                                 </Card.Body>
                                                            </Card>
                                                       </Col>
                                                  );
                                             })}
                                        </Row>
                                   </div>
                              </Col>
                              <Col lg={{ span: 5, offset: 1 }} className="d-none d-lg-block">
                                   <img
                                        src={whyLedgerize}
                                        alt="desktop1"
                                        data-aos="fade-left"
                                        data-aos-duration="700"
                                   />
                              </Col>
                         </Row>
                    </Container>
               </section>

               {/* our core values */}
               <section className="position-relative overflow-hidden py-3 features-3">
                    <Container>
                         <Row className="">
                              <Col lg={5} className="d-none d-lg-block">
                                   <img
                                        src={coreValue}
                                        alt="desktop1"
                                        data-aos="fade-right"
                                        data-aos-duration="700"
                                   />
                              </Col>
                              <Col lg={{ span: 6, offset: 1 }}>
                                   <div className="mb-lg-0 mb-4" data-aos="fade-left" data-aos-duration="600">
                                        <h1 className="display-5 fw-medium mb-2">Our Core Values</h1>
                                        <h5 className="fw-normal text-muted mx-auto mt-0 mb-4 pb-3">
                                             our core values define who we are and how we serve our clients
                                        </h5>
                                        <Row className="d-block d-lg-none">
                                             <Col className="px-2 px-xs-6 px-sm-6 px-md-10">
                                                  <img
                                                       src={coreValue}
                                                       alt="desktop1"
                                                       data-aos="fade-left"
                                                       data-aos-duration="700"
                                                  />
                                             </Col>
                                        </Row>
                                        <Row className="mt-5">
                                             {(coreValuesData || []).map((coreValue, index) => {
                                                  return (
                                                       <Col md={6} key={index.toString()} data-aos="fade-left" data-duration="600">
                                                            <Card className="shadow-sm">
                                                                 <Card.Body className="p-2">
                                                                      <div className="d-flex align-items-center">
                                                                           <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 flex-shrink-0">
                                                                                <FeatherIcon icon={coreValue.icon} className="icon-dual-primary" />
                                                                           </span>
                                                                           <div className="flex-grow-1">
                                                                                <h5 className="m-0">{coreValue.title}</h5>
                                                                           </div>
                                                                      </div>
                                                                 </Card.Body>
                                                            </Card>
                                                       </Col>
                                                  );
                                             })}
                                        </Row>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </section>
          </>
     )
}

export default AboutUs