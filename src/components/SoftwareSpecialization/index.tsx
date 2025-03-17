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
          // <section ref={ref} id="specialization" className="py-6 px-3">
          //      <Container className="bg-soft-white border p-5 rounded-lg" data-aos="fade-up" data-aos-duration="700">
          //           <Row className="align-items-center">
          //                <Col lg={8}>
          //                     <h4 className="display-5 fw-medium mb-2">Software Specialization</h4>
          //                     <ul className="list-inline my-4">
          //                          {softwareSpecializationsData.map((softwareSpecialization, index) => {
          //                               return (
          //                                    <li className="list-inline-item text-center" key={index.toString()}>
          //                                         <span className="icon icon-sm text-secondary">
          //                                              <img src={softwareSpecialization.softwareIcon} alt="" width={50} height={50} />
          //                                         </span>
          //                                         <h6 className="mb-lg-0">{softwareSpecialization.softwareName}</h6>
          //                                    </li>
          //                               );
          //                          })}
          //                     </ul>
          //                     <h4 className="display-5 fw-medium mb-2">Certifications</h4>
          //                     {/* <ul className="list-inline my-4">
          //                          {certificationData.map((certification, index) => {
          //                               return (
          //                                    <li className="list-inline-item" key={index.toString()}>
          //                                         <span className="icon icon-sm text-secondary">
          //                                              <img src={certification.certificationIcon} alt="" width={50} height={50} />
          //                                         </span>
          //                                         <h6 className="mb-lg-0">{certification.certificationName}</h6>
          //                                    </li>
          //                               );
          //                          })}
          //                     </ul> */}
          //                </Col>
          //                <Col lg={4}>
          //                     <div className="text-lg-center mt-5 mt-lg-0">
          //                          <Link to="#" className="btn btn-primary rounded">
          //                               Get started with Accledgwise
          //                               <FeatherIcon icon="arrow-right" className="icon-xs ms-1" />
          //                          </Link>
          //                     </div>
          //                </Col>
          //           </Row>
          //      </Container>
          // </section>
          <section ref={ref} id="specialization" className="position-relative overflow-hidden py-3 px-3 features-3">
               <Container>
                    <div className="mb-lg-0 my-4" data-aos="fade-right" data-aos-duration="600">
                         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <h1 className="display-5 fw-medium m-0">Software Specialization</h1>
                              <div className="text-lg-center mt-lg-0">
                                   <Link to="#" className="btn btn-primary rounded">
                                        Get started with Accledgwise
                                        <FeatherIcon icon="arrow-right" className="icon-xs ms-1" />
                                   </Link>
                              </div>
                         </div>
                         <Row className="align-items-center my-5">
                              {softwareSpecializationsData.map((softwareSpecialization, index) => {
                                   return (
                                        <Col xs={6} sm={4} lg={3} style={{ textAlign: 'center' }}>
                                             <span className="icon icon-sm text-secondary">
                                                  <img src={softwareSpecialization.softwareIcon} alt="" width={120} height={120} />
                                             </span>
                                             <h6 className="mb-lg-0">{softwareSpecialization.softwareName}</h6>
                                        </Col>
                                   );
                              })}
                         </Row>
                    </div>
                    <div className="mb-lg-0 my-4" data-aos="fade-right" data-aos-duration="600">
                         <h1 className="display-5 fw-medium mb-2">Certifications</h1>
                         <Row className="align-items-center my-5">
                              {certificationData.map((certification, index) => {
                                   return (
                                        <Col xs={6} sm={4} lg={3} style={{ textAlign: 'center' }}>
                                             <span className="icon icon-sm text-secondary">
                                                  <img src={certification.certificationIcon} alt="" width={120} height={120} />
                                             </span>
                                        </Col>
                                   );
                              })}
                         </Row>
                    </div>
               </Container>
          </section>
     )
}

export default SoftwareSpecialization