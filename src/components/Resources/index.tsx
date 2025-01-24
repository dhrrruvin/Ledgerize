import { Accordion, AccordionContext, Badge, Card, Col, Container, Row, useAccordionButton } from "react-bootstrap"
import { ResourceData } from "./data"
import FeatherIcon from "feather-icons-react"
import classNames from "classnames"
import { useContext } from "react"
import { Link } from "react-router-dom"

interface ResourcesProps {
     resourcesData: ResourceData[];
     ref: React.RefObject<HTMLDivElement | null>;
}

type CustomToggleProps = {
     children: React.ReactNode;
     eventKey: string;
     containerClass: string;
     linkClass: string;
     callback?: (eventKey: string) => void;
}

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
     const { activeEventKey } = useContext(AccordionContext);

     const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

     const isCurrentEventKey = activeEventKey === eventKey;

     return (
          <div
               // to="/home/resources"
               className={classNames(linkClass, {
                    collapsed: !isCurrentEventKey,
               })}
               onClick={decoratedOnClick}
          >
               <Card.Header>
                    <h5 className={containerClass}>
                         {children}
                         <FeatherIcon icon="chevron-down" className="icon-xs accordion-arrow" />
                    </h5>
               </Card.Header>
          </div>
     );
};

const Resources = ({ resourcesData, ref }: ResourcesProps) => {

     return (
          <section id="resources" ref={ref} className="section py-6 pt-sm-6 pb-sm-7 position-relative bg-light">
               <div className="divider top d-none d-sm-block"></div>
               <Container data-aos="fade-up" data-aos-duration="600">
                    <Row>
                         <Col className="text-center">
                              <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                                   Resources
                              </Badge>
                              <h1 className="display-5 fw-medium">Empower Your Business with Expert Insights</h1>
                              <p className="text-muted mx-auto">
                                   Explore Our Free Resources to Stay Ahead in Financial Management and Business Growth
                              </p>
                         </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                         <Col md={10} lg={8}>
                              <div id="faqContent">
                                   <Accordion defaultActiveKey="" className="custom-accordionwitharrow" id="resourceAccordion">
                                        {(resourcesData || []).map((resource, index) => {
                                             return (
                                                  <Card className="my-2 p-2 border rounded-lg" key={index.toString()}>
                                                       <CustomToggle
                                                            eventKey={String(index)}
                                                            containerClass="my-1 fw-medium text-white"
                                                            linkClass="text-dark"
                                                       >
                                                            {resource.title}
                                                       </CustomToggle>
                                                       <Accordion.Collapse eventKey={String(index)}>
                                                            <Card.Body className="text-white pt-1">
                                                                 {resource.discription ? (
                                                                      <>
                                                                           <a href={resource.discription.description1?.link?.linkId} className="text-white" target="_blank">{resource.discription.description1?.text}</a><br />
                                                                           <a href={resource.discription.description2?.link?.linkId} className="text-white" target="_blank">{resource.discription.description2?.text}</a><br />
                                                                           <a href={resource.discription.description3?.link?.linkId} className="text-white" target="_blank">{resource.discription.description3?.text}</a><br />
                                                                           <a href={resource.discription.description4?.link?.linkId} className="text-white" target="_blank">{resource.discription.description4?.text}</a>
                                                                      </>

                                                                 ) : (
                                                                      <p>{resource.text}</p>
                                                                 )}
                                                                 <div className="d-flex justify-content-end">
                                                                      {resource.isCalculate ? (
                                                                           <Link to={resource.path} className="btn btn-light">Calculate</Link>
                                                                      ) : (
                                                                           <span></span>
                                                                      )}
                                                                 </div>
                                                            </Card.Body>
                                                       </Accordion.Collapse>
                                                  </Card>
                                             );
                                        })}
                                   </Accordion>
                              </div>
                         </Col>
                    </Row>
               </Container>
               <div className="divider bottom d-none d-sm-block"></div>
          </section>
     )
}

export default Resources