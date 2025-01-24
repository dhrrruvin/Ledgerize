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
               <Container className="">
                    <Row>
                         <Col lg={5}>
                              <div
                                   className="img-container text-center text-lg-end"
                                   data-aos="fade-up"
                                   data-aos-duration="500"
                              >
                                   <img src={hero} alt="Hero" className="img-fluid" />
                              </div>
                         </Col>
                         <Col
                              lg={{ offset: 1, span: 6 }}
                              data-aos="fade-left"
                              data-aos-duration="2000"
                         >
                              <h1 className="hero-title text-center">
                                   Ledgerize
                              </h1>
                              <p className="hero-desc mt-3 fs-24 text-secondary">
                                   <i>
                                        "Your Trusted Offshore Partner for Professional Bookkeeping and Payroll Services"
                                   </i>
                              </p>

                              <div className="pt-3 pt-sm-5 text-center">
                                   <Link to="/home/contactus" className="btn btn-primary me-2" data-toggle="smooth-scroll">
                                        <span className="me-2">Get Started with Ledgerize</span>
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