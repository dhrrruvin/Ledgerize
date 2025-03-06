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
                         <FeatherIcon icon="chevron-down" className="text-white icon-xs accordion-arrow" />
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
                              <h1 className="display-5 fw-medium">Essential Tools and Government Resources</h1>
                              <p className="text-muted mx-auto">
                                   Explore a collection of helpful calculators, official websites, and other essential resources to assist with your needs.
                              </p>
                         </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                         <Col md={10} lg={8}>
                              <div id="faqContent">
                                   <Accordion defaultActiveKey="" className="custom-accordionwitharrow" id="resourceAccordion">
                                        {(resourcesData || []).map((resource, index) => {
                                             return (
                                                  <Card className="my-2" key={index.toString()}>
                                                       <CustomToggle
                                                            eventKey={String(index)}
                                                            containerClass="my-1 p-2"
                                                            linkClass="bg-primary"
                                                       >
                                                            {resource.title}
                                                       </CustomToggle>
                                                       <Accordion.Collapse eventKey={String(index)}>
                                                            <Card.Body className="pt-3">
                                                                 {
                                                                      resource?.description && resource?.description.length > 1 ? (
                                                                           resource?.description.map((desc) => (
                                                                                <>
                                                                                     <a href={desc.linkId} rel="noreferrer" target="_blank">{desc.text}</a><br />
                                                                                </>
                                                                           ))
                                                                      ) : (
                                                                           resource.description?.map((desc) => (
                                                                                <>
                                                                                     <span>{desc.text}</span>
                                                                                     {resource.isCalculate ? (
                                                                                          <div className="d-flex justify-content-end">
                                                                                               <Link to={desc.linkId} className="btn btn-primary text-white">Calculate</Link>
                                                                                          </div>
                                                                                     ) : (
                                                                                          <a href={desc.linkId} rel="noreferrer" target="_blank">Click Here</a>
                                                                                     )}
                                                                                </>
                                                                           )))

                                                                 }
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