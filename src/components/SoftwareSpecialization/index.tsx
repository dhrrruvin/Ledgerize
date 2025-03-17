import { Col, Container, Row } from "react-bootstrap"
import { CertificationsData, SoftwareSpecializationData } from "./data"
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

interface SoftwareSpecializationProps {
     softwareSpecializationsData: SoftwareSpecializationData[];
     certificationData: CertificationsData[];
     ref: React.RefObject<HTMLDivElement | null>;
}
const SoftwareSpecialization = ({ softwareSpecializationsData, certificationData, ref }: SoftwareSpecializationProps) => {
     return (
          <section ref={ref} id="softwareSpecialization" className="py-6 px-3">
               <Container className="bg-soft-white border p-5 rounded-lg" data-aos="fade-up" data-aos-duration="700">
                    <Row className="align-items-center">
                         <Col lg={8}>
                              <h4 className="display-5 fw-medium mb-2">Software Specialization</h4>
                              <ul className="list-inline my-4">
                                   {softwareSpecializationsData.map((softwareSpecialization, index) => {
                                        return (
                                             <li className="list-inline-item text-center" key={index.toString()}>
                                                  <span className="icon icon-sm text-secondary">
                                                       <img src={softwareSpecialization.softwareIcon} alt="" width={50} height={50} />
                                                  </span>
                                                  <h6 className="mb-lg-0">{softwareSpecialization.softwareName}</h6>
                                             </li>
                                        );
                                   })}
                              </ul>
                              <h4 className="display-5 fw-medium mb-2">Certifications</h4>
                              <ul className="list-inline my-4">
                                   {certificationData.map((certification, index) => {
                                        return (
                                             <li className="list-inline-item text-center" key={index.toString()}>
                                                  <span className="icon icon-sm text-secondary">
                                                       <img src={certification.certificationIcon} alt="" width={50} height={50} />
                                                  </span>
                                                  <h6 className="mb-lg-0">{certification.certificationName}</h6>
                                             </li>
                                        );
                                   })}
                              </ul>
                         </Col>
                         <Col lg={4}>
                              <div className="text-lg-center mt-5 mt-lg-0">
                                   <Link to="#" className="btn btn-primary rounded">
                                        Get started with Accledgwise
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