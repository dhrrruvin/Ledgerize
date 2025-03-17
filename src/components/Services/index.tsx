import FeatherIcon from "feather-icons-react";
import { Col, Container, Row } from "react-bootstrap"
import { ServiceData } from "./data";
import classNames from "classnames";

interface ServicesProps {
     servicesData: ServiceData[];
     ref: React.RefObject<HTMLDivElement | null>;
};

const Services = ({ servicesData, ref }: ServicesProps) => {
     return (
          <section ref={ref} id="services" className="section py-6 pt-sm-6 pb-sm-7 position-relative bg-light">
               <div className="divider top d-none d-sm-block"></div>
               <Container>
                    <Row className="justify-content-center">
                         <Col className="text-center">
                              <h1 className="display-5 fw-semibold">What We Do</h1>
                         </Col>
                    </Row>
                    <Row className="pt-5">
                         {(servicesData || []).map((service, index) => {
                              return (
                                   <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                                        <div className="service">
                                             <div className="service-item">
                                                  <div className="side side1">
                                                       <span
                                                            className={classNames(
                                                                 'bg-soft-' + service.variant,
                                                                 'text-' + service.variant,
                                                                 'avatar',
                                                                 'avatar-sm',
                                                                 'rounded-lg',
                                                                 'icon',
                                                                 'icon-with-bg',
                                                                 'icon-xs',
                                                                 'mx-auto',
                                                                 'mt-3',
                                                            )}
                                                       >
                                                            <FeatherIcon
                                                                 icon={service.icon}
                                                                 className={classNames('icon-dual-' + service.variant)}
                                                            />
                                                       </span>
                                                       <h3 className="text-white">{service.title}</h3>
                                                  </div>
                                                  <div className="side side2" style={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>
                                                       <p className="text-white mb-0" style={{ whiteSpace: 'break-spaces' }}>{service.description}</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </Col>
                              )
                         })}
                    </Row>

                    {/* <Row className="pt-5 service">
                         {(servicesData || []).map((service, index) => {
                              return (
                                   <Col lg={4} md={6} key={index.toString()}>
                                        <Card
                                             className="border-0 shadow-none service-item"
                                             data-aos="fade-up"
                                             data-aos-duration="500"
                                        >
                                             <Card.Body>
                                                  <div className="d-flex">
                                                       <span
                                                            className={classNames(
                                                                 'bg-soft-' + service.variant,
                                                                 'text-' + service.variant,
                                                                 'avatar',
                                                                 'avatar-sm',
                                                                 'rounded-lg',
                                                                 'icon',
                                                                 'icon-with-bg',
                                                                 'icon-xs',
                                                                 'me-3'
                                                            )}
                                                       >
                                                            <FeatherIcon
                                                                 icon={service.icon}
                                                                 className={classNames('icon-dual-' + service.variant)}
                                                            />
                                                       </span>
                                                       <h4 className="text-white">{service.title}</h4>
                                                  </div>
                                                  <p className="mt-3 mb-2 text-white">{service.description}</p>
                                             </Card.Body>
                                        </Card>
                                   </Col>
                              );
                         })}
                    </Row> */}
               </Container>
               <div className="divider bottom d-none d-sm-block"></div>
          </section>
     )
}

export default Services
