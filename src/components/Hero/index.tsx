import { Col, Container, Row } from "react-bootstrap"

// images
import hero from "../../assets/images/hero/hero-1.svg";
import { Link } from "react-router-dom";

const Hero = () => {
     return (
          <section className="hero py-5 position-relative hero-with-shapes">
               <div className="shape1"></div>
               <div className="shape2"></div>
               <div className="shape3"></div>
               <Container>
                    <Row className="align-items-center row-cols-1 row-cols-md-2 justify-content-center justify-content-md-start mx-sm-2">
                         <Col lg={5} md={6} xs={12} className="mb-4 mb-md-0 text-center text-md-start px-sm-5" style={{ display: 'flex', alignItems: 'center' }}>
                              <img src={hero} alt="Hero" className="img-fluid hero-image" />
                         </Col>
                         <Col
                              lg={{ offset: 1, span: 6 }}
                              md={6}
                              sm={12}
                              style={{ overflowX: 'hidden' }}
                         >
                              <h1
                                   data-aos="fade-left"
                                   data-aos-duration="2000"
                                   className="hero-title text-center">
                                   Accledgwise Bookkeeping LLP
                              </h1>
                              <p
                                   data-aos="fade-left"
                                   data-aos-duration="2000"
                                   className="hero-desc mt-3 fs-24 text-secondary"
                              >
                                   <i>
                                        "Your Trusted Offshore Partner for Professional Bookkeeping and Payroll Services"
                                   </i>
                              </p>

                              <div className="pt-3 pt-sm-5 text-center">
                                   <Link to="/home/contactus" className="btn btn-primary me-2" data-toggle="smooth-scroll">
                                        <span className="me-2">Get Started with Accledgwise</span>
                                   </Link>
                              </div>
                         </Col>
                    </Row>
               </Container>
               <div className="shape bottom">
                    <svg width="1440px" height="40px" viewBox="0 0 1440 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
                         <g id="shape-b" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="curve" fill="#fff">
                                   <path d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z" id="Path"></path>
                              </g>
                         </g>
                    </svg>
               </div>
          </section>
     )
}

export default Hero