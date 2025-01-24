import FeatherIcon from "feather-icons-react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Career = () => {
     return (
          <section className="hero-4 pb-5 pt-7 py-sm-7">
               <Container>
                    <Row className="align-items-center justify-content-center">
                         <Col>
                              <h1 className="hero-title mt-0">
                                   Let's work <span className="highlight highlight-warning d-inline-block">together</span>.
                                   Join Ledgerize!
                              </h1>
                              <p className="fs-16 text-muted pt-3 w-75">
                                   We're always open for new creative, analytical and technical minds to join our team. Search
                                   for the suitable job.
                              </p>
                              <div className="pt-4 pb-md-5 mb-md-4">
                                   <Link to="#" className="btn btn-secondary mb-2" data-toggle="smooth-scroll">
                                        View All Openings
                                        <FeatherIcon className="icon-xxs ms-2" icon="arrow-right" />
                                   </Link>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </section>
     )
}

export default Career