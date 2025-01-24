import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface Props {
     // Add any props you need here
}

const Footer: React.FC<Props> = () => {
     return (
          <footer>
               <section className="section pt-4 pb-3 position-relative">
                    <Container>
                         <Row className="align-items-center border-top border-light pt-4">
                              <Col className="text-center">
                                   <ul className="list-inline list-with-separator">
                                        <li className="list-inline-item me-0">
                                             <Link to="/home/aboutus">About Us</Link>
                                        </li>
                                        <li className="list-inline-item me-0">
                                             <Link to="/home/services">Services</Link>
                                        </li>
                                        <li className="list-inline-item me-0">
                                             <Link to="/home/resources">Resources</Link>
                                        </li>
                                        <li className="list-inline-item me-0">
                                             <Link to="/home/contactus">Contact Us</Link>
                                        </li>
                                   </ul>
                                   <p className="mt-2">
                                        {new Date().getFullYear()}© Ledgerize. All rights reserved.
                                   </p>
                              </Col>
                         </Row>
                    </Container>
               </section>
          </footer>
     )
}

export default Footer