import { Col, Container, Row } from "react-bootstrap"
import { SoftwareSpecializationData } from "./data"
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

interface SoftwareSpecializationProps {
     softwareSpecializationsData: SoftwareSpecializationData[];
}
const SoftwareSpecialization = ({ softwareSpecializationsData }: SoftwareSpecializationProps) => {
     return (
          <section className="py-6">
               <Container className="bg-soft-white border p-5 rounded-lg" data-aos="fade-up" data-aos-duration="700">
                    <h4 className="display-5 fw-medium mb-2">Software Specialization</h4>
                    <Row className="align-items-center">
                         <Col lg={8}>
                              <ul className="list-inline mb-0 mt-4">
                                   {softwareSpecializationsData.map((softwareSpecialization, index) => {
                                        return (
                                             <li className="list-inline-item text-center me-3 me-sm-5" key={index.toString()}>
                                                  <span className="icon icon-sm text-secondary">
                                                       <img src={softwareSpecialization.softwareIcon} width={50} height={50} />
                                                  </span>
                                                  <h6 className="mb-lg-0">{softwareSpecialization.softwareName}</h6>
                                             </li>
                                        );
                                   })}
                              </ul>
                         </Col>
                         <Col lg={4}>
                              <div className="text-lg-center mt-5 mt-lg-0">
                                   <Link to="#" className="btn btn-primary rounded">
                                        Get started with Ledgerize
                                        <FeatherIcon icon="arrow-right" className="icon-xs ms-1" />
                                   </Link>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </section>
     )
}

export default SoftwareSpecialization