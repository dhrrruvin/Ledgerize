import FeatherIcon from "feather-icons-react";
import { Card, Col, Container, Row } from "react-bootstrap"
import { ServiceData } from "./data";

interface ServicesProps {
     servicesData: ServiceData[];
     ref: React.RefObject<HTMLDivElement | null>;
};

const Services = ({ servicesData, ref }: ServicesProps) => {
     return (
          <section ref={ref} className="service_section py-6 px-0">
               <Container>
                    <h1 className="service text-center text-info">What We Do</h1>
                    <div className="bottom_border mt-3 mx-auto"></div>
                    <Row className="service_container mt-5 w-100">
                         {(servicesData || []).map((service, index) => {
                              return (
                                   <Col
                                        lg={3} md={4} sm={12}
                                        className="service_content text-center text-white mt-3"
                                        key={index.toString()}
                                        data-aos="fade-up" data-aos-duration="600"
                                   >
                                        <div className="service_icon mt-5 mb-4" style={{ borderRadius: '50%', padding: '16px', border: '2px solid white', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                             <FeatherIcon icon={service.icon} />
                                        </div>
                                        <h3 className="service_title text-white my-2">{service.title}</h3>
                                        <p className="service_text">
                                             {service.description}
                                        </p>
                                   </Col>
                              );
                         })}
                    </Row>

               </Container>
          </section >
     )
}

export default Services